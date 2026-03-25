
import React, { useState, useCallback } from 'react';
import { motion as m, AnimatePresence } from 'framer-motion';
import {
  Rocket,
  Heart,
  Drama,
  Flame,
  Vote,
  ScrollText,
  ChevronRight,
  X,
  Scale,
  HeartPulse,
  Lightbulb,
  History,
  Play,
  Film,
  Sparkles,
  Shield,
  Landmark,
  Wand2
} from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';

const motion = m as any;

const HERO_IMAGES = {
  wisebot: "/images/wisebot_sm.jpg",
  pencilo: "/images/pencilo_sm.jpg",
  link: "/images/link_sm.jpg",
  crocus: "/images/crocus_sm.jpg",
  sparken: "/images/sparken_sm.jpg"
};

const LEGACY_ITEMS = [
  { icon: <Heart size={14} />, title: { el: 'ΙΑΤΡΙΚΗ', en: 'MEDICINE' } },
  { icon: <Drama size={14} />, title: { el: 'ΘΕΑΤΡΟ', en: 'THEATER' } },
  { icon: <Flame size={14} />, title: { el: 'ΟΛΥΜΠΙΑΚΟΙ', en: 'OLYMPICS' } },
  { icon: <Vote size={14} />, title: { el: 'ΔΗΜΟΚΡΑΤΙΑ', en: 'DEMOCRACY' } },
  { icon: <ScrollText size={14} />, title: { el: 'ΕΠΙΣΤΗΜΗ', en: 'SCIENCE' } },
];

const HISTORY_ITEMS = [
  { 
    id: 'democracy', 
    label: { el: 'ΔΗΜΟΚΡΑΤΙΑ', en: 'DEMOCRACY' }, 
    icon: <Scale size={32} className="text-blue-400" />, 
    title: { el: 'Η Γέννηση της Δημοκρατίας', en: 'The Birth of Democracy' }, 
    text: { 
      el: 'Στην αρχαία Αθήνα, οι άνθρωποι αποφάσισαν για πρώτη φορά ότι η δύναμη δεν ανήκει σε έναν βασιλιά, αλλά στους πολίτες. Στην Πνύκα μαζεύονταν όλοι και ψήφιζαν με μικρά βότσαλα!', 
      en: 'In Ancient Athens, people decided for the first time that power does not belong to a king, but to the citizens. Everyone gathered at Pnyx and voted using small pebbles!' 
    }
  },
  { 
    id: 'theater', 
    label: { el: 'ΘΕΑΤΡΟ', en: 'THEATER' }, 
    icon: <Drama size={32} className="text-purple-400" />, 
    title: { el: 'Η Μαγεία της Σκηνής', en: 'The Magic of the Stage' }, 
    text: { 
      el: 'Όλα ξεκίνησαν προς τιμήν του θεού Διόνυσου. Οι ηθοποιοί φορούσαν μάσκες και έπαιζαν τραγωδίες και κωμωδίες, διδάσκοντας τους ανθρώπους μέσα από ιστορίες.', 
      en: 'It all began in honor of the god Dionysus. Actors wore masks and performed tragedies and comedies, teaching people through stories.' 
    }
  },
  { 
    id: 'medicine', 
    label: { el: 'ΙΑΤΡΙΚΗ', en: 'MEDICINE' }, 
    icon: <HeartPulse size={32} className="text-rose-400" />, 
    title: { el: 'Ο Όρκος του Ιπποκράτη', en: 'The Hippocratic Oath' }, 
    text: { 
      el: 'Στην Κω, ο Ιπποκράτης άλλαξε τον κόσμο. Έδειξε ότι οι αρρώστιες δεν είναι κατάρα των θεών, αλλά κάτι που μπορούμε να θεραπεύσουμε με τη γνώση και τη φύση.', 
      en: 'On the island of Kos, Hippocrates changed the world. He showed that diseases are not a curse from the gods, but something we can heal through knowledge and nature.' 
    }
  },
  { 
    id: 'olympics', 
    label: { el: 'ΟΛΥΜΠΙΑΚΟΙ', en: 'OLYMPICS' }, 
    icon: <Flame size={32} className="text-orange-400" />, 
    title: { el: 'Εκεχειρία και Αγώνας', en: 'Truce and Competition' }, 
    text: { 
      el: 'Στην Ολυμπία, κάθε 4 χρόνια, σταματούσαν όλοι οι πόλεμοι. Οι αθλητές έτρεχαν για ένα στεφάνι ελιάς, αποδεικνύοντας ότι η ειρήνη είναι η μεγαλύτερη νίκη.', 
      en: 'In Olympia, every 4 years, all wars ceased. Athletes competed for an olive wreath, proving that peace is the greatest victory.' 
    }
  },
  { 
    id: 'science', 
    label: { el: 'ΕΠΙΣΤΗΜΗ', en: 'SCIENCE' }, 
    icon: <Lightbulb size={32} className="text-amber-400" />, 
    title: { el: 'Η Δύναμη της Λογικής', en: 'The Power of Logic' }, 
    text: { 
      el: 'Από τον Αριστοτέλη μέχρι τον Αρχιμήδη, οι Έλληνες δεν φοβήθηκαν να ρωτήσουν "Γιατί;". Έτσι γεννήθηκε η επιστήμη, η λογική και η αγάπη για τη μάθηση.', 
      en: 'From Aristotle to Archimedes, the Greeks were not afraid to ask "Why?". Thus science, logic, and the love for learning were born.' 
    }
  },
];

