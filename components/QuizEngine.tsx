
import React, { useState, useEffect, useRef } from 'react';
import { QuizQuestion } from '../types';
import {
  CheckCircle2, XCircle, ArrowRight, RefreshCcw, Brain, Trophy, Star,
  AlertTriangle, Zap, Flame, Share2, Users, Clock
} from 'lucide-react';
import { motion as m, AnimatePresence } from 'framer-motion';
import { useEconomy } from '../context/EconomyContext';

const motion = m as any;

interface QuizProgress {
  currentIdx: number;
  totalScore: number;
  levelScore: number;
  totalPoints: number;
  streak: number;
  bestStreak: number;
  timestamp: number;
}

interface QuizEngineProps {
  topic: string;
  questions: QuizQuestion[];
  onRestart: () => void;
  lang: 'el' | 'en';
  categoryId?: string;
  challengeData?: { from: string; score: number } | null;
}

// ─── PROGRESS PERSISTENCE ───
const PROGRESS_KEY_PREFIX = 'wb_quiz_progress_';
const PROGRESS_EXPIRY_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

const saveQuizProgress = (categoryId: string, progress: QuizProgress) => {
  try {
    localStorage.setItem(PROGRESS_KEY_PREFIX + categoryId, JSON.stringify(progress));
  } catch (e) { /* storage full */ }
};

const loadQuizProgress = (categoryId: string): QuizProgress | null => {
  try {
    const saved = localStorage.getItem(PROGRESS_KEY_PREFIX + categoryId);
    if (!saved) return null;
    const parsed = JSON.parse(saved) as QuizProgress;
    // Expire after 7 days
    if (Date.now() - parsed.timestamp > PROGRESS_EXPIRY_MS) {
      localStorage.removeItem(PROGRESS_KEY_PREFIX + categoryId);
      return null;
    }
    return parsed;
  } catch (e) { return null; }
};

export const clearQuizProgress = (categoryId: string) => {
  localStorage.removeItem(PROGRESS_KEY_PREFIX + categoryId);
};

export const getQuizProgress = (categoryId: string): QuizProgress | null => {
  return loadQuizProgress(categoryId);
};

const QUESTIONS_PER_LEVEL = 4;
const PASS_THRESHOLD = 3;
const TIMER_SECONDS = 15;

// ─── INJECT CSS KEYFRAMES ───
const STYLE_ID = 'quiz-engine-styles';
const injectStyles = () => {
  if (document.getElementById(STYLE_ID)) return;
  const style = document.createElement('style');
  style.id = STYLE_ID;
  style.textContent = `
    @keyframes qe-shake { 0%,100%{transform:translateX(0)} 20%{transform:translateX(-10px)} 40%{transform:translateX(10px)} 60%{transform:translateX(-6px)} 80%{transform:translateX(6px)} }
    @keyframes qe-flash { 0%{box-shadow:0 0 0 rgba(16,185,129,0)} 50%{box-shadow:0 0 40px rgba(16,185,129,0.4)} 100%{box-shadow:0 0 0 rgba(16,185,129,0)} }
  `;
  document.head.appendChild(style);
};

// ─── SOUND EFFECTS (Web Audio API) ───
const playSound = (type: 'correct' | 'wrong' | 'streak' | 'tick' | 'timeup') => {
  try {
    const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);

    switch (type) {
      case 'correct':
        osc.frequency.setValueAtTime(523, ctx.currentTime);
        osc.frequency.linearRampToValueAtTime(659, ctx.currentTime + 0.15);
        gain.gain.setValueAtTime(0.3, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.3);
        osc.start(); osc.stop(ctx.currentTime + 0.3);
        break;
      case 'wrong':
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(150, ctx.currentTime);
        osc.frequency.linearRampToValueAtTime(100, ctx.currentTime + 0.3);
        gain.gain.setValueAtTime(0.2, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.4);
        osc.start(); osc.stop(ctx.currentTime + 0.4);
        break;
      case 'streak': {
        const osc2 = ctx.createOscillator();
        const osc3 = ctx.createOscillator();
        osc2.connect(gain); osc3.connect(gain);
        osc.frequency.setValueAtTime(523, ctx.currentTime);
        osc2.frequency.setValueAtTime(659, ctx.currentTime);
        osc3.frequency.setValueAtTime(784, ctx.currentTime);
        gain.gain.setValueAtTime(0.2, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.5);
        osc.start(ctx.currentTime); osc.stop(ctx.currentTime + 0.15);
        osc2.start(ctx.currentTime + 0.1); osc2.stop(ctx.currentTime + 0.25);
        osc3.start(ctx.currentTime + 0.2); osc3.stop(ctx.currentTime + 0.5);
        break;
      }
      case 'tick':
        osc.frequency.setValueAtTime(800, ctx.currentTime);
        gain.gain.setValueAtTime(0.08, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.05);
        osc.start(); osc.stop(ctx.currentTime + 0.05);
        break;
      case 'timeup':
        osc.type = 'square';
        osc.frequency.setValueAtTime(200, ctx.currentTime);
        osc.frequency.linearRampToValueAtTime(120, ctx.currentTime + 0.4);
        gain.gain.setValueAtTime(0.25, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.5);
        osc.start(); osc.stop(ctx.currentTime + 0.5);
        break;
    }
  } catch (e) { /* Audio not available */ }
};

