
import React, { useState, useEffect, useCallback, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';
import LandingPage from './components/LandingPage';
import ErrorBoundary from './components/ErrorBoundary';
import SEO from './components/SEO';
import SemiPublicRoute from './components/SemiPublicRoute';
import InternalLinks from './components/InternalLinks';
const SEOLandingPage = React.lazy(() => import('./components/SEOLandingPage'));
const SchoolGradeSEOPage = React.lazy(() => import('./components/SchoolGradeSEOPage'));
const SubjectSEOPage = React.lazy(() => import('./components/SubjectSEOPage'));
const MakerPassport = React.lazy(() => import('./components/MakerPassport'));
const OurStoryPage = React.lazy(() => import('./components/OurStoryPage'));
const MakerLevelUp = React.lazy(() => import('./components/MakerLevelUp'));
import { motion as m, AnimatePresence } from 'framer-motion';
import { Shield, ArrowRight, Zap } from 'lucide-react';
import { EconomyProvider, useEconomy } from './context/EconomyContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import UnlockGate from './components/UnlockGate';
import UpdatePrompt from './components/UpdatePrompt';
import { ACADEMY_STORY_COUNT } from './data/contentCounts';

// --- LAZY LOAD COMPONENTS (Performance Optimization) ---
// These components will only load when the user clicks on them,
// making the initial website load much faster.
const Quiz = React.lazy(() => import('./components/Quiz'));
const HeroFactory = React.lazy(() => import('./components/HeroFactory'));
const Academy = React.lazy(() => import('./components/Academy'));
const Ebooks = React.lazy(() => import('./components/Ebooks'));
const School = React.lazy(() => import('./components/School'));
const Dashboard = React.lazy(() => import('./components/Dashboard'));
const AdminDashboard = React.lazy(() => import('./components/AdminDashboard'));
const Account = React.lazy(() => import('./components/Account'));
const WiseFriends = React.lazy(() => import('./components/WiseFriends'));
const Cinema = React.lazy(() => import('./components/Cinema'));
const ThreeDFactory = React.lazy(() => import('./components/ThreeDFactory'));
const HeroMarket = React.lazy(() => import('./components/HeroMarket'));
const LegalHub = React.lazy(() => import('./components/LegalHub')); 
const GameCenter = React.lazy(() => import('./components/GameCenter'));
const MusicStudio = React.lazy(() => import('./components/MusicStudio'));
const BusinessSimulation = React.lazy(() => import('./components/BusinessSimulation'));
const CreditStore = React.lazy(() => import('./components/CreditStore'));
const ParentDashboard = React.lazy(() => import('./components/ParentDashboard'));
const AuthScreen = React.lazy(() => import('./components/AuthScreen'));
const VerifyEmailLanding = React.lazy(() => import('./components/VerifyEmailLanding'));
const CookieConsent = React.lazy(() => import('./components/CookieConsent'));

const motion = m as any;

type RitualPhase = 'intro' | 'ritual' | 'discover' | 'gateway';

interface PortalProps {
  lang: 'el' | 'en';
}

// ─── DISCOVERY FEATURES ───
const DISCOVER_FEATURES = {
  el: [
    { to: '/academy', emoji: '🧠', title: 'ΜΑΘΕ', desc: `Ιστορίες ${ACADEMY_STORY_COUNT} σπουδαίων ανθρώπων`, color: 'from-purple-500/20 to-purple-600/10', border: 'border-purple-500/30', glow: 'shadow-purple-500/20' },
    { to: '/ebooks', emoji: '📚', title: 'ΔΙΑΒΑΣΕ', desc: 'Βιβλία που σου δίνουν δύναμη', color: 'from-blue-500/20 to-blue-600/10', border: 'border-blue-500/30', glow: 'shadow-blue-500/20' },
    { to: '/factory', emoji: '🎨', title: 'ΔΗΜΙΟΥΡΓΗΣΕ', desc: 'Τον δικό σου ήρωα με AI', color: 'from-pink-500/20 to-fuchsia-600/10', border: 'border-pink-500/30', glow: 'shadow-pink-500/20' },
    { to: '/music', emoji: '🎵', title: 'ΤΡΑΓΟΥΔΑ', desc: 'Φτιάξε δικά σου τραγούδια', color: 'from-rose-500/20 to-red-600/10', border: 'border-rose-500/30', glow: 'shadow-rose-500/20' },
    { to: '/business', emoji: '🏢', title: 'ΕΠΙΧΕΙΡΗΣΕ', desc: 'Κάνε το πρώτο σου business', color: 'from-emerald-500/20 to-teal-600/10', border: 'border-emerald-500/30', glow: 'shadow-emerald-500/20' },
    { to: '/cinema', emoji: '🧊', title: '3D & VIDEO', desc: 'Ζωντάνεψε τους ήρωές σου', color: 'from-cyan-500/20 to-sky-600/10', border: 'border-cyan-500/30', glow: 'shadow-cyan-500/20' },
    { to: '/game', emoji: '🧩', title: 'ΠΑΙΞΕ', desc: 'Quiz, παιχνίδια & προκλήσεις', color: 'from-amber-500/20 to-orange-600/10', border: 'border-amber-500/30', glow: 'shadow-amber-500/20' },
    { to: '/wise-friends', emoji: '👫', title: 'ΜΟΙΡΑΣΟΥ', desc: 'Πρόκαλε φίλους & ανταγωνίσου', color: 'from-indigo-500/20 to-violet-600/10', border: 'border-indigo-500/30', glow: 'shadow-indigo-500/20' },
  ],
  en: [
    { to: '/academy', emoji: '🧠', title: 'LEARN', desc: `Stories of ${ACADEMY_STORY_COUNT} great people`, color: 'from-purple-500/20 to-purple-600/10', border: 'border-purple-500/30', glow: 'shadow-purple-500/20' },
    { to: '/ebooks', emoji: '📚', title: 'READ', desc: 'Books that give you power', color: 'from-blue-500/20 to-blue-600/10', border: 'border-blue-500/30', glow: 'shadow-blue-500/20' },
    { to: '/factory', emoji: '🎨', title: 'CREATE', desc: 'Your own AI hero', color: 'from-pink-500/20 to-fuchsia-600/10', border: 'border-pink-500/30', glow: 'shadow-pink-500/20' },
    { to: '/music', emoji: '🎵', title: 'SING', desc: 'Make your own songs', color: 'from-rose-500/20 to-red-600/10', border: 'border-rose-500/30', glow: 'shadow-rose-500/20' },
    { to: '/business', emoji: '🏢', title: 'BUILD', desc: 'Start your first business', color: 'from-emerald-500/20 to-teal-600/10', border: 'border-emerald-500/30', glow: 'shadow-emerald-500/20' },
    { to: '/cinema', emoji: '🧊', title: '3D & VIDEO', desc: 'Bring your heroes to life', color: 'from-cyan-500/20 to-sky-600/10', border: 'border-cyan-500/30', glow: 'shadow-cyan-500/20' },
    { to: '/game', emoji: '🧩', title: 'PLAY', desc: 'Quizzes, games & challenges', color: 'from-amber-500/20 to-orange-600/10', border: 'border-amber-500/30', glow: 'shadow-amber-500/20' },
    { to: '/wise-friends', emoji: '👫', title: 'SHARE', desc: 'Challenge friends & compete', color: 'from-indigo-500/20 to-violet-600/10', border: 'border-indigo-500/30', glow: 'shadow-indigo-500/20' },
  ],
};

const Portal: React.FC<PortalProps> = ({ lang }) => {
  const navigate = useNavigate();
  // The cinematic intro is a 3-second ritual: worth it once, an obstacle every time
  // after (audit P1-7). Returning visitors go straight to the gateway.
  const seenBefore = typeof localStorage !== 'undefined' && !!localStorage.getItem('wb_portal_seen');
  const [phase, setPhase] = useState<RitualPhase>(seenBefore ? 'gateway' : 'intro');
  const [showLine2, setShowLine2] = useState(false);
  const { earnXp } = useEconomy();
  const { user } = useAuth();

  // The portal is the primary landing CTA's destination; without this event the
  // top of the funnel is invisible in GA4 (CRO-AUDIT P0-5).
  useEffect(() => {
    import('./utils/analytics').then(({ trackPortalEnter }) => trackPortalEnter()).catch(() => {});
  }, []);

  useEffect(() => {
    if (seenBefore) return;
    const t1 = setTimeout(() => setShowLine2(true), 500);
    const t2 = setTimeout(() => setPhase('ritual'), 1500);
    const t3 = setTimeout(() => setPhase('discover'), 3000);
    const t4 = setTimeout(() => { setPhase('gateway'); localStorage.setItem('wb_portal_seen', '1'); }, 3200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [seenBefore]);

  const t = {
    el: {
      line1: 'ΔΕΝ ΑΓΟΡΑΣΕΣ ΕΝΑΝ ΗΡΩΑ.',
      line2: '...ΚΑΠΟΙΟΣ ΣΕ ΔΙΑΛΕΞΕ.',
      cardTitle: 'ΞΕΚΛΕΙΔΩΣΕΣ ΕΝΑΝ ΦΥΛΑΚΑ',
      cardQuote: '«Οι Φύλακες δεν ανήκουν σε κανέναν. Εμφανίζονται μόνο όταν κάποιος είναι έτοιμος να δημιουργήσει κάτι δικό του.»',
      credits: 'Χρησιμοποίησέ τα για να φτιάξεις κάτι που δεν υπήρχε.',
      discoverTitle: 'ΤΙ ΘΑ ΑΝΑΚΑΛΥΨΕΙΣ',
      btn: 'ΞΕΚΙΝΑ ΤΟ ΤΑΞΙΔΙ',
      register: 'Δωρεάν εγγραφή — κράτα ό,τι φτιάξεις',
      footer: 'ΟΙ ΦΥΛΑΚΕΣ ΔΕΝ ΠΕΡΙΜΕΝΟΥΝ. ΔΗΜΙΟΥΡΓΟΥΝ.'
    },
    en: {
      line1: 'YOU DIDN\'T BUY A HERO.',
      line2: '...SOMEONE CHOSE YOU.',
      cardTitle: 'YOU UNLOCKED A GUARDIAN',
      cardQuote: '«Guardians belong to no one. They appear only when someone is ready to create something of their own.»',
      credits: 'Use them to create something that didn\'t exist.',
      discoverTitle: 'WHAT YOU\'LL DISCOVER',
      btn: 'START YOUR JOURNEY',
      register: 'Free account — keep what you create',
      footer: 'GUARDIANS DON\'T WAIT. THEY CREATE.'
    }
  };

  const text = t[lang];
  const features = DISCOVER_FEATURES[lang];

  return (
    <div className="min-h-screen bg-[#0B0F1A] flex items-center justify-center relative overflow-hidden font-['Nunito'] select-none">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F1A] via-[#0B0F1A] to-[#0B0F1A]" />
      <div className="absolute inset-0 bg-[url('/images/stardust.webp')] opacity-15" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 blur-[120px] rounded-full animate-pulse pointer-events-none" />

      <div className="relative z-10 w-full max-w-4xl px-6 md:px-8 text-center">
        <AnimatePresence mode="wait">
          {/* ═══ PHASE 1: CINEMATIC INTRO ═══ */}
          {phase === 'intro' && (
            <motion.div
              key="intro"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
              className="space-y-12 md:space-y-16"
            >
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-slate-400 text-xl md:text-3xl font-thin italic tracking-[0.3em] uppercase"
              >
                {text.line1}
              </motion.p>

              <AnimatePresence>
                {showLine2 && (
                  <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="text-5xl md:text-8xl font-[1000] text-amber-500 uppercase italic tracking-tighter drop-shadow-[0_0_60px_rgba(245,158,11,0.6)]"
                  >
                    {text.line2}
                  </motion.h2>
                )}
              </AnimatePresence>
            </motion.div>
          )}

          {/* ═══ PHASE 2: GUARDIAN CARD ═══ */}
          {phase === 'ritual' && (
            <motion.div
              key="ritual"
              initial={{ opacity: 0, scale: 0.95, y: 60 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="max-w-md mx-auto space-y-8 md:space-y-10"
            >
              <div className="glass-panel p-8 rounded-[3rem] border-2 border-white/10 shadow-[0_0_80px_rgba(59,130,246,0.15)] space-y-8 relative">
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center border border-white/20 backdrop-blur-3xl shadow-xl">
                   <Shield size={32} className="text-blue-400 animate-pulse" />
                </div>

                <div className="space-y-4 pt-6">
                  <h3 className="text-2xl md:text-3xl font-[1000] text-white uppercase italic tracking-tighter leading-none">
                    {text.cardTitle}
                  </h3>
                  <p className="text-slate-400 text-sm md:text-base font-bold italic leading-relaxed px-2">
                    {text.cardQuote}
                  </p>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="space-y-4"
                >
                  <div className="flex items-center justify-center gap-4 bg-blue-500/10 border border-blue-500/30 px-6 py-4 rounded-[1.5rem] shadow-[0_0_40px_rgba(59,130,246,0.1)]">
                    <Zap size={24} className="text-blue-400 fill-current" />
                    <span className="text-xl md:text-2xl font-[1000] text-blue-400 italic tracking-tighter">
                      {lang === 'el' ? 'Ξεκίνα Δωρεάν!' : 'Start Free!'}
                    </span>
                  </div>
                  <p className="text-white/30 text-xs font-bold italic tracking-wide">
                    {lang === 'el' ? 'Κέρδισε credits παίζοντας και μαθαίνοντας' : 'Earn credits by playing and learning'}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          )}

          {/* ═══ PHASE 3 & 4: DISCOVER + GATEWAY ═══ */}
          {(phase === 'discover' || phase === 'gateway') && (
            <motion.div
              key="discover"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="max-w-2xl mx-auto space-y-8"
            >
              {/* Section title */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="space-y-2"
              >
                <p className="text-white/20 text-[10px] font-[1000] uppercase tracking-[0.5em]">
                  {text.discoverTitle}
                </p>
                <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent mx-auto" />
              </motion.div>

              {/* Feature grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                {features.map((feat, i) => (
                  <motion.button
                    type="button"
                    key={feat.title}
                    onClick={() => navigate(feat.to)}
                    aria-label={`${feat.title} — ${feat.desc}`}
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                      delay: 0.15 + i * 0.08,
                      duration: 0.5,
                      type: 'spring',
                      stiffness: 200,
                      damping: 20,
                    }}
                    // A card that says "READ" and does nothing when tapped confuses a child
                    // (audit P1-7): each one now opens its section directly.
                    className={`relative p-4 md:p-5 rounded-2xl bg-gradient-to-br ${feat.color} border ${feat.border} shadow-lg ${feat.glow} backdrop-blur-sm overflow-hidden group hover:scale-105 active:scale-95 transition-transform cursor-pointer text-left`}
                  >
                    {/* Ambient glow */}
                    <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/5 rounded-full blur-xl pointer-events-none" />

                    <div className="relative z-10 text-center space-y-1.5">
                      <motion.span
                        animate={{ y: [0, -3, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                        className="text-2xl md:text-3xl block"
                      >
                        {feat.emoji}
                      </motion.span>
                      <h4 className="text-white font-[1000] text-[10px] md:text-xs uppercase italic tracking-wider leading-none">
                        {feat.title}
                      </h4>
                      <p className="text-white/40 text-[9px] md:text-[10px] font-bold leading-snug">
                        {feat.desc}
                      </p>
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* CTA Button */}
              {phase === 'gateway' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  className="space-y-6 pt-2"
                >
                  <button
                    onClick={() => {
                      navigate('/dashboard');
                    }}
                    className="group relative mx-auto px-10 py-5 md:py-6 bg-gradient-to-r from-amber-500/10 via-amber-500/20 to-amber-500/10 border-2 border-amber-500/30 rounded-full overflow-hidden transition-all hover:border-amber-400/60 hover:scale-105 active:scale-95 shadow-[0_0_60px_rgba(245,158,11,0.15)] hover:shadow-[0_0_80px_rgba(245,158,11,0.3)]"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-amber-500/10 to-amber-500/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="relative z-10 text-amber-400 font-[1000] text-lg md:text-xl uppercase tracking-[0.15em] italic flex items-center gap-4">
                      {text.btn}
                      <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform duration-500" />
                    </span>
                  </button>

                  {/* Guests were never asked for an account anywhere on the primary
                      landing → portal → dashboard path (CRO-AUDIT P0-2). */}
                  {!user && (
                    <button
                      onClick={() => navigate('/login?mode=register')}
                      className="block mx-auto text-sm font-[900] text-purple-300/80 hover:text-purple-200 underline underline-offset-4 decoration-purple-500/40 transition-colors"
                    >
                      {text.register}
                    </button>
                  )}

                  <p className="text-[10px] font-[1000] uppercase tracking-[0.6em] text-white/10 italic animate-pulse">
                    {text.footer}
                  </p>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

// --- PENDING VERIFICATION SCREEN ---
// --- AUTO-REDIRECT: If logged in, go to dashboard (handles OAuth callback) ---
// Was a no-op passthrough (CRO-AUDIT P2-14). Children render while auth resolves so
// the static hero shell's instant first paint (PR #43) is not delayed; the redirect
// kicks in the moment a session is known.
const AutoRedirectIfLoggedIn: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, loading } = useAuth();
  if (!loading && user) return <Navigate to="/dashboard" replace />;
  return <>{children}</>;
};

// NOT a login gate on purpose: guest mode routes visitors through /dashboard,
// /account and /parent render their own logged-out CTAs, and the server APIs
// enforce auth. It only holds rendering until the session is known.
const ProtectedRoute: React.FC<{ children: React.ReactNode; lang?: 'el' | 'en' }> = ({ children, lang = 'el' }) => {
  const { loading } = useAuth();

  if (loading) return <PageLoader />;
  return <>{children}</>;
};

// The admin dashboard is the one client route with no logged-out story at all —
// guests got a confusing empty shell (server auth always protected the data).
const AdminRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) return <PageLoader />;
  if (!user) return <Navigate to="/login" replace />;
  return <>{children}</>;
};

// --- LOADING SCREEN FOR LAZY LOADING ---
const PageLoader = () => (
  <div className="flex flex-col items-center justify-center h-full min-h-[50vh] space-y-4">
     <div className="relative">
        <div className="w-16 h-16 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
           <Zap size={16} className="text-blue-400 animate-pulse" fill="currentColor" />
        </div>
     </div>
     <p className="text-white/30 font-black text-xs uppercase tracking-widest animate-pulse">ΦΟΡΤΩΣΗ...</p>
  </div>
);

// --- MAIN APP CONTENT ---
function AppContent({ lang, setLang }: { lang: 'el' | 'en'; setLang: React.Dispatch<React.SetStateAction<'el' | 'en'>> }) {
  const [xp, setXp] = useState<number>(() => {
    const saved = localStorage.getItem('wb_xp');
    return saved ? parseInt(saved) : 0;
  });
  const [level, setLevel] = useState<number>(() => {
    const saved = localStorage.getItem('wb_level');
    return saved ? parseInt(saved) : 1;
  });
  const { earnXp } = useEconomy();

  const [myHeroes, setMyHeroes] = useState<any[]>(() => {
    const saved = localStorage.getItem('wb_heroes');
    if (!saved) return [];
    try { return JSON.parse(saved); } catch { /* corrupted data, use default */ return []; }
  });
  const [completedIds, setCompletedIds] = useState<string[]>(() => {
    const saved = localStorage.getItem('wb_completed_ids');
    if (!saved) return [];
    try { return JSON.parse(saved); } catch { /* corrupted data, use default */ return []; }
  });

  // Daily bonus claim tracking (persisted to localStorage)
  const [lastClaimDate, setLastClaimDate] = useState<string>(() => {
    return localStorage.getItem('wb_last_claim_date') || '';
  });

  // Capture ?ref= invite codes from shared links — consumed at signup
  useEffect(() => {
    try {
      const ref = new URLSearchParams(window.location.search).get('ref');
      if (ref && /^[A-Za-z2-9]{4,12}$/.test(ref)) localStorage.setItem('wb_ref', ref.toUpperCase());
    } catch { /* ignore malformed URLs */ }
  }, []);

  useEffect(() => {
    if (lastClaimDate) localStorage.setItem('wb_last_claim_date', lastClaimDate);
  }, [lastClaimDate]);

  const handleClaimBonus = useCallback((): boolean => {
    const today = new Date().toDateString();
    if (lastClaimDate === today) return false;
    earnXp(30, 'DAILY_BONUS');
    setLastClaimDate(today);
    return true;
  }, [lastClaimDate, earnXp]);

  // XP rewards from anywhere in the app (EconomyContext.earnXp dispatches `wb:xp`).
  // Levels every 500 XP; levelling up is its own reward — no credits attached.
  useEffect(() => {
    const onXp = (e: Event) => {
      const amount = Number((e as CustomEvent).detail?.amount);
      if (!Number.isFinite(amount) || amount <= 0) return;
      setXp(p => {
        const newXp = p + amount;
        setLevel(currentLevel => (newXp >= currentLevel * 500 ? currentLevel + 1 : currentLevel));
        return newXp;
      });
    };
    window.addEventListener('wb:xp', onXp);
    return () => window.removeEventListener('wb:xp', onXp);
  }, []);

  // Persist XP, Level, Heroes, CompletedIds to localStorage
  useEffect(() => { localStorage.setItem('wb_xp', xp.toString()); }, [xp]);
  useEffect(() => { localStorage.setItem('wb_level', level.toString()); }, [level]);
  useEffect(() => { try { localStorage.setItem('wb_heroes', JSON.stringify(myHeroes)); } catch (e) { console.warn('Failed to save heroes to localStorage:', e); } }, [myHeroes]);
  useEffect(() => { localStorage.setItem('wb_completed_ids', JSON.stringify(completedIds)); }, [completedIds]);

  const addXp = useCallback((amount: number, id: string) => {
    setCompletedIds(prev => {
      if (prev.includes(id)) return prev;

      // Nest setLevel inside setXp updater so `p` is always the real latest XP
      setXp(p => {
        const newXp = p + amount;
        setLevel(currentLevel => (newXp >= currentLevel * 500 ? currentLevel + 1 : currentLevel));
        return newXp;
      });

      return [...prev, id];
    });
  }, []);

  const addHero = useCallback((hero: any) => {
    setMyHeroes(prev => [...prev, hero]);
  }, []);

  const updateHero = useCallback((updatedHero: any) => {
    setMyHeroes(prev => prev.map(h => h.id === updatedHero.id ? updatedHero : h));
  }, []);

  return (
    <BrowserRouter>
      <Layout lang={lang} setLang={setLang} xp={xp} level={level} completedIds={completedIds} myHeroes={myHeroes}>
        {/* ErrorBoundary catches crashes, Suspense handles lazy loading */}
        <ErrorBoundary lang={lang}>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            {/* ═══ PUBLIC ROUTES ═══ */}
            <Route path="/" element={<AutoRedirectIfLoggedIn><SEO lang={lang} page="home" /><LandingPage lang={lang} /></AutoRedirectIfLoggedIn>} />
            <Route path="/portal" element={<Portal lang={lang} />} />
            <Route path="/login" element={<><SEO lang={lang} page="login" /><AuthScreen lang={lang} /></>} />
            {/* Signup verification emails redirect here (api/auth/signup.ts redirectTo). */}
            <Route path="/auth" element={<VerifyEmailLanding lang={lang} />} />
            <Route path="/legal" element={<><SEO lang={lang} page="legal" /><LegalHub lang={lang} /></>} />
            <Route path="/privacy" element={<><SEO lang={lang} page="privacy" /><LegalHub lang={lang} /></>} />
            <Route path="/terms" element={<><SEO lang={lang} page="terms" /><LegalHub lang={lang} /></>} />

            {/* ═══ SEMI-PUBLIC ROUTES — viewable by everyone, auth required for actions ═══ */}
            <Route path="/academy" element={<SemiPublicRoute lang={lang}><SEO lang={lang} page="academy" /><Academy lang={lang} addXp={addXp} completedIds={completedIds} /><InternalLinks lang={lang} currentPage="academy" /></SemiPublicRoute>} />
            <Route path="/ebooks" element={<SemiPublicRoute lang={lang}><SEO lang={lang} page="ebooks" /><Ebooks lang={lang} addXp={addXp} completedIds={completedIds} xp={xp} level={level} /><InternalLinks lang={lang} currentPage="ebooks" /></SemiPublicRoute>} />
            <Route path="/music" element={<SemiPublicRoute lang={lang}><SEO lang={lang} page="music" /><MusicStudio lang={lang} /><InternalLinks lang={lang} currentPage="music" /></SemiPublicRoute>} />
            <Route path="/game" element={<SemiPublicRoute lang={lang}><SEO lang={lang} page="game" /><GameCenter lang={lang} /><InternalLinks lang={lang} currentPage="game" /></SemiPublicRoute>} />
            <Route path="/quiz" element={<SemiPublicRoute lang={lang}><SEO lang={lang} page="quiz" /><Quiz lang={lang} /><InternalLinks lang={lang} currentPage="quiz" /></SemiPublicRoute>} />
            <Route path="/school" element={<SemiPublicRoute lang={lang}><SEO lang={lang} page="school" /><School lang={lang} addXp={addXp} completedIds={completedIds} /><InternalLinks lang={lang} currentPage="school" /></SemiPublicRoute>} />
            <Route path="/cinema" element={<SemiPublicRoute lang={lang}><SEO lang={lang} page="cinema" /><UnlockGate feature="cinema" lang={lang}><Cinema lang={lang} myHeroes={myHeroes} /></UnlockGate><InternalLinks lang={lang} currentPage="cinema" /></SemiPublicRoute>} />
            <Route path="/factory" element={<SemiPublicRoute lang={lang}><SEO lang={lang} page="factory" /><UnlockGate feature="factory" lang={lang}><HeroFactory lang={lang} addHero={addHero} /></UnlockGate><InternalLinks lang={lang} currentPage="factory" /></SemiPublicRoute>} />
            <Route path="/3d-factory" element={<SemiPublicRoute lang={lang}><SEO lang={lang} page="3d-factory" /><UnlockGate feature="3d" lang={lang}><ThreeDFactory lang={lang} /></UnlockGate><InternalLinks lang={lang} currentPage="3d-factory" /></SemiPublicRoute>} />
            <Route path="/business" element={<SemiPublicRoute lang={lang}><SEO lang={lang} page="business" /><UnlockGate feature="business" lang={lang}><BusinessSimulation lang={lang} addXp={addXp} completedIds={completedIds} /></UnlockGate><InternalLinks lang={lang} currentPage="business" /></SemiPublicRoute>} />
            <Route path="/market" element={<SemiPublicRoute lang={lang}><SEO lang={lang} page="market" /><HeroMarket lang={lang} myHeroes={myHeroes} /><InternalLinks lang={lang} currentPage="market" /></SemiPublicRoute>} />
            <Route path="/wise-friends" element={<SemiPublicRoute lang={lang}><SEO lang={lang} page="wise-friends" /><WiseFriends lang={lang} myHeroes={myHeroes} updateHero={updateHero} completedIds={completedIds} /><InternalLinks lang={lang} currentPage="wise-friends" /></SemiPublicRoute>} />
            <Route path="/passport" element={<SemiPublicRoute lang={lang}><MakerPassport lang={lang} xp={xp} level={level} /></SemiPublicRoute>} />

            {/* ═══ SEO LANDING PAGES — content-rich pages targeting search queries ═══ */}
            {/* Slugs are duplicated in scripts/generate-seo-pages.mjs and public/sitemap.xml — keep in sync. */}
            {([[1, 'askiseis-a-dimotikou'], [2, 'askiseis-b-dimotikou'], [3, 'askiseis-g-dimotikou'], [4, 'askiseis-d-dimotikou'], [5, 'askiseis-e-dimotikou'], [6, 'askiseis-st-dimotikou']] as const).map(([g, slug]) => (
              <Route key={g} path={`/${slug}`} element={<SchoolGradeSEOPage lang={lang} grade={g} />} />
            ))}
            {/* Per-subject School pages (/mathimatika-dimotikou …). Slugs also live in
                SubjectSEOPage, generate-seo-pages.mjs and sitemap.xml — keep in sync. */}
            {(['mathimatika-dimotikou', 'glossa-dimotikou', 'istoria-dimotikou', 'fysiki-dimotikou', 'geografia-dimotikou', 'agglika-dimotikou'] as const).map(slug => (
              <Route key={slug} path={`/${slug}`} element={<SubjectSEOPage lang={lang} slug={slug} />} />
            ))}
            <Route path="/istoria-mas" element={<OurStoryPage lang={lang} />} />
            <Route path="/ai-paidia" element={<SEOLandingPage lang={lang} variant="ai-paidia" />} />
            <Route path="/paidika-paixnidia" element={<SEOLandingPage lang={lang} variant="paidika-paixnidia" />} />
            <Route path="/ekpaideutiko-ai" element={<SEOLandingPage lang={lang} variant="ekpaideutiko-ai" />} />
            <Route path="/ftiaxe-tragoudia-ai" element={<SEOLandingPage lang={lang} variant="ftiaxe-tragoudia-ai" />} />
            <Route path="/epixeirimatikotita-gia-paidia" element={<SEOLandingPage lang={lang} variant="epixeirimatikotita-gia-paidia" />} />

            {/* ═══ PROTECTED ROUTES — require authentication (dashboard, payment, admin) ═══ */}
            <Route path="/dashboard" element={<ProtectedRoute lang={lang}><Dashboard lang={lang} xp={xp} level={level} completedIds={completedIds} myHeroes={myHeroes} /></ProtectedRoute>} />
            <Route path="/admin" element={<AdminRoute><AdminDashboard lang={lang} /></AdminRoute>} />
            <Route path="/account" element={<ProtectedRoute lang={lang}><Account lang={lang} onClaimBonus={handleClaimBonus} lastClaimDate={lastClaimDate} /></ProtectedRoute>} />
            <Route path="/store" element={<SemiPublicRoute lang={lang}><CreditStore lang={lang} /></SemiPublicRoute>} />
            <Route path="/parent" element={<ProtectedRoute lang={lang}><ParentDashboard lang={lang} /></ProtectedRoute>} />

            {/* 404 catch-all: redirect unknown routes to landing */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
        </ErrorBoundary>
      </Layout>
      <Suspense fallback={null}>
        <CookieConsent lang={lang} />
      </Suspense>
      {/* Maker tier-up celebration — watches the same xp state, records in wb_maker_level */}
      <Suspense fallback={null}>
        <MakerLevelUp lang={lang} xp={xp} />
      </Suspense>
    </BrowserRouter>
  );
}

// Wrap with Providers: Helmet → Economy → Auth (Auth uses useEconomy for sync)
export default function App() {
  // Lives here, above EconomyProvider, so reward copy can be localized without the
  // provider reaching into the tree below it.
  const [lang, setLang] = useState<'el' | 'en'>('el');
  return (
    <HelmetProvider>
      <EconomyProvider lang={lang}>
        <AuthProvider>
          <AppContent lang={lang} setLang={setLang} />
          <UpdatePrompt lang={lang} />
        </AuthProvider>
      </EconomyProvider>
    </HelmetProvider>
  );
}
