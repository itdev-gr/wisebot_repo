/**
 * ΣΤ' Δημοτικού · Γλώσσα · Συντακτικό & Προτάσεις
 * =================================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr). Language level: 11–12.
 *
 * What the unit covers, in order:
 *   1–4   main vs subordinate clauses: which stands alone, which depends on another
 *   5–10  the conjunctions ότι (ειδική), επειδή (αιτιολογική), αν (υποθετική / πλάγια ερώτηση), όταν (χρονική)
 *   11–14 relative clauses with «που» and «ο οποίος / η οποία / το οποίο» — what they refer to, correct form
 *   15–18 coordination (παράταξη: και, αλλά, ή) vs subordination (υπόταξη), counting clauses
 */
import type { QuizQuestion } from '../../../types';

export const GRADE6_GREEK_SYNTAX_CLAUSES: QuizQuestion[] = [
  // ── 1–4: main vs subordinate clauses ────────────────────────────────────────
  {
    q: { el: 'Ποια από τις παρακάτω είναι κύρια πρόταση (στέκεται μόνη της και έχει πλήρες νόημα);', en: 'Which of these is a main clause (it stands alone and makes complete sense)?' },
    options: {
      el: ['Η Μαρία διαβάζει ένα βιβλίο.', 'Όταν η Μαρία διαβάζει', 'Επειδή η Μαρία διαβάζει', 'Αν η Μαρία διαβάζει'],
      en: ['Maria is reading a book.', 'When Maria reads', 'Because Maria reads', 'If Maria reads'],
    },
    correct: 0,
    explanation: {
      el: 'Η κύρια πρόταση έχει πλήρες νόημα μόνη της. Οι άλλες ξεκινούν με σύνδεσμο (όταν, επειδή, αν) και «κρέμονται» — περιμένουν κάτι ακόμα.',
      en: 'A main clause makes complete sense on its own. The others start with a conjunction (when, because, if) and are left hanging — they wait for something more.',
    },
  },
  {
    q: { el: '«Ο Νίκος χάρηκε, όταν είδε τον παππού του.» Ποια είναι η δευτερεύουσα πρόταση;', en: '"Nikos was happy when he saw his grandpa." Which is the subordinate clause?' },
    options: {
      el: ['Ο Νίκος χάρηκε', 'όταν είδε τον παππού του', 'τον παππού του', 'Ο Νίκος χάρηκε όταν'],
      en: ['Nikos was happy', 'when he saw his grandpa', 'his grandpa', 'Nikos was happy when'],
    },
    correct: 1,
    explanation: {
      el: 'Η δευτερεύουσα ξεκινά με τον σύνδεσμο «όταν» και εξαρτάται από την κύρια «Ο Νίκος χάρηκε». Κάθε πρόταση έχει το δικό της ρήμα: χάρηκε, είδε.',
      en: 'The subordinate clause starts with the conjunction "when" and depends on the main clause "Nikos was happy". Each clause has its own verb: was happy, saw.',
    },
  },
  {
    q: { el: 'Μια δευτερεύουσα πρόταση…', en: 'A subordinate clause…' },
    options: {
      el: ['έχει πλήρες νόημα μόνη της', 'δεν έχει ρήμα', 'εξαρτάται από μια κύρια πρόταση', 'είναι πάντα ερωτηματική'],
      en: ['makes complete sense on its own', 'has no verb', 'depends on a main clause', 'is always a question'],
    },
    correct: 2,
    explanation: {
      el: 'Η δευτερεύουσα έχει ρήμα, αλλά δεν στέκεται μόνη της: χρειάζεται μια κύρια πρόταση για να ολοκληρωθεί το νόημα.',
      en: 'A subordinate clause has a verb, but it cannot stand alone: it needs a main clause to complete its meaning.',
    },
  },
  {
    q: { el: '«Η Ελένη λέει ότι θα έρθει αύριο.» Ποια λέξη εισάγει τη δευτερεύουσα πρόταση;', en: '"Eleni says that she will come tomorrow." Which word introduces the subordinate clause?' },
    options: {
      el: ['λέει', 'αύριο', 'θα', 'ότι'],
      en: ['λέει (says)', 'αύριο (tomorrow)', 'θα (will)', 'ότι (that)'],
    },
    correct: 3,
    explanation: {
      el: 'Το «ότι» είναι σύνδεσμος: συνδέει την κύρια «Η Ελένη λέει» με τη δευτερεύουσα «ότι θα έρθει αύριο».',
      en: '"Ότι" (that) is a conjunction: it joins the main clause "Eleni says" to the subordinate clause "that she will come tomorrow".',
    },
  },

  // ── 5–10: the conjunctions ότι, επειδή, αν, όταν ─────────────────────────
  {
    q: { el: 'Συμπλήρωσε: «Ο Γιώργος ξέρει ___ η Γη γυρίζει γύρω από τον Ήλιο.»', en: 'Fill in: "Giorgos knows ___ the Earth goes around the Sun."' },
    options: {
      el: ['επειδή', 'ότι', 'αν', 'όταν'],
      en: ['επειδή (because)', 'ότι (that)', 'αν (if)', 'όταν (when)'],
    },
    correct: 1,
    explanation: {
      el: 'Μετά από ρήματα όπως ξέρω, λέω, πιστεύω, βάζουμε «ότι» για να πούμε ΤΙ ξέρει κάποιος. Είναι ειδική πρόταση.',
      en: 'After verbs like know, say, believe, we use "ότι" (that) to say WHAT someone knows. This is called a special (ειδική) clause.',
    },
  },
  {
    q: { el: '«Η Μαρία φόρεσε το μπουφάν της, ___ έκανε κρύο.» Ποιος σύνδεσμος δείχνει την αιτία;', en: '"Maria put on her jacket ___ it was cold." Which conjunction shows the reason?' },
    options: {
      el: ['ότι', 'αν', 'επειδή', 'όταν'],
      en: ['ότι (that)', 'αν (if)', 'επειδή (because)', 'όταν (when)'],
    },
    correct: 2,
    explanation: {
      el: 'Το «επειδή» απαντά στην ερώτηση «γιατί;». Γιατί φόρεσε το μπουφάν; Επειδή έκανε κρύο. Είναι αιτιολογική πρόταση.',
      en: '"Επειδή" (because) answers the question "why?". Why did she put on her jacket? Because it was cold. This is a causal clause.',
    },
  },
  {
    q: { el: '«___ βρέξει αύριο, θα μείνουμε σπίτι.» Ποιος σύνδεσμος δηλώνει υπόθεση (κάτι που ίσως γίνει);', en: '"___ it rains tomorrow, we will stay home." Which conjunction shows a condition (something that might happen)?' },
    options: {
      el: ['Αν', 'Ότι', 'Επειδή', 'Που'],
      en: ['Αν (If)', 'Ότι (That)', 'Επειδή (Because)', 'Που (Which)'],
    },
    correct: 0,
    explanation: {
      el: 'Το «αν» δείχνει κάτι που δεν είναι σίγουρο: ΑΝ βρέξει, τότε θα μείνουμε σπίτι. Είναι υποθετική πρόταση.',
      en: '"Αν" (if) shows something that is not certain: IF it rains, then we stay home. This is a conditional clause.',
    },
  },
  {
    q: { el: '«___ τελειώσω τα μαθήματα, θα παίξω μπάλα.» Ποιος σύνδεσμος δείχνει χρόνο;', en: '"___ I finish my homework, I will play football." Which conjunction shows time?' },
    options: {
      el: ['Επειδή', 'Αν', 'Ότι', 'Όταν'],
      en: ['Επειδή (Because)', 'Αν (If)', 'Ότι (That)', 'Όταν (When)'],
    },
    correct: 3,
    explanation: {
      el: 'Το «όταν» απαντά στην ερώτηση «πότε;». Πότε θα παίξω; Όταν τελειώσω τα μαθήματα. Είναι χρονική πρόταση.',
      en: '"Όταν" (when) answers the question "when?". When will I play? When I finish my homework. This is a time clause.',
    },
  },
  {
    q: { el: 'Τι είδους δευτερεύουσα πρόταση εισάγει ο σύνδεσμος «επειδή»;', en: 'What kind of subordinate clause does the conjunction "επειδή" (because) introduce?' },
    options: {
      el: ['χρονική', 'αιτιολογική', 'υποθετική', 'ειδική'],
      en: ['time clause (χρονική)', 'causal clause (αιτιολογική)', 'conditional clause (υποθετική)', 'special clause (ειδική)'],
    },
    correct: 1,
    explanation: {
      el: 'Επειδή = αιτία, άρα αιτιολογική. Θυμήσου: όταν → χρονική, αν → υποθετική, ότι → ειδική.',
      en: '"Επειδή" gives a reason, so it is a causal clause. Remember: όταν → time, αν → conditional, ότι → special.',
    },
  },
  {
    q: { el: '«Ο Νίκος ρώτησε αν θα πάμε εκδρομή.» Τι δηλώνει εδώ το «αν»;', en: '"Nikos asked if we will go on the trip." What does "αν" (if) express here?' },
    options: {
      el: ['πλάγια ερώτηση', 'αιτία', 'χρόνο', 'υπόθεση'],
      en: ['an indirect question', 'a reason', 'time', 'a condition'],
    },
    correct: 0,
    explanation: {
      el: 'Μετά από το «ρώτησε», το «αν» δεν δείχνει υπόθεση: μεταφέρει μια ερώτηση («Θα πάμε εκδρομή;»). Λέγεται πλάγια ερωτηματική πρόταση.',
      en: 'After "asked", "αν" does not show a condition: it reports a question ("Will we go on the trip?"). This is called an indirect question.',
    },
  },

  // ── 11–14: relative clauses που / ο οποίος ──────────────────────────────
  {
    q: { el: '«Το βιβλίο που διαβάζω είναι πολύ ωραίο.» Σε ποια λέξη αναφέρεται το «που»;', en: '"The book that I am reading is very nice." Which word does "που" (that) refer to?' },
    options: {
      el: ['διαβάζω', 'βιβλίο', 'ωραίο', 'είναι'],
      en: ['διαβάζω (I am reading)', 'βιβλίο (book)', 'ωραίο (nice)', 'είναι (is)'],
    },
    correct: 1,
    explanation: {
      el: 'Το «που» αναφέρεται στη λέξη που είναι ακριβώς πριν: «το βιβλίο». Η πρόταση «που διαβάζω» μας λέει ποιο βιβλίο — είναι αναφορική.',
      en: '"Που" refers to the word right before it: "the book". The clause "that I am reading" tells us which book — it is a relative clause.',
    },
  },
  {
    q: { el: 'Ποια από τις παρακάτω προτάσεις περιέχει αναφορική πρόταση;', en: 'Which of these sentences contains a relative clause?' },
    options: {
      el: ['Ο σκύλος που γαβγίζει είναι του Νίκου.', 'Ο Νίκος είπε ότι ο σκύλος γαβγίζει.', 'Ο σκύλος γαβγίζει όταν πεινάει.', 'Ο σκύλος γαβγίζει επειδή πεινάει.'],
      en: ['The dog that is barking belongs to Nikos.', 'Nikos said that the dog is barking.', 'The dog barks when it is hungry.', 'The dog barks because it is hungry.'],
    },
    correct: 0,
    explanation: {
      el: 'Η αναφορική πρόταση ξεκινά με «που» (ή «ο οποίος») και περιγράφει ένα ουσιαστικό: «ο σκύλος που γαβγίζει». Οι άλλες έχουν ότι, όταν, επειδή.',
      en: 'A relative clause starts with "που" (or "ο οποίος") and describes a noun: "the dog that is barking". The others use that, when, because.',
    },
  },
  {
    q: { el: 'Συμπλήρωσε με τον σωστό τύπο: «Η δασκάλα, ___ αγαπάμε πολύ, μας έφερε δώρα.»', en: 'Fill in the correct form: "The teacher, ___ we love very much, brought us presents."' },
    options: {
      el: ['ο οποίος', 'την οποία', 'η οποία', 'το οποίο'],
      en: ['ο οποίος', 'την οποία', 'η οποία', 'το οποίο'],
    },
    correct: 1,
    explanation: {
      el: 'Η δασκάλα είναι θηλυκό, και εδώ είναι το αντικείμενο του «αγαπάμε» (αγαπάμε ποιαν; τη δασκάλα). Άρα αιτιατική: «την οποία».',
      en: '"Η δασκάλα" is feminine, and here she is the object of "we love" (we love whom? the teacher). So we need the accusative: "την οποία".',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: «Τα παιδιά ___ κέρδισαν τον αγώνα πήραν κύπελλο.»', en: 'Fill in: "The children ___ won the match got a cup."' },
    options: {
      el: ['τα οποία', 'οι οποίοι', 'τον οποίο', 'η οποία'],
      en: ['τα οποία', 'οι οποίοι', 'τον οποίο', 'η οποία'],
    },
    correct: 0,
    explanation: {
      el: 'Το «ο οποίος» συμφωνεί με τη λέξη στην οποία αναφέρεται. «Τα παιδιά» είναι ουδέτερο, πληθυντικός, και εδώ υποκείμενο του «κέρδισαν» → «τα οποία».',
      en: '"Ο οποίος" agrees with the word it refers to. "Τα παιδιά" is neuter plural and the subject of "won" → "τα οποία".',
    },
  },

  // ── 15–18: coordination vs subordination ─────────────────────────────────
  {
    q: { el: '«Η Ελένη διαβάζει και ο Γιώργος ζωγραφίζει.» Πώς συνδέονται οι δύο προτάσεις;', en: '"Eleni is reading and Giorgos is drawing." How are the two clauses joined?' },
    options: {
      el: ['παρατακτικά — είναι δύο κύριες', 'υποτακτικά — η δεύτερη είναι δευτερεύουσα', 'ασύνδετα — χωρίς σύνδεσμο', 'με αναφορική πρόταση'],
      en: ['by coordination — they are two main clauses', 'by subordination — the second is subordinate', 'with no conjunction at all', 'with a relative clause'],
    },
    correct: 0,
    explanation: {
      el: 'Το «και» ενώνει δύο ισότιμες κύριες προτάσεις — καθεμία στέκεται μόνη της. Αυτό λέγεται παράταξη.',
      en: '"Και" (and) joins two equal main clauses — each one can stand alone. This is called coordination (παράταξη).',
    },
  },
  {
    q: { el: 'Ποιος από τους παρακάτω είναι παρατακτικός σύνδεσμος;', en: 'Which of these is a coordinating conjunction?' },
    options: {
      el: ['επειδή', 'όταν', 'αλλά', 'ότι'],
      en: ['επειδή (because)', 'όταν (when)', 'αλλά (but)', 'ότι (that)'],
    },
    correct: 2,
    explanation: {
      el: 'Παρατακτικοί σύνδεσμοι: και, αλλά, ή, όμως. Ενώνουν ίσες προτάσεις. Οι υποτακτικοί (επειδή, όταν, ότι, αν) εισάγουν δευτερεύουσες.',
      en: 'Coordinating conjunctions: και (and), αλλά (but), ή (or), όμως (however). They join equal clauses. Subordinating ones (επειδή, όταν, ότι, αν) introduce subordinate clauses.',
    },
  },
  {
    q: { el: 'Ποια πρόταση έχει υπόταξη (κύρια + δευτερεύουσα);', en: 'Which sentence uses subordination (main + subordinate clause)?' },
    options: {
      el: ['Ο Νίκος τρέχει και η Μαρία κολυμπάει.', 'Θέλω παγωτό, αλλά δεν έχω χρήματα.', 'Θα πάμε βόλτα, αν τελειώσεις τις ασκήσεις.', 'Θα έρθει ο Γιώργος ή η Ελένη;'],
      en: ['Nikos runs and Maria swims.', 'I want ice cream, but I have no money.', 'We will go for a walk if you finish your exercises.', 'Will Giorgos or Eleni come?'],
    },
    correct: 2,
    explanation: {
      el: 'Το «αν τελειώσεις τις ασκήσεις» δεν στέκεται μόνο του — είναι δευτερεύουσα. Τα και, αλλά, ή ενώνουν ίσες προτάσεις (παράταξη).',
      en: '"If you finish your exercises" cannot stand alone — it is subordinate. And, but, or join equal clauses (coordination).',
    },
  },
  {
    q: { el: '«Ο Γιώργος πήρε ομπρέλα, γιατί έβρεχε, και έφυγε.» Πόσες κύριες και πόσες δευτερεύουσες προτάσεις υπάρχουν;', en: '"Giorgos took an umbrella, because it was raining, and left." How many main and how many subordinate clauses are there?' },
    options: {
      el: ['2 κύριες, 1 δευτερεύουσα', '1 κύρια, 2 δευτερεύουσες', '3 κύριες', '1 κύρια, 1 δευτερεύουσα'],
      en: ['2 main, 1 subordinate', '1 main, 2 subordinate', '3 main', '1 main, 1 subordinate'],
    },
    correct: 0,
    explanation: {
      el: 'Τρία ρήματα = τρεις προτάσεις. «Πήρε ομπρέλα» και «έφυγε» είναι κύριες (τις ενώνει το «και»). «Γιατί έβρεχε» είναι δευτερεύουσα αιτιολογική.',
      en: 'Three verbs = three clauses. "Took an umbrella" and "left" are main clauses (joined by "and"). "Because it was raining" is a subordinate causal clause.',
    },
  },
];
