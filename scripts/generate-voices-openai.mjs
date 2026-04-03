#!/usr/bin/env node
/**
 * 🎙️ WiseBot Academy Voice Generator — OpenAI TTS (TOP QUALITY)
 * ============================================================
 * Generates English MP3 audio for all Academy stories using
 * OpenAI TTS (tts-1-hd model — highest quality available).
 *
 * ✅ Direct MP3 output — no WAV conversion needed
 * ✅ Natural, expressive voice (nova/fable/alloy)
 * ✅ Skips existing files automatically
 * ✅ Resume support with --start N
 *
 * Usage:
 *   OPENAI_API_KEY=sk-... node scripts/generate-voices-openai.mjs
 *
 *   Options:
 *     --lang en          Language to generate (default: en)
 *     --voice nova       Voice: alloy|echo|fable|onyx|nova|shimmer (default: nova)
 *     --model tts-1-hd   Model: tts-1|tts-1-hd (default: tts-1-hd)
 *     --ids 1,2,3        Generate only specific story IDs
 *     --start 50         Start from index N (for resuming)
 *     --force            Re-generate even if file exists
 *
 * Output: public/audio/academy/story-{id}-{lang}.mp3
 *
 * Voices:
 *   nova    — Warm, natural female (best for children's content) ⭐
 *   fable   — Expressive, storytelling voice ⭐
 *   alloy   — Neutral, balanced
 *   shimmer — Energetic female
 *   echo    — Calm male
 *   onyx    — Deep, authoritative male
 *
 * Cost estimate:
 *   tts-1-hd: $0.030 per 1,000 chars
 *   90 stories × ~800 chars avg = ~$2.16 total
 */

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

const API_KEY = process.env.OPENAI_API_KEY;
const LANG = getArg('lang') || 'en';
const VOICE = getArg('voice') || 'nova';
const MODEL = getArg('model') || 'tts-1-hd';
const ID_FILTER = getArg('ids')?.split(',').map(Number) || null;
const START_FROM = getArg('start') ? parseInt(getArg('start')) : 0;
const FORCE = hasFlag('force');

// ─── Validate ───────────────────────────────────────────────────
if (!API_KEY) {
  console.error('\n❌ Missing OpenAI API key!');
  console.error('   Set it as environment variable:');
  console.error('   OPENAI_API_KEY=sk-... node scripts/generate-voices-openai.mjs\n');
  process.exit(1);
}

if (!fs.existsSync(STORIES_FILE)) {
  console.error(`\n❌ Stories file not found: ${STORIES_FILE}`);
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

  // Stream to file
  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  fs.writeFileSync(outputPath, buffer);
  return buffer.length;
}

// ─── Main ───────────────────────────────────────────────────────
async function main() {
  console.log('\n🎙️  WiseBot Academy Voice Generator — OpenAI TTS');
  console.log('─'.repeat(55));
  console.log(`   Model:  ${MODEL} (highest quality)`);
  console.log(`   Voice:  ${VOICE}`);
  console.log(`   Lang:   ${LANG}`);
  console.log(`   Force:  ${FORCE ? 'yes (regenerate all)' : 'no (skip existing)'}`);
  if (START_FROM > 0) console.log(`   Start:  from index ${START_FROM}`);
  console.log('─'.repeat(55));

  // Ensure output directory exists
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  // Load stories
  const stories = JSON.parse(fs.readFileSync(STORIES_FILE, 'utf8'));
  console.log(`   Stories: ${stories.length} total`);

  // Filter by IDs if requested
  let filtered = stories;
  if (ID_FILTER) {
    filtered = filtered.filter(s => ID_FILTER.includes(s.id));
    console.log(`   Filtered to IDs: ${ID_FILTER.join(', ')}`);
  }

  // Build task list (skip existing unless --force)
  const tasks = [];
  for (const story of filtered) {
    const text = story[LANG];
    if (!text) {
      console.warn(`   ⚠️  Story ${story.id} has no "${LANG}" text — skipping`);
      continue;
    }

    const filename = `story-${story.id}-${LANG}.mp3`;
    const outputPath = path.join(OUTPUT_DIR, filename);

    if (!FORCE && fs.existsSync(outputPath)) {
      continue; // Skip existing
    }

    tasks.push({ id: story.id, text, outputPath, filename });
  }

  // Apply start offset
  const tasksToRun = tasks.slice(START_FROM);
  const skipped = filtered.length - tasks.length;

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
    process.stdout.write(`   ${progress} story-${task.id}-${LANG}... `);

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
        process.stdout.write(`   ${progress} story-${task.id}-${LANG} [RETRY]... `);
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

    // Small delay between requests to stay within rate limits
    if (num < tasksToRun.length) {
      await new Promise(r => setTimeout(r, 300));
    }
  }

  console.log('─'.repeat(55));
  console.log(`\n🎉 Done!`);
  console.log(`   ✅ Generated: ${completed}`);
  if (failed > 0) console.log(`   ❌ Failed:    ${failed} (re-run without --force to retry)`);
  console.log(`   💾 Total size: ${(totalBytes / 1024 / 1024).toFixed(1)} MB`);
  console.log(`   📁 Location: public/audio/academy/`);
  console.log(`\n   🚀 English voice is live! story-N-en.mp3 ready.\n`);
}

main().catch(err => {
  console.error('\n❌ Fatal error:', err.message);
  process.exit(1);
});
