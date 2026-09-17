"use client";
import React, { useState } from 'react';
import { Send, MessageSquare, ChevronDown, ChevronUp } from 'lucide-react';

export default function ProximityChat({ onSendMessage, messages, hasNearbyPlayer }) {
  const [inputText, setInputText] = useState('');
  const [isMinimized, setIsMinimized] = useState(false);

  // Masquer le chat si aucun joueur n'est à proximité et qu'aucun message n'est affiché
  if (!hasNearbyPlayer && messages.length === 0) {
    return null;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    onSendMessage(inputText.trim());
    setInputText('');
  };

  return (
    <div className="absolute bottom-3 left-3 right-3 sm:right-auto z-40 w-auto sm:w-80 bg-slate-900/95 backdrop-blur-md border border-indigo-500/40 rounded-2xl shadow-2xl p-3 flex flex-col gap-2 transition-all duration-300 ease-out animate-in fade-in slide-in-from-bottom-3">
      {/* En-tête du chat avec indicateur de présence */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-2 text-xs font-bold text-slate-300">
        <div className="flex items-center gap-2">
          <MessageSquare className="w-4 h-4 text-indigo-400" />
          <span>Chat de Proximité</span>
          {hasNearbyPlayer && (
            <span className="text-[10px] font-semibold px-2 py-0.5 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full animate-pulse">
              ● Joueur proche
            </span>
          )}
        </div>
        <button
          onClick={() => setIsMinimized(!isMinimized)}
          className="sm:hidden text-slate-400 hover:text-white p-1"
        >
          {isMinimized ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
      </div>

      {!isMinimized && (
        <>
          {/* Liste des messages */}
          <div className="h-28 sm:h-32 overflow-y-auto space-y-2 pr-1 text-xs">
            {messages.length === 0 ? (
              <p className="text-slate-400 italic text-[11px] text-center pt-6">
                Joueur à proximité ! Écrivez un message pour engager la conversation.
              </p>
            ) : (
              messages.map((msg) => (
                <div key={msg.id} className="bg-slate-800/80 p-2 rounded-xl border border-slate-700/50">
                  <span className="font-bold text-indigo-300">{msg.senderName}: </span>
                  <span className="text-slate-200">{msg.text}</span>
                </div>
              ))
            )}
          </div>

          {/* Formulaire de saisie */}
          <form onSubmit={handleSubmit} className="flex gap-2 pt-1">
            <input
              type="text"
              maxLength={60}
              placeholder="Écrire un message..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="flex-1 px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-white text-xs placeholder-slate-500 focus:outline-none focus:border-indigo-500 font-medium"
            />
            <button
              type="submit"
              className="p-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl transition-colors flex items-center justify-center shadow-md"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </>
      )}
    </div>
  );
}
