#!/usr/bin/env node
/**
 * 🎙️ Voice Sample Generator — Compare voices for Greek Ebook
 *
 * Generates short audio samples from multiple TTS providers/voices
 * so you can pick the best one for the Greek narration.
 *
 * Usage:
 *   OPENAI_API_KEY=sk-... GEMINI_API_KEY=... node scripts/generate-voice-samples.mjs
 *
 * Output: public/audio/samples/sample-{provider}-{voice}.mp3
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.resolve(__dirname, '..');
const OUTPUT_DIR = path.join(PROJECT_ROOT, 'public', 'audio', 'samples');

// ─── Sample text — excerpt from Book 1, Page 1 ─────────────────
const SAMPLE_TEXT = `Το ρολόι στον τοίχο χτυπούσε αργά. Τικ. Τοκ. Τικ. Τοκ. Κάθε δευτερόλεπτο βαρύ σαν πέτρα.
Η Αλεξάνδρα ήταν ξαπλωμένη στο πάτωμα, μπροστά σε ένα μισοτελειωμένο παζλ. Δεν το κοιτούσε καν. Κοιτούσε το ταβάνι. Μετρούσε τις ρωγμές. Δεκατρείς.
— «Τελείωσες τελικά;» φώναξε ο Φίλιππος από το σαλόνι. Η φωνή του ακούστηκε μακρινή, σαν να ερχόταν από άλλο σπίτι.
— «Ναι!» φώναξε εκείνη γρήγορα.
Ψέμα. Δεν το είχε ακουμπήσει ούτε μία φορά. Αλλά τα ψέματα βγαίνουν εύκολα όταν κανείς δεν νοιάζεται αρκετά να ελέγξει.`;

// ─── PCM → WAV conversion (for Gemini raw PCM output) ───────────
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

// ─── OpenAI TTS ─────────────────────────────────────────────────
async function generateOpenAI(text, voice, outputPath) {
  const response = await fetch('https://api.openai.com/v1/audio/speech', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'tts-1-hd',
      input: text,
      voice: voice,
      response_format: 'mp3',
    }),
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err.error?.message || `HTTP ${response.status}`);
  }

  const buffer = Buffer.from(await response.arrayBuffer());
  fs.writeFileSync(outputPath, buffer);
  return buffer.length;
}

// ─── Gemini TTS ─────────────────────────────────────────────────
async function generateGemini(ai, text, voiceName, outputPath) {
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

  throw new Error('No audio data in Gemini response');
}

// ─── Main ───────────────────────────────────────────────────────
async function main() {
  console.log('\n🎙️  Voice Sample Generator — Greek Ebook');
  console.log('═'.repeat(55));
  console.log(`   Sample text: ${SAMPLE_TEXT.length} chars (Book 1, Page 1 excerpt)`);
  console.log('═'.repeat(55));

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const results = [];

  // ── OpenAI voices ──
  if (process.env.OPENAI_API_KEY) {
    const openaiVoices = [
      { id: 'alloy',   desc: 'Neutral, balanced' },
      { id: 'echo',    desc: 'Warm, male' },
      { id: 'fable',   desc: 'Expressive, storytelling' },
      { id: 'onyx',    desc: 'Deep, authoritative' },
      { id: 'nova',    desc: 'Natural, friendly (= English version)' },
      { id: 'shimmer', desc: 'Gentle, soft' },
    ];

    console.log('\n📦 OpenAI TTS (tts-1-hd) — 6 voices');
    console.log('─'.repeat(55));

    for (const voice of openaiVoices) {
      const filename = `sample-openai-${voice.id}.mp3`;
      const outputPath = path.join(OUTPUT_DIR, filename);
      process.stdout.write(`   ${voice.id.padEnd(10)} (${voice.desc})... `);

      try {
        const bytes = await generateOpenAI(SAMPLE_TEXT, voice.id, outputPath);
        console.log(`✅ ${(bytes / 1024).toFixed(0)} KB`);
        results.push({ provider: 'OpenAI', voice: voice.id, desc: voice.desc, file: filename, ok: true });
      } catch (err) {
        console.log(`❌ ${err.message}`);
        results.push({ provider: 'OpenAI', voice: voice.id, desc: voice.desc, file: filename, ok: false });
      }

      // Small delay
      await new Promise(r => setTimeout(r, 500));
    }
  } else {
    console.log('\n⚠️  No OPENAI_API_KEY — skipping OpenAI voices');
  }

  // ── Gemini voices ──
  if (process.env.GEMINI_API_KEY || process.env.API_KEY) {
    const geminiKey = process.env.GEMINI_API_KEY || process.env.API_KEY;
    const ai = new GoogleGenAI({ apiKey: geminiKey });

    const geminiVoices = [
      { id: 'Kore',    desc: 'Current voice (warm female) — BASELINE' },
      { id: 'Aoede',   desc: 'Calm, soothing female' },
      { id: 'Leda',    desc: 'Soft, gentle female' },
      { id: 'Puck',    desc: 'Narrator, storytelling' },
      { id: 'Zephyr',  desc: 'Light, airy' },
      { id: 'Charon',  desc: 'Deep, dramatic' },
    ];

    console.log('\n📦 Gemini TTS (flash-preview) — 6 voices');
    console.log('─'.repeat(55));

    for (const voice of geminiVoices) {
      const filename = `sample-gemini-${voice.id.toLowerCase()}.wav`;
      const outputPath = path.join(OUTPUT_DIR, filename);
      process.stdout.write(`   ${voice.id.padEnd(10)} (${voice.desc})... `);

      try {
        const bytes = await generateGemini(ai, SAMPLE_TEXT, voice.id, outputPath);
        console.log(`✅ ${(bytes / 1024).toFixed(0)} KB`);
        results.push({ provider: 'Gemini', voice: voice.id, desc: voice.desc, file: filename, ok: true });
      } catch (err) {
        console.log(`❌ ${err.message}`);
        results.push({ provider: 'Gemini', voice: voice.id, desc: voice.desc, file: filename, ok: false });
      }

      // Rate limit pause for Gemini
      await new Promise(r => setTimeout(r, 3000));
    }
  } else {
    console.log('\n⚠️  No GEMINI_API_KEY — skipping Gemini voices');
  }

  // ── Summary ──
  console.log('\n' + '═'.repeat(55));
  console.log('📊 SAMPLES GENERATED');
  console.log('═'.repeat(55));

  const successful = results.filter(r => r.ok);
  for (const r of successful) {
    console.log(`   ${r.provider.padEnd(8)} ${r.voice.padEnd(10)} — ${r.desc}`);
    console.log(`   📁 public/audio/samples/${r.file}`);
  }

  console.log(`\n   ✅ ${successful.length} samples ready in public/audio/samples/`);
  console.log(`   🎧 Listen to each and pick your favorite!\n`);

  // Create an HTML player page for easy comparison
  const html = generatePlayerHTML(successful);
  const playerPath = path.join(OUTPUT_DIR, 'player.html');
  fs.writeFileSync(playerPath, html);
  console.log(`   🌐 Open in browser: public/audio/samples/player.html\n`);
}

function generatePlayerHTML(samples) {
  const cards = samples.map(s => `
      <div class="card">
        <div class="provider ${s.provider.toLowerCase()}">${s.provider}</div>
        <div class="voice">${s.voice}</div>
        <div class="desc">${s.desc}</div>
        <audio controls preload="none">
          <source src="${s.file}" type="audio/${s.file.endsWith('.mp3') ? 'mpeg' : 'wav'}">
        </audio>
      </div>`).join('\n');

  return `<!DOCTYPE html>
<html lang="el">
<head>
  <meta charset="UTF-8">
  <title>🎙️ Voice Samples — Greek Ebook</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #0f0f0f; color: #e0e0e0; padding: 2rem; }
    h1 { text-align: center; margin-bottom: 0.5rem; font-size: 1.8rem; }
    .subtitle { text-align: center; color: #888; margin-bottom: 2rem; }
    .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 1rem; max-width: 1200px; margin: 0 auto; }
    .card { background: #1a1a1a; border-radius: 12px; padding: 1.2rem; border: 1px solid #333; }
    .card:hover { border-color: #666; }
    .provider { font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.3rem; }
    .provider.openai { color: #10a37f; }
    .provider.gemini { color: #4285f4; }
    .voice { font-size: 1.3rem; font-weight: 700; margin-bottom: 0.3rem; }
    .desc { color: #888; font-size: 0.85rem; margin-bottom: 0.8rem; }
    audio { width: 100%; height: 40px; }
    .sample-text { max-width: 800px; margin: 0 auto 2rem; background: #1a1a1a; padding: 1.2rem; border-radius: 8px; font-size: 0.9rem; line-height: 1.6; color: #aaa; border-left: 3px solid #4285f4; }
    .sample-text strong { color: #e0e0e0; }
  </style>
</head>
<body>
  <h1>🎙️ Voice Samples — Greek Ebook</h1>
  <p class="subtitle">Ακουσε καθε φωνή και διάλεξε τη favorite σου</p>

  <div class="sample-text">
    <strong>Κείμενο δείγματος (Book 1, Page 1):</strong><br><br>
    Το ρολόι στον τοίχο χτυπούσε αργά. Τικ. Τοκ. Κάθε δευτερόλεπτο βαρύ σαν πέτρα.<br>
    Η Αλεξάνδρα ήταν ξαπλωμένη στο πάτωμα... — «Τελείωσες τελικά;» φώναξε ο Φίλιππος...<br>
    — «Ναι!» φώναξε εκείνη γρήγορα. Ψέμα.
  </div>

  <div class="grid">
${cards}
  </div>
</body>
</html>`;
}

main().catch(err => {
  console.error('\n❌ Fatal error:', err.message);
  process.exit(1);
});
