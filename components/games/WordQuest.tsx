/**
 * WORD QUEST — unscramble the word
 * =================================
 * Kid-friendly vocabulary game: tap the shuffled letters to rebuild the word
 * before the round ends. 8 words per run, Greek or English word pools.
 * Earns real credits via useEconomy (capped per day to prevent farming).
 */
import React, { useState, useCallback, useMemo, useRef, useEffect } from 'react';
import GameBackButton from './GameBackButton';
import { motion as m, AnimatePresence } from 'framer-motion';
import { BookA, Lightbulb, Trophy, Zap, Play, RotateCcw, Delete } from 'lucide-react';
import { useEconomy } from '../../context/EconomyContext';

const motion = m as any;
const AnimatePresenceAny = AnimatePresence as any;

interface WordQuestProps {
  lang: 'el' | 'en';
  onBack: () => void;
}

const WORDS: Record<'el' | 'en', Array<{ word: string; hint: string }>> = {
  el: [
    { word: 'ΗΛΙΟΣ', hint: '☀️ Λάμπει στον ουρανό' },
    { word: 'ΘΑΛΑΣΣΑ', hint: '🌊 Μπλε και αλμυρή' },
    { word: 'ΦΕΓΓΑΡΙ', hint: '🌙 Βγαίνει τη νύχτα' },
    { word: 'ΑΣΤΕΡΙ', hint: '⭐ Λάμπει τη νύχτα' },
    { word: 'ΒΙΒΛΙΟ', hint: '📚 Το διαβάζεις' },
    { word: 'ΣΧΟΛΕΙΟ', hint: '🏫 Εκεί μαθαίνεις' },
    { word: 'ΔΕΝΤΡΟ', hint: '🌳 Έχει φύλλα και κλαδιά' },
    { word: 'ΛΟΥΛΟΥΔΙ', hint: '🌸 Μυρίζει όμορφα' },
    { word: 'ΟΥΡΑΝΟΣ', hint: '☁️ Είναι από πάνω μας' },
    { word: 'ΜΟΥΣΙΚΗ', hint: '🎵 Την ακούς και χορεύεις' },
    { word: 'ΠΛΑΝΗΤΗΣ', hint: '🪐 Η Γη είναι ένας' },
    { word: 'ΡΟΜΠΟΤ', hint: '🤖 Έξυπνη μηχανή' },
    { word: 'ΕΠΙΣΤΗΜΗ', hint: '🔬 Πειράματα και γνώση' },
    { word: 'ΙΣΤΟΡΙΑ', hint: '🏛️ Τα παλιά χρόνια' },
    { word: 'ΚΑΡΔΙΑ', hint: '❤️ Χτυπάει στο στήθος' },
    { word: 'ΠΑΡΑΜΥΘΙ', hint: '🧚 Μια φορά κι έναν καιρό...' },
    { word: 'ΔΕΛΦΙΝΙ', hint: '🐬 Έξυπνο ζώο της θάλασσας' },
    { word: 'ΟΛΥΜΠΟΣ', hint: '⛰️ Το βουνό των θεών' },
    { word: 'ΑΘΗΝΑ', hint: '🏺 Πρωτεύουσα της Ελλάδας' },
    { word: 'ΦΙΛΟΣ', hint: '🤝 Παίζετε μαζί' },
  ],
  en: [
    { word: 'PLANET', hint: '🪐 Earth is one' },
    { word: 'OCEAN', hint: '🌊 Big blue water' },
    { word: 'ROBOT', hint: '🤖 Smart machine' },
    { word: 'SCIENCE', hint: '🔬 Experiments and knowledge' },
    { word: 'FRIEND', hint: '🤝 You play together' },
    { word: 'MUSIC', hint: '🎵 You dance to it' },
    { word: 'FLOWER', hint: '🌸 Smells nice' },
    { word: 'SCHOOL', hint: '🏫 Where you learn' },
    { word: 'STAR', hint: '⭐ Shines at night' },
    { word: 'MOON', hint: '🌙 Comes out at night' },
    { word: 'HISTORY', hint: '🏛️ The old times' },
    { word: 'DOLPHIN', hint: '🐬 Smart sea animal' },
    { word: 'RAINBOW', hint: '🌈 Seven colors' },
    { word: 'ROCKET', hint: '🚀 Flies to space' },
    { word: 'GARDEN', hint: '🌳 Plants grow here' },
    { word: 'CASTLE', hint: '🏰 Kings live here' },
    { word: 'WIZARD', hint: '🧙 Does magic' },
    { word: 'TREASURE', hint: '💎 Pirates look for it' },
    { word: 'JUNGLE', hint: '🦁 Wild green forest' },
    { word: 'BRIDGE', hint: '🌉 Crosses the river' },
  ],
};

