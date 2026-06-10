#!/usr/bin/env node
/**
 * 🎙️ WiseBot Unified Voice Generator — OpenAI gpt-4o-mini-tts
 * ============================================================
 * Regenerates ALL narration audio (ebooks + academy, el + en) with
 * OpenAI's most human-like TTS model, using storytelling instructions
 * so every set sounds consistent and warm.
 *
 * Sets:
 *   ebooks-el   scripts/ebooks-for-tts.json     → public/audio/ebooks/book-{id}-page-{p}-el.mp3
 *   ebooks-en   scripts/ebooks-en-for-tts.json  → public/audio/ebooks/book-{id}-page-{p}-en.mp3
 *   academy-el  scripts/stories-for-tts.json    → public/audio/academy/story-{id}-el.mp3
 *   academy-en  scripts/stories-for-tts.json    → public/audio/academy/story-{id}-en.mp3
 *
 * Usage:
 *   OPENAI_API_KEY=sk-... node scripts/generate-all-voices-gpt4o.mjs [options]
 *
 *   --sets ebooks-el,academy-el   Only these sets (default: all four)
 *   --voice-el coral              Greek voice (default: coral)
 *   --voice-en fable              English voice (default: fable)
 *   --force                       Overwrite existing files (default: skip existing)
 *   --concurrency 4               Parallel requests (default: 4)
 *
 * Cost: ~$0.012/1k chars → full 370k chars ≈ $4.50
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.resolve(__dirname, '..');
const EBOOKS_DIR = path.join(PROJECT_ROOT, 'public', 'audio', 'ebooks');
const ACADEMY_DIR = path.join(PROJECT_ROOT, 'public', 'audio', 'academy');

const args = process.argv.slice(2);
const getArg = (n) => { const i = args.indexOf(`--${n}`); return i >= 0 && i + 1 < args.length ? args[i + 1] : null; };
const hasFlag = (n) => args.includes(`--${n}`);

const API_KEY = (process.env.OPENAI_API_KEY || '').replace(/\\n/g, '').trim();
const VOICE_EL = getArg('voice-el') || 'coral';
const VOICE_EN = getArg('voice-en') || 'fable';
const FORCE = hasFlag('force');
const CONCURRENCY = parseInt(getArg('concurrency') || '4', 10);
const SETS = (getArg('sets') || 'ebooks-el,ebooks-en,academy-el,academy-en').split(',');

const INSTRUCTIONS = {
  el: 'Είσαι επαγγελματίας αφηγητής παιδικών παραμυθιών. Μίλα με άψογη, φυσική ελληνική προφορά. Αφηγήσου ζεστά, εκφραστικά και παραστατικά, με ήρεμο ρυθμό, μικρές παύσεις στις τελείες και ζωντάνια στα θαυμαστικά. Απευθύνεσαι σε παιδιά 6-13 ετών.',
  en: 'You are a professional children\'s storyteller. Narrate warmly and expressively with a calm, engaging pace — gentle pauses at sentence ends, lively energy on exclamations. You are reading to kids aged 6-13.',
};

if (!API_KEY) {
  console.error('❌ Missing OPENAI_API_KEY');
  process.exit(1);
}

function loadTasks() {
  const tasks = [];
  if (SETS.includes('ebooks-el')) {
    const pages = JSON.parse(fs.readFileSync(path.join(__dirname, 'ebooks-for-tts.json'), 'utf8'));
    for (const p of pages) tasks.push({ set: 'ebooks-el', lang: 'el', text: p.text, out: path.join(EBOOKS_DIR, `book-${p.bookId}-page-${p.page}-el.mp3`) });
  }
  if (SETS.includes('ebooks-en')) {
    const pages = JSON.parse(fs.readFileSync(path.join(__dirname, 'ebooks-en-for-tts.json'), 'utf8'));
    for (const p of pages) tasks.push({ set: 'ebooks-en', lang: 'en', text: p.text, out: path.join(EBOOKS_DIR, `book-${p.bookId}-page-${p.page}-en.mp3`) });
  }
  if (SETS.includes('academy-el') || SETS.includes('academy-en')) {
    const stories = JSON.parse(fs.readFileSync(path.join(__dirname, 'stories-for-tts.json'), 'utf8'));
    for (const s of stories) {
      if (SETS.includes('academy-el')) tasks.push({ set: 'academy-el', lang: 'el', text: s.el, out: path.join(ACADEMY_DIR, `story-${s.id}-el.mp3`) });
      if (SETS.includes('academy-en')) tasks.push({ set: 'academy-en', lang: 'en', text: s.en, out: path.join(ACADEMY_DIR, `story-${s.id}-en.mp3`) });
    }
  }
  return tasks;
}

async function generateOne(task, attempt = 1) {
  const res = await fetch('https://api.openai.com/v1/audio/speech', {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'gpt-4o-mini-tts',
      voice: task.lang === 'el' ? VOICE_EL : VOICE_EN,
      input: task.text,
      instructions: INSTRUCTIONS[task.lang],
      response_format: 'mp3',
    }),
  });

  if (!res.ok) {
    const errText = await res.text().catch(() => '');
    if ((res.status === 429 || res.status >= 500) && attempt <= 4) {
      const wait = attempt * 15000;
      console.log(`   ⏳ ${path.basename(task.out)}: HTTP ${res.status}, retry ${attempt}/4 in ${wait / 1000}s`);
      await new Promise(r => setTimeout(r, wait));
      return generateOne(task, attempt + 1);
    }
    throw new Error(`HTTP ${res.status}: ${errText.slice(0, 150)}`);
  }

  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length < 2000) throw new Error(`Suspiciously small output (${buf.length} bytes)`);
  fs.writeFileSync(task.out, buf);
  return buf.length;
}

async function main() {
  fs.mkdirSync(EBOOKS_DIR, { recursive: true });
  fs.mkdirSync(ACADEMY_DIR, { recursive: true });

  let tasks = loadTasks();
  const total = tasks.length;
  if (!FORCE) tasks = tasks.filter(t => !fs.existsSync(t.out));

  const chars = tasks.reduce((s, t) => s + t.text.length, 0);
  console.log(`🎙️  gpt-4o-mini-tts | el=${VOICE_EL} en=${VOICE_EN} | sets=${SETS.join(',')}`);
  console.log(`   Tasks: ${tasks.length}/${total} (${FORCE ? 'force overwrite' : 'skipping existing'})`);
  console.log(`   Chars: ${chars.toLocaleString()} → est. $${(chars / 1000 * 0.012).toFixed(2)}`);

  let done = 0, failed = 0, bytes = 0;
  const failures = [];
  const queue = [...tasks];

  async function worker() {
    while (queue.length) {
      const task = queue.shift();
      try {
        const b = await generateOne(task);
        bytes += b; done++;
        console.log(`   [${done + failed}/${tasks.length}] ✅ ${path.basename(task.out)} (${(b / 1024).toFixed(0)} KB)`);
      } catch (e) {
        failed++; failures.push(path.basename(task.out));
        console.log(`   [${done + failed}/${tasks.length}] ❌ ${path.basename(task.out)}: ${e.message}`);
      }
    }
  }

  await Promise.all(Array.from({ length: CONCURRENCY }, worker));

  console.log(`\n🎉 Done: ${done} generated (${(bytes / 1024 / 1024).toFixed(1)} MB), ${failed} failed`);
  if (failures.length) {
    console.log(`   Failed files:\n   ${failures.join('\n   ')}`);
    console.log('   Re-run WITHOUT --force to retry only the failed/missing ones.');
    process.exitCode = 1;
  }
}

main().catch(e => { console.error('❌ Fatal:', e.message); process.exit(1); });
