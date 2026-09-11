/**
 * WiseBot World — Athens.
 *
 * Eighteen places, three of them museums with an interior. Written for a six- to
 * twelve-year-old, which is a constraint on the writing and not on the truth: real
 * places have wars and graves in them, and those are told plainly and briefly rather
 * than dressed up or left out.
 *
 * Every coordinate in this file is copied from `data/world/coords/athens.json`, which
 * `scripts/world/resolve-coords.mjs` produced from Wikidata and cross-checked against
 * OpenStreetMap and Wikipedia. Nothing here was typed by hand, and nothing graded `D`
 * is present: the Hellenic Children's Museum and the hill-wide Lycabettus item both
 * graded D in the first pass and were replaced, for the reasons written into
 * `scripts/world/seeds/athens.json`.
 *
 * `el` and `en` are complete. `de`, `fr`, `es` and `it` land in the second pass.
 */

import type { Place, Trail } from '../types';

export const places: Place[] = [
  // ------------------------------------------------------------------ the rock
  {
    id: 'athens-acropolis',
    cityId: 'athens',
    emoji: '🪨',
    category: 'landmark',
    difficulty: 2,

    name: { el: 'Ακρόπολη', en: 'The Acropolis' },
    tagline: {
      el: 'Ο βράχος που κρατάει την πόλη εδώ και τρεις χιλιάδες χρόνια',
      en: 'The rock that has held the city for three thousand years',
    },
    story: {
      el:
        'Η Ακρόπολη είναι ένας βράχος 156 μέτρα πάνω από τη θάλασσα, με κορυφή σχεδόν ' +
        'επίπεδη. Οι πρώτοι άνθρωποι ανέβηκαν εκεί πριν από περισσότερα από τρεις χιλιάδες ' +
        'χρόνια, και δεν το έκαναν για τη θέα. Ο βράχος φυλαγόταν εύκολα, είχε δική του ' +
        'πηγή νερού, και από ψηλά έβλεπες όποιον ερχόταν από πολύ μακριά. Αργότερα οι ' +
        'Αθηναίοι σταμάτησαν να μένουν εκεί και άφησαν ολόκληρο τον βράχο στη θεά Αθηνά. ' +
        'Το 480 π.Χ. οι Πέρσες έκαψαν ό,τι υπήρχε πάνω του. Οι Αθηναίοι δεν πέταξαν τα ' +
        'σπασμένα αγάλματα: τα έθαψαν προσεκτικά μέσα στον ίδιο τον βράχο και ξαναέχτισαν ' +
        'από την αρχή. Χάρη σε αυτό, οι αρχαιολόγοι τα βρήκαν δυόμισι χιλιάδες χρόνια ' +
        'αργότερα, με λίγο από το χρώμα τους ακόμα πάνω. Σήμερα η Ακρόπολη είναι ένα ' +
        'εργοτάξιο που δεν κλείνει ποτέ: γερανοί ανεβάζουν μάρμαρο από την Πεντέλη, το ' +
        'ίδιο βουνό που το έδωσε και την πρώτη φορά.',
      en:
        'The Acropolis is a rock 156 metres above the sea with an almost flat top. People ' +
        'first climbed up to live there more than three thousand years ago, and they did ' +
        'not do it for the view. The rock was easy to defend, it had a spring of its own, ' +
        'and from up there you could see anyone coming from a long way off. Later the ' +
        'Athenians stopped living on it and gave the whole rock to the goddess Athena. In ' +
        '480 BC a Persian army burned everything standing on it. The Athenians did not ' +
        'throw the broken statues away: they buried them carefully inside the rock itself ' +
        'and started building again. Because of that, archaeologists found them two and a ' +
        'half thousand years later with some of their paint still on. Today the Acropolis ' +
        'is a building site that never closes, with cranes lifting marble from Mount ' +
        'Penteli, the same mountain that supplied it the first time.',
    },
    facts: [
      {
        el: 'Ο βράχος φτάνει τα 156 μέτρα πάνω από την επιφάνεια της θάλασσας.',
        en: 'The rock stands 156 metres above sea level.',
      },
      {
        el: 'Η αναστήλωση δουλεύει συνέχεια από το 1975 και δεν έχει τελειώσει ακόμα.',
        en: 'The restoration has been running non-stop since 1975 and is not finished.',
      },
      {
        el: 'Είναι Μνημείο Παγκόσμιας Κληρονομιάς της UNESCO από το 1987.',
        en: 'It has been a UNESCO World Heritage Site since 1987.',
      },
    ],
    location: {
      lat: 37.97167,
      lng: 23.72611,
      anchor: 'area',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q131013', deltaM: 0 },
        { kind: 'osm', ref: 'relation/4423249', deltaM: 28 },
        { kind: 'wikipedia', ref: 'Acropolis of Athens', deltaM: 0 },
      ],
      verifiedAt: '2026-09-10',
    },
    question: {
      q: {
        el: 'Γιατί διάλεξαν οι πρώτοι Αθηναίοι αυτόν τον βράχο για να ζήσουν πάνω του;',
        en: 'Why did the first Athenians choose this rock to live on?',
      },
      answers: [
        {
          el: 'Γιατί φυλαγόταν εύκολα και είχε δική του πηγή νερού',
          en: 'Because it was easy to defend and had a spring of its own',
        },
        {
          el: 'Γιατί ήταν το μόνο ίσιο έδαφος σε όλη την Αττική',
          en: 'Because it was the only flat ground in the whole of Attica',
        },
        {
          el: 'Γιατί η θάλασσα έφτανε τότε ως τους πρόποδές του',
          en: 'Because the sea reached the foot of it back then',
        },
        {
          el: 'Γιατί το μάρμαρο ήταν ήδη εκεί πάνω, έτοιμο για χτίσιμο',
          en: 'Because the marble was already up there, ready to build with',
        },
      ],
      explanation: {
        el:
          'Ένα κάστρο θέλει δύο πράγματα: ύψος και νερό. Ο βράχος τα είχε και τα δύο, γι’ ' +
          'αυτό οι άνθρωποι ανέβηκαν πολύ πριν χτιστεί ο πρώτος ναός.',
        en:
          'A stronghold needs two things: height and water. The rock had both, which is why ' +
          'people moved up there long before the first temple was built.',
      },
    },
  },

  // ------------------------------------------------------------------ parthenon
  {
    id: 'athens-parthenon',
    cityId: 'athens',
    emoji: '🏛️',
    category: 'landmark',
    difficulty: 2,

    name: { el: 'Παρθενώνας', en: 'The Parthenon' },
    tagline: {
      el: 'Ένας ναός χωρίς ούτε μία εντελώς ίσια γραμμή',
      en: 'A temple with almost no truly straight line in it',
    },
    story: {
      el:
        'Ο Παρθενώνας χτίστηκε σε εννιά μόνο χρόνια, από το 447 ως το 438 π.Χ., και τα ' +
        'γλυπτά του τελείωσαν έξι χρόνια αργότερα. Ήταν το σπίτι ενός τεράστιου αγάλματος ' +
        'της Αθηνάς, φτιαγμένου από ξύλο, χρυσάφι και ελεφαντόδοντο, που δεν σώζεται. Το ' +
        'παράξενο με αυτόν τον ναό είναι ότι οι μάστορές του απέφυγαν τις ίσιες γραμμές ' +
        'επίτηδες. Οι κολόνες φουσκώνουν λίγο στη μέση και γέρνουν ελάχιστα προς τα μέσα. ' +
        'Το δάπεδο ανεβαίνει σαν πολύ απαλός λόφος. Αν τα έκαναν όλα τέλεια ίσια, το μάτι ' +
        'μας θα τα έβλεπε κοιλιασμένα· έτσι όπως είναι, μας φαίνονται τέλεια. Ο ναός άλλαξε ' +
        'δουλειές πολλές φορές: έγινε εκκλησία, έγινε τζαμί. Το 1687, σε έναν πόλεμο, ένα ' +
        'βλήμα βρήκε το μπαρούτι που φυλαγόταν μέσα του και ο Παρθενώνας άνοιξε στη μέση. ' +
        'Ό,τι βλέπεις σήμερα όρθιο, στάθηκε όρθιο μετά από αυτό.',
      en:
        'The Parthenon went up in just nine years, from 447 to 438 BC, and its sculptures ' +
        'were finished six years after that. It was the house of a huge statue of Athena ' +
        'made of wood, gold and ivory, which no longer exists. The strange thing about this ' +
        'temple is that its builders avoided straight lines on purpose. The columns swell ' +
        'slightly in the middle and lean a fraction inwards. The floor rises like a very ' +
        'gentle hill. If everything had been built perfectly straight, our eyes would read ' +
        'it as sagging; built like this, it looks perfect to us. The building changed jobs ' +
        'many times: it became a church, then a mosque. In 1687, during a war, a shell hit ' +
        'gunpowder being stored inside and the Parthenon was blown open. Everything you see ' +
        'standing today is what stayed standing after that.',
    },
    facts: [
      {
        el: 'Έχει 46 εξωτερικές κολόνες, οκτώ στις κοντές πλευρές και δεκαεπτά στις μακριές.',
        en: 'It has 46 outer columns: eight on each short side and seventeen on each long one.',
      },
      {
        el: 'Οι κολόνες φουσκώνουν λίγο στη μέση, για να φαίνονται απόλυτα ίσιες.',
        en: 'The columns bulge slightly in the middle so that they look perfectly straight.',
      },
      {
        el: 'Το μάρμαρό του ήρθε από την Πεντέλη, περίπου 16 χιλιόμετρα μακριά.',
        en: 'Its marble came from Mount Penteli, about 16 kilometres away.',
      },
    ],
    location: {
      lat: 37.97153,
      lng: 23.7266,
      anchor: 'centroid',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q10288', deltaM: 0 },
        { kind: 'osm', ref: 'way/910010406', deltaM: 3 },
        { kind: 'wikipedia', ref: 'Parthenon', deltaM: 3 },
      ],
      verifiedAt: '2026-09-10',
    },
    question: {
      q: {
        el: 'Τι έκαναν επίτηδες οι μάστορες στις κολόνες του Παρθενώνα;',
        en: 'What did the builders do to the Parthenon’s columns on purpose?',
      },
      answers: [
        {
          el: 'Τις φούσκωσαν λίγο στη μέση, για να φαίνονται ίσιες',
          en: 'They made them swell slightly in the middle, so they would look straight',
        },
        {
          el: 'Τις έκαναν όλες διαφορετικού ύψους, για να μοιάζουν με βουνό',
          en: 'They made them all different heights, to look like a mountain',
        },
        {
          el: 'Τις άφησαν κούφιες μέσα, για να ακούγεται η μουσική',
          en: 'They left them hollow inside, so music would echo',
        },
        {
          el: 'Τις έβαψαν μαύρες, για να μη ζεσταίνονται το καλοκαίρι',
          en: 'They painted them black, so they would not heat up in summer',
        },
      ],
      explanation: {
        el:
          'Το μάτι μας κοιλιάζει τις τέλεια ίσιες γραμμές. Οι αρχαίοι το ήξεραν και ' +
          '«διόρθωσαν» τον ναό πριν τον δει κανείς.',
        en:
          'Our eyes make perfectly straight lines look as if they sag. The ancient builders ' +
          'knew it and corrected the temple before anyone ever looked at it.',
      },
    },
  },

  // -------------------------------------------------------- temple of hephaestus
  {
    id: 'athens-temple-hephaestus',
    cityId: 'athens',
    emoji: '⚒️',
    category: 'history',
    difficulty: 2,

    name: { el: 'Ναός του Ηφαίστου', en: 'Temple of Hephaestus' },
    tagline: {
      el: 'Ο αρχαίος ναός που κράτησε τη στέγη του',
      en: 'The ancient temple that kept its roof',
    },
    story: {
      el:
        'Πάνω από την Αρχαία Αγορά στέκεται ο πιο καλοδιατηρημένος αρχαίος ελληνικός ναός ' +
        'που υπάρχει. Χτίστηκε γύρω στο 449 π.Χ., λίγο πριν τον Παρθενώνα, για τον Ήφαιστο, ' +
        'τον θεό της φωτιάς και των σιδεράδων, και για την Αθηνά Εργάνη, τη θεά των ' +
        'τεχνιτών. Δεν διάλεξαν τυχαία το σημείο: όλη η γειτονιά από κάτω ήταν γεμάτη ' +
        'εργαστήρια που δούλευαν το μέταλλο και τον πηλό. Οι αρχαιολόγοι βρήκαν στο χώμα ' +
        'σκουριά, καρφιά και κομμάτια καλουπιών. Ο ναός σώθηκε επειδή δεν έμεινε ποτέ ' +
        'άδειος: για περίπου χίλια τετρακόσια χρόνια ήταν εκκλησία του Αγίου Γεωργίου. Μια ' +
        'εκκλησία που λειτουργεί χρειάζεται στέγη, και η στέγη κρατάει τη βροχή έξω από ' +
        'τους τοίχους. Έτσι, ενώ γύρω του όλα γκρεμίζονταν, αυτός στεκόταν ολόκληρος. ' +
        'Σταμάτησε να λειτουργεί ως εκκλησία το 1834, όταν η Αθήνα έγινε πρωτεύουσα.',
      en:
        'Above the Ancient Agora stands the best preserved ancient Greek temple anywhere. ' +
        'It was built around 449 BC, just before the Parthenon, for Hephaestus, god of fire ' +
        'and blacksmiths, and for Athena Ergani, goddess of craftspeople. The spot was not ' +
        'chosen at random: the whole neighbourhood below it was full of workshops working ' +
        'metal and clay, and archaeologists digging there found rust, nails and pieces of ' +
        'moulds in the soil. The temple survived because it was never left empty. For about ' +
        'fourteen hundred years it was the church of Saint George. A working church needs a ' +
        'roof, and a roof keeps rain off the walls, so while everything around it fell down, ' +
        'this one stayed whole. It stopped being used as a church in 1834, when Athens ' +
        'became the capital of Greece.',
    },
    facts: [
      {
        el: 'Είναι ο πιο καλοδιατηρημένος αρχαίος ελληνικός ναός στον κόσμο.',
        en: 'It is the best preserved ancient Greek temple in the world.',
      },
      {
        el: 'Έχει 34 κολόνες, και οι περισσότερες στέκονται από την πρώτη μέρα.',
        en: 'It has 34 columns, most of them standing since the day it was finished.',
      },
      {
        el: 'Λειτούργησε ως εκκλησία περίπου 1.400 χρόνια, μέχρι το 1834.',
        en: 'It served as a church for about 1,400 years, until 1834.',
      },
    ],
    location: {
      lat: 37.97562,
      lng: 23.72139,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q756824', deltaM: 0 },
        { kind: 'osm', ref: 'way/27917370', deltaM: 2 },
      ],
      verifiedAt: '2026-09-10',
      note: 'Wikipedia carries no coordinate for this article, so the grade is B on two sources.',
    },
    question: {
      q: {
        el: 'Γιατί σώθηκε αυτός ο ναός τόσο καλύτερα από τους άλλους;',
        en: 'Why did this temple survive so much better than the others?',
      },
      answers: [
        {
          el: 'Επειδή έγινε εκκλησία και κράτησε τη στέγη του',
          en: 'Because it became a church and kept its roof',
        },
        {
          el: 'Επειδή ήταν χτισμένος από πέτρα και όχι από μάρμαρο',
          en: 'Because it was built from stone instead of marble',
        },
        {
          el: 'Επειδή τον έθαψε το χώμα και τον ξέθαψαν πρόσφατα',
          en: 'Because soil buried it and it was only dug out recently',
        },
        {
          el: 'Επειδή τον ξαναέχτισαν ολόκληρο τον περασμένο αιώνα',
          en: 'Because it was rebuilt from scratch in the last century',
        },
      ],
      explanation: {
        el:
          'Ένα κτίριο που χρησιμοποιείται, επισκευάζεται. Η στέγη κράτησε τη βροχή έξω, και ' +
          'η βροχή είναι που ρίχνει τους τοίχους.',
        en:
          'A building that is used gets repaired. The roof kept the rain out, and rain is ' +
          'what brings walls down.',
      },
    },
  },

  // ---------------------------------------------------------------- ancient agora
  {
    id: 'athens-ancient-agora',
    cityId: 'athens',
    emoji: '🏺',
    category: 'history',
    difficulty: 3,

    name: { el: 'Αρχαία Αγορά', en: 'The Ancient Agora' },
    tagline: {
      el: 'Η πλατεία όπου η πόλη ψώνιζε, δίκαζε και ψήφιζε',
      en: 'The square where the city shopped, judged and voted',
    },
    story: {
      el:
        'Η Αγορά ήταν η πλατεία όπου γίνονταν όλα. Το πρωί πουλούσαν ψάρια και παπούτσια, ' +
        'το μεσημέρι δίκαζαν, και το απόγευμα κάποιος μιλούσε δυνατά για την πόλη. Εδώ ' +
        'δούλευε ένα μηχάνημα που δεν έχει καμία άλλη πόλη: το κληρωτήριο, μια μαρμάρινη ' +
        'πλάκα με σχισμές. Οι πολίτες έβαζαν μέσα την ταυτότητά τους, μια μπρούντζινη ' +
        'πινακίδα, και μια μηχανή με άσπρα και μαύρα βόλια αποφάσιζε ποιοι θα ήταν φέτος ' +
        'δικαστές. Δεν ψήφιζες για να διαλέξεις πρόσωπα· σε διάλεγε η τύχη, ώστε να μην ' +
        'μπορεί κανείς να αγοράσει τη θέση. Υπήρχε και ο αντίστροφος κανόνας: αν κάποιος ' +
        'γινόταν επικίνδυνα δυνατός, οι Αθηναίοι έγραφαν το όνομά του σε ένα σπασμένο ' +
        'κομμάτι αγγείου, το όστρακο, και όποιος μάζευε τα περισσότερα έφευγε από την πόλη ' +
        'για δέκα χρόνια. Οι αρχαιολόγοι έχουν βρει χιλιάδες τέτοια όστρακα, με τα ονόματα ' +
        'ακόμα χαραγμένα.',
      en:
        'The Agora was the square where everything happened. In the morning people sold fish ' +
        'and shoes there, at midday courts sat, and in the afternoon somebody stood up and ' +
        'argued about the city. It also held a machine no other city had: the kleroterion, a ' +
        'slab of marble cut with slots. Citizens dropped in their identity card, a small ' +
        'bronze plate, and a device loaded with white and black balls decided who would ' +
        'serve as a juror. You did not vote for a person; chance picked you, so that nobody ' +
        'could buy the job. There was an opposite rule too. If someone was becoming ' +
        'dangerously powerful, Athenians scratched his name onto a broken piece of pot, an ' +
        'ostrakon, and whoever collected the most had to leave the city for ten years. ' +
        'Archaeologists have found thousands of those pieces with the names still on them.',
    },
    facts: [
      {
        el: 'Το κληρωτήριο διάλεγε δικαστές με κλήρο, όχι με ψήφο.',
        en: 'The kleroterion picked jurors by lot rather than by vote.',
      },
      {
        el: 'Η λέξη «οστρακισμός» βγαίνει από το όστρακο, το σπασμένο κομμάτι αγγείου.',
        en: 'The word "ostracism" comes from the ostrakon, a broken piece of pottery.',
      },
      {
        el: 'Η Στοά του Αττάλου ξαναχτίστηκε το 1953-1956 και είναι σήμερα το μουσείο του χώρου.',
        en: 'The Stoa of Attalos was rebuilt in 1953-1956 and is now the site museum.',
      },
    ],
    location: {
      lat: 37.975,
      lng: 23.7225,
      anchor: 'area',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q395367', deltaM: 0 },
        { kind: 'osm', ref: 'relation/13139942', deltaM: 41 },
        { kind: 'wikipedia', ref: 'Ancient Agora of Athens', deltaM: 0 },
      ],
      verifiedAt: '2026-09-10',
      note: 'An area pin. The OSM boundary centre sits 41 m away, which is ordinary for a site this size.',
    },
    question: {
      q: {
        el: 'Πώς διάλεγαν οι Αθηναίοι πολλούς από τους δικαστές τους;',
        en: 'How did the Athenians choose many of their jurors?',
      },
      answers: [
        {
          el: 'Με κλήρο, σε μια μαρμάρινη μηχανή που λεγόταν κληρωτήριο',
          en: 'By lot, using a marble machine called a kleroterion',
        },
        {
          el: 'Με ψηφοφορία, σηκώνοντας ψηλά το χέρι στην πλατεία',
          en: 'By a vote, with everyone raising a hand in the square',
        },
        {
          el: 'Τους όριζε ο πιο πλούσιος πολίτης κάθε γειτονιάς',
          en: 'The richest citizen of each neighbourhood appointed them',
        },
        {
          el: 'Ήταν πάντα οι γιοι των προηγούμενων δικαστών',
          en: 'They were always the sons of the previous jurors',
        },
      ],
      explanation: {
        el:
          'Με κλήρο δεν μπορείς να αγοράσεις τη θέση ούτε να την κληρονομήσεις. Αυτή ήταν ' +
          'όλη η ιδέα.',
        en:
          'If it is decided by lot, the job cannot be bought and cannot be inherited. That ' +
          'was the whole idea.',
      },
    },
  },

  // ------------------------------------------------------------ tower of the winds
  {
    id: 'athens-tower-of-the-winds',
    cityId: 'athens',
    emoji: '🧭',
    category: 'science',
    difficulty: 2,

    name: { el: 'Αέρηδες', en: 'The Tower of the Winds' },
    tagline: {
      el: 'Ρολόι, πυξίδα και μετεωρολογικός σταθμός σε ένα κτίριο',
      en: 'A clock, a compass and a weather station in one building',
    },
    story: {
      el:
        'Οι Αέρηδες είναι ένας οκτάγωνος μαρμάρινος πύργος, φτιαγμένος πριν από περίπου δύο ' +
        'χιλιάδες χρόνια από τον αστρονόμο Ανδρόνικο. Κάθε μία από τις οκτώ πλευρές του ' +
        'κοιτάζει προς μια κατεύθυνση, και σε κάθε πλευρά είναι σκαλισμένος ένας άνεμος σαν ' +
        'άνθρωπος που πετάει: ο βοριάς κρατάει κοχύλι για να φυσάει, ο ζέφυρος σκορπίζει ' +
        'λουλούδια από την αγκαλιά του. Κάτω από κάθε ανάγλυφο υπήρχε ένα ηλιακό ρολόι. Ώσπου ' +
        'εδώ δεν υπάρχει τίποτα μαγικό: αν έχει ήλιο, η σκιά σου λέει την ώρα. Το έξυπνο ' +
        'είναι τι γινόταν όταν συννέφιαζε. Μέσα στον πύργο δούλευε ένα ρολόι νερού, που ' +
        'τροφοδοτούνταν από μια πηγή της Ακρόπολης: το νερό έσταζε με σταθερό ρυθμό και ' +
        'μετρούσε τις ώρες ακόμα και με βροχή, ακόμα και τη νύχτα. Στην κορυφή γύριζε ένας ' +
        'χάλκινος ανεμοδείκτης, για να ξέρεις και ποιος άνεμος φυσάει.',
      en:
        'The Tower of the Winds is an eight-sided marble tower built about two thousand ' +
        'years ago by an astronomer called Andronikos. Each of its eight sides faces one ' +
        'direction, and on every side a wind is carved as a flying man: the north wind holds ' +
        'a shell to blow through, the west wind scatters flowers from the fold of his cloak. ' +
        'Under each carving there was a sundial. So far there is nothing magic about it: if ' +
        'the sun is out, a shadow tells you the time. The clever part is what happened when ' +
        'clouds came over. Inside the tower a water clock ran, fed by a spring on the ' +
        'Acropolis. Water dripped at a steady rate and counted the hours through rain and ' +
        'through the night. On the roof a bronze weather vane turned, so you also knew which ' +
        'wind was blowing.',
    },
    facts: [
      {
        el: 'Έχει οκτώ πλευρές, μία για κάθε άνεμο, με τον άνεμο σκαλισμένο από πάνω.',
        en: 'It has eight sides, one for each wind, with that wind carved above it.',
      },
      {
        el: 'Θεωρείται ο αρχαιότερος μετεωρολογικός σταθμός που σώζεται.',
        en: 'It is considered the oldest weather station still standing.',
      },
      {
        el: 'Το εσωτερικό ρολόι δούλευε με νερό, όχι με ήλιο, και μετρούσε ώρες και τη νύχτα.',
        en: 'The clock inside ran on water, not sunlight, and counted the hours at night too.',
      },
    ],
    location: {
      lat: 37.97418,
      lng: 23.727,
      anchor: 'centroid',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q372717', deltaM: 0 },
        { kind: 'osm', ref: 'relation/11199493', deltaM: 3 },
        { kind: 'wikipedia', ref: 'Tower of the Winds', deltaM: 11 },
      ],
      verifiedAt: '2026-09-10',
    },
    question: {
      q: {
        el: 'Πώς έλεγε την ώρα ο πύργος όταν τα σύννεφα έκρυβαν τον ήλιο;',
        en: 'How did the tower tell the time when clouds hid the sun?',
      },
      answers: [
        {
          el: 'Με ένα ρολόι νερού που δούλευε στο εσωτερικό του',
          en: 'With a water clock running inside it',
        },
        {
          el: 'Με μια καμπάνα που χτυπούσε κάθε ώρα ένας φύλακας',
          en: 'With a bell that a guard rang every hour',
        },
        {
          el: 'Με ένα κερί που έκαιγε μία γραμμή την ώρα',
          en: 'With a candle that burned down one line every hour',
        },
        {
          el: 'Δεν έλεγε την ώρα με συννεφιά, μόνο τον άνεμο',
          en: 'It did not tell the time on cloudy days, only the wind',
        },
      ],
      explanation: {
        el:
          'Το νερό στάζει το ίδιο είτε έχει ήλιο είτε όχι. Γι’ αυτό το ρολόι νερού ήταν ' +
          'η εφεδρεία του ηλιακού ρολογιού.',
        en:
          'Water drips at the same rate whether the sun is out or not, which is exactly why ' +
          'the water clock was the sundial’s backup.',
      },
    },
  },

  // ----------------------------------------------------------------- olympieion
  {
    id: 'athens-olympieion',
    cityId: 'athens',
    emoji: '🏛️',
    category: 'landmark',
    difficulty: 2,

    name: { el: 'Ναός του Ολυμπίου Διός', en: 'Temple of Olympian Zeus' },
    tagline: {
      el: 'Ο ναός που άργησε 638 χρόνια να τελειώσει',
      en: 'The temple that took 638 years to finish',
    },
    story: {
      el:
        'Αυτός ο ναός κρατάει ένα ρεκόρ που κανείς δεν ζήλεψε ποτέ: άργησε περίπου 638 ' +
        'χρόνια να τελειώσει. Ξεκίνησε τον 6ο αιώνα π.Χ. και σταμάτησε όταν άλλαξε η ' +
        'εξουσία στην πόλη. Έμεινε μισοτελειωμένος τόσο πολύ, που κάποιοι αρχαίοι ' +
        'συγγραφείς τον χρησιμοποιούσαν σαν παράδειγμα ματαιοδοξίας. Τελικά τον αποτέλειωσε ' +
        'ο Ρωμαίος αυτοκράτορας Αδριανός το 131 μ.Χ., και μέσα έβαλε δύο τεράστια αγάλματα: ' +
        'ένα του Δία και ένα του εαυτού του. Είχε 104 κολόνες, ψηλές περίπου 17 μέτρα. ' +
        'Σήμερα στέκονται δεκαπέντε. Υπάρχει και μια δέκατη έκτη, πεσμένη: την έριξε μια ' +
        'θύελλα το 1852 και κανείς δεν τη σήκωσε ποτέ. Είναι το καλύτερο πράγμα να δεις ' +
        'εκεί, γιατί έπεσε σαν πύργος από τουβλάκια και τα κομμάτια της κύλησαν στη σειρά, ' +
        'σαν κομμένο ψωμί. Έτσι καταλαβαίνεις ότι μια κολόνα δεν ήταν ποτέ ένα κομμάτι.',
      en:
        'This temple holds a record nobody ever envied: it took about 638 years to finish. ' +
        'Work started in the 6th century BC and stopped when the city changed rulers. It ' +
        'stood half-built for so long that ancient writers used it as an example of ' +
        'over-ambition. It was finally completed by the Roman emperor Hadrian in AD 131, who ' +
        'put two enormous statues inside: one of Zeus and one of himself. It had 104 columns, ' +
        'each about 17 metres tall. Fifteen are standing today. There is a sixteenth on the ' +
        'ground: a storm blew it over in 1852 and nobody ever picked it up. It is the best ' +
        'thing there to look at, because it fell like a tower of bricks and its pieces rolled ' +
        'out in a line, like a sliced loaf. That is how you learn a column was never one ' +
        'single stone.',
    },
    facts: [
      {
        el: 'Από την πρώτη πέτρα ως την τελευταία πέρασαν περίπου 638 χρόνια.',
        en: 'About 638 years passed between the first stone and the last.',
      },
      {
        el: 'Είχε 104 κολόνες. Σήμερα στέκονται δεκαπέντε.',
        en: 'It had 104 columns. Fifteen are still standing.',
      },
      {
        el: 'Μια κολόνα έπεσε σε θύελλα το 1852 και έμεινε εκεί, κομμάτι κομμάτι.',
        en: 'One column blew down in a storm in 1852 and was left where it fell, piece by piece.',
      },
    ],
    location: {
      lat: 37.96937,
      lng: 23.73308,
      anchor: 'area',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q1123019', deltaM: 0 },
        { kind: 'osm', ref: 'way/63765671', deltaM: 1 },
        { kind: 'wikipedia', ref: 'Temple of Olympian Zeus, Athens', deltaM: 0 },
      ],
      verifiedAt: '2026-09-10',
    },
    question: {
      q: {
        el: 'Τι μαθαίνεις κοιτάζοντας την πεσμένη κολόνα;',
        en: 'What do you learn by looking at the fallen column?',
      },
      answers: [
        {
          el: 'Ότι κάθε κολόνα ήταν χτισμένη από πολλά κομμάτια, το ένα πάνω στο άλλο',
          en: 'That each column was built from many pieces stacked on top of each other',
        },
        {
          el: 'Ότι οι κολόνες ήταν κούφιες και μέσα κρύβονταν σκάλες',
          en: 'That the columns were hollow with stairs hidden inside',
        },
        {
          el: 'Ότι το μάρμαρο ήταν βαμμένο κόκκινο μέσα',
          en: 'That the marble was painted red on the inside',
        },
        {
          el: 'Ότι οι κολόνες ήταν φτιαγμένες από τσιμέντο',
          en: 'That the columns were made of concrete',
        },
      ],
      explanation: {
        el:
          'Κάθε κομμάτι λέγεται σφόνδυλος. Στοιβάζονταν σαν τεράστια νομίσματα και ' +
          'κλείδωναν μεταξύ τους στο κέντρο.',
        en:
          'Each piece is called a drum. They were stacked like giant coins and locked ' +
          'together through the middle.',
      },
    },
  },

  // ---------------------------------------------------------- panathenaic stadium
  {
    id: 'athens-panathenaic-stadium',
    cityId: 'athens',
    emoji: '🏟️',
    category: 'sport',
    difficulty: 1,

    name: { el: 'Παναθηναϊκό Στάδιο', en: 'The Panathenaic Stadium' },
    tagline: {
      el: 'Το μοναδικό στάδιο στον κόσμο που είναι όλο μάρμαρο',
      en: 'The only stadium in the world made entirely of marble',
    },
    story: {
      el:
        'Οι Αθηναίοι το λένε Καλλιμάρμαρο, που θα πει «ωραίο μάρμαρο», και το όνομα δεν ' +
        'είναι υπερβολή: τα καθίσματα, οι διάδρομοι, οι σκάλες, όλα είναι μάρμαρο. Είναι ' +
        'το μόνο στάδιο στον κόσμο φτιαγμένο εξ ολοκλήρου από αυτό. Στη θέση του υπήρχε ' +
        'στάδιο ήδη από το 330 π.Χ., για τους αγώνες των Παναθηναίων, και γύρω στο 144 μ.Χ. ' +
        'ο Ηρώδης ο Αττικός το ξανάχτισε στα μάρμαρα. Μετά ερήμωσε, γέμισε χώμα και ' +
        'ξεχάστηκε. Το ξέθαψαν τον 19ο αιώνα και το ξαναέφτιαξαν για τους πρώτους σύγχρονους ' +
        'Ολυμπιακούς Αγώνες του 1896. Χωράει περίπου πενήντα χιλιάδες θεατές. Έχει σχήμα ' +
        'πέταλο, και οι στροφές του είναι τόσο κλειστές που οι δρομείς του 1896 ' +
        'παραπονέθηκαν ότι έχαναν ταχύτητα σε κάθε γύρο. Εδώ τερμάτισε ο Σπύρος Λούης ' +
        'κερδίζοντας τον πρώτο σύγχρονο Μαραθώνιο, μπροστά σε ένα στάδιο που ούρλιαζε.',
      en:
        'Athenians call it Kallimarmaro, which means "beautiful marble", and the name is not ' +
        'an exaggeration: the seats, the walkways, the stairs are all marble. It is the only ' +
        'stadium in the world built entirely from it. A stadium stood on this spot as early ' +
        'as 330 BC for the Panathenaic games, and around AD 144 Herodes Atticus rebuilt it ' +
        'in marble. Then it emptied, filled with soil and was forgotten. It was dug out in ' +
        'the 19th century and rebuilt for the first modern Olympic Games in 1896. It holds ' +
        'about fifty thousand spectators. It is shaped like a horseshoe, and its bends are ' +
        'so tight that runners in 1896 complained they lost speed on every lap. This is ' +
        'where Spyridon Louis finished first in the first modern marathon, in front of a ' +
        'stadium that was screaming.',
    },
    facts: [
      {
        el: 'Είναι το μοναδικό στάδιο στον κόσμο χτισμένο εξ ολοκλήρου από μάρμαρο.',
        en: 'It is the only stadium in the world built entirely of marble.',
      },
      {
        el: 'Φιλοξένησε τους πρώτους σύγχρονους Ολυμπιακούς Αγώνες, το 1896.',
        en: 'It hosted the first modern Olympic Games, in 1896.',
      },
      {
        el: 'Χωράει περίπου 50.000 θεατές, καθισμένους πάνω σε μάρμαρο.',
        en: 'It seats about 50,000 people, all of them sitting on marble.',
      },
    ],
    location: {
      lat: 37.96833,
      lng: 23.74111,
      anchor: 'centroid',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q208811', deltaM: 0 },
        { kind: 'osm', ref: 'relation/19023844', deltaM: 13 },
        { kind: 'wikipedia', ref: 'Panathenaic Stadium', deltaM: 0 },
      ],
      verifiedAt: '2026-09-10',
      // The stadium's own site gives its address this way, and it is better than a
      // coordinate: the stored point is the middle of the horseshoe, about 127 m from
      // the gate, and a child who walks to it meets marble, not a door.
      findIt: {
        el: 'Η είσοδος είναι στη Λεωφόρο Βασιλέως Κωνσταντίνου, ακριβώς απέναντι από το άγαλμα του Δισκοβόλου.',
        en: 'The way in is on Vasileos Konstantinou Avenue, right across from the statue of the discus thrower.',
      },
    },
    question: {
      q: {
        el: 'Τι κάνει αυτό το στάδιο μοναδικό σε ολόκληρο τον κόσμο;',
        en: 'What makes this stadium unique in the entire world?',
      },
      answers: [
        {
          el: 'Είναι φτιαγμένο ολόκληρο από μάρμαρο',
          en: 'It is made entirely of marble',
        },
        {
          el: 'Είναι το μεγαλύτερο στάδιο που υπάρχει',
          en: 'It is the largest stadium there is',
        },
        {
          el: 'Έχει οροφή που ανοίγει και κλείνει',
          en: 'It has a roof that opens and closes',
        },
        {
          el: 'Είναι χτισμένο κάτω από την επιφάνεια του εδάφους',
          en: 'It is built entirely below ground level',
        },
      ],
      explanation: {
        el:
          'Άλλα στάδια έχουν μάρμαρο κάπου. Αυτό είναι όλο μάρμαρο, από την πρώτη σκάλα ως ' +
          'το τελευταίο κάθισμα.',
        en:
          'Other stadiums have marble somewhere. This one is marble everywhere, from the ' +
          'first step to the last seat.',
      },
    },
  },

  // ------------------------------------------------------------ acropolis museum
  {
    id: 'athens-acropolis-museum',
    cityId: 'athens',
    emoji: '🏺',
    category: 'museum',
    difficulty: 2,

    name: { el: 'Μουσείο Ακρόπολης', en: 'The Acropolis Museum' },
    tagline: {
      el: 'Ένα μουσείο με μια αρχαία γειτονιά κάτω από το πάτωμα',
      en: 'A museum with an ancient neighbourhood under the floor',
    },
    story: {
      el:
        'Όταν αποφάσισαν να χτίσουν αυτό το μουσείο, έσκαψαν πρώτα, όπως γίνεται πάντα στην ' +
        'Αθήνα. Βρήκαν μια ολόκληρη αρχαία γειτονιά: δρόμους, σπίτια, λουτρά, πηγάδια. ' +
        'Κανονικά αυτό σταματάει ένα έργο. Εδώ άλλαξαν τα σχέδια: το κτίριο στηρίχτηκε σε ' +
        'εκατό κολόνες που πατούν ανάμεσα στα αρχαία, και το πάτωμα έγινε γυαλί, ώστε να ' +
        'περπατάς από πάνω και να τα βλέπεις. Το μουσείο άνοιξε το 2009, σχεδιασμένο από ' +
        'τον Μπερνάρ Τσουμί. Ο τελευταίος όροφος είναι το πιο έξυπνο κομμάτι: είναι μια ' +
        'γυάλινη αίθουσα στραμμένη λοξά σε σχέση με το υπόλοιπο κτίριο, ακριβώς όσο χρειάζεται ' +
        'για να κοιτάζει κατάματα τον Παρθενώνα, και έχει τις ίδιες διαστάσεις με εκείνον. ' +
        'Έτσι τα γλυπτά στέκονται στην ίδια σειρά που στέκονταν πάνω στον ναό, με τον ναό ' +
        'να φαίνεται από το τζάμι, τετρακόσια μέτρα πιο πέρα.',
      en:
        'When they decided to build this museum they dug first, as you always must in ' +
        'Athens. They found a whole ancient neighbourhood: streets, houses, baths, wells. ' +
        'Normally that stops a building project. Here they changed the design instead. The ' +
        'museum stands on about a hundred columns that come down between the ruins, and the ' +
        'ground floor was made of glass so you walk over the excavation and look down into ' +
        'it. The museum opened in 2009 and was designed by Bernard Tschumi. The top floor is ' +
        'the cleverest part: a glass hall turned at an angle to the rest of the building, ' +
        'exactly enough to face the Parthenon square on, and built to the same size as it. ' +
        'The sculptures stand in the order they stood on the temple, with the temple itself ' +
        'visible through the glass, four hundred metres away.',
    },
    facts: [
      {
        el: 'Άνοιξε το 2009, πάνω από μια αρχαία γειτονιά που φαίνεται μέσα από γυάλινα πατώματα.',
        en: 'It opened in 2009 above an ancient neighbourhood visible through glass floors.',
      },
      {
        el: 'Η αίθουσα του Παρθενώνα είναι στραμμένη λοξά, για να κοιτάζει τον ίδιο τον ναό.',
        en: 'The Parthenon gallery is set at an angle so that it faces the temple itself.',
      },
      {
        el: 'Πέντε από τις έξι αυθεντικές Καρυάτιδες βρίσκονται εδώ.',
        en: 'Five of the six original Caryatids are here.',
      },
    ],
    location: {
      lat: 37.96842,
      lng: 23.72847,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q421084', deltaM: 0 },
        { kind: 'osm', ref: 'way/983921252', deltaM: 12 },
        { kind: 'wikipedia', ref: 'Acropolis Museum', deltaM: 78 },
      ],
      verifiedAt: '2026-09-10',
      note: 'Wikipedia’s point sits 78 m off, on the building rather than the entrance. The stored point is the entrance side.',
      // The door is on Dionysiou Areopagitou, so a child arriving from Makrygianni
      // walks the long way round and meets a wall.
      findIt: {
        el: 'Η είσοδος είναι στη Διονυσίου Αρεοπαγίτου, στην πλευρά που βλέπει την Ακρόπολη.',
        en: 'The way in is on Dionysiou Areopagitou, on the side that faces the Acropolis.',
      },
    },
    question: {
      q: {
        el: 'Τι έκαναν οι μηχανικοί όταν βρήκαν αρχαία σπίτια στη θέση του μουσείου;',
        en: 'What did the engineers do when they found ancient houses on the museum’s plot?',
      },
      answers: [
        {
          el: 'Σήκωσαν το μουσείο πάνω σε κολόνες και έβαλαν γυάλινο πάτωμα',
          en: 'They raised the museum on columns and put in a glass floor',
        },
        {
          el: 'Μετέφεραν τα αρχαία σπίτια σε άλλο οικόπεδο',
          en: 'They moved the ancient houses to a different plot',
        },
        {
          el: 'Σκέπασαν τα ευρήματα με τσιμέντο και συνέχισαν',
          en: 'They covered the finds in concrete and carried on',
        },
        {
          el: 'Έχτισαν το μουσείο αλλού, δύο χιλιόμετρα μακριά',
          en: 'They built the museum somewhere else, two kilometres away',
        },
      ],
      explanation: {
        el:
          'Το μουσείο πατάει σε περίπου εκατό κολόνες που περνούν ανάμεσα στα αρχαία, χωρίς ' +
          'να τα αγγίζουν.',
        en:
          'The museum rests on about a hundred columns that thread down between the ruins ' +
          'without touching them.',
      },
    },

    museum: {
      doorNote: {
        el: 'Κοίτα κάτω πριν κοιτάξεις ψηλά: το πάτωμα στην είσοδο είναι γυαλί και από κάτω υπάρχει πόλη.',
        en: 'Look down before you look up: the entrance floor is glass, and there is a city underneath it.',
      },
      rooms: [
        {
          id: 'athens-acropolis-museum-slopes',
          emoji: '🔎',
          name: { el: 'Η Αίθουσα των Κλιτύων', en: 'The Gallery of the Slopes' },
          intro: {
            el:
              'Η πρώτη αίθουσα ανηφορίζει, όπως ανηφορίζουν οι πλαγιές του βράχου. Εδώ δεν ' +
              'υπάρχουν θεοί σε μάρμαρο, αλλά πράγματα ανθρώπων: αγγεία από γάμους, δώρα ' +
              'ευχαριστίας από αρρώστους που έγιναν καλά, και κάτω από τα πόδια σου, μέσα ' +
              'από το γυαλί, η ίδια η γειτονιά που τα χρησιμοποιούσε.',
            en:
              'The first gallery slopes upwards, the way the sides of the rock do. There are ' +
              'no gods in marble here, only things that belonged to people: wedding vases, ' +
              'thank-you gifts from the sick who got well, and under your feet, through the ' +
              'glass, the neighbourhood that used them.',
          },
          exhibits: [
            {
              id: 'athens-acropolis-museum-glass-floor',
              name: { el: 'Το γυάλινο πάτωμα', en: 'The glass floor' },
              blurb: {
                el:
                  'Δεν είναι έκθεμα σε βιτρίνα· είναι το πάτωμα. Κάτω από τα πόδια σου ' +
                  'απλώνεται μια αθηναϊκή γειτονιά που έζησε πάνω από τέσσερις χιλιάδες ' +
                  'χρόνια, από τα προϊστορικά χρόνια ως τον 12ο αιώνα. Ξεχωρίζεις δρόμους, ' +
                  'αυλές, πηγάδια και έναν λουτρώνα. Το μουσείο δεν την σκέπασε: στηρίχτηκε ' +
                  'σε κολόνες που κατεβαίνουν ανάμεσα στα ερείπια. Από το 2019 μπορείς να ' +
                  'κατέβεις και να περπατήσεις μέσα της.',
                en:
                  'This is not an exhibit in a case; it is the floor. Under your feet lies an ' +
                  'Athenian neighbourhood that was lived in for more than four thousand ' +
                  'years, from prehistoric times to the 12th century. You can pick out ' +
                  'streets, courtyards, wells and a bath house. The museum did not cover it: ' +
                  'it stands on columns that reach down between the ruins. Since 2019 you can ' +
                  'go down and walk through it.',
              },
              question: {
                q: {
                  el: 'Πώς στέκεται το μουσείο πάνω από την αρχαία γειτονιά;',
                  en: 'How does the museum stand above the ancient neighbourhood?',
                },
                answers: [
                  {
                    el: 'Πάνω σε κολόνες που κατεβαίνουν ανάμεσα στα ερείπια',
                    en: 'On columns that reach down between the ruins',
                  },
                  { el: 'Πάνω σε μια τεράστια πλάκα από τσιμέντο', en: 'On one enormous concrete slab' },
                  { el: 'Πάνω σε χώμα που έριξαν από πάνω τους', en: 'On soil poured over the top of them' },
                  { el: 'Πάνω σε ξύλινους πασσάλους, όπως στη Βενετία', en: 'On wooden piles, the way Venice is built' },
                ],
                explanation: {
                  el: 'Οι κολόνες πατούν σε κενά σημεία, ώστε το βάρος του κτιρίου να μην ακουμπάει πουθενά τα αρχαία.',
                  en: 'The columns land on empty spots so the building’s weight never rests on the ruins.',
                },
              },
            },
            {
              id: 'athens-acropolis-museum-nymphe-vases',
              name: { el: 'Τα αγγεία του γάμου', en: 'The wedding vases' },
              blurb: {
                el:
                  'Στην πλαγιά κάτω από την Ακρόπολη υπήρχε ένα μικρό ιερό της Νύμφης, της ' +
                  'θεάς του γάμου. Εκεί οι Αθηναίες άφηναν λουτροφόρους: ψηλά, λεπτά αγγεία ' +
                  'με δύο χερούλια, που κρατούσαν το νερό για το λουτρό πριν από τον γάμο. ' +
                  'Πάνω τους είναι ζωγραφισμένη η πομπή: η νύφη, οι φίλες της, οι δάδες. ' +
                  'Οι αρχαιολόγοι βρήκαν χιλιάδες θραύσματα μαζεμένα σε έναν λάκκο, σαν να ' +
                  'τα είχαν καθαρίσει όλα μαζί κάποια μέρα.',
                en:
                  'On the slope below the Acropolis there was a small sanctuary of Nymphe, ' +
                  'the goddess of weddings. Athenian women left loutrophoroi there: tall, ' +
                  'narrow vases with two handles that carried the water for the bath before a ' +
                  'wedding. Painted on them is the procession itself, the bride, her friends, ' +
                  'the torches. Archaeologists found thousands of fragments gathered in one ' +
                  'pit, as if the whole sanctuary had been tidied out on a single day.',
              },
              question: {
                q: {
                  el: 'Τι κουβαλούσε μια λουτροφόρος;',
                  en: 'What did a loutrophoros carry?',
                },
                answers: [
                  { el: 'Το νερό για το λουτρό πριν από τον γάμο', en: 'The water for the bath before a wedding' },
                  { el: 'Λάδι για τα λυχνάρια του ναού', en: 'Oil for the lamps of the temple' },
                  { el: 'Κρασί για τη γιορτή μετά τον γάμο', en: 'Wine for the party after the wedding' },
                  { el: 'Στάχτη από τη φωτιά της θυσίας', en: 'Ash from the fire of a sacrifice' },
                ],
                explanation: {
                  el: 'Το όνομα το λέει: λουτρό και φέρω. Είναι το αγγείο που φέρνει το νερό του λουτρού.',
                  en: 'The name says it: loutron, a bath, and phero, to carry. It is the vase that brings the bath water.',
                },
              },
            },
            {
              id: 'athens-acropolis-museum-asklepieion',
              name: { el: 'Τα δώρα των αρρώστων', en: 'The gifts of the sick' },
              blurb: {
                el:
                  'Στη νότια πλαγιά λειτουργούσε το Ασκληπιείο, ένα ιερό όπου πήγαιναν οι ' +
                  'άρρωστοι. Όποιος γινόταν καλά άφηνε ένα ευχαριστήριο δώρο, και πολλά από ' +
                  'αυτά είχαν το σχήμα του μέλους που είχε πονέσει: ένα μαρμάρινο πόδι, ένα ' +
                  'χέρι, ένα ζευγάρι μάτια. Είναι παράξενα και συγκινητικά μαζί, γιατί ' +
                  'καθένα τους είναι μια αληθινή ιστορία κάποιου που φοβήθηκε και μετά ' +
                  'ανακουφίστηκε. Άλλοι άφηναν ανάγλυφα με ολόκληρη την οικογένεια να ' +
                  'πλησιάζει τον θεό.',
                en:
                  'On the south slope stood the Asklepieion, a sanctuary where sick people ' +
                  'came. Anyone who recovered left a thank-you gift, and many of them were ' +
                  'shaped like the part of the body that had hurt: a marble leg, a hand, a ' +
                  'pair of eyes. They are strange and moving at the same time, because each ' +
                  'one is a real story about somebody who was frightened and then got better. ' +
                  'Others left carved panels showing a whole family walking up to the god.',
              },
              question: {
                q: {
                  el: 'Γιατί έχουν σχήμα ποδιού ή ματιού κάποια από τα δώρα;',
                  en: 'Why are some of the gifts shaped like a leg or an eye?',
                },
                answers: [
                  {
                    el: 'Γιατί δείχνουν το μέλος που πονούσε και έγινε καλά',
                    en: 'Because they show the part of the body that hurt and then healed',
                  },
                  { el: 'Γιατί ήταν παιχνίδια για τα παιδιά του ιερού', en: 'Because they were toys for the children of the sanctuary' },
                  { el: 'Γιατί χρησίμευαν ως κλειδιά για τις πόρτες', en: 'Because they were used as keys for the doors' },
                  { el: 'Γιατί ήταν καλούπια για τους γλύπτες', en: 'Because they were moulds for the sculptors' },
                ],
                explanation: {
                  el: 'Ήταν ένας τρόπος να πεις ευχαριστώ και να δείξεις ακριβώς για τι.',
                  en: 'It was a way of saying thank you and showing exactly what for.',
                },
              },
            },
          ],
        },
        {
          id: 'athens-acropolis-museum-archaic',
          emoji: '🗿',
          name: { el: 'Η Αρχαϊκή Αίθουσα', en: 'The Archaic Gallery' },
          intro: {
            el:
              'Αυτή η αίθουσα δεν έχει τοίχους με βιτρίνες. Τα αγάλματα στέκονται ελεύθερα, ' +
              'σε φως που αλλάζει με τον ουρανό, και μπορείς να γυρίσεις γύρω τους όπως θα ' +
              'γύριζες γύρω από έναν άνθρωπο. Είναι τα γλυπτά που στέκονταν στον βράχο πριν ' +
              'από τον Παρθενώνα, και πολλά σώθηκαν επειδή θάφτηκαν.',
            en:
              'This gallery has no cases along the walls. The statues stand in the open, in ' +
              'daylight that changes with the sky, and you can walk around them the way you ' +
              'would walk around a person. These are the sculptures that stood on the rock ' +
              'before the Parthenon, and many of them survived because they were buried.',
          },
          exhibits: [
            {
              id: 'athens-acropolis-museum-moschophoros',
              name: { el: 'Ο Μοσχοφόρος', en: 'The Calf-Bearer' },
              blurb: {
                el:
                  'Ένας άντρας κουβαλάει στους ώμους του ένα μοσχάρι, κρατώντας τα τέσσερα ' +
                  'πόδια του σταυρωτά μπροστά στο στήθος. Είναι φτιαγμένος γύρω στο 570 π.Χ. ' +
                  'και ανέβαινε στον βράχο για να προσφέρει το ζώο στη θεά. Το πιο ωραίο ' +
                  'είναι τα πόδια του μοσχαριού και τα χέρια του ανθρώπου: σχηματίζουν ένα ' +
                  'σταυρό, το μόνο σχέδιο σε όλο το άγαλμα. Τα μάτια του ήταν κάποτε από ' +
                  'άλλο, χρωματιστό υλικό, στερεωμένα μέσα στις κόγχες. Σήμερα λείπουν.',
                en:
                  'A man carries a calf on his shoulders, holding its four legs crossed in ' +
                  'front of his chest. He was carved around 570 BC and was climbing the rock ' +
                  'to offer the animal to the goddess. The best part is the calf’s legs and ' +
                  'the man’s arms: together they make a cross, the only pattern in the whole ' +
                  'statue. His eyes were once made of a different, coloured material, set ' +
                  'into the sockets. They are missing now.',
              },
              question: {
                q: {
                  el: 'Τι λείπει σήμερα από τον Μοσχοφόρο;',
                  en: 'What is missing from the Calf-Bearer today?',
                },
                answers: [
                  { el: 'Τα μάτια του, που ήταν από άλλο χρωματιστό υλικό', en: 'His eyes, which were made of a different coloured material' },
                  { el: 'Το μοσχάρι, που βρέθηκε χωριστά', en: 'The calf, which was found separately' },
                  { el: 'Το κεφάλι του, που δεν βρέθηκε ποτέ', en: 'His head, which was never found' },
                  { el: 'Η βάση του, που έμεινε στον βράχο', en: 'His base, which stayed up on the rock' },
                ],
                explanation: {
                  el: 'Οι αρχαίοι έβαζαν συχνά μάτια από χρωματιστή πέτρα ή γυαλί, για να μοιάζουν ζωντανά.',
                  en: 'Ancient sculptors often set eyes of coloured stone or glass into a statue to make it look alive.',
                },
              },
            },
            {
              id: 'athens-acropolis-museum-peplos-kore',
              name: { el: 'Η Κόρη με τον πέπλο', en: 'The Peplos Kore' },
              blurb: {
                el:
                  'Μια νεαρή μορφή, φτιαγμένη γύρω στο 530 π.Χ., με ένα μικρό χαμόγελο που ' +
                  'το βλέπεις σε πολλά αγάλματα εκείνης της εποχής. Πάνω της σώζονται ' +
                  'κομμάτια χρώματος: κόκκινο, πράσινο, ίχνη από σχέδια με ζώα στο ρούχο. ' +
                  'Αυτό είναι το μεγάλο μυστικό της αρχαίας γλυπτικής, γιατί τα αγάλματα δεν ' +
                  'ήταν λευκά. Ήταν βαμμένα, ζωηρά, σχεδόν φανταχτερά. Το άσπρο μάρμαρο που ' +
                  'φανταζόμαστε είναι απλώς το χρώμα που ξέβαψε ο χρόνος.',
                en:
                  'A young figure carved around 530 BC, with the small smile you see on many ' +
                  'statues of that time. Patches of paint survive on her: red, green, traces ' +
                  'of animal patterns on her clothes. This is the great secret of ancient ' +
                  'sculpture, because the statues were not white. They were painted, bright, ' +
                  'almost gaudy. The white marble we picture is simply the colour that time ' +
                  'washed off.',
              },
              question: {
                q: {
                  el: 'Τι χρώμα είχαν πραγματικά τα αρχαία αγάλματα;',
                  en: 'What colour were ancient statues really?',
                },
                answers: [
                  { el: 'Ήταν βαμμένα με ζωηρά χρώματα', en: 'They were painted in bright colours' },
                  { el: 'Ήταν πάντα κατάλευκα, όπως τα βλέπουμε', en: 'They were always pure white, as we see them' },
                  { el: 'Ήταν χρυσά, όλα χωρίς εξαίρεση', en: 'They were gold, every single one' },
                  { el: 'Ήταν μαύρα, από τον καπνό των θυσιών', en: 'They were black, from the smoke of sacrifices' },
                ],
                explanation: {
                  el: 'Το χρώμα ξεθώριασε μέσα στους αιώνες. Σε λίγα αγάλματα, όπως αυτό, έμειναν κομμάτια του.',
                  en: 'The paint faded over the centuries. On a few statues, like this one, patches of it survived.',
                },
              },
            },
            {
              id: 'athens-acropolis-museum-kritios-boy',
              name: { el: 'Ο Κριτίειος Παις', en: 'The Kritios Boy' },
              blurb: {
                el:
                  'Δες πού πατάει. Όλα τα προηγούμενα αγάλματα στέκονται με το βάρος ' +
                  'μοιρασμένο ίσια στα δύο πόδια, σαν στρατιώτες σε παρέλαση. Αυτό το αγόρι, ' +
                  'γύρω στο 480 π.Χ., ρίχνει το βάρος του στο ένα πόδι. Αμέσως ο γοφός ' +
                  'ανεβαίνει, ο ώμος πέφτει, το κεφάλι γυρίζει λίγο. Με μία κίνηση, η πέτρα ' +
                  'σταματάει να ποζάρει και αρχίζει να στέκεται. Οι ιστορικοί το θεωρούν ένα ' +
                  'από τα πρώτα αγάλματα που το κάνουν, και μετά από αυτό η γλυπτική δεν ' +
                  'ξαναγύρισε πίσω.',
                en:
                  'Look at how he stands. Every earlier statue puts its weight evenly on both ' +
                  'feet, like a soldier on parade. This boy, carved around 480 BC, shifts his ' +
                  'weight onto one leg. At once the hip lifts, the shoulder drops, the head ' +
                  'turns a little. With one move the stone stops posing and starts standing. ' +
                  'Historians count it among the first statues to do this, and after it ' +
                  'sculpture never went back.',
              },
              question: {
                q: {
                  el: 'Τι κάνει αυτό το αγόρι που δεν έκαναν τα προηγούμενα αγάλματα;',
                  en: 'What does this boy do that earlier statues did not?',
                },
                answers: [
                  { el: 'Ρίχνει το βάρος του στο ένα πόδι', en: 'He shifts his weight onto one leg' },
                  { el: 'Κρατάει ένα ζώο στα χέρια του', en: 'He holds an animal in his arms' },
                  { el: 'Κάθεται αντί να στέκεται', en: 'He sits instead of standing' },
                  { el: 'Είναι φτιαγμένο από μπρούντζο και όχι από μάρμαρο', en: 'He is made of bronze instead of marble' },
                ],
                explanation: {
                  el: 'Δοκίμασέ το: ρίξε το βάρος σου στο ένα πόδι και δες τι κάνουν μόνοι τους οι ώμοι σου.',
                  en: 'Try it: put your weight on one leg and watch what your shoulders do all by themselves.',
                },
              },
            },
            {
              id: 'athens-acropolis-museum-caryatids',
              name: { el: 'Οι Καρυάτιδες', en: 'The Caryatids' },
              blurb: {
                el:
                  'Έξι κοπέλες από μάρμαρο κρατούσαν τη στέγη ενός μικρού ναού πάνω στον ' +
                  'βράχο, του Ερεχθείου, αντί για κολόνες. Πέντε στέκονται εδώ, στη σειρά, ' +
                  'με το κενό της έκτης δίπλα τους: εκείνη βρίσκεται στο Βρετανικό Μουσείο ' +
                  'στο Λονδίνο. Κοίτα τα πόδια τους. Καθεμιά λυγίζει διαφορετικό γόνατο, ' +
                  'ώστε καμία να μη μοιάζει να ζορίζεται. Οι πλεξούδες τους πέφτουν χοντρές ' +
                  'στον αυχένα, και δεν είναι διακόσμηση: στηρίζουν τον λεπτό λαιμό, που ' +
                  'αλλιώς θα έσπαγε πρώτος.',
                en:
                  'Six marble young women held up the roof of a small temple on the rock, the ' +
                  'Erechtheion, instead of columns. Five stand here in a row, with the gap of ' +
                  'the sixth beside them: she is in the British Museum in London. Look at ' +
                  'their feet. Each one bends a different knee, so that none of them looks ' +
                  'strained. Their plaits fall thick down the back of the neck, and that is ' +
                  'not decoration: they strengthen the thin neck, which would otherwise be ' +
                  'the first thing to snap.',
              },
              question: {
                q: {
                  el: 'Γιατί οι Καρυάτιδες έχουν χοντρές πλεξούδες στον αυχένα;',
                  en: 'Why do the Caryatids have thick plaits at the back of the neck?',
                },
                answers: [
                  { el: 'Γιατί στηρίζουν τον λεπτό λαιμό τους', en: 'Because the plaits strengthen their thin necks' },
                  { el: 'Γιατί έτσι χτενίζονταν οι βασίλισσες', en: 'Because that is how queens wore their hair' },
                  { el: 'Γιατί εκεί κρύβεται η υπογραφή του γλύπτη', en: 'Because the sculptor’s signature is hidden there' },
                  { el: 'Γιατί μέσα τους περνούσε νερό της βροχής', en: 'Because rainwater ran down through them' },
                ],
                explanation: {
                  el:
                    'Ο λαιμός είναι το πιο αδύναμο σημείο σε ένα μαρμάρινο άγαλμα που κρατάει ' +
                    'βάρος. Οι πλεξούδες τον πάχυναν χωρίς να χαλάσουν την εικόνα.',
                  en:
                    'The neck is the weakest point in a marble figure carrying weight. The ' +
                    'plaits thickened it without spoiling the look.',
                },
              },
            },
          ],
        },
        {
          id: 'athens-acropolis-museum-parthenon-gallery',
          emoji: '🏛️',
          name: { el: 'Η Αίθουσα του Παρθενώνα', en: 'The Parthenon Gallery' },
          intro: {
            el:
              'Ο τελευταίος όροφος είναι ένα ορθογώνιο από τζάμι, στο ίδιο μέγεθος με τον ' +
              'Παρθενώνα και στραμμένο ώστε να τον κοιτάζει κατάματα. Τα γλυπτά στέκονται ' +
              'στη θέση που είχαν πάνω στον ναό, στο ίδιο ύψος, με το φως της Αθήνας να ' +
              'πέφτει πάνω τους. Ο ναός φαίνεται από το τζάμι, τετρακόσια μέτρα πιο πέρα.',
            en:
              'The top floor is a rectangle of glass, the same size as the Parthenon and ' +
              'turned to face it square on. The sculptures stand in the positions they held ' +
              'on the temple, at the same height, with the light of Athens falling on them. ' +
              'The temple itself is visible through the glass, four hundred metres away.',
          },
          exhibits: [
            {
              id: 'athens-acropolis-museum-frieze',
              name: { el: 'Η ζωφόρος', en: 'The frieze' },
              blurb: {
                el:
                  'Μια λωρίδα από μάρμαρο, περίπου 160 μέτρα μακριά, έτρεχε γύρω γύρω στο ' +
                  'εσωτερικό του ναού και έδειχνε μια πομπή: άλογα που χορεύουν, νέους που ' +
                  'κρατούν στάμνες, κοπέλες με προσφορές, γέρους που κουβεντιάζουν. ' +
                  'Πιστεύεται πως είναι η γιορτή των Παναθηναίων, όταν όλη η πόλη ανέβαινε ' +
                  'στον βράχο. Το εντυπωσιακό είναι ότι δεν δείχνει θεούς και ήρωες μόνο· ' +
                  'δείχνει τους ίδιους τους Αθηναίους, κάτι σπάνιο για ναό.',
                en:
                  'A ribbon of marble about 160 metres long ran around the inside of the ' +
                  'temple showing a procession: horses dancing on the spot, young men ' +
                  'carrying jars, girls with offerings, old men in conversation. It is ' +
                  'thought to show the Panathenaic festival, when the whole city walked up ' +
                  'the rock. The striking thing is that it does not show only gods and ' +
                  'heroes. It shows the Athenians themselves, which was rare on a temple.',
              },
              question: {
                q: {
                  el: 'Ποιους δείχνει κυρίως η ζωφόρος του Παρθενώνα;',
                  en: 'Who does the Parthenon frieze mostly show?',
                },
                answers: [
                  { el: 'Τους ίδιους τους Αθηναίους σε πομπή', en: 'The Athenians themselves, in a procession' },
                  { el: 'Μόνο τους δώδεκα θεούς του Ολύμπου', en: 'Only the twelve gods of Olympus' },
                  { el: 'Μια ναυμαχία με πλοία και κουπιά', en: 'A sea battle with ships and oars' },
                  { el: 'Τους βασιλιάδες της Περσίας', en: 'The kings of Persia' },
                ],
                explanation: {
                  el: 'Ήταν ασυνήθιστο: ο ναός της θεάς έδειχνε στους τοίχους του την ίδια την πόλη.',
                  en: 'It was unusual: the goddess’s temple showed the city itself on its walls.',
                },
              },
            },
            {
              id: 'athens-acropolis-museum-metopes',
              name: { el: 'Οι μετόπες', en: 'The metopes' },
              blurb: {
                el:
                  'Ψηλά στο εξωτερικό του ναού υπήρχαν 92 τετράγωνες πλάκες με σκαλισμένες ' +
                  'μάχες: Κένταυροι εναντίον ανθρώπων, γίγαντες εναντίον θεών, Αμαζόνες ' +
                  'εναντίον Αθηναίων. Δεν είναι απλώς καβγάδες. Οι Αθηναίοι μόλις είχαν δει ' +
                  'την πόλη τους να καίγεται, και οι μετόπες λένε ξανά και ξανά την ίδια ' +
                  'ιστορία: η τάξη νικάει το χάος. Πολλές έχουν φθαρεί, γιατί ήταν οι πιο ' +
                  'εκτεθειμένες στον καιρό και στους ανθρώπους.',
                en:
                  'High on the outside of the temple sat 92 square panels carved with battles: ' +
                  'centaurs against men, giants against gods, Amazons against Athenians. They ' +
                  'are not just fights. The Athenians had just watched their city burn, and ' +
                  'the metopes tell the same story over and over: order beats chaos. Many are ' +
                  'badly worn, because they were the most exposed of all the sculptures, to ' +
                  'weather and to people.',
              },
              question: {
                q: {
                  el: 'Τι ήθελαν να πουν οι μετόπες με τις μάχες τους;',
                  en: 'What were the metopes trying to say with their battles?',
                },
                answers: [
                  { el: 'Ότι η τάξη νικάει το χάος', en: 'That order defeats chaos' },
                  { el: 'Ότι ο πόλεμος είναι παιχνίδι', en: 'That war is a game' },
                  { el: 'Ότι οι Κένταυροι ήταν αληθινοί', en: 'That centaurs were real' },
                  { el: 'Ότι η Αθήνα δεν πολέμησε ποτέ', en: 'That Athens never fought anyone' },
                ],
                explanation: {
                  el: 'Ήταν εικόνες με νόημα, όχι διακόσμηση: η πόλη μιλούσε για τον εαυτό της.',
                  en: 'They were pictures with a meaning, not decoration: the city talking about itself.',
                },
              },
            },
            {
              id: 'athens-acropolis-museum-white-casts',
              name: { el: 'Τα λευκά εκμαγεία', en: 'The white casts' },
              blurb: {
                el:
                  'Ανάμεσα στα αυθεντικά μάρμαρα στέκονται κάποια κομμάτια κατάλευκα και ' +
                  'ολοφάνερα διαφορετικά. Είναι αντίγραφα από γύψο. Δείχνουν τα γλυπτά που ' +
                  'δεν βρίσκονται εδώ, επειδή στις αρχές του 19ου αιώνα αφαιρέθηκαν από τον ' +
                  'ναό και σήμερα εκτίθενται σε άλλα μουσεία, κυρίως στο Λονδίνο. Το μουσείο ' +
                  'δεν προσπάθησε να τα κάνει να μοιάζουν με τα υπόλοιπα. Τα άφησε άσπρα ' +
                  'επίτηδες, ώστε να βλέπεις με μια ματιά τι λείπει.',
                en:
                  'Among the original marbles stand pieces that are stark white and obviously ' +
                  'different. They are plaster copies. They stand in for sculptures that are ' +
                  'not here, because in the early 19th century they were removed from the ' +
                  'temple and are now displayed in other museums, mostly in London. The ' +
                  'museum did not try to make the copies blend in. It left them white on ' +
                  'purpose, so you can see at a glance what is missing.',
              },
              question: {
                q: {
                  el: 'Γιατί άφησαν τα εκμαγεία κατάλευκα;',
                  en: 'Why were the casts left stark white?',
                },
                answers: [
                  { el: 'Για να φαίνεται αμέσως ποια γλυπτά λείπουν', en: 'So that you can see immediately which sculptures are missing' },
                  { el: 'Γιατί ο γύψος δεν βάφεται', en: 'Because plaster cannot be painted' },
                  { el: 'Γιατί έτσι ήταν και τα αρχαία', en: 'Because the ancient ones looked like that too' },
                  { el: 'Για να τα ξεχωρίζουν οι φύλακες στο σκοτάδι', en: 'So the guards can tell them apart in the dark' },
                ],
                explanation: {
                  el: 'Είναι μια απόφαση με νόημα: το κενό φαίνεται, αντί να κρύβεται.',
                  en: 'It is a deliberate choice: the gap is shown rather than hidden.',
                },
              },
            },
          ],
        },
      ],
      riddles: [
        {
          id: 'athens-acropolis-museum-riddle-1',
          difficulty: 1,
          prompt: {
            el:
              'Ήμασταν έξι αδελφές και κρατούσαμε μια στέγη στα κεφάλια μας. Πέντε ' +
              'στεκόμαστε εδώ στη σειρά, και δίπλα μας υπάρχει ένα κενό: η έκτη ταξίδεψε ' +
              'μακριά και δεν γύρισε ποτέ.',
            en:
              'We were six sisters and we carried a roof on our heads. Five of us stand here ' +
              'in a row, and beside us there is a gap: the sixth travelled far away and never ' +
              'came back.',
          },
          hint: {
            el: 'Ψάξε μορφές που κάνουν τη δουλειά μιας κολόνας.',
            en: 'Look for figures doing the job of a column.',
          },
          answerExhibitId: 'athens-acropolis-museum-caryatids',
        },
        {
          id: 'athens-acropolis-museum-riddle-2',
          difficulty: 2,
          prompt: {
            el:
              'Ανεβαίνω τον βράχο με ένα ζώο στους ώμους μου και τα χέρια μου σταυρώνονται ' +
              'με τα πόδια του. Κάποτε είχα μάτια από χρωματιστή πέτρα. Τώρα σε κοιτάζω με ' +
              'δύο άδειες κόγχες.',
            en:
              'I am climbing the rock with an animal across my shoulders, my arms crossed ' +
              'with its legs. I once had eyes of coloured stone. Now I look at you with two ' +
              'empty sockets.',
          },
          hint: {
            el: 'Το ζώο είναι μικρό και τετράποδο, και δεν κατέβηκε ποτέ.',
            en: 'The animal is small and four-legged, and it never got back down.',
          },
          answerExhibitId: 'athens-acropolis-museum-moschophoros',
        },
        {
          id: 'athens-acropolis-museum-riddle-3',
          difficulty: 3,
          prompt: {
            el:
              'Δεν είμαι αρχαίο και δεν το κρύβω. Στέκομαι δίπλα στα αληθινά μάρμαρα με ' +
              'χρώμα που ουρλιάζει τη διαφορά, για να καταλάβεις με μια ματιά τι δεν ' +
              'βρίσκεται πια στο σπίτι του.',
            en:
              'I am not ancient and I do not hide it. I stand beside the real marbles in a ' +
              'colour that shouts the difference, so you understand at a glance what is no ' +
              'longer at home.',
          },
          hint: {
            el: 'Είμαι φτιαγμένο από γύψο, όχι από μάρμαρο.',
            en: 'I am made of plaster, not marble.',
          },
          answerExhibitId: 'athens-acropolis-museum-white-casts',
        },
      ],
    },
  },

  // ------------------------------------------------ national archaeological museum
  {
    id: 'athens-national-archaeological-museum',
    cityId: 'athens',
    emoji: '👑',
    category: 'museum',
    difficulty: 3,

    name: { el: 'Εθνικό Αρχαιολογικό Μουσείο', en: 'The National Archaeological Museum' },
    tagline: {
      el: 'Χρυσές μάσκες, χάλκινοι θεοί και ένας αρχαίος υπολογιστής',
      en: 'Gold masks, bronze gods and an ancient computer',
    },
    story: {
      el:
        'Είναι το μεγαλύτερο μουσείο της Ελλάδας και δεν μιλάει μόνο για την Αθήνα. Εδώ ' +
        'μαζεύτηκαν ευρήματα από όλη τη χώρα: από τις Μυκήνες, από τη Σαντορίνη, από ' +
        'ναυάγια στον βυθό. Το κτίριο άνοιξε το 1889 και μοιάζει με αρχαίο ναό, επειδή ' +
        'ακριβώς αυτό ήθελε να μοιάζει. Μέσα του υπάρχουν περίπου έντεκα χιλιάδες εκθέματα, ' +
        'που είναι πάρα πολλά για μία επίσκεψη, οπότε το κόλπο είναι να διαλέξεις. ' +
        'Οι Μυκήνες σου δίνουν χρυσάφι τριάμισι χιλιάδων χρόνων. Οι αίθουσες με τα χάλκινα ' +
        'σου δίνουν αγάλματα που έμειναν αιώνες μέσα στη θάλασσα και βγήκαν σχεδόν ' +
        'ολόκληρα, επειδή το αλμυρό νερό τα προστάτεψε από τους ανθρώπους. Και σε μια ' +
        'βιτρίνα, μικρά πράσινα κομμάτια μετάλλου με δόντια από γρανάζια αποδεικνύουν ότι ' +
        'κάποιος έφτιαξε μηχανή για να προβλέπει τον ουρανό, δύο χιλιάδες χρόνια πριν από ' +
        'το πρώτο ρολόι με γρανάζια.',
      en:
        'This is the largest museum in Greece, and it is not only about Athens. Finds from ' +
        'the whole country came here: from Mycenae, from Santorini, from shipwrecks on the ' +
        'sea floor. The building opened in 1889 and looks like an ancient temple, because ' +
        'looking like one was exactly the point. Inside there are around eleven thousand ' +
        'objects on display, which is far too many for one visit, so the trick is to choose. ' +
        'Mycenae gives you gold three and a half thousand years old. The bronze halls give ' +
        'you statues that spent centuries underwater and came out almost whole, because salt ' +
        'water protected them from people. And in one case, small green scraps of metal with ' +
        'gear teeth prove that somebody built a machine to predict the sky two thousand ' +
        'years before the first clockwork clock.',
    },
    facts: [
      {
        el: 'Άνοιξε το 1889 και είναι το μεγαλύτερο μουσείο της Ελλάδας.',
        en: 'It opened in 1889 and is the largest museum in Greece.',
      },
      {
        el: 'Εκθέτει περίπου 11.000 αντικείμενα από ολόκληρη τη χώρα.',
        en: 'It displays around 11,000 objects from the whole country.',
      },
      {
        el: 'Φιλοξενεί τον Μηχανισμό των Αντικυθήρων, την αρχαιότερη γνωστή μηχανή με γρανάζια.',
        en: 'It holds the Antikythera Mechanism, the oldest known geared machine.',
      },
    ],
    location: {
      lat: 37.98917,
      lng: 23.73222,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q637187', deltaM: 0 },
        { kind: 'osm', ref: 'relation/2828', deltaM: 42 },
        { kind: 'wikipedia', ref: 'National Archaeological Museum, Athens', deltaM: 0 },
      ],
      verifiedAt: '2026-09-10',
      note: 'The OSM outline centre is 42 m inside the building; the stored point is the Patission Street entrance.',
    },
    question: {
      q: {
        el: 'Γιατί βγήκαν σχεδόν ολόκληρα τα χάλκινα αγάλματα από τη θάλασσα;',
        en: 'Why did the bronze statues come out of the sea almost intact?',
      },
      answers: [
        {
          el: 'Γιατί στον βυθό δεν τα έφτανε κανείς για να τα λιώσει',
          en: 'Because on the sea floor nobody could reach them to melt them down',
        },
        {
          el: 'Γιατί ο χαλκός δεν χαλάει ποτέ, πουθενά',
          en: 'Because bronze never breaks down anywhere',
        },
        {
          el: 'Γιατί τα είχαν τυλίξει σε δέρματα ζώων',
          en: 'Because they had been wrapped in animal skins',
        },
        {
          el: 'Γιατί ήταν φτιαγμένα από χρυσό από μέσα',
          en: 'Because they were solid gold underneath',
        },
      ],
      explanation: {
        el:
          'Στη στεριά, τα χάλκινα αγάλματα λιώνονταν για να ξαναγίνουν εργαλεία ή όπλα. ' +
          'Όσα βούλιαξαν, γλίτωσαν.',
        en:
          'On land, bronze statues were melted down to become tools or weapons. The ones ' +
          'that sank were the ones that escaped.',
      },
    },

    museum: {
      doorNote: {
        el: 'Είναι πολύ μεγάλο για μία φορά. Διάλεξε δύο αίθουσες και δες τες καλά.',
        en: 'It is too big for one visit. Pick two rooms and look at them properly.',
      },
      rooms: [
        {
          id: 'athens-national-archaeological-museum-mycenae',
          emoji: '👑',
          name: { el: 'Η Αίθουσα των Μυκηνών', en: 'The Mycenaean Hall' },
          intro: {
            el:
              'Μπαίνεις και όλα λάμπουν. Αυτά τα αντικείμενα βρέθηκαν σε τάφους βασιλιάδων ' +
              'στις Μυκήνες, τριάμισι χιλιάδες χρόνια παλιούς, από έναν άνθρωπο που έψαχνε ' +
              'τους ήρωες του Ομήρου. Δεν βρήκε τους ήρωες. Βρήκε κάτι που κανείς δεν ' +
              'περίμενε: έναν ολόκληρο πολιτισμό, πολύ πιο παλιό.',
            en:
              'You walk in and everything shines. These objects came out of royal graves at ' +
              'Mycenae, three and a half thousand years old, dug by a man who was hunting for ' +
              'Homer’s heroes. He did not find the heroes. He found something nobody ' +
              'expected: an entire civilisation, far older.',
          },
          exhibits: [
            {
              id: 'athens-national-archaeological-museum-mask',
              name: { el: 'Η μάσκα του Αγαμέμνονα', en: 'The Mask of Agamemnon' },
              blurb: {
                el:
                  'Ένα λεπτό φύλλο χρυσού, χτυπημένο ώσπου να πάρει σχήμα προσώπου, ' +
                  'ακουμπισμένο πάνω σε έναν νεκρό βασιλιά στις Μυκήνες. Το βρήκε ο Ερρίκος ' +
                  'Σλήμαν το 1876 και πίστεψε ότι κρατούσε στα χέρια του το πρόσωπο του ' +
                  'Αγαμέμνονα, του βασιλιά της Ιλιάδας. Έκανε λάθος, και το λάθος είναι ' +
                  'χρήσιμο: η μάσκα είναι περίπου τριακόσια χρόνια παλαιότερη από την εποχή ' +
                  'που τοποθετούν τον Τρωικό πόλεμο. Το όνομα όμως έμεινε.',
                en:
                  'A thin sheet of gold, hammered until it took the shape of a face, laid over ' +
                  'a dead king at Mycenae. Heinrich Schliemann found it in 1876 and believed ' +
                  'he was holding the face of Agamemnon, the king from the Iliad. He was ' +
                  'wrong, and the mistake is useful: the mask is roughly three hundred years ' +
                  'older than the time the Trojan War is placed in. The name stuck anyway.',
              },
              question: {
                q: {
                  el: 'Γιατί δεν μπορεί η μάσκα να ανήκει στον Αγαμέμνονα;',
                  en: 'Why can the mask not belong to Agamemnon?',
                },
                answers: [
                  {
                    el: 'Γιατί είναι περίπου 300 χρόνια παλαιότερη από την εποχή του',
                    en: 'Because it is about 300 years older than his time',
                  },
                  { el: 'Γιατί ο Αγαμέμνονας δεν ήταν βασιλιάς', en: 'Because Agamemnon was not a king' },
                  { el: 'Γιατί βρέθηκε στην Κρήτη και όχι στις Μυκήνες', en: 'Because it was found in Crete, not at Mycenae' },
                  { el: 'Γιατί δεν είναι από χρυσό αλλά από μπρούντζο', en: 'Because it is bronze, not gold' },
                ],
                explanation: {
                  el:
                    'Ο Σλήμαν ήθελε τόσο πολύ να βρει τους ήρωες, που τους είδε παντού. Η ' +
                    'χρονολόγηση τον διέψευσε αργότερα.',
                  en:
                    'Schliemann wanted the heroes so badly that he saw them everywhere. The ' +
                    'dating proved him wrong later on.',
                },
              },
            },
            {
              id: 'athens-national-archaeological-museum-vaphio-cups',
              name: { el: 'Τα κύπελλα του Βαφειού', en: 'The Vaphio Cups' },
              blurb: {
                el:
                  'Δύο μικρά χρυσά κύπελλα, βρεμένα σε έναν τάφο κοντά στη Σπάρτη, με ' +
                  'ανάγλυφες σκηνές που διαβάζονται σαν κόμικ. Στο ένα, άνθρωποι στήνουν ' +
                  'δίχτυα και πιάνουν έναν άγριο ταύρο, και τα πράγματα πάνε άσχημα. Στο ' +
                  'άλλο, ένας ήμερος ταύρος βαδίζει ήσυχα δίπλα σε μια αγελάδα. Είναι δύο ' +
                  'τρόποι να πάρεις αυτό που θέλεις: με βία ή με πονηριά. Και τα δύο ' +
                  'φτιάχτηκαν τον 15ο αιώνα π.Χ., με σφυρί από την ανάποδη.',
                en:
                  'Two small gold cups from a tomb near Sparta, worked in relief with scenes ' +
                  'that read like a comic strip. On one, men set nets and trap a wild bull, ' +
                  'and it goes badly. On the other, a tame bull walks quietly beside a cow. ' +
                  'They are two ways of getting what you want: force, or cunning. Both were ' +
                  'made in the 15th century BC, hammered out from the back.',
              },
              question: {
                q: {
                  el: 'Τι δείχνουν μαζί τα δύο κύπελλα;',
                  en: 'What do the two cups show when you put them together?',
                },
                answers: [
                  {
                    el: 'Δύο διαφορετικούς τρόπους να πιάσεις έναν ταύρο',
                    en: 'Two different ways of catching a bull',
                  },
                  { el: 'Δύο μάχες ανάμεσα σε πόλεις', en: 'Two battles between cities' },
                  { el: 'Την ίδια σκηνή, από δύο πλευρές', en: 'The same scene, from two sides' },
                  { el: 'Έναν γάμο και μια κηδεία', en: 'A wedding and a funeral' },
                ],
                explanation: {
                  el: 'Το ένα δείχνει την παγίδα και το κυνήγι, το άλλο την ηρεμία. Ίδιο ζώο, άλλη μέθοδος.',
                  en: 'One shows the trap and the chase, the other shows calm. Same animal, different method.',
                },
              },
            },
            {
              id: 'athens-national-archaeological-museum-lion-dagger',
              name: { el: 'Το εγχειρίδιο με το κυνήγι', en: 'The lion hunt dagger' },
              blurb: {
                el:
                  'Ένα χάλκινο μαχαίρι από τους τάφους των Μυκηνών, με τη λεπίδα του ' +
                  'στολισμένη σε μια τεχνική που μοιάζει με ζωγραφική πάνω σε μέταλλο: ' +
                  'μικροσκοπικά κομμάτια χρυσού, ασημιού και μαύρου κράματος καρφωμένα στον ' +
                  'χαλκό. Η σκηνή δείχνει κυνηγούς με ασπίδες να αντιμετωπίζουν λιοντάρια. ' +
                  'Τα σώματα είναι λίγα χιλιοστά, και όμως ξεχωρίζεις πόδια, χαίτες και ' +
                  'ασπίδες. Τότε υπήρχαν πράγματι λιοντάρια στην Ελλάδα.',
                en:
                  'A bronze dagger from the graves at Mycenae, its blade decorated in a ' +
                  'technique closer to painting on metal: tiny pieces of gold, silver and a ' +
                  'black alloy inlaid into the bronze. The scene shows hunters with shields ' +
                  'facing lions. The figures are a few millimetres tall and you can still make ' +
                  'out legs, manes and shields. There really were lions in Greece back then.',
              },
              question: {
                q: {
                  el: 'Πώς φτιάχτηκαν οι εικόνες πάνω στη λεπίδα;',
                  en: 'How were the pictures on the blade made?',
                },
                answers: [
                  {
                    el: 'Με μικρά κομμάτια χρυσού και ασημιού καρφωμένα στον χαλκό',
                    en: 'With tiny pieces of gold and silver inlaid into the bronze',
                  },
                  { el: 'Ζωγραφισμένες με πινέλο και βερνίκι', en: 'Painted on with a brush and varnish' },
                  { el: 'Τυπωμένες με μια σφραγίδα', en: 'Stamped on with a seal' },
                  { el: 'Καμένες πάνω στο μέταλλο με φωτιά', en: 'Burned onto the metal with fire' },
                ],
                explanation: {
                  el: 'Λέγεται εγχάρακτη ένθεση. Είναι υπομονετική δουλειά με εργαλεία μικρότερα από βελόνα.',
                  en: 'It is called inlay. It is patient work with tools finer than a needle.',
                },
              },
            },
          ],
        },
        {
          id: 'athens-national-archaeological-museum-sea',
          emoji: '🌊',
          name: { el: 'Ό,τι επέστρεψε η θάλασσα', en: 'What the sea gave back' },
          intro: {
            el:
              'Κάθε κομμάτι σε αυτή την αίθουσα βγήκε από τον βυθό. Δύο ναυάγια, ένα στο ' +
              'Αρτεμίσιο και ένα στα Αντικύθηρα, κράτησαν τα φορτία τους για δύο χιλιάδες ' +
              'χρόνια. Το αλμυρό νερό σκέπασε τον χαλκό, οι σφουγγαράδες τα βρήκαν, και ' +
              'ανέβηκαν στην επιφάνεια πράγματα που στη στεριά θα είχαν λιώσει προ πολλού.',
            en:
              'Every piece in this room came off the sea floor. Two shipwrecks, one at ' +
              'Artemision and one at Antikythera, held on to their cargo for two thousand ' +
              'years. Salt water covered the bronze, sponge divers found them, and up came ' +
              'things that on land would have been melted down long ago.',
          },
          exhibits: [
            {
              id: 'athens-national-archaeological-museum-artemision-bronze',
              name: { el: 'Ο χάλκινος του Αρτεμισίου', en: 'The Artemision Bronze' },
              blurb: {
                el:
                  'Ένας άντρας πάνω από δύο μέτρα, με ανοιχτά χέρια, το βάρος στο μπροστινό ' +
                  'πόδι, έτοιμος να πετάξει κάτι. Το ερώτημα που δεν έχει λυθεί είναι τι: αν ' +
                  'κρατούσε κεραυνό, είναι ο Δίας· αν κρατούσε τρίαινα, είναι ο Ποσειδώνας. ' +
                  'Το όπλο δεν βρέθηκε ποτέ, οπότε το άγαλμα λέγεται απλώς «ο χάλκινος του ' +
                  'Αρτεμισίου». Φτιάχτηκε γύρω στο 460 π.Χ. και ανασύρθηκε από τη θάλασσα ' +
                  'κοντά στην Εύβοια σε δύο κομμάτια.',
                en:
                  'A man over two metres tall, arms wide, weight on the front foot, about to ' +
                  'throw something. The unsolved question is what: if he held a thunderbolt he ' +
                  'is Zeus, if he held a trident he is Poseidon. The weapon was never found, ' +
                  'so the statue is simply called the Artemision Bronze. It was made around ' +
                  '460 BC and was lifted from the sea near Euboea in two pieces.',
              },
              question: {
                q: {
                  el: 'Γιατί δεν ξέρουμε ποιος θεός είναι;',
                  en: 'Why do we not know which god this is?',
                },
                answers: [
                  {
                    el: 'Γιατί λείπει το αντικείμενο που κρατούσε στο χέρι του',
                    en: 'Because the object he was holding is missing',
                  },
                  { el: 'Γιατί το πρόσωπό του έχει καταστραφεί', en: 'Because his face is destroyed' },
                  { el: 'Γιατί δεν έχει καθόλου χαρακτηριστικά θεού', en: 'Because he has no godlike features at all' },
                  { el: 'Γιατί η επιγραφή του γράφτηκε σε άγνωστη γλώσσα', en: 'Because his inscription is in an unknown language' },
                ],
                explanation: {
                  el: 'Κεραυνός σημαίνει Δίας, τρίαινα σημαίνει Ποσειδώνας. Χωρίς το χέρι γεμάτο, δεν κρίνεται.',
                  en: 'A thunderbolt means Zeus, a trident means Poseidon. With an empty hand there is no answer.',
                },
              },
            },
            {
              id: 'athens-national-archaeological-museum-jockey',
              name: { el: 'Το αλογάκι με τον μικρό αναβάτη', en: 'The Jockey of Artemision' },
              blurb: {
                el:
                  'Ένα άλογο σε πλήρη καλπασμό, και πάνω του ένα παιδί που δεν έχει ούτε ' +
                  'σέλα ούτε αναβολείς. Το πρόσωπό του είναι σφιγμένο, τα μαλλιά ανεμίζουν, ' +
                  'και το σώμα του είναι κολλημένο στη ράχη του ζώου. Βρέθηκε στο ίδιο ' +
                  'ναυάγιο με τον μεγάλο χάλκινο, αλλά σε δεκάδες κομμάτια, και χρειάστηκαν ' +
                  'χρόνια για να ξανασυναρμολογηθεί. Είναι φτιαγμένο γύρω στο 140 π.Χ. Οι ' +
                  'ερευνητές πιστεύουν ότι το άλογο και ο αναβάτης ανήκαν πάντα μαζί, αν και ' +
                  'βρέθηκαν σε διαφορετικές αποστολές, χρόνια χωριστά.',
                en:
                  'A horse at full gallop, and on it a child with no saddle and no stirrups. ' +
                  'His face is tight, his hair is blown back, his body is pressed flat along ' +
                  'the animal’s back. He came out of the same wreck as the big bronze, but in ' +
                  'dozens of pieces, and it took years to put him back together. He was made ' +
                  'around 140 BC.',
              },
              question: {
                q: {
                  el: 'Τι δεν έχει ο μικρός αναβάτης;',
                  en: 'What does the small rider not have?',
                },
                answers: [
                  { el: 'Ούτε σέλα ούτε αναβολείς', en: 'Neither saddle nor stirrups' },
                  // Was 'Shoes on his feet', which made this a two-answer question: the
                  // jockey is barefoot, so that was also a correct reply to "what does
                  // he NOT have". His raised right hand held a whip, so a whip is
                  // something he HAS and is therefore a working distractor.
                  { el: 'Μαστίγιο στο χέρι του', en: 'A whip in his hand' },
                  { el: 'Χαλινάρι στο άλογο', en: 'A bridle on the horse' },
                  { el: 'Μαλλιά στο κεφάλι του', en: 'Hair on his head' },
                ],
                explanation: {
                  el: 'Οι αναβολείς ήρθαν στην Ευρώπη πολλούς αιώνες αργότερα. Τότε κρατιόσουν με τα πόδια σου.',
                  en: 'Stirrups reached Europe centuries later. Back then you gripped with your legs.',
                },
              },
            },
            {
              id: 'athens-national-archaeological-museum-antikythera-youth',
              name: { el: 'Ο Έφηβος των Αντικυθήρων', en: 'The Antikythera Youth' },
              blurb: {
                el:
                  'Ένας νέος από χαλκό, γύρω στο 340 π.Χ., που στέκεται χαλαρά και απλώνει ' +
                  'το δεξί του χέρι, σαν να κρατούσε κάτι στρογγυλό ανάμεσα στα δάχτυλα. ' +
                  'Ίσως ήταν το μήλο του Πάρη, ίσως μια μπάλα. Βρέθηκε το 1900 από ' +
                  'σφουγγαράδες που ψάχνοντας σφουγγάρια έπεσαν πάνω σε ένα ναυάγιο ' +
                  'φορτωμένο αγάλματα. Είναι από τα λίγα ελληνικά χάλκινα αγάλματα που ' +
                  'σώζονται σχεδόν ολόκληρα.',
                en:
                  'A bronze young man from around 340 BC who stands loosely and reaches out ' +
                  'his right hand, as if he were holding something round between his fingers. ' +
                  'Perhaps the apple of Paris, perhaps a ball. He was found in 1900 by sponge ' +
                  'divers who, while looking for sponges, came across a wreck loaded with ' +
                  'statues. He is one of very few Greek bronzes to survive almost complete.',
              },
              question: {
                q: {
                  el: 'Ποιοι βρήκαν το ναυάγιο των Αντικυθήρων;',
                  en: 'Who found the Antikythera shipwreck?',
                },
                answers: [
                  { el: 'Σφουγγαράδες που έψαχναν σφουγγάρια', en: 'Sponge divers looking for sponges' },
                  { el: 'Ψαράδες που έριξαν δίχτυα', en: 'Fishermen casting nets' },
                  { el: 'Αρχαιολόγοι με υποβρύχιο', en: 'Archaeologists in a submarine' },
                  { el: 'Ναυτικοί που ναυάγησαν στο ίδιο σημείο', en: 'Sailors who were shipwrecked on the same spot' },
                ],
                explanation: {
                  el: 'Η μεγαλύτερη υποβρύχια ανακάλυψη της εποχής έγινε κατά λάθος, σε μια συνηθισμένη μέρα δουλειάς.',
                  en: 'The biggest underwater discovery of its day happened by accident, on an ordinary working day.',
                },
              },
            },
            {
              id: 'athens-national-archaeological-museum-antikythera-mechanism',
              name: { el: 'Ο Μηχανισμός των Αντικυθήρων', en: 'The Antikythera Mechanism' },
              blurb: {
                el:
                  'Μοιάζει με πράσινες πέτρες. Είναι κομμάτια από μια μηχανή δύο χιλιάδων ' +
                  'ετών, γεμάτη μπρούντζινα γρανάζια με μυτερά δόντια. Γύριζες μια μανιβέλα ' +
                  'και οι δείκτες έδειχναν πού βρίσκονται ο ήλιος και η σελήνη, πότε θα ' +
                  'κρυβόταν το φως σε μια έκλειψη, ακόμα και ποια χρονιά έπεφταν οι αγώνες. ' +
                  'Είναι η αρχαιότερη γνωστή μηχανή με γρανάζια στον κόσμο, και μετά από ' +
                  'αυτήν δεν ξαναφτιάχτηκε κάτι τόσο περίπλοκο για περίπου χίλια χρόνια.',
                en:
                  'It looks like green stones. It is the remains of a two-thousand-year-old ' +
                  'machine packed with bronze gearwheels and sharp little teeth. You turned a ' +
                  'handle and pointers showed where the sun and moon were, when the light ' +
                  'would go out in an eclipse, even which year the games fell in. It is the ' +
                  'oldest known geared machine in the world, and nothing as complicated was ' +
                  'built again for about a thousand years afterwards.',
              },
              question: {
                q: {
                  el: 'Τι έκανε ο Μηχανισμός των Αντικυθήρων;',
                  en: 'What did the Antikythera Mechanism do?',
                },
                answers: [
                  {
                    el: 'Έδειχνε τις θέσεις του ήλιου και της σελήνης και προέβλεπε εκλείψεις',
                    en: 'It showed the positions of the sun and moon and predicted eclipses',
                  },
                  { el: 'Άντλησε νερό από τον βυθό ενός πηγαδιού', en: 'It pumped water up from the bottom of a well' },
                  { el: 'Ζύγιζε το χρυσάφι με ακρίβεια', en: 'It weighed gold precisely' },
                  { el: 'Άνοιγε τις πόρτες ενός ναού μόνο του', en: 'It opened the doors of a temple by itself' },
                ],
                explanation: {
                  el:
                    'Ήταν ένας υπολογιστής του ουρανού με γρανάζια. Δεν έκανε πράξεις· έδειχνε ' +
                    'πού θα ήταν τα άστρα.',
                  en:
                    'It was a sky computer made of gears. It did not do sums; it showed you ' +
                    'where things in the sky would be.',
                },
              },
            },
          ],
        },
        {
          id: 'athens-national-archaeological-museum-thera',
          emoji: '🌺',
          name: { el: 'Οι τοιχογραφίες της Θήρας', en: 'The Thera Frescoes' },
          intro: {
            el:
              'Πριν από περίπου τρεισήμισι χιλιάδες χρόνια, ένα ηφαίστειο στη Σαντορίνη ' +
              'εξερράγη και έθαψε την πόλη του Ακρωτηρίου κάτω από στάχτη. Η στάχτη ήταν ' +
              'καταστροφή και ταυτόχρονα σκέπασμα: κράτησε τους τοίχους όρθιους και τα ' +
              'χρώματα ζωντανά. Αυτές οι εικόνες δεν είναι αντίγραφα. Είναι οι ίδιοι τοίχοι.',
            en:
              'About three and a half thousand years ago a volcano on Santorini erupted and ' +
              'buried the town of Akrotiri under ash. The ash was a disaster and a blanket at ' +
              'the same time: it held the walls up and kept the colours alive. These pictures ' +
              'are not copies. They are the walls themselves.',
          },
          exhibits: [
            {
              id: 'athens-national-archaeological-museum-spring-fresco',
              name: { el: 'Η Άνοιξη', en: 'The Spring Fresco' },
              blurb: {
                el:
                  'Ένα ολόκληρο δωμάτιο ζωγραφισμένο σε τρεις τοίχους: κόκκινοι βράχοι, ' +
                  'κόκκινα κρίνα που λυγίζουν στον αέρα, και χελιδόνια που κυνηγιούνται στον ' +
                  'ουρανό. Δεν υπάρχει άνθρωπος πουθενά. Είναι, όσο ξέρουμε, η αρχαιότερη ' +
                  'ζωγραφιά τοπίου στην Ευρώπη: κάποιος ζωγράφισε ένα μέρος επειδή ήταν ' +
                  'όμορφο, χωρίς θεούς, χωρίς βασιλιάδες, χωρίς ιστορία. Και είναι ' +
                  'ζωγραφισμένη με τα χρώματα βρεγμένα πάνω στον νωπό σοβά, τεχνική που ' +
                  'δίνει βάθος και κρατάει τα χρώματα δεμένα με τον τοίχο για αιώνες.',
                en:
                  'A whole room painted across three walls: red rocks, red lilies bending in ' +
                  'the wind, and swallows chasing each other through the sky. There is no ' +
                  'person anywhere in it. As far as we know it is the oldest landscape ' +
                  'painting in Europe: somebody painted a place simply because it was ' +
                  'beautiful, with no gods, no kings and no story. And it was painted with the ' +
                  'colours going on while the plaster was still wet.',
              },
              question: {
                q: {
                  el: 'Τι λείπει εντελώς από την τοιχογραφία της Άνοιξης;',
                  en: 'What is completely missing from the Spring Fresco?',
                },
                answers: [
                  { el: 'Οι άνθρωποι', en: 'People' },
                  { el: 'Τα χρώματα', en: 'Colour' },
                  { el: 'Ο ουρανός', en: 'The sky' },
                  { el: 'Τα λουλούδια', en: 'Flowers' },
                ],
                explanation: {
                  el: 'Είναι σκέτο τοπίο, κάτι σπανιότατο για την εποχή του.',
                  en: 'It is pure landscape, which was extremely rare for its time.',
                },
              },
            },
            {
              id: 'athens-national-archaeological-museum-boxing-boys',
              name: { el: 'Οι μικροί πυγμάχοι', en: 'The Boxing Boys' },
              blurb: {
                el:
                  'Δύο αγόρια στέκονται αντικριστά, με ένα γάντι στο ένα χέρι το καθένα και ' +
                  'το άλλο ελεύθερο. Έχουν ξυρισμένα κεφάλια με μακριές τούφες να πέφτουν ' +
                  'πίσω, όπως χτενίζονταν τα παιδιά τότε, και το ένα φοράει κοσμήματα. Είναι ' +
                  'από τα ελάχιστα αρχαία έργα που δείχνουν παιδιά να αθλούνται, και ' +
                  'ζωγραφίστηκαν πριν από περίπου τρεισήμισι χιλιάδες χρόνια στον τοίχο ενός ' +
                  'σπιτιού στο Ακρωτήρι.',
                en:
                  'Two boys stand facing each other, each with a glove on one hand and the ' +
                  'other hand bare. Their heads are shaved with long locks left to hang down, ' +
                  'the way children wore their hair then, and one of them is wearing jewellery. ' +
                  'It is one of very few ancient works showing children doing sport, and it ' +
                  'was painted about three and a half thousand years ago on the wall of a ' +
                  'house in Akrotiri.',
              },
              question: {
                q: {
                  el: 'Τι παράξενο έχουν τα χέρια των δύο αγοριών;',
                  en: 'What is odd about the two boys’ hands?',
                },
                answers: [
                  { el: 'Το καθένα φοράει γάντι μόνο στο ένα χέρι', en: 'Each one wears a glove on only one hand' },
                  { el: 'Κρατούν και τα δύο σπαθιά', en: 'They are both holding swords' },
                  { el: 'Τα χέρια τους είναι δεμένα πίσω', en: 'Their hands are tied behind them' },
                  { el: 'Δεν έχουν καθόλου δάχτυλα', en: 'They have no fingers at all' },
                ],
                explanation: {
                  el: 'Δεν ξέρουμε σίγουρα γιατί. Ίσως ήταν κανόνας του αγώνα, ίσως τελετή.',
                  en: 'We are not sure why. It may have been a rule of the contest, or part of a ceremony.',
                },
              },
            },
            {
              id: 'athens-national-archaeological-museum-antelopes',
              name: { el: 'Οι αντιλόπες', en: 'The Antelopes' },
              blurb: {
                el:
                  'Στον ίδιο τοίχο με τους πυγμάχους στέκονται αντιλόπες, ζωγραφισμένες με ' +
                  'λίγες μαύρες γραμμές πάνω σε ανοιχτό φόντο. Δεν υπάρχει σκίαση, δεν ' +
                  'υπάρχει λεπτομέρεια στο τρίχωμα, και όμως τα ζώα φαίνονται ζωντανά: όλη η ' +
                  'δουλειά γίνεται από την καμπύλη του λαιμού και τη στάση του κεφαλιού. Το ' +
                  'παράξενο είναι ότι αντιλόπες δεν ζούσαν στη Σαντορίνη, οπότε ο ζωγράφος ' +
                  'τις είχε δει κάπου αλλού, ή τις είχε ακούσει.',
                en:
                  'On the same wall as the boxers stand antelopes, drawn with a few black ' +
                  'lines on a pale background. There is no shading and no detail in the coat, ' +
                  'and yet the animals look alive: the whole job is done by the curve of the ' +
                  'neck and the tilt of the head. The strange part is that antelopes did not ' +
                  'live on Santorini, so the painter had seen them somewhere else, or had ' +
                  'heard them described.',
              },
              question: {
                q: {
                  el: 'Γιατί είναι παράξενο που υπάρχουν αντιλόπες σε αυτόν τον τοίχο;',
                  en: 'Why is it strange that there are antelopes on this wall?',
                },
                answers: [
                  { el: 'Γιατί δεν ζούσαν αντιλόπες στη Σαντορίνη', en: 'Because antelopes did not live on Santorini' },
                  { el: 'Γιατί οι αντιλόπες ζωγραφίζονταν μόνο σε τάφους', en: 'Because antelopes were only ever painted in tombs' },
                  { el: 'Γιατί έχουν πέντε πόδια η καθεμιά', en: 'Because each one has five legs' },
                  { el: 'Γιατί είναι ζωγραφισμένες ανάποδα', en: 'Because they are painted upside down' },
                ],
                explanation: {
                  el:
                    'Το Ακρωτήρι ήταν λιμάνι με καράβια που ταξίδευαν μακριά. Οι εικόνες ' +
                    'ταξίδευαν μαζί τους.',
                  en:
                    'Akrotiri was a port with ships that sailed a long way. Pictures travelled ' +
                    'with them.',
                },
              },
            },
          ],
        },
      ],
      riddles: [
        {
          id: 'athens-national-archaeological-museum-riddle-1',
          difficulty: 1,
          prompt: {
            el:
              'Είμαι ένα πρόσωπο από χρυσό, αλλά δεν είναι δικό μου. Με ακούμπησαν πάνω σε ' +
              'έναν βασιλιά πριν από τριάμισι χιλιάδες χρόνια, και μου έδωσαν το λάθος ' +
              'όνομα.',
            en:
              'I am a face made of gold, but it is not my own. They laid me on a king three ' +
              'and a half thousand years ago, and then they gave me the wrong name.',
          },
          hint: {
            el: 'Το λάθος όνομα ανήκει σε έναν βασιλιά της Ιλιάδας.',
            en: 'The wrong name belongs to a king from the Iliad.',
          },
          answerExhibitId: 'athens-national-archaeological-museum-mask',
        },
        {
          id: 'athens-national-archaeological-museum-riddle-2',
          difficulty: 2,
          prompt: {
            el:
              'Είμαι σπασμένος σε πράσινα κομμάτια και μοιάζω με πέτρα. Μέσα μου όμως ' +
              'κρύβονται δόντια που κουμπώνουν, και κάποτε έλεγα πότε θα σκοτείνιαζε ο ' +
              'ήλιος στη μέση της μέρας.',
            en:
              'I am broken into green pieces and I look like stone. Inside me, though, are ' +
              'teeth that lock together, and I once told people when the sun would go dark in ' +
              'the middle of the day.',
          },
          hint: {
            el: 'Ήρθα από ναυάγιο, μαζί με αγάλματα.',
            en: 'I came from a shipwreck, together with statues.',
          },
          answerExhibitId: 'athens-national-archaeological-museum-antikythera-mechanism',
        },
        {
          id: 'athens-national-archaeological-museum-riddle-3',
          difficulty: 3,
          prompt: {
            el:
              'Δεν είμαι αντικείμενο, είμαι τοίχος. Πάνω μου φυτρώνουν κόκκινα κρίνα και ' +
              'πετάνε χελιδόνια, και δεν θα βρεις ούτε έναν άνθρωπο. Με έσωσε αυτό που με ' +
              'έθαψε.',
            en:
              'I am not an object, I am a wall. Red lilies grow on me and swallows fly across ' +
              'me, and you will not find a single person. The thing that buried me is the ' +
              'thing that saved me.',
          },
          hint: {
            el: 'Αυτό που με έθαψε ήταν στάχτη από ηφαίστειο.',
            en: 'What buried me was ash from a volcano.',
          },
          answerExhibitId: 'athens-national-archaeological-museum-spring-fresco',
        },
      ],
    },
  },

  // ----------------------------------------------------------- benaki toy museum
  {
    id: 'athens-benaki-toy-museum',
    cityId: 'athens',
    emoji: '🧸',
    category: 'museum',
    difficulty: 1,

    name: { el: 'Μουσείο Παιχνιδιών Μπενάκη', en: 'The Benaki Toy Museum' },
    tagline: {
      el: 'Είκοσι χιλιάδες παιχνίδια σε ένα σπίτι σαν πυργάκι',
      en: 'Twenty thousand toys in a house shaped like a little tower',
    },
    story: {
      el:
        'Στο Παλαιό Φάληρο, κοντά στη θάλασσα, στέκεται ένα παράξενο σπίτι του 1920 που ' +
        'μοιάζει με μικρό κάστρο. Λέγεται Σπίτι Κουλούρα, και μέσα του ζουν πάνω από είκοσι ' +
        'χιλιάδες παιχνίδια. Τα μάζεψε μία γυναίκα, η Μαρία Αργυριάδη, σε όλη της τη ζωή, ' +
        'από την Ελλάδα και από πολλές άλλες χώρες, και τα χάρισε ώστε να τα βλέπουν όλοι. ' +
        'Δεν είναι μια συλλογή από ακριβά αντικείμενα. Είναι μια συλλογή από τεκμήρια: τι ' +
        'έπαιζαν τα παιδιά όταν δεν υπήρχε ρεύμα, τι έπαιζαν όταν δεν υπήρχαν πλαστικά, τι ' +
        'φτιάχνανε μόνα τους όταν δεν υπήρχε τίποτα. Θα δεις παιχνίδια δυόμισι χιλιάδων ' +
        'ετών δίπλα σε παιχνίδια που έπαιζαν οι γονείς σου, και θα καταλάβεις κάτι ' +
        'ενοχλητικά απλό: το παιχνίδι αλλάζει υλικό, όχι ιδέα. Η μπάλα, η κούκλα και το ' +
        'ζάρι υπάρχουν παντού και πάντα, σε κάθε γλώσσα και σε κάθε εποχή.',
      en:
        'In Palaio Faliro, near the sea, stands an odd house from the 1920s that looks like a ' +
        'small castle. It is called the Kouloura House, and more than twenty thousand toys ' +
        'live inside it. One woman, Maria Argyriadi, collected them over a lifetime, from ' +
        'Greece and from many other countries, and gave them away so that everyone could see ' +
        'them. It is not a collection of expensive objects. It is a collection of evidence: ' +
        'what children played with when there was no electricity, what they played with ' +
        'before plastic, what they made themselves when there was nothing. You will see toys ' +
        'two and a half thousand years old beside toys your parents played with, and you ' +
        'will notice something almost annoying in how simple it is: play changes its ' +
        'materials, not its ideas.',
    },
    facts: [
      {
        el: 'Η συλλογή ξεπερνά τα 20.000 παιχνίδια και αντικείμενα της παιδικής ηλικίας.',
        en: 'The collection holds more than 20,000 toys and objects of childhood.',
      },
      {
        el: 'Στεγάζεται στο Σπίτι Κουλούρα, ένα κτίριο της δεκαετίας του 1920.',
        en: 'It is housed in the Kouloura House, a building from the 1920s.',
      },
      {
        el: 'Άνοιξε ως μουσείο παιχνιδιών το 2017.',
        en: 'It opened as a toy museum in 2017.',
      },
    ],
    location: {
      lat: 37.93025,
      lng: 23.687,
      anchor: 'centroid',
      confidence: 'C',
      sources: [{ kind: 'wikidata', ref: 'Q108608183', deltaM: 0 }],
      verifiedAt: '2026-09-10',
      note: 'Grade C: Wikidata is the only source carrying a coordinate for this building. Neither OpenStreetMap nor Wikipedia has a matching entry to cross-check against.',
    },
    question: {
      q: {
        el: 'Πώς μαζεύτηκαν τα παιχνίδια αυτού του μουσείου;',
        en: 'How were this museum’s toys gathered?',
      },
      answers: [
        {
          el: 'Τα συγκέντρωσε μία συλλέκτρια σε όλη της τη ζωή',
          en: 'One collector gathered them over her whole life',
        },
        {
          el: 'Τα έφτιαξαν παιδιά σε εργαστήρια του μουσείου',
          en: 'Children made them in the museum’s workshops',
        },
        {
          el: 'Τα αγόρασε το κράτος από ένα εργοστάσιο',
          en: 'The state bought them from a factory',
        },
        {
          el: 'Βρέθηκαν όλα μαζί σε μια ανασκαφή',
          en: 'They were all found together in one excavation',
        },
      ],
      explanation: {
        el:
          'Η Μαρία Αργυριάδη μάζευε παιχνίδια για δεκαετίες και τα παρέδωσε ώστε να γίνουν ' +
          'μουσείο.',
        en:
          'Maria Argyriadi collected toys for decades and handed them over so they could ' +
          'become a museum.',
      },
    },

    museum: {
      doorNote: {
        el: 'Μη ψάχνεις το πιο ακριβό. Ψάξε το πιο παλιό που θα ήθελες ακόμα να παίξεις.',
        en: 'Do not look for the most expensive one. Look for the oldest one you would still play with.',
      },
      rooms: [
        {
          id: 'athens-benaki-toy-museum-ancient',
          emoji: '🏺',
          name: { el: 'Παιχνίδια από πολύ παλιά', en: 'Toys from very long ago' },
          intro: {
            el:
              'Τα αρχαία παιδιά δεν είχαν μπαταρίες, οθόνες ούτε πλαστικό. Είχαν πηλό, ξύλο, ' +
              'κόκαλο και φαντασία, και έφτιαχναν με αυτά ακριβώς τα ίδια παιχνίδια που ' +
              'παίζεις κι εσύ. Πολλά τους βρέθηκαν σε τάφους παιδιών, βαλμένα εκεί από ' +
              'γονείς που δεν ήθελαν να τα αφήσουν να φύγουν χωρίς αυτά.',
            en:
              'Ancient children had no batteries, no screens and no plastic. They had clay, ' +
              'wood, bone and imagination, and with those they built exactly the same games ' +
              'you play. Many of these were found in children’s graves, put there by parents ' +
              'who did not want them to go without them.',
          },
          exhibits: [
            {
              id: 'athens-benaki-toy-museum-knucklebones',
              name: { el: 'Οι αστράγαλοι', en: 'The knucklebones' },
              blurb: {
                el:
                  'Μικρά κοκάλινα αστραγαλάκια από πρόβατα και κατσίκες, το πιο διαδεδομένο ' +
                  'παιχνίδι του αρχαίου κόσμου. Κάθε κόκαλο έχει τέσσερις διαφορετικές ' +
                  'πλευρές, καθεμιά με το όνομά της και τη βαθμολογία της, οπότε λειτουργεί ' +
                  'σαν ζάρι που δεν είναι δίκαιο. Τα παιδιά τα πετούσαν στον αέρα και τα ' +
                  'έπιαναν στη ράχη του χεριού, ή στόχευαν να χτυπήσουν το ένα με το άλλο. ' +
                  'Βρίσκονται σε ανασκαφές κατά χιλιάδες.',
                en:
                  'Small ankle bones from sheep and goats, the most widespread game of the ' +
                  'ancient world. Each bone has four different sides, each with its own name ' +
                  'and score, so it works like a dice that is not fair. Children threw them ' +
                  'up and caught them on the back of the hand, or aimed to knock one with ' +
                  'another. They turn up in excavations in their thousands.',
              },
              question: {
                q: {
                  el: 'Πόσες διαφορετικές πλευρές έχει ένας αστράγαλος;',
                  en: 'How many different sides does a knucklebone have?',
                },
                answers: [
                  { el: 'Τέσσερις, καθεμιά με άλλη βαθμολογία', en: 'Four, each with a different score' },
                  { el: 'Έξι, όπως το ζάρι', en: 'Six, like a dice' },
                  { el: 'Δύο, όπως το νόμισμα', en: 'Two, like a coin' },
                  { el: 'Οκτώ, όπως η σβούρα', en: 'Eight, like a spinning top' },
                ],
                explanation: {
                  el: 'Γι’ αυτό ήταν και ζάρι και παιχνίδι επιδεξιότητας ταυτόχρονα.',
                  en: 'That is why it was a dice and a game of skill at the same time.',
                },
              },
            },
            {
              id: 'athens-benaki-toy-museum-jointed-doll',
              name: { el: 'Η κούκλα με τα κινούμενα μέλη', en: 'The doll with moving limbs' },
              blurb: {
                el:
                  'Μια πήλινη κούκλα με χέρια και πόδια δεμένα χωριστά, ώστε να κουνιούνται. ' +
                  'Είναι από τα πιο συγκινητικά αρχαία ευρήματα, γιατί ξέρουμε τι γινόταν με ' +
                  'αυτές: τα κορίτσια τις κρατούσαν όσο ήταν παιδιά και, όταν μεγάλωναν, τις ' +
                  'άφηναν σε ένα ιερό ως δώρο αποχαιρετισμού στην παιδική ηλικία. Ήταν ένα ' +
                  'επίσημο τέλος του παιχνιδιού, με τελετή. Πολλές τέτοιες κούκλες βρέθηκαν ' +
                  'μαζεμένες σε ιερά, και κάθε μία τους σημαίνει ότι κάποιο κορίτσι μεγάλωσε.',
                en:
                  'A clay doll with arms and legs strung on separately so that they move. It ' +
                  'is one of the most touching ancient finds, because we know what happened ' +
                  'to them: girls kept them while they were children and, when they grew up, ' +
                  'left them at a sanctuary as a farewell gift to childhood. It was an ' +
                  'official end of playtime, with a ceremony.',
              },
              question: {
                q: {
                  el: 'Τι έκαναν τα κορίτσια με αυτές τις κούκλες όταν μεγάλωναν;',
                  en: 'What did girls do with these dolls when they grew up?',
                },
                answers: [
                  { el: 'Τις άφηναν σε ένα ιερό ως δώρο', en: 'They left them at a sanctuary as a gift' },
                  { el: 'Τις έσπαγαν και τις πετούσαν', en: 'They broke them and threw them away' },
                  { el: 'Τις πουλούσαν στην αγορά', en: 'They sold them in the market' },
                  { el: 'Τις έβαφαν χρυσές', en: 'They painted them gold' },
                ],
                explanation: {
                  el: 'Ήταν τρόπος να πεις «τελείωσε ένα κομμάτι της ζωής μου» με ένα αντικείμενο.',
                  en: 'It was a way of saying "a part of my life is over" using an object.',
                },
              },
            },
            {
              id: 'athens-benaki-toy-museum-wheeled-animals',
              name: { el: 'Τα ζωάκια με ρόδες', en: 'The animals on wheels' },
              blurb: {
                el:
                  'Πήλινα αλογάκια και πουλιά στημένα πάνω σε τέσσερις μικρές ρόδες, με μια ' +
                  'τρύπα μπροστά για να περάσεις σχοινί και να τα σέρνεις. Είναι από τα ' +
                  'παλαιότερα παιχνίδια που έχουν βρεθεί, και υπάρχουν σχεδόν σε κάθε αρχαίο ' +
                  'πολιτισμό, ανεξάρτητα ο ένας από τον άλλο. Το ίδιο παιχνίδι υπάρχει και ' +
                  'σήμερα, με πλαστικό αντί για πηλό, και τα μωρά το αγαπούν ακριβώς το ίδιο.',
                en:
                  'Clay horses and birds set on four small wheels, with a hole at the front ' +
                  'for a string so you can pull them along. They are among the oldest toys ' +
                  'ever found, and they exist in almost every ancient culture, independently ' +
                  'of one another. The same toy is still made today in plastic instead of ' +
                  'clay, and babies love it exactly as much.',
              },
              question: {
                q: {
                  el: 'Γιατί έχουν τρύπα μπροστά αυτά τα ζωάκια;',
                  en: 'Why do these little animals have a hole at the front?',
                },
                answers: [
                  { el: 'Για να περνάει σχοινί και να τα σέρνεις', en: 'So a string can go through and you can pull them' },
                  { el: 'Για να βγαίνει ο αέρας όταν ψήνονται', en: 'So air can escape while they are fired' },
                  { el: 'Για να μπαίνει νερό μέσα τους', en: 'So water can be poured inside them' },
                  { el: 'Για να κρεμιούνται σε δέντρο', en: 'So they can be hung on a tree' },
                ],
                explanation: {
                  el: 'Είναι ένα παιχνίδι που τραβιέται, δηλαδή για παιδιά που μόλις έμαθαν να περπατούν.',
                  en: 'It is a pull-along toy, which means it is for children who have just learned to walk.',
                },
              },
            },
          ],
        },
        {
          id: 'athens-benaki-toy-museum-attic',
          emoji: '🎠',
          name: { el: 'Το πατάρι της γιαγιάς', en: 'Grandmother’s attic' },
          intro: {
            el:
              'Εδώ αρχίζουν τα παιχνίδια που θυμούνται ακόμα άνθρωποι: τσίγκινα, κουρδιστά, ' +
              'ζωγραφισμένα στο χέρι. Είναι πιο κοντά σου από τα αρχαία και γι’ αυτό πιο ' +
              'παράξενα, γιατί κάποιος που ξέρεις τα έπαιζε στ’ αλήθεια. Ρώτησε στο σπίτι ' +
              'ποιο από αυτά θυμούνται, και θα σου πουν και πού το είχαν κρυμμένο.',
            en:
              'Here begin the toys that people still remember: tin, wind-up, painted by hand. ' +
              'They are closer to you than the ancient ones and stranger for exactly that ' +
              'reason, because somebody you know actually played with them. Ask at home which ' +
              'of these they remember, and you will also hear where they kept it hidden.',
          },
          exhibits: [
            {
              id: 'athens-benaki-toy-museum-tin-toys',
              name: { el: 'Τα κουρδιστά τσίγκινα', en: 'The wind-up tin toys' },
              blurb: {
                el:
                  'Λαμαρίνα βαμμένη με ζωηρά χρώματα, ένα κλειδάκι στο πλάι, και μέσα ένα ' +
                  'ελατήριο. Το κουρδίζεις, το αφήνεις, και το παιχνίδι περπατάει, χτυπάει ' +
                  'τύμπανο ή κάνει τούμπα ώσπου να ξεκουρδιστεί. Δεν χρειάζεται μπαταρίες ' +
                  'γιατί η ενέργεια μπαίνει από το χέρι σου και αποθηκεύεται στο ελατήριο. ' +
                  'Τα περισσότερα φτιάχτηκαν τον 20ό αιώνα και πολλά έχουν χτυπήματα και ' +
                  'γρατζουνιές, γιατί δεν στέκονταν σε ράφι για να τα θαυμάζουν: τα ' +
                  'χρησιμοποιούσαν κάθε μέρα, μέχρι να χαλάσουν.',
                en:
                  'Painted tin plate in bright colours, a little key on the side and a spring ' +
                  'inside. You wind it, let go, and the toy walks, beats a drum or turns a ' +
                  'somersault until it runs down. It needs no batteries because the energy ' +
                  'comes out of your hand and is stored in the spring. Most were made in the ' +
                  '20th century, and many are dented, because they were used hard.',
              },
              question: {
                q: {
                  el: 'Από πού παίρνει ενέργεια ένα κουρδιστό παιχνίδι;',
                  en: 'Where does a wind-up toy get its energy?',
                },
                answers: [
                  { el: 'Από το χέρι σου, αποθηκευμένη σε ελατήριο', en: 'From your hand, stored in a spring' },
                  { el: 'Από μια μικρή μπαταρία στη βάση', en: 'From a small battery in the base' },
                  { el: 'Από τον ήλιο, μέσω της βαφής', en: 'From the sun, through the paint' },
                  { el: 'Από μαγνήτες στις ρόδες', en: 'From magnets in the wheels' },
                ],
                explanation: {
                  el: 'Κουρδίζοντας σφίγγεις ένα ελατήριο. Ξεσφίγγοντας, εκείνο κάνει τη δουλειά.',
                  en: 'Winding tightens a spring. Unwinding, that spring does the work.',
                },
              },
            },
            {
              id: 'athens-benaki-toy-museum-dolls-houses',
              name: { el: 'Τα κουκλόσπιτα', en: 'The dolls’ houses' },
              blurb: {
                el:
                  'Ολόκληρα σπίτια σε μικρογραφία, με έπιπλα, κουζινικά, ακόμα και πιατάκια ' +
                  'μικρότερα από το νύχι σου. Για τους ιστορικούς είναι θησαυρός, γιατί δείχνουν ' +
                  'πώς ήταν πραγματικά τα σπίτια της εποχής τους: τι σόμπα είχαν, πού ' +
                  'έβαζαν το νερό, πόσα δωμάτια θεωρούνταν φυσιολογικά. Ένα κουκλόσπιτο ' +
                  'είναι φωτογραφία ενός σπιτιού, φτιαγμένη πριν υπάρξουν πολλές ' +
                  'φωτογραφίες. Και επειδή τα έφτιαχναν ενήλικες για παιδιά, δείχνουν και ' +
                  'κάτι ακόμα: τι θεωρούσε σωστό σπίτι η εποχή τους.',
                en:
                  'Whole houses in miniature, with furniture, kitchen things, even plates ' +
                  'smaller than a fingernail. For historians they are treasure, because they ' +
                  'show what houses of their time were really like: what stove they had, ' +
                  'where the water went, how many rooms counted as normal. A dolls’ house is ' +
                  'a photograph of a home, made before there were many photographs. And ' +
                  'because grown-ups built them for children, they also show what that time ' +
                  'thought a proper home looked like.',
              },
              question: {
                q: {
                  el: 'Γιατί είναι χρήσιμα τα κουκλόσπιτα στους ιστορικούς;',
                  en: 'Why are dolls’ houses useful to historians?',
                },
                answers: [
                  {
                    el: 'Γιατί δείχνουν πώς ήταν στ’ αλήθεια τα σπίτια της εποχής',
                    en: 'Because they show what houses of the time were really like',
                  },
                  { el: 'Γιατί μέσα τους κρύβονταν γράμματα', en: 'Because letters were hidden inside them' },
                  { el: 'Γιατί ήταν πάντα αντίγραφα παλατιών', en: 'Because they were always copies of palaces' },
                  { el: 'Γιατί γράφουν από κάτω τη χρονολογία', en: 'Because they have the date written underneath' },
                ],
                explanation: {
                  el: 'Κανείς δεν φτιάχνει μικρογραφία ενός σπιτιού που δεν έχει δει.',
                  en: 'Nobody builds a miniature of a house they have never seen.',
                },
              },
            },
            {
              id: 'athens-benaki-toy-museum-shadow-figures',
              name: { el: 'Οι φιγούρες του θεάτρου σκιών', en: 'The shadow theatre figures' },
              blurb: {
                el:
                  'Επίπεδες φιγούρες από δέρμα ή χαρτόνι, τρυπημένες και βαμμένες, με ' +
                  'αρθρώσεις στα χέρια και μπαστουνάκια για να τις κινείς. Ο παίκτης τις ' +
                  'κρατάει πίσω από ένα άσπρο πανί με φως, και το κοινό βλέπει μόνο τη σκιά ' +
                  'τους. Ένας άνθρωπος κάνει όλες τις φωνές. Στην Ελλάδα ο πιο γνωστός ήρωας ' +
                  'είναι ο Καραγκιόζης, ένας φτωχός με τεράστιο χέρι που τα καταφέρνει πάντα ' +
                  'με πονηριά αντί για δύναμη.',
                en:
                  'Flat figures of leather or card, punched and painted, with joints at the ' +
                  'arms and thin rods to move them. The player holds them behind a white sheet ' +
                  'with a light behind it, and the audience sees only their shadow. One person ' +
                  'does all the voices. In Greece the best known character is Karagiozis, a ' +
                  'poor man with one enormous arm who always gets by on cunning rather than ' +
                  'strength.',
              },
              question: {
                q: {
                  el: 'Τι βλέπει το κοινό στο θέατρο σκιών;',
                  en: 'What does the audience see in a shadow theatre?',
                },
                answers: [
                  { el: 'Μόνο τη σκιά των φιγούρων πάνω σε άσπρο πανί', en: 'Only the shadow of the figures on a white sheet' },
                  { el: 'Τις φιγούρες μπροστά από το πανί', en: 'The figures in front of the sheet' },
                  { el: 'Ηθοποιούς με μάσκες', en: 'Actors wearing masks' },
                  { el: 'Ταινία προβαλλόμενη σε τοίχο', en: 'A film projected onto a wall' },
                ],
                explanation: {
                  el: 'Το φως είναι πίσω, οι φιγούρες στη μέση, εσύ μπροστά. Βλέπεις σκιά, όχι αντικείμενο.',
                  en: 'The light is behind, the figures in the middle, you in front. You see shadow, not object.',
                },
              },
            },
          ],
        },
      ],
      riddles: [
        {
          id: 'athens-benaki-toy-museum-riddle-1',
          difficulty: 1,
          prompt: {
            el:
              'Είμαι μικρό κοκαλάκι από ζώο και έχω τέσσερις πλευρές. Παίζομαι εδώ και ' +
              'χιλιάδες χρόνια, άλλοτε σαν ζάρι και άλλοτε πετώντας με στον αέρα.',
            en:
              'I am a small bone from an animal and I have four sides. People have played ' +
              'with me for thousands of years, sometimes as a dice and sometimes by throwing ' +
              'me in the air.',
          },
          hint: {
            el: 'Δεν είμαι ένα, είμαι πάντα πολλά μαζί.',
            en: 'I am never alone; there are always several of me.',
          },
          answerExhibitId: 'athens-benaki-toy-museum-knucklebones',
        },
        {
          id: 'athens-benaki-toy-museum-riddle-2',
          difficulty: 2,
          prompt: {
            el:
              'Είμαι επίπεδος και τρυπημένος, και δεν με βλέπει ποτέ κανείς. Το κοινό ' +
              'χειροκροτεί κάτι μαύρο πάνω σε ένα άσπρο πανί, κι εγώ στέκομαι πίσω από αυτό.',
            en:
              'I am flat and full of holes, and nobody ever sees me. The audience claps ' +
              'something black on a white sheet, and I stand behind it.',
          },
          hint: {
            el: 'Χρειάζομαι λάμπα για να υπάρξω.',
            en: 'I need a lamp in order to exist.',
          },
          answerExhibitId: 'athens-benaki-toy-museum-shadow-figures',
        },
      ],
    },
  },

  // ----------------------------------------------------------------- lycabettus
  {
    id: 'athens-lycabettus',
    cityId: 'athens',
    emoji: '⛰️',
    category: 'nature',
    difficulty: 1,

    name: { el: 'Λυκαβηττός', en: 'Lycabettus' },
    tagline: {
      el: 'Ο λόφος που, λέει ο μύθος, έπεσε από τα χέρια μιας θεάς',
      en: 'The hill a goddess dropped, if you believe the myth',
    },
    story: {
      el:
        'Ο Λυκαβηττός είναι το ψηλότερο σημείο του κέντρου της Αθήνας, 277 μέτρα, και ' +
        'φαίνεται σχεδόν από παντού. Ο μύθος εξηγεί την παρουσία του με τον πιο ανθρώπινο ' +
        'τρόπο: η Αθηνά κουβαλούσε έναν τεράστιο βράχο για να ψηλώσει την Ακρόπολη, όταν ' +
        'ένα κοράκι της έφερε άσχημα νέα. Ξαφνιάστηκε, της γλίστρησε ο βράχος και έπεσε ' +
        'εκεί που είναι σήμερα. Στην πραγματικότητα είναι ασβεστόλιθος, πολύ σκληρότερος ' +
        'από το γύρω έδαφος, που άντεξε ενώ όλα γύρω του διαβρώθηκαν. Παλιά ήταν γυμνός· ' +
        'τα πεύκα τα φύτεψαν άνθρωποι τον 19ο και τον 20ό αιώνα. Στην κορυφή στέκεται ένα ' +
        'μικρό άσπρο εκκλησάκι, ο Άγιος Γεώργιος, και από την αυλή του βλέπεις όλη την ' +
        'πόλη ως τη θάλασσα. Ανεβαίνεις με τα πόδια, ή με ένα τελεφερίκ που τρέχει μέσα σε ' +
        'σήραγγα, στο σκοτάδι, από το 1965.',
      en:
        'Lycabettus is the highest point in central Athens, 277 metres, and you can see it ' +
        'from almost anywhere. The myth explains it in the most human way possible: Athena ' +
        'was carrying an enormous rock to make the Acropolis taller when a crow brought her ' +
        'bad news. She was startled, the rock slipped, and it landed where it stands today. ' +
        'In reality it is limestone, much harder than the ground around it, which held out ' +
        'while everything else wore away. It used to be bare; the pines were planted by ' +
        'people in the 19th and 20th centuries. On the summit there is a small white chapel, ' +
        'Agios Georgios, and from its yard you see the whole city out to the sea. You walk ' +
        'up, or take a funicular that runs through a tunnel in the dark, as it has since ' +
        '1965.',
    },
    facts: [
      {
        el: 'Φτάνει τα 277 μέτρα και είναι το ψηλότερο σημείο του κέντρου της Αθήνας.',
        en: 'It reaches 277 metres and is the highest point in central Athens.',
      },
      {
        el: 'Το τελεφερίκ λειτουργεί από το 1965 και ανεβαίνει μέσα σε σήραγγα.',
        en: 'The funicular has run since 1965 and climbs inside a tunnel.',
      },
      {
        el: 'Τα πεύκα του δεν είναι φυσικά: φυτεύτηκαν από ανθρώπους.',
        en: 'Its pine trees are not natural: people planted them.',
      },
    ],
    location: {
      lat: 37.98194,
      lng: 23.74333,
      anchor: 'viewpoint',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q12872113', deltaM: 0 },
        { kind: 'osm', ref: 'node/778661727', deltaM: 5 },
      ],
      verifiedAt: '2026-09-10',
      note: 'The pin is the summit chapel of Agios Georgios, not the hill. The hill item covers a kilometre of ground and graded D as a viewpoint; this is the spot people actually stand on.',
    },
    question: {
      q: {
        el: 'Γιατί έμεινε ο Λυκαβηττός ψηλός ενώ το γύρω έδαφος χαμήλωσε;',
        en: 'Why did Lycabettus stay high while the ground around it dropped?',
      },
      answers: [
        {
          el: 'Γιατί ο βράχος του είναι πολύ σκληρότερος και άντεξε τη διάβρωση',
          en: 'Because its rock is much harder and resisted being worn away',
        },
        {
          el: 'Γιατί τον έχτισαν άνθρωποι με χώμα και πέτρες',
          en: 'Because people built it up from soil and stones',
        },
        {
          el: 'Γιατί από κάτω του υπάρχει ηφαίστειο που τον σπρώχνει',
          en: 'Because a volcano underneath keeps pushing it up',
        },
        {
          el: 'Γιατί τον κρατούν ψηλά οι ρίζες των πεύκων',
          en: 'Because the roots of the pine trees hold it up',
        },
      ],
      explanation: {
        el:
          'Ο σκληρός ασβεστόλιθος φθείρεται πιο αργά. Όταν περάσουν εκατομμύρια χρόνια, ' +
          'ό,τι είναι σκληρό μένει και γίνεται λόφος.',
        en:
          'Hard limestone wears away more slowly. Give it millions of years and whatever is ' +
          'hard is what is left standing, as a hill.',
      },
    },
  },

  // -------------------------------------------------------------- national garden
  {
    id: 'athens-national-garden',
    cityId: 'athens',
    emoji: '🌳',
    category: 'nature',
    difficulty: 1,

    name: { el: 'Εθνικός Κήπος', en: 'The National Garden' },
    tagline: {
      el: 'Ο κήπος μιας βασίλισσας, που τώρα ανήκει σε όλους',
      en: 'A queen’s garden that now belongs to everybody',
    },
    story: {
      el:
        'Στο κέντρο της Αθήνας υπάρχουν εκατόν πενήντα στρέμματα σκιάς. Ο κήπος φυτεύτηκε ' +
        'γύρω στο 1840 για τη βασίλισσα Αμαλία, που παρήγγειλε φυτά από όλη τη Μεσόγειο και ' +
        'τα έφερνε με καράβια. Λέγεται πως στην αρχή πότιζαν με νερό που κουβαλούσαν από ' +
        'μακριά, επειδή η Αθήνα δεν είχε αρκετό. Σήμερα έχει πάνω από πεντακόσια είδη ' +
        'φυτών, μερικά πολύ σπάνια, και δέντρα που φυτεύτηκαν πριν από τους παππούδες των ' +
        'παππούδων μας. Δεν είναι όμως μόνο κήπος. Μέσα του υπάρχουν αρχαίες κολόνες και ' +
        'ένα ρωμαϊκό ψηφιδωτό, χελώνες που περπατούν αργά στα μονοπάτια, μια λιμνούλα με ' +
        'πάπιες, μια μικρή παιδική βιβλιοθήκη και ένα παλιό ρολόι από φυτά. Είναι το πιο ' +
        'δροσερό σημείο της πόλης τον Αύγουστο, και οι Αθηναίοι το ξέρουν καλά: όταν ο ' +
        'υδράργυρος χτυπάει σαράντα βαθμούς στην άσφαλτο, κάτω από τα δέντρα η διαφορά ' +
        'είναι αισθητή με το πρώτο βήμα.',
      en:
        'In the middle of Athens there are fifteen hectares of shade. The garden was planted ' +
        'around 1840 for Queen Amalia, who ordered plants from all over the Mediterranean and ' +
        'had them shipped in. It is said that at first they watered it with water carried ' +
        'from far away, because Athens did not have enough. Today it holds over five hundred ' +
        'plant species, some of them rare, and trees planted before our grandparents’ ' +
        'grandparents. But it is not only a garden. Inside it there are ancient columns and ' +
        'a Roman mosaic, tortoises walking slowly across the paths, a small pond with ducks, ' +
        'a little children’s library and an old clock made of plants. It is the coolest spot ' +
        'in the city in August, and Athenians know it.',
    },
    facts: [
      {
        el: 'Καλύπτει περίπου 15,5 εκτάρια στην καρδιά της πόλης.',
        en: 'It covers about 15.5 hectares in the heart of the city.',
      },
      {
        el: 'Φυτεύτηκε γύρω στο 1840 ως ιδιωτικός κήπος της βασίλισσας Αμαλίας.',
        en: 'It was planted around 1840 as Queen Amalia’s private garden.',
      },
      {
        el: 'Φιλοξενεί πάνω από 500 είδη φυτών, μαζί με αρχαία ευρήματα και χελώνες.',
        en: 'It holds more than 500 plant species, plus ancient remains and tortoises.',
      },
    ],
    location: {
      lat: 37.97417,
      lng: 23.73833,
      anchor: 'area',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q646284', deltaM: 0 },
        { kind: 'osm', ref: 'relation/11505137', deltaM: 100 },
        { kind: 'wikipedia', ref: 'National Garden, Athens', deltaM: 0 },
      ],
      verifiedAt: '2026-09-10',
      note: 'An area pin. The OSM polygon centre is 100 m away, which for a park of this size is the middle of the lawn rather than a disagreement.',
    },
    question: {
      q: {
        el: 'Για ποιον φυτεύτηκε αρχικά ο Εθνικός Κήπος;',
        en: 'Who was the National Garden originally planted for?',
      },
      answers: [
        {
          el: 'Για τη βασίλισσα Αμαλία, ως ιδιωτικός της κήπος',
          en: 'For Queen Amalia, as her private garden',
        },
        {
          el: 'Για τους στρατιώτες, ως χώρος εκπαίδευσης',
          en: 'For soldiers, as a training ground',
        },
        {
          el: 'Για τους αρχαιολόγους, ως χώρος ανασκαφών',
          en: 'For archaeologists, as an excavation site',
        },
        {
          el: 'Για τα σχολεία, ως πρώτη παιδική χαρά της πόλης',
          en: 'For schools, as the city’s first playground',
        },
      ],
      explanation: {
        el: 'Άνοιξε για όλους αργότερα. Σήμερα η είσοδος είναι ελεύθερη κάθε μέρα.',
        en: 'It opened to everyone later. Today it is free to enter, every day.',
      },
    },
  },

  // ------------------------------------------------------------ old royal palace
  {
    id: 'athens-old-royal-palace',
    cityId: 'athens',
    emoji: '💂',
    category: 'history',
    difficulty: 3,

    name: { el: 'Παλαιά Ανάκτορα', en: 'The Old Royal Palace' },
    tagline: {
      el: 'Πρώτα παλάτι, μετά Βουλή, πάντα με φρουρούς μπροστά',
      en: 'First a palace, then a parliament, always with guards outside',
    },
    story: {
      el:
        'Όταν η Αθήνα έγινε πρωτεύουσα, ήταν μια μικρή πόλη με λίγες χιλιάδες κατοίκους ' +
        'και χρειαζόταν παλάτι. Το κτίριο αυτό χτίστηκε από το 1836 ως το 1843 για τον ' +
        'πρώτο βασιλιά, τον Όθωνα, και είναι επίτηδες αυστηρό: ίσιοι τοίχοι, καθόλου ' +
        'στολίδια, σχεδόν σαν στρατώνας. Από το 1934 δεν μένει εκεί κανένας βασιλιάς. Εκεί ' +
        'συνεδριάζει η Βουλή, δηλαδή οι άνθρωποι που ψηφίζουν τους νόμους της χώρας. ' +
        'Μπροστά του, χαμηλά στο μάρμαρο, βρίσκεται το Μνημείο του Άγνωστου Στρατιώτη: ένας ' +
        'τάφος χωρίς όνομα, για όλους όσοι χάθηκαν σε πολέμους και δεν αναγνωρίστηκαν ποτέ. ' +
        'Δύο Εύζωνοι στέκονται εκεί ακίνητοι, μέρα και νύχτα. Αλλάζουν κάθε ώρα και ' +
        'περπατούν πολύ αργά, με μεγάλες κινήσεις, όχι από επίδειξη αλλά επειδή το βήμα ' +
        'είναι τελετουργικό. Η στολή τους δεν είναι στρατιωτική με τη σημερινή έννοια: ' +
        'είναι η φορεσιά των ανταρτών του 1821, φουστανέλα και τσαρούχια με φούντες.',
      en:
        'When Athens became the capital it was a small town of a few thousand people, and it ' +
        'needed a palace. This building went up between 1836 and 1843 for the first king, ' +
        'Otto, and it is deliberately plain: straight walls, almost no ornament, not far off ' +
        'a barracks. Since 1934 no king has lived in it. It is where Parliament sits, the ' +
        'people who vote the country’s laws. In front of it, low in the marble, is the Tomb ' +
        'of the Unknown Soldier: a grave with no name, for everyone lost in wars who was ' +
        'never identified. Two Evzones stand there without moving, day and night. They change ' +
        'every hour and walk very slowly, with enormous steps, not to show off but because ' +
        'the walk is a ceremony.',
    },
    facts: [
      {
        el: 'Χτίστηκε ως παλάτι από το 1836 ως το 1843 και στεγάζει τη Βουλή από το 1934.',
        en: 'Built as a palace between 1836 and 1843, it has housed Parliament since 1934.',
      },
      {
        el: 'Η φρουρά αλλάζει κάθε ώρα, όλο το εικοσιτετράωρο.',
        en: 'The guard changes every hour, around the clock.',
      },
      {
        el: 'Η φουστανέλα των Ευζώνων έχει, κατά την παράδοση, 400 πιέτες.',
        en: 'By tradition, the Evzones’ fustanella has 400 pleats.',
      },
    ],
    location: {
      lat: 37.97528,
      lng: 23.73694,
      anchor: 'centroid',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q7084890', deltaM: 0 },
        { kind: 'osm', ref: 'relation/2150086', deltaM: 5 },
        { kind: 'wikipedia', ref: 'Old Royal Palace', deltaM: 0 },
      ],
      verifiedAt: '2026-09-10',
      note: 'The building, not the institution. The Hellenic Parliament as a body (Q477089) has no door to stand at.',
    },
    question: {
      q: {
        el: 'Ποιον θυμάται το μνημείο μπροστά από το κτίριο;',
        en: 'Who does the monument in front of the building remember?',
      },
      answers: [
        {
          el: 'Όλους τους στρατιώτες που χάθηκαν και δεν αναγνωρίστηκαν ποτέ',
          en: 'Every soldier who was lost and never identified',
        },
        {
          el: 'Τον πρώτο βασιλιά της Ελλάδας',
          en: 'The first king of Greece',
        },
        {
          el: 'Τον αρχιτέκτονα που σχεδίασε το παλάτι',
          en: 'The architect who designed the palace',
        },
        {
          el: 'Τους αθλητές των πρώτων Ολυμπιακών Αγώνων',
          en: 'The athletes of the first Olympic Games',
        },
      ],
      explanation: {
        el:
          'Γι’ αυτό ο τάφος δεν έχει όνομα. Αν έγραφε ένα όνομα, θα άφηνε έξω όλους τους ' +
          'υπόλοιπους.',
        en:
          'That is why the tomb has no name on it. One name would leave everybody else out.',
      },
    },
  },

  // ---------------------------------------------------------- agios eleftherios
  {
    id: 'athens-agios-eleftherios',
    cityId: 'athens',
    emoji: '⛪',
    category: 'history',
    difficulty: 2,

    name: { el: 'Άγιος Ελευθέριος', en: 'Agios Eleftherios' },
    tagline: {
      el: 'Μια μικρή εκκλησία φτιαγμένη από κομμάτια άλλων κτιρίων',
      en: 'A small church built from pieces of other buildings',
    },
    story: {
      el:
        'Δίπλα στη μεγάλη Μητρόπολη στέκεται μια πολύ μικρή εκκλησία, μόλις δώδεκα μέτρα ' +
        'μακριά, που οι Αθηναίοι τη λένε Μικρή Μητρόπολη. Το εκπληκτικό της δεν είναι το ' +
        'μέγεθος αλλά το υλικό: είναι χτισμένη σχεδόν ολόκληρη από μάρμαρα παρμένα από ' +
        'παλαιότερα κτίρια. Περίπου ενενήντα διαφορετικά κομμάτια, από διαφορετικές εποχές, ' +
        'μπήκαν μαζί σαν παζλ. Πάνω από την πόρτα υπάρχει μια αρχαία ζωφόρος που ήταν ' +
        'ημερολόγιο: δείχνει τις γιορτές των Αθηναίων μήνα τον μήνα, με ζώδια και σκηνές ' +
        'από τις γιορτές. Κάποιος αργότερα σκάλισε πάνω της σταυρούς, χωρίς να σβήσει τα ' +
        'αρχαία. Κοίτα τους τοίχους προσεκτικά και θα δεις λιοντάρια, αετούς, γράμματα και ' +
        'σχέδια που δεν ταιριάζουν μεταξύ τους, γιατί δεν φτιάχτηκαν ποτέ για να ταιριάξουν. ' +
        'Οι μάστορες που την έχτισαν δεν το θεώρησαν πρόβλημα. Είχαν έτοιμο, καλό μάρμαρο ' +
        'γύρω τους και το χρησιμοποίησαν, όπως θα έκανε οποιοσδήποτε.',
      en:
        'Beside the big cathedral stands a very small church, barely twelve metres long, ' +
        'which Athenians call the Little Metropolis. The astonishing thing about it is not ' +
        'the size but the material: it is built almost entirely from marble taken off older ' +
        'buildings. Around ninety different pieces, from different centuries, were fitted ' +
        'together like a jigsaw. Above the door there is an ancient carved band that was a ' +
        'calendar: it shows the festivals of the Athenians month by month, with star signs ' +
        'and scenes from the celebrations. Someone later carved crosses onto it without ' +
        'erasing what was already there. Look at the walls carefully and you will find lions, ' +
        'eagles, letters and patterns that do not match each other, because they were never ' +
        'made to match.',
    },
    facts: [
      {
        el: 'Έχει μήκος περίπου 12 μέτρα και είναι από τις μικρότερες παλιές εκκλησίες της πόλης.',
        en: 'It is about 12 metres long, one of the smallest old churches in the city.',
      },
      {
        el: 'Είναι χτισμένη από περίπου 90 κομμάτια μαρμάρου παρμένα από παλαιότερα κτίρια.',
        en: 'It is built from about 90 pieces of marble taken from older buildings.',
      },
      {
        el: 'Πάνω από την είσοδο υπάρχει αρχαίο ημερολόγιο με τις γιορτές της Αθήνας.',
        en: 'Above the entrance is an ancient calendar showing the festivals of Athens.',
      },
    ],
    location: {
      lat: 37.97506,
      lng: 23.72999,
      anchor: 'centroid',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q2790568', deltaM: 0 },
        { kind: 'osm', ref: 'way/713424516', deltaM: 2 },
        { kind: 'wikipedia', ref: 'Little Metropolis', deltaM: 6 },
      ],
      verifiedAt: '2026-09-10',
    },
    question: {
      q: {
        el: 'Από τι είναι χτισμένη αυτή η εκκλησία;',
        en: 'What is this church built from?',
      },
      answers: [
        {
          el: 'Από μάρμαρα παρμένα από παλαιότερα κτίρια',
          en: 'From marble taken off older buildings',
        },
        {
          el: 'Από τούβλα φτιαγμένα ειδικά γι’ αυτήν',
          en: 'From bricks made specially for it',
        },
        {
          el: 'Από ξύλο, βαμμένο να μοιάζει με πέτρα',
          en: 'From wood, painted to look like stone',
        },
        {
          el: 'Από μία μοναδική πέτρα, σκαλισμένη επί τόπου',
          en: 'From one single stone, carved on the spot',
        },
      ],
      explanation: {
        el:
          'Λέγονται σπόλια: υλικά που ξαναχρησιμοποιούνται. Ήταν φθηνότερο και γρηγορότερο ' +
          'από το να κόψεις νέο μάρμαρο.',
        en:
          'They are called spolia: reused material. It was cheaper and faster than quarrying ' +
          'new marble.',
      },
    },
  },

  // ------------------------------------------------------------------ kerameikos
  {
    id: 'athens-kerameikos',
    cityId: 'athens',
    emoji: '🏺',
    category: 'history',
    difficulty: 3,

    name: { el: 'Κεραμεικός', en: 'Kerameikos' },
    tagline: {
      el: 'Η γειτονιά των αγγειοπλαστών που έδωσε μια λέξη σε όλο τον κόσμο',
      en: 'The potters’ quarter that gave the world a word',
    },
    story: {
      el:
        'Εδώ δούλευαν οι αγγειοπλάστες της Αθήνας, και από το όνομα της γειτονιάς τους ' +
        'βγήκε η λέξη «κεραμικό», που τη χρησιμοποιεί σήμερα όλος ο κόσμος. Ο Κεραμεικός ' +
        'ήταν και η πύλη της πόλης: από εδώ ξεκινούσε ο δρόμος για την Ελευσίνα και ο ' +
        'δρόμος για την Ακαδημία, όπου δίδασκε ο Πλάτωνας. Σώζεται ακόμα το Δίπυλο, η ' +
        'μεγαλύτερη πύλη του αρχαίου τείχους, και ένα κομμάτι του ίδιου του τείχους. Αυτό ' +
        'το τείχος χτίστηκε το 479 π.Χ. με τόση βιασύνη, ώστε οι Αθηναίοι έριξαν μέσα ό,τι ' +
        'είχαν: πέτρες από σπίτια, κομμάτια από κολόνες, ακόμα και επιτύμβιες πλάκες. ' +
        'Έξω από την πύλη ήταν το νεκροταφείο, με μαρμάρινα ζώα και ανάγλυφα που έδειχναν ' +
        'τους ανθρώπους σε μια ήρεμη στιγμή της ζωής τους. Και ανάμεσα σε όλα αυτά τρέχει ' +
        'ακόμα ο Ηριδανός, ένα μικρό ποτάμι που δεν σταμάτησε ποτέ.',
      en:
        'This is where the potters of Athens worked, and from the name of their quarter came ' +
        'the word "ceramic", which the whole world uses today. Kerameikos was also the gate ' +
        'of the city: the road to Eleusis started here, and so did the road to the Academy, ' +
        'where Plato taught. The Dipylon, the largest gate in the ancient wall, still stands, ' +
        'and so does a stretch of the wall itself. That wall went up in 479 BC in such a ' +
        'hurry that the Athenians threw in whatever they had: stones from houses, pieces of ' +
        'columns, even grave markers. Outside the gate lay the cemetery, with marble animals ' +
        'and carved panels showing people in a quiet moment of their lives. And through all ' +
        'of it the Eridanos still runs, a small river that never stopped.',
    },
    facts: [
      {
        el: 'Η λέξη «κεραμικό» προέρχεται από το όνομα αυτής της γειτονιάς.',
        en: 'The word "ceramic" comes from the name of this neighbourhood.',
      },
      {
        el: 'Το τείχος του 479 π.Χ. χτίστηκε τόσο βιαστικά που μέσα του μπήκαν επιτύμβιες πλάκες.',
        en: 'The wall of 479 BC went up so fast that grave markers were built into it.',
      },
      {
        el: 'Ο Ηριδανός, το αρχαίο ποτάμι της Αθήνας, περνάει ακόμα μέσα από τον χώρο.',
        en: 'The Eridanos, the ancient river of Athens, still runs through the site.',
      },
    ],
    location: {
      lat: 37.97833,
      lng: 23.71861,
      anchor: 'area',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q630974', deltaM: 0 },
        { kind: 'osm', ref: 'node/2096172464', deltaM: 90 },
        { kind: 'wikipedia', ref: 'Kerameikos', deltaM: 24 },
      ],
      verifiedAt: '2026-09-10',
      note: 'An area pin covering the excavation. The OSM node sits 90 m off, near the museum inside the site.',
    },
    question: {
      q: {
        el: 'Ποια λέξη που χρησιμοποιούμε σήμερα βγήκε από αυτή τη γειτονιά;',
        en: 'Which word that we still use came from this neighbourhood?',
      },
      answers: [
        { el: 'Κεραμικό', en: 'Ceramic' },
        { el: 'Μάρμαρο', en: 'Marble' },
        { el: 'Θέατρο', en: 'Theatre' },
        { el: 'Λαβύρινθος', en: 'Labyrinth' },
      ],
      explanation: {
        el:
          'Η γειτονιά ονομάστηκε από τους κεραμείς, τους αγγειοπλάστες. Από εκεί πέρασε η ' +
          'λέξη σε δεκάδες γλώσσες.',
        en:
          'The quarter was named after its kerameis, its potters. From there the word passed ' +
          'into dozens of languages.',
      },
    },
  },

  // ------------------------------------------------------------------- varvakios
  {
    id: 'athens-varvakios',
    cityId: 'athens',
    emoji: '🐟',
    category: 'food',
    difficulty: 2,

    name: { el: 'Βαρβάκειος Αγορά', en: 'The Varvakeios Market' },
    tagline: {
      el: 'Η κεντρική αγορά της πόλης, ανοιχτή από το 1886',
      en: 'The city’s central market, open since 1886',
    },
    story: {
      el:
        'Στη μέση της οδού Αθηνάς, κάτω από μια σιδερένια στέγη με φεγγίτες, χτυπάει η ' +
        'πιο θορυβώδης καρδιά της πόλης. Η Βαρβάκειος άνοιξε το 1886 και δουλεύει από τότε ' +
        'κάθε μέρα εκτός Κυριακής, ξεκινώντας πριν ξημερώσει. Στο κέντρο είναι η ψαραγορά: ' +
        'μαρμάρινοι πάγκοι, βουνά από πάγο, και ψαράδες που φωνάζουν τιμές με έναν τρόπο ' +
        'που μοιάζει τραγούδι και κανείς απέξω δεν καταλαβαίνει. Γύρω απλώνονται τα ' +
        'κρεοπωλεία, και απέναντι η αγορά με τα φρούτα και τα λαχανικά. Στα στενά δίπλα ' +
        'υπάρχουν μαγαζιά με μπαχαρικά σε ανοιχτά σακιά, όπου η μυρωδιά αλλάζει κάθε δύο ' +
        'βήματα. Πήρε το όνομά της από τον Ιωάννη Βαρβάκη, έναν ευεργέτη που το σχολείο του ' +
        'βρισκόταν εκεί κοντά. Δεν είναι μουσείο: είναι δουλειά, και φαίνεται. Οι πάγκοι ' +
        'πλένονται με τον κουβά, τα χέρια είναι κρύα, και κανείς δεν σταματάει για να ' +
        'εξηγήσει τι κάνει.',
      en:
        'Halfway down Athinas Street, under an iron roof with skylights, beats the noisiest ' +
        'heart of the city. The Varvakeios opened in 1886 and has worked ever since, every ' +
        'day except Sunday, starting before dawn. In the middle is the fish market: marble ' +
        'counters, mountains of ice, and sellers calling out prices in a way that sounds like ' +
        'singing and that no outsider understands. Around it spread the butchers, and across ' +
        'the road is the fruit and vegetable market. In the side streets there are shops with ' +
        'spices in open sacks, where the smell changes every two steps. It is named after ' +
        'Ioannis Varvakis, a benefactor whose school stood nearby. It is not a museum: it is ' +
        'work, and it shows.',
    },
    facts: [
      {
        el: 'Λειτουργεί από το 1886 στην οδό Αθηνάς, κάτω από σιδερένια στέγη.',
        en: 'It has worked since 1886 on Athinas Street, under an iron roof.',
      },
      {
        el: 'Πήρε το όνομά της από τον ευεργέτη Ιωάννη Βαρβάκη.',
        en: 'It is named after the benefactor Ioannis Varvakis.',
      },
      {
        el: 'Η δουλειά αρχίζει πριν ξημερώσει, γιατί τα ψάρια πρέπει να φτάσουν φρέσκα.',
        en: 'Work starts before dawn, because the fish has to arrive fresh.',
      },
    ],
    location: {
      lat: 37.98041,
      lng: 23.7276,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q755345', deltaM: 0 },
        { kind: 'osm', ref: 'way/152257802', deltaM: 4 },
      ],
      verifiedAt: '2026-09-10',
      note: 'Wikipedia carries no coordinate for this article. OSM agrees with Wikidata to within 4 m, which for a market hall is the door.',
    },
    question: {
      q: {
        el: 'Γιατί ξεκινάει η δουλειά στην αγορά πριν ξημερώσει;',
        en: 'Why does work at the market start before dawn?',
      },
      answers: [
        {
          el: 'Για να φτάσουν τα ψάρια και τα κρέατα φρέσκα στους πάγκους',
          en: 'So the fish and meat reach the counters fresh',
        },
        {
          el: 'Γιατί το φως της ημέρας χαλάει τα μάρμαρα',
          en: 'Because daylight damages the marble counters',
        },
        {
          el: 'Γιατί η αγορά κλείνει στις οκτώ το πρωί',
          en: 'Because the market closes at eight in the morning',
        },
        {
          el: 'Γιατί το επιβάλλει ένας νόμος του 1886',
          en: 'Because a law from 1886 requires it',
        },
      ],
      explanation: {
        el:
          'Τα φρέσκα προϊόντα ταξιδεύουν τη νύχτα και πρέπει να είναι στον πάγκο πριν ' +
          'ανοίξουν τα μαγαζιά.',
        en:
          'Fresh food travels overnight and has to be on the counter before the shops open.',
      },
    },
  },

  // ------------------------------------------------------------------------ snfcc
  {
    id: 'athens-snfcc',
    cityId: 'athens',
    emoji: '🎭',
    category: 'art',
    difficulty: 1,

    name: {
      el: 'Κέντρο Πολιτισμού Ίδρυμα Σταύρος Νιάρχος',
      en: 'The Stavros Niarchos Foundation Cultural Center',
    },
    tagline: {
      el: 'Μια βιβλιοθήκη και μια όπερα κάτω από έναν λόφο',
      en: 'A library and an opera house underneath a hill',
    },
    story: {
      el:
        'Στο Φάληρο, εκεί που παλιά υπήρχε ένας χώρος στάθμευσης, φτιάχτηκε ένας λόφος. ' +
        'Δεν ήταν εκεί· τον έφτιαξαν άνθρωποι, και μέσα του έκρυψαν δύο κτίρια: την Εθνική ' +
        'Βιβλιοθήκη της Ελλάδας και την Εθνική Λυρική Σκηνή, δηλαδή την όπερα. Ανεβαίνεις ' +
        'τον λόφο περπατώντας, φτάνεις στην κορυφή και βλέπεις ταυτόχρονα τη θάλασσα και ' +
        'την Ακρόπολη. Το σχεδίασε ο Ρέντσο Πιάνο και άνοιξε το 2016. Στην κορυφή στέκεται ' +
        'ο Φάρος, μια γυάλινη αίθουσα σκεπασμένη με μια τεράστια οριζόντια στέγη από ' +
        'ηλιακούς συλλέκτες, που παράγει ρεύμα για το ίδιο το κτίριο. Γύρω απλώνεται πάρκο ' +
        'με περίπου χίλια τετρακόσια δέντρα και ένα κανάλι με νερό που τρέχει σε όλο του το ' +
        'μήκος. Η είσοδος στο πάρκο δεν κοστίζει τίποτα, και αυτό ήταν σκόπιμη απόφαση: ' +
        'ένα κτίριο πολιτισμού που δεν μπορείς να πλησιάσεις χωρίς εισιτήριο δεν ανήκει ' +
        'πραγματικά στην πόλη του.',
      en:
        'In Faliro, on ground that used to be a car park, somebody built a hill. It was not ' +
        'there before; people made it, and they hid two buildings inside it: the National ' +
        'Library of Greece and the Greek National Opera. You walk up the hill, reach the top, ' +
        'and see the sea and the Acropolis at the same time. It was designed by Renzo Piano ' +
        'and opened in 2016. On the summit stands the Lighthouse, a glass hall roofed by an ' +
        'enormous flat canopy of solar panels that makes electricity for the building under ' +
        'it. Around it spreads a park of about one thousand four hundred trees and a canal ' +
        'that runs water along its whole length. Getting into the park costs nothing.',
    },
    facts: [
      {
        el: 'Σχεδιάστηκε από τον Ρέντσο Πιάνο και άνοιξε το 2016.',
        en: 'It was designed by Renzo Piano and opened in 2016.',
      },
      {
        el: 'Στεγάζει μαζί την Εθνική Βιβλιοθήκη και την Εθνική Λυρική Σκηνή.',
        en: 'It houses the National Library and the National Opera together.',
      },
      {
        el: 'Η στέγη του Φάρου είναι στρωμένη με ηλιακούς συλλέκτες.',
        en: 'The roof of the Lighthouse is covered with solar panels.',
      },
    ],
    location: {
      lat: 37.9397,
      lng: 23.6917,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q17511186', deltaM: 0 },
        { kind: 'osm', ref: 'way/265733746', deltaM: 186 },
        { kind: 'wikipedia', ref: 'Stavros Niarchos Foundation Cultural Center', deltaM: 4 },
      ],
      verifiedAt: '2026-09-10',
      note: 'The OSM outline covers the whole 21-hectare park, so its centre falls 186 m away, out in the grass. Wikidata and Wikipedia agree to 4 m on the building.',
    },
    question: {
      q: {
        el: 'Τι ιδιαίτερο έχει ο λόφος πάνω στον οποίο στέκεται το κτίριο;',
        en: 'What is unusual about the hill the building stands on?',
      },
      answers: [
        { el: 'Δεν είναι φυσικός: τον έφτιαξαν άνθρωποι', en: 'It is not natural: people built it' },
        { el: 'Είναι ο ψηλότερος λόφος της Αττικής', en: 'It is the highest hill in Attica' },
        { el: 'Είναι ένα σβησμένο ηφαίστειο', en: 'It is an extinct volcano' },
        { el: 'Είναι φτιαγμένος από μάρμαρο Πεντέλης', en: 'It is made of marble from Mount Penteli' },
      ],
      explanation: {
        el:
          'Ο λόφος σηκώθηκε πάνω από τα κτίρια, ώστε το πάρκο να συνεχίζεται από πάνω τους ' +
          'αντί να σταματάει.',
        en:
          'The hill was raised over the buildings so the park could carry on across them ' +
          'instead of stopping.',
      },
    },
  },

  // ------------------------------------------------------------------ planetarium
  {
    id: 'athens-planetarium',
    cityId: 'athens',
    emoji: '🔭',
    category: 'science',
    difficulty: 2,

    name: { el: 'Πλανητάριο Ευγενιδείου', en: 'The Eugenides Planetarium' },
    tagline: {
      el: 'Ένας τεχνητός ουρανός 25 μέτρων πάνω από το κεφάλι σου',
      en: 'An artificial sky 25 metres across above your head',
    },
    story: {
      el:
        'Το Πλανητάριο άνοιξε το 1966 και από τότε κάνει το ίδιο πράγμα με όλο και ' +
        'καλύτερα μηχανήματα: σβήνει τα φώτα και βάζει τον ουρανό μέσα σε ένα κτίριο. Ο ' +
        'θόλος του έχει διάμετρο είκοσι πέντε μέτρα, και η επιφάνεια πάνω στην οποία ' +
        'προβάλλονται οι εικόνες ξεπερνά τα εννιακόσια τετραγωνικά μέτρα. Τα καθίσματα ' +
        'γέρνουν προς τα πίσω, γιατί δεν κοιτάς μπροστά σου· κοιτάς πάνω. Η αίσθηση στα ' +
        'πρώτα δευτερόλεπτα είναι περίεργη, σαν να πέφτεις προς τα επάνω. Ένα πλανητάριο ' +
        'δεν είναι κινηματογράφος με αστέρια: είναι μηχανή που δείχνει πού ακριβώς θα ' +
        'βρίσκονται τα άστρα απόψε, ή πού βρίσκονταν πριν από χίλια χρόνια, ή πώς θα ' +
        'φαίνονταν από τον Άρη. Είναι ό,τι πιο κοντινό υπάρχει σε ταξίδι στον χρόνο, χωρίς ' +
        'να φύγεις από το Φάληρο.',
      en:
        'The planetarium opened in 1966 and has done the same thing ever since with steadily ' +
        'better machines: turn out the lights and put the sky inside a building. Its dome is ' +
        'twenty-five metres across, and the surface the images are projected onto is over ' +
        'nine hundred square metres. The seats tilt back, because you are not looking ahead ' +
        'of you; you are looking up. The first few seconds feel strange, like falling ' +
        'upwards. A planetarium is not a cinema with stars in it: it is a machine that shows ' +
        'exactly where the stars will be tonight, or where they were a thousand years ago, or ' +
        'how they would look from Mars. It is the closest thing to time travel you can do ' +
        'without leaving Faliro.',
    },
    facts: [
      {
        el: 'Ο θόλος έχει διάμετρο 25 μέτρα και επιφάνεια προβολής πάνω από 900 τ.μ.',
        en: 'The dome is 25 metres across, with a projection surface of over 900 square metres.',
      },
      {
        el: 'Λειτουργεί από το 1966 και ανήκει στο Ίδρυμα Ευγενίδου.',
        en: 'It has operated since 1966 and belongs to the Eugenides Foundation.',
      },
      {
        el: 'Τα καθίσματα γέρνουν πίσω, επειδή όλη η ταινία παίζεται πάνω από το κεφάλι σου.',
        en: 'The seats recline, because the whole show happens above your head.',
      },
    ],
    location: {
      lat: 37.93983,
      lng: 23.69635,
      anchor: 'centroid',
      confidence: 'C',
      sources: [
        { kind: 'wikidata', ref: 'Q12877355', deltaM: 0 },
        { kind: 'osm', ref: 'relation/6693233', deltaM: 31 },
      ],
      verifiedAt: '2026-09-10',
      note: 'Grade C: only Wikidata carries a coordinate, and the OSM match is the foundation’s whole block, 31 m away. Wikipedia has no coordinate for this article.',
    },
    question: {
      q: {
        el: 'Τι κάνει ένα πλανητάριο που δεν κάνει ένας κινηματογράφος;',
        en: 'What does a planetarium do that a cinema does not?',
      },
      answers: [
        {
          el: 'Δείχνει πού θα βρίσκονται πραγματικά τα άστρα σε μια συγκεκριμένη στιγμή',
          en: 'It shows where the stars really will be at a given moment',
        },
        {
          el: 'Προβάλλει ταινίες σε μεγαλύτερη οθόνη',
          en: 'It projects films onto a bigger screen',
        },
        {
          el: 'Έχει καθίσματα που κουνιούνται με την εικόνα',
          en: 'It has seats that move along with the picture',
        },
        {
          el: 'Δείχνει μόνο ντοκιμαντέρ για ζώα',
          en: 'It only shows documentaries about animals',
        },
      ],
      explanation: {
        el:
          'Πίσω από την εικόνα υπάρχουν υπολογισμοί. Γι’ αυτό μπορεί να σου δείξει και τον ' +
          'ουρανό του 1821 ή του 3000.',
        en:
          'There are calculations behind the picture. That is why it can show you the sky of ' +
          '1821, or of the year 3000.',
      },
    },
  },
];

