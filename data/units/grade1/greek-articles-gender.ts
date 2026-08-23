/**
 * Α' Δημοτικού · Γλώσσα · «Ο, Η, Το» — τα μικρά λεξάκια
 * =======================================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr). Language
 * level: a child of 6–7; one short sentence per stem, everyday words.
 *
 * What the unit covers, in order:
 *   1–7   the definite article ο / η / το with words the child knows
 *   8–12  ένας / μία / ένα — the same three "families" with "one"
 *   13–18 one vs many: οι / τα and the plural form of the noun
 */
import type { QuizQuestion } from '../../../types';

export const GRADE1_GREEK_ARTICLES_GENDER: QuizQuestion[] = [
  // ── 1–7: ο / η / το ────────────────────────────────────────────────────────
  {
    q: { el: 'Ποιο λεξάκι ταιριάζει; ___ μπάλα', en: 'Which little word fits? ___ μπάλα (ball)' },
    options: { el: ['ο', 'η', 'το', 'οι'], en: ['ο', 'η', 'το', 'οι'] },
    correct: 1,
    explanation: {
      el: 'Λέμε «η μπάλα». Οι λέξεις που τελειώνουν σε -α παίρνουν συνήθως «η».',
      en: 'We say «η μπάλα». Words ending in -α usually take «η».',
    },
  },
  {
    q: { el: 'Ποιο λεξάκι ταιριάζει; ___ σκύλος', en: 'Which little word fits? ___ σκύλος (dog)' },
    options: { el: ['η', 'το', 'ο', 'τα'], en: ['η', 'το', 'ο', 'τα'] },
    correct: 2,
    explanation: {
      el: 'Λέμε «ο σκύλος». Οι λέξεις που τελειώνουν σε -ος παίρνουν συνήθως «ο».',
      en: 'We say «ο σκύλος». Words ending in -ος usually take «ο».',
    },
  },
  {
    q: { el: 'Ποιο λεξάκι ταιριάζει; ___ παιδί', en: 'Which little word fits? ___ παιδί (child)' },
    options: { el: ['ο', 'η', 'το', 'οι'], en: ['ο', 'η', 'το', 'οι'] },
    correct: 2,
    explanation: {
      el: 'Λέμε «το παιδί». Οι λέξεις που τελειώνουν σε -ί παίρνουν «το».',
      en: 'We say «το παιδί». Words ending in -ί take «το».',
    },
  },
  {
    q: { el: 'Ποιο λεξάκι ταιριάζει; ___ γάτα', en: 'Which little word fits? ___ γάτα (cat)' },
    options: { el: ['το', 'η', 'ο', 'τα'], en: ['το', 'η', 'ο', 'τα'] },
    correct: 1,
    explanation: {
      el: 'Λέμε «η γάτα». Τελειώνει σε -α, όπως η μπάλα και η πόρτα.',
      en: 'We say «η γάτα». It ends in -α, like η μπάλα and η πόρτα.',
    },
  },
  {
    q: { el: 'Ποιο λεξάκι ταιριάζει; ___ βιβλίο', en: 'Which little word fits? ___ βιβλίο (book)' },
    options: { el: ['ο', 'το', 'η', 'οι'], en: ['ο', 'το', 'η', 'οι'] },
    correct: 1,
    explanation: {
      el: 'Λέμε «το βιβλίο». Οι λέξεις που τελειώνουν σε -ο παίρνουν «το».',
      en: 'We say «το βιβλίο». Words ending in -ο take «το».',
    },
  },
  {
    q: { el: 'Ποια λέξη θέλει μπροστά της «ο»;', en: 'Which word takes «ο» in front of it?' },
    options: { el: ['θάλασσα', 'μήλο', 'ήλιος', 'πόρτα'], en: ['θάλασσα (sea)', 'μήλο (apple)', 'ήλιος (sun)', 'πόρτα (door)'] },
    correct: 2,
    explanation: {
      el: '«Ο ήλιος» — τελειώνει σε -ος. Τα άλλα είναι «η θάλασσα», «το μήλο», «η πόρτα».',
      en: '«Ο ήλιος» — it ends in -ος. The others are «η θάλασσα», «το μήλο», «η πόρτα».',
    },
  },
  {
    q: { el: 'Ποια λέξη θέλει μπροστά της «το»;', en: 'Which word takes «το» in front of it?' },
    options: { el: ['καρέκλα', 'δέντρο', 'κήπος', 'μαμά'], en: ['καρέκλα (chair)', 'δέντρο (tree)', 'κήπος (garden)', 'μαμά (mum)'] },
    correct: 1,
    explanation: {
      el: '«Το δέντρο» — τελειώνει σε -ο. Τα άλλα είναι «η καρέκλα», «ο κήπος», «η μαμά».',
      en: '«Το δέντρο» — it ends in -ο. The others are «η καρέκλα», «ο κήπος», «η μαμά».',
    },
  },

  // ── 8–12: ένας / μία / ένα ─────────────────────────────────────────────────
  {
    q: { el: 'Ποιο ταιριάζει; ___ γιαγιά', en: 'Which fits? ___ γιαγιά (grandma)' },
    options: { el: ['ένας', 'ένα', 'μία', 'δύο'], en: ['ένας', 'ένα', 'μία', 'δύο'] },
    correct: 2,
    explanation: {
      el: 'Λέμε «μία γιαγιά». Όπου λέμε «η», λέμε και «μία»: η γιαγιά, μία γιαγιά.',
      en: 'We say «μία γιαγιά». Where we use «η», we use «μία»: η γιαγιά, μία γιαγιά.',
    },
  },
  {
    q: { el: 'Ποιο ταιριάζει; ___ αστέρι', en: 'Which fits? ___ αστέρι (star)' },
    options: { el: ['ένα', 'ένας', 'μία', 'δύο'], en: ['ένα', 'ένας', 'μία', 'δύο'] },
    correct: 0,
    explanation: {
      el: 'Λέμε «ένα αστέρι». Όπου λέμε «το», λέμε και «ένα»: το αστέρι, ένα αστέρι.',
      en: 'We say «ένα αστέρι». Where we use «το», we use «ένα»: το αστέρι, ένα αστέρι.',
    },
  },
  {
    q: { el: 'Ποιο ταιριάζει; ___ μπαμπάς', en: 'Which fits? ___ μπαμπάς (dad)' },
    options: { el: ['μία', 'ένα', 'ένας', 'δύο'], en: ['μία', 'ένα', 'ένας', 'δύο'] },
    correct: 2,
    explanation: {
      el: 'Λέμε «ένας μπαμπάς». Όπου λέμε «ο», λέμε και «ένας»: ο μπαμπάς, ένας μπαμπάς.',
      en: 'We say «ένας μπαμπάς». Where we use «ο», we use «ένας»: ο μπαμπάς, ένας μπαμπάς.',
    },
  },
  {
    q: { el: 'Η Ελένη έχει ___ κούκλα.', en: 'Eleni has ___ κούκλα (doll).' },
    options: { el: ['ένα', 'μία', 'ένας', 'δύο'], en: ['ένα', 'μία', 'ένας', 'δύο'] },
    correct: 1,
    explanation: {
      el: '«Μία κούκλα», γιατί λέμε «η κούκλα». Το «η» και το «μία» πάνε μαζί.',
      en: '«Μία κούκλα», because we say «η κούκλα». «Η» and «μία» go together.',
    },
  },
  {
    q: { el: 'Ποιο είναι σωστό;', en: 'Which one is correct?' },
    options: { el: ['ένας μήλο', 'μία μήλο', 'ένα μήλο', 'ένα μήλα'], en: ['ένας μήλο', 'μία μήλο', 'ένα μήλο', 'ένα μήλα'] },
    correct: 2,
    explanation: {
      el: '«Ένα μήλο» — λέμε «το μήλο», άρα «ένα μήλο». Το «μήλα» είναι πολλά, όχι ένα.',
      en: '«Ένα μήλο» — we say «το μήλο», so «ένα μήλο». «Μήλα» means many, not one.',
    },
  },

  // ── 13–18: one vs many ─────────────────────────────────────────────────────
  {
    q: { el: 'Ένα παιδί, πολλά ___', en: 'One παιδί (child), many ___' },
    options: { el: ['παιδιά', 'παιδί', 'παιδιού', 'παιδάκι'], en: ['παιδιά', 'παιδί', 'παιδιού', 'παιδάκι'] },
    correct: 0,
    explanation: {
      el: 'Ένα παιδί, πολλά παιδιά. Όταν είναι πολλά, η λέξη αλλάζει στο τέλος.',
      en: 'One παιδί, many παιδιά. When there are many, the end of the word changes.',
    },
  },
  {
    q: { el: 'Η γάτα είναι μία. Οι πολλές είναι: ___ γάτες', en: 'Η γάτα is one. Many are: ___ γάτες' },
    options: { el: ['η', 'το', 'οι', 'τα'], en: ['η', 'το', 'οι', 'τα'] },
    correct: 2,
    explanation: {
      el: 'Λέμε «οι γάτες». Το «η» γίνεται «οι» όταν είναι πολλές.',
      en: 'We say «οι γάτες». «Η» becomes «οι» when there are many.',
    },
  },
  {
    q: { el: 'Το βιβλίο είναι ένα. Τα πολλά είναι: ___ βιβλία', en: 'Το βιβλίο is one. Many are: ___ βιβλία' },
    options: { el: ['οι', 'το', 'η', 'τα'], en: ['οι', 'το', 'η', 'τα'] },
    correct: 3,
    explanation: {
      el: 'Λέμε «τα βιβλία». Το «το» γίνεται «τα» όταν είναι πολλά.',
      en: 'We say «τα βιβλία». «Το» becomes «τα» when there are many.',
    },
  },
  {
    q: { el: 'Ο σκύλος είναι ένας. Οι πολλοί είναι: ___ σκύλοι', en: 'Ο σκύλος is one. Many are: ___ σκύλοι' },
    options: { el: ['οι', 'ο', 'τα', 'η'], en: ['οι', 'ο', 'τα', 'η'] },
    correct: 0,
    explanation: {
      el: 'Λέμε «οι σκύλοι». Το «ο» γίνεται «οι» όταν είναι πολλοί.',
      en: 'We say «οι σκύλοι». «Ο» becomes «οι» when there are many.',
    },
  },
  {
    q: { el: 'Ποιο δείχνει πολλά;', en: 'Which one means many?' },
    options: { el: ['το μήλο', 'τα μήλα', 'ένα μήλο', 'η μηλιά'], en: ['το μήλο', 'τα μήλα', 'ένα μήλο', 'η μηλιά (the apple tree)'] },
    correct: 1,
    explanation: {
      el: '«Τα μήλα» είναι πολλά. «Το μήλο» και «ένα μήλο» είναι ένα. «Η μηλιά» είναι το δέντρο.',
      en: '«Τα μήλα» means many apples. «Το μήλο» and «ένα μήλο» mean one. «Η μηλιά» is the tree.',
    },
  },
  {
    q: { el: 'Η Μαρία βλέπει δύο ___.', en: 'Maria sees two ___.' },
    options: { el: ['γάτα', 'γάτες', 'γατάκι', 'γάτος'], en: ['γάτα', 'γάτες', 'γατάκι (kitten)', 'γάτος (tomcat)'] },
    correct: 1,
    explanation: {
      el: 'Δύο γάτες. Μετά το «δύο» η λέξη είναι πάντα για πολλά: μία γάτα, δύο γάτες.',
      en: 'Two γάτες. After «δύο» (two) the word is always plural: μία γάτα, δύο γάτες.',
    },
  },
];
