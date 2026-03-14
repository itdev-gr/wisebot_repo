
import React, { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { Rocket, Book, Wand2, Zap, ArrowRight, Sparkles, X } from 'lucide-react';
import { useEconomy } from '../context/EconomyContext';

interface OnboardingOverlayProps {
  lang: 'el' | 'en';
}

interface OnboardingStep {
  icon: React.ReactNode;
  title: { el: string; en: string };
  desc: { el: string; en: string };
  color: string;
  emoji: string;
}

const STEPS: OnboardingStep[] = [
  {
    icon: <Rocket size={40} className="text-amber-400" />,
    title: { el: 'ΚΑΛΩΣ ΗΡΘΕΣ!', en: 'WELCOME!' },
    desc: {
      el: 'Αυτό είναι το Αρχηγείο σου! Από εδώ ξεκινάει η περιπέτεια.',
      en: "This is your HQ! Your adventure starts here.",
    },
    color: 'amber',
    emoji: '🏰',
  },
  {
    icon: <Book size={40} className="text-blue-400" />,
    title: { el: 'ΔΙΑΒΑΣΕ ΙΣΤΟΡΙΕΣ', en: 'READ STORIES' },
    desc: {
      el: 'Ξεκίνα εδώ! Διάβασε ιστορίες σπουδαίων ανθρώπων και μάθε μαθήματα ζωής.',
      en: 'Start here! Read stories of great people and learn life lessons.',
    },
    color: 'blue',
    emoji: '📚',
  },
  {
    icon: <Wand2 size={40} className="text-purple-400" />,
    title: { el: 'ΦΤΙΑΞΕ ΗΡΩΑ!', en: 'CREATE A HERO!' },
    desc: {
      el: 'Φτιάξε τον δικό σου 3D ήρωα με AI! Δώσε του δυνάμεις και όνομα.',
      en: 'Create your own 3D hero with AI! Give it powers and a name.',
    },
    color: 'purple',
    emoji: '🦸‍♂️',
  },
  {
    icon: <Zap size={40} className="text-emerald-400" />,
    title: { el: 'ΠΗΡΕΣ 5 CREDITS!', en: 'YOU GOT 5 CREDITS!' },
    desc: {
      el: 'Μπράβο! Ξεκίνα να εξερευνείς. Κέρδισε περισσότερα Credits κάνοντας Quests!',
      en: "Awesome! Start exploring. Earn more Credits by completing Quests!",
    },
    color: 'emerald',
    emoji: '⚡',
  },
];

// CSS animations injected once
const STYLE_ID = 'onboarding-styles';
const injectStyles = () => {
  if (document.getElementById(STYLE_ID)) return;
  const style = document.createElement('style');
  style.id = STYLE_ID;
  style.textContent = `
    @keyframes ob-fadeIn { from { opacity: 0 } to { opacity: 1 } }
    @keyframes ob-slideUp { from { opacity: 0; transform: translateY(40px) scale(0.95) } to { opacity: 1; transform: translateY(0) scale(1) } }
    @keyframes ob-bounce { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-10px) } }
    @keyframes ob-glow { 0%,100% { box-shadow: 0 0 20px rgba(245,158,11,0.3) } 50% { box-shadow: 0 0 40px rgba(245,158,11,0.6) } }
    @keyframes ob-confetti { 0% { transform: translate(0,0) scale(0); opacity: 1 } 50% { opacity: 1; transform: translate(var(--dx), var(--dy)) scale(1) } 100% { opacity: 0; transform: translate(var(--dx2), var(--dy2)) scale(0.5) rotate(var(--rot)) } }
  `;
  document.head.appendChild(style);
};

export default function OnboardingOverlay({ lang }: OnboardingOverlayProps) {
  const { earnCredits } = useEconomy();
  const [show, setShow] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    injectStyles();
    const done = localStorage.getItem('wb_onboarding_done');
    if (!done) {
      const timer = setTimeout(() => setShow(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleNext = useCallback(() => {
    if (currentStep < STEPS.length - 1) {
      setCurrentStep(s => s + 1);
      // On last step, award credits
      if (currentStep === STEPS.length - 2) {
        earnCredits(5);
        setShowConfetti(true);
      }
    } else {
      // Done
      localStorage.setItem('wb_onboarding_done', 'true');
      setShow(false);
    }
  }, [currentStep, earnCredits]);

  const handleSkip = useCallback(() => {
    localStorage.setItem('wb_onboarding_done', 'true');
    setShow(false);
  }, []);

  const confettiParticles = React.useMemo(() =>
    Array.from({ length: 16 }).map((_, i) => ({
      dx: `${(Math.random() - 0.5) * 250}px`,
      dy: `${(Math.random() - 0.5) * 250}px`,
      dx2: `${(Math.random() - 0.5) * 350}px`,
      dy2: `${(Math.random() - 0.5) * 350}px`,
      rot: `${Math.random() * 720}deg`,
      delay: `${Math.random() * 0.3}s`,
      color: ['#fbbf24', '#f472b6', '#60a5fa', '#34d399', '#a78bfa', '#fb923c'][i % 6],
    }))
  , []);

  if (!show) return null;

  const step = STEPS[currentStep];
  const isLast = currentStep === STEPS.length - 1;
  const colorMap: Record<string, string> = {
    amber: 'from-amber-500/20 to-amber-900/10 border-amber-500/30',
    blue: 'from-blue-500/20 to-blue-900/10 border-blue-500/30',
    purple: 'from-purple-500/20 to-purple-900/10 border-purple-500/30',
    emerald: 'from-emerald-500/20 to-emerald-900/10 border-emerald-500/30',
  };
  const btnColor: Record<string, string> = {
    amber: 'from-amber-500 to-orange-500',
    blue: 'from-blue-500 to-indigo-600',
    purple: 'from-purple-500 to-fuchsia-600',
    emerald: 'from-emerald-500 to-teal-600',
  };

  return createPortal(
    <div
      className="fixed inset-0 flex items-center justify-center p-6 bg-black/85 backdrop-blur-xl"
      style={{ zIndex: 99998, animation: 'ob-fadeIn 0.4s ease-out forwards' }}
    >
      {/* Content Card */}
      <div
        key={currentStep}
        className={`relative w-full max-w-md bg-gradient-to-b ${colorMap[step.color]} rounded-[2.5rem] border backdrop-blur-2xl overflow-hidden`}
        style={{ animation: 'ob-slideUp 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards' }}
      >
        {/* Ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[200px] bg-white/5 rounded-full blur-[80px] pointer-events-none" />

        {/* Skip button */}
        <button
          onClick={handleSkip}
          className="absolute top-5 right-5 z-20 p-2 bg-white/5 hover:bg-white/10 rounded-full text-white/30 hover:text-white transition-all border border-white/5"
        >
          <X size={16} />
        </button>

        <div className="relative z-10 p-8 flex flex-col items-center text-center space-y-6">
          {/* Step indicator */}
          <div className="flex gap-2">
            {STEPS.map((_, i) => (
              <div
                key={i}
                className={`w-8 h-1.5 rounded-full transition-all duration-500 ${
                  i <= currentStep ? 'bg-white' : 'bg-white/15'
                }`}
              />
            ))}
          </div>

          {/* Emoji + Icon */}
          <div
            className="w-24 h-24 rounded-3xl bg-white/10 flex items-center justify-center"
            style={{ animation: 'ob-bounce 2s ease-in-out infinite' }}
          >
            <span className="text-5xl">{step.emoji}</span>
          </div>

          {/* Title */}
          <div>
            <h2 className="text-3xl font-[1000] text-white uppercase italic tracking-tighter">
              {step.title[lang]}
            </h2>
            <p className="text-white/50 text-sm font-bold mt-2 leading-relaxed max-w-sm">
              {step.desc[lang]}
            </p>
          </div>

          {/* Step number */}
          <div className="text-white/20 text-xs font-black uppercase tracking-[0.3em]">
            {currentStep + 1} / {STEPS.length}
          </div>

          {/* Action button */}
          <button
            onClick={handleNext}
            className={`w-full py-4 rounded-2xl bg-gradient-to-r ${btnColor[step.color]} text-white font-[1000] text-lg uppercase italic tracking-wider shadow-lg hover:brightness-110 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3`}
            style={isLast ? { animation: 'ob-glow 1.5s ease-in-out infinite' } : undefined}
          >
            {isLast ? (
              <><Sparkles size={22} /> {lang === 'el' ? 'ΞΕΚΙΝΑ!' : "LET'S GO!"}</>
            ) : (
              <><ArrowRight size={22} /> {lang === 'el' ? 'ΕΠΟΜΕΝΟ' : 'NEXT'}</>
            )}
          </button>
        </div>

        {/* Confetti on last step */}
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
                  animation: `ob-confetti 1.5s ${p.delay} ease-out forwards`,
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
