/**
 * DIFFERENCE FINDER — content + question generator for the daily round
 * ====================================================================
 * Everything a content editor might want to retune lives in this file, never in
 * `DiffRound.tsx`: which photos can host a round, the shape/colour palette, the
 * grid the markers snap to, how many differences a 30-second round asks for.
 *
 * (House rule says tunables belong in `data/games/<key>.ts`. This agent may only
 * write under `components/games/rounds/`, so the table lives here for now — it is
 * deliberately React-free and dependency-free so it can be moved to
 * `data/games/daily.ts` verbatim, leaving only its import path to fix.)
 *
 * `buildDiffRound(seed)` is pure: same seed ⇒ identical photo, identical marker
 * positions, identical differences, on every device. It must never reach for
 * `Math.random()` — that is what `mulberry32` from `utils/dailySeed` is for.
 */
import { mulberry32, seededInt, seededPick } from '../../../utils/dailySeed';

/** How the right-hand copy of a marker differs from the left-hand one. */
export type DiffKind = 'color' | 'vanish' | 'rotate';

export interface DiffShape {
  /** Key into the icon map in `DiffRound.tsx`. */
  key: string;
  /** Tailwind text colour on the ORIGINAL side. */
  color: string;
  /** Tailwind text colour on the SPOT side, for a `color` difference. */
  altColor: string;
  /**
   * Whether a 180° turn actually shows. A circle, a square and a hexagon look
   * exactly the same upside down, so they can never host a `rotate` difference —
   * the child would be hunting something that is not there.
   */
  rotatable: boolean;
}

/** Photos the round can be played on — all already shipped in `public/images/`. */
export const DIFF_IMAGES: readonly string[] = [
  '/images/wisebot.jpg',
  '/images/crocus.jpg',
  '/images/link.jpg',
  '/images/pencilo.jpg',
  '/images/sparken.jpg',
];

/** Bright, high-contrast pairs — the markers sit on top of photographs. */
export const DIFF_SHAPES: readonly DiffShape[] = [
  { key: 'star', color: 'text-yellow-300', altColor: 'text-red-400', rotatable: true },
  { key: 'zap', color: 'text-cyan-300', altColor: 'text-amber-300', rotatable: true },
  { key: 'triangle', color: 'text-fuchsia-300', altColor: 'text-lime-300', rotatable: true },
  { key: 'heart', color: 'text-rose-300', altColor: 'text-violet-300', rotatable: true },
  { key: 'bug', color: 'text-emerald-300', altColor: 'text-orange-300', rotatable: true },
  { key: 'square', color: 'text-orange-300', altColor: 'text-sky-300', rotatable: false },
  { key: 'circle', color: 'text-green-300', altColor: 'text-purple-300', rotatable: false },
  { key: 'hexagon', color: 'text-blue-300', altColor: 'text-pink-300', rotatable: false },
];

export const DIFF_KINDS: readonly DiffKind[] = ['color', 'vanish', 'rotate'];

/**
 * Marker anchors as percentages of the panel. A 3×3 grid keeps any two markers
 * at least ~20% apart, which at 375×812 is more than the 48px touch targets
 * need — two differences can never overlap into one unhittable blob.
 */
export const DIFF_CELLS: readonly { x: number; y: number }[] = [
  { x: 18, y: 22 }, { x: 50, y: 22 }, { x: 82, y: 22 },
  { x: 18, y: 50 }, { x: 50, y: 50 }, { x: 82, y: 50 },
  { x: 18, y: 78 }, { x: 50, y: 78 }, { x: 82, y: 78 },
];

/** Differences per round — four is what a 6-year-old can clear inside 30s. */
export const DIFF_SPOT_COUNT = 4;

/** Rendered icon size in px. The touch target around it is 48px regardless. */
export const DIFF_ICON_SIZE = 30;

/** Max ± percentage points a marker strays from its grid anchor. */
export const DIFF_JITTER = 4;

export interface DiffSpot {
  id: string;
  /** Centre of the marker, in % of the panel. */
  x: number;
  y: number;
  shape: DiffShape;
  kind: DiffKind;
}

export interface DiffRoundSpec {
  image: string;
  spots: DiffSpot[];
}

const clamp = (v: number, lo: number, hi: number): number => Math.min(Math.max(v, lo), hi);

/**
 * The whole round, derived from `seed` alone.
 *
 * Order of draws is fixed (photo → cells → shapes → per-spot kind and jitter),
 * so adding a shape to the palette reshuffles a day's round but never makes it
 * differ between two children playing the same day.
 */
export function buildDiffRound(seed: number): DiffRoundSpec {
  const rng = mulberry32(seed);

  const image = DIFF_IMAGES[seededInt(rng, 0, DIFF_IMAGES.length - 1)];
  const cells = seededPick(rng, DIFF_CELLS, DIFF_SPOT_COUNT);
  const shapes = seededPick(rng, DIFF_SHAPES, DIFF_SPOT_COUNT);

  const spots: DiffSpot[] = cells.map((cell, i) => {
    const shape = shapes[i] ?? DIFF_SHAPES[i % DIFF_SHAPES.length];
    const rolled = DIFF_KINDS[seededInt(rng, 0, DIFF_KINDS.length - 1)];
    // A turn nobody can see is not a difference — fall back to a colour swap.
    const kind: DiffKind = rolled === 'rotate' && !shape.rotatable ? 'color' : rolled;
    return {
      id: `diff-${i}`,
      x: clamp(cell.x + seededInt(rng, -DIFF_JITTER, DIFF_JITTER), 10, 90),
      y: clamp(cell.y + seededInt(rng, -DIFF_JITTER, DIFF_JITTER), 12, 88),
      shape,
      kind,
    };
  });

  return { image, spots };
}
