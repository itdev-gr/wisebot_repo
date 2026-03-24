#!/usr/bin/env node
/**
 * 🚀 Batch ebook voice generator — runs books sequentially with one API key
 * Usage: GEMINI_API_KEY=xxx node scripts/generate-batch.mjs --from 1 --to 13
 *        Add --force to regenerate existing files
 */
import { GoogleGenAI } from '@google/genai';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.resolve(__dirname, '..');
const OUTPUT_DIR = path.join(PROJECT_ROOT, 'public', 'audio', 'ebooks');
const PAGES_FILE = path.join(__dirname, 'ebooks-for-tts.json');

const args = process.argv.slice(2);
function getArg(name) {
  const idx = args.indexOf(`--${name}`);
  return idx >= 0 && idx + 1 < args.length ? args[idx + 1] : null;
}
const hasFlag = (name) => args.includes(`--${name}`);

const API_KEY = process.env.GEMINI_API_KEY;
const FROM_BOOK = parseInt(getArg('from') || '1');
const TO_BOOK = parseInt(getArg('to') || '26');
const VOICE = getArg('voice') || 'Kore';
const FORCE = hasFlag('force');
const DELAY = parseInt(getArg('delay') || '5000'); // ms between requests (default 5s)

if (!API_KEY) { console.error('❌ Set GEMINI_API_KEY'); process.exit(1); }

// ─── TTS Reading prompt: instructs the voice to read like a warm storyteller ───
const READING_PROMPT = `Διάβασε το παρακάτω κείμενο σαν αφηγητής παιδικού βιβλίου. Χρησιμοποίησε ζεστή, φιλική φωνή με σωστό τονισμό, φυσικές παύσεις στα σημεία στίξης, και εκφραστικότητα στους διαλόγους. Μην βιάζεσαι — διάβασε αργά και καθαρά, σαν να διαβάζεις σε ένα παιδί πριν κοιμηθεί:\n\n`;

// ─── Phonetic Greek replacements for English names/words ───
const PHONETIC_MAP = [
  [/\bWISEBOT\b/gi, 'Γουάιζμποτ'],
  [/\bWiseBot\b/g, 'Γουάιζμποτ'],
  [/\bCROCUS\b/g, 'ΚΡΟΚΟΥΣ'],
  [/\bCrocus\b/g, 'Κρόκους'],
  [/\bPENCILO\b/g, 'ΠΕΝΣΙΛΟ'],
  [/\bPencilo\b/g, 'Πένσιλο'],
  [/\bSPARKEN\b/g, 'ΣΠΑΡΚΕΝ'],
  [/\bSparken\b/g, 'Σπάρκεν'],
  [/\bLINK\b/g, 'ΛΙΝΚ'],
  [/\bLink\b/g, 'Λινκ'],
  [/\bYouTube\b/gi, 'Γιούτιουμπ'],
  [/\bUSB\b/g, 'Γιου-Ες-Μπι'],
  [/\bLED\b/g, 'Λεντ'],
  [/\bJOURNAL\b/g, 'ΗΜΕΡΟΛΟΓΙΟ'],
  [/\bTIPS\b/g, 'ΣΥΜΒΟΥΛΕΣ'],
  [/\bonline\b/gi, 'ονλάιν'],
  [/\bapp\b/gi, 'εφαρμογή'],
  [/\bproject\b/gi, 'πρότζεκτ'],
  [/\bdeadline\b/gi, 'ντέντλαϊν'],
  [/\blevels\b/gi, 'λέβελς'],
  [/\bupdate\b/gi, 'απντέιτ'],
  [/\bpixel\b/gi, 'πίξελ'],
  [/\bmode\b/gi, 'μόουντ'],
  [/\bcopy\b/gi, 'κόπι'],
  [/\bpaste\b/gi, 'πέιστ'],
  [/\bbackground\b/gi, 'μπάκγκραουντ'],
  [/\bslow motion\b/gi, 'σλόου μόσιον'],
  [/\bresilience\b/gi, 'ρεζίλιενς'],
  [/\btrigger\b/gi, 'τρίγκερ'],
  [/\bGrowth Mindset\b/gi, 'Γκρόουθ Μάιντσετ'],
  [/\bcompletion\b/gi, 'κομπλίσιον'],
  [/\bworkshops\b/gi, 'γουόρκσοπς'],
  [/\bkintsugi\b/gi, 'κιντσούγκι'],
];

// Greek words the TTS mispronounces — add phonetic hints
const GREEK_FIXES = [
  [/\bΨΕΜΑΤΑΚΙ\b/g, 'ΨΕΜΑΤΆΚΙ'],
  [/\bψεματάκι\b/g, 'ψεμματάκι'],
  [/\bΨεματάκι\b/g, 'Ψεμματάκι'],
  [/\bπαζλ\b/gi, 'πάζλ'],
  [/\bρολόι\b/g, 'ρολόι'],  // keep correct — TTS might fix with context
];

