/**
 * ΖΩΓΡΑΦΙΣΕ & ΜΑΝΤΕΨΕ (`draw`)
 * ============================
 * One phone passed round a room. Two to six players; each one draws a secret
 * word for 60", the others pick it out of four options, and both the guesser
 * and the drawer score. After three drawings each there is a final scoreboard,
 * one XP grant and a share card.
 *
 * The screen order is what makes a single phone work, and none of it is
 * optional:
 *
 *   setup → handoff → word → draw → «δείξ' το» → guess → reveal → who → scores
 *          ↑                                                              │
 *          └──────────────────── next drawing ────────────────────────────┘
 *
 * The **handoff** screen is the important one: the phone changes hands while
 * the word is still hidden, and its «ΕΤΟΙΜΟΣ» button only unlocks after
 * `HANDOFF_SECONDS`, so the previous holder cannot tap through and catch the
 * next word on the way past.
 *
 * What lives here is only the frame. Every number (60", 3 drawings, 2–6
 * players, the points, the tiers), every crayon and every user-visible string
 * comes from `data/games/draw.ts`; every rule that can be decided without a
 * canvas — the four options, whose turn it is, who scores, which word is next —
 * lives in `./drawLogic` and is tested in `./drawLogic.test.ts`.
 *
 * PRIVACY, the hard rules for a 6–12 audience:
 *   1. **Nobody is ever asked for a name.** Players are «ΠΑΙΚΤΗΣ 1…6», built
 *      from an index by `DRAW_COPY.playerName`. There is no text input in this
 *      game at all — the guess is four buttons, exactly so a six-year-old never
 *      has to type and nothing a child writes can exist.
 *   2. **The drawing never leaves the device.** It is a canvas, snapshotted to
 *      a data: URL that lives in component state; «ΚΡΑΤΑ ΤΗ ΖΩΓΡΑΦΙΑ» is a local
 *      download. There is no upload path in this file, and there must never be.
 *   3. **The share card carries the score only** — `renderGameCard` has no field
 *      for a name or a birth date, and none is passed.
 *
 * XP goes through `grantGameReward` once per finished session (it enforces the
 * «max 2 per game per day» cap itself). `earnXp` is never called directly.
 */
