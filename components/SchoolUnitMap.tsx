/**
 * SCHOOL — the mission trail of one subject.
 * ==========================================
 * A subject that has been split into units (see data/schoolTypes.ts) is shown as a
 * winding trail of "αποστολές" (missions), not a list of chapters. Every stop shows its
 * stars from the best run; nothing is locked — the owner's rule is that unlocking must be
 * easy, so the trail only shows where the child is, it never bars the way.
 *
 * Words are a 7-year-old's: αποστολή, αστέρια, Μάστερ — never ενότητα or ύλη.
 */
import React from 'react';
import { motion as m } from 'framer-motion';
import { Star, Play, Check, Award } from 'lucide-react';
import type { SchoolGrade, SchoolSubject, SchoolUnit } from '../data/schoolTypes';
import { getQuizStars, getQuizProgress } from './QuizEngine';
import FirstTimeTip, { useChildName } from './FirstTimeTip';

const motion = m as any;

export const unitCatId = (grade: number, subjectId: string, unitId: string) =>
  `school-g${grade}-${subjectId}-${unitId}`;

/** Units that actually have questions — the skeleton entries stay invisible until written. */
export const playableUnits = (subject: SchoolSubject): SchoolUnit[] =>
  (subject.units || []).filter(u => u.questions.length > 0);

/** Subject mastered when every playable mission has ≥2 stars (≥75%). */
export const subjectMastered = (grade: number, subject: SchoolSubject): boolean => {
  const units = playableUnits(subject);
  return units.length > 0 && units.every(u => getQuizStars(unitCatId(grade, subject.id, u.id)) >= 2);
};

export const subjectStarTotal = (grade: number, subject: SchoolSubject) =>
  playableUnits(subject).reduce((s, u) => s + getQuizStars(unitCatId(grade, subject.id, u.id)), 0);

const StarRow = ({ stars, size = 14 }: { stars: number; size?: number }) => (
  <span className="inline-flex items-center gap-0.5">
    {[0, 1, 2].map(i => (
      <Star key={i} size={size} className={i < stars ? 'text-amber-400' : 'text-white/15'} fill={i < stars ? 'currentColor' : 'none'} />
    ))}
  </span>
);

interface Props {
  lang: 'el' | 'en';
  grade: SchoolGrade;
  subject: SchoolSubject;
  onPlay: (unit: SchoolUnit) => void;
}

