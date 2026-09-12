/**
 * WiseBot World — Rome.
 *
 * Eighteen places, three of them museums with an interior. The ten Explorer spots were
 * the starting point; their stories are rewritten here, longer and without the
 * treasure-hunt framing, and their riddles, parent hints and on-site questions are kept
 * verbatim in `scripts/world/seeds/rome.explorer.json` for a later pass. Eight places
 * were added for a child of six to twelve: a chariot stadium that is now a park, a
 * garden with a keyhole, a market square, a sunbeam that tells the date, a zoo, and
 * three museums a child can stand in front of and ask "what is that?".
 *
 * Every coordinate in this file is copied from `data/world/coords/rome.json`, which
 * `scripts/world/resolve-coords.mjs` produced from Wikidata and cross-checked against
 * OpenStreetMap and Wikipedia. Nothing here was typed by hand. The `map` fractions are
 * projected from those coordinates into the bounds declared in `countries/italy.ts`.
 *
 * Every number in a story or a fact was checked on 12 September 2026 against the
 * English Wikipedia article for that place or object, and the four `findIt` notes come
 * from the venues' own pages, named beside each one.
 *
 * `el` and `en` are complete. `de`, `fr`, `es` and `it` land in the second pass.
 */

import type { Place, Trail } from '../types';

