/**
 * WiseBot World — Bruges.
 *
 * Seventeen places, two of them museums with an interior. The second city built by
 * conversion rather than by fresh writing: the Explorer product's ten spots are the raw
 * material, reshaped to this module's lengths and voice and given sourced coordinates,
 * museums and riddles. Explorer's `riddle`, `parentHint` and `onSite` fields belong to a
 * GPS treasure hunt and are not carried over; its hand-written lat/lng are exactly what
 * this pipeline exists to replace and were not read at all.
 *
 * Every coordinate is copied field for field from `data/world/coords/bruges.json`.
 * Nothing graded `D`. No place claims an `entrance`, because no door here has been
 * measured. Every place carries `osm: fetch failed` in the resolver's warnings: the
 * Overpass API was unreachable from this machine for the whole session, so eleven places
 * grade C on Wikidata alone and six grade B with Wikipedia behind them. The coordinate is
 * Wikidata's either way — OSM is only ever a cross-check and a missing one moves nothing.
 *
 * Four judgement calls a reader should be able to check:
 *
 *  - **No Explorer spot was dropped.** Two were split. Explorer's `markt` covered both the
 *    square and the bell tower, which are two Wikidata items 82 m apart with two different
 *    stories; `burg` covered the square, the town hall and the Basilica of the Holy Blood,
 *    and the two buildings ship while the square itself does not, because the buildings are
 *    what a child actually looks at.
 *  - **Five places were added**: Gruuthuse, the Groeningemuseum, the Sint-Janshospitaal,
 *    the Sint-Sebastiaansgilde and the Koningin Astridpark. Explorer offers no museum a
 *    child can walk into, and this module needs two.
 *  - **The Begijnhof was re-seeded.** Its own Wikidata item, Q2528092, carries a coordinate
 *    rounded to whole arcminutes that lands about 500 m west of the courtyard, across the
 *    ring canal. The pin here is Q101248776, the Begijnhofbrug — the bridge and gate a
 *    visitor crosses to get in, about 20 m from the door. `location.note` says so on the
 *    place itself.
 *  - **The Kruispoort was considered and dropped**, for the same reason and without a
 *    usable substitute: its Wikidata point is 51.2125,3.24, some 210 m from the gate. The
 *    gate is told inside the windmill's story instead of being pinned.
 *
 * `el` and `en` only. The other four arrive as overlay files, in the order nl, fr, de, es,
 * and never as extra keys in here.
 */

import type { Place, Trail } from '../types';

