/**
 * Η ΜΗΧΑΝΗ ΤΟΥ SPARKEN — the level code, pure (no React, no server).
 * ==================================================================
 * The code IS the level: ball start, goal, and every placed piece (tool type,
 * grid position, rotation) packed bit by bit, then written in a 32-symbol
 * alphabet in groups of four — "WB-K7P3-M2QX-…". Nothing personal is in it,
 * nothing is stored anywhere, and it works offline on the friend's phone.
 *
 * WHY NOT 8 CHARACTERS: docs/games/NOTES.md §6. Eight symbols are 40 bits; one
 * placed piece needs 14–18 bits. A self-contained code for a real machine is
 * therefore 9 symbols (ball + goal only) plus about 3.5 symbols per piece.
 *
 * THE ALPHABET is Crockford-style: digits 0–9 and letters without I, L, O
 * (and U). What appears ON SCREEN never contains I, L or O, so a child never
 * has to tell 0 from O or 1 from I/l — and if they type O, I or l anyway,
 * `decode` maps them back to 0 and 1. Lower case is accepted.
 *
 * A 15-bit checksum (FNV-1a over the payload symbols) rejects a mistyped code
 * — `decode` returns null and the UI says so kindly — instead of loading a
 * scrambled machine. Every field is also range-checked.
 */
import {
  MACHINE_FREE_MAX_PIECES,
  MACHINE_TOOLS,
  MACHINE_WORLD,
  type MachineBuild,
  type MachinePiece,
  type MachineTool,
} from '../../data/games/machine';

export const CODE_ALPHABET = '0123456789ABCDEFGHJKMNPQRSTVWXYZ';
export const CODE_PREFIX = 'WB';
const GROUP = 4;
const VERSION = 1;
const CHECKSUM_BITS = 15;

const BITS = {
  version: 3,
  x: 5, // 0..31
  y: 6, // 0..39
  count: 4, // 0..15 (capped at MACHINE_FREE_MAX_PIECES)
  type: 3,
  rotRamp: 4, // 0..15
  rotFan: 2, // 0..3
} as const;

/** Rotation bits a tool carries. */
function rotBits(type: MachineTool): number {
  if (type === 'ramp' || type === 'trampoline') return BITS.rotRamp;
  if (type === 'fan') return BITS.rotFan;
  return 0;
}

/* ─────────────────────────────── bit i/o ──────────────────────────────── */

class BitWriter {
  bits: number[] = [];
  write(value: number, n: number): void {
    for (let i = n - 1; i >= 0; i--) this.bits.push((value >>> i) & 1);
  }
}

class BitReader {
  pos = 0;
  constructor(private readonly bits: number[]) {}
  get left(): number {
    return this.bits.length - this.pos;
  }
  read(n: number): number | null {
    if (this.pos + n > this.bits.length) return null;
    let v = 0;
    for (let i = 0; i < n; i++) v = (v << 1) | this.bits[this.pos++];
    return v;
  }
}

function symbolsOf(bits: number[]): number[] {
  const out: number[] = [];
  for (let i = 0; i < bits.length; i += 5) {
    let v = 0;
    for (let j = 0; j < 5; j++) v = (v << 1) | (bits[i + j] ?? 0);
    out.push(v);
  }
  return out;
}

function bitsOf(symbols: number[]): number[] {
  const out: number[] = [];
  for (const s of symbols) for (let i = 4; i >= 0; i--) out.push((s >>> i) & 1);
  return out;
}

/** FNV-1a over symbol values, folded to `CHECKSUM_BITS`. */
function checksum(symbols: number[]): number {
  let h = 0x811c9dc5;
  for (const s of symbols) {
    h ^= s;
    h = Math.imul(h, 0x01000193);
  }
  h ^= h >>> 16;
  h = Math.imul(h, 0x85ebca6b);
  h ^= h >>> 13;
  return (h >>> 0) & ((1 << CHECKSUM_BITS) - 1);
}

/* ─────────────────────────────── encode ───────────────────────────────── */

function inWorld(p: { x: number; y: number }): boolean {
  return Number.isInteger(p.x) && Number.isInteger(p.y) && p.x >= 0 && p.x < MACHINE_WORLD.w && p.y >= 0 && p.y < MACHINE_WORLD.h;
}

/** Rotation normalised to what the code can hold. */
export function normalizeRot(type: MachineTool, rot: number): number {
  const n = rotBits(type);
  if (n === 0) return 0;
  const mod = 1 << n;
  return ((Math.round(rot) % mod) + mod) % mod;
}

/**
 * The code for a machine, formatted "WB-XXXX-XXXX-…". Returns null when the
 * build cannot be encoded (positions off-grid, more than
 * `MACHINE_FREE_MAX_PIECES` pieces).
 */
