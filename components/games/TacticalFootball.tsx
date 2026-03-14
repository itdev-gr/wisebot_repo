
import React, { useState, useEffect, useRef } from 'react';
import { useEconomy } from '../../context/EconomyContext';
import { ArrowLeft, RotateCcw, Target, RotateCw, Trophy, AlertTriangle } from 'lucide-react';

interface TacticalFootballProps {
  lang: 'el' | 'en';
  onBack: () => void;
}

// --- CONFIGURATION ---
const GAME_WIDTH = 600;
const GAME_HEIGHT = 900;
const BALL_RADIUS = 14;
const PLAYER_RADIUS = 24;
const GOAL_WIDTH = 220; // Slightly wider for 6 players
const MAX_POWER = 22;

// Hero Physics Profiles
const HERO_STATS: Record<string, { mass: number, friction: number, bounce: number, img: string }> = {
  wisebot: { 
    mass: 1.4, friction: 0.95, bounce: 0.6, 
    img: "/images/wisebot.jpg" 
  }, // Stable, heavy-ish
  crocus: { 
    mass: 1.8, friction: 0.92, bounce: 0.4, 
    img: "/images/crocus.jpg" 
  }, // Tank, stops fast, hits hard
  link: { 
    mass: 1.0, friction: 0.97, bounce: 0.9, 
    img: "/images/link.jpg" 
  }, // Bouncy, chaotic
  pencilo: { 
    mass: 0.9, friction: 0.96, bounce: 0.7, 
    img: "/images/pencilo.jpg" 
  }, // Light, precise
  sparken: { 
    mass: 1.2, friction: 0.985, bounce: 0.75, 
    img: "/images/sparken.jpg" 
  } // Fast, slides long
};

const HERO_KEYS = Object.keys(HERO_STATS);

interface Entity {
  id: number;
  type: 'ball' | 'unit';
  team?: 'player' | 'opponent'; // Only for units
  hero?: string; // Key for stats
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  isGoalie?: boolean;
}

