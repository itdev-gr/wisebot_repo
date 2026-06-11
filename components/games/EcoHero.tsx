/**
 * ECO HERO — 60-second recycling sorter
 * ======================================
 * Trash items appear one at a time and the kid taps the right bin:
 * paper (blue), plastic/metal (yellow), glass (green), organic/special (brown).
 * Wrong bin shakes red and teaches the correct bin. Streak bonus like MathRush.
 * Earns real credits via the shared game-reward helper.
 */
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion as m, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Recycle, Timer, Flame, Trophy, Zap, Play, RotateCcw } from 'lucide-react';
import { useEconomy } from '../../context/EconomyContext';
import { grantGameReward } from './gameRewards';

const motion = m as any;
const AnimatePresenceAny = AnimatePresence as any;

interface EcoHeroProps {
  lang: 'el' | 'en';
  onBack: () => void;
}

const GAME_SECONDS = 60;

type BinKey = 'paper' | 'plastic' | 'glass' | 'organic';

interface BiText {
  el: string;
  en: string;
}

interface EcoItem {
  emoji: string;
  name: BiText;
  bin: BinKey;
  /** Extra educational note (e.g. batteries need a special bin) */
  note?: BiText;
}

interface Bin {
  key: BinKey;
  emoji: string;
  label: BiText;
  classes: string;
}

const BINS: Bin[] = [
  { key: 'paper', emoji: '📦', label: { el: 'ΧΑΡΤΙ', en: 'PAPER' }, classes: 'bg-blue-500/15 border-blue-400/40 hover:bg-blue-500/30 text-blue-300' },
  { key: 'plastic', emoji: '♻️', label: { el: 'ΠΛΑΣΤΙΚΟ/ΜΕΤΑΛΛΟ', en: 'PLASTIC/METAL' }, classes: 'bg-yellow-500/15 border-yellow-400/40 hover:bg-yellow-500/30 text-yellow-300' },
  { key: 'glass', emoji: '🫙', label: { el: 'ΓΥΑΛΙ', en: 'GLASS' }, classes: 'bg-green-500/15 border-green-400/40 hover:bg-green-500/30 text-green-300' },
  { key: 'organic', emoji: '🌱', label: { el: 'ΟΡΓΑΝΙΚΑ/ΕΙΔΙΚΑ', en: 'ORGANIC/SPECIAL' }, classes: 'bg-amber-700/20 border-amber-600/40 hover:bg-amber-700/40 text-amber-400' },
];

const BATTERY_NOTE: BiText = {
  el: 'Οι μπαταρίες πάνε σε ειδικό κάδο ανακύκλωσης!',
  en: 'Batteries go to a special recycling bin!',
};

