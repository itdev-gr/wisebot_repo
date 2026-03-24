
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
  FlaskConical,
  Globe,
} from 'lucide-react';
import { UI_TEXT } from '../constants';
import { useEconomy } from '../context/EconomyContext';
import DailyMission from './DailyMission';
import DailyRewardPopup from './DailyRewardPopup';
import OnboardingOverlay from './OnboardingOverlay';

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
  { id: 'dv3', title: { el: 'ΤΑ ΠΑΙΔΙΑ ΜΕ ΤΟ WISEBOT', en: 'KIDS WITH WISEBOT' }, thumbnail: '/images/paidia-wisebot-2.webp', videoUrl: '/video/wisebot%20claude.mp4' },
];

// ============================================================
// 🏆 WEEKLY PROGRESS COMPONENT (replaces fake leaderboard)
// ============================================================

const getISOWeek = (date: Date): number => {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return Math.ceil((((d.getTime() - yearStart.getTime()) / 86400000) + 1) / 7);
};

// Personal weekly progress achievements
const PROGRESS_MILESTONES = [
  { key: 'lessonsRead', icon: '📖', label: { el: 'Μαθήματα', en: 'Lessons' }, points: 10 },
  { key: 'booksRead', icon: '📚', label: { el: 'Βιβλία', en: 'Books' }, points: 20 },
  { key: 'quizzesPassed', icon: '🧠', label: { el: 'Quiz', en: 'Quizzes' }, points: 25 },
  { key: 'imagesCreated', icon: '🎨', label: { el: 'Εικόνες', en: 'Images' }, points: 15 },
  { key: 'heroesCompleted', icon: '🦸', label: { el: 'Ήρωες', en: 'Heroes' }, points: 20 },
  { key: 'businessesCreated', icon: '💼', label: { el: 'Εταιρείες', en: 'Businesses' }, points: 30 },
];

