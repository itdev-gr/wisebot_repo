
import React, { useState, useEffect, useRef } from 'react';
import GameBackButton from './GameBackButton';
import { motion as m, AnimatePresence } from 'framer-motion';
import { 
  Users, DollarSign, AlertTriangle, 
  ArrowRight, Brain, Hammer, Flame, RotateCcw, 
  Briefcase, Ghost, Dice5, CheckCircle, RefreshCcw,
  Trophy
} from 'lucide-react';
import { useEconomy } from '../../context/EconomyContext';
import { grantGameReward } from './gameRewards';
const motion = m as any;

// --- CONFIGURATION ---
const MAX_TURNS = 15;
const STARTING_CASH = 25;
const STARTING_ENERGY = 3;

// Safe Hero Configuration
const HEROES_CONFIG: Record<string, { id: string; name: string; role: string; bg: string; icon: any }> = {
  wisebot: { id: 'wisebot', name: 'Wisebot', role: 'Mindset', bg: 'bg-purple-600', icon: Brain },
  pencilo: { id: 'pencilo', name: 'Pencilo', role: 'Strategy', bg: 'bg-yellow-600', icon: Briefcase },
  link: { id: 'link', name: 'Link', role: 'Tech', bg: 'bg-blue-600', icon: Hammer },
  crocus: { id: 'crocus', name: 'Crocus', role: 'Sales', bg: 'bg-emerald-600', icon: DollarSign },
  sparken: { id: 'sparken', name: 'Sparken', role: 'Vision', bg: 'bg-red-600', icon: Flame }
};

// ZONES
const BOARD_TILES = Array.from({ length: 24 }, (_, i) => {
  if (i < 4) return { id: i, type: 'IDEA', label: 'Garage' };
  if (i < 8) return { id: i, type: 'PLAN', label: 'Office' };
  if (i < 12) return { id: i, type: 'BUILD', label: 'Lab' };
  if (i < 16) return { id: i, type: 'MARKET', label: 'Store' };
  if (i < 20) return { id: i, type: 'CRISIS', label: 'Panic Room' };
  return { id: i, type: 'SCALE', label: 'Skyscraper' };
});

const OBSTACLES = [
  { id: 'fear', title: 'Fear of Starting', desc: 'Η ομάδα φοβάται ότι η ιδέα δεν είναι καλή.', type: 'MINDSET', req: 'wisebot', damage: -2, cost: 2 },
  { id: 'mess', title: 'Messy Plan', desc: 'Δεν ξέρουμε τι φτιάχνουμε.', type: 'STRATEGY', req: 'pencilo', damage: -3, cost: 5 },
  { id: 'bug', title: 'Spaghetti Code', desc: 'Το σύστημα κρέμασε τελείως.', type: 'TECH', req: 'link', damage: -4, cost: 8 },
  { id: 'broke', title: 'No Money', desc: 'Το ταμείο είναι μείον.', type: 'SALES', req: 'crocus', damage: -5, cost: 0 },
  { id: 'lost', title: 'Lost Direction', desc: 'Γιατί το κάνουμε αυτό;', type: 'VISION', req: 'sparken', damage: -2, cost: 0 },
  { id: 'boredom', title: 'Boredom', desc: 'Κανείς δεν έχει όρεξη σήμερα.', type: 'MINDSET', req: 'wisebot', damage: -2, cost: 0 },
  { id: 'copycat', title: 'The Copycat', desc: 'Κάποιος αντέγραψε την ιδέα μας!', type: 'STRATEGY', req: 'pencilo', damage: -5, cost: 5 },
  { id: 'wifi', title: 'No Wifi', desc: 'Κόπηκε το ίντερνετ στο γραφείο.', type: 'TECH', req: 'link', damage: -2, cost: 3 }
];

interface Player {
  id: string;
  heroId: string;
  pos: number;
  energy: number;
}

interface BrokenCompanyGameProps {
  lang: 'el' | 'en';
  onBack: () => void;
}