const ITEMS: EcoItem[] = [
  // ---- Paper ----
  { emoji: '📰', name: { el: 'εφημερίδα', en: 'newspaper' }, bin: 'paper' },
  { emoji: '📦', name: { el: 'χαρτόκουτο', en: 'cardboard box' }, bin: 'paper' },
  { emoji: '📖', name: { el: 'παλιό περιοδικό', en: 'old magazine' }, bin: 'paper' },
  { emoji: '✉️', name: { el: 'χάρτινος φάκελος', en: 'paper envelope' }, bin: 'paper' },
  { emoji: '🗞️', name: { el: 'διαφημιστικό φυλλάδιο', en: 'flyer' }, bin: 'paper' },
  { emoji: '📄', name: { el: 'χαρτί εκτύπωσης', en: 'printer paper' }, bin: 'paper' },
  // ---- Plastic / Metal ----
  { emoji: '🥫', name: { el: 'κονσέρβα', en: 'tin can' }, bin: 'plastic' },
  { emoji: '🥤', name: { el: 'πλαστικό ποτήρι', en: 'plastic cup' }, bin: 'plastic' },
  { emoji: '🧴', name: { el: 'μπουκάλι σαμπουάν', en: 'shampoo bottle' }, bin: 'plastic' },
  { emoji: '🛍️', name: { el: 'πλαστική σακούλα', en: 'plastic bag' }, bin: 'plastic' },
  { emoji: '🥄', name: { el: 'πλαστικό κουτάλι', en: 'plastic spoon' }, bin: 'plastic' },
  { emoji: '🪣', name: { el: 'πλαστικός κουβάς', en: 'plastic bucket' }, bin: 'plastic' },
  // ---- Glass ----
  { emoji: '🍾', name: { el: 'γυάλινο μπουκάλι', en: 'glass bottle' }, bin: 'glass' },
  { emoji: '🫙', name: { el: 'γυάλινο βάζο', en: 'glass jar' }, bin: 'glass' },
  { emoji: '🍷', name: { el: 'σπασμένο ποτήρι κρασιού', en: 'broken wine glass' }, bin: 'glass' },
  { emoji: '🍶', name: { el: 'γυάλινο μπουκαλάκι', en: 'small glass bottle' }, bin: 'glass' },
  { emoji: '🥃', name: { el: 'γυάλινο ποτήρι', en: 'glass tumbler' }, bin: 'glass' },
  { emoji: '🍼', name: { el: 'γυάλινο μπιμπερό', en: 'glass baby bottle' }, bin: 'glass' },
  // ---- Organic / Special ----
  { emoji: '🍌', name: { el: 'φλούδα μπανάνας', en: 'banana peel' }, bin: 'organic' },
  { emoji: '🍎', name: { el: 'κοτσάνι μήλου', en: 'apple core' }, bin: 'organic' },
  { emoji: '🥚', name: { el: 'τσόφλια αυγών', en: 'eggshells' }, bin: 'organic' },
  { emoji: '🍂', name: { el: 'ξερά φύλλα', en: 'dry leaves' }, bin: 'organic' },
  { emoji: '🔋', name: { el: 'μπαταρία', en: 'battery' }, bin: 'organic', note: BATTERY_NOTE },
  { emoji: '🥬', name: { el: 'φύλλα μαρουλιού', en: 'lettuce leaves' }, bin: 'organic' },
];

function pickItem(previous: EcoItem | null): EcoItem {
  let item = ITEMS[Math.floor(Math.random() * ITEMS.length)];
  // Avoid showing the exact same item twice in a row
  while (previous && item === previous) {
    item = ITEMS[Math.floor(Math.random() * ITEMS.length)];
  }
  return item;
}

