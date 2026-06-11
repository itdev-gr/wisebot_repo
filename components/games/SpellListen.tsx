/**
 * SPELL & LISTEN — hear the word, type it
 * =======================================
 * Kid-friendly spelling game: a big speaker button speaks the word with the
 * browser's SpeechSynthesis API (free, instant, no backend) and the kid types
 * what they heard. Greek comparison is accent-insensitive. 8 words per run.
 * Earns real credits via useEconomy (capped per day via gameRewards helper).
 */
import React, { useState, useCallback, useMemo, useRef, useEffect } from 'react';
import { motion as m, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Volume2, Lightbulb, Trophy, Zap, Play, RotateCcw, Check } from 'lucide-react';
import { useEconomy } from '../../context/EconomyContext';
import { grantGameReward } from './gameRewards';

const motion = m as any;
const AnimatePresenceAny = AnimatePresence as any;

interface SpellListenProps {
  lang: 'el' | 'en';
  onBack: () => void;
}

const WORDS: Record<'el' | 'en', string[]> = {
  el: [
    'ΚΑΛΟΚΑΙΡΙ', 'ΠΟΔΗΛΑΤΟ', 'ΘΗΣΑΥΡΟΣ', 'ΔΙΑΣΤΗΜΑ', 'ΕΛΕΦΑΝΤΑΣ',
    'ΧΕΙΜΩΝΑΣ', 'ΠΑΓΩΤΟ', 'ΒΟΥΝΟ', 'ΠΟΤΑΜΙ', 'ΑΕΡΟΠΛΑΝΟ',
    'ΚΑΡΑΒΙ', 'ΠΕΤΑΛΟΥΔΑ', 'ΣΟΚΟΛΑΤΑ', 'ΠΟΡΤΟΚΑΛΙ', 'ΜΟΛΥΒΙ',
    'ΤΕΤΡΑΔΙΟ', 'ΑΥΤΟΚΙΝΗΤΟ', 'ΦΑΝΑΡΙ', 'ΓΑΛΑΞΙΑΣ', 'ΚΗΠΟΣ',
  ],
  en: [
    'BICYCLE', 'SUMMER', 'TREASURE', 'ELEPHANT', 'GALAXY',
    'WINTER', 'MOUNTAIN', 'RIVER', 'BUTTERFLY', 'CHOCOLATE',
    'ORANGE', 'PENCIL', 'NOTEBOOK', 'AIRPLANE', 'LANTERN',
    'PIRATE', 'ISLAND', 'THUNDER', 'WINDOW', 'MORNING',
  ],
};

const WORDS_PER_RUN = 8;

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Uppercase + strip Greek tones/diacritics so ΚΑΛΟΚΑΊΡΙ === ΚΑΛΟΚΑΙΡΙ */
function normalizeWord(s: string): string {
  return s.trim().toUpperCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
}

