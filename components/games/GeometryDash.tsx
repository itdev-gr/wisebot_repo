
import React, { useRef, useEffect, useState, useCallback } from 'react';
import GameBackButton from './GameBackButton';
import { RotateCcw, Play, Trophy, Zap } from 'lucide-react';
import { useEconomy } from '../../context/EconomyContext';
import { grantGameReward } from './gameRewards';
interface GeometryDashProps {
  lang: 'el' | 'en';
  onBack: () => void;
}

// ─── CONSTANTS ──────────────────────────────────────────────
const GRAVITY = 0.65;
const JUMP_FORCE = -12;
const GAME_SPEED_BASE = 5;
const SPEED_INCREMENT = 0.003;
const GROUND_Y_RATIO = 0.75;
const PLAYER_SIZE = 40;
const GAP_MIN = 160;
const GAP_MAX = 220;
const OBSTACLE_WIDTH = 50;
const STAR_CHANCE = 0.35;
const PARTICLE_COUNT = 8;

// Color themes per "world"
const WORLDS = [
  { bg1: '#0a0a2e', bg2: '#1a0a3e', ground: '#1e1e5e', accent: '#00d4ff', name: 'NEON CITY' },
  { bg1: '#1a0000', bg2: '#2d0a0a', ground: '#4a1010', accent: '#ff4444', name: 'LAVA ZONE' },
  { bg1: '#001a0a', bg2: '#0a2d1a', ground: '#104a2a', accent: '#00ff88', name: 'MATRIX' },
  { bg1: '#1a0a2d', bg2: '#2d0a3d', ground: '#3d104a', accent: '#d44fff', name: 'COSMOS' },
  { bg1: '#2d1a00', bg2: '#3d2a0a', ground: '#4a3a10', accent: '#ffaa00', name: 'DESERT' },
];

interface Obstacle {
  x: number;
  type: 'spike' | 'block' | 'double' | 'moving';
  height: number;
  gapY?: number;   // for moving type
  dir?: number;     // for moving type
  passed: boolean;
}

