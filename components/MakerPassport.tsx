/**
 * MAKER PASSPORT — «κοίτα τι έφτιαξα μόνος μου» σε μία οθόνη.
 * ============================================================
 * The child's identity page (PRODUCT-VISION Νο3): current Maker tier from XP
 * (data/makerLevels.ts), the ladder to Legend, and the portfolio — real counts from
 * data that already exists and already syncs (EconomyContext stats, School best runs
 * in wb_quiz_best_*). Shows only; awards nothing, charges nothing.
 *
 * Guests see their local progress plus a "keep it forever" nudge to make an account —
 * the passport itself is the signup argument.
 */
import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  BookOpen, GraduationCap, Brain, Palette, Film, Music, Briefcase, Star,
  Award, Lock, ChevronRight, Sparkles,
} from 'lucide-react';
import { useEconomy } from '../context/EconomyContext';
import { useAuth } from '../context/AuthContext';
import { MAKER_LEVELS, makerProgress } from '../data/makerLevels';
import { readLocalQuizBests } from '../services/syncService';
import { getQuizStars } from './QuizEngine';

interface MakerPassportProps {
  lang: 'el' | 'en';
  xp: number;
  level: number;
}

/** School numbers straight from the same best-run keys the School screen scores. */
const useSchoolSummary = () => useMemo(() => {
  const keys = Object.keys(readLocalQuizBests()).filter(k => k.startsWith('school-g'));
  const examKeys = keys.filter(k => /^school-g\d+-exam$/.test(k));
  const missionKeys = keys.filter(k => !/^school-g\d+-exam$/.test(k));
  return {
    missions: missionKeys.length,
    stars: missionKeys.reduce((s, k) => s + getQuizStars(k), 0),
    diplomas: examKeys.filter(k => getQuizStars(k) >= 2).length,
  };
}, []);