export default function EcoHero({ lang, onBack }: EcoHeroProps) {
  const { earnCredits, showNotification } = useEconomy();
  const [phase, setPhase] = useState<'start' | 'play' | 'end'>('start');
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [timeLeft, setTimeLeft] = useState(GAME_SECONDS);
  const [item, setItem] = useState<EcoItem>(() => pickItem(null));
  const [flash, setFlash] = useState<'right' | 'wrong' | null>(null);
  const [correction, setCorrection] = useState<Bin | null>(null);
  const [locked, setLocked] = useState(false);
  const [best, setBest] = useState<number>(() => parseInt(localStorage.getItem('wb_eco_best') || '0'));
  const rewardedRef = useRef(false);

  const t = {
    title: 'ECO HERO',
    tagline: lang === 'el' ? 'Πέτα κάθε σκουπίδι στον σωστό κάδο σε 60"!' : 'Sort every item into the right bin in 60s!',
    score: lang === 'el' ? 'ΣΚΟΡ' : 'SCORE',
    best: lang === 'el' ? 'ΡΕΚΟΡ' : 'BEST',
    combo: 'COMBO',
    play: lang === 'el' ? 'ΞΕΚΙΝΑ' : 'START',
    again: lang === 'el' ? 'ΞΑΝΑ' : 'PLAY AGAIN',
    back: lang === 'el' ? 'ΠΙΣΩ' : 'BACK',
    timeUp: lang === 'el' ? 'ΤΕΛΟΣ ΧΡΟΝΟΥ!' : "TIME'S UP!",
    newBest: lang === 'el' ? 'ΝΕΟ ΡΕΚΟΡ!' : 'NEW BEST!',
    correctBin: lang === 'el' ? 'Σωστός κάδος' : 'Correct bin',
  };

  // Countdown
  useEffect(() => {
    if (phase !== 'play') return;
    if (timeLeft <= 0) { setPhase('end'); return; }
    const id = setTimeout(() => setTimeLeft(v => v - 1), 1000);
    return () => clearTimeout(id);
  }, [phase, timeLeft]);

  // End-of-game: best score + credit reward (daily-capped via shared helper)
  useEffect(() => {
    if (phase !== 'end' || rewardedRef.current) return;
    rewardedRef.current = true;
    if (score > best) {
      setBest(score);
      localStorage.setItem('wb_eco_best', String(score));
    }
    const reward = score >= 15 ? 3 : score >= 8 ? 2 : score >= 4 ? 1 : 0;
    grantGameReward('eco', reward, earnCredits, showNotification, lang);
  }, [phase, score, best, earnCredits, showNotification, lang]);

  const start = useCallback(() => {
    rewardedRef.current = false;
    setScore(0); setCombo(0); setTimeLeft(GAME_SECONDS);
    setItem(pickItem(null));
    setFlash(null); setCorrection(null); setLocked(false);
    setPhase('play');
  }, []);

  const sort = useCallback((binKey: BinKey) => {
    if (phase !== 'play' || locked) return;
    if (binKey === item.bin) {
      const bonus = combo >= 6 ? 2 : 1; // hot streak = double points
      setScore(s => s + bonus);
      setCombo(c => c + 1);
      setFlash('right');
      setLocked(true);
      setTimeout(() => {
        setFlash(null);
        setItem(prev => pickItem(prev));
        setLocked(false);
      }, 250);
    } else {
      setCombo(0);
      setFlash('wrong');
      setCorrection(BINS.find(b => b.key === item.bin) || null);
      setLocked(true);
      setTimeout(() => {
        setFlash(null);
        setCorrection(null);
        setItem(prev => pickItem(prev));
        setLocked(false);
      }, 1300);
    }
  }, [phase, locked, item, combo]);

  return (
    <div className="h-full flex flex-col items-center p-3 select-none overflow-hidden">
      {/* HEADER */}
      <div className="flex justify-between items-center w-full max-w-md mb-2 bg-black/50 backdrop-blur-md px-3 py-2 rounded-xl border border-white/10 z-10 shrink-0">
        <button onClick={onBack} className="text-white/50 hover:text-white font-bold uppercase text-xs flex items-center gap-1.5 py-1 px-2">
          <ArrowLeft size={14} /> {t.back}
        </button>
        <h2 className="text-xl font-[1000] text-transparent bg-clip-text bg-gradient-to-r from-lime-300 via-green-400 to-emerald-500 italic tracking-tighter leading-none">
          {t.title}
        </h2>
        <div className="text-right">
          <p className="text-[8px] text-white/40 font-black uppercase tracking-widest">{t.score}</p>
          <p className="text-2xl font-[1000] text-white leading-none font-mono">{score}</p>
        </div>
      </div>

      <div className="flex-1 w-full max-w-md flex flex-col items-center justify-center gap-4">
        <AnimatePresenceAny mode="wait">
          {phase === 'start' && (
            <motion.div key="start" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="text-center space-y-5">
              <div className="w-20 h-20 mx-auto bg-green-500/20 border border-green-500/30 rounded-3xl flex items-center justify-center">
                <Recycle size={40} className="text-green-400" />
              </div>
              <p className="text-white/60 font-bold text-sm">{t.tagline}</p>
              {best > 0 && (
                <p className="text-amber-400/80 font-black text-xs uppercase tracking-widest flex items-center justify-center gap-1.5">
                  <Trophy size={13} /> {t.best}: {best}
                </p>
              )}
              <button onClick={start} className="px-10 py-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl text-white font-[1000] uppercase tracking-widest text-sm hover:scale-105 active:scale-95 transition-all flex items-center gap-2 mx-auto shadow-lg shadow-green-500/20">
                <Play size={16} fill="currentColor" /> {t.play}
              </button>
            </motion.div>
          )}

          {phase === 'play' && (
            <motion.div key="play" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full space-y-4">
              {/* Timer + combo */}
              <div className="flex items-center justify-between px-1">
                <div className={`flex items-center gap-1.5 font-mono font-[1000] text-lg ${timeLeft <= 10 ? 'text-red-400 animate-pulse' : 'text-white/70'}`}>
                  <Timer size={16} /> {timeLeft}s
                </div>
                {combo >= 3 && (
                  <div className={`flex items-center gap-1 px-2.5 py-1 rounded-lg border font-[1000] text-xs uppercase tracking-widest animate-pulse ${combo >= 6 ? 'bg-red-500/20 text-red-300 border-red-500/30' : 'bg-amber-500/20 text-amber-300 border-amber-500/30'}`}>
                    <Flame size={12} /> {t.combo} ×{combo}{combo >= 6 ? ' (2x!)' : ''}
                  </div>
                )}
              </div>
              {/* Time bar */}
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <div className={`h-full rounded-full transition-all duration-1000 ease-linear ${timeLeft <= 10 ? 'bg-red-500' : 'bg-gradient-to-r from-lime-400 to-emerald-400'}`} style={{ width: `${(timeLeft / GAME_SECONDS) * 100}%` }} />
              </div>

              {/* Item card */}
              <motion.div
                key={`${item.emoji}-${score}-${combo}`}
                initial={{ opacity: 0, y: -8 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  x: flash === 'wrong' ? [0, -10, 10, -8, 8, -4, 0] : 0,
                }}
                transition={{ x: { duration: 0.4 } }}
                className={`text-center py-6 px-4 rounded-3xl border-2 transition-colors duration-200 ${
                  flash === 'right' ? 'bg-emerald-500/20 border-emerald-400/60'
                  : flash === 'wrong' ? 'bg-red-500/20 border-red-400/60'
                  : 'bg-white/5 border-white/10'
                }`}
              >
                <p className="text-7xl leading-none mb-2">{item.emoji}</p>
                <p className="text-lg font-[1000] text-white uppercase tracking-tight">{item.name[lang]}</p>
                {correction && (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-2 text-sm font-black text-red-300 uppercase tracking-wide">
                    {t.correctBin}: {correction.label[lang]} {correction.emoji}
                  </motion.p>
                )}
                {correction && item.note && (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-1 text-xs font-bold text-amber-300">
                    {item.note[lang]}
                  </motion.p>
                )}
              </motion.div>

              {/* Bins */}
              <div className="grid grid-cols-2 gap-3">
                {BINS.map(bin => (
                  <button
                    key={bin.key}
                    onClick={() => sort(bin.key)}
                    className={`py-4 px-2 border-2 rounded-2xl font-[1000] uppercase tracking-tight text-xs active:scale-95 transition-all flex flex-col items-center gap-1 ${bin.classes}`}
                  >
                    <span className="text-3xl leading-none">{bin.emoji}</span>
                    {bin.label[lang]}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {phase === 'end' && (
            <motion.div key="end" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="text-center space-y-5">
              <p className="text-white/50 font-black uppercase tracking-widest text-sm">{t.timeUp}</p>
              <p className="text-7xl font-[1000] text-transparent bg-clip-text bg-gradient-to-r from-lime-300 to-emerald-400 font-mono">{score}</p>
              {score >= best && score > 0 && (
                <p className="text-amber-400 font-[1000] uppercase tracking-widest text-sm flex items-center justify-center gap-1.5 animate-pulse">
                  <Trophy size={15} /> {t.newBest}
                </p>
              )}
              <div className="flex items-center justify-center gap-3">
                <button onClick={start} className="px-8 py-3.5 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl text-white font-[1000] uppercase tracking-widest text-xs hover:scale-105 active:scale-95 transition-all flex items-center gap-2">
                  <RotateCcw size={14} /> {t.again}
                </button>
                <button onClick={onBack} className="px-8 py-3.5 bg-white/5 border border-white/10 rounded-2xl text-white/60 font-[1000] uppercase tracking-widest text-xs hover:bg-white/10 transition-all">
                  {t.back}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresenceAny>
      </div>

      {/* Reward hint */}
      <p className="text-white/25 text-[10px] font-bold uppercase tracking-widest pb-2 flex items-center gap-1">
        <Zap size={10} /> {lang === 'el' ? 'Κέρδισε έως 3 credits ανά παιχνίδι' : 'Earn up to 3 credits per game'}
      </p>
    </div>
  );
}
