/**
 * Cloud TTS Service — Powered by Gemini + IndexedDB Persistent Cache
 *
 * Uses Google's Gemini TTS model for natural, human-sounding speech.
 * Audio is generated ONCE and then cached permanently in IndexedDB.
 * After caching, playback is instant — no API call needed.
 *
 * Cache hierarchy:
 *   1. In-memory Map (fastest, within session)
 *   2. IndexedDB (persistent, survives browser restart)
 *   3. Gemini API (generates new audio, then caches it)
 *   4. Falls back to Web Speech API if all else fails
 */

import { authFetch } from "./backendApi";
import { base64ToUint8Array } from "../utils/audioUtils";

// Map Gemini voice names to /api/ai/tts voice styles
const VOICE_STYLE_MAP: Record<string, string> = {
  Kore:   'friendly',
  Aoede:  'calm',
  Puck:   'narrator',
  Charon: 'adventure',
  Leda:   'friendly',
  Zephyr: 'friendly',
};

// ─── Voice Presets ──────────────────────────────────────────────
export const TTS_VOICES = {
  kore:    { id: 'Kore',    label: { el: 'Κόρη (Ζεστή)', en: 'Kore (Warm)' } },
  aoede:   { id: 'Aoede',   label: { el: 'Αοιδή (Μελωδική)', en: 'Aoede (Melodic)' } },
  leda:    { id: 'Leda',    label: { el: 'Λήδα (Ήρεμη)', en: 'Leda (Calm)' } },
  puck:    { id: 'Puck',    label: { el: 'Πακ (Ζωηρός)', en: 'Puck (Lively)' } },
  charon:  { id: 'Charon',  label: { el: 'Χάρων (Βαθύς)', en: 'Charon (Deep)' } },
  zephyr:  { id: 'Zephyr',  label: { el: 'Ζέφυρος (Φιλικός)', en: 'Zephyr (Friendly)' } },
} as const;

const DEFAULT_VOICE: Record<string, string> = {
  el: 'Kore',
  en: 'Kore',
};

// ─── Simple Hash ────────────────────────────────────────────────
function hashText(str: string): string {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = ((h << 5) - h) + str.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h).toString(36);
}

function makeCacheKey(text: string, lang: string, voice: string): string {
  return `tts:${voice}:${lang}:${hashText(text)}:${text.length}`;
}

// ═══════════════════════════════════════════════════════════════
// INDEXEDDB PERSISTENT CACHE
// ═══════════════════════════════════════════════════════════════

const DB_NAME = 'wisebot-tts';
const DB_VERSION = 1;
const STORE_NAME = 'audio';

let dbPromise: Promise<IDBDatabase> | null = null;

function openDB(): Promise<IDBDatabase> {
  if (dbPromise) return dbPromise;

  dbPromise = new Promise((resolve, reject) => {
    try {
      const request = indexedDB.open(DB_NAME, DB_VERSION);

      request.onupgradeneeded = () => {
        const db = request.result;
        if (!db.objectStoreNames.contains(STORE_NAME)) {
          db.createObjectStore(STORE_NAME);
        }
      };

      request.onsuccess = () => resolve(request.result);
      request.onerror = () => {
        dbPromise = null;
        reject(request.error);
      };
    } catch (e) {
      dbPromise = null;
      reject(e);
    }
  });

  return dbPromise;
}

async function getFromDB(key: string): Promise<Blob | null> {
  try {
    const db = await openDB();
    return new Promise((resolve) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const req = store.get(key);
      req.onsuccess = () => resolve(req.result || null);
      req.onerror = () => resolve(null);
    });
  } catch {
    return null;
  }
}

async function saveToDB(key: string, blob: Blob): Promise<void> {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      store.put(blob, key);
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
  } catch {
    // IndexedDB not available — silently ignore
  }
}

