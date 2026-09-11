#!/usr/bin/env node
/**
 * World narration — the same voice as the Academy and the ebooks.
 *
 * The recipe is copied from `scripts/ebooks-en-resume/gen-all.mjs`, deliberately and
 * exactly, because the owner's decision of 30 Αυγούστου 2026 was one voice everywhere:
 *
 *   model      gemini-2.5-flash-preview-tts
 *   voice      Kore, prebuilt, no style prompt — the text is sent as it is
 *   audio      raw PCM s16le 24 kHz mono → AAC m4a at 48 kbps
 *   output     public/audio/world/<tag>.m4a
 *
 * Do not "improve" any of those four lines. A different model, a style instruction or
 * a different bitrate produces a voice a child can hear is not the same voice, and the
 * whole point is that WiseBot sounds like WiseBot in every room.
 *
 * The kids' own recordings are not involved here. Those belong to the Greek ebooks 1-4
 * and nothing in this module touches them.
 *
 *   npx vite-node scripts/world/extract-texts.mjs     # first, to refresh the texts
 *   node scripts/world/generate-narration.mjs         # then this
 *
 *   --lang el        only one language
 *   --city athens    only one city
 *   --kind story     only place stories, or 'exhibit'
 *   --limit 60       stop after N, to stay inside the daily quota
 *
 * Resumable: a clip whose .m4a already exists is skipped, so it is safe to run again
 * tomorrow when the quota resets.
 */

import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, '../..');
const OUT = path.join(ROOT, 'public', 'audio', 'world');
const WORK = path.join(HERE, 'work');
const FF = path.join(ROOT, 'scripts', 'ebooks-en-resume', 'ffmpeg');
const TEXTS = path.join(HERE, 'world-for-tts.json');

const MODEL = 'gemini-2.5-flash-preview-tts';
const VOICE = 'Kore';

const args = process.argv.slice(2);
const arg = (name) => {
  const i = args.indexOf(`--${name}`);
  return i >= 0 && i + 1 < args.length ? args[i + 1] : null;
};

const LANG = arg('lang');
const CITY = arg('city');
const KIND = arg('kind');
const LIMIT = Number(arg('limit') ?? Infinity);

fs.mkdirSync(OUT, { recursive: true });
fs.mkdirSync(WORK, { recursive: true });

if (!fs.existsSync(FF)) {
  console.error(`no ffmpeg at ${FF} — the ebooks pipeline ships one; this reuses it`);
  process.exit(1);
}

/**
 * The key lives in .env.vercel, which is gitignored. Never print it.
 *
 * Values there are stored as `"…\n"`, with a literal backslash-n inside the quotes, so
 * the wrapping is peeled one layer at a time. A single regex alternation strips the
 * closing quote and leaves the escape behind it, which yields a key that looks right
 * and fails authentication.
 */
function readKey(env, name) {
  let value = (env.match(new RegExp(`^${name}=(.*)$`, 'm'))?.[1] ?? '').trim();
  if (value.startsWith('"')) value = value.slice(1);
  if (value.endsWith('"')) value = value.slice(0, -1);
  return value.replace(/\\n$/, '').trim();
}

const env = fs.readFileSync(path.join(ROOT, '.env.vercel'), 'utf8');
const KEY = readKey(env, 'GEMINI_API_KEY');
if (!KEY) {
  console.error('no GEMINI_API_KEY in .env.vercel');
  process.exit(1);
}

const rows = JSON.parse(fs.readFileSync(TEXTS, 'utf8'))
  .filter((r) => (LANG ? r.lang === LANG : true))
  .filter((r) => (CITY ? r.cityId === CITY : true))
  .filter((r) => (KIND ? r.kind === KIND : true));

const todo = rows.filter((r) => !fs.existsSync(path.join(OUT, `${r.tag}.m4a`))).slice(0, LIMIT);

console.log(`${rows.length} clips in scope, ${todo.length} to generate`);
if (!todo.length) process.exit(0);

let done = 0;
let failed = 0;
let quotaHit = false;

async function genOne(row, attempt = 1) {
  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${KEY}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: row.text }] }],
        generationConfig: {
          responseModalities: ['AUDIO'],
          speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName: VOICE } } },
        },
      }),
    },
  );

  const data = await res.json();
  const b64 = data.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
  if (!b64) {
    const msg = (data.error?.message || 'no audio in response').slice(0, 100);
    if (/quota|RESOURCE_EXHAUSTED/i.test(msg)) quotaHit = true;
    throw new Error(msg);
  }

  // Gemini sometimes returns a truncated take — a 28-second reading of a 90-second
  // page shipped once from the ebooks pipeline. Expect at least a second of audio per
  // 30 characters; a short take is retried, then failed loudly, and the alignment
  // stage's match threshold stays the final guard.
  const seconds = (b64.length * 0.75) / 48000;
  if (seconds < row.text.length / 30 && attempt < 3) {
    await new Promise((r) => setTimeout(r, 3000));
    return genOne(row, attempt + 1);
  }

  const pcm = path.join(WORK, `${row.tag}.pcm`);
  fs.writeFileSync(pcm, Buffer.from(b64, 'base64'));
  execFileSync(
    FF,
    ['-y', '-f', 's16le', '-ar', '24000', '-ac', '1', '-i', pcm, '-c:a', 'aac', '-b:a', '48k',
     path.join(OUT, `${row.tag}.m4a`)],
    { stdio: 'ignore' },
  );
  fs.unlinkSync(pcm);
  return seconds;
}

for (const row of todo) {
  if (quotaHit) {
    console.log('\nquota reached — the rest is waiting, run again after it resets');
    break;
  }
  try {
    const seconds = await genOne(row);
    done += 1;
    process.stdout.write(`  ${row.tag}  ${seconds.toFixed(0)}s\n`);
  } catch (err) {
    failed += 1;
    process.stdout.write(`  ${row.tag}  FAILED — ${err.message}\n`);
  }
  await new Promise((r) => setTimeout(r, 400));
}

console.log(`\ngenerated ${done}, failed ${failed}`);
const remaining = rows.filter((r) => !fs.existsSync(path.join(OUT, `${r.tag}.m4a`))).length;
console.log(remaining ? `${remaining} still missing` : 'every clip in scope is generated');
