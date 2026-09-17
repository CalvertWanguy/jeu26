"use client";
import React, { useState } from 'react';
import { MessageSquare, Send, X, User } from 'lucide-react';

export default function PrivateChatModal({ partner, messages, onSendMessage, onClose }) {
  const [inputText, setInputText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    onSendMessage(inputText.trim());
    setInputText('');
  };

  return (
    <div className="fixed bottom-4 left-4 z-50 w-80 sm:w-96 bg-slate-900 border-2 border-indigo-500/80 rounded-3xl shadow-2xl overflow-hidden animate-float">
      {/* Header Chat Privé 1-sur-1 */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-3.5 px-4 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="text-xl">{partner.gender === 'girl' ? '👧' : '👦'}</span>
          <div>
            <h3 className="text-xs font-extrabold text-white flex items-center gap-1.5">
              Chat Privé avec {partner.nickname}
            </h3>
            <span className="text-[10px] text-indigo-200 font-semibold block">
              🔒 Conversation 100% Exclusive
            </span>
          </div>
        </div>
        <button
          onClick={onClose}
          className="p-1 text-white/80 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
          title="Quitter la conversation"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Messages Privés */}
      <div className="p-3 h-44 overflow-y-auto space-y-2 text-xs bg-slate-900/90">
        {messages.length === 0 ? (
          <p className="text-slate-500 italic text-[11px] text-center pt-10">
            Dites bonjour à <strong className="text-indigo-300">{partner.nickname}</strong> ! Vos messages sont 100% privés.
          </p>
        ) : (
          messages.map((msg) => (
            <div
              key={msg.id}
              className={`p-2 rounded-2xl max-w-[85%] text-xs leading-relaxed ${
                msg.senderName === partner.nickname
                  ? 'bg-slate-800 text-slate-100 border border-slate-700/80 mr-auto'
                  : 'bg-indigo-600 text-white font-medium ml-auto text-right'
              }`}
            >
              <div className="text-[10px] opacity-75 font-bold mb-0.5">{msg.senderName}</div>
              <div>{msg.text}</div>
            </div>
          ))
        )}
      </div>

      {/* Formulaire de saisie */}
      <form onSubmit={handleSubmit} className="p-2.5 bg-slate-950/80 border-t border-slate-800 flex gap-2">
        <input
          type="text"
          maxLength={80}
          placeholder={`Écrire à ${partner.nickname}...`}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="flex-1 px-3.5 py-2 bg-slate-800 border border-slate-700 rounded-xl text-white text-xs placeholder-slate-500 focus:outline-none focus:border-indigo-500 font-medium"
        />
        <button
          type="submit"
          className="p-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl transition-colors flex items-center justify-center shadow-lg"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
}
