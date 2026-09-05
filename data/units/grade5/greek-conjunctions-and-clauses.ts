/**
 * Ε' Δημοτικού · Γλώσσα · Σύνδεσμοι & Προτάσεις
 * =============================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a child of 10–11. Ordered from easiest to hardest:
 *   1–3   what a conjunction is: finding it, its job, spotting a non-conjunction
 *   4–9   which conjunction fits the gap: αλλά, ή, επειδή, όταν, για να, αν
 *   10–13 main and dependent clause (introduction): which can stand alone, which cannot
 *   14–16 what the link means: cause, purpose, contrast
 *   17–18 punctuation: the comma before «αλλά», no comma before a joining «και»
 */
import type { QuizQuestion } from '../../../types';

export const GRADE5_GREEK_CONJUNCTIONS_AND_CLAUSES: QuizQuestion[] = [
  // ── 1–3: what a conjunction is ─────────────────────────────────────────────
  {
    q: { el: '«Ο Νίκος διαβάζει και η Άννα ζωγραφίζει.» Ποια λέξη είναι σύνδεσμος;', en: '«Ο Νίκος διαβάζει και η Άννα ζωγραφίζει.» (Nikos reads and Anna draws.) Which word is a conjunction?' },
    options: { el: ['διαβάζει', 'και', 'Άννα', 'ζωγραφίζει'], en: ['διαβάζει', 'και', 'Άννα', 'ζωγραφίζει'] },
    correct: 1,
    explanation: {
      el: 'Το «και» ενώνει τις δύο προτάσεις «Ο Νίκος διαβάζει» και «η Άννα ζωγραφίζει». Οι λέξεις που ενώνουν λέγονται σύνδεσμοι.',
      en: '«και» (and) joins the two clauses «Ο Νίκος διαβάζει» and «η Άννα ζωγραφίζει». Words that join are called conjunctions.',
    },
  },
  {
    q: { el: 'Ποια είναι η δουλειά των συνδέσμων;', en: 'What is the job of conjunctions?' },
    options: { el: ['Συνδέουν λέξεις ή προτάσεις μεταξύ τους', 'Δείχνουν πού γίνεται κάτι', 'Περιγράφουν ένα ουσιαστικό', 'Δηλώνουν ποιος κάνει την πράξη'], en: ['They join words or clauses together', 'They show where something happens', 'They describe a noun', 'They show who does the action'] },
    correct: 0,
    explanation: {
      el: 'Οι σύνδεσμοι είναι άκλιτες λέξεις που ενώνουν: «μήλα και αχλάδια», «θέλω αλλά δεν μπορώ». Χωρίς αυτούς οι προτάσεις μας θα ήταν κομματιασμένες.',
      en: 'Conjunctions are unchanging words that join things: «μήλα και αχλάδια» (apples and pears), «θέλω αλλά δεν μπορώ» (I want to but I cannot). Without them our sentences would be in pieces.',
    },
  },
  {
    q: { el: 'Ποια από τις παρακάτω λέξεις ΔΕΝ είναι σύνδεσμος;', en: 'Which of these words is NOT a conjunction?' },
    options: { el: ['αλλά', 'επειδή', 'γρήγορα', 'όταν'], en: ['αλλά (but)', 'επειδή (because)', 'γρήγορα (quickly)', 'όταν (when)'] },
    correct: 2,
    explanation: {
      el: 'Το «γρήγορα» είναι επίρρημα: μας λέει πώς γίνεται κάτι. Το «αλλά», το «επειδή» και το «όταν» ενώνουν προτάσεις, άρα είναι σύνδεσμοι.',
      en: '«γρήγορα» is an adverb: it tells us how something is done. «αλλά», «επειδή» and «όταν» join clauses, so they are conjunctions.',
    },
  },

  // ── 4–9: which conjunction fits ───────────────────────────────────────────
  {
    q: { el: 'Συμπλήρωσε: «Θέλω να πάω στην παραλία, ___ βρέχει.»', en: 'Fill in: «Θέλω να πάω στην παραλία, ___ βρέχει.» (I want to go to the beach, ___ it is raining.)' },
    options: { el: ['και', 'αλλά', 'για να', 'ή'], en: ['και (and)', 'αλλά (but)', 'για να (in order to)', 'ή (or)'] },
    correct: 1,
    explanation: {
      el: 'Η βροχή είναι εμπόδιο για την παραλία — τα δύο μέρη είναι αντίθετα. Την αντίθεση τη δείχνει το «αλλά».',
      en: 'The rain gets in the way of the beach — the two parts are opposites. Contrast is shown by «αλλά» (but).',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: «Θα πάρεις παγωτό ___ κρέπα;»', en: 'Fill in: «Θα πάρεις παγωτό ___ κρέπα;» (Will you have ice cream ___ a crepe?)' },
    options: { el: ['και', 'γιατί', 'ή', 'αν'], en: ['και (and)', 'γιατί (because)', 'ή (or)', 'αν (if)'] },
    correct: 2,
    explanation: {
      el: 'Πρέπει να διαλέξεις το ένα από τα δύο. Όταν υπάρχει επιλογή, χρησιμοποιούμε το «ή».',
      en: 'You have to choose one of the two. When there is a choice, we use «ή» (or).',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: «Δεν ήρθε στο σχολείο ___ ήταν άρρωστος.»', en: 'Fill in: «Δεν ήρθε στο σχολείο ___ ήταν άρρωστος.» (He did not come to school ___ he was ill.)' },
    options: { el: ['για να', 'αν', 'ή', 'επειδή'], en: ['για να (in order to)', 'αν (if)', 'ή (or)', 'επειδή (because)'] },
    correct: 3,
    explanation: {
      el: 'Η αρρώστια είναι η αιτία που δεν ήρθε. Την αιτία τη δείχνουμε με το «επειδή» ή το «γιατί».',
      en: 'Being ill is the reason he did not come. We show a cause with «επειδή» or «γιατί» (because).',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: «___ σταματήσει η βροχή, θα βγούμε στην αυλή.»', en: 'Fill in: «___ σταματήσει η βροχή, θα βγούμε στην αυλή.» (___ the rain stops, we will go out to the yard.)' },
    options: { el: ['Όταν', 'Αλλά', 'Ή', 'Γιατί'], en: ['Όταν (When)', 'Αλλά (But)', 'Ή (Or)', 'Γιατί (Because)'] },
    correct: 0,
    explanation: {
      el: 'Η πρόταση μάς λέει ΠΟΤΕ θα βγούμε: μόλις σταματήσει η βροχή. Τον χρόνο τον δείχνει το «όταν».',
      en: 'The sentence tells us WHEN we will go out: as soon as the rain stops. Time is shown by «όταν» (when).',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: «Πήγε στον φούρνο ___ αγοράσει ψωμί.»', en: 'Fill in: «Πήγε στον φούρνο ___ αγοράσει ψωμί.» (She went to the bakery ___ buy bread.)' },
    options: { el: ['επειδή', 'όταν', 'για να', 'αλλά'], en: ['επειδή (because)', 'όταν (when)', 'για να (in order to)', 'αλλά (but)'] },
    correct: 2,
    explanation: {
      el: 'Γιατί πήγε στον φούρνο; Με σκοπό να αγοράσει ψωμί. Τον σκοπό τον δείχνει το «για να».',
      en: 'Why did she go to the bakery? With the aim of buying bread. Purpose is shown by «για να» (in order to).',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: «___ διαβάσεις προσεκτικά, θα τα πας καλά στο τεστ.»', en: 'Fill in: «___ διαβάσεις προσεκτικά, θα τα πας καλά στο τεστ.» (___ you study carefully, you will do well in the test.)' },
    options: { el: ['Αλλά', 'Ή', 'Αν', 'Και'], en: ['Αλλά (But)', 'Ή (Or)', 'Αν (If)', 'Και (And)'] },
    correct: 2,
    explanation: {
      el: 'Το καλό τεστ εξαρτάται από το διάβασμα: είναι ένας όρος, μια προϋπόθεση. Την προϋπόθεση τη δείχνει το «αν».',
      en: 'Doing well depends on studying: it is a condition. A condition is shown by «αν» (if).',
    },
  },

  // ── 10–13: main and dependent clause ─────────────────────────────────────
  {
    q: { el: '«Η Ελένη χάρηκε όταν είδε τη φίλη της.» Ποια είναι η κύρια πρόταση;', en: '«Η Ελένη χάρηκε όταν είδε τη φίλη της.» (Eleni was glad when she saw her friend.) Which is the main clause?' },
    options: { el: ['όταν είδε τη φίλη της', 'Η Ελένη χάρηκε', 'είδε τη φίλη της', 'τη φίλη της'], en: ['όταν είδε τη φίλη της', 'Η Ελένη χάρηκε', 'είδε τη φίλη της', 'τη φίλη της'] },
    correct: 1,
    explanation: {
      el: 'Η κύρια πρόταση στέκεται μόνη της και έχει ολοκληρωμένο νόημα: «Η Ελένη χάρηκε.» Το «όταν είδε τη φίλη της» απλώς συμπληρώνει πότε χάρηκε.',
      en: 'The main clause stands on its own with complete meaning: «Η Ελένη χάρηκε.» (Eleni was glad.) «όταν είδε τη φίλη της» only adds when she was glad.',
    },
  },
  {
    q: { el: 'Πώς λέγεται η πρόταση που μπορεί να σταθεί μόνη της και έχει ολοκληρωμένο νόημα;', en: 'What do we call a clause that can stand on its own and has complete meaning?' },
    options: { el: ['κύρια πρόταση', 'δευτερεύουσα πρόταση', 'χρονική πρόταση', 'αιτιολογική πρόταση'], en: ['main clause (κύρια πρόταση)', 'dependent clause (δευτερεύουσα πρόταση)', 'time clause (χρονική πρόταση)', 'cause clause (αιτιολογική πρόταση)'] },
    correct: 0,
    explanation: {
      el: 'Η κύρια πρόταση δεν χρειάζεται καμία άλλη για να καταλάβουμε τι λέει. Η δευτερεύουσα «κρέμεται» από την κύρια και ξεκινά συνήθως με σύνδεσμο.',
      en: 'A main clause needs no other clause for us to understand it. A dependent clause "hangs" from the main one and usually starts with a conjunction.',
    },
  },
  {
    q: { el: '«Θα πάμε βόλτα αν έχει ήλιο.» Ποια είναι η δευτερεύουσα πρόταση;', en: '«Θα πάμε βόλτα αν έχει ήλιο.» (We will go for a walk if it is sunny.) Which is the dependent clause?' },
    options: { el: ['αν έχει ήλιο', 'Θα πάμε βόλτα', 'έχει ήλιο', 'Θα πάμε'], en: ['αν έχει ήλιο', 'Θα πάμε βόλτα', 'έχει ήλιο', 'Θα πάμε'] },
    correct: 0,
    explanation: {
      el: 'Το «αν έχει ήλιο» ξεκινά με τον σύνδεσμο «αν» και δεν στέκεται μόνο του — περιμένει την κύρια πρόταση «Θα πάμε βόλτα» για να βγάλει νόημα.',
      en: '«αν έχει ήλιο» starts with the conjunction «αν» and cannot stand alone — it needs the main clause «Θα πάμε βόλτα» to make sense.',
    },
  },
  {
    q: { el: 'Ποια από τις παρακάτω είναι δευτερεύουσα πρόταση (δεν μπορεί να σταθεί μόνη της);', en: 'Which of these is a dependent clause (it cannot stand on its own)?' },
    options: { el: ['Ο σκύλος γαβγίζει.', 'Η Μαρία παίζει κιθάρα.', 'Τα παιδιά γέλασαν.', 'επειδή κρύωνε πολύ'], en: ['Ο σκύλος γαβγίζει. (The dog barks.)', 'Η Μαρία παίζει κιθάρα. (Maria plays the guitar.)', 'Τα παιδιά γέλασαν. (The children laughed.)', 'επειδή κρύωνε πολύ (because he was very cold)'] },
    correct: 3,
    explanation: {
      el: 'Αν πεις μόνο «επειδή κρύωνε πολύ», ο άλλος θα ρωτήσει «και τι έγινε;». Χρειάζεται μια κύρια πρόταση: «Φόρεσε το μπουφάν του επειδή κρύωνε πολύ».',
      en: 'If you say only «επειδή κρύωνε πολύ», the listener will ask "and then what?". It needs a main clause: «Φόρεσε το μπουφάν του επειδή κρύωνε πολύ» (He put on his jacket because he was very cold).',
    },
  },

  // ── 14–16: what the link means ────────────────────────────────────────────
  {
    q: { el: '«Φόρεσε το μπουφάν του, γιατί έκανε κρύο.» Τι δηλώνει η πρόταση «γιατί έκανε κρύο»;', en: '«Φόρεσε το μπουφάν του, γιατί έκανε κρύο.» (He put on his jacket, because it was cold.) What does the clause «γιατί έκανε κρύο» express?' },
    options: { el: ['χρόνο', 'αιτία', 'σκοπό', 'προϋπόθεση'], en: ['time (χρόνο)', 'cause (αιτία)', 'purpose (σκοπό)', 'condition (προϋπόθεση)'] },
    correct: 1,
    explanation: {
      el: 'Το κρύο είναι ο λόγος που φόρεσε το μπουφάν. Οι προτάσεις με «γιατί» και «επειδή» δηλώνουν αιτία.',
      en: 'The cold is the reason he put on the jacket. Clauses with «γιατί» and «επειδή» express a cause.',
    },
  },
  {
    q: { el: '«Ξύπνησε νωρίς για να προλάβει το λεωφορείο.» Τι δηλώνει η πρόταση «για να προλάβει το λεωφορείο»;', en: '«Ξύπνησε νωρίς για να προλάβει το λεωφορείο.» (She woke up early in order to catch the bus.) What does the clause «για να προλάβει το λεωφορείο» express?' },
    options: { el: ['αιτία', 'χρόνο', 'σκοπό', 'αντίθεση'], en: ['cause (αιτία)', 'time (χρόνο)', 'purpose (σκοπό)', 'contrast (αντίθεση)'] },
    correct: 2,
    explanation: {
      el: 'Ξύπνησε νωρίς με σκοπό να προλάβει το λεωφορείο. Οι προτάσεις με «για να» δηλώνουν σκοπό.',
      en: 'She woke up early with the aim of catching the bus. Clauses with «για να» express purpose.',
    },
  },
  {
    q: { el: 'Ποιος από τους παρακάτω συνδέσμους δηλώνει αντίθεση;', en: 'Which of these conjunctions expresses contrast?' },
    options: { el: ['και', 'επειδή', 'όταν', 'αλλά'], en: ['και (and)', 'επειδή (because)', 'όταν (when)', 'αλλά (but)'] },
    correct: 3,
    explanation: {
      el: 'Το «αλλά» (όπως και το «όμως») φέρνει κάτι αντίθετο από αυτό που περιμέναμε: «Διάβασα πολύ, αλλά δυσκολεύτηκα».',
      en: '«αλλά» (like «όμως») brings something opposite to what we expected: «Διάβασα πολύ, αλλά δυσκολεύτηκα» (I studied a lot, but I found it hard).',
    },
  },

  // ── 17–18: the comma ──────────────────────────────────────────────────────
  {
    q: { el: 'Ποια πρόταση έχει σωστό κόμμα;', en: 'Which sentence has the comma in the right place?' },
    options: { el: ['Ήθελα να παίξω αλλά, έπρεπε να διαβάσω.', 'Ήθελα, να παίξω αλλά έπρεπε να διαβάσω.', 'Ήθελα να παίξω, αλλά έπρεπε να διαβάσω.', 'Ήθελα να παίξω αλλά έπρεπε, να διαβάσω.'], en: ['Ήθελα να παίξω αλλά, έπρεπε να διαβάσω.', 'Ήθελα, να παίξω αλλά έπρεπε να διαβάσω.', 'Ήθελα να παίξω, αλλά έπρεπε να διαβάσω.', 'Ήθελα να παίξω αλλά έπρεπε, να διαβάσω.'] },
    correct: 2,
    explanation: {
      el: 'Πριν από το «αλλά» βάζουμε κόμμα, ποτέ μετά. Το κόμμα δείχνει ότι εδώ αλλάζει η πρόταση: «Ήθελα να παίξω, αλλά έπρεπε να διαβάσω».',
      en: 'The comma goes before «αλλά», never after it. It marks where the sentence turns: «Ήθελα να παίξω, αλλά έπρεπε να διαβάσω» (I wanted to play, but I had to study).',
    },
  },
  {
    q: { el: 'Ποια πρόταση είναι σωστά γραμμένη;', en: 'Which sentence is written correctly?' },
    options: { el: ['Η Άννα αγόρασε μήλα, και αχλάδια.', 'Η Άννα αγόρασε μήλα και αχλάδια, αλλά ξέχασε τα πορτοκάλια.', 'Η Άννα αγόρασε μήλα και αχλάδια αλλά, ξέχασε τα πορτοκάλια.', 'Η Άννα, αγόρασε μήλα και αχλάδια αλλά ξέχασε τα πορτοκάλια.'], en: ['Η Άννα αγόρασε μήλα, και αχλάδια.', 'Η Άννα αγόρασε μήλα και αχλάδια, αλλά ξέχασε τα πορτοκάλια.', 'Η Άννα αγόρασε μήλα και αχλάδια αλλά, ξέχασε τα πορτοκάλια.', 'Η Άννα, αγόρασε μήλα και αχλάδια αλλά ξέχασε τα πορτοκάλια.'] },
    correct: 1,
    explanation: {
      el: 'Δύο κανόνες μαζί: πριν από το «και» που ενώνει δύο λέξεις ΔΕΝ βάζουμε κόμμα, ενώ πριν από το «αλλά» βάζουμε. Και ποτέ κόμμα ανάμεσα στο υποκείμενο και το ρήμα!',
      en: 'Two rules together: NO comma before a «και» that joins two words, but a comma before «αλλά». And never a comma between the subject and the verb!',
    },
  },
];
