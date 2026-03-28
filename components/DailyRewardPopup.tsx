
import React, { useState, useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { Gift, Zap, Flame, Crown, X, Sparkles, Check } from 'lucide-react';
import { useEconomy } from '../context/EconomyContext';

interface DailyRewardPopupProps {
  lang: 'el' | 'en';
}

interface StreakData {
  lastClaimDate: string;
  streak: number;
  totalClaimed: number;
}

const STREAK_REWARDS = [1, 2, 2, 3, 3, 5, 10];

const DAY_LABELS = {
  el: ['ΔΕΥ', 'ΤΡΙ', 'ΤΕΤ', 'ΠΕΜ', 'ΠΑΡ', 'ΣΑΒ', 'ΚΥΡ'],
  en: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
};

const getStreakData = (): StreakData => {
  try {
    const raw = localStorage.getItem('wb_daily_streak');
    if (raw) return JSON.parse(raw);
  } catch {}
  return { lastClaimDate: '', streak: 0, totalClaimed: 0 };
};

const saveStreakData = (data: StreakData) => {
  localStorage.setItem('wb_daily_streak', JSON.stringify(data));
};

const isToday = (dateStr: string) => dateStr === new Date().toISOString().split('T')[0];

const isYesterday = (dateStr: string) => {
  const y = new Date();
  y.setDate(y.getDate() - 1);
  return dateStr === y.toISOString().split('T')[0];
};

// CSS keyframes injected once
const STYLE_ID = 'daily-reward-styles';
const injectStyles = () => {
  if (document.getElementById(STYLE_ID)) return;
  const style = document.createElement('style');
  style.id = STYLE_ID;
  style.textContent = `
    @keyframes dr-fadeIn { from { opacity: 0 } to { opacity: 1 } }
    @keyframes dr-popIn { from { opacity: 0; transform: scale(0.7) translateY(30px) } to { opacity: 1; transform: scale(1) translateY(0) } }
    @keyframes dr-float { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-8px) } }
    @keyframes dr-pulse { 0%,100% { transform: scale(1) } 50% { transform: scale(1.1) } }
    @keyframes dr-shake { 0% { transform: rotate(0) scale(1) } 20% { transform: rotate(-10deg) scale(1.2) } 40% { transform: rotate(10deg) scale(1.15) } 60% { transform: rotate(-5deg) scale(1.1) } 80% { transform: rotate(5deg) scale(1.05) } 100% { transform: rotate(0) scale(1) } }
    @keyframes dr-confetti { 0% { transform: translate(0,0) scale(0); opacity: 1 } 50% { opacity: 1; transform: translate(var(--dx), var(--dy)) scale(1) } 100% { opacity: 0; transform: translate(var(--dx2), var(--dy2)) scale(0.5) rotate(var(--rot)) } }
  `;
  document.head.appendChild(style);
};

export default function DailyRewardPopup({ lang }: DailyRewardPopupProps) {
  const { earnCredits } = useEconomy();
  const [show, setShow] = useState(false);
  const [claimed, setClaimed] = useState(false);
  const [rewardAmount, setRewardAmount] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    injectStyles();
    const data = getStreakData();
    if (!isToday(data.lastClaimDate)) {
      const timer = setTimeout(() => setShow(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const currentStreak = useMemo(() => {
    const data = getStreakData();
    if (isToday(data.lastClaimDate)) return data.streak;
    if (isYesterday(data.lastClaimDate)) return data.streak;
    return 0;
  }, []);

  const todayRewardIndex = Math.min(currentStreak, STREAK_REWARDS.length - 1);
  const todayReward = STREAK_REWARDS[todayRewardIndex];
  const isDay7 = todayRewardIndex === STREAK_REWARDS.length - 1;

  const handleClaim = () => {
    const data = getStreakData();
    const newStreak = isYesterday(data.lastClaimDate) ? data.streak + 1 : 1;
    const clampedStreak = Math.min(newStreak, STREAK_REWARDS.length);
    const reward = STREAK_REWARDS[Math.min(clampedStreak - 1, STREAK_REWARDS.length - 1)];

    earnCredits(reward);
    setRewardAmount(reward);
    setClaimed(true);
    setShowConfetti(true);

    const newData: StreakData = {
      lastClaimDate: new Date().toISOString().split('T')[0],
      streak: clampedStreak >= STREAK_REWARDS.length ? 0 : clampedStreak,
      totalClaimed: data.totalClaimed + reward,
    };
    saveStreakData(newData);
    setTimeout(() => setShow(false), 2500);
  };

  const confettiParticles = useMemo(() =>
    Array.from({ length: 20 }).map((_, i) => ({
      dx: `${(Math.random() - 0.5) * 300}px`,
      dy: `${(Math.random() - 0.5) * 300}px`,
      dx2: `${(Math.random() - 0.5) * 400}px`,
      dy2: `${(Math.random() - 0.5) * 400}px`,
      rot: `${Math.random() * 720}deg`,
      delay: `${Math.random() * 0.3}s`,
      color: ['#fbbf24', '#f472b6', '#60a5fa', '#34d399', '#a78bfa', '#fb923c'][i % 6],
    }))
  , []);

  const txt = lang === 'el' ? {
    title: 'ΗΜΕΡΗΣΙΟ ΔΩΡΟ!',
    subtitle: 'Επέστρεψες! Πάρε την ανταμοιβή σου.',
    claim: 'ΠΑΡΕ ΤΟ ΔΩΡΟ',
    credits: 'CREDITS',
    congrats: 'Μπράβο! Συνέχισε αύριο!',
    day7: 'MEGA ΔΩΡΟ!',
  } : {
    title: 'DAILY REWARD!',
    subtitle: "You're back! Claim your reward.",
    claim: 'CLAIM REWARD',
    credits: 'CREDITS',
    congrats: 'Nice! Come back tomorrow!',
    day7: 'MEGA REWARD!',
  };

  if (!show) return null;

  return createPortal(
    <div
      className="fixed inset-0 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl"
      style={{ zIndex: 99999, animation: 'dr-fadeIn 0.3s ease-out forwards' }}
      onClick={() => !claimed && setShow(false)}
    >
      <div
        onClick={(e: React.MouseEvent) => e.stopPropagation()}
        className="relative w-full max-w-md bg-gradient-to-b from-[#1a1a3e] to-[#0B0F1A] rounded-[2.5rem] border border-white/10 shadow-[0_0_80px_rgba(245,158,11,0.2)] overflow-hidden"
        style={{ animation: 'dr-popIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards' }}
      >
        {/* Ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[200px] bg-amber-500/15 rounded-full blur-[80px] pointer-events-none" />

        {/* Close button */}
        {!claimed && (
          <button
            onClick={() => setShow(false)}
            className="absolute top-5 right-5 z-20 p-2 bg-white/5 hover:bg-white/10 rounded-full text-white/40 hover:text-white transition-all border border-white/5"
          >
            <X size={18} />
          </button>
        )}

        <div className="relative z-10 p-8 flex flex-col items-center text-center space-y-6">
          {/* Treasure chest icon */}
          <div
            className={`w-24 h-24 rounded-3xl flex items-center justify-center ${
              claimed
                ? 'bg-emerald-500/20 shadow-[0_0_60px_rgba(16,185,129,0.5)] border border-emerald-500/30'
                : 'bg-amber-500/20 shadow-[0_0_60px_rgba(245,158,11,0.5)] border border-amber-500/30'
            }`}
            style={{ animation: claimed ? 'dr-shake 0.6s ease-out' : 'dr-float 2s ease-in-out infinite' }}
          >
            {claimed ? (
              <Check size={48} className="text-emerald-400" />
            ) : isDay7 ? (
              <Crown size={48} className="text-amber-400" />
            ) : (
              <Gift size={48} className="text-amber-400" />
            )}
          </div>

          {/* Title */}
          <div>
            <h2 className="text-3xl font-[1000] text-white uppercase italic tracking-tighter">
              {claimed ? `+${rewardAmount}` : isDay7 ? txt.day7 : txt.title}
            </h2>
            <p className="text-white/50 text-sm font-bold mt-1">
              {claimed ? txt.congrats : txt.subtitle}
            </p>
          </div>

          {/* 7-Day Streak Calendar */}
          <div className="w-full grid grid-cols-7 gap-1.5">
            {STREAK_REWARDS.map((reward, i) => {
              const isPast = i < currentStreak;
              const isCurrent = i === currentStreak && !claimed;
              const isJustClaimed = i === currentStreak && claimed;
              const isFuture = i > currentStreak;

              return (
                <div key={i} className="flex flex-col items-center gap-1">
                  <span className="text-[8px] font-black text-white/30 uppercase tracking-widest">
                    {DAY_LABELS[lang][i]}
                  </span>
                  <div
                    className={`w-full aspect-square rounded-xl flex flex-col items-center justify-center border transition-all duration-300 ${
                      isPast || isJustClaimed
                        ? 'bg-emerald-500/25 border-emerald-500/40 text-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.15)]'
                        : isCurrent
                        ? 'bg-amber-500/25 border-amber-500/50 text-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.4)] scale-105'
                        : 'bg-white/[0.03] border-white/[0.06] text-white/20'
                    }`}
                    style={isCurrent ? { animation: 'dr-pulse 1.5s ease-in-out infinite' } : undefined}
                  >
                    {isPast || isJustClaimed ? (
                      <Check size={14} />
                    ) : i === STREAK_REWARDS.length - 1 ? (
                      <Crown size={14} className={isCurrent ? 'text-amber-400' : 'text-white/20'} />
                    ) : (
                      <Zap size={12} className={isFuture ? 'text-white/20' : ''} />
                    )}
                    <span className="text-[9px] font-[1000] mt-0.5">{reward}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Streak counter */}
          {currentStreak > 0 && (
            <div className="flex items-center gap-2 bg-orange-500/10 px-4 py-2 rounded-full border border-orange-500/20">
              <Flame size={16} className="text-orange-400" />
              <span className="text-xs font-black text-orange-300 uppercase tracking-widest">
                {currentStreak} {lang === 'el' ? 'μέρες σερί!' : 'day streak!'}
              </span>
            </div>
          )}

          {/* Claim button */}
          {!claimed ? (
            <button
              onClick={handleClaim}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-white font-[1000] text-lg uppercase italic tracking-wider shadow-[0_8px_40px_rgba(245,158,11,0.5)] flex items-center justify-center gap-3 hover:brightness-110 hover:scale-105 hover:shadow-[0_8px_50px_rgba(245,158,11,0.6)] active:scale-95 transition-all duration-300"
            >
              <Gift size={22} />
              {txt.claim} (+{todayReward} <Zap size={16} fill="currentColor" className="inline" />)
            </button>
          ) : (
            <div className="w-full py-4 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 font-[1000] text-lg uppercase italic tracking-wider flex items-center justify-center gap-3">
              <Sparkles size={22} />
              +{rewardAmount} {txt.credits}!
            </div>
          )}
        </div>

        {/* Confetti particles */}
        {showConfetti && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
            {confettiParticles.map((p, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 rounded-full left-1/2 top-[40%]"
                style={{
                  backgroundColor: p.color,
                  '--dx': p.dx, '--dy': p.dy,
                  '--dx2': p.dx2, '--dy2': p.dy2,
                  '--rot': p.rot,
                  animation: `dr-confetti 1.5s ${p.delay} ease-out forwards`,
                } as React.CSSProperties}
              />
            ))}
          </div>
        )}
      </div>
    </div>,
    document.body
  );
}
