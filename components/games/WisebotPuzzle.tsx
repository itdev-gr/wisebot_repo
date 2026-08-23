
import React, { useState, useEffect, useRef } from 'react';
import GameBackButton from './GameBackButton';
import { ArrowLeft, Play, Eye, EyeOff, CheckCircle, Zap, RefreshCcw } from 'lucide-react';
import { motion as m, AnimatePresence } from 'framer-motion';
import { useEconomy } from '../../context/EconomyContext';
import { grantGameReward } from './gameRewards';

const motion = m as any;

// --- CONFIGURATION ---
const HEROES = [
  { id: 'wisebot', name: 'Wisebot', color: 'text-purple-400', img: "/images/wisebot.jpg" },
  { id: 'crocus', name: 'Crocus', color: 'text-emerald-400', img: "/images/crocus.jpg" },
  { id: 'link', name: 'Link', color: 'text-blue-400', img: "/images/link.jpg" },
  { id: 'pencilo', name: 'Pencilo', color: 'text-yellow-400', img: "/images/pencilo.jpg" },
  { id: 'sparken', name: 'Sparken', color: 'text-red-400', img: "/images/sparken.jpg" }
];

const DIFFICULTIES = [
  { id: 'easy', label: '25 Pieces', grid: 5, bonus: 5 },   // 5x5 = 25
  { id: 'medium', label: '49 Pieces', grid: 7, bonus: 10 }, // 7x7 = 49
  { id: 'hard', label: '100 Pieces', grid: 10, bonus: 20 }  // 10x10 = 100
];

interface WisebotPuzzleProps {
  lang: 'el' | 'en';
  onBack: () => void;
}

