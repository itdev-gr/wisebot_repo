/**
 * «Δωμάτιο Απόδρασης» — the rules, with no React and no DOM.
 * ==========================================================
 * Everything here is a pure function, so `escapeLogic.test.ts` can check every
 * stated answer of every room, in both languages, in milliseconds.
 *
 *   - `checkAnswer` / `toPuzzleView` — the common puzzle interface the brief
 *     asks for, `{ prompt, check(answer) }`, for all six puzzle types.
 *   - `unlockedRooms` — which rooms are open on an Athens day key.
 *   - `parseProgress` / `recordEscape` / `escapeTier` — the per-room record.
 *   - `formatElapsed` — 432000 ms → «7′12″».
 *   - `overlayNodes` — the exact SVG nodes an observe puzzle draws, so a test
 *     can count them against the answer.
 */
import {
  ESCAPE_REPLAY_TIER,
  ESCAPE_ROOMS,
  ESCAPE_START_DAY,
  HINT_AFTER_MS,
  KEYPAD_MAX_DIGITS,
  type EscapeAnswerType,
  type EscapeOverlay,
  type EscapePuzzle,
  type EscapePuzzleType,
  type EscapeRoom,
  type EscapeShape,
} from '../../data/games/escape';

export type Lang = 'el' | 'en';

/* ═════════════════════════════ answers ═════════════════════════════ */

/**
 * Lower-case, no accents, one space between words. NFD splits «ή» into «η» +
 * a combining tonos and «ϊ» into «ι» + a combining dialytika; dropping every
 * combining mark removes both. Final sigma is folded into σ so «ΗΛΙΟΣ»,
 * «ηλιος» and «Ήλιος» are the same word.
 */
export function normalizeWord(input: string): string {
  return input
    .normalize('NFD')
    .replace(/\p{M}/gu, '')
    .toLowerCase()
    .replace(/ς/g, 'σ')
    .trim()
    .replace(/\s+/g, ' ');
}

const answerOf = (p: EscapePuzzle, lang: Lang): string => (lang === 'el' ? p.answerEl : p.answerEn);
export const optionsOf = (p: EscapePuzzle, lang: Lang): readonly string[] | undefined =>
  lang === 'el' ? p.optionsEl : p.optionsEn;

/**
 * Is `input` the answer to `puzzle` in `lang`?
 *   number — digits only after trimming, compared as numbers («07» = «7»)
 *   word   — case-, accent- and space-insensitive
 *   choice — exactly one of the options, verbatim
 */
export function checkAnswer(puzzle: EscapePuzzle, lang: Lang, input: string): boolean {
  const expected = answerOf(puzzle, lang);
  if (typeof input !== 'string') return false;
  switch (puzzle.answerType) {
    case 'number': {
      const got = input.trim();
      if (!/^\d+$/.test(got)) return false;
      return Number(got) === Number(expected);
    }
    case 'word': {
      const got = normalizeWord(input);
      return got.length > 0 && got === normalizeWord(expected);
    }
    case 'choice':
      return input === expected && (optionsOf(puzzle, lang) ?? []).includes(input);
    default:
      return false;
  }
}

/** The common interface of the six puzzle types: `{ prompt, check(answer) }`. */
export interface PuzzleView {
  type: EscapePuzzleType;
  answerType: EscapeAnswerType;
  prompt: string;
  options?: readonly string[];
  hint: string;
  solution: string;
  image?: string;
  overlay?: EscapeOverlay;
  check: (answer: string) => boolean;
}

export function toPuzzleView(puzzle: EscapePuzzle, lang: Lang): PuzzleView {
  const el = lang === 'el';
  return {
    type: puzzle.type,
    answerType: puzzle.answerType,
    prompt: el ? puzzle.promptEl : puzzle.promptEn,
    options: optionsOf(puzzle, lang),
    hint: el ? puzzle.hintEl : puzzle.hintEn,
    solution: el ? puzzle.solutionEl : puzzle.solutionEn,
    image: puzzle.image,
    overlay: puzzle.overlay,
    check: (answer: string) => checkAnswer(puzzle, lang, answer),
  };
}

/**
 * How an accepted answer is shown in «ΟΙ ΣΗΜΕΙΩΣΕΙΣ ΣΟΥ» on the final lock:
 * a word in capitals without accents (Greek capitals carry none), a number
 * as its digits, a choice as the option.
 */
export function noteLabel(puzzle: EscapePuzzle, input: string): string {
  if (puzzle.answerType === 'number') return String(Number(input.trim()));
  if (puzzle.answerType === 'word') return normalizeWord(input).toUpperCase();
  return input;
}

/* ═════════════════════════════ keypad ══════════════════════════════ */

export function pressDigit(entry: string, digit: string): string {
  if (!/^\d$/.test(digit) || entry.length >= KEYPAD_MAX_DIGITS) return entry;
  return entry === '0' ? digit : entry + digit;
}

