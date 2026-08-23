/**
 * GEO EXPLORER — geography quiz for young explorers
 * ==================================================
 * 10 questions per run drawn from a ~30-question pool: capitals,
 * continents and flag recognition (big flag emoji as the visual).
 * Bilingual el/en. Earns real credits via the shared game-reward helper.
 */
import React, { useState, useEffect, useRef, useCallback } from 'react';
import GameBackButton from './GameBackButton';
import { motion as m, AnimatePresence } from 'framer-motion';
import { Globe2, Trophy, Zap, Play, RotateCcw, MapPin } from 'lucide-react';
import { useEconomy } from '../../context/EconomyContext';
import { grantGameReward } from './gameRewards';

const motion = m as any;
const AnimatePresenceAny = AnimatePresence as any;

interface GeoExplorerProps {
  lang: 'el' | 'en';
  onBack: () => void;
}

const QUESTIONS_PER_RUN = 10;

interface BiText {
  el: string;
  en: string;
}

interface GeoQuestion {
  q: BiText;
  /** Big visual (flag emoji) shown instead of relying on text alone */
  visual?: string;
  /** 4 answers — index 0 is always the correct one (shuffled at runtime) */
  answers: BiText[];
}

interface RunQuestion {
  q: BiText;
  visual?: string;
  options: BiText[];
  correctIdx: number;
}

