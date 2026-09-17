"use client";
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import AuthModal from '../components/AuthModal';
import TownCanvas from '../components/TownCanvas';
import ProximityChat from '../components/ProximityChat';
import HouseRiddleModal from '../components/HouseRiddleModal';
import MiniGameModal from '../components/MiniGameModal';
import { Users, Trophy, Swords } from 'lucide-react';

export default function HomePage() {
  const [localPlayer, setLocalPlayer] = useState(null);
  const [socket, setSocket] = useState(null);

  const [otherPlayers, setOtherPlayers] = useState([]);
  const [unlockedLevel, setUnlockedLevel] = useState(1);

  const [activeHouse, setActiveHouse] = useState(null);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [incomingChallenge, setIncomingChallenge] = useState(null);
  const [activeMiniGame, setActiveMiniGame] = useState(null);

  const [chatMessages, setChatMessages] = useState([]);
  const [chatBubbles, setChatBubbles] = useState({});

  useEffect(() => {
    const savedLevel = localStorage.getItem('town_riddles_unlocked_level');
    if (savedLevel) {
      setUnlockedLevel(parseInt(savedLevel, 10));
    }
  }, []);

  const handleJoin = (userData) => {
    setLocalPlayer(userData);

    const newSocket = io('http://localhost:3000', {
      transports: ['websocket', 'polling']
    });

    newSocket.on('connect', () => {
      newSocket.emit('join_game', userData);
    });

    newSocket.on('current_players', (playersList) => {
      setOtherPlayers(playersList.filter(p => p.id !== newSocket.id));
    });

    newSocket.on('player_joined', (newPlayer) => {
      setOtherPlayers(prev => [...prev.filter(p => p.id !== newPlayer.id), newPlayer]);
    });

    newSocket.on('player_moved', (data) => {
      setOtherPlayers(prev =>
        prev.map(p => (p.id === data.id ? { ...p, x: data.x, y: data.y, facing: data.facing } : p))
      );
    });

    newSocket.on('player_left', (disconnectedId) => {
      setOtherPlayers(prev => prev.filter(p => p.id !== disconnectedId));
    });

    newSocket.on('receive_chat_message', (msgObj) => {
      setChatMessages(prev => [...prev.slice(-15), msgObj]);

      setChatBubbles(prev => ({ ...prev, [msgObj.senderId]: msgObj.text }));
      setTimeout(() => {
        setChatBubbles(prev => {
          const copy = { ...prev };
          delete copy[msgObj.senderId];
          return copy;
        });
      }, 4000);
    });

    newSocket.on('received_game_challenge', (challengeData) => {
      setIncomingChallenge(challengeData);
    });

    newSocket.on('mini_game_start', (sessionData) => {
      setIncomingChallenge(null);
      setSelectedPlayer(null);
      setActiveMiniGame(sessionData);
    });

    setSocket(newSocket);
  };

  const handleSendChatMessage = (text) => {
    if (socket) {
      socket.emit('send_chat_message', text);
    }
  };

  const handleSolveRiddle = (currentHouseLevel) => {
    if (currentHouseLevel === unlockedLevel && unlockedLevel < 5) {
      const nextLevel = unlockedLevel + 1;
      setUnlockedLevel(nextLevel);
      localStorage.setItem('town_riddles_unlocked_level', nextLevel.toString());
    }
    setActiveHouse(null);
  };

  const handleSendChallenge = (gameType) => {
    if (socket && selectedPlayer) {
      socket.emit('send_game_challenge', {
        targetPlayerId: selectedPlayer.id,
        gameType
      });
      alert(`Défi envoyé à ${selectedPlayer.nickname} ! En attente...`);
    }
  };

  const handleAcceptChallenge = () => {
    if (socket && incomingChallenge) {
      socket.emit('accept_game_challenge', incomingChallenge);
    }
  };

  const handleDeclineChallenge = () => {
    if (socket && incomingChallenge) {
      socket.emit('decline_game_challenge', { challengerId: incomingChallenge.challengerId });
      setIncomingChallenge(null);
    }
  };

  if (!localPlayer) {
    return <AuthModal onJoin={handleJoin} />;
  }

  return (
    <main className="relative w-screen h-screen bg-slate-950 overflow-hidden flex flex-col justify-between">
      {/* HUD Supérieur */}
      <div className="absolute top-4 left-4 right-4 z-40 flex items-center justify-between pointer-events-none">
        {/* Fiche Joueur Local avec 👦 / 👧 */}
        <div className="pointer-events-auto bg-slate-900/90 backdrop-blur-md border border-slate-700/80 px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-3">
          <span className="text-2xl">{localPlayer.gender === 'girl' ? '👧' : '👦'}</span>
          <div>
            <div className="text-xs font-extrabold text-white flex items-center gap-1.5">
              {localPlayer.nickname} <span className="text-[10px] font-bold px-2 py-0.5 bg-indigo-500/20 text-indigo-300 rounded-full border border-indigo-500/30">Guest</span>
            </div>
            <div className="text-[11px] text-amber-400 font-bold flex items-center gap-1">
              <Trophy className="w-3.5 h-3.5" /> Niveau {unlockedLevel} / 5
            </div>
          </div>
        </div>

        {/* Total En Ligne */}
        <div className="pointer-events-auto bg-slate-900/90 backdrop-blur-md border border-slate-700/80 px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-2 text-xs font-bold text-slate-200">
          <Users className="w-4 h-4 text-emerald-400" />
          <span>{otherPlayers.length + 1} Joueur(s) dans la ville</span>
        </div>
      </div>

      {/* Rendu Canvas de la Ville 2D */}
      <TownCanvas
        socket={socket}
        localPlayer={localPlayer}
        otherPlayers={otherPlayers}
        unlockedLevel={unlockedLevel}
        onOpenHouse={(house) => setActiveHouse(house)}
        onSelectPlayer={(player) => setSelectedPlayer(player)}
        chatBubbles={chatBubbles}
      />

      {/* Chat de Proximité */}
      <ProximityChat
        onSendMessage={handleSendChatMessage}
        messages={chatMessages}
      />

      {/* Popup de Sélection d'un autre Joueur */}
      {selectedPlayer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 backdrop-blur-sm p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-3xl p-6 w-80 text-center space-y-4 shadow-2xl">
            <span className="text-4xl">{selectedPlayer.gender === 'girl' ? '👧' : '👦'}</span>
            <div>
              <h3 className="text-base font-extrabold text-white">{selectedPlayer.nickname}</h3>
              <p className="text-xs text-slate-400">Joueur à proximité</p>
            </div>

            <div className="space-y-2 pt-2">
              <button
                onClick={() => handleSendChallenge('rps')}
                className="w-full py-2.5 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold rounded-xl text-xs shadow-lg flex items-center justify-center gap-2"
              >
                <Swords className="w-4 h-4" /> Pierre-Papier-Ciseaux
              </button>
              <button
                onClick={() => handleSendChallenge('ttt')}
                className="w-full py-2.5 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold rounded-xl text-xs shadow-lg flex items-center justify-center gap-2"
              >
                <Swords className="w-4 h-4" /> Morpion (Tic-Tac-Toe)
              </button>
            </div>

            <button
              onClick={() => setSelectedPlayer(null)}
              className="text-xs text-slate-400 hover:text-white pt-2 block mx-auto font-bold"
            >
              Fermer
            </button>
          </div>
        </div>
      )}

      {/* Notification de Défi Reçu */}
      {incomingChallenge && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-slate-900 border-2 border-amber-500/80 rounded-2xl p-4 shadow-2xl flex items-center gap-4 animate-bounce">
          <Swords className="w-6 h-6 text-amber-400" />
          <div>
            <p className="text-xs font-bold text-amber-300">Défi Mini-jeu Reçu !</p>
            <p className="text-xs text-white">
              <strong className="text-indigo-300">{incomingChallenge.challengerName}</strong> vous défie au{' '}
              {incomingChallenge.gameType === 'rps' ? 'Pierre-Papier-Ciseaux' : 'Morpion'} !
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={handleAcceptChallenge}
              className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-lg"
            >
              Accepter
            </button>
            <button
              onClick={handleDeclineChallenge}
              className="px-3 py-1.5 bg-slate-700 hover:bg-slate-600 text-slate-300 font-bold text-xs rounded-lg"
            >
              Refuser
            </button>
          </div>
        </div>
      )}

      {/* Modal Maison Énigme */}
      {activeHouse && (
        <HouseRiddleModal
          house={activeHouse}
          unlockedLevel={unlockedLevel}
          onSolveRiddle={handleSolveRiddle}
          onClose={() => setActiveHouse(null)}
        />
      )}

      {/* Modal Mini-Jeu PvP Active */}
      {activeMiniGame && (
        <MiniGameModal
          session={activeMiniGame}
          socket={socket}
          localPlayerId={socket?.id}
          onClose={() => setActiveMiniGame(null)}
        />
      )}
    </main>
  );
}
