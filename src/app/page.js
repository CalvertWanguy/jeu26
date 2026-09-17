"use client";
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import AuthModal from '../components/AuthModal';
import TownCanvas from '../components/TownCanvas';
import HouseRiddleModal from '../components/HouseRiddleModal';
import MiniGameModal from '../components/MiniGameModal';
import TutorialModal from '../components/TutorialModal';
import PrivateChatModal from '../components/PrivateChatModal';
import { Users, Trophy, Swords, MessageSquare, ArrowRight, Home, Clock, ExternalLink } from 'lucide-react';

export default function HomePage() {
  const [localPlayer, setLocalPlayer] = useState(null);
  const [socket, setSocket] = useState(null);

  const [otherPlayers, setOtherPlayers] = useState([]);
  const [unlockedLevel, setUnlockedLevel] = useState(1);
  const [playerLevel, setPlayerLevel] = useState(1);
  const [villageInfo, setVillageInfo] = useState({ roomName: 'Village #1', totalInVillage: 1 });

  const [showPrestigeModal, setShowPrestigeModal] = useState(false);
  const [showTutorialModal, setShowTutorialModal] = useState(false);

  const [activeHouse, setActiveHouse] = useState(null);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [incomingChallenge, setIncomingChallenge] = useState(null);
  const [activeMiniGame, setActiveMiniGame] = useState(null);

  const [activePrivatePartner, setActivePrivatePartner] = useState(null);
  const [privateMessages, setPrivateMessages] = useState([]);
  const [incomingChatRequest, setIncomingChatRequest] = useState(null);
  const [busyNotification, setBusyNotification] = useState(null);
  const [chatBubbles, setChatBubbles] = useState({});

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedUnlocked = localStorage.getItem('town_riddles_unlocked_level');
      const savedLevel = localStorage.getItem('town_riddles_player_level');
      if (savedUnlocked) setUnlockedLevel(parseInt(savedUnlocked, 10));
      if (savedLevel) setPlayerLevel(parseInt(savedLevel, 10));
    }
  }, []);

  const handleJoin = (userData) => {
    const fullUserData = { ...userData, level: playerLevel };
    setLocalPlayer(fullUserData);

    if (typeof window !== 'undefined') {
      const hasSeenTutorial = localStorage.getItem('town_riddles_tutorial_seen');
      if (!hasSeenTutorial) {
        setShowTutorialModal(true);
      }
    }

    // URL dynamique du serveur Socket.io (Render / Railway / Host Vercel avec secours)
    const socketUrl = process.env.NEXT_PUBLIC_SOCKET_URL || 
      (typeof window !== 'undefined' ? window.location.origin : 'http://localhost:3000');

    try {
      const newSocket = io(socketUrl, {
        transports: ['websocket', 'polling'],
        reconnectionAttempts: 5,
        timeout: 10000
      });

      newSocket.on('connect', () => {
        newSocket.emit('join_game', fullUserData);
      });

      newSocket.on('connect_error', (err) => {
        console.warn("[Socket Client] Impossible de se connecter au serveur temps réel:", err.message);
      });

      newSocket.on('assigned_village', (info) => {
        setVillageInfo({ roomName: info.roomName, totalInVillage: info.totalInVillage });
      });

      newSocket.on('village_count_updated', ({ totalInVillage }) => {
        setVillageInfo(prev => ({ ...prev, totalInVillage }));
      });

      newSocket.on('current_players', (playersList) => {
        setOtherPlayers(playersList.filter(p => p.id !== newSocket.id));
      });

      newSocket.on('player_joined', (newPlayer) => {
        setOtherPlayers(prev => [...prev.filter(p => p.id !== newPlayer.id), newPlayer]);
      });

      newSocket.on('player_moved', (data) => {
        setOtherPlayers(prev =>
          prev.map(p => (p.id === data.id ? { ...p, x: data.x, y: data.y, facing: data.facing, level: data.level } : p))
        );
      });

      newSocket.on('player_level_updated', ({ id, level }) => {
        setOtherPlayers(prev =>
          prev.map(p => (p.id === id ? { ...p, level } : p))
        );
      });

      newSocket.on('player_left', (disconnectedId) => {
        setOtherPlayers(prev => prev.filter(p => p.id !== disconnectedId));
      });

      newSocket.on('private_chat_started', (partnerInfo) => {
        setActivePrivatePartner(partnerInfo);
        setPrivateMessages([]);
        setSelectedPlayer(null);
      });

      newSocket.on('receive_private_message', (msgObj) => {
        setPrivateMessages(prev => [...prev, msgObj]);
        setChatBubbles(prev => ({ ...prev, [msgObj.senderId]: msgObj.text }));
        setTimeout(() => {
          setChatBubbles(prev => {
            const copy = { ...prev };
            delete copy[msgObj.senderId];
            return copy;
          });
        }, 4000);
      });

      newSocket.on('incoming_chat_request', (requestData) => {
        setIncomingChatRequest(requestData);
      });

      newSocket.on('chat_request_declined_busy', ({ message }) => {
        setBusyNotification(message);
        setTimeout(() => setBusyNotification(null), 5000);
      });

      newSocket.on('private_chat_ended', ({ reason }) => {
        setActivePrivatePartner(null);
        setPrivateMessages([]);
        alert(reason);
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
    } catch (e) {
      console.error("[Socket Init Error]", e);
    }
  };

  const handleCloseTutorial = () => {
    setShowTutorialModal(false);
    if (typeof window !== 'undefined') {
      localStorage.setItem('town_riddles_tutorial_seen', 'true');
    }
  };

  const handleSendChatMessage = (text) => {
    if (socket) {
      socket.emit('send_chat_message', text);
    }
  };

  const handleSolveRiddle = (currentHouseLevel) => {
    setActiveHouse(null);

    if (currentHouseLevel === 5) {
      const nextLevel = playerLevel + 1;
      setPlayerLevel(nextLevel);
      setUnlockedLevel(1);

      if (typeof window !== 'undefined') {
        localStorage.setItem('town_riddles_player_level', nextLevel.toString());
        localStorage.setItem('town_riddles_unlocked_level', '1');
      }

      if (socket) {
        socket.emit('player_level_up', nextLevel);
      }

      setShowPrestigeModal(true);
    } else if (currentHouseLevel === unlockedLevel && unlockedLevel < 5) {
      const nextUnlocked = unlockedLevel + 1;
      setUnlockedLevel(nextUnlocked);
      if (typeof window !== 'undefined') {
        localStorage.setItem('town_riddles_unlocked_level', nextUnlocked.toString());
      }
    }
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
        <div className="pointer-events-auto bg-slate-900/90 backdrop-blur-md border border-slate-700/80 px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-3">
          <span className="text-2xl">{localPlayer.gender === 'girl' ? '👧' : '👦'}</span>
          <div>
            <div className="text-xs font-extrabold text-white flex items-center gap-1.5">
              {localPlayer.nickname} 
              <span className="text-[10px] font-extrabold px-2 py-0.5 bg-indigo-600 text-white rounded-full shadow-sm">
                Niv. {playerLevel}
              </span>
            </div>
            <div className="text-[11px] text-amber-400 font-bold flex items-center gap-2 mt-0.5">
              <span className="flex items-center gap-1"><Trophy className="w-3.5 h-3.5" /> Maisons : {unlockedLevel} / 5</span>
            </div>
          </div>
        </div>

        <div className="pointer-events-auto flex items-center gap-3">
          <div className="bg-slate-900/90 backdrop-blur-md border border-slate-700/80 px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-2 text-xs font-bold text-slate-200">
            <Home className="w-4 h-4 text-indigo-400" />
            <span>{villageInfo.roomName}</span>
            <span className="text-emerald-400 font-extrabold ml-1">({otherPlayers.length + 1}/5 Joueurs)</span>
          </div>

          <button
            onClick={() => setShowTutorialModal(true)}
            className="w-10 h-10 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black rounded-2xl shadow-xl shadow-amber-500/20 transition-transform active:scale-95 flex items-center justify-center text-lg"
            title="Comment jouer ? (Aide)"
          >
            !
          </button>
        </div>
      </div>

      {/* Rendu Canvas de la Ville 2D */}
      <TownCanvas
        socket={socket}
        localPlayer={localPlayer}
        otherPlayers={otherPlayers}
        unlockedLevel={unlockedLevel}
        playerLevel={playerLevel}
        onOpenHouse={(house) => setActiveHouse(house)}
        onSelectPlayer={(player) => setSelectedPlayer(player)}
        chatBubbles={chatBubbles}
      />

      {/* Pop-up si un Joueur est Occupé */}
      {busyNotification && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-slate-900 border-2 border-indigo-500 rounded-2xl p-4 shadow-2xl flex items-center gap-3 animate-bounce max-w-md">
          <Clock className="w-6 h-6 text-indigo-400 flex-shrink-0" />
          <p className="text-xs font-bold text-slate-100">{busyNotification}</p>
        </div>
      )}

      {/* Badge Minimaliste Powered by WC */}
      <div className="absolute bottom-3 right-3 z-40 pointer-events-auto">
        <a
          href="https://wanguycalvert.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11px] font-semibold text-slate-400 hover:text-white bg-slate-900/80 backdrop-blur-md border border-slate-800 px-3 py-1.5 rounded-full shadow-lg transition-all flex items-center gap-1 hover:border-indigo-500/50"
        >
          <span>powered by</span>
          <span className="font-extrabold text-indigo-400">WC</span>
        </a>
      </div>

      {/* Popup Action Joueur */}
      {selectedPlayer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 backdrop-blur-sm p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-3xl p-6 w-80 text-center space-y-4 shadow-2xl">
            <span className="text-4xl">{selectedPlayer.gender === 'girl' ? '👧' : '👦'}</span>
            <div>
              <div className="flex items-center justify-center gap-2">
                <h3 className="text-base font-extrabold text-white">{selectedPlayer.nickname}</h3>
                <span className="text-[10px] font-bold px-2 py-0.5 bg-indigo-600 text-white rounded-full">
                  Niv. {selectedPlayer.level || 1}
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-1">{villageInfo.roomName}</p>
            </div>

            <div className="space-y-2 pt-2">
              <button
                onClick={() => handleStartPrivateChat(selectedPlayer)}
                className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-xs shadow-lg flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" /> Discuter en Privé (1-sur-1)
              </button>
              <button
                onClick={() => handleSendChallenge('rps')}
                className="w-full py-2.5 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold rounded-xl text-xs shadow-lg flex items-center justify-center gap-2"
              >
                <Swords className="w-4 h-4" /> Pierre-Papier-Ciseaux
              </button>
              <button
                onClick={() => handleSendChallenge('ttt')}
                className="w-full py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold rounded-xl text-xs shadow-lg flex items-center justify-center gap-2"
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

      {/* Demande Chat Privé */}
      {incomingChatRequest && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-slate-900 border-2 border-indigo-500 rounded-2xl p-4 shadow-2xl flex items-center gap-4 animate-bounce">
          <MessageSquare className="w-6 h-6 text-indigo-400" />
          <div>
            <p className="text-xs font-bold text-indigo-300">Demande de Chat Privé !</p>
            <p className="text-xs text-white">
              <strong className="text-amber-300">{incomingChatRequest.requesterName}</strong> veut discuter en privé avec vous.
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={handleAcceptChatRequest}
              className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-lg"
            >
              Accepter
            </button>
            <button
              onClick={handleDeclineChatRequest}
              className="px-3 py-1.5 bg-slate-700 hover:bg-slate-600 text-slate-300 font-bold text-xs rounded-lg"
            >
              Refuser
            </button>
          </div>
        </div>
      )}

      {/* Notification Défi Mini-jeu */}
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

      {/* Chat Privé 1-sur-1 */}
      {activePrivatePartner && (
        <PrivateChatModal
          partner={activePrivatePartner}
          messages={privateMessages}
          onSendMessage={handleSendPrivateMessage}
          onClose={handleEndPrivateChat}
        />
      )}

      {/* Modal Tutoriel */}
      {showTutorialModal && (
        <TutorialModal onClose={handleCloseTutorial} />
      )}

      {/* Modal Maison Énigme */}
      {activeHouse && (
        <HouseRiddleModal
          house={activeHouse}
          unlockedLevel={unlockedLevel}
          cycle={playerLevel}
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

      {/* Modal Victoire */}
      {showPrestigeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-4">
          <div className="bg-slate-900 border-2 border-amber-500/80 rounded-3xl p-8 max-w-md w-full text-center space-y-5 shadow-2xl animate-bounce">
            <div className="w-16 h-16 bg-amber-500/20 border border-amber-400 rounded-full mx-auto flex items-center justify-center text-amber-300">
              <Trophy className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-2xl font-black text-amber-300 uppercase tracking-wide">
                Passage au Niveau {playerLevel} !
              </h2>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Bravo ! Vous avez terminé les 5 maisons. Une petite bulle <strong className="text-indigo-400">Niv. {playerLevel}</strong> s'affiche désormais à côté de votre nom pour tous les joueurs !
              </p>
            </div>
            <button
              onClick={() => setShowPrestigeModal(false)}
              className="w-full py-3.5 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-extrabold rounded-2xl shadow-lg flex items-center justify-center gap-2 text-xs uppercase tracking-wider"
            >
              Continuer vers le Niveau {playerLevel} <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
