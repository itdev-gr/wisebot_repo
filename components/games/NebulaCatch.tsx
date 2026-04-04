
import React, { useState, useEffect, useRef } from 'react';
import { Heart, Trophy, Play, RefreshCcw, ArrowLeft, Zap } from 'lucide-react';
import { HEROES } from '../../constants';
interface NebulaCatchProps {
  lang: 'el' | 'en';
  onBack: () => void;
}

export default function NebulaCatch({ lang, onBack }: NebulaCatchProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(5);
  const [selectedHero, setSelectedHero] = useState(HEROES[0]);
  const [highScore, setHighScore] = useState(() => {
    return parseInt(localStorage.getItem('wb_nebula_hi') || '0');
  });

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gameLoopRef = useRef<number | null>(null);
  const itemsRef = useRef<any[]>([]);
  const lastSpawnTime = useRef(0);
  const speedMultiplier = useRef(1);

  const scoreRef = useRef(0);
  const livesRef = useRef(5);
  const isPlayingRef = useRef(false);
  const heroXRef = useRef(50);
  const heroImgRef = useRef<HTMLImageElement | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Particles
  const particlesRef = useRef<{x: number, y: number, vx: number, vy: number, life: number, color: string, size: number}[]>([]);

  const t = {
    title: 'NEBULA CATCH',
    score: lang === 'el' ? 'ΣΚΟΡ' : 'SCORE',
    gameOver: lang === 'el' ? 'ΤΕΛΟΣ' : 'GAME OVER',
    retry: lang === 'el' ? 'ΠΑΙΞΕ ΞΑΝΑ' : 'PLAY AGAIN',
    start: lang === 'el' ? 'ΕΚΚΙΝΗΣΗ' : 'START GAME',
    select: lang === 'el' ? 'ΕΠΙΛΕΞΕ ΗΡΩΑ' : 'SELECT HERO',
    instructions: lang === 'el' ? 'Σύρε για μετακίνηση. Πιάσε ⚡ Απόφυγε 🐞' : 'Slide to move. Catch ⚡ Avoid 🐞',
    reward: lang === 'el' ? 'ΚΕΡΔΙΣΕΣ 5 CREDITS!' : 'YOU WON 5 CREDITS!',
    back: lang === 'el' ? 'ΠΙΣΩ' : 'BACK',
    best: lang === 'el' ? 'ΡΕΚΟΡ' : 'BEST',
    newRecord: lang === 'el' ? 'ΝΕΟ ΡΕΚΟΡ!' : 'NEW RECORD!',
  };

  // Load hero image
  useEffect(() => {
    const img = new Image();
    img.src = selectedHero.avatar;
    heroImgRef.current = img;
  }, [selectedHero]);

  const getContainerSize = () => {
    if (!containerRef.current) return { w: 400, h: 600 };
    const rect = containerRef.current.getBoundingClientRect();
    return { w: rect.width, h: rect.height };
  };

  const updateHeroPosition = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(5, Math.min(95, (x / rect.width) * 100));
    heroXRef.current = percent;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isPlayingRef.current) return;
    updateHeroPosition(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isPlayingRef.current) return;
    e.preventDefault();
    updateHeroPosition(e.touches[0].clientX);
  };

  const spawnParticles = (x: number, y: number, color: string, count: number) => {
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + Math.random() * 0.5;
      const speed = 1 + Math.random() * 3;
      particlesRef.current.push({
        x, y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 1,
        life: 1,
        color,
        size: 2 + Math.random() * 3,
      });
    }
  };

  const startGame = () => {
    setIsPlaying(true);
    isPlayingRef.current = true;
    setGameOver(false);
    setScore(0);
    scoreRef.current = 0;
    setLives(5);
    livesRef.current = 5;
    itemsRef.current = [];
    particlesRef.current = [];
    speedMultiplier.current = 1;
    heroXRef.current = 50;
    lastSpawnTime.current = performance.now();
    gameLoopRef.current = requestAnimationFrame(gameLoop);
  };

  const stopGame = () => {
    setIsPlaying(false);
    isPlayingRef.current = false;
    if (gameLoopRef.current) cancelAnimationFrame(gameLoopRef.current);
  };

  const endGame = () => {
    stopGame();
    setGameOver(true);
    const finalScore = scoreRef.current;
    if (finalScore > highScore) {
      setHighScore(finalScore);
      localStorage.setItem('wb_nebula_hi', finalScore.toString());
    }
  };

  const gameLoop = (time: number) => {
    if (!isPlayingRef.current) return;

    const { w, h } = getContainerSize();
    const difficultyFactor = Math.min(1500, scoreRef.current * 10);
    const spawnRate = Math.max(400, 1500 - difficultyFactor);

    // Spawn items
    if (time - lastSpawnTime.current > spawnRate) {
      const type = Math.random() > 0.35 ? 'good' : 'bad';
      itemsRef.current.push({
        id: Math.random().toString(),
        x: Math.random() * 85 + 7.5,
        y: -5,
        type,
        speed: (Math.random() * 0.3 + 0.35) * speedMultiplier.current,
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 4,
      });
      lastSpawnTime.current = time;
    }

    const heroX = heroXRef.current;
    const hitRange = 8;
    const nextItems: any[] = [];
    let stateChanged = false;

    itemsRef.current.forEach(item => {
      item.y += item.speed;
      item.rotation += item.rotSpeed;
      let caught = false;

      // Collision with Hero
      if (item.y > 82 && item.y < 98) {
        if (Math.abs(item.x - heroX) < hitRange) {
          if (item.type === 'good') {
            scoreRef.current += 10;
            if (scoreRef.current % 50 === 0) speedMultiplier.current += 0.08;
            spawnParticles(item.x, item.y, '#FCD34D', 8);
            stateChanged = true;
            caught = true;
          } else {
            livesRef.current -= 1;
            spawnParticles(item.x, item.y, '#EF4444', 6);
            stateChanged = true;
            caught = true;
          }
        }
      }

      if (!caught) {
        if (item.y > 105) {
          if (item.type === 'good') {
            livesRef.current -= 1;
            stateChanged = true;
          }
        } else {
          nextItems.push(item);
        }
      }
    });

    itemsRef.current = nextItems;

    // Update particles
    particlesRef.current = particlesRef.current.filter(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.1;
      p.life -= 0.03;
      return p.life > 0;
    });

    if (stateChanged) {
      setScore(scoreRef.current);
      setLives(livesRef.current);
    }

    // Draw
    draw();

    if (livesRef.current <= 0) {
      endGame();
    } else {
      gameLoopRef.current = requestAnimationFrame(gameLoop);
    }
  };

  const draw = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const { w, h } = getContainerSize();

    // Ensure canvas matches container
    if (canvas.width !== w * 2 || canvas.height !== h * 2) {
      canvas.width = w * 2;
      canvas.height = h * 2;
      ctx.scale(2, 2); // Retina
    }
    ctx.clearRect(0, 0, w, h);

    // Background gradient
    const bgGrad = ctx.createLinearGradient(0, 0, 0, h);
    bgGrad.addColorStop(0, '#0B0F1A');
    bgGrad.addColorStop(0.5, '#0a1628');
    bgGrad.addColorStop(1, '#0B0F1A');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, w, h);

    // Stars
    ctx.fillStyle = 'rgba(255,255,255,0.3)';
    for (let i = 0; i < 50; i++) {
      const sx = (Math.sin(i * 127.3) * 0.5 + 0.5) * w;
      const sy = (Math.cos(i * 89.7) * 0.5 + 0.5) * h;
      const size = 1 + (i % 3);
      ctx.globalAlpha = 0.2 + Math.sin(performance.now() / 1000 + i) * 0.15;
      ctx.fillRect(sx, sy, size, size);
    }
    ctx.globalAlpha = 1;

    // Items
    itemsRef.current.forEach(item => {
      const ix = (item.x / 100) * w;
      const iy = (item.y / 100) * h;
      const size = w * 0.08;

      ctx.save();
      ctx.translate(ix, iy);
      ctx.rotate(item.rotation * Math.PI / 180);

      if (item.type === 'good') {
        // Energy bolt glow
        ctx.shadowColor = '#FCD34D';
        ctx.shadowBlur = 15;
        ctx.fillStyle = '#FCD34D';
        ctx.font = `${size}px Arial`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('⚡', 0, 0);
        ctx.shadowBlur = 0;
      } else {
        // Bug glow
        ctx.shadowColor = '#EF4444';
        ctx.shadowBlur = 12;
        ctx.fillStyle = '#EF4444';
        ctx.font = `${size}px Arial`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('🐞', 0, 0);
        ctx.shadowBlur = 0;
      }
      ctx.restore();
    });

    // Particles
    particlesRef.current.forEach(p => {
      const px = (p.x / 100) * w;
      const py = (p.y / 100) * h;
      ctx.globalAlpha = p.life;
      ctx.fillStyle = p.color;
      ctx.shadowColor = p.color;
      ctx.shadowBlur = 8;
      ctx.beginPath();
      ctx.arc(px, py, p.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;
    });
    ctx.globalAlpha = 1;

    // Hero
    const hx = (heroXRef.current / 100) * w;
    const hy = h * 0.88;
    const heroSize = w * 0.12;

    // Hero glow
    ctx.shadowColor = '#10B981';
    ctx.shadowBlur = 25;
    ctx.beginPath();
    ctx.arc(hx, hy, heroSize / 2, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(16, 185, 129, 0.6)';
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.shadowBlur = 0;

    // Hero image
    if (heroImgRef.current?.complete) {
      ctx.save();
      ctx.beginPath();
      ctx.arc(hx, hy, heroSize / 2 - 2, 0, Math.PI * 2);
      ctx.clip();
      ctx.drawImage(heroImgRef.current, hx - heroSize/2 + 2, hy - heroSize/2 + 2, heroSize - 4, heroSize - 4);
      ctx.restore();
    }

    // Hero border
    ctx.beginPath();
    ctx.arc(hx, hy, heroSize / 2, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(255,255,255,0.5)';
    ctx.lineWidth = 2;
    ctx.stroke();
  };

  useEffect(() => {
    return () => stopGame();
  }, []);

  return (
    <div className="h-full flex flex-col select-none relative overflow-hidden">

      {/* HEADER */}
      <div className="flex justify-between items-center bg-black/60 backdrop-blur-xl px-3 py-2 rounded-xl border border-white/10 shadow-xl relative z-10 mx-2 mt-1 shrink-0">
         <button onClick={onBack} className="text-white/50 hover:text-white font-bold uppercase text-xs flex items-center gap-1.5 py-1 px-2">
           <ArrowLeft size={14} /> {t.back}
         </button>

         {/* LIVES */}
         <div className="flex gap-1.5">
           {[...Array(5)].map((_, i) => (
             <div key={i} className={`transition-all duration-300 ${i < lives ? 'text-red-500 scale-100' : 'text-gray-700 scale-75 opacity-30'}`}>
               <Heart size={16} fill={i < lives ? "currentColor" : "none"} strokeWidth={3} />
             </div>
           ))}
         </div>

         {/* SCORE */}
         <div className="text-right">
           <span className="text-[9px] font-black text-white/50 uppercase tracking-widest">{t.score}</span>
           <span className="text-2xl font-[1000] text-amber-400 font-mono tracking-widest ml-2 drop-shadow-[0_0_10px_rgba(251,191,36,0.4)]">{score}</span>
         </div>
      </div>

      {/* GAME CANVAS */}
      <div
        ref={containerRef}
        className="flex-1 min-h-0 relative overflow-hidden mx-2 mb-1 mt-1 rounded-2xl border-2 border-emerald-900/50"
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        style={{ touchAction: 'none', cursor: isPlaying ? 'none' : 'default' }}
      >
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
        />

        {/* GAME OVER SCREEN */}
        {gameOver && (
          <div className="absolute inset-0 z-50 bg-black/85 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center">
            <Trophy size={56} className="text-yellow-400 mb-3 animate-bounce" />
            <h2 className="text-3xl md:text-4xl font-[1000] text-white italic uppercase tracking-tighter mb-1">{t.gameOver}</h2>
            <p className="text-white/60 font-bold text-xl mb-2">{t.score}: {score}</p>
            {score > highScore - score && score > 0 && score >= highScore && (
              <p className="text-amber-400 font-[1000] text-sm uppercase tracking-widest mb-2 animate-pulse">🏆 {t.newRecord}</p>
            )}
            {score > 50 && (
              <div className="bg-emerald-500/20 border border-emerald-500/50 text-emerald-300 px-5 py-2 rounded-xl font-black uppercase tracking-widest mb-4 text-sm">
                {t.reward}
              </div>
            )}
            <button onClick={startGame} className="px-8 py-3.5 bg-white text-black rounded-2xl font-[1000] uppercase tracking-widest hover:scale-105 active:scale-95 transition-all flex items-center gap-2.5 shadow-xl text-sm">
              <RefreshCcw size={18} /> {t.retry}
            </button>
          </div>
        )}

        {/* START SCREEN */}
        {!isPlaying && !gameOver && (
          <div className="absolute inset-0 z-50 bg-black/70 backdrop-blur-md flex flex-col items-center justify-center p-4 text-center overflow-y-auto">
            <Zap size={48} className="text-amber-400 mb-2 drop-shadow-[0_0_20px_rgba(251,191,36,0.5)]" />
            <h2 className="text-3xl font-[1000] text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-400 italic tracking-tighter mb-1">NEBULA CATCH</h2>

            <p className="text-white/50 text-xs font-bold uppercase tracking-widest mb-4">{t.select}</p>

            <div className="flex gap-3 mb-5 flex-wrap justify-center max-w-xs">
              {HEROES.map(h => (
                <div key={h.id} onClick={() => setSelectedHero(h)} className={`w-16 h-16 rounded-2xl border-3 cursor-pointer overflow-hidden transition-all ${selectedHero.id === h.id ? 'border-emerald-500 scale-110 shadow-lg shadow-emerald-500/30 ring-2 ring-emerald-400/50' : 'border-white/10 opacity-50 hover:opacity-90 active:opacity-90'}`}>
                  <img src={h.avatar} className="w-full h-full object-cover" alt={h.name} />
                </div>
              ))}
            </div>

            <p className="text-white/60 text-xs font-bold max-w-xs mx-auto mb-5 bg-white/5 p-3 rounded-xl border border-white/10">{t.instructions}</p>

            {highScore > 0 && (
              <p className="text-white/40 text-xs font-black uppercase tracking-widest mb-3">🏆 {t.best}: {highScore}</p>
            )}

            <button onClick={startGame} className="px-10 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-2xl font-[1000] uppercase tracking-widest hover:scale-105 active:scale-95 transition-all flex items-center gap-2.5 shadow-xl ring-4 ring-emerald-500/20 text-sm">
              <Play size={20} fill="currentColor" /> {t.start}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
