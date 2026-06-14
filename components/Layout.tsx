
import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Home, 
  ShieldCheck, 
  BookOpen, 
  Book, 
  Wand2, 
  Trophy, 
  Rocket, 
  PlayCircle,
  Settings,
  UserCircle,
  Globe,
  X,
  Zap,
  Star,
  Crown,
  Gift,
  Sparkles,
  Users,
  Clapperboard,
  Box,
  Lock,
  Brain,
  Palette,
  Film,
  Hammer,
  Store,
  Medal,
  ChevronRight,
  Scale,
  Gamepad2,
  Menu,
  MessageCircle,
  Music,
  ArrowLeft,
  Briefcase,
  Volume2,
  VolumeX,
  FlaskConical,
  Coins,
  GraduationCap,
  Shield
} from 'lucide-react';
import { motion as m, AnimatePresence } from 'framer-motion';
import { UI_TEXT } from '../constants'; 
import { USER_GROUP_PHOTO } from '../constants';
import { useEconomy } from '../context/EconomyContext'; // Hook
const WiseBotChat = React.lazy(() => import('./WiseBotChat')); // Lazy load Chat (pulls in genai SDK)
const PWAInstallPrompt = React.lazy(() => import('./PWAInstallPrompt'));

const motion = m as any;

interface LayoutProps {
  children: React.ReactNode;
  lang: 'el' | 'en';
  setLang: (lang: 'el' | 'en') => void;
  xp: number;
  level: number;
  credits?: number;
  completedIds: string[];
  myHeroes?: any[];
}

