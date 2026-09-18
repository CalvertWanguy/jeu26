"use client";
import React, { useState, useEffect } from 'react';
import { Swords, X, Trophy, Shield, FileText, Scissors, Hash, HelpCircle, ArrowUp, ArrowDown, CheckCircle2, Send } from 'lucide-react';

export default function MiniGameModal({ session, socket, localPlayerId, onClose }) {
  const isP1 = session.p1.id === localPlayerId;
  const opponentName = isP1 ? session.p2.name : session.p1.name;

  const [rpsChoice, setRpsChoice] = useState(null);
  const [rpsResult, setRpsResult] = useState(null);

  const [tttBoard, setTttBoard] = useState(session.board || Array(9).fill(null));
  const [currentTurn, setCurrentTurn] = useState(session.currentTurn);
  const [tttWinner, setTttWinner] = useState(null);

  // États pour Devine le Nombre (1 - 100)
  const [numberInput, setNumberInput] = useState('');
  const [numberHistory, setNumberHistory] = useState(session.history || []);
  const [numberMinRange, setNumberMinRange] = useState(session.minRange || 1);
  const [numberMaxRange, setNumberMaxRange] = useState(session.maxRange || 100);
  const [numberWinner, setNumberWinner] = useState(session.winnerId || null);

  const [rematchRequestedByMe, setRematchRequestedByMe] = useState(false);
  const [rematchRequestedByOpponent, setRematchRequestedByOpponent] = useState(false);
  const [quitMessage, setQuitMessage] = useState(null);

  useEffect(() => {
    if (!socket) return;

    const handleRpsResult = (data) => setRpsResult(data);
    const handleTttUpdate = (data) => {
      setTttBoard(data.board);
      setCurrentTurn(data.currentTurn);
    };
    const handleTttGameOver = (data) => {
      setTttBoard(data.board);
      setTttWinner(data);
    };

    const handleNumberGuessUpdate = (data) => {
      setNumberHistory(data.history || []);
      setNumberMinRange(data.minRange);
      setNumberMaxRange(data.maxRange);
      setCurrentTurn(data.currentTurn);
      if (data.status === 'finished') {
        setNumberWinner(data.winnerId);
      }
    };

    const handleRematchRequested = (data) => {
      setRematchRequestedByOpponent(true);
    };

    const handleRematchStart = (newSession) => {
      setRpsChoice(null);
      setRpsResult(null);
      setTttBoard(Array(9).fill(null));
      setCurrentTurn(newSession.currentTurn);
      setTttWinner(null);

      setNumberInput('');
      setNumberHistory([]);
      setNumberMinRange(1);
      setNumberMaxRange(100);
      setNumberWinner(null);

      setRematchRequestedByMe(false);
      setRematchRequestedByOpponent(false);
      setQuitMessage(null);
    };

    const handleMinigameQuit = (data) => {
      setQuitMessage(data.message);
      setTimeout(() => {
        onClose();
      }, 1800);
    };

    socket.on('rps_result', handleRpsResult);
    socket.on('ttt_update', handleTttUpdate);
    socket.on('ttt_game_over', handleTttGameOver);
    socket.on('number_guess_update', handleNumberGuessUpdate);
    socket.on('rematch_requested', handleRematchRequested);
    socket.on('rematch_start', handleRematchStart);
    socket.on('minigame_quit_by_opponent', handleMinigameQuit);

    return () => {
      socket.off('rps_result', handleRpsResult);
      socket.off('ttt_update', handleTttUpdate);
      socket.off('ttt_game_over', handleTttGameOver);
      socket.off('number_guess_update', handleNumberGuessUpdate);
      socket.off('rematch_requested', handleRematchRequested);
      socket.off('rematch_start', handleRematchStart);
      socket.off('minigame_quit_by_opponent', handleMinigameQuit);
    };
  }, [socket, onClose]);

  const handleRpsPlay = (choice) => {
    setRpsChoice(choice);
    socket.emit('play_rps_choice', { gameId: session.gameId, choice });
  };

  const handleTttCellClick = (index) => {
    if (currentTurn !== localPlayerId || tttBoard[index] !== null || tttWinner) return;
    socket.emit('play_ttt_move', { gameId: session.gameId, cellIndex: index });
  };

  const handleSendNumberGuess = (e) => {
    e.preventDefault();
    const num = parseInt(numberInput, 10);
    if (isNaN(num) || num < 1 || num > 100 || currentTurn !== localPlayerId || numberWinner) return;

    socket.emit('play_number_guess_move', { gameId: session.gameId, guess: num });
    setNumberInput('');
  };

  const handleRequestRematch = () => {
    setRematchRequestedByMe(true);
    socket.emit('request_rematch', { gameId: session.gameId });
  };

  const handleQuitGame = () => {
    socket.emit('quit_minigame', { gameId: session.gameId });
    onClose();
  };

  const renderRpsIcon = (choice) => {
    if (choice === 'rock') return <Shield className="w-8 h-8 text-blue-400" />;
    if (choice === 'paper') return <FileText className="w-8 h-8 text-emerald-400" />;
    return <Scissors className="w-8 h-8 text-amber-400" />;
  };

  const getGameTitle = () => {
    if (session.gameType === 'rps') return 'Pierre - Papier - Ciseaux';
    if (session.gameType === 'ttt') return 'Morpion';
    return 'Devine le Nombre (1-100)';
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-2 sm:p-4 overflow-y-auto">
      <div className="w-full max-w-md max-h-[90vh] bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-y-auto flex flex-col my-auto">
        
        {/* Header */}
        <div className="bg-slate-800 p-4 border-b border-slate-700 flex items-center justify-between">
          <div className="flex items-center gap-2 text-white font-bold text-sm">
            <Swords className="w-5 h-5 text-amber-400" />
            {getGameTitle()}
          </div>
          <button onClick={handleQuitGame} className="text-slate-400 hover:text-white p-1">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Info Joueurs */}
        <div className="p-4 bg-slate-800/40 border-b border-slate-800 flex items-center justify-around text-xs font-bold text-slate-300">
          <span className="text-blue-400">Vous ({session.p1.id === localPlayerId ? 'Joueur 1' : 'Joueur 2'})</span>
          <span className="text-amber-400">VS</span>
          <span className="text-pink-400">{opponentName}</span>
        </div>

        {/* Notification d'abandon */}
        {quitMessage && (
          <div className="p-3 bg-rose-500/20 border-b border-rose-500/30 text-rose-300 text-xs font-bold text-center">
            {quitMessage}
          </div>
        )}

        <div className="p-6">
          {session.gameType === 'rps' ? (
            /* CHI-FOU-MI */
            <div className="space-y-6 text-center">
              {!rpsResult ? (
                <>
                  <p className="text-xs text-slate-400 font-semibold">
                    Faites votre choix. Le résultat s'affichera dès que {opponentName} aura joué.
                  </p>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { id: 'rock', icon: <Shield className="w-7 h-7 text-blue-400" />, label: 'Pierre' },
                      { id: 'paper', icon: <FileText className="w-7 h-7 text-emerald-400" />, label: 'Papier' },
                      { id: 'scissors', icon: <Scissors className="w-7 h-7 text-amber-400" />, label: 'Ciseaux' }
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => handleRpsPlay(item.id)}
                        disabled={rpsChoice !== null}
                        className={`p-4 rounded-xl border-2 flex flex-col items-center gap-2 transition-all ${
                          rpsChoice === item.id
                            ? 'border-blue-500 bg-blue-500/20 text-white'
                            : 'border-slate-700 bg-slate-800 text-slate-300 hover:border-slate-600'
                        }`}
                      >
                        {item.icon}
                        <span className="text-xs font-bold">{item.label}</span>
                      </button>
                    ))}
                  </div>

                  {rpsChoice && (
                    <p className="text-xs text-amber-400 animate-pulse font-bold">
                      En attente de la réponse de {opponentName}...
                    </p>
                  )}
                </>
              ) : (
                <div className="space-y-4">
                  <div className="text-xl font-extrabold text-white flex items-center justify-center gap-2">
                    {rpsResult.winnerId === 'draw' ? (
                      'ÉGALITÉ'
                    ) : rpsResult.winnerId === localPlayerId ? (
                      <span className="text-emerald-400 flex items-center gap-2"><Trophy className="w-6 h-6" /> VICTOIRE</span>
                    ) : (
                      <span className="text-rose-400">DÉFAITE</span>
                    )}
                  </div>

                  <div className="flex justify-center gap-12 py-4 bg-slate-800/60 rounded-xl">
                    <div className="flex flex-col items-center gap-2">
                      <p className="text-xs text-slate-400">Vous</p>
                      {renderRpsIcon(rpsResult.p1Choice)}
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <p className="text-xs text-slate-400">{opponentName}</p>
                      {renderRpsIcon(rpsResult.p2Choice)}
                    </div>
                  </div>

                  {rematchRequestedByOpponent && !rematchRequestedByMe && (
                    <p className="text-xs font-bold text-amber-400 animate-pulse">
                      {opponentName} souhaite rejouer !
                    </p>
                  )}

                  {rematchRequestedByMe && !rematchRequestedByOpponent && (
                    <p className="text-xs font-bold text-indigo-300 animate-pulse">
                      Demande de revanche envoyée... En attente de {opponentName}...
                    </p>
                  )}

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <button
                      onClick={handleRequestRematch}
                      disabled={rematchRequestedByMe}
                      className="py-2.5 px-4 bg-emerald-600 hover:bg-emerald-500 disabled:bg-slate-800 text-white font-bold rounded-xl text-xs shadow-md"
                    >
                      {rematchRequestedByMe ? 'En attente...' : 'Rejouer'}
                    </button>
                    <button
                      onClick={handleQuitGame}
                      className="py-2.5 px-4 bg-slate-700 hover:bg-slate-600 text-slate-200 font-bold rounded-xl text-xs shadow-md"
                    >
                      Quitter
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : session.gameType === 'ttt' ? (
            /* MORPION */
            <div className="space-y-4 text-center">
              {!tttWinner ? (
                <p className="text-xs font-bold text-slate-300">
                  {currentTurn === localPlayerId
                    ? "C'est à votre tour de jouer !"
                    : `Tour de ${opponentName}...`}
                </p>
              ) : (
                <div className="text-base font-extrabold text-amber-400 flex items-center justify-center gap-2">
                  {tttWinner.isDraw ? (
                    'Match Nul'
                  ) : tttWinner.winnerId === localPlayerId ? (
                    <span className="text-emerald-400 flex items-center gap-2"><Trophy className="w-5 h-5" /> Vous avez Gagné !</span>
                  ) : (
                    <span className="text-rose-400">{opponentName} a Gagné !</span>
                  )}
                </div>
              )}

              <div className="grid grid-cols-3 gap-2 w-64 h-64 mx-auto">
                {tttBoard.map((cell, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleTttCellClick(idx)}
                    disabled={currentTurn !== localPlayerId || cell !== null || !!tttWinner}
                    className="bg-slate-800 hover:bg-slate-700 disabled:opacity-80 border border-slate-700 rounded-xl text-3xl font-extrabold flex items-center justify-center transition-colors text-white"
                  >
                    {cell === 'X' ? <span className="text-blue-400">X</span> : cell === 'O' ? <span className="text-pink-400">O</span> : ''}
                  </button>
                ))}
              </div>

              {tttWinner && (
                <div className="space-y-3 pt-2">
                  {rematchRequestedByOpponent && !rematchRequestedByMe && (
                    <p className="text-xs font-bold text-amber-400 animate-pulse">
                      {opponentName} souhaite rejouer !
                    </p>
                  )}

                  {rematchRequestedByMe && !rematchRequestedByOpponent && (
                    <p className="text-xs font-bold text-indigo-300 animate-pulse">
                      Demande de revanche envoyée... En attente de {opponentName}...
                    </p>
                  )}

                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={handleRequestRematch}
                      disabled={rematchRequestedByMe}
                      className="py-2.5 px-4 bg-emerald-600 hover:bg-emerald-500 disabled:bg-slate-800 text-white font-bold rounded-xl text-xs shadow-md"
                    >
                      {rematchRequestedByMe ? 'En attente...' : 'Rejouer'}
                    </button>
                    <button
                      onClick={handleQuitGame}
                      className="py-2.5 px-4 bg-slate-700 hover:bg-slate-600 text-slate-200 font-bold rounded-xl text-xs shadow-md"
                    >
                      Quitter
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* DEVINE LE NOMBRE (1 - 100) */
            <div className="space-y-5 text-center">
              {!numberWinner ? (
                <>
                  {/* Encadrement de l'intervalle */}
                  <div className="p-3 bg-slate-800/80 border border-indigo-500/40 rounded-xl">
                    <p className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">
                      Intervalle Recherche Actuel
                    </p>
                    <p className="text-lg font-black text-amber-300 mt-0.5">
                      [{numberMinRange} &nbsp;—&nbsp; {numberMaxRange}]
                    </p>
                  </div>

                  {/* Statut du tour */}
                  <div className="text-xs font-extrabold">
                    {currentTurn === localPlayerId ? (
                      <span className="text-emerald-400 animate-pulse">
                        À votre tour ! Proposez un nombre (1-100)
                      </span>
                    ) : (
                      <span className="text-slate-400">
                        En attente de la proposition de <strong className="text-pink-400">{opponentName}</strong>...
                      </span>
                    )}
                  </div>

                  {/* Formulaire de saisie */}
                  <form onSubmit={handleSendNumberGuess} className="flex gap-2">
                    <input
                      type="number"
                      min={1}
                      max={100}
                      required
                      disabled={currentTurn !== localPlayerId}
                      placeholder="Ex: 42..."
                      value={numberInput}
                      onChange={(e) => setNumberInput(e.target.value)}
                      className="flex-1 px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm font-bold placeholder-slate-500 focus:outline-none focus:border-indigo-500 disabled:opacity-50"
                    />
                    <button
                      type="submit"
                      disabled={currentTurn !== localPlayerId || !numberInput}
                      className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 text-white font-extrabold rounded-xl text-xs shadow-lg flex items-center justify-center gap-1.5"
                    >
                      <Send className="w-4 h-4" /> Proposer
                    </button>
                  </form>
                </>
              ) : (
                /* Victoire / Défaite Devine le Nombre */
                <div className="space-y-4">
                  <div className="text-xl font-extrabold text-white flex items-center justify-center gap-2">
                    {numberWinner === localPlayerId ? (
                      <span className="text-emerald-400 flex items-center gap-2">
                        <Trophy className="w-6 h-6 text-amber-400" /> VOUS AVEZ TROUVÉ ! VICTOIRE !
                      </span>
                    ) : (
                      <span className="text-rose-400">
                        {opponentName} a trouvé le nombre exact !
                      </span>
                    )}
                  </div>

                  {rematchRequestedByOpponent && !rematchRequestedByMe && (
                    <p className="text-xs font-bold text-amber-400 animate-pulse">
                      {opponentName} souhaite rejouer !
                    </p>
                  )}

                  {rematchRequestedByMe && !rematchRequestedByOpponent && (
                    <p className="text-xs font-bold text-indigo-300 animate-pulse">
                      Demande de revanche envoyée... En attente de {opponentName}...
                    </p>
                  )}

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <button
                      onClick={handleRequestRematch}
                      disabled={rematchRequestedByMe}
                      className="py-2.5 px-4 bg-emerald-600 hover:bg-emerald-500 disabled:bg-slate-800 text-white font-bold rounded-xl text-xs shadow-md"
                    >
                      {rematchRequestedByMe ? 'En attente...' : 'Rejouer'}
                    </button>
                    <button
                      onClick={handleQuitGame}
                      className="py-2.5 px-4 bg-slate-700 hover:bg-slate-600 text-slate-200 font-bold rounded-xl text-xs shadow-md"
                    >
                      Quitter
                    </button>
                  </div>
                </div>
              )}

              {/* Journal d'Historique des essais */}
              <div className="pt-2 border-t border-slate-800">
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-2">
                  Historique des Tentatives
                </p>
                <div className="max-h-36 overflow-y-auto space-y-1.5 text-xs text-left bg-slate-950/60 p-2.5 rounded-xl border border-slate-800/80">
                  {numberHistory.length === 0 ? (
                    <p className="text-slate-500 text-[11px] italic text-center py-2">
                      Aucune tentative pour l'instant.
                    </p>
                  ) : (
                    [...numberHistory].reverse().map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center justify-between bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800 text-[11px]"
                      >
                        <span className="font-bold text-slate-300">
                          {item.playerName} ({item.guess})
                        </span>
                        {item.feedback === 'higher' ? (
                          <span className="text-amber-400 font-bold flex items-center gap-1">
                            <ArrowUp className="w-3 h-3" /> Trop Petit
                          </span>
                        ) : item.feedback === 'lower' ? (
                          <span className="text-blue-400 font-bold flex items-center gap-1">
                            <ArrowDown className="w-3 h-3" /> Trop Grand
                          </span>
                        ) : (
                          <span className="text-emerald-400 font-extrabold flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5" /> Trouvé !
                          </span>
                        )}
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
