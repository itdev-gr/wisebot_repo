/**
 * WORD QUEST — words and question builder for the 30-second daily round
 * =====================================================================
 * The daily challenge needs the *same* four scrambled words for every child on
 * a given day, so none of this can come from `Math.random()`. Everything here is
 * a pure function of the round seed: the words picked, their order, and the
 * exact letter scramble.
 *
 * The word pool is the Word Quest pool (`components/games/WordQuest.tsx`), kept
 * here as data rather than inside the round component so the content team can
 * edit it without touching React. It is a copy on purpose: the full game keeps
 * its list private and the round must not import a component that pulls in
 * EconomyContext. When `data/games/wordquest.ts` exists, move `WORD_QUEST_WORDS`
 * there and re-point the import below — nothing else changes.
 *
 * Two adaptations to the 30-second format (the full game gives 8 words and no
 * per-word clock):
 *   - words over `MAX_ROUND_LETTERS` letters are left out; ΛΟΥΛΟΥΔΙ in a
 *     half-minute sprint is a guaranteed 0.
 *   - the four picked words are served shortest first, so a six-year-old gets
 *     the winnable ones while the clock is still generous and the long one is
 *     the stretch goal at the end.
 */
import { mulberry32, seededPick, seededShuffle } from '../../../utils/dailySeed';

export interface WordQuestWord {
  word: string;
  hint: string;
}

/** A word as the round serves it: the answer plus its deterministic scramble. */
export interface WordQuestQuestion extends WordQuestWord {
  /** The word's letters, shuffled from the seed. Never equal to `word`. */
  letters: string[];
}

/** Words per 30-second round — also the `total` the round reports. */
export const WORDS_PER_ROUND = 4;

/** Longer words are dropped from the round: unsolvable inside 30 seconds. */
export const MAX_ROUND_LETTERS = 7;

export const WORD_QUEST_WORDS: Record<'el' | 'en', ReadonlyArray<WordQuestWord>> = {
  el: [
    { word: 'ΗΛΙΟΣ', hint: '☀️ Λάμπει στον ουρανό' },
    { word: 'ΘΑΛΑΣΣΑ', hint: '🌊 Μπλε και αλμυρή' },
    { word: 'ΦΕΓΓΑΡΙ', hint: '🌙 Βγαίνει τη νύχτα' },
    { word: 'ΑΣΤΕΡΙ', hint: '⭐ Λάμπει τη νύχτα' },
    { word: 'ΒΙΒΛΙΟ', hint: '📚 Το διαβάζεις' },
    { word: 'ΣΧΟΛΕΙΟ', hint: '🏫 Εκεί μαθαίνεις' },
    { word: 'ΔΕΝΤΡΟ', hint: '🌳 Έχει φύλλα και κλαδιά' },
    { word: 'ΛΟΥΛΟΥΔΙ', hint: '🌸 Μυρίζει όμορφα' },
    { word: 'ΟΥΡΑΝΟΣ', hint: '☁️ Είναι από πάνω μας' },
    { word: 'ΜΟΥΣΙΚΗ', hint: '🎵 Την ακούς και χορεύεις' },
    { word: 'ΠΛΑΝΗΤΗΣ', hint: '🪐 Η Γη είναι ένας' },
    { word: 'ΡΟΜΠΟΤ', hint: '🤖 Έξυπνη μηχανή' },
    { word: 'ΕΠΙΣΤΗΜΗ', hint: '🔬 Πειράματα και γνώση' },
    { word: 'ΙΣΤΟΡΙΑ', hint: '🏛️ Τα παλιά χρόνια' },
    { word: 'ΚΑΡΔΙΑ', hint: '❤️ Χτυπάει στο στήθος' },
    { word: 'ΠΑΡΑΜΥΘΙ', hint: '🧚 Μια φορά κι έναν καιρό...' },
    { word: 'ΔΕΛΦΙΝΙ', hint: '🐬 Έξυπνο ζώο της θάλασσας' },
    { word: 'ΟΛΥΜΠΟΣ', hint: '⛰️ Το βουνό των θεών' },
    { word: 'ΑΘΗΝΑ', hint: '🏺 Πρωτεύουσα της Ελλάδας' },
    { word: 'ΦΙΛΟΣ', hint: '🤝 Παίζετε μαζί' },
  ],
  en: [
    { word: 'PLANET', hint: '🪐 Earth is one' },
    { word: 'OCEAN', hint: '🌊 Big blue water' },
    { word: 'ROBOT', hint: '🤖 Smart machine' },
    { word: 'SCIENCE', hint: '🔬 Experiments and knowledge' },
    { word: 'FRIEND', hint: '🤝 You play together' },
    { word: 'MUSIC', hint: '🎵 You dance to it' },
    { word: 'FLOWER', hint: '🌸 Smells nice' },
    { word: 'SCHOOL', hint: '🏫 Where you learn' },
    { word: 'STAR', hint: '⭐ Shines at night' },
    { word: 'MOON', hint: '🌙 Comes out at night' },
    { word: 'HISTORY', hint: '🏛️ The old times' },
    { word: 'DOLPHIN', hint: '🐬 Smart sea animal' },
    { word: 'RAINBOW', hint: '🌈 Seven colors' },
    { word: 'ROCKET', hint: '🚀 Flies to space' },
    { word: 'GARDEN', hint: '🌳 Plants grow here' },
    { word: 'CASTLE', hint: '🏰 Kings live here' },
    { word: 'WIZARD', hint: '🧙 Does magic' },
    { word: 'TREASURE', hint: '💎 Pirates look for it' },
    { word: 'JUNGLE', hint: '🦁 Wild green forest' },
    { word: 'BRIDGE', hint: '🌉 Crosses the river' },
  ],
};

/**
 * Scramble that is guaranteed not to hand back the original word. Each retry
 * consumes fresh values from `rng`, so it stays a pure function of the seed;
 * the swap at the end is the deterministic escape hatch for the (practically
 * unreachable) case where twelve shuffles all land on the word itself.
 */
function scramble(rng: () => number, word: string): string[] {
  const original = word.split('');
  // A word of one repeated letter has no other arrangement — leave it alone.
  if (new Set(original).size < 2) return original;
  for (let attempt = 0; attempt < 12; attempt++) {
    const letters = seededShuffle(rng, original);
    if (letters.join('') !== word) return letters;
  }
  const letters = original.slice();
  const other = letters.findIndex(ch => ch !== letters[0]); // ≥ 1, by the guard above
  [letters[0], letters[other]] = [letters[other], letters[0]];
  return letters;
}

/**
 * The round's questions, built entirely from `seed`. Two devices with the same
 * seed and language get the same words, in the same order, scrambled the same
 * way — which is the whole point of "Η Πρόκληση της Ημέρας".
 */
export function buildWordQuestRound(
  seed: number,
  lang: 'el' | 'en',
  count: number = WORDS_PER_ROUND,
): WordQuestQuestion[] {
  const rng = mulberry32(seed);
  const pool = WORD_QUEST_WORDS[lang].filter(w => w.word.length <= MAX_ROUND_LETTERS);
  const picked = seededPick(rng, pool, count);
  // Shortest first. The index tiebreak keeps the seeded order for equal lengths
  // without relying on the engine's sort being stable.
  const ordered = picked
    .map((entry, index) => ({ entry, index }))
    .sort((a, b) => a.entry.word.length - b.entry.word.length || a.index - b.index)
    .map(x => x.entry);
  return ordered.map(entry => ({
    word: entry.word,
    hint: entry.hint,
    letters: scramble(rng, entry.word),
  }));
}
