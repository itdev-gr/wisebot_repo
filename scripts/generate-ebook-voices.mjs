#!/usr/bin/env node
/**
 * 🎙️ WiseBot Ebook Voice Generator — 3-Key Parallel
 *
 * Generates AI audio files for all Ebook pages using Gemini TTS.
 * Alternates voices per book: odd books = Kore, even books = Leda.
 * Uses 3 API keys in parallel for 3x throughput.
 *
 * Usage:
 *   GEMINI_API_KEY=k1 GEMINI_API_KEY_2=k2 GEMINI_API_KEY_3=k3 \
 *     node scripts/generate-ebook-voices.mjs --force
 *
 *   Options:
 *     --voice Kore       Override to single voice (disables alternating)
 *     --book 1           Generate only specific book ID
 *     --force            Re-generate even if file exists
 *     --start 50         Start from item index (for resuming)
 *
 * Output: public/audio/ebooks/book-{id}-page-{page}-el.wav
 */

import { GoogleGenAI } from '@google/genai';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.resolve(__dirname, '..');
const OUTPUT_DIR = path.join(PROJECT_ROOT, 'public', 'audio', 'ebooks');
const PAGES_FILE = path.join(__dirname, 'ebooks-for-tts.json');

// ─── Voice rotation: Kore ↔ Leda per book ──────────────────────
const VOICE_ROTATION = ['Kore', 'Leda'];
function getVoiceForBook(bookId) {
  return VOICE_ROTATION[(bookId - 1) % VOICE_ROTATION.length];
}

// ─── Parse CLI args ──────────��──────────────────────────────────
const args = process.argv.slice(2);
function getArg(name) {
  const idx = args.indexOf(`--${name}`);
  return idx >= 0 && idx + 1 < args.length ? args[idx + 1] : null;
}
const hasFlag = (name) => args.includes(`--${name}`);

// ─── Collect all API keys ────────���──────────────────────────────
const API_KEYS = [
  process.env.GEMINI_API_KEY,
  process.env.GEMINI_API_KEY_2,
  process.env.GEMINI_API_KEY_3,
  process.env.GEMINI_API_KEY_4,
].filter(Boolean);

const VOICE_OVERRIDE = getArg('voice');
const BOOK_FILTER = getArg('book') ? parseInt(getArg('book')) : null;
const FORCE = hasFlag('force');
const START_FROM = getArg('start') ? parseInt(getArg('start')) : 0;

// ─── Validate ─────────��─────────────────────────────────────────
if (API_KEYS.length === 0) {
  console.error('\n❌ Missing API key(s)!');
  console.error('   GEMINI_API_KEY=k1 GEMINI_API_KEY_2=k2 GEMINI_API_KEY_3=k3 node scripts/generate-ebook-voices.mjs\n');
  process.exit(1);
}

if (!fs.existsSync(PAGES_FILE)) {
  console.error(`\n❌ Pages file not found: ${PAGES_FILE}`);
  console.error('   Run: node scripts/extract-ebook-texts.mjs\n');
  process.exit(1);
}

// ─���─ PCM → WAV conversion ──────────────��───────────────────────
function pcmToWav(pcmBuffer, sampleRate = 24000, channels = 1, bitsPerSample = 16) {
  const dataSize = pcmBuffer.length;
  const buffer = Buffer.alloc(44 + dataSize);
  buffer.write('RIFF', 0);
  buffer.writeUInt32LE(36 + dataSize, 4);
  buffer.write('WAVE', 8);
  buffer.write('fmt ', 12);
  buffer.writeUInt32LE(16, 16);
  buffer.writeUInt16LE(1, 20);
  buffer.writeUInt16LE(channels, 22);
  buffer.writeUInt32LE(sampleRate, 24);
  buffer.writeUInt32LE(sampleRate * channels * bitsPerSample / 8, 28);
  buffer.writeUInt16LE(channels * bitsPerSample / 8, 32);
  buffer.writeUInt16LE(bitsPerSample, 34);
  buffer.write('data', 36);
  buffer.writeUInt32LE(dataSize, 40);
  pcmBuffer.copy(buffer, 44);
  return buffer;
}

// ─── Generate a single audio file ───────────────────────────────
async function generateAudio(ai, text, outputPath, voiceName) {
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash-preview-tts',
    contents: text,
    config: {
      responseModalities: ['AUDIO'],
      speechConfig: {
        voiceConfig: {
          prebuiltVoiceConfig: { voiceName },
        },
      },
    },
  });

  if (response.candidates?.[0]?.content?.parts) {
    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData?.data) {
        const audioBytes = Buffer.from(part.inlineData.data, 'base64');
        const mimeType = part.inlineData.mimeType || '';

        let fileBuffer;
        if (mimeType.includes('wav') || mimeType.includes('mp3')) {
          fileBuffer = audioBytes;
        } else {
          const rateMatch = mimeType.match(/rate=(\d+)/);
          const sampleRate = rateMatch ? parseInt(rateMatch[1]) : 24000;
          fileBuffer = pcmToWav(audioBytes, sampleRate);
        }

        fs.writeFileSync(outputPath, fileBuffer);
        return fileBuffer.length;
      }
    }
  }

  throw new Error('No audio data in response');
}