const POOL: GeoQuestion[] = [
  // ---- Capitals ----
  { q: { el: 'Ποια είναι η πρωτεύουσα της Ελλάδας;', en: 'What is the capital of Greece?' }, answers: [{ el: 'Αθήνα', en: 'Athens' }, { el: 'Θεσσαλονίκη', en: 'Thessaloniki' }, { el: 'Πάτρα', en: 'Patras' }, { el: 'Ηράκλειο', en: 'Heraklion' }] },
  { q: { el: 'Ποια είναι η πρωτεύουσα της Γαλλίας;', en: 'What is the capital of France?' }, answers: [{ el: 'Παρίσι', en: 'Paris' }, { el: 'Λυών', en: 'Lyon' }, { el: 'Μασσαλία', en: 'Marseille' }, { el: 'Νίκαια', en: 'Nice' }] },
  { q: { el: 'Ποια είναι η πρωτεύουσα της Ιταλίας;', en: 'What is the capital of Italy?' }, answers: [{ el: 'Ρώμη', en: 'Rome' }, { el: 'Μιλάνο', en: 'Milan' }, { el: 'Βενετία', en: 'Venice' }, { el: 'Νάπολη', en: 'Naples' }] },
  { q: { el: 'Ποια είναι η πρωτεύουσα της Ισπανίας;', en: 'What is the capital of Spain?' }, answers: [{ el: 'Μαδρίτη', en: 'Madrid' }, { el: 'Βαρκελώνη', en: 'Barcelona' }, { el: 'Σεβίλλη', en: 'Seville' }, { el: 'Βαλένθια', en: 'Valencia' }] },
  { q: { el: 'Ποια είναι η πρωτεύουσα της Αγγλίας;', en: 'What is the capital of England?' }, answers: [{ el: 'Λονδίνο', en: 'London' }, { el: 'Μάντσεστερ', en: 'Manchester' }, { el: 'Λίβερπουλ', en: 'Liverpool' }, { el: 'Οξφόρδη', en: 'Oxford' }] },
  { q: { el: 'Ποια είναι η πρωτεύουσα της Γερμανίας;', en: 'What is the capital of Germany?' }, answers: [{ el: 'Βερολίνο', en: 'Berlin' }, { el: 'Μόναχο', en: 'Munich' }, { el: 'Αμβούργο', en: 'Hamburg' }, { el: 'Φρανκφούρτη', en: 'Frankfurt' }] },
  { q: { el: 'Ποια είναι η πρωτεύουσα της Αιγύπτου;', en: 'What is the capital of Egypt?' }, answers: [{ el: 'Κάιρο', en: 'Cairo' }, { el: 'Αλεξάνδρεια', en: 'Alexandria' }, { el: 'Λούξορ', en: 'Luxor' }, { el: 'Ασουάν', en: 'Aswan' }] },
  { q: { el: 'Ποια είναι η πρωτεύουσα της Ιαπωνίας;', en: 'What is the capital of Japan?' }, answers: [{ el: 'Τόκιο', en: 'Tokyo' }, { el: 'Οσάκα', en: 'Osaka' }, { el: 'Κιότο', en: 'Kyoto' }, { el: 'Χιροσίμα', en: 'Hiroshima' }] },
  { q: { el: 'Ποια είναι η πρωτεύουσα της Πορτογαλίας;', en: 'What is the capital of Portugal?' }, answers: [{ el: 'Λισαβόνα', en: 'Lisbon' }, { el: 'Πόρτο', en: 'Porto' }, { el: 'Φάρο', en: 'Faro' }, { el: 'Μπράγκα', en: 'Braga' }] },
  { q: { el: 'Ποια είναι η πρωτεύουσα των ΗΠΑ;', en: 'What is the capital of the USA?' }, answers: [{ el: 'Ουάσινγκτον', en: 'Washington D.C.' }, { el: 'Νέα Υόρκη', en: 'New York' }, { el: 'Λος Άντζελες', en: 'Los Angeles' }, { el: 'Σικάγο', en: 'Chicago' }] },
  // ---- Continents ----
  { q: { el: 'Σε ποια ήπειρο είναι η Αίγυπτος;', en: 'On which continent is Egypt?' }, answers: [{ el: 'Αφρική', en: 'Africa' }, { el: 'Ασία', en: 'Asia' }, { el: 'Ευρώπη', en: 'Europe' }, { el: 'Ωκεανία', en: 'Oceania' }] },
  { q: { el: 'Σε ποια ήπειρο είναι η Κίνα;', en: 'On which continent is China?' }, answers: [{ el: 'Ασία', en: 'Asia' }, { el: 'Αφρική', en: 'Africa' }, { el: 'Ευρώπη', en: 'Europe' }, { el: 'Β. Αμερική', en: 'N. America' }] },
  { q: { el: 'Σε ποια ήπειρο είναι η Βραζιλία;', en: 'On which continent is Brazil?' }, answers: [{ el: 'Ν. Αμερική', en: 'S. America' }, { el: 'Β. Αμερική', en: 'N. America' }, { el: 'Αφρική', en: 'Africa' }, { el: 'Ευρώπη', en: 'Europe' }] },
  { q: { el: 'Σε ποια ήπειρο είναι η Γαλλία;', en: 'On which continent is France?' }, answers: [{ el: 'Ευρώπη', en: 'Europe' }, { el: 'Ασία', en: 'Asia' }, { el: 'Αφρική', en: 'Africa' }, { el: 'Ν. Αμερική', en: 'S. America' }] },
  { q: { el: 'Σε ποια ήπειρο είναι η Αυστραλία;', en: 'On which continent is Australia?' }, answers: [{ el: 'Ωκεανία', en: 'Oceania' }, { el: 'Ασία', en: 'Asia' }, { el: 'Αφρική', en: 'Africa' }, { el: 'Ευρώπη', en: 'Europe' }] },
  { q: { el: 'Σε ποια ήπειρο είναι ο Καναδάς;', en: 'On which continent is Canada?' }, answers: [{ el: 'Β. Αμερική', en: 'N. America' }, { el: 'Ν. Αμερική', en: 'S. America' }, { el: 'Ευρώπη', en: 'Europe' }, { el: 'Ασία', en: 'Asia' }] },
  { q: { el: 'Σε ποια ήπειρο είναι η Ινδία;', en: 'On which continent is India?' }, answers: [{ el: 'Ασία', en: 'Asia' }, { el: 'Αφρική', en: 'Africa' }, { el: 'Ωκεανία', en: 'Oceania' }, { el: 'Ευρώπη', en: 'Europe' }] },
  { q: { el: 'Σε ποια ήπειρο είναι η Νιγηρία;', en: 'On which continent is Nigeria?' }, answers: [{ el: 'Αφρική', en: 'Africa' }, { el: 'Ασία', en: 'Asia' }, { el: 'Ν. Αμερική', en: 'S. America' }, { el: 'Ευρώπη', en: 'Europe' }] },
  // ---- Flags ----
  { q: { el: 'Ποιας χώρας είναι η σημαία;', en: 'Which country does this flag belong to?' }, visual: '🇬🇷', answers: [{ el: 'Ελλάδα', en: 'Greece' }, { el: 'Κύπρος', en: 'Cyprus' }, { el: 'Φινλανδία', en: 'Finland' }, { el: 'Ισραήλ', en: 'Israel' }] },
  { q: { el: 'Ποιας χώρας είναι η σημαία;', en: 'Which country does this flag belong to?' }, visual: '🇫🇷', answers: [{ el: 'Γαλλία', en: 'France' }, { el: 'Ολλανδία', en: 'Netherlands' }, { el: 'Ρωσία', en: 'Russia' }, { el: 'Ιταλία', en: 'Italy' }] },
  { q: { el: 'Ποιας χώρας είναι η σημαία;', en: 'Which country does this flag belong to?' }, visual: '🇮🇹', answers: [{ el: 'Ιταλία', en: 'Italy' }, { el: 'Ιρλανδία', en: 'Ireland' }, { el: 'Μεξικό', en: 'Mexico' }, { el: 'Ουγγαρία', en: 'Hungary' }] },
  { q: { el: 'Ποιας χώρας είναι η σημαία;', en: 'Which country does this flag belong to?' }, visual: '🇪🇸', answers: [{ el: 'Ισπανία', en: 'Spain' }, { el: 'Πορτογαλία', en: 'Portugal' }, { el: 'Ιταλία', en: 'Italy' }, { el: 'Ρουμανία', en: 'Romania' }] },
  { q: { el: 'Ποιας χώρας είναι η σημαία;', en: 'Which country does this flag belong to?' }, visual: '🇯🇵', answers: [{ el: 'Ιαπωνία', en: 'Japan' }, { el: 'Κίνα', en: 'China' }, { el: 'Ν. Κορέα', en: 'S. Korea' }, { el: 'Ταϊλάνδη', en: 'Thailand' }] },
  { q: { el: 'Ποιας χώρας είναι η σημαία;', en: 'Which country does this flag belong to?' }, visual: '🇧🇷', answers: [{ el: 'Βραζιλία', en: 'Brazil' }, { el: 'Αργεντινή', en: 'Argentina' }, { el: 'Πορτογαλία', en: 'Portugal' }, { el: 'Κολομβία', en: 'Colombia' }] },
  { q: { el: 'Ποιας χώρας είναι η σημαία;', en: 'Which country does this flag belong to?' }, visual: '🇪🇬', answers: [{ el: 'Αίγυπτος', en: 'Egypt' }, { el: 'Μαρόκο', en: 'Morocco' }, { el: 'Τυνησία', en: 'Tunisia' }, { el: 'Τουρκία', en: 'Turkey' }] },
  { q: { el: 'Ποιας χώρας είναι η σημαία;', en: 'Which country does this flag belong to?' }, visual: '🇦🇺', answers: [{ el: 'Αυστραλία', en: 'Australia' }, { el: 'Ν. Ζηλανδία', en: 'New Zealand' }, { el: 'Αγγλία', en: 'England' }, { el: 'Καναδάς', en: 'Canada' }] },
  { q: { el: 'Ποιας χώρας είναι η σημαία;', en: 'Which country does this flag belong to?' }, visual: '🇩🇪', answers: [{ el: 'Γερμανία', en: 'Germany' }, { el: 'Βέλγιο', en: 'Belgium' }, { el: 'Αυστρία', en: 'Austria' }, { el: 'Ολλανδία', en: 'Netherlands' }] },
  { q: { el: 'Ποιας χώρας είναι η σημαία;', en: 'Which country does this flag belong to?' }, visual: '🇬🇧', answers: [{ el: 'Ηνωμένο Βασίλειο', en: 'United Kingdom' }, { el: 'ΗΠΑ', en: 'USA' }, { el: 'Αυστραλία', en: 'Australia' }, { el: 'Νορβηγία', en: 'Norway' }] },
  { q: { el: 'Ποιας χώρας είναι η σημαία;', en: 'Which country does this flag belong to?' }, visual: '🇺🇸', answers: [{ el: 'ΗΠΑ', en: 'USA' }, { el: 'Ηνωμένο Βασίλειο', en: 'United Kingdom' }, { el: 'Λιβερία', en: 'Liberia' }, { el: 'Μαλαισία', en: 'Malaysia' }] },
  { q: { el: 'Ποιας χώρας είναι η σημαία;', en: 'Which country does this flag belong to?' }, visual: '🇨🇦', answers: [{ el: 'Καναδάς', en: 'Canada' }, { el: 'ΗΠΑ', en: 'USA' }, { el: 'Ελβετία', en: 'Switzerland' }, { el: 'Δανία', en: 'Denmark' }] },
];

