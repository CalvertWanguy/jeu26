import { NextResponse } from 'next/server';

// Stockage global en mémoire du serveur pour la synchronisation Vercel
if (!globalThis.onlinePlayersMap) {
  globalThis.onlinePlayersMap = new Map();
  globalThis.villageRoomsMap = new Map();
}

const players = globalThis.onlinePlayersMap;
const villageRooms = globalThis.villageRoomsMap;

// Nettoyer les joueurs inactifs (> 12 secondes)
const cleanupInactivePlayers = () => {
  const now = Date.now();
  players.forEach((p, id) => {
    if (now - p.lastSeen > 12000) {
      players.delete(id);
    }
  });
};

export async function GET(request) {
  cleanupInactivePlayers();
  const playersList = Array.from(players.values());
  return NextResponse.json({ players: playersList });
}

export async function POST(request) {
  try {
    cleanupInactivePlayers();
    const body = await request.json();
    const { id, nickname, gender, level, x, y, facing, isMoving } = body;

    if (!id || !nickname) {
      return NextResponse.json({ error: 'Champs requis manquants' }, { status: 400 });
    }

    // Assigner un village de 5 places max
    let roomName = 'Village #1';
    let assigned = false;

    for (let idx = 1; idx <= 50; idx++) {
      const currentRoom = `Village #${idx}`;
      const occupants = Array.from(players.values()).filter(p => p.villageRoom === currentRoom && p.id !== id);

      if (occupants.length < 5) {
        roomName = currentRoom;
        assigned = true;
        break;
      }
    }

    const playerObj = {
      id,
      nickname,
      gender,
      level: level || 1,
      villageRoom: roomName,
      x: x || 450,
      y: y || 450,
      facing: facing || 'down',
      isMoving: !!isMoving,
      lastSeen: Date.now()
    };

    players.set(id, playerObj);

    // Retourner uniquement les joueurs du même village
    const villagePlayers = Array.from(players.values()).filter(p => p.villageRoom === roomName);

    return NextResponse.json({
      success: true,
      player: playerObj,
      villageRoom: roomName,
      totalInVillage: villagePlayers.length,
      players: villagePlayers.filter(p => p.id !== id)
    });
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
