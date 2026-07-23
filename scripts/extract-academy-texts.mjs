#!/usr/bin/env node
/**
 * Extract all Academy story texts (el + en) for TTS audio generation.
 *
 * Reads data/academyCourses.ts (single-line "..." storyContent strings)
 * and saves as JSON for generate-voices.mjs.
 *
 * Output: scripts/stories-for-tts.json  →  [{ id, el, en }]
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.resolve(__dirname, '..');
const SRC = path.join(PROJECT_ROOT, 'data', 'academyCourses.ts');
const OUT = path.join(__dirname, 'stories-for-tts.json');

const ts = fs.readFileSync(SRC, 'utf8');

const stories = [];
const entryRe = /id:\s*(\d+),[\s\S]{0,600}?storyContent:\s*\{\s*\n\s*el:\s*"([^\n]*)",\n\s*en:\s*"([^\n]*)"/g;
let m;
while ((m = entryRe.exec(ts)) !== null) {
  stories.push({ id: Number(m[1]), el: m[2], en: m[3] });
}

if (stories.length === 0) {
  console.error('No stories extracted — check the regex against academyCourses.ts');
  process.exit(1);
}

fs.writeFileSync(OUT, JSON.stringify(stories, null, 2));
console.log(`Extracted ${stories.length} stories → ${OUT}`);
console.log(`el lengths: ${Math.min(...stories.map(s => s.el.length))}-${Math.max(...stories.map(s => s.el.length))} chars`);
