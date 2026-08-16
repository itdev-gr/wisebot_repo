
import React, { useState, useEffect, useRef } from 'react';
import { motion as m, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  Zap, 
  Leaf, 
  Cpu, 
  Home, 
  Box, 
  Trash2, 
  Sun, 
  Moon, 
  Trophy,
  Info
} from 'lucide-react';
import { useEconomy } from '../../context/EconomyContext';
import { grantGameReward } from './gameRewards';

const motion = m as any;

interface SkyMetropolisProps {
  lang: 'el' | 'en';
  onBack: () => void;
}

// --- CONFIGURATION ---
const GRID_SIZE = 6; // 6x6 Grid

// Building Types
const BUILDINGS = [
  { id: 'house', name: { el: 'Κατοικία', en: 'Habitat' }, icon: Home, cost: 10, type: 'pop', color: 'bg-blue-500', selectedBorder: 'border-blue-400', prod: { pop: 2, energy: -1 }, desc: '+Population' },
  { id: 'solar', name: { el: 'Ηλιακό Πάνελ', en: 'Solar Panel' }, icon: Zap, cost: 20, type: 'energy', color: 'bg-amber-400', selectedBorder: 'border-amber-400', prod: { pop: 0, energy: 5 }, desc: '+Energy' },
  { id: 'park', name: { el: 'Πάρκο', en: 'Eco Park' }, icon: Leaf, cost: 15, type: 'nature', color: 'bg-emerald-500', selectedBorder: 'border-emerald-400', prod: { pop: 0, energy: 0, nature: 3 }, desc: '+Happiness' },
  { id: 'lab', name: { el: 'Εργαστήριο', en: 'Tech Lab' }, icon: Cpu, cost: 50, type: 'tech', color: 'bg-purple-500', selectedBorder: 'border-purple-400', prod: { pop: -1, energy: -3, tech: 5 }, desc: '+Innovation' },
];

const LEVELS = [
  { pop: 0, title: 'Settlement' },
  { pop: 20, title: 'Village' },
  { pop: 50, title: 'Town' },
  { pop: 100, title: 'City' },
  { pop: 200, title: 'Metropolis' },
  { pop: 500, title: 'Utopia' }
];