interface StarItem {
  x: number;
  y: number;
  collected: boolean;
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

export default function GeometryDash({ lang, onBack }: GeometryDashProps) {
  const { earnXp, showNotification } = useEconomy();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // Game state refs (avoid re-renders during gameplay)
  const gameState = useRef({
    status: 'idle' as 'idle' | 'playing' | 'dead',
    playerY: 0,
    playerVY: 0,
    playerRotation: 0,
    playerX: 80,
    groundY: 0,
    speed: GAME_SPEED_BASE,
    distance: 0,
    score: 0,
    stars: 0,
    obstacles: [] as Obstacle[],
    starItems: [] as StarItem[],
    particles: [] as Particle[],
    bgOffset: 0,
    groundOffset: 0,
    worldIndex: 0,
    isOnGround: true,
    jumpsLeft: 2, // double jump
    lastObstacleX: 0,
    frameCount: 0,
    highScore: parseInt(localStorage.getItem('wb_geodash_hi') || '0'),
    heroImg: null as HTMLImageElement | null,
    shakeTimer: 0,
    flashTimer: 0,
    trailPositions: [] as {x: number; y: number; rot: number}[],
  });

  const animFrameRef = useRef<number>(0);
  const [uiState, setUiState] = useState({ status: 'idle' as string, score: 0, stars: 0, highScore: gameState.current.highScore });

  // Load hero image
  useEffect(() => {
    const img = new Image();
    img.src = '/images/crocus.jpg';
    img.onload = () => { gameState.current.heroImg = img; };
  }, []);

  // ─── SPAWN FUNCTIONS ──────────────────────────
  const spawnObstacle = useCallback((gs: typeof gameState.current, canvasW: number) => {
    const types: Obstacle['type'][] = ['spike', 'block', 'spike', 'double'];
    if (gs.distance > 500) types.push('moving');
    const type = types[Math.floor(Math.random() * types.length)];
    const baseH = 40 + Math.random() * 60;
    const ob: Obstacle = {
      x: canvasW + 50,
      type,
      height: type === 'double' ? 30 + Math.random() * 30 : baseH,
      passed: false,
    };
    if (type === 'moving') {
      ob.gapY = gs.groundY - 100 - Math.random() * 100;
      ob.dir = 1;
    }
    gs.obstacles.push(ob);

    // Maybe spawn a star
    if (Math.random() < STAR_CHANCE) {
      gs.starItems.push({
        x: canvasW + 50 + Math.random() * 100,
        y: gs.groundY - 80 - Math.random() * 120,
        collected: false,
      });
    }

    gs.lastObstacleX = canvasW + 50;
  }, []);

  const spawnParticles = useCallback((x: number, y: number, color: string, count = PARTICLE_COUNT) => {
    const gs = gameState.current;
    for (let i = 0; i < count; i++) {
      gs.particles.push({
        x, y,
        vx: (Math.random() - 0.5) * 8,
        vy: (Math.random() - 0.5) * 8 - 3,
        life: 1,
        color,
        size: 3 + Math.random() * 4,
      });
    }
  }, []);

  // ─── GAME LOOP ─────────────────────────────────
  const gameLoop = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const gs = gameState.current;
    const W = canvas.width;
    const H = canvas.height;
    gs.groundY = H * GROUND_Y_RATIO;

    const world = WORLDS[gs.worldIndex % WORLDS.length];

    if (gs.status === 'playing') {
      gs.frameCount++;

      // ─── PHYSICS ─────────────
      gs.speed = GAME_SPEED_BASE + gs.distance * SPEED_INCREMENT;
      gs.distance += gs.speed * 0.1;
      gs.bgOffset = (gs.bgOffset + gs.speed * 0.3) % W;
      gs.groundOffset = (gs.groundOffset + gs.speed) % 40;

      // World changes every 300 distance
      gs.worldIndex = Math.floor(gs.distance / 300);

      // Player physics
      gs.playerVY += GRAVITY;
      gs.playerY += gs.playerVY;

      // Ground collision
      if (gs.playerY + PLAYER_SIZE >= gs.groundY) {
        gs.playerY = gs.groundY - PLAYER_SIZE;
        gs.playerVY = 0;
        gs.isOnGround = true;
        gs.jumpsLeft = 2;
      } else {
        gs.isOnGround = false;
      }

      // Rotation (spin when in air)
      if (!gs.isOnGround) {
        gs.playerRotation += 5;
      } else {
        // Snap to nearest 90 degrees
        gs.playerRotation = Math.round(gs.playerRotation / 90) * 90;
      }

      // Trail
      gs.trailPositions.unshift({ x: gs.playerX, y: gs.playerY, rot: gs.playerRotation });
      if (gs.trailPositions.length > 6) gs.trailPositions.pop();

      // Ground particles
      if (gs.isOnGround && gs.frameCount % 3 === 0) {
        gs.particles.push({
          x: gs.playerX, y: gs.groundY,
          vx: -gs.speed * 0.3 + (Math.random() - 0.5) * 2,
          vy: -Math.random() * 3 - 1,
          life: 0.6, color: world.accent, size: 2 + Math.random() * 2,
        });
      }

      // ─── OBSTACLES ─────────────
      // Spawn
      const gap = GAP_MIN + Math.random() * (GAP_MAX - GAP_MIN) - gs.distance * 0.05;
      if (gs.obstacles.length === 0 || gs.lastObstacleX < W - Math.max(gap, 120)) {
        spawnObstacle(gs, W);
      }

      // Move & check collision
      gs.obstacles.forEach(ob => {
        ob.x -= gs.speed;
        if (ob.type === 'moving' && ob.gapY !== undefined) {
          ob.gapY += (ob.dir || 1) * 1.5;
          if (ob.gapY < gs.groundY - 200) ob.dir = 1;
          if (ob.gapY > gs.groundY - 40) ob.dir = -1;
        }

        // Score
        if (!ob.passed && ob.x + OBSTACLE_WIDTH < gs.playerX) {
          ob.passed = true;
          gs.score++;
        }

        // Collision detection
        const px = gs.playerX;
        const py = gs.playerY;
        const ps = PLAYER_SIZE * 0.7; // hitbox slightly smaller than visual
        let hit = false;

        if (ob.type === 'spike' || ob.type === 'block' || ob.type === 'double') {
          const obTop = gs.groundY - ob.height;
          if (px + ps > ob.x && px < ob.x + OBSTACLE_WIDTH && py + ps > obTop && py < gs.groundY) {
            hit = true;
          }
          // Second obstacle for double
          if (ob.type === 'double') {
            const ob2Top = gs.groundY - ob.height - 80;
            const ob2Bot = ob2Top + 35;
            if (px + ps > ob.x + 25 && px < ob.x + 25 + OBSTACLE_WIDTH && py + ps > ob2Top && py < ob2Bot) {
              hit = true;
            }
          }
        } else if (ob.type === 'moving' && ob.gapY !== undefined) {
          const obY = ob.gapY;
          if (px + ps > ob.x && px < ob.x + OBSTACLE_WIDTH && py + ps > obY && py < obY + ob.height) {
            hit = true;
          }
        }

        if (hit && gs.status === 'playing') {
          gs.status = 'dead';
          gs.shakeTimer = 15;
          gs.flashTimer = 10;
          spawnParticles(px + PLAYER_SIZE / 2, py + PLAYER_SIZE / 2, '#ff4444', 20);

          // High score
          const totalScore = gs.score + gs.stars * 5;
          if (totalScore > gs.highScore) {
            gs.highScore = totalScore;
            localStorage.setItem('wb_geodash_hi', totalScore.toString());
          }

          grantGameReward('geodash', totalScore >= 25 ? 3 : totalScore >= 12 ? 2 : totalScore >= 5 ? 1 : 0, earnXp, showNotification, lang);

          setUiState({ status: 'dead', score: gs.score, stars: gs.stars, highScore: gs.highScore });
        }
      });

      // Clean up off-screen
      gs.obstacles = gs.obstacles.filter(ob => ob.x > -100);

      // ─── STARS ─────────────
      gs.starItems.forEach(star => {
        star.x -= gs.speed;
        if (!star.collected) {
          const dx = (gs.playerX + PLAYER_SIZE / 2) - star.x;
          const dy = (gs.playerY + PLAYER_SIZE / 2) - star.y;
          if (Math.sqrt(dx * dx + dy * dy) < 30) {
            star.collected = true;
            gs.stars++;
            spawnParticles(star.x, star.y, '#ffd700', 12);
          }
        }
      });
      gs.starItems = gs.starItems.filter(s => s.x > -50);

      // ─── PARTICLES ─────────
      gs.particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.15;
        p.life -= 0.025;
      });
      gs.particles = gs.particles.filter(p => p.life > 0);

