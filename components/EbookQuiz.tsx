import React, { useState, useMemo, useEffect, useRef } from 'react';
import { motion as m, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, ArrowRight, RefreshCcw, BookOpen, Zap, Star, Trophy } from 'lucide-react';
import { QuizQuestion } from '../types';
import { shuffleAllOptions } from '../utils/shuffleOptions';

const motion = m as any;

// ─── CONFETTI COLORS ────────────────────────────────────
const CONFETTI_COLORS = ['#FFD700', '#FF6B6B', '#4FC3F7', '#81C784', '#BA68C8', '#FF8A65', '#E040FB', '#FFF176', '#64FFDA', '#FF80AB'];

// ─── SOUND EFFECTS (Web Audio API) ────────────────────────
const playEbookSound = (type: 'click' | 'correct' | 'wrong' | 'victory') => {
  try {
    const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    const gain = ctx.createGain();
    gain.connect(ctx.destination);

    switch (type) {
      case 'click': {
        const osc = ctx.createOscillator();
        osc.connect(gain);
        osc.frequency.setValueAtTime(600, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(400, ctx.currentTime + 0.06);
        gain.gain.setValueAtTime(0.12, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.08);
        break;
      }
      case 'correct': {
        const osc = ctx.createOscillator();
        osc.connect(gain);
        osc.frequency.setValueAtTime(523, ctx.currentTime);
        osc.frequency.setValueAtTime(659, ctx.currentTime + 0.12);
        gain.gain.setValueAtTime(0.25, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.3);
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.3);
        break;
      }
      case 'wrong': {
        const osc = ctx.createOscillator();
        osc.connect(gain);
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(200, ctx.currentTime);
        osc.frequency.linearRampToValueAtTime(150, ctx.currentTime + 0.2);
        gain.gain.setValueAtTime(0.15, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.25);
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.25);
        break;
      }
      case 'victory': {
        const notes = [523, 659, 784, 1047];
        const noteLen = 0.15;
        notes.forEach((freq, i) => {
          const osc = ctx.createOscillator();
          const noteGain = ctx.createGain();
          osc.connect(noteGain);
          noteGain.connect(ctx.destination);
          osc.frequency.setValueAtTime(freq, ctx.currentTime);
          noteGain.gain.setValueAtTime(0.2, ctx.currentTime + i * noteLen);
          noteGain.gain.linearRampToValueAtTime(0.05, ctx.currentTime + i * noteLen + noteLen * 1.5);
          noteGain.gain.linearRampToValueAtTime(0, ctx.currentTime + i * noteLen + noteLen * 2);
          osc.start(ctx.currentTime + i * noteLen);
          osc.stop(ctx.currentTime + i * noteLen + noteLen * 2);
        });
        break;
      }
    }
  } catch (e) { /* Audio not available */ }
};

interface EbookQuizProps {
  questions: QuizQuestion[];
  lang: 'el' | 'en';
  onComplete: (score: number, total: number) => void;
  onRetry: () => void;
  onNextBook: () => void;
  hasNextBook: boolean;
}

