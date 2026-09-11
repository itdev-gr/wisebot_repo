#!/usr/bin/env node
/**
 * Which World clips actually have narration, as a static set the app can consult
 * without asking the network.
 *
 *   node scripts/world/build-narration-manifest.mjs
 *
 * A clip counts as narrated only when BOTH files exist: the audio and its word
 * timings. Audio without timings would give a child a voice with no read-along, and
 * timings without audio would highlight words in silence. The aligner refuses to emit
 * timings below its match threshold, so this pair is also the signal that the take was
 * good enough to ship.
 *
 * Generated, never edited. Writes data/world/narration.ts.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, '../..');
const AUDIO = path.join(ROOT, 'public', 'audio', 'world');
const OUT = path.join(ROOT, 'data', 'world', 'narration.ts');

let files = [];
try {
  files = fs.readdirSync(AUDIO);
} catch {
  /* no audio yet — the manifest is then legitimately empty */
}

const tags = files
  .filter((f) => f.endsWith('.m4a'))
  .map((f) => f.slice(0, -4))
  .filter((tag) => fs.existsSync(path.join(AUDIO, `${tag}.json`)))
  .sort();

const body = `/**
 * GENERATED FILE — do not edit.
 *
 * Regenerate with:  node scripts/world/build-narration-manifest.mjs
 *
 * Every clip that has both audio and word timings, keyed by tag: the place or exhibit
 * id, a hyphen, the language. Narration is generated with Gemini TTS in the voice
 * 'Kore', the same voice as the Academy and the ebooks, by
 * scripts/world/generate-narration.mjs.
 */

const NARRATED = new Set<string>([
${tags.map((t) => `  '${t}',`).join('\n') || '  // nothing narrated yet'}
]);

/** Is there narration for this place or exhibit in this language? */
export function hasNarration(id: string, lang: string): boolean {
  return NARRATED.has(\`\${id}-\${lang}\`);
}

/** The audio file for a clip. Only call it when hasNarration() is true. */
export function narrationAudio(id: string, lang: string): string {
  return \`/audio/world/\${id}-\${lang}.m4a\`;
}

/** The word timings for a clip: { v: 1, words: [[start, end], ...] }. */
export function narrationTimings(id: string, lang: string): string {
  return \`/audio/world/\${id}-\${lang}.json\`;
}

export const NARRATION_COUNT = ${tags.length};
`;

fs.writeFileSync(OUT, body, 'utf8');

const byLang = tags.reduce((acc, tag) => {
  const lang = tag.slice(tag.lastIndexOf('-') + 1);
  return { ...acc, [lang]: (acc[lang] ?? 0) + 1 };
}, {});

console.log(`wrote data/world/narration.ts — ${tags.length} narrated clips`);
if (tags.length) {
  console.log(`  ${Object.entries(byLang).map(([l, n]) => `${l} ${n}`).join(', ')}`);
}

const orphanAudio = files
  .filter((f) => f.endsWith('.m4a'))
  .map((f) => f.slice(0, -4))
  .filter((tag) => !fs.existsSync(path.join(AUDIO, `${tag}.json`)));
if (orphanAudio.length) {
  console.log(`\n${orphanAudio.length} clip(s) have audio but no timings yet — run:`);
  console.log('  node scripts/world/transcribe-narration.mjs && python3 scripts/world/align-narration.py');
}