const WORDS_PER_RUN = 8;
const REWARDS_PER_DAY = 2;

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function scrambleWord(word: string): string[] {
  let letters = shuffle(word.split(''));
  // Make sure the scramble isn't the original word
  let guard = 0;
  while (letters.join('') === word && guard++ < 10) letters = shuffle(word.split(''));
  return letters;
}

function rewardsLeftToday(): number {
  try {
    const raw = JSON.parse(localStorage.getItem('wb_wordquest_rewards') || '{}');
    const today = new Date().toISOString().slice(0, 10);
    return raw.date === today ? Math.max(0, REWARDS_PER_DAY - (raw.count || 0)) : REWARDS_PER_DAY;
  } catch { return REWARDS_PER_DAY; }
}

function consumeReward() {
  const today = new Date().toISOString().slice(0, 10);
  let raw: { date?: string; count?: number } = {};
  try { raw = JSON.parse(localStorage.getItem('wb_wordquest_rewards') || '{}'); } catch { /* fresh */ }
  const count = raw.date === today ? (raw.count || 0) + 1 : 1;
  localStorage.setItem('wb_wordquest_rewards', JSON.stringify({ date: today, count }));
}

export default function WordQuest({ lang, onBack }: WordQuestProps) {
  const { earnCredits, showNotification } = useEconomy();
  const [phase, setPhase] = useState<'start' | 'play' | 'end'>('start');
  const [runWords, setRunWords] = useState<Array<{ word: string; hint: string }>>([]);
  const [wordIdx, setWordIdx] = useState(0);
  const [pool, setPool] = useState<Array<{ letter: string; used: boolean }>>([]);
  const [built, setBuilt] = useState<number[]>([]); // indexes into pool
  const [solved, setSolved] = useState(0);
  const [hintsUsed, setHintsUsed] = useState(0);
  const [hintShown, setHintShown] = useState(false);
  const [flash, setFlash] = useState<'right' | 'wrong' | null>(null);
  const rewardedRef = useRef(false);

  const t = {
    title: 'WORD QUEST',
    tagline: lang === 'el' ? 'Βάλε τα γράμματα στη σειρά και βρες τη λέξη!' : 'Unscramble the letters to find the word!',
    play: lang === 'el' ? 'ΞΕΚΙΝΑ' : 'START',
    again: lang === 'el' ? 'ΞΑΝΑ' : 'PLAY AGAIN',
    back: lang === 'el' ? 'ΠΙΣΩ' : 'BACK',
    word: lang === 'el' ? 'ΛΕΞΗ' : 'WORD',
    hint: lang === 'el' ? 'ΒΟΗΘΕΙΑ' : 'HINT',
    solvedTitle: lang === 'el' ? 'ΤΑ ΚΑΤΑΦΕΡΕΣ!' : 'YOU DID IT!',
    summary: (s: number) => lang === 'el' ? `Βρήκες ${s}/${WORDS_PER_RUN} λέξεις!` : `You solved ${s}/${WORDS_PER_RUN} words!`,
    skip: lang === 'el' ? 'ΠΑΡΑΛΕΙΨΗ' : 'SKIP',
  };

  const current = runWords[wordIdx];

  const setupWord = useCallback((words: Array<{ word: string; hint: string }>, idx: number) => {
    const w = words[idx];
    setPool(scrambleWord(w.word).map(letter => ({ letter, used: false })));
    setBuilt([]);
    setHintShown(false);
  }, []);

  const start = useCallback(() => {
    const words = shuffle(WORDS[lang]).slice(0, WORDS_PER_RUN);
    rewardedRef.current = false;
    setRunWords(words);
    setWordIdx(0);
    setSolved(0);
    setHintsUsed(0);
    setupWord(words, 0);
    setPhase('play');
  }, [lang, setupWord]);

  const advance = useCallback((didSolve: boolean) => {
    setSolved(s => didSolve ? s + 1 : s);
    if (wordIdx + 1 >= WORDS_PER_RUN) {
      setPhase('end');
    } else {
      setWordIdx(i => i + 1);
      setupWord(runWords, wordIdx + 1);
    }
  }, [wordIdx, runWords, setupWord]);

  // Check the built word whenever all letters are placed
  useEffect(() => {
    if (phase !== 'play' || !current || built.length !== current.word.length) return;
    const guess = built.map(i => pool[i].letter).join('');
    if (guess === current.word) {
      setFlash('right');
      setTimeout(() => { setFlash(null); advance(true); }, 500);
    } else {
      setFlash('wrong');
      setTimeout(() => {
        setFlash(null);
        setBuilt([]);
        setPool(p => p.map(x => ({ ...x, used: false })));
      }, 450);
    }
  }, [built, current, phase, pool, advance]);

  // End-of-run reward (daily-capped)
  useEffect(() => {
    if (phase !== 'end' || rewardedRef.current) return;
    rewardedRef.current = true;
    const reward = solved >= 7 ? 3 : solved >= 5 ? 2 : solved >= 3 ? 1 : 0;
    if (reward > 0 && rewardsLeftToday() > 0) {
      consumeReward();
      earnCredits(reward, 'GAME_REWARD');
      showNotification('📝', lang === 'el' ? 'ΛΕΞΟΜΑΧΕ!' : 'WORD MASTER!', `+${reward} Credits ⚡`);
    }
  }, [phase, solved, earnCredits, showNotification, lang]);

  const tapLetter = useCallback((idx: number) => {
    if (phase !== 'play' || pool[idx].used || flash) return;
    setPool(p => p.map((x, i) => i === idx ? { ...x, used: true } : x));
    setBuilt(b => [...b, idx]);
  }, [phase, pool, flash]);

  const backspace = useCallback(() => {
    if (!built.length || flash) return;
    const last = built[built.length - 1];
    setBuilt(b => b.slice(0, -1));
    setPool(p => p.map((x, i) => i === last ? { ...x, used: false } : x));
  }, [built, flash]);

  const useHint = useCallback(() => {
    if (!current || hintShown) return;
    setHintShown(true);
    setHintsUsed(h => h + 1);
  }, [current, hintShown]);

  const progressDots = useMemo(() => Array.from({ length: WORDS_PER_RUN }, (_, i) => i), []);

  return (
    <div className="h-full flex flex-col items-center p-3 select-none overflow-hidden">
      {/* HEADER */}
      <div className="flex justify-between items-center w-full max-w-md mb-2 bg-black/50 backdrop-blur-md px-3 py-2 rounded-xl border border-white/10 z-10 shrink-0">
        <GameBackButton onClick={onBack} lang={lang} />
        <h2 className="text-xl font-[1000] text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-rose-500 italic tracking-tighter leading-none">
          {t.title}
        </h2>
        <div className="text-right">
          <p className="text-[8px] text-white/40 font-black uppercase tracking-widest">{t.word}</p>
          <p className="text-2xl font-[1000] text-white leading-none font-mono">{phase === 'play' ? `${wordIdx + 1}/${WORDS_PER_RUN}` : solved}</p>
        </div>
      </div>

      <div className="flex-1 w-full max-w-md flex flex-col items-center justify-center gap-5">
        <AnimatePresenceAny mode="wait">
          {phase === 'start' && (
            <motion.div key="start" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="text-center space-y-5">
              <div className="w-20 h-20 mx-auto bg-amber-500/20 border border-amber-500/30 rounded-3xl flex items-center justify-center">
                <BookA size={40} className="text-amber-400" />
              </div>
              <p className="text-white/60 font-bold text-sm">{t.tagline}</p>
              <button onClick={start} className="px-10 py-4 bg-gradient-to-r from-amber-600 to-rose-600 rounded-2xl text-white font-[1000] uppercase tracking-widest text-sm hover:scale-105 active:scale-95 transition-all flex items-center gap-2 mx-auto shadow-lg shadow-amber-500/20">
                <Play size={16} fill="currentColor" /> {t.play}
              </button>
            </motion.div>
          )}

          {phase === 'play' && current && (
            <motion.div key={`play-${wordIdx}`} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="w-full space-y-6">
              {/* Progress dots */}
              <div className="flex items-center justify-center gap-1.5">
                {progressDots.map(i => (
                  <div key={i} className={`h-1.5 rounded-full transition-all ${i < wordIdx ? 'w-4 bg-emerald-400' : i === wordIdx ? 'w-6 bg-amber-400' : 'w-1.5 bg-white/15'}`} />
                ))}
              </div>

              {/* Hint */}
              <div className="text-center min-h-[28px]">
                {hintShown ? (
                  <p className="text-amber-300/90 font-bold text-sm">{current.hint}</p>
                ) : (
                  <button onClick={useHint} className="text-white/40 hover:text-amber-300 font-black uppercase tracking-widest text-[10px] flex items-center gap-1 mx-auto transition-colors">
                    <Lightbulb size={12} /> {t.hint}
                  </button>
                )}
              </div>

              {/* Built word slots */}
              <div className={`flex items-center justify-center gap-1.5 flex-wrap min-h-[64px] py-3 px-2 rounded-2xl border-2 transition-colors duration-200 ${
                flash === 'right' ? 'bg-emerald-500/20 border-emerald-400/60'
                : flash === 'wrong' ? 'bg-red-500/20 border-red-400/60'
                : 'bg-white/5 border-white/10'
              }`}>
                {current.word.split('').map((_, i) => (
                  <div key={i} className="w-10 h-12 rounded-xl bg-black/40 border border-white/10 flex items-center justify-center">
                    <span className="text-2xl font-[1000] text-white">{built[i] !== undefined ? pool[built[i]].letter : ''}</span>
                  </div>
                ))}
                {built.length > 0 && !flash && (
                  <button onClick={backspace} className="w-10 h-12 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 hover:bg-red-500/20 active:scale-95 transition-all">
                    <Delete size={18} />
                  </button>
                )}
              </div>

              {/* Letter pool */}
              <div className="flex items-center justify-center gap-2 flex-wrap">
                {pool.map((x, i) => (
                  <button
                    key={i}
                    onClick={() => tapLetter(i)}
                    disabled={x.used}
                    className={`w-12 h-14 rounded-2xl border-2 text-2xl font-[1000] transition-all active:scale-90 ${
                      x.used
                        ? 'bg-white/[0.02] border-white/5 text-white/10'
                        : 'bg-amber-500/10 border-amber-500/30 text-amber-200 hover:bg-amber-500/25 hover:border-amber-400/60'
                    }`}
                  >
                    {x.letter}
                  </button>
                ))}
              </div>

              {/* Skip */}
              <button onClick={() => advance(false)} className="block mx-auto text-white/25 hover:text-white/50 font-black uppercase tracking-widest text-[10px] transition-colors">
                {t.skip} →
              </button>
            </motion.div>
          )}

          {phase === 'end' && (
            <motion.div key="end" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="text-center space-y-5">
              <p className="text-white/50 font-black uppercase tracking-widest text-sm">{t.solvedTitle}</p>
              <p className="text-7xl font-[1000] text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-rose-400 font-mono">{solved}/{WORDS_PER_RUN}</p>
              {solved === WORDS_PER_RUN && (
                <p className="text-amber-400 font-[1000] uppercase tracking-widest text-sm flex items-center justify-center gap-1.5 animate-pulse">
                  <Trophy size={15} /> PERFECT!
                </p>
              )}
              <p className="text-white/40 font-bold text-xs">{t.summary(solved)}</p>
              <div className="flex items-center justify-center gap-3">
                <button onClick={start} className="px-8 py-3.5 bg-gradient-to-r from-amber-600 to-rose-600 rounded-2xl text-white font-[1000] uppercase tracking-widest text-xs hover:scale-105 active:scale-95 transition-all flex items-center gap-2">
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
