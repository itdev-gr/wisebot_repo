
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Trophy,
  ArrowRight,
  Wand2,
  Book,
  Brain,
  Zap,
  Users,
  Clapperboard,
  Box,
  Lock,
  Palette,
  Film,
  Hammer,
  Store,
  Compass,
  GraduationCap,
  Rocket,
  Gamepad2,
  Music,
  Briefcase,
  Star,
  CheckCircle2,
  ChevronRight,
  Target,
  Flame,
  Crown,
  Sparkles,
  Play,
  X,
  Gift,
  Inbox,
} from 'lucide-react';
import { UI_TEXT } from '../constants';
import { useEconomy } from '../context/EconomyContext';
import { useAuth } from '../context/AuthContext';
import DailyMission from './DailyMission';
import DailyRewardPopup from './DailyRewardPopup';
import OnboardingOverlay from './OnboardingOverlay';
import FirstTimeTip, { useChildName } from './FirstTimeTip';
import { isUnlocked, unlockHint } from '../utils/unlocks';
import { makerLevelForXp } from '../data/makerLevels';
import GiftModal from './GiftModal';
import GiftInbox, { useGiftCount } from './GiftInbox';

interface DashboardProps {
  lang: 'el' | 'en';
  xp: number;
  level: number;
  completedIds: string[];
  myHeroes?: any[];
}

// ============================================================
// 🗺️ QUEST STAGES DEFINITION
// ============================================================
interface QuestStage {
  id: number;
  name: { el: string; en: string };
  icon: any;
  color: string;
  quest: { el: string; en: string };
  isComplete: (stats: any, badges: any) => boolean;
}

const QUEST_STAGES: QuestStage[] = [
  {
    id: 0,
    name: { el: 'ΕΞΕΡΕΥΝΗΤΗΣ', en: 'EXPLORER' },
    icon: Compass,
    color: 'blue',
    quest: { el: 'Διάβασε 2 ιστορίες ή 1 βιβλίο', en: 'Read 2 stories or 1 book' },
    isComplete: (s: any) => s.lessonsRead >= 2 || s.booksRead >= 1,
  },
  {
    id: 1,
    name: { el: 'ΣΟΦΟΣ', en: 'SCHOLAR' },
    icon: Brain,
    color: 'purple',
    quest: { el: 'Πέρνα 1 Quiz & Διάβασε 3 ιστορίες', en: 'Pass 1 Quiz & Read 3 stories' },
    isComplete: (s: any) => s.quizzesPassed >= 1 && (s.lessonsRead >= 3 || s.booksRead >= 2),
  },
  {
    id: 2,
    name: { el: 'ΔΗΜΙΟΥΡΓΟΣ', en: 'CREATOR' },
    icon: Wand2,
    color: 'fuchsia',
    quest: { el: 'Δημιούργησε 1 ήρωα', en: 'Create 1 hero image' },
    isComplete: (s: any) => s.imagesCreated >= 1,
  },
  {
    id: 3,
    name: { el: 'ΠΑΡΑΓΩΓΟΣ', en: 'PRODUCER' },
    icon: Clapperboard,
    color: 'pink',
    quest: { el: 'Φτιάξε 1 βίντεο ή πούλα 1 ήρωα', en: 'Create 1 video or sell 1 hero' },
    isComplete: (s: any) => s.videosCreated >= 1 || s.heroesUploaded >= 1,
  },
  {
    id: 4,
    name: { el: 'ΘΡΥΛΟΣ', en: 'LEGEND' },
    icon: Crown,
    color: 'amber',
    quest: { el: 'Κέρδισε το Creator Badge (5 εικόνες)', en: 'Earn the Creator Badge (5 images)' },
    isComplete: (_s: any, b: any) => b.creator === true,
  },
];

const DASHBOARD_VIDEOS = [
  { id: 'dv1', title: { el: 'WISEBOT', en: 'WISEBOT' }, thumbnail: '/images/wisebot.jpg', videoUrl: '/video/wisebot%20claude.mp4' },
  { id: 'dv2', title: { el: 'CROCUS', en: 'CROCUS' }, thumbnail: '/images/crocus.jpg', videoUrl: '/video/crocus%20claude.mp4' },
  { id: 'dv3', title: { el: 'ΤΑ ΠΑΙΔΙΑ ΜΕ ΤΟ WISEBOT', en: 'KIDS WITH WISEBOT' }, thumbnail: '/images/paidia-wisebot-2.webp', videoUrl: '/video/paixnidi%20me%20ai.mp4' },
];

// ============================================================
// 🏆 WEEKLY LEADERBOARD COMPONENT
// ============================================================

// Seeded PRNG (mulberry32)
const seededRandom = (seed: number): number => {
  let t = seed + 0x6D2B79F5;
  t = Math.imul(t ^ t >>> 15, t | 1);
  t ^= t + Math.imul(t ^ t >>> 7, t | 61);
  return ((t ^ t >>> 14) >>> 0) / 4294967296;
};

const getISOWeek = (date: Date): number => {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return Math.ceil((((d.getTime() - yearStart.getTime()) / 86400000) + 1) / 7);
};

const FAKE_NAMES = {
  el: [
    'Αλέξανδρος', 'Μαρία', 'Γιώργος', 'Σοφία', 'Νίκος',
    'Ελένη', 'Δημήτρης', 'Κατερίνα', 'Παναγιώτης', 'Αθηνά',
    'Στέφανος', 'Ιωάννα', 'Κώστας', 'Εύα', 'Βασίλης',
    'Χριστίνα', 'Μιχάλης', 'Δέσποινα', 'Ανδρέας', 'Μαρίνα',
  ],
  en: [
    'Alex', 'Maria', 'George', 'Sophie', 'Nick',
    'Helen', 'James', 'Kate', 'Peter', 'Athena',
    'Steven', 'Joanna', 'Gus', 'Eva', 'Billy',
    'Christine', 'Michael', 'Debbie', 'Andrew', 'Marina',
  ],
};

const FAKE_ACHIEVEMENTS = [
  { el: 'Διάβασε 5 ιστορίες', en: 'Read 5 stories' },
  { el: 'Δημιούργησε 3 ήρωες', en: 'Created 3 heroes' },
  { el: 'Πέρασε 4 Quiz', en: 'Passed 4 quizzes' },
  { el: 'Διάβασε 3 βιβλία', en: 'Read 3 books' },
  { el: 'Έφτιαξε εταιρεία', en: 'Built a business' },
  { el: 'Δημιούργησε 5 ήρωες', en: 'Created 5 heroes' },
  { el: 'Πέρασε 6 Quiz', en: 'Passed 6 quizzes' },
  { el: 'Διάβασε 8 ιστορίες', en: 'Read 8 stories' },
  { el: 'Έφτιαξε 2 εταιρείες', en: 'Built 2 businesses' },
  { el: 'Δημιούργησε βίντεο', en: 'Created a video' },
];

const AVATAR_COLORS = [
  'from-blue-500 to-cyan-500',
  'from-purple-500 to-pink-500',
  'from-amber-500 to-orange-500',
  'from-emerald-500 to-teal-500',
  'from-rose-500 to-red-500',
  'from-indigo-500 to-violet-500',
  'from-fuchsia-500 to-purple-500',
  'from-cyan-500 to-blue-500',
  'from-green-500 to-emerald-500',
  'from-orange-500 to-amber-500',
];

interface LeaderboardEntry {
  name: string;
  avatarColor: string;
  score: number;
  achievement: { el: string; en: string };
  isPlayer: boolean;
}

