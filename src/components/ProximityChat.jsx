"use client";
import React, { useState } from 'react';
import { Send, MessageSquare } from 'lucide-react';

export default function ProximityChat({ onSendMessage, messages }) {
  const [inputText, setInputText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    onSendMessage(inputText.trim());
    setInputText('');
  };

  return (
    <div className="absolute bottom-4 left-4 z-40 w-80 bg-slate-900/90 backdrop-blur-md border border-slate-700/80 rounded-xl shadow-2xl p-3 flex flex-col gap-2">
      {/* Messages de proximité */}
      <div className="flex items-center gap-2 border-b border-slate-800 pb-2 text-xs font-bold text-slate-300">
        <MessageSquare className="w-4 h-4 text-blue-400" /> Chat de Proximité
      </div>

      <div className="h-32 overflow-y-auto space-y-2 pr-1 text-xs">
        {messages.length === 0 ? (
          <p className="text-slate-500 italic text-[11px] text-center pt-8">
            Aucun message à proximité. Approchez-vous d'un joueur pour discuter !
          </p>
        ) : (
          messages.map((msg) => (
            <div key={msg.id} className="bg-slate-800/80 p-2 rounded-lg border border-slate-700/50">
              <span className="font-bold text-blue-300">{msg.senderName}: </span>
              <span className="text-slate-200">{msg.text}</span>
            </div>
          ))
        )}
      </div>

      {/* Saisie de message */}
      <form onSubmit={handleSubmit} className="flex gap-2 pt-1">
        <input
          type="text"
          maxLength={60}
          placeholder="Écrire un message..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="flex-1 px-3 py-1.5 bg-slate-800 border border-slate-700 rounded-lg text-white text-xs placeholder-slate-500 focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          className="p-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors flex items-center justify-center"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
}
