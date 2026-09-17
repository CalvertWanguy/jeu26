"use client";
import React, { useState } from 'react';
import { Send, MessageSquare, ChevronDown, ChevronUp } from 'lucide-react';

export default function ProximityChat({ onSendMessage, messages }) {
  const [inputText, setInputText] = useState('');
  const [isMinimized, setIsMinimized] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    onSendMessage(inputText.trim());
    setInputText('');
  };

  return (
    <div className="absolute bottom-3 left-3 right-3 sm:right-auto z-40 w-auto sm:w-80 bg-slate-900/90 backdrop-blur-md border border-slate-700/80 rounded-2xl shadow-2xl p-3 flex flex-col gap-2 transition-all">
      {/* En-tête du chat avec bouton réducteur sur mobile */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-2 text-xs font-bold text-slate-300">
        <div className="flex items-center gap-2">
          <MessageSquare className="w-4 h-4 text-indigo-400" /> Chat de Proximité
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
              <p className="text-slate-500 italic text-[11px] text-center pt-6">
                Aucun message à proximité. Approchez-vous d'un joueur pour discuter !
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
              className="flex-1 px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-white text-xs placeholder-slate-500 focus:outline-none focus:border-indigo-500"
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