const WeeklyLeaderboard = ({ lang, stats }: { lang: 'el' | 'en'; stats: any }) => {
  const weekNum = getISOWeek(new Date());

  // Calculate total score
  const totalScore =
    (stats.lessonsRead || 0) * 10 +
    (stats.quizzesPassed || 0) * 25 +
    (stats.imagesCreated || 0) * 15 +
    (stats.booksRead || 0) * 20 +
    (stats.heroesCompleted || 0) * 20 +
    (stats.businessesCreated || 0) * 30;

  // Level thresholds for achievements
  const level = totalScore < 50 ? 'beginner' : totalScore < 150 ? 'explorer' : totalScore < 300 ? 'creator' : 'master';
  const levelConfig = {
    beginner: { emoji: '🌱', label: { el: 'Αρχάριος', en: 'Beginner' }, color: 'from-green-500/20 to-emerald-500/10 border-green-500/30', next: 50 },
    explorer: { emoji: '🧭', label: { el: 'Εξερευνητής', en: 'Explorer' }, color: 'from-blue-500/20 to-cyan-500/10 border-blue-500/30', next: 150 },
    creator: { emoji: '🔥', label: { el: 'Δημιουργός', en: 'Creator' }, color: 'from-amber-500/20 to-orange-500/10 border-amber-500/30', next: 300 },
    master: { emoji: '👑', label: { el: 'Master', en: 'Master' }, color: 'from-purple-500/20 to-fuchsia-500/10 border-purple-500/30', next: 999 },
  };

  const currentLevel = levelConfig[level];
  const nextThreshold = currentLevel.next;
  const progress = Math.min(100, Math.round((totalScore / nextThreshold) * 100));

  return (
    <div className="bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] rounded-[2rem] p-6 md:p-8 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-amber-500/20 rounded-xl flex items-center justify-center border border-amber-500/30">
            <Trophy size={20} className="text-amber-400" />
          </div>
          <div>
            <h2 className="font-[1000] text-white text-lg italic uppercase tracking-tight">
              {lang === 'el' ? 'Η ΠΡΟΟΔΟΣ ΣΟΥ' : 'YOUR PROGRESS'}
            </h2>
            <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">
              {lang === 'el' ? `Εβδομάδα ${weekNum}` : `Week ${weekNum}`}
            </p>
          </div>
        </div>
        <div className="px-4 py-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 rounded-xl">
          <span className="text-amber-300 font-[1000] text-sm italic">
            {totalScore} {lang === 'el' ? 'πόντοι' : 'pts'}
          </span>
        </div>
      </div>

      {/* Level badge */}
      <div className={`bg-gradient-to-r ${currentLevel.color} border rounded-2xl p-4 flex items-center gap-3`}>
        <div className="text-3xl">{currentLevel.emoji}</div>
        <div className="flex-1">
          <p className="text-white font-[1000] text-base italic uppercase">
            {currentLevel.label[lang]}
          </p>
          {level !== 'master' && (
            <div className="mt-2">
              <div className="flex justify-between text-[10px] text-white/40 font-bold mb-1">
                <span>{totalScore} / {nextThreshold}</span>
                <span>{progress}%</span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-amber-400 to-orange-500 rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          )}
          {level === 'master' && (
            <p className="text-white/50 text-xs font-bold mt-1">
              {lang === 'el' ? 'Έφτασες στην κορυφή!' : 'You reached the top!'}
            </p>
          )}
        </div>
      </div>

      {/* Activity breakdown */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {PROGRESS_MILESTONES.map(m => {
          const count = stats[m.key] || 0;
          return (
            <div key={m.key} className="bg-white/[0.03] border border-white/5 rounded-xl p-3 text-center">
              <div className="text-xl mb-1">{m.icon}</div>
              <p className="text-white font-[1000] text-lg italic">{count}</p>
              <p className="text-white/30 text-[9px] font-bold uppercase tracking-wider">
                {m.label[lang]}
              </p>
              <p className="text-white/15 text-[8px] font-bold mt-0.5">
                +{count * m.points} {lang === 'el' ? 'πόντοι' : 'pts'}
              </p>
            </div>
          );
        })}
      </div>

      {/* Motivational footer */}
      <div className="text-center pt-2">
        <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.3em]">
          {lang === 'el'
            ? totalScore === 0 ? '🚀 Ξεκίνα το ταξίδι σου! Διάβασε, παίξε, δημιούργησε!' : '💪 Συνέχισε! Κάθε δραστηριότητα σου δίνει πόντους!'
            : totalScore === 0 ? '🚀 Start your journey! Read, play, create!' : '💪 Keep going! Every activity earns you points!'}
        </p>
      </div>
    </div>
  );
};

