"use client";
import React from 'react';
import { Info, AlertTriangle, CheckCircle, X } from 'lucide-react';

export default function ToastNotification({ toasts = [], onDismiss }) {
  if (!toasts || toasts.length === 0) return null;

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-[100] flex flex-col items-center gap-2 w-full max-w-sm px-4 pointer-events-none">
      {toasts.map((toast) => {
        const isWarning = toast.type === 'warning';
        const isSuccess = toast.type === 'success';

        return (
          <div
            key={toast.id}
            className={`pointer-events-auto w-full flex items-center justify-between gap-3 px-4 py-3 rounded-2xl shadow-xl backdrop-blur-xl border transition-all animate-in fade-in slide-in-from-top-4 duration-300 ${
              isWarning
                ? 'bg-amber-950/80 border-amber-500/50 text-amber-100'
                : isSuccess
                ? 'bg-emerald-950/80 border-emerald-500/50 text-emerald-100'
                : 'bg-slate-900/85 border-indigo-500/50 text-slate-100'
            }`}
          >
            <div className="flex items-center gap-2.5 min-w-0">
              {isWarning ? (
                <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
              ) : isSuccess ? (
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
              ) : (
                <Info className="w-4 h-4 text-indigo-400 shrink-0" />
              )}
              <span className="text-xs font-semibold leading-snug truncate">
                {toast.message}
              </span>
            </div>
            {onDismiss && (
              <button
                onClick={() => onDismiss(toast.id)}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors shrink-0"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}
