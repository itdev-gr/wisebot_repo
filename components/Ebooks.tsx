
import React, { useState, useRef, useCallback, useEffect, useMemo } from 'react';
import { motion as m, AnimatePresence } from 'framer-motion';
import {
  Book as BookIcon,
  Lock,
  CheckCircle,
  Zap,
  ArrowRight,
  Footprints,
  X,
  Volume2,
  Pause,
  Square,
  FastForward
} from 'lucide-react';
import { getBestVoice, ensureVoicesLoaded, createWarmUtterance, getVoiceLabel, htmlToParagraphs } from '../utils/ttsVoice';
// Individual upgraded book files (1 book per file) — ALL 26 BOOKS
import { BOOK_1 } from '../data/bookData_1';
import { BOOK_2 } from '../data/bookData_2';
import { BOOK_3 } from '../data/bookData_3';
import { BOOK_4 } from '../data/bookData_4';
import { BOOK_5 } from '../data/bookData_5';
import { BOOK_6 } from '../data/bookData_6';
import { BOOK_7 } from '../data/bookData_7';
import { BOOK_8 } from '../data/bookData_8';
import { BOOK_9 } from '../data/bookData_9';
import { BOOK_10 } from '../data/bookData_10';
import { BOOK_11 } from '../data/bookData_11';
import { BOOK_12 } from '../data/bookData_12';
import { BOOK_13 } from '../data/bookData_13';
import { BOOK_14 } from '../data/bookData_14';
import { BOOK_15 } from '../data/bookData_15';
import { BOOK_16 } from '../data/bookData_16';
import { BOOK_17 } from '../data/bookData_17';
import { BOOK_18 } from '../data/bookData_18';
import { BOOK_19 } from '../data/bookData_19';
import { BOOK_20 } from '../data/bookData_20';
import { BOOK_21 } from '../data/bookData_21';
import { BOOK_22 } from '../data/bookData_22';
import { BOOK_23 } from '../data/bookData_23';
import { BOOK_24 } from '../data/bookData_24';
import { BOOK_25 } from '../data/bookData_25';
import { BOOK_26 } from '../data/bookData_26';
import { BOOK_QUIZZES } from '../data/bookQuizData';
import { EbookQuiz } from './EbookQuiz';
import { useEconomy } from '../context/EconomyContext'; // Hook
import { SafeImage } from './SafeImage';

const motion = m as any;

// ─── BOOK TTS PLAYER ───────────────────────────────────────────
// Floating TTS player for eBook content. Extracts readable paragraphs
// from the HTML content and reads them aloud with paragraph highlighting.

interface BookTTSPlayerProps {
  htmlContent: string;
  lang: 'el' | 'en';
  contentRef: React.RefObject<HTMLDivElement | null>;
}

