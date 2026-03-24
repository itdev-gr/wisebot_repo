/**
 * Generate MP3 audio for all 26 ebooks × 5 pages = 130 files
 * Uses Gemini TTS (voice: Kore) → PCM → WAV → MP3
 *
 * Usage: npx tsx scripts/generate-ebook-audio.ts
 *
 * Output: /public/audio/ebooks/book-{id}-page-{pageNum}-el.mp3
 */

import { GoogleGenAI } from '@google/genai';
import { execSync } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';

// ─── Config ──────────────────────────────────────────────────────
const GEMINI_API_KEY = 'AIzaSyCVssbqZLoB6tPsFzAVZfv1mORMzExvzVE';
const VOICE_NAME = 'Kore';        // Warm female voice, great for kids' stories
const OUTPUT_DIR = path.join(process.cwd(), 'public', 'audio', 'ebooks');
const FFMPEG_PATH = path.join(process.cwd(), 'node_modules', 'ffmpeg-static', 'ffmpeg');
const LANG = 'el';                // Greek only for now

const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

// ─── PCM → WAV ──────────────────────────────────────────────────
function pcmToWavBuffer(pcmData: Uint8Array, sampleRate = 24000, channels = 1, bitsPerSample = 16): Buffer {
  const dataSize = pcmData.length;
  const buffer = Buffer.alloc(44 + dataSize);

  buffer.write('RIFF', 0);
  buffer.writeUInt32LE(36 + dataSize, 4);
  buffer.write('WAVE', 8);
  buffer.write('fmt ', 12);
  buffer.writeUInt32LE(16, 16);
  buffer.writeUInt16LE(1, 20);          // PCM
  buffer.writeUInt16LE(channels, 22);
  buffer.writeUInt32LE(sampleRate, 24);
  buffer.writeUInt32LE(sampleRate * channels * bitsPerSample / 8, 28);
  buffer.writeUInt16LE(channels * bitsPerSample / 8, 32);
  buffer.writeUInt16LE(bitsPerSample, 34);
  buffer.write('data', 36);
  buffer.writeUInt32LE(dataSize, 40);
  pcmData.forEach((byte, i) => buffer[44 + i] = byte);

  return buffer;
}

// ─── WAV → MP3 via ffmpeg ──────────────────────────────────────
function wavToMp3(wavPath: string, mp3Path: string): void {
  execSync(`"${FFMPEG_PATH}" -y -i "${wavPath}" -codec:a libmp3lame -b:a 64k -ar 24000 -ac 1 "${mp3Path}" 2>/dev/null`);
}

// ─── Generate audio for a single text ──────────────────────────
async function generateAudio(text: string, outputMp3: string): Promise<boolean> {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-preview-tts',
      contents: text,
      config: {
        responseModalities: ['AUDIO'],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: VOICE_NAME },
          },
        },
      },
    });

    const parts = response.candidates?.[0]?.content?.parts;
    if (!parts) throw new Error('No parts in response');

    for (const part of parts) {
      const inlineData = (part as any).inlineData;
      if (inlineData?.data) {
        const audioBytes = Buffer.from(inlineData.data, 'base64');
        const mimeType = inlineData.mimeType || '';

        // If it's already MP3, save directly
        if (mimeType.includes('mp3')) {
          fs.writeFileSync(outputMp3, audioBytes);
          return true;
        }

        // If WAV, convert to MP3
        if (mimeType.includes('wav')) {
          const tmpWav = outputMp3.replace('.mp3', '.tmp.wav');
          fs.writeFileSync(tmpWav, audioBytes);
          wavToMp3(tmpWav, outputMp3);
          fs.unlinkSync(tmpWav);
          return true;
        }

        // PCM data — convert to WAV first, then MP3
        const rateMatch = mimeType.match(/rate=(\d+)/);
        const sampleRate = rateMatch ? parseInt(rateMatch[1]) : 24000;
        const wavBuffer = pcmToWavBuffer(new Uint8Array(audioBytes), sampleRate);

        const tmpWav = outputMp3.replace('.mp3', '.tmp.wav');
        fs.writeFileSync(tmpWav, wavBuffer);
        wavToMp3(tmpWav, outputMp3);
        fs.unlinkSync(tmpWav);
        return true;
      }
    }

    throw new Error('No audio data in response');
  } catch (err: any) {
    console.error(`  ❌ Error: ${err.message}`);
    return false;
  }
}