      // Update score
      if (gs.frameCount % 10 === 0) {
        setUiState({ status: 'playing', score: gs.score, stars: gs.stars, highScore: gs.highScore });
      }
    }

    // Shake effect
    let shakeX = 0, shakeY = 0;
    if (gs.shakeTimer > 0) {
      gs.shakeTimer--;
      shakeX = (Math.random() - 0.5) * gs.shakeTimer * 1.5;
      shakeY = (Math.random() - 0.5) * gs.shakeTimer * 1.5;
    }

    ctx.save();
    ctx.translate(shakeX, shakeY);

    // ─── RENDER ──────────────────────────────────
    // Background gradient
    const bgGrad = ctx.createLinearGradient(0, 0, 0, H);
    bgGrad.addColorStop(0, world.bg1);
    bgGrad.addColorStop(1, world.bg2);
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, W, H);

    // Background grid (scrolling)
    ctx.strokeStyle = world.accent + '15';
    ctx.lineWidth = 1;
    const gridSize = 60;
    for (let x = -gs.bgOffset % gridSize; x < W; x += gridSize) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
    }
    for (let y = 0; y < H; y += gridSize) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
    }

    // Background mountains
    ctx.fillStyle = world.accent + '08';
    ctx.beginPath();
    ctx.moveTo(0, gs.groundY);
    for (let x = 0; x < W; x += 30) {
      const mountainH = Math.sin((x + gs.bgOffset * 0.5) * 0.01) * 80 + Math.sin((x + gs.bgOffset * 0.3) * 0.025) * 40;
      ctx.lineTo(x, gs.groundY - 100 - mountainH);
    }
    ctx.lineTo(W, gs.groundY);
    ctx.closePath();
    ctx.fill();

    // Ground
    const groundGrad = ctx.createLinearGradient(0, gs.groundY, 0, H);
    groundGrad.addColorStop(0, world.ground);
    groundGrad.addColorStop(1, world.bg2);
    ctx.fillStyle = groundGrad;
    ctx.fillRect(0, gs.groundY, W, H - gs.groundY);

    // Ground line (glowing)
    ctx.shadowColor = world.accent;
    ctx.shadowBlur = 15;
    ctx.strokeStyle = world.accent;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(0, gs.groundY);
    ctx.lineTo(W, gs.groundY);
    ctx.stroke();
    ctx.shadowBlur = 0;

    // Ground dashes
    ctx.strokeStyle = world.accent + '40';
    ctx.lineWidth = 1;
    for (let x = -gs.groundOffset; x < W; x += 40) {
      ctx.beginPath();
      ctx.moveTo(x, gs.groundY + 10);
      ctx.lineTo(x + 20, gs.groundY + 10);
      ctx.stroke();
    }

    // ─── OBSTACLES ─────────────
    gs.obstacles.forEach(ob => {
      const obTop = ob.type === 'moving' && ob.gapY !== undefined ? ob.gapY : gs.groundY - ob.height;

      ctx.save();
      if (ob.type === 'spike') {
        // Triangle spike
        ctx.fillStyle = world.accent;
        ctx.shadowColor = world.accent;
        ctx.shadowBlur = 20;
        ctx.beginPath();
        ctx.moveTo(ob.x + OBSTACLE_WIDTH / 2, obTop - 10);
        ctx.lineTo(ob.x + OBSTACLE_WIDTH, gs.groundY);
        ctx.lineTo(ob.x, gs.groundY);
        ctx.closePath();
        ctx.fill();

        // Inner triangle
        ctx.fillStyle = world.bg1;
        ctx.beginPath();
        ctx.moveTo(ob.x + OBSTACLE_WIDTH / 2, obTop + 10);
        ctx.lineTo(ob.x + OBSTACLE_WIDTH - 8, gs.groundY - 5);
        ctx.lineTo(ob.x + 8, gs.groundY - 5);
        ctx.closePath();
        ctx.fill();
      } else if (ob.type === 'block') {
        // Glowing block
        ctx.fillStyle = world.accent + 'cc';
        ctx.shadowColor = world.accent;
        ctx.shadowBlur = 15;
        ctx.fillRect(ob.x, obTop, OBSTACLE_WIDTH, ob.height);
        // Inner
        ctx.fillStyle = world.bg1 + 'dd';
        ctx.fillRect(ob.x + 5, obTop + 5, OBSTACLE_WIDTH - 10, ob.height - 10);
        // Cross pattern
        ctx.strokeStyle = world.accent + '60';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(ob.x, obTop); ctx.lineTo(ob.x + OBSTACLE_WIDTH, obTop + ob.height);
        ctx.moveTo(ob.x + OBSTACLE_WIDTH, obTop); ctx.lineTo(ob.x, obTop + ob.height);
        ctx.stroke();
      } else if (ob.type === 'double') {
        // Ground spike
        ctx.fillStyle = world.accent;
        ctx.shadowColor = world.accent;
        ctx.shadowBlur = 15;
        ctx.beginPath();
        ctx.moveTo(ob.x + OBSTACLE_WIDTH / 2, obTop - 5);
        ctx.lineTo(ob.x + OBSTACLE_WIDTH, gs.groundY);
        ctx.lineTo(ob.x, gs.groundY);
        ctx.closePath();
        ctx.fill();
        // Floating block
        const fb = gs.groundY - ob.height - 80;
        ctx.fillStyle = world.accent + 'aa';
        ctx.fillRect(ob.x + 15, fb, OBSTACLE_WIDTH + 10, 30);
        ctx.fillStyle = world.bg1 + 'cc';
        ctx.fillRect(ob.x + 19, fb + 4, OBSTACLE_WIDTH + 2, 22);
      } else if (ob.type === 'moving') {
        // Moving obstacle
        ctx.fillStyle = world.accent + 'dd';
        ctx.shadowColor = world.accent;
        ctx.shadowBlur = 20;
        const my = ob.gapY || obTop;
        ctx.fillRect(ob.x, my, OBSTACLE_WIDTH, ob.height);
        ctx.fillStyle = world.bg1 + 'bb';
        ctx.fillRect(ob.x + 4, my + 4, OBSTACLE_WIDTH - 8, ob.height - 8);
        // Arrow
        ctx.fillStyle = world.accent;
        const arrowDir = ob.dir || 1;
        ctx.beginPath();
        ctx.moveTo(ob.x + OBSTACLE_WIDTH / 2, my + (arrowDir > 0 ? ob.height + 5 : -5));
        ctx.lineTo(ob.x + 10, my + ob.height / 2);
        ctx.lineTo(ob.x + OBSTACLE_WIDTH - 10, my + ob.height / 2);
        ctx.closePath();
        ctx.fill();
      }
      ctx.restore();
    });

    // ─── STARS ─────────────
    gs.starItems.forEach(star => {
      if (star.collected) return;
      ctx.save();
      ctx.translate(star.x, star.y);
      const pulse = Math.sin(gs.frameCount * 0.1) * 3;
      ctx.shadowColor = '#ffd700';
      ctx.shadowBlur = 15 + pulse;
      ctx.fillStyle = '#ffd700';
      // Star shape
      ctx.beginPath();
      for (let i = 0; i < 5; i++) {
        const angle = (i * 72 - 90) * Math.PI / 180;
        const r = 12 + pulse;
        ctx.lineTo(Math.cos(angle) * r, Math.sin(angle) * r);
        const angle2 = ((i * 72) + 36 - 90) * Math.PI / 180;
        ctx.lineTo(Math.cos(angle2) * r * 0.4, Math.sin(angle2) * r * 0.4);
      }
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    });

    // ─── PARTICLES ─────────
    gs.particles.forEach(p => {
      ctx.globalAlpha = p.life;
      ctx.fillStyle = p.color;
      ctx.shadowColor = p.color;
      ctx.shadowBlur = 5;
      ctx.fillRect(p.x - p.size / 2, p.y - p.size / 2, p.size, p.size);
    });
    ctx.globalAlpha = 1;
    ctx.shadowBlur = 0;

    // ─── PLAYER ─────────────
    if (gs.status !== 'idle') {
      // Trail
      gs.trailPositions.forEach((tp, i) => {
        const alpha = (1 - i / gs.trailPositions.length) * 0.2;
        ctx.save();
        ctx.translate(tp.x + PLAYER_SIZE / 2, tp.y + PLAYER_SIZE / 2);
        ctx.rotate(tp.rot * Math.PI / 180);
        ctx.globalAlpha = alpha;
        ctx.fillStyle = world.accent;
        ctx.fillRect(-PLAYER_SIZE / 2, -PLAYER_SIZE / 2, PLAYER_SIZE, PLAYER_SIZE);
        ctx.restore();
      });
      ctx.globalAlpha = 1;

      // Player cube
      ctx.save();
      ctx.translate(gs.playerX + PLAYER_SIZE / 2, gs.playerY + PLAYER_SIZE / 2);
      ctx.rotate(gs.playerRotation * Math.PI / 180);

      // Glow
      ctx.shadowColor = world.accent;
      ctx.shadowBlur = 25;

      // Outer cube
      ctx.fillStyle = world.accent;
      ctx.fillRect(-PLAYER_SIZE / 2, -PLAYER_SIZE / 2, PLAYER_SIZE, PLAYER_SIZE);

      // Hero image inside
      if (gs.heroImg) {
        ctx.save();
        ctx.beginPath();
        ctx.rect(-PLAYER_SIZE / 2 + 4, -PLAYER_SIZE / 2 + 4, PLAYER_SIZE - 8, PLAYER_SIZE - 8);
        ctx.clip();
        ctx.drawImage(gs.heroImg, -PLAYER_SIZE / 2 + 4, -PLAYER_SIZE / 2 + 4, PLAYER_SIZE - 8, PLAYER_SIZE - 8);
        ctx.restore();
      } else {
        ctx.fillStyle = world.bg1;
        ctx.fillRect(-PLAYER_SIZE / 2 + 4, -PLAYER_SIZE / 2 + 4, PLAYER_SIZE - 8, PLAYER_SIZE - 8);
      }

      // Border highlight
      ctx.strokeStyle = '#ffffff50';
      ctx.lineWidth = 2;
      ctx.strokeRect(-PLAYER_SIZE / 2, -PLAYER_SIZE / 2, PLAYER_SIZE, PLAYER_SIZE);

      ctx.restore();
    }

    // Flash on death
    if (gs.flashTimer > 0) {
      gs.flashTimer--;
      ctx.fillStyle = `rgba(255, 50, 50, ${gs.flashTimer / 10 * 0.3})`;
      ctx.fillRect(0, 0, W, H);
    }

    // ─── HUD (in-game) ─────────
    if (gs.status === 'playing') {
      // World name
      const wName = WORLDS[gs.worldIndex % WORLDS.length].name;
      ctx.fillStyle = world.accent + '60';
      ctx.font = '10px monospace';
      ctx.textAlign = 'right';
      ctx.fillText(wName, W - 15, 20);

      // Progress bar for next world
      const progress = (gs.distance % 300) / 300;
      ctx.fillStyle = world.accent + '20';
      ctx.fillRect(W - 110, 25, 100, 4);
      ctx.fillStyle = world.accent;
      ctx.fillRect(W - 110, 25, progress * 100, 4);
    }

    ctx.restore();

    animFrameRef.current = requestAnimationFrame(gameLoop);
  }, [spawnObstacle, spawnParticles, earnXp, showNotification, lang]);

  // ─── START / RESET ─────────────────────────────
  const startGame = useCallback(() => {
    const gs = gameState.current;
    const canvas = canvasRef.current;
    if (!canvas) return;

    gs.status = 'playing';
    gs.playerY = canvas.height * GROUND_Y_RATIO - PLAYER_SIZE;
    gs.playerVY = 0;
    gs.playerRotation = 0;
    gs.speed = GAME_SPEED_BASE;
    gs.distance = 0;
    gs.score = 0;
    gs.stars = 0;
    gs.obstacles = [];
    gs.starItems = [];
    gs.particles = [];
    gs.bgOffset = 0;
    gs.groundOffset = 0;
    gs.worldIndex = 0;
    gs.isOnGround = true;
    gs.jumpsLeft = 2;
    gs.lastObstacleX = 0;
    gs.frameCount = 0;
    gs.shakeTimer = 0;
    gs.flashTimer = 0;
    gs.trailPositions = [];

    setUiState({ status: 'playing', score: 0, stars: 0, highScore: gs.highScore });
  }, []);

  const jump = useCallback(() => {
    const gs = gameState.current;
    if (gs.status === 'dead') {
      startGame();
      return;
    }
    if (gs.status === 'idle') {
      startGame();
      return;
    }
    if (gs.jumpsLeft > 0) {
      gs.playerVY = JUMP_FORCE;
      gs.jumpsLeft--;
      gs.isOnGround = false;
      const world = WORLDS[gs.worldIndex % WORLDS.length];
      spawnParticles(gs.playerX + PLAYER_SIZE / 2, gs.playerY + PLAYER_SIZE, world.accent, 5);
    }
  }, [startGame, spawnParticles]);

  // ─── INPUT HANDLERS ─────────────────────────────
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.code === 'Space' || e.code === 'ArrowUp' || e.code === 'KeyW') {
        e.preventDefault();
        jump();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [jump]);

  // Canvas resize
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
      gameState.current.groundY = canvas.height * GROUND_Y_RATIO;
      if (gameState.current.status === 'idle') {
        gameState.current.playerY = canvas.height * GROUND_Y_RATIO - PLAYER_SIZE;
      }
    };

    resize();
    window.addEventListener('resize', resize);

    // Start render loop
    animFrameRef.current = requestAnimationFrame(gameLoop);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animFrameRef.current);
    };
  }, [gameLoop]);

  const totalScore = uiState.score + uiState.stars * 5;
  const world = WORLDS[(gameState.current.worldIndex || 0) % WORLDS.length];

  return (
    <div className="flex flex-col h-full w-full bg-[#0B0F1A] select-none">
      {/* HEADER BAR */}
      <div className="flex items-center justify-between px-4 py-2 bg-black/60 backdrop-blur-md border-b border-white/10 z-20 relative">
        <GameBackButton onClick={onBack} lang={lang} />

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <span className="text-yellow-400 text-lg">⭐</span>
            <span className="text-white font-[900] text-sm">{uiState.stars}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Trophy size={16} className="text-amber-400" />
            <span className="text-white font-[900] text-sm">{uiState.score}</span>
          </div>
          <div className="text-white/30 text-[10px] font-bold">
            HI: {uiState.highScore}
          </div>
        </div>
      </div>

      {/* CANVAS */}
      <div className="flex-1 relative overflow-hidden" onPointerDown={jump}>
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

        {/* IDLE SCREEN */}
        {uiState.status === 'idle' && (
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10 bg-black/40 backdrop-blur-sm">
            <div className="text-center space-y-4">
              <h1 className="text-4xl md:text-6xl font-[1000] uppercase italic tracking-tighter text-white drop-shadow-[0_0_30px_rgba(0,212,255,0.5)]">
                GEOMETRY <span className="text-cyan-400">DASH</span>
              </h1>
              <p className="text-white/50 text-sm font-bold uppercase tracking-widest">
                {lang === 'el' ? 'Πάτα για να ξεκινήσεις!' : 'Tap to start!'}
              </p>
              <div className="flex items-center justify-center gap-2 text-cyan-400/60 text-xs">
                <span>SPACE / TAP = JUMP</span>
                <span>•</span>
                <span>DOUBLE JUMP ✓</span>
              </div>
              <div className="mt-6 animate-bounce">
                <Play size={48} className="text-cyan-400 mx-auto" fill="currentColor" />
              </div>
            </div>
          </div>
        )}

        {/* DEATH SCREEN */}
        {uiState.status === 'dead' && (
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10 bg-black/60 backdrop-blur-md animate-in fade-in duration-300">
            <div className="text-center space-y-4 bg-white/5 rounded-3xl p-8 border border-white/10 backdrop-blur-xl max-w-sm mx-4">
              <div className="text-5xl">💀</div>
              <h2 className="text-2xl font-[1000] text-white uppercase italic">GAME OVER</h2>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-white/60">
                  <span className="text-sm">{lang === 'el' ? 'Σκόρ' : 'Score'}</span>
                  <span className="text-white font-[900] text-lg">{uiState.score}</span>
                </div>
                <div className="flex items-center justify-between text-white/60">
                  <span className="text-sm">⭐ Stars</span>
                  <span className="text-yellow-400 font-[900] text-lg">{uiState.stars}</span>
                </div>
                <div className="h-px bg-white/10 my-2" />
                <div className="flex items-center justify-between">
                  <span className="text-white/60 text-sm">Total</span>
                  <span className="text-cyan-400 font-[900] text-xl">{totalScore}</span>
                </div>
                {totalScore >= 50 && (
                  <div className="flex items-center justify-center gap-1 text-emerald-400 text-sm font-bold mt-2">
                    <Zap size={14} /> +5 Credits!
                  </div>
                )}
              </div>
              <button
                onClick={startGame}
                className="w-full py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-[900] text-sm uppercase rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                <RotateCcw size={16} />
                {lang === 'el' ? 'ΞΑΝΑΠΑΙΞΕ' : 'PLAY AGAIN'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
