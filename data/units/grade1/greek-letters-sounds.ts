/**
 * Α' Δημοτικού · Γλώσσα · Γράμματα & Ήχοι
 * ========================================
 * Original questions for a child of 6–7 (curriculum topics only — nothing from textbooks).
 * What the unit covers, in the order a Α' class meets it:
 *   1–5   capital and small letters: matching pairs, where a capital goes (names)
 *   6–9   vowels and consonants: which is which, how many vowels, spotting them in a word
 *   10–14 letter–sound matching: first letter, last letter, the missing letter of a word
 *   15–18 alphabet order: first, next, last letter and a row in the right order
 * Distractors are letters that look or sound alike (Α/Λ/Δ, ν/Μ/Η, θ/φ/δ, κ/γ/χ).
 */
import type { QuizQuestion } from '../../../types';

export const GRADE1_GREEK_LETTERS_SOUNDS: QuizQuestion[] = [
  // ── 1–5: capital and small letters ─────────────────────────────────────────
  {
    q: { el: 'Ποιο είναι το κεφαλαίο του «α»;', en: 'Which is the capital letter of «α»?' },
    options: { el: ['Α', 'Λ', 'Δ', 'Β'], en: ['Α', 'Λ', 'Δ', 'Β'] },
    correct: 0,
    explanation: {
      el: 'Το μικρό «α» γράφεται κεφαλαίο «Α». Μοιάζει με σκηνή με μια γραμμούλα στη μέση.',
      en: 'Small «α» is written «Α» as a capital. It looks like a tent with a line in the middle.',
    },
  },
  {
    q: { el: 'Ποιο είναι το μικρό γράμμα του «Ε»;', en: 'Which is the small letter of «Ε»?' },
    options: { el: ['σ', 'ζ', 'ε', 'ω'], en: ['σ', 'ζ', 'ε', 'ω'] },
    correct: 2,
    explanation: {
      el: 'Το κεφαλαίο «Ε» γράφεται μικρό «ε». Το «ε» είναι σαν μικρό κύμα.',
      en: 'Capital «Ε» is written «ε» as a small letter. The «ε» looks like a little wave.',
    },
  },
  {
    q: { el: 'Ποιο είναι το κεφαλαίο του «ν»;', en: 'Which is the capital letter of «ν»?' },
    options: { el: ['Μ', 'Ν', 'Η', 'Π'], en: ['Μ', 'Ν', 'Η', 'Π'] },
    correct: 1,
    explanation: {
      el: 'Το μικρό «ν» γράφεται κεφαλαίο «Ν». Προσοχή: το «Μ» έχει δύο μύτες, το «Ν» μία.',
      en: 'Small «ν» is written «Ν» as a capital. Careful: «Μ» has two points, «Ν» has one.',
    },
  },
  {
    q: { el: 'Ποιο μικρό γράμμα ταιριάζει με το «Γ»;', en: 'Which small letter matches «Γ»?' },
    options: { el: ['τ', 'ρ', 'γ', 'χ'], en: ['τ', 'ρ', 'γ', 'χ'] },
    correct: 2,
    explanation: {
      el: 'Το «Γ» και το «γ» είναι το ίδιο γράμμα, το γάμα. Το μικρό «γ» έχει ουρίτσα προς τα κάτω.',
      en: '«Γ» and «γ» are the same letter, gamma. The small «γ» has a little tail going down.',
    },
  },
  {
    q: { el: 'Ποια λέξη αρχίζει με κεφαλαίο γράμμα;', en: 'Which word starts with a capital letter?' },
    options: { el: ['γάτα', 'Γιώργος', 'σπίτι', 'ήλιος'], en: ['γάτα', 'Γιώργος', 'σπίτι', 'ήλιος'] },
    correct: 1,
    explanation: {
      el: 'Τα ονόματα των ανθρώπων αρχίζουν πάντα με κεφαλαίο: Γιώργος, Μαρία, Ελένη.',
      en: 'People\'s names always start with a capital letter: Γιώργος, Μαρία, Ελένη.',
    },
  },

  // ── 6–9: vowels and consonants ─────────────────────────────────────────────
  {
    q: { el: 'Ποιο γράμμα είναι φωνήεν;', en: 'Which letter is a vowel?' },
    options: { el: ['κ', 'τ', 'σ', 'α'], en: ['κ', 'τ', 'σ', 'α'] },
    correct: 3,
    explanation: {
      el: 'Το «α» είναι φωνήεν. Τα φωνήεντα τα λέμε μόνα τους, με ανοιχτό στόμα: α, ε, η, ι, ο, υ, ω.',
      en: '«α» is a vowel. We can say vowels on their own, with an open mouth: α, ε, η, ι, ο, υ, ω.',
    },
  },
  {
    q: { el: 'Ποιο γράμμα είναι σύμφωνο;', en: 'Which letter is a consonant?' },
    options: { el: ['ο', 'ι', 'μ', 'ε'], en: ['ο', 'ι', 'μ', 'ε'] },
    correct: 2,
    explanation: {
      el: 'Το «μ» είναι σύμφωνο. Τα σύμφωνα θέλουν ένα φωνήεν δίπλα τους για να ακουστούν: μα, με, μο.',
      en: '«μ» is a consonant. Consonants need a vowel next to them to be heard: μα, με, μο.',
    },
  },
  {
    q: { el: 'Πόσα φωνήεντα έχει το ελληνικό αλφάβητο;', en: 'How many vowels does the Greek alphabet have?' },
    options: { el: ['5', '7', '10', '24'], en: ['5', '7', '10', '24'] },
    correct: 1,
    explanation: {
      el: 'Τα φωνήεντα είναι 7: α, ε, η, ι, ο, υ, ω. Όλα τα άλλα γράμματα είναι σύμφωνα.',
      en: 'There are 7 vowels: α, ε, η, ι, ο, υ, ω. All the other letters are consonants.',
    },
  },
  {
    q: { el: 'Στη λέξη «μάτι», ποια γράμματα είναι φωνήεντα;', en: 'In the word «μάτι», which letters are vowels?' },
    options: { el: ['μ και τ', 'ά και ι', 'μ και ά', 'τ και ι'], en: ['μ και τ', 'ά και ι', 'μ και ά', 'τ και ι'] },
    correct: 1,
    explanation: {
      el: 'Στο «μάτι» τα φωνήεντα είναι το «ά» και το «ι». Το «μ» και το «τ» είναι σύμφωνα.',
      en: 'In «μάτι» the vowels are «ά» and «ι». The «μ» and «τ» are consonants.',
    },
  },

  // ── 10–14: letter–sound matching ───────────────────────────────────────────
  {
    q: { el: 'Ποια λέξη αρχίζει με «μ»;', en: 'Which word starts with «μ»?' },
    options: { el: ['νερό', 'λεμόνι', 'μέλι', 'κότα'], en: ['νερό', 'λεμόνι', 'μέλι', 'κότα'] },
    correct: 2,
    explanation: {
      el: 'Μέλι: μ-έ-λ-ι. Ο πρώτος ήχος είναι «μ». Το λεμόνι έχει «μ», αλλά όχι στην αρχή.',
      en: 'Μέλι (honey): μ-έ-λ-ι. The first sound is «μ». Λεμόνι has a «μ», but not at the start.',
    },
  },
  {
    q: { el: 'Με ποιο γράμμα αρχίζει η λέξη «ψάρι»;', en: 'Which letter does the word «ψάρι» (fish) start with?' },
    options: { el: ['φ', 'π', 'ψ', 'σ'], en: ['φ', 'π', 'ψ', 'σ'] },
    correct: 2,
    explanation: {
      el: 'Ψάρι: ψ-ά-ρ-ι. Το «ψ» ακούγεται σαν «π» και «σ» μαζί, πολύ γρήγορα.',
      en: 'Ψάρι: ψ-ά-ρ-ι. The «ψ» sounds like «π» and «σ» said together, very fast.',
    },
  },
  {
    q: { el: 'Ποια λέξη αρχίζει με «θ»;', en: 'Which word starts with «θ»?' },
    options: { el: ['φεγγάρι', 'θάλασσα', 'δέντρο', 'σκύλος'], en: ['φεγγάρι', 'θάλασσα', 'δέντρο', 'σκύλος'] },
    correct: 1,
    explanation: {
      el: 'Θάλασσα: θ-ά-λ-α-σ-σ-α. Για το «θ» βάζουμε τη γλώσσα ανάμεσα στα δόντια και φυσάμε.',
      en: 'Θάλασσα (sea): θ-ά-λ-α-σ-σ-α. For «θ» we put the tongue between the teeth and blow.',
    },
  },
  {
    q: { el: 'Ποια λέξη τελειώνει σε «ς»;', en: 'Which word ends in «ς»?' },
    options: { el: ['γάτα', 'σπίτι', 'μήλο', 'ήλιος'], en: ['γάτα', 'σπίτι', 'μήλο', 'ήλιος'] },
    correct: 3,
    explanation: {
      el: 'Ήλιος: το τελευταίο γράμμα είναι το «ς». Το «ς» το γράφουμε μόνο στο τέλος της λέξης.',
      en: 'Ήλιος (sun): the last letter is «ς». We write «ς» only at the end of a word.',
    },
  },
  {
    q: { el: 'Ποιο γράμμα λείπει; «_άτα» (το ζωάκι που κάνει νιάου)', en: 'Which letter is missing? «_άτα» (the animal that says meow)' },
    options: { el: ['κ', 'γ', 'χ', 'τ'], en: ['κ', 'γ', 'χ', 'τ'] },
    correct: 1,
    explanation: {
      el: 'Γάτα: γ-ά-τ-α. Το «γ» είναι απαλό, βγαίνει από τον λαιμό. Το «κ» είναι πιο δυνατό.',
      en: 'Γάτα (cat): γ-ά-τ-α. The «γ» is soft and comes from the throat. The «κ» is harder.',
    },
  },

  // ── 15–18: alphabet order ──────────────────────────────────────────────────
  {
    q: { el: 'Ποιο γράμμα είναι πρώτο στο αλφάβητο;', en: 'Which letter comes first in the alphabet?' },
    options: { el: ['Γ', 'Α', 'Δ', 'Β'], en: ['Γ', 'Α', 'Δ', 'Β'] },
    correct: 1,
    explanation: {
      el: 'Το αλφάβητο αρχίζει με το «Α»: Α, Β, Γ, Δ… Γι\' αυτό το λέμε αλφά-βητο!',
      en: 'The alphabet starts with «Α»: Α, Β, Γ, Δ… That is why it is called the alpha-bet!',
    },
  },
  {
    q: { el: 'Ποιο γράμμα έρχεται μετά το «Δ»;', en: 'Which letter comes after «Δ»?' },
    options: { el: ['Γ', 'Ζ', 'Ε', 'Η'], en: ['Γ', 'Ζ', 'Ε', 'Η'] },
    correct: 2,
    explanation: {
      el: 'Α, Β, Γ, Δ, Ε. Μετά το «Δ» έρχεται το «Ε». Το «Γ» είναι πριν από το «Δ».',
      en: 'Α, Β, Γ, Δ, Ε. After «Δ» comes «Ε». The «Γ» comes before «Δ».',
    },
  },
  {
    q: { el: 'Ποιο είναι το τελευταίο γράμμα του αλφαβήτου;', en: 'Which is the last letter of the alphabet?' },
    options: { el: ['Ψ', 'Χ', 'Φ', 'Ω'], en: ['Ψ', 'Χ', 'Φ', 'Ω'] },
    correct: 3,
    explanation: {
      el: 'Το αλφάβητο τελειώνει με το «Ω»: …Φ, Χ, Ψ, Ω. Έχει 24 γράμματα, από το Α ως το Ω.',
      en: 'The alphabet ends with «Ω»: …Φ, Χ, Ψ, Ω. It has 24 letters, from Α to Ω.',
    },
  },
  {
    q: { el: 'Ποια σειρά γραμμάτων είναι στη σωστή αλφαβητική σειρά;', en: 'Which row of letters is in the correct alphabetical order?' },
    options: { el: ['κ, λ, μ, ν', 'λ, κ, ν, μ', 'μ, λ, κ, ν', 'κ, μ, λ, ν'], en: ['κ, λ, μ, ν', 'λ, κ, ν, μ', 'μ, λ, κ, ν', 'κ, μ, λ, ν'] },
    correct: 0,
    explanation: {
      el: 'Στο αλφάβητο πάμε: …ι, κ, λ, μ, ν, ξ… Άρα η σωστή σειρά είναι κ, λ, μ, ν.',
      en: 'In the alphabet we go: …ι, κ, λ, μ, ν, ξ… So the right order is κ, λ, μ, ν.',
    },
  },
];
