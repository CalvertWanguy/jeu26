"use client";
import React, { useState } from 'react';
import { Lock, CheckCircle2, Trophy, X, HelpCircle, ArrowRight } from 'lucide-react';

export const RIDDLES_DATA = {
  1: {
    title: "Maison 1 : La Logique",
    riddle: "Qu'est-ce qui possède des touches ou des clés, mais ne peut ouvrir aucune porte ?",
    options: ["Un Piano", "Une Voiture", "Un Coffre-fort", "Un Téléphone"],
    correctIndex: 0,
    hint: "Pensez à un instrument de musique à cordes frappées !"
  },
  2: {
    title: "Maison 2 : La Nature",
    riddle: "Plus j'augmente et suis présente autour de vous, et moins vous pouvez voir. Que suis-je ?",
    options: ["La Lumière", "L'Obscurité", "La Glace", "Le Vent"],
    correctIndex: 1,
    hint: "Elle survient quand le soleil se couche !"
  },
  3: {
    title: "Maison 3 : Les Énigmes du Temps",
    riddle: "Je suis toujours devant vous dans le temps, mais vous ne pouvez jamais m'attraper. Que suis-je ?",
    options: ["Le Passé", "Le Présent", "L'Avenir / Le Futur", "Le Sommeil"],
    correctIndex: 2,
    hint: "C'est ce qui se passera demain !"
  },
  4: {
    title: "Maison 4 : Le Mystère",
    riddle: "Qu'est-ce qui vous appartient personnellement, mais que les autres utilisent beaucoup plus que vous-même ?",
    options: ["Votre Maison", "Votre Prénom / Nom", "Votre Téléphone", "Vos Clés"],
    correctIndex: 1,
    hint: "Les gens l'appellent pour vous parler !"
  },
  5: {
    title: "Maison 5 : Le Grand Défi Ultime",
    riddle: "Je peux faire le tour du monde entier tout en restant sagement collé dans un coin. Que suis-je ?",
    options: ["Une Boussole", "Un Timbre Postal", "Un Oiseau", "Un Avion"],
    correctIndex: 1,
    hint: "On me colle sur une enveloppe !"
  }
};

export default function HouseRiddleModal({ house, unlockedLevel, onSolveRiddle, onClose }) {
  const riddleInfo = RIDDLES_DATA[house.level];
  const isUnlocked = house.level <= unlockedLevel;
  const isAlreadySolved = house.level < unlockedLevel;

  const [selectedOption, setSelectedOption] = useState(null);
  const [feedbackMsg, setFeedbackMsg] = useState(null);
  const [showHint, setShowHint] = useState(false);

  const handleValidate = () => {
    if (selectedOption === null) return;

    if (selectedOption === riddleInfo.correctIndex) {
      setFeedbackMsg({ type: 'success', text: " Bravo ! Vous avez trouvé la bonne réponse !" });
      setTimeout(() => {
        onSolveRiddle(house.level);
      }, 1200);
    } else {
      setFeedbackMsg({ type: 'error', text: "❌ Mauvaise réponse... Réessayez !" });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-4">
      <div className="w-full max-w-lg bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="bg-slate-800 p-4 px-6 border-b border-slate-700 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{house.icon}</span>
            <div>
              <h2 className="text-lg font-extrabold text-white">{riddleInfo.title}</h2>
              <p className="text-xs text-slate-400">Niveau {house.level} / 5</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-white rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {!isUnlocked ? (
            /* Maison Verrouillée */
            <div className="py-8 text-center space-y-4">
              <div className="inline-flex p-4 bg-red-500/10 rounded-full border border-red-500/20 text-red-400 mb-2">
                <Lock className="w-10 h-10" />
              </div>
              <h3 className="text-lg font-bold text-white">Maison Verrouillée !</h3>
              <p className="text-xs text-slate-400 max-w-xs mx-auto">
                Vous devez résoudre le niveau {house.level - 1} dans la maison précédente pour débloquer celle-ci !
              </p>
            </div>
          ) : isAlreadySolved ? (
            /* Maison Déjà Résolue */
            <div className="py-8 text-center space-y-4">
              <div className="inline-flex p-4 bg-emerald-500/10 rounded-full border border-emerald-500/20 text-emerald-400 mb-2">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-lg font-bold text-white">Niveau Déjà Réussi !</h3>
              <p className="text-xs text-slate-300">
                Vous avez déjà résolu l'énigme de cette maison. Passez à la maison suivante !
              </p>
            </div>
          ) : (
            /* Énigme active */
            <>
              <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700/80">
                <p className="text-sm font-semibold text-slate-100 leading-relaxed">
                  "{riddleInfo.riddle}"
                </p>
              </div>

              {/* Choix d'options */}
              <div className="grid grid-cols-2 gap-3">
                {riddleInfo.options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedOption(idx)}
                    className={`p-3 text-xs font-bold rounded-xl border transition-all text-left ${
                      selectedOption === idx
                        ? 'border-blue-500 bg-blue-500/20 text-white shadow-lg'
                        : 'border-slate-700 bg-slate-800 text-slate-300 hover:border-slate-600'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>

              {/* Message de feedback */}
              {feedbackMsg && (
                <div
                  className={`p-3 rounded-xl text-xs font-bold text-center ${
                    feedbackMsg.type === 'success'
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                      : 'bg-red-500/20 text-red-300 border border-red-500/30'
                  }`}
                >
                  {feedbackMsg.text}
                </div>
              )}

              {/* Indices et actions */}
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
                  className="py-2.5 px-5 bg-blue-600 hover:bg-blue-500 disabled:opacity-40 text-white text-xs font-bold rounded-xl shadow-lg transition-all flex items-center gap-2"
                >
                  Valider la Réponse <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {showHint && (
                <p className="text-xs text-amber-300/90 italic bg-amber-500/10 p-3 rounded-lg border border-amber-500/20">
                  💡 Indice : {riddleInfo.hint}
                </p>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
