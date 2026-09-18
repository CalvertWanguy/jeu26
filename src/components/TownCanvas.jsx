"use client";
import React, { useRef, useEffect } from 'react';

export const HOUSES = [
  { id: 1, name: "Maison 1 : La Logique", level: 1, x: 180, y: 170, color: "#ef4444", roofColor: "#991b1b" },
  { id: 2, name: "Maison 2 : La Nature", level: 2, x: 480, y: 170, color: "#3b82f6", roofColor: "#1e3a8a" },
  { id: 3, name: "Maison 3 : Les Énigmes", level: 3, x: 780, y: 170, color: "#f59e0b", roofColor: "#78350f" },
  { id: 4, name: "Maison 4 : Le Mystère", level: 4, x: 300, y: 530, color: "#a855f7", roofColor: "#4c1d95" },
  { id: 5, name: "Maison 5 : Le Grand Défi", level: 5, x: 680, y: 530, color: "#10b981", roofColor: "#064e3b" },
];

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

/* ==========================================================================
   BADGE TITRE MAISON AU-DESSUS DU TOIT (ZÉRO CHEVAUCHEMENT)
   ========================================================================== */
function drawHouseLabel(ctx, x, y, name) {
  ctx.save();
  ctx.font = 'bold 13px sans-serif';
  ctx.fillStyle = '#ffffff';
  ctx.shadowColor = 'rgba(0, 0, 0, 0.95)';
  ctx.shadowBlur = 7;
  ctx.shadowOffsetY = 2;
  ctx.textAlign = 'center';
  ctx.fillText(name, x, y + 56);
  ctx.restore();
}

/* ==========================================================================
   COURONNE DORÉE ROYALE POUR LE GRAND MAÎTRE (NIVEAU >= 100)
   ========================================================================== */
