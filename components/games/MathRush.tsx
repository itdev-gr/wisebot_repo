/**
 * MATH RUSH — 60-second arithmetic sprint
 * ========================================
 * Answer as many math questions as you can before the timer runs out.
 * Difficulty ramps with score: addition → subtraction → multiplication.
 * Earns real credits via useEconomy (capped per day to prevent farming).
 */
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion as m, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Calculator, Timer, Flame, Trophy, Zap, Play, RotateCcw } from 'lucide-react';
import { useEconomy } from '../../context/EconomyContext';

const motion = m as any;
const AnimatePresenceAny = AnimatePresence as any;

interface MathRushProps {
  lang: 'el' | 'en';
  onBack: () => void;
}

const GAME_SECONDS = 60;
const REWARDS_PER_DAY = 2; // credit grants per day

interface Question {
  text: string;
  answer: number;
  options: number[];
}

function rand(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function makeQuestion(score: number): Question {
  let a: number, b: number, answer: number, text: string;
  if (score < 5) {
    a = rand(1, 10); b = rand(1, 10);
    answer = a + b; text = `${a} + ${b}`;
  } else if (score < 10) {
    a = rand(5, 20); b = rand(1, a);
    answer = Math.random() > 0.5 ? a + b : a - b;
    text = answer === a + b ? `${a} + ${b}` : `${a} − ${b}`;
  } else if (score < 16) {
    a = rand(2, 9); b = rand(2, 9);
    answer = a * b; text = `${a} × ${b}`;
  } else {
    if (Math.random() > 0.5) {
      a = rand(3, 12); b = rand(3, 12);
      answer = a * b; text = `${a} × ${b}`;
    } else {
      a = rand(20, 99); b = rand(10, a);
      answer = a - b; text = `${a} − ${b}`;
    }
  }
  // Build 4 options: the answer + 3 plausible distractors
  const opts = new Set<number>([answer]);
  while (opts.size < 4) {
    const delta = rand(1, 10) * (Math.random() > 0.5 ? 1 : -1);
    const candidate = answer + delta;
    if (candidate >= 0) opts.add(candidate);
  }
  return { text, answer, options: [...opts].sort(() => Math.random() - 0.5) };
}

function rewardsLeftToday(): number {
  try {
    const raw = JSON.parse(localStorage.getItem('wb_mathrush_rewards') || '{}');
    const today = new Date().toISOString().slice(0, 10);
    return raw.date === today ? Math.max(0, REWARDS_PER_DAY - (raw.count || 0)) : REWARDS_PER_DAY;
  } catch { return REWARDS_PER_DAY; }
}

function consumeReward() {
  const today = new Date().toISOString().slice(0, 10);
  let raw: { date?: string; count?: number } = {};
  try { raw = JSON.parse(localStorage.getItem('wb_mathrush_rewards') || '{}'); } catch { /* fresh */ }
  const count = raw.date === today ? (raw.count || 0) + 1 : 1;
  localStorage.setItem('wb_mathrush_rewards', JSON.stringify({ date: today, count }));
}

export default function MathRush({ lang, onBack }: MathRushProps) {
  const { earnCredits, showNotification } = useEconomy();
  const [phase, setPhase] = useState<'start' | 'play' | 'end'>('start');
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [timeLeft, setTimeLeft] = useState(GAME_SECONDS);
  const [question, setQuestion] = useState<Question>(() => makeQuestion(0));
  const [flash, setFlash] = useState<'right' | 'wrong' | null>(null);
  const [best, setBest] = useState<number>(() => parseInt(localStorage.getItem('wb_mathrush_best') || '0'));
  const rewardedRef = useRef(false);

  const t = {
    title: 'MATH RUSH',
    tagline: lang === 'el' ? 'Πόσες πράξεις προλαβαίνεις σε 60";' : 'How many can you solve in 60s?',
    score: lang === 'el' ? 'ΣΚΟΡ' : 'SCORE',
    best: lang === 'el' ? 'ΡΕΚΟΡ' : 'BEST',
    combo: 'COMBO',
    play: lang === 'el' ? 'ΞΕΚΙΝΑ' : 'START',
    again: lang === 'el' ? 'ΞΑΝΑ' : 'PLAY AGAIN',
    back: lang === 'el' ? 'ΠΙΣΩ' : 'BACK',
    timeUp: lang === 'el' ? 'ΤΕΛΟΣ ΧΡΟΝΟΥ!' : "TIME'S UP!",
    newBest: lang === 'el' ? 'ΝΕΟ ΡΕΚΟΡ!' : 'NEW BEST!',
  };

  // Countdown
  useEffect(() => {
    if (phase !== 'play') return;
    if (timeLeft <= 0) { setPhase('end'); return; }
    const id = setTimeout(() => setTimeLeft(v => v - 1), 1000);
    return () => clearTimeout(id);
  }, [phase, timeLeft]);

  // End-of-game: best score + credit reward (daily-capped)
  useEffect(() => {
    if (phase !== 'end' || rewardedRef.current) return;
    rewardedRef.current = true;
    if (score > best) {
      setBest(score);
      localStorage.setItem('wb_mathrush_best', String(score));
    }
    const reward = score >= 15 ? 3 : score >= 8 ? 2 : score >= 3 ? 1 : 0;
    if (reward > 0 && rewardsLeftToday() > 0) {
      consumeReward();
      earnCredits(reward, 'GAME_REWARD');
      showNotification('🧮', lang === 'el' ? 'ΜΑΘΗΜΑΤΙΚΕ!' : 'MATH STAR!', `+${reward} Credits ⚡`);
    }
  }, [phase, score, best, earnCredits, showNotification, lang]);

  const start = useCallback(() => {
    rewardedRef.current = false;
    setScore(0); setCombo(0); setTimeLeft(GAME_SECONDS);
    setQuestion(makeQuestion(0));
    setPhase('play');
  }, []);

  const answer = useCallback((value: number) => {
    if (phase !== 'play') return;
    if (value === question.answer) {
      const bonus = combo >= 6 ? 2 : 1; // hot streak = double points
      setScore(s => {
        const next = s + bonus;
        setQuestion(makeQuestion(next));
        return next;
      });
      setCombo(c => c + 1);
      setFlash('right');
    } else {
      setCombo(0);
      setFlash('wrong');
      setQuestion(makeQuestion(score));
    }
    setTimeout(() => setFlash(null), 250);
  }, [phase, question, combo, score]);

  return (
    <div className="h-full flex flex-col items-center p-3 select-none overflow-hidden">
      {/* HEADER */}
      <div className="flex justify-between items-center w-full max-w-md mb-2 bg-black/50 backdrop-blur-md px-3 py-2 rounded-xl border border-white/10 z-10 shrink-0">
        <button onClick={onBack} className="text-white/50 hover:text-white font-bold uppercase text-xs flex items-center gap-1.5 py-1 px-2">
          <ArrowLeft size={14} /> {t.back}
        </button>
        <h2 className="text-xl font-[1000] text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-cyan-400 to-blue-500 italic tracking-tighter leading-none">
          {t.title}
        </h2>
        <div className="text-right">
          <p className="text-[8px] text-white/40 font-black uppercase tracking-widest">{t.score}</p>
          <p className="text-2xl font-[1000] text-white leading-none font-mono">{score}</p>
        </div>
      </div>

      <div className="flex-1 w-full max-w-md flex flex-col items-center justify-center gap-5">
        <AnimatePresenceAny mode="wait">
          {phase === 'start' && (
            <motion.div key="start" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="text-center space-y-5">
              <div className="w-20 h-20 mx-auto bg-emerald-500/20 border border-emerald-500/30 rounded-3xl flex items-center justify-center">
                <Calculator size={40} className="text-emerald-400" />
              </div>
              <p className="text-white/60 font-bold text-sm">{t.tagline}</p>
              {best > 0 && (
                <p className="text-amber-400/80 font-black text-xs uppercase tracking-widest flex items-center justify-center gap-1.5">
                  <Trophy size={13} /> {t.best}: {best}
                </p>
              )}
              <button onClick={start} className="px-10 py-4 bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-2xl text-white font-[1000] uppercase tracking-widest text-sm hover:scale-105 active:scale-95 transition-all flex items-center gap-2 mx-auto shadow-lg shadow-emerald-500/20">
                <Play size={16} fill="currentColor" /> {t.play}
              </button>
            </motion.div>
          )}

          {phase === 'play' && (
            <motion.div key="play" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full space-y-5">
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
                <div className={`h-full rounded-full transition-all duration-1000 ease-linear ${timeLeft <= 10 ? 'bg-red-500' : 'bg-gradient-to-r from-emerald-400 to-cyan-400'}`} style={{ width: `${(timeLeft / GAME_SECONDS) * 100}%` }} />
              </div>

              {/* Question */}
              <motion.div
                key={question.text}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className={`text-center py-8 rounded-3xl border-2 transition-colors duration-200 ${
                  flash === 'right' ? 'bg-emerald-500/20 border-emerald-400/60'
                  : flash === 'wrong' ? 'bg-red-500/20 border-red-400/60'
                  : 'bg-white/5 border-white/10'
                }`}
              >
                <p className="text-5xl font-[1000] text-white font-mono tracking-tight">{question.text} = ?</p>
              </motion.div>

              {/* Answers */}
              <div className="grid grid-cols-2 gap-3">
                {question.options.map((opt, i) => (
                  <button
                    key={`${question.text}-${i}`}
                    onClick={() => answer(opt)}
                    className="py-5 bg-white/5 border-2 border-white/10 rounded-2xl text-white text-2xl font-[1000] font-mono hover:bg-cyan-500/20 hover:border-cyan-400/50 active:scale-95 transition-all"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {phase === 'end' && (
            <motion.div key="end" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="text-center space-y-5">
              <p className="text-white/50 font-black uppercase tracking-widest text-sm">{t.timeUp}</p>
              <p className="text-7xl font-[1000] text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-cyan-400 font-mono">{score}</p>
              {score >= best && score > 0 && (
                <p className="text-amber-400 font-[1000] uppercase tracking-widest text-sm flex items-center justify-center gap-1.5 animate-pulse">
                  <Trophy size={15} /> {t.newBest}
                </p>
              )}
              <div className="flex items-center justify-center gap-3">
                <button onClick={start} className="px-8 py-3.5 bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-2xl text-white font-[1000] uppercase tracking-widest text-xs hover:scale-105 active:scale-95 transition-all flex items-center gap-2">
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