// ─── HYPE WORDS ───
const HYPE_WORDS = {
  el: ['ΜΠΡΑΒΟ!', 'ΤΕΛΕΙΑ!', 'ΣΥΝΕΧΙΣΕ!', 'ΕΙΣΑΙ ΑΣΤΕΡΙ!', 'ΔΥΝΑΜΗ!', 'ΣΩΣΤΟΣ!', 'ΘΡΥΛΟΣ!'],
  en: ['BRAVO!', 'AWESOME!', 'KEEP GOING!', "YOU'RE A STAR!", 'POWER!', 'CORRECT!', 'LEGEND!']
};

// ─── CIRCULAR TIMER ───
const CircleTimer = ({ timeLeft, total }: { timeLeft: number; total: number }) => {
  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const progress = (timeLeft / total) * circumference;
  const isWarning = timeLeft <= 5;

  return (
    <div className="relative w-14 h-14 flex items-center justify-center shrink-0">
      <svg className="absolute transform -rotate-90" width="56" height="56">
        <circle cx="28" cy="28" r={radius} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="4" />
        <circle
          cx="28" cy="28" r={radius} fill="none"
          stroke={isWarning ? '#ef4444' : '#3b82f6'}
          strokeWidth="4"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
          strokeLinecap="round"
          style={{ transition: 'stroke-dashoffset 1s linear, stroke 0.3s' }}
        />
      </svg>
      <span className={`text-lg font-[1000] italic ${isWarning ? 'text-red-400 animate-pulse' : 'text-white'}`}>
        {timeLeft}
      </span>
    </div>
  );
};