function shuffle<T>(arr: T[]): T[] {
  const out = [...arr];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

function buildRun(): RunQuestion[] {
  return shuffle(POOL).slice(0, QUESTIONS_PER_RUN).map(q => {
    const order = shuffle([0, 1, 2, 3]);
    return {
      q: q.q,
      visual: q.visual,
      options: order.map(i => q.answers[i]),
      correctIdx: order.indexOf(0),
    };
  });
}

export default function GeoExplorer({ lang, onBack }: GeoExplorerProps) {
  const { earnXp, showNotification } = useEconomy();
  const [phase, setPhase] = useState<'start' | 'play' | 'end'>('start');
  const [run, setRun] = useState<RunQuestion[]>([]);
  const [qIdx, setQIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [flash, setFlash] = useState<'right' | 'wrong' | null>(null);
  const [best, setBest] = useState<number>(() => parseInt(localStorage.getItem('wb_geo_best') || '0'));
  const rewardedRef = useRef(false);

  const t = {
    title: 'GEO EXPLORER',
    tagline: lang === 'el' ? 'Πόσο καλά ξέρεις τον κόσμο; 10 ερωτήσεις!' : 'How well do you know the world? 10 questions!',
    score: lang === 'el' ? 'ΣΚΟΡ' : 'SCORE',
    best: lang === 'el' ? 'ΡΕΚΟΡ' : 'BEST',
    play: lang === 'el' ? 'ΞΕΚΙΝΑ' : 'START',
    again: lang === 'el' ? 'ΞΑΝΑ' : 'PLAY AGAIN',
    back: lang === 'el' ? 'ΠΙΣΩ' : 'BACK',
    question: lang === 'el' ? 'ΕΡΩΤΗΣΗ' : 'QUESTION',
    done: lang === 'el' ? 'ΤΕΛΟΣ ΑΠΟΣΤΟΛΗΣ!' : 'MISSION COMPLETE!',
    newBest: lang === 'el' ? 'ΝΕΟ ΡΕΚΟΡ!' : 'NEW BEST!',
    outOf: lang === 'el' ? `από ${QUESTIONS_PER_RUN} σωστές` : `out of ${QUESTIONS_PER_RUN} correct`,
  };

  // End-of-run: best score + credit reward (daily-capped via shared helper)
  useEffect(() => {
    if (phase !== 'end' || rewardedRef.current) return;
    rewardedRef.current = true;
    if (score > best) {
      setBest(score);
      localStorage.setItem('wb_geo_best', String(score));
    }
    const reward = score >= 10 ? 3 : score >= 7 ? 2 : score >= 5 ? 1 : 0;
    grantGameReward('geo', reward, earnXp, showNotification, lang);
  }, [phase, score, best, earnXp, showNotification, lang]);

  const start = useCallback(() => {
    rewardedRef.current = false;
    setRun(buildRun());
    setQIdx(0); setScore(0);
    setPicked(null); setFlash(null);
    setPhase('play');
  }, []);

  const answer = useCallback((idx: number) => {
    if (phase !== 'play' || picked !== null) return;
    const current = run[qIdx];
    if (!current) return;
    const correct = idx === current.correctIdx;
    setPicked(idx);
    setFlash(correct ? 'right' : 'wrong');
    if (correct) setScore(s => s + 1);
    setTimeout(() => {
      setPicked(null);
      setFlash(null);
      if (qIdx + 1 >= run.length) setPhase('end');
      else setQIdx(i => i + 1);
    }, correct ? 600 : 1100);
  }, [phase, picked, run, qIdx]);

  const current = run[qIdx];

  return (
    <div className="h-full flex flex-col items-center p-3 select-none overflow-hidden">
      {/* HEADER */}
      <div className="flex justify-between items-center w-full max-w-md mb-2 bg-black/50 backdrop-blur-md px-3 py-2 rounded-xl border border-white/10 z-10 shrink-0">
        <GameBackButton onClick={onBack} lang={lang} />
        <h2 className="text-xl font-[1000] text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-teal-400 to-emerald-500 italic tracking-tighter leading-none">
          {t.title}
        </h2>
        <div className="text-right">
          <p className="text-[8px] text-white/40 font-black uppercase tracking-widest">{t.score}</p>
          <p className="text-2xl font-[1000] text-white leading-none font-mono">{score}</p>
        </div>
      </div>

      <div className="flex-1 w-full max-w-md flex flex-col items-center justify-center gap-5">
        <AnimatePresenceAny mode="wait">
          {phase === 'start' && (
            <motion.div key="start" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="text-center space-y-5">
              <div className="w-20 h-20 mx-auto bg-sky-500/20 border border-sky-500/30 rounded-3xl flex items-center justify-center">
                <Globe2 size={40} className="text-sky-400" />
              </div>
              <p className="text-white/60 font-bold text-sm">{t.tagline}</p>
              {best > 0 && (
                <p className="text-amber-400/80 font-black text-xs uppercase tracking-widest flex items-center justify-center gap-1.5">
                  <Trophy size={13} /> {t.best}: {best}/{QUESTIONS_PER_RUN}
                </p>
              )}
              <button onClick={start} className="px-10 py-4 bg-gradient-to-r from-sky-600 to-emerald-600 rounded-2xl text-white font-[1000] uppercase tracking-widest text-sm hover:scale-105 active:scale-95 transition-all flex items-center gap-2 mx-auto shadow-lg shadow-sky-500/20">
                <Play size={16} fill="currentColor" /> {t.play}
              </button>
            </motion.div>
          )}

          {phase === 'play' && current && (
            <motion.div key="play" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full space-y-5">
              {/* Progress */}
              <div className="flex items-center justify-between px-1">
                <div className="flex items-center gap-1.5 font-mono font-[1000] text-sm text-white/70 uppercase tracking-widest">
                  <MapPin size={14} /> {t.question} {qIdx + 1}/{run.length}
                </div>
              </div>
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <div className="h-full rounded-full transition-all duration-300 bg-gradient-to-r from-sky-400 to-emerald-400" style={{ width: `${((qIdx + 1) / Math.max(1, run.length)) * 100}%` }} />
              </div>

              {/* Question card */}
              <motion.div
                key={qIdx}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className={`text-center py-6 px-4 rounded-3xl border-2 transition-colors duration-200 ${
                  flash === 'right' ? 'bg-emerald-500/20 border-emerald-400/60'
                  : flash === 'wrong' ? 'bg-red-500/20 border-red-400/60'
                  : 'bg-white/5 border-white/10'
                }`}
              >
                {current.visual && <p className="text-7xl leading-none mb-3">{current.visual}</p>}
                <p className="text-xl font-[1000] text-white tracking-tight">{current.q[lang]}</p>
              </motion.div>

              {/* Answers */}
              <div className="grid grid-cols-2 gap-3">
                {current.options.map((opt, i) => {
                  const isCorrect = picked !== null && i === current.correctIdx;
                  const isWrongPick = picked === i && i !== current.correctIdx;
                  return (
                    <button
                      key={`${qIdx}-${i}`}
                      onClick={() => answer(i)}
                      className={`py-4 px-2 border-2 rounded-2xl text-white text-base font-[1000] active:scale-95 transition-all ${
                        isCorrect ? 'bg-emerald-500/30 border-emerald-400/70'
                        : isWrongPick ? 'bg-red-500/30 border-red-400/70'
                        : 'bg-white/5 border-white/10 hover:bg-sky-500/20 hover:border-sky-400/50'
                      }`}
                    >
                      {opt[lang]}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}

          {phase === 'end' && (
            <motion.div key="end" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="text-center space-y-5">
              <p className="text-white/50 font-black uppercase tracking-widest text-sm">{t.done}</p>
              <p className="text-7xl font-[1000] text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-emerald-400 font-mono">{score}</p>
              <p className="text-white/40 font-bold text-xs uppercase tracking-widest">{t.outOf}</p>
              {score >= best && score > 0 && (
                <p className="text-amber-400 font-[1000] uppercase tracking-widest text-sm flex items-center justify-center gap-1.5 animate-pulse">
                  <Trophy size={15} /> {t.newBest}
                </p>
              )}
              <div className="flex items-center justify-center gap-3">
                <button onClick={start} className="px-8 py-3.5 bg-gradient-to-r from-sky-600 to-emerald-600 rounded-2xl text-white font-[1000] uppercase tracking-widest text-xs hover:scale-105 active:scale-95 transition-all flex items-center gap-2">
                  <RotateCcw size={14} /> {t.again}
                </button>
                <button onClick={onBack} className="px-8 py-3.5 bg-white/5 border border-white/10 rounded-2xl text-white/60 font-[1000] uppercase tracking-widest text-xs hover:bg-white/10 transition-all">
                  {t.back}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresenceAny>
      </div>

      {/* Reward hint */}
      <p className="text-white/25 text-[10px] font-bold uppercase tracking-widest pb-2 flex items-center gap-1">
        <Zap size={10} /> {lang === 'el' ? 'Κέρδισε έως 3 credits ανά παιχνίδι' : 'Earn up to 3 credits per game'}
      </p>
    </div>
  );
}
