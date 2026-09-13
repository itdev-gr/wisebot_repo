/**
 * DIFFERENCE FINDER — the 30-second daily round
 * =============================================
 * A deterministic slice of `components/games/DifferenceFinder.tsx`: the same
 * two-panel ORIGINAL / SPOT layout and the same green-ring reward, cut down to a
 * single seeded board that runs for `ms` and reports `{ correct, total }` once.
 *
 * It owns nothing else. No back button, no score screen, no `grantGameReward` —
 * the daily shell frames all three rounds and grants XP once for the whole
 * challenge (see `components/games/playRound.ts`).
 *
 * Two things this file must never break:
 *   - every marker comes from `buildDiffRound(seed)`, so a phone in Θεσσαλονίκη
 *     and a tablet in Λονδίνο hunt the very same four differences;
 *   - `onDone` fires exactly once. A late interval tick, a double-mount under
 *     StrictMode, or "found the last one just as the clock hits zero" all race
 *     here, so every path goes through `finish()` behind `doneRef`.
 */
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { LucideIcon } from 'lucide-react';
import { Bug, CheckCircle, Circle, Heart, Hexagon, Square, Star, Timer, Triangle, Zap } from 'lucide-react';
import type { PlayRoundProps } from '../playRound';
import { buildDiffRound, DIFF_ICON_SIZE } from '../../../data/games/rounds/diffRoundData';

/** Shape key (content) → icon component (code). */
const ICONS: Record<string, LucideIcon> = {
  star: Star,
  zap: Zap,
  triangle: Triangle,
  heart: Heart,
  bug: Bug,
  square: Square,
  circle: Circle,
  hexagon: Hexagon,
};

/** Touch target around every marker. Apple/Material floor is 44px; 48 is kinder. */
const HIT = 48;

/** How long the "all found!" flourish shows before the round reports in. */
const WIN_PAUSE_MS = 700;