function greekify(text) {
  let result = text;
  // Remove page number prefixes like "01\n", "02\n", "03\n" at the start
  result = result.replace(/^\d{1,2}\n/, '');
  // Apply English→Greek phonetic replacements
  for (const [regex, replacement] of PHONETIC_MAP) {
    result = result.replace(regex, replacement);
  }
  // Apply Greek pronunciation fixes
  for (const [regex, replacement] of GREEK_FIXES) {
    result = result.replace(regex, replacement);
  }
  return result;
}

const ai = new GoogleGenAI({ apiKey: API_KEY });
const allPages = JSON.parse(fs.readFileSync(PAGES_FILE, 'utf8'));
const pages = allPages.filter(p => p.bookId >= FROM_BOOK && p.bookId <= TO_BOOK);

if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });

function writeWav(pcmBuffer, sampleRate = 24000) {
  const header = Buffer.alloc(44);
  const dataLen = pcmBuffer.length;
  header.write('RIFF', 0);
  header.writeUInt32LE(36 + dataLen, 4);
  header.write('WAVE', 8);
  header.write('fmt ', 12);
  header.writeUInt32LE(16, 16);
  header.writeUInt16LE(1, 20);
  header.writeUInt16LE(1, 22);
  header.writeUInt32LE(sampleRate, 24);
  header.writeUInt32LE(sampleRate * 2, 28);
  header.writeUInt16LE(2, 32);
  header.writeUInt16LE(16, 34);
  header.write('data', 36);
  header.writeUInt32LE(dataLen, 40);
  return Buffer.concat([header, pcmBuffer]);
}

const sleep = ms => new Promise(r => setTimeout(r, ms));

let done = 0, skipped = 0, failed = 0;
const MAX_RETRIES = 8;

console.log(`\n🎙️  Batch Generator — Books ${FROM_BOOK}-${TO_BOOK} (${pages.length} pages)`);
console.log(`   Key: ...${API_KEY.slice(-6)}  Voice: ${VOICE}  Force: ${FORCE}  Delay: ${DELAY}ms\n`);

for (let i = 0; i < pages.length; i++) {
  const p = pages[i];
  const outFile = path.join(OUTPUT_DIR, `book-${p.bookId}-page-${p.page}-el.wav`);

  if (fs.existsSync(outFile) && !FORCE) {
    skipped++;
    continue;
  }

  const progress = `[${done + skipped + failed + 1}/${pages.length}]`;
  let retries = 0;
  let success = false;

  while (retries < MAX_RETRIES && !success) {
    try {
      const fullText = READING_PROMPT + greekify(p.text);

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-preview-tts',
        contents: [{ parts: [{ text: fullText }] }],
        config: {
          responseModalities: ['AUDIO'],
          speechConfig: {
            voiceConfig: { prebuiltVoiceConfig: { voiceName: VOICE } },
          },
        },
      });

      const audioData = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
      if (!audioData) {
        console.log(`  ⚠️ ${progress} No audio data for book-${p.bookId}-page-${p.page}`);
        failed++;
        success = true; // don't retry empty responses
        continue;
      }

      const pcm = Buffer.from(audioData, 'base64');
      const wav = writeWav(pcm);
      fs.writeFileSync(outFile, wav);
      done++;
      success = true;

      const sizeMB = (wav.length / 1024 / 1024).toFixed(1);
      const totalFiles = fs.readdirSync(OUTPUT_DIR).length;
      console.log(`  ✅ ${progress} book-${p.bookId}-page-${p.page}-el.wav (${sizeMB}MB) [${totalFiles}/265 total]`);

      // Delay between successful requests
      await sleep(DELAY);

    } catch (err) {
      const msg = err.message || '';
      if (msg.includes('429') || msg.includes('RESOURCE_EXHAUSTED')) {
        retries++;
        // Exponential backoff: 60s, 120s, 240s, 480s... capped at 10min
        const waitSec = Math.min(60 * Math.pow(2, retries - 1), 600);
        console.log(`  ⏳ ${progress} Rate limit (retry ${retries}/${MAX_RETRIES}) — waiting ${waitSec}s...`);
        await sleep(waitSec * 1000);
      } else {
        console.log(`  ❌ ${progress} Error book-${p.bookId}-page-${p.page}: ${msg.substring(0, 120)}`);
        failed++;
        success = true; // don't retry non-rate-limit errors
        await sleep(3000);
      }
    }
  }

  if (!success) {
    console.log(`  💀 ${progress} SKIPPED book-${p.bookId}-page-${p.page} after ${MAX_RETRIES} retries`);
    failed++;
  }
}

console.log(`\n✅ Done! Generated: ${done}, Skipped: ${skipped}, Failed: ${failed}`);
console.log(`   Total files: ${fs.readdirSync(OUTPUT_DIR).length}/265\n`);
