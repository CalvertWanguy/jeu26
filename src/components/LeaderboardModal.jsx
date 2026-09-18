"use client";
import React from 'react';
import { Trophy, X, Crown, User, ShieldCheck } from 'lucide-react';

export default function LeaderboardModal({ players, localPlayerId, roomName, onClose }) {
  const sortedPlayers = [...players].sort((a, b) => (b.level || 1) - (a.level || 1));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-2 sm:p-4 overflow-y-auto">
      <div className="w-full max-w-md bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl overflow-hidden flex flex-col my-auto">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-500 via-orange-600 to-amber-600 p-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-white/20 rounded-2xl backdrop-blur-md">
              <Trophy className="w-6 h-6 text-yellow-200" />
            </div>
            <div>
              <h2 className="text-base font-black uppercase tracking-wide">Classement des Joueurs</h2>
              <p className="text-xs text-amber-100 font-semibold">{roomName || "Village #1"}</p>
            </div>
          </div>
          <button onClick={onClose} className="text-white/80 hover:text-white p-1 rounded-xl">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Players List */}
        <div className="p-5 space-y-2.5 max-h-[60vh] overflow-y-auto">
          {sortedPlayers.length === 0 ? (
            <p className="text-xs text-slate-400 text-center py-6">Aucun joueur dans ce village.</p>
          ) : (
            sortedPlayers.map((player, idx) => {
              const isLocal = player.id === localPlayerId;
              const isGrandMaster = player.level >= 100;

              return (
                <div
                  key={player.id || idx}
                  className={`p-3.5 rounded-2xl border flex items-center justify-between transition-all ${
                    isLocal
                      ? 'border-indigo-500 bg-indigo-500/15'
                      : 'border-slate-800 bg-slate-800/60'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {/* Rank Number */}
                    <div
                      className={`w-7 h-7 rounded-xl font-black text-xs flex items-center justify-center ${
                        idx === 0
                          ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/30'
                          : idx === 1
                          ? 'bg-slate-300 text-slate-900'
                          : idx === 2
                          ? 'bg-amber-700 text-white'
                          : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      #{idx + 1}
                    </div>

                    {/* Avatar & Name */}
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-extrabold text-white">
                          {player.nickname}
                        </span>
                        {isGrandMaster && (
                          <span className="text-amber-400 text-xs" title="Grand Maître des Énigmes">
                            👑
                          </span>
                        )}
                        {isLocal && (
                          <span className="text-[9px] font-bold px-1.5 py-0.2 bg-indigo-600 text-white rounded-full">
                            Vous
                          </span>
                        )}
                      </div>
                      <p className="text-[10px] text-slate-400 font-medium">
                        {isGrandMaster ? "Grand Maître Émérite" : `Niveau ${player.level || 1}`}
                      </p>
                    </div>
                  </div>

                  {/* Level Badge */}
                  <div className="px-3 py-1 bg-slate-900 border border-slate-700 rounded-xl text-xs font-black text-amber-400">
                    Niv. {player.level || 1}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-800/40 border-t border-slate-800 text-center">
          <button
            onClick={onClose}
            className="w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold rounded-xl text-xs"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
}
