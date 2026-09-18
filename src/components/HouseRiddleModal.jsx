"use client";
import React, { useState } from 'react';
import { Lock, CheckCircle2, X, HelpCircle, ArrowRight, Building2, Sparkles, AlertCircle, Trophy, RotateCcw } from 'lucide-react';
import { getRiddle } from '../data/riddlesData';

export default function HouseRiddleModal({ house, unlockedLevel, cycle = 1, onSolveRiddle, onClose }) {
  // Sélection précise de la devinette selon le Cycle actuel (1 à 50) et la Maison (1 à 5)
  const riddleInfo = getRiddle(cycle, house.level);

  const isUnlocked = house.level <= unlockedLevel;
  const isAlreadySolved = house.level < unlockedLevel;

  const [selectedOption, setSelectedOption] = useState(null);
  const [feedbackMsg, setFeedbackMsg] = useState(null);
  const [showHint, setShowHint] = useState(false);

  const handleValidate = () => {
    if (selectedOption === null) return;

    if (selectedOption === riddleInfo.correctIndex) {
      setFeedbackMsg({ type: 'success', text: "Bravo ! Bonne réponse !" });
      setTimeout(() => {
        onSolveRiddle(house.level);
      }, 1200);
    } else {
      setFeedbackMsg({ type: 'error', text: "Mauvaise réponse... Réessayez !" });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-2 sm:p-4 overflow-y-auto">
      <div className="w-full max-w-lg max-h-[90vh] bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl overflow-hidden flex flex-col my-auto transition-all">
        
        {/* Header */}
        <div className="bg-slate-800/90 p-4 sm:p-5 px-5 sm:px-6 border-b border-slate-700 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 sm:p-2.5 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl text-indigo-400">
              <Building2 className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h2 className="text-sm sm:text-base font-extrabold text-white">{house.name}</h2>
              <p className="text-[11px] sm:text-xs text-indigo-300 font-semibold">
                Niveau {house.level} / 5 <span className="text-slate-400">• Cycle {cycle} ({riddleInfo.difficulty})</span>
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-xl hover:bg-slate-700/50 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 space-y-4 sm:space-y-5 overflow-y-auto flex-1">
          {!isUnlocked ? (
            <div className="py-8 text-center space-y-4">
              <div className="inline-flex p-4 bg-rose-500/10 rounded-full border border-rose-500/20 text-rose-400 mb-2">
                <Lock className="w-10 h-10" />
              </div>
              <h3 className="text-base font-extrabold text-white">Maison Verrouillée</h3>
              <p className="text-xs text-slate-400 max-w-xs mx-auto leading-relaxed">
                Vous devez réussir le niveau {house.level - 1} dans la maison précédente pour débloquer celle-ci !
              </p>
            </div>
          ) : isAlreadySolved ? (
            <div className="py-8 text-center space-y-4">
              <div className="inline-flex p-4 bg-emerald-500/10 rounded-full border border-emerald-500/20 text-emerald-400 mb-2">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-base font-extrabold text-white">Niveau Réussi !</h3>
              <p className="text-xs text-slate-300">
                Vous avez résolu l'énigme de ce niveau pour le Cycle {cycle}. Avancez vers la maison suivante !
              </p>
            </div>
          ) : (
            <>
              <div className="bg-slate-800/70 p-4 rounded-2xl border border-slate-700/80 shadow-inner">
                <p className="text-xs font-bold text-indigo-400 uppercase tracking-wider mb-1">
                  Énigme (Cycle {cycle})
                </p>
                <p className="text-sm font-semibold text-slate-100 leading-relaxed">
                  "{riddleInfo.riddle}"
                </p>
              </div>

              {/* Options */}
              <div className="grid grid-cols-2 gap-3">
                {riddleInfo.options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedOption(idx)}
                    className={`p-3.5 text-xs font-bold rounded-2xl border transition-all text-left ${
                      selectedOption === idx
                        ? 'border-indigo-500 bg-indigo-500/20 text-white shadow-lg'
                        : 'border-slate-800 bg-slate-800/60 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>

              {/* Feedback Message */}
              {feedbackMsg && (
                <div
                  className={`p-3 rounded-2xl text-xs font-bold text-center flex items-center justify-center gap-2 ${
                    feedbackMsg.type === 'success'
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                      : 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                  }`}
                >
                  {feedbackMsg.type === 'error' && <AlertCircle className="w-4 h-4" />}
                  {feedbackMsg.text}
                </div>
              )}

              {/* Hints & Action */}
              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={() => setShowHint(!showHint)}
                  className="text-xs text-amber-400 hover:underline flex items-center gap-1 font-semibold"
                >
                  <HelpCircle className="w-4 h-4" /> {showHint ? "Masquer l'indice" : "Besoin d'un indice ?"}
                </button>

                <button
                  onClick={handleValidate}
                  disabled={selectedOption === null}
                  className="py-2.5 px-5 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 disabled:opacity-40 text-white text-xs font-bold rounded-xl shadow-lg transition-all flex items-center gap-2"
                >
                  Valider la Réponse <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {showHint && (
                <p className="text-xs text-amber-300/90 italic bg-amber-500/10 p-3 rounded-xl border border-amber-500/20">
                  Indice : {riddleInfo.hint}
                </p>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