export default function SpellListen({ lang, onBack }: SpellListenProps) {
  const { earnCredits, showNotification } = useEconomy();
  const [phase, setPhase] = useState<'start' | 'play' | 'end'>('start');
  const [runWords, setRunWords] = useState<string[]>([]);
  const [wordIdx, setWordIdx] = useState(0);
  const [input, setInput] = useState('');
  const [solved, setSolved] = useState(0);
  const [failedOnce, setFailedOnce] = useState(false);
  const [hintShown, setHintShown] = useState(false);
  const [shake, setShake] = useState(false);
  const [flash, setFlash] = useState<'right' | 'reveal' | null>(null);
  const rewardedRef = useRef(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const t = {
    title: 'SPELL & LISTEN',
    tagline: lang === 'el' ? 'Άκου τη λέξη και γράψε τη σωστά!' : 'Hear the word and spell it right!',
    play: lang === 'el' ? 'ΞΕΚΙΝΑ' : 'START',
    again: lang === 'el' ? 'ΞΑΝΑ' : 'PLAY AGAIN',
    back: lang === 'el' ? 'ΠΙΣΩ' : 'BACK',
    word: lang === 'el' ? 'ΛΕΞΗ' : 'WORD',
    listen: lang === 'el' ? 'ΑΚΟΥ ΤΗ ΛΕΞΗ' : 'HEAR THE WORD',
    check: lang === 'el' ? 'ΕΛΕΓΧΟΣ' : 'CHECK',
    hint: lang === 'el' ? 'ΒΟΗΘΕΙΑ' : 'HINT',
    placeholder: lang === 'el' ? 'ΓΡΑΨΕ ΤΗ ΛΕΞΗ...' : 'TYPE THE WORD...',
    retry: lang === 'el' ? 'Σχεδόν! Άκου ξανά και ξαναπροσπάθησε!' : 'Almost! Listen again and retry!',
    revealMsg: lang === 'el' ? 'Η λέξη ήταν:' : 'The word was:',
    endTitle: lang === 'el' ? 'ΤΑ ΚΑΤΑΦΕΡΕΣ!' : 'YOU DID IT!',
    summary: (s: number) => lang === 'el' ? `Έγραψες σωστά ${s}/${WORDS_PER_RUN} λέξεις!` : `You spelled ${s}/${WORDS_PER_RUN} words!`,
  };

  const current = runWords[wordIdx];

  const speak = useCallback((word: string) => {
    try {
      speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(word.toLowerCase());
      u.lang = lang === 'el' ? 'el-GR' : 'en-US';
      u.rate = 0.85;
      speechSynthesis.speak(u);
    } catch { /* speech unavailable — kid can still use the hint */ }
  }, [lang]);

  const start = useCallback(() => {
    const words = shuffle(WORDS[lang]).slice(0, WORDS_PER_RUN);
    rewardedRef.current = false;
    setRunWords(words);
    setWordIdx(0);
    setSolved(0);
    setInput('');
    setFailedOnce(false);
    setHintShown(false);
    setFlash(null);
    setPhase('play');
  }, [lang]);

  const advance = useCallback(() => {
    setFlash(null);
    setInput('');
    setFailedOnce(false);
    setHintShown(false);
    if (wordIdx + 1 >= WORDS_PER_RUN) {
      setPhase('end');
    } else {
      setWordIdx(i => i + 1);
    }
  }, [wordIdx]);

  // Auto-speak each new word
  useEffect(() => {
    if (phase !== 'play' || !current) return;
    const timer = setTimeout(() => speak(current), 350);
    return () => clearTimeout(timer);
  }, [phase, wordIdx, current, speak]);

  // Stop any pending speech when leaving the game
  useEffect(() => () => { try { speechSynthesis.cancel(); } catch { /* noop */ } }, []);

  const submit = useCallback(() => {
    if (phase !== 'play' || !current || flash || !input.trim()) return;
    if (normalizeWord(input) === normalizeWord(current)) {
      setFlash('right');
      setSolved(s => s + 1);
      setTimeout(advance, 700);
    } else if (failedOnce) {
      // Second fail: reveal the word, then move on
      setFlash('reveal');
      setTimeout(advance, 2200);
    } else {
      setFailedOnce(true);
      setShake(true);
      setTimeout(() => setShake(false), 500);
      inputRef.current?.focus();
    }
  }, [phase, current, flash, input, failedOnce, advance]);

  // End-of-run reward (daily-capped via shared helper)
  useEffect(() => {
    if (phase !== 'end' || rewardedRef.current) return;
    rewardedRef.current = true;
    const reward = solved >= 7 ? 3 : solved >= 5 ? 2 : solved >= 3 ? 1 : 0;
    grantGameReward('spell', reward, earnCredits, showNotification, lang);
  }, [phase, solved, earnCredits, showNotification, lang]);

  const progressDots = useMemo(() => Array.from({ length: WORDS_PER_RUN }, (_, i) => i), []);

  return (
    <div className="h-full flex flex-col items-center p-3 select-none overflow-hidden">
      {/* HEADER */}
      <div className="flex justify-between items-center w-full max-w-md mb-2 bg-black/50 backdrop-blur-md px-3 py-2 rounded-xl border border-white/10 z-10 shrink-0">
        <button onClick={onBack} className="text-white/50 hover:text-white font-bold uppercase text-xs flex items-center gap-1.5 py-1 px-2">
          <ArrowLeft size={14} /> {t.back}
        </button>
        <h2 className="text-xl font-[1000] text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-300 via-purple-400 to-violet-500 italic tracking-tighter leading-none">
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
              <div className="w-20 h-20 mx-auto bg-purple-500/20 border border-purple-500/30 rounded-3xl flex items-center justify-center">
                <Volume2 size={40} className="text-purple-400" />
              </div>
              <p className="text-white/60 font-bold text-sm">{t.tagline}</p>
              <button onClick={start} className="px-10 py-4 bg-gradient-to-r from-fuchsia-600 to-violet-600 rounded-2xl text-white font-[1000] uppercase tracking-widest text-sm hover:scale-105 active:scale-95 transition-all flex items-center gap-2 mx-auto shadow-lg shadow-purple-500/20">
                <Play size={16} fill="currentColor" /> {t.play}
              </button>
            </motion.div>
          )}

          {phase === 'play' && current && (
            <motion.div key={`play-${wordIdx}`} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="w-full space-y-6">
              {/* Progress dots */}
              <div className="flex items-center justify-center gap-1.5">
                {progressDots.map(i => (
                  <div key={i} className={`h-1.5 rounded-full transition-all ${i < wordIdx ? 'w-4 bg-emerald-400' : i === wordIdx ? 'w-6 bg-purple-400' : 'w-1.5 bg-white/15'}`} />
                ))}
              </div>

              {/* Big speaker button */}
              <button
                onClick={() => speak(current)}
                className="w-28 h-28 mx-auto bg-purple-500/15 border-2 border-purple-500/40 rounded-3xl flex flex-col items-center justify-center gap-1.5 text-purple-300 hover:bg-purple-500/25 hover:border-purple-400/70 active:scale-95 transition-all block"
              >
                <Volume2 size={44} />
                <span className="text-[9px] font-black uppercase tracking-widest">{t.listen}</span>
              </button>

              {/* Hint / status */}
              <div className="text-center min-h-[28px]">
                {flash === 'reveal' ? (
                  <p className="text-amber-300 font-bold text-sm">
                    {t.revealMsg} <span className="font-[1000] tracking-widest">{current}</span>
                  </p>
                ) : failedOnce ? (
                  <p className="text-amber-300/90 font-bold text-xs">{t.retry}</p>
                ) : hintShown ? (
                  <p className="text-purple-300/90 font-[1000] text-sm tracking-[0.3em]">
                    💡 {current[0]} {'·'.repeat(Math.max(1, current.length - 2))} {current[current.length - 1]}
                  </p>
                ) : (
                  <button onClick={() => setHintShown(true)} className="text-white/40 hover:text-purple-300 font-black uppercase tracking-widest text-[10px] flex items-center gap-1 mx-auto transition-colors">
                    <Lightbulb size={12} /> {t.hint}
                  </button>
                )}
              </div>

              {/* Input + check */}
              <div className="flex items-center gap-2">
                <motion.div
                  className="flex-1"
                  animate={shake ? { x: [0, -10, 10, -8, 8, -4, 4, 0] } : { x: 0 }}
                  transition={{ duration: 0.45 }}
                >
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={e => setInput(e.target.value.toUpperCase())}
                    onKeyDown={e => { if (e.key === 'Enter') submit(); }}
                    placeholder={t.placeholder}
                    disabled={!!flash}
                    autoFocus
                    autoComplete="off"
                    autoCorrect="off"
                    spellCheck={false}
                    className={`w-full px-4 py-4 rounded-2xl border-2 bg-black/40 text-center text-xl font-[1000] tracking-[0.2em] text-white placeholder:text-white/20 placeholder:text-xs placeholder:tracking-widest outline-none transition-colors ${
                      flash === 'right' ? 'border-emerald-400/70 bg-emerald-500/15'
                      : flash === 'reveal' ? 'border-amber-400/60 bg-amber-500/10'
                      : shake ? 'border-red-400/70'
                      : 'border-white/15 focus:border-purple-400/60'
                    }`}
                  />
                </motion.div>
                <button
                  onClick={submit}
                  disabled={!!flash || !input.trim()}
                  className="w-14 h-14 shrink-0 rounded-2xl bg-gradient-to-r from-fuchsia-600 to-violet-600 text-white flex items-center justify-center hover:scale-105 active:scale-95 transition-all disabled:opacity-30 disabled:hover:scale-100"
                >
                  <Check size={22} strokeWidth={3} />
                </button>
              </div>
            </motion.div>
          )}

          {phase === 'end' && (
            <motion.div key="end" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="text-center space-y-5">
              <p className="text-white/50 font-black uppercase tracking-widest text-sm">{t.endTitle}</p>
              <p className="text-7xl font-[1000] text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-300 to-violet-400 font-mono">{solved}/{WORDS_PER_RUN}</p>
              {solved === WORDS_PER_RUN && (
                <p className="text-purple-400 font-[1000] uppercase tracking-widest text-sm flex items-center justify-center gap-1.5 animate-pulse">
                  <Trophy size={15} /> PERFECT!
                </p>
              )}
              <p className="text-white/40 font-bold text-xs">{t.summary(solved)}</p>
              <div className="flex items-center justify-center gap-3">
                <button onClick={start} className="px-8 py-3.5 bg-gradient-to-r from-fuchsia-600 to-violet-600 rounded-2xl text-white font-[1000] uppercase tracking-widest text-xs hover:scale-105 active:scale-95 transition-all flex items-center gap-2">
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
