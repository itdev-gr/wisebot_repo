
import React, { useState, useMemo, useRef, useCallback, useEffect } from 'react';
import { motion as m, AnimatePresence } from 'framer-motion';
import { BookOpen, Star, Lock, X, PlayCircle, Zap, ArrowRight, Lightbulb, Dumbbell, Cpu, Palette, Globe, CheckCircle, Brain, Book, Volume2, Pause, Square, FastForward, Loader2, Sparkles, Wifi, Shield, Coins } from 'lucide-react';
import { UI_TEXT } from '../constants';
import { useEconomy } from '../context/EconomyContext'; // Hook
import { SafeImage } from './SafeImage';
import { EbookQuiz } from './EbookQuiz';
import { getBestVoice, ensureVoicesLoaded, createWarmUtterance, getVoiceLabel } from '../utils/ttsVoice';
import { generateSpeechChunked, clearTTSCache, isCloudTTSAvailable, loadStaticAudio } from '../services/cloudTTS';

const motion = m as any;

// HD IMAGE LINKS (solo characters)
const LINK_HD = "/images/link.jpg";
const PENCILO_HD = "/images/pencilo.jpg";
const WISEBOT_HD = "/images/wisebot.jpg";
const CROCUS_HD = "/images/crocus.jpg";
const SPARKEN_HD = "/images/sparken.jpg";

// Image rotation: alternates heroes & kids+heroes for visual variety
const STORY_IMAGES = [
  "/images/wisebot.jpg",
  "/images/paidia-kai-link.webp",
  "/images/pencilo.jpg",
  "/images/paidia-kai-crocus.webp",
  "/images/sparken.jpg",
  "/images/paidia-kai-wisebot.webp",
  "/images/link.jpg",
  "/images/paidia-kai-pencilo.webp",
  "/images/crocus.jpg",
  "/images/paidia-kai-sparken.webp",
];
const getStoryImage = (index: number) => STORY_IMAGES[index % STORY_IMAGES.length];

// CATEGORY CONFIGURATION
const CATEGORIES = {
  GREEK_HEROES: {
    id: 'GREEK_HEROES',
    icon: Shield,
    color: "from-blue-500 to-sky-400",
    border: "border-blue-500/50",
    bg: "bg-blue-500/10",
    title: { el: "ΕΛΛΗΝΕΣ ΘΡΥΛΟΙ", en: "GREEK LEGENDS" },
    desc: { el: "Έλληνες που άλλαξαν τον κόσμο με το μυαλό, την καρδιά και το θάρρος τους", en: "Greeks who changed the world with their mind, heart and courage" }
  },
  START_SMALL: {
    id: 'START_SMALL',
    icon: Lightbulb,
    color: "from-amber-400 to-orange-600",
    border: "border-amber-500/50",
    bg: "bg-amber-500/10",
    title: { el: "ΕΠΙΧΕΙΡΗΜΑΤΙΚΟΤΗΤΑ", en: "ENTREPRENEURSHIP" },
    desc: { el: "Άνθρωποι που ξεκίνησαν από το μηδέν και άλλαξαν τον κόσμο", en: "People who started from zero and changed the world" }
  },
  SPORTS: {
    id: 'SPORTS',
    icon: Dumbbell,
    color: "from-red-500 to-rose-600",
    border: "border-red-500/50",
    bg: "bg-red-500/10",
    title: { el: "ΑΘΛΗΤΙΣΜΟΣ & ΘΕΛΗΣΗ", en: "SPORTS & RESILIENCE" },
    desc: { el: "Αθλητές που νίκησαν πρώτα τον εαυτό τους", en: "Athletes who defeated themselves first" }
  },
  TECH: {
    id: 'TECH',
    icon: Cpu,
    color: "from-cyan-400 to-blue-600",
    border: "border-cyan-500/50",
    bg: "bg-cyan-500/10",
    title: { el: "ΤΕΧΝΟΛΟΓΙΑ", en: "TECHNOLOGY" },
    desc: { el: "Εφευρέτες και οραματιστές που έφτιαξαν το μέλλον", en: "Inventors and visionaries who built the future" }
  },
  ARTS: {
    id: 'ARTS',
    icon: Palette,
    color: "from-fuchsia-400 to-purple-600",
    border: "border-fuchsia-500/50",
    bg: "bg-fuchsia-500/10",
    title: { el: "ΤΕΧΝΕΣ & ΕΚΦΡΑΣΗ", en: "ARTS & EXPRESSION" },
    desc: { el: "Καλλιτέχνες που μετέτρεψαν τον πόνο σε αριστούργημα", en: "Artists who turned pain into masterpieces" }
  },
  SCIENCE: {
    id: 'SCIENCE',
    icon: Globe,
    color: "from-emerald-400 to-teal-600",
    border: "border-emerald-500/50",
    bg: "bg-emerald-500/10",
    title: { el: "ΕΠΙΣΤΗΜΗ", en: "SCIENCE" },
    desc: { el: "Επιστήμονες που αποκάλυψαν τα μυστικά του σύμπαντος", en: "Scientists who revealed the secrets of the universe" }
  },
  MONEY_MIND: {
    id: 'MONEY_MIND',
    icon: Coins,
    color: "from-yellow-400 to-amber-600",
    border: "border-yellow-500/50",
    bg: "bg-yellow-500/10",
    title: { el: "BUSINESS MIND", en: "BUSINESS MIND" },
    desc: { el: "Τα μυστικά του χρήματος που δεν μαθαίνεις στο σχολείο — σοφία από τη Βαβυλώνα μέχρι σήμερα", en: "The money secrets school never teaches — wisdom from Babylon to today" }
  },
};

