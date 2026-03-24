
import React, { useState, useEffect, useRef } from 'react';
import { motion as m, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  RefreshCcw, 
  Trophy, 
  Users, 
  Brain, 
  Zap, 
  Star, 
  Crown,
  Atom,
  Rocket,
  Globe,
  Palette,
  Music,
  Leaf,
  Anchor,
  Gamepad2,
  Ghost,
  Flame,
  Droplet,
  Sun,
  Moon,
  Heart,
  Smile,
  Cloud,
  Camera,
  Key,
  Lock,
  Map,
  Compass,
  Cpu,
  Code
} from 'lucide-react';
import { useEconomy } from '../../context/EconomyContext';

const motion = m as any;

interface WiseCardsProps {
  lang: 'el' | 'en';
  onBack: () => void;
}

// --- CONFIGURATION ---
const LEVELS = [
  { 
    id: 'easy', 
    label: { el: 'ΕΥΚΟΛΟ (20)', en: 'EASY (20)' }, 
    cards: 20, 
    colsMobile: 4, // 5 rows
    colsDesktop: 5 // 4 rows
  },
  { 
    id: 'medium', 
    label: { el: 'ΜΕΣΑΙΟ (40)', en: 'MEDIUM (40)' }, 
    cards: 40, 
    colsMobile: 5, // 8 rows
    colsDesktop: 8 // 5 rows
  },
  { 
    id: 'hard', 
    label: { el: 'ΔΥΣΚΟΛΟ (80)', en: 'HARD (80)' }, 
    cards: 80, 
    colsMobile: 8, // 10 rows (Tiny cards on mobile)
    colsDesktop: 10 // 8 rows
  }
];

// ICON POOL (40 Unique items for up to 80 cards)
const ICONS = [
  { id: 1, icon: Atom, color: 'text-blue-400' },
  { id: 2, icon: Brain, color: 'text-pink-400' },
  { id: 3, icon: Rocket, color: 'text-red-500' },
  { id: 4, icon: Globe, color: 'text-emerald-400' },
  { id: 5, icon: Palette, color: 'text-yellow-400' },
  { id: 6, icon: Music, color: 'text-purple-400' },
  { id: 7, icon: Leaf, color: 'text-green-500' },
  { id: 8, icon: Anchor, color: 'text-cyan-600' },
  { id: 9, icon: Gamepad2, color: 'text-indigo-400' },
  { id: 10, icon: Ghost, color: 'text-gray-400' },
  { id: 11, icon: Flame, color: 'text-orange-500' },
  { id: 12, icon: Droplet, color: 'text-blue-300' },
  { id: 13, icon: Sun, color: 'text-yellow-300' },
  { id: 14, icon: Moon, color: 'text-slate-300' },
  { id: 15, icon: Heart, color: 'text-rose-500' },
  { id: 16, icon: Smile, color: 'text-amber-300' },
  { id: 17, icon: Cloud, color: 'text-sky-200' },
  { id: 18, icon: Camera, color: 'text-teal-300' },
  { id: 19, icon: Key, color: 'text-amber-600' },
  { id: 20, icon: Lock, color: 'text-red-300' },
  { id: 21, icon: Map, color: 'text-green-700' },
  { id: 22, icon: Compass, color: 'text-blue-700' },
  { id: 23, icon: Cpu, color: 'text-violet-500' },
  { id: 24, icon: Code, color: 'text-emerald-300' },
  { id: 25, icon: Zap, color: 'text-yellow-500' },
  { id: 26, icon: Star, color: 'text-purple-300' },
  { id: 27, icon: Crown, color: 'text-amber-200' },
  { id: 28, icon: Trophy, color: 'text-yellow-600' },
  { id: 29, icon: Users, color: 'text-pink-600' },
  { id: 30, icon: RefreshCcw, color: 'text-white' },
  { id: 31, icon: ArrowLeft, color: 'text-gray-500' },
  { id: 32, icon: Atom, color: 'text-red-400' }, // Variant
  { id: 33, icon: Brain, color: 'text-blue-500' }, // Variant
  { id: 34, icon: Rocket, color: 'text-orange-400' }, // Variant
  { id: 35, icon: Globe, color: 'text-cyan-400' }, // Variant
  { id: 36, icon: Palette, color: 'text-fuchsia-500' }, // Variant
  { id: 37, icon: Music, color: 'text-green-300' }, // Variant
  { id: 38, icon: Leaf, color: 'text-lime-600' }, // Variant
  { id: 39, icon: Anchor, color: 'text-sky-600' }, // Variant
  { id: 40, icon: Gamepad2, color: 'text-violet-300' } // Variant
];

