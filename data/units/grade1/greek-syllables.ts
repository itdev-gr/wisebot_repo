/**
 * Α' Δημοτικού · Γλώσσα · Συλλαβές
 * =================================
 * Original questions for a child of 6–7 (curriculum topics only — nothing from ebooks.edu.gr).
 * What the unit covers, in order:
 *   1–4   joining a consonant and a vowel into a syllable, and two syllables into a word
 *   5–9   counting syllables (clapping the word), one-syllable and three-syllable words
 *   10–13 splitting simple words into syllables (every syllable has one vowel sound)
 *   14–18 the digraphs ου / αι / ει / οι — two letters, one sound, one syllable
 */
import type { QuizQuestion } from '../../../types';

export const GRADE1_GREEK_SYLLABLES: QuizQuestion[] = [
  // ── 1–4: joining letters into syllables ─────────────────────────────────────
  {
    q: { el: 'Το μ και το α μαζί κάνουν…', en: 'μ and α together make…' },
    options: { el: ['μα', 'αμ', 'μ', 'α'], en: ['μα', 'αμ', 'μ', 'α'] },
    correct: 0,
    explanation: {
      el: 'Πρώτα το μ, μετά το α: μα. Ένα σύμφωνο και ένα φωνήεν κάνουν μια συλλαβή.',
      en: 'First μ, then α: μα. A consonant and a vowel make one syllable.',
    },
  },
  {
    q: { el: 'Ποια συλλαβή κάνουν το λ και το ο;', en: 'Which syllable do λ and ο make?' },
    options: { el: ['ολ', 'λο', 'λα', 'ο'], en: ['ολ', 'λο', 'λα', 'ο'] },
    correct: 1,
    explanation: {
      el: 'λ + ο = λο. Διαβάζουμε τα γράμματα με τη σειρά που είναι γραμμένα.',
      en: 'λ + ο = λο. We read the letters in the order they are written.',
    },
  },
  {
    q: { el: '«πα» + «πί» κάνουν τη λέξη…', en: '«πα» + «πί» make the word…' },
    options: { el: ['πίπα', 'παπί', 'πάπι', 'απί'], en: ['πίπα', 'παπί', 'πάπι', 'απί'] },
    correct: 1,
    explanation: {
      el: 'πα + πί = παπί. Ο τόνος μένει στο «πί», στη δεύτερη συλλαβή.',
      en: 'πα + πί = παπί (duckling). The accent stays on «πί», the second syllable.',
    },
  },
  {
    q: { el: '«μή» + «λο» κάνουν τη λέξη…', en: '«μή» + «λο» make the word…' },
    options: { el: ['λομή', 'μήλο', 'μηλό', 'μύλο'], en: ['λομή', 'μήλο', 'μηλό', 'μύλο'] },
    correct: 1,
    explanation: {
      el: 'μή + λο = μήλο. Η πρώτη συλλαβή έχει τον τόνο: μή-λο.',
      en: 'μή + λο = μήλο (apple). The first syllable carries the accent: μή-λο.',
    },
  },

  // ── 5–9: counting syllables ─────────────────────────────────────────────────
  {
    q: { el: 'Πόσες συλλαβές έχει η λέξη «γάτα»;', en: 'How many syllables does «γάτα» have?' },
    options: { el: ['1', '3', '4', '2'], en: ['1', '3', '4', '2'] },
    correct: 3,
    explanation: {
      el: 'γά-τα: δύο συλλαβές. Χτύπα παλαμάκια για κάθε συλλαβή: γά, τα!',
      en: 'γά-τα: two syllables. Clap once for each syllable: γά, τα!',
    },
  },
  {
    q: { el: 'Πόσες συλλαβές έχει η λέξη «ήλιος»;', en: 'How many syllables does «ήλιος» have?' },
    options: { el: ['4', '2', '3', '1'], en: ['4', '2', '3', '1'] },
    correct: 2,
    explanation: {
      el: 'ή-λι-ος: τρεις συλλαβές. Κάθε συλλαβή έχει ένα φωνήεν.',
      en: 'ή-λι-ος: three syllables. Every syllable has one vowel sound.',
    },
  },
  {
    q: { el: 'Πόσες συλλαβές έχει η λέξη «καλημέρα»;', en: 'How many syllables does «καλημέρα» have?' },
    options: { el: ['3', '4', '5', '2'], en: ['3', '4', '5', '2'] },
    correct: 1,
    explanation: {
      el: 'κα-λη-μέ-ρα: τέσσερις συλλαβές. Τέσσερα παλαμάκια!',
      en: 'κα-λη-μέ-ρα: four syllables. Four claps!',
    },
  },
  {
    q: { el: 'Ποια λέξη έχει μόνο μία συλλαβή;', en: 'Which word has only one syllable?' },
    options: { el: ['μάτι', 'πόδι', 'φως', 'νερό'], en: ['μάτι', 'πόδι', 'φως', 'νερό'] },
    correct: 2,
    explanation: {
      el: 'Το «φως» λέγεται με ένα παλαμάκι: έχει μία συλλαβή. Οι άλλες λέξεις έχουν δύο.',
      en: '«φως» (light) takes one clap: it has one syllable. The other words have two.',
    },
  },
  {
    q: { el: 'Ποια λέξη έχει τρεις συλλαβές;', en: 'Which word has three syllables?' },
    options: { el: ['σπίτι', 'ποτήρι', 'χέρι', 'ψωμί'], en: ['σπίτι', 'ποτήρι', 'χέρι', 'ψωμί'] },
    correct: 1,
    explanation: {
      el: 'πο-τή-ρι: τρεις συλλαβές. Το σπί-τι, το χέ-ρι και το ψω-μί έχουν δύο.',
      en: 'πο-τή-ρι (glass): three syllables. σπί-τι, χέ-ρι and ψω-μί have two.',
    },
  },

  // ── 10–13: splitting words ──────────────────────────────────────────────────
  {
    q: { el: 'Πώς χωρίζουμε τη λέξη «μαμά»;', en: 'How do we split the word «μαμά»?' },
    options: { el: ['μα-μά', 'μ-αμά', 'μαμ-ά', 'μ-α-μ-ά'], en: ['μα-μά', 'μ-αμά', 'μαμ-ά', 'μ-α-μ-ά'] },
    correct: 0,
    explanation: {
      el: 'μα-μά. Κάθε συλλαβή έχει ένα φωνήεν, και το σύμφωνο πάει μαζί με το φωνήεν που ακολουθεί.',
      en: 'μα-μά. Each syllable has one vowel, and a consonant goes with the vowel that follows it.',
    },
  },
  {
    q: { el: 'Πώς χωρίζουμε τη λέξη «λεμόνι»;', en: 'How do we split the word «λεμόνι»?' },
    options: { el: ['λεμ-όνι', 'λε-μόν-ι', 'λε-μό-νι', 'λεμό-νι'], en: ['λεμ-όνι', 'λε-μόν-ι', 'λε-μό-νι', 'λεμό-νι'] },
    correct: 2,
    explanation: {
      el: 'λε-μό-νι: τρεις συλλαβές. Ένα σύμφωνο ανάμεσα σε δύο φωνήεντα πάει με το δεύτερο.',
      en: 'λε-μό-νι: three syllables. A consonant between two vowels goes with the second one.',
    },
  },
  {
    q: { el: 'Πώς χωρίζουμε τη λέξη «παράθυρο»;', en: 'How do we split the word «παράθυρο»?' },
    options: { el: ['παρ-άθ-υρο', 'πα-ράθ-υρο', 'παρά-θυρο', 'πα-ρά-θυ-ρο'], en: ['παρ-άθ-υρο', 'πα-ράθ-υρο', 'παρά-θυρο', 'πα-ρά-θυ-ρο'] },
    correct: 3,
    explanation: {
      el: 'πα-ρά-θυ-ρο: τέσσερις συλλαβές, τέσσερα φωνήεντα. Κάθε συλλαβή τελειώνει σε φωνήεν.',
      en: 'πα-ρά-θυ-ρο: four syllables, four vowels. Each syllable ends in a vowel.',
    },
  },
  {
    q: { el: 'Ποιος χωρισμός είναι σωστός;', en: 'Which split is correct?' },
    options: { el: ['καρ-ότ-ο', 'κα-ρό-το', 'κα-ρότ-ο', 'καρό-το'], en: ['καρ-ότ-ο', 'κα-ρό-το', 'κα-ρότ-ο', 'καρό-το'] },
    correct: 1,
    explanation: {
      el: 'κα-ρό-το. Κάθε κομμάτι είναι σύμφωνο + φωνήεν. Το σύμφωνο πάει πάντα με το φωνήεν που έρχεται μετά.',
      en: 'κα-ρό-το (carrot). Each piece is consonant + vowel. The consonant always goes with the vowel that comes after it.',
    },
  },

  // ── 14–18: digraphs ου / αι / ει / οι ───────────────────────────────────────
  {
    q: { el: 'Ποια δύο γράμματα κάνουν τον ήχο «ου»;', en: 'Which two letters make the sound «ου»?' },
    options: { el: ['ο + υ', 'ο + ι', 'α + ι', 'ε + ι'], en: ['ο + υ', 'ο + ι', 'α + ι', 'ε + ι'] },
    correct: 0,
    explanation: {
      el: 'Το ο και το υ μαζί κάνουν «ου». Δύο γράμματα, ένας ήχος!',
      en: 'ο and υ together make «ου». Two letters, one sound!',
    },
  },
  {
    q: { el: 'Ποια λέξη έχει το «ου»;', en: 'Which word has «ου» in it?' },
    options: { el: ['παιδί', 'σπίτι', 'λουλούδι', 'μάτι'], en: ['παιδί', 'σπίτι', 'λουλούδι', 'μάτι'] },
    correct: 2,
    explanation: {
      el: 'λου-λού-δι: έχει το «ου» δύο φορές! Το «ου» μένει πάντα μαζί στην ίδια συλλαβή.',
      en: 'λου-λού-δι (flower) has «ου» twice! «ου» always stays together in one syllable.',
    },
  },
  {
    q: { el: 'Ποιο λείπει; π__δί', en: 'What is missing? π__δί' },
    options: { el: ['ει', 'αι', 'οι', 'ου'], en: ['ει', 'αι', 'οι', 'ου'] },
    correct: 1,
    explanation: {
      el: 'παιδί. Το α και το ι μαζί κάνουν τον ήχο «ε»: παι-δί.',
      en: 'παιδί (child). α and ι together make the sound «ε»: παι-δί.',
    },
  },
  {
    q: { el: 'Ποια λέξη έχει το «οι»;', en: 'Which word has «οι» in it?' },
    options: { el: ['κοιμάμαι', 'κουτί', 'καιρός', 'κλειδί'], en: ['κοιμάμαι', 'κουτί', 'καιρός', 'κλειδί'] },
    correct: 0,
    explanation: {
      el: 'κοι-μά-μαι: το «οι» ακούγεται «ι». Το κουτί έχει «ου», ο καιρός «αι», το κλειδί «ει».',
      en: 'κοι-μά-μαι (I sleep): «οι» sounds like «ι». κουτί has «ου», καιρός «αι», κλειδί «ει».',
    },
  },
  {
    q: { el: 'Πόσες συλλαβές έχει η λέξη «παιχνίδι»;', en: 'How many syllables does «παιχνίδι» have?' },
    options: { el: ['4', '2', '3', '5'], en: ['4', '2', '3', '5'] },
    correct: 2,
    explanation: {
      el: 'παι-χνί-δι: τρεις συλλαβές. Το «αι» είναι ένας ήχος, άρα μία συλλαβή, όχι δύο.',
      en: 'παι-χνί-δι (toy): three syllables. «αι» is one sound, so it is one syllable, not two.',
    },
  },
];