export const places: Place[] = [
  // ---------------------------------------------------------------------- markt
  {
    id: 'bruges-markt',
    cityId: 'bruges',
    emoji: '🏘️',
    category: 'landmark',
    difficulty: 1,

    name: { el: 'Markt, η πλατεία της αγοράς', en: 'The Markt' },
    tagline: {
      el: 'Η πλατεία που έγινε αγορά πριν από χίλια χρόνια',
      en: 'The square that became a market a thousand years ago',
    },
    story: {
      el:
        'Η Markt είναι η μεγάλη πλατεία της Μπριζ, και η παλιότερη δουλειά της πόλης έγινε ' +
        'εδώ: το εμπόριο. Από τον δέκατο αιώνα οι έμποροι άπλωναν εδώ τους πάγκους τους, και ' +
        'η αγορά στήνεται ακόμη κάθε Τετάρτη πρωί, στο ίδιο ακριβώς σημείο. Γύρω γύρω, τα ' +
        'σπίτια έχουν στέγες σαν σκαλοπάτια, βαμμένες κόκκινες, ώχρα και σκούρες πράσινες. ' +
        'Δεν είναι για ομορφιά: με σκαλοπάτια ο χτίστης ανεβαίνει ως την κορυφή χωρίς σκαλωσιά. ' +
        'Στη μέση στέκονται δύο χάλκινοι άντρες με σηκωμένα όπλα. Δεν είναι βασιλιάδες. Ο Jan ' +
        'Breydel ήταν χασάπης και ο Pieter de Coninck υφαντής, δύο τεχνίτες που το 1302 ' +
        'οδήγησαν τους Φλαμανδούς εναντίον των ιπποτών του βασιλιά της Γαλλίας και νίκησαν. Η ' +
        'μάχη έμεινε στην ιστορία ως η Μάχη των Χρυσών Σπιρουνιών, επειδή οι νικητές μάζεψαν ' +
        'από το χωράφι εκατοντάδες χρυσά σπιρούνια ιπποτών και τα κρέμασαν μέσα σε μια ' +
        'εκκλησία. Σήμερα η πλατεία είναι πέτρινη και ήσυχη. Κάθε Τετάρτη όμως ξαναγίνεται ' +
        'αυτό που ήταν πάντα: μια αγορά.',
      en:
        'The Markt is the great square of Bruges, and the city’s oldest job was done here: ' +
        'trading. From the tenth century merchants spread their stalls across it, and a market ' +
        'is still set up every Wednesday morning on exactly the same ground. All around, the ' +
        'houses have roofs shaped like staircases, painted red, ochre and dark green. They are ' +
        'not stepped for prettiness: with steps a builder can climb to the very top without a ' +
        'scaffold. In the middle stand two bronze men with raised weapons. They are not kings. ' +
        'Jan Breydel was a butcher and Pieter de Coninck a weaver, two craftsmen who in 1302 ' +
        'led the Flemish against the knights of the French king and won. The fight is ' +
        'remembered as the Battle of the Golden Spurs, because the winners gathered hundreds ' +
        'of knights’ golden spurs from the field and hung them inside a church. Today the ' +
        'square is paved and quiet. But every Wednesday it turns back into what it always ' +
        'was: a market.',
    },
    facts: [
      {
        el: 'Η αγορά στήνεται εδώ κάθε Τετάρτη πρωί, όπως εδώ και αιώνες.',
        en: 'A market is set up here every Wednesday morning, as it has been for centuries.',
      },
      {
        el: 'Ο Jan Breydel ήταν χασάπης και ο Pieter de Coninck υφαντής.',
        en: 'Jan Breydel was a butcher and Pieter de Coninck was a weaver.',
      },
      {
        el: 'Η Μάχη των Χρυσών Σπιρουνιών δόθηκε στις 11 Ιουλίου 1302.',
        en: 'The Battle of the Golden Spurs was fought on 11 July 1302.',
      },
    ],
    location: {
      lat: 51.2085,
      lng: 3.22444,
      anchor: 'area',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q1108938', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Markt, Bruges', deltaM: 19 },
      ],
      verifiedAt: '2026-09-14',
      findIt: {
        el: 'Η πλατεία απλώνεται μπροστά στον πύργο με τις καμπάνες. Τα δύο χάλκινα αγάλματα στέκονται στη μέση της.',
        en: 'The square opens out in front of the bell tower. The two bronze statues stand in the middle of it.',
      },
    },
    question: {
      q: {
        el: 'Τι δουλειά έκαναν οι δύο ήρωες του αγάλματος;',
        en: 'What jobs did the two heroes on the statue have?',
      },
      answers: [
        { el: 'Χασάπης και υφαντής', en: 'A butcher and a weaver' },
        { el: 'Στρατιώτης και γιατρός', en: 'A soldier and a doctor' },
        { el: 'Ζωγράφος και μουσικός', en: 'A painter and a musician' },
        { el: 'Ναύτης και μυλωνάς', en: 'A sailor and a miller' },
      ],
      explanation: {
        el:
          'Ο Jan Breydel ήταν χασάπης και ο Pieter de Coninck υφαντής. Δύο τεχνίτες της πόλης, ' +
          'όχι ευγενείς, οδήγησαν τη Φλάνδρα στη νίκη του 1302.',
        en:
          'Jan Breydel was a butcher and Pieter de Coninck a weaver. Two craftsmen of the town, ' +
          'not noblemen, led Flanders to the victory of 1302.',
      },
    },
  },

  // -------------------------------------------------------------------- belfort
  {
    id: 'bruges-belfort',
    cityId: 'bruges',
    emoji: '🔔',
    category: 'landmark',
    difficulty: 1,

    name: { el: 'Belfort, ο πύργος των καμπανών', en: 'The Belfort' },
    tagline: {
      el: 'Ογδόντα τρία μέτρα και τριακόσια εξήντα έξι σκαλιά',
      en: 'Eighty-three metres up, three hundred and sixty-six steps',
    },
    story: {
      el:
        'Το Belfort είναι ο πύργος με τις καμπάνες και το σήμα της Μπριζ. Έχει ύψος 83 μέτρα ' +
        'και 366 σκαλιά ως την κορυφή, σχεδόν όσες οι μέρες ενός χρόνου. Χτίστηκε σε τρεις ' +
        'δόσεις, και φαίνεται: τα δύο κάτω κομμάτια είναι τετράγωνα και από κόκκινο τούβλο, ' +
        'από τον 13ο και τον 14ο αιώνα, ενώ το πάνω είναι οκτάγωνο, από ανοιχτόχρωμη πέτρα, ' +
        'και προστέθηκε γύρω στο 1480. Δύο φορές του έβαλαν ξύλινη μυτερή κορυφή και δύο ' +
        'φορές κάηκε, το 1493 και το 1741. Μετά τη δεύτερη φωτιά η πόλη δεν ξαναπροσπάθησε, και γι’ ' +
        'αυτό ο πύργος τελειώνει κοντός. Οι καμπάνες του δεν ήταν μουσική· ήταν ρολόι και ' +
        'τηλέφωνο μαζί, και έλεγαν πότε ξυπνάει η πόλη, πότε ανοίγει η αγορά, πότε κλείνουν ' +
        'οι πύλες, πότε υπάρχει κίνδυνος. Ψηλά, σε ένα δωμάτιο, φυλάγονταν τα επίσημα χαρτιά ' +
        'της Μπριζ πίσω από σιδερένιες πόρτες με δέκα κλειδαριές. Σήμερα 47 καμπάνες παίζουν ' +
        'μελωδίες πάνω από την πλατεία.',
      en:
        'The Belfort is the bell tower and the emblem of Bruges. It stands 83 metres high with ' +
        '366 steps to the top, almost as many as there are days in a year. It was built in ' +
        'three goes, and you can see it: the two lower parts are square and made of red brick, ' +
        'from the 13th and 14th centuries, while the top is eight-sided, of pale stone, and ' +
        'was added around 1480. Twice a wooden spire was put on it and twice the spire burned, ' +
        'in 1493 and in 1741. After the second fire the city did not try again, which is why ' +
        'the tower ends short. Its bells were not music; they were a clock and a telephone at ' +
        'once, telling the city when to wake, when the market opened, when the gates shut, ' +
        'when there was danger. High up, in one room, the official papers of Bruges were kept ' +
        'behind iron doors with ten locks. Today 47 bells play tunes above the square.',
    },
    facts: [
      {
        el: 'Έχει ύψος 83 μέτρα και 366 σκαλιά ως την κορυφή.',
        en: 'It is 83 metres tall and has 366 steps to the top.',
      },
      {
        el: 'Το καμπαναριό του έχει 47 καμπάνες.',
        en: 'Its carillon holds 47 bells.',
      },
      {
        el: 'Η ξύλινη κορυφή του κάηκε δύο φορές, το 1493 και το 1741.',
        en: 'Its wooden spire burned down twice, in 1493 and in 1741.',
      },
      {
        el: 'Γέρνει σχεδόν ένα μέτρο προς τα νοτιοανατολικά.',
        en: 'It leans almost a metre towards the south-east.',
      },
    ],
    location: {
      lat: 51.20798,
      lng: 3.2253,
      anchor: 'centroid',
      confidence: 'C',
      sources: [
        { kind: 'wikidata', ref: 'Q2441211', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Belfry of Bruges', deltaM: 56 },
      ],
      verifiedAt: '2026-09-14',
      note:
        'Wikipedia sits 56 m away, which is the width of the hall block the tower rises out ' +
        'of rather than a disagreement about where the tower is. The OSM cross-check could ' +
        'not run: the Overpass fetch failed all session.',
      findIt: {
        el: 'Στη νότια πλευρά της Markt. Η σκάλα ξεκινάει από την εσωτερική αυλή, κάτω από την καμάρα.',
        en: 'On the south side of the Markt. The stairs start from the inner courtyard, under the archway.',
      },
    },
    question: {
      q: {
        el: 'Γιατί η πόρτα των χαρτιών της πόλης είχε δέκα κλειδαριές;',
        en: 'Why did the door to the city’s papers have ten locks?',
      },
      answers: [
        { el: 'Για να μην ανοίγει μόνος κανείς', en: 'So nobody could open it alone' },
        { el: 'Για να μη σκουριάζει το σίδερο', en: 'So the iron would not go rusty' },
        { el: 'Για να ζυγίζει πιο πολύ η πόρτα', en: 'So the door would weigh more' },
        { el: 'Για να χωράνε δέκα κλειδιά μαζί', en: 'So ten keys could hang together' },
      ],
      explanation: {
        el:
          'Οι δέκα κλειδαριές είχαν δέκα κλειδιά, και το καθένα το κρατούσε άλλος άνθρωπος. ' +
          'Χρειάζονταν και οι δέκα μαζί στο ίδιο δωμάτιο για να ανοίξει η πόρτα.',
        en:
          'The ten locks had ten keys, and a different person kept each one. All ten had to be ' +
          'in the same room before the door would open.',
      },
    },
  },

  // ------------------------------------------------------------------- stadhuis
  {
    id: 'bruges-stadhuis',
    cityId: 'bruges',
    emoji: '🏛️',
    category: 'history',
    difficulty: 2,

    name: { el: 'Stadhuis, το Δημαρχείο', en: 'The Stadhuis' },
    tagline: {
      el: 'Έξι αιώνες στην ίδια δουλειά, στο ίδιο κτίριο',
      en: 'Six centuries of the same job in the same building',
    },
    story: {
      el:
        'Το Stadhuis χτίστηκε από το 1376 ως το 1421 και είναι από τα παλιότερα δημαρχεία των ' +
        'Κάτω Χωρών. Οι κάτοικοι της Μπριζ ήθελαν να δείξουν πόσο πλούσια ήταν η πόλη τους, ' +
        'οπότε γέμισαν την πρόσοψη με μυτερά παράθυρα, μικρά πυργάκια και δεκάδες αγάλματα ' +
        'κόμηδων και κοντεσών, καθένα στη δική του κόγχη. Τα αγάλματα που βλέπεις σήμερα δεν ' +
        'είναι τα αρχικά: τα παλιά καταστράφηκαν το 1792, όταν την πόλη κατέλαβαν τα γαλλικά ' +
        'επαναστατικά στρατεύματα, και ξαναφτιάχτηκαν πολύ αργότερα. Στον πρώτο όροφο υπάρχει ' +
        'η Γοτθική Αίθουσα, με ξύλινη οροφή σαν ανάποδη βάρκα, βαμμένη με χρώματα και ' +
        'χρυσάφι. Το πιο εντυπωσιακό όμως δεν είναι η διακόσμηση. Είναι ότι το κτίριο κάνει ' +
        'ακόμη ακριβώς τη δουλειά για την οποία χτίστηκε: εδώ μέσα αποφασίζουν οι άνθρωποι ' +
        'που κυβερνούν τη Μπριζ, όπως γίνεται εδώ και περισσότερα από εξακόσια χρόνια. Η ' +
        'πλατεία μπροστά του λέγεται Burg, που σημαίνει κάστρο, γιατί εδώ στεκόταν κάποτε το ' +
        'κάστρο του κόμη της Φλάνδρας.',
      en:
        'The Stadhuis was built between 1376 and 1421 and is one of the oldest town halls in ' +
        'the Low Countries. The people of Bruges wanted to show how rich their city was, so ' +
        'they filled the front with pointed windows, little turrets and dozens of statues of ' +
        'counts and countesses, each in its own niche. The statues you see today are not the ' +
        'first ones: the old ones were destroyed in 1792, when French revolutionary troops ' +
        'took the city, and they were remade much later. On the first floor is the Gothic ' +
        'Hall, with a wooden ceiling like an upturned boat, painted in colours and gold. The ' +
        'most impressive thing, though, is not the decoration. It is that the building still ' +
        'does exactly the job it was built for: inside it the people who govern Bruges make ' +
        'their decisions, as they have for more than six hundred years. The square in front ' +
        'is called the Burg, which means castle, because the castle of the Count of Flanders ' +
        'once stood here.',
    },
    facts: [
      {
        el: 'Χτίστηκε από το 1376 ως το 1421.',
        en: 'It was built between 1376 and 1421.',
      },
      {
        el: 'Τα αγάλματα της πρόσοψης καταστράφηκαν το 1792 και ξαναφτιάχτηκαν αργότερα.',
        en: 'The statues on its front were destroyed in 1792 and remade later.',
      },
      {
        el: 'Η πόλη κυβερνιέται από αυτό το κτίριο πάνω από 600 χρόνια.',
        en: 'The city has been governed from this building for over 600 years.',
      },
    ],
    location: {
      lat: 51.20806,
      lng: 3.22694,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q905848', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Bruges City Hall', deltaM: 5 },
      ],
      verifiedAt: '2026-09-14',
      note:
        'Declared in the seed as a neighbour of the Basilica of the Holy Blood: the two ' +
        'stand on the same corner of the Burg, about 30 m apart. That is a real adjacency, ' +
        'not one pin used twice.',
      findIt: {
        el: 'Στην πλατεία Burg, το κτίριο με τα μυτερά παράθυρα και τα αγαλματάκια στις κόγχες.',
        en: 'On the Burg square, the building with pointed windows and small statues in niches.',
      },
    },
    question: {
      q: {
        el: 'Τι υπήρχε στην πλατεία Burg πριν από το δημαρχείο;',
        en: 'What stood on the Burg square before the town hall?',
      },
      answers: [
        { el: 'Το κάστρο του κόμη', en: 'The castle of the count' },
        { el: 'Ένα μεγάλο λιμάνι', en: 'A large busy harbour' },
        { el: 'Ένας ξύλινος μύλος', en: 'A mill made of wood' },
        { el: 'Μια πέτρινη γέφυρα', en: 'A bridge of grey stone' },
      ],
      explanation: {
        el:
          'Ο κόμης της Φλάνδρας έχτισε εδώ κάστρο πριν από περισσότερα από 1.100 χρόνια, και ' +
          'γύρω του μεγάλωσε η πόλη. Το κάστρο χάθηκε· το όνομα Burg, που σημαίνει κάστρο, έμεινε.',
        en:
          'The Count of Flanders built a castle here more than 1,100 years ago, and the city ' +
          'grew around it. The castle is gone; the name Burg, which means castle, stayed.',
      },
    },
  },

  // ---------------------------------------------------------------- heilig bloed
  {
    id: 'bruges-heilig-bloed',
    cityId: 'bruges',
    emoji: '🕯️',
    category: 'history',
    difficulty: 3,

    name: { el: 'Βασιλική του Αγίου Αίματος', en: 'The Basilica of the Holy Blood' },
    tagline: {
      el: 'Δύο εκκλησίες σε ένα κτίριο, η μία πάνω στην άλλη',
      en: 'Two churches in one building, stacked one above the other',
    },
    story: {
      el:
        'Στη γωνία της πλατείας Burg στέκεται μια εκκλησία που είναι στην πραγματικότητα δύο ' +
        'εκκλησίες. Η κάτω, το παρεκκλήσι του Αγίου Βασιλείου, χτίστηκε τον 12ο αιώνα και ' +
        'είναι χαμηλή, σκοτεινή και σχεδόν χωρίς στολίδια: χοντροί πέτρινοι τοίχοι και μικρά ' +
        'παράθυρα. Ανεβαίνεις μια σκάλα και βρίσκεσαι σε έναν εντελώς διαφορετικό χώρο, ' +
        'ξαναχτισμένο τον 19ο αιώνα, γεμάτο χρώματα, τοιχογραφίες και χρυσά αγάλματα. Η ίδια ' +
        'πόρτα, δύο κόσμοι. Στην πάνω εκκλησία φυλάγεται ένα μικρό φιαλίδιο από ορεία ' +
        'κρύσταλλο, που έφτασε στη Μπριζ πριν από περισσότερα από 800 χρόνια, στα χρόνια των ' +
        'Σταυροφοριών. Οι άνθρωποι της πόλης πιστεύουν ότι μέσα του υπάρχει αίμα του Χριστού, ' +
        'και από αυτό πήρε το όνομά της η εκκλησία. Μία φορά τον χρόνο, την Ημέρα της ' +
        'Αναλήψεως, το φιαλίδιο βγαίνει έξω και περνάει από τους δρόμους σε μια τεράστια ' +
        'πομπή, με χιλιάδες κατοίκους ντυμένους σαν να ζούμε ακόμη στον Μεσαίωνα. Η UNESCO ' +
        'την κατέγραψε το 2009 ως ζωντανή κληρονομιά.',
      en:
        'In the corner of the Burg square stands a church that is really two churches. The ' +
        'lower one, the chapel of Saint Basil, was built in the 12th century and is low, dark ' +
        'and almost bare: thick stone walls and small windows. You climb a staircase and find ' +
        'yourself somewhere completely different, rebuilt in the 19th century, full of colour, ' +
        'wall paintings and golden statues. The same door, two worlds. In the upper church a ' +
        'small phial of rock crystal is kept, which reached Bruges more than 800 years ago, in ' +
        'the years of the Crusades. The people of the city believe it holds the blood of ' +
        'Christ, and that is where the church gets its name. Once a year, on Ascension Day, ' +
        'the phial goes outside and travels through the streets in an enormous procession, ' +
        'with thousands of residents dressed as though the Middle Ages had never ended. ' +
        'UNESCO listed it in 2009 as living heritage.',
    },
    facts: [
      {
        el: 'Το κάτω παρεκκλήσι είναι του 12ου αιώνα, το πάνω ξαναχτίστηκε τον 19ο.',
        en: 'The lower chapel is 12th century; the upper one was rebuilt in the 19th.',
      },
      {
        el: 'Η πομπή του Αγίου Αίματος γίνεται κάθε χρόνο την Ημέρα της Αναλήψεως.',
        en: 'The Procession of the Holy Blood takes place each year on Ascension Day.',
      },
      {
        el: 'Η UNESCO κατέγραψε την πομπή ως άυλη πολιτιστική κληρονομιά το 2009.',
        en: 'UNESCO listed the procession as intangible cultural heritage in 2009.',
      },
    ],
    location: {
      lat: 51.20833,
      lng: 3.22694,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q522604', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Basilica of the Holy Blood', deltaM: 24 },
      ],
      verifiedAt: '2026-09-14',
      note:
        'Wikidata labels this item «Museum van het Heilig Bloed» in Dutch, which reads like ' +
        'the institution, but its P31 is minor basilica and the Dutch article for the ' +
        'basilica links to it. It is the building. Declared a neighbour of the Stadhuis.',
      findIt: {
        el: 'Στη νοτιοδυτική γωνία της Burg, δίπλα στο δημαρχείο. Η σκάλα για την πάνω εκκλησία είναι αμέσως μέσα.',
        en: 'In the south-west corner of the Burg, next to the town hall. The stairs to the upper church are just inside.',
      },
    },
    question: {
      q: {
        el: 'Τι είναι ασυνήθιστο στο κτίριο αυτής της εκκλησίας;',
        en: 'What is unusual about the building of this church?',
      },
      answers: [
        { el: 'Έχει δύο εκκλησίες, τη μία πάνω στην άλλη', en: 'It holds two churches, one above the other' },
        { el: 'Είναι σκαλισμένη μέσα σε έναν μεγάλο βράχο', en: 'It is carved into the side of a great rock' },
        { el: 'Είναι στρογγυλή και δεν έχει καμία γωνία', en: 'It is round and does not have a single corner' },
        { el: 'Είναι φτιαγμένη ολόκληρη από άσπρο μάρμαρο', en: 'It is built entirely out of white marble' },
      ],
      explanation: {
        el:
          'Η κάτω εκκλησία είναι σχεδόν 900 ετών, χαμηλή και απλή. Η πάνω ξαναχτίστηκε τον 19ο ' +
          'αιώνα και είναι γεμάτη χρώματα και χρυσάφι. Μία σκάλα ενώνει δύο εντελώς διαφορετικούς κόσμους.',
        en:
          'The lower church is almost 900 years old, low and plain. The upper one was rebuilt ' +
          'in the 19th century and is full of colour and gold. One staircase joins two completely different worlds.',
      },
    },
  },

  // ------------------------------------------------------------------- vismarkt
  {
    id: 'bruges-vismarkt',
    cityId: 'bruges',
    emoji: '🐟',
    category: 'food',
    difficulty: 1,

    name: { el: 'Vismarkt, η ψαραγορά', en: 'The Vismarkt' },
    tagline: {
      el: 'Ψάρια κάτω από κολόνες, σαν σε αρχαίο ναό',
      en: 'Fish sold under columns, like in an ancient temple',
    },
    story: {
      el:
        'Για αιώνες τα ψάρια της Μπριζ πουλιούνταν στη μεγάλη πλατεία Markt. Το 1745 οι ' +
        'ψαροπώλες μετακόμισαν εδώ, δίπλα στο κανάλι, σε μια ανοιχτή πλατεία, και το 1821 η ' +
        'πόλη τούς έχτισε αυτή τη στοά. Έχει στρογγυλές πέτρινες κολόνες που κρατούν μια στέγη χωρίς ' +
        'τοίχους, φτιαγμένη στο νεοκλασικό στιλ της εποχής, δηλαδή σαν αρχαίος ναός. Σε μια ' +
        'πόλη γεμάτη γοτθικά μυτερά κτίρια, η ψαραγορά είναι η παράξενη εξαίρεση. Από κάτω ' +
        'υπάρχουν μακριά πέτρινα τραπέζια, και η πέτρα δεν διαλέχτηκε τυχαία: μένει δροσερή ' +
        'όλη μέρα και πλένεται εύκολα, δύο πράγματα που ένα ξύλινο τραπέζι δεν κάνει. Τα ' +
        'ψάρια έρχονταν από τη Βόρεια Θάλασσα, που απέχει λίγα μόνο χιλιόμετρα. Ακόμη και ' +
        'σήμερα, τα πρωινά, στήνονται εδώ πάγκοι με ψάρι. Αν ακουμπήσεις ένα τραπέζι θα ' +
        'καταλάβεις αμέσως γιατί είναι από πέτρα.',
      en:
        'For centuries the fish of Bruges was sold on the big Markt square. In 1745 the fish ' +
        'sellers moved here, beside the canal, to an open square, and in 1821 the city built ' +
        'them this colonnade. It has round stone columns holding up a roof with no walls, ' +
        'made in the neoclassical style of the day, which is to say like an ancient temple. In ' +
        'a city full of pointed Gothic buildings, the fish market is the odd one out. ' +
        'Underneath run long stone tables, and the stone was not chosen by accident: it stays ' +
        'cool all day and washes clean easily, two things a wooden table will not do. The fish ' +
        'came from the North Sea, only a few kilometres away. Even now, in the mornings, ' +
        'stalls of fish are set out here. Touch one of the tables and you will understand at ' +
        'once why it is made of stone.',
    },
    facts: [
      {
        el: 'Οι ψαροπώλες ήρθαν εδώ το 1745· η στοά τους χτίστηκε το 1821.',
        en: 'The fish sellers moved here in 1745; their colonnade was built in 1821.',
      },
      {
        el: 'Οι κολόνες της είναι νεοκλασικές, σπάνιο πράγμα σε μια γοτθική πόλη.',
        en: 'Its columns are neoclassical, a rare thing in a Gothic city.',
      },
      {
        el: 'Η Βόρεια Θάλασσα απέχει από τη Μπριζ λίγα μόνο χιλιόμετρα.',
        en: 'The North Sea is only a few kilometres away from Bruges.',
      },
    ],
    location: {
      lat: 51.20804,
      lng: 3.22846,
      anchor: 'area',
      confidence: 'C',
      sources: [{ kind: 'wikidata', ref: 'Q2290519', deltaM: 0 }],
      verifiedAt: '2026-09-14',
      note:
        'One source only: the item has no English Wikipedia article and the OSM fetch failed ' +
        'all session. Wikidata puts the point in the middle of the colonnade, which for an ' +
        'open market hall is where it belongs.',
      findIt: {
        el: 'Ακολούθησε το κανάλι από τη Rozenhoedkaai. Είναι η στοά με τις κολόνες, αμέσως μετά τη μικρή γέφυρα.',
        en: 'Follow the canal from the Rozenhoedkaai. It is the colonnade just past the little bridge.',
      },
    },
    question: {
      q: {
        el: 'Γιατί τα τραπέζια της ψαραγοράς είναι από πέτρα;',
        en: 'Why are the fish market’s tables made of stone?',
      },
      answers: [
        { el: 'Μένει δροσερή και πλένεται εύκολα', en: 'Stone stays cool and washes clean' },
        { el: 'Είναι φθηνότερη από κάθε ξύλο', en: 'Stone is cheaper than any wood' },
        { el: 'Λάμπει όμορφα κάτω από τον ήλιο', en: 'Stone shines nicely in the sun' },
        { el: 'Δεν υπήρχαν δέντρα στη Φλάνδρα', en: 'Flanders had no trees to cut' },
      ],
      explanation: {
        el:
          'Ένα πέτρινο τραπέζι μένει κρύο όλη μέρα, οπότε το ψάρι χαλάει πιο αργά, και μετά ' +
          'την αγορά καθαρίζει με έναν κουβά νερό. Το ξύλο δεν κάνει ούτε το ένα ούτε το άλλο.',
        en:
          'A stone table stays cold all day, so the fish spoils more slowly, and after market ' +
          'it cleans with a bucket of water. Wood does neither of those things.',
      },
    },
  },

  // -------------------------------------------------------------- rozenhoedkaai
  {
    id: 'bruges-rozenhoedkaai',
    cityId: 'bruges',
    emoji: '📸',
    category: 'landmark',
    difficulty: 1,

    name: { el: 'Rozenhoedkaai, η Προκυμαία του Ροζαρίου', en: 'The Rozenhoedkaai' },
    tagline: {
      el: 'Η γωνία όπου δύο κανάλια συναντιούνται και όλοι σταματούν',
      en: 'The corner where two canals meet and everybody stops',
    },
    story: {
      el:
        'Το όνομα Rozenhoedkaai σημαίνει «Προκυμαία του Ροζαρίου», επειδή εδώ γύρω πουλούσαν ' +
        'κάποτε ροζάρια, χάντρες προσευχής από ξύλο και γυαλί. Ακόμη πιο παλιά, σε αυτή τη ' +
        'γωνία ξεφόρτωναν αλάτι. Σήμερα το αλάτι είναι το φθηνότερο πράγμα στο ντουλάπι, τότε ' +
        'όμως ήταν πολύτιμο σαν χρυσάφι, γιατί χωρίς ψυγεία ήταν ο μόνος τρόπος να κρατήσει ' +
        'το κρέας και το ψάρι για τον χειμώνα. Τα κανάλια της Μπριζ λέγονται reien και ήταν ' +
        'οι δρόμοι της: οι βάρκες έφερναν μαλλί, μπαχαρικά και ύφασμα μέχρι τις πόρτες των ' +
        'αποθηκών. Γι’ αυτό τα σπίτια είναι χτισμένα τόσο κοντά στο νερό που οι τοίχοι τους ' +
        'βρέχονται. Εδώ δύο κανάλια συναντιούνται σε ορθή γωνία, και πίσω από τις στέγες ' +
        'ξεπροβάλλει το Belfort. Αυτός ο συνδυασμός — νερό, παλιά τούβλα και ο πύργος από ' +
        'πίσω — είναι η πιο φωτογραφημένη εικόνα ολόκληρου του Βελγίου. Οι βάρκες περνούν ' +
        'ακόμη από κάτω, και όποιος κάθεται μέσα πρέπει να σκύβει στις χαμηλές γέφυρες.',
      en:
        'The name Rozenhoedkaai means “Rosary Quay”, because prayer beads of wood and glass ' +
        'were once sold around here. Even earlier, salt was unloaded at this corner. Today ' +
        'salt is the cheapest thing in the cupboard, but back then it was as precious as gold, ' +
        'because without fridges it was the only way to keep meat and fish through the winter. ' +
        'The canals of Bruges are called reien and they were its streets: boats brought wool, ' +
        'spices and cloth right up to the warehouse doors. That is why the houses are built so ' +
        'close to the water that their walls stand in it. Here two canals meet at a right ' +
        'angle, and behind the roofs the Belfort rises. That combination — water, old brick ' +
        'and the tower behind — is the most photographed view in all of Belgium. Boats still ' +
        'slip past below, and anyone sitting in one has to duck under the low bridges.',
    },
    facts: [
      {
        el: 'Το όνομά της σημαίνει «Προκυμαία του Ροζαρίου».',
        en: 'Its name means “Rosary Quay”.',
      },
      {
        el: 'Εδώ ξεφόρτωναν αλάτι, που τότε ήταν πολύτιμο εμπόρευμα.',
        en: 'Salt was unloaded here, a precious cargo at the time.',
      },
      {
        el: 'Τα κανάλια της Μπριζ λέγονται reien στα φλαμανδικά.',
        en: 'The canals of Bruges are called reien in Flemish.',
      },
    ],
    location: {
      lat: 51.20716,
      lng: 3.22756,
      anchor: 'area',
      confidence: 'C',
      sources: [{ kind: 'wikidata', ref: 'Q2670532', deltaM: 0 }],
      verifiedAt: '2026-09-14',
      note:
        'Wikidata records this as a street, and the point sits on the quay itself. One source ' +
        'only: no English Wikipedia article, and the OSM fetch failed all session.',
      findIt: {
        el: 'Από την πλατεία Burg πέρασε κάτω από την καμάρα της Blinde-Ezelstraat και τη γεφυρούλα· η γωνία είναι δεξιά.',
        en: 'From the Burg walk under the archway of the Blinde-Ezelstraat and over the little bridge; the corner is on your right.',
      },
    },
    question: {
      q: {
        el: 'Γιατί ήταν τόσο πολύτιμο το αλάτι που ξεφόρτωναν εδώ;',
        en: 'Why was the salt unloaded here so precious?',
      },
      answers: [
        { el: 'Κρατούσε το φαγητό όλο τον χειμώνα', en: 'It kept food through the whole winter' },
        { el: 'Γινόταν κοσμήματα για τους εμπόρους', en: 'It was made into jewels for merchants' },
        { el: 'Καθάριζε τα κανάλια από τη λάσπη', en: 'It cleaned the mud out of the canals' },
        { el: 'Έδινε χρώμα στα υφάσματα της πόλης', en: 'It gave colour to the city’s woollen cloth' },
      ],
      explanation: {
        el:
          'Πριν από τα ψυγεία, το αλάτι ήταν ο μόνος τρόπος να διατηρηθεί το κρέας και το ψάρι. ' +
          'Μια πόλη χωρίς αλάτι πεινούσε τον χειμώνα, γι’ αυτό το πλήρωναν ακριβά.',
        en:
          'Before fridges, salt was the only way to keep meat and fish. A city without salt went ' +
          'hungry in winter, which is why people paid so much for it.',
      },
    },
  },

  // -------------------------------------------------------------- bonifaciusbrug
  {
    id: 'bruges-bonifaciusbrug',
    cityId: 'bruges',
    emoji: '🌉',
    category: 'landmark',
    difficulty: 2,

    name: { el: 'Bonifaciusbrug, η γέφυρα του Βονιφάτιου', en: 'The Bonifaciusbrug' },
    tagline: {
      el: 'Μοιάζει μεσαιωνική, αλλά είναι νεότερη από το αυτοκίνητο',
      en: 'It looks medieval, yet it is younger than the motor car',
    },
    story: {
      el:
        'Είναι η μικρότερη γέφυρα της Μπριζ και ίσως η πιο φωτογραφημένη: μια στενή πέτρινη ' +
        'καμάρα ανάμεσα σε παλιούς τοίχους, τόσο στενή που δύο άνθρωποι μετά βίας ' +
        'διασταυρώνονται πάνω της. Κάτω της περνάει το κανάλι σε ένα από τα πιο ήσυχα σημεία ' +
        'της πόλης, και γύρω της ο κήπος Arentshof με τα ψηλά δέντρα. Όλα μοιάζουν χίλιων ' +
        'ετών. Δεν είναι. Η γέφυρα χτίστηκε γύρω στο 1910, δηλαδή είναι νεότερη από το ' +
        'αυτοκίνητο και από το αεροπλάνο. Οι μηχανικοί της τη σχεδίασαν επίτηδες να μοιάζει ' +
        'μεσαιωνική, ώστε να ταιριάξει με τα κτίρια γύρω της. Είναι ένα καλό μάθημα για κάθε ' +
        'εξερευνητή: το «παλιό» δεν είναι πάντα παλιό. Μία μόνο καμάρα την κρατάει, γιατί το ' +
        'κανάλι εδώ είναι πολύ στενό. Στέκεται στη σκιά του παλατιού Gruuthuse, και αν ' +
        'κοιτάξεις πάνω από τις κορυφές των δέντρων θα δεις τον τεράστιο πύργο από τούβλο της ' +
        'εκκλησίας της Παναγίας να σε παρακολουθεί.',
      en:
        'This is the smallest bridge in Bruges and perhaps the most photographed: a narrow ' +
        'stone arch between old walls, so narrow that two people can barely pass on it. The ' +
        'canal runs beneath it at one of the quietest spots in the city, and around it lies ' +
        'the Arentshof garden with its tall trees. It all looks a thousand years old. It is ' +
        'not. The bridge was built around 1910, which makes it younger than the motor car and ' +
        'younger than the aeroplane. Its engineers designed it to look medieval on purpose, so ' +
        'that it would match the buildings around it. That is a useful lesson for any ' +
        'explorer: “old” is not always old. A single arch holds it up, because the canal is ' +
        'very narrow here. It stands in the shadow of the Gruuthuse palace, and if you look ' +
        'above the treetops you will see the enormous brick tower of the Church of Our Lady ' +
        'watching you.',
    },
    facts: [
      {
        el: 'Χτίστηκε γύρω στο 1910, αν και μοιάζει μεσαιωνική.',
        en: 'It was built around 1910, although it looks medieval.',
      },
      {
        el: 'Έχει μία μόνο καμάρα, γιατί το κανάλι εδώ είναι στενό.',
        en: 'It has a single arch, because the canal is narrow here.',
      },
      {
        el: 'Βρίσκεται μέσα στον κήπο Arentshof, δίπλα στο παλάτι Gruuthuse.',
        en: 'It sits inside the Arentshof garden, beside the Gruuthuse palace.',
      },
    ],
    location: {
      lat: 51.20491,
      lng: 3.22538,
      anchor: 'centroid',
      confidence: 'C',
      sources: [{ kind: 'wikidata', ref: 'Q116243339', deltaM: 0 }],
      verifiedAt: '2026-09-14',
      note:
        'Declared in the seed as a neighbour of Gruuthuse: the bridge crosses the canal at the ' +
        'foot of the palace, some 27 m from the house’s point. One source only — no English ' +
        'Wikipedia article, and the OSM fetch failed all session.',
      findIt: {
        el: 'Μπες στον κήπο Arentshof από την προκυμαία Dijver. Η γέφυρα είναι στο βάθος του κήπου, πίσω από τα δέντρα.',
        en: 'Enter the Arentshof garden from the Dijver quay. The bridge is at the far end, behind the trees.',
      },
    },
    question: {
      q: {
        el: 'Πόσο παλιά είναι στ’ αλήθεια αυτή η γέφυρα;',
        en: 'How old is this bridge really?',
      },
      answers: [
        { el: 'Περίπου εκατό χρόνια', en: 'A little over a century' },
        { el: 'Περίπου χίλια χρόνια', en: 'A little under a thousand' },
        { el: 'Περίπου πεντακόσια χρόνια', en: 'About five hundred years' },
        { el: 'Χτίστηκε μόλις πέρυσι', en: 'It was finished last year' },
      ],
      explanation: {
        el:
          'Η γέφυρα χτίστηκε γύρω στο 1910, αλλά σχεδιάστηκε να μοιάζει μεσαιωνική για να ' +
          'ταιριάζει με τη γειτονιά. Στη Μπριζ, όχι όλα τα παλιά είναι όντως παλιά.',
        en:
          'The bridge was built around 1910, but designed to look medieval so it would match ' +
          'its neighbours. In Bruges, not everything old is actually old.',
      },
    },
  },

  // ------------------------------------------------------ onze-lieve-vrouwekerk
  {
    id: 'bruges-onze-lieve-vrouwekerk',
    cityId: 'bruges',
    emoji: '⛪',
    category: 'art',
    difficulty: 2,

    name: { el: 'Onze-Lieve-Vrouwekerk, η Εκκλησία της Παναγίας', en: 'The Onze-Lieve-Vrouwekerk' },
    tagline: {
      el: 'Ένα μάρμαρο του Μιχαήλ Άγγελου κάτω από πύργο από τούβλα',
      en: 'A Michelangelo marble under a tower of baked brick',
    },
    story: {
      el:
        'Ο πύργος αυτής της εκκλησίας φτάνει τα 115,6 μέτρα και είναι από τους ψηλότερους ' +
        'πύργους από τούβλο στον κόσμο. Στη Φλάνδρα δεν υπάρχουν βουνά με πέτρα, οπότε οι ' +
        'χτίστες έψηναν τούβλα από τη λάσπη της γης τους. Εκατομμύρια τούβλα, το ένα πάνω στο ' +
        'άλλο, για περισσότερα από διακόσια χρόνια δουλειάς. Μέσα, σε ένα πλάγιο παρεκκλήσι, ' +
        'κάθεται ένα μικρό άγαλμα από άσπρο μάρμαρο: η Παναγία με το μωρό Ιησού, σκαλισμένη ' +
        'από τον Μιχαήλ Άγγελο γύρω στο 1504, την ίδια εποχή που έφτιαχνε τον Δαβίδ στη ' +
        'Φλωρεντία. Είναι το μοναδικό του γλυπτό που έφυγε από την Ιταλία όσο ο ίδιος ζούσε: ' +
        'δύο έμποροι της Μπριζ το αγόρασαν και το έφεραν εδώ με καράβι. Λίγα βήματα πιο πέρα, ' +
        'δύο χρυσές φιγούρες ξαπλώνουν πάνω σε σκούρους τάφους. Είναι η Μαρία της ' +
        'Βουργουνδίας, που κυβέρνησε ολόκληρη τη Φλάνδρα, και ο πατέρας της, ο Κάρολος ο ' +
        'Τολμηρός. Η Μαρία λάτρευε τα άλογα και πέθανε στα εικοσιπέντε της, μετά από μια ' +
        'πτώση στο κυνήγι.',
      en:
        'The tower of this church reaches 115.6 metres and is one of the tallest brick towers ' +
        'in the world. Flanders has no mountains with stone in them, so the builders baked ' +
        'bricks out of the clay of their own ground. Millions of bricks, one on top of ' +
        'another, over more than two hundred years of work. Inside, in a side chapel, sits a ' +
        'small statue of white marble: the Madonna with the child Jesus, carved by ' +
        'Michelangelo around 1504, at the same time he was making the David in Florence. It is ' +
        'the only sculpture of his that left Italy while he was alive: two merchants from ' +
        'Bruges bought it and brought it here by ship. A few steps further on, two golden ' +
        'figures lie on dark tombs. They are Mary of Burgundy, who ruled the whole of Flanders, ' +
        'and her father, Charles the Bold. Mary loved horses and died at twenty-five, after a ' +
        'fall while out hunting.',
    },
    facts: [
      {
        el: 'Ο πύργος του έχει ύψος 115,6 μέτρα και είναι ολόκληρος από τούβλο.',
        en: 'Its tower is 115.6 metres high and made entirely of brick.',
      },
      {
        el: 'Ο Μιχαήλ Άγγελος σκάλισε την Παναγία της Μπριζ γύρω στο 1504.',
        en: 'Michelangelo carved the Madonna of Bruges around 1504.',
      },
      {
        el: 'Είναι το μόνο γλυπτό του που έφυγε από την Ιταλία όσο ζούσε.',
        en: 'It is the only sculpture of his that left Italy in his lifetime.',
      },
      {
        el: 'Η Μαρία της Βουργουνδίας πέθανε το 1482, σε ηλικία 25 ετών.',
        en: 'Mary of Burgundy died in 1482, at the age of 25.',
      },
    ],
    location: {
      lat: 51.20465,
      lng: 3.22447,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q917183', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Church of Our Lady, Bruges', deltaM: 8 },
      ],
      verifiedAt: '2026-09-14',
      findIt: {
        el: 'Η είσοδος των επισκεπτών είναι στη Mariastraat. Το άγαλμα είναι στο παρεκκλήσι δεξιά, πίσω από τζάμι.',
        en: 'The visitors’ entrance is on Mariastraat. The statue is in the chapel to the right, behind glass.',
      },
    },
    question: {
      q: {
        el: 'Γιατί ο πύργος είναι από τούβλο και όχι από πέτρα;',
        en: 'Why is the tower made of brick instead of stone?',
      },
      answers: [
        { el: 'Η Φλάνδρα έχει λάσπη αλλά όχι βουνά', en: 'Flanders has clay but no mountains' },
        { el: 'Τα τούβλα αντέχουν καλύτερα στη φωτιά', en: 'Bricks stand up to fire much better' },
        { el: 'Η πέτρα ήταν απαγορευμένη στην πόλη', en: 'Stone was forbidden inside the city' },
        { el: 'Ο βασιλιάς διέταξε να γίνει από τούβλο', en: 'The king ordered it to be brick' },
      ],
      explanation: {
        el:
          'Χτίζεις με ό,τι έχει η γη σου. Η Φλάνδρα είναι επίπεδη και λασπώδης, οπότε οι χτίστες ' +
          'έψηναν τη λάσπη σε τούβλα. Ο ψηλότερος πύργος τους σηκώθηκε από χώμα.',
        en:
          'You build with what your ground gives you. Flanders is flat and clayey, so the ' +
          'builders baked that clay into bricks. Their tallest tower rose out of the soil.',
      },
    },
  },

  // ------------------------------------------------------------------ gruuthuse
  {
    id: 'bruges-gruuthuse',
    cityId: 'bruges',
    emoji: '🌿',
    category: 'history',
    difficulty: 3,

    name: { el: 'Gruuthuse, το παλάτι των βοτάνων', en: 'The Gruuthuse' },
    tagline: {
      el: 'Μια οικογένεια πλούτισε πουλώντας βότανα για μπίρα',
      en: 'A family grew rich selling the herbs that flavoured beer',
    },
    story: {
      el:
        'Αυτό το παλάτι από τούβλο ανήκε σε μια οικογένεια που έγινε πάμπλουτη με τον πιο ' +
        'παράξενο τρόπο. Τον Μεσαίωνα η μπίρα δεν φτιαχνόταν με λυκίσκο αλλά με ένα μείγμα ' +
        'από βότανα, το gruut. Ο κόμης της Φλάνδρας είχε δώσει σε μία και μόνο οικογένεια το ' +
        'δικαίωμα να πουλάει gruut σε όλη τη Μπριζ, οπότε κάθε ζυθοποιός της πόλης πλήρωνε ' +
        'σε αυτούς. Από εκεί πήραν και το όνομά τους: Gruuthuse σημαίνει «το σπίτι του ' +
        'gruut». Ο πιο διάσημος από αυτούς, ο Lodewijk van Gruuthuse, έζησε τον 15ο αιώνα και ' +
        'μάζεψε μία από τις μεγαλύτερες συλλογές χειρόγραφων βιβλίων της εποχής του. Το ' +
        'σύνθημά του ήταν «Plus est en vous»: μέσα σου υπάρχουν περισσότερα απ’ όσα νομίζεις. ' +
        'Το σπίτι του κρύβει και ένα κόλπο. Έχει ιδιωτικό παρεκκλήσι με παράθυρο που ανοίγει ' +
        'κατευθείαν μέσα στη διπλανή εκκλησία, ψηλά πάνω από το πλήθος, ώστε η οικογένεια να ' +
        'παρακολουθεί τη λειτουργία χωρίς να βγει από το σπίτι της.',
      en:
        'This brick palace belonged to a family that became enormously rich in the strangest ' +
        'way. In the Middle Ages beer was not flavoured with hops but with a mixture of herbs ' +
        'called gruut. The Count of Flanders had given one single family the right to sell ' +
        'gruut across Bruges, so every brewer in the city paid them. That is where their name ' +
        'comes from: Gruuthuse means “the house of the gruut”. The most famous of them, ' +
        'Lodewijk van Gruuthuse, lived in the 15th century and gathered one of the largest ' +
        'collections of handwritten books of his day. His motto was “Plus est en vous”: there ' +
        'is more in you than you think. His house hides a trick, too. It has a private chapel ' +
        'with a window that opens straight into the church next door, high above the crowd, so ' +
        'the family could follow the service without leaving home.',
    },
    facts: [
      {
        el: 'Το gruut ήταν μείγμα βοτάνων που έδινε γεύση στη μπίρα πριν από τον λυκίσκο.',
        en: 'Gruut was a herb mixture that flavoured beer before hops were used.',
      },
      {
        el: 'Το σύνθημα της οικογένειας ήταν «Plus est en vous».',
        en: 'The family motto was “Plus est en vous”.',
      },
      {
        el: 'Το παρεκκλήσι του σπιτιού ανοίγει μέσα στην εκκλησία της Παναγίας.',
        en: 'The house chapel opens into the Church of Our Lady next door.',
      },
    ],
    location: {
      lat: 51.20503,
      lng: 3.22503,
      anchor: 'centroid',
      confidence: 'C',
      sources: [{ kind: 'wikidata', ref: 'Q104922827', deltaM: 0 }],
      verifiedAt: '2026-09-14',
      note:
        'This is Q104922827, the house itself, and deliberately not Q1108949, which Wikidata ' +
        'records as the Gruuthusemuseum organisation and places elsewhere. Declared a ' +
        'neighbour of the Bonifaciusbrug. One source only; the OSM fetch failed all session.',
      findIt: {
        el: 'Από την προκυμαία Dijver μπες στην αυλή. Το παλάτι είναι το κτίριο με το μικρό πυργάκι, δίπλα στον κήπο.',
        en: 'From the Dijver quay step into the courtyard. The palace is the building with the little turret, beside the garden.',
      },
    },
    question: {
      q: {
        el: 'Πώς πλούτισε η οικογένεια Gruuthuse;',
        en: 'How did the Gruuthuse family become rich?',
      },
      answers: [
        { el: 'Πουλούσε μόνη της τα βότανα της μπίρας', en: 'It alone sold the herbs used in beer' },
        { el: 'Έχτιζε τις γέφυρες όλης της Φλάνδρας', en: 'It built every bridge in all of Flanders' },
        { el: 'Ζωγράφιζε πορτρέτα για τους εμπόρους', en: 'It painted portraits for rich merchants' },
        { el: 'Έφερνε αλάτι από τη Βόρεια Θάλασσα', en: 'It shipped salt in from the North Sea' },
      ],
      explanation: {
        el:
          'Ο κόμης τούς είχε δώσει το αποκλειστικό δικαίωμα να πουλάνε gruut, τα βότανα της ' +
          'μπίρας. Όποιος έφτιαχνε μπίρα στη Μπριζ πλήρωνε σε αυτούς.',
        en:
          'The count had given them the sole right to sell gruut, the herbs for beer. Anyone ' +
          'brewing in Bruges had to pay them for it.',
      },
    },
  },

  // ------------------------------------------------------------ groeningemuseum
  {
    id: 'bruges-groeningemuseum',
    cityId: 'bruges',
    emoji: '🖼️',
    category: 'museum',
    difficulty: 2,

    name: { el: 'Groeningemuseum', en: 'The Groeningemuseum' },
    tagline: {
      el: 'Μικρό μουσείο, τεράστιοι πίνακες, έξι αιώνες ζωγραφικής',
      en: 'A small museum, enormous pictures, six centuries of painting',
    },
    story: {
      el:
        'Το Groeningemuseum είναι το μουσείο ζωγραφικής της Μπριζ, και είναι μικρό επίτηδες: ' +
        'το περπατάς σε μία ώρα, αλλά κάθε αίθουσα έχει κάτι που δεν ξεχνιέται. Η καρδιά του ' +
        'είναι οι Φλαμανδοί Πρωτόγονοι, οι ζωγράφοι που δούλευαν εδώ τον 15ο αιώνα, όταν η ' +
        'πόλη ήταν από τις πλουσιότερες της Ευρώπης και οι έμποροί της είχαν λεφτά να ' +
        'παραγγείλουν πίνακες. Αυτοί οι ζωγράφοι ανακάτευαν τα χρώματά τους με λάδι αντί για ' +
        'αυγό. Το λάδι στεγνώνει αργά, οπότε μπορούσαν να δουλεύουν πάνω στο ίδιο σημείο για ' +
        'μέρες, στρώση πάνω σε στρώση, μέχρι το ύφασμα να φαίνεται βελούδο και το μέταλλο ' +
        'μέταλλο. Δες από κοντά έναν πίνακα: θα βρεις τρίχες γενειάδας μία μία, και στην ' +
        'ασπίδα ενός ιππότη, μικρό σαν κόκκο, τον ίδιο τον ζωγράφο καθρεφτισμένο. Οι αίθουσες ' +
        'είναι σκοτεινές επίτηδες, γιατί το δυνατό φως ξεθωριάζει τα χρώματα.',
      en:
        'The Groeningemuseum is the painting museum of Bruges, and it is small on purpose: you ' +
        'can walk it in an hour, yet every room has something you will not forget. Its heart ' +
        'is the Flemish Primitives, the painters who worked here in the 15th century, when the ' +
        'city was among the richest in Europe and its merchants had money to order pictures. ' +
        'These painters mixed their colours with oil instead of egg. Oil dries slowly, so they ' +
        'could keep working on the same patch for days, layer over layer, until cloth looked ' +
        'like velvet and metal looked like metal. Get close to one of them: you will find ' +
        'beard hairs painted one at a time, and in a knight’s shield, no bigger than a ' +
        'seed, the painter himself reflected. The rooms are kept dark on purpose, because strong ' +
        'light fades the colours.',
    },
    facts: [
      {
        el: 'Οι Φλαμανδοί Πρωτόγονοι ζωγράφιζαν με χρώματα ανακατεμένα με λάδι.',
        en: 'The Flemish Primitives painted with colours mixed into oil.',
      },
      {
        el: 'Το λάδι στεγνώνει αργά, οπότε επιτρέπει πολλές λεπτές στρώσεις.',
        en: 'Oil dries slowly, which allows many thin layers of paint.',
      },
      {
        el: 'Οι αίθουσες κρατιούνται σκοτεινές, γιατί το φως ξεθωριάζει τα χρώματα.',
        en: 'The rooms are kept dark, because light makes the colours fade.',
      },
    ],
    location: {
      lat: 51.20528,
      lng: 3.22667,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q1948674', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Groeningemuseum', deltaM: 0 },
      ],
      verifiedAt: '2026-09-14',
      findIt: {
        el: 'Η είσοδος είναι στην προκυμαία Dijver, μέσα από μια αυλή με πύλη. Το κτίριο είναι χαμηλό και δεν φαίνεται από τον δρόμο.',
        en: 'The entrance is on the Dijver quay, through a gated courtyard. The building is low and does not show from the street.',
      },
    },
    question: {
      q: {
        el: 'Γιατί ζωγράφιζαν με λάδι αντί για αυγό;',
        en: 'Why did they paint with oil instead of egg?',
      },
      answers: [
        { el: 'Το λάδι στεγνώνει πιο αργά', en: 'Oil dries far more slowly' },
        { el: 'Το λάδι κόστιζε λιγότερα', en: 'Oil cost a good deal less' },
        { el: 'Το αυγό ήταν απαγορευμένο', en: 'Egg had been forbidden here' },
        { el: 'Το λάδι μυρίζει καλύτερα', en: 'Oil has a nicer smell to it' },
      ],
      explanation: {
        el:
          'Το χρώμα με αυγό στεγνώνει σε λίγα λεπτά και δεν διορθώνεται. Το λάδι δίνει στον ' +
          'ζωγράφο μέρες, οπότε μπορεί να χτίσει στρώση πάνω σε στρώση και να πετύχει το φως.',
        en:
          'Egg paint dries in minutes and cannot be corrected. Oil gives a painter days, so he ' +
          'can build layer over layer and get the light exactly right.',
      },
    },
    museum: {
      doorNote: {
        el: 'Μία ώρα φτάνει. Πλησίασε τους πίνακες όσο σου επιτρέπουν: όλα τα καλά κρύβονται στις λεπτομέρειες.',
        en: 'An hour is enough. Get as close to the pictures as you are allowed: the good things hide in the details.',
      },
      rooms: [
        {
          id: 'bruges-groeningemuseum-primitives',
          name: { el: 'Οι Φλαμανδοί Πρωτόγονοι', en: 'The Flemish Primitives' },
          emoji: '🖌️',
          intro: {
            el:
              'Εδώ κρέμονται οι πίνακες που έκαναν τη Μπριζ διάσημη στη ζωγραφική. Όλοι ' +
              'φτιάχτηκαν τον 15ο αιώνα, όλοι με χρώματα λαδιού, και οι περισσότεροι παραγγέλθηκαν από ' +
              'ανθρώπους που ήθελαν να τους θυμούνται. Μη βιαστείς. Οι πίνακες αυτοί δεν ' +
              'φωνάζουν από μακριά· ανταμείβουν όποιον πλησιάσει και κοιτάξει τρία λεπτά ' +
              'παραπάνω από τους άλλους.',
            en:
              'These are the pictures that made Bruges famous in painting. All were made in ' +
              'the 15th century, all in oil colours, and most were ordered by people who wanted ' +
              'to be remembered. Do not hurry. They do not shout from across the room; they ' +
              'reward anyone who steps close and looks for three minutes longer than everybody ' +
              'else does.',
          },
          exhibits: [
            {
              id: 'bruges-groeningemuseum-van-der-paele',
              name: {
                el: 'Η Παναγία του κανονικού Van der Paele',
                en: 'The Madonna with Canon van der Paele',
              },
              blurb: {
                el:
                  'Ο Joris van der Paele ήταν ένας γέρος ιερέας που ήξερε ότι δεν του έμενε ' +
                  'πολύς χρόνος. Παρήγγειλε στον Jan van Eyck αυτόν τον πίνακα για να τον ' +
                  'θυμούνται, και ο ζωγράφος τον έδειξε ακριβώς όπως ήταν: ρυτίδες, πρησμένα ' +
                  'χέρια, γυαλιά στο ένα χέρι, βιβλίο στο άλλο. Δίπλα του στέκεται ο άγιος ' +
                  'Γεώργιος με γυαλιστερή πανοπλία, και στην ασπίδα του καθρεφτίζεται ένας ' +
                  'μικροσκοπικός ζωγράφος στο καβαλέτο του: ο ίδιος ο van Eyck. Ο πίνακας ' +
                  'τελείωσε το 1436 και είναι από τα μεγαλύτερα έργα που σώζονται από τον van Eyck.',
                en:
                  'Joris van der Paele was an old priest who knew he did not have long left. ' +
                  'He ordered this picture from Jan van Eyck so that he would be remembered, ' +
                  'and the painter showed him exactly as he was: wrinkles, swollen hands, ' +
                  'spectacles in one hand and a book in the other. Beside him stands Saint ' +
                  'George in polished armour, and in his shield a tiny painter at his easel is ' +
                  'reflected: van Eyck himself. The painting was finished in 1436 and is one of ' +
                  'the largest surviving works by van Eyck.',
              },
              question: {
                q: {
                  el: 'Τι φαίνεται καθρεφτισμένο στην ασπίδα του αγίου;',
                  en: 'What is reflected in the saint’s polished shield?',
                },
                answers: [
                  { el: 'Ο ζωγράφος του πίνακα', en: 'The painter himself' },
                  { el: 'Ένα κερί πάνω στο τραπέζι', en: 'A candle on the table' },
                  { el: 'Ένα καράβι στο λιμάνι', en: 'A ship in the port' },
                  { el: 'Ο πύργος των καμπανών', en: 'The tower of bells' },
                ],
                explanation: {
                  el:
                    'Ο van Eyck ζωγράφισε τον εαυτό του μέσα στο γυαλισμένο μέταλλο, μικρό σαν ' +
                    'κόκκο ρυζιού. Ήθελε να δείξει ότι μπορούσε να ζωγραφίσει το φως, όχι μόνο τα πράγματα.',
                  en:
                    'Van Eyck painted himself inside the polished metal, no bigger than a ' +
                    'grain of rice. He wanted to show he could paint light itself, not just things.',
                },
              },
            },
            {
              id: 'bruges-groeningemuseum-margareta',
              name: { el: 'Το πορτρέτο της Margareta van Eyck', en: 'The portrait of Margareta van Eyck' },
              blurb: {
                el:
                  'Αυτή η γυναίκα δεν είναι αγία ούτε βασίλισσα. Είναι η Margareta, η ' +
                  'σύζυγος του ζωγράφου, και τη ζωγράφισε ο ίδιος της ο άντρας το 1439. ' +
                  'Φοράει κόκκινο φόρεμα και άσπρο κεφαλόδεσμο με δύο «κέρατα» από διπλωμένο ' +
                  'λινό, τη μόδα της εποχής, και κοιτάζει ίσια μπροστά με σφιγμένα χείλη. Πάνω ' +
                  'στο αρχικό πλαίσιο ο van Eyck έγραψε τη χρονιά και την ηλικία της, τριάντα ' +
                  'τριών ετών, και μια φράση σαν να μιλάει η ίδια: «Ο άντρας μου Ιωάννης με τελείωσε».',
                en:
                  'This woman is neither a saint nor a queen. She is Margareta, the painter’s ' +
                  'wife, and her own husband painted her in 1439. She wears a red dress and a ' +
                  'white headdress with two “horns” of folded linen, the fashion of the day, and ' +
                  'looks straight out with her lips pressed together. On the original frame van ' +
                  'Eyck wrote the year and her age, thirty-three, and a line as if she were ' +
                  'speaking: “My husband Johannes completed me.”',
              },
              question: {
                q: {
                  el: 'Τι έγραψε ο ζωγράφος πάνω στο πλαίσιο;',
                  en: 'What did the painter write on the frame?',
                },
                answers: [
                  { el: 'Τη χρονιά και την ηλικία', en: 'The year and her age' },
                  { el: 'Το όνομα ενός βασιλιά', en: 'The name of a king' },
                  { el: 'Μια προσευχή στα λατινικά', en: 'A prayer in Latin' },
                  { el: 'Την τιμή που πληρώθηκε', en: 'The price he was paid' },
                ],
                explanation: {
                  el:
                    'Στο πλαίσιο διαβάζεται η χρονιά 1439 και η ηλικία της, τριάντα τρία. Ο ' +
                    'van Eyck υπέγραφε τα έργα του σαν να ήταν επίσημα έγγραφα.',
                  en:
                    'The frame gives the year 1439 and her age, thirty-three. Van Eyck signed ' +
                    'his works as though they were official documents.',
                },
              },
            },
            {
              id: 'bruges-groeningemuseum-moreel',
              name: { el: 'Το τρίπτυχο Moreel του Memling', en: 'Memling’s Moreel Triptych' },
              blurb: {
                el:
                  'Ένα τρίπτυχο είναι τρεις πίνακες με μεντεσέδες, που κλείνουν σαν ' +
                  'ντουλάπι. Αυτό το παρήγγειλε το 1484 ο Willem Moreel, δήμαρχος της Μπριζ, ' +
                  'μαζί με τη γυναίκα του Barbara. Στα δύο πλαϊνά φύλλα γονατίζουν οι ίδιοι, ' +
                  'και πίσω τους μπαίνουν στη σειρά τα παιδιά τους, από το μεγαλύτερο στο ' +
                  'μικρότερο, σαν σκάλα. Θεωρείται από τα πρώτα οικογενειακά πορτρέτα της ' +
                  'ευρωπαϊκής ζωγραφικής: μια ολόκληρη οικογένεια σε μία εικόνα.',
                en:
                  'A triptych is three paintings on hinges that shut like a cupboard. This ' +
                  'one was ordered in 1484 by Willem Moreel, a burgomaster of Bruges, ' +
                  'together with his wife Barbara. On the two side panels the couple kneel, ' +
                  'and behind them their children line up from the eldest down to the ' +
                  'youngest, like a staircase. It counts as one of the first family portraits ' +
                  'in European painting: a whole household in a single picture.',
              },
              question: {
                q: {
                  el: 'Ποιοι είναι ζωγραφισμένοι στα πλαϊνά φύλλα;',
                  en: 'Who is painted on the two side panels?',
                },
                answers: [
                  { el: 'Μια οικογένεια με τα παιδιά της', en: 'A family with all its children' },
                  { el: 'Ο βασιλιάς και οι ιππότες του', en: 'A king and all of his knights' },
                  { el: 'Οι ψαράδες της Βόρειας Θάλασσας', en: 'The fishermen of the North Sea' },
                  { el: 'Οι μοναχές του παλιού νοσοκομείου', en: 'The nuns from the old hospital' },
                ],
                explanation: {
                  el:
                    'Ο δήμαρχος Moreel και η Barbara γονατίζουν στα πλαϊνά, και πίσω τους ' +
                    'μπαίνουν στη σειρά τα παιδιά τους κατά ηλικία. Είναι η φωτογραφία της οικογένειας, πριν από τη φωτογραφία.',
                  en:
                    'Burgomaster Moreel and Barbara kneel on the wings, and behind them their ' +
                    'children stand in order of age. It is the family photograph, made before photographs existed.',
                },
              },
            },
            {
              id: 'bruges-groeningemuseum-death-of-the-virgin',
              name: { el: 'Ο Θάνατος της Παναγίας', en: 'The Death of the Virgin' },
              blurb: {
                el:
                  'Ο Hugo van der Goes ζωγράφισε τους δώδεκα αποστόλους μαζεμένους γύρω από ' +
                  'ένα κρεβάτι. Το ασυνήθιστο δεν είναι η σκηνή, είναι τα πρόσωπα: κανένα δεν ' +
                  'μοιάζει με το άλλο. Ένας κοιτάζει σαστισμένος, ένας κρύβει τα μάτια του, ' +
                  'ένας προσεύχεται, ένας απλώς δεν ξέρει πού να σταθεί. Τα χρώματα είναι ' +
                  'ψυχρά, γαλαζωπά και χλωμά, σαν να έχει φύγει η ζέστη από το δωμάτιο. Ο ' +
                  'ζωγράφος πέρασε τα τελευταία του χρόνια σε μοναστήρι, βαριά άρρωστος και ' +
                  'πολύ θλιμμένος.',
                en:
                  'Hugo van der Goes painted the twelve apostles gathered round a bed. The ' +
                  'unusual thing is not the scene but the faces: no two of them are alike. One ' +
                  'stares in shock, one covers his eyes, one prays, one simply does not know ' +
                  'where to stand. The colours are cold, bluish and pale, as if the warmth had ' +
                  'left the room. The painter spent his last years in a monastery, gravely ill ' +
                  'and very sad.',
              },
              question: {
                q: {
                  el: 'Τι κάνει αυτόν τον πίνακα ασυνήθιστο;',
                  en: 'What makes this painting unusual?',
                },
                answers: [
                  { el: 'Κάθε πρόσωπο δείχνει άλλο συναίσθημα', en: 'Each face shows a different feeling' },
                  { el: 'Είναι ζωγραφισμένος πάνω σε γυαλί', en: 'The whole thing is painted on glass' },
                  { el: 'Δεν έχει καθόλου ανθρώπους μέσα', en: 'There is not one person shown in it' },
                  { el: 'Είναι μεγαλύτερος από έναν τοίχο', en: 'It is larger than an entire wall' },
                ],
                explanation: {
                  el:
                    'Δώδεκα άνθρωποι, δώδεκα διαφορετικές αντιδράσεις στο ίδιο πράγμα. Αυτό ' +
                    'ήταν καινούργιο για την εποχή του: ο ζωγράφος κοίταζε τι νιώθει ο καθένας.',
                  en:
                    'Twelve people, twelve different reactions to the same thing. That was new ' +
                    'in his day: the painter was watching what each of them felt.',
                },
              },
            },
          ],
        },
        {
          id: 'bruges-groeningemuseum-after',
          name: { el: 'Μετά τους Πρωτόγονους', en: 'After the Primitives' },
          emoji: '🎭',
          intro: {
            el:
              'Η Μπριζ δεν σταμάτησε να ζωγραφίζει όταν έφυγαν τα καράβια. Σε αυτή την ' +
              'αίθουσα οι αιώνες τρέχουν: ένας ζωγράφος γεμίζει τον πίνακά του με τέρατα, ' +
              'ένας άλλος βάζει το λιμάνι της πόλης στο παράθυρο ενός εμπόρου, και ένας ' +
              'τρίτος, τετρακόσια χρόνια αργότερα, ζωγραφίζει τη Μπριζ ανάποδα, μέσα στο ' +
              'νερό ενός καναλιού.',
            en:
              'Bruges did not stop painting when the ships stopped coming. In this room the ' +
              'centuries run on: one painter fills his picture with monsters, another puts ' +
              'the city’s harbour in a merchant’s window, and a third, four hundred years ' +
              'later, paints Bruges upside down in the water of a canal.',
          },
          exhibits: [
            {
              id: 'bruges-groeningemuseum-bosch-judgement',
              name: { el: 'Η Δευτέρα Παρουσία του Bosch', en: 'Bosch’s Last Judgement' },
              blurb: {
                el:
                  'Ο Hieronymus Bosch ζωγράφισε αυτό που πίστευαν οι άνθρωποι της εποχής ' +
                  'του ότι γίνεται στο τέλος του κόσμου, και το γέμισε με πλάσματα που ' +
                  'κανείς δεν είχε δει ποτέ: μισά ζώα, μισές μηχανές, με πόδια πουλιού και ' +
                  'κεφάλι ψαριού. Στο αριστερό φύλλο υπάρχει ένας πράσινος κήπος· στη μέση ' +
                  'και δεξιά ο κόσμος έχει γίνει σκοτεινός. Κανείς δεν ξέρει ακριβώς τι ' +
                  'σήμαινε το κάθε πλάσμα. Πεντακόσια χρόνια μετά, ακόμα το συζητάνε.',
                en:
                  'Hieronymus Bosch painted what people of his time believed happens at the ' +
                  'end of the world, and he filled it with creatures nobody had ever seen: ' +
                  'half animal, half machine, with a bird’s legs and a fish’s head. The left ' +
                  'panel holds a green garden; in the middle and on the right the world has ' +
                  'gone dark. Nobody knows exactly what each creature meant. Five hundred ' +
                  'years later, people are still arguing about it.',
              },
              question: {
                q: {
                  el: 'Με τι είναι γεμάτος ο πίνακας του Bosch;',
                  en: 'What is Bosch’s painting full of?',
                },
                answers: [
                  { el: 'Πλάσματα μισά ζώα, μισά μηχανές', en: 'Creatures half beast, half machine' },
                  { el: 'Καράβια με άσπρα και μπλε πανιά', en: 'Ships with white and blue sails' },
                  { el: 'Λουλούδια από κάθε γωνιά της γης', en: 'Flowers from every corner of earth' },
                  { el: 'Χάρτες των παλιών βελγικών πόλεων', en: 'Maps of the old Belgian cities' },
                ],
                explanation: {
                  el:
                    'Ο Bosch έφτιαχνε πλάσματα ενώνοντας κομμάτια από ζώα, φυτά και εργαλεία. ' +
                    'Ήταν ο πρώτος που ζωγράφισε τέρατα τα οποία δεν υπάρχουν σε κανέναν μύθο.',
                  en:
                    'Bosch built his creatures by joining bits of animals, plants and tools. ' +
                    'He was the first to paint monsters that appear in no old story at all.',
                },
              },
            },
            {
              id: 'bruges-groeningemuseum-pourbus-portrait',
              name: { el: 'Ο έμπορος Jan van Eyewerve', en: 'The merchant Jan van Eyewerve' },
              blurb: {
                el:
                  'Ο Pieter Pourbus ζωγράφισε το 1551 έναν έμπορο της Μπριζ με σοβαρό ' +
                  'πρόσωπο και σκούρα ρούχα. Το ενδιαφέρον δεν είναι ο άντρας· είναι το ' +
                  'παράθυρο πίσω του. Εκεί φαίνεται το λιμάνι της πόλης με τον τεράστιο ' +
                  'ξύλινο γερανό της, μια μηχανή που δούλευε χωρίς ρεύμα και χωρίς άλογα: ' +
                  'άνθρωποι περπατούσαν μέσα σε δύο μεγάλους ξύλινους τροχούς, σαν χάμστερ, ' +
                  'και ο γερανός σήκωνε βαρέλια από τα καράβια.',
                en:
                  'In 1551 Pieter Pourbus painted a Bruges merchant with a serious face and ' +
                  'dark clothes. The interesting part is not the man; it is the window behind ' +
                  'him. Through it you see the city’s harbour with its enormous wooden crane, ' +
                  'a machine that ran with no electricity and no horses: men walked inside two ' +
                  'great wooden wheels, like hamsters, and the crane lifted barrels off the ' +
                  'ships.',
              },
              question: {
                q: {
                  el: 'Τι φαίνεται από το παράθυρο πίσω από τον έμπορο;',
                  en: 'What can be seen through the window behind him?',
                },
                answers: [
                  { el: 'Ένας ξύλινος γερανός του λιμανιού', en: 'A wooden crane at the harbour' },
                  { el: 'Ένα κοπάδι από άσπρους κύκνους', en: 'A flock of very white swans' },
                  { el: 'Ένας ανεμόμυλος με τέσσερα φτερά', en: 'A windmill with four big sails' },
                  { el: 'Μια αγορά γεμάτη φρέσκα ψάρια', en: 'A market full of fresh fish' },
                ],
                explanation: {
                  el:
                    'Ο γερανός του λιμανιού ήταν το καμάρι της Μπριζ. Τον κινούσαν άνθρωποι ' +
                    'που περπατούσαν μέσα σε δύο ξύλινους τροχούς, και σήκωνε βαρέλια από τα καράβια.',
                  en:
                    'The harbour crane was the pride of Bruges. Men walking inside two wooden ' +
                    'wheels drove it, and it lifted barrels straight off the ships.',
                },
              },
            },
            {
              id: 'bruges-groeningemuseum-khnopff',
              name: { el: '«Secret-Reflet» του Khnopff', en: 'Khnopff’s “Secret-Reflet”' },
              blurb: {
                el:
                  'Ο Fernand Khnopff πέρασε τα πρώτα του χρόνια στη Μπριζ και έφυγε παιδί. ' +
                  'Τη ζωγράφιζε όμως συνέχεια, από τις παιδικές του αναμνήσεις. Αυτό το έργο του 1902 ' +
                  'είναι δύο εικόνες σε ένα πλαίσιο: πάνω, μια γυναίκα ντυμένη στα μπλε αγγίζει ' +
                  'απαλά μια μάσκα πάνω σε μια κολόνα· κάτω, ένα παλιό κτίριο καθρεφτισμένο ανάποδα στο ' +
                  'νερό ενός καναλιού. Το κτίριο υπάρχει: είναι το Sint-Janshospitaal, λίγα ' +
                  'λεπτά περπάτημα από εδώ.',
                en:
                  'Fernand Khnopff spent his first years in Bruges and left as a child. Yet ' +
                  'he painted the city again and again, from his childhood memories. This work of ' +
                  '1902 is two pictures in one frame: above, a woman dressed in blue gently ' +
                  'touches a mask on a column; below, an old building mirrored upside down in the water of a canal. ' +
                  'The building is real: it is the Sint-Janshospitaal, a few minutes’ walk ' +
                  'from here.',
              },
              question: {
                q: {
                  el: 'Τι δείχνει το κάτω μέρος αυτού του έργου;',
                  en: 'What does the lower half of this work show?',
                },
                answers: [
                  { el: 'Ένα κτίριο καθρεφτισμένο στο νερό', en: 'A building mirrored in the water' },
                  { el: 'Έναν κήπο με ψηλά πράσινα δέντρα', en: 'A garden of tall green trees' },
                  { el: 'Μια σκάλα που ανεβαίνει σε πύργο', en: 'A staircase climbing a tower' },
                  { el: 'Έναν δρόμο γεμάτο με ανθρώπους', en: 'A street crowded with people' },
                ],
                explanation: {
                  el:
                    'Το κάτω μισό δείχνει το παλιό νοσοκομείο ανάποδα, μέσα στο κανάλι. Ο ' +
                    'Khnopff ζωγράφιζε τη Μπριζ όπως τη θυμόταν, όχι όπως ήταν.',
                  en:
                    'The lower half shows the old hospital upside down in the canal. Khnopff ' +
                    'painted Bruges as he remembered it, not as it was.',
                },
              },
            },
          ],
        },
      ],
      riddles: [
        {
          id: 'bruges-groeningemuseum-riddle-1',
          prompt: {
            el:
              'Μέσα μου γονατίζει ένας γέρος με γυαλιά στο χέρι, μπροστά σε μια μητέρα με ' +
              'μωρό. Δίπλα τους στέκεται ένας ιππότης, και μέσα στη γυαλισμένη ασπίδα του ' +
              'κρύβεται ο ίδιος ο ζωγράφος μου.',
            en:
              'Inside me an old man kneels with spectacles in his hand, before a mother and ' +
              'her baby. A knight stands beside them, and hidden in his polished shield is ' +
              'the very painter who made me.',
          },
          hint: {
            el: 'Ο γέρος πλήρωσε για να τον ζωγραφίσουν, επειδή ήξερε ότι δεν θα ζούσε πολύ ακόμα.',
            en: 'The old man paid to be painted, because he knew he did not have long to live.',
          },
          answerExhibitId: 'bruges-groeningemuseum-van-der-paele',
          difficulty: 1,
        },
        {
          id: 'bruges-groeningemuseum-riddle-2',
          prompt: {
            el:
              'Είμαι το πρόσωπο μιας γυναίκας με άσπρο κεφαλόδεσμο, κόκκινο φόρεμα και σφιγμένα χείλη. Με ' +
              'ζωγράφισε ο ίδιος μου ο άντρας, και πάνω στο πλαίσιό μου έγραψε πόσων χρονών ' +
              'ήμουν εκείνη τη μέρα.',
            en:
              'I am the face of a woman in a white headdress and a red dress, with her lips pressed together. ' +
              'My own husband painted me, and on my frame he wrote down how old I was on that ' +
              'day.',
          },
          hint: {
            el: 'Στο πλαίσιό μου μοιάζω να μιλάω εγώ: «Ο άντρας μου Ιωάννης με τελείωσε».',
            en: 'On my frame I seem to speak myself: “My husband Johannes completed me.”',
          },
          answerExhibitId: 'bruges-groeningemuseum-margareta',
          difficulty: 2,
        },
        {
          id: 'bruges-groeningemuseum-riddle-3',
          prompt: {
            el:
              'Είμαι δύο εικόνες σε ένα πλαίσιο. Πάνω, μια γυναίκα αγγίζει απαλά μια μάσκα ' +
              'πάνω σε μια κολόνα. Κάτω, ένα κτίριο της πόλης κοιτάζεται ανάποδα μέσα σε ένα ' +
              'ήσυχο κανάλι.',
            en:
              'I am two pictures in one frame. Above, a woman gently touches a mask on a ' +
              'column. Below, a building of this city looks at itself upside down in a quiet ' +
              'canal.',
          },
          hint: {
            el: 'Ο ζωγράφος μου έφυγε από τη Μπριζ παιδί και τη ζωγράφιζε από τις αναμνήσεις του.',
            en: 'My painter left Bruges as a child and painted it from his memories.',
          },
          answerExhibitId: 'bruges-groeningemuseum-khnopff',
          difficulty: 3,
        },
      ],
    },
  },

  // --------------------------------------------------------- sint-janshospitaal
  {
    id: 'bruges-sint-janshospitaal',
    cityId: 'bruges',
    emoji: '🏥',
    category: 'museum',
    difficulty: 3,

    name: { el: 'Sint-Janshospitaal, το παλιό νοσοκομείο', en: 'The Sint-Janshospitaal' },
    tagline: {
      el: 'Οκτακόσια χρόνια νοσοκομείο, τώρα μουσείο',
      en: 'Eight hundred years a hospital, and now a museum',
    },
    story: {
      el:
        'Αυτό είναι ένα από τα παλιότερα νοσοκομεία της Ευρώπης που σώζονται. Άνοιξε τον 12ο ' +
        'αιώνα, δίπλα σε μια από τις πύλες της πόλης, ώστε να το βρίσκουν εύκολα οι ταξιδιώτες ' +
        'που έφταναν άρρωστοι, και δούλεψε ως νοσοκομείο μέχρι τον 20ό αιώνα. Οκτακόσια χρόνια ' +
        'στην ίδια δουλειά, στους ίδιους τοίχους. Για αιώνες δεν το κρατούσαν γιατροί με πτυχία αλλά ' +
        'αδελφοί και αδελφές που ζούσαν εδώ μέσα και φρόντιζαν όποιον χτυπούσε την πόρτα. Η ' +
        'ιατρική τους ήταν απλή: ζεστασιά, καθαρά σεντόνια, σούπα, βότανα από τον δικό τους ' +
        'κήπο και πολλή υπομονή. Πολλοί άρρωστοι δεν γίνονταν καλά, και το νοσοκομείο το ' +
        'ήξερε· φρόντιζε να μην είναι κανείς μόνος του. Σήμερα οι μεγάλες αίθουσες είναι άδειες ' +
        'από κρεβάτια και γεμάτες πίνακες, γιατί εδώ ζωγράφισε ο Hans Memling μερικά από τα ' +
        'ωραιότερα έργα του — για αυτό ακριβώς το κτίριο και για τους ανθρώπους που δούλευαν μέσα του.',
      en:
        'This is one of the oldest surviving hospitals in Europe. It opened in the 12th ' +
        'century beside one of the city gates, so that travellers who arrived ill would find ' +
        'it easily, and it went on working as a hospital into the 20th century. Eight hundred ' +
        'years at the same job, inside the same walls. For centuries it was not run by doctors with degrees ' +
        'but by brothers and sisters who lived here and looked after whoever knocked. Their ' +
        'medicine was simple: warmth, clean sheets, soup, herbs from their own garden and a ' +
        'great deal of patience. Many patients did not get better, and the hospital knew it; ' +
        'what it could promise was that nobody would be alone. Today the great wards are empty ' +
        'of beds and full of paintings, because Hans Memling made some of his finest work ' +
        'here — for this very building and for the people who worked inside it.',
    },
    facts: [
      {
        el: 'Άνοιξε τον 12ο αιώνα και λειτούργησε ως νοσοκομείο μέχρι τον 20ό.',
        en: 'It opened in the 12th century and worked as a hospital into the 20th.',
      },
      {
        el: 'Για αιώνες το κρατούσαν αδελφοί και αδελφές, όχι γιατροί.',
        en: 'For centuries it was run by brothers and sisters, not doctors.',
      },
      {
        el: 'Ο Hans Memling ζωγράφισε έργα ειδικά για αυτό το κτίριο.',
        en: 'Hans Memling painted works specifically for this building.',
      },
    ],
    location: {
      lat: 51.20389,
      lng: 3.22284,
      anchor: 'centroid',
      confidence: 'C',
      sources: [
        { kind: 'wikidata', ref: 'Q2432540', deltaM: 0 },
        { kind: 'wikipedia', ref: "Old St. John's Hospital", deltaM: 82 },
      ],
      verifiedAt: '2026-09-14',
      note:
        'Known weak pin, kept because no hand-placed coordinate is allowed. Wikidata’s point ' +
        '(Q2432540, the hospital as a whole) falls on the Site Oud Sint-Jan, the later ' +
        'hospital grounds now used as a conference centre, about 50 m west of the medieval ' +
        'ward building that holds the museum (OSM way 221477838, checked by review). No ' +
        'separate Wikidata item exists for that building, so the seed cannot be moved to one. ' +
        'Fix when a sourced door or building item becomes available; the findIt points to ' +
        'the real entrance on Mariastraat.',
      findIt: {
        el: 'Η είσοδος είναι στη Mariastraat, απέναντι από την εκκλησία της Παναγίας, κάτω από μια πέτρινη καμάρα.',
        en: 'The entrance is on Mariastraat, opposite the Church of Our Lady, under a stone archway.',
      },
    },
    question: {
      q: {
        el: 'Ποιοι φρόντιζαν τους αρρώστους σε αυτό το νοσοκομείο;',
        en: 'Who looked after the sick in this hospital?',
      },
      answers: [
        { el: 'Αδελφοί και αδελφές που ζούσαν εδώ', en: 'Brothers and sisters who lived here' },
        { el: 'Στρατιώτες του κόμη της Φλάνδρας', en: 'Soldiers of the Count of Flanders' },
        { el: 'Δάσκαλοι από το σχολείο της πόλης', en: 'Teachers from the city’s own school' },
        { el: 'Έμποροι που πλήρωναν τους φόρους', en: 'Merchants who had paid their taxes' },
      ],
      explanation: {
        el:
          'Αδελφοί και αδελφές ζούσαν μέσα στο νοσοκομείο και φρόντιζαν όποιον χτυπούσε την ' +
          'πόρτα. Δεν είχαν πτυχία ιατρικής· είχαν βότανα, καθαρά σεντόνια και υπομονή.',
        en:
          'Brothers and sisters lived inside the hospital and cared for whoever knocked. They ' +
          'held no medical degrees; they had herbs, clean sheets and patience.',
      },
    },
    museum: {
      doorNote: {
        el: 'Στη μεγάλη αίθουσα μιλάμε χαμηλόφωνα, όπως γινόταν εδώ πάντα. Ο κήπος και το φαρμακείο είναι πίσω από την αυλή.',
        en: 'In the great ward people speak quietly, as they always did here. The garden and the pharmacy are behind the courtyard.',
      },
      rooms: [
        {
          id: 'bruges-sint-janshospitaal-wards',
          name: { el: 'Οι αίθουσες των αρρώστων', en: 'The old wards' },
          emoji: '🛏️',
          intro: {
            el:
              'Στέκεσαι μέσα σε ένα δωμάτιο όπου κοιμήθηκαν άρρωστοι επί οκτακόσια χρόνια. ' +
              'Τα κρεβάτια έφυγαν, οι τοίχοι έμειναν. Κοίτα ψηλά πρώτα: η σκεπή είναι το ' +
              'παλιότερο πράγμα εδώ μέσα. Μετά κοίταξε τη ζωγραφιά που δείχνει αυτόν ακριβώς ' +
              'τον χώρο γεμάτο ανθρώπους, και το δωμάτιο θα ξαναγεμίσει μέσα στο κεφάλι σου.',
            en:
              'You are standing in a room where sick people slept for eight hundred years. ' +
              'The beds have gone, the walls have stayed. Look up first: the roof is the ' +
              'oldest thing in here. Then look at the painting that shows this exact space ' +
              'full of people, and the room will fill up again inside your head.',
          },
          exhibits: [
            {
              id: 'bruges-sint-janshospitaal-roof',
              name: { el: 'Η ξύλινη σκεπή της αίθουσας', en: 'The timber roof of the ward' },
              blurb: {
                el:
                  'Σήκωσε το κεφάλι. Από πάνω σου απλώνεται μια τεράστια ξύλινη σκεπή, ' +
                  'φτιαγμένη από χοντρά δοκάρια που ενώνονται σε καμάρες. Μοιάζει με σκαρί ' +
                  'καραβιού γυρισμένο ανάποδα, και δεν είναι σύμπτωση: οι μαστόροι που ' +
                  'έφτιαχναν καράβια στο λιμάνι ήταν οι ίδιοι που ήξεραν να στήνουν τέτοιες ' +
                  'στέγες. Δεν υπάρχει καμία κολόνα στη μέση της αίθουσας. Όλο το βάρος ' +
                  'πηγαίνει στους πλαϊνούς τοίχους, ώστε ο χώρος να μένει ελεύθερος για ' +
                  'σειρές κρεβατιών.',
                en:
                  'Lift your head. Above you spreads an enormous wooden roof of thick beams ' +
                  'joined into arches. It looks like the hull of a ship turned upside down, ' +
                  'and that is no accident: the craftsmen who built ships in the harbour were ' +
                  'the ones who knew how to raise roofs like this. There is not a single ' +
                  'column in the middle of the ward. All the weight goes out to the side ' +
                  'walls, so the floor stays clear for rows of beds.',
              },
              question: {
                q: {
                  el: 'Γιατί δεν υπάρχουν κολόνες στη μέση της αίθουσας;',
                  en: 'Why are there no columns in the middle of the ward?',
                },
                answers: [
                  { el: 'Για να χωράνε σειρές από κρεβάτια', en: 'To leave room for rows of beds' },
                  { el: 'Για να μπαίνει το φως του ήλιου', en: 'To let the sunlight get inside' },
                  { el: 'Για να ακούγονται οι καμπάνες', en: 'To let the bells be heard better' },
                  { el: 'Για να μη μπαίνει μέσα το κρύο', en: 'To keep the cold out of the room' },
                ],
                explanation: {
                  el:
                    'Μια κολόνα στη μέση θα έκοβε τον χώρο στα δύο. Η σκεπή σε καμάρες ρίχνει ' +
                    'όλο το βάρος στους τοίχους, οπότε το πάτωμα μένει ελεύθερο.',
                  en:
                    'A column in the middle would cut the space in two. An arched roof throws ' +
                    'all the weight onto the walls, so the floor stays free.',
                },
              },
            },
            {
              id: 'bruges-sint-janshospitaal-beerblock',
              name: { el: 'Η ζωγραφιά του Beerblock', en: 'Beerblock’s painting of the ward' },
              blurb: {
                el:
                  'Το 1778 ο Jan Beerblock ζωγράφισε αυτή ακριβώς την αίθουσα ενώ ακόμη ' +
                  'δούλευε. Είναι σαν φωτογραφία πριν από τη φωτογραφία. Βλέπεις τα κρεβάτια ' +
                  'στη σειρά με τις κουρτίνες τους, αδελφές με άσπρα σκουφιά να κουβαλάνε ' +
                  'δίσκους, έναν άρρωστο που τον φέρνουν μέσα σε φορείο, ανθρώπους να ' +
                  'προσεύχονται, ακόμη και έναν σκύλο στο πάτωμα. Σύγκρινε τη σκεπή του ' +
                  'πίνακα με τη σκεπή πάνω από το κεφάλι σου: είναι η ίδια.',
                en:
                  'In 1778 Jan Beerblock painted this very ward while it was still working. It ' +
                  'is a photograph made before photographs. You can see the beds in rows with ' +
                  'their curtains, sisters in white caps carrying trays, a patient being ' +
                  'brought in on a stretcher, people praying, even a dog on the floor. Compare ' +
                  'the roof in the painting with the roof above your head: it is the same one.',
              },
              question: {
                q: {
                  el: 'Τι δείχνει η ζωγραφιά του 1778;',
                  en: 'What does the painting of 1778 show?',
                },
                answers: [
                  { el: 'Αυτή την αίθουσα γεμάτη κόσμο', en: 'This ward, full of busy people' },
                  { el: 'Το λιμάνι με τα μεγάλα καράβια', en: 'The harbour and its big ships' },
                  { el: 'Την πλατεία της αγοράς με πάγκους', en: 'The market square with stalls' },
                  { el: 'Τους μύλους πάνω στα τείχη', en: 'The mills up on the ramparts' },
                ],
                explanation: {
                  el:
                    'Ο Beerblock ζωγράφισε το νοσοκομείο εν ώρα δουλειάς: κρεβάτια, αδελφές, ' +
                    'έναν άρρωστο σε φορείο και έναν σκύλο. Η σκεπή στον πίνακα είναι η ίδια που έχεις από πάνω σου.',
                  en:
                    'Beerblock painted the hospital at work: beds, sisters, a patient on a ' +
                    'stretcher and a dog. The roof in the picture is the one over your head.',
                },
              },
            },
            {
              id: 'bruges-sint-janshospitaal-instruments',
              name: { el: 'Τα εργαλεία των αδελφών', en: 'The instruments of the brothers' },
              blurb: {
                el:
                  'Σε μια προθήκη είναι απλωμένα τα εργαλεία με τα οποία δούλευαν εδώ: ' +
                  'νυστέρια, λαβίδες, μπολ για αίμα, ένα πριόνι. Δεν είναι ευχάριστη εικόνα, ' +
                  'και δεν πρέπει να είναι. Μέχρι τα μέσα του 19ου αιώνα δεν υπήρχε ' +
                  'αναισθησία: ο άρρωστος ήταν ξύπνιος. Γι’ αυτό η μεγάλη αρετή ενός ' +
                  'χειρουργού τότε ήταν η ταχύτητα. Κοιτώντας αυτά τα εργαλεία καταλαβαίνεις ' +
                  'πόσο πρόσφατο δώρο είναι το να μη σε πονάει ο γιατρός.',
                en:
                  'In one case lie the tools they worked with here: knives, tongs, bowls for ' +
                  'blood, a saw. It is not a pleasant sight, and it should not be. Until the ' +
                  'middle of the 19th century there was no anaesthetic: the patient was awake. ' +
                  'That is why the great virtue of a surgeon in those days was speed. Looking ' +
                  'at these tools, you understand how recent a gift it is that a doctor need ' +
                  'not hurt you.',
              },
              question: {
                q: {
                  el: 'Γιατί ο χειρουργός τότε έπρεπε να είναι γρήγορος;',
                  en: 'Why did a surgeon then have to be fast?',
                },
                answers: [
                  { el: 'Ο άρρωστος ήταν ξύπνιος', en: 'The patient was wide awake' },
                  { el: 'Έκλεινε νωρίς το νοσοκομείο', en: 'The hospital shut early each day' },
                  { el: 'Τα εργαλεία ζεσταίνονταν πολύ', en: 'The tools grew far too hot' },
                  { el: 'Τον πλήρωναν με την ώρα', en: 'He was paid by the hour' },
                ],
                explanation: {
                  el:
                    'Η αναισθησία ήρθε στα μέσα του 19ου αιώνα. Πριν από αυτήν, όσο πιο ' +
                    'γρήγορα τελείωνε η επέμβαση τόσο λιγότερο υπέφερε ο άνθρωπος.',
                  en:
                    'Anaesthetic arrived in the middle of the 19th century. Before it, the ' +
                    'faster the operation ended, the less the person suffered.',
                },
              },
            },
          ],
        },
        {
          id: 'bruges-sint-janshospitaal-pharmacy',
          name: { el: 'Το φαρμακείο', en: 'The pharmacy' },
          emoji: '🧪',
          intro: {
            el:
              'Πίσω από την αυλή υπάρχει ένα μικρό δωμάτιο που μυρίζει ακόμη ξύλο. Εδώ ' +
              'έφτιαχναν τα φάρμακα του νοσοκομείου, με βότανα από τον κήπο και συνταγές ' +
              'γραμμένες στο χέρι. Δεν υπήρχε εργοστάσιο, δεν υπήρχε χάπι σε κουτί: κάθε ' +
              'φάρμακο ζυγιζόταν, κοπανιζόταν και ανακατευόταν εδώ μέσα, μία δόση τη φορά.',
            en:
              'Behind the courtyard is a small room that still smells of wood. Here the ' +
              'hospital’s medicines were made, from herbs out of the garden and recipes ' +
              'written by hand. There was no factory and no pill in a box: every medicine was ' +
              'weighed, pounded and mixed in this room, one dose at a time.',
          },
          exhibits: [
            {
              id: 'bruges-sint-janshospitaal-cabinets',
              name: { el: 'Τα ξύλινα ντουλάπια', en: 'The wooden cabinets' },
              blurb: {
                el:
                  'Οι τοίχοι είναι καλυμμένοι με σκούρα ξύλινα ντουλάπια γεμάτα μικρά ' +
                  'συρτάρια. Κάθε συρτάρι είχε το δικό του περιεχόμενο και το δικό του όνομα ' +
                  'γραμμένο μπροστά. Το ξύλο δεν διαλέχτηκε για ομορφιά: κρατάει το φως ' +
                  'έξω, και τα περισσότερα βότανα χάνουν τη δύναμή τους στο φως και στην ' +
                  'υγρασία. Ένα φαρμακείο του 17ου αιώνα ήταν στην ουσία ένα σκοτεινό, στεγνό ' +
                  'δωμάτιο με εκατοντάδες μικρά κουτιά, και ένας άνθρωπος που ήξερε ποιο ' +
                  'είναι πού.',
                en:
                  'The walls are covered with dark wooden cabinets full of small drawers. Each ' +
                  'drawer had its own contents and its own name written on the front. The wood ' +
                  'was not chosen to look handsome: it keeps the light out, and most herbs ' +
                  'lose their strength in light and damp. A 17th-century pharmacy was really a ' +
                  'dark, dry room with hundreds of little boxes, and one person who knew which ' +
                  'was which.',
              },
              question: {
                q: {
                  el: 'Γιατί τα βότανα φυλάγονταν σε σκοτεινά ντουλάπια;',
                  en: 'Why were the herbs kept in dark cabinets?',
                },
                answers: [
                  { el: 'Το φως τους χαλάει', en: 'Light spoils them' },
                  { el: 'Ήταν πολύ ακριβά', en: 'They cost a lot' },
                  { el: 'Μύριζαν πολύ έντονα', en: 'They smelled strong' },
                  { el: 'Τα έτρωγαν τα ζώα', en: 'Animals ate them' },
                ],
                explanation: {
                  el:
                    'Το φως και η υγρασία καταστρέφουν τη δύναμη ενός βοτάνου. Ένα σκούρο ' +
                    'ξύλινο συρτάρι είναι το πιο απλό ψυγείο που υπήρχε τότε.',
                  en:
                    'Light and damp destroy the strength of a herb. A dark wooden drawer was ' +
                    'the simplest fridge anyone had in those days.',
                },
              },
            },
            {
              id: 'bruges-sint-janshospitaal-jars',
              name: { el: 'Τα βάζα με τα λατινικά ονόματα', en: 'The jars with Latin names' },
              blurb: {
                el:
                  'Στα ράφια στέκονται σειρές από βάζα, πολλά άσπρα με γαλάζια γράμματα. Τα ' +
                  'ονόματα πάνω τους δεν είναι φλαμανδικά ούτε γαλλικά: είναι λατινικά. Αυτό ' +
                  'δεν ήταν επίδειξη. Τα λατινικά ήταν η κοινή γλώσσα των μορφωμένων σε όλη ' +
                  'την Ευρώπη, οπότε ένας φαρμακοποιός από τη Μπριζ μπορούσε να διαβάσει τη ' +
                  'συνταγή ενός γιατρού από την Ιταλία ή την Πολωνία χωρίς μεταφραστή. Ήταν, ' +
                  'με άλλα λόγια, ένα σύστημα ασφαλείας: ένα λάθος όνομα σε ένα βάζο μπορεί ' +
                  'να σκοτώσει.',
                en:
                  'On the shelves stand rows of jars, many of them white with blue lettering. ' +
                  'The names on them are neither Flemish nor French: they are Latin. That was ' +
                  'not showing off. Latin was the shared language of educated people across ' +
                  'Europe, so a pharmacist in Bruges could read a doctor’s recipe from Italy ' +
                  'or Poland with no translator. It was, in other words, a safety system: the ' +
                  'wrong name on a jar can kill somebody.',
              },
              question: {
                q: {
                  el: 'Γιατί τα βάζα είχαν λατινικά ονόματα;',
                  en: 'Why did the jars carry Latin names?',
                },
                answers: [
                  { el: 'Τα διάβαζαν σε όλη την Ευρώπη', en: 'All Europe could read them' },
                  { el: 'Ήταν εντολή του κόμη', en: 'The count ordered it' },
                  { el: 'Τα λατινικά είναι πιο σύντομα', en: 'Latin words are shorter' },
                  { el: 'Για να μην τα διαβάζει κανείς', en: 'So nobody could read them' },
                ],
                explanation: {
                  el:
                    'Τα λατινικά ήταν η κοινή γλώσσα των μορφωμένων. Μια συνταγή από την ' +
                    'Ιταλία διαβαζόταν στη Μπριζ χωρίς μεταφραστή, και ένα λάθος φάρμακο είναι επικίνδυνο.',
                  en:
                    'Latin was the shared language of the learned. A recipe from Italy could be ' +
                    'read in Bruges with no translator, and the wrong medicine is dangerous.',
                },
              },
            },
            {
              id: 'bruges-sint-janshospitaal-mortar',
              name: { el: 'Το γουδί και ο κήπος με τα βότανα', en: 'The mortar and the herb garden' },
              blurb: {
                el:
                  'Το γουδί είναι ένα βαρύ μπολ και ένα κοντό ρόπαλο, και ήταν το πιο ' +
                  'σημαντικό εργαλείο του φαρμακείου. Ένα ξερό φύλλο ή μια ρίζα δεν κάνει ' +
                  'τίποτα ολόκληρη· πρέπει να γίνει σκόνη για να διαλυθεί σε νερό ή κρασί. ' +
                  'Τα φυτά έρχονταν από τον κήπο του ίδιου του νοσοκομείου, λίγα βήματα πιο ' +
                  'πέρα. Μερικά από αυτά τα βότανα δουλεύουν πραγματικά — η ιτιά, για ' +
                  'παράδειγμα, περιέχει την ουσία από την οποία φτιάχτηκε αργότερα η ασπιρίνη.',
                en:
                  'A mortar is a heavy bowl and a short club, and it was the most important ' +
                  'tool in the pharmacy. A dried leaf or a root does nothing whole; it has to ' +
                  'become powder before it will dissolve in water or wine. The plants came ' +
                  'from the hospital’s own garden, a few steps away. Some of those herbs ' +
                  'really do work — willow, for instance, holds the substance that aspirin was ' +
                  'later made from.',
              },
              question: {
                q: {
                  el: 'Ποιο μέρος ποιου φυτού έδωσε την ασπιρίνη;',
                  en: 'Which part of which plant gave us aspirin?',
                },
                answers: [
                  { el: 'Ο φλοιός της ιτιάς', en: 'The bark of a willow' },
                  { el: 'Τα φύλλα της μέντας', en: 'The leaves of a mint' },
                  { el: 'Οι ρίζες του νάρκισσου', en: 'The roots of a daffodil' },
                  { el: 'Το άνθος του κρόκου', en: 'The flower of a crocus' },
                ],
                explanation: {
                  el:
                    'Ο φλοιός της ιτιάς χρησιμοποιόταν για τον πόνο εδώ και χιλιάδες χρόνια. ' +
                    'Από την ουσία του φτιάχτηκε τον 19ο αιώνα η ασπιρίνη.',
                  en:
                    'Willow bark was used against pain for thousands of years. In the 19th ' +
                    'century aspirin was made from the substance inside it.',
                },
              },
            },
          ],
        },
        {
          id: 'bruges-sint-janshospitaal-memling',
          name: { el: 'Η αίθουσα του Memling', en: 'Memling’s room' },
          emoji: '✨',
          intro: {
            el:
              'Ο Hans Memling ήρθε στη Μπριζ από τη Γερμανία και έμεινε. Δύο από τα έργα αυτής ' +
              'της αίθουσας, η λάρνακα της αγίας Ούρσουλας και το τρίπτυχο των δύο Ιωαννών, ' +
              'φτιάχτηκαν για αυτό εδώ το κτίριο, παραγγελία των αδελφών που δούλευαν στις ' +
              'αίθουσες δίπλα. Στέκονται δηλαδή εκεί όπου έπρεπε να στέκονται, κάτι σπάνιο για ' +
              'έργα πεντακοσίων ετών. Τα άλλα ήταν ιδιωτικές παραγγελίες και ήρθαν εδώ αργότερα.',
            en:
              'Hans Memling came to Bruges from Germany and stayed. Two of the works in this ' +
              'room, the Saint Ursula shrine and the triptych of the two Johns, were made for this ' +
              'building, ordered by the brothers and sisters who worked in the wards next ' +
              'door. They stand where they were meant to stand, which is rare for anything five ' +
              'hundred years old. The others were private orders and arrived here later.',
          },
          exhibits: [
            {
              id: 'bruges-sint-janshospitaal-ursula-shrine',
              name: { el: 'Η λάρνακα της Αγίας Ούρσουλας', en: 'The Shrine of Saint Ursula' },
              blurb: {
                el:
                  'Μοιάζει με μικροσκοπική γοτθική εκκλησία από χρυσωμένο ξύλο, με στέγη, ' +
                  'παράθυρα και κολονάκια, αλλά χωράει σε ένα τραπέζι. Ο Memling την ' +
                  'τελείωσε το 1489. Στα πλαϊνά της, έξι μικροί πίνακες αφηγούνται μια ' +
                  'ιστορία σαν κόμικ, καρέ καρέ: η Ούρσουλα ξεκινάει ταξίδι με πλοίο, ' +
                  'φτάνει σε πόλεις, και το ταξίδι δεν τελειώνει καλά. Πλησίασε: τα κτίρια ' +
                  'στο βάθος είναι ζωγραφισμένα με τόση ακρίβεια που αναγνωρίζονται ' +
                  'πραγματικές πόλεις.',
                en:
                  'It looks like a tiny Gothic church of gilded wood, with a roof, windows and ' +
                  'little columns, yet it fits on a table. Memling finished it in 1489. Along ' +
                  'its sides six small paintings tell a story like a comic strip, frame by ' +
                  'frame: Ursula sets out by ship, reaches city after city, and the journey ' +
                  'does not end well. Step close: the buildings in the background are painted ' +
                  'so exactly that real cities can be recognised in them.',
              },
              question: {
                q: {
                  el: 'Πώς αφηγείται την ιστορία της αυτή η λάρνακα;',
                  en: 'How does this shrine tell its story?',
                },
                answers: [
                  { el: 'Με έξι μικρούς πίνακες στη σειρά', en: 'With six small paintings in a row' },
                  { el: 'Με γράμματα σκαλισμένα στο ξύλο', en: 'With letters carved into the wood' },
                  { el: 'Με ένα τραγούδι που παίζει μέσα', en: 'With a song that plays inside it' },
                  { el: 'Με χάρτες του ταξιδιού στη βάση', en: 'With maps of the journey below' },
                ],
                explanation: {
                  el:
                    'Οι έξι πίνακες διαβάζονται με τη σειρά, σαν κόμικ. Ήταν ο τρόπος να ' +
                    'διηγηθείς μια ιστορία σε ανθρώπους που οι περισσότεροι δεν ήξεραν να διαβάζουν.',
                  en:
                    'The six paintings are read in order, like a comic strip. It was how you ' +
                    'told a story to people who mostly could not read.',
                },
              },
            },
            {
              id: 'bruges-sint-janshospitaal-johannes-triptych',
              name: { el: 'Το τρίπτυχο των δύο Ιωαννών', en: 'The triptych of the two Johns' },
              blurb: {
                el:
                  'Το μεγάλο τρίπτυχο του 1479 φτιάχτηκε για τον βωμό της εκκλησίας του ' +
                  'νοσοκομείου και δείχνει τους δύο αγίους Ιωάννηδες, από τους οποίους πήρε ' +
                  'το όνομά του το κτίριο. Στο κεντρικό φύλλο η σκηνή είναι ήρεμη και ' +
                  'συμμετρική, με πλακάκια στο πάτωμα που δείχνουν το βάθος. Το δεξί φύλλο ' +
                  'όμως είναι γεμάτο παράξενα οράματα, με ένα κόκκινο τέρας και έναν ουρανό ' +
                  'που ανοίγει. Ο Memling ήταν από τους πρώτους που ζωγράφισαν όνειρα με την ' +
                  'ίδια ακρίβεια που ζωγράφιζαν έπιπλα.',
                en:
                  'The great triptych of 1479 was made for the altar of the hospital church ' +
                  'and shows the two Saints John, after whom the building is named. In the ' +
                  'central panel the scene is calm and symmetrical, with floor tiles that show ' +
                  'the depth of the room. The right panel, though, is full of strange visions, ' +
                  'with a red monster and a sky that opens. Memling was among the first to ' +
                  'paint dreams with the same precision he used for furniture.',
              },
              question: {
                q: {
                  el: 'Από ποιους πήρε το όνομά του το νοσοκομείο;',
                  en: 'Who is the hospital named after?',
                },
                answers: [
                  { el: 'Από τους δύο αγίους Ιωάννηδες', en: 'After the two Saints John' },
                  { el: 'Από τον κόμη της Φλάνδρας', en: 'After the Count of Flanders' },
                  { el: 'Από τον ζωγράφο Hans Memling', en: 'After the painter Hans Memling' },
                  { el: 'Από την Αγία Ούρσουλα', en: 'After Saint Ursula' },
                ],
                explanation: {
                  el:
                    'Το Sint-Janshospitaal πήρε το όνομά του από τους δύο αγίους Ιωάννηδες, ' +
                    'τον Βαπτιστή και τον Ευαγγελιστή, που εμφανίζονται στο τρίπτυχο.',
                  en:
                    'The Sint-Janshospitaal is named after the two Saints John, the Baptist ' +
                    'and the Evangelist, who both appear in the triptych.',
                },
              },
            },
            {
              id: 'bruges-sint-janshospitaal-nieuwenhove',
              name: { el: 'Το δίπτυχο με τον καθρέφτη', en: 'The diptych with the mirror' },
              blurb: {
                el:
                  'Δύο μικρές σανίδες με μεντεσέδες, φτιαγμένες το 1487. Στη μία η Παναγία ' +
                  'με το μωρό, στην άλλη ένας νέος άντρας, ο Maarten van Nieuwenhove, με τα ' +
                  'χέρια ενωμένα. Φαίνονται δύο ξεχωριστές εικόνες, μέχρι που προσέξεις τον ' +
                  'στρογγυλό καθρέφτη στον τοίχο πίσω από την Παναγία: μέσα του φαίνονται και ' +
                  'οι δύο μαζί, στο ίδιο δωμάτιο. Ο Memling απέδειξε έτσι, με ένα κόλπο, ότι ' +
                  'τα δύο κομμάτια είναι ένας χώρος.',
                en:
                  'Two small boards on hinges, made in 1487. On one the Madonna with her baby, ' +
                  'on the other a young man, Maarten van Nieuwenhove, with his hands together. ' +
                  'They look like two separate pictures, until you notice the round mirror on ' +
                  'the wall behind the Madonna: inside it both of them appear together, in one ' +
                  'room. With that single trick Memling proved the two halves are a single ' +
                  'space.',
              },
              question: {
                q: {
                  el: 'Τι αποδεικνύει ο στρογγυλός καθρέφτης;',
                  en: 'What does the round mirror prove?',
                },
                answers: [
                  { el: 'Ότι είναι στο ίδιο δωμάτιο', en: 'They are in the same room' },
                  { el: 'Ότι η σανίδα είναι σπασμένη', en: 'The board has been broken' },
                  { el: 'Ότι ο άντρας ήταν ζωγράφος', en: 'The man was a painter too' },
                  { el: 'Ότι λείπει ένα τρίτο φύλλο', en: 'A third panel is missing' },
                ],
                explanation: {
                  el:
                    'Στον καθρέφτη φαίνονται και οι δύο μορφές μαζί. Άρα δεν είναι δύο ' +
                    'χωριστές εικόνες: είναι ένα δωμάτιο, κομμένο στα δύο από το πλαίσιο.',
                  en:
                    'Both figures appear together in the mirror. So they are not two separate ' +
                    'pictures: it is one room, cut in half by the frame.',
                },
              },
            },
            {
              id: 'bruges-sint-janshospitaal-sibylla',
              name: { el: 'Το πορτρέτο μιας νέας γυναίκας', en: 'The portrait of a young woman' },
              blurb: {
                el:
                  'Μια νέα γυναίκα κοιτάζει λίγο πλάγια, με ψηλό κωνικό καπέλο και διάφανο ' +
                  'πέπλο. Ο Memling το ζωγράφισε το 1480. Το όνομα «Sibylla Sambetha» που ' +
                  'διαβάζεται πάνω του γράφτηκε πολύ αργότερα από κάποιον άλλον, οπότε ' +
                  'κανείς δεν ξέρει πραγματικά ποια ήταν. Αυτό είναι μέρος της γοητείας του: ' +
                  'έχεις μπροστά σου ένα πρόσωπο από το 1480, ζωγραφισμένο με κάθε ' +
                  'λεπτομέρεια, και δεν μπορείς να του δώσεις όνομα.',
                en:
                  'A young woman looks slightly to one side, in a tall pointed hat and a ' +
                  'transparent veil. Memling painted her in 1480. The name “Sibylla Sambetha” ' +
                  'written on it was added much later by somebody else, so nobody really knows ' +
                  'who she was. That is part of its pull: in front of you is a face from 1480, ' +
                  'painted in every detail, and you cannot give it a name.',
              },
              question: {
                q: {
                  el: 'Γιατί δεν ξέρουμε ποια είναι η γυναίκα;',
                  en: 'Why do we not know who the woman is?',
                },
                answers: [
                  { el: 'Το όνομα γράφτηκε πολύ αργότερα', en: 'The name was added much later' },
                  { el: 'Ο πίνακας έχει χαλάσει πολύ', en: 'The painting is badly damaged' },
                  { el: 'Ο πίνακας δεν καθαρίστηκε ποτέ', en: 'The picture was never cleaned' },
                  { el: 'Το πέπλο κρύβει το πρόσωπό της', en: 'Her face is hidden by the veil' },
                ],
                explanation: {
                  el:
                    'Το όνομα στον πίνακα δεν το έγραψε ο Memling· προστέθηκε πολύ αργότερα. ' +
                    'Έτσι το πρόσωπο σώθηκε αλλά η ταυτότητα χάθηκε.',
                  en:
                    'The name on the picture was not written by Memling; it was added much ' +
                    'later. So the face survived but the identity was lost.',
                },
              },
            },
          ],
        },
      ],
      riddles: [
        {
          id: 'bruges-sint-janshospitaal-riddle-1',
          prompt: {
            el:
              'Μοιάζω με μικροσκοπική εκκλησία από χρυσωμένο ξύλο, αλλά δεν μπαίνει κανείς ' +
              'μέσα μου. Στα πλευρά μου, έξι μικρές εικόνες στη σειρά διηγούνται ένα ταξίδι ' +
              'που δεν τελείωσε καλά.',
            en:
              'I look like a tiny church of gilded wood, but nobody can walk inside me. Along ' +
              'my sides, six small pictures in a row tell the story of a journey that did not ' +
              'end well.',
          },
          hint: {
            el: 'Στο βάθος των εικόνων μου είναι ζωγραφισμένες αληθινές πόλεις, τόσο ακριβώς που αναγνωρίζονται.',
            en: 'Real cities are painted in the background of my pictures, exactly enough to be recognised.',
          },
          answerExhibitId: 'bruges-sint-janshospitaal-ursula-shrine',
          difficulty: 1,
        },
        {
          id: 'bruges-sint-janshospitaal-riddle-2',
          prompt: {
            el:
              'Είμαι δύο σανίδες ενωμένες με μεντεσέδες. Στη μία μια μητέρα με μωρό, στην ' +
              'άλλη ένας νέος άντρας. Ψάξε τον στρογγυλό καθρέφτη μου: εκεί φαίνονται και οι ' +
              'δύο μαζί.',
            en:
              'I am two boards joined by hinges. On one a mother with her baby, on the other a ' +
              'young man. Look for my round mirror: in it the two of them appear together.',
          },
          hint: {
            el: 'Ο καθρέφτης αποδεικνύει κάτι για τον χώρο, όχι για τους ανθρώπους.',
            en: 'The mirror proves something about the space, not about the people.',
          },
          answerExhibitId: 'bruges-sint-janshospitaal-nieuwenhove',
          difficulty: 2,
        },
        {
          id: 'bruges-sint-janshospitaal-riddle-3',
          prompt: {
            el:
              'Δείχνω αυτόν ακριβώς τον χώρο όπως ήταν πριν από σχεδόν διακόσια πενήντα χρόνια: κρεβάτια με ' +
              'κουρτίνες, αδελφές με άσπρα σκουφιά, έναν άρρωστο σε φορείο και έναν σκύλο ' +
              'ξαπλωμένο στο πάτωμα.',
            en:
              'I show this very space as it was almost two hundred and fifty years ago: beds with curtains, ' +
              'sisters in white caps, a patient on a stretcher and a dog lying on the floor.',
          },
          hint: {
            el: 'Σύγκρινε τη σκεπή μέσα μου με τη σκεπή που έχεις πάνω από το κεφάλι σου.',
            en: 'Compare the roof inside me with the roof above your own head.',
          },
          answerExhibitId: 'bruges-sint-janshospitaal-beerblock',
          difficulty: 3,
        },
      ],
    },
  },

  // ------------------------------------------------------------------ begijnhof
  {
    id: 'bruges-begijnhof',
    cityId: 'bruges',
    emoji: '🌼',
    category: 'history',
    difficulty: 2,

    name: { el: 'Begijnhof, η αυλή των μπεγκινών', en: 'The Begijnhof' },
    tagline: {
      el: 'Ένα ήσυχο χωριό μέσα στην πόλη, από το 1245',
      en: 'A quiet village inside the city, standing since 1245',
    },
    story: {
      el:
        'Το 1245 η Μαργαρίτα, κόμισσα της Φλάνδρας, έδωσε αυτό το κομμάτι γης σε μια ομάδα ' +
        'γυναικών που λέγονταν μπεγκίνες. Ήταν γυναίκες που δεν ήθελαν να παντρευτούν αλλά ' +
        'ούτε και να γίνουν μοναχές, κάτι που τον Μεσαίωνα σχεδόν δεν επιτρεπόταν: μια ' +
        'γυναίκα χωρίς σύζυγο και χωρίς μοναστήρι δεν είχε πού να ζήσει. Οι μπεγκίνες βρήκαν ' +
        'τρίτο δρόμο. Ζούσαν μαζί σε μικρά ασβεστωμένα σπιτάκια γύρω από ένα λιβάδι, ' +
        'προσεύχονταν, φρόντιζαν αρρώστους και έβγαζαν τα λεφτά τους πλέκοντας δαντέλα. Δεν ' +
        'έδιναν όρκους για μια ζωή· όποια ήθελε, έφευγε. Η αυλή είχε τείχος και πύλη που ' +
        'έκλεινε τη νύχτα, σαν μικρό χωριό. Οι τελευταίες μπεγκίνες έφυγαν πριν από περίπου ' +
        'εκατό χρόνια και από το 1927 εδώ ζουν μοναχές του Αγίου Βενεδίκτου. Την άνοιξη το ' +
        'λιβάδι σκεπάζεται από χιλιάδες νάρκισσους. Μέσα, ακόμη και σήμερα, μιλάμε σιγά.',
      en:
        'In 1245 Margaret, Countess of Flanders, gave this piece of ground to a group of women ' +
        'called beguines. They were women who did not want to marry and did not want to become ' +
        'nuns either, which in the Middle Ages was almost impossible: a woman with no husband ' +
        'and no convent had nowhere to live. The beguines found a third way. They lived ' +
        'together in small whitewashed houses around a meadow, prayed, cared for the sick and ' +
        'earned their money making lace. They took no lifelong vows; any of them who wished ' +
        'could leave. The courtyard had a wall and a gate that shut at night, like a small ' +
        'village. The last beguines left about a hundred years ago, and since 1927 Benedictine ' +
        'sisters have lived here. In spring the meadow fills with thousands of daffodils. ' +
        'Inside, even now, people speak softly.',
    },
    facts: [
      {
        el: 'Ιδρύθηκε το 1245 από τη Μαργαρίτα, κόμισσα της Φλάνδρας.',
        en: 'It was founded in 1245 by Margaret, Countess of Flanders.',
      },
      {
        el: 'Οι μπεγκίνες δεν έδιναν όρκους μοναχής και μπορούσαν να φύγουν.',
        en: 'The beguines took no vows as nuns and were free to leave.',
      },
      {
        el: 'Από το 1927 στην αυλή ζουν μοναχές του Αγίου Βενεδίκτου.',
        en: 'Since 1927 Benedictine sisters have lived in the courtyard.',
      },
      {
        el: 'Η UNESCO κατέγραψε δεκατρία φλαμανδικά μπεγκινάζ το 1998.',
        en: 'UNESCO listed thirteen Flemish beguinages in 1998.',
      },
    ],
    location: {
      lat: 51.20173,
      lng: 3.22388,
      anchor: 'centroid',
      confidence: 'C',
      sources: [{ kind: 'wikidata', ref: 'Q101248776', deltaM: 0 }],
      verifiedAt: '2026-09-14',
      note:
        'The pin is the Begijnhofbrug (Q101248776), the bridge at the gate, and not the ' +
        'beguinage itself (Q2528092). Q2528092 carries a coordinate rounded to whole ' +
        'arcminutes that lands roughly 500 m west, across the ring canal — an area anchor ' +
        'tolerates that, so it would have graded rather than failed while sending a visitor ' +
        'to the wrong side of town. The bridge is about 20 m from the door. One source only; ' +
        'the OSM fetch failed all session.',
      findIt: {
        el: 'Από τη μικρή πλατεία Wijngaardplein πέρασε την πέτρινη γέφυρα. Η πύλη με τη χρονολογία 1776 είναι η είσοδος.',
        en: 'From the little Wijngaardplein cross the stone bridge. The gate dated 1776 is the way in.',
      },
    },
    question: {
      q: {
        el: 'Τι ήταν οι μπεγκίνες που ζούσαν εδώ;',
        en: 'What were the beguines who lived here?',
      },
      answers: [
        { el: 'Γυναίκες που ζούσαν μαζί χωρίς όρκους', en: 'Women living together without vows' },
        { el: 'Πριγκίπισσες από την αυλή του κόμη', en: 'Princesses from the count’s court' },
        { el: 'Δασκάλες του σχολείου της πόλης', en: 'Teachers at the city’s own school' },
        { el: 'Ζωγράφοι που ήρθαν από την Ιταλία', en: 'Painters who came over from Italy' },
      ],
      explanation: {
        el:
          'Οι μπεγκίνες ζούσαν μαζί, προσεύχονταν και δούλευαν, αλλά δεν έδιναν όρκους ' +
          'μοναχής. Ήταν ένας τρίτος δρόμος, ανάμεσα στον γάμο και στο μοναστήρι.',
        en:
          'The beguines lived together, prayed and worked, but took no vows as nuns. It was a ' +
          'third way, between marriage and the convent.',
      },
    },
  },

  // ----------------------------------------------------------------- minnewater
  {
    id: 'bruges-minnewater',
    cityId: 'bruges',
    emoji: '🦢',
    category: 'nature',
    difficulty: 1,

    name: { el: 'Minnewater, η Λίμνη της Αγάπης', en: 'The Minnewater' },
    tagline: {
      el: 'Ήσυχη λίμνη σήμερα, γεμάτο λιμάνι κάποτε',
      en: 'A quiet lake today, a crowded harbour long ago',
    },
    story: {
      el:
        'Αυτή η ήσυχη λίμνη με τους κύκνους ήταν κάποτε ένα πολυσύχναστο λιμάνι. Εδώ έδεναν ' +
        'τα ποταμόπλοια που έρχονταν από τη Γάνδη, φορτωμένα εμπορεύματα, και το μικρό ' +
        'πέτρινο σπίτι στην άκρη της, το Sashuis, ρυθμίζει τη στάθμη του νερού με φράγμα από ' +
        'το 1519. Ο κόσμος τη λέει «Λίμνη της Αγάπης», αν και κανείς δεν ξέρει σίγουρα από ' +
        'πού βγήκε το όνομα Minnewater, και υπάρχει θρύλος για μια ' +
        'κοπέλα, τη Minna, που το έσκασε για να μην παντρευτεί κάποιον που δεν αγαπούσε. Οι ' +
        'κύκνοι έχουν τη δική τους ιστορία. Το 1488 οι κάτοικοι της Μπριζ επαναστάτησαν και ' +
        'κράτησαν φυλακισμένο τον Μαξιμιλιανό, τον μελλοντικό αυτοκράτορα· ο σύμβουλός του ' +
        'Pieter Lanchals, όνομα που σημαίνει «μακρύς λαιμός», δεν επέζησε. Λένε ότι όταν ' +
        'ελευθερώθηκε, ο Μαξιμιλιανός διέταξε την πόλη να κρατάει για πάντα κύκνους, πουλιά ' +
        'με μακρύ λαιμό. Οι ιστορικοί σημειώνουν ότι η πόλη είχε κύκνους και πριν από το ' +
        '1488, οπότε η διαταγή είναι μάλλον μια όμορφη ιστορία που προστέθηκε αργότερα.',
      en:
        'This quiet lake full of swans was once a busy harbour. River barges from Ghent tied up ' +
        'here loaded with goods, and the little stone house at its end, the Sashuis, has ' +
        'controlled the water level with a lock since 1519. People call it the “Lake of ' +
        'Love”, though nobody is sure where the name Minnewater really comes from, and there ' +
        'is a legend about a girl, Minna, who ran away rather than marry ' +
        'someone she did not love. The swans have a story of their own. In 1488 the people of ' +
        'Bruges rebelled and held Maximilian, the future emperor, prisoner; his adviser Pieter ' +
        'Lanchals, whose name means “long neck”, did not survive it. They say that when ' +
        'Maximilian was freed he ordered the city to keep swans for ever, birds with long ' +
        'necks. Historians note that the city already kept swans before 1488, so the order is ' +
        'probably a good story added later.',
    },
    facts: [
      {
        el: 'Το Sashuis ρυθμίζει τη στάθμη του νερού από το 1519.',
        en: 'The Sashuis has controlled the water level since 1519.',
      },
      {
        el: 'Τα ποταμόπλοια από τη Γάνδη έδεναν εδώ μέχρι το 1784.',
        en: 'The barges from Ghent tied up here until 1784.',
      },
      {
        el: 'Το επώνυμο Lanchals σημαίνει «μακρύς λαιμός» στα φλαμανδικά.',
        en: 'The surname Lanchals means “long neck” in Flemish.',
      },
    ],
    location: {
      lat: 51.2004,
      lng: 3.2248,
      anchor: 'area',
      confidence: 'C',
      sources: [{ kind: 'wikidata', ref: 'Q2134080', deltaM: 0 }],
      verifiedAt: '2026-09-14',
      note:
        'One source only: no English Wikipedia article on the item, and the OSM fetch failed ' +
        'all session. Wikidata places the point on the water itself, which for an area anchor ' +
        'is right.',
      findIt: {
        el: 'Βγες από την πύλη του Begijnhof και στρίψε δεξιά. Η λίμνη με τη γέφυρα είναι δύο λεπτά νότια.',
        en: 'Leave by the Begijnhof gate and turn right. The lake with its bridge is two minutes south.',
      },
    },
    question: {
      q: {
        el: 'Τι ήταν αυτή η λίμνη πριν από πεντακόσια χρόνια;',
        en: 'What was this lake five hundred years ago?',
      },
      answers: [
        { el: 'Το λιμάνι για τα ποταμόπλοια', en: 'The harbour for the river barges' },
        { el: 'Ένα χωράφι με στάχυα και μύλο', en: 'A cornfield with a mill beside it' },
        { el: 'Η δεξαμενή νερού του κάστρου', en: 'The water tank of the old castle' },
        { el: 'Ένα δάσος με πολύ ψηλά δέντρα', en: 'A wood full of very tall trees' },
      ],
      explanation: {
        el:
          'Τα ποταμόπλοια από τη Γάνδη έδεναν εδώ. Το φράγμα στο Sashuis κρατούσε το νερό ' +
          'στη σωστή στάθμη ώστε να μπορούν να μπαινοβγαίνουν.',
        en:
          'River barges from Ghent tied up here. The lock at the Sashuis kept the water at the ' +
          'right level so they could come and go.',
      },
    },
  },

  // ---------------------------------------------------------- jan van eyckplein
  {
    id: 'bruges-jan-van-eyckplein',
    cityId: 'bruges',
    emoji: '🎨',
    category: 'art',
    difficulty: 3,

    name: { el: 'Jan van Eyckplein, η πλατεία του ζωγράφου', en: 'The Jan van Eyckplein' },
    tagline: {
      el: 'Το παλιό λιμάνι, με έναν ζωγράφο από πέτρα στη μέση',
      en: 'The old harbour, with a painter in stone standing in it',
    },
    story: {
      el:
        'Πριν από εξακόσια χρόνια αυτή η πλατεία ήταν το λιμάνι της Μπριζ. Το κανάλι μπροστά ' +
        'σου, η Spiegelrei, γέμιζε βάρκες και μικρά καράβια με μαλλί από την Αγγλία, μετάξι ' +
        'από την Ιταλία, κρασί, μπαχαρικά και κερί από τη Βαλτική. Κάθε φορτίο πλήρωνε φόρο ' +
        'στο Tolhuis, το τελωνείο, το στολισμένο κτίριο στη γωνία. Ο άντρας του αγάλματος ' +
        'είναι ο Jan van Eyck, που έζησε εδώ και πέθανε στη Μπριζ το 1441. Ζωγράφιζε με ' +
        'χρώματα λαδιού τόσο προσεκτικά που οι πίνακές του μοιάζουν με φωτογραφίες: σε έναν ' +
        'από αυτούς έβαλε έναν μικροσκοπικό στρογγυλό καθρέφτη στον οποίο καθρεφτίζεται ' +
        'ολόκληρο το δωμάτιο, μαζί με ανθρώπους που στέκονται εκεί όπου στεκόμαστε εμείς. Ο ' +
        'λεπτός πύργος πίσω από το άγαλμα ανήκε στη λέσχη των εμπόρων, και σε μια κόγχη της ' +
        'γωνίας του κάθεται μια μικρή αρκούδα, το παλιότερο σύμβολο της πόλης. Λίγα βήματα ' +
        'πιο πέρα στεκόταν το σπίτι της οικογένειας Van der Beurze: από το όνομά της βγήκε ' +
        'η λέξη «χρηματιστήριο» σε πολλές γλώσσες.',
      en:
        'Six hundred years ago this square was the harbour of Bruges. The canal in front of ' +
        'you, the Spiegelrei, filled with boats and small ships carrying wool from England, ' +
        'silk from Italy, wine, spices and wax from the Baltic. Every cargo paid a tax at the ' +
        'Tolhuis, the toll house, the decorated building on the corner. The man on the statue ' +
        'is Jan van Eyck, who lived here and died in Bruges in 1441. He painted in oil colours ' +
        'so carefully that his pictures look like photographs: in one of them he put a tiny ' +
        'round mirror that reflects the whole room, together with people standing where we ' +
        'would stand. The slim tower behind the statue belonged to the merchants’ club, and in ' +
        'a niche on its corner sits a small bear, the oldest emblem of the city. A few steps ' +
        'away stood the house of the Van der Beurze family: their name gave many languages ' +
        'their word for a stock exchange.',
    },
    facts: [
      {
        el: 'Ο Jan van Eyck έζησε στη Μπριζ και πέθανε εδώ το 1441.',
        en: 'Jan van Eyck lived in Bruges and died here in 1441.',
      },
      {
        el: 'Στο Tolhuis πλήρωνε φόρο κάθε φορτίο που έμπαινε στην πόλη.',
        en: 'Every cargo entering the city paid its tax at the Tolhuis.',
      },
      {
        el: 'Από το όνομα Van der Beurze βγήκε η λέξη «bourse», το χρηματιστήριο.',
        en: 'The name Van der Beurze gave us the word “bourse”, a stock exchange.',
      },
    ],
    location: {
      lat: 51.21156,
      lng: 3.22589,
      anchor: 'area',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q2519486', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Jan van Eyckplein', deltaM: 5 },
      ],
      verifiedAt: '2026-09-14',
      findIt: {
        el: 'Είναι βόρεια του κέντρου, εκεί όπου η Academiestraat συναντά το κανάλι. Το άγαλμα στέκεται στη μέση της πλατείας.',
        en: 'North of the centre, where the Academiestraat meets the canal. The statue stands in the middle of the square.',
      },
    },
    question: {
      q: {
        el: 'Τι έβαλε ο Jan van Eyck σε έναν διάσημο πίνακά του;',
        en: 'What did Jan van Eyck put in one famous painting?',
      },
      answers: [
        { el: 'Έναν καθρέφτη με όλο το δωμάτιο', en: 'A mirror holding the whole room' },
        { el: 'Έναν χάρτη με όλα τα κανάλια', en: 'A map showing all the canals' },
        { el: 'Ένα καράβι με κόκκινα πανιά', en: 'A ship with bright red sails' },
        { el: 'Έναν κύκνο κάτω από το τραπέζι', en: 'A swan under the wooden table' },
      ],
      explanation: {
        el:
          'Στον μικροσκοπικό στρογγυλό καθρέφτη φαίνεται ολόκληρο το δωμάτιο, ακόμη και ' +
          'άνθρωποι στην πόρτα. Ήταν ο τρόπος του να δείξει τι μπορεί να κάνει το λάδι.',
        en:
          'In the tiny round mirror the whole room appears, even people at the door. It was ' +
          'his way of showing what oil paint could do.',
      },
    },
  },

  // ---------------------------------------------------------- sint-janshuismolen
  {
    id: 'bruges-sint-janshuismolen',
    cityId: 'bruges',
    emoji: '🌬️',
    category: 'science',
    difficulty: 2,

    name: { el: 'Sint-Janshuismolen, ο ανεμόμυλος', en: 'The Sint-Janshuismolen' },
    tagline: {
      el: 'Ένα σπίτι που γυρίζει ολόκληρο για να πιάσει τον αέρα',
      en: 'A house that turns bodily around to catch the wind',
    },
    story: {
      el:
        'Πριν από 250 χρόνια, πάνω στο πράσινο ανάχωμα των τειχών, στέκονταν γύρω από τη ' +
        'Μπριζ περισσότεροι από είκοσι ανεμόμυλοι. Το ανάχωμα ήταν το ψηλότερο σημείο σε μια ' +
        'εντελώς επίπεδη χώρα, και εκεί πάνω τα σπίτια της πόλης δεν έκοβαν τον αέρα. Ο ' +
        'Sint-Janshuismolen χτίστηκε το 1770, δεν μετακινήθηκε ποτέ, και εξακολουθεί να ' +
        'αλέθει αλεύρι όταν φυσάει. Είναι «μύλος με στύλο»: όλο το ξύλινο σώμα του, με τη ' +
        'μυλόπετρα και τον μυλωνά μέσα, ισορροπεί πάνω σε έναν τεράστιο κατακόρυφο κορμό. ' +
        'Ένα μακρύ δοκάρι κατεβαίνει πίσω ως το χώμα, και ο μυλωνάς σπρώχνει αυτό το δοκάρι ' +
        'για να γυρίσει ολόκληρο το κτίριο μέχρι τα τέσσερα φτερά να κοιτάξουν κατάματα τον ' +
        'άνεμο. Πάνω στα φτερά άπλωνε πανιά: περισσότερο πανί με λίγο αέρα, λιγότερο πανί ' +
        'όταν φυσούσε δυνατά. Σήμερα έχουν μείνει τέσσερις μύλοι σε αυτή τη γραμμή, και λίγο ' +
        'πιο κάτω στέκεται ακόμη η Kruispoort, μία από τις τέσσερις πύλες που σώθηκαν.',
      en:
        'Two hundred and fifty years ago more than twenty windmills stood around Bruges on the ' +
        'green bank of the ramparts. The bank was the highest ground in a completely flat ' +
        'country, and up there the houses of the city did not block the wind. The ' +
        'Sint-Janshuismolen was built in 1770, has never been moved, and still grinds flour ' +
        'when the wind blows. It is a post mill: its whole wooden body, with the millstone and ' +
        'the miller inside it, balances on one huge upright trunk. A long beam runs down ' +
        'behind it to the ground, and the miller pushes that beam to swing the entire building ' +
        'round until the four sails face straight into the wind. Cloth was spread over the ' +
        'sails: more cloth in a light breeze, less when it blew hard. Four mills are left ' +
        'along this stretch today, and a little further on stands the Kruispoort, one of the ' +
        'four surviving gates.',
    },
    facts: [
      {
        el: 'Χτίστηκε το 1770 και δεν μετακινήθηκε ποτέ από τη θέση του.',
        en: 'It was built in 1770 and has never been moved from its spot.',
      },
      {
        el: 'Είναι μύλος με στύλο: όλο το σώμα του γυρίζει γύρω από έναν κορμό.',
        en: 'It is a post mill: its whole body turns around one trunk.',
      },
      {
        el: 'Στο ανάχωμα Kruisvest έχουν μείνει τέσσερις ανεμόμυλοι.',
        en: 'Four windmills are left on the Kruisvest rampart.',
      },
    ],
    location: {
      lat: 51.21545,
      lng: 3.23806,
      anchor: 'centroid',
      confidence: 'C',
      sources: [{ kind: 'wikidata', ref: 'Q2789120', deltaM: 0 }],
      verifiedAt: '2026-09-14',
      note:
        'One source only: no English Wikipedia article, and the OSM fetch failed all session. ' +
        'The Kruispoort gate is told inside this story rather than pinned, because its own ' +
        'Wikidata point (Q2185810) is rounded to whole arcminutes and sits about 210 m from ' +
        'the gate.',
      findIt: {
        el: 'Ανέβα στο πράσινο ανάχωμα Kruisvest. Ο μύλος στέκεται ανάμεσα στη Rolweg και την πύλη Kruispoort.',
        en: 'Climb up onto the green Kruisvest bank. The mill stands between the Rolweg and the Kruispoort gate.',
      },
    },
    question: {
      q: {
        el: 'Πώς στρέφει ο μύλος τα φτερά του προς τον άνεμο;',
        en: 'How does the mill turn its sails into the wind?',
      },
      answers: [
        { el: 'Όλο του το σώμα γυρίζει σε έναν στύλο', en: 'Its whole body swings round a post' },
        { el: 'Μια μηχανή πετρελαίου κάτω από τη σκάλα', en: 'An oil engine under the staircase' },
        { el: 'Δύο άλογα δεμένα σε έναν μεγάλο τροχό', en: 'Two horses tied to a large wheel' },
        { el: 'Δεν στρέφεται· ο άνεμος φυσάει πάντα εκεί', en: 'It does not turn; the wind is fixed' },
      ],
      explanation: {
        el:
          'Ο μύλος ισορροπεί πάνω σε έναν κατακόρυφο κορμό. Ο μυλωνάς σπρώχνει το μακρύ ' +
          'δοκάρι πίσω και γυρίζει ολόκληρο το κτίριο, μαζί με τη μυλόπετρα και τον εαυτό του.',
        en:
          'The mill balances on one upright trunk. The miller pushes the long beam at the back ' +
          'and swings the whole building round, millstone and miller included.',
      },
    },
  },

  // ------------------------------------------------------ sint-sebastiaansgilde
  {
    id: 'bruges-sint-sebastiaansgilde',
    cityId: 'bruges',
    emoji: '🏹',
    category: 'sport',
    difficulty: 2,

    name: { el: 'Sint-Sebastiaansgilde, η λέσχη των τοξοτών', en: 'The Sint-Sebastiaansgilde' },
    tagline: {
      el: 'Τοξότες που εξασκούνται στον ίδιο κήπο εδώ και αιώνες',
      en: 'Archers still training in the same garden after centuries',
    },
    story: {
      el:
        'Πίσω από έναν τοίχο στην οδό Carmersstraat κρύβεται ένας κήπος όπου άνθρωποι ρίχνουν ' +
        'με τόξο εδώ και αιώνες. Η συντεχνία του Αγίου Σεβαστιανού ήταν αρχικά η ομάδα των ' +
        'τοξοτών της Μπριζ: πολίτες που εξασκούνταν τακτικά ώστε να μπορούν να υπερασπιστούν ' +
        'τα τείχη. Όταν τα τόξα σταμάτησαν να είναι όπλα, η λέσχη δεν διαλύθηκε· έγινε ' +
        'άθλημα, και συνεχίζεται μέχρι σήμερα. Το αγώνισμά τους δεν είναι στόχος σε τοίχο. ' +
        'Λέγεται σκοποβολή στον ιστό: ένας πολύ ψηλός ξύλινος στύλος στήνεται στον κήπο, στην ' +
        'κορυφή του δένονται μικρά ξύλινα «πουλιά», και οι τοξότες ρίχνουν ίσια πάνω, ' +
        'προσπαθώντας να τα ρίξουν κάτω. Το βέλος γυρίζει μετά μόνο του στη γη, οπότε όλοι ' +
        'στέκονται σε ασφαλή απόσταση. Στη λέσχη έχει γραφτεί και ένας βασιλιάς: ο Κάρολος ' +
        'Β΄ της Αγγλίας, όταν ζούσε εξόριστος στη Μπριζ τον 17ο αιώνα. Από τότε οι Βρετανοί ' +
        'μονάρχες είναι επίτιμα μέλη.',
      en:
        'Behind a wall on the Carmersstraat hides a garden where people have been shooting bows ' +
        'for centuries. The Guild of Saint Sebastian began as the archers of Bruges: townsmen ' +
        'who practised regularly so that they could defend the walls. When bows stopped being ' +
        'weapons the club did not break up; it became a sport, and it is still going. Their ' +
        'contest is not a target on a wall. It is called popinjay shooting: a very tall wooden ' +
        'mast is raised in the garden, small wooden “birds” are fixed at the top, and the ' +
        'archers shoot straight upwards, trying to knock them off. The arrow then comes back ' +
        'down on its own, so everyone stands well clear. A king has been enrolled here too: ' +
        'Charles II of England, while he was living in exile in Bruges in the 17th century. ' +
        'British monarchs have been honorary members ever since.',
    },
    facts: [
      {
        el: 'Είναι μία από τις παλιότερες λέσχες τοξοβολίας που λειτουργούν ακόμη.',
        en: 'It is one of the oldest archery clubs still in operation.',
      },
      {
        el: 'Οι τοξότες ρίχνουν κατακόρυφα, σε ξύλινα «πουλιά» πάνω σε ψηλό ιστό.',
        en: 'The archers shoot straight up at wooden “birds” on a tall mast.',
      },
      {
        el: 'Ο Κάρολος Β΄ της Αγγλίας έγινε μέλος όσο ζούσε εξόριστος στη Μπριζ.',
        en: 'Charles II of England joined while living in exile in Bruges.',
      },
    ],
    location: {
      lat: 51.21553,
      lng: 3.23648,
      anchor: 'centroid',
      confidence: 'C',
      sources: [{ kind: 'wikidata', ref: 'Q3101274', deltaM: 0 }],
      verifiedAt: '2026-09-14',
      note:
        'The Wikidata item carries no description at all, which is why the seed documents it: ' +
        'its P31 is museum and its point falls on the Carmersstraat, 110 m from the windmill. ' +
        'One source only; the OSM fetch failed all session.',
      findIt: {
        el: 'Στην οδό Carmersstraat, λίγο πριν από το ανάχωμα. Ψάξε την πύλη με το πυργάκι που έχει στρογγυλό θόλο.',
        en: 'On the Carmersstraat, just before the rampart. Look for the gateway by the turret with a round dome.',
      },
    },
    question: {
      q: {
        el: 'Πώς ρίχνουν με το τόξο οι τοξότες αυτής της λέσχης;',
        en: 'How do the archers of this club shoot?',
      },
      answers: [
        { el: 'Ίσια προς τα πάνω, σε ψηλό ιστό', en: 'Straight up at a very tall mast' },
        { el: 'Καθισμένοι, με τα πόδια στο νερό', en: 'Sitting down with feet in water' },
        { el: 'Καλπάζοντας πάνω σε γρήγορο άλογο', en: 'From the back of a fast horse' },
        { el: 'Μέσα από βάρκα, πάνω στο κανάλι', en: 'From a boat out on the canal' },
      ],
      explanation: {
        el:
          'Οι τοξότες ρίχνουν κατακόρυφα σε μικρά ξύλινα πουλιά δεμένα στην κορυφή ενός ' +
          'ιστού. Το βέλος πέφτει μετά μόνο του, γι’ αυτό όλοι στέκονται σε απόσταση.',
        en:
          'They shoot vertically at small wooden birds fixed to the top of a mast. The arrow ' +
          'then falls back by itself, which is why everyone stands clear.',
      },
    },
  },

  // ----------------------------------------------------------------- astridpark
  {
    id: 'bruges-astridpark',
    cityId: 'bruges',
    emoji: '🌳',
    category: 'nature',
    difficulty: 1,

    name: { el: 'Koningin Astridpark, το πάρκο', en: 'The Koningin Astridpark' },
    tagline: {
      el: 'Ο κήπος ενός μοναστηριού που έγινε πάρκο για όλους',
      en: 'A friary garden that became a park for everybody',
    },
    story: {
      el:
        'Στα ανατολικά του κέντρου, εκεί όπου οι δρόμοι γίνονται ήσυχοι και τα σπίτια ' +
        'χαμηλά, ανοίγει ξαφνικά ένα πάρκο με πολύ μεγάλα δέντρα. Η γη αυτή δεν ήταν πάντα ' +
        'δημόσια: ήταν ο κήπος ενός μοναστηριού των Φραγκισκανών, κλειστός για τους ' +
        'κατοίκους της πόλης επί αιώνες. Στα χρόνια της γαλλικής κατοχής, γύρω στο 1800, το ' +
        'μοναστήρι έκλεισε, και αργότερα η πόλη αποφάσισε να μη χτίσει εδώ αλλά να φυτέψει. ' +
        'Έτσι ένας ιδιωτικός κήπος έγινε πάρκο για όλους. Οι ντόπιοι το λένε ακόμη ' +
        '«Botanieke Hof», τον Βοτανικό Κήπο, από τα φυτά που δοκιμάστηκαν εδώ. Έχει μια ' +
        'μικρή λίμνη με πάπιες, ένα σιδερένιο κιόσκι του 19ου αιώνα όπου έπαιζαν μπάντες, ' +
        'και δέντρα αρκετά μεγάλα ώστε να κρύβουν τον ουρανό. Μετά από μια μέρα σε πέτρινες ' +
        'πλατείες και σκοτεινές εκκλησίες, είναι το πιο πράσινο πράγμα στη Μπριζ.',
      en:
        'East of the centre, where the streets go quiet and the houses grow low, a park with ' +
        'very large trees opens up. This ground was not always public: it was the garden of a ' +
        'Franciscan friary, shut to the people of the city for centuries. During the French ' +
        'occupation, around 1800, the friary closed, and later the city decided not to build ' +
        'here but to plant. So a private garden became a park for everybody. Locals still call ' +
        'it the “Botanieke Hof”, the botanical garden, after the plants that were tried out ' +
        'here. It has a small pond with ducks, a 19th-century iron bandstand where bands used ' +
        'to play, and trees big enough to hide the sky. After a day of stone squares and dark ' +
        'churches, it is the greenest thing in Bruges.',
    },
    facts: [
      {
        el: 'Ήταν ο κήπος ενός μοναστηριού των Φραγκισκανών.',
        en: 'It used to be the garden of a Franciscan friary.',
      },
      {
        el: 'Οι ντόπιοι το λένε ακόμη «Botanieke Hof», Βοτανικό Κήπο.',
        en: 'Locals still call it the “Botanieke Hof”, the botanical garden.',
      },
      {
        el: 'Στη μέση του υπάρχει σιδερένιο κιόσκι του 19ου αιώνα.',
        en: 'A 19th-century iron bandstand stands in the middle of it.',
      },
    ],
    location: {
      lat: 51.20623,
      lng: 3.23133,
      anchor: 'area',
      confidence: 'C',
      sources: [{ kind: 'wikidata', ref: 'Q2401741', deltaM: 0 }],
      verifiedAt: '2026-09-14',
      note:
        'Four Belgian towns have a park of this name; this is the Bruges one, confirmed from ' +
        'the item description before seeding. One source only, and the OSM fetch failed all ' +
        'session.',
      findIt: {
        el: 'Ανατολικά της Vismarkt, στο τέλος της Minderbroedersstraat. Οι πύλες του είναι από σφυρήλατο σίδερο.',
        en: 'East of the Vismarkt, at the end of the Minderbroedersstraat. Its gates are wrought iron.',
      },
    },
    question: {
      q: {
        el: 'Τι ήταν αυτό το πάρκο πριν ανοίξει για όλους;',
        en: 'What was this park before it opened to everybody?',
      },
      answers: [
        { el: 'Ο κήπος ενός μοναστηριού', en: 'The garden of a friary' },
        { el: 'Η αυλή ενός σχολείου', en: 'The yard of a school' },
        { el: 'Το χωράφι ενός μύλου', en: 'The field of a mill' },
        { el: 'Η αγορά των λουλουδιών', en: 'The market for flowers' },
      ],
      explanation: {
        el:
          'Ήταν ο κλειστός κήπος ενός μοναστηριού των Φραγκισκανών. Όταν το μοναστήρι έκλεισε ' +
          'γύρω στο 1800, η πόλη διάλεξε να φυτέψει εδώ αντί να χτίσει.',
        en:
          'It was the enclosed garden of a Franciscan friary. When the friary closed around ' +
          '1800 the city chose to plant here instead of building.',
      },
    },
  },
];

