"use client";
import React, { useRef, useEffect, useState } from 'react';

// Coordonnées des 5 Maisons / Niveaux dans la ville
export const HOUSES = [
  { id: 1, name: "Maison de la Logique", level: 1, x: 180, y: 160, color: "#ef4444", icon: "🏠" },
  { id: 2, name: "Maison de la Nature", level: 2, x: 480, y: 160, color: "#3b82f6", icon: "🏰" },
  { id: 3, name: "Maison des Énigmes", level: 3, x: 780, y: 160, color: "#f59e0b", icon: "🏛️" },
  { id: 4, name: "Maison Mystère", level: 4, x: 300, y: 520, color: "#8b5cf6", icon: "🏡" },
  { id: 5, name: "Maison du Grand Défi", level: 5, x: 650, y: 520, color: "#10b981", icon: "👑" },
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

  // Mise à jour de la cible lors du clic
  const handleCanvasClick = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    // Vérifier si le clic est sur une maison
    for (const house of HOUSES) {
      const dist = Math.hypot(clickX - house.x, clickY - (house.y + 40));
      if (dist < 70) {
        // Se déplacer vers l'entrée de la maison
        targetPosRef.current = { x: house.x, y: house.y + 80 };
        onOpenHouse(house);
        return;
      }
    }

    // Vérifier si le clic est sur un autre joueur
    for (const p of otherPlayers) {
      const dist = Math.hypot(clickX - p.x, clickY - p.y);
      if (dist < 40) {
        onSelectPlayer(p);
        return;
      }
    }

    // Sinon, déplacement classique
    targetPosRef.current = { x: clickX, y: clickY };
  };

  // Boucle de rendu et d'interpolation 60 FPS
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animationFrameId;

    const render = () => {
      // 1. Interpolation fluide du mouvement du joueur local
      const cur = currentPosRef.current;
      const target = targetPosRef.current;

      const dx = target.x - cur.x;
      const dy = target.y - cur.y;
      const dist = Math.hypot(dx, dy);

      if (dist > 2) {
        cur.x += (dx / dist) * 3.5;
        cur.y += (dy / dist) * 3.5;

        // Émettre la nouvelle position au serveur
        if (socket) {
          let facing = 'down';
          if (Math.abs(dx) > Math.abs(dy)) facing = dx > 0 ? 'right' : 'left';
          else facing = dy > 0 ? 'down' : 'up';

          socket.emit('player_move', { x: cur.x, y: cur.y, facing });
        }
      }

      // Clear Canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 2. Dessiner le sol et les chemins de la ville
      ctx.fillStyle = '#48bb78'; // Herbe
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Chemins en pavés
      ctx.fillStyle = '#cbd5e1';
      ctx.fillRect(100, 260, 800, 40);
      ctx.fillRect(100, 620, 800, 40);
      ctx.fillRect(480, 260, 40, 400);

      // Place centrale & fontaine
      ctx.beginPath();
      ctx.arc(500, 450, 65, 0, Math.PI * 2);
      ctx.fillStyle = '#94a3b8';
      ctx.fill();
      ctx.beginPath();
      ctx.arc(500, 450, 40, 0, Math.PI * 2);
      ctx.fillStyle = '#38bdf8'; // Eau fontaine
      ctx.fill();

      // 3. Dessiner les 5 Maisons de devinettes
      HOUSES.forEach((house) => {
        const isUnlocked = house.level <= unlockedLevel;

        // Corps de la maison
        ctx.fillStyle = house.color;
        ctx.fillRect(house.x - 50, house.y - 30, 100, 70);

        // Toit
        ctx.beginPath();
        ctx.moveTo(house.x - 60, house.y - 30);
        ctx.lineTo(house.x, house.y - 70);
        ctx.lineTo(house.x + 60, house.y - 30);
        ctx.closePath();
        ctx.fillStyle = '#1e293b';
        ctx.fill();

        // Porte
        ctx.fillStyle = '#475569';
        ctx.fillRect(house.x - 15, house.y + 10, 30, 30);

        // Badge du Niveau
        ctx.fillStyle = isUnlocked ? '#22c55e' : '#64748b';
        ctx.beginPath();
        ctx.arc(house.x, house.y - 40, 18, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 12px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(isUnlocked ? `Niv ${house.level}` : '🔒', house.x, house.y - 36);

        // Nom de la maison
        ctx.font = 'bold 13px sans-serif';
        ctx.fillStyle = '#ffffff';
        ctx.shadowColor = 'rgba(0,0,0,0.8)';
        ctx.shadowBlur = 4;
        ctx.fillText(house.name, house.x, house.y + 55);
        ctx.shadowBlur = 0;
      });

      // 4. Dessiner les Arbres de déco
      const trees = [
        { x: 60, y: 100 }, { x: 940, y: 100 }, { x: 60, y: 700 }, { x: 940, y: 700 },
        { x: 330, y: 360 }, { x: 670, y: 360 }
      ];
      trees.forEach(t => {
        ctx.fillStyle = '#166534';
        ctx.beginPath();
        ctx.arc(t.x, t.y, 22, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#78350f';
        ctx.fillRect(t.x - 4, t.y + 10, 8, 14);
      });

      // 5. Dessiner les autres joueurs connectés
      otherPlayers.forEach((p) => {
        drawPlayerSprite(ctx, p.x, p.y, p.gender, p.nickname, false, chatBubbles[p.id]);
      });

      // 6. Dessiner le joueur local
      drawPlayerSprite(
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

  // Fonction utilitaire pour dessiner un avatar joueur avec son pseudo et bulle de chat
  const drawPlayerSprite = (ctx, x, y, gender, nickname, isLocal, chatMsg) => {
    // Ombre sous les pieds
    ctx.beginPath();
    ctx.ellipse(x, y + 15, 14, 6, 0, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(0,0,0,0.3)';
    ctx.fill();

    // Cercle lumineux si joueur local
    if (isLocal) {
      ctx.beginPath();
      ctx.ellipse(x, y + 15, 18, 8, 0, 0, Math.PI * 2);
      ctx.strokeStyle = '#3b82f6';
      ctx.lineWidth = 2;
      ctx.stroke();
    }

    // Avatar Emoji 👦 / 👧
    ctx.font = '28px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(gender === 'girl' ? '👧' : '👦', x, y - 5);

    // Étiquette Pseudo au-dessus de la tête
    ctx.font = 'bold 12px sans-serif';
    ctx.fillStyle = isLocal ? '#fde047' : '#ffffff';
    ctx.shadowColor = 'rgba(0,0,0,0.8)';
    ctx.shadowBlur = 4;
    ctx.fillText(nickname, x, y - 30);
    ctx.shadowBlur = 0;

    // Bulle de dialogue de proximité
    if (chatMsg) {
      ctx.save();
      ctx.font = '12px sans-serif';
      const textWidth = ctx.measureText(chatMsg).width;
      const bubbleW = textWidth + 16;
      const bubbleH = 24;
      const bubbleX = x - bubbleW / 2;
      const bubbleY = y - 62;

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