function BookTTSPlayer({ htmlContent, lang, contentRef }: BookTTSPlayerProps) {
  const paragraphs = useMemo(() => htmlToParagraphs(htmlContent), [htmlContent]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(-1);
  const [rate, setRate] = useState(1);
  const [voiceReady, setVoiceReady] = useState(false);
  const [voiceLabel, setVoiceLabelState] = useState('');
  const currentIdxRef = useRef(-1);
  const isPlayingRef = useRef(false);
  const chromeFixCleanupRef = useRef<(() => void) | null>(null);
  const bestVoiceRef = useRef<SpeechSynthesisVoice | null>(null);

  // Load best voice
  useEffect(() => {
    ensureVoicesLoaded().then(() => {
      const voice = getBestVoice(lang);
      bestVoiceRef.current = voice;
      if (voice) setVoiceLabelState(getVoiceLabel(voice));
      setVoiceReady(true);
    });
  }, [lang]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();
      chromeFixCleanupRef.current?.();
      isPlayingRef.current = false;
    };
  }, [htmlContent]);

  // Highlight the current paragraph in the rendered HTML
  useEffect(() => {
    if (!contentRef.current) return;
    const allBlocks = contentRef.current.querySelectorAll('p, h1, h2, h3, h4, h5, h6, li, blockquote, td');

    // Map paragraph index to DOM element by matching text content
    allBlocks.forEach((el) => {
      const htmlEl = el as HTMLElement;
      htmlEl.style.transition = 'all 0.3s ease';
      htmlEl.style.borderRadius = '8px';

      const elText = (htmlEl.textContent || '').trim();
      const matchIdx = paragraphs.findIndex(p => elText.length > 2 && elText.includes(p.substring(0, Math.min(40, p.length))));

      if (matchIdx >= 0 && matchIdx === currentIdx) {
        htmlEl.style.background = 'rgba(251, 191, 36, 0.15)';
        htmlEl.style.padding = '4px 8px';
        htmlEl.style.margin = '0 -8px';
        htmlEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else if (currentIdx >= 0 && matchIdx >= 0 && matchIdx < currentIdx) {
        htmlEl.style.background = 'transparent';
        htmlEl.style.padding = '';
        htmlEl.style.margin = '';
        htmlEl.style.opacity = '0.4';
      } else {
        htmlEl.style.background = 'transparent';
        htmlEl.style.padding = '';
        htmlEl.style.margin = '';
        htmlEl.style.opacity = currentIdx >= 0 ? '0.7' : '1';
      }
    });

    // Reset all opacities when not playing
    if (currentIdx < 0) {
      allBlocks.forEach((el) => {
        const htmlEl = el as HTMLElement;
        htmlEl.style.background = 'transparent';
        htmlEl.style.padding = '';
        htmlEl.style.margin = '';
        htmlEl.style.opacity = '1';
      });
    }
  }, [currentIdx, paragraphs, contentRef]);

  const speakParagraph = useCallback((idx: number) => {
    if (idx >= paragraphs.length) {
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
      paragraphs[idx], lang, rate, bestVoiceRef.current
    );

    utterance.onstart = () => {
      chromeFixCleanupRef.current?.();
      chromeFixCleanupRef.current = startChromeFix();
    };

    utterance.onend = () => {
      if (isPlayingRef.current) speakParagraph(currentIdxRef.current + 1);
    };

    utterance.onerror = (e: any) => {
      if (e.error !== 'interrupted' && e.error !== 'canceled') {
        console.warn('TTS error:', e.error);
      }
      if (isPlayingRef.current) speakParagraph(currentIdxRef.current + 1);
    };

    window.speechSynthesis.speak(utterance);
  }, [paragraphs, lang, rate]);

  const handlePlay = useCallback(() => {
    if (isPaused) {
      window.speechSynthesis.resume();
      setIsPaused(false);
      setIsPlaying(true);
      isPlayingRef.current = true;
      return;
    }
    window.speechSynthesis.cancel();
    setIsPlaying(true);
    setIsPaused(false);
    isPlayingRef.current = true;
    setTimeout(() => speakParagraph(0), 100);
  }, [isPaused, speakParagraph]);

  const handlePause = useCallback(() => {
    window.speechSynthesis.pause();
    setIsPaused(true);
    setIsPlaying(false);
    isPlayingRef.current = false;
  }, []);

  const handleStop = useCallback(() => {
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
      if (isPlayingRef.current || isPaused) {
        window.speechSynthesis.cancel();
        setIsPaused(false);
        isPlayingRef.current = true;
        setIsPlaying(true);
        const idx = currentIdxRef.current >= 0 ? currentIdxRef.current : 0;
        setTimeout(() => {
          const { utterance, startChromeFix } = createWarmUtterance(
            paragraphs[idx], lang, nextRate, bestVoiceRef.current
          );
          utterance.onstart = () => {
            chromeFixCleanupRef.current?.();
            chromeFixCleanupRef.current = startChromeFix();
          };
          utterance.onend = () => { if (isPlayingRef.current) speakParagraph(currentIdxRef.current + 1); };
          utterance.onerror = () => { if (isPlayingRef.current) speakParagraph(currentIdxRef.current + 1); };
          window.speechSynthesis.speak(utterance);
        }, 100);
      }
      return nextRate;
    });
  }, [paragraphs, lang, isPaused, speakParagraph]);

  const speedLabel = rate === 1 ? '1x' : rate === 1.3 ? '1.3x' : '0.8x';
  const active = isPlaying || isPaused;

  if (paragraphs.length === 0) return null;

  return (
    <div className="sticky top-0 z-20 bg-[#0f1115]/95 backdrop-blur-xl border-b border-white/5 -mx-8 md:-mx-16 px-8 md:px-16 py-3 mb-6 flex items-center gap-2 flex-wrap">
      {!isPlaying && !isPaused ? (
        <button
          onClick={handlePlay}
          disabled={!voiceReady}
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl font-black text-xs uppercase tracking-wider hover:brightness-110 hover:scale-105 active:scale-95 transition-all shadow-lg disabled:opacity-50"
        >
          <Volume2 size={15} />
          {lang === 'el' ? 'ΑΚΟΥΣΕ' : 'LISTEN'}
        </button>
      ) : (
        <>
          {isPlaying ? (
            <button onClick={handlePause} className="flex items-center gap-2 px-4 py-2 bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded-xl font-black text-xs uppercase tracking-wider hover:bg-amber-500/30 active:scale-95 transition-all">
              <Pause size={15} /> {lang === 'el' ? 'ΠΑΥΣΗ' : 'PAUSE'}
            </button>
          ) : (
            <button onClick={handlePlay} className="flex items-center gap-2 px-4 py-2 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded-xl font-black text-xs uppercase tracking-wider hover:bg-emerald-500/30 active:scale-95 transition-all">
              <Volume2 size={15} /> {lang === 'el' ? 'ΣΥΝΕΧΕΙΑ' : 'RESUME'}
            </button>
          )}
          <button onClick={handleStop} className="p-2 bg-red-500/10 text-red-400 border border-red-500/20 rounded-xl hover:bg-red-500/20 active:scale-95 transition-all">
            <Square size={13} />
          </button>
        </>
      )}

      <button onClick={handleSpeedToggle} className="flex items-center gap-1.5 px-3 py-2 bg-white/5 text-white/60 border border-white/10 rounded-xl font-black text-[10px] uppercase tracking-wider hover:bg-white/10 hover:text-white active:scale-95 transition-all">
        <FastForward size={13} /> {speedLabel}
      </button>

      {voiceLabel && !active && (
        <span className="text-white/20 text-[10px] font-bold uppercase tracking-widest">{voiceLabel}</span>
      )}
      {active && currentIdx >= 0 && (
        <span className="text-white/30 text-[10px] font-bold uppercase tracking-widest ml-auto">
          {currentIdx + 1}/{paragraphs.length}
        </span>
      )}
    </div>
  );
}

