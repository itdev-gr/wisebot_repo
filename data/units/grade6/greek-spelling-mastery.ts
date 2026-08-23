/**
 * ΣΤ' Δημοτικού · Γλώσσα · Ορθογραφία για Προχωρημένους / Spelling Mastery
 * =========================================================================
 * 18 original questions for a child of 11–12, ordered easy → hard:
 *   1–4   ancient-rooted spellings (ήλιος, λείπω, συγγνώμη, διεύθυνση)
 *   5–10  -ει / -η / -ι endings by part of speech (verbs, neuter nouns, feminine nouns, -υ exceptions, plural -εις)
 *   11–14 participle endings -μένος / -μένη / -μένα and the -μμένος family
 *   15–18 the second accent in enclitic groups (το αυτοκίνητό μου, φέρε μού το)
 */
import type { QuizQuestion } from '../../../types';

export const GRADE6_GREEK_SPELLING_MASTERY: QuizQuestion[] = [
  // ── 1–4: ancient-rooted spellings ───────────────────────────────────────────
  {
    q: { el: 'Ποια είναι η σωστή γραφή της λέξης που σημαίνει «το άστρο που μας φωτίζει τη μέρα»;', en: 'Which is the correct spelling of the Greek word for “sun”?' },
    options: { el: ['ίλιος', 'ήλιος', 'οίλιος', 'ύλιος'], en: ['ίλιος', 'ήλιος', 'οίλιος', 'ύλιος'] },
    correct: 1,
    explanation: {
      el: 'Η λέξη «ήλιος» γράφεται με «η» επειδή έρχεται από την αρχαία λέξη «ἥλιος». Το ίδιο «η» κρατούν και οι λέξεις ηλιόλουστος, ηλιοβασίλεμα.',
      en: '«ήλιος» keeps the «η» of the ancient word «ἥλιος». Related words like ηλιόλουστος and ηλιοβασίλεμα keep the same «η».',
    },
  },
  {
    q: { el: 'Ο Νίκος σήμερα δεν ήρθε στο σχολείο. Ποιο ρήμα είναι σωστά γραμμένο;', en: 'Nikos did not come to school today. Which spelling of the verb “to be absent” is correct?' },
    options: { el: ['λίπω', 'λήπω', 'λείπω', 'λοίπω'], en: ['λίπω', 'λήπω', 'λείπω', 'λοίπω'] },
    correct: 2,
    explanation: {
      el: 'Το «λείπω» γράφεται με «ει» από τα αρχαία χρόνια. Το ίδιο «ει» έχουν και οι λέξεις έλλειψη, ελλιπής, παράλειψη.',
      en: '«λείπω» has been written with «ει» since ancient Greek. Its relatives έλλειψη, ελλιπής and παράλειψη keep the same «ει».',
    },
  },
  {
    q: { el: 'Η Μαρία πάτησε κατά λάθος το πόδι της Ελένης. Τι της λέει;', en: 'Maria accidentally stepped on Eleni’s foot. Which spelling of “sorry” is correct?' },
    options: { el: ['συγνώμη', 'συγγνώμη', 'σιγνώμη', 'συγγνόμη'], en: ['συγνώμη', 'συγγνώμη', 'σιγνώμη', 'συγγνόμη'] },
    correct: 1,
    explanation: {
      el: 'Η λέξη είναι συν + γνώμη. Το «ν» πριν από το «γ» έγινε «γ», γι\' αυτό γράφουμε δύο «γ»: συγ-γνώμη.',
      en: 'The word is συν + γνώμη. The «ν» before «γ» turned into «γ», so we write two «γ»: συγ-γνώμη.',
    },
  },
  {
    q: { el: 'Ο ταχυδρόμος ψάχνει το σπίτι του Γιώργου. Ποια λέξη είναι σωστά γραμμένη;', en: 'The postman is looking for Giorgos’s house. Which spelling of the word for “address” is correct?' },
    options: { el: ['διεύθυνση', 'διέφθυνση', 'διεύθηνση', 'διεύθινση'], en: ['διεύθυνση', 'διέφθυνση', 'διεύθηνση', 'διεύθινση'] },
    correct: 0,
    explanation: {
      el: 'Η «διεύθυνση» έρχεται από το ρήμα διευθύνω (δια + ευθύνω), από το αρχαίο «ευθύς» = ίσιος. Γι\' αυτό γράφεται με «ευ» και «υ».',
      en: '«διεύθυνση» comes from the verb διευθύνω (δια + ευθύνω), from the ancient «ευθύς» = straight. That is why it has «ευ» and «υ».',
    },
  },

  // ── 5–10: -ει / -η / -ι by part of speech ───────────────────────────────────
  {
    q: { el: 'Η Μαρία ___ στην αυλή. Ποια γραφή είναι σωστή;', en: 'Maria ___ in the yard (“plays”). Which spelling is correct?' },
    options: { el: ['παίζει', 'παίζη', 'παίζι', 'παίζοι'], en: ['παίζει', 'παίζη', 'παίζι', 'παίζοι'] },
    correct: 0,
    explanation: {
      el: 'Τα ρήματα στο τρίτο πρόσωπο (αυτός, αυτή, αυτό) τελειώνουν πάντα σε -ει: παίζει, τρέχει, γράφει.',
      en: 'Verbs in the third person singular (he, she, it) always end in -ει: παίζει, τρέχει, γράφει.',
    },
  },
  {
    q: { el: 'Ποια είναι η σωστή γραφή; «Το ___ κοιμάται.»', en: 'Which spelling is correct? «Το ___ κοιμάται.» (“The child is sleeping.”)' },
    options: { el: ['παιδή', 'παιδί', 'παιδεί', 'παιδύ'], en: ['παιδή', 'παιδί', 'παιδεί', 'παιδύ'] },
    correct: 1,
    explanation: {
      el: 'Τα ουδέτερα ουσιαστικά (το…) που τελειώνουν σε /i/ γράφονται με «ι»: το παιδί, το σπίτι, το κλειδί.',
      en: 'Neuter nouns (το…) that end in the sound /i/ are written with «ι»: το παιδί, το σπίτι, το κλειδί.',
    },
  },
  {
    q: { el: 'Η ομάδα πανηγυρίζει τη μεγάλη ___. Ποια γραφή είναι σωστή;', en: 'The team celebrates the big ___ (“victory”). Which spelling is correct?' },
    options: { el: ['νίκι', 'νίκει', 'νίκη', 'νίκυ'], en: ['νίκι', 'νίκει', 'νίκη', 'νίκυ'] },
    correct: 2,
    explanation: {
      el: 'Τα θηλυκά ουσιαστικά (η…) που τελειώνουν σε /i/ γράφονται με «η»: η νίκη, η αγάπη, η βροχή.',
      en: 'Feminine nouns (η…) that end in the sound /i/ are written with «η»: η νίκη, η αγάπη, η βροχή.',
    },
  },
  {
    q: { el: 'Ποια από τις παρακάτω φράσεις έχει ορθογραφικό λάθος;', en: 'Which of these phrases has a spelling mistake?' },
    options: { el: ['η βροχή', 'το κλειδί', 'ο Νίκος γράφη', 'η αδελφή'], en: ['η βροχή', 'το κλειδί', 'ο Νίκος γράφη', 'η αδελφή'] },
    correct: 2,
    explanation: {
      el: 'Το «γράφη» είναι ρήμα, άρα θέλει -ει: ο Νίκος γράφει. Το «η» το κρατάμε για τα θηλυκά ουσιαστικά (η βροχή, η αδελφή) και το «ι» για τα ουδέτερα (το κλειδί).',
      en: '«γράφη» is a verb, so it needs -ει: ο Νίκος γράφει. We keep «η» for feminine nouns (η βροχή, η αδελφή) and «ι» for neuter nouns (το κλειδί).',
    },
  },
  {
    q: { el: 'Το ___ η Ελένη διαβάζει ένα βιβλίο. Ποια γραφή είναι σωστή;', en: 'In the ___ (“evening”) Eleni reads a book. Which spelling is correct?' },
    options: { el: ['βράδι', 'βράδη', 'βράδει', 'βράδυ'], en: ['βράδι', 'βράδη', 'βράδει', 'βράδυ'] },
    correct: 3,
    explanation: {
      el: 'Λίγα ουδέτερα γράφονται με «υ» αντί για «ι», επειδή έτσι ήταν στα αρχαία: το βράδυ, το δάκρυ, το δίχτυ, το στάχυ.',
      en: 'A few neuter nouns are written with «υ» instead of «ι» because that is how they were in ancient Greek: το βράδυ, το δάκρυ, το δίχτυ, το στάχυ.',
    },
  },
  {
    q: { el: 'Η Αθήνα και η Θεσσαλονίκη είναι μεγάλες ___. Ποια γραφή είναι σωστή;', en: 'Athens and Thessaloniki are big ___ (“cities”). Which spelling is correct?' },
    options: { el: ['πόλεις', 'πόλης', 'πόλις', 'πόλοις'], en: ['πόλεις', 'πόλης', 'πόλις', 'πόλοις'] },
    correct: 0,
    explanation: {
      el: 'Τα θηλυκά σε -η που έρχονται από τα αρχαία (η πόλη, η σκέψη, η δύναμη) κάνουν τον πληθυντικό σε -εις: οι πόλεις, οι σκέψεις, οι δυνάμεις.',
      en: 'Feminine nouns in -η that come from ancient Greek (η πόλη, η σκέψη, η δύναμη) form their plural in -εις: οι πόλεις, οι σκέψεις, οι δυνάμεις.',
    },
  },

  // ── 11–14: participles in -μένος ───────────────────────────────────────────
  {
    q: { el: 'Ο Γιώργος έτρεξε πολύ και τώρα είναι ___. Ποια γραφή είναι σωστή;', en: 'Giorgos ran a lot and now he is ___ (“tired”). Which spelling is correct?' },
    options: { el: ['κουρασμήνος', 'κουρασμένος', 'κουρασμαίνος', 'κουρασμίνος'], en: ['κουρασμήνος', 'κουρασμένος', 'κουρασμαίνος', 'κουρασμίνος'] },
    correct: 1,
    explanation: {
      el: 'Οι μετοχές που δείχνουν κατάσταση τελειώνουν πάντα σε -μένος με «ε»: κουρασμένος, χαρούμενος, διαβασμένος.',
      en: 'Participles that describe a state always end in -μένος with «ε»: κουρασμένος, χαρούμενος, διαβασμένος.',
    },
  },
  {
    q: { el: 'Η πόρτα της τάξης είναι ___. Ποια γραφή είναι σωστή;', en: 'The classroom door is ___ (“open”). Which spelling is correct?' },
    options: { el: ['ανοιγμένη', 'ανοιγμένι', 'ανοιγμένει', 'ανοιγμένυ'], en: ['ανοιγμένη', 'ανοιγμένι', 'ανοιγμένει', 'ανοιγμένυ'] },
    correct: 0,
    explanation: {
      el: 'Η μετοχή συμφωνεί με το ουσιαστικό. Η πόρτα είναι θηλυκό, άρα -μένη: ανοιγμένη, όπως λέμε η κουρασμένη, η χαρούμενη.',
      en: 'The participle agrees with its noun. «Η πόρτα» is feminine, so it takes -μένη: ανοιγμένη, just like η κουρασμένη, η χαρούμενη.',
    },
  },
  {
    q: { el: 'Τα βιβλία της Μαρίας είναι όλα ___. Ποια μορφή ταιριάζει;', en: 'Maria’s books are all ___ (“read”). Which form fits?' },
    options: { el: ['διαβασμένες', 'διαβασμένα', 'διαβασμένοι', 'διαβασμένη'], en: ['διαβασμένες', 'διαβασμένα', 'διαβασμένοι', 'διαβασμένη'] },
    correct: 1,
    explanation: {
      el: '«Τα βιβλία» είναι ουδέτερο στον πληθυντικό, άρα η μετοχή τελειώνει σε -μένα: διαβασμένα. Το -μένες είναι για θηλυκά (οι πόρτες) και το -μένοι για αρσενικά (οι μαθητές).',
      en: '«Τα βιβλία» is neuter plural, so the participle ends in -μένα: διαβασμένα. -μένες is for feminine plurals (οι πόρτες) and -μένοι for masculine (οι μαθητές).',
    },
  },
  {
    q: { el: 'Το γράμμα είναι ___ από τη Μαρία. Ποια γραφή είναι σωστή;', en: 'The letter is ___ (“written”) by Maria. Which spelling is correct?' },
    options: { el: ['γραμένο', 'γραμμαίνο', 'γραμμένο', 'γραμαίνο'], en: ['γραμένο', 'γραμμαίνο', 'γραμμένο', 'γραμαίνο'] },
    correct: 2,
    explanation: {
      el: 'Τα ρήματα σε -φω, -βω, -πω κάνουν τη μετοχή με δύο «μ»: γράφω → γραμμένος, κρύβω → κρυμμένος, βάφω → βαμμένος. Η κατάληξη μένει -μένος με «ε».',
      en: 'Verbs ending in -φω, -βω, -πω form their participle with double «μ»: γράφω → γραμμένος, κρύβω → κρυμμένος, βάφω → βαμμένος. The ending stays -μένος with «ε».',
    },
  },

  // ── 15–18: accent in enclitic groups ───────────────────────────────────────
  {
    q: { el: 'Ποια φράση είναι τονισμένη σωστά;', en: 'Which phrase has the correct accents? (“my car”)' },
    options: { el: ['το αυτοκίνητό μου', 'το αυτοκίνητο μου', 'το αυτοκίνητο μού', 'το αυτοκινητό μου'], en: ['το αυτοκίνητό μου', 'το αυτοκίνητο μου', 'το αυτοκίνητο μού', 'το αυτοκινητό μου'] },
    correct: 0,
    explanation: {
      el: 'Όταν μια λέξη τονίζεται στην προπαραλήγουσα (αυ-το-ΚΙ-νη-το) και ακολουθεί μια άτονη λεξούλα (μου, σου, του…), παίρνει και δεύτερο τόνο στη λήγουσα: το αυτοκίνητό μου.',
      en: 'When a word is stressed on the third syllable from the end (αυ-το-ΚΙ-νη-το) and is followed by an unstressed little word (μου, σου, του…), it gets a second accent on its last syllable: το αυτοκίνητό μου.',
    },
  },
  {
    q: { el: 'Ποια φράση είναι τονισμένη σωστά;', en: 'Which phrase has the correct accents? (“our teacher”)' },
    options: { el: ['ο δάσκαλος μας', 'ο δάσκαλός μας', 'ο δασκάλος μας', 'ο δάσκαλος μάς'], en: ['ο δάσκαλος μας', 'ο δάσκαλός μας', 'ο δασκάλος μας', 'ο δάσκαλος μάς'] },
    correct: 1,
    explanation: {
      el: 'Το «δάσκαλος» τονίζεται στην προπαραλήγουσα. Με το «μας» από πίσω, παίρνει δεύτερο τόνο: ο δάσκαλός μας. Ο τόνος πάει στη λέξη, όχι στο «μας».',
      en: '«δάσκαλος» is stressed on the third syllable from the end. With «μας» after it, it takes a second accent: ο δάσκαλός μας. The accent goes on the main word, not on «μας».',
    },
  },
  {
    q: { el: 'Ποια φράση είναι τονισμένη σωστά;', en: 'Which phrase has the correct accents? (“my mother”)' },
    options: { el: ['η μητέρα μού', 'η μητέρά μου', 'η μήτερά μου', 'η μητέρα μου'], en: ['η μητέρα μού', 'η μητέρά μου', 'η μήτερά μου', 'η μητέρα μου'] },
    correct: 3,
    explanation: {
      el: 'Το «μητέρα» τονίζεται στην παραλήγουσα (μη-ΤΕ-ρα), όχι στην προπαραλήγουσα. Γι\' αυτό δεν παίρνει δεύτερο τόνο: η μητέρα μου, ο φίλος μου, η τσάντα σου.',
      en: '«μητέρα» is stressed on the second syllable from the end (μη-ΤΕ-ρα), not the third. So it does not get a second accent: η μητέρα μου, ο φίλος μου, η τσάντα σου.',
    },
  },
  {
    q: { el: 'Η Ελένη ζητάει το βιβλίο της από τον Νίκο: «___!» Ποια γραφή είναι σωστή;', en: 'Eleni asks Nikos for her book: «___!» (“Bring it to me!”) Which accents are correct?' },
    options: { el: ['Φέρε μου το', 'Φέρέ μου το', 'Φέρε μού το', 'Φερέ μου το'], en: ['Φέρε μου το', 'Φέρέ μου το', 'Φέρε μού το', 'Φερέ μου το'] },
    correct: 2,
    explanation: {
      el: 'Όταν μετά από μια λέξη που τονίζεται στην παραλήγουσα (ΦΕ-ρε) ακολουθούν δύο άτονες λεξούλες, η πρώτη από αυτές παίρνει τόνο: φέρε μού το, δώσε μού το, πες μού το.',
      en: 'When two unstressed little words follow a word stressed on the second syllable from the end (ΦΕ-ρε), the first little word takes the accent: φέρε μού το, δώσε μού το, πες μού το.',
    },
  },
];