// --- STORIES DATA (extracted to data/academyCourses.ts) ---
import { COURSES } from '../data/academyCourses';
import FirstTimeTip, { useChildName } from './FirstTimeTip';

// Static narration mp3s (/audio/academy), regenerated 2026-07 with Gemini Kore
// for the enriched story texts. Stories without a file fall back to cloud TTS
// automatically (loadStaticAudio HEAD-checks before playing).
const STATIC_AUDIO_READY = true;

// ─── STORY READER WITH CLOUD TTS + BROWSER FALLBACK ────────────
// Uses Gemini TTS API for natural, human-sounding voices.
// Falls back to Web Speech API if cloud TTS is unavailable.

const splitSentences = (text: string): string[] => {
  const raw = text.match(/[^.!?]+[.!?]+[\s]?|[^.!?]+$/g);
  if (!raw) return [text];
  return raw.map(s => s.trim()).filter(s => s.length > 0);
};

interface StoryReaderProps {
  text: string;
  lang: 'el' | 'en';
  storyId?: number; // For loading pre-generated static audio files
}

function StoryReader({ text, lang, storyId }: StoryReaderProps) {
  const sentences = useMemo(() => splitSentences(text), [text]);

  // ─── Shared state ────
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [rate, setRate] = useState(1);
  const [ttsMode, setTtsMode] = useState<'cloud' | 'browser'>(
    (storyId || isCloudTTSAvailable()) ? 'cloud' : 'browser'
  );

  // ─── Cloud TTS refs ────
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const chunkUrlsRef = useRef<string[]>([]);
  const currentChunkRef = useRef(0);

  // ─── Browser TTS refs (fallback) ────
  const [currentIdx, setCurrentIdx] = useState(-1);
  const sentenceRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const currentIdxRef = useRef(-1);
  const isPlayingRef = useRef(false);
  const chromeFixCleanupRef = useRef<(() => void) | null>(null);
  const bestVoiceRef = useRef<SpeechSynthesisVoice | null>(null);
  const [voiceReady, setVoiceReady] = useState(false);
  const [voiceLabel, setVoiceLabel] = useState('');

  // Load browser voice (fallback)
  useEffect(() => {
    ensureVoicesLoaded().then(() => {
      const voice = getBestVoice(lang);
      bestVoiceRef.current = voice;
      if (voice) setVoiceLabel(getVoiceLabel(voice));
      setVoiceReady(true);
    });
  }, [lang]);

  // Cleanup on unmount or text change
  useEffect(() => {
    return () => {
      if (audioRef.current) { audioRef.current.pause(); audioRef.current.src = ''; audioRef.current = null; }
      window.speechSynthesis.cancel();
      chromeFixCleanupRef.current?.();
      setIsPlaying(false);
      setIsPaused(false);
      setCurrentIdx(-1);
      isPlayingRef.current = false;
    };
  }, [text]);

  // Auto-scroll to current sentence (browser mode)
  useEffect(() => {
    if (currentIdx >= 0 && sentenceRefs.current[currentIdx]) {
      sentenceRefs.current[currentIdx]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [currentIdx]);

  // ═══════════════════════════════════════════════════════════════
  // CLOUD TTS FUNCTIONS
  // ═══════════════════════════════════════════════════════════════

  const playCloudChunk = useCallback((idx: number) => {
    if (idx >= chunkUrlsRef.current.length) {
      setIsPlaying(false);
      setIsPaused(false);
      return;
    }

    if (audioRef.current) { audioRef.current.pause(); audioRef.current.src = ''; }
    const audio = new Audio(chunkUrlsRef.current[idx]);
    audio.playbackRate = rate;
    audioRef.current = audio;
    currentChunkRef.current = idx;

    audio.onplay = () => setIsPlaying(true);
    audio.onended = () => playCloudChunk(idx + 1);
    audio.onerror = () => playCloudChunk(idx + 1);
    audio.play().catch(() => setIsPlaying(false));
  }, [rate]);

  // ═══════════════════════════════════════════════════════════════
  // BROWSER TTS FUNCTIONS (FALLBACK)
  // ═══════════════════════════════════════════════════════════════

  const speakSentence = useCallback((idx: number) => {
    if (idx >= sentences.length) {
      setIsPlaying(false);
      setIsPaused(false);
      setCurrentIdx(-1);
      isPlayingRef.current = false;
      currentIdxRef.current = -1;
      chromeFixCleanupRef.current?.();
      return;
    }

    currentIdxRef.current = idx;
    setCurrentIdx(idx);

    const { utterance, startChromeFix } = createWarmUtterance(
      sentences[idx], lang, rate, bestVoiceRef.current
    );

    utterance.onstart = () => {
      chromeFixCleanupRef.current?.();
      chromeFixCleanupRef.current = startChromeFix();
    };
    utterance.onend = () => {
      if (isPlayingRef.current) setTimeout(() => speakSentence(currentIdxRef.current + 1), 300);
    };
    utterance.onerror = (e) => {
      if (e.error !== 'interrupted' && e.error !== 'canceled') console.warn('TTS error:', e.error);
      if (isPlayingRef.current) setTimeout(() => speakSentence(currentIdxRef.current + 1), 150);
    };
    window.speechSynthesis.speak(utterance);
  }, [sentences, lang, rate]);

  // ═══════════════════════════════════════════════════════════════
  // UNIFIED HANDLERS
  // ═══════════════════════════════════════════════════════════════

  const handlePlay = useCallback(async () => {
    // Resume from pause
    if (isPaused) {
      if (audioRef.current) {
        audioRef.current.play();
      } else {
        window.speechSynthesis.resume();
        isPlayingRef.current = true;
      }
      setIsPaused(false);
      setIsPlaying(true);
      return;
    }

    // ─── 1. Try static audio file (pre-generated, instant, NO API needed!) ────
    if (storyId) {
      if (audioRef.current) { audioRef.current.pause(); audioRef.current = null; }
      try {
        const staticUrl = await loadStaticAudio(storyId, lang);
        if (staticUrl) {
          setTtsMode('cloud'); // Switch to audio-element mode for pause/resume
          chunkUrlsRef.current = [staticUrl];
          playCloudChunk(0);
          return;
        }
      } catch { /* no static file, continue */ }
    }

    // ─── 2. Try Cloud TTS (generates + caches in IndexedDB) ────
    if (ttsMode === 'cloud') {
      if (audioRef.current) { audioRef.current.pause(); audioRef.current = null; }
      setIsLoading(true);
      try {
        const urls = await generateSpeechChunked(text, lang);
        chunkUrlsRef.current = urls;
        setIsLoading(false);
        playCloudChunk(0);
        return;
      } catch (err) {
        console.warn('Cloud TTS unavailable, switching to device voice:', err);
        setTtsMode('browser');
        setIsLoading(false);
      }
    }

    // ─── 3. Browser TTS fallback ────
    window.speechSynthesis.cancel();
    setIsPlaying(true);
    setIsPaused(false);
    isPlayingRef.current = true;
    setTimeout(() => speakSentence(0), 100);
  }, [isPaused, ttsMode, text, lang, storyId, playCloudChunk, speakSentence]);

  const handlePause = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
    } else {
      window.speechSynthesis.pause();
      isPlayingRef.current = false;
    }
    setIsPaused(true);
    setIsPlaying(false);
  }, []);

  const handleStop = useCallback(() => {
    if (audioRef.current) { audioRef.current.pause(); audioRef.current = null; }
    window.speechSynthesis.cancel();
    chromeFixCleanupRef.current?.();
    setIsPlaying(false);
    setIsPaused(false);
    setCurrentIdx(-1);
    isPlayingRef.current = false;
    currentIdxRef.current = -1;
  }, []);

  const handleSpeedToggle = useCallback(() => {
    setRate(r => {
      const nextRate = r === 1 ? 1.3 : r === 1.3 ? 0.8 : 1;

      if (audioRef.current) {
        audioRef.current.playbackRate = nextRate;
      } else if (isPlayingRef.current || isPaused) {
        window.speechSynthesis.cancel();
        setIsPaused(false);
        isPlayingRef.current = true;
        setIsPlaying(true);
        const idx = currentIdxRef.current >= 0 ? currentIdxRef.current : 0;
        setTimeout(() => {
          const { utterance, startChromeFix } = createWarmUtterance(
            sentences[idx], lang, nextRate, bestVoiceRef.current
          );
          utterance.onstart = () => {
            chromeFixCleanupRef.current?.();
            chromeFixCleanupRef.current = startChromeFix();
          };
          utterance.onend = () => { if (isPlayingRef.current) setTimeout(() => speakSentence(currentIdxRef.current + 1), 300); };
          utterance.onerror = () => { if (isPlayingRef.current) speakSentence(currentIdxRef.current + 1); };
          window.speechSynthesis.speak(utterance);
        }, 100);
      }
      return nextRate;
    });
  }, [sentences, lang, isPaused, speakSentence]);

  const handleSentenceClick = useCallback((idx: number) => {
    if (ttsMode === 'cloud') return; // No sentence-level control in cloud mode
    window.speechSynthesis.cancel();
    setIsPlaying(true);
    setIsPaused(false);
    isPlayingRef.current = true;
    setTimeout(() => speakSentence(idx), 100);
  }, [speakSentence, ttsMode]);

  const speedLabel = rate === 1 ? '1x' : rate === 1.3 ? '1.3x' : '0.8x';
  const active = isPlaying || isPaused;
  const isCloud = ttsMode === 'cloud';

  return (
    <div className="space-y-4">
      {/* TTS Controls */}
      <div className="flex items-center gap-2 flex-wrap">
        {isLoading ? (
          <button disabled className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-purple-500/50 to-indigo-600/50 text-white rounded-xl font-black text-xs uppercase tracking-wider animate-pulse">
            <Loader2 size={16} className="animate-spin" />
            {lang === 'el' ? 'ΕΤΟΙΜΑΖΩ ΦΩΝΗ...' : 'GENERATING VOICE...'}
          </button>
        ) : !isPlaying && !isPaused ? (
          <button
            onClick={handlePlay}
            disabled={!isCloud && !voiceReady}
            className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl font-black text-xs uppercase tracking-wider hover:brightness-110 hover:scale-105 active:scale-95 transition-all shadow-lg disabled:opacity-50"
          >
            <Volume2 size={16} />
            {lang === 'el' ? 'ΑΚΟΥΣΕ' : 'LISTEN'}
          </button>
        ) : (
          <>
            {isPlaying ? (
              <button onClick={handlePause} className="flex items-center gap-2 px-4 py-2.5 bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded-xl font-black text-xs uppercase tracking-wider hover:bg-amber-500/30 active:scale-95 transition-all">
                <Pause size={16} /> {lang === 'el' ? 'ΠΑΥΣΗ' : 'PAUSE'}
              </button>
            ) : (
              <button onClick={handlePlay} className="flex items-center gap-2 px-4 py-2.5 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded-xl font-black text-xs uppercase tracking-wider hover:bg-emerald-500/30 active:scale-95 transition-all">
                <Volume2 size={16} /> {lang === 'el' ? 'ΣΥΝΕΧΕΙΑ' : 'RESUME'}
              </button>
            )}
            <button onClick={handleStop} className="p-2.5 bg-red-500/10 text-red-400 border border-red-500/20 rounded-xl hover:bg-red-500/20 active:scale-95 transition-all" title={lang === 'el' ? 'Σταμάτα' : 'Stop'}>
              <Square size={14} />
            </button>
          </>
        )}

        <button onClick={handleSpeedToggle} className="flex items-center gap-1.5 px-3 py-2.5 bg-white/5 text-white/60 border border-white/10 rounded-xl font-black text-xs uppercase tracking-wider hover:bg-white/10 hover:text-white active:scale-95 transition-all">
          <FastForward size={14} /> {speedLabel}
        </button>

        {/* Voice mode indicator */}
        {!active && !isLoading && (
          <span className="flex items-center gap-1 text-white/25 text-[10px] font-bold uppercase tracking-widest">
            {isCloud ? <><Sparkles size={10} className="text-purple-400" /> AI Voice</> : voiceLabel || 'Device'}
          </span>
        )}
        {/* Cloud: playing indicator */}
        {active && isCloud && (
          <span className="flex items-center gap-1.5 text-purple-300/50 text-[10px] font-bold uppercase tracking-widest ml-auto animate-pulse">
            <Sparkles size={10} /> AI Voice
          </span>
        )}
        {/* Browser: sentence counter */}
        {active && !isCloud && currentIdx >= 0 && (
          <span className="text-white/30 text-[10px] font-bold uppercase tracking-widest ml-auto">{currentIdx + 1}/{sentences.length}</span>
        )}
      </div>

      {/* Story text — sentence highlighting only in browser mode */}
      <div className="prose prose-invert prose-lg max-w-none">
        <p className="text-lg md:text-xl text-gray-300 font-medium leading-relaxed first-letter:text-5xl first-letter:font-black first-letter:text-white first-letter:mr-3 first-letter:float-left">
          {sentences.map((sentence, i) => (
            <span
              key={i}
              ref={(el) => { sentenceRefs.current[i] = el; }}
              onClick={() => handleSentenceClick(i)}
              className={`transition-all duration-300 rounded-sm ${
                isCloud
                  ? 'text-gray-300' // Cloud mode: no highlighting
                  : currentIdx === i
                    ? 'bg-amber-400/20 text-white px-0.5 -mx-0.5 cursor-pointer'
                    : active && currentIdx >= 0
                      ? i < currentIdx ? 'text-white/30 cursor-pointer' : 'text-gray-300 hover:text-white hover:bg-white/5 cursor-pointer'
                      : 'text-gray-300 hover:text-white hover:bg-white/5 cursor-pointer'
              }`}
            >
              {sentence}{' '}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}

// ─── ACADEMY COMPONENT ─────────────────────────────────────────

interface AcademyProps {
  lang: 'el' | 'en';
  addXp?: (amount: number, id: string, creditReward?: number) => void;
  completedIds: string[];
}

export default function Academy({ lang, addXp, completedIds }: AcademyProps) {
  const childName = useChildName(lang);
  const [selectedCourse, setSelectedCourse] = useState<any | null>(null);
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<string>("START_SMALL");
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizzes, setQuizzes] = useState<Record<number, any[]>>({});
  const { trackAction } = useEconomy();
  const rewardedRef = useRef<Set<number>>(new Set()); // Prevent double-fire (React StrictMode / motion layout)
  const quizRewardedRef = useRef<Set<number>>(new Set());

  // Lazy-load quiz data the first time a story opens
  useEffect(() => {
    if (selectedCourse && Object.keys(quizzes).length === 0) {
      import('../data/academyQuizData').then(m => setQuizzes(m.ACADEMY_QUIZZES)).catch(() => {});
    }
  }, [selectedCourse]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleQuizComplete = (score: number, total: number) => {
    if (!selectedCourse || score !== total) return;
    const quizKey = `academy-quiz-${selectedCourse.id}`;
    if (!completedIds.includes(quizKey) && !quizRewardedRef.current.has(selectedCourse.id)) {
      quizRewardedRef.current.add(selectedCourse.id);
      trackAction('PASS_QUIZ');
      if (addXp) addXp(0, quizKey);
    }
  };

  const filteredCourses = COURSES.filter(course => course.category === activeCategory);

  const handleReadStory = (course: any, imageUrl?: string) => {
    setSelectedCourse(course);
    setShowQuiz(false);
    if (imageUrl) setSelectedImage(imageUrl);

    // Only award credits for NEW stories (prevent credit farming + double-fire guard)
    const storyKey = `academy-${course.id}`;
    if (!completedIds.includes(storyKey) && !rewardedRef.current.has(course.id)) {
      rewardedRef.current.add(course.id);
      trackAction('READ_ACADEMY');
      if (addXp) {
        addXp(0, storyKey); // 0 XP, purely for completion status
      }
    }
  };

  const handleNextStory = () => {
    if (!selectedCourse) return;
    const currentFilteredIndex = filteredCourses.findIndex(c => c.id === selectedCourse.id);

    if (currentFilteredIndex < filteredCourses.length - 1) {
      const nextIndex = currentFilteredIndex + 1;
      const nextCourse = filteredCourses[nextIndex];
      handleReadStory(nextCourse, getStoryImage(nextIndex));
    } else {
      setSelectedCourse(null);
    }
  };

  // Progress per category
  const getProgress = (catId: string) => {
    const catCourses = COURSES.filter(c => c.category === catId);
    const completedCount = catCourses.filter(c => completedIds.includes(`academy-${c.id}`)).length;
    return Math.round((completedCount / catCourses.length) * 100);
  };

  const activeCat = CATEGORIES[activeCategory as keyof typeof CATEGORIES];
  const totalStories = COURSES.length;
  const totalCompleted = COURSES.filter(c => completedIds.includes(`academy-${c.id}`)).length;

  // Story of the Day — seeded by day-of-year so every kid sees the same pick
  // each day and it rotates through all stories over time.
  const dailyStory = useMemo(() => {
    const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000);
    const idx = (dayOfYear * 7) % COURSES.length; // ×7 so consecutive days jump categories
    return { course: COURSES[idx], image: getStoryImage(idx) };
  }, []);
  const dailyDone = completedIds.includes(`academy-${dailyStory.course.id}`);
  const dailyCat = CATEGORIES[dailyStory.course.category as keyof typeof CATEGORIES];

  const openDailyStory = () => {
    setActiveCategory(dailyStory.course.category);
    handleReadStory(dailyStory.course, dailyStory.image);
  };

  return (
    <div className="relative w-full h-full pb-32 animate-in fade-in duration-700">
      <FirstTimeTip id="academy" lang={lang} text={lang === 'el'
        ? <>🦉 98 άνθρωποι που ξεκίνησαν από το τίποτα, {childName} — ο Messi, ο Disney, η Rowling. Πάτα έναν και δες πώς τα κατάφερε. Κάθε ιστορία = 2⚡.</>
        : <>🦉 98 people who started from nothing, {childName} — Messi, Disney, Rowling. Tap one and see how they did it. Every story = 2⚡.</>} />

      {/* HEADER */}
      <div className="text-center py-8 space-y-3 relative z-10">
         <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-2 backdrop-blur-md">
            <BookOpen size={14} className="text-blue-400" />
            <span className="text-[10px] font-black uppercase tracking-widest text-white/60">WISEBOT ACADEMY</span>
            <span className="text-[10px] font-black text-blue-400">{totalCompleted}/{totalStories}</span>
         </div>
         <h1 className="text-4xl md:text-6xl font-[1000] text-white uppercase italic tracking-tighter leading-none">
            {lang === 'el' ? 'ΜΑΘΗΜΑΤΑ' : 'LESSONS'} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">{lang === 'el' ? 'ΖΩΗΣ' : 'OF LIFE'}</span>
         </h1>
         <p className="text-white/40 font-bold uppercase tracking-[0.3em] text-xs">
            {lang === 'el' ? `ΔΙΑΒΑΣΕ ΤΙΣ ${totalStories} ΙΣΤΟΡΙΕΣ ΣΠΟΥΔΑΙΩΝ ΑΝΘΡΩΠΩΝ` : `READ THE ${totalStories} STORIES OF GREAT PEOPLE`}
         </p>

      </div>

      {/* STORY OF THE DAY */}
      <div className="max-w-3xl mx-auto px-4 mb-8">
        <motion.button
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          onClick={openDailyStory}
          className={`group w-full text-left rounded-3xl border-2 overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:scale-[0.99] bg-gradient-to-r ${dailyCat?.color || 'from-blue-500 to-purple-500'} ${dailyDone ? 'opacity-90' : ''} border-white/15 hover:border-white/30 shadow-lg`}
        >
          <div className="flex items-center gap-4 bg-black/55 backdrop-blur-sm p-4 md:p-5">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden shrink-0 border border-white/20">
              <SafeImage src={dailyStory.image} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <Star size={12} className="text-amber-400 shrink-0" fill="currentColor" />
                <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-amber-300">
                  {lang === 'el' ? 'Η ΙΣΤΟΡΙΑ ΤΗΣ ΗΜΕΡΑΣ' : 'STORY OF THE DAY'}
                </span>
                {dailyDone && (
                  <span className="flex items-center gap-1 text-[9px] font-black uppercase tracking-widest text-emerald-400">
                    <CheckCircle size={11} /> {lang === 'el' ? 'ΤΗ ΔΙΑΒΑΣΕΣ' : 'READ'}
                  </span>
                )}
              </div>
              <h3 className="text-white font-[1000] uppercase italic tracking-tight text-base md:text-xl leading-tight truncate">
                {dailyStory.course.title[lang]}
              </h3>
              <p className="text-white/50 text-[11px] md:text-xs font-bold truncate mt-0.5">
                {dailyStory.course.subject[lang]} · {dailyCat?.title[lang]}
              </p>
            </div>
            <div className="shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white group-hover:bg-white/25 transition-all">
              <PlayCircle size={22} />
            </div>
          </div>
        </motion.button>
      </div>

      {/* CATEGORY TABS (Pill Style) */}
      <div className="relative max-w-7xl mx-auto mb-4">
        {/* Fade hint right */}
        <div className="absolute right-0 top-0 bottom-4 w-12 bg-gradient-to-l from-[#0B0F1A] to-transparent z-10 pointer-events-none md:hidden" />
        <div className="px-4 overflow-x-auto custom-scrollbar pb-4">
          <div className="flex gap-2 md:gap-3 justify-start md:justify-center min-w-max">
            {Object.values(CATEGORIES).map((cat) => {
              const isActive = activeCategory === cat.id;
              const progress = getProgress(cat.id);
              const catCount = COURSES.filter(c => c.category === cat.id).length;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`
                    relative px-3 md:px-6 py-2.5 md:py-3 rounded-2xl flex items-center gap-2 md:gap-3 transition-all duration-300 border group shrink-0
                    ${isActive
                      ? `bg-gradient-to-r ${cat.color} border-white/20 text-white shadow-lg scale-105`
                      : 'bg-white/5 border-white/10 text-white/50 hover:bg-white/10 hover:text-white'
                    }
                  `}
                >
                  <cat.icon size={16} className={`shrink-0 ${isActive ? 'text-white' : 'opacity-70'}`} />
                  <div className="text-left">
                      <div className="flex items-center gap-2">
                        <span className="block font-black text-[10px] md:text-xs uppercase tracking-wide leading-none">
                          {lang === 'el' ? cat.title.el : cat.title.en}
                        </span>
                        <span className={`text-[9px] font-black px-1.5 py-0.5 rounded-md ${isActive ? 'bg-white/20 text-white' : 'bg-white/10 text-white/40'}`}>
                          {catCount}
                        </span>
                      </div>
                      {isActive && (
                          <div className="w-full bg-black/20 h-1 rounded-full overflow-hidden mt-1.5">
                              <div className="bg-white h-full transition-all duration-500" style={{ width: `${progress}%` }} />
                          </div>
                      )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* CATEGORY DESCRIPTION */}
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <AnimatePresence mode="wait">
          <motion.p
            key={activeCategory}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="text-center text-white/30 text-sm font-bold"
          >
            {activeCat.desc[lang]} &middot; {filteredCourses.length} {lang === 'el' ? 'ιστορίες' : 'stories'} &middot; {getProgress(activeCategory)}% {lang === 'el' ? 'ολοκληρωμένο' : 'complete'}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* COURSE GRID */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
         <AnimatePresence mode='popLayout'>
            {filteredCourses.map((course, index) => {
               const isCompleted = completedIds.includes(`academy-${course.id}`);
               const CategoryConfig = CATEGORIES[course.category as keyof typeof CATEGORIES];

               return (
                  <motion.div
                     layout
                     key={course.id}
                     initial={{ opacity: 0, scale: 0.9 }}
                     animate={{ opacity: 1, scale: 1 }}
                     exit={{ opacity: 0, scale: 0.9 }}
                     transition={{ duration: 0.2, delay: index * 0.03 }}
                     onClick={() => handleReadStory(course, getStoryImage(index))}
                     className={`
                        group relative rounded-[1.5rem] overflow-hidden border bg-[#0B0F1A] cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl flex
                        ${isCompleted ? 'border-emerald-500/40' : 'border-white/10 hover:border-white/20'}
                     `}
                  >
                     {/* Left: Image (compact) — uses rotating images for variety */}
                     <div className="w-28 sm:w-32 shrink-0 relative overflow-hidden bg-[#0B0F1A]">
                        <SafeImage
                          src={getStoryImage(index)}
                          alt={course.title[lang]}
                          loading="eager"
                          wrapperClassName="absolute inset-0"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0B0F1A]/80" />

                        {/* Number Badge */}
                        <div className="absolute top-2.5 left-2.5">
                            <div className={`w-7 h-7 rounded-lg flex items-center justify-center font-[1000] text-[10px] text-white shadow-lg border border-white/20 ${isCompleted ? 'bg-emerald-500' : 'bg-black/60 backdrop-blur-md'}`}>
                                {index + 1}
                            </div>
                        </div>
                     </div>

                     {/* Right: Content */}
                     <div className="flex-1 p-4 flex flex-col justify-center relative min-h-[120px]">
                        {/* Glow effect on hover */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${CategoryConfig.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                        <div className="relative z-10 space-y-1.5">
                            {/* Person name */}
                            <span className={`inline-block text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-md border ${CategoryConfig.bg} ${CategoryConfig.border} text-white/80`}>
                                {course.subject[lang]}
                            </span>
                            {/* Title */}
                            <h3 className="text-sm md:text-base font-[1000] text-white uppercase italic tracking-tight leading-tight group-hover:text-blue-300 transition-colors">
                                {course.title[lang]}
                            </h3>
                            {/* Subtitle + Status */}
                            <div className="flex items-center gap-2">
                              <p className="text-white/30 text-[10px] font-bold uppercase tracking-wider">
                                  {course.subtitle[lang]}
                              </p>
                              {isCompleted && (
                                <div className="flex items-center gap-1 text-emerald-400">
                                  <CheckCircle size={10} />
                                  <span className="text-[9px] font-black uppercase">{lang === 'el' ? 'OK' : 'DONE'}</span>
                                </div>
                              )}
                            </div>
                        </div>

                        {/* Arrow hint */}
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <ArrowRight size={16} className="text-white/30" />
                        </div>
                     </div>
                  </motion.div>
               );
            })}
         </AnimatePresence>
      </div>

      {/* READING MODAL */}
      <AnimatePresence>
        {selectedCourse && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 lg:p-8 xl:pl-80 bg-black/95 backdrop-blur-xl"
            onClick={() => setSelectedCourse(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0B0F1A] border border-white/10 w-full max-w-4xl h-[90vh] md:h-auto md:max-h-[90vh] rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row relative"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedCourse(null)}
                className="absolute top-6 right-6 z-50 p-3 bg-black/50 hover:bg-white/10 rounded-full text-white transition-all border border-white/10 backdrop-blur-md"
              >
                <X size={20} />
              </button>

              {/* Left: Visuals */}
              <div className="w-full md:w-5/12 min-h-[16rem] md:min-h-[24rem] relative shrink-0 bg-[#0B0F1A]">
                <SafeImage
                  src={selectedImage || selectedCourse.image}
                  alt={selectedCourse.title[lang]}
                  loading="eager"
                  wrapperClassName="absolute inset-0"
                  className="w-full h-full object-cover min-h-[16rem] md:min-h-[24rem]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F1A] via-transparent to-transparent md:bg-gradient-to-r" />
                
                <div className="absolute bottom-8 left-8 right-8">
                    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border bg-black/40 backdrop-blur-md mb-4 border-white/20`}>
                      <span className="text-[10px] font-black uppercase tracking-widest text-white">
                        {selectedCourse.subject[lang]}
                      </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-[1000] text-white drop-shadow-xl uppercase italic tracking-tighter leading-[0.9]">
                      {selectedCourse.title[lang]}
                    </h2>
                </div>
              </div>

              {/* Right: Story Content */}
              <div className="w-full md:w-7/12 p-8 md:p-12 overflow-y-auto custom-scrollbar flex flex-col bg-[#0B0F1A]">
                {showQuiz ? (
                <div className="flex-1">
                  <EbookQuiz
                    questions={quizzes[selectedCourse.id] || []}
                    lang={lang}
                    onComplete={handleQuizComplete}
                    onRetry={() => setShowQuiz(false)}
                    onNextBook={handleNextStory}
                    hasNextBook={filteredCourses.findIndex(c => c.id === selectedCourse.id) < filteredCourses.length - 1}
                  />
                </div>
                ) : (
                <>
                <div className="flex-1 space-y-8">
                  <StoryReader
                    text={selectedCourse.storyContent[lang]}
                    lang={lang}
                    storyId={STATIC_AUDIO_READY ? selectedCourse.id : undefined}
                  />

                  {/* ── STORY COMPLETE CELEBRATION ── */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.7, type: 'spring' }}
                    className="relative overflow-hidden rounded-[2rem] border-2 border-amber-500/30 bg-gradient-to-br from-amber-900/20 via-amber-800/10 to-transparent p-8"
                  >
                    {/* Ambient glow */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl pointer-events-none" />

                    {/* Sparkle particles */}
                    {[
                      { top: '18%', left: '8%' }, { top: '12%', left: '88%' },
                      { top: '55%', left: '4%' }, { top: '48%', left: '94%' },
                      { top: '78%', left: '12%' }, { top: '72%', left: '82%' },
                      { top: '35%', left: '50%' }, { top: '62%', left: '65%' },
                    ].map((pos, i) => (
                      <motion.div
                        key={i}
                        animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5] }}
                        transition={{ duration: 2, delay: i * 0.25, repeat: Infinity, repeatDelay: 0.5 }}
                        className="absolute w-1.5 h-1.5 bg-amber-400 rounded-full"
                        style={pos}
                      />
                    ))}

                    <div className="relative z-10 text-center space-y-5">
                      {/* Trophy Icon */}
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: 'spring', stiffness: 200, damping: 12, delay: 0.5 }}
                        className="relative mx-auto w-20 h-20"
                      >
                        {/* Glow ring */}
                        <motion.div
                          animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0.5, 0.2] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="absolute inset-[-8px] rounded-full bg-amber-400/20 blur-xl"
                        />
                        <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-300 via-yellow-400 to-amber-600 flex items-center justify-center shadow-[0_0_40px_rgba(251,191,36,0.4)] rotate-3">
                          <Star size={36} className="text-amber-900" fill="currentColor" />
                        </div>
                      </motion.div>

                      {/* Title */}
                      <motion.h5
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="text-xl font-[1000] text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-400 uppercase italic tracking-tight"
                      >
                        {lang === 'el' ? 'ΙΣΤΟΡΙΑ ΟΛΟΚΛΗΡΩΘΗΚΕ!' : 'STORY COMPLETE!'}
                      </motion.h5>

                      {/* Lesson text */}
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9 }}
                        className="text-amber-300/60 text-xs font-bold uppercase tracking-wide leading-relaxed max-w-sm mx-auto"
                      >
                        {lang === 'el'
                          ? 'Κάθε ιστορία κρύβει μια δύναμη. Κράτησέ την.'
                          : 'Every story hides a power. Keep it.'}
                      </motion.p>

                      {/* Stats line */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.1, type: 'spring' }}
                        className="flex items-center justify-center gap-3"
                      >
                        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 rounded-xl border border-amber-500/20">
                          <Brain size={13} className="text-amber-400" />
                          <span className="text-amber-300/80 text-[10px] font-[1000] uppercase tracking-wider">
                            {lang === 'el' ? 'ΣΟΦΟΤΕΡΟΣ' : 'WISER'}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-500/10 rounded-xl border border-emerald-500/20">
                          <CheckCircle size={13} className="text-emerald-400" />
                          <span className="text-emerald-300/80 text-[10px] font-[1000] uppercase tracking-wider">
                            {lang === 'el' ? 'ΟΛΟΚΛΗΡΩΘΗΚΕ' : 'COMPLETED'}
                          </span>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>

                {/* Quiz + Next Story Buttons */}
                <div className="pt-6 mt-auto space-y-3">
                  {(quizzes[selectedCourse.id]?.length ?? 0) > 0 && (
                    <motion.button
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.0 }}
                      onClick={() => setShowQuiz(true)}
                      className={`w-full py-5 rounded-[2rem] font-[1000] text-sm hover:scale-[1.03] active:scale-[0.97] transition-all uppercase tracking-widest flex items-center justify-center gap-3 group ${
                        completedIds.includes(`academy-quiz-${selectedCourse.id}`)
                          ? 'bg-emerald-500/15 text-emerald-300 border-2 border-emerald-500/40'
                          : 'bg-gradient-to-r from-purple-500 via-fuchsia-500 to-purple-500 text-white shadow-[0_0_30px_rgba(192,38,211,0.25)]'
                      }`}
                    >
                      <Brain size={18} />
                      <span>
                        {completedIds.includes(`academy-quiz-${selectedCourse.id}`)
                          ? (lang === 'el' ? 'QUIZ ΟΛΟΚΛΗΡΩΜΕΝΟ — ΠΑΙΞΕ ΞΑΝΑ' : 'QUIZ DONE — PLAY AGAIN')
                          : (lang === 'el' ? 'ΚΑΝΕ ΤΟ QUIZ — ΚΕΡΔΙΣΕ CREDITS' : 'TAKE THE QUIZ — EARN CREDITS')}
                      </span>
                    </motion.button>
                  )}
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                    onClick={handleNextStory}
                    className="w-full py-5 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-black rounded-[2rem] font-[1000] text-sm hover:scale-[1.03] active:scale-[0.97] transition-all uppercase tracking-widest shadow-[0_0_30px_rgba(251,191,36,0.25)] flex items-center justify-center gap-3 group"
                  >
                    <span>{lang === 'el' ? 'ΕΠΟΜΕΝΗ ΙΣΤΟΡΙΑ' : 'NEXT STORY'}</span>
                    <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                  </motion.button>
                </div>
                </>
                )}

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
