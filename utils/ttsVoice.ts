/**
 * Smart TTS Voice Selector
 * Finds the most natural, human-sounding voice available on the device.
 * Priority: Premium > Enhanced > Natural > Google Cloud > Known Good > Remote > Local
 * Also handles Chrome's ~15-second silence bug for cloud voices.
 */

// Novelty/low-quality voices to always skip (Apple ships these)
const NOVELTY_VOICES = [
  'Bells', 'Cellos', 'Zarvox', 'Trinoids', 'Whisper',
  'Organ', 'Superstar', 'Albert', 'Bad News', 'Bahh',
  'Boing', 'Bubbles', 'Deranged', 'Good News', 'Hysterical',
  'Junior', 'Jester', 'Princess', 'Ralph', 'Wobble',
  'Pipe Organ', 'Eddy', 'Flo', 'Grandma', 'Grandpa',
  'Sandy', 'Shelley', 'Reed', 'Rocko',
];

// Known high-quality Apple voices (even in compact form)
const GOOD_APPLE_EN = ['Samantha', 'Ava', 'Zoe', 'Alex', 'Serena', 'Daniel', 'Karen', 'Jamie', 'Lee', 'Matilda', 'Tessa', 'Tom'];
const GOOD_APPLE_EL = ['Μελίνα', 'Melina'];

function getVoiceQuality(voice: SpeechSynthesisVoice): number {
  const name = voice.name;

  // Filter out novelty
  if (NOVELTY_VOICES.some(n => name.includes(n))) return 0;

  // Microsoft Neural (Edge) — best free voices
  if (name.includes('Natural')) return 100;
  // Apple Premium (downloaded, Chrome-only)
  if (name.includes('Premium')) return 95;
  // Apple Enhanced (downloaded)
  if (name.includes('Enhanced')) return 85;
  // Google Cloud voices (Chrome) — great but have 15s bug
  if (name.startsWith('Google')) return 75;
  // Known high-quality Apple compact voices
  if ([...GOOD_APPLE_EN, ...GOOD_APPLE_EL].some(n => name.includes(n))) return 65;
  // Any remote/cloud voice (generally higher quality)
  if (!voice.localService) return 55;
  // Any remaining local voice
  return 30;
}

/**
 * Get the best available voice for a language.
 * Call this after voices are loaded (use ensureVoicesLoaded first).
 */
export function getBestVoice(lang: 'el' | 'en'): SpeechSynthesisVoice | null {
  const voices = window.speechSynthesis.getVoices();
  if (!voices.length) return null;

  const langPrefix = lang === 'el' ? 'el' : 'en';

  const candidates = voices
    .filter(v => v.lang.replace('_', '-').toLowerCase().startsWith(langPrefix))
    .filter(v => !NOVELTY_VOICES.some(n => v.name.includes(n)))
    .sort((a, b) => getVoiceQuality(b) - getVoiceQuality(a));

  return candidates[0] || voices.find(v => v.lang.replace('_', '-').startsWith(langPrefix)) || null;
}

/**
 * Returns true if the selected voice is a cloud/remote voice
 * (needs the Chrome pause/resume workaround).
 */
export function isCloudVoice(voice: SpeechSynthesisVoice): boolean {
  return !voice.localService || voice.name.startsWith('Google');
}

/**
 * Ensure voices are loaded (they load async in Chrome).
 * Returns a promise that resolves with the voice list.
 */
export function ensureVoicesLoaded(): Promise<SpeechSynthesisVoice[]> {
  return new Promise((resolve) => {
    const voices = window.speechSynthesis.getVoices();
    if (voices.length > 0) {
      resolve(voices);
      return;
    }
    // Chrome loads voices async
    const handler = () => {
      const v = window.speechSynthesis.getVoices();
      if (v.length > 0) {
        resolve(v);
      }
    };
    window.speechSynthesis.onvoiceschanged = handler;
    // Fallback timeout
    setTimeout(() => resolve(window.speechSynthesis.getVoices()), 2000);
  });
}

/**
 * Create a tuned utterance with warm, human-sounding settings.
 * Also returns a cleanup function for the Chrome 15s bug workaround.
 */
export function createWarmUtterance(
  text: string,
  lang: 'el' | 'en',
  rate: number = 1,
  voice?: SpeechSynthesisVoice | null
): { utterance: SpeechSynthesisUtterance; startChromeFix: () => () => void } {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang === 'el' ? 'el-GR' : 'en-US';

  // Warm, sweet tone — slightly lower pitch, comfortable rate
  utterance.pitch = 1.0;      // Keep natural for best quality
  utterance.rate = rate * 0.95; // Slightly slower = more conversational
  utterance.volume = 0.92;     // Slightly below max = softer, more pleasant

  if (voice) {
    utterance.voice = voice;
    // Premium/Enhanced/Natural voices sound best at default pitch
    // Only lower pitch for basic voices
    const quality = getVoiceQuality(voice);
    if (quality < 65) {
      utterance.pitch = 0.95; // Slightly warmer for basic voices
    }
  }

  // Chrome 15-second bug workaround for cloud voices
  const startChromeFix = () => {
    let intervalId: ReturnType<typeof setInterval> | null = null;
    const isAndroid = /Android/i.test(navigator.userAgent);

    if (voice && isCloudVoice(voice) && !isAndroid) {
      intervalId = setInterval(() => {
        if (!window.speechSynthesis.speaking) {
          if (intervalId) clearInterval(intervalId);
        } else {
          window.speechSynthesis.pause();
          window.speechSynthesis.resume();
        }
      }, 13000);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  };

  return { utterance, startChromeFix };
}

/**
 * Get a human-readable label for the current voice.
 */
export function getVoiceLabel(voice: SpeechSynthesisVoice | null): string {
  if (!voice) return '';
  const name = voice.name;
  if (name.includes('Premium')) return '✨ Premium';
  if (name.includes('Enhanced')) return '✨ Enhanced';
  if (name.includes('Natural')) return '✨ Natural';
  if (name.startsWith('Google')) return '☁️ Google';
  return '';
}

/**
 * Strip HTML tags and extract readable text.
 * Useful for eBook content that's stored as HTML.
 */
export function htmlToPlainText(html: string): string {
  const div = document.createElement('div');
  div.innerHTML = html;
  // Remove script/style elements
  div.querySelectorAll('script, style, img, svg').forEach(el => el.remove());
  return div.textContent || div.innerText || '';
}

/**
 * Extract readable paragraphs from HTML content.
 * Returns array of text blocks suitable for TTS.
 */
export function htmlToParagraphs(html: string): string[] {
  const div = document.createElement('div');
  div.innerHTML = html;
  // Remove non-text elements
  div.querySelectorAll('script, style, img, svg, br').forEach(el => el.remove());

  const blocks: string[] = [];
  const blockElements = div.querySelectorAll('p, h1, h2, h3, h4, h5, h6, li, blockquote, td');

  if (blockElements.length > 0) {
    blockElements.forEach(el => {
      const text = (el.textContent || '').trim();
      if (text.length > 2) { // Skip tiny fragments
        blocks.push(text);
      }
    });
  }

  // Fallback: if no block elements found, split by newlines
  if (blocks.length === 0) {
    const fullText = div.textContent || '';
    return fullText.split(/\n+/).map(s => s.trim()).filter(s => s.length > 2);
  }

  return blocks;
}