export default function WisebotPuzzle({ lang, onBack }: WisebotPuzzleProps) {
  const { earnCredits, showNotification } = useEconomy();
  // Game State
  const [gameState, setGameState] = useState<'menu' | 'playing' | 'victory'>('menu');
  const [selectedHero, setSelectedHero] = useState(HEROES[0]);
  const [selectedDiff, setSelectedDiff] = useState(DIFFICULTIES[0]);
  
  // Puzzle Logic State
  const [trayPieces, setTrayPieces] = useState<number[]>([]); // IDs of pieces waiting to be placed
  const [boardPieces, setBoardPieces] = useState<(number | null)[]>([]); // Grid state (null or pieceId)
  const [selectedPieceId, setSelectedPieceId] = useState<number | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [errorSlot, setErrorSlot] = useState<number | null>(null); // For red flash effect

  const t = {
    back: lang === 'el' ? 'ΠΙΣΩ' : 'BACK',
    start: lang === 'el' ? 'ΕΚΚΙΝΗΣΗ' : 'START PUZZLE',
    hint: lang === 'el' ? 'ΔΕΙΞΕ ΕΙΚΟΝΑ' : 'SHOW IMAGE',
    hideHint: lang === 'el' ? 'ΚΡΥΨΕ ΕΙΚΟΝΑ' : 'HIDE IMAGE',
    victory: lang === 'el' ? 'ΟΛΟΚΛΗΡΩΘΗΚΕ!' : 'PUZZLE COMPLETE!',
    reward: lang === 'el' ? 'ΚΕΡΔΙΣΕΣ:' : 'REWARD:',
    pieces: lang === 'el' ? 'Κομμάτια' : 'Pieces',
    menu: lang === 'el' ? 'ΜΕΝΟΥ' : 'MENU',
    playAgain: lang === 'el' ? 'ΠΑΙΞΕ ΞΑΝΑ' : 'PLAY AGAIN'
  };

  // --- INIT ---
  const startGame = () => {
    const total = selectedDiff.grid * selectedDiff.grid;
    
    // Create Board (Empty)
    const emptyBoard = Array(total).fill(null);
    setBoardPieces(emptyBoard);

    // Create Tray (All pieces shuffled)
    const pieces = Array.from({ length: total }, (_, i) => i);
    // Fisher-Yates Shuffle
    for (let i = pieces.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pieces[i], pieces[j]] = [pieces[j], pieces[i]];
    }
    
    setTrayPieces(pieces);
    setSelectedPieceId(null);
    setShowHint(false);
    setGameState('playing');
  };

  // --- INTERACTION ---
  
  const handleTrayClick = (id: number) => {
    if (selectedPieceId === id) {
        setSelectedPieceId(null); // Deselect
    } else {
        setSelectedPieceId(id); // Select
    }
  };

  const handleBoardClick = (index: number) => {
    // Check if user has selected a piece
    if (selectedPieceId === null) return;

    // Check if slot is already filled
    if (boardPieces[index] !== null) return;

    // LOGIC: Is this the correct spot?
    // In this implementation, Piece ID corresponds exactly to the Slot Index (0 to N).
    // Piece 0 goes to Slot 0, Piece 5 to Slot 5, etc.
    if (selectedPieceId === index) {
        // CORRECT!
        placePiece(index, selectedPieceId);
    } else {
        // WRONG!
        triggerError(index);
    }
  };

  const placePiece = (slotIndex: number, pieceId: number) => {
      // 1. Update Board
      const newBoard = [...boardPieces];
      newBoard[slotIndex] = pieceId;
      setBoardPieces(newBoard);

      // 2. Remove from Tray
      setTrayPieces(prev => prev.filter(id => id !== pieceId));

      // 3. Clear Selection
      setSelectedPieceId(null);

      // 4. Check Win
      const isFull = newBoard.every(p => p !== null);
      if (isFull) {
          setTimeout(() => {
              setGameState('victory');
              grantGameReward('puzzle', 2, earnCredits, showNotification, lang);
          }, 500);
      }
  };

  const triggerError = (index: number) => {
      setErrorSlot(index);
      setTimeout(() => setErrorSlot(null), 400);
  };

  // --- RENDERERS ---

  if (gameState === 'menu') {
      return (
          <div className="h-full flex flex-col items-center justify-start p-4 max-w-4xl mx-auto animate-in fade-in overflow-y-auto pb-24">
              <GameBackButton onClick={onBack} lang={lang} className="self-start mb-4" />

              <div className="text-center mb-10">
                  <h1 className="text-5xl md:text-7xl font-[1000] text-white italic uppercase tracking-tighter mb-2">
                      WISE <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">PUZZLE</span>
                  </h1>
                  <p className="text-white/40 font-bold uppercase tracking-[0.4em] text-xs">CLASSIC JIGSAW MODE</p>
              </div>

              {/* 1. HEROES */}
              <div className="flex justify-center gap-4 flex-wrap mb-10">
                  {HEROES.map(h => (
                      <button 
                        key={h.id}
                        onClick={() => setSelectedHero(h)}
                        className={`relative w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden border-4 transition-all duration-300 ${selectedHero.id === h.id ? 'border-blue-500 scale-110 shadow-[0_0_30px_rgba(59,130,246,0.5)] z-10' : 'border-white/10 opacity-60 hover:opacity-100 hover:scale-105'}`}
                      >
                          <img src={h.img} className="w-full h-full object-cover" alt={h.name} />
                      </button>
                  ))}
              </div>

              {/* 2. DIFFICULTY */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-2xl mb-12">
                  {DIFFICULTIES.map(d => (
                      <button
                        key={d.id}
                        onClick={() => setSelectedDiff(d)}
                        className={`p-6 rounded-2xl border-2 text-left transition-all relative overflow-hidden group ${selectedDiff.id === d.id ? 'bg-blue-600/20 border-blue-500 text-white' : 'bg-white/5 border-white/10 text-white/50 hover:bg-white/10'}`}
                      >
                          <div className="relative z-10">
                              <h4 className="font-black uppercase italic text-xl">{d.label}</h4>
                              <p className="text-xs font-bold opacity-70 mt-1">{d.grid} x {d.grid} Grid</p>
                              <div className="mt-4 flex items-center gap-2 text-amber-400 font-bold text-xs">
                                  <Zap size={14} fill="currentColor" /> {lang === 'el' ? 'Κέρδισε Credits' : 'Earn Credits'}
                              </div>
                          </div>
                          {selectedDiff.id === d.id && <div className="absolute inset-0 bg-blue-500/10 animate-pulse"></div>}
                      </button>
                  ))}
              </div>

              <button 
                onClick={startGame}
                className="px-12 py-5 bg-white text-black rounded-full font-[1000] uppercase tracking-widest text-lg shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:scale-105 transition-transform flex items-center gap-3"
              >
                  <Play size={24} fill="currentColor" /> {t.start}
              </button>
          </div>
      );
  }

  if (gameState === 'victory') {
      return (
          <div className="h-full flex flex-col items-center justify-center p-8 text-center animate-in zoom-in duration-500">
              <div className="w-64 h-64 rounded-3xl border-8 border-white/20 overflow-hidden shadow-2xl mb-8 relative">
                  <img src={selectedHero.img} className="w-full h-full object-cover" alt="Hero" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                      <CheckCircle size={80} className="text-emerald-400 drop-shadow-lg" />
                  </div>
              </div>
              
              <h2 className="text-5xl font-[1000] text-white italic uppercase tracking-tighter mb-4">
                  {t.victory}
              </h2>
              
              <div className="bg-white/10 border border-white/20 px-8 py-4 rounded-2xl flex items-center gap-4 mb-10">
                  <div className="p-3 bg-amber-500/20 rounded-full text-amber-400">
                      <Zap size={24} fill="currentColor" />
                  </div>
                  <div>
                      <p className="text-white/40 text-[10px] font-black uppercase tracking-widest text-left">{t.reward}</p>
                      <p className="text-3xl font-[1000] text-white">+{selectedDiff.bonus}</p>
                  </div>
              </div>

              <div className="flex gap-4">
                  <button onClick={() => setGameState('menu')} className="px-8 py-4 bg-white/10 text-white rounded-xl font-bold uppercase tracking-widest hover:bg-white/20 transition-all">
                      {t.menu}
                  </button>
                  <button onClick={startGame} className="px-8 py-4 bg-white text-black rounded-xl font-[1000] uppercase tracking-widest hover:scale-105 transition-transform flex items-center gap-2">
                      <RefreshCcw size={18} /> {t.playAgain}
                  </button>
              </div>
          </div>
      );
  }

  // --- PLAYING UI ---
  const gridSize = selectedDiff.grid;

  return (
    <div className="h-full flex flex-col p-2 md:p-4 overflow-hidden">

        {/* HEADER TOOLBAR */}
        <div className="flex justify-between items-center mb-2 bg-black/40 px-3 py-2 rounded-xl border border-white/10 shrink-0">
            <button onClick={() => setGameState('menu')} className="text-white/50 hover:text-white font-bold uppercase text-xs flex items-center gap-2">
                <ArrowLeft size={16} /> {t.menu}
            </button>
            <div className="hidden md:block text-white/40 font-bold uppercase tracking-widest text-xs">
                {selectedHero.name} • {selectedDiff.label}
            </div>
            <button
                onClick={() => setShowHint(!showHint)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-xs uppercase tracking-widest transition-all ${showHint ? 'bg-blue-600 text-white' : 'bg-white/10 text-white/60 hover:text-white'}`}
            >
                {showHint ? <EyeOff size={16} /> : <Eye size={16} />}
                <span className="hidden sm:inline">{showHint ? t.hideHint : t.hint}</span>
            </button>
        </div>

        <div className="flex-1 flex flex-col md:flex-row gap-2 md:gap-3 overflow-hidden min-h-0">

            {/* BOARD AREA */}
            <div className="h-[55vw] md:h-auto md:flex-1 flex items-center justify-center relative bg-[#0B0F1A] rounded-xl border-2 border-white/10 shadow-2xl p-1 md:p-2 overflow-hidden shrink-0 md:shrink">

                {/* THE GRID */}
                <div
                    className="relative shadow-2xl rounded-lg overflow-hidden"
                    style={{
                        aspectRatio: '1/1',
                        height: '100%',
                        maxWidth: '100%',
                        display: 'grid',
                        gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
                        gridTemplateRows: `repeat(${gridSize}, 1fr)`,
                        gap: '2px',
                        background: 'rgba(255,255,255,0.15)',
                        border: '2px solid rgba(255,255,255,0.2)'
                    }}
                >
                    {/* HINT IMAGE (Background) */}
                    <img 
                        src={selectedHero.img} 
                        className={`absolute inset-0 w-full h-full object-cover pointer-events-none transition-opacity duration-500 ${showHint ? 'opacity-30' : 'opacity-0'}`}
                        alt="Guide"
                    />

                    {/* SLOTS */}
                    {boardPieces.map((pieceId, idx) => {
                        const isFilled = pieceId !== null;
                        const isError = errorSlot === idx;
                        
                        // BACKGROUND CALCULATION
                        // If piece is placed, show correct slice
                        // pieceId is the original index (0 to Total-1)
                        // Row = floor(pieceId / gridSize), Col = pieceId % gridSize
                        // bgSize = gridSize * 100%
                        // bgPos = (col / (gridSize-1)) * 100% (This is standard CSS sprite logic)
                        
                        let bgPos = '0% 0%';
                        if (isFilled) {
                            const row = Math.floor(pieceId! / gridSize);
                            const col = pieceId! % gridSize;
                            const xPerc = (col / (gridSize - 1)) * 100;
                            const yPerc = (row / (gridSize - 1)) * 100;
                            bgPos = `${xPerc}% ${yPerc}%`;
                        }

                        return (
                            <div
                                key={idx}
                                onClick={() => handleBoardClick(idx)}
                                className={`relative w-full h-full transition-all duration-200 overflow-hidden
                                    ${!isFilled ? 'bg-white/10 hover:bg-blue-500/20 cursor-pointer border border-white/10' : ''}
                                    ${isError ? 'bg-red-500/50 animate-pulse' : ''}
                                `}
                            >
                                {isFilled && (
                                    <motion.div 
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="w-full h-full"
                                        style={{
                                            backgroundImage: `url(${selectedHero.img})`,
                                            backgroundSize: `${gridSize * 100}% ${gridSize * 100}%`,
                                            backgroundPosition: bgPos,
                                            backgroundRepeat: 'no-repeat'
                                        }}
                                    />
                                )}
                                {!isFilled && selectedPieceId !== null && (
                                    <div className="absolute inset-0 border-2 border-transparent hover:border-blue-500/50 transition-colors"></div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* TRAY AREA (Scrollable) */}
            <div className="flex-1 min-h-0 md:flex-none md:h-full md:w-64 bg-[#0B0F1A] rounded-2xl md:rounded-3xl border border-white/10 flex flex-col">
                <div className="px-3 py-2 md:p-4 border-b border-white/10 flex justify-between items-center shrink-0">
                    <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">{t.pieces}</span>
                    <span className="bg-white/10 px-2 py-1 rounded text-xs font-bold text-white">{trayPieces.length}</span>
                </div>
                
                <div className="flex-1 overflow-y-auto overflow-x-hidden custom-scrollbar p-2">
                    <div className="grid grid-cols-6 md:grid-cols-4 gap-1.5 md:gap-2 w-full">
                        <AnimatePresence>
                            {trayPieces.map((pieceId) => {
                                const row = Math.floor(pieceId / gridSize);
                                const col = pieceId % gridSize;

                                // Calculation for Tray Item Preview
                                // We need the same logic as above but for a small div
                                const xPerc = (col / (gridSize - 1)) * 100;
                                const yPerc = (row / (gridSize - 1)) * 100;
                                const bgPos = `${xPerc}% ${yPerc}%`;

                                return (
                                    <motion.button
                                        key={pieceId}
                                        layout
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        exit={{ scale: 0 }}
                                        onClick={() => handleTrayClick(pieceId)}
                                        className={`relative aspect-square w-full rounded-lg overflow-hidden border-2 transition-all shadow-lg
                                            ${selectedPieceId === pieceId
                                                ? 'border-blue-500 ring-4 ring-blue-500/30 z-10 scale-110'
                                                : 'border-white/20 hover:border-white/60 opacity-90'}
                                        `}
                                        style={{
                                            backgroundImage: `url(${selectedHero.img})`,
                                            backgroundSize: `${gridSize * 100}% ${gridSize * 100}%`,
                                            backgroundPosition: bgPos,
                                            backgroundRepeat: 'no-repeat'
                                        }}
                                    />
                                );
                            })}
                        </AnimatePresence>
                    </div>
                </div>
            </div>

        </div>
    </div>
  );
}
