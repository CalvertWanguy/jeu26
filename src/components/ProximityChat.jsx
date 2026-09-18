"use client";
import React from 'react';
import { MessageSquare } from 'lucide-react';

export default function ProximityChat({ hasNearbyPlayer }) {
  // Affiche EXCLUSIVEMENT le badge pilule minimaliste "Chat de Proximité • Joueur proche" quand un joueur est proche
  if (!hasNearbyPlayer) {
    return null;
  }

  return (
    <div className="absolute bottom-12 left-2 sm:bottom-4 sm:left-4 z-40 bg-slate-900/90 backdrop-blur-md border border-slate-700/80 px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-full shadow-xl flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-bold text-slate-200 pointer-events-none animate-in fade-in slide-in-from-bottom-2">
      <MessageSquare className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-indigo-400 flex-shrink-0" />
      <span className="hidden xs:inline">Chat de Proximité</span>
      <span className="text-[9px] sm:text-[10px] font-bold px-1.5 sm:px-2 py-0.5 bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 rounded-full animate-pulse flex items-center gap-1 whitespace-nowrap">
        ● Joueur proche
      </span>
    </div>
  );
}
