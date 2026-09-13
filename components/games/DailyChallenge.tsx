/**
 * Η ΠΡΟΚΛΗΣΗ ΤΗΣ ΗΜΕΡΑΣ (`daily`)
 * ===============================
 * The shell that stitches three 30" rounds of existing games into one daily
 * challenge: same three rounds, same order, same questions for every child on
 * the same Athens day.
 *
 * What lives here is only the frame — intro, the "get ready" beat, the round
 * host, the 0–10 result, the streak and the share card. The rounds themselves
 * are lazy components under `components/games/rounds/` that know nothing about
 * XP or streaks (see the contract in `./playRound`), and every number, every
 * string and the round pool itself come from `data/games/daily.ts`.
 *
 * Two rules this file exists to enforce:
 *
 *   1. **XP exactly once a day.** The streak record in localStorage is the
 *      single source of truth: if its `lastDayKey` is already today, the run is
 *      practice — no `grantGameReward`, no streak change. The guard re-reads
 *      storage at the moment of finishing rather than trusting component state,
 *      so a StrictMode double-invoke or a second tab cannot pay twice.
 *   2. **Nothing personal leaves the device.** The share card carries a score,
 *      a streak and WiseBot branding. There is no field for a child's name or
 *      birth date in `GameCardData`, and none is passed here.
 */