import React, { useCallback, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { motion as m, AnimatePresence } from 'framer-motion';
import {
  Brush, Check, Crown, Download, Eraser, Eye, Loader2, Minus, Plus,
  Share2, Timer, Trash2, Trophy, Undo2, Users, X,
} from 'lucide-react';
import GameBackButton from './GameBackButton';
import { useEconomy } from '../../context/EconomyContext';
import { grantGameReward } from './gameRewards';
import { renderGameCard, shareGameCard } from '../../utils/gameShareCard';
import { downloadFile } from '../../utils/downloadFile';
import {
  DRAW_ACCENT,
  DRAW_CANVAS_BG,
  DRAW_COPY,
  DRAW_CRAYONS,
  DRAW_ERASER,
  DRAW_GAME_KEY,
  DRAW_GRADES,
  DRAW_SECONDS,
  DRAW_TOOLS,
  ERASER_WIDTH,
  HANDOFF_SECONDS,
  MAX_PLAYERS,
  MIN_PLAYERS,
  STROKE_WIDTH,
  type DrawGrade,
  type DrawTool,
  type DrawWord,
} from '../../data/games/draw';
import {
  awardPoints,
  buildGuessOptions,
  createSession,
  guessersOf,
  leaderboard,
  nextTurn,
  sessionTier,
  takeWord,
  topScore,
  winners,
  type DrawSession,
  type GuessOptions,
} from './drawLogic';

const motion = m as any;
const AnimatePresenceAny = AnimatePresence as any;

/** How long «ΤΕΛΟΣ ΧΡΟΝΟΥ!» stays up before the guessing starts. */
const TIME_UP_MS = 1200;
/** How long a share/keep confirmation stays on screen. */
const MSG_MS = 4000;
/** Backing-store cap. Some Android phones report 4 and the canvas gets huge. */
const MAX_DPR = 3;

interface DrawGuessProps {
  lang: 'el' | 'en';
  onBack: () => void;
}

type Phase = 'setup' | 'handoff' | 'word' | 'draw' | 'show' | 'guess' | 'reveal' | 'who' | 'scores' | 'end';

/* ════════════════════════════ the canvas ════════════════════════════════ */

/** One crayon stroke. Points are normalised 0–1 so a rotation or a keyboard
 *  opening (which resizes the box) redraws the drawing instead of clipping it. */
interface Stroke {
  hex: string;
  width: number;
  pts: { x: number; y: number }[];
}

interface BoardHandle {
  undo: () => void;
  clear: () => void;
  /** PNG data: URL of the drawing, or null if the canvas is gone. */
  snapshot: () => string | null;
}

interface BoardProps {
  tool: DrawTool;
  /** Called whenever the number of strokes changes — drives «ΠΙΣΩ»/«ΑΠ΄ ΤΗΝ ΑΡΧΗ». */
  onStrokes: (count: number) => void;
}

/**
 * The drawing surface.
 *
 * Three things here are not decoration:
 *
 *   - **The backing store is `clientWidth/Height × devicePixelRatio`** and the
 *     context is scaled to match. Without it, on any retina phone the stroke
 *     lands visibly up and left of the finger.
 *   - **Pointer events**, so one code path serves a finger, a stylus and a
 *     mouse; `setPointerCapture` keeps a stroke that wanders off the canvas
 *     attached until the child lifts, instead of leaving a half-drawn line.
 *   - **`touch-action: none`**, so dragging draws instead of scrolling the page.
 *
 * Strokes live in a ref, not in state: a 60fps stroke must not re-render the
 * toolbar sixty times a second. Only the stroke *count* is published upwards.
 */
const DrawBoard = React.forwardRef<BoardHandle, BoardProps>(function DrawBoard({ tool, onStrokes }, ref) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const strokesRef = useRef<Stroke[]>([]);
  const activeRef = useRef<{ id: number; stroke: Stroke } | null>(null);
  const sizeRef = useRef({ w: 0, h: 0 });

  const paint = useCallback((ctx: CanvasRenderingContext2D, s: Stroke, w: number, h: number) => {
    ctx.strokeStyle = s.hex;
    ctx.fillStyle = s.hex;
    ctx.lineWidth = s.width;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    if (s.pts.length < 2) {
      // A tap is a dot. Children tap far more than they drag.
      const p = s.pts[0];
      if (!p) return;
      ctx.beginPath();
      ctx.arc(p.x * w, p.y * h, s.width / 2, 0, Math.PI * 2);
      ctx.fill();
      return;
    }
    ctx.beginPath();
    ctx.moveTo(s.pts[0].x * w, s.pts[0].y * h);
    for (let i = 1; i < s.pts.length; i++) ctx.lineTo(s.pts[i].x * w, s.pts[i].y * h);
    ctx.stroke();
  }, []);

  const redraw = useCallback(() => {
    const ctx = canvasRef.current?.getContext('2d');
    if (!ctx) return;
    const { w, h } = sizeRef.current;
    ctx.fillStyle = DRAW_CANVAS_BG;
    ctx.fillRect(0, 0, w, h);
    for (const s of strokesRef.current) paint(ctx, s, w, h);
  }, [paint]);

  const resize = useCallback(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const w = Math.max(1, Math.round(wrap.clientWidth));
    const h = Math.max(1, Math.round(wrap.clientHeight));
    const dpr = Math.min(MAX_DPR, Math.max(1, window.devicePixelRatio || 1));
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;
    const ctx = canvas.getContext('2d');
    if (ctx) ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    sizeRef.current = { w, h };
    redraw();
  }, [redraw]);

  useEffect(() => {
    resize();
    if (typeof ResizeObserver === 'undefined') return;
    const wrap = wrapRef.current;
    if (!wrap) return;
    const observer = new ResizeObserver(() => resize());
    observer.observe(wrap);
    return () => observer.disconnect();
  }, [resize]);

  useImperativeHandle(ref, () => ({
    undo: () => {
      strokesRef.current = strokesRef.current.slice(0, -1);
      activeRef.current = null;
      redraw();
      onStrokes(strokesRef.current.length);
    },
    clear: () => {
      strokesRef.current = [];
      activeRef.current = null;
      redraw();
      onStrokes(0);
    },
    snapshot: () => {
      try {
        return canvasRef.current?.toDataURL('image/png') ?? null;
      } catch {
        return null;
      }
    },
  }), [redraw, onStrokes]);

  const posOf = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / (rect.width || 1);
    const y = (e.clientY - rect.top) / (rect.height || 1);
    return { x: Math.min(1, Math.max(0, x)), y: Math.min(1, Math.max(0, y)) };
  };

  const onPointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (activeRef.current) return; // a second finger must not fork the stroke
    e.preventDefault();
    try { e.currentTarget.setPointerCapture(e.pointerId); } catch { /* older Safari */ }
    const stroke: Stroke = {
      hex: tool.erase ? DRAW_CANVAS_BG : tool.hex,
      width: tool.erase ? ERASER_WIDTH : STROKE_WIDTH,
      pts: [posOf(e)],
    };
    activeRef.current = { id: e.pointerId, stroke };
    strokesRef.current = [...strokesRef.current, stroke];
    const ctx = canvasRef.current?.getContext('2d');
    if (ctx) paint(ctx, stroke, sizeRef.current.w, sizeRef.current.h);
    onStrokes(strokesRef.current.length);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const active = activeRef.current;
    if (!active || active.id !== e.pointerId) return;
    e.preventDefault();
    const prev = active.stroke.pts[active.stroke.pts.length - 1];
    const p = posOf(e);
    if (prev && Math.abs(p.x - prev.x) < 0.002 && Math.abs(p.y - prev.y) < 0.002) return;
    active.stroke.pts.push(p);
    const ctx = canvasRef.current?.getContext('2d');
    if (!ctx || !prev) return;
    const { w, h } = sizeRef.current;
    ctx.strokeStyle = active.stroke.hex;
    ctx.lineWidth = active.stroke.width;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.beginPath();
    ctx.moveTo(prev.x * w, prev.y * h);
    ctx.lineTo(p.x * w, p.y * h);
    ctx.stroke();
  };

  const onPointerEnd = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const active = activeRef.current;
    if (!active || active.id !== e.pointerId) return;
    try { e.currentTarget.releasePointerCapture(e.pointerId); } catch { /* already gone */ }
    activeRef.current = null;
    onStrokes(strokesRef.current.length);
  };

  return (
    <div
      ref={wrapRef}
      className="relative flex-1 min-h-0 w-full rounded-2xl overflow-hidden border-2 border-white/15 shadow-inner"
      style={{ background: DRAW_CANVAS_BG }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 touch-none"
        style={{ touchAction: 'none' }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerEnd}
        onPointerCancel={onPointerEnd}
      />
    </div>
  );
});

