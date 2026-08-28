
import React, { useRef, useEffect, useState, useCallback } from 'react';
import GameBackButton from './GameBackButton';
import { RotateCcw, Play, Trophy, Zap, Shield, Swords, Heart, Clock, ChevronRight } from 'lucide-react';
import { useEconomy } from '../../context/EconomyContext';
import { grantGameReward } from './gameRewards';
interface TowerDefenseProps {
  lang: 'el' | 'en';
  onBack: () => void;
}

// ─── TYPES ──────────────────────────────────────
interface Tower {
  id: number;
  row: number;
  col: number;
  type: TowerType;
  level: number;
  cooldown: number;
  angle: number;
  kills: number;
}

interface Enemy {
  id: number;
  x: number;
  y: number;
  hp: number;
  maxHp: number;
  speed: number;
  pathIndex: number;
  type: EnemyType;
  reward: number;
  slow: number; // slow timer
  frozen: boolean;
}

interface Bullet {
  x: number;
  y: number;
  tx: number;
  ty: number;
  speed: number;
  damage: number;
  type: TowerType;
  enemyId: number;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  color: string;
  size: number;
}

type TowerType = 'archer' | 'mage' | 'cannon' | 'ice';
type EnemyType = 'basic' | 'fast' | 'tank' | 'boss';

// ─── CONSTANTS ──────────────────────────────────
const GRID_COLS = 10;
const GRID_ROWS = 7;
const CELL_SIZE = 50;

// Path waypoints (grid positions)
const PATH: [number, number][] = [
  [-1, 3], [0, 3], [1, 3], [2, 3], [3, 3], [3, 2], [3, 1], [4, 1], [5, 1], [6, 1], [6, 2], [6, 3], [6, 4], [6, 5], [7, 5], [8, 5], [9, 5], [9, 4], [9, 3], [10, 3]
];

const TOWER_DATA: Record<TowerType, { name: { el: string; en: string }; cost: number; damage: number; range: number; fireRate: number; color: string; emoji: string }> = {
  archer: { name: { el: 'Τοξότης', en: 'Archer' }, cost: 10, damage: 15, range: 3, fireRate: 25, color: '#22dd44', emoji: '🏹' },
  mage:   { name: { el: 'Μάγος', en: 'Mage' },     cost: 20, damage: 30, range: 2.5, fireRate: 45, color: '#8844ff', emoji: '🔮' },
  cannon: { name: { el: 'Κανόνι', en: 'Cannon' },   cost: 30, damage: 60, range: 2, fireRate: 70, color: '#ff6600', emoji: '💣' },
  ice:    { name: { el: 'Πάγος', en: 'Ice' },       cost: 15, damage: 8, range: 2.5, fireRate: 30, color: '#00ccff', emoji: '❄️' },
};

const WAVE_DATA: { enemies: { type: EnemyType; count: number; interval: number }[] }[] = [
  { enemies: [{ type: 'basic', count: 6, interval: 40 }] },
  { enemies: [{ type: 'basic', count: 8, interval: 35 }, { type: 'fast', count: 3, interval: 30 }] },
  { enemies: [{ type: 'basic', count: 5, interval: 30 }, { type: 'fast', count: 5, interval: 25 }] },
  { enemies: [{ type: 'tank', count: 3, interval: 50 }, { type: 'basic', count: 8, interval: 30 }] },
  { enemies: [{ type: 'fast', count: 10, interval: 20 }, { type: 'tank', count: 2, interval: 50 }] },
  { enemies: [{ type: 'basic', count: 10, interval: 25 }, { type: 'tank', count: 4, interval: 40 }] },
  { enemies: [{ type: 'fast', count: 8, interval: 20 }, { type: 'tank', count: 5, interval: 35 }] },
  { enemies: [{ type: 'boss', count: 1, interval: 60 }, { type: 'fast', count: 6, interval: 25 }] },
  { enemies: [{ type: 'tank', count: 6, interval: 30 }, { type: 'fast', count: 10, interval: 20 }] },
  { enemies: [{ type: 'boss', count: 2, interval: 80 }, { type: 'tank', count: 5, interval: 30 }, { type: 'fast', count: 10, interval: 15 }] },
];

