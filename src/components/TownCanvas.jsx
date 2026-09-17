"use client";
import React, { useRef, useEffect } from 'react';

export const HOUSES = [
  { id: 1, name: "Maison de la Logique", level: 1, x: 180, y: 160, color: "#ef4444" },
  { id: 2, name: "Maison de la Nature", level: 2, x: 480, y: 160, color: "#3b82f6" },
  { id: 3, name: "Maison des Énigmes", level: 3, x: 780, y: 160, color: "#f59e0b" },
  { id: 4, name: "Maison Mystère", level: 4, x: 300, y: 520, color: "#8b5cf6" },
  { id: 5, name: "Maison du Grand Défi", level: 5, x: 650, y: 520, color: "#10b981" },
];

export default function TownCanvas({
  socket,
  localPlayer,
  otherPlayers,
  unlockedLevel,
  onOpenHouse,
  onSelectPlayer,
  chatBubbles
}) {
  const canvasRef = useRef(null);
  const targetPosRef = useRef({ x: localPlayer?.x || 450, y: localPlayer?.y || 450 });
  const currentPosRef = useRef({ x: localPlayer?.x || 450, y: localPlayer?.y || 450 });

  const handleCanvasClick = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    for (const house of HOUSES) {
      const dist = Math.hypot(clickX - house.x, clickY - (house.y + 40));
      if (dist < 70) {
        targetPosRef.current = { x: house.x, y: house.y + 80 };
        onOpenHouse(house);
        return;
      }
    }

    for (const p of otherPlayers) {
      const dist = Math.hypot(clickX - p.x, clickY - p.y);
      if (dist < 40) {
        onSelectPlayer(p);
        return;
      }
    }

    targetPosRef.current = { x: clickX, y: clickY };
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animationFrameId;

    const render = () => {
      const cur = currentPosRef.current;
      const target = targetPosRef.current;

      const dx = target.x - cur.x;
      const dy = target.y - cur.y;
      const dist = Math.hypot(dx, dy);

      if (dist > 2) {
        cur.x += (dx / dist) * 3.5;
        cur.y += (dy / dist) * 3.5;

        if (socket) {
          let facing = 'down';
          if (Math.abs(dx) > Math.abs(dy)) facing = dx > 0 ? 'right' : 'left';
          else facing = dy > 0 ? 'down' : 'up';

          socket.emit('player_move', { x: cur.x, y: cur.y, facing });
        }
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Sol de la ville
      ctx.fillStyle = '#34d399';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Chemins
      ctx.fillStyle = '#e2e8f0';
      ctx.fillRect(100, 260, 800, 40);
      ctx.fillRect(100, 620, 800, 40);
      ctx.fillRect(480, 260, 40, 400);

      // Place centrale
      ctx.beginPath();
      ctx.arc(500, 450, 65, 0, Math.PI * 2);
      ctx.fillStyle = '#94a3b8';
      ctx.fill();
      ctx.beginPath();
      ctx.arc(500, 450, 40, 0, Math.PI * 2);
      ctx.fillStyle = '#38bdf8';
      ctx.fill();

      // Maisons
      HOUSES.forEach((house) => {
        const isUnlocked = house.level <= unlockedLevel;

        ctx.fillStyle = house.color;
        ctx.fillRect(house.x - 50, house.y - 30, 100, 70);

        ctx.beginPath();
        ctx.moveTo(house.x - 60, house.y - 30);
        ctx.lineTo(house.x, house.y - 70);
        ctx.lineTo(house.x + 60, house.y - 30);
        ctx.closePath();
        ctx.fillStyle = '#0f172a';
        ctx.fill();

        ctx.fillStyle = '#334155';
        ctx.fillRect(house.x - 15, house.y + 10, 30, 30);

        ctx.fillStyle = isUnlocked ? '#10b981' : '#64748b';
        ctx.beginPath();
        ctx.arc(house.x, house.y - 40, 18, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 12px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(isUnlocked ? `Niv ${house.level}` : '🔒', house.x, house.y - 36);

        ctx.font = 'bold 13px sans-serif';
        ctx.fillStyle = '#ffffff';
        ctx.shadowColor = 'rgba(0,0,0,0.8)';
        ctx.shadowBlur = 4;
        ctx.fillText(house.name, house.x, house.y + 55);
        ctx.shadowBlur = 0;
      });

      // Arbres
      const trees = [
        { x: 60, y: 100 }, { x: 940, y: 100 }, { x: 60, y: 700 }, { x: 940, y: 700 },
        { x: 330, y: 360 }, { x: 670, y: 360 }
      ];
      trees.forEach(t => {
        ctx.fillStyle = '#059669';
        ctx.beginPath();
        ctx.arc(t.x, t.y, 22, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#78350f';
        ctx.fillRect(t.x - 4, t.y + 10, 8, 14);
      });

      // Joueurs autres
      otherPlayers.forEach((p) => {
        drawPlayerAvatar(ctx, p.x, p.y, p.gender, p.nickname, false, chatBubbles[p.id]);
      });

      // Joueur local
      drawPlayerAvatar(
        ctx,
        cur.x,
        cur.y,
        localPlayer.gender,
        localPlayer.nickname,
        true,
        chatBubbles[socket?.id]
      );

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animationFrameId);
  }, [otherPlayers, localPlayer, unlockedLevel, chatBubbles, socket]);

  // Dessin de l'avatar avec les têtes 👦 et 👧
  const drawPlayerAvatar = (ctx, x, y, gender, nickname, isLocal, chatMsg) => {
    ctx.beginPath();
    ctx.ellipse(x, y + 16, 14, 6, 0, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(0,0,0,0.3)';
    ctx.fill();

    if (isLocal) {
      ctx.beginPath();
      ctx.ellipse(x, y + 16, 18, 8, 0, 0, Math.PI * 2);
      ctx.strokeStyle = '#6366f1';
      ctx.lineWidth = 2.5;
      ctx.stroke();
    }

    // Avatar Emoji Head 👦 / 👧
    ctx.font = '28px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(gender === 'girl' ? '👧' : '👦', x, y - 5);

    // Etiquette Pseudo
    ctx.font = 'bold 12px sans-serif';
    ctx.fillStyle = isLocal ? '#fef08a' : '#ffffff';
    ctx.shadowColor = 'rgba(0,0,0,0.85)';
    ctx.shadowBlur = 4;
    ctx.fillText(nickname, x, y - 32);
    ctx.shadowBlur = 0;

    // Bulle de dialogue
    if (chatMsg) {
      ctx.save();
      ctx.font = '12px sans-serif';
      const textWidth = ctx.measureText(chatMsg).width;
      const bubbleW = textWidth + 16;
      const bubbleH = 24;
      const bubbleX = x - bubbleW / 2;
      const bubbleY = y - 64;

      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.roundRect(bubbleX, bubbleY, bubbleW, bubbleH, 8);
      ctx.fill();

      ctx.fillStyle = '#0f172a';
      ctx.textAlign = 'center';
      ctx.fillText(chatMsg, x, bubbleY + 16);
      ctx.restore();
    }
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center bg-slate-950 overflow-hidden">
      <canvas
        ref={canvasRef}
        width={1000}
        height={750}
        onClick={handleCanvasClick}
        className="cursor-pointer border border-slate-800 rounded-2xl shadow-2xl bg-emerald-600"
      />
    </div>
  );
}