async function getAllKeysFromDB(): Promise<string[]> {
  try {
    const db = await openDB();
    return new Promise((resolve) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const req = store.getAllKeys();
      req.onsuccess = () => resolve((req.result || []) as string[]);
      req.onerror = () => resolve([]);
    });
  } catch {
    return [];
  }
}

async function countCachedInDB(): Promise<number> {
  try {
    const db = await openDB();
    return new Promise((resolve) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const req = store.count();
      req.onsuccess = () => resolve(req.result || 0);
      req.onerror = () => resolve(0);
    });
  } catch {
    return 0;
  }
}

// ─── In-Memory Cache (session-level, instant) ───────────────────
const memCache = new Map<string, string>();
const MAX_MEM_CACHE = 30;

function memCacheSet(key: string, blobUrl: string) {
  if (memCache.size >= MAX_MEM_CACHE) {
    const firstKey = memCache.keys().next().value;
    if (firstKey) {
      const oldUrl = memCache.get(firstKey);
      if (oldUrl) URL.revokeObjectURL(oldUrl);
      memCache.delete(firstKey);
    }
  }
  memCache.set(key, blobUrl);
}

// ─── PCM → WAV Conversion ──────────────────────────────────────
function pcmToWav(
  pcmData: Uint8Array,
  sampleRate: number = 24000,
  channels: number = 1,
  bitsPerSample: number = 16
): Blob {
  const dataSize = pcmData.length;
  const buffer = new ArrayBuffer(44 + dataSize);
  const view = new DataView(buffer);

  writeStr(view, 0, 'RIFF');
  view.setUint32(4, 36 + dataSize, true);
  writeStr(view, 8, 'WAVE');
  writeStr(view, 12, 'fmt ');
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, channels, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * channels * bitsPerSample / 8, true);
  view.setUint16(32, channels * bitsPerSample / 8, true);
  view.setUint16(34, bitsPerSample, true);
  writeStr(view, 36, 'data');
  view.setUint32(40, dataSize, true);
  new Uint8Array(buffer, 44).set(pcmData);

  return new Blob([buffer], { type: 'audio/wav' });
}

function writeStr(view: DataView, offset: number, str: string) {
  for (let i = 0; i < str.length; i++) {
    view.setUint8(offset + i, str.charCodeAt(i));
  }
}

// ═══════════════════════════════════════════════════════════════
// CORE TTS — Check cache layers, then call API only if needed
// ═══════════════════════════════════════════════════════════════

/**
 * Generate (or load cached) speech audio.
 * Cache hierarchy: memory → IndexedDB → Gemini API
 */
export async function generateSpeech(
  text: string,
  lang: 'el' | 'en',
  voice?: string
): Promise<string> {
  const voiceName = voice || DEFAULT_VOICE[lang] || 'Kore';
  const key = makeCacheKey(text, lang, voiceName);

  // 1️⃣ In-memory cache (instant)
  const memHit = memCache.get(key);
  if (memHit) return memHit;

  // 2️⃣ IndexedDB persistent cache (fast, no API)
  const dbBlob = await getFromDB(key);
  if (dbBlob) {
    const blobUrl = URL.createObjectURL(dbBlob);
    memCacheSet(key, blobUrl);
    return blobUrl;
  }

  // 3️⃣ Generate via /api/ai/tts (Gemini TTS — natural Kore voice)
  const voiceStyle = VOICE_STYLE_MAP[voiceName] || 'friendly';
  const resp = await authFetch('/api/ai/tts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text, voice: voiceStyle }),
  });

  if (!resp.ok) {
    const errData = await resp.json().catch(() => ({}));
    throw new Error((errData as any).error || `TTS request failed (${resp.status})`);
  }

  const data = await resp.json() as { audio?: string; mimeType?: string };
  if (!data.audio) throw new Error('Gemini TTS returned no audio data');

  const audioBytes = base64ToUint8Array(data.audio);
  const mimeType = data.mimeType || '';

  let blob: Blob;
  if (mimeType.includes('wav') || mimeType.includes('mp3') || mimeType.includes('ogg')) {
    blob = new Blob([audioBytes], { type: mimeType });
  } else {
    const rateMatch = mimeType.match(/rate=(\d+)/);
    const sampleRate = rateMatch ? parseInt(rateMatch[1]) : 24000;
    blob = pcmToWav(audioBytes, sampleRate);
  }

  // Save to IndexedDB (persistent — never need to generate again!)
  await saveToDB(key, blob);

  const blobUrl = URL.createObjectURL(blob);
  memCacheSet(key, blobUrl);
  return blobUrl;
}