const ENEMY_DATA: Record<EnemyType, { hp: number; speed: number; reward: number; color: string; size: number }> = {
  basic: { hp: 60, speed: 1.2, reward: 5, color: '#ff4444', size: 12 },
  fast:  { hp: 30, speed: 2.5, reward: 7, color: '#ffaa00', size: 9 },
  tank:  { hp: 200, speed: 0.7, reward: 15, color: '#aa2222', size: 16 },
  boss:  { hp: 600, speed: 0.5, reward: 50, color: '#ff0066', size: 22 },
};

export default function TowerDefense({ lang, onBack }: TowerDefenseProps) {
  const { earnXp, showNotification } = useEconomy();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rewardedRef = useRef(false);
  const gs = useRef({
    status: 'idle' as 'idle' | 'playing' | 'won' | 'lost' | 'building',
    gold: 50,
    lives: 20,
    wave: 0,
    waveActive: false,
    waveSpawnQueue: [] as { type: EnemyType; spawnAt: number }[],
    frameCount: 0,
    frameAcc: 0,
    lastTs: 0,
    towers: [] as Tower[],
    enemies: [] as Enemy[],
    bullets: [] as Bullet[],
    particles: [] as Particle[],
    selectedTower: 'archer' as TowerType,
    hoveredCell: null as { row: number; col: number } | null,
    nextId: 1,
    grid: Array(GRID_ROWS).fill(null).map(() => Array(GRID_COLS).fill(0)) as number[][], // 0=empty, 1=path, 2=tower
    totalKills: 0,
    // Pre-calculate path pixel positions
    pathPixels: PATH.map(([col, row]) => ({ x: col * CELL_SIZE + CELL_SIZE / 2, y: row * CELL_SIZE + CELL_SIZE / 2 })),
  });

  const animRef = useRef<number>(0);
  const [ui, setUi] = useState({
    status: 'idle' as string,
    gold: 50,
    lives: 20,
    wave: 0,
    selectedTower: 'archer' as TowerType,
    waveActive: false,
    totalKills: 0,
  });

  // Initialize grid path
  useEffect(() => {
    const g = gs.current;
    PATH.forEach(([col, row]) => {
      if (row >= 0 && row < GRID_ROWS && col >= 0 && col < GRID_COLS) {
        g.grid[row][col] = 1;
      }
    });
  }, []);

  // ─── HELPERS ──────────────────────────────────
  const dist = (x1: number, y1: number, x2: number, y2: number) => Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

  const spawnParticles = useCallback((x: number, y: number, color: string, count: number) => {
    const g = gs.current;
    for (let i = 0; i < count; i++) {
      g.particles.push({
        x, y,
        vx: (Math.random() - 0.5) * 6,
        vy: (Math.random() - 0.5) * 6,
        life: 0.8 + Math.random() * 0.4,
        color,
        size: 2 + Math.random() * 3,
      });
    }
  }, []);

  const startWave = useCallback(() => {
    const g = gs.current;
    if (g.wave >= WAVE_DATA.length) return;

    const waveData = WAVE_DATA[g.wave];
    g.waveSpawnQueue = [];
    let spawnFrame = 30; // initial delay

    waveData.enemies.forEach(group => {
      for (let i = 0; i < group.count; i++) {
        g.waveSpawnQueue.push({ type: group.type, spawnAt: spawnFrame });
        spawnFrame += group.interval;
      }
    });

    g.waveActive = true;
    g.status = 'playing';
    setUi(prev => ({ ...prev, status: 'playing', wave: g.wave, waveActive: true }));
  }, []);

  // ─── GAME LOOP ─────────────────────────────────
  const loop = useCallback((ts: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const g = gs.current;
    const W = canvas.width;
    const H = canvas.height;

    // Delta time normalised to 60fps (dt=1 at 60Hz); clamped so tab-switch gaps don't teleport physics
    const dt = g.lastTs ? Math.min((ts - g.lastTs) / (1000 / 60), 2) : 1;
    g.lastTs = ts;

    g.frameCount++;

    if (g.status === 'playing') {
      // ─── SPAWN ENEMIES ─────
      g.waveSpawnQueue = g.waveSpawnQueue.filter(spawn => {
        if (g.frameCount >= spawn.spawnAt + (g.wave * 10)) {
          // Actually use frame relative to wave start
          return true; // keep for now, check below
        }
        return true;
      });

      // spawnAt counts 60fps frames, so consume whole frames from a dt accumulator to keep wave pacing
      g.frameAcc += dt;
      while (g.frameAcc >= 1) {
        g.frameAcc -= 1;

        // Simple spawn check
        const toSpawn = g.waveSpawnQueue.filter(s => s.spawnAt <= 0);
        g.waveSpawnQueue = g.waveSpawnQueue.map(s => ({ ...s, spawnAt: s.spawnAt - 1 }));
        g.waveSpawnQueue = g.waveSpawnQueue.filter(s => s.spawnAt > -1);

        // Spawn from queue
        const readyToSpawn = g.waveSpawnQueue.filter(s => s.spawnAt <= 0);
        readyToSpawn.forEach(s => {
          const eData = ENEMY_DATA[s.type];
          const scaleFactor = 1 + g.wave * 0.15; // enemies get stronger each wave
          g.enemies.push({
            id: g.nextId++,
            x: g.pathPixels[0].x,
            y: g.pathPixels[0].y,
            hp: Math.floor(eData.hp * scaleFactor),
            maxHp: Math.floor(eData.hp * scaleFactor),
            speed: eData.speed,
            pathIndex: 0,
            type: s.type,
            reward: eData.reward,
            slow: 0,
            frozen: false,
          });
        });
        g.waveSpawnQueue = g.waveSpawnQueue.filter(s => s.spawnAt > 0);
      }

      // ─── MOVE ENEMIES ─────
      g.enemies.forEach(enemy => {
        if (enemy.pathIndex >= g.pathPixels.length - 1) {
          // Reached the end
          g.lives -= enemy.type === 'boss' ? 5 : 1;
          spawnParticles(enemy.x, enemy.y, '#ff0000', 8);
          enemy.hp = 0; // mark for removal
          if (g.lives <= 0) {
            g.status = 'lost';
            if (!rewardedRef.current) {
              rewardedRef.current = true;
              grantGameReward('tower', g.wave >= 5 ? 1 : 0, earnXp, showNotification, lang);
            }
            setUi(prev => ({ ...prev, status: 'lost', lives: 0 }));
          }
          return;
        }

        const target = g.pathPixels[enemy.pathIndex + 1];
        const dx = target.x - enemy.x;
        const dy = target.y - enemy.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        const speed = enemy.slow > 0 ? enemy.speed * 0.4 : enemy.speed;

        if (d < speed * 2) {
          enemy.pathIndex++;
        } else {
          enemy.x += (dx / d) * speed * dt;
          enemy.y += (dy / d) * speed * dt;
        }

        if (enemy.slow > 0) enemy.slow -= dt;
      });

      // Remove dead enemies
      g.enemies = g.enemies.filter(e => e.hp > 0);

      // ─── TOWERS ATTACK ─────
      g.towers.forEach(tower => {
        tower.cooldown = Math.max(0, tower.cooldown - dt);
        if (tower.cooldown > 0) return;

        const tData = TOWER_DATA[tower.type];
        const tx = tower.col * CELL_SIZE + CELL_SIZE / 2;
        const ty = tower.row * CELL_SIZE + CELL_SIZE / 2;
        const range = tData.range * CELL_SIZE;

        // Find closest enemy in range
        let closest: Enemy | null = null;
        let closestDist = Infinity;
        // for..of (not forEach) so TypeScript sees the assignment and narrows closest below.
        for (const enemy of g.enemies) {
          const d = dist(tx, ty, enemy.x, enemy.y);
          if (d < range && d < closestDist) {
            closest = enemy;
            closestDist = d;
          }
        }

        if (closest) {
          tower.cooldown = Math.floor(tData.fireRate / (1 + tower.level * 0.3));
          tower.angle = Math.atan2(closest.y - ty, closest.x - tx);

          const dmg = Math.floor(tData.damage * (1 + tower.level * 0.5));
          g.bullets.push({
            x: tx, y: ty,
            tx: closest.x, ty: closest.y,
            speed: tower.type === 'cannon' ? 4 : 8,
            damage: dmg,
            type: tower.type,
            enemyId: closest.id,
          });
        }
      });

      // ─── MOVE BULLETS ─────
      g.bullets.forEach(bullet => {
        const dx = bullet.tx - bullet.x;
        const dy = bullet.ty - bullet.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < bullet.speed * 2) {
          // Hit
          const enemy = g.enemies.find(e => e.id === bullet.enemyId);
          if (enemy && enemy.hp > 0) {
            enemy.hp -= bullet.damage;

            if (bullet.type === 'ice') {
              enemy.slow = 60; // slow for 1 second
              spawnParticles(enemy.x, enemy.y, '#00ccff', 4);
            }

            if (bullet.type === 'cannon') {
              // Splash damage
              g.enemies.forEach(e => {
                if (e.id !== enemy.id && dist(e.x, e.y, enemy.x, enemy.y) < 40) {
                  e.hp -= Math.floor(bullet.damage * 0.4);
                }
              });
              spawnParticles(enemy.x, enemy.y, '#ff6600', 10);
            } else {
              spawnParticles(enemy.x, enemy.y, TOWER_DATA[bullet.type].color, 3);
            }

            if (enemy.hp <= 0) {
              g.gold += enemy.reward;
              g.totalKills++;
              spawnParticles(enemy.x, enemy.y, '#ffd700', 8);
            }
          }
          bullet.damage = 0; // mark for removal
        } else {
          bullet.x += (dx / d) * bullet.speed * dt;
          bullet.y += (dy / d) * bullet.speed * dt;
        }
      });
      g.bullets = g.bullets.filter(b => b.damage > 0);

      // ─── PARTICLES ─────
      g.particles.forEach(p => { p.x += p.vx * dt; p.y += p.vy * dt; p.life -= 0.03 * dt; });
      g.particles = g.particles.filter(p => p.life > 0);

      // ─── WAVE COMPLETE CHECK ─────
      if (g.waveSpawnQueue.length === 0 && g.enemies.length === 0 && g.waveActive) {
        g.waveActive = false;
        g.wave++;
        g.gold += 10 + g.wave * 5; // bonus gold

        if (g.wave >= WAVE_DATA.length) {
          g.status = 'won';
          if (!rewardedRef.current) {
            rewardedRef.current = true;
            grantGameReward('tower', 3, earnXp, showNotification, lang);
          }
          setUi(prev => ({ ...prev, status: 'won', wave: g.wave, gold: g.gold, totalKills: g.totalKills }));
        } else {
          g.status = 'building';
          setUi(prev => ({ ...prev, status: 'building', wave: g.wave, gold: g.gold, waveActive: false, totalKills: g.totalKills }));
        }
      }

      // Update UI
      if (g.frameCount % 6 === 0) {
        setUi(prev => ({ ...prev, gold: g.gold, lives: g.lives, totalKills: g.totalKills }));
      }
    }

    // ─── RENDER ──────────────────────────────────
    ctx.clearRect(0, 0, W, H);

    // Background
    ctx.fillStyle = '#0B0F1A';
    ctx.fillRect(0, 0, W, H);

    // Grid
    for (let r = 0; r < GRID_ROWS; r++) {
      for (let c = 0; c < GRID_COLS; c++) {
        const x = c * CELL_SIZE;
        const y = r * CELL_SIZE;
        const isPath = g.grid[r][c] === 1;

        if (isPath) {
          ctx.fillStyle = '#1a2040';
          ctx.fillRect(x, y, CELL_SIZE, CELL_SIZE);
          // Path border
          ctx.strokeStyle = '#2a3060';
          ctx.lineWidth = 1;
          ctx.strokeRect(x, y, CELL_SIZE, CELL_SIZE);
        } else {
          ctx.fillStyle = '#0d1520';
          ctx.fillRect(x, y, CELL_SIZE, CELL_SIZE);
          ctx.strokeStyle = '#151e30';
          ctx.lineWidth = 1;
          ctx.strokeRect(x, y, CELL_SIZE, CELL_SIZE);
        }
      }
    }

    // Path arrows
    ctx.fillStyle = '#2a3060';
    for (let i = 0; i < g.pathPixels.length - 1; i++) {
      const curr = g.pathPixels[i];
      const next = g.pathPixels[i + 1];
      const mx = (curr.x + next.x) / 2;
      const my = (curr.y + next.y) / 2;
      const angle = Math.atan2(next.y - curr.y, next.x - curr.x);
      ctx.save();
      ctx.translate(mx, my);
      ctx.rotate(angle);
      ctx.beginPath();
      ctx.moveTo(6, 0);
      ctx.lineTo(-4, -4);
      ctx.lineTo(-4, 4);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }

    // Hover cell highlight
    if (g.hoveredCell && (g.status === 'building' || g.status === 'idle')) {
      const { row, col } = g.hoveredCell;
      if (row >= 0 && row < GRID_ROWS && col >= 0 && col < GRID_COLS && g.grid[row][col] === 0) {
        const cost = TOWER_DATA[g.selectedTower].cost;
        const canAfford = g.gold >= cost;
        ctx.fillStyle = canAfford ? '#22dd4430' : '#ff444430';
        ctx.fillRect(col * CELL_SIZE, row * CELL_SIZE, CELL_SIZE, CELL_SIZE);
        ctx.strokeStyle = canAfford ? '#22dd44' : '#ff4444';
        ctx.lineWidth = 2;
        ctx.strokeRect(col * CELL_SIZE, row * CELL_SIZE, CELL_SIZE, CELL_SIZE);

        // Range preview
        const tData = TOWER_DATA[g.selectedTower];
        ctx.beginPath();
        ctx.arc(col * CELL_SIZE + CELL_SIZE / 2, row * CELL_SIZE + CELL_SIZE / 2, tData.range * CELL_SIZE, 0, Math.PI * 2);
        ctx.strokeStyle = tData.color + '40';
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }

    // ─── TOWERS ─────────────
    g.towers.forEach(tower => {
      const x = tower.col * CELL_SIZE + CELL_SIZE / 2;
      const y = tower.row * CELL_SIZE + CELL_SIZE / 2;
      const tData = TOWER_DATA[tower.type];

      // Base
      ctx.fillStyle = '#1a2535';
      ctx.strokeStyle = tData.color;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(x, y, 18, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // Turret direction
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(tower.angle);
      ctx.fillStyle = tData.color;
      ctx.fillRect(0, -3, 18, 6);
      ctx.restore();

      // Level indicator
      if (tower.level > 0) {
        ctx.fillStyle = '#ffd700';
        ctx.font = '8px monospace';
        ctx.textAlign = 'center';
        ctx.fillText('★'.repeat(Math.min(tower.level, 3)), x, y + 28);
      }

      // Emoji
      ctx.font = '16px serif';
      ctx.textAlign = 'center';
      ctx.fillText(tData.emoji, x, y + 6);
    });

    // ─── ENEMIES ─────────────
    g.enemies.forEach(enemy => {
      const eData = ENEMY_DATA[enemy.type];

      // Shadow
      ctx.fillStyle = '#00000040';
      ctx.beginPath();
      ctx.ellipse(enemy.x, enemy.y + eData.size, eData.size * 0.8, eData.size * 0.3, 0, 0, Math.PI * 2);
      ctx.fill();

      // Body
      ctx.fillStyle = enemy.slow > 0 ? '#4488cc' : eData.color;
      ctx.shadowColor = eData.color;
      ctx.shadowBlur = enemy.type === 'boss' ? 15 : 5;
      ctx.beginPath();
      ctx.arc(enemy.x, enemy.y, eData.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;

      // Inner circle
      ctx.fillStyle = '#ffffff20';
      ctx.beginPath();
      ctx.arc(enemy.x - eData.size * 0.2, enemy.y - eData.size * 0.2, eData.size * 0.3, 0, Math.PI * 2);
      ctx.fill();

      // HP bar
      const hpRatio = enemy.hp / enemy.maxHp;
      const barW = eData.size * 2;
      ctx.fillStyle = '#333';
      ctx.fillRect(enemy.x - barW / 2, enemy.y - eData.size - 8, barW, 4);
      ctx.fillStyle = hpRatio > 0.5 ? '#22dd44' : hpRatio > 0.25 ? '#ffaa00' : '#ff2222';
      ctx.fillRect(enemy.x - barW / 2, enemy.y - eData.size - 8, barW * hpRatio, 4);
    });

    // ─── BULLETS ─────────────
    g.bullets.forEach(bullet => {
      const tData = TOWER_DATA[bullet.type];
      ctx.fillStyle = tData.color;
      ctx.shadowColor = tData.color;
      ctx.shadowBlur = 8;
      ctx.beginPath();
      const size = bullet.type === 'cannon' ? 5 : 3;
      ctx.arc(bullet.x, bullet.y, size, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;
    });

    // ─── PARTICLES ─────────
    g.particles.forEach(p => {
      ctx.globalAlpha = p.life;
      ctx.fillStyle = p.color;
      ctx.fillRect(p.x - p.size / 2, p.y - p.size / 2, p.size, p.size);
    });
    ctx.globalAlpha = 1;

    // ─── START/END MARKERS ─────
    // Start
    ctx.fillStyle = '#22dd44';
    ctx.font = '16px serif';
    ctx.textAlign = 'center';
    ctx.fillText('🚪', g.pathPixels[0].x, g.pathPixels[0].y + 6);
    // End
    ctx.fillText('🏠', g.pathPixels[g.pathPixels.length - 1].x, g.pathPixels[g.pathPixels.length - 1].y + 6);

    animRef.current = requestAnimationFrame(loop);
  }, [spawnParticles, earnXp, showNotification, lang]);

  // ─── CLICK TO PLACE TOWER ──────────────────────
  const handleCanvasClick = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    const g = gs.current;
    if (g.status !== 'building' && g.status !== 'idle') return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    // Canvas is CSS-scaled (maxWidth 100%), so map client px back to canvas px
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const mx = (e.clientX - rect.left) * scaleX;
    const my = (e.clientY - rect.top) * scaleY;
    const col = Math.floor(mx / CELL_SIZE);
    const row = Math.floor(my / CELL_SIZE);

    if (row < 0 || row >= GRID_ROWS || col < 0 || col >= GRID_COLS) return;
    if (g.grid[row][col] !== 0) return; // path or tower already

    const tData = TOWER_DATA[g.selectedTower];
    if (g.gold < tData.cost) return;

    g.gold -= tData.cost;
    g.grid[row][col] = 2;
    g.towers.push({
      id: g.nextId++,
      row, col,
      type: g.selectedTower,
      level: 0,
      cooldown: 0,
      angle: 0,
      kills: 0,
    });

    spawnParticles(col * CELL_SIZE + CELL_SIZE / 2, row * CELL_SIZE + CELL_SIZE / 2, tData.color, 8);
    setUi(prev => ({ ...prev, gold: g.gold }));
  }, [spawnParticles]);

  const handleCanvasMove = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const col = Math.floor(((e.clientX - rect.left) * scaleX) / CELL_SIZE);
    const row = Math.floor(((e.clientY - rect.top) * scaleY) / CELL_SIZE);
    gs.current.hoveredCell = { row, col };
  }, []);

  // ─── INIT ──────────────────────────────────────
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = GRID_COLS * CELL_SIZE;
    canvas.height = GRID_ROWS * CELL_SIZE;
    animRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animRef.current);
  }, [loop]);

  const startPlacing = useCallback(() => {
    rewardedRef.current = false;
    gs.current.status = 'building';
    gs.current.wave = 0;
    gs.current.gold = 50;
    gs.current.lives = 20;
    gs.current.towers = [];
    gs.current.enemies = [];
    gs.current.bullets = [];
    gs.current.particles = [];
    gs.current.totalKills = 0;
    gs.current.waveSpawnQueue = [];
    gs.current.frameAcc = 0;
    gs.current.waveActive = false;
    gs.current.grid = Array(GRID_ROWS).fill(null).map(() => Array(GRID_COLS).fill(0));
    PATH.forEach(([col, row]) => {
      if (row >= 0 && row < GRID_ROWS && col >= 0 && col < GRID_COLS) {
        gs.current.grid[row][col] = 1;
      }
    });
    setUi({ status: 'building', gold: 50, lives: 20, wave: 0, selectedTower: 'archer', waveActive: false, totalKills: 0 });
  }, []);

  return (
    <div className="flex flex-col h-full w-full bg-[#0B0F1A] select-none">
      {/* HEADER */}
      <div className="flex items-center justify-between px-4 py-2 bg-black/60 backdrop-blur-md border-b border-white/10 z-20 relative">
        <GameBackButton onClick={onBack} lang={lang} />
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-1">
            <Heart size={14} className="text-red-500 fill-red-500" />
            <span className="text-white font-[900]">{ui.lives}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-yellow-400">🪙</span>
            <span className="text-white font-[900]">{ui.gold}</span>
          </div>
          <div className="flex items-center gap-1">
            <Swords size={14} className="text-red-400" />
            <span className="text-white font-[900]">{ui.totalKills}</span>
          </div>
          <div className="text-white/40 font-bold text-xs">
            WAVE {ui.wave + 1}/{WAVE_DATA.length}
          </div>
        </div>
      </div>

      {/* CANVAS */}
      <div className="flex-1 flex flex-col items-center justify-center overflow-auto bg-[#0B0F1A] p-2">
        <canvas
          ref={canvasRef}
          onClick={handleCanvasClick}
          onMouseMove={handleCanvasMove}
          className="border border-white/10 rounded-lg cursor-crosshair"
          style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
      </div>

      {/* BOTTOM CONTROLS */}
      {(ui.status === 'building' || ui.status === 'playing') && (
        <div className="bg-black/80 backdrop-blur-md border-t border-white/10 p-3">
          <div className="flex items-center gap-2 justify-center flex-wrap">
            {/* Tower selection */}
            {(Object.keys(TOWER_DATA) as TowerType[]).map(type => {
              const tData = TOWER_DATA[type];
              const selected = ui.selectedTower === type;
              const canAfford = ui.gold >= tData.cost;
              return (
                <button
                  key={type}
                  onClick={() => {
                    gs.current.selectedTower = type;
                    setUi(prev => ({ ...prev, selectedTower: type }));
                  }}
                  className={`flex flex-col items-center gap-0.5 px-3 py-2 rounded-xl border-2 transition-all text-xs
                    ${selected ? 'border-white/60 bg-white/10 scale-105' : 'border-white/10 bg-white/5'}
                    ${!canAfford ? 'opacity-40' : 'hover:bg-white/10'}
                  `}
                >
                  <span className="text-lg">{tData.emoji}</span>
                  <span className="font-[900] text-white/80 text-[10px]">{tData.name[lang]}</span>
                  <span className="text-yellow-400 font-bold text-[10px]">🪙{tData.cost}</span>
                </button>
              );
            })}

            {/* Start Wave button */}
            {ui.status === 'building' && (
              <button
                onClick={startWave}
                className="ml-2 flex items-center gap-1.5 px-5 py-3 bg-emerald-500 hover:bg-emerald-400 text-black font-[900] text-xs uppercase rounded-xl transition-colors"
              >
                <Swords size={14} />
                {lang === 'el' ? `WAVE ${ui.wave + 1}` : `WAVE ${ui.wave + 1}`}
                <ChevronRight size={14} />
              </button>
            )}
          </div>
        </div>
      )}

      {/* IDLE SCREEN */}
      {ui.status === 'idle' && (
        <div className="absolute inset-0 flex items-center justify-center z-20 bg-black/60 backdrop-blur-sm">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-[1000] uppercase italic tracking-tighter text-white">
              TOWER <span className="text-emerald-400">DEFENSE</span>
            </h1>
            <p className="text-white/50 text-sm font-bold tracking-widest">
              {lang === 'el' ? 'Τοποθέτησε πύργους, σταμάτα τους εχθρούς!' : 'Place towers, stop the enemies!'}
            </p>
            <button onClick={startPlacing} className="mx-auto flex items-center gap-2 px-8 py-3 bg-emerald-500 hover:bg-emerald-400 text-black font-[900] text-sm uppercase rounded-xl transition-colors">
              <Play size={18} fill="currentColor" />
              {lang === 'el' ? 'ΞΕΚΙΝΑ' : 'START'}
            </button>
          </div>
        </div>
      )}

      {/* WON */}
      {ui.status === 'won' && (
        <div className="absolute inset-0 flex items-center justify-center z-20 bg-black/60 backdrop-blur-md animate-in fade-in">
          <div className="text-center space-y-4 bg-white/5 rounded-3xl p-8 border border-white/10 max-w-sm mx-4">
            <div className="text-5xl">🏆</div>
            <h2 className="text-2xl font-[1000] text-white uppercase italic">{lang === 'el' ? 'ΝΙΚΗ!' : 'VICTORY!'}</h2>
            <div className="space-y-2 text-white/60">
              <div className="flex justify-between"><span>Kills</span><span className="text-white font-[900]">{ui.totalKills}</span></div>
              <div className="flex justify-between"><span>Lives</span><span className="text-white font-[900]">{ui.lives}</span></div>
              <div className="flex items-center justify-center gap-1 text-emerald-400 font-bold mt-2"><Zap size={14} /> +1 Credit!</div>
            </div>
            <button onClick={startPlacing} className="w-full py-3 bg-emerald-500 hover:bg-emerald-400 text-black font-[900] text-sm uppercase rounded-xl flex items-center justify-center gap-2">
              <RotateCcw size={16} /> {lang === 'el' ? 'ΞΑΝΑΠΑΙΞΕ' : 'PLAY AGAIN'}
            </button>
          </div>
        </div>
      )}

      {/* LOST */}
      {ui.status === 'lost' && (
        <div className="absolute inset-0 flex items-center justify-center z-20 bg-black/60 backdrop-blur-md animate-in fade-in">
          <div className="text-center space-y-4 bg-white/5 rounded-3xl p-8 border border-white/10 max-w-sm mx-4">
            <div className="text-5xl">💀</div>
            <h2 className="text-2xl font-[1000] text-white uppercase italic">GAME OVER</h2>
            <div className="space-y-2 text-white/60">
              <div className="flex justify-between"><span>Wave</span><span className="text-white font-[900]">{ui.wave}/{WAVE_DATA.length}</span></div>
              <div className="flex justify-between"><span>Kills</span><span className="text-white font-[900]">{ui.totalKills}</span></div>
            </div>
            <button onClick={startPlacing} className="w-full py-3 bg-red-500 hover:bg-red-400 text-white font-[900] text-sm uppercase rounded-xl flex items-center justify-center gap-2">
              <RotateCcw size={16} /> {lang === 'el' ? 'ΞΑΝΑΠΑΙΞΕ' : 'RETRY'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