const Dashboard: React.FC<DashboardProps> = ({ lang, xp, level, completedIds, myHeroes = [] }) => {
  const navigate = useNavigate();
  const { credits, badges, stats } = useEconomy();
  const [dashboardVideo, setDashboardVideo] = useState<typeof DASHBOARD_VIDEOS[0] | null>(null);

  // ============================================================
  // 🔓 UNLOCK LOGIC (Progressive Quest-Based)
  // ============================================================
  const isQuizUnlocked = stats.lessonsRead >= 2 || stats.booksRead >= 1;
  const isMusicUnlocked = stats.lessonsRead >= 1;
  const isFactoryUnlocked = stats.lessonsRead >= 3 || stats.booksRead >= 2;
  const isCinemaUnlocked = stats.imagesCreated >= 1;
  const isMarketUnlocked = stats.imagesCreated >= 1;
  const isBusinessUnlocked = stats.lessonsRead >= 2;
  const is3DUnlocked = badges.creator;

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

  // Color map to avoid dynamic Tailwind classes (which break in production)
  const COLOR_MAP: Record<string, { hoverBorder: string; ring: string; gradientBg: string; gradientFrom: string; border: string; bg: string; text400: string; text300: string; hoverOverlay: string }> = {
    blue: { hoverBorder: 'hover:border-blue-500/50', ring: 'ring-blue-500/20', gradientBg: 'bg-gradient-to-br from-blue-500 to-blue-700', gradientFrom: 'bg-gradient-to-br from-blue-500/5 to-transparent', border: 'border-blue-500/30', bg: 'bg-blue-500/10', text400: 'text-blue-400', text300: 'text-blue-300', hoverOverlay: 'from-blue-500/5' },
    indigo: { hoverBorder: 'hover:border-indigo-500/50', ring: 'ring-indigo-500/20', gradientBg: 'bg-gradient-to-br from-indigo-500 to-indigo-700', gradientFrom: 'bg-gradient-to-br from-indigo-500/5 to-transparent', border: 'border-indigo-500/30', bg: 'bg-indigo-500/10', text400: 'text-indigo-400', text300: 'text-indigo-300', hoverOverlay: 'from-indigo-500/5' },
    purple: { hoverBorder: 'hover:border-purple-500/50', ring: 'ring-purple-500/20', gradientBg: 'bg-gradient-to-br from-purple-500 to-purple-700', gradientFrom: 'bg-gradient-to-br from-purple-500/5 to-transparent', border: 'border-purple-500/30', bg: 'bg-purple-500/10', text400: 'text-purple-400', text300: 'text-purple-300', hoverOverlay: 'from-purple-500/5' },
    fuchsia: { hoverBorder: 'hover:border-fuchsia-500/50', ring: 'ring-fuchsia-500/20', gradientBg: 'bg-gradient-to-br from-fuchsia-500 to-fuchsia-700', gradientFrom: 'bg-gradient-to-br from-fuchsia-500/5 to-transparent', border: 'border-fuchsia-500/30', bg: 'bg-fuchsia-500/10', text400: 'text-fuchsia-400', text300: 'text-fuchsia-300', hoverOverlay: 'from-fuchsia-500/5' },
    pink: { hoverBorder: 'hover:border-pink-500/50', ring: 'ring-pink-500/20', gradientBg: 'bg-gradient-to-br from-pink-500 to-pink-700', gradientFrom: 'bg-gradient-to-br from-pink-500/5 to-transparent', border: 'border-pink-500/30', bg: 'bg-pink-500/10', text400: 'text-pink-400', text300: 'text-pink-300', hoverOverlay: 'from-pink-500/5' },
    rose: { hoverBorder: 'hover:border-rose-500/50', ring: 'ring-rose-500/20', gradientBg: 'bg-gradient-to-br from-rose-500 to-rose-700', gradientFrom: 'bg-gradient-to-br from-rose-500/5 to-transparent', border: 'border-rose-500/30', bg: 'bg-rose-500/10', text400: 'text-rose-400', text300: 'text-rose-300', hoverOverlay: 'from-rose-500/5' },
    amber: { hoverBorder: 'hover:border-amber-500/50', ring: 'ring-amber-500/20', gradientBg: 'bg-gradient-to-br from-amber-500 to-amber-700', gradientFrom: 'bg-gradient-to-br from-amber-500/5 to-transparent', border: 'border-amber-500/30', bg: 'bg-amber-500/10', text400: 'text-amber-400', text300: 'text-amber-300', hoverOverlay: 'from-amber-500/5' },
    emerald: { hoverBorder: 'hover:border-emerald-500/50', ring: 'ring-emerald-500/20', gradientBg: 'bg-gradient-to-br from-emerald-500 to-emerald-700', gradientFrom: 'bg-gradient-to-br from-emerald-500/5 to-transparent', border: 'border-emerald-500/30', bg: 'bg-emerald-500/10', text400: 'text-emerald-400', text300: 'text-emerald-300', hoverOverlay: 'from-emerald-500/5' },
    green: { hoverBorder: 'hover:border-green-500/50', ring: 'ring-green-500/20', gradientBg: 'bg-gradient-to-br from-green-500 to-green-700', gradientFrom: 'bg-gradient-to-br from-green-500/5 to-transparent', border: 'border-green-500/30', bg: 'bg-green-500/10', text400: 'text-green-400', text300: 'text-green-300', hoverOverlay: 'from-green-500/5' },
    cyan: { hoverBorder: 'hover:border-cyan-500/50', ring: 'ring-cyan-500/20', gradientBg: 'bg-gradient-to-br from-cyan-500 to-cyan-700', gradientFrom: 'bg-gradient-to-br from-cyan-500/5 to-transparent', border: 'border-cyan-500/30', bg: 'bg-cyan-500/10', text400: 'text-cyan-400', text300: 'text-cyan-300', hoverOverlay: 'from-cyan-500/5' },
  };

  // Module Card — Premium design with cover images & teal CTA
  const ModuleCard = ({
    title, subtitle, rewardText, icon: Icon, color, path, image,
    locked = false, unlockHint = '', delay = 0, featured = false, isNext = false
  }: any) => {
    const c = COLOR_MAP[color] || COLOR_MAP.blue;
    return (
    <div
      onClick={() => !locked && navigate(path)}
      className={`relative group cursor-pointer rounded-[2.5rem] border-2 transition-all duration-500 overflow-hidden flex flex-col h-full
        ${locked
          ? 'border-white/[0.04] bg-white/[0.02] opacity-50 grayscale pointer-events-none'
          : `border-white/[0.06] ${c.hoverBorder} bg-white/[0.03] backdrop-blur-sm hover:bg-white/[0.06] hover:-translate-y-2 hover:shadow-2xl`
        }
        ${featured ? `ring-4 ${c.ring}` : ''}
        ${isNext ? 'ring-2 ring-amber-500/40 animate-pulse-slow' : ''}
      `}
      style={{ animationDelay: `${delay}ms` }}
    >
        {/* Cover Image */}
        {image && (
          <div className="relative w-full aspect-[16/10] overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F1A] via-[#0B0F1A]/50 to-transparent" />
            {/* Icon overlaid on image */}
            <div className="absolute top-4 left-4 z-10">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg border border-white/20 backdrop-blur-md
                  ${locked ? 'bg-white/10' : c.gradientBg}`}>
                  {locked ? <Lock size={22} /> : <Icon size={24} />}
              </div>
            </div>
            {/* Reward badge overlaid on image */}
            {!locked && (
              <div className="absolute top-4 right-4 z-10">
                <div className={`px-3 py-1.5 rounded-lg border ${c.border} ${c.bg} backdrop-blur-md flex items-center gap-2`}>
                   <Zap size={12} className={`${c.text400} fill-current`} />
                   <span className={`text-[9px] font-black uppercase tracking-widest ${c.text300}`}>
                      {rewardText}
                   </span>
                </div>
              </div>
            )}
          </div>
        )}

        {!locked && <div className={`absolute inset-0 ${c.gradientFrom} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />}

        {/* "NEXT" badge for the next quest objective */}
        {isNext && !locked && (
          <div className={`absolute ${image ? 'top-[4.5rem]' : 'top-4'} right-4 z-20`}>
            <div className="px-2 py-1 bg-amber-500 rounded-full flex items-center gap-1 shadow-lg animate-bounce">
              <Target size={10} className="text-black" />
              <span className="text-[8px] font-black text-black uppercase tracking-wider">{lang === 'el' ? 'ΑΠΟΣΤΟΛΗ' : 'QUEST'}</span>
            </div>
          </div>
        )}

        <div className={`${image ? 'px-8 pb-5 pt-2' : 'p-8'} flex-1 flex flex-col relative z-10`}>
            {/* Icon + Reward row — only when no cover image */}
            {!image && (
              <div className="flex justify-between items-start mb-6">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-lg transition-transform group-hover:scale-110 border border-white/10
                    ${locked ? 'bg-white/5' : c.gradientBg}`}>
                    {locked ? <Lock size={28} /> : <Icon size={32} />}
                </div>
                {!locked && (
                    <div className={`px-3 py-1.5 rounded-lg border ${c.border} ${c.bg} flex items-center gap-2`}>
                       <Zap size={12} className={`${c.text400} fill-current`} />
                       <span className={`text-[9px] font-black uppercase tracking-widest ${c.text300}`}>
                          {rewardText}
                       </span>
                    </div>
                )}
              </div>
            )}
            <div className="mt-auto space-y-2">
                <h3 className="text-2xl font-[1000] text-white uppercase italic tracking-tighter leading-none group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-all">
                    {title}
                </h3>
                <p className="text-white/50 text-xs font-bold leading-relaxed">
                    {subtitle}
                </p>
            </div>
        </div>

        {/* CTA Footer — Teal glow for unlocked */}
        <div className={`px-8 py-4 border-t flex items-center justify-between transition-all ${
          locked
            ? 'border-white/5 bg-black/20'
            : 'border-emerald-500/10 bg-gradient-to-r from-emerald-500/[0.08] to-teal-500/[0.08] group-hover:from-emerald-500/20 group-hover:to-teal-500/20'
        }`}>
            <span className={`font-black uppercase transition-colors ${
              locked
                ? 'text-[9px] tracking-[0.15em] text-amber-400/60'
                : 'text-[11px] tracking-[0.2em] text-emerald-400/80 group-hover:text-emerald-300'
            }`}>
                {locked ? (unlockHint || (lang === 'el' ? 'ΚΛΕΙΔΩΜΕΝΟ' : 'LOCKED')) : (lang === 'el' ? 'ΠΑΙΞΕ' : 'PLAY')}
            </span>
            {!locked && <ChevronRight size={18} className="text-emerald-400/60 group-hover:text-emerald-300 group-hover:translate-x-1 transition-all" />}
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
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F1A] via-[#0B0F1A]/40 to-transparent flex flex-col justify-end p-6 md:p-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/40 border border-blue-500/30 text-blue-300 mb-3 w-fit backdrop-blur-sm">
                <Compass size={16} />
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">{lang === 'el' ? 'ΑΡΧΗΓΕΙΟ WISEBOT ACADEMY' : 'WISEBOT ACADEMY HQ'}</span>
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-[1000] text-white italic tracking-tighter uppercase leading-none">
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
            onClick={() => !item.locked && navigate(item.path)}
            className={`relative flex flex-col items-center justify-center gap-2 py-5 rounded-2xl border-2 transition-all overflow-hidden group ${
              item.locked
                ? 'border-white/5 bg-white/[0.03] opacity-40 cursor-not-allowed'
                : 'border-white/10 bg-white/[0.03] backdrop-blur-sm hover:border-white/20 hover:-translate-y-1 hover:shadow-lg active:scale-95 cursor-pointer'
            }`}
          >
            {!item.locked && (
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: `linear-gradient(135deg, rgba(255,255,255,0.03), transparent)` }} />
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
      <div className="bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] rounded-[2rem] p-6 md:p-8 space-y-6">
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
                {lang === 'el' ? `${completedStages}/${QUEST_STAGES.length} Στάδια Αποστολής` : `${completedStages}/${QUEST_STAGES.length} Quest Stages`}
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
                {lang === 'el' ? 'ΤΡΕΧΟΥΣΑ ΑΠΟΣΤΟΛΗ' : 'CURRENT QUEST'}
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
                {lang === 'el' ? 'Ολοκλήρωσες όλες τις Αποστολές! Είσαι θρύλος!' : 'You completed all Quests! You are a legend!'}
              </p>
            </div>
            <Trophy size={20} className="text-amber-400 shrink-0" />
          </div>
        )}
      </div>

      {/* ⚡ DAILY MISSION */}
      <DailyMission lang={lang} />

      {/* 🎬 VIDEO HIGHLIGHTS */}
      <div className="bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] rounded-[2rem] p-6 md:p-8 space-y-5">
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
            image="/images/paidia-kai-wisebot.webp"
            delay={0}
            isNext={currentQuestIdx === 0}
         />
         <ModuleCard
            title={t.dashboard.modules.ebooks.title}
            subtitle={lang === 'el' ? 'Η Βιβλιοθήκη της Σοφίας. Κάθε βιβλίο σου δίνει ενέργεια.' : 'The Library of Wisdom. Every book gives you energy.'}
            rewardText={lang === 'el' ? '+2 CREDITS' : '+2 CREDITS'}
            icon={Book}
            color="indigo"
            path="/ebooks"
            image="/images/foxi%20teacher.webp"
            delay={100}
         />
         <ModuleCard
            title={t.dashboard.modules.game.title}
            subtitle={lang === 'el' ? 'Arcade δράση, γρίφοι και συνεργατικά παιχνίδια.' : 'Arcade action, puzzles and co-op games.'}
            rewardText={t.dashboard.modules.game.btn}
            icon={Gamepad2}
            color="fuchsia"
            path="/game"
            image="/images/ta-3-paidia.webp"
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
            image="/images/paidia-wisebot-2.webp"
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
            image="/images/paidia-kai-pencilo.webp"
            locked={!isMusicUnlocked}
            unlockHint={lang === 'el' ? '🔓 Διάβασε 1 ιστορία' : '🔓 Read 1 story'}
            delay={400}
         />
         <ModuleCard
            title={t.dashboard.modules.business.title}
            subtitle={lang === 'el' ? 'Φτιάξε εταιρεία, λογότυπο και μάθε επιχειρηματικότητα.' : 'Build a company, create a logo and learn entrepreneurship.'}
            rewardText={lang === 'el' ? '+3 CREDITS' : '+3 CREDITS'}
            icon={Briefcase}
            color="green"
            path="/business"
            image="/images/paidia-kai-sparken.webp"
            locked={!isBusinessUnlocked}
            unlockHint={lang === 'el' ? '🔓 Διάβασε 2 ιστορίες' : '🔓 Read 2 stories'}
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
            image="/images/WiseBot_Hero_spark.webp"
            locked={!isFactoryUnlocked}
            unlockHint={lang === 'el' ? '🔓 Διάβασε 3 ιστορίες ή 2 βιβλία' : '🔓 Read 3 stories or 2 books'}
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
            image="/images/paidia-kai-crocus.webp"
            locked={!isCinemaUnlocked}
            unlockHint={lang === 'el' ? '🔓 Δημιούργησε 1 ήρωα' : '🔓 Create 1 hero'}
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
            image="/images/paidia-kai-link.webp"
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
            image="/images/WiseBot_Hero_lion_quin.webp"
            locked={!is3DUnlocked}
            unlockHint={lang === 'el' ? '🔓 Κέρδισε Creator Badge' : '🔓 Earn Creator Badge'}
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
            image="/images/eksofilo.webp"
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
                    <span className="text-xs font-bold text-white/30 bg-white/5 px-2 py-1 rounded">
                        {lang === 'el' ? 'Επίπεδο' : 'Level'} {level}
                    </span>
                </div>
                <div className="flex justify-between gap-2 flex-wrap">
                    <BadgeItem icon={Brain} title={lang === 'el' ? 'Στοχαστής' : 'Thinker'} unlocked={badges.thinker} />
                    <BadgeItem icon={Palette} title={lang === 'el' ? 'Δημιουργός' : 'Creator'} unlocked={badges.creator} />
                    <BadgeItem icon={Film} title={lang === 'el' ? 'Σκηνοθέτης' : 'Director'} unlocked={badges.filmmaker} />
                    <BadgeItem icon={Hammer} title={lang === 'el' ? 'Μάστορας' : 'Builder'} unlocked={badges.builder} />
                    <BadgeItem icon={Store} title={lang === 'el' ? 'Έμπορος' : 'Trader'} unlocked={badges.market} />
                    <BadgeItem icon={Music} title={lang === 'el' ? 'Μουσικός' : 'Musician'} unlocked={badges.musician} />
                    <BadgeItem icon={FlaskConical} title={lang === 'el' ? 'Επιστήμονας' : 'Scientist'} unlocked={badges.scientist} />
                    <BadgeItem icon={Globe} title={lang === 'el' ? 'Εξερευνητής' : 'Explorer'} unlocked={badges.explorer} />
                </div>
            </div>
         </div>

         <div className="text-center mt-8">
             <p className="text-white/20 font-bold uppercase tracking-[0.3em] text-[10px]">
                 WISEBOT ACADEMY v2.5 • EST. 2024
             </p>
         </div>
      </div>

    </div>
  );
}

export default Dashboard;
