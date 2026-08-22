
import React, { useState, useRef, useCallback, useEffect, useMemo } from 'react';
import { motion as m, AnimatePresence } from 'framer-motion';
import {
  Book as BookIcon,
  Lock,
  CheckCircle,
  Zap,
  X,
  Volume2,
  Pause,
  Square,
  FastForward,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Loader2,
  Sparkles,
  BookOpen,
  Repeat
} from 'lucide-react';
import DOMPurify from 'dompurify';
import { getBestVoice, ensureVoicesLoaded, createWarmUtterance, getVoiceLabel, htmlToParagraphs, htmlToPlainText } from '../utils/ttsVoice';
import { generateSpeechChunked, clearTTSCache, isCloudTTSAvailable, loadStaticEbookAudio } from '../services/cloudTTS';
import { BookPage } from '../types';

// ─── Dynamic book loaders (each book becomes its own chunk) ────────────
const bookImporters: Record<number, () => Promise<{ default?: any; [key: string]: any }>> = {
  1: () => import('../data/bookData_1'),
  2: () => import('../data/bookData_2'),
  3: () => import('../data/bookData_3'),
  4: () => import('../data/bookData_4'),
  5: () => import('../data/bookData_5'),
  6: () => import('../data/bookData_6'),
  7: () => import('../data/bookData_7'),
  8: () => import('../data/bookData_8'),
  9: () => import('../data/bookData_9'),
  10: () => import('../data/bookData_10'),
  11: () => import('../data/bookData_11'),
  12: () => import('../data/bookData_12'),
  13: () => import('../data/bookData_13'),
  14: () => import('../data/bookData_14'),
  15: () => import('../data/bookData_15'),
  16: () => import('../data/bookData_16'),
  17: () => import('../data/bookData_17'),
  18: () => import('../data/bookData_18'),
  19: () => import('../data/bookData_19'),
  20: () => import('../data/bookData_20'),
  21: () => import('../data/bookData_21'),
  22: () => import('../data/bookData_22'),
  23: () => import('../data/bookData_23'),
  24: () => import('../data/bookData_24'),
  25: () => import('../data/bookData_25'),
  26: () => import('../data/bookData_26'),
  27: () => import('../data/bookData_27'),
  28: () => import('../data/bookData_28'),
  29: () => import('../data/bookData_29'),
  30: () => import('../data/bookData_30'),
  31: () => import('../data/bookData_31'),
  32: () => import('../data/bookData_32'),
  33: () => import('../data/bookData_33'),
  34: () => import('../data/bookData_34'),
};

// Static narration mp3s (/audio/ebooks) were recorded for the pre-2026-07 page
// texts. Re-enable after regenerating them for the enriched books.
const STATIC_AUDIO_READY = false;

const bookCache = new Map<number, any[]>();

async function loadBookData(bookId: number): Promise<any[]> {
  if (bookCache.has(bookId)) return bookCache.get(bookId)!;
  const importer = bookImporters[bookId];
  if (!importer) return [];
  const mod = await importer();
  const key = Object.keys(mod).find(k => k.startsWith('BOOK_'));
  const data = key ? mod[key] : [];
  const arr = Array.isArray(data) ? data : [data];
  bookCache.set(bookId, arr);
  return arr;
}

const quizImporter = () => import('../data/bookQuizData');
import { EbookQuiz } from './EbookQuiz';
import { useEconomy } from '../context/EconomyContext';
import { SafeImage } from './SafeImage';

const motion = m as any;

// ─── BOOK TTS PLAYER (Storybook theme) ─────────────────────────────────

interface BookTTSPlayerProps {
  textContent: string;         // Plain text for structured pages
  htmlContent?: string;        // HTML content for legacy pages
  lang: 'el' | 'en';
  contentRef: React.RefObject<HTMLDivElement | null>;
  bookId?: number;
  pageNum?: number;
  /** Start playback automatically on mount (continuous-reading chain) */
  autoPlay?: boolean;
  /** Continuous-reading toggle state + handler (rendered inside the bar) */
  continuous?: boolean;
  onToggleContinuous?: () => void;
  /** Fires when playback finishes naturally (not on stop/pause) */
  onPlaybackEnd?: () => void;
}

