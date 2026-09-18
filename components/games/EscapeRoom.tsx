/**
 * ΔΩΜΑΤΙΟ ΑΠΟΔΡΑΣΗΣ (`escape`)
 * ============================
 * Pick a room → read the intro → six puzzles in a fixed order → the door
 * opens → time + share card.
 *
 *   picker → intro → puzzle ⇄ solved (×6) → outro
 *
 * What lives here is only the frame. Every rule (the answer check, the unlock
 * by week, the record, the overlay nodes, 7′12″) lives in `./escapeLogic` and
 * is tested there; every room, string and number lives in
 * `data/games/escape.ts`.
 *
 * TIME IS MEASURED, NEVER PRESSED: no countdown anywhere. The small clock in
 * the header counts only while a puzzle is open — it pauses while the child
 * reads a solution — and a hint turns up on its own after `HINT_AFTER_MS` of
 * inactivity, free. A wrong answer only shakes; nothing is taken away.
 *
 * THE DOUBLE-TAP RULE (docs/games/NOTES.md §3): `AnimatePresence mode="wait"`
 * keeps the outgoing screen mounted and clickable for its exit tween, with
 * the state from *before* the change in its closures. So nothing here trusts
 * state to guard a handler:
 *   - `phaseRef`    every phase-advancing handler checks it is in its phase
 *   - `indexRef`    an answer / «ΣΥΝΕΧΕΙΑ» only lands on the puzzle it was tapped for
 *   - `finishedRef` the room is finished (time frozen, record written) once
 *   - `grantedRef`  one XP grant per escaped room
 *   - `sharingRef`  one share at a time
 *
 * PRIVACY (audience 6–12): what the child types is checked on the device and
 * never sent anywhere; the share card carries a room number and a time only.
 */
import React, { useEffect, useId, useMemo, useRef, useState } from 'react';
import { motion as m, AnimatePresence } from 'framer-motion';
import { Check, Clock, Delete, DoorOpen, KeyRound, Lightbulb, Loader2, Lock, Share2, X, ZoomIn } from 'lucide-react';
import GameBackButton from './GameBackButton';
import { useEconomy } from '../../context/EconomyContext';
import { grantGameReward } from './gameRewards';
import { renderGameCard, shareGameCard } from '../../utils/gameShareCard';
import { athensDayKey } from '../../utils/dailySeed';
import {
  ESCAPE_ACCENT,
  ESCAPE_COPY,
  ESCAPE_GAME_KEY,
  ESCAPE_ROOMS,
  ESCAPE_STORAGE_KEY,
  type EscapeOverlay,
  type EscapeRoom as Room,
} from '../../data/games/escape';
import {
  checkAnswer,
  dayAndMonth,
  deleteDigit,
  escapeTier,
  formatElapsed,
  hasEscaped,
  hintDue,
  isRoomUnlocked,
  noteLabel,
  overlayNodes,
  parseProgress,
  pressDigit,
  recordEscape,
  roomUnlockDay,
  toPuzzleView,
  type EscapeProgress,
} from './escapeLogic';

const motion = m as any;
const AnimatePresenceAny = AnimatePresence as any;

/** How often the small clock repaints and the idle check for the hint runs. */
const TICK_MS = 1000;
/** How long a flash message (share result) stays up. */
const MSG_MS = 3000;
const DIGITS = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

interface EscapeRoomProps {
  lang: 'el' | 'en';
  onBack: () => void;
}

type Phase = 'picker' | 'intro' | 'puzzle' | 'solved' | 'outro';

function readProgress(): EscapeProgress {
  try {
    return parseProgress(localStorage.getItem(ESCAPE_STORAGE_KEY));
  } catch {
    return parseProgress(null);
  }
}

function writeProgress(p: EscapeProgress): void {
  try {
    localStorage.setItem(ESCAPE_STORAGE_KEY, JSON.stringify(p));
  } catch {
    // Storage full or blocked: the record is a nicety, the escape is not.
  }
}

/* ─────────────────────── the observe picture (SVG) ─────────────────────── */

/**
 * The photo with its overlay drawn on top, as ONE svg in the image's own
 * pixel units, so every shape lands on the same spot of the photo at any
 * size. The shapes are exactly `overlayNodes(...)` — one <path> per listed
 * centre — which is the list the tests count against the answer.
 */
