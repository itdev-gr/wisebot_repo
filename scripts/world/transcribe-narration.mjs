#!/usr/bin/env node
/**
 * Transcribe World narration with word timestamps, so the read-along can follow it.
 *
 * Same approach as the ebooks pipeline's `sync-en.sh`: OpenAI whisper-1 with
 * `timestamp_granularities[]=word`. We transcribe the audio we just generated rather
 * than trusting the script we sent, because the timings have to describe what the voice
 * actually said — including where it paused and where it ran two words together.
 *
 *   node scripts/world/transcribe-narration.mjs [--lang el] [--city athens] [--force]
 *
 * Writes to scripts/world/work/words/<tag>.json. Resumable: an existing transcript is
 * skipped. Eight requests run at once, which is what the ebooks run settled on.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, '../..');
const AUDIO = path.join(ROOT, 'public', 'audio', 'world');
const WORDS = path.join(HERE, 'work', 'words');
const TEXTS = path.join(HERE, 'world-for-tts.json');
const CONCURRENCY = 8;

const args = process.argv.slice(2);
const arg = (name) => {
  const i = args.indexOf(`--${name}`);
  return i >= 0 && i + 1 < args.length ? args[i + 1] : null;
};
const LANG = arg('lang');
const CITY = arg('city');
const FORCE = args.includes('--force');

fs.mkdirSync(WORDS, { recursive: true });

/**
 * Read a key out of .env.vercel, stripping the wrapping in the order it was applied.
 *
 * The values in that file are stored as `"sk-…\n"`, with a literal backslash-n inside
 * the quotes. A single regex pass with an alternation cannot strip both the closing
 * quote and the escape behind it — it matches the quote, moves past, and leaves `\n`
 * on the end, which makes the key look valid and fails authentication. Peel one layer
 * at a time, which is what the ebooks pipeline's `sed` chain does.
 */
function readKey(env, name) {
  let value = (env.match(new RegExp(`^${name}=(.*)$`, 'm'))?.[1] ?? '').trim();
  if (value.startsWith('"')) value = value.slice(1);
  if (value.endsWith('"')) value = value.slice(0, -1);
  return value.replace(/\\n$/, '').trim();
}

const env = fs.readFileSync(path.join(ROOT, '.env.vercel'), 'utf8');
const KEY = readKey(env, 'OPENAI_API_KEY');
if (!KEY) {
  console.error('no OPENAI_API_KEY in .env.vercel');
  process.exit(1);
}

const rows = JSON.parse(fs.readFileSync(TEXTS, 'utf8'))
  .filter((r) => (LANG ? r.lang === LANG : true))
  .filter((r) => (CITY ? r.cityId === CITY : true))
  .filter((r) => fs.existsSync(path.join(AUDIO, `${r.tag}.m4a`)))
  .filter((r) => FORCE || !fs.existsSync(path.join(WORDS, `${r.tag}.json`)));

console.log(`${rows.length} clips to transcribe`);
if (!rows.length) process.exit(0);

let done = 0;
let failed = 0;

async function transcribe(row) {
  const file = path.join(AUDIO, `${row.tag}.m4a`);
  const form = new FormData();
  form.append('file', new Blob([fs.readFileSync(file)]), `${row.tag}.m4a`);
  form.append('model', 'whisper-1');
  form.append('language', row.lang);
  form.append('response_format', 'verbose_json');
  form.append('timestamp_granularities[]', 'word');

  const res = await fetch('https://api.openai.com/v1/audio/transcriptions', {
    method: 'POST',
    headers: { Authorization: `Bearer ${KEY}` },
    body: form,
  });
  const data = await res.json();
  if (!data.words?.length) throw new Error((data.error?.message || 'no words').slice(0, 90));
  fs.writeFileSync(path.join(WORDS, `${row.tag}.json`), JSON.stringify(data));
  return data.words.length;
}

const queue = [...rows];
await Promise.all(
  Array.from({ length: Math.min(CONCURRENCY, queue.length) }, async () => {
    while (queue.length) {
      const row = queue.shift();
      try {
        const n = await transcribe(row);
        done += 1;
        process.stdout.write(`  ${row.tag}  ${n} words\n`);
      } catch (err) {
        failed += 1;
        process.stdout.write(`  ${row.tag}  FAILED — ${err.message}\n`);
      }
    }
  }),
);

console.log(`\ntranscribed ${done}, failed ${failed}`);
