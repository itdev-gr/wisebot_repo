/**
 * Γ' Δημοτικού · Γλώσσα · Ρήματα & Χρόνοι
 * =========================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a child of 8–9. What the unit covers, in order:
 *   1–3   Ενεστώτας: what is happening now / every day, the endings -ω, -εις, -ουμε…
 *   4–6   Παρατατικός: something that kept going or happened again and again in the past
 *   7–9   Αόριστος: something that happened once and finished
 *   10–12 Μέλλοντας: «θα» + verb, telling apart «θα καθαρίσει» from «θα καθάρισε»
 *   13–15 -ω and -ώ verbs: where the stress sits, the endings of αγαπώ / μιλώ
 *   16–18 Augment ε-: what it is, when it appears (έτρεξα) and when it does not (διάβασα, τρέξαμε)
 */
import type { QuizQuestion } from '../../../types';

export const GRADE3_GREEK_VERBS_TENSES: QuizQuestion[] = [
  // ── 1–3: Ενεστώτας ──────────────────────────────────────────────────────────
  {
    q: { el: 'Η Μαρία ___ ένα βιβλίο τώρα.', en: 'Maria ___ a book right now. (Which Greek form fits?)' },
    options: { el: ['διαβάζει', 'διάβαζε', 'διάβασε', 'θα διαβάσει'], en: ['διαβάζει', 'διάβαζε', 'διάβασε', 'θα διαβάσει'] },
    correct: 0,
    explanation: {
      el: 'Κάτι που γίνεται τώρα το λέμε με Ενεστώτα: η Μαρία διαβάζει.',
      en: 'Something happening now uses the present tense (Ενεστώτας): η Μαρία διαβάζει.',
    },
  },
  {
    q: { el: 'Ποιο ρήμα είναι σε Ενεστώτα;', en: 'Which verb is in the present tense (Ενεστώτας)?' },
    options: { el: ['έπαιζα', 'θα παίξω', 'παίζω', 'έπαιξα'], en: ['έπαιζα', 'θα παίξω', 'παίζω', 'έπαιξα'] },
    correct: 2,
    explanation: {
      el: 'Το «παίζω» λέει τι κάνω τώρα. Τα άλλα μιλούν για χθες (έπαιζα, έπαιξα) ή για αύριο (θα παίξω).',
      en: '«παίζω» says what I am doing now. The others talk about the past (έπαιζα, έπαιξα) or the future (θα παίξω).',
    },
  },
  {
    q: { el: 'Εμείς ___ στην αυλή κάθε μέρα.', en: 'We ___ in the yard every day. (Which ending goes with «εμείς»?)' },
    options: { el: ['τρέχετε', 'τρέχουμε', 'τρέχουν', 'τρέχεις'], en: ['τρέχετε', 'τρέχουμε', 'τρέχουν', 'τρέχεις'] },
    correct: 1,
    explanation: {
      el: 'Το «εμείς» θέλει την κατάληξη -ουμε: εμείς τρέχουμε. Το -ετε είναι για το «εσείς».',
      en: '«εμείς» (we) takes the ending -ουμε: εμείς τρέχουμε. The ending -ετε is for «εσείς» (you, plural).',
    },
  },

  // ── 4–6: Παρατατικός ────────────────────────────────────────────────────────
  {
    q: { el: 'Χθες, όλο το απόγευμα, ο Νίκος ___ μπάλα.', en: 'Yesterday, all afternoon, Nikos ___ ball. (Which Greek form fits?)' },
    options: { el: ['παίζει', 'έπαιξε', 'θα παίξει', 'έπαιζε'], en: ['παίζει', 'έπαιξε', 'θα παίξει', 'έπαιζε'] },
    correct: 3,
    explanation: {
      el: 'Κάτι που κρατούσε πολλή ώρα στο παρελθόν το λέμε με Παρατατικό: ο Νίκος έπαιζε όλο το απόγευμα.',
      en: 'Something that went on for a long time in the past uses the past continuous (Παρατατικός): ο Νίκος έπαιζε all afternoon.',
    },
  },
  {
    q: { el: 'Σε ποιον χρόνο είναι το ρήμα «έγραφα»;', en: 'Which tense is the verb «έγραφα» in?' },
    options: { el: ['Παρατατικός', 'Αόριστος', 'Ενεστώτας', 'Μέλλοντας'], en: ['Παρατατικός (past continuous)', 'Αόριστος (simple past)', 'Ενεστώτας (present)', 'Μέλλοντας (future)'] },
    correct: 0,
    explanation: {
      el: 'Το «έγραφα» σημαίνει «έγραφα για ώρα, συνέχεια». Αυτός είναι ο Παρατατικός. Ο Αόριστος είναι το «έγραψα».',
      en: '«έγραφα» means “I was writing, for a while”. That is the Παρατατικός. The simple past (Αόριστος) is «έγραψα».',
    },
  },
  {
    q: { el: 'Όταν ήμουν μικρή, ___ κάθε βράδυ παραμύθια.', en: 'When I was little, I ___ fairy tales every night. (Which Greek form fits?)' },
    options: { el: ['άκουσα', 'άκουγα', 'ακούω', 'θα ακούσω'], en: ['άκουσα', 'άκουγα', 'ακούω', 'θα ακούσω'] },
    correct: 1,
    explanation: {
      el: 'Κάτι που γινόταν ξανά και ξανά στο παρελθόν («κάθε βράδυ») το λέμε με Παρατατικό: άκουγα.',
      en: 'Something that happened again and again in the past (“every night”) uses the Παρατατικός: άκουγα.',
    },
  },

  // ── 7–9: Αόριστος ───────────────────────────────────────────────────────────
  {
    q: { el: 'Χθες η Ελένη ___ μια ζωγραφιά και την έδωσε στη μαμά της.', en: 'Yesterday Eleni ___ a picture and gave it to her mum. (Which Greek form fits?)' },
    options: { el: ['ζωγραφίζει', 'ζωγράφιζε', 'ζωγράφισε', 'θα ζωγραφίσει'], en: ['ζωγραφίζει', 'ζωγράφιζε', 'ζωγράφισε', 'θα ζωγραφίσει'] },
    correct: 2,
    explanation: {
      el: 'Η ζωγραφιά έγινε μία φορά και τελείωσε. Αυτό το λέμε με Αόριστο: ζωγράφισε.',
      en: 'The picture was made once and it was finished. That uses the simple past (Αόριστος): ζωγράφισε.',
    },
  },
  {
    q: { el: 'Ποιος είναι ο Αόριστος του ρήματος «γράφω»;', en: 'What is the simple past (Αόριστος) of «γράφω»?' },
    options: { el: ['έγραφα', 'έγραψα', 'γράφω', 'θα γράψω'], en: ['έγραφα', 'έγραψα', 'γράφω', 'θα γράψω'] },
    correct: 1,
    explanation: {
      el: 'Αόριστος: έγραψα (μία φορά, τελείωσε). Παρατατικός: έγραφα (για ώρα). Πρόσεξε το -ψ- και το -φ-!',
      en: 'Simple past: έγραψα (once, finished). Past continuous: έγραφα (for a while). Watch the -ψ- and the -φ-!',
    },
  },
  {
    q: { el: 'Ποια πρόταση λέει κάτι που έγινε μία φορά και τελείωσε;', en: 'Which sentence says something that happened once and finished?' },
    options: {
      el: ['Ο Γιώργος έκλεισε την πόρτα.', 'Ο Γιώργος έκλεινε την πόρτα.', 'Ο Γιώργος κλείνει την πόρτα.', 'Ο Γιώργος θα κλείσει την πόρτα.'],
      en: ['Ο Γιώργος έκλεισε την πόρτα. (closed)', 'Ο Γιώργος έκλεινε την πόρτα. (was closing)', 'Ο Γιώργος κλείνει την πόρτα. (closes)', 'Ο Γιώργος θα κλείσει την πόρτα. (will close)'],
    },
    correct: 0,
    explanation: {
      el: 'Το «έκλεισε» είναι Αόριστος: η πόρτα έκλεισε μία φορά και τελείωσε. Το «έκλεινε» δείχνει ότι κρατούσε ώρα.',
      en: '«έκλεισε» is the Αόριστος: the door was closed once and that was it. «έκλεινε» shows it was taking a while.',
    },
  },

  // ── 10–12: Μέλλοντας ────────────────────────────────────────────────────────
  {
    q: { el: 'Ποια λέξη βάζουμε μπροστά από το ρήμα για να δείξουμε ότι κάτι θα γίνει στο μέλλον;', en: 'Which little word goes before the verb to show that something will happen in the future?' },
    options: { el: ['να', 'θα', 'δεν', 'μη'], en: ['να', 'θα', 'δεν', 'μη'] },
    correct: 1,
    explanation: {
      el: 'Ο Μέλλοντας φτιάχνεται με το «θα»: θα παίξω, θα γράψω, θα τρέξω.',
      en: 'The future tense (Μέλλοντας) is made with «θα»: θα παίξω, θα γράψω, θα τρέξω.',
    },
  },
  {
    q: { el: 'Αύριο το πρωί η Ελένη ___ το δωμάτιό της.', en: 'Tomorrow morning Eleni ___ her room. (Which Greek form fits?)' },
    options: { el: ['καθαρίσει', 'θα καθαρίσει', 'καθάρισε', 'θα καθάρισε'], en: ['καθαρίσει', 'θα καθαρίσει', 'καθάρισε', 'θα καθάρισε'] },
    correct: 1,
    explanation: {
      el: 'Αύριο = μέλλον, άρα «θα καθαρίσει». Το «καθάρισε» είναι Αόριστος και δεν παίρνει «θα» μπροστά.',
      en: 'Tomorrow = future, so «θα καθαρίσει». «καθάρισε» is the simple past and never takes «θα» in front of it.',
    },
  },
  {
    q: { el: 'Σε ποιον χρόνο είναι το ρήμα στην πρόταση «Ο μπαμπάς θα μαγειρέψει μακαρόνια»;', en: 'Which tense is the verb in «Ο μπαμπάς θα μαγειρέψει μακαρόνια» (Dad will cook pasta)?' },
    options: { el: ['Ενεστώτας', 'Αόριστος', 'Μέλλοντας', 'Παρατατικός'], en: ['Ενεστώτας (present)', 'Αόριστος (simple past)', 'Μέλλοντας (future)', 'Παρατατικός (past continuous)'] },
    correct: 2,
    explanation: {
      el: 'Το «θα μαγειρέψει» έχει «θα» μπροστά, άρα είναι Μέλλοντας: δεν έγινε ακόμα, θα γίνει.',
      en: '«θα μαγειρέψει» has «θα» in front, so it is the future tense: it has not happened yet, it will.',
    },
  },

  // ── 13–15: ρήματα σε -ω και -ώ ──────────────────────────────────────────────
  {
    q: { el: 'Ποιο ρήμα τονίζεται στη λήγουσα, δηλαδή τελειώνει σε -ώ;', en: 'Which verb has its stress on the last syllable, ending in -ώ?' },
    options: { el: ['τρέχω', 'αγαπώ', 'παίζω', 'γράφω'], en: ['τρέχω', 'αγαπώ', 'παίζω', 'γράφω'] },
    correct: 1,
    explanation: {
      el: 'Τα ρήματα τρέχ-ω, παίζ-ω, γράφ-ω τονίζονται πιο πριν. Το αγαπ-ώ τονίζεται στο τέλος, γι\' αυτό γράφεται με -ώ.',
      en: 'τρέχ-ω, παίζ-ω, γράφ-ω are stressed earlier in the word. αγαπ-ώ is stressed at the end, so it is written with -ώ.',
    },
  },
  {
    q: { el: 'Εσύ ___ πολύ το σκυλάκι σου.', en: 'You (one person) ___ your little dog very much. (Which form of «αγαπώ» fits?)' },
    options: { el: ['αγαπείς', 'αγαπάς', 'αγαπώ', 'αγαπάει'], en: ['αγαπείς', 'αγαπάς', 'αγαπώ', 'αγαπάει'] },
    correct: 1,
    explanation: {
      el: 'Τα ρήματα σε -ώ λένε: εγώ αγαπώ, εσύ αγαπάς, αυτός αγαπάει. Το «αγαπείς» δεν υπάρχει.',
      en: 'Verbs in -ώ go: εγώ αγαπώ, εσύ αγαπάς, αυτός αγαπάει. «αγαπείς» is not a real form.',
    },
  },
  {
    q: { el: 'Οι φίλοι μου ___ πολύ δυνατά.', en: 'My friends ___ very loudly. (Which form of «μιλώ» fits?)' },
    options: { el: ['μιλάουν', 'μιλείτε', 'μιλώ', 'μιλούν'], en: ['μιλάουν', 'μιλείτε', 'μιλώ', 'μιλούν'] },
    correct: 3,
    explanation: {
      el: 'Για το «αυτοί» τα ρήματα σε -ώ παίρνουν -ούν: αυτοί μιλούν, αγαπούν, ρωτούν.',
      en: 'For «αυτοί» (they), verbs in -ώ take -ούν: αυτοί μιλούν, αγαπούν, ρωτούν.',
    },
  },

  // ── 16–18: η αύξηση ε- ──────────────────────────────────────────────────────
  {
    q: { el: 'Στο ρήμα «έτρεξα» ποιο κομμάτι είναι η αύξηση;', en: 'In the verb «έτρεξα», which part is the augment (αύξηση)?' },
    options: { el: ['το -α στο τέλος', 'το ε- στην αρχή', 'το τρεξ- στη μέση', 'το -ξ-'], en: ['the -α at the end', 'the ε- at the start', 'the τρεξ- in the middle', 'the -ξ-'] },
    correct: 1,
    explanation: {
      el: 'Η αύξηση είναι το ε- που μπαίνει μπροστά στο ρήμα όταν μιλάμε για το παρελθόν: τρέχω → έ-τρεξα.',
      en: 'The augment is the ε- that goes in front of the verb when we talk about the past: τρέχω → έ-τρεξα.',
    },
  },
  {
    q: { el: 'Ποιος είναι ο Αόριστος του ρήματος «διαβάζω»;', en: 'What is the simple past (Αόριστος) of «διαβάζω»?' },
    options: { el: ['εδιάβασα', 'διαβάσα', 'διάβασα', 'έδιαβασα'], en: ['εδιάβασα', 'διαβάσα', 'διάβασα', 'έδιαβασα'] },
    correct: 2,
    explanation: {
      el: 'Το «διαβάζω» είναι μεγάλο ρήμα, έχει αρκετές συλλαβές. Δεν χρειάζεται ε- μπροστά: διάβασα, με τον τόνο στο -ά-.',
      en: '«διαβάζω» is a long verb with enough syllables. It needs no ε- in front: διάβασα, with the stress on -ά-.',
    },
  },
  {
    q: { el: 'Χθες εμείς ___ πολύ γρήγορα για να προλάβουμε το λεωφορείο.', en: 'Yesterday we ___ very fast to catch the bus. (Which form of «τρέχω» is spelled correctly?)' },
    options: { el: ['τρέξαμε', 'ετρέξαμε', 'έτρεξαμε', 'τρεξάμε'], en: ['τρέξαμε', 'ετρέξαμε', 'έτρεξαμε', 'τρεξάμε'] },
    correct: 0,
    explanation: {
      el: 'Το ε- το κρατάμε μόνο όταν παίρνει τον τόνο: έ-τρεξα, έ-τρεξες. Στο «τρέξαμε» ο τόνος πάει στο -έ- της μέσης, άρα το ε- φεύγει.',
      en: 'We keep the ε- only when it carries the stress: έ-τρεξα, έ-τρεξες. In «τρέξαμε» the stress moves to the middle -έ-, so the ε- drops away.',
    },
  },
];
