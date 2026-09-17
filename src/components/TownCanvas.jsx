"use client";
import React, { useRef, useEffect } from 'react';

export const HOUSES = [
  { id: 1, name: "Maison 1 : La Logique", level: 1, x: 180, y: 170, color: "#dc2626", roofColor: "#991b1b" },
  { id: 2, name: "Maison 2 : La Nature", level: 2, x: 480, y: 170, color: "#2563eb", roofColor: "#1e3a8a" },
  { id: 3, name: "Maison 3 : Les Énigmes", level: 3, x: 780, y: 170, color: "#d97706", roofColor: "#78350f" },
  { id: 4, name: "Maison 4 : Le Mystère", level: 4, x: 300, y: 530, color: "#7c3aed", roofColor: "#4c1d95" },
  { id: 5, name: "Maison 5 : Le Grand Défi", level: 5, x: 680, y: 530, color: "#059669", roofColor: "#064e3b" },
];

function drawCobblestoneRoad(ctx, x, y, width, height) {
  ctx.fillStyle = '#cbd5e1';
  ctx.fillRect(x - 4, y - 4, width + 8, height + 8);
  ctx.fillStyle = '#64748b';
  ctx.fillRect(x, y, width, height);
  ctx.strokeStyle = '#475569';
  ctx.lineWidth = 1.5;
  ctx.strokeRect(x, y, width, height);
}

