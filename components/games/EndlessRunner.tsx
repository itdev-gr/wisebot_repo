
import React, { useRef, useEffect, useState, useCallback } from 'react';
import { ArrowLeft, RotateCcw, Play, Trophy, Zap, Heart, Crown } from 'lucide-react';
import { useEconomy } from '../../context/EconomyContext';
import { grantGameReward } from './gameRewards';
interface EndlessRunnerProps {
  lang: 'el' | 'en';
  onBack: () => void;
}

// ─── CONSTANTS ──────────────────────────────────
const LANES = 3;
const LANE_WIDTH = 80;
const PLAYER_SIZE = 50;
const GAME_SPEED_BASE = 4;
const SPEED_INC = 0.001;
const JUMP_DURATION = 30;
const SLIDE_DURATION = 20;
const OBSTACLE_INTERVAL_BASE = 80;
const INVINCIBILITY_FRAMES = 60;

type Lane = 0 | 1 | 2;
type PlayerAction = 'run' | 'jump' | 'slide';

interface RunnerObstacle {
  lane: Lane;
  z: number;
  type: 'barrier' | 'low' | 'bird';
  height: number;
}

interface Coin {
  lane: Lane;
  z: number;
  y: number;
  collected: boolean;
}

interface PowerUp {
  lane: Lane;
  z: number;
  type: 'magnet' | 'shield' | 'x2';
  collected: boolean;
}

interface Building {
  x: number;
  w: number;
  h: number;
  side: 'left' | 'right';
  color: string;
  windows: boolean;
  neonColor: string;
}

interface BGStar {
  x: number;
  y: number;
  size: number;
  twinkleSpeed: number;
  brightness: number;
}

