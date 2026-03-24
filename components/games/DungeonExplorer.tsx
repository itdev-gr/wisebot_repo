
import React, { useRef, useEffect, useState, useCallback } from 'react';
import { ArrowLeft, RotateCcw, Sword, Heart, Star, Key, DoorOpen, Shield, Zap, Crown } from 'lucide-react';
import { useEconomy } from '../../context/EconomyContext';

interface DungeonExplorerProps {
  lang: 'el' | 'en';
  onBack: () => void;
}

// ─── TYPES ──────────────────────────────────
type CellType = 'wall' | 'floor' | 'door' | 'chest' | 'trap' | 'monster' | 'key' | 'exit' | 'potion' | 'start';

interface Cell {
  type: CellType;
  revealed: boolean;
  visited: boolean;
  emoji?: string;
  monsterHP?: number;
  monsterDmg?: number;
  monsterName?: string;
  loot?: string;
  trapDmg?: number;
}

interface PlayerState {
  x: number;
  y: number;
  hp: number;
  maxHP: number;
  attack: number;
  keys: number;
  gold: number;
  potions: number;
  shield: number;
  floor: number;
}

const GRID_SIZE = 9;
const CELL_PX = 42;

const MONSTERS = [
  { name: 'Slime', emoji: '🟢', hp: 15, dmg: 5 },
  { name: 'Bat', emoji: '🦇', hp: 20, dmg: 8 },
  { name: 'Skeleton', emoji: '💀', hp: 30, dmg: 10 },
  { name: 'Ghost', emoji: '👻', hp: 25, dmg: 12 },
  { name: 'Spider', emoji: '🕷️', hp: 35, dmg: 14 },
  { name: 'Ogre', emoji: '👹', hp: 50, dmg: 18 },
  { name: 'Dragon', emoji: '🐉', hp: 70, dmg: 22 },
];

