#!/usr/bin/env node
/**
 * Converts WAV files to MP3 using @breezystack/lamejs (ES module).
 * Usage: node scripts/wav-to-mp3.mjs [directory]
 * Converts all *.wav files in the given directory to *.mp3 and removes originals.
 */

import lamejs from '@breezystack/lamejs';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dir = process.argv[2] || path.join(__dirname, '..', 'public', 'audio', 'academy');

const wavFiles = fs.readdirSync(dir).filter(f => f.endsWith('.wav'));

if (wavFiles.length === 0) {
  console.log('No WAV files found in', dir);
  process.exit(0);
}

console.log(`\nConverting ${wavFiles.length} WAV files to MP3...\n`);

function readWavFile(filePath) {
  const buf = fs.readFileSync(filePath);
  const view = new DataView(buf.buffer, buf.byteOffset, buf.byteLength);
  const channels    = view.getUint16(22, true);
  const sampleRate  = view.getUint32(24, true);
  const bitsPerSample = view.getUint16(34, true);
  const dataSize    = view.getUint32(40, true);
  const pcmData     = buf.slice(44, 44 + dataSize);
  return { channels, sampleRate, bitsPerSample, pcmData };
}

function wavToMp3(wavPath, mp3Path) {
  const { channels, sampleRate, bitsPerSample, pcmData } = readWavFile(wavPath);
  if (bitsPerSample !== 16) throw new Error(`Need 16-bit PCM, got ${bitsPerSample}-bit`);

  const mp3enc = new lamejs.Mp3Encoder(channels, sampleRate, 128);
  const samples = new Int16Array(pcmData.buffer, pcmData.byteOffset, pcmData.byteLength / 2);
  const BLOCK = 1152;
  const chunks = [];

  if (channels === 1) {
    for (let i = 0; i < samples.length; i += BLOCK) {
      const enc = mp3enc.encodeBuffer(samples.subarray(i, i + BLOCK));
      if (enc.length > 0) chunks.push(Buffer.from(enc));
    }
  } else {
    const left  = new Int16Array(samples.length / 2);
    const right = new Int16Array(samples.length / 2);
    for (let i = 0; i < samples.length / 2; i++) {
      left[i] = samples[i * 2]; right[i] = samples[i * 2 + 1];
    }
    for (let i = 0; i < left.length; i += BLOCK) {
      const enc = mp3enc.encodeBuffer(left.subarray(i, i + BLOCK), right.subarray(i, i + BLOCK));
      if (enc.length > 0) chunks.push(Buffer.from(enc));
    }
  }

  const flushed = mp3enc.flush();
  if (flushed.length > 0) chunks.push(Buffer.from(flushed));
  fs.writeFileSync(mp3Path, Buffer.concat(chunks));
}

let ok = 0, failed = 0;

for (const wavFile of wavFiles) {
  const wavPath = path.join(dir, wavFile);
  const mp3File = wavFile.replace('.wav', '.mp3');
  const mp3Path = path.join(dir, mp3File);
  process.stdout.write(`  ${wavFile} → ${mp3File}... `);
  try {
    wavToMp3(wavPath, mp3Path);
    const sizeMB = (fs.statSync(mp3Path).size / 1024 / 1024).toFixed(1);
    console.log(`✅ ${sizeMB} MB`);
    fs.unlinkSync(wavPath);
    ok++;
  } catch (e) {
    console.log(`❌ ${e.message}`);
    failed++;
  }
}

console.log(`\n🎉 Done! ${ok} converted, ${failed} failed.\n`);
