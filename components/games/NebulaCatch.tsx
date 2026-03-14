
import React, { useState, useEffect, useRef } from 'react';
import { Heart, Trophy, Play, RefreshCcw } from 'lucide-react';
import { HEROES } from '../../constants';
import { useEconomy } from '../../context/EconomyContext';

interface NebulaCatchProps {
  lang: 'el' | 'en';
  onBack: () => void;
}

export default function NebulaCatch({ lang, onBack }: NebulaCatchProps) {
  const { earnCredits } = useEconomy();
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(5); // Start with 5 lives
  const [selectedHero, setSelectedHero] = useState(HEROES[0]);
  
  const gameLoopRef = useRef<number | null>(null);
  const itemsRef = useRef<any[]>([]); 
  const containerRef = useRef<HTMLDivElement>(null);
  const lastSpawnTime = useRef(0);
  const speedMultiplier = useRef(1);
  
  const scoreRef = useRef(0);
  const livesRef = useRef(5); // Start with 5 lives
  const isPlayingRef = useRef(false);
  const heroXRef = useRef(50); 

  const t = {
    title: 'NEBULA CATCH',
    score: lang === 'el' ? 'ΣΚΟΡ' : 'SCORE',
    gameOver: lang === 'el' ? 'ΤΕΛΟΣ ΠΑΙΧΝΙΔΙΟΥ' : 'GAME OVER',
    retry: lang === 'el' ? 'ΠΑΙΞΕ ΞΑΝΑ' : 'PLAY AGAIN',
    start: lang === 'el' ? 'ΕΚΚΙΝΗΣΗ' : 'START GAME',
    select: lang === 'el' ? 'ΕΠΙΛΕΞΕ ΗΡΩΑ' : 'SELECT HERO',
    instructions: lang === 'el' ? 'Κούνα το δάχτυλο/ποντίκι. Πιάσε ⚡. Απόφυγε 🐞.' : 'Slide to move. Catch ⚡. Avoid 🐞.',
    reward: lang === 'el' ? 'ΚΕΡΔΙΣΕΣ 5 CREDITS!' : 'YOU WON 5 CREDITS!',
    back: lang === 'el' ? 'ΠΙΣΩ' : 'BACK',
    missed: lang === 'el' ? 'Μην χάνεις ενέργεια!' : 'Don\'t miss energy!'
  };

  const updateHeroPosition = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    heroXRef.current = percent;
    const heroEl = document.getElementById('game-hero');
    if (heroEl) heroEl.style.left = `${percent}%`;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isPlayingRef.current) return;
    updateHeroPosition(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isPlayingRef.current) return;
    // Prevent scrolling
    // e.preventDefault() is handled by touch-action: none in CSS usually, but good practice if not passive
    updateHeroPosition(e.touches[0].clientX);
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
    speedMultiplier.current = 1;
    heroXRef.current = 50;
    const heroEl = document.getElementById('game-hero');
    if (heroEl) heroEl.style.left = '50%';
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
    if (scoreRef.current > 50) earnCredits(5);
  };

  const gameLoop = (time: number) => {
    if (!isPlayingRef.current) return;
    const difficultyFactor = Math.min(1500, scoreRef.current * 10); 
    const spawnRate = Math.max(400, 1500 - difficultyFactor); 

    if (time - lastSpawnTime.current > spawnRate) {
        const type = Math.random() > 0.35 ? 'good' : 'bad';
        itemsRef.current.push({
            id: Math.random().toString(),
            x: Math.random() * 90 + 5,
            y: -10,
            type: type,
            speed: (Math.random() * 0.4 + 0.4) * speedMultiplier.current
        });
        lastSpawnTime.current = time;
    }

    const heroTopLimit = 85; 
    const heroX = heroXRef.current;
    const hitRange = 8;
    const nextItems: any[] = [];
    let stateChanged = false;

    itemsRef.current.forEach(item => {
        item.y += item.speed;
        let caught = false;

        // Collision with Hero
        if (item.y > heroTopLimit && item.y < 100) {
            if (Math.abs(item.x - heroX) < hitRange) {
                if (item.type === 'good') {
                    scoreRef.current += 10;
                    if (scoreRef.current % 50 === 0) speedMultiplier.current += 0.1;
                    stateChanged = true;
                    caught = true;
                } else {
                    livesRef.current -= 1;
                    stateChanged = true;
                    caught = true;
                }
            }
        }

        if (!caught) {
            // Check if missed (went off screen)
            if (item.y > 105) {
                if (item.type === 'good') {
                    livesRef.current -= 1; // Lose life if you miss energy
                    stateChanged = true;
                }
                // If it was 'bad' (bug), it just falls away safely
            } else {
                nextItems.push(item);
            }
        }
    });

    itemsRef.current = nextItems;
    
    // Render Items
    const container = document.getElementById('game-items-layer');
    if (container) {
        container.innerHTML = '';
        itemsRef.current.forEach(item => {
            const el = document.createElement('div');
            el.className = `absolute w-8 h-8 flex items-center justify-center transform -translate-x-1/2 transition-none will-change-transform`;
            el.style.left = `${item.x}%`;
            el.style.top = `${item.y}%`;
            if (item.type === 'good') {
                el.innerHTML = `<div class="bg-amber-400/20 p-1.5 rounded-full border border-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.8)]"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" class="text-amber-300"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg></div>`;
            } else {
                el.innerHTML = `<div class="bg-red-500/20 p-1.5 rounded-full border border-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)]"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" class="text-red-400"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg></div>`;
            }
            container.appendChild(el);
        });
    }

    if (stateChanged) {
        setScore(scoreRef.current);
        setLives(livesRef.current);
    }

    if (livesRef.current <= 0) {
        endGame();
    } else {
        gameLoopRef.current = requestAnimationFrame(gameLoop);
    }
  };

  useEffect(() => {
    return () => stopGame();
  }, []);

  return (
    <div className="h-full flex flex-col select-none relative bg-[#020617] touch-none overscroll-none overflow-hidden">
      <button onClick={onBack} className="absolute top-3 right-3 z-50 text-white/50 hover:text-white text-xs font-bold uppercase tracking-widest bg-black/40 px-3 py-1 rounded-lg backdrop-blur-md">
        {t.back}
      </button>

      {/* HEADER */}
      <div className="flex justify-between items-center mb-1 bg-black/60 backdrop-blur-xl px-3 py-2 rounded-xl border border-white/10 shadow-xl relative z-10 mx-2 mt-1 shrink-0">
         
         {/* LEFT: LIVES */}
         <div className="flex flex-col items-start w-1/3">
             <span className="text-[9px] font-black text-white/60 uppercase tracking-widest mb-1 ml-1">LIVES</span>
             <div className="flex gap-1.5">
                 {[...Array(5)].map((_, i) => (
                     <div key={i} className={`transition-all duration-300 ${i < lives ? 'text-red-500 scale-100' : 'text-gray-700 scale-90 opacity-50'}`}>
                        <Heart size={18} fill={i < lives ? "currentColor" : "none"} strokeWidth={3} />
                     </div>
                 ))}
             </div>
         </div>

         {/* CENTER: TITLE */}
         <div className="text-center w-1/3">
            <h2 className="text-2xl md:text-3xl font-[1000] text-transparent bg-clip-text bg-gradient-to-br from-emerald-300 to-teal-500 italic tracking-tighter drop-shadow-sm hidden md:block">
                {t.title}
            </h2>
            <h2 className="text-xl font-[1000] text-emerald-400 italic tracking-tighter md:hidden">NEBULA</h2>
         </div>

         {/* RIGHT: SCORE */}
         <div className="flex flex-col items-end w-1/3 pr-8 md:pr-0">
             <span className="text-[9px] font-black text-white/60 uppercase tracking-widest mb-1">{t.score}</span>
             <span className="text-3xl font-[1000] text-amber-400 font-mono tracking-widest drop-shadow-[0_0_15px_rgba(251,191,36,0.4)] leading-none">{score}</span>
         </div>
      </div>

      {/* GAME CONTAINER WITH FOREST BACKGROUND */}
      <div
        ref={containerRef}
        className="flex-1 min-h-0 rounded-2xl relative overflow-hidden shadow-2xl cursor-none touch-none border-2 border-emerald-900/50 mx-2 mb-1"
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        style={{ touchAction: 'none' }} // PREVENTS SCROLLING ON MOBILE
      >
         {/* FOREST BACKGROUND LAYER */}
         <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
                backgroundImage: "url('/images/eksofilo.png')",
                filter: "brightness(0.6) saturate(1.2)"
            }}
         ></div>
         
         {/* ATMOSPHERIC OVERLAY */}
         <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/80 via-transparent to-black/60 pointer-events-none"></div>
         <div className="absolute inset-0 bg-[url('/images/stardust.png')] opacity-30 animate-pulse pointer-events-none"></div>

         {/* GAME OVER SCREEN */}
         {gameOver && (
             <div className="absolute inset-0 z-50 bg-black/80 backdrop-blur-md flex flex-col items-center justify-center p-8 text-center animate-in fade-in">
                 <Trophy size={64} className="text-yellow-400 mb-4 animate-bounce" />
                 <h2 className="text-4xl md:text-5xl font-[1000] text-white italic uppercase tracking-tighter mb-2">{t.gameOver}</h2>
                 <p className="text-white/60 font-bold text-xl mb-8">Score: {score}</p>
                 {score > 50 && (
                     <div className="bg-emerald-500/20 border border-emerald-500/50 text-emerald-300 px-6 py-3 rounded-xl font-black uppercase tracking-widest mb-8 animate-pulse">
                         {t.reward}
                     </div>
                 )}
                 <button onClick={startGame} className="px-10 py-4 bg-white text-black rounded-2xl font-[1000] uppercase tracking-widest hover:scale-105 transition-all flex items-center gap-3 shadow-xl">
                     <RefreshCcw size={20} /> {t.retry}
                 </button>
             </div>
         )}

         {/* START SCREEN */}
         {!isPlaying && !gameOver && (
             <div className="absolute inset-0 z-50 bg-black/60 backdrop-blur-md flex flex-col items-center justify-center p-4 text-center">
                 <h3 className="text-xl font-black text-emerald-300 uppercase tracking-widest mb-6">{t.select}</h3>
                 <div className="flex gap-4 mb-10 overflow-x-auto max-w-full pb-4 px-4 no-scrollbar">
                     {HEROES.map(h => (
                         <div key={h.id} onClick={() => setSelectedHero(h)} className={`flex-shrink-0 w-20 h-20 rounded-2xl border-4 cursor-pointer overflow-hidden transition-all ${selectedHero.id === h.id ? 'border-emerald-500 scale-110 shadow-lg shadow-emerald-500/30' : 'border-white/10 opacity-60 hover:opacity-100'}`}>
                             <img src={h.avatar} className="w-full h-full object-cover" alt={h.name} />
                         </div>
                     ))}
                 </div>
                 <p className="text-white/80 text-sm font-bold max-w-xs mx-auto mb-8 bg-black/40 p-4 rounded-xl border border-white/10 backdrop-blur-md">{t.instructions}</p>
                 <button onClick={startGame} className="px-12 py-5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-2xl font-[1000] uppercase tracking-widest hover:scale-105 transition-all flex items-center gap-3 shadow-xl ring-4 ring-emerald-500/20">
                     <Play size={24} fill="currentColor" /> {t.start}
                 </button>
             </div>
         )}

         <div id="game-items-layer" className="absolute inset-0 pointer-events-none w-full h-full z-10"></div>
         <div id="game-hero" className="absolute bottom-[5%] w-20 h-20 transition-transform duration-75 ease-out will-change-left z-20" style={{ left: `50%`, transform: 'translateX(-50%)' }}>
             <div className="relative w-full h-full group">
                 <img src={selectedHero.avatar} className="w-full h-full object-cover rounded-2xl border-4 border-white shadow-[0_0_30px_rgba(255,255,255,0.4)]" alt="Hero" />
                 <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-10 h-10 bg-emerald-500 blur-xl opacity-80 animate-pulse"></div>
             </div>
         </div>
      </div>
    </div>
  );
}
