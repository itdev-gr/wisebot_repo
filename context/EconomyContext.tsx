
import React, { createContext, useContext, useState, useEffect, useRef, useCallback } from 'react';
import { motion as m, AnimatePresence } from 'framer-motion';
import { Zap, Trophy, Star } from 'lucide-react';

const motion = m as any;

// --- TYPES ---
export interface Badges {
  thinker: boolean;   // Unlocked via Academy & Quizzes
  creator: boolean;   // Unlocked via Image Generation
  filmmaker: boolean; // Unlocked via Video Generation
  builder: boolean;   // Unlocked via Completing Hero
  market: boolean;    // Unlocked via Sharing/Selling
}

export interface EconomyStats {
  quizzesPassed: number;
  imagesCreated: number;
  videosCreated: number;
  heroesUploaded: number; // Used for "Sales" tracking
  lessonsRead: number;
  booksRead: number;
  businessesCreated: number;
}

export interface DailyMission {
  id: number;
  date: string; // YYYY-MM-DD
  completed: boolean;
}

export interface RewardNotification {
  id: number;
  emoji: string;
  title: string;
  subtitle?: string;
  type: 'credit' | 'badge' | 'achievement';
}

interface EconomyContextType {
  credits: number;
  badges: Badges;
  stats: EconomyStats;
  costs: {
    image: number;
    video: number;
  };
  dailyMission: DailyMission;
  spendCredits: (amount: number) => boolean;
  earnCredits: (amount: number) => void;
  trackAction: (action: 'PASS_QUIZ' | 'CREATE_IMAGE' | 'CREATE_VIDEO' | 'UPLOAD_HERO' | 'COMPLETE_HERO' | 'READ_ACADEMY' | 'READ_BOOK' | 'CREATE_BUSINESS') => void;
}

const EconomyContext = createContext<EconomyContextType | undefined>(undefined);

// --- CONSTANTS ---
const INITIAL_CREDITS = 10;
const BASE_COST_IMAGE = 3;
const BASE_COST_VIDEO = 7;
const DAILY_MISSION_REWARD = 3;

// Mission pool: id maps to action type that completes it
export const MISSION_POOL = [
  { id: 0, action: 'READ_ACADEMY', el: 'Διάβασε 1 ιστορία στην Ακαδημία', en: 'Read 1 story in Academy' },
  { id: 1, action: 'READ_BOOK', el: 'Διάβασε 1 βιβλίο στη Βιβλιοθήκη', en: 'Read 1 book in Library' },
  { id: 2, action: 'PASS_QUIZ', el: 'Πέρνα 1 Quiz', en: 'Pass 1 Quiz' },
  { id: 3, action: 'CREATE_IMAGE', el: 'Δημιούργησε 1 ήρωα', en: 'Create 1 hero' },
  { id: 4, action: 'CREATE_BUSINESS', el: 'Φτιάξε 1 επιχείρηση', en: 'Create 1 business' },
  { id: 5, action: 'READ_ACADEMY', el: 'Μάθε για 1 σπουδαίο άνθρωπο', en: 'Learn about 1 great person' },
];

const getTodayStr = () => new Date().toISOString().split('T')[0];

const getTodayMission = (): DailyMission => {
  const today = getTodayStr();
  const saved = localStorage.getItem('wb_daily_mission');
  if (saved) {
    const parsed = JSON.parse(saved) as DailyMission;
    if (parsed.date === today) return parsed;
  }
  // New day → pick mission based on day-of-year for consistency
  const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000);
  const mission: DailyMission = { id: dayOfYear % MISSION_POOL.length, date: today, completed: false };
  localStorage.setItem('wb_daily_mission', JSON.stringify(mission));
  return mission;
};

