#!/usr/bin/env node
/**
 * 🎵 Convert all WAV ebook files to MP3 for massive size reduction
 * WAV ~1.1GB → MP3 ~60-80MB
 * Uses lamejs (pure JS) — no ffmpeg needed
 */
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const lamejs = require('lamejs');

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const INPUT_DIR = path.join(__dirname, '..', 'public', 'audio', 'ebooks');

const files = fs.readdirSync(INPUT_DIR).filter(f => f.endsWith('.wav'));
const TOTAL = files.length;

console.log(`\n🎵 Converting ${TOTAL} WAV files to MP3 (128kbps)...\n`);

let done = 0, skipped = 0, failed = 0, totalSaved = 0;

for (const file of files) {
  const wavPath = path.join(INPUT_DIR, file);
  const mp3Path = path.join(INPUT_DIR, file.replace('.wav', '.mp3'));

  if (fs.existsSync(mp3Path)) {
    skipped++;
    done++;
    continue;
  }

  try {
    const wavBuffer = fs.readFileSync(wavPath);

    // Parse WAV header
    const channels = wavBuffer.readUInt16LE(22);
    const sampleRate = wavBuffer.readUInt32LE(24);
    // bits-per-sample lives at offset 34 but the encoder derives it itself
    const dataOffset = 44; // Standard WAV header size

    // Extract PCM samples as Int16
    const pcmData = new Int16Array(
      wavBuffer.buffer,
      wavBuffer.byteOffset + dataOffset,
      (wavBuffer.length - dataOffset) / 2
    );

    // Encode to MP3
    const mp3encoder = new lamejs.Mp3Encoder(channels, sampleRate, 128);
    const mp3Data = [];
    const sampleBlockSize = 1152;

    for (let i = 0; i < pcmData.length; i += sampleBlockSize) {
      const chunk = pcmData.subarray(i, i + sampleBlockSize);
      const mp3buf = mp3encoder.encodeBuffer(chunk);
      if (mp3buf.length > 0) {
        mp3Data.push(Buffer.from(mp3buf));
      }
    }

    // Flush remaining
    const end = mp3encoder.flush();
    if (end.length > 0) {
      mp3Data.push(Buffer.from(end));
    }

    const mp3Buffer = Buffer.concat(mp3Data);
    fs.writeFileSync(mp3Path, mp3Buffer);

    const wavSize = wavBuffer.length;
    const mp3Size = mp3Buffer.length;
    const saved = ((1 - mp3Size / wavSize) * 100).toFixed(0);
    totalSaved += (wavSize - mp3Size);
    done++;

    console.log(`  ✅ [${done}/${TOTAL}] ${file} → .mp3 (${(wavSize/1024/1024).toFixed(1)}MB → ${(mp3Size/1024).toFixed(0)}KB, -${saved}%)`);
  } catch (err) {
    console.log(`  ❌ ${file}: ${err.message}`);
    failed++;
  }
}

console.log(`\n✅ Done! Converted: ${done}, Skipped: ${skipped}, Failed: ${failed}`);
console.log(`   Total saved: ${(totalSaved / 1024 / 1024).toFixed(1)}MB\n`);