export default function WiseCards({ lang, onBack }: WiseCardsProps) {
  const { earnCredits } = useEconomy();
  const creditsAwardedRef = useRef(false);

  // Game State
  const [gameState, setGameState] = useState<'menu' | 'playing' | 'finished'>('menu');
  const [level, setLevel] = useState(LEVELS[0]);
  
  // Board State
  const [cards, setCards] = useState<{
    id: number, 
    contentId: number, 
    isFlipped: boolean, 
    isMatched: boolean, 
    visual: typeof ICONS[0]
  }[]>([]);
  const [flippedIndices, setFlippedIndices] = useState<number[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  
  // Players State
  const [turn, setTurn] = useState<1 | 2>(1);
  const [scores, setScores] = useState({ 1: 0, 2: 0 });

  const t = {
    title: 'WISE CARDS',
    subtitle: lang === 'el' ? 'ΠΑΙΧΝΙΔΙ ΜΝΗΜΗΣ' : 'MEMORY GAME',
    p1: lang === 'el' ? 'ΠΑΙΚΤΗΣ 1' : 'PLAYER 1',
    p2: lang === 'el' ? 'ΠΑΙΚΤΗΣ 2' : 'PLAYER 2',
    turn: lang === 'el' ? 'ΣΕΙΡΑ ΣΟΥ!' : 'YOUR TURN!',
    pairs: lang === 'el' ? 'ΖΕΥΓΑΡΙΑ' : 'PAIRS',
    winner: lang === 'el' ? 'ΝΙΚΗΤΗΣ' : 'WINNER',
    draw: lang === 'el' ? 'ΙΣΟΠΑΛΙΑ!' : 'DRAW!',
    playAgain: lang === 'el' ? 'ΠΑΙΞΕ ΞΑΝΑ' : 'PLAY AGAIN',
    back: lang === 'el' ? 'ΠΙΣΩ' : 'BACK'
  };

  // --- LOGIC ---

  const startGame = (selectedLevel: typeof LEVELS[0]) => {
    setLevel(selectedLevel);
    
    // Create Deck
    const pairCount = selectedLevel.cards / 2;
    const selectedIcons = ICONS.slice(0, pairCount);
    
    // Duplicate for pairs
    let deck = [...selectedIcons, ...selectedIcons].map((icon, i) => ({
        id: i, // Unique ID for key
        contentId: icon.id, // ID to match
        isFlipped: false,
        isMatched: false,
        visual: icon // Store icon component & color
    }));

    // Shuffle (Fisher-Yates)
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }

    setCards(deck);
    setFlippedIndices([]);
    setScores({ 1: 0, 2: 0 });
    setTurn(1);
    setIsProcessing(false);
    setGameState('playing');
  };

  const handleCardClick = (index: number) => {
    // Block if: processing, card matched, card already flipped
    if (isProcessing || cards[index].isMatched || cards[index].isFlipped) return;

    // Flip Card
    const newCards = [...cards];
    newCards[index].isFlipped = true;
    setCards(newCards);

    const newFlipped = [...flippedIndices, index];
    setFlippedIndices(newFlipped);

    // Check Match
    if (newFlipped.length === 2) {
        setIsProcessing(true);
        checkForMatch(newFlipped[0], newFlipped[1]);
    }
  };

  const checkForMatch = (idx1: number, idx2: number) => {
    const card1 = cards[idx1];
    const card2 = cards[idx2];

    if (card1.contentId === card2.contentId) {
        // MATCH!
        setTimeout(() => {
            setCards(prev => prev.map((c, i) => 
                i === idx1 || i === idx2 ? { ...c, isMatched: true } : c
            ));
            setFlippedIndices([]);
            setScores(prev => ({ ...prev, [turn]: prev[turn] + 1 }));
            setIsProcessing(false);
            
            // Check Win Condition inside timeout to ensure state update
            checkWinCondition();
        }, 500);
        // Turn stays with current player on match!
    } else {
        // NO MATCH
        setTimeout(() => {
            setCards(prev => prev.map((c, i) => 
                i === idx1 || i === idx2 ? { ...c, isFlipped: false } : c
            ));
            setFlippedIndices([]);
            setTurn(prev => prev === 1 ? 2 : 1); // Switch turn
            setIsProcessing(false);
        }, 1000);
    }
  };

  const checkWinCondition = () => {
    setCards(currentCards => {
        const allMatched = currentCards.every(c => c.isMatched);
        if (allMatched) {
            setTimeout(() => {
                setGameState('finished');
                if (!creditsAwardedRef.current) {
                  creditsAwardedRef.current = true;
                  earnCredits(5);
                }
            }, 500);
        }
        return currentCards;
    });
  };

  // --- RENDERERS ---

  if (gameState === 'menu') {
      return (
        <div className="h-full flex flex-col items-center justify-center p-6 bg-[#0B0F1A] animate-in fade-in">
            <button onClick={onBack} className="absolute top-4 right-4 text-white/50 hover:text-white font-bold uppercase text-xs flex items-center gap-2 bg-white/10 px-3 py-1 rounded-lg">
               {t.back}
            </button>

            <div className="text-center mb-12">
                <h1 className="text-5xl md:text-7xl font-[1000] text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 italic uppercase tracking-tighter mb-2">
                    {t.title}
                </h1>
                <p className="text-white/40 font-bold uppercase tracking-[0.3em] text-xs flex items-center justify-center gap-2">
                    <Users size={14} /> {t.subtitle}
                </p>
            </div>

            <div className="grid grid-cols-1 gap-4 w-full max-w-sm">
                {LEVELS.map(lvl => (
                    <button
                        key={lvl.id}
                        onClick={() => startGame(lvl)}
                        className="group relative p-6 rounded-2xl border-2 border-white/10 bg-white/5 hover:bg-white/10 hover:border-blue-500 hover:scale-105 transition-all text-left overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Brain size={64} className="rotate-12" />
                        </div>
                        <h4 className="text-xl font-black text-white uppercase italic relative z-10">{lvl.label[lang]}</h4>
                        <p className="text-white/50 text-xs font-bold uppercase tracking-widest relative z-10 mt-1">
                            {lvl.cards / 2} {t.pairs}
                        </p>
                    </button>
                ))}
            </div>
        </div>
      );
  }

  if (gameState === 'finished') {
      const winner = scores[1] > scores[2] ? 1 : scores[1] < scores[2] ? 2 : 0;
      
      return (
        <div className="h-full flex flex-col items-center justify-center p-6 bg-[#0B0F1A] animate-in zoom-in text-center">
             <div className="w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(251,191,36,0.4)] mb-8 animate-bounce">
                 <Trophy size={64} className="text-white" />
             </div>
             
             <h2 className="text-4xl md:text-6xl font-[1000] text-white italic uppercase tracking-tighter mb-2">
                 {winner === 0 ? t.draw : `${t.winner}: ${winner === 1 ? t.p1 : t.p2}`}
             </h2>
             
             <div className="flex gap-8 text-2xl font-black text-white/80 mb-12">
                 <div className="text-blue-400">{t.p1}: {scores[1]}</div>
                 <div className="text-pink-400">{t.p2}: {scores[2]}</div>
             </div>

             <button onClick={() => setGameState('menu')} className="px-10 py-4 bg-white text-black rounded-2xl font-[1000] uppercase tracking-widest hover:scale-105 transition-transform flex items-center gap-2 shadow-xl">
                 <RefreshCcw size={20} /> {t.playAgain}
             </button>
        </div>
      );
  }

  // GAME BOARD
  return (
    <div className="h-full flex flex-col bg-[#0B0F1A] relative select-none overflow-hidden">
        
        {/* TOP HUD */}
        <div className="bg-[#0B0F1A] border-b border-white/10 px-3 py-2 flex justify-between items-center shadow-lg z-20 shrink-0">
            <div className={`flex flex-col items-start transition-opacity duration-300 ${turn === 1 ? 'opacity-100 scale-105' : 'opacity-50'}`}>
                <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest flex items-center gap-1">
                   <Users size={12}/> {t.p1}
                </span>
                <span className="text-3xl font-[1000] text-white leading-none">{scores[1]}</span>
                {turn === 1 && <span className="text-[9px] font-bold text-emerald-400 animate-pulse">{t.turn}</span>}
            </div>

            <button onClick={() => setGameState('menu')} className="text-white/30 hover:text-white transition-colors bg-white/5 p-2 rounded-full">
                <RefreshCcw size={20} />
            </button>

            <div className={`flex flex-col items-end transition-opacity duration-300 ${turn === 2 ? 'opacity-100 scale-105' : 'opacity-50'}`}>
                <span className="text-[10px] font-black text-pink-400 uppercase tracking-widest flex items-center gap-1">
                   {t.p2} <Users size={12}/>
                </span>
                <span className="text-3xl font-[1000] text-white leading-none">{scores[2]}</span>
                {turn === 2 && <span className="text-[9px] font-bold text-emerald-400 animate-pulse">{t.turn}</span>}
            </div>
        </div>

        {/* CARDS GRID */}
        <div className="flex-1 overflow-y-auto custom-scrollbar p-2 md:p-4 flex items-center justify-center">
            <div
                className="wisecards-grid grid gap-2 w-full md:h-auto content-center mx-auto"
                style={{
                    gridTemplateColumns: `repeat(${level.colsMobile}, minmax(0, 1fr))`,
                    maxWidth: level.id === 'hard' ? '900px' : level.id === 'medium' ? '700px' : '550px',
                }}
            >
                {/* INLINE STYLE FOR RESPONSIVE GRID OVERRIDE ON DESKTOP */}
                <style>{`
                  @media (min-width: 768px) {
                    .wisecards-grid {
                      grid-template-columns: repeat(${level.colsDesktop}, minmax(0, 1fr)) !important;
                      gap: 0.75rem;
                    }
                  }
                `}</style>

                {cards.map((card, idx) => {
                    const Icon = card.visual?.icon || Star;
                    const color = card.visual?.color || 'text-white';
                    
                    return (
                        <div key={card.id} className="relative aspect-square perspective-1000 group">
                            <motion.div
                                className="w-full h-full relative preserve-3d cursor-pointer shadow-lg rounded-xl"
                                initial={false}
                                animate={{ rotateY: card.isFlipped || card.isMatched ? 180 : 0 }}
                                transition={{ duration: 0.4, type: "spring", stiffness: 260, damping: 20 }}
                                onClick={() => handleCardClick(idx)}
                                style={{ transformStyle: 'preserve-3d' }}
                            >
                                {/* FRONT (The Cover - Visible initially at 0 deg) */}
                                <div 
                                    className="absolute inset-0 backface-hidden bg-gradient-to-br from-slate-800 to-slate-950 rounded-xl border-2 border-white/10 flex items-center justify-center shadow-inner group-hover:border-blue-500/50 transition-colors"
                                    style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
                                >
                                    {/* Abstract Pattern or Logo */}
                                    <div className="opacity-20">
                                        <Brain size={level.id === 'hard' ? 16 : 24} className="text-white" />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent rounded-xl pointer-events-none"></div>
                                </div>

                                {/* BACK (The Icon - Hidden initially, Visible at 180 deg) */}
                                <div 
                                    className={`absolute inset-0 backface-hidden rounded-xl border-2 flex items-center justify-center shadow-xl bg-[#1a1d26] ${card.isMatched ? 'border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.4)] bg-emerald-900/20' : 'border-white/20'}`}
                                    style={{ 
                                        transform: 'rotateY(180deg)', 
                                        backfaceVisibility: 'hidden', 
                                        WebkitBackfaceVisibility: 'hidden' 
                                    }} 
                                >
                                    <Icon size={level.id === 'hard' ? 18 : 32} className={`${color} drop-shadow-md`} />
                                    
                                    {/* Shine Effect on Match */}
                                    {card.isMatched && (
                                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent animate-pulse rounded-xl pointer-events-none"></div>
                                    )}
                                </div>
                            </motion.div>
                        </div>
                    );
                })}
            </div>
        </div>
        
    </div>
  );
}
