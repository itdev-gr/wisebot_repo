#!/usr/bin/env node
/**
 * 🎙️ WiseBot Ebook Voice Generator — OpenAI TTS (TOP QUALITY)
 * ===========================================================
 * Generates English MP3 audio for all Ebook pages using
 * OpenAI TTS (tts-1-hd model — highest quality available).
 *
 * ✅ Direct MP3 output — no WAV conversion needed
 * ✅ Natural, expressive voice (nova/fable/alloy)
 * ✅ Skips existing files automatically
 * ✅ Resume support with --start N
 *
 * Prerequisites:
 *   Run extract first: node scripts/extract-ebook-texts-en.mjs
 *
 * Usage:
 *   OPENAI_API_KEY=sk-... node scripts/generate-ebook-voices-openai.mjs
 *
 *   Options:
 *     --voice nova       Voice: alloy|echo|fable|onyx|nova|shimmer (default: nova)
 *     --model tts-1-hd   Model: tts-1|tts-1-hd (default: tts-1-hd)
 *     --book 1           Generate only specific book ID
 *     --start 50         Start from index N (for resuming)
 *     --force            Re-generate even if file exists
 *
 * Output: public/audio/ebooks/book-{id}-page-{page}-en.mp3
 *
 * Cost estimate:
 *   tts-1-hd: $0.030 per 1,000 chars
 *   130 pages × ~700 chars avg = ~$2.73 total
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.resolve(__dirname, '..');
const OUTPUT_DIR = path.join(PROJECT_ROOT, 'public', 'audio', 'ebooks');
const PAGES_FILE = path.join(__dirname, 'ebooks-en-for-tts.json');

// ─── Parse CLI args ─────────────────────────────────────────────
const args = process.argv.slice(2);
function getArg(name) {
  const idx = args.indexOf(`--${name}`);
  return idx >= 0 && idx + 1 < args.length ? args[idx + 1] : null;
}
const hasFlag = (name) => args.includes(`--${name}`);

const API_KEY = process.env.OPENAI_API_KEY;
const VOICE = getArg('voice') || 'nova';
const MODEL = getArg('model') || 'tts-1-hd';
const BOOK_FILTER = getArg('book') ? parseInt(getArg('book')) : null;
const START_FROM = getArg('start') ? parseInt(getArg('start')) : 0;
const FORCE = hasFlag('force');

// ─── Validate ───────────────────────────────────────────────────
if (!API_KEY) {
  console.error('\n❌ Missing OpenAI API key!');
  console.error('   Set it as environment variable:');
  console.error('   OPENAI_API_KEY=sk-... node scripts/generate-ebook-voices-openai.mjs\n');
  process.exit(1);
}

if (!fs.existsSync(PAGES_FILE)) {
  console.error(`\n❌ English pages file not found: ${PAGES_FILE}`);
  console.error('   Run the extraction script first:');
  console.error('   node scripts/extract-ebook-texts-en.mjs\n');
  process.exit(1);
}

// ─── Generate a single audio file via OpenAI TTS ──────────────
async function generateAudio(text, outputPath) {
  const response = await fetch('https://api.openai.com/v1/audio/speech', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: MODEL,
      input: text,
      voice: VOICE,
      response_format: 'mp3',
    }),
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({ error: { message: `HTTP ${response.status}` } }));
    throw new Error(err.error?.message || `HTTP ${response.status}`);
  }

  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  fs.writeFileSync(outputPath, buffer);
  return buffer.length;
}

// ─── Main ───────────────────────────────────────────────────────
async function main() {
  console.log('\n🎙️  WiseBot Ebook Voice Generator — OpenAI TTS');
  console.log('─'.repeat(55));
  console.log(`   Model:  ${MODEL} (highest quality)`);
  console.log(`   Voice:  ${VOICE}`);
  console.log(`   Book:   ${BOOK_FILTER ? `book ${BOOK_FILTER} only` : 'all (1-26)'}`);
  console.log(`   Force:  ${FORCE ? 'yes (regenerate all)' : 'no (skip existing)'}`);
  if (START_FROM > 0) console.log(`   Start:  from index ${START_FROM}`);
  console.log('─'.repeat(55));

  // Ensure output directory exists
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  // Load pages
  const allPages = JSON.parse(fs.readFileSync(PAGES_FILE, 'utf8'));
  console.log(`   Total pages: ${allPages.length}`);

  // Filter by book if requested
  let pages = allPages;
  if (BOOK_FILTER) {
    pages = pages.filter(p => p.bookId === BOOK_FILTER);
    console.log(`   Filtered to book ${BOOK_FILTER}: ${pages.length} pages`);
  }

  // Build task list (skip existing unless --force)
  const tasks = [];
  for (const page of pages) {
    const filename = `book-${page.bookId}-page-${page.page}-en.mp3`;
    const outputPath = path.join(OUTPUT_DIR, filename);

    if (!FORCE && fs.existsSync(outputPath)) {
      continue; // Skip existing
    }

    tasks.push({
      bookId: page.bookId,
      page: page.page,
      text: page.text,
      outputPath,
      filename,
    });
  }

  // Apply start offset
  const tasksToRun = tasks.slice(START_FROM);
  const skipped = pages.length - tasks.length;

  console.log(`   To generate: ${tasksToRun.length}`);
  if (skipped > 0) console.log(`   Skipping: ${skipped} (already exist)`);
  if (START_FROM > 0) console.log(`   Skipping first: ${START_FROM} (--start)`);

  // Cost estimate
  const totalChars = tasksToRun.reduce((sum, t) => sum + t.text.length, 0);
  const costEstimate = (totalChars / 1000 * (MODEL === 'tts-1-hd' ? 0.030 : 0.015)).toFixed(2);
  console.log(`   Characters: ${totalChars.toLocaleString()} → est. $${costEstimate}`);
  console.log('─'.repeat(55));

  if (tasksToRun.length === 0) {
    console.log('\n✅ All audio files already exist! Nothing to do.\n');
    return;
  }

  let completed = 0;
  let failed = 0;
  let totalBytes = 0;

  for (const task of tasksToRun) {
    const num = completed + failed + 1;
    const progress = `[${num}/${tasksToRun.length}]`;
    process.stdout.write(`   ${progress} book-${task.bookId}-p${task.page}-en... `);

    try {
      const bytes = await generateAudio(task.text, task.outputPath);
      totalBytes += bytes;
      completed++;
      console.log(`✅ ${(bytes / 1024).toFixed(0)} KB`);
    } catch (err) {
      failed++;
      console.log(`❌ ${err.message}`);

      // Rate limit: wait and retry once
      if (err.message.includes('429') || err.message.includes('rate') || err.message.includes('quota')) {
        console.log('   ⏳ Rate limited. Waiting 60s...');
        await new Promise(r => setTimeout(r, 60000));

        // Retry
        process.stdout.write(`   ${progress} book-${task.bookId}-p${task.page}-en [RETRY]... `);
        try {
          const bytes = await generateAudio(task.text, task.outputPath);
          totalBytes += bytes;
          failed--;
          completed++;
          console.log(`✅ ${(bytes / 1024).toFixed(0)} KB`);
        } catch (retryErr) {
          console.log(`❌ ${retryErr.message} (retry failed)`);
        }
      }
    }

    // Small delay between requests
    if (num < tasksToRun.length) {
      await new Promise(r => setTimeout(r, 300));
    }
  }

  console.log('─'.repeat(55));
  console.log(`\n🎉 Done!`);
  console.log(`   ✅ Generated: ${completed}`);
  if (failed > 0) console.log(`   ❌ Failed:    ${failed} (re-run without --force to retry)`);
  console.log(`   💾 Total size: ${(totalBytes / 1024 / 1024).toFixed(1)} MB`);
  console.log(`   📁 Location: public/audio/ebooks/`);
  console.log(`\n   🚀 English voice is live! book-N-page-X-en.mp3 ready.\n`);
}

main().catch(err => {
  console.error('\n❌ Fatal error:', err.message);
  process.exit(1);
});
