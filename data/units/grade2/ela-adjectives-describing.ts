/**
 * Β' Δημοτικού · English Language Arts · Adjectives
 * =================================================
 * Original questions for a native English-speaking child of 7–8 (US Grade 2 / UK Year 2–3).
 * What the unit covers, in order:
 *   1–4   describing words: what an adjective does, pick the adjective, spot the one that is not
 *   5–9   which word describes the noun in a sentence, adjectives after «was», counting them
 *   10–13 opposites: big/small, hot/cold, fast/slow, and a pair that really is opposite
 *   14–18 choose the best adjective for the sentence; two adjectives with a comma between them
 * Distractors are the real mix-ups: the verb or the noun next to the adjective, a word that
 * means the same instead of the opposite (huge, quick), and the comma in the wrong spot.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE2_ELA_ADJECTIVES_DESCRIBING: QuizQuestion[] = [
  // ── 1–4: describing words ──────────────────────────────────────────────────
  {
    q: { el: 'Τι κάνει ένα επίθετο (adjective);', en: 'What does an adjective do?' },
    options: {
      el: ['It names a thing', 'It describes a noun', 'It shows an action', 'It joins two sentences'],
      en: ['It names a thing', 'It describes a noun', 'It shows an action', 'It joins two sentences'],
    },
    correct: 1,
    explanation: {
      el: 'Το επίθετο (adjective) είναι λέξη που περιγράφει. Λέει περισσότερα για ένα ουσιαστικό: a red hat, a tiny bug, a happy dog.',
      en: 'An adjective is a describing word. It tells you more about a noun: a red hat, a tiny bug, a happy dog.',
    },
  },
  {
    q: { el: 'Ποια λέξη είναι επίθετο;', en: 'Which word is an adjective?' },
    options: { el: ['run', 'table', 'fluffy', 'quickly'], en: ['run', 'table', 'fluffy', 'quickly'] },
    correct: 2,
    explanation: {
      el: 'Το fluffy είναι επίθετο· περιγράφει πώς φαίνεται ή πώς νιώθεται κάτι, όπως a fluffy cloud. Το run είναι ρήμα και το table ουσιαστικό.',
      en: 'Fluffy is an adjective; it describes how something looks or feels, like a fluffy cloud. Run is a verb and table is a noun.',
    },
  },
  {
    q: { el: 'Ποια λέξη είναι επίθετο;', en: 'Which of these words is an adjective?' },
    options: { el: ['soft', 'jump', 'cat', 'under'], en: ['soft', 'jump', 'cat', 'under'] },
    correct: 0,
    explanation: {
      el: 'Το soft είναι επίθετο: a soft pillow, a soft blanket. Το jump είναι ρήμα, το cat ουσιαστικό και το under λέει πού.',
      en: 'Soft is an adjective: a soft pillow, a soft blanket. Jump is a verb, cat is a noun, and under tells where.',
    },
  },
  {
    q: { el: 'Ποια λέξη ΔΕΝ είναι επίθετο;', en: 'Which word is NOT an adjective?' },
    options: { el: ['tiny', 'bright', 'cold', 'sing'], en: ['tiny', 'bright', 'cold', 'sing'] },
    correct: 3,
    explanation: {
      el: 'Το sing είναι ρήμα, λέξη που δείχνει πράξη. Τα tiny, bright και cold είναι επίθετα που περιγράφουν πράγματα.',
      en: 'Sing is a verb, a doing word. Tiny, bright, and cold are all adjectives that describe things.',
    },
  },

  // ── 5–9: which word describes the noun ─────────────────────────────────────
  {
    q: { el: '«The red ball rolled away.» Ποια λέξη περιγράφει την μπάλα;', en: '«The red ball rolled away.» Which word describes the ball?' },
    options: { el: ['rolled', 'away', 'red', 'the'], en: ['rolled', 'away', 'red', 'the'] },
    correct: 2,
    explanation: {
      el: 'Το red περιγράφει την μπάλα· μας λέει το χρώμα της. Το rolled είναι το ρήμα, αυτό που έκανε η μπάλα.',
      en: 'Red describes the ball; it tells us its color. Rolled is the verb, the thing the ball did.',
    },
  },
  {
    q: { el: '«A tiny bird sat on the branch.» Ποια λέξη είναι το επίθετο;', en: '«A tiny bird sat on the branch.» Which word is the adjective?' },
    options: { el: ['tiny', 'bird', 'sat', 'branch'], en: ['tiny', 'bird', 'sat', 'branch'] },
    correct: 0,
    explanation: {
      el: 'Το tiny είναι το επίθετο· μας λέει πόσο μικρό είναι το πουλί. Τα bird και branch είναι ουσιαστικά, και το sat ρήμα.',
      en: 'Tiny is the adjective; it tells us how small the bird is. Bird and branch are nouns, and sat is the verb.',
    },
  },
  {
    q: { el: '«Grandpa told a funny story.» Ποια λέξη περιγράφει το «funny»;', en: '«Grandpa told a funny story.» Which word does «funny» describe?' },
    options: { el: ['Grandpa', 'told', 'story', 'a'], en: ['Grandpa', 'told', 'story', 'a'] },
    correct: 2,
    explanation: {
      el: 'Το funny περιγράφει την ιστορία (story). Ρώτα «Τι ήταν αστείο;» και η απάντηση είναι η ιστορία, όχι ο παππούς.',
      en: 'Funny describes the story. Ask «What was funny?» and the answer is the story, not Grandpa.',
    },
  },
  {
    q: { el: '«The soup was hot.» Ποια λέξη λέει πώς ήταν η σούπα;', en: '«The soup was hot.» Which word tells what the soup was like?' },
    options: { el: ['soup', 'was', 'the', 'hot'], en: ['soup', 'was', 'the', 'hot'] },
    correct: 3,
    explanation: {
      el: 'Το hot είναι το επίθετο. Το επίθετο μπορεί να έρχεται και μετά το ουσιαστικό: the soup was hot, the sky is blue.',
      en: 'Hot is the adjective. An adjective can come after the noun too: the soup was hot, the sky is blue.',
    },
  },
  {
    q: { el: '«Leo has a shiny new bike.» Πόσα επίθετα περιγράφουν το ποδήλατο;', en: '«Leo has a shiny new bike.» How many adjectives describe the bike?' },
    options: { el: ['1', '2', '3', '0'], en: ['1', '2', '3', '0'] },
    correct: 1,
    explanation: {
      el: 'Υπάρχουν 2 επίθετα: shiny και new. Και τα δύο μας λένε περισσότερα για το ποδήλατο.',
      en: 'There are 2 adjectives: shiny and new. Both tell us more about the bike.',
    },
  },

  // ── 10–13: opposites ───────────────────────────────────────────────────────
  {
    q: { el: 'Ποιο είναι το αντίθετο του «big»;', en: 'What is the opposite of «big»?' },
    options: { el: ['small', 'tall', 'wide', 'huge'], en: ['small', 'tall', 'wide', 'huge'] },
    correct: 0,
    explanation: {
      el: 'Τα big και small είναι αντίθετα. Το huge σημαίνει πολύ μεγάλο, άρα δεν είναι το αντίθετο.',
      en: 'Big and small are opposites. Huge means very big, so it is not the opposite.',
    },
  },
  {
    q: { el: 'Ποιο είναι το αντίθετο του «hot»;', en: 'What is the opposite of «hot»?' },
    options: { el: ['warm', 'cold', 'wet', 'dry'], en: ['warm', 'cold', 'wet', 'dry'] },
    correct: 1,
    explanation: {
      el: 'Τα hot και cold είναι αντίθετα. Το warm είναι κοντά στο hot, όχι το αντίθετό του. Τα wet και dry είναι άλλο ζευγάρι αντιθέτων.',
      en: 'Hot and cold are opposites. Warm is close to hot, not the opposite. Wet and dry are a different pair of opposites.',
    },
  },
  {
    q: { el: 'Ποιο είναι το αντίθετο του «fast»;', en: 'What is the opposite of «fast»?' },
    options: { el: ['quick', 'tall', 'slow', 'soft'], en: ['quick', 'tall', 'slow', 'soft'] },
    correct: 2,
    explanation: {
      el: 'Τα fast και slow είναι αντίθετα. Το quick σημαίνει το ίδιο με το fast.',
      en: 'Fast and slow are opposites. Quick means the same as fast.',
    },
  },
  {
    q: { el: 'Ποιο ζευγάρι λέξεων είναι αντίθετα;', en: 'Which pair of words are opposites?' },
    options: {
      el: ['happy and glad', 'big and large', 'loud and noisy', 'wet and dry'],
      en: ['happy and glad', 'big and large', 'loud and noisy', 'wet and dry'],
    },
    correct: 3,
    explanation: {
      el: 'Τα wet και dry είναι αντίθετα. Τα άλλα ζευγάρια σημαίνουν σχεδόν το ίδιο: happy και glad, big και large, loud και noisy.',
      en: 'Wet and dry are opposites. The other pairs mean almost the same thing: happy and glad, big and large, loud and noisy.',
    },
  },

  // ── 14–18: the best adjective, and two adjectives with a comma ─────────────
  {
    q: { el: 'Διάλεξε το καλύτερο επίθετο: «The ___ kitten purred on my lap.»', en: 'Choose the best adjective: «The ___ kitten purred on my lap.»' },
    options: { el: ['square', 'sleepy', 'salty', 'wooden'], en: ['square', 'sleepy', 'salty', 'wooden'] },
    correct: 1,
    explanation: {
      el: 'Ένα sleepy (νυσταγμένο) γατάκι γουργουρίζει στα πόδια σου. Τα square, salty και wooden δεν ταιριάζουν σε γατάκι.',
      en: 'A sleepy kitten purrs on your lap. Square, salty, and wooden do not make sense for a kitten.',
    },
  },
  {
    q: { el: 'Διάλεξε το καλύτερο επίθετο: «It was a ___ day, so we wore our coats.»', en: 'Choose the best adjective: «It was a ___ day, so we wore our coats.»' },
    options: { el: ['sunny', 'hot', 'chilly', 'warm'], en: ['sunny', 'hot', 'chilly', 'warm'] },
    correct: 2,
    explanation: {
      el: 'Φοράς παλτό μια chilly (κρύα) μέρα. Τις sunny, hot και warm μέρες δεν χρειάζεται παλτό.',
      en: 'You wear a coat on a chilly day. Sunny, hot, and warm days do not need coats.',
    },
  },
  {
    q: { el: 'Διάλεξε το καλύτερο επίθετο: «The lemon tasted ___.»', en: 'Choose the best adjective: «The lemon tasted ___.»' },
    options: { el: ['green', 'loud', 'soft', 'sour'], en: ['green', 'loud', 'soft', 'sour'] },
    correct: 3,
    explanation: {
      el: 'Το λεμόνι έχει γεύση sour (ξινή). Το green λέει το χρώμα, όχι τη γεύση, και τα loud και soft δεν είναι γεύσεις.',
      en: 'A lemon tastes sour. Green tells the color, not the taste, and loud and soft are not tastes at all.',
    },
  },
  {
    q: { el: 'Ποια πρόταση χρησιμοποιεί σωστά το κόμμα ανάμεσα σε δύο επίθετα;', en: 'Which sentence uses a comma correctly between two adjectives?' },
    options: {
      el: ['I saw a big, brown dog.', 'I saw a big brown, dog.', 'I saw a, big brown dog.', 'I saw, a big brown dog.'],
      en: ['I saw a big, brown dog.', 'I saw a big brown, dog.', 'I saw a, big brown dog.', 'I saw, a big brown dog.'],
    },
    correct: 0,
    explanation: {
      el: 'Όταν δύο επίθετα περιγράφουν το ίδιο ουσιαστικό, μπαίνει κόμμα ανάμεσά τους: a big, brown dog. Το κόμμα δεν μπαίνει ποτέ ακριβώς πριν από το ουσιαστικό.',
      en: 'When two adjectives describe the same noun, a comma goes between them: a big, brown dog. The comma never goes right before the noun.',
    },
  },
  {
    q: { el: 'Πού μπαίνει το κόμμα; «She wore a long warm scarf.»', en: 'Where does the comma go? «She wore a long warm scarf.»' },
    options: {
      el: ['a long, warm scarf', 'a, long warm scarf', 'a long warm, scarf', 'a long warm scarf,'],
      en: ['a long, warm scarf', 'a, long warm scarf', 'a long warm, scarf', 'a long warm scarf,'],
    },
    correct: 0,
    explanation: {
      el: 'Τα long και warm περιγράφουν και τα δύο το κασκόλ, άρα το κόμμα μπαίνει ανάμεσά τους: a long, warm scarf.',
      en: 'Long and warm both describe the scarf, so the comma sits between them: a long, warm scarf.',
    },
  },
];
