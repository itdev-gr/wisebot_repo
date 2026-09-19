/**
 * WiseBot World — Nice.
 *
 * Fifteen places, two of them museums with an interior. Nice is not in the old
 * Explorer, so this city was written fresh rather than converted.
 *
 * Every coordinate is copied from `data/world/coords/nice.json`, field for field, and
 * `location.map` is projected from it onto the bounds declared in `countries/france.ts`.
 * Nothing graded `D`. No place claims an `entrance`, because no door here has been
 * measured.
 *
 * Every question is written so that the correct answer is neither the longest nor the
 * shortest of the four, in both languages, with the reasoning kept in the explanation.
 *
 * `el` and `en` only. The other languages arrive as overlay files.
 */

import type { Place, Trail } from '../types';

export const places: Place[] = [
  // ------------------------------------------------------------------ promenade
  {
    id: 'nice-promenade',
    cityId: 'nice',
    emoji: '🌊',
    category: 'landmark',
    difficulty: 1,

    name: { el: 'Η Προμενάντ ντεζ Ανγκλέ', en: 'The Promenade des Anglais' },
    tagline: {
      el: 'Ένας περίπατος δίπλα στη θάλασσα που πλήρωσαν οι Άγγλοι',
      en: 'A seaside walk that the English paid for',
    },
    story: {
      el:
        'Κατά μήκος της παραλίας της Νίκαιας απλώνεται ένας φαρδύς περίπατος επτά χιλιομέτρων, ' +
        'με φοίνικες, μπλε καρέκλες και τη θάλασσα στο πλάι. Το όνομά του σημαίνει «ο ' +
        'περίπατος των Άγγλων». Στις αρχές του 19ου αιώνα πλούσιοι Άγγλοι έρχονταν στη Νίκαια ' +
        'για να περάσουν τον χειμώνα, γιατί εδώ ο ήλιος λάμπει ακόμα και τον Ιανουάριο. Έναν ' +
        'χειμώνα με πολλή φτώχεια στην πόλη, ένας Άγγλος ιερέας μάζεψε χρήματα για να ' +
        'πληρώσει τους φτωχούς να φτιάξουν έναν δρόμο δίπλα στη θάλασσα. Έτσι γεννήθηκε ο ' +
        'περίπατος, γύρω στο 1820, και οι κάτοικοι τον είπαν «τον δρόμο των Άγγλων». Σήμερα ' +
        'εδώ περπατάνε, τρέχουν και κάνουν πατίνια χιλιάδες άνθρωποι κάθε μέρα. Η παραλία από ' +
        'κάτω δεν έχει άμμο αλλά στρογγυλά βότσαλα, που το κύμα τα κάνει να τρίζουν όταν ' +
        'τραβιέται πίσω. Οι μπλε καρέκλες είναι το σήμα της πόλης.',
      en:
        'Along the seafront of Nice stretches a wide walk seven kilometres long, with palm ' +
        'trees, blue chairs and the sea alongside. Its name means "the walk of the English". ' +
        'In the early 19th century wealthy English people came to Nice to spend the winter, ' +
        'because here the sun shines even in January. One winter when there was great poverty ' +
        'in the city, an English clergyman collected money to pay the poor to build a road ' +
        'beside the sea. That is how the promenade was born, around 1820, and local people ' +
        'called it "the English road". Today thousands of people walk, run and skate here every ' +
        'day. The beach below has no sand but round pebbles, which the waves make rattle as they ' +
        'draw back. The blue chairs are the city’s trademark.',
    },
    facts: [
      {
        el: 'Είναι επτά χιλιόμετρα μακρύς, κατά μήκος της θάλασσας.',
        en: 'It is seven kilometres long, along the sea.',
      },
      {
        el: 'Ξεκίνησε γύρω στο 1820 με χρήματα Άγγλων επισκεπτών.',
        en: 'It began around 1820 with money from English visitors.',
      },
      {
        el: 'Η παραλία του έχει βότσαλα, όχι άμμο.',
        en: 'Its beach has pebbles, not sand.',
      },
    ],
    location: {
      lat: 43.69111,
      lng: 7.2475,
      anchor: 'area',
      confidence: 'C',
      sources: [{ kind: 'wikidata', ref: 'Q1849491', deltaM: 0 }],
      verifiedAt: '2026-09-18',
      note: 'Grade C: a seven-kilometre boulevard, so Wikidata is the only source with a single point; Wikipedia gives none. The point sits on the promenade itself.',
      map: { x: 0.115, y: 0.914 },
    },
    question: {
      q: { el: 'Γιατί λέγεται «ο περίπατος των Άγγλων»;', en: 'Why is it called "the walk of the English"?' },
      answers: [
        { el: 'Άγγλοι επισκέπτες πλήρωσαν να φτιαχτεί', en: 'English visitors paid for it to be built' },
        { el: 'Κατά λάθος', en: 'By accident' },
        { el: 'Μόνο Άγγλοι περπατούν', en: 'Only English people walk on it' },
        {
          el: 'Γιατί ένας Άγγλος βασιλιάς ήρθε και περπάτησε πρώτος από άκρη σε άκρη',
          en: 'Because an English king came and walked it first from end to end',
        },
      ],
      explanation: {
        el: 'Έναν φτωχό χειμώνα, ένας Άγγλος ιερέας μάζεψε χρήματα για να δουλέψουν οι φτωχοί στον δρόμο.',
        en: 'One hard winter, an English clergyman collected money so the poor could work on the road.',
      },
    },
  },

  // ------------------------------------------------------------ colline chateau
  {
    id: 'nice-colline-chateau',
    cityId: 'nice',
    emoji: '🏔️',
    category: 'nature',
    difficulty: 1,

    name: { el: 'Ο Λόφος του Κάστρου', en: 'Castle Hill' },
    tagline: {
      el: 'Ένα κάστρο που δεν υπάρχει πια, με έναν καταρράκτη',
      en: 'A castle that is no longer there, with a waterfall',
    },
    story: {
      el:
        'Ανάμεσα στην παλιά πόλη και στο λιμάνι υψώνεται ένας βραχώδης λόφος, ενενήντα μέτρα ' +
        'ψηλός. Για αιώνες στην κορυφή του στεκόταν ένα κάστρο, και η πρώτη Νίκαια ήταν ' +
        'χτισμένη εδώ πάνω, μακριά από τους πειρατές. Το 1706 ο βασιλιάς της Γαλλίας ' +
        'κατέκτησε την πόλη και διέταξε να ανατιναχτεί το κάστρο, για να μην το ' +
        'χρησιμοποιήσει κανείς εναντίον του. Από τότε στον λόφο δεν υπάρχει κάστρο, μόνο ' +
        'το όνομα. Τον 19ο αιώνα ο λόφος έγινε πάρκο, με πεύκα, μονοπάτια και έναν τεχνητό ' +
        'καταρράκτη που πέφτει από ψηλά με πολύ θόρυβο. Ανεβαίνεις με σκαλιά ή με έναν ' +
        'ανελκυστήρα σκαμμένο μέσα στον βράχο. Από την κορυφή βλέπεις από τη μια πλευρά όλη ' +
        'την Προμενάντ και τη γαλάζια θάλασσα, και από την άλλη το λιμάνι με τα πλοία και τις ' +
        'πολύχρωμες προσόψεις. Κάθε μεσημέρι, ακριβώς στις δώδεκα, από εδώ ακούγεται ένας ' +
        'κανονιοβολισμός.',
      en:
        'Between the old town and the harbour rises a rocky hill, ninety metres high. For ' +
        'centuries a castle stood on top, and the first Nice was built up here, out of reach ' +
        'of pirates. In 1706 the king of France conquered the city and ordered the castle to be ' +
        'blown up, so that nobody could use it against him. Since then there has been no castle ' +
        'on the hill, only the name. In the 19th century the hill became a park, with pine ' +
        'trees, paths and an artificial waterfall that crashes down noisily from high up. You ' +
        'climb by steps or take a lift cut into the rock. From the top you can see the whole ' +
        'Promenade and the blue sea on one side, and the harbour with its ships and colourful ' +
        'house fronts on the other. Every day at exactly noon a cannon is fired from here.',
    },
    facts: [
      {
        el: 'Το κάστρο ανατινάχτηκε το 1706 και δεν ξαναχτίστηκε.',
        en: 'The castle was blown up in 1706 and never rebuilt.',
      },
      {
        el: 'Ο καταρράκτης του είναι τεχνητός.',
        en: 'Its waterfall is artificial.',
      },
      {
        el: 'Κάθε μεσημέρι στις δώδεκα ακούγεται ένας κανονιοβολισμός.',
        en: 'Every day at noon a cannon is fired.',
      },
    ],
    location: {
      lat: 43.696,
      lng: 7.27968,
      anchor: 'viewpoint',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q2970127', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Castle of Nice', deltaM: 2 },
      ],
      verifiedAt: '2026-09-18',
      map: { x: 0.785, y: 0.778 },
    },
    question: {
      q: { el: 'Τι απέγινε το κάστρο του λόφου;', en: 'What happened to the castle on the hill?' },
      answers: [
        { el: 'Ανατινάχτηκε το 1706', en: 'It was blown up in 1706' },
        { el: 'Βούλιαξε', en: 'It sank' },
        { el: 'Έγινε ξενοδοχείο', en: 'It became a hotel' },
        {
          el: 'Το μετέφεραν πέτρα πέτρα σε ένα άλλο βουνό πιο μακριά από τη θάλασσα',
          en: 'It was moved stone by stone to another mountain further from the sea',
        },
      ],
      explanation: {
        el: 'Ο βασιλιάς της Γαλλίας το ανατίναξε για να μην το χρησιμοποιήσει κανείς εναντίον του.',
        en: 'The king of France blew it up so that nobody could use it against him.',
      },
    },
  },

  // --------------------------------------------------------------- cours saleya
  {
    id: 'nice-cours-saleya',
    cityId: 'nice',
    emoji: '🌸',
    category: 'food',
    difficulty: 1,

    name: { el: 'Το Κουρ Σαλεγιά', en: 'The Cours Saleya' },
    tagline: {
      el: 'Μια αγορά με λουλούδια, λαχανικά και μια τηγανίτα από ρεβίθια',
      en: 'A market of flowers, vegetables and a chickpea pancake',
    },
    story: {
      el:
        'Πίσω από την Προμενάντ, στην άκρη της παλιάς πόλης, απλώνεται μια μακριά πλατεία με ' +
        'ριγέ τέντες. Είναι η αγορά της Νίκαιας. Τα πρωινά οι πάγκοι γεμίζουν λουλούδια, ' +
        'γιατί η περιοχή γύρω από τη Νίκαια καλλιεργεί λουλούδια εδώ και δύο αιώνες, και ' +
        'λαχανικά, φρούτα, ελιές και μπαχαρικά. Τη Δευτέρα, αντί για φαγητό, οι πάγκοι έχουν ' +
        'παλιά αντικείμενα: ρολόγια, βιβλία, παιχνίδια, πιάτα. Εδώ δοκιμάζεις το πιο γνωστό ' +
        'φαγητό της Νίκαιας, τη σόκα: μια μεγάλη λεπτή τηγανίτα από αλεύρι ρεβιθιού, που ' +
        'ψήνεται σε τεράστιο στρογγυλό ταψί μέσα σε φούρνο με ξύλα, και τρώγεται καυτή, ' +
        'κομμένη σε κομμάτια, με πιπέρι. Τα σπίτια γύρω από την πλατεία είναι βαμμένα κίτρινα, ' +
        'κόκκινα και πορτοκαλί, όπως στην Ιταλία, γιατί η Νίκαια ανήκε για αιώνες σε ένα ' +
        'ιταλικό βασίλειο και έγινε γαλλική μόλις το 1860.',
      en:
        'Behind the Promenade, at the edge of the old town, lies a long square with striped ' +
        'awnings. It is Nice’s market. In the mornings the stalls fill with flowers, because ' +
        'the countryside around Nice has grown flowers for two centuries, and with vegetables, ' +
        'fruit, olives and spices. On Mondays, instead of food, the stalls carry old things: ' +
        'clocks, books, toys, plates. Here you try Nice’s best-known food, socca: a big thin ' +
        'pancake of chickpea flour, baked on an enormous round tray in a wood-fired oven and ' +
        'eaten piping hot, cut into pieces, with pepper. The houses around the square are ' +
        'painted yellow, red and orange, as in Italy, because Nice belonged for centuries to an ' +
        'Italian kingdom and only became French in 1860.',
    },
    facts: [
      {
        el: 'Τα πρωινά είναι αγορά λουλουδιών και λαχανικών, τη Δευτέρα παλιών αντικειμένων.',
        en: 'Mornings it is a flower and vegetable market, Mondays a flea market.',
      },
      {
        el: 'Η σόκα είναι τηγανίτα από αλεύρι ρεβιθιού.',
        en: 'Socca is a pancake made of chickpea flour.',
      },
      {
        el: 'Η Νίκαια έγινε γαλλική μόλις το 1860.',
        en: 'Nice only became French in 1860.',
      },
    ],
    location: {
      lat: 43.6956,
      lng: 7.27504,
      anchor: 'area',
      confidence: 'C',
      sources: [{ kind: 'wikidata', ref: 'Q3001353', deltaM: 0 }],
      verifiedAt: '2026-09-18',
      note: 'Grade C: Wikidata alone carries a point for the market street; Wikipedia gives none.',
      map: { x: 0.688, y: 0.789 },
    },
    question: {
      q: { el: 'Από τι είναι φτιαγμένη η σόκα;', en: 'What is socca made from?' },
      answers: [
        { el: 'Από αλεύρι ρεβιθιού', en: 'From chickpea flour' },
        { el: 'Ψάρι', en: 'Fish' },
        { el: 'Από πατάτες', en: 'From potatoes' },
        {
          el: 'Από λουλούδια της αγοράς, αλεσμένα και ψημένα στον φούρνο',
          en: 'From market flowers, ground up and baked in the oven',
        },
      ],
      explanation: {
        el: 'Μια λεπτή τηγανίτα από ρεβίθια, ψημένη σε φούρνο με ξύλα και κομμένη σε κομμάτια.',
        en: 'A thin chickpea pancake, baked in a wood-fired oven and cut into pieces.',
      },
    },
  },

  // ----------------------------------------------------------------- cathedrale
  {
    id: 'nice-cathedrale',
    cityId: 'nice',
    emoji: '⛪',
    category: 'history',
    difficulty: 2,

    name: { el: 'Ο Καθεδρικός της Αγίας Ρεπαράτας', en: 'The Cathedral of Saint Reparata' },
    tagline: {
      el: 'Μια εκκλησία για μια κοπέλα που ήρθε με βάρκα από άγγελους',
      en: 'A church for a girl brought by boat by angels',
    },
    story: {
      el:
        'Στη μέση της παλιάς πόλης, σε μια μικρή πλατεία γεμάτη καφέ, στέκεται ο καθεδρικός ' +
        'της Νίκαιας, με έναν τρούλο από γυαλιστερά πράσινα και κίτρινα κεραμίδια. Χτίστηκε ' +
        'τον 17ο αιώνα, όταν η Νίκαια ανήκε ακόμα στους δούκες της Σαβοΐας, γι’ αυτό μοιάζει ' +
        'με τις μπαρόκ εκκλησίες της Ιταλίας, με πολύ χρυσό, πολλά αγάλματα και ζωγραφιστά ' +
        'ταβάνια. Είναι αφιερωμένος στην Αγία Ρεπαράτα, μια κοπέλα που έζησε πριν από ' +
        'χίλια επτακόσια χρόνια στη σημερινή Παλαιστίνη. Ο θρύλος λέει ότι μετά τον θάνατό της ' +
        'το σώμα της μπήκε σε μια βάρκα, και άγγελοι οδήγησαν τη βάρκα μέσα από όλη τη ' +
        'Μεσόγειο ως την ακτή της Νίκαιας. Λένε ότι ο κόλπος μπροστά από την πόλη πήρε από εκεί ' +
        'το όνομά του: «Κόλπος των Αγγέλων». Το καμπαναριό στέκεται μόνο του δίπλα στην ' +
        'εκκλησία, πιο παλιό από αυτήν.',
      en:
        'In the middle of the old town, on a small square full of cafés, stands the cathedral ' +
        'of Nice, with a dome of shiny green and yellow tiles. It was built in the 17th ' +
        'century, when Nice still belonged to the dukes of Savoy, which is why it looks like ' +
        'the baroque churches of Italy, with lots of gold, many statues and painted ceilings. ' +
        'It is dedicated to Saint Reparata, a girl who lived one thousand seven hundred years ' +
        'ago in what is now Palestine. The legend says that after her death her body was placed ' +
        'in a boat, and angels guided the boat across the whole Mediterranean to the shore of ' +
        'Nice. They say the bay in front of the city got its name from this: the "Bay of ' +
        'Angels". The bell tower stands on its own beside the church, and is older than it.',
    },
    facts: [
      {
        el: 'Χτίστηκε τον 17ο αιώνα, όταν η Νίκαια ανήκε στη Σαβοΐα.',
        en: 'It was built in the 17th century, when Nice belonged to Savoy.',
      },
      {
        el: 'Ο τρούλος του έχει γυαλιστερά πράσινα και κίτρινα κεραμίδια.',
        en: 'Its dome has shiny green and yellow tiles.',
      },
      {
        el: 'Ο κόλπος της Νίκαιας λέγεται «Κόλπος των Αγγέλων».',
        en: 'The bay of Nice is called the "Bay of Angels".',
      },
    ],
    location: {
      lat: 43.69722,
      lng: 7.27583,
      anchor: 'centroid',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q1084011', deltaM: 0 },
        { kind: 'osm', ref: 'way/137356605', deltaM: 12 },
        { kind: 'wikipedia', ref: 'Nice Cathedral', deltaM: 0 },
      ],
      verifiedAt: '2026-09-18',
      map: { x: 0.705, y: 0.744 },
    },
    question: {
      q: { el: 'Κατά τον θρύλο, πώς έφτασε η Αγία Ρεπαράτα στη Νίκαια;', en: 'According to legend, how did Saint Reparata reach Nice?' },
      answers: [
        { el: 'Σε μια βάρκα που οδηγούσαν άγγελοι', en: 'In a boat guided by angels' },
        { el: 'Με τα πόδια', en: 'On foot' },
        { el: 'Πάνω σε ένα δελφίνι', en: 'Riding on a dolphin' },
        {
          el: 'Με ένα μεγάλο εμπορικό πλοίο που μετέφερε λουλούδια από την Ανατολή',
          en: 'On a big merchant ship that carried flowers from the East',
        },
      ],
      explanation: {
        el: 'Από αυτή την ιστορία, λένε, ο κόλπος πήρε το όνομα «Κόλπος των Αγγέλων».',
        en: 'From this story, they say, the bay got the name "Bay of Angels".',
      },
    },
  },

  // ------------------------------------------------------------ palais lascaris
  {
    id: 'nice-palais-lascaris',
    cityId: 'nice',
    emoji: '🎻',
    category: 'art',
    difficulty: 2,

    name: { el: 'Το Παλάτι Λασκάρις', en: 'The Palais Lascaris' },
    tagline: {
      el: 'Ένα παλάτι κρυμμένο σε στενό δρομάκι, γεμάτο παλιά μουσικά όργανα',
      en: 'A palace hidden in a narrow lane, full of old musical instruments',
    },
    story: {
      el:
        'Σε ένα από τα πιο στενά δρομάκια της παλιάς πόλης, εκεί που δεν το περιμένεις, ' +
        'ανοίγει η πόρτα ενός παλατιού. Το έχτισε τον 17ο αιώνα μια αριστοκρατική οικογένεια ' +
        'της Νίκαιας, οι Λασκάρις, που έλεγαν ότι κατάγονται από βυζαντινούς αυτοκράτορες. ' +
        'Από έξω δεν φαίνεται τίποτα, γιατί ο δρόμος είναι πολύ στενός για να πάρεις απόσταση. ' +
        'Μέσα όμως υπάρχει μια μεγάλη μαρμάρινη σκάλα, ταβάνια ζωγραφισμένα με θεούς και ' +
        'σύννεφα, και δωμάτια με ταπετσαρίες και χρυσά έπιπλα. Σήμερα το παλάτι είναι μουσείο ' +
        'μουσικών οργάνων, από τα μεγαλύτερα της Γαλλίας. Θα δεις κιθάρες, βιολιά, πιάνα, ' +
        'φλάουτα, αλλά και όργανα που δεν έχεις ξαναδεί: μια τρομπέτα με τρεις καμπάνες, ' +
        'κιθάρες σε σχήμα αχλαδιού, ένα πιάνο τόσο μικρό που το κουβαλούσαν σε ταξίδια. Στο ' +
        'ισόγειο υπάρχει ένα παλιό φαρμακείο με ζωγραφιστά βάζα.',
      en:
        'In one of the narrowest lanes of the old town, where you least expect it, the door of ' +
        'a palace opens. It was built in the 17th century by a noble family of Nice, the ' +
        'Lascaris, who claimed to descend from Byzantine emperors. From outside you can see ' +
        'nothing, because the street is too narrow to step back. Inside, though, there is a ' +
        'great marble staircase, ceilings painted with gods and clouds, and rooms with ' +
        'tapestries and gilded furniture. Today the palace is a museum of musical instruments, ' +
        'one of the largest in France. You will see guitars, violins, pianos, flutes, but also ' +
        'instruments you have never seen: a trumpet with three bells, pear-shaped guitars, a ' +
        'piano so small it was carried on journeys. On the ground floor there is an old ' +
        'pharmacy with painted jars.',
    },
    facts: [
      {
        el: 'Χτίστηκε τον 17ο αιώνα από την οικογένεια Λασκάρις.',
        en: 'It was built in the 17th century by the Lascaris family.',
      },
      {
        el: 'Είναι από τα μεγαλύτερα μουσεία μουσικών οργάνων της Γαλλίας.',
        en: 'It is one of the largest museums of musical instruments in France.',
      },
      {
        el: 'Στο ισόγειο υπάρχει ένα παλιό φαρμακείο.',
        en: 'There is an old pharmacy on the ground floor.',
      },
    ],
    location: {
      lat: 43.6977,
      lng: 7.27725,
      anchor: 'centroid',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q3360882', deltaM: 0 },
        { kind: 'osm', ref: 'node/578023554', deltaM: 6 },
        { kind: 'wikipedia', ref: 'Palais Lascaris', deltaM: 4 },
      ],
      verifiedAt: '2026-09-18',
      map: { x: 0.734, y: 0.731 },
    },
    question: {
      q: { el: 'Τι μουσείο είναι σήμερα το παλάτι;', en: 'What kind of museum is the palace today?' },
      answers: [
        { el: 'Μουσείο μουσικών οργάνων', en: 'A museum of musical instruments' },
        { el: 'Ζώων', en: 'Of animals' },
        { el: 'Μουσείο παιχνιδιών', en: 'A museum of toys' },
        {
          el: 'Μουσείο για τους βυζαντινούς αυτοκράτορες της οικογένειας Λασκάρις',
          en: 'A museum about the Byzantine emperors of the Lascaris family',
        },
      ],
      explanation: {
        el: 'Κιθάρες, βιολιά, πιάνα, και όργανα που δεν έχεις ξαναδεί, όπως τρομπέτα με τρεις καμπάνες.',
        en: 'Guitars, violins, pianos, and instruments you have never seen, like a three-bell trumpet.',
      },
    },
  },

  // -------------------------------------------------------------- place massena
  {
    id: 'nice-place-massena',
    cityId: 'nice',
    emoji: '🧘',
    category: 'landmark',
    difficulty: 1,

    name: { el: 'Πλατεία Μασενά', en: 'Place Masséna' },
    tagline: {
      el: 'Μια κόκκινη πλατεία με επτά αγάλματα που αλλάζουν χρώμα τη νύχτα',
      en: 'A red square with seven statues that change colour at night',
    },
    story: {
      el:
        'Η κεντρική πλατεία της Νίκαιας είναι μεγάλη, ανοιχτή και ασυνήθιστη. Τα κτίρια γύρω ' +
        'της είναι βαμμένα σκούρο κόκκινο, με καμάρες από κάτω, και το πάτωμά της είναι ' +
        'σκακιέρα από άσπρες και μαύρες πλάκες. Στη μέση περνάει το τραμ, που εδώ δεν έχει ' +
        'καλώδια από πάνω για να μη χαλάει η θέα. Ψηλά, πάνω σε λεπτούς στύλους, κάθονται ' +
        'επτά ανθρώπινες μορφές, γονατιστές, σαν να διαλογίζονται. Είναι έργο ενός Ισπανού ' +
        'καλλιτέχνη και συμβολίζουν τις επτά ηπείρους. Τη μέρα είναι άσπρες, αλλά μόλις ' +
        'νυχτώσει ανάβουν και αλλάζουν αργά χρώματα, μία μετά την άλλη, σαν να κουβεντιάζουν. ' +
        'Στη νότια άκρη της πλατείας υπάρχει ένα μεγάλο σιντριβάνι με τον Απόλλωνα, τον θεό ' +
        'του ήλιου, και γύρω του άλλους θεούς με ψάρια και άλογα. Από εδώ ξεκινάει κάθε ' +
        'Φεβρουάριο το Καρναβάλι της Νίκαιας, με τεράστια άρματα από χαρτί και ένα «μάχη» με ' +
        'λουλούδια.',
      en:
        'Nice’s main square is big, open and unusual. The buildings around it are painted dark ' +
        'red, with arcades underneath, and its floor is a chessboard of white and black slabs. ' +
        'The tram runs through the middle, and here it has no overhead wires so as not to spoil ' +
        'the view. High up, on slender poles, sit seven human figures, kneeling, as if ' +
        'meditating. They are the work of a Spanish artist and stand for the seven continents. ' +
        'By day they are white, but as soon as night falls they light up and slowly change ' +
        'colour, one after another, as if they were talking to each other. At the southern end ' +
        'of the square is a big fountain with Apollo, the god of the sun, and around him other ' +
        'gods with fish and horses. Every February the Nice Carnival sets off from here, with ' +
        'enormous floats made of paper and a "battle" of flowers.',
    },
    facts: [
      {
        el: 'Το πάτωμά της είναι σκακιέρα από άσπρες και μαύρες πλάκες.',
        en: 'Its floor is a chessboard of white and black slabs.',
      },
      {
        el: 'Επτά αγάλματα πάνω σε στύλους συμβολίζουν τις επτά ηπείρους.',
        en: 'Seven statues on poles stand for the seven continents.',
      },
      {
        el: 'Από εδώ ξεκινάει κάθε Φεβρουάριο το Καρναβάλι.',
        en: 'The Carnival sets off from here every February.',
      },
    ],
    location: {
      lat: 43.6973,
      lng: 7.27014,
      anchor: 'area',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q3389982', deltaM: 0 },
        { kind: 'osm', ref: 'relation/8597240', deltaM: 10 },
        { kind: 'wikipedia', ref: 'Place Masséna', deltaM: 3 },
      ],
      verifiedAt: '2026-09-18',
      map: { x: 0.586, y: 0.742 },
    },
    question: {
      q: { el: 'Τι κάνουν τα επτά αγάλματα όταν νυχτώνει;', en: 'What do the seven statues do when night falls?' },
      answers: [
        { el: 'Ανάβουν και αλλάζουν χρώματα', en: 'They light up and change colour' },
        { el: 'Κοιμούνται', en: 'They sleep' },
        { el: 'Κατεβαίνουν κάτω', en: 'They come down' },
        {
          el: 'Γυρίζουν αργά προς τη θάλασσα για να φυλάνε το λιμάνι',
          en: 'They slowly turn towards the sea to keep watch over the harbour',
        },
      ],
      explanation: {
        el: 'Μία μετά την άλλη, σαν να κουβεντιάζουν. Τη μέρα είναι απλώς άσπρα.',
        en: 'One after another, as if they were talking. By day they are simply white.',
      },
    },
  },

  // -------------------------------------------------------------- jardin albert
  {
    id: 'nice-jardin-albert',
    cityId: 'nice',
    emoji: '🌳',
    category: 'nature',
    difficulty: 1,

    name: { el: 'Ο Κήπος Αλβέρτου Α΄', en: 'The Albert I Garden' },
    tagline: {
      el: 'Ένας κήπος πάνω σε ένα θαμμένο ποτάμι',
      en: 'A garden on top of a buried river',
    },
    story: {
      el:
        'Ανάμεσα στην Πλατεία Μασενά και στη θάλασσα απλώνεται ένας κήπος με φοίνικες, ' +
        'πεύκα και ένα μικρό υπαίθριο θέατρο. Είναι ο πιο παλιός δημόσιος κήπος της Νίκαιας. ' +
        'Το παράξενο είναι ότι από κάτω του τρέχει ένα ποτάμι. Το Παγιόν κατεβαίνει από τα ' +
        'βουνά και χύνεται στη θάλασσα ακριβώς εδώ. Τον περισσότερο καιρό είναι σχεδόν ' +
        'στεγνό, αλλά μετά από βροχή γινόταν ξαφνικά άγριο και πλημμύριζε. Οι πλύστρες της ' +
        'πόλης έπλεναν ρούχα στα νερά του, και ένας θρύλος λέει ότι ένας ντελάλης έτρεχε να ' +
        'τις προειδοποιήσει όταν ερχόταν το κύμα. Τον 19ο αιώνα η πόλη σκέπασε το ποτάμι με ' +
        'θόλους και έφτιαξε από πάνω πλατείες και κήπους, αυτόν πρώτο. Έτσι, όταν κάθεσαι στο ' +
        'γρασίδι, το ποτάμι τρέχει κάτω από τα πόδια σου. Στη μέση του κήπου στέκεται μια ' +
        'μεγάλη μεταλλική αψίδα, έργο τέχνης, μέσα από την οποία φαίνεται η θάλασσα.',
      en:
        'Between Place Masséna and the sea lies a garden with palm trees, pines and a small ' +
        'open-air theatre. It is the oldest public garden in Nice. The strange thing is that a ' +
        'river runs underneath it. The Paillon comes down from the mountains and flows into the ' +
        'sea right here. Most of the time it is almost dry, but after rain it used to turn wild ' +
        'all of a sudden and flood. The city’s washerwomen washed clothes in its waters, and a ' +
        'legend says a town crier ran to warn them when the wave was coming. In the 19th ' +
        'century the city covered the river with vaults and built squares and gardens on top, ' +
        'this one first. So when you sit on the grass, the river runs beneath your feet. In the ' +
        'middle of the garden stands a big metal arch, a work of art, through which you can see ' +
        'the sea.',
    },
    facts: [
      {
        el: 'Είναι ο πιο παλιός δημόσιος κήπος της Νίκαιας.',
        en: 'It is the oldest public garden in Nice.',
      },
      {
        el: 'Κάτω από τον κήπο τρέχει το ποτάμι Παγιόν.',
        en: 'The river Paillon runs underneath the garden.',
      },
      {
        el: 'Στη μέση του στέκεται μια μεγάλη μεταλλική αψίδα.',
        en: 'A big metal arch stands in the middle of it.',
      },
    ],
    location: {
      lat: 43.696,
      lng: 7.26824,
      anchor: 'area',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q3162279', deltaM: 0 },
        { kind: 'osm', ref: 'relation/2369263', deltaM: 15 },
      ],
      verifiedAt: '2026-09-18',
      map: { x: 0.547, y: 0.778 },
    },
    question: {
      q: { el: 'Τι βρίσκεται κάτω από αυτόν τον κήπο;', en: 'What lies underneath this garden?' },
      answers: [
        { el: 'Ένα ποτάμι σκεπασμένο με θόλους', en: 'A river covered with vaults' },
        { el: 'Χρυσάφι', en: 'Gold' },
        { el: 'Ένα παλιό κάστρο', en: 'An old castle' },
        {
          el: 'Ένας σταθμός του μετρό που δεν λειτούργησε ποτέ',
          en: 'An underground station that never opened',
        },
      ],
      explanation: {
        el: 'Το Παγιόν πλημμύριζε ξαφνικά. Η πόλη το σκέπασε και έφτιαξε από πάνω κήπους.',
        en: 'The Paillon flooded without warning. The city covered it and built gardens on top.',
      },
    },
  },

  // -------------------------------------------------------------- musee massena
  {
    id: 'nice-musee-massena',
    cityId: 'nice',
    emoji: '👑',
    category: 'history',
    difficulty: 2,

    name: { el: 'Μουσείο Μασενά', en: 'The Masséna Museum' },
    tagline: {
      el: 'Μια βίλα δίπλα στη θάλασσα που λέει την ιστορία της Νίκαιας',
      en: 'A seaside villa that tells the story of Nice',
    },
    story: {
      el:
        'Πάνω στην Προμενάντ, δίπλα σε ένα διάσημο ροζ ξενοδοχείο, στέκεται μια λευκή βίλα ' +
        'με κήπο και φοίνικες. Την έχτισε γύρω στο 1900 ο εγγονός ενός στρατηγού του ' +
        'Ναπολέοντα, του Μασενά, που είχε γεννηθεί στη Νίκαια. Ήταν το χειμωνιάτικο σπίτι της ' +
        'οικογένειας, γιατί τότε οι πλούσιοι έρχονταν στη Νίκαια μόνο τον χειμώνα, για τον ήλιο. ' +
        'Το 1919 ο γιος του τη χάρισε στην πόλη, με τον όρο να γίνει μουσείο. Στο ισόγειο ' +
        'βλέπεις τα σαλόνια όπως ήταν, με χρυσά έπιπλα, πολυελαίους και έναν κήπο πίσω από τα ' +
        'παράθυρα. Στους πάνω ορόφους μαθαίνεις την ιστορία της πόλης: πώς ανήκε στη Σαβοΐα, ' +
        'πώς ψήφισε να γίνει γαλλική το 1860, πώς ήρθαν οι Άγγλοι, οι Ρώσοι και οι βασίλισσες ' +
        'για τον χειμώνα, και πώς γεννήθηκε το Καρναβάλι. Υπάρχουν παλιές αφίσες, φορέματα, ' +
        'μια μάσκα καρναβαλιού και το νεκρικό προσωπείο του Ναπολέοντα.',
      en:
        'On the Promenade, next to a famous pink hotel, stands a white villa with a garden and ' +
        'palm trees. It was built around 1900 by the grandson of one of Napoleon’s generals, ' +
        'Masséna, who had been born in Nice. It was the family’s winter house, because in those ' +
        'days rich people came to Nice only in winter, for the sun. In 1919 his son gave it to ' +
        'the city, on condition that it became a museum. On the ground floor you see the ' +
        'drawing rooms as they were, with gilded furniture, chandeliers and a garden beyond the ' +
        'windows. On the upper floors you learn the story of the city: how it belonged to Savoy, ' +
        'how it voted to become French in 1860, how the English, the Russians and queens came ' +
        'for the winter, and how the Carnival was born. There are old posters, dresses, a ' +
        'carnival mask and Napoleon’s death mask.',
    },
    facts: [
      {
        el: 'Χτίστηκε γύρω στο 1900 ως χειμωνιάτικο σπίτι.',
        en: 'It was built around 1900 as a winter house.',
      },
      {
        el: 'Χαρίστηκε στην πόλη το 1919 για να γίνει μουσείο.',
        en: 'It was given to the city in 1919 to become a museum.',
      },
      {
        el: 'Αφηγείται την ιστορία της Νίκαιας, από τη Σαβοΐα ως το Καρναβάλι.',
        en: 'It tells the story of Nice, from Savoy to the Carnival.',
      },
    ],
    location: {
      lat: 43.6952,
      lng: 7.25894,
      anchor: 'centroid',
      confidence: 'C',
      sources: [{ kind: 'wikidata', ref: 'Q3329270', deltaM: 0 }],
      verifiedAt: '2026-09-18',
      note: 'Grade C: Wikidata alone; Wikipedia gives no coordinate and Overpass answered 429.',
      map: { x: 0.353, y: 0.800 },
    },
    question: {
      q: { el: 'Γιατί οι πλούσιοι έρχονταν στη Νίκαια μόνο τον χειμώνα;', en: 'Why did rich people come to Nice only in winter?' },
      answers: [
        { el: 'Για τον ήλιο, όταν αλλού έκανε κρύο', en: 'For the sun, when it was cold elsewhere' },
        { el: 'Για σκι', en: 'For skiing' },
        { el: 'Για το Καρναβάλι μόνο', en: 'Only for the Carnival' },
        {
          el: 'Γιατί το καλοκαίρι η πόλη έκλεινε και όλοι οι κάτοικοι έφευγαν στα βουνά',
          en: 'Because in summer the city closed and all the locals went off to the mountains',
        },
      ],
      explanation: {
        el: 'Ο ήλιος της Νίκαιας τον χειμώνα ήταν ο λόγος που ήρθαν οι Άγγλοι και έφτιαξαν την Προμενάντ.',
        en: 'Nice’s winter sun is the reason the English came and built the Promenade.',
      },
    },
  },

  // ---------------------------------------------------------------------- opera
  {
    id: 'nice-opera',
    cityId: 'nice',
    emoji: '🎭',
    category: 'art',
    difficulty: 2,

    name: { el: 'Η Όπερα της Νίκαιας', en: 'The Nice Opera' },
    tagline: {
      el: 'Ένα θέατρο που κάηκε και ξαναχτίστηκε με τη βοήθεια του Παρισιού',
      en: 'A theatre that burned and was rebuilt with help from Paris',
    },
    story: {
      el:
        'Ανάμεσα στην παλιά πόλη και στη θάλασσα στέκεται ένα θέατρο με μια χρυσοκόκκινη ' +
        'αίθουσα σαν κοσμηματοθήκη. Στη θέση του υπήρχε ένα παλιότερο θέατρο, που κάηκε το ' +
        '1881 ένα βράδυ παράστασης, από μια διαρροή αερίου στα φώτα. Η πόλη αποφάσισε αμέσως ' +
        'να χτίσει καινούργιο, και ζήτησε τη γνώμη του αρχιτέκτονα της Όπερας του Παρισιού, ' +
        'της πιο διάσημης όπερας του κόσμου. Η νέα όπερα άνοιξε το 1885. Μέσα, τέσσερις σειρές ' +
        'θεωρεία με κόκκινο βελούδο ανεβαίνουν γύρω από τη σκηνή, και το ταβάνι είναι ' +
        'ζωγραφισμένο με μορφές που πετούν. Μια όπερα είναι θεατρικό έργο όπου οι ηθοποιοί ' +
        'τραγουδούν αντί να μιλούν, με μεγάλη ορχήστρα, και εδώ παίζονται όπερες, μπαλέτα και ' +
        'συναυλίες. Η πίσω πλευρά του κτιρίου βλέπει κατευθείαν στη θάλασσα, και στην ' +
        'πρόσοψη προς την Προμενάντ υπάρχουν αγάλματα μουσών, των αρχαίων θεαινών της τέχνης.',
      en:
        'Between the old town and the sea stands a theatre with a red-and-gold hall like a ' +
        'jewel box. On its site there was an older theatre, which burned down one evening in ' +
        '1881 during a performance, from a gas leak in the lights. The city decided at once to ' +
        'build a new one, and asked the advice of the architect of the Paris Opera, the most ' +
        'famous opera house in the world. The new opera house opened in 1885. Inside, four ' +
        'tiers of red velvet boxes rise around the stage, and the ceiling is painted with ' +
        'flying figures. An opera is a play in which the actors sing instead of speaking, with a ' +
        'large orchestra, and here operas, ballets and concerts are performed. The back of the ' +
        'building faces straight onto the sea, and on the front towards the Promenade there ' +
        'are statues of the Muses, the ancient goddesses of the arts.',
    },
    facts: [
      {
        el: 'Το παλιό θέατρο κάηκε το 1881 από διαρροή αερίου.',
        en: 'The old theatre burned in 1881 from a gas leak.',
      },
      {
        el: 'Η νέα όπερα άνοιξε το 1885.',
        en: 'The new opera house opened in 1885.',
      },
      {
        el: 'Η πίσω πλευρά της βλέπει κατευθείαν στη θάλασσα.',
        en: 'Its back faces straight onto the sea.',
      },
    ],
    location: {
      lat: 43.69544,
      lng: 7.27255,
      anchor: 'centroid',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q608423', deltaM: 0 },
        { kind: 'osm', ref: 'way/137418626', deltaM: 4 },
        { kind: 'wikipedia', ref: 'Opéra de Nice', deltaM: 13 },
      ],
      verifiedAt: '2026-09-18',
      map: { x: 0.636, y: 0.793 },
    },
    question: {
      q: { el: 'Τι είναι μια όπερα;', en: 'What is an opera?' },
      answers: [
        { el: 'Θέατρο όπου τραγουδούν αντί να μιλούν', en: 'A play where they sing instead of speak' },
        { el: 'Χορός', en: 'A dance' },
        { el: 'Μια ταινία με μουσική', en: 'A film with music' },
        {
          el: 'Ένα παιχνίδι με μάσκες που παίζεται μόνο τη νύχτα του Καρναβαλιού',
          en: 'A game with masks played only on the night of the Carnival',
        },
      ],
      explanation: {
        el: 'Οι ηθοποιοί τραγουδούν όλο το έργο, με μια μεγάλη ορχήστρα μπροστά στη σκηνή.',
        en: 'The actors sing the whole play, with a big orchestra in front of the stage.',
      },
    },
  },

  // ----------------------------------------------------------------------- port
  {
    id: 'nice-port',
    cityId: 'nice',
    emoji: '⛵',
    category: 'landmark',
    difficulty: 1,

    name: { el: 'Το λιμάνι Λιμπιά', en: 'Port Lympia' },
    tagline: {
      el: 'Ένα λιμάνι σκαμμένο μέσα σε βάλτο, με πολύχρωμα σπίτια γύρω',
      en: 'A harbour dug out of a marsh, with colourful houses around it',
    },
    story: {
      el:
        'Για αιώνες η Νίκαια δεν είχε αληθινό λιμάνι. Τα πλοία έδεναν στην ανοιχτή παραλία, ' +
        'και όταν φυσούσε δυνατά, κινδύνευαν. Το 1750 ο δούκας της Σαβοΐας διέταξε να ' +
        'σκαφτεί ένα λιμάνι στην άλλη πλευρά του Λόφου του Κάστρου, εκεί που υπήρχε ένας ' +
        'βάλτος με μια πηγή που τη λέγανε Λιμπιά. Χρειάστηκαν πολλά χρόνια για να σκαφτεί ' +
        'και να χτιστεί με τα χέρια, με τσάπες και καρότσια. Σήμερα το λιμάνι είναι ένα ' +
        'ορθογώνιο κομμάτι θάλασσας μέσα στην πόλη. Στη μία πλευρά δένουν βάρκες ψαράδων και ' +
        'ιστιοπλοϊκά, και στην άλλη τεράστια πλοία που ταξιδεύουν στην Κορσική, ένα νησί ' +
        'της Γαλλίας. Γύρω γύρω τα σπίτια είναι βαμμένα κίτρινα, ώχρα και κόκκινα, σε ιταλικό ' +
        'στυλ, με ψηλά παράθυρα και μπαλκόνια. Στις προβλήτες ψαράδες μπαλώνουν δίχτυα, και ' +
        'το βράδυ τα φώτα των σπιτιών καθρεφτίζονται στο νερό.',
      en:
        'For centuries Nice had no real harbour. Ships tied up on the open beach, and when the ' +
        'wind blew hard they were in danger. In 1750 the duke of Savoy ordered a harbour to be ' +
        'dug on the other side of Castle Hill, where there was a marsh with a spring called ' +
        'Lympia. It took many years to dig and build by hand, with picks and barrows. Today the ' +
        'harbour is a rectangle of sea inside the city. On one side fishing boats and sailing ' +
        'yachts are moored, and on the other huge ships that sail to Corsica, an island that ' +
        'belongs to France. All around, the houses are painted yellow, ochre and red, in Italian ' +
        'style, with tall windows and balconies. On the quays fishermen mend nets, and in the ' +
        'evening the lights of the houses are reflected in the water.',
    },
    facts: [
      {
        el: 'Το λιμάνι άρχισε να σκάβεται το 1750, σε έναν βάλτο.',
        en: 'The harbour began to be dug in 1750, in a marsh.',
      },
      {
        el: 'Από εδώ φεύγουν τα πλοία για την Κορσική.',
        en: 'Ships leave from here for Corsica.',
      },
      {
        el: 'Τα σπίτια γύρω του είναι βαμμένα κίτρινα, ώχρα και κόκκινα.',
        en: 'The houses around it are painted yellow, ochre and red.',
      },
    ],
    location: {
      lat: 43.6942,
      lng: 7.28492,
      anchor: 'area',
      confidence: 'C',
      sources: [{ kind: 'wikidata', ref: 'Q3398372', deltaM: 0 }],
      verifiedAt: '2026-09-18',
      note: 'Grade C: Wikidata alone for the harbour basin; Wikipedia gives none.',
      map: { x: 0.894, y: 0.828 },
    },
    question: {
      q: { el: 'Πού έδεναν τα πλοία πριν σκαφτεί το λιμάνι;', en: 'Where did ships tie up before the harbour was dug?' },
      answers: [
        { el: 'Στην ανοιχτή παραλία', en: 'On the open beach' },
        { el: 'Πουθενά', en: 'Nowhere' },
        { el: 'Μέσα στο ποτάμι', en: 'Inside the river' },
        {
          el: 'Σε ένα λιμάνι της Ιταλίας, και οι επιβάτες έρχονταν με τα πόδια',
          en: 'In a harbour in Italy, and the passengers walked the rest of the way',
        },
      ],
      explanation: {
        el: 'Όταν φυσούσε δυνατά, κινδύνευαν. Γι’ αυτό ο δούκας διέταξε να σκαφτεί λιμάνι.',
        en: 'When the wind blew hard, they were in danger. That is why the duke ordered a harbour.',
      },
    },
  },

  // ---------------------------------------------------------------------- mamac
  {
    id: 'nice-mamac',
    cityId: 'nice',
    emoji: '🟦',
    category: 'art',
    difficulty: 2,

    name: { el: 'Μουσείο Μοντέρνας Τέχνης (MAMAC)', en: 'Museum of Modern Art (MAMAC)' },
    tagline: {
      el: 'Τέχνη από μπλε χρώμα, σκουπίδια και συμπιεσμένα αυτοκίνητα',
      en: 'Art made of blue paint, rubbish and squashed cars',
    },
    story: {
      el:
        'Αυτό το μουσείο μοιάζει με τέσσερις μαρμάρινους πύργους ενωμένους με γυάλινες ' +
        'γέφυρες, και άνοιξε το 1990. Στη Νίκαια, τη δεκαετία του 1960, μια παρέα καλλιτεχνών ' +
        'αποφάσισε ότι η τέχνη δεν χρειάζεται μόνο πινέλα και μπογιές. Ένας από αυτούς, ο Ιβ ' +
        'Κλάιν, που είχε γεννηθεί εδώ, έφτιαξε το δικό του μπλε χρώμα, τόσο βαθύ που μοιάζει ' +
        'να σε τραβάει μέσα του, και ζωγράφιζε πίνακες που ήταν ολόκληροι μόνο αυτό το μπλε. ' +
        'Ένας άλλος, ο Αρμάν, μάζευε αντικείμενα, βιολιά, ρολόγια, μάσκες αερίων, και τα κολλούσε ' +
        'μαζί ή τα έκλεινε σε γυάλινα κουτιά. Ένας τρίτος, ο Σεζάρ, συμπίεζε παλιά αυτοκίνητα ' +
        'σε γυαλιστερούς κύβους. Μια γυναίκα από την παρέα, η Νικί ντε Σαν Φαλ, έφτιαχνε ' +
        'τεράστιες πολύχρωμες γυναικείες μορφές που χορεύουν. Το μουσείο έχει έργα όλων τους, ' +
        'και στην ταράτσα του υπάρχει ένας κήπος με θέα σε όλη την πόλη.',
      en:
        'This museum looks like four marble towers joined by glass bridges, and it opened in ' +
        '1990. In Nice, in the 1960s, a group of artists decided that art did not only need ' +
        'brushes and paint. One of them, Yves Klein, who was born here, made his own blue, so ' +
        'deep it seems to pull you in, and painted pictures that were entirely that one blue. ' +
        'Another, Arman, collected objects, violins, clocks, gas masks, and glued them together ' +
        'or shut them in glass boxes. A third, César, squashed old cars into shiny cubes. A ' +
        'woman in the group, Niki de Saint Phalle, made huge, brightly coloured dancing female ' +
        'figures. The museum has works by all of them, and on its roof there is a garden with a ' +
        'view over the whole city.',
    },
    facts: [
      {
        el: 'Άνοιξε το 1990 και μοιάζει με τέσσερις πύργους με γυάλινες γέφυρες.',
        en: 'It opened in 1990 and looks like four towers with glass bridges.',
      },
      {
        el: 'Ο Ιβ Κλάιν, που γεννήθηκε στη Νίκαια, έφτιαξε το δικό του μπλε.',
        en: 'Yves Klein, who was born in Nice, made his own blue.',
      },
      {
        el: 'Στην ταράτσα του υπάρχει κήπος με θέα.',
        en: 'There is a garden with a view on its roof.',
      },
    ],
    location: {
      lat: 43.7013,
      lng: 7.27845,
      anchor: 'centroid',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q936859', deltaM: 0 },
        { kind: 'osm', ref: 'relation/1949582', deltaM: 17 },
        { kind: 'wikipedia', ref: 'Musée d\'art moderne et d\'art contemporain', deltaM: 12 },
      ],
      verifiedAt: '2026-09-18',
      map: { x: 0.759, y: 0.631 },
    },
    question: {
      q: { el: 'Τι έκανε ο Σεζάρ με τα παλιά αυτοκίνητα;', en: 'What did César do with old cars?' },
      answers: [
        { el: 'Τα συμπίεζε σε κύβους', en: 'He squashed them into cubes' },
        { el: 'Τα έβαφε', en: 'Painted them' },
        { el: 'Τα κρέμαγε από το ταβάνι', en: 'He hung them from the ceiling' },
        {
          el: 'Τα έκοβε σε λεπτές φέτες και τις κολλούσε σε πίνακες σαν μωσαϊκό',
          en: 'He cut them into thin slices and glued them onto boards like a mosaic',
        },
      ],
      explanation: {
        el: 'Οι καλλιτέχνες της Νίκαιας πίστευαν ότι η τέχνη μπορεί να γίνει από οτιδήποτε.',
        en: 'The artists of Nice believed that art could be made out of anything.',
      },
    },
  },

  // ------------------------------------------------- museum histoire naturelle
  {
    id: 'nice-museum-histoire-naturelle',
    cityId: 'nice',
    emoji: '🦋',
    category: 'science',
    difficulty: 2,

    name: { el: 'Μουσείο Φυσικής Ιστορίας', en: 'The Natural History Museum' },
    tagline: {
      el: 'Το πιο παλιό μουσείο της πόλης, με ζώα από βουνό και θάλασσα',
      en: 'Nice’s oldest museum, with animals from the mountains and the sea',
    },
    story: {
      el:
        'Αυτό είναι το πιο παλιό μουσείο της Νίκαιας. Ξεκίνησε το 1846 από τη συλλογή ενός ' +
        'γιατρού και ενός φυσιοδίφη, που μάζευαν ό,τι ζούσε γύρω από την πόλη: πουλιά, ' +
        'έντομα, κοχύλια, μανιτάρια, πέτρες. Η Νίκαια είναι ένα σπάνιο μέρος για τη φύση, ' +
        'γιατί σε λίγα χιλιόμετρα περνάς από τη ζεστή θάλασσα σε βουνά με χιόνι, και έτσι ' +
        'εδώ ζουν ζώα και φυτά από δύο κόσμους. Το μουσείο έχει ταριχευμένα πουλιά που βλέπεις ' +
        'από κοντά, σειρές από πεταλούδες και σκαθάρια, κοχύλια της Μεσογείου και ένα ' +
        'ερμπάριο, δηλαδή μια συλλογή από αποξηραμένα φυτά κολλημένα σε χαρτί, με εκατοντάδες ' +
        'χιλιάδες φύλλα. Πολλά από τα ζώα και τα φυτά σε αυτά τα συρτάρια μαζεύτηκαν πριν από ' +
        'εκατόν πενήντα χρόνια, οπότε οι επιστήμονες τα συγκρίνουν με τα σημερινά για να ' +
        'δουν τι έχει αλλάξει στη φύση γύρω από τη Νίκαια.',
      en:
        'This is the oldest museum in Nice. It began in 1846 from the collection of a doctor ' +
        'and a naturalist, who gathered whatever lived around the city: birds, insects, shells, ' +
        'mushrooms, stones. Nice is a rare place for nature, because within a few kilometres you ' +
        'go from the warm sea to mountains with snow, so animals and plants from two worlds ' +
        'live here. The museum has stuffed birds you can see up close, rows of butterflies and ' +
        'beetles, Mediterranean shells and a herbarium, a collection of dried plants glued to ' +
        'paper, with hundreds of thousands of sheets. Many of the animals and plants in these ' +
        'drawers were collected a hundred and fifty years ago, so scientists compare them with ' +
        'today’s to see what has changed in the nature around Nice.',
    },
    facts: [
      {
        el: 'Ξεκίνησε το 1846 και είναι το πιο παλιό μουσείο της πόλης.',
        en: 'It began in 1846 and is the oldest museum in the city.',
      },
      {
        el: 'Γύρω από τη Νίκαια ζουν ζώα της θάλασσας και των βουνών μαζί.',
        en: 'Around Nice, sea and mountain animals live side by side.',
      },
      {
        el: 'Έχει εκατοντάδες χιλιάδες αποξηραμένα φυτά.',
        en: 'It holds hundreds of thousands of dried plants.',
      },
    ],
    location: {
      lat: 43.70167,
      lng: 7.27944,
      anchor: 'centroid',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q3330894', deltaM: 0 },
        { kind: 'osm', ref: 'node/1398474011', deltaM: 16 },
        { kind: 'wikipedia', ref: 'Muséum d\'histoire naturelle de Nice', deltaM: 1 },
      ],
      verifiedAt: '2026-09-18',
      map: { x: 0.780, y: 0.620 },
    },
    question: {
      q: { el: 'Τι είναι ένα ερμπάριο;', en: 'What is a herbarium?' },
      answers: [
        { el: 'Συλλογή αποξηραμένων φυτών σε χαρτί', en: 'A collection of dried plants on paper' },
        { el: 'Ένας κήπος', en: 'A garden' },
        { el: 'Ένα βιβλίο για βότανα', en: 'A book about herbs' },
        {
          el: 'Ένα θερμοκήπιο όπου τα φυτά κρατιούνται ζωντανά για πάντα',
          en: 'A greenhouse where plants are kept alive for ever and ever',
        },
      ],
      explanation: {
        el: 'Πιεσμένα, στεγνά φυτά κολλημένα σε φύλλα χαρτιού, με το όνομα και το μέρος που βρέθηκαν.',
        en: 'Pressed, dried plants glued to sheets of paper, with their name and where they were found.',
      },
    },
  },

  // -------------------------------------------------------------- musee chagall
  {
    id: 'nice-musee-chagall',
    cityId: 'nice',
    emoji: '🎨',
    category: 'museum',
    difficulty: 2,

    name: { el: 'Μουσείο Μαρκ Σαγκάλ', en: 'The Marc Chagall Museum' },
    tagline: {
      el: 'Ένα μουσείο που ο ίδιος ο ζωγράφος βοήθησε να σχεδιαστεί',
      en: 'A museum the painter himself helped to design',
    },
    story: {
      el:
        'Ο Μαρκ Σαγκάλ γεννήθηκε το 1887 σε μια μικρή πόλη της σημερινής Λευκορωσίας και ' +
        'έζησε τα τελευταία χρόνια του κοντά στη Νίκαια. Ζωγράφιζε σαν σε όνειρο: άνθρωποι ' +
        'πετούν στον ουρανό, κατσίκες παίζουν βιολί, νύφες επιπλέουν πάνω από τις πόλεις, και ' +
        'όλα σε βαθιά μπλε, κόκκινα και πράσινα. Στα εξήντα του άρχισε μια σειρά από ' +
        'δεκαεπτά μεγάλους πίνακες με ιστορίες από την Αγία Γραφή, και τους χάρισε στη Γαλλία ' +
        'με τον όρο να έχουν ένα δικό τους σπίτι. Έτσι χτίστηκε αυτό το μουσείο, το 1973, ' +
        'όσο ο Σαγκάλ ζούσε ακόμα. Ο ίδιος διάλεξε τον λόφο, τον κήπο με τις ελιές και τα ' +
        'κυπαρίσσια, και το πώς θα κρέμονται οι πίνακες. Έφτιαξε ακόμα ένα ψηφιδωτό που ' +
        'καθρεφτίζεται σε μια λίμνη, και μπλε βιτρό για την αίθουσα συναυλιών. Ήταν ογδόντα ' +
        'έξι χρονών όταν άνοιξε το μουσείο, και ήρθε στα εγκαίνια.',
      en:
        'Marc Chagall was born in 1887 in a small town in what is now Belarus, and spent his ' +
        'last years near Nice. He painted as if in a dream: people fly through the sky, goats ' +
        'play the violin, brides float above towns, and all in deep blues, reds and greens. In ' +
        'his sixties he began a series of seventeen large paintings of stories from the Bible, ' +
        'and gave them to France on condition that they had a home of their own. So this ' +
        'museum was built, in 1973, while Chagall was still alive. He himself chose the hill, ' +
        'the garden with its olive trees and cypresses, and how the paintings would hang. He ' +
        'also made a mosaic that is reflected in a pool, and blue stained-glass windows for the ' +
        'concert hall. He was eighty-six when the museum opened, and he came to the opening.',
    },
    facts: [
      {
        el: 'Το μουσείο άνοιξε το 1973, όσο ο Σαγκάλ ζούσε ακόμα.',
        en: 'The museum opened in 1973, while Chagall was still alive.',
      },
      {
        el: 'Έχει δεκαεπτά μεγάλους πίνακες με ιστορίες από την Αγία Γραφή.',
        en: 'It has seventeen large paintings of Bible stories.',
      },
      {
        el: 'Ο ζωγράφος διάλεξε ο ίδιος τον λόφο και τον κήπο.',
        en: 'The painter chose the hill and the garden himself.',
      },
    ],
    location: {
      lat: 43.70917,
      lng: 7.26954,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q3329265', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Musée Marc Chagall', deltaM: 0 },
      ],
      verifiedAt: '2026-09-18',
      map: { x: 0.574, y: 0.412 },
    },
    question: {
      q: { el: 'Τι ζήτησε ο Σαγκάλ όταν χάρισε τους πίνακες;', en: 'What did Chagall ask for when he gave the paintings?' },
      answers: [
        { el: 'Να έχουν ένα δικό τους σπίτι', en: 'That they have a home of their own' },
        { el: 'Χρήματα', en: 'Money' },
        { el: 'Να μην τους δει κανείς', en: 'That nobody should see them' },
        {
          el: 'Να ταξιδεύουν κάθε χρόνο σε μια διαφορετική πόλη της Γαλλίας',
          en: 'That they travel every year to a different city in France',
        },
      ],
      explanation: {
        el: 'Γι’ αυτό χτίστηκε το μουσείο, με τον ίδιο να διαλέγει τον λόφο και τον κήπο.',
        en: 'That is why the museum was built, with him choosing the hill and the garden.',
      },
    },

    museum: {
      doorNote: {
        el: 'Ψάξε σε κάθε πίνακα κάτι που πετάει. Σχεδόν πάντα υπάρχει.',
        en: 'Look for something flying in every painting. There almost always is.',
      },
      rooms: [
        {
          id: 'nice-chagall-message',
          emoji: '🕊️',
          name: { el: 'Η μεγάλη αίθουσα', en: 'The great hall' },
          intro: {
            el:
              'Δώδεκα τεράστιοι πίνακες κρέμονται σε μια φωτεινή αίθουσα, στη σειρά που ' +
              'διάλεξε ο ίδιος ο Σαγκάλ. Λένε ιστορίες από τα πρώτα βιβλία της Αγίας Γραφής, ' +
              'αλλά δεν χρειάζεται να τις ξέρεις: κοίτα τα χρώματα, τα ζώα και τους ' +
              'ανθρώπους που πετούν, και βρες τι συμβαίνει.',
            en:
              'Twelve enormous paintings hang in a bright hall, in the order Chagall himself ' +
              'chose. They tell stories from the first books of the Bible, but you do not need ' +
              'to know them: look at the colours, the animals and the flying people, and work ' +
              'out what is going on.',
          },
          exhibits: [
            {
              id: 'nice-chagall-creation',
              name: { el: 'Η δημιουργία του ανθρώπου', en: 'The Creation of Man' },
              blurb: {
                el:
                  'Ένας τεράστιος άγγελος με πολύχρωμα φτερά κατεβαίνει από τον ουρανό κρατώντας ' +
                  'στην αγκαλιά του έναν κοιμισμένο άνθρωπο, τον πρώτο. Γύρω τους, μέσα σε ένα ' +
                  'βαθύ μπλε, στροβιλίζονται ένας ήλιος, ένα ψάρι, ένα πουλί, μια σκάλα, μικρές ' +
                  'φιγούρες από άλλες ιστορίες. Ο Σαγκάλ έβαζε πολλές ιστορίες μαζί στον ίδιο ' +
                  'πίνακα, σαν όνειρο όπου όλα συμβαίνουν ταυτόχρονα. Πόσα πράγματα μπορείς να ' +
                  'βρεις μέσα στο μπλε; Κάθε φορά που κοιτάς, βρίσκεις κι άλλο.',
                en:
                  'A huge angel with multicoloured wings comes down from the sky carrying a ' +
                  'sleeping man, the very first one, in its arms. Around them, inside a deep blue, ' +
                  'swirl a sun, a fish, a bird, a ladder, small figures from other stories. ' +
                  'Chagall put many stories together in the same painting, like a dream where ' +
                  'everything happens at once. How many things can you find inside the blue? ' +
                  'Every time you look, you find another.',
              },
              question: {
                q: { el: 'Τι κουβαλάει ο άγγελος στην αγκαλιά του;', en: 'What is the angel carrying in its arms?' },
                answers: [
                  { el: 'Έναν κοιμισμένο άνθρωπο', en: 'A sleeping man' },
                  { el: 'Ένα ψάρι', en: 'A fish' },
                  { el: 'Μια σκάλα', en: 'A long ladder' },
                  {
                    el: 'Ένα καλάθι με όλα τα ζώα του κόσμου, ένα από κάθε είδος',
                    en: 'A basket with all the animals in the world, one of each kind',
                  },
                ],
                explanation: {
                  el: 'Είναι ο πρώτος άνθρωπος, και γύρω του στροβιλίζονται πολλές ιστορίες μαζί.',
                  en: 'It is the first man, and many stories swirl around him at once.',
                },
              },
            },
            {
              id: 'nice-chagall-ark',
              name: { el: 'Η κιβωτός του Νώε', en: 'Noah’s Ark' },
              blurb: {
                el:
                  'Μέσα σε ένα μεγάλο ξύλινο πλοίο στριμώχνονται ζώα και άνθρωποι: άλογα, ' +
                  'πουλιά, ένα λιοντάρι, μια αγελάδα, οικογένειες. Ο Νώε, με γένια, ανοίγει ένα ' +
                  'παραθυράκι και αφήνει να πετάξει ένα άσπρο περιστέρι, για να δει αν το νερό ' +
                  'της μεγάλης πλημμύρας έχει τραβηχτεί. Ο Σαγκάλ ζωγράφισε τα ζώα με τρυφερότητα, ' +
                  'σαν να ήταν όλα φίλοι, γιατί μεγάλωσε σε μια μικρή πόλη γεμάτη κατσίκες, ' +
                  'αγελάδες και κότες που τις θυμόταν σε όλη του τη ζωή.',
                en:
                  'Inside a big wooden ship, animals and people crowd together: horses, birds, a ' +
                  'lion, a cow, families. Noah, with his beard, opens a little window and lets a ' +
                  'white dove fly out, to see whether the water of the great flood has gone ' +
                  'down. Chagall painted the animals tenderly, as if they were all friends, ' +
                  'because he grew up in a small town full of goats, cows and hens that he ' +
                  'remembered all his life.',
              },
              question: {
                q: { el: 'Γιατί ο Νώε αφήνει το περιστέρι να πετάξει;', en: 'Why does Noah let the dove fly out?' },
                answers: [
                  { el: 'Για να δει αν τράβηξε το νερό', en: 'To see if the water has gone down' },
                  { el: 'Για παιχνίδι', en: 'For fun' },
                  { el: 'Γιατί δεν χωρούσε', en: 'Because it did not fit' },
                  {
                    el: 'Για να πάει να φέρει φαγητό για όλα τα ζώα του πλοίου',
                    en: 'So it can go and fetch food for all the animals on the ship',
                  },
                ],
                explanation: {
                  el: 'Αν το περιστέρι γυρίσει με ένα κλαδί, σημαίνει ότι κάπου φάνηκε στεριά.',
                  en: 'If the dove comes back with a twig, it means land has appeared somewhere.',
                },
              },
            },
            {
              id: 'nice-chagall-song',
              name: { el: 'Οι κόκκινοι πίνακες', en: 'The red paintings' },
              blurb: {
                el:
                  'Σε μια μικρότερη, πιο ήσυχη αίθουσα, πέντε πίνακες είναι σχεδόν ολόκληροι ' +
                  'κόκκινοι και ροζ. Είναι για ένα ποίημα αγάπης της Αγίας Γραφής, το Άσμα ' +
                  'Ασμάτων. Μέσα στο κόκκινο βλέπεις ζευγάρια που πετούν, μια πόλη με τρούλους, ' +
                  'ένα άλογο, έναν άγγελο που παίζει μουσική. Ο Σαγκάλ τους αφιέρωσε στη γυναίκα ' +
                  'του. Το κόκκινο εδώ δεν είναι χρώμα φωτιάς ή κινδύνου: είναι χρώμα χαράς. ' +
                  'Σύγκρινέ το με το βαθύ μπλε της μεγάλης αίθουσας και δες πώς αλλάζει η διάθεσή ' +
                  'σου από το ένα δωμάτιο στο άλλο.',
                en:
                  'In a smaller, quieter room, five paintings are almost entirely red and pink. ' +
                  'They are about a love poem from the Bible, the Song of Songs. Inside the red ' +
                  'you can see flying couples, a town with domes, a horse, an angel making music. ' +
                  'Chagall dedicated them to his wife. The red here is not the colour of fire or ' +
                  'danger: it is the colour of joy. Compare it with the deep blue of the great ' +
                  'hall and notice how your mood changes from one room to the other.',
              },
              question: {
                q: { el: 'Τι σημαίνει το κόκκινο σε αυτούς τους πίνακες;', en: 'What does the red mean in these paintings?' },
                answers: [
                  { el: 'Χαρά και αγάπη', en: 'Joy and love' },
                  { el: 'Φωτιά', en: 'Fire' },
                  { el: 'Κίνδυνο', en: 'Danger' },
                  {
                    el: 'Ότι ο ζωγράφος είχε ξεμείνει από όλα τα άλλα χρώματα εκείνη τη χρονιά',
                    en: 'That the painter had run out of every other colour that year',
                  },
                ],
                explanation: {
                  el: 'Είναι για ένα ποίημα αγάπης, και ο Σαγκάλ τους αφιέρωσε στη γυναίκα του.',
                  en: 'They are about a love poem, and Chagall dedicated them to his wife.',
                },
              },
            },
          ],
        },
        {
          id: 'nice-chagall-glass',
          emoji: '💠',
          name: { el: 'Γυαλί, ψηφίδες και κήπος', en: 'Glass, mosaic and garden' },
          intro: {
            el:
              'Ο Σαγκάλ δεν έφτιαχνε μόνο πίνακες. Για αυτό το μουσείο σχεδίασε παράθυρα από ' +
              'χρωματιστό γυαλί, ένα ψηφιδωτό και τον ίδιο τον κήπο. Βγες έξω και ξαναμπές, ' +
              'κοίτα το φως που περνάει από τα βιτρό, και ψάξε τον καθρέφτη του ψηφιδωτού.',
            en:
              'Chagall did not only make paintings. For this museum he designed windows of ' +
              'coloured glass, a mosaic and the garden itself. Go out and come back in, look at ' +
              'the light coming through the stained glass, and look for the mosaic’s mirror.',
          },
          exhibits: [
            {
              id: 'nice-chagall-windows',
              name: { el: 'Τα μπλε βιτρό', en: 'The blue windows' },
              blurb: {
                el:
                  'Η αίθουσα συναυλιών του μουσείου έχει τρία ψηλά παράθυρα από βιτρό, δηλαδή ' +
                  'κομμάτια χρωματιστού γυαλιού ενωμένα με μολύβι. Είναι σχεδόν ολόκληρα μπλε, ' +
                  'και δείχνουν τη δημιουργία του κόσμου: τον ήλιο, το φεγγάρι, ψάρια, πουλιά, ' +
                  'λουλούδια. Όταν ο ήλιος πέφτει πάνω τους, όλη η αίθουσα γίνεται μπλε, σαν να ' +
                  'είσαι κάτω από τη θάλασσα. Ο Σαγκάλ έφτιαξε βιτρό και για καθεδρικούς σε ' +
                  'πολλές χώρες, αλλά αυτά εδώ τα σχεδίασε ειδικά για να ακούγεται μουσική από ' +
                  'κάτω τους.',
                en:
                  'The museum’s concert hall has three tall stained-glass windows, pieces of ' +
                  'coloured glass joined with lead. They are almost entirely blue, and show the ' +
                  'creation of the world: the sun, the moon, fish, birds, flowers. When the sun ' +
                  'falls on them the whole room turns blue, as if you were under the sea. Chagall ' +
                  'made stained glass for cathedrals in many countries, but these he designed ' +
                  'especially so that music could be heard beneath them.',
              },
              question: {
                q: { el: 'Τι γίνεται στην αίθουσα όταν ο ήλιος πέφτει στα βιτρό;', en: 'What happens in the hall when the sun hits the windows?' },
                answers: [
                  { el: 'Όλη η αίθουσα γίνεται μπλε', en: 'The whole room turns blue' },
                  { el: 'Ζεσταίνεται', en: 'It warms up' },
                  { el: 'Ακούγεται μουσική', en: 'Music starts to play' },
                  {
                    el: 'Τα γυαλιά αρχίζουν να γυρίζουν σιγά σιγά όπως οι δείκτες ενός ρολογιού',
                    en: 'The glass slowly starts to turn like the hands of a clock',
                  },
                ],
                explanation: {
                  el: 'Το φως περνάει μέσα από το μπλε γυαλί, σαν να είσαι κάτω από τη θάλασσα.',
                  en: 'The light passes through the blue glass, as if you were under the sea.',
                },
              },
            },
            {
              id: 'nice-chagall-mosaic',
              name: { el: 'Το ψηφιδωτό στη λίμνη', en: 'The mosaic over the pool' },
              blurb: {
                el:
                  'Έξω, σε έναν τοίχο πάνω από μια μικρή λίμνη, υπάρχει ένα μεγάλο ψηφιδωτό: ' +
                  'χιλιάδες μικρά κομματάκια πέτρας και γυαλιού που σχηματίζουν έναν προφήτη σε ' +
                  'ένα άρμα με άλογα να ανεβαίνει στον ουρανό, και γύρω του τα δώδεκα ζώδια. Το ' +
                  'κόλπο είναι το νερό: ο Σαγκάλ το έβαλε εκεί επίτηδες, ώστε το ψηφιδωτό να ' +
                  'καθρεφτίζεται και να τρεμοπαίζει. Έτσι, από την αίθουσα, βλέπεις το έργο δύο ' +
                  'φορές, μία στον τοίχο και μία ανάποδα μέσα στη λίμνη, να κουνιέται με τον ' +
                  'αέρα.',
                en:
                  'Outside, on a wall above a small pool, is a large mosaic: thousands of tiny ' +
                  'pieces of stone and glass forming a prophet in a chariot with horses rising ' +
                  'into the sky, with the twelve signs of the zodiac around him. The trick is the ' +
                  'water: Chagall put it there on purpose, so that the mosaic would be reflected ' +
                  'and shimmer. So from inside the hall you see the work twice, once on the wall ' +
                  'and once upside down in the pool, rippling with the wind.',
              },
              question: {
                q: { el: 'Γιατί ο Σαγκάλ έβαλε μια λίμνη κάτω από το ψηφιδωτό;', en: 'Why did Chagall put a pool under the mosaic?' },
                answers: [
                  { el: 'Για να καθρεφτίζεται και να τρεμοπαίζει', en: 'So it is reflected and shimmers' },
                  { el: 'Για πάπιες', en: 'For ducks' },
                  { el: 'Για να δροσίζει', en: 'To keep it cool' },
                  {
                    el: 'Για να μπορούν οι επισκέπτες να πετάνε νομίσματα και να κάνουν ευχές',
                    en: 'So that visitors could throw in coins and make wishes',
                  },
                ],
                explanation: {
                  el: 'Βλέπεις το έργο δύο φορές: στον τοίχο, και ανάποδα μέσα στο νερό.',
                  en: 'You see the work twice: on the wall, and upside down in the water.',
                },
              },
            },
            {
              id: 'nice-chagall-garden',
              name: { el: 'Ο κήπος με τις ελιές', en: 'The olive garden' },
              blurb: {
                el:
                  'Ο κήπος γύρω από το μουσείο δεν είναι τυχαίος. Ο Σαγκάλ ήθελε το κτίριο χαμηλό ' +
                  'και απλό, κρυμμένο ανάμεσα σε ελιές, κυπαρίσσια, πεύκα και λεβάντα, τα φυτά ' +
                  'της Μεσογείου. Ήθελε οι επισκέπτες να περνούν πρώτα από τον κήπο, να ηρεμούν, ' +
                  'και μετά να μπαίνουν στους πίνακες. Οι ελιές είναι πολύ παλιές, με κορμούς ' +
                  'στριφτούς σαν σχοινιά. Την άνοιξη ο κήπος γεμίζει ίριδες, μοβ και μπλε, τα ' +
                  'ίδια χρώματα με τους πίνακες μέσα.',
                en:
                  'The garden around the museum is no accident. Chagall wanted the building low ' +
                  'and simple, hidden among olive trees, cypresses, pines and lavender, the plants ' +
                  'of the Mediterranean. He wanted visitors to walk through the garden first, to ' +
                  'calm down, and then go in to the paintings. The olive trees are very old, with ' +
                  'trunks twisted like ropes. In spring the garden fills with irises, purple and ' +
                  'blue, the same colours as the paintings inside.',
              },
              question: {
                q: { el: 'Γιατί ήθελε ο Σαγκάλ να περνάς πρώτα από τον κήπο;', en: 'Why did Chagall want you to walk through the garden first?' },
                answers: [
                  { el: 'Για να ηρεμήσεις πριν μπεις', en: 'To calm down before going in' },
                  { el: 'Για άσκηση', en: 'For exercise' },
                  { el: 'Για να πληρώσεις εισιτήριο', en: 'To pay for a ticket' },
                  {
                    el: 'Για να μαζέψεις ελιές και να τις δώσεις στον φύλακα της εισόδου',
                    en: 'To pick olives and hand them to the guard at the entrance',
                  },
                ],
                explanation: {
                  el: 'Ελιές, κυπαρίσσια και λεβάντα πρώτα, και μετά οι πίνακες.',
                  en: 'Olive trees, cypresses and lavender first, and then the paintings.',
                },
              },
            },
          ],
        },
      ],
      riddles: [
        {
          id: 'nice-chagall-riddle-1',
          difficulty: 1,
          prompt: {
            el:
              'Είμαι ένα πλοίο γεμάτο ζώα που δεν μαλώνουν. Από το παραθυράκι μου μόλις ' +
              'πέταξε ένα άσπρο πουλί, να δει αν φάνηκε στεριά.',
            en:
              'I am a ship full of animals that do not quarrel. A white bird has just flown out ' +
              'of my little window, to see if land has appeared.',
          },
          hint: { el: 'Έβρεξε πολύ πριν από μένα.', en: 'It rained a great deal before me.' },
          answerExhibitId: 'nice-chagall-ark',
        },
        {
          id: 'nice-chagall-riddle-2',
          difficulty: 2,
          prompt: {
            el:
              'Με βλέπεις δύο φορές, μία όρθιο και μία ανάποδο. Είμαι φτιαγμένο από χιλιάδες ' +
              'μικρά κομματάκια, και ο δίδυμός μου κουνιέται με τον αέρα.',
            en:
              'You see me twice, once the right way up and once upside down. I am made of ' +
              'thousands of tiny pieces, and my twin ripples in the wind.',
          },
          hint: { el: 'Είμαι έξω, πάνω από νερό.', en: 'I am outside, above water.' },
          answerExhibitId: 'nice-chagall-mosaic',
        },
        {
          id: 'nice-chagall-riddle-3',
          difficulty: 3,
          prompt: {
            el:
              'Είμαστε τρία, ψηλά και μπλε, και όταν μας αγγίζει ο ήλιος βάφουμε ολόκληρο το ' +
              'δωμάτιο. Κάτω από εμάς παίζουν μουσική.',
            en:
              'We are three, tall and blue, and when the sun touches us we colour the whole ' +
              'room. Beneath us people play music.',
          },
          hint: { el: 'Είμαστε από γυαλί.', en: 'We are made of glass.' },
          answerExhibitId: 'nice-chagall-windows',
        },
      ],
    },
  },

  // -------------------------------------------------------------- musee matisse
  {
    id: 'nice-musee-matisse',
    cityId: 'nice',
    emoji: '✂️',
    category: 'museum',
    difficulty: 2,

    name: { el: 'Μουσείο Ματίς', en: 'The Matisse Museum' },
    tagline: {
      el: 'Μια κόκκινη βίλα με ψεύτικα παράθυρα και ζωγραφιές από ψαλίδι',
      en: 'A red villa with fake windows and pictures made with scissors',
    },
    story: {
      el:
        'Στον λόφο του Σιμιέ, ανάμεσα σε ελαιώνες, στέκεται μια βίλα βαμμένη βαθύ κόκκινο. ' +
        'Χτίστηκε τον 17ο αιώνα από μια οικογένεια από τη Γένοβα, και αν κοιτάξεις προσεκτικά ' +
        'τα παράθυρά της, θα δεις ότι μερικά είναι ζωγραφισμένα πάνω στον τοίχο, με ' +
        'ζωγραφιστά παντζούρια και ζωγραφιστές σκιές. Σήμερα η βίλα είναι μουσείο για τον ' +
        'Ανρί Ματίς, έναν από τους πιο σημαντικούς ζωγράφους του 20ού αιώνα, που ήρθε στη ' +
        'Νίκαια το 1917 για το φως της και έμεινε εδώ ως το τέλος της ζωής του, το 1954. Ο ' +
        'Ματίς αγαπούσε τα καθαρά, δυνατά χρώματα. Στα τελευταία του χρόνια, όταν δεν μπορούσε ' +
        'πια να στέκεται μπροστά σε καβαλέτο, βρήκε έναν καινούργιο τρόπο να ζωγραφίζει: ' +
        'έβαφε χαρτιά, τα έκοβε με ψαλίδι σε σχήματα, φύλλα, ψάρια, χορευτές, και τα κάρφωνε ' +
        'στον τοίχο. Το μουσείο έχει πίνακες, γλυπτά, σχέδια και μερικά από αυτά τα κομμένα ' +
        'χαρτιά, καθώς και προσωπικά του αντικείμενα.',
      en:
        'On the hill of Cimiez, among olive groves, stands a villa painted deep red. It was ' +
        'built in the 17th century by a family from Genoa, and if you look carefully at its ' +
        'windows, you will see that some are painted onto the wall, with painted shutters and ' +
        'painted shadows. Today the villa is a museum for Henri Matisse, one of the most ' +
        'important painters of the 20th century, who came to Nice in 1917 for its light and ' +
        'stayed here until the end of his life, in 1954. Matisse loved pure, strong colours. In ' +
        'his last years, when he could no longer stand at an easel, he found a new way to make ' +
        'pictures: he painted sheets of paper, cut them with scissors into shapes, leaves, fish, ' +
        'dancers, and pinned them to the wall. The museum has paintings, sculptures, drawings ' +
        'and some of these cut-outs, as well as his personal belongings.',
    },
    facts: [
      {
        el: 'Ο Ματίς ήρθε στη Νίκαια το 1917 και έμεινε ως το 1954.',
        en: 'Matisse came to Nice in 1917 and stayed until 1954.',
      },
      {
        el: 'Μερικά παράθυρα της βίλας είναι ζωγραφισμένα στον τοίχο.',
        en: 'Some of the villa’s windows are painted onto the wall.',
      },
      {
        el: 'Στα τελευταία του χρόνια ζωγράφιζε με ψαλίδι και χρωματιστό χαρτί.',
        en: 'In his last years he made pictures with scissors and coloured paper.',
      },
    ],
    location: {
      lat: 43.71941,
      lng: 7.27622,
      anchor: 'centroid',
      confidence: 'C',
      sources: [{ kind: 'wikidata', ref: 'Q30291412', deltaM: 0 }],
      verifiedAt: '2026-09-18',
      note: 'The Villa des Arènes, the building, 4 m from the institution item (Q1563354). Grade C: Wikidata alone.',
      map: { x: 0.713, y: 0.127 },
    },
    question: {
      q: { el: 'Πώς ζωγράφιζε ο Ματίς στα τελευταία του χρόνια;', en: 'How did Matisse make pictures in his last years?' },
      answers: [
        { el: 'Έκοβε χρωματιστό χαρτί με ψαλίδι', en: 'He cut coloured paper with scissors' },
        { el: 'Με μολύβι', en: 'With a pencil' },
        { el: 'Με τα δάχτυλά του', en: 'With his fingers' },
        {
          el: 'Ζωγράφιζε πάνω στα παράθυρα της βίλας με μπογιές για γυαλί',
          en: 'He painted on the villa’s windows with special paints for glass',
        },
      ],
      explanation: {
        el: 'Δεν μπορούσε πια να στέκεται στο καβαλέτο. Τα σχήματα τα κάρφωνε στον τοίχο.',
        en: 'He could no longer stand at an easel. He pinned the shapes to the wall.',
      },
    },

    museum: {
      doorNote: {
        el: 'Πριν μπεις, μέτρα τα παράθυρα της βίλας και βρες ποια είναι ψεύτικα.',
        en: 'Before you go in, count the villa’s windows and work out which are fake.',
      },
      rooms: [
        {
          id: 'nice-matisse-cutouts',
          emoji: '🍃',
          name: { el: 'Ψαλίδι και χρώμα', en: 'Scissors and colour' },
          intro: {
            el:
              'Ο Ματίς έλεγε ότι με το ψαλίδι «ζωγράφιζε κατευθείαν μέσα στο χρώμα». Σε αυτή ' +
              'την αίθουσα θα δεις σχήματα κομμένα από βαμμένο χαρτί, μερικά μικρά και μερικά ' +
              'μεγάλα σαν τοίχος. Πρόσεξε: τα σχήματα είναι απλά, αλλά ποτέ βαρετά, γιατί το ' +
              'ψαλίδι δεν κάνει ευθείες γραμμές.',
            en:
              'Matisse said that with scissors he was "drawing straight into colour". In this ' +
              'room you will see shapes cut from painted paper, some small and some as big as a ' +
              'wall. Notice: the shapes are simple but never boring, because scissors do not ' +
              'make straight lines.',
          },
          exhibits: [
            {
              id: 'nice-matisse-flowers-fruit',
              name: { el: 'Λουλούδια και φρούτα', en: 'Flowers and Fruit' },
              blurb: {
                el:
                  'Ένα από τα μεγαλύτερα έργα από κομμένο χαρτί που έφτιαξε ποτέ ο Ματίς, τόσο ' +
                  'φαρδύ όσο ένα δωμάτιο. Πάνω σε άσπρο φόντο απλώνονται πράσινα φύλλα, ' +
                  'πορτοκαλί φρούτα και λουλούδια σε σχήμα αστεριού, σε τέσσερις μεγάλες σειρές. ' +
                  'Ο Ματίς το έφτιαξε το 1953, έναν χρόνο πριν πεθάνει, από το κρεβάτι ή την ' +
                  'πολυθρόνα του, δίνοντας οδηγίες στους βοηθούς του με ένα μακρύ ραβδί για το ' +
                  'πού να καρφώσουν κάθε κομμάτι. Φτιάχτηκε ως σχέδιο για μια κεραμική τοιχογραφία ' +
                  'σε μια βίλα.',
                en:
                  'One of the largest cut-paper works Matisse ever made, as wide as a room. On a ' +
                  'white background spread green leaves, orange fruit and star-shaped flowers, in ' +
                  'four big rows. Matisse made it in 1953, a year before he died, from his bed or ' +
                  'his armchair, directing his assistants with a long stick as to where to pin ' +
                  'each piece. It was made as a design for a ceramic wall in a villa.',
              },
              question: {
                q: { el: 'Πώς έλεγε ο Ματίς στους βοηθούς του πού να καρφώσουν τα κομμάτια;', en: 'How did Matisse tell his assistants where to pin the pieces?' },
                answers: [
                  { el: 'Δείχνοντας με ένα μακρύ ραβδί', en: 'Pointing with a long stick' },
                  { el: 'Φωνάζοντας', en: 'By shouting' },
                  { el: 'Με ένα σχέδιο σε χαρτί', en: 'With a plan on paper' },
                  {
                    el: 'Σκαρφαλώνοντας ο ίδιος σε μια σκάλα και καρφώνοντάς τα με τα χέρια του',
                    en: 'By climbing a ladder himself and pinning them up with his own hands',
                  },
                ],
                explanation: {
                  el: 'Δούλευε από το κρεβάτι ή την πολυθρόνα του, έναν χρόνο πριν πεθάνει.',
                  en: 'He worked from his bed or his armchair, a year before he died.',
                },
              },
            },
            {
              id: 'nice-matisse-blue-nude',
              name: { el: 'Το μπλε γυναικείο σχήμα', en: 'The blue figure' },
              blurb: {
                el:
                  'Μια καθιστή γυναικεία μορφή, φτιαγμένη μόνο από κομμάτια μπλε χαρτί πάνω σε ' +
                  'άσπρο. Δεν έχει πρόσωπο ούτε δάχτυλα, κι όμως καταλαβαίνεις αμέσως πώς κάθεται, ' +
                  'με το ένα πόδι διπλωμένο και το χέρι πίσω από το κεφάλι. Ο Ματίς έφτιαξε ' +
                  'τέσσερις τέτοιες μπλε μορφές το 1952. Αυτή εδώ ήταν η πρώτη που άρχισε, αλλά η ' +
                  'τελευταία που τελείωσε: την ξανάκοβε και την ξανακόλλαγε για εβδομάδες, μέχρι ' +
                  'να καθίσει σωστά. Αν κοιτάξεις από κοντά, βλέπεις τις μικρές τρύπες από τις ' +
                  'καρφίτσες.',
                en:
                  'A seated female figure, made only of pieces of blue paper on white. It has no ' +
                  'face and no fingers, and yet you understand at once how she is sitting, with ' +
                  'one leg folded and an arm behind her head. Matisse made four blue figures like ' +
                  'this in 1952. This one was the first he started but the last he finished: he ' +
                  'cut and re-pinned her for weeks, until she sat just right. If you look closely, ' +
                  'you can see the tiny holes from the pins.',
              },
              question: {
                q: { el: 'Από τι είναι φτιαγμένη αυτή η μορφή;', en: 'What is this figure made of?' },
                answers: [
                  { el: 'Από κομμάτια μπλε χαρτί', en: 'From pieces of blue paper' },
                  { el: 'Μπογιά', en: 'Paint' },
                  { el: 'Από μπλε ύφασμα', en: 'From blue cloth' },
                  {
                    el: 'Από μικρά κομματάκια μπλε γυαλιού κολλημένα το ένα δίπλα στο άλλο',
                    en: 'From tiny pieces of blue glass glued side by side',
                  },
                ],
                explanation: {
                  el: 'Κομμένα με ψαλίδι και καρφιτσωμένα. Οι τρύπες από τις καρφίτσες φαίνονται ακόμα.',
                  en: 'Cut with scissors and pinned. The pinholes still show.',
                },
              },
            },
            {
              id: 'nice-matisse-jazz',
              name: { el: 'Το βιβλίο «Τζαζ»', en: 'The book "Jazz"' },
              blurb: {
                el:
                  'Ένα βιβλίο με είκοσι πολύχρωμες εικόνες, τυπωμένες από κομμένα χαρτιά του Ματίς, ' +
                  'και με το χειρόγραφό του ανάμεσα. Οι εικόνες δείχνουν το τσίρκο: έναν ' +
                  'ξιφομάχο, έναν κλόουν, έναν ιππότη, ένα άλογο, και τον Ίκαρο, μια μαύρη μορφή ' +
                  'με μια κόκκινη καρδιά που πέφτει μέσα σε μπλε ουρανό γεμάτο κίτρινα αστέρια. ' +
                  'Ο Ματίς έγραψε ότι τα μεγάλα γράμματα ανάμεσα στις εικόνες είναι μόνο για να ' +
                  'ξεκουράζεται το μάτι από τα χρώματα. Το βιβλίο τυπώθηκε το 1947 και ήταν το ' +
                  'πρώτο που έδειξε στον κόσμο τη νέα του τέχνη με το ψαλίδι.',
                en:
                  'A book with twenty colourful pictures, printed from Matisse’s cut-outs, with ' +
                  'his handwriting between them. The pictures show the circus: a sword swallower, ' +
                  'a clown, a knight, a horse, and Icarus, a black figure with a red heart falling ' +
                  'through a blue sky full of yellow stars. Matisse wrote that the big letters ' +
                  'between the pictures were only there to rest the eye from the colours. The ' +
                  'book was printed in 1947 and was the first to show the world his new art with ' +
                  'scissors.',
              },
              question: {
                q: { el: 'Γιατί υπάρχουν μεγάλα γράμματα ανάμεσα στις εικόνες;', en: 'Why are there big letters between the pictures?' },
                answers: [
                  { el: 'Για να ξεκουράζεται το μάτι', en: 'To rest the eye' },
                  { el: 'Για διαφήμιση', en: 'As adverts' },
                  { el: 'Για να μάθεις γράμματα', en: 'To teach children the alphabet' },
                  {
                    el: 'Γιατί ο εκδότης ήθελε να γεμίσει τις κενές σελίδες με κάτι',
                    en: 'Because the publisher wanted to fill up the empty pages with something',
                  },
                ],
                explanation: {
                  el: 'Έτσι το έγραψε ο ίδιος ο Ματίς: μια παύση ανάμεσα στα δυνατά χρώματα.',
                  en: 'Matisse wrote so himself: a pause between the strong colours.',
                },
              },
            },
          ],
        },
        {
          id: 'nice-matisse-house',
          emoji: '🪑',
          name: { el: 'Το σπίτι και ο ζωγράφος', en: 'The house and the painter' },
          intro: {
            el:
              'Ο Ματίς δεν έζησε σε αυτή τη βίλα, αλλά σε ένα σπίτι λίγα βήματα πιο κάτω, στον ' +
              'ίδιο λόφο. Το μουσείο φυλάει πράγματα από το εργαστήριό του: την πολυθρόνα που ' +
              'ζωγράφισε, τα βάζα και τα υφάσματα που έβαζε στους πίνακές του, τα πινέλα του. ' +
              'Έξω, δίπλα στη βίλα, υπάρχει ένα ρωμαϊκό αμφιθέατρο.',
            en:
              'Matisse did not live in this villa, but in a house a few steps down on the same ' +
              'hill. The museum keeps things from his studio: the armchair he painted, the vases ' +
              'and fabrics he put into his pictures, his brushes. Outside, beside the villa, ' +
              'there is a Roman amphitheatre.',
          },
          exhibits: [
            {
              id: 'nice-matisse-armchair',
              name: { el: 'Η πολυθρόνα με τα κύματα', en: 'The armchair with the waves' },
              blurb: {
                el:
                  'Μια παλιά πολυθρόνα με στριφτά, κυματιστά ξύλινα μπράτσα, σαν να την έφτιαξε ' +
                  'ένα κοχύλι. Ο Ματίς την είδε σε ένα μαγαζί με παλιά αντικείμενα το 1942 και ' +
                  'έγραψε σε έναν φίλο του ότι την ονειρευόταν εδώ και έναν χρόνο. Την αγόρασε, την ' +
                  'έβαλε στο εργαστήριό του και τη ζωγράφισε πολλές φορές, με δυνατά κίτρινα και ' +
                  'πράσινα, μόνη της, χωρίς κανέναν να κάθεται. Δίπλα της βλέπεις έναν από ' +
                  'αυτούς τους πίνακες. Σύγκρινε την αληθινή με τη ζωγραφισμένη.',
                en:
                  'An old armchair with twisting, wavy wooden arms, as if a sea shell had made it. ' +
                  'Matisse saw it in a junk shop in 1942 and wrote to a friend that he had been ' +
                  'dreaming of it for a year. He bought it, put it in his studio and painted it ' +
                  'many times, in strong yellows and greens, on its own, with nobody sitting in ' +
                  'it. Beside it you can see one of those paintings. Compare the real chair with ' +
                  'the painted one.',
              },
              question: {
                q: { el: 'Ποιος κάθεται στην πολυθρόνα στους πίνακες του Ματίς;', en: 'Who sits in the armchair in Matisse’s paintings?' },
                answers: [
                  { el: 'Κανείς, είναι μόνη της', en: 'Nobody, it is on its own' },
                  { el: 'Ο Ματίς', en: 'Matisse' },
                  { el: 'Μια γάτα', en: 'A sleepy cat' },
                  {
                    el: 'Ο φίλος του στον οποίο έγραψε το γράμμα για την πολυθρόνα',
                    en: 'The friend he wrote the letter to about the armchair',
                  },
                ],
                explanation: {
                  el: 'Την αγαπούσε για το σχήμα της. Τη ζωγράφιζε άδεια, με δυνατά χρώματα.',
                  en: 'He loved it for its shape. He painted it empty, in strong colours.',
                },
              },
            },
            {
              id: 'nice-matisse-villa',
              name: { el: 'Τα ψεύτικα παράθυρα', en: 'The fake windows' },
              blurb: {
                el:
                  'Η βίλα χτίστηκε τον 17ο αιώνα από μια οικογένεια της Γένοβας, και βάφτηκε ' +
                  'κόκκινη όπως τα σπίτια εκείνης της πόλης. Οι Γενοβέζοι είχαν μια συνήθεια: ' +
                  'όταν ένας τοίχος δεν είχε αρκετά παράθυρα για να φαίνεται συμμετρικός, ' +
                  'ζωγράφιζαν κι άλλα πάνω του, με παντζούρια, κορνίζες, ακόμα και σκιές, τόσο ' +
                  'καλά που από μακριά δεν ξεχωρίζουν. Αυτό λέγεται «τρομπ-λ’-έιγ», δηλαδή ' +
                  '«ξεγελάει το μάτι». Πήγαινε στην πρόσοψη και προσπάθησε να βρεις ποια παράθυρα ' +
                  'ανοίγουν και ποια όχι.',
                en:
                  'The villa was built in the 17th century by a family from Genoa, and painted ' +
                  'red like the houses of that city. The Genoese had a habit: when a wall did not ' +
                  'have enough windows to look symmetrical, they painted more onto it, with ' +
                  'shutters, frames, even shadows, so well that from a distance you cannot tell ' +
                  'them apart. This is called "trompe-l’œil", which means "fools the eye". Go to ' +
                  'the front and try to work out which windows open and which do not.',
              },
              question: {
                q: { el: 'Γιατί ζωγράφιζαν ψεύτικα παράθυρα στους τοίχους;', en: 'Why did they paint fake windows on the walls?' },
                answers: [
                  { el: 'Για να φαίνεται ο τοίχος συμμετρικός', en: 'To make the wall look symmetrical' },
                  { el: 'Για πλάκα', en: 'As a joke' },
                  { el: 'Γιατί το γυαλί ήταν ακριβό', en: 'Because glass was expensive' },
                  {
                    el: 'Για να μπερδεύουν τους κλέφτες που ήθελαν να μπουν από τα παράθυρα',
                    en: 'To confuse burglars who wanted to climb in through the windows',
                  },
                ],
                explanation: {
                  el: 'Συνήθεια της Γένοβας. Το «τρομπ-λ’-έιγ» ξεγελάει το μάτι από μακριά.',
                  en: 'A Genoese habit. The "trompe-l’œil" fools the eye from a distance.',
                },
              },
            },
            {
              id: 'nice-matisse-arena',
              name: { el: 'Το ρωμαϊκό αμφιθέατρο δίπλα', en: 'The Roman arena next door' },
              blurb: {
                el:
                  'Λίγα βήματα από τη βίλα, μέσα στον ελαιώνα, υπάρχει ένα μικρό ρωμαϊκό ' +
                  'αμφιθέατρο, χαμηλό και μισογκρεμισμένο. Πριν από δύο χιλιάδες χρόνια εδώ ' +
                  'ήταν μια ρωμαϊκή πόλη, η Κεμενέλουμ, πρωτεύουσα της περιοχής, και το ' +
                  'αμφιθέατρο χωρούσε περίπου πέντε χιλιάδες θεατές. Δίπλα του σώζονται και ' +
                  'ερείπια από ρωμαϊκά λουτρά. Ο Ματίς έβλεπε αυτά τα ερείπια από το σπίτι του ' +
                  'κάθε μέρα. Σήμερα, το καλοκαίρι, στον ελαιώνα γίνεται φεστιβάλ τζαζ.',
                en:
                  'A few steps from the villa, in the olive grove, there is a small Roman arena, ' +
                  'low and half-ruined. Two thousand years ago there was a Roman town here, ' +
                  'Cemenelum, capital of the region, and the arena held about five thousand ' +
                  'spectators. Beside it the ruins of Roman baths also survive. Matisse saw these ' +
                  'ruins from his home every day. Today, in summer, a jazz festival is held in ' +
                  'the olive grove.',
              },
              question: {
                q: { el: 'Τι υπήρχε εδώ πριν από δύο χιλιάδες χρόνια;', en: 'What was here two thousand years ago?' },
                answers: [
                  { el: 'Μια ρωμαϊκή πόλη', en: 'A Roman town' },
                  { el: 'Θάλασσα', en: 'The sea' },
                  { el: 'Ένα δάσος', en: 'A thick forest' },
                  {
                    el: 'Το πρώτο μουσείο ζωγραφικής της Γαλλίας, φτιαγμένο από ξύλο',
                    en: 'The very first painting museum in France, built out of wood',
                  },
                ],
                explanation: {
                  el: 'Η Κεμενέλουμ, πρωτεύουσα της περιοχής, με αμφιθέατρο και λουτρά.',
                  en: 'Cemenelum, capital of the region, with an arena and baths.',
                },
              },
            },
          ],
        },
      ],
      riddles: [
        {
          id: 'nice-matisse-riddle-1',
          difficulty: 1,
          prompt: {
            el:
              'Δεν με ζωγράφισαν με πινέλο. Με έκοψαν με ψαλίδι από μπλε χαρτί, και με ' +
              'κάρφωσαν και με ξεκάρφωσαν για εβδομάδες μέχρι να καθίσω σωστά.',
            en:
              'I was not painted with a brush. I was cut with scissors from blue paper, and ' +
              'pinned and unpinned for weeks until I sat just right.',
          },
          hint: { el: 'Δεν έχω πρόσωπο.', en: 'I have no face.' },
          answerExhibitId: 'nice-matisse-blue-nude',
        },
        {
          id: 'nice-matisse-riddle-2',
          difficulty: 2,
          prompt: {
            el:
              'Κανείς δεν κάθεται πάνω μου, κι όμως ο ζωγράφος με ζωγράφισε ξανά και ξανά. Τα ' +
              'μπράτσα μου είναι κυματιστά σαν κοχύλι.',
            en:
              'Nobody sits on me, and yet the painter painted me again and again. My arms are ' +
              'wavy like a sea shell.',
          },
          hint: { el: 'Με βρήκε σε μαγαζί με παλιά πράγματα.', en: 'He found me in a junk shop.' },
          answerExhibitId: 'nice-matisse-armchair',
        },
        {
          id: 'nice-matisse-riddle-3',
          difficulty: 3,
          prompt: {
            el:
              'Μοιάζουμε με παράθυρα, αλλά κανείς δεν μας άνοιξε ποτέ. Έχουμε παντζούρια και ' +
              'σκιές, φτιαγμένα όλα από μπογιά, για να ξεγελάμε το μάτι σου.',
            en:
              'We look like windows, but nobody has ever opened us. We have shutters and ' +
              'shadows, all made of paint, to fool your eye.',
          },
          hint: { el: 'Είμαστε στον κόκκινο τοίχο έξω.', en: 'We are on the red wall outside.' },
          answerExhibitId: 'nice-matisse-villa',
        },
      ],
    },
  },

  // -------------------------------------------------------------- arenes cimiez
  {
    id: 'nice-arenes-cimiez',
    cityId: 'nice',
    emoji: '🏛️',
    category: 'history',
    difficulty: 2,

    name: { el: 'Το αμφιθέατρο του Σιμιέ', en: 'The Cimiez Arena' },
    tagline: {
      el: 'Η ρωμαϊκή Νίκαια, με αμφιθέατρο, λουτρά και έναν ελαιώνα',
      en: 'Roman Nice, with an arena, baths and an olive grove',
    },
    story: {
      el:
        'Η σημερινή Νίκαια ξεκίνησε από Έλληνες ναυτικούς, που ίδρυσαν πριν από δύο χιλιάδες ' +
        'τετρακόσια χρόνια μια μικρή πόλη κοντά στη θάλασσα και την ονόμασαν Νίκαια, από τη ' +
        'θεά της νίκης. Οι Ρωμαίοι όμως προτίμησαν τον λόφο. Εδώ, στο Σιμιέ, έχτισαν τη ' +
        'δική τους πόλη, την Κεμενέλουμ, που έγινε πρωτεύουσα μιας ολόκληρης επαρχίας από τη ' +
        'θάλασσα ως τις Άλπεις. Το αμφιθέατρο είναι μικρό, για ρωμαϊκά μέτρα, γιατί η πόλη ' +
        'δεν ήταν μεγάλη: χωρούσε περίπου πέντε χιλιάδες θεατές, που έρχονταν για αγώνες και ' +
        'θεάματα. Δίπλα σώζονται τα λουτρά, με τα πέτρινα θεμέλια των δεξαμενών με ζεστό και ' +
        'κρύο νερό, και ένα μικρό μουσείο με αντικείμενα που βρέθηκαν στις ανασκαφές: ' +
        'νομίσματα, αγγεία, κοσμήματα, ένα ψηφιδωτό. Γύρω από τα ερείπια απλώνεται ένας ' +
        'ελαιώνας με εκατοντάδες παλιές ελιές, όπου οι κάτοικοι κάνουν πικνίκ.',
      en:
        'Today’s Nice was started by Greek sailors, who founded a small town near the sea two ' +
        'thousand four hundred years ago and named it Nikaia, after the goddess of victory. The ' +
        'Romans, though, preferred the hill. Here, at Cimiez, they built their own town, ' +
        'Cemenelum, which became the capital of a whole province stretching from the sea to ' +
        'the Alps. The arena is small, by Roman standards, because the town was not big: it ' +
        'held about five thousand spectators, who came for contests and shows. Beside it the ' +
        'baths survive, with the stone foundations of the hot and cold pools, and a small ' +
        'museum with objects found in the digs: coins, pots, jewellery, a mosaic. Around the ' +
        'ruins spreads an olive grove with hundreds of old trees, where local people have ' +
        'picnics.',
    },
    facts: [
      {
        el: 'Η Νίκαια ιδρύθηκε από Έλληνες και πήρε το όνομά της από τη θεά της νίκης.',
        en: 'Nice was founded by Greeks and named after the goddess of victory.',
      },
      {
        el: 'Η ρωμαϊκή πόλη στον λόφο λεγόταν Κεμενέλουμ.',
        en: 'The Roman town on the hill was called Cemenelum.',
      },
      {
        el: 'Το αμφιθέατρο χωρούσε περίπου πέντε χιλιάδες θεατές.',
        en: 'The arena held about five thousand spectators.',
      },
    ],
    location: {
      lat: 43.71999,
      lng: 7.27532,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q2866137', deltaM: 0 },
        { kind: 'osm', ref: 'way/140009090', deltaM: 3 },
      ],
      verifiedAt: '2026-09-18',
      map: { x: 0.694, y: 0.111 },
    },
    question: {
      q: { el: 'Από πού πήρε το όνομά της η Νίκαια;', en: 'Where does Nice get its name from?' },
      answers: [
        { el: 'Από την ελληνική θεά της νίκης', en: 'From the Greek goddess of victory' },
        { el: 'Από έναν Ρωμαίο', en: 'From a Roman' },
        { el: 'Από τη λέξη «ωραία»', en: 'From the word "nice"' },
        {
          el: 'Από έναν βασιλιά της Σαβοΐας που την αγόρασε από τους Ιταλούς',
          en: 'From a king of Savoy who bought it from the Italians',
        },
      ],
      explanation: {
        el: 'Έλληνες ναυτικοί την ονόμασαν Νίκαια πριν από δύο χιλιάδες τετρακόσια χρόνια.',
        en: 'Greek sailors named it Nikaia two thousand four hundred years ago.',
      },
    },
  },
];

