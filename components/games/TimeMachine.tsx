/**
 * TIME MACHINE — history ordering game
 * ====================================
 * Kid-friendly history game: each round shows 3-4 historical events in random
 * order and the kid taps them in chronological order. Solving a round reveals
 * the real years as the educational payoff. 6 rounds per run, tied to the
 * Academy themes (great people + Greek heritage).
 * Earns real credits via useEconomy (capped per day via gameRewards helper).
 */
import React, { useState, useCallback, useMemo, useRef, useEffect } from 'react';
import { motion as m, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Hourglass, Trophy, Zap, Play, RotateCcw } from 'lucide-react';
import { useEconomy } from '../../context/EconomyContext';
import { grantGameReward } from './gameRewards';

const motion = m as any;
const AnimatePresenceAny = AnimatePresence as any;

interface TimeMachineProps {
  lang: 'el' | 'en';
  onBack: () => void;
}

interface TimeEvent {
  emoji: string;
  label: { el: string; en: string };
  year: number; // negative = BC
}

interface TimeRound {
  events: TimeEvent[];
}

const ROUNDS: TimeRound[] = [
  {
    events: [
      { emoji: '⛩️', label: { el: 'Αρχαία Ολυμπία', en: 'Ancient Olympia' }, year: -776 },
      { emoji: '🏃', label: { el: 'Πρώτοι σύγχρονοι Ολυμπιακοί', en: 'First modern Olympics' }, year: 1896 },
      { emoji: '🏟️', label: { el: 'Ολυμπιακοί Αθήνας', en: 'Athens Olympics' }, year: 2004 },
    ],
  },
  {
    events: [
      { emoji: '✈️', label: { el: 'Πρώτο αεροπλάνο', en: 'First airplane' }, year: 1903 },
      { emoji: '🌕', label: { el: 'Άνθρωπος στο φεγγάρι', en: 'Man on the Moon' }, year: 1969 },
      { emoji: '📱', label: { el: 'Πρώτο smartphone', en: 'First smartphone' }, year: 2007 },
    ],
  },
  {
    events: [
      { emoji: '📖', label: { el: 'Τυπογραφία Γουτεμβέργιου', en: 'Gutenberg printing press' }, year: 1450 },
      { emoji: '💻', label: { el: 'Πρώτος υπολογιστής', en: 'First computer' }, year: 1946 },
      { emoji: '🌐', label: { el: 'Το Internet', en: 'The Internet' }, year: 1991 },
    ],
  },
  {
    events: [
      { emoji: '🏛️', label: { el: 'Παρθενώνας', en: 'Parthenon' }, year: -447 },
      { emoji: '🏟️', label: { el: 'Κολοσσαίο', en: 'Colosseum' }, year: 80 },
      { emoji: '🗼', label: { el: 'Πύργος του Άιφελ', en: 'Eiffel Tower' }, year: 1889 },
    ],
  },
  {
    events: [
      { emoji: '🤔', label: { el: 'Σωκράτης', en: 'Socrates' }, year: -470 },
      { emoji: '🎨', label: { el: 'Λεονάρντο ντα Βίντσι', en: 'Leonardo da Vinci' }, year: 1452 },
      { emoji: '🧪', label: { el: 'Μαρία Κιουρί', en: 'Marie Curie' }, year: 1867 },
      { emoji: '🧠', label: { el: 'Άλμπερτ Αϊνστάιν', en: 'Albert Einstein' }, year: 1879 },
    ],
  },
  {
    events: [
      { emoji: '🛞', label: { el: 'Ο τροχός', en: 'The wheel' }, year: -3500 },
      { emoji: '📜', label: { el: 'Πρώτη γραφή', en: 'First writing' }, year: -3200 },
      { emoji: '💡', label: { el: 'Ηλεκτρικός λαμπτήρας', en: 'Light bulb' }, year: 1879 },
    ],
  },
  {
    events: [
      { emoji: '🚂', label: { el: 'Πρώτο τρένο', en: 'First train' }, year: 1825 },
      { emoji: '🚗', label: { el: 'Πρώτο αυτοκίνητο', en: 'First car' }, year: 1886 },
      { emoji: '🚀', label: { el: 'Πρώτος δορυφόρος στο διάστημα', en: 'First satellite in space' }, year: 1957 },
    ],
  },
  {
    events: [
      { emoji: '🏺', label: { el: 'Μινωικός πολιτισμός', en: 'Minoan civilization' }, year: -2000 },
      { emoji: '⚔️', label: { el: 'Μέγας Αλέξανδρος', en: 'Alexander the Great' }, year: -356 },
      { emoji: '🇬🇷', label: { el: 'Ελληνική Επανάσταση', en: 'Greek Revolution' }, year: 1821 },
    ],
  },
  {
    events: [
      { emoji: '📻', label: { el: 'Ραδιόφωνο', en: 'Radio' }, year: 1895 },
      { emoji: '📺', label: { el: 'Τηλεόραση', en: 'Television' }, year: 1927 },
      { emoji: '🎮', label: { el: 'Πρώτο βιντεοπαιχνίδι', en: 'First video game' }, year: 1972 },
    ],
  },
  {
    events: [
      { emoji: '🧭', label: { el: 'Ο Κολόμβος φτάνει στην Αμερική', en: 'Columbus reaches America' }, year: 1492 },
      { emoji: '🗽', label: { el: 'Άγαλμα της Ελευθερίας', en: 'Statue of Liberty' }, year: 1886 },
      { emoji: '🛰️', label: { el: 'Διεθνής Διαστημικός Σταθμός', en: 'International Space Station' }, year: 1998 },
    ],
  },
  {
    events: [
      { emoji: '📷', label: { el: 'Πρώτη φωτογραφία', en: 'First photograph' }, year: 1826 },
      { emoji: '☎️', label: { el: 'Τηλέφωνο', en: 'Telephone' }, year: 1876 },
      { emoji: '🎬', label: { el: 'Κινηματογράφος', en: 'Cinema' }, year: 1895 },
    ],
  },
  {
    events: [
      { emoji: '🏛️', label: { el: 'Δημοκρατία στην Αθήνα', en: 'Democracy in Athens' }, year: -508 },
      { emoji: '🖼️', label: { el: 'Αναγέννηση', en: 'Renaissance' }, year: 1400 },
      { emoji: '🤖', label: { el: 'Εποχή τεχνητής νοημοσύνης', en: 'Age of AI' }, year: 2022 },
    ],
  },
];