/* ════════════════════════════ the game ══════════════════════════════════ */

export default function DrawGuess({ lang, onBack }: DrawGuessProps) {
  const { earnXp, showNotification } = useEconomy();
  const t = DRAW_COPY[lang];

  /* ── setup ── */
  const [players, setPlayers] = useState(MIN_PLAYERS);
  const [grade, setGrade] = useState<DrawGrade>(DRAW_GRADES[0].id);

  /* ── the session ── */
  const [phase, setPhase] = useState<Phase>('setup');
  const [session, setSession] = useState<DrawSession>(() => createSession(MIN_PLAYERS, DRAW_GRADES[0].id));
  const [word, setWord] = useState<DrawWord | null>(null);
  const [options, setOptions] = useState<GuessOptions | null>(null);

  /* ── the round ── */
  const [handoffLeft, setHandoffLeft] = useState(HANDOFF_SECONDS);
  const [secondsLeft, setSecondsLeft] = useState(DRAW_SECONDS);
  const [timeUp, setTimeUp] = useState(false);
  const [tool, setTool] = useState<DrawTool>(DRAW_TOOLS[0]);
  const [strokes, setStrokes] = useState(0);
  const [drawing, setDrawing] = useState<string | null>(null);
  const [picked, setPicked] = useState<number | null>(null);
  const [wasCorrect, setWasCorrect] = useState(false);
  const [chosen, setChosen] = useState<number[]>([]);

  /* ── the end ── */
  const [earnedXp, setEarnedXp] = useState(0);
  const [sharing, setSharing] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  const boardRef = useRef<BoardHandle | null>(null);
  const grantedRef = useRef(false);
  const advanceRef = useRef<number | null>(null);
  const msgRef = useRef<number | null>(null);

  /**
   * Two latches that must NOT be React state.
   *
   * `AnimatePresence mode="wait"` keeps the outgoing screen mounted and
   * clickable for its exit tween (~300ms), and it renders from the elements
   * captured before the phase changed — so a handler tapped twice inside that
   * window runs a second time with the *old* state still in its closure. A
   * guard like `if (picked !== null) return` therefore cannot stop it: `picked`
   * is exactly what is stale. Children double-tap constantly, and the cost here
   * is real — points awarded twice, `guessed` climbing past `totalTurns`, and
   * the tier that pays XP rounding up to 30 for a session that earned less.
   *
   * Refs mutate synchronously, so they hold inside the exit window. Both are
   * cleared by `resetRound()` at the start of every turn.
   */
  const pickedRef = useRef(false);
  const awardedRef = useRef(false);
  const advancingRef = useRef(false);

  /* ── every timer this component owns is cleared here ── */
  useEffect(() => () => {
    if (advanceRef.current !== null) window.clearTimeout(advanceRef.current);
    if (msgRef.current !== null) window.clearTimeout(msgRef.current);
  }, []);

  /**
   * Release the advance latch only once the new turn has actually committed.
   * Clearing it inside `resetRound()` would undo it in the same call and leave
   * the double-tap window open again.
   */
  useEffect(() => {
    advancingRef.current = false;
  }, [session.turn]);

  const flash = useCallback((text: string) => {
    setMsg(text);
    if (msgRef.current !== null) window.clearTimeout(msgRef.current);
    msgRef.current = window.setTimeout(() => setMsg(null), MSG_MS);
  }, []);

  /* ── «δώσε το κινητό» countdown ── */
  useEffect(() => {
    if (phase !== 'handoff' || handoffLeft <= 0) return;
    const id = window.setTimeout(() => setHandoffLeft((n) => n - 1), 1000);
    return () => window.clearTimeout(id);
  }, [phase, handoffLeft]);

  /* ── the 60" ── */
  useEffect(() => {
    if (phase !== 'draw' || secondsLeft <= 0) return;
    const id = window.setTimeout(() => setSecondsLeft((n) => n - 1), 1000);
    return () => window.clearTimeout(id);
  }, [phase, secondsLeft]);

  /**
   * End of a drawing. Snapshots the canvas *while it is still mounted* — the
   * PNG is what the guessers see and what «ΚΡΑΤΑ ΤΗ ΖΩΓΡΑΦΙΑ» saves, so it has
   * to be taken before the phase changes.
   */
  const endDrawing = useCallback((ranOut: boolean) => {
    setDrawing(boardRef.current?.snapshot() ?? null);
    if (!ranOut) {
      // «ΤΕΛΕΙΩΣΑ» stays live during the 1200ms «ΤΕΛΟΣ ΧΡΟΝΟΥ!» beat, so a
      // drawer still jabbing at the screen can land here with the time-up
      // advance already armed. Leaving it armed drags the table back to the
      // reveal a second later, mid-guess, and reshuffles the four options
      // under the children reading them.
      if (advanceRef.current !== null) {
        window.clearTimeout(advanceRef.current);
        advanceRef.current = null;
      }
      setTimeUp(false);
      setPhase('show');
      return;
    }
    setTimeUp(true);
    if (advanceRef.current !== null) window.clearTimeout(advanceRef.current);
    advanceRef.current = window.setTimeout(() => {
      setTimeUp(false);
      setPhase('show');
    }, TIME_UP_MS);
  }, []);

  useEffect(() => {
    if (phase !== 'draw' || secondsLeft > 0 || timeUp) return;
    endDrawing(true);
  }, [phase, secondsLeft, timeUp, endDrawing]);

  /* ── round plumbing ── */

  const resetRound = useCallback(() => {
    setHandoffLeft(HANDOFF_SECONDS);
    setSecondsLeft(DRAW_SECONDS);
    setTimeUp(false);
    setTool(DRAW_TOOLS[0]);
    setStrokes(0);
    setDrawing(null);
    setOptions(null);
    setPicked(null);
    setWasCorrect(false);
    setChosen([]);
    setMsg(null);
    pickedRef.current = false;
    awardedRef.current = false;
  }, []);

  const startSession = () => {
    const taken = takeWord(createSession(players, grade));
    grantedRef.current = false;
    setEarnedXp(0);
    setSession(taken.state);
    setWord(taken.word);
    resetRound();
    setPhase('handoff');
  };

  /** The one XP grant of a session. Re-entry is blocked by `grantedRef`, so a
   *  double-tapped «ΕΠΟΜΕΝΟΣ» cannot pay twice. */
  const finishSession = (finished: DrawSession) => {
    if (!grantedRef.current) {
      grantedRef.current = true;
      const tier = sessionTier(finished);
      if (tier > 0) {
        try {
          setEarnedXp(grantGameReward(DRAW_GAME_KEY, tier, earnXp, showNotification, lang));
        } catch {
          // The reward helper writes its daily-cap record to localStorage, which
          // throws when the origin's quota is full or storage is blocked. Losing
          // the XP is survivable; losing the final scoreboard is not.
        }
      }
    }
    setPhase('end');
  };

  const nextRound = () => {
    // Same exit-window hazard: tapped twice, this would advance two turns from
    // the same stale `session` and silently skip a child's go.
    if (advancingRef.current) return;
    advancingRef.current = true;
    const advanced = nextTurn(session);
    if (advanced.finished) {
      setSession(advanced);
      finishSession(advanced);
      return;
    }
    const taken = takeWord(advanced);
    setSession(taken.state);
    setWord(taken.word);
    resetRound();
    setPhase('handoff');
  };

  const showDrawing = () => {
    if (word) setOptions(buildGuessOptions(word));
    setPhase('guess');
  };

  const pickOption = (index: number) => {
    // Ref, not `picked`: see the note on pickedRef. A second tap inside the
    // exit tween still sees `picked === null` in its stale closure.
    if (pickedRef.current || !options) return;
    pickedRef.current = true;
    setPicked(index);
    const correct = index === options.correctIndex;
    setWasCorrect(correct);
    // Two players means there is exactly one guesser — asking «ποιοι το βρήκαν;»
    // to tap the only other person at the table is a tap for nothing.
    if (correct && session.players === MIN_PLAYERS && !awardedRef.current) {
      awardedRef.current = true;
      const only = guessersOf(session);
      setChosen(only);
      setSession((s) => awardPoints(s, true, only));
    }
    setPhase('reveal');
  };

  const afterReveal = () => {
    if (wasCorrect && session.players > MIN_PLAYERS) setPhase('who');
    else setPhase('scores');
  };

  const toggleGuesser = (player: number) => {
    setChosen((prev) => (prev.includes(player) ? prev.filter((p) => p !== player) : [...prev, player]));
  };

  const confirmGuessers = () => {
    // `awardedRef`, not `chosen.length`: a second tap inside the exit tween
    // still carries the populated `chosen` in its closure and would award the
    // same round twice.
    if (!chosen.length || awardedRef.current) return;
    awardedRef.current = true;
    setSession((s) => awardPoints(s, true, chosen));
    setPhase('scores');
  };

  /* ── keeping and sharing ── */

  /** Saves the PNG to this device. No upload path exists in this file. */
  const keepDrawing = async () => {
    if (!drawing) return;
    try {
      await downloadFile(drawing, `wisebot-${DRAW_GAME_KEY}-${session.turn + 1}.png`);
      flash(t.kept);
    } catch {
      // The browser has already told the child it refused the download; there is
      // nothing useful to add and nothing to retry.
    }
  };

  const share = async () => {
    if (sharing) return;
    setSharing(true);
    setMsg(null);
    try {
      const url = await renderGameCard({
        gameTitle: t.cardTitle,
        headline: t.cardHeadline(session.guessed, session.totalTurns),
        stat: t.points(topScore(session)),
        substat: t.cardSubstat(session.players),
        lang,
        accent: DRAW_ACCENT,
      });
      const how = await shareGameCard(url, {
        title: t.shareTitle,
        text: t.shareText(session.guessed, session.totalTurns),
      });
      flash(t.shareDone[how]);
    } catch {
      flash(t.shareFailed);
    } finally {
      setSharing(false);
    }
  };

  /* ── derived ── */
  const drawerName = t.playerName(session.drawerIndex + 1);
  const wordText = word ? (lang === 'el' ? word.el : word.en) : '';
  const optionList = options ? options[lang] : [];
  const standings = leaderboard(session);
  const champions = winners(session);
  const inSession = phase !== 'setup' && phase !== 'end';

  const primaryBtn = 'px-8 py-4 rounded-2xl text-white font-[1000] uppercase tracking-widest text-sm bg-gradient-to-r from-pink-600 to-fuchsia-600 shadow-lg shadow-pink-500/20 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 disabled:opacity-40 disabled:hover:scale-100';
  const ghostBtn = 'px-5 py-3 rounded-2xl bg-white/5 border border-white/10 text-white/60 font-[1000] uppercase tracking-widest text-[11px] hover:bg-white/10 active:scale-95 transition-all flex items-center justify-center gap-2 disabled:opacity-30';

  return (
    <div className="h-full flex flex-col items-center p-3 select-none overflow-hidden">
      {/* HEADER — one row, ~52px, so the canvas keeps the rest of the phone */}
      <div className="flex justify-between items-center gap-2 w-full max-w-md mb-2 bg-black/50 backdrop-blur-md px-3 py-2 rounded-xl border border-white/10 z-10 shrink-0">
        <GameBackButton onClick={onBack} lang={lang} />
        {inSession ? (
          <>
            <p className="text-xs font-[1000] text-white/80 uppercase tracking-widest truncate">
              {t.roundOf(session.turn + 1, session.totalTurns)}
            </p>
            <p className="text-[10px] font-[1000] text-pink-300 uppercase tracking-widest truncate max-w-[38%] text-right">
              {t.turnOf(drawerName)}
            </p>
          </>
        ) : (
          <>
            <h2 className="text-sm font-[1000] text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-fuchsia-400 to-violet-400 italic tracking-tighter leading-none text-center truncate">
              {t.title}
            </h2>
            <div className="w-11 shrink-0" />
          </>
        )}
      </div>

      <div className="flex-1 w-full max-w-md min-h-0 flex flex-col">
        <AnimatePresenceAny mode="wait">

          {/* ───────────────────────────── SETUP ───────────────────────────── */}
          {phase === 'setup' && (
            <motion.div
              key="setup"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="flex-1 min-h-0 flex flex-col items-center justify-center gap-4 text-center overflow-y-auto px-1 py-2"
            >
              <div className="w-16 h-16 bg-pink-500/20 border border-pink-500/30 rounded-3xl flex items-center justify-center shrink-0">
                <Brush size={32} className="text-pink-400" />
              </div>

              <div className="space-y-1">
                <h1 className="text-xl font-[1000] text-white uppercase italic tracking-tighter leading-none">{t.title}</h1>
                <p className="text-white/60 font-bold text-[11px] px-2">{t.tagline}</p>
              </div>

              {/* players */}
              <div className="w-full">
                <p className="text-[10px] font-[1000] uppercase tracking-widest text-white/35 mb-2">{t.playersTitle}</p>
                <div className="flex items-center justify-center gap-4">
                  <button
                    type="button"
                    onClick={() => setPlayers((n) => Math.max(MIN_PLAYERS, n - 1))}
                    disabled={players <= MIN_PLAYERS}
                    aria-label={t.removePlayer}
                    className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 text-white flex items-center justify-center active:scale-95 transition-all disabled:opacity-25"
                  >
                    <Minus size={20} />
                  </button>
                  <div className="min-w-[7.5rem]">
                    <p className="text-4xl font-[1000] text-white font-mono leading-none">{players}</p>
                    <p className="text-[10px] font-[1000] uppercase tracking-widest text-pink-300 mt-1">
                      {t.playersLabel(players)}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setPlayers((n) => Math.min(MAX_PLAYERS, n + 1))}
                    disabled={players >= MAX_PLAYERS}
                    aria-label={t.addPlayer}
                    className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 text-white flex items-center justify-center active:scale-95 transition-all disabled:opacity-25"
                  >
                    <Plus size={20} />
                  </button>
                </div>
              </div>

              {/* grade band */}
              <div className="w-full">
                <p className="text-[10px] font-[1000] uppercase tracking-widest text-white/35 mb-2">{t.gradeTitle}</p>
                <div className="grid grid-cols-3 gap-1.5">
                  {DRAW_GRADES.map((g) => (
                    <button
                      key={g.id}
                      type="button"
                      onClick={() => setGrade(g.id)}
                      className={`px-1 py-2.5 rounded-xl border text-[9px] font-[1000] uppercase tracking-wide leading-tight transition-all ${
                        grade === g.id
                          ? 'bg-pink-500/25 border-pink-400/60 text-white'
                          : 'bg-white/5 border-white/10 text-white/50 hover:bg-white/10'
                      }`}
                    >
                      {g.label[lang]}
                    </button>
                  ))}
                </div>
                <p className="text-white/30 text-[10px] font-bold mt-1.5">{t.gradeNote}</p>
              </div>

              {/* how to play */}
              <ul className="w-full space-y-1 text-left">
                <li className="text-[10px] font-[1000] uppercase tracking-widest text-white/35">{t.howTitle}</li>
                {t.how.map((line) => (
                  <li key={line} className="flex items-start gap-2 text-white/55 text-[11px] font-bold">
                    <Check size={11} className="text-pink-400/70 mt-0.5 shrink-0" />
                    {line}
                  </li>
                ))}
              </ul>

              <button type="button" onClick={startSession} className={primaryBtn}>
                <Users size={16} /> {t.start}
              </button>
            </motion.div>
          )}

          {/* ──────────────────────────── HANDOFF ──────────────────────────── */}
          {phase === 'handoff' && (
            <motion.div
              key="handoff"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex-1 min-h-0 flex flex-col items-center justify-center gap-5 text-center px-2"
            >
              <p className="text-[11px] font-[1000] uppercase tracking-widest text-white/40">{t.handoffTitle}</p>
              <div className="w-24 h-24 rounded-full bg-pink-500/20 border-2 border-pink-500/40 flex items-center justify-center">
                <Users size={44} className="text-pink-300" />
              </div>
              <p className="text-3xl font-[1000] text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-fuchsia-400 uppercase italic tracking-tighter leading-none">
                {drawerName}
              </p>
              <p className="text-white/60 font-bold text-sm">{t.handoffBody(drawerName)}</p>

              <button
                type="button"
                onClick={() => setPhase('word')}
                disabled={handoffLeft > 0}
                className={`${primaryBtn} text-base px-10 py-5`}
              >
                {handoffLeft > 0 ? t.secondsLeft(handoffLeft) : <><Check size={18} /> {t.handoffReady}</>}
              </button>
              <p className="text-white/30 text-[11px] font-bold">{t.secretWarning}</p>
            </motion.div>
          )}

          {/* ───────────────────────────── WORD ────────────────────────────── */}
          {phase === 'word' && (
            <motion.div
              key="word"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="flex-1 min-h-0 flex flex-col items-center justify-center gap-5 text-center px-2"
            >
              <p className="text-[11px] font-[1000] uppercase tracking-widest text-white/40">{t.yourWordLabel}</p>
              <p className="text-4xl font-[1000] text-white uppercase italic tracking-tighter leading-tight break-words">
                {wordText}
              </p>
              <p className="text-pink-300/80 text-[11px] font-[1000] uppercase tracking-widest">{t.secretWarning}</p>
              <button type="button" onClick={() => setPhase('draw')} className={`${primaryBtn} text-base px-10 py-5`}>
                <Brush size={18} /> {t.startDrawing}
              </button>
              <p className="text-white/30 text-[11px] font-bold">{t.secondsLeft(DRAW_SECONDS)}</p>
            </motion.div>
          )}

          {/* ───────────────────────────── DRAW ────────────────────────────── */}
          {phase === 'draw' && (
            <motion.div
              key="draw"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex-1 min-h-0 flex flex-col gap-2"
            >
              {/* word + clock, one line */}
              <div className="flex items-center justify-between gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/10 shrink-0">
                <p className="text-sm font-[1000] text-white uppercase italic tracking-tight truncate">{wordText}</p>
                <div className={`flex items-center gap-1.5 shrink-0 ${secondsLeft <= 10 ? 'text-rose-400' : 'text-white/70'}`}>
                  <Timer size={14} />
                  <span className="text-sm font-[1000] font-mono tabular-nums">{t.secondsLeft(secondsLeft)}</span>
                </div>
              </div>

              <div className="relative flex-1 min-h-0 flex">
                <DrawBoard ref={boardRef} tool={tool} onStrokes={setStrokes} />
                {timeUp && (
                  <div className="absolute inset-0 rounded-2xl bg-black/70 backdrop-blur-sm flex items-center justify-center">
                    <p className="text-2xl font-[1000] text-white uppercase italic tracking-tighter">{t.timeUp}</p>
                  </div>
                )}
              </div>

              {/* crayons */}
              <div className="flex items-center justify-between gap-1.5 shrink-0" role="group" aria-label={t.toolsLabel}>
                {DRAW_CRAYONS.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setTool(c)}
                    aria-label={c.label[lang]}
                    aria-pressed={tool.id === c.id}
                    className={`h-11 flex-1 rounded-xl border-2 active:scale-95 transition-all ${
                      tool.id === c.id ? 'border-white scale-105' : 'border-white/20'
                    }`}
                    style={{ background: c.hex }}
                  />
                ))}
                <button
                  type="button"
                  onClick={() => setTool(DRAW_ERASER)}
                  aria-label={DRAW_ERASER.label[lang]}
                  aria-pressed={tool.id === DRAW_ERASER.id}
                  className={`h-11 flex-1 rounded-xl border-2 flex items-center justify-center bg-white/10 text-white active:scale-95 transition-all ${
                    tool.id === DRAW_ERASER.id ? 'border-white scale-105' : 'border-white/20'
                  }`}
                >
                  <Eraser size={18} />
                </button>
              </div>

              {/* undo · clear · done */}
              <div className="flex items-stretch gap-1.5 shrink-0">
                <button
                  type="button"
                  onClick={() => boardRef.current?.undo()}
                  disabled={strokes === 0}
                  className={ghostBtn}
                  aria-label={t.undo}
                >
                  <Undo2 size={16} /> {t.undo}
                </button>
                <button
                  type="button"
                  onClick={() => boardRef.current?.clear()}
                  disabled={strokes === 0}
                  className={ghostBtn}
                  aria-label={t.clear}
                >
                  <Trash2 size={16} />
                </button>
                <button
                  type="button"
                  onClick={() => endDrawing(false)}
                  className={`${primaryBtn} flex-1 px-3 py-3 text-xs`}
                >
                  <Check size={16} /> {t.finished}
                </button>
              </div>
            </motion.div>
          )}

          {/* ──────────────────────── SHOW THE DRAWING ─────────────────────── */}
          {phase === 'show' && (
            <motion.div
              key="show"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex-1 min-h-0 flex flex-col items-center justify-center gap-5 text-center px-2"
            >
              <div className="w-20 h-20 rounded-3xl bg-fuchsia-500/20 border border-fuchsia-500/30 flex items-center justify-center">
                <Eye size={38} className="text-fuchsia-300" />
              </div>
              <h3 className="text-2xl font-[1000] text-white uppercase italic tracking-tighter">{t.guessTitle}</h3>
              <p className="text-white/60 font-bold text-sm px-2">{t.guessBody(drawerName)}</p>
              <button type="button" onClick={showDrawing} className={`${primaryBtn} text-base px-10 py-5`}>
                <Eye size={18} /> {t.showDrawing}
              </button>
            </motion.div>
          )}

          {/* ───────────────────────────── GUESS ───────────────────────────── */}
          {phase === 'guess' && (
            <motion.div
              key="guess"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex-1 min-h-0 flex flex-col gap-2"
            >
              <p className="text-center text-[11px] font-[1000] uppercase tracking-widest text-white/40 shrink-0">
                {t.guessTitle}
              </p>
              <div
                className="flex-1 min-h-0 rounded-2xl overflow-hidden border-2 border-white/15 flex items-center justify-center"
                style={{ background: DRAW_CANVAS_BG }}
              >
                {drawing && <img src={drawing} alt="" className="max-w-full max-h-full object-contain" />}
              </div>
              <div className="grid grid-cols-2 gap-1.5 shrink-0">
                {optionList.map((option, i) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => pickOption(i)}
                    className="min-h-[3.75rem] px-2 py-2 rounded-2xl bg-white/10 border-2 border-white/15 text-white font-[1000] text-[13px] uppercase tracking-tight leading-tight break-words hover:bg-white/20 active:scale-95 transition-all"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* ──────────────────────────── REVEAL ───────────────────────────── */}
          {phase === 'reveal' && (
            <motion.div
              key="reveal"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="flex-1 min-h-0 flex flex-col items-center justify-center gap-3 text-center px-2 overflow-y-auto"
            >
              <div className={`w-16 h-16 rounded-full flex items-center justify-center border-2 ${
                wasCorrect ? 'bg-emerald-500/20 border-emerald-400/50' : 'bg-rose-500/20 border-rose-400/50'
              }`}>
                {wasCorrect ? <Check size={32} className="text-emerald-300" /> : <X size={32} className="text-rose-300" />}
              </div>
              <p className={`text-2xl font-[1000] uppercase italic tracking-tighter ${wasCorrect ? 'text-emerald-300' : 'text-rose-300'}`}>
                {wasCorrect ? t.correct : t.wrong}
              </p>
              <p className="text-5xl leading-none" aria-hidden="true">{word?.emoji}</p>
              <p className="text-white font-bold text-lg px-2 break-words">{t.reveal(wordText)}</p>
              {!wasCorrect && <p className="text-white/50 text-[12px] font-bold">{t.nobodyGuessed}</p>}

              {drawing && (
                <div className="w-28 h-28 rounded-xl overflow-hidden border border-white/15 shrink-0" style={{ background: DRAW_CANVAS_BG }}>
                  <img src={drawing} alt="" className="w-full h-full object-contain" />
                </div>
              )}

              <button type="button" onClick={keepDrawing} className={ghostBtn} disabled={!drawing}>
                <Download size={14} /> {t.keepDrawing}
              </button>
              <p className="text-white/25 text-[10px] font-bold px-3">{t.keepDrawingNote}</p>
              {msg && <p className="text-white/60 text-[11px] font-bold" role="status">{msg}</p>}

              <button type="button" onClick={afterReveal} className={primaryBtn}>
                {t.next}
              </button>
            </motion.div>
          )}

          {/* ─────────────────────────── WHO GOT IT ────────────────────────── */}
          {phase === 'who' && (
            <motion.div
              key="who"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex-1 min-h-0 flex flex-col items-center justify-center gap-4 text-center px-2 overflow-y-auto"
            >
              <p className="text-[11px] font-[1000] uppercase tracking-widest text-white/40">{t.whoGuessed}</p>
              <div className="w-full grid grid-cols-2 gap-1.5">
                {guessersOf(session).map((p) => {
                  const on = chosen.includes(p);
                  return (
                    <button
                      key={p}
                      type="button"
                      onClick={() => toggleGuesser(p)}
                      aria-pressed={on}
                      className={`min-h-[3.25rem] px-2 py-2 rounded-2xl border-2 font-[1000] text-[12px] uppercase tracking-tight transition-all active:scale-95 ${
                        on ? 'bg-emerald-500/25 border-emerald-400/60 text-white' : 'bg-white/5 border-white/10 text-white/50'
                      }`}
                    >
                      {t.playerName(p + 1)}
                    </button>
                  );
                })}
              </div>
              {chosen.length === guessersOf(session).length && (
                <p className="text-emerald-300 text-[12px] font-[1000] uppercase tracking-widest">{t.everybodyGuessed}</p>
              )}
              <button type="button" onClick={confirmGuessers} disabled={!chosen.length} className={primaryBtn}>
                {t.next}
              </button>
            </motion.div>
          )}

          {/* ────────────────────────── SCOREBOARD ─────────────────────────── */}
          {phase === 'scores' && (
            <motion.div
              key="scores"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex-1 min-h-0 flex flex-col items-center justify-center gap-3 text-center px-1 overflow-y-auto"
            >
              <p className="text-[11px] font-[1000] uppercase tracking-widest text-white/40">{t.scoreboardTitle}</p>
              <div className="w-full space-y-1.5">
                {standings.map((row, i) => (
                  <div
                    key={row.player}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-xl border ${
                      i === 0 && row.score > 0 ? 'bg-pink-500/15 border-pink-400/30' : 'bg-white/5 border-white/10'
                    }`}
                  >
                    <span className="text-[12px] font-[1000] uppercase tracking-widest text-white/70 flex items-center gap-1.5">
                      {i === 0 && row.score > 0 && <Crown size={13} className="text-amber-300" />}
                      {t.playerName(row.player + 1)}
                    </span>
                    <span className="text-sm font-[1000] text-white font-mono">{t.points(row.score)}</span>
                  </div>
                ))}
              </div>
              <button type="button" onClick={nextRound} className={primaryBtn}>{t.next}</button>
            </motion.div>
          )}

          {/* ───────────────────────────── END ─────────────────────────────── */}
          {phase === 'end' && (
            <motion.div
              key="end"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="flex-1 min-h-0 flex flex-col items-center justify-center gap-3 text-center px-1 overflow-y-auto"
            >
              <Trophy size={34} className="text-amber-300 shrink-0" />
              <p className="text-[11px] font-[1000] uppercase tracking-widest text-white/40">{t.finalTitle}</p>
              <p className="text-xl font-[1000] text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-fuchsia-300 to-amber-300 uppercase italic tracking-tighter px-2">
                {champions.length > 1 ? t.tie : t.winner(t.playerName(champions[0] + 1))}
              </p>
              <p className="text-white/50 text-[12px] font-bold">
                {t.cardHeadline(session.guessed, session.totalTurns)}
              </p>

              <div className="w-full space-y-1.5">
                {standings.map((row, i) => (
                  <div
                    key={row.player}
                    className={`flex items-center justify-between px-3 py-2 rounded-xl border ${
                      champions.includes(row.player) ? 'bg-amber-500/15 border-amber-400/30' : 'bg-white/5 border-white/10'
                    }`}
                  >
                    <span className="text-[12px] font-[1000] uppercase tracking-widest text-white/70 flex items-center gap-1.5">
                      {i === 0 && <Crown size={13} className="text-amber-300" />}
                      {t.playerName(row.player + 1)}
                    </span>
                    <span className="text-sm font-[1000] text-white font-mono">{t.points(row.score)}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-center gap-2 flex-wrap">
                <button type="button" onClick={share} disabled={sharing} className={primaryBtn}>
                  {sharing ? <Loader2 size={14} className="animate-spin" /> : <Share2 size={14} />}
                  {sharing ? t.sharing : t.share}
                </button>
                <button type="button" onClick={keepDrawing} disabled={!drawing} className={ghostBtn}>
                  <Download size={14} /> {t.keepDrawing}
                </button>
              </div>
              {msg && <p className="text-white/60 text-[11px] font-bold" role="status">{msg}</p>}

              <div className="flex items-center justify-center gap-2 flex-wrap">
                <button type="button" onClick={() => setPhase('setup')} className={ghostBtn}>
                  <Users size={14} /> {t.playAgain}
                </button>
                <button type="button" onClick={onBack} className={ghostBtn}>{t.exit}</button>
              </div>

              <p className="text-white/25 text-[10px] font-bold uppercase tracking-widest px-2">
                {earnedXp > 0 ? t.xpNote : t.noXpNote}
              </p>
              <p className="text-white/20 text-[10px] font-bold px-3">{t.keepDrawingNote}</p>
            </motion.div>
          )}

        </AnimatePresenceAny>
      </div>
    </div>
  );
}