const FEATURED_VIDEOS = [
  { id: 'v1', title: { el: 'WISEBOT', en: 'WISEBOT' }, thumbnail: '/images/wisebot_sm.jpg', videoUrl: '/video/wisebot%20claude.mp4' },
  { id: 'v2', title: { el: 'SPARKEN', en: 'SPARKEN' }, thumbnail: '/images/sparken_sm.jpg', videoUrl: '/video/sparken%20claude.mp4' },
  { id: 'v3', title: { el: 'LINK', en: 'LINK' }, thumbnail: '/images/link_sm.jpg', videoUrl: '/video/link%20claude.mp4' },
  { id: 'v4', title: { el: 'ΟΙ ΗΡΩΕΣ ΜΑΖΙ', en: 'HEROES TOGETHER' }, thumbnail: '/images/paidia-kai-wisebot.webp', videoUrl: '/video/wisebot%20claude.mp4' },
];

const LandingPage: React.FC<{ lang: 'el' | 'en' }> = ({ lang }) => {
  const [selectedHistory, setSelectedHistory] = useState<typeof HISTORY_ITEMS[0] | null>(null);
  const [playingVideo, setPlayingVideo] = useState<typeof FEATURED_VIDEOS[0] | null>(null);

  const floatTransition = (delay: number) => ({
    y: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut" as const,
      repeatType: "reverse" as const,
      delay: delay * 0.3
    },
    opacity: { duration: 0.4, delay: delay * 0.1 }
  });

  return (
    <div className="min-h-screen w-full bg-[#0B0F1A] text-white overflow-x-clip relative flex flex-col font-['Nunito'] select-none">
      
      {/* 🌌 ATMOSPHERIC BACKGROUND - OPTIMIZED FOR MOBILE */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 transform-gpu">
        <div className="absolute top-[-10%] right-[-10%] w-[900px] h-[900px] bg-blue-900/10 rounded-full blur-[60px] md:blur-[140px] transform-gpu will-change-transform" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[900px] h-[900px] bg-indigo-900/10 rounded-full blur-[60px] md:blur-[140px] transform-gpu will-change-transform" />
        <div className="absolute inset-0 bg-[url('/images/stardust.webp')] opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
      </div>

      {/* 🏛️ 1. TOP ROOTS BAR (CLICKABLE) */}
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-30 w-full pt-8 pb-4 flex justify-center items-center px-4"
      >
        <div className="text-[8px] md:text-xs font-black text-amber-500/90 uppercase tracking-[0.15em] md:tracking-[0.3em] italic drop-shadow-[0_0_15px_rgba(245,158,11,0.3)] bg-black/40 px-3 md:px-8 py-3 rounded-full border border-amber-500/20 backdrop-blur-xl flex flex-wrap justify-center items-center gap-x-2 md:gap-x-4 gap-y-1 md:gap-y-2 shadow-2xl max-w-full">
          <span className="text-white/40 pointer-events-none hidden md:inline">
            {lang === 'el' ? "ΟΛΑ ΞΕΚΙΝΗΣΑΝ ΕΔΩ:" : "EVERYTHING STARTED HERE:"}
          </span>
          {HISTORY_ITEMS.map((item, idx) => (
            <React.Fragment key={item.id}>
              <button 
                onClick={() => setSelectedHistory(item)}
                className="hover:text-cyan-400 hover:scale-105 transition-all cursor-pointer outline-none focus:text-cyan-400 uppercase font-black tracking-widest"
              >
                {item.label[lang]}
              </button>
              {idx < HISTORY_ITEMS.length - 1 && <span className="text-white/10 hidden md:inline">•</span>}
            </React.Fragment>
          ))}
        </div>
      </motion.div>

      {/* ⚡ 2. HERO CONTENT SECTION */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-start lg:justify-center px-6 md:px-12 lg:px-24 mb-2 md:mb-6">

        {/* LEFT: TEXT & CTA */}
        <div className="flex-1 flex flex-col justify-center space-y-6 md:space-y-12 z-40 max-w-4xl pt-6 pb-4 md:py-12 lg:py-0">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4">
              <span className="w-12 h-[2px] bg-gradient-to-r from-blue-500 to-transparent"></span>
              <p className="text-xs md:text-lg font-black text-white/60 tracking-[0.15em] md:tracking-[0.3em] uppercase italic">
                {lang === 'el' ? "Η ΙΣΤΟΡΙΑ ΣΥΝΕΧΙΖΕΤΑΙ..." : "HISTORY CONTINUES..."}
              </p>
            </div>
            
            {/* Main Title with improved line-height to prevent cutting off Greek accents */}
            <h1 className="text-[2rem] sm:text-4xl md:text-7xl lg:text-[6rem] font-[1000] tracking-tighter uppercase italic leading-[1.15] md:leading-[1.05] py-1 md:py-2 break-words">
              {lang === 'el' ? (
                <>
                  <span className="text-white drop-shadow-xl">ΤΟ 1</span>
                  <sup className="text-blue-400 text-xl sm:text-3xl md:text-5xl ml-1 align-top drop-shadow-[0_0_20px_rgba(34,211,238,0.5)]">ο</sup>
                  <span className="text-white ml-1 md:ml-2 drop-shadow-xl"> ΕΛΛΗΝΙΚΟ</span>
                </>
              ) : (
                <>
                  <span className="text-white drop-shadow-xl">THE 1</span>
                  <sup className="text-blue-400 text-xl sm:text-3xl md:text-5xl ml-1 align-top drop-shadow-[0_0_20px_rgba(34,211,238,0.5)]">st</sup>
                  <span className="text-white ml-1 md:ml-2 drop-shadow-xl"> GREEK</span>
                </>
              )}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 drop-shadow-[0_0_40px_rgba(59,130,246,0.4)] pb-2 block">
                {lang === 'el' ? "ΕΞΥΠΝΟ ΠΑΙΧΝΙΔΙ." : "SMART AI GAME."}
              </span>
            </h1>

            {/* VALUE PROPOSITION - One killer line for parents */}
            <div className="space-y-4">
              <p className="text-base sm:text-lg md:text-3xl text-white font-[1000] italic leading-snug max-w-2xl tracking-tight">
                {lang === 'el'
                  ? "Το παιδί σου μαθαίνει ζωή μέσα από παιχνίδι."
                  : "Your child learns life through play."}
              </p>
              <p className="text-xs sm:text-sm md:text-xl text-gray-400 font-bold italic leading-relaxed max-w-2xl">
                {lang === 'el'
                  ? "Δημιούργησε 3D Ήρωες με AI. Διάβασε ιστορίες. Παίξε Quiz. Κάνε μουσική και βίντεο."
                  : "Create 3D Heroes with AI. Read stories. Play quizzes. Make music and videos."}
              </p>
            </div>

            {/* DIFFERENTIATOR PILLS */}
            <div className="flex flex-wrap gap-2 md:gap-3 max-w-2xl">
              {[
                { icon: <Sparkles size={14} />, label: lang === 'el' ? 'AI-Powered' : 'AI-Powered', color: 'text-blue-400 border-blue-500/30 bg-blue-500/10' },
                { icon: <Shield size={14} />, label: lang === 'el' ? 'Ασφαλές' : 'Safe for Kids', color: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10' },
                { icon: <Landmark size={14} />, label: lang === 'el' ? 'Ελληνική Κληρονομιά' : 'Greek Heritage', color: 'text-amber-400 border-amber-500/30 bg-amber-500/10' },
                { icon: <Wand2 size={14} />, label: lang === 'el' ? 'Φτιάξε 3D Ήρωες' : 'Create 3D Heroes', color: 'text-fuchsia-400 border-fuchsia-500/30 bg-fuchsia-500/10' },
              ].map((pill, i) => (
                <span key={i} className={`inline-flex items-center gap-1.5 px-3 py-1.5 md:px-4 md:py-2 rounded-full border text-[10px] md:text-xs font-black uppercase tracking-wider backdrop-blur-md ${pill.color}`}>
                  {pill.icon} {pill.label}
                </span>
              ))}
            </div>

            {/* PARENT TRUST LINE */}
            <p className="text-[10px] md:text-xs text-white/30 font-bold uppercase tracking-[0.2em] italic max-w-xl">
              {lang === 'el'
                ? "Χωρίς chat. Χωρίς αγνώστους. Μόνο μάθηση μεταμφιεσμένη σε παιχνίδι."
                : "No chat. No strangers. Just learning disguised as fun."}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <RouterLink
              to="/portal"
              className="group relative inline-flex items-center gap-4 md:gap-6 px-8 py-4 md:px-14 md:py-6 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 text-white text-base md:text-2xl font-[1000] uppercase italic tracking-wider shadow-[0_15px_50px_rgba(79,70,229,0.4)] hover:scale-105 active:scale-95 transition-all cursor-pointer border-2 border-white/10 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <Rocket size={32} className="relative z-10 group-hover:-rotate-12 transition-transform" />
              <span className="relative z-10">{lang === 'el' ? "ΞΕΚΙΝΑ ΤΟ ΤΑΞΙΔΙ" : "START THE JOURNEY"}</span>
              <ChevronRight size={32} className="relative z-10 group-hover:translate-x-2 transition-transform" />
            </RouterLink>
          </motion.div>
        </div>

        {/* RIGHT: HERO IMAGE CLUSTER (OPTIMIZED) */}
        <div className="flex-1 relative w-full h-[300px] md:h-[650px] pointer-events-none mt-4 md:mt-12 lg:mt-0 flex items-center justify-center lg:justify-end">
          <div className="relative w-full h-full max-w-xl">

            {/* CENTER HERO: WISEBOT - EAGER LOAD */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, x: "-50%", y: "-50%" }}
              animate={{ opacity: 1, scale: 1, x: "-50%", y: ["-50%", "-52%", "-50%"] }}
              transition={floatTransition(0)}
              style={{ willChange: 'transform' }}
              className="absolute top-1/2 left-1/2 z-30 w-36 h-36 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-[2rem] md:rounded-[3rem] overflow-hidden border-[4px] md:border-[6px] border-blue-400/30 shadow-[0_0_100px_rgba(59,130,246,0.5)] bg-slate-900 drop-shadow-2xl"
            >
              <img src={HERO_IMAGES.wisebot} className="w-full h-full object-cover" alt="WiseBot Academy - AI Εκπαιδευτικό Παιχνίδι" loading="eager" fetchPriority="high" width={320} height={320} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </motion.div>

            {/* TOP LEFT: PENCILO - LAZY LOAD */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
              transition={floatTransition(0.3)}
              style={{ willChange: 'transform' }}
              className="absolute top-[5%] left-[0%] md:top-[10%] md:left-[-10%] z-20 w-20 h-20 md:w-44 md:h-44 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border-[3px] md:border-4 border-yellow-400/20 shadow-2xl -rotate-6 bg-slate-900"
            >
              <img src={HERO_IMAGES.pencilo} className="w-full h-full object-cover" alt="Pencilo" loading="lazy" decoding="async" width={176} height={176} />
            </motion.div>

            {/* TOP RIGHT: SPARKEN - LAZY LOAD */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1, y: [0, -12, 0] }}
              transition={floatTransition(0.6)}
              style={{ willChange: 'transform' }}
              className="absolute top-[5%] right-[0%] md:top-[5%] md:right-[-5%] z-20 w-20 h-20 md:w-44 md:h-44 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border-[3px] md:border-4 border-amber-400/20 shadow-2xl rotate-6 bg-slate-900"
            >
              <img src={HERO_IMAGES.sparken} className="w-full h-full object-cover" alt="Sparken" loading="lazy" decoding="async" width={176} height={176} />
            </motion.div>

            {/* BOTTOM LEFT: CROCUS - LAZY LOAD */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
              transition={floatTransition(0.9)}
              style={{ willChange: 'transform' }}
              className="absolute bottom-[10%] left-[0%] md:bottom-[15%] md:left-[-5%] z-20 w-20 h-20 md:w-44 md:h-44 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border-[3px] md:border-4 border-emerald-400/20 shadow-2xl -rotate-12 bg-slate-900"
            >
              <img src={HERO_IMAGES.crocus} className="w-full h-full object-cover" alt="Crocus" loading="lazy" decoding="async" width={176} height={176} />
            </motion.div>

            {/* BOTTOM RIGHT: LINK - LAZY LOAD */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1, y: [0, -15, 0] }}
              transition={floatTransition(1.2)}
              style={{ willChange: 'transform' }}
              className="absolute bottom-[10%] right-[0%] md:bottom-[10%] md:right-[-10%] z-20 w-20 h-20 md:w-44 md:h-44 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border-[3px] md:border-4 border-cyan-400/20 shadow-[0_0_50px_rgba(34,211,238,0.2)] rotate-12 bg-slate-900"
            >
              <img src={HERO_IMAGES.link} className="w-full h-full object-cover" alt="Link" loading="lazy" decoding="async" width={176} height={176} />
            </motion.div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/10 blur-[60px] md:blur-[100px] rounded-full pointer-events-none -z-10 transform-gpu" />
          </div>
        </div>
      </div>

      {/* 🎬 VIDEO SHOWCASE */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="relative z-20 w-full px-6 md:px-12 py-8"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Film size={18} className="text-blue-400" />
            <h2 className="text-sm font-black text-white/60 uppercase tracking-[0.3em] italic">
              {lang === 'el' ? 'ΔΕΣ ΤΟΥΣ ΗΡΩΕΣ ΣΕ ΔΡΑΣΗ' : 'WATCH THE HEROES IN ACTION'}
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {FEATURED_VIDEOS.map((video) => (
              <div
                key={video.id}
                role="button"
                tabIndex={0}
                aria-label={`${lang === 'el' ? 'Παίξε βίντεο' : 'Play video'}: ${video.title[lang]}`}
                onClick={() => setPlayingVideo(video)}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setPlayingVideo(video); } }}
                className="group cursor-pointer rounded-2xl overflow-hidden border border-white/10 bg-black/40 hover:border-blue-500/50 transition-all hover:scale-[1.02]"
              >
                <div className="aspect-video relative">
                  <img src={video.thumbnail} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity" alt={video.title[lang]} loading="lazy" decoding="async" width={320} height={180} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play size={16} fill="white" className="text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-3">
                  <h4 className="text-xs font-black text-white uppercase italic tracking-tight">{video.title[lang]}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* VIDEO PLAYER MODAL */}
      <AnimatePresence>
        {playingVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4"
            onClick={() => setPlayingVideo(null)}
          >
            <div className="w-full max-w-4xl aspect-video bg-black rounded-3xl overflow-hidden relative border border-white/10 shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setPlayingVideo(null)} aria-label={lang === 'el' ? 'Κλείσιμο βίντεο' : 'Close video'} className="absolute top-4 right-4 text-white z-20 bg-black/50 p-3 rounded-full hover:bg-white/20 transition-colors min-w-[48px] min-h-[48px] flex items-center justify-center">
                <X size={24} />
              </button>
              <video ref={(el) => { if (el) { el.muted = false; el.play().catch(() => {}); } }} src={playingVideo.videoUrl} controls playsInline className="w-full h-full object-contain" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 🏛️ 3. SLEEK MINIMAL FOOTER BAR */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="relative z-30 w-full bg-black/40 backdrop-blur-md border-t border-white/5 py-4"
      >
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center items-center gap-6 md:gap-16">
          {LEGACY_ITEMS.map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 group cursor-default opacity-60 hover:opacity-100 transition-opacity">
              <div className="p-1.5 bg-white/5 rounded-lg border border-white/10 text-white/40 group-hover:text-amber-400 group-hover:border-amber-500/30 transition-all duration-500">
                {item.icon}
              </div>
              <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-white/30 group-hover:text-white/80 transition-colors">
                {item.title[lang]}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* SEO FOOTER with internal links */}
      <footer className="relative z-30 w-full bg-black/60 border-t border-white/5 py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
            <div>
              <h3 className="text-[10px] font-black text-white/50 uppercase tracking-widest mb-3">
                {lang === 'el' ? 'ΕΞΕΡΕΥΝΗΣΗ' : 'EXPLORE'}
              </h3>
              <nav className="space-y-2">
                <RouterLink to="/academy" className="block text-xs text-white/30 hover:text-white/60 font-bold transition-colors">
                  {lang === 'el' ? 'Academy' : 'Academy'}
                </RouterLink>
                <RouterLink to="/ebooks" className="block text-xs text-white/30 hover:text-white/60 font-bold transition-colors">
                  {lang === 'el' ? 'E-Books' : 'E-Books'}
                </RouterLink>
                <RouterLink to="/quiz" className="block text-xs text-white/30 hover:text-white/60 font-bold transition-colors">
                  {lang === 'el' ? 'Quiz' : 'Quiz'}
                </RouterLink>
              </nav>
            </div>
            <div>
              <h3 className="text-[10px] font-black text-white/50 uppercase tracking-widest mb-3">
                {lang === 'el' ? 'ΔΗΜΙΟΥΡΓΙΑ' : 'CREATE'}
              </h3>
              <nav className="space-y-2">
                <RouterLink to="/factory" className="block text-xs text-white/30 hover:text-white/60 font-bold transition-colors">
                  {lang === 'el' ? 'Hero Factory' : 'Hero Factory'}
                </RouterLink>
                <RouterLink to="/3d-factory" className="block text-xs text-white/30 hover:text-white/60 font-bold transition-colors">
                  {lang === 'el' ? '3D Factory' : '3D Factory'}
                </RouterLink>
                <RouterLink to="/music" className="block text-xs text-white/30 hover:text-white/60 font-bold transition-colors">
                  {lang === 'el' ? 'Music Studio' : 'Music Studio'}
                </RouterLink>
              </nav>
            </div>
            <div>
              <h3 className="text-[10px] font-black text-white/50 uppercase tracking-widest mb-3">
                {lang === 'el' ? 'ΛΟΓΑΡΙΑΣΜΟΣ' : 'ACCOUNT'}
              </h3>
              <nav className="space-y-2">
                <RouterLink to="/login" className="block text-xs text-white/30 hover:text-white/60 font-bold transition-colors">
                  {lang === 'el' ? 'Σύνδεση / Εγγραφή' : 'Login / Register'}
                </RouterLink>
                <RouterLink to="/store" className="block text-xs text-white/30 hover:text-white/60 font-bold transition-colors">
                  {lang === 'el' ? 'Credits Store' : 'Credits Store'}
                </RouterLink>
                <RouterLink to="/dashboard" className="block text-xs text-white/30 hover:text-white/60 font-bold transition-colors">
                  {lang === 'el' ? 'Dashboard' : 'Dashboard'}
                </RouterLink>
              </nav>
            </div>
            <div>
              <h3 className="text-[10px] font-black text-white/50 uppercase tracking-widest mb-3">
                {lang === 'el' ? 'ΠΛΗΡΟΦΟΡΙΕΣ' : 'INFO'}
              </h3>
              <nav className="space-y-2">
                <RouterLink to="/legal" className="block text-xs text-white/30 hover:text-white/60 font-bold transition-colors">
                  {lang === 'el' ? 'Όροι & Απόρρητο' : 'Terms & Privacy'}
                </RouterLink>
                <RouterLink to="/parent" className="block text-xs text-white/30 hover:text-white/60 font-bold transition-colors">
                  {lang === 'el' ? 'Γονείς' : 'Parents'}
                </RouterLink>
                <a href="https://www.instagram.com/wisebot.gr" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs text-white/30 hover:text-pink-400 font-bold transition-colors">
                  📸 Instagram
                </a>
                <a href="https://www.facebook.com/profile.php?id=100094647660224" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs text-white/30 hover:text-blue-400 font-bold transition-colors">
                  👍 Facebook
                </a>
                <a href="mailto:info@wisebot.gr" className="flex items-center gap-1.5 text-xs text-white/30 hover:text-cyan-400 font-bold transition-colors">
                  📧 info@wisebot.gr
                </a>
              </nav>
            </div>
          </div>
          <div className="border-t border-white/5 pt-4 flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-[9px] text-white/20 font-bold">
              &copy; {new Date().getFullYear()} WiseBot Academy. {lang === 'el' ? 'Με ❤️ από Ελλάδα.' : 'Made with ❤️ in Greece.'}
            </p>
            <div className="flex items-center gap-3">
              <a href="https://www.instagram.com/wisebot.gr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/30 hover:text-pink-400 hover:border-pink-500/30 transition-all hover:scale-110" aria-label="Instagram">
                <span className="text-sm">📸</span>
              </a>
              <a href="https://www.facebook.com/profile.php?id=100094647660224" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/30 hover:text-blue-400 hover:border-blue-500/30 transition-all hover:scale-110" aria-label="Facebook">
                <span className="text-sm">👍</span>
              </a>
            </div>
            <p className="text-[9px] text-white/15 font-bold">
              {lang === 'el' ? 'Ασφαλές AI εκπαιδευτικό παιχνίδι για παιδιά 6-13 ετών' : 'Safe AI educational game for children ages 6-13'}
            </p>
          </div>
        </div>
      </footer>

      {/* 🏺 HISTORY STORY MODAL */}
      <AnimatePresence>
        {selectedHistory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-xl"
            onClick={() => setSelectedHistory(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              className="w-full max-w-2xl bg-[#0B0F1A] p-10 md:p-14 rounded-[3rem] border border-white/10 shadow-[0_0_100px_rgba(59,130,246,0.2)] relative text-center space-y-8 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Background Glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-blue-500/10 blur-[80px] pointer-events-none"></div>

              <button
                onClick={() => setSelectedHistory(null)}
                aria-label={lang === 'el' ? 'Κλείσιμο' : 'Close'}
                className="absolute top-8 right-8 p-3 bg-white/5 hover:bg-white/10 rounded-full text-white/50 hover:text-white transition-all border border-white/5"
              >
                <X size={24} />
              </button>

              <div className="mx-auto w-24 h-24 bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl flex items-center justify-center border border-white/10 shadow-inner relative z-10">
                {selectedHistory.icon}
              </div>

              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-center gap-3 text-cyan-400">
                  <History size={18} />
                  <span className="text-[10px] font-black uppercase tracking-[0.5em] italic">Ancient Heritage</span>
                </div>
                <h3 className="text-3xl md:text-5xl font-[1000] text-white uppercase italic tracking-tighter leading-tight">
                  {selectedHistory.title[lang]}
                </h3>
              </div>

              <p className="text-lg md:text-xl text-slate-300 font-medium leading-relaxed relative z-10">
                {selectedHistory.text[lang]}
              </p>

              <div className="pt-4 relative z-10">
                <button
                  onClick={() => setSelectedHistory(null)}
                  className="bg-white text-black px-12 py-4 rounded-2xl font-[1000] text-lg uppercase italic tracking-widest shadow-xl hover:scale-105 active:scale-95 transition-all"
                >
                  {lang === 'el' ? 'ΕΓΙΝΕ!' : 'GOT IT!'}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default LandingPage;
