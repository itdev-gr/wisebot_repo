/**
 * WiseBot World — the passport stamp, and the ceremony that inks it.
 * ======================================================================
 * When a child steps into a new country the FIRST thing that happens is that the
 * country's own stamp goes into the passport, exactly like a real border. This file
 * draws that stamp and stages that moment, and does nothing else.
 *
 * Two exports, and the split matters:
 *
 *  • `PassportStamp` is a pure drawing. Given a country and a date it returns one
 *    inline SVG — no state, no storage, no side effect — so the StampBook can lay a
 *    page of them out and the ceremony can animate one of them without either screen
 *    learning how a stamp is built.
 *
 *  • `StampCeremony` is the ~2.5 second moment: the stamp falls, presses, and settles,
 *    the flag and the country's name arrive under it, and then it is over.
 *
 * Rules this file obeys, all of them failure modes this repository has produced:
 *
 *  1. **It awards nothing.** Every reward decision lives in `useWorldProgress.ts`. By
 *     the time the ceremony is on screen the child has ALREADY been paid, by the
 *     caller, from `enterCountry`. `onDone` is a dismissal signal — "the moment is
 *     finished, take the overlay away" — and must never be wired to an award. It fires
 *     exactly once, guarded by a ref, whether it came from the timer or from a tap,
 *     and the guard survives React 19 StrictMode's double-invoked effects.
 *  2. **Nothing random.** The rotation, the broken edge and the patchy ink are all
 *     seeded from `country.id`, so a passport reopened tomorrow shows the same stamp
 *     it showed today. `Math.random()` appears nowhere.
 *  3. **The legend is not translated.** `country.stamp.legend` is written in the
 *     country's own language and alphabet on purpose — a Greek child seeing ΕΛΛΑΣ,
 *     then РОССИЯ, then مصر is the whole point of the object. It renders as given.
 *  4. **Chrome is `ui()`, content is `say()`.** Never `text[lang]`: four of the six
 *     languages are legitimately absent while a city is being translated.
 *  5. **Nothing overflows.** Every line's font size is fitted to the space it has
 *     before it is drawn, so a forty-character legend shrinks or wraps rather than
 *     spilling past the ink.
 */