function BookTTSPlayer({ textContent, htmlContent, lang, contentRef, bookId, pageNum, autoPlay, continuous, onToggleContinuous, onPlaybackEnd }: BookTTSPlayerProps) {
  const paragraphs = useMemo(() => {
    if (htmlContent) return htmlToParagraphs(htmlContent);
    return textContent.split('\n\n').filter(p => p.trim().length > 0);
  }, [textContent, htmlContent]);
  const plainText = useMemo(() => {
    if (htmlContent) return htmlToPlainText(htmlContent);
    return textContent;
  }, [textContent, htmlContent]);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(-1);
  const [rate, setRate] = useState(1);
  const [ttsMode, setTtsMode] = useState<'cloud' | 'browser'>(
    (bookId && pageNum) || isCloudTTSAvailable() ? 'cloud' : 'browser'
  );

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const chunkUrlsRef = useRef<string[]>([]);
  const currentChunkRef = useRef(0);
  const [voiceReady, setVoiceReady] = useState(false);
  const [voiceLabel, setVoiceLabelState] = useState('');
  const currentIdxRef = useRef(-1);
  const isPlayingRef = useRef(false);
  const chromeFixCleanupRef = useRef<(() => void) | null>(null);
  const bestVoiceRef = useRef<SpeechSynthesisVoice | null>(null);
  const onPlaybackEndRef = useRef(onPlaybackEnd);
  useEffect(() => { onPlaybackEndRef.current = onPlaybackEnd; }, [onPlaybackEnd]);
  // Guard for continuous mode: only chain to the next page when this page
  // actually narrated something. Without this, a failing audio source (or a
  // voiceless browser-TTS fallback) would flip through pages in seconds.
  const playStartedAtRef = useRef(0);
  const endedOnceRef = useRef(false);
  const firePlaybackEnd = useCallback(() => {
    if (endedOnceRef.current) return; // a stale onended/onerror must not re-fire
    endedOnceRef.current = true;
    const playedMs = playStartedAtRef.current ? Date.now() - playStartedAtRef.current : 0;
    if (playedMs > 3000) onPlaybackEndRef.current?.();
  }, []);

  useEffect(() => {
    ensureVoicesLoaded().then(() => {
      const voice = getBestVoice(lang);
      bestVoiceRef.current = voice;
      if (voice) setVoiceLabelState(getVoiceLabel(voice));
      setVoiceReady(true);
    });
  }, [lang]);

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        // Detach handlers first — clearing src fires 'error' on the element,
        // which would otherwise re-enter playCloudChunk from a dead player.
        audioRef.current.onended = null;
        audioRef.current.onerror = null;
        audioRef.current.onplay = null;
        audioRef.current.pause(); audioRef.current.src = ''; audioRef.current = null;
      }
      window.speechSynthesis.cancel();
      chromeFixCleanupRef.current?.();
      isPlayingRef.current = false;
    };
  }, [textContent, htmlContent]);

  const playCloudChunk = useCallback((idx: number) => {
    if (idx >= chunkUrlsRef.current.length) {
      setIsPlaying(false); setIsPaused(false);
      firePlaybackEnd();
      return;
    }
    if (audioRef.current) {
      audioRef.current.onended = null; audioRef.current.onerror = null;
      audioRef.current.pause(); audioRef.current.src = '';
    }
    const audio = new Audio(chunkUrlsRef.current[idx]);
    audio.playbackRate = rate;
    audioRef.current = audio;
    currentChunkRef.current = idx;
    audio.onplay = () => { if (!playStartedAtRef.current) playStartedAtRef.current = Date.now(); setIsPlaying(true); };
    audio.onended = () => playCloudChunk(idx + 1);
    audio.onerror = () => playCloudChunk(idx + 1);
    audio.play().catch(() => setIsPlaying(false));
  }, [rate, firePlaybackEnd]);

  const speakParagraph = useCallback((idx: number) => {
    if (idx >= paragraphs.length) {
      setIsPlaying(false); setIsPaused(false); setCurrentIdx(-1);
      isPlayingRef.current = false; currentIdxRef.current = -1;
      chromeFixCleanupRef.current?.();
      firePlaybackEnd();
      return;
    }
    currentIdxRef.current = idx; setCurrentIdx(idx);
    const { utterance, startChromeFix } = createWarmUtterance(paragraphs[idx], lang, rate, bestVoiceRef.current);
    utterance.onstart = () => { if (!playStartedAtRef.current) playStartedAtRef.current = Date.now(); chromeFixCleanupRef.current?.(); chromeFixCleanupRef.current = startChromeFix(); };
    utterance.onend = () => { if (isPlayingRef.current) setTimeout(() => speakParagraph(currentIdxRef.current + 1), 400); };
    utterance.onerror = (e: any) => {
      if (e.error !== 'interrupted' && e.error !== 'canceled') console.warn('TTS error:', e.error);
      if (isPlayingRef.current) setTimeout(() => speakParagraph(currentIdxRef.current + 1), 200);
    };
    window.speechSynthesis.speak(utterance);
  }, [paragraphs, lang, rate, firePlaybackEnd]);

  const handlePlay = useCallback(async () => {
    if (isPaused) {
      if (audioRef.current) audioRef.current.play();
      else { window.speechSynthesis.resume(); isPlayingRef.current = true; }
      setIsPaused(false); setIsPlaying(true); return;
    }
    // Fresh run — re-arm the end-of-playback guard for replays of this page
    endedOnceRef.current = false;
    playStartedAtRef.current = 0;
    if (STATIC_AUDIO_READY && bookId && pageNum) {
      if (audioRef.current) { audioRef.current.pause(); audioRef.current = null; }
      try {
        const staticUrl = await loadStaticEbookAudio(bookId, pageNum, lang);
        if (staticUrl) {
          setTtsMode('cloud');
          chunkUrlsRef.current = [staticUrl];
          playCloudChunk(0); return;
        }
      } catch { /* no static file */ }
    }
    if (ttsMode === 'cloud') {
      if (audioRef.current) { audioRef.current.pause(); audioRef.current = null; }
      setIsLoading(true);
      try {
        const urls = await generateSpeechChunked(plainText, lang);
        chunkUrlsRef.current = urls; setIsLoading(false);
        playCloudChunk(0); return;
      } catch {
        setTtsMode('browser'); setIsLoading(false);
      }
    }
    window.speechSynthesis.cancel();
    setIsPlaying(true); setIsPaused(false); isPlayingRef.current = true;
    setTimeout(() => speakParagraph(0), 100);
  }, [isPaused, ttsMode, plainText, lang, bookId, pageNum, playCloudChunk, speakParagraph]);

  // Continuous-reading chain: when the page remounts with autoPlay, start
  // narrating after a short beat (gives the page-turn animation time to land).
  const handlePlayRef = useRef(handlePlay);
  useEffect(() => { handlePlayRef.current = handlePlay; }, [handlePlay]);
  useEffect(() => {
    if (!autoPlay) return;
    const t = setTimeout(() => { handlePlayRef.current(); }, 700);
    return () => clearTimeout(t);
     
  }, [autoPlay]);

  const handlePause = useCallback(() => {
    if (audioRef.current) audioRef.current.pause();
    else { window.speechSynthesis.pause(); isPlayingRef.current = false; }
    setIsPaused(true); setIsPlaying(false);
  }, []);

  const handleStop = useCallback(() => {
    if (audioRef.current) { audioRef.current.pause(); audioRef.current = null; }
    window.speechSynthesis.cancel(); chromeFixCleanupRef.current?.();
    setIsPlaying(false); setIsPaused(false); setCurrentIdx(-1);
    isPlayingRef.current = false; currentIdxRef.current = -1;
  }, []);

  const handleSpeedToggle = useCallback(() => {
    setRate(r => {
      const nextRate = r === 1 ? 1.3 : r === 1.3 ? 0.8 : 1;
      if (audioRef.current) audioRef.current.playbackRate = nextRate;
      return nextRate;
    });
  }, []);

  const speedLabel = rate === 1 ? '1x' : rate === 1.3 ? '1.3x' : '0.8x';
  const active = isPlaying || isPaused;
  const isCloud = ttsMode === 'cloud';
  if (paragraphs.length === 0) return null;

  // pr-24 on phones keeps the last control clear of the fixed rocket FAB that Layout
  // pins at bottom-right (audit P1-8).
  return (
    <div className="bg-[#f0e6d2]/95 backdrop-blur-sm border-t border-amber-800/15 px-4 pr-24 sm:pr-4 py-2.5 flex items-center gap-2 flex-wrap shrink-0">
      {isLoading ? (
        <button disabled className="flex items-center gap-2 px-3 py-1.5 bg-amber-800/20 text-amber-900/70 rounded-lg font-bold text-[11px] uppercase tracking-wider animate-pulse">
          <Loader2 size={13} className="animate-spin" />
          {lang === 'el' ? 'ΕΤΟΙΜΑΖΩ...' : 'LOADING...'}
        </button>
      ) : !isPlaying && !isPaused ? (
        <button onClick={handlePlay} disabled={!isCloud && !voiceReady}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-800 text-amber-50 rounded-lg font-bold text-[11px] uppercase tracking-wider hover:bg-amber-900 active:scale-95 transition-all shadow disabled:opacity-40">
          <Volume2 size={13} /> {lang === 'el' ? 'ΑΚΟΥΣΕ' : 'LISTEN'}
        </button>
      ) : (
        <>
          {isPlaying ? (
            <button onClick={handlePause} className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-600/20 text-amber-900 border border-amber-800/20 rounded-lg font-bold text-[11px] uppercase tracking-wider hover:bg-amber-600/30 active:scale-95 transition-all">
              <Pause size={13} /> {lang === 'el' ? 'ΠΑΥΣΗ' : 'PAUSE'}
            </button>
          ) : (
            <button onClick={handlePlay} className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-700/20 text-emerald-900 border border-emerald-800/20 rounded-lg font-bold text-[11px] uppercase tracking-wider active:scale-95 transition-all">
              <Volume2 size={13} /> {lang === 'el' ? 'ΣΥΝΕΧΕΙΑ' : 'RESUME'}
            </button>
          )}
          <button onClick={handleStop} className="p-1.5 bg-red-800/10 text-red-900/60 border border-red-800/15 rounded-lg hover:bg-red-800/20 active:scale-95 transition-all">
            <Square size={11} />
          </button>
        </>
      )}
      <button onClick={handleSpeedToggle} className="flex items-center gap-1 px-2 py-1.5 bg-amber-800/5 text-amber-800/50 border border-amber-800/10 rounded-lg font-bold text-[10px] uppercase tracking-wider hover:bg-amber-800/10 active:scale-95 transition-all">
        <FastForward size={11} /> {speedLabel}
      </button>
      {onToggleContinuous && (
        <button
          onClick={onToggleContinuous}
          title={lang === 'el' ? 'Συνεχόμενη ανάγνωση: όταν τελειώσει η σελίδα, συνεχίζει μόνη της στην επόμενη' : 'Continuous reading: auto-advances to the next page when audio ends'}
          className={`flex items-center gap-1 px-2 py-1.5 rounded-lg font-bold text-[10px] uppercase tracking-wider active:scale-95 transition-all border ${
            continuous
              ? 'bg-emerald-700 text-emerald-50 border-emerald-800 shadow'
              : 'bg-amber-800/5 text-amber-800/50 border-amber-800/10 hover:bg-amber-800/10'
          }`}
        >
          <Repeat size={11} /> {lang === 'el' ? 'ΣΥΝΕΧΟΜΕΝΗ' : 'AUTO'}
        </button>
      )}
      {!active && !isLoading && (
        <span className="flex items-center gap-1 text-amber-800/25 text-[9px] font-bold uppercase tracking-widest ml-auto">
          {isCloud ? <><Sparkles size={8} /> AI</> : voiceLabel || 'Device'}
        </span>
      )}
    </div>
  );
}

