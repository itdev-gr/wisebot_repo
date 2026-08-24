/**
 * PARENT DASHBOARD — «Η εβδομάδα του παιδιού».
 * ============================================
 * The vision's Νο5, phase 1 (in-app; the Sunday email reuses exactly this data later).
 * Reads only rows with real server timestamps: quiz_best.achieved_at and the created_at
 * of heroes / user_songs / user_videos — all RLS-scoped to the signed-in account, all
 * already written by existing features. Aggregation lives in utils/weeklyReport.ts
 * (pure, tested); this file only fetches and renders.
 */
import React, { useEffect, useState } from 'react';
import { CalendarDays, GraduationCap, Brain, Sparkles, MessageCircleHeart, Star } from 'lucide-react';
import { supabase, isSupabaseConfigured } from '../services/supabaseClient';
import { useAuth } from '../context/AuthContext';
import { computeWeeklyReport, conversationPrompt, type WeeklyReportData } from '../utils/weeklyReport';
import { makerLevelForXp } from '../data/makerLevels';
import { SUBJECT_META, type SubjectId } from '../data/units/curriculum';

const WEEK_MS = 7 * 24 * 60 * 60 * 1000;

export default function ParentWeeklyReport({ lang }: { lang: 'el' | 'en' }) {
  const { user } = useAuth();
  const userId: string | null = user?.id ?? null;
  const [report, setReport] = useState<WeeklyReportData | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (!userId || !isSupabaseConfigured()) return;
    let cancelled = false;
    const since = new Date(Date.now() - WEEK_MS).toISOString();

    (async () => {
      try {
        const [quiz, heroes, songs, videos] = await Promise.all([
          supabase.from('quiz_best').select('category_id, score, total, achieved_at').eq('user_id', userId).gte('achieved_at', since),
          supabase.from('heroes').select('name, created_at').eq('user_id', userId).gte('created_at', since),
          supabase.from('user_songs').select('title, created_at').eq('user_id', userId).gte('created_at', since),
          supabase.from('user_videos').select('title, hero_name, created_at').eq('user_id', userId).gte('created_at', since),
        ]);
        if (cancelled) return;
        if (quiz.error && heroes.error && songs.error && videos.error) { setFailed(true); return; }
        setReport(computeWeeklyReport({
          quizRows: quiz.data || [],
          heroes: (heroes.data || []).map(h => ({ title: h.name, created_at: h.created_at })),
          songs: songs.data || [],
          videos: (videos.data || []).map(v => ({ title: v.title || v.hero_name, created_at: v.created_at })),
        }));
      } catch {
        if (!cancelled) setFailed(true);
      }
    })();

    return () => { cancelled = true; };
  }, [userId]);

  // No account, sync unavailable, or every source errored — the section simply stays out
  // of the way rather than showing wrong zeros.
  if (!userId || failed || !isSupabaseConfigured()) return null;

  const t = lang === 'el' ? {
    title: 'Η ΕΒΔΟΜΑΔΑ ΤΟΥ ΠΑΙΔΙΟΥ',
    subtitle: 'Τι έμαθε και τι δημιούργησε τις τελευταίες 7 ημέρες — από όλες τις συσκευές',
    loading: 'Ετοιμάζεται η αναφορά…',
    missions: 'αποστολές Σχολείου',
    mostly: 'κυρίως',
    stars: 'αστέρια',
    quizLine: 'σωστές απαντήσεις στα quiz',
    creations: 'δημιουργίες',
    creationsDetail: (titles: string[]) => `ανάμεσά τους: ${titles.map(x => `«${x}»`).join(', ')}`,
    rank: 'Βαθμίδα Maker',
    ask: 'ΡΩΤΗΣΤΕ ΤΟ ΣΗΜΕΡΑ',
    quiet: 'Ήσυχη εβδομάδα — καμία δραστηριότητα τις τελευταίες 7 ημέρες.',
  } : {
    title: "THE CHILD'S WEEK",
    subtitle: 'What they learned and created in the last 7 days — across all devices',
    loading: 'Preparing the report…',
    missions: 'School missions',
    mostly: 'mostly',
    stars: 'stars',
    quizLine: 'correct quiz answers',
    creations: 'creations',
    creationsDetail: (titles: string[]) => `including: ${titles.map(x => `“${x}”`).join(', ')}`,
    rank: 'Maker rank',
    ask: 'ASK THEM TODAY',
    quiet: 'A quiet week — no activity in the last 7 days.',
  };

  const tier = makerLevelForXp(parseInt(localStorage.getItem('wb_xp') || '0'));
  const subjectName = report?.topSubject && SUBJECT_META[report.topSubject as SubjectId]
    ? SUBJECT_META[report.topSubject as SubjectId].name[lang]
    : null;

  return (
    <div className="bg-[#0B0F1A]/60 border border-white/10 rounded-2xl p-6">
      <div className="mb-6">
        <h3 className="text-lg font-black text-white uppercase tracking-wider flex items-center gap-2">
          <CalendarDays size={20} className="text-sky-400" /> {t.title}
        </h3>
        <p className="text-sm text-white/40 mt-1">{t.subtitle}</p>
      </div>

      {!report ? (
        <p className="text-sm text-white/40 animate-pulse">{t.loading}</p>
      ) : (
        <>
          {report.quiet ? (
            <p className="text-sm text-white/50 bg-white/5 border border-white/10 rounded-xl p-4">{t.quiet}</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {report.schoolMissions > 0 && (
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-start gap-3">
                  <GraduationCap size={20} className="text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-black text-lg leading-tight">
                      {report.schoolMissions} {t.missions}
                      {subjectName && <span className="text-white/40 text-sm font-bold"> · {t.mostly} {subjectName}</span>}
                    </p>
                    <p className="text-xs text-white/40 font-bold mt-1 inline-flex items-center gap-1">
                      <Star size={11} className="text-amber-400" /> +{report.schoolStars} {t.stars}
                    </p>
                  </div>
                </div>
              )}

              {report.quizPct !== null && (
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-start gap-3">
                  <Brain size={20} className="text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-black text-lg leading-tight">{report.quizPct}%</p>
                    <p className="text-xs text-white/40 font-bold mt-1">{t.quizLine}</p>
                  </div>
                </div>
              )}

              {report.creationsTotal > 0 && (
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-start gap-3">
                  <Sparkles size={20} className="text-fuchsia-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-black text-lg leading-tight">{report.creationsTotal} {t.creations}</p>
                    {report.creationTitles.length > 0 && (
                      <p className="text-xs text-white/40 font-bold mt-1">{t.creationsDetail(report.creationTitles)}</p>
                    )}
                  </div>
                </div>
              )}

              <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-start gap-3">
                <span className="text-xl leading-none mt-0.5" role="img" aria-hidden>{tier.emoji}</span>
                <div>
                  <p className="text-white font-black text-lg leading-tight">{tier.name}</p>
                  <p className="text-xs text-white/40 font-bold mt-1">{t.rank}</p>
                </div>
              </div>
            </div>
          )}

          {/* Conversation starter — the report's whole point: WiseBot becomes a family conversation */}
          <div className="mt-4 rounded-xl border border-sky-500/25 bg-sky-500/[0.07] p-4 flex items-start gap-3">
            <MessageCircleHeart size={18} className="text-sky-300 shrink-0 mt-0.5" />
            <div>
              <p className="text-[10px] font-black text-sky-300/80 uppercase tracking-widest">{t.ask}</p>
              <p className="text-sm text-white/80 font-bold mt-1">{conversationPrompt(report, lang)}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
