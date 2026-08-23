/**
 * ΣΤ' Δημοτικού · Γλώσσα · Κριτική Ανάγνωση
 * =========================================
 * Original questions (curriculum topics only — no textbook text). Language level: 11–12 ετών.
 *
 * What the unit covers, in order:
 *   1–3   kinds of texts: argumentative vs informational, what an argument is
 *   4–6   author purpose: to persuade, to explain/instruct, to entertain
 *   7–11  fact vs opinion: telling them apart, opinion signal words, checking a fact
 *   12–14 summary: keeping the main idea, leaving out details, no added information
 *   15–18 cohesion words: αλλά, γι' αυτό, επιπλέον, ωστόσο — what each one signals
 */
import type { QuizQuestion } from '../../../types';

export const GRADE6_GREEK_READING_CRITICAL: QuizQuestion[] = [
  // ── 1–3: kinds of texts ────────────────────────────────────────────────────
  {
    q: {
      el: 'Διάβασε: «Το ποδήλατο είναι ο καλύτερος τρόπος να πηγαίνουμε στο σχολείο. Δεν ρυπαίνει, κάνει καλό στην υγεία και δεν κοστίζει πολλά.» Τι είδος κειμένου είναι αυτό;',
      en: 'Read: «The bicycle is the best way to get to school. It does not pollute, it is good for your health and it does not cost much.» What kind of text is this?',
    },
    options: {
      el: ['Επιχειρηματολογικό κείμενο', 'Παραμύθι', 'Ποίημα', 'Συνταγή'],
      en: ['Argumentative text', 'Fairy tale', 'Poem', 'Recipe'],
    },
    correct: 0,
    explanation: {
      el: 'Ο συγγραφέας λέει μια άποψη (το ποδήλατο είναι το καλύτερο) και δίνει λόγους για να μας πείσει. Αυτό είναι επιχειρηματολογικό κείμενο.',
      en: 'The writer states an opinion (the bicycle is best) and gives reasons to convince us. That is an argumentative text.',
    },
  },
  {
    q: {
      el: 'Διάβασε: «Η θαλάσσια χελώνα γεννά τα αυγά της στην άμμο. Τα μικρά βγαίνουν από τα αυγά μετά από περίπου δύο μήνες και τρέχουν προς τη θάλασσα.» Τι είδος κειμένου είναι αυτό;',
      en: 'Read: «The sea turtle lays its eggs in the sand. The babies hatch after about two months and run towards the sea.» What kind of text is this?',
    },
    options: {
      el: ['Επιχειρηματολογικό κείμενο', 'Διαφήμιση', 'Πληροφοριακό κείμενο', 'Προσωπικό ημερολόγιο'],
      en: ['Argumentative text', 'Advertisement', 'Informational text', 'Personal diary'],
    },
    correct: 2,
    explanation: {
      el: 'Το κείμενο δίνει πληροφορίες για τις χελώνες, χωρίς να προσπαθεί να μας πείσει για κάτι. Αυτό είναι πληροφοριακό κείμενο.',
      en: 'The text gives information about turtles without trying to convince us of anything. That is an informational text.',
    },
  },
  {
    q: { el: 'Τι είναι ένα «επιχείρημα»;', en: 'What is an «argument» (επιχείρημα) in a text?' },
    options: {
      el: ['Ο τίτλος του κειμένου', 'Ένας λόγος που στηρίζει μια άποψη', 'Μια ερώτηση προς τον αναγνώστη', 'Το όνομα του συγγραφέα'],
      en: ['The title of the text', 'A reason that supports an opinion', 'A question to the reader', 'The name of the writer'],
    },
    correct: 1,
    explanation: {
      el: 'Επιχείρημα είναι ένας λόγος που δίνουμε για να στηρίξουμε την άποψή μας, π.χ. «Το ποδήλατο είναι καλό, επειδή δεν ρυπαίνει».',
      en: 'An argument is a reason we give to support our opinion, e.g. «The bicycle is good because it does not pollute».',
    },
  },

  // ── 4–6: author purpose ────────────────────────────────────────────────────
  {
    q: {
      el: 'Διάβασε: «Ελάτε όλοι στη γιορτή του σχολείου μας το Σάββατο! Θα έχει μουσική, παιχνίδια και γλυκά για όλους!» Ποιος είναι ο σκοπός του συγγραφέα;',
      en: 'Read: «Everyone come to our school party on Saturday! There will be music, games and sweets for all!» What is the writer\'s purpose?',
    },
    options: {
      el: ['Να διηγηθεί μια ιστορία', 'Να μας πείσει να πάμε στη γιορτή', 'Να εξηγήσει πώς φτιάχνουμε γλυκά', 'Να περιγράψει το σχολείο'],
      en: ['To tell a story', 'To persuade us to go to the party', 'To explain how to make sweets', 'To describe the school'],
    },
    correct: 1,
    explanation: {
      el: 'Το κείμενο μάς καλεί και μας λέει τα ωραία που θα γίνουν, για να μας πείσει να πάμε. Σκοπός: να πείσει.',
      en: 'The text invites us and lists the nice things that will happen, to persuade us to go. Purpose: to persuade.',
    },
  },
  {
    q: {
      el: 'Διάβασε: «Για να φτιάξεις χαρταετό, χρειάζεσαι δύο καλάμια, χαρτί και σπάγκο. Πρώτα δένεις τα καλάμια σε σχήμα σταυρού.» Ποιος είναι ο σκοπός του συγγραφέα;',
      en: 'Read: «To make a kite you need two sticks, paper and string. First you tie the sticks in the shape of a cross.» What is the writer\'s purpose?',
    },
    options: {
      el: ['Να μας πείσει να αγοράσουμε χαρταετό', 'Να μας κάνει να γελάσουμε', 'Να περιγράψει μια μέρα στην εξοχή', 'Να μας εξηγήσει πώς γίνεται κάτι'],
      en: ['To persuade us to buy a kite', 'To make us laugh', 'To describe a day in the countryside', 'To explain how something is made'],
    },
    correct: 3,
    explanation: {
      el: 'Το κείμενο δίνει υλικά και βήματα, δηλαδή οδηγίες. Σκοπός του συγγραφέα είναι να εξηγήσει πώς φτιάχνεται ο χαρταετός.',
      en: 'The text gives materials and steps, that is instructions. The writer\'s purpose is to explain how the kite is made.',
    },
  },
  {
    q: {
      el: 'Διάβασε: «Η Ελένη έτρεξε στην παραλία. Η άμμος ήταν ζεστή και τα κύματα έπαιζαν με τα πόδια της. Γέλασε δυνατά.» Ποιος είναι ο σκοπός του συγγραφέα;',
      en: 'Read: «Eleni ran to the beach. The sand was warm and the waves played with her feet. She laughed out loud.» What is the writer\'s purpose?',
    },
    options: {
      el: ['Να μας διηγηθεί μια ιστορία και να μας ψυχαγωγήσει', 'Να μας δώσει πληροφορίες για τη θάλασσα', 'Να μας πείσει να πάμε στην παραλία', 'Να μας εξηγήσει πώς κολυμπάμε'],
      en: ['To tell us a story and entertain us', 'To give us information about the sea', 'To persuade us to go to the beach', 'To explain to us how to swim'],
    },
    correct: 0,
    explanation: {
      el: 'Το κείμενο αφηγείται τι έκανε η Ελένη, με εικόνες και συναισθήματα. Είναι αφήγηση, σκοπός της είναι να μας ψυχαγωγήσει.',
      en: 'The text narrates what Eleni did, with images and feelings. It is a narrative; its purpose is to entertain us.',
    },
  },

  // ── 7–11: fact vs opinion ──────────────────────────────────────────────────
  {
    q: { el: 'Ποια από τις παρακάτω προτάσεις είναι γεγονός;', en: 'Which of the following sentences is a fact?' },
    options: {
      el: ['Η Αθήνα είναι η πρωτεύουσα της Ελλάδας.', 'Η Αθήνα είναι η πιο όμορφη πόλη του κόσμου.', 'Το καλοκαίρι είναι η καλύτερη εποχή.', 'Τα σκυλιά είναι πιο χαριτωμένα από τις γάτες.'],
      en: ['Athens is the capital of Greece.', 'Athens is the most beautiful city in the world.', 'Summer is the best season.', 'Dogs are cuter than cats.'],
    },
    correct: 0,
    explanation: {
      el: 'Γεγονός είναι κάτι που μπορούμε να ελέγξουμε αν είναι αληθινό. Ότι η Αθήνα είναι πρωτεύουσα το ελέγχουμε σε έναν χάρτη. Οι άλλες προτάσεις είναι γνώμες.',
      en: 'A fact is something we can check to see if it is true. We can check on a map that Athens is the capital. The other sentences are opinions.',
    },
  },
  {
    q: { el: 'Ποια από τις παρακάτω προτάσεις είναι γνώμη;', en: 'Which of the following sentences is an opinion?' },
    options: {
      el: ['Ένα έτος έχει δώδεκα μήνες.', 'Το νερό βράζει στους 100 βαθμούς.', 'Το ποδόσφαιρο είναι το πιο βαρετό άθλημα.', 'Η Κρήτη είναι νησί.'],
      en: ['A year has twelve months.', 'Water boils at 100 degrees.', 'Football is the most boring sport.', 'Crete is an island.'],
    },
    correct: 2,
    explanation: {
      el: 'Το «πιο βαρετό» είναι κάτι που πιστεύει κάποιος, όχι κάτι που μπορούμε να αποδείξουμε. Άρα είναι γνώμη. Οι άλλες τρεις είναι γεγονότα.',
      en: '«The most boring» is what someone believes, not something we can prove. So it is an opinion. The other three are facts.',
    },
  },
  {
    q: { el: 'Ποια φράση δείχνει ότι ο συγγραφέας λέει τη γνώμη του;', en: 'Which phrase shows that the writer is giving an opinion?' },
    options: {
      el: ['Σύμφωνα με τις μετρήσεις…', 'Κατά τη γνώμη μου…', 'Το έτος 2004…', 'Στη βόρεια Ελλάδα…'],
      en: ['According to the measurements…', 'In my opinion…', 'In the year 2004…', 'In northern Greece…'],
    },
    correct: 1,
    explanation: {
      el: 'Λέξεις όπως «κατά τη γνώμη μου», «πιστεύω», «νομίζω» μάς προειδοποιούν ότι ακολουθεί γνώμη και όχι γεγονός.',
      en: 'Words like «in my opinion», «I believe», «I think» warn us that an opinion follows, not a fact.',
    },
  },
  {
    q: {
      el: 'Διάβασε: «Ο Νίκος έχει ύψος 1,50 μέτρα. Είναι ο καλύτερος τερματοφύλακας της τάξης.» Ποια πρόταση είναι γνώμη;',
      en: 'Read: «Nikos is 1.50 metres tall. He is the best goalkeeper in the class.» Which sentence is an opinion?',
    },
    options: {
      el: ['Η πρώτη πρόταση', 'Η δεύτερη πρόταση', 'Και οι δύο προτάσεις', 'Καμία από τις δύο'],
      en: ['The first sentence', 'The second sentence', 'Both sentences', 'Neither of them'],
    },
    correct: 1,
    explanation: {
      el: 'Το ύψος το μετράμε, άρα είναι γεγονός. Το «καλύτερος τερματοφύλακας» είναι κάτι που πιστεύει κάποιος, άρα είναι γνώμη.',
      en: 'Height can be measured, so it is a fact. «Best goalkeeper» is what someone believes, so it is an opinion.',
    },
  },
  {
    q: { el: 'Πώς μπορούμε να ξεχωρίσουμε ένα γεγονός από μια γνώμη;', en: 'How can we tell a fact from an opinion?' },
    options: {
      el: ['Το γεγονός είναι πάντα πιο μεγάλη πρόταση', 'Το γεγονός γράφεται πάντα πρώτο στο κείμενο', 'Η γνώμη έχει πάντα θαυμαστικό', 'Το γεγονός μπορούμε να το ελέγξουμε αν είναι αληθινό'],
      en: ['A fact is always a longer sentence', 'A fact is always written first in the text', 'An opinion always has an exclamation mark', 'A fact can be checked to see if it is true'],
    },
    correct: 3,
    explanation: {
      el: 'Ένα γεγονός μπορούμε να το ελέγξουμε (σε βιβλίο, χάρτη, μέτρηση). Μια γνώμη δείχνει τι πιστεύει κάποιος και άλλοι μπορεί να διαφωνούν.',
      en: 'A fact can be checked (in a book, a map, a measurement). An opinion shows what someone believes, and others may disagree.',
    },
  },

  // ── 12–14: summary ─────────────────────────────────────────────────────────
  {
    q: {
      el: 'Διάβασε: «Η Μαρία βρήκε ένα σκυλάκι στον δρόμο. Το πήγε στον κτηνίατρο και μετά το κράτησε στο σπίτι της. Το ονόμασε Μπάμπη.» Ποια είναι η καλύτερη περίληψη;',
      en: 'Read: «Maria found a puppy in the street. She took it to the vet and then kept it at her home. She named it Babis.» Which is the best summary?',
    },
    options: {
      el: ['Ο κτηνίατρος είναι καλός γιατρός.', 'Η Μαρία αγαπάει όλα τα ζώα.', 'Η Μαρία βρήκε ένα σκυλάκι και το κράτησε.', 'Το σκυλάκι λέγεται Μπάμπης.'],
      en: ['The vet is a good doctor.', 'Maria loves all animals.', 'Maria found a puppy and kept it.', 'The puppy is called Babis.'],
    },
    correct: 2,
    explanation: {
      el: 'Η περίληψη λέει το πιο σημαντικό σε λίγα λόγια. Το όνομα του σκύλου είναι λεπτομέρεια, και το ότι η Μαρία αγαπάει όλα τα ζώα δεν το λέει το κείμενο.',
      en: 'A summary says the most important thing in a few words. The dog\'s name is a detail, and the text never says Maria loves all animals.',
    },
  },
  {
    q: { el: 'Τι αφήνουμε έξω όταν γράφουμε περίληψη;', en: 'What do we leave out when we write a summary?' },
    options: {
      el: ['Την κεντρική ιδέα', 'Τις μικρές λεπτομέρειες', 'Το θέμα του κειμένου', 'Τα βασικά γεγονότα'],
      en: ['The main idea', 'The small details', 'The topic of the text', 'The main events'],
    },
    correct: 1,
    explanation: {
      el: 'Στην περίληψη κρατάμε την κεντρική ιδέα και τα βασικά γεγονότα. Τις μικρές λεπτομέρειες (ονόματα, χρώματα, ώρες) τις αφήνουμε έξω.',
      en: 'In a summary we keep the main idea and the main events. We leave out the small details (names, colours, times).',
    },
  },
  {
    q: {
      el: 'Διάβασε: «Οι μέλισσες ζουν σε κυψέλες. Κάθε κυψέλη έχει μία βασίλισσα και χιλιάδες εργάτριες. Οι εργάτριες μαζεύουν γύρη από τα λουλούδια και φτιάχνουν μέλι.» Ποια είναι η καλύτερη περίληψη;',
      en: 'Read: «Bees live in hives. Each hive has one queen and thousands of workers. The workers collect pollen from flowers and make honey.» Which is the best summary?',
    },
    options: {
      el: ['Οι μέλισσες ζουν οργανωμένα σε κυψέλες και φτιάχνουν μέλι.', 'Το μέλι είναι πολύ γλυκό και νόστιμο.', 'Κάθε κυψέλη έχει μόνο μία βασίλισσα.', 'Οι μέλισσες τσιμπούν όταν τις ενοχλούμε.'],
      en: ['Bees live in organised hives and make honey.', 'Honey is very sweet and tasty.', 'Each hive has only one queen.', 'Bees sting when we bother them.'],
    },
    correct: 0,
    explanation: {
      el: 'Η σωστή περίληψη λέει την κεντρική ιδέα όλου του κειμένου. Η βασίλισσα είναι μία λεπτομέρεια, ενώ για τη γεύση του μελιού και τα τσιμπήματα το κείμενο δεν λέει τίποτα.',
      en: 'The right summary gives the main idea of the whole text. The queen is one detail, and the text says nothing about honey\'s taste or stings.',
    },
  },

  // ── 15–18: cohesion words ──────────────────────────────────────────────────
  {
    q: { el: 'Ποια λέξη ταιριάζει στο κενό; «Ήθελα να παίξω έξω, ___ έβρεχε.»', en: 'Which word fits the gap? «I wanted to play outside, ___ it was raining.»' },
    options: {
      el: ['αλλά', 'επειδή', 'επομένως', 'πρώτα'],
      en: ['αλλά (but)', 'επειδή (because)', 'επομένως (therefore)', 'πρώτα (first)'],
    },
    correct: 0,
    explanation: {
      el: 'Το «αλλά» δείχνει αντίθεση: ήθελα να παίξω, όμως κάτι με εμπόδισε. Το «επειδή» θα έλεγε ότι η βροχή ήταν ο λόγος που ήθελα να παίξω, που δεν βγάζει νόημα.',
      en: '«Αλλά» (but) shows contrast: I wanted to play, but something stopped me. «Επειδή» (because) would mean the rain was the reason I wanted to play, which makes no sense.',
    },
  },
  {
    q: { el: 'Ποια λέξη ταιριάζει στο κενό; «Ο Γιώργος διάβασε πολύ, ___ πήρε καλό βαθμό.»', en: 'Which word fits the gap? «Giorgos studied a lot, ___ he got a good mark.»' },
    options: {
      el: ['όμως', 'γι\' αυτό', 'αν και', 'πριν'],
      en: ['όμως (however)', 'γι\' αυτό (that is why)', 'αν και (although)', 'πριν (before)'],
    },
    correct: 1,
    explanation: {
      el: 'Το «γι\' αυτό» δείχνει αποτέλεσμα: διάβασε πολύ και το αποτέλεσμα ήταν ο καλός βαθμός. Το «όμως» και το «αν και» δείχνουν αντίθεση, που εδώ δεν υπάρχει.',
      en: '«Γι\' αυτό» (that is why) shows a result: he studied a lot and the result was a good mark. «Όμως» and «αν και» show contrast, and there is no contrast here.',
    },
  },
  {
    q: {
      el: 'Ποια λέξη ταιριάζει στο κενό, για να προσθέσει ένα ακόμη επιχείρημα; «Το ποδήλατο είναι φθηνό. ___, δεν ρυπαίνει το περιβάλλον.»',
      en: 'Which word fits the gap, to add one more argument? «The bicycle is cheap. ___, it does not pollute the environment.»',
    },
    options: {
      el: ['Αντίθετα', 'Ωστόσο', 'Επιπλέον', 'Δηλαδή'],
      en: ['Αντίθετα (on the contrary)', 'Ωστόσο (however)', 'Επιπλέον (moreover)', 'Δηλαδή (that is)'],
    },
    correct: 2,
    explanation: {
      el: 'Το «επιπλέον» προσθέτει κάτι ακόμη στο ίδιο πνεύμα: ένα δεύτερο επιχείρημα υπέρ του ποδηλάτου. Το «αντίθετα» και το «ωστόσο» θα έφερναν αντίθετη ιδέα.',
      en: '«Επιπλέον» (moreover) adds one more thing in the same direction: a second argument for the bicycle. «Αντίθετα» and «ωστόσο» would introduce an opposite idea.',
    },
  },
  {
    q: {
      el: 'Διάβασε: «Η θάλασσα ήταν πολύ κρύα. Ωστόσο, ο Νίκος μπήκε και κολύμπησε.» Τι δείχνει η λέξη «ωστόσο»;',
      en: 'Read: «The sea was very cold. Ωστόσο (however), Nikos went in and swam.» What does the word «ωστόσο» show?',
    },
    options: {
      el: ['Την αιτία', 'Την αντίθεση', 'Τον χρόνο', 'Το αποτέλεσμα'],
      en: ['The cause', 'The contrast', 'The time', 'The result'],
    },
    correct: 1,
    explanation: {
      el: 'Το «ωστόσο» σημαίνει «όμως, παρ\' όλα αυτά». Δείχνει αντίθεση: η θάλασσα ήταν κρύα, και παρ\' όλα αυτά ο Νίκος κολύμπησε.',
      en: '«Ωστόσο» means «however, in spite of that». It shows contrast: the sea was cold, and in spite of that Nikos swam.',
    },
  },
];