export const places: Place[] = [
  // ------------------------------------------------------------------ colosseum
  {
    id: 'rome-colosseum',
    cityId: 'rome',
    emoji: '🏟️',
    category: 'landmark',
    difficulty: 1,

    name: { el: 'Κολοσσαίο', en: 'The Colosseum' },
    tagline: {
      el: 'Η μεγαλύτερη αρένα που χτίστηκε ποτέ, με ογδόντα πόρτες',
      en: 'The biggest arena ever built, with eighty doors',
    },
    story: {
      el:
        'Ο αυτοκράτορας Βεσπασιανός ξεκίνησε να χτίζει αυτή την αρένα το 72 μ.Χ., πάνω ' +
        'στη θέση μιας τεχνητής λίμνης που είχε ο Νέρωνας στον κήπο του. Ο γιος του, ο ' +
        'Τίτος, την άνοιξε το 80 μ.Χ. με γιορτές που κράτησαν εκατό μέρες. Χωρούσε ' +
        'πενήντα ως ογδόντα χιλιάδες θεατές, και για να μπαίνουν χωρίς συνωστισμό είχε ' +
        'ογδόντα εισόδους στο ισόγειο, με αριθμούς σκαλισμένους πάνω από τις αψίδες, ' +
        'όπως οι θύρες σε ένα σημερινό γήπεδο. Κάτω από την αρένα υπήρχαν διάδρομοι, ' +
        'κλουβιά και ανελκυστήρες που ανέβαζαν ζώα και σκηνικά μέσα από καταπακτές. Όταν ' +
        'έκαιγε ο ήλιος, ναύτες από τον στόλο τραβούσαν ένα τεράστιο πανί πάνω από τις ' +
        'κερκίδες. Οι πέτρες κρατιόνταν με σιδερένιους συνδέσμους· τον Μεσαίωνα οι ' +
        'Ρωμαίοι έσκαψαν το σίδερο για να το ξαναχρησιμοποιήσουν, και γι’ αυτό οι τοίχοι ' +
        'είναι γεμάτοι τρύπες. Το 1349 ένας σεισμός έριξε τη νότια πλευρά. Το όνομα δεν ' +
        'είναι δικό του: το πήρε από τον Κολοσσό, ένα άγαλμα 30 μέτρων που στεκόταν δίπλα.',
      en:
        'The emperor Vespasian started building this arena in AD 72, on the spot where ' +
        'Nero had kept an artificial lake in his garden. His son Titus opened it in AD 80 ' +
        'with games that lasted a hundred days. It held fifty to eighty thousand people, ' +
        'and to get them in without a crush it had eighty entrances at ground level, with ' +
        'numbers carved above the arches, like the gates of a stadium today. Under the ' +
        'arena floor ran corridors, cages and lifts that raised animals and scenery ' +
        'through trapdoors. When the sun was fierce, sailors from the navy hauled an ' +
        'enormous awning out over the seats. The stones were held together with iron ' +
        'clamps; in the Middle Ages Romans dug the iron out to reuse it, which is why the ' +
        'walls are full of holes. In 1349 an earthquake brought the south side down. The ' +
        'name is borrowed: it comes from the Colossus, a statue 30 metres tall that stood ' +
        'next door.',
    },
    facts: [
      {
        el: 'Είναι 189 μέτρα μακρύ, 156 πλατύ, και ο εξωτερικός τοίχος φτάνει τα 48 μέτρα.',
        en: 'It is 189 metres long, 156 metres wide, and the outer wall is 48 metres high.',
      },
      {
        el: 'Είχε ογδόντα εισόδους στο ισόγειο· οι 76 ήταν για τους απλούς θεατές.',
        en: 'It had eighty ground-level entrances; 76 of them were for ordinary spectators.',
      },
      {
        el: 'Το πανί για τη σκιά το τραβούσαν ναύτες από τη ναυτική βάση του Μισηνού.',
        en: 'The shade awning was worked by sailors from the naval base at Misenum.',
      },
    ],
    location: {
      lat: 41.89028,
      lng: 12.49222,
      anchor: 'centroid',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q10285', deltaM: 0 },
        { kind: 'osm', ref: 'relation/1834818', deltaM: 13 },
        { kind: 'wikipedia', ref: 'Colosseum', deltaM: 3 },
      ],
      verifiedAt: '2026-09-12',
      map: { x: 0.745, y: 0.739 },
    },
    question: {
      q: {
        el: 'Γιατί έχουν τόσες τρύπες οι τοίχοι του Κολοσσαίου;',
        en: 'Why are the Colosseum’s walls full of holes?',
      },
      answers: [
        { el: 'Έβγαλαν το σίδερο από τις πέτρες', en: 'People dug the iron out of the stones' },
        { el: 'Τις άνοιξαν κανόνια σε έναν πόλεμο', en: 'Cannons made them during a war' },
        { el: 'Ήταν φωλιές για τα περιστέρια της πόλης', en: 'They were nests for the city’s pigeons' },
        { el: 'Από εκεί κρέμονταν οι σημαίες των αγώνων', en: 'The flags for the games hung from them' },
      ],
      explanation: {
        el:
          'Οι πέτρες ήταν δεμένες με σιδερένιους συνδέσμους. Τον Μεσαίωνα το σίδερο ήταν ' +
          'πολύτιμο, και οι άνθρωποι το έσκαψαν από κάθε αρμό.',
        en:
          'The stones were pinned together with iron clamps. In the Middle Ages iron was ' +
          'valuable, so people chiselled it out of every joint.',
      },
    },
  },

  // ---------------------------------------------------------------- roman forum
  {
    id: 'rome-roman-forum',
    cityId: 'rome',
    emoji: '🏛️',
    category: 'history',
    difficulty: 2,

    name: { el: 'Ρωμαϊκή Αγορά', en: 'The Roman Forum' },
    tagline: {
      el: 'Η πλατεία που κυβερνούσε τον κόσμο και μετά έγινε βοσκοτόπι',
      en: 'The square that ran the world and then became a cow field',
    },
    story: {
      el:
        'Για χίλια χρόνια αυτή η στενή κοιλάδα ανάμεσα σε δύο λόφους ήταν η καρδιά της ' +
        'Ρώμης. Οι γερουσιαστές συζητούσαν τους νόμους στην Κουρία, ένα κτίριο που στέκεται ' +
        'ακόμα σχεδόν ολόκληρο. Οι ρήτορες ανέβαιναν στα Ρόστρα, ένα πέτρινο βήμα, για να ' +
        'μιλήσουν στο πλήθος. Όταν ένας στρατηγός γύριζε νικητής, κατέβαινε την Ιερά Οδό ' +
        'με το άρμα του και όλη η πόλη τον χειροκροτούσε. Εδώ κάηκε η σορός του Ιουλίου ' +
        'Καίσαρα το 44 π.Χ., και στο σημείο εκείνο ο Αύγουστος έχτισε ναό· από τον ναό ' +
        'σώζεται ο βωμός, και ακόμα και σήμερα άνθρωποι αφήνουν πάνω του λουλούδια. Μετά ' +
        'την αρχαιότητα τα κτίρια έπεσαν, το χώμα τα σκέπασε, και τόσους αιώνες έβοσκαν εδώ ' +
        'αγελάδες που το μέρος λεγόταν Campo Vaccino, το λιβάδι των αγελάδων. Το 1803 ' +
        'ένας αρχαιολόγος, ο Carlo Fea, άρχισε να καθαρίζει τα μπάζα από την Αψίδα του ' +
        'Σεπτιμίου Σεβήρου, και σιγά σιγά η πλατεία ξαναβγήκε στο φως.',
      en:
        'For a thousand years this narrow valley between two hills was the heart of Rome. ' +
        'Senators debated the laws in the Curia, a building that still stands almost ' +
        'whole. Speakers climbed the Rostra, a stone platform, to address the crowd. When a ' +
        'general came home victorious he drove down the Sacred Way in his chariot with ' +
        'the whole city cheering. Julius Caesar’s body was burned here in 44 BC, and on ' +
        'that spot Augustus built him a temple; the altar survives, and people still ' +
        'leave flowers on it today. After the ancient world ended, the buildings fell, ' +
        'soil covered them, and cows grazed here for so many centuries that the place was ' +
        'called Campo Vaccino, the cow field. In 1803 an archaeologist named Carlo Fea ' +
        'began clearing the rubble from the Arch of Septimius Severus, and slowly the ' +
        'square came back into the light.',
    },
    facts: [
      {
        el: 'Η Κουρία, το κτίριο της Γερουσίας, στέκεται ακόμα σχεδόν ολόκληρη.',
        en: 'The Curia, the Senate house, is still standing almost complete.',
      },
      {
        el: 'Στον βωμό του Καίσαρα αφήνουν λουλούδια κάθε μέρα, δύο χιλιάδες χρόνια μετά.',
        en: 'Flowers are left on Caesar’s altar every day, two thousand years on.',
      },
      {
        el: 'Η Αψίδα του Σεπτιμίου Σεβήρου αφιερώθηκε το 203 μ.Χ.',
        en: 'The Arch of Septimius Severus was dedicated in AD 203.',
      },
    ],
    location: {
      lat: 41.8922,
      lng: 12.4852,
      anchor: 'area',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q180212', deltaM: 0 },
        { kind: 'osm', ref: 'relation/1841080', deltaM: 166 },
        { kind: 'wikipedia', ref: 'Roman Forum', deltaM: 0 },
      ],
      verifiedAt: '2026-09-12',
      note: 'An area pin on the Forum itself. The Explorer stood a child on the Via dei Fori Imperiali terrace 173 m away; that terrace is kept as a parent hint in the sidecar, not as the coordinate.',
      map: { x: 0.632, y: 0.698 },
    },
    question: {
      q: {
        el: 'Γιατί το μέρος λεγόταν για αιώνες «λιβάδι των αγελάδων»;',
        en: 'Why was this place called “the cow field” for centuries?',
      },
      answers: [
        { el: 'Έβοσκαν αγελάδες πάνω στα θαμμένα ερείπια', en: 'Cows grazed on top of the buried ruins' },
        { el: 'Εκεί πουλούσαν οι Ρωμαίοι τα βόδια τους', en: 'That is where Romans sold their oxen' },
        { el: 'Ένας αυτοκράτορας αγαπούσε πολύ τις αγελάδες', en: 'An emperor was especially fond of cows' },
        { el: 'Το σχήμα της κοιλάδας μοιάζει με αγελάδα', en: 'The valley is shaped like a cow' },
      ],
      explanation: {
        el:
          'Το χώμα είχε σκεπάσει την πλατεία τόσο βαθιά, που από πάνω απλωνόταν ένα ' +
          'κανονικό λιβάδι. Οι αρχαιολόγοι έσκαψαν πολλά μέτρα για να βρουν το πλακόστρωτο.',
        en:
          'Soil had covered the square so deeply that an ordinary meadow spread over it. ' +
          'Archaeologists dug down several metres to find the paving.',
      },
    },
  },

  // ---------------------------------------------------------------- campidoglio
  {
    id: 'rome-campidoglio',
    cityId: 'rome',
    emoji: '⭐',
    category: 'art',
    difficulty: 2,

    name: { el: 'Πλατεία του Καπιτωλίου', en: 'Piazza del Campidoglio' },
    tagline: {
      el: 'Η πλατεία που σχεδίασε ο Μιχαήλ Άγγελος, με ένα αστέρι στο πάτωμα',
      en: 'The square Michelangelo designed, with a star on the floor',
    },
    story: {
      el:
        'Ο λόφος του Καπιτωλίου ήταν ο πιο ιερός της αρχαίας Ρώμης: εδώ στεκόταν ο ναός ' +
        'του Δία, όπου τελείωναν οι θριαμβευτικές παρελάσεις. Ως τον 16ο αιώνα όμως η ' +
        'κορυφή είχε γίνει ένα λασπωμένο ξέφωτο. Το 1536 ο Πάπας Παύλος Γ΄ ανέθεσε στον ' +
        'Μιχαήλ Άγγελο να τη φτιάξει ξανά, γιατί περίμενε επίσκεψη από τον αυτοκράτορα ' +
        'Κάρολο Ε΄ και ήθελε να τον εντυπωσιάσει. Ο Μιχαήλ Άγγελος σχεδίασε τα πάντα: τις ' +
        'προσόψεις των τριών παλατιών, την πλατιά ράμπα με τα χαμηλά σκαλιά που ανεβαίνουν ' +
        'άνετα και οι καβαλάρηδες, και ένα οβάλ στο πάτωμα με ένα αστέρι δώδεκα ακτίνων. ' +
        'Το αστέρι πρόλαβε να το δει μόνο στα σχέδια: στρώθηκε στο έδαφος το 1940, ' +
        'τετρακόσια χρόνια αργότερα. Στη μέση στέκεται ο χάλκινος Μάρκος Αυρήλιος πάνω στο ' +
        'άλογό του. Είναι αντίγραφο· το αυθεντικό, που έχει ακόμα ίχνη χρυσού, μπήκε το ' +
        '1981 στο μουσείο δίπλα, για να μην το τρώει η βροχή.',
      en:
        'The Capitoline was the most sacred hill of ancient Rome: the temple of Jupiter ' +
        'stood here, where the victory parades ended. By the 16th century, though, the ' +
        'top had become a muddy clearing. In 1536 Pope Paul III asked Michelangelo to ' +
        'rebuild it, because the emperor Charles V was coming to visit and the pope wanted ' +
        'to impress him. Michelangelo designed everything: the fronts of the three ' +
        'palaces, the wide ramp with steps so low that riders could climb it on ' +
        'horseback, and an oval on the ground with a twelve-pointed star in it. The star ' +
        'he only ever saw on paper: it was laid in 1940, four hundred years later. In the ' +
        'middle stands the bronze Marcus Aurelius on his horse. It is a copy; the ' +
        'original, which still has traces of gold on it, went into the museum next door ' +
        'in 1981 so that the rain would stop eating it.',
    },
    facts: [
      {
        el: 'Ο Μιχαήλ Άγγελος έκανε τα πρώτα σχέδια για την πλατεία το 1534.',
        en: 'Michelangelo drew his first designs for the square in 1534.',
      },
      {
        el: 'Το αστέρι στο πάτωμα στρώθηκε μόλις το 1940, πάνω στο δικό του σχέδιο.',
        en: 'The star on the ground was only laid in 1940, to his own design.',
      },
      {
        el: 'Το Καπιτώλιο της Ουάσινγκτον πήρε το όνομά του από αυτόν τον λόφο.',
        en: 'The Capitol in Washington took its name from this hill.',
      },
    ],
    location: {
      lat: 41.89334,
      lng: 12.48292,
      anchor: 'centroid',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q34921', deltaM: 0 },
        { kind: 'osm', ref: 'way/23055100', deltaM: 13 },
        { kind: 'wikipedia', ref: 'Piazza del Campidoglio', deltaM: 12 },
      ],
      verifiedAt: '2026-09-12',
      map: { x: 0.595, y: 0.674 },
    },
    question: {
      q: {
        el: 'Γιατί τα σκαλιά της μεγάλης ράμπας είναι τόσο χαμηλά και πλατιά;',
        en: 'Why are the steps of the big ramp so low and wide?',
      },
      answers: [
        { el: 'Για να ανεβαίνουν και καβαλάρηδες', en: 'So riders on horseback could climb it' },
        { el: 'Για να κατεβαίνουν οι πομπές με κεριά', en: 'So processions with candles could descend' },
        { el: 'Γιατί οι χτίστες ξέμειναν από πέτρες', en: 'Because the builders ran out of stone' },
        { el: 'Για να κυλάνε τα βαρέλια με το κρασί', en: 'So that barrels of wine could roll down' },
      ],
      explanation: {
        el:
          'Η ράμπα λέγεται cordonata. Τα σκαλιά της είναι τόσο απαλά που ένα άλογο τα ' +
          'ανεβαίνει χωρίς να σκοντάψει.',
        en:
          'The ramp is called the cordonata. Its steps are so gentle that a horse can walk ' +
          'up them without stumbling.',
      },
    },
  },

  // ---------------------------------------------------------- capitoline museums
  {
    id: 'rome-capitoline-museums',
    cityId: 'rome',
    emoji: '🐺',
    category: 'museum',
    difficulty: 2,

    name: { el: 'Μουσεία του Καπιτωλίου', en: 'The Capitoline Museums' },
    tagline: {
      el: 'Το παλαιότερο δημόσιο μουσείο του κόσμου, με μια λύκαινα στη μέση',
      en: 'The world’s oldest public museum, with a she-wolf at its heart',
    },
    story: {
      el:
        'Το 1471 ο Πάπας Σίξτος Δ΄ έκανε κάτι που δεν είχε κάνει κανείς πριν: χάρισε ' +
        'στον λαό της Ρώμης μερικά αρχαία χάλκινα αγάλματα και τα έβαλε να στέκονται σε ' +
        'ένα δημόσιο κτίριο, για να τα βλέπουν όλοι. Ανάμεσά τους ήταν η λύκαινα που ' +
        'ταΐζει τα δίδυμα και ένα αγόρι που βγάζει ένα αγκάθι από το πόδι του. Έτσι ' +
        'γεννήθηκε το πρώτο δημόσιο μουσείο του κόσμου, που άνοιξε επίσημα τις πόρτες του ' +
        'στους επισκέπτες το 1734. Σήμερα απλώνεται σε δύο παλάτια, το ένα απέναντι στο ' +
        'άλλο στην πλατεία του Μιχαήλ Άγγελου, ενωμένα με έναν υπόγειο διάδρομο που περνά ' +
        'κάτω από την πλατεία. Στην αυλή του πρώτου παλατιού σε περιμένει ένα κεφάλι ' +
        'δυόμισι μέτρων και ένα πόδι πιο ψηλό από εσένα: τα κομμάτια ενός αγάλματος του ' +
        'αυτοκράτορα Κωνσταντίνου που ήταν δώδεκα μέτρα ψηλό. Στο δεύτερο παλάτι κάθεται ' +
        'ένας μαρμάρινος θεός του ποταμού, πάνω στον οποίο οι Ρωμαίοι κολλούσαν κρυφά ' +
        'σατιρικά σημειώματα για τους άρχοντές τους.',
      en:
        'In 1471 Pope Sixtus IV did something nobody had done before: he gave the people ' +
        'of Rome a few ancient bronze statues and had them stand in a public building for ' +
        'everyone to see. Among them were the she-wolf feeding the twins and a boy pulling ' +
        'a thorn out of his foot. That was the birth of the first public museum in the ' +
        'world, which officially opened its doors to visitors in 1734. Today it fills two ' +
        'palaces facing each other across Michelangelo’s square, joined by an underground ' +
        'passage that runs beneath the paving. In the courtyard of the first palace a head ' +
        'two and a half metres tall and a stone foot taller than you are wait for you: ' +
        'pieces of a statue of the emperor Constantine that stood twelve metres high. In the second ' +
        'palace sits a marble river god on whom Romans used to pin anonymous jokes about ' +
        'their rulers.',
    },
    facts: [
      {
        el: 'Ξεκίνησε το 1471 με μια δωρεά χάλκινων αγαλμάτων από τον Πάπα Σίξτο Δ΄.',
        en: 'It began in 1471 with a gift of bronze statues from Pope Sixtus IV.',
      },
      {
        el: 'Άνοιξε στο κοινό το 1734, πριν από κάθε άλλο μουσείο στον κόσμο.',
        en: 'It opened to the public in 1734, before any other museum in the world.',
      },
      {
        el: 'Το αυθεντικό άγαλμα του Μάρκου Αυρήλιου φυλάγεται εδώ από το 1981.',
        en: 'The original statue of Marcus Aurelius has been kept here since 1981.',
      },
    ],
    location: {
      lat: 41.893,
      lng: 12.48281,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q64103', deltaM: 0 },
        { kind: 'osm', ref: 'way/123817455', deltaM: 14 },
      ],
      verifiedAt: '2026-09-12',
      note: 'Wikipedia carries no coordinate for the Palazzo dei Conservatori, so the grade is B on two sources. The point is the palace that holds the entrance, not the museum as an institution.',
      // From the venue's own page: museicapitolini.org — "piazza del Campidoglio 1", entrance in Palazzo dei Conservatori.
      findIt: {
        el: 'Η είσοδος είναι στην Piazza del Campidoglio 1, στο παλάτι δεξιά καθώς ανεβαίνεις τη μεγάλη ράμπα.',
        en: 'The way in is at Piazza del Campidoglio 1, in the palace on your right as you come up the big ramp.',
      },
      map: { x: 0.594, y: 0.681 },
    },
    question: {
      q: {
        el: 'Τι έκανε ο Πάπας Σίξτος Δ΄ το 1471 που κανείς δεν είχε κάνει πριν;',
        en: 'What did Pope Sixtus IV do in 1471 that nobody had done before?',
      },
      answers: [
        { el: 'Χάρισε αρχαία αγάλματα στον λαό', en: 'He gave ancient statues to the people' },
        { el: 'Έχτισε το πρώτο παλάτι στον λόφο', en: 'He built the first palace on the hill' },
        { el: 'Έβαλε τα αγάλματα σε γυάλινες βιτρίνες', en: 'He put the statues into glass cases' },
        { el: 'Ζωγράφισε την οροφή του μουσείου', en: 'He painted the ceiling of the museum' },
      ],
      explanation: {
        el:
          'Ως τότε τα αρχαία ανήκαν σε πάπες και πρίγκιπες. Αγάλματα που ανήκουν σε όλους ' +
          'και τα βλέπουν όλοι: αυτό είναι ένα μουσείο.',
        en:
          'Until then antiquities belonged to popes and princes. Statues owned by everyone ' +
          'and seen by everyone: that is what a museum is.',
      },
    },

    museum: {
      doorNote: {
        el: 'Η αυλή με τον γίγαντα είναι πριν από τις σκάλες. Μη βιαστείς να ανέβεις.',
        en: 'The courtyard with the giant comes before the stairs. Do not rush past it.',
      },
      rooms: [
        {
          id: 'rome-capitoline-museums-conservatori',
          emoji: '🦶',
          name: { el: 'Το Παλάτι των Conservatori', en: 'Palazzo dei Conservatori' },
          intro: {
            el:
              'Το πρώτο παλάτι είναι εκείνο που πήρε τα δώρα του Πάπα το 1471. Στην αυλή ' +
              'του κάθεται ένας γίγαντας σε κομμάτια, και στις αίθουσες από πάνω ζουν τα ' +
              'πιο διάσημα χάλκινα της Ρώμης: μια λύκαινα, ένα αγόρι με αγκάθι και ένας ' +
              'αυτοκράτορας που σώθηκε επειδή τον μπέρδεψαν με κάποιον άλλο.',
            en:
              'The first palace is the one that received the pope’s gifts in 1471. In its ' +
              'courtyard sits a giant in pieces, and in the rooms above live the most ' +
              'famous bronzes in Rome: a she-wolf, a boy with a thorn, and an emperor who ' +
              'survived because he was mistaken for somebody else.',
          },
          exhibits: [
            {
              id: 'rome-capitoline-museums-colossus-head',
              name: { el: 'Το κεφάλι του γίγαντα', en: 'The giant’s head' },
              blurb: {
                el:
                  'Γύρω στο 312 μ.Χ. ο αυτοκράτορας Κωνσταντίνος έστησε ένα άγαλμα του ' +
                  'εαυτού του δώδεκα μέτρα ψηλό, καθισμένο, μέσα σε μια τεράστια βασιλική ' +
                  'της Αγοράς. Μόνο το κεφάλι, τα χέρια και τα πόδια ήταν από μάρμαρο· το ' +
                  'σώμα ήταν τούβλα και ξύλο, μάλλον ντυμένα με μπρούντζο. Όταν το ξύλο ' +
                  'σάπισε, έμειναν τα μαρμάρινα κομμάτια. Τα βρήκαν το 1486 και τα έφεραν ' +
                  'εδώ. Το κεφάλι έχει ύψος δυόμισι μέτρα και το κάθε πόδι ξεπερνά τα δύο. ' +
                  'Το 2024 φτιάχτηκε ένα ολόκληρο αντίγραφο του αγάλματος, δεκατριών ' +
                  'μέτρων, στους κήπους δίπλα στο μουσείο.',
                en:
                  'Around AD 312 the emperor Constantine had a seated statue of himself made, ' +
                  'twelve metres tall, inside a huge basilica in the Forum. Only the head, ' +
                  'arms and legs were marble; the body was brick and wood, probably covered ' +
                  'in bronze. When the wood rotted, the marble pieces were what remained. ' +
                  'They were found in 1486 and brought here. The head is two and a half ' +
                  'metres tall and each foot is more than two metres long. In 2024 a ' +
                  'complete replica of the statue, thirteen metres high, was put up in the ' +
                  'gardens next to the museum.',
              },
              question: {
                q: {
                  el: 'Γιατί σώθηκαν μόνο το κεφάλι, τα χέρια και τα πόδια του αγάλματος;',
                  en: 'Why did only the head, arms and legs of the statue survive?',
                },
                answers: [
                  { el: 'Μόνο αυτά ήταν από μάρμαρο', en: 'Only those parts were marble' },
                  { el: 'Το υπόλοιπο το πήραν οι Βάνδαλοι', en: 'The Vandals carried the rest away' },
                  { el: 'Το σώμα έλιωσε σε μια πυρκαγιά', en: 'The body melted in a great fire' },
                  { el: 'Ο γλύπτης δεν πρόλαβε να τελειώσει', en: 'The sculptor never finished the rest' },
                ],
                explanation: {
                  el: 'Το σώμα ήταν τούβλα και ξύλο. Το ξύλο σαπίζει· το μάρμαρο περιμένει.',
                  en: 'The body was brick and wood. Wood rots; marble waits.',
                },
              },
            },
            {
              id: 'rome-capitoline-museums-she-wolf',
              name: { el: 'Η Λύκαινα του Καπιτωλίου', en: 'The Capitoline Wolf' },
              blurb: {
                el:
                  'Μια χάλκινη λύκαινα, 75 εκατοστά ψηλή, στέκεται με τα αυτιά τεντωμένα ' +
                  'ενώ δύο μωρά θηλάζουν από κάτω της. Τα μωρά είναι ο Ρωμύλος και ο Ρέμος ' +
                  'του θρύλου, και δεν ανήκουν στο ίδιο άγαλμα: προστέθηκαν γύρω στο 1471 ή ' +
                  'λίγο αργότερα. Για αιώνες όλοι πίστευαν ότι η λύκαινα ήταν ετρουσκική, ' +
                  'δυόμισι χιλιάδων ετών. Μετρήσεις με ραδιενεργό άνθρακα έδειξαν ότι ο ' +
                  'μπρούντζος χύθηκε πιθανότατα ανάμεσα στο 1021 και το 1153, δηλαδή τον ' +
                  'Μεσαίωνα. Οι επιστήμονες διαφωνούν ακόμα. Ό,τι κι αν ισχύει, είναι το ' +
                  'σύμβολο της πόλης, και ήταν ένα από τα πρώτα δώρα του Πάπα το 1471.',
                en:
                  'A bronze she-wolf, 75 centimetres tall, stands with her ears pricked while ' +
                  'two babies drink beneath her. The babies are Romulus and Remus from the ' +
                  'legend, and they do not belong to the same statue: they were added around ' +
                  '1471 or a little later. For centuries everyone believed the wolf was ' +
                  'Etruscan and two and a half thousand years old. Radiocarbon tests showed ' +
                  'the bronze was most likely cast between 1021 and 1153, in the Middle Ages. ' +
                  'Scholars still argue about it. Whichever is true, she is the symbol of ' +
                  'the city, and she was one of the pope’s first gifts in 1471.',
              },
              question: {
                q: {
                  el: 'Τι ανακάλυψαν οι επιστήμονες όταν μέτρησαν την ηλικία του μπρούντζου;',
                  en: 'What did scientists find when they measured the age of the bronze?',
                },
                answers: [
                  { el: 'Ότι μάλλον είναι μεσαιωνική', en: 'That it is probably medieval' },
                  { el: 'Ότι είναι ακόμα πιο παλιά από τη Ρώμη', en: 'That it is even older than Rome itself' },
                  { el: 'Ότι είναι φτιαγμένη από χρυσό', en: 'That it is actually made of gold' },
                  { el: 'Ότι την έφτιαξαν στην Ελλάδα', en: 'That it was cast in Greece' },
                ],
                explanation: {
                  el:
                    'Τα δείγματα δείχνουν χύτευση ανάμεσα στο 1021 και το 1153. Τα μωρά είναι ' +
                    'ακόμα νεότερα, από τον 15ο αιώνα.',
                  en:
                    'The samples point to a casting between 1021 and 1153. The babies are ' +
                    'younger still, from the 15th century.',
                },
              },
            },
            {
              id: 'rome-capitoline-museums-marcus-aurelius',
              name: { el: 'Ο χρυσός καβαλάρης', en: 'The golden rider' },
              blurb: {
                el:
                  'Αυτό είναι το αυθεντικό άγαλμα του Μάρκου Αυρήλιου, χάλκινο, 4,24 μέτρα ' +
                  'ψηλό, φτιαγμένο γύρω στο 175 μ.Χ. Κάποτε ήταν ολόκληρο επιχρυσωμένο, και ' +
                  'αν κοιτάξεις προσεκτικά βλέπεις ακόμα το χρυσάφι να γυαλίζει σε σημεία. ' +
                  'Από τα πολλά χάλκινα αγάλματα αυτοκρατόρων πάνω σε άλογα, μόνο αυτό ' +
                  'σώθηκε: τα άλλα τα έλιωσαν για το μέταλλο. Γλίτωσε επειδή για αιώνες ' +
                  'όλοι νόμιζαν ότι δείχνει τον Κωνσταντίνο, τον πρώτο χριστιανό αυτοκράτορα. ' +
                  'Στεκόταν στο Λατερανό ως το 1538, μετά στη μέση της πλατείας, και από το ' +
                  '1981 ζει εδώ μέσα, μακριά από τη βροχή. Έξω στέκεται ένα αντίγραφο.',
                en:
                  'This is the original statue of Marcus Aurelius, bronze, 4.24 metres tall, ' +
                  'made around AD 175. It was once gilded all over, and if you look closely ' +
                  'you can still see gold glinting in places. Of the many bronze emperors ' +
                  'on horseback, this is the only one that survived: the others were melted ' +
                  'down for their metal. It was spared because for centuries everyone ' +
                  'thought it showed Constantine, the first Christian emperor. It stood at ' +
                  'the Lateran until 1538, then in the middle of the square, and since 1981 ' +
                  'it has lived in here, out of the rain. A copy stands outside.',
              },
              question: {
                q: {
                  el: 'Γιατί δεν έλιωσαν αυτό το άγαλμα όπως τα άλλα;',
                  en: 'Why was this statue not melted down like the others?',
                },
                answers: [
                  { el: 'Το πέρασαν για άλλον αυτοκράτορα', en: 'It was mistaken for another emperor' },
                  { el: 'Ήταν θαμμένο βαθιά μέσα στη γη', en: 'It was buried deep underground' },
                  { el: 'Ήταν πολύ βαρύ για να το μετακινήσουν', en: 'It was too heavy to be moved anywhere' },
                  { el: 'Το φύλαγαν οι Ελβετοί Φρουροί', en: 'The Swiss Guard kept watch over it' },
                ],
                explanation: {
                  el:
                    'Όλοι νόμιζαν ότι είναι ο Κωνσταντίνος, ο πρώτος χριστιανός αυτοκράτορας, ' +
                    'και κανείς δεν τολμούσε να τον λιώσει.',
                  en:
                    'Everyone believed it was Constantine, the first Christian emperor, and ' +
                    'nobody dared melt him.',
                },
              },
            },
            {
              id: 'rome-capitoline-museums-spinario',
              name: { el: 'Το αγόρι με το αγκάθι', en: 'The boy with the thorn' },
              blurb: {
                el:
                  'Ένα χάλκινο αγόρι κάθεται σε έναν βράχο, έχει βάλει το ένα πόδι πάνω στο ' +
                  'άλλο γόνατο και σκύβει να βγάλει ένα αγκάθι από την πατούσα του. Είναι ' +
                  'ένα από τα ελάχιστα αρχαία χάλκινα που δεν χάθηκαν ποτέ: όλο τον ' +
                  'Μεσαίωνα στεκόταν μπροστά στο παλάτι του Λατερανού, και ταξιδιώτες το ' +
                  'περιγράφουν ήδη από τη δεκαετία του 1160. Μια παλιά ιστορία έλεγε ότι ' +
                  'ήταν ένας βοσκός που έτρεξε να φέρει ένα μήνυμα στη Γερουσία και κάθισε ' +
                  'να βγάλει το αγκάθι μόνο αφού το παρέδωσε. Είναι ωραία ιστορία, αλλά ' +
                  'κανείς δεν την πιστεύει πια. Οι γλύπτες της Αναγέννησης το αντέγραφαν ' +
                  'ξανά και ξανά.',
                en:
                  'A bronze boy sits on a rock, one foot resting on the other knee, bending ' +
                  'down to pull a thorn out of his sole. It is one of the very few ancient ' +
                  'bronzes that was never lost: all through the Middle Ages it stood in ' +
                  'front of the Lateran palace, and travellers describe it as early as the ' +
                  '1160s. An old story said he was a shepherd boy who ran to bring a ' +
                  'message to the Senate and only sat down to remove the thorn after he had ' +
                  'delivered it. It is a lovely story, but nobody believes it any more. ' +
                  'Renaissance sculptors copied him again and again.',
              },
              question: {
                q: {
                  el: 'Τι κάνει το χάλκινο αγόρι;',
                  en: 'What is the bronze boy doing?',
                },
                answers: [
                  { el: 'Βγάζει ένα αγκάθι από το πόδι του', en: 'Pulling a thorn out of his foot' },
                  { el: 'Δένει το σανδάλι του για τον αγώνα', en: 'Tying his sandal for a race' },
                  { el: 'Πλένει τα πόδια του σε ένα ποτάμι', en: 'Washing his feet in a river' },
                  { el: 'Κρύβει ένα νόμισμα στην πατούσα του', en: 'Hiding a coin under his sole' },
                ],
                explanation: {
                  el: 'Στα ιταλικά τον λένε Spinario, από τη λέξη spina, που σημαίνει αγκάθι.',
                  en: 'In Italian he is called the Spinario, from spina, the word for thorn.',
                },
              },
            },
          ],
        },
        {
          id: 'rome-capitoline-museums-palazzo-nuovo',
          emoji: '🗿',
          name: { el: 'Το Νέο Παλάτι', en: 'Palazzo Nuovo' },
          intro: {
            el:
              'Περνάς κάτω από την πλατεία με έναν υπόγειο διάδρομο και βγαίνεις στο ' +
              'απέναντι παλάτι, που χτίστηκε το 1645 για να μοιάζει με το πρώτο. Εδώ τα ' +
              'αγάλματα είναι μαρμάρινα: ένας πολεμιστής που πέφτει, μια θεά που ' +
              'ντρέπεται, και ένας θεός ποταμού που «μιλούσε».',
            en:
              'You cross under the square through an underground passage and come out in ' +
              'the palace opposite, built in 1645 to match the first. Here the statues are ' +
              'marble: a warrior falling, a goddess feeling shy, and a river god who ' +
              '“talked”.',
          },
          exhibits: [
            {
              id: 'rome-capitoline-museums-dying-gaul',
              name: { el: 'Ο Γαλάτης που πέφτει', en: 'The Dying Gaul' },
              blurb: {
                el:
                  'Ένας πολεμιστής έχει πέσει στην ασπίδα του και στηρίζεται σε ένα χέρι, ' +
                  'πληγωμένος. Δίπλα του κείτονται ένα σπασμένο σπαθί και μια σάλπιγγα. ' +
                  'Είναι Γαλάτης, δηλαδή Κέλτης: το καταλαβαίνεις από το στριφτό μεταλλικό ' +
                  'κολιέ στον λαιμό του, το μουστάκι χωρίς γένια και τα ανακατεμένα μαλλιά. ' +
                  'Το άγαλμα είναι μαρμάρινο αντίγραφο ενός χάλκινου που δεν σώζεται, ' +
                  'φτιαγμένου στην Πέργαμο της Μικράς Ασίας γύρω στο 230 π.Χ. για να ' +
                  'γιορτάσει μια νίκη πάνω στους Γαλάτες. Το 1797 ο Ναπολέων το πήρε στο ' +
                  'Παρίσι· γύρισε στη Ρώμη το 1816. Ο ποιητής Βύρων έγραψε ποίημα γι’ αυτό.',
                en:
                  'A warrior has fallen onto his shield and props himself up on one arm, ' +
                  'wounded. Beside him lie a broken sword and a trumpet. He is a Gaul, a ' +
                  'Celt: you can tell from the twisted metal ring around his neck, the ' +
                  'moustache with no beard and the tangled hair. The statue is a marble copy ' +
                  'of a lost bronze made in Pergamon, in Asia Minor, around 230 BC to ' +
                  'celebrate a victory over the Gauls. In 1797 Napoleon took it to Paris; it ' +
                  'came back to Rome in 1816. The poet Byron wrote a poem about it.',
              },
              question: {
                q: {
                  el: 'Από τι καταλαβαίνεις ότι ο πολεμιστής είναι Γαλάτης;',
                  en: 'How can you tell the warrior is a Gaul?',
                },
                answers: [
                  { el: 'Από το στριφτό κολιέ και το μουστάκι', en: 'From the twisted neck ring and moustache' },
                  { el: 'Από τη σημαία που κρατάει στο χέρι του', en: 'From the flag he is holding in his hand' },
                  { el: 'Από το κράνος με τα φτερά αετού', en: 'From the helmet with the eagle feathers' },
                  { el: 'Από την επιγραφή στην ασπίδα του', en: 'From the inscription on his shield' },
                ],
                explanation: {
                  el:
                    'Το κολιέ λέγεται torc και το φορούσαν οι Κέλτες πολεμιστές. Οι Ρωμαίοι ' +
                    'και οι Έλληνες δεν φορούσαν τέτοιο.',
                  en:
                    'The ring is called a torc and Celtic warriors wore it. Romans and Greeks ' +
                    'wore nothing like it.',
                },
              },
            },
            {
              id: 'rome-capitoline-museums-marforio',
              name: { el: 'Ο Μαρφόριο', en: 'Marforio' },
              blurb: {
                el:
                  'Στην αυλή ξαπλώνει ένας τεράστιος μαρμάρινος άντρας με γένια, ένας θεός ' +
                  'ποταμού ή ο Ωκεανός, από τον 1ο αιώνα μ.Χ. Βρέθηκε μαζί με μια λεκάνη που ' +
                  'έγραφε «mare in foro», θάλασσα στην Αγορά, και από εκεί βγήκε το όνομά ' +
                  'του. Τον 16ο και 17ο αιώνα οι Ρωμαίοι δεν τολμούσαν να κριτικάρουν ' +
                  'φωναχτά τους άρχοντές τους, οπότε έγραφαν σατιρικά στιχάκια σε χαρτάκια ' +
                  'και τα κολλούσαν τη νύχτα πάνω σε αγάλματα. Ο Μαρφόριο ήταν ένα από αυτά ' +
                  'τα «ομιλούντα αγάλματα», και συχνά «απαντούσε» σε ένα άλλο, τον ' +
                  'Πασκουίνο. Από το 1592 είναι σιντριβάνι, και από το 1645 ζει σε αυτή ' +
                  'την αυλή.',
                en:
                  'In the courtyard lies an enormous bearded marble man, a river god or ' +
                  'Oceanus, from the 1st century AD. He was found with a basin inscribed ' +
                  '“mare in foro”, sea in the Forum, and that is where his name comes from. ' +
                  'In the 16th and 17th centuries Romans did not dare criticise their rulers ' +
                  'out loud, so they wrote mocking verses on scraps of paper and pinned them ' +
                  'to statues at night. Marforio was one of these “talking statues”, and he ' +
                  'often “answered” another one, Pasquino. He has been a fountain since ' +
                  '1592, and has lived in this courtyard since 1645.',
              },
              question: {
                q: {
                  el: 'Γιατί λένε τον Μαρφόριο «ομιλούν άγαλμα»;',
                  en: 'Why is Marforio called a “talking statue”?',
                },
                answers: [
                  { el: 'Του κολλούσαν σημειώματα με πειράγματα', en: 'People pinned mocking notes on him' },
                  { el: 'Είχε κρυμμένο σωλήνα μέσα του για τη φωνή', en: 'He had a hidden pipe inside him for a voice' },
                  { el: 'Το νερό του κάνει ήχο σαν ομιλία', en: 'His water makes a sound like speech' },
                  { el: 'Ένας ιερέας μιλούσε από πίσω του', en: 'A priest used to speak from behind him' },
                ],
                explanation: {
                  el:
                    'Όταν δεν μπορείς να πεις κάτι δυνατά, το γράφεις σε ένα χαρτάκι και το ' +
                    'αφήνεις να το «πει» ένα άγαλμα.',
                  en:
                    'When you cannot say a thing out loud, you write it on a scrap of paper ' +
                    'and let a statue “say” it for you.',
                },
              },
            },
            {
              id: 'rome-capitoline-museums-capitoline-venus',
              name: { el: 'Η Αφροδίτη του Καπιτωλίου', en: 'The Capitoline Venus' },
              blurb: {
                el:
                  'Μια μαρμάρινη θεά, λίγο ψηλότερη από άνθρωπο, 1,93 μέτρα, στέκεται σαν ' +
                  'να τη βρήκες ξαφνικά την ώρα του μπάνιου: το ένα χέρι σκεπάζει το στήθος ' +
                  'και το άλλο το σώμα της. Είναι ρωμαϊκό αντίγραφο του 2ου αιώνα μ.Χ., ' +
                  'φτιαγμένο πάνω σε ένα ελληνικό πρότυπο που κατάγεται από τον γλύπτη ' +
                  'Πραξιτέλη. Βρέθηκε στον λόφο Βιμινάλη ανάμεσα στο 1670 και το 1676 και ' +
                  'το 1752 ο Πάπας Βενέδικτος ΙΔ΄ την αγόρασε και τη χάρισε στο μουσείο. Ο ' +
                  'Ναπολέων την πήρε κι αυτή στο Παρίσι· γύρισε το 1816. Έχει δικό της ' +
                  'μικρό δωμάτιο, για να τη βλέπεις από όλες τις πλευρές.',
                en:
                  'A marble goddess, a little taller than a person at 1.93 metres, stands as ' +
                  'if you had walked in on her bath: one hand covers her chest and the other ' +
                  'her body. She is a Roman copy from the 2nd century AD, made after a Greek ' +
                  'model that goes back to the sculptor Praxiteles. She was found on the ' +
                  'Viminal hill between 1670 and 1676, and in 1752 Pope Benedict XIV bought ' +
                  'her and gave her to the museum. Napoleon took her to Paris too; she ' +
                  'returned in 1816. She has a small room of her own, so that you can walk ' +
                  'all the way round her.',
              },
              question: {
                q: {
                  el: 'Γιατί η θεά έχει δικό της δωμάτιο στο μουσείο;',
                  en: 'Why does the goddess have a room of her own in the museum?',
                },
                answers: [
                  { el: 'Για να τη βλέπεις από παντού', en: 'So you can see her from every side' },
                  { el: 'Γιατί το μάρμαρο θέλει σκοτάδι', en: 'Because the marble needs the dark' },
                  { el: 'Γιατί δεν χωρούσε στην αυλή', en: 'Because she did not fit in the courtyard' },
                  { el: 'Για να μη μαλώνει με τον Μαρφόριο', en: 'So she would not quarrel with Marforio' },
                ],
                explanation: {
                  el:
                    'Ένα άγαλμα σαν αυτό είναι φτιαγμένο για να το περπατάς γύρω γύρω. Στον ' +
                    'τοίχο θα έχανες τη μισή του πλάτη.',
                  en:
                    'A statue like this is made to be walked around. Against a wall you would ' +
                    'lose half of her back.',
                },
              },
            },
          ],
        },
      ],
      riddles: [
        {
          id: 'rome-capitoline-museums-riddle-1',
          difficulty: 1,
          prompt: {
            el:
              'Δεν είμαι η μητέρα τους, αλλά τους δίνω γάλα. Είμαι από μπρούντζο και ' +
              'εκείνοι είναι πολύ νεότεροι από εμένα, όσο κι αν μοιάζουμε μια οικογένεια.',
            en:
              'I am not their mother, but I give them milk. I am bronze, and they are far ' +
              'younger than I am, however much we look like one family.',
          },
          hint: {
            el: 'Στέκομαι με τα τέσσερα και έχω αυτιά τεντωμένα.',
            en: 'I stand on four legs with my ears pricked.',
          },
          answerExhibitId: 'rome-capitoline-museums-she-wolf',
        },
        {
          id: 'rome-capitoline-museums-riddle-2',
          difficulty: 1,
          prompt: {
            el:
              'Κάποτε είχα σώμα δώδεκα μέτρων από τούβλα και ξύλο. Το σώμα σάπισε και έμεινα ' +
              'στην αυλή, να σε κοιτάζω από ψηλά χωρίς λαιμό.',
            en:
              'I once had a body twelve metres tall, made of brick and wood. The body rotted ' +
              'and I was left in the courtyard, looking down at you with no neck.',
          },
          hint: {
            el: 'Δίπλα μου είναι ένα πόδι πιο ψηλό από εσένα.',
            en: 'Next to me is a foot taller than you are.',
          },
          answerExhibitId: 'rome-capitoline-museums-colossus-head',
        },
        {
          id: 'rome-capitoline-museums-riddle-3',
          difficulty: 2,
          prompt: {
            el:
              'Ξαπλώνω στην αυλή εδώ και τετρακόσια χρόνια και το νερό τρέχει από κάτω μου. ' +
              'Τη νύχτα οι άνθρωποι μου κολλούσαν χαρτάκια, κι έτσι «μιλούσα» εγώ αντί γι’ ' +
              'αυτούς.',
            en:
              'I have been lying in the courtyard for four hundred years with water running ' +
              'below me. At night people pinned scraps of paper on me, so I “spoke” instead ' +
              'of them.',
          },
          hint: {
            el: 'Έχω γένια και το όνομά μου έχει μέσα τη θάλασσα.',
            en: 'I have a beard, and my name has the sea inside it.',
          },
          answerExhibitId: 'rome-capitoline-museums-marforio',
        },
      ],
    },
  },

  // --------------------------------------------------------- bocca della verita
  {
    id: 'rome-bocca-della-verita',
    cityId: 'rome',
    emoji: '🖐️',
    category: 'landmark',
    difficulty: 1,

    name: { el: 'Το Στόμα της Αλήθειας', en: 'The Mouth of Truth' },
    tagline: {
      el: 'Ένα πέτρινο πρόσωπο που, λένε, δαγκώνει τους ψεύτες',
      en: 'A stone face that, they say, bites liars',
    },
    story: {
      el:
        'Κάτω από τη στοά μιας παλιάς εκκλησίας στέκεται ένας μαρμάρινος δίσκος με ' +
        'πρόσωπο: μάτια, μύτη και ένα στόμα ορθάνοιχτο. Ζυγίζει περίπου 1.300 κιλά. ' +
        'Μάλλον δείχνει τον Ωκεανό, τον θεό της θάλασσας, με γένια σαν κύματα. Κανείς δεν ' +
        'ξέρει σίγουρα τι ήταν στην αρχαιότητα. Τα μάτια και το στόμα είναι τρύπες που ' +
        'περνούν ως την άλλη πλευρά, γι’ αυτό πολλοί πιστεύουν ότι ήταν καπάκι υπονόμου ' +
        'σε έναν κοντινό ναό που είχε άνοιγμα στη στέγη και έμπαινε μέσα η βροχή. Τον ' +
        'Μεσαίωνα γεννήθηκε ο θρύλος: αν βάλεις το χέρι στο στόμα και πεις ψέμα, το ' +
        'στόμα κλείνει και σου το δαγκώνει. Τον 17ο αιώνα ο δίσκος στήθηκε εκεί που τον ' +
        'βλέπεις τώρα. Η εκκλησία έχει ελληνική ιστορία: εδώ ζούσαν Έλληνες έμποροι πριν ' +
        'από χίλια διακόσια χρόνια, και το όνομά της, Cosmedin, βγαίνει από την ελληνική ' +
        'λέξη «κόσμος», που σημαίνει στολίδι. Ακόμα και σήμερα λειτουργεί με ελληνικό ' +
        'τυπικό. Το 1953 ο δίσκος έγινε διάσημος σε όλο τον κόσμο από μια ταινία, όπου ' +
        'ένας ηθοποιός έκανε ότι του κόπηκε το χέρι.',
      en:
        'Under the porch of an old church stands a marble disc with a face on it: eyes, a ' +
        'nose and a wide-open mouth. It weighs about 1,300 kilograms. It probably shows ' +
        'Oceanus, the god of the sea, with a beard like waves. Nobody knows for certain ' +
        'what it was in ancient times. The eyes and mouth are holes that go right ' +
        'through, which is why many people think it was a drain cover in a nearby temple ' +
        'that had an opening in its roof and let the rain in. In the Middle Ages the ' +
        'legend was born: put your hand in the mouth, tell a lie, and the mouth snaps ' +
        'shut on it. In the 17th century the disc was set up where you see it now. The ' +
        'church has a Greek story: Greek merchants lived here twelve hundred years ago, ' +
        'and its name, Cosmedin, comes from the Greek word kosmos, meaning ornament. It ' +
        'still holds services in the Greek rite today. In 1953 the disc became famous all ' +
        'over the world through a film in which an actor pretended his hand had been ' +
        'bitten off.',
    },
    facts: [
      {
        el: 'Ο μαρμάρινος δίσκος ζυγίζει περίπου 1.300 κιλά.',
        en: 'The marble disc weighs about 1,300 kilograms.',
      },
      {
        el: 'Το καμπαναριό της εκκλησίας έχει επτά ορόφους και στέκεται από τον 12ο αιώνα.',
        en: 'The church’s bell tower has seven storeys and has stood since the 12th century.',
      },
      {
        el: 'Η γειτονιά λεγόταν Ripa Graeca, η Ελληνική Όχθη, από τους Έλληνες που ζούσαν εκεί.',
        en: 'The neighbourhood was called Ripa Graeca, the Greek Bank, after the Greeks who lived there.',
      },
    ],
    location: {
      lat: 41.88806,
      lng: 12.48167,
      anchor: 'centroid',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q729490', deltaM: 0 },
        { kind: 'osm', ref: 'node/497186177', deltaM: 24 },
        { kind: 'wikipedia', ref: 'Bocca della Verità', deltaM: 1 },
      ],
      verifiedAt: '2026-09-12',
      map: { x: 0.575, y: 0.786 },
    },
    question: {
      q: {
        el: 'Γιατί πιστεύουν πολλοί ότι ο δίσκος ήταν καπάκι υπονόμου;',
        en: 'Why do many people think the disc was a drain cover?',
      },
      answers: [
        { el: 'Τα μάτια και το στόμα είναι τρύπες', en: 'The eyes and mouth are holes' },
        { el: 'Βρέθηκε μέσα σε έναν αρχαίο υπόνομο', en: 'It was found inside an ancient sewer' },
        { el: 'Έχει σκαλισμένη τη λέξη «νερό»', en: 'It has the word “water” carved on it' },
        { el: 'Είναι από το ίδιο υλικό με τους σωλήνες', en: 'It is made of the same stuff as pipes' },
      ],
      explanation: {
        el:
          'Τρύπες που περνούν από τη μία πλευρά στην άλλη αφήνουν το νερό να φεύγει. Ένα ' +
          'πρόσωπο σε τοίχο δεν τις χρειάζεται.',
        en:
          'Holes that go right through let water drain away. A face on a wall would not ' +
          'need them.',
      },
    },
  },

  // ------------------------------------------------------------- circus maximus
  {
    id: 'rome-circus-maximus',
    cityId: 'rome',
    emoji: '🐎',
    category: 'sport',
    difficulty: 1,

    name: { el: 'Μέγας Ιππόδρομος', en: 'The Circus Maximus' },
    tagline: {
      el: 'Το μεγαλύτερο στάδιο της ιστορίας είναι σήμερα ένα πάρκο',
      en: 'The biggest stadium in history is now a park',
    },
    story: {
      el:
        'Ανάμεσα στον λόφο του Παλατίνου και στον Αβεντίνο απλώνεται μια μακρόστενη ' +
        'κοιλάδα με γρασίδι. Δεν φαίνεται πολύ, αλλά εδώ ήταν ο μεγαλύτερος χώρος ' +
        'θεάματος που έφτιαξε ποτέ η Ρώμη: 621 μέτρα μακρύς, 118 πλατύς, με κερκίδες για ' +
        'πάνω από 150.000 θεατές. Τρεις φορές περισσότερους από το Κολοσσαίο. Εδώ ' +
        'γίνονταν αρματοδρομίες: τέσσερα άλογα τραβούσαν ένα ελαφρύ άρμα, και οι ' +
        'αρματηλάτες έτρεχαν επτά γύρους γύρω από ένα μακρύ χαμηλό τείχος στη μέση. Για ' +
        'να ξέρουν όλοι πόσοι γύροι μένουν, πάνω στο τείχος στέκονταν επτά μεγάλα ' +
        'μαρμάρινα αυγά και, από το 33 π.Χ., επτά χάλκινα δελφίνια· σε κάθε γύρο ' +
        'κατέβαζαν ένα. Στο ίδιο τείχος ο Αύγουστος έστησε έναν αιγυπτιακό οβελίσκο, που ' +
        'σήμερα στέκεται στην Piazza del Popolo. Οι τελευταίοι αγώνες έγιναν το 549 μ.Χ. ' +
        'Μετά η κοιλάδα άδειασε, και σήμερα είναι ένα δημόσιο πάρκο όπου οι Ρωμαίοι ' +
        'τρέχουν, βγάζουν βόλτα τον σκύλο τους και βλέπουν συναυλίες, ακριβώς εκεί που ' +
        'έτρεχαν τα άρματα.',
      en:
        'Between the Palatine and the Aventine hills lies a long grassy valley. It does ' +
        'not look like much, but this was the biggest entertainment venue Rome ever ' +
        'built: 621 metres long, 118 wide, with seats for more than 150,000 people. Three ' +
        'times the crowd of the Colosseum. Chariot races were held here: four horses ' +
        'pulled a light chariot, and the drivers ran seven laps around a long, low wall ' +
        'down the middle. So that everyone knew how many laps were left, seven big marble ' +
        'eggs stood on that wall and, from 33 BC, seven bronze dolphins too; one was ' +
        'lowered after each lap. On the same wall Augustus put up an Egyptian obelisk, ' +
        'which now stands in the Piazza del Popolo. The last races were held in AD 549. ' +
        'Then the valley emptied, and today it is a public park where Romans jog, walk ' +
        'their dogs and go to concerts, right where the chariots used to run.',
    },
    facts: [
      {
        el: 'Ήταν 621 μέτρα μακρύς και 118 πλατύς, με θέσεις για πάνω από 150.000 θεατές.',
        en: 'It was 621 metres long and 118 wide, with room for more than 150,000 spectators.',
      },
      {
        el: 'Ένας αγώνας είχε επτά γύρους, και τους μετρούσαν με αυγά και δελφίνια.',
        en: 'A race was seven laps long, counted off with eggs and dolphins.',
      },
      {
        el: 'Οι τελευταίοι γνωστοί αγώνες έγιναν το 549 μ.Χ.',
        en: 'The last known races were held in AD 549.',
      },
    ],
    location: {
      lat: 41.8859,
      lng: 12.4857,
      anchor: 'area',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q207808', deltaM: 0 },
        { kind: 'osm', ref: 'relation/11384819', deltaM: 11 },
        { kind: 'wikipedia', ref: 'Circus Maximus', deltaM: 0 },
      ],
      verifiedAt: '2026-09-12',
      map: { x: 0.64, y: 0.832 },
    },
    question: {
      q: {
        el: 'Πώς ήξεραν οι θεατές πόσοι γύροι έμεναν στον αγώνα;',
        en: 'How did the crowd know how many laps were left in a race?',
      },
      answers: [
        { el: 'Κατέβαζαν ένα αυγό ή δελφίνι σε κάθε γύρο', en: 'An egg or a dolphin was lowered each lap' },
        { el: 'Ένας κήρυκας φώναζε τον αριθμό', en: 'A herald shouted out the number each time' },
        { el: 'Άναβαν μια φωτιά για κάθε γύρο που έμενε', en: 'A fire was lit for every lap remaining' },
        { el: 'Άλλαζαν τα χρώματα στις σημαίες', en: 'The colours of the flags were changed' },
      ],
      explanation: {
        el:
          'Επτά αυγά και επτά δελφίνια στέκονταν πάνω στο τείχος της μέσης. Ένα κατέβαινε ' +
          'σε κάθε γύρο, και το έβλεπες από παντού.',
        en:
          'Seven eggs and seven dolphins stood on the central wall. One came down every ' +
          'lap, and you could see it from anywhere in the stands.',
      },
    },
  },

  // -------------------------------------------------------------- orange garden
  {
    id: 'rome-orange-garden',
    cityId: 'rome',
    emoji: '🍊',
    category: 'nature',
    difficulty: 1,

    name: { el: 'Ο Κήπος με τις Πορτοκαλιές', en: 'The Orange Garden' },
    tagline: {
      el: 'Μια βεράντα πάνω από τη Ρώμη, και μια κλειδαρότρυπα δίπλα της',
      en: 'A terrace above Rome, with a keyhole next door',
    },
    story: {
      el:
        'Στην κορυφή του λόφου Αβεντίνου, εκεί όπου η οικογένεια Savelli είχε χτίσει ένα ' +
        'κάστρο γύρω στο 1285, υπάρχει σήμερα ένας μικρός κήπος γεμάτος νεραντζιές. Τον ' +
        'σχεδίασε το 1932 ο αρχιτέκτονας Raffaele De Vico, ο ίδιος που έφτιαξε το σπίτι ' +
        'των ερπετών στον ζωολογικό κήπο της πόλης. Ένας ίσιος διάδρομος ανάμεσα στα ' +
        'δέντρα οδηγεί σε μια βεράντα, και από εκεί βλέπεις όλη τη Ρώμη απλωμένη: τον ' +
        'ποταμό, τις στέγες, τους θόλους, και στο βάθος τον μεγαλύτερο θόλο από όλους, ' +
        'του Αγίου Πέτρου. Στην είσοδο του κήπου υπάρχει μια βρύση με ένα μαρμάρινο ' +
        'πρόσωπο του 1593, που ταξίδεψε σε τέσσερα διαφορετικά σημεία της πόλης πριν ' +
        'σταματήσει εδώ. Λίγα βήματα πιο πέρα, στην ήσυχη πλατεία που σχεδίασε ο ' +
        'Piranesi το 1765, μια πράσινη πόρτα κρύβει το πιο διάσημο μυστικό του λόφου: ' +
        'σκύψε και κοίτα μέσα από την κλειδαρότρυπα. Στο τέλος ενός διαδρόμου από ' +
        'κυπαρίσσια, ακριβώς στη μέση, στέκεται ο θόλος του Αγίου Πέτρου, σαν να τον ' +
        'τοποθέτησαν εκεί επίτηδες.',
      en:
        'On top of the Aventine hill, where the Savelli family built a castle around 1285, ' +
        'there is now a small garden full of bitter orange trees. It was laid out in 1932 ' +
        'by the architect Raffaele De Vico, the same man who designed the reptile house ' +
        'at the city zoo. A straight path between the trees leads to a terrace, and from ' +
        'there you see the whole of Rome spread out: the river, the roofs, the domes, and ' +
        'in the distance the biggest dome of all, St Peter’s. At the garden gate is a ' +
        'fountain with a marble face from 1593 that moved to four different spots in the ' +
        'city before it settled here. A few steps further on, in the quiet square that ' +
        'Piranesi designed in 1765, a green door hides the hill’s most famous secret: ' +
        'bend down and look through the keyhole. At the end of an avenue of cypresses, ' +
        'exactly in the middle, stands the dome of St Peter’s, as if somebody had placed ' +
        'it there on purpose.',
    },
    facts: [
      {
        el: 'Ο κήπος φτιάχτηκε το 1932 και έχει έκταση περίπου 7.800 τετραγωνικά μέτρα.',
        en: 'The garden was laid out in 1932 and covers about 7,800 square metres.',
      },
      {
        el: 'Τα δέντρα του είναι νεραντζιές, δηλαδή πικρές πορτοκαλιές.',
        en: 'Its trees are bitter oranges, not sweet ones.',
      },
      {
        el: 'Η πλατεία με την κλειδαρότρυπα σχεδιάστηκε από τον Piranesi το 1765.',
        en: 'The square with the keyhole was designed by Piranesi in 1765.',
      },
    ],
    location: {
      lat: 41.8851,
      lng: 12.4804,
      anchor: 'viewpoint',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q3763895', deltaM: 0 },
        { kind: 'osm', ref: 'relation/8437974', deltaM: 12 },
        { kind: 'wikipedia', ref: 'Orange Garden, Rome', deltaM: 0 },
      ],
      verifiedAt: '2026-09-12',
      map: { x: 0.555, y: 0.849 },
    },
    question: {
      q: {
        el: 'Τι βλέπεις μέσα από την κλειδαρότρυπα της πράσινης πόρτας;',
        en: 'What do you see through the keyhole in the green door?',
      },
      answers: [
        { el: 'Τον θόλο του Αγίου Πέτρου', en: 'The dome of St Peter’s' },
        { el: 'Το Κολοσσαίο από ψηλά', en: 'The Colosseum from above' },
        { el: 'Έναν κρυφό κήπο με σιντριβάνι', en: 'A hidden garden with a fountain' },
        { el: 'Τον ποταμό Τίβερη και μια γέφυρα', en: 'The river Tiber and a bridge' },
      ],
      explanation: {
        el:
          'Ο διάδρομος από κυπαρίσσια είναι κομμένος έτσι ώστε ο θόλος να κάθεται ακριβώς ' +
          'στη μέση, σαν σε κορνίζα.',
        en:
          'The avenue of cypresses is clipped so that the dome sits exactly in the middle, ' +
          'as if in a picture frame.',
      },
    },
  },

  // ------------------------------------------------------------------- pantheon
  {
    id: 'rome-pantheon',
    cityId: 'rome',
    emoji: '🌧️',
    category: 'landmark',
    difficulty: 2,

    name: { el: 'Πάνθεον', en: 'The Pantheon' },
    tagline: {
      el: 'Ένας θόλος με μάτι ανοιχτό στον ουρανό, δύο χιλιάδες χρόνων',
      en: 'A two-thousand-year-old dome with an eye open to the sky',
    },
    story: {
      el:
        'Το όνομα είναι ελληνικό, «πάντων των θεών», γιατί ο ναός ήταν αφιερωμένος σε ' +
        'όλους τους θεούς μαζί. Τον πρώτο τον έχτισε ο Αγρίππας στα χρόνια του Αυγούστου· ' +
        'το κτίριο που βλέπεις είναι του αυτοκράτορα Αδριανού, γύρω στο 126 μ.Χ., που ' +
        'άφησε στην πρόσοψη το όνομα του Αγρίππα και όχι το δικό του. Οι δεκαέξι κολόνες ' +
        'της εισόδου είναι από γρανίτη της Αιγύπτου, η καθεμιά ένα μονοκόμματο κομμάτι ' +
        '11,9 μέτρων και 60 τόνων, που ταξίδεψε με πλοίο. Μέσα, ο θόλος έχει διάμετρο ' +
        '43,3 μέτρα και ακριβώς το ίδιο ύψος, οπότε μια τεράστια μπάλα θα χωρούσε ' +
        'ακριβώς. Είναι ακόμα ο μεγαλύτερος θόλος από σκυρόδεμα χωρίς σίδερο στον κόσμο. ' +
        'Οι μηχανικοί τον έκαναν 6,4 μέτρα χοντρό στη βάση και μόνο 1,2 στην κορυφή, με ' +
        'ελαφρόπετρα ψηλά για να μη βαραίνει. Στο κέντρο του ανοίγει ένα μάτι χωρίς ' +
        'τζάμι: από εκεί μπαίνει ο ήλιος σαν προβολέας, και όταν βρέχει, η βροχή πέφτει ' +
        'στο πάτωμα, που έχει κλίση και τρύπες για να φεύγει το νερό. Το 609 ο ναός ' +
        'έγινε εκκλησία, και γι’ αυτό δεν του πήραν ποτέ τις πέτρες. Εδώ είναι θαμμένος ' +
        'ο ζωγράφος Ραφαήλ.',
      en:
        'The name is Greek, “of all the gods”, because the temple was dedicated to every ' +
        'god at once. The first one was built by Agrippa in the time of Augustus; the ' +
        'building you see is the emperor Hadrian’s, from around AD 126, and he left ' +
        'Agrippa’s name on the front instead of his own. The sixteen columns of the porch ' +
        'are Egyptian granite, each a single piece 11.9 metres tall and 60 tonnes heavy, ' +
        'that came by ship. Inside, the dome is 43.3 metres across and exactly as tall, ' +
        'so a giant ball would fit inside it perfectly. It is still the largest ' +
        'unreinforced concrete dome in the world. The engineers made it 6.4 metres thick ' +
        'at the base and only 1.2 at the top, with pumice up high to keep it light. In ' +
        'the centre opens an eye with no glass: sunlight comes through it like a ' +
        'spotlight, and when it rains, the rain falls on a floor that slopes and has ' +
        'holes to carry the water away. In 609 the temple became a church, which is why ' +
        'nobody ever took its stones. The painter Raphael is buried here.',
    },
    facts: [
      {
        el: 'Ο θόλος έχει διάμετρο 43,3 μέτρα και ακριβώς το ίδιο ύψος ως το μάτι.',
        en: 'The dome is 43.3 metres wide and exactly as tall, floor to eye.',
      },
      {
        el: 'Κάθε κολόνα της εισόδου είναι ένα κομμάτι γρανίτη 11,9 μέτρων, 60 τόνων.',
        en: 'Each porch column is one piece of granite, 11.9 metres tall and 60 tonnes.',
      },
      {
        el: 'Είναι εκκλησία από το 609 μ.Χ., και γι’ αυτό σώθηκε ολόκληρο.',
        en: 'It has been a church since AD 609, which is why it survived whole.',
      },
    ],
    location: {
      lat: 41.89861,
      lng: 12.47694,
      anchor: 'centroid',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q99309', deltaM: 0 },
        { kind: 'osm', ref: 'relation/3374342', deltaM: 9 },
        { kind: 'wikipedia', ref: 'Pantheon, Rome', deltaM: 12 },
      ],
      verifiedAt: '2026-09-12',
      map: { x: 0.499, y: 0.561 },
    },
    question: {
      q: {
        el: 'Τι γίνεται με τη βροχή που μπαίνει από το μάτι του θόλου;',
        en: 'What happens to the rain that falls in from the eye of the dome?',
      },
      answers: [
        { el: 'Φεύγει από τρύπες στο πάτωμα', en: 'It drains through holes in the floor' },
        { el: 'Τη μαζεύουν σε μια δεξαμενή για τα λουτρά', en: 'It is collected in a tank for the baths' },
        { el: 'Εξατμίζεται πριν φτάσει κάτω', en: 'It evaporates before it reaches the ground' },
        { el: 'Ένα τζάμι κλείνει το άνοιγμα όταν βρέχει', en: 'A glass panel shuts the opening when it rains' },
      ],
      explanation: {
        el:
          'Το πάτωμα έχει μια απαλή κλίση και μικρές τρύπες, οπότε το νερό κυλάει και ' +
          'χάνεται. Οι Ρωμαίοι το είχαν σκεφτεί από την αρχή.',
        en:
          'The floor has a gentle slope and small drains, so the water runs off and ' +
          'vanishes. The Romans planned it that way from the start.',
      },
    },
  },

  // -------------------------------------------------------------- trevi fountain
  {
    id: 'rome-trevi-fountain',
    cityId: 'rome',
    emoji: '🪙',
    category: 'landmark',
    difficulty: 1,

    name: { el: 'Φοντάνα ντι Τρέβι', en: 'The Trevi Fountain' },
    tagline: {
      el: 'Νερό δύο χιλιάδων ετών και ένας βασιλιάς της θάλασσας',
      en: 'Two-thousand-year-old water and a king of the sea',
    },
    story: {
      el:
        'Το νερό αυτού του σιντριβανιού είναι πιο παλιό από το ίδιο το σιντριβάνι. Το 19 ' +
        'π.Χ. οι μηχανικοί του Αγρίππα βρήκαν μια καθαρή πηγή δεκατρία χιλιόμετρα έξω από ' +
        'την πόλη, λένε με τη βοήθεια μιας κοπέλας που τους έδειξε το σημείο, και έφτιαξαν ' +
        'ένα υδραγωγείο, το Aqua Virgo, το Παρθένο Νερό, για να το φέρουν στη Ρώμη. ' +
        'Δουλεύει ακόμα. Το 1732 ο αρχιτέκτονας Nicola Salvi άρχισε να χτίζει στο τέλος ' +
        'του υδραγωγείου ένα σιντριβάνι τόσο μεγάλο που έπιασε ολόκληρη την πλευρά ενός ' +
        'παλατιού: 26 μέτρα ψηλό, 49 πλατύ, το μεγαλύτερο μπαρόκ σιντριβάνι στον κόσμο. ' +
        'Ο Salvi πέθανε το 1751 με το έργο μισοτελειωμένο, και το τελείωσε ο Giuseppe ' +
        'Pannini το 1762. Στη μέση ξεπροβάλλει ο Ωκεανός πάνω σε ένα άρμα-κοχύλι, που το ' +
        'τραβούν δύο φτερωτά θαλάσσια άλογα: το ένα ήρεμο, το άλλο αφηνιασμένο, όπως η ' +
        'ίδια η θάλασσα. Κάθε μέρα οι επισκέπτες ρίχνουν περίπου τρεις χιλιάδες ευρώ σε ' +
        'νομίσματα. Τα μαζεύουν και τα δίνουν σε μια οργάνωση που βοηθά ανθρώπους σε ' +
        'ανάγκη.',
      en:
        'The water in this fountain is older than the fountain itself. In 19 BC Agrippa’s ' +
        'engineers found a clean spring thirteen kilometres outside the city, with the ' +
        'help, people say, of a young girl who showed them the spot, and they built an ' +
        'aqueduct, the Aqua Virgo, the Maiden Water, to bring it to Rome. It still works. ' +
        'In 1732 the architect Nicola Salvi began building a fountain at the end of the ' +
        'aqueduct so large that it took up the whole side of a palace: 26 metres high, 49 ' +
        'wide, the largest Baroque fountain in the world. Salvi died in 1751 with the work ' +
        'half done, and Giuseppe Pannini finished it in 1762. In the middle Oceanus bursts ' +
        'out on a shell chariot pulled by two winged sea horses: one calm, one wild, like ' +
        'the sea itself. Every day visitors throw in about three thousand euros in coins. ' +
        'They are swept up and given to a charity that helps people in need.',
    },
    facts: [
      {
        el: 'Είναι 26,3 μέτρα ψηλό και 49,15 μέτρα πλατύ, το μεγαλύτερο μπαρόκ σιντριβάνι στον κόσμο.',
        en: 'It is 26.3 metres high and 49.15 metres wide, the largest Baroque fountain in the world.',
      },
      {
        el: 'Το υδραγωγείο που το τροφοδοτεί χτίστηκε το 19 π.Χ. και δουλεύει ακόμα.',
        en: 'The aqueduct that feeds it was built in 19 BC and is still working.',
      },
      {
        el: 'Το 2016 μαζεύτηκαν από τον πάτο του περίπου 1,4 εκατομμύρια ευρώ σε νομίσματα.',
        en: 'In 2016 about 1.4 million euros in coins were collected from its basin.',
      },
    ],
    location: {
      lat: 41.90083,
      lng: 12.48306,
      anchor: 'centroid',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q185382', deltaM: 0 },
        { kind: 'osm', ref: 'relation/13448560', deltaM: 24 },
        { kind: 'wikipedia', ref: 'Trevi Fountain', deltaM: 1 },
      ],
      verifiedAt: '2026-09-12',
      map: { x: 0.598, y: 0.514 },
    },
    question: {
      q: {
        el: 'Πού πηγαίνουν τα νομίσματα που ρίχνουν οι επισκέπτες;',
        en: 'Where do the coins thrown in by visitors go?',
      },
      answers: [
        { el: 'Σε φιλανθρωπική οργάνωση', en: 'To a charity in Rome' },
        { el: 'Στον δήμαρχο της Ρώμης', en: 'To the mayor of Rome' },
        { el: 'Μένουν για πάντα στον πάτο', en: 'They stay at the bottom' },
        { el: 'Σε όποιον τα βρει πρώτος', en: 'To whoever finds them' },
      ],
      explanation: {
        el:
          'Τα μαζεύουν τακτικά και τα δίνουν στην Caritas, που βοηθά ανθρώπους σε ανάγκη. ' +
          'Κάθε ευχή κάνει και λίγο καλό.',
        en:
          'They are collected regularly and given to Caritas, which helps people in need. ' +
          'Every wish does a little good as well.',
      },
    },
  },

  // -------------------------------------------------------------- spanish steps
  {
    id: 'rome-spanish-steps',
    cityId: 'rome',
    emoji: '🌸',
    category: 'landmark',
    difficulty: 1,

    name: { el: 'Η Ισπανική Σκάλα', en: 'The Spanish Steps' },
    tagline: {
      el: '135 σκαλιά που κυλούν από μια εκκλησία ως μια βάρκα',
      en: '135 steps pouring from a church down to a boat',
    },
    story: {
      el:
        'Πριν από τριακόσια χρόνια η πλαγιά ανάμεσα στην πλατεία και στη γαλλική ' +
        'εκκλησία της κορυφής ήταν ένας λασπωμένος λόφος. Ένας Γάλλος διπλωμάτης, ο ' +
        'Étienne Gueffier, πέθανε το 1660 και άφησε ένα μέρος της περιουσίας του για μια ' +
        'σκάλα. Χρειάστηκαν δεκαετίες για να συμφωνήσουν όλοι, και τελικά οι αρχιτέκτονες ' +
        'Francesco de Sanctis και Alessandro Specchi έχτισαν 135 σκαλιά που ανεβαίνουν με ' +
        'καμπύλες, πλατύσκαλα και στροφές, σαν παγωμένος καταρράκτης. Άνοιξε το 1725. Η ' +
        'σκάλα λέγεται «ισπανική» επειδή στην πλατεία από κάτω βρίσκεται από αιώνες η ' +
        'πρεσβεία της Ισπανίας· τη σκάλα όμως την πλήρωσαν Γάλλοι. Στα πόδια της ' +
        'στέκεται ένα σιντριβάνι σε σχήμα βάρκας που βουλιάζει, η Barcaccia, του 1627 ως ' +
        '1629, έργο του Pietro Bernini, του πατέρα του πιο διάσημου γλύπτη της Ρώμης. Ο ' +
        'θρύλος λέει ότι μια πλημμύρα του Τίβερη είχε αφήσει εδώ μια αληθινή βάρκα. Την ' +
        'άνοιξη τα σκαλιά γεμίζουν γλάστρες με ροζ αζαλέες. Στο σπίτι δεξιά της σκάλας ' +
        'έζησε και πέθανε το 1821 ο Άγγλος ποιητής John Keats· σήμερα είναι μουσείο. Από ' +
        'το 2019 απαγορεύεται να κάθεσαι στα σκαλιά, για να μη φθείρεται το μάρμαρο.',
      en:
        'Three hundred years ago the slope between the square and the French church at ' +
        'the top was a muddy hillside. A French diplomat, Étienne Gueffier, died in 1660 ' +
        'and left part of his fortune for a staircase. It took decades for everyone to ' +
        'agree, and in the end the architects Francesco de Sanctis and Alessandro Specchi ' +
        'built 135 steps that climb in curves, landings and turns, like a frozen ' +
        'waterfall. It opened in 1725. The steps are called “Spanish” because the Spanish ' +
        'embassy has stood on the square below for centuries; the staircase itself, ' +
        'though, was paid for by the French. At its feet is a fountain shaped like a ' +
        'sinking boat, the Barcaccia, from 1627 to 1629, the work of Pietro Bernini, ' +
        'father of Rome’s most famous sculptor. Legend says a flood of the Tiber had left ' +
        'a real boat stranded here. In spring the steps fill with pots of pink azaleas. In ' +
        'the house to the right of the steps the English poet John Keats lived and died ' +
        'in 1821; today it is a museum. Since 2019 sitting on the steps has been ' +
        'forbidden, to protect the marble.',
    },
    facts: [
      {
        el: 'Έχει 135 σκαλιά, χτισμένα από το 1723 ως το 1725.',
        en: 'It has 135 steps, built between 1723 and 1725.',
      },
      {
        el: 'Τα χρήματα τα άφησε ένας Γάλλος διπλωμάτης, όχι κάποιος Ισπανός.',
        en: 'The money was left by a French diplomat, not by anyone Spanish.',
      },
      {
        el: 'Όποιος κάθεται στα σκαλιά κινδυνεύει με πρόστιμο 250 ευρώ.',
        en: 'Anyone who sits on the steps risks a fine of 250 euros.',
      },
    ],
    location: {
      lat: 41.90611,
      lng: 12.48278,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q848072', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Spanish Steps', deltaM: 2 },
      ],
      verifiedAt: '2026-09-12',
      note: 'Overpass rate-limited this lookup, so OSM is absent and the grade is B on Wikidata and Wikipedia. Both agree on the staircase.',
      map: { x: 0.593, y: 0.402 },
    },
    question: {
      q: {
        el: 'Από πού πήρε η σκάλα το όνομά της;',
        en: 'Where does the staircase get its name from?',
      },
      answers: [
        { el: 'Από μια πρεσβεία στην πλατεία από κάτω', en: 'From an embassy on the square below' },
        { el: 'Από τους μάστορες που την έχτισαν', en: 'From the builders who constructed it' },
        { el: 'Από τον βασιλιά που την πλήρωσε', en: 'From the king who paid for it' },
        { el: 'Από τη χώρα που έστειλε το μάρμαρο', en: 'From the country that sent the marble' },
      ],
      explanation: {
        el:
          'Η πλατεία πήρε το όνομα της πρεσβείας, και η σκάλα το όνομα της πλατείας. Τα ' +
          'χρήματα ήταν γαλλικά.',
        en:
          'The square took its name from the embassy, and the steps took theirs from the ' +
          'square. The money was French.',
      },
    },
  },

  // -------------------------------------------------------------- piazza navona
  {
    id: 'rome-piazza-navona',
    cityId: 'rome',
    emoji: '🌊',
    category: 'art',
    difficulty: 2,

    name: { el: 'Πιάτσα Ναβόνα', en: 'Piazza Navona' },
    tagline: {
      el: 'Ένα αρχαίο στάδιο που έγινε πλατεία με τρία σιντριβάνια',
      en: 'An ancient stadium turned into a square with three fountains',
    },
    story: {
      el:
        'Αυτή η πλατεία είναι μακρόστενη και στρογγυλεμένη στη μία άκρη, γιατί έχει ' +
        'ακριβώς το σχήμα ενός σταδίου. Ο αυτοκράτορας Δομιτιανός το έχτισε γύρω στο 86 ' +
        'μ.Χ. για αγώνες δρόμου και πάλης, όπως στην Ολυμπία, και χωρούσε περίπου 30.000 ' +
        'θεατές. Οι αγώνες λέγονταν agones, από την ελληνική λέξη «αγώνας», και από εκεί ' +
        'με τους αιώνες βγήκε το όνομα Navona. Όταν το στάδιο γκρεμίστηκε, τα σπίτια ' +
        'χτίστηκαν πάνω στις κερκίδες και ο στίβος έμεινε άδειος, σαν πλατεία. Το 1651 ο ' +
        'Gian Lorenzo Bernini έστησε στη μέση το Σιντριβάνι των Τεσσάρων Ποταμών: τέσσερις ' +
        'μαρμάρινοι γίγαντες είναι τα μεγάλα ποτάμια των τεσσάρων ηπείρων που ήξεραν τότε, ' +
        'ο Νείλος, ο Γάγγης, ο Δούναβης και ο Ρίο ντε λα Πλάτα, και από πάνω τους υψώνεται ' +
        'ένας οβελίσκος. Ο Νείλος κρύβει το πρόσωπό του με ένα πανί, γιατί τότε κανείς δεν ' +
        'ήξερε πού είναι οι πηγές του. Απέναντι στέκεται η εκκλησία της Αγίας Αγνής, που ' +
        'την έχτισε ο Borromini, ο μεγάλος αντίπαλος του Bernini. Από το 1652 ως το 1866, ' +
        'κάθε Σαββατοκύριακο του Αυγούστου έκλειναν τις αποχετεύσεις και η πλατεία γινόταν ' +
        'μια ρηχή λίμνη για να δροσίζονται οι Ρωμαίοι.',
      en:
        'This square is long and narrow with one rounded end, because it has exactly the ' +
        'shape of a stadium. The emperor Domitian built it around AD 86 for running and ' +
        'wrestling contests, as at Olympia, and it held about 30,000 spectators. The ' +
        'contests were called agones, from the Greek word for contest, and over the ' +
        'centuries that word turned into the name Navona. When the stadium crumbled, ' +
        'houses were built on top of the seating and the track was left empty, as a ' +
        'square. In 1651 Gian Lorenzo Bernini set the Fountain of the Four Rivers in the ' +
        'middle: four marble giants are the great rivers of the four continents known at ' +
        'the time, the Nile, the Ganges, the Danube and the Río de la Plata, with an ' +
        'obelisk rising above them. The Nile hides his face under a cloth, because nobody ' +
        'then knew where his source was. Opposite stands the church of Saint Agnes, built ' +
        'by Borromini, Bernini’s great rival. From 1652 to 1866, every weekend in August ' +
        'the drains were blocked and the square became a shallow lake for Romans to cool ' +
        'off in.',
    },
    facts: [
      {
        el: 'Το στάδιο του Δομιτιανού χωρούσε περίπου 30.000 θεατές και ήταν 275 μέτρα μακρύ.',
        en: 'Domitian’s stadium held about 30,000 spectators and was 275 metres long.',
      },
      {
        el: 'Το Σιντριβάνι των Τεσσάρων Ποταμών είναι του 1651, έργο του Bernini.',
        en: 'The Fountain of the Four Rivers dates from 1651 and is by Bernini.',
      },
      {
        el: 'Από το 1652 ως το 1866 πλημμύριζαν την πλατεία επίτηδες τα Σαββατοκύριακα του Αυγούστου.',
        en: 'From 1652 to 1866 the square was flooded on purpose on August weekends.',
      },
    ],
    location: {
      lat: 41.89871,
      lng: 12.47316,
      anchor: 'area',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q463400', deltaM: 0 },
        { kind: 'osm', ref: 'way/4247138', deltaM: 24 },
        { kind: 'wikipedia', ref: 'Piazza Navona', deltaM: 33 },
      ],
      verifiedAt: '2026-09-12',
      map: { x: 0.438, y: 0.559 },
    },
    question: {
      q: {
        el: 'Γιατί ο μαρμάρινος Νείλος κρύβει το πρόσωπό του;',
        en: 'Why does the marble Nile hide his face?',
      },
      answers: [
        { el: 'Κανείς δεν ήξερε τις πηγές του', en: 'Nobody knew where his source was' },
        { el: 'Ντρέπεται για την απέναντι εκκλησία', en: 'He is ashamed of the church opposite' },
        { el: 'Τον ενοχλεί ο ήλιος της πλατείας', en: 'The sun on the square bothers him' },
        { el: 'Το μάρμαρο του προσώπου είχε ραγίσει', en: 'The marble of his face had cracked' },
      ],
      explanation: {
        el:
          'Την εποχή του Bernini οι πηγές του Νείλου ήταν μυστήριο. Το σκεπασμένο πρόσωπο ' +
          'σημαίνει «άγνωστο». Οι εξερευνητές τις βρήκαν δύο αιώνες αργότερα.',
        en:
          'In Bernini’s time the source of the Nile was a mystery. The covered face means ' +
          '“unknown”. Explorers found it two centuries later.',
      },
    },
  },

  // ------------------------------------------------------------- campo de fiori
  {
    id: 'rome-campo-de-fiori',
    cityId: 'rome',
    emoji: '🥕',
    category: 'food',
    difficulty: 1,

    name: { el: 'Κάμπο ντε Φιόρι', en: 'Campo de’ Fiori' },
    tagline: {
      el: 'Το «λιβάδι με τα λουλούδια» που έγινε η λαϊκή αγορά της πόλης',
      en: 'The “field of flowers” that became the city’s market',
    },
    story: {
      el:
        'Το όνομα σημαίνει «λιβάδι με τα λουλούδια», και τον Μεσαίωνα αυτό ακριβώς ήταν: ' +
        'ένα λιβάδι στη μέση της πόλης. Αργότερα έγινε πλατεία, και δύο φορές την ' +
        'εβδομάδα, Δευτέρα και Σάββατο, γινόταν εδώ παζάρι αλόγων. Από το 1869 κάθε πρωί ' +
        'στήνεται η λαϊκή αγορά, που μετακόμισε εδώ από την Piazza Navona: πάγκοι με ' +
        'ντομάτες, αγκινάρες, φρούτα, τυριά, μπαχαρικά σε σωρούς και ψάρια. Είναι το ' +
        'καλύτερο μέρος στη Ρώμη για να δεις τι τρώει η πόλη. Είναι επίσης η μόνη μεγάλη ' +
        'πλατεία του κέντρου που δεν έχει εκκλησία. Στη μέση στέκεται ένα σκοτεινό άγαλμα ' +
        'με κουκούλα: ο Giordano Bruno, ένας φιλόσοφος που πίστευε ότι το σύμπαν είναι ' +
        'άπειρο και ότι υπάρχουν κι άλλοι ήλιοι με δικούς τους πλανήτες. Το 1600 τον ' +
        'έκαψαν στην πυρά σε αυτό το σημείο, επειδή η Εκκλησία θεωρούσε τις ιδέες του ' +
        'επικίνδυνες. Το άγαλμα στήθηκε το 1889, όταν η Ρώμη αποφάσισε να τον θυμάται: ' +
        'από κάτω γράφει «εδώ όπου άναψε η φωτιά». Το πρωί η πλατεία μυρίζει φρούτα, το ' +
        'βράδυ γεμίζει κόσμο, και ο Bruno κοιτάζει προς το Βατικανό.',
      en:
        'The name means “field of flowers”, and in the Middle Ages that is exactly what ' +
        'it was: a meadow in the middle of the city. Later it became a square, and twice a ' +
        'week, on Mondays and Saturdays, a horse market was held here. Since 1869 the food ' +
        'market has set up every morning, having moved here from Piazza Navona: stalls of ' +
        'tomatoes, artichokes, fruit, cheese, heaps of spices and fish. It is the best ' +
        'place in Rome to see what the city eats. It is also the only big square in the ' +
        'centre without a church. In the middle stands a dark, hooded statue: Giordano ' +
        'Bruno, a philosopher who believed the universe was endless and that there were ' +
        'other suns with planets of their own. In 1600 he was burned at the stake on this spot, ' +
        'because the Church considered his ideas dangerous. The statue was put up in 1889, ' +
        'when Rome decided to remember him: the words beneath say “here, where the fire ' +
        'burned”. In the morning the square smells of fruit, in the evening it fills with ' +
        'people, and Bruno looks towards the Vatican.',
    },
    facts: [
      {
        el: 'Η λαϊκή αγορά στήνεται εδώ κάθε πρωί από το 1869.',
        en: 'The food market has set up here every morning since 1869.',
      },
      {
        el: 'Είναι η μόνη μεγάλη πλατεία του κέντρου της Ρώμης χωρίς εκκλησία.',
        en: 'It is the only big square in central Rome with no church on it.',
      },
      {
        el: 'Το άγαλμα του Giordano Bruno στήθηκε το 1889, έργο του Ettore Ferrari.',
        en: 'The statue of Giordano Bruno was put up in 1889 and is by Ettore Ferrari.',
      },
    ],
    location: {
      lat: 41.89566,
      lng: 12.47205,
      anchor: 'area',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q28303', deltaM: 0 },
        { kind: 'osm', ref: 'way/4949430', deltaM: 11 },
        { kind: 'wikipedia', ref: 'Campo de’ Fiori', deltaM: 6 },
      ],
      verifiedAt: '2026-09-12',
      map: { x: 0.42, y: 0.624 },
    },
    question: {
      q: {
        el: 'Τι ήταν αυτό το μέρος τον Μεσαίωνα;',
        en: 'What was this place in the Middle Ages?',
      },
      answers: [
        { el: 'Ένα λιβάδι μέσα στην πόλη', en: 'A meadow inside the city' },
        { el: 'Η αυλή ενός μεγάλου παλατιού', en: 'The courtyard of a great palace' },
        { el: 'Ένα λιμάνι για βάρκες του ποταμού', en: 'A harbour for the river boats' },
        { el: 'Ο κήπος ενός μοναστηριού', en: 'The garden of a monastery' },
      ],
      explanation: {
        el:
          'Campo σημαίνει χωράφι και fiori λουλούδια. Το όνομα κράτησε, ακόμα κι όταν το ' +
          'λιβάδι γέμισε πάγκους.',
        en:
          'Campo means field and fiori means flowers. The name stayed, even after the ' +
          'meadow filled up with stalls.',
      },
    },
  },

  // ------------------------------------------------------------ palazzo massimo
  {
    id: 'rome-palazzo-massimo',
    cityId: 'rome',
    emoji: '🥊',
    category: 'museum',
    difficulty: 2,

    name: { el: 'Παλάτσο Μάσσιμο', en: 'Palazzo Massimo' },
    tagline: {
      el: 'Ένας χάλκινος πυγμάχος και ένας κήπος ζωγραφισμένος πριν από 2.000 χρόνια',
      en: 'A bronze boxer and a garden painted 2,000 years ago',
    },
    story: {
      el:
        'Δίπλα στον σιδηροδρομικό σταθμό Termini στέκεται ένα μεγάλο παλάτι που χτίστηκε ' +
        'από το 1883 ως το 1887 για να γίνει σχολείο Ιησουιτών. Το κράτος το αγόρασε το ' +
        '1981, το επισκεύασε, και το 1998 άνοιξε ολόκληρο ως μουσείο: είναι η πιο σημαντική ' +
        'από τις τέσσερις έδρες του Εθνικού Ρωμαϊκού Μουσείου. Εδώ φυλάγονται πράγματα ' +
        'που βγήκαν από το χώμα της Ρώμης όταν η πόλη μεγάλωνε απότομα, μετά το 1870, και ' +
        'κάθε νέος δρόμος έσκαβε κάτι. Στο ισόγειο και στον πρώτο όροφο θα δεις αγάλματα: ' +
        'έναν πυγμάχο από μπρούντζο που κάθεται εξαντλημένος μετά τον αγώνα, με πληγές από ' +
        'χαλκό στο πρόσωπό του, και έναν δισκοβόλο παγωμένο στη μέση της κίνησης. Στον ' +
        'δεύτερο όροφο δεν υπάρχουν αγάλματα αλλά τοίχοι: ολόκληρα δωμάτια ρωμαϊκών ' +
        'σπιτιών, ζωγραφισμένα, που τα ξεκόλλησαν προσεκτικά και τα ξαναέστησαν εδώ, με ' +
        'πρώτο έναν κήπο γεμάτο πουλιά και φρούτα από την έπαυλη της αυτοκράτειρας Λιβίας. ' +
        'Στο υπόγειο βρίσκονται τα νομίσματα, από τους πρώτους χάλκινους όγκους της Ρώμης ' +
        'ως το ευρώ.',
      en:
        'Next to Termini railway station stands a big palace built between 1883 and 1887 ' +
        'as a Jesuit school. The state bought it in 1981, restored it, and in 1998 it ' +
        'opened in full as a museum: the most important of the four seats of the National ' +
        'Roman Museum. It keeps things that came out of the soil of Rome when the city ' +
        'grew suddenly after 1870 and every new street dug something up. On the ground ' +
        'and first floors you will find statues: a bronze boxer sitting exhausted after ' +
        'his fight, with wounds of copper on his face, and a discus thrower frozen in ' +
        'mid-swing. On the second floor there are no statues but walls: whole rooms from ' +
        'Roman houses, painted, carefully peeled off and set up again here, starting with ' +
        'a garden full of birds and fruit from the villa of the empress Livia. In the ' +
        'basement are the coins, from Rome’s first lumps of bronze to the euro.',
    },
    facts: [
      {
        el: 'Το κτίριο χτίστηκε από το 1883 ως το 1887 ως σχολείο, και έγινε μουσείο το 1998.',
        en: 'The building went up between 1883 and 1887 as a school, and became a museum in 1998.',
      },
      {
        el: 'Είναι μία από τις τέσσερις έδρες του Εθνικού Ρωμαϊκού Μουσείου.',
        en: 'It is one of the four seats of the National Roman Museum.',
      },
      {
        el: 'Ο δεύτερος όροφος είναι γεμάτος ζωγραφισμένους τοίχους από αρχαία σπίτια.',
        en: 'The second floor is full of painted walls from ancient houses.',
      },
    ],
    location: {
      lat: 41.90154,
      lng: 12.49806,
      anchor: 'centroid',
      confidence: 'C',
      sources: [
        { kind: 'wikidata', ref: 'Q3890451', deltaM: 0 },
        { kind: 'osm', ref: 'relation/2705998', deltaM: 35 },
      ],
      verifiedAt: '2026-09-12',
      note: 'Grade C: Wikidata and OSM describe the palace from different corners and Wikipedia has no coordinate for the building. The point is inside the building; the door is on Largo di Villa Peretti, below.',
      // From the venue's own page: museonazionaleromano.it — "Largo di Villa Peretti, 2".
      findIt: {
        el: 'Η είσοδος είναι στο Largo di Villa Peretti 2, στη γωνία απέναντι από τον σταθμό Termini.',
        en: 'The way in is at Largo di Villa Peretti 2, on the corner across from Termini station.',
      },
      map: { x: 0.84, y: 0.499 },
    },
    question: {
      q: {
        el: 'Τι ήταν αυτό το κτίριο πριν γίνει μουσείο;',
        en: 'What was this building before it became a museum?',
      },
      answers: [
        { el: 'Ένα σχολείο', en: 'A school' },
        { el: 'Σταθμός τρένων', en: 'A train station' },
        { el: 'Παλάτι βασιλιά', en: 'A king’s palace' },
        { el: 'Δημόσιο λουτρό', en: 'A bath house' },
      ],
      explanation: {
        el:
          'Χτίστηκε για Ιησουίτες δασκάλους και τους μαθητές τους. Τα λουτρά, τα Terme, ' +
          'είναι τα ρωμαϊκά ερείπια απέναντι, και του έδωσαν το όνομα.',
        en:
          'It was built for Jesuit teachers and their pupils. The baths, the Terme, are the ' +
          'Roman ruins across the road, and they gave it its name.',
      },
    },

    museum: {
      doorNote: {
        el: 'Ο πυγμάχος και ο κήπος είναι σε διαφορετικούς ορόφους. Πάρε το ασανσέρ και για τα δύο.',
        en: 'The boxer and the garden are on different floors. Take the lift for both.',
      },
      rooms: [
        {
          id: 'rome-palazzo-massimo-athletes',
          emoji: '🥉',
          name: { el: 'Οι αθλητές από μπρούντζο', en: 'The bronze athletes' },
          intro: {
            el:
              'Τα περισσότερα αρχαία χάλκινα αγάλματα λιώθηκαν για το μέταλλό τους. Τα ' +
              'δύο σε αυτή την αίθουσα σώθηκαν επειδή κάποιος τα έθαψε προσεκτικά, και ' +
              'βρέθηκαν μαζί το 1885, όταν έσκαβαν για ένα θέατρο. Δίπλα τους, ένας ' +
              'μαρμάρινος δισκοβόλος που ταξίδεψε ως τη Γερμανία και γύρισε.',
            en:
              'Most ancient bronze statues were melted down for their metal. The two in ' +
              'this room survived because somebody buried them with care, and they were ' +
              'found together in 1885 while a theatre was being dug. Beside them, a marble ' +
              'discus thrower who travelled to Germany and came back.',
          },
          exhibits: [
            {
              id: 'rome-palazzo-massimo-boxer',
              name: { el: 'Ο πυγμάχος που ξεκουράζεται', en: 'The Boxer at Rest' },
              blurb: {
                el:
                  'Ένας χάλκινος πυγμάχος κάθεται με τους αγκώνες στα γόνατα, γυρίζει το ' +
                  'κεφάλι σαν κάποιος να τον φώναξε, και είναι εξαντλημένος. Στα χέρια του ' +
                  'φοράει ακόμα τα δερμάτινα λουριά της πυγμαχίας. Η μύτη του είναι ' +
                  'σπασμένη, τα αυτιά του πρησμένα, και ο γλύπτης έβαλε κομμάτια κόκκινου ' +
                  'χαλκού πάνω στον μπρούντζο για να δείξει το αίμα από τις πληγές. ' +
                  'Φτιάχτηκε ανάμεσα στο 330 και το 50 π.Χ. Το 1885 τον βρήκαν θαμμένο ' +
                  'προσεκτικά στον λόφο του Κυρηνάλιου, σαν να ήθελε κάποιος να τον σώσει. ' +
                  'Τα δάχτυλα των ποδιών και των χεριών του είναι γυαλισμένα: οι αρχαίοι ' +
                  'μάλλον τον άγγιζαν για καλή τύχη.',
                en:
                  'A bronze boxer sits with his elbows on his knees, turning his head as if ' +
                  'someone had just called him, and he is worn out. On his hands he still ' +
                  'wears the leather straps of the sport. His nose is broken, his ears are ' +
                  'swollen, and the sculptor set pieces of red copper into the bronze to ' +
                  'show the blood from his cuts. He was made between 330 and 50 BC. In 1885 ' +
                  'he was found carefully buried on the Quirinal hill, as if someone had ' +
                  'wanted to save him. His toes and fingers are polished smooth: people in ' +
                  'ancient times probably touched him for luck.',
              },
              question: {
                q: {
                  el: 'Πώς έδειξε ο γλύπτης το αίμα στο πρόσωπο του πυγμάχου;',
                  en: 'How did the sculptor show the blood on the boxer’s face?',
                },
                answers: [
                  { el: 'Με κομμάτια κόκκινου χαλκού', en: 'With pieces of red copper' },
                  { el: 'Με κόκκινη μπογιά από πάνω', en: 'With red paint over the bronze' },
                  { el: 'Με μικρές κόκκινες πέτρες', en: 'With tiny red stones set in' },
                  { el: 'Με βαθιές σκαλισμένες γραμμές', en: 'With lines cut deep into the metal' },
                ],
                explanation: {
                  el:
                    'Ο χαλκός είναι πιο κόκκινος από τον μπρούντζο. Ένθετος στις πληγές, ' +
                    'μοιάζει με φρέσκο αίμα ακόμα και σήμερα.',
                  en:
                    'Copper is redder than bronze. Inlaid into the cuts, it still looks like ' +
                    'fresh blood today.',
                },
              },
            },
            {
              id: 'rome-palazzo-massimo-prince',
              name: { el: 'Ο πρίγκιπας με το δόρυ', en: 'The prince with the spear' },
              blurb: {
                el:
                  'Ένας γυμνός νέος με γένια, 2,04 μέτρα ψηλός, στέκεται ακουμπώντας σε ένα ' +
                  'μακρύ δόρυ, όπως στέκονταν οι ήρωες στα αγάλματα του γλύπτη Λυσίππου. ' +
                  'Είναι χάλκινος και βρέθηκε το 1885 δίπλα στον πυγμάχο, θαμμένος μαζί ' +
                  'του. Τα μάτια του ήταν ένθετα από άλλο υλικό και έχουν χαθεί, γι’ αυτό ' +
                  'σε κοιτάζει με άδειες κόγχες. Κανείς δεν ξέρει ποιος είναι. Παλιότερα τον ' +
                  'έλεγαν «ελληνιστικό πρίγκιπα», έναν βασιλιά από την Ανατολή. Σήμερα οι ' +
                  'περισσότεροι πιστεύουν ότι είναι Ρωμαίος στρατηγός του 2ου αιώνα π.Χ., ' +
                  'ίσως ο Σκιπίων ο Αιμιλιανός, γιατί βρέθηκε κοντά στο σημείο όπου εκείνος ' +
                  'είχε την έπαυλή του.',
                en:
                  'A naked young man with a beard, 2.04 metres tall, stands leaning on a ' +
                  'long spear, the way heroes stood in the statues of the sculptor ' +
                  'Lysippos. He is bronze and was found in 1885 next to the boxer, buried ' +
                  'with him. His eyes were inlaid in another material and are lost, which is ' +
                  'why he looks at you with empty sockets. Nobody knows who he is. He used ' +
                  'to be called the “Hellenistic Prince”, a king from the East. Today most ' +
                  'scholars think he is a Roman general of the 2nd century BC, perhaps ' +
                  'Scipio Aemilianus, because he was found near the place where Scipio had ' +
                  'his villa.',
              },
              question: {
                q: {
                  el: 'Γιατί ο νέος με το δόρυ έχει άδειες κόγχες αντί για μάτια;',
                  en: 'Why does the young man with the spear have empty sockets instead of eyes?',
                },
                answers: [
                  { el: 'Τα ένθετα μάτια του έπεσαν και χάθηκαν', en: 'His inlaid eyes fell out and were lost' },
                  { el: 'Ο γλύπτης δεν πρόλαβε να τα φτιάξει', en: 'The sculptor never got round to them' },
                  { el: 'Τα έβγαλαν για να μη «βλέπει»', en: 'They were removed so he could not “see”' },
                  { el: 'Έλιωσαν όταν κάηκε η έπαυλη', en: 'They melted when the villa burned down' },
                ],
                explanation: {
                  el:
                    'Τα μάτια των χάλκινων αγαλμάτων ήταν από πέτρα ή γυαλί, βαλμένα μέσα σε ' +
                    'υποδοχές. Πέφτουν εύκολα και χάνονται.',
                  en:
                    'The eyes of bronze statues were stone or glass, set into sockets. They ' +
                    'fall out easily and get lost.',
                },
              },
            },
            {
              id: 'rome-palazzo-massimo-discobolus',
              name: { el: 'Ο Δισκοβόλος', en: 'The Discobolus' },
              blurb: {
                el:
                  'Ένας αθλητής έχει σκύψει, με τον δίσκο στο τεντωμένο χέρι πίσω του, μια ' +
                  'στιγμή πριν τον εκσφενδονίσει. Το πρωτότυπο ήταν χάλκινο, έργο του ' +
                  'Έλληνα γλύπτη Μύρωνα γύρω στο 460 π.Χ., και χάθηκε. Αυτό είναι ρωμαϊκό ' +
                  'μαρμάρινο αντίγραφο, το καλύτερο που σώζεται, και βρέθηκε το 1781 σε μια ' +
                  'έπαυλη της οικογένειας Massimo στον λόφο Εσκουιλίνο. Το 1938 ο Χίτλερ το ' +
                  'αγόρασε για πέντε εκατομμύρια λιρέτες, παρά τις διαμαρτυρίες των Ιταλών ' +
                  'αρχαιολόγων, και το πήγε στο Μόναχο. Γύρισε στη Ρώμη το 1948. Αν ' +
                  'δοκιμάσεις να σταθείς έτσι, θα δεις ότι κανείς δεν ρίχνει δίσκο σε αυτή ' +
                  'τη στάση: ο Μύρων διάλεξε την πιο όμορφη στιγμή, όχι την πιο αληθινή.',
                en:
                  'An athlete has bent low, the discus in his outstretched hand behind him, a ' +
                  'moment before he hurls it. The original was bronze, made by the Greek ' +
                  'sculptor Myron around 460 BC, and is lost. This is a Roman marble copy, ' +
                  'the best one to survive, found in 1781 at a villa of the Massimo family ' +
                  'on the Esquiline hill. In 1938 Hitler bought it for five million lire, ' +
                  'over the protests of Italian archaeologists, and took it to Munich. It ' +
                  'came back to Rome in 1948. If you try to stand like this you will find ' +
                  'that nobody throws a discus from this position: Myron chose the most ' +
                  'beautiful moment, not the truest one.',
              },
              question: {
                q: {
                  el: 'Ποιος έφτιαξε το χαμένο χάλκινο πρωτότυπο;',
                  en: 'Who made the lost bronze original?',
                },
                answers: [
                  { el: 'Ο Μύρων, Έλληνας γλύπτης', en: 'Myron, a Greek sculptor' },
                  { el: 'Ο Bernini, Ρωμαίος γλύπτης', en: 'Bernini, a Roman sculptor' },
                  { el: 'Ένας άγνωστος Αιγύπτιος', en: 'An unknown Egyptian craftsman' },
                  { el: 'Η οικογένεια Massimo', en: 'The Massimo family themselves' },
                ],
                explanation: {
                  el:
                    'Ο Μύρων δούλευε στην Αθήνα γύρω στο 460 π.Χ. Οι Ρωμαίοι αγαπούσαν τόσο ' +
                    'το άγαλμά του, που έφτιαξαν πολλά μαρμάρινα αντίγραφα.',
                  en:
                    'Myron worked in Athens around 460 BC. The Romans loved his statue so ' +
                    'much that they made many marble copies of it.',
                },
              },
            },
          ],
        },
        {
          id: 'rome-palazzo-massimo-painted-garden',
          emoji: '🐦',
          name: { el: 'Ο ζωγραφισμένος κήπος', en: 'The painted garden' },
          intro: {
            el:
              'Στον δεύτερο όροφο δεν κοιτάζεις αγάλματα αλλά στέκεσαι μέσα σε δωμάτια. ' +
              'Οι τοίχοι τους ζωγραφίστηκαν σε ρωμαϊκά σπίτια πριν από δύο χιλιάδες ' +
              'χρόνια, ξεκολλήθηκαν με τεράστια προσοχή και ξαναστήθηκαν εδώ, στο ίδιο ' +
              'σχήμα. Το πιο διάσημο δωμάτιο δεν έχει καθόλου τοίχους: έχει έναν κήπο.',
            en:
              'On the second floor you do not look at statues; you stand inside rooms. ' +
              'Their walls were painted in Roman houses two thousand years ago, peeled off ' +
              'with enormous care and put up again here in the same shape. The most famous ' +
              'room has no walls at all: it has a garden.',
          },
          exhibits: [
            {
              id: 'rome-palazzo-massimo-livia-garden',
              name: { el: 'Ο κήπος της Λιβίας', en: 'Livia’s garden' },
              blurb: {
                el:
                  'Η Λιβία, η γυναίκα του αυτοκράτορα Αυγούστου, είχε μια έπαυλη έξω από τη ' +
                  'Ρώμη με ένα δωμάτιο μισοθαμμένο στη γη, δροσερό το καλοκαίρι. Γύρω στο ' +
                  '30 π.Χ. ζωγράφοι έκαναν τους τέσσερις τοίχους του να εξαφανιστούν: από ' +
                  'πάνω ως κάτω είναι ένας κήπος με 24 είδη φυτών, όλα ανθισμένα και όλα με ' +
                  'ώριμους καρπούς ταυτόχρονα, πράγμα που δεν συμβαίνει ποτέ σε αληθινό ' +
                  'κήπο, και πουλιά που πετούν ή κάθονται στα κλαδιά. Ο ουρανός είναι ' +
                  'βαμμένος με αιγυπτιακό μπλε, ένα σπάνιο και ακριβό χρώμα. Το δωμάτιο ' +
                  'ήταν τραπεζαρία: ξάπλωνες σε κρεβάτια γύρω από ένα χαμηλό τραπέζι και ' +
                  'έτρωγες μέσα σε έναν κήπο που δεν μαραινόταν ποτέ. Οι τοίχοι ' +
                  'μεταφέρθηκαν εδώ για να μην καταστραφούν από την υγρασία.',
                en:
                  'Livia, the wife of the emperor Augustus, had a villa outside Rome with a ' +
                  'room half sunk into the ground, cool in summer. Around 30 BC painters ' +
                  'made its four walls disappear: from top to bottom they are a garden with ' +
                  '24 kinds of plants, all in flower and all bearing ripe fruit at the same ' +
                  'time, which never happens in a real garden, and birds flying or perched ' +
                  'on the branches. The sky is painted in Egyptian blue, a rare and ' +
                  'expensive colour. The room was a dining room: you lay on couches around ' +
                  'a low table and ate inside a garden that never wilted. The walls were ' +
                  'moved here so that damp would not destroy them.',
              },
              question: {
                q: {
                  el: 'Τι δεν θα μπορούσε να συμβεί ποτέ σε έναν αληθινό κήπο;',
                  en: 'What could never happen in a real garden?',
                },
                answers: [
                  { el: 'Όλα ανθισμένα και ώριμα μαζί', en: 'Everything in flower and ripe at once' },
                  { el: 'Πουλιά να κάθονται ήσυχα στα κλαδιά', en: 'Birds sitting quietly on the branches' },
                  { el: 'Ο ουρανός να είναι γαλάζιος', en: 'The sky being blue overhead' },
                  { el: 'Δέντρα να έχουν καρπούς', en: 'Trees carrying any fruit at all' },
                ],
                explanation: {
                  el:
                    'Κάθε φυτό ανθίζει και καρπίζει σε διαφορετική εποχή. Οι ζωγράφοι έβαλαν ' +
                    'όλες τις εποχές μαζί, για να είναι πάντα καλοκαίρι.',
                  en:
                    'Every plant flowers and fruits in a different season. The painters put ' +
                    'all the seasons together, so that it would always be summer.',
                },
              },
            },
            {
              id: 'rome-palazzo-massimo-white-hen',
              name: { el: 'Η άσπρη κότα με το κλαδί', en: 'The white hen and the branch' },
              blurb: {
                el:
                  'Η έπαυλη της Λιβίας είχε ένα παράξενο όνομα στα λατινικά: Ad Gallinas ' +
                  'Albas, «στις άσπρες κότες». Ο θρύλος λέει ότι μια μέρα ένας αετός πέταξε ' +
                  'πάνω από τη Λιβία και του έπεσε από τα νύχια μια άσπρη κότα, ζωντανή, με ' +
                  'ένα κλαδί δάφνης στο ράμφος της, ακριβώς στην αγκαλιά της. Το θεώρησαν ' +
                  'σημάδι. Φύτεψαν το κλαδί, έγινε δέντρο και μετά ολόκληρο δάσος δάφνης, ' +
                  'και από εκεί έκοβαν τα στεφάνια που φορούσαν οι αυτοκράτορες στις ' +
                  'παρελάσεις τους. Την ίδια έπαυλη ξέθαψαν το 1863 και βρήκαν ένα από τα ' +
                  'πιο διάσημα αγάλματα του Αυγούστου, που σήμερα είναι στα Μουσεία του ' +
                  'Βατικανού. Ο ζωγραφισμένος κήπος και η ιστορία της κότας ανήκουν στο ' +
                  'ίδιο σπίτι.',
                en:
                  'Livia’s villa had a strange name in Latin: Ad Gallinas Albas, “at the ' +
                  'white hens”. Legend says that one day an eagle flew over Livia and a white ' +
                  'hen, alive, with a laurel branch in its beak, dropped from its talons ' +
                  'straight into her lap. It was taken as a sign. The branch was planted, ' +
                  'grew into a tree and then a whole grove of laurel, and from it were cut ' +
                  'the wreaths the emperors wore in their parades. The same villa was dug ' +
                  'up in 1863 and one of the most famous statues of Augustus was found ' +
                  'there; today it is in the Vatican Museums. The painted garden and the ' +
                  'story of the hen belong to the same house.',
              },
              question: {
                q: {
                  el: 'Τι κρατούσε στο ράμφος της η άσπρη κότα του θρύλου;',
                  en: 'What did the white hen of the legend carry in its beak?',
                },
                answers: [
                  { el: 'Ένα κλαδί δάφνης', en: 'A branch of laurel' },
                  { el: 'Ένα χρυσό δαχτυλίδι', en: 'A golden ring' },
                  { el: 'Ένα κλαδί ελιάς', en: 'A branch of olive' },
                  { el: 'Ένα σταφύλι', en: 'A bunch of grapes' },
                ],
                explanation: {
                  el:
                    'Από τη δάφνη έφτιαχναν τα στεφάνια των νικητών. Το κλαδί έγινε δέντρο, ' +
                    'και το δέντρο έδωσε στεφάνια για αυτοκράτορες.',
                  en:
                    'Laurel was what victors’ wreaths were made of. The branch became a tree, ' +
                    'and the tree gave wreaths to emperors.',
                },
              },
            },
            {
              id: 'rome-palazzo-massimo-coins',
              name: { el: 'Τα νομίσματα στο υπόγειο', en: 'The coins in the basement' },
              blurb: {
                el:
                  'Στο υπόγειο του παλατιού, σε ένα θησαυροφυλάκιο με βαριές πόρτες, ' +
                  'βρίσκεται η συλλογή νομισμάτων. Η ιστορία ξεκινά πριν υπάρξουν καθόλου ' +
                  'νομίσματα: οι πρώτοι Ρωμαίοι πλήρωναν με βαριά κομμάτια χαλκού που τα ' +
                  'ζύγιζαν, και η λέξη τους για τα λεφτά, pecunia, βγαίνει από το pecu, ' +
                  'που σημαίνει τα ζώα του κοπαδιού, γιατί ακόμα πιο παλιά ο πλούτος ' +
                  'μετριόταν σε ζώα. Μετά έρχονται τα στρογγυλά νομίσματα με πρόσωπα αυτοκρατόρων, ' +
                  'χρυσά, ασημένια και χάλκινα, και η σειρά συνεχίζεται ως τα νομίσματα του ' +
                  'Πάπα, τη λιρέτα και το ευρώ. Ένα νόμισμα είναι μια μικρή εικόνα του ποιος ' +
                  'κυβερνούσε και τι ήθελε να δείχνει.',
                en:
                  'In the basement of the palace, in a vault with heavy doors, is the coin ' +
                  'collection. The story starts before there were any coins at all: the ' +
                  'first Romans paid with heavy lumps of bronze that had to be weighed, and ' +
                  'their word for money, pecunia, comes from pecu, meaning livestock, because ' +
                  'even earlier wealth was counted in animals. Then come the round coins with ' +
                  'the faces of emperors, in gold, silver and bronze, and the sequence runs ' +
                  'on to the coins of the popes, the lira and the euro. A coin is a small ' +
                  'picture of who was in charge and what they wanted you to see.',
              },
              question: {
                q: {
                  el: 'Από ποια λέξη βγαίνει η λατινική λέξη για τα χρήματα, pecunia;',
                  en: 'Which word does the Latin word for money, pecunia, come from?',
                },
                answers: [
                  { el: 'Από τη λέξη για τα ζώα', en: 'From the word for livestock' },
                  { el: 'Από τη λέξη για τον χρυσό', en: 'From the word for gold' },
                  { el: 'Από το όνομα ενός αυτοκράτορα', en: 'From the name of an emperor' },
                  { el: 'Από τη λέξη για τη ζυγαριά', en: 'From the word for a scale' },
                ],
                explanation: {
                  el:
                    'Pecu σημαίνει τα ζώα του κοπαδιού. Πριν από τα νομίσματα, ο πλούτος ' +
                    'ενός Ρωμαίου ήταν τα ζώα του.',
                  en:
                    'Pecu means livestock. Before coins, a Roman’s wealth was his animals.',
                },
              },
            },
          ],
        },
      ],
      riddles: [
        {
          id: 'rome-palazzo-massimo-riddle-1',
          difficulty: 1,
          prompt: {
            el:
              'Μόλις τελείωσα και είμαι κουρασμένος. Η μύτη μου είναι σπασμένη και τα αυτιά ' +
              'μου πρησμένα, κι όμως κάποιος με έθαψε με τόση αγάπη που σώθηκα.',
            en:
              'I have just finished and I am tired. My nose is broken and my ears are ' +
              'swollen, and yet somebody buried me so lovingly that I survived.',
          },
          hint: {
            el: 'Κοίτα τα χέρια μου: φοράω ακόμα τα λουριά.',
            en: 'Look at my hands: I am still wearing the straps.',
          },
          answerExhibitId: 'rome-palazzo-massimo-boxer',
        },
        {
          id: 'rome-palazzo-massimo-riddle-2',
          difficulty: 2,
          prompt: {
            el:
              'Δεν είμαι άγαλμα. Είμαι τέσσερις τοίχοι που έγιναν αόρατοι. Μέσα μου είναι ' +
              'πάντα καλοκαίρι, κάθε καρπός είναι ώριμος και κανένα πουλί δεν φεύγει ποτέ.',
            en:
              'I am not a statue. I am four walls that were made invisible. Inside me it is ' +
              'always summer, every fruit is ripe and no bird ever flies away.',
          },
          hint: {
            el: 'Ανήκα σε μια αυτοκράτειρα και ήμουν μισοθαμμένος στη γη.',
            en: 'I belonged to an empress and I was half sunk into the ground.',
          },
          answerExhibitId: 'rome-palazzo-massimo-livia-garden',
        },
        {
          id: 'rome-palazzo-massimo-riddle-3',
          difficulty: 3,
          prompt: {
            el:
              'Σκύβω για να ρίξω, κι όμως δεν έριξα ποτέ. Είμαι αντίγραφο ενός χαμένου, ' +
              'με πήραν σε μια ξένη χώρα λίγο πριν από έναν πόλεμο και γύρισα σπίτι δέκα ' +
              'χρόνια μετά.',
            en:
              'I bend to throw, and yet I never threw. I am a copy of something lost; I ' +
              'was taken to a foreign country just before a war and came home ten years later.',
          },
          hint: {
            el: 'Αυτό που κρατάω είναι στρογγυλό και επίπεδο.',
            en: 'The thing I hold is round and flat.',
          },
          answerExhibitId: 'rome-palazzo-massimo-discobolus',
        },
      ],
    },
  },

  // -------------------------------------------------- santa maria degli angeli
  {
    id: 'rome-santa-maria-degli-angeli',
    cityId: 'rome',
    emoji: '☀️',
    category: 'science',
    difficulty: 3,

    name: { el: 'Σάντα Μαρία ντέλι Άντζελι', en: 'Santa Maria degli Angeli' },
    tagline: {
      el: 'Μια εκκλησία μέσα σε λουτρά, με ένα ρολόι από μια ακτίνα ήλιου',
      en: 'A church inside a bath house, with a one-sunbeam clock',
    },
    story: {
      el:
        'Αυτή η εκκλησία δεν χτίστηκε: μπήκε μέσα σε κάτι που υπήρχε ήδη. Τα λουτρά του ' +
        'Διοκλητιανού, τελειωμένα το 306 μ.Χ., ήταν τα μεγαλύτερα της Ρώμης, και οι ' +
        'τεράστιες αίθουσές τους με τους θόλους στέκονταν ακόμα χίλια διακόσια χρόνια ' +
        'αργότερα. Το 1563 ο Μιχαήλ Άγγελος, σχεδόν ενενήντα χρονών, σχεδίασε πώς να ' +
        'γίνουν εκκλησία χωρίς να γκρεμιστεί τίποτα. Το πιο παράξενο πράγμα εδώ όμως είναι ' +
        'στο πάτωμα. Το 1702 ο Πάπας Κλήμης ΙΑ΄ ζήτησε από τον αστρονόμο Francesco ' +
        'Bianchini να φτιάξει μια μεσημβρινή γραμμή: μια λωρίδα από μπρούντζο, 45 μέτρα ' +
        'μακριά, μέσα σε άσπρο και κίτρινο μάρμαρο. Ψηλά στον τοίχο υπάρχει μια μικρή ' +
        'τρύπα. Κάθε μέρα, όταν ο ήλιος είναι στο ψηλότερο σημείο του, μια ακτίνα περνά ' +
        'από την τρύπα και πέφτει πάνω στη γραμμή. Τον χειμώνα, που ο ήλιος είναι ' +
        'χαμηλά, η κηλίδα πέφτει μακριά· το καλοκαίρι, κοντά. Έτσι η γραμμή λέει την ' +
        'ημερομηνία, και οι αστρονόμοι έλεγχαν με αυτή αν το ημερολόγιο ήταν σωστό και ' +
        'πότε πέφτει το Πάσχα. Αν είσαι εκεί το μεσημέρι, θα δεις τον ήλιο να προσγειώνεται.',
      en:
        'This church was not built: it moved into something that was already there. The ' +
        'Baths of Diocletian, finished in AD 306, were the largest in Rome, and their ' +
        'vast vaulted halls were still standing twelve hundred years later. In 1563 ' +
        'Michelangelo, nearly ninety years old, worked out how to turn them into a church ' +
        'without knocking anything down. The strangest thing here, though, is on the ' +
        'floor. In 1702 Pope Clement XI asked the astronomer Francesco Bianchini to make ' +
        'a meridian line: a strip of bronze, 45 metres long, set into white and yellow ' +
        'marble. High on the wall there is a small hole. Every day, when the sun is at ' +
        'its highest, a beam comes through the hole and lands on the line. In winter, ' +
        'when the sun is low, the spot falls far along the line; in summer, close. So the ' +
        'line tells the date, and astronomers used it to check whether the calendar was ' +
        'right and when Easter should fall. If you are there at midday, you will see the ' +
        'sun land.',
    },
    facts: [
      {
        el: 'Η μεσημβρινή γραμμή είναι του 1702 και έχει μήκος 45 μέτρα.',
        en: 'The meridian line dates from 1702 and is 45 metres long.',
      },
      {
        el: 'Τα λουτρά του Διοκλητιανού τελείωσαν το 306 μ.Χ. και ήταν τα μεγαλύτερα της Ρώμης.',
        en: 'The Baths of Diocletian were finished in AD 306 and were the largest in Rome.',
      },
      {
        el: 'Ο Μιχαήλ Άγγελος σχεδίασε την εκκλησία το 1563, σχεδόν ενενήντα χρονών.',
        en: 'Michelangelo designed the church in 1563, when he was nearly ninety.',
      },
    ],
    location: {
      lat: 41.90306,
      lng: 12.49694,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q569253', deltaM: 0 },
        { kind: 'osm', ref: 'way/201482365', deltaM: 54 },
        { kind: 'wikipedia', ref: 'Santa Maria degli Angeli e dei Martiri', deltaM: 1 },
      ],
      verifiedAt: '2026-09-12',
      map: { x: 0.822, y: 0.467 },
    },
    question: {
      q: {
        el: 'Τι δείχνει η ακτίνα του ήλιου όταν πέφτει πάνω στη γραμμή;',
        en: 'What does the sunbeam show when it lands on the line?',
      },
      answers: [
        { el: 'Τι ημερομηνία είναι', en: 'What day of the year it is' },
        { el: 'Πόση ζέστη θα κάνει', en: 'How hot the day will be' },
        { el: 'Από πού φυσάει ο άνεμος', en: 'Which way the wind blows' },
        { el: 'Πόσο απέχει το φεγγάρι', en: 'How far away the moon is' },
      ],
      explanation: {
        el:
          'Το μεσημέρι η κηλίδα πέφτει κάθε μέρα σε λίγο διαφορετικό σημείο, γιατί ο ήλιος ' +
          'ανεβαίνει και κατεβαίνει με τις εποχές. Το σημείο είναι η ημερομηνία.',
        en:
          'At midday the spot lands somewhere slightly different every day, because the sun ' +
          'rises and sinks with the seasons. Where it lands is the date.',
      },
    },
  },

  // --------------------------------------------------------- castel sant'angelo
  {
    id: 'rome-castel-sant-angelo',
    cityId: 'rome',
    emoji: '👼',
    category: 'history',
    difficulty: 2,

    name: { el: 'Καστέλ Σαντ’ Άντζελο', en: 'Castel Sant’Angelo' },
    tagline: {
      el: 'Τάφος, κάστρο, φυλακή και μουσείο, το ίδιο στρογγυλό κτίριο',
      en: 'Tomb, castle, prison and museum, all the same round building',
    },
    story: {
      el:
        'Ο αυτοκράτορας Αδριανός έχτισε αυτόν τον τεράστιο πέτρινο κύλινδρο στην όχθη του ' +
        'Τίβερη, από το 134 ως το 139 μ.Χ., για να είναι ο τάφος του και της οικογένειάς ' +
        'του. Στην κορυφή είχε έναν κήπο και ένα χρυσό άρμα με τέσσερα άλογα, και μπροστά ' +
        'του μια γέφυρα, που στέκεται ακόμα. Όταν αργότερα η Ρώμη χρειάστηκε προστασία, ' +
        'οι χοντροί τοίχοι του τάφου έγιναν κάστρο. Ο θρύλος λέει ότι το 590, όταν μια ' +
        'αρρώστια βασάνιζε την πόλη, ο Πάπας είδε στην κορυφή του έναν άγγελο να βάζει το ' +
        'σπαθί στη θήκη του, σημάδι ότι η αρρώστια τελείωνε, και από τότε το κάστρο έχει ' +
        'το όνομά του. Ένας χάλκινος άγγελος του 1753 στέκεται ακόμα εκεί ψηλά. Οι Πάπες ' +
        'το έκαναν καταφύγιο: ένας σκεπαστός διάδρομος 800 μέτρων, το Passetto, τρέχει ' +
        'πάνω σε ένα παλιό τείχος ως το Βατικανό, και το 1527 ο Πάπας Κλήμης Ζ΄ πέρασε ' +
        'από εκεί τρέχοντας όταν ξένοι στρατιώτες μπήκαν στην πόλη. Το κάστρο ήταν και ' +
        'φυλακή. Το 1901 έγινε μουσείο, και σήμερα ανεβαίνεις τη σπειροειδή ράμπα του ' +
        'Αδριανού ως τη βεράντα με τον άγγελο, με όλη τη Ρώμη από κάτω. Οι δέκα άγγελοι της ' +
        'γέφυρας σχεδιάστηκαν από τον Bernini το 1668.',
      en:
        'The emperor Hadrian built this enormous stone drum on the bank of the Tiber ' +
        'between AD 134 and 139 to be the tomb of himself and his family. On top it had a ' +
        'garden and a golden chariot with four horses, and in front of it a bridge, which ' +
        'still stands. When Rome later needed protecting, the thick walls of the tomb ' +
        'became a castle. Legend says that in 590, when a sickness was troubling the city, ' +
        'the Pope saw an angel on its summit putting his sword back in its sheath, a sign ' +
        'that the sickness was ending, and the castle has carried the angel’s name ever ' +
        'since. A bronze angel from 1753 still stands up there. The popes made it their ' +
        'refuge: a covered corridor 800 metres long, the Passetto, runs along an old wall ' +
        'all the way to the Vatican, and in 1527 Pope Clement VII ran through it when ' +
        'foreign soldiers broke into the city. The castle was a prison too. In 1901 it ' +
        'became a museum, and today you climb Hadrian’s spiral ramp up to the terrace ' +
        'with the angel and all of Rome below. The ten angels on the bridge were designed ' +
        'by Bernini in 1668.',
    },
    facts: [
      {
        el: 'Χτίστηκε ως τάφος του Αδριανού από το 134 ως το 139 μ.Χ.',
        en: 'It was built as Hadrian’s tomb between AD 134 and 139.',
      },
      {
        el: 'Ο κρυφός διάδρομος ως το Βατικανό, το Passetto, έχει μήκος περίπου 800 μέτρα.',
        en: 'The secret corridor to the Vatican, the Passetto, is about 800 metres long.',
      },
      {
        el: 'Είναι μουσείο από το 1901.',
        en: 'It has been a museum since 1901.',
      },
    ],
    location: {
      lat: 41.90304,
      lng: 12.46631,
      anchor: 'centroid',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q486382', deltaM: 0 },
        { kind: 'osm', ref: 'way/8035487', deltaM: 4 },
        { kind: 'wikipedia', ref: 'Castel Sant’Angelo', deltaM: 7 },
      ],
      verifiedAt: '2026-09-12',
      map: { x: 0.328, y: 0.467 },
    },
    question: {
      q: {
        el: 'Τι ήταν αυτό το κτίριο στην αρχή;',
        en: 'What was this building to begin with?',
      },
      answers: [
        { el: 'Ο τάφος ενός αυτοκράτορα', en: 'The tomb of an emperor' },
        { el: 'Ένας φάρος για τις βάρκες του ποταμού', en: 'A lighthouse for the river boats' },
        { el: 'Μια δεξαμενή νερού για την πόλη', en: 'A water tank for the city' },
        { el: 'Το θησαυροφυλάκιο των Παπών', en: 'The treasury of the popes' },
      ],
      explanation: {
        el:
          'Ο Αδριανός το έχτισε για τον εαυτό του και την οικογένειά του. Το κάστρο, η ' +
          'φυλακή και το μουσείο ήρθαν πολύ αργότερα.',
        en:
          'Hadrian built it for himself and his family. The castle, the prison and the ' +
          'museum came much later.',
      },
    },
  },

  // ---------------------------------------------------------- st peter's square
  {
    id: 'rome-st-peters-square',
    cityId: 'rome',
    emoji: '🔑',
    category: 'landmark',
    difficulty: 2,

    name: { el: 'Πλατεία του Αγίου Πέτρου', en: 'St Peter’s Square' },
    tagline: {
      el: 'Δύο πέτρινα χέρια που αγκαλιάζουν, στη μικρότερη χώρα του κόσμου',
      en: 'Two stone arms giving a hug, in the world’s smallest country',
    },
    story: {
      el:
        'Μόλις περάσεις τη λευκή γραμμή στο έδαφος, δεν είσαι πια στην Ιταλία. Το ' +
        'Βατικανό είναι ανεξάρτητο κράτος από το 1929, με 44 εκτάρια έκταση, όσο περίπου ' +
        'εξήντα γήπεδα ποδοσφαίρου, και λιγότερους από χίλιους κατοίκους. Έχει δικά του ' +
        'γραμματόσημα και δικούς του φρουρούς: τους Ελβετούς Φρουρούς, που φυλάνε τον Πάπα ' +
        'από το 1506 και φορούν στολές με μπλε, κόκκινες και κίτρινες ρίγες. Την πλατεία ' +
        'τη σχεδίασε ο Bernini πριν από περισσότερα από 350 χρόνια. Δύο καμπύλες ' +
        'κιονοστοιχίες, με τις κολόνες σε τέσσερις σειρές και 140 αγάλματα αγίων από πάνω, ' +
        'είναι, όπως είπε ο ίδιος, τα χέρια μιας μητέρας που αγκαλιάζουν όποιον έρχεται. ' +
        'Στη μέση στέκεται ένας οβελίσκος 25 μέτρων, που ήρθε από την Αίγυπτο με πλοίο τον ' +
        '1ο αιώνα μ.Χ. Το 1586 χρειάστηκαν εκατοντάδες άντρες, πάνω από εκατό άλογα και ' +
        'δεκάδες βαρούλκα για να τον μετακινήσουν εδώ και να τον στήσουν όρθιο. Είναι ο ' +
        'μόνος αρχαίος οβελίσκος της Ρώμης που δεν έπεσε ποτέ. Ο τρούλος από πάνω είναι ' +
        'σχέδιο του Μιχαήλ Άγγελου.',
      en:
        'Once you step over the white line on the ground you are no longer in Italy. ' +
        'Vatican City has been an independent state since 1929, covering 44 hectares, ' +
        'about sixty football pitches, with fewer than a thousand inhabitants. It has its ' +
        'own stamps and its own guards: the Swiss Guard, who have protected the Pope ' +
        'since 1506 and wear uniforms striped in blue, red and yellow. The square was ' +
        'designed by Bernini more than 350 years ago. Two curved colonnades, with columns ' +
        'in four rows and 140 statues of saints along the top, are, as he put it, the arms ' +
        'of a mother embracing everyone who comes. In the middle stands an obelisk 25 ' +
        'metres tall, which came from Egypt by ship in the 1st century AD. In 1586 it ' +
        'took hundreds of men, more than a hundred horses and dozens of winches to move ' +
        'it here and stand it upright. It is the only ancient obelisk in Rome that has ' +
        'never fallen. The dome above was designed by Michelangelo.',
    },
    facts: [
      {
        el: 'Το Βατικανό έχει 44 εκτάρια και λιγότερους από χίλιους κατοίκους.',
        en: 'Vatican City covers 44 hectares and has fewer than a thousand inhabitants.',
      },
      {
        el: 'Οι Ελβετοί Φρουροί φυλάνε τον Πάπα από τις 22 Ιανουαρίου 1506.',
        en: 'The Swiss Guard have protected the Pope since 22 January 1506.',
      },
      {
        el: 'Ο οβελίσκος είναι ο μόνος αρχαίος οβελίσκος της Ρώμης που δεν έπεσε ποτέ.',
        en: 'The obelisk is the only ancient obelisk in Rome that has never toppled.',
      },
    ],
    location: {
      lat: 41.90218,
      lng: 12.45724,
      anchor: 'area',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q83425', deltaM: 0 },
        { kind: 'osm', ref: 'way/135747106', deltaM: 125 },
        { kind: 'wikipedia', ref: 'St. Peter’s Square', deltaM: 4 },
      ],
      verifiedAt: '2026-09-12',
      map: { x: 0.181, y: 0.486 },
    },
    question: {
      q: {
        el: 'Με τι μοιάζουν οι δύο κιονοστοιχίες, σύμφωνα με τον Bernini;',
        en: 'What are the two colonnades like, according to Bernini?',
      },
      answers: [
        { el: 'Με δύο χέρια που αγκαλιάζουν', en: 'Two arms giving a hug' },
        { el: 'Με δύο φτερά ενός τεράστιου πουλιού', en: 'The two wings of a giant bird' },
        { el: 'Με τα δύο κέρατα ενός ταύρου', en: 'The two horns of a bull' },
        { el: 'Με δύο κύματα που σπάνε στην ακτή', en: 'Two waves breaking on the shore' },
      ],
      explanation: {
        el:
          'Ο Bernini είπε ότι είναι τα μητρικά χέρια της Εκκλησίας, ανοιχτά για όποιον ' +
          'φτάνει στην πλατεία.',
        en:
          'Bernini said they were the maternal arms of the Church, open to whoever arrives ' +
          'in the square.',
      },
    },
  },

  // ------------------------------------------------------------ vatican museums
  {
    id: 'rome-vatican-museums',
    cityId: 'rome',
    emoji: '🎨',
    category: 'museum',
    difficulty: 3,

    name: { el: 'Μουσεία του Βατικανού', en: 'The Vatican Museums' },
    tagline: {
      el: 'Χιλιόμετρα διάδρομοι που τελειώνουν σε μια ζωγραφισμένη οροφή',
      en: 'Kilometres of corridors that end under a painted ceiling',
    },
    story: {
      el:
        'Όλα ξεκίνησαν από μια τρύπα σε έναν αμπελώνα. Τον Ιανουάριο του 1506 ένας ' +
        'αγρότης έσκαβε στον λόφο Εσκουιλίνο και βρήκε ένα μαρμάρινο σύμπλεγμα: έναν ' +
        'άντρα και τα δύο παιδιά του να παλεύουν με φίδια της θάλασσας. Ο Πάπας Ιούλιος Β΄ ' +
        'έστειλε τον Μιχαήλ Άγγελο να το δει, το αγόρασε και το έβαλε σε μια αυλή του ' +
        'παλατιού του για να το θαυμάζουν όλοι. Αυτή η αυλή ήταν το πρώτο δωμάτιο των ' +
        'Μουσείων του Βατικανού. Πεντακόσια χρόνια αργότερα τα μουσεία έχουν περίπου ' +
        '70.000 έργα, από τα οποία εκθέτουν 20.000, σε 24 συλλογές: αιγυπτιακές μούμιες, ' +
        'ελληνικά και ρωμαϊκά αγάλματα, έναν διάδρομο 120 μέτρων με ζωγραφισμένους χάρτες, ' +
        'τα δωμάτια του Ραφαήλ και, στο τέλος όλων, την Καπέλα Σιξτίνα με την οροφή που ' +
        'ζωγράφισε ο Μιχαήλ Άγγελος όρθιος πάνω σε σκαλωσιά. Το 2024 πέρασαν από εδώ 6,8 ' +
        'εκατομμύρια επισκέπτες, περισσότεροι από κάθε άλλο μουσείο του κόσμου εκτός από ' +
        'το Λούβρο. Φεύγεις κατεβαίνοντας μια διπλή σπειροειδή σκάλα, όπου όσοι ανεβαίνουν ' +
        'δεν συναντούν ποτέ όσους κατεβαίνουν.',
      en:
        'It all began with a hole in a vineyard. In January 1506 a farmer digging on the ' +
        'Esquiline hill found a marble group: a man and his two sons wrestling with sea ' +
        'serpents. Pope Julius II sent Michelangelo to look at it, bought it, and put it ' +
        'in a courtyard of his palace for everyone to admire. That courtyard was the ' +
        'first room of the Vatican Museums. Five hundred years later the museums hold ' +
        'about 70,000 works, 20,000 of them on display, in 24 collections: Egyptian ' +
        'mummies, Greek and Roman statues, a 120-metre corridor of painted maps, ' +
        'Raphael’s rooms and, at the very end, the Sistine Chapel with the ceiling ' +
        'Michelangelo painted standing on scaffolding. In 2024, 6.8 million visitors ' +
        'came through, more than any museum in the world except the Louvre. You leave ' +
        'down a double spiral staircase where the people going up never meet the people ' +
        'coming down.',
    },
    facts: [
      {
        el: 'Ξεκίνησαν το 1506 με ένα άγαλμα που βρέθηκε σε έναν αμπελώνα.',
        en: 'They began in 1506 with one statue found in a vineyard.',
      },
      {
        el: 'Έχουν περίπου 70.000 έργα, από τα οποία εκτίθενται 20.000.',
        en: 'They hold about 70,000 works, of which 20,000 are on display.',
      },
      {
        el: 'Το 2024 τα επισκέφθηκαν 6,8 εκατομμύρια άνθρωποι.',
        en: 'In 2024 they were visited by 6.8 million people.',
      },
    ],
    location: {
      lat: 41.90639,
      lng: 12.45444,
      anchor: 'area',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q182955', deltaM: 0 },
        { kind: 'osm', ref: 'way/112137587', deltaM: 141 },
        { kind: 'wikipedia', ref: 'Vatican Museums', deltaM: 3 },
      ],
      verifiedAt: '2026-09-12',
      note: 'An area pin in the middle of a complex of buildings. The entrance is on the far side, on Viale Vaticano; see findIt.',
      // From the venue's own page: museivaticani.va — "Viale Vaticano, 00165 Rome".
      findIt: {
        el: 'Η είσοδος είναι στη Viale Vaticano, έξω από τα τείχη, όχι από την πλατεία του Αγίου Πέτρου.',
        en: 'The way in is on Viale Vaticano, outside the walls, not from St Peter’s Square.',
      },
      map: { x: 0.136, y: 0.396 },
    },
    question: {
      q: {
        el: 'Πώς ξεκίνησαν τα Μουσεία του Βατικανού το 1506;',
        en: 'How did the Vatican Museums begin in 1506?',
      },
      answers: [
        { el: 'Με ένα άγαλμα από έναν αμπελώνα', en: 'With a statue from a vineyard' },
        { el: 'Με μια δωρεά πινάκων από τη Γαλλία', en: 'With a gift of paintings from France' },
        { el: 'Με τα κοσμήματα ενός βασιλιά', en: 'With the jewels of a king' },
        { el: 'Με μια συλλογή αιγυπτιακών μουμιών', en: 'With a collection of Egyptian mummies' },
      ],
      explanation: {
        el:
          'Ο Πάπας αγόρασε τον Λαοκόοντα και τον έβαλε σε μια αυλή για να τον βλέπουν ' +
          'όλοι. Από εκείνη την αυλή μεγάλωσαν τα μουσεία.',
        en:
          'The Pope bought the Laocoön and set it in a courtyard for everyone to see. The ' +
          'museums grew out of that courtyard.',
      },
    },

    museum: {
      doorNote: {
        el: 'Η είσοδος δεν είναι στην πλατεία του Αγίου Πέτρου: είναι από την άλλη πλευρά των τειχών.',
        en: 'The entrance is not on St Peter’s Square: it is on the far side of the walls.',
      },
      rooms: [
        {
          id: 'rome-vatican-museums-courtyards',
          emoji: '🌲',
          name: { el: 'Οι αυλές', en: 'The courtyards' },
          intro: {
            el:
              'Πριν από τους διαδρόμους έρχονται οι αυλές, ανοιχτές στον ουρανό. Σε μία ' +
              'στέκεται ένα χάλκινο κουκουνάρι ψηλό όσο δύο άνθρωποι και μια σφαίρα που ' +
              'γυρίζει. Σε μια άλλη, οκτάγωνη, ζουν τα αγάλματα με τα οποία ξεκίνησαν όλα, ' +
              'και ένας κορμός χωρίς κεφάλι που ο Μιχαήλ Άγγελος αρνήθηκε να συμπληρώσει.',
            en:
              'Before the corridors come the courtyards, open to the sky. In one stands a ' +
              'bronze pine cone as tall as two people and a sphere that turns. In another, ' +
              'eight-sided one, live the statues everything began with, and a torso ' +
              'without a head that Michelangelo refused to complete.',
          },
          exhibits: [
            {
              id: 'rome-vatican-museums-pine-cone',
              name: { el: 'Το χάλκινο κουκουνάρι', en: 'The bronze pine cone' },
              blurb: {
                el:
                  'Ένα κουκουνάρι από μπρούντζο, σχεδόν τέσσερα μέτρα ψηλό, στέκεται σε μια ' +
                  'κόγχη στο βάθος της αυλής που πήρε το όνομά του. Οι Ρωμαίοι το έφτιαξαν ' +
                  'τον 1ο αιώνα μ.Χ. ως σιντριβάνι: το νερό έβγαινε από τις τρύπες ανάμεσα ' +
                  'στα λέπια του. Στεκόταν κοντά στο Πάνθεον, δίπλα σε έναν ναό της ' +
                  'αιγυπτιακής θεάς Ίσιδας. Τον Μεσαίωνα το μετέφεραν στην αυλή της παλιάς ' +
                  'βασιλικής του Αγίου Πέτρου, όπου το είδε ο ποιητής Δάντης και το ' +
                  'χρησιμοποίησε στην Κόλασή του για να περιγράψει πόσο μεγάλο ήταν το ' +
                  'πρόσωπο ενός γίγαντα. Από το 1608 βρίσκεται εδώ. Τα δύο χάλκινα παγόνια ' +
                  'δίπλα του είναι αντίγραφα εκείνων που στόλιζαν τον τάφο του Αδριανού.',
                en:
                  'A pine cone of bronze, almost four metres tall, stands in a niche at the ' +
                  'end of the courtyard named after it. The Romans made it in the 1st ' +
                  'century AD as a fountain: water came out of the holes between its ' +
                  'scales. It stood near the Pantheon, beside a temple of the Egyptian ' +
                  'goddess Isis. In the Middle Ages it was moved to the courtyard of the old ' +
                  'basilica of St Peter, where the poet Dante saw it and used it in his ' +
                  'Inferno to describe how big a giant’s face was. It has been here since ' +
                  '1608. The two bronze peacocks beside it are copies of the ones that ' +
                  'decorated Hadrian’s tomb.',
              },
              question: {
                q: {
                  el: 'Τι ήταν το κουκουνάρι όταν το έφτιαξαν οι Ρωμαίοι;',
                  en: 'What was the pine cone when the Romans made it?',
                },
                answers: [
                  { el: 'Ένα σιντριβάνι που έβγαζε νερό', en: 'A fountain that sprayed water' },
                  { el: 'Η κορυφή ενός ναού', en: 'The top of a temple' },
                  { el: 'Ένα δοχείο για κρασί', en: 'A container for wine' },
                  { el: 'Η καμπάνα μιας εκκλησίας', en: 'The bell of a church' },
                ],
                explanation: {
                  el: 'Το νερό έτρεχε από τρύπες ανάμεσα στα λέπια. Αν κοιτάξεις προσεκτικά, τις βλέπεις ακόμα.',
                  en: 'Water ran from holes between the scales. Look closely and you can still see them.',
                },
              },
            },
            {
              id: 'rome-vatican-museums-sphere',
              name: { el: 'Η σφαίρα μέσα στη σφαίρα', en: 'The sphere within a sphere' },
              blurb: {
                el:
                  'Στη μέση της ίδιας αυλής στέκεται μια τεράστια χρυσαφένια σφαίρα από ' +
                  'μπρούντζο. Δεν είναι αρχαία: την έφτιαξε ο Ιταλός γλύπτης Arnaldo ' +
                  'Pomodoro. Η επιφάνειά της είναι σκισμένη, και μέσα από τα σκισίματα ' +
                  'φαίνεται μια δεύτερη σφαίρα, κι αυτή σκισμένη, με γρανάζια και μηχανισμούς ' +
                  'από κάτω, σαν ο κόσμος να άνοιξε και να δείχνει τι έχει μέσα. Ο γλύπτης ' +
                  'είπε ότι ήθελε να σπάσει την τέλεια μορφή για να φανεί «η εσωτερική ' +
                  'αναταραχή», και ότι η σφαίρα είναι μια εικόνα της ιδανικής πόλης. Η ' +
                  'σφαίρα γυρίζει αργά. Ο Pomodoro έφτιαξε 45 τέτοιες σφαίρες σε διάφορα ' +
                  'μεγέθη· άλλες στέκονται στα Ηνωμένα Έθνη στη Νέα Υόρκη και στο Δουβλίνο.',
                en:
                  'In the middle of the same courtyard stands a huge golden sphere of bronze. ' +
                  'It is not ancient: it was made by the Italian sculptor Arnaldo Pomodoro. ' +
                  'Its surface is torn open, and through the tears you see a second sphere, ' +
                  'torn too, with gears and machinery underneath, as if the world had ' +
                  'cracked open to show what is inside. The sculptor said he wanted to ' +
                  'break the perfect shape to reveal “the inner ferment”, and that the ' +
                  'sphere is a picture of the ideal city. The sphere turns slowly. Pomodoro ' +
                  'made 45 such spheres in different sizes; others stand at the United ' +
                  'Nations in New York and in Dublin.',
              },
              question: {
                q: {
                  el: 'Τι φαίνεται μέσα από τα σκισίματα της μπρούντζινης επιφάνειας;',
                  en: 'What shows through the tears in the bronze surface?',
                },
                answers: [
                  { el: 'Μια δεύτερη σφαίρα με γρανάζια', en: 'A second sphere with gears' },
                  { el: 'Ένας χάρτης ολόκληρου του κόσμου', en: 'A map of the whole world' },
                  { el: 'Το άγαλμα ενός Πάπα', en: 'The statue of a Pope' },
                  { el: 'Μια πηγή νερού που τρέχει', en: 'A spring of running water' },
                ],
                explanation: {
                  el: 'Σφαίρα μέσα σε σφαίρα, όπως λέει και το όνομά της. Η μέσα είναι κι αυτή σκισμένη.',
                  en: 'A sphere within a sphere, as the name says. The inner one is torn open too.',
                },
              },
            },
            {
              id: 'rome-vatican-museums-laocoon',
              name: { el: 'Ο Λαοκόων', en: 'The Laocoön' },
              blurb: {
                el:
                  'Αυτό είναι το άγαλμα που ξεκίνησε τα μουσεία. Ένας γενειοφόρος άντρας και ' +
                  'δύο αγόρια παλεύουν με δύο τεράστια φίδια που έχουν τυλιχτεί γύρω τους. ' +
                  'Είναι ο Λαοκόων, ιερέας της Τροίας, που προειδοποίησε τους Τρώες να μη ' +
                  'βάλουν μέσα στην πόλη το ξύλινο άλογο· οι θεοί που ήθελαν την Τροία να ' +
                  'πέσει έστειλαν τα φίδια από τη θάλασσα. Το μάρμαρο είναι λίγο πάνω από ' +
                  'δύο μέτρα ψηλό, και ο Ρωμαίος συγγραφέας Πλίνιος γράφει ότι το ' +
                  'σκάλισαν τρεις γλύπτες από τη Ρόδο. Βρέθηκε το 1506 σε έναν αμπελώνα. Το ' +
                  'δεξί χέρι του Λαοκόοντα έλειπε· το βρήκαν τυχαία το 1905, λυγισμένο ' +
                  'ακριβώς όπως είχε μαντέψει ο Μιχαήλ Άγγελος τετρακόσια χρόνια πριν, και ' +
                  'το ξανακόλλησαν το 1957.',
                en:
                  'This is the statue the museums began with. A bearded man and two boys ' +
                  'struggle with two enormous snakes coiled around them. He is Laocoön, a ' +
                  'priest of Troy, who warned the Trojans not to bring the wooden horse into ' +
                  'the city; the gods who wanted Troy to fall sent the snakes out of the ' +
                  'sea. The marble is a little over two metres tall, and the Roman writer ' +
                  'Pliny says three sculptors from Rhodes carved it. It was found in 1506 ' +
                  'in a vineyard. Laocoön’s right arm was missing; it turned up by chance in ' +
                  '1905, bent exactly as Michelangelo had guessed four hundred years ' +
                  'earlier, and was put back in 1957.',
              },
              question: {
                q: {
                  el: 'Γιατί οι θεοί έστειλαν τα φίδια στον Λαοκόοντα;',
                  en: 'Why did the gods send the snakes after Laocoön?',
                },
                answers: [
                  { el: 'Είχε προειδοποιήσει για το ξύλινο άλογο', en: 'He had warned about the wooden horse' },
                  { el: 'Είχε κλέψει έναν θησαυρό από τον ναό', en: 'He had stolen a treasure from the temple' },
                  { el: 'Είχε αρνηθεί να πολεμήσει τους Έλληνες', en: 'He had refused to fight the Greeks' },
                  { el: 'Είχε σκοτώσει ένα ιερό φίδι της θάλασσας', en: 'He had killed a sacred snake of the sea' },
                ],
                explanation: {
                  el:
                    'Ο Λαοκόων είχε δίκιο για το άλογο. Οι θεοί όμως ήθελαν να πέσει η Τροία, ' +
                    'και τον έβγαλαν από τη μέση.',
                  en:
                    'Laocoön was right about the horse. But the gods wanted Troy to fall, and ' +
                    'they got him out of the way.',
                },
              },
            },
            {
              id: 'rome-vatican-museums-torso',
              name: { el: 'Ο κορμός του Μπελβεντέρε', en: 'The Belvedere Torso' },
              blurb: {
                el:
                  'Ένα μαρμάρινο σώμα χωρίς κεφάλι, χωρίς χέρια και χωρίς κνήμες, 1,59 ' +
                  'μέτρα ψηλό, κάθεται πάνω σε ένα δέρμα ζώου και γέρνει μπροστά. Στη βάση ' +
                  'του υπογράφει ένας γλύπτης, ο Απολλώνιος ο Αθηναίος. Είναι αντίγραφο ' +
                  'του 1ου αιώνα π.Χ. από ένα παλιότερο ελληνικό έργο, και κανείς δεν ξέρει ' +
                  'σίγουρα ποιον δείχνει: ίσως τον Ηρακλή, ίσως τον Αίαντα. Ο Μιχαήλ ' +
                  'Άγγελος το αγάπησε όσο κανένα άλλο άγαλμα. Όταν ο Πάπας του ζήτησε να ' +
                  'συμπληρώσει τα μέλη που έλειπαν, αρνήθηκε: ήταν πολύ όμορφο για να το ' +
                  'πειράξει. Αντί γι’ αυτό, το σχεδίασε ξανά και ξανά, και οι μυώδεις ' +
                  'στριμμένες φιγούρες της οροφής της Καπέλα Σιξτίνα βγήκαν από αυτόν τον ' +
                  'κορμό.',
                en:
                  'A marble body with no head, no arms and no lower legs, 1.59 metres tall, ' +
                  'sits on an animal skin and leans forward. On the base a sculptor has ' +
                  'signed it: Apollonius of Athens. It is a 1st-century BC copy of an older ' +
                  'Greek work, and nobody knows for sure who it shows: perhaps Heracles, ' +
                  'perhaps Ajax. Michelangelo loved it more than any other statue. When the ' +
                  'Pope asked him to add the missing limbs he refused: it was too beautiful ' +
                  'to touch. Instead he drew it over and over, and the muscular, twisting ' +
                  'figures on the ceiling of the Sistine Chapel came out of this torso.',
              },
              question: {
                q: {
                  el: 'Τι απάντησε ο Μιχαήλ Άγγελος όταν του ζήτησαν να συμπληρώσει τον κορμό;',
                  en: 'What did Michelangelo say when asked to complete the torso?',
                },
                answers: [
                  { el: 'Ότι ήταν πολύ όμορφος για να τον πειράξει', en: 'That it was too beautiful to touch' },
                  { el: 'Ότι δεν είχε αρκετό μάρμαρο για τα μέλη', en: 'That he had no marble left for the limbs' },
                  { el: 'Ότι θα το έκανε μόνο αν πληρωνόταν διπλά', en: 'That he would only do it for double pay' },
                  { el: 'Ότι προτιμούσε να ζωγραφίζει παρά να σκαλίζει', en: 'That he preferred painting to carving' },
                ],
                explanation: {
                  el: 'Δεν το άγγιξε ποτέ. Το σχεδίασε όμως τόσες φορές, που ζει μέσα στις φιγούρες της Καπέλα Σιξτίνα.',
                  en: 'He never touched it. He drew it so many times, though, that it lives on in the figures of the Sistine Chapel.',
                },
              },
            },
          ],
        },
        {
          id: 'rome-vatican-museums-corridors',
          emoji: '🗺️',
          name: { el: 'Οι διάδρομοι', en: 'The corridors' },
          intro: {
            el:
              'Από τις αυλές μπαίνεις σε μια σειρά από μακριούς διαδρόμους που ' +
              'οδηγούν, όλοι, προς την Καπέλα Σιξτίνα. Σε έναν από αυτούς η Ιταλία είναι ' +
              'ζωγραφισμένη στους τοίχους, περιοχή προς περιοχή. Λίγο πιο πέρα, σε ' +
              'τέσσερα δωμάτια, ένας νεαρός ζωγράφος έβαλε όλους τους σοφούς της ' +
              'αρχαιότητας σε μία σκάλα.',
            en:
              'From the courtyards you enter a series of long corridors that all lead ' +
              'towards the Sistine Chapel. In one of them Italy is painted on the walls, ' +
              'region by region. A little further on, in four rooms, a young painter put ' +
              'every wise man of antiquity on one staircase.',
          },
          exhibits: [
            {
              id: 'rome-vatican-museums-maps',
              name: { el: 'Ο διάδρομος των χαρτών', en: 'The Gallery of Maps' },
              blurb: {
                el:
                  'Ένας διάδρομος 120 μέτρων, με χρυσή οροφή, και στους δύο τοίχους του 40 ' +
                  'τεράστιοι ζωγραφισμένοι χάρτες. Είναι όλη η Ιταλία, περιοχή προς περιοχή: ' +
                  'στη μία πλευρά οι περιοχές που βλέπουν στη θάλασσα της δύσης, στην άλλη ' +
                  'εκείνες που βλέπουν στην Αδριατική, με τα βουνά των Απεννίνων να χωρίζουν ' +
                  'τον διάδρομο στη μέση, σαν να περπατάς πάνω στη ραχοκοκαλιά της χώρας. ' +
                  'Τους σχεδίασε ο μοναχός και γεωγράφος Ignazio Danti από το 1580 ως το ' +
                  '1583, για τον Πάπα Γρηγόριο ΙΓ΄, τον ίδιο Πάπα που έφτιαξε το ημερολόγιο ' +
                  'που χρησιμοποιούμε σήμερα. Λένε ότι οι χάρτες είναι σωστοί κατά 80%, ' +
                  'πράγμα εκπληκτικό για μια εποχή χωρίς δορυφόρους. Κάθε χάρτης έχει και ' +
                  'μικρές εικόνες από τις πόλεις της περιοχής.',
                en:
                  'A corridor 120 metres long with a golden ceiling, and on its two walls 40 ' +
                  'enormous painted maps. They are the whole of Italy, region by region: on ' +
                  'one side the regions facing the western sea, on the other those facing ' +
                  'the Adriatic, with the Apennine mountains splitting the corridor down the ' +
                  'middle, as if you were walking along the backbone of the country. They ' +
                  'were designed by the friar and geographer Ignazio Danti between 1580 and ' +
                  '1583 for Pope Gregory XIII, the same Pope who made the calendar we use ' +
                  'today. The maps are said to be about 80% accurate, which is astonishing ' +
                  'for a time without satellites. Each map also carries little pictures of ' +
                  'the region’s towns.',
              },
              question: {
                q: {
                  el: 'Τι χωρίζει τους χάρτες της μιας πλευράς του διαδρόμου από την άλλη;',
                  en: 'What separates the maps on one side of the corridor from the other?',
                },
                answers: [
                  { el: 'Τα βουνά των Απεννίνων', en: 'The Apennine mountains' },
                  { el: 'Ο ποταμός Πάδος', en: 'The river Po' },
                  { el: 'Τα σύνορα με τη Γαλλία', en: 'The border with France' },
                  { el: 'Η γραμμή του Ισημερινού', en: 'The line of the Equator' },
                ],
                explanation: {
                  el:
                    'Ο διάδρομος είναι η ραχοκοκαλιά της Ιταλίας. Δυτική θάλασσα από τη μία, ' +
                    'Αδριατική από την άλλη.',
                  en:
                    'The corridor is the backbone of Italy. Western sea on one side, Adriatic ' +
                    'on the other.',
                },
              },
            },
            {
              id: 'rome-vatican-museums-school-of-athens',
              name: { el: 'Η Σχολή των Αθηνών', en: 'The School of Athens' },
              blurb: {
                el:
                  'Ο Ραφαήλ ζωγράφισε αυτόν τον τοίχο από το 1509 ως το 1511, σε ένα δωμάτιο ' +
                  'όπου ο Πάπας υπέγραφε τα έγγραφά του. Είναι πέντε μέτρα ψηλός και σχεδόν ' +
                  'οκτώ πλατύς, και δείχνει τους σοφούς της αρχαίας Ελλάδας μαζεμένους σε ' +
                  'μια τεράστια αίθουσα με αψίδες. Στη μέση περπατούν ο Πλάτων, που δείχνει ' +
                  'τον ουρανό, και ο Αριστοτέλης, που απλώνει το χέρι προς τη γη. Ο Ραφαήλ ' +
                  'έδωσε στους αρχαίους τα πρόσωπα φίλων του: ο Πλάτων μοιάζει με τον ' +
                  'Λεονάρντο ντα Βίντσι, ο Ηράκλειτος που κάθεται σκεφτικός στα σκαλιά είναι ' +
                  'ο Μιχαήλ Άγγελος, ο Ευκλείδης με τον διαβήτη είναι ο αρχιτέκτονας ' +
                  'Μπραμάντε. Στη δεξιά άκρη ένας νέος με σκούρο καπέλο σε κοιτάζει ' +
                  'κατάματα: είναι ο ίδιος ο Ραφαήλ.',
                en:
                  'Raphael painted this wall between 1509 and 1511, in a room where the Pope ' +
                  'signed his documents. It is five metres tall and nearly eight wide, and ' +
                  'shows the wise men of ancient Greece gathered in a vast hall of arches. ' +
                  'In the middle walk Plato, pointing at the sky, and Aristotle, holding his ' +
                  'hand out towards the earth. Raphael gave the ancients the faces of his ' +
                  'friends: Plato looks like Leonardo da Vinci, Heraclitus sitting ' +
                  'thoughtfully on the steps is Michelangelo, Euclid bending over his ' +
                  'compasses is the architect Bramante. At the right edge a young man in a ' +
                  'dark cap looks straight out at you: that is Raphael himself.',
              },
              question: {
                q: {
                  el: 'Ποιανού το πρόσωπο έδωσε ο Ραφαήλ στον Πλάτωνα;',
                  en: 'Whose face did Raphael give to Plato?',
                },
                answers: [
                  { el: 'Του Λεονάρντο ντα Βίντσι', en: 'Leonardo da Vinci’s' },
                  { el: 'Του Πάπα Ιουλίου Β΄', en: 'Pope Julius II’s' },
                  { el: 'Του πατέρα του', en: 'His own father’s' },
                  { el: 'Του γλύπτη Gian Lorenzo Bernini', en: 'The sculptor Gian Lorenzo Bernini’s' },
                ],
                explanation: {
                  el:
                    'Ο Λεονάρντο ήταν ο πιο σοφός άνθρωπος που ήξερε ο Ραφαήλ, οπότε έγινε ' +
                    'ο πιο σοφός άνθρωπος της εικόνας.',
                  en:
                    'Leonardo was the wisest man Raphael knew, so he became the wisest man in ' +
                    'the picture.',
                },
              },
            },
            {
              id: 'rome-vatican-museums-mummies',
              name: { el: 'Οι αιγυπτιακές μούμιες', en: 'The Egyptian mummies' },
              blurb: {
                el:
                  'Ανάμεσα στις 24 συλλογές των μουσείων υπάρχει ένα ολόκληρο Αιγυπτιακό ' +
                  'Μουσείο, σε δωμάτια βαμμένα σκούρα για να φαντάζεσαι ότι είσαι μέσα σε ' +
                  'τάφο. Εδώ βρίσκονται μούμιες, δηλαδή σώματα ανθρώπων που οι Αιγύπτιοι ' +
                  'πριν από χιλιάδες χρόνια στέγνωσαν και τύλιξαν με λωρίδες λινού για να ' +
                  'κρατήσουν για πάντα, καθώς πίστευαν ότι ο άνθρωπος θα χρειαζόταν το σώμα ' +
                  'του σε μια άλλη ζωή. Δίπλα τους είναι οι ζωγραφισμένες ξύλινες θήκες ' +
                  'τους, οι σαρκοφάγοι, με μάτια, πρόσωπα και ιερογλυφικά. Πολλά από αυτά ' +
                  'τα αντικείμενα δεν ήρθαν από την Αίγυπτο κατευθείαν: τα είχαν φέρει οι ' +
                  'Ρωμαίοι αυτοκράτορες, που αγαπούσαν την Αίγυπτο και στόλιζαν με αυτά τις ' +
                  'επαύλεις τους.',
                en:
                  'Among the museums’ 24 collections is a whole Egyptian Museum, in rooms ' +
                  'painted dark so that you can imagine being inside a tomb. Here are ' +
                  'mummies: the bodies of people whom the Egyptians, thousands of years ' +
                  'ago, dried and wrapped in strips of linen so that they would last for ' +
                  'ever, because they believed a person would need their body in another ' +
                  'life. Beside them are their painted wooden cases, the sarcophagi, with ' +
                  'eyes, faces and hieroglyphs. Many of these objects did not come from ' +
                  'Egypt directly: Roman emperors, who loved Egypt, had brought them over to ' +
                  'decorate their villas.',
              },
              question: {
                q: {
                  el: 'Γιατί οι Αιγύπτιοι κρατούσαν τα σώματα των νεκρών;',
                  en: 'Why did the Egyptians preserve the bodies of the dead?',
                },
                answers: [
                  { el: 'Πίστευαν ότι θα τα χρειάζονταν σε άλλη ζωή', en: 'They believed they would need them in another life' },
                  { el: 'Για να τα δείχνουν στα μουσεία τους', en: 'So that they could show them in their museums' },
                  { el: 'Για να μη τα βρίσκουν οι Ρωμαίοι στρατιώτες', en: 'So that Roman soldiers would not find them' },
                  { el: 'Γιατί δεν είχαν χώρο για να τα θάβουν', en: 'Because there was no room to bury them anywhere' },
                ],
                explanation: {
                  el: 'Ένα σώμα που δεν σαπίζει, πίστευαν, μπορεί να ξαναχρησιμοποιηθεί. Οι λωρίδες λινού και το στέγνωμα το πετύχαιναν.',
                  en: 'A body that does not rot, they believed, can be used again. The linen strips and the drying did the job.',
                },
              },
            },
          ],
        },
        {
          id: 'rome-vatican-museums-chapel',
          emoji: '🖌️',
          name: { el: 'Η Καπέλα Σιξτίνα και η έξοδος', en: 'The Sistine Chapel and the way out' },
          intro: {
            el:
              'Όλοι οι διάδρομοι καταλήγουν εδώ. Είναι μια μεγάλη ορθογώνια αίθουσα, ' +
              'χτισμένη από το 1473 ως το 1481, όπου εκλέγονται οι Πάπες, και όλη η οροφή ' +
              'της είναι μια ζωγραφιά. Μιλάς ψιθυριστά και κοιτάς ψηλά. Μετά από αυτή τη ' +
              'στιγμή, το μόνο που μένει είναι μια σκάλα που στριφογυρίζει ως έξω.',
            en:
              'All the corridors end here. It is a big rectangular hall, built between 1473 ' +
              'and 1481, where popes are elected, and its entire ceiling is one painting. ' +
              'You speak in whispers and look up. After this, the only thing left is a ' +
              'staircase that spirals its way out.',
          },
          exhibits: [
            {
              id: 'rome-vatican-museums-ceiling',
              name: { el: 'Η οροφή του Μιχαήλ Άγγελου', en: 'Michelangelo’s ceiling' },
              blurb: {
                el:
                  'Το 1508 ο Πάπας Ιούλιος Β΄ ζήτησε από τον Μιχαήλ Άγγελο, που θεωρούσε ' +
                  'τον εαυτό του γλύπτη και όχι ζωγράφο, να ζωγραφίσει την οροφή αυτού του ' +
                  'παρεκκλησίου. Είναι περίπου 35 μέτρα μακριά και 14 πλατιά, πεντακόσια ' +
                  'τετραγωνικά μέτρα. Τέσσερα χρόνια δούλεψε όρθιος πάνω σε σκαλωσιές, με το ' +
                  'κεφάλι γερμένο πίσω, και δεν ξάπλωσε ποτέ, όσο κι αν το λένε οι ιστορίες. ' +
                  'Έγραψε μάλιστα ένα ποίημα για το πόσο πονούσαν ο λαιμός και η πλάτη του. ' +
                  'Στη μέση ζωγράφισε εννέα σκηνές από την αρχή του κόσμου, με πάνω από ' +
                  'τριακόσιες φιγούρες. Η πιο διάσημη είναι η Δημιουργία του Αδάμ: δύο ' +
                  'δάχτυλα που σχεδόν αγγίζονται. Είκοσι πέντε χρόνια αργότερα γύρισε και ' +
                  'ζωγράφισε ολόκληρο τον τοίχο πίσω από την Αγία Τράπεζα.',
                en:
                  'In 1508 Pope Julius II asked Michelangelo, who thought of himself as a ' +
                  'sculptor and not a painter, to paint the ceiling of this chapel. It is ' +
                  'about 35 metres long and 14 wide, five hundred square metres. For four ' +
                  'years he worked standing on scaffolding with his head tipped back, and he ' +
                  'never lay down, whatever the stories say. He even wrote a poem about how ' +
                  'much his neck and back hurt. Down the middle he painted nine scenes from ' +
                  'the beginning of the world, with more than three hundred figures in all. ' +
                  'The most famous is the Creation of Adam: two fingers almost touching. ' +
                  'Twenty-five years later he came back and painted the whole wall behind ' +
                  'the altar.',
              },
              question: {
                q: {
                  el: 'Πώς ζωγράφιζε ο Μιχαήλ Άγγελος την οροφή;',
                  en: 'How did Michelangelo paint the ceiling?',
                },
                answers: [
                  { el: 'Όρθιος πάνω σε σκαλωσιές', en: 'Standing on scaffolding' },
                  { el: 'Ξαπλωμένος ανάσκελα σε σανίδες', en: 'Lying on his back on planks' },
                  { el: 'Κρεμασμένος με σχοινιά', en: 'Hanging on ropes from the roof' },
                  { el: 'Από κάτω, με μακριά κοντάρια', en: 'From below, on very long poles' },
                ],
                explanation: {
                  el: 'Όρθιος, με το κεφάλι πίσω, τέσσερα χρόνια. Το ποίημά του για τον πόνο στον λαιμό σώζεται.',
                  en: 'Standing, head tipped back, for four years. His poem about the pain in his neck survives.',
                },
              },
            },
            {
              id: 'rome-vatican-museums-last-judgement',
              name: { el: 'Ο τοίχος της Κρίσης', en: 'The wall of the Judgement' },
              blurb: {
                el:
                  'Ο τοίχος πίσω από την Αγία Τράπεζα είναι μία μόνο εικόνα, από το πάτωμα ' +
                  'ως την οροφή. Ο Μιχαήλ Άγγελος τη ζωγράφισε από το 1536 ως το 1541, ' +
                  'πάνω από εξήντα χρονών, ένα τέταρτο του αιώνα αφότου τελείωσε την οροφή. ' +
                  'Δείχνει την τελευταία μέρα του κόσμου, με εκατοντάδες σώματα να ' +
                  'ανεβαίνουν και να κατεβαίνουν γύρω από τον Χριστό στο κέντρο. Πολλές ' +
                  'φιγούρες είναι στριμμένες και μυώδεις όπως ο κορμός του Μπελβεντέρε, το ' +
                  'άγαλμα που ο Μιχαήλ Άγγελος αγαπούσε στην αυλή. Από το 1980 ως το 1994 ' +
                  'ολόκληρο το παρεκκλήσι καθαρίστηκε, και κάτω από αιώνες καπνού από κεριά ' +
                  'φάνηκαν χρώματα τόσο έντονα που κάποιοι δεν πίστευαν ότι ήταν τα αρχικά.',
                en:
                  'The wall behind the altar is one single picture, floor to ceiling. ' +
                  'Michelangelo painted it between 1536 and 1541, when he was over sixty, a ' +
                  'quarter of a century after he finished the ceiling. It shows the last day ' +
                  'of the world, with hundreds of bodies rising and falling around Christ in ' +
                  'the centre. Many figures are twisted and muscular like the Belvedere ' +
                  'Torso, the statue Michelangelo loved in the courtyard. From 1980 to 1994 ' +
                  'the whole chapel was cleaned, and under centuries of candle smoke colours ' +
                  'appeared so bright that some people refused to believe they were the ' +
                  'originals.',
              },
              question: {
                q: {
                  el: 'Τι βρήκαν όταν καθάρισαν τις τοιχογραφίες από το 1980 ως το 1994;',
                  en: 'What was found when the frescoes were cleaned between 1980 and 1994?',
                },
                answers: [
                  { el: 'Πολύ πιο έντονα χρώματα', en: 'Much brighter colours' },
                  { el: 'Μια κρυμμένη υπογραφή', en: 'A hidden signature' },
                  { el: 'Μια δεύτερη εικόνα από κάτω', en: 'A second picture underneath' },
                  { el: 'Χρυσάφι μέσα στη μπογιά', en: 'Gold mixed into the paint' },
                ],
                explanation: {
                  el: 'Ο καπνός από τα κεριά είχε σκουρύνει τα πάντα για αιώνες. Από κάτω, τα χρώματα ήταν ζωντανά.',
                  en: 'Candle smoke had darkened everything for centuries. Underneath, the colours were vivid.',
                },
              },
            },
            {
              id: 'rome-vatican-museums-spiral-staircase',
              name: { el: 'Η διπλή σπειροειδής σκάλα', en: 'The double spiral staircase' },
              blurb: {
                el:
                  'Η τελευταία εικόνα των μουσείων δεν είναι πίνακας: είναι η σκάλα από την ' +
                  'οποία φεύγεις. Ο αρχιτέκτονας Giuseppe Momo τη σχεδίασε το 1932 ως ' +
                  'έξοδο, και είναι δύο σκάλες τυλιγμένες η μία μέσα στην άλλη, σαν δύο ' +
                  'φίδια: όσοι ανεβαίνουν δεν συναντούν ποτέ όσους κατεβαίνουν. Ο κύκλος ' +
                  'της έχει πλάτος περίπου δεκαπέντε μέτρα, με ένα άνοιγμα στη μέση και μια ' +
                  'γυάλινη οροφή που ρίχνει φως ως κάτω. Η ιδέα είναι πολύ παλιότερη: το ' +
                  '1505 ο Μπραμάντε είχε φτιάξει στο ίδιο παλάτι μια διπλή σπειροειδή ράμπα ' +
                  'χωρίς σκαλιά, για να ανεβαίνει ο Πάπας ως το σπίτι του με την άμαξα, ' +
                  'χωρίς να κατεβαίνει. Κοίτα κάτω από την κορυφή πριν κατέβεις: η σκάλα ' +
                  'μοιάζει με κοχύλι.',
                en:
                  'The last picture of the museums is not a painting: it is the staircase you ' +
                  'leave by. The architect Giuseppe Momo designed it in 1932 as the exit, and ' +
                  'it is two staircases wound inside each other like two snakes: people ' +
                  'going up never meet people coming down. Its circle is about fifteen ' +
                  'metres across, with an opening in the middle and a glass roof that pours ' +
                  'light all the way down. The idea is far older: in 1505 Bramante made a ' +
                  'double spiral ramp without steps in the same palace, so the Pope could ' +
                  'ride up to his rooms in his carriage. Look down from the top before you ' +
                  'descend: the staircase looks like a seashell.',
              },
              question: {
                q: {
                  el: 'Γιατί όσοι ανεβαίνουν τη σκάλα δεν συναντούν ποτέ όσους κατεβαίνουν;',
                  en: 'Why do people going up the staircase never meet people coming down?',
                },
                answers: [
                  { el: 'Είναι δύο σκάλες τυλιγμένες μαζί', en: 'It is two staircases wound together' },
                  { el: 'Ένας φύλακας τους αφήνει με τη σειρά', en: 'A guard lets them through in turns' },
                  { el: 'Η μία κατεύθυνση χρησιμοποιεί ασανσέρ', en: 'One direction uses a lift instead' },
                  { el: 'Η σκάλα γυρίζει σαν κυλιόμενη', en: 'The staircase moves like an escalator' },
                ],
                explanation: {
                  el: 'Δύο σπείρες, η μία μέσα στην άλλη. Διαλέγεις τη μία και δεν αλλάζεις ποτέ.',
                  en: 'Two spirals, one inside the other. You pick one and never switch.',
                },
              },
            },
          ],
        },
      ],
      riddles: [
        {
          id: 'rome-vatican-museums-riddle-1',
          difficulty: 1,
          prompt: {
            el:
              'Κάποτε έτρεχε νερό ανάμεσα στα λέπια μου. Ένας ποιητής με χρησιμοποίησε για να ' +
              'πει πόσο μεγάλο ήταν το πρόσωπο ενός γίγαντα, και δύο παγόνια με φυλάνε.',
            en:
              'Water once ran between my scales. A poet used me to say how big a giant’s face ' +
              'was, and two peacocks stand guard beside me.',
          },
          hint: {
            el: 'Πέφτω από τα πεύκα, αλλά εγώ είμαι από μπρούντζο.',
            en: 'My kind falls from pine trees, but I am made of bronze.',
          },
          answerExhibitId: 'rome-vatican-museums-pine-cone',
        },
        {
          id: 'rome-vatican-museums-riddle-2',
          difficulty: 2,
          prompt: {
            el:
              'Με βρήκε ένας αγρότης μέσα στο χώμα, και ένας Πάπας με έβαλε σε μια αυλή. ' +
              'Από εμένα ξεκίνησαν όλα εδώ μέσα. Το δεξί μου χέρι έλειπε τετρακόσια χρόνια.',
            en:
              'A farmer found me in the soil, and a Pope put me in a courtyard. Everything in ' +
              'here began with me. My right arm was missing for four hundred years.',
          },
          hint: {
            el: 'Δεν είμαι μόνος: τα δύο παιδιά μου παλεύουν μαζί μου.',
            en: 'I am not alone: my two sons are struggling beside me.',
          },
          answerExhibitId: 'rome-vatican-museums-laocoon',
        },
        {
          id: 'rome-vatican-museums-riddle-3',
          difficulty: 3,
          prompt: {
            el:
              'Δεν έχω κεφάλι, χέρια ούτε κνήμες, κι όμως ο μεγαλύτερος γλύπτης του κόσμου ' +
              'αρνήθηκε να μου τα δώσει. Αντί γι’ αυτό, με ζωγράφισε εκατό φορές σε μια οροφή.',
            en:
              'I have no head, no arms and no lower legs, and yet the greatest sculptor in ' +
              'the world refused to give them to me. Instead he painted me a hundred times ' +
              'on a ceiling.',
          },
          hint: {
            el: 'Στη βάση μου υπογράφει ένας Αθηναίος.',
            en: 'An Athenian has signed my base.',
          },
          answerExhibitId: 'rome-vatican-museums-torso',
        },
        {
          id: 'rome-vatican-museums-riddle-4',
          difficulty: 2,
          prompt: {
            el:
              'Είμαι το τελευταίο πράγμα που βλέπεις εδώ, και δεν είμαι έργο τέχνης. Είμαι ' +
              'δύο δρόμοι τυλιγμένοι ο ένας μέσα στον άλλο, και κανείς δεν με ανεβαίνει ' +
              'σήμερα: όλοι με κατεβαίνουν.',
            en:
              'I am the last thing you see here, and I am not a work of art. I am two paths ' +
              'wound inside each other, and nobody climbs me today: everyone comes down.',
          },
          hint: {
            el: 'Από ψηλά μοιάζω με κοχύλι.',
            en: 'From above I look like a seashell.',
          },
          answerExhibitId: 'rome-vatican-museums-spiral-staircase',
        },
      ],
    },
  },

  // ------------------------------------------------------------------- bioparco
  {
    id: 'rome-bioparco',
    cityId: 'rome',
    emoji: '🦁',
    category: 'nature',
    difficulty: 1,

    name: { el: 'Μπιοπάρκο', en: 'The Bioparco' },
    tagline: {
      el: 'Ο ζωολογικός κήπος που αντικατέστησε τα κάγκελα με τάφρους',
      en: 'The zoo that swapped bars for moats',
    },
    story: {
      el:
        'Μέσα στο μεγάλο πάρκο της Villa Borghese, στα βόρεια του κέντρου, άνοιξε στις 5 ' +
        'Ιανουαρίου 1911 ο ζωολογικός κήπος της Ρώμης. Τον σχεδίασε ο Γερμανός Carl ' +
        'Hagenbeck, που είχε μια ιδέα καινούργια για την εποχή του: αντί για κλουβιά με ' +
        'κάγκελα, τα ζώα θα ζούσαν σε ανοιχτούς χώρους με πράσινο, χωρισμένους από τους ' +
        'επισκέπτες με τάφρους και χαντάκια, ώστε να τα βλέπεις χωρίς σίδερα ανάμεσα. ' +
        'Στην αρχή ο κήπος είχε δώδεκα εκτάρια· σήμερα έχει δεκαεπτά, και φιλοξενεί ' +
        'περίπου 1.100 ζώα από 222 είδη: θηλαστικά, ερπετά και πουλιά. Το 1935 ο ' +
        'αρχιτέκτονας Raffaele De Vico, ο ίδιος που έφτιαξε τον Κήπο με τις Πορτοκαλιές, ' +
        'έχτισε εδώ ένα σπίτι για τα ερπετά, που έκλεισε το 1970 και ξανάνοιξε ' +
        'ανακαινισμένο το 1983. Το 1998 ο κήπος άλλαξε όνομα και σκοπό: έγινε Bioparco, ' +
        'και η δουλειά του δεν είναι πια να δείχνει σπάνια ζώα αλλά να τα προστατεύει και ' +
        'να μαθαίνει στα παιδιά γιατί χρειάζονται προστασία. Θα δεις ελέφαντες, ' +
        'λιοντάρια, χιμπατζήδες, λευκούς ρινόκερους και πιγκουίνους της Αφρικής, μια ' +
        'βόλτα από τον ζωγραφισμένο κήπο της Λιβίας.',
      en:
        'Inside the great park of the Villa Borghese, north of the centre, the Rome zoo ' +
        'opened on 5 January 1911. It was designed by the German Carl Hagenbeck, who had ' +
        'an idea that was new for his time: instead of cages with bars, the animals would ' +
        'live in open, green spaces separated from the visitors by moats and ditches, so ' +
        'that you saw them with no iron in between. At first the zoo covered twelve ' +
        'hectares; today it has seventeen, and is home to about 1,100 animals of 222 ' +
        'species: mammals, reptiles and birds. In 1935 the architect Raffaele De Vico, the ' +
        'same man who made the Orange Garden, built a reptile house here, which closed in ' +
        '1970 and reopened after renovation in 1983. In 1998 the zoo changed its name and ' +
        'its purpose: it became the Bioparco, and its job is no longer to show off rare ' +
        'animals but to protect them and to teach children why they need protecting. You ' +
        'will meet elephants, lions, chimpanzees, white rhinos and African penguins, a ' +
        'stroll away from Livia’s painted garden.',
    },
    facts: [
      {
        el: 'Άνοιξε στις 5 Ιανουαρίου 1911, σχεδιασμένος από τον Carl Hagenbeck.',
        en: 'It opened on 5 January 1911, designed by Carl Hagenbeck.',
      },
      {
        el: 'Έχει 17 εκτάρια και περίπου 1.100 ζώα από 222 είδη.',
        en: 'It covers 17 hectares and keeps about 1,100 animals of 222 species.',
      },
      {
        el: 'Λέγεται Bioparco από το 1998, όταν άλλαξε τον σκοπό του στην προστασία των ζώων.',
        en: 'It has been called the Bioparco since 1998, when its purpose shifted to conservation.',
      },
    ],
    location: {
      lat: 41.91747,
      lng: 12.48519,
      anchor: 'area',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q864639', deltaM: 0 },
        { kind: 'osm', ref: 'relation/5657594', deltaM: 176 },
        { kind: 'wikipedia', ref: 'Bioparco di Roma', deltaM: 8 },
      ],
      verifiedAt: '2026-09-12',
      // From the venue's own page: bioparco.it — "Viale del Giardino Zoologico, 20".
      findIt: {
        el: 'Η είσοδος είναι στη Viale del Giardino Zoologico 20, μέσα στο πάρκο της Villa Borghese.',
        en: 'The way in is at Viale del Giardino Zoologico 20, inside the Villa Borghese park.',
      },
      map: { x: 0.632, y: 0.16 },
    },
    question: {
      q: {
        el: 'Ποια ήταν η καινούργια ιδέα του Hagenbeck για τον ζωολογικό κήπο;',
        en: 'What was Hagenbeck’s new idea for the zoo?',
      },
      answers: [
        { el: 'Τάφροι αντί για κάγκελα', en: 'Moats instead of bars' },
        { el: 'Ζώα ελεύθερα στους δρόμους', en: 'Animals loose among visitors' },
        { el: 'Μόνο ζώα από την Ιταλία', en: 'Only animals from Italy' },
        { el: 'Γυάλινα κλουβιά αντί σιδερένια', en: 'Glass cages instead of iron' },
      ],
      explanation: {
        el:
          'Ένα χαντάκι κρατάει ένα λιοντάρι στη θέση του εξίσου καλά με τα κάγκελα, αλλά ' +
          'εσύ το βλέπεις χωρίς τίποτα ανάμεσα.',
        en:
          'A ditch keeps a lion where it is just as well as bars do, but you see it with ' +
          'nothing in the way.',
      },
    },
  },
];