// ─── LEGACY PAGE SPLITTER (for old HTML content books) ─────────────────
function splitIntoPages(html: string): string[] {
  if (!html) return [''];
  try {
    const tmp = document.createElement('div');
    tmp.innerHTML = html.trim();
    const root = tmp.firstElementChild || tmp;
    const children = Array.from(root.children) as HTMLElement[];
    if (children.length <= 1) return [html];

    const MIN_PAGE = 200;
    const MAX_PAGE = 1200;
    const pages: string[][] = [[]];
    let len = 0;

    for (const child of children) {
      const textLen = (child.textContent || '').trim().length;
      if (len > MIN_PAGE && len + textLen > MAX_PAGE && pages[pages.length - 1].length > 0) {
        pages.push([]); len = 0;
      }
      pages[pages.length - 1].push(child.outerHTML);
      len += textLen;
      if (child.tagName === 'SECTION' && len > MIN_PAGE) { pages.push([]); len = 0; }
    }
    if (pages[pages.length - 1].length === 0) pages.pop();
    while (pages.length > 1) {
      const last = pages[pages.length - 1];
      const lastLen = last.join('').replace(/<[^>]*>/g, '').length;
      if (lastLen < MIN_PAGE) { pages.pop(); pages[pages.length - 1].push(...last); } else break;
    }
    return pages.map(p => p.join('\n'));
  } catch { return [html]; }
}

