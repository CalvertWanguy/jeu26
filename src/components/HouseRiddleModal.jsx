"use client";
import React, { useState } from 'react';
import { Lock, CheckCircle2, X, HelpCircle, ArrowRight, Building2, Sparkles, AlertCircle, Trophy, RotateCcw } from 'lucide-react';

// Banque de devinettes variées pour une rejouabilité infinie
export const RIDDLE_BANKS = {
  1: [
    {
      riddle: "Qu'est-ce qui possède des touches ou des clés, mais ne peut ouvrir aucune porte ?",
      options: ["Un Piano", "Une Voiture", "Un Coffre-fort", "Un Téléphone"],
      correctIndex: 0,
      hint: "Pensez à un instrument de musique à cordes frappées !"
    },
    {
      riddle: "Qu'est-ce qui a quatre jambes le matin, deux le midi et trois le soir ?",
      options: ["Une Table", "L'Homme", "Un Chien", "Une Chaise"],
      correctIndex: 1,
      hint: "C'est l'énigme classique du Sphinx sur la vie !"
    },
    {
      riddle: "Qu'est-ce qui appartient à tout le monde mais dont personne ne peut se séparer ?",
      options: ["L'Ombre", "Le Téléphone", "L'Argent", "Les Clés"],
      correctIndex: 0,
      hint: "Elle vous suit partout au soleil !"
    }
  ],
  2: [
    {
      riddle: "Plus j'augmente et suis présente autour de vous, et moins vous pouvez voir. Que suis-je ?",
      options: ["La Lumière", "L'Obscurité", "La Glace", "Le Vent"],
      correctIndex: 1,
      hint: "Elle survient quand le soleil se couche !"
    },
    {
      riddle: "Qu'est-ce qui monte et ne descend jamais ?",
      options: ["Votre Âge", "La Montagne", "Un Ballon", "La Pluie"],
      correctIndex: 0,
      hint: "Chaque anniversaire en rajoute un !"
    },
    {
      riddle: "Je tombe sans me faire mal et j'arrose les plantes. Que suis-je ?",
      options: ["Le Soleil", "La Pluie", "Le Feu", "La Neige"],
      correctIndex: 1,
      hint: "Elle vient des nuages !"
    }
  ],
  3: [
    {
      riddle: "Je suis toujours devant vous dans le temps, mais vous ne pouvez jamais m'attraper. Que suis-je ?",
      options: ["Le Passé", "Le Présent", "L'Avenir / Le Futur", "Le Sommeil"],
      correctIndex: 2,
      hint: "C'est ce qui se passera demain !"
    },
    {
      riddle: "Qu'est-ce qui s'allonge quand on le coupe et s'accourcit quand on le laisse ?",
      options: ["Un Puits", "Un Chemin", "Une Bougie", "Un Arbre"],
      correctIndex: 0,
      hint: "On le creuse dans la terre pour chercher de l'eau !"
    },
    {
      riddle: "Si vous me nommez, vous me brisez. Que suis-je ?",
      options: ["Le Silence", "Le Verre", "Le Miroir", "Le Secret"],
      correctIndex: 0,
      hint: "Parler l'interrompt immédiatement !"
    }
  ],
  4: [
    {
      riddle: "Qu'est-ce qui vous appartient personnellement, mais que les autres utilisent beaucoup plus que vous-même ?",
      options: ["Votre Maison", "Votre Prénom / Nom", "Votre Téléphone", "Vos Clés"],
      correctIndex: 1,
      hint: "Les gens l'appellent pour vous parler !"
    },
    {
      riddle: "Qu'est-ce qui a des villes mais pas de maisons, des forêts mais pas d'arbres, et de l'eau mais pas de poissons ?",
      options: ["Une Carte Géographique", "Un Livre", "Un Film", "Un Rêve"],
      correctIndex: 0,
      hint: "Elle sert à se repérer en voyage !"
    },
    {
      riddle: "Je parle toutes les langues sans avoir appris un seul mot. Que suis-je ?",
      options: ["Un Écho", "Un Radio", "Un Livre", "Un Traducteur"],
      correctIndex: 0,
      hint: "Je répète votre voix dans les montagnes !"
    }
  ],
  5: [
    {
      riddle: "Je peux faire le tour du monde entier tout en restant sagement collé dans un coin. Que suis-je ?",
      options: ["Une Boussole", "Un Timbre Postal", "Un Oiseau", "Un Avion"],
      correctIndex: 1,
      hint: "On me colle sur une enveloppe !"
    },
    {
      riddle: "Plus je sèche, plus je deviens mouillé. Que suis-je ?",
      options: ["Une Éponge", "Une Serviette de bain", "La Mer", "Le Vent"],
      correctIndex: 1,
      hint: "Vous l'utilisez en sortant de la douche !"
    },
    {
      riddle: "Je n'ai pas de poumons, mais j'ai besoin d'air. Je n'ai pas de bouche, mais l'eau me tue. Que suis-je ?",
      options: ["Le Feu", "Le Vent", "La Glace", "La Terre"],
      correctIndex: 0,
      hint: "Il brûle les bûches dans la cheminée !"
    }
  ]
};

export default function HouseRiddleModal({ house, unlockedLevel, cycle = 1, onSolveRiddle, onClose }) {
  // Sélection dynamique de l'énigme selon le cycle
  const bank = RIDDLE_BANKS[house.level] || RIDDLE_BANKS[1];
  const riddleIndex = (cycle - 1) % bank.length;
  const riddleInfo = bank[riddleIndex];

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
                Niveau {house.level} / 5 <span className="text-slate-400">• Cycle {cycle}</span>
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
