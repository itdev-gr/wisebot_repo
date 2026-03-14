
import React, { useState, useEffect } from 'react';
import { motion as m, AnimatePresence } from 'framer-motion';
import {
  BookOpen, Microscope, Map, Medal, Anchor, Rocket,
  Brain, Shield, Zap, Sparkles, Wand2, Crown,
  ArrowLeft, Star, PawPrint, Calculator, Baby, Waves, Users, Play
} from 'lucide-react';
import QuizEngine, { getQuizProgress, clearQuizProgress } from './QuizEngine';
import { SEA_QUIZ, KIDS_QUIZ, SPACE_QUIZ, SPORTS_QUIZ, ANIMALS_QUIZ, MATH_QUIZ } from '../data/generalQuizData';
import { HERO_FACTS_QUIZ, HERO_SCENARIOS_QUIZ } from '../data/heroQuizData';

const motion = m as any;

const GENERAL_CATEGORIES = [
  { id: 'sea', name: { el: 'ΘΑΛΑΣΣΑ', en: 'SEA' }, icon: <Waves size={24} />, color: 'bg-cyan-500', border: 'border-cyan-500' },
  { id: 'kids', name: { el: 'ΠΑΙΔΙΚΑ', en: 'KIDS' }, icon: <Baby size={24} />, color: 'bg-pink-500', border: 'border-pink-500' },
  { id: 'space', name: { el: 'ΔΙΑΣΤΗΜΑ', en: 'SPACE' }, icon: <Rocket size={24} />, color: 'bg-indigo-500', border: 'border-indigo-500' },
  { id: 'sports', name: { el: 'ΑΘΛΗΤΙΣΜΟΣ', en: 'SPORTS' }, icon: <Medal size={24} />, color: 'bg-red-500', border: 'border-red-500' },
  { id: 'animals', name: { el: 'ΖΩΑΚΙΑ', en: 'ANIMALS' }, icon: <PawPrint size={24} />, color: 'bg-emerald-500', border: 'border-emerald-500' },
  { id: 'math', name: { el: 'ΜΑΘΗΜΑΤΙΚΑ', en: 'MATH' }, icon: <Calculator size={24} />, color: 'bg-amber-500', border: 'border-amber-500' },
];

// All quiz category IDs for progress checking
const ALL_CATEGORY_IDS = ['sea', 'kids', 'space', 'sports', 'animals', 'math', 'facts', 'scenarios'];