// ═══════════════════════════════════════════════════════════════
// STATIC AUDIO FILES — Pre-generated, zero API, instant play
// ═══════════════════════════════════════════════════════════════

/**
 * Check if a pre-generated static audio file exists for a story.
 * Returns the URL if found, null otherwise.
 * Files are at: /audio/academy/story-{id}-{lang}.mp3
 */
export async function loadStaticAudio(
  storyId: number,
  lang: 'el' | 'en'
): Promise<string | null> {
  const memKey = `static:${storyId}:${lang}`;
  const memHit = memCache.get(memKey);
  if (memHit) return memHit;

  const url = `/audio/academy/story-${storyId}-${lang}.mp3`;

  try {
    const res = await fetch(url, { method: 'HEAD' });
    if (res.ok) {
      memCacheSet(memKey, url);
      return url;
    }
  } catch {
    // File doesn't exist
  }
  return null;
}

/**
 * Word timings for a story's static narration, or null when none exist.
 * Same shape and convention as the ebook read-along: {v:1, words:[[start,end],...]},
 * index-aligned to text.split(/\s+/) tokens of the story text.
 * Files are at: /audio/academy/story-{id}-{lang}.json
 */
export async function loadStaticAudioTimings(
  storyId: number,
  lang: 'el' | 'en'
): Promise<number[][] | null> {
  try {
    const res = await fetch(`/audio/academy/story-${storyId}-${lang}.json`);
    if (!res.ok) return null;
    const data = await res.json();
    if (data?.v === 1 && Array.isArray(data.words) && data.words.length) return data.words;
  } catch {
    // No timings for this story — reader simply plays without the highlight
  }
  return null;
}

/** Per-word timings for a narrated page: `words[i] = [start, end]` in seconds, where
 *  `i` indexes `text.split(/\s+/).filter(Boolean)` of the page's text. */
export interface StaticNarration {
  url: string;
  words: number[][] | null;
}

// Pages that have a recording (missing pages are re-checked: a HEAD is cheap and
// the recordings ship with deploys, so a null today may be a file tomorrow).
const narrationCache = new Map<string, StaticNarration>();

/**
 * Real narration recorded for an ebook page (the owner's children reading), with
 * optional word timings for the read-along highlight.
 * Files: /audio/ebooks/book-{bookId}-page-{page}-{lang}.m4a (+ .json timings)
 * Produced by scripts/ebook-narration.md. Returns null when the page has none,
 * in which case the reader falls back to cloud/browser TTS.
 */
export async function loadStaticEbookAudio(
  bookId: number,
  page: number,
  lang: 'el' | 'en'
): Promise<StaticNarration | null> {
  const memKey = `${bookId}:${page}:${lang}`;
  if (narrationCache.has(memKey)) return narrationCache.get(memKey)!;

  const base = `/audio/ebooks/book-${bookId}-page-${page}-${lang}`;
  try {
    const res = await fetch(`${base}.m4a`, { method: 'HEAD' });
    if (!res.ok) return null;
    let words: number[][] | null = null;
    try {
      const t = await fetch(`${base}.json`);
      if (t.ok) {
        const data = await t.json();
        if (Array.isArray(data?.words)) words = data.words;
      }
    } catch { /* narration without timings still plays */ }
    const result: StaticNarration = { url: `${base}.m4a`, words };
    narrationCache.set(memKey, result);
    return result;
  } catch {
    return null;
  }
}

