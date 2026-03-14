
import React, { useState, useEffect, useRef } from 'react';
import { useEconomy } from '../../context/EconomyContext';
import { ArrowLeft, Play, RefreshCcw, Zap, Target, BrainCircuit, MousePointer2 } from 'lucide-react';

interface HeroSlingshotProps {
  lang: 'el' | 'en';
  onBack: () => void;
}

// --- CONFIG ---
const ROWS = 8;
const COLS = 8;
const BUBBLE_RADIUS = 20;
const ROW_HEIGHT = BUBBLE_RADIUS * Math.sqrt(3);
const GRID_WIDTH = 360; 
const SHOOTER_Y = 480;

const HERO_BUBBLES = [
  { id: 0, name: 'Wisebot', color: '#8B5CF6', img: "/images/wisebot.jpg" },
  { id: 1, name: 'Crocus', color: '#10B981', img: "/images/crocus.jpg" },
  { id: 2, name: 'Link', color: '#3B82F6', img: "/images/link.jpg" },
  { id: 3, name: 'Pencilo', color: '#F59E0B', img: "/images/pencilo.jpg" },
  { id: 4, name: 'Sparken', color: '#EF4444', img: "/images/sparken.jpg" },
];

export default function HeroSlingshot({ lang, onBack }: HeroSlingshotProps) {
  const { earnCredits } = useEconomy();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Game State Refs (no re-renders)
  const stateRef = useRef({
    grid: [] as {x: number, y: number, type: number, row: number, col: number}[],
    projectile: null as {x: number, y: number, vx: number, vy: number, type: number} | null,
    currentBubbleType: 0,
    nextBubbleType: 0,
    mouseX: GRID_WIDTH / 2,
    mouseY: SHOOTER_Y - 100,
    score: 0,
    running: false,
    gameOver: false,
    aiSuggestion: ''
  });

  const requestRef = useRef<number | null>(null);
  const imagesRef = useRef<Record<number, HTMLImageElement>>({});

  // UI State
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [aiText, setAiText] = useState('');

  useEffect(() => {
    // Preload Images
    HERO_BUBBLES.forEach(h => {
        const img = new Image();
        img.src = h.img;
        imagesRef.current[h.id] = img;
    });

    initGame();

    return () => {
        if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  const initGame = () => {
    const grid = [];
    // Generate initial grid (top 5 rows)
    for (let r = 0; r < 5; r++) {
        for (let c = 0; c < (r % 2 === 0 ? COLS : COLS - 1); c++) {
            const x = (r % 2 === 0) ? c * BUBBLE_RADIUS * 2 + BUBBLE_RADIUS : c * BUBBLE_RADIUS * 2 + BUBBLE_RADIUS * 2;
            const y = r * ROW_HEIGHT + BUBBLE_RADIUS;
            grid.push({ x, y, type: Math.floor(Math.random() * 5), row: r, col: c });
        }
    }

    stateRef.current = {
        grid,
        projectile: null,
        currentBubbleType: Math.floor(Math.random() * 5),
        nextBubbleType: Math.floor(Math.random() * 5),
        mouseX: GRID_WIDTH / 2,
        mouseY: SHOOTER_Y - 100, // Default aim upwards
        score: 0,
        running: true,
        gameOver: false,
        aiSuggestion: ''
    };
    
    setScore(0);
    setGameOver(false);
    updateAiStrategy(); // Initial strategy
    
    if (requestRef.current) cancelAnimationFrame(requestRef.current);
    loop();
  };

  const loop = () => {
    if (!stateRef.current.running) return;
    update();
    draw();
    requestRef.current = requestAnimationFrame(loop);
  };

  const update = () => {
    const state = stateRef.current;
    
    if (state.projectile) {
        const p = state.projectile;
        p.x += p.vx;
        p.y += p.vy;

        // Walls
        if (p.x - BUBBLE_RADIUS < 0) { p.x = BUBBLE_RADIUS; p.vx *= -1; }
        if (p.x + BUBBLE_RADIUS > GRID_WIDTH) { p.x = GRID_WIDTH - BUBBLE_RADIUS; p.vx *= -1; }

        // Ceiling
        if (p.y - BUBBLE_RADIUS < 0) {
            snapToGrid();
        }

        // Collision with Bubbles
        for (const b of state.grid) {
            const dx = p.x - b.x;
            const dy = p.y - b.y;
            const dist = Math.sqrt(dx*dx + dy*dy);
            if (dist < BUBBLE_RADIUS * 1.8) { // Collision radius
                snapToGrid();
                break;
            }
        }
    }
  };

  const snapToGrid = () => {
    const state = stateRef.current;
    const p = state.projectile;
    if (!p) return;

    // Find nearest grid slot
    const row = Math.round((p.y - BUBBLE_RADIUS) / ROW_HEIGHT);
    const isEven = row % 2 === 0;
    const offsetX = isEven ? BUBBLE_RADIUS : BUBBLE_RADIUS * 2;
    const col = Math.round((p.x - offsetX) / (BUBBLE_RADIUS * 2));
    
    const x = isEven ? col * BUBBLE_RADIUS * 2 + BUBBLE_RADIUS : col * BUBBLE_RADIUS * 2 + BUBBLE_RADIUS * 2;
    const y = row * ROW_HEIGHT + BUBBLE_RADIUS;

    // Add bubble
    const newBubble = { x, y, type: p.type, row, col };
    state.grid.push(newBubble);
    state.projectile = null;

    // Resolve Matches
    resolveMatches(newBubble);

    // Prepare next shot
    state.currentBubbleType = state.nextBubbleType;
    state.nextBubbleType = Math.floor(Math.random() * 5);
    
    // Check Game Over (Bubble too low)
    if (y > SHOOTER_Y - 50) {
        state.gameOver = true;
        state.running = false;
        setGameOver(true);
    }

    updateAiStrategy();
  };

  const resolveMatches = (startBubble: any) => {
    const state = stateRef.current;
    const queue = [startBubble];
    const visited = new Set([`${startBubble.row},${startBubble.col}`]);
    const matches = [startBubble];

    // BFS to find matches
    let i = 0;
    while(i < queue.length) {
        const curr = queue[i];
        i++;
        
        state.grid.forEach(b => {
            if (b.type === curr.type && !visited.has(`${b.row},${b.col}`)) {
                const dx = b.x - curr.x;
                const dy = b.y - curr.y;
                if (Math.sqrt(dx*dx + dy*dy) < BUBBLE_RADIUS * 2.5) {
                    visited.add(`${b.row},${b.col}`);
                    matches.push(b);
                    queue.push(b);
                }
            }
        });
    }

    if (matches.length >= 3) {
        state.grid = state.grid.filter(b => !matches.includes(b));
        state.score += matches.length * 10;
        setScore(state.score);
    }
  };

  const updateAiStrategy = () => {
      const state = stateRef.current;
      const typeCounts = [0,0,0,0,0];
      state.grid.forEach(b => {
          if (b.row > 2) typeCounts[b.type]++;
      });
      
      const bestType = typeCounts.indexOf(Math.max(...typeCounts));
      const heroName = HERO_BUBBLES[bestType].name;
      
      const strategies = [
          `Aim for ${heroName} to clear space!`,
          `Target ${heroName} cluster for max points.`,
          `Use ${HERO_BUBBLES[state.currentBubbleType].name} to break the wall.`,
          `Strategy: Clear the ${heroName} side.`
      ];
      
      const suggestion = strategies[Math.floor(Math.random() * strategies.length)];
      state.aiSuggestion = suggestion;
      setAiText(suggestion);
  };

  const shoot = () => {
      const state = stateRef.current;
      if (state.projectile || state.gameOver) return;

      const dx = state.mouseX - (GRID_WIDTH / 2);
      const dy = state.mouseY - SHOOTER_Y;
      
      // Calculate angle, but restrain it to avoid shooting backwards/downwards
      // We want to shoot UPwards. So dy should be negative.
      // If user drags below shooter, treat it as aim up (invert) or clamp?
      // Since it's "point to shoot", touching below shooter means aiming down. We should prevent that.
      
      let angle = Math.atan2(dy, dx);
      
      // Constraint: Angle must be between -PI and 0 (Upwards arc)
      // Actually closer to -170 deg to -10 deg.
      // If angle is > 0 (pointing down), we clamp or ignore.
      if (angle > 0) {
          return; // Don't shoot down
      }

      const speed = 12;

      state.projectile = {
          x: GRID_WIDTH / 2,
          y: SHOOTER_Y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          type: state.currentBubbleType
      };
  };

  const handleInput = (clientX: number, clientY: number) => {
      if (!canvasRef.current) return;
      const rect = canvasRef.current.getBoundingClientRect();
      const internalW = GRID_WIDTH;
      const internalH = 550; // Canvas height defined below
      
      // Calculate scale based on displayed size
      const scaleX = internalW / rect.width;
      const scaleY = internalH / rect.height;

      let x = (clientX - rect.left) * scaleX;
      let y = (clientY - rect.top) * scaleY;

      // Clamp target Y to allow only upward aiming visual
      if (y > SHOOTER_Y - 20) y = SHOOTER_Y - 20;

      stateRef.current.mouseX = x;
      stateRef.current.mouseY = y;
  };

  // --- CONTROLS ADAPTED FOR MOBILE ---
  const handleTouchMove = (e: React.TouchEvent) => {
      // e.preventDefault() handled by touch-action: none style
      const touch = e.touches[0];
      handleInput(touch.clientX, touch.clientY);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
      const touch = e.touches[0];
      handleInput(touch.clientX, touch.clientY);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
      shoot(); // Fire when finger releases
  };

  const handleMouseMove = (e: React.MouseEvent) => {
      handleInput(e.clientX, e.clientY);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
      handleInput(e.clientX, e.clientY);
  };

  const handleMouseUp = () => {
      shoot();
  };

  const draw = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      const state = stateRef.current;

      // Clear
      ctx.fillStyle = '#0f172a';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw Grid Bubbles
      state.grid.forEach(b => drawBubble(ctx, b.x, b.y, b.type));

      // Draw Projectile
      if (state.projectile) {
          drawBubble(ctx, state.projectile.x, state.projectile.y, state.projectile.type);
      }

      // Draw Shooter
      const shooterX = GRID_WIDTH / 2;
      const shooterY = SHOOTER_Y;
      
      // Draw Shooter Base
      ctx.beginPath();
      ctx.arc(shooterX, shooterY, 40, Math.PI, 0); 
      ctx.fillStyle = '#1e293b';
      ctx.fill();

      // Aim Line & Target Reticle
      if (!state.projectile && !state.gameOver) {
          ctx.beginPath();
          ctx.moveTo(shooterX, shooterY);
          ctx.lineTo(state.mouseX, state.mouseY);
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
          ctx.setLineDash([5, 5]);
          ctx.lineWidth = 2;
          ctx.stroke();
          ctx.setLineDash([]);
          
          // Draw reticle at target
          ctx.beginPath();
          ctx.arc(state.mouseX, state.mouseY, 10, 0, Math.PI*2);
          ctx.strokeStyle = '#fff';
          ctx.stroke();
          ctx.beginPath();
          ctx.arc(state.mouseX, state.mouseY, 2, 0, Math.PI*2);
          ctx.fillStyle = '#fff';
          ctx.fill();
      }

      // Current Bubble
      if (!state.projectile) {
          drawBubble(ctx, shooterX, shooterY, state.currentBubbleType);
      }

      // Next Bubble (Small preview)
      const nextX = shooterX + 60;
      const nextY = shooterY + 20;
      ctx.globalAlpha = 0.6;
      drawBubble(ctx, nextX, nextY, state.nextBubbleType, 15);
      ctx.globalAlpha = 1;
      ctx.fillStyle = 'white';
      ctx.font = '10px Arial';
      ctx.fillText('NEXT', nextX - 12, nextY + 25);
  };

  const drawBubble = (ctx: CanvasRenderingContext2D, x: number, y: number, type: number, radius = BUBBLE_RADIUS) => {
      const hero = HERO_BUBBLES[type];
      
      ctx.save();
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fillStyle = hero.color;
      ctx.fill();
      
      // Image
      if (imagesRef.current[type]?.complete) {
          ctx.save();
          ctx.clip();
          ctx.drawImage(imagesRef.current[type], x - radius, y - radius, radius * 2, radius * 2);
          ctx.restore();
      }

      // Border/Glow
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(255,255,255,0.3)';
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.restore();
  };

  return (
    <div className="h-full flex flex-col items-center p-2 bg-[#020617] select-none touch-none overscroll-none overflow-hidden">

      {/* HEADER */}
      <div className="w-full max-w-md bg-[#1e293b] px-3 py-2 rounded-xl border border-white/10 flex justify-between items-center mb-2 shadow-lg z-10 shrink-0">
         <button onClick={onBack} className="text-white/50 hover:text-white font-bold uppercase text-xs flex items-center gap-2">
            <ArrowLeft size={16} /> {lang === 'el' ? 'ΠΙΣΩ' : 'BACK'}
         </button>
         <div className="text-center">
            <h2 className="text-xl font-[1000] text-indigo-400 italic">HERO SLINGSHOT</h2>
            <div className="text-[10px] text-white/50 font-bold uppercase tracking-widest flex items-center justify-center gap-1">
                <BrainCircuit size={10} /> GEMINI STRATEGY
            </div>
         </div>
         <div className="text-right">
            <p className="text-[9px] text-white/40 font-black uppercase tracking-widest">SCORE</p>
            <p className="text-2xl font-black text-white leading-none">{score}</p>
         </div>
      </div>

      {/* GAME AREA */}
      <div className="relative border-2 border-indigo-900/50 rounded-2xl overflow-hidden shadow-2xl bg-black max-w-md w-full flex-1 min-h-0 touch-none">
         <canvas 
            ref={canvasRef}
            width={GRID_WIDTH}
            height={550}
            className="w-full h-full block cursor-crosshair touch-none"
            onMouseMove={handleMouseMove}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ touchAction: 'none' }} // Crucial for iOS scroll lock
         />

         {/* AI STRATEGY OVERLAY — bottom so it doesn't block bubbles */}
         <div className="absolute bottom-4 left-4 right-4 pointer-events-none">
             <div className="bg-indigo-600/70 backdrop-blur-md px-3 py-2 rounded-xl border border-indigo-400/30 shadow-lg text-center animate-in fade-in duration-500">
                 <div className="flex items-center justify-center gap-2">
                     <Target size={12} className="text-white/80 shrink-0" />
                     <p className="text-[11px] text-indigo-100 font-bold leading-tight truncate">
                         {aiText || "Analyzing board..."}
                     </p>
                 </div>
             </div>
         </div>

         {/* GAME OVER */}
         {gameOver && (
             <div className="absolute inset-0 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center z-50 animate-in fade-in">
                 <h2 className="text-4xl font-[1000] text-white italic mb-4">GAME OVER</h2>
                 <p className="text-white/60 font-bold text-xl mb-8">Score: {score}</p>
                 <button onClick={initGame} className="px-8 py-3 bg-indigo-600 text-white rounded-xl font-black uppercase tracking-widest hover:scale-105 transition-transform flex items-center gap-2 shadow-lg">
                     <RefreshCcw size={18} /> {lang === 'el' ? 'ΠΑΙΞΕ ΞΑΝΑ' : 'PLAY AGAIN'}
                 </button>
             </div>
         )}
      </div>

      <div className="mt-1 text-white/30 text-[10px] font-bold uppercase tracking-widest text-center flex items-center justify-center gap-2 shrink-0">
          <MousePointer2 size={12} /> {lang === 'el' ? 'ΣΥΡΕ ΓΙΑ ΣΤΟΧΟ - ΑΣΕ ΓΙΑ ΒΟΛΗ' : 'DRAG TO AIM - RELEASE TO SHOOT'}
      </div>

    </div>
  );
}
