
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useEconomy } from '../../context/EconomyContext';
import { ArrowLeft, RefreshCcw, Crown, Play, Trophy, Zap, Flame } from 'lucide-react';

// --- CONFIGURATION ---
const GRAVITY = 0.55;
const FRICTION = 0.98;
const BOUNCE = 0.3;
const GAME_WIDTH = 400;
const GAME_HEIGHT = 600;
const SPAWN_Y = 50;
const DANGER_Y = 90;

// THE HERO EVOLUTION CHAIN — ALL HEROES:
const LEVELS = [
  { id: 0, name: 'WISEBOT',     radius: 18, color: '#8B5CF6', glow: 'rgba(139,92,246,0.8)',  icon: '🦉', score: 2,   img: "/images/wisebot.jpg" },
  { id: 1, name: 'CROCUS',      radius: 26, color: '#10B981', glow: 'rgba(16,185,129,0.8)',   icon: '🐊', score: 4,   img: "/images/crocus.jpg" },
  { id: 2, name: 'PENCILO',     radius: 36, color: '#F59E0B', glow: 'rgba(245,158,11,0.8)',   icon: '🦔', score: 8,   img: "/images/pencilo.jpg" },
  { id: 3, name: 'LINK',        radius: 48, color: '#3B82F6', glow: 'rgba(59,130,246,0.9)',   icon: '🐭', score: 16,  img: "/images/link.jpg" },
  { id: 4, name: 'SPARKEN',     radius: 60, color: '#EF4444', glow: 'rgba(239,68,68,0.9)',    icon: '🦅', score: 32,  img: "/images/sparken.jpg" },
  { id: 5, name: 'MEGA WISEBOT',radius: 75, color: '#A855F7', glow: 'rgba(168,85,247,0.9)',   icon: '🦉', score: 64,  img: "/images/wisebot.jpg" },
  { id: 6, name: 'MEGA CROCUS', radius: 90, color: '#059669', glow: 'rgba(5,150,105,0.9)',    icon: '🐊', score: 128, img: "/images/crocus.jpg" },
  { id: 7, name: 'MEGA SPARKEN',radius: 115,color: '#DC2626', glow: 'rgba(220,38,38,1)',      icon: '🦅', score: 256, img: "/images/sparken.jpg" }
];

interface Ball {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  level: number;
  radius: number;
  settled: boolean; // has it touched the floor/other balls
}

interface Particle {
  x: number; y: number;
  vx: number; vy: number;
  life: number;
  color: string;
  size: number;
  type: 'spark' | 'ring' | 'score';
  text?: string;
  scale?: number;
}

interface HeroFusionProps {
  lang: 'el' | 'en';
  onBack: () => void;
}

