/**
 * WiseBot World — shared UI plumbing.
 *
 * Two things live here, and both exist so that every World screen looks and reads like
 * one product rather than like six files written at six different times.
 *
 *  1. **The language.** World content ships in six languages while the rest of the app
 *     stays `'el' | 'en'`. Widening that union would mean touching every component in
 *     the tree, all 22 games and all 34 books, so World keeps its own choice instead,
 *     seeded from the app's language and remembered under `wb_world_lang`. Nothing
 *     outside `components/world/` ever sees a `WorldLang`.
 *
 *  2. **The style tokens.** The house look is a dark card at `bg-white/[0.04]` with a
 *     hairline border, heavy italic numerals and tiny uppercase labels — see
 *     `components/MakerPassport.tsx`, which this module deliberately echoes. The
 *     classes are written out literally rather than composed, because Tailwind's
 *     scanner only sees literal strings.
 */

import { createContext, useContext } from 'react';
import type { LocText, WorldLang } from '../../data/world/types';
import { WORLD_LANGS, pick } from '../../data/world/types';

// ------------------------------------------------------------------ language

const KEY = 'wb_world_lang';

const isWorldLang = (v: unknown): v is WorldLang =>
  typeof v === 'string' && (WORLD_LANGS as readonly string[]).includes(v);

/**
 * The language World starts in: the child's remembered choice, else whatever the app
 * is set to. Reading storage is wrapped because a private window throws on access,
 * not merely on write.
 */
export function initialWorldLang(appLang: 'el' | 'en'): WorldLang {
  try {
    const saved = localStorage.getItem(KEY);
    if (isWorldLang(saved)) return saved;
  } catch {
    /* blocked storage — fall through to the app's language */
  }
  return appLang;
}

export function rememberWorldLang(lang: WorldLang): void {
  try {
    localStorage.setItem(KEY, lang);
  } catch {
    /* never break a screen over a failed preference write */
  }
}

export interface WorldLangValue {
  lang: WorldLang;
  setLang: (lang: WorldLang) => void;
}

/**
 * Defaults to Greek so a component rendered outside the provider — a test, a preview —
 * still renders words rather than throwing.
 */
export const WorldLangContext = createContext<WorldLangValue>({
  lang: 'el',
  setLang: () => {},
});

export const useWorldLang = (): WorldLangValue => useContext(WorldLangContext);

/** The switcher's labels. Each language is named in itself, never translated. */
export const LANG_LABELS: Record<WorldLang, { flag: string; name: string; short: string }> = {
  el: { flag: '🇬🇷', name: 'Ελληνικά', short: 'ΕΛ' },
  en: { flag: '🇬🇧', name: 'English', short: 'EN' },
  de: { flag: '🇩🇪', name: 'Deutsch', short: 'DE' },
  fr: { flag: '🇫🇷', name: 'Français', short: 'FR' },
  es: { flag: '🇪🇸', name: 'Español', short: 'ES' },
  it: { flag: '🇮🇹', name: 'Italiano', short: 'IT' },
};

// ---------------------------------------------------------------------- text

/**
 * Read a piece of content in the current language.
 *
 * Always this, never `text[lang]`: the four optional languages are genuinely absent
 * while a city is being translated, and indexing straight into the object returns
 * `undefined`, which React renders as nothing at all.
 */
export const say = (text: LocText, lang: WorldLang): string => pick(text, lang);

/**
 * Chrome strings — buttons, headings, the things that are not content. A dictionary
 * needs `el` and `en`; the other four fall back to English, which is the right answer
 * for a button and the wrong answer for a story.
 */
export type UiText<T> = { el: T; en: T } & Partial<Record<WorldLang, T>>;

export function ui<T>(dict: UiText<T>, lang: WorldLang): T {
  return (dict as Record<string, T | undefined>)[lang] ?? dict.en;
}

// -------------------------------------------------------------------- tokens