const WeeklyLeaderboard = ({ lang, stats }: { lang: 'el' | 'en'; stats: any }) => {
  const weekNum = getISOWeek(new Date());
  const yearWeekSeed = new Date().getFullYear() * 100 + weekNum;

  // Calculate player score
  const playerScore =
    (stats.lessonsRead || 0) * 10 +
    (stats.quizzesPassed || 0) * 25 +
    (stats.imagesCreated || 0) * 15 +
    (stats.booksRead || 0) * 20 +
    (stats.businessesCreated || 0) * 30;

  // Generate 9 fake players with seeded random (deterministic per week)
  const fakePlayers: LeaderboardEntry[] = React.useMemo(() => {
    const shuffled = [...FAKE_NAMES[lang]];
    // Fisher-Yates with seeded random
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(seededRandom(yearWeekSeed * 1000 + i) * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return Array.from({ length: 9 }, (_, i) => {
      const r = seededRandom(yearWeekSeed * 100 + i);
      const score = Math.floor(50 + r * 400); // Scores between 50-450
      const achIdx = Math.floor(seededRandom(yearWeekSeed * 200 + i) * FAKE_ACHIEVEMENTS.length);
      const colorIdx = Math.floor(seededRandom(yearWeekSeed * 300 + i) * AVATAR_COLORS.length);

      return {
        name: shuffled[i],
        avatarColor: AVATAR_COLORS[colorIdx],
        score,
        achievement: FAKE_ACHIEVEMENTS[achIdx],
        isPlayer: false,
      };
    });
  }, [yearWeekSeed, lang]);

  // Insert player and sort
  const allPlayers = React.useMemo(() => {
    const playerEntry: LeaderboardEntry = {
      name: lang === 'el' ? 'ΕΣΥ!' : 'YOU!',
      avatarColor: 'from-amber-400 to-yellow-500',
      score: playerScore,
      achievement: {
        el: playerScore > 0 ? 'Συνέχισε!' : 'Ξεκίνα τώρα!',
        en: playerScore > 0 ? 'Keep going!' : 'Start now!',
      },
      isPlayer: true,
    };

    const combined = [...fakePlayers, playerEntry];
    combined.sort((a, b) => b.score - a.score);
    return combined.slice(0, 10);
  }, [fakePlayers, playerScore, lang]);

  // Only show player in top 10 if they have a meaningful score
  const playerRank = playerScore > 0 ? allPlayers.findIndex(p => p.isPlayer) + 1 : 0;
  const isInTop10 = playerRank > 0 && playerRank <= 10;

  // If player not in top 10, calculate what they need
  const top10MinScore = allPlayers[allPlayers.length - 1]?.score || 0;
  const pointsNeeded = isInTop10 ? 0 : top10MinScore - playerScore + 1;

  const rankEmojis = ['👑', '🥈', '🥉'];
  const rankBgColors = [
    'from-amber-500/20 to-yellow-500/10 border-amber-500/40',
    'from-slate-300/10 to-slate-400/5 border-slate-400/30',
    'from-orange-700/15 to-orange-800/5 border-orange-600/30',
  ];

  return (
    <div className="bg-[#0f1014] border-2 border-white/10 rounded-[2rem] p-6 md:p-8 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-amber-500/20 rounded-xl flex items-center justify-center border border-amber-500/30">
            <Trophy size={20} className="text-amber-400" />
          </div>
          <div>
            <h2 className="font-[1000] text-white text-lg italic uppercase tracking-tight">
              {lang === 'el' ? 'TOP 10 ΕΒΔΟΜΑΔΑΣ' : 'WEEKLY TOP 10'}
            </h2>
            <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">
              {lang === 'el' ? `Εβδομάδα ${weekNum}` : `Week ${weekNum}`}
            </p>
          </div>
        </div>
        {isInTop10 && (
          <div className="px-4 py-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 rounded-xl">
            <span className="text-amber-300 font-[1000] text-sm italic">
              #{playerRank}
            </span>
          </div>
        )}
      </div>

      {/* Player rank callout */}
      {isInTop10 ? (
        <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-2xl p-4 flex items-center gap-3">
          <div className="text-3xl">{playerRank <= 3 ? rankEmojis[playerRank - 1] : '🔥'}</div>
          <div>
            <p className="text-amber-300 font-[1000] text-base italic uppercase">
              {lang === 'el'
                ? `Είσαι #${playerRank} αυτή την εβδομάδα!`
                : `You are #${playerRank} this week!`}
            </p>
            <p className="text-white/40 text-xs font-bold">
              {lang === 'el' ? `${playerScore} πόντοι` : `${playerScore} points`}
            </p>
          </div>
        </div>
      ) : (
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-4 flex items-center gap-3">
          <div className="text-3xl">🚀</div>
          <div>
            <p className="text-blue-300 font-[1000] text-sm italic uppercase">
              {lang === 'el'
                ? playerScore === 0
                  ? 'Ξεκίνα το ταξίδι σου!'
                  : `Λίγο ακόμα! Χρειάζεσαι ${pointsNeeded} πόντους!`
                : playerScore === 0
                  ? 'Start your journey!'
                  : `Almost there! You need ${pointsNeeded} points!`}
            </p>
            <p className="text-white/40 text-xs font-bold">
              {lang === 'el'
                ? playerScore === 0
                  ? 'Διάβασε, παίξε quiz, φτιάξε ήρωες!'
                  : `${playerScore} πόντοι - συνέχισε!`
                : playerScore === 0
                  ? 'Read, take quizzes, create heroes!'
                  : `${playerScore} points - keep going!`}
            </p>
          </div>
        </div>
      )}

      {/* Leaderboard list */}
      <div className="space-y-2">
        {allPlayers.map((player, idx) => {
          const rank = idx + 1;
          const isTop3 = rank <= 3;

          return (
            <div
              key={`${player.name}-${idx}`}
              className={`flex items-center gap-3 p-3 rounded-2xl transition-all ${
                player.isPlayer
                  ? 'bg-gradient-to-r from-amber-500/15 to-orange-500/10 border-2 border-amber-500/30 shadow-[0_0_20px_rgba(245,158,11,0.1)]'
                  : isTop3
                    ? `bg-gradient-to-r ${rankBgColors[idx]} border`
                    : 'bg-white/[0.02] border border-white/5 hover:bg-white/[0.04]'
              }`}
            >
              {/* Rank */}
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                isTop3 ? 'text-lg' : 'bg-white/5 text-white/30 font-[1000] text-xs'
              }`}>
                {isTop3 ? rankEmojis[idx] : rank}
              </div>

              {/* Avatar */}
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${player.avatarColor} flex items-center justify-center shrink-0 border border-white/10 ${
                player.isPlayer ? 'ring-2 ring-amber-400/50' : ''
              }`}>
                <span className="text-white font-[1000] text-sm">
                  {player.isPlayer ? '⭐' : player.name.charAt(0)}
                </span>
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <p className={`font-[1000] text-sm uppercase italic tracking-tight truncate ${
                  player.isPlayer ? 'text-amber-300' : 'text-white'
                }`}>
                  {player.name}
                </p>
                <p className="text-white/30 text-[10px] font-bold truncate">
                  {player.achievement[lang]}
                </p>
              </div>

              {/* Score */}
              <div className="text-right shrink-0">
                <p className={`font-[1000] text-lg italic ${
                  player.isPlayer ? 'text-amber-400' : isTop3 ? 'text-white' : 'text-white/60'
                }`}>
                  {player.score}
                </p>
                <p className="text-white/20 text-[8px] font-black uppercase tracking-wider">
                  {lang === 'el' ? 'ΠΟΝΤΟΙ' : 'PTS'}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Motivational footer */}
      <div className="text-center pt-2">
        <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.3em]">
          {lang === 'el'
            ? '📊 Η κατάταξη ανανεώνεται κάθε Δευτέρα'
            : '📊 Rankings reset every Monday'}
        </p>
      </div>
    </div>
  );
};

const Dashboard: React.FC<DashboardProps> = ({ lang, xp, level, completedIds, myHeroes = [] }) => {
  const navigate = useNavigate();
  const { credits, badges, stats, earnXp, syncFromCloud, showNotification } = useEconomy();
  const { user, profile, isGuest } = useAuth();
  const childName = useChildName(lang);
  // Greeting uses the real name only for signed-in children; guests get the headline alone.
  const greetName = !isGuest && profile?.childName?.trim() ? profile.childName.trim() : null;
  const [dashboardVideo, setDashboardVideo] = useState<typeof DASHBOARD_VIDEOS[0] | null>(null);
  const [showGiftModal, setShowGiftModal] = useState(false);
  const [showGiftInbox, setShowGiftInbox] = useState(false);
  const [showFreeSongModal, setShowFreeSongModal] = useState(false);
  const inboxCount = useGiftCount(!!user);

  // ============================================================
  // 🎁 FREE MISSION TRACKER
  // ============================================================
  const academyCount = completedIds.filter(id => id.startsWith('academy-')).length;
  const ebookCount = completedIds.filter(id => id.startsWith('ebook-')).length;
  const missionComplete = academyCount >= 3 && ebookCount >= 1;

  useEffect(() => {
    if (missionComplete && localStorage.getItem('wb_free_song_claimed') !== 'true') {
      localStorage.setItem('wb_free_song_claimed', 'true');
      // The big first mission pays in XP (24 Αυγούστου 2026): credits are bought, effort earns levels.
      earnXp(200, 'BIG_MISSION');
      setShowFreeSongModal(true);
    }
  }, [missionComplete]); // eslint-disable-line react-hooks/exhaustive-deps

  // ============================================================
  // 🔓 UNLOCK LOGIC (Progressive Quest-Based)
  // ============================================================
  // Learning rooms and the Music Studio are always open; the other creation rooms open
  // as the child reads and creates. Rules live in utils/unlocks.ts — one source of truth
  // shared with the menu, the route gate and the unlock celebration.
  const isQuizUnlocked = true;
  const isMusicUnlocked = true;
  const isMarketUnlocked = true;
  const isFactoryUnlocked = isUnlocked('factory', stats);
  const isCinemaUnlocked = isUnlocked('cinema', stats);
  const isBusinessUnlocked = isUnlocked('business', stats);
  const is3DUnlocked = isUnlocked('3d', stats);

  // ============================================================
  // 🗺️ QUEST PROGRESS COMPUTATION
  // ============================================================
  const currentQuestIdx = QUEST_STAGES.findIndex(s => !s.isComplete(stats, badges));
  const activeQuest = currentQuestIdx === -1 ? null : QUEST_STAGES[currentQuestIdx];
  const completedStages = currentQuestIdx === -1 ? QUEST_STAGES.length : currentQuestIdx;
  const questProgress = Math.round((completedStages / QUEST_STAGES.length) * 100);

  // Track newly unlocked stages for celebration
  const [celebrateStage, setCelebrateStage] = useState<number | null>(null);
  useEffect(() => {
    const savedStage = parseInt(localStorage.getItem('wb_quest_stage') || '0');
    if (completedStages > savedStage) {
      setCelebrateStage(completedStages);
      localStorage.setItem('wb_quest_stage', completedStages.toString());
      // Auto-dismiss celebration after 4 seconds
      setTimeout(() => setCelebrateStage(null), 4000);
    }
  }, [completedStages]);

  const t = UI_TEXT[lang];

  // ============================================================
  // 📦 COMPONENTS
  // ============================================================

  // Color map — all classes are full strings so Tailwind JIT can detect them
  const COLOR_MAP: Record<string, { hoverBorder: string; ring: string; gradientOverlay: string; iconGradient: string; badgeBorder: string; badgeBg: string; zapColor: string; badgeText: string }> = {
    blue:    { hoverBorder: 'hover:border-blue-500/50',    ring: 'ring-blue-500/20',    gradientOverlay: 'from-blue-500/5',    iconGradient: 'from-blue-500 to-blue-700',    badgeBorder: 'border-blue-500/30',    badgeBg: 'bg-blue-500/10',    zapColor: 'text-blue-400',    badgeText: 'text-blue-300' },
    indigo:  { hoverBorder: 'hover:border-indigo-500/50',  ring: 'ring-indigo-500/20',  gradientOverlay: 'from-indigo-500/5',  iconGradient: 'from-indigo-500 to-indigo-700',  badgeBorder: 'border-indigo-500/30',  badgeBg: 'bg-indigo-500/10',  zapColor: 'text-indigo-400',  badgeText: 'text-indigo-300' },
    purple:  { hoverBorder: 'hover:border-purple-500/50',  ring: 'ring-purple-500/20',  gradientOverlay: 'from-purple-500/5',  iconGradient: 'from-purple-500 to-purple-700',  badgeBorder: 'border-purple-500/30',  badgeBg: 'bg-purple-500/10',  zapColor: 'text-purple-400',  badgeText: 'text-purple-300' },
    fuchsia: { hoverBorder: 'hover:border-fuchsia-500/50', ring: 'ring-fuchsia-500/20', gradientOverlay: 'from-fuchsia-500/5', iconGradient: 'from-fuchsia-500 to-fuchsia-700', badgeBorder: 'border-fuchsia-500/30', badgeBg: 'bg-fuchsia-500/10', zapColor: 'text-fuchsia-400', badgeText: 'text-fuchsia-300' },
    pink:    { hoverBorder: 'hover:border-pink-500/50',    ring: 'ring-pink-500/20',    gradientOverlay: 'from-pink-500/5',    iconGradient: 'from-pink-500 to-pink-700',    badgeBorder: 'border-pink-500/30',    badgeBg: 'bg-pink-500/10',    zapColor: 'text-pink-400',    badgeText: 'text-pink-300' },
    rose:    { hoverBorder: 'hover:border-rose-500/50',    ring: 'ring-rose-500/20',    gradientOverlay: 'from-rose-500/5',    iconGradient: 'from-rose-500 to-rose-700',    badgeBorder: 'border-rose-500/30',    badgeBg: 'bg-rose-500/10',    zapColor: 'text-rose-400',    badgeText: 'text-rose-300' },
    amber:   { hoverBorder: 'hover:border-amber-500/50',   ring: 'ring-amber-500/20',   gradientOverlay: 'from-amber-500/5',   iconGradient: 'from-amber-500 to-amber-700',   badgeBorder: 'border-amber-500/30',   badgeBg: 'bg-amber-500/10',   zapColor: 'text-amber-400',   badgeText: 'text-amber-300' },
    emerald: { hoverBorder: 'hover:border-emerald-500/50', ring: 'ring-emerald-500/20', gradientOverlay: 'from-emerald-500/5', iconGradient: 'from-emerald-500 to-emerald-700', badgeBorder: 'border-emerald-500/30', badgeBg: 'bg-emerald-500/10', zapColor: 'text-emerald-400', badgeText: 'text-emerald-300' },
    green:   { hoverBorder: 'hover:border-green-500/50',   ring: 'ring-green-500/20',   gradientOverlay: 'from-green-500/5',   iconGradient: 'from-green-500 to-green-700',   badgeBorder: 'border-green-500/30',   badgeBg: 'bg-green-500/10',   zapColor: 'text-green-400',   badgeText: 'text-green-300' },
    cyan:    { hoverBorder: 'hover:border-cyan-500/50',    ring: 'ring-cyan-500/20',    gradientOverlay: 'from-cyan-500/5',    iconGradient: 'from-cyan-500 to-cyan-700',    badgeBorder: 'border-cyan-500/30',    badgeBg: 'bg-cyan-500/10',    zapColor: 'text-cyan-400',    badgeText: 'text-cyan-300' },
  };

  // Module Card
  const ModuleCard = ({
    title, subtitle, rewardText, icon: Icon, color, path,
    locked = false, unlockHint = '', delay = 0, featured = false, isNext = false
  }: any) => {
    const c = COLOR_MAP[color] || COLOR_MAP.blue;
    return (
    <div
      onClick={() => locked ? showNotification('🔒', unlockHint.replace(/^🔓 /, '')) : navigate(path)}
      className={`relative group cursor-pointer rounded-[2.5rem] border-2 transition-all duration-500 overflow-hidden flex flex-col h-full
        ${locked
          ? 'border-white/5 bg-[#0a0b10] opacity-50 grayscale pointer-events-none'
          : `border-white/10 ${c.hoverBorder} bg-[#0f1014] hover:bg-[#15171e] hover:-translate-y-2 hover:shadow-2xl`
        }
        ${featured ? `ring-4 ${c.ring}` : ''}
        ${isNext ? 'ring-2 ring-amber-500/40 animate-pulse-slow' : ''}
      `}
      style={{ animationDelay: `${delay}ms` }}
    >
        {!locked && <div className={`absolute inset-0 bg-gradient-to-br ${c.gradientOverlay} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />}

        {/* "NEXT" badge for the next quest objective */}
        {isNext && !locked && (
          <div className="absolute top-4 right-4 z-20">
            <div className="px-2 py-1 bg-amber-500 rounded-full flex items-center gap-1 shadow-lg animate-bounce">
              <Target size={10} className="text-black" />
              <span className="text-[8px] font-black text-black uppercase tracking-wider">{lang === 'el' ? 'QUEST' : 'QUEST'}</span>
            </div>
          </div>
        )}

        <div className="p-8 flex-1 flex flex-col relative z-10">
            <div className="flex justify-between items-start mb-6">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-lg transition-transform group-hover:scale-110 border border-white/10
                    ${locked ? 'bg-white/5' : `bg-gradient-to-br ${c.iconGradient}`}`}>
                    {locked ? <Lock size={28} /> : <Icon size={32} />}
                </div>
                {!locked && (
                    <div className={`px-3 py-1.5 rounded-lg border ${c.badgeBorder} ${c.badgeBg} flex items-center gap-2`}>
                       <Zap size={12} className={`${c.zapColor} fill-current`} />
                       <span className={`text-[9px] font-black uppercase tracking-widest ${c.badgeText}`}>
                          {rewardText}
                       </span>
                    </div>
                )}
            </div>
            <div className="mt-auto space-y-2">
                <h3 className="text-2xl font-[1000] text-white uppercase italic tracking-tighter leading-none group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-all">
                    {title}
                </h3>
                <p className="text-white/50 text-xs font-bold leading-relaxed">
                    {subtitle}
                </p>
            </div>
        </div>

        <div className={`px-8 py-4 border-t border-white/5 flex items-center justify-between ${locked ? 'bg-black/20' : 'bg-white/5 group-hover:bg-white/10'}`}>
            <span className={`font-black uppercase tracking-[0.15em] transition-colors ${locked ? 'text-[9px] text-amber-400/60' : 'text-[10px] tracking-[0.2em] text-white/30 group-hover:text-white/60'}`}>
                {locked ? (unlockHint || (lang === 'el' ? 'ΚΛΕΙΔΩΜΕΝΟ' : 'LOCKED')) : (lang === 'el' ? 'ΕΚΚΙΝΗΣΗ' : 'START')}
            </span>
            {!locked && <ArrowRight size={16} className="text-white/30 group-hover:text-white group-hover:translate-x-1 transition-all" />}
        </div>
    </div>
  );};

  // Badge item for footer
  const BadgeItem = ({ icon: Icon, title, unlocked }: any) => (
    <div className={`flex flex-col items-center gap-2 transition-all ${unlocked ? 'opacity-100 scale-105' : 'opacity-30 grayscale'}`}>
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${unlocked ? 'bg-amber-500/20 border-amber-500 text-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.3)]' : 'bg-white/5 border-white/10 text-white'}`}>
            <Icon size={20} />
        </div>
        <span className="text-[8px] font-black uppercase tracking-widest text-center">{title}</span>
    </div>
  );

  // Stage section header
  const StageHeader = ({ number, title, subtitle, unlocked, isActive }: { number: number; title: string; subtitle: string; unlocked: boolean; isActive: boolean }) => (
    <div className="col-span-full flex items-center gap-4 mt-8 mb-2 first:mt-0">
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-[1000] text-sm border shrink-0 transition-all ${
        unlocked
          ? isActive
            ? 'bg-amber-500 text-black border-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.4)]'
            : 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
          : 'bg-white/5 text-white/30 border-white/10'
      }`}>
        {unlocked && !isActive ? <CheckCircle2 size={18} /> : number}
      </div>
      <div className="flex-1">
        <h2 className={`font-[1000] text-lg uppercase italic tracking-tight ${unlocked ? 'text-white' : 'text-white/30'}`}>
          {title}
        </h2>
        <p className={`text-xs font-bold ${unlocked ? 'text-white/50' : 'text-white/20'}`}>{subtitle}</p>
      </div>
      <div className={`h-px flex-1 ${unlocked ? 'bg-white/10' : 'bg-white/5'}`} />
    </div>
  );

  // ============================================================
  // 🎨 RENDER
  // ============================================================
  return (
    <div className="pb-32 relative z-10 px-4 max-w-7xl mx-auto animate-in fade-in duration-700 space-y-10">

      {/* 🎁 DAILY REWARD POPUP */}
      <DailyRewardPopup lang={lang} />
      <OnboardingOverlay lang={lang} />
      {/* Not while the 4-step onboarding modal is up — the tip is the step after it. */}
      {(isGuest || profile?.onboardingComplete) && <FirstTimeTip
        id="dashboard"
        lang={lang}
        delayMs={1200}
        text={lang === 'el'
          ? <>🦉 <strong>Εγώ είμαι η WiseBot, {childName}.</strong> Εδώ διαβάζεις, κερδίζεις, δημιουργείς — και στο τέλος στήνεις τη δική σου εταιρεία. Ξεκίνα από την <strong>ΑΚΑΔΗΜΙΑ</strong>: διάβασε τον Walt Disney και ξεκλειδώνεις το Εργαστήριο Ηρώων.</>
          : <>🦉 <strong>I'm WiseBot, {childName}.</strong> Here you read, earn, create — and in the end build your own company. Start in the <strong>ACADEMY</strong>: read Walt Disney and you unlock the Hero Factory.</>}
      />}

      {/* 🎉 CELEBRATION OVERLAY */}
      {celebrateStage !== null && (
        <div className="fixed inset-0 z-[9999] pointer-events-none flex items-center justify-center">
          <div className="animate-bounce text-center">
            <div className="text-6xl mb-4">🎉🏆🎉</div>
            <div className="bg-black/80 backdrop-blur-xl px-8 py-4 rounded-2xl border-2 border-amber-500/50 shadow-[0_0_60px_rgba(245,158,11,0.3)]">
              <p className="text-amber-400 font-[1000] text-2xl italic uppercase">
                {lang === 'el' ? 'ΝΕΟΣ ΤΙΤΛΟΣ!' : 'NEW RANK!'}
              </p>
              <p className="text-white font-bold text-lg mt-1">
                {QUEST_STAGES[celebrateStage - 1]?.name[lang] || ''}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* 🌟 1. WELCOME HEADER WITH COVER IMAGE */}
      <header className="pt-8 space-y-6">
         <div className="relative w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden border-2 border-white/10 shadow-[0_10px_60px_rgba(59,130,246,0.2)]">
            <img
              src="/images/eksofilo.webp"
              className="w-full object-cover max-h-[280px] md:max-h-[380px]"
              alt="WiseBot Academy"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/40 to-transparent flex flex-col justify-end p-6 md:p-10">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/40 border border-blue-500/30 text-blue-300 w-fit backdrop-blur-sm">
                  <Compass size={16} />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em]">WISEBOT ACADEMY HQ</span>
                </div>
                {/* Maker tier → Passport (data/makerLevels.ts) */}
                <button
                  onClick={() => navigate('/passport')}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${makerLevelForXp(xp).gradient} text-white w-fit border border-white/25 shadow-lg hover:scale-105 active:scale-95 transition-transform`}
                >
                  <span className="text-sm leading-none" role="img" aria-hidden>{makerLevelForXp(xp).emoji}</span>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em]">{makerLevelForXp(xp).name}</span>
                  <ChevronRight size={12} />
                </button>
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-[1000] text-white italic tracking-tighter uppercase leading-none">
                {greetName && (
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-400 text-2xl md:text-4xl lg:text-5xl mb-1">
                    {lang === 'el' ? `ΓΕΙΑ ΣΟΥ, ${greetName.toUpperCase()}!` : `HI, ${greetName.toUpperCase()}!`}
                  </span>
                )}
                {lang === 'el' ? 'ΤΙ ΘΑ ΜΑΘΟΥΜΕ' : 'WHAT WILL WE LEARN'} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">{lang === 'el' ? 'ΣΗΜΕΡΑ;' : 'TODAY?'}</span>
              </h1>
              <p className="text-white/60 font-bold text-sm md:text-base max-w-2xl leading-relaxed mt-3">
                {lang === 'el'
                 ? 'Ακολούθα τα quests, ξεκλείδωσε νέες δυνάμεις και γίνε θρύλος!'
                 : 'Follow the quests, unlock new powers and become a legend!'}
              </p>
            </div>
         </div>
      </header>

      {/* ⚡ QUICK ACCESS SHORTCUTS */}
      <div className="grid grid-cols-4 gap-3">
        {[
          { icon: Book, label: { el: 'ΔΙΑΒΑΣΕ', en: 'READ' }, path: '/academy', color: 'from-blue-500 to-indigo-600', glow: 'rgba(59,130,246,0.3)' },
          { icon: Brain, label: { el: 'QUIZ', en: 'QUIZ' }, path: '/quiz', color: 'from-emerald-500 to-teal-600', glow: 'rgba(16,185,129,0.3)', locked: !isQuizUnlocked },
          { icon: Wand2, label: { el: 'ΗΡΩΑΣ', en: 'HERO' }, path: '/factory', color: 'from-purple-500 to-fuchsia-600', glow: 'rgba(168,85,247,0.3)', locked: !isFactoryUnlocked },
          { icon: Music, label: { el: 'ΜΟΥΣΙΚΗ', en: 'MUSIC' }, path: '/music', color: 'from-pink-500 to-rose-600', glow: 'rgba(236,72,153,0.3)', locked: !isMusicUnlocked },
        ].map((item, i) => (
          <button
            key={i}
            onClick={() => item.locked
              ? showNotification('🔒', item.path === '/factory' ? unlockHint('factory', stats, lang) : (lang === 'el' ? 'Κλειδωμένο ακόμα' : 'Still locked'))
              : navigate(item.path)}
            className={`relative flex flex-col items-center justify-center gap-2 py-5 rounded-2xl border-2 transition-all overflow-hidden group ${
              item.locked
                ? 'border-white/5 bg-white/5 opacity-40 cursor-not-allowed'
                : 'border-white/10 bg-[#0f1014] hover:border-white/20 hover:-translate-y-1 hover:shadow-lg active:scale-95 cursor-pointer'
            }`}
          >
            {!item.locked && (
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" style={{ background: `linear-gradient(135deg, rgba(255,255,255,0.03), transparent)` }} />
            )}
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${item.color} shadow-lg ${item.locked ? 'grayscale' : ''}`}
              style={!item.locked ? { boxShadow: `0 4px 20px ${item.glow}` } : {}}
            >
              {item.locked ? <Lock size={22} className="text-white/60" /> : <item.icon size={22} className="text-white" />}
            </div>
            <span className="text-[10px] font-[1000] uppercase tracking-wider text-white/70 group-hover:text-white transition-colors">
              {item.label[lang]}
            </span>
          </button>
        ))}
      </div>

      {/* 🗺️ 2. QUEST PROGRESS TRACKER */}
      <div className="bg-[#0f1014] border-2 border-white/10 rounded-[2rem] p-6 md:p-8 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-amber-500/20 rounded-xl flex items-center justify-center border border-amber-500/30">
              <Rocket size={20} className="text-amber-400" />
            </div>
            <div>
              <h2 className="font-[1000] text-white text-lg italic uppercase tracking-tight">
                {lang === 'el' ? 'ΤΟ ΤΑΞΙΔΙ ΣΟΥ' : 'YOUR JOURNEY'}
              </h2>
              <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">
                {lang === 'el' ? `${completedStages}/${QUEST_STAGES.length} Quest Stages` : `${completedStages}/${QUEST_STAGES.length} Quest Stages`}
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-amber-400 font-[1000] text-2xl italic">{questProgress}%</p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="relative">
          <div className="h-3 bg-white/5 rounded-full overflow-hidden border border-white/10">
            <div
              className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-amber-500 rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${Math.max(questProgress, 5)}%` }}
            />
          </div>
          {/* Stage dots on the bar */}
          <div className="absolute inset-0 flex items-center justify-between px-0">
            {QUEST_STAGES.map((stage, i) => {
              const pos = ((i + 1) / QUEST_STAGES.length) * 100;
              const done = stage.isComplete(stats, badges);
              return (
                <div
                  key={stage.id}
                  className="absolute -top-1"
                  style={{ left: `${pos}%`, transform: 'translateX(-50%)' }}
                >
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                    done
                      ? 'bg-emerald-500 border-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.5)]'
                      : i === currentQuestIdx
                        ? 'bg-amber-500 border-amber-400 animate-pulse shadow-[0_0_10px_rgba(245,158,11,0.5)]'
                        : 'bg-white/10 border-white/20'
                  }`}>
                    {done && <CheckCircle2 size={10} className="text-white" />}
                    {i === currentQuestIdx && <Flame size={10} className="text-black" />}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stage labels */}
        <div className="flex justify-between gap-1">
          {QUEST_STAGES.map((stage, i) => {
            const done = stage.isComplete(stats, badges);
            const isCurrent = i === currentQuestIdx;
            return (
              <div key={stage.id} className={`flex flex-col items-center text-center flex-1 ${done ? 'opacity-100' : isCurrent ? 'opacity-100' : 'opacity-30'}`}>
                <stage.icon size={16} className={done ? 'text-emerald-400' : isCurrent ? 'text-amber-400' : 'text-white/40'} />
                <span className={`text-[8px] md:text-[9px] font-black uppercase tracking-wider mt-1 ${done ? 'text-emerald-300' : isCurrent ? 'text-amber-300' : 'text-white/30'}`}>
                  {stage.name[lang]}
                </span>
              </div>
            );
          })}
        </div>

        {/* Current Quest Card */}
        {activeQuest && (
          <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-2xl p-4 md:p-5 flex items-center gap-4">
            <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center border border-amber-500/30 shrink-0">
              <Target size={24} className="text-amber-400" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-amber-300/70 text-[9px] font-black uppercase tracking-[0.2em]">
                {lang === 'el' ? 'ΤΡΕΧΟΝ QUEST' : 'CURRENT QUEST'}
              </p>
              <p className="text-white font-bold text-sm md:text-base truncate">
                {activeQuest.quest[lang]}
              </p>
            </div>
            <ChevronRight size={20} className="text-amber-400/50 shrink-0" />
          </div>
        )}

        {/* All quests complete! */}
        {!activeQuest && (
          <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-2xl p-4 md:p-5 flex items-center gap-4">
            <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center border border-emerald-500/30 shrink-0">
              <Crown size={24} className="text-emerald-400" />
            </div>
            <div className="flex-1">
              <p className="text-emerald-300/70 text-[9px] font-black uppercase tracking-[0.2em]">
                {lang === 'el' ? 'ΘΡΥΛΟΣ' : 'LEGEND'}
              </p>
              <p className="text-white font-bold text-sm md:text-base">
                {lang === 'el' ? 'Ολοκλήρωσες όλα τα Quests! Είσαι θρύλος!' : 'You completed all Quests! You are a legend!'}
              </p>
            </div>
            <Trophy size={20} className="text-amber-400 shrink-0" />
          </div>
        )}
      </div>

      {/* ⚡ DAILY MISSION */}
      <DailyMission lang={lang} />

      {/* 🎁 FREE MISSION TRACKER */}
      {!missionComplete ? (
        <div className="bg-[#0f1014] border-2 border-amber-500/30 rounded-[2rem] p-6 md:p-8 space-y-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-amber-500/20 rounded-xl flex items-center justify-center border border-amber-500/30">
              <Gift size={20} className="text-amber-400" />
            </div>
            <div>
              <h2 className="font-[1000] text-white text-lg italic uppercase tracking-tight">
                {lang === 'el' ? 'Η ΜΕΓΑΛΗ ΑΠΟΣΤΟΛΗ' : 'THE BIG MISSION'}
              </h2>
              <p className="text-amber-400/70 text-[10px] font-bold uppercase tracking-widest">
                {lang === 'el' ? 'Ολοκλήρωσε & κέρδισε +200 XP' : 'Complete & earn +200 XP'}
              </p>
            </div>
          </div>

          {/* Academy Progress */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-white/70 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                <GraduationCap size={14} className="text-blue-400" />
                {lang === 'el' ? 'Ιστορίες Academy' : 'Academy Stories'}
              </span>
              <span className={`font-[1000] text-sm ${academyCount >= 3 ? 'text-emerald-400' : 'text-amber-300'}`}>
                {Math.min(academyCount, 3)}/3
                {academyCount >= 3 && ' ✓'}
              </span>
            </div>
            <div className="h-2.5 bg-white/5 rounded-full overflow-hidden border border-white/10">
              <div
                className={`h-full rounded-full transition-all duration-700 ${academyCount >= 3 ? 'bg-gradient-to-r from-emerald-500 to-emerald-400' : 'bg-gradient-to-r from-blue-500 to-blue-400'}`}
                style={{ width: `${Math.min((academyCount / 3) * 100, 100)}%` }}
              />
            </div>
          </div>

          {/* Ebook Progress */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-white/70 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                <Book size={14} className="text-indigo-400" />
                {lang === 'el' ? 'Ebooks' : 'Ebooks'}
              </span>
              <span className={`font-[1000] text-sm ${ebookCount >= 1 ? 'text-emerald-400' : 'text-amber-300'}`}>
                {Math.min(ebookCount, 1)}/1
                {ebookCount >= 1 && ' ✓'}
              </span>
            </div>
            <div className="h-2.5 bg-white/5 rounded-full overflow-hidden border border-white/10">
              <div
                className={`h-full rounded-full transition-all duration-700 ${ebookCount >= 1 ? 'bg-gradient-to-r from-emerald-500 to-emerald-400' : 'bg-gradient-to-r from-indigo-500 to-indigo-400'}`}
                style={{ width: `${Math.min(ebookCount * 100, 100)}%` }}
              />
            </div>
          </div>

          <div className="flex items-center gap-3 bg-amber-500/5 border border-amber-500/15 rounded-2xl p-4">
            <Music size={18} className="text-amber-400 shrink-0" />
            <p className="text-white/60 text-xs font-bold leading-relaxed">
              {lang === 'el'
                ? 'Διάβασε 3 ιστορίες στην Ακαδημία + 1 βιβλίο. Κάθε ολόκληρο βιβλίο με quiz δίνει και 1⚡!'
                : 'Read 3 Academy stories + 1 book. Every whole book with its quiz also earns 1⚡!'}
            </p>
          </div>
        </div>
      ) : (
        <div className="bg-[#0f1014] border-2 border-emerald-500/30 rounded-[2rem] p-6 flex items-center gap-4">
          <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center border border-emerald-500/30 shrink-0">
            <CheckCircle2 size={24} className="text-emerald-400" />
          </div>
          <div className="flex-1">
            <p className="text-emerald-300 font-[1000] text-base italic uppercase tracking-tight">
              {lang === 'el' ? 'ΑΠΟΣΤΟΛΗ ΟΛΟΚΛΗΡΩΘΗΚΕ ✓' : 'MISSION COMPLETE ✓'}
            </p>
            <p className="text-white/50 text-xs font-bold">
              {lang === 'el' ? '+200 XP! Συνέχισε στη Μουσική!' : '+200 XP! Head to Music!'}
            </p>
          </div>
          <button
            onClick={() => navigate('/music')}
            className="shrink-0 px-4 py-2 bg-emerald-500/20 border border-emerald-500/30 rounded-xl text-emerald-300 text-xs font-black uppercase tracking-widest hover:bg-emerald-500/30 transition-colors flex items-center gap-2"
          >
            <Music size={14} />
            {lang === 'el' ? 'ΜΟΥΣΙΚΗ' : 'MUSIC'}
          </button>
        </div>
      )}

      {/* 🎬 VIDEO HIGHLIGHTS */}
      <div className="bg-[#0f1014] border-2 border-white/10 rounded-[2rem] p-6 md:p-8 space-y-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-pink-500/20 rounded-xl flex items-center justify-center border border-pink-500/30">
              <Film size={20} className="text-pink-400" />
            </div>
            <div>
              <h2 className="font-[1000] text-white text-lg italic uppercase tracking-tight">
                {lang === 'el' ? 'WISE CINEMA' : 'WISE CINEMA'}
              </h2>
              <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">
                {lang === 'el' ? 'Δες τους ήρωες σε δράση' : 'Watch heroes in action'}
              </p>
            </div>
          </div>
          <button
            onClick={() => navigate('/cinema')}
            className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black text-white/50 uppercase tracking-widest hover:bg-white/10 hover:text-white transition-all flex items-center gap-2"
          >
            {lang === 'el' ? 'ΟΛΑ' : 'ALL'} <ChevronRight size={12} />
          </button>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {DASHBOARD_VIDEOS.map((video) => (
            <div
              key={video.id}
              onClick={() => setDashboardVideo(video)}
              className="group cursor-pointer rounded-2xl overflow-hidden border border-white/10 bg-black/40 hover:border-pink-500/40 transition-all"
            >
              <div className="aspect-video relative">
                <img src={video.thumbnail} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity" alt={video.title[lang]} loading="lazy" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play size={16} fill="white" className="text-white" />
                  </div>
                </div>
              </div>
              <div className="p-3">
                <h4 className="text-[10px] font-black text-white uppercase italic tracking-tight truncate">{video.title[lang]}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DASHBOARD VIDEO PLAYER MODAL */}
      {dashboardVideo && (
        <div className="fixed inset-0 z-[1000] bg-black/95 flex items-center justify-center p-4 xl:pl-80" onClick={() => setDashboardVideo(null)}>
          <div className="w-full max-w-4xl aspect-video bg-black rounded-3xl overflow-hidden relative border border-white/10 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setDashboardVideo(null)} className="absolute top-4 right-4 text-white z-20 bg-black/50 p-2 rounded-full hover:bg-white/20 transition-colors">
              <X size={24} />
            </button>
            <video ref={(el) => { if (el) { el.muted = false; el.play().catch(() => {}); } }} src={dashboardVideo.videoUrl} controls playsInline className="w-full h-full object-contain" />
          </div>
        </div>
      )}

      {/* 🚀 3. MODULES GRID — ORGANIZED BY QUEST STAGES */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

         {/* ═══════ STAGE 1: EXPLORE ═══════ */}
         <StageHeader
           number={1}
           title={lang === 'el' ? 'ΕΞΕΡΕΥΝΗΣΗ' : 'EXPLORE'}
           subtitle={lang === 'el' ? 'Ξεκίνα εδώ! Διάβασε ιστορίες και βιβλία' : 'Start here! Read stories and books'}
           unlocked={true}
           isActive={currentQuestIdx === 0}
         />

         <ModuleCard
            title={t.dashboard.modules.academy.title}
            subtitle={lang === 'el' ? 'Διάβασε ιστορίες σπουδαίων ανθρώπων και πάρε μαθήματα ζωής.' : 'Read stories of great people and learn life lessons.'}
            rewardText={lang === 'el' ? 'ΚΕΡΔΙΣΕ ΓΝΩΣΗ' : 'EARN KNOWLEDGE'}
            icon={GraduationCap}
            color="blue"
            path="/academy"
            delay={0}
            isNext={currentQuestIdx === 0}
         />
         <ModuleCard
            title={t.dashboard.modules.ebooks.title}
            subtitle={lang === 'el' ? 'Η Βιβλιοθήκη της Σοφίας. Ολόκληρο βιβλίο + quiz = 1 credit.' : 'The Library of Wisdom. Whole book + quiz = 1 credit.'}
            rewardText={lang === 'el' ? '+1 CREDIT' : '+1 CREDIT'}
            icon={Book}
            color="indigo"
            path="/ebooks"
            delay={100}
         />
         <ModuleCard
            title={t.dashboard.modules.game.title}
            subtitle={lang === 'el' ? 'Arcade δράση, γρίφοι και συνεργατικά παιχνίδια.' : 'Arcade action, puzzles and co-op games.'}
            rewardText={t.dashboard.modules.game.btn}
            icon={Gamepad2}
            color="fuchsia"
            path="/game"
            delay={200}
         />

         {/* ═══════ STAGE 2: PROVE ═══════ */}
         <StageHeader
           number={2}
           title={lang === 'el' ? 'ΑΠΟΔΕΙΞΕ ΤΙ ΞΕΡΕΙΣ' : 'PROVE YOURSELF'}
           subtitle={lang === 'el' ? 'Πέρνα τα quiz και φτιάξε τραγούδια' : 'Pass quizzes and create songs'}
           unlocked={isQuizUnlocked}
           isActive={currentQuestIdx === 1}
         />

         <ModuleCard
            title={t.dashboard.modules.quiz.title}
            subtitle={lang === 'el' ? 'Απέδειξε τι έμαθες. Πέρνα τα τεστ για Thinker Badge.' : 'Prove what you learned. Pass tests for Thinker Badge.'}
            rewardText={lang === 'el' ? 'BADGES' : 'BADGES'}
            icon={Brain}
            color="purple"
            path="/quiz"
            locked={!isQuizUnlocked}
            unlockHint={lang === 'el' ? '🔓 Διάβασε 2 ιστορίες ή 1 βιβλίο' : '🔓 Read 2 stories or 1 book'}
            delay={300}
            isNext={currentQuestIdx === 1 && isQuizUnlocked}
         />
         <ModuleCard
            title={t.dashboard.modules.music.title}
            subtitle={lang === 'el' ? 'Γράψε στίχους, διάλεξε ρυθμό και φτιάξε hit με AI.' : 'Write lyrics, pick a beat and create a hit with AI.'}
            rewardText={t.dashboard.modules.music.btn}
            icon={Music}
            color="rose"
            path="/music"
            locked={!isMusicUnlocked}
            unlockHint={lang === 'el' ? '🔓 Διάβασε 1 ιστορία' : '🔓 Read 1 story'}
            delay={400}
         />
         <ModuleCard
            title={t.dashboard.modules.business.title}
            subtitle={lang === 'el' ? 'Φτιάξε εταιρεία, λογότυπο και μάθε επιχειρηματικότητα.' : 'Build a company, create a logo and learn entrepreneurship.'}
            rewardText={lang === 'el' ? '+30 XP' : '+30 XP'}
            icon={Briefcase}
            color="green"
            path="/business"
            locked={!isBusinessUnlocked}
            unlockHint={'🔓 ' + unlockHint('business', stats, lang)}
            delay={450}
         />

         {/* ═══════ STAGE 3: CREATE ═══════ */}
         <StageHeader
           number={3}
           title={lang === 'el' ? 'ΔΗΜΙΟΥΡΓΙΑ' : 'CREATE'}
           subtitle={lang === 'el' ? 'Ζωντάνεψε τους ήρωές σου!' : 'Bring your heroes to life!'}
           unlocked={isFactoryUnlocked}
           isActive={currentQuestIdx === 2}
         />

         <ModuleCard
            title={t.dashboard.modules.factory.title}
            subtitle={lang === 'el' ? 'Φαντάσου τον ήρωά σου και δες τον να ζωντανεύει.' : 'Imagine your hero and see them come to life.'}
            rewardText={lang === 'el' ? 'ΔΗΜΙΟΥΡΓΙΚΟΤΗΤΑ' : 'CREATIVITY'}
            icon={Wand2}
            color="fuchsia"
            path="/factory"
            locked={!isFactoryUnlocked}
            unlockHint={'🔓 ' + unlockHint('factory', stats, lang)}
            delay={500}
            isNext={currentQuestIdx === 2 && isFactoryUnlocked}
         />

         {/* ═══════ STAGE 4: PRODUCE ═══════ */}
         <StageHeader
           number={4}
           title={lang === 'el' ? 'ΠΑΡΑΓΩΓΗ' : 'PRODUCE'}
           subtitle={lang === 'el' ? 'Κάνε βίντεο και πούλα τους ήρωές σου' : 'Make videos and sell your heroes'}
           unlocked={isCinemaUnlocked}
           isActive={currentQuestIdx === 3}
         />

         <ModuleCard
            title={t.steps.cinema.title}
            subtitle={lang === 'el' ? 'Κάνε τον ήρωά σου να μιλήσει και να κουνηθεί!' : 'Make your hero speak and move!'}
            rewardText={lang === 'el' ? 'ΖΩΝΤΑΝΕΜΑ' : 'ANIMATE'}
            icon={Clapperboard}
            color="pink"
            path="/cinema"
            locked={!isCinemaUnlocked}
            unlockHint={'🔓 ' + unlockHint('cinema', stats, lang)}
            delay={600}
            isNext={currentQuestIdx === 3 && isCinemaUnlocked}
         />
         <ModuleCard
            title={t.steps.market.title}
            subtitle={lang === 'el' ? 'Πούλα δημιουργίες, αγόρασε από άλλους.' : 'Sell creations, buy from others.'}
            rewardText={lang === 'el' ? 'CREDITS' : 'CREDITS'}
            icon={Store}
            color="amber"
            path="/market"
            locked={!isMarketUnlocked}
            unlockHint={lang === 'el' ? '🔓 Δημιούργησε 1 ήρωα' : '🔓 Create 1 hero'}
            delay={700}
         />

         {/* ═══════ STAGE 5: MASTER ═══════ */}
         <StageHeader
           number={5}
           title={lang === 'el' ? 'ΘΡΥΛΟΣ' : 'LEGEND'}
           subtitle={lang === 'el' ? 'Τα εργαλεία των μάστορων' : 'Tools of the masters'}
           unlocked={is3DUnlocked}
           isActive={currentQuestIdx === 4}
         />

         <ModuleCard
            title={t.steps.factory3d.title}
            subtitle={lang === 'el' ? 'Μετάτρεψε ζωγραφιές σε 3D μοντέλα.' : 'Turn drawings into 3D models.'}
            rewardText="3D EXPORT (PRO)"
            icon={Box}
            color="emerald"
            path="/3d-factory"
            locked={!is3DUnlocked}
            unlockHint={'🔓 ' + unlockHint('3d', stats, lang)}
            delay={800}
            isNext={currentQuestIdx === 4 && is3DUnlocked}
         />
         <ModuleCard
            title={t.dashboard.modules.friends.title}
            subtitle={lang === 'el' ? 'Γνώρισε την ομάδα WiseBot.' : 'Meet the WiseBot team.'}
            rewardText={lang === 'el' ? 'ΟΜΑΔΑ' : 'TEAM'}
            icon={Users}
            color="cyan"
            path="/wise-friends"
            delay={900}
         />
      </div>

      {/* 🏆 WEEKLY LEADERBOARD */}
      <WeeklyLeaderboard lang={lang} stats={stats} />

      {/* 💼 4. WALLET FOOTER */}
      <div className="mt-20 border-t border-white/10 pt-12">
         <div className="glass-panel p-8 rounded-[3rem] bg-gradient-to-r from-slate-900 to-black border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">

            {/* Credits */}
            <div className="flex items-center gap-6">
                <div className="w-20 h-20 bg-amber-500/10 rounded-full flex items-center justify-center border border-amber-500/20 shadow-[0_0_40px_rgba(245,158,11,0.2)]">
                    <Zap size={40} className="text-amber-400 fill-current" />
                </div>
                <div>
                    <h4 className="text-white/40 font-black uppercase tracking-widest text-xs mb-1">
                        {lang === 'el' ? 'ΤΟ ΠΟΡΤΟΦΟΛΙ ΣΟΥ' : 'YOUR WALLET'}
                    </h4>
                    <div className="text-5xl font-[1000] text-white italic tracking-tighter">
                        {credits} <span className="text-lg not-italic font-bold text-white/50">{lang === 'el' ? 'Πόντοι' : 'Credits'}</span>
                    </div>
                </div>
            </div>

            <div className="w-full md:w-px h-px md:h-20 bg-white/10"></div>

            {/* Badges */}
            <div className="flex-1 w-full md:w-auto">
                <div className="flex justify-between items-center mb-4">
                    <h4 className="text-white/40 font-black uppercase tracking-widest text-xs">
                        {lang === 'el' ? 'ΤΑ ΠΑΡΑΣΗΜΑ ΣΟΥ' : 'YOUR BADGES'}
                    </h4>
                    <button
                        onClick={() => navigate('/passport')}
                        className="text-xs font-bold text-white/40 bg-white/5 px-2 py-1 rounded hover:bg-white/10 hover:text-white/70 transition-colors inline-flex items-center gap-1.5"
                    >
                        <span role="img" aria-hidden>{makerLevelForXp(xp).emoji}</span>
                        {makerLevelForXp(xp).name} · {lang === 'el' ? 'Επίπεδο' : 'Level'} {level}
                    </button>
                </div>
                <div className="flex justify-between gap-2">
                    <BadgeItem icon={Brain} title={lang === 'el' ? 'Στοχαστής' : 'Thinker'} unlocked={badges.thinker} />
                    <BadgeItem icon={Palette} title={lang === 'el' ? 'Δημιουργός' : 'Creator'} unlocked={badges.creator} />
                    <BadgeItem icon={Film} title={lang === 'el' ? 'Σκηνοθέτης' : 'Director'} unlocked={badges.filmmaker} />
                    <BadgeItem icon={Hammer} title={lang === 'el' ? 'Μάστορας' : 'Builder'} unlocked={badges.builder} />
                    <BadgeItem icon={Store} title={lang === 'el' ? 'Έμπορος' : 'Trader'} unlocked={badges.market} />
                </div>
            </div>
         </div>

         <div className="text-center mt-8">
             <p className="text-white/20 font-bold uppercase tracking-[0.3em] text-[10px]">
                 WISEBOT ACADEMY v2.5 • EST. 2024
             </p>
         </div>
      </div>

      {/* Floating Gift Buttons */}
      {user && (
        <div className="fixed bottom-24 right-6 z-50 flex flex-col gap-3 items-center">
          {/* Inbox button */}
          <button
            onClick={() => setShowGiftInbox(true)}
            className="relative w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 shadow-lg shadow-amber-500/30 flex items-center justify-center hover:scale-110 active:scale-95 transition-transform border-2 border-white/20"
            aria-label={lang === 'el' ? 'Δώρα που έλαβες' : 'Received gifts'}
          >
            <Inbox size={20} className="text-white" />
            {inboxCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 text-white text-[10px] font-black flex items-center justify-center border border-[#0B0F1A]">
                {inboxCount > 9 ? '9+' : inboxCount}
              </span>
            )}
          </button>
          {/* Send gift button */}
          <button
            onClick={() => setShowGiftModal(true)}
            className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 shadow-lg shadow-purple-500/30 flex items-center justify-center hover:scale-110 active:scale-95 transition-transform border-2 border-white/20"
            aria-label={lang === 'el' ? 'Στείλε δώρο' : 'Send gift'}
          >
            <Gift size={24} className="text-white" />
          </button>
        </div>
      )}

      <GiftModal lang={lang} isOpen={showGiftModal} onClose={() => setShowGiftModal(false)} onGiftSent={(newBalance) => syncFromCloud(newBalance, stats, badges)} />

      <GiftInbox
        lang={lang}
        isOpen={showGiftInbox}
        onClose={() => setShowGiftInbox(false)}
        onClaimImage={(gift) => {
          // Add image to local heroes list
          try {
            const existing = JSON.parse(localStorage.getItem('wb_heroes') || '[]');
            existing.unshift({
              id: Date.now().toString(),
              name: gift.title,
              image: gift.image_url,
              description: `${lang === 'el' ? 'Δώρο από' : 'Gift from'} ${gift.from_name}`,
              isUserGenerated: true,
              color: 'from-fuchsia-500 to-purple-600',
              heroClass: 'creator',
            });
            localStorage.setItem('wb_heroes', JSON.stringify(existing));
          } catch { /* storage full or blocked — gift still claimed server-side */ }
        }}
        onClaimSong={(gift) => {
          // Add song to local songs list
          try {
            const existing = JSON.parse(localStorage.getItem('wisebot_music_library') || '[]');
            existing.unshift({
              id: Date.now().toString(),
              title: gift.title,
              cover: gift.cover_url || '',
              sunoCover: gift.cover_url || '',
              audioUrl: gift.audio_url || '',
              streamUrl: gift.stream_url || '',
              lyrics: gift.lyrics || '',
              style: gift.style || '',
              audioStatus: 'complete',
              createdAt: Date.now(),
              instrumental: false,
            });
            localStorage.setItem('wisebot_music_library', JSON.stringify(existing));
          } catch { /* storage full or blocked — gift still claimed server-side */ }
        }}
      />

      {/* 🎵 FREE SONG UNLOCKED MODAL */}
      <AnimatePresence>
        {showFreeSongModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/85 backdrop-blur-xl flex items-center justify-center p-6 xl:pl-80"
            onClick={() => setShowFreeSongModal(false)}
          >
            <motion.div
              initial={{ scale: 0.8, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 40 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0f1014] border-2 border-amber-500/50 rounded-[3rem] p-8 md:p-12 max-w-md w-full text-center space-y-6 shadow-[0_0_80px_rgba(245,158,11,0.25)]"
            >
              <div className="text-6xl animate-bounce">🎵</div>
              <div>
                <p className="text-amber-400/70 text-[10px] font-black uppercase tracking-[0.3em] mb-3">
                  {lang === 'el' ? 'ΑΠΟΣΤΟΛΗ ΟΛΟΚΛΗΡΩΘΗΚΕ' : 'MISSION COMPLETE'}
                </p>
                <h2 className="text-3xl font-[1000] text-white italic uppercase tracking-tighter leading-tight">
                  {lang === 'el' ? 'ΜΕΓΑΛΗ ΑΠΟΣΤΟΛΗ' : 'BIG MISSION'}
                  <br />
                  <span className="text-amber-400">
                    {lang === 'el' ? 'ΟΛΟΚΛΗΡΩΘΗΚΕ!' : 'COMPLETE!'}
                  </span>
                </h2>
              </div>
              <div className="flex items-center justify-center gap-3 bg-amber-500/10 border border-amber-500/25 rounded-2xl p-4">
                <Zap size={22} className="text-amber-400 fill-current" />
                <span className="text-amber-300 font-[1000] text-2xl">+200 ⭐ XP</span>
              </div>
              <div className="space-y-3">
                <button
                  onClick={() => { setShowFreeSongModal(false); navigate('/music'); }}
                  className="w-full py-4 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl text-black font-[1000] text-lg uppercase italic tracking-wider hover:scale-[1.02] active:scale-95 transition-all shadow-[0_4px_20px_rgba(245,158,11,0.4)] flex items-center justify-center gap-3"
                >
                  <Music size={22} />
                  {lang === 'el' ? 'ΠΑΜΕ ΣΤΗ ΜΟΥΣΙΚΗ!' : 'GO TO MUSIC!'}
                </button>
                <button
                  onClick={() => setShowFreeSongModal(false)}
                  className="w-full py-3 text-white/40 text-sm font-bold hover:text-white/60 transition-colors"
                >
                  {lang === 'el' ? 'Αργότερα' : 'Later'}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Dashboard;
