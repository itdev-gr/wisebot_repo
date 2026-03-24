/**
 * SCREEN TIME GUARD
 * ==================
 * Shows a gentle overlay when screen time limit is reached.
 * Reads limits from localStorage (set by parent in ParentDashboard).
 * Tracks active time per category (game/learn/create).
 */
import React, { useState, useEffect, useRef } from 'react';
import { Clock, Sparkles, BookOpen, Gamepad2, PenTool, X } from 'lucide-react';

interface ScreenLimits {
  games: number;
  learn: number;
  create: number;
  enabled: boolean;
}

interface Props {
  lang: 'el' | 'en';
  currentCategory: 'game' | 'learn' | 'create' | null;
}

const TEXT = {
  el: {
    title: 'Ώρα για κάτι νέο!',
    gameLimit: 'Ο χρόνος παιχνιδιών τελείωσε! Πάμε να μάθουμε κάτι;',
    learnLimit: 'Μπράβο που διάβασες! Θέλεις να δημιουργήσεις κάτι;',
    createLimit: 'Υπέροχες δημιουργίες! Ώρα για ένα quiz;',
    suggestLearn: '📚 Πάμε Quiz',
    suggestCreate: '🎨 Φτιάξε κάτι',
    suggestGame: '🎮 Παίξε λίγο',
    dismiss: 'Θα συνεχίσω αργότερα',
    minutesLeft: 'λεπτά ακόμα',
  },
  en: {
    title: 'Time for something new!',
    gameLimit: 'Game time is up! Let\'s learn something?',
    learnLimit: 'Great reading! Want to create something?',
    createLimit: 'Amazing creations! Time for a quiz?',
    suggestLearn: '📚 Take a Quiz',
    suggestCreate: '🎨 Create something',
    suggestGame: '🎮 Play a game',
    dismiss: 'I\'ll continue later',
    minutesLeft: 'minutes left',
  },
};

export default function ScreenTimeGuard({ lang, currentCategory }: Props) {
  const [show, setShow] = useState(false);
  const [minutesUsed, setMinutesUsed] = useState(0);
  const [limit, setLimit] = useState(0);
  const startTimeRef = useRef<number>(Date.now());
  const t = TEXT[lang];

  useEffect(() => {
    if (!currentCategory) return;

    // Read limits
    let limits: ScreenLimits;
    try {
      limits = JSON.parse(localStorage.getItem('wb_screen_limits') || '{}');
    } catch { return; }

    if (!limits.enabled) return;

    const categoryLimit = currentCategory === 'game' ? limits.games
      : currentCategory === 'learn' ? limits.learn
      : limits.create;

    if (!categoryLimit || categoryLimit <= 0) return;
    setLimit(categoryLimit);

    // Track time
    startTimeRef.current = Date.now();

    const interval = setInterval(() => {
      const elapsed = Math.floor((Date.now() - startTimeRef.current) / 60000);
      setMinutesUsed(elapsed);

      if (elapsed >= categoryLimit) {
        setShow(true);
      }
    }, 30000); // Check every 30 seconds

    return () => clearInterval(interval);
  }, [currentCategory]);

  if (!show || !currentCategory) return null;

  const limitMsg = currentCategory === 'game' ? t.gameLimit
    : currentCategory === 'learn' ? t.learnLimit
    : t.createLimit;

  const suggestRoute = currentCategory === 'game' ? '/quiz'
    : currentCategory === 'learn' ? '/factory'
    : '/game';

  const suggestText = currentCategory === 'game' ? t.suggestLearn
    : currentCategory === 'learn' ? t.suggestCreate
    : t.suggestGame;

  return (
    <div className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-xl flex items-center justify-center p-4">
      <div className="bg-[#0B0F1A] border border-white/20 rounded-3xl p-8 max-w-md w-full text-center space-y-6 shadow-2xl">
        <div className="w-20 h-20 mx-auto bg-amber-500/20 rounded-3xl flex items-center justify-center border border-amber-500/30">
          <Clock size={40} className="text-amber-400" />
        </div>

        <div>
          <h2 className="text-2xl font-black text-white uppercase italic tracking-tighter">
            {t.title}
          </h2>
          <p className="text-white/60 text-sm mt-2 leading-relaxed">
            {limitMsg}
          </p>
        </div>

        <div className="space-y-3">
          <a
            href={`#${suggestRoute}`}
            onClick={() => setShow(false)}
            className="block w-full py-3 bg-gradient-to-r from-blue-600/30 to-purple-600/30 border border-blue-500/30 rounded-2xl text-white font-black uppercase text-sm hover:border-blue-400/60 transition-all"
          >
            <Sparkles size={16} className="inline mr-2" />
            {suggestText}
          </a>

          <button
            onClick={() => setShow(false)}
            className="w-full py-2 text-white/30 text-xs font-bold hover:text-white/50 transition-colors"
          >
            {t.dismiss}
          </button>
        </div>
      </div>
    </div>
  );
}
