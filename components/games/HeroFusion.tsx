
import React, { useState, useEffect, useRef } from 'react';
import { useEconomy } from '../../context/EconomyContext';
import { ArrowLeft, RefreshCcw, Crown, AlertTriangle, Play, MousePointer2 } from 'lucide-react';

// --- CONFIGURATION ---
const GRAVITY = 0.55;
const FRICTION = 0.98;
const BOUNCE = 0.3;
const GAME_WIDTH = 400; 
const GAME_HEIGHT = 600; 
const SPAWN_Y = 50;

// THE NEW ORDER:
const LEVELS = [
  { id: 0, name: 'SPARK', radius: 18, color: '#FCD34D', glow: 'rgba(252, 211, 77, 0.8)', icon: '✨', score: 2 },
  { id: 1, name: 'IDEA', radius: 26, color: '#60A5FA', glow: 'rgba(96, 165, 250, 0.8)', icon: '💡', score: 4 },
  { id: 2, name: 'SKETCH', radius: 36, color: '#A78BFA', glow: 'rgba(167, 139, 250, 0.8)', icon: '✏️', score: 8 },
  { id: 3, name: 'WISEBOT', radius: 48, color: '#8B5CF6', glow: 'rgba(139, 92, 246, 0.9)', icon: '🦉', score: 16, img: "/images/wisebot.jpg" },
  { id: 4, name: 'CROCUS', radius: 60, color: '#10B981', glow: 'rgba(16, 185, 129, 0.9)', icon: '🐊', score: 32, img: "/images/crocus.jpg" },
  { id: 5, name: 'PENCILO', radius: 75, color: '#F59E0B', glow: 'rgba(245, 158, 11, 0.9)', icon: '🦔', score: 64, img: "/images/pencilo.jpg" },
  { id: 6, name: 'LINK', radius: 90, color: '#3B82F6', glow: 'rgba(59, 130, 246, 0.9)', icon: '🐭', score: 128, img: "/images/link.jpg" },
  { id: 7, name: 'SPARKEN', radius: 115, color: '#EF4444', glow: 'rgba(239, 68, 68, 1)', icon: '🦅', score: 256, img: "/images/sparken.jpg" }
];

interface Ball {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  level: number;
  radius: number;
}

interface HeroFusionProps {
  lang: 'el' | 'en';
  onBack: () => void;
}

