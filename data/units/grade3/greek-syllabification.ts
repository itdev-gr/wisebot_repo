/**
 * Γ' Δημοτικού · Γλώσσα · Συλλαβισμός
 * ====================================
 * What the unit covers, in the order a Γ' class meets it:
 *   1–4   one vowel sound per syllable: counting syllables, a single consonant goes with the next vowel
 *   5–7   vowel digraphs (αι, ει, οι, ου, αυ, ευ) never split
 *   8–10  consonant digraphs (μπ, ντ, γκ, τσ, τζ) never split
 *   11–12 double consonants (σσ, ββ, λλ…) split in the middle
 *   13–17 two or three consonants: together if a Greek word can start with them, otherwise split
 *   18    counting syllables in a long word with a digraph
 * All words and sentences are original; the UI shuffles the options.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE3_GREEK_SYLLABIFICATION: QuizQuestion[] = [
  // ── 1–4: one vowel per syllable ──────────────────────────────────────────
  {
    q: { el: 'Πόσες συλλαβές έχει η λέξη «μαμά»;', en: 'How many syllables does the word «μαμά» have?' },
    options: { el: ['1', '2', '3', '4'], en: ['1', '2', '3', '4'] },
    correct: 1,
    explanation: {
      el: 'Η λέξη μα-μά έχει 2 συλλαβές. Κάθε συλλαβή έχει ένα φωνήεν: α και ά.',
      en: 'The word μα-μά has 2 syllables. Each syllable has one vowel: α and ά.',
    },
  },
  {
    q: { el: 'Πώς χωρίζεται σωστά η λέξη «πατέρας»;', en: 'How is the word «πατέρας» split correctly?' },
    options: { el: ['πατ-έ-ρας', 'πα-τέρ-ας', 'πα-τέ-ρας', 'πατ-έρ-ας'], en: ['πατ-έ-ρας', 'πα-τέρ-ας', 'πα-τέ-ρας', 'πατ-έρ-ας'] },
    correct: 2,
    explanation: {
      el: 'Ένα σύμφωνο ανάμεσα σε δύο φωνήεντα πάει με το δεύτερο φωνήεν: πα-τέ-ρας.',
      en: 'A single consonant between two vowels goes with the second vowel: πα-τέ-ρας.',
    },
  },
  {
    q: { el: 'Πώς χωρίζεται σωστά η λέξη «ποδήλατο»;', en: 'How is the word «ποδήλατο» split correctly?' },
    options: { el: ['πο-δή-λα-το', 'ποδ-ή-λα-το', 'πο-δήλ-α-το', 'πο-δή-λατ-ο'], en: ['πο-δή-λα-το', 'ποδ-ή-λα-το', 'πο-δήλ-α-το', 'πο-δή-λατ-ο'] },
    correct: 0,
    explanation: {
      el: 'Κάθε συλλαβή ξεκινά με σύμφωνο και τελειώνει με φωνήεν: πο-δή-λα-το. Τέσσερις συλλαβές!',
      en: 'Each syllable starts with a consonant and ends with a vowel: πο-δή-λα-το. Four syllables!',
    },
  },
  {
    q: { el: 'Πόσες συλλαβές έχει η λέξη «σχολείο»;', en: 'How many syllables does the word «σχολείο» have?' },
    options: { el: ['2', '4', '3', '5'], en: ['2', '4', '3', '5'] },
    correct: 2,
    explanation: {
      el: 'Σχο-λεί-ο: 3 συλλαβές. Το «ει» είναι ένας ήχος, άρα μία συλλαβή, και το τελικό «ο» είναι μόνο του.',
      en: 'Σχο-λεί-ο: 3 syllables. The «ει» is one sound, so one syllable, and the final «ο» stands alone.',
    },
  },

  // ── 5–7: vowel digraphs stay together ────────────────────────────────────
  {
    q: { el: 'Πώς χωρίζεται σωστά η λέξη «παιδί»;', en: 'How is the word «παιδί» split correctly?' },
    options: { el: ['πα-ι-δί', 'παι-δί', 'παιδ-ί', 'πα-ιδί'], en: ['πα-ι-δί', 'παι-δί', 'παιδ-ί', 'πα-ιδί'] },
    correct: 1,
    explanation: {
      el: 'Το «αι» είναι δίψηφο φωνήεν: δύο γράμματα, ένας ήχος. Δεν το χωρίζουμε ποτέ: παι-δί.',
      en: 'The «αι» is a vowel digraph: two letters, one sound. We never split it: παι-δί.',
    },
  },
  {
    q: { el: 'Πώς χωρίζεται σωστά η λέξη «κουτί»;', en: 'How is the word «κουτί» split correctly?' },
    options: { el: ['κο-υ-τί', 'κουτ-ί', 'κου-τί', 'κο-υτί'], en: ['κο-υ-τί', 'κουτ-ί', 'κου-τί', 'κο-υτί'] },
    correct: 2,
    explanation: {
      el: 'Το «ου» είναι δίψηφο φωνήεν και μένει μαζί: κου-τί.',
      en: 'The «ου» is a vowel digraph and stays together: κου-τί.',
    },
  },
  {
    q: { el: 'Πώς χωρίζεται σωστά η λέξη «ουρανός»;', en: 'How is the word «ουρανός» split correctly?' },
    options: { el: ['ο-υ-ρα-νός', 'ουρ-α-νός', 'ου-ραν-ός', 'ου-ρα-νός'], en: ['ο-υ-ρα-νός', 'ουρ-α-νός', 'ου-ραν-ός', 'ου-ρα-νός'] },
    correct: 3,
    explanation: {
      el: 'Το «ου» μένει μαζί και κάνει μόνο του μια συλλαβή: ου-ρα-νός.',
      en: 'The «ου» stays together and makes a syllable on its own: ου-ρα-νός.',
    },
  },

  // ── 8–10: consonant digraphs stay together ───────────────────────────────
  {
    q: { el: 'Πώς χωρίζεται σωστά η λέξη «μπάλα»;', en: 'How is the word «μπάλα» split correctly?' },
    options: { el: ['μπά-λα', 'μ-πά-λα', 'μπάλ-α', 'μπ-ά-λα'], en: ['μπά-λα', 'μ-πά-λα', 'μπάλ-α', 'μπ-ά-λα'] },
    correct: 0,
    explanation: {
      el: 'Το «μπ» είναι δίψηφο σύμφωνο: το διαβάζουμε σαν έναν ήχο και δεν το χωρίζουμε. Μπά-λα.',
      en: 'The «μπ» is a consonant digraph: we read it as one sound and never split it. Μπά-λα.',
    },
  },
  {
    q: { el: 'Πώς χωρίζεται σωστά η λέξη «πέντε»;', en: 'How is the word «πέντε» split correctly?' },
    options: { el: ['πέν-τε', 'πέντ-ε', 'πέ-ντε', 'πέ-ν-τε'], en: ['πέν-τε', 'πέντ-ε', 'πέ-ντε', 'πέ-ν-τε'] },
    correct: 2,
    explanation: {
      el: 'Το «ντ» είναι δίψηφο σύμφωνο και πάει ολόκληρο στη δεύτερη συλλαβή: πέ-ντε.',
      en: 'The «ντ» is a consonant digraph and goes whole to the second syllable: πέ-ντε.',
    },
  },
  {
    q: { el: 'Πώς χωρίζεται σωστά η λέξη «αγκαλιά»;', en: 'How is the word «αγκαλιά» split correctly?' },
    options: { el: ['αγ-κα-λιά', 'α-γκα-λιά', 'α-γκαλ-ιά', 'αγ-καλ-ιά'], en: ['αγ-κα-λιά', 'α-γκα-λιά', 'α-γκαλ-ιά', 'αγ-καλ-ιά'] },
    correct: 1,
    explanation: {
      el: 'Το «γκ» είναι δίψηφο σύμφωνο και μένει μαζί: α-γκα-λιά. Το «ιά» στο τέλος είναι μία συλλαβή.',
      en: 'The «γκ» is a consonant digraph and stays together: α-γκα-λιά. The «ιά» at the end is one syllable.',
    },
  },

  // ── 11–12: double consonants split ───────────────────────────────────────
  {
    q: { el: 'Πώς χωρίζεται σωστά η λέξη «θάλασσα»;', en: 'How is the word «θάλασσα» split correctly?' },
    options: { el: ['θά-λα-σσα', 'θάλ-ασ-σα', 'θά-λασ-σα', 'θά-λασσ-α'], en: ['θά-λα-σσα', 'θάλ-ασ-σα', 'θά-λασ-σα', 'θά-λασσ-α'] },
    correct: 2,
    explanation: {
      el: 'Όταν δύο ίδια σύμφωνα είναι μαζί, τα χωρίζουμε: ένα μένει πίσω, ένα πάει μπροστά. Θά-λασ-σα.',
      en: 'When two identical consonants are together, we split them: one stays behind, one goes forward. Θά-λασ-σα.',
    },
  },
  {
    q: { el: 'Πώς χωρίζεται σωστά η λέξη «Σάββατο»;', en: 'How is the word «Σάββατο» split correctly?' },
    options: { el: ['Σά-ββα-το', 'Σάβ-βα-το', 'Σάββ-α-το', 'Σά-ββατ-ο'], en: ['Σά-ββα-το', 'Σάβ-βα-το', 'Σάββ-α-το', 'Σά-ββατ-ο'] },
    correct: 1,
    explanation: {
      el: 'Τα δύο «β» χωρίζονται στη μέση: Σάβ-βα-το.',
      en: 'The two «β» letters are split down the middle: Σάβ-βα-το.',
    },
  },

  // ── 13–17: two or three consonants ───────────────────────────────────────
  {
    q: { el: 'Πώς χωρίζεται σωστά η λέξη «αστέρι»;', en: 'How is the word «αστέρι» split correctly?' },
    options: { el: ['ασ-τέ-ρι', 'α-στέ-ρι', 'αστ-έ-ρι', 'α-στέρ-ι'], en: ['ασ-τέ-ρι', 'α-στέ-ρι', 'αστ-έ-ρι', 'α-στέρ-ι'] },
    correct: 1,
    explanation: {
      el: 'Υπάρχουν ελληνικές λέξεις που αρχίζουν από «στ» (στόμα, στάση). Άρα το «στ» πάει μαζί: α-στέ-ρι.',
      en: 'Greek words can start with «στ» (στόμα, στάση). So «στ» stays together: α-στέ-ρι.',
    },
  },
  {
    q: { el: 'Πώς χωρίζεται σωστά η λέξη «βιβλίο»;', en: 'How is the word «βιβλίο» split correctly?' },
    options: { el: ['βιβ-λί-ο', 'βι-βλίο', 'βι-βλί-ο', 'βιβ-λίο'], en: ['βιβ-λί-ο', 'βι-βλίο', 'βι-βλί-ο', 'βιβ-λίο'] },
    correct: 2,
    explanation: {
      el: 'Το «βλ» μένει μαζί, γιατί υπάρχουν λέξεις που αρχίζουν έτσι (βλέπω). Το «ίο» είναι δύο συλλαβές: βι-βλί-ο.',
      en: 'The «βλ» stays together, because words can start with it (βλέπω). The «ίο» is two syllables: βι-βλί-ο.',
    },
  },
  {
    q: { el: 'Πώς χωρίζεται σωστά η λέξη «πόρτα»;', en: 'How is the word «πόρτα» split correctly?' },
    options: { el: ['πό-ρτα', 'πόρτ-α', 'πό-ρ-τα', 'πόρ-τα'], en: ['πό-ρτα', 'πόρτ-α', 'πό-ρ-τα', 'πόρ-τα'] },
    correct: 3,
    explanation: {
      el: 'Καμία ελληνική λέξη δεν αρχίζει από «ρτ». Άρα τα χωρίζουμε: το «ρ» μένει πίσω, το «τ» πάει μπροστά. Πόρ-τα.',
      en: 'No Greek word starts with «ρτ». So we split them: «ρ» stays behind, «τ» goes forward. Πόρ-τα.',
    },
  },
  {
    q: { el: 'Πώς χωρίζεται σωστά η λέξη «άνθρωπος»;', en: 'How is the word «άνθρωπος» split correctly?' },
    options: { el: ['άν-θρω-πος', 'ά-νθρω-πος', 'άνθ-ρω-πος', 'άν-θρωπ-ος'], en: ['άν-θρω-πος', 'ά-νθρω-πος', 'άνθ-ρω-πος', 'άν-θρωπ-ος'] },
    correct: 0,
    explanation: {
      el: 'Τρία σύμφωνα μαζί (νθρ): καμία λέξη δεν αρχίζει από «νθ», άρα το «ν» μένει πίσω και τα «θρ» πάνε μπροστά. Άν-θρω-πος.',
      en: 'Three consonants together (νθρ): no word starts with «νθ», so «ν» stays behind and «θρ» go forward. Άν-θρω-πος.',
    },
  },
  {
    q: { el: 'Πώς χωρίζεται σωστά η λέξη «άστρο»;', en: 'How is the word «άστρο» split correctly?' },
    options: { el: ['άσ-τρο', 'ά-στρο', 'άστ-ρο', 'άστρ-ο'], en: ['άσ-τρο', 'ά-στρο', 'άστ-ρο', 'άστρ-ο'] },
    correct: 1,
    explanation: {
      el: 'Τρία σύμφωνα (στρ): υπάρχουν λέξεις που αρχίζουν από «στ» (στόμα), άρα και τα τρία πάνε μπροστά. Ά-στρο.',
      en: 'Three consonants (στρ): words can start with «στ» (στόμα), so all three go forward. Ά-στρο.',
    },
  },

  // ── 18: counting syllables in a long word ────────────────────────────────
  {
    q: { el: 'Πόσες συλλαβές έχει η λέξη «αυτοκίνητο»;', en: 'How many syllables does the word «αυτοκίνητο» have?' },
    options: { el: ['6', '4', '5', '3'], en: ['6', '4', '5', '3'] },
    correct: 2,
    explanation: {
      el: 'Αυ-το-κί-νη-το: 5 συλλαβές. Το «αυ» είναι ένας ήχος, άρα μία συλλαβή, όχι δύο.',
      en: 'Αυ-το-κί-νη-το: 5 syllables. The «αυ» is one sound, so one syllable, not two.',
    },
  },
];