import React, { Suspense, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { motion as m, AnimatePresence } from 'framer-motion';
import { CalendarDays, Flame, Play, Share2, Trophy, Loader2, Sparkles, RotateCcw } from 'lucide-react';
import GameBackButton from './GameBackButton';
import { useEconomy } from '../../context/EconomyContext';
import { grantGameReward } from './gameRewards';
import { athensDayKey, seedFromDayKey } from '../../utils/dailySeed';
import { roundSeed, type RoundResult } from './playRound';
import { renderGameCard, shareGameCard } from '../../utils/gameShareCard';
import {
  DAILY_ACCENT,
  DAILY_COPY,
  DAILY_GAME_KEY,
  DAILY_ROUND_POOL,
  MAX_SCORE,
  READY_SECONDS,
  ROUNDS_PER_DAY,
  ROUND_MS,
  type DailyRound,
} from '../../data/games/daily';
import {
  displayStreak,
  hasPlayedOn,
  nextStreak,
  normaliseScore,
  pickRoundsForDay,
  readStreak,
  roundRatio,
  scorePraise,
  scoreToTier,
  writeStreak,
  type DailyStreak,
} from './dailyLogic';

const motion = m as any;
const AnimatePresenceAny = AnimatePresence as any;

/** How long each "3… 2… 1…" step is shown before the round starts. */
const READY_STEP_MS = 800;
/** How long a share confirmation stays on screen. */
const SHARE_MSG_MS = 4000;

interface DailyChallengeProps {
  lang: 'el' | 'en';
  onBack: () => void;
}

type Phase = 'intro' | 'ready' | 'playing' | 'result';

export default function DailyChallenge({ lang, onBack }: DailyChallengeProps) {
  const { earnXp, showNotification } = useEconomy();
  const t = DAILY_COPY[lang];

  // Day and stored streak are read once, in a state initialiser. The day key
  // in particular must not be re-read mid-run: a child who starts at 23:59
  // finishes the challenge they started, seeded and banked under one date.
  const [opening] = useState(() => {
    const key = athensDayKey();
    const stored = readStreak();
    return { dayKey: key, stored, played: hasPlayedOn(stored, key) };
  });
  const dayKey = opening.dayKey;
  const daySeed = useMemo(() => seedFromDayKey(dayKey), [dayKey]);
  const rounds = useMemo<DailyRound[]>(
    () => pickRoundsForDay(dayKey, DAILY_ROUND_POOL, ROUNDS_PER_DAY),
    [dayKey],
  );
  const lazyRounds = useMemo(
    () => rounds.map((r) => React.lazy(r.load)),
    [rounds],
  );
  const roundLabels = useMemo(() => rounds.map((r) => r.label[lang]), [rounds, lang]);

  // A child who already played today lands straight on their result — that is
  // the "already played today" state: today's score, the streak, the share
  // card, and no run that could pay XP twice.
  const [phase, setPhase] = useState<Phase>(opening.played ? 'result' : 'intro');
  const [countdown, setCountdown] = useState(READY_SECONDS);
  const [results, setResults] = useState<RoundResult[]>([]);
  const [score, setScore] = useState(() => (opening.played && opening.stored ? opening.stored.lastScore : 0));
  const [streak, setStreak] = useState<DailyStreak | null>(opening.stored);
  const [playedToday, setPlayedToday] = useState(opening.played);
  const [isPractice, setIsPractice] = useState(false);
  const [sharing, setSharing] = useState(false);
  const [shareMsg, setShareMsg] = useState<string | null>(null);

  // Accumulated results live in a ref as well as in state: a round reports from
  // a timer callback, and the next decision ("another round, or finish?") must
  // read the count as it is *now*, not as it was when the callback was made.
  const resultsRef = useRef<RoundResult[]>([]);
  const grantedRef = useRef(false);
  const shareTimerRef = useRef<number | null>(null);

  /* ── warm the chunks so the 30" never starts on a spinner ── */
  useEffect(() => {
    rounds.forEach((r) => { void r.load().catch(() => { /* offline: Suspense covers it */ }); });
  }, [rounds]);

  useEffect(() => () => {
    if (shareTimerRef.current !== null) window.clearTimeout(shareTimerRef.current);
  }, []);

  /* ── "get ready" countdown ── */
  useEffect(() => {
    if (phase !== 'ready') return;
    if (countdown <= 0) { setPhase('playing'); return; }
    const id = window.setTimeout(() => setCountdown((c) => c - 1), READY_STEP_MS);
    return () => window.clearTimeout(id);
  }, [phase, countdown]);

  /* ── end of the third round ── */
  const finishRun = useCallback((finished: readonly RoundResult[]) => {
    const targets = rounds.map((r) => r.target);
    const finalScore = normaliseScore(finished, targets);

    // Re-read storage, never component state: this is the guard that makes XP
    // once-a-day true even under a double invoke or a second tab.
    const stored = readStreak();
    const counted = !hasPlayedOn(stored, dayKey);

    if (counted) {
      const record = nextStreak(stored, dayKey, finalScore);
      writeStreak(record);
      setStreak(record);
      if (!grantedRef.current) {
        grantedRef.current = true;
        const tier = scoreToTier(finalScore);
        // The reward helper writes its own daily-cap record to localStorage, which
        // throws when the origin's quota is full. Losing the XP is survivable; losing
        // the result screen — the score, the streak, the share card — is not. Never
        // let a storage failure escape into the render path.
        if (tier > 0) {
          try {
            grantGameReward(DAILY_GAME_KEY, tier, earnXp, showNotification, lang);
          } catch { /* quota or a blocked store: the run still finished */ }
        }
      }
    } else {
      setStreak(stored);
    }

    setIsPractice(!counted);
    setPlayedToday(true);
    setScore(finalScore);
    setPhase('result');
  }, [rounds, dayKey, earnXp, showNotification, lang]);

  const handleRoundDone = useCallback((result: RoundResult) => {
    if (resultsRef.current.length >= rounds.length) return;
    const next = [...resultsRef.current, result];
    resultsRef.current = next;
    setResults(next);
    if (next.length < rounds.length) {
      setCountdown(READY_SECONDS);
      setPhase('ready');
    } else {
      finishRun(next);
    }
  }, [rounds.length, finishRun]);

  const start = useCallback(() => {
    resultsRef.current = [];
    grantedRef.current = false;
    setResults([]);
    setScore(0);
    setShareMsg(null);
    setIsPractice(playedToday);
    setCountdown(READY_SECONDS);
    setPhase('ready');
  }, [playedToday]);

  /* ── the share card ── */
  const share = useCallback(async () => {
    if (sharing) return;
    setSharing(true);
    setShareMsg(null);
    try {
      const shownStreak = displayStreak(streak, dayKey);
      const url = await renderGameCard({
        gameTitle: t.cardTitle,
        headline: t.cardHeadline(score, MAX_SCORE),
        stat: `${score}/${MAX_SCORE}`,
        substat: t.cardSubstat(roundLabels.join(' · ')),
        streak: shownStreak,
        lang,
        accent: DAILY_ACCENT,
      });
      const how = await shareGameCard(url, {
        title: t.shareTitle,
        text: t.shareText(score, MAX_SCORE),
      });
      setShareMsg(t.shareDone[how]);
    } catch {
      setShareMsg(t.shareFailed);
    } finally {
      setSharing(false);
      if (shareTimerRef.current !== null) window.clearTimeout(shareTimerRef.current);
      shareTimerRef.current = window.setTimeout(() => setShareMsg(null), SHARE_MSG_MS);
    }
  }, [sharing, streak, dayKey, t, score, roundLabels, lang]);

  const roundIndex = results.length;
  const ActiveRound = lazyRounds[roundIndex];
  const activeLabel = roundLabels[roundIndex] ?? '';
  const liveStreak = displayStreak(streak, dayKey);
  /** A run finished in this session — as opposed to today's banked result. */
  const justPlayed = results.length > 0;
  const returning = playedToday && !justPlayed;
  const isNewRecord = justPlayed && !isPractice && !!streak
    && streak.streak >= streak.bestStreak && streak.streak > 1;

  return (
    <div className="h-full flex flex-col items-center p-3 select-none overflow-hidden">
      {/* HEADER — one row, ~52px, so the rounds keep the rest of the phone */}
      <div className="flex justify-between items-center gap-2 w-full max-w-md mb-2 bg-black/50 backdrop-blur-md px-3 py-2 rounded-xl border border-white/10 z-10 shrink-0">
        <GameBackButton onClick={onBack} lang={lang} />

        {phase === 'playing' || phase === 'ready' ? (
          <>
            <p className="text-xs font-[1000] text-white/80 uppercase tracking-widest truncate">
              {t.roundOf(roundIndex + 1, rounds.length)}
            </p>
            <div className="flex items-center gap-1.5 shrink-0" aria-hidden="true">
              {rounds.map((r, i) => (
                <span
                  key={r.key}
                  className={`w-2 h-2 rounded-full ${i < roundIndex ? 'bg-orange-400' : i === roundIndex ? 'bg-white' : 'bg-white/20'}`}
                />
              ))}
            </div>
          </>
        ) : (
          <>
            <h2 className="text-sm font-[1000] text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-amber-400 to-rose-400 italic tracking-tighter leading-none text-center truncate">
              {t.title}
            </h2>
            {liveStreak > 0 ? (
              <div className="flex items-center gap-1 px-2 py-1 rounded-lg bg-orange-500/20 border border-orange-500/30 shrink-0">
                <Flame size={12} className="text-orange-400" />
                <span className="text-xs font-[1000] text-orange-200 font-mono">{liveStreak}</span>
              </div>
            ) : (
              <div className="w-11 shrink-0" />
            )}
          </>
        )}
      </div>

      <div className="flex-1 w-full max-w-md min-h-0 flex flex-col">
        <AnimatePresenceAny mode="wait">
          {/* ───────────────────────────── INTRO ───────────────────────────── */}
          {phase === 'intro' && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="flex-1 min-h-0 flex flex-col items-center justify-center gap-5 text-center px-1 overflow-y-auto"
            >
              <div className="w-20 h-20 bg-orange-500/20 border border-orange-500/30 rounded-3xl flex items-center justify-center shrink-0">
                <CalendarDays size={40} className="text-orange-400" />
              </div>

              <div className="space-y-1.5">
                <h1 className="text-2xl font-[1000] text-white uppercase italic tracking-tighter leading-none">
                  {t.title}
                </h1>
                <p className="text-white/60 font-bold text-sm">{t.tagline}</p>
              </div>

              {/* Today's three rounds, in the order they will be played */}
              <div className="flex items-center justify-center gap-2 flex-wrap">
                {roundLabels.map((label, i) => (
                  <span
                    key={rounds[i].key}
                    className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-white/70 text-[10px] font-[1000] uppercase tracking-widest"
                  >
                    {i + 1}. {label}
                  </span>
                ))}
              </div>

              <ul className="w-full space-y-1.5 text-left">
                <li className="text-[10px] font-[1000] uppercase tracking-widest text-white/35">{t.howTitle}</li>
                {t.how.map((line) => (
                  <li key={line} className="flex items-start gap-2 text-white/55 text-xs font-bold">
                    <Sparkles size={12} className="text-orange-400/70 mt-0.5 shrink-0" />
                    {line}
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={start}
                className="px-10 py-4 bg-gradient-to-r from-orange-600 to-rose-600 rounded-2xl text-white font-[1000] uppercase tracking-widest text-sm hover:scale-105 active:scale-95 transition-all flex items-center gap-2 shadow-lg shadow-orange-500/20"
              >
                <Play size={16} fill="currentColor" /> {t.start}
              </button>

              <p className="text-white/25 text-[10px] font-bold uppercase tracking-widest">{t.xpNote}</p>
            </motion.div>
          )}

          {/* ───────────────────────────── READY ───────────────────────────── */}
          {phase === 'ready' && (
            <motion.div
              key="ready"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex-1 min-h-0 flex flex-col items-center justify-center gap-4 text-center"
            >
              <p className="text-white/40 font-[1000] uppercase tracking-widest text-xs">{t.ready}</p>
              <p className="text-3xl font-[1000] text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-rose-400 uppercase italic tracking-tighter">
                {activeLabel}
              </p>
              <motion.p
                key={`c-${countdown}`}
                initial={{ scale: 1.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-8xl font-[1000] text-white font-mono leading-none"
              >
                {countdown > 0 ? countdown : t.go}
              </motion.p>
            </motion.div>
          )}

          {/* ──────────────────────────── PLAYING ──────────────────────────── */}
          {phase === 'playing' && ActiveRound && (
            <motion.div
              key={`play-${roundIndex}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex-1 min-h-0 w-full"
            >
              <Suspense
                fallback={
                  <div className="h-full flex flex-col items-center justify-center gap-3">
                    <Loader2 size={32} className="text-orange-400 animate-spin" />
                    <p className="text-white/40 font-[1000] text-xs uppercase tracking-widest">{t.loading}</p>
                  </div>
                }
              >
                <ActiveRound
                  key={`round-${roundIndex}`}
                  seed={roundSeed(daySeed, roundIndex)}
                  ms={ROUND_MS}
                  lang={lang}
                  onDone={handleRoundDone}
                />
              </Suspense>
            </motion.div>
          )}

          {/* ───────────────────────────── RESULT ──────────────────────────── */}
          {phase === 'result' && (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="flex-1 min-h-0 flex flex-col items-center justify-center gap-4 text-center px-1 overflow-y-auto"
            >
              {returning && (
                <div className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10">
                  <p className="text-[10px] font-[1000] uppercase tracking-widest text-white/50">{t.alreadyTitle}</p>
                  <p className="text-white/40 text-[11px] font-bold mt-0.5">{t.alreadyBody}</p>
                </div>
              )}

              <p className="text-orange-300 font-[1000] uppercase tracking-widest text-sm">
                {scorePraise(score, lang)}
              </p>

              <div>
                <p className="text-[10px] font-[1000] uppercase tracking-widest text-white/35">
                  {returning ? t.todayLabel : t.scoreLabel}
                </p>
                <p className="text-7xl font-[1000] text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-amber-300 to-rose-400 font-mono leading-none mt-1">
                  {score}<span className="text-3xl text-white/30">/{MAX_SCORE}</span>
                </p>
              </div>

              {/* Per-round breakdown, only for a run played in this session */}
              {justPlayed && (
                <div className="w-full space-y-1.5">
                  <p className="text-[10px] font-[1000] uppercase tracking-widest text-white/30">{t.roundsLabel}</p>
                  {results.map((r, i) => (
                    <div
                      key={rounds[i]?.key ?? i}
                      className="flex items-center justify-between px-3 py-2 rounded-xl bg-white/5 border border-white/10"
                    >
                      <span className="text-[11px] font-[1000] uppercase tracking-widest text-white/60">
                        {roundLabels[i]}
                      </span>
                      <span className="text-sm font-[1000] text-white font-mono">
                        {Math.round(roundRatio(r, rounds[i]?.target) * MAX_SCORE)}/{MAX_SCORE}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Streak */}
              <div className="flex items-center justify-center gap-2 flex-wrap">
                {liveStreak > 0 && (
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-orange-500/20 border border-orange-500/30">
                    <Flame size={13} className="text-orange-400" />
                    <span className="text-[11px] font-[1000] uppercase tracking-widest text-orange-200">
                      {t.streakDays(liveStreak)}
                    </span>
                  </div>
                )}
                {!!streak && streak.bestStreak > 1 && (
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10">
                    <Trophy size={13} className="text-amber-400" />
                    <span className="text-[11px] font-[1000] uppercase tracking-widest text-white/60">
                      {t.bestLabel}: {streak.bestStreak}
                    </span>
                  </div>
                )}
              </div>

              {isNewRecord && (
                <p className="text-amber-400 font-[1000] uppercase tracking-widest text-[11px] animate-pulse">
                  {t.newRecord}
                </p>
              )}
              {liveStreak === 1 && !isPractice && (
                <p className="text-white/40 text-[11px] font-bold">{t.firstDay}</p>
              )}

              {/* Share + practice */}
              <div className="flex items-center justify-center gap-2.5 flex-wrap">
                <button
                  type="button"
                  onClick={share}
                  disabled={sharing}
                  className="px-7 py-3.5 bg-gradient-to-r from-orange-600 to-rose-600 rounded-2xl text-white font-[1000] uppercase tracking-widest text-xs hover:scale-105 active:scale-95 transition-all flex items-center gap-2 disabled:opacity-60 disabled:hover:scale-100"
                >
                  {sharing ? <Loader2 size={14} className="animate-spin" /> : <Share2 size={14} />}
                  {sharing ? t.sharing : t.share}
                </button>
                <button
                  type="button"
                  onClick={start}
                  className="px-7 py-3.5 bg-white/5 border border-white/10 rounded-2xl text-white/60 font-[1000] uppercase tracking-widest text-xs hover:bg-white/10 transition-all flex items-center gap-2"
                >
                  <RotateCcw size={14} /> {t.practice}
                </button>
              </div>

              {shareMsg && (
                <p className="text-white/60 text-[11px] font-bold" role="status">{shareMsg}</p>
              )}

              <p className="text-white/25 text-[10px] font-bold uppercase tracking-widest">
                {isPractice || returning ? t.noXpNote : t.comeBack}
              </p>
              <p className="text-white/20 text-[10px] font-bold">{t.practiceNote}</p>
            </motion.div>
          )}
        </AnimatePresenceAny>
      </div>
    </div>
  );
}