// All 26 books from individual premium upgraded files
const BOOKS = [
  ...(Array.isArray(BOOK_1) ? BOOK_1 : []),
  ...(Array.isArray(BOOK_2) ? BOOK_2 : []),
  ...(Array.isArray(BOOK_3) ? BOOK_3 : []),
  ...(Array.isArray(BOOK_4) ? BOOK_4 : []),
  ...(Array.isArray(BOOK_5) ? BOOK_5 : []),
  ...(Array.isArray(BOOK_6) ? BOOK_6 : []),
  ...(Array.isArray(BOOK_7) ? BOOK_7 : []),
  ...(Array.isArray(BOOK_8) ? BOOK_8 : []),
  ...(Array.isArray(BOOK_9) ? BOOK_9 : []),
  ...(Array.isArray(BOOK_10) ? BOOK_10 : []),
  ...(Array.isArray(BOOK_11) ? BOOK_11 : []),
  ...(Array.isArray(BOOK_12) ? BOOK_12 : []),
  ...(Array.isArray(BOOK_13) ? BOOK_13 : []),
  ...(Array.isArray(BOOK_14) ? BOOK_14 : []),
  ...(Array.isArray(BOOK_15) ? BOOK_15 : []),
  ...(Array.isArray(BOOK_16) ? BOOK_16 : []),
  ...(Array.isArray(BOOK_17) ? BOOK_17 : []),
  ...(Array.isArray(BOOK_18) ? BOOK_18 : []),
  ...(Array.isArray(BOOK_19) ? BOOK_19 : []),
  ...(Array.isArray(BOOK_20) ? BOOK_20 : []),
  ...(Array.isArray(BOOK_21) ? BOOK_21 : []),
  ...(Array.isArray(BOOK_22) ? BOOK_22 : []),
  ...(Array.isArray(BOOK_23) ? BOOK_23 : []),
  ...(Array.isArray(BOOK_24) ? BOOK_24 : []),
  ...(Array.isArray(BOOK_25) ? BOOK_25 : []),
  ...(Array.isArray(BOOK_26) ? BOOK_26 : [])
];