// ─── Multi-chunk support (for long texts) ────────────────────────
const MAX_CHUNK_CHARS = 4000;

export async function generateSpeechChunked(
  text: string,
  lang: 'el' | 'en',
  voice?: string
): Promise<string[]> {
  if (text.length <= MAX_CHUNK_CHARS) {
    const url = await generateSpeech(text, lang, voice);
    return [url];
  }

  const sentences = text.match(/[^.!?;·]+[.!?;·]+/g) || [text];
  const chunks: string[] = [];
  let current = '';

  for (const sentence of sentences) {
    if ((current + sentence).length > MAX_CHUNK_CHARS && current) {
      chunks.push(current.trim());
      current = sentence;
    } else {
      current += sentence;
    }
  }
  if (current.trim()) chunks.push(current.trim());

  const urls: string[] = [];
  for (const chunk of chunks) {
    const url = await generateSpeech(chunk, lang, voice);
    urls.push(url);
  }
  return urls;
}

// ═══════════════════════════════════════════════════════════════
// BULK PRE-DOWNLOAD — Generate & cache all stories at once
// ═══════════════════════════════════════════════════════════════

export interface PreDownloadProgress {
  total: number;
  completed: number;
  current: string;
  failed: number;
}

/**
 * Pre-generate and cache audio for a list of texts.
 * Calls onProgress for UI updates. Generates sequentially to avoid
 * hitting API rate limits.
 *
 * @param items     Array of { id, text, lang } to generate
 * @param onProgress Progress callback
 * @param voice     Voice to use (default: Kore)
 * @returns         Number of newly generated items
 */
export async function preDownloadAll(
  items: Array<{ id: string; text: string; lang: 'el' | 'en' }>,
  onProgress?: (p: PreDownloadProgress) => void,
  voice?: string
): Promise<number> {
  const voiceName = voice || 'Kore';
  let completed = 0;
  let failed = 0;
  let newlyGenerated = 0;

  for (const item of items) {
    const key = makeCacheKey(item.text, item.lang, voiceName);

    onProgress?.({
      total: items.length,
      completed,
      current: item.id,
      failed,
    });

    // Skip if already cached in IndexedDB
    const existing = await getFromDB(key);
    if (existing) {
      completed++;
      continue;
    }

    // Generate and cache
    try {
      await generateSpeech(item.text, item.lang, voiceName);
      newlyGenerated++;
    } catch (err) {
      console.warn(`Failed to generate TTS for "${item.id}":`, err);
      failed++;
    }

    completed++;

    // Small delay to avoid API rate limits
    if (newlyGenerated > 0 && newlyGenerated % 5 === 0) {
      await new Promise(r => setTimeout(r, 1000));
    }
  }

  onProgress?.({
    total: items.length,
    completed: items.length,
    current: '',
    failed,
  });

  return newlyGenerated;
}

/**
 * Check how many of the given texts are already cached.
 */
export async function getCachedCount(
  items: Array<{ text: string; lang: 'el' | 'en' }>,
  voice?: string
): Promise<number> {
  const voiceName = voice || 'Kore';
  const allKeys = await getAllKeysFromDB();
  const keySet = new Set(allKeys);

  let count = 0;
  for (const item of items) {
    const key = makeCacheKey(item.text, item.lang, voiceName);
    if (keySet.has(key)) count++;
  }
  return count;
}

// ─── Cleanup ────────────────────────────────────────────────────

export function clearMemoryCache() {
  for (const url of memCache.values()) {
    URL.revokeObjectURL(url);
  }
  memCache.clear();
}

export function clearTTSCache() {
  clearMemoryCache();
}

export function isCloudTTSAvailable(): boolean {
  // Always available — proxied through serverless endpoint
  return true;
}
