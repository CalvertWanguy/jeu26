"use client";
import React from 'react';
import { MessageSquare } from 'lucide-react';

export default function ProximityChat({ hasNearbyPlayer }) {
  // Affiche EXCLUSIVEMENT le badge pilule minimaliste "Chat de Proximité • Joueur proche" quand un joueur est proche
  if (!hasNearbyPlayer) {
    return null;
  }

  return (
    <div className="absolute bottom-3 left-3 z-40 bg-slate-900/90 backdrop-blur-md border border-slate-700/80 px-3.5 py-2 rounded-full shadow-xl flex items-center gap-2 text-xs font-bold text-slate-200 pointer-events-none animate-in fade-in slide-in-from-bottom-2">
      <MessageSquare className="w-3.5 h-3.5 text-indigo-400" />
      <span>Chat de Proximité</span>
      <span className="text-[10px] font-bold px-2 py-0.5 bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 rounded-full animate-pulse flex items-center gap-1">
        ● Joueur proche
      </span>
    </div>
  );
}
