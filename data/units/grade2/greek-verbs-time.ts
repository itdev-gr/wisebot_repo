/**
 * Β' Δημοτικού · Γλώσσα · Ρήματα: Τώρα, Πριν, Μετά
 * ===================================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a child of 7–8. Short stems, everyday words.
 *
 * What the unit covers, in order:
 *   1–4   what a verb is, finding the "doing word" in a tiny sentence
 *   5–9   now / before / after: present, past and future forms
 *   10–13 the endings -ω / -εις / -ει and the person they show
 *   14–16 person and number: εγώ / εσύ / αυτός, one or many
 *   17–18 putting it together: choose the right form for time + person
 */
import type { QuizQuestion } from '../../../types';

export const GRADE2_GREEK_VERBS_TIME: QuizQuestion[] = [
  // ── 1–4: what a verb is ────────────────────────────────────────────────────
  {
    q: { el: 'Ποια λέξη δείχνει τι κάνει κάποιος;', en: 'Which word shows what someone does (a verb)?' },
    options: { el: ['τρέχω', 'μπάλα', 'κόκκινο', 'σπίτι'], en: ['τρέχω (I run)', 'μπάλα (ball)', 'κόκκινο (red)', 'σπίτι (house)'] },
    correct: 0,
    explanation: {
      el: 'Το «τρέχω» είναι ρήμα: δείχνει τι κάνω. Η μπάλα και το σπίτι είναι πράγματα, το κόκκινο είναι χρώμα.',
      en: '«τρέχω» is a verb: it shows what I do. Ball and house are things, red is a colour.',
    },
  },
  {
    q: { el: 'Ποια λέξη είναι ρήμα;', en: 'Which word is a verb?' },
    options: { el: ['γάτα', 'μεγάλος', 'παίζω', 'δέντρο'], en: ['γάτα (cat)', 'μεγάλος (big)', 'παίζω (I play)', 'δέντρο (tree)'] },
    correct: 2,
    explanation: {
      el: 'Το «παίζω» λέει τι κάνω, άρα είναι ρήμα. Τα ρήματα είναι λέξεις για πράξεις.',
      en: '«παίζω» says what I do, so it is a verb. Verbs are words for actions.',
    },
  },
  {
    q: { el: '«Η Ελένη διαβάζει ένα βιβλίο.» Ποιο είναι το ρήμα;', en: '«Η Ελένη διαβάζει ένα βιβλίο.» (Eleni reads a book.) Which word is the verb?' },
    options: { el: ['Ελένη', 'διαβάζει', 'ένα', 'βιβλίο'], en: ['Ελένη', 'διαβάζει', 'ένα', 'βιβλίο'] },
    correct: 1,
    explanation: {
      el: 'Τι κάνει η Ελένη; Διαβάζει! Το «διαβάζει» είναι το ρήμα της πρότασης.',
      en: 'What does Eleni do? She reads! «διαβάζει» is the verb of the sentence.',
    },
  },
  {
    q: { el: 'Ποια λέξη ΔΕΝ είναι ρήμα;', en: 'Which word is NOT a verb?' },
    options: { el: ['γράφω', 'κοιμάμαι', 'πηδάω', 'μολύβι'], en: ['γράφω (I write)', 'κοιμάμαι (I sleep)', 'πηδάω (I jump)', 'μολύβι (pencil)'] },
    correct: 3,
    explanation: {
      el: 'Το μολύβι είναι πράγμα, δεν κάνει κάτι. Γράφω, κοιμάμαι, πηδάω είναι ρήματα.',
      en: 'A pencil is a thing, it does not do anything. Write, sleep, jump are verbs.',
    },
  },

  // ── 5–9: now, before, after ────────────────────────────────────────────────
  {
    q: { el: 'Ποια πρόταση λέει κάτι που γίνεται ΤΩΡΑ;', en: 'Which sentence tells about something happening NOW?' },
    options: { el: ['Ο Νίκος παίζει.', 'Ο Νίκος έπαιξε.', 'Ο Νίκος θα παίξει.', 'Ο Νίκος έπαιζε.'], en: ['Ο Νίκος παίζει. (Nikos plays.)', 'Ο Νίκος έπαιξε. (Nikos played.)', 'Ο Νίκος θα παίξει. (Nikos will play.)', 'Ο Νίκος έπαιζε. (Nikos was playing.)'] },
    correct: 0,
    explanation: {
      el: 'Το «παίζει» δείχνει το τώρα (ενεστώτας). Το «έπαιξε» και το «έπαιζε» είναι για πριν, το «θα παίξει» για μετά.',
      en: '«παίζει» shows now (present). «έπαιξε» and «έπαιζε» are for before, «θα παίξει» for after.',
    },
  },
  {
    q: { el: 'Ποια πρόταση λέει κάτι που έγινε ΠΡΙΝ, χθες;', en: 'Which sentence tells about something that happened BEFORE, yesterday?' },
    options: { el: ['Η Μαρία τρώει.', 'Η Μαρία θα φάει.', 'Η Μαρία έφαγε.', 'Η Μαρία τρώει τώρα.'], en: ['Η Μαρία τρώει. (Maria eats.)', 'Η Μαρία θα φάει. (Maria will eat.)', 'Η Μαρία έφαγε. (Maria ate.)', 'Η Μαρία τρώει τώρα. (Maria eats now.)'] },
    correct: 2,
    explanation: {
      el: 'Το «έφαγε» δείχνει κάτι που τελείωσε, που έγινε πριν. Είναι παρελθόν.',
      en: '«έφαγε» shows something finished, that happened before. It is the past.',
    },
  },
  {
    q: { el: 'Ποια λέξη μάς δείχνει ότι κάτι θα γίνει ΜΕΤΑ, αύριο;', en: 'Which word shows that something will happen AFTER, tomorrow?' },
    options: { el: ['χθες', 'τώρα', 'θα', 'πριν'], en: ['χθες (yesterday)', 'τώρα (now)', 'θα (will)', 'πριν (before)'] },
    correct: 2,
    explanation: {
      el: 'Το μικρό «θα» μπαίνει μπροστά από το ρήμα και δείχνει το μέλλον: θα γράψω, θα παίξω.',
      en: 'The little word «θα» goes before the verb and shows the future: θα γράψω (I will write), θα παίξω (I will play).',
    },
  },
  {
    q: { el: 'Αύριο ο Γιώργος ___ στη θάλασσα.', en: 'Tomorrow Giorgos ___ in the sea. (will swim)' },
    options: { el: ['κολύμπησε', 'κολυμπάει', 'θα κολυμπήσει', 'κολυμπούσε'], en: ['κολύμπησε', 'κολυμπάει', 'θα κολυμπήσει', 'κολυμπούσε'] },
    correct: 2,
    explanation: {
      el: 'Το «αύριο» είναι μετά, άρα θέλουμε μέλλοντα: «θα κολυμπήσει».',
      en: '«Αύριο» (tomorrow) is after, so we need the future: «θα κολυμπήσει».',
    },
  },
  {
    q: { el: 'Χθες η Ελένη ___ μια ζωγραφιά.', en: 'Yesterday Eleni ___ a drawing. (drew)' },
    options: { el: ['ζωγραφίζει', 'ζωγράφισε', 'θα ζωγραφίσει', 'ζωγραφίζω'], en: ['ζωγραφίζει', 'ζωγράφισε', 'θα ζωγραφίσει', 'ζωγραφίζω'] },
    correct: 1,
    explanation: {
      el: 'Το «χθες» είναι πριν, άρα θέλουμε παρελθόν: «ζωγράφισε». Πρόσεξε τον τόνο: ζωγρΑφισε.',
      en: '«Χθες» (yesterday) is before, so we need the past: «ζωγράφισε». Notice the accent moves: ζωγρΑφισε.',
    },
  },

  // ── 10–13: the endings -ω / -εις / -ει ─────────────────────────────────────
  {
    q: { el: 'Εγώ ___ ένα γράμμα.', en: 'I ___ a letter. (write)' },
    options: { el: ['γράφεις', 'γράφει', 'γράφω', 'γράφουν'], en: ['γράφεις', 'γράφει', 'γράφω', 'γράφουν'] },
    correct: 2,
    explanation: {
      el: 'Με το «εγώ» το ρήμα τελειώνει σε -ω: εγώ γράφω.',
      en: 'With «εγώ» (I) the verb ends in -ω: εγώ γράφω.',
    },
  },
  {
    q: { el: 'Εσύ ___ πολύ ωραία.', en: 'You ___ very nicely. (sing)' },
    options: { el: ['τραγουδάω', 'τραγουδάς', 'τραγουδάει', 'τραγουδάμε'], en: ['τραγουδάω', 'τραγουδάς', 'τραγουδάει', 'τραγουδάμε'] },
    correct: 1,
    explanation: {
      el: 'Με το «εσύ» το ρήμα τελειώνει σε -εις ή -ας: εσύ τραγουδάς, εσύ παίζεις.',
      en: 'With «εσύ» (you) the verb ends in -εις or -ας: εσύ τραγουδάς, εσύ παίζεις.',
    },
  },
  {
    q: { el: 'Ο Νίκος ___ με τον σκύλο του.', en: 'Nikos ___ with his dog. (plays)' },
    options: { el: ['παίζω', 'παίζεις', 'παίζει', 'παίζετε'], en: ['παίζω', 'παίζεις', 'παίζει', 'παίζετε'] },
    correct: 2,
    explanation: {
      el: 'Ο Νίκος είναι «αυτός». Με το «αυτός» το ρήμα τελειώνει σε -ει: αυτός παίζει.',
      en: 'Nikos is «αυτός» (he). With «αυτός» the verb ends in -ει: αυτός παίζει.',
    },
  },
  {
    q: { el: 'Το ρήμα «τρέχεις» ταιριάζει με το…', en: 'The verb «τρέχεις» goes with…' },
    options: { el: ['εγώ', 'εσύ', 'αυτός', 'εμείς'], en: ['εγώ (I)', 'εσύ (you)', 'αυτός (he)', 'εμείς (we)'] },
    correct: 1,
    explanation: {
      el: 'Η κατάληξη -εις είναι για το «εσύ»: εσύ τρέχεις. Το εγώ θέλει -ω (τρέχω), ο αυτός -ει (τρέχει).',
      en: 'The ending -εις is for «εσύ» (you): εσύ τρέχεις. «Εγώ» takes -ω (τρέχω), «αυτός» takes -ει (τρέχει).',
    },
  },

  // ── 14–16: person and number ───────────────────────────────────────────────
  {
    q: { el: 'Ποια λέξη λείπει; «___ πίνει γάλα.»', en: 'Which word is missing? «___ πίνει γάλα.» (___ drinks milk.)' },
    options: { el: ['Εγώ', 'Εσύ', 'Αυτή', 'Εμείς'], en: ['Εγώ (I)', 'Εσύ (you)', 'Αυτή (she)', 'Εμείς (we)'] },
    correct: 2,
    explanation: {
      el: 'Το «πίνει» τελειώνει σε -ει, άρα μιλάμε για κάποιον άλλο: αυτή πίνει.',
      en: '«πίνει» ends in -ει, so we are talking about someone else: αυτή (she) drinks.',
    },
  },
  {
    q: { el: 'Η Μαρία και ο Γιώργος ___ στην αυλή.', en: 'Maria and Giorgos ___ in the yard. (play)' },
    options: { el: ['παίζει', 'παίζω', 'παίζουν', 'παίζεις'], en: ['παίζει', 'παίζω', 'παίζουν', 'παίζεις'] },
    correct: 2,
    explanation: {
      el: 'Είναι δύο παιδιά, άρα «αυτοί». Για πολλούς το ρήμα τελειώνει σε -ουν: αυτοί παίζουν.',
      en: 'There are two children, so «αυτοί» (they). For many people the verb ends in -ουν: αυτοί παίζουν.',
    },
  },
  {
    q: { el: 'Ποιο ρήμα είναι για ΠΟΛΛΟΥΣ (εμείς);', en: 'Which verb is for MANY people (εμείς — we)?' },
    options: { el: ['τρέχω', 'τρέχεις', 'τρέχει', 'τρέχουμε'], en: ['τρέχω (I run)', 'τρέχεις (you run)', 'τρέχει (he runs)', 'τρέχουμε (we run)'] },
    correct: 3,
    explanation: {
      el: 'Το -ουμε είναι για το «εμείς»: εμείς τρέχουμε. Τα -ω, -εις, -ει είναι για έναν.',
      en: 'The ending -ουμε is for «εμείς» (we): εμείς τρέχουμε. The endings -ω, -εις, -ει are for one person.',
    },
  },

  // ── 17–18: time + person together ──────────────────────────────────────────
  {
    q: { el: 'Χθες εγώ ___ στο πάρκο.', en: 'Yesterday I ___ to the park. (went)' },
    options: { el: ['πηγαίνω', 'πήγα', 'θα πάω', 'πήγες'], en: ['πηγαίνω', 'πήγα', 'θα πάω', 'πήγες'] },
    correct: 1,
    explanation: {
      el: 'Χθες = πριν, και μιλάει το «εγώ». Άρα «πήγα». Το «πήγες» είναι για το εσύ.',
      en: 'Yesterday = before, and «εγώ» (I) is speaking. So «πήγα». «πήγες» is for «εσύ» (you).',
    },
  },
  {
    q: { el: 'Αύριο εσύ ___ στη γιαγιά.', en: 'Tomorrow you ___ grandma. (will visit)' },
    options: { el: ['πήγες', 'θα πάω', 'θα πας', 'πηγαίνεις'], en: ['πήγες', 'θα πάω', 'θα πας', 'πηγαίνεις'] },
    correct: 2,
    explanation: {
      el: 'Αύριο = μετά, άρα «θα». Και για το «εσύ» λέμε «θα πας». Το «θα πάω» είναι για το εγώ.',
      en: 'Tomorrow = after, so we use «θα». And for «εσύ» (you) we say «θα πας». «θα πάω» is for «εγώ» (I).',
    },
  },
];
