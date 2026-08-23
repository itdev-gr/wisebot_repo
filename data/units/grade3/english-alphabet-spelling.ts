/**
 * Γ' Δημοτικού · Αγγλικά · Αλφάβητο & Spelling / The Alphabet & Spelling
 * =======================================================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a Greek child of 8–9 in the first year of English.
 *
 * What the unit covers, in order:
 *   1–5   the alphabet: how many letters, what comes before/after, first and last, order
 *   6–9   letter sounds: which letter a word starts with, the missing letter
 *   10–11 spelling names: Μαρία, Νίκος
 *   12–15 the question «How do you spell…?» and answering it letter by letter
 *   16–18 capital letters: the big form of a letter, names and sentences start with one
 *
 * Distractors are the real mistakes: neighbouring letters, Greek-looking spellings
 * (Nicos, Marea), letters that sound alike (S/C/Z), lowercase names.
 * The correct slot is not balanced on purpose — the UI shuffles options.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE3_ENGLISH_ALPHABET_SPELLING: QuizQuestion[] = [
  // ── 1–5: the alphabet ──────────────────────────────────────────────────────
  {
    q: { el: 'Πόσα γράμματα έχει το αγγλικό αλφάβητο;', en: 'How many letters does the English alphabet have?' },
    options: { el: ['26', '24', '25', '28'], en: ['26', '24', '25', '28'] },
    correct: 0,
    explanation: {
      el: 'Το αγγλικό αλφάβητο έχει 26 γράμματα, από το A μέχρι το Z. Το ελληνικό έχει 24.',
      en: 'The English alphabet has 26 letters, from A to Z. The Greek one has 24.',
    },
  },
  {
    q: { el: 'Ποιο γράμμα έρχεται μετά το C;', en: 'Which letter comes after C?' },
    options: { el: ['B', 'E', 'D', 'G'], en: ['B', 'E', 'D', 'G'] },
    correct: 2,
    explanation: {
      el: 'A, B, C, D… Μετά το C έρχεται το D.',
      en: 'A, B, C, D… After C comes D.',
    },
  },
  {
    q: { el: 'Ποιο γράμμα έρχεται πριν από το M;', en: 'Which letter comes before M?' },
    options: { el: ['L', 'N', 'K', 'O'], en: ['L', 'N', 'K', 'O'] },
    correct: 0,
    explanation: {
      el: '…J, K, L, M, N… Πριν από το M είναι το L και μετά το M είναι το N.',
      en: '…J, K, L, M, N… Before M is L, and after M is N.',
    },
  },
  {
    q: { el: 'Ποιο είναι το τελευταίο γράμμα του αγγλικού αλφαβήτου;', en: 'Which is the last letter of the English alphabet?' },
    options: { el: ['W', 'Y', 'X', 'Z'], en: ['W', 'Y', 'X', 'Z'] },
    correct: 3,
    explanation: {
      el: 'Το αλφάβητο τελειώνει έτσι: …W, X, Y, Z. Το Z είναι το τελευταίο.',
      en: 'The alphabet ends like this: …W, X, Y, Z. Z is the last one.',
    },
  },
  {
    q: { el: 'Ποια γράμματα είναι στη σωστή σειρά;', en: 'Which letters are in the correct order?' },
    options: { el: ['K, J, L', 'J, L, K', 'J, K, L', 'L, K, J'], en: ['K, J, L', 'J, L, K', 'J, K, L', 'L, K, J'] },
    correct: 2,
    explanation: {
      el: 'Η σωστή σειρά είναι J, K, L. Πες το αλφάβητο από την αρχή αν δεν είσαι σίγουρος: …H, I, J, K, L…',
      en: 'The right order is J, K, L. Say the alphabet from the start if you are not sure: …H, I, J, K, L…',
    },
  },

  // ── 6–9: letter sounds ─────────────────────────────────────────────────────
  {
    q: { el: 'Με ποιο γράμμα αρχίζει η λέξη «apple»;', en: 'Which letter does the word «apple» start with?' },
    options: { el: ['A', 'E', 'O', 'I'], en: ['A', 'E', 'O', 'I'] },
    correct: 0,
    explanation: {
      el: 'Apple (μήλο) αρχίζει με A. Το A εδώ ακούγεται σαν «α».',
      en: 'Apple starts with A. Here the A sounds like “a” in “cat”.',
    },
  },
  {
    q: { el: 'Ποιο γράμμα κάνει τον πρώτο ήχο στη λέξη «sun»;', en: 'Which letter makes the first sound in the word «sun»?' },
    options: { el: ['C', 'S', 'Z', 'X'], en: ['C', 'S', 'Z', 'X'] },
    correct: 1,
    explanation: {
      el: 'Sun (ήλιος) αρχίζει με S, που ακούγεται «σ». Το C και το Z μοιάζουν στον ήχο, αλλά η λέξη γράφεται με S.',
      en: 'Sun starts with S, which sounds like “s”. C and Z sound similar, but the word is written with S.',
    },
  },
  {
    q: { el: 'Ποια λέξη αρχίζει με το γράμμα B;', en: 'Which word starts with the letter B?' },
    options: { el: ['pen', 'dog', 'ball', 'cat'], en: ['pen', 'dog', 'ball', 'cat'] },
    correct: 2,
    explanation: {
      el: 'Ball (μπάλα) αρχίζει με B. Το B ακούγεται «μπ». Το pen αρχίζει με P, που μοιάζει αλλά είναι άλλο γράμμα.',
      en: 'Ball starts with B. B sounds like “b”. Pen starts with P, which looks similar but is a different letter.',
    },
  },
  {
    q: { el: 'Ποιο γράμμα λείπει από τη λέξη «c _ t» (γάτα);', en: 'Which letter is missing from the word «c _ t» (cat)?' },
    options: { el: ['e', 'u', 'o', 'a'], en: ['e', 'u', 'o', 'a'] },
    correct: 3,
    explanation: {
      el: 'Η γάτα στα αγγλικά είναι cat: c-a-t. Στη μέση είναι το a.',
      en: 'Cat is spelled c-a-t. The letter in the middle is a.',
    },
  },

  // ── 10–11: spelling names ──────────────────────────────────────────────────
  {
    q: { el: 'Πώς γράφεται το όνομα «Μαρία» στα αγγλικά, γράμμα γράμμα;', en: 'How is the name «Μαρία» spelled in English, letter by letter?' },
    options: { el: ['M-A-R-I-A', 'M-A-R-E-A', 'M-E-R-I-A', 'M-A-R-Y-A'], en: ['M-A-R-I-A', 'M-A-R-E-A', 'M-E-R-I-A', 'M-A-R-Y-A'] },
    correct: 0,
    explanation: {
      el: 'Maria: M-A-R-I-A. Το «ι» γίνεται I στα αγγλικά.',
      en: 'Maria: M-A-R-I-A. The Greek “ι” becomes I in English.',
    },
  },
  {
    q: { el: 'Ο Νίκος γράφει το όνομά του στα αγγλικά. Ποιο είναι σωστό;', en: 'Nikos writes his name in English. Which one is correct?' },
    options: { el: ['N-I-K-O-Z', 'N-E-K-O-S', 'N-I-C-O-S', 'N-I-K-O-S'], en: ['N-I-K-O-Z', 'N-E-K-O-S', 'N-I-C-O-S', 'N-I-K-O-S'] },
    correct: 3,
    explanation: {
      el: 'Nikos: N-I-K-O-S. Το «κ» γράφεται K και το «ς» στο τέλος γράφεται S.',
      en: 'Nikos: N-I-K-O-S. The Greek “κ” is written K and the final “ς” is written S.',
    },
  },

  // ── 12–15: How do you spell…? ──────────────────────────────────────────────
  {
    q: { el: 'Τι ρωτάμε όταν θέλουμε να μάθουμε τα γράμματα μιας λέξης;', en: 'What do we ask when we want to learn the letters of a word?' },
    options: { el: ['How do you spell it?', 'How do you say it?', 'What is it?', 'How old are you?'], en: ['How do you spell it?', 'How do you say it?', 'What is it?', 'How old are you?'] },
    correct: 0,
    explanation: {
      el: '«How do you spell it?» σημαίνει «Πώς το γράφεις;» — και η απάντηση είναι τα γράμματα, ένα ένα.',
      en: '“How do you spell it?” asks for the letters — and the answer is the letters, one by one.',
    },
  },
  {
    q: { el: 'Η δασκάλα ρωτάει: «How do you spell dog?» Ποια απάντηση είναι σωστή;', en: 'The teacher asks: «How do you spell dog?» Which answer is correct?' },
    options: { el: ['D-O-K', 'D-O-G', 'D-U-G', 'T-O-G'], en: ['D-O-K', 'D-O-G', 'D-U-G', 'T-O-G'] },
    correct: 1,
    explanation: {
      el: 'Dog (σκύλος): D-O-G. Στο τέλος είναι G, όχι K — το G ακούγεται «γκ».',
      en: 'Dog: D-O-G. The last letter is G, not K — G sounds like “g”.',
    },
  },
  {
    q: { el: 'How do you spell «book»;', en: 'How do you spell «book»?' },
    options: { el: ['B-O-O-K', 'B-U-K', 'B-O-K', 'B-O-O-C'], en: ['B-O-O-K', 'B-U-K', 'B-O-K', 'B-O-O-C'] },
    correct: 0,
    explanation: {
      el: 'Book (βιβλίο): B-O-O-K, με δύο O. Τα δύο O μαζί ακούγονται «ου».',
      en: 'Book: B-O-O-K, with two Os. Two Os together sound like “oo”.',
    },
  },
  {
    q: { el: 'Συμπλήρωσε την ερώτηση: «___ do you spell your name?»', en: 'Complete the question: «___ do you spell your name?»' },
    options: { el: ['What', 'Who', 'Where', 'How'], en: ['What', 'Who', 'Where', 'How'] },
    correct: 3,
    explanation: {
      el: '«How do you spell your name?» = «Πώς γράφεις το όνομά σου;». Το «How» σημαίνει «πώς».',
      en: '“How do you spell your name?” — “How” is the question word for spelling.',
    },
  },

  // ── 16–18: capital letters ─────────────────────────────────────────────────
  {
    q: { el: 'Ποιο είναι το κεφαλαίο του γράμματος «g»;', en: 'Which is the capital letter of «g»?' },
    options: { el: ['G', 'Q', 'J', 'D'], en: ['G', 'Q', 'J', 'D'] },
    correct: 0,
    explanation: {
      el: 'Το μικρό g γίνεται κεφαλαίο G. Κάθε γράμμα έχει μικρό και κεφαλαίο: a/A, b/B, g/G.',
      en: 'Small g becomes capital G. Every letter has a small and a capital form: a/A, b/B, g/G.',
    },
  },
  {
    q: { el: 'Ποιο όνομα είναι γραμμένο σωστά;', en: 'Which name is written correctly?' },
    options: { el: ['maria', 'MaRia', 'Maria', 'mARIA'], en: ['maria', 'MaRia', 'Maria', 'mARIA'] },
    correct: 2,
    explanation: {
      el: 'Τα ονόματα αρχίζουν πάντα με κεφαλαίο: Maria. Τα υπόλοιπα γράμματα είναι μικρά.',
      en: 'Names always start with a capital letter: Maria. The other letters are small.',
    },
  },
  {
    q: { el: 'Ποια πρόταση είναι γραμμένη σωστά;', en: 'Which sentence is written correctly?' },
    options: { el: ['my name is Nikos.', 'My name is Nikos.', 'My name is nikos.', 'my name is nikos.'], en: ['my name is Nikos.', 'My name is Nikos.', 'My name is nikos.', 'my name is nikos.'] },
    correct: 1,
    explanation: {
      el: 'Κεφαλαίο στην αρχή της πρότασης (My) και κεφαλαίο στο όνομα (Nikos).',
      en: 'A capital letter at the start of the sentence (My) and a capital letter for the name (Nikos).',
    },
  },
];