// Lightweight metadata for the book list
import { BOOK_METADATA } from '../data/bookMetadata';
const BOOKS = BOOK_METADATA as any[];

interface EbooksProps {
  lang: 'el' | 'en';
  addXp?: (amount: number, id: string, creditReward?: number) => void;
  completedIds: string[];
  xp?: number;
  level?: number;
}

export const Ebooks: React.FC<EbooksProps> = ({ lang, addXp, completedIds }) => {
  const [selectedBookId, setSelectedBookId] = useState<number | string | null>(null);
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  // Continuous reading: audio ends → auto-advance page → auto-play next page
  const [continuousMode, setContinuousMode] = useState(false);
  const [autoPlayPage, setAutoPlayPage] = useState(false);
  const { trackAction } = useEconomy();
  const bookContentRef = useRef<HTMLDivElement>(null);
  const readerScrollRef = useRef<HTMLDivElement>(null);

  const [loadedBook, setLoadedBook] = useState<any | null>(null);
  const [loadedQuizzes, setLoadedQuizzes] = useState<Record<number, any[]>>({});
  const [isLoadingBook, setIsLoadingBook] = useState(false);

  // Load full book data + quiz (decoupled so quiz failure doesn't prevent book display)
  useEffect(() => {
    if (selectedBookId === null) { setLoadedBook(null); return; }
    const bookId = typeof selectedBookId === 'number' ? selectedBookId : parseInt(String(selectedBookId));
    setIsLoadingBook(true);
    loadBookData(bookId)
      .then(bookArr => {
        setLoadedBook(bookArr[0] || null);
        setIsLoadingBook(false);
      })
      .catch(() => setIsLoadingBook(false));
    // Load quizzes independently (only once per session)
    if (Object.keys(loadedQuizzes).length === 0) {
      quizImporter().then(m => {
        if (typeof m.BOOK_QUIZZES === 'object' && !Array.isArray(m.BOOK_QUIZZES)) {
          setLoadedQuizzes(m.BOOK_QUIZZES);
        }
      }).catch(() => {});
    }
  }, [selectedBookId]); // eslint-disable-line react-hooks/exhaustive-deps

  const activeBookMeta = BOOKS.find(b => b.id === selectedBookId);
  const activeBook = loadedBook || activeBookMeta;
  const activeBookIndex = BOOKS.findIndex(b => b.id === selectedBookId);
  const hasNextBook = activeBookIndex !== -1 && activeBookIndex < BOOKS.length - 1;

  // Determine if using new pages format or legacy HTML
  const hasStructuredPages = !!loadedBook?.pages;

  // Pages for new format
  const structuredPages: BookPage[] = loadedBook?.pages || [];

  // Pages for legacy HTML format
  const htmlPages = useMemo(() => {
    if (hasStructuredPages) return [];
    if (!loadedBook?.content?.[lang]) return [''];
    return splitIntoPages(loadedBook.content[lang]);
  }, [loadedBook, lang, hasStructuredPages]);

  const totalPages = hasStructuredPages ? structuredPages.length : htmlPages.length;
  const isFirstPage = currentPage === 0;
  const isLastPage = currentPage >= totalPages - 1;

  // Scroll to top when page changes
  useEffect(() => {
    readerScrollRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const isBookLocked = () => false;

  const closeBook = () => {
    window.speechSynthesis.cancel();
    setSelectedBookId(null);
  };

  const openBook = (id: number | string) => {
    setSelectedBookId(id);
    setShowQuiz(false);
    setCurrentPage(0);
    setAutoPlayPage(false);
  };

  const handleQuizComplete = (score: number, total: number) => {
    if (activeBook && score === total) {
      trackAction('READ_BOOK');
      if (addXp) addXp(0, `ebook-${activeBook.id}`);
    }
  };

  const handleNextBook = () => {
    if (hasNextBook) {
      setSelectedBookId(BOOKS[activeBookIndex + 1].id);
      setShowQuiz(false);
      setCurrentPage(0);
      setAutoPlayPage(false);
    } else {
      setSelectedBookId(null);
    }
  };

  if (!BOOKS || BOOKS.length === 0) {
    return <div className="text-white text-center p-10">Library is currently empty.</div>;
  }

  // Current page data (structured format)
  const currentStructuredPage = hasStructuredPages ? structuredPages[currentPage] : null;

  return (
    <div className="relative w-full h-full overflow-y-auto overflow-x-hidden custom-scrollbar pb-32">

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* HEADER                                                     */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <div className="text-center py-10 space-y-4 relative z-10">
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-[1000] text-white uppercase italic tracking-tighter leading-none drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
          WISEBOT &{' '}<span className="text-transparent bg-clip-text magic-gradient">{lang === 'el' ? 'ΟΙ ΦΙΛΟΙ' : 'FRIENDS'}</span>
        </h1>
        <p className="text-white/50 font-bold uppercase tracking-[0.3em] text-xs md:text-sm drop-shadow-lg">
          {lang === 'el' ? `${BOOKS.length} ΙΣΤΟΡΙΕΣ • 1 ΒΙΒΛΙΟ = +2 CREDITS` : `${BOOKS.length} STORIES • 1 BOOK = +2 CREDITS`}
        </p>
      </div>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* BOOKSHELF GRID                                             */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <div className="max-w-6xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {BOOKS.map((book: any, index: number) => {
            const isCompleted = completedIds.includes(`ebook-${book.id}`);
            return (
              <motion.div
                key={book.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04, duration: 0.4 }}
                onClick={() => openBook(book.id)}
                className="group cursor-pointer"
              >
                {/* 3D Book Cover */}
                <div className="relative" style={{ perspective: '800px' }}>
                  <div
                    className="relative w-full rounded-lg overflow-hidden transition-all duration-500 group-hover:-translate-y-3"
                    style={{
                      aspectRatio: '3/4',
                      boxShadow: '4px 6px 20px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.05)',
                      transform: 'rotateY(0deg)',
                    }}
                  >
                    <SafeImage
                      src={book.cover ?? book.coverImage}
                      alt={typeof book.title === 'string' ? book.title : book.title[lang]}
                      loading="lazy"
                      wrapperClassName="absolute inset-0"
                      className="w-full h-full object-cover"
                    />

                    {/* Book spine shadow */}
                    <div className="absolute top-0 left-0 w-3 h-full bg-gradient-to-r from-black/40 to-transparent pointer-events-none" />

                    {/* Bottom gradient + title */}
                    <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/90 via-black/60 to-transparent pointer-events-none">
                      <div className="text-amber-300/80 text-[9px] font-black uppercase tracking-[0.2em] mb-0.5">
                        {book.theme?.[lang] || `STEP ${index + 1}`}
                      </div>
                      <h3 className="text-white font-[900] text-xs md:text-sm leading-tight uppercase italic tracking-tight">
                        {typeof book.title === 'string' ? book.title : book.title[lang]}
                      </h3>
                    </div>

                    {/* Book number */}
                    <div className="absolute top-2 left-2 w-6 h-6 bg-amber-900/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow pointer-events-none">
                      <span className="text-amber-100 text-[10px] font-black">{index + 1}</span>
                    </div>

                    {/* Completed badge */}
                    {isCompleted && (
                      <div className="absolute top-2 right-2 w-7 h-7 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg pointer-events-none">
                        <CheckCircle size={14} className="text-white" />
                      </div>
                    )}

                    {/* Hover glow */}
                    <div className="absolute inset-0 bg-amber-400/0 group-hover:bg-amber-400/10 transition-colors duration-500 pointer-events-none" />
                  </div>

                  {/* Page edges effect */}
                  <div className="absolute -bottom-1 left-1 right-1 h-1 bg-amber-100/20 rounded-b-lg" />
                  <div className="absolute -bottom-2 left-2 right-2 h-1 bg-amber-100/10 rounded-b-lg" />
                </div>

                {/* Credit reward */}
                <div className="mt-2 flex items-center justify-center gap-1 text-amber-400/50 text-[9px] font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                  <Zap size={9} fill="currentColor" /> +2 CREDITS
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* STORYBOOK READER                                           */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {selectedBookId && activeBook && (
          <div className="fixed inset-0 z-50">
            {/* Dark warm overlay */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={closeBook}
              className="absolute inset-0 bg-[#1a0f08]/95 backdrop-blur-sm cursor-pointer"
            />

            {/* Book container */}
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 30 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative z-10 flex items-center justify-center h-full p-3 md:p-6 pointer-events-none"
            >
              <div className="pointer-events-auto w-full max-w-3xl h-[94vh] md:h-[90vh] flex flex-col rounded-2xl md:rounded-3xl overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #faf5eb 0%, #f5ead6 50%, #f0e4cc 100%)',
                  boxShadow: '0 30px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(139,90,43,0.15), inset 0 1px 0 rgba(255,255,255,0.5), inset 0 -2px 8px rgba(139,90,43,0.08)',
                }}
              >

                {/* ─── Top Bar ─── */}
                <div className="flex items-center justify-between px-5 py-3 border-b border-amber-800/10 bg-gradient-to-r from-amber-900/[0.04] to-transparent shrink-0">
                  <div className="flex items-center gap-2">
                    <BookOpen size={14} className="text-amber-800/40" />
                    <span className="text-amber-800/50 text-[10px] font-bold uppercase tracking-[0.2em]">
                      {activeBook.stepLabel ? (typeof activeBook.stepLabel === 'string' ? activeBook.stepLabel : activeBook.stepLabel[lang]) : ''}
                    </span>
                  </div>
                  <button
                    onClick={closeBook}
                    className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-amber-900/10 text-amber-900/30 hover:text-amber-900/70 transition-all"
                  >
                    <X size={16} />
                  </button>
                </div>

                {/* ─── Loading overlay ─── */}
                {isLoadingBook && (
                  <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-4" style={{ background: 'linear-gradient(135deg, #faf5eb, #f5ead6)' }}>
                    <Loader2 size={36} className="text-amber-800/40 animate-spin" />
                    <p className="text-amber-800/40 font-bold text-xs uppercase tracking-[0.2em] animate-pulse">
                      {lang === 'el' ? 'ΑΝΟΙΓΩ ΤΟ ΒΙΒΛΙΟ...' : 'OPENING BOOK...'}
                    </p>
                  </div>
                )}

                {/* ─── Scrollable content ─── */}
                <div ref={readerScrollRef} className="flex-1 overflow-y-auto" style={{ scrollbarWidth: 'thin', scrollbarColor: '#c4a16a #f0e4cc' }}>
                  {!showQuiz ? (
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`page-${currentPage}-${selectedBookId}`}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -30 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                      >
                        {/* ════════════════════════════════════ */}
                        {/* NEW FORMAT: Structured pages         */}
                        {/* ════════════════════════════════════ */}
                        {hasStructuredPages && currentStructuredPage ? (
                          <div>
                            {/* Page illustration */}
                            {currentStructuredPage.image && (
                              <div className="relative w-full overflow-hidden bg-amber-950/5">
                                <img
                                  src={currentStructuredPage.image}
                                  alt={currentStructuredPage.title[lang]}
                                  className="w-full object-contain"
                                  style={{ maxHeight: '45vh' }}
                                />
                                {/* Gradient fade into page */}
                                <div className="absolute bottom-0 inset-x-0 h-16" style={{ background: 'linear-gradient(to top, #faf5eb, transparent)' }} />
                                {/* Image caption */}
                                {currentStructuredPage.imageCaption && (
                                  <div className="absolute bottom-3 left-0 right-0 text-center">
                                    <span className="text-amber-900/40 text-[10px] font-medium italic tracking-wide">
                                      {currentStructuredPage.imageCaption[lang]}
                                    </span>
                                  </div>
                                )}
                              </div>
                            )}

                            {/* Story text */}
                            <div ref={bookContentRef} className="px-6 md:px-14 py-6 md:py-10">
                              {/* Chapter title */}
                              <div className="text-center mb-8">
                                <div className="flex items-center justify-center gap-3 mb-3">
                                  <div className="h-px flex-1 max-w-12 bg-amber-800/20" />
                                  <span className="text-amber-800/30 text-[10px] font-bold uppercase tracking-[0.3em]">
                                    {lang === 'el' ? `ΣΕΛΙΔΑ ${currentPage + 1}` : `PAGE ${currentPage + 1}`}
                                  </span>
                                  <div className="h-px flex-1 max-w-12 bg-amber-800/20" />
                                </div>
                                <h2 className="text-2xl md:text-3xl text-amber-950 leading-tight" style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontWeight: 700 }}>
                                  {currentStructuredPage.title[lang]}
                                </h2>
                              </div>

                              {/* Decorative separator */}
                              <div className="flex items-center justify-center gap-2 mb-8">
                                <div className="h-px w-8 bg-amber-800/15" />
                                <div className="w-1.5 h-1.5 rounded-full bg-amber-800/20" />
                                <div className="h-px w-8 bg-amber-800/15" />
                              </div>

                              {/* Text content */}
                              <div className="space-y-4 text-amber-950/85 leading-[1.9] md:leading-[2]" style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: '1.05rem' }}>
                                {currentStructuredPage.text[lang].split('\n\n').map((paragraph, pIdx) => (
                                  <p key={pIdx} className={
                                    paragraph.startsWith('«') || paragraph.startsWith('"')
                                      ? 'text-amber-900 font-semibold'
                                      : ''
                                  }>
                                    {paragraph}
                                  </p>
                                ))}
                              </div>

                              {/* Bottom page ornament */}
                              <div className="flex items-center justify-center gap-2 mt-10 mb-4">
                                <div className="h-px w-12 bg-amber-800/10" />
                                <span className="text-amber-800/15 text-lg">✦</span>
                                <div className="h-px w-12 bg-amber-800/10" />
                              </div>
                            </div>
                          </div>
                        ) : (
                          /* ════════════════════════════════════ */
                          /* LEGACY FORMAT: HTML content          */
                          /* ════════════════════════════════════ */
                          <div className="px-6 md:px-14 py-8 md:py-12">
                            {currentPage === 0 && (
                              <div className="flex items-center justify-center gap-2 text-amber-800/40 font-bold text-[10px] uppercase tracking-[0.3em] mb-6">
                                <BookOpen size={12} /> {lang === 'el' ? 'Το Ταξίδι Ξεκινά' : 'The Journey Begins'}
                              </div>
                            )}
                            <div
                              ref={bookContentRef}
                              className="prose prose-lg max-w-none
                                prose-p:text-amber-950/80 prose-p:leading-relaxed
                                prose-headings:text-amber-950 prose-headings:font-bold
                                prose-blockquote:border-l-4 prose-blockquote:border-amber-700/30 prose-blockquote:bg-amber-900/5 prose-blockquote:p-4 prose-blockquote:rounded-r-xl
                                prose-strong:text-amber-900
                                prose-img:rounded-xl prose-img:shadow-lg"
                              style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(htmlPages[currentPage] || '') }}
                            />
                          </div>
                        )}

                        {/* ─── MEANING (last page only) ─── */}
                        {isLastPage && activeBook.meaning && (
                          <div className="mx-6 md:mx-14 mb-4 p-6 rounded-2xl border border-amber-800/10" style={{ background: 'linear-gradient(135deg, rgba(139,90,43,0.06), rgba(139,90,43,0.02))' }}>
                            <div className="flex items-center gap-2 mb-3">
                              <span className="text-lg">💎</span>
                              <h4 className="text-sm font-bold text-amber-900/60 uppercase tracking-[0.15em]">
                                {lang === 'el' ? 'Το νόημα αυτής της ιστορίας' : 'The meaning of this story'}
                              </h4>
                            </div>
                            <p className="text-amber-900/70 leading-relaxed italic" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                              {typeof activeBook.meaning === 'string' ? activeBook.meaning : activeBook.meaning[lang]}
                            </p>
                          </div>
                        )}

                        {/* ─── PARENT MESSAGE (last page only) ─── */}
                        {isLastPage && activeBook.parentMessage && (
                          <div className="mx-6 md:mx-14 mb-8 p-6 rounded-2xl border border-blue-800/10" style={{ background: 'linear-gradient(135deg, rgba(37,99,235,0.04), rgba(37,99,235,0.01))' }}>
                            <div className="flex items-center gap-2 mb-3">
                              <span className="text-lg">👨‍👩‍👧</span>
                              <h4 className="text-sm font-bold text-blue-900/50 uppercase tracking-[0.15em]">
                                {lang === 'el' ? 'Μήνυμα για γονείς' : 'Message for parents'}
                              </h4>
                            </div>
                            <p className="text-blue-900/60 leading-relaxed text-sm" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                              {typeof activeBook.parentMessage === 'string' ? activeBook.parentMessage : activeBook.parentMessage[lang]}
                            </p>
                          </div>
                        )}
                      </motion.div>
                    </AnimatePresence>
                  ) : (
                    <div className="p-6">
                      <EbookQuiz
                        questions={loadedQuizzes[Number(activeBook.id)] || []}
                        lang={lang}
                        onComplete={handleQuizComplete}
                        onRetry={() => setShowQuiz(false)}
                        onNextBook={handleNextBook}
                        hasNextBook={hasNextBook}
                      />
                    </div>
                  )}
                </div>

                {/* ─── Page Navigation ─── */}
                {!showQuiz && totalPages > 0 && (
                  <div className="flex items-center justify-between px-5 py-2.5 pr-20 xl:pr-5 border-t border-amber-800/10 bg-gradient-to-r from-amber-900/[0.03] to-transparent shrink-0">
                    <button
                      onClick={() => { setAutoPlayPage(false); setCurrentPage(p => Math.max(0, p - 1)); }}
                      disabled={isFirstPage}
                      className="flex items-center gap-1 px-3 py-2 rounded-lg text-[11px] font-bold uppercase tracking-wider transition-all disabled:opacity-15 text-amber-800/50 hover:text-amber-900 hover:bg-amber-900/5 active:scale-95"
                    >
                      <ChevronLeft size={14} /> {lang === 'el' ? 'ΠΙΣΩ' : 'BACK'}
                    </button>

                    {/* Page indicator dots */}
                    <div className="flex items-center gap-1.5">
                      {Array.from({ length: totalPages }).map((_, i) => (
                        <button
                          key={i}
                          onClick={() => { setAutoPlayPage(false); setCurrentPage(i); }}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            i === currentPage
                              ? 'bg-amber-800/60 w-5'
                              : i < currentPage
                                ? 'bg-amber-800/25'
                                : 'bg-amber-800/10'
                          }`}
                        />
                      ))}
                    </div>

                    <button
                      onClick={() => {
                        setAutoPlayPage(false);
                        if (isLastPage) setShowQuiz(true);
                        else setCurrentPage(p => p + 1);
                      }}
                      className={`flex items-center gap-1 px-3 py-2 rounded-lg text-[11px] font-bold uppercase tracking-wider transition-all active:scale-95 ${
                        isLastPage
                          ? 'bg-amber-800 text-amber-50 shadow-md hover:bg-amber-900'
                          : 'text-amber-800/50 hover:text-amber-900 hover:bg-amber-900/5'
                      }`}
                    >
                      {isLastPage ? (lang === 'el' ? 'QUIZ' : 'QUIZ') : (lang === 'el' ? 'ΕΠΟΜΕΝΗ' : 'NEXT')}
                      {isLastPage ? <ArrowRight size={14} /> : <ChevronRight size={14} />}
                    </button>
                  </div>
                )}

                {/* ─── TTS Player ─── */}
                {!showQuiz && (
                  <React.Fragment key={`tts-${currentPage}-${selectedBookId}`}>
                    <BookTTSPlayer
                      textContent={currentStructuredPage?.text[lang] || ''}
                      htmlContent={!hasStructuredPages ? (htmlPages[currentPage] || '') : undefined}
                      lang={lang}
                      contentRef={bookContentRef}
                      bookId={typeof activeBook.id === 'number' ? activeBook.id : parseInt(String(activeBook.id))}
                      pageNum={currentPage + 1}
                      autoPlay={autoPlayPage}
                      continuous={continuousMode}
                      onToggleContinuous={() => setContinuousMode(c => !c)}
                      onPlaybackEnd={() => {
                        if (continuousMode && !isLastPage) {
                          setAutoPlayPage(true);
                          setCurrentPage(p => p + 1);
                        } else {
                          setAutoPlayPage(false);
                        }
                      }}
                    />
                  </React.Fragment>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Ebooks;
