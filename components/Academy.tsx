
import React, { useState, useMemo, useRef, useCallback, useEffect } from 'react';
import { useBackCloses } from '../utils/useBackCloses';
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
              <button onClick={handlePause} className="flex items-center gap-2 px-4 py-2.5 bg-amber-500/20 text-amber-900 border border-amber-700/30 rounded-xl font-black text-xs uppercase tracking-wider hover:bg-amber-500/30 active:scale-95 transition-all">
                <Pause size={16} /> {lang === 'el' ? 'ΠΑΥΣΗ' : 'PAUSE'}
              </button>
            ) : (
              <button onClick={handlePlay} className="flex items-center gap-2 px-4 py-2.5 bg-emerald-500/20 text-emerald-800 border border-emerald-600/30 rounded-xl font-black text-xs uppercase tracking-wider hover:bg-emerald-500/30 active:scale-95 transition-all">
                <Volume2 size={16} /> {lang === 'el' ? 'ΣΥΝΕΧΕΙΑ' : 'RESUME'}
              </button>
            )}
            <button onClick={handleStop} className="p-2.5 bg-red-500/10 text-red-600 border border-red-500/20 rounded-xl hover:bg-red-500/20 active:scale-95 transition-all" title={lang === 'el' ? 'Σταμάτα' : 'Stop'}>
              <Square size={14} />
            </button>
          </>
        )}

        <button onClick={handleSpeedToggle} className="flex items-center gap-1.5 px-3 py-2.5 bg-amber-900/5 text-amber-900/60 border border-amber-800/15 rounded-xl font-black text-xs uppercase tracking-wider hover:bg-amber-900/10 hover:text-amber-950 active:scale-95 transition-all">
          <FastForward size={14} /> {speedLabel}
        </button>

        {/* Voice mode indicator */}
        {!active && !isLoading && (
          <span className="flex items-center gap-1 text-amber-800/40 text-[10px] font-bold uppercase tracking-widest">
            {isCloud ? <><Sparkles size={10} className="text-purple-600" /> AI Voice</> : voiceLabel || 'Device'}
          </span>
        )}
        {/* Cloud: playing indicator */}
        {active && isCloud && (
          <span className="flex items-center gap-1.5 text-purple-700/60 text-[10px] font-bold uppercase tracking-widest ml-auto animate-pulse">
            <Sparkles size={10} /> AI Voice
          </span>
        )}
        {/* Browser: sentence counter */}
        {active && !isCloud && currentIdx >= 0 && (
          <span className="text-amber-800/40 text-[10px] font-bold uppercase tracking-widest ml-auto">{currentIdx + 1}/{sentences.length}</span>
        )}
      </div>

      {/* Story text — sentence highlighting only in browser mode */}
      {/* Same serif page as the ebook reader — dark ink on cream is the restful reading surface. */}
      <div className="max-w-none">
        <p className="text-lg md:text-xl text-amber-950/85 leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:text-amber-900 first-letter:mr-3 first-letter:float-left" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
          {sentences.map((sentence, i) => (
            <span
              key={i}
              ref={(el) => { sentenceRefs.current[i] = el; }}
              onClick={() => handleSentenceClick(i)}
              className={`transition-all duration-300 rounded-sm ${
                isCloud
                  ? '' // Cloud mode: no highlighting
                  : currentIdx === i
                    ? 'bg-amber-400/40 text-amber-950 px-0.5 -mx-0.5 cursor-pointer'
                    : active && currentIdx >= 0
                      ? i < currentIdx ? 'text-amber-900/35 cursor-pointer' : 'hover:bg-amber-900/5 cursor-pointer'
                      : 'hover:bg-amber-900/5 cursor-pointer'
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
  // Phone back gesture closes the story instead of leaving the Academy.
  const closeCourse = useBackCloses(selectedCourse !== null, () => setSelectedCourse(null));
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<string>("START_SMALL");
  const [showQuiz, setShowQuiz] = useState(false);
  // The story pane is scrolled to the bottom when the child taps the quiz button — jump back up
  // so question 1 is visible instead of cut off at the top.
  const storyPaneRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (showQuiz) storyPaneRef.current?.scrollTo({ top: 0 });
  }, [showQuiz]);
  const [quizzes, setQuizzes] = useState<Record<number, any[]>>({});
  const { trackAction, badges } = useEconomy();
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
    <div
      className="relative w-full min-h-full rounded-[2rem] md:rounded-[2.5rem] overflow-hidden pb-20 animate-in fade-in duration-700"
      style={{
        // One open page on the dark desk — same paper as the reader, so the room is restful end to end.
        background: 'linear-gradient(135deg, #faf5eb 0%, #f5ead6 50%, #f0e4cc 100%)',
        boxShadow: '0 30px 80px rgba(0,0,0,0.45), 0 0 0 1px rgba(139,90,43,0.15), inset 0 1px 0 rgba(255,255,255,0.6)',
      }}
    >
      <FirstTimeTip id="academy" lang={lang} text={lang === 'el'
        ? <>🦉 98 άνθρωποι που ξεκίνησαν από το τίποτα, {childName} — ο Messi, ο Disney, η Rowling. Πάτα έναν και δες πώς τα κατάφερε. Κάθε ιστορία = 2⚡.</>
        : <>🦉 98 people who started from nothing, {childName} — Messi, Disney, Rowling. Tap one and see how they did it. Every story = 2⚡.</>} />

      {/* HEADER */}
      <div className="text-center pt-8 pb-6 px-4 space-y-3 relative z-10">
         <div className="inline-flex items-center gap-2 bg-white/60 border border-amber-800/15 px-4 py-1.5 rounded-full mb-1">
            <BookOpen size={14} className="text-amber-700" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-800/70">WiseBot Academy</span>
            <span className="text-[10px] font-black text-amber-700">{totalCompleted}/{totalStories}</span>
         </div>
         <h1 className="text-3xl md:text-5xl text-amber-950 leading-tight" style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontWeight: 700 }}>
            {lang === 'el' ? 'Μαθήματα Ζωής' : 'Lessons of Life'}
         </h1>
         <p className="text-amber-900/60 text-sm md:text-base max-w-md mx-auto">
            {lang === 'el' ? `${totalStories} ιστορίες ανθρώπων που ξεκίνησαν από το μηδέν. Διάλεξε μία — κάθε ιστορία δίνει 2⚡.` : `${totalStories} stories of people who started from nothing. Pick one — every story earns 2⚡.`}
         </p>
      </div>

      {/* STORY OF THE DAY */}
      <div className="max-w-3xl mx-auto px-4 mb-8">
        <motion.button
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          onClick={openDailyStory}
          className={`group w-full text-left rounded-3xl border overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.99] bg-white/70 border-amber-800/15 hover:border-amber-700/40 shadow-sm ${dailyDone ? 'opacity-90' : ''}`}
        >
          <div className="flex items-center gap-4 p-4 md:p-5">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden shrink-0 border border-amber-800/10 shadow">
              <SafeImage src={dailyStory.image} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <Star size={12} className="text-amber-500 shrink-0" fill="currentColor" />
                <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-amber-700">
                  {lang === 'el' ? 'Η ΙΣΤΟΡΙΑ ΤΗΣ ΗΜΕΡΑΣ' : 'STORY OF THE DAY'}
                </span>
                {dailyDone && (
                  <span className="flex items-center gap-1 text-[9px] font-black uppercase tracking-widest text-emerald-700">
                    <CheckCircle size={11} /> {lang === 'el' ? 'ΤΗ ΔΙΑΒΑΣΕΣ' : 'READ'}
                  </span>
                )}
              </div>
              <h3 className="text-amber-950 text-base md:text-xl leading-tight line-clamp-2" style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontWeight: 700 }}>
                {dailyStory.course.title[lang]}
              </h3>
              <p className="text-amber-900/60 text-[11px] md:text-xs font-semibold truncate mt-0.5">
                {dailyStory.course.subject[lang]} · {dailyCat?.title[lang]}
              </p>
            </div>
            <div className="shrink-0 w-11 h-11 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-all">
              <PlayCircle size={22} />
            </div>
          </div>
        </motion.button>
      </div>

      {/* CATEGORY TABS (Pill Style) */}
      <div className="relative max-w-7xl mx-auto mb-4">
        {/* Fade hint right */}
        <div className="absolute right-0 top-0 bottom-4 w-12 z-10 pointer-events-none md:hidden" style={{ background: 'linear-gradient(to left, #f5ead6, transparent)' }} />
        <div className="px-4 overflow-x-auto pb-4" style={{ scrollbarWidth: 'none' }}>
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
                      ? `bg-gradient-to-r ${cat.color} border-transparent text-white shadow-md scale-105`
                      : 'bg-white/60 border-amber-800/15 text-amber-900/80 hover:bg-white hover:border-amber-700/30'
                    }
                  `}
                >
                  <cat.icon size={16} className={`shrink-0 ${isActive ? 'text-white' : 'opacity-70'}`} />
                  <div className="text-left">
                      <div className="flex items-center gap-2">
                        <span className="block font-black text-[10px] md:text-xs uppercase tracking-wide leading-none">
                          {lang === 'el' ? cat.title.el : cat.title.en}
                        </span>
                        <span className={`text-[9px] font-black px-1.5 py-0.5 rounded-md ${isActive ? 'bg-white/25 text-white' : 'bg-amber-900/10 text-amber-900/60'}`}>
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
            className="text-center text-amber-900/60 text-sm"
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
                        group relative rounded-[1.5rem] overflow-hidden border bg-white/70 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:bg-white flex
                        ${isCompleted ? 'border-emerald-500/50' : 'border-amber-800/12 hover:border-amber-700/35'}
                     `}
                  >
                     {/* Left: Image (compact) — uses rotating images for variety */}
                     <div className="w-28 sm:w-32 shrink-0 relative overflow-hidden bg-amber-950/5">
                        <SafeImage
                          src={getStoryImage(index)}
                          alt={course.title[lang]}
                          loading="eager"
                          wrapperClassName="absolute inset-0"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-y-0 right-0 w-6" style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.55))' }} />

                        {/* Number Badge */}
                        <div className="absolute top-2.5 left-2.5">
                            <div className={`w-7 h-7 rounded-lg flex items-center justify-center font-black text-[10px] text-white shadow-md ${isCompleted ? 'bg-emerald-500' : 'bg-amber-900/80'}`}>
                                {index + 1}
                            </div>
                        </div>
                     </div>

                     {/* Right: Content */}
                     <div className="flex-1 p-4 flex flex-col justify-center relative min-h-[120px]">
                        {/* Glow effect on hover */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${CategoryConfig.color} opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500`} />

                        <div className="relative z-10 space-y-1.5">
                            {/* Person name */}
                            <span className={`inline-block text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-md border ${CategoryConfig.bg} ${CategoryConfig.border} text-amber-900`}>
                                {course.subject[lang]}
                            </span>
                            {/* Title */}
                            <h3 className="text-base md:text-lg text-amber-950 leading-snug group-hover:text-amber-800 transition-colors" style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontWeight: 700 }}>
                                {course.title[lang]}
                            </h3>
                            {/* Subtitle + Status */}
                            <div className="flex items-center gap-2">
                              <p className="text-amber-800/60 text-[10px] font-bold uppercase tracking-wider">
                                  {course.subtitle[lang]}
                              </p>
                              {isCompleted && (
                                <div className="flex items-center gap-1 text-emerald-700">
                                  <CheckCircle size={10} />
                                  <span className="text-[9px] font-black uppercase">{lang === 'el' ? 'OK' : 'DONE'}</span>
                                </div>
                              )}
                            </div>
                        </div>

                        {/* Arrow hint */}
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <ArrowRight size={16} className="text-amber-800/40" />
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
            className="fixed inset-0 z-[100] flex items-center justify-center p-3 md:p-6 xl:pl-80 bg-[#1a0f08]/95 backdrop-blur-sm"
            onClick={closeCourse}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-3xl h-[94vh] md:h-[90vh] rounded-2xl md:rounded-3xl overflow-hidden flex flex-col relative"
              style={{
                // Same paper as the ebook reader (components/Ebooks.tsx) — the two reading rooms share one surface.
                background: 'linear-gradient(135deg, #faf5eb 0%, #f5ead6 50%, #f0e4cc 100%)',
                boxShadow: '0 30px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(139,90,43,0.15), inset 0 1px 0 rgba(255,255,255,0.5), inset 0 -2px 8px rgba(139,90,43,0.08)',
              }}
            >
              {/* Close Button */}
              <button 
                onClick={closeCourse}
                className="absolute top-4 right-4 z-50 p-2.5 bg-black/40 hover:bg-black/60 rounded-full text-white transition-all border border-white/20 backdrop-blur-md"
                aria-label={lang === 'el' ? 'Κλείσιμο' : 'Close'}
              >
                <X size={20} />
              </button>

              {/* Everything scrolls together: illustration, title, story, quiz — like a book page */}
              <div ref={storyPaneRef} className="flex-1 overflow-y-auto flex flex-col" style={{ scrollbarWidth: 'thin', scrollbarColor: '#c4a16a #f0e4cc' }}>
              {/* Illustration — fades into the paper */}
              <div className="relative w-full h-52 md:h-72 shrink-0 overflow-hidden bg-amber-950/5">
                <SafeImage
                  src={selectedImage || selectedCourse.image}
                  alt={selectedCourse.title[lang]}
                  loading="eager"
                  wrapperClassName="absolute inset-0"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 inset-x-0 h-20" style={{ background: 'linear-gradient(to top, #faf5eb, transparent)' }} />
              </div>

              {/* Title block */}
              <div className="px-6 md:px-14 pt-2 pb-6 text-center shrink-0">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <div className="h-px flex-1 max-w-12 bg-amber-800/20" />
                  <span className="text-amber-800/50 text-[10px] font-bold uppercase tracking-[0.3em]">
                    {selectedCourse.subject[lang]}
                  </span>
                  <div className="h-px flex-1 max-w-12 bg-amber-800/20" />
                </div>
                <h2 className="text-2xl md:text-4xl text-amber-950 leading-tight" style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontWeight: 700 }}>
                  {selectedCourse.title[lang]}
                </h2>
              </div>

              {/* Story / quiz */}
              <div className="px-6 pb-28 md:px-14 md:pb-12 flex flex-col flex-1">
                {showQuiz ? (
                <div className="flex-1">
                  <EbookQuiz
                    questions={quizzes[selectedCourse.id] || []}
                    lang={lang}
                    variant="story"
                    reward={completedIds.includes(`academy-quiz-${selectedCourse.id}`) ? 0 : (badges.scientist ? 3 : 2)}
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
                    className="relative overflow-hidden rounded-[2rem] border-2 border-amber-600/25 bg-gradient-to-br from-amber-200/40 via-amber-100/30 to-transparent p-8"
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
                        className="text-xl font-[1000] text-transparent bg-clip-text bg-gradient-to-r from-amber-700 via-yellow-600 to-amber-800 uppercase italic tracking-tight"
                      >
                        {lang === 'el' ? 'ΙΣΤΟΡΙΑ ΟΛΟΚΛΗΡΩΘΗΚΕ!' : 'STORY COMPLETE!'}
                      </motion.h5>

                      {/* Lesson text */}
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9 }}
                        className="text-amber-900/60 text-xs font-bold uppercase tracking-wide leading-relaxed max-w-sm mx-auto"
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
                        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/15 rounded-xl border border-amber-600/25">
                          <Brain size={13} className="text-amber-700" />
                          <span className="text-amber-900/80 text-[10px] font-[1000] uppercase tracking-wider">
                            {lang === 'el' ? 'ΣΟΦΟΤΕΡΟΣ' : 'WISER'}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-500/10 rounded-xl border border-emerald-600/25">
                          <CheckCircle size={13} className="text-emerald-700" />
                          <span className="text-emerald-800/80 text-[10px] font-[1000] uppercase tracking-wider">
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
                          ? 'bg-emerald-500/15 text-emerald-800 border-2 border-emerald-600/40'
                          : 'bg-gradient-to-r from-purple-500 via-fuchsia-500 to-purple-500 text-white shadow-[0_0_30px_rgba(192,38,211,0.25)]'
                      }`}
                    >
                      <Brain size={18} className="shrink-0" />
                      <span>
                        {completedIds.includes(`academy-quiz-${selectedCourse.id}`)
                          ? (lang === 'el' ? 'ΠΑΙΞΕ ΞΑΝΑ ΤΟ QUIZ' : 'PLAY THE QUIZ AGAIN')
                          : (lang === 'el' ? `ΚΑΝΕ ΤΟ QUIZ · +${badges.scientist ? 3 : 2}⚡` : `TAKE THE QUIZ · +${badges.scientist ? 3 : 2}⚡`)}
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
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