export default function SkyMetropolis({ lang, onBack }: SkyMetropolisProps) {
  const { earnCredits, showNotification } = useEconomy();

  // Game State
  const [grid, setGrid] = useState<(string | null)[]>(Array(GRID_SIZE * GRID_SIZE).fill(null));
  const [resources, setResources] = useState({ credits: 100, pop: 0, energy: 20, nature: 0, tech: 0 });
  const [selectedTool, setSelectedTool] = useState<string | null>(null); // 'house', 'solar', etc. or 'delete'
  const [isDay, setIsDay] = useState(true);
  const [level, setLevel] = useState(0);
  
  // Tick System for passive income
  useEffect(() => {
    const timer = setInterval(() => {
      setResources(prev => {
        let newPop = 0;
        const newEnergy = prev.energy; // Accumulates? Or Rate? Let's do Rate based.
        let newNature = 0;
        let newTech = 0;
        let income = 0;

        // Calculate Totals based on Grid
        let energyRate = 0;
        
        grid.forEach(cellId => {
          if (!cellId) return;
          const b = BUILDINGS.find(x => x.id === cellId);
          if (b) {
            newPop += b.prod.pop || 0;
            energyRate += b.prod.energy || 0;
            newNature += b.prod.nature || 0;
            newTech += b.prod.tech || 0;
          }
        });

        // Rules
        // 1. Energy must be positive to support Pop
        if (newEnergy + energyRate < 0) {
           // Blackout! No income
        } else {
           // Income based on Pop + Tech
           income = Math.floor(newPop * 0.5) + newTech;
        }

        return {
          credits: prev.credits + income,
          pop: newPop,
          energy: newEnergy + energyRate > 100 ? 100 : newEnergy + energyRate, // Cap energy or just use as rate? Let's use as battery
          nature: newNature,
          tech: newTech
        };
      });
    }, 2000); // Every 2 seconds

    return () => clearInterval(timer);
  }, [grid]);

  // Level Up Check
  useEffect(() => {
    const nextLvlIndex = LEVELS.findIndex(l => l.pop > resources.pop);
    const currentLvlIndex = nextLvlIndex === -1 ? LEVELS.length - 1 : nextLvlIndex - 1;
    
    if (currentLvlIndex > level) {
      setLevel(currentLvlIndex);
      // Level up — reward meaningful milestones (Town and beyond), capped daily by the helper
      if (currentLvlIndex >= 2) {
        grantGameReward('sky', 2, earnCredits, showNotification, lang);
      }
    }
    // `level` in the deps fixes a real stale read: with only [resources.pop], the
    // comparison used the level captured at mount. The `currentLvlIndex > level` guard
    // plus setLevel keeps the reward single-fire even when the other deps change.
  }, [resources.pop, level, earnCredits, showNotification, lang]);

  const handleCellClick = (index: number) => {
    if (!selectedTool) return;

    if (selectedTool === 'delete') {
      const newGrid = [...grid];
      newGrid[index] = null;
      setGrid(newGrid);
      return;
    }

    const building = BUILDINGS.find(b => b.id === selectedTool);
    if (!building) return;

    // Check Cost
    if (resources.credits >= building.cost) {
      // Place
      const newGrid = [...grid];
      newGrid[index] = building.id;
      setGrid(newGrid);
      // Pay
      setResources(prev => ({ ...prev, credits: prev.credits - building.cost }));
    } else {
      // Error Feedback (simplified)
      showNotification('💰', lang === 'el' ? 'Δεν έχεις αρκετά χρήματα!' : 'Not enough funds!');
    }
  };

  const getTileStyle = (type: string | null) => {
    if (!type) return 'bg-white/5 border-white/10 hover:bg-white/10';
    const b = BUILDINGS.find(x => x.id === type);
    return b ? `${b.color} shadow-lg border-white/20` : 'bg-gray-500';
  };

  const currentLevelTitle = LEVELS[level].title;

  return (
    <div className="h-full flex flex-col relative overflow-hidden bg-[#0B0F1A]">

      {/* 1. TOP HUD */}
      <div className="z-20 bg-black/40 backdrop-blur-md px-3 py-2 border-b border-white/10 flex justify-between items-center shrink-0">
         <button onClick={onBack} className="text-white/50 hover:text-white font-bold uppercase text-xs flex items-center gap-2">
            <ArrowLeft size={16} /> {lang === 'el' ? 'ΠΙΣΩ' : 'BACK'}
         </button>
         
         <div className="flex gap-6 text-xs md:text-sm font-black">
            <div className="flex flex-col items-center">
               <span className="text-amber-400 flex items-center gap-1"><Box size={14}/> CASH</span>
               <span className="text-white text-lg">{resources.credits}</span>
            </div>
            <div className="flex flex-col items-center">
               <span className="text-blue-400 flex items-center gap-1"><Home size={14}/> POP</span>
               <span className="text-white text-lg">{resources.pop}</span>
            </div>
            <div className="flex flex-col items-center">
               <span className="text-yellow-400 flex items-center gap-1"><Zap size={14}/> PWR</span>
               <span className="text-white text-lg">{resources.energy}</span>
            </div>
         </div>

         <div className="flex items-center gap-2">
            <button onClick={() => setIsDay(!isDay)} className="p-2 bg-white/10 rounded-full hover:bg-white/20">
               {isDay ? <Sun className="text-yellow-400" size={18} /> : <Moon className="text-blue-300" size={18} />}
            </button>
         </div>
      </div>

      {/* 2. MAIN GAME AREA (ISOMETRIC VIEW) */}
      <div className={`flex-1 relative overflow-hidden transition-colors duration-1000 ${isDay ? 'bg-gradient-to-b from-sky-400/20 to-blue-900/40' : 'bg-gradient-to-b from-indigo-950 to-black'}`}>
         
         {/* Floating Island Base Effect */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-black/40 rounded-full blur-3xl transform scale-y-50"></div>

         {/* The Grid Container - Centered */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 perspective-1000">
            <div 
               className="grid gap-1 p-4 bg-slate-800/80 rounded-xl border-4 border-slate-700 shadow-2xl transform-style-3d rotate-x-60 rotate-z-45"
               style={{ 
                  gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)`,
                  transform: 'rotateX(60deg) rotateZ(45deg)',
                  boxShadow: '0 50px 80px rgba(0,0,0,0.5), inset 0 0 100px rgba(0,0,0,0.5)'
               }}
            >
               {grid.map((cell, idx) => {
                  const b = BUILDINGS.find(x => x.id === cell);
                  return (
                    <motion.div
                       key={idx}
                       onClick={() => handleCellClick(idx)}
                       whileHover={{ scale: 1.1, zIndex: 10 }}
                       className={`w-12 h-12 md:w-16 md:h-16 rounded-lg cursor-pointer relative border transition-colors duration-300 flex items-center justify-center ${getTileStyle(cell)}`}
                    >
                       {/* 3D Pop Effect content */}
                       {b && (
                          <div className="absolute -top-4 left-1/2 -translate-x-1/2 transform -translate-y-2">
                             <b.icon size={24} className="text-white drop-shadow-md" />
                          </div>
                       )}
                       {!b && <div className="w-1 h-1 bg-white/20 rounded-full"></div>}
                    </motion.div>
                  );
               })}
            </div>
         </div>

         {/* Level Badge */}
         <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur px-6 py-2 rounded-full border border-white/20 flex items-center gap-2 shadow-xl">
            <Trophy size={16} className="text-yellow-400" />
            <span className="text-white font-black uppercase tracking-widest text-xs">{currentLevelTitle}</span>
         </div>

      </div>

      {/* 3. BOTTOM TOOLBAR (BUILD MENU) */}
      <div className="z-20 bg-[#1a1d26] border-t border-white/10 px-3 py-2 safe-area-bottom shrink-0">
         <div className="max-w-2xl mx-auto">
            <p className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-2 text-center">
               {lang === 'el' ? 'ΕΡΓΑΛΕΙΑ ΚΑΤΑΣΚΕΥΗΣ' : 'CONSTRUCTION TOOLS'}
            </p>
            <div className="flex justify-center gap-3 flex-wrap">
               {BUILDINGS.map(b => (
                  <button
                     key={b.id}
                     onClick={() => setSelectedTool(b.id)}
                     className={`flex flex-col items-center gap-2 p-3 rounded-2xl border-2 transition-all group ${
                        selectedTool === b.id
                        ? `bg-white/10 ${b.selectedBorder} scale-110`
                        : 'bg-transparent border-white/5 hover:bg-white/5'
                     }`}
                  >
                     <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-lg ${b.color}`}>
                        <b.icon size={20} />
                     </div>
                     <div className="text-center">
                        <p className="text-[9px] font-black text-white uppercase tracking-wider">{b.name[lang]}</p>
                        <p className={`text-[9px] font-bold ${resources.credits >= b.cost ? 'text-emerald-400' : 'text-red-400'}`}>
                           {b.cost} <Box size={8} className="inline"/>
                        </p>
                     </div>
                  </button>
               ))}
               
               <div className="w-px h-12 bg-white/10 mx-2"></div>

               <button
                  onClick={() => setSelectedTool('delete')}
                  className={`flex flex-col items-center gap-2 p-3 rounded-2xl border-2 transition-all ${
                     selectedTool === 'delete' 
                     ? 'bg-red-500/20 border-red-500' 
                     : 'bg-transparent border-white/5 hover:bg-white/5'
                  }`}
               >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-red-500/20 text-red-400 border border-red-500/30">
                     <Trash2 size={20} />
                  </div>
                  <span className="text-[9px] font-black text-white/60 uppercase">DEL</span>
               </button>
            </div>
         </div>
      </div>

    </div>
  );
}