// ═══════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════
const QuizEngine: React.FC<QuizEngineProps> = ({ topic, questions, onRestart, lang, categoryId, challengeData }) => {
  const { trackAction } = useEconomy();

  // Load saved progress (if any)
  const savedProgress = categoryId && !challengeData ? loadQuizProgress(categoryId) : null;

  // Core quiz state (restored from saved progress if available)
  const [currentIdx, setCurrentIdx] = useState(savedProgress ? savedProgress.currentIdx : 0);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [totalScore, setTotalScore] = useState(savedProgress ? savedProgress.totalScore : 0);
  const [levelScore, setLevelScore] = useState(savedProgress ? savedProgress.levelScore : 0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [showLevelReward, setShowLevelReward] = useState(false);
  const [showFailScreen, setShowFailScreen] = useState(false);
  const [hypeMessage, setHypeMessage] = useState<string | null>(null);
  const [showResumeNotice, setShowResumeNotice] = useState(!!savedProgress);

  // Quiz Show enhancements (restored from saved progress if available)
  const [timeLeft, setTimeLeft] = useState(TIMER_SECONDS);
  const [totalPoints, setTotalPoints] = useState(savedProgress ? savedProgress.totalPoints : 0);
  const [lastPointsEarned, setLastPointsEarned] = useState(0);
  const [streak, setStreak] = useState(savedProgress ? savedProgress.streak : 0);
  const [bestStreak, setBestStreak] = useState(savedProgress ? savedProgress.bestStreak : 0);
  const [shakeWrong, setShakeWrong] = useState(false);
  const [flashCorrect, setFlashCorrect] = useState(false);
  const questionStartRef = useRef(Date.now());
  const answeredRef = useRef(false); // Guard against timer/click race condition

  // Hide resume notice after 3 seconds
  useEffect(() => {
    if (showResumeNotice) {
      const t = setTimeout(() => setShowResumeNotice(false), 3000);
      return () => clearTimeout(t);
    }
  }, [showResumeNotice]);

  // Save progress after each question is answered
  useEffect(() => {
    if (categoryId && !challengeData && !isFinished && currentIdx > 0) {
      saveQuizProgress(categoryId, {
        currentIdx,
        totalScore,
        levelScore,
        totalPoints,
        streak,
        bestStreak,
        timestamp: Date.now(),
      });
    }
  }, [currentIdx, categoryId, challengeData, isFinished]);

  const currentLevel = Math.floor(currentIdx / QUESTIONS_PER_LEVEL) + 1;
  const totalLevels = Math.ceil(questions.length / QUESTIONS_PER_LEVEL);
  const isLevelEnd = (currentIdx + 1) % QUESTIONS_PER_LEVEL === 0;
  const currentQuestion = questions[currentIdx];

  // Inject CSS on mount
  useEffect(() => { injectStyles(); }, []);

  // ─── TIMER LOGIC ───
  useEffect(() => {
    if (showExplanation || isFinished || showLevelReward || showFailScreen) return;

    setTimeLeft(TIMER_SECONDS);
    questionStartRef.current = Date.now();

    const id = setInterval(() => {
      setTimeLeft(prev => {
        const next = prev - 1;
        if (next <= 5 && next > 0) playSound('tick');
        return Math.max(next, 0);
      });
    }, 1000);

    return () => clearInterval(id);
  }, [currentIdx, showExplanation, showLevelReward, showFailScreen, isFinished]);

  // Auto-fail on timeout (only if user hasn't already answered)
  useEffect(() => {
    if (timeLeft === 0 && !showExplanation && !isFinished && !showLevelReward && !showFailScreen && !answeredRef.current) {
      playSound('timeup');
      setSelectedIdx(-1);
      setShowExplanation(true);
      setStreak(0);
      setShakeWrong(true);
      setTimeout(() => setShakeWrong(false), 600);
    }
  }, [timeLeft, showExplanation, isFinished, showLevelReward, showFailScreen]);

  // Track completion & clear saved progress
  useEffect(() => {
    if (isFinished) {
      if (totalScore > 0) trackAction('PASS_QUIZ');
      // Clear saved progress — quiz is done
      if (categoryId) clearQuizProgress(categoryId);
    }
  }, [isFinished]);

  const getSpeedMultiplier = (): number => {
    const elapsed = (Date.now() - questionStartRef.current) / 1000;
    if (elapsed < 3) return 2;
    if (elapsed < 7) return 1.5;
    if (elapsed < 12) return 1;
    return 0.5;
  };

  const handleSelect = (idx: number) => {
    if (showExplanation || answeredRef.current) return;
    answeredRef.current = true; // Prevent timeout from overriding
    setSelectedIdx(idx);
    setShowExplanation(true);

    if (idx === currentQuestion.correct) {
      const multiplier = getSpeedMultiplier();
      const points = Math.round(100 * multiplier);
      setLastPointsEarned(points);
      setTotalScore(s => s + 1);
      setTotalPoints(p => p + points);
      setLevelScore(s => s + 1);
      setStreak(s => {
        const ns = s + 1;
        if (ns > bestStreak) setBestStreak(ns);
        if (ns >= 3 && ns % 3 === 0) playSound('streak');
        else playSound('correct');
        return ns;
      });
      setFlashCorrect(true);
      setTimeout(() => setFlashCorrect(false), 500);
      const words = HYPE_WORDS[lang];
      setHypeMessage(words[Math.floor(Math.random() * words.length)]);
    } else {
      setLastPointsEarned(0);
      setStreak(0);
      setShakeWrong(true);
      playSound('wrong');
      setTimeout(() => setShakeWrong(false), 600);
    }
  };

  const handleNext = () => {
    setHypeMessage(null);
    if (isLevelEnd && !isFinished) {
      if (levelScore >= PASS_THRESHOLD) setShowLevelReward(true);
      else setShowFailScreen(true);
    } else {
      advanceQuestion();
    }
  };

  const advanceQuestion = () => {
    answeredRef.current = false; // Reset for next question
    setShowLevelReward(false);
    setShowFailScreen(false);
    setHypeMessage(null);
    if (currentIdx + 1 < questions.length) {
      if (isLevelEnd) setLevelScore(0);
      setCurrentIdx(currentIdx + 1);
      setSelectedIdx(null);
      setShowExplanation(false);
    } else {
      setIsFinished(true);
    }
  };

  const retryLevel = () => {
    answeredRef.current = false; // Reset for retry
    const startOfLevelIdx = (currentLevel - 1) * QUESTIONS_PER_LEVEL;
    setCurrentIdx(startOfLevelIdx);
    setLevelScore(0);
    setSelectedIdx(null);
    setShowExplanation(false);
    setShowFailScreen(false);
    setHypeMessage(null);
  };

  // ─── CHALLENGE & SHARE ───
  const handleChallenge = async () => {
    const name = localStorage.getItem('wb_user_name') || (lang === 'el' ? 'WiseKid' : 'WiseKid');
    const base = `${window.location.origin}${window.location.pathname}`;
    const url = `${base}#/quiz?challenge=${categoryId || ''}&score=${totalScore}&total=${questions.length}&from=${encodeURIComponent(name)}`;
    const text = lang === 'el'
      ? `Πήρα ${totalScore}/${questions.length} στο ${topic}! Μπορείς να με νικήσεις; 🧠`
      : `I scored ${totalScore}/${questions.length} on ${topic}! Can you beat me? 🧠`;

    try {
      if (navigator.share) {
        await navigator.share({ title: 'WiseBot Quiz Challenge', text, url });
      } else {
        await navigator.clipboard.writeText(url);
      }
    } catch (e) { /* cancelled */ }
  };

  const handleShareScore = async () => {
    const text = lang === 'el'
      ? `Πήρα ${totalScore}/${questions.length} στο Wise Quiz "${topic}"! 🏆 ${totalPoints} πόντοι!`
      : `I scored ${totalScore}/${questions.length} on Wise Quiz "${topic}"! 🏆 ${totalPoints} points!`;
    try {
      if (navigator.share) {
        await navigator.share({ title: 'WiseBot Wise Quiz', text, url: window.location.href });
      } else {
        await navigator.clipboard.writeText(text);
      }
    } catch (e) { /* cancelled */ }
  };

  // Get streak label
  const getStreakLabel = (): string | null => {
    const m = lang === 'el'
      ? { 10: '👑 ΑΓΓΙΧΤΟΣ!', 7: '💎 ΘΡΥΛΟΣ!', 5: '⚡ ΑΣΤΡΑΠΗ!', 3: '🔥 ΦΩΤΙΑ!' }
      : { 10: '👑 UNTOUCHABLE!', 7: '💎 LEGENDARY!', 5: '⚡ LIGHTNING!', 3: '🔥 ON FIRE!' };
    for (const [t, label] of Object.entries(m).sort((a, b) => +b[0] - +a[0])) {
      if (streak >= +t) return label;
    }
    return null;
  };

  // ════════════════════════════════════
  // RENDER: FINISHED
  // ════════════════════════════════════
  if (isFinished) {
    const isPerfect = totalScore === questions.length;
    const challengeWon = challengeData ? totalScore > challengeData.score : null;
    const challengeTied = challengeData ? totalScore === challengeData.score : false;

    return (
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
        className="max-w-xl mx-auto text-center py-8 glass-panel rounded-[3rem] shadow-2xl border border-white/10 p-8 space-y-6"
      >
        {/* Challenge comparison */}
        {challengeData && (
          <div className={`p-5 rounded-2xl border-2 ${
            challengeWon ? 'bg-emerald-500/10 border-emerald-500/30'
            : challengeTied ? 'bg-amber-500/10 border-amber-500/30'
            : 'bg-rose-500/10 border-rose-500/30'
          }`}>
            <p className={`text-2xl font-[1000] italic uppercase ${
              challengeWon ? 'text-emerald-400'
              : challengeTied ? 'text-amber-400'
              : 'text-rose-400'
            }`}>
              {challengeWon
                ? (lang === 'el' ? '🏆 ΝΙΚΗΣΕΣ!' : '🏆 YOU WON!')
                : challengeTied
                  ? (lang === 'el' ? '🤝 ΙΣΟΠΑΛΙΑ!' : '🤝 TIE!')
                  : (lang === 'el' ? '😤 ΔΟΚΙΜΑΣΕ ΞΑΝΑ!' : '😤 TRY AGAIN!')}
            </p>
            <p className="text-white/60 font-bold text-sm mt-2">
              {challengeData.from}: {challengeData.score}/{questions.length} — {lang === 'el' ? 'Εσύ' : 'You'}: {totalScore}/{questions.length}
            </p>
          </div>
        )}

        {/* Trophy */}
        <div className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto shadow-lg animate-bounce ${
          isPerfect
            ? 'bg-gradient-to-br from-amber-400 to-orange-600 shadow-amber-500/30'
            : 'bg-gradient-to-br from-blue-400 to-purple-600 shadow-purple-500/30'
        }`}>
          <Trophy className="text-white" size={48} />
        </div>

        <div>
          <h2 className="text-4xl font-[1000] text-white uppercase italic tracking-tighter">
            {isPerfect
              ? (lang === 'el' ? 'ΤΕΛΕΙΟ ΣΚΟΡ!' : 'PERFECT SCORE!')
              : (lang === 'el' ? 'Θρυλική Νίκη!' : 'Legendary Victory!')}
          </h2>
          <p className="text-white/60 font-bold mt-1">
            {lang === 'el' ? `Ολοκλήρωσες το: ${topic}!` : `You completed: ${topic}!`}
          </p>
        </div>

        {/* Score */}
        <div className="text-7xl font-[1000] text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
          {totalScore} / {questions.length}
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white/5 rounded-2xl p-3 border border-white/5">
            <p className="text-2xl font-[1000] italic text-amber-400">{totalPoints}</p>
            <p className="text-white/30 text-[9px] font-black uppercase tracking-wider">{lang === 'el' ? 'ΠΟΝΤΟΙ' : 'POINTS'}</p>
          </div>
          <div className="bg-white/5 rounded-2xl p-3 border border-white/5">
            <p className="text-2xl font-[1000] italic text-orange-400">{bestStreak}🔥</p>
            <p className="text-white/30 text-[9px] font-black uppercase tracking-wider">STREAK</p>
          </div>
          <div className="bg-white/5 rounded-2xl p-3 border border-white/5">
            <p className="text-2xl font-[1000] italic text-emerald-400">
              {isPerfect ? '⭐' : `${Math.round((totalScore / questions.length) * 100)}%`}
            </p>
            <p className="text-white/30 text-[9px] font-black uppercase tracking-wider">{isPerfect ? 'PERFECT' : (lang === 'el' ? 'ΑΚΡΙΒΕΙΑ' : 'ACCURACY')}</p>
          </div>
        </div>

        {/* Quiz completed notice */}
        <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl">
          <p className="text-emerald-400 font-black uppercase tracking-widest italic text-sm flex items-center justify-center gap-2">
            <Zap size={18} fill="currentColor" /> QUIZ COMPLETED
          </p>
          <p className="text-white/40 text-xs font-bold mt-1">
            {lang === 'el' ? 'Πρόοδος για Credits & Thinker Badge' : 'Progress toward Credits & Thinker Badge'}
          </p>
        </div>

        {/* Action buttons */}
        <div className="space-y-3">
          {categoryId && (
            <button onClick={handleChallenge}
              className="w-full py-4 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white rounded-2xl font-[1000] text-base uppercase italic tracking-widest hover:scale-[1.02] transition-all shadow-xl flex items-center justify-center gap-3">
              <Users size={20} /> {lang === 'el' ? 'ΠΡΟΚΑΛΕΣΕ ΦΙΛΟ!' : 'CHALLENGE A FRIEND!'}
            </button>
          )}
          <button onClick={handleShareScore}
            className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-2xl font-[1000] text-base uppercase italic tracking-widest hover:scale-[1.02] transition-all shadow-xl flex items-center justify-center gap-3">
            <Share2 size={20} /> {lang === 'el' ? 'ΜΟΙΡΑΣΟΥ ΤΟ ΣΚΟΡ' : 'SHARE SCORE'}
          </button>
          <button onClick={onRestart}
            className="w-full py-4 bg-white/10 text-white rounded-2xl font-[1000] text-base uppercase italic tracking-widest hover:bg-white/20 transition-all flex items-center justify-center gap-3 border border-white/10">
            <RefreshCcw size={20} /> {lang === 'el' ? 'ΠΑΙΞΕ ΑΛΛΟ' : 'PLAY ANOTHER'}
          </button>
        </div>
      </motion.div>
    );
  }

  // ════════════════════════════════════
  // RENDER: FAIL SCREEN
  // ════════════════════════════════════
  if (showFailScreen) {
    return (
      <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}
        className="max-w-xl mx-auto text-center py-16 px-8 glass-panel rounded-[3rem] border border-rose-500/30 bg-gradient-to-b from-slate-900 to-rose-900/20">
        <div className="mb-6 relative inline-block">
          <AlertTriangle size={80} className="text-rose-500 fill-rose-500/20 animate-pulse" />
        </div>
        <h2 className="text-4xl font-[1000] text-white mb-4 uppercase italic tracking-tighter">
          {lang === 'el' ? 'Μην τα παρατάς!' : "Don't Give Up!"}
        </h2>
        <p className="text-rose-300 font-bold uppercase tracking-widest mb-8 text-sm">
          {lang === 'el' ? `Σκορ Επιπέδου: ${levelScore}/${QUESTIONS_PER_LEVEL}` : `Level Score: ${levelScore}/${QUESTIONS_PER_LEVEL}`}
        </p>
        <button onClick={retryLevel}
          className="w-full py-5 bg-white text-black rounded-2xl font-[1000] text-xl uppercase italic tracking-widest hover:scale-105 transition-all shadow-xl flex items-center justify-center gap-3">
          <RefreshCcw size={24} /> {lang === 'el' ? 'ΠΡΟΣΠΑΘΗΣΕ ΞΑΝΑ' : 'TRY AGAIN'}
        </button>
      </motion.div>
    );
  }

  // ════════════════════════════════════
  // RENDER: LEVEL REWARD
  // ════════════════════════════════════
  if (showLevelReward) {
    return (
      <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}
        className="max-w-xl mx-auto text-center py-16 px-8 glass-panel rounded-[3rem] border border-emerald-500/30 bg-gradient-to-b from-slate-900 to-emerald-900/20">
        <div className="mb-6 relative inline-block">
          <Star size={80} className="text-yellow-400 fill-yellow-400 animate-spin-slow" />
          <div className="absolute inset-0 blur-xl bg-yellow-400/30 rounded-full" />
        </div>
        <h2 className="text-4xl font-[1000] text-white mb-4 uppercase italic tracking-tighter">
          {lang === 'el' ? `Επίπεδο ${currentLevel} Ολοκληρώθηκε!` : `Level ${currentLevel} Complete!`}
        </h2>
        <p className="text-emerald-300 font-bold uppercase tracking-widest mb-4 text-sm">
          {lang === 'el' ? 'Συνέχισε δυνατά!' : 'Keep going strong!'}
        </p>
        {/* Show streak if active */}
        {streak >= 3 && (
          <p className="text-orange-400 font-[1000] text-lg italic mb-6 animate-pulse">
            🔥 {streak} {lang === 'el' ? 'σερί σωστές!' : 'correct in a row!'}
          </p>
        )}
        <button onClick={advanceQuestion}
          className="w-full py-5 bg-white text-black rounded-2xl font-[1000] text-xl uppercase italic tracking-widest hover:scale-105 transition-all shadow-xl flex items-center justify-center gap-3">
          {lang === 'el' ? 'ΠΑΜΕ ΕΠΟΜΕΝΟ LEVEL' : 'GO TO NEXT LEVEL'} <ArrowRight size={24} />
        </button>
      </motion.div>
    );
  }

  // ════════════════════════════════════
  // RENDER: QUESTION
  // ════════════════════════════════════
  const streakLabel = getStreakLabel();

  return (
    <div className="max-w-3xl mx-auto relative"
      style={shakeWrong ? { animation: 'qe-shake 0.5s ease-in-out' } : undefined}
    >
      {/* Resume notice */}
      <AnimatePresence>
        {showResumeNotice && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mb-6 p-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl flex items-center justify-between gap-3"
          >
            <div className="flex items-center gap-3">
              <Zap size={18} className="text-blue-400 shrink-0" />
              <p className="text-blue-300 font-bold text-sm">
                {lang === 'el'
                  ? `Συνεχίζεις από ερώτηση ${currentIdx + 1}!`
                  : `Resuming from question ${currentIdx + 1}!`}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Challenge banner */}
      {challengeData && (
        <div className="mb-6 p-4 bg-gradient-to-r from-purple-500/10 to-fuchsia-500/10 border border-purple-500/20 rounded-2xl flex items-center gap-3">
          <Users size={20} className="text-purple-400 shrink-0" />
          <p className="text-purple-300 font-bold text-sm">
            {lang === 'el'
              ? `${challengeData.from} πήρε ${challengeData.score}/${questions.length}! Μπορείς;`
              : `${challengeData.from} scored ${challengeData.score}/${questions.length}! Can you beat it?`}
          </p>
        </div>
      )}

      {/* HYPE MESSAGE OVERLAY */}
      <AnimatePresence>
        {hypeMessage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 0 }}
            animate={{ opacity: 1, scale: 1.5, y: -50 }}
            exit={{ opacity: 0 }}
            className="absolute top-0 left-0 right-0 z-50 flex justify-center pointer-events-none"
          >
            <div className="text-4xl md:text-6xl font-[1000] text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)] uppercase italic tracking-tighter rotate-[-5deg]">
              {hypeMessage}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* STREAK MESSAGE */}
      {streakLabel && !showExplanation && (
        <div className="mb-4 text-center">
          <span className="text-lg font-[1000] text-orange-400 uppercase italic tracking-wider animate-pulse">
            {streakLabel} <span className="text-white/50 text-sm">x{streak}</span>
          </span>
        </div>
      )}

      {/* ─── HEADER ─── */}
      <div className="mb-6 flex justify-between items-center">
        <div>
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span className="px-3 py-1 bg-blue-600/20 text-blue-400 border border-blue-500/30 rounded-lg text-[10px] font-black uppercase tracking-widest">
              LEVEL {currentLevel}/{totalLevels}
            </span>
            <span className="px-3 py-1 bg-purple-600/20 text-purple-400 border border-purple-500/30 rounded-lg text-[10px] font-black uppercase tracking-widest">
              Q{currentIdx + 1}
            </span>
            {streak >= 3 && (
              <span className="px-3 py-1 bg-orange-600/20 text-orange-400 border border-orange-500/30 rounded-lg text-[10px] font-black uppercase tracking-widest flex items-center gap-1">
                <Flame size={10} fill="currentColor" /> {streak}
              </span>
            )}
          </div>
          <h2 className="text-xl md:text-2xl font-[1000] text-white uppercase italic tracking-tighter">{topic}</h2>
        </div>

        <div className="flex items-center gap-3">
          <div className="glass-panel px-4 py-2 rounded-xl font-black text-white italic border-white/20 text-sm hidden md:block">
            {totalPoints} <span className="text-white/40 text-[9px] not-italic">PTS</span>
          </div>
          <CircleTimer timeLeft={timeLeft} total={TIMER_SECONDS} />
        </div>
      </div>

      {/* Level progress bar */}
      <div className="w-full bg-white/5 h-2 rounded-full mb-4 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${((currentIdx % QUESTIONS_PER_LEVEL) / QUESTIONS_PER_LEVEL) * 100}%` }}
          className="h-full bg-blue-500"
        />
      </div>

      {/* Speed multiplier indicator */}
      {!showExplanation && (
        <div className="flex justify-end mb-3">
          <div className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest border transition-all ${
            timeLeft > 12 ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' :
            timeLeft > 8 ? 'bg-amber-500/20 text-amber-400 border-amber-500/30' :
            timeLeft > 3 ? 'bg-white/10 text-white/50 border-white/10' :
            'bg-red-500/20 text-red-400 border-red-500/30'
          }`}>
            {timeLeft > 12 ? '⚡ 2x' : timeLeft > 8 ? '✨ 1.5x' : timeLeft > 3 ? '1x' : '0.5x'} {lang === 'el' ? 'ΠΟΝΤΟΙ' : 'POINTS'}
          </div>
        </div>
      )}

      {/* ─── QUESTION CARD ─── */}
      <div
        className="glass-panel rounded-[2.5rem] shadow-2xl border border-white/10 p-8 md:p-10 relative overflow-hidden transition-all duration-300"
        style={flashCorrect ? { animation: 'qe-flash 0.5s ease-out' } : undefined}
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />

        <p className="text-xl md:text-2xl text-white font-black italic mb-10 leading-snug relative z-10">
          {currentQuestion.q[lang]}
        </p>

        <div className="space-y-4 relative z-10">
          {currentQuestion.options[lang].map((option, idx) => {
            let borderClass = 'border-white/10';
            let bgClass = 'hover:bg-white/5';
            let textClass = 'text-white/80';
            let icon = null;

            if (showExplanation) {
              if (idx === currentQuestion.correct) {
                borderClass = 'border-emerald-500 ring-2 ring-emerald-500/20';
                bgClass = 'bg-emerald-500/10';
                textClass = 'text-emerald-400';
                icon = <CheckCircle2 className="text-emerald-500" size={24} />;
              } else if (idx === selectedIdx) {
                borderClass = 'border-rose-500 ring-2 ring-rose-500/20';
                bgClass = 'bg-rose-500/10';
                textClass = 'text-rose-400';
                icon = <XCircle className="text-rose-500" size={24} />;
              } else {
                bgClass = 'opacity-50';
              }
            }

            return (
              <button key={idx} onClick={() => handleSelect(idx)} disabled={showExplanation}
                className={`w-full text-left p-5 rounded-2xl border-2 transition-all duration-300 flex items-center justify-between group ${borderClass} ${bgClass} ${textClass}`}
              >
                <span className="font-bold text-base">{option}</span>
                {icon}
              </button>
            );
          })}
        </div>

        {/* Explanation + Next */}
        {showExplanation && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-8 pt-8 border-t border-white/10">
            {/* Points earned this question */}
            {selectedIdx !== null && selectedIdx >= 0 && selectedIdx === currentQuestion.correct && (
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="text-emerald-400 font-[1000] text-lg italic">+{lastPointsEarned} pts</span>
                {lastPointsEarned >= 150 && (
                  <span className="px-2 py-0.5 bg-amber-500/20 text-amber-400 text-[10px] font-black rounded-lg border border-amber-500/20 uppercase">
                    ⚡ {lang === 'el' ? 'ΓΡΗΓΟΡΟΣ' : 'FAST'}
                  </span>
                )}
              </div>
            )}

            {/* Timeout indicator */}
            {selectedIdx === -1 && (
              <div className="p-4 rounded-2xl bg-red-900/20 border border-red-500/20 mb-4 flex items-center gap-3">
                <Clock size={20} className="text-red-400" />
                <p className="text-red-400 font-bold italic">{lang === 'el' ? 'Τέλος χρόνου!' : "Time's up!"}</p>
              </div>
            )}

            <div className={`p-6 rounded-2xl border mb-6 ${
              (selectedIdx !== null && selectedIdx >= 0 && selectedIdx === currentQuestion.correct)
                ? 'bg-emerald-900/20 border-emerald-500/20' : 'bg-rose-900/20 border-rose-500/20'
            }`}>
              <h4 className={`font-black mb-2 uppercase tracking-widest text-xs italic flex items-center gap-2 ${
                (selectedIdx !== null && selectedIdx >= 0 && selectedIdx === currentQuestion.correct)
                  ? 'text-emerald-400' : 'text-rose-400'
              }`}>
                <Brain size={14} /> WiseBot Explanation:
              </h4>
              <p className="text-white/90 leading-relaxed font-bold italic text-base">
                {currentQuestion.explanation ? currentQuestion.explanation[lang] : (lang === 'el' ? 'Καλή προσπάθεια!' : 'Good try!')}
              </p>
            </div>

            <button onClick={handleNext}
              className="w-full flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-xl font-[1000] hover:scale-[1.02] transition-all uppercase tracking-widest italic shadow-lg">
              {isLevelEnd
                ? (lang === 'el' ? 'ΕΛΕΓΧΟΣ ΕΠΙΠΕΔΟΥ...' : 'CHECKING LEVEL...')
                : (lang === 'el' ? 'ΕΠΟΜΕΝΗ ΕΡΩΤΗΣΗ' : 'NEXT QUESTION')} <ArrowRight size={20} />
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default QuizEngine;