export const trails: Trail[] = [
  {
    id: 'nice-old-town',
    cityId: 'nice',
    emoji: '🌸',
    name: { el: 'Η παλιά πόλη', en: 'The old town' },
    promise: {
      el: 'Μια πλατεία-σκακιέρα, μια αγορά με τηγανίτες από ρεβίθια, μια εκκλησία για μια κοπέλα που ήρθε με άγγελους και ένα παλάτι γεμάτο όργανα.',
      en: 'A chessboard square, a market with chickpea pancakes, a church for a girl brought by angels and a palace full of instruments.',
    },
    placeIds: [
      'nice-place-massena',
      'nice-jardin-albert',
      'nice-opera',
      'nice-cours-saleya',
      'nice-cathedrale',
      'nice-palais-lascaris',
    ],
  },
  {
    id: 'nice-sea-and-hill',
    cityId: 'nice',
    emoji: '🌊',
    name: { el: 'Θάλασσα και λόφος', en: 'Sea and hill' },
    promise: {
      el: 'Ο περίπατος των Άγγλων, μια βίλα που λέει την ιστορία της πόλης, ένα κάστρο που δεν υπάρχει πια και ένα λιμάνι σκαμμένο σε βάλτο.',
      en: 'The walk of the English, a villa that tells the city’s story, a castle that is no longer there and a harbour dug out of a marsh.',
    },
    placeIds: ['nice-musee-massena', 'nice-promenade', 'nice-colline-chateau', 'nice-port'],
  },
  {
    id: 'nice-museums',
    cityId: 'nice',
    emoji: '🎨',
    name: { el: 'Μπλε, ψαλίδι και σκαθάρια', en: 'Blue, scissors and beetles' },
    promise: {
      el: 'Συμπιεσμένα αυτοκίνητα, συρτάρια με πεταλούδες, τα όνειρα του Σαγκάλ, οι ψαλιδιές του Ματίς και ένα ρωμαϊκό αμφιθέατρο.',
      en: 'Squashed cars, drawers of butterflies, Chagall’s dreams, Matisse’s scissors and a Roman arena.',
    },
    placeIds: [
      'nice-mamac',
      'nice-museum-histoire-naturelle',
      'nice-musee-chagall',
      'nice-musee-matisse',
      'nice-arenes-cimiez',
    ],
  },
];