// ─── MAZE GENERATOR ─────────────────────────
function generateMaze(floor: number): Cell[][] {
  const grid: Cell[][] = Array.from({ length: GRID_SIZE }, () =>
    Array.from({ length: GRID_SIZE }, () => ({ type: 'wall' as CellType, revealed: false, visited: false }))
  );

  // DFS maze generation
  const visited = new Set<string>();
  const stack: [number, number][] = [];
  const startX = 1, startY = 1;

  function carve(x: number, y: number) {
    visited.add(`${x},${y}`);
    grid[y][x] = { type: 'floor', revealed: false, visited: false };

    const dirs = [[0, -2], [0, 2], [-2, 0], [2, 0]].sort(() => Math.random() - 0.5);
    for (const [dx, dy] of dirs) {
      const nx = x + dx, ny = y + dy;
      if (nx >= 1 && nx < GRID_SIZE - 1 && ny >= 1 && ny < GRID_SIZE - 1 && !visited.has(`${nx},${ny}`)) {
        grid[y + dy / 2][x + dx / 2] = { type: 'floor', revealed: false, visited: false };
        carve(nx, ny);
      }
    }
  }
  carve(startX, startY);

  // Ensure more walkable area by opening some extra walls
  for (let y = 1; y < GRID_SIZE - 1; y++) {
    for (let x = 1; x < GRID_SIZE - 1; x++) {
      if (grid[y][x].type === 'wall' && Math.random() < 0.25) {
        const adjacentFloors = [[0, 1], [0, -1], [1, 0], [-1, 0]].filter(([dx, dy]) => {
          const ax = x + dx, ay = y + dy;
          return ax >= 0 && ax < GRID_SIZE && ay >= 0 && ay < GRID_SIZE && grid[ay][ax].type !== 'wall';
        });
        if (adjacentFloors.length >= 2) {
          grid[y][x] = { type: 'floor', revealed: false, visited: false };
        }
      }
    }
  }

  // Place start
  grid[startY][startX] = { type: 'start', revealed: true, visited: true, emoji: '🚪' };

  // Place exit far from start
  let exitX = GRID_SIZE - 2, exitY = GRID_SIZE - 2;
  while (grid[exitY][exitX].type === 'wall') {
    exitX = Math.max(1, exitX - 1);
    if (exitX <= 1) { exitY = Math.max(1, exitY - 1); exitX = GRID_SIZE - 2; }
  }
  grid[exitY][exitX] = { type: 'exit', revealed: false, visited: false, emoji: '🏁' };

  // Get all floor cells for item placement
  const floors: [number, number][] = [];
  for (let y = 1; y < GRID_SIZE - 1; y++) {
    for (let x = 1; x < GRID_SIZE - 1; x++) {
      if (grid[y][x].type === 'floor') floors.push([x, y]);
    }
  }
  // Shuffle
  floors.sort(() => Math.random() - 0.5);
  let idx = 0;

  // Place items based on floor
  const monsterCount = 2 + Math.floor(floor * 0.8);
  const chestCount = 1 + Math.floor(floor * 0.3);
  const trapCount = Math.floor(floor * 0.5);
  const potionCount = 1 + Math.floor(floor * 0.2);

  // Keys (always 1, needed for exit door)
  if (idx < floors.length) {
    const [kx, ky] = floors[idx++];
    grid[ky][kx] = { type: 'key', revealed: false, visited: false, emoji: '🔑' };
  }

  // Door near exit
  const doorCandidates = [[0, 1], [0, -1], [1, 0], [-1, 0]]
    .map(([dx, dy]) => [exitX + dx, exitY + dy])
    .filter(([dx, dy]) => dx >= 1 && dx < GRID_SIZE - 1 && dy >= 1 && dy < GRID_SIZE - 1 && grid[dy][dx].type === 'floor');
  if (doorCandidates.length > 0) {
    const [dx, dy] = doorCandidates[0];
    grid[dy][dx] = { type: 'door', revealed: false, visited: false, emoji: '🚪' };
  }

  // Monsters
  const monsterPool = floor <= 2 ? MONSTERS.slice(0, 3) : floor <= 4 ? MONSTERS.slice(1, 5) : MONSTERS.slice(2);
  for (let i = 0; i < monsterCount && idx < floors.length; i++) {
    const [mx, my] = floors[idx++];
    const m = monsterPool[Math.floor(Math.random() * monsterPool.length)];
    const scale = 1 + floor * 0.15;
    grid[my][mx] = {
      type: 'monster', revealed: false, visited: false,
      emoji: m.emoji, monsterHP: Math.floor(m.hp * scale), monsterDmg: Math.floor(m.dmg * scale), monsterName: m.name,
    };
  }

  // Chests
  for (let i = 0; i < chestCount && idx < floors.length; i++) {
    const [cx, cy] = floors[idx++];
    const loot = Math.random() > 0.5 ? 'gold' : Math.random() > 0.5 ? 'potion' : 'shield';
    grid[cy][cx] = { type: 'chest', revealed: false, visited: false, emoji: '📦', loot };
  }

  // Traps
  for (let i = 0; i < trapCount && idx < floors.length; i++) {
    const [tx, ty] = floors[idx++];
    grid[ty][tx] = { type: 'trap', revealed: false, visited: false, emoji: '⚡', trapDmg: 5 + floor * 3 };
  }

  // Potions
  for (let i = 0; i < potionCount && idx < floors.length; i++) {
    const [px, py] = floors[idx++];
    grid[py][px] = { type: 'potion', revealed: false, visited: false, emoji: '🧪' };
  }

  return grid;
}