const Layout: React.FC<LayoutProps> = ({ children, lang, setLang, xp, level, completedIds, myHeroes = [] }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isOnDashboard = location.pathname === '/dashboard';
  const [showLevelModal, setShowLevelModal] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lockedExpanded, setLockedExpanded] = useState(false);
  
  // NEW STATES FOR ROCKET INTERACTION
  const [showRocketOptions, setShowRocketOptions] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  
  // ECONOMY DATA
  const { credits, badges, stats } = useEconomy();

  // BACKGROUND MUSIC
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.3;
    audio.loop = true;
    if (!isMuted) {
      audio.play().catch(() => {});
    } else {
      audio.pause();
    }
  }, [isMuted]);

  const toggleMusic = () => setIsMuted(prev => !prev);
  
  const t = UI_TEXT[lang];

  // --- PROGRESSION LOGIC ---
  // Safe access with fallbacks to prevent crashes
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const s = (stats || {}) as any;
  const b = (badges || {}) as any;
  const isQuizUnlocked = true;
  const isMusicUnlocked = true;
  const isFactoryUnlocked = true;
  const isCinemaUnlocked = true;
  const isMarketUnlocked = true;
  const isBusinessUnlocked = true;
  const is3DUnlocked = true;
  const isEbooksUnlocked = true;
  const isFriendsUnlocked = true;
  const isGamesUnlocked = true;

  // --- CINEMATIC RANK SYSTEM ---
  const unlockedBadgeCount = Object.values(badges).filter(Boolean).length;
  const totalBadges = 8;
  const progressPercent = (unlockedBadgeCount / totalBadges) * 100;
  
  // Rank Definitions with Blue/Cyber Cinematic Colors & Localization
  const getRankInfo = (count: number, currentLang: 'el' | 'en') => {
    if (count >= 8) return {
      title: 'LEGEND',
      gradient: 'from-amber-300 via-yellow-500 to-amber-700',
      glow: 'shadow-amber-500/50',
      textGlow: 'drop-shadow-[0_0_15px_rgba(245,158,11,0.8)]',
      icon: Crown,
      sub: currentLang === 'el' ? 'Ο Απόλυτος Δημιουργός' : 'The Ultimate Creator'
    };
    if (count >= 6) return {
      title: 'GRANDMASTER',
      gradient: 'from-fuchsia-500 via-purple-600 to-indigo-800',
      glow: 'shadow-purple-500/50',
      textGlow: 'drop-shadow-[0_0_15px_rgba(168,85,247,0.8)]',
      icon: Star,
      sub: currentLang === 'el' ? 'Κυρίαρχος της Γνώσης' : 'Master of Wisdom'
    };
    if (count >= 4) return {
      title: 'MASTER',
      gradient: 'from-cyan-400 via-blue-500 to-blue-800',
      glow: 'shadow-blue-500/50',
      textGlow: 'drop-shadow-[0_0_15px_rgba(59,130,246,0.8)]',
      icon: Trophy,
      sub: currentLang === 'el' ? 'Έμπειρος Δημιουργός' : 'Skilled Creator'
    };
    if (count >= 2) return {
      title: 'CREATOR',
      gradient: 'from-emerald-400 via-green-500 to-teal-800',
      glow: 'shadow-emerald-500/50',
      textGlow: 'drop-shadow-[0_0_15px_rgba(16,185,129,0.8)]',
      icon: Wand2,
      sub: currentLang === 'el' ? 'Ανερχόμενο Ταλέντο' : 'Rising Talent'
    };
    if (count === 1) return {
      title: 'EXPLORER',
      gradient: 'from-sky-300 via-sky-400 to-blue-600',
      glow: 'shadow-sky-500/50',
      textGlow: 'drop-shadow-[0_0_10px_rgba(56,189,248,0.8)]',
      icon: BookOpen,
      sub: currentLang === 'el' ? 'Εξερευνητής' : 'Explorer'
    };
    // BASE RANK - WISEKID (Blue Theme)
    return {
      title: 'WISEKID',
      gradient: 'from-blue-400 via-indigo-500 to-purple-600',
      glow: 'shadow-blue-500/30',
      textGlow: 'drop-shadow-[0_0_10px_rgba(96,165,250,0.8)]',
      icon: Rocket,
      sub: currentLang === 'el' ? 'Μελλοντικός Ήρωας' : 'Future Hero'
    };
  };

  const currentRank = getRankInfo(unlockedBadgeCount, lang);
  const nextRank = getRankInfo(Math.min(unlockedBadgeCount + 1, 8), lang);

  // ============================================================
  // 🗺️ NAVIGATION — THREE-TIER: Pinned | Unlocked | Locked
  // ============================================================

  // All nav items (used for header title lookup)
  const navItems = [
    { icon: <Shield size={24} />, label: t.menu.parent, path: "/parent", locked: false, unlockHint: '' },
    { icon: <Home size={24} />, label: t.menu.home, path: "/", locked: false, unlockHint: '' },
    { icon: <ShieldCheck size={24} />, label: t.menu.dashboard, path: "/dashboard", locked: false, unlockHint: '' },
    { icon: <GraduationCap size={24} />, label: t.menu.school, path: "/school", locked: false, unlockHint: '' },
    { icon: <PlayCircle size={24} />, label: t.menu.academy, path: "/academy", locked: false, unlockHint: '' },
    { icon: <Book size={24} />, label: t.menu.ebooks, path: "/ebooks", locked: false, unlockHint: '' },
    { icon: <Trophy size={24} />, label: t.menu.quiz, path: "/quiz", locked: !isQuizUnlocked, unlockHint: lang === 'el' ? '2 ιστορίες ή 1 βιβλίο' : '2 stories or 1 book' },
    { icon: <Wand2 size={24} />, label: t.menu.factory, path: "/factory", locked: !isFactoryUnlocked, unlockHint: lang === 'el' ? '3 ιστορίες ή 2 βιβλία' : '3 stories or 2 books' },
    { icon: <Gamepad2 size={24} />, label: t.menu.game, path: "/game", locked: !isGamesUnlocked, unlockHint: lang === 'el' ? '1 βιβλίο ή 1 quiz' : '1 book or 1 quiz' },
    { icon: <Music size={24} />, label: t.menu.music, path: "/music", locked: !isMusicUnlocked, unlockHint: lang === 'el' ? '1 ιστορία' : '1 story' },
    { icon: <Clapperboard size={24} />, label: t.menu.cinema, path: "/cinema", locked: !isCinemaUnlocked, unlockHint: lang === 'el' ? '1 ήρωας' : '1 hero' },
    { icon: <Box size={24} />, label: t.menu.factory3d, path: "/3d-factory", locked: !is3DUnlocked, unlockHint: lang === 'el' ? 'Creator Badge' : 'Creator Badge' },
    { icon: <Briefcase size={24} />, label: t.menu.business, path: "/business", locked: !isBusinessUnlocked, unlockHint: lang === 'el' ? '2 ιστορίες' : '2 stories' },
    { icon: <Store size={24} />, label: t.menu.market, path: "/market", locked: !isMarketUnlocked, unlockHint: lang === 'el' ? '1 ήρωας' : '1 hero' },
    { icon: <Users size={24} />, label: t.menu.wiseFriends, path: "/wise-friends", locked: false, unlockHint: '' },
    { icon: <Coins size={24} />, label: t.menu.store, path: "/store", locked: false, unlockHint: '' },
    { icon: <UserCircle size={24} />, label: t.menu.account, path: "/account", locked: false, unlockHint: '' },
  ];

  // PINNED: always visible at top (Parent, Home, Dashboard)
  const pinnedItems = navItems.slice(0, 3);
  // The rest: split into unlocked vs locked
  const otherItems = navItems.slice(3);
  const unlockedItems = otherItems.filter(i => !i.locked);
  const lockedItems = otherItems.filter(i => i.locked);

  // Logic to hide layout on immersive pages
  // We check for '/' (Landing), '/landing', and '/portal'
  const isImmersive = ['/', '/landing', '/portal'].includes(location.pathname);
  // Compact padding for quiz — no large bottom padding (FAB doesn't overlap content there)
  const isQuizRoute = location.pathname === '/quiz';
  const activeGradient = "bg-gradient-to-r from-blue-600 to-purple-600 shadow-[0_0_20px_rgba(59,130,246,0.6)]";

  // BADGE DISPLAY CONFIG (Localized)
  const badgeList = [
    { key: 'thinker', title: { el: 'ΣΤΟΧΑΣΤΗΣ', en: 'THINKER' }, icon: Brain, desc: { el: 'Γνώση', en: 'Knowledge' } },
    { key: 'creator', title: { el: 'ΔΗΜΙΟΥΡΓΟΣ', en: 'CREATOR' }, icon: Palette, desc: { el: 'Φαντασία', en: 'Imagination' } },
    { key: 'filmmaker', title: { el: 'ΣΚΗΝΟΘΕΤΗΣ', en: 'DIRECTOR' }, icon: Clapperboard, desc: { el: 'Αφήγηση', en: 'Storytelling' } },
    { key: 'builder', title: { el: 'ΜΑΣΤΟΡΑΣ', en: 'BUILDER' }, icon: Hammer, desc: { el: 'Κατασκευή', en: 'Engineering' } },
    { key: 'market', title: { el: 'ΕΜΠΟΡΟΣ', en: 'TRADER' }, icon: Store, desc: { el: 'Κοινότητα', en: 'Community' } },
    { key: 'musician', title: { el: 'ΜΟΥΣΙΚΟΣ', en: 'MUSICIAN' }, icon: Music, desc: { el: 'Μελωδία', en: 'Melody' } },
    { key: 'scientist', title: { el: 'ΕΠΙΣΤΗΜΟΝΑΣ', en: 'SCIENTIST' }, icon: FlaskConical, desc: { el: 'Ερευνα', en: 'Research' } },
    { key: 'explorer', title: { el: 'ΕΞΕΡΕΥΝΗΤΗΣ', en: 'EXPLORER' }, icon: Globe, desc: { el: 'Ανακάλυψη', en: 'Discovery' } },
  ];

  return (
    <>
      {/* MOBILE / TABLET FLOATING TRIGGER (ROCKET) */}
      {!isImmersive && (
        <div className="xl:hidden block">
          
          {/* OPTIONS POPUP (Around Rocket) */}
          <AnimatePresence>
            {showRocketOptions && (
              <>
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-[9998] bg-black/60 backdrop-blur-sm"
                  onClick={() => setShowRocketOptions(false)}
                />
                
                {/* OPTION 1: MENU */}
                <motion.button
                  initial={{ scale: 0, x: 0, y: 0 }}
                  animate={{ scale: 1, x: -70, y: -20 }}
                  exit={{ scale: 0, x: 0, y: 0 }}
                  onClick={() => { setIsMobileMenuOpen(true); setShowRocketOptions(false); }}
                  aria-label="Open navigation menu"
                  style={{ position: 'fixed', bottom: '100px', right: '32px', zIndex: 9999 }}
                  className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-xl border-2 border-white/20"
                >
                  <Menu size={24} />
                  <span className="absolute -top-8 bg-blue-600 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-widest shadow-lg">{lang === 'el' ? 'Μενού' : 'Menu'}</span>
                </motion.button>

                {/* OPTION 2: CHATBOT */}
                <motion.button
                  initial={{ scale: 0, x: 0, y: 0 }}
                  animate={{ scale: 1, x: -10, y: -90 }}
                  exit={{ scale: 0, x: 0, y: 0 }}
                  onClick={() => { setIsChatOpen(true); setShowRocketOptions(false); }}
                  aria-label="Open WiseBot chat"
                  style={{ position: 'fixed', bottom: '100px', right: '32px', zIndex: 9999 }}
                  className="w-14 h-14 bg-purple-600 rounded-full flex items-center justify-center text-white shadow-xl border-2 border-white/20"
                >
                  <MessageCircle size={24} />
                  <span className="absolute -top-8 bg-purple-600 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-widest shadow-lg w-max">WiseBot</span>
                </motion.button>
              </>
            )}
          </AnimatePresence>

          {/* MAIN ROCKET BUTTON */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            initial={{ scale: 0, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            onClick={() => setShowRocketOptions(!showRocketOptions)}
            aria-label={showRocketOptions ? 'Close menu' : 'Open menu'}
            style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 9999 }}
            className={`w-16 h-16 rounded-full flex items-center justify-center text-white shadow-[0_0_40px_rgba(59,130,246,0.8)] border-2 border-white/40 backdrop-blur-2xl transition-transform ${showRocketOptions ? 'bg-red-500 rotate-45' : 'bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 hover:scale-110'}`}
          >
            <div className="relative">
               {showRocketOptions ? <X size={28} /> : <Rocket size={28} className="animate-pulse relative z-10 -rotate-45" />}
               {!showRocketOptions && <div className="absolute inset-0 blur-md bg-white/50 animate-pulse"></div>}
            </div>
          </motion.button>

          {/* MOBILE MENU */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div 
                initial={{ opacity: 0, y: "100%" }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: "100%" }}
                className="fixed inset-0 z-[10000] bg-[#0B0F1A]/98 backdrop-blur-3xl flex flex-col"
              >
                 {/* ... Mobile Menu Content ... */}
                 <div className="flex items-center justify-between p-6 border-b border-white/10">
                   <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                        <Rocket size={20} />
                      </div>
                      <span className="text-xl font-black text-white uppercase italic tracking-tighter">WiseBot</span>
                   </div>
                   <button
                     onClick={() => setIsMobileMenuOpen(false)}
                     aria-label={lang === 'el' ? 'Κλείσιμο μενού' : 'Close menu'}
                     className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white border border-white/10 active:bg-white/20"
                   >
                     <X size={24} />
                   </button>
                </div>
                <div className="flex-1 overflow-y-auto p-6 space-y-2 custom-scrollbar">
                   {/* ── PINNED ── */}
                   {pinnedItems.map((item) => (
                     <Link
                       key={item.path}
                       to={item.path}
                       onClick={() => setIsMobileMenuOpen(false)}
                       className={`flex items-center gap-4 px-6 py-4 rounded-2xl transition-all ${
                         location.pathname === item.path
                           ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg border border-white/20"
                           : "bg-white/5 text-white/70 border border-white/5 active:bg-white/10"
                       }`}
                     >
                       {item.icon}
                       <span className="font-black text-lg uppercase tracking-wide">{item.label}</span>
                     </Link>
                   ))}

                   {/* ── SEPARATOR ── */}
                   <div className="my-3 h-px bg-white/10" />

                   {/* ── UNLOCKED ── */}
                   {unlockedItems.map((item) => (
                     <Link
                       key={item.path}
                       to={item.path}
                       onClick={() => setIsMobileMenuOpen(false)}
                       className={`flex items-center gap-4 px-6 py-4 rounded-2xl transition-all ${
                         location.pathname === item.path
                           ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg border border-white/20"
                           : "bg-white/5 text-white/70 border border-white/5 active:bg-white/10"
                       }`}
                     >
                       {item.icon}
                       <span className="font-black text-lg uppercase tracking-wide">{item.label}</span>
                     </Link>
                   ))}

                   {/* ── LOCKED DROPDOWN ── */}
                   {lockedItems.length > 0 && (
                     <>
                       <div className="my-3 h-px bg-white/10" />
                       <button
                         onClick={() => setLockedExpanded(prev => !prev)}
                         className="w-full flex items-center gap-4 px-6 py-4 rounded-2xl bg-white/5 border border-white/5 text-white/30 active:bg-white/10 transition-all"
                       >
                         <Lock size={22} />
                         <span className="font-black text-base uppercase tracking-wide flex-1 text-left">
                           {lang === 'el' ? `Κλειδωμένα (${lockedItems.length})` : `Locked (${lockedItems.length})`}
                         </span>
                         <ChevronRight size={20} className={`transition-transform duration-200 ${lockedExpanded ? 'rotate-90' : ''}`} />
                       </button>
                       <AnimatePresence>
                         {lockedExpanded && (
                           <motion.div
                             initial={{ opacity: 0, height: 0 }}
                             animate={{ opacity: 1, height: 'auto' }}
                             exit={{ opacity: 0, height: 0 }}
                             className="overflow-hidden space-y-2"
                           >
                             {lockedItems.map((item) => (
                               <div
                                 key={item.path}
                                 className="flex items-center gap-4 px-6 py-3 rounded-2xl bg-white/5 border border-white/5 opacity-40"
                               >
                                 <Lock size={20} className="text-white/30 shrink-0" />
                                 <span className="font-black text-base uppercase tracking-wide text-white/30 line-through flex-1">{item.label}</span>
                                 {item.unlockHint && (
                                   <span className="text-[9px] font-bold text-amber-400/60 shrink-0 text-right">{item.unlockHint}</span>
                                 )}
                               </div>
                             ))}
                           </motion.div>
                         )}
                       </AnimatePresence>
                     </>
                   )}

                   {/* Legal Link Mobile */}
                   <div className="mt-2">
                     <Link
                       to="/legal"
                       onClick={() => setIsMobileMenuOpen(false)}
                       className="flex items-center gap-4 px-6 py-4 rounded-2xl transition-all bg-white/5 text-white/50 border border-white/5"
                     >
                       <Scale size={24} />
                       <span className="font-black text-lg uppercase tracking-wide">{lang === 'el' ? 'Όροι & Ασφάλεια' : 'Terms & Safety'}</span>
                     </Link>
                   </div>
                </div>
                {/* Mobile Language Toggle */}
                <div className="p-6 border-t border-white/10">
                   <button 
                      onClick={() => setLang(lang === 'el' ? 'en' : 'el')}
                      className="w-full flex items-center justify-center gap-3 bg-white/5 border border-white/10 p-4 rounded-2xl text-white font-black uppercase tracking-widest text-xs"
                   >
                      <Globe size={18} />
                      {lang === 'el' ? 'ΑΛΛΑΓΗ ΓΛΩΣΣΑΣ' : 'CHANGE LANGUAGE'}
                   </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* CHAT INTERFACE */}
          <AnimatePresence>
            {isChatOpen && (
              <React.Suspense fallback={null}>
                <WiseBotChat lang={lang} onClose={() => setIsChatOpen(false)} />
              </React.Suspense>
            )}
          </AnimatePresence>

        </div>
      )}

      {/* DESKTOP: Floating WiseBot Chat Button — ALWAYS visible */}
      <div className="hidden xl:block" style={{ position: 'fixed', bottom: 0, right: 0, zIndex: 99999 }}>
        {/* Chat FAB */}
        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          aria-label={isChatOpen ? 'Close chat' : 'Open WiseBot chat'}
          style={{ position: 'fixed', bottom: '32px', right: '32px', zIndex: 99999 }}
          className={`w-16 h-16 rounded-full flex items-center justify-center text-white shadow-[0_0_40px_rgba(147,51,234,0.6)] border-2 border-white/30 transition-all hover:scale-110 active:scale-95 ${
            isChatOpen
              ? 'bg-red-500'
              : 'bg-gradient-to-br from-purple-600 to-blue-600 hover:shadow-[0_0_60px_rgba(147,51,234,0.8)]'
          }`}
        >
          {isChatOpen ? <X size={26} /> : (
            <div className="relative">
              <MessageCircle size={28} />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-purple-600 animate-pulse" />
            </div>
          )}
        </button>

        {/* Chat label */}
        {!isChatOpen && (
          <div
            style={{ position: 'fixed', bottom: '42px', right: '108px', zIndex: 99998 }}
            className="bg-purple-600/90 backdrop-blur-sm px-4 py-2 rounded-xl text-white text-xs font-black uppercase tracking-widest shadow-lg border border-white/20 whitespace-nowrap pointer-events-none"
          >
            💬 {lang === 'el' ? 'Μίλα με τη WiseBot!' : 'Chat with WiseBot!'}
          </div>
        )}

        {/* Desktop Chat Interface */}
        <AnimatePresence>
          {isChatOpen && (
            <React.Suspense fallback={null}>
              <WiseBotChat lang={lang} onClose={() => setIsChatOpen(false)} />
            </React.Suspense>
          )}
        </AnimatePresence>
      </div>

      {/* MAIN APP CONTAINER */}
      <div className={`flex h-screen overflow-hidden ${isImmersive ? '' : 'app-bg flex-row'}`}>

        {/* PREMIUM BACKGROUND */}
        {!isImmersive && (
          <div className="fixed inset-0 z-0 pointer-events-none premium-bg" />
        )}

        {/* DESKTOP SIDEBAR */}
        {!isImmersive && (
          <aside className="hidden xl:flex w-80 bg-[#0B0F1A]/80 backdrop-blur-xl border-r border-white/[0.06] flex-col z-20 m-4 rounded-[3rem] shadow-2xl relative overflow-hidden">
            <div className="p-10 flex items-center gap-4 relative z-10">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white shadow-[0_0_30px_rgba(59,130,246,0.6)] rotate-3">
                <Rocket size={32} />
              </div>
              <span className="text-2xl font-black text-white tracking-tighter uppercase italic leading-none text-shadow">
                WiseBot<br/><span className="text-blue-400 text-sm tracking-widest">Academy</span>
              </span>
            </div>
            
            <nav className="flex-1 px-5 space-y-1 mt-4 overflow-y-auto custom-scrollbar relative z-10">
              {/* ── PINNED ITEMS ── */}
              {pinnedItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center gap-5 px-8 py-3.5 rounded-[2rem] transition-all duration-300 ${
                      isActive
                        ? `${activeGradient} text-white scale-105 border border-white/40`
                        : "text-white/60 hover:bg-white/10 hover:text-white hover:scale-105"
                    }`}
                  >
                    <div className={isActive ? "scale-110 drop-shadow-md" : ""}>{item.icon}</div>
                    <span className="font-black text-base tracking-wide">{item.label}</span>
                  </Link>
                );
              })}

              {/* ── SEPARATOR ── */}
              <div className="my-2 mx-2 h-px bg-white/[0.06]" />

              {/* ── UNLOCKED ITEMS ── */}
              {unlockedItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center gap-5 px-8 py-3.5 rounded-[2rem] transition-all duration-300 ${
                      isActive
                        ? `${activeGradient} text-white scale-105 border border-white/40`
                        : "text-white/60 hover:bg-white/10 hover:text-white hover:scale-105"
                    }`}
                  >
                    <div className={isActive ? "scale-110 drop-shadow-md" : ""}>{item.icon}</div>
                    <span className="font-black text-base tracking-wide">{item.label}</span>
                  </Link>
                );
              })}

              {/* ── LOCKED DROPDOWN ── */}
              {lockedItems.length > 0 && (
                <>
                  <div className="my-2 mx-2 h-px bg-white/[0.06]" />
                  <button
                    onClick={() => setLockedExpanded(prev => !prev)}
                    className="w-full flex items-center gap-4 px-8 py-3 rounded-[2rem] text-white/30 hover:text-white/50 hover:bg-white/5 transition-all"
                  >
                    <Lock size={18} />
                    <span className="font-black text-sm uppercase tracking-wider flex-1 text-left">
                      {lang === 'el' ? `Κλειδωμένα (${lockedItems.length})` : `Locked (${lockedItems.length})`}
                    </span>
                    <ChevronRight size={16} className={`transition-transform duration-200 ${lockedExpanded ? 'rotate-90' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {lockedExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden space-y-1 pl-2"
                      >
                        {lockedItems.map((item) => (
                          <div key={item.path} className="flex items-center gap-4 px-7 py-3 rounded-[2rem] bg-black/20 opacity-50">
                            <Lock size={18} className="text-white/20 shrink-0" />
                            <span className="font-black text-sm text-white/25 line-through flex-1 truncate">{item.label}</span>
                            {item.unlockHint && (
                              <span className="text-[9px] font-bold text-amber-500/50 shrink-0 text-right leading-tight max-w-[80px]">
                                {item.unlockHint}
                              </span>
                            )}
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              )}
            </nav>

            <div className="p-6 space-y-4 relative z-10">
               {/* 🌍 LANGUAGE TOGGLE (Restored & Blue Themed) */}
               <button 
                  onClick={() => setLang(lang === 'el' ? 'en' : 'el')}
                  className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-blue-900/40 to-slate-900/40 border border-blue-500/20 hover:border-blue-400/50 p-3 rounded-2xl text-blue-200 hover:text-white font-black transition-all uppercase tracking-widest text-[10px] shadow-lg backdrop-blur-md group"
               >
                  <Globe size={16} className="text-blue-400 group-hover:rotate-180 transition-transform duration-500" />
                  {lang === 'el' ? 'ΓΛΩΣΣΑ: ΕΛΛΗΝΙΚΑ' : 'LANGUAGE: ENGLISH'}
               </button>

               {/* Legal Button */}
               <Link 
                  to="/legal"
                  className="w-full flex items-center justify-center gap-2 p-2 text-[9px] font-bold uppercase tracking-widest text-white/30 hover:text-white transition-colors"
               >
                  <Scale size={12} />
                  {lang === 'el' ? 'Όροι & Ασφάλεια' : 'Terms & Safety'}
               </Link>

               {/* 🌟 HOLOGRAPHIC RANK CARD (SIDEBAR - BLUE THEME) */}
               <div 
                  onClick={() => setShowLevelModal(true)}
                  className="group relative cursor-pointer"
               >
                  {/* Glowing Blur Behind - BLUE/CYAN */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${currentRank.gradient} blur-xl opacity-20 group-hover:opacity-50 transition-opacity duration-500`}></div>
                  
                  <div className="relative bg-gradient-to-b from-blue-950/80 to-slate-950/90 border border-blue-500/30 rounded-[2rem] p-5 overflow-hidden transition-all duration-300 group-hover:border-cyan-400/50 group-hover:scale-[1.02] shadow-2xl backdrop-blur-xl">
                      {/* Top Shine */}
                      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-50"></div>
                      
                      <div className="flex justify-between items-center mb-3">
                          <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${currentRank.gradient} flex items-center justify-center text-white shadow-lg`}>
                             <currentRank.icon size={18} />
                          </div>
                          <div className="text-right">
                             <p className="text-[9px] font-black text-cyan-200/60 uppercase tracking-widest">
                                {lang === 'el' ? 'ΕΠΙΠΕΔΟ' : 'RANK'}
                             </p>
                             <div className="flex gap-1 justify-end mt-1">
                                {[...Array(totalBadges)].map((_, i) => (
                                   <div key={i} className={`w-1.5 h-1.5 rounded-full ${i < unlockedBadgeCount ? `bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]` : 'bg-white/10'}`}></div>
                                ))}
                             </div>
                          </div>
                      </div>
                      
                      <div>
                         <h4 className={`text-xl font-[1000] text-transparent bg-clip-text bg-gradient-to-r ${currentRank.gradient} italic tracking-tighter leading-none`}>
                            {currentRank.title}
                         </h4>
                         <p className="text-[10px] font-bold text-white/50 uppercase tracking-wider mt-1">{currentRank.sub}</p>
                      </div>

                      {/* Animated Progress Line at Bottom */}
                      <div className="absolute bottom-0 left-0 h-1 bg-white/5 w-full">
                         <div className={`h-full bg-gradient-to-r ${currentRank.gradient}`} style={{ width: `${progressPercent}%` }}></div>
                      </div>
                  </div>
               </div>
            </div>
          </aside>
        )}

        {/* 🎬 CINEMATIC MODAL (COMMAND CENTER - BLUE/SITE THEME) */}
        <AnimatePresence>
          {showLevelModal && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[1200] flex items-center justify-center p-4 xl:pl-80 bg-[#0B0F1A]/90 backdrop-blur-xl"
              onClick={() => setShowLevelModal(false)}
            >
              {/* Blue Ambient Glow Background */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                 <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[150px]"></div>
                 <div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[150px]"></div>
                 <div className="absolute inset-0 bg-[url('/images/stardust.webp')] opacity-20"></div>
              </div>
              
              <motion.div 
                initial={{ scale: 0.9, y: 50, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.9, y: 50, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-6xl h-[85vh] bg-[#0B0F1A]/80 border border-blue-500/20 rounded-[3rem] overflow-hidden shadow-[0_0_80px_rgba(30,58,138,0.4)] flex relative backdrop-blur-2xl"
              >
                <button
                  onClick={() => setShowLevelModal(false)}
                  aria-label={lang === 'el' ? 'Κλείσιμο' : 'Close'}
                  className="absolute top-8 right-8 z-[1010] p-4 bg-blue-900/20 hover:bg-blue-800/40 rounded-full text-white transition-all border border-blue-500/20 backdrop-blur-md"
                >
                  <X size={24} />
                </button>

                {/* LEFT SIDE: THE GUARDIANS (Visual Anchor) */}
                <div className="hidden lg:block w-4/12 relative h-full overflow-hidden border-r border-white/5">
                  <img 
                    src={USER_GROUP_PHOTO} 
                    alt="Wise Team"
                    className="w-full h-full object-cover opacity-80 mix-blend-overlay hover:mix-blend-normal transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                  <div className="absolute bottom-12 left-12 right-12">
                    <div className="flex items-center gap-3 mb-4">
                      <Sparkles className="text-cyan-400 animate-pulse" />
                      <span className="text-xs font-black text-cyan-400 uppercase tracking-[0.4em]">
                        {lang === 'el' ? 'ΚΛΗΡΟΝΟΜΙΑ' : 'LEGACY'}
                      </span>
                    </div>
                    <h3 className="text-5xl font-[1000] text-white uppercase italic tracking-tighter leading-none drop-shadow-xl">
                      {lang === 'el' ? 'ΤΟ ΤΑΞΙΔΙ ΣΟΥ' : 'YOUR JOURNEY'}
                    </h3>
                  </div>
                </div>

                {/* RIGHT SIDE: THE DASHBOARD */}
                <div className="flex-1 p-8 md:p-16 overflow-y-auto custom-scrollbar relative">
                  
                  {/* A. RANK HEADER */}
                  <div className="mb-16 text-center lg:text-left">
                    <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-gradient-to-r ${currentRank.gradient} bg-opacity-20 border border-white/20 mb-6 shadow-lg shadow-blue-900/50`}>
                        <currentRank.icon size={18} className="text-white drop-shadow-md" />
                        <span className="text-xs font-black text-white uppercase tracking-[0.3em]">
                            {lang === 'el' ? 'ΤΡΕΧΟΝ ΕΠΙΠΕΔΟ' : 'CURRENT RANK'}
                        </span>
                    </div>
                    <h2 className={`text-6xl md:text-8xl font-[1000] text-transparent bg-clip-text bg-gradient-to-br ${currentRank.gradient} uppercase italic tracking-tighter leading-none ${currentRank.textGlow}`}>
                       {currentRank.title}
                    </h2>
                    <p className="text-blue-200/60 text-sm font-bold uppercase tracking-widest mt-4 flex items-center justify-center lg:justify-start gap-2">
                       {lang === 'el' ? 'Επόμενος Στόχος:' : 'Next Target:'} <span className="text-white">{nextRank.title}</span> <ChevronRight size={14} />
                    </p>
                  </div>

                  {/* B. ENERGY CELLS (Segmented Progress) */}
                  <div className="mb-16">
                     <div className="flex justify-between text-xs font-black text-blue-300/40 uppercase tracking-widest mb-4">
                        <span>Wisekid</span>
                        <span>Legend</span>
                     </div>
                     <div className="flex gap-2 h-4 w-full">
                        {[...Array(totalBadges)].map((_, i) => (
                           <div 
                              key={i} 
                              className={`flex-1 rounded-full relative overflow-hidden transition-all duration-1000 ${i < unlockedBadgeCount ? `bg-gradient-to-r ${currentRank.gradient} shadow-[0_0_15px_currentColor]` : 'bg-slate-800/50 border border-white/5'}`}
                           >
                              {i < unlockedBadgeCount && <div className="absolute inset-0 bg-white/30 animate-pulse"></div>}
                           </div>
                        ))}
                     </div>
                  </div>

                  {/* C. BADGE VAULT */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     
                     {/* C1. BADGES */}
                     <div className="bg-slate-800/40 border border-white/10 rounded-[2.5rem] p-8 relative overflow-hidden group hover:border-blue-500/30 transition-all">
                        <div className="absolute top-0 right-0 p-32 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
                        <h4 className="text-white font-black text-xl uppercase italic tracking-tighter mb-8 flex items-center gap-3 relative z-10">
                           <Medal className="text-blue-400" /> {lang === 'el' ? 'ΣΥΛΛΟΓΗ' : 'COLLECTION'}
                        </h4>
                        
                        <div className="flex flex-wrap gap-4 relative z-10">
                           {badgeList.map((badge, idx) => {
                              const isUnlocked = badges[badge.key as keyof typeof badges];
                              return (
                                 <div key={idx} className="flex flex-col items-center gap-2 group/badge">
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border-2 transition-all duration-500 relative ${isUnlocked ? 'bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border-cyan-400/50 shadow-[0_0_20px_rgba(34,211,238,0.2)]' : 'bg-[#0B0F1A] border-white/5 grayscale opacity-40'}`}>
                                       <badge.icon size={24} className={isUnlocked ? 'text-cyan-200 drop-shadow-md' : 'text-white/20'} />
                                       {isUnlocked && <div className="absolute inset-0 bg-white/10 animate-pulse rounded-2xl"></div>}
                                    </div>
                                    <span className={`text-[8px] font-black uppercase tracking-widest ${isUnlocked ? 'text-cyan-100' : 'text-white/20'}`}>
                                        {badge.title[lang]}
                                    </span>
                                 </div>
                              );
                           })}
                        </div>
                     </div>

                     {/* C2. CREDITS & REWARDS */}
                     <div className="space-y-6">
                        <div className="bg-gradient-to-br from-indigo-900/40 to-slate-900/80 border border-indigo-500/30 rounded-[2.5rem] p-8 flex items-center justify-between relative overflow-hidden">
                           <div className="absolute inset-0 bg-[url('/images/carbon-fibre.webp')] opacity-10"></div>
                           <div className="relative z-10">
                              <p className="text-indigo-300 font-black text-xs uppercase tracking-widest mb-1">
                                {lang === 'el' ? 'ΔΙΑΘΕΣΙΜΑ CREDITS' : 'AVAILABLE CREDITS'}
                              </p>
                              <div className="text-5xl font-[1000] text-white italic tracking-tighter flex items-center gap-2">
                                 {credits} <Zap size={28} className="text-amber-400 fill-current drop-shadow-lg" />
                              </div>
                           </div>
                           <div className="w-16 h-16 bg-indigo-500/20 rounded-full flex items-center justify-center border border-indigo-500/30 shadow-[0_0_30px_rgba(99,102,241,0.2)]">
                              <Gift size={32} className="text-indigo-300" />
                           </div>
                        </div>

                        <button className="w-full py-6 rounded-[2rem] bg-white text-blue-950 font-[1000] text-lg uppercase italic tracking-widest hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-blue-900/20 flex items-center justify-center gap-3 border-2 border-transparent hover:border-blue-200">
                           {unlockedBadgeCount >= 3 ? (
                              <><Box size={24} /> {lang === 'el' ? 'ΛΗΨΗ ΔΩΡΕΑΝ 3D PRINT' : 'CLAIM FREE 3D PRINT'}</>
                           ) : (
                              <><Lock size={20} className="opacity-50" /> {lang === 'el' ? 'ΞΕΚΛΕΙΔΩΣΕ 3 BADGES' : 'UNLOCK 3 BADGES'}</>
                           )}
                        </button>
                     </div>

                  </div>

                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <main className="flex-1 flex flex-col overflow-hidden relative">
          {!isImmersive && (
            <header className="h-20 xl:h-28 flex items-center justify-between px-6 md:px-10 lg:px-14 z-10 bg-[#0B0F1A]/60 backdrop-blur-xl border border-white/[0.06] m-2 md:m-4 xl:m-4 mb-0 rounded-2xl xl:rounded-[3rem] shadow-xl">
              <div className="flex items-center gap-3 md:gap-5 flex-1 min-w-0">
                {isOnDashboard ? (
                  <div className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl md:rounded-2xl flex items-center justify-center text-white shadow-lg rotate-3 shrink-0">
                    <Rocket size={20} className="md:w-6 md:h-6 lg:w-8 lg:h-8" />
                  </div>
                ) : (
                  <button onClick={() => navigate('/dashboard')} aria-label={lang === 'el' ? 'Πίσω στο Dashboard' : 'Back to Dashboard'} className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white/10 hover:bg-white/20 rounded-xl md:rounded-2xl flex items-center justify-center text-white shadow-lg transition-all hover:scale-105 active:scale-95 cursor-pointer border border-white/10 shrink-0">
                    <ArrowLeft size={20} className="md:w-6 md:h-6 lg:w-8 lg:h-8" />
                  </button>
                )}
                <h1 className="text-sm sm:text-xl md:text-3xl lg:text-4xl font-black text-white tracking-tighter uppercase italic leading-none truncate pr-1">
                  {navItems.find(n => n.path === location.pathname)?.label || "WiseBot"}
                </h1>
              </div>

              <div className="flex items-center gap-4 md:gap-6 lg:gap-8 shrink-0">
                {/* MUTE / UNMUTE BUTTON */}
                <button
                  onClick={toggleMusic}
                  className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-all hover:scale-110 active:scale-95 ${
                    isMuted
                      ? 'bg-white/5 border-white/10 text-white/40 hover:text-white hover:border-white/30'
                      : 'bg-purple-500/20 border-purple-500/40 text-purple-300 hover:bg-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.3)]'
                  }`}
                  aria-label={isMuted ? (lang === 'el' ? 'Ενεργοποίηση μουσικής' : 'Unmute music') : (lang === 'el' ? 'Σίγαση μουσικής' : 'Mute music')}
                  title={isMuted ? (lang === 'el' ? 'Ενεργοποίηση μουσικής' : 'Unmute music') : (lang === 'el' ? 'Σίγαση μουσικής' : 'Mute music')}
                >
                  {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                </button>

                <div className="hidden md:flex flex-col items-end">
                   <span className="text-[10px] md:text-[11px] font-black text-blue-400 uppercase tracking-[0.3em] mb-1">{lang === 'el' ? 'Πιστοποιημένος Δημιουργός' : 'Certified Creator'}</span>
                   <span className="text-lg md:text-2xl font-black text-white leading-none">Wise Kids</span>
                </div>
                <Link to="/account" className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 glass-card rounded-xl lg:rounded-[1.5rem] flex items-center justify-center border-2 lg:border-4 border-white/40 p-0.5 shadow-xl hover:scale-110 transition-transform cursor-pointer overflow-hidden bg-white/10">
                  <img src={USER_GROUP_PHOTO} className="w-full h-full object-cover" alt="Profile" />
                </Link>
              </div>
            </header>
          )}
          
          <div className={`flex-1 overflow-y-auto custom-scrollbar ${isImmersive ? '' : isQuizRoute ? 'pt-5 px-4 pb-4 md:pt-7 md:px-6 md:pb-4' : 'p-4 md:p-8 lg:p-12 pb-32 lg:pb-12'}`}>
            {children}
          </div>
        </main>
      </div>

      {/* BACKGROUND MUSIC */}
      <audio ref={audioRef} src="/songs/wisebots-song-2.mp3" preload="auto" />

      {/* PWA INSTALL PROMPT */}
      <React.Suspense fallback={null}>
        <PWAInstallPrompt lang={lang} />
      </React.Suspense>

      {/* FLOATING MUTE BUTTON FOR IMMERSIVE PAGES (Landing/Portal) */}
      {isImmersive && (
        <button
          onClick={toggleMusic}
          style={{ position: 'fixed', bottom: '24px', left: '24px', zIndex: 9999 }}
          className={`w-12 h-12 rounded-full flex items-center justify-center border-2 backdrop-blur-xl shadow-xl transition-all hover:scale-110 active:scale-95 ${
            isMuted
              ? 'bg-black/40 border-white/20 text-white/50 hover:text-white hover:border-white/40'
              : 'bg-purple-500/30 border-purple-500/50 text-purple-200 shadow-[0_0_20px_rgba(168,85,247,0.4)]'
          }`}
          aria-label={isMuted ? (lang === 'el' ? 'Ενεργοποίηση μουσικής' : 'Unmute music') : (lang === 'el' ? 'Σίγαση μουσικής' : 'Mute music')}
          title={isMuted ? (lang === 'el' ? 'Ενεργοποίηση μουσικής' : 'Unmute music') : (lang === 'el' ? 'Σίγαση μουσικής' : 'Mute music')}
        >
          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>
      )}
    </>
  );
};

export default Layout;