export const trails: Trail[] = [
  {
    id: 'bruges-medieval-heart',
    cityId: 'bruges',
    emoji: '🔔',
    name: { el: 'Η μεσαιωνική καρδιά', en: 'The medieval heart' },
    promise: {
      el: 'Δύο πλατείες, ένας πύργος με 47 καμπάνες και η γωνία των καναλιών.',
      en: 'Two squares, a tower with 47 bells, and the corner where the canals meet.',
    },
    placeIds: [
      'bruges-markt',
      'bruges-belfort',
      'bruges-stadhuis',
      'bruges-heilig-bloed',
      'bruges-rozenhoedkaai',
      'bruges-vismarkt',
    ],
  },
  {
    id: 'bruges-painters-day',
    cityId: 'bruges',
    emoji: '🎨',
    name: { el: 'Μια μέρα με τους ζωγράφους', en: 'A day with the painters' },
    promise: {
      el: 'Λάδι, καθρέφτες και ένα μάρμαρο του Μιχαήλ Άγγελου, σε τέσσερα κτίρια.',
      en: 'Oil paint, mirrors and a Michelangelo marble, across four buildings.',
    },
    placeIds: [
      'bruges-groeningemuseum',
      'bruges-onze-lieve-vrouwekerk',
      'bruges-sint-janshospitaal',
      'bruges-jan-van-eyckplein',
    ],
  },
  {
    id: 'bruges-water-and-swans',
    cityId: 'bruges',
    emoji: '🦢',
    name: { el: 'Νερό και κύκνοι', en: 'Water and swans' },
    promise: {
      el: 'Από τη γωνία των καναλιών ως τη λίμνη που ήταν κάποτε λιμάνι.',
      en: 'From the corner of the canals to the lake that was once a harbour.',
    },
    placeIds: [
      'bruges-rozenhoedkaai',
      'bruges-bonifaciusbrug',
      'bruges-begijnhof',
      'bruges-minnewater',
    ],
  },
  {
    id: 'bruges-edge-of-town',
    cityId: 'bruges',
    emoji: '🌬️',
    name: { el: 'Η άκρη της πόλης', en: 'The edge of town' },
    promise: {
      el: 'Πράσινο, τόξα και ένας ανεμόμυλος που αλέθει ακόμη όταν φυσάει.',
      en: 'Green space, bows and a windmill that still grinds when the wind blows.',
    },
    placeIds: [
      'bruges-astridpark',
      'bruges-sint-sebastiaansgilde',
      'bruges-sint-janshuismolen',
    ],
  },
];
