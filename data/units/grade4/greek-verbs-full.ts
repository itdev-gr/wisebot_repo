/**
 * Δ' Δημοτικού · Γλώσσα · Ρήματα: Χρόνοι & Φωνές
 * ================================================
 * All questions are original (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a child of 9–10. What the unit covers, in order:
 *   1–9   the eight tenses: ενεστώτας, παρατατικός, αόριστος, εξακολουθητικός &
 *         συνοπτικός μέλλοντας, παρακείμενος, υπερσυντέλικος, συντελεσμένος μέλλοντας
 *   10–13 active vs passive voice: the -ομαι endings, recognising and forming passive forms
 *   14–15 continuous vs simple aspect (έγραφε vs έγραψε)
 *   16–18 the subjunctive with να/θα: continuous vs simple, active and passive
 * Distractors are the mistakes children actually make (wrong tense, wrong person,
 * continuous where simple is needed). The UI shuffles options.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE4_GREEK_VERBS_FULL: QuizQuestion[] = [
  // ── 1–9: the eight tenses ───────────────────────────────────────────────────
  {
    q: { el: '«Η Μαρία διαβάζει ένα βιβλίο.» Σε ποιον χρόνο είναι το ρήμα;', en: '“Η Μαρία διαβάζει ένα βιβλίο.” (Maria is reading a book.) Which tense is the verb in?' },
    options: { el: ['Ενεστώτας', 'Παρατατικός', 'Αόριστος', 'Μέλλοντας'], en: ['Ενεστώτας (present)', 'Παρατατικός (past continuous)', 'Αόριστος (simple past)', 'Μέλλοντας (future)'] },
    correct: 0,
    explanation: {
      el: 'Το «διαβάζει» δείχνει κάτι που γίνεται τώρα. Ο χρόνος του τώρα λέγεται ενεστώτας.',
      en: '“Διαβάζει” shows something happening now. The tense of “now” is the ενεστώτας (present).',
    },
  },
  {
    q: { el: 'Χθες όλο το απόγευμα ο Νίκος ___ με τον σκύλο του. Ποια λέξη ταιριάζει;', en: 'Yesterday, all afternoon, Nikos ___ with his dog. Which word fits?' },
    options: { el: ['έπαιξε', 'έπαιζε', 'παίζει', 'θα παίζει'], en: ['έπαιξε', 'έπαιζε', 'παίζει', 'θα παίζει'] },
    correct: 1,
    explanation: {
      el: '«Όλο το απόγευμα» σημαίνει ότι το παιχνίδι κράτησε πολλή ώρα στο παρελθόν. Αυτό το λέει ο παρατατικός: έπαιζε.',
      en: '“All afternoon” means the playing went on for a long time in the past. That is the παρατατικός: έπαιζε.',
    },
  },
  {
    q: { el: '«Η Ελένη έγραψε ένα γράμμα.» Σε ποιον χρόνο είναι το ρήμα;', en: '“Η Ελένη έγραψε ένα γράμμα.” (Eleni wrote a letter.) Which tense is the verb in?' },
    options: { el: ['Παρατατικός', 'Ενεστώτας', 'Αόριστος', 'Παρακείμενος'], en: ['Παρατατικός (past continuous)', 'Ενεστώτας (present)', 'Αόριστος (simple past)', 'Παρακείμενος (present perfect)'] },
    correct: 2,
    explanation: {
      el: 'Το «έγραψε» δείχνει κάτι που έγινε στο παρελθόν και τελείωσε, μια φορά. Αυτός είναι ο αόριστος.',
      en: '“Έγραψε” shows something that happened in the past and finished, once. That is the αόριστος.',
    },
  },
  {
    q: { el: 'Από τον Σεπτέμβρη θα ___ κάθε μέρα στο σχολείο με το ποδήλατο. Ποια λέξη ταιριάζει;', en: 'From September I will ___ to school by bike every day. Which word fits?' },
    options: { el: ['πηγαίνω', 'πάω', 'πήγα', 'πήγαινα'], en: ['πηγαίνω', 'πάω', 'πήγα', 'πήγαινα'] },
    correct: 0,
    explanation: {
      el: '«Κάθε μέρα» στο μέλλον = κάτι που θα γίνεται ξανά και ξανά. Αυτός είναι ο εξακολουθητικός μέλλοντας: θα πηγαίνω.',
      en: '“Every day” in the future = something that will keep happening. That is the continuous future: θα πηγαίνω.',
    },
  },
  {
    q: { el: 'Αύριο το πρωί ο Νίκος θα ___ μία φορά στη γιαγιά του. Ποια λέξη ταιριάζει;', en: 'Tomorrow morning Nikos will ___ his grandma once. Which word fits?' },
    options: { el: ['τηλεφωνεί', 'τηλεφωνούσε', 'τηλεφωνήσει', 'τηλεφώνησε'], en: ['τηλεφωνεί', 'τηλεφωνούσε', 'τηλεφωνήσει', 'τηλεφώνησε'] },
    correct: 2,
    explanation: {
      el: 'Κάτι που θα γίνει μία φορά στο μέλλον το λέει ο συνοπτικός μέλλοντας: θα τηλεφωνήσει. Το «θα τηλεφωνεί» θα σήμαινε συνέχεια.',
      en: 'Something that will happen once in the future uses the simple future: θα τηλεφωνήσει. “Θα τηλεφωνεί” would mean again and again.',
    },
  },
  {
    q: { el: '«Η Μαρία έχει τελειώσει τα μαθήματά της.» Σε ποιον χρόνο είναι το ρήμα;', en: '“Η Μαρία έχει τελειώσει τα μαθήματά της.” (Maria has finished her homework.) Which tense is the verb in?' },
    options: { el: ['Αόριστος', 'Υπερσυντέλικος', 'Ενεστώτας', 'Παρακείμενος'], en: ['Αόριστος (simple past)', 'Υπερσυντέλικος (past perfect)', 'Ενεστώτας (present)', 'Παρακείμενος (present perfect)'] },
    correct: 3,
    explanation: {
      el: 'Ο παρακείμενος φτιάχνεται με «έχω» + το ρήμα: έχει τελειώσει. Δείχνει κάτι που τελείωσε και ισχύει και τώρα.',
      en: 'The παρακείμενος is made with “έχω” (have) + the verb: έχει τελειώσει. It shows something finished that still counts now.',
    },
  },
  {
    q: { el: 'Όταν ήρθε η Ελένη, ο Γιώργος ___ ήδη φάει. Ποια λέξη ταιριάζει;', en: 'When Eleni arrived, Giorgos ___ already eaten. Which word fits?' },
    options: { el: ['έχει', 'είχε', 'θα έχει', 'θα είχε'], en: ['έχει', 'είχε', 'θα έχει', 'θα είχε'] },
    correct: 1,
    explanation: {
      el: 'Το φαγητό τελείωσε πριν έρθει η Ελένη, δηλαδή πριν από κάτι άλλο στο παρελθόν. Αυτό το λέει ο υπερσυντέλικος: είχε φάει.',
      en: 'The eating finished before Eleni came, so before something else in the past. That is the υπερσυντέλικος: είχε φάει.',
    },
  },
  {
    q: { el: 'Ποιος από τους παρακάτω τύπους είναι συντελεσμένος μέλλοντας;', en: 'Which of these forms is the συντελεσμένος μέλλοντας (future perfect)?' },
    options: { el: ['θα έχω διαβάσει', 'έχω διαβάσει', 'είχα διαβάσει', 'θα διαβάσω'], en: ['θα έχω διαβάσει', 'έχω διαβάσει', 'είχα διαβάσει', 'θα διαβάσω'] },
    correct: 0,
    explanation: {
      el: 'Ο συντελεσμένος μέλλοντας φτιάχνεται με «θα έχω» + το ρήμα: θα έχω διαβάσει. Λέει ότι κάτι θα έχει τελειώσει μέχρι μια στιγμή στο μέλλον.',
      en: 'The future perfect is made with “θα έχω” + the verb: θα έχω διαβάσει. It says something will be finished by a moment in the future.',
    },
  },
  {
    q: { el: 'Πόσους χρόνους έχει το ρήμα στα ελληνικά;', en: 'How many tenses does a Greek verb have?' },
    options: { el: ['6', '7', '8', '10'], en: ['6', '7', '8', '10'] },
    correct: 2,
    explanation: {
      el: 'Οκτώ: ενεστώτας, παρατατικός, αόριστος, εξακολουθητικός μέλλοντας, συνοπτικός μέλλοντας, παρακείμενος, υπερσυντέλικος, συντελεσμένος μέλλοντας.',
      en: 'Eight: present, past continuous, simple past, continuous future, simple future, present perfect, past perfect and future perfect.',
    },
  },

  // ── 10–13: active vs passive voice ─────────────────────────────────────────
  {
    q: { el: 'Τα ρήματα της παθητικής φωνής στον ενεστώτα τελειώνουν σε…', en: 'In the present tense, passive-voice verbs end in…' },
    options: { el: ['-ω', '-εις', '-ομαι', '-ουμε'], en: ['-ω', '-εις', '-ομαι', '-ουμε'] },
    correct: 2,
    explanation: {
      el: 'Ενεργητική φωνή: πλένω, ντύνω (-ω). Παθητική φωνή: πλένομαι, ντύνομαι (-ομαι).',
      en: 'Active voice: πλένω, ντύνω (-ω). Passive voice: πλένομαι, ντύνομαι (-ομαι).',
    },
  },
  {
    q: { el: 'Ποιο από τα παρακάτω ρήματα είναι στην παθητική φωνή;', en: 'Which of these verbs is in the passive voice?' },
    options: { el: ['ντύνω', 'έντυσα', 'θα ντύσω', 'ντύνομαι'], en: ['ντύνω', 'έντυσα', 'θα ντύσω', 'ντύνομαι'] },
    correct: 3,
    explanation: {
      el: 'Το «ντύνομαι» τελειώνει σε -ομαι, άρα είναι παθητική φωνή: ντύνω τον εαυτό μου. Τα άλλα τρία είναι ενεργητική φωνή σε διάφορους χρόνους.',
      en: '“Ντύνομαι” ends in -ομαι, so it is passive: I dress myself. The other three are active voice in different tenses.',
    },
  },
  {
    q: { el: 'Ο Γιώργος ___ κάθε πρωί με κρύο νερό. Ποια λέξη ταιριάζει;', en: 'Giorgos ___ (washes himself) every morning with cold water. Which word fits?' },
    options: { el: ['πλένει', 'πλένεται', 'πλένετε', 'πλένονται'], en: ['πλένει', 'πλένεται', 'πλένετε', 'πλένονται'] },
    correct: 1,
    explanation: {
      el: 'Ο Γιώργος πλένει τον εαυτό του, άρα παθητική φωνή: πλένεται. Προσοχή: το «πλένετε» με -ετε είναι «εσείς» στην ενεργητική φωνή!',
      en: 'Giorgos washes himself, so passive voice: πλένεται. Careful: “πλένετε” with -ετε means “you (plural) wash” in the active voice!',
    },
  },
  {
    q: { el: 'Ποιος είναι ο αόριστος του ρήματος «χτενίζομαι»;', en: 'What is the αόριστος (simple past) of the verb “χτενίζομαι” (I comb my hair)?' },
    options: { el: ['χτενιζόμουν', 'χτενίστηκα', 'χτένισα', 'θα χτενιστώ'], en: ['χτενιζόμουν', 'χτενίστηκα', 'χτένισα', 'θα χτενιστώ'] },
    correct: 1,
    explanation: {
      el: 'Στην παθητική φωνή ο αόριστος τελειώνει σε -θηκα ή -στηκα: χτενίστηκα. Το «χτένισα» είναι ενεργητική φωνή (χτένισα κάποιον άλλον).',
      en: 'In the passive voice the simple past ends in -θηκα or -στηκα: χτενίστηκα. “Χτένισα” is active (I combed someone else).',
    },
  },

  // ── 14–15: continuous vs simple aspect ────────────────────────────────────
  {
    q: { el: 'Ποια πρόταση δείχνει κάτι που γινόταν για πολλή ώρα στο παρελθόν;', en: 'Which sentence shows something that went on for a long time in the past?' },
    options: { el: ['Ο Νίκος έγραψε το όνομά του.', 'Ο Νίκος έγραφε όλο το απόγευμα.', 'Ο Νίκος θα γράψει αύριο.', 'Ο Νίκος έχει γράψει την άσκηση.'], en: ['Ο Νίκος έγραψε το όνομά του. (Nikos wrote his name.)', 'Ο Νίκος έγραφε όλο το απόγευμα. (Nikos was writing all afternoon.)', 'Ο Νίκος θα γράψει αύριο. (Nikos will write tomorrow.)', 'Ο Νίκος έχει γράψει την άσκηση. (Nikos has written the exercise.)'] },
    correct: 1,
    explanation: {
      el: 'Το «έγραφε» (παρατατικός) δείχνει κάτι που κρατούσε ώρα. Το «έγραψε» (αόριστος) δείχνει κάτι που έγινε μια φορά και τελείωσε.',
      en: '“Έγραφε” (past continuous) shows something that lasted a while. “Έγραψε” (simple past) shows something done once and finished.',
    },
  },
  {
    q: { el: 'Ξαφνικά ο σκύλος ___ και έτρεξε στην αυλή. Ποια λέξη ταιριάζει;', en: 'Suddenly the dog ___ (barked) and ran into the yard. Which word fits?' },
    options: { el: ['γάβγιζε', 'γαβγίζει', 'γάβγισε', 'θα γαβγίζει'], en: ['γάβγιζε', 'γαβγίζει', 'γάβγισε', 'θα γαβγίζει'] },
    correct: 2,
    explanation: {
      el: 'Το «ξαφνικά» δείχνει κάτι που έγινε μια στιγμή, όχι συνέχεια. Γι\' αυτό θέλουμε αόριστο: γάβγισε. Το «γάβγιζε» θα σήμαινε ότι γάβγιζε ώρα.',
      en: '“Suddenly” shows something that happened in a moment, not continuously. So we need the simple past: γάβγισε. “Γάβγιζε” would mean it kept barking.',
    },
  },

  // ── 16–18: the subjunctive with να / θα ───────────────────────────────────
  {
    q: { el: 'Θέλω να ___ κάθε μέρα λίγο πιάνο. Ποια λέξη ταιριάζει;', en: 'I want to ___ (play) a little piano every day. Which word fits?' },
    options: { el: ['παίξω', 'παίζω', 'έπαιζα', 'παίζει'], en: ['παίξω', 'παίζω', 'έπαιζα', 'παίζει'] },
    correct: 1,
    explanation: {
      el: 'Μετά το «να» διαλέγουμε: «να παίζω» για κάτι που θα γίνεται συνέχεια (κάθε μέρα) και «να παίξω» για κάτι που θα γίνει μία φορά.',
      en: 'After “να” we choose: “να παίζω” for something that keeps happening (every day) and “να παίξω” for something done once.',
    },
  },
  {
    q: { el: 'Η Μαρία θέλει να ___ το παράθυρο τώρα. Ποια λέξη ταιριάζει;', en: 'Maria wants to ___ (open) the window now. Which word fits?' },
    options: { el: ['ανοίγει', 'άνοιξε', 'ανοίξει', 'άνοιγε'], en: ['ανοίγει', 'άνοιξε', 'ανοίξει', 'άνοιγε'] },
    correct: 2,
    explanation: {
      el: 'Θα το ανοίξει μία φορά, τώρα: να ανοίξει. Μετά το «να» δεν βάζουμε ποτέ αόριστο (άνοιξε) ή παρατατικό (άνοιγε).',
      en: 'She will open it once, now: να ανοίξει. After “να” we never use the simple past (άνοιξε) or the past continuous (άνοιγε).',
    },
  },
  {
    q: { el: 'Η Ελένη πρέπει να ___ γρήγορα για να προλάβει το λεωφορείο. Ποια λέξη ταιριάζει;', en: 'Eleni has to ___ (get dressed) quickly to catch the bus. Which word fits?' },
    options: { el: ['ντύνεται', 'ντυθεί', 'ντύθηκε', 'ντυνόταν'], en: ['ντύνεται', 'ντυθεί', 'ντύθηκε', 'ντυνόταν'] },
    correct: 1,
    explanation: {
      el: 'Παθητική φωνή (ντύνει τον εαυτό της) και μία φορά, γρήγορα: να ντυθεί. Το «να ντύνεται» θα σήμαινε κάθε μέρα.',
      en: 'Passive voice (she dresses herself) and once, quickly: να ντυθεί. “Να ντύνεται” would mean every day.',
    },
  },
];