export const deleteDigit = (entry: string): string => entry.slice(0, -1);

/* ═════════════════════════════ time ════════════════════════════════ */

/** 432000 ms → «7′12″». Whole seconds, rounded down; minutes are not capped at 59. */
export function formatElapsed(ms: number): string {
  const total = Math.max(0, Math.floor((Number.isFinite(ms) ? ms : 0) / 1000));
  const m = Math.floor(total / 60);
  const s = total % 60;
  return `${m}′${String(s).padStart(2, '0')}″`;
}

/** Has the child been idle on this puzzle long enough for the free hint? */
export const hintDue = (lastActivityMs: number, nowMs: number): boolean => nowMs - lastActivityMs >= HINT_AFTER_MS;

/* ═════════════════════════════ weeks ═══════════════════════════════ */

const DAY_MS = 86_400_000;

/** '2026-09-21' → days since 1970-01-01 (calendar arithmetic, no timezone). */
export function dayNumber(dayKey: string): number {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(dayKey);
  if (!m) return Number.NaN;
  return Math.round(Date.UTC(Number(m[1]), Number(m[2]) - 1, Number(m[3])) / DAY_MS);
}

export function addDays(dayKey: string, days: number): string {
  const d = new Date((dayNumber(dayKey) + days) * DAY_MS);
  return `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, '0')}-${String(d.getUTCDate()).padStart(2, '0')}`;
}

/** The week `dayKey` falls in, counted from `start` (week 1 = its first seven days; ≤ 0 before it). */
export function weekOf(dayKey: string, start: string = ESCAPE_START_DAY): number {
  return Math.floor((dayNumber(dayKey) - dayNumber(start)) / 7) + 1;
}

/** The Athens day key a room opens on. */
export const roomUnlockDay = (room: EscapeRoom, start: string = ESCAPE_START_DAY): string =>
  addDays(start, 7 * (room.week - 1));

/** Week 1 is always open; every later room opens on its Monday and never locks again. */
export function isRoomUnlocked(room: EscapeRoom, dayKey: string, start: string = ESCAPE_START_DAY): boolean {
  if (room.week <= 1) return true;
  const w = weekOf(dayKey, start);
  return Number.isFinite(w) && room.week <= w;
}

export function unlockedRooms(
  dayKey: string,
  rooms: readonly EscapeRoom[] = ESCAPE_ROOMS,
  start: string = ESCAPE_START_DAY,
): EscapeRoom[] {
  return rooms.filter((r) => isRoomUnlocked(r, dayKey, start));
}

/** Day and month of a day key, for «Ανοίγει στις 28/9». */
export function dayAndMonth(dayKey: string): { day: number; month: number } {
  const [, m, d] = dayKey.split('-').map(Number);
  return { day: d, month: m };
}

/* ═════════════════════════════ progress ════════════════════════════ */

export interface RoomRecord {
  escapes: number;
  bestMs: number;
}

export interface EscapeProgress {
  rooms: Record<string, RoomRecord>;
}

export const emptyProgress = (): EscapeProgress => ({ rooms: {} });

/** Reads the stored record; anything malformed is dropped rather than trusted. */
export function parseProgress(raw: string | null): EscapeProgress {
  const out = emptyProgress();
  if (!raw) return out;
  try {
    const data = JSON.parse(raw) as { rooms?: Record<string, unknown> };
    if (!data || typeof data !== 'object' || !data.rooms || typeof data.rooms !== 'object') return out;
    for (const [id, rec] of Object.entries(data.rooms)) {
      const r = rec as Partial<RoomRecord> | null;
      const escapes = Number(r?.escapes);
      const bestMs = Number(r?.bestMs);
      if (Number.isFinite(escapes) && escapes > 0 && Number.isFinite(bestMs) && bestMs > 0) {
        out.rooms[id] = { escapes: Math.floor(escapes), bestMs };
      }
    }
  } catch {
    // Corrupt JSON: start clean. The record is a nicety, never a gate.
  }
  return out;
}

export const hasEscaped = (progress: EscapeProgress, roomId: string): boolean =>
  (progress.rooms[roomId]?.escapes ?? 0) > 0;

/**
 * Reward tier for escaping `room` now: the room's own tier the first time,
 * `ESCAPE_REPLAY_TIER` after that. Never tied to speed, never to hints.
 */
export const escapeTier = (room: EscapeRoom, progress: EscapeProgress): number =>
  hasEscaped(progress, room.id) ? ESCAPE_REPLAY_TIER : room.xpTier;

