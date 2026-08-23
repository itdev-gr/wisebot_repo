
import React, { createContext, useContext, useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { motion as m, AnimatePresence } from 'framer-motion';
import { Zap, Trophy, Star, X, Brain, Palette, Clapperboard, Hammer, Store, Music, FlaskConical, Globe } from 'lucide-react';

const motion = m as any;

// --- TYPES ---
export interface Badges {
  thinker: boolean;    // Unlocked via Academy & Quizzes (5 quizzes OR 5 lessons)
  creator: boolean;    // Unlocked via Image Generation (5 images)
  filmmaker: boolean;  // Unlocked via Video Generation (2 videos)
  builder: boolean;    // Unlocked via Completing Hero (1 hero)
  market: boolean;     // Unlocked via Sharing/Selling (1 hero upload)
  musician: boolean;   // Unlocked via Creating Songs (3 songs) → Song cost -2
  scientist: boolean;  // Unlocked via Quizzes (10 quizzes) → +1 credit per quiz
  explorer: boolean;   // Unlocked via Academy (10 stories) → Daily mission +2
}

export interface EconomyStats {
  quizzesPassed: number;
  imagesCreated: number;
  videosCreated: number;
  heroesUploaded: number; // Used for "Sales" tracking
  lessonsRead: number;
  booksRead: number;
  businessesCreated: number;
  songsCreated: number;   // Tracks songs for musician badge
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

// Badge celebration data
interface BadgeCelebration {
  key: string;
  title: string;
  subtitle: string;
  emoji: string;
  gradient: string;
}

interface ActivityLogEntry {
  action: string;
  category: 'game' | 'learn' | 'create';
  timestamp: string; // ISO date
}

interface ScreenLimits {
  games: number;    // minutes per day
  learn: number;
  create: number;
  enabled: boolean;
}

type ActionType = 'PASS_QUIZ' | 'CREATE_IMAGE' | 'CREATE_VIDEO' | 'UPLOAD_HERO' | 'COMPLETE_HERO' | 'READ_ACADEMY' | 'READ_BOOK' | 'CREATE_BUSINESS' | 'CREATE_SONG';

interface EconomyContextType {
  credits: number;
  badges: Badges;
  stats: EconomyStats;
  costs: {
    image: number;
    video: number;
    song: number;
    threeD: number;
    business: number;
  };
  dailyMission: DailyMission;
  streak: number;
  spendCredits: (amount: number) => boolean;
  /**
   * Reward effort with XP (⭐), never with credits. Credits are bought; XP, levels
   * and badges are earned. Dispatches `wb:xp` for App.tsx, which owns XP/level.
   */
  earnXp: (amount: number, action?: string) => void;
  /**
   * The single free credit: finish a whole book AND pass its quiz → +1⚡, once per
   * book, verified and recorded by the server (api/auth/earn.ts).
   */
  claimBookReward: (bookId: number) => Promise<void>;
  /**
   * Undo a local `spendCredits` after a paid request failed. Local only — the
   * server refunds its own charge (api/_lib/auth.ts refundCredits) and may send
   * the authoritative balance, which wins when provided.
   */
  refundCredits: (amount: number, serverBalance?: number | null) => void;
  trackAction: (action: ActionType) => void;
  showNotification: (emoji: string, title: string, subtitle?: string) => void;
  /** Cloud sync: bulk-update state from Supabase data */
  syncFromCloud: (credits: number, stats: EconomyStats, badges: Badges) => void;
}

const EconomyContext = createContext<EconomyContextType | undefined>(undefined);

// --- CONSTANTS ---
// 1 credit = €0.05 (at Starter rate: 100 credits = €4.99)
// New users (and guests) start with a small free balance — matches the DB
// default (profiles.credits = 10). Credits are earned through activities or
// bought in the store; the server enforces balances on paid AI endpoints.
const INITIAL_CREDITS = 10;
// Balances from the old "unlimited credits" era — reset them to the default.
const LEGACY_UNLIMITED_THRESHOLD = 100000;
const BASE_COST_IMAGE = 6;        // 6⚡ = €0.30  | API cost: ~€0.03  | margin: ~90%
const BASE_COST_VIDEO = 80;       // 80⚡ = €4.00  | API cost: ~€1.65-2.65 (Veo2) | margin: ~35-60%
const BASE_COST_SONG = 60;        // 60⚡ = €3.00  | API cost: ~€0.10-0.25 | margin: ~92%
const BASE_COST_3D = 60;          // 60⚡ = €3.00  | API cost: ~€0.20-0.45 (Meshy) | margin: ~85%
const BASE_COST_BUSINESS = 4;     // 4⚡ = €0.20   | API cost: ~€0.001 (Gemini) | margin: ~99%
// XP (⭐) for effort. Credits are not earned by activity (24 Αυγούστου 2026): the
// one exception is claimBookReward → 1⚡ for a finished book + passed quiz.
const XP_DAILY_MISSION = 30;
const XP_QUIZ = 20;
const XP_STORY = 20;
const XP_BOOK = 50;
const XP_BUSINESS = 30;

// Default state shapes (used for initialization & migration)
const DEFAULT_BADGES: Badges = { thinker: false, creator: false, filmmaker: false, builder: false, market: false, musician: false, scientist: false, explorer: false };
const DEFAULT_STATS: EconomyStats = { quizzesPassed: 0, imagesCreated: 0, videosCreated: 0, heroesUploaded: 0, lessonsRead: 0, booksRead: 0, businessesCreated: 0, songsCreated: 0 };

// Mission pool: expanded from 6 to 12 missions
export const MISSION_POOL = [
  { id: 0, action: 'READ_ACADEMY', el: 'Διάβασε 1 ιστορία στην Ακαδημία', en: 'Read 1 story in Academy' },
  { id: 1, action: 'READ_BOOK', el: 'Διάβασε 1 βιβλίο στη Βιβλιοθήκη', en: 'Read 1 book in Library' },
  { id: 2, action: 'PASS_QUIZ', el: 'Πέρνα 1 Quiz', en: 'Pass 1 Quiz' },
  { id: 3, action: 'CREATE_IMAGE', el: 'Δημιούργησε 1 ήρωα', en: 'Create 1 hero' },
  { id: 4, action: 'CREATE_BUSINESS', el: 'Φτιάξε 1 επιχείρηση', en: 'Create 1 business' },
  { id: 5, action: 'READ_ACADEMY', el: 'Μάθε για 1 σπουδαίο άνθρωπο', en: 'Learn about 1 great person' },
  { id: 6, action: 'CREATE_SONG', el: 'Φτιάξε 1 τραγούδι', en: 'Create 1 song' },
  { id: 7, action: 'PASS_QUIZ', el: 'Κέρδισε 1 πρόκληση', en: 'Win 1 challenge' },
  { id: 8, action: 'CREATE_IMAGE', el: 'Σχεδίασε 1 νέο χαρακτήρα', en: 'Design 1 new character' },
  { id: 9, action: 'READ_BOOK', el: 'Εξερεύνησε 1 ιστορία', en: 'Explore 1 story' },
  { id: 10, action: 'CREATE_BUSINESS', el: 'Ανάπτυξε 1 ιδέα', en: 'Develop 1 idea' },
  { id: 11, action: 'READ_ACADEMY', el: 'Ανακάλυψε 1 μυστικό', en: 'Discover 1 secret' },
];

// Badge metadata for celebration
const BADGE_META: Record<string, { icon: any; gradient: string; titleEl: string; titleEn: string; subtitleEl: string; subtitleEn: string }> = {
  thinker:   { icon: Brain,        gradient: 'from-blue-400 via-cyan-500 to-blue-600',       titleEl: 'ΣΤΟΧΑΣΤΗΣ',     titleEn: 'THINKER',    subtitleEl: '5 quiz ή 5 ιστορίες',              subtitleEn: '5 quizzes or 5 stories' },
  creator:   { icon: Palette,      gradient: 'from-pink-400 via-rose-500 to-red-600',        titleEl: 'ΔΗΜΙΟΥΡΓΟΣ',    titleEn: 'CREATOR',    subtitleEl: '5 ήρωες',           subtitleEn: '5 heroes' },
  filmmaker: { icon: Clapperboard, gradient: 'from-amber-400 via-orange-500 to-red-600',     titleEl: 'ΣΚΗΝΟΘΕΤΗΣ',    titleEn: 'DIRECTOR',   subtitleEl: '2 ταινίες',             subtitleEn: '2 movies' },
  builder:   { icon: Hammer,       gradient: 'from-emerald-400 via-green-500 to-teal-600',   titleEl: 'ΜΑΣΤΟΡΑΣ',      titleEn: 'BUILDER',    subtitleEl: 'Ολοκληρωμένος ήρωας',         subtitleEn: 'Completed hero' },
  market:    { icon: Store,        gradient: 'from-violet-400 via-purple-500 to-indigo-600',  titleEl: 'ΕΜΠΟΡΟΣ',       titleEn: 'TRADER',     subtitleEl: 'Πρώτη πώληση στην Αγορά',               subtitleEn: 'First sale in the Market' },
  musician:  { icon: Music,        gradient: 'from-fuchsia-400 via-pink-500 to-purple-600',   titleEl: 'ΜΟΥΣΙΚΟΣ',      titleEn: 'MUSICIAN',   subtitleEl: '3 τραγούδια',           subtitleEn: '3 songs' },
  scientist: { icon: FlaskConical, gradient: 'from-lime-400 via-green-500 to-emerald-600',   titleEl: 'ΕΠΙΣΤΗΜΟΝΑΣ',   titleEn: 'SCIENTIST',  subtitleEl: '10 quiz · Quiz +10 XP',         subtitleEn: '10 quizzes · Quiz +10 XP' },
  explorer:  { icon: Globe,        gradient: 'from-sky-400 via-blue-500 to-indigo-600',      titleEl: 'ΕΞΕΡΕΥΝΗΤΗΣ',   titleEn: 'EXPLORER',   subtitleEl: '10 ιστορίες · Αποστολή +20 XP',           subtitleEn: '10 stories · Mission +20 XP' },
};

// ─── ACTIVITY LOG HELPERS ────────────────────────────────────────
function getActivityLog(): ActivityLogEntry[] {
  try {
    const raw = localStorage.getItem('wb_activity_log');
    if (!raw) return [];
    const log = JSON.parse(raw) as ActivityLogEntry[];
    // Keep only last 30 days
    const cutoff = new Date();
    cutoff.setDate(cutoff.getDate() - 30);
    return log.filter(e => new Date(e.timestamp) > cutoff);
  } catch { return []; }
}

function saveActivityLog(log: ActivityLogEntry[]) {
  localStorage.setItem('wb_activity_log', JSON.stringify(log.slice(-500))); // max 500 entries
}

function getScreenLimits(): ScreenLimits {
  try {
    const raw = localStorage.getItem('wb_screen_limits');
    if (!raw) return { games: 30, learn: 60, create: 30, enabled: false };
    return JSON.parse(raw);
  } catch { return { games: 30, learn: 60, create: 30, enabled: false }; }
}

function getTodayMinutes(category: 'game' | 'learn' | 'create'): number {
  const today = new Date().toISOString().slice(0, 10);
  const log = getActivityLog();
  return log.filter(e => e.category === category && e.timestamp.startsWith(today)).length; // Each entry ≈ 1 action, not minutes
}

// Map action types to categories
function getActionCategory(action: string): 'game' | 'learn' | 'create' {
  const a = action.toLowerCase();
  if (['quiz', 'lesson', 'book', 'story', 'academy'].some(k => a.includes(k))) return 'learn';
  if (['image', 'video', 'song', 'music', 'business', '3d', 'hero'].some(k => a.includes(k))) return 'create';
  return 'game';
}

const getTodayStr = () => new Date().toISOString().split('T')[0];

const getTodayMission = (): DailyMission => {
  const today = getTodayStr();
  const saved = localStorage.getItem('wb_daily_mission');
  if (saved) {
    try {
      const parsed = JSON.parse(saved) as DailyMission;
      if (parsed.date === today) return parsed;
    } catch { /* corrupted data, regenerate mission */ }
  }
  // New day -> pick mission based on day-of-year for consistency
  const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000);
  const mission: DailyMission = { id: dayOfYear % MISSION_POOL.length, date: today, completed: false };
  localStorage.setItem('wb_daily_mission', JSON.stringify(mission));
  return mission;
};

// Streak calculation
const getStreak = (): number => {
  const saved = localStorage.getItem('wb_streak');
  if (!saved) return 0;
  try {
    const { count, lastDate } = JSON.parse(saved);
    const today = getTodayStr();
    const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
    if (lastDate === today) return count;
    if (lastDate === yesterday) return count; // streak alive, not yet incremented today
    return 0; // streak broken
  } catch { /* corrupted data, use default */ return 0; }
};

const updateStreak = () => {
  const saved = localStorage.getItem('wb_streak');
  const today = getTodayStr();
  if (saved) {
    try {
      const { count, lastDate } = JSON.parse(saved);
      if (lastDate === today) return count; // already updated today
      const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
      const newCount = lastDate === yesterday ? count + 1 : 1;
      localStorage.setItem('wb_streak', JSON.stringify({ count: newCount, lastDate: today }));
      return newCount;
    } catch { /* corrupted data, reset streak */ }
  }
  localStorage.setItem('wb_streak', JSON.stringify({ count: 1, lastDate: today }));
  return 1;
};

// ─── CONFETTI PARTICLE ──────────────────────────────────────
const Particle: React.FC<{ delay: number; color: string }> = ({ delay, color }) => {
  const x = Math.random() * 100;
  const size = 4 + Math.random() * 8;
  const duration = 2 + Math.random() * 2;

  return (
    <motion.div
      initial={{ y: '-10vh', x: `${x}vw`, opacity: 1, rotate: 0, scale: 1 }}
      animate={{ y: '110vh', opacity: 0, rotate: 360 + Math.random() * 720, scale: 0.3 }}
      transition={{ duration, delay, ease: 'easeIn' }}
      style={{
        position: 'absolute', width: size, height: size, borderRadius: Math.random() > 0.5 ? '50%' : '2px',
        background: color, left: 0, top: 0, zIndex: 1,
      }}
    />
  );
};

// ─── BADGE CELEBRATION FULLSCREEN ──────────────────────────
const BadgeCelebrationOverlay: React.FC<{
  badge: BadgeCelebration | null;
  onDismiss: () => void;
}> = ({ badge, onDismiss }) => {
  useEffect(() => {
    if (badge) {
      const timer = setTimeout(onDismiss, 6000);
      return () => clearTimeout(timer);
    }
  }, [badge, onDismiss]);

  if (!badge) return null;

  const meta = BADGE_META[badge.key];
  if (!meta) return null;

  const BadgeIcon = meta.icon;
  const confettiColors = ['#60a5fa', '#a78bfa', '#f472b6', '#34d399', '#fbbf24', '#fb923c', '#22d3ee', '#e879f9'];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100000] flex items-center justify-center"
      onClick={onDismiss}
    >
      {/* Dark backdrop */}
      <div className="absolute inset-0 bg-black/85 backdrop-blur-xl" />

      {/* Confetti particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 60 }).map((_, i) => (
          <Particle key={i} delay={i * 0.05} color={confettiColors[i % confettiColors.length]} />
        ))}
      </div>

      {/* Central content */}
      <motion.div
        initial={{ scale: 0, rotateY: 180 }}
        animate={{ scale: 1, rotateY: 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.2 }}
        className="relative z-10 flex flex-col items-center text-center px-8"
        onClick={e => e.stopPropagation()}
      >
        {/* Glow rings */}
        <motion.div
          animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
          className={`absolute w-64 h-64 rounded-full bg-gradient-to-r ${meta.gradient} blur-3xl opacity-30`}
        />
        <motion.div
          animate={{ scale: [1.2, 1.8, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 0.3 }}
          className={`absolute w-80 h-80 rounded-full bg-gradient-to-r ${meta.gradient} blur-[80px] opacity-20`}
        />

        {/* Badge icon */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 12, delay: 0.4 }}
          className={`relative w-32 h-32 rounded-[2rem] bg-gradient-to-br ${meta.gradient} flex items-center justify-center shadow-2xl border-4 border-white/30 mb-8`}
        >
          <BadgeIcon size={56} className="text-white drop-shadow-xl" />
          {/* Shine sweep */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '200%' }}
            transition={{ duration: 1, delay: 0.8 }}
            className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 rounded-[2rem]"
          />
        </motion.div>

        {/* BADGE UNLOCKED label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-3"
        >
          <span className="text-xs font-black uppercase tracking-[0.5em] text-white/50">
            BADGE UNLOCKED
          </span>
        </motion.div>

        {/* Badge title */}
        <motion.h2
          initial={{ opacity: 0, y: 30, scale: 0.5 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 12, delay: 0.7 }}
          className={`text-5xl md:text-7xl font-[1000] uppercase italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r ${meta.gradient} drop-shadow-2xl mb-4`}
        >
          {badge.title}
        </motion.h2>

        {/* Subtitle / bonus */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="text-lg font-bold text-white/70 uppercase tracking-wider"
        >
          {badge.subtitle}
        </motion.p>

        {/* Emoji */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.3, 1] }}
          transition={{ delay: 1.1, duration: 0.5 }}
          className="text-6xl mt-6"
        >
          {badge.emoji}
        </motion.div>

        {/* Tap to dismiss */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="text-xs text-white/30 mt-8 uppercase tracking-widest"
        >
          Tap to continue
        </motion.p>
      </motion.div>
    </motion.div>
  );
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
export const EconomyProvider: React.FC<{ children: React.ReactNode; lang?: 'el' | 'en' }> = ({ children, lang = 'el' }) => {
  // Read through a ref inside trackAction: listing `lang` in that useCallback's deps would
  // change its identity on a language switch and re-fire every effect that depends on it —
  // including paid generations (the H1 shape from AUDIT-BUGS.md).
  const langRef = useRef<'el' | 'en'>(lang);
  useEffect(() => { langRef.current = lang; }, [lang]);
  // 1. STATE INITIALIZATION (Persisted, with migration for new fields)
  const [credits, setCredits] = useState<number>(() => {
    const saved = localStorage.getItem('wb_credits');
    const parsed = saved ? parseInt(saved) : INITIAL_CREDITS;
    if (!Number.isFinite(parsed) || parsed < 0) return INITIAL_CREDITS;
    // Migrate balances saved during the old unlimited-credits era
    if (parsed > LEGACY_UNLIMITED_THRESHOLD) return INITIAL_CREDITS;
    return parsed;
  });

  const [stats, setStats] = useState<EconomyStats>(() => {
    const saved = localStorage.getItem('wb_stats');
    if (!saved) return { ...DEFAULT_STATS };
    try { return { ...DEFAULT_STATS, ...JSON.parse(saved) }; } catch { /* corrupted data, use default */ return { ...DEFAULT_STATS }; }
  });

  const [badges, setBadges] = useState<Badges>(() => {
    const saved = localStorage.getItem('wb_badges');
    if (!saved) return { ...DEFAULT_BADGES };
    try { return { ...DEFAULT_BADGES, ...JSON.parse(saved) }; } catch { /* corrupted data, use default */ return { ...DEFAULT_BADGES }; }
  });

  const [dailyMission, setDailyMission] = useState<DailyMission>(getTodayMission);
  const [streak, setStreak] = useState<number>(getStreak);

  // ─── CREDITS REF (for synchronous reads in spendCredits) ───
  const creditsRef = useRef(credits);
  useEffect(() => { creditsRef.current = credits; }, [credits]);

  // ─── NOTIFICATION SYSTEM ───
  const [notifications, setNotifications] = useState<RewardNotification[]>([]);
  const notifIdRef = useRef(0);

  // ─── BADGE CELEBRATION ───
  const [celebratingBadge, setCelebratingBadge] = useState<BadgeCelebration | null>(null);

  const showReward = useCallback((emoji: string, title: string, subtitle?: string, type: 'credit' | 'badge' | 'achievement' = 'credit') => {
    const id = ++notifIdRef.current;
    setNotifications(prev => [...prev, { id, emoji, title, subtitle, type }]);
  }, []);

  const dismissNotification = useCallback((id: number) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  }, []);

  const showBadgeCelebration = useCallback((key: string, emoji: string, lang: string = 'el') => {
    const meta = BADGE_META[key];
    if (!meta) return;
    setCelebratingBadge({
      key,
      title: lang === 'el' ? meta.titleEl : meta.titleEn,
      subtitle: lang === 'el' ? meta.subtitleEl : meta.subtitleEn,
      emoji,
      gradient: meta.gradient,
    });
  }, []);

  // 2. PERSISTENCE
  useEffect(() => { localStorage.setItem('wb_credits', credits.toString()); }, [credits]);
  useEffect(() => { localStorage.setItem('wb_stats', JSON.stringify(stats)); }, [stats]);
  useEffect(() => { localStorage.setItem('wb_badges', JSON.stringify(badges)); }, [badges]);

  // 3. COSTS — identical to api/_lib/costs.ts. Badge discounts were removed on
  // 24 Αυγούστου 2026: they only ever applied to the displayed price, the server
  // charged the base cost, so a badged child was told 58 and charged 60.
  const costs = useMemo(() => ({
    image: BASE_COST_IMAGE,
    video: BASE_COST_VIDEO,
    song: BASE_COST_SONG,
    threeD: BASE_COST_3D,
    business: BASE_COST_BUSINESS,
  }), []);

  // 4. ACTIONS
  // Real client-side deduction. The server independently enforces and deducts
  // on paid AI endpoints (profiles.credits is the source of truth for
  // logged-in users); this keeps the UI in sync without waiting for a round-trip.
  const spendCredits = useCallback((amount: number): boolean => {
    if (creditsRef.current < amount) return false;
    creditsRef.current -= amount;
    setCredits(prev => Math.max(0, prev - amount));
    return true;
  }, []);

  const earnXp = useCallback((amount: number, action: string = 'ACTIVITY') => {
    if (!Number.isFinite(amount) || amount <= 0) return;
    try {
      window.dispatchEvent(new CustomEvent('wb:xp', { detail: { amount: Math.round(amount), action } }));
    } catch { /* SSR / very old browsers */ }
  }, []);

  const claimBookReward = useCallback(async (bookId: number) => {
    try {
      const { authFetch } = await import('../services/backendApi');
      const res = await authFetch('/api/auth/earn', {
        method: 'POST',
        body: JSON.stringify({ action: 'READ_BOOK', bookId }),
      });
      if (!res.ok) return; // guests (401) and rate limits: no credit, no noise
      const data = await res.json();
      if (typeof data.credits === 'number') {
        creditsRef.current = data.credits;
        setCredits(data.credits);
      }
      if (data.earned > 0) {
        showReward('⚡', langRef.current === 'el' ? '+1 CREDIT!' : '+1 CREDIT!',
          langRef.current === 'el' ? 'Ολόκληρο βιβλίο + quiz. Το κέρδισες.' : 'Whole book + quiz. You earned it.', 'credit');
      }
    } catch { /* offline — the book stays claimable next time */ }
  }, [showReward]);

  const refundCredits = useCallback((amount: number, serverBalance?: number | null) => {
    if (typeof serverBalance === 'number' && Number.isFinite(serverBalance) && serverBalance >= 0) {
      creditsRef.current = serverBalance;
      setCredits(serverBalance);
      return;
    }
    if (amount <= 0) return;
    creditsRef.current += amount;
    setCredits(prev => prev + amount);
  }, []);

  // General-purpose notification (replaces alert() across the app)
  const showNotification = useCallback((emoji: string, title: string, subtitle?: string) => {
    showReward(emoji, title, subtitle, 'credit');
  }, [showReward]);

  // Cloud sync: bulk-update state from merged Supabase data.
  // Uses functional updates with equality checks to avoid unnecessary re-renders
  // (e.g. when cloud data matches local data, no state change → no re-render cascade)
  const syncFromCloud = useCallback((newCredits: number, newStats: EconomyStats, newBadges: Badges) => {
    // Cloud (profiles.credits) is the source of truth for logged-in users.
    const safeCredits = Number.isFinite(newCredits) && newCredits >= 0 ? newCredits : INITIAL_CREDITS;
    creditsRef.current = safeCredits;
    setCredits(prev => prev !== safeCredits ? safeCredits : prev);
    setStats(prev => {
      const merged = { ...DEFAULT_STATS, ...newStats };
      return JSON.stringify(prev) === JSON.stringify(merged) ? prev : merged;
    });
    setBadges(prev => {
      const merged = { ...DEFAULT_BADGES, ...newBadges };
      return JSON.stringify(prev) === JSON.stringify(merged) ? prev : merged;
    });
  }, []);

  // Refs to avoid stale closures in memoized callbacks
  const dailyMissionRef = useRef(dailyMission);
  useEffect(() => { dailyMissionRef.current = dailyMission; }, [dailyMission]);
  const badgesRef = useRef(badges);
  useEffect(() => { badgesRef.current = badges; }, [badges]);
  const statsRef = useRef(stats);
  useEffect(() => { statsRef.current = stats; }, [stats]);

  const completeDailyMission = useCallback((action: string) => {
    const currentMission = dailyMissionRef.current;
    if (currentMission.completed) return;
    const missionDef = MISSION_POOL[currentMission.id];
    if (missionDef && missionDef.action === action) {
      const updated = { ...currentMission, completed: true };
      setDailyMission(updated);
      localStorage.setItem('wb_daily_mission', JSON.stringify(updated));
      const reward = badgesRef.current.explorer ? XP_DAILY_MISSION + 20 : XP_DAILY_MISSION;
      // Update streak
      const newStreak = updateStreak();
      setStreak(newStreak);
      const streakBonus = newStreak >= 7 ? 30 : newStreak >= 3 ? 10 : 0;
      earnXp(reward + streakBonus, 'DAILY_MISSION');
      setTimeout(() => {
        const streakMsg = newStreak > 1 ? ` (${newStreak} streak!)` : '';
        showReward('🎯', langRef.current === 'el' ? 'ΑΠΟΣΤΟΛΗ ΟΛΟΚΛΗΡΩΘΗΚΕ!' : 'DAILY MISSION COMPLETE!', `+${reward + streakBonus} ⭐ XP${streakMsg}`, 'achievement');
      }, 800);
    }
  }, [earnXp, showReward]);

  // trackAction: Updates stats, awards credits, shows notifications, and unlocks badges.
  // IMPORTANT: Side effects (earnXp, showReward) must happen OUTSIDE setStats()
  // because React StrictMode calls state updater functions twice in development.
  const trackAction = useCallback((action: ActionType) => {
    completeDailyMission(action);

    // 1) Compute new stats & badges from current state (pure computation via refs)
    const newStats = { ...statsRef.current };
    const newBadges = { ...badgesRef.current };
    let badgeUnlocked = false;
    let xpReward = 0;
    let rewardEmoji = '';
    let rewardTitle = '';
    let rewardSubtitle = '';
    const pendingBadgeCelebrations: Array<{ key: string; emoji: string; delay: number }> = [];

    switch (action) {
      case 'PASS_QUIZ':
        newStats.quizzesPassed += 1;
        xpReward = newBadges.scientist ? XP_QUIZ + 10 : XP_QUIZ;
        rewardEmoji = '🎉'; rewardTitle = langRef.current === 'el' ? 'ΠΕΡΑΣΕΣ ΤΟ QUIZ!' : 'QUIZ PASSED!'; rewardSubtitle = `+${xpReward} ⭐ XP`;
        if (newStats.quizzesPassed >= 5 && !newBadges.thinker) {
          newBadges.thinker = true; badgeUnlocked = true;
          pendingBadgeCelebrations.push({ key: 'thinker', emoji: '🧠', delay: 800 });
        }
        if (newStats.quizzesPassed >= 10 && !newBadges.scientist) {
          newBadges.scientist = true; badgeUnlocked = true;
          pendingBadgeCelebrations.push({ key: 'scientist', emoji: '🔬', delay: 1400 });
        }
        break;

      case 'READ_BOOK':
        newStats.booksRead += 1;
        xpReward = XP_BOOK;
        rewardEmoji = '📚';
        // The first book is the moment the loop clicks for a child — say so, once.
        // (The 1⚡ for book + quiz arrives separately via claimBookReward.)
        if (newStats.booksRead === 1) {
          rewardTitle = langRef.current === 'el' ? 'ΤΟ ΠΡΩΤΟ ΣΟΥ ΒΙΒΛΙΟ!' : 'YOUR FIRST BOOK!';
          rewardSubtitle = `+${XP_BOOK} ⭐ XP`;
        } else {
          rewardTitle = langRef.current === 'el' ? 'ΤΕΛΕΙΩΣΕΣ ΤΟ ΒΙΒΛΙΟ!' : 'BOOK COMPLETE!';
          rewardSubtitle = `+${XP_BOOK} ⭐ XP`;
        }
        break;

      case 'READ_ACADEMY':
        newStats.lessonsRead += 1;
        xpReward = XP_STORY;
        rewardEmoji = '📖'; rewardTitle = langRef.current === 'el' ? 'ΤΕΛΕΙΩΣΕΣ ΤΗΝ ΙΣΤΟΡΙΑ!' : 'STORY COMPLETE!'; rewardSubtitle = `+${XP_STORY} ⭐ XP`;
        if (newStats.lessonsRead >= 5 && !newBadges.thinker) {
          newBadges.thinker = true; badgeUnlocked = true;
          pendingBadgeCelebrations.push({ key: 'thinker', emoji: '🧠', delay: 800 });
        }
        if (newStats.lessonsRead >= 10 && !newBadges.explorer) {
          newBadges.explorer = true; badgeUnlocked = true;
          pendingBadgeCelebrations.push({ key: 'explorer', emoji: '🌍', delay: 1400 });
        }
        break;

      case 'CREATE_IMAGE':
        newStats.imagesCreated += 1;
        xpReward = 10;
        if (newStats.imagesCreated >= 5 && !newBadges.creator) {
          newBadges.creator = true; badgeUnlocked = true;
          pendingBadgeCelebrations.push({ key: 'creator', emoji: '🎨', delay: 800 });
        }
        break;

      case 'CREATE_VIDEO':
        newStats.videosCreated += 1;
        if (newStats.videosCreated >= 2 && !newBadges.filmmaker) {
          newBadges.filmmaker = true; badgeUnlocked = true;
          pendingBadgeCelebrations.push({ key: 'filmmaker', emoji: '🎬', delay: 800 });
        }
        break;

      case 'COMPLETE_HERO':
        if (!newBadges.builder) {
          newBadges.builder = true; badgeUnlocked = true;
          pendingBadgeCelebrations.push({ key: 'builder', emoji: '⚙️', delay: 800 });
        }
        break;

      case 'UPLOAD_HERO':
        newStats.heroesUploaded += 1;
        if (!newBadges.market) {
          newBadges.market = true; badgeUnlocked = true;
          pendingBadgeCelebrations.push({ key: 'market', emoji: '🏪', delay: 800 });
        }
        break;

      case 'CREATE_BUSINESS':
        newStats.businessesCreated += 1;
        xpReward = XP_BUSINESS;
        rewardEmoji = '💼'; rewardTitle = langRef.current === 'el' ? 'Η ΕΤΑΙΡΕΙΑ ΣΟΥ ΙΔΡΥΘΗΚΕ!' : 'BUSINESS CREATED!'; rewardSubtitle = `+${XP_BUSINESS} ⭐ XP`;
        break;

      case 'CREATE_SONG':
        newStats.songsCreated += 1;
        if (newStats.songsCreated >= 3 && !newBadges.musician) {
          newBadges.musician = true; badgeUnlocked = true;
          pendingBadgeCelebrations.push({ key: 'musician', emoji: '🎵', delay: 800 });
        }
        break;
    }

    // 2) Apply state updates (pure)
    setStats(newStats);
    if (badgeUnlocked) setBadges(newBadges);

    // 3) Side effects: XP & notifications (run once, outside updater)
    if (xpReward > 0) earnXp(xpReward, action);
    if (rewardTitle && !badgeUnlocked) {
      showReward(rewardEmoji, rewardTitle, rewardSubtitle, 'credit');
    } else if (rewardTitle && badgeUnlocked) {
      showReward(rewardEmoji, rewardTitle, rewardSubtitle, 'credit');
    }

    // Show cinematic badge celebration (replaces the old badge toasts)
    pendingBadgeCelebrations.forEach(bc => {
      setTimeout(() => showBadgeCelebration(bc.key, bc.emoji), bc.delay);
    });

    // Activity logging
    const category = getActionCategory(action);
    const log = getActivityLog();
    log.push({ action, category, timestamp: new Date().toISOString() });
    saveActivityLog(log);
  }, [completeDailyMission, earnXp, showReward, showBadgeCelebration]);

  const contextValue = useMemo(() => ({
    credits, badges, stats, costs, dailyMission, streak,
    spendCredits, earnXp, claimBookReward, refundCredits, trackAction, showNotification, syncFromCloud,
  }), [credits, badges, stats, costs, dailyMission, streak, spendCredits, earnXp, claimBookReward, refundCredits, trackAction, showNotification, syncFromCloud]);


  return (
    <EconomyContext.Provider value={contextValue}>
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

      {/* ─── BADGE CELEBRATION FULLSCREEN ─── */}
      <AnimatePresence>
        {celebratingBadge && (
          <BadgeCelebrationOverlay
            badge={celebratingBadge}
            onDismiss={() => setCelebratingBadge(null)}
          />
        )}
      </AnimatePresence>
    </EconomyContext.Provider>
  );
};

export const useEconomy = () => {
  const context = useContext(EconomyContext);
  if (!context) throw new Error('useEconomy must be used within an EconomyProvider');
  return context;
};

export { getActivityLog, getScreenLimits, getTodayMinutes, saveActivityLog };
export type { ActivityLogEntry, ScreenLimits };