export default function SchoolUnitMap({ lang, grade, subject, onPlay }: Props) {
  const childName = useChildName(lang);
  const units = playableUnits(subject);
  const total = units.length * 3;
  const earned = subjectStarTotal(grade.grade, subject);
  const mastered = subjectMastered(grade.grade, subject);
  // "Next" = first mission without 2 stars; the trail points the child there.
  const nextIdx = units.findIndex(u => getQuizStars(unitCatId(grade.grade, subject.id, u.id)) < 2);

  const t = {
    missions: lang === 'el' ? 'αποστολές' : 'missions',
    stars: lang === 'el' ? 'αστέρια' : 'stars',
    play: lang === 'el' ? 'ΠΑΙΞΕ' : 'PLAY',
    again: lang === 'el' ? 'ΞΑΝΑ' : 'AGAIN',
    cont: lang === 'el' ? 'ΣΥΝΕΧΕΙΑ' : 'CONTINUE',
    next: lang === 'el' ? 'ΕΠΟΜΕΝΗ ΑΠΟΣΤΟΛΗ' : 'NEXT MISSION',
    master: lang === 'el' ? `Μάστερ: ${subject.name.el}` : `${subject.name.en} Master`,
    masterHint: lang === 'el' ? '2+ αστέρια σε κάθε αποστολή = Μάστερ!' : '2+ stars on every mission = Master!',
    questions: lang === 'el' ? 'ερωτήσεις' : 'questions',
  };

  return (
    <div className="max-w-2xl mx-auto">
      <FirstTimeTip id="school-missions" lang={lang} text={lang === 'el'
        ? <>🦉 Κάθε σταθμός είναι μια αποστολή, {childName}. Πάρε 2 αστέρια σε όλες και γίνεσαι Μάστερ!</>
        : <>🦉 Every stop is a mission, {childName}. Get 2 stars on all of them and you become a Master!</>} />

      {/* Header: subject + star meter */}
      <div className="text-center mb-8">
        <div className="text-5xl mb-2">{subject.emoji}</div>
        <h2 className="text-3xl md:text-4xl font-[1000] text-white uppercase italic tracking-tighter leading-none">{subject.name[lang]}</h2>
        <p className="text-white/40 text-xs font-bold uppercase tracking-widest mt-2">
          {units.length} {t.missions} · {earned}/{total} {t.stars}
        </p>
        <div className="w-56 mx-auto mt-3 h-2 rounded-full bg-white/10 overflow-hidden">
          <div className={`h-full rounded-full bg-gradient-to-r ${grade.color} transition-all duration-700`} style={{ width: `${total ? (earned / total) * 100 : 0}%` }} />
        </div>
        <p className={`mt-3 inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-black uppercase tracking-widest border ${
          mastered ? 'bg-amber-500/15 border-amber-500/30 text-amber-300' : 'bg-white/5 border-white/10 text-white/40'
        }`}>
          <Award size={13} /> {mastered ? t.master : t.masterHint}
        </p>
      </div>

      {/* The trail */}
      <ol className="relative space-y-3">
        {/* vertical track */}
        <div className="absolute left-7 top-6 bottom-6 w-1 rounded-full bg-white/[0.06]" aria-hidden />
        {units.map((unit, i) => {
          const id = unitCatId(grade.grade, subject.id, unit.id);
          const stars = getQuizStars(id);
          const inProgress = !!getQuizProgress(id);
          const isNext = i === nextIdx;
          const done = stars >= 2;
          return (
            <motion.li
              key={unit.id}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              className="relative"
            >
              <button
                type="button"
                onClick={() => onPlay(unit)}
                className={`w-full flex items-center gap-4 pl-3 pr-4 py-3 rounded-[1.75rem] border text-left transition-all active:scale-[0.98] ${
                  isNext
                    ? 'border-white/30 bg-white/[0.07] shadow-[0_0_40px_rgba(99,102,241,0.15)]'
                    : done
                      ? 'border-emerald-500/20 bg-emerald-500/[0.04]'
                      : 'border-white/[0.08] bg-white/[0.03] hover:border-white/20'
                }`}
              >
                {/* stop marker on the track */}
                <div className={`relative z-10 w-9 h-9 shrink-0 rounded-full flex items-center justify-center text-lg border-2 ${
                  done ? 'bg-emerald-500 border-emerald-300 text-white' : isNext ? `bg-gradient-to-br ${grade.color} border-white/40 text-white` : 'bg-[#0B0F1A] border-white/15'
                }`}>
                  {done ? <Check size={18} strokeWidth={3} /> : unit.emoji}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-white/30 text-[10px] font-black">{i + 1}</span>
                    <h3 className="text-base md:text-lg font-[1000] text-white uppercase italic tracking-tight leading-tight">{unit.name[lang]}</h3>
                  </div>
                  <div className="flex items-center gap-3 mt-1">
                    <StarRow stars={stars} />
                    <span className="text-white/30 text-[10px] font-bold uppercase tracking-widest">{unit.questions.length} {t.questions}</span>
                  </div>
                </div>

                <span className={`shrink-0 inline-flex items-center gap-1.5 px-3 h-9 rounded-full text-[11px] font-black uppercase tracking-widest ${
                  isNext ? 'bg-white text-black' : inProgress ? 'bg-emerald-500/25 text-emerald-300' : 'bg-white/10 text-white/70'
                }`}>
                  <Play size={11} fill="currentColor" /> {inProgress ? t.cont : stars > 0 ? t.again : t.play}
                </span>
              </button>
              {isNext && (
                <span className="absolute -top-2 left-16 px-2 py-0.5 rounded-full bg-white text-black text-[9px] font-black uppercase tracking-widest shadow">
                  {t.next}
                </span>
              )}
            </motion.li>
          );
        })}
      </ol>
    </div>
  );
}