export const trails: Trail[] = [
  {
    id: 'rome-first-day',
    cityId: 'rome',
    emoji: '🏛️',
    name: { el: 'Πρώτη φορά στη Ρώμη', en: 'First time in Rome' },
    promise: {
      el: 'Θα έχεις δει την αρένα, την πλατεία που κυβερνούσε, ένα μάτι στον ουρανό και δύο σιντριβάνια.',
      en: 'You will have seen the arena, the square that ruled, an eye open to the sky and two fountains.',
    },
    placeIds: [
      'rome-colosseum',
      'rome-roman-forum',
      'rome-campidoglio',
      'rome-pantheon',
      'rome-trevi-fountain',
      'rome-piazza-navona',
    ],
  },
  {
    id: 'rome-two-hours-of-hands',
    cityId: 'rome',
    emoji: '🖐️',
    name: { el: 'Δύο ώρες με τα χέρια', en: 'Two hours, hands on' },
    promise: {
      el: 'Ένα στόμα που δαγκώνει, ένας ιππόδρομος για τρέξιμο, μια κλειδαρότρυπα και μια βεράντα.',
      en: 'A mouth that bites, a racetrack to run on, a keyhole and a terrace.',
    },
    placeIds: ['rome-bocca-della-verita', 'rome-circus-maximus', 'rome-orange-garden'],
  },
  {
    id: 'rome-rainy-day',
    cityId: 'rome',
    emoji: '☔',
    name: { el: 'Μια μέρα με βροχή', en: 'A rainy day' },
    promise: {
      el: 'Τρία μουσεία με στέγη και ένας θόλος όπου η βροχή μπαίνει επίτηδες.',
      en: 'Three museums with a roof, and one dome where the rain is let in on purpose.',
    },
    placeIds: [
      'rome-capitoline-museums',
      'rome-palazzo-massimo',
      'rome-santa-maria-degli-angeli',
      'rome-vatican-museums',
      'rome-pantheon',
    ],
  },
  {
    id: 'rome-across-the-river',
    cityId: 'rome',
    emoji: '👼',
    name: { el: 'Απέναντι από το ποτάμι', en: 'Across the river' },
    promise: {
      el: 'Ένας τάφος που έγινε κάστρο, μια γέφυρα με αγγέλους και η μικρότερη χώρα του κόσμου.',
      en: 'A tomb that became a castle, a bridge of angels and the smallest country in the world.',
    },
    placeIds: ['rome-castel-sant-angelo', 'rome-st-peters-square', 'rome-vatican-museums'],
  },
  {
    id: 'rome-day-for-playing',
    cityId: 'rome',
    emoji: '🦁',
    name: { el: 'Μια μέρα για παιχνίδι', en: 'A day for playing' },
    promise: {
      el: 'Σκαλιά για μέτρημα, μια λαϊκή αγορά για μυρωδιές, και λιοντάρια χωρίς κάγκελα.',
      en: 'Steps to count, a market to smell, and lions with no bars.',
    },
    placeIds: ['rome-spanish-steps', 'rome-campo-de-fiori', 'rome-bioparco'],
  },
];
