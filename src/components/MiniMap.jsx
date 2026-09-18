"use client";
import React, { useRef, useEffect } from 'react';
import { HOUSES } from './TownCanvas';

export default function MiniMap({ localPlayer, otherPlayers, unlockedLevel, playerLevel }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    // Clear
    ctx.clearRect(0, 0, 140, 105);

    // Sol miniature
    ctx.fillStyle = '#15803d';
    ctx.fillRect(0, 0, 140, 105);

    // Parcs sup & inf
    ctx.fillStyle = '#14532d';
    ctx.fillRect(0, 0, 140, 16);
    ctx.fillRect(0, 90, 140, 15);

    // Routes pavées
    ctx.fillStyle = '#475569';
    ctx.fillRect(8, 36, 124, 7);
    ctx.fillRect(8, 86, 124, 7);
    ctx.fillRect(66, 36, 7, 57);

    // Fontaine centrale
    ctx.fillStyle = '#0284c7';
    ctx.beginPath();
    ctx.arc(70, 65, 6, 0, Math.PI * 2);
    ctx.fill();

    // 5 Maisons
    HOUSES.forEach((h) => {
      const mx = (h.x / 1000) * 140;
      const my = (h.y / 750) * 105;
      const isUnlocked = (h.level <= unlockedLevel) || (playerLevel >= 100);

      ctx.fillStyle = isUnlocked ? '#10b981' : '#ef4444';
      ctx.fillRect(mx - 4, my - 4, 8, 8);
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 1;
      ctx.strokeRect(mx - 4, my - 4, 8, 8);
    });

    // Autre Joueurs
    if (Array.isArray(otherPlayers)) {
      otherPlayers.forEach((p) => {
        const px = ((p.x || 450) / 1000) * 140;
        const py = ((p.y || 450) / 750) * 105;

        ctx.fillStyle = '#ec4899';
        ctx.beginPath();
        ctx.arc(px, py, 3, 0, Math.PI * 2);
        ctx.fill();
      });
    }

    // Joueur Local
    if (localPlayer) {
      const lx = ((localPlayer.x || 450) / 1000) * 140;
      const ly = ((localPlayer.y || 450) / 750) * 105;

      ctx.fillStyle = '#3b82f6';
      ctx.beginPath();
      ctx.arc(lx, ly, 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 1.5;
      ctx.stroke();
    }
  }, [localPlayer, otherPlayers, unlockedLevel, playerLevel]);

  return (
    <div className="absolute bottom-14 right-2 sm:bottom-16 sm:right-4 z-40 bg-slate-900/90 backdrop-blur-md border border-slate-700/80 p-1.5 rounded-2xl shadow-2xl pointer-events-none hidden xs:block">
      <canvas
        ref={canvasRef}
        width={140}
        height={105}
        className="rounded-xl border border-slate-800"
      />
    </div>
  );
}