export default function HeroFusion({ lang, onBack }: HeroFusionProps) {
  const { earnCredits } = useEconomy();
  const creditsAwardedRef = useRef(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Game State stored in Refs for performance
  const stateRef = useRef({
    balls: [] as Ball[],
    nextLevel: 0,
    score: 0,
    gameOver: false,
    canDrop: true,
    mouseX: GAME_WIDTH / 2,
    running: false,
    combo: 0,
    comboTimer: 0,
    highestLevel: 0,
    shakeX: 0,
    shakeY: 0,
    shakeIntensity: 0,
    frameCount: 0,
    bgHue: 220,
  });

  const requestRef = useRef<number | null>(null);
  const particlesRef = useRef<Particle[]>([]);

  // UI State
  const [uiScore, setUiScore] = useState(0);
  const [uiBest, setUiBest] = useState(0);
  const [uiNextLevel, setUiNextLevel] = useState(0);
  const [uiCombo, setUiCombo] = useState(0);
  const [uiHighestLevel, setUiHighestLevel] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  // Images Cache
  const imagesRef = useRef<Record<number, HTMLImageElement>>({});

  useEffect(() => {
    // Load Images
    LEVELS.forEach(lvl => {
      if (lvl.img) {
        const img = new Image();
        img.src = lvl.img;
        imagesRef.current[lvl.id] = img;
      }
    });

    // Load High Score
    const savedBest = localStorage.getItem('hero_fusion_best');
    if (savedBest) setUiBest(parseInt(savedBest));

    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  const spawnMergeParticles = (x: number, y: number, color: string, scoreText: string, level: number) => {
    // Ring particles (expand outward)
    const ringCount = 8 + level * 2;
    for (let i = 0; i < ringCount; i++) {
      const angle = (Math.PI * 2 * i) / ringCount;
      const speed = 3 + Math.random() * 4 + level * 0.5;
      particlesRef.current.push({
        x, y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 1,
        color,
        size: 3 + Math.random() * 3,
        type: 'spark',
      });
    }

    // Score float
    particlesRef.current.push({
      x, y: y - 20,
      vx: 0, vy: -2,
      life: 1.5,
      color: '#FFF',
      size: 16 + level * 2,
      type: 'score',
      text: `+${scoreText}`,
      scale: 1.5,
    });

    // Shockwave ring
    particlesRef.current.push({
      x, y,
      vx: 0, vy: 0,
      life: 1,
      color,
      size: 5,
      type: 'ring',
      scale: 0,
    });
  };

  const triggerScreenShake = (intensity: number) => {
    stateRef.current.shakeIntensity = intensity;
  };

  const initGame = () => {
    stateRef.current = {
      balls: [],
      nextLevel: 0,
      score: 0,
      gameOver: false,
      canDrop: true,
      mouseX: GAME_WIDTH / 2,
      running: true,
      combo: 0,
      comboTimer: 0,
      highestLevel: 0,
      shakeX: 0,
      shakeY: 0,
      shakeIntensity: 0,
      frameCount: 0,
      bgHue: 220,
    };
    particlesRef.current = [];
    setUiScore(0);
    setUiNextLevel(0);
    setUiCombo(0);
    setUiHighestLevel(0);
    setIsGameOver(false);
    setHasStarted(true);
    creditsAwardedRef.current = false;

    if (requestRef.current) cancelAnimationFrame(requestRef.current);
    loop();
  };

  const loop = () => {
    if (!stateRef.current.running) return;

    update();
    draw();

    if (stateRef.current.gameOver) {
      handleGameOver();
    } else {
      requestRef.current = requestAnimationFrame(loop);
    }
  };

  const handleGameOver = () => {
    stateRef.current.running = false;
    setIsGameOver(true);

    const currentBest = parseInt(localStorage.getItem('hero_fusion_best') || '0');
    if (stateRef.current.score > currentBest) {
      localStorage.setItem('hero_fusion_best', stateRef.current.score.toString());
      setUiBest(stateRef.current.score);
    }
    if (stateRef.current.score > 200 && !creditsAwardedRef.current) {
      creditsAwardedRef.current = true;
      earnCredits(5);
    }
  };

  const update = () => {
    const state = stateRef.current;
    const balls = state.balls;
    state.frameCount++;

    // Screen shake decay
    if (state.shakeIntensity > 0) {
      state.shakeX = (Math.random() - 0.5) * state.shakeIntensity;
      state.shakeY = (Math.random() - 0.5) * state.shakeIntensity;
      state.shakeIntensity *= 0.85;
      if (state.shakeIntensity < 0.5) {
        state.shakeIntensity = 0;
        state.shakeX = 0;
        state.shakeY = 0;
      }
    }

    // Combo timer
    if (state.comboTimer > 0) {
      state.comboTimer--;
      if (state.comboTimer <= 0) {
        state.combo = 0;
        setUiCombo(0);
      }
    }

    // Background hue shift based on score
    state.bgHue = 220 + (state.score / 50) * 10;

    // 1. Physics
    for (let i = 0; i < balls.length; i++) {
      const b = balls[i];
      b.vy += GRAVITY;
      b.vx *= FRICTION;
      b.vy *= FRICTION;

      // Max Speed Cap
      const maxSpd = 15;
      b.vx = Math.max(-maxSpd, Math.min(maxSpd, b.vx));
      b.vy = Math.max(-maxSpd, Math.min(maxSpd, b.vy));

      b.x += b.vx;
      b.y += b.vy;

      // Walls
      if (b.x - b.radius < 0) { b.x = b.radius; b.vx *= -0.5; }
      if (b.x + b.radius > GAME_WIDTH) { b.x = GAME_WIDTH - b.radius; b.vx *= -0.5; }

      // Floor
      if (b.y + b.radius > GAME_HEIGHT) {
        b.y = GAME_HEIGHT - b.radius;
        b.vy *= -BOUNCE;
        if (Math.abs(b.vy) < 1) b.vy = 0;
        b.settled = true;
      }
    }

    // 2. Collisions & Merging
    let mergedThisFrame = false;
    for (let i = 0; i < balls.length; i++) {
      for (let j = i + 1; j < balls.length; j++) {
        const b1 = balls[i];
        const b2 = balls[j];

        const dx = b2.x - b1.x;
        const dy = b2.y - b1.y;
        const distSq = dx * dx + dy * dy;
        const minDist = b1.radius + b2.radius;

        if (distSq < minDist * minDist) {
          // Check Merge
          if (b1.level === b2.level && b1.level < LEVELS.length - 1) {
            // MERGE!
            const newLvl = b1.level + 1;
            const midX = (b1.x + b2.x) / 2;
            const midY = (b1.y + b2.y) / 2;

            const newBall: Ball = {
              id: Math.random(),
              x: midX, y: midY,
              vx: 0, vy: -2, // slight upward pop
              level: newLvl,
              radius: LEVELS[newLvl].radius,
              settled: false,
            };

            // Combo!
            state.combo++;
            state.comboTimer = 90; // ~1.5 seconds at 60fps
            setUiCombo(state.combo);

            const comboMultiplier = Math.min(state.combo, 5);
            const points = LEVELS[newLvl].score * comboMultiplier;
            state.score += points;
            setUiScore(state.score);

            // Track highest level
            if (newLvl > state.highestLevel) {
              state.highestLevel = newLvl;
              setUiHighestLevel(newLvl);
            }

            // Visual effects!
            spawnMergeParticles(midX, midY, LEVELS[newLvl].color,
              comboMultiplier > 1 ? `${LEVELS[newLvl].score}×${comboMultiplier}` : `${points}`,
              newLvl
            );
            triggerScreenShake(4 + newLvl * 2);

            balls.splice(j, 1);
            balls.splice(i, 1);
            balls.push(newBall);
            mergedThisFrame = true;
            i--;
            break;
          } else {
            // COLLISION RESPONSE
            const dist = Math.sqrt(distSq) || 1;
            const nx = dx / dist;
            const ny = dy / dist;
            const overlap = minDist - dist;

            const totalMass = b1.radius + b2.radius;
            const m1 = b1.radius / totalMass;
            const m2 = b2.radius / totalMass;

            b1.x -= nx * overlap * (1 - m1);
            b1.y -= ny * overlap * (1 - m1);
            b2.x += nx * overlap * (1 - m2);
            b2.y += ny * overlap * (1 - m2);

            const dvx = b2.vx - b1.vx;
            const dvy = b2.vy - b1.vy;
            const velAlongNormal = dvx * nx + dvy * ny;

            if (velAlongNormal < 0) {
              const impulse = -(1 + BOUNCE) * velAlongNormal;
              b1.vx -= impulse * nx * (1 - m1);
              b1.vy -= impulse * ny * (1 - m1);
              b2.vx += impulse * nx * (1 - m2);
              b2.vy += impulse * ny * (1 - m2);
            }

            b1.settled = true;
            b2.settled = true;
          }
        }
      }
    }

    // 3. Game Over Check
    for (const b of balls) {
      if (b.y - b.radius < DANGER_Y && b.settled && Math.abs(b.vy) < 0.3 && Math.abs(b.vx) < 0.3 && balls.length > 2) {
        state.gameOver = true;
      }
    }

    // 4. Update particles
    particlesRef.current = particlesRef.current.filter(p => {
      if (p.type === 'spark') {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.15;
        p.life -= 0.025;
        p.size *= 0.97;
      } else if (p.type === 'score') {
        p.y += p.vy;
        p.vy *= 0.95;
        p.life -= 0.02;
        if (p.scale && p.scale > 1) p.scale *= 0.95;
      } else if (p.type === 'ring') {
        p.life -= 0.04;
        if (p.scale !== undefined) p.scale += 3;
      }
      return p.life > 0;
    });
  };

  const draw = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const state = stateRef.current;

    ctx.save();

    // Screen shake
    if (state.shakeIntensity > 0) {
      ctx.translate(state.shakeX, state.shakeY);
    }

    // Clear with gradient background
    const bgGrad = ctx.createLinearGradient(0, 0, 0, GAME_HEIGHT);
    const hue = state.bgHue % 360;
    bgGrad.addColorStop(0, `hsl(${hue}, 30%, 5%)`);
    bgGrad.addColorStop(0.5, `hsl(${hue + 20}, 25%, 8%)`);
    bgGrad.addColorStop(1, `hsl(${hue}, 30%, 3%)`);
    ctx.fillStyle = bgGrad;
    ctx.fillRect(-10, -10, GAME_WIDTH + 20, GAME_HEIGHT + 20);

    // Grid background
    ctx.strokeStyle = 'rgba(255,255,255,0.02)';
    ctx.lineWidth = 1;
    for (let x = 0; x < GAME_WIDTH; x += 40) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, GAME_HEIGHT); ctx.stroke();
    }
    for (let y = 0; y < GAME_HEIGHT; y += 40) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(GAME_WIDTH, y); ctx.stroke();
    }

    // DANGER LINE with glow
    const dangerPulse = 0.3 + Math.sin(state.frameCount * 0.05) * 0.15;
    ctx.shadowColor = 'rgba(239, 68, 68, 0.6)';
    ctx.shadowBlur = 10;
    ctx.beginPath();
    ctx.moveTo(0, DANGER_Y);
    ctx.lineTo(GAME_WIDTH, DANGER_Y);
    ctx.strokeStyle = `rgba(239, 68, 68, ${dangerPulse})`;
    ctx.setLineDash([8, 8]);
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.shadowBlur = 0;

    // DANGER zone gradient
    const dangerGrad = ctx.createLinearGradient(0, 0, 0, DANGER_Y);
    dangerGrad.addColorStop(0, `rgba(239, 68, 68, ${dangerPulse * 0.15})`);
    dangerGrad.addColorStop(1, 'transparent');
    ctx.fillStyle = dangerGrad;
    ctx.fillRect(0, 0, GAME_WIDTH, DANGER_Y);

    // GUIDE LINE
    if (state.canDrop && !state.gameOver) {
      const mx = state.mouseX;
      ctx.beginPath();
      ctx.moveTo(mx, SPAWN_Y);
      ctx.lineTo(mx, GAME_HEIGHT);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
      ctx.setLineDash([4, 8]);
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.setLineDash([]);

      // Preview Ball at top with glow
      const nextInfo = LEVELS[state.nextLevel];
      ctx.shadowColor = nextInfo.glow;
      ctx.shadowBlur = 15;
      ctx.beginPath();
      ctx.arc(mx, SPAWN_Y, nextInfo.radius, 0, Math.PI * 2);
      ctx.fillStyle = nextInfo.color;
      ctx.globalAlpha = 0.5;
      ctx.fill();
      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;

      // Preview icon
      ctx.font = `${nextInfo.radius * 0.8}px Arial`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.globalAlpha = 0.6;
      ctx.fillText(nextInfo.icon, mx, SPAWN_Y);
      ctx.globalAlpha = 1;
    }

    // RING PARTICLES (draw behind balls)
    particlesRef.current.forEach(p => {
      if (p.type === 'ring' && p.scale !== undefined) {
        ctx.globalAlpha = p.life * 0.5;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.scale, 0, Math.PI * 2);
        ctx.strokeStyle = p.color;
        ctx.lineWidth = 3 * p.life;
        ctx.stroke();
      }
    });
    ctx.globalAlpha = 1;

    // BALLS
    state.balls.forEach(b => {
      const info = LEVELS[b.level];
      ctx.save();
      ctx.translate(b.x, b.y);

      // Outer glow
      ctx.shadowColor = info.glow;
      ctx.shadowBlur = 12 + b.level * 3;

      // Body with gradient
      const ballGrad = ctx.createRadialGradient(-b.radius * 0.3, -b.radius * 0.3, 0, 0, 0, b.radius);
      ballGrad.addColorStop(0, lightenColor(info.color, 40));
      ballGrad.addColorStop(0.7, info.color);
      ballGrad.addColorStop(1, darkenColor(info.color, 30));
      ctx.beginPath();
      ctx.arc(0, 0, b.radius, 0, Math.PI * 2);
      ctx.fillStyle = ballGrad;
      ctx.fill();
      ctx.shadowBlur = 0;

      // Image for hero levels
      if (info.img && imagesRef.current[b.level]?.complete) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(0, 0, b.radius - 2, 0, Math.PI * 2);
        ctx.clip();
        ctx.drawImage(imagesRef.current[b.level], -b.radius, -b.radius, b.radius * 2, b.radius * 2);
        ctx.restore();
      } else {
        // Icon
        ctx.font = `${b.radius * 0.8}px Arial`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(info.icon, 0, 0);
      }

      // Highlight reflection (top-left)
      ctx.beginPath();
      ctx.arc(0, 0, b.radius, 0, Math.PI * 2);
      const highlightGrad = ctx.createRadialGradient(-b.radius * 0.3, -b.radius * 0.4, 0, 0, 0, b.radius);
      highlightGrad.addColorStop(0, 'rgba(255,255,255,0.25)');
      highlightGrad.addColorStop(0.5, 'rgba(255,255,255,0.05)');
      highlightGrad.addColorStop(1, 'transparent');
      ctx.fillStyle = highlightGrad;
      ctx.fill();

      // Border ring
      ctx.beginPath();
      ctx.arc(0, 0, b.radius, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(255,255,255,0.2)';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      ctx.restore();
    });

    // SPARK PARTICLES (draw on top)
    particlesRef.current.forEach(p => {
      if (p.type === 'spark') {
        ctx.globalAlpha = p.life;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    });

    // SCORE PARTICLES
    particlesRef.current.forEach(p => {
      if (p.type === 'score' && p.text) {
        ctx.globalAlpha = Math.min(1, p.life);
        const scale = p.scale || 1;
        ctx.font = `900 ${p.size * scale}px Nunito, sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        // Shadow
        ctx.fillStyle = 'rgba(0,0,0,0.5)';
        ctx.fillText(p.text, p.x + 1, p.y + 1);

        // Text
        ctx.fillStyle = '#FFF';
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 12;
        ctx.fillText(p.text, p.x, p.y);
        ctx.shadowBlur = 0;
      }
    });

    ctx.globalAlpha = 1;
    ctx.restore();
  };

  // Color helpers
  function lightenColor(hex: string, percent: number): string {
    const num = parseInt(hex.slice(1), 16);
    const r = Math.min(255, ((num >> 16) & 0xFF) + percent);
    const g = Math.min(255, ((num >> 8) & 0xFF) + percent);
    const b = Math.min(255, (num & 0xFF) + percent);
    return `rgb(${r},${g},${b})`;
  }

  function darkenColor(hex: string, percent: number): string {
    const num = parseInt(hex.slice(1), 16);
    const r = Math.max(0, ((num >> 16) & 0xFF) - percent);
    const g = Math.max(0, ((num >> 8) & 0xFF) - percent);
    const b = Math.max(0, (num & 0xFF) - percent);
    return `rgb(${r},${g},${b})`;
  }

  // --- INPUT HANDLING ---
  const handleInput = (clientX: number) => {
    if (!canvasRef.current) return;
    const rect = canvasRef.current.getBoundingClientRect();
    const scaleX = GAME_WIDTH / rect.width;

    let x = (clientX - rect.left) * scaleX;
    const radius = LEVELS[stateRef.current.nextLevel].radius;
    x = Math.max(radius, Math.min(GAME_WIDTH - radius, x));
    stateRef.current.mouseX = x;
  };

  const handlePointerMove = (e: React.PointerEvent | React.MouseEvent) => {
    handleInput(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleInput(e.touches[0].clientX);
  };

  const handleDrop = () => {
    const state = stateRef.current;
    if (!state.running || state.gameOver || !state.canDrop) return;

    const lvl = state.nextLevel;
    const radius = LEVELS[lvl].radius;

    const newBall: Ball = {
      id: Math.random(),
      x: state.mouseX,
      y: SPAWN_Y,
      vx: 0, vy: 0,
      level: lvl,
      radius: radius,
      settled: false,
    };

    state.balls.push(newBall);
    state.canDrop = false;

    setTimeout(() => {
      state.nextLevel = Math.floor(Math.random() * 3);
      setUiNextLevel(state.nextLevel);
      state.canDrop = true;
    }, 500);
  };

  const t = {
    back: lang === 'el' ? 'ΠΙΣΩ' : 'BACK',
    start: lang === 'el' ? 'ΕΚΚΙΝΗΣΗ' : 'START',
    retry: lang === 'el' ? 'ΠΑΙΞΕ ΞΑΝΑ' : 'PLAY AGAIN',
    best: lang === 'el' ? 'ΡΕΚΟΡ' : 'BEST',
    gameOver: lang === 'el' ? 'ΤΕΛΟΣ' : 'GAME OVER',
    tapToDrop: lang === 'el' ? 'ΠΑΤΑ ΓΙΑ ΝΑ ΡΙΞΕΙΣ' : 'TAP TO DROP',
    combine: lang === 'el' ? 'Συνδύασε ίδιους ήρωες!' : 'Merge matching heroes!',
    highest: lang === 'el' ? 'ΥΨΗΛΟΤΕΡΟΣ' : 'HIGHEST',
    reward: lang === 'el' ? 'ΚΕΡΔΙΣΕΣ 5 CREDITS!' : 'WON 5 CREDITS!',
  };

  return (
    <div className="h-full flex flex-col items-center p-2 select-none overflow-hidden">

      {/* HEADER UI */}
      <div className="flex justify-between items-center w-full max-w-md mb-1.5 bg-black/50 backdrop-blur-md px-3 py-2 rounded-xl border border-white/10 z-10 shrink-0">
        <button onClick={onBack} className="text-white/50 hover:text-white font-bold uppercase text-xs flex items-center gap-1.5 py-1 px-2">
          <ArrowLeft size={14}/> {t.back}
        </button>

        <div className="flex flex-col items-center">
          <h2 className="text-xl font-[1000] text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-red-500 italic tracking-tighter leading-none">HERO FUSION</h2>
          <div className="flex items-center gap-2 text-[10px] font-bold text-white/40">
            <Crown size={10} className="text-yellow-500" /> {t.best}: {uiBest}
          </div>
        </div>

        <div className="text-right">
          <p className="text-[8px] text-white/40 font-black uppercase tracking-widest">SCORE</p>
          <p className="text-2xl font-[1000] text-white leading-none font-mono">{uiScore}</p>
        </div>
      </div>

      {/* COMBO INDICATOR */}
      {uiCombo > 1 && (
        <div className="w-full max-w-md mb-1 shrink-0">
          <div className={`text-center py-1 rounded-lg font-[1000] text-sm uppercase tracking-widest border animate-pulse ${
            uiCombo >= 5 ? 'bg-red-500/20 text-red-300 border-red-500/30' :
            uiCombo >= 3 ? 'bg-amber-500/20 text-amber-300 border-amber-500/30' :
            'bg-blue-500/20 text-blue-300 border-blue-500/30'
          }`}>
            <Flame size={14} className="inline mr-1" />
            {uiCombo}× COMBO!
          </div>
        </div>
      )}

      {/* GAME AREA */}
      <div
        ref={containerRef}
        className="relative z-10 w-full max-w-md flex-1 min-h-0 rounded-2xl border-2 border-white/10 shadow-2xl overflow-hidden cursor-crosshair"
        onMouseMove={handlePointerMove}
        onTouchMove={handleTouchMove}
        onMouseDown={handleDrop}
        onTouchEnd={handleDrop}
        style={{ touchAction: 'none' }}
      >
        <canvas
          ref={canvasRef}
          width={GAME_WIDTH}
          height={GAME_HEIGHT}
          className="w-full h-full block pointer-events-none"
        />

        {/* NEXT BALL UI */}
        {hasStarted && !isGameOver && (
          <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-2 rounded-xl border border-white/10 text-center pointer-events-none transition-all">
            <p className="text-[8px] font-black text-white/40 uppercase mb-1">NEXT</p>
            <div className="w-9 h-9 rounded-full flex items-center justify-center text-lg transition-colors duration-300" style={{ backgroundColor: LEVELS[uiNextLevel].color, boxShadow: `0 0 15px ${LEVELS[uiNextLevel].glow}` }}>
              {LEVELS[uiNextLevel].icon}
            </div>
          </div>
        )}

        {/* START OVERLAY */}
        {!hasStarted && (
          <div className="absolute inset-0 bg-black/85 flex flex-col items-center justify-center z-50 p-6 text-center">
            {/* Hero evolution preview */}
            <div className="flex items-center gap-1 mb-6">
              {LEVELS.slice(0, 6).map((l, i) => (
                <React.Fragment key={l.id}>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm border border-white/20 shadow-lg" style={{ backgroundColor: l.color, boxShadow: `0 0 8px ${l.glow}` }}>
                    {l.icon}
                  </div>
                  {i < 5 && <span className="text-white/20 text-xs">→</span>}
                </React.Fragment>
              ))}
            </div>

            <h3 className="text-3xl font-[1000] text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-red-500 italic uppercase tracking-tighter mb-2">HERO FUSION</h3>
            <p className="text-white/50 text-sm font-bold mb-6 max-w-xs">{t.combine}</p>

            <button onClick={initGame} className="px-10 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-2xl font-[1000] uppercase tracking-widest hover:scale-105 active:scale-95 transition-transform flex items-center gap-2.5 shadow-xl ring-4 ring-amber-500/20">
              <Play size={20} fill="currentColor" /> {t.start}
            </button>
          </div>
        )}

        {/* GAME OVER OVERLAY */}
        {isGameOver && (
          <div className="absolute inset-0 bg-black/85 backdrop-blur-md flex flex-col items-center justify-center z-50 p-6 text-center">
            <Trophy size={48} className="text-yellow-400 mb-3 animate-bounce" />
            <h2 className="text-3xl font-[1000] text-white italic uppercase tracking-tighter mb-1">{t.gameOver}</h2>
            <p className="text-4xl font-[1000] text-amber-400 mb-2">{uiScore}</p>

            {/* Stats */}
            {uiHighestLevel > 0 && (
              <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-xl border border-white/10 mb-3">
                <span className="text-white/40 text-xs font-black uppercase">{t.highest}:</span>
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-lg" style={{ backgroundColor: LEVELS[uiHighestLevel].color, boxShadow: `0 0 10px ${LEVELS[uiHighestLevel].glow}` }}>
                  {LEVELS[uiHighestLevel].icon}
                </div>
                <span className="text-white font-[1000] text-sm">{LEVELS[uiHighestLevel].name}</span>
              </div>
            )}

            {uiScore > parseInt(localStorage.getItem('hero_fusion_best') || '0') && uiScore > 0 && (
              <p className="text-amber-400 font-[1000] text-sm uppercase tracking-widest mb-2 animate-pulse">🏆 NEW RECORD!</p>
            )}

            {uiScore > 200 && (
              <div className="bg-emerald-500/20 border border-emerald-500/50 text-emerald-300 px-4 py-2 rounded-xl font-black uppercase tracking-widest text-xs mb-3">
                <Zap size={12} className="inline mr-1" /> {t.reward}
              </div>
            )}

            <button onClick={initGame} className="px-8 py-3.5 bg-white text-black rounded-2xl font-[1000] uppercase tracking-widest hover:scale-105 active:scale-95 transition-transform flex items-center gap-2 shadow-xl text-sm">
              <RefreshCcw size={16} /> {t.retry}
            </button>
          </div>
        )}
      </div>

      {/* FOOTER EVOLUTION CHAIN */}
      <div className="mt-1 flex gap-1.5 items-center justify-center max-w-full px-2 w-full max-w-md shrink-0">
        {LEVELS.map((l) => (
          <div key={l.id} className={`flex-shrink-0 flex flex-col items-center gap-0.5 transition-all ${l.id <= uiHighestLevel ? 'opacity-100 scale-100' : 'opacity-30 scale-90'}`}>
            <div className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] border border-white/20 transition-all" style={{
              backgroundColor: l.id <= uiHighestLevel ? l.color : 'rgba(255,255,255,0.05)',
              boxShadow: l.id <= uiHighestLevel ? `0 0 8px ${l.glow}` : 'none'
            }}>
              {l.icon}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
