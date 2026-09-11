/**
 * Β' Δημοτικού · Γλώσσα · Συλλαβισμός
 * ====================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a child of 7–8. One short stem per question.
 *
 * What the unit covers, in order:
 *   1–5   counting syllables: clap the word (μα-μά, πα-ρά-θυ-ρο, φως), every syllable has a vowel sound
 *   6–8   one consonant between two vowels goes with the vowel that follows (πα-τά-τα, πο-δή-λα-το)
 *   9–12  two consonants: if a Greek word can start with them they stay together (α-στέ-ρι, πα-τρί-δα,
 *         α-πλώ-νω); otherwise they split (κάρ-τα)
 *   13–16 the letter pairs that never split: ου, αι, ει (παι-δί, λου-λού-δι), μπ (α-μπέ-λι) —
 *         and the double consonants that always split (θά-λασ-σα)
 *   17–18 the end of the line: break only between syllables, with a hyphen
 *
 * Distractors are the real mistakes of this age: cutting after the consonant (πατ-ά-τα),
 * splitting a vowel pair (πα-ι-δί), leaving one letter alone (κ-άρ-τα), counting letters instead of syllables.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE2_GREEK_SYLLABLES_AND_HYPHENATION: QuizQuestion[] = [
  // ── 1–5: counting syllables ─────────────────────────────────────────────────
  {
    q: { el: 'Πόσες συλλαβές έχει η λέξη «μαμά»;', en: 'How many syllables does the word «μαμά» (mum) have?' },
    options: { el: ['1', '2', '3', '4'], en: ['1', '2', '3', '4'] },
    correct: 1,
    explanation: {
      el: 'Χτύπα παλαμάκια: μα-μά. Δύο χτυπήματα, δύο συλλαβές!',
      en: 'Clap it out: μα-μά. Two claps, two syllables!',
    },
  },
  {
    q: { el: 'Πόσες συλλαβές έχει η λέξη «παράθυρο»;', en: 'How many syllables does the word «παράθυρο» (window) have?' },
    options: { el: ['3', '5', '4', '2'], en: ['3', '5', '4', '2'] },
    correct: 2,
    explanation: {
      el: 'πα-ρά-θυ-ρο: τέσσερις συλλαβές. Κάθε συλλαβή έχει ένα φωνήεν που ακούγεται.',
      en: 'πα-ρά-θυ-ρο: four syllables. Every syllable has one vowel sound.',
    },
  },
  {
    q: { el: 'Πόσες συλλαβές έχει η λέξη «φως»;', en: 'How many syllables does the word «φως» (light) have?' },
    options: { el: ['1', '2', '3', '0'], en: ['1', '2', '3', '0'] },
    correct: 0,
    explanation: {
      el: 'Το «φως» έχει μόνο ένα φωνήεν (ω), άρα είναι μία συλλαβή. Μικρή λέξη, ένα χτύπημα!',
      en: '«φως» has only one vowel (ω), so it is one syllable. A short word, one clap!',
    },
  },
  {
    q: { el: 'Ποια λέξη έχει τρεις συλλαβές;', en: 'Which word has three syllables?' },
    options: { el: ['γάτα', 'ποτήρι', 'ναι', 'καλοκαίρι'], en: ['γάτα', 'ποτήρι', 'ναι', 'καλοκαίρι'] },
    correct: 1,
    explanation: {
      el: 'πο-τή-ρι έχει τρεις συλλαβές. Η γά-τα έχει δύο, το ναι μία και το κα-λο-καί-ρι τέσσερις.',
      en: 'πο-τή-ρι (glass) has three syllables. γά-τα (cat) has two, ναι (yes) one and κα-λο-καί-ρι (summer) four.',
    },
  },
  {
    q: { el: 'Πώς μετράμε τις συλλαβές μιας λέξης;', en: 'How do we count the syllables of a word?' },
    options: { el: ['μετράμε τα γράμματά της', 'μετράμε μόνο τα σύμφωνα', 'μετράμε τις λέξεις της πρότασης', 'χτυπάμε παλαμάκια για κάθε κομμάτι που λέμε'], en: ['we count its letters', 'we count only the consonants', 'we count the words in the sentence', 'we clap once for each piece we say'] },
    correct: 3,
    explanation: {
      el: 'Λέμε τη λέξη αργά και χτυπάμε παλαμάκια: κάθε χτύπημα είναι μία συλλαβή, και κάθε συλλαβή έχει ένα φωνήεν.',
      en: 'Say the word slowly and clap: each clap is one syllable, and each syllable has one vowel sound.',
    },
  },

  // ── 6–8: one consonant goes with the next vowel ───────────────────────────
  {
    q: { el: 'Πώς χωρίζεται σωστά η λέξη «πατάτα»;', en: 'How is the word «πατάτα» (potato) split correctly?' },
    options: { el: ['πα-τά-τα', 'πατ-άτ-α', 'πατ-ά-τα', 'π-ατά-τα'], en: ['πα-τά-τα', 'πατ-άτ-α', 'πατ-ά-τα', 'π-ατά-τα'] },
    correct: 0,
    explanation: {
      el: 'πα-τά-τα. Ένα σύμφωνο ανάμεσα σε δύο φωνήεντα πάει με το φωνήεν που ακολουθεί.',
      en: 'πα-τά-τα. A single consonant between two vowels goes with the vowel that follows it.',
    },
  },
  {
    q: { el: 'Ένα σύμφωνο ανάμεσα σε δύο φωνήεντα πάει…', en: 'Where does a single consonant between two vowels go?' },
    options: { el: ['μόνο του', 'με το φωνήεν που είναι πριν', 'όπου θέλουμε', 'με το φωνήεν που ακολουθεί'], en: ['on its own', 'with the vowel before it', 'wherever we like', 'with the vowel that follows it'] },
    correct: 3,
    explanation: {
      el: 'Πάει με το επόμενο φωνήεν: μέ-λι, τό-πι, κα-λά. Έτσι κάθε συλλαβή αρχίζει όμορφα με σύμφωνο.',
      en: 'It goes with the next vowel: μέ-λι, τό-πι, κα-λά. That way each syllable starts neatly with a consonant.',
    },
  },
  {
    q: { el: 'Πώς χωρίζεται σωστά η λέξη «ποδήλατο»;', en: 'How is the word «ποδήλατο» (bicycle) split correctly?' },
    options: { el: ['ποδ-ή-λα-το', 'πο-δή-λα-το', 'πο-δήλ-α-το', 'πο-δή-λατ-ο'], en: ['ποδ-ή-λα-το', 'πο-δή-λα-το', 'πο-δήλ-α-το', 'πο-δή-λατ-ο'] },
    correct: 1,
    explanation: {
      el: 'πο-δή-λα-το. Κάθε σύμφωνο (δ, λ, τ) πάει με το φωνήεν που έρχεται μετά.',
      en: 'πο-δή-λα-το. Each consonant (δ, λ, τ) goes with the vowel that comes after it.',
    },
  },

  // ── 9–12: two consonants together ─────────────────────────────────────────
  {
    q: { el: 'Πώς χωρίζεται σωστά η λέξη «αστέρι»;', en: 'How is the word «αστέρι» (star) split correctly?' },
    options: { el: ['ασ-τέ-ρι', 'αστ-έ-ρι', 'α-στέ-ρι', 'α-σ-τέ-ρι'], en: ['ασ-τέ-ρι', 'αστ-έ-ρι', 'α-στέ-ρι', 'α-σ-τέ-ρι'] },
    correct: 2,
    explanation: {
      el: 'α-στέ-ρι. Τα «στ» μένουν μαζί, γιατί υπάρχουν ελληνικές λέξεις που αρχίζουν με «στ»: στόμα, στέκομαι.',
      en: 'α-στέ-ρι. The «στ» stay together, because Greek words can start with «στ»: στόμα, στέκομαι.',
    },
  },
  {
    q: { el: 'Πώς χωρίζεται σωστά η λέξη «πατρίδα»;', en: 'How is the word «πατρίδα» (homeland) split correctly?' },
    options: { el: ['πατ-ρί-δα', 'πα-τρ-ί-δα', 'πα-τρί-δα', 'πατρ-ί-δα'], en: ['πατ-ρί-δα', 'πα-τρ-ί-δα', 'πα-τρί-δα', 'πατρ-ί-δα'] },
    correct: 2,
    explanation: {
      el: 'πα-τρί-δα. Τα «τρ» μένουν μαζί, όπως στην αρχή των λέξεων τρένο και τρέχω.',
      en: 'πα-τρί-δα. The «τρ» stay together, just as at the start of the words τρένο and τρέχω.',
    },
  },
  {
    q: { el: 'Στη λέξη «απλώνω» τα σύμφωνα «πλ» μένουν μαζί. Γιατί;', en: 'In the word «απλώνω» (I spread out) the consonants «πλ» stay together. Why?' },
    options: { el: ['γιατί υπάρχουν λέξεις που αρχίζουν με «πλ», όπως «πλένω»', 'γιατί είναι στην αρχή της λέξης', 'γιατί το «π» είναι φωνήεν', 'δεν μένουν μαζί, χωρίζονται πάντα'], en: ['because there are words that start with «πλ», like «πλένω»', 'because they are at the start of the word', 'because «π» is a vowel', 'they do not stay together, they always split'] },
    correct: 0,
    explanation: {
      el: 'α-πλώ-νω. Ο κανόνας: αν μια ελληνική λέξη μπορεί να αρχίζει με τα δύο σύμφωνα (πλένω, πλατεία), τα κρατάμε μαζί.',
      en: 'α-πλώ-νω. The rule: if a Greek word can start with those two consonants (πλένω, πλατεία), we keep them together.',
    },
  },
  {
    q: { el: 'Πώς χωρίζεται σωστά η λέξη «κάρτα»;', en: 'How is the word «κάρτα» (card) split correctly?' },
    options: { el: ['κά-ρτα', 'κάρτ-α', 'κ-άρ-τα', 'κάρ-τα'], en: ['κά-ρτα', 'κάρτ-α', 'κ-άρ-τα', 'κάρ-τα'] },
    correct: 3,
    explanation: {
      el: 'κάρ-τα. Καμία ελληνική λέξη δεν αρχίζει με «ρτ», γι\' αυτό τα χωρίζουμε: το «ρ» μένει πίσω, το «τ» πάει μπροστά.',
      en: 'κάρ-τα. No Greek word starts with «ρτ», so we split them: the «ρ» stays behind, the «τ» goes forward.',
    },
  },

  // ── 13–16: pairs that never split, doubles that always split ──────────────
  {
    q: { el: 'Πώς χωρίζεται σωστά η λέξη «παιδί»;', en: 'How is the word «παιδί» (child) split correctly?' },
    options: { el: ['πα-ι-δί', 'παι-δί', 'παιδ-ί', 'π-αι-δί'], en: ['πα-ι-δί', 'παι-δί', 'παιδ-ί', 'π-αι-δί'] },
    correct: 1,
    explanation: {
      el: 'παι-δί. Τα «αι» κάνουν έναν ήχο («ε») και δεν χωρίζονται ποτέ.',
      en: 'παι-δί. The «αι» make one sound («ε») and never split.',
    },
  },
  {
    q: { el: 'Πώς χωρίζεται σωστά η λέξη «λουλούδι»;', en: 'How is the word «λουλούδι» (flower) split correctly?' },
    options: { el: ['λο-υ-λο-ύ-δι', 'λουλ-ού-δι', 'λου-λού-δι', 'λου-λο-ύ-δι'], en: ['λο-υ-λο-ύ-δι', 'λουλ-ού-δι', 'λου-λού-δι', 'λου-λο-ύ-δι'] },
    correct: 2,
    explanation: {
      el: 'λου-λού-δι. Το «ου» είναι ένας ήχος με δύο γράμματα — μένει πάντα μαζί.',
      en: 'λου-λού-δι. The «ου» is one sound made of two letters — it always stays together.',
    },
  },
  {
    q: { el: 'Πώς χωρίζεται σωστά η λέξη «αμπέλι»;', en: 'How is the word «αμπέλι» (vine) split correctly?' },
    options: { el: ['α-μπέ-λι', 'αμ-πέ-λι', 'αμπ-έ-λι', 'α-μπ-έ-λι'], en: ['α-μπέ-λι', 'αμ-πέ-λι', 'αμπ-έ-λι', 'α-μπ-έ-λι'] },
    correct: 0,
    explanation: {
      el: 'α-μπέ-λι. Το «μπ» είναι ένας ήχος («b») και δεν χωρίζεται, όπως και το «ντ» και το «γκ».',
      en: 'α-μπέ-λι. The «μπ» is one sound («b») and does not split, just like «ντ» and «γκ».',
    },
  },
  {
    q: { el: 'Πώς χωρίζεται σωστά η λέξη «θάλασσα»;', en: 'How is the word «θάλασσα» (sea) split correctly?' },
    options: { el: ['θά-λα-σσα', 'θάλ-ασ-σα', 'θά-λασ-σα', 'θάλ-α-σσα'], en: ['θά-λα-σσα', 'θάλ-ασ-σα', 'θά-λασ-σα', 'θάλ-α-σσα'] },
    correct: 2,
    explanation: {
      el: 'θά-λασ-σα. Δύο ίδια σύμφωνα χωρίζονται πάντα: το ένα «σ» μένει πίσω, το άλλο πάει μπροστά. Το ίδιο και στο άλ-λος, γράμ-μα.',
      en: 'θά-λασ-σα. Two identical consonants always split: one «σ» stays behind, the other goes forward. The same in άλ-λος, γράμ-μα.',
    },
  },

  // ── 17–18: the end of the line ────────────────────────────────────────────
  {
    q: { el: 'Η λέξη «καλημέρα» δεν χωράει στο τέλος της γραμμής. Ποιος χωρισμός είναι σωστός;', en: 'The word «καλημέρα» (good morning) does not fit at the end of the line. Which break is correct?' },
    options: { el: ['καλη-μέρα', 'καλ-ημέρα', 'καλημ-έρα', 'κ-αλημέρα'], en: ['καλη-μέρα', 'καλ-ημέρα', 'καλημ-έρα', 'κ-αλημέρα'] },
    correct: 0,
    explanation: {
      el: 'κα-λη-μέ-ρα. Κόβουμε μόνο ανάμεσα σε συλλαβές: καλη-μέρα. Το «καλ-» ή το «κ-» κόβουν τη συλλαβή στη μέση.',
      en: 'κα-λη-μέ-ρα. We cut only between syllables: καλη-μέρα. «καλ-» or «κ-» cut a syllable in half.',
    },
  },
  {
    q: { el: 'Πού χωρίζουμε μια λέξη όταν δεν χωράει στη γραμμή;', en: 'Where do we split a word when it does not fit on the line?' },
    options: { el: ['όπου τελειώνει η γραμμή, χωρίς παύλα', 'στη μέση μιας συλλαβής', 'ποτέ — τη γράφουμε πιο μικρή', 'μόνο ανάμεσα σε δύο συλλαβές, με μια παύλα'], en: ['wherever the line ends, without a hyphen', 'in the middle of a syllable', 'never — we write it smaller', 'only between two syllables, with a hyphen'] },
    correct: 3,
    explanation: {
      el: 'Χωρίζουμε μόνο ανάμεσα σε συλλαβές και βάζουμε μια παύλα (-) στο τέλος της γραμμής. Το υπόλοιπο πάει στην επόμενη γραμμή.',
      en: 'We split only between syllables and put a hyphen (-) at the end of the line. The rest goes on the next line.',
    },
  },
];
