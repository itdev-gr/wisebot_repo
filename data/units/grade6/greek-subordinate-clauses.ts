/**
 * ΣΤ' Δημοτικού · Γλώσσα · Δευτερεύουσες προτάσεις
 * =================================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr). Language level: 11–12.
 *
 * What the unit covers, in order:
 *   1–7   recognising the kind of subordinate clause from its conjunction:
 *         αιτιολογική (επειδή, γιατί), τελική (για να), χρονική (όταν, μόλις, πριν),
 *         υποθετική (αν), αναφορική (που, ο οποίος), αποτελεσματική (ώστε)
 *   8–12  choosing the conjunction that fits the meaning of the sentence
 *   13–14 which question each kind answers (γιατί; πότε;)
 *   15–18 harder cases: spotting the purpose clause among look-alikes, «αφού» as time,
 *         «ώστε» for result, counting main and subordinate clauses
 */
import type { QuizQuestion } from '../../../types';

export const GRADE6_GREEK_SUBORDINATE_CLAUSES: QuizQuestion[] = [
  // ── 1–7: which kind is it? ─────────────────────────────────────────────────
  {
    q: { el: '«Ο Πέτρος έμεινε σπίτι, επειδή είχε πυρετό.» Ποια είναι η δευτερεύουσα πρόταση;', en: '«Ο Πέτρος έμεινε σπίτι, επειδή είχε πυρετό.» (Petros stayed home because he had a fever.) Which is the subordinate clause?' },
    options: {
      el: ['Ο Πέτρος έμεινε σπίτι', 'επειδή είχε πυρετό', 'είχε πυρετό', 'Ο Πέτρος'],
      en: ['Ο Πέτρος έμεινε σπίτι (Petros stayed home)', 'επειδή είχε πυρετό (because he had a fever)', 'είχε πυρετό (he had a fever)', 'Ο Πέτρος (Petros)'],
    },
    correct: 1,
    explanation: {
      el: 'Η δευτερεύουσα ξεκινά με τον σύνδεσμο και τον περιλαμβάνει: «επειδή είχε πυρετό». Χωρίς το «επειδή», το «είχε πυρετό» θα ήταν κύρια πρόταση.',
      en: 'The subordinate clause starts with the conjunction and includes it: «επειδή είχε πυρετό». Without «επειδή», «είχε πυρετό» would be a main clause.',
    },
  },
  {
    q: { el: 'Τι είδους δευτερεύουσα είναι η πρόταση «επειδή είχε πυρετό»;', en: 'What kind of subordinate clause is «επειδή είχε πυρετό» (because he had a fever)?' },
    options: {
      el: ['χρονική', 'τελική', 'αιτιολογική', 'υποθετική'],
      en: ['χρονική (time)', 'τελική (purpose)', 'αιτιολογική (causal)', 'υποθετική (conditional)'],
    },
    correct: 2,
    explanation: {
      el: 'Το «επειδή» (όπως και το «γιατί», το «αφού») δίνει την αιτία: γιατί έμεινε σπίτι; Επειδή είχε πυρετό. Άρα αιτιολογική.',
      en: '«Επειδή» (like «γιατί» and «αφού») gives the reason: why did he stay home? Because he had a fever. So it is causal (αιτιολογική).',
    },
  },
  {
    q: { el: '«Η Άννα διαβάζει κάθε μέρα, για να γράψει καλά στο διαγώνισμα.» Τι δηλώνει η πρόταση «για να γράψει καλά στο διαγώνισμα»;', en: '«Η Άννα διαβάζει κάθε μέρα, για να γράψει καλά στο διαγώνισμα.» (Anna studies every day so that she does well in the test.) What does «για να γράψει καλά στο διαγώνισμα» express?' },
    options: {
      el: ['σκοπό — είναι τελική', 'αιτία — είναι αιτιολογική', 'χρόνο — είναι χρονική', 'αποτέλεσμα — είναι αποτελεσματική'],
      en: ['purpose — it is τελική', 'reason — it is αιτιολογική', 'time — it is χρονική', 'result — it is αποτελεσματική'],
    },
    correct: 0,
    explanation: {
      el: 'Το «για να» δείχνει τον σκοπό: για ποιον λόγο διαβάζει; Για να γράψει καλά. Οι προτάσεις σκοπού λέγονται τελικές.',
      en: '«Για να» shows the purpose: what is she studying for? So that she does well. Clauses of purpose are called τελικές.',
    },
  },
  {
    q: { el: '«Μόλις χτύπησε το κουδούνι, τα παιδιά βγήκαν στην αυλή.» Τι είδους είναι η δευτερεύουσα πρόταση;', en: '«Μόλις χτύπησε το κουδούνι, τα παιδιά βγήκαν στην αυλή.» (As soon as the bell rang, the children went out to the yard.) What kind of subordinate clause is it?' },
    options: {
      el: ['υποθετική', 'αναφορική', 'τελική', 'χρονική'],
      en: ['υποθετική (conditional)', 'αναφορική (relative)', 'τελική (purpose)', 'χρονική (time)'],
    },
    correct: 3,
    explanation: {
      el: 'Το «μόλις» απαντά στο «πότε;»: πότε βγήκαν; Μόλις χτύπησε το κουδούνι. Χρονικοί σύνδεσμοι: όταν, μόλις, πριν, αφού, ενώ.',
      en: '«Μόλις» answers “when?”: when did they go out? As soon as the bell rang. Time conjunctions: όταν, μόλις, πριν, αφού, ενώ.',
    },
  },
  {
    q: { el: '«Αν έχει ήλιο το Σάββατο, θα πάμε στη θάλασσα.» Τι είδους είναι η πρόταση «αν έχει ήλιο το Σάββατο»;', en: '«Αν έχει ήλιο το Σάββατο, θα πάμε στη θάλασσα.» (If it is sunny on Saturday, we will go to the sea.) What kind of clause is «αν έχει ήλιο το Σάββατο»?' },
    options: {
      el: ['υποθετική', 'χρονική', 'αιτιολογική', 'ειδική'],
      en: ['υποθετική (conditional)', 'χρονική (time)', 'αιτιολογική (causal)', 'ειδική (that-clause)'],
    },
    correct: 0,
    explanation: {
      el: 'Το «αν» βάζει έναν όρο που δεν είναι σίγουρος: ΑΝ έχει ήλιο, τότε θα πάμε. Αυτό λέγεται υπόθεση, και η πρόταση υποθετική.',
      en: '«Αν» sets a condition that is not certain: IF it is sunny, then we will go. That is a condition, and the clause is υποθετική.',
    },
  },
  {
    q: { el: '«Το ποδήλατο που μου χάρισε ο θείος μου είναι κόκκινο.» Τι είδους είναι η πρόταση «που μου χάρισε ο θείος μου»;', en: '«Το ποδήλατο που μου χάρισε ο θείος μου είναι κόκκινο.» (The bicycle that my uncle gave me is red.) What kind of clause is «που μου χάρισε ο θείος μου»?' },
    options: {
      el: ['χρονική', 'αναφορική', 'τελική', 'υποθετική'],
      en: ['χρονική (time)', 'αναφορική (relative)', 'τελική (purpose)', 'υποθετική (conditional)'],
    },
    correct: 1,
    explanation: {
      el: 'Το «που» (ή «το οποίο») αναφέρεται στο «ποδήλατο» και μας λέει ποιο ποδήλατο. Οι προτάσεις που περιγράφουν ένα ουσιαστικό είναι αναφορικές.',
      en: '«Που» (or «το οποίο») refers back to «ποδήλατο» and tells us which bicycle. Clauses that describe a noun are relative (αναφορικές).',
    },
  },
  {
    q: { el: '«Έβρεχε τόσο δυνατά, ώστε πλημμύρισαν οι δρόμοι.» Τι δηλώνει η πρόταση «ώστε πλημμύρισαν οι δρόμοι»;', en: '«Έβρεχε τόσο δυνατά, ώστε πλημμύρισαν οι δρόμοι.» (It rained so hard that the streets flooded.) What does «ώστε πλημμύρισαν οι δρόμοι» express?' },
    options: {
      el: ['αιτία', 'σκοπό', 'αποτέλεσμα', 'χρόνο'],
      en: ['a reason', 'a purpose', 'a result', 'time'],
    },
    correct: 2,
    explanation: {
      el: 'Το «τόσο… ώστε» δείχνει τι προέκυψε από τη δυνατή βροχή: το αποτέλεσμα. Η πρόταση λέγεται αποτελεσματική (ή συμπερασματική).',
      en: '«Τόσο… ώστε» shows what followed from the heavy rain: the result. The clause is called αποτελεσματική (result clause).',
    },
  },

  // ── 8–12: the conjunction that fits ──────────────────────────────────────
  {
    q: { el: 'Συμπλήρωσε: «Πήρα το μπουφάν μου, ___ κρύωνα.»', en: 'Fill in: «Πήρα το μπουφάν μου, ___ κρύωνα.» (I took my jacket ___ I was cold.)' },
    options: {
      el: ['για να', 'ώστε', 'αν', 'γιατί'],
      en: ['για να (so that)', 'ώστε (so that, as a result)', 'αν (if)', 'γιατί (because)'],
    },
    correct: 3,
    explanation: {
      el: 'Το κρύο είναι η αιτία που πήρα το μπουφάν, άρα χρειάζεται αιτιολογικός σύνδεσμος: «γιατί» ή «επειδή».',
      en: 'The cold is the reason I took the jacket, so we need a causal conjunction: «γιατί» or «επειδή».',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: «Ο Νίκος έβαλε ξυπνητήρι, ___ μην αργήσει στο σχολείο.»', en: 'Fill in: «Ο Νίκος έβαλε ξυπνητήρι, ___ μην αργήσει στο σχολείο.» (Nikos set an alarm ___ not be late for school.)' },
    options: {
      el: ['επειδή', 'για να', 'όταν', 'που'],
      en: ['επειδή (because)', 'για να (so that)', 'όταν (when)', 'που (that)'],
    },
    correct: 1,
    explanation: {
      el: 'Το ξυπνητήρι έχει σκοπό: να μην αργήσει. Ο σκοπός δηλώνεται με «για να» (τελική πρόταση).',
      en: 'The alarm has a purpose: not to be late. Purpose is expressed with «για να» (a τελική clause).',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: «Πλύνε τα χέρια σου ___ φας.»', en: 'Fill in: «Πλύνε τα χέρια σου ___ φας.» (Wash your hands ___ you eat.)' },
    options: {
      el: ['πριν', 'επειδή', 'ώστε', 'αν'],
      en: ['πριν (before)', 'επειδή (because)', 'ώστε (so that)', 'αν (if)'],
    },
    correct: 0,
    explanation: {
      el: 'Εδώ μιλάμε για τη σειρά στον χρόνο: πρώτα πλύσιμο, μετά φαγητό. Το «πριν» εισάγει χρονική πρόταση.',
      en: 'This is about the order in time: first washing, then eating. «Πριν» introduces a time clause.',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: «___ δεν βρέξει αύριο, θα κάνουμε το πικνίκ στο πάρκο.»', en: 'Fill in: «___ δεν βρέξει αύριο, θα κάνουμε το πικνίκ στο πάρκο.» (___ it does not rain tomorrow, we will have the picnic in the park.)' },
    options: {
      el: ['Επειδή', 'Μόλις', 'Αν', 'Ώστε'],
      en: ['Επειδή (Because)', 'Μόλις (As soon as)', 'Αν (If)', 'Ώστε (So that)'],
    },
    correct: 2,
    explanation: {
      el: 'Δεν ξέρουμε αν θα βρέξει — είναι υπόθεση. Το πικνίκ εξαρτάται από αυτήν, άρα «Αν».',
      en: 'We do not know whether it will rain — it is a condition. The picnic depends on it, so «Αν».',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: «Η φίλη μου, ___ μένει στο διπλανό σπίτι, με περιμένει κάθε πρωί.»', en: 'Fill in: «Η φίλη μου, ___ μένει στο διπλανό σπίτι, με περιμένει κάθε πρωί.» (My friend, ___ lives next door, waits for me every morning.)' },
    options: {
      el: ['ο οποίος', 'το οποίο', 'η οποία', 'οι οποίες'],
      en: ['ο οποίος', 'το οποίο', 'η οποία', 'οι οποίες'],
    },
    correct: 2,
    explanation: {
      el: 'Η αναφορική αντωνυμία συμφωνεί με τη λέξη που περιγράφει: «η φίλη» είναι θηλυκό, ενικός → «η οποία». Θα ταίριαζε και το «που».',
      en: 'The relative pronoun agrees with the word it describes: «η φίλη» is feminine singular → «η οποία». «Που» would also fit.',
    },
  },

  // ── 13–14: which question does it answer? ────────────────────────────────
  {
    q: { el: 'Σε ποια ερώτηση απαντά μια αιτιολογική πρόταση;', en: 'Which question does a causal clause (αιτιολογική) answer?' },
    options: {
      el: ['πότε;', 'γιατί;', 'με ποιο σκοπό;', 'ποιος;'],
      en: ['πότε; (when?)', 'γιατί; (why?)', 'με ποιο σκοπό; (for what purpose?)', 'ποιος; (who?)'],
    },
    correct: 1,
    explanation: {
      el: 'Αιτιολογική = αιτία = «γιατί;». Θυμήσου τον χάρτη: γιατί; → αιτιολογική, πότε; → χρονική, με ποιο σκοπό; → τελική.',
      en: 'Causal = reason = “why?”. Remember the map: why? → αιτιολογική, when? → χρονική, for what purpose? → τελική.',
    },
  },
  {
    q: { el: 'Σε ποια ερώτηση απαντά μια χρονική πρόταση;', en: 'Which question does a time clause (χρονική) answer?' },
    options: {
      el: ['γιατί;', 'τι;', 'πού;', 'πότε;'],
      en: ['γιατί; (why?)', 'τι; (what?)', 'πού; (where?)', 'πότε; (when?)'],
    },
    correct: 3,
    explanation: {
      el: 'Η χρονική πρόταση τοποθετεί την πράξη στον χρόνο: «Όταν τελειώσω, θα βγω» — πότε θα βγω; Όταν τελειώσω.',
      en: 'A time clause places the action in time: «Όταν τελειώσω, θα βγω» (When I finish, I will go out) — when will I go out? When I finish.',
    },
  },

  // ── 15–18: harder cases ──────────────────────────────────────────────────
  {
    q: { el: 'Ποια από τις παρακάτω προτάσεις περιέχει τελική (σκοπού) πρόταση;', en: 'Which of these sentences contains a purpose clause (τελική)?' },
    options: {
      el: ['Πήγα στο φαρμακείο, για να αγοράσω βιταμίνες.', 'Πήγα στο φαρμακείο, όταν έκλεισε το σχολείο.', 'Πήγα στο φαρμακείο, επειδή πονούσε το κεφάλι μου.', 'Πήγα στο φαρμακείο που είναι στη γωνία.'],
      en: ['Πήγα στο φαρμακείο, για να αγοράσω βιταμίνες. (I went to the pharmacy to buy vitamins.)', 'Πήγα στο φαρμακείο, όταν έκλεισε το σχολείο. (I went to the pharmacy when school closed.)', 'Πήγα στο φαρμακείο, επειδή πονούσε το κεφάλι μου. (I went to the pharmacy because my head hurt.)', 'Πήγα στο φαρμακείο που είναι στη γωνία. (I went to the pharmacy that is on the corner.)'],
    },
    correct: 0,
    explanation: {
      el: 'Μόνο το «για να αγοράσω βιταμίνες» λέει τον σκοπό της επίσκεψης. Οι άλλες δίνουν χρόνο (όταν), αιτία (επειδή) και ποιο φαρμακείο (που).',
      en: 'Only «για να αγοράσω βιταμίνες» gives the purpose of the visit. The others give time (όταν), reason (επειδή) and which pharmacy (που).',
    },
  },
  {
    q: { el: '«Αφού τελείωσε το φαγητό, ο Δημήτρης βγήκε βόλτα.» Τι δηλώνει εδώ το «αφού»;', en: '«Αφού τελείωσε το φαγητό, ο Δημήτρης βγήκε βόλτα.» (After he finished his meal, Dimitris went for a walk.) What does «αφού» express here?' },
    options: {
      el: ['αιτία', 'χρόνο', 'σκοπό', 'υπόθεση'],
      en: ['a reason', 'time', 'a purpose', 'a condition'],
    },
    correct: 1,
    explanation: {
      el: 'Εδώ το «αφού» σημαίνει «μετά που» και βάζει τα γεγονότα στη σειρά: πρώτα το φαγητό, μετά η βόλτα. Άρα χρονική. (Σε άλλες προτάσεις το «αφού» μπορεί να σημαίνει «επειδή».)',
      en: 'Here «αφού» means “after” and puts the events in order: first the meal, then the walk. So it is a time clause. (In other sentences «αφού» can mean “since / because”.)',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: «Ο δρόμος ήταν τόσο γλιστερός, ___ έπεσα δύο φορές.»', en: 'Fill in: «Ο δρόμος ήταν τόσο γλιστερός, ___ έπεσα δύο φορές.» (The road was so slippery ___ I fell twice.)' },
    options: {
      el: ['ώστε', 'για να', 'πριν', 'αν'],
      en: ['ώστε (that, as a result)', 'για να (so that)', 'πριν (before)', 'αν (if)'],
    },
    correct: 0,
    explanation: {
      el: 'Το «τόσο» ζητάει το ταίρι του: «τόσο… ώστε». Το πέσιμο είναι το αποτέλεσμα του γλιστερού δρόμου, όχι ο σκοπός του!',
      en: '«Τόσο» calls for its partner: «τόσο… ώστε». Falling is the result of the slippery road, not its purpose!',
    },
  },
  {
    q: { el: '«Όταν έφτασε ο παππούς, τα παιδιά χάρηκαν, γιατί τους έφερε δώρα.» Πόσες κύριες και πόσες δευτερεύουσες προτάσεις υπάρχουν;', en: '«Όταν έφτασε ο παππούς, τα παιδιά χάρηκαν, γιατί τους έφερε δώρα.» (When grandpa arrived, the children were happy, because he brought them presents.) How many main and how many subordinate clauses are there?' },
    options: {
      el: ['2 κύριες, 1 δευτερεύουσα', '3 κύριες', '3 δευτερεύουσες', '1 κύρια, 2 δευτερεύουσες'],
      en: ['2 main, 1 subordinate', '3 main', '3 subordinate', '1 main, 2 subordinate'],
    },
    correct: 3,
    explanation: {
      el: 'Τρία ρήματα, τρεις προτάσεις. Κύρια είναι μόνο «τα παιδιά χάρηκαν». Το «όταν έφτασε ο παππούς» είναι χρονική και το «γιατί τους έφερε δώρα» αιτιολογική.',
      en: 'Three verbs, three clauses. The only main clause is «τα παιδιά χάρηκαν». «Όταν έφτασε ο παππούς» is a time clause and «γιατί τους έφερε δώρα» a causal one.',
    },
  },
];
