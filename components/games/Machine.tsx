/**
 * Η ΜΗΧΑΝΗ ΤΟΥ SPARKEN (`machine`)
 * ================================
 * Bring the ball to the target with ramps, trampolines, fans, dominoes and
 * magnets. 15 levels (locked until the previous is solved), then a free mode
 * where the child builds a machine and shares it as a code.
 *
 *   menu (level picker) → edit (place / drag / rotate) → run (replay) → done
 *
 * THE RUN IS NEVER SIMULATED IN THE RENDER LOOP. «ΠΑΙΞΕ» calls `simulate()`
 * once (pure, deterministic, `machinePhysics.ts`) and the rAF loop only reads
 * the precomputed trace at 60 fps, moving the ball and the dominoes through
 * refs — React does not render per frame.
 *
 * THE DOUBLE-TAP RULE (docs/games/NOTES.md §3): nothing trusts state to guard
 * a handler.
 *   - `phaseRef`    every phase-advancing handler checks it is in its phase
 *   - `grantedRef`  one XP grant per newly-solved level (by id)
 *   - `sharingRef`  one share at a time
 *   - `dragRef`     one pointer drag at a time
 *
 * PRIVACY (audience 6–12): nothing leaves the device. The share card carries
 * a level number and an attempt count — never a name. A level code is the
 * level itself (grid positions and tool types), nothing else.
 */
import React, { useEffect, useRef, useState } from 'react';
import { Copy, Loader2, Lock, Play, RotateCcw, RotateCw, Share2, Square, Star, Trash2, Wrench, X } from 'lucide-react';
import GameBackButton from './GameBackButton';
import { useEconomy } from '../../context/EconomyContext';
import { grantGameReward } from './gameRewards';
import { renderGameCard, shareGameCard } from '../../utils/gameShareCard';
import {
  MACHINE_ACCENT,
  MACHINE_COPY,
  MACHINE_FREE_MAX_PIECES,
  MACHINE_FREE_TOOLBOX,
  MACHINE_GAME_KEY,
  MACHINE_LEVELS,
  MACHINE_STORAGE_KEY,
  MACHINE_TOOLS,
  MACHINE_WORLD,
  machineTier,
  type MachineLevel,
  type MachinePiece,
  type MachineTool,
  type MachineToolbox,
  type MachineVec,
} from '../../data/games/machine';
import { BALL_R, DOMINO, FAN, GOAL_R, MAGNET, segmentOf, simulate, type EndReason, type SimResult } from './machinePhysics';
import { decodeMachine, encodeMachine, normalizeRot } from './machineCode';

interface MachineProps {
  lang: 'el' | 'en';
  onBack: () => void;
}

type Phase = 'menu' | 'edit' | 'run' | 'done';
type Mode = { kind: 'level'; index: number } | { kind: 'free' };
type Sel = { kind: 'piece'; index: number } | { kind: 'ball' } | { kind: 'goal' } | null;
type Drag =
  | { kind: 'new'; type: MachineTool }
  | { kind: 'piece'; index: number; moved: boolean }
  | { kind: 'ball' | 'goal'; moved: boolean };
type Ghost = { type: MachineTool; x: number; y: number } | null;
type CodeView = 'show' | 'enter' | null;

interface Progress {
  solved: number[];
}

const W = MACHINE_WORLD.w;
const H = MACHINE_WORLD.h;
const FREE_BALL: MachineVec = { x: 6, y: 4 };
const FREE_GOAL: MachineVec = { x: 26, y: 34 };
const FPS = 60;
const MSG_MS = 3000;

function readProgress(): Progress {
  try {
    const raw = JSON.parse(localStorage.getItem(MACHINE_STORAGE_KEY) || '{}');
    const solved = Array.isArray(raw?.solved) ? raw.solved.filter((n: unknown) => typeof n === 'number') : [];
    return { solved };
  } catch {
    return { solved: [] };
  }
}

function writeProgress(p: Progress): void {
  try {
    localStorage.setItem(MACHINE_STORAGE_KEY, JSON.stringify(p));
  } catch {
    // Storage full or blocked: progress is a nicety, the game is not.
  }
}

function countUsed(pieces: readonly MachinePiece[]): Record<MachineTool, number> {
  const used: Record<MachineTool, number> = { ramp: 0, trampoline: 0, fan: 0, domino: 0, magnet: 0 };
  for (const p of pieces) used[p.type] += 1;
  return used;
}

const TOOL_COLOR: Record<MachineTool, string> = {
  ramp: '#fbbf24',
  trampoline: '#f472b6',
  fan: '#22d3ee',
  domino: '#e2e8f0',
  magnet: '#f87171',
};

/* ═══════════════════════════ piece glyphs (SVG, world units) ═══════════════════════════ */