/** A new record with one more escape of `roomId` in `ms`. Pure: `progress` is not touched. */
export function recordEscape(
  progress: EscapeProgress,
  roomId: string,
  ms: number,
): { progress: EscapeProgress; newBest: boolean; first: boolean } {
  const prev = progress.rooms[roomId];
  const time = Math.max(1, Math.round(ms));
  const first = !prev;
  const newBest = !prev || time < prev.bestMs;
  const rec: RoomRecord = { escapes: (prev?.escapes ?? 0) + 1, bestMs: prev ? Math.min(prev.bestMs, time) : time };
  return { progress: { rooms: { ...progress.rooms, [roomId]: rec } }, newBest, first };
}

/* ═════════════════════════════ overlays ════════════════════════════ */

export interface OverlayNode {
  shape: EscapeShape;
  /** SVG path in the overlay's own units (the image's intrinsic pixels). */
  d: string;
  cx: number;
  cy: number;
  /** Width actually drawn, in overlay units. */
  size: number;
  fill: string;
  stroke: string;
  strokePx: number;
  shadow: boolean;
}

const f1 = (n: number) => (Math.round(n * 10) / 10).toString();

function polygon(cx: number, cy: number, r: number, points: number, innerRatio?: number): string {
  const n = innerRatio === undefined ? points : points * 2;
  const parts: string[] = [];
  for (let i = 0; i < n; i++) {
    const rr = innerRatio === undefined || i % 2 === 0 ? r : r * innerRatio;
    const a = -Math.PI / 2 + (i * 2 * Math.PI) / n;
    parts.push(`${i === 0 ? 'M' : 'L'}${f1(cx + rr * Math.cos(a))} ${f1(cy + rr * Math.sin(a))}`);
  }
  return `${parts.join(' ')} Z`;
}

function heart(cx: number, cy: number, w: number): string {
  // Two cubic lobes meeting at the tip; about w wide and 0.66 w tall, centred.
  const p = (x: number, y: number) => `${f1(cx + x * w)} ${f1(cy + y * w)}`;
  return `M${p(0, 0.33)} C${p(-0.667, -0.02)} ${p(-0.667, -0.52)} ${p(0, -0.25)} C${p(0.667, -0.52)} ${p(0.667, -0.02)} ${p(0, 0.33)} Z`;
}

export function shapePath(shape: EscapeShape, cx: number, cy: number, width: number): string {
  const r = width / 2;
  switch (shape) {
    case 'star':
      return polygon(cx, cy, r, 5, 0.45);
    case 'hexagon':
      return polygon(cx, cy, r, 6);
    case 'triangle':
      return polygon(cx, cy + r * 0.15, r, 3);
    case 'heart':
      return heart(cx, cy, width);
    default:
      return '';
  }
}

/** Every mark of an overlay as [x, y] in overlay units. */
function centres(overlay: EscapeOverlay): Array<[number, number]> {
  return overlay.groups.flatMap((g) =>
    g.at.map(([x, y]) => [(x / 100) * overlay.width, (y / 100) * overlay.height] as [number, number]),
  );
}

/** Smallest distance between two marks, in overlay units (Infinity for fewer than two). */
export function minCentreDistance(overlay: EscapeOverlay): number {
  const c = centres(overlay);
  let best = Infinity;
  for (let i = 0; i < c.length; i++) {
    for (let j = i + 1; j < c.length; j++) {
      best = Math.min(best, Math.hypot(c[i][0] - c[j][0], c[i][1] - c[j][1]));
    }
  }
  return best;
}

/**
 * The nodes an observe picture draws — one per listed centre, never more,
 * never fewer. `renderedWidthPx` is the picture's width on screen; with it
 * each shape gets its `minPx` floor, capped at 90 % of the closest centre
 * distance so a floor can never push two shapes into each other. Pass 0 when
 * the size is not known yet (no floor).
 */
export function overlayNodes(overlay: EscapeOverlay, renderedWidthPx = 0): OverlayNode[] {
  const unitsPerPx = renderedWidthPx > 0 ? overlay.width / renderedWidthPx : 0;
  const cap = 0.9 * minCentreDistance(overlay);
  const nodes: OverlayNode[] = [];
  for (const g of overlay.groups) {
    const base = (g.sizePct / 100) * overlay.width;
    const size = Math.min(Math.max(base, g.minPx * unitsPerPx), Math.max(base, cap));
    for (const [x, y] of g.at) {
      const cx = (x / 100) * overlay.width;
      const cy = (y / 100) * overlay.height;
      nodes.push({
        shape: g.shape,
        d: shapePath(g.shape, cx, cy, size),
        cx,
        cy,
        size,
        fill: g.fill,
        stroke: g.stroke,
        strokePx: g.strokePx,
        shadow: g.shadow,
      });
    }
  }
  return nodes;
}

/** How many of the shape the prompt asks about the overlay draws. */
export const countedShapes = (overlay: EscapeOverlay): number =>
  overlayNodes(overlay).filter((n) => n.shape === overlay.counts).length;