// ─── REWARD TOAST COMPONENT ──────────────────────────────────────
const RewardToast: React.FC<{ notification: RewardNotification; onDismiss: () => void }> = ({ notification, onDismiss }) => {
  useEffect(() => {
    const timer = setTimeout(onDismiss, 4500);
    return () => clearTimeout(timer);
  }, [onDismiss]);

  const bgStyle = notification.type === 'badge'
    ? 'from-purple-900/95 to-indigo-900/95 border-purple-400/50 shadow-purple-500/40'
    : notification.type === 'achievement'
    ? 'from-amber-900/95 to-orange-900/95 border-amber-400/50 shadow-amber-500/40'
    : 'from-emerald-900/95 to-teal-900/95 border-emerald-400/50 shadow-emerald-500/40';

  return (
    <motion.div
      initial={{ y: -100, opacity: 0, scale: 0.6, rotateX: 45 }}
      animate={{ y: 0, opacity: 1, scale: 1, rotateX: 0 }}
      exit={{ y: -60, opacity: 0, scale: 0.8, rotateX: -20 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`relative px-7 py-5 rounded-2xl bg-gradient-to-r ${bgStyle} border backdrop-blur-xl shadow-2xl flex items-center gap-5 min-w-[300px] max-w-[420px] overflow-hidden`}
    >
      {/* Glow pulse behind emoji */}
      <motion.div
        animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute left-6 w-12 h-12 rounded-full blur-xl"
        style={{ background: notification.type === 'badge' ? 'rgba(168,85,247,0.4)' : notification.type === 'achievement' ? 'rgba(251,191,36,0.4)' : 'rgba(16,185,129,0.4)' }}
      />

      {/* Shimmer line */}
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: '200%' }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
      />

      <motion.span
        initial={{ scale: 0, rotate: -30 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 400, damping: 10, delay: 0.15 }}
        className="text-4xl relative z-10 drop-shadow-lg"
      >
        {notification.emoji}
      </motion.span>

      <div className="relative z-10 flex-1 min-w-0">
        <motion.p
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="text-white font-[1000] text-sm uppercase italic tracking-wider truncate"
        >
          {notification.title}
        </motion.p>
        {notification.subtitle && (
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35 }}
            className="text-white/60 text-xs font-bold uppercase tracking-wide mt-0.5"
          >
            {notification.subtitle}
          </motion.p>
        )}
      </div>

      {/* Progress bar auto-dismiss */}
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        transition={{ duration: 4.5, ease: 'linear' }}
        className="absolute bottom-0 left-0 right-0 h-1 origin-left"
        style={{ background: notification.type === 'badge' ? 'rgba(168,85,247,0.6)' : notification.type === 'achievement' ? 'rgba(251,191,36,0.6)' : 'rgba(16,185,129,0.6)' }}
      />
    </motion.div>
  );
}