// ─── COMPONENT ──────────────────────────────
export default function DungeonExplorer({ lang, onBack }: DungeonExplorerProps) {
  const { earnCredits, showNotification } = useEconomy();
  const creditsAwardedRef = useRef(false);

  const [gameState, setGameState] = useState<'menu' | 'playing' | 'combat' | 'gameover' | 'floorClear'>('menu');
  const [grid, setGrid] = useState<Cell[][]>([]);
  const [player, setPlayer] = useState<PlayerState>({
    x: 1, y: 1, hp: 100, maxHP: 100, attack: 15, keys: 0, gold: 0, potions: 0, shield: 0, floor: 1,
  });
  const [combatMonster, setCombatMonster] = useState<Cell | null>(null);
  const [combatLog, setCombatLog] = useState('');
  const [message, setMessage] = useState('');
  const [msgTimer, setMsgTimer] = useState<NodeJS.Timeout | null>(null);

  const isGreek = lang === 'el';

  const showMsg = useCallback((msg: string, duration = 1500) => {
    setMessage(msg);
    if (msgTimer) clearTimeout(msgTimer);
    const t = setTimeout(() => setMessage(''), duration);
    setMsgTimer(t);
  }, [msgTimer]);

  const revealAround = useCallback((grd: Cell[][], px: number, py: number) => {
    for (let dy = -1; dy <= 1; dy++) {
      for (let dx = -1; dx <= 1; dx++) {
        const nx = px + dx, ny = py + dy;
        if (nx >= 0 && nx < GRID_SIZE && ny >= 0 && ny < GRID_SIZE) {
          grd[ny][nx].revealed = true;
        }
      }
    }
    return grd;
  }, []);

  const startGame = useCallback(() => {
    const newGrid = generateMaze(1);
    const revealed = revealAround(newGrid, 1, 1);
    setGrid(revealed);
    setPlayer({ x: 1, y: 1, hp: 100, maxHP: 100, attack: 15, keys: 0, gold: 0, potions: 0, shield: 0, floor: 1 });
    setGameState('playing');
    setCombatMonster(null);
    setCombatLog('');
    creditsAwardedRef.current = false;
  }, [revealAround]);

  const nextFloor = useCallback(() => {
    const newFloor = player.floor + 1;
    const newGrid = generateMaze(newFloor);
    const revealed = revealAround(newGrid, 1, 1);
    setGrid(revealed);
    setPlayer(p => ({ ...p, x: 1, y: 1, floor: newFloor, hp: Math.min(p.maxHP, p.hp + 20) }));
    setGameState('playing');
    showMsg(isGreek ? `🏰 Όροφος ${newFloor}!` : `🏰 Floor ${newFloor}!`);
  }, [player.floor, revealAround, showMsg, isGreek]);

  const movePlayer = useCallback((dx: number, dy: number) => {
    if (gameState !== 'playing') return;
    const nx = player.x + dx, ny = player.y + dy;
    if (nx < 0 || nx >= GRID_SIZE || ny < 0 || ny >= GRID_SIZE) return;

    const cell = grid[ny][nx];
    if (cell.type === 'wall') return;

    if (cell.type === 'door' && player.keys <= 0) {
      showMsg(isGreek ? '🔒 Χρειάζεσαι κλειδί!' : '🔒 You need a key!');
      return;
    }

    if (cell.type === 'monster' && cell.monsterHP && cell.monsterHP > 0) {
      // Enter combat
      setCombatMonster({ ...cell });
      setGameState('combat');
      setCombatLog(isGreek ? `${cell.emoji} ${cell.monsterName} εμφανίστηκε!` : `${cell.emoji} ${cell.monsterName} appeared!`);
      // Player also moves (for position tracking)
      const newGrid = [...grid.map(r => [...r])];
      newGrid[ny][nx].visited = true;
      revealAround(newGrid, nx, ny);
      setGrid(newGrid);
      setPlayer(p => ({ ...p, x: nx, y: ny }));
      return;
    }

    // Process cell
    const newGrid = [...grid.map(r => [...r])];
    let newPlayer = { ...player, x: nx, y: ny };

    switch (cell.type) {
      case 'key':
        newPlayer.keys++;
        showMsg(isGreek ? '🔑 Βρήκες κλειδί!' : '🔑 Found a key!');
        newGrid[ny][nx] = { type: 'floor', revealed: true, visited: true };
        break;
      case 'door':
        newPlayer.keys--;
        showMsg(isGreek ? '🚪 Η πόρτα άνοιξε!' : '🚪 Door opened!');
        newGrid[ny][nx] = { type: 'floor', revealed: true, visited: true };
        break;
      case 'chest':
        if (cell.loot === 'gold') {
          const goldAmount = 10 + player.floor * 5;
          newPlayer.gold += goldAmount;
          showMsg(isGreek ? `💰 +${goldAmount} χρυσό!` : `💰 +${goldAmount} gold!`);
        } else if (cell.loot === 'potion') {
          newPlayer.potions++;
          showMsg(isGreek ? '🧪 +1 Φίλτρο!' : '🧪 +1 Potion!');
        } else if (cell.loot === 'shield') {
          newPlayer.shield += 5;
          showMsg(isGreek ? '🛡️ +5 Ασπίδα!' : '🛡️ +5 Shield!');
        }
        newGrid[ny][nx] = { type: 'floor', revealed: true, visited: true };
        break;
      case 'trap':
        const trapDmg = cell.trapDmg || 10;
        newPlayer.hp = Math.max(0, newPlayer.hp - trapDmg);
        showMsg(isGreek ? `⚡ Παγίδα! -${trapDmg}HP` : `⚡ Trap! -${trapDmg}HP`);
        newGrid[ny][nx] = { type: 'floor', revealed: true, visited: true };
        break;
      case 'potion':
        const heal = 20 + player.floor * 3;
        newPlayer.hp = Math.min(newPlayer.maxHP, newPlayer.hp + heal);
        showMsg(isGreek ? `🧪 +${heal}HP!` : `🧪 +${heal}HP!`);
        newGrid[ny][nx] = { type: 'floor', revealed: true, visited: true };
        break;
      case 'exit':
        // Floor complete
        newPlayer.gold += 25 * player.floor;
        if (player.floor >= 5 && !creditsAwardedRef.current) {
          creditsAwardedRef.current = true;
          earnCredits(10);
          setTimeout(() => showNotification('🏰', 'DUNGEON EXPLORER!', '+10 Credits ⚡'), 300);
        }
        setGameState('floorClear');
        break;
      default:
        newGrid[ny][nx].visited = true;
    }

    newGrid[ny][nx].revealed = true;
    newGrid[ny][nx].visited = true;
    revealAround(newGrid, nx, ny);
    setGrid(newGrid);
    setPlayer(newPlayer);

    if (newPlayer.hp <= 0) {
      setGameState('gameover');
      if (newPlayer.gold >= 20 && !creditsAwardedRef.current) {
        creditsAwardedRef.current = true;
        earnCredits(3);
        setTimeout(() => showNotification('🏰', 'DUNGEON!', '+3 Credits ⚡'), 300);
      }
    }
  }, [gameState, player, grid, revealAround, showMsg, isGreek, earnCredits, showNotification]);

  const doCombatAttack = useCallback(() => {
    if (!combatMonster || !combatMonster.monsterHP) return;

    // Player attacks
    const dmg = player.attack + Math.floor(Math.random() * 5);
    const newMonsterHP = Math.max(0, combatMonster.monsterHP - dmg);

    if (newMonsterHP <= 0) {
      // Monster defeated
      const goldReward = 5 + player.floor * 3;
      const newGrid = [...grid.map(r => [...r])];
      newGrid[player.y][player.x] = { type: 'floor', revealed: true, visited: true };
      setGrid(newGrid);
      setPlayer(p => ({ ...p, gold: p.gold + goldReward }));
      setCombatMonster(null);
      setGameState('playing');
      showMsg(isGreek ? `⚔️ Νίκη! +${goldReward} χρυσό` : `⚔️ Victory! +${goldReward} gold`);
      return;
    }

    // Monster counter-attacks
    let monsterDmg = combatMonster.monsterDmg || 10;
    let shieldAbsorb = 0;
    if (player.shield > 0) {
      shieldAbsorb = Math.min(player.shield, Math.floor(monsterDmg * 0.5));
      monsterDmg -= shieldAbsorb;
    }

    const newPlayerHP = Math.max(0, player.hp - monsterDmg);
    setCombatMonster({ ...combatMonster, monsterHP: newMonsterHP });
    setPlayer(p => ({ ...p, hp: newPlayerHP, shield: Math.max(0, p.shield - shieldAbsorb) }));
    setCombatLog(
      isGreek
        ? `⚔️ Εσύ: -${dmg}dmg | ${combatMonster.emoji}: -${monsterDmg}HP${shieldAbsorb > 0 ? ` (🛡-${shieldAbsorb})` : ''}`
        : `⚔️ You: -${dmg}dmg | ${combatMonster.emoji}: -${monsterDmg}HP${shieldAbsorb > 0 ? ` (🛡-${shieldAbsorb})` : ''}`
    );

    if (newPlayerHP <= 0) {
      setGameState('gameover');
    }
  }, [combatMonster, player, grid, showMsg, isGreek]);

  const usePotion = useCallback(() => {
    if (player.potions <= 0) return;
    const heal = 30;
    setPlayer(p => ({ ...p, hp: Math.min(p.maxHP, p.hp + heal), potions: p.potions - 1 }));
    showMsg(isGreek ? `🧪 +${heal}HP!` : `🧪 +${heal}HP!`);
  }, [player.potions, showMsg, isGreek]);

  // Keyboard controls
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (gameState !== 'playing') return;
      switch (e.code) {
        case 'ArrowUp': case 'KeyW': e.preventDefault(); movePlayer(0, -1); break;
        case 'ArrowDown': case 'KeyS': e.preventDefault(); movePlayer(0, 1); break;
        case 'ArrowLeft': case 'KeyA': e.preventDefault(); movePlayer(-1, 0); break;
        case 'ArrowRight': case 'KeyD': e.preventDefault(); movePlayer(1, 0); break;
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [gameState, movePlayer]);

  // ─── CELL RENDERING ───────────────────────
  const getCellVisual = (cell: Cell) => {
    if (!cell.revealed) return { bg: 'bg-black/80', content: '', border: 'border-white/[0.02]' };
    switch (cell.type) {
      case 'wall': return { bg: 'bg-slate-800/90', content: '', border: 'border-slate-700/30' };
      case 'floor': return { bg: cell.visited ? 'bg-slate-900/60' : 'bg-slate-900/40', content: '', border: 'border-white/[0.03]' };
      case 'start': return { bg: 'bg-emerald-900/30', content: '🚪', border: 'border-emerald-500/20' };
      case 'exit': return { bg: 'bg-amber-900/30', content: '🏁', border: 'border-amber-500/30' };
      case 'door': return { bg: 'bg-amber-900/20', content: '🚪', border: 'border-amber-500/20' };
      case 'chest': return { bg: 'bg-yellow-900/20', content: '📦', border: 'border-yellow-500/20' };
      case 'key': return { bg: 'bg-cyan-900/20', content: '🔑', border: 'border-cyan-500/20' };
      case 'monster': return { bg: 'bg-red-900/20', content: cell.emoji || '👾', border: 'border-red-500/20' };
      case 'trap': return { bg: cell.visited ? 'bg-slate-900/60' : 'bg-orange-900/10', content: cell.visited ? '' : '⚡', border: 'border-orange-500/10' };
      case 'potion': return { bg: 'bg-emerald-900/20', content: '🧪', border: 'border-emerald-500/20' };
      default: return { bg: 'bg-slate-900/40', content: '', border: 'border-white/[0.03]' };
    }
  };

  return (
    <div className="flex flex-col h-full w-full bg-[#0B0F1A] select-none overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-3 py-1.5 bg-black/70 backdrop-blur-xl border-b border-emerald-500/20 z-20 relative shrink-0">
        <button onClick={onBack} className="flex items-center justify-center w-9 h-9 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-colors">
          <ArrowLeft size={20} />
        </button>
        {gameState !== 'menu' && (
          <div className="flex items-center gap-2 text-xs font-bold">
            <span className="text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">🏰 F{player.floor}</span>
            <span className="text-yellow-400">💰{player.gold}</span>
            <span className="text-cyan-400">🔑{player.keys}</span>
            <span className="text-pink-400">🧪{player.potions}</span>
          </div>
        )}
      </div>

      <div className="flex-1 relative overflow-hidden">
        {/* BG */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050a15] via-[#0B0F1A] to-[#050a15]" />

        {/* ─── MENU ─── */}
        {gameState === 'menu' && (
          <div className="absolute inset-0 flex flex-col items-center justify-center z-20 px-6 animate-in fade-in">
            <div className="text-center space-y-5">
              <div className="text-6xl md:text-8xl">🏰</div>
              <h1 className="text-3xl md:text-5xl font-[1000] uppercase italic text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400">
                DUNGEON
              </h1>
              <h2 className="text-xl md:text-2xl font-[1000] uppercase italic text-white/60">EXPLORER</h2>
              <p className="text-white/40 text-sm max-w-xs mx-auto">
                {isGreek ? 'Εξερεύνησε dungeons, σκότωσε τέρατα, βρες θησαυρούς!' : 'Explore dungeons, slay monsters, find treasure!'}
              </p>
              <button onClick={startGame} className="mt-4 px-8 py-3.5 bg-gradient-to-r from-emerald-500 to-cyan-600 text-white font-[900] uppercase rounded-2xl shadow-[0_0_30px_rgba(16,185,129,0.4)] active:scale-95 transition-all border border-white/10">
                {isGreek ? '⚔️ ΕΙΣΟΔΟΣ' : '⚔️ ENTER DUNGEON'}
              </button>
            </div>
          </div>
        )}

        {/* ─── PLAYING ─── */}
        {(gameState === 'playing' || gameState === 'combat') && (
          <div className="absolute inset-0 flex flex-col items-center z-20 pt-2 px-2">
            {/* HP Bar */}
            <div className="w-full max-w-md mb-2 px-2">
              <div className="flex items-center gap-2">
                <Heart size={14} className="text-red-400 fill-red-400 shrink-0" />
                <div className="flex-1 h-3 bg-black/50 rounded-full border border-white/10 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-300 bg-gradient-to-r from-red-600 to-emerald-500"
                    style={{ width: `${(player.hp / player.maxHP) * 100}%` }}
                  />
                </div>
                <span className="text-white/60 text-[10px] font-bold tabular-nums w-12 text-right">{player.hp}/{player.maxHP}</span>
              </div>
              {player.shield > 0 && (
                <div className="flex items-center gap-1 mt-0.5 justify-end">
                  <Shield size={10} className="text-cyan-400" />
                  <span className="text-cyan-400 text-[10px] font-bold">+{player.shield}</span>
                </div>
              )}
            </div>

            {/* Message */}
            {message && (
              <div className="mb-2 text-center">
                <span className="text-white text-xs font-bold bg-white/10 rounded-full px-3 py-1 border border-white/10 backdrop-blur-md">{message}</span>
              </div>
            )}

            {/* Grid */}
            <div
              className="grid gap-0.5 bg-black/40 rounded-xl p-1 border border-white/[0.06] shadow-[0_0_40px_rgba(0,0,0,0.5)]"
              style={{ gridTemplateColumns: `repeat(${GRID_SIZE}, ${CELL_PX}px)` }}
            >
              {grid.map((row, y) =>
                row.map((cell, x) => {
                  const v = getCellVisual(cell);
                  const isPlayer = x === player.x && y === player.y;
                  return (
                    <div
                      key={`${x}-${y}`}
                      onClick={() => {
                        if (gameState !== 'playing') return;
                        const dx = x - player.x, dy = y - player.y;
                        if (Math.abs(dx) + Math.abs(dy) === 1) movePlayer(dx, dy);
                      }}
                      className={`relative flex items-center justify-center border rounded transition-all cursor-pointer active:scale-90
                        ${v.bg} ${v.border}`}
                      style={{ width: CELL_PX, height: CELL_PX }}
                    >
                      {isPlayer ? (
                        <span className="text-lg drop-shadow-[0_0_8px_rgba(16,185,129,0.8)] z-10">🧙‍♂️</span>
                      ) : (
                        <span className="text-sm">{v.content}</span>
                      )}
                    </div>
                  );
                })
              )}
            </div>

            {/* Combat overlay */}
            {gameState === 'combat' && combatMonster && (
              <div className="mt-3 w-full max-w-sm bg-white/[0.04] backdrop-blur-xl rounded-2xl p-4 border border-red-500/20 space-y-3 animate-in slide-in-from-bottom">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-3xl">{combatMonster.emoji}</span>
                    <div>
                      <p className="text-white font-bold text-sm">{combatMonster.monsterName}</p>
                      <div className="h-2 w-24 bg-black/50 rounded-full overflow-hidden">
                        <div className="h-full bg-red-500 rounded-full" style={{ width: `${((combatMonster.monsterHP || 0) / (MONSTERS.find(m => m.name === combatMonster.monsterName)?.hp || 30)) * 100}%` }} />
                      </div>
                    </div>
                  </div>
                  <span className="text-red-400 text-xs font-bold">{combatMonster.monsterHP}HP</span>
                </div>
                <p className="text-white/50 text-xs text-center">{combatLog}</p>
                <div className="flex gap-2">
                  <button onClick={doCombatAttack} className="flex-1 py-2.5 bg-gradient-to-r from-red-500 to-orange-600 text-white font-[900] text-xs uppercase rounded-xl active:scale-95 transition-all flex items-center justify-center gap-1.5">
                    <Sword size={14} /> {isGreek ? 'ΕΠΙΘΕΣΗ' : 'ATTACK'}
                  </button>
                  {player.potions > 0 && (
                    <button onClick={() => { usePotion(); }} className="py-2.5 px-4 bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 font-bold text-xs rounded-xl active:scale-95 transition-all">
                      🧪 {player.potions}
                    </button>
                  )}
                </div>
              </div>
            )}

            {/* Mobile D-pad */}
            {gameState === 'playing' && (
              <div className="mt-3 grid grid-cols-3 gap-1 w-32">
                <div />
                <button onClick={() => movePlayer(0, -1)} className="w-10 h-10 mx-auto bg-white/10 rounded-lg text-white/60 active:bg-white/20 flex items-center justify-center text-lg font-bold">↑</button>
                <div />
                <button onClick={() => movePlayer(-1, 0)} className="w-10 h-10 mx-auto bg-white/10 rounded-lg text-white/60 active:bg-white/20 flex items-center justify-center text-lg font-bold">←</button>
                <button onClick={() => usePotion()} className={`w-10 h-10 mx-auto rounded-lg flex items-center justify-center text-sm ${player.potions > 0 ? 'bg-emerald-500/20 text-emerald-400 active:bg-emerald-500/30' : 'bg-white/5 text-white/20'}`}>🧪</button>
                <button onClick={() => movePlayer(1, 0)} className="w-10 h-10 mx-auto bg-white/10 rounded-lg text-white/60 active:bg-white/20 flex items-center justify-center text-lg font-bold">→</button>
                <div />
                <button onClick={() => movePlayer(0, 1)} className="w-10 h-10 mx-auto bg-white/10 rounded-lg text-white/60 active:bg-white/20 flex items-center justify-center text-lg font-bold">↓</button>
                <div />
              </div>
            )}
          </div>
        )}

        {/* ─── FLOOR CLEAR ─── */}
        {gameState === 'floorClear' && (
          <div className="absolute inset-0 flex flex-col items-center justify-center z-20 px-6 animate-in zoom-in">
            <div className="bg-white/[0.04] backdrop-blur-xl rounded-[2rem] p-7 border border-emerald-500/20 text-center space-y-4 max-w-sm w-full">
              <div className="text-5xl">🎉</div>
              <h2 className="text-xl font-[1000] text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-cyan-400 uppercase italic">
                {isGreek ? `ΟΡΟΦΟΣ ${player.floor} ΟΛΟΚΛΗΡΩΘΗΚΕ!` : `FLOOR ${player.floor} CLEARED!`}
              </h2>
              <div className="flex items-center justify-center gap-3">
                <span className="text-yellow-400 font-bold">💰 {player.gold}</span>
                <span className="text-red-400 font-bold">❤️ {player.hp}</span>
              </div>
              {player.floor >= 5 ? (
                <div className="space-y-3">
                  <div className="bg-amber-500/10 rounded-xl py-2 border border-amber-500/20 flex items-center justify-center gap-2">
                    <Crown size={16} className="text-amber-400" />
                    <span className="text-amber-300 font-[900]">{isGreek ? 'ΝΙΚΗΤΗΣ!' : 'CHAMPION!'}</span>
                  </div>
                  <button onClick={() => setGameState('menu')} className="w-full py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-[900] text-sm uppercase rounded-xl active:scale-95 transition-all border border-white/10">
                    {isGreek ? '🏆 ΜΕΝΟΥ' : '🏆 MENU'}
                  </button>
                </div>
              ) : (
                <button onClick={nextFloor} className="w-full py-3 bg-gradient-to-r from-emerald-500 to-cyan-600 text-white font-[900] text-sm uppercase rounded-xl active:scale-95 transition-all shadow-[0_0_20px_rgba(16,185,129,0.4)] border border-white/10">
                  {isGreek ? `⬇️ ΟΡΟΦΟΣ ${player.floor + 1}` : `⬇️ FLOOR ${player.floor + 1}`}
                </button>
              )}
            </div>
          </div>
        )}

        {/* ─── GAME OVER ─── */}
        {gameState === 'gameover' && (
          <div className="absolute inset-0 flex flex-col items-center justify-center z-20 px-6 animate-in fade-in">
            <div className="bg-white/[0.04] backdrop-blur-xl rounded-[2rem] p-7 border border-red-500/20 text-center space-y-4 max-w-sm w-full">
              <div className="text-5xl">💀</div>
              <h2 className="text-2xl font-[1000] text-white uppercase italic">GAME OVER</h2>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-white/5 rounded-xl p-2.5 border border-white/5">
                  <p className="text-white/40">{isGreek ? 'Όροφος' : 'Floor'}</p>
                  <p className="text-white font-[900] text-lg">{player.floor}</p>
                </div>
                <div className="bg-white/5 rounded-xl p-2.5 border border-white/5">
                  <p className="text-white/40">{isGreek ? 'Χρυσός' : 'Gold'}</p>
                  <p className="text-yellow-400 font-[900] text-lg">{player.gold}</p>
                </div>
              </div>
              <button onClick={startGame} className="w-full py-3 bg-gradient-to-r from-emerald-500 to-cyan-600 text-white font-[900] text-sm uppercase rounded-xl flex items-center justify-center gap-2 active:scale-95 transition-all border border-white/10">
                <RotateCcw size={16} /> {isGreek ? 'ΞΑΝΑΠΑΙΞΕ' : 'TRY AGAIN'}
              </button>
              <button onClick={() => setGameState('menu')} className="w-full py-2.5 bg-white/5 text-white/60 font-bold text-sm rounded-xl hover:bg-white/10 transition-colors border border-white/10">
                {isGreek ? 'ΜΕΝΟΥ' : 'MENU'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
