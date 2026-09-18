"use client";
import React from 'react';
import { playClickSFX } from '../utils/sfx';

export const EMOTES_LIST = [
  { id: 'wave', emoji: '👋', label: 'Salut' },
  { id: 'clap', emoji: '👏', label: 'Bravo' },
  { id: 'think', emoji: '🤔', label: 'Refléchit' },
  { id: 'fire', emoji: '🔥', label: 'Super' },
  { id: 'party', emoji: '🎉', label: 'Fête' },
  { id: 'crown', emoji: '👑', label: 'Roi' }
];

export default function EmoteBar({ onSendEmote, isMuted }) {
  const handleEmoteClick = (emote) => {
    playClickSFX(isMuted);
    if (onSendEmote) {
      onSendEmote(emote.emoji);
    }
  };

  return (
    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-40 bg-slate-900/90 backdrop-blur-md border border-slate-700/80 px-2 py-1.5 rounded-full shadow-2xl flex items-center gap-1.5 transition-all">
      {EMOTES_LIST.map((e) => (
        <button
          key={e.id}
          onClick={() => handleEmoteClick(e)}
          title={e.label}
          className="w-8 h-8 sm:w-9 sm:h-9 hover:bg-slate-800 active:scale-125 rounded-full flex items-center justify-center text-base sm:text-lg transition-transform"
        >
          {e.emoji}
        </button>
      ))}
    </div>
  );
}