interface EbooksProps {
  lang: 'el' | 'en';
  addXp?: (amount: number, id: string, creditReward?: number) => void;
  completedIds: string[];
  xp?: number;
  level?: number;
}

export const Ebooks: React.FC<EbooksProps> = ({ lang, addXp, completedIds }) => {
  // Allow string IDs to match Book interface
  const [selectedBookId, setSelectedBookId] = useState<number | string | null>(null);
  const [showQuiz, setShowQuiz] = useState(false);
  const { trackAction } = useEconomy();
  const bookContentRef = useRef<HTMLDivElement>(null);

  const activeBook = BOOKS.find(b => b.id === selectedBookId);
  const activeBookIndex = BOOKS.findIndex(b => b.id === selectedBookId);
  const hasNextBook = activeBookIndex !== -1 && activeBookIndex < BOOKS.length - 1;

  const isBookLocked = (bookId: number | string) => {
    return false; // Always return false for testing
  };

  const closeBook = () => {
    window.speechSynthesis.cancel();
    setSelectedBookId(null);
  };

  const openBook = (id: number | string) => {
    if (isBookLocked(id)) return;
    setSelectedBookId(id);
    setShowQuiz(false);
  };

  const handleQuizComplete = (score: number, total: number) => {
    if (activeBook && score === total) {
      // 1. Economy Track (Credits & Badges)
      trackAction('READ_BOOK');
      
      // 2. Mark as Completed in App State (Shows Green Checkmark)
      if (addXp) {
        addXp(0, `ebook-${activeBook.id}`);
      }
    }
  };

  const handleNextBook = () => {
    if (hasNextBook) {
      setSelectedBookId(BOOKS[activeBookIndex + 1].id);
      setShowQuiz(false);
    } else {
      setSelectedBookId(null);
    }
  };

  const handleRetryStory = () => {
    setShowQuiz(false);
  };

  if (!BOOKS || BOOKS.length === 0) {
    return <div className="text-white text-center p-10">Library is currently empty.</div>;
  }

  return (
    <div className="relative w-full h-full overflow-y-auto overflow-x-hidden custom-scrollbar pb-32">
      
      {/* HEADER */}
      <div className="text-center py-10 space-y-4 relative z-10">
         <h2 className="text-3xl sm:text-5xl md:text-7xl font-[1000] text-white uppercase italic tracking-tighter leading-none drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
            WISEBOT &{' '}<span className="text-transparent bg-clip-text magic-gradient">{lang === 'el' ? 'ΟΙ ΦΙΛΟΙ' : 'FRIENDS'}</span>
         </h2>
         <p className="text-white/50 font-bold uppercase tracking-[0.3em] text-xs md:text-sm drop-shadow-lg">
            {lang === 'el' ? '1 BOOK = +1 CREDIT' : '1 BOOK = +1 CREDIT'}
         </p>
      </div>

      {/* BOOKS LIST */}
      <div className="max-w-5xl mx-auto px-4 relative">
         <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500/20 via-purple-500/20 to-transparent -translate-x-1/2 hidden md:block"></div>

         <div className="space-y-12 relative z-10">
            {BOOKS.map((book, index) => {
               const isCompleted = completedIds.includes(`ebook-${book.id}`);
               const isLocked = isBookLocked(book.id);
               const isEven = index % 2 === 0;
               
               return (
                  <motion.div 
                     key={book.id}
                     initial={{ opacity: 0, y: 50 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     className={`flex flex-col md:flex-row items-center gap-8 ${isEven ? '' : 'md:flex-row-reverse'}`}
                  >
                     <div className={`absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#0f1014] border-4 flex items-center justify-center z-20 hidden md:flex ${isLocked ? 'border-white/5 text-white/20' : 'border-blue-500/30 text-blue-400'}`}>
                        {isLocked ? <Lock size={12} /> : <span className="font-black text-xs">{index + 1}</span>}
                     </div>

                     <div className="flex-1 w-full group">
                        <div 
                          onClick={() => openBook(book.id)}
                          className={`relative rounded-[2.5rem] p-2 border-2 transition-all duration-500 overflow-hidden bg-slate-950/85 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5)]
                          ${isLocked
                             ? 'border-white/5 opacity-60 cursor-not-allowed grayscale'
                             : 'border-white/10 hover:border-purple-500/50 hover:shadow-[0_8px_40px_rgba(124,58,237,0.2)] cursor-pointer'
                          }`}
                        >
                           
                           {!isLocked && <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>}

                           <div className="flex flex-col sm:flex-row gap-6 p-4">
                              <div className="w-full sm:w-32 h-40 rounded-[2rem] overflow-hidden shrink-0 relative shadow-lg bg-[#0f1014]">
                                 <SafeImage src={book.cover ?? book.coverImage} alt="Cover" loading="eager" wrapperClassName="absolute inset-0" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                 <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                                 {isCompleted && (
                                    <div className="absolute inset-0 bg-emerald-500/20 backdrop-blur-[1px] flex items-center justify-center">
                                       <CheckCircle size={32} className="text-emerald-400 drop-shadow-lg" />
                                    </div>
                                 )}
                              </div>

                              <div className="flex-1 flex flex-col justify-center space-y-2">
                                 <div className="flex items-center gap-3">
                                    <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest italic">
                                      {book.stepLabel ? book.stepLabel[lang] : `STEP ${index + 1} • ${book.theme?.[lang] || 'STORY'}`}
                                    </span>
                                 </div>
                                 <h3 className="text-2xl font-[1000] text-white uppercase italic tracking-tighter leading-tight group-hover:text-purple-300 transition-colors">
                                    {typeof book.title === 'string' ? book.title : book.title[lang]}
                                 </h3>
                                 <p className="text-white/50 text-xs font-bold italic line-clamp-2 pr-4">{book.description?.[lang]}</p>
                                 
                                 <div className="pt-4 flex items-center gap-4">
                                    {/* UPDATED REWARD BADGE */}
                                    <div className="px-3 py-1 bg-amber-500/10 rounded-lg border border-amber-500/20 text-[10px] font-black text-amber-400 flex items-center gap-1.5 uppercase tracking-widest">
                                       <Zap size={12} fill="currentColor" /> +1 CREDIT
                                    </div>
                                    {!isLocked && (
                                       <div className="text-white/20 group-hover:translate-x-2 transition-transform">
                                          <ArrowRight size={20} />
                                       </div>
                                    )}
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div className="flex-1 hidden md:block"></div>
                  </motion.div>
               );
            })}
         </div>
      </div>

      {/* --- READER & QUIZ MODAL --- */}
      <AnimatePresence>
        {selectedBookId && activeBook && (
          <div className="fixed inset-0 z-50 flex items-center justify-end md:pl-80 md:pr-4 p-4">
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={closeBook}
              className="absolute inset-0 bg-[#000]/95 backdrop-blur-xl cursor-pointer"
            />

            <motion.div
              layoutId={`book-${selectedBookId}`}
              initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: 50, opacity: 0 }}
              className="relative w-full h-[95vh] bg-[#0f1115] border border-white/10 rounded-[3rem] shadow-2xl flex overflow-hidden"
            >
               <button onClick={closeBook} className="absolute top-6 right-6 z-30 w-12 h-12 flex items-center justify-center bg-white/5 hover:bg-red-500/80 rounded-full border border-white/5 transition-all group backdrop-blur-md shadow-2xl">
                  <X className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
               </button>

               <div className="hidden lg:block w-[40%] h-full min-h-[20rem] relative overflow-hidden border-r border-white/5 bg-[#0f1115]">
                  <SafeImage src={activeBook.cover ?? activeBook.coverImage} alt="Cover" loading="eager" wrapperClassName="absolute inset-0" className="w-full h-full object-cover opacity-60 grayscale-[0.3]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f1115] via-transparent to-transparent opacity-90" />
                  <div className="absolute bottom-12 left-12 right-12 space-y-6">
                     <h1 className="text-5xl font-[1000] text-white uppercase italic tracking-tighter leading-none">{typeof activeBook.title === 'string' ? activeBook.title : activeBook.title[lang]}</h1>
                     <div className="w-20 h-1 bg-blue-500 rounded-full"></div>
                     <p className="text-xl text-white/80 font-bold italic">"{activeBook.meaning?.[lang]}"</p>
                  </div>
               </div>

               <div className="flex-1 h-full overflow-y-auto custom-scrollbar p-8 md:p-16 relative">
                  {!showQuiz ? (
                     <div className="max-w-2xl mx-auto space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        {/* TTS Player - sticky bar */}
                        {activeBook.content?.[lang] && (
                          <BookTTSPlayer
                            htmlContent={activeBook.content[lang]}
                            lang={lang}
                            contentRef={bookContentRef}
                          />
                        )}

                        <div className="flex items-center gap-3 text-blue-400 font-black text-xs uppercase tracking-[0.3em] italic mb-8">
                           <Footprints size={16} /> The Journey Begins
                        </div>
                        <div
                           ref={bookContentRef}
                           className="prose prose-invert prose-lg md:prose-xl max-w-none
                           prose-p:text-gray-300 prose-p:font-medium prose-p:leading-relaxed
                           prose-headings:text-white prose-headings:font-black prose-headings:uppercase prose-headings:italic
                           prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-blue-500/10 prose-blockquote:p-6 prose-blockquote:rounded-r-xl"
                           dangerouslySetInnerHTML={{ __html: activeBook.content?.[lang] || '' }}
                        />
                        <div className="pt-12">
                           <button
                              onClick={() => setShowQuiz(true)}
                              className="w-full py-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-[2rem] font-[1000] text-white text-xl uppercase italic tracking-widest shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3"
                           >
                              {lang === 'el' ? 'ΚΑΝΕ ΤΟ QUIZ' : 'TAKE THE QUIZ'} <ArrowRight size={24} />
                           </button>
                        </div>
                     </div>
                  ) : (
                     <EbookQuiz 
                       questions={BOOK_QUIZZES[Number(activeBook.id)] || []} 
                       lang={lang}
                       onComplete={handleQuizComplete}
                       onRetry={handleRetryStory}
                       onNextBook={handleNextBook}
                       hasNextBook={hasNextBook}
                     />
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
