
import React, { useState, useEffect } from 'react';
import { motion as m, AnimatePresence } from 'framer-motion';
import { CheckCircle, RefreshCcw, Star, Zap, Bug, Hexagon, Triangle, Circle, Square, Trophy } from 'lucide-react';
import { useEconomy } from '../../context/EconomyContext';

const motion = m as any;

interface DifferenceFinderProps {
  lang: 'el' | 'en';
  onBack: () => void;
}

// Background images for the 5 levels
const LEVELS = [
  { id: 1, bg: '/images/wisebot.jpg', diffCount: 5, difficulty: 'EASY' }, // Wisebot
  { id: 2, bg: '/images/crocus.jpg', diffCount: 5, difficulty: 'MEDIUM' }, // Crocus
  { id: 3, bg: '/images/link.jpg', diffCount: 5, difficulty: 'HARD' }, // Link
  { id: 4, bg: '/images/pencilo.jpg', diffCount: 5, difficulty: 'EXPERT' }, // Pencilo
  { id: 5, bg: '/images/sparken.jpg', diffCount: 5, difficulty: 'LEGEND' } // Sparken
];

// Configuration for differences per level (Position in %)
// Type: 'color' (change color), 'vanish' (remove item), 'rotate' (rotate item)
const DIFFERENCES_CONFIG = [
  // LEVEL 1 (Easy - Big items, simple color changes)
  [
    { id: '1-1', x: 20, y: 30, icon: Star, color1: 'text-yellow-400', color2: 'text-red-500', size: 40, type: 'color' },
    { id: '1-2', x: 70, y: 60, icon: Zap, color1: 'text-blue-400', color2: 'text-transparent', size: 40, type: 'vanish' },
    { id: '1-3', x: 50, y: 50, icon: Circle, color1: 'text-green-400', color2: 'text-purple-500', size: 35, type: 'color' },
    { id: '1-4', x: 10, y: 80, icon: Square, color1: 'text-orange-400', color2: 'text-transparent', size: 40, type: 'vanish' },
    { id: '1-5', x: 80, y: 20, icon: Triangle, color1: 'text-pink-400', color2: 'text-cyan-400', size: 40, type: 'color' },
  ],
  // LEVEL 2 (Medium - Smaller items)
  [
    { id: '2-1', x: 15, y: 25, icon: Bug, color1: 'text-red-400', color2: 'text-transparent', size: 30, type: 'vanish' },
    { id: '2-2', x: 60, y: 40, icon: Hexagon, color1: 'text-cyan-400', color2: 'text-yellow-400', size: 30, type: 'color' },
    { id: '2-3', x: 30, y: 75, icon: Zap, color1: 'text-amber-400', color2: 'text-transparent', size: 25, type: 'vanish' },
    { id: '2-4', x: 85, y: 15, icon: Star, color1: 'text-white', color2: 'text-blue-500', size: 30, type: 'color' },
    { id: '2-5', x: 45, y: 10, icon: Circle, color1: 'text-purple-400', color2: 'text-transparent', size: 30, type: 'vanish' },
  ],
  // LEVEL 3 (Hard - Subtle rotations & smaller)
  [
    { id: '3-1', x: 50, y: 50, icon: Triangle, color1: 'text-blue-300', color2: 'text-blue-300', size: 25, type: 'rotate' }, // Rotated
    { id: '3-2', x: 20, y: 80, icon: Square, color1: 'text-green-300', color2: 'text-transparent', size: 20, type: 'vanish' },
    { id: '3-3', x: 90, y: 30, icon: Star, color1: 'text-yellow-200', color2: 'text-white', size: 25, type: 'color' },
    { id: '3-4', x: 35, y: 20, icon: Bug, color1: 'text-red-300', color2: 'text-red-300', size: 25, type: 'rotate' },
    { id: '3-5', x: 65, y: 65, icon: Hexagon, color1: 'text-orange-300', color2: 'text-transparent', size: 20, type: 'vanish' },
  ],
  // LEVEL 4 (Expert - Tiny)
  [
    { id: '4-1', x: 10, y: 10, icon: Circle, color1: 'text-white/50', color2: 'text-transparent', size: 15, type: 'vanish' },
    { id: '4-2', x: 80, y: 80, icon: Zap, color1: 'text-yellow-400/50', color2: 'text-transparent', size: 15, type: 'vanish' },
    { id: '4-3', x: 40, y: 40, icon: Star, color1: 'text-blue-400/60', color2: 'text-purple-400/60', size: 15, type: 'color' },
    { id: '4-4', x: 60, y: 20, icon: Square, color1: 'text-green-400/50', color2: 'text-green-400/50', size: 15, type: 'rotate' },
    { id: '4-5', x: 20, y: 60, icon: Triangle, color1: 'text-red-400/50', color2: 'text-transparent', size: 15, type: 'vanish' },
  ],
  // LEVEL 5 (Legend - Camouflaged)
  [
    { id: '5-1', x: 5, y: 90, icon: Bug, color1: 'text-black/40', color2: 'text-transparent', size: 12, type: 'vanish' },
    { id: '5-2', x: 95, y: 5, icon: Hexagon, color1: 'text-white/20', color2: 'text-transparent', size: 12, type: 'vanish' },
    { id: '5-3', x: 50, y: 5, icon: Zap, color1: 'text-yellow-100/20', color2: 'text-yellow-100/20', size: 12, type: 'rotate' },
    { id: '5-4', x: 25, y: 50, icon: Star, color1: 'text-blue-900/40', color2: 'text-transparent', size: 12, type: 'vanish' },
    { id: '5-5', x: 75, y: 50, icon: Circle, color1: 'text-green-900/40', color2: 'text-transparent', size: 12, type: 'vanish' },
  ]
];