// ─── Process a single task with retry ───────���───────────────────
async function processTask(ai, task, keyIndex) {
  const label = `book-${task.bookId}-p${task.page} [${task.voice}] (key${keyIndex + 1})`;

  try {
    const bytes = await generateAudio(ai, task.text, task.outputPath, task.voice);
    console.log(`   ✅ ${label} → ${(bytes / 1024).toFixed(0)} KB`);
    return { ok: true, bytes };
  } catch (err) {
    // Retry once on rate limit
    if (err.message.includes('429') || err.message.includes('quota') || err.message.includes('rate')) {
      console.log(`   ⏳ ${label} → rate limited, waiting 30s...`);
      await new Promise(r => setTimeout(r, 30000));
      try {
        const bytes = await generateAudio(ai, task.text, task.outputPath, task.voice);
        console.log(`   ✅ ${label} [RETRY] → ${(bytes / 1024).toFixed(0)} KB`);
        return { ok: true, bytes };
      } catch (retryErr) {
        console.log(`   ❌ ${label} [RETRY] → ${retryErr.message}`);
        return { ok: false, bytes: 0 };
      }
    }
    console.log(`   ❌ ${label} → ${err.message}`);
    return { ok: false, bytes: 0 };
  }
}

// ─── Main ��──────────────────────────────────────────────────────
async function main() {
  const voiceMode = VOICE_OVERRIDE
    ? `Single: ${VOICE_OVERRIDE}`
    : `Alternating: ${VOICE_ROTATION.join(' ↔ ')} per book`;

  console.log('\n🎙️  WiseBot Ebook Voice Generator — 3-Key Parallel');
  console.log('═'.repeat(55));
  console.log(`   Voice:  ${voiceMode}`);
  console.log(`   Keys:   ${API_KEYS.length} API keys → ${API_KEYS.length}x parallel`);
  if (!VOICE_OVERRIDE) {
    process.stdout.write(`   Map:    `);
    for (let i = 1; i <= 26; i++) {
      process.stdout.write(`${i}:${getVoiceForBook(i)[0]} `);
    }
    console.log();
  }
  console.log(`   Book:   ${BOOK_FILTER || 'all (1-26)'}`);
  console.log(`   Force:  ${FORCE ? 'yes' : 'no (skip existing)'}`);
  if (START_FROM > 0) console.log(`   Start:  from index ${START_FROM}`);
  console.log('═'.repeat(55));

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const allPages = JSON.parse(fs.readFileSync(PAGES_FILE, 'utf8'));
  let pages = allPages;
  if (BOOK_FILTER) {
    pages = pages.filter(p => p.bookId === BOOK_FILTER);
  }

  const tasks = [];
  for (const page of pages) {
    const filename = `book-${page.bookId}-page-${page.page}-el.wav`;
    const outputPath = path.join(OUTPUT_DIR, filename);

    if (!FORCE && fs.existsSync(outputPath)) continue;

    tasks.push({
      bookId: page.bookId,
      page: page.page,
      text: page.text,
      outputPath,
      filename,
      voice: VOICE_OVERRIDE || getVoiceForBook(page.bookId),
    });
  }

  const tasksToRun = tasks.slice(START_FROM);
  const skipped = pages.length - tasks.length;

  console.log(`   Total:  ${pages.length} pages`);
  console.log(`   Generate: ${tasksToRun.length}`);
  if (skipped > 0) console.log(`   Skip:   ${skipped} (exist)`);
  console.log('─'.repeat(55));

  if (tasksToRun.length === 0) {
    console.log('\n✅ All audio files already exist!\n');
    return;
  }

  // Create AI clients — one per key
  const aiClients = API_KEYS.map(key => new GoogleGenAI({ apiKey: key }));
  const PARALLEL = aiClients.length;

  let completed = 0;
  let failed = 0;
  let totalBytes = 0;
  let idx = 0;

  // Process in batches of PARALLEL (3)
  while (idx < tasksToRun.length) {
    const batch = tasksToRun.slice(idx, idx + PARALLEL);
    const batchNum = Math.floor(idx / PARALLEL) + 1;
    const totalBatches = Math.ceil(tasksToRun.length / PARALLEL);
    console.log(`\n   ── Batch ${batchNum}/${totalBatches} (${batch.length} parallel) ──`);

    const promises = batch.map((task, i) => {
      const keyIdx = i % aiClients.length;
      return processTask(aiClients[keyIdx], task, keyIdx);
    });

    const results = await Promise.all(promises);

    for (const r of results) {
      if (r.ok) {
        completed++;
        totalBytes += r.bytes;
      } else {
        failed++;
      }
    }

    idx += batch.length;

    // Progress
    const pct = ((completed + failed) / tasksToRun.length * 100).toFixed(0);
    console.log(`   📊 Progress: ${completed + failed}/${tasksToRun.length} (${pct}%) — ✅ ${completed} ❌ ${failed}`);

    // Small pause between batches to be safe
    if (idx < tasksToRun.length) {
      await new Promise(r => setTimeout(r, 1000));
    }
  }

  console.log('\n' + '═'.repeat(55));
  console.log(`🎉 Done!`);
  console.log(`   ✅ Generated: ${completed}`);
  if (failed > 0) console.log(`   ❌ Failed:    ${failed}`);
  console.log(`   💾 Total size: ${(totalBytes / 1024 / 1024).toFixed(1)} MB`);
  console.log(`   📁 Location: public/audio/ebooks/`);
  console.log(`\n   Audio files are now part of the project.`);
  console.log(`   Press play → instant playback, no API needed! 🚀\n`);
}

main().catch(err => {
  console.error('\n❌ Fatal error:', err.message);
  process.exit(1);
});
