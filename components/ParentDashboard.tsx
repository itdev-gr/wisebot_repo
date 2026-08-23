
import React, { useState, useEffect, useRef } from 'react';
import {
  Shield, Brain, Palette, Clapperboard, Hammer, Store, Music, FlaskConical, Globe,
  Zap, BookOpen, Image as ImageIcon, Trophy, Briefcase, BarChart3, Clock, Target,
  ArrowLeft, Unlock, CheckCircle2, AlertCircle, Flame, Download,
  Send, Lightbulb, Minus, Plus, ToggleLeft, ToggleRight,
  Gamepad2, PenTool, GraduationCap, MessageSquare,
  Smartphone, Mail, Phone, Loader2, CheckCircle, ArrowRight
} from 'lucide-react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useEconomy } from '../context/EconomyContext';
import { useAuth } from '../context/AuthContext';
import ParentSchoolProgress from './ParentSchoolProgress';
import { authFetch } from '../services/backendApi';
import ParentPinGate, { ParentPinChange } from './ParentPinGate';
import { getActivityLog, getScreenLimits, getTodayMinutes } from '../context/EconomyContext';
import type { ScreenLimits } from '../context/EconomyContext';

interface ParentDashboardProps {
  lang: 'el' | 'en';
}

export default function ParentDashboard({ lang }: ParentDashboardProps) {
  const { credits, badges, stats, streak } = useEconomy();
  const { user, profile, emailVerified } = useAuth();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [exporting, setExporting] = useState(false);

  // Phone verification state
  const verifyRef = useRef<HTMLDivElement>(null);
  const [phoneNumber, setPhoneNumber] = useState(profile?.phoneNumber || '');
  const [otpCode, setOtpCode] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [sendingOtp, setSendingOtp] = useState(false);
  const [verifyingOtp, setVerifyingOtp] = useState(false);
  const [phoneError, setPhoneError] = useState('');
  const [phoneSuccess, setPhoneSuccess] = useState(false);
  const [resendCooldown, setResendCooldown] = useState(0);

  // Check if coming from store with ?verify=true
  const fromStore = searchParams.get('verify') === 'true';

  // Auto-scroll to verification section when coming from store
  useEffect(() => {
    if (fromStore && isUnlocked && verifyRef.current) {
      setTimeout(() => {
        verifyRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 300);
    }
  }, [fromStore, isUnlocked]);

  // Resend cooldown timer
  useEffect(() => {
    if (resendCooldown <= 0) return;
    const timer = setInterval(() => setResendCooldown(c => c - 1), 1000);
    return () => clearInterval(timer);
  }, [resendCooldown]);

  // Send OTP via Twilio
  const handleSendOtp = async () => {
    setPhoneError('');
    if (!phoneNumber.trim()) {
      setPhoneError(lang === 'el' ? 'Εισάγετε αριθμό κινητού' : 'Enter phone number');
      return;
    }
    // Normalize: add +30 for Greek numbers if no prefix
    let normalized = phoneNumber.trim();
    if (normalized.startsWith('69')) normalized = '+30' + normalized;
    else if (!normalized.startsWith('+')) normalized = '+' + normalized;

    setSendingOtp(true);
    try {
      const res = await authFetch('/api/auth/send-otp', {
        method: 'POST',
        body: JSON.stringify({ phone: normalized }),
      });
      const data = await res.json();
      if (!res.ok) {
        setPhoneError(data.error || 'Error sending SMS');
      } else {
        setOtpSent(true);
        setResendCooldown(60);
        setPhoneNumber(normalized);
      }
    } catch {
      setPhoneError(lang === 'el' ? 'Σφάλμα αποστολής SMS' : 'Error sending SMS');
    }
    setSendingOtp(false);
  };

  // Verify OTP code
  const handleVerifyOtp = async () => {
    setPhoneError('');
    if (otpCode.length !== 6) {
      setPhoneError(lang === 'el' ? 'Εισάγετε τον 6ψήφιο κωδικό' : 'Enter the 6-digit code');
      return;
    }
    setVerifyingOtp(true);
    try {
      const res = await authFetch('/api/auth/verify-otp', {
        method: 'POST',
        body: JSON.stringify({ code: otpCode }),
      });
      const data = await res.json();
      if (!res.ok) {
        setPhoneError(data.error || 'Verification failed');
      } else {
        setPhoneSuccess(true);
        // Reload profile to update phoneVerified
        setTimeout(() => window.location.reload(), 2000);
      }
    } catch {
      setPhoneError(lang === 'el' ? 'Σφάλμα επαλήθευσης' : 'Verification error');
    }
    setVerifyingOtp(false);
  };

  const isVerified = !!(profile?.phoneVerified || emailVerified);

  // Screen time controls state
  const [screenLimits, setScreenLimits] = useState<ScreenLimits>(() => getScreenLimits());
  const [screenLimitsSaved, setScreenLimitsSaved] = useState(false);

  // Feature suggestion state
  const [suggestion, setSuggestion] = useState('');
  const [suggestionSent, setSuggestionSent] = useState(false);
  const [suggestionSending, setSuggestionSending] = useState(false);


  // Activity log for today's count (local fallback while the server summary loads)
  const todayActivities = getActivityLog().filter(
    (e) => e.timestamp.startsWith(new Date().toISOString().slice(0, 10))
  );

  const unlockedCount = Object.values(badges).filter(Boolean).length;

  // ─── Server summary: the child's REAL numbers ───────────────────────
  // EconomyContext is this device's localStorage — a parent opening /parent on
  // their own phone would see zeros. /api/auth/parent-summary reads profiles,
  // stats and the credit ledger for the account, whatever device the child uses.
  const [summary, setSummary] = useState<any>(null);
  const [summaryFailed, setSummaryFailed] = useState(false);
  useEffect(() => {
    if (!isUnlocked || !user) return;
    let cancelled = false;
    (async () => {
      try {
        const res = await authFetch('/api/auth/parent-summary');
        if (!res.ok) throw new Error(String(res.status));
        const data = await res.json();
        if (!cancelled) { setSummary(data); setSummaryFailed(false); }
      } catch {
        if (!cancelled) setSummaryFailed(true);
      }
    })();
    return () => { cancelled = true; };
  }, [isUnlocked, user]);

  // Prefer the account's numbers; fall back to this device while loading/offline.
  const view = {
    credits: summary ? summary.profile.credits : credits,
    streak: summary ? summary.activity.streakDays : streak,
    todayCount: summary ? summary.activity.todayCount : todayActivities.length,
    stats: summary ? summary.stats : stats,
  };


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
        guestTitle: 'Για γονείς',
        guestDesc: 'Εδώ ο γονέας βλέπει τι διάβασε το παιδί, πόσο χρόνο έπαιξε και πόσα credits έχει — και βάζει όρια. Χρειάζεται λογαριασμό.',
        guestLogin: 'ΣΥΝΔΕΣΗ',
        guestRegister: 'ΔΗΜΙΟΥΡΓΙΑ ΛΟΓΑΡΙΑΣΜΟΥ',
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
        // Verification
        verifyTitle: 'ΕΠΑΛΗΘΕΥΣΗ ΓΟΝΕΑ',
        verifySubtitle: 'Απαιτείται για αγορές — επαληθεύστε κινητό ή email',
        verifySubtitleDone: 'Η επαλήθευσή σας είναι ενεργή',
        phoneLabel: 'Κινητό τηλέφωνο',
        emailLabel: 'Email γονέα',
        verified: 'Επαληθευμένο',
        notVerified: 'Μη επαληθευμένο',
        phonePlaceholder: '69XXXXXXXX ή +30...',
        sendCode: 'ΑΠΟΣΤΟΛΗ ΚΩΔΙΚΟΥ',
        sendingCode: 'ΑΠΟΣΤΟΛΗ...',
        resendIn: 'Επαναποστολή σε',
        otpPlaceholder: '6-ψήφιος κωδικός',
        verifyCode: 'ΕΠΑΛΗΘΕΥΣΗ',
        verifyingCode: 'ΕΛΕΓΧΟΣ...',
        phoneVerified: 'Το κινητό επαληθεύτηκε!',
        resendEmail: 'ΕΠΑΝΑΠΟΣΤΟΛΗ EMAIL',
        checkEmail: 'Ελέγξτε τα εισερχόμενά σας',
      }
    : {
        title: 'PARENT DASHBOARD',
        subtitle: 'Monitor your child\'s progress',
        guestTitle: 'For parents',
        guestDesc: 'Here a parent sees what the child read, how long they played and how many credits they have — and sets limits. It needs an account.',
        guestLogin: 'LOG IN',
        guestRegister: 'CREATE ACCOUNT',
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
        // Verification
        verifyTitle: 'PARENT VERIFICATION',
        verifySubtitle: 'Required for purchases — verify your phone or email',
        verifySubtitleDone: 'Your verification is active',
        phoneLabel: 'Phone number',
        emailLabel: 'Parent email',
        verified: 'Verified',
        notVerified: 'Not verified',
        phonePlaceholder: '+30... or 69XXXXXXXX',
        sendCode: 'SEND CODE',
        sendingCode: 'SENDING...',
        resendIn: 'Resend in',
        otpPlaceholder: '6-digit code',
        verifyCode: 'VERIFY',
        verifyingCode: 'VERIFYING...',
        phoneVerified: 'Phone verified!',
        resendEmail: 'RESEND EMAIL',
        checkEmail: 'Check your inbox',
      };

  // Analytics stat items for Section B
  const analyticsItems = [
    { icon: Trophy, label: t.quizzes, value: view.stats.quizzesPassed, color: 'bg-amber-500', barColor: 'bg-amber-500/80' },
    { icon: BookOpen, label: t.booksRead, value: view.stats.booksRead, color: 'bg-purple-500', barColor: 'bg-purple-500/80' },
    { icon: GraduationCap, label: t.storiesLessons, value: view.stats.lessonsRead, color: 'bg-blue-500', barColor: 'bg-blue-500/80' },
    { icon: ImageIcon, label: t.images, value: view.stats.imagesCreated, color: 'bg-pink-500', barColor: 'bg-pink-500/80' },
    { icon: Music, label: t.songs, value: view.stats.songsCreated, color: 'bg-fuchsia-500', barColor: 'bg-fuchsia-500/80' },
    { icon: Clapperboard, label: t.videos, value: view.stats.videosCreated, color: 'bg-orange-500', barColor: 'bg-orange-500/80' },
    { icon: Briefcase, label: t.businesses, value: view.stats.businessesCreated, color: 'bg-emerald-500', barColor: 'bg-emerald-500/80' },
    { icon: Store, label: t.heroesUploaded, value: view.stats.heroesUploaded, color: 'bg-violet-500', barColor: 'bg-violet-500/80' },
  ];
  const maxStatValue = Math.max(1, ...analyticsItems.map((s) => s.value));


  // Popular tags for feature suggestions
  const popularTags = [
    lang === 'el' ? 'Μαθηματικά' : 'Mathematics',
    lang === 'el' ? 'Αγγλικά' : 'English',
    lang === 'el' ? 'Ρομποτική' : 'Robotics',
    lang === 'el' ? 'Κώδικας' : 'Coding',
    lang === 'el' ? 'Μουσική θεωρία' : 'Music Theory',
  ];

  // ─── GUEST: explain what this is and where to go, instead of a password box that can never work ───
  if (!user) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="w-full max-w-sm bg-[#0B0F1A]/80 border border-white/10 rounded-3xl p-10 text-center backdrop-blur-xl">
          <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-blue-500/30">
            <Shield size={32} className="text-blue-400" />
          </div>
          <h2 className="text-2xl font-black text-white uppercase italic tracking-tighter mb-2">{t.guestTitle}</h2>
          <p className="text-white/60 text-sm mb-6 leading-relaxed">{t.guestDesc}</p>
          <div className="space-y-3">
            <button
              type="button"
              onClick={() => navigate('/login')}
              className="w-full py-3 bg-blue-600 rounded-xl text-white font-black uppercase text-sm hover:bg-blue-500 transition-all"
            >
              {t.guestLogin}
            </button>
            <button
              type="button"
              onClick={() => navigate('/login?mode=register')}
              className="w-full py-3 bg-white/5 border border-white/10 rounded-xl text-white/80 font-black uppercase text-sm hover:bg-white/10 transition-all"
            >
              {t.guestRegister}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ─── AUTH GATE: separate parent PIN (components/ParentPinGate.tsx) ───
  if (!isUnlocked) {
    // Google sign-ins have no password, so "forgot PIN → account password" is not offered to them.
    const providers: string[] = (user as any)?.app_metadata?.providers || [(user as any)?.app_metadata?.provider].filter(Boolean);
    const hasPassword = providers.includes('email');
    return <ParentPinGate lang={lang} hasPassword={hasPassword} onUnlocked={() => setIsUnlocked(true)} />;
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

      {/* ═══════ VERIFICATION SECTION ═══════ */}
      <div
        ref={verifyRef}
        className={`bg-[#0B0F1A]/60 border rounded-2xl p-6 transition-all ${
          fromStore && !isVerified
            ? 'border-purple-500/40 shadow-lg shadow-purple-500/10 ring-1 ring-purple-500/20'
            : isVerified
              ? 'border-emerald-500/20'
              : 'border-white/10'
        }`}
      >
        <h3 className="text-lg font-black text-white uppercase tracking-wider mb-2 flex items-center gap-2">
          <Shield size={20} className={isVerified ? 'text-emerald-400' : 'text-purple-400'} />
          {t.verifyTitle}
        </h3>
        <p className="text-sm text-white/40 mb-5">
          {isVerified ? t.verifySubtitleDone : t.verifySubtitle}
        </p>

        <div className="space-y-4">
          {/* Phone Verification */}
          <div className={`rounded-xl border p-4 ${
            profile?.phoneVerified
              ? 'bg-emerald-500/10 border-emerald-500/30'
              : 'bg-white/5 border-white/10'
          }`}>
            <div className="flex items-center gap-3 mb-3">
              <Smartphone size={20} className={profile?.phoneVerified ? 'text-emerald-400' : 'text-white/40'} />
              <span className="text-sm font-bold text-white/80 flex-1">{t.phoneLabel}</span>
              {profile?.phoneVerified ? (
                <span className="flex items-center gap-1.5 text-xs font-bold text-emerald-400">
                  <CheckCircle size={14} /> {t.verified}
                </span>
              ) : (
                <span className="text-xs font-bold text-red-400">{t.notVerified}</span>
              )}
            </div>

            {!profile?.phoneVerified && !phoneSuccess && (
              <div className="space-y-3">
                {!otpSent ? (
                  /* Phone number input */
                  <div className="flex gap-2">
                    <input
                      type="tel"
                      value={phoneNumber}
                      onChange={(e) => { setPhoneNumber(e.target.value); setPhoneError(''); }}
                      placeholder={t.phonePlaceholder}
                      className="flex-1 px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white text-sm font-bold placeholder:text-white/20 focus:outline-none focus:border-purple-500/40"
                    />
                    <button
                      onClick={handleSendOtp}
                      disabled={sendingOtp || !phoneNumber.trim()}
                      className="px-4 py-2.5 bg-purple-600/20 border border-purple-500/30 rounded-xl text-purple-300 text-xs font-black uppercase tracking-wider hover:bg-purple-600/30 transition-all disabled:opacity-50 flex items-center gap-2 whitespace-nowrap"
                    >
                      {sendingOtp ? (
                        <><Loader2 size={14} className="animate-spin" /> {t.sendingCode}</>
                      ) : (
                        <><Phone size={14} /> {t.sendCode}</>
                      )}
                    </button>
                  </div>
                ) : (
                  /* OTP input */
                  <div className="space-y-3">
                    <p className="text-xs text-white/50">
                      {lang === 'el'
                        ? `Στείλαμε κωδικό στο ${phoneNumber}`
                        : `We sent a code to ${phoneNumber}`}
                    </p>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        inputMode="numeric"
                        maxLength={6}
                        value={otpCode}
                        onChange={(e) => { setOtpCode(e.target.value.replace(/\D/g, '')); setPhoneError(''); }}
                        placeholder={t.otpPlaceholder}
                        autoFocus
                        className="flex-1 px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white text-sm font-bold placeholder:text-white/20 focus:outline-none focus:border-purple-500/40 text-center tracking-[0.3em]"
                      />
                      <button
                        onClick={handleVerifyOtp}
                        disabled={verifyingOtp || otpCode.length !== 6}
                        className="px-4 py-2.5 bg-purple-600/20 border border-purple-500/30 rounded-xl text-purple-300 text-xs font-black uppercase tracking-wider hover:bg-purple-600/30 transition-all disabled:opacity-50 flex items-center gap-2 whitespace-nowrap"
                      >
                        {verifyingOtp ? (
                          <><Loader2 size={14} className="animate-spin" /> {t.verifyingCode}</>
                        ) : (
                          t.verifyCode
                        )}
                      </button>
                    </div>
                    {/* Resend button */}
                    <button
                      onClick={() => { setOtpSent(false); setOtpCode(''); }}
                      disabled={resendCooldown > 0}
                      className="text-xs text-white/30 hover:text-white/50 transition-all disabled:opacity-50"
                    >
                      {resendCooldown > 0
                        ? `${t.resendIn} ${resendCooldown}s`
                        : lang === 'el' ? 'Αλλαγή αριθμού / Επαναποστολή' : 'Change number / Resend'}
                    </button>
                  </div>
                )}
              </div>
            )}

            {phoneSuccess && (
              <div className="flex items-center gap-2 text-emerald-400 text-sm font-bold">
                <CheckCircle size={16} /> {t.phoneVerified}
              </div>
            )}

            {phoneError && (
              <p className="text-red-400 text-xs font-bold flex items-center gap-1 mt-2">
                <AlertCircle size={14} /> {phoneError}
              </p>
            )}
          </div>

          {/* Email Verification */}
          <div className={`rounded-xl border p-4 ${
            emailVerified
              ? 'bg-emerald-500/10 border-emerald-500/30'
              : 'bg-white/5 border-white/10'
          }`}>
            <div className="flex items-center gap-3">
              <Mail size={20} className={emailVerified ? 'text-emerald-400' : 'text-white/40'} />
              <div className="flex-1">
                <span className="text-sm font-bold text-white/80 block">{t.emailLabel}</span>
                {user?.email && (
                  <span className="text-xs text-white/30">{user.email}</span>
                )}
              </div>
              {emailVerified ? (
                <span className="flex items-center gap-1.5 text-xs font-bold text-emerald-400">
                  <CheckCircle size={14} /> {t.verified}
                </span>
              ) : (
                <span className="text-xs font-bold text-red-400">{t.notVerified}</span>
              )}
            </div>
            {!emailVerified && (
              <p className="text-xs text-white/30 mt-2">
                {t.checkEmail}
              </p>
            )}
          </div>

          {/* Status summary */}
          {isVerified && (
            <div className="flex items-center gap-2 px-4 py-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
              <CheckCircle size={16} className="text-emerald-400" />
              <span className="text-sm font-bold text-emerald-400">
                {lang === 'el'
                  ? 'Η επαλήθευση είναι ολοκληρωμένη — μπορείτε να κάνετε αγορές!'
                  : 'Verification complete — you can make purchases!'}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* ═══════ SECTION A: Activity Overview ═══════ */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Activities today */}
        <div className="bg-gradient-to-br from-blue-900/60 to-slate-900/80 border border-blue-500/20 rounded-2xl p-5 text-center">
          <div className="text-2xl mb-1">{'\u{1F3AF}'}</div>
          <p className="text-3xl font-[1000] text-white italic">{view.todayCount}</p>
          <p className="text-[10px] text-white/40 font-bold uppercase tracking-wider mt-1">{t.activitiesToday}</p>
        </div>
        {/* Streak */}
        <div className="bg-gradient-to-br from-orange-900/60 to-slate-900/80 border border-orange-500/20 rounded-2xl p-5 text-center">
          <div className="text-2xl mb-1">{'\u{1F525}'}</div>
          <p className="text-3xl font-[1000] text-white italic">{view.streak}</p>
          <p className="text-[10px] text-white/40 font-bold uppercase tracking-wider mt-1">{t.activeStreak}</p>
        </div>
        {/* Credits */}
        <div className="bg-gradient-to-br from-indigo-900/60 to-slate-900/80 border border-indigo-500/20 rounded-2xl p-5 text-center">
          <div className="text-2xl mb-1">{'\u{1F48E}'}</div>
          <p className="text-3xl font-[1000] text-white italic">{view.credits}</p>
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
        <p className="text-[10px] text-white/30 font-bold uppercase tracking-wider -mt-4 mb-5">
          {summary
            ? (lang === 'el' ? 'Από τον λογαριασμό — ό,τι κι αν χρησιμοποιεί συσκευή το παιδί' : 'From the account — whatever device your child uses')
            : summaryFailed
              ? (lang === 'el' ? 'Εκτός σύνδεσης — νούμερα αυτής της συσκευής μόνο' : 'Offline — this device’s numbers only')
              : (lang === 'el' ? 'Φόρτωση από τον λογαριασμό...' : 'Loading from the account...')}
        </p>
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

      {/* ═══════ Recent activity (from the credit ledger) ═══════ */}
      {summary && summary.activity.recent.length > 0 && (
        <div className="bg-[#0B0F1A]/60 border border-white/10 rounded-2xl p-6">
          <h3 className="text-lg font-black text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <Clock size={20} className="text-emerald-400" /> {lang === 'el' ? 'ΠΡΟΣΦΑΤΗ ΔΡΑΣΤΗΡΙΟΤΗΤΑ' : 'RECENT ACTIVITY'}
          </h3>
          <div className="divide-y divide-white/5">
            {summary.activity.recent.map((a: any, i: number) => {
              const L: Record<string, { el: string; en: string; emoji: string }> = {
                READ_ACADEMY: { el: 'Διάβασε μια ιστορία', en: 'Read a story', emoji: '📖' },
                READ_BOOK: { el: 'Τελείωσε ένα βιβλίο', en: 'Finished a book', emoji: '📚' },
                PASS_QUIZ: { el: 'Πέρασε ένα quiz', en: 'Passed a quiz', emoji: '🧠' },
                GAME_REWARD: { el: 'Κέρδισε σε παιχνίδι', en: 'Won a game reward', emoji: '🎮' },
                DAILY_MISSION: { el: 'Ολοκλήρωσε την αποστολή ημέρας', en: 'Completed the daily mission', emoji: '⭐' },
                CREATE_IMAGE: { el: 'Έφτιαξε εικόνα με AI', en: 'Created an AI image', emoji: '🎨' },
                CREATE_SONG: { el: 'Έφτιαξε τραγούδι', en: 'Created a song', emoji: '🎵' },
                CREATE_VIDEO: { el: 'Έφτιαξε βίντεο', en: 'Created a video', emoji: '🎬' },
                CREATE_3D: { el: 'Έφτιαξε 3D μοντέλο', en: 'Created a 3D model', emoji: '🧊' },
                CREATE_BUSINESS: { el: 'Έπαιξε «Η Εταιρεία μου»', en: 'Played My Company', emoji: '🏢' },
                GIFT_SENT: { el: 'Έστειλε δώρο', en: 'Sent a gift', emoji: '🎁' },
                GIFT_RECEIVED: { el: 'Έλαβε δώρο', en: 'Received a gift', emoji: '🎁' },
                PURCHASE: { el: 'Αγορά credits', en: 'Credits purchase', emoji: '💳' },
              };
              const info = L[a.action] || { el: a.action, en: a.action, emoji: '✨' };
              const when = new Date(a.at).toLocaleString(lang === 'el' ? 'el-GR' : 'en-GB', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' });
              return (
                <div key={i} className="py-2.5 flex items-center justify-between gap-3">
                  <p className="text-sm text-white/80 truncate"><span className="mr-2">{info.emoji}</span>{lang === 'el' ? info.el : info.en}</p>
                  <p className="text-xs font-black shrink-0 tabular-nums">
                    <span className={a.amount < 0 ? 'text-red-400' : 'text-emerald-400'}>{a.amount > 0 ? '+' : ''}{a.amount}⚡</span>
                    <span className="text-white/30 ml-2">{when}</span>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ═══════ SECTION C: School progress ═══════ */}
      <ParentSchoolProgress lang={lang} />

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

      {/* ═══════ Parent PIN ═══════ */}
      <ParentPinChange lang={lang} />

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