export default function EndlessRunner({ lang, onBack }: EndlessRunnerProps) {
  const { earnCredits, showNotification } = useEconomy();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gs = useRef({
    status: 'idle' as 'idle' | 'playing' | 'dead',
    lane: 1 as Lane,
    targetLane: 1 as Lane,
    laneX: 0,
    action: 'run' as PlayerAction,
    actionTimer: 0,
    speed: GAME_SPEED_BASE,
    distance: 0,
    score: 0,
    coins: 0,
    lives: 3,
    obstacles: [] as RunnerObstacle[],
    coinItems: [] as Coin[],
    powerUps: [] as PowerUp[],
    nextObstacle: 50,
    frameCount: 0,
    groundTiles: 0,
    invincible: 0,
    highScore: parseInt(localStorage.getItem('wb_runner_hi') || '0'),
    heroImgs: [] as HTMLImageElement[],
    selectedHero: 0,
    particles: [] as { x: number; y: number; vx: number; vy: number; life: number; color: string; size: number; type?: string }[],
    magnetTimer: 0,
    shieldTimer: 0,
    x2Timer: 0,
    shakeTimer: 0,
    touchStartX: 0,
    touchStartY: 0,
    // Premium visuals
    buildings: [] as Building[],
    stars: [] as BGStar[],
    trail: [] as { x: number; y: number; alpha: number }[],
    speedLines: [] as { x: number; y: number; len: number; speed: number; alpha: number }[],
    comboCount: 0,
    comboTimer: 0,
    flashTimer: 0,
    flashColor: '',
    milestoneFlash: 0,
    lastMilestone: 0,
  });

  const animRef = useRef<number>(0);
  const [ui, setUi] = useState({ status: 'idle' as string, score: 0, coins: 0, lives: 3, highScore: gs.current.highScore, newHighScore: false });

  // Load hero images
  useEffect(() => {
    const heroes = ['/images/crocus.jpg', '/images/link.jpg', '/images/sparken.jpg', '/images/pencilo.jpg', '/images/wisebot.jpg'];
    heroes.forEach(src => {
      const img = new Image();
      img.src = src;
      img.onload = () => gs.current.heroImgs.push(img);
    });
  }, []);

  // Generate city buildings
  const generateBuildings = useCallback((W: number, H: number) => {
    const g = gs.current;
    g.buildings = [];
    const neonColors = ['#ff00ff', '#00ffff', '#ff3366', '#66ff33', '#ffaa00', '#3366ff', '#ff6600', '#00ff88'];
    for (let i = 0; i < 24; i++) {
      const side = i < 12 ? 'left' : 'right';
      g.buildings.push({
        x: side === 'left' ? -20 - Math.random() * 60 : W + 20 + Math.random() * 60,
        w: 30 + Math.random() * 50,
        h: 80 + Math.random() * 200,
        side,
        color: `hsl(${230 + Math.random() * 30}, ${20 + Math.random() * 20}%, ${8 + Math.random() * 8}%)`,
        windows: Math.random() > 0.3,
        neonColor: neonColors[Math.floor(Math.random() * neonColors.length)],
      });
    }
  }, []);

  // Generate stars
  const generateStars = useCallback((W: number, H: number) => {
    const g = gs.current;
    g.stars = [];
    for (let i = 0; i < 80; i++) {
      g.stars.push({
        x: Math.random() * W,
        y: Math.random() * H * 0.4,
        size: 0.5 + Math.random() * 2,
        twinkleSpeed: 0.02 + Math.random() * 0.04,
        brightness: 0.3 + Math.random() * 0.7,
      });
    }
  }, []);

  // ─── SPAWN HELPERS ─────────────────────────────
  const spawnObstacle = useCallback(() => {
    const g = gs.current;
    const types: RunnerObstacle['type'][] = ['barrier', 'barrier', 'low'];
    if (g.distance > 200) types.push('bird');
    const type = types[Math.floor(Math.random() * types.length)];
    const lane = Math.floor(Math.random() * 3) as Lane;

    g.obstacles.push({
      lane,
      z: 800,
      type,
      height: type === 'barrier' ? 40 + Math.random() * 20 : type === 'low' ? 50 : 30,
    });

    const coinLane = ((lane + 1 + Math.floor(Math.random() * 2)) % 3) as Lane;
    for (let i = 0; i < 3; i++) {
      g.coinItems.push({ lane: coinLane, z: 800 + i * 30, y: 0, collected: false });
    }

    if (Math.random() < 0.08) {
      const pTypes: PowerUp['type'][] = ['magnet', 'shield', 'x2'];
      g.powerUps.push({
        lane: Math.floor(Math.random() * 3) as Lane,
        z: 850,
        type: pTypes[Math.floor(Math.random() * pTypes.length)],
        collected: false,
      });
    }

    g.nextObstacle = OBSTACLE_INTERVAL_BASE - Math.min(g.distance * 0.02, 40) + Math.random() * 30;
  }, []);

  // ─── PREMIUM DRAW HELPERS ─────────────────────
  const drawNeonRect = (ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, color: string, glow: number, r = 0) => {
    ctx.save();
    ctx.shadowColor = color;
    ctx.shadowBlur = glow;
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    if (r > 0) {
      ctx.beginPath();
      ctx.roundRect(x, y, w, h, r);
      ctx.stroke();
    } else {
      ctx.strokeRect(x, y, w, h);
    }
    ctx.restore();
  };

  const drawNeonText = (ctx: CanvasRenderingContext2D, text: string, x: number, y: number, color: string, size: number, glow = 15) => {
    ctx.save();
    ctx.shadowColor = color;
    ctx.shadowBlur = glow;
    ctx.fillStyle = color;
    ctx.font = `900 ${size}px 'Nunito', monospace`;
    ctx.textAlign = 'center';
    ctx.fillText(text, x, y);
    // Double pass for brighter glow
    ctx.fillText(text, x, y);
    ctx.restore();
  };

  // ─── GAME LOOP ─────────────────────────────────
  const loop = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const g = gs.current;
    const W = canvas.width;
    const H = canvas.height;
    const centerX = W / 2;
    const groundY = H * 0.78;
    const horizonY = H * 0.35;

    // Init buildings & stars on first frame
    if (g.buildings.length === 0) generateBuildings(W, H);
    if (g.stars.length === 0) generateStars(W, H);

    if (g.status === 'playing') {
      g.frameCount++;
      g.speed = GAME_SPEED_BASE + g.distance * SPEED_INC;
      g.distance += g.speed * 0.15;
      g.score = Math.floor(g.distance);

      // Milestones
      const milestone = Math.floor(g.score / 100) * 100;
      if (milestone > 0 && milestone > g.lastMilestone) {
        g.lastMilestone = milestone;
        g.milestoneFlash = 60;
        // Celebration particles
        for (let i = 0; i < 25; i++) {
          const angle = (Math.PI * 2 * i) / 25;
          g.particles.push({
            x: centerX, y: H * 0.4,
            vx: Math.cos(angle) * (3 + Math.random() * 4),
            vy: Math.sin(angle) * (3 + Math.random() * 4),
            life: 1.5, color: ['#ff00ff', '#00ffff', '#ffaa00', '#ff3366', '#66ff33'][i % 5], size: 3 + Math.random() * 3, type: 'spark',
          });
        }
      }
      if (g.milestoneFlash > 0) g.milestoneFlash--;

      // Smooth lane movement
      const targetX = centerX + (g.targetLane - 1) * LANE_WIDTH;
      g.laneX += (targetX - g.laneX) * 0.2;
      g.lane = g.targetLane;

      // Trail
      const playerY = g.action === 'jump'
        ? groundY - PLAYER_SIZE - Math.sin((1 - g.actionTimer / JUMP_DURATION) * Math.PI) * 100
        : groundY - PLAYER_SIZE;
      g.trail.push({ x: g.laneX, y: playerY + PLAYER_SIZE / 2, alpha: 0.6 });
      if (g.trail.length > 12) g.trail.shift();
      g.trail.forEach(t => { t.alpha *= 0.88; });

      // Speed lines at high speed
      if (g.speed > 6 && g.frameCount % 2 === 0) {
        g.speedLines.push({
          x: Math.random() * W,
          y: Math.random() * H * 0.6 + H * 0.2,
          len: 20 + Math.random() * 40 + (g.speed - 6) * 10,
          speed: g.speed * 3,
          alpha: 0.1 + Math.random() * 0.2,
        });
      }
      g.speedLines.forEach(sl => { sl.y += sl.speed * 0.5; sl.alpha *= 0.95; });
      g.speedLines = g.speedLines.filter(sl => sl.alpha > 0.02 && sl.y < H);

      // Action & power-up timers
      if (g.actionTimer > 0) { g.actionTimer--; if (g.actionTimer === 0) g.action = 'run'; }
      if (g.magnetTimer > 0) g.magnetTimer--;
      if (g.shieldTimer > 0) g.shieldTimer--;
      if (g.x2Timer > 0) g.x2Timer--;
      if (g.invincible > 0) g.invincible--;
      if (g.comboTimer > 0) { g.comboTimer--; if (g.comboTimer === 0) g.comboCount = 0; }
      if (g.flashTimer > 0) g.flashTimer--;

      // Spawn obstacles
      g.nextObstacle -= g.speed;
      if (g.nextObstacle <= 0) spawnObstacle();

      // Move obstacles
      g.obstacles.forEach(ob => { ob.z -= g.speed * 2; });

      // Collision
      g.obstacles = g.obstacles.filter(ob => {
        if (ob.z < -50) return false;
        if (ob.z > 0 && ob.z < 60 && ob.lane === g.lane) {
          let hit = false;
          if (ob.type === 'barrier' && g.action !== 'jump') hit = true;
          if (ob.type === 'low' && g.action !== 'slide') hit = true;
          if (ob.type === 'bird' && g.action !== 'jump' && g.action !== 'slide') hit = true;

          if (hit && g.invincible <= 0) {
            if (g.shieldTimer > 0) {
              g.shieldTimer = 0;
              g.invincible = INVINCIBILITY_FRAMES;
              g.flashTimer = 10;
              g.flashColor = '#00aaff';
              for (let i = 0; i < 20; i++) {
                g.particles.push({
                  x: g.laneX, y: groundY - 30,
                  vx: (Math.random() - 0.5) * 8, vy: -Math.random() * 6,
                  life: 1, color: '#00aaff', size: 3 + Math.random() * 3, type: 'spark',
                });
              }
              return false;
            }
            g.lives--;
            g.invincible = INVINCIBILITY_FRAMES;
            g.shakeTimer = 12;
            g.flashTimer = 8;
            g.flashColor = '#ff0000';
            g.comboCount = 0;
            for (let i = 0; i < 20; i++) {
              g.particles.push({
                x: g.laneX, y: groundY - 30,
                vx: (Math.random() - 0.5) * 10, vy: -Math.random() * 10,
                life: 1.2, color: i % 2 === 0 ? '#ff4444' : '#ff8800', size: 2 + Math.random() * 4, type: 'spark',
              });
            }
            if (g.lives <= 0) {
              g.status = 'dead';
              const total = g.score + g.coins * 10;
              const newHi = total > g.highScore;
              if (newHi) {
                g.highScore = total;
                try { localStorage.setItem('wb_runner_hi', total.toString()); } catch (e) { /* ignore */ }
              }
              grantGameReward('runner', total >= 300 ? 3 : total >= 150 ? 2 : total >= 50 ? 1 : 0, earnCredits, showNotification, lang);
              setUi({ status: 'dead', score: g.score, coins: g.coins, lives: 0, highScore: g.highScore, newHighScore: newHi });
            }
            return false;
          }
        }
        return true;
      });

      // Coins
      g.coinItems.forEach(coin => {
        coin.z -= g.speed * 2;
        if (!coin.collected && coin.z > 0 && coin.z < 60) {
          const coinScreenX = centerX + (coin.lane - 1) * LANE_WIDTH;
          const dist = Math.abs(coinScreenX - g.laneX);
          const magnetRange = g.magnetTimer > 0 ? 200 : 40;
          if ((dist < magnetRange && coin.lane === g.lane) || (g.magnetTimer > 0 && dist < magnetRange)) {
            coin.collected = true;
            const earned = g.x2Timer > 0 ? 2 : 1;
            g.coins += earned;
            g.comboCount++;
            g.comboTimer = 60;
            // Coin burst
            for (let i = 0; i < 6; i++) {
              g.particles.push({
                x: coinScreenX, y: groundY - 40,
                vx: (Math.random() - 0.5) * 4, vy: -2 - Math.random() * 3,
                life: 0.8, color: '#ffd700', size: 2 + Math.random() * 2, type: 'spark',
              });
            }
            // Score popup
            g.particles.push({
              x: coinScreenX, y: groundY - 60,
              vx: 0, vy: -1.5, life: 1, color: '#ffd700', size: 0, type: 'text',
            });
          }
        }
      });
      g.coinItems = g.coinItems.filter(c => c.z > -50);

      // Power-ups
      g.powerUps.forEach(pu => {
        pu.z -= g.speed * 2;
        if (!pu.collected && pu.z > 0 && pu.z < 60 && pu.lane === g.lane) {
          pu.collected = true;
          if (pu.type === 'magnet') g.magnetTimer = 300;
          if (pu.type === 'shield') g.shieldTimer = 300;
          if (pu.type === 'x2') g.x2Timer = 300;
          g.flashTimer = 15;
          g.flashColor = pu.type === 'magnet' ? '#ff00ff' : pu.type === 'shield' ? '#00aaff' : '#ffaa00';
          for (let i = 0; i < 20; i++) {
            const angle = (Math.PI * 2 * i) / 20;
            g.particles.push({
              x: centerX + (pu.lane - 1) * LANE_WIDTH, y: groundY - 40,
              vx: Math.cos(angle) * 5, vy: Math.sin(angle) * 5,
              life: 1, color: g.flashColor, size: 3 + Math.random() * 3, type: 'spark',
            });
          }
        }
      });
      g.powerUps = g.powerUps.filter(p => p.z > -50);

      // Particles
      g.particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.type !== 'text') p.vy += 0.12;
        p.life -= 0.018;
      });
      g.particles = g.particles.filter(p => p.life > 0);

      // Foot dust when running
      if (g.action === 'run' && g.frameCount % 3 === 0) {
        g.particles.push({
          x: g.laneX + (Math.random() - 0.5) * 20, y: groundY + 2,
          vx: (Math.random() - 0.5) * 1, vy: -0.5 - Math.random(),
          life: 0.5, color: 'rgba(150,130,255,0.4)', size: 2 + Math.random() * 3, type: 'dust',
        });
      }

      // Update UI
      if (g.frameCount % 8 === 0) {
        setUi(prev => ({ ...prev, status: 'playing', score: g.score, coins: g.coins, lives: g.lives, highScore: g.highScore }));
      }
    }

    // ═══════════════════════════════════════════════
    // ─── RENDER ───────────────────────────────────
    // ═══════════════════════════════════════════════
    let sx = 0, sy = 0;
    if (g.shakeTimer > 0) {
      g.shakeTimer--;
      const intensity = g.shakeTimer * 1.5;
      sx = (Math.random() - 0.5) * intensity;
      sy = (Math.random() - 0.5) * intensity;
    }
    ctx.save();
    ctx.translate(sx, sy);

    // ─── SKY ─────────────────
    const sky = ctx.createLinearGradient(0, 0, 0, H);
    sky.addColorStop(0, '#030518');
    sky.addColorStop(0.25, '#08082a');
    sky.addColorStop(0.5, '#0a0a3a');
    sky.addColorStop(0.75, '#12124a');
    sky.addColorStop(1, '#1a1050');
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, W, H);

    // ─── NEBULA GLOW ─────────
    const t = g.frameCount * 0.003;
    ctx.save();
    ctx.globalAlpha = 0.08;
    const nebula1 = ctx.createRadialGradient(W * 0.3 + Math.sin(t) * 30, H * 0.15, 0, W * 0.3, H * 0.15, W * 0.4);
    nebula1.addColorStop(0, '#ff00ff');
    nebula1.addColorStop(1, 'transparent');
    ctx.fillStyle = nebula1;
    ctx.fillRect(0, 0, W, H);
    const nebula2 = ctx.createRadialGradient(W * 0.7 + Math.cos(t) * 20, H * 0.2, 0, W * 0.7, H * 0.2, W * 0.3);
    nebula2.addColorStop(0, '#0066ff');
    nebula2.addColorStop(1, 'transparent');
    ctx.fillStyle = nebula2;
    ctx.fillRect(0, 0, W, H);
    ctx.restore();

    // ─── STARS ─────────────────
    g.stars.forEach(star => {
      const twinkle = Math.sin(g.frameCount * star.twinkleSpeed) * 0.3 + 0.7;
      ctx.globalAlpha = star.brightness * twinkle;
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
      ctx.fill();
      // Star glow
      if (star.size > 1.2) {
        ctx.globalAlpha = star.brightness * twinkle * 0.15;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size * 3, 0, Math.PI * 2);
        ctx.fill();
      }
    });
    ctx.globalAlpha = 1;

    // ─── CITY BUILDINGS (parallax) ─────────
    const bldgOffset = g.status === 'playing' ? (g.frameCount * g.speed * 0.3) % 200 : 0;
    g.buildings.forEach((bldg, i) => {
      const parallax = 0.3 + (i % 6) * 0.1;
      const bx = bldg.x + (bldg.side === 'left' ? -1 : 1) * bldgOffset * parallax * 0.1;
      const by = horizonY - bldg.h * 0.3 + i * 8;
      const bw = bldg.w;
      const bh = bldg.h * 0.5;
      const depth = 1 - (i % 12) / 24;

      ctx.save();
      ctx.globalAlpha = 0.3 + depth * 0.3;
      // Building body
      ctx.fillStyle = bldg.color;
      ctx.fillRect(bx, by, bw, bh);

      // Neon edge accent
      ctx.save();
      ctx.globalAlpha = 0.4 + Math.sin(g.frameCount * 0.02 + i) * 0.2;
      ctx.shadowColor = bldg.neonColor;
      ctx.shadowBlur = 8;
      ctx.strokeStyle = bldg.neonColor;
      ctx.lineWidth = 1;
      ctx.strokeRect(bx, by, bw, bh);
      ctx.restore();

      // Windows
      if (bldg.windows) {
        const wSize = 3;
        const wGap = 8;
        for (let wx = bx + 4; wx < bx + bw - 4; wx += wGap) {
          for (let wy = by + 6; wy < by + bh - 8; wy += wGap) {
            const lit = ((wx * 7 + wy * 13 + i) % 5) < 3;
            if (lit) {
              ctx.fillStyle = Math.random() > 0.97 ? bldg.neonColor : `rgba(255,255,200,${0.3 + Math.random() * 0.4})`;
              ctx.fillRect(wx, wy, wSize, wSize);
            }
          }
        }
      }
      ctx.restore();
    });

    // ─── ROAD ─────────────────
    const roadW1 = 40;
    const roadW2 = LANE_WIDTH * 3 + 40;

    // Road surface with gradient
    const roadGrad = ctx.createLinearGradient(0, horizonY, 0, groundY + 80);
    roadGrad.addColorStop(0, '#0a0a20');
    roadGrad.addColorStop(0.5, '#0e0e2a');
    roadGrad.addColorStop(1, '#141438');
    ctx.fillStyle = roadGrad;
    ctx.beginPath();
    ctx.moveTo(centerX - roadW1, horizonY);
    ctx.lineTo(centerX + roadW1, horizonY);
    ctx.lineTo(centerX + roadW2, groundY + 80);
    ctx.lineTo(centerX - roadW2, groundY + 80);
    ctx.closePath();
    ctx.fill();

    // Animated grid pattern on road
    const gridOffset = (g.frameCount * g.speed * 0.5) % 30;
    ctx.save();
    ctx.clip();
    ctx.strokeStyle = 'rgba(100,80,255,0.06)';
    ctx.lineWidth = 1;
    // Horizontal grid lines (perspective)
    for (let d = 0; d < 20; d++) {
      const depth = (d * 40 + gridOffset) / 800;
      if (depth > 1) continue;
      const y = horizonY + (groundY + 80 - horizonY) * (1 - depth);
      const xSpread = roadW1 + (roadW2 - roadW1) * (1 - depth);
      ctx.globalAlpha = (1 - depth) * 0.3;
      ctx.beginPath();
      ctx.moveTo(centerX - xSpread, y);
      ctx.lineTo(centerX + xSpread, y);
      ctx.stroke();
    }
    ctx.restore();

    // Lane dividers (animated dashes)
    const dashOffset = (g.frameCount * g.speed * 0.3) % 40;
    ctx.strokeStyle = 'rgba(100,80,255,0.25)';
    ctx.lineWidth = 2;
    ctx.setLineDash([15, 15]);
    ctx.lineDashOffset = -dashOffset;
    for (let i = -1; i <= 1; i += 2) {
      ctx.beginPath();
      ctx.moveTo(centerX + i * 5, horizonY);
      ctx.lineTo(centerX + i * LANE_WIDTH, groundY + 80);
      ctx.stroke();
    }
    // Center line
    ctx.beginPath();
    ctx.moveTo(centerX, horizonY);
    ctx.lineTo(centerX, groundY + 80);
    ctx.stroke();
    ctx.setLineDash([]);

    // Neon road edges
    const edgePulse = Math.sin(g.frameCount * 0.05) * 0.3 + 0.7;
    ctx.save();
    ctx.strokeStyle = `rgba(120,60,255,${edgePulse})`;
    ctx.lineWidth = 3;
    ctx.shadowColor = '#7744ff';
    ctx.shadowBlur = 20;
    ctx.beginPath();
    ctx.moveTo(centerX - roadW1, horizonY);
    ctx.lineTo(centerX - roadW2, groundY + 80);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(centerX + roadW1, horizonY);
    ctx.lineTo(centerX + roadW2, groundY + 80);
    ctx.stroke();
    // Second pass for brighter inner
    ctx.strokeStyle = `rgba(180,140,255,${edgePulse * 0.5})`;
    ctx.lineWidth = 1;
    ctx.shadowBlur = 10;
    ctx.beginPath();
    ctx.moveTo(centerX - roadW1, horizonY);
    ctx.lineTo(centerX - roadW2, groundY + 80);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(centerX + roadW1, horizonY);
    ctx.lineTo(centerX + roadW2, groundY + 80);
    ctx.stroke();
    ctx.restore();

    // ─── SPEED LINES ─────────
    g.speedLines.forEach(sl => {
      ctx.save();
      ctx.globalAlpha = sl.alpha;
      ctx.strokeStyle = '#8866ff';
      ctx.shadowColor = '#8866ff';
      ctx.shadowBlur = 4;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(sl.x, sl.y);
      ctx.lineTo(sl.x, sl.y + sl.len);
      ctx.stroke();
      ctx.restore();
    });

    // ─── OBSTACLES (sorted by depth) ─────────
    const sortedObs = [...g.obstacles].sort((a, b) => b.z - a.z);
    sortedObs.forEach(ob => {
      const depth = Math.max(0.01, ob.z / 800);
      const screenX = centerX + (ob.lane - 1) * LANE_WIDTH * depth;
      const screenY = horizonY + (groundY - horizonY) * (1 - depth);
      const scale = 1 - depth * 0.7;
      const w = 44 * scale;
      const h = ob.height * scale;

      ctx.save();
      if (ob.type === 'barrier') {
        // Holographic barrier
        const barrierGrad = ctx.createLinearGradient(screenX - w / 2, screenY - h, screenX + w / 2, screenY);
        barrierGrad.addColorStop(0, '#ff1155');
        barrierGrad.addColorStop(0.5, '#ff3377');
        barrierGrad.addColorStop(1, '#cc0033');
        ctx.fillStyle = barrierGrad;
        ctx.shadowColor = '#ff2255';
        ctx.shadowBlur = 20 * scale;
        ctx.beginPath();
        ctx.roundRect(screenX - w / 2, screenY - h, w, h, 4 * scale);
        ctx.fill();
        // Scan lines
        ctx.globalAlpha = 0.3;
        ctx.fillStyle = '#ff6688';
        for (let s = 0; s < h; s += 4 * scale) {
          ctx.fillRect(screenX - w / 2, screenY - h + s, w, 1.5 * scale);
        }
        ctx.globalAlpha = 1;
        // Warning icon
        ctx.fillStyle = '#fff';
        ctx.font = `${14 * scale}px sans-serif`;
        ctx.textAlign = 'center';
        ctx.fillText('⚠', screenX, screenY - h / 2 + 5 * scale);
        // Neon edge
        drawNeonRect(ctx, screenX - w / 2, screenY - h, w, h, '#ff4466', 12 * scale, 4 * scale);
      } else if (ob.type === 'low') {
        // Laser bar
        const barY = screenY - h * 0.7;
        const barH = 5 * scale;
        // Posts
        ctx.fillStyle = '#555';
        ctx.shadowColor = '#ffaa00';
        ctx.shadowBlur = 5;
        ctx.fillRect(screenX - w * 0.7, barY, 3 * scale, screenY - barY);
        ctx.fillRect(screenX + w * 0.7 - 3 * scale, barY, 3 * scale, screenY - barY);
        // Laser beam
        ctx.save();
        ctx.shadowColor = '#ffaa00';
        ctx.shadowBlur = 20 * scale;
        const laserGrad = ctx.createLinearGradient(screenX - w * 0.8, barY, screenX + w * 0.8, barY);
        laserGrad.addColorStop(0, '#ff6600');
        laserGrad.addColorStop(0.5, '#ffcc00');
        laserGrad.addColorStop(1, '#ff6600');
        ctx.fillStyle = laserGrad;
        ctx.fillRect(screenX - w * 0.8, barY, w * 1.6, barH);
        // Inner bright core
        ctx.fillStyle = '#ffee88';
        ctx.fillRect(screenX - w * 0.8, barY + barH * 0.3, w * 1.6, barH * 0.4);
        ctx.restore();
      } else if (ob.type === 'bird') {
        // Neon drone
        const birdY = screenY - h * 1.5 + Math.sin(g.frameCount * 0.12) * 5 * scale;
        const wingAngle = Math.sin(g.frameCount * 0.2) * 0.4;
        ctx.save();
        ctx.shadowColor = '#aa44ff';
        ctx.shadowBlur = 18 * scale;
        // Body
        ctx.fillStyle = '#8833dd';
        ctx.beginPath();
        ctx.ellipse(screenX, birdY, w * 0.4, h * 0.2, 0, 0, Math.PI * 2);
        ctx.fill();
        // Center eye
        ctx.fillStyle = '#ff00ff';
        ctx.beginPath();
        ctx.arc(screenX, birdY, 3 * scale, 0, Math.PI * 2);
        ctx.fill();
        // Wings
        ctx.fillStyle = '#aa55ff';
        ctx.beginPath();
        ctx.moveTo(screenX - w * 0.25, birdY);
        ctx.lineTo(screenX - w * 0.8, birdY - h * 0.5 * (1 + wingAngle));
        ctx.lineTo(screenX - w * 0.1, birdY - h * 0.1);
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(screenX + w * 0.25, birdY);
        ctx.lineTo(screenX + w * 0.8, birdY - h * 0.5 * (1 + wingAngle));
        ctx.lineTo(screenX + w * 0.1, birdY - h * 0.1);
        ctx.fill();
        // Neon ring
        ctx.strokeStyle = '#cc66ff';
        ctx.lineWidth = 1.5 * scale;
        ctx.beginPath();
        ctx.ellipse(screenX, birdY, w * 0.55, h * 0.3, 0, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
      }
      ctx.restore();
    });

    // ─── COINS ─────────────
    g.coinItems.forEach(coin => {
      if (coin.collected) return;
      const depth = Math.max(0.01, coin.z / 800);
      const sx2 = centerX + (coin.lane - 1) * LANE_WIDTH * depth;
      const sy2 = horizonY + (groundY - horizonY) * (1 - depth) - 30 * (1 - depth * 0.7);
      const scale = 1 - depth * 0.7;
      const r = 8 * scale;
      const spin = Math.sin(g.frameCount * 0.1 + coin.z * 0.01);

      ctx.save();
      // Glow halo
      ctx.globalAlpha = 0.2;
      ctx.fillStyle = '#ffd700';
      ctx.shadowColor = '#ffd700';
      ctx.shadowBlur = 15;
      ctx.beginPath();
      ctx.arc(sx2, sy2, r * 2, 0, Math.PI * 2);
      ctx.fill();
      // Coin body (3D spin effect)
      ctx.globalAlpha = 1;
      ctx.fillStyle = '#ffd700';
      ctx.shadowBlur = 8;
      ctx.beginPath();
      ctx.ellipse(sx2, sy2, r * Math.abs(spin), r, 0, 0, Math.PI * 2);
      ctx.fill();
      // Highlight
      if (Math.abs(spin) > 0.3) {
        ctx.fillStyle = '#fff8cc';
        ctx.beginPath();
        ctx.ellipse(sx2 - r * 0.15 * spin, sy2 - r * 0.2, r * 0.3, r * 0.3, 0, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    });

    // ─── POWER-UPS ─────────
    g.powerUps.forEach(pu => {
      if (pu.collected) return;
      const depth = Math.max(0.01, pu.z / 800);
      const sx2 = centerX + (pu.lane - 1) * LANE_WIDTH * depth;
      const sy2 = horizonY + (groundY - horizonY) * (1 - depth) - 35 * (1 - depth * 0.7);
      const scale = 1 - depth * 0.7;
      const r = 14 * scale;
      const pulse = Math.sin(g.frameCount * 0.08) * 4;
      const color = pu.type === 'magnet' ? '#ff00ff' : pu.type === 'shield' ? '#00aaff' : '#ffaa00';
      const rotation = g.frameCount * 0.03;

      ctx.save();
      ctx.translate(sx2, sy2);
      ctx.rotate(rotation);
      // Outer ring
      ctx.strokeStyle = color;
      ctx.shadowColor = color;
      ctx.shadowBlur = 20 + pulse;
      ctx.lineWidth = 2 * scale;
      ctx.beginPath();
      // Diamond shape
      ctx.moveTo(0, -(r + pulse * 0.3));
      ctx.lineTo(r + pulse * 0.3, 0);
      ctx.lineTo(0, r + pulse * 0.3);
      ctx.lineTo(-(r + pulse * 0.3), 0);
      ctx.closePath();
      ctx.stroke();
      // Inner fill
      ctx.globalAlpha = 0.3;
      ctx.fillStyle = color;
      ctx.fill();
      ctx.globalAlpha = 1;
      // Icon
      ctx.rotate(-rotation);
      ctx.fillStyle = '#fff';
      ctx.font = `${12 * scale}px sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(pu.type === 'magnet' ? '🧲' : pu.type === 'shield' ? '🛡' : '×2', 0, 1);
      ctx.restore();
    });

    // ─── PLAYER TRAIL ─────────
    g.trail.forEach((tr, i) => {
      if (tr.alpha < 0.05) return;
      ctx.save();
      ctx.globalAlpha = tr.alpha * 0.4;
      ctx.fillStyle = '#7744ff';
      ctx.shadowColor = '#7744ff';
      ctx.shadowBlur = 8;
      const trSize = PLAYER_SIZE * 0.3 * (i / g.trail.length);
      ctx.beginPath();
      ctx.arc(tr.x, tr.y, trSize, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    });

    // ─── PLAYER ─────────────
    if (g.status !== 'idle') {
      const playerScreenY = groundY;
      let playerDrawY = playerScreenY;
      let playerH = PLAYER_SIZE;

      if (g.action === 'jump') {
        const jumpProgress = 1 - g.actionTimer / JUMP_DURATION;
        const jumpArc = Math.sin(jumpProgress * Math.PI);
        playerDrawY -= jumpArc * 100;
      } else if (g.action === 'slide') {
        playerH = PLAYER_SIZE * 0.5;
        playerDrawY -= playerH;
      } else {
        playerDrawY -= PLAYER_SIZE;
      }

      // Invincibility flash
      if (g.invincible > 0 && g.frameCount % 4 < 2) ctx.globalAlpha = 0.4;

      // Shield bubble
      if (g.shieldTimer > 0) {
        ctx.save();
        const shieldPulse = Math.sin(g.frameCount * 0.1) * 3;
        ctx.strokeStyle = '#00aaff';
        ctx.shadowColor = '#00aaff';
        ctx.shadowBlur = 25 + shieldPulse;
        ctx.lineWidth = 2;
        ctx.globalAlpha = 0.6;
        ctx.beginPath();
        ctx.arc(g.laneX, playerDrawY + playerH / 2, PLAYER_SIZE * 0.85 + shieldPulse, 0, Math.PI * 2);
        ctx.stroke();
        // Inner glow
        ctx.globalAlpha = 0.05;
        ctx.fillStyle = '#00aaff';
        ctx.fill();
        ctx.restore();
      }

      // Magnet aura
      if (g.magnetTimer > 0) {
        ctx.save();
        ctx.globalAlpha = 0.1 + Math.sin(g.frameCount * 0.1) * 0.05;
        const magnetGrad = ctx.createRadialGradient(g.laneX, playerDrawY + playerH / 2, 0, g.laneX, playerDrawY + playerH / 2, 100);
        magnetGrad.addColorStop(0, '#ff00ff');
        magnetGrad.addColorStop(1, 'transparent');
        ctx.fillStyle = magnetGrad;
        ctx.fillRect(g.laneX - 100, playerDrawY - 50, 200, playerH + 100);
        ctx.restore();
      }

      ctx.save();
      // Player glow under
      ctx.save();
      ctx.globalAlpha = 0.15;
      ctx.fillStyle = '#6644ff';
      ctx.shadowColor = '#6644ff';
      ctx.shadowBlur = 30;
      ctx.beginPath();
      ctx.ellipse(g.laneX, playerScreenY + 5, PLAYER_SIZE * 0.5, 6, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // Hero image
      const heroImg = g.heroImgs[g.selectedHero];
      if (heroImg) {
        ctx.save();
        ctx.shadowColor = '#6644ff';
        ctx.shadowBlur = 15;
        ctx.beginPath();
        ctx.roundRect(g.laneX - PLAYER_SIZE / 2 + 2, playerDrawY + 2, PLAYER_SIZE - 4, playerH - 4, 10);
        ctx.clip();
        ctx.drawImage(heroImg, g.laneX - PLAYER_SIZE / 2 + 2, playerDrawY + 2, PLAYER_SIZE - 4, playerH - 4);
        ctx.restore();
      } else {
        ctx.fillStyle = '#6644ff';
        ctx.beginPath();
        ctx.roundRect(g.laneX - PLAYER_SIZE / 2 + 2, playerDrawY + 2, PLAYER_SIZE - 4, playerH - 4, 10);
        ctx.fill();
      }

      // Neon border with pulse
      const borderPulse = Math.sin(g.frameCount * 0.08) * 0.2 + 0.8;
      ctx.strokeStyle = `rgba(136,100,255,${borderPulse})`;
      ctx.shadowColor = '#8866ff';
      ctx.shadowBlur = 12;
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.roundRect(g.laneX - PLAYER_SIZE / 2, playerDrawY, PLAYER_SIZE, playerH, 10);
      ctx.stroke();

      // Run animation legs
      if (g.action === 'run' && g.status === 'playing') {
        const legAnim = Math.sin(g.frameCount * 0.3) * 8;
        ctx.fillStyle = '#6644ff';
        ctx.shadowBlur = 6;
        ctx.beginPath();
        ctx.roundRect(g.laneX - 10, playerScreenY, 7, 10 + legAnim, 2);
        ctx.fill();
        ctx.beginPath();
        ctx.roundRect(g.laneX + 3, playerScreenY, 7, 10 - legAnim, 2);
        ctx.fill();
      }

      ctx.restore();
      ctx.globalAlpha = 1;
    }

    // ─── PARTICLES ─────────
    g.particles.forEach(p => {
      if (p.type === 'text') {
        ctx.save();
        ctx.globalAlpha = p.life;
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 6;
        ctx.font = '700 14px Nunito, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('+1', p.x, p.y);
        ctx.restore();
        return;
      }
      if (p.type === 'dust') {
        ctx.save();
        ctx.globalAlpha = p.life * 0.6;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
        return;
      }
      // Spark particles
      ctx.save();
      ctx.globalAlpha = Math.min(1, p.life);
      ctx.fillStyle = p.color;
      ctx.shadowColor = p.color;
      ctx.shadowBlur = 8;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    });

    // ─── HUD ON CANVAS ─────
    if (g.status === 'playing') {
      // Power-up indicators (premium style)
      let indicatorY = 55;
      const indicators = [
        { timer: g.magnetTimer, max: 300, label: 'MAGNET', icon: '🧲', color: '#ff00ff' },
        { timer: g.shieldTimer, max: 300, label: 'SHIELD', icon: '🛡', color: '#00aaff' },
        { timer: g.x2Timer, max: 300, label: '×2 COINS', icon: '💰', color: '#ffaa00' },
      ];
      indicators.forEach(ind => {
        if (ind.timer > 0) {
          const barW = 85;
          const barH = 18;
          // Bar bg
          ctx.fillStyle = 'rgba(0,0,0,0.5)';
          ctx.beginPath();
          ctx.roundRect(8, indicatorY, barW, barH, 6);
          ctx.fill();
          // Bar fill
          ctx.fillStyle = ind.color + '80';
          ctx.beginPath();
          ctx.roundRect(8, indicatorY, (ind.timer / ind.max) * barW, barH, 6);
          ctx.fill();
          // Border
          ctx.strokeStyle = ind.color + '60';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.roundRect(8, indicatorY, barW, barH, 6);
          ctx.stroke();
          // Text
          ctx.fillStyle = '#fff';
          ctx.font = '600 9px Nunito, sans-serif';
          ctx.textAlign = 'left';
          ctx.fillText(`${ind.icon} ${ind.label}`, 14, indicatorY + 13);
          indicatorY += 24;
        }
      });

      // Combo display
      if (g.comboCount >= 3) {
        const comboAlpha = Math.min(1, g.comboTimer / 20);
        const comboScale = 1 + Math.sin(g.frameCount * 0.15) * 0.1;
        ctx.save();
        ctx.globalAlpha = comboAlpha;
        ctx.translate(W - 50, 80);
        ctx.scale(comboScale, comboScale);
        drawNeonText(ctx, `×${g.comboCount}`, 0, 0, '#ffaa00', 20, 12);
        ctx.font = '700 8px Nunito';
        ctx.fillStyle = '#ffcc44';
        ctx.textAlign = 'center';
        ctx.fillText('COMBO', 0, 14);
        ctx.restore();
      }

      // Milestone flash
      if (g.milestoneFlash > 0) {
        const mAlpha = g.milestoneFlash / 60;
        ctx.save();
        ctx.globalAlpha = mAlpha;
        const mScale = 1.5 - mAlpha * 0.5;
        ctx.translate(centerX, H * 0.3);
        ctx.scale(mScale, mScale);
        drawNeonText(ctx, `${g.lastMilestone}m`, 0, 0, '#00ffaa', 28, 20);
        ctx.restore();
      }
    }

    // ─── FLASH OVERLAY ─────
    if (g.flashTimer > 0) {
      ctx.save();
      ctx.globalAlpha = (g.flashTimer / 15) * 0.15;
      ctx.fillStyle = g.flashColor;
      ctx.fillRect(0, 0, W, H);
      ctx.restore();
    }

    // ─── VIGNETTE ─────────
    const vignette = ctx.createRadialGradient(centerX, H / 2, H * 0.25, centerX, H / 2, H * 0.85);
    vignette.addColorStop(0, 'transparent');
    vignette.addColorStop(1, 'rgba(0,0,0,0.5)');
    ctx.fillStyle = vignette;
    ctx.fillRect(0, 0, W, H);

    // ─── SCANLINES (subtle) ─────
    ctx.save();
    ctx.globalAlpha = 0.03;
    ctx.fillStyle = '#000';
    for (let y = 0; y < H; y += 3) {
      ctx.fillRect(0, y, W, 1);
    }
    ctx.restore();

    ctx.restore();
    animRef.current = requestAnimationFrame(loop);
  }, [spawnObstacle, generateBuildings, generateStars, earnCredits, showNotification, lang]);

  // ─── START / ACTIONS ───────────────────────────
  const startGame = useCallback(() => {
    const g = gs.current;
    g.status = 'playing';
    g.lane = 1;
    g.targetLane = 1;
    const canvas = canvasRef.current;
    g.laneX = canvas ? canvas.width / 2 : 200;
    g.action = 'run';
    g.actionTimer = 0;
    g.speed = GAME_SPEED_BASE;
    g.distance = 0;
    g.score = 0;
    g.coins = 0;
    g.lives = 3;
    g.obstacles = [];
    g.coinItems = [];
    g.powerUps = [];
    g.nextObstacle = 50;
    g.frameCount = 0;
    g.invincible = 0;
    g.magnetTimer = 0;
    g.shieldTimer = 0;
    g.x2Timer = 0;
    g.shakeTimer = 0;
    g.particles = [];
    g.trail = [];
    g.speedLines = [];
    g.comboCount = 0;
    g.comboTimer = 0;
    g.flashTimer = 0;
    g.milestoneFlash = 0;
    g.lastMilestone = 0;
    setUi({ status: 'playing', score: 0, coins: 0, lives: 3, highScore: g.highScore, newHighScore: false });
  }, []);

  const moveLeft = useCallback(() => {
    const g = gs.current;
    if (g.targetLane > 0) g.targetLane = (g.targetLane - 1) as Lane;
  }, []);

  const moveRight = useCallback(() => {
    const g = gs.current;
    if (g.targetLane < 2) g.targetLane = (g.targetLane + 1) as Lane;
  }, []);

  const doJump = useCallback(() => {
    const g = gs.current;
    if (g.action === 'run') {
      g.action = 'jump';
      g.actionTimer = JUMP_DURATION;
    }
  }, []);

  const doSlide = useCallback(() => {
    const g = gs.current;
    if (g.action === 'run') {
      g.action = 'slide';
      g.actionTimer = SLIDE_DURATION;
    }
  }, []);

  // ─── INPUT ─────────────────────────────────────
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const code = e.code;
      const gameCodes = ['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','KeyA','KeyD','KeyW','KeyS','Space'];
      if (!gameCodes.includes(code)) return;
      e.preventDefault();
      if (gs.current.status === 'dead') { if (code === 'Space') startGame(); return; }
      if (gs.current.status === 'idle') { if (code === 'Space' || code === 'ArrowUp' || code === 'KeyW') startGame(); return; }
      switch (code) {
        case 'ArrowLeft': case 'KeyA': moveLeft(); break;
        case 'ArrowRight': case 'KeyD': moveRight(); break;
        case 'ArrowUp': case 'KeyW': case 'Space': doJump(); break;
        case 'ArrowDown': case 'KeyS': doSlide(); break;
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [startGame, moveLeft, moveRight, doJump, doSlide]);

  // Touch/swipe controls
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const onTouchStart = (e: TouchEvent) => {
      const t = e.touches[0];
      gs.current.touchStartX = t.clientX;
      gs.current.touchStartY = t.clientY;
    };
    const onTouchEnd = (e: TouchEvent) => {
      const g = gs.current;
      if (g.status === 'idle' || g.status === 'dead') { startGame(); return; }
      const tc = e.changedTouches[0];
      const dx = tc.clientX - g.touchStartX;
      const dy = tc.clientY - g.touchStartY;
      const absDx = Math.abs(dx);
      const absDy = Math.abs(dy);
      if (absDx < 15 && absDy < 15) { doJump(); return; }
      if (absDx > absDy) {
        if (dx > 30) moveRight();
        else if (dx < -30) moveLeft();
      } else {
        if (dy < -30) doJump();
        else if (dy > 30) doSlide();
      }
    };
    canvas.addEventListener('touchstart', onTouchStart, { passive: true });
    canvas.addEventListener('touchend', onTouchEnd, { passive: true });
    return () => {
      canvas.removeEventListener('touchstart', onTouchStart);
      canvas.removeEventListener('touchend', onTouchEnd);
    };
  }, [startGame, moveLeft, moveRight, doJump, doSlide]);

  // Mouse click controls for PC
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const onClick = (e: MouseEvent) => {
      const g = gs.current;
      if (g.status === 'idle') { startGame(); return; }
      if (g.status === 'dead') { startGame(); return; }
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const third = rect.width / 3;
      if (x < third) moveLeft();
      else if (x > third * 2) moveRight();
      else doJump();
    };
    canvas.addEventListener('click', onClick);
    return () => canvas.removeEventListener('click', onClick);
  }, [startGame, moveLeft, moveRight, doJump]);

  // Canvas resize & loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const resize = () => {
      const p = canvas.parentElement;
      if (!p) return;
      canvas.width = p.clientWidth;
      canvas.height = p.clientHeight;
      generateBuildings(canvas.width, canvas.height);
      generateStars(canvas.width, canvas.height);
    };
    resize();
    window.addEventListener('resize', resize);
    animRef.current = requestAnimationFrame(loop);
    return () => { window.removeEventListener('resize', resize); cancelAnimationFrame(animRef.current); };
  }, [loop, generateBuildings, generateStars]);

  return (
    <div className="flex flex-col h-full w-full bg-[#030518] select-none">
      {/* HEADER */}
      <div className="flex items-center justify-between px-3 py-1.5 bg-black/70 backdrop-blur-xl border-b border-purple-500/20 z-20 relative">
        <button onClick={(e) => { e.stopPropagation(); onBack(); }} className="flex items-center justify-center w-9 h-9 -ml-1 rounded-lg text-white/60 hover:text-white hover:bg-white/10 active:bg-white/20 transition-colors">
          <ArrowLeft size={20} />
        </button>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-0.5">
            {[...Array(3)].map((_, i) => (
              <Heart key={i} size={14} className={`transition-all ${i < ui.lives ? 'text-red-500 fill-red-500 drop-shadow-[0_0_6px_rgba(239,68,68,0.6)]' : 'text-white/15'}`} />
            ))}
          </div>
          <div className="h-4 w-px bg-white/10" />
          <div className="flex items-center gap-1">
            <span className="text-yellow-400 text-xs">🪙</span>
            <span className="text-white font-[900] text-xs tabular-nums">{ui.coins}</span>
          </div>
          <div className="h-4 w-px bg-white/10" />
          <div className="flex items-center gap-1">
            <Trophy size={12} className="text-amber-400" />
            <span className="text-white font-[900] text-xs tabular-nums">{ui.score}<span className="text-white/40 text-[10px]">m</span></span>
          </div>
          {ui.highScore > 0 && (
            <>
              <div className="h-4 w-px bg-white/10" />
              <div className="flex items-center gap-1">
                <Crown size={10} className="text-amber-300/50" />
                <span className="text-white/40 font-[800] text-[10px] tabular-nums">{ui.highScore}</span>
              </div>
            </>
          )}
        </div>
      </div>

      {/* CANVAS */}
      <div className="flex-1 relative overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

        {/* IDLE OVERLAY */}
        {ui.status === 'idle' && (
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10 cursor-pointer" onClick={startGame} onTouchEnd={(e) => { e.preventDefault(); startGame(); }}>
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-purple-900/20 to-black/70" />
            <div className="relative text-center space-y-5 px-6">
              {/* Title with glow */}
              <div className="relative">
                <h1 className="text-5xl md:text-7xl font-[1000] uppercase italic tracking-tighter text-white leading-none">
                  ENDLESS
                </h1>
                <h1 className="text-5xl md:text-7xl font-[1000] uppercase italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-400 leading-none drop-shadow-[0_0_40px_rgba(168,85,247,0.5)]">
                  RUNNER
                </h1>
              </div>

              <p className="text-white/40 text-xs font-bold uppercase tracking-[0.3em]">
                {lang === 'el' ? 'ΠΑΤΑ ΓΙΑ ΝΑ ΞΕΚΙΝΗΣΕΙΣ' : 'TAP TO START'}
              </p>

              {/* Controls */}
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 backdrop-blur-md">
                <span className="text-purple-300/60 text-[10px] font-bold">← → LANES</span>
                <span className="text-white/20">•</span>
                <span className="text-cyan-300/60 text-[10px] font-bold">↑ JUMP</span>
                <span className="text-white/20">•</span>
                <span className="text-fuchsia-300/60 text-[10px] font-bold">↓ SLIDE</span>
              </div>

              {/* Animated play button */}
              <div className="mt-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-purple-500 to-fuchsia-600 flex items-center justify-center shadow-[0_0_40px_rgba(168,85,247,0.5)] animate-bounce border-2 border-white/20">
                  <Play size={28} className="text-white ml-1" fill="currentColor" />
                </div>
              </div>

              {ui.highScore > 0 && (
                <div className="flex items-center justify-center gap-2 mt-2">
                  <Crown size={14} className="text-amber-400" />
                  <span className="text-amber-300/70 text-sm font-bold">BEST: {ui.highScore}</span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* DEATH OVERLAY */}
        {ui.status === 'dead' && (
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10 animate-in fade-in" onClick={(e) => e.stopPropagation()}>
            <div className="absolute inset-0 bg-gradient-to-b from-red-950/30 via-black/80 to-black/80 backdrop-blur-sm" />
            <div className="relative text-center space-y-4 max-w-sm mx-4 w-full">
              {/* Glass card */}
              <div className="bg-white/[0.04] backdrop-blur-xl rounded-[2rem] p-7 border border-white/10 shadow-[0_0_60px_rgba(0,0,0,0.5)]">
                {ui.newHighScore ? (
                  <>
                    <div className="text-4xl mb-2">👑</div>
                    <h2 className="text-2xl font-[1000] text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-500 uppercase italic">NEW RECORD!</h2>
                  </>
                ) : (
                  <>
                    <div className="text-4xl mb-2">💀</div>
                    <h2 className="text-2xl font-[1000] text-white uppercase italic">GAME OVER</h2>
                  </>
                )}
                <div className="space-y-2.5 mt-4">
                  <div className="flex items-center justify-between bg-white/5 rounded-xl px-4 py-2.5">
                    <span className="text-white/50 text-sm font-bold">{lang === 'el' ? 'Απόσταση' : 'Distance'}</span>
                    <span className="text-white font-[900] text-lg tabular-nums">{ui.score}<span className="text-white/40 text-sm">m</span></span>
                  </div>
                  <div className="flex items-center justify-between bg-white/5 rounded-xl px-4 py-2.5">
                    <span className="text-white/50 text-sm font-bold">🪙 Coins</span>
                    <span className="text-yellow-400 font-[900] text-lg tabular-nums">{ui.coins}</span>
                  </div>
                  <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  <div className="flex items-center justify-between px-4 py-1">
                    <span className="text-white/50 text-sm font-bold">Total</span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-[900] text-2xl tabular-nums">{ui.score + ui.coins * 10}</span>
                  </div>
                  {ui.score >= 100 && (
                    <div className="flex items-center justify-center gap-1.5 text-emerald-400 text-sm font-bold bg-emerald-500/10 rounded-xl py-2 border border-emerald-500/20">
                      <Zap size={14} /> +5 Credits!
                    </div>
                  )}
                </div>
                <button onClick={startGame} className="w-full mt-5 py-3.5 bg-gradient-to-r from-purple-500 to-fuchsia-600 hover:from-purple-400 hover:to-fuchsia-500 text-white font-[900] text-sm uppercase rounded-2xl transition-all flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(168,85,247,0.4)] active:scale-95 border border-white/10">
                  <RotateCcw size={16} /> {lang === 'el' ? 'ΞΑΝΑΠΑΙΞΕ' : 'PLAY AGAIN'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
