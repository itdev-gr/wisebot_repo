#!/usr/bin/env node
/**
 * Extract all Academy story texts (el + en) for TTS audio generation.
 *
 * Output: scripts/stories-for-tts.json  →  [{ id, el, en }]
 *
 * This used to scrape data/academyCourses.ts with a regex that assumed each
 * storyContent was two single-line double-quoted strings in a fixed layout. Any
 * story written differently was silently skipped, so the file held 98 of 113 —
 * and the 15 it missed (91-100, 109-113) never got narration generated. Now it
 * imports the module, which cannot drift from the source.
 *
 * Run through vite-node so the TypeScript module resolves:
 *   npx vite-node scripts/extract-academy-texts.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.resolve(__dirname, '..');
const OUT = path.join(__dirname, 'stories-for-tts.json');

const { COURSES } = await import(path.join(PROJECT_ROOT, 'data', 'academyCourses.ts'));

const stories = [];
const seen = new Set();
for (const course of COURSES) {
  const { id, storyContent } = course || {};
  if (typeof id !== 'number' || !storyContent) continue;
  const el = (storyContent.el || '').trim();
  const en = (storyContent.en || '').trim();
  if (!el && !en) continue;
  if (seen.has(id)) {
    console.warn(`! duplicate story id ${id} — keeping the first`);
    continue;
  }
  seen.add(id);
  stories.push({ id, el, en });
}
stories.sort((a, b) => a.id - b.id);

fs.writeFileSync(OUT, JSON.stringify(stories, null, 2));

const ids = stories.map(s => s.id);
const gaps = [];
for (let i = 1; i <= Math.max(...ids); i++) if (!seen.has(i)) gaps.push(i);
const chars = stories.reduce((n, s) => n + s.el.length + s.en.length, 0);

console.log(`${stories.length} stories → ${path.relative(PROJECT_ROOT, OUT)}`);
console.log(`ids ${Math.min(...ids)}-${Math.max(...ids)}${gaps.length ? `, gaps: ${gaps.join(',')}` : ', no gaps'}`);
console.log(`${chars.toLocaleString()} characters total`);
const short = stories.filter(s => !s.el || !s.en);
if (short.length) console.warn(`! ${short.length} story/ies missing one language: ${short.map(s => s.id).join(',')}`);
