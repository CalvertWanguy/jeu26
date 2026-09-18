"use client";
import React, { useState } from 'react';
import { Send, X, User, Lock } from 'lucide-react';

export default function PrivateChatModal({ partner, messages, onSendMessage, onClose }) {
  const [inputText, setInputText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    onSendMessage(inputText.trim());
    setInputText('');
  };

  return (
    <div className="fixed bottom-3 left-3 sm:bottom-5 sm:left-5 z-50 w-72 sm:w-80 max-h-[70vh] bg-slate-900/85 backdrop-blur-md border border-indigo-500/40 rounded-2xl shadow-2xl overflow-hidden flex flex-col transition-all">
      {/* Entête Épuré Chat Privé 1-sur-1 */}
      <div className="bg-slate-950/60 p-3 px-4 flex items-center justify-between border-b border-slate-800">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-xl bg-indigo-600/30 border border-indigo-500/50 flex items-center justify-center text-indigo-400">
            <User className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-xs font-bold text-white flex items-center gap-1.5 leading-none">
              {partner.nickname}
            </h3>
            <span className="text-[10px] text-slate-400 font-medium flex items-center gap-1 mt-0.5">
              <Lock className="w-2.5 h-2.5 text-indigo-400" /> Chat Privé
            </span>
          </div>
        </div>
        <button
          onClick={onClose}
          className="p-1 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
          title="Fermer"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Messages Privés */}
      <div className="p-3 h-48 overflow-y-auto space-y-2 text-xs bg-slate-950/30">
        {messages.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-center p-4">
            <p className="text-slate-400 text-[11px]">
              Discussion privée avec <span className="text-indigo-300 font-semibold">{partner.nickname}</span>.
            </p>
          </div>
        ) : (
          messages.map((msg) => (
            <div
              key={msg.id}
              className={`p-2 px-3 rounded-xl max-w-[85%] text-xs leading-relaxed ${
                msg.senderName === partner.nickname
                  ? 'bg-slate-800/90 text-slate-100 border border-slate-700/60 mr-auto'
                  : 'bg-indigo-600/90 text-white font-medium ml-auto text-right shadow-sm'
              }`}
            >
              <div className="text-[9px] opacity-70 font-bold mb-0.5">{msg.senderName}</div>
              <div>{msg.text}</div>
            </div>
          ))
        )}
      </div>

      {/* Formulaire de saisie */}
      <form onSubmit={handleSubmit} className="p-2 bg-slate-950/70 border-t border-slate-800/80 flex gap-2">
        <input
          type="text"
          maxLength={80}
          placeholder={`Message à ${partner.nickname}...`}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="flex-1 px-3 py-1.5 bg-slate-900 border border-slate-700/60 rounded-xl text-white text-xs placeholder-slate-500 focus:outline-none focus:border-indigo-500/80 font-medium"
        />
        <button
          type="submit"
          disabled={!inputText.trim()}
          className="p-2 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 text-white rounded-xl transition-colors flex items-center justify-center shrink-0 shadow-md"
        >
          <Send className="w-3.5 h-3.5" />
        </button>
      </form>
    </div>
  );
}
