/**
 * PARENT DASHBOARD — School progress.
 * ===================================
 * What a parent wants to know in ten seconds: which grade the child plays, how far each
 * subject is, and — above all — which missions are weak (played, but under 2 stars).
 * Reads the same localStorage best-runs the child's School screen uses (QuizEngine).
 * With an account, those best-runs sync through quiz_best (services/syncService.ts), so on
 * mount this view pulls the cloud runs into localStorage first — a parent on a different
 * device sees what the child played elsewhere. Guests stay device-local, as before.
 *
 * Words here are for the parent, not the child: they may be a little more formal.
 */
import React, { useEffect, useState } from 'react';
import { GraduationCap, Star, AlertTriangle, Award } from 'lucide-react';
import { SCHOOL_CURRICULUM, type SchoolGrade, type SchoolSubject } from '../data/schoolQuizData';
import { getQuizStars, getQuizBest } from './QuizEngine';
import { playableUnits, unitCatId, subjectMastered, subjectStarTotal } from './SchoolUnitMap';
import { useAuth } from '../context/AuthContext';
import { syncQuizBests } from '../services/syncService';

const examId = (grade: number) => `school-g${grade}-exam`;

interface WeakMission { name: string; emoji: string; stars: number; subject: string }

interface SubjectReport {
  subject: SchoolSubject;
  missions: number;
  played: number;
  earned: number;
  total: number;
  mastered: boolean;
  weak: WeakMission[];
}

interface GradeReport {
  grade: SchoolGrade;
  subjects: SubjectReport[];
  diploma: boolean;
  examStars: number;
}

/** Only grades the child has touched on this device; subjects with at least one mission. */
export const buildSchoolReport = (lang: 'el' | 'en'): GradeReport[] =>
  SCHOOL_CURRICULUM.map(grade => {
    const subjects: SubjectReport[] = grade.subjects
      .map(subject => {
        const units = playableUnits(subject);
        const weak: WeakMission[] = [];
        let played = 0;
        units.forEach(u => {
          const id = unitCatId(grade.grade, subject.id, u.id);
          if (getQuizBest(id) === null) return;
          played += 1;
          const stars = getQuizStars(id);
          if (stars < 2) weak.push({ name: u.name[lang], emoji: u.emoji, stars, subject: subject.name[lang] });
        });
        return {
          subject,
          missions: units.length,
          played,
          earned: subjectStarTotal(grade.grade, subject),
          total: units.length * 3,
          mastered: subjectMastered(grade.grade, subject),
          weak,
        };
      })
      .filter(s => s.missions > 0);
    return {
      grade,
      subjects,
      diploma: getQuizStars(examId(grade.grade)) >= 2,
      examStars: getQuizStars(examId(grade.grade)),
    };
  }).filter(g => g.subjects.some(s => s.played > 0));

const StarRow = ({ stars }: { stars: number }) => (
  <span className="inline-flex items-center gap-0.5">
    {[0, 1, 2].map(i => (
      <Star key={i} size={12} className={i < stars ? 'text-amber-400' : 'text-white/15'} fill={i < stars ? 'currentColor' : 'none'} />
    ))}
  </span>
);

