#!/usr/bin/env node
/**
 * 🎙️ WiseBot Ebook Voice Generator
 *
 * Generates AI audio files for all Ebook pages using Gemini TTS.
 * Run ONCE — after that, all audio plays instantly without API.
 *
 * Usage:
 *   GEMINI_API_KEY=your-key node scripts/generate-ebook-voices.mjs
 *
 *   Options:
 *     --voice Kore       Voice name (default: Kore)
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

// ─── Parse CLI args ─────────────────────────────────────────────
const args = process.argv.slice(2);
function getArg(name) {
  const idx = args.indexOf(`--${name}`);
  return idx >= 0 && idx + 1 < args.length ? args[idx + 1] : null;
}
const hasFlag = (name) => args.includes(`--${name}`);

const API_KEY = process.env.GEMINI_API_KEY || process.env.API_KEY;
const VOICE = getArg('voice') || 'Kore';
const BOOK_FILTER = getArg('book') ? parseInt(getArg('book')) : null;
const FORCE = hasFlag('force');
const START_FROM = getArg('start') ? parseInt(getArg('start')) : 0;

// ─── Validate ───────────────────────────────────────────────────
if (!API_KEY) {
  console.error('\n❌ Missing API key!');
  console.error('   Set it as environment variable:');
  console.error('   GEMINI_API_KEY=your-key node scripts/generate-ebook-voices.mjs\n');
  process.exit(1);
}

if (!fs.existsSync(PAGES_FILE)) {
  console.error(`\n❌ Pages file not found: ${PAGES_FILE}`);
  console.error('   Run the extraction script first:');
  console.error('   node scripts/extract-ebook-texts.mjs\n');
  process.exit(1);
}

// ─── PCM → WAV conversion ──────────────────────────────────────
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

// ─── Main ───────────────────────────────────────────────────────
async function main() {
  console.log('\n🎙️  WiseBot Ebook Voice Generator');
  console.log('─'.repeat(50));
  console.log(`   Voice: ${VOICE}`);
  console.log(`   Book filter: ${BOOK_FILTER || 'all (1-26)'}`);
  console.log(`   Force: ${FORCE ? 'yes' : 'no (skip existing)'}`);
  if (START_FROM > 0) console.log(`   Starting from: item #${START_FROM}`);
  console.log('─'.repeat(50));

  // Ensure output directory exists
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  // Load pages
  const allPages = JSON.parse(fs.readFileSync(PAGES_FILE, 'utf8'));
  console.log(`   Total pages: ${allPages.length}`);

  // Filter
  let pages = allPages;
  if (BOOK_FILTER) {
    pages = pages.filter(p => p.bookId === BOOK_FILTER);
    console.log(`   Filtered to book ${BOOK_FILTER}: ${pages.length} pages`);
  }

  // Build task list
  const tasks = [];

  for (const page of pages) {
    const filename = `book-${page.bookId}-page-${page.page}-el.wav`;
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
  const skipped = (pages.length) - tasks.length;

  console.log(`   To generate: ${tasksToRun.length}`);
  if (skipped > 0) console.log(`   Skipping: ${skipped} (already exist)`);
  if (START_FROM > 0) console.log(`   Skipping first: ${START_FROM} (--start)`);
  console.log('─'.repeat(50));

  if (tasksToRun.length === 0) {
    console.log('\n✅ All audio files already exist! Nothing to do.\n');
    return;
  }

  const ai = new GoogleGenAI({ apiKey: API_KEY });
  let completed = 0;
  let failed = 0;
  let totalBytes = 0;

  for (const task of tasksToRun) {
    const progress = `[${completed + failed + 1}/${tasksToRun.length}]`;
    process.stdout.write(`   ${progress} book-${task.bookId}-p${task.page}... `);

    try {
      const bytes = await generateAudio(ai, task.text, task.outputPath, VOICE);
      totalBytes += bytes;
      completed++;
      console.log(`✅ ${(bytes / 1024).toFixed(0)} KB`);
    } catch (err) {
      failed++;
      console.log(`❌ ${err.message}`);

      // If rate limited, wait longer
      if (err.message.includes('429') || err.message.includes('quota') || err.message.includes('rate')) {
        console.log('   ⏳ Rate limited. Waiting 30s...');
        await new Promise(r => setTimeout(r, 30000));
      }
    }

    // Rate limit: pause every 5 generations
    if ((completed + failed) % 5 === 0 && completed + failed < tasksToRun.length) {
      process.stdout.write('   ⏳ Rate limit pause...\r');
      await new Promise(r => setTimeout(r, 2000));
    }
  }

  console.log('─'.repeat(50));
  console.log(`\n🎉 Done!`);
  console.log(`   ✅ Generated: ${completed}`);
  if (failed > 0) console.log(`   ❌ Failed: ${failed}`);
  console.log(`   💾 Total size: ${(totalBytes / 1024 / 1024).toFixed(1)} MB`);
  console.log(`   📁 Location: public/audio/ebooks/`);
  console.log(`\n   Audio files are now part of the project.`);
  console.log(`   Press play → instant playback, no API needed! 🚀\n`);
}

main().catch(err => {
  console.error('\n❌ Fatal error:', err.message);
  process.exit(1);
});