function PieceGlyph({ p, muted, compact }: { p: MachinePiece; muted?: boolean; compact?: boolean }) {
  const op = muted ? 0.55 : 1;
  const c = TOOL_COLOR[p.type];
  if (p.type === 'ramp' || p.type === 'trampoline') {
    const [ax, ay, bx, by] = segmentOf(p);
    return (
      <g opacity={op}>
        <line x1={ax} y1={ay} x2={bx} y2={by} stroke="#0f172a" strokeWidth={1.1} strokeLinecap="round" />
        <line x1={ax} y1={ay} x2={bx} y2={by} stroke={c} strokeWidth={0.7} strokeLinecap="round" />
        {p.type === 'trampoline' && (
          <line x1={ax} y1={ay} x2={bx} y2={by} stroke="#fff" strokeWidth={0.25} strokeDasharray="0.5 0.5" strokeLinecap="round" opacity={0.8} />
        )}
      </g>
    );
  }
  if (p.type === 'fan') {
    const angle = p.rot === 1 ? -90 : p.rot === 2 ? 180 : p.rot === 3 ? 90 : 0;
    return (
      <g opacity={op} transform={`rotate(${angle} ${p.x} ${p.y})`}>
        {!compact && (
          <g>
            <rect x={p.x} y={p.y - FAN.halfW} width={FAN.len} height={FAN.halfW * 2} fill={c} opacity={0.12} rx={1} />
            {[2.5, 5, 7.5].map((d) => (
              <path key={d} d={`M${p.x + d - 0.7} ${p.y - 1.2} L${p.x + d} ${p.y} L${p.x + d - 0.7} ${p.y + 1.2}`} fill="none" stroke={c} strokeWidth={0.25} opacity={0.6} />
            ))}
          </g>
        )}
        <rect x={p.x - 1} y={p.y - 1} width={2} height={2} rx={0.4} fill="#0f172a" stroke={c} strokeWidth={0.25} />
        <path d={`M${p.x - 0.5} ${p.y - 0.6} L${p.x + 0.6} ${p.y} L${p.x - 0.5} ${p.y + 0.6} Z`} fill={c} />
      </g>
    );
  }
  if (p.type === 'magnet') {
    return (
      <g opacity={op}>
        {!compact && <circle cx={p.x} cy={p.y} r={MAGNET.pullR} fill={c} opacity={0.06} stroke={c} strokeWidth={0.12} strokeDasharray="0.6 0.6" />}
        <circle cx={p.x} cy={p.y} r={MAGNET.bodyR} fill="#0f172a" stroke={c} strokeWidth={0.3} />
        <path d={`M${p.x - 0.5} ${p.y + 0.45} V${p.y - 0.1} a0.5 0.5 0 0 1 1 0 V${p.y + 0.45}`} fill="none" stroke={c} strokeWidth={0.3} strokeLinecap="round" />
      </g>
    );
  }
  // domino: drawn standing; the replay rotates the group around its base
  const baseY = p.y + DOMINO.baseDy;
  return (
    <g opacity={op}>
      <rect x={p.x - 0.35} y={baseY - DOMINO.h} width={0.7} height={DOMINO.h} rx={0.15} fill={c} stroke="#0f172a" strokeWidth={0.12} />
      <circle cx={p.x} cy={baseY - 2.2} r={0.13} fill="#0f172a" />
      <circle cx={p.x} cy={baseY - 0.8} r={0.13} fill="#0f172a" />
    </g>
  );
}

function Goal({ at }: { at: MachineVec }) {
  return (
    <g>
      <circle cx={at.x} cy={at.y} r={GOAL_R} fill="#f59e0b" opacity={0.15} />
      <circle cx={at.x} cy={at.y} r={GOAL_R} fill="none" stroke="#fbbf24" strokeWidth={0.25} strokeDasharray="0.7 0.5" />
      <text x={at.x} y={at.y + 0.75} textAnchor="middle" fontSize={2.1} fill="#fde68a" style={{ userSelect: 'none' }}>★</text>
    </g>
  );
}

const STYLE = `
@keyframes mc-in{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
.mc-in{animation:mc-in .18s ease-out}
@keyframes mc-pop{0%{transform:scale(.7);opacity:0}60%{transform:scale(1.08);opacity:1}100%{transform:scale(1);opacity:1}}
.mc-pop{animation:mc-pop .35s ease-out}
`;

/* ═══════════════════════════════════ the game ═══════════════════════════════════ */

