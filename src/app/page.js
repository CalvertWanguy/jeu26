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
import ToastNotification from '../components/ToastNotification';
import GrandMasterModal from '../components/GrandMasterModal';
import LeaderboardModal from '../components/LeaderboardModal';
import MiniMap from '../components/MiniMap';
import EmoteBar from '../components/EmoteBar';
import { playClickSFX, playUnlockSFX, playVictorySFX, playChallengeSFX } from '../utils/sfx';
import { Users, Trophy, Swords, MessageSquare, ArrowRight, Home, Clock, ExternalLink, Volume2, VolumeX, User } from 'lucide-react';

export default function HomePage() {
  const [localPlayer, setLocalPlayer] = useState(null);
  const [socket, setSocket] = useState(null);

  const [toasts, setToasts] = useState([]);
  const [otherPlayers, setOtherPlayers] = useState([]);
  const [unlockedLevel, setUnlockedLevel] = useState(1);
  const [playerLevel, setPlayerLevel] = useState(1);
  const [villageInfo, setVillageInfo] = useState({ roomName: 'Village #1', totalInVillage: 1 });

  const [showPrestigeModal, setShowPrestigeModal] = useState(false);
  const [showGrandMasterModal, setShowGrandMasterModal] = useState(false);
  const [showTutorialModal, setShowTutorialModal] = useState(false);
  const [showLeaderboardModal, setShowLeaderboardModal] = useState(false);
  const [playerEmotes, setPlayerEmotes] = useState({});

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

  const addToast = (message, type = 'info', duration = 3500) => {
    const id = Date.now() + Math.random().toString(36).substring(2, 6);
    setToasts(prev => [...prev.slice(-3), { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, duration);
  };

  const removeToast = (id) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

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

      newSocket.on('join_error', (errorMsg) => {
        addToast(errorMsg, 'warning');
        setLocalPlayer(null);
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
        if (newPlayer && newPlayer.nickname) {
          addToast(`${newPlayer.nickname} a rejoint la ville !`, 'info', 2500);
        }
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
        addToast(reason || "Votre interlocuteur a quitté la conversation.", 'warning', 4500);
      });

      newSocket.on('minigame_quit_by_opponent', ({ message }) => {
        setActiveMiniGame(null);
        addToast(message || "Votre adversaire a quitté la partie.", 'warning', 4500);
      });

      newSocket.on('received_game_challenge', (challengeData) => {
        setIncomingChallenge(challengeData);
        playChallengeSFX(isMutedRef.current);
      });

      newSocket.on('challenge_declined', ({ declinerName, message }) => {
        addToast(message || `${declinerName || 'Le joueur'} a refusé votre défi.`, 'info', 4000);
      });

      newSocket.on('receive_player_emote', ({ senderId, emoji }) => {
        setPlayerEmotes(prev => ({ ...prev, [senderId]: emoji }));
        setTimeout(() => {
          setPlayerEmotes(prev => {
            const copy = { ...prev };
            delete copy[senderId];
            return copy;
          });
        }, 3500);
      });

      newSocket.on('player_status_changed', ({ id, statusBadge }) => {
        setOtherPlayers(prev =>
          prev.map(p => (p.id === id ? { ...p, statusBadge } : p))
        );
      });

      newSocket.on('mini_game_start', (sessionData) => {
        setIncomingChallenge(null);
        setSelectedPlayer(null);
        setActiveMiniGame(sessionData);
        playChallengeSFX(isMutedRef.current);
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

  const localStatusBadge = activeHouse
    ? "🧠 En Énigme"
    : activeMiniGame
    ? "⚔️ En Duel"
    : activePrivatePartner
    ? "💬 En Privé"
    : null;

  useEffect(() => {
    if (socket) {
      socket.emit('player_status_update', localStatusBadge);
    }
  }, [localStatusBadge, socket]);

  const handleSendEmote = (emoji) => {
    if (socket) {
      socket.emit('send_player_emote', emoji);
    }
    if (socket?.id) {
      setPlayerEmotes(prev => ({ ...prev, [socket.id]: emoji }));
      setTimeout(() => {
        setPlayerEmotes(prev => {
          const copy = { ...prev };
          delete copy[socket.id];
          return copy;
        });
      }, 3500);
    }
  };

  const handleSolveRiddle = (currentHouseLevel) => {
    setActiveHouse(null);
    playUnlockSFX(isMutedRef.current);

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

      if (nextLevel > 100) {
        playVictorySFX(isMutedRef.current);
        setShowGrandMasterModal(true);
      } else {
        setShowPrestigeModal(true);
      }
    } else if (currentHouseLevel === unlockedLevel && unlockedLevel < 5) {
      const nextUnlocked = unlockedLevel + 1;
      setUnlockedLevel(nextUnlocked);
      if (typeof window !== 'undefined') {
        localStorage.setItem('town_riddles_unlocked_level', nextUnlocked.toString());
      }
    }
  };

  const handleSendChallenge = (gameType, targetPlayer = selectedPlayer) => {
    if (socket && targetPlayer) {
      socket.emit('send_game_challenge', {
        targetPlayerId: targetPlayer.id,
        gameType
      });
      addToast(`Défi envoyé à ${targetPlayer.nickname} ! En attente...`, 'info');
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
    return (
      <>
        <ToastNotification toasts={toasts} onDismiss={removeToast} />
        <AuthModal onJoin={handleJoin} onToast={addToast} />
      </>
    );
  }

  return (
    <main className="relative w-screen h-screen h-[100dvh] bg-slate-950 overflow-hidden flex flex-col justify-between select-none">
      {/* Toast Notifications Globales In-Game */}
      <ToastNotification toasts={toasts} onDismiss={removeToast} />

      {/* En-tête HUD Ultra-Compact et Responsive (Aligné sur 1 ligne propre sur Mobile & PC) */}
      <div className="absolute top-2 left-2 right-2 sm:top-4 sm:left-4 sm:right-4 z-40 flex items-center justify-between gap-1 pointer-events-none max-w-full overflow-hidden">
        {/* Fiche Joueur Local */}
        <div className="pointer-events-auto flex-shrink min-w-0 bg-slate-900/90 backdrop-blur-md border border-slate-700/80 px-2 py-1.5 sm:px-4 sm:py-2 rounded-xl shadow-xl flex items-center gap-1.5 sm:gap-2">
          <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-lg bg-indigo-600/30 border border-indigo-500/50 flex items-center justify-center text-indigo-400 flex-shrink-0">
            <User className="w-3 h-3 sm:w-4 sm:h-4" />
          </div>
          <div className="leading-tight min-w-0">
            <div className="text-[10px] sm:text-xs font-extrabold text-white flex items-center gap-1">
              <span className="truncate max-w-[60px] sm:max-w-[120px]">{localPlayer.nickname}</span>
              <span className="text-[8px] sm:text-[10px] font-extrabold px-1 sm:px-1.5 py-0.2 bg-indigo-600 text-white rounded-full flex-shrink-0">
                Niv.{playerLevel}
              </span>
            </div>
            <div className="text-[9px] sm:text-[11px] text-amber-400 font-bold flex items-center gap-1 mt-0.5 whitespace-nowrap">
              <Trophy className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-amber-400 flex-shrink-0" /> {unlockedLevel}/5
            </div>
          </div>
        </div>

        {/* Info Village & Boutons d'action */}
        <div className="pointer-events-auto flex-shrink-0 flex items-center gap-1 sm:gap-2">
          <div className="bg-slate-900/90 backdrop-blur-md border border-slate-700/80 px-2 py-1.5 sm:px-3 sm:py-2 rounded-xl shadow-xl flex items-center gap-1 text-[10px] sm:text-xs font-bold text-slate-200 whitespace-nowrap">
            <Home className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-indigo-400 flex-shrink-0" />
            <span className="hidden sm:inline">{villageInfo.roomName}</span>
            <span className="text-emerald-400 font-extrabold">({otherPlayers.length + 1}/5)</span>
          </div>

          {/* Bouton Leaderboard / Classement */}
          <button
            onClick={() => { playClickSFX(isMuted); setShowLeaderboardModal(true); }}
            className="w-7 h-7 sm:w-9 sm:h-9 flex-shrink-0 bg-slate-900/90 hover:bg-slate-800 backdrop-blur-md border border-slate-700/80 text-amber-400 rounded-xl shadow-xl transition-transform active:scale-95 flex items-center justify-center"
            title="Classement des Joueurs (Hall of Fame)"
          >
            <Trophy className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 text-amber-400" />
          </button>

          {/* Bouton Musique ON/OFF */}
          <button
            onClick={toggleAudio}
            className="w-7 h-7 sm:w-9 sm:h-9 flex-shrink-0 bg-slate-900/90 hover:bg-slate-800 backdrop-blur-md border border-slate-700/80 text-white rounded-xl shadow-xl transition-transform active:scale-95 flex items-center justify-center text-xs sm:text-base"
            title={isMuted ? "Activer la musique de fond" : "Couper la musique"}
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5 text-rose-400" /> : <Volume2 className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />}
          </button>

          {/* Bouton Aide / Tutoriel */}
          <button
            onClick={() => setShowTutorialModal(true)}
            className="w-7 h-7 sm:w-9 sm:h-9 flex-shrink-0 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black rounded-xl shadow-xl shadow-amber-500/20 transition-transform active:scale-95 flex items-center justify-center text-xs sm:text-lg"
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
        playerEmotes={playerEmotes}
        localStatusBadge={localStatusBadge}
      />

      {/* Barre d'Émotes Rapides */}
      <EmoteBar onSendEmote={handleSendEmote} isMuted={isMuted} />

      {/* Radar / Mini-Carte de la Ville */}
      <MiniMap
        localPlayer={localPlayer}
        otherPlayers={otherPlayers}
        unlockedLevel={unlockedLevel}
        playerLevel={playerLevel}
      />

      {/* Chat de Proximité (Badge pilule minimaliste "Joueur proche") */}
      <ProximityChat
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
            <div className="w-12 h-12 rounded-2xl bg-indigo-600/20 border border-indigo-500/40 mx-auto flex items-center justify-center text-indigo-400">
              <User className="w-6 h-6" />
            </div>
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
                onClick={() => {
                  const target = selectedPlayer;
                  setSelectedPlayer(null);
                  if (target) handleStartPrivateChat(target);
                }}
                className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-xs shadow-lg flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" /> Discuter en Privé (1-sur-1)
              </button>
              <button
                onClick={() => {
                  const target = selectedPlayer;
                  setSelectedPlayer(null);
                  if (target) handleSendChallenge('rps', target);
                }}
                className="w-full py-2.5 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold rounded-xl text-xs shadow-lg flex items-center justify-center gap-2"
              >
                <Swords className="w-4 h-4" /> Pierre-Papier-Ciseaux
              </button>
              <button
                onClick={() => {
                  const target = selectedPlayer;
                  setSelectedPlayer(null);
                  if (target) handleSendChallenge('ttt', target);
                }}
                className="w-full py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold rounded-xl text-xs shadow-lg flex items-center justify-center gap-2"
              >
                <Swords className="w-4 h-4" /> Morpion (Tic-Tac-Toe)
              </button>
              <button
                onClick={() => {
                  const target = selectedPlayer;
                  setSelectedPlayer(null);
                  if (target) handleSendChallenge('number_guess', target);
                }}
                className="w-full py-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold rounded-xl text-xs shadow-lg flex items-center justify-center gap-2"
              >
                <Swords className="w-4 h-4" /> Devine le Nombre (1-100)
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
              {incomingChallenge.gameType === 'rps'
                ? 'Pierre-Papier-Ciseaux'
                : incomingChallenge.gameType === 'ttt'
                ? 'Morpion'
                : 'Devine le Nombre (1-100)'} !
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

      {/* Modal Classement des Joueurs */}
      {showLeaderboardModal && (
        <LeaderboardModal
          players={[...otherPlayers, localPlayer]}
          localPlayerId={socket?.id}
          roomName={villageInfo.roomName}
          onClose={() => setShowLeaderboardModal(false)}
        />
      )}

      {/* Modal Tutoriel */}
      {showTutorialModal && (
        <TutorialModal onClose={handleCloseTutorial} />
      )}

      {/* Modal Grand Maître des Énigmes (Feux d'Artifice & Couronne) */}
      {showGrandMasterModal && (
        <GrandMasterModal onClose={() => setShowGrandMasterModal(false)} />
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