export function ObservePicture({ image, overlay, label }: { image: string; overlay: EscapeOverlay; label: string }) {
  const boxRef = useRef<HTMLDivElement>(null);
  const [renderW, setRenderW] = useState(0);
  const filterId = `escape-shadow-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`;

  useEffect(() => {
    const el = boxRef.current;
    if (!el) return;
    const measure = () => {
      const r = el.getBoundingClientRect();
      setRenderW(Math.min(r.width, (r.height * overlay.width) / overlay.height));
    };
    measure();
    if (typeof ResizeObserver === 'undefined') return;
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [overlay]);

  const nodes = useMemo(() => overlayNodes(overlay, renderW), [overlay, renderW]);
  const unitsPerPx = renderW > 0 ? overlay.width / renderW : 1;
  const p = overlay.panel;

  return (
    <div ref={boxRef} className="absolute inset-0">
      <svg viewBox={`0 0 ${overlay.width} ${overlay.height}`} className="w-full h-full" role="img" aria-label={label}>
        <defs>
          <filter id={filterId} x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy={2 * unitsPerPx} stdDeviation={2 * unitsPerPx} floodColor="#000000" floodOpacity="0.6" />
          </filter>
        </defs>
        <image href={image} x="0" y="0" width={overlay.width} height={overlay.height} preserveAspectRatio="xMidYMid slice" />
        {p && (
          <rect
            x={(p.x0 / 100) * overlay.width}
            y={(p.y0 / 100) * overlay.height}
            width={((p.x1 - p.x0) / 100) * overlay.width}
            height={((p.y1 - p.y0) / 100) * overlay.height}
            rx={(p.radiusPct / 100) * overlay.width}
            fill={p.fill}
            stroke={p.stroke}
            strokeWidth={p.strokePx}
            vectorEffect="non-scaling-stroke"
          />
        )}
        {nodes.map((n, i) => (
          <path
            key={i}
            data-shape={n.shape}
            d={n.d}
            fill={n.fill}
            stroke={n.stroke}
            strokeWidth={n.strokePx}
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
            filter={n.shadow ? `url(#${filterId})` : undefined}
          />
        ))}
      </svg>
    </div>
  );
}

/* ═════════════════════════════════ the game ═══════════════════════════════ */

export default function EscapeRoom({ lang, onBack }: EscapeRoomProps) {
  const { earnXp, showNotification } = useEconomy();
  const t = ESCAPE_COPY[lang];
  const [today] = useState(() => athensDayKey());

  /* ── state for rendering, each mirrored by a ref the handlers trust ── */
  const [phase, setPhase] = useState<Phase>('picker');
  const [room, setRoom] = useState<Room | null>(null);
  const [index, setIndex] = useState(0);
  const [entry, setEntry] = useState('');
  const [tried, setTried] = useState<string[]>([]);
  const [shake, setShake] = useState(0);
  const [wrong, setWrong] = useState(false);
  const [notes, setNotes] = useState<string[]>([]);
  const [hintShown, setHintShown] = useState(false);
  const [hintOpen, setHintOpen] = useState(false);
  const [hintsUsed, setHintsUsed] = useState(0);
  const [zoom, setZoom] = useState(false);
  const [, setTick] = useState(0);
  const [finishedMs, setFinishedMs] = useState(0);
  const [progress, setProgress] = useState<EscapeProgress>(() => readProgress());

  const [earnedXp, setEarnedXp] = useState(0);
  const [xpTried, setXpTried] = useState(false);
  const [newBest, setNewBest] = useState(false);
  const [sharing, setSharing] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  const phaseRef = useRef<Phase>('picker');
  const roomRef = useRef<Room | null>(null);
  const indexRef = useRef(0);
  const finishedRef = useRef(false);
  const grantedRef = useRef(false);
  const sharingRef = useRef(false);
  /** Time spent on open puzzles before the current stretch, in ms. */
  const accMsRef = useRef(0);
  /** When the current puzzle stretch started, or null while the clock is paused. */
  const segStartRef = useRef<number | null>(null);
  const lastActivityRef = useRef(0);
  /** The puzzle index whose hint has already appeared (−1: none yet). */
  const hintForRef = useRef(-1);
  const hintsUsedRef = useRef(0);
  const tickTimerRef = useRef<number | null>(null);
  const msgTimerRef = useRef<number | null>(null);

  const elapsedMs = () => accMsRef.current + (segStartRef.current === null ? 0 : Date.now() - segStartRef.current);

  /* ── the one ticker: repaints the clock, and opens the free hint after 60″ idle ── */
  useEffect(() => {
    if (phase !== 'puzzle' && phase !== 'solved') return;
    tickTimerRef.current = window.setInterval(() => {
      setTick((n) => n + 1);
      if (phaseRef.current !== 'puzzle' || hintForRef.current === indexRef.current) return;
      if (!hintDue(lastActivityRef.current, Date.now())) return;
      hintForRef.current = indexRef.current;
      hintsUsedRef.current += 1;
      setHintsUsed(hintsUsedRef.current);
      setHintShown(true);
      setHintOpen(true);
    }, TICK_MS);
    return () => {
      if (tickTimerRef.current !== null) window.clearInterval(tickTimerRef.current);
      tickTimerRef.current = null;
    };
  }, [phase]);

  /* ── every timer this component owns is cleared here ── */
  useEffect(() => () => {
    if (tickTimerRef.current !== null) window.clearInterval(tickTimerRef.current);
    if (msgTimerRef.current !== null) window.clearTimeout(msgTimerRef.current);
  }, []);

  const go = (p: Phase) => {
    phaseRef.current = p;
    setPhase(p);
  };

  const flash = (text: string | null) => {
    setMsg(text);
    if (msgTimerRef.current !== null) window.clearTimeout(msgTimerRef.current);
    msgTimerRef.current = text === null ? null : window.setTimeout(() => setMsg(null), MSG_MS);
  };

  const touch = () => {
    lastActivityRef.current = Date.now();
  };

  /** Fresh input for puzzle `i`, clock running. */
  const openPuzzle = (i: number) => {
    indexRef.current = i;
    setIndex(i);
    setEntry('');
    setTried([]);
    setWrong(false);
    setShake(0);
    setHintShown(false);
    setHintOpen(false);
    setZoom(false);
    segStartRef.current = Date.now();
    touch();
    go('puzzle');
  };

  /* ════════════════════ picker → intro → first puzzle ════════════════════ */

  const pickRoom = (r: Room) => {
    if (phaseRef.current !== 'picker' && phaseRef.current !== 'outro') return;
    if (!isRoomUnlocked(r, today)) return;
    roomRef.current = r;
    setRoom(r);
    flash(null);
    go('intro');
  };

  const toPicker = () => {
    if (phaseRef.current !== 'intro' && phaseRef.current !== 'outro') return;
    segStartRef.current = null;
    setProgress(readProgress());
    go('picker');
  };

  const begin = () => {
    if (phaseRef.current !== 'intro' || !roomRef.current) return;
    finishedRef.current = false;
    grantedRef.current = false;
    accMsRef.current = 0;
    hintForRef.current = -1;
    hintsUsedRef.current = 0;
    setHintsUsed(0);
    setNotes([]);
    setFinishedMs(0);
    setEarnedXp(0);
    setXpTried(false);
    setNewBest(false);
    openPuzzle(0);
  };

  /* ════════════════════ answering ════════════════════ */

  /** The one XP grant of an escaped room. `grantedRef` blocks re-entry. */
  const grant = (tier: number) => {
    if (grantedRef.current) return;
    grantedRef.current = true;
    if (tier <= 0) return;
    setXpTried(true);
    try {
      setEarnedXp(grantGameReward(ESCAPE_GAME_KEY, tier, earnXp, showNotification, lang));
    } catch {
      // The reward helper writes its daily-cap record to localStorage, which
      // throws when storage is full or blocked. Losing the XP is survivable;
      // losing the end screen is not.
    }
  };

  /** The last lock opened: freeze the time, write the record, pay once. */
  const finishRoom = (r: Room) => {
    if (finishedRef.current) return;
    finishedRef.current = true;
    const ms = accMsRef.current;
    setFinishedMs(ms);
    const before = readProgress();
    const tier = escapeTier(r, before);
    const rec = recordEscape(before, r.id, ms);
    writeProgress(rec.progress);
    setProgress(rec.progress);
    setNewBest(rec.newBest && !rec.first);
    grant(tier);
  };

  const submit = (i: number, value: string) => {
    if (phaseRef.current !== 'puzzle' || indexRef.current !== i) return;
    const r = roomRef.current;
    const puzzle = r?.puzzles[i];
    if (!r || !puzzle) return;
    touch();
    if (!checkAnswer(puzzle, lang, value)) {
      if (puzzle.answerType === 'choice') setTried((prev) => (prev.includes(value) ? prev : [...prev, value]));
      setWrong(true);
      setShake((n) => n + 1);
      return;
    }
    // Pause the clock while the solution is read.
    if (segStartRef.current !== null) accMsRef.current += Date.now() - segStartRef.current;
    segStartRef.current = null;
    setNotes((prev) => {
      const list = prev.slice(0, i);
      list[i] = noteLabel(puzzle, value);
      return list;
    });
    setHintOpen(false);
    setZoom(false);
    setWrong(false);
    if (i === r.puzzles.length - 1) finishRoom(r);
    go('solved');
  };

  const next = (i: number) => {
    if (phaseRef.current !== 'solved' || indexRef.current !== i) return;
    const r = roomRef.current;
    if (!r) return;
    if (i + 1 >= r.puzzles.length) {
      go('outro');
      return;
    }
    openPuzzle(i + 1);
  };

  const typeDigit = (d: string) => {
    touch();
    setWrong(false);
    setEntry((e) => pressDigit(e, d));
  };

  const eraseDigit = () => {
    touch();
    setWrong(false);
    setEntry((e) => deleteDigit(e));
  };

  /* ════════════════════ sharing (room number + time only) ════════════════════ */

  const share = async () => {
    if (sharingRef.current || phaseRef.current !== 'outro' || !roomRef.current) return;
    sharingRef.current = true;
    setSharing(true);
    flash(null);
    try {
      const n = roomRef.current.week;
      const time = formatElapsed(finishedMs);
      const url = await renderGameCard({
        gameTitle: t.cardTitle,
        headline: t.cardHeadline(n, time),
        stat: time,
        substat: t.cardSubstat,
        lang,
        accent: ESCAPE_ACCENT,
      });
      const how = await shareGameCard(url, { title: t.shareTitle, text: t.shareText(n, time) });
      flash(t.shareDone[how]);
    } catch {
      flash(t.shareFailed);
    } finally {
      sharingRef.current = false;
      setSharing(false);
    }
  };

  /* ════════════════════ derived ════════════════════ */

  const puzzle = room?.puzzles[index];
  const view = puzzle ? toPuzzleView(puzzle, lang) : null;
  const total = room?.puzzles.length ?? 0;
  const inRoom = phase === 'puzzle' || phase === 'solved';
  const clock = formatElapsed(phase === 'outro' ? finishedMs : elapsedMs());
  const titleOf = (r: Room) => (lang === 'el' ? r.titleEl : r.titleEn);
  const xpLine = earnedXp > 0 ? t.xpNote : xpTried ? t.noXpNote : null;

  const primaryBtn = 'px-7 py-4 rounded-2xl text-white font-[1000] uppercase tracking-widest text-sm bg-gradient-to-r from-amber-500 to-orange-600 shadow-lg shadow-amber-500/20 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 disabled:opacity-40 disabled:hover:scale-100';
  const ghostBtn = 'px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white/70 font-[1000] uppercase tracking-widest text-[11px] hover:bg-white/10 active:scale-95 transition-all flex items-center justify-center gap-2 disabled:opacity-30';
  const keyBtn = 'h-12 rounded-2xl bg-white/10 border border-white/15 text-white text-2xl font-[1000] active:scale-95 active:bg-white/25 transition-all flex items-center justify-center select-none';
  const fade = { initial: { opacity: 0, y: 8 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0 }, transition: { duration: 0.18 } };

  /* ── the answer area for the current puzzle ── */
  const answerArea = view && (
    <motion.div
      key={`answer-${index}`}
      initial={false}
      // A new keyframe list per wrong answer re-runs the shake without
      // remounting (a remount would close the phone keyboard on a word puzzle).
      animate={shake === 0 ? { x: 0 } : { x: shake % 2 ? [0, -10, 10, -6, 6, 0] : [0, 10, -10, 6, -6, 0] }}
      transition={{ duration: 0.35 }}
      className="shrink-0 w-full"
    >
      {view.answerType === 'number' && (
        <div className="space-y-1.5">
          <input
            readOnly
            inputMode="numeric"
            aria-label={t.check}
            value={entry}
            placeholder="?"
            onKeyDown={(e) => {
              if (/^\d$/.test(e.key)) typeDigit(e.key);
              else if (e.key === 'Backspace') eraseDigit();
              else if (e.key === 'Enter' && entry) submit(index, entry);
            }}
            className={`w-full h-12 rounded-2xl bg-black/40 border-2 text-center text-3xl font-[1000] font-mono tracking-[0.3em] text-white placeholder-white/25 outline-none caret-transparent ${
              wrong ? 'border-rose-400/70' : 'border-amber-400/40'
            }`}
          />
          <div className="grid grid-cols-3 gap-1.5">
            {DIGITS.map((d) => (
              <button key={d} type="button" onClick={() => typeDigit(d)} className={keyBtn}>{d}</button>
            ))}
            <button type="button" onClick={eraseDigit} aria-label={t.deleteDigit} className={`${keyBtn} text-white/70`}>
              <Delete size={22} />
            </button>
            <button type="button" onClick={() => typeDigit('0')} className={keyBtn}>0</button>
            <button
              type="button"
              onClick={() => submit(index, entry)}
              disabled={!entry}
              aria-label={t.check}
              className={`${keyBtn} bg-emerald-500/30 border-emerald-400/60 disabled:opacity-40`}
            >
              <Check size={26} />
            </button>
          </div>
        </div>
      )}

      {view.answerType === 'word' && (
        <form
          className="flex gap-1.5"
          onSubmit={(e) => {
            e.preventDefault();
            if (entry.trim()) submit(index, entry);
          }}
        >
          <input
            type="text"
            inputMode="text"
            autoCapitalize="off"
            autoCorrect="off"
            autoComplete="off"
            spellCheck={false}
            enterKeyHint="done"
            maxLength={40}
            value={entry}
            placeholder={t.typeHere}
            aria-label={t.typeHere}
            onChange={(e) => {
              touch();
              setWrong(false);
              setEntry(e.target.value);
            }}
            className={`flex-1 min-w-0 h-14 px-4 rounded-2xl bg-black/40 border-2 text-lg font-[1000] text-white placeholder-white/30 outline-none ${
              wrong ? 'border-rose-400/70' : 'border-amber-400/40 focus:border-amber-300'
            }`}
          />
          <button type="submit" disabled={!entry.trim()} className="h-14 px-4 rounded-2xl bg-emerald-500/30 border-2 border-emerald-400/60 text-white font-[1000] text-xs uppercase tracking-widest active:scale-95 transition-all disabled:opacity-40">
            {t.check}
          </button>
        </form>
      )}

      {view.answerType === 'choice' && view.options && (
        <div className="grid grid-cols-2 gap-1.5">
          {view.options.map((o) => {
            const out = tried.includes(o);
            return (
              <button
                key={o}
                type="button"
                disabled={out}
                onClick={() => submit(index, o)}
                className={`min-h-[3.5rem] px-2 py-2 rounded-2xl border-2 font-[1000] text-[15px] leading-tight break-words transition-all active:scale-95 ${
                  out ? 'bg-white/5 border-white/5 text-white/25 line-through' : 'bg-white/10 border-white/15 text-white hover:bg-white/20'
                }`}
              >
                {o}
              </button>
            );
          })}
        </div>
      )}
    </motion.div>
  );

  return (
    <div className="relative h-full flex flex-col items-center p-3 select-none overflow-hidden">
      {/* HEADER — one row */}
      <div className="flex justify-between items-center gap-2 w-full max-w-md mb-2 bg-black/50 backdrop-blur-md px-3 py-2 rounded-xl border border-white/10 z-10 shrink-0">
        <GameBackButton onClick={onBack} lang={lang} />
        <h2 className="text-sm font-[1000] text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-orange-300 to-rose-300 italic tracking-tighter leading-none text-center truncate">
          {room && phase !== 'picker' ? t.roomLabel(room.week) : t.title}
        </h2>
        {inRoom ? (
          <p className="flex items-center gap-1 text-[11px] font-[1000] text-white/45 font-mono shrink-0" aria-label={`${t.elapsed} ${clock}`}>
            <Clock size={11} /> {clock}
          </p>
        ) : (
          <div className="w-11 shrink-0" />
        )}
      </div>

      <div className="flex-1 w-full max-w-md min-h-0 flex flex-col">
        <AnimatePresenceAny mode="wait">

          {/* ───────────────────────────── PICKER ──────────────────────────── */}
          {phase === 'picker' && (
            <motion.div key="picker" {...fade} className="flex-1 min-h-0 flex flex-col gap-3">
              <div className="text-center space-y-1 shrink-0 pt-1">
                <KeyRound size={36} className="text-amber-300 mx-auto" />
                <h1 className="text-2xl font-[1000] text-white uppercase italic tracking-tighter leading-none">{t.title}</h1>
                <p className="text-white/60 font-bold text-[12px] px-3">{t.tagline}</p>
                <p className="text-amber-300/80 font-[1000] text-[10px] uppercase tracking-widest">{t.newRoomEveryMonday}</p>
              </div>
              <div className="flex-1 min-h-0 overflow-y-auto space-y-2 pr-0.5">
                {ESCAPE_ROOMS.map((r) => {
                  const open = isRoomUnlocked(r, today);
                  const rec = progress.rooms[r.id];
                  const { day, month } = dayAndMonth(roomUnlockDay(r));
                  return (
                    <button
                      key={r.id}
                      type="button"
                      disabled={!open}
                      onClick={() => pickRoom(r)}
                      className={`w-full text-left p-3.5 rounded-3xl border-2 flex items-center gap-3 transition-all ${
                        open
                          ? 'bg-gradient-to-br from-amber-950/90 to-orange-950/90 border-amber-500/30 hover:border-amber-400/60 active:scale-[0.98]'
                          : 'bg-white/5 border-white/10 opacity-70'
                      }`}
                    >
                      <span className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border ${open ? 'bg-amber-500/20 border-amber-500/30' : 'bg-white/5 border-white/10'}`}>
                        {!open ? <Lock size={22} className="text-white/40" /> : hasEscaped(progress, r.id) ? <DoorOpen size={24} className="text-emerald-300" /> : <KeyRound size={22} className="text-amber-300" />}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-[10px] font-[1000] uppercase tracking-widest text-amber-300/80">{t.roomLabel(r.week)}</span>
                        <span className="block text-[15px] font-[1000] text-white leading-tight">{titleOf(r)}</span>
                        <span className="block text-[11px] font-bold text-white/50">{lang === 'el' ? r.ageEl : r.ageEn}</span>
                        {!open && <span className="block text-[11px] font-[1000] text-white/60 mt-0.5">{t.opensOn(day, month)}</span>}
                        {open && rec && (
                          <span className="block text-[10px] font-[1000] uppercase tracking-widest text-emerald-300 mt-0.5">
                            ✓ {t.escapedBadge} · {t.bestTime(formatElapsed(rec.bestMs))}
                          </span>
                        )}
                      </span>
                      <span className={`shrink-0 text-[11px] font-[1000] uppercase tracking-widest ${open ? 'text-white' : 'text-white/40'}`}>
                        {open ? t.enter : t.locked}
                      </span>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* ───────────────────────────── INTRO ───────────────────────────── */}
          {phase === 'intro' && room && (
            <motion.div key={`intro-${room.id}`} {...fade} className="flex-1 min-h-0 flex flex-col items-center gap-3 text-center px-1">
              <div className="shrink-0 space-y-0.5 pt-1">
                <p className="text-[11px] font-[1000] uppercase tracking-widest text-amber-300">{t.roomLabel(room.week)} · {lang === 'el' ? room.ageEl : room.ageEn}</p>
                <h1 className="text-2xl font-[1000] text-white italic tracking-tight leading-tight">{titleOf(room)}</h1>
              </div>
              <div className="flex-1 min-h-0 w-full overflow-y-auto flex flex-col rounded-3xl bg-white/5 border border-white/10 px-4 py-3">
                <p className="my-auto text-white/85 font-bold text-[15px] leading-snug text-left whitespace-pre-line">{lang === 'el' ? room.introEl : room.introEn}</p>
              </div>
              <p className="shrink-0 text-white/50 text-[12px] font-bold px-2">{t.noRush}</p>
              <button type="button" onClick={begin} className={`${primaryBtn} shrink-0 text-base px-10 py-5`}>
                <KeyRound size={18} /> {t.start}
              </button>
              <button type="button" onClick={toPicker} className={`${ghostBtn} shrink-0`}>{t.otherRoom}</button>
            </motion.div>
          )}

          {/* ───────────────────────────── PUZZLE ──────────────────────────── */}
          {phase === 'puzzle' && room && view && (
            <motion.div key={`puzzle-${index}`} {...fade} className="flex-1 min-h-0 flex flex-col gap-2">
              {/* progress: 1/6 */}
              <div className="flex items-center gap-2 shrink-0 px-0.5">
                <span className="text-[10px] font-[1000] uppercase tracking-widest text-amber-300 truncate">{t.typeLabel[view.type]}</span>
                <div className="flex-1 flex gap-1" aria-hidden="true">
                  {room.puzzles.map((_, i) => (
                    <span key={i} className={`h-1.5 flex-1 rounded-full ${i < index ? 'bg-emerald-400' : i === index ? 'bg-amber-400' : 'bg-white/15'}`} />
                  ))}
                </div>
                <span className="text-[11px] font-[1000] text-white font-mono">{t.puzzleOf(index + 1, total)}</span>
              </div>

              {/* prompt */}
              <div className={`${view.type === 'observe' ? 'max-h-[32%] shrink-0' : 'flex-1 min-h-0'} overflow-y-auto flex flex-col rounded-2xl bg-white/10 border border-white/15 px-3 py-2.5`}>
                <p className="my-auto text-white font-bold text-[14px] leading-snug whitespace-pre-line">{view.prompt}</p>
              </div>

              {/* the picture, for the observe puzzle */}
              {view.type === 'observe' && view.image && view.overlay && (
                <div className="relative flex-1 min-h-[140px]">
                  <ObservePicture image={view.image} overlay={view.overlay} label={t.pictureLabel} />
                  <button
                    type="button"
                    onClick={() => { touch(); setZoom(true); }}
                    className="absolute bottom-1.5 right-1.5 px-2.5 py-1.5 rounded-full bg-black/70 border border-white/20 text-white text-[10px] font-[1000] uppercase tracking-widest flex items-center gap-1"
                  >
                    <ZoomIn size={12} /> {t.zoom}
                  </button>
                </div>
              )}

              {/* the final lock: the answers the child already found */}
              {view.type === 'final' && notes.length > 0 && (
                <div className="shrink-0">
                  <p className="text-[9px] font-[1000] uppercase tracking-widest text-white/40 mb-1">{t.notesTitle}</p>
                  <div className="flex flex-wrap gap-1">
                    {notes.slice(0, index).map((n, i) => (
                      <span key={i} className="px-2 py-1 rounded-lg bg-amber-500/15 border border-amber-400/30 text-[11px] font-[1000] text-amber-100">
                        <span className="text-amber-300/70 mr-1">{i + 1}.</span>{n}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="shrink-0 h-4 flex items-center justify-center gap-2">
                {wrong && <p className="text-rose-200 text-[12px] font-bold" role="status">{t.notYet}</p>}
                {!wrong && hintShown && !hintOpen && (
                  <button type="button" onClick={() => { touch(); setHintOpen(true); }} className="flex items-center gap-1 text-amber-300 text-[11px] font-[1000] uppercase tracking-widest">
                    <Lightbulb size={12} /> {t.hint}
                  </button>
                )}
              </div>

              {answerArea}
            </motion.div>
          )}

          {/* ───────────────────────────── SOLVED ──────────────────────────── */}
          {phase === 'solved' && room && view && (
            <motion.div key={`solved-${index}`} {...fade} className="flex-1 min-h-0 flex flex-col items-center gap-3 text-center px-1">
              <div className="shrink-0 w-14 h-14 rounded-full flex items-center justify-center border-2 bg-emerald-500/20 border-emerald-400/50">
                <Check size={28} className="text-emerald-300" />
              </div>
              <p className="shrink-0 text-2xl font-[1000] text-emerald-300 uppercase italic tracking-tighter">{t.correct}</p>
              {notes[index] && (
                <p className="shrink-0 px-3 py-1 rounded-xl bg-white/10 border border-white/15 text-white text-lg font-[1000]">{notes[index]}</p>
              )}
              <div className="flex-1 min-h-0 w-full overflow-y-auto flex flex-col rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-left">
                <div className="my-auto">
                  <p className="text-[10px] font-[1000] uppercase tracking-widest text-amber-300 mb-1">{t.solutionTitle}</p>
                  <p className="text-white/85 text-[14px] font-bold leading-snug whitespace-pre-line">{view.solution}</p>
                </div>
              </div>
              <button type="button" onClick={() => next(index)} className={`${primaryBtn} shrink-0`}>
                {index + 1 >= total ? <><DoorOpen size={18} /> {t.openDoor}</> : t.next}
              </button>
            </motion.div>
          )}

          {/* ───────────────────────────── OUTRO ───────────────────────────── */}
          {phase === 'outro' && room && (
            <motion.div key="outro" {...fade} className="flex-1 min-h-0 flex flex-col items-center gap-2.5 text-center px-1">
              <DoorOpen size={40} className="text-emerald-300 shrink-0" />
              <p className="shrink-0 text-3xl font-[1000] text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-orange-300 uppercase italic tracking-tighter">{t.escapedTitle}</p>
              <div className="flex-1 min-h-0 w-full overflow-y-auto flex flex-col rounded-2xl bg-white/5 border border-white/10 px-4 py-3">
                <p className="my-auto text-white/80 text-[13px] font-bold leading-snug text-left whitespace-pre-line">{lang === 'el' ? room.outroEl : room.outroEn}</p>
              </div>
              <div className="shrink-0">
                <p className="text-[10px] font-[1000] uppercase tracking-widest text-white/40">{t.yourTime}</p>
                <p className="text-5xl font-[1000] text-white font-mono leading-none">{formatElapsed(finishedMs)}</p>
                <p className="text-white/55 text-[12px] font-bold mt-1">{t.hintsUsed(hintsUsed)}</p>
                {newBest && <p className="text-amber-300 text-[12px] font-[1000] uppercase tracking-widest">{t.newBest}</p>}
              </div>
              <button type="button" onClick={share} disabled={sharing} className={`${primaryBtn} shrink-0`}>
                {sharing ? <Loader2 size={14} className="animate-spin" /> : <Share2 size={14} />}
                {sharing ? t.sharing : t.share}
              </button>
              {msg && <p className="shrink-0 text-white/60 text-[11px] font-bold" role="status">{msg}</p>}
              <div className="shrink-0 flex items-center justify-center gap-1.5 flex-wrap">
                <button type="button" onClick={toPicker} className={ghostBtn}>{t.otherRoom}</button>
                <button type="button" onClick={onBack} className={ghostBtn}>{t.exit}</button>
              </div>
              {xpLine && <p className="shrink-0 text-white/30 text-[10px] font-bold uppercase tracking-widest px-2">{xpLine}</p>}
            </motion.div>
          )}

        </AnimatePresenceAny>
      </div>

      {/* HINT — appears on its own after 60″ idle; free */}
      {phase === 'puzzle' && hintOpen && view && (
        <div className="absolute inset-x-3 top-[68px] z-20 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-md rounded-3xl bg-[#1d1606]/95 border-2 border-amber-400/60 shadow-2xl shadow-black/60 px-4 py-3"
            role="dialog"
            aria-label={t.hint}
          >
            <div className="flex items-center justify-between mb-1">
              <p className="flex items-center gap-1.5 text-[11px] font-[1000] uppercase tracking-widest text-amber-300">
                <Lightbulb size={14} /> {t.hint} <span className="text-white/40 normal-case tracking-normal font-bold">· {t.hintFree}</span>
              </p>
              <button type="button" onClick={() => { touch(); setHintOpen(false); }} aria-label={t.close} className="w-9 h-9 -mr-1 rounded-full flex items-center justify-center text-white/60 hover:bg-white/10">
                <X size={18} />
              </button>
            </div>
            <p className="text-white/90 text-[14px] font-bold leading-snug max-h-[40vh] overflow-y-auto">{view.hint}</p>
          </motion.div>
        </div>
      )}

      {/* ZOOM — the observe picture, big */}
      {phase === 'puzzle' && zoom && view?.image && view.overlay && (
        <div className="absolute inset-0 z-30 bg-black/95 flex flex-col p-3 gap-2" onClick={() => { touch(); setZoom(false); }}>
          <div className="relative flex-1 min-h-0">
            <ObservePicture image={view.image} overlay={view.overlay} label={t.pictureLabel} />
          </div>
          <button type="button" className={`${ghostBtn} shrink-0 mx-auto`}>
            <X size={14} /> {t.zoomClose}
          </button>
        </div>
      )}
    </div>
  );
}