import React, {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import type { Country } from '../../data/world/types';
import type { UiText } from './worldUi';
import { WORLD_STYLE, say, ui, useWorldLang } from './worldUi';

// ---------------------------------------------------------------------- chrome

interface Chrome {
  heading: UiText<string>;
  congrats: UiText<string>;
  tap: UiText<string>;
  dismiss: UiText<string>;
  /** The whole sentence, once per language — never assembled from fragments. */
  moment: UiText<(country: string) => string>;
  stampDated: UiText<(legend: string, when: string) => string>;
  stampPlain: UiText<(legend: string) => string>;
}

const CHROME: Chrome = {
  heading: {
    el: 'ΝΕΑ ΣΦΡΑΓΙΔΑ',
    en: 'NEW STAMP',
    de: 'NEUER STEMPEL',
    fr: 'NOUVEAU TAMPON',
    es: 'NUEVO SELLO',
    it: 'NUOVO TIMBRO',
  },
  congrats: {
    el: 'Μπήκες σε νέα χώρα! Η σφραγίδα είναι δική σου για πάντα.',
    en: 'You just entered a new country! The stamp is yours forever.',
    de: 'Du bist in ein neues Land gereist! Der Stempel gehört für immer dir.',
    fr: 'Tu viens d’entrer dans un nouveau pays ! Le tampon est à toi pour toujours.',
    es: '¡Acabas de entrar en un país nuevo! El sello es tuyo para siempre.',
    it: 'Sei appena entrato in un nuovo Paese! Il timbro è tuo per sempre.',
  },
  tap: {
    el: 'Πάτα οπουδήποτε για να συνεχίσεις',
    en: 'Tap anywhere to carry on',
    de: 'Tippe irgendwohin, um weiterzugehen',
    fr: 'Touche l’écran pour continuer',
    es: 'Toca en cualquier sitio para seguir',
    it: 'Tocca ovunque per continuare',
  },
  dismiss: {
    el: 'Συνέχεια',
    en: 'Continue',
    de: 'Weiter',
    fr: 'Continuer',
    es: 'Continuar',
    it: 'Continua',
  },
  moment: {
    el: (country) => `Η σφραγίδα της χώρας ${country} μπαίνει στο διαβατήριό σου.`,
    en: (country) => `The stamp of ${country} is going into your passport.`,
    de: (country) => `Der Stempel von ${country} kommt in deinen Reisepass.`,
    fr: (country) => `Le tampon de ${country} entre dans ton passeport.`,
    es: (country) => `El sello de ${country} entra en tu pasaporte.`,
    it: (country) => `Il timbro di ${country} entra nel tuo passaporto.`,
  },
  stampDated: {
    el: (legend, when) => `Σφραγίδα διαβατηρίου ${legend}, ημερομηνία ${when}`,
    en: (legend, when) => `Passport stamp ${legend}, dated ${when}`,
    de: (legend, when) => `Reisepass-Stempel ${legend}, Datum ${when}`,
    fr: (legend, when) => `Tampon de passeport ${legend}, daté du ${when}`,
    es: (legend, when) => `Sello de pasaporte ${legend}, con fecha ${when}`,
    it: (legend, when) => `Timbro del passaporto ${legend}, in data ${when}`,
  },
  stampPlain: {
    el: (legend) => `Σφραγίδα διαβατηρίου ${legend}`,
    en: (legend) => `Passport stamp ${legend}`,
    de: (legend) => `Reisepass-Stempel ${legend}`,
    fr: (legend) => `Tampon de passeport ${legend}`,
    es: (legend) => `Sello de pasaporte ${legend}`,
    it: (legend) => `Timbro del passaporto ${legend}`,
  },
};

// ------------------------------------------------------------------ the seed

/**
 * A tiny deterministic generator, FNV-1a into xorshift32 — the same shape
 * `shuffleAnswers` uses, kept local because a stamp seeds on a country id rather than
 * on a question id. Everything wobbly about a stamp comes out of here, so the same
 * country always presses the same stamp.
 */
function makeRng(seed: string): () => number {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return () => {
    h ^= h << 13;
    h ^= h >>> 17;
    h ^= h << 5;
    return (h >>> 0) / 4294967296;
  };
}

// -------------------------------------------------------------------- the ink

interface Ink {
  /** Solid colour for strokes and glyphs. */
  css: string;
  /** The same colour at an arbitrary alpha, for glows. */
  at: (alpha: number) => string;
}

const FALLBACK_INK: Ink = {
  css: 'hsl(6, 62%, 62%)',
  at: (a) => `hsla(6, 62%, 62%, ${a})`,
};

function parseHex(hex: string): [number, number, number] | null {
  const m = /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(hex.trim());
  if (!m) return null;
  const raw = m[1];
  const full = raw.length === 3 ? raw.split('').map((c) => c + c).join('') : raw;
  return [
    parseInt(full.slice(0, 2), 16),
    parseInt(full.slice(2, 4), 16),
    parseInt(full.slice(4, 6), 16),
  ];
}

/**
 * The ink a stamp is actually drawn with.
 *
 * `CountryStamp.ink` is chosen to look like that country's real ink, on paper. This app
 * is dark throughout, so the hue is kept and only the lightness is pushed into a band
 * that a six-year-old can read against a near-black page — which is also how the type's
 * "real stamps are rarely black" ends up being enforced rather than merely hoped for.
 */
function readableInk(hex: string | undefined): Ink {
  const rgb = hex ? parseHex(hex) : null;
  if (!rgb) return FALLBACK_INK;

  const [r, g, b] = rgb.map((v) => v / 255) as [number, number, number];
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;
  const d = max - min;

  let h = 0;
  let s = 0;
  if (d > 0) {
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    if (max === r) h = ((g - b) / d + (g < b ? 6 : 0)) * 60;
    else if (max === g) h = ((b - r) / d + 2) * 60;
    else h = ((r - g) / d + 4) * 60;
  }

  // A grey ink stays grey — forcing saturation onto it would invent a hue the content
  // never asked for. Everything else keeps its hue and is lifted off the black.
  const S = d < 0.06 ? 0 : Math.min(0.9, Math.max(0.38, s));
  const L = d < 0.06 ? 0.8 : Math.min(0.74, Math.max(0.57, l));

  const hh = Math.round(h);
  const ss = Math.round(S * 100);
  const ll = Math.round(L * 100);
  return {
    css: `hsl(${hh}, ${ss}%, ${ll}%)`,
    at: (a: number) => `hsla(${hh}, ${ss}%, ${ll}%, ${a})`,
  };
}

// ------------------------------------------------------------------ the date

/**
 * The day-month-year a border stamp prints. Defensive because the caller may hand us a
 * date that came out of storage: an unreadable one prints nothing rather than garbage.
 */
function stampDate(iso: string | undefined): string {
  if (!iso) return '';
  const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(iso.trim());
  if (m) return `${m[3]} · ${m[2]} · ${m[1]}`;
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return '';
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${pad(d.getDate())} · ${pad(d.getMonth() + 1)} · ${d.getFullYear()}`;
}

// ------------------------------------------------------------------ geometry

const CX = 50;
const CY = 50;
/**
 * The design lives inside 0–100; the viewBox is wider so the stamp can be rotated
 * inside its own box without the outermost `<svg>` clipping a corner off. The element's
 * layout box therefore stays exactly `size × size`, whatever the rotation.
 */
const VIEW = '-9 -9 118 118';

const STAMP_FONT = '"Helvetica Neue", Helvetica, Arial, system-ui, sans-serif';

/** Average glyph advance as a fraction of the font size, for a bold sans at caps. */
const PER = 0.62;
/** Letter-spacing, as a fraction of the font size. */
const TRACK = 0.09;
/** One character's width, with a safety margin over the estimate. */
const W = (PER + TRACK) * 1.06;

const r2 = (n: number) => Math.round(n * 100) / 100;
const textWidth = (text: string, fs: number) => text.length * fs * W;

const SHAPES = ['circle', 'rectangle', 'oval', 'triangle'] as const;
type StampShape = (typeof SHAPES)[number];
const asShape = (v: unknown): StampShape =>
  typeof v === 'string' && (SHAPES as readonly string[]).includes(v)
    ? (v as StampShape)
    : 'circle';

/** A point on an axis-aligned ellipse, by parametric angle in degrees. */
function pointOn(rx: number, ry: number, deg: number): [number, number] {
  const t = (deg * Math.PI) / 180;
  return [CX + rx * Math.cos(t), CY + ry * Math.sin(t)];
}

/**
 * An arc of that ellipse. `sweep` 1 runs clockwise on screen, which is what puts text
 * the right way up along the TOP of a stamp; `sweep` 0 runs the other way, which is
 * what puts it the right way up along the BOTTOM.
 */
function arcPath(rx: number, ry: number, from: number, to: number, sweep: 0 | 1): string {
  const [x1, y1] = pointOn(rx, ry, from);
  const [x2, y2] = pointOn(rx, ry, to);
  const large = Math.abs(to - from) > 180 ? 1 : 0;
  return `M ${r2(x1)} ${r2(y1)} A ${r2(rx)} ${r2(ry)} 0 ${large} ${sweep} ${r2(x2)} ${r2(y2)}`;
}

// ------------------------------------------------------------------- fitting

interface LineFit {
  lines: string[];
  fs: number;
}

/** Greedy wrap. This lays out one untranslated legend; it never builds a sentence. */
function wrapWords(text: string, maxChars: number): string[] {
  const words = text.split(/\s+/).filter(Boolean);
  if (!words.length) return [];
  const lines: string[] = [];
  let line = words[0];
  for (let i = 1; i < words.length; i++) {
    const next = `${line} ${words[i]}`;
    if (next.length <= maxChars) line = next;
    else {
      lines.push(line);
      line = words[i];
    }
  }
  lines.push(line);
  return lines;
}

/**
 * Fit a straight run of text into `avail` user units, wrapping up to `maxLines` before
 * shrinking. Below `fsMin` the text keeps every character and each over-long line is
 * held inside the ink by `textLength` at draw time, so nothing can spill.
 */
function fitLines(
  text: string,
  avail: number,
  maxLines: number,
  fsMax: number,
  fsMin: number,
): LineFit {
  const clean = text.trim();
  if (!clean) return { lines: [], fs: fsMin };

  for (let fs = fsMax; fs >= fsMin; fs -= 0.25) {
    const maxChars = Math.max(1, Math.floor(avail / (fs * W)));
    const lines = wrapWords(clean, maxChars);
    if (lines.length <= maxLines && lines.every((l) => l.length <= maxChars)) {
      return { lines, fs };
    }
  }
  const maxChars = Math.max(1, Math.floor(avail / (fsMin * W)));
  return { lines: wrapWords(clean, maxChars), fs: fsMin };
}

interface ArcFit {
  text: string;
  fs: number;
  span: number;
}

/**
 * Fit a run of text along an arc. The arc grows with the text up to `spanMax`, and only
 * once it has run out of arc does the font size come down — so a short legend is large
 * and a forty-character one is small, and neither one ever laps itself.
 */
function fitArc(
  text: string,
  radius: number,
  spanMin: number,
  spanMax: number,
  fsMax: number,
): ArcFit {
  const clean = text.trim();
  if (!clean) return { text: '', fs: fsMax, span: 0 };

  const room = radius * ((spanMax * Math.PI) / 180);
  let fs = fsMax;
  if (textWidth(clean, fs) > room) fs = room / (clean.length * W);
  const needed = textWidth(clean, fs);
  const span = Math.min(spanMax, Math.max(spanMin, (needed / radius) * (180 / Math.PI)));
  return { text: clean, fs, span };
}

// -------------------------------------------------------------- ink drawings

const ArcLine: React.FC<{
  pathId: string;
  d: string;
  text: string;
  fs: number;
  ink: string;
  opacity: number;
}> = ({ pathId, d, text, fs, ink, opacity }) => (
  <>
    <path id={pathId} d={d} fill="none" stroke="none" />
    <text
      fontSize={r2(fs)}
      letterSpacing={r2(fs * TRACK)}
      fontWeight={800}
      fill={ink}
      fillOpacity={opacity}
      textAnchor="middle"
      style={{ fontFamily: STAMP_FONT }}
    >
      <textPath href={`#${pathId}`} startOffset="50%">
        {text}
      </textPath>
    </text>
  </>
);

const FlatLines: React.FC<{
  lines: string[];
  fs: number;
  centres: number[];
  avail: number;
  ink: string;
  opacity: number;
  weight?: number;
}> = ({ lines, fs, centres, avail, ink, opacity, weight = 800 }) => (
  <>
    {lines.map((line, i) => {
      const over = textWidth(line, fs) > avail;
      return (
        <text
          key={`${i}-${line}`}
          x={CX}
          y={r2(centres[i] ?? CY)}
          fontSize={r2(fs)}
          letterSpacing={r2(fs * TRACK)}
          fontWeight={weight}
          fill={ink}
          fillOpacity={opacity}
          textAnchor="middle"
          dominantBaseline="central"
          textLength={over ? r2(avail) : undefined}
          lengthAdjust={over ? 'spacingAndGlyphs' : undefined}
          style={{ fontFamily: STAMP_FONT }}
        >
          {line}
        </text>
      );
    })}
  </>
);

// --------------------------------------------------------------- the drawing

export interface PassportStampProps {
  country: Country;
  /** ISO date, e.g. '2026-09-11'. */
  date: string;
  /** Drawn size in px. The stamp fills about 85% of it, leaving room to rotate. */
  size?: number;
  /** Degrees. Defaults to a value seeded from `country.id`, so it never moves. */
  rotate?: number;
  className?: string;
}

/**
 * One stamp, drawn rather than loaded: an image would need one asset per country and
 * would still be wrong the moment a date changed.
 */
export const PassportStamp: React.FC<PassportStampProps> = ({
  country,
  date,
  size = 140,
  rotate,
  className = '',
}) => {
  const { lang } = useWorldLang();

  // `useId` is unique per instance; the strip keeps the result usable inside `url(#…)`,
  // which React's own ids are not, because they carry colons.
  const rawUid = useId();
  const uid = useMemo(() => rawUid.replace(/[^a-zA-Z0-9_-]/g, '') || 'stamp', [rawUid]);

  const stamp = country?.stamp;
  const shape = asShape(stamp?.shape);
  const ink = useMemo(() => readableInk(stamp?.ink), [stamp?.ink]);

  // The legend renders exactly as authored, in the country's own alphabet. The country
  // name is only a floor for content that landed without a stamp legend at all.
  const legend = (stamp?.legend ?? '').trim() || say(country.name, lang);
  const port = (stamp?.port ?? '').trim();
  const when = stampDate(date);

  const seeded = useMemo(() => {
    const rand = makeRng(country?.id || 'world');
    const tilt = Math.round((rand() * 13 - 6.5) * 10) / 10;
    const noiseSeed = Math.floor(rand() * 1000);
    const dash = `${r2(14 + rand() * 40)} ${r2(0.8 + rand() * 1.6)} ${r2(20 + rand() * 46)} ${r2(0.8 + rand() * 2)} ${r2(30 + rand() * 40)}`;
    // Patches of paper the ink missed. Pushed off the middle so the date stays crisp.
    const blots = Array.from({ length: 5 }, () => {
      let bx = 4 + rand() * 92;
      let by = 4 + rand() * 92;
      const dx = bx - CX;
      const dy = by - CY;
      const dist = Math.hypot(dx, dy) || 1;
      if (dist < 27) {
        bx = CX + (dx / dist) * 27;
        by = CY + (dy / dist) * 27;
      }
      return {
        cx: r2(bx),
        cy: r2(by),
        rx: r2(3 + rand() * 8),
        ry: r2(2 + rand() * 5),
        rot: Math.round(rand() * 180),
        o: r2(0.14 + rand() * 0.3),
      };
    });
    return { tilt, noiseSeed, dash, blots };
  }, [country?.id]);

  const tilt = rotate ?? seeded.tilt;

  const frameId = `${uid}-frame`;
  const maskId = `${uid}-mask`;

  /** What actually gets drawn, per shape. Fitted before it is drawn, never clipped. */
  const art = useMemo(() => {
    const frame: React.ReactNode[] = [];
    const words: React.ReactNode[] = [];

    if (shape === 'circle' || shape === 'oval') {
      const outer: [number, number] = shape === 'circle' ? [46, 46] : [47, 34];
      const inner: [number, number] = shape === 'circle' ? [33, 33] : [35, 22];
      const legendR: [number, number] = shape === 'circle' ? [40, 40] : [41, 28];
      const portR: [number, number] = shape === 'circle' ? [41, 41] : [42, 29];

      frame.push(
        <ellipse
          key="outer"
          cx={CX}
          cy={CY}
          rx={outer[0]}
          ry={outer[1]}
          strokeWidth={2.4}
          strokeOpacity={0.85}
          strokeDasharray={seeded.dash}
        />,
        <ellipse
          key="inner"
          cx={CX}
          cy={CY}
          rx={inner[0]}
          ry={inner[1]}
          strokeWidth={1.1}
          strokeOpacity={0.6}
        />,
      );

      // Top arc, reading left to right over the crown of the stamp.
      const lr = (legendR[0] + legendR[1]) / 2;
      const lf = fitArc(legend, lr, 100, 196, shape === 'circle' ? 7 : 6);
      if (lf.text && lf.span > 4) {
        words.push(
          <ArcLine
            key="legend"
            pathId={`${uid}-legend`}
            d={arcPath(legendR[0], legendR[1], 270 - lf.span / 2, 270 + lf.span / 2, 1)}
            text={lf.text}
            fs={lf.fs}
            ink={ink.css}
            opacity={0.95}
          />,
        );
      }

      // Bottom arc, drawn the other way round so the port reads upright too.
      const pr = (portR[0] + portR[1]) / 2;
      const pf = fitArc(port, pr, 60, 146, shape === 'circle' ? 5.4 : 4.8);
      if (pf.text && pf.span > 4) {
        words.push(
          <ArcLine
            key="port"
            pathId={`${uid}-port`}
            d={arcPath(portR[0], portR[1], 90 + pf.span / 2, 90 - pf.span / 2, 0)}
            text={pf.text}
            fs={pf.fs}
            ink={ink.css}
            opacity={0.85}
          />,
        );
      }

      if (when) {
        const avail = shape === 'circle' ? 50 : 48;
        const df = fitLines(when, avail, 1, 9, 3);
        const ruleHalf = shape === 'circle' ? 16 : 17;
        frame.push(
          <line
            key="rule-a"
            x1={CX - ruleHalf}
            y1={41.5}
            x2={CX + ruleHalf}
            y2={41.5}
            strokeWidth={0.9}
            strokeOpacity={0.55}
          />,
          <line
            key="rule-b"
            x1={CX - ruleHalf}
            y1={58.5}
            x2={CX + ruleHalf}
            y2={58.5}
            strokeWidth={0.9}
            strokeOpacity={0.55}
          />,
        );
        words.push(
          <FlatLines
            key="date"
            lines={df.lines}
            fs={df.fs}
            centres={[50]}
            avail={avail}
            ink={ink.css}
            opacity={0.92}
            weight={900}
          />,
        );
      }
      return { frame, words };
    }

    if (shape === 'rectangle') {
      const box = { x: 4, y: 19, w: 92, h: 62 };
      const pad = 10;
      const avail = box.w - 2 * pad;

      frame.push(
        <rect
          key="outer"
          x={box.x}
          y={box.y}
          width={box.w}
          height={box.h}
          rx={2.5}
          strokeWidth={2.4}
          strokeOpacity={0.85}
          strokeDasharray={seeded.dash}
        />,
        <rect
          key="inner"
          x={box.x + 4}
          y={box.y + 4}
          width={box.w - 8}
          height={box.h - 8}
          rx={1.5}
          strokeWidth={1}
          strokeOpacity={0.55}
        />,
      );

      const lf = fitLines(legend, avail, 2, 8, 3);
      const pf = fitLines(port, avail, 2, 5.6, 2.8);
      const df = when ? fitLines(when, avail, 1, 10, 3) : { lines: [], fs: 4 };

      const LH = 1.16;
      const GAP = 3.2;
      const blocks: { lines: string[]; fs: number; rule: boolean }[] = [];
      if (lf.lines.length) blocks.push({ lines: lf.lines, fs: lf.fs, rule: false });
      if (df.lines.length) blocks.push({ lines: df.lines, fs: df.fs, rule: true });
      if (pf.lines.length) blocks.push({ lines: pf.lines, fs: pf.fs, rule: false });

      const rawH =
        blocks.reduce((sum, b) => sum + b.lines.length * b.fs * LH, 0) +
        Math.max(0, blocks.length - 1) * GAP;
      // One global squeeze rather than three local ones: it keeps the proportions of
      // the stack while guaranteeing an absurdly long legend still sits inside the box.
      const room = box.h - 14;
      const k = rawH > room && rawH > 0 ? room / rawH : 1;

      let cursor = CY - (rawH * k) / 2;
      blocks.forEach((b, bi) => {
        if (bi > 0) {
          const ruleY = r2(cursor - (GAP * k) / 2);
          if (b.rule || blocks[bi - 1].rule) {
            frame.push(
              <line
                key={`rule-${bi}`}
                x1={box.x + pad}
                y1={ruleY}
                x2={box.x + box.w - pad}
                y2={ruleY}
                strokeWidth={0.9}
                strokeOpacity={0.5}
              />,
            );
          }
        }
        const fs = b.fs * k;
        const lineH = fs * LH;
        const centres = b.lines.map((_, li) => cursor + lineH * li + lineH / 2);
        words.push(
          <FlatLines
            key={`block-${bi}`}
            lines={b.lines}
            fs={fs}
            centres={centres}
            avail={avail}
            ink={ink.css}
            opacity={b.rule ? 0.92 : 0.9}
            weight={b.rule ? 900 : 800}
          />,
        );
        cursor += lineH * b.lines.length + GAP * k;
      });
      return { frame, words };
    }

    // triangle — the top third is unusable, so the words live in the wide bottom half.
    const apexY = 8;
    const baseY = 90;
    const half = 47;
    const outline = `M ${CX} ${apexY} L ${CX + half} ${baseY} L ${CX - half} ${baseY} Z`;
    const gy = (apexY + baseY + baseY) / 3;
    const shrink = (x: number, y: number, k: number): [number, number] => [
      CX + (x - CX) * k,
      gy + (y - gy) * k,
    ];
    const [ax, ay] = shrink(CX, apexY, 0.88);
    const [rx, ry] = shrink(CX + half, baseY, 0.88);
    const [lx, ly] = shrink(CX - half, baseY, 0.88);

    frame.push(
      <path
        key="outer"
        d={outline}
        strokeWidth={2.4}
        strokeOpacity={0.85}
        strokeLinejoin="round"
        strokeDasharray={seeded.dash}
      />,
      <path
        key="inner"
        d={`M ${r2(ax)} ${r2(ay)} L ${r2(rx)} ${r2(ry)} L ${r2(lx)} ${r2(ly)} Z`}
        strokeWidth={1}
        strokeOpacity={0.55}
        strokeLinejoin="round"
      />,
      <circle key="pip" cx={CX} cy={33} r={3.2} strokeWidth={1.1} strokeOpacity={0.6} />,
    );

    const legendAvail = 41.5;
    const lf = fitLines(legend, legendAvail, 3, 7, 3);
    const LH = 1.2;
    const bottom = 66;
    const centres = lf.lines.map((_, i) => bottom - (lf.lines.length - 1 - i) * lf.fs * LH);
    if (lf.lines.length) {
      words.push(
        <FlatLines
          key="legend"
          lines={lf.lines}
          fs={lf.fs}
          centres={centres}
          avail={legendAvail}
          ink={ink.css}
          opacity={0.95}
        />,
      );
    }
    if (when) {
      const df = fitLines(when, 62, 1, 8, 3);
      words.push(
        <FlatLines
          key="date"
          lines={df.lines}
          fs={df.fs}
          centres={[73]}
          avail={62}
          ink={ink.css}
          opacity={0.92}
          weight={900}
        />,
      );
    }
    if (port) {
      const pf = fitLines(port, 72, 1, 5.4, 2.8);
      words.push(
        <FlatLines
          key="port"
          lines={pf.lines}
          fs={pf.fs}
          centres={[82.5]}
          avail={72}
          ink={ink.css}
          opacity={0.85}
        />,
      );
    }
    return { frame, words };
  }, [shape, legend, port, when, ink.css, seeded.dash, uid]);

  const label = when
    ? ui(CHROME.stampDated, lang)(legend, when)
    : ui(CHROME.stampPlain, lang)(legend);

  return (
    <span className={`inline-block shrink-0 ${className}`} style={{ lineHeight: 0 }}>
      <svg
        width={size}
        height={size}
        viewBox={VIEW}
        role="img"
        aria-label={label}
        focusable="false"
        style={{ display: 'block', overflow: 'visible' }}
      >
        <defs>
          {/* A hand press never lands flat: the frame gets a slightly broken edge. */}
          <filter id={frameId} x="-18%" y="-18%" width="136%" height="136%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.62"
              numOctaves={1}
              seed={seeded.noiseSeed}
              result="grain"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="grain"
              scale={1.15}
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
          {/* Ink sits unevenly on paper; these are the patches it missed. */}
          <mask id={maskId} maskUnits="userSpaceOnUse" x="-12" y="-12" width="124" height="124">
            <rect x="-12" y="-12" width="124" height="124" fill="#ffffff" />
            {seeded.blots.map((b, i) => (
              <ellipse
                key={i}
                cx={b.cx}
                cy={b.cy}
                rx={b.rx}
                ry={b.ry}
                transform={`rotate(${b.rot} ${b.cx} ${b.cy})`}
                fill="#000000"
                fillOpacity={b.o}
              />
            ))}
          </mask>
        </defs>

        <g transform={`rotate(${r2(tilt)} ${CX} ${CY})`} mask={`url(#${maskId})`} opacity={0.93}>
          <g fill="none" stroke={ink.css} strokeLinecap="round" filter={`url(#${frameId})`}>
            {art.frame}
          </g>
          <g stroke="none">{art.words}</g>
        </g>
      </svg>
    </span>
  );
};

// ------------------------------------------------------------- the ceremony

/** Roughly two and a half seconds: long enough to feel earned, short enough to want. */
const CEREMONY_MS = 2600;

export interface StampCeremonyProps {
  country: Country;
  date: string;
  /**
   * "The moment is over." Fires exactly once — from the timer or from the child's tap,
   * whichever comes first. It is NOT an award callback: by the time this component is
   * mounted the entry has already been paid by `useWorldProgress.enterCountry`. Wiring
   * an award to it would pay twice the first time a child taps early.
   */
  onDone: () => void;
}

function prefersReducedMotion(): boolean {
  try {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  } catch {
    return false;
  }
}

/**
 * The moment itself: a darkened page, the stamp falling from above, the press, and the
 * country arriving underneath it. No navigation happens in here — it is a moment, not a
 * screen, and it hands control straight back through `onDone`.
 */
export const StampCeremony: React.FC<StampCeremonyProps> = ({ country, date, onDone }) => {
  const { lang } = useWorldLang();
  const controls = useAnimationControls();
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const [reduced] = useState(prefersReducedMotion);
  const [landed, setLanded] = useState(false);

  const ink = useMemo(() => readableInk(country?.stamp?.ink), [country?.stamp?.ink]);
  const tilt = useMemo(() => {
    const rand = makeRng(country?.id || 'world');
    return Math.round((rand() * 13 - 6.5) * 10) / 10;
  }, [country?.id]);

  // The one guard that matters. A ref, not state: it survives StrictMode's double
  // invocation and it is read synchronously, so neither the timer nor a fast double
  // tap can get past it twice.
  const firedRef = useRef(false);
  const onDoneRef = useRef(onDone);
  useEffect(() => {
    onDoneRef.current = onDone;
  });

  const finish = useCallback(() => {
    if (firedRef.current) return;
    firedRef.current = true;
    onDoneRef.current();
  }, []);

  useEffect(() => {
    const id = window.setTimeout(finish, CEREMONY_MS);
    return () => window.clearTimeout(id);
  }, [finish]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') finish();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [finish]);

  useEffect(() => {
    buttonRef.current?.focus();
  }, []);

  // Fall, overshoot, press, settle. Springs rather than keyframes, so the overshoot and
  // the impact come out of the physics instead of out of hand-tuned percentages.
  useEffect(() => {
    if (reduced) return undefined;
    let cancelled = false;
    const run = async () => {
      try {
        await controls.start({
          y: 0,
          opacity: 1,
          scale: 1.06,
          rotate: tilt,
          transition: { type: 'spring', stiffness: 190, damping: 13, mass: 1.1 },
        });
        if (cancelled) return;
        setLanded(true);
        await controls.start({
          scale: 0.92,
          transition: { type: 'spring', stiffness: 1100, damping: 26, mass: 0.5 },
        });
        if (cancelled) return;
        await controls.start({
          scale: 1,
          transition: { type: 'spring', stiffness: 420, damping: 17 },
        });
      } catch {
        /* the moment was dismissed mid-flight — nothing to clean up but the flag */
      }
    };
    void run();
    return () => {
      cancelled = true;
    };
  }, [controls, reduced, tilt]);

  const countryName = say(country.name, lang);

  return (
    <div
      // Above everything the Layout paints. That shell runs up to z-[10000] for the
      // mobile menu, plus z-[9998] for the header and z-[1200] for the chat bubble, so
      // a moment at a polite z-[90] renders underneath the chrome and is never seen.
      // GameCenter solves the same problem the same way at z-[9999].
      className="fixed inset-0 z-[10001] flex items-center justify-center px-6"
      role="dialog"
      aria-modal="true"
      aria-label={ui(CHROME.moment, lang)(countryName)}
    >
      <motion.div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        initial={reduced ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: reduced ? 0 : 0.25 }}
      />

      {/* The whole moment is one tap target — far larger than 44px, and the only
          focusable thing on screen, so a keyboard or a screen reader lands on it. */}
      <button
        ref={buttonRef}
        type="button"
        onClick={finish}
        aria-label={ui(CHROME.dismiss, lang)}
        className="absolute inset-0 h-full w-full cursor-pointer"
      />

      <div className="pointer-events-none relative flex w-full max-w-sm flex-col items-center text-center">
        <p className={WORLD_STYLE.label}>{ui(CHROME.heading, lang)}</p>

        <div className="relative mt-5 flex h-[200px] w-[200px] items-center justify-center">
          <div
            className="absolute inset-4 rounded-full blur-2xl"
            style={{ backgroundColor: ink.at(0.28) }}
            aria-hidden="true"
          />
          {landed && !reduced && (
            <motion.span
              className="absolute inset-6 rounded-full border-2"
              style={{ borderColor: ink.at(0.75) }}
              initial={{ scale: 0.55, opacity: 0.9 }}
              animate={{ scale: 1.9, opacity: 0 }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
              aria-hidden="true"
            />
          )}

          {reduced ? (
            <PassportStamp country={country} date={date} size={200} rotate={tilt} />
          ) : (
            <motion.div
              animate={controls}
              initial={{ y: -230, opacity: 0, scale: 2, rotate: tilt - 20 }}
              style={{ lineHeight: 0 }}
            >
              <PassportStamp country={country} date={date} size={200} rotate={0} />
            </motion.div>
          )}
        </div>

        <motion.div
          className="mt-4 flex flex-col items-center"
          initial={reduced ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={
            reduced ? { duration: 0 } : { delay: 0.7, type: 'spring', stiffness: 200, damping: 22 }
          }
        >
          <span className="text-5xl" role="img" aria-hidden="true">
            {country.flag || '🏳️'}
          </span>
          <h2 className={`${WORLD_STYLE.display} mt-2 text-3xl uppercase`}>{countryName}</h2>
          <p className={`${WORLD_STYLE.body} mt-3 text-sm font-bold italic`}>
            {ui(CHROME.congrats, lang)}
          </p>
          <p className={`${WORLD_STYLE.label} mt-6`} aria-hidden="true">
            {ui(CHROME.tap, lang)}
          </p>
        </motion.div>
      </div>
    </div>
  );
};
