"use client";
import React, { useState, useEffect, useRef } from 'react';
import { io } from 'socket.io-client';
import AuthModal from '../components/AuthModal';
import TownCanvas from '../components/TownCanvas';
import HouseRiddleModal from '../components/HouseRiddleModal';
import MiniGameModal from '../components/MiniGameModal';
import TutorialModal from '../components/TutorialModal';
import PrivateChatModal from '../components/PrivateChatModal';
import ProximityChat from '../components/ProximityChat';
import { Users, Trophy, Swords, MessageSquare, ArrowRight, Home, Clock, ExternalLink, Volume2, VolumeX } from 'lucide-react';

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
  const [chatMessages, setChatMessages] = useState([]);
  const [incomingChatRequest, setIncomingChatRequest] = useState(null);
  const [busyNotification, setBusyNotification] = useState(null);
  const [chatBubbles, setChatBubbles] = useState({});

  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);
  const playerIdRef = useRef(null);
  const isMutedRef = useRef(false);
  const localPlayerRef = useRef(null);

  useEffect(() => {
    isMutedRef.current = isMuted;
  }, [isMuted]);

  useEffect(() => {
    localPlayerRef.current = localPlayer;
  }, [localPlayer]);

  useEffect(() => {
    if (typeof window !== 'undefined' && !audioRef.current) {
      audioRef.current = new Audio('/bgm.mp3');
      audioRef.current.loop = true;
      audioRef.current.volume = 0.30;
    }

    const stopAudio = () => {
      if (audioRef.current) {
        audioRef.current.pause();
        try {
          audioRef.current.currentTime = 0;
        } catch (e) {}
      }
    };

    const handleVisibilityChange = () => {
      if (document.hidden && audioRef.current) {
        audioRef.current.pause();
      } else if (!document.hidden && audioRef.current && localPlayerRef.current && !isMutedRef.current) {
        audioRef.current.play().catch(() => {});
      }
    };

    const unlockAudioOnTouch = () => {
      if (audioRef.current && audioRef.current.paused && !isMutedRef.current && localPlayerRef.current) {
        audioRef.current.play().catch(() => {});
      }
    };

    window.addEventListener('beforeunload', stopAudio);
    window.addEventListener('pagehide', stopAudio);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('touchstart', unlockAudioOnTouch, { passive: true });
    window.addEventListener('click', unlockAudioOnTouch, { passive: true });

    return () => {
      window.removeEventListener('beforeunload', stopAudio);
      window.removeEventListener('pagehide', stopAudio);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('touchstart', unlockAudioOnTouch);
      window.removeEventListener('click', unlockAudioOnTouch);
      stopAudio();
    };
  }, []);

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (isMuted) {
      audioRef.current.play().catch(() => {});
      setIsMuted(false);
    } else {
      audioRef.current.pause();
      setIsMuted(true);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedUnlocked = localStorage.getItem('town_riddles_unlocked_level');
      const savedLevel = localStorage.getItem('town_riddles_player_level');
      if (savedUnlocked) setUnlockedLevel(parseInt(savedUnlocked, 10));
      if (savedLevel) setPlayerLevel(parseInt(savedLevel, 10));
    }
  }, []);

  // Synchronisation Vercel HTTP Fallback si Socket.io n'est pas disponible
  useEffect(() => {
    if (!localPlayer) return;

    const pid = playerIdRef.current || `player_${Math.random().toString(36).substring(2, 9)}`;
    playerIdRef.current = pid;

    let isSocketConnected = false;
    let newSocket = null;

    // Tentative de connexion WebSockets
    const rawUrl = process.env.NEXT_PUBLIC_SOCKET_URL;
    const socketUrl = (rawUrl && rawUrl.trim()) 
      ? rawUrl.trim() 
      : (typeof window !== 'undefined' ? window.location.origin : 'http://localhost:3000');

    try {
      newSocket = io(socketUrl, {
        transports: ['websocket', 'polling'],
        reconnectionAttempts: 3,
        timeout: 4000
      });

      newSocket.on('connect', () => {
        isSocketConnected = true;
        newSocket.emit('join_game', { ...localPlayer, id: pid, level: playerLevel });
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

      newSocket.on('receive_chat_message', (msgObj) => {
        setChatMessages(prev => [...prev.slice(-49), msgObj]);
        setChatBubbles(prev => ({ ...prev, [msgObj.senderId]: msgObj.text }));
        setTimeout(() => {
          setChatBubbles(prev => {
            const copy = { ...prev };
            delete copy[msgObj.senderId];
            return copy;
          });
        }, 10000);
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
        }, 10000);
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
      console.warn("[Socket Init Exception]", e);
    }

    // Fallback de synchronisation HTTP Polling pour Vercel (si Socket.io n'est pas connecté)
    const pollInterval = setInterval(async () => {
      if (isSocketConnected) return; // Si Socket.io est actif, pas besoin du fallback HTTP

      try {
        const res = await fetch('/api/players', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            id: pid,
            nickname: localPlayer.nickname,
            gender: localPlayer.gender,
            level: playerLevel,
            x: localPlayer.x || 450,
            y: localPlayer.y || 450
          })
        });

        if (res.ok) {
          const data = await res.json();
          setVillageInfo({ roomName: data.villageRoom, totalInVillage: data.totalInVillage });
          setOtherPlayers(data.players || []);
        }
      } catch (err) {
        console.warn("[Vercel Sync Fallback Error]", err);
      }
    }, 1500);

    return () => {
      clearInterval(pollInterval);
      if (newSocket) {
        try {
          newSocket.disconnect();
        } catch (e) {}
      }
    };
  }, [localPlayer, playerLevel]);

  const handleJoin = (userData) => {
    setLocalPlayer(userData);

    if (typeof window !== 'undefined') {
      if (!audioRef.current) {
        audioRef.current = new Audio('/bgm.mp3');
        audioRef.current.loop = true;
        audioRef.current.volume = 0.30;
      }
      setIsMuted(false);
      audioRef.current.play().catch(e => console.warn("[Audio Autoplay]", e));
    }

    if (typeof window !== 'undefined') {
      const hasSeenTutorial = localStorage.getItem('town_riddles_tutorial_seen');
      if (!hasSeenTutorial) {
        setShowTutorialModal(true);
      }
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

  const handleStartPrivateChat = (targetPlayer) => {
    if (socket && targetPlayer) {
      socket.emit('request_private_chat', { targetPlayerId: targetPlayer.id });
    }
  };

  const handleAcceptChatRequest = () => {
    if (socket && incomingChatRequest) {
      socket.emit('accept_chat_request', { requesterId: incomingChatRequest.requesterId });
      setIncomingChatRequest(null);
    }
  };

  const handleDeclineChatRequest = () => {
    if (socket && incomingChatRequest) {
      socket.emit('decline_chat_request', { requesterId: incomingChatRequest.requesterId });
      setIncomingChatRequest(null);
    }
  };

  const handleSendPrivateMessage = (text) => {
    if (socket && activePrivatePartner) {
      socket.emit('send_private_message', {
        targetPlayerId: activePrivatePartner.partnerId,
        text
      });
    }
  };

  const handleEndPrivateChat = () => {
    if (socket) {
      socket.emit('end_private_chat');
    }
    setActivePrivatePartner(null);
  };

  if (!localPlayer) {
    return <AuthModal onJoin={handleJoin} />;
  }

  return (
    <main className="relative w-screen h-screen bg-slate-950 overflow-hidden flex flex-col justify-between">
      {/* En-tête HUD Ultra-Compact et Responsive (Aligné sur 1 ligne propre sur Mobile & PC) */}
      <div className="absolute top-2 left-2 right-2 sm:top-4 sm:left-4 sm:right-4 z-40 flex items-center justify-between pointer-events-none">
        {/* Fiche Joueur Local */}
        <div className="pointer-events-auto bg-slate-900/90 backdrop-blur-md border border-slate-700/80 px-2.5 py-1.5 sm:px-4 sm:py-2.5 rounded-xl shadow-xl flex items-center gap-2">
          <span className="text-lg sm:text-2xl">{localPlayer.gender === 'girl' ? '👧' : '👦'}</span>
          <div className="leading-tight">
            <div className="text-[11px] sm:text-xs font-extrabold text-white flex items-center gap-1">
              <span className="truncate max-w-[80px] sm:max-w-[120px]">{localPlayer.nickname}</span>
              <span className="text-[9px] sm:text-[10px] font-extrabold px-1.5 py-0.2 bg-indigo-600 text-white rounded-full">
                Niv. {playerLevel}
              </span>
            </div>
            <div className="text-[10px] sm:text-[11px] text-amber-400 font-bold flex items-center gap-1 mt-0.5">
              <Trophy className="w-3 h-3 text-amber-400" /> {unlockedLevel}/5 Maisons
            </div>
          </div>
        </div>

        {/* Info Village & Bouton Point d'exclamation (!) */}
        <div className="pointer-events-auto flex items-center gap-1.5 sm:gap-3">
          <div className="bg-slate-900/90 backdrop-blur-md border border-slate-700/80 px-2.5 py-1.5 sm:px-4 sm:py-2.5 rounded-xl shadow-xl flex items-center gap-1.5 text-[11px] sm:text-xs font-bold text-slate-200">
            <Home className="w-3.5 h-3.5 text-indigo-400" />
            <span className="hidden xs:inline">{villageInfo.roomName}</span>
            <span className="text-emerald-400 font-extrabold">({otherPlayers.length + 1}/5)</span>
          </div>

          {/* Bouton Musique ON/OFF */}
          <button
            onClick={toggleAudio}
            className="w-8 h-8 sm:w-10 sm:h-10 bg-slate-900/90 hover:bg-slate-800 backdrop-blur-md border border-slate-700/80 text-white rounded-xl shadow-xl transition-transform active:scale-95 flex items-center justify-center text-sm sm:text-base"
            title={isMuted ? "Activer la musique de fond" : "Couper la musique"}
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4 text-emerald-400 animate-pulse" />}
          </button>

          <button
            onClick={() => setShowTutorialModal(true)}
            className="w-8 h-8 sm:w-10 sm:h-10 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black rounded-xl shadow-xl shadow-amber-500/20 transition-transform active:scale-95 flex items-center justify-center text-base sm:text-lg"
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

      {/* Chat de Proximité (Ne s'affiche subtilement que lorsqu'un autre joueur est proche) */}
      <ProximityChat
        onSendMessage={handleSendChatMessage}
        messages={chatMessages}
        hasNearbyPlayer={otherPlayers.some(p => {
          const lx = localPlayer?.x || 450;
          const ly = localPlayer?.y || 450;
          const px = p.x || 450;
          const py = p.y || 450;
          return Math.hypot(lx - px, ly - py) < 280;
        })}
      />

      {/* Badge Minimaliste Powered by WC en bas à droite (Visible sur mobile & PC) */}
      <div className="absolute bottom-2.5 right-2.5 sm:bottom-4 sm:right-4 z-50 pointer-events-auto">
        <a
          href="https://wanguycalvert.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[10px] sm:text-[11px] font-semibold text-slate-400 hover:text-white bg-slate-900/95 backdrop-blur-md border border-slate-800 px-2.5 py-1 rounded-full shadow-2xl transition-all flex items-center gap-1 hover:border-indigo-500/50"
        >
          <span>powered by</span>
          <span className="font-extrabold text-indigo-400">WC</span>
        </a>
      </div>

      {/* Pop-up Joueur Occupé */}
      {busyNotification && (
        <div className="fixed top-14 sm:top-16 left-1/2 -translate-x-1/2 z-50 bg-slate-900 border-2 border-indigo-500 rounded-2xl p-3.5 px-4 shadow-2xl flex items-center gap-3 max-w-xs sm:max-w-md">
          <Clock className="w-5 h-5 text-indigo-400 flex-shrink-0" />
          <p className="text-xs font-bold text-slate-100">{busyNotification}</p>
        </div>
      )}

      {/* Popup Action Joueur */}
      {selectedPlayer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 backdrop-blur-sm p-2 sm:p-4 overflow-y-auto">
          <div className="bg-slate-900 border border-slate-700 rounded-3xl p-5 sm:p-6 w-80 max-h-[90vh] overflow-y-auto text-center space-y-4 shadow-2xl my-auto">
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
        <div className="fixed top-14 sm:top-16 left-1/2 -translate-x-1/2 z-50 bg-slate-900 border-2 border-indigo-500 rounded-2xl p-4 shadow-2xl flex items-center gap-4">
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
        <div className="fixed top-14 sm:top-16 left-1/2 -translate-x-1/2 z-50 bg-slate-900 border-2 border-amber-500/80 rounded-2xl p-4 shadow-2xl flex items-center gap-4">
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

      {/* Modal Victoire / Passage de Niveau */}
      {showPrestigeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-2 sm:p-4 overflow-y-auto">
          <div className="bg-slate-900 border-2 border-amber-500/80 rounded-3xl p-6 sm:p-8 max-w-md w-full max-h-[90vh] overflow-y-auto text-center space-y-5 shadow-2xl my-auto">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-amber-500/20 border border-amber-400 rounded-full mx-auto flex items-center justify-center text-amber-300">
              <Trophy className="w-7 h-7 sm:w-8 sm:h-8" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-amber-300 uppercase tracking-wide">
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