export default function DifferenceFinder({ lang, onBack }: DifferenceFinderProps) {
  const { earnCredits } = useEconomy();
  const [level, setLevel] = useState(0);
  const [foundDiffs, setFoundDiffs] = useState<string[]>([]);
  const [gameWon, setGameWon] = useState(false);
  const [wrongClick, setWrongClick] = useState<{x: number, y: number} | null>(null);

  const t = {
    title: lang === 'el' ? 'ΒΡΕΣ ΤΙΣ ΔΙΑΦΟΡΕΣ' : 'SPOT THE DIFFERENCES',
    level: lang === 'el' ? 'ΕΠΙΠΕΔΟ' : 'LEVEL',
    found: lang === 'el' ? 'ΒΡΕΘΗΚΑΝ' : 'FOUND',
    next: lang === 'el' ? 'ΕΠΟΜΕΝΟ ΕΠΙΠΕΔΟ' : 'NEXT LEVEL',
    victory: lang === 'el' ? 'ΝΙΚΗΣΕΣ!' : 'VICTORY!',
    reward: lang === 'el' ? 'Πάρε 10 Credits' : 'Get 10 Credits',
    back: lang === 'el' ? 'ΠΙΣΩ' : 'BACK'
  };

  const currentLevelConfig = LEVELS[level];
  const currentDiffs = DIFFERENCES_CONFIG[level];

  const handleDiffClick = (id: string) => {
    if (!foundDiffs.includes(id)) {
      const newFound = [...foundDiffs, id];
      setFoundDiffs(newFound);
      
      // Check Level Completion
      if (newFound.length === currentLevelConfig.diffCount) {
        if (level < 4) {
          setTimeout(() => {
            setLevel(l => l + 1);
            setFoundDiffs([]);
          }, 1500);
        } else {
          setGameWon(true);
          earnCredits(10);
        }
      }
    }
  };

  const handleBgClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Only trigger wrong click if not clicking on a difference (handled by propagation stop usually, but we need visual feedback)
    // Simplified: Just showing feedback on the container
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setWrongClick({ x, y });
    setTimeout(() => setWrongClick(null), 500);
  };

  if (gameWon) {
    return (
      <div className="h-full flex flex-col items-center justify-center text-center space-y-8 animate-in fade-in">
        <Trophy size={80} className="text-yellow-400 animate-bounce" />
        <h2 className="text-5xl font-[1000] text-white italic uppercase">{t.victory}</h2>
        <p className="text-xl text-white/60 font-bold">{t.reward}</p>
        <button onClick={onBack} className="px-10 py-4 bg-white text-black rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-transform">
          {t.back}
        </button>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col relative overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-center mb-2 bg-black/40 px-3 py-2 rounded-xl border border-white/10 shrink-0">
        <button onClick={onBack} className="text-white/50 hover:text-white font-bold uppercase text-xs flex items-center gap-2">
           <RefreshCcw size={14}/> {t.back}
        </button>
        <div className="flex flex-col items-center">
           <h3 className="text-lg font-black text-white italic uppercase tracking-tighter">{t.title}</h3>
           <span className="text-[10px] text-fuchsia-400 font-bold uppercase tracking-widest">{t.level} {level + 1}/5 • {currentLevelConfig.difficulty}</span>
        </div>
        <div className="bg-white/10 px-3 py-1 rounded-lg border border-white/10">
           <span className="text-xs font-black text-white">{foundDiffs.length} / {currentLevelConfig.diffCount}</span>
        </div>
      </div>

      {/* Game Area - Split View */}
      <div className="flex-1 min-h-0 flex flex-col md:flex-row gap-2 overflow-hidden">
        
        {/* ORIGINAL IMAGE (Left) */}
        <div className="flex-1 relative rounded-2xl overflow-hidden border-2 border-blue-500/30 bg-black">
           <div className="absolute top-2 left-2 bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg z-20">ORIGINAL</div>
           <img src={currentLevelConfig.bg} className="w-full h-full object-cover opacity-80" alt="Original" />
           
           {/* Render Icons Normal */}
           {currentDiffs.map((diff) => (
             <div 
               key={`orig-${diff.id}`}
               className="absolute"
               style={{ left: `${diff.x}%`, top: `${diff.y}%`, width: diff.size, height: diff.size }}
             >
                <diff.icon size={diff.size} className={`${diff.color1} drop-shadow-md`} strokeWidth={2.5} />
             </div>
           ))}
        </div>

        {/* MODIFIED IMAGE (Right - Playable) */}
        <div 
          className="flex-1 relative rounded-2xl overflow-hidden border-2 border-fuchsia-500/30 bg-black cursor-crosshair active:scale-[0.99] transition-transform"
          onClick={handleBgClick}
        >
           <div className="absolute top-2 left-2 bg-fuchsia-600 text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg z-20">SPOT DIFFERENCE</div>
           <img src={currentLevelConfig.bg} className="w-full h-full object-cover opacity-80" alt="Modified" />

           {/* Wrong Click Feedback */}
           {wrongClick && (
             <div 
               className="absolute w-8 h-8 border-2 border-red-500 rounded-full flex items-center justify-center animate-ping"
               style={{ left: wrongClick.x - 16, top: wrongClick.y - 16, pointerEvents: 'none' }}
             >
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
             </div>
           )}

           {/* Differences Areas */}
           {currentDiffs.map((diff) => {
             const isFound = foundDiffs.includes(diff.id);
             return (
               <div 
                 key={`mod-${diff.id}`}
                 onClick={(e) => {
                   e.stopPropagation(); // Don't trigger wrong click
                   handleDiffClick(diff.id);
                 }}
                 className={`absolute flex items-center justify-center transition-all duration-300 ${isFound ? 'bg-green-500/20 ring-4 ring-green-400 rounded-full shadow-[0_0_20px_rgba(74,222,128,0.5)]' : ''}`}
                 style={{ left: `${diff.x}%`, top: `${diff.y}%`, width: diff.size, height: diff.size }}
               >
                  {/* If type is vanish, we show nothing (or color2 is transparent). If color, we show icon with color2. If rotate, we rotate. */}
                  {diff.type !== 'vanish' && (
                    <diff.icon 
                      size={diff.size} 
                      className={`${diff.color2} drop-shadow-md transition-all duration-500`} 
                      style={{ transform: diff.type === 'rotate' ? 'rotate(180deg)' : 'none' }}
                      strokeWidth={2.5}
                    />
                  )}
                  
                  {/* Found Marker */}
                  {isFound && <CheckCircle className="text-green-400 absolute -top-2 -right-2 bg-black rounded-full" size={16} />}
               </div>
             );
           })}
        </div>

      </div>
    </div>
  );
}
