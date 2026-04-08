#!/usr/bin/env node
/**
 * 🎙️ WiseBot Ebook Voice Generator — ElevenLabs Premium
 * ======================================================
 * Generates Greek MP3 audio for all ebook pages using ElevenLabs TTS.
 * Voice: Eleni (soft, calm, narrative — perfect for storytelling)
 *
 * Usage:
 *   ELEVENLABS_API_KEY=sk_... node scripts/generate-ebook-voices-elevenlabs.mjs
 *
 *   Options:
 *     --book 1       Generate only specific book ID
 *     --force        Re-generate even if file exists
 *     --start N      Start from index N (for resuming)
 *     --voice ID     Override voice ID
 *
 * Output: public/audio/ebooks/book-{id}-page-{page}-el.mp3
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.resolve(__dirname, '..');
const OUTPUT_DIR = path.join(PROJECT_ROOT, 'public', 'audio', 'ebooks');
const PAGES_FILE = path.join(__dirname, 'ebooks-for-tts.json');

// ─── Voice config ───────────────────────────────────
const VOICES = {
  eleni: 'aTP4J5SJLQl74WTSRXKW',
  martha: 'JrrE7QTGDmQKQuUnqk7H',
  christina: 'TaxceJVmw8PImjbbbz3w',
};
const DEFAULT_VOICE = 'eleni';
const MODEL = 'eleven_multilingual_v2';

// ─── Parse CLI args ─────────────────────────────────
const args = process.argv.slice(2);
function getArg(name) {
  const idx = args.indexOf(`--${name}`);
  return idx >= 0 && idx + 1 < args.length ? args[idx + 1] : null;
}
const hasFlag = (name) => args.includes(`--${name}`);

const API_KEY = process.env.ELEVENLABS_API_KEY;
const VOICE_NAME = getArg('voice') || DEFAULT_VOICE;
const VOICE_ID = VOICES[VOICE_NAME] || VOICE_NAME; // support both name and raw ID
const BOOK_FILTER = getArg('book') ? parseInt(getArg('book')) : null;
const START_FROM = getArg('start') ? parseInt(getArg('start')) : 0;
const FORCE = hasFlag('force');

// ─── Validate ───────────────────────────────────────
if (!API_KEY) {
  console.error('\n❌ Missing ELEVENLABS_API_KEY!');
  console.error('   ELEVENLABS_API_KEY=sk_... node scripts/generate-ebook-voices-elevenlabs.mjs\n');
  process.exit(1);
}

if (!fs.existsSync(PAGES_FILE)) {
  console.error(`\n❌ Pages file not found: ${PAGES_FILE}`);
  console.error('   Run: node scripts/extract-ebook-texts.mjs\n');
  process.exit(1);
}

// ─── Generate single audio via ElevenLabs ───────────
async function generateAudio(text, outputPath) {
  const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`, {
    method: 'POST',
    headers: {
      'xi-api-key': API_KEY,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      text,
      model_id: MODEL,
      voice_settings: {
        stability: 0.50,
        similarity_boost: 0.75,
        style: 0.35,
        use_speaker_boost: true,
      },
    }),
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    const msg = err.detail?.message || err.detail?.status || `HTTP ${response.status}`;
    throw new Error(msg);
  }

  const buffer = Buffer.from(await response.arrayBuffer());
  fs.writeFileSync(outputPath, buffer);
  return buffer.length;
}

// ─── Main ───────────────────────────────────────────
async function main() {
  console.log('\n🎙️  WiseBot Ebook Voice Generator — ElevenLabs Premium');
  console.log('═'.repeat(58));
  console.log(`   Voice:  ${VOICE_NAME} (${VOICE_ID.substring(0, 12)}...)`);
  console.log(`   Model:  ${MODEL}`);
  console.log(`   Book:   ${BOOK_FILTER || 'all (1-26)'}`);
  console.log(`   Force:  ${FORCE ? 'yes' : 'no (skip existing)'}`);
  if (START_FROM > 0) console.log(`   Start:  from index ${START_FROM}`);
  console.log('═'.repeat(58));

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const allPages = JSON.parse(fs.readFileSync(PAGES_FILE, 'utf8'));
  let pages = allPages;
  if (BOOK_FILTER) {
    pages = pages.filter(p => p.bookId === BOOK_FILTER);
  }

  // Build task list
  const tasks = [];
  for (const page of pages) {
    const filename = `book-${page.bookId}-page-${page.page}-el.mp3`;
    const outputPath = path.join(OUTPUT_DIR, filename);

    if (!FORCE && fs.existsSync(outputPath)) continue;

    tasks.push({
      bookId: page.bookId,
      page: page.page,
      text: page.text,
      charCount: page.charCount,
      outputPath,
      filename,
    });
  }

  const tasksToRun = tasks.slice(START_FROM);
  const skipped = pages.length - tasks.length;
  const totalChars = tasksToRun.reduce((s, t) => s + t.charCount, 0);

  console.log(`   Total:    ${pages.length} pages`);
  console.log(`   Generate: ${tasksToRun.length}`);
  if (skipped > 0) console.log(`   Skip:     ${skipped} (exist)`);
  console.log(`   Chars:    ${totalChars.toLocaleString()}`);
  console.log('─'.repeat(58));

  if (tasksToRun.length === 0) {
    console.log('\n✅ All audio files already exist!\n');
    return;
  }

  let completed = 0;
  let failed = 0;
  let totalBytes = 0;

  for (const task of tasksToRun) {
    const num = completed + failed + 1;
    const pct = ((num / tasksToRun.length) * 100).toFixed(0);
    process.stdout.write(`   [${num}/${tasksToRun.length}] (${pct}%) book-${task.bookId}-p${task.page} (${task.charCount}ch)... `);

    try {
      const bytes = await generateAudio(task.text, task.outputPath);
      totalBytes += bytes;
      completed++;
      console.log(`✅ ${(bytes / 1024).toFixed(0)} KB`);
    } catch (err) {
      failed++;
      console.log(`❌ ${err.message}`);

      // Rate limit handling
      if (err.message.includes('429') || err.message.includes('rate') || err.message.includes('quota') || err.message.includes('too_many')) {
        console.log('   ⏳ Rate limited — waiting 60s...');
        await new Promise(r => setTimeout(r, 60000));

        // Retry once
        process.stdout.write(`   [${num}/${tasksToRun.length}] book-${task.bookId}-p${task.page} [RETRY]... `);
        try {
          const bytes = await generateAudio(task.text, task.outputPath);
          totalBytes += bytes;
          failed--;
          completed++;
          console.log(`✅ ${(bytes / 1024).toFixed(0)} KB`);
        } catch (retryErr) {
          console.log(`❌ ${retryErr.message}`);
        }
      }
    }

    // Small delay between requests (ElevenLabs allows ~2-3 req/s on paid plans)
    if (num < tasksToRun.length) {
      await new Promise(r => setTimeout(r, 500));
    }
  }

  console.log('\n' + '═'.repeat(58));
  console.log(`🎉 Done!`);
  console.log(`   ✅ Generated: ${completed}`);
  if (failed > 0) console.log(`   ❌ Failed:    ${failed}`);
  console.log(`   💾 Total size: ${(totalBytes / 1024 / 1024).toFixed(1)} MB`);
  console.log(`   📁 Location: public/audio/ebooks/`);
  console.log(`\n   🚀 Premium Greek audio is live!\n`);
}

main().catch(err => {
  console.error('\n❌ Fatal error:', err.message);
  process.exit(1);
});