export default function TacticalFootball({ lang, onBack }: TacticalFootballProps) {
  const { earnCredits } = useEconomy();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<Record<string, HTMLImageElement>>({});

  // Game State Refs
  const stateRef = useRef({
    entities: [] as Entity[],
    selectedId: null as number | null,
    isDragging: false,
    dragStartX: 0,
    dragStartY: 0,
    dragCurrX: 0,
    dragCurrY: 0,
    turn: 'player' as 'player' | 'opponent',
    isMoving: false,
    scorePlayer: 0,
    scoreOpponent: 0,
    spin: 0, // -1, 0, 1
    lastScorer: null as 'player' | 'opponent' | null
  });

  const requestRef = useRef<number | null>(null);
  
  // UI State
  const [uiState, setUiState] = useState({
    scoreP: 0, scoreO: 0, turn: 'player', spin: 0, message: 'YOUR TURN'
  });

  const t = {
    title: 'NEBULA CATCH',
    turnP: lang === 'el' ? 'ΣΕΙΡΑ ΣΟΥ' : 'YOUR TURN',
    turnO: lang === 'el' ? 'ΑΝΤΙΠΑΛΟΣ' : 'OPPONENT',
    spin: lang === 'el' ? 'ΦΑΛΤΣΟ' : 'SPIN',
    goal: lang === 'el' ? 'ΓΚΟΛ!' : 'GOAL!',
  };

  useEffect(() => {
    // Preload Images
    HERO_KEYS.forEach(key => {
        const img = new Image();
        img.src = HERO_STATS[key].img;
        imagesRef.current[key] = img;
    });

    initMatch();
    
    // Start Loop
    requestRef.current = requestAnimationFrame(loop);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  const getRandomHero = () => HERO_KEYS[Math.floor(Math.random() * HERO_KEYS.length)];

  const initMatch = () => {
      const entities: Entity[] = [];
      
      // Ball (ID 0)
      entities.push({ id: 0, type: 'ball', x: GAME_WIDTH/2, y: GAME_HEIGHT/2, vx: 0, vy: 0, radius: BALL_RADIUS });

      // --- PLAYER TEAM (Cyan - Bottom) - Formation 1-2-2-1 (6 Players) ---
      const pY = GAME_HEIGHT - 50;
      // Goalkeeper (ID 1)
      entities.push({ id: 1, type: 'unit', team: 'player', hero: getRandomHero(), x: GAME_WIDTH/2, y: GAME_HEIGHT - 30, vx: 0, vy: 0, radius: PLAYER_RADIUS, isGoalie: true });
      // Defenders
      entities.push({ id: 2, type: 'unit', team: 'player', hero: getRandomHero(), x: GAME_WIDTH/3, y: pY - 150, vx: 0, vy: 0, radius: PLAYER_RADIUS });
      entities.push({ id: 3, type: 'unit', team: 'player', hero: getRandomHero(), x: GAME_WIDTH*2/3, y: pY - 150, vx: 0, vy: 0, radius: PLAYER_RADIUS });
      // Midfielders
      entities.push({ id: 4, type: 'unit', team: 'player', hero: getRandomHero(), x: GAME_WIDTH/4, y: pY - 350, vx: 0, vy: 0, radius: PLAYER_RADIUS });
      entities.push({ id: 5, type: 'unit', team: 'player', hero: getRandomHero(), x: GAME_WIDTH*3/4, y: pY - 350, vx: 0, vy: 0, radius: PLAYER_RADIUS });
      // Striker
      entities.push({ id: 6, type: 'unit', team: 'player', hero: getRandomHero(), x: GAME_WIDTH/2, y: pY - 450, vx: 0, vy: 0, radius: PLAYER_RADIUS });

      // --- OPPONENT TEAM (Red - Top) - Formation 1-2-2-1 (6 Players) ---
      const oY = 50;
      // Goalkeeper (ID 7) - Starts IDs from 7 to 12
      entities.push({ id: 7, type: 'unit', team: 'opponent', hero: getRandomHero(), x: GAME_WIDTH/2, y: 30, vx: 0, vy: 0, radius: PLAYER_RADIUS, isGoalie: true });
      // Defenders
      entities.push({ id: 8, type: 'unit', team: 'opponent', hero: getRandomHero(), x: GAME_WIDTH/3, y: oY + 150, vx: 0, vy: 0, radius: PLAYER_RADIUS });
      entities.push({ id: 9, type: 'unit', team: 'opponent', hero: getRandomHero(), x: GAME_WIDTH*2/3, y: oY + 150, vx: 0, vy: 0, radius: PLAYER_RADIUS });
      // Midfielders
      entities.push({ id: 10, type: 'unit', team: 'opponent', hero: getRandomHero(), x: GAME_WIDTH/4, y: oY + 350, vx: 0, vy: 0, radius: PLAYER_RADIUS });
      entities.push({ id: 11, type: 'unit', team: 'opponent', hero: getRandomHero(), x: GAME_WIDTH*3/4, y: oY + 350, vx: 0, vy: 0, radius: PLAYER_RADIUS });
      // Striker
      entities.push({ id: 12, type: 'unit', team: 'opponent', hero: getRandomHero(), x: GAME_WIDTH/2, y: oY + 450, vx: 0, vy: 0, radius: PLAYER_RADIUS });

      stateRef.current.entities = entities;
      stateRef.current.isMoving = false;
      stateRef.current.turn = 'player';
      setUiState(prev => ({ ...prev, message: t.turnP }));
  };

  const loop = () => {
    updatePhysics();
    if (!stateRef.current.isMoving && stateRef.current.turn === 'opponent') {
        handleAiTurn();
    }
    draw();
    requestRef.current = requestAnimationFrame(loop);
  };

  const updatePhysics = () => {
    const state = stateRef.current;
    let totalKineticEnergy = 0;

    state.entities.forEach(ent => {
        // Stats
        let mass = 1.0;
        let friction = 0.97;
        
        if (ent.type === 'unit' && ent.hero) {
            mass = HERO_STATS[ent.hero].mass;
            friction = HERO_STATS[ent.hero].friction;
        } else if (ent.type === 'ball') {
            mass = 0.6;
            friction = 0.985; // Ball rolls more
        }

        // Spin Physics
        if (state.spin !== 0 && Math.abs(ent.vx) + Math.abs(ent.vy) > 2) {
            const speed = Math.sqrt(ent.vx*ent.vx + ent.vy*ent.vy);
            const force = speed * 0.04 * state.spin; 
            ent.vx += -ent.vy/speed * force;
            ent.vy += ent.vx/speed * force;
            if (Math.random() < 0.05) state.spin *= 0.95; // Spin decay
        }

        // Movement
        ent.x += ent.vx;
        ent.y += ent.vy;

        // --- GOALKEEPER CONSTRAINT LOGIC ---
        if (ent.isGoalie) {
            // Lock Vertical Movement completely (they slide on the line)
            ent.vy = 0;
            
            // Lock Horizontal Movement to Goal Box Area
            const minX = (GAME_WIDTH - GOAL_WIDTH) / 2 + ent.radius;
            const maxX = (GAME_WIDTH + GOAL_WIDTH) / 2 - ent.radius;
            
            // Hard clamp Position
            if (ent.x < minX) { ent.x = minX; ent.vx = 0; }
            if (ent.x > maxX) { ent.x = maxX; ent.vx = 0; }
            
            // Hard clamp Y Position (Goal Line)
            if (ent.team === 'player') ent.y = GAME_HEIGHT - 30;
            if (ent.team === 'opponent') ent.y = 30;
        } else {
            // Friction for non-goalies
            ent.vx *= friction;
            ent.vy *= friction;
        }
        
        // Goalkeepers also need friction on X axis to stop sliding eventually
        if (ent.isGoalie) {
             ent.vx *= 0.9;
        }

        // Stop threshold
        if (Math.abs(ent.vx) < 0.05) ent.vx = 0;
        if (Math.abs(ent.vy) < 0.05) ent.vy = 0;

        totalKineticEnergy += Math.abs(ent.vx) + Math.abs(ent.vy);

        // Wall Collisions (Left/Right)
        if (ent.x - ent.radius < 0) { ent.x = ent.radius; ent.vx *= -0.7; }
        if (ent.x + ent.radius > GAME_WIDTH) { ent.x = GAME_WIDTH - ent.radius; ent.vx *= -0.7; }

        // Goal Logic (Top/Bottom)
        const isGoalZone = ent.x > (GAME_WIDTH - GOAL_WIDTH)/2 && ent.x < (GAME_WIDTH + GOAL_WIDTH)/2;
        
        if (ent.y - ent.radius < 0) {
            if (isGoalZone && ent.type === 'ball') {
                handleGoal('player');
                return; 
            }
            ent.y = ent.radius;
            ent.vy *= -0.7;
        } 
        else if (ent.y + ent.radius > GAME_HEIGHT) {
            if (isGoalZone && ent.type === 'ball') {
                handleGoal('opponent');
                return;
            }
            ent.y = GAME_HEIGHT - ent.radius;
            ent.vy *= -0.7;
        }
    });

    // Entity Collisions
    for (let i = 0; i < state.entities.length; i++) {
        for (let j = i + 1; j < state.entities.length; j++) {
            resolveCollision(state.entities[i], state.entities[j]);
        }
    }

    // Turn Management
    if (totalKineticEnergy > 0.5) {
        state.isMoving = true;
    } else if (state.isMoving) {
        // Stopped moving
        state.isMoving = false;
        state.spin = 0;
        
        // Switch turn logic
        if (state.lastScorer) {
            state.turn = state.lastScorer === 'player' ? 'opponent' : 'player';
            state.lastScorer = null;
        } else {
            state.turn = state.turn === 'player' ? 'opponent' : 'player';
        }
        
        setUiState(prev => ({
            ...prev, 
            turn: state.turn,
            spin: 0,
            message: state.turn === 'player' ? t.turnP : t.turnO
        }));
    }
  };

  const resolveCollision = (e1: Entity, e2: Entity) => {
      const dx = e2.x - e1.x;
      const dy = e2.y - e1.y;
      const distSq = dx*dx + dy*dy;
      const minDist = e1.radius + e2.radius;

      if (distSq < minDist * minDist) {
          const dist = Math.sqrt(distSq);
          const nx = dx / dist;
          const ny = dy / dist;
          const overlap = minDist - dist;

          const m1 = e1.hero ? HERO_STATS[e1.hero].mass : 0.6;
          const m2 = e2.hero ? HERO_STATS[e2.hero].mass : 0.6;
          const totalM = m1 + m2;
          
          // Separate (unless goalie on locked axis)
          let m1Share = m2 / totalM;
          let m2Share = m1 / totalM;

          if (e1.isGoalie) m1Share = 0; // Goalie heavy anchor
          if (e2.isGoalie) m2Share = 0;

          e1.x -= nx * overlap * m1Share;
          e1.y -= ny * overlap * m1Share;
          e2.x += nx * overlap * m2Share;
          e2.y += ny * overlap * m2Share;

          // Impulse
          const dvx = e2.vx - e1.vx;
          const dvy = e2.vy - e1.vy;
          const velAlongNormal = dvx * nx + dvy * ny;

          if (velAlongNormal > 0) return;

          const restitution = 0.8;
          const impulse = -(1 + restitution) * velAlongNormal / (1/m1 + 1/m2);

          e1.vx -= (1/m1) * impulse * nx;
          if (!e1.isGoalie) e1.vy -= (1/m1) * impulse * ny; // Don't push goalie vertically

          e2.vx += (1/m2) * impulse * nx;
          if (!e2.isGoalie) e2.vy += (1/m2) * impulse * ny;
      }
  };

  const handleGoal = (scorer: 'player' | 'opponent') => {
      const state = stateRef.current;
      if (scorer === 'player') state.scorePlayer++; else state.scoreOpponent++;
      state.lastScorer = scorer;
      
      state.entities.forEach(e => { e.vx = 0; e.vy = 0; });
      state.isMoving = true; 

      setUiState(s => ({
          ...s, scoreP: state.scorePlayer, scoreO: state.scoreOpponent, message: t.goal
      }));

      if(scorer === 'player') earnCredits(5);

      setTimeout(() => {
          initMatch(); 
          stateRef.current.turn = scorer === 'player' ? 'opponent' : 'player'; 
          setUiState(s => ({ ...s, turn: stateRef.current.turn, message: stateRef.current.turn === 'player' ? t.turnP : t.turnO }));
      }, 1500);
  };

  const handleAiTurn = () => {
      const state = stateRef.current;
      const ball = state.entities[0];
      const opponents = state.entities.filter(e => e.team === 'opponent');
      
      // AI Logic: Find closest to ball (excluding goalie usually, unless ball is close)
      let bestUnit = null;
      let minDist = Infinity;

      opponents.forEach(u => {
          if (u.isGoalie) return; // Basic AI doesn't shoot with goalie
          const d = Math.hypot(u.x - ball.x, u.y - ball.y);
          if(d < minDist) { minDist = d; bestUnit = u; }
      });

      if (bestUnit) {
          const dx = ball.x - bestUnit.x;
          const dy = ball.y - bestUnit.y;
          const angle = Math.atan2(dy, dx);
          
          const power = Math.min(MAX_POWER * 0.9, minDist * 0.08 + 5); 
          
          bestUnit.vx = Math.cos(angle) * power;
          bestUnit.vy = Math.sin(angle) * power;
          state.isMoving = true;
      }
  };

  // --- CONTROLS ---

  const handlePointerDown = (e: React.PointerEvent) => {
      const state = stateRef.current;
      if (state.turn !== 'player' || state.isMoving) return;

      const rect = canvasRef.current!.getBoundingClientRect();
      const scaleX = GAME_WIDTH / rect.width;
      const scaleY = GAME_HEIGHT / rect.height;
      const x = (e.clientX - rect.left) * scaleX;
      const y = (e.clientY - rect.top) * scaleY;

      // Click Player Unit
      const clicked = state.entities.find(ent => {
          return ent.team === 'player' && Math.hypot(ent.x - x, ent.y - y) < ent.radius * 1.5;
      });

      if (clicked) {
          state.selectedId = clicked.id;
          state.isDragging = true;
          state.dragStartX = x;
          state.dragStartY = y;
          state.dragCurrX = x;
          state.dragCurrY = y;
      }
  };

  const handlePointerMove = (e: React.PointerEvent) => {
      if (!stateRef.current.isDragging) return;
      const rect = canvasRef.current!.getBoundingClientRect();
      const scaleX = GAME_WIDTH / rect.width;
      const scaleY = GAME_HEIGHT / rect.height;
      stateRef.current.dragCurrX = (e.clientX - rect.left) * scaleX;
      stateRef.current.dragCurrY = (e.clientY - rect.top) * scaleY;
  };

  const handlePointerUp = () => {
      const state = stateRef.current;
      if (!state.isDragging || state.selectedId === null) return;

      const dx = state.dragStartX - state.dragCurrX;
      const dy = state.dragStartY - state.dragCurrY;
      const power = Math.min(MAX_POWER, Math.hypot(dx, dy) * 0.15);
      const angle = Math.atan2(dy, dx);

      if (power > 2) { 
          const ent = state.entities.find(e => e.id === state.selectedId);
          if (ent) {
              // Apply velocity
              ent.vx = Math.cos(angle) * power;
              
              // Only apply vertical velocity if NOT goalie
              if (!ent.isGoalie) {
                  ent.vy = Math.sin(angle) * power;
              } else {
                  // Goalie can only slide horizontally
                  ent.vy = 0;
                  // Increase horizontal power slightly for goalie to compensate
                  ent.vx *= 1.5; 
              }
              
              state.isMoving = true;
          }
      }

      state.isDragging = false;
      state.selectedId = null;
  };

  // --- RENDER ---

  const draw = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      const state = stateRef.current;

      // Clear & Background
      ctx.fillStyle = '#050b14';
      ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

      // Field Lines (Neon)
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.15)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      // Center Line
      ctx.moveTo(0, GAME_HEIGHT/2); ctx.lineTo(GAME_WIDTH, GAME_HEIGHT/2);
      // Center Circle
      ctx.moveTo(GAME_WIDTH/2 + 70, GAME_HEIGHT/2); ctx.arc(GAME_WIDTH/2, GAME_HEIGHT/2, 70, 0, Math.PI*2);
      // Goal Areas
      ctx.strokeRect((GAME_WIDTH-GOAL_WIDTH)/2, 0, GOAL_WIDTH, 60); // Top Box
      ctx.strokeRect((GAME_WIDTH-GOAL_WIDTH)/2, GAME_HEIGHT-60, GOAL_WIDTH, 60); // Bottom Box
      ctx.stroke();

      // Goals (Glow)
      ctx.shadowBlur = 20;
      ctx.fillStyle = 'rgba(239, 68, 68, 0.2)'; // Opponent Goal (Red)
      ctx.fillRect((GAME_WIDTH-GOAL_WIDTH)/2, 0, GOAL_WIDTH, 10);
      
      ctx.fillStyle = 'rgba(6, 182, 212, 0.2)'; // Player Goal (Cyan)
      ctx.fillRect((GAME_WIDTH-GOAL_WIDTH)/2, GAME_HEIGHT-10, GOAL_WIDTH, 10);
      ctx.shadowBlur = 0;

      // Entities
      state.entities.forEach(ent => {
          ctx.save();
          ctx.translate(ent.x, ent.y);

          if (ent.type === 'ball') {
              ctx.shadowColor = '#ffffff';
              ctx.shadowBlur = 15;
              ctx.fillStyle = '#ffffff';
              ctx.beginPath();
              ctx.arc(0, 0, ent.radius, 0, Math.PI*2);
              ctx.fill();
          } else if (ent.type === 'unit') {
              // Team Color Ring
              const color = ent.team === 'player' ? '#22d3ee' : '#ef4444'; // Cyan vs Red
              
              // Shadow/Glow
              ctx.shadowColor = color;
              ctx.shadowBlur = 10;

              // Draw Hero Image clipped in circle
              ctx.beginPath();
              ctx.arc(0, 0, ent.radius, 0, Math.PI*2);
              ctx.clip();
              
              if (ent.hero && imagesRef.current[ent.hero]?.complete) {
                  ctx.drawImage(imagesRef.current[ent.hero], -ent.radius, -ent.radius, ent.radius*2, ent.radius*2);
              } else {
                  ctx.fillStyle = '#333';
                  ctx.fill();
              }
              
              // Restore clip to draw ring
              ctx.restore(); 
              ctx.save();
              ctx.translate(ent.x, ent.y);

              // Border Ring
              ctx.beginPath();
              ctx.arc(0, 0, ent.radius, 0, Math.PI*2);
              ctx.strokeStyle = color;
              ctx.lineWidth = ent.isGoalie ? 5 : 3; // Thicker ring for goalie
              ctx.stroke();

              // Selection Highlight
              if (ent.id === state.selectedId) {
                  ctx.beginPath();
                  ctx.arc(0, 0, ent.radius + 6, 0, Math.PI*2);
                  ctx.strokeStyle = '#fff';
                  ctx.lineWidth = 2;
                  ctx.setLineDash([4, 4]);
                  ctx.stroke();
              }
          }
          ctx.restore();
      });

      // Drag Line
      if (state.isDragging && state.selectedId !== null) {
          const ent = state.entities.find(e => e.id === state.selectedId);
          if (ent) {
              const dx = state.dragStartX - state.dragCurrX;
              const dy = state.dragStartY - state.dragCurrY;
              
              // Visual Vector
              ctx.beginPath();
              ctx.moveTo(ent.x, ent.y);
              
              // If goalie, only draw horizontal drag line visualization to indicate constraint
              if (ent.isGoalie) {
                  ctx.lineTo(ent.x + dx, ent.y); 
              } else {
                  ctx.lineTo(ent.x + dx, ent.y + dy);
              }
              
              ctx.strokeStyle = '#facc15'; // Yellow aim
              ctx.lineWidth = 3;
              ctx.setLineDash([5, 5]);
              ctx.stroke();
              ctx.setLineDash([]);
          }
      }
  };

  const toggleSpin = (val: number) => {
      stateRef.current.spin = val;
      setUiState(prev => ({ ...prev, spin: val }));
  };

  return (
    <div className="h-full flex flex-col items-center p-2 bg-[#020617] select-none touch-none overscroll-none overflow-hidden">

      {/* HEADER — compact */}
      <div className="flex justify-between items-center w-full max-w-lg mx-auto bg-[#0f172a] px-3 py-2 rounded-xl border border-white/10 shadow-lg z-10 shrink-0">
         <button onClick={onBack} className="text-white/50 hover:text-white font-bold uppercase text-xs flex items-center gap-1">
            <ArrowLeft size={14} />
         </button>

         <div className="flex items-center gap-3 md:gap-5">
             <div className="text-center">
                 <p className="text-[8px] text-red-400 font-black uppercase tracking-widest leading-none">RED</p>
                 <p className="text-xl font-[1000] text-red-500 leading-none">{uiState.scoreO}</p>
             </div>
             <div className="text-center bg-black/40 px-2 py-1 rounded-lg border border-white/10 min-w-[70px]">
                 <p className={`text-[9px] font-black uppercase ${uiState.turn === 'player' ? 'text-cyan-400 animate-pulse' : 'text-red-400'}`}>
                     {uiState.message}
                 </p>
             </div>
             <div className="text-center">
                 <p className="text-[8px] text-cyan-400 font-black uppercase tracking-widest leading-none">BLUE</p>
                 <p className="text-xl font-[1000] text-cyan-500 leading-none">{uiState.scoreP}</p>
             </div>
         </div>

         {/* SPIN CONTROLS — inline in header on desktop */}
         <div className="hidden md:flex items-center gap-1">
             <span className="text-[8px] font-black text-white/30 uppercase mr-1">{t.spin}</span>
             <button onClick={() => toggleSpin(-1)} className={`p-1.5 rounded-lg transition-all ${uiState.spin === -1 ? 'bg-cyan-500 text-black' : 'bg-white/5 text-white/50 hover:bg-white/10'}`}><RotateCcw size={14} /></button>
             <button onClick={() => toggleSpin(0)} className={`p-1.5 rounded-lg transition-all ${uiState.spin === 0 ? 'bg-cyan-500 text-black' : 'bg-white/5 text-white/50 hover:bg-white/10'}`}><Target size={14} /></button>
             <button onClick={() => toggleSpin(1)} className={`p-1.5 rounded-lg transition-all ${uiState.spin === 1 ? 'bg-cyan-500 text-black' : 'bg-white/5 text-white/50 hover:bg-white/10'}`}><RotateCw size={14} /></button>
         </div>
      </div>

      {/* GAME CANVAS — fills remaining space */}
      <div className="flex-1 w-full max-w-lg mx-auto relative flex items-center justify-center border-2 border-[#1e293b] rounded-2xl overflow-hidden shadow-2xl shadow-cyan-500/5 touch-none min-h-0 my-1.5">
         <canvas
            ref={canvasRef}
            width={GAME_WIDTH}
            height={GAME_HEIGHT}
            className="w-full h-full object-contain cursor-crosshair bg-[#050b14]"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerUp}
            style={{ touchAction: 'none' }}
         />

         {/* Instruction Overlay */}
         {!stateRef.current.isMoving && uiState.scoreP === 0 && uiState.scoreO === 0 && (
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/15 font-black text-2xl md:text-3xl uppercase pointer-events-none whitespace-nowrap">
                 SHOOT & GOAL
             </div>
         )}
      </div>

      {/* FOOTER CONTROLS — mobile only (desktop spin is in header) */}
      <div className="md:hidden mt-1 flex gap-3 w-full max-w-lg mx-auto justify-center shrink-0">
          <div className="flex items-center gap-1.5 bg-[#0f172a] px-2 py-1.5 rounded-xl border border-white/10 shadow-lg">
              <span className="text-[9px] font-black text-white/40 uppercase px-1">{t.spin}</span>
              <button onClick={() => toggleSpin(-1)} className={`p-2 rounded-lg transition-all ${uiState.spin === -1 ? 'bg-cyan-500 text-black' : 'bg-white/5 text-white hover:bg-white/10'}`}><RotateCcw size={16} /></button>
              <button onClick={() => toggleSpin(0)} className={`p-2 rounded-lg transition-all ${uiState.spin === 0 ? 'bg-cyan-500 text-black' : 'bg-white/5 text-white hover:bg-white/10'}`}><Target size={16} /></button>
              <button onClick={() => toggleSpin(1)} className={`p-2 rounded-lg transition-all ${uiState.spin === 1 ? 'bg-cyan-500 text-black' : 'bg-white/5 text-white hover:bg-white/10'}`}><RotateCw size={16} /></button>
          </div>
      </div>

    </div>
  );
}
