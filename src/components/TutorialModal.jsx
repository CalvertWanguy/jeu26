"use client";
import React from 'react';
import { HelpCircle, Check, MapPin, Building2, MessageSquare, Swords, Sparkles, X } from 'lucide-react';

export default function TutorialModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 backdrop-blur-md p-4">
      <div className="w-full max-w-md bg-slate-900 border-2 border-indigo-500/50 rounded-3xl shadow-2xl overflow-hidden animate-float">
        
        {/* Header simple */}
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-5 text-center relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white p-1"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="w-12 h-12 bg-white/10 rounded-full mx-auto mb-2 flex items-center justify-center border border-white/20">
            <HelpCircle className="w-7 h-7 text-amber-300" />
          </div>
          <h2 className="text-xl font-black text-white uppercase tracking-wide">
            Comment Jouer ?
          </h2>
          <p className="text-xs text-indigo-100 mt-1 font-medium">
            Guide simple & rapide pour bien démarrer
          </p>
        </div>

        {/* 4 Points Simples et Clairs */}
        <div className="p-6 space-y-4 text-slate-200 text-xs">
          
          <div className="flex items-start gap-3 p-3 bg-slate-800/80 rounded-2xl border border-slate-700/60">
            <div className="p-2 bg-emerald-500/20 text-emerald-400 rounded-xl mt-0.5">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-emerald-300 text-xs uppercase">1. Les 5 Maisons & Devinettes</h3>
              <p className="text-slate-300 text-[11px] mt-0.5 leading-relaxed">
                Clique sur les maisons numérotées 1 à 5 et résous leurs devinettes pour monter de Niveau !
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 bg-slate-800/80 rounded-2xl border border-slate-700/60">
            <div className="p-2 bg-blue-500/20 text-blue-400 rounded-xl mt-0.5">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-blue-300 text-xs uppercase">2. Se Déplacer</h3>
              <p className="text-slate-300 text-[11px] mt-0.5 leading-relaxed">
                Clique ou touche n'importe quel endroit de la ville pour y faire marcher ton personnage.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 bg-slate-800/80 rounded-2xl border border-slate-700/60">
            <div className="p-2 bg-indigo-500/20 text-indigo-400 rounded-xl mt-0.5">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-indigo-300 text-xs uppercase">3. Discuter en Direct</h3>
              <p className="text-slate-300 text-[11px] mt-0.5 leading-relaxed">
                Approche-toi d'un autre joueur pour lui envoyer des messages dans le Chat de Proximité !
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 bg-slate-800/80 rounded-2xl border border-slate-700/60">
            <div className="p-2 bg-amber-500/20 text-amber-400 rounded-xl mt-0.5">
              <Swords className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-amber-300 text-xs uppercase">4. Mini-Jeux</h3>
              <p className="text-slate-300 text-[11px] mt-0.5 leading-relaxed">
                Clique sur un joueur proche pour le défier au Morpion ou Pierre-Papier-Ciseaux !
              </p>
            </div>
          </div>

        </div>

        {/* Bouton Valider OK */}
        <div className="p-6 pt-0">
          <button
            onClick={onClose}
            className="w-full py-3.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-indigo-600 hover:from-emerald-600 hover:to-indigo-700 text-white font-extrabold rounded-2xl shadow-lg shadow-emerald-500/20 transition-all flex items-center justify-center gap-2 text-xs uppercase tracking-wider"
          >
            <Check className="w-4 h-4" /> J'ai compris / C'est parti !
          </button>
        </div>

      </div>
    </div>
  );
}