export const EbookQuiz: React.FC<EbookQuizProps> = ({
  questions: sourceQuestions,
  lang,
  onComplete,
  onRetry,
  onNextBook,
  hasNextBook
}) => {
  // The stored order leaks the answer (see utils/shuffleOptions.ts) — shuffle once per quiz.
  const questions = useMemo(() => shuffleAllOptions(sourceQuestions), [sourceQuestions]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const victorySoundPlayed = useRef(false);

  useEffect(() => {
    if (isFinished && score === questions.length && !victorySoundPlayed.current) {
      victorySoundPlayed.current = true;
      setTimeout(() => playEbookSound('victory'), 500);
    }
  }, [isFinished, score, questions.length]);

  const confettiParticles = useMemo(() =>
    Array.from({ length: 70 }, (_, i) => ({
      id: i,
      x: 5 + ((i * 17 + 23) % 90),
      color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
      size: 5 + (i % 4) * 3,
      delay: (i % 15) * 0.06,
      duration: 2.5 + (i % 5) * 0.6,
      drift: ((i * 7) % 200) - 100,
      rotation: ((i * 47) % 720) - 360,
      shape: i % 3,
    })),
  []);

  const handleOptionClick = (index: number) => {
    if (isAnswerChecked) return;

    playEbookSound('click');
    setSelectedOption(index);
    setIsAnswerChecked(true);

    const isCorrect = index === questions[currentQuestion].correct;
    if (isCorrect) {
      setScore(s => s + 1);
      setTimeout(() => playEbookSound('correct'), 150);
    } else {
      setTimeout(() => playEbookSound('wrong'), 150);
    }
  };

  const handleNext = () => {
    playEbookSound('click');
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswerChecked(false);
    } else {
      setIsFinished(true);
      onComplete(score + (selectedOption === questions[currentQuestion].correct ? 1 : 0), questions.length);
    }
  };

  // ─── SPECTACULAR COMPLETION SCREEN ─────────────────────
  if (isFinished) {
    const passed = score === questions.length;

    if (passed) {
      return (
        <div className="relative h-full flex flex-col justify-center items-center max-w-2xl mx-auto overflow-hidden">

          {/* ── CONFETTI BURST ── */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {confettiParticles.map(p => (
              <motion.div
                key={p.id}
                initial={{
                  x: `${p.x}vw`,
                  y: '-5%',
                  rotate: 0,
                  opacity: 1,
                  scale: 1,
                }}
                animate={{
                  y: '120vh',
                  x: `calc(${p.x}vw + ${p.drift}px)`,
                  rotate: p.rotation,
                  opacity: [1, 1, 1, 0],
                  scale: [1, 1, 0.8, 0.3],
                }}
                transition={{
                  duration: p.duration,
                  delay: p.delay,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="absolute"
                style={{
                  width: p.shape === 2 ? p.size * 1.8 : p.size,
                  height: p.size,
                  backgroundColor: p.color,
                  borderRadius: p.shape === 0 ? '50%' : '2px',
                }}
              />
            ))}
          </div>

          {/* ── CELEBRATION CONTENT ── */}
          <div className="relative z-10 text-center space-y-8 px-4">

            {/* Trophy with glow & rings */}
            <div className="relative mx-auto w-36 h-36 flex items-center justify-center">
              {[0, 1, 2].map(i => (
                <motion.div
                  key={i}
                  initial={{ scale: 0.5, opacity: 0.6 }}
                  animate={{ scale: [0.5, 2.5], opacity: [0.5, 0] }}
                  transition={{ duration: 2.5, delay: 0.8 + i * 0.4, repeat: Infinity, repeatDelay: 0.5 }}
                  className="absolute inset-0 rounded-full border-2 border-amber-500/40"
                />
              ))}

              <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-[-20px] rounded-full bg-amber-400/20 blur-2xl"
              />

              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: 'spring', stiffness: 200, damping: 12, delay: 0.3 }}
                className="relative w-32 h-32 rounded-full bg-gradient-to-br from-amber-300 via-yellow-400 to-amber-600 flex items-center justify-center shadow-[0_0_60px_rgba(251,191,36,0.5)]"
              >
                <span className="text-6xl drop-shadow-lg">🏆</span>
              </motion.div>
            </div>

            {/* Main Title */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.6, type: 'spring', stiffness: 200 }}
              className="space-y-3"
            >
              <h2 className="text-5xl md:text-7xl font-[1000] text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-700 uppercase italic tracking-tighter"
              >
                {lang === 'el' ? 'ΜΠΡΑΒΟ!' : 'AMAZING!'}
              </h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="text-amber-800/60 font-black text-lg uppercase tracking-[0.2em]"
              >
                {lang === 'el' ? 'ΤΕΛΕΙΟ ΣΚΟΡ' : 'PERFECT SCORE'}
              </motion.p>
            </motion.div>

            {/* Score Stars */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, type: 'spring' }}
              className="flex items-center justify-center gap-2"
            >
              {Array.from({ length: questions.length }, (_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 1.1 + i * 0.1, type: 'spring', stiffness: 300 }}
                >
                  <Star size={28} className="text-amber-500 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]" fill="currentColor" />
                </motion.div>
              ))}
            </motion.div>

            {/* Score + Credit Reward */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
              className="flex items-center justify-center gap-4"
            >
              <div className="px-5 py-3 bg-amber-900/10 rounded-2xl border border-amber-800/20">
                <span className="text-amber-900 font-black text-sm uppercase tracking-wider">
                  {score}/{questions.length}
                </span>
              </div>
              <motion.div
                animate={{ boxShadow: ['0 0 20px rgba(180,120,30,0.15)', '0 0 40px rgba(180,120,30,0.3)', '0 0 20px rgba(180,120,30,0.15)'] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="px-6 py-3 bg-amber-500/20 rounded-2xl border border-amber-600/30 flex items-center gap-2"
              >
                <Zap size={18} className="text-amber-600" />
                <span className="text-amber-700 font-[1000] text-base uppercase tracking-wider">+1 Credit</span>
              </motion.div>
            </motion.div>

            {/* Motivational message */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
              className="text-amber-800/40 text-xs font-bold uppercase tracking-[0.3em] max-w-xs mx-auto"
            >
              {lang === 'el' ? 'Η ΓΝΩΣΗ ΕΙΝΑΙ Η ΔΥΝΑΜΗ ΣΟΥ' : 'KNOWLEDGE IS YOUR POWER'}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 }}
              className="flex flex-col w-full gap-4 max-w-sm mx-auto pt-4"
            >
              {hasNextBook ? (
                <button
                  onClick={onNextBook}
                  className="w-full py-5 bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 rounded-[2rem] font-[1000] text-white text-xl uppercase italic tracking-widest shadow-lg hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 group"
                >
                  {lang === 'el' ? 'ΕΠΟΜΕΝΟ ΒΙΒΛΙΟ' : 'NEXT BOOK'}
                  <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                </button>
              ) : (
                <div className="p-5 bg-emerald-50 rounded-2xl border border-emerald-300/40 text-center">
                  <p className="text-emerald-700 font-[1000] uppercase italic tracking-wider">
                    {lang === 'el' ? 'ΟΛΟΚΛΗΡΩΣΕΣ ΟΛΑ ΤΑ ΒΙΒΛΙΑ!' : 'ALL BOOKS COMPLETE!'}
                  </p>
                  <p className="text-emerald-600/50 text-xs font-bold uppercase tracking-wider mt-1">
                    {lang === 'el' ? 'Είσαι θρύλος!' : 'You are a legend!'}
                  </p>
                </div>
              )}

              <button
                onClick={onRetry}
                className="w-full py-4 bg-amber-800/10 border border-amber-800/20 text-amber-800/60 hover:text-amber-900 hover:bg-amber-800/15 font-bold uppercase tracking-widest rounded-xl transition-all text-sm"
              >
                {lang === 'el' ? 'ΔΙΑΒΑΣΕ ΞΑΝΑ' : 'READ AGAIN'}
              </button>
            </motion.div>
          </div>
        </div>
      );
    }

    // ── FAILED SCREEN (Not Perfect) ──
    return (
      <div className="h-full flex flex-col justify-center items-center max-w-2xl mx-auto space-y-8 text-center px-4">

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          className="w-28 h-28 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center shadow-lg"
        >
          <span className="text-5xl">💪</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-3"
        >
          <h2 className="text-4xl md:text-5xl font-[1000] text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600 uppercase italic tracking-tighter">
            {lang === 'el' ? 'ΣΧΕΔΟΝ!' : 'ALMOST!'}
          </h2>
          <p className="text-amber-900/60 font-bold text-lg">
            {lang === 'el' ? `Σκορ: ${score}/${questions.length}` : `Score: ${score}/${questions.length}`}
          </p>
          <p className="text-amber-800/40 text-xs font-bold uppercase tracking-wider max-w-xs mx-auto">
            {lang === 'el'
              ? 'Ξαναδιάβασε την ιστορία και δοκίμασε ξανά! Μπορείς!'
              : 'Read the story again and try once more! You got this!'}
          </p>
        </motion.div>

        {/* Show which answers were wrong with stars */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex items-center justify-center gap-2"
        >
          {Array.from({ length: questions.length }, (_, i) => (
            <Star
              key={i}
              size={24}
              className={i < score ? 'text-amber-500' : 'text-amber-800/15'}
              fill={i < score ? 'currentColor' : 'none'}
            />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="w-full max-w-sm"
        >
          <button
            onClick={onRetry}
            className="w-full py-5 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-[2rem] font-[1000] text-xl uppercase italic tracking-widest shadow-lg hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 group"
          >
            <RefreshCcw size={22} className="group-hover:rotate-180 transition-transform duration-500" />
            {lang === 'el' ? 'ΞΑΝΑΔΙΑΒΑΣΕ' : 'READ AGAIN'}
          </button>
        </motion.div>
      </div>
    );
  }

  // ─── QUIZ QUESTIONS ────────────────────────────────────
  return (
    <div className="h-full flex flex-col justify-center max-w-2xl mx-auto p-4">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-2">
           <div className="flex justify-between items-center">
             <span className="text-amber-700 font-black text-xs uppercase tracking-widest">
               {lang === 'el' ? 'ΕΡΩΤΗΣΗ' : 'QUESTION'} {currentQuestion + 1} / {questions.length}
             </span>
             <div className="flex items-center gap-1.5">
               {Array.from({ length: questions.length }, (_, i) => (
                 <div
                   key={i}
                   className={`w-2 h-2 rounded-full transition-all ${
                     i < currentQuestion
                       ? 'bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.5)]'
                       : i === currentQuestion
                       ? 'bg-amber-600 shadow-[0_0_6px_rgba(180,120,30,0.5)] scale-125'
                       : 'bg-amber-800/20'
                   }`}
                 />
               ))}
             </div>
           </div>
           <h2 className="text-2xl md:text-3xl font-[1000] text-amber-950 uppercase italic tracking-tighter leading-tight">
              {questions[currentQuestion].q[lang]}
           </h2>
        </div>

        {/* Options */}
        <div className="space-y-3">
           {questions[currentQuestion].options[lang].map((opt, idx) => {
              const isSelected = selectedOption === idx;
              const isCorrect = idx === questions[currentQuestion].correct;

              let btnStyle = "bg-white/70 border-2 border-amber-800/20 text-amber-950 hover:bg-white hover:border-amber-600/40 shadow-sm";
              let icon: React.ReactNode = null;

              if (isAnswerChecked) {
                 if (isCorrect) {
                    btnStyle = "bg-emerald-50 border-2 border-emerald-500 text-emerald-800 shadow-[0_0_20px_rgba(16,185,129,0.15)]";
                    icon = <CheckCircle size={20} className="text-emerald-500" />;
                 } else if (isSelected) {
                    btnStyle = "bg-red-50 border-2 border-red-400 text-red-700";
                    icon = <XCircle size={20} className="text-red-500" />;
                 } else {
                    btnStyle = "opacity-40 border-2 border-transparent";
                 }
              }

              return (
                 <button
                    key={idx}
                    onClick={() => handleOptionClick(idx)}
                    disabled={isAnswerChecked}
                    className={`w-full text-left p-5 rounded-2xl font-bold italic transition-all flex items-center justify-between group ${btnStyle}`}
                 >
                    <span className="group-hover:translate-x-1 transition-transform">{opt}</span>
                    {icon}
                 </button>
              )
           })}
        </div>

        {/* Feedback / Next Button */}
        <div className="h-20 flex items-center justify-center">
          {isAnswerChecked && (
             <div className="w-full animate-in fade-in slide-in-from-bottom-2">
                <div className={`mb-4 text-center font-black uppercase tracking-widest text-sm ${
                   selectedOption === questions[currentQuestion].correct ? 'text-emerald-600' : 'text-red-500'
                }`}>
                   {selectedOption === questions[currentQuestion].correct
                      ? (lang === 'el' ? 'ΣΩΣΤΗ ΑΠΑΝΤΗΣΗ!' : 'CORRECT ANSWER!')
                      : (lang === 'el' ? 'ΛΑΘΟΣ...' : 'WRONG...')}
                </div>
                <button
                  onClick={handleNext}
                  className="w-full py-4 bg-amber-800 text-white font-[1000] uppercase italic tracking-widest rounded-xl hover:bg-amber-700 transition-all flex items-center justify-center gap-2"
                >
                   {lang === 'el' ? 'ΣΥΝΕΧΕΙΑ' : 'CONTINUE'} <ArrowRight size={20} />
                </button>
             </div>
          )}
        </div>
      </div>
    </div>
  );
};
