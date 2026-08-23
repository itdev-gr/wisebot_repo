/**
 * Β' Δημοτικού · Γλώσσα · Σημεία Στίξης
 * ======================================
 * Original questions for a child of 7–8 (curriculum topics only — nothing from
 * ebooks.edu.gr). What the unit covers, in order:
 *   1–4   the full stop (τελεία): where a sentence ends, capital after it
 *   5–8   the question mark (ερωτηματικό «;»): questions and question words
 *   9–11  the exclamation mark (θαυμαστικό «!»): joy, surprise, shouting
 *   12–15 the comma (κόμμα) in lists: between things, not before the last «και»
 *   16–18 the dash (παύλα «–») that opens what somebody says in a dialogue
 * Distractors are the mixes children really make: «;» for «!», a comma at the end
 * of a sentence, a full stop after a question, a comma before «και».
 */
import type { QuizQuestion } from '../../../types';

export const GRADE2_GREEK_PUNCTUATION: QuizQuestion[] = [
  // ── 1–4: the full stop ──────────────────────────────────────────────────────
  {
    q: { el: 'Ποιο σημάδι βάζουμε στο τέλος της πρότασης «Ο Νίκος παίζει μπάλα»;', en: 'Which mark goes at the end of the sentence “Nikos is playing football”?' },
    options: { el: ['.', ';', '!', ','], en: ['.', ';', '!', ','] },
    correct: 0,
    explanation: {
      el: 'Όταν λέμε κάτι απλά, βάζουμε τελεία (.) στο τέλος. Η τελεία λέει: «Η πρόταση τελείωσε».',
      en: 'When we simply say something, we put a full stop (.) at the end. The full stop says: “The sentence is over”.',
    },
  },
  {
    q: { el: 'Πώς λέγεται το σημάδι «.»;', en: 'What is the mark “.” called in Greek?' },
    options: { el: ['κόμμα', 'τελεία', 'θαυμαστικό', 'ερωτηματικό'], en: ['κόμμα (comma)', 'τελεία (full stop)', 'θαυμαστικό (exclamation mark)', 'ερωτηματικό (question mark)'] },
    correct: 1,
    explanation: {
      el: 'Η μικρή κουκκίδα στο τέλος της πρότασης λέγεται τελεία.',
      en: 'The little dot at the end of a sentence is called τελεία — the full stop.',
    },
  },
  {
    q: { el: 'Ποια πρόταση είναι γραμμένη σωστά;', en: 'Which sentence is written correctly?' },
    options: { el: ['Η Ελένη διαβάζει ένα βιβλίο.', 'Η Ελένη διαβάζει ένα βιβλίο,', 'Η Ελένη διαβάζει ένα βιβλίο', 'Η Ελένη. διαβάζει ένα βιβλίο'], en: ['Η Ελένη διαβάζει ένα βιβλίο.', 'Η Ελένη διαβάζει ένα βιβλίο,', 'Η Ελένη διαβάζει ένα βιβλίο', 'Η Ελένη. διαβάζει ένα βιβλίο'] },
    correct: 0,
    explanation: {
      el: 'Η τελεία μπαίνει μόνο στο τέλος, όταν η πρόταση τελειώνει. Χωρίς τελεία ή με κόμμα, η πρόταση μένει «ανοιχτή».',
      en: 'The full stop goes only at the end, when the sentence is finished. Without it, or with a comma, the sentence is left “open”.',
    },
  },
  {
    q: { el: 'Μετά την τελεία, η επόμενη λέξη αρχίζει με…', en: 'After a full stop, the next word starts with…' },
    options: { el: ['μικρό γράμμα', 'κεφαλαίο γράμμα', 'αριθμό', 'κόμμα'], en: ['a small letter', 'a capital letter', 'a number', 'a comma'] },
    correct: 1,
    explanation: {
      el: 'Μετά την τελεία αρχίζει νέα πρόταση, και κάθε πρόταση αρχίζει με κεφαλαίο: «Βρέχει. Ο Γιώργος πήρε ομπρέλα.»',
      en: 'After a full stop a new sentence begins, and every sentence starts with a capital letter: «Βρέχει. Ο Γιώργος πήρε ομπρέλα.»',
    },
  },

  // ── 5–8: the question mark ──────────────────────────────────────────────────
  {
    q: { el: 'Ποιο σημάδι βάζουμε στο τέλος της πρότασης «Πού είναι η Μαρία»;', en: 'Which mark goes at the end of the Greek question “Where is Maria”?' },
    options: { el: ['.', '!', ';', ','], en: ['.', '!', ';', ','] },
    correct: 2,
    explanation: {
      el: 'Όταν ρωτάμε κάτι, βάζουμε ερωτηματικό (;). Στα ελληνικά το ερωτηματικό μοιάζει με μικρό «;».',
      en: 'When we ask something, we put a question mark. In Greek the question mark looks like a semicolon: «;».',
    },
  },
  {
    q: { el: 'Ποια πρόταση είναι ερώτηση;', en: 'Which sentence is a question?' },
    options: { el: ['Θέλεις παγωτό;', 'Θέλω παγωτό.', 'Τι ωραίο παγωτό!', 'Πήρα παγωτό.'], en: ['Θέλεις παγωτό;', 'Θέλω παγωτό.', 'Τι ωραίο παγωτό!', 'Πήρα παγωτό.'] },
    correct: 0,
    explanation: {
      el: '«Θέλεις παγωτό;» ρωτάει κάτι και περιμένει απάντηση, γι\' αυτό έχει ερωτηματικό.',
      en: '«Θέλεις παγωτό;» (Do you want ice cream?) asks something and waits for an answer, so it has a question mark.',
    },
  },
  {
    q: { el: 'Ποια λέξη μάς δείχνει ότι η πρόταση είναι ερώτηση;', en: 'Which word shows us that a sentence is a question?' },
    options: { el: ['και', 'γιατί', 'μετά', 'ωραία'], en: ['και (and)', 'γιατί (why)', 'μετά (then)', 'ωραία (nice)'] },
    correct: 1,
    explanation: {
      el: 'Λέξεις όπως «γιατί», «πού», «πότε», «τι» ανοίγουν ερωτήσεις. Στο τέλος τους βάζουμε ερωτηματικό.',
      en: 'Words like «γιατί» (why), «πού» (where), «πότε» (when), «τι» (what) begin questions. We end them with a question mark.',
    },
  },
  {
    q: { el: 'Ποια πρόταση είναι γραμμένη σωστά;', en: 'Which sentence is written correctly?' },
    options: { el: ['Πότε θα πάμε στην παραλία.', 'Πότε θα πάμε στην παραλία!', 'Πότε θα πάμε στην παραλία,', 'Πότε θα πάμε στην παραλία;'], en: ['Πότε θα πάμε στην παραλία.', 'Πότε θα πάμε στην παραλία!', 'Πότε θα πάμε στην παραλία,', 'Πότε θα πάμε στην παραλία;'] },
    correct: 3,
    explanation: {
      el: 'Το «Πότε…» είναι ερώτηση, άρα στο τέλος θέλει ερωτηματικό, όχι τελεία.',
      en: '«Πότε…» (When…) is a question, so it needs a question mark at the end, not a full stop.',
    },
  },

  // ── 9–11: the exclamation mark ──────────────────────────────────────────────
  {
    q: { el: 'Ποιο σημάδι βάζουμε στο τέλος της πρότασης «Τι όμορφη μέρα»;', en: 'Which mark goes at the end of “What a beautiful day”?' },
    options: { el: [';', '.', '!', ','], en: [';', '.', '!', ','] },
    correct: 2,
    explanation: {
      el: 'Όταν δείχνουμε χαρά, έκπληξη ή φωνάζουμε, βάζουμε θαυμαστικό (!).',
      en: 'When we show joy or surprise, or we shout, we put an exclamation mark (!).',
    },
  },
  {
    q: { el: 'Ποια πρόταση θέλει θαυμαστικό στο τέλος;', en: 'Which sentence needs an exclamation mark at the end?' },
    options: { el: ['Ο σκύλος κοιμάται', 'Πόσο χρονών είσαι', 'Μπράβο, Γιώργο', 'Η γάτα πίνει γάλα'], en: ['Ο σκύλος κοιμάται (The dog is sleeping)', 'Πόσο χρονών είσαι (How old are you)', 'Μπράβο, Γιώργο (Well done, Giorgos)', 'Η γάτα πίνει γάλα (The cat drinks milk)'] },
    correct: 2,
    explanation: {
      el: '«Μπράβο, Γιώργο!» το λέμε με χαρά και δυνατά, γι\' αυτό θέλει θαυμαστικό. Οι άλλες θέλουν τελεία ή ερωτηματικό.',
      en: '«Μπράβο, Γιώργο!» is said with joy and loudly, so it needs an exclamation mark. The others need a full stop or a question mark.',
    },
  },
  {
    q: { el: 'Ποια πρόταση είναι γραμμένη σωστά;', en: 'Which sentence is written correctly?' },
    options: { el: ['Πρόσεχε, έρχεται αυτοκίνητο;', 'Πρόσεχε, έρχεται αυτοκίνητο!', 'Πρόσεχε; έρχεται αυτοκίνητο.', 'Πρόσεχε! έρχεται αυτοκίνητο,'], en: ['Πρόσεχε, έρχεται αυτοκίνητο;', 'Πρόσεχε, έρχεται αυτοκίνητο!', 'Πρόσεχε; έρχεται αυτοκίνητο.', 'Πρόσεχε! έρχεται αυτοκίνητο,'] },
    correct: 1,
    explanation: {
      el: 'Το «Πρόσεχε» το φωνάζουμε, άρα η πρόταση θέλει θαυμαστικό στο τέλος, όχι ερωτηματικό.',
      en: '«Πρόσεχε» (Watch out) is shouted, so the sentence needs an exclamation mark at the end, not a question mark.',
    },
  },

  // ── 12–15: the comma in lists ───────────────────────────────────────────────
  {
    q: { el: 'Ποιο σημάδι χωρίζει τις λέξεις σε μια λίστα, όπως «μήλα, αχλάδια, μπανάνες»;', en: 'Which mark separates the words in a list, like “apples, pears, bananas”?' },
    options: { el: ['.', '!', ';', ','], en: ['.', '!', ';', ','] },
    correct: 3,
    explanation: {
      el: 'Το κόμμα (,) χωρίζει τα πράγματα που απαριθμούμε, το ένα από το άλλο.',
      en: 'The comma (,) separates the things we list, one from the other.',
    },
  },
  {
    q: { el: 'Ποια πρόταση είναι γραμμένη σωστά;', en: 'Which sentence is written correctly?' },
    options: { el: ['Αγόρασα ψωμί. τυρί. γάλα.', 'Αγόρασα ψωμί, τυρί, γάλα.', 'Αγόρασα ψωμί τυρί γάλα,', 'Αγόρασα, ψωμί τυρί γάλα.'], en: ['Αγόρασα ψωμί. τυρί. γάλα.', 'Αγόρασα ψωμί, τυρί, γάλα.', 'Αγόρασα ψωμί τυρί γάλα,', 'Αγόρασα, ψωμί τυρί γάλα.'] },
    correct: 1,
    explanation: {
      el: 'Ανάμεσα στα πράγματα της λίστας βάζουμε κόμμα. Η τελεία μπαίνει μόνο στο τέλος.',
      en: 'Between the things in a list we put commas. The full stop goes only at the end.',
    },
  },
  {
    q: { el: 'Πόσα κόμματα λείπουν; «Στον κήπο είδα μια πεταλούδα ένα σαλιγκάρι και μια μέλισσα.»', en: 'How many commas are missing? «Στον κήπο είδα μια πεταλούδα ένα σαλιγκάρι και μια μέλισσα.» (In the garden I saw a butterfly a snail and a bee.)' },
    options: { el: ['κανένα', 'ένα', 'δύο', 'τρία'], en: ['none', 'one', 'two', 'three'] },
    correct: 1,
    explanation: {
      el: 'Λείπει ένα κόμμα: «μια πεταλούδα, ένα σαλιγκάρι και μια μέλισσα». Πριν από το «και» δεν βάζουμε κόμμα.',
      en: 'One comma is missing: «μια πεταλούδα, ένα σαλιγκάρι και μια μέλισσα». Before «και» (and) we do not put a comma.',
    },
  },
  {
    q: { el: 'Ποια λίστα είναι γραμμένη σωστά;', en: 'Which list is written correctly?' },
    options: { el: ['κόκκινο, κίτρινο, και μπλε', 'κόκκινο κίτρινο και μπλε', 'κόκκινο, κίτρινο και μπλε', 'κόκκινο, κίτρινο, μπλε και'], en: ['κόκκινο, κίτρινο, και μπλε', 'κόκκινο κίτρινο και μπλε', 'κόκκινο, κίτρινο και μπλε', 'κόκκινο, κίτρινο, μπλε και'] },
    correct: 2,
    explanation: {
      el: 'Κόμμα ανάμεσα στα χρώματα, αλλά όχι πριν από το «και»: «κόκκινο, κίτρινο και μπλε».',
      en: 'A comma between the colours, but not before «και» (and): «κόκκινο, κίτρινο και μπλε».',
    },
  },

  // ── 16–18: the dash in dialogue ─────────────────────────────────────────────
  {
    q: { el: 'Ποιο σημάδι βάζουμε στην αρχή, όταν κάποιος μιλάει σε έναν διάλογο;', en: 'Which mark do we put at the start, when someone speaks in a dialogue?' },
    options: { el: ['παύλα (–)', 'τελεία (.)', 'κόμμα (,)', 'θαυμαστικό (!)'], en: ['dash (–)', 'full stop (.)', 'comma (,)', 'exclamation mark (!)'] },
    correct: 0,
    explanation: {
      el: 'Στον διάλογο, κάθε φορά που μιλάει κάποιος, αρχίζουμε νέα γραμμή με παύλα (–).',
      en: 'In a dialogue, every time someone speaks, we start a new line with a dash (–).',
    },
  },
  {
    q: { el: 'Ποια γραμμή δείχνει σωστά ότι μιλάει η Μαρία;', en: 'Which line correctly shows that Maria is speaking?' },
    options: { el: ['– Καλημέρα, Νίκο!', ', Καλημέρα, Νίκο!', 'Καλημέρα, Νίκο! –', '. Καλημέρα, Νίκο!'], en: ['– Καλημέρα, Νίκο!', ', Καλημέρα, Νίκο!', 'Καλημέρα, Νίκο! –', '. Καλημέρα, Νίκο!'] },
    correct: 0,
    explanation: {
      el: 'Η παύλα μπαίνει στην αρχή της γραμμής, πριν από τα λόγια: «– Καλημέρα, Νίκο!»',
      en: 'The dash goes at the start of the line, before the words: «– Καλημέρα, Νίκο!»',
    },
  },
  {
    q: { el: 'Σε έναν διάλογο, η Ελένη λέει κάτι και μετά απαντάει ο Γιώργος. Πόσες παύλες χρειάζονται;', en: 'In a dialogue, Eleni says something and then Giorgos answers. How many dashes are needed?' },
    options: { el: ['καμία', 'μία', 'δύο', 'τρεις'], en: ['none', 'one', 'two', 'three'] },
    correct: 2,
    explanation: {
      el: 'Δύο: μία παύλα για τα λόγια της Ελένης και μία για την απάντηση του Γιώργου. Κάθε ομιλητής, νέα γραμμή με παύλα.',
      en: 'Two: one dash for Eleni\'s words and one for Giorgos\' answer. Each speaker gets a new line with a dash.',
    },
  },
];