export default function ParentSchoolProgress({ lang }: { lang: 'el' | 'en' }) {
  const { user } = useAuth();
  const userId: string | null = user?.id ?? null;
  // Bump after the cloud pull lands so buildSchoolReport re-reads localStorage.
  const [, setCloudRefresh] = useState(0);

  useEffect(() => {
    if (!userId) return;
    let cancelled = false;
    syncQuizBests(userId).then(() => {
      if (!cancelled) setCloudRefresh(n => n + 1);
    });
    return () => { cancelled = true; };
  }, [userId]);

  const report = buildSchoolReport(lang);
  const t = lang === 'el' ? {
    title: 'ΣΧΟΛΕΙΟ',
    subtitle: userId
      ? 'Πρόοδος ανά τάξη και μάθημα, από τις αποστολές που έπαιξε το παιδί — από όλες τις συσκευές του λογαριασμού'
      : 'Πρόοδος ανά τάξη και μάθημα, από τις αποστολές που έπαιξε το παιδί σε αυτή τη συσκευή',
    empty: userId
      ? 'Το παιδί δεν έχει παίξει ακόμα καμία αποστολή στο Σχολείο.'
      : 'Το παιδί δεν έχει παίξει ακόμα καμία αποστολή στο Σχολείο σε αυτή τη συσκευή.',
    missions: 'αποστολές',
    played: 'παιγμένες',
    stars: 'αστέρια',
    master: 'Μάστερ',
    weakTitle: 'Θέλουν ακόμα δουλειά',
    weakHint: 'Αποστολές κάτω από 2 αστέρια — εδώ αξίζει μια επανάληψη μαζί.',
    allGood: 'Όλες οι παιγμένες αποστολές έχουν 2+ αστέρια. Μπράβο!',
    diploma: 'Απολυτήριο',
    exam: 'Διαγώνισμα τάξης',
    examPending: 'Ξεκλειδώνει με Μάστερ σε κάθε μάθημα',
  } : {
    title: 'SCHOOL',
    subtitle: userId
      ? 'Progress per grade and subject, from missions played on any of the account’s devices'
      : 'Progress per grade and subject, from the missions played on this device',
    empty: userId
      ? 'No School missions have been played yet.'
      : 'No School missions have been played on this device yet.',
    missions: 'missions',
    played: 'played',
    stars: 'stars',
    master: 'Master',
    weakTitle: 'Needs more work',
    weakHint: 'Missions under 2 stars — worth a second go together.',
    allGood: 'Every mission played so far has 2+ stars. Well done!',
    diploma: 'Diploma',
    exam: 'Grade exam',
    examPending: 'Unlocks with Master in every subject',
  };

  return (
    <div className="bg-[#0B0F1A]/60 border border-white/10 rounded-2xl p-6">
      <div className="mb-6">
        <h3 className="text-lg font-black text-white uppercase tracking-wider flex items-center gap-2">
          <GraduationCap size={20} className="text-amber-400" /> {t.title}
        </h3>
        <p className="text-sm text-white/40 mt-1">{t.subtitle}</p>
      </div>

      {report.length === 0 && (
        <p className="text-sm text-white/50 bg-white/5 border border-white/10 rounded-xl p-4">{t.empty}</p>
      )}

      <div className="space-y-6">
        {report.map(({ grade, subjects, diploma, examStars }) => {
          const weak = subjects.flatMap(s => s.weak);
          return (
            <div key={grade.grade} className="border border-white/10 rounded-2xl p-4 bg-white/[0.02]">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className={`px-3 py-1 rounded-full bg-gradient-to-r ${grade.color} text-white text-[11px] font-black uppercase tracking-widest`}>
                  {grade.name[lang]}
                </span>
                {diploma ? (
                  <span className="px-2.5 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-[10px] font-black uppercase tracking-widest">
                    🎓 {t.diploma}
                  </span>
                ) : examStars > 0 ? (
                  <span className="inline-flex items-center gap-1.5 text-[10px] text-white/50 font-bold uppercase tracking-widest">
                    {t.exam} <StarRow stars={examStars} />
                  </span>
                ) : (
                  <span className="text-[10px] text-white/30 font-bold uppercase tracking-widest">{t.exam}: {t.examPending}</span>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {subjects.map(s => (
                  <div key={s.subject.id} className="bg-white/5 border border-white/10 rounded-xl p-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-sm font-black text-white truncate">{s.subject.emoji} {s.subject.name[lang]}</span>
                      {s.mastered && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-black text-amber-300 uppercase tracking-widest shrink-0">
                          <Award size={11} /> {t.master}
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-white/40 font-bold uppercase tracking-wider mt-1">
                      {s.played}/{s.missions} {t.played} · {s.earned}/{s.total} {t.stars}
                    </p>
                    <div className="mt-2 h-1.5 rounded-full bg-white/10 overflow-hidden">
                      <div className={`h-full rounded-full bg-gradient-to-r ${grade.color}`} style={{ width: `${s.total ? (s.earned / s.total) * 100 : 0}%` }} />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <h4 className="text-xs font-black text-white/70 uppercase tracking-widest flex items-center gap-2">
                  <AlertTriangle size={13} className={weak.length ? 'text-orange-400' : 'text-emerald-400'} /> {t.weakTitle}
                </h4>
                {weak.length === 0 ? (
                  <p className="text-xs text-emerald-300/80 mt-2">{t.allGood}</p>
                ) : (
                  <>
                    <p className="text-xs text-white/40 mt-1">{t.weakHint}</p>
                    <ul className="mt-2 space-y-1.5">
                      {weak.map((w, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm bg-orange-500/[0.06] border border-orange-500/20 rounded-lg px-3 py-2">
                          <span className="text-lg leading-none">{w.emoji}</span>
                          <span className="flex-1 min-w-0">
                            <span className="text-white font-bold">{w.name}</span>
                            <span className="text-white/40 text-xs"> · {w.subject}</span>
                          </span>
                          <StarRow stars={w.stars} />
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