export default function BrokenCompanyGame({ lang, onBack }: BrokenCompanyGameProps) {
  const { earnXp, showNotification } = useEconomy();
  // --- STATE ---
  const [phase, setPhase] = useState<'SETUP' | 'GAME' | 'EVENT' | 'GAMEOVER' | 'VICTORY'>('SETUP');
  
  // Stats
  const [cash, setCash] = useState(STARTING_CASH);
  const [value, setValue] = useState(0);
  const [turn, setTurn] = useState(1);
  
  // Game Logic
  const [selectedHeroes, setSelectedHeroes] = useState<string[]>([]);
  const [players, setPlayers] = useState<Player[]>([]);
  const [activePlayerIdx, setActivePlayerIdx] = useState(0);
  
  // Events
  const [currentObstacle, setCurrentObstacle] = useState<any>(null);
  const [diceRoll, setDiceRoll] = useState<number | null>(null);
  const [isRolling, setIsRolling] = useState(false);
  const [eventLog, setEventLog] = useState<string[]>([]);

  // Safe Accessors
  const activePlayer = players[activePlayerIdx];
  const activeHeroConfig = activePlayer ? HEROES_CONFIG[activePlayer.heroId] : null;

  // --- ACTIONS ---

  const toggleHeroSelection = (heroId: string) => {
    if (selectedHeroes.includes(heroId)) {
      setSelectedHeroes(prev => prev.filter(id => id !== heroId));
    } else {
      if (selectedHeroes.length < 5) {
        setSelectedHeroes(prev => [...prev, heroId]);
      }
    }
  };

  const startGame = () => {
    if (selectedHeroes.length < 2) return;
    const newPlayers = selectedHeroes.map(hid => ({
      id: hid,
      heroId: hid,
      pos: 0,
      energy: STARTING_ENERGY
    }));
    setPlayers(newPlayers);
    setActivePlayerIdx(0);
    setCash(STARTING_CASH);
    setValue(0);
    setTurn(1);
    setEventLog([]);
    setPhase('GAME');
    addLog(lang === 'el' ? 'Η εταιρεία άνοιξε!' : 'Company opened!');
  };

  const rollDice = () => {
    if (isRolling) return;
    setIsRolling(true);
    setTimeout(() => {
      const roll = Math.ceil(Math.random() * 6);
      setDiceRoll(roll);
      setIsRolling(false);
      movePlayer(roll);
    }, 800);
  };

  const movePlayer = (steps: number) => {
    const newPlayers = [...players];
    if (!newPlayers[activePlayerIdx]) return; // Safety check

    let newPos = newPlayers[activePlayerIdx].pos + steps;
    if (newPos >= BOARD_TILES.length) newPos = newPos % BOARD_TILES.length; // Loop
    
    newPlayers[activePlayerIdx].pos = newPos;
    setPlayers(newPlayers);

    // Trigger Event after move
    setTimeout(() => {
      triggerEvent();
    }, 600);
  };

  const triggerEvent = () => {
    // Pick random obstacle
    const obstacle = OBSTACLES[Math.floor(Math.random() * OBSTACLES.length)];
    setCurrentObstacle(obstacle);
    setPhase('EVENT');
  };

  const resolveEvent = (method: 'SOLO' | 'COOP' | 'PAY') => {
    if (!currentObstacle || !activePlayer) return;

    let success = false;
    let logMsg = '';

    // 1. SOLO
    if (method === 'SOLO') {
      if (activePlayer.heroId === currentObstacle.req) {
        success = true; // Specialist always wins
        setValue(v => v + 10);
        logMsg = lang === 'el' ? 'Είσαι ο ειδικός!' : 'Expert solution!';
      } else {
        const riskRoll = Math.ceil(Math.random() * 6);
        if (riskRoll > 3) {
          success = true;
          logMsg = lang === 'el' ? 'Ρίσκαρες και πέτυχες!' : 'Risk paid off!';
        } else {
          success = false;
          logMsg = lang === 'el' ? 'Το ρίσκο απέτυχε.' : 'Risk failed.';
        }
      }
    }

    // 2. COOP
    if (method === 'COOP') {
      const helperIndex = players.findIndex(p => p.heroId === currentObstacle.req && p.energy > 0);
      if (helperIndex !== -1) {
        success = true;
        const newPlayers = [...players];
        newPlayers[helperIndex].energy = Math.max(0, newPlayers[helperIndex].energy - 1);
        setPlayers(newPlayers);
        setValue(v => v + 15); // Bonus value for coop
        logMsg = lang === 'el' ? 'Συνεργασία!' : 'Cooperation!';
      } else {
        success = false;
        logMsg = lang === 'el' ? 'Κανείς να βοηθήσει.' : 'No one to help.';
      }
    }

    // 3. PAY
    if (method === 'PAY') {
      if (cash >= 5) {
        setCash(c => c - 5);
        success = true;
        logMsg = lang === 'el' ? 'Πλήρωσες λύση.' : 'Paid solution.';
      } else {
        success = false;
        logMsg = lang === 'el' ? 'Δεν έχεις λεφτά!' : 'No money!';
      }
    }

    // APPLY
    if (success) {
      addLog(`✅ ${logMsg}`);
      setValue(v => v + 5);
    } else {
      addLog(`❌ ${logMsg}`);
      setCash(c => Math.max(0, c + (currentObstacle.damage * 2))); // Damage is negative
    }

    // Next Turn
    setTimeout(() => {
      endTurn();
    }, 1500);
  };

  const endTurn = () => {
    setPhase('GAME');
    setCurrentObstacle(null);
    setDiceRoll(null);
    
    // Check Game Over
    if (cash <= 0) {
      setPhase('GAMEOVER');
      return;
    }
    
    // Check Victory
    if (turn >= MAX_TURNS) {
      setPhase('VICTORY');
      grantGameReward('company', 2, earnXp, showNotification, lang);
      return;
    }

    // Next Player
    const nextIdx = (activePlayerIdx + 1) % players.length;
    setActivePlayerIdx(nextIdx);
    
    // If round complete, increment turn and burn cash
    if (nextIdx === 0) {
      setTurn(t => t + 1);
      setCash(c => Math.max(0, c - 2)); // Burn rate
      addLog(lang === 'el' ? 'Νέα εβδομάδα. Έξοδα -2$' : 'New week. Expenses -2$');
    }
  };

  const addLog = (msg: string) => {
    setEventLog(prev => [msg, ...prev].slice(0, 3));
  };

  // --- RENDERERS ---

  if (phase === 'SETUP') {
    return (
      <div className="h-full flex flex-col items-center justify-center p-6 animate-in fade-in bg-[#0B0F1A]">
        <GameBackButton onClick={onBack} lang={lang} className="self-start mb-4" />
        
        <div className="mb-8 text-center">
            <h1 className="text-4xl md:text-6xl font-[1000] text-white uppercase italic tracking-tighter mb-2">
            BROKEN <span className="text-red-500">COMPANY</span>
            </h1>
            <div className="inline-block bg-red-500/20 text-red-300 border border-red-500/50 px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">
            STRATEGY GAME
            </div>
        </div>
        
        <p className="text-white/60 text-sm mb-8 text-center max-w-md">
          {lang === 'el' 
            ? 'Διάλεξε τουλάχιστον 2 ήρωες για την ομάδα σου.' 
            : 'Select at least 2 heroes for your team.'}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-10 w-full max-w-4xl">
          {Object.values(HEROES_CONFIG).map((hero) => {
            const isSelected = selectedHeroes.includes(hero.id);
            const Icon = hero.icon;
            return (
              <button
                key={hero.id}
                onClick={() => toggleHeroSelection(hero.id)}
                className={`p-4 rounded-3xl border-2 flex flex-col items-center gap-3 transition-all ${isSelected ? `border-white ${hero.bg} scale-105 shadow-xl` : 'border-white/10 bg-white/5 opacity-60 hover:opacity-100 hover:bg-white/10'}`}
              >
                <div className="w-12 h-12 bg-black/20 rounded-full flex items-center justify-center">
                  <Icon size={24} className="text-white" />
                </div>
                <div className="text-center">
                  <h4 className="font-black text-white uppercase text-xs">{hero.name}</h4>
                  <span className="text-[9px] font-bold text-white/60 uppercase tracking-widest">{hero.role}</span>
                </div>
                {isSelected && <CheckCircle size={16} className="text-white absolute top-2 right-2" />}
              </button>
            );
          })}
        </div>

        <button 
          onClick={startGame}
          disabled={selectedHeroes.length < 2}
          className="px-10 py-4 bg-white text-black rounded-full font-[1000] uppercase tracking-widest shadow-xl hover:scale-105 transition-all disabled:opacity-50 flex items-center gap-3"
        >
          {lang === 'el' ? 'ΕΚΚΙΝΗΣΗ' : 'START GAME'} <ArrowRight size={20} />
        </button>
      </div>
    );
  }

  if (phase === 'GAMEOVER' || phase === 'VICTORY') {
    return (
      <div className="h-full flex flex-col items-center justify-center p-6 text-center animate-in zoom-in bg-[#0B0F1A]">
        <div className={`w-32 h-32 rounded-full flex items-center justify-center mb-8 shadow-2xl ${phase === 'VICTORY' ? 'bg-emerald-500' : 'bg-red-500'}`}>
           {phase === 'VICTORY' ? <Trophy size={64} className="text-white" /> : <Ghost size={64} className="text-white" />}
        </div>
        
        <h2 className="text-5xl font-[1000] text-white uppercase italic tracking-tighter mb-4">
          {phase === 'VICTORY' ? (lang === 'el' ? 'ΕΠΙΤΥΧΙΑ!' : 'SUCCESS!') : (lang === 'el' ? 'ΧΡΕΟΚΟΠΙΑ' : 'BANKRUPTCY')}
        </h2>
        
        <div className="bg-white/10 border border-white/20 p-8 rounded-3xl max-w-sm w-full mb-8">
           <div className="flex justify-between mb-4 border-b border-white/10 pb-4">
              <span className="text-white/60 text-xs font-bold uppercase">CASH LEFT</span>
              <span className="text-emerald-400 font-black">{cash}M $</span>
           </div>
           <div className="flex justify-between">
              <span className="text-white/60 text-xs font-bold uppercase">TOTAL VALUE</span>
              <span className="text-blue-400 font-black">{value} pts</span>
           </div>
        </div>

        <button onClick={() => { setPhase('SETUP'); setSelectedHeroes([]); }} className="px-8 py-4 bg-white text-black rounded-xl font-bold uppercase tracking-widest hover:scale-105 transition-transform flex items-center gap-2">
           <RotateCcw size={18} /> {lang === 'el' ? 'ΝΕΟ ΠΑΙΧΝΙΔΙ' : 'NEW GAME'}
        </button>
      </div>
    );
  }

  const ActiveHeroIcon = activeHeroConfig ? activeHeroConfig.icon : Users;

  return (
    <div className="h-full flex flex-col p-2 md:p-4 relative max-w-5xl mx-auto w-full overflow-hidden">

      {/* HUD */}
      <div className="flex justify-between items-center bg-[#1a1d26] border border-white/10 px-3 py-2 rounded-xl mb-2 shadow-lg z-20 shrink-0">
         <div className="flex gap-6">
            <div>
               <span className="text-[9px] font-black text-white/40 uppercase block">CASH</span>
               <span className={`text-xl font-black ${cash < 10 ? 'text-red-500' : 'text-emerald-400'}`}>{cash}M</span>
            </div>
            <div>
               <span className="text-[9px] font-black text-white/40 uppercase block">VALUE</span>
               <span className="text-xl font-black text-blue-400">{value}</span>
            </div>
         </div>
         <div className="bg-white/5 px-3 py-1 rounded-lg border border-white/10">
            <span className="text-xs font-black text-white">TURN {turn}/{MAX_TURNS}</span>
         </div>
      </div>

      {/* BOARD */}
      <div className="flex-1 min-h-0 relative bg-black/40 rounded-xl border-2 border-white/5 overflow-hidden flex items-center justify-center p-2 md:p-4">
         <div className="w-full relative z-10 flex justify-between items-center px-2 md:px-8">
            {/* Draw Path */}
            <div className="absolute top-1/2 left-4 right-4 h-1 bg-white/10 -translate-y-1/2 -z-10"></div>

            {['IDEA', 'PLAN', 'BUILD', 'MARKET', 'CRISIS', 'SCALE'].map((label, idx) => (
               <div key={idx} className="flex flex-col items-center gap-2">
                  <div className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl border-2 flex items-center justify-center bg-[#2a2d36] border-white/10`}>
                      <span className="text-white/20 font-black">{idx + 1}</span>
                  </div>
                  <span className="text-[8px] font-black text-white/30 uppercase tracking-widest">{label}</span>
                  
                  {/* Players Here */}
                  <div className="absolute -top-6 flex justify-center w-full pointer-events-none">
                     {players.filter(p => {
                       const tileType = BOARD_TILES[p.pos].type;
                       const types = ['IDEA', 'PLAN', 'BUILD', 'MARKET', 'CRISIS', 'SCALE'];
                       return types.indexOf(tileType) === idx;
                     }).map((p, i) => {
                       const conf = HEROES_CONFIG[p.heroId];
                       if (!conf) return null; // Safety
                       const PIcon = conf.icon;
                       return (
                         <div key={p.id} className={`w-8 h-8 rounded-full border border-white ${conf.bg} flex items-center justify-center shadow-lg -ml-2 first:ml-0 relative z-10`}>
                            <PIcon size={14} className="text-white" />
                         </div>
                       );
                     })}
                  </div>
               </div>
            ))}
         </div>

         {/* EVENT MODAL */}
         <AnimatePresence>
           {phase === 'EVENT' && currentObstacle && activePlayer && (
             <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               exit={{ opacity: 0, scale: 0.9 }}
               className="absolute inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
             >
                <div className="bg-[#1a1d26] border-2 border-red-500/50 w-full max-w-md rounded-3xl p-6 shadow-2xl relative">
                   <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-red-500/20 rounded-xl text-red-400">
                         <AlertTriangle size={24} />
                      </div>
                      <div>
                         <span className="text-[10px] font-black text-red-400 uppercase tracking-widest">CRISIS</span>
                         <h3 className="text-xl font-[1000] text-white uppercase italic">{currentObstacle.title}</h3>
                      </div>
                   </div>
                   <p className="text-white/70 font-bold text-sm mb-6 bg-black/20 p-4 rounded-xl border border-white/5">
                      {currentObstacle.desc}
                   </p>

                   <div className="space-y-2">
                      <button onClick={() => resolveEvent('SOLO')} className="w-full p-3 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 text-white font-bold text-xs uppercase tracking-widest flex justify-between items-center">
                         <span className="flex items-center gap-2"><Dice5 size={14}/> {activePlayer.heroId === currentObstacle.req ? 'I AM EXPERT!' : 'RISK IT (50%)'}</span>
                      </button>
                      
                      {players.some(p => p.heroId === currentObstacle.req && p.id !== activePlayer.id) && (
                         <button onClick={() => resolveEvent('COOP')} className="w-full p-3 bg-blue-600 hover:bg-blue-500 rounded-xl text-white font-bold text-xs uppercase tracking-widest flex justify-between items-center">
                            <span className="flex items-center gap-2"><Users size={14}/> CO-OP</span>
                            <span className="text-blue-200">-1 Energy</span>
                         </button>
                      )}

                      <button onClick={() => resolveEvent('PAY')} className="w-full p-3 bg-amber-600/20 hover:bg-amber-600/30 border border-amber-600/50 rounded-xl text-amber-400 font-bold text-xs uppercase tracking-widest flex justify-between items-center">
                         <span className="flex items-center gap-2"><Briefcase size={14}/> PAY</span>
                         <span>-{currentObstacle.cost}$</span>
                      </button>
                   </div>
                </div>
             </motion.div>
           )}
         </AnimatePresence>
      </div>

      {/* CONTROLS */}
      <div className="mt-2 flex items-center justify-between bg-[#1a1d26] px-3 py-2 rounded-xl border border-white/10 shrink-0">
         <div className="flex items-center gap-3">
            {activePlayer && activeHeroConfig && (
               <>
                 <div className={`w-10 h-10 rounded-xl ${activeHeroConfig.bg} flex items-center justify-center`}>
                    <ActiveHeroIcon size={20} className="text-white" />
                 </div>
                 <div>
                    <span className="text-[9px] font-black text-white/40 uppercase block">TURN</span>
                    <span className="text-white font-black text-sm uppercase">{activeHeroConfig.name}</span>
                 </div>
                 {/* Energy */}
                 <div className="flex gap-1 ml-2">
                    {[...Array(3)].map((_, i) => (
                        <div key={i} className={`w-1.5 h-1.5 rounded-full ${i < activePlayer.energy ? 'bg-amber-400' : 'bg-white/10'}`}></div>
                    ))}
                 </div>
               </>
            )}
         </div>

         {phase === 'GAME' && (
            <button 
               onClick={rollDice}
               disabled={isRolling}
               className="px-6 py-3 bg-white text-black rounded-xl font-[1000] uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-lg flex items-center gap-2"
            >
               {isRolling ? <RefreshCcw className="animate-spin" size={18} /> : <Dice5 size={18} />}
               {isRolling ? '...' : 'ROLL'}
            </button>
         )}

         {diceRoll && !isRolling && phase !== 'EVENT' && (
            <div className="w-12 h-12 bg-white text-black rounded-xl flex items-center justify-center font-black text-2xl shadow-lg">
               {diceRoll}
            </div>
         )}
      </div>

      {/* SIMPLE LOG */}
      <div className="absolute top-24 left-6 z-10 pointer-events-none hidden md:block">
         {eventLog.map((log, i) => (
            <motion.div 
               key={i} 
               initial={{ opacity: 0, x: -20 }} 
               animate={{ opacity: 1, x: 0 }} 
               className="bg-black/80 backdrop-blur-sm text-white text-[10px] font-bold px-3 py-1.5 rounded-lg mb-2 border border-white/10 shadow-lg w-fit"
            >
               {log}
            </motion.div>
         ))}
      </div>

    </div>
  );
}