// ─── Load book data dynamically ────────────────────────────────
async function loadBookPages(bookId: number): Promise<string[]> {
  const bookModule = await import(`../data/bookData_${bookId}`);
  const bookKey = Object.keys(bookModule).find(k => k.startsWith('BOOK_'));
  if (!bookKey) throw new Error(`No BOOK_ export in bookData_${bookId}`);

  const bookArray = bookModule[bookKey];
  const book = Array.isArray(bookArray) ? bookArray[0] : bookArray;

  if (!book.pages || book.pages.length === 0) {
    throw new Error(`Book ${bookId} has no pages`);
  }

  return book.pages.map((page: any) => {
    const text = page.text?.[LANG] || page.text?.el || '';
    return text.trim();
  });
}

// ─── Main ──────────────────────────────────────────────────────
async function main() {
  console.log('🎙️  WiseBot Ebook Audio Generator');
  console.log('═══════════════════════════════════');
  console.log(`Voice: ${VOICE_NAME} | Language: ${LANG}`);
  console.log(`Output: ${OUTPUT_DIR}\n`);

  // Ensure output dir exists
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  // Check ffmpeg
  if (!fs.existsSync(FFMPEG_PATH)) {
    console.error('❌ ffmpeg-static not found. Run: npm install ffmpeg-static');
    process.exit(1);
  }

  let totalGenerated = 0;
  let totalFailed = 0;
  let totalSkipped = 0;

  for (let bookId = 1; bookId <= 26; bookId++) {
    console.log(`\n📖 Book ${bookId}/26`);

    let pages: string[];
    try {
      pages = await loadBookPages(bookId);
    } catch (err: any) {
      console.error(`  ❌ Failed to load: ${err.message}`);
      totalFailed += 5;
      continue;
    }

    for (let pageIdx = 0; pageIdx < pages.length; pageIdx++) {
      const pageNum = pageIdx + 1;
      const mp3File = path.join(OUTPUT_DIR, `book-${bookId}-page-${pageNum}-${LANG}.mp3`);
      const text = pages[pageIdx];

      if (!text) {
        console.log(`  Page ${pageNum}: ⚠️  Empty text, skipping`);
        totalSkipped++;
        continue;
      }

      // Skip if already exists (for resuming)
      if (fs.existsSync(mp3File)) {
        const stat = fs.statSync(mp3File);
        if (stat.size > 1000) {  // At least 1KB = valid file
          console.log(`  Page ${pageNum}: ⏭️  Already exists (${(stat.size / 1024).toFixed(0)}KB)`);
          totalSkipped++;
          continue;
        }
      }

      console.log(`  Page ${pageNum}: 🎤 Generating (${text.length} chars)...`);

      const success = await generateAudio(text, mp3File);
      if (success) {
        const stat = fs.statSync(mp3File);
        console.log(`  Page ${pageNum}: ✅ Done (${(stat.size / 1024).toFixed(0)}KB)`);
        totalGenerated++;
      } else {
        totalFailed++;
      }

      // Rate limiting - wait 1.5s between calls
      if (pageIdx < pages.length - 1 || bookId < 26) {
        await new Promise(r => setTimeout(r, 1500));
      }
    }
  }

  console.log('\n═══════════════════════════════════');
  console.log(`✅ Generated: ${totalGenerated}`);
  console.log(`⏭️  Skipped: ${totalSkipped}`);
  console.log(`❌ Failed: ${totalFailed}`);
  console.log(`📁 Total files: ${fs.readdirSync(OUTPUT_DIR).filter(f => f.endsWith('.mp3')).length}`);

  // Show total size
  const totalSize = fs.readdirSync(OUTPUT_DIR)
    .filter(f => f.endsWith('.mp3'))
    .reduce((acc, f) => acc + fs.statSync(path.join(OUTPUT_DIR, f)).size, 0);
  console.log(`💾 Total size: ${(totalSize / 1024 / 1024).toFixed(1)}MB`);
}

main().catch(console.error);
