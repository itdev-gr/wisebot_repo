/**
 * GENERATED FILE — do not edit.
 *
 * Regenerate with:  node scripts/world/build-narration-manifest.mjs
 *
 * Every clip that has both audio and word timings, keyed by tag: the place or exhibit
 * id, a hyphen, the language. Narration is generated with Gemini TTS in the voice
 * 'Kore', the same voice as the Academy and the ebooks, by
 * scripts/world/generate-narration.mjs.
 */

const NARRATED = new Set<string>([
  'athens-acropolis-el',
  'athens-acropolis-en',
  'athens-acropolis-museum-el',
  'athens-acropolis-museum-en',
  'athens-agios-eleftherios-el',
  'athens-agios-eleftherios-en',
  'athens-ancient-agora-el',
  'athens-ancient-agora-en',
  'athens-benaki-toy-museum-el',
  'athens-benaki-toy-museum-en',
  'athens-kerameikos-el',
  'athens-kerameikos-en',
  'athens-lycabettus-el',
  'athens-lycabettus-en',
  'athens-national-archaeological-museum-el',
  'athens-national-archaeological-museum-en',
  'athens-national-garden-el',
  'athens-national-garden-en',
  'athens-old-royal-palace-el',
  'athens-old-royal-palace-en',
  'athens-olympieion-el',
  'athens-olympieion-en',
  'athens-panathenaic-stadium-el',
  'athens-panathenaic-stadium-en',
  'athens-parthenon-el',
  'athens-parthenon-en',
  'athens-planetarium-el',
  'athens-planetarium-en',
  'athens-snfcc-el',
  'athens-snfcc-en',
  'athens-temple-hephaestus-el',
  'athens-temple-hephaestus-en',
  'athens-tower-of-the-winds-el',
  'athens-tower-of-the-winds-en',
  'athens-varvakios-el',
  'athens-varvakios-en',
]);

/** Is there narration for this place or exhibit in this language? */
export function hasNarration(id: string, lang: string): boolean {
  return NARRATED.has(`${id}-${lang}`);
}

/** The audio file for a clip. Only call it when hasNarration() is true. */
export function narrationAudio(id: string, lang: string): string {
  return `/audio/world/${id}-${lang}.m4a`;
}

/** The word timings for a clip: { v: 1, words: [[start, end], ...] }. */
export function narrationTimings(id: string, lang: string): string {
  return `/audio/world/${id}-${lang}.json`;
}

export const NARRATION_COUNT = 36;