export default function Quiz({ lang }: { lang: 'el' | 'en' }) {
  const [activeQuiz, setActiveQuiz] = useState<{ type: 'hero' | 'general', id: string } | null>(null);
  const [challengeData, setChallengeData] = useState<{ from: string; score: number } | null>(null);
  // Track which categories have saved progress (for showing CONTINUE badge)
  const [savedCategories, setSavedCategories] = useState<Record<string, number>>({});

  // Check for saved progress across all categories
  const refreshSavedProgress = () => {
    const saved: Record<string, number> = {};
    ALL_CATEGORY_IDS.forEach(id => {
      const progress = getQuizProgress(id);
      if (progress) saved[id] = progress.currentIdx + 1; // question number (1-indexed)
    });
    setSavedCategories(saved);
  };

  // Parse challenge URL params on mount + check saved progress
  useEffect(() => {
    refreshSavedProgress();

    const hash = window.location.hash;
    const queryIdx = hash.indexOf('?');
    if (queryIdx > -1) {
      const params = new URLSearchParams(hash.substring(queryIdx));
      const category = params.get('challenge');
      const score = params.get('score');
      const from = params.get('from');
      if (category && score && from) {
        setChallengeData({
          score: parseInt(score),
          from: decodeURIComponent(from),
        });
        const isHero = category === 'facts' || category === 'scenarios';
        setActiveQuiz({ type: isHero ? 'hero' : 'general', id: category });
        // Clean URL to prevent re-triggering
        window.history.replaceState(null, '', window.location.pathname + '#/quiz');
      }
    }
  }, []);

  const t = {
    heroTitle: lang === 'el' ? 'ΗΡΩΙΚΕΣ ΓΝΩΣΕΙΣ' : 'HERO KNOWLEDGE',
    generalTitle: lang === 'el' ? 'ΓΕΝΙΚΕΣ ΓΝΩΣΕΙΣ' : 'GENERAL KNOWLEDGE',
    heroDesc: lang === 'el' ? '15 Επίπεδα για τους Θρύλους' : '15 Levels of Legends',
    generalDesc: lang === 'el' ? 'Εξερεύνησε τον κόσμο' : 'Explore the world',
    back: lang === 'el' ? 'ΠΙΣΩ ΣΤΙΣ ΕΠΙΛΟΓΕΣ' : 'BACK TO MENU'
  };

  const startQuiz = (type: 'hero' | 'general', id: string) => {
    setActiveQuiz({ type, id });
  };

  const getQuestions = (id: string) => {
      switch(id) {
          case 'facts': return HERO_FACTS_QUIZ;
          case 'scenarios': return HERO_SCENARIOS_QUIZ;
          case 'sea': return SEA_QUIZ;
          case 'kids': return KIDS_QUIZ;
          case 'space': return SPACE_QUIZ;
          case 'sports': return SPORTS_QUIZ;
          case 'animals': return ANIMALS_QUIZ;
          case 'math': return MATH_QUIZ;
          default: return [];
      }
  }

  return (
    <div className="max-w-6xl mx-auto py-8 px-4 pb-32 min-h-full">
      
      <AnimatePresence mode="wait">
        {activeQuiz ? (
          <motion.div 
            key="quiz-engine"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
          >
            <button
              onClick={() => { setActiveQuiz(null); setChallengeData(null); refreshSavedProgress(); }}
              className="flex items-center gap-2 text-white/50 hover:text-white font-bold uppercase tracking-widest text-xs mb-8 transition-colors"
            >
              <ArrowLeft size={16} /> {t.back}
            </button>

            {/* Challenge banner at top */}
            {challengeData && (
              <div className="mb-6 p-4 bg-gradient-to-r from-purple-500/10 to-fuchsia-500/10 border border-purple-500/20 rounded-2xl flex items-center gap-3">
                <Users size={20} className="text-purple-400 shrink-0" />
                <p className="text-purple-300 font-bold text-sm">
                  {lang === 'el'
                    ? `Πρόκληση απο ${challengeData.from}! Σκορ: ${challengeData.score}`
                    : `Challenge from ${challengeData.from}! Score: ${challengeData.score}`}
                </p>
              </div>
            )}

            <QuizEngine
              topic={activeQuiz.type === 'hero' ? (activeQuiz.id === 'facts' ? (lang === 'el' ? 'Θρυλικά Γεγονότα' : 'Hero Facts') : (lang === 'el' ? 'Σενάρια Ηρώων' : 'Hero Scenarios')) : GENERAL_CATEGORIES.find(c => c.id === activeQuiz.id)?.name[lang] || ''}
              questions={getQuestions(activeQuiz.id)}
              onRestart={() => { setActiveQuiz(null); setChallengeData(null); refreshSavedProgress(); }}
              lang={lang}
              categoryId={activeQuiz.id}
              challengeData={challengeData}
            />
          </motion.div>
        ) : (
          <motion.div 
            key="menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-12"
          >
            <div className="text-center space-y-4">
              <h2 className="text-5xl md:text-7xl font-[1000] text-white tracking-tighter uppercase italic leading-none">
                WISE <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">QUIZ</span>
              </h2>
              <p className="text-white/40 font-bold uppercase tracking-[0.3em] text-xs md:text-sm">
                {lang === 'el' ? 'ΚΕΡΔΙΣΕ BADGES & CREDITS' : 'EARN BADGES & CREDITS'}
              </p>
            </div>

            {/* HERO SECTION */}
            <div className="space-y-6">
               <div className="flex items-center gap-3 px-2">
                  <Crown size={24} className="text-amber-400" />
                  <h3 className="text-xl font-[1000] text-white uppercase italic tracking-tighter">{t.heroTitle}</h3>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <button
                    onClick={() => startQuiz('hero', 'facts')}
                    className="group relative h-40 rounded-[2.5rem] overflow-hidden border-2 border-white/10 bg-gradient-to-br from-amber-900/40 to-black hover:border-amber-500/50 transition-all text-left p-8"
                  >
                     <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-40 transition-opacity">
                        <Star size={80} className="text-amber-400 rotate-12" />
                     </div>
                     {savedCategories['facts'] && (
                       <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 px-3 py-1.5 bg-emerald-500/20 border border-emerald-500/30 rounded-full animate-pulse">
                         <Play size={10} className="text-emerald-400 fill-emerald-400" />
                         <span className="text-emerald-300 text-[9px] font-black uppercase tracking-wider">
                           {lang === 'el' ? 'ΣΥΝΕΧΕΙΑ' : 'CONTINUE'}
                         </span>
                       </div>
                     )}
                     <div className="relative z-10">
                        <div className="flex items-center gap-2 mb-2">
                           <h4 className="text-2xl font-[1000] text-white uppercase italic tracking-tighter group-hover:text-amber-400 transition-colors">{lang === 'el' ? 'Θρυλικά Γεγονότα' : 'Legendary Facts'}</h4>
                           <span className="bg-amber-500/20 text-amber-300 text-[9px] px-2 py-0.5 rounded border border-amber-500/20 uppercase font-black tracking-wider">{lang === 'el' ? '15 Επίπεδα' : '15 Levels'}</span>
                        </div>
                        <p className="text-white/50 text-xs font-bold uppercase tracking-widest">{t.heroDesc}</p>
                     </div>
                  </button>

                  <button
                    onClick={() => startQuiz('hero', 'scenarios')}
                    className="group relative h-40 rounded-[2.5rem] overflow-hidden border-2 border-white/10 bg-gradient-to-br from-blue-900/40 to-black hover:border-blue-500/50 transition-all text-left p-8"
                  >
                     <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-40 transition-opacity">
                        <Shield size={80} className="text-blue-400 -rotate-12" />
                     </div>
                     {savedCategories['scenarios'] && (
                       <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 px-3 py-1.5 bg-emerald-500/20 border border-emerald-500/30 rounded-full animate-pulse">
                         <Play size={10} className="text-emerald-400 fill-emerald-400" />
                         <span className="text-emerald-300 text-[9px] font-black uppercase tracking-wider">
                           {lang === 'el' ? 'ΣΥΝΕΧΕΙΑ' : 'CONTINUE'}
                         </span>
                       </div>
                     )}
                     <div className="relative z-10">
                        <div className="flex items-center gap-2 mb-2">
                           <h4 className="text-2xl font-[1000] text-white uppercase italic tracking-tighter group-hover:text-blue-400 transition-colors">{lang === 'el' ? 'Σενάρια Ηρώων' : 'Hero Scenarios'}</h4>
                           <span className="bg-blue-500/20 text-blue-300 text-[9px] px-2 py-0.5 rounded border border-blue-500/20 uppercase font-black tracking-wider">{lang === 'el' ? '15 Επίπεδα' : '15 Levels'}</span>
                        </div>
                        <p className="text-white/50 text-xs font-bold uppercase tracking-widest">{lang === 'el' ? 'Τι θα έκανε ένας ήρωας;' : 'What would a hero do?'}</p>
                     </div>
                  </button>
               </div>
            </div>

            {/* GENERAL SECTION */}
            <div className="space-y-6">
               <div className="flex items-center gap-3 px-2">
                  <Brain size={24} className="text-purple-400" />
                  <h3 className="text-xl font-[1000] text-white uppercase italic tracking-tighter">{t.generalTitle}</h3>
               </div>

               <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {GENERAL_CATEGORIES.map((cat) => (
                     <button
                        key={cat.id}
                        onClick={() => startQuiz('general', cat.id)}
                        className={`relative flex flex-col items-center justify-center gap-4 p-6 rounded-[2rem] border-2 border-white/5 bg-white/5 hover:bg-white/10 hover:scale-105 hover:${cat.border} transition-all group aspect-square`}
                     >
                        {savedCategories[cat.id] && (
                          <div className="absolute top-3 right-3 z-10 flex items-center gap-1 px-2 py-1 bg-emerald-500/20 border border-emerald-500/30 rounded-full animate-pulse">
                            <Play size={8} className="text-emerald-400 fill-emerald-400" />
                            <span className="text-emerald-300 text-[7px] font-black uppercase tracking-wider">
                              Q{savedCategories[cat.id]}
                            </span>
                          </div>
                        )}
                        <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white shadow-lg ${cat.color} group-hover:scale-110 transition-transform`}>
                           {cat.icon}
                        </div>
                        <span className="text-xs font-black text-white/70 uppercase tracking-widest text-center group-hover:text-white">
                           {cat.name[lang]}
                        </span>
                     </button>
                  ))}
               </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