export default function Machine({ lang, onBack }: MachineProps) {
  const { earnXp, showNotification } = useEconomy();
  const t = MACHINE_COPY[lang];

  const [phase, setPhase] = useState<Phase>('menu');
  const [mode, setMode] = useState<Mode>({ kind: 'level', index: 0 });
  const [level, setLevel] = useState<MachineLevel | null>(null);
  const [pieces, setPiecesState] = useState<MachinePiece[]>([]);
  const [ball, setBall] = useState<MachineVec>(FREE_BALL);
  const [goal, setGoal] = useState<MachineVec>(FREE_GOAL);
  const [sel, setSel] = useState<Sel>(null);
  const [ghost, setGhostState] = useState<Ghost>(null);
  const [attempts, setAttempts] = useState(0);
  const [progress, setProgress] = useState<Progress>(() => readProgress());
  const [result, setResult] = useState<SimResult | null>(null);
  const [outcome, setOutcome] = useState<EndReason | null>(null);
  const [earnedXp, setEarnedXp] = useState(0);
  const [xpTried, setXpTried] = useState(false);
  const [sharing, setSharing] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);
  const [codeView, setCodeView] = useState<CodeView>(null);
  const [code, setCode] = useState('');
  const [codeInput, setCodeInput] = useState('');
  const [codeError, setCodeError] = useState(false);

  const phaseRef = useRef<Phase>('menu');
  const grantedRef = useRef<Set<number>>(new Set());
  const sharingRef = useRef(false);
  const dragRef = useRef<Drag | null>(null);
  // Mirrors of `pieces` / `ghost` that pointer handlers read synchronously, so
  // no state updater ever has a side effect (StrictMode runs updaters twice).
  const piecesRef = useRef<MachinePiece[]>([]);
  const ghostRef = useRef<Ghost>(null);
  const progressRef = useRef<Progress>(progress);
  const resultRef = useRef<SimResult | null>(null);
  const t0Ref = useRef(0);
  const rafRef = useRef<number | null>(null);
  const msgTimerRef = useRef<number | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const ballElRef = useRef<SVGCircleElement>(null);
  const dominoElsRef = useRef<(SVGGElement | null)[]>([]);

  const go = (p: Phase) => {
    phaseRef.current = p;
    setPhase(p);
  };

  const flash = (text: string | null) => {
    setMsg(text);
    if (msgTimerRef.current !== null) window.clearTimeout(msgTimerRef.current);
    msgTimerRef.current = text === null ? null : window.setTimeout(() => setMsg(null), MSG_MS);
  };

  const setPieces = (next: MachinePiece[]) => {
    piecesRef.current = next;
    setPiecesState(next);
  };

  const setGhost = (g: Ghost) => {
    ghostRef.current = g;
    setGhostState(g);
  };

  const persist = (p: Progress) => {
    progressRef.current = p;
    setProgress(p);
    writeProgress(p);
  };

  const stopLoop = () => {
    if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    rafRef.current = null;
  };

  const fixed: readonly MachinePiece[] = level ? level.fixed : [];
  const toolbox: MachineToolbox = level ? level.toolbox : MACHINE_FREE_TOOLBOX;
  const isFree = mode.kind === 'free';
  const leftOfIn = (tool: MachineTool, ps: readonly MachinePiece[]): number => {
    const own = (toolbox[tool] ?? 0) - countUsed(ps)[tool];
    return isFree ? Math.min(own, MACHINE_FREE_MAX_PIECES - ps.length) : own;
  };
  const leftOf = (tool: MachineTool): number => leftOfIn(tool, pieces);
  const isSolved = (id: number) => progress.solved.includes(id);
  const isUnlocked = (index: number) => index === 0 || isSolved(MACHINE_LEVELS[index - 1].id);

  /* ════════════════════ menu → edit ════════════════════ */

  const openLevel = (index: number) => {
    if (phaseRef.current === 'run') return;
    const L = MACHINE_LEVELS[index];
    if (!L || !isUnlocked(index)) return;
    stopLoop();
    setMode({ kind: 'level', index });
    setLevel(L);
    setPieces([]);
    setBall(L.ball);
    setGoal(L.goal);
    setSel(null);
    setGhost(null);
    setAttempts(0);
    setResult(null);
    resultRef.current = null;
    setOutcome(null);
    setEarnedXp(0);
    setXpTried(false);
    setCodeView(null);
    flash(null);
    go('edit');
  };

  const openFree = () => {
    if (phaseRef.current === 'run') return;
    stopLoop();
    setMode({ kind: 'free' });
    setLevel(null);
    setPieces([]);
    setBall(FREE_BALL);
    setGoal(FREE_GOAL);
    setSel(null);
    setGhost(null);
    setAttempts(0);
    setResult(null);
    resultRef.current = null;
    setOutcome(null);
    setCodeView(null);
    flash(null);
    go('edit');
  };

  const toMenu = () => {
    stopLoop();
    dragRef.current = null;
    setGhost(null);
    setCodeView(null);
    setProgress(readProgress());
    go('menu');
  };

  const leave = () => {
    stopLoop();
    onBack();
  };

  /* ════════════════════ replay (refs only) ════════════════════ */

  const renderFrame = (r: SimResult, frame: number) => {
    const f = Math.max(0, Math.min(frame, r.trace.length - 1));
    const [x, y] = r.trace[f];
    const el = ballElRef.current;
    if (el) {
      el.setAttribute('cx', x.toFixed(3));
      el.setAttribute('cy', y.toFixed(3));
    }
    const angles = r.dominoes[f] ?? [];
    const els = dominoElsRef.current;
    for (let k = 0; k < angles.length; k++) {
      const g = els[k];
      if (!g) continue;
      const deg = (angles[k] * 180) / Math.PI;
      g.setAttribute('transform', `rotate(${deg.toFixed(2)} ${g.dataset.px} ${g.dataset.py})`);
    }
  };

  /** One XP grant per newly-solved level. `grantedRef` blocks re-entry. */
  const grant = (L: MachineLevel, tier: number) => {
    if (grantedRef.current.has(L.id)) return;
    grantedRef.current.add(L.id);
    setXpTried(true);
    try {
      setEarnedXp(grantGameReward(MACHINE_GAME_KEY, tier, earnXp, showNotification, lang));
    } catch {
      // The reward helper writes to localStorage, which throws when storage is
      // full or blocked. Losing the XP is survivable; losing the win screen is not.
    }
  };

  const finish = (r: SimResult, tries: number) => {
    if (phaseRef.current !== 'run') return;
    stopLoop();
    renderFrame(r, r.trace.length - 1);
    setOutcome(r.endReason);
    go('done');
    if (r.reachedGoal && mode.kind === 'level' && level) {
      const first = !progressRef.current.solved.includes(level.id);
      if (first) {
        persist({ solved: [...progressRef.current.solved, level.id] });
        grant(level, machineTier(tries));
      }
    }
  };

  const play = () => {
    if (phaseRef.current !== 'edit') return;
    const r = simulate({ ball, goal, pieces: [...fixed, ...pieces] });
    const tries = attempts + 1;
    setAttempts(tries);
    setSel(null);
    setGhost(null);
    dragRef.current = null;
    resultRef.current = r;
    setResult(r);
    setOutcome(null);
    flash(null);
    t0Ref.current = performance.now();
    renderFrame(r, 0);
    go('run');
  };

  const tick = () => {
    const r = resultRef.current;
    if (!r || phaseRef.current !== 'run') return;
    const frame = Math.floor(((performance.now() - t0Ref.current) * FPS) / 1000);
    renderFrame(r, frame);
    if (frame >= r.trace.length - 1) finish(r, attempts);
  };

  const reset = () => {
    if (phaseRef.current !== 'run' && phaseRef.current !== 'done') return;
    stopLoop();
    const r = resultRef.current;
    if (r) renderFrame(r, 0);
    resultRef.current = null;
    setResult(null);
    setOutcome(null);
    go('edit');
  };

  const next = () => {
    if (phaseRef.current !== 'done' || mode.kind !== 'level') return;
    const i = mode.index + 1;
    if (i < MACHINE_LEVELS.length) openLevel(i);
    else {
      toMenu();
      flash(t.allDone);
    }
  };

  /* ════════════════════ editing: pointer events ════════════════════ */

  /** Pointer → world grid cell (rounded, clamped), or null when off the board. */
  const worldPos = (e: React.PointerEvent): { x: number; y: number; inside: boolean } | null => {
    const svg = svgRef.current;
    if (!svg) return null;
    const ctm = svg.getScreenCTM();
    if (!ctm) return null;
    const pt = svg.createSVGPoint();
    pt.x = e.clientX;
    pt.y = e.clientY;
    const w = pt.matrixTransform(ctm.inverse());
    const inside = w.x >= -1 && w.x <= W + 1 && w.y >= -1 && w.y <= H + 1;
    const x = Math.min(W - 1, Math.max(0, Math.round(w.x)));
    const y = Math.min(H - 1, Math.max(0, Math.round(w.y)));
    return { x, y, inside };
  };

  const capture = (e: React.PointerEvent) => {
    try {
      (e.currentTarget as Element).setPointerCapture(e.pointerId);
    } catch {
      // Some WebViews refuse capture; the drag still works while the pointer stays on the element.
    }
  };

  const toolDown = (tool: MachineTool, e: React.PointerEvent) => {
    if (phaseRef.current !== 'edit' || dragRef.current || leftOfIn(tool, piecesRef.current) <= 0) return;
    e.preventDefault();
    capture(e);
    dragRef.current = { kind: 'new', type: tool };
    setSel(null);
    const w = worldPos(e);
    setGhost(w && w.inside ? { type: tool, x: w.x, y: w.y } : null);
  };

  const pieceDown = (index: number, e: React.PointerEvent) => {
    if (phaseRef.current !== 'edit' || dragRef.current) return;
    e.preventDefault();
    e.stopPropagation();
    capture(e);
    dragRef.current = { kind: 'piece', index, moved: false };
    setSel({ kind: 'piece', index });
  };

  const markerDown = (kind: 'ball' | 'goal', e: React.PointerEvent) => {
    if (phaseRef.current !== 'edit' || dragRef.current || !isFree) return;
    e.preventDefault();
    e.stopPropagation();
    capture(e);
    dragRef.current = { kind, moved: false };
    setSel({ kind });
  };

  const pointerMove = (e: React.PointerEvent) => {
    const d = dragRef.current;
    if (!d || phaseRef.current !== 'edit') return;
    const w = worldPos(e);
    if (!w) return;
    if (d.kind === 'new') {
      setGhost(w.inside ? { type: d.type, x: w.x, y: w.y } : null);
    } else if (d.kind === 'piece') {
      const ps = piecesRef.current;
      const p = ps[d.index];
      if (!p || (p.x === w.x && p.y === w.y)) return;
      d.moved = true;
      const copy = ps.slice();
      copy[d.index] = { ...p, x: w.x, y: w.y };
      setPieces(copy);
    } else if (d.kind === 'ball') {
      d.moved = true;
      setBall({ x: w.x, y: w.y });
    } else {
      d.moved = true;
      setGoal({ x: w.x, y: w.y });
    }
  };

  const pointerUp = () => {
    const d = dragRef.current;
    dragRef.current = null;
    if (!d) return;
    if (d.kind === 'new') {
      const g = ghostRef.current;
      const ps = piecesRef.current;
      if (g && leftOfIn(d.type, ps) > 0) {
        setPieces([...ps, { type: g.type, x: g.x, y: g.y, rot: 0 }]);
        setSel({ kind: 'piece', index: ps.length });
      }
      setGhost(null);
    }
  };

  const boardDown = () => {
    if (phaseRef.current !== 'edit' || dragRef.current) return;
    setSel(null);
  };

  const rotate = (delta: number) => {
    if (phaseRef.current !== 'edit' || !sel || sel.kind !== 'piece') return;
    const ps = piecesRef.current;
    const p = ps[sel.index];
    if (!p) return;
    const copy = ps.slice();
    copy[sel.index] = { ...p, rot: normalizeRot(p.type, p.rot + delta) };
    setPieces(copy);
  };

  const removeSel = () => {
    if (phaseRef.current !== 'edit' || !sel || sel.kind !== 'piece') return;
    setPieces(piecesRef.current.filter((_, i) => i !== sel.index));
    setSel(null);
  };

  const clearAll = () => {
    if (phaseRef.current !== 'edit') return;
    setPieces([]);
    setSel(null);
  };

  /* ════════════════════ free mode: the code ════════════════════ */

  const showCode = () => {
    if (phaseRef.current === 'run') return;
    const c = encodeMachine({ ball, goal, pieces });
    if (!c) return;
    setCode(c);
    setCodeView('show');
  };

  const copyCode = async () => {
    try {
      if (!navigator.clipboard?.writeText) throw new Error('no clipboard');
      await navigator.clipboard.writeText(code);
      flash(t.copied);
    } catch {
      flash(t.copyFailed);
    }
  };

  const openEnter = () => {
    if (phaseRef.current === 'run') return;
    setCodeInput('');
    setCodeError(false);
    setCodeView('enter');
  };

  const loadCode = () => {
    if (phaseRef.current === 'run') return;
    const b = decodeMachine(codeInput);
    if (!b) {
      setCodeError(true);
      return;
    }
    stopLoop();
    setBall(b.ball);
    setGoal(b.goal);
    setPieces(b.pieces.slice());
    setSel(null);
    setResult(null);
    resultRef.current = null;
    setOutcome(null);
    setCodeView(null);
    go('edit');
    flash(t.loaded);
  };

  /* ════════════════════ sharing (level + attempts) ════════════════════ */

  const share = async () => {
    if (sharingRef.current || phaseRef.current !== 'done' || !level) return;
    sharingRef.current = true;
    setSharing(true);
    flash(null);
    try {
      const url = await renderGameCard({
        gameTitle: t.cardTitle,
        headline: t.cardHeadline(level.id),
        stat: t.cardStat(level.id),
        substat: t.cardSubstat(attempts),
        lang,
        accent: MACHINE_ACCENT,
      });
      const how = await shareGameCard(url, { title: t.shareTitle, text: t.shareText(level.id, attempts) });
      flash(t.shareDone[how]);
    } catch {
      flash(t.shareFailed);
    } finally {
      sharingRef.current = false;
      setSharing(false);
    }
  };

  /* ════════════════════ effects (refs only) ════════════════════ */

  const handlersRef = useRef({ tick });
  useEffect(() => {
    handlersRef.current = { tick };
  });

  useEffect(() => {
    if (phase !== 'run') return;
    const loop = () => {
      rafRef.current = requestAnimationFrame(loop);
      handlersRef.current.tick();
    };
    rafRef.current = requestAnimationFrame(loop);
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    };
  }, [phase]);

  // Unmount: cancel the frame loop and every timer.
  useEffect(() => () => {
    if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    rafRef.current = null;
    if (msgTimerRef.current !== null) window.clearTimeout(msgTimerRef.current);
  }, []);

  /* ════════════════════ render ════════════════════ */

  const primaryBtn = 'px-5 py-3 rounded-2xl text-white font-[1000] uppercase tracking-widest text-sm bg-gradient-to-r from-amber-500 to-orange-600 shadow-lg shadow-amber-500/20 active:scale-95 transition-all flex items-center justify-center gap-2 disabled:opacity-40';
  const ghostBtn = 'px-3 py-2.5 rounded-2xl bg-white/5 border border-white/10 text-white/70 font-[1000] uppercase tracking-widest text-[11px] hover:bg-white/10 active:scale-95 transition-all flex items-center justify-center gap-1.5 disabled:opacity-30';
  const iconBtn = 'w-11 h-11 rounded-2xl bg-white/5 border border-white/10 text-white flex items-center justify-center active:scale-95 transition-all disabled:opacity-25';

  const title = level ? (lang === 'el' ? level.titleEl : level.titleEn) : isFree ? t.free : t.title;
  const hint = level ? (lang === 'el' ? level.hintEl : level.hintEn) : t.dragHint;
  const allPieces: readonly MachinePiece[] = [...fixed, ...pieces];
  const finalFrame = phase === 'done' && result ? result.trace.length - 1 : 0;
  const ballAt = phase === 'done' && result ? result.trace[finalFrame] : [ball.x, ball.y];
  const availableTools = MACHINE_TOOLS.filter((tool) => (toolbox[tool] ?? 0) > 0);
  const selPiece = sel && sel.kind === 'piece' ? pieces[sel.index] : null;
  const canRotate = !!selPiece && (selPiece.type === 'ramp' || selPiece.type === 'trampoline' || selPiece.type === 'fan');
  const outcomeText = outcome === 'goal' ? (isFree ? t.freeGoal : t.resultGoal) : outcome === 'fell' ? t.resultFell : outcome === 'stuck' ? t.resultStuck : outcome === 'timeout' ? t.resultTimeout : '';
  const solvedNow = phase === 'done' && outcome === 'goal';

  let dominoIdx = 0;

  return (
    <div className="relative h-full flex flex-col items-center p-3 select-none overflow-hidden">
      <style>{STYLE}</style>

      {/* HEADER — one row */}
      <div className="flex justify-between items-center gap-2 w-full max-w-md mb-2 bg-black/50 backdrop-blur-md px-3 py-2 rounded-xl border border-white/10 z-10 shrink-0">
        <GameBackButton onClick={phase === 'menu' ? leave : toMenu} lang={lang} />
        <h2 className="text-sm font-[1000] text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-orange-300 to-rose-200 italic tracking-tighter leading-none text-center truncate">
          {phase === 'menu' ? t.title : level ? `${t.levelShort(level.id)} · ${title}` : title}
        </h2>
        {phase !== 'menu' && !isFree ? (
          <p className="w-9 shrink-0 text-[10px] font-[1000] text-white/50 text-right font-mono" aria-label={t.attempts(attempts)}>{attempts}✕</p>
        ) : (
          <div className="w-9 shrink-0" />
        )}
      </div>

      <div className="flex-1 w-full max-w-md min-h-0 flex flex-col">
        {/* ───────────────────────────── MENU ────────────────────────────── */}
        {phase === 'menu' && (
          <div key="menu" className="mc-in flex-1 min-h-0 flex flex-col gap-3 overflow-y-auto">
            <div className="text-center shrink-0">
              <h1 className="flex items-center justify-center gap-2 text-2xl font-[1000] text-white uppercase italic tracking-tighter leading-none">
                <Wrench size={24} className="text-amber-300" /> {t.title}
              </h1>
              <p className="text-white/60 font-bold text-[12px] px-3 mt-1">{t.tagline}</p>
            </div>
            <p className="shrink-0 text-[10px] font-[1000] uppercase tracking-widest text-amber-300/80 px-1">{t.levels}</p>
            <div className="grid grid-cols-5 gap-1.5 shrink-0">
              {MACHINE_LEVELS.map((L, i) => {
                const unlocked = isUnlocked(i);
                const solved = isSolved(L.id);
                return (
                  <button
                    key={L.id}
                    type="button"
                    onClick={() => openLevel(i)}
                    aria-disabled={!unlocked}
                    aria-label={`${t.level(L.id)}${solved ? ` · ${t.solved}` : ''}${unlocked ? '' : ` · ${t.locked}`}`}
                    className={`h-14 rounded-2xl border-2 flex flex-col items-center justify-center gap-0.5 transition-all active:scale-95 ${
                      solved ? 'bg-amber-500/25 border-amber-400/70 text-white' : unlocked ? 'bg-white/5 border-white/15 text-white' : 'bg-white/[0.02] border-white/5 text-white/30'
                    }`}
                  >
                    {unlocked ? (
                      <span className="text-lg font-[1000] leading-none">{L.id}</span>
                    ) : (
                      <Lock size={16} />
                    )}
                    {solved && <Star size={11} className="text-amber-300 fill-amber-300" />}
                  </button>
                );
              })}
            </div>
            <div className="shrink-0 rounded-2xl bg-white/5 border border-white/10 p-3 flex flex-col gap-2">
              <p className="text-[12px] font-bold text-white/70">{t.freeDesc}</p>
              <button type="button" onClick={openFree} className={primaryBtn}>
                <Wrench size={16} /> {t.free}
              </button>
            </div>
            {msg && <p className="shrink-0 text-center text-amber-200 text-[12px] font-bold px-2" role="status">{msg}</p>}
          </div>
        )}

        {/* ───────────────────────────── EDIT / RUN / DONE ────────────────────────────── */}
        {phase !== 'menu' && (
          <div key="board" className="flex-1 min-h-0 flex flex-col gap-1.5">
            <p className="shrink-0 text-center text-white/60 text-[11px] font-bold leading-tight px-1 h-7 overflow-hidden">
              {phase === 'done' ? <span className={`${solvedNow ? 'text-amber-200' : 'text-rose-200'} text-[13px] font-[1000]`}>{outcomeText}</span> : hint}
            </p>

            {/* THE BOARD */}
            <div className="relative flex-1 min-h-0 flex items-center justify-center">
              <svg
                ref={svgRef}
                viewBox={`0 0 ${W} ${H}`}
                preserveAspectRatio="xMidYMid meet"
                className="rounded-2xl border border-white/10 bg-[#0b1020]"
                style={{ touchAction: 'none', width: '100%', height: '100%' }}
                onPointerDown={boardDown}
                role="img"
                aria-label={title}
              >
                <defs>
                  <pattern id="mc-grid" width={4} height={4} patternUnits="userSpaceOnUse">
                    <path d="M4 0H0V4" fill="none" stroke="#ffffff" strokeWidth={0.06} opacity={0.35} />
                  </pattern>
                  <radialGradient id="mc-ball" cx="35%" cy="30%" r="70%">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="45%" stopColor="#fde68a" />
                    <stop offset="100%" stopColor="#b45309" />
                  </radialGradient>
                </defs>
                <rect x={0} y={0} width={W} height={H} fill="url(#mc-grid)" />
                <line x1={0} y1={0} x2={0} y2={H} stroke="#94a3b8" strokeWidth={0.5} opacity={0.5} />
                <line x1={W} y1={0} x2={W} y2={H} stroke="#94a3b8" strokeWidth={0.5} opacity={0.5} />

                <Goal at={goal} />
                {isFree && phase === 'edit' && (
                  <circle
                    cx={goal.x}
                    cy={goal.y}
                    r={2.4}
                    fill="transparent"
                    stroke={sel?.kind === 'goal' ? '#fff' : 'none'}
                    strokeWidth={0.2}
                    strokeDasharray="0.5 0.4"
                    style={{ cursor: 'grab' }}
                    onPointerDown={(e) => markerDown('goal', e)}
                    onPointerMove={pointerMove}
                    onPointerUp={pointerUp}
                    onPointerCancel={pointerUp}
                  />
                )}

                {/* pieces: fixed first, then the child's (this order is the sim order) */}
                {allPieces.map((p, i) => {
                  const isFixed = i < fixed.length;
                  const index = i - fixed.length;
                  const selected = !isFixed && sel?.kind === 'piece' && sel.index === index;
                  const isDomino = p.type === 'domino';
                  const k = isDomino ? dominoIdx++ : -1;
                  const baseY = p.y + DOMINO.baseDy;
                  const doneAngle = isDomino && phase === 'done' && result ? ((result.dominoes[finalFrame]?.[k] ?? 0) * 180) / Math.PI : 0;
                  return (
                    <g
                      key={isFixed ? `f${i}` : `p${index}`}
                      onPointerDown={isFixed ? undefined : (e) => pieceDown(index, e)}
                      onPointerMove={isFixed ? undefined : pointerMove}
                      onPointerUp={isFixed ? undefined : pointerUp}
                      onPointerCancel={isFixed ? undefined : pointerUp}
                      style={{ cursor: isFixed || phase !== 'edit' ? 'default' : 'grab', pointerEvents: phase === 'edit' && !isFixed ? 'all' : 'none' }}
                    >
                      {selected && <circle cx={p.x} cy={p.y} r={2.6} fill="#ffffff" opacity={0.08} stroke="#fff" strokeWidth={0.2} strokeDasharray="0.5 0.4" />}
                      {isDomino ? (
                        <g
                          ref={(el) => {
                            dominoElsRef.current[k] = el;
                          }}
                          data-px={p.x}
                          data-py={baseY}
                          transform={`rotate(${doneAngle.toFixed(2)} ${p.x} ${baseY})`}
                        >
                          <PieceGlyph p={p} muted={isFixed} />
                        </g>
                      ) : (
                        <PieceGlyph p={p} muted={isFixed} />
                      )}
                      {!isFixed && <circle cx={p.x} cy={p.y} r={2.2} fill="transparent" />}
                    </g>
                  );
                })}

                {ghost && (
                  <g opacity={0.6} style={{ pointerEvents: 'none' }}>
                    <PieceGlyph p={{ type: ghost.type, x: ghost.x, y: ghost.y, rot: 0 }} />
                  </g>
                )}

                {/* the ball start marker, and the ball (moved by the replay loop) */}
                <circle cx={ball.x} cy={ball.y} r={BALL_R + 0.35} fill="none" stroke="#fde68a" strokeWidth={0.15} strokeDasharray="0.4 0.3" opacity={0.6} />
                <circle ref={ballElRef} cx={ballAt[0]} cy={ballAt[1]} r={BALL_R} fill="url(#mc-ball)" stroke="#78350f" strokeWidth={0.1} />
                {isFree && phase === 'edit' && (
                  <circle
                    cx={ball.x}
                    cy={ball.y}
                    r={2.2}
                    fill="transparent"
                    stroke={sel?.kind === 'ball' ? '#fff' : 'none'}
                    strokeWidth={0.2}
                    strokeDasharray="0.5 0.4"
                    style={{ cursor: 'grab' }}
                    onPointerDown={(e) => markerDown('ball', e)}
                    onPointerMove={pointerMove}
                    onPointerUp={pointerUp}
                    onPointerCancel={pointerUp}
                  />
                )}
              </svg>

              {solvedNow && (
                <div className="mc-pop absolute inset-x-0 top-[38%] flex flex-col items-center pointer-events-none">
                  <p className="text-4xl font-[1000] text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-orange-300 to-rose-200 uppercase italic tracking-tighter drop-shadow">{outcomeText}</p>
                  <div className="flex gap-1 mt-1" aria-hidden="true">
                    {[1, 2, 3].map((n) => (
                      <Star key={n} size={26} className={!isFree && n <= machineTier(attempts) ? 'text-amber-300 fill-amber-300' : 'text-white/20'} />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* TOOLBOX (edit) / RESULT (done) */}
            <div className="shrink-0 h-[72px] flex items-center gap-1.5">
              {phase === 'edit' && (
                <>
                  <div className="flex-1 min-w-0 grid gap-1" style={{ gridTemplateColumns: `repeat(${Math.max(availableTools.length, 1)}, minmax(0, 1fr))` }}>
                    {availableTools.map((tool) => {
                      const left = leftOf(tool);
                      return (
                        <button
                          key={tool}
                          type="button"
                          aria-label={`${t.tool[tool]} · ${t.piecesLeft(left)}`}
                          disabled={left <= 0}
                          onPointerDown={(e) => toolDown(tool, e)}
                          onPointerMove={pointerMove}
                          onPointerUp={pointerUp}
                          onPointerCancel={pointerUp}
                          className="h-[68px] rounded-2xl bg-white/5 border-2 border-white/10 flex flex-col items-center justify-center gap-0.5 active:scale-95 transition-all disabled:opacity-30"
                          style={{ touchAction: 'none' }}
                        >
                          <svg viewBox="-4 -4 8 8" className="w-8 h-8" aria-hidden="true">
                            <PieceGlyph p={{ type: tool, x: 0, y: 0, rot: tool === 'domino' ? 0 : tool === 'fan' ? 0 : 1 }} compact />
                          </svg>
                          <span className="text-[9px] font-[1000] uppercase tracking-wider text-white/70 leading-none truncate max-w-full px-1">{t.tool[tool]}</span>
                          <span className="text-[10px] font-[1000] text-amber-200 leading-none font-mono">{left}</span>
                        </button>
                      );
                    })}
                  </div>
                  <div className="shrink-0 flex flex-col gap-1">
                    <div className="flex gap-1">
                      <button type="button" onClick={() => rotate(-1)} disabled={!canRotate} aria-label={t.rotateLeft} className={`${iconBtn} w-9 h-8`}>
                        <RotateCcw size={15} />
                      </button>
                      <button type="button" onClick={() => rotate(1)} disabled={!canRotate} aria-label={t.rotateRight} className={`${iconBtn} w-9 h-8`}>
                        <RotateCw size={15} />
                      </button>
                    </div>
                    <div className="flex gap-1">
                      <button type="button" onClick={removeSel} disabled={!selPiece} aria-label={t.remove} className={`${iconBtn} w-9 h-8 text-rose-300`}>
                        <Trash2 size={15} />
                      </button>
                      <button type="button" onClick={clearAll} disabled={pieces.length === 0} aria-label={t.clear} className={`${iconBtn} w-9 h-8 text-white/60`}>
                        <X size={15} />
                      </button>
                    </div>
                  </div>
                </>
              )}
              {phase === 'run' && (
                <p className="flex-1 text-center text-white/50 text-[11px] font-[1000] uppercase tracking-widest" role="status">
                  <Loader2 size={14} className="inline animate-spin mr-1" /> {t.play}…
                </p>
              )}
              {phase === 'done' && (
                <div className="flex-1 flex flex-col items-center gap-1 text-center">
                  {!solvedNow && <p className="text-white/60 text-[12px] font-bold">{isFree ? t.freeRunEnd : t.tryAgain}</p>}
                  {solvedNow && !isFree && <p className="text-white/60 text-[12px] font-bold">{t.attempts(attempts)}</p>}
                  {solvedNow && !isFree && (earnedXp > 0 || xpTried) && (
                    <p className="text-white/30 text-[10px] font-bold uppercase tracking-widest px-2">{earnedXp > 0 ? t.xpNote : t.noXpNote}</p>
                  )}
                  {msg && <p className="text-amber-200 text-[11px] font-bold" role="status">{msg}</p>}
                </div>
              )}
            </div>

            {/* ACTIONS — one row */}
            <div className="shrink-0 flex items-center gap-1.5">
              {phase === 'edit' && (
                <>
                  <button type="button" onClick={play} className={`${primaryBtn} flex-1`}>
                    <Play size={16} /> {t.play}
                  </button>
                  {isFree && (
                    <>
                      <button type="button" onClick={showCode} className={ghostBtn}>{t.code}</button>
                      <button type="button" onClick={openEnter} className={ghostBtn}>{t.haveCode}</button>
                    </>
                  )}
                </>
              )}
              {phase === 'run' && (
                <button type="button" onClick={reset} className={`${ghostBtn} flex-1 py-3`}>
                  <Square size={14} /> {t.stop}
                </button>
              )}
              {phase === 'done' && (
                <>
                  {solvedNow && !isFree && (
                    <button type="button" onClick={share} disabled={sharing} className={ghostBtn}>
                      {sharing ? <Loader2 size={14} className="animate-spin" /> : <Share2 size={14} />}
                      {sharing ? t.sharing : t.share}
                    </button>
                  )}
                  <button type="button" onClick={reset} className={`${solvedNow && !isFree ? ghostBtn : `${primaryBtn} flex-1`}`}>
                    <RotateCcw size={14} /> {t.reset}
                  </button>
                  {solvedNow && !isFree && (
                    <button type="button" onClick={next} className={`${primaryBtn} flex-1`}>
                      {t.next}
                    </button>
                  )}
                </>
              )}
            </div>
            {msg && phase !== 'done' && <p className="shrink-0 text-center text-amber-200 text-[11px] font-bold" role="status">{msg}</p>}
          </div>
        )}
      </div>

      {/* CODE — show */}
      {codeView === 'show' && (
        <div className="absolute inset-0 z-30 bg-black/90 flex flex-col items-center justify-center gap-4 p-5 text-center" role="dialog" aria-label={t.codeTitle}>
          <p className="text-xl font-[1000] text-white uppercase italic">{t.codeTitle}</p>
          <p className="text-2xl font-[1000] text-amber-200 font-mono tracking-wider break-all leading-relaxed max-w-xs select-text">{code}</p>
          <p className="text-white/60 text-[12px] font-bold max-w-xs">{t.codeHelp}</p>
          <button type="button" onClick={() => void copyCode()} className={primaryBtn}>
            <Copy size={16} /> {t.copy}
          </button>
          {msg && <p className="text-amber-200 text-[12px] font-bold" role="status">{msg}</p>}
          <button type="button" onClick={() => setCodeView(null)} className={ghostBtn}>
            <X size={14} /> {t.close}
          </button>
        </div>
      )}

      {/* CODE — enter */}
      {codeView === 'enter' && (
        <div className="absolute inset-0 z-30 bg-black/90 flex flex-col items-center justify-center gap-4 p-5 text-center" role="dialog" aria-label={t.enterCodeTitle}>
          <p className="text-xl font-[1000] text-white uppercase italic">{t.enterCodeTitle}</p>
          <input
            value={codeInput}
            onChange={(e) => {
              setCodeInput(e.target.value);
              setCodeError(false);
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') loadCode();
            }}
            placeholder={t.enterCodePlaceholder}
            inputMode="text"
            autoCapitalize="characters"
            autoCorrect="off"
            spellCheck={false}
            aria-label={t.enterCodeTitle}
            aria-invalid={codeError}
            className="w-full max-w-xs px-4 py-3 rounded-2xl bg-white/10 border-2 border-white/20 text-white text-lg font-[1000] font-mono tracking-wider text-center uppercase placeholder:text-white/25 focus:outline-none focus:border-amber-400"
          />
          {codeError && <p className="text-rose-200 text-[13px] font-bold max-w-xs" role="alert">{t.badCode}</p>}
          <button type="button" onClick={loadCode} disabled={codeInput.trim().length === 0} className={primaryBtn}>{t.load}</button>
          <button type="button" onClick={() => setCodeView(null)} className={ghostBtn}>
            <X size={14} /> {t.close}
          </button>
        </div>
      )}
    </div>
  );
}
