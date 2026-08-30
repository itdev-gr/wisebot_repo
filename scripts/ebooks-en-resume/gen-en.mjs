// Parallel English ebook narration generator — Gemini TTS Kore, m4a output.
// Resumable: pages whose final .m4a already exists are skipped.
import fs from 'node:fs';
import { execFileSync } from 'node:child_process';

const OUT = '/Users/vasilisskevis/Projects/wisebot/public/audio/ebooks';
const W = '/private/tmp/claude-501/-Users-vasilisskevis/4290a932-b020-4743-8bc6-b98ad27e33ad/scratchpad/ebooks-en';
const FF = process.env.FFMPEG;
const KEY = process.env.GEMINI_API_KEY;
const pages = JSON.parse(fs.readFileSync('/Users/vasilisskevis/Projects/wisebot/scripts/ebooks-en-for-tts.json', 'utf8'));

const todo = pages.filter(p => !fs.existsSync(`${OUT}/book-${p.bookId}-page-${p.page}-en.m4a`));
console.log(`pages total ${pages.length}, to generate: ${todo.length}`);

let done = 0, failed = 0;
async function genOne(p, attempt = 1) {
  const tag = `book-${p.bookId}-page-${p.page}-en`;
  try {
    const r = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-tts:generateContent?key=' + KEY, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contents: [{ parts: [{ text: p.text }] }], generationConfig: { responseModalities: ['AUDIO'], speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Kore' } } } } })
    });
    const d = await r.json();
    const b64 = d.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
    if (!b64) throw new Error((d.error?.message || 'no audio').slice(0, 80));
    const pcm = `${W}/${tag}.pcm`;
    fs.writeFileSync(pcm, Buffer.from(b64, 'base64'));
    execFileSync(FF, ['-y', '-f', 's16le', '-ar', '24000', '-ac', '1', '-i', pcm, '-c:a', 'aac', '-b:a', '48k', `${OUT}/${tag}.m4a`], { stdio: 'ignore' });
    fs.unlinkSync(pcm);
    done++;
    if (done % 10 === 0) console.log(`progress: ${done}/${todo.length}`);
  } catch (e) {
    if (attempt < 3) { await new Promise(r2 => setTimeout(r2, 5000 * attempt)); return genOne(p, attempt + 1); }
    failed++; console.log(`FAIL ${tag}: ${e.message}`);
  }
}

const POOL = 5;
let i = 0;
async function worker() { while (i < todo.length) { const p = todo[i++]; await genOne(p); } }
await Promise.all(Array.from({ length: POOL }, worker));
console.log(`DONE generated=${done} failed=${failed}`);
