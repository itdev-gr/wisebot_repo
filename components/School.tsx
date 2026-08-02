/**
 * SCHOOL — Greek primary-school curriculum (Α'–ΣΤ' Δημοτικού), gamified.
 * =====================================================================
 * Three screens: pick grade → pick subject → play the subject quiz.
 * Reuses the existing QuizEngine (timer, scoring, streaks, PASS_QUIZ credit
 * rewards + per-category progress persistence), so school quizzes behave
 * exactly like the rest of the app's quizzes.
 *
 * Gamification layer:
 * - 0-3 stars per subject from the best run (QuizEngine best records)
 * - ΔΙΑΓΩΝΙΣΜΑ ΤΑΞΗΣ: a mixed final exam that unlocks once every subject
 *   of the grade has been completed at least once
 * - Απολυτήριο (diploma 🎓) per grade for scoring ≥75% on the exam
 */
import React, { useState, useEffect } from 'react';
import { motion as m, AnimatePresence } from 'framer-motion';
import { GraduationCap, ArrowLeft, Play, BookMarked, Star, Trophy, Lock } from 'lucide-react';
import QuizEngine, { getQuizProgress, getQuizStars, getQuizBest } from './QuizEngine';
import { SCHOOL_CURRICULUM, type SchoolGrade, type SchoolSubject } from '../data/schoolQuizData';

const motion = m as any;

interface SchoolProps {
  lang: 'el' | 'en';
  addXp?: (amount: number, id: string, creditReward?: number) => void;
  completedIds?: string[];
}

const catId = (grade: number, subjectId: string) => `school-g${grade}-${subjectId}`;
const examId = (grade: number) => `school-g${grade}-exam`;

const EXAM_QUESTIONS = 12;
const DIPLOMA_MIN_STARS = 2; // ≥75% on the exam

/** All subjects of a grade completed at least once → exam unlocks. */
const isExamUnlocked = (g: SchoolGrade) =>
  g.subjects.every(s => getQuizBest(catId(g.grade, s.id)) !== null);

const hasDiploma = (g: SchoolGrade) => getQuizStars(examId(g.grade)) >= DIPLOMA_MIN_STARS;

/** Mixed exam: shuffle every question of the grade, keep 12. */
const buildExam = (g: SchoolGrade): SchoolSubject => {
  const pool = g.subjects.flatMap(s => s.questions);
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return {
    id: 'exam',
    name: { el: 'Διαγώνισμα Τάξης', en: 'Grade Exam' },
    emoji: '🏆',
    questions: shuffled.slice(0, EXAM_QUESTIONS),
  };
};

const StarRow = ({ stars, size = 13 }: { stars: number; size?: number }) => (
  <span className="inline-flex items-center gap-0.5">
    {[0, 1, 2].map(i => (
      <Star
        key={i}
        size={size}
        className={i < stars ? 'text-amber-400' : 'text-white/15'}
        fill={i < stars ? 'currentColor' : 'none'}
      />
    ))}
  </span>
);

