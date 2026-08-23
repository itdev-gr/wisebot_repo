/**
 * Β' Δημοτικού · Γλώσσα · Ουσιαστικά & Άρθρα
 * ============================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a child of 7–8. One-sentence stems, everyday words.
 *
 * What the unit covers, in the order a Β' class meets it:
 *   1–4   what a noun is; masculine / feminine / neuter (ο, η, το)
 *   5–8   the definite article: picking ο / η / το, plural οι / οι / τα
 *   9–11  the indefinite article: ένας / μία / ένα
 *   12–15 singular → plural and plural → singular
 *   16–18 proper nouns take a capital letter (names, cities, days)
 */
import type { QuizQuestion } from '../../../types';

export const GRADE2_GREEK_NOUNS_ARTICLES: QuizQuestion[] = [
  // ── 1–4: nouns and their gender ─────────────────────────────────────────────
  {
    q: { el: 'Ποια λέξη είναι ουσιαστικό, δηλαδή όνομα πράγματος;', en: 'Which word is a noun, the name of a thing?' },
    options: { el: ['τρέχω', 'μπάλα', 'γρήγορα', 'ωραίος'], en: ['τρέχω (I run)', 'μπάλα (ball)', 'γρήγορα (fast)', 'ωραίος (nice)'] },
    correct: 1,
    explanation: {
      el: 'Η «μπάλα» είναι ουσιαστικό: είναι το όνομα ενός πράγματος. Τα ουσιαστικά παίρνουν μπροστά τους άρθρο: η μπάλα.',
      en: '«μπάλα» (ball) is a noun: it names a thing. Greek nouns take an article in front of them: η μπάλα.',
    },
  },
  {
    q: { el: 'Ποιο άρθρο ταιριάζει; ___ παππούς', en: 'Which article fits? ___ παππούς (grandpa)' },
    options: { el: ['ο', 'η', 'το', 'τα'], en: ['ο', 'η', 'το', 'τα'] },
    correct: 0,
    explanation: {
      el: 'Ο παππούς είναι άντρας, άρα η λέξη είναι αρσενική και παίρνει το άρθρο «ο».',
      en: 'Grandpa is a man, so the word is masculine and takes the article «ο».',
    },
  },
  {
    q: { el: 'Ποια λέξη είναι θηλυκή;', en: 'Which word is feminine?' },
    options: { el: ['ο σκύλος', 'το παιδί', 'η γάτα', 'ο ήλιος'], en: ['ο σκύλος (dog)', 'το παιδί (child)', 'η γάτα (cat)', 'ο ήλιος (sun)'] },
    correct: 2,
    explanation: {
      el: 'Το άρθρο μάς δείχνει το γένος. Το «η» πάει με τα θηλυκά: η γάτα.',
      en: 'The article shows the gender. «η» goes with feminine words: η γάτα (the cat).',
    },
  },
  {
    q: { el: 'Ποια λέξη είναι ουδέτερη;', en: 'Which word is neuter?' },
    options: { el: ['η θάλασσα', 'ο δρόμος', 'η μαμά', 'το δέντρο'], en: ['η θάλασσα (sea)', 'ο δρόμος (road)', 'η μαμά (mum)', 'το δέντρο (tree)'] },
    correct: 3,
    explanation: {
      el: 'Τα ουδέτερα παίρνουν το άρθρο «το»: το δέντρο. Τα αρσενικά παίρνουν «ο» και τα θηλυκά «η».',
      en: 'Neuter words take the article «το»: το δέντρο (the tree). Masculine take «ο», feminine take «η».',
    },
  },

  // ── 5–8: the definite article ───────────────────────────────────────────────
  {
    q: { el: 'Ποιο άρθρο ταιριάζει; ___ πόρτα', en: 'Which article fits? ___ πόρτα (door)' },
    options: { el: ['ο', 'το', 'η', 'οι'], en: ['ο', 'το', 'η', 'οι'] },
    correct: 2,
    explanation: {
      el: 'Η πόρτα. Οι λέξεις που τελειώνουν σε -α είναι συνήθως θηλυκές και παίρνουν «η».',
      en: 'Η πόρτα. Words ending in -α are usually feminine and take «η».',
    },
  },
  {
    q: { el: 'Ποιο άρθρο ταιριάζει; ___ βιβλίο', en: 'Which article fits? ___ βιβλίο (book)' },
    options: { el: ['η', 'ο', 'οι', 'το'], en: ['η', 'ο', 'οι', 'το'] },
    correct: 3,
    explanation: {
      el: 'Το βιβλίο. Οι λέξεις που τελειώνουν σε -ο είναι ουδέτερες και παίρνουν «το».',
      en: 'Το βιβλίο. Words ending in -ο are neuter and take «το».',
    },
  },
  {
    q: { el: 'Ποιο άρθρο ταιριάζει; ___ μαθητές', en: 'Which article fits? ___ μαθητές (pupils)' },
    options: { el: ['ο', 'οι', 'τα', 'το'], en: ['ο', 'οι', 'τα', 'το'] },
    correct: 1,
    explanation: {
      el: 'Οι μαθητές. Όταν είναι πολλοί, το «ο» γίνεται «οι»: ο μαθητής → οι μαθητές.',
      en: 'Οι μαθητές. When there are many, «ο» becomes «οι»: ο μαθητής → οι μαθητές (the pupils).',
    },
  },
  {
    q: { el: 'Ποιο άρθρο ταιριάζει; ___ παιχνίδια', en: 'Which article fits? ___ παιχνίδια (toys)' },
    options: { el: ['τα', 'οι', 'το', 'η'], en: ['τα', 'οι', 'το', 'η'] },
    correct: 0,
    explanation: {
      el: 'Τα παιχνίδια. Τα ουδέτερα στον πληθυντικό παίρνουν «τα»: το παιχνίδι → τα παιχνίδια.',
      en: 'Τα παιχνίδια. Neuter words in the plural take «τα»: το παιχνίδι → τα παιχνίδια (the toys).',
    },
  },

  // ── 9–11: the indefinite article ────────────────────────────────────────────
  {
    q: { el: 'Ποιο ταιριάζει; Είδα ___ γάτα στον κήπο.', en: 'Which fits? Είδα ___ γάτα στον κήπο. (I saw a cat in the garden.)' },
    options: { el: ['ένας', 'μία', 'ένα', 'η'], en: ['ένας', 'μία', 'ένα', 'η'] },
    correct: 1,
    explanation: {
      el: 'Είδα μία γάτα. Η γάτα είναι θηλυκή, άρα λέμε «μία» (ή «μια»). Το «ένας» είναι για αρσενικά, το «ένα» για ουδέτερα.',
      en: 'Είδα μία γάτα. Cat is feminine, so we say «μία» (or «μια»). «ένας» is for masculine, «ένα» for neuter.',
    },
  },
  {
    q: { el: 'Ποιο ταιριάζει; Ο Νίκος έχει ___ σκύλο.', en: 'Which fits? Ο Νίκος έχει ___ σκύλο. (Nikos has a dog.)' },
    options: { el: ['μία', 'ένα', 'έναν', 'το'], en: ['μία', 'ένα', 'έναν', 'το'] },
    correct: 2,
    explanation: {
      el: 'Έχει έναν σκύλο. Ο σκύλος είναι αρσενικός. Όταν λέμε τι έχουμε, το «ένας» γίνεται «έναν».',
      en: 'Έχει έναν σκύλο. Dog is masculine. When we say what we have, «ένας» becomes «έναν».',
    },
  },
  {
    q: { el: 'Ποιο ταιριάζει; Η Ελένη ζωγράφισε ___ σπίτι.', en: 'Which fits? Η Ελένη ζωγράφισε ___ σπίτι. (Eleni drew a house.)' },
    options: { el: ['ένα', 'ένας', 'μία', 'τα'], en: ['ένα', 'ένας', 'μία', 'τα'] },
    correct: 0,
    explanation: {
      el: 'Ζωγράφισε ένα σπίτι. Το σπίτι είναι ουδέτερο, άρα παίρνει «ένα».',
      en: 'Ζωγράφισε ένα σπίτι. House is neuter, so it takes «ένα».',
    },
  },

  // ── 12–15: singular and plural ──────────────────────────────────────────────
  {
    q: { el: 'Πώς λέμε πολλά από αυτό; το μολύβι → τα ___', en: 'How do we say more than one? το μολύβι (the pencil) → τα ___' },
    options: { el: ['μολύβι', 'μολύβια', 'μολύβιες', 'μολύβοι'], en: ['μολύβι', 'μολύβια', 'μολύβιες', 'μολύβοι'] },
    correct: 1,
    explanation: {
      el: 'Το μολύβι → τα μολύβια. Τα ουδέτερα σε -ι παίρνουν -ια στον πληθυντικό.',
      en: 'Το μολύβι → τα μολύβια. Neuter words ending in -ι add -ια in the plural.',
    },
  },
  {
    q: { el: 'Πώς λέμε πολλά από αυτό; ο κήπος → οι ___', en: 'How do we say more than one? ο κήπος (the garden) → οι ___' },
    options: { el: ['κήπες', 'κήπα', 'κήπος', 'κήποι'], en: ['κήπες', 'κήπα', 'κήπος', 'κήποι'] },
    correct: 3,
    explanation: {
      el: 'Ο κήπος → οι κήποι. Τα αρσενικά σε -ος γίνονται -οι στον πληθυντικό.',
      en: 'Ο κήπος → οι κήποι. Masculine words ending in -ος become -οι in the plural.',
    },
  },
  {
    q: { el: 'Πώς λέμε πολλά από αυτό; η καρέκλα → οι ___', en: 'How do we say more than one? η καρέκλα (the chair) → οι ___' },
    options: { el: ['καρέκλοι', 'καρέκλα', 'καρέκλες', 'καρέκλια'], en: ['καρέκλοι', 'καρέκλα', 'καρέκλες', 'καρέκλια'] },
    correct: 2,
    explanation: {
      el: 'Η καρέκλα → οι καρέκλες. Τα θηλυκά σε -α γίνονται -ες στον πληθυντικό.',
      en: 'Η καρέκλα → οι καρέκλες. Feminine words ending in -α become -ες in the plural.',
    },
  },
  {
    q: { el: 'Ποιο είναι το ένα μόνο; τα ποδήλατα → το ___', en: 'What is just one of these? τα ποδήλατα (the bikes) → το ___' },
    options: { el: ['ποδήλατο', 'ποδήλατος', 'ποδήλατα', 'ποδήλατη'], en: ['ποδήλατο', 'ποδήλατος', 'ποδήλατα', 'ποδήλατη'] },
    correct: 0,
    explanation: {
      el: 'Τα ποδήλατα → το ποδήλατο. Για να βρούμε το ένα, αλλάζουμε το -α σε -ο και το «τα» σε «το».',
      en: 'Τα ποδήλατα → το ποδήλατο. To find the singular, change -α to -ο and «τα» to «το».',
    },
  },

  // ── 16–18: proper nouns and capital letters ─────────────────────────────────
  {
    q: { el: 'Ποια λέξη είναι όνομα και θέλει κεφαλαίο γράμμα;', en: 'Which word is a name and needs a capital letter?' },
    options: { el: ['γάτα', 'σχολείο', 'Μαρία', 'τραπέζι'], en: ['γάτα (cat)', 'σχολείο (school)', 'Μαρία (Maria)', 'τραπέζι (table)'] },
    correct: 2,
    explanation: {
      el: 'Τα ονόματα ανθρώπων γράφονται πάντα με κεφαλαίο: Μαρία, Γιώργος, Ελένη.',
      en: 'People\'s names are always written with a capital letter: Μαρία, Γιώργος, Ελένη.',
    },
  },
  {
    q: { el: 'Ποια πρόταση είναι γραμμένη σωστά;', en: 'Which sentence is written correctly?' },
    options: { el: ['Ο γιώργος μένει στην Αθήνα.', 'Ο Γιώργος μένει στην αθήνα.', 'ο γιώργος μένει στην αθήνα.', 'Ο Γιώργος μένει στην Αθήνα.'], en: ['Ο γιώργος μένει στην Αθήνα.', 'Ο Γιώργος μένει στην αθήνα.', 'ο γιώργος μένει στην αθήνα.', 'Ο Γιώργος μένει στην Αθήνα.'] },
    correct: 3,
    explanation: {
      el: 'Το όνομα «Γιώργος» και η πόλη «Αθήνα» θέλουν κεφαλαίο. Κεφαλαίο θέλει και η πρώτη λέξη της πρότασης.',
      en: 'The name «Γιώργος» and the city «Αθήνα» need capitals. The first word of a sentence needs one too.',
    },
  },
  {
    q: { el: 'Ποια λέξη θέλει κεφαλαίο γράμμα;', en: 'Which word needs a capital letter?' },
    options: { el: ['μήλο', 'δευτέρα', 'ποτήρι', 'λουλούδι'], en: ['μήλο (apple)', 'δευτέρα (monday)', 'ποτήρι (glass)', 'λουλούδι (flower)'] },
    correct: 1,
    explanation: {
      el: 'Οι μέρες της εβδομάδας γράφονται με κεφαλαίο: Δευτέρα, Τρίτη, Τετάρτη. Το μήλο, το ποτήρι και το λουλούδι είναι απλά πράγματα.',
      en: 'Days of the week are written with a capital in Greek: Δευτέρα, Τρίτη, Τετάρτη. Apple, glass and flower are ordinary things.',
    },
  },
];