function drawStreetLamp(ctx, x, y) {
  ctx.beginPath();
  ctx.arc(x, y - 20, 22, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(253, 224, 71, 0.25)';
  ctx.fill();
  ctx.fillStyle = '#1e293b';
  ctx.fillRect(x - 2, y - 20, 4, 20);
  ctx.beginPath();
  ctx.arc(x, y - 20, 5, 0, Math.PI * 2);
  ctx.fillStyle = '#fde047';
  ctx.fill();
}

function drawSignPost(ctx, x, y, text) {
  ctx.fillStyle = '#78350f';
  ctx.fillRect(x - 2, y, 4, 18);
  ctx.fillStyle = '#92400e';
  ctx.fillRect(x - 30, y - 14, 60, 14);
  ctx.strokeStyle = '#451a03';
  ctx.lineWidth = 1;
  ctx.strokeRect(x - 30, y - 14, 60, 14);
  ctx.fillStyle = '#fef3c7';
  ctx.font = 'bold 10px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText(text, x, y - 3);
}

function drawWoodenBench(ctx, x, y) {
  ctx.fillStyle = '#78350f';
  ctx.fillRect(x - 12, y - 6, 24, 12);
  ctx.fillStyle = '#451a03';
  ctx.fillRect(x - 12, y - 8, 24, 3);
}

function drawRoundRect(ctx, x, y, width, height, radius) {
  if (typeof ctx.roundRect === 'function') {
    ctx.roundRect(x, y, width, height, radius);
  } else {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
  }
}

function drawEllipse(ctx, cx, cy, rx, ry) {
  if (typeof ctx.ellipse === 'function') {
    ctx.beginPath();
    ctx.ellipse(cx, cy, Math.max(0.1, rx), Math.max(0.1, ry), 0, 0, Math.PI * 2);
  } else {
    ctx.save();
    ctx.beginPath();
    ctx.translate(cx, cy);
    ctx.scale(rx, ry);
    ctx.arc(0, 0, 1, 0, Math.PI * 2);
    ctx.restore();
  }
}

function drawRealisticTree(ctx, x, y) {
  ctx.fillStyle = 'rgba(0,0,0,0.2)';
  drawEllipse(ctx, x, y + 18, 18, 8);
  ctx.fill();
  ctx.fillStyle = '#78350f';
  ctx.fillRect(x - 5, y, 10, 18);
  ctx.fillStyle = '#15803d';
  ctx.beginPath();
  ctx.arc(x, y - 10, 24, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#22c55e';
  ctx.beginPath();
  ctx.arc(x - 6, y - 16, 16, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#4ade80';
  ctx.beginPath();
  ctx.arc(x + 5, y - 20, 12, 0, Math.PI * 2);
  ctx.fill();
}

function drawRealisticHouse(ctx, house, isUnlocked) {
  const { x, y, color, roofColor, name, level } = house;

  ctx.fillStyle = 'rgba(0,0,0,0.2)';
  ctx.fillRect(x - 54, y - 26, 108, 76);
  ctx.fillStyle = color;
  ctx.fillRect(x - 50, y - 30, 100, 70);
  ctx.strokeStyle = '#1e293b';
  ctx.lineWidth = 2;
  ctx.strokeRect(x - 50, y - 30, 100, 70);

  ctx.beginPath();
  ctx.moveTo(house.x - 60, house.y - 30);
  ctx.lineTo(house.x, house.y - 75);
  ctx.lineTo(house.x + 60, house.y - 30);
  ctx.closePath();
  ctx.fillStyle = roofColor;
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = '#475569';
  ctx.fillRect(x + 25, y - 70, 10, 20);

  ctx.fillStyle = '#fde047';
  ctx.fillRect(x - 35, y - 15, 18, 18);
  ctx.fillRect(x + 17, y - 15, 18, 18);

  ctx.strokeStyle = '#78350f';
  ctx.lineWidth = 1.5;
  ctx.strokeRect(x - 35, y - 15, 18, 18);
  ctx.strokeRect(x + 17, y - 15, 18, 18);

  ctx.fillStyle = '#78350f';
  ctx.fillRect(x - 14, y + 10, 28, 30);
  ctx.strokeRect(x - 14, y + 10, 28, 30);

  ctx.beginPath();
  ctx.arc(x + 7, y + 26, 2, 0, Math.PI * 2);
  ctx.fillStyle = '#fef08a';
  ctx.fill();

  ctx.fillStyle = isUnlocked ? '#10b981' : '#64748b';
  ctx.beginPath();
  ctx.arc(x, y - 42, 18, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 12px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText(isUnlocked ? `Niv ${level}` : '🔒', x, y - 38);

  ctx.font = 'bold 13px sans-serif';
  ctx.fillStyle = '#ffffff';
  ctx.shadowColor = 'rgba(0,0,0,0.9)';
  ctx.shadowBlur = 6;
  ctx.fillText(name, x, y + 56);
  ctx.shadowBlur = 0;
}

function drawRealisticCharacter(ctx, x, y, gender, nickname, level, isLocal, isMoving, chatMsg) {
  const time = Date.now();
  const stepOffset = isMoving ? Math.sin(time * 0.016) * 6 : 0;
  const bob = isMoving ? Math.abs(Math.sin(time * 0.016)) * 3 : Math.sin(time * 0.003) * 1.5;

  const charY = y - bob;

  ctx.fillStyle = 'rgba(0,0,0,0.25)';
  drawEllipse(ctx, x, y + 16, 14, 6);
  ctx.fill();

  if (isLocal) {
    ctx.strokeStyle = '#4f46e5';
    ctx.lineWidth = 2.5;
    drawEllipse(ctx, x, y + 16, 18, 8);
    ctx.stroke();
  }

  // Pieds
  ctx.fillStyle = '#1e293b';
  drawEllipse(ctx, x - 5, charY + 12 + stepOffset, 4.5, 3.5);
  ctx.fill();
  drawEllipse(ctx, x + 5, charY + 12 - stepOffset, 4.5, 3.5);
  ctx.fill();

  // Pantalon
  ctx.fillStyle = '#334155';
  ctx.fillRect(x - 6, charY + 3, 4, 10);
  ctx.fillRect(x + 2, charY + 3, 4, 10);

  // Torse
  const shirtColor = gender === 'girl' ? '#db2777' : '#2563eb';
  ctx.fillStyle = shirtColor;
  ctx.beginPath();
  drawRoundRect(ctx, x - 9, charY - 10, 18, 15, 4);
  ctx.fill();

  // Bras
  ctx.fillStyle = shirtColor;
  ctx.fillRect(x - 12, charY - 8 - stepOffset * 0.4, 3, 10);
  ctx.fillRect(x + 9, charY - 8 + stepOffset * 0.4, 3, 10);

  // Mains
  ctx.fillStyle = '#fde047';
  ctx.beginPath();
  ctx.arc(x - 10.5, charY + 3 - stepOffset * 0.4, 2.5, 0, Math.PI * 2);
  ctx.arc(x + 10.5, charY + 3 + stepOffset * 0.4, 2.5, 0, Math.PI * 2);
  ctx.fill();

  // Tête
  ctx.fillStyle = '#fef08a';
  ctx.beginPath();
  ctx.arc(x, charY - 20, 11, 0, Math.PI * 2);
  ctx.fill();

  // Cheveux
  ctx.fillStyle = gender === 'girl' ? '#be185d' : '#1e1b4b';
  if (gender === 'girl') {
    ctx.beginPath();
    ctx.arc(x, charY - 22, 12, Math.PI, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(x - 10, charY - 16, 4.5, 0, Math.PI * 2);
    ctx.arc(x + 10, charY - 16, 4.5, 0, Math.PI * 2);
    ctx.fill();
  } else {
    ctx.beginPath();
    ctx.arc(x, charY - 22, 12, Math.PI * 0.8, Math.PI * 2.2);
    ctx.fill();
  }

  // Yeux
  ctx.fillStyle = '#0f172a';
  ctx.beginPath();
  ctx.arc(x - 4, charY - 20, 2, 0, Math.PI * 2);
  ctx.arc(x + 4, charY - 20, 2, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#ffffff';
  ctx.beginPath();
  ctx.arc(x - 4.5, charY - 21, 0.8, 0, Math.PI * 2);
  ctx.arc(x + 3.5, charY - 21, 0.8, 0, Math.PI * 2);
  ctx.fill();

  // Sourire
  ctx.strokeStyle = '#090d16';
  ctx.lineWidth = 1.3;
  ctx.beginPath();
  ctx.arc(x, charY - 17.5, 3.5, 0.1 * Math.PI, 0.9 * Math.PI);
  ctx.stroke();

  // Etiquette Pseudo & BULLE DE NIVEAU Lumineuse à côté !
  ctx.font = 'bold 13px sans-serif';
  const textW = ctx.measureText(nickname).width;

  ctx.fillStyle = isLocal ? '#fef08a' : '#ffffff';
  ctx.shadowColor = 'rgba(0,0,0,0.9)';
  ctx.shadowBlur = 6;
  ctx.textAlign = 'center';
  ctx.fillText(nickname, x - 10, charY - 38);
  ctx.shadowBlur = 0;

  // Petite Bulle de Niveau (ex: [Niv 2])
  const badgeX = x + textW / 2 - 2;
  const badgeY = charY - 48;
  ctx.fillStyle = '#4f46e5';
  ctx.beginPath();
  drawRoundRect(ctx, badgeX, badgeY, 24, 14, 7);
  ctx.fill();
  ctx.strokeStyle = '#818cf8';
  ctx.lineWidth = 1.5;
  ctx.stroke();

  ctx.fillStyle = '#ffffff';
  ctx.font = 'extrabold 9px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText(`${level}`, badgeX + 12, badgeY + 10);

  // Bulle de dialogue
  if (chatMsg) {
    ctx.save();
    ctx.font = '12px sans-serif';
    const textWidth = ctx.measureText(chatMsg).width;
    const bubbleW = textWidth + 16;
    const bubbleH = 24;
    const bubbleX = x - bubbleW / 2;
    const bubbleY = charY - 70;

    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    drawRoundRect(ctx, bubbleX, bubbleY, bubbleW, bubbleH, 8);
    ctx.fill();

    ctx.fillStyle = '#0f172a';
    ctx.textAlign = 'center';
    ctx.fillText(chatMsg, x, bubbleY + 16);
    ctx.restore();
  }
}

export default function TownCanvas({
  socket,
  localPlayer,
  otherPlayers,
  unlockedLevel,
  playerLevel = 1,
  onOpenHouse,
  onSelectPlayer,
  chatBubbles
}) {
  const canvasRef = useRef(null);
  const targetPosRef = useRef({ x: localPlayer?.x || 450, y: localPlayer?.y || 450 });
  const currentPosRef = useRef({ x: localPlayer?.x || 450, y: localPlayer?.y || 450 });
  const isMovingRef = useRef(false);
  const smoothPositionsRef = useRef(new Map());
  const lastEmitTimeRef = useRef(0);

  const handleInput = (clientX, clientY) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const scaleX = 1000 / rect.width;
    const scaleY = 750 / rect.height;

    const clickX = (clientX - rect.left) * scaleX;
    const clickY = (clientY - rect.top) * scaleY;

    for (const house of HOUSES) {
      const dist = Math.hypot(clickX - house.x, clickY - (house.y + 40));
      if (dist < 75) {
        targetPosRef.current = { x: house.x, y: house.y + 85 };
        onOpenHouse(house);
        return;
      }
    }

    if (Array.isArray(otherPlayers)) {
      for (const p of otherPlayers) {
        const dist = Math.hypot(clickX - p.x, clickY - p.y);
        if (dist < 40) {
          onSelectPlayer(p);
          return;
        }
      }
    }

    targetPosRef.current = { x: clickX, y: clickY };
  };

  const handleClick = (e) => handleInput(e.clientX, e.clientY);
  const handleTouch = (e) => {
    if (e.touches && e.touches[0]) {
      e.preventDefault();
      handleInput(e.touches[0].clientX, e.touches[0].clientY);
    }
  };

  useEffect(() => {
    if (Array.isArray(otherPlayers)) {
      const activeIds = new Set(otherPlayers.map(p => p.id));
      for (const id of smoothPositionsRef.current.keys()) {
        if (!activeIds.has(id)) {
          smoothPositionsRef.current.delete(id);
        }
      }
    }
  }, [otherPlayers]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let dpr = typeof window !== 'undefined' ? (window.devicePixelRatio || 1) : 1;

    const updateCanvasDimensions = () => {
      dpr = typeof window !== 'undefined' ? (window.devicePixelRatio || 1) : 1;
      canvas.width = 1000 * dpr;
      canvas.height = 750 * dpr;
    };

    updateCanvasDimensions();
    window.addEventListener('resize', updateCanvasDimensions);
    window.addEventListener('orientationchange', updateCanvasDimensions);

    let animationFrameId;

    const render = () => {
      try {
        ctx.save();
        ctx.scale(dpr, dpr);

        const cur = currentPosRef.current;
        const target = targetPosRef.current;

        const dx = target.x - cur.x;
        const dy = target.y - cur.y;
        const dist = Math.hypot(dx, dy);

        if (dist > 2) {
          isMovingRef.current = true;
          cur.x += (dx / dist) * 3.8;
          cur.y += (dy / dist) * 3.8;

          if (localPlayer) {
            localPlayer.x = cur.x;
            localPlayer.y = cur.y;
          }

          if (socket) {
            const now = Date.now();
            if (now - lastEmitTimeRef.current >= 45) {
              lastEmitTimeRef.current = now;
              let facing = 'down';
              if (Math.abs(dx) > Math.abs(dy)) facing = dx > 0 ? 'right' : 'left';
              else facing = dy > 0 ? 'down' : 'up';

              socket.emit('player_move', { x: cur.x, y: cur.y, facing, isMoving: true });
            }
          }
        } else {
          isMovingRef.current = false;
        }

        ctx.clearRect(0, 0, 1000, 750);

        // Sol de la ville
        ctx.fillStyle = '#10b981';
        ctx.fillRect(0, 0, 1000, 750);

        ctx.fillStyle = '#16a34a';
        ctx.fillRect(0, 0, 1000, 120);
        ctx.fillRect(0, 640, 1000, 110);

        // Routes larges en pavés
        drawCobblestoneRoad(ctx, 60, 260, 880, 50);
        drawCobblestoneRoad(ctx, 60, 620, 880, 50);
        drawCobblestoneRoad(ctx, 475, 260, 50, 410);

        // Place centrale & Fontaine
        ctx.beginPath();
        ctx.arc(500, 465, 75, 0, Math.PI * 2);
        ctx.fillStyle = '#64748b';
        ctx.fill();
        ctx.lineWidth = 3;
        ctx.strokeStyle = '#334155';
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(500, 465, 55, 0, Math.PI * 2);
        ctx.fillStyle = '#94a3b8';
        ctx.fill();

        const ripple = Math.sin(Date.now() * 0.005) * 3;
        ctx.beginPath();
        ctx.arc(500, 465, 38, 0, Math.PI * 2);
        ctx.fillStyle = '#0284c7';
        ctx.fill();

        ctx.beginPath();
        ctx.arc(500, 465, 22 + ripple, 0, Math.PI * 2);
        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.fillStyle = '#e0f2fe';
        ctx.beginPath();
        ctx.arc(500, 465, 7, 0, Math.PI * 2);
        ctx.fill();

        // Réverbères
        const streetLamps = [
          { x: 120, y: 240 }, { x: 440, y: 240 }, { x: 560, y: 240 }, { x: 880, y: 240 },
          { x: 120, y: 600 }, { x: 440, y: 600 }, { x: 560, y: 600 }, { x: 880, y: 600 }
        ];
        streetLamps.forEach(lamp => drawStreetLamp(ctx, lamp.x, lamp.y));

        // Panneaux
        drawSignPost(ctx, 230, 240, "Niveau 1 ➔");
        drawSignPost(ctx, 730, 240, "Niveau 3 ➔");
        drawSignPost(ctx, 350, 600, "Niveau 4 ➔");

        // Bancs
        drawWoodenBench(ctx, 410, 465);
        drawWoodenBench(ctx, 560, 465);

        // Maisons
        HOUSES.forEach((house) => {
          const isUnlocked = house.level <= unlockedLevel;
          drawRealisticHouse(ctx, house, isUnlocked);
        });

        // Arbres
        const trees = [
          { x: 50, y: 60 }, { x: 130, y: 50 }, { x: 920, y: 60 }, { x: 840, y: 50 },
          { x: 50, y: 700 }, { x: 130, y: 710 }, { x: 920, y: 700 }, { x: 840, y: 710 },
          { x: 340, y: 350 }, { x: 660, y: 350 }, { x: 260, y: 370 }, { x: 740, y: 370 },
          { x: 430, y: 110 }, { x: 570, y: 110 }
        ];
        trees.forEach(t => drawRealisticTree(ctx, t.x, t.y));

        // Joueurs autres avec interpolation fluide (Lerp 60 FPS pour fluidité mobile & PC)
        if (Array.isArray(otherPlayers)) {
          otherPlayers.forEach((p) => {
            let sm = smoothPositionsRef.current.get(p.id);
            if (!sm) {
              sm = { x: p.x, y: p.y };
              smoothPositionsRef.current.set(p.id, sm);
            } else {
              sm.x += (p.x - sm.x) * 0.22;
              sm.y += (p.y - sm.y) * 0.22;
            }

            const isMoving = Math.hypot(p.x - sm.x, p.y - sm.y) > 0.4 || !!p.isMoving;

            drawRealisticCharacter(
              ctx,
              sm.x,
              sm.y,
              p.gender,
              p.nickname,
              p.level || 1,
              false,
              isMoving,
              chatBubbles?.[p.id]
            );
          });
        }

        // Joueur local
        if (localPlayer) {
          drawRealisticCharacter(
            ctx,
            cur.x,
            cur.y,
            localPlayer.gender || 'boy',
            localPlayer.nickname || 'Joueur',
            playerLevel || 1,
            true,
            isMovingRef.current,
            socket?.id ? chatBubbles?.[socket.id] : null
          );
        }

        ctx.restore();
      } catch (err) {
        console.warn("[Canvas Render Loop Safe Catch]", err);
      }
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', updateCanvasDimensions);
      window.removeEventListener('orientationchange', updateCanvasDimensions);
    };
  }, [otherPlayers, localPlayer, unlockedLevel, playerLevel, chatBubbles, socket]);

  return (
    <div className="relative w-full h-full flex items-center justify-center bg-slate-950 p-2 sm:p-4 overflow-hidden">
      <canvas
        ref={canvasRef}
        onClick={handleClick}
        onTouchStart={handleTouch}
        style={{ touchAction: 'none' }}
        className="cursor-pointer border border-slate-800 rounded-2xl shadow-2xl bg-emerald-600 w-full max-w-[1000px] max-h-[90vh] object-contain aspect-[4/3]"
      />
    </div>
  );
}