function drawGoldenCrown(ctx, x, y) {
  ctx.save();
  const cx = x;
  const cy = y - 56;

  ctx.shadowColor = '#f59e0b';
  ctx.shadowBlur = 8;

  ctx.fillStyle = '#fbbf24';
  ctx.beginPath();
  ctx.moveTo(cx - 10, cy + 4);
  ctx.lineTo(cx + 10, cy + 4);
  ctx.lineTo(cx + 12, cy - 6);
  ctx.lineTo(cx + 6, cy - 1);
  ctx.lineTo(cx, cy - 9);
  ctx.lineTo(cx - 6, cy - 1);
  ctx.lineTo(cx - 12, cy - 6);
  ctx.closePath();
  ctx.fill();

  ctx.strokeStyle = '#78350f';
  ctx.lineWidth = 1;
  ctx.stroke();

  ctx.fillStyle = '#ef4444';
  ctx.beginPath();
  ctx.arc(cx - 12, cy - 7, 1.8, 0, Math.PI * 2);
  ctx.arc(cx + 12, cy - 7, 1.8, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#3b82f6';
  ctx.beginPath();
  ctx.arc(cx, cy - 10, 2, 0, Math.PI * 2);
  ctx.fill();

  ctx.restore();
}

/* ==========================================================================
   CADENAS VECTORIEL PROFESSIONNEL (REMPLACE L'ÉMOTICÔNE 🔒)
   ========================================================================== */
function drawProfessionalLock(ctx, x, y, level) {
  ctx.save();

  ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
  ctx.shadowBlur = 10;
  ctx.shadowOffsetY = 4;

  const gradShield = ctx.createLinearGradient(x, y - 22, x, y + 22);
  gradShield.addColorStop(0, '#334155');
  gradShield.addColorStop(1, '#0f172a');
  
  ctx.fillStyle = gradShield;
  ctx.beginPath();
  ctx.arc(x, y, 22, 0, Math.PI * 2);
  ctx.fill();

  ctx.strokeStyle = '#f59e0b';
  ctx.lineWidth = 2.5;
  ctx.stroke();

  ctx.shadowBlur = 0;

  const gradShackle = ctx.createLinearGradient(x - 8, y - 16, x + 8, y - 4);
  gradShackle.addColorStop(0, '#f8fafc');
  gradShackle.addColorStop(1, '#94a3b8');

  ctx.strokeStyle = gradShackle;
  ctx.lineWidth = 3.5;
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.arc(x, y - 6, 7.5, Math.PI, 0);
  ctx.stroke();

  const gradBody = ctx.createLinearGradient(x - 9, y - 4, x + 9, y + 10);
  gradBody.addColorStop(0, '#fbbf24');
  gradBody.addColorStop(0.5, '#f59e0b');
  gradBody.addColorStop(1, '#d97706');

  ctx.fillStyle = gradBody;
  ctx.beginPath();
  drawRoundRect(ctx, x - 9, y - 4, 18, 14, 3);
  ctx.fill();

  ctx.strokeStyle = '#78350f';
  ctx.lineWidth = 1;
  ctx.stroke();

  ctx.fillStyle = '#1e293b';
  ctx.beginPath();
  ctx.arc(x, y + 1, 2.5, 0, Math.PI * 2);
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(x - 1.8, y + 2);
  ctx.lineTo(x + 1.8, y + 2);
  ctx.lineTo(x + 1.2, y + 6);
  ctx.lineTo(x - 1.2, y + 6);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = 'rgba(15, 23, 42, 0.9)';
  ctx.beginPath();
  drawRoundRect(ctx, x - 32, y + 26, 64, 16, 8);
  ctx.fill();

  ctx.strokeStyle = '#f59e0b';
  ctx.lineWidth = 1.2;
  ctx.stroke();

  ctx.fillStyle = '#fef3c7';
  ctx.font = 'bold 9px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText(`NIV. ${level} REQUIS`, x, y + 37);

  ctx.restore();
}

/* ==========================================================================
   ALLES DE PIERRE (WALKWAYS) RELIANT LES PORTES AUX ROUTES
   ========================================================================== */
function drawWalkway(ctx, x1, y1, x2, y2) {
  ctx.save();
  ctx.strokeStyle = '#cbd5e1';
  ctx.lineWidth = 18;
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();

  ctx.strokeStyle = '#64748b';
  ctx.lineWidth = 14;
  ctx.stroke();

  ctx.strokeStyle = '#475569';
  ctx.lineWidth = 1;
  ctx.stroke();
  ctx.restore();
}

/* ==========================================================================
   MAISON 1 (NIVEAU 1) : COTTAGE BRITANNIQUE EN BRIQUES ROUGES
   ========================================================================== */
function drawHouse1(ctx, x, y, house, isUnlocked) {
  ctx.save();
  const { name, color } = house;

  // Allée pavée vers la route
  drawWalkway(ctx, x, y + 40, x, y + 90);

  // Ombre 2.5D
  ctx.fillStyle = 'rgba(0,0,0,0.22)';
  ctx.fillRect(x - 54, y - 10, 108, 65);

  const gradWall = ctx.createLinearGradient(x - 50, y - 20, x + 50, y + 50);
  gradWall.addColorStop(0, '#b91c1c');
  gradWall.addColorStop(1, '#7f1d1d');
  ctx.fillStyle = gradWall;
  ctx.fillRect(x - 50, y - 20, 100, 70);
  ctx.strokeStyle = '#450a0a';
  ctx.lineWidth = 2;
  ctx.strokeRect(x - 50, y - 20, 100, 70);

  ctx.strokeStyle = 'rgba(0,0,0,0.15)';
  ctx.lineWidth = 1;
  for (let i = -10; i < 45; i += 12) {
    ctx.beginPath();
    ctx.moveTo(x - 50, y + i);
    ctx.lineTo(x + 50, y + i);
    ctx.stroke();
  }

  ctx.beginPath();
  ctx.moveTo(x - 60, y - 20);
  ctx.lineTo(x - 30, y - 65);
  ctx.lineTo(x + 30, y - 65);
  ctx.lineTo(x + 60, y - 20);
  ctx.closePath();
  const gradRoof = ctx.createLinearGradient(x, y - 65, x, y - 20);
  gradRoof.addColorStop(0, '#78350f');
  gradRoof.addColorStop(1, '#451a03');
  ctx.fillStyle = gradRoof;
  ctx.fill();
  ctx.strokeStyle = '#292524';
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.fillStyle = '#475569';
  ctx.fillRect(x + 22, y - 72, 12, 22);
  ctx.strokeStyle = '#1e293b';
  ctx.strokeRect(x + 22, y - 72, 12, 22);

  if (isUnlocked) {
    const t = Date.now() * 0.003;
    ctx.fillStyle = 'rgba(241, 245, 249, 0.4)';
    ctx.beginPath();
    ctx.arc(x + 28 + Math.sin(t) * 4, y - 78 - (t % 15) * 2, 4 + (t % 15) * 0.5, 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.fillStyle = '#b91c1c';
  ctx.fillRect(x - 12, y - 55, 24, 20);
  ctx.strokeRect(x - 12, y - 55, 24, 20);
  ctx.fillStyle = isUnlocked ? '#fef08a' : '#475569';
  ctx.fillRect(x - 8, y - 50, 16, 12);

  const winColor = isUnlocked ? '#fef08a' : '#334155';
  ctx.fillStyle = winColor;
  ctx.fillRect(x - 38, y - 5, 20, 22);
  ctx.fillRect(x + 18, y - 5, 20, 22);

  ctx.strokeStyle = '#451a03';
  ctx.lineWidth = 1.5;
  ctx.strokeRect(x - 38, y - 5, 20, 22);
  ctx.strokeRect(x + 18, y - 5, 20, 22);

  ctx.fillStyle = '#f59e0b';
  ctx.fillRect(x - 15, y + 10, 30, 40);
  ctx.strokeStyle = '#78350f';
  ctx.strokeRect(x - 15, y + 10, 30, 40);

  ctx.fillStyle = '#fef08a';
  ctx.beginPath();
  ctx.arc(x + 8, y + 30, 2.2, 0, Math.PI * 2);
  ctx.fill();

  drawHouseLabel(ctx, x, y, name);

  if (!isUnlocked) {
    drawProfessionalLock(ctx, x, y - 20, house.level);
  } else {
    ctx.fillStyle = '#10b981';
    ctx.beginPath();
    ctx.arc(x, y - 35, 14, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 11px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(`Niv 1`, x, y - 31);
  }

  ctx.restore();
}

/* ==========================================================================
   MAISON 2 (NIVEAU 2) : CHALET ALPIN MODERN BOIS & BAIE VITRÉE
   ========================================================================== */
function drawHouse2(ctx, x, y, house, isUnlocked) {
  ctx.save();
  const { name, color } = house;

  // Allée pavée
  drawWalkway(ctx, x, y + 40, x, y + 90);

  ctx.fillStyle = 'rgba(0,0,0,0.22)';
  ctx.fillRect(x - 56, y - 10, 112, 65);

  const gradWall = ctx.createLinearGradient(x - 52, y - 20, x + 52, y + 50);
  gradWall.addColorStop(0, '#d97706');
  gradWall.addColorStop(1, '#92400e');
  ctx.fillStyle = gradWall;
  ctx.fillRect(x - 52, y - 20, 104, 70);
  ctx.strokeStyle = '#451a03';
  ctx.lineWidth = 2;
  ctx.strokeRect(x - 52, y - 20, 104, 70);

  ctx.beginPath();
  ctx.moveTo(x - 65, y - 10);
  ctx.lineTo(x - 20, y - 70);
  ctx.lineTo(x + 60, y - 25);
  ctx.closePath();
  ctx.fillStyle = '#1e3a8a';
  ctx.fill();
  ctx.strokeStyle = '#3b82f6';
  ctx.lineWidth = 2.5;
  ctx.stroke();

  const glassColor = isUnlocked ? 'rgba(56, 189, 248, 0.85)' : '#334155';
  ctx.fillStyle = glassColor;
  ctx.fillRect(x - 42, y - 10, 36, 40);
  ctx.strokeStyle = '#1e293b';
  ctx.lineWidth = 2;
  ctx.strokeRect(x - 42, y - 10, 36, 40);

  if (isUnlocked) {
    ctx.strokeStyle = 'rgba(255,255,255,0.4)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(x - 38, y + 20);
    ctx.lineTo(x - 15, y - 5);
    ctx.stroke();
  }

  ctx.fillStyle = '#451a03';
  ctx.fillRect(x + 8, y, 28, 48);
  ctx.strokeStyle = '#78350f';
  ctx.strokeRect(x + 8, y, 28, 48);

  ctx.fillStyle = '#15803d';
  ctx.fillRect(x - 44, y + 30, 40, 6);
  ctx.fillStyle = '#ef4444';
  ctx.beginPath();
  ctx.arc(x - 38, y + 32, 2.5, 0, Math.PI * 2);
  ctx.arc(x - 24, y + 32, 2.5, 0, Math.PI * 2);
  ctx.arc(x - 10, y + 32, 2.5, 0, Math.PI * 2);
  ctx.fill();

  drawHouseLabel(ctx, x, y, name);

  if (!isUnlocked) {
    drawProfessionalLock(ctx, x, y - 20, house.level);
  } else {
    ctx.fillStyle = '#10b981';
    ctx.beginPath();
    ctx.arc(x, y - 35, 14, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 11px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(`Niv 2`, x, y - 31);
  }

  ctx.restore();
}

/* ==========================================================================
   MAISON 3 (NIVEAU 3) : TOUR / CHÂTEAU MÉDIÉVAL EN PIERRE
   ========================================================================== */
function drawHouse3(ctx, x, y, house, isUnlocked) {
  ctx.save();
  const { name, color } = house;

  // Allée pavée
  drawWalkway(ctx, x, y + 40, x, y + 90);

  ctx.fillStyle = 'rgba(0,0,0,0.25)';
  ctx.fillRect(x - 52, y - 10, 104, 65);

  const gradStone = ctx.createLinearGradient(x - 45, y - 40, x + 45, y + 50);
  gradStone.addColorStop(0, '#64748b');
  gradStone.addColorStop(1, '#334155');
  ctx.fillStyle = gradStone;
  ctx.fillRect(x - 45, y - 40, 90, 90);
  ctx.strokeStyle = '#1e293b';
  ctx.lineWidth = 2;
  ctx.strokeRect(x - 45, y - 40, 90, 90);

  ctx.fillStyle = '#475569';
  for (let bx = -47; bx <= 37; bx += 18) {
    ctx.fillRect(x + bx, y - 52, 11, 12);
    ctx.strokeRect(x + bx, y - 52, 11, 12);
  }

  ctx.fillStyle = '#78350f';
  ctx.fillRect(x, y - 72, 3, 22);
  ctx.fillStyle = '#dc2626';
  ctx.beginPath();
  ctx.moveTo(x + 3, y - 72);
  ctx.lineTo(x + 22, y - 64);
  ctx.lineTo(x + 3, y - 56);
  ctx.closePath();
  ctx.fill();

  const winCol = isUnlocked ? '#fde047' : '#1e293b';
  ctx.fillStyle = winCol;
  
  ctx.beginPath();
  ctx.arc(x - 22, y - 15, 8, Math.PI, 0);
  ctx.rect(x - 30, y - 15, 16, 18);
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(x + 22, y - 15, 8, Math.PI, 0);
  ctx.rect(x + 14, y - 15, 16, 18);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = '#451a03';
  ctx.beginPath();
  ctx.arc(x, y + 25, 16, Math.PI, 0);
  ctx.rect(x - 16, y + 25, 32, 25);
  ctx.fill();
  ctx.strokeStyle = '#0f172a';
  ctx.lineWidth = 2;
  ctx.stroke();

  drawHouseLabel(ctx, x, y, name);

  if (!isUnlocked) {
    drawProfessionalLock(ctx, x, y - 20, house.level);
  } else {
    ctx.fillStyle = '#10b981';
    ctx.beginPath();
    ctx.arc(x, y - 35, 14, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 11px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(`Niv 3`, x, y - 31);
  }

  ctx.restore();
}

/* ==========================================================================
   MAISON 4 (NIVEAU 4) : MANOIR VICTORIEN MYSTÉRIEUX À DÔME VIOLET
   ========================================================================== */
function drawHouse4(ctx, x, y, house, isUnlocked) {
  ctx.save();
  const { name, color } = house;

  // Allée pavée vers la route du bas
  drawWalkway(ctx, x, y + 40, x, y + 90);

  ctx.fillStyle = 'rgba(0,0,0,0.25)';
  ctx.fillRect(x - 54, y - 10, 108, 65);

  const gradWall = ctx.createLinearGradient(x - 48, y - 30, x + 48, y + 50);
  gradWall.addColorStop(0, '#5b21b6');
  gradWall.addColorStop(1, '#3b0764');
  ctx.fillStyle = gradWall;
  ctx.fillRect(x - 48, y - 30, 96, 80);
  ctx.strokeStyle = '#1e1b4b';
  ctx.lineWidth = 2;
  ctx.strokeRect(x - 48, y - 30, 96, 80);

  ctx.beginPath();
  ctx.moveTo(x - 56, y - 30);
  ctx.lineTo(x, y - 85);
  ctx.lineTo(x + 56, y - 30);
  ctx.closePath();
  ctx.fillStyle = '#2e1065';
  ctx.fill();
  ctx.strokeStyle = '#a855f7';
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.fillStyle = isUnlocked ? '#c084fc' : '#475569';
  ctx.beginPath();
  ctx.arc(x, y - 48, 10, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#e9d5ff';
  ctx.stroke();

  ctx.fillStyle = '#1e1b4b';
  ctx.fillRect(x - 30, y - 10, 60, 6);
  ctx.strokeStyle = '#a855f7';
  ctx.lineWidth = 1.5;
  ctx.strokeRect(x - 30, y - 10, 60, 6);

  const winGlow = isUnlocked ? '#e879f9' : '#334155';
  ctx.fillStyle = winGlow;
  ctx.fillRect(x - 36, y + 5, 18, 24);
  ctx.fillRect(x + 18, y + 5, 18, 24);
  ctx.strokeStyle = '#581c87';
  ctx.strokeRect(x - 36, y + 5, 18, 24);
  ctx.strokeRect(x + 18, y + 5, 18, 24);

  ctx.fillStyle = '#2e1065';
  ctx.fillRect(x - 12, y + 18, 24, 32);
  ctx.strokeStyle = '#c084fc';
  ctx.strokeRect(x - 12, y + 18, 24, 32);

  drawHouseLabel(ctx, x, y, name);

  if (!isUnlocked) {
    drawProfessionalLock(ctx, x, y - 20, house.level);
  } else {
    ctx.fillStyle = '#10b981';
    ctx.beginPath();
    ctx.arc(x, y - 35, 14, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 11px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(`Niv 4`, x, y - 31);
  }

  ctx.restore();
}

/* ==========================================================================
   MAISON 5 (NIVEAU 5) : OBSERVATOIRE & PALAIS DE CRISTAL DORÉ
   ========================================================================== */
function drawHouse5(ctx, x, y, house, isUnlocked) {
  ctx.save();
  const { name, color } = house;

  // Allée pavée
  drawWalkway(ctx, x, y + 40, x, y + 90);

  ctx.fillStyle = 'rgba(0,0,0,0.25)';
  ctx.fillRect(x - 60, y - 10, 120, 65);

  const gradWall = ctx.createLinearGradient(x - 52, y - 30, x + 52, y + 50);
  gradWall.addColorStop(0, '#f8fafc');
  gradWall.addColorStop(1, '#cbd5e1');
  ctx.fillStyle = gradWall;
  ctx.fillRect(x - 52, y - 30, 104, 80);
  ctx.strokeStyle = '#eab308';
  ctx.lineWidth = 2.5;
  ctx.strokeRect(x - 52, y - 30, 104, 80);

  ctx.beginPath();
  ctx.arc(x, y - 30, 36, Math.PI, 0);
  const gradDome = ctx.createLinearGradient(x - 36, y - 66, x + 36, y - 30);
  gradDome.addColorStop(0, isUnlocked ? 'rgba(56, 189, 248, 0.9)' : '#475569');
  gradDome.addColorStop(1, isUnlocked ? 'rgba(16, 185, 129, 0.7)' : '#1e293b');
  ctx.fillStyle = gradDome;
  ctx.fill();
  ctx.strokeStyle = '#f59e0b';
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.fillStyle = '#f59e0b';
  ctx.beginPath();
  ctx.arc(x, y - 68, 5, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#fbbf24';
  ctx.fillRect(x - 44, y - 25, 8, 75);
  ctx.fillRect(x - 20, y - 25, 8, 75);
  ctx.fillRect(x + 12, y - 25, 8, 75);
  ctx.fillRect(x + 36, y - 25, 8, 75);

  ctx.fillStyle = '#dc2626';
  ctx.fillRect(x - 10, y + 20, 20, 30);

  drawHouseLabel(ctx, x, y, name);

  if (!isUnlocked) {
    drawProfessionalLock(ctx, x, y - 20, house.level);
  } else {
    ctx.fillStyle = '#10b981';
    ctx.beginPath();
    ctx.arc(x, y - 35, 14, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 11px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(`Niv 5`, x, y - 31);
  }

  ctx.restore();
}

/* ==========================================================================
   DÉCORS D'ENVIRONNEMENT : ARBRES, ROUTES, FONTAINE & DÉCORS
   ========================================================================== */
function drawCobblestoneRoad(ctx, x, y, width, height) {
  ctx.fillStyle = '#cbd5e1';
  ctx.fillRect(x - 4, y - 4, width + 8, height + 8);

  const gradRoad = ctx.createLinearGradient(x, y, x + width, y + height);
  gradRoad.addColorStop(0, '#475569');
  gradRoad.addColorStop(1, '#334155');
  ctx.fillStyle = gradRoad;
  ctx.fillRect(x, y, width, height);
  ctx.strokeStyle = '#1e293b';
  ctx.lineWidth = 2;
  ctx.strokeRect(x, y, width, height);
}

function drawOakTree(ctx, x, y) {
  ctx.save();
  ctx.fillStyle = 'rgba(0,0,0,0.2)';
  drawEllipse(ctx, x, y + 20, 20, 9);
  ctx.fill();

  ctx.fillStyle = '#78350f';
  ctx.fillRect(x - 6, y, 12, 20);

  ctx.fillStyle = '#15803d';
  ctx.beginPath();
  ctx.arc(x, y - 12, 26, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#22c55e';
  ctx.beginPath();
  ctx.arc(x - 8, y - 20, 18, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#4ade80';
  ctx.beginPath();
  ctx.arc(x + 7, y - 22, 14, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

function drawPineTree(ctx, x, y) {
  ctx.save();
  ctx.fillStyle = 'rgba(0,0,0,0.2)';
  drawEllipse(ctx, x, y + 18, 14, 6);
  ctx.fill();

  ctx.fillStyle = '#451a03';
  ctx.fillRect(x - 4, y, 8, 18);

  ctx.fillStyle = '#065f46';
  ctx.beginPath();
  ctx.moveTo(x - 22, y + 2);
  ctx.lineTo(x, y - 22);
  ctx.lineTo(x + 22, y + 2);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = '#047857';
  ctx.beginPath();
  ctx.moveTo(x - 18, y - 12);
  ctx.lineTo(x, y - 36);
  ctx.lineTo(x + 18, y - 12);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = '#10b981';
  ctx.beginPath();
  ctx.moveTo(x - 14, y - 26);
  ctx.lineTo(x, y - 48);
  ctx.lineTo(x + 14, y - 26);
  ctx.closePath();
  ctx.fill();

  ctx.restore();
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

function drawWoodenBench(ctx, x, y) {
  ctx.fillStyle = '#78350f';
  ctx.fillRect(x - 12, y - 6, 24, 12);
  ctx.fillStyle = '#451a03';
  ctx.fillRect(x - 12, y - 8, 24, 3);
}

function drawRealisticCharacter(ctx, x, y, gender, nickname, level, isLocal, isMoving, statusBadge, activeEmote) {
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

  // Couronne Dorée si Grand Maître (Level >= 100)
  if (level >= 100) {
    drawGoldenCrown(ctx, x, charY);
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

  // Etiquette Pseudo & BULLE DE NIVEAU Lumineuse
  ctx.font = 'bold 13px sans-serif';
  const textW = ctx.measureText(nickname).width;

  ctx.fillStyle = isLocal ? '#fef08a' : '#ffffff';
  ctx.shadowColor = 'rgba(0,0,0,0.9)';
  ctx.shadowBlur = 6;
  ctx.textAlign = 'center';
  ctx.fillText(nickname, x - 10, charY - 38);
  ctx.shadowBlur = 0;

  // Bulle de Niveau (ex: [Niv 100])
  const badgeX = x + textW / 2 - 2;
  const badgeY = charY - 48;
  const badgeW = level >= 100 ? 32 : 24;
  ctx.fillStyle = level >= 100 ? '#f59e0b' : '#4f46e5';
  ctx.beginPath();
  drawRoundRect(ctx, badgeX, badgeY, badgeW, 14, 7);
  ctx.fill();
  ctx.strokeStyle = level >= 100 ? '#fef08a' : '#818cf8';
  ctx.lineWidth = 1.5;
  ctx.stroke();

  ctx.fillStyle = '#ffffff';
  ctx.font = 'extrabold 9px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText(`${level}`, badgeX + badgeW / 2, badgeY + 10);

  // Badge de statut du joueur ("🧠 En Énigme", "⚔️ En Duel", "💬 En Privé")
  if (statusBadge) {
    ctx.save();
    ctx.font = 'bold 10px sans-serif';
    const sbWidth = ctx.measureText(statusBadge).width + 12;
    ctx.fillStyle = 'rgba(15, 23, 42, 0.85)';
    ctx.beginPath();
    drawRoundRect(ctx, x - sbWidth / 2, charY + 22, sbWidth, 16, 8);
    ctx.fill();
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 1;
    ctx.stroke();

    ctx.fillStyle = '#38bdf8';
    ctx.textAlign = 'center';
    ctx.fillText(statusBadge, x, charY + 33);
    ctx.restore();
  }

  // Bulle d'émote animée (ex: 👋 👏 🤔 🔥 🎉 👑)
  if (activeEmote) {
    ctx.save();
    const floatY = charY - 65 + Math.sin(time * 0.008) * 3;
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(x, floatY, 14, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#6366f1';
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.font = '16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(activeEmote, x, floatY + 5);
    ctx.restore();
  }
}

function TownCanvas({
  socket,
  localPlayer,
  otherPlayers,
  unlockedLevel,
  playerLevel = 1,
  onOpenHouse,
  onSelectPlayer,
  chatBubbles,
  playerEmotes,
  localStatusBadge
}) {
  const canvasRef = useRef(null);
  const initialX = Math.max(30, Math.min(970, localPlayer?.x || 450));
  const initialY = Math.max(40, Math.min(710, localPlayer?.y || 450));

  const targetPosRef = useRef({ x: initialX, y: initialY });
  const currentPosRef = useRef({ x: initialX, y: initialY });
  const isMovingRef = useRef(false);
  const smoothPositionsRef = useRef(new Map());
  const lastEmitTimeRef = useRef(0);

  const lastInputTimeRef = useRef(0);

  const handleInput = (clientX, clientY) => {
    const now = Date.now();
    if (now - lastInputTimeRef.current < 350) return;
    lastInputTimeRef.current = now;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const scaleX = 1000 / rect.width;
    const scaleY = 750 / rect.height;

    const rawClickX = (clientX - rect.left) * scaleX;
    const rawClickY = (clientY - rect.top) * scaleY;

    // Clamping strict aux limites jouables de la carte pour éviter tout tremblement aux bords
    const clickX = Math.max(30, Math.min(970, rawClickX));
    const clickY = Math.max(40, Math.min(710, rawClickY));

    for (const house of HOUSES) {
      const dist = Math.hypot(clickX - house.x, clickY - (house.y + 40));
      if (dist < 75) {
        targetPosRef.current = { x: house.x, y: house.y + 85 };
        onOpenHouse(house);
        return;
      }
    }

    if (Array.isArray(otherPlayers) && otherPlayers.length > 0) {
      let closestPlayer = null;
      let minDistance = 38;

      for (const p of otherPlayers) {
        const dist = Math.hypot(clickX - p.x, clickY - p.y);
        if (dist < minDistance) {
          minDistance = dist;
          closestPlayer = p;
        }
      }

      if (closestPlayer) {
        onSelectPlayer(closestPlayer);
        return;
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

  const propsRef = useRef({ otherPlayers, localPlayer, unlockedLevel, playerLevel, chatBubbles, socket, playerEmotes, localStatusBadge });
  useEffect(() => {
    propsRef.current = { otherPlayers, localPlayer, unlockedLevel, playerLevel, chatBubbles, socket, playerEmotes, localStatusBadge };
  }, [otherPlayers, localPlayer, unlockedLevel, playerLevel, chatBubbles, socket, playerEmotes, localStatusBadge]);

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
        const {
          otherPlayers: currentOtherPlayers,
          localPlayer: currentLocalPlayer,
          unlockedLevel: currentUnlockedLevel,
          playerLevel: currentPlayerLevel,
          chatBubbles: currentChatBubbles,
          socket: currentSocket
        } = propsRef.current;

        ctx.save();
        ctx.scale(dpr, dpr);

        const cur = currentPosRef.current;
        const target = targetPosRef.current;

        const dx = target.x - cur.x;
        const dy = target.y - cur.y;
        const dist = Math.hypot(dx, dy);
        const stepSpeed = 6.8;

        if (dist > 0.5) {
          if (dist <= stepSpeed) {
            cur.x = target.x;
            cur.y = target.y;
            isMovingRef.current = false;
          } else {
            isMovingRef.current = true;
            cur.x += (dx / dist) * stepSpeed;
            cur.y += (dy / dist) * stepSpeed;
          }

          cur.x = Math.max(30, Math.min(970, cur.x));
          cur.y = Math.max(40, Math.min(710, cur.y));

          if (currentLocalPlayer) {
            currentLocalPlayer.x = cur.x;
            currentLocalPlayer.y = cur.y;
          }

          if (currentSocket) {
            const now = Date.now();
            if (now - lastEmitTimeRef.current >= 55) {
              lastEmitTimeRef.current = now;
              let facing = 'down';
              if (Math.abs(dx) > Math.abs(dy)) facing = dx > 0 ? 'right' : 'left';
              else facing = dy > 0 ? 'down' : 'up';

              currentSocket.emit('player_move', { x: cur.x, y: cur.y, facing, isMoving: isMovingRef.current });
            }
          }
        } else {
          cur.x = target.x;
          cur.y = target.y;
          isMovingRef.current = false;
        }

        ctx.clearRect(0, 0, 1000, 750);

        // Sol de la ville (Pelouse verte avec dégradé doux)
        const gradGrass = ctx.createLinearGradient(0, 0, 0, 750);
        gradGrass.addColorStop(0, '#15803d');
        gradGrass.addColorStop(0.5, '#16a34a');
        gradGrass.addColorStop(1, '#15803d');
        ctx.fillStyle = gradGrass;
        ctx.fillRect(0, 0, 1000, 750);

        // Parcs supérieurs & inférieurs
        ctx.fillStyle = '#14532d';
        ctx.fillRect(0, 0, 1000, 120);
        ctx.fillRect(0, 640, 1000, 110);

        // Routes larges en pavés
        drawCobblestoneRoad(ctx, 60, 260, 880, 50);
        drawCobblestoneRoad(ctx, 60, 620, 880, 50);
        drawCobblestoneRoad(ctx, 475, 260, 50, 410);

        // Place centrale & Fontaine Animée
        ctx.beginPath();
        ctx.arc(500, 465, 75, 0, Math.PI * 2);
        ctx.fillStyle = '#475569';
        ctx.fill();
        ctx.lineWidth = 3.5;
        ctx.strokeStyle = '#1e293b';
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(500, 465, 55, 0, Math.PI * 2);
        ctx.fillStyle = '#64748b';
        ctx.fill();

        const ripple = Math.sin(Date.now() * 0.005) * 4;
        ctx.beginPath();
        ctx.arc(500, 465, 38, 0, Math.PI * 2);
        ctx.fillStyle = '#0284c7';
        ctx.fill();

        ctx.beginPath();
        ctx.arc(500, 465, 22 + ripple, 0, Math.PI * 2);
        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 2.5;
        ctx.stroke();

        // Jet d'eau central
        ctx.fillStyle = '#e0f2fe';
        ctx.beginPath();
        ctx.arc(500, 465, 8, 0, Math.PI * 2);
        ctx.fill();

        // Réverbères
        const streetLamps = [
          { x: 120, y: 240 }, { x: 440, y: 240 }, { x: 560, y: 240 }, { x: 880, y: 240 },
          { x: 120, y: 600 }, { x: 440, y: 600 }, { x: 560, y: 600 }, { x: 880, y: 600 }
        ];
        streetLamps.forEach(lamp => drawStreetLamp(ctx, lamp.x, lamp.y));

        // Bancs
        drawWoodenBench(ctx, 410, 465);
        drawWoodenBench(ctx, 560, 465);

        // 5 Maisons aux Architectures Uniques et Distinctes
        HOUSES.forEach((house) => {
          const isUnlocked = (house.level <= currentUnlockedLevel) || (currentPlayerLevel >= 100);
          if (house.id === 1) drawHouse1(ctx, house.x, house.y, house, isUnlocked);
          else if (house.id === 2) drawHouse2(ctx, house.x, house.y, house, isUnlocked);
          else if (house.id === 3) drawHouse3(ctx, house.x, house.y, house, isUnlocked);
          else if (house.id === 4) drawHouse4(ctx, house.x, house.y, house, isUnlocked);
          else if (house.id === 5) drawHouse5(ctx, house.x, house.y, house, isUnlocked);
        });

        // Végétation Variée (Chênes & Pins)
        const oakTrees = [
          { x: 50, y: 60 }, { x: 920, y: 60 }, { x: 50, y: 700 }, { x: 920, y: 700 },
          { x: 340, y: 350 }, { x: 660, y: 350 }
        ];
        oakTrees.forEach(t => drawOakTree(ctx, t.x, t.y));

        const pineTrees = [
          { x: 130, y: 50 }, { x: 840, y: 50 }, { x: 130, y: 710 }, { x: 840, y: 710 },
          { x: 260, y: 370 }, { x: 740, y: 370 }, { x: 430, y: 110 }, { x: 570, y: 110 }
        ];
        pineTrees.forEach(t => drawPineTree(ctx, t.x, t.y));

        // Joueurs autres avec interpolation fluide et seuil d'arrêt net
        if (Array.isArray(currentOtherPlayers)) {
          currentOtherPlayers.forEach((p) => {
            let sm = smoothPositionsRef.current.get(p.id);
            if (!sm) {
              sm = { x: p.x, y: p.y };
              smoothPositionsRef.current.set(p.id, sm);
            } else {
              const dx = p.x - sm.x;
              const dy = p.y - sm.y;
              if (Math.hypot(dx, dy) < 0.5) {
                sm.x = p.x;
                sm.y = p.y;
              } else {
                sm.x += dx * 0.38;
                sm.y += dy * 0.38;
              }
            }

            const distToTarget = Math.hypot(p.x - sm.x, p.y - sm.y);
            const isMoving = distToTarget > 0.8 || !!p.isMoving;

            drawRealisticCharacter(
              ctx,
              sm.x,
              sm.y,
              p.gender,
              p.nickname,
              p.level || 1,
              false,
              isMoving,
              p.statusBadge,
              currentChatBubbles?.[p.id] || propsRef.current.playerEmotes?.[p.id]
            );
          });
        }

        // Joueur local
        if (currentLocalPlayer) {
          drawRealisticCharacter(
            ctx,
            cur.x,
            cur.y,
            currentLocalPlayer.gender || 'boy',
            currentLocalPlayer.nickname || 'Joueur',
            currentPlayerLevel || 1,
            true,
            isMovingRef.current,
            propsRef.current.localStatusBadge,
            currentSocket?.id ? (currentChatBubbles?.[currentSocket.id] || propsRef.current.playerEmotes?.[currentSocket.id]) : null
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
  }, []);

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

export default React.memo(TownCanvas);
