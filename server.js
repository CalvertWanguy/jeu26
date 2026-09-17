const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const PORT = process.env.PORT || 3000;

app.prepare().then(() => {
  const server = express();
  const httpServer = http.createServer(server);

  const io = new Server(httpServer, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"]
    }
  });

  // Stockage de l'état des joueurs en ligne
  // key: socket.id => { id, nickname, gender, x, y, facing }
  const players = new Map();

  // Stockage des défis et parties de mini-jeux en cours
  // key: gameId => { id, type: 'rps'|'ttt', p1, p2, state, p1Choice, p2Choice, board, currentTurn }
  const activeMiniGames = new Map();

  io.on('connection', (socket) => {
    console.log(`[Socket] Nouveaux joueur connecté: ${socket.id}`);

    // 1. Rejoindre la ville virtuelle
    socket.on('join_game', (userData) => {
      const player = {
        id: socket.id,
        nickname: userData.nickname || 'Invité',
        gender: userData.gender || 'boy', // 'boy' ou 'girl'
        x: userData.x || 400 + Math.floor(Math.random() * 100 - 50),
        y: userData.y || 450 + Math.floor(Math.random() * 100 - 50),
        facing: 'down',
        status: 'online'
      };

      players.set(socket.id, player);

      // Envoyer l'état actuel de tous les joueurs au nouveau connecté
      socket.emit('current_players', Array.from(players.values()));

      // Informer les autres joueurs de l'arrivée du nouveau
      socket.broadcast.emit('player_joined', player);
      console.log(`[Game] ${player.nickname} (${player.gender}) a rejoint la ville.`);
    });

    // 2. Mise à jour de la position / déplacement du joueur
    socket.on('player_move', (moveData) => {
      const player = players.get(socket.id);
      if (player) {
        player.x = moveData.x;
        player.y = moveData.y;
        player.facing = moveData.facing || player.facing;

        // Broadcast la nouvelle position à tous les autres clients
        socket.broadcast.emit('player_moved', {
          id: socket.id,
          x: player.x,
          y: player.y,
          facing: player.facing
        });
      }
    });

    // 3. Message du Chat de proximité (rayon max ~200px)
    socket.on('send_chat_message', (msgText) => {
      const sender = players.get(socket.id);
      if (!sender || !msgText.trim()) return;

      const messageObj = {
        id: Math.random().toString(36).substr(2, 9),
        senderId: socket.id,
        senderName: sender.nickname,
        text: msgText.trim(),
        timestamp: Date.now()
      };

      // Calcul de proximité : envoyer uniquement aux joueurs proches (< 250px)
      players.forEach((p, pSocketId) => {
        const dist = Math.hypot(p.x - sender.x, p.y - sender.y);
        if (dist <= 250) {
          io.to(pSocketId).emit('receive_chat_message', messageObj);
        }
      });
    });

    // 4. Système de Défis Mini-jeux PvP (Morpion / Pierre-Papier-Ciseaux)
    socket.on('send_game_challenge', ({ targetPlayerId, gameType }) => {
      const challenger = players.get(socket.id);
      const target = players.get(targetPlayerId);

      if (challenger && target) {
        io.to(targetPlayerId).emit('received_game_challenge', {
          gameId: `game_${socket.id}_${targetPlayerId}_${Date.now()}`,
          challengerId: socket.id,
          challengerName: challenger.nickname,
          gameType: gameType // 'rps' ou 'ttt'
        });
      }
    });

    socket.on('accept_game_challenge', ({ gameId, challengerId, gameType }) => {
      const p1 = players.get(challengerId);
      const p2 = players.get(socket.id);

      if (!p1 || !p2) return;

      const gameSession = {
        gameId,
        gameType,
        p1: { id: p1.id, name: p1.nickname, choice: null, symbol: 'X' },
        p2: { id: p2.id, name: p2.nickname, choice: null, symbol: 'O' },
        board: Array(9).fill(null), // Pour Tic-Tac-Toe
        currentTurn: p1.id,
        status: 'playing'
      };

      activeMiniGames.set(gameId, gameSession);

      // Informer les deux joueurs que la partie commence
      io.to(p1.id).emit('mini_game_start', gameSession);
      io.to(p2.id).emit('mini_game_start', gameSession);
    });

    socket.on('decline_game_challenge', ({ challengerId }) => {
      io.to(challengerId).emit('challenge_declined', { declinerId: socket.id });
    });

    // Coups dans Pierre-Papier-Ciseaux (RPS)
    socket.on('play_rps_choice', ({ gameId, choice }) => {
      const session = activeMiniGames.get(gameId);
      if (!session || session.gameType !== 'rps') return;

      if (socket.id === session.p1.id) session.p1.choice = choice;
      if (socket.id === session.p2.id) session.p2.choice = choice;

      // Quand les 2 ont choisi
      if (session.p1.choice && session.p2.choice) {
        let result = 'draw';
        const c1 = session.p1.choice;
        const c2 = session.p2.choice;

        if (c1 === c2) {
          result = 'draw';
        } else if (
          (c1 === 'rock' && c2 === 'scissors') ||
          (c1 === 'paper' && c2 === 'rock') ||
          (c1 === 'scissors' && c2 === 'paper')
        ) {
          result = session.p1.id; // p1 gagne
        } else {
          result = session.p2.id; // p2 gagne
        }

        const payload = {
          gameId,
          p1Choice: c1,
          p2Choice: c2,
          winnerId: result
        };

        io.to(session.p1.id).emit('rps_result', payload);
        io.to(session.p2.id).emit('rps_result', payload);
        activeMiniGames.delete(gameId);
      }
    });

    // Coups dans Morpion (Tic-Tac-Toe)
    socket.on('play_ttt_move', ({ gameId, cellIndex }) => {
      const session = activeMiniGames.get(gameId);
      if (!session || session.gameType !== 'ttt' || session.status !== 'playing') return;
      if (session.currentTurn !== socket.id) return;
      if (session.board[cellIndex] !== null) return;

      const currentSymbol = socket.id === session.p1.id ? session.p1.symbol : session.p2.symbol;
      session.board[cellIndex] = currentSymbol;

      // Vérification du gagnant (3 en ligne)
      const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Lignes
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Colonnes
        [0, 4, 8], [2, 4, 6]             // Diagonales
      ];

      let winner = null;
      for (const [a, b, c] of winningCombos) {
        if (session.board[a] && session.board[a] === session.board[b] && session.board[a] === session.board[c]) {
          winner = socket.id;
          break;
        }
      }

      const isDraw = !winner && session.board.every(cell => cell !== null);

      if (winner || isDraw) {
        session.status = 'finished';
        const payload = {
          gameId,
          board: session.board,
          winnerId: winner,
          isDraw
        };
        io.to(session.p1.id).emit('ttt_game_over', payload);
        io.to(session.p2.id).emit('ttt_game_over', payload);
        activeMiniGames.delete(gameId);
      } else {
        // Passer au tour suivant
        session.currentTurn = socket.id === session.p1.id ? session.p2.id : session.p1.id;
        const updatePayload = {
          gameId,
          board: session.board,
          currentTurn: session.currentTurn
        };
        io.to(session.p1.id).emit('ttt_update', updatePayload);
        io.to(session.p2.id).emit('ttt_update', updatePayload);
      }
    });

    // 5. Déconnexion
    socket.on('disconnect', () => {
      const player = players.get(socket.id);
      if (player) {
        console.log(`[Game] ${player.nickname} s'est déconnecté.`);
        players.delete(socket.id);
        io.emit('player_left', socket.id);
      }
    });
  });

  // Routage Next.js par défaut pour toutes les pages
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  httpServer.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`🚀 Serveur Multijoueur démarré sur http://localhost:${PORT}`);
  });
});
