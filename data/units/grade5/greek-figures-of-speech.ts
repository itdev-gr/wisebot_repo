/**
 * Ε' Δημοτικού · Γλώσσα · Σχήματα λόγου
 * =====================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a child of 10–11. Ordered from easiest to hardest:
 *   1–4   literal vs figurative meaning: «χρυσά χέρια», the verb «καίει», the adjective «βαρύς», the rule
 *   5–8   simile (παρομοίωση) with «σαν»: spotting it, the key word, what is compared, completing one
 *   9–11  metaphor (μεταφορά): spotting it, simile vs metaphor, what «είναι ένας άγγελος» means
 *   12–14 personification (προσωποποίηση): spotting it, the definition, choosing the verb
 *   15–16 hyperbole (υπερβολή): spotting it, what «πεθαίνω της πείνας» really means
 *   17–18 everyday expressions: «πετάει από τη χαρά του», «έχει μεγάλη καρδιά»
 */
import type { QuizQuestion } from '../../../types';

export const GRADE5_GREEK_FIGURES_OF_SPEECH: QuizQuestion[] = [
  // ── 1–4: literal vs figurative meaning ────────────────────────────────────
  {
    q: { el: '«Ο παππούς έχει χρυσά χέρια.» Τι σημαίνει αυτή η έκφραση;', en: '«Ο παππούς έχει χρυσά χέρια.» (Grandpa has golden hands.) What does this expression mean?' },
    options: { el: ['Τα χέρια του είναι φτιαγμένα από χρυσό.', 'Είναι πολύ επιδέξιος και φτιάχνει τα πάντα.', 'Φοράει χρυσά δαχτυλίδια.', 'Είναι πολύ πλούσιος.'], en: ['His hands are made of gold.', 'He is very skilful and can make anything.', 'He wears gold rings.', 'He is very rich.'] },
    correct: 1,
    explanation: {
      el: 'Η λέξη «χρυσά» δεν είναι κυριολεκτική: σημαίνει «πολύτιμα, ικανά». Όταν μια λέξη σημαίνει κάτι άλλο από αυτό που λέει, έχει μεταφορική σημασία.',
      en: 'The word «χρυσά» (golden) is not literal: it means "precious, capable". When a word means something other than what it says, it has a figurative meaning.',
    },
  },
  {
    q: { el: 'Σε ποια πρόταση η λέξη «καίει» έχει κυριολεκτική σημασία;', en: 'In which sentence does the word «καίει» (burns) have its literal meaning?' },
    options: { el: ['Η αδικία τον καίει.', 'Με καίει η περιέργεια.', 'Η φωτιά καίει τα ξύλα στο τζάκι.', 'Τον καίει η επιθυμία να νικήσει.'], en: ['Η αδικία τον καίει. (Injustice burns him.)', 'Με καίει η περιέργεια. (Curiosity is burning me.)', 'Η φωτιά καίει τα ξύλα στο τζάκι. (The fire burns the logs in the fireplace.)', 'Τον καίει η επιθυμία να νικήσει. (The desire to win burns him.)'] },
    correct: 2,
    explanation: {
      el: 'Μόνο η φωτιά καίει στ\' αλήθεια. Η αδικία, η περιέργεια και η επιθυμία «καίνε» μεταφορικά — μας ενοχλούν ή μας βασανίζουν σαν φωτιά.',
      en: 'Only fire really burns. Injustice, curiosity and desire "burn" figuratively — they bother or torment us like a fire would.',
    },
  },
  {
    q: { el: 'Σε ποια πρόταση η λέξη «βαρύς» έχει μεταφορική σημασία;', en: 'In which sentence does the word «βαρύς» (heavy) have a figurative meaning?' },
    options: { el: ['Η τσάντα μου είναι πολύ βαριά.', 'Το κιβώτιο ήταν βαρύ και δεν το σήκωσα.', 'Ο δάσκαλος μάς είπε βαριά λόγια.', 'Ο μπαμπάς κουβάλησε ένα βαρύ κουτί.'], en: ['Η τσάντα μου είναι πολύ βαριά. (My bag is very heavy.)', 'Το κιβώτιο ήταν βαρύ και δεν το σήκωσα. (The crate was heavy and I could not lift it.)', 'Ο δάσκαλος μάς είπε βαριά λόγια. (The teacher said heavy words to us.)', 'Ο μπαμπάς κουβάλησε ένα βαρύ κουτί. (Dad carried a heavy box.)'] },
    correct: 2,
    explanation: {
      el: 'Τα λόγια δεν ζυγίζουν! «Βαριά λόγια» σημαίνει αυστηρά, σοβαρά λόγια — μεταφορική σημασία. Η τσάντα, το κιβώτιο και το κουτί είναι βαριά κυριολεκτικά.',
      en: 'Words have no weight! «Βαριά λόγια» means harsh, serious words — a figurative meaning. The bag, the crate and the box are literally heavy.',
    },
  },
  {
    q: { el: 'Πότε λέμε ότι μια λέξη χρησιμοποιείται με μεταφορική σημασία;', en: 'When do we say a word is used with a figurative meaning?' },
    options: { el: ['Όταν σημαίνει ακριβώς αυτό που λέει', 'Όταν είναι ξένη λέξη', 'Όταν γράφεται με κεφαλαία', 'Όταν χρησιμοποιείται με άλλη σημασία από την αρχική της, για να δείξει μια ομοιότητα'], en: ['When it means exactly what it says', 'When it is a foreign word', 'When it is written in capitals', 'When it is used with a meaning other than its original one, to show a likeness'] },
    correct: 3,
    explanation: {
      el: 'Κυριολεξία: «το ποτήρι είναι γεμάτο νερό». Μεταφορά: «η καρδιά του είναι γεμάτη χαρά» — η καρδιά δεν γεμίζει στ\' αλήθεια, αλλά μοιάζει με γεμάτο ποτήρι.',
      en: 'Literal: «το ποτήρι είναι γεμάτο νερό» (the glass is full of water). Figurative: «η καρδιά του είναι γεμάτη χαρά» (his heart is full of joy) — the heart does not really fill up, but it is like a full glass.',
    },
  },

  // ── 5–8: simile ───────────────────────────────────────────────────────────
  {
    q: { el: 'Ποια πρόταση περιέχει παρομοίωση;', en: 'Which sentence contains a simile (παρομοίωση)?' },
    options: { el: ['Το χιόνι σκέπασε το χωριό.', 'Τα μάγουλά της ήταν κόκκινα σαν μήλα.', 'Η θάλασσα ήταν ήρεμη το πρωί.', 'Ο Νίκος έτρεξε πολύ γρήγορα.'], en: ['Το χιόνι σκέπασε το χωριό. (The snow covered the village.)', 'Τα μάγουλά της ήταν κόκκινα σαν μήλα. (Her cheeks were red like apples.)', 'Η θάλασσα ήταν ήρεμη το πρωί. (The sea was calm in the morning.)', 'Ο Νίκος έτρεξε πολύ γρήγορα. (Nikos ran very fast.)'] },
    correct: 1,
    explanation: {
      el: 'Η παρομοίωση συγκρίνει δύο πράγματα που μοιάζουν, συνήθως με τη λέξη «σαν»: τα μάγουλα είναι κόκκινα ΣΑΝ μήλα.',
      en: 'A simile compares two things that are alike, usually with the word «σαν» (like): the cheeks are red LIKE apples.',
    },
  },
  {
    q: { el: 'Με ποια λέξη γίνεται συνήθως η παρομοίωση;', en: 'Which word do we usually use to make a simile?' },
    options: { el: ['σαν', 'και', 'αλλά', 'όταν'], en: ['σαν (like / as)', 'και (and)', 'αλλά (but)', 'όταν (when)'] },
    correct: 0,
    explanation: {
      el: 'Το «σαν» (ή το «όπως») είναι το σήμα της παρομοίωσης: «γρήγορος σαν αστραπή», «γλυκός όπως το μέλι».',
      en: '«σαν» (or «όπως») is the sign of a simile: «γρήγορος σαν αστραπή» (fast as lightning), «γλυκός όπως το μέλι» (sweet as honey).',
    },
  },
  {
    q: { el: '«Ο Γιάννης είναι δυνατός σαν ταύρος.» Ποιο χαρακτηριστικό μοιράζονται ο Γιάννης και ο ταύρος στην παρομοίωση;', en: '«Ο Γιάννης είναι δυνατός σαν ταύρος.» (Giannis is as strong as a bull.) Which feature do Giannis and the bull share in the simile?' },
    options: { el: ['το χρώμα', 'την ταχύτητα', 'το μέγεθος', 'τη δύναμη'], en: ['their colour', 'their speed', 'their size', 'their strength'] },
    correct: 3,
    explanation: {
      el: 'Η παρομοίωση διαλέγει ΕΝΑ κοινό χαρακτηριστικό: εδώ τη δύναμη. Δεν λέμε ότι ο Γιάννης έχει κέρατα!',
      en: 'A simile picks ONE shared feature: here it is strength. We are not saying Giannis has horns!',
    },
  },
  {
    q: { el: 'Συμπλήρωσε την παρομοίωση: «Το νερό της λίμνης ήταν καθαρό σαν ___.»', en: 'Complete the simile: «Το νερό της λίμνης ήταν καθαρό σαν ___.» (The water of the lake was as clear as ___.)' },
    options: { el: ['πέτρα', 'κρύσταλλο', 'λάσπη', 'βράχος'], en: ['πέτρα (stone)', 'κρύσταλλο (crystal)', 'λάσπη (mud)', 'βράχος (rock)'] },
    correct: 1,
    explanation: {
      el: 'Για να πετύχει η παρομοίωση, το δεύτερο πράγμα πρέπει να έχει στ\' αλήθεια το χαρακτηριστικό: το κρύσταλλο είναι διάφανο και καθαρό. Η λάσπη είναι το αντίθετο!',
      en: 'For a simile to work, the second thing must really have the feature: crystal is transparent and clear. Mud is the opposite!',
    },
  },

  // ── 9–11: metaphor ────────────────────────────────────────────────────────
  {
    q: { el: 'Ποια πρόταση περιέχει μεταφορά;', en: 'Which sentence contains a metaphor (μεταφορά)?' },
    options: { el: ['Ο Πέτρος είναι ψηλός σαν κυπαρίσσι.', 'Ο Πέτρος είναι πολύ ψηλός.', 'Ο Πέτρος φύτεψε ένα κυπαρίσσι.', 'Ο Πέτρος είναι ένα κυπαρίσσι.'], en: ['Ο Πέτρος είναι ψηλός σαν κυπαρίσσι. (Petros is as tall as a cypress.)', 'Ο Πέτρος είναι πολύ ψηλός. (Petros is very tall.)', 'Ο Πέτρος φύτεψε ένα κυπαρίσσι. (Petros planted a cypress.)', 'Ο Πέτρος είναι ένα κυπαρίσσι. (Petros is a cypress.)'] },
    correct: 3,
    explanation: {
      el: 'Στη μεταφορά δεν λέμε «μοιάζει με», λέμε ότι ΕΙΝΑΙ: «ο Πέτρος είναι ένα κυπαρίσσι» (δηλαδή ψηλός και λεπτός). Με το «σαν» θα ήταν παρομοίωση.',
      en: 'In a metaphor we do not say "is like", we say it IS: «ο Πέτρος είναι ένα κυπαρίσσι» (meaning tall and slim). With «σαν» it would be a simile.',
    },
  },
  {
    q: { el: 'Ποια είναι η διαφορά ανάμεσα στην παρομοίωση και τη μεταφορά;', en: 'What is the difference between a simile and a metaphor?' },
    options: { el: ['Η μεταφορά χρησιμοποιεί το «σαν», η παρομοίωση όχι', 'Δεν έχουν καμία διαφορά', 'Η παρομοίωση χρησιμοποιεί το «σαν», ενώ η μεταφορά όχι', 'Η μεταφορά χρησιμοποιείται μόνο στα ποιήματα'], en: ['The metaphor uses «σαν», the simile does not', 'There is no difference', 'The simile uses «σαν», while the metaphor does not', 'The metaphor is used only in poems'] },
    correct: 2,
    explanation: {
      el: 'Παρομοίωση: «τα μάτια της λάμπουν σαν αστέρια». Μεταφορά: «τα μάτια της είναι αστέρια». Και οι δύο δείχνουν ομοιότητα, αλλά η μεταφορά τη λέει πιο τολμηρά, χωρίς «σαν».',
      en: 'Simile: «τα μάτια της λάμπουν σαν αστέρια» (her eyes shine like stars). Metaphor: «τα μάτια της είναι αστέρια» (her eyes are stars). Both show a likeness, but the metaphor says it more boldly, without «σαν».',
    },
  },
  {
    q: { el: '«Η Ελένη είναι ένας άγγελος.» Τι θέλει να πει αυτός που το λέει;', en: '«Η Ελένη είναι ένας άγγελος.» (Eleni is an angel.) What does the speaker mean?' },
    options: { el: ['Η Ελένη έχει φτερά.', 'Η Ελένη είναι πολύ καλή και γλυκιά.', 'Η Ελένη ζει στον ουρανό.', 'Η Ελένη φοράει άσπρα ρούχα.'], en: ['Eleni has wings.', 'Eleni is very kind and sweet.', 'Eleni lives in the sky.', 'Eleni wears white clothes.'] },
    correct: 1,
    explanation: {
      el: 'Είναι μεταφορά: η Ελένη έχει την καλοσύνη που φανταζόμαστε ότι έχουν οι άγγελοι. Δεν εννοούμε τίποτα κυριολεκτικά!',
      en: 'It is a metaphor: Eleni has the kindness we imagine angels have. Nothing is meant literally!',
    },
  },

  // ── 12–14: personification ────────────────────────────────────────────────
  {
    q: { el: 'Ποια πρόταση περιέχει προσωποποίηση;', en: 'Which sentence contains personification (προσωποποίηση)?' },
    options: { el: ['Ο άνεμος φυσούσε δυνατά.', 'Ο άνεμος ήταν κρύος σαν πάγος.', 'Ο άνεμος έριξε ένα κλαδί.', 'Ο άνεμος τραγουδούσε ανάμεσα στα δέντρα.'], en: ['Ο άνεμος φυσούσε δυνατά. (The wind blew hard.)', 'Ο άνεμος ήταν κρύος σαν πάγος. (The wind was as cold as ice.)', 'Ο άνεμος έριξε ένα κλαδί. (The wind knocked down a branch.)', 'Ο άνεμος τραγουδούσε ανάμεσα στα δέντρα. (The wind was singing among the trees.)'] },
    correct: 3,
    explanation: {
      el: 'Το τραγούδι είναι κάτι που κάνουν οι άνθρωποι. Όταν δίνουμε σε πράγματα ή φαινόμενα ανθρώπινες ιδιότητες, κάνουμε προσωποποίηση. (Η δεύτερη πρόταση είναι παρομοίωση.)',
      en: 'Singing is something people do. When we give things or natural forces human qualities, we use personification. (The second sentence is a simile.)',
    },
  },
  {
    q: { el: 'Τι είναι η προσωποποίηση;', en: 'What is personification?' },
    options: { el: ['Όταν δίνουμε σε πράγματα, ζώα ή ιδέες ιδιότητες ανθρώπων', 'Όταν συγκρίνουμε δύο ανθρώπους μεταξύ τους', 'Όταν λέμε κάτι πολύ μεγαλύτερο απ\' ό,τι είναι στ\' αλήθεια', 'Όταν περιγράφουμε το πρόσωπο κάποιου'], en: ['When we give things, animals or ideas human qualities', 'When we compare two people with each other', 'When we say something is much bigger than it really is', 'When we describe someone\'s face'] },
    correct: 0,
    explanation: {
      el: '«Η θάλασσα θύμωσε», «το φεγγάρι χαμογελάει», «η πόλη κοιμάται»: η θάλασσα, το φεγγάρι και η πόλη κάνουν πράγματα που κάνουν μόνο οι άνθρωποι.',
      en: '«Η θάλασσα θύμωσε» (the sea got angry), «το φεγγάρι χαμογελάει» (the moon smiles), «η πόλη κοιμάται» (the city sleeps): the sea, the moon and the city do things only people do.',
    },
  },
  {
    q: { el: '«Το ρολόι ___ ότι ήρθε η ώρα.» Ποιο ρήμα κάνει την πρόταση προσωποποίηση;', en: '«Το ρολόι ___ ότι ήρθε η ώρα.» (The clock ___ that the time had come.) Which verb turns the sentence into personification?' },
    options: { el: ['έδειχνε', 'ψιθύρισε', 'είχε', 'χτύπησε'], en: ['έδειχνε (showed)', 'ψιθύρισε (whispered)', 'είχε (had)', 'χτύπησε (struck)'] },
    correct: 1,
    explanation: {
      el: 'Ένα ρολόι δείχνει και χτυπάει την ώρα — αυτό είναι κυριολεξία. Ψιθυρίζουν όμως μόνο οι άνθρωποι, άρα το «ψιθύρισε» δίνει στο ρολόι ανθρώπινη φωνή.',
      en: 'A clock shows and strikes the hour — that is literal. Only people whisper, so «ψιθύρισε» gives the clock a human voice.',
    },
  },

  // ── 15–16: hyperbole ──────────────────────────────────────────────────────
  {
    q: { el: 'Ποια πρόταση περιέχει υπερβολή;', en: 'Which sentence contains hyperbole (υπερβολή)?' },
    options: { el: ['Σε περίμενα χίλια χρόνια!', 'Σε περίμενα δέκα λεπτά.', 'Σε περίμενα στη στάση.', 'Σε περίμενα με υπομονή.'], en: ['Σε περίμενα χίλια χρόνια! (I waited for you a thousand years!)', 'Σε περίμενα δέκα λεπτά. (I waited for you ten minutes.)', 'Σε περίμενα στη στάση. (I waited for you at the bus stop.)', 'Σε περίμενα με υπομονή. (I waited for you patiently.)'] },
    correct: 0,
    explanation: {
      el: 'Κανείς δεν περιμένει χίλια χρόνια! Η υπερβολή μεγαλώνει πολύ κάτι για να δείξει πόσο έντονο ήταν — εδώ, πόσο πολύ φάνηκε η αναμονή.',
      en: 'Nobody waits a thousand years! Hyperbole exaggerates something to show how intense it was — here, how long the wait felt.',
    },
  },
  {
    q: { el: '«Πεθαίνω της πείνας!» Τι εννοεί στ\' αλήθεια αυτός που το λέει;', en: '«Πεθαίνω της πείνας!» (I am dying of hunger!) What does the speaker really mean?' },
    options: { el: ['Ότι κινδυνεύει πραγματικά', 'Ότι δεν πεινάει καθόλου', 'Ότι πεινάει πάρα πολύ', 'Ότι θέλει να κοιμηθεί'], en: ['That they are really in danger', 'That they are not hungry at all', 'That they are extremely hungry', 'That they want to sleep'] },
    correct: 2,
    explanation: {
      el: 'Είναι υπερβολή που λέμε κάθε μέρα: «πεθαίνω της πείνας», «σκάω από τη ζέστη», «έχω έναν τόνο διάβασμα». Σημαίνει απλώς «πάρα πολύ».',
      en: 'It is an everyday hyperbole: «πεθαίνω της πείνας» (dying of hunger), «σκάω από τη ζέστη» (bursting from the heat), «έχω έναν τόνο διάβασμα» (I have a ton of homework). It just means "very much".',
    },
  },

  // ── 17–18: what the expression means ──────────────────────────────────────
  {
    q: { el: '«Ο Κώστας πετάει από τη χαρά του.» Τι σημαίνει η έκφραση;', en: '«Ο Κώστας πετάει από τη χαρά του.» (Kostas is flying with joy.) What does the expression mean?' },
    options: { el: ['Είναι πάρα πολύ χαρούμενος.', 'Έχει φτερά και πετάει.', 'Ταξιδεύει με αεροπλάνο.', 'Πηδάει πολύ ψηλά.'], en: ['He is extremely happy.', 'He has wings and flies.', 'He is travelling by plane.', 'He jumps very high.'] },
    correct: 0,
    explanation: {
      el: 'Η χαρά μάς κάνει να νιώθουμε ελαφριοί, σαν να πετάμε. Η έκφραση είναι μεταφορική: ο Κώστας έχει τα πόδια του στη γη, αλλά η καρδιά του «πετάει».',
      en: 'Joy makes us feel light, as if we were flying. The expression is figurative: Kostas has his feet on the ground, but his heart is "flying".',
    },
  },
  {
    q: { el: '«Ο Νίκος έχει μεγάλη καρδιά.» Τι σημαίνει η έκφραση;', en: '«Ο Νίκος έχει μεγάλη καρδιά.» (Nikos has a big heart.) What does the expression mean?' },
    options: { el: ['Η καρδιά του είναι μεγαλύτερη από των άλλων.', 'Είναι πολύ ψηλός.', 'Είναι πολύ καλός και γενναιόδωρος.', 'Είναι σκληρός με τους άλλους.'], en: ['His heart is bigger than other people\'s.', 'He is very tall.', 'He is very kind and generous.', 'He is hard on other people.'] },
    correct: 2,
    explanation: {
      el: 'Στις εκφράσεις η καρδιά είναι το «σπίτι» των συναισθημάτων. Μεγάλη καρδιά = χωράει πολλή αγάπη για τους άλλους. (Το αντίθετο: «καρδιά από πέτρα».)',
      en: 'In expressions the heart is the "home" of feelings. A big heart = room for lots of love for others. (The opposite: «καρδιά από πέτρα», a heart of stone.)',
    },
  },
];