export function DiffRound({ seed, ms, lang, onDone }: PlayRoundProps) {
  const spec = useMemo(() => buildDiffRound(seed), [seed]);
  const total = spec.spots.length;

  const [found, setFound] = useState<string[]>([]);
  const [miss, setMiss] = useState<{ x: number; y: number; n: number } | null>(null);
  const [remaining, setRemaining] = useState(() => Math.max(0, ms));

  // Refs, not state: the interval closure reads the score at the moment the
  // clock runs out, and a stale `found` there would under-report the round.
  const foundRef = useRef<string[]>([]);
  const doneRef = useRef(false);
  const endAtRef = useRef(0);
  const missCountRef = useRef(0);
  const tickRef = useRef<number | null>(null);
  const missTimerRef = useRef<number | null>(null);
  const winTimerRef = useRef<number | null>(null);

  // The shell usually passes an inline arrow; keeping it in a ref stops the
  // countdown from being torn down and restarted on every parent render.
  const onDoneRef = useRef(onDone);
  useEffect(() => { onDoneRef.current = onDone; }, [onDone]);

  const finish = useCallback(() => {
    if (doneRef.current) return;
    doneRef.current = true;
    if (tickRef.current !== null) { window.clearInterval(tickRef.current); tickRef.current = null; }
    if (winTimerRef.current !== null) { window.clearTimeout(winTimerRef.current); winTimerRef.current = null; }
    if (missTimerRef.current !== null) { window.clearTimeout(missTimerRef.current); missTimerRef.current = null; }
    onDoneRef.current({ correct: foundRef.current.length, total });
  }, [total]);

  // Countdown. The deadline is wall-clock, so a backgrounded tab that misses
  // ticks still ends the round on time instead of running long.
  useEffect(() => {
    if (doneRef.current) return;
    if (endAtRef.current === 0) endAtRef.current = Date.now() + Math.max(0, ms);
    const tick = () => {
      const left = endAtRef.current - Date.now();
      setRemaining(left > 0 ? left : 0);
      if (left <= 0) finish();
    };
    tickRef.current = window.setInterval(tick, 200);
    tick();
    return () => {
      if (tickRef.current !== null) { window.clearInterval(tickRef.current); tickRef.current = null; }
    };
  }, [ms, finish]);

  // Unmount: the two one-shot timers outlive the countdown effect otherwise.
  useEffect(() => () => {
    if (missTimerRef.current !== null) { window.clearTimeout(missTimerRef.current); missTimerRef.current = null; }
    if (winTimerRef.current !== null) { window.clearTimeout(winTimerRef.current); winTimerRef.current = null; }
  }, []);

  const tapSpot = useCallback((id: string) => {
    if (doneRef.current || foundRef.current.includes(id)) return;
    const next = [...foundRef.current, id];
    foundRef.current = next;
    setFound(next);
    if (next.length >= total && winTimerRef.current === null) {
      winTimerRef.current = window.setTimeout(() => {
        winTimerRef.current = null;
        finish();
      }, WIN_PAUSE_MS);
    }
  }, [finish, total]);

  const tapMiss = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (doneRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    missCountRef.current += 1;
    setMiss({ x: e.clientX - rect.left, y: e.clientY - rect.top, n: missCountRef.current });
    if (missTimerRef.current !== null) window.clearTimeout(missTimerRef.current);
    missTimerRef.current = window.setTimeout(() => {
      missTimerRef.current = null;
      setMiss(null);
    }, 500);
  }, []);

  const seconds = Math.max(0, Math.ceil(remaining / 1000));
  const fraction = ms > 0 ? Math.max(0, Math.min(1, remaining / ms)) : 0;
  const allFound = found.length >= total;

  const t = {
    prompt: lang === 'el' ? 'ΒΡΕΣ ΤΙΣ ΔΙΑΦΟΡΕΣ' : 'SPOT THE DIFFERENCES',
    original: lang === 'el' ? 'ΠΡΩΤΟΤΥΠΟ' : 'ORIGINAL',
    hunt: lang === 'el' ? 'ΨΑΞΕ ΕΔΩ' : 'LOOK HERE',
    // Greek marks seconds with a prime, as MathRush's own copy does ('60";').
    seconds: lang === 'el' ? '"' : 's',
    allFound: lang === 'el' ? 'ΤΙΣ ΒΡΗΚΕΣ ΟΛΕΣ!' : 'ALL FOUND!',
    imageAlt: lang === 'el' ? 'Εικόνα του παιχνιδιού' : 'Game picture',
    spotLabel: (i: number) =>
      lang === 'el' ? `Διαφορά ${i} από ${total}` : `Difference ${i} of ${total}`,
  };

  return (
    <div className="h-full flex flex-col select-none overflow-hidden">
      {/* Clock + progress */}
      <div className="shrink-0 flex items-center justify-between gap-2 px-0.5">
        <div
          className={`flex items-center gap-1.5 font-mono font-[1000] text-lg leading-none ${
            seconds <= 10 ? 'text-red-400 animate-pulse' : 'text-white/70'
          }`}
        >
          <Timer size={16} /> <span>{seconds}{t.seconds}</span>
        </div>
        <span className="text-[10px] text-fuchsia-300 font-black uppercase tracking-widest truncate">
          {t.prompt}
        </span>
        <div className="bg-white/10 px-3 py-1 rounded-lg border border-white/10 shrink-0">
          <span className="text-xs font-black text-white font-mono">{found.length} / {total}</span>
        </div>
      </div>

      {/* Time bar — scaleX instead of width so the tick stays off the layout path */}
      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden shrink-0 mt-2 mb-2">
        <div
          className={`h-full w-full origin-left rounded-full transition-transform duration-200 ease-linear ${
            seconds <= 10 ? 'bg-red-500' : 'bg-gradient-to-r from-fuchsia-400 to-cyan-400'
          }`}
          style={{ transform: `scaleX(${fraction})` }}
        />
      </div>

      <div className="flex-1 min-h-0 flex flex-col gap-2">
        {/* ORIGINAL */}
        <div className="flex-1 min-h-0 relative rounded-2xl overflow-hidden border-2 border-blue-500/30 bg-black">
          <div className="absolute top-2 left-2 bg-blue-600 text-white text-[10px] font-black px-2 py-1 rounded shadow-lg z-20 uppercase tracking-widest">
            {t.original}
          </div>
          <img src={spec.image} alt={t.imageAlt} decoding="async" className="w-full h-full object-cover opacity-80" />
          {spec.spots.map((spot) => {
            const Icon = ICONS[spot.shape.key] ?? Star;
            return (
              <div
                key={`orig-${spot.id}`}
                className="absolute flex items-center justify-center pointer-events-none"
                style={{ left: `${spot.x}%`, top: `${spot.y}%`, width: HIT, height: HIT, transform: 'translate(-50%, -50%)' }}
              >
                <Icon size={DIFF_ICON_SIZE} className={`${spot.shape.color} drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]`} strokeWidth={2.5} />
              </div>
            );
          })}
        </div>

        {/* SPOT THE DIFFERENCE — the playable copy */}
        <div
          className="flex-1 min-h-0 relative rounded-2xl overflow-hidden border-2 border-fuchsia-500/30 bg-black cursor-crosshair"
          onClick={tapMiss}
        >
          <div className="absolute top-2 left-2 bg-fuchsia-600 text-white text-[10px] font-black px-2 py-1 rounded shadow-lg z-20 uppercase tracking-widest">
            {t.hunt}
          </div>
          <img src={spec.image} alt={t.imageAlt} decoding="async" className="w-full h-full object-cover opacity-80" />

          {/* Missed tap — feedback only, never a penalty */}
          {miss && (
            <div
              key={miss.n}
              className="absolute w-8 h-8 border-2 border-red-500 rounded-full flex items-center justify-center animate-ping pointer-events-none z-20"
              style={{ left: miss.x - 16, top: miss.y - 16 }}
            >
              <div className="w-2 h-2 bg-red-500 rounded-full" />
            </div>
          )}

          {spec.spots.map((spot, i) => {
            const Icon = ICONS[spot.shape.key] ?? Star;
            const isFound = found.includes(spot.id);
            return (
              <button
                key={`spot-${spot.id}`}
                type="button"
                aria-label={t.spotLabel(i + 1)}
                aria-pressed={isFound}
                onClick={(e) => { e.stopPropagation(); tapSpot(spot.id); }}
                className={`absolute flex items-center justify-center rounded-full transition-all duration-300 active:scale-90 ${
                  isFound ? 'bg-green-500/25 ring-4 ring-green-400 shadow-[0_0_20px_rgba(74,222,128,0.5)]' : ''
                }`}
                style={{ left: `${spot.x}%`, top: `${spot.y}%`, width: HIT, height: HIT, transform: 'translate(-50%, -50%)' }}
              >
                {spot.kind !== 'vanish' && (
                  <Icon
                    size={DIFF_ICON_SIZE}
                    className={`${spot.kind === 'color' ? spot.shape.altColor : spot.shape.color} drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] transition-transform duration-500`}
                    style={{ transform: spot.kind === 'rotate' ? 'rotate(180deg)' : undefined }}
                    strokeWidth={2.5}
                  />
                )}
                {isFound && (
                  <CheckCircle size={16} className="text-green-400 absolute -top-1 -right-1 bg-black rounded-full" />
                )}
              </button>
            );
          })}

          {allFound && (
            // Pinned low, clear of the markers: the child's last find keeps its ring.
            <div className="absolute inset-x-0 bottom-3 flex justify-center z-30 pointer-events-none">
              <span className="px-5 py-2.5 rounded-2xl bg-green-500/90 text-black text-sm font-[1000] uppercase tracking-widest shadow-lg animate-bounce">
                {t.allFound}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DiffRound;
