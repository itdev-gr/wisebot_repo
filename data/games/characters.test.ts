/**
 * Grammatical gender of the five brand characters in the games' shipped copy.
 *
 * The owner's rule (19/9/2026): WiseBot and Link are FEMININE — «η WiseBot»,
 * «της Link», "her wings"; Pencilo, Crocus and Sparken are MASCULINE —
 * «ο Crocus», «του Sparken», "his key". Generated content shipped with all of
 * them the other way round, and nothing caught it, so this suite reads the
 * game copy files as plain text and fails on every wrong article, pronoun or
 * possessive, naming the file and line.
 *
 * Scope: data/games/** and components/games/** (the six games, their rounds
 * and components). Test files are skipped. The repo-wide sibling
 * `data/characters.test.ts` covers everything outside these two folders, so
 * GameCenter.tsx is deliberately not scanned here.
 *
 * Boundaries are written with Unicode look-arounds, not `\b`: JavaScript's
 * `\b` only knows ASCII word characters, so `/\bο\s+WiseBot/` never matches
 * «Ο WiseBot» after a space — a regex that can only pass is no guard at all.
 */
import { readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { describe, it, expect } from 'vitest';

const ROOT = process.cwd();
const SCAN_DIRS = ['data/games', 'components/games'] as const;

/** Masculine article / pronoun before a feminine character. */
const GREEK_MASCULINE_BEFORE_FEMININE =
  /(?<!\p{L})(ο|Ο|του|Του|τον|Τον|στον|Στον)\s+(WiseBot|Link)(?!\p{L})/gu;
/** Feminine article / pronoun before a masculine character. */
const GREEK_FEMININE_BEFORE_MASCULINE =
  /(?<!\p{L})(η|Η|της|Της|την|Την|στην|Στην)\s+(Crocus|Sparken|Pencilo)(?!\p{L})/gu;
/** "his/him" within the same sentence after a feminine character. */
const ENGLISH_MASCULINE_AFTER_FEMININE = [
  /\bWiseBot('s)?\b[^.!?\n]{0,60}\b(his|him|himself)\b/g,
  /\bLink('s)?\b[^.!?\n]{0,60}\b(his|him|himself)\b/g,
];
/** "she/her" within the same sentence after a masculine character. */
const ENGLISH_FEMININE_AFTER_MASCULINE =
  /\b(Crocus|Sparken|Pencilo)('s)?\b[^.!?\n]{0,60}\b(she|her|hers|herself)\b/g;

const isCopyFile = (name: string) =>
  /\.tsx?$/.test(name) && !/\.test\.tsx?$/.test(name) && !name.endsWith('.d.ts');

function listCopyFiles(dir: string): string[] {
  const out: string[] = [];
  for (const entry of readdirSync(path.join(ROOT, dir), { withFileTypes: true })) {
    const rel = `${dir}/${entry.name}`;
    if (entry.isDirectory()) out.push(...listCopyFiles(rel));
    else if (entry.isFile() && isCopyFile(entry.name)) out.push(rel);
  }
  return out.sort();
}

const FILES = SCAN_DIRS.flatMap((d) => listCopyFiles(d));
const SOURCES = new Map(FILES.map((f) => [f, readFileSync(path.join(ROOT, f), 'utf8')]));

/** Every match of `patterns` across the scanned files, as `file:line: «text»`. */
function violations(...patterns: RegExp[]): string[] {
  const hits: string[] = [];
  for (const [file, text] of SOURCES) {
    for (const pattern of patterns) {
      pattern.lastIndex = 0;
      for (const m of text.matchAll(pattern)) {
        const line = text.slice(0, m.index).split('\n').length;
        hits.push(`${file}:${line}: «${m[0]}»`);
      }
    }
  }
  return hits.sort();
}

const report = (title: string, hits: string[]) =>
  `${title} — ${hits.length} place(s), fix each by reading the sentence (not with sed):\n  ${hits.join('\n  ')}`;

describe('characters — the scan itself', () => {
  it('reads the six games, their rounds and their components, and skips test files', () => {
    expect(FILES.length).toBeGreaterThan(20);
    for (const must of ['data/games/escape.ts', 'data/games/whoami.ts', 'data/games/daily.ts', 'data/games/draw.ts',
      'data/games/rhythm.ts', 'data/games/machine.ts', 'components/games/EscapeRoom.tsx', 'components/games/WhoAmI.tsx',
      'components/games/rounds/DiffRound.tsx']) {
      expect(FILES, must).toContain(must);
    }
    expect(FILES.filter((f) => /\.test\.tsx?$/.test(f))).toEqual([]);
  });

  it('the Greek patterns really match a wrong form (guards against an ASCII-only \\b)', () => {
    expect('λέει ο WiseBot και').toMatch(GREEK_MASCULINE_BEFORE_FEMININE);
    expect('Ο Link κρατάει').toMatch(GREEK_MASCULINE_BEFORE_FEMININE);
    expect('Το κλειδί της Crocus').toMatch(GREEK_FEMININE_BEFORE_MASCULINE);
    expect('η WiseBot και ο Crocus').not.toMatch(GREEK_MASCULINE_BEFORE_FEMININE);
    expect('στο WiseBot Academy').not.toMatch(GREEK_MASCULINE_BEFORE_FEMININE);
  });
});

describe('characters — Greek gender (η WiseBot, η Link · ο Pencilo, ο Crocus, ο Sparken)', () => {
  it('never puts a masculine article or pronoun before WiseBot or Link', () => {
    const hits = violations(GREEK_MASCULINE_BEFORE_FEMININE);
    expect(hits, report('Masculine form before a feminine character', hits)).toEqual([]);
  });

  it('never puts a feminine article or pronoun before Crocus, Sparken or Pencilo', () => {
    const hits = violations(GREEK_FEMININE_BEFORE_MASCULINE);
    expect(hits, report('Feminine form before a masculine character', hits)).toEqual([]);
  });
});

describe('characters — English pronouns (WiseBot, Link: she/her · Crocus, Sparken, Pencilo: he/his)', () => {
  it('never says his/him of WiseBot or Link in the same sentence', () => {
    const hits = violations(...ENGLISH_MASCULINE_AFTER_FEMININE);
    expect(hits, report('his/him after a feminine character', hits)).toEqual([]);
  });

  it('never says she/her of Crocus, Sparken or Pencilo in the same sentence', () => {
    const hits = violations(ENGLISH_FEMININE_AFTER_MASCULINE);
    expect(hits, report('she/her after a masculine character', hits)).toEqual([]);
  });
});