export default function School({ lang }: SchoolProps) {
  const [activeGrade, setActiveGrade] = useState<SchoolGrade | null>(null);
  const [activeSubject, setActiveSubject] = useState<SchoolSubject | null>(null);
  const [saved, setSaved] = useState<Record<string, boolean>>({});
  const [, setTick] = useState(0); // re-read localStorage-derived stars/diplomas

  // Track which subject quizzes have saved (in-progress) state → "CONTINUE" badge
  const refreshSaved = () => {
    const map: Record<string, boolean> = {};
    SCHOOL_CURRICULUM.forEach(g =>
      g.subjects.forEach(s => {
        if (getQuizProgress(catId(g.grade, s.id))) map[catId(g.grade, s.id)] = true;
      })
    );
    setSaved(map);
    setTick(t => t + 1);
  };
  useEffect(() => { refreshSaved(); }, []);

  const t = {
    title: lang === 'el' ? 'ΣΧΟΛΕΙΟ' : 'SCHOOL',
    subtitle: lang === 'el' ? 'ΜΑΘΕ ΠΑΙΖΟΝΤΑΣ — Ά ΕΩΣ ΣΤ́ ΔΗΜΟΤΙΚΟΥ' : 'LEARN BY PLAYING — GRADES 1 TO 6',
    pickGrade: lang === 'el' ? 'Διάλεξε Τάξη' : 'Pick your Grade',
    pickSubject: lang === 'el' ? 'Διάλεξε Μάθημα' : 'Pick a Subject',
    backGrades: lang === 'el' ? 'ΑΛΛΑΓΗ ΤΑΞΗΣ' : 'CHANGE GRADE',
    backSubjects: lang === 'el' ? 'ΠΙΣΩ ΣΤΑ ΜΑΘΗΜΑΤΑ' : 'BACK TO SUBJECTS',
    questions: lang === 'el' ? 'ερωτήσεις' : 'questions',
    subjects: lang === 'el' ? 'μαθήματα' : 'subjects',
    cont: lang === 'el' ? 'ΣΥΝΕΧΕΙΑ' : 'CONTINUE',
    earn: lang === 'el' ? 'ΚΕΡΔΙΣΕ ΑΣΤΕΡΙΑ, CREDITS & ΑΠΟΛΥΤΗΡΙΑ' : 'EARN STARS, CREDITS & DIPLOMAS',
    exam: lang === 'el' ? 'ΔΙΑΓΩΝΙΣΜΑ ΤΑΞΗΣ' : 'GRADE EXAM',
    examDesc: lang === 'el' ? '12 ερωτήσεις απ’ όλα τα μαθήματα' : '12 questions from all subjects',
    examLocked: lang === 'el' ? 'Ολοκλήρωσε όλα τα μαθήματα για να ξεκλειδώσει' : 'Complete every subject to unlock',
    diploma: lang === 'el' ? 'ΑΠΟΛΥΤΗΡΙΟ' : 'DIPLOMA',
    diplomaWon: lang === 'el' ? 'Πήρες το Απολυτήριο!' : 'You earned the Diploma!',
    diplomaHint: lang === 'el' ? 'Γράψε 75%+ στο διαγώνισμα για Απολυτήριο 🎓' : 'Score 75%+ on the exam for the Diploma 🎓',
    done: lang === 'el' ? 'ολοκληρωμένα' : 'done',
  };

  // ─── SCREEN 3: QUIZ ─────────────────────────────────────────────
  if (activeGrade && activeSubject) {
    return (
      <div className="max-w-6xl mx-auto px-4 min-h-full py-2 pb-4">
        <button
          onClick={() => { setActiveSubject(null); refreshSaved(); }}
          className="flex items-center gap-2 text-white/50 hover:text-white font-bold uppercase tracking-widest text-xs mb-3 transition-colors"
        >
          <ArrowLeft size={16} /> {t.backSubjects}
        </button>
        <QuizEngine
          topic={`${activeGrade.name[lang]} · ${activeSubject.name[lang]}`}
          questions={activeSubject.questions}
          onRestart={() => { setActiveSubject(null); refreshSaved(); }}
          lang={lang}
          categoryId={catId(activeGrade.grade, activeSubject.id)}
        />
      </div>
    );
  }

  // ─── SCREEN 2: SUBJECT PICKER ───────────────────────────────────
  if (activeGrade) {
    const examUnlocked = isExamUnlocked(activeGrade);
    const diploma = hasDiploma(activeGrade);
    const examStars = getQuizStars(examId(activeGrade.grade));
    return (
      <div className="max-w-5xl mx-auto px-4 min-h-full py-8 pb-32">
        <button
          onClick={() => setActiveGrade(null)}
          className="flex items-center gap-2 text-white/50 hover:text-white font-bold uppercase tracking-widest text-xs mb-6 transition-colors"
        >
          <ArrowLeft size={16} /> {t.backGrades}
        </button>

        <div className="text-center mb-10">
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-3 bg-gradient-to-r ${activeGrade.color} shadow-lg`}>
            <GraduationCap size={16} className="text-white" />
            <span className="text-[11px] font-[1000] uppercase tracking-widest text-white">{activeGrade.name[lang]}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-[1000] text-white uppercase italic tracking-tighter leading-none">{t.pickSubject}</h2>
          {diploma && (
            <p className="mt-3 inline-flex items-center gap-2 px-4 py-1.5 bg-amber-500/15 border border-amber-500/30 rounded-full text-amber-300 text-[11px] font-black uppercase tracking-widest">
              🎓 {t.diplomaWon}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {activeGrade.subjects.map((subject, i) => {
            const id = catId(activeGrade.grade, subject.id);
            const hasProgress = saved[id];
            const stars = getQuizStars(id);
            const completed = getQuizBest(id) !== null;
            return (
              <motion.button
                key={subject.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                onClick={() => setActiveSubject(subject)}
                className={`group relative h-36 rounded-[2rem] overflow-hidden border ${completed ? 'border-emerald-500/20' : 'border-white/[0.08]'} bg-white/[0.03] backdrop-blur-xl hover:border-white/25 hover:-translate-y-1 active:scale-[0.98] transition-all duration-300 text-left p-7`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${activeGrade.color} opacity-[0.07] group-hover:opacity-[0.14] transition-opacity pointer-events-none`} />
                <div className="absolute top-0 right-0 p-5 text-6xl opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-500">
                  {subject.emoji}
                </div>
                {hasProgress && (
                  <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 px-3 py-1.5 bg-emerald-500/25 border border-emerald-500/40 rounded-full">
                    <Play size={10} className="text-emerald-400 fill-emerald-400" />
                    <span className="text-emerald-300 text-[9px] font-black uppercase tracking-wider">{t.cont}</span>
                  </div>
                )}
                <div className="relative z-10 h-full flex flex-col justify-end">
                  <div className="flex items-center gap-2">
                    <h3 className="text-2xl font-[1000] text-white uppercase italic tracking-tighter">{subject.name[lang]}</h3>
                    {completed && <StarRow stars={stars} />}
                  </div>
                  <p className="text-white/40 text-xs font-bold uppercase tracking-widest mt-1">
                    {subject.questions.length} {t.questions}
                  </p>
                </div>
              </motion.button>
            );
          })}

          {/* ΔΙΑΓΩΝΙΣΜΑ ΤΑΞΗΣ — the boss level */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: activeGrade.subjects.length * 0.06 }}
            disabled={!examUnlocked}
            onClick={() => examUnlocked && setActiveSubject(buildExam(activeGrade))}
            className={`group relative h-36 rounded-[2rem] overflow-hidden border text-left p-7 transition-all duration-300 ${
              examUnlocked
                ? 'border-amber-400/40 bg-gradient-to-br from-amber-500/[0.12] to-orange-600/[0.08] backdrop-blur-xl hover:border-amber-400/70 hover:-translate-y-1 active:scale-[0.98] cursor-pointer'
                : 'border-white/[0.06] bg-white/[0.02] opacity-60 cursor-not-allowed'
            }`}
          >
            <div className="absolute top-0 right-0 p-5 text-6xl opacity-25 group-hover:opacity-50 group-hover:scale-110 transition-all duration-500">
              {diploma ? '🎓' : '🏆'}
            </div>
            <div className="relative z-10 h-full flex flex-col justify-end">
              <div className="flex items-center gap-2">
                {examUnlocked ? (
                  <Trophy size={18} className="text-amber-400" />
                ) : (
                  <Lock size={16} className="text-white/30" />
                )}
                <h3 className={`text-2xl font-[1000] uppercase italic tracking-tighter ${examUnlocked ? 'text-amber-300' : 'text-white/40'}`}>
                  {t.exam}
                </h3>
                {examStars > 0 && <StarRow stars={examStars} />}
              </div>
              <p className={`text-xs font-bold uppercase tracking-widest mt-1 ${examUnlocked ? 'text-amber-200/60' : 'text-white/30'}`}>
                {examUnlocked ? (diploma ? t.diplomaWon : `${t.examDesc} · ${t.diplomaHint}`) : t.examLocked}
              </p>
            </div>
          </motion.button>
        </div>
      </div>
    );
  }

  // ─── SCREEN 1: GRADE PICKER ─────────────────────────────────────
  return (
    <div className="max-w-6xl mx-auto px-4 min-h-full py-8 pb-32">
      <div className="text-center space-y-4 mb-12">
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-md">
          <GraduationCap size={14} className="text-blue-400" />
          <span className="text-[10px] font-black uppercase tracking-widest text-white/60">WISEBOT SCHOOL</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-[1000] text-white tracking-tighter uppercase italic leading-none">
          {lang === 'el' ? <>ΣΧΟ<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">ΛΕΙΟ</span></> : <>SCH<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">OOL</span></>}
        </h1>
        <p className="text-white/40 font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs">{t.subtitle}</p>
        <p className="text-white/30 font-bold uppercase tracking-[0.2em] text-[10px] flex items-center justify-center gap-1.5">
          <Star size={11} className="text-amber-400" fill="currentColor" /> {t.earn}
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
        {SCHOOL_CURRICULUM.map((g, i) => {
          const totalQ = g.subjects.reduce((s, sub) => s + sub.questions.length, 0);
          const doneCount = g.subjects.filter(s => getQuizBest(catId(g.grade, s.id)) !== null).length;
          const diploma = hasDiploma(g);
          const pct = Math.round((doneCount / g.subjects.length) * 100);
          return (
            <motion.button
              key={g.grade}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              onClick={() => setActiveGrade(g)}
              className="group relative aspect-[4/3] rounded-[2rem] overflow-hidden border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl hover:border-white/25 hover:-translate-y-1 active:scale-[0.97] transition-all duration-300"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${g.color} opacity-[0.12] group-hover:opacity-25 transition-opacity pointer-events-none`} />
              {diploma && (
                <div className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-lg shadow-lg" title={t.diploma}>
                  🎓
                </div>
              )}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4">
                <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${g.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                  <span className="text-2xl md:text-3xl font-[1000] text-white">{['Α','Β','Γ','Δ','Ε','ΣΤ'][g.grade - 1]}</span>
                </div>
                <h3 className="text-base md:text-xl font-[1000] text-white uppercase italic tracking-tighter text-center leading-none mt-1">
                  {g.name[lang]}
                </h3>
                <p className="text-white/40 text-[9px] md:text-[10px] font-bold uppercase tracking-widest flex items-center gap-1">
                  <BookMarked size={10} /> {g.subjects.length} {t.subjects} · {totalQ} {t.questions}
                </p>
                {/* Progress bar: subjects completed */}
                {doneCount > 0 && (
                  <div className="w-3/4 mt-1">
                    <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${g.color} transition-all duration-500`}
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                    <p className="text-[8px] md:text-[9px] font-black text-white/40 uppercase tracking-widest mt-1">
                      {doneCount}/{g.subjects.length} {t.done}
                    </p>
                  </div>
                )}
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
