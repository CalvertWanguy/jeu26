"use client";
import React, { useState } from 'react';
import { User, LogIn, ArrowRight, Info } from 'lucide-react';

export default function AuthModal({ onJoin, onToast }) {
  const [nickname, setNickname] = useState('');
  const [gender, setGender] = useState('boy');
  const [authMode, setAuthMode] = useState('guest');
  const [notice, setNotice] = useState(null);

  const handleGoogleClick = () => {
    const msg = "La connexion Google OAuth sera disponible très bientôt !";
    if (onToast) {
      onToast(msg, 'info');
    } else {
      setNotice(msg);
      setTimeout(() => setNotice(null), 4000);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nickname.trim()) return;
    onJoin({ nickname: nickname.trim(), gender, isGuest: authMode === 'guest' });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-2 sm:p-4 overflow-y-auto">
      <div className="w-full max-w-md max-h-[90vh] bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-y-auto flex flex-col my-auto">
        
        {/* Header avec dégradé moderne Violet/Indigo */}
        <div className="bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 p-5 sm:p-7 text-center flex-shrink-0">
          <h1 className="text-2xl font-black text-white tracking-wide uppercase">
            Town Riddles Online
          </h1>
          <p className="text-xs text-indigo-100 font-medium mt-1.5 leading-relaxed">
            Rejoignez la ville virtuelle, rencontrez des joueurs et résolvez 5 niveaux de devinettes !
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          {notice && (
            <div className="p-3 rounded-xl bg-indigo-950/80 border border-indigo-500/50 text-indigo-200 text-xs flex items-center gap-2">
              <Info className="w-4 h-4 text-indigo-400 shrink-0" />
              <span>{notice}</span>
            </div>
          )}

          {/* Mode de connexion */}
          <div className="grid grid-cols-2 gap-2 p-1.5 bg-slate-800/80 rounded-2xl border border-slate-700/50">
            <button
              type="button"
              onClick={() => setAuthMode('guest')}
              className={`py-2.5 px-3 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-2 ${
                authMode === 'guest'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <User className="w-4 h-4" /> Mode Invité (Guest)
            </button>
            <button
              type="button"
              onClick={handleGoogleClick}
              className="py-2.5 px-3 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-2 text-slate-400 hover:text-white hover:bg-slate-700/50"
            >
              <LogIn className="w-4 h-4 text-rose-400" /> Compte Google (Bientôt)
            </button>
          </div>

          {/* Saisie du Pseudo */}
          <div>
            <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-widest mb-2">
              Votre Pseudo
            </label>
            <input
              type="text"
              required
              maxLength={14}
              placeholder="Ex: Alex, Sam, Luna..."
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              className="w-full px-4 py-3 bg-slate-800/90 border border-slate-700/80 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 text-sm font-semibold transition-all"
            />
          </div>

          {/* Choix de l'Avatar / Genre */}
          <div>
            <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-widest mb-2">
              Choisissez votre Personnage
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setGender('boy')}
                className={`p-4 rounded-2xl border-2 transition-all flex flex-col items-center gap-2 ${
                  gender === 'boy'
                    ? 'border-indigo-500 bg-indigo-500/15 text-white shadow-lg shadow-indigo-500/20'
                    : 'border-slate-800 bg-slate-800/60 text-slate-400 hover:border-slate-700'
                }`}
              >
                <div className="w-10 h-10 rounded-full bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400">
                  <User className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold">Garçon</span>
              </button>

              <button
                type="button"
                onClick={() => setGender('girl')}
                className={`p-4 rounded-2xl border-2 transition-all flex flex-col items-center gap-2 ${
                  gender === 'girl'
                    ? 'border-pink-500 bg-pink-500/15 text-white shadow-lg shadow-pink-500/20'
                    : 'border-slate-800 bg-slate-800/60 text-slate-400 hover:border-slate-700'
                }`}
              >
                <div className="w-10 h-10 rounded-full bg-pink-500/20 border border-pink-500/40 flex items-center justify-center text-pink-400">
                  <User className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold">Fille</span>
              </button>
            </div>
          </div>

          {/* Bouton Valider */}
          <button
            type="submit"
            disabled={!nickname.trim()}
            className="w-full py-3.5 px-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:to-pink-600 disabled:opacity-50 text-white font-extrabold rounded-2xl shadow-lg shadow-indigo-500/30 transition-all flex items-center justify-center gap-2 text-sm tracking-wide"
          >
            Entrer dans la Ville <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
}
