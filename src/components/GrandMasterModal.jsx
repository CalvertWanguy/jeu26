"use client";
import React, { useEffect, useRef } from 'react';
import { Award, ArrowRight, Sparkles } from 'lucide-react';

export default function GrandMasterModal({ onClose }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;

    const particles = [];
    const colors = ['#f59e0b', '#ec4899', '#8b5cf6', '#10b981', '#3b82f6', '#f43f5e'];

    for (let i = 0; i < 90; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        vx: (Math.random() - 0.5) * 3,
        vy: Math.random() * 3 + 2,
        size: Math.random() * 6 + 3,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * Math.PI * 2,
        vRot: (Math.random() - 0.5) * 0.1
      });
    }

    let animationFrameId;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.vRot;

        if (p.y > canvas.height) {
          p.y = -20;
          p.x = Math.random() * canvas.width;
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 backdrop-blur-md p-3 sm:p-4 overflow-y-auto">
      <div className="relative bg-slate-900 border-2 border-amber-500/90 rounded-3xl p-6 sm:p-8 max-w-lg w-full text-center space-y-6 shadow-2xl overflow-hidden my-auto">
        {/* Canvas Particules Feux d'Artifice & Confettis en Arrière-plan */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-80"
        />

        <div className="relative z-10 space-y-5">
          {/* Badge Couronne Dorée Ultime */}
          <div className="w-20 h-20 bg-gradient-to-tr from-amber-500 via-amber-400 to-yellow-300 rounded-full mx-auto flex items-center justify-center shadow-xl shadow-amber-500/30 border-2 border-white/50 animate-bounce">
            <span className="text-4xl">👑</span>
          </div>

          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/50 text-amber-300 text-xs font-black uppercase tracking-widest mb-2">
              <Sparkles className="w-3.5 h-3.5" /> Titre Ultime Débloqué <Sparkles className="w-3.5 h-3.5" />
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 uppercase tracking-wide">
              Grand Maître des Énigmes !
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed">
              Incroyable ! Vous avez résolu l'intégralité des <strong className="text-amber-300">500 devinettes</strong> (100 Cycles complets) de Town Riddles Online !
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 text-left space-y-2 text-xs">
            <div className="flex items-center gap-2 text-amber-300 font-bold">
              <Award className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Couronne Dorée Royale</span>
            </div>
            <p className="text-slate-400 text-[11px] leading-relaxed">
              Une **Couronne Dorée** brille désormais en permanence au-dessus de votre personnage dans la ville pour que tous les joueurs reconnaissent votre statut d'élite.
            </p>

            <div className="flex items-center gap-2 text-emerald-400 font-bold pt-2 border-t border-slate-800">
              <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Accès Libre Permanence</span>
            </div>
            <p className="text-slate-400 text-[11px] leading-relaxed">
              Tous les cadenas de toutes les maisons sont définitivement levés ! Vous pouvez librement explorer et rejouer n'importe quel défi.
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-full py-3.5 bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-slate-950 font-black rounded-2xl shadow-xl shadow-amber-500/20 transition-transform active:scale-95 flex items-center justify-center gap-2 text-xs uppercase tracking-wider"
          >
            Arborer ma Couronne de Grand Maître <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