export const trails: Trail[] = [
  {
    id: 'athens-ancient-day',
    cityId: 'athens',
    emoji: '🏛️',
    name: { el: 'Μια μέρα στην αρχαία Αθήνα', en: 'A day in ancient Athens' },
    promise: {
      el: 'Θα έχεις δει πού ζούσαν, πού ψήφιζαν και πού φύλαξαν ό,τι σώθηκε.',
      en: 'You will have seen where they lived, where they voted, and where what survived is kept.',
    },
    placeIds: [
      'athens-acropolis',
      'athens-parthenon',
      'athens-ancient-agora',
      'athens-temple-hephaestus',
      'athens-acropolis-museum',
      'athens-national-archaeological-museum',
    ],
  },
  {
    id: 'athens-stones-that-remember',
    cityId: 'athens',
    emoji: '🪨',
    name: { el: 'Πέτρες που θυμούνται', en: 'Stones that remember' },
    promise: {
      el: 'Πέντε κτίρια που άλλαξαν δουλειά και κράτησαν κομμάτια από όλες τις προηγούμενες.',
      en: 'Five buildings that changed jobs and kept pieces of every job they had before.',
    },
    placeIds: [
      'athens-kerameikos',
      'athens-agios-eleftherios',
      'athens-tower-of-the-winds',
      'athens-olympieion',
      'athens-old-royal-palace',
    ],
  },
  {
    id: 'athens-day-for-playing',
    cityId: 'athens',
    emoji: '🧸',
    name: { el: 'Μια μέρα για παιχνίδι', en: 'A day for playing' },
    promise: {
      el: 'Παιχνίδια τριών χιλιάδων ετών, ένα μαρμάρινο στάδιο, ένας κήπος και ένας λόφος.',
      en: 'Toys three thousand years old, a marble stadium, a garden and a hill.',
    },
    placeIds: [
      'athens-benaki-toy-museum',
      'athens-panathenaic-stadium',
      'athens-national-garden',
      'athens-lycabettus',
    ],
  },
  {
    id: 'athens-city-at-work',
    cityId: 'athens',
    emoji: '🌆',
    name: { el: 'Η πόλη στη δουλειά της', en: 'The city at work' },
    promise: {
      el: 'Τρία μέρη που λειτουργούν σήμερα: μια αγορά, ένα πάρκο με όπερα, ένας τεχνητός ουρανός.',
      en: 'Three places working right now: a market, a park with an opera in it, an artificial sky.',
    },
    placeIds: ['athens-varvakios', 'athens-snfcc', 'athens-planetarium'],
  },
];
