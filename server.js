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

  const players = new Map();
  const activeMiniGames = new Map();
  const activePrivateChats = new Map();

  // Gestion des Villages par tranches de 5 personnes maximum
  // key: villageRoomName => Set of socket.id
  const villageRooms = new Map();

  // Trouver ou créer un village avec moins de 5 personnes
  const getOrCreateAvailableVillage = () => {
    let villageIndex = 1;
    while (true) {
      const roomName = `Village #${villageIndex}`;
      const occupants = villageRooms.get(roomName) || new Set();

      if (occupants.size < 5) {
        return { roomName, villageIndex };
      }
      villageIndex++;
    }
  };

  io.on('connection', (socket) => {
    console.log(`[Socket] Connecté: ${socket.id}`);

    // 1. Rejoindre la ville (Assignation automatique dans un Village de 5 places max)
    socket.on('join_game', (userData) => {
      const { roomName, villageIndex } = getOrCreateAvailableVillage();

      if (!villageRooms.has(roomName)) {
        villageRooms.set(roomName, new Set());
      }
      villageRooms.get(roomName).add(socket.id);
      socket.join(roomName);

      const player = {
        id: socket.id,
        nickname: userData.nickname || 'Invité',
        gender: userData.gender || 'boy',
        level: userData.level || 1,
        villageRoom: roomName,
        villageNumber: villageIndex,
        x: userData.x || 400 + Math.floor(Math.random() * 100 - 50),
        y: userData.y || 450 + Math.floor(Math.random() * 100 - 50),
        facing: 'down',
        status: 'online'
      };

      players.set(socket.id, player);

      // Récupérer les joueurs présents uniquement dans ce village
      const currentVillageSockets = Array.from(villageRooms.get(roomName));
      const villagePlayersList = currentVillageSockets
        .map(sId => players.get(sId))
        .filter(Boolean);

      // Envoyer au joueur la liste de son village + son info village
      socket.emit('current_players', villagePlayersList);
      socket.emit('assigned_village', { roomName, villageIndex, totalInVillage: villagePlayersList.length });

      // Informer les autres membres du village
      socket.to(roomName).emit('player_joined', player);
      socket.to(roomName).emit('village_count_updated', { totalInVillage: villagePlayersList.length });

      console.log(`[Game] ${player.nickname} (Niv. ${player.level}) a rejoint le ${roomName} (${villagePlayersList.length}/5 joueurs).`);
    });

    // 2. Déplacement du joueur (Isolé dans son village)
    socket.on('player_move', (moveData) => {
      const player = players.get(socket.id);
      if (player) {
        player.x = moveData.x;
        player.y = moveData.y;
        player.facing = moveData.facing || player.facing;

        socket.to(player.villageRoom).emit('player_moved', {
          id: socket.id,
          x: player.x,
          y: player.y,
          facing: player.facing,
          level: player.level
        });
      }
    });

    // 3. Mise à jour du niveau du joueur
    socket.on('player_level_up', (newLevel) => {
      const player = players.get(socket.id);
      if (player) {
        player.level = newLevel;
        io.to(player.villageRoom).emit('player_level_updated', { id: socket.id, level: newLevel });
      }
    });

    // Chat de proximité (Diffusé uniquement aux joueurs à proximité < 250px dans le même village)
    socket.on('send_chat_message', (text) => {
      const sender = players.get(socket.id);
      if (!sender || !text || !text.trim()) return;

      const msgObj = {
        id: Math.random().toString(36).substring(2, 9),
        senderId: socket.id,
        senderName: sender.nickname,
        text: text.trim(),
        x: sender.x,
        y: sender.y,
        timestamp: Date.now()
      };

      players.forEach((targetPlayer, targetSocketId) => {
        if (targetPlayer.villageRoom === sender.villageRoom) {
          const dist = Math.hypot(sender.x - targetPlayer.x, sender.y - targetPlayer.y);
          if (dist <= 250) {
            io.to(targetSocketId).emit('receive_chat_message', msgObj);
          }
        }
      });
    });

    // 4. Chat Privé 1-sur-1 & Demandes d'invitation
    socket.on('request_private_chat', ({ targetPlayerId }) => {
      const requester = players.get(socket.id);
      const target = players.get(targetPlayerId);

      if (!requester || !target) return;

      const isTargetBusy = activePrivateChats.has(targetPlayerId);

      if (isTargetBusy) {
        io.to(targetPlayerId).emit('incoming_chat_request', {
          requesterId: socket.id,
          requesterName: requester.nickname,
          requesterGender: requester.gender
        });
      } else {
        activePrivateChats.set(socket.id, targetPlayerId);
        activePrivateChats.set(targetPlayerId, socket.id);

        io.to(socket.id).emit('private_chat_started', {
          partnerId: targetPlayerId,
          partnerName: target.nickname,
          partnerGender: target.gender
        });

        io.to(targetPlayerId).emit('private_chat_started', {
          partnerId: socket.id,
          partnerName: requester.nickname,
          partnerGender: requester.gender
        });
      }
    });

    socket.on('accept_chat_request', ({ requesterId }) => {
      const requester = players.get(requesterId);
      const current = players.get(socket.id);

      if (!requester || !current) return;

      const oldPartner1 = activePrivateChats.get(socket.id);
      if (oldPartner1) {
        activePrivateChats.delete(oldPartner1);
        io.to(oldPartner1).emit('private_chat_ended', { reason: `${current.nickname} a changé de conversation.` });
      }

      const oldPartner2 = activePrivateChats.get(requesterId);
      if (oldPartner2) {
        activePrivateChats.delete(oldPartner2);
        io.to(oldPartner2).emit('private_chat_ended', { reason: `${requester.nickname} a changé de conversation.` });
      }

      activePrivateChats.set(socket.id, requesterId);
      activePrivateChats.set(requesterId, socket.id);

      io.to(socket.id).emit('private_chat_started', {
        partnerId: requesterId,
        partnerName: requester.nickname,
        partnerGender: requester.gender
      });

      io.to(requesterId).emit('private_chat_started', {
        partnerId: socket.id,
        partnerName: current.nickname,
        partnerGender: current.gender
      });
    });

    socket.on('decline_chat_request', ({ requesterId }) => {
      const current = players.get(socket.id);
      const currentName = current ? current.nickname : 'Ce joueur';

      io.to(requesterId).emit('chat_request_declined_busy', {
        busyPlayerName: currentName,
        message: `${currentName} est actuellement en conversation privée. Veuillez patienter !`
      });
    });

    socket.on('send_private_message', ({ targetPlayerId, text }) => {
      const sender = players.get(socket.id);
      if (!sender || !text.trim()) return;

      const msgObj = {
        id: Math.random().toString(36).substr(2, 9),
        senderId: socket.id,
        senderName: sender.nickname,
        text: text.trim(),
        timestamp: Date.now()
      };

      socket.emit('receive_private_message', msgObj);
      io.to(targetPlayerId).emit('receive_private_message', msgObj);
    });

    socket.on('end_private_chat', () => {
      const partnerId = activePrivateChats.get(socket.id);
      if (partnerId) {
        activePrivateChats.delete(partnerId);
        io.to(partnerId).emit('private_chat_ended', { reason: 'La conversation est terminée.' });
      }
      activePrivateChats.delete(socket.id);
      socket.emit('private_chat_ended', { reason: 'Vous avez quitté la conversation.' });
    });

    // 5. Mini-jeux PvP
    socket.on('send_game_challenge', ({ targetPlayerId, gameType }) => {
      const challenger = players.get(socket.id);
      const target = players.get(targetPlayerId);

      if (challenger && target) {
        io.to(targetPlayerId).emit('received_game_challenge', {
          gameId: `game_${socket.id}_${targetPlayerId}_${Date.now()}`,
          challengerId: socket.id,
          challengerName: challenger.nickname,
          gameType: gameType
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
        board: Array(9).fill(null),
        currentTurn: p1.id,
        status: 'playing'
      };

      activeMiniGames.set(gameId, gameSession);

      io.to(p1.id).emit('mini_game_start', gameSession);
      io.to(p2.id).emit('mini_game_start', gameSession);
    });

    socket.on('decline_game_challenge', ({ challengerId }) => {
      io.to(challengerId).emit('challenge_declined', { declinerId: socket.id });
    });

    socket.on('play_rps_choice', ({ gameId, choice }) => {
      const session = activeMiniGames.get(gameId);
      if (!session || session.gameType !== 'rps') return;

      if (socket.id === session.p1.id) session.p1.choice = choice;
      if (socket.id === session.p2.id) session.p2.choice = choice;

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
          result = session.p1.id;
        } else {
          result = session.p2.id;
        }

        const payload = { gameId, p1Choice: c1, p2Choice: c2, winnerId: result };
        io.to(session.p1.id).emit('rps_result', payload);
        io.to(session.p2.id).emit('rps_result', payload);
        activeMiniGames.delete(gameId);
      }
    });

    socket.on('play_ttt_move', ({ gameId, cellIndex }) => {
      const session = activeMiniGames.get(gameId);
      if (!session || session.gameType !== 'ttt' || session.status !== 'playing') return;
      if (session.currentTurn !== socket.id) return;
      if (session.board[cellIndex] !== null) return;

      const currentSymbol = socket.id === session.p1.id ? session.p1.symbol : session.p2.symbol;
      session.board[cellIndex] = currentSymbol;

      const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
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
        const payload = { gameId, board: session.board, winnerId: winner, isDraw };
        io.to(session.p1.id).emit('ttt_game_over', payload);
        io.to(session.p2.id).emit('ttt_game_over', payload);
        activeMiniGames.delete(gameId);
      } else {
        session.currentTurn = socket.id === session.p1.id ? session.p2.id : session.p1.id;
        const updatePayload = { gameId, board: session.board, currentTurn: session.currentTurn };
        io.to(session.p1.id).emit('ttt_update', updatePayload);
        io.to(session.p2.id).emit('ttt_update', updatePayload);
      }
    });

    // 6. Déconnexion (Retrait du village)
    socket.on('disconnect', () => {
      const player = players.get(socket.id);
      if (player) {
        const roomName = player.villageRoom;
        if (villageRooms.has(roomName)) {
          const roomSet = villageRooms.get(roomName);
          roomSet.delete(socket.id);
          if (roomSet.size === 0) {
            villageRooms.delete(roomName);
          } else {
            socket.to(roomName).emit('village_count_updated', { totalInVillage: roomSet.size });
          }
        }

        const partnerId = activePrivateChats.get(socket.id);
        if (partnerId) {
          activePrivateChats.delete(partnerId);
          io.to(partnerId).emit('private_chat_ended', { reason: 'Le joueur s\'est déconnecté.' });
        }
        activePrivateChats.delete(socket.id);

        players.delete(socket.id);
        socket.to(roomName).emit('player_left', socket.id);
      }
    });
  });

  server.all('*', (req, res) => handle(req, res));

  httpServer.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`🚀 Serveur Multijoueur démarré sur http://localhost:${PORT}`);
  });
});
