
import React, { useState } from 'react';
import {
  Shield, Brain, Palette, Clapperboard, Hammer, Store, Music, FlaskConical, Globe,
  Zap, BookOpen, Image as ImageIcon, Trophy, Briefcase, BarChart3, Clock, Target,
  ArrowLeft, Lock, Unlock, CheckCircle2, AlertCircle, Flame, Mail, KeyRound, Loader2
} from 'lucide-react';
import { useEconomy } from '../context/EconomyContext';
import { supabase, isSupabaseConfigured } from '../services/supabaseClient';

interface ParentDashboardProps {
  lang: 'el' | 'en';
}

export default function ParentDashboard({ lang }: ParentDashboardProps) {
  const { credits, badges, stats, streak } = useEconomy();
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [parentEmail, setParentEmail] = useState('');
  const [parentPassword, setParentPassword] = useState('');
  const [authError, setAuthError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Fallback PIN for when Supabase is not configured
  const PARENT_PIN = (import.meta as any).env?.VITE_PARENT_PIN || '1821';
  const [pin, setPin] = useState('');
  const useEmailAuth = isSupabaseConfigured();

  const t = lang === 'el' ? {
    title: 'ΓΟΝΕΪΚΟΣ ΠΙΝΑΚΑΣ',
    subtitle: 'Παρακολουθήστε την πρόοδο του παιδιού σας',
    pinTitle: 'Εισαγωγή PIN',
    pinDesc: 'Εισάγετε το PIN γονέα',
    pinBtn: 'ΕΙΣΟΔΟΣ',
    pinError: 'Λάθος PIN',
    overview: 'ΕΠΙΣΚΟΠΗΣΗ',
    activity: 'ΔΡΑΣΤΗΡΙΟΤΗΤΑ',
    badges: 'ΒΡΑΒΕΙΑ',
    credits: 'Διαθέσιμα Credits',
    streak: 'Ημέρες Σερί',
    totalBadges: 'Βραβεία',
    statsTitle: 'ΣΤΑΤΙΣΤΙΚΑ ΜΑΘΗΣΗΣ',
    quizzes: 'Κουίζ',
    lessons: 'Μαθήματα',
    books: 'Βιβλία',
    heroes: 'Ήρωες',
    songs: 'Τραγούδια',
    businesses: 'Επιχειρήσεις',
    videos: 'Βίντεο',
    uploads: 'Δημοσιεύσεις',
    badgesTitle: 'ΣΥΛΛΟΓΗ ΒΡΑΒΕΙΩΝ',
    unlocked: 'Ξεκλειδωμένο',
    locked: 'Κλειδωμένο',
    tips: 'ΣΥΜΒΟΥΛΕΣ',
    tip1: 'Ενθαρρύνετε το παιδί σας να ολοκληρώνει τις ημερήσιες αποστολές για bonus credits',
    tip2: 'Τα κουίζ βοηθούν στην κατανόηση — ρωτήστε τι έμαθε σήμερα',
    tip3: 'Η δημιουργία ηρώων αναπτύσσει τη φαντασία και τη δημιουργικότητα',
    safeTitle: 'ΑΣΦΑΛΕΙΑ',
    safe1: 'Δεν υπάρχει πρόσβαση σε εξωτερικά sites',
    safe2: 'Κανένα chat με άγνωστους χρήστες',
    safe3: 'Όλο το περιεχόμενο είναι εκπαιδευτικό',
  } : {
    title: 'PARENT DASHBOARD',
    subtitle: 'Monitor your child\'s progress',
    pinTitle: 'Enter PIN',
    pinDesc: 'Enter parent PIN',
    pinBtn: 'ENTER',
    pinError: 'Wrong PIN',
    overview: 'OVERVIEW',
    activity: 'ACTIVITY',
    badges: 'BADGES',
    credits: 'Available Credits',
    streak: 'Day Streak',
    totalBadges: 'Badges',
    statsTitle: 'LEARNING STATS',
    quizzes: 'Quizzes',
    lessons: 'Lessons',
    books: 'Books',
    heroes: 'Heroes',
    songs: 'Songs',
    businesses: 'Businesses',
    videos: 'Videos',
    uploads: 'Uploads',
    badgesTitle: 'BADGE COLLECTION',
    unlocked: 'Unlocked',
    locked: 'Locked',
    tips: 'TIPS',
    tip1: 'Encourage daily missions for bonus credits',
    tip2: 'Quizzes boost comprehension — ask what they learned today',
    tip3: 'Hero creation develops imagination and creativity',
    safeTitle: 'SAFETY',
    safe1: 'No access to external websites',
    safe2: 'No chat with strangers',
    safe3: 'All content is educational',
  };

  const badgeList = [
    { key: 'thinker', title: lang === 'el' ? 'Στοχαστής' : 'Thinker', icon: Brain, req: lang === 'el' ? '5 κουίζ ή μαθήματα' : '5 quizzes or lessons', gradient: 'from-blue-400 to-cyan-500' },
    { key: 'creator', title: lang === 'el' ? 'Δημιουργός' : 'Creator', icon: Palette, req: lang === 'el' ? '5 εικόνες' : '5 images', gradient: 'from-pink-400 to-rose-500' },
    { key: 'filmmaker', title: lang === 'el' ? 'Σκηνοθέτης' : 'Director', icon: Clapperboard, req: lang === 'el' ? '2 βίντεο' : '2 videos', gradient: 'from-amber-400 to-orange-500' },
    { key: 'builder', title: lang === 'el' ? 'Μάστορας' : 'Builder', icon: Hammer, req: lang === 'el' ? '1 ολοκληρωμένος ήρωας' : '1 completed hero', gradient: 'from-emerald-400 to-green-500' },
    { key: 'market', title: lang === 'el' ? 'Έμπορος' : 'Trader', icon: Store, req: lang === 'el' ? '1 δημοσίευση' : '1 upload', gradient: 'from-violet-400 to-purple-500' },
    { key: 'musician', title: lang === 'el' ? 'Μουσικός' : 'Musician', icon: Music, req: lang === 'el' ? '3 τραγούδια' : '3 songs', gradient: 'from-fuchsia-400 to-pink-500' },
    { key: 'scientist', title: lang === 'el' ? 'Επιστήμονας' : 'Scientist', icon: FlaskConical, req: lang === 'el' ? '10 κουίζ' : '10 quizzes', gradient: 'from-lime-400 to-green-500' },
    { key: 'explorer', title: lang === 'el' ? 'Εξερευνητής' : 'Explorer', icon: Globe, req: lang === 'el' ? '10 ιστορίες' : '10 stories', gradient: 'from-sky-400 to-blue-500' },
  ];

  const unlockedCount = Object.values(badges).filter(Boolean).length;

  const statItems = [
    { icon: Trophy, label: t.quizzes, value: stats.quizzesPassed, color: 'text-amber-400' },
    { icon: BookOpen, label: t.lessons, value: stats.lessonsRead, color: 'text-blue-400' },
    { icon: BookOpen, label: t.books, value: stats.booksRead, color: 'text-purple-400' },
    { icon: ImageIcon, label: t.heroes, value: stats.imagesCreated, color: 'text-pink-400' },
    { icon: Music, label: t.songs, value: stats.songsCreated, color: 'text-fuchsia-400' },
    { icon: Briefcase, label: t.businesses, value: stats.businessesCreated, color: 'text-emerald-400' },
    { icon: Clapperboard, label: t.videos, value: stats.videosCreated, color: 'text-orange-400' },
    { icon: Store, label: t.uploads, value: stats.heroesUploaded, color: 'text-violet-400' },
  ];

  // Parent login handler (Supabase email/password)
  const handleParentLogin = async () => {
    if (!parentEmail || !parentPassword) return;
    setIsLoading(true);
    setAuthError('');

    try {
      // Sign in as parent via Supabase Auth
      const { error } = await supabase.auth.signInWithPassword({
        email: parentEmail,
        password: parentPassword,
      });

      if (error) {
        setAuthError(lang === 'el' ? 'Λάθος email ή κωδικός' : 'Wrong email or password');
      } else {
        setIsUnlocked(true);
      }
    } catch {
      setAuthError(lang === 'el' ? 'Σφάλμα σύνδεσης' : 'Connection error');
    } finally {
      setIsLoading(false);
    }
  };

  // Auth Gate
  if (!isUnlocked) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="w-full max-w-sm bg-[#0B0F1A]/80 border border-white/10 rounded-3xl p-10 text-center backdrop-blur-xl">
          <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-blue-500/30">
            <Shield size={32} className="text-blue-400" />
          </div>
          <h2 className="text-2xl font-black text-white uppercase italic tracking-tighter mb-2">{t.pinTitle}</h2>
          <p className="text-white/50 text-sm mb-6">{t.pinDesc}</p>

          {useEmailAuth ? (
            /* Supabase email/password auth */
            <div className="space-y-4">
              <div className="relative">
                <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
                <input
                  type="email"
                  value={parentEmail}
                  onChange={e => setParentEmail(e.target.value)}
                  placeholder={lang === 'el' ? 'Email γονέα' : 'Parent email'}
                  className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 text-sm focus:border-blue-500/50 focus:outline-none transition-colors"
                  onKeyDown={e => e.key === 'Enter' && handleParentLogin()}
                />
              </div>
              <div className="relative">
                <KeyRound size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
                <input
                  type="password"
                  value={parentPassword}
                  onChange={e => setParentPassword(e.target.value)}
                  placeholder={lang === 'el' ? 'Κωδικός' : 'Password'}
                  className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 text-sm focus:border-blue-500/50 focus:outline-none transition-colors"
                  onKeyDown={e => e.key === 'Enter' && handleParentLogin()}
                />
              </div>
              {authError && (
                <p className="text-red-400 text-xs font-bold flex items-center justify-center gap-1">
                  <AlertCircle size={12} /> {authError}
                </p>
              )}
              <button
                onClick={handleParentLogin}
                disabled={isLoading || !parentEmail || !parentPassword}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-black uppercase tracking-wider text-sm hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isLoading ? <Loader2 size={16} className="animate-spin" /> : <Unlock size={16} />}
                {t.pinBtn}
              </button>
            </div>
          ) : (
            /* Fallback: PIN auth (for local dev without Supabase) */
            <>
              <div className="flex justify-center gap-2 mb-6">
                {[0, 1, 2, 3].map(i => (
                  <div key={i} className={`w-12 h-12 rounded-xl border-2 flex items-center justify-center text-2xl font-black ${
                    pin.length > i ? 'border-blue-500 bg-blue-500/20 text-blue-300' : 'border-white/10 bg-white/5 text-white/20'
                  }`}>
                    {pin[i] || '•'}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-2 mb-4">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, null, 0, 'del'].map((key, i) => {
                  if (key === null) return <div key={i} />;
                  return (
                    <button
                      key={i}
                      onClick={() => {
                        if (key === 'del') setPin(p => p.slice(0, -1));
                        else if (pin.length < 4) {
                          const newPin = pin + key;
                          setPin(newPin);
                          if (newPin.length === 4) {
                            if (newPin === PARENT_PIN) setIsUnlocked(true);
                            else setTimeout(() => setPin(''), 500);
                          }
                        }
                      }}
                      className="h-12 rounded-xl bg-white/5 hover:bg-white/10 active:bg-white/20 border border-white/10 text-white font-black text-lg transition-all"
                    >
                      {key === 'del' ? '←' : key}
                    </button>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      {/* Header */}
      <div className="text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-500/10 border border-blue-500/20 mb-4">
          <Shield size={16} className="text-blue-400" />
          <span className="text-xs font-black text-blue-400 uppercase tracking-[0.3em]">{t.title}</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-[1000] text-white uppercase italic tracking-tighter">{t.subtitle}</h1>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-indigo-900/60 to-slate-900/80 border border-indigo-500/20 rounded-2xl p-6 text-center">
          <Zap size={24} className="text-amber-400 fill-current mx-auto mb-2" />
          <p className="text-3xl font-[1000] text-white italic">{credits}</p>
          <p className="text-xs text-white/40 font-bold uppercase tracking-wider mt-1">{t.credits}</p>
        </div>
        <div className="bg-gradient-to-br from-orange-900/60 to-slate-900/80 border border-orange-500/20 rounded-2xl p-6 text-center">
          <Flame size={24} className="text-orange-400 mx-auto mb-2" />
          <p className="text-3xl font-[1000] text-white italic">{streak}</p>
          <p className="text-xs text-white/40 font-bold uppercase tracking-wider mt-1">{t.streak}</p>
        </div>
        <div className="bg-gradient-to-br from-purple-900/60 to-slate-900/80 border border-purple-500/20 rounded-2xl p-6 text-center">
          <Trophy size={24} className="text-purple-400 mx-auto mb-2" />
          <p className="text-3xl font-[1000] text-white italic">{unlockedCount}/8</p>
          <p className="text-xs text-white/40 font-bold uppercase tracking-wider mt-1">{t.totalBadges}</p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="bg-[#0B0F1A]/60 border border-white/10 rounded-2xl p-6">
        <h3 className="text-lg font-black text-white uppercase italic tracking-tighter mb-6 flex items-center gap-2">
          <BarChart3 size={20} className="text-blue-400" /> {t.statsTitle}
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {statItems.map((item, idx) => (
            <div key={idx} className="bg-white/5 rounded-xl p-4 border border-white/5 text-center">
              <item.icon size={20} className={`${item.color} mx-auto mb-2`} />
              <p className="text-2xl font-[1000] text-white">{item.value}</p>
              <p className="text-[10px] text-white/40 font-bold uppercase tracking-wider mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Badges */}
      <div className="bg-[#0B0F1A]/60 border border-white/10 rounded-2xl p-6">
        <h3 className="text-lg font-black text-white uppercase italic tracking-tighter mb-6 flex items-center gap-2">
          <Trophy size={20} className="text-purple-400" /> {t.badgesTitle}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {badgeList.map((badge, idx) => {
            const isUnl = badges[badge.key as keyof typeof badges];
            return (
              <div key={idx} className={`flex items-center gap-4 p-4 rounded-xl border transition-all ${
                isUnl
                  ? 'bg-white/5 border-white/10'
                  : 'bg-white/[0.02] border-white/5 opacity-50'
              }`}>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  isUnl ? `bg-gradient-to-br ${badge.gradient} shadow-lg` : 'bg-white/5'
                }`}>
                  <badge.icon size={22} className={isUnl ? 'text-white' : 'text-white/20'} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-black text-white uppercase">{badge.title}</span>
                    {isUnl ? (
                      <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                    ) : (
                      <Lock size={12} className="text-white/20 shrink-0" />
                    )}
                  </div>
                  <p className="text-xs text-white/40">{badge.req}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Tips & Safety */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-blue-900/20 border border-blue-500/20 rounded-2xl p-6">
          <h3 className="text-sm font-black text-blue-400 uppercase tracking-wider mb-4 flex items-center gap-2">
            <Target size={16} /> {t.tips}
          </h3>
          <ul className="space-y-3">
            {[t.tip1, t.tip2, t.tip3].map((tip, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-white/60">
                <span className="text-blue-400 mt-0.5">•</span>
                {tip}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-emerald-900/20 border border-emerald-500/20 rounded-2xl p-6">
          <h3 className="text-sm font-black text-emerald-400 uppercase tracking-wider mb-4 flex items-center gap-2">
            <Shield size={16} /> {t.safeTitle}
          </h3>
          <ul className="space-y-3">
            {[t.safe1, t.safe2, t.safe3].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-white/60">
                <CheckCircle2 size={14} className="text-emerald-400 mt-0.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