/**
 * The shared look. Every World screen composes from these rather than inventing its
 * own spacing, so the module reads as one thing.
 */
export const WORLD_STYLE = {
  /** The standard surface. */
  card: 'bg-white/[0.04] border border-white/[0.08] rounded-2xl',
  /** A surface that can be clicked. */
  cardTap:
    'bg-white/[0.04] border border-white/[0.08] rounded-2xl hover:bg-white/[0.07] hover:border-white/20 active:scale-[0.99] transition-all',
  /** Big display type: heavy, italic, tight. The app's signature. */
  display: 'font-[1000] italic tracking-tighter leading-none text-white',
  /** The tiny uppercase caption under or above a number. */
  label: 'text-[10px] font-black text-white/40 uppercase tracking-widest',
  /** Body copy — stories, intros, explanations. */
  body: 'text-white/70 leading-relaxed',
  /** A fact chip. */
  chip: 'inline-flex items-center gap-1.5 bg-white/[0.06] border border-white/10 rounded-full px-3 py-1.5 text-xs font-bold text-white/70',
  /** The one call to action on a screen. */
  cta: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white font-black uppercase tracking-wider rounded-xl px-5 py-3 shadow-[0_0_20px_rgba(59,130,246,0.4)] active:scale-[0.98] transition-transform',
  /** A quiet secondary action. */
  ghost:
    'bg-white/[0.06] border border-white/10 text-white/70 font-bold rounded-xl px-4 py-2.5 hover:bg-white/[0.1] transition-colors',
  /** Something already earned. */
  earned: 'border-emerald-400/40 bg-emerald-400/[0.08]',
} as const;

/** Category colours, written out literally so Tailwind's scanner keeps them. */
export const CATEGORY_STYLE: Record<string, string> = {
  landmark: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
  museum: 'bg-violet-500/15 text-violet-300 border-violet-500/30',
  nature: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
  science: 'bg-sky-500/15 text-sky-300 border-sky-500/30',
  art: 'bg-pink-500/15 text-pink-300 border-pink-500/30',
  history: 'bg-orange-500/15 text-orange-300 border-orange-500/30',
  food: 'bg-red-500/15 text-red-300 border-red-500/30',
  sport: 'bg-lime-500/15 text-lime-300 border-lime-500/30',
};

export const CATEGORY_LABEL: Record<string, UiText<string>> = {
  landmark: { el: 'ΟΡΟΣΗΜΟ', en: 'LANDMARK' },
  museum: { el: 'ΜΟΥΣΕΙΟ', en: 'MUSEUM' },
  nature: { el: 'ΦΥΣΗ', en: 'NATURE' },
  science: { el: 'ΕΠΙΣΤΗΜΗ', en: 'SCIENCE' },
  art: { el: 'ΤΕΧΝΗ', en: 'ART' },
  history: { el: 'ΙΣΤΟΡΙΑ', en: 'HISTORY' },
  food: { el: 'ΓΕΥΣΗ', en: 'FOOD' },
  sport: { el: 'ΑΘΛΗΜΑ', en: 'SPORT' },
};

/**
 * Shuffle a question's four answers, remembering where the correct one went.
 *
 * Index 0 is correct in the data, which makes content readable and diffable but would
 * be trivially learnable on screen. Seeded by the question's own id so the order is
 * stable across re-renders and across a language switch: an answer that jumps while
 * the child is reading it is a bug, not a feature.
 */
export function shuffleAnswers<T>(answers: readonly T[], seed: string): { items: T[]; correctIndex: number } {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  const rand = () => {
    h ^= h << 13;
    h ^= h >>> 17;
    h ^= h << 5;
    return Math.abs(h) / 2147483647;
  };

  const items = answers.map((value, index) => ({ value, index }));
  for (let i = items.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1)) % (i + 1);
    [items[i], items[j]] = [items[j], items[i]];
  }
  return {
    items: items.map((entry) => entry.value),
    correctIndex: items.findIndex((entry) => entry.index === 0),
  };
}
