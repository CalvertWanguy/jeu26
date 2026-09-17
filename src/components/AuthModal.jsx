"use client";
import React, { useState } from 'react';
import { User, Sparkles, LogIn, ArrowRight } from 'lucide-react';

export default function AuthModal({ onJoin }) {
  const [nickname, setNickname] = useState('');
  const [gender, setGender] = useState('boy'); // 'boy' ou 'girl'
  const [authMode, setAuthMode] = useState('guest'); // 'guest' ou 'google'

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nickname.trim()) return;
    onJoin({ nickname: nickname.trim(), gender, isGuest: authMode === 'guest' });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-4">
      <div className="w-full max-w-md bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden animate-float">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-6 text-center">
          <div className="inline-flex p-3 bg-white/10 rounded-full mb-3 backdrop-blur-sm">
            <Sparkles className="w-8 h-8 text-yellow-300" />
          </div>
          <h1 className="text-2xl font-extrabold text-white tracking-wide">
            TOWN RIDDLES ONLINE
          </h1>
          <p className="text-xs text-blue-100 mt-1">
            Entrez dans la ville virtuelle, rencontrez des joueurs et résolvez 5 niveaux de devinettes !
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          {/* Mode de connexion */}
          <div className="grid grid-cols-2 gap-2 p-1 bg-slate-800 rounded-xl">
            <button
              type="button"
              onClick={() => setAuthMode('guest')}
              className={`py-2 px-3 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-2 ${
                authMode === 'guest'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <User className="w-4 h-4" /> Mode Invité (Guest)
            </button>
            <button
              type="button"
              onClick={() => alert("La connexion Google OAuth sera activée prochainement ! Pour l'instant, profitez du mode Invité.")}
              className="py-2 px-3 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-2 text-slate-400 hover:text-white hover:bg-slate-700/50"
            >
              <LogIn className="w-4 h-4 text-red-400" /> Compte Google (Bientôt)
            </button>
          </div>

          {/* Saisie du Pseudo */}
          <div>
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
              Votre Pseudo
            </label>
            <input
              type="text"
              required
              maxLength={14}
              placeholder="Ex: Alex, Sam, Luna..."
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-sm"
            />
          </div>

          {/* Choix de l'Avatar / Genre */}
          <div>
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
              Choisissez votre Personnage
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setGender('boy')}
                className={`p-4 rounded-xl border-2 transition-all flex flex-col items-center gap-2 ${
                  gender === 'boy'
                    ? 'border-blue-500 bg-blue-500/10 text-white shadow-lg shadow-blue-500/20'
                    : 'border-slate-700 bg-slate-800 text-slate-400 hover:border-slate-600'
                }`}
              >
                <span className="text-4xl">👦</span>
                <span className="text-xs font-bold">Garçon</span>
              </button>

              <button
                type="button"
                onClick={() => setGender('girl')}
                className={`p-4 rounded-xl border-2 transition-all flex flex-col items-center gap-2 ${
                  gender === 'girl'
                    ? 'border-pink-500 bg-pink-500/10 text-white shadow-lg shadow-pink-500/20'
                    : 'border-slate-700 bg-slate-800 text-slate-400 hover:border-slate-600'
                }`}
              >
                <span className="text-4xl">👧</span>
                <span className="text-xs font-bold">Fille</span>
              </button>
            </div>
          </div>

          {/* Bouton Valider */}
          <button
            type="submit"
            disabled={!nickname.trim()}
            className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 disabled:opacity-50 text-white font-bold rounded-xl shadow-lg shadow-blue-500/30 transition-all flex items-center justify-center gap-2 text-sm"
          >
            Entrer dans la Ville <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
}
