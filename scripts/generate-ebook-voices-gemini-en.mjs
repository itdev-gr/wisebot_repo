#!/usr/bin/env node
/**
 * 🎙️ WiseBot Ebook Voice Generator — Gemini TTS (English, Kore voice)
 * ====================================================================
 * Generates English WAV audio for all ebook pages using Gemini TTS.
 * Output: public/audio/ebooks/book-{id}-page-{page}-en.wav
 * After running, convert to MP3 with: node scripts/wav-to-mp3.cjs public/audio/ebooks/
 *
 * Usage:
 *   GEMINI_API_KEY=... node scripts/generate-ebook-voices-gemini-en.mjs
 *   Options:
 *     --voice Kore       Voice (default: Kore)
 *     --book 1           Only specific book ID
 *     --start N          Resume from index N
 *     --force            Re-generate even if file exists
 */

import { GoogleGenAI } from '@google/genai';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.resolve(__dirname, '..');
const OUTPUT_DIR = path.join(PROJECT_ROOT, 'public', 'audio', 'ebooks');
const EBOOKS_FILE = path.join(__dirname, 'ebooks-en-for-tts.json');

const args = process.argv.slice(2);
function getArg(name) {
  const idx = args.indexOf(`--${name}`);
  return idx >= 0 && idx + 1 < args.length ? args[idx + 1] : null;
}
const hasFlag = (name) => args.includes(`--${name}`);

const API_KEY = process.env.GEMINI_API_KEY;
const VOICE = getArg('voice') || 'Kore';
const BOOK_FILTER = getArg('book') ? parseInt(getArg('book')) : null;
const START_FROM = getArg('start') ? parseInt(getArg('start')) : 0;
const FORCE = hasFlag('force');

if (!API_KEY) {
  console.error('\n❌ Missing GEMINI_API_KEY!\n');
  process.exit(1);
}

function pcmToWav(pcmData, sampleRate = 24000, channels = 1, bitsPerSample = 16) {
  const dataSize = pcmData.length;
  const buf = Buffer.alloc(44 + dataSize);
  buf.write('RIFF', 0);           buf.writeUInt32LE(36 + dataSize, 4);
  buf.write('WAVE', 8);           buf.write('fmt ', 12);
  buf.writeUInt32LE(16, 16);      buf.writeUInt16LE(1, 20);
  buf.writeUInt16LE(channels, 22); buf.writeUInt32LE(sampleRate, 24);
  buf.writeUInt32LE(sampleRate * channels * bitsPerSample / 8, 28);
  buf.writeUInt16LE(channels * bitsPerSample / 8, 32);
  buf.writeUInt16LE(bitsPerSample, 34);
  buf.write('data', 36);          buf.writeUInt32LE(dataSize, 40);
  pcmData.copy(buf, 44);
  return buf;
}

async function generateAudio(genai, text, outputPath) {
  const response = await genai.models.generateContent({
    model: 'gemini-2.5-flash-preview-tts',
    contents: [{ parts: [{ text }] }],
    config: {
      responseModalities: ['AUDIO'],
      speechConfig: {
        voiceConfig: { prebuiltVoiceConfig: { voiceName: VOICE } },
      },
    },
  });

  const parts = response.candidates?.[0]?.content?.parts;
  for (const part of (parts || [])) {
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
  throw new Error('No audio in Gemini response');
}

async function main() {
  console.log('\n🎙️  WiseBot Ebook Voice Generator — Gemini TTS (English)');
  console.log('─'.repeat(58));
  console.log(`   Model:  gemini-2.5-flash-preview-tts`);
  console.log(`   Voice:  ${VOICE}`);
  console.log(`   Book:   ${BOOK_FILTER || 'all (1-26)'}`);
  console.log(`   Force:  ${FORCE ? 'yes' : 'no (skip existing)'}`);
  console.log('─'.repeat(58));

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const pages = JSON.parse(fs.readFileSync(EBOOKS_FILE, 'utf8'));
  let filtered = BOOK_FILTER ? pages.filter(p => p.bookId === BOOK_FILTER) : pages;

  const tasks = [];
  for (const page of filtered) {
    const wavPath = path.join(OUTPUT_DIR, `book-${page.bookId}-page-${page.page}-en.wav`);
    const mp3Path = path.join(OUTPUT_DIR, `book-${page.bookId}-page-${page.page}-en.mp3`);
    if (!FORCE && (fs.existsSync(wavPath) || fs.existsSync(mp3Path))) continue;
    tasks.push({ bookId: page.bookId, page: page.page, text: page.text, outputPath: wavPath });
  }

  const toRun = tasks.slice(START_FROM);
  const skipped = filtered.length - tasks.length;
  console.log(`   Total pages: ${filtered.length}`);
  console.log(`   To generate: ${toRun.length}`);
  if (skipped > 0) console.log(`   Skipping: ${skipped} (already exist)`);
  console.log('─'.repeat(58));

  if (toRun.length === 0) {
    console.log('\n✅ All files already exist!\n');
    return;
  }

  const genai = new GoogleGenAI({ apiKey: API_KEY });
  let completed = 0, failed = 0, totalBytes = 0;

  for (const task of toRun) {
    const num = completed + failed + 1;
    const label = `book-${task.bookId}-p${task.page}-en.wav`;
    process.stdout.write(`   [${num}/${toRun.length}] ${label}... `);
    try {
      const bytes = await generateAudio(genai, task.text, task.outputPath);
      totalBytes += bytes;
      completed++;
      console.log(`✅ ${(bytes / 1024).toFixed(0)} KB`);
    } catch (err) {
      failed++;
      console.log(`❌ ${err.message}`);
      if (err.message.includes('429') || err.message.includes('quota') || err.message.includes('rate')) {
        console.log('   ⏳ Rate limited — waiting 60s...');
        await new Promise(r => setTimeout(r, 60000));
        process.stdout.write(`   [${num}/${toRun.length}] ${label} [RETRY]... `);
        try {
          const bytes = await generateAudio(genai, task.text, task.outputPath);
          totalBytes += bytes;
          failed--; completed++;
          console.log(`✅ ${(bytes / 1024).toFixed(0)} KB`);
        } catch (e2) { console.log(`❌ ${e2.message}`); }
      }
    }
    if (num < toRun.length) await new Promise(r => setTimeout(r, 500));
  }

  console.log('─'.repeat(58));
  console.log(`\n🎉 Done!`);
  console.log(`   ✅ Generated: ${completed} WAV files`);
  if (failed > 0) console.log(`   ❌ Failed: ${failed}`);
  console.log(`   💾 Total: ${(totalBytes / 1024 / 1024).toFixed(1)} MB`);
  console.log(`\n   ➡️  Next: node scripts/wav-to-mp3.cjs public/audio/ebooks/\n`);
}

main().catch(err => { console.error('\n❌ Fatal:', err.message); process.exit(1); });
