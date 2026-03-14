
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Trophy, Play, RefreshCcw, ArrowUp, ArrowDown, ArrowLeft, ArrowRight, Zap, Crown } from 'lucide-react';
import { useEconomy } from '../../context/EconomyContext';

interface SnakeMazeProps {
  lang: 'el' | 'en';
  onBack: () => void;
}

// Configuration
const GRID_SIZE = 20;
const INITIAL_SPEED = 180;
const MIN_SPEED = 80;

export default function SnakeMaze({ lang, onBack }: SnakeMazeProps) {
  const { earnCredits } = useEconomy();
  
  // Game State
  const [isPlaying, setIsPlaying] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  
  // Snake State: Array of [x, y] coordinates. Head is at index 0.
  const [snake, setSnake] = useState<number[][]>([[10, 10], [10, 11], [10, 12]]); 
  const [food, setFood] = useState<number[]>([5, 5]);
  const [direction, setDirection] = useState<string>('UP');
  
  // Refs
  const directionRef = useRef('UP'); // To avoid closure staleness in interval
  const gameLoopRef = useRef<number | null>(null);
  const lastMoveTimeRef = useRef(0);

  const t = {
    title: 'CLASSIC SNAKE',
    score: lang === 'el' ? 'ΣΚΟΡ' : 'SCORE',
    highScore: lang === 'el' ? 'ΡΕΚΟΡ' : 'BEST',
    gameOver: lang === 'el' ? 'ΤΕΛΟΣ ΠΑΙΧΝΙΔΙΟΥ' : 'GAME OVER',
    retry: lang === 'el' ? 'ΠΑΙΞΕ ΞΑΝΑ' : 'PLAY AGAIN',
    start: lang === 'el' ? 'ΕΚΚΙΝΗΣΗ' : 'START GAME',
    reward: lang === 'el' ? 'ΚΕΡΔΙΣΕΣ 5 CREDITS!' : 'YOU WON 5 CREDITS!',
    back: lang === 'el' ? 'ΠΙΣΩ' : 'BACK',
    instructions: lang === 'el' ? 'Φάε την ενέργεια για να μεγαλώσεις. Μην χτυπήσεις στους τοίχους!' : 'Eat energy to grow. Don\'t hit the walls!'
  };

  // --- LOGIC ---

  const generateFood = (currentSnake: number[][]) => {
    while (true) {
      const x = Math.floor(Math.random() * GRID_SIZE);
      const y = Math.floor(Math.random() * GRID_SIZE);
      // Ensure food doesn't spawn on snake
      const onSnake = currentSnake.some(seg => seg[0] === x && seg[1] === y);
      if (!onSnake) return [x, y];
    }
  };

  const startGame = () => {
    setSnake([[10, 15], [10, 16], [10, 17]]); // Start position
    setFood(generateFood([[10, 15], [10, 16], [10, 17]]));
    setScore(0);
    setDirection('UP');
    directionRef.current = 'UP';
    setGameOver(false);
    setIsPlaying(true);
  };

  const handleGameOver = () => {
    setIsPlaying(false);
    setGameOver(true);
    if (gameLoopRef.current) clearInterval(gameLoopRef.current);
    if (score > highScore) setHighScore(score);
    if (score > 50) earnCredits(5); // Reward for good play
  };

  const changeDirection = (newDir: string) => {
    const current = directionRef.current;
    // Prevent 180 degree turns
    if (newDir === 'UP' && current === 'DOWN') return;
    if (newDir === 'DOWN' && current === 'UP') return;
    if (newDir === 'LEFT' && current === 'RIGHT') return;
    if (newDir === 'RIGHT' && current === 'LEFT') return;
    
    // Debounce fast key presses
    const now = Date.now();
    if (now - lastMoveTimeRef.current < 50) return; 
    
    directionRef.current = newDir;
    setDirection(newDir);
  };

  const moveSnake = useCallback(() => {
    if (gameOver) return;

    setSnake(prevSnake => {
      const head = prevSnake[0];
      const newHead = [...head];

      switch (directionRef.current) {
        case 'UP': newHead[1] -= 1; break;
        case 'DOWN': newHead[1] += 1; break;
        case 'LEFT': newHead[0] -= 1; break;
        case 'RIGHT': newHead[0] += 1; break;
      }

      // 1. Check Wall Collision
      if (newHead[0] < 0 || newHead[0] >= GRID_SIZE || newHead[1] < 0 || newHead[1] >= GRID_SIZE) {
        handleGameOver();
        return prevSnake;
      }

      // 2. Check Self Collision
      if (prevSnake.some(seg => seg[0] === newHead[0] && seg[1] === newHead[1])) {
        handleGameOver();
        return prevSnake;
      }

      const newSnake = [newHead, ...prevSnake];

      // 3. Check Food
      if (newHead[0] === food[0] && newHead[1] === food[1]) {
        // Ate Food -> Grow (don't pop tail)
        setScore(s => s + 10);
        setFood(generateFood(newSnake));
      } else {
        // Didn't eat -> Move (pop tail)
        newSnake.pop();
      }

      lastMoveTimeRef.current = Date.now();
      return newSnake;
    });
  }, [food, gameOver]);

  // Keyboard Controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch(e.key) {
        case 'ArrowUp': changeDirection('UP'); break;
        case 'ArrowDown': changeDirection('DOWN'); break;
        case 'ArrowLeft': changeDirection('LEFT'); break;
        case 'ArrowRight': changeDirection('RIGHT'); break;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Game Loop
  useEffect(() => {
    if (isPlaying) {
      // Speed increases as score goes up
      const currentSpeed = Math.max(MIN_SPEED, INITIAL_SPEED - Math.floor(score / 50) * 10);
      gameLoopRef.current = window.setInterval(moveSnake, currentSpeed);
    } else {
      if (gameLoopRef.current) clearInterval(gameLoopRef.current);
    }
    return () => { if (gameLoopRef.current) clearInterval(gameLoopRef.current); };
  }, [isPlaying, moveSnake, score]);


  // --- RENDER ---
  const renderGrid = () => {
    const cells = [];
    for (let y = 0; y < GRID_SIZE; y++) {
      for (let x = 0; x < GRID_SIZE; x++) {
        let className = 'w-full h-full border-[0.5px] border-white/5'; // Subtle grid
        let content = null;

        // Is Snake?
        const snakeIndex = snake.findIndex(s => s[0] === x && s[1] === y);
        if (snakeIndex !== -1) {
          if (snakeIndex === 0) {
             // Head
             className = 'w-full h-full bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,1)] rounded-sm z-20 relative animate-pulse'; 
          } else {
             // Body
             // Calculate opacity based on index to create a fading tail effect
             const opacity = Math.max(0.4, 1 - (snakeIndex / (snake.length + 5)));
             className = `w-full h-full bg-emerald-600 rounded-sm shadow-[0_0_5px_rgba(52,211,153,0.5)]`;
          }
        }

        // Is Food?
        else if (food[0] === x && food[1] === y) {
          className = 'w-full h-full flex items-center justify-center relative z-10'; 
          content = (
            <div className="w-4/5 h-4/5 bg-amber-400 rounded-full animate-bounce shadow-[0_0_20px_rgba(251,191,36,0.8)] flex items-center justify-center">
                <Zap size={12} className="text-black fill-current" />
            </div>
          );
        }

        cells.push(
          <div key={`${x}-${y}`} className="relative bg-black/20">
             <div className={className} style={snakeIndex > 0 ? { opacity: Math.max(0.3, 1 - snakeIndex/snake.length) } : {}}>
                {content}
             </div>
          </div>
        );
      }
    }
    return cells;
  };

  return (
    <div className="h-full flex flex-col select-none relative overflow-hidden">
      
      {/* BACKGROUND IMAGE - Fixed position absolute */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center"
        style={{ 
            backgroundImage: "url('/images/eksofilo.png')",
            filter: "brightness(0.4) contrast(1.2)"
        }}
      ></div>

      <button onClick={onBack} className="absolute top-4 right-4 z-50 text-white/50 hover:text-white text-xs font-bold uppercase tracking-widest bg-black/40 px-3 py-1 rounded-lg backdrop-blur-md">
        {t.back}
      </button>

      {/* HEADER */}
      <div className="flex justify-between items-center mb-2 bg-black/60 backdrop-blur-xl px-3 py-2 rounded-xl border border-white/10 shadow-xl relative z-10 mx-2 mt-1 shrink-0">
         <div className="flex flex-col">
            <span className="text-[9px] font-black text-white/60 uppercase tracking-widest">{t.title}</span>
            <div className="flex items-center gap-2">
                <Crown size={14} className="text-yellow-500" />
                <span className="text-xs text-yellow-500 font-bold uppercase">{t.highScore}: {highScore}</span>
            </div>
         </div>
         <div className="flex flex-col items-end">
             <span className="text-[9px] font-black text-white/60 uppercase tracking-widest">{t.score}</span>
             <span className="text-3xl font-[1000] text-emerald-400 font-mono leading-none drop-shadow-lg">{score}</span>
         </div>
      </div>

      {/* GAME AREA */}
      <div className="flex-1 min-h-0 flex flex-col items-center justify-center relative z-10 w-full px-2">

         <div className="relative bg-[#0f1014]/90 border-2 border-emerald-500/30 rounded-xl shadow-2xl p-1 w-full max-w-md aspect-square backdrop-blur-sm overflow-hidden">
            {/* GRID */}
            <div 
                className="grid w-full h-full" 
                style={{ gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)`, gridTemplateRows: `repeat(${GRID_SIZE}, 1fr)` }}
            >
                {renderGrid()}
            </div>

            {/* OVERLAYS */}
            {(!isPlaying && !gameOver) && (
                <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center z-50 rounded-lg text-center p-6 backdrop-blur-sm">
                    <h2 className="text-4xl font-[1000] text-emerald-400 italic uppercase mb-2 drop-shadow-[0_0_15px_rgba(52,211,153,0.5)]">SNAKE</h2>
                    <p className="text-white/60 text-sm font-bold mb-8 max-w-[200px]">{t.instructions}</p>
                    <button onClick={startGame} className="px-12 py-4 bg-emerald-500 text-black font-[1000] rounded-2xl uppercase tracking-widest hover:scale-105 transition-transform flex items-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.4)]">
                        <Play size={20} fill="currentColor" /> {t.start}
                    </button>
                </div>
            )}

            {gameOver && (
                <div className="absolute inset-0 bg-black/90 flex flex-col items-center justify-center z-50 rounded-lg text-center p-6 animate-in fade-in backdrop-blur-md">
                    <Trophy size={64} className="text-yellow-400 mb-4 animate-bounce" />
                    <h2 className="text-3xl font-[1000] text-white italic uppercase mb-2">{t.gameOver}</h2>
                    <p className="text-white/60 font-bold mb-6 text-xl">Score: {score}</p>
                    {score > 50 && <div className="text-emerald-400 font-black text-xs mb-6 uppercase tracking-widest animate-pulse border border-emerald-500/30 px-4 py-2 rounded-lg bg-emerald-500/10">{t.reward}</div>}
                    <button onClick={startGame} className="px-8 py-3 bg-white text-black font-[1000] rounded-xl uppercase tracking-widest hover:scale-105 transition-transform flex items-center gap-2 shadow-lg">
                        <RefreshCcw size={18} /> {t.retry}
                    </button>
                </div>
            )}
         </div>

         {/* MOBILE CONTROLS (D-PAD) */}
         <div className="mt-3 grid grid-cols-3 gap-1.5 w-40 md:hidden opacity-90 shrink-0">
             <div />
             <button onPointerDown={(e) => { e.preventDefault(); changeDirection('UP'); }} className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center active:bg-emerald-500 active:text-black text-white transition-colors border border-white/10 shadow-lg backdrop-blur-md"><ArrowUp size={22}/></button>
             <div />
             <button onPointerDown={(e) => { e.preventDefault(); changeDirection('LEFT'); }} className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center active:bg-emerald-500 active:text-black text-white transition-colors border border-white/10 shadow-lg backdrop-blur-md"><ArrowLeft size={22}/></button>
             <button onPointerDown={(e) => { e.preventDefault(); changeDirection('DOWN'); }} className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center active:bg-emerald-500 active:text-black text-white transition-colors border border-white/10 shadow-lg backdrop-blur-md"><ArrowDown size={22}/></button>
             <button onPointerDown={(e) => { e.preventDefault(); changeDirection('RIGHT'); }} className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center active:bg-emerald-500 active:text-black text-white transition-colors border border-white/10 shadow-lg backdrop-blur-md"><ArrowRight size={22}/></button>
         </div>

         <div className="hidden md:block mt-2 text-white/30 text-xs font-bold uppercase tracking-widest">
             USE ARROW KEYS TO MOVE
         </div>

      </div>
    </div>
  );
}
