#!/usr/bin/env node
/**
 * 🎙️ WiseBot Voice Generator
 *
 * Generates AI audio files for all Academy stories using Gemini TTS.
 * Run ONCE — after that, all audio plays instantly without API.
 *
 * Usage:
 *   GEMINI_API_KEY=your-key node scripts/generate-voices.mjs
 *
 *   Options:
 *     --lang el          Generate only Greek (default: both)
 *     --lang en          Generate only English
 *     --voice Kore       Voice name (default: Kore)
 *     --ids 1,2,3        Generate only specific story IDs
 *     --force            Re-generate even if file exists
 *
 * Output: public/audio/academy/story-{id}-{lang}.wav
 */

import { GoogleGenAI } from '@google/genai';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.resolve(__dirname, '..');
const OUTPUT_DIR = path.join(PROJECT_ROOT, 'public', 'audio', 'academy');
const STORIES_FILE = path.join(__dirname, 'stories-for-tts.json');

// ─── Parse CLI args ─────────────────────────────────────────────
const args = process.argv.slice(2);
function getArg(name) {
  const idx = args.indexOf(`--${name}`);
  return idx >= 0 && idx + 1 < args.length ? args[idx + 1] : null;
}
const hasFlag = (name) => args.includes(`--${name}`);

const API_KEY = process.env.GEMINI_API_KEY || process.env.API_KEY;
const LANG_FILTER = getArg('lang'); // 'el', 'en', or null (both)
const VOICE = getArg('voice') || 'Kore';
const ID_FILTER = getArg('ids')?.split(',').map(Number) || null;
const FORCE = hasFlag('force');

// ─── Validate ───────────────────────────────────────────────────
if (!API_KEY) {
  console.error('\n❌ Missing API key!');
  console.error('   Set it as environment variable:');
  console.error('   GEMINI_API_KEY=your-key node scripts/generate-voices.mjs\n');
  process.exit(1);
}

if (!fs.existsSync(STORIES_FILE)) {
  console.error(`\n❌ Stories file not found: ${STORIES_FILE}`);
  console.error('   Run the extraction script first.\n');
  process.exit(1);
}

// ─── PCM → WAV conversion ──────────────────────────────────────
function pcmToWav(pcmBuffer, sampleRate = 24000, channels = 1, bitsPerSample = 16) {
  const dataSize = pcmBuffer.length;
  const buffer = Buffer.alloc(44 + dataSize);

  // RIFF header
  buffer.write('RIFF', 0);
  buffer.writeUInt32LE(36 + dataSize, 4);
  buffer.write('WAVE', 8);

  // fmt sub-chunk
  buffer.write('fmt ', 12);
  buffer.writeUInt32LE(16, 16);
  buffer.writeUInt16LE(1, 20);           // PCM
  buffer.writeUInt16LE(channels, 22);
  buffer.writeUInt32LE(sampleRate, 24);
  buffer.writeUInt32LE(sampleRate * channels * bitsPerSample / 8, 28);
  buffer.writeUInt16LE(channels * bitsPerSample / 8, 32);
  buffer.writeUInt16LE(bitsPerSample, 34);

  // data sub-chunk
  buffer.write('data', 36);
  buffer.writeUInt32LE(dataSize, 40);

  // Copy PCM data
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
          // Raw PCM → wrap in WAV
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
  console.log('\n🎙️  WiseBot Voice Generator');
  console.log('─'.repeat(50));
  console.log(`   Voice: ${VOICE}`);
  console.log(`   Lang:  ${LANG_FILTER || 'el + en (both)'}`);
  console.log(`   Force: ${FORCE ? 'yes' : 'no (skip existing)'}`);
  console.log('─'.repeat(50));

  // Ensure output directory exists
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  // Load stories
  const stories = JSON.parse(fs.readFileSync(STORIES_FILE, 'utf8'));
  console.log(`   Stories: ${stories.length} total`);

  // Filter
  let filtered = stories;
  if (ID_FILTER) {
    filtered = filtered.filter(s => ID_FILTER.includes(s.id));
    console.log(`   Filtered to IDs: ${ID_FILTER.join(', ')}`);
  }

  // Build task list
  const tasks = [];
  const langs = LANG_FILTER ? [LANG_FILTER] : ['el', 'en'];

  for (const story of filtered) {
    for (const lang of langs) {
      const filename = `story-${story.id}-${lang}.wav`;
      const outputPath = path.join(OUTPUT_DIR, filename);

      if (!FORCE && fs.existsSync(outputPath)) {
        continue; // Skip existing
      }

      tasks.push({
        id: story.id,
        lang,
        text: story[lang],
        outputPath,
        filename,
      });
    }
  }

  const skipped = (filtered.length * langs.length) - tasks.length;
  console.log(`   To generate: ${tasks.length}`);
  if (skipped > 0) console.log(`   Skipping: ${skipped} (already exist)`);
  console.log('─'.repeat(50));

  if (tasks.length === 0) {
    console.log('\n✅ All audio files already exist! Nothing to do.\n');
    return;
  }

  const ai = new GoogleGenAI({ apiKey: API_KEY });
  let completed = 0;
  let failed = 0;
  let totalBytes = 0;

  for (const task of tasks) {
    const progress = `[${completed + failed + 1}/${tasks.length}]`;
    process.stdout.write(`   ${progress} story-${task.id}-${task.lang}... `);

    try {
      const bytes = await generateAudio(ai, task.text, task.outputPath, VOICE);
      totalBytes += bytes;
      completed++;
      console.log(`✅ ${(bytes / 1024).toFixed(0)} KB`);
    } catch (err) {
      failed++;
      console.log(`❌ ${err.message}`);
    }

    // Rate limit: pause every 5 generations
    if ((completed + failed) % 5 === 0 && completed + failed < tasks.length) {
      process.stdout.write('   ⏳ Rate limit pause...\r');
      await new Promise(r => setTimeout(r, 2000));
    }
  }

  console.log('─'.repeat(50));
  console.log(`\n🎉 Done!`);
  console.log(`   ✅ Generated: ${completed}`);
  if (failed > 0) console.log(`   ❌ Failed: ${failed}`);
  console.log(`   💾 Total size: ${(totalBytes / 1024 / 1024).toFixed(1)} MB`);
  console.log(`   📁 Location: public/audio/academy/`);
  console.log(`\n   Audio files are now part of the project.`);
  console.log(`   Press play → instant playback, no API needed! 🚀\n`);
}

main().catch(err => {
  console.error('\n❌ Fatal error:', err.message);
  process.exit(1);
});