// ─── ECONOMY PROVIDER ────────────────────────────────────────────
export const EconomyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // 1. STATE INITIALIZATION (Persisted)
  const [credits, setCredits] = useState<number>(() => {
    const saved = localStorage.getItem('wb_credits');
    return saved ? parseInt(saved) : INITIAL_CREDITS;
  });

  const [stats, setStats] = useState<EconomyStats>(() => {
    const saved = localStorage.getItem('wb_stats');
    return saved ? { quizzesPassed: 0, imagesCreated: 0, videosCreated: 0, heroesUploaded: 0, lessonsRead: 0, booksRead: 0, businessesCreated: 0, ...JSON.parse(saved) } : { quizzesPassed: 0, imagesCreated: 0, videosCreated: 0, heroesUploaded: 0, lessonsRead: 0, booksRead: 0, businessesCreated: 0 };
  });

  const [badges, setBadges] = useState<Badges>(() => {
    const saved = localStorage.getItem('wb_badges');
    return saved ? JSON.parse(saved) : { thinker: false, creator: false, filmmaker: false, builder: false, market: false };
  });

  const [dailyMission, setDailyMission] = useState<DailyMission>(getTodayMission);

  // ─── NOTIFICATION SYSTEM ───
  const [notifications, setNotifications] = useState<RewardNotification[]>([]);
  const notifIdRef = useRef(0);

  const showReward = useCallback((emoji: string, title: string, subtitle?: string, type: 'credit' | 'badge' | 'achievement' = 'credit') => {
    const id = ++notifIdRef.current;
    setNotifications(prev => [...prev, { id, emoji, title, subtitle, type }]);
  }, []);

  const dismissNotification = useCallback((id: number) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  }, []);

  // 2. PERSISTENCE
  useEffect(() => { localStorage.setItem('wb_credits', credits.toString()); }, [credits]);
  useEffect(() => { localStorage.setItem('wb_stats', JSON.stringify(stats)); }, [stats]);
  useEffect(() => { localStorage.setItem('wb_badges', JSON.stringify(badges)); }, [badges]);

  // 3. DYNAMIC COSTS
  const costs = {
    image: badges.thinker ? BASE_COST_IMAGE - 1 : BASE_COST_IMAGE,
    video: badges.filmmaker ? BASE_COST_VIDEO - 2 : BASE_COST_VIDEO,
  };

  // 4. ACTIONS
  const spendCredits = (amount: number): boolean => {
    if (credits >= amount) {
      setCredits(prev => prev - amount);
      return true;
    }
    return false;
  };

  const earnCredits = (amount: number) => {
    setCredits(prev => prev + amount);
  };

  const completeDailyMission = (action: string) => {
    if (dailyMission.completed) return;
    const missionDef = MISSION_POOL[dailyMission.id];
    if (missionDef && missionDef.action === action) {
      const updated = { ...dailyMission, completed: true };
      setDailyMission(updated);
      localStorage.setItem('wb_daily_mission', JSON.stringify(updated));
      earnCredits(DAILY_MISSION_REWARD);
      // Show daily mission complete toast
      setTimeout(() => showReward('🎯', 'DAILY MISSION COMPLETE!', `+${DAILY_MISSION_REWARD} Credits`, 'achievement'), 800);
    }
  };

  const trackAction = (action: 'PASS_QUIZ' | 'CREATE_IMAGE' | 'CREATE_VIDEO' | 'UPLOAD_HERO' | 'COMPLETE_HERO' | 'READ_ACADEMY' | 'READ_BOOK' | 'CREATE_BUSINESS') => {
    completeDailyMission(action);
    setStats(prev => {
      const newStats = { ...prev };
      let newBadges = { ...badges };
      let badgeUnlocked = false;

      switch (action) {
        case 'PASS_QUIZ':
          newStats.quizzesPassed += 1;
          // RULE: Every 3 quizzes = 1 Credit
          if (newStats.quizzesPassed % 3 === 0) {
             earnCredits(1);
             showReward('🎉', 'QUIZ SET COMPLETE!', '+1 Credit', 'credit');
          }
          // RULE: 5 Quizzes = Thinker Badge (Knowledge)
          if (newStats.quizzesPassed >= 5 && !newBadges.thinker) {
            newBadges.thinker = true;
            badgeUnlocked = true;
            setTimeout(() => showReward('🧠', 'THINKER BADGE!', 'Knowledge Master', 'badge'), 600);
          }
          break;

        case 'READ_BOOK':
          newStats.booksRead += 1;
          // RULE: 1 Book = 1 Credit
          earnCredits(1);
          showReward('📚', 'BOOK COMPLETE!', '+1 Credit', 'credit');
          break;

        case 'READ_ACADEMY':
          newStats.lessonsRead += 1;
          // RULE: Academy helps unlock Thinker Badge
          if (newStats.lessonsRead >= 5 && !newBadges.thinker) {
             newBadges.thinker = true;
             badgeUnlocked = true;
             setTimeout(() => showReward('🧠', 'THINKER BADGE!', 'Knowledge Master', 'badge'), 600);
          }
          break;

        case 'CREATE_IMAGE':
          newStats.imagesCreated += 1;
          if (newStats.imagesCreated >= 5 && !newBadges.creator) {
            newBadges.creator = true;
            badgeUnlocked = true;
            showReward('🎨', 'CREATOR BADGE!', 'Art Master', 'badge');
          }
          break;

        case 'CREATE_VIDEO':
          newStats.videosCreated += 1;
          if (newStats.videosCreated >= 2 && !newBadges.filmmaker) {
            newBadges.filmmaker = true;
            badgeUnlocked = true;
            showReward('🎬', 'FILMMAKER BADGE!', 'Video Master', 'badge');
          }
          break;

        case 'COMPLETE_HERO':
          if (!newBadges.builder) {
            newBadges.builder = true;
            badgeUnlocked = true;
            showReward('⚙️', 'BUILDER BADGE!', 'Hero Engineer', 'badge');
          }
          break;

        case 'UPLOAD_HERO':
          newStats.heroesUploaded += 1;
          // Unlocks "Trader" Badge (Market)
          if (!newBadges.market) {
            newBadges.market = true;
            badgeUnlocked = true;
            showReward('🏪', 'TRADER BADGE!', 'Market Master', 'badge');
          }
          break;

        case 'CREATE_BUSINESS':
          newStats.businessesCreated += 1;
          earnCredits(2);
          showReward('💼', 'BUSINESS CREATED!', '+2 Credits', 'credit');
          break;
      }

      if (badgeUnlocked) setBadges(newBadges);
      return newStats;
    });
  };

  return (
    <EconomyContext.Provider value={{ credits, badges, stats, costs, dailyMission, spendCredits, earnCredits, trackAction }}>
      {children}

      {/* ─── REWARD TOAST NOTIFICATIONS ─── */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[99999] flex flex-col items-center gap-3 pointer-events-none">
        <AnimatePresence mode="popLayout">
          {notifications.map(n => (
            <RewardToast
              key={n.id}
              notification={n}
              onDismiss={() => dismissNotification(n.id)}
            />
          ))}
        </AnimatePresence>
      </div>
    </EconomyContext.Provider>
  );
};

export const useEconomy = () => {
  const context = useContext(EconomyContext);
  if (!context) throw new Error('useEconomy must be used within an EconomyProvider');
  return context;
};
