
import React, { useState } from 'react';
import {
  Shield, Brain, Palette, Clapperboard, Hammer, Store, Music, FlaskConical, Globe,
  Zap, BookOpen, Image as ImageIcon, Trophy, Briefcase, BarChart3, Clock, Target,
  ArrowLeft, Lock, Unlock, CheckCircle2, AlertCircle, Flame, Download,
  Send, Lightbulb, Bell, Minus, Plus, ToggleLeft, ToggleRight,
  Gamepad2, PenTool, GraduationCap, MessageSquare
} from 'lucide-react';
import { useEconomy } from '../context/EconomyContext';
import { useAuth } from '../context/AuthContext';
import { authFetch } from '../services/backendApi';
import { getActivityLog, getScreenLimits, getTodayMinutes } from '../context/EconomyContext';
import type { ScreenLimits } from '../context/EconomyContext';

interface ParentDashboardProps {
  lang: 'el' | 'en';
}

export default function ParentDashboard({ lang }: ParentDashboardProps) {
  const { credits, badges, stats, streak } = useEconomy();
  const { user } = useAuth();
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [pin, setPin] = useState('');
  const [exporting, setExporting] = useState(false);

  // Screen time controls state
  const [screenLimits, setScreenLimits] = useState<ScreenLimits>(() => getScreenLimits());
  const [screenLimitsSaved, setScreenLimitsSaved] = useState(false);

  // Feature suggestion state
  const [suggestion, setSuggestion] = useState('');
  const [suggestionSent, setSuggestionSent] = useState(false);
  const [suggestionSending, setSuggestionSending] = useState(false);

  // Subject interest notifications
  const [subjectInterests, setSubjectInterests] = useState<string[]>(() => {
    try {
      const raw = localStorage.getItem('wb_subject_interests');
      return raw ? JSON.parse(raw) : [];
    } catch { return []; }
  });

  // Activity log for today's count
  const todayActivities = getActivityLog().filter(
    (e) => e.timestamp.startsWith(new Date().toISOString().slice(0, 10))
  );

  const unlockedCount = Object.values(badges).filter(Boolean).length;

  const [authError, setAuthError] = useState('');
  const [verifying, setVerifying] = useState(false);

  // Data export handler
  const handleExport = async () => {
    setExporting(true);
    try {
      const res = await authFetch('/api/auth/export-data');
      if (res.ok) {
        const data = await res.json();
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `wisebot-data-${new Date().toISOString().slice(0, 10)}.json`;
        a.click();
        URL.revokeObjectURL(url);
      }
    } catch { /* ignore */ }
    setExporting(false);
  };

  // Save screen limits
  const handleSaveScreenLimits = () => {
    localStorage.setItem('wb_screen_limits', JSON.stringify(screenLimits));
    setScreenLimitsSaved(true);
    setTimeout(() => setScreenLimitsSaved(false), 2500);
  };

  // Toggle subject interest
  const toggleSubjectInterest = (subjectId: string) => {
    setSubjectInterests((prev) => {
      const next = prev.includes(subjectId)
        ? prev.filter((s) => s !== subjectId)
        : [...prev, subjectId];
      localStorage.setItem('wb_subject_interests', JSON.stringify(next));
      return next;
    });
  };

  // Submit feature suggestion
  const handleSuggestionSubmit = async () => {
    if (!suggestion.trim()) return;
    setSuggestionSending(true);
    try {
      await authFetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify({
          name: 'Parent',
          email: user?.email,
          message: suggestion,
          type: 'feature_request',
        }),
      });
      setSuggestionSent(true);
      setSuggestion('');
      setTimeout(() => setSuggestionSent(false), 4000);
    } catch { /* ignore */ }
    setSuggestionSending(false);
  };

  // Adjust screen limit helper
  const adjustLimit = (key: 'games' | 'learn' | 'create', delta: number) => {
    setScreenLimits((prev) => ({
      ...prev,
      [key]: Math.max(0, Math.min(240, prev[key] + delta)),
    }));
  };

  // Translations
  const t = lang === 'el'
    ? {
        title: 'ΓΟΝΕΪΚΟΣ ΠΙΝΑΚΑΣ',
        subtitle: 'Παρακολουθήστε την πρόοδο του παιδιού σας',
        pinTitle: 'Επαλήθευση Γονέα',
        pinDesc: 'Εισάγετε τον κωδικό του λογαριασμού σας',
        pinBtn: 'ΕΠΑΛΗΘΕΥΣΗ',
        pinError: 'Λάθος κωδικός',
        // Section A
        activitiesToday: 'Δραστηριότητες σήμερα',
        activeStreak: 'Σερί ημερών',
        creditsBalance: 'Υπόλοιπο Credits',
        badgesCount: 'Βραβεία',
        // Section B
        analyticsTitle: 'ΑΝΑΛΥΤΙΚΑ ΣΤΑΤΙΣΤΙΚΑ',
        quizzes: 'Κουίζ',
        booksRead: 'Βιβλία που Διαβάστηκαν',
        storiesLessons: 'Ιστορίες / Μαθήματα',
        images: 'Εικόνες',
        songs: 'Τραγούδια',
        videos: 'Βίντεο',
        businesses: 'Επιχειρήσεις',
        heroesUploaded: 'Ανεβασμένοι Ήρωες',
        // Section C
        comingSoonTitle: 'ΕΡΧΟΝΤΑΙ ΣΥΝΤΟΜΑ',
        comingSoonSubtitle: 'Μαθήματα σχολείου μέσα από παιχνίδια',
        comingSoonBadge: 'COMING SOON',
        notifyMe: 'Ενημέρωσέ με',
        notified: 'Θα ενημερωθείς!',
        // Section D
        screenTimeTitle: 'ΕΛΕΓΧΟΣ ΧΡΟΝΟΥ ΟΘΟΝΗΣ',
        enableLimits: 'Ενεργοποίηση ορίων',
        gamesLabel: 'Παιχνίδια',
        creativeLabel: 'Δημιουργικά (AI εργαλεία)',
        learningLabel: 'Μάθηση (κουίζ/βιβλία)',
        minutes: 'λεπτά',
        saveLimits: 'ΑΠΟΘΗΚΕΥΣΗ',
        limitsSaved: 'Αποθηκεύτηκε!',
        screenTimeInfo: 'Όταν τελειώσει ο χρόνος παιχνιδιών, θα προτείνουμε εκπαιδευτικές δραστηριότητες',
        // Section E
        suggestTitle: 'ΠΡΟΤΕΙΝΕ ΚΑΤΙ ΝΕΟ',
        suggestPlaceholder: 'Γράψε την πρότασή σου εδώ...',
        suggestBtn: 'ΑΠΟΣΤΟΛΗ',
        suggestSent: 'Ευχαριστούμε! Η πρότασή σου καταγράφηκε.',
        popularTags: 'Δημοφιλείς ιδέες:',
        // Section F
        tips: 'ΣΥΜΒΟΥΛΕΣ',
        tip1: 'Ενθαρρύνετε το παιδί σας να ολοκληρώνει τις ημερήσιες αποστολές για bonus credits',
        tip2: 'Τα κουίζ βοηθούν στην κατανόηση — ρωτήστε τι έμαθε σήμερα',
        tip3: 'Η δημιουργία ηρώων αναπτύσσει τη φαντασία και τη δημιουργικότητα',
        safeTitle: 'ΑΣΦΑΛΕΙΑ',
        safe1: 'Δεν υπάρχει πρόσβαση σε εξωτερικά sites',
        safe2: 'Κανένα chat με άγνωστους χρήστες',
        safe3: 'Όλο το περιεχόμενο είναι εκπαιδευτικό',
        dataTitle: 'ΔΙΑΧΕΙΡΙΣΗ ΔΕΔΟΜΕΝΩΝ',
        exportBtn: 'Κατέβασε τα δεδομένα σου',
        exportingBtn: 'Εξαγωγή...',
        deleteBtn: 'Διαγραφή λογαριασμού',
        gdprText: 'Σύμφωνα με τον GDPR, έχετε δικαίωμα εξαγωγής ή διαγραφής των δεδομένων σας ανά πάσα στιγμή.',
      }
    : {
        title: 'PARENT DASHBOARD',
        subtitle: 'Monitor your child\'s progress',
        pinTitle: 'Parent Verification',
        pinDesc: 'Enter your account password',
        pinBtn: 'VERIFY',
        pinError: 'Wrong password',
        // Section A
        activitiesToday: 'Activities today',
        activeStreak: 'Day streak',
        creditsBalance: 'Credits balance',
        badgesCount: 'Badges',
        // Section B
        analyticsTitle: 'DETAILED ANALYTICS',
        quizzes: 'Quizzes',
        booksRead: 'Books Read',
        storiesLessons: 'Stories / Lessons',
        images: 'Images',
        songs: 'Songs',
        videos: 'Videos',
        businesses: 'Businesses',
        heroesUploaded: 'Heroes Uploaded',
        // Section C
        comingSoonTitle: 'COMING SOON',
        comingSoonSubtitle: 'School subjects through games',
        comingSoonBadge: 'COMING SOON',
        notifyMe: 'Notify me',
        notified: 'You\'ll be notified!',
        // Section D
        screenTimeTitle: 'SCREEN TIME CONTROLS',
        enableLimits: 'Enable limits',
        gamesLabel: 'Games',
        creativeLabel: 'Creative (AI tools)',
        learningLabel: 'Learning (quizzes/books)',
        minutes: 'min',
        saveLimits: 'SAVE',
        limitsSaved: 'Saved!',
        screenTimeInfo: 'When game time is up, we\'ll suggest educational activities',
        // Section E
        suggestTitle: 'SUGGEST A FEATURE',
        suggestPlaceholder: 'Write your suggestion here...',
        suggestBtn: 'SUBMIT',
        suggestSent: 'Thank you! Your suggestion has been recorded.',
        popularTags: 'Popular ideas:',
        // Section F
        tips: 'TIPS',
        tip1: 'Encourage daily missions for bonus credits',
        tip2: 'Quizzes boost comprehension — ask what they learned today',
        tip3: 'Hero creation develops imagination and creativity',
        safeTitle: 'SAFETY',
        safe1: 'No access to external websites',
        safe2: 'No chat with strangers',
        safe3: 'All content is educational',
        dataTitle: 'DATA MANAGEMENT',
        exportBtn: 'Download your data',
        exportingBtn: 'Exporting...',
        deleteBtn: 'Delete account',
        gdprText: 'Under GDPR, you have the right to export or delete your data at any time.',
      };

  // Analytics stat items for Section B
  const analyticsItems = [
    { icon: Trophy, label: t.quizzes, value: stats.quizzesPassed, color: 'bg-amber-500', barColor: 'bg-amber-500/80' },
    { icon: BookOpen, label: t.booksRead, value: stats.booksRead, color: 'bg-purple-500', barColor: 'bg-purple-500/80' },
    { icon: GraduationCap, label: t.storiesLessons, value: stats.lessonsRead, color: 'bg-blue-500', barColor: 'bg-blue-500/80' },
    { icon: ImageIcon, label: t.images, value: stats.imagesCreated, color: 'bg-pink-500', barColor: 'bg-pink-500/80' },
    { icon: Music, label: t.songs, value: stats.songsCreated, color: 'bg-fuchsia-500', barColor: 'bg-fuchsia-500/80' },
    { icon: Clapperboard, label: t.videos, value: stats.videosCreated, color: 'bg-orange-500', barColor: 'bg-orange-500/80' },
    { icon: Briefcase, label: t.businesses, value: stats.businessesCreated, color: 'bg-emerald-500', barColor: 'bg-emerald-500/80' },
    { icon: Store, label: t.heroesUploaded, value: stats.heroesUploaded, color: 'bg-violet-500', barColor: 'bg-violet-500/80' },
  ];
  const maxStatValue = Math.max(1, ...analyticsItems.map((s) => s.value));

  // Coming soon subjects for Section C
  const subjects = [
    {
      id: 'math',
      emoji: '\u{1F4D0}',
      titleEl: 'Μαθηματικά (1η-6η Δημοτικού)',
      titleEn: 'Mathematics',
      descEl: 'Πρόσθεση, αφαίρεση, πολλαπλασιασμός μέσα από παιχνίδια',
      descEn: 'Addition, subtraction, multiplication through games',
      borderColor: 'border-l-blue-500',
    },
    {
      id: 'language',
      emoji: '\u{1F4DD}',
      titleEl: 'Γλώσσα & Ορθογραφία',
      titleEn: 'Language & Spelling',
      descEl: 'Μάθε σωστή ορθογραφία με fun τρόπο',
      descEn: 'Learn correct spelling the fun way',
      borderColor: 'border-l-purple-500',
    },
    {
      id: 'history',
      emoji: '\u{1F4DC}',
      titleEl: 'Ιστορία',
      titleEn: 'History',
      descEl: 'Ζωντανές ιστορίες από την αρχαιότητα ως σήμερα',
      descEn: 'Vivid stories from antiquity to today',
      borderColor: 'border-l-amber-500',
    },
    {
      id: 'science',
      emoji: '\u{1F52C}',
      titleEl: 'Φυσικές Επιστήμες',
      titleEn: 'Science',
      descEl: 'Πειράματα και ανακαλύψεις για μικρούς επιστήμονες',
      descEn: 'Experiments and discoveries for young scientists',
      borderColor: 'border-l-emerald-500',
    },
    {
      id: 'geography',
      emoji: '\u{1F30D}',
      titleEl: 'Γεωγραφία',
      titleEn: 'Geography',
      descEl: 'Ταξίδεψε στον κόσμο μέσα από quizzes',
      descEn: 'Travel the world through quizzes',
      borderColor: 'border-l-pink-500',
    },
    {
      id: 'ancient-greek',
      emoji: '\u{1F3DB}\uFE0F',
      titleEl: 'Αρχαία Ελληνικά',
      titleEn: 'Ancient Greek',
      descEl: 'Μυθολογία και γλώσσα για το Γυμνάσιο',
      descEn: 'Mythology and language for Middle School',
      borderColor: 'border-l-fuchsia-500',
    },
  ];

  // Popular tags for feature suggestions
  const popularTags = [
    lang === 'el' ? 'Μαθηματικά' : 'Mathematics',
    lang === 'el' ? 'Αγγλικά' : 'English',
    lang === 'el' ? 'Ρομποτική' : 'Robotics',
    lang === 'el' ? 'Κώδικας' : 'Coding',
    lang === 'el' ? 'Μουσική θεωρία' : 'Music Theory',
  ];

  // ─── AUTH GATE ─────────────────────────────────────────────────────
  if (!isUnlocked) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="w-full max-w-sm bg-[#0B0F1A]/80 border border-white/10 rounded-3xl p-10 text-center backdrop-blur-xl">
          <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-blue-500/30">
            <Shield size={32} className="text-blue-400" />
          </div>
          <h2 className="text-2xl font-black text-white uppercase italic tracking-tighter mb-2">{t.pinTitle}</h2>
          <p className="text-white/50 text-sm mb-6">{t.pinDesc}</p>

          <form onSubmit={async (e) => {
              e.preventDefault();
              setAuthError('');
              setVerifying(true);
              try {
                const email = user?.email;
                if (!email || !pin) {
                  setAuthError(t.pinError);
                  setVerifying(false);
                  return;
                }
                const { createClient } = await import('@supabase/supabase-js');
                const supabaseUrl = (import.meta as any).env?.VITE_SUPABASE_URL || '';
                const supabaseKey = (import.meta as any).env?.VITE_SUPABASE_ANON_KEY || '';
                if (supabaseUrl && supabaseKey) {
                  const tempClient = createClient(supabaseUrl, supabaseKey, {
                    auth: { autoRefreshToken: false, persistSession: false }
                  });
                  const { error } = await tempClient.auth.signInWithPassword({ email, password: pin });
                  if (error) {
                    setAuthError(t.pinError);
                  } else {
                    setIsUnlocked(true);
                  }
                } else {
                  setIsUnlocked(true);
                }
              } catch {
                setAuthError(t.pinError);
              }
              setVerifying(false);
            }} className="space-y-4">
              <input
                type="password"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                placeholder={lang === 'el' ? 'Κωδικός λογαριασμού' : 'Account password'}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm font-bold placeholder:text-white/20 focus:outline-none focus:border-blue-500/40 text-center"
              />
              {authError && (
                <p className="text-red-400 text-xs font-bold flex items-center justify-center gap-1">
                  <AlertCircle size={14} /> {authError}
                </p>
              )}
              <button
                type="submit"
                disabled={verifying || !pin}
                className="w-full py-3 bg-blue-600/20 border border-blue-500/30 rounded-xl text-white font-black uppercase text-sm hover:bg-blue-600/30 transition-all disabled:opacity-50"
              >
                {verifying ? '...' : t.pinBtn}
              </button>
            </form>
        </div>
      </div>
    );
  }

  // ─── MAIN DASHBOARD ─────────────────────────────────────────────────
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

      {/* ═══════ SECTION A: Activity Overview ═══════ */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Activities today */}
        <div className="bg-gradient-to-br from-blue-900/60 to-slate-900/80 border border-blue-500/20 rounded-2xl p-5 text-center">
          <div className="text-2xl mb-1">{'\u{1F3AF}'}</div>
          <p className="text-3xl font-[1000] text-white italic">{todayActivities.length}</p>
          <p className="text-[10px] text-white/40 font-bold uppercase tracking-wider mt-1">{t.activitiesToday}</p>
        </div>
        {/* Streak */}
        <div className="bg-gradient-to-br from-orange-900/60 to-slate-900/80 border border-orange-500/20 rounded-2xl p-5 text-center">
          <div className="text-2xl mb-1">{'\u{1F525}'}</div>
          <p className="text-3xl font-[1000] text-white italic">{streak}</p>
          <p className="text-[10px] text-white/40 font-bold uppercase tracking-wider mt-1">{t.activeStreak}</p>
        </div>
        {/* Credits */}
        <div className="bg-gradient-to-br from-indigo-900/60 to-slate-900/80 border border-indigo-500/20 rounded-2xl p-5 text-center">
          <div className="text-2xl mb-1">{'\u{1F48E}'}</div>
          <p className="text-3xl font-[1000] text-white italic">{credits}</p>
          <p className="text-[10px] text-white/40 font-bold uppercase tracking-wider mt-1">{t.creditsBalance}</p>
        </div>
        {/* Badges */}
        <div className="bg-gradient-to-br from-purple-900/60 to-slate-900/80 border border-purple-500/20 rounded-2xl p-5 text-center">
          <div className="text-2xl mb-1">{'\u{1F3C6}'}</div>
          <p className="text-3xl font-[1000] text-white italic">{unlockedCount}/8</p>
          <p className="text-[10px] text-white/40 font-bold uppercase tracking-wider mt-1">{t.badgesCount}</p>
        </div>
      </div>

      {/* ═══════ SECTION B: Detailed Analytics (bar chart) ═══════ */}
      <div className="bg-[#0B0F1A]/60 border border-white/10 rounded-2xl p-6">
        <h3 className="text-lg font-black text-white uppercase tracking-wider mb-6 flex items-center gap-2">
          <BarChart3 size={20} className="text-blue-400" /> {t.analyticsTitle}
        </h3>
        <div className="space-y-4">
          {analyticsItems.map((item, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <div className="w-8 flex-shrink-0 flex items-center justify-center">
                <item.icon size={18} className="text-white/60" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-white/70 uppercase tracking-wider">{item.label}</span>
                  <span className="text-sm font-[1000] text-white tabular-nums">{item.value}</span>
                </div>
                <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-700 ${item.barColor}`}
                    style={{ width: `${Math.max(2, (item.value / maxStatValue) * 100)}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ═══════ SECTION C: Coming Soon - School Subjects ═══════ */}
      <div className="bg-[#0B0F1A]/60 border border-white/10 rounded-2xl p-6">
        <div className="mb-6">
          <h3 className="text-lg font-black text-white uppercase tracking-wider flex items-center gap-2">
            <GraduationCap size={20} className="text-amber-400" /> {t.comingSoonTitle}
          </h3>
          <p className="text-sm text-white/40 mt-1">{t.comingSoonSubtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {subjects.map((subj) => {
            const isInterested = subjectInterests.includes(subj.id);
            return (
              <div
                key={subj.id}
                className={`relative bg-white/5 border border-white/10 rounded-2xl p-5 border-l-4 ${subj.borderColor} overflow-hidden`}
              >
                {/* Lock overlay */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                  <Lock size={14} className="text-white/20" />
                </div>
                <div className="text-3xl mb-2">{subj.emoji}</div>
                <h4 className="text-sm font-black text-white uppercase tracking-tight mb-1">
                  {lang === 'el' ? subj.titleEl : subj.titleEn}
                </h4>
                <p className="text-xs text-white/40 mb-3 leading-relaxed">
                  {lang === 'el' ? subj.descEl : subj.descEn}
                </p>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 bg-amber-500/20 border border-amber-500/30 rounded-md text-[10px] font-black text-amber-400 uppercase tracking-wider">
                    {t.comingSoonBadge}
                  </span>
                  <button
                    onClick={() => toggleSubjectInterest(subj.id)}
                    className={`ml-auto flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-bold transition-all ${
                      isInterested
                        ? 'bg-emerald-500/20 border border-emerald-500/30 text-emerald-400'
                        : 'bg-white/5 border border-white/10 text-white/50 hover:bg-white/10 hover:text-white/70'
                    }`}
                  >
                    <Bell size={12} />
                    {isInterested ? t.notified : t.notifyMe}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ═══════ SECTION D: Screen Time Controls ═══════ */}
      <div className="bg-[#0B0F1A]/60 border border-white/10 rounded-2xl p-6">
        <h3 className="text-lg font-black text-white uppercase tracking-wider mb-6 flex items-center gap-2">
          <Clock size={20} className="text-emerald-400" /> {t.screenTimeTitle}
        </h3>

        {/* Enable toggle */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
          <span className="text-sm font-bold text-white/70">{t.enableLimits}</span>
          <button
            onClick={() => setScreenLimits((prev) => ({ ...prev, enabled: !prev.enabled }))}
            className="flex items-center gap-2 transition-all"
          >
            {screenLimits.enabled ? (
              <ToggleRight size={32} className="text-emerald-400" />
            ) : (
              <ToggleLeft size={32} className="text-white/30" />
            )}
          </button>
        </div>

        {/* Time rows */}
        <div className={`space-y-4 transition-opacity ${screenLimits.enabled ? 'opacity-100' : 'opacity-40 pointer-events-none'}`}>
          {([
            { key: 'games' as const, label: t.gamesLabel, icon: Gamepad2, color: 'text-amber-400', emoji: '\u{1F3AE}' },
            { key: 'create' as const, label: t.creativeLabel, icon: PenTool, color: 'text-pink-400', emoji: '\u{1F3A8}' },
            { key: 'learn' as const, label: t.learningLabel, icon: BookOpen, color: 'text-blue-400', emoji: '\u{1F4DA}' },
          ]).map((row) => (
            <div key={row.key} className="flex items-center justify-between bg-white/5 rounded-xl p-4 border border-white/5">
              <div className="flex items-center gap-3">
                <span className="text-xl">{row.emoji}</span>
                <span className="text-sm font-bold text-white/80">{row.label}</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => adjustLimit(row.key, -5)}
                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:bg-white/10 hover:text-white transition-all"
                >
                  <Minus size={14} />
                </button>
                <div className="w-16 text-center">
                  <span className="text-lg font-[1000] text-white tabular-nums">{screenLimits[row.key]}</span>
                  <span className="text-[10px] text-white/30 ml-1">{t.minutes}</span>
                </div>
                <button
                  onClick={() => adjustLimit(row.key, 5)}
                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:bg-white/10 hover:text-white transition-all"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Save + info */}
        <div className="mt-6 flex items-center justify-between">
          <p className="text-xs text-white/30 max-w-sm leading-relaxed">{t.screenTimeInfo}</p>
          <button
            onClick={handleSaveScreenLimits}
            className={`px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all ${
              screenLimitsSaved
                ? 'bg-emerald-500/20 border border-emerald-500/30 text-emerald-400'
                : 'bg-blue-600/20 border border-blue-500/30 text-blue-300 hover:bg-blue-600/30'
            }`}
          >
            {screenLimitsSaved ? (
              <span className="flex items-center gap-1.5"><CheckCircle2 size={14} /> {t.limitsSaved}</span>
            ) : (
              t.saveLimits
            )}
          </button>
        </div>
      </div>

      {/* ═══════ SECTION E: Feature Suggestions ═══════ */}
      <div className="bg-[#0B0F1A]/60 border border-white/10 rounded-2xl p-6">
        <h3 className="text-lg font-black text-white uppercase tracking-wider mb-6 flex items-center gap-2">
          <Lightbulb size={20} className="text-amber-400" /> {t.suggestTitle}
        </h3>

        <textarea
          value={suggestion}
          onChange={(e) => setSuggestion(e.target.value)}
          placeholder={t.suggestPlaceholder}
          rows={3}
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-blue-500/40 resize-none mb-3"
        />

        {/* Popular tags */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="text-[10px] font-bold text-white/30 uppercase tracking-wider">{t.popularTags}</span>
          {popularTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSuggestion((prev) => prev ? `${prev}, ${tag}` : tag)}
              className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-[11px] font-bold text-white/50 hover:bg-white/10 hover:text-white/70 transition-all"
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleSuggestionSubmit}
            disabled={suggestionSending || !suggestion.trim()}
            className="px-6 py-2.5 bg-blue-600/20 border border-blue-500/30 rounded-xl text-blue-300 text-xs font-black uppercase tracking-wider hover:bg-blue-600/30 transition-all disabled:opacity-50 flex items-center gap-2"
          >
            <Send size={14} /> {suggestionSending ? '...' : t.suggestBtn}
          </button>
          {suggestionSent && (
            <p className="text-xs text-emerald-400 font-bold flex items-center gap-1.5">
              <CheckCircle2 size={14} /> {t.suggestSent}
            </p>
          )}
        </div>
      </div>

      {/* ═══════ SECTION F: Tips & Safety ═══════ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-blue-900/20 border border-blue-500/20 rounded-2xl p-6">
          <h3 className="text-sm font-black text-blue-400 uppercase tracking-wider mb-4 flex items-center gap-2">
            <Target size={16} /> {t.tips}
          </h3>
          <ul className="space-y-3">
            {[t.tip1, t.tip2, t.tip3].map((tip, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-white/60">
                <span className="text-blue-400 mt-0.5">{'\u2022'}</span>
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

      {/* ═══════ Data Management (GDPR) ═══════ */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
        <h3 className="text-sm font-black text-white/80 uppercase tracking-wider mb-4 flex items-center gap-2">
          <Download size={16} /> {t.dataTitle}
        </h3>
        <div className="flex flex-wrap gap-3">
          <button
            onClick={handleExport}
            disabled={exporting}
            className="px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-xl text-blue-300 text-xs font-bold hover:bg-blue-600/30 transition-all disabled:opacity-50"
          >
            {exporting ? t.exportingBtn : `\u{1F4E5} ${t.exportBtn}`}
          </button>
          <button
            onClick={() => window.location.href = '/account'}
            className="px-4 py-2 bg-red-600/10 border border-red-500/20 rounded-xl text-red-400 text-xs font-bold hover:bg-red-600/20 transition-all"
          >
            {`\u{1F5D1}\uFE0F ${t.deleteBtn}`}
          </button>
        </div>
        <p className="text-white/30 text-xs mt-3">{t.gdprText}</p>
      </div>
    </div>
  );
}
