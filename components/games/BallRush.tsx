
import React, { useEffect, useRef, useState } from 'react';
import { useEconomy } from '../../context/EconomyContext';
import { ArrowLeft, Play, Pause, RotateCcw } from 'lucide-react';

interface BallRushProps {
  lang: 'el' | 'en';
  onBack: () => void;
}

const CROCUS_IMG_URL = "/images/crocus.jpg";

export default function BallRush({ lang, onBack }: BallRushProps) {
  const { earnCredits } = useEconomy();
  const creditsAwardedRef = useRef(false);

  // Refs for game state to avoid re-renders during loop
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const requestRef = useRef<number | null>(null);
  const crocusImgRef = useRef<HTMLImageElement | null>(null); // Ref for the image

  const playerRef = useRef({
    x: 0, y: 0, r: 22, vx: 0, vy: 0, // Increased radius slightly for the image
    speed: 420, dashSpeed: 950,
    dashCooldown: 0, dashTime: 0, invuln: 0
  });
  const gameRef = useRef({
    score: 0, best: 0, lives: 3, level: 1,
    greens: 0, combo: 1, time: 0, slow: 0,
    over: false, running: false, paused: false,
    bgOffset: 0 // For background animation
  });
  const ballsRef = useRef<any[]>([]);
  const spawnTimerRef = useRef(0);
  const keysRef = useRef(new Set<string>());
  const lastTimeRef = useRef(0);

  // UI State for React rendering
  const [uiState, setUiState] = useState({
    score: 0, best: 0, level: 1, lives: 3, combo: 1, time: '0.0s', msg: 'Ready.'
  });

  // Init
  useEffect(() => {
    // Load best score
    const savedBest = localStorage.getItem('wisebot_ballrush_best');
    if (savedBest) gameRef.current.best = Number(savedBest);
    
    // Preload Crocus Image
    const img = new Image();
    img.src = CROCUS_IMG_URL;
    crocusImgRef.current = img;

    // Setup initial positions
    if (canvasRef.current) {
        playerRef.current.x = canvasRef.current.width / 2;
        playerRef.current.y = canvasRef.current.height - 70;
    }

    setUiState(s => ({ ...s, best: gameRef.current.best, msg: lang === 'el' ? 'Μάζευε πράσινα. Απόφυγε κόκκινα.' : 'Collect green. Avoid red.' }));

    // Start Loop
    requestRef.current = requestAnimationFrame(loop);

    return () => {
        if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  // --- GAME ENGINE ---

  const loop = (t: number) => {
    if (!lastTimeRef.current) lastTimeRef.current = t;
    const dt = Math.min(0.033, (t - lastTimeRef.current) / 1000);
    lastTimeRef.current = t;

    if (gameRef.current.running && !gameRef.current.paused) {
        update(dt);
    }
    // Always draw (for background animation even when paused/menu)
    draw(); 
    requestRef.current = requestAnimationFrame(loop);
  };

  const update = (dt: number) => {
    const canvas = canvasRef.current;
    if (!canvas || gameRef.current.over) return;
    const W = canvas.width;
    const H = canvas.height;
    const player = playerRef.current;
    const game = gameRef.current;

    // Time slow power
    const slowFactor = (game.slow > 0) ? 0.55 : 1.0;
    const effDt = dt * slowFactor;

    game.time += dt;
    // Animate background based on speed
    game.bgOffset += dt * 100 * (1 + game.level * 0.2); 
    if (game.slow > 0) game.slow = Math.max(0, game.slow - dt);

    // Dash Timers
    player.dashCooldown = Math.max(0, player.dashCooldown - dt);
    player.dashTime = Math.max(0, player.dashTime - dt);
    player.invuln = Math.max(0, player.invuln - dt);

    // Movement
    const keys = keysRef.current;
    const up = keys.has("ArrowUp") || keys.has("KeyW");
    const down = keys.has("ArrowDown") || keys.has("KeyS");
    const left = keys.has("ArrowLeft") || keys.has("KeyA");
    const right = keys.has("ArrowRight") || keys.has("KeyD");

    let mx = 0, my = 0;
    if(left) mx -= 1;
    if(right) mx += 1;
    if(up) my -= 1;
    if(down) my += 1;

    const mag = Math.hypot(mx,my) || 1;
    mx /= mag; my /= mag;

    const sp = (player.dashTime > 0) ? player.dashSpeed : player.speed;
    player.vx = mx * sp;
    player.vy = my * sp;

    player.x = Math.max(player.r, Math.min(W - player.r, player.x + player.vx * effDt));
    player.y = Math.max(player.r, Math.min(H - player.r, player.y + player.vy * effDt));

    // Spawning
    const spawnsPerSec = Math.max(1.25, Math.min(4.0, 1.25 + game.level * 0.22));
    spawnTimerRef.current += dt;
    while(spawnTimerRef.current >= 1/spawnsPerSec){
        spawnTimerRef.current -= 1/spawnsPerSec;
        spawnBall(W);
        if(game.level >= 4 && Math.random() < 0.08) spawnBall(W);
    }

    // Update Balls
    const balls = ballsRef.current;
    for(let i = balls.length-1; i >= 0; i--){
        const b = balls[i];
        b.wobble += dt * (0.8 + game.level*0.05);
        b.x += Math.sin(b.wobble) * dt * (b.type==="red" ? 45 : 28);
        b.y += b.vy * effDt;

        if(b.y - b.r > H + 40){
            balls.splice(i,1);
            continue;
        }

        // Collision
        const dx = player.x - b.x;
        const dy = player.y - b.y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        if (dist <= player.r + b.r) {
            handleHit(b);
            balls.splice(i,1);
        }
    }

    // Level Up
    if(game.greens >= 12){
        game.greens = 0;
        game.level += 1;
        setUiState(s => ({...s, msg: `Level up → ${game.level}`}));
    }

    // High Score
    if(game.score > game.best){
        game.best = game.score;
        localStorage.setItem('wisebot_ballrush_best', String(Math.floor(game.best)));
    }

    // Sync UI (Throttled could be better but this is simple)
    setUiState(prev => ({
        ...prev,
        score: Math.floor(game.score),
        best: Math.floor(game.best),
        lives: game.lives,
        level: game.level,
        combo: game.combo,
        time: game.time.toFixed(1) + 's'
    }));
  };

  const spawnBall = (W: number) => {
      const lvl = gameRef.current.level;
      const goldChance = Math.min(0.06, 0.01 + lvl*0.002);
      const redChance = Math.max(0.18, Math.min(0.60, 0.18 + lvl*0.03));

      let type = "green";
      const r = Math.random();
      if(r < goldChance) type = "gold";
      else if(r < goldChance + redChance) type = "red";

      const radius = (type==="gold") ? 12 : (type==="red" ? (12 + Math.random()*6) : (10 + Math.random()*6));
      const speedBase = 170 + lvl*28;
      const speed = speedBase * (type==="red" ? 1.15 : 1.0);

      ballsRef.current.push({
        x: radius + Math.random()*(W - radius*2),
        y: -radius - Math.random()*120,
        r: radius,
        vy: speed,
        type,
        wobble: Math.random() * Math.PI * 2
      });
  };

  const handleHit = (ball: any) => {
      const game = gameRef.current;
      const player = playerRef.current;

      if(ball.type === "green"){
        const gain = 10 * game.combo;
        game.score += gain;
        game.greens += 1;
        game.combo = Math.min(8, game.combo + 1);
        setUiState(s => ({...s, msg: `+${gain} (x${game.combo})`}));
        return;
      }
      if(ball.type === "gold"){
        game.score += 60;
        game.slow = 2.5; 
        game.combo = Math.min(8, game.combo + 1);
        setUiState(s => ({...s, msg: 'FOCUS ON (slow) +60'}));
        return;
      }
      // Red
      if(player.invuln > 0) {
        game.score += 2;
        setUiState(s => ({...s, msg: 'Dash save +2'}));
        return;
      }
      game.lives -= 1;
      game.combo = 1;
      player.invuln = 0.9;
      setUiState(s => ({...s, msg: 'HIT!'}));
      
      if(game.lives <= 0){
        gameOver();
      }
  };

  const gameOver = () => {
      gameRef.current.over = true;
      gameRef.current.running = false;
      setUiState(s => ({...s, msg: 'GAME OVER'}));
      
      if (gameRef.current.score > 100 && !creditsAwardedRef.current) {
          creditsAwardedRef.current = true;
          earnCredits(5);
      }
  };

  const draw = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      const W = canvas.width;
      const H = canvas.height;
      const player = playerRef.current;
      const balls = ballsRef.current;
      const game = gameRef.current;

      // --- 1. BACKGROUND (Dynamic Grid) ---
      // Clear
      ctx.fillStyle = "#0B0F1A";
      ctx.fillRect(0, 0, W, H);

      // Create Gradient Background
      const bgGrad = ctx.createLinearGradient(0, 0, 0, H);
      bgGrad.addColorStop(0, "#02040a");
      bgGrad.addColorStop(1, "#0f1730");
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, W, H);

      // Draw Moving Grid (Vertical scrolling effect)
      ctx.save();
      ctx.beginPath();
      ctx.strokeStyle = "rgba(81, 167, 255, 0.1)";
      ctx.lineWidth = 1;
      
      // Vertical lines (perspective)
      for (let x = 0; x <= W; x += 60) {
          ctx.moveTo(x, 0);
          ctx.lineTo(x, H);
      }
      
      // Horizontal lines (moving)
      const gridSize = 60;
      const offset = game.bgOffset % gridSize;
      for (let y = -gridSize; y <= H; y += gridSize) {
          const drawY = y + offset;
          ctx.moveTo(0, drawY);
          ctx.lineTo(W, drawY);
      }
      ctx.stroke();
      ctx.restore();

      // Vignette Overlay
      const g = ctx.createRadialGradient(W/2,H/2, 80, W/2,H/2, 520);
      g.addColorStop(0, "rgba(0,0,0,0)");
      g.addColorStop(1, "rgba(0,0,0,0.4)");
      ctx.fillStyle = g;
      ctx.fillRect(0,0,W,H);

      // --- 2. BALLS ---
      balls.forEach(b => {
          let fill = "rgba(124,255,107,0.95)";
          let glow = "rgba(124,255,107,0.15)";
          if (b.type === 'red') { fill = "rgba(255,77,109,0.95)"; glow = "rgba(255,77,109,0.18)"; }
          if (b.type === 'gold') { fill = "rgba(255,204,102,0.95)"; glow = "rgba(255,204,102,0.18)"; }

          ctx.save();
          // Glow
          ctx.beginPath();
          ctx.fillStyle = glow;
          ctx.arc(b.x, b.y, b.r*2.2, 0, Math.PI*2);
          ctx.fill();

          // Ball Body
          const grad = ctx.createRadialGradient(b.x-b.r*0.3, b.y-b.r*0.3, b.r*0.2, b.x, b.y, b.r);
          grad.addColorStop(0, "rgba(255,255,255,0.65)");
          grad.addColorStop(1, fill);
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(b.x, b.y, b.r, 0, Math.PI*2);
          ctx.fill();
          ctx.restore();
      });

      // --- 3. PLAYER (CROCUS IMAGE) ---
      ctx.save();
      
      // Draw Aura
      const aura = ctx.createRadialGradient(player.x, player.y, player.r*0.5, player.x, player.y, player.r*2.5);
      aura.addColorStop(0, "rgba(81,167,255,0.2)");
      aura.addColorStop(1, "rgba(81,167,255,0)");
      ctx.fillStyle = aura;
      ctx.beginPath();
      ctx.arc(player.x, player.y, player.r*2.5, 0, Math.PI*2);
      ctx.fill();

      // Draw Crocus
      if (crocusImgRef.current && crocusImgRef.current.complete) {
          ctx.beginPath();
          ctx.arc(player.x, player.y, player.r, 0, Math.PI * 2);
          ctx.closePath();
          ctx.clip(); // Mask image to circle
          
          // Draw Image
          ctx.drawImage(
              crocusImgRef.current, 
              player.x - player.r, 
              player.y - player.r, 
              player.r * 2, 
              player.r * 2
          );
      } else {
          // Fallback if image not loaded
          ctx.fillStyle = "#22c55e";
          ctx.beginPath();
          ctx.arc(player.x, player.y, player.r, 0, Math.PI * 2);
          ctx.fill();
      }
      
      // Ring Border around Crocus
      ctx.beginPath();
      ctx.arc(player.x, player.y, player.r, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(255, 255, 255, 0.8)";
      ctx.lineWidth = 3;
      ctx.stroke();

      // Invuln Effect (Shield)
      if(player.invuln > 0){
        ctx.globalAlpha = 0.6;
        ctx.strokeStyle = "rgba(255,204,102,0.9)";
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.arc(player.x, player.y, player.r + 8 + Math.sin(Date.now()*0.02)*2, 0, Math.PI*2);
        ctx.stroke();
      }
      ctx.restore();

      // --- 4. HUD & UI ---
      ctx.save();
      ctx.globalAlpha = 0.9;
      ctx.fillStyle = "rgba(234,240,255,0.85)";
      ctx.font = "12px sans-serif";
      const slowTxt = game.slow > 0 ? `FOCUS ${game.slow.toFixed(1)}s` : "";
      const dashTxt = player.dashCooldown > 0 ? `DASH CD ${player.dashCooldown.toFixed(1)}s` : "DASH READY (Space)";
      ctx.fillText(`${slowTxt}  ${dashTxt}`.trim(), 14, 22);
      ctx.restore();

      if(game.paused){
          ctx.fillStyle = "rgba(0,0,0,0.55)";
          ctx.fillRect(0,0,W,H);
          ctx.fillStyle = "white";
          ctx.font = "900 30px sans-serif";
          ctx.textAlign = "center";
          ctx.fillText("PAUSED", W/2, H/2);
      }
      if(game.over){
          ctx.fillStyle = "rgba(0,0,0,0.7)";
          ctx.fillRect(0,0,W,H);
          ctx.fillStyle = "white";
          ctx.font = "900 40px sans-serif";
          ctx.textAlign = "center";
          ctx.fillText("GAME OVER", W/2, H/2);
      }
  };

  // --- CONTROLS ---

  const handleKeyDown = (e: KeyboardEvent) => {
      keysRef.current.add(e.code);
      if(e.code === "Space") {
          const p = playerRef.current;
          if(p.dashCooldown <= 0 && p.dashTime <= 0) {
              p.dashTime = 0.12;
              p.dashCooldown = 0.55;
              p.invuln = Math.max(p.invuln, 0.12);
          }
      }
      if(e.code === "KeyP") togglePause();
      if(e.code === "KeyR") resetGame();
  };

  const handleKeyUp = (e: KeyboardEvent) => {
      keysRef.current.delete(e.code);
  };

  useEffect(() => {
      window.addEventListener("keydown", handleKeyDown);
      window.addEventListener("keyup", handleKeyUp);
      return () => {
          window.removeEventListener("keydown", handleKeyDown);
          window.removeEventListener("keyup", handleKeyUp);
      };
  }, []);

  const togglePause = () => {
      if(!gameRef.current.running || gameRef.current.over) return;
      gameRef.current.paused = !gameRef.current.paused;
      setUiState(s => ({...s, msg: gameRef.current.paused ? 'Paused.' : 'Go.'}));
  };

  const resetGame = () => {
      const g = gameRef.current;
      const p = playerRef.current;
      const canvas = canvasRef.current;
      
      ballsRef.current = [];
      spawnTimerRef.current = 0;
      if(canvas) {
          p.x = canvas.width/2; 
          p.y = canvas.height-70;
      }
      p.vx = 0; p.vy = 0; p.dashCooldown = 0; p.dashTime = 0; p.invuln = 0;

      g.score = 0; g.lives = 3; g.level = 1; g.greens = 0; g.combo = 1; g.time = 0; g.slow = 0;
      g.over = false; g.running = false; g.paused = false;

      setUiState(s => ({
          ...s, score: 0, lives: 3, level: 1, combo: 1, time: '0.0s', msg: 'Ready.'
      }));
  };

  const startGame = () => {
      if(gameRef.current.over) resetGame();
      gameRef.current.running = true;
      gameRef.current.paused = false;
      setUiState(s => ({...s, msg: 'Go!'}));
  };

  // Mobile Touch Controls
  const handleTouchStart = (code: string) => (e: any) => { e.preventDefault(); keysRef.current.add(code); };
  const handleTouchEnd = (code: string) => (e: any) => { e.preventDefault(); keysRef.current.delete(code); };

  return (
    <div className="h-full flex flex-col p-2 max-w-5xl mx-auto w-full overflow-hidden">

      {/* Header */}
      <div className="flex justify-between items-center mb-2 bg-black/40 px-3 py-2 rounded-xl border border-white/10 backdrop-blur-md shadow-lg shrink-0">
         <button onClick={onBack} className="text-white/50 hover:text-white font-bold uppercase text-xs flex items-center gap-2">
            <ArrowLeft size={16} /> {lang === 'el' ? 'ΠΙΣΩ' : 'BACK'}
         </button>
         <div className="flex flex-col items-center">
            <h2 className="text-2xl font-[1000] text-emerald-400 italic tracking-tighter">BALL RUSH</h2>
            <p className="text-[10px] text-white/50 font-bold uppercase">{uiState.msg}</p>
         </div>
         <div className="text-right">
            <p className="text-[9px] text-white/40 font-black uppercase tracking-widest">SCORE</p>
            <p className="text-2xl font-black text-white leading-none">{uiState.score}</p>
         </div>
      </div>

      {/* Stats Bar */}
      <div className="flex gap-2 mb-2 justify-center flex-wrap shrink-0">
         <div className="bg-white/5 px-3 py-1 rounded-lg border border-white/5 text-xs font-bold text-white/80">
            LIVES: <span className="text-red-400 text-base">{uiState.lives}</span>
         </div>
         <div className="bg-white/5 px-3 py-1 rounded-lg border border-white/5 text-xs font-bold text-white/80">
            COMBO: <span className="text-amber-400 text-base">x{uiState.combo}</span>
         </div>
         <div className="bg-white/5 px-3 py-1 rounded-lg border border-white/5 text-xs font-bold text-white/80">
            LEVEL: <span className="text-cyan-400 text-base">{uiState.level}</span>
         </div>
         <div className="bg-white/5 px-3 py-1 rounded-lg border border-white/5 text-xs font-bold text-white/80">
            TIME: <span className="text-white text-base">{uiState.time}</span>
         </div>
      </div>

      {/* Game Canvas Container */}
      <div className="flex-1 min-h-0 relative rounded-xl overflow-hidden border-2 border-white/10 shadow-2xl bg-[#0B0F1A]">
         <canvas 
            ref={canvasRef} 
            width={900} 
            height={500} 
            className="w-full h-full object-contain block bg-[#0B0F1A]"
         />
         
         {/* Start Overlay */}
         {!gameRef.current.running && !gameRef.current.over && (
             <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm">
                 <button 
                    onClick={startGame}
                    className="px-12 py-5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-[1000] rounded-2xl uppercase tracking-widest hover:scale-105 transition-transform flex items-center gap-3 shadow-xl text-xl"
                 >
                    <Play size={28} fill="currentColor" /> {lang === 'el' ? 'ΕΚΚΙΝΗΣΗ' : 'START'}
                 </button>
             </div>
         )}
      </div>

      {/* Controls Footer */}
      <div className="mt-2 grid grid-cols-3 gap-2 shrink-0">
         <div className="col-span-1 flex gap-1.5">
             <button onClick={startGame} disabled={gameRef.current.running && !gameRef.current.over} className="p-2 bg-emerald-600/20 hover:bg-emerald-600/40 text-emerald-400 rounded-lg border border-emerald-500/30 flex-1 flex justify-center disabled:opacity-50"><Play size={16}/></button>
             <button onClick={togglePause} className="p-2 bg-white/5 hover:bg-white/10 text-white rounded-lg border border-white/10 flex-1 flex justify-center"><Pause size={16}/></button>
             <button onClick={resetGame} className="p-2 bg-red-500/20 hover:bg-red-500/40 text-red-400 rounded-lg border border-red-500/30 flex-1 flex justify-center"><RotateCcw size={16}/></button>
         </div>

         {/* D-Pad for Touch */}
         <div className="col-span-2 flex gap-1.5 justify-end touch-none select-none">
             <button
                onPointerDown={handleTouchStart('ArrowLeft')} onPointerUp={handleTouchEnd('ArrowLeft')} onPointerLeave={handleTouchEnd('ArrowLeft')}
                className="w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center active:bg-blue-500 active:text-white transition-colors border border-white/10"
             >◀</button>
             <div className="flex flex-col gap-1.5">
                <button
                    onPointerDown={handleTouchStart('ArrowUp')} onPointerUp={handleTouchEnd('ArrowUp')} onPointerLeave={handleTouchEnd('ArrowUp')}
                    className="w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center active:bg-blue-500 active:text-white transition-colors border border-white/10"
                >▲</button>
                <button
                    onPointerDown={handleTouchStart('ArrowDown')} onPointerUp={handleTouchEnd('ArrowDown')} onPointerLeave={handleTouchEnd('ArrowDown')}
                    className="w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center active:bg-blue-500 active:text-white transition-colors border border-white/10"
                >▼</button>
             </div>
             <button
                onPointerDown={handleTouchStart('ArrowRight')} onPointerUp={handleTouchEnd('ArrowRight')} onPointerLeave={handleTouchEnd('ArrowRight')}
                className="w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center active:bg-blue-500 active:text-white transition-colors border border-white/10"
             >▶</button>

             {/* Dash Button */}
             <button
                onPointerDown={handleTouchStart('Space')} onPointerUp={handleTouchEnd('Space')} onPointerLeave={handleTouchEnd('Space')}
                className="w-16 h-full ml-2 bg-amber-500/20 text-amber-400 font-black text-xs rounded-xl border border-amber-500/30 active:bg-amber-500 active:text-black transition-colors"
             >DASH</button>
         </div>
      </div>

    </div>
  );
}