const ROUNDS_PER_RUN = 6;

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function formatYear(year: number, lang: 'el' | 'en'): string {
  if (year < 0) return `${-year} ${lang === 'el' ? 'π.Χ.' : 'BC'}`;
  return `${year}`;
}

export default function TimeMachine({ lang, onBack }: TimeMachineProps) {
  const { earnCredits, showNotification } = useEconomy();
  const [phase, setPhase] = useState<'start' | 'play' | 'end'>('start');
  const [runRounds, setRunRounds] = useState<TimeRound[]>([]);
  const [roundIdx, setRoundIdx] = useState(0);
  const [displayOrder, setDisplayOrder] = useState<number[]>([]); // shuffled indexes into round.events
  const [picked, setPicked] = useState<number[]>([]); // event indexes in tap order
  const [wrongIdx, setWrongIdx] = useState<number | null>(null);
  const [failedOnce, setFailedOnce] = useState(false);
  const [roundState, setRoundState] = useState<'guess' | 'solved' | 'failed'>('guess');
  const [solved, setSolved] = useState(0);
  const rewardedRef = useRef(false);

  const t = {
    title: 'TIME MACHINE',
    tagline: lang === 'el'
      ? 'Πάτα τα γεγονότα με τη σωστή χρονολογική σειρά — από το πιο παλιό στο πιο νέο!'
      : 'Tap the events in the right order — from oldest to newest!',
    play: lang === 'el' ? 'ΞΕΚΙΝΑ' : 'START',
    again: lang === 'el' ? 'ΞΑΝΑ' : 'PLAY AGAIN',
    back: lang === 'el' ? 'ΠΙΣΩ' : 'BACK',
    round: lang === 'el' ? 'ΓΥΡΟΣ' : 'ROUND',
    instruction: lang === 'el' ? 'Ποιο έγινε πρώτο; Πάτα με τη σειρά!' : 'What happened first? Tap in order!',
    retry: lang === 'el' ? 'Δοκίμασε ξανά — έχεις άλλη μία ευκαιρία!' : 'Try again — you have one more chance!',
    solvedMsg: lang === 'el' ? 'ΣΩΣΤΑ! Δες τις χρονιές:' : 'CORRECT! Check the years:',
    failedMsg: lang === 'el' ? 'Η σωστή σειρά ήταν:' : 'The correct order was:',
    endTitle: lang === 'el' ? 'ΤΑΞΙΔΙ ΣΤΟΝ ΧΡΟΝΟ!' : 'TIME TRAVELER!',
    summary: (s: number) => lang === 'el' ? `Έλυσες ${s}/${ROUNDS_PER_RUN} γύρους!` : `You solved ${s}/${ROUNDS_PER_RUN} rounds!`,
  };

  const currentRound = runRounds[roundIdx];

  const setupRound = useCallback((rounds: TimeRound[], idx: number) => {
    const r = rounds[idx];
    setDisplayOrder(shuffle(r.events.map((_, i) => i)));
    setPicked([]);
    setWrongIdx(null);
    setFailedOnce(false);
    setRoundState('guess');
  }, []);

  const start = useCallback(() => {
    const rounds = shuffle(ROUNDS).slice(0, ROUNDS_PER_RUN);
    rewardedRef.current = false;
    setRunRounds(rounds);
    setRoundIdx(0);
    setSolved(0);
    setupRound(rounds, 0);
    setPhase('play');
  }, [setupRound]);

  const advance = useCallback(() => {
    if (roundIdx + 1 >= ROUNDS_PER_RUN) {
      setPhase('end');
    } else {
      setRoundIdx(i => i + 1);
      setupRound(runRounds, roundIdx + 1);
    }
  }, [roundIdx, runRounds, setupRound]);

  const tapEvent = useCallback((eventIdx: number) => {
    if (phase !== 'play' || !currentRound || roundState !== 'guess' || wrongIdx !== null) return;
    if (picked.includes(eventIdx)) return;
    // The correct next tap is the unpicked event with the smallest year
    const unpicked = currentRound.events
      .map((e, i) => ({ year: e.year, i }))
      .filter(x => !picked.includes(x.i));
    const correctNext = unpicked.reduce((min, x) => (x.year < min.year ? x : min), unpicked[0]).i;

    if (eventIdx === correctNext) {
      const newPicked = [...picked, eventIdx];
      setPicked(newPicked);
      if (newPicked.length === currentRound.events.length) {
        // Round solved — reveal the years as the educational payoff
        setRoundState('solved');
        setSolved(s => s + 1);
        setTimeout(advance, 2200);
      }
    } else {
      setWrongIdx(eventIdx);
      setTimeout(() => {
        setWrongIdx(null);
        if (failedOnce) {
          // Second fail: briefly show the correct order, no point
          setRoundState('failed');
          setTimeout(advance, 2800);
        } else {
          setFailedOnce(true);
          setPicked([]);
        }
      }, 500);
    }
  }, [phase, currentRound, roundState, wrongIdx, picked, failedOnce, advance]);

  // End-of-run reward (daily-capped via shared helper)
  useEffect(() => {
    if (phase !== 'end' || rewardedRef.current) return;
    rewardedRef.current = true;
    const reward = solved >= 6 ? 3 : solved >= 4 ? 2 : solved >= 2 ? 1 : 0;
    grantGameReward('time', reward, earnCredits, showNotification, lang);
  }, [phase, solved, earnCredits, showNotification, lang]);

  // Chronological rank of each event (used in the "failed" reveal)
  const chronoRank = useMemo(() => {
    if (!currentRound) return new Map<number, number>();
    const sorted = currentRound.events
      .map((e, i) => ({ year: e.year, i }))
      .sort((a, b) => a.year - b.year);
    return new Map(sorted.map((x, rank) => [x.i, rank + 1]));
  }, [currentRound]);

  const progressDots = useMemo(() => Array.from({ length: ROUNDS_PER_RUN }, (_, i) => i), []);

  return (
    <div className="h-full flex flex-col items-center p-3 select-none overflow-hidden">
      {/* HEADER */}
      <div className="flex justify-between items-center w-full max-w-md mb-2 bg-black/50 backdrop-blur-md px-3 py-2 rounded-xl border border-white/10 z-10 shrink-0">
        <button onClick={onBack} className="text-white/50 hover:text-white font-bold uppercase text-xs flex items-center gap-1.5 py-1 px-2">
          <ArrowLeft size={14} /> {t.back}
        </button>
        <h2 className="text-xl font-[1000] text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-500 italic tracking-tighter leading-none">
          {t.title}
        </h2>
        <div className="text-right">
          <p className="text-[8px] text-white/40 font-black uppercase tracking-widest">{t.round}</p>
          <p className="text-2xl font-[1000] text-white leading-none font-mono">{phase === 'play' ? `${roundIdx + 1}/${ROUNDS_PER_RUN}` : solved}</p>
        </div>
      </div>

      <div className="flex-1 w-full max-w-md flex flex-col items-center justify-center gap-5">
        <AnimatePresenceAny mode="wait">
          {phase === 'start' && (
            <motion.div key="start" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="text-center space-y-5">
              <div className="w-20 h-20 mx-auto bg-sky-500/20 border border-sky-500/30 rounded-3xl flex items-center justify-center">
                <Hourglass size={40} className="text-sky-400" />
              </div>
              <p className="text-white/60 font-bold text-sm">{t.tagline}</p>
              <button onClick={start} className="px-10 py-4 bg-gradient-to-r from-sky-600 to-indigo-600 rounded-2xl text-white font-[1000] uppercase tracking-widest text-sm hover:scale-105 active:scale-95 transition-all flex items-center gap-2 mx-auto shadow-lg shadow-sky-500/20">
                <Play size={16} fill="currentColor" /> {t.play}
              </button>
            </motion.div>
          )}

          {phase === 'play' && currentRound && (
            <motion.div key={`play-${roundIdx}`} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="w-full space-y-5">
              {/* Progress dots */}
              <div className="flex items-center justify-center gap-1.5">
                {progressDots.map(i => (
                  <div key={i} className={`h-1.5 rounded-full transition-all ${i < roundIdx ? 'w-4 bg-emerald-400' : i === roundIdx ? 'w-6 bg-sky-400' : 'w-1.5 bg-white/15'}`} />
                ))}
              </div>

              {/* Status line */}
              <div className="text-center min-h-[24px]">
                {roundState === 'solved' ? (
                  <p className="text-emerald-300 font-black uppercase tracking-widest text-xs">{t.solvedMsg}</p>
                ) : roundState === 'failed' ? (
                  <p className="text-amber-300 font-black uppercase tracking-widest text-xs">{t.failedMsg}</p>
                ) : failedOnce ? (
                  <p className="text-amber-300/90 font-bold text-xs">{t.retry}</p>
                ) : (
                  <p className="text-white/40 font-bold text-xs">{t.instruction}</p>
                )}
              </div>

              {/* Event cards */}
              <div className="grid grid-cols-1 gap-2.5">
                {displayOrder.map(eventIdx => {
                  const ev = currentRound.events[eventIdx];
                  const pickPos = picked.indexOf(eventIdx);
                  const isPicked = pickPos !== -1;
                  const isWrong = wrongIdx === eventIdx;
                  const revealAll = roundState !== 'guess';
                  return (
                    <button
                      key={eventIdx}
                      onClick={() => tapEvent(eventIdx)}
                      disabled={roundState !== 'guess' || isPicked}
                      className={`relative w-full flex items-center gap-3 px-4 py-3 rounded-2xl border-2 text-left transition-all active:scale-[0.98] ${
                        isWrong ? 'bg-red-500/20 border-red-400/70 animate-pulse'
                        : roundState === 'failed' ? 'bg-amber-500/10 border-amber-400/40'
                        : isPicked ? 'bg-emerald-500/15 border-emerald-400/60'
                        : 'bg-white/5 border-white/10 hover:bg-sky-500/10 hover:border-sky-400/40'
                      }`}
                    >
                      <span className="text-3xl shrink-0">{ev.emoji}</span>
                      <span className="flex-1 min-w-0">
                        <span className="block text-white font-[1000] text-sm leading-tight">{ev.label[lang]}</span>
                        {revealAll && (
                          <span className={`block font-mono font-bold text-xs mt-0.5 ${roundState === 'solved' ? 'text-emerald-300' : 'text-amber-300'}`}>
                            {formatYear(ev.year, lang)}
                          </span>
                        )}
                      </span>
                      {(isPicked || roundState === 'failed') && (
                        <span className={`w-8 h-8 shrink-0 rounded-xl flex items-center justify-center font-[1000] text-sm ${
                          roundState === 'failed' && !isPicked
                            ? 'bg-amber-500/25 text-amber-200 border border-amber-400/50'
                            : 'bg-emerald-500/25 text-emerald-200 border border-emerald-400/50'
                        }`}>
                          {roundState === 'failed' ? chronoRank.get(eventIdx) : pickPos + 1}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}

          {phase === 'end' && (
            <motion.div key="end" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="text-center space-y-5">
              <p className="text-white/50 font-black uppercase tracking-widest text-sm">{t.endTitle}</p>
              <p className="text-7xl font-[1000] text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-indigo-400 font-mono">{solved}/{ROUNDS_PER_RUN}</p>
              {solved === ROUNDS_PER_RUN && (
                <p className="text-sky-400 font-[1000] uppercase tracking-widest text-sm flex items-center justify-center gap-1.5 animate-pulse">
                  <Trophy size={15} /> PERFECT!
                </p>
              )}
              <p className="text-white/40 font-bold text-xs">{t.summary(solved)}</p>
              <div className="flex items-center justify-center gap-3">
                <button onClick={start} className="px-8 py-3.5 bg-gradient-to-r from-sky-600 to-indigo-600 rounded-2xl text-white font-[1000] uppercase tracking-widest text-xs hover:scale-105 active:scale-95 transition-all flex items-center gap-2">
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
