/**
 * Α' Δημοτικού · Αγγλικά · Ζωάκια / Animals
 * ===========================================
 * Original questions for a child of 6–7 who is just starting English.
 * What the unit covers, in order:
 *   1–8   the animal words: cat, dog, fish, bird, cow, lion, monkey, elephant
 *   9–12  "It's a…" and the little words a / an (an elephant!)
 *   13–16 big / small, with "It's a big…" / "It's a small…"
 *   17–18 putting it all together: a / an + big / small + animal
 * Options are English words, so options.el and options.en are the same arrays.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE1_ENGLISH_ANIMALS: QuizQuestion[] = [
  // ── 1–8: the animal words ──────────────────────────────────────────────────
  {
    q: { el: 'Πώς λέμε «γάτα» στα αγγλικά;', en: 'How do you say «γάτα» in English?' },
    options: { el: ['cat', 'dog', 'cow', 'bird'], en: ['cat', 'dog', 'cow', 'bird'] },
    correct: 0,
    explanation: {
      el: 'Η γάτα στα αγγλικά είναι «cat». Cat — κατ!',
      en: '«Γάτα» in English is “cat”.',
    },
  },
  {
    q: { el: 'Πώς λέμε «σκύλος» στα αγγλικά;', en: 'How do you say «σκύλος» in English?' },
    options: { el: ['cat', 'dog', 'fish', 'lion'], en: ['cat', 'dog', 'fish', 'lion'] },
    correct: 1,
    explanation: {
      el: 'Ο σκύλος στα αγγλικά είναι «dog». Dog — ντογκ!',
      en: '«Σκύλος» in English is “dog”.',
    },
  },
  {
    q: { el: 'Ποιο ζωάκι ζει στο νερό;', en: 'Which animal lives in the water?' },
    options: { el: ['bird', 'cow', 'fish', 'dog'], en: ['bird', 'cow', 'fish', 'dog'] },
    correct: 2,
    explanation: {
      el: 'Το ψάρι, «fish», ζει στο νερό. Fish — φις!',
      en: 'The fish lives in the water. Fish!',
    },
  },
  {
    q: { el: 'Ποιο ζωάκι πετάει;', en: 'Which animal can fly?' },
    options: { el: ['fish', 'cat', 'cow', 'bird'], en: ['fish', 'cat', 'cow', 'bird'] },
    correct: 3,
    explanation: {
      el: 'Το πουλί, «bird», πετάει. Bird — μπερντ!',
      en: 'The bird can fly. Bird!',
    },
  },
  {
    q: { el: 'Ποιο ζωάκι μάς δίνει γάλα;', en: 'Which animal gives us milk?' },
    options: { el: ['cow', 'lion', 'bird', 'fish'], en: ['cow', 'lion', 'bird', 'fish'] },
    correct: 0,
    explanation: {
      el: 'Η αγελάδα, «cow», μάς δίνει γάλα. Cow — κάου!',
      en: 'The cow gives us milk. Cow!',
    },
  },
  {
    q: { el: 'Πώς λέμε «λιοντάρι» στα αγγλικά;', en: 'How do you say «λιοντάρι» in English?' },
    options: { el: ['monkey', 'lion', 'elephant', 'cow'], en: ['monkey', 'lion', 'elephant', 'cow'] },
    correct: 1,
    explanation: {
      el: 'Το λιοντάρι στα αγγλικά είναι «lion». Lion — λάιον!',
      en: '«Λιοντάρι» in English is “lion”.',
    },
  },
  {
    q: { el: 'Ποιο ζωάκι σκαρφαλώνει στα δέντρα και τρώει μπανάνες;', en: 'Which animal climbs trees and eats bananas?' },
    options: { el: ['elephant', 'cow', 'fish', 'monkey'], en: ['elephant', 'cow', 'fish', 'monkey'] },
    correct: 3,
    explanation: {
      el: 'Η μαϊμού, «monkey», σκαρφαλώνει και τρώει μπανάνες. Monkey — μάνκι!',
      en: 'The monkey climbs and eats bananas. Monkey!',
    },
  },
  {
    q: { el: 'Ποιο ζωάκι έχει μεγάλη προβοσκίδα;', en: 'Which animal has a long trunk?' },
    options: { el: ['lion', 'monkey', 'elephant', 'dog'], en: ['lion', 'monkey', 'elephant', 'dog'] },
    correct: 2,
    explanation: {
      el: 'Ο ελέφαντας, «elephant», έχει μεγάλη προβοσκίδα. Elephant — έλεφαντ!',
      en: 'The elephant has a long trunk. Elephant!',
    },
  },

  // ── 9–12: It's a… / a / an ─────────────────────────────────────────────────
  {
    q: { el: 'Πώς λέμε «Είναι μια γάτα» στα αγγλικά;', en: 'How do you say «Είναι μια γάτα» in English?' },
    options: { el: ['It\'s a cat.', 'It\'s cat.', 'It\'s a dog.', 'Is a cat.'], en: ['It\'s a cat.', 'It\'s cat.', 'It\'s a dog.', 'Is a cat.'] },
    correct: 0,
    explanation: {
      el: 'Λέμε «It\'s a cat». Το «It\'s a…» σημαίνει «Είναι ένα/μια…».',
      en: 'We say “It\'s a cat”. “It\'s a…” means «Είναι ένα/μια…».',
    },
  },
  {
    q: { el: 'Ποια λέξη λείπει; It\'s ___ dog.', en: 'Which word is missing? It\'s ___ dog.' },
    options: { el: ['an', 'a', 'is', 'the cat'], en: ['an', 'a', 'is', 'the cat'] },
    correct: 1,
    explanation: {
      el: 'It\'s a dog. Πριν από τις περισσότερες λέξεις βάζουμε «a».',
      en: 'It\'s a dog. Before most words we put “a”.',
    },
  },
  {
    q: { el: 'Ποια λέξη λείπει; It\'s ___ elephant.', en: 'Which word is missing? It\'s ___ elephant.' },
    options: { el: ['a', 'is', 'an', 'it'], en: ['a', 'is', 'an', 'it'] },
    correct: 2,
    explanation: {
      el: 'It\'s an elephant. Όταν η λέξη αρχίζει από a, e, i, o, u βάζουμε «an».',
      en: 'It\'s an elephant. When the word starts with a, e, i, o, u we put “an”.',
    },
  },
  {
    q: { el: 'Ποιο είναι σωστό;', en: 'Which one is correct?' },
    options: { el: ['an lion', 'a lion', 'an dog', 'a elephant'], en: ['an lion', 'a lion', 'an dog', 'a elephant'] },
    correct: 1,
    explanation: {
      el: '«a lion» — το lion αρχίζει από l, άρα «a». Το elephant θέλει «an».',
      en: '“a lion” — lion starts with l, so “a”. Elephant needs “an”.',
    },
  },

  // ── 13–16: big / small ────────────────────────────────────────────────────
  {
    q: { el: 'Πώς λέμε «μεγάλος» στα αγγλικά;', en: 'How do you say «μεγάλος» in English?' },
    options: { el: ['small', 'cat', 'big', 'bird'], en: ['small', 'cat', 'big', 'bird'] },
    correct: 2,
    explanation: {
      el: 'Μεγάλος = «big». Μικρός = «small».',
      en: '«Μεγάλος» = “big”. «Μικρός» = “small”.',
    },
  },
  {
    q: { el: 'Πώς λέμε «μικρός» στα αγγλικά;', en: 'How do you say «μικρός» in English?' },
    options: { el: ['big', 'small', 'fish', 'an'], en: ['big', 'small', 'fish', 'an'] },
    correct: 1,
    explanation: {
      el: 'Μικρός = «small». Small — σμολ!',
      en: '«Μικρός» = “small”.',
    },
  },
  {
    q: { el: 'Ο ελέφαντας είναι μεγάλος. Ποιο είναι σωστό;', en: 'The elephant is big. Which one is correct?' },
    options: { el: ['It\'s a small elephant.', 'It\'s a big elephant.', 'It\'s an big elephant.', 'It\'s an small elephant.'], en: ['It\'s a small elephant.', 'It\'s a big elephant.', 'It\'s an big elephant.', 'It\'s an small elephant.'] },
    correct: 1,
    explanation: {
      el: 'It\'s a big elephant. Το «big» μπαίνει πριν από το ζωάκι, και πριν από το big βάζουμε «a».',
      en: 'It\'s a big elephant. “Big” goes before the animal, and before “big” we put “a”.',
    },
  },
  {
    q: { el: 'Ποιο ζωάκι είναι μικρό — «small»;', en: 'Which animal is small?' },
    options: { el: ['elephant', 'cow', 'lion', 'fish'], en: ['elephant', 'cow', 'lion', 'fish'] },
    correct: 3,
    explanation: {
      el: 'Το ψαράκι, «fish», είναι μικρό — small. Ο ελέφαντας, η αγελάδα και το λιοντάρι είναι big.',
      en: 'The fish is small. The elephant, the cow and the lion are big.',
    },
  },

  // ── 17–18: all together ───────────────────────────────────────────────────
  {
    q: { el: 'Πώς λέμε «Είναι ένας μικρός σκύλος» στα αγγλικά;', en: 'How do you say «Είναι ένας μικρός σκύλος» in English?' },
    options: { el: ['It\'s a dog small.', 'It\'s an small dog.', 'It\'s a small dog.', 'It\'s small a dog.'], en: ['It\'s a dog small.', 'It\'s an small dog.', 'It\'s a small dog.', 'It\'s small a dog.'] },
    correct: 2,
    explanation: {
      el: 'It\'s a small dog. Πρώτα «a», μετά «small», μετά «dog».',
      en: 'It\'s a small dog. First “a”, then “small”, then “dog”.',
    },
  },
  {
    q: { el: 'Ποια λέξη λείπει; It\'s ___ big elephant.', en: 'Which word is missing? It\'s ___ big elephant.' },
    options: { el: ['a', 'an', 'is', 'it'], en: ['a', 'an', 'is', 'it'] },
    correct: 0,
    explanation: {
      el: 'It\'s a big elephant. Κοιτάμε τη λέξη που έρχεται αμέσως μετά: «big» αρχίζει από b, άρα «a».',
      en: 'It\'s a big elephant. Look at the word right after: “big” starts with b, so “a”.',
    },
  },
];
