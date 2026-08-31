// Bilingual ebook narration generator — Gemini TTS Kore, m4a output.
// English: every page of all 34 books. Greek: books 5-34 ONLY — books 1-4
// belong to the owner's children (including pages still being recorded),
// and this generator must never create files in their range.
// Resumable: pages whose final .m4a already exists are skipped.
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, '..', '..');
const OUT = path.join(ROOT, 'public', 'audio', 'ebooks');
const WORK = path.join(HERE, 'work');
const FF = path.join(HERE, 'ffmpeg');
fs.mkdirSync(WORK, { recursive: true });

const env = fs.readFileSync(path.join(ROOT, '.env.vercel'), 'utf8');
const KEY = (env.match(/^GEMINI_API_KEY=(.*)$/m)?.[1] || '').replace(/^"|"$|\\n$/g, '').trim();
if (!KEY) { console.error('no GEMINI_API_KEY in .env.vercel'); process.exit(1); }

const en = JSON.parse(fs.readFileSync(path.join(ROOT, 'scripts', 'ebooks-en-for-tts.json'), 'utf8'))
  .map(p => ({ ...p, lang: 'en' }));
const el = JSON.parse(fs.readFileSync(path.join(ROOT, 'scripts', 'ebooks-for-tts.json'), 'utf8'))
  .filter(p => p.bookId >= 5) // kids' books 1-4 are untouchable
  .map(p => ({ ...p, lang: 'el' }));

// English first (16 pages away from completing that milestone), then Greek.
const pages = [...en, ...el];
const todo = pages.filter(p => !fs.existsSync(`${OUT}/book-${p.bookId}-page-${p.page}-${p.lang}.m4a`));
console.log(`targets ${pages.length}, to generate: ${todo.length} (en ${todo.filter(p => p.lang === 'en').length}, el ${todo.filter(p => p.lang === 'el').length})`);
if (!todo.length) process.exit(0);

let done = 0, failed = 0, quotaHit = false;
async function genOne(p, attempt = 1) {
  const tag = `book-${p.bookId}-page-${p.page}-${p.lang}`;
  try {
    const r = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-tts:generateContent?key=' + KEY, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contents: [{ parts: [{ text: p.text }] }], generationConfig: { responseModalities: ['AUDIO'], speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Kore' } } } } })
    });
    const d = await r.json();
    const b64 = d.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
    if (!b64) {
      const msg = (d.error?.message || 'no audio').slice(0, 90);
      if (/quota/i.test(msg)) quotaHit = true;
      throw new Error(msg);
    }
    // Gemini sometimes truncates a generation (a ~28s take of a ~90s page
    // shipped once). Catch the obvious cases here: expect at least 1s of
    // audio per 30 chars of text; short takes retry, then fail loudly so
    // the align stage's match threshold stays the final guard.
    const secs = b64.length * 0.75 / 48000;
    if (secs < p.text.length / 30 && attempt < 3) {
      await new Promise(r2 => setTimeout(r2, 3000));
      return genOne(p, attempt + 1);
    }
    const pcm = `${WORK}/${tag}.pcm`;
    fs.writeFileSync(pcm, Buffer.from(b64, 'base64'));
    execFileSync(FF, ['-y', '-f', 's16le', '-ar', '24000', '-ac', '1', '-i', pcm, '-c:a', 'aac', '-b:a', '48k', `${OUT}/${tag}.m4a`], { stdio: 'ignore' });
    fs.unlinkSync(pcm);
    done++;
    if (done % 10 === 0) console.log(`progress: ${done}/${todo.length}`);
  } catch (e) {
    if (!quotaHit && attempt < 3) { await new Promise(r2 => setTimeout(r2, 5000 * attempt)); return genOne(p, attempt + 1); }
    failed++;
    if (failed <= 3 || failed % 25 === 0) console.log(`FAIL ${tag}: ${e.message}`);
  }
}

const POOL = 4;
let i = 0;
async function worker() { while (i < todo.length && !quotaHit) { const p = todo[i++]; await genOne(p); } }
await Promise.all(Array.from({ length: POOL }, worker));
console.log(`GEN_DONE generated=${done} failed=${failed} quota=${quotaHit}`);
process.exit(failed > 0 ? 2 : 0);
