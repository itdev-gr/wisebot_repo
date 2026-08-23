/**
 * Β' Δημοτικού · Γλώσσα · Επίθετα
 * ================================
 * Original questions for a child of 7–8 (curriculum topics only — nothing from ebooks.edu.gr).
 * What the unit covers, in order:
 *   1–5   what an adjective is: the word that tells us how something is (describing words)
 *   6–12  the adjective follows the noun: gender (ο/η/το) and number (one or many)
 *   13–18 opposites: μεγάλος–μικρός, ζεστός–κρύος, ψηλός–κοντός, γρήγορος–αργός…
 * Distractors are the real slips: the wrong gender ending, singular for plural,
 * a near-meaning word instead of the true opposite. The UI shuffles options.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE2_GREEK_ADJECTIVES: QuizQuestion[] = [
  // ── 1–5: what an adjective is ───────────────────────────────────────────────
  {
    q: { el: '«Η κόκκινη μπάλα». Ποια λέξη μάς λέει πώς είναι η μπάλα;', en: '«Η κόκκινη μπάλα» (the red ball). Which word tells us what the ball is like?' },
    options: { el: ['κόκκινη', 'η', 'μπάλα', 'και'], en: ['κόκκινη', 'η', 'μπάλα', 'και'] },
    correct: 0,
    explanation: {
      el: 'Η λέξη «κόκκινη» μάς λέει πώς είναι η μπάλα. Οι λέξεις που λένε πώς είναι κάτι λέγονται επίθετα.',
      en: '«κόκκινη» (red) tells us what the ball is like. Words that say what something is like are called adjectives.',
    },
  },
  {
    q: { el: 'Ποια από τις λέξεις είναι επίθετο;', en: 'Which of these words is an adjective?' },
    options: { el: ['τρέχει', 'ψηλός', 'σπίτι', 'εμείς'], en: ['τρέχει', 'ψηλός', 'σπίτι', 'εμείς'] },
    correct: 1,
    explanation: {
      el: 'Το «ψηλός» λέει πώς είναι κάποιος. Το «τρέχει» λέει τι κάνει, το «σπίτι» είναι πράγμα.',
      en: '«ψηλός» (tall) says what someone is like. «τρέχει» (runs) is an action and «σπίτι» (house) is a thing.',
    },
  },
  {
    q: { el: '«Ο σκύλος είναι ___.» Ποια λέξη λέει πώς είναι ο σκύλος;', en: '«Ο σκύλος είναι ___.» (The dog is ___.) Which word says what the dog is like?' },
    options: { el: ['τρώει', 'γρήγορος', 'κόκαλο', 'χθες'], en: ['τρώει', 'γρήγορος', 'κόκαλο', 'χθες'] },
    correct: 1,
    explanation: {
      el: '«Ο σκύλος είναι γρήγορος.» Το «γρήγορος» είναι επίθετο, γιατί λέει πώς είναι ο σκύλος.',
      en: '«Ο σκύλος είναι γρήγορος» (The dog is fast). «γρήγορος» is an adjective because it says what the dog is like.',
    },
  },
  {
    q: { el: 'Ποια λέξη ΔΕΝ είναι επίθετο;', en: 'Which word is NOT an adjective?' },
    options: { el: ['μικρός', 'όμορφος', 'παιδί', 'ζεστός'], en: ['μικρός', 'όμορφος', 'παιδί', 'ζεστός'] },
    correct: 2,
    explanation: {
      el: 'Το «παιδί» είναι ουσιαστικό — ένα πρόσωπο. Τα «μικρός», «όμορφος», «ζεστός» λένε πώς είναι κάτι.',
      en: '«παιδί» (child) is a noun — a person. «μικρός», «όμορφος», «ζεστός» (small, pretty, warm) say what something is like.',
    },
  },
  {
    q: { el: 'Πόσα επίθετα έχει η πρόταση «Η Ελένη έχει ένα μικρό, άσπρο γατάκι»;', en: 'How many adjectives are in «Η Ελένη έχει ένα μικρό, άσπρο γατάκι» (Eleni has a small, white kitten)?' },
    options: { el: ['ένα', 'δύο', 'τρία', 'κανένα'], en: ['one', 'two', 'three', 'none'] },
    correct: 1,
    explanation: {
      el: 'Δύο: «μικρό» και «άσπρο». Και τα δύο λένε πώς είναι το γατάκι.',
      en: 'Two: «μικρό» (small) and «άσπρο» (white). Both say what the kitten is like.',
    },
  },

  // ── 6–12: the adjective follows the noun (gender and number) ───────────────
  {
    q: { el: '«Η ___ γάτα κοιμάται.» Ποια λέξη ταιριάζει;', en: '«Η ___ γάτα κοιμάται.» (The black cat is sleeping.) Which form fits?' },
    options: { el: ['μαύρος', 'μαύρη', 'μαύρο', 'μαύροι'], en: ['μαύρος', 'μαύρη', 'μαύρο', 'μαύροι'] },
    correct: 1,
    explanation: {
      el: 'Η γάτα είναι θηλυκό (η), άρα και το επίθετο γίνεται θηλυκό: η μαύρη γάτα.',
      en: '«γάτα» is feminine (η), so the adjective takes the feminine ending: η μαύρη γάτα.',
    },
  },
  {
    q: { el: '«Το ___ παιδί παίζει.» Ποια λέξη ταιριάζει;', en: '«Το ___ παιδί παίζει.» (The good child is playing.) Which form fits?' },
    options: { el: ['καλός', 'καλή', 'καλό', 'καλά'], en: ['καλός', 'καλή', 'καλό', 'καλά'] },
    correct: 2,
    explanation: {
      el: 'Το παιδί είναι ουδέτερο (το), άρα λέμε «το καλό παιδί».',
      en: '«παιδί» is neuter (το), so we say «το καλό παιδί».',
    },
  },
  {
    q: { el: '«Ο ___ κήπος έχει λουλούδια.» Ποια λέξη ταιριάζει;', en: '«Ο ___ κήπος έχει λουλούδια.» (The big garden has flowers.) Which form fits?' },
    options: { el: ['μεγάλη', 'μεγάλο', 'μεγάλος', 'μεγάλες'], en: ['μεγάλη', 'μεγάλο', 'μεγάλος', 'μεγάλες'] },
    correct: 2,
    explanation: {
      el: 'Ο κήπος είναι αρσενικό (ο), άρα λέμε «ο μεγάλος κήπος».',
      en: '«κήπος» is masculine (ο), so we say «ο μεγάλος κήπος».',
    },
  },
  {
    q: { el: '«Οι ___ μπάλες είναι στο κουτί.» Ποια λέξη ταιριάζει;', en: '«Οι ___ μπάλες είναι στο κουτί.» (The red balls are in the box.) Which form fits?' },
    options: { el: ['κόκκινη', 'κόκκινες', 'κόκκινος', 'κόκκινο'], en: ['κόκκινη', 'κόκκινες', 'κόκκινος', 'κόκκινο'] },
    correct: 1,
    explanation: {
      el: 'Οι μπάλες είναι πολλές, άρα και το επίθετο γίνεται πληθυντικός: οι κόκκινες μπάλες.',
      en: 'There are many balls, so the adjective goes to the plural too: οι κόκκινες μπάλες.',
    },
  },
  {
    q: { el: '«Τα ___ σπίτια έχουν πολλά παράθυρα.» Ποια λέξη ταιριάζει;', en: '«Τα ___ σπίτια έχουν πολλά παράθυρα.» (The tall houses have many windows.) Which form fits?' },
    options: { el: ['ψηλό', 'ψηλά', 'ψηλές', 'ψηλοί'], en: ['ψηλό', 'ψηλά', 'ψηλές', 'ψηλοί'] },
    correct: 1,
    explanation: {
      el: 'Ένα σπίτι: το ψηλό σπίτι. Πολλά σπίτια: τα ψηλά σπίτια. Το -ο γίνεται -α.',
      en: 'One house: το ψηλό σπίτι. Many houses: τα ψηλά σπίτια. The -ο ending becomes -α.',
    },
  },
  {
    q: { el: '«Οι ___ φίλοι μου ήρθαν.» Ποια λέξη ταιριάζει;', en: '«Οι ___ φίλοι μου ήρθαν.» (My good friends came.) Which form fits?' },
    options: { el: ['καλοί', 'καλές', 'καλά', 'καλός'], en: ['καλοί', 'καλές', 'καλά', 'καλός'] },
    correct: 0,
    explanation: {
      el: 'Ένας φίλος: ο καλός φίλος. Πολλοί φίλοι: οι καλοί φίλοι. Το -ος γίνεται -οι.',
      en: 'One friend: ο καλός φίλος. Many friends: οι καλοί φίλοι. The -ος ending becomes -οι.',
    },
  },
  {
    q: { el: 'Ποια φράση είναι σωστή;', en: 'Which phrase is correct?' },
    options: { el: ['το όμορφος λουλούδι', 'το όμορφο λουλούδι', 'το όμορφη λουλούδι', 'τα όμορφο λουλούδι'], en: ['το όμορφος λουλούδι', 'το όμορφο λουλούδι', 'το όμορφη λουλούδι', 'τα όμορφο λουλούδι'] },
    correct: 1,
    explanation: {
      el: 'Το λουλούδι είναι ένα και ουδέτερο (το), άρα: το όμορφο λουλούδι. Το επίθετο ακολουθεί πάντα το ουσιαστικό.',
      en: '«λουλούδι» (flower) is one and neuter (το), so: το όμορφο λουλούδι. The adjective always follows the noun.',
    },
  },

  // ── 13–18: opposites ───────────────────────────────────────────────────────
  {
    q: { el: 'Ποιο είναι το αντίθετο του «μεγάλος»;', en: 'What is the opposite of «μεγάλος» (big)?' },
    options: { el: ['μικρός', 'ψηλός', 'χοντρός', 'γρήγορος'], en: ['μικρός', 'ψηλός', 'χοντρός', 'γρήγορος'] },
    correct: 0,
    explanation: {
      el: 'Μεγάλος – μικρός. Ο ελέφαντας είναι μεγάλος, το ποντίκι είναι μικρό.',
      en: 'Μεγάλος – μικρός (big – small). An elephant is big, a mouse is small.',
    },
  },
  {
    q: { el: 'Ποιο είναι το αντίθετο του «ζεστός»;', en: 'What is the opposite of «ζεστός» (hot)?' },
    options: { el: ['βρεγμένος', 'κρύος', 'καθαρός', 'σκληρός'], en: ['βρεγμένος', 'κρύος', 'καθαρός', 'σκληρός'] },
    correct: 1,
    explanation: {
      el: 'Ζεστός – κρύος. Το τσάι είναι ζεστό, το παγωτό είναι κρύο.',
      en: 'Ζεστός – κρύος (hot – cold). Tea is hot, ice cream is cold.',
    },
  },
  {
    q: { el: 'Ποιο είναι το αντίθετο του «ψηλός»;', en: 'What is the opposite of «ψηλός» (tall)?' },
    options: { el: ['λεπτός', 'μικρός', 'αργός', 'κοντός'], en: ['λεπτός', 'μικρός', 'αργός', 'κοντός'] },
    correct: 3,
    explanation: {
      el: 'Ψηλός – κοντός. Η καμηλοπάρδαλη είναι ψηλή, ο σκαντζόχοιρος είναι κοντός.',
      en: 'Ψηλός – κοντός (tall – short). A giraffe is tall, a hedgehog is short.',
    },
  },
  {
    q: { el: '«Η χελώνα δεν είναι γρήγορη, είναι ___.»', en: '«Η χελώνα δεν είναι γρήγορη, είναι ___.» (The tortoise is not fast, it is ___.)' },
    options: { el: ['αργή', 'αργός', 'αργό', 'ήσυχη'], en: ['αργή', 'αργός', 'αργό', 'ήσυχη'] },
    correct: 0,
    explanation: {
      el: 'Γρήγορη – αργή. Η χελώνα είναι θηλυκό (η), άρα λέμε «αργή», όχι «αργός».',
      en: 'Γρήγορη – αργή (fast – slow). «χελώνα» is feminine (η), so we say «αργή», not «αργός».',
    },
  },
  {
    q: { el: 'Ποιο ζευγάρι λέξεων είναι αντίθετα;', en: 'Which pair of words are opposites?' },
    options: { el: ['μεγάλος – ψηλός', 'γλυκός – νόστιμος', 'καθαρός – βρόμικος', 'καθαρός – άσπρος'], en: ['μεγάλος – ψηλός', 'γλυκός – νόστιμος', 'καθαρός – βρόμικος', 'καθαρός – άσπρος'] },
    correct: 2,
    explanation: {
      el: 'Καθαρός – βρόμικος είναι αντίθετα. Τα άλλα ζευγάρια είναι λέξεις που μοιάζουν, όχι αντίθετες.',
      en: 'Καθαρός – βρόμικος (clean – dirty) are opposites. The other pairs are similar words, not opposites.',
    },
  },
  {
    q: { el: '«Η τσάντα του Νίκου δεν είναι βαριά, είναι ___.»', en: '«Η τσάντα του Νίκου δεν είναι βαριά, είναι ___.» (Nikos\' bag is not heavy, it is ___.)' },
    options: { el: ['μικρή', 'ελαφρύς', 'ελαφριά', 'άδεια'], en: ['μικρή', 'ελαφρύς', 'ελαφριά', 'άδεια'] },
    correct: 2,
    explanation: {
      el: 'Βαριά – ελαφριά. Η τσάντα είναι θηλυκό, άρα «ελαφριά», όχι «ελαφρύς».',
      en: 'Βαριά – ελαφριά (heavy – light). «τσάντα» is feminine, so «ελαφριά», not «ελαφρύς».',
    },
  },
];