const StatCard = ({ icon, value, label, accent }: {
  icon: React.ReactNode; value: number; label: string; accent: string;
}) => (
  <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-4 flex items-center gap-4">
    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${accent}`}>
      {icon}
    </div>
    <div className="min-w-0">
      <div className="text-3xl font-[1000] text-white italic tracking-tighter leading-none">{value}</div>
      <div className="text-[10px] font-black text-white/40 uppercase tracking-widest mt-1 truncate">{label}</div>
    </div>
  </div>
);

const MakerPassport: React.FC<MakerPassportProps> = ({ lang, xp, level }) => {
  const { stats } = useEconomy();
  const { isGuest } = useAuth();
  const school = useSchoolSummary();
  const progress = makerProgress(xp);
  const { current, next } = progress;

  const t = lang === 'el' ? {
    title: 'MAKER PASSPORT',
    subtitle: 'Ό,τι έμαθες και ό,τι δημιούργησες — δικό σου, για πάντα.',
    levelWord: 'Επίπεδο',
    xpToNext: (n: number, name: string) => `${n} XP μέχρι το ${name}`,
    ladderComplete: 'Έφτασες στην κορυφή. Θρύλος.',
    ladder: 'Η ΔΙΑΔΡΟΜΗ ΣΟΥ',
    portfolio: 'ΤΟ ΠΟΡΤΦΟΛΙΟ ΣΟΥ',
    school: 'ΣΧΟΛΕΙΟ',
    books: 'Βιβλία', stories: 'Ιστορίες Ακαδημίας', quizzes: 'Quiz που πέρασες',
    heroes: 'Εικόνες & ήρωες', videos: 'Βίντεο', songs: 'Τραγούδια', businesses: 'Επιχειρήσεις',
    missions: 'Αποστολές', stars: 'Αστέρια', diplomas: 'Απολυτήρια',
    guestTitle: 'Το Διαβατήριο ζει μόνο σε αυτή τη συσκευή',
    guestText: 'Φτιάξε δωρεάν λογαριασμό για να το κρατήσεις για πάντα — σε κάθε συσκευή.',
    guestCta: 'Κράτα το Διαβατήριό μου',
    empty: 'Το ταξίδι μόλις ξεκίνησε — διάβασε μια ιστορία ή παίξε μια αποστολή και γέμισέ το!',
    emptyCta: 'Ξεκίνα από το Σχολείο',
  } : {
    title: 'MAKER PASSPORT',
    subtitle: 'Everything you learned and everything you made — yours, forever.',
    levelWord: 'Level',
    xpToNext: (n: number, name: string) => `${n} XP to ${name}`,
    ladderComplete: 'You reached the top. A Legend.',
    ladder: 'YOUR JOURNEY',
    portfolio: 'YOUR PORTFOLIO',
    school: 'SCHOOL',
    books: 'Books', stories: 'Academy stories', quizzes: 'Quizzes passed',
    heroes: 'Images & heroes', videos: 'Videos', songs: 'Songs', businesses: 'Businesses',
    missions: 'Missions', stars: 'Stars', diplomas: 'Diplomas',
    guestTitle: 'Your Passport lives only on this device',
    guestText: 'Create a free account to keep it forever — on every device.',
    guestCta: 'Keep my Passport',
    empty: 'The journey just began — read a story or play a mission and fill it up!',
    emptyCta: 'Start with School',
  };

  const portfolio = [
    { icon: <BookOpen size={22} className="text-blue-300" />, value: stats.booksRead, label: t.books, accent: 'bg-blue-500/15 border border-blue-500/20' },
    { icon: <GraduationCap size={22} className="text-amber-300" />, value: stats.lessonsRead, label: t.stories, accent: 'bg-amber-500/15 border border-amber-500/20' },
    { icon: <Brain size={22} className="text-emerald-300" />, value: stats.quizzesPassed, label: t.quizzes, accent: 'bg-emerald-500/15 border border-emerald-500/20' },
    { icon: <Palette size={22} className="text-fuchsia-300" />, value: stats.imagesCreated, label: t.heroes, accent: 'bg-fuchsia-500/15 border border-fuchsia-500/20' },
    { icon: <Film size={22} className="text-rose-300" />, value: stats.videosCreated, label: t.videos, accent: 'bg-rose-500/15 border border-rose-500/20' },
    { icon: <Music size={22} className="text-purple-300" />, value: stats.songsCreated, label: t.songs, accent: 'bg-purple-500/15 border border-purple-500/20' },
    { icon: <Briefcase size={22} className="text-orange-300" />, value: stats.businessesCreated, label: t.businesses, accent: 'bg-orange-500/15 border border-orange-500/20' },
  ];
  const isEmpty = portfolio.every(p => p.value === 0) && school.missions === 0;

  return (
    <div className="max-w-4xl mx-auto px-4 pt-8 pb-32">
      {/* ── IDENTITY ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-8 md:p-10 text-center"
      >
        <div className={`absolute -top-24 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-gradient-to-br ${current.gradient} opacity-20 blur-3xl pointer-events-none`} />

        <p className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em] mb-6">{t.title}</p>

        <div className={`w-28 h-28 mx-auto rounded-[2rem] bg-gradient-to-br ${current.gradient} flex items-center justify-center text-6xl shadow-2xl border-2 border-white/20`}>
          <span role="img" aria-hidden>{current.emoji}</span>
        </div>

        <h1 className="mt-5 text-4xl md:text-5xl font-[1000] text-white uppercase italic tracking-tighter">
          {current.name}
        </h1>
        <p className="text-white/50 font-bold italic mt-1">{current.tagline[lang]}</p>

        <div className="mt-2 text-xs font-black text-white/30 uppercase tracking-widest">
          {t.levelWord} {level} · {xp} XP
        </div>

        {/* Progress to next tier */}
        <div className="max-w-md mx-auto mt-6">
          <div className="h-3 rounded-full bg-white/10 overflow-hidden border border-white/10">
            <div
              className={`h-full rounded-full bg-gradient-to-r ${(next ?? current).gradient} transition-all duration-700`}
              style={{ width: `${progress.pct}%` }}
            />
          </div>
          <p className="text-[11px] font-bold text-white/40 mt-2 uppercase tracking-wider">
            {next ? t.xpToNext(progress.xpForNext, next.name) : t.ladderComplete}
          </p>
        </div>

        <p className="text-white/60 text-sm md:text-base font-bold italic mt-6 max-w-lg mx-auto">{t.subtitle}</p>
      </motion.div>

      {/* ── LADDER ── */}
      <section className="mt-10">
        <h2 className="text-sm font-black text-white/50 uppercase tracking-[0.25em] mb-4">{t.ladder}</h2>
        <div className="grid grid-cols-7 gap-1.5 md:gap-3">
          {MAKER_LEVELS.map(l => {
            const reached = xp >= l.minXp;
            const isCurrent = l.id === current.id;
            return (
              <div
                key={l.id}
                className={`rounded-2xl p-2 md:p-3 text-center border transition-all ${
                  isCurrent
                    ? 'bg-white/10 border-white/30 scale-105 shadow-xl'
                    : reached
                      ? 'bg-white/[0.05] border-white/10'
                      : 'bg-white/[0.02] border-white/[0.06] opacity-50'
                }`}
              >
                <div className={`w-9 h-9 md:w-12 md:h-12 mx-auto rounded-xl flex items-center justify-center text-lg md:text-2xl ${
                  reached ? `bg-gradient-to-br ${l.gradient}` : 'bg-white/5'
                }`}>
                  {reached ? <span role="img" aria-hidden>{l.emoji}</span> : <Lock size={14} className="text-white/30" />}
                </div>
                <div className={`mt-1.5 text-[8px] md:text-[10px] font-black uppercase tracking-wide truncate ${reached ? 'text-white/80' : 'text-white/30'}`}>
                  {l.name}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── PORTFOLIO ── */}
      <section className="mt-10">
        <h2 className="text-sm font-black text-white/50 uppercase tracking-[0.25em] mb-4">{t.portfolio}</h2>
        {isEmpty ? (
          <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6 text-center">
            <p className="text-white/50 font-bold italic">{t.empty}</p>
            <Link
              to="/school"
              className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 bg-white text-black rounded-full font-[900] uppercase tracking-widest text-xs hover:scale-105 transition-transform"
            >
              <Sparkles size={14} /> {t.emptyCta} <ChevronRight size={14} />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {portfolio.map((p, i) => <StatCard key={i} {...p} />)}
          </div>
        )}
      </section>

      {/* ── SCHOOL ── */}
      {school.missions > 0 && (
        <section className="mt-10">
          <h2 className="text-sm font-black text-white/50 uppercase tracking-[0.25em] mb-4">{t.school}</h2>
          <div className="grid grid-cols-3 gap-3">
            <StatCard icon={<GraduationCap size={22} className="text-amber-300" />} value={school.missions} label={t.missions} accent="bg-amber-500/15 border border-amber-500/20" />
            <StatCard icon={<Star size={22} className="text-yellow-300" />} value={school.stars} label={t.stars} accent="bg-yellow-500/15 border border-yellow-500/20" />
            <StatCard icon={<Award size={22} className="text-emerald-300" />} value={school.diplomas} label={t.diplomas} accent="bg-emerald-500/15 border border-emerald-500/20" />
          </div>
        </section>
      )}

      {/* ── GUEST NUDGE ── */}
      {isGuest && (
        <section className="mt-10">
          <div className="rounded-2xl border border-amber-500/25 bg-amber-500/[0.07] p-6 text-center">
            <h3 className="text-white font-black uppercase tracking-wider text-sm">{t.guestTitle}</h3>
            <p className="text-white/50 text-sm font-bold mt-1">{t.guestText}</p>
            <Link
              to="/login"
              className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 bg-amber-400 text-black rounded-full font-[900] uppercase tracking-widest text-xs hover:scale-105 transition-transform"
            >
              {t.guestCta} <ChevronRight size={14} />
            </Link>
          </div>
        </section>
      )}
    </div>
  );
};

export default MakerPassport;