export function encodeMachine(build: MachineBuild): string | null {
  if (!inWorld(build.ball) || !inWorld(build.goal)) return null;
  if (build.pieces.length > MACHINE_FREE_MAX_PIECES) return null;
  const w = new BitWriter();
  w.write(VERSION, BITS.version);
  w.write(build.ball.x, BITS.x);
  w.write(build.ball.y, BITS.y);
  w.write(build.goal.x, BITS.x);
  w.write(build.goal.y, BITS.y);
  w.write(build.pieces.length, BITS.count);
  for (const p of build.pieces) {
    const typeIdx = MACHINE_TOOLS.indexOf(p.type);
    if (typeIdx < 0 || !inWorld(p)) return null;
    w.write(typeIdx, BITS.type);
    w.write(p.x, BITS.x);
    w.write(p.y, BITS.y);
    const n = rotBits(p.type);
    if (n > 0) w.write(normalizeRot(p.type, p.rot), n);
  }
  const payload = symbolsOf(w.bits);
  const sum = checksum(payload);
  const all = [...payload, (sum >>> 10) & 31, (sum >>> 5) & 31, sum & 31];
  return formatCode(all.map((s) => CODE_ALPHABET[s]).join(''));
}

/** "WB-" + groups of four. */
export function formatCode(symbols: string): string {
  const groups: string[] = [];
  for (let i = 0; i < symbols.length; i += GROUP) groups.push(symbols.slice(i, i + GROUP));
  return [CODE_PREFIX, ...groups].join('-');
}

/* ─────────────────────────────── decode ───────────────────────────────── */

/**
 * The symbols of a code as typed by a child: case-insensitive, dashes and
 * spaces ignored, the "WB" prefix optional, O→0 and I/L→1. Returns null on
 * any other character.
 */
export function cleanCode(input: string): string | null {
  let s = (input || '').toUpperCase().replace(/[\s\-_.]/g, '');
  if (s.startsWith(CODE_PREFIX)) s = s.slice(CODE_PREFIX.length);
  s = s.replace(/O/g, '0').replace(/[IL]/g, '1');
  if (s.length === 0) return null;
  for (const ch of s) if (CODE_ALPHABET.indexOf(ch) < 0) return null;
  return s;
}

/**
 * The machine a code describes, or null when the code is not one of ours
 * (bad characters, wrong length, failed checksum, a value out of range).
 */
export function decodeMachine(input: string): MachineBuild | null {
  const s = cleanCode(input);
  if (!s || s.length < 4) return null;
  const symbols = Array.from(s, (ch) => CODE_ALPHABET.indexOf(ch));
  const payload = symbols.slice(0, -3);
  const [c0, c1, c2] = symbols.slice(-3);
  if (checksum(payload) !== ((c0 << 10) | (c1 << 5) | c2)) return null;

  const r = new BitReader(bitsOf(payload));
  if (r.read(BITS.version) !== VERSION) return null;
  const bx = r.read(BITS.x);
  const by = r.read(BITS.y);
  const gx = r.read(BITS.x);
  const gy = r.read(BITS.y);
  const count = r.read(BITS.count);
  if (bx === null || by === null || gx === null || gy === null || count === null) return null;
  const ball = { x: bx, y: by };
  const goal = { x: gx, y: gy };
  if (!inWorld(ball) || !inWorld(goal) || count > MACHINE_FREE_MAX_PIECES) return null;

  const pieces: MachinePiece[] = [];
  for (let i = 0; i < count; i++) {
    const typeIdx = r.read(BITS.type);
    const x = r.read(BITS.x);
    const y = r.read(BITS.y);
    if (typeIdx === null || x === null || y === null) return null;
    const type = MACHINE_TOOLS[typeIdx];
    if (!type) return null;
    const n = rotBits(type);
    const rot = n > 0 ? r.read(n) : 0;
    if (rot === null) return null;
    const p: MachinePiece = { type, x, y, rot };
    if (!inWorld(p)) return null;
    pieces.push(p);
  }
  // Only zero padding (fewer than 5 bits) may remain.
  if (r.left >= 5) return null;
  while (r.left > 0) if (r.read(1) !== 0) return null;
  return { ball, goal, pieces };
}

/** Number of symbols (without prefix/dashes) a build's code has. */
export function codeLength(build: MachineBuild): number {
  const bits = BITS.version + 2 * (BITS.x + BITS.y) + BITS.count + build.pieces.reduce((n, p) => n + BITS.type + BITS.x + BITS.y + rotBits(p.type), 0);
  return Math.ceil(bits / 5) + CHECKSUM_BITS / 5;
}
