"use client";
import React, { useState, useEffect } from 'react';
import { Swords, X, Trophy, RefreshCw } from 'lucide-react';

export default function MiniGameModal({ session, socket, localPlayerId, onClose }) {
  const isP1 = session.p1.id === localPlayerId;
  const opponentName = isP1 ? session.p2.name : session.p1.name;

  // État local pour Pierre-Papier-Ciseaux
  const [rpsChoice, setRpsChoice] = useState(null);
  const [rpsResult, setRpsResult] = useState(null);

  // État local pour Morpion (Tic-Tac-Toe)
  const [tttBoard, setTttBoard] = useState(session.board || Array(9).fill(null));
  const [currentTurn, setCurrentTurn] = useState(session.currentTurn);
  const [tttWinner, setTttWinner] = useState(null);

  useEffect(() => {
    if (!socket) return;

    // Événement Résultat RPS
    const handleRpsResult = (data) => {
      setRpsResult(data);
    };

    // Événement Update Tic-Tac-Toe
    const handleTttUpdate = (data) => {
      setTttBoard(data.board);
      setCurrentTurn(data.currentTurn);
    };

    // Événement Game Over Tic-Tac-Toe
    const handleTttGameOver = (data) => {
      setTttBoard(data.board);
      setTttWinner(data);
    };

    socket.on('rps_result', handleRpsResult);
    socket.on('ttt_update', handleTttUpdate);
    socket.on('ttt_game_over', handleTttGameOver);

    return () => {
      socket.off('rps_result', handleRpsResult);
      socket.off('ttt_update', handleTttUpdate);
      socket.off('ttt_game_over', handleTttGameOver);
    };
  }, [socket]);

  // Envoi du choix Pierre-Papier-Ciseaux
  const handleRpsPlay = (choice) => {
    setRpsChoice(choice);
    socket.emit('play_rps_choice', { gameId: session.gameId, choice });
  };

  // Envoi du coup Morpion
  const handleTttCellClick = (index) => {
    if (currentTurn !== localPlayerId || tttBoard[index] !== null || tttWinner) return;
    socket.emit('play_ttt_move', { gameId: session.gameId, cellIndex: index });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-4">
      <div className="w-full max-w-md bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="bg-slate-800 p-4 border-b border-slate-700 flex items-center justify-between">
          <div className="flex items-center gap-2 text-white font-bold text-sm">
            <Swords className="w-5 h-5 text-amber-400" />
            {session.gameType === 'rps' ? 'Pierre - Papier - Ciseaux' : 'Morpion (Tic-Tac-Toe)'}
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white p-1">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Info Joueurs */}
        <div className="p-4 bg-slate-800/40 border-b border-slate-800 flex items-center justify-around text-xs font-bold text-slate-300">
          <span className="text-blue-400">Vous ({session.p1.id === localPlayerId ? 'Joueur 1' : 'Joueur 2'})</span>
          <span className="text-amber-400">VS</span>
          <span className="text-pink-400">{opponentName}</span>
        </div>

        <div className="p-6">
          {session.gameType === 'rps' ? (
            /* ================= PIERRE-PAPIER-CISEAUX ================= */
            <div className="space-y-6 text-center">
              {!rpsResult ? (
                <>
                  <p className="text-xs text-slate-400 font-semibold">
                    Faites votre choix ! Le résultat s'affichera dès que {opponentName} aura choisi.
                  </p>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { id: 'rock', icon: '🪨', label: 'Pierre' },
                      { id: 'paper', icon: '📄', label: 'Papier' },
                      { id: 'scissors', icon: '✂️', label: 'Ciseaux' }
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
                        <span className="text-3xl">{item.icon}</span>
                        <span className="text-xs font-bold">{item.label}</span>
                      </button>
                    ))}
                  </div>

                  {rpsChoice && (
                    <p className="text-xs text-amber-400 animate-pulse font-bold">
                      En attente du choix de {opponentName}...
                    </p>
                  )}
                </>
              ) : (
                /* Résultat RPS */
                <div className="space-y-4">
                  <div className="text-4xl font-extrabold text-white">
                    {rpsResult.winnerId === 'draw'
                      ? '🤝 ÉGALITÉ !'
                      : rpsResult.winnerId === localPlayerId
                      ? '🎉 VICTOIRE !'
                      : '💀 DÉFAITE'}
                  </div>
                  <div className="flex justify-center gap-8 py-4 bg-slate-800/60 rounded-xl">
                    <div>
                      <p className="text-xs text-slate-400">Vous</p>
                      <p className="text-3xl mt-1">
                        {rpsResult.p1Choice === 'rock' ? '🪨' : rpsResult.p1Choice === 'paper' ? '📄' : '✂️'}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">{opponentName}</p>
                      <p className="text-3xl mt-1">
                        {rpsResult.p2Choice === 'rock' ? '🪨' : rpsResult.p2Choice === 'paper' ? '📄' : '✂️'}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={onClose}
                    className="w-full py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl text-xs"
                  >
                    Fermer le jeu
                  </button>
                </div>
              )}
            </div>
          ) : (
            /* ================= MORPION / TIC-TAC-TOE ================= */
            <div className="space-y-4 text-center">
              {!tttWinner ? (
                <p className="text-xs font-bold text-slate-300">
                  {currentTurn === localPlayerId
                    ? " C'est à VOTRE tour de jouer !"
                    : `⏳ Tour de ${opponentName}...`}
                </p>
              ) : (
                <div className="text-lg font-extrabold text-amber-400">
                  {tttWinner.isDraw
                    ? '🤝 Égalité !'
                    : tttWinner.winnerId === localPlayerId
                    ? '🎉 Vous avez GAGNÉ !'
                    : `💀 ${opponentName} a gagné !`}
                </div>
              )}

              {/* Grille 3x3 */}
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
                <button
                  onClick={onClose}
                  className="w-full py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl text-xs mt-4"
                >
                  Quitter la partie
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