export default function HeroFusion({ lang, onBack }: HeroFusionProps) {
  const { earnCredits } = useEconomy();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Game State stored in Refs for performance (no re-renders)
  const stateRef = useRef({
    balls: [] as Ball[],
    nextLevel: 0,
    score: 0,
    gameOver: false,
    canDrop: true,
    mouseX: GAME_WIDTH / 2, // Virtual coordinates
    running: false
  });

  const requestRef = useRef<number | null>(null);
  
  // UI State (for React rendering)
  const [uiScore, setUiScore] = useState(0);
  const [uiBest, setUiBest] = useState(0);
  const [uiNextLevel, setUiNextLevel] = useState(0);
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

  const initGame = () => {
    stateRef.current = {
        balls: [],
        nextLevel: 0,
        score: 0,
        gameOver: false,
        canDrop: true,
        mouseX: GAME_WIDTH / 2,
        running: true
    };
    setUiScore(0);
    setUiNextLevel(0);
    setIsGameOver(false);
    setHasStarted(true);
    
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
      if (stateRef.current.score > 200) earnCredits(5);
  };

  const update = () => {
    const state = stateRef.current;
    const balls = state.balls;

    // 1. Physics
    for (let i = 0; i < balls.length; i++) {
        const b = balls[i];
        b.vy += GRAVITY;
        b.vx *= FRICTION;
        b.vy *= FRICTION;

        // Max Speed Cap (prevent tunneling)
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
            if(Math.abs(b.vy) < 1) b.vy = 0; // Stop jitter
        }
    }

    // 2. Collisions & Merging
    for (let i = 0; i < balls.length; i++) {
        for (let j = i + 1; j < balls.length; j++) {
            const b1 = balls[i];
            const b2 = balls[j];
            
            const dx = b2.x - b1.x;
            const dy = b2.y - b1.y;
            const distSq = dx*dx + dy*dy;
            const minDist = b1.radius + b2.radius;

            if (distSq < minDist * minDist) {
                // Check Merge
                if (b1.level === b2.level && b1.level < LEVELS.length - 1) {
                    // MERGE
                    const newLvl = b1.level + 1;
                    const midX = (b1.x + b2.x)/2;
                    const midY = (b1.y + b2.y)/2;
                    
                    const newBall: Ball = {
                        id: Math.random(),
                        x: midX, y: midY,
                        vx: 0, vy: 0,
                        level: newLvl,
                        radius: LEVELS[newLvl].radius
                    };

                    state.score += LEVELS[newLvl].score;
                    setUiScore(state.score); // Update React UI

                    balls.splice(j, 1);
                    balls.splice(i, 1);
                    balls.push(newBall);
                    i--; 
                    break;
                } else {
                    // COLLISION RESPONSE
                    const dist = Math.sqrt(distSq) || 1;
                    const nx = dx / dist;
                    const ny = dy / dist;
                    const overlap = minDist - dist;
                    
                    // Separate
                    const totalMass = b1.radius + b2.radius;
                    const m1 = b1.radius / totalMass;
                    const m2 = b2.radius / totalMass;

                    // Push apart based on "mass" (radius)
                    b1.x -= nx * overlap * (1-m1);
                    b1.y -= ny * overlap * (1-m1);
                    b2.x += nx * overlap * (1-m2);
                    b2.y += ny * overlap * (1-m2);

                    // Bounce
                    const dvx = b2.vx - b1.vx;
                    const dvy = b2.vy - b1.vy;
                    const velAlongNormal = dvx * nx + dvy * ny;

                    if (velAlongNormal < 0) {
                        const impulse = -(1 + BOUNCE) * velAlongNormal;
                        b1.vx -= impulse * nx * (1-m1);
                        b1.vy -= impulse * ny * (1-m1);
                        b2.vx += impulse * nx * (1-m2);
                        b2.vy += impulse * ny * (1-m2);
                    }
                }
            }
        }
    }

    // 3. Game Over Check
    // Check if any ball is above the line AND resting (low velocity)
    for (const b of balls) {
        if (b.y + b.radius < 100 && Math.abs(b.vy) < 0.2 && Math.abs(b.vx) < 0.2 && balls.length > 2) {
            state.gameOver = true;
        }
    }
  };

  const draw = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear
    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

    // DANGER LINE
    ctx.beginPath();
    ctx.moveTo(0, 100);
    ctx.lineTo(GAME_WIDTH, 100);
    ctx.strokeStyle = 'rgba(239, 68, 68, 0.5)';
    ctx.setLineDash([5, 5]);
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.setLineDash([]);

    // GUIDE LINE (where ball will drop)
    if (stateRef.current.canDrop && !stateRef.current.gameOver) {
        const mx = stateRef.current.mouseX;
        ctx.beginPath();
        ctx.moveTo(mx, SPAWN_Y);
        ctx.lineTo(mx, GAME_HEIGHT);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
        ctx.lineWidth = 1;
        ctx.stroke();

        // Preview Ball at top
        const nextInfo = LEVELS[stateRef.current.nextLevel];
        ctx.beginPath();
        ctx.arc(mx, SPAWN_Y, nextInfo.radius, 0, Math.PI * 2);
        ctx.fillStyle = nextInfo.color;
        ctx.globalAlpha = 0.5;
        ctx.fill();
        ctx.globalAlpha = 1;
    }

    // BALLS
    stateRef.current.balls.forEach(b => {
        const info = LEVELS[b.level];
        ctx.save();
        ctx.translate(b.x, b.y);
        
        // Body
        ctx.beginPath();
        ctx.arc(0, 0, b.radius, 0, Math.PI*2);
        ctx.fillStyle = info.color;
        ctx.fill();
        
        // Image
        if (info.img && imagesRef.current[b.level]?.complete) {
            ctx.save();
            ctx.clip();
            ctx.drawImage(imagesRef.current[b.level], -b.radius, -b.radius, b.radius*2, b.radius*2);
            ctx.restore();
        } else {
            // Icon
            ctx.fillStyle = 'rgba(0,0,0,0.3)';
            ctx.font = `${b.radius}px Arial`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(info.icon, 0, 0);
        }

        // Inner Shadow/Glow
        ctx.beginPath();
        ctx.arc(0, 0, b.radius, 0, Math.PI*2);
        ctx.strokeStyle = 'rgba(255,255,255,0.3)';
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.restore();
    });
  };

  // --- INPUT HANDLING ---
  // Maps screen coordinates to internal game coordinates (0-400)
  const handleInput = (clientX: number) => {
      if (!canvasRef.current) return;
      const rect = canvasRef.current.getBoundingClientRect();
      const scaleX = GAME_WIDTH / rect.width;
      
      let x = (clientX - rect.left) * scaleX;
      
      // Clamp inside walls based on current next ball radius
      const radius = LEVELS[stateRef.current.nextLevel].radius;
      x = Math.max(radius, Math.min(GAME_WIDTH - radius, x));
      
      stateRef.current.mouseX = x;
  };

  const handlePointerMove = (e: React.PointerEvent | React.MouseEvent) => {
      handleInput(e.clientX);
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
      // Prevent default to avoid scrolling while aiming
      // e.preventDefault() is best handled via touch-action: none CSS
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
          vx: 0,
          vy: 0,
          level: lvl,
          radius: radius
      };

      state.balls.push(newBall);
      state.canDrop = false;

      // Cooldown
      setTimeout(() => {
          // Drops only small abstract items initially (0, 1, 2)
          state.nextLevel = Math.floor(Math.random() * 3); 
          setUiNextLevel(state.nextLevel);
          state.canDrop = true;
      }, 600);
  };

  return (
    <div className="h-full flex flex-col items-center p-2 select-none touch-none bg-[#020617] overscroll-none overflow-hidden">

      {/* HEADER UI */}
      <div className="flex justify-between items-center w-full max-w-md mb-2 bg-white/5 backdrop-blur-md px-3 py-2 rounded-xl border border-white/10 z-10 shrink-0">
         <button onClick={onBack} className="text-white/50 hover:text-white font-bold uppercase text-xs flex items-center gap-2">
            <ArrowLeft size={16}/> {lang === 'el' ? 'ΠΙΣΩ' : 'BACK'}
         </button>
         <div className="flex flex-col items-center">
            <h2 className="text-2xl font-[1000] text-amber-400 italic tracking-tighter">HERO FUSION</h2>
            <div className="flex items-center gap-2 text-xs font-bold text-white/50">
               <Crown size={12} className="text-yellow-500" /> BEST: {uiBest}
            </div>
         </div>
         <div className="text-right">
            <p className="text-[9px] text-white/40 font-black uppercase tracking-widest">SCORE</p>
            <p className="text-3xl font-[1000] text-white leading-none">{uiScore}</p>
         </div>
      </div>

      {/* GAME AREA */}
      <div
        ref={containerRef}
        className="relative z-10 w-full max-w-md flex-1 min-h-0 bg-[#0f1014] rounded-2xl border-2 border-white/10 shadow-2xl overflow-hidden cursor-crosshair touch-none"
        onMouseMove={handlePointerMove}
        onTouchMove={handleTouchMove}
        onMouseDown={handleDrop}
        onTouchEnd={handleDrop}
        style={{ touchAction: 'none' }} // VITAL for mobile
      >
         {/* Grid Background */}
         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
         
         <canvas 
            ref={canvasRef}
            width={GAME_WIDTH}
            height={GAME_HEIGHT}
            className="w-full h-full block pointer-events-none" // Events handled by parent div
         />

         {/* NEXT BALL UI */}
         {hasStarted && !isGameOver && (
             <div className="absolute top-4 right-4 bg-black/60 px-3 py-2 rounded-xl border border-white/10 text-center pointer-events-none transition-all">
                <p className="text-[9px] font-black text-white/40 uppercase mb-1">NEXT</p>
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-lg transition-colors duration-300" style={{ backgroundColor: LEVELS[uiNextLevel].color, boxShadow: `0 0 10px ${LEVELS[uiNextLevel].glow}` }}>
                    {LEVELS[uiNextLevel].icon}
                </div>
             </div>
         )}

         {/* START OVERLAY */}
         {!hasStarted && (
             <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center z-50 p-6 text-center">
                 <MousePointer2 size={48} className="text-white mb-4 animate-bounce" />
                 <h3 className="text-2xl font-[1000] text-white italic uppercase tracking-tighter mb-2">TAP TO DROP</h3>
                 <p className="text-white/60 text-sm mb-8">Combine items to evolve Heroes!</p>
                 <button onClick={initGame} className="px-10 py-4 bg-white text-black rounded-2xl font-[1000] uppercase tracking-widest hover:scale-105 transition-transform flex items-center gap-2">
                     <Play size={20} fill="currentColor" /> {lang === 'el' ? 'ΕΚΚΙΝΗΣΗ' : 'START'}
                 </button>
             </div>
         )}

         {/* GAME OVER OVERLAY */}
         {isGameOver && (
             <div className="absolute inset-0 bg-black/80 backdrop-blur-md flex flex-col items-center justify-center z-50 p-6 text-center animate-in fade-in">
                 <AlertTriangle size={64} className="text-red-500 mb-4 animate-bounce" />
                 <h2 className="text-4xl font-[1000] text-white italic uppercase tracking-tighter mb-2">GAME OVER</h2>
                 <p className="text-white/60 font-bold text-xl mb-8">Score: {uiScore}</p>
                 <button onClick={initGame} className="px-10 py-4 bg-white text-black rounded-2xl font-[1000] uppercase tracking-widest hover:scale-105 transition-transform flex items-center gap-2 shadow-xl">
                     <RefreshCcw size={20} /> {lang === 'el' ? 'ΠΑΙΞΕ ΞΑΝΑ' : 'PLAY AGAIN'}
                 </button>
             </div>
         )}
      </div>

      {/* FOOTER LEGEND */}
      <div className="mt-1 flex gap-2 overflow-x-auto max-w-full px-2 pb-1 snap-x no-scrollbar w-full max-w-md shrink-0">
         {LEVELS.map((l) => (
             <div key={l.id} className="flex-shrink-0 flex flex-col items-center gap-1 opacity-50 hover:opacity-100 transition-opacity">
                 <div className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] border border-white/20" style={{ backgroundColor: l.color }}>{l.icon}</div>
             </div>
         ))}
      </div>

    </div>
  );
}
