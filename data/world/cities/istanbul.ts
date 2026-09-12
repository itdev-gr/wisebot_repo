/**
 * WiseBot World — Istanbul (Κωνσταντινούπολη).
 *
 * Seventeen places, three of them museums with an interior. Ten of them began as the
 * Explorer spots in `data/explore/cities/istanbul.ts`; their stories were rewritten
 * longer and without the treasure-hunt framing, and their riddle, parent hint and
 * on-site question are kept in `scripts/world/seeds/istanbul.explorer.json` until the
 * model has fields for them. Written for a six- to twelve-year-old: the city's real
 * history has a hanged patriarch and a riot that burned a cathedral, and both are told
 * plainly and briefly rather than dressed up or left out.
 *
 * Every coordinate is copied from `data/world/coords/istanbul.json`, which
 * `scripts/world/resolve-coords.mjs` produced from Wikidata and cross-checked against
 * OpenStreetMap and Wikipedia. Nothing graded `D` is present, and no place claims an
 * entrance: nobody has measured a door in this city yet, so every pin is honestly a
 * centroid or an area, and the doors the venues describe in words are in `findIt`.
 * Every `location.map` is that coordinate projected into the bounds declared in
 * `data/world/countries/turkey.ts`, computed rather than placed.
 *
 * Facts were checked against the English Wikipedia articles for each place and object,
 * and the museums' own pages, in September 2026. `el` and `en` are complete; `de`,
 * `fr`, `es` and `it` land in the second pass.
 */

import type { Place, Trail } from '../types';

export const places: Place[] = [
  // ------------------------------------------------------------------ hippodrome
  {
    id: 'istanbul-hippodrome',
    cityId: 'istanbul',
    emoji: '🏇',
    category: 'sport',
    difficulty: 2,

    name: { el: 'Ιππόδρομος (Πλατεία Sultanahmet)', en: 'The Hippodrome (Sultanahmet Square)' },
    tagline: {
      el: 'Η πίστα όπου μια ολόκληρη πόλη φώναζε για Γαλάζιους ή Πράσινους',
      en: 'The racetrack where a whole city shouted for Blues or Greens',
    },
    story: {
      el:
        'Κάτω από τις πλάκες αυτής της μακρόστενης πλατείας κρύβεται μια πίστα μήκους ' +
        'περίπου 450 μέτρων. Ο αυτοκράτορας Κωνσταντίνος τη μεγάλωσε πριν από 1.700 χρόνια, ' +
        'όταν έκανε την πόλη νέα πρωτεύουσά του, και τις μέρες των αγώνων περίπου εκατό ' +
        'χιλιάδες άνθρωποι γέμιζαν τις κερκίδες. Άρματα με τέσσερα άλογα βροντούσαν επτά ' +
        'γύρους, ενώ το πλήθος ούρλιαζε για την ομάδα του, τους Γαλάζιους ή τους Πράσινους, ' +
        'όπως φωνάζουν σήμερα οι φίλαθλοι για τις ομάδες τους. Οι αυτοκράτορες στόλισαν τη ' +
        'μέση της πίστας με θησαυρούς από όλο τον κόσμο τους, και τρεις στέκονται ακόμα. Ο ' +
        'ροζ γρανιτένιος οβελίσκος σκαλίστηκε στην Αίγυπτο για έναν Φαραώ πριν από περίπου ' +
        '3.500 χρόνια· ο Θεοδόσιος τον έφερε με καράβι το 390, και οι εργάτες του χρειάστηκαν ' +
        '32 μέρες για να τον στήσουν ξανά. Η στριφτή πράσινη κολόνα από μπρούντζο είναι ακόμα ' +
        'πιο ξεχωριστή για εμάς: χυτεύτηκε όταν οι ελληνικές πόλεις νίκησαν τους Πέρσες στις ' +
        'Πλαταιές, το 479 π.Χ., και στεκόταν στους Δελφούς σχεδόν 800 χρόνια πριν την φέρει ' +
        'εδώ ο Κωνσταντίνος. Τα τρία κεφάλια των φιδιών της έπεσαν μια νύχτα του 1700· το ένα ' +
        'σαγόνι βρίσκεται στο μουσείο, λίγο πιο κάτω στον λόφο.',
      en:
        'Under the paving of this long square lies a racetrack about 450 metres long. ' +
        'Emperor Constantine enlarged it about 1,700 years ago, when he made the city his ' +
        'new capital, and on race days something like a hundred thousand people packed the ' +
        'stands. Chariots pulled by four horses thundered round seven laps while the crowd ' +
        'screamed for its team, the Blues or the Greens, the way people shout for football ' +
        'clubs today. The emperors decorated the middle of the track with treasures from all ' +
        'over their world, and three of them are still standing. The pink granite obelisk ' +
        'was carved in Egypt for a pharaoh about 3,500 years ago; Theodosius had it shipped ' +
        'here in the year 390, and his workers needed 32 days to stand it up again. The ' +
        'twisted green bronze column is even more special for Greeks: it was cast after the ' +
        'Greek cities beat the Persians at Plataea in 479 BC, and it stood at Delphi for ' +
        'almost 800 years before Constantine brought it here. Its three snake heads fell off ' +
        'one night in 1700; one jaw is kept in the museum down the hill.',
    },
    facts: [
      {
        el: 'Οι κερκίδες χωρούσαν περίπου 100.000 θεατές.',
        en: 'The stands held around 100,000 spectators.',
      },
      {
        el: 'Ο οβελίσκος σκαλίστηκε για τον Φαραώ Τούθμωση Γ΄ γύρω στο 1450 π.Χ. και στήθηκε εδώ το 390 μ.Χ.',
        en: 'The obelisk was carved for Pharaoh Thutmose III around 1450 BC and re-erected here in AD 390.',
      },
      {
        el: 'Τα κεφάλια της Στήλης των Όφεων έπεσαν τη νύχτα της 20ής Οκτωβρίου 1700· ένα σαγόνι σώζεται στο Αρχαιολογικό Μουσείο.',
        en: 'The Serpent Column’s heads fell on the night of 20 October 1700; one jaw survives in the Archaeology Museums.',
      },
      {
        el: 'Η τελευταία αρματοδρομία που ξέρουμε έγινε το 1200.',
        en: 'The last recorded chariot race was run in the year 1200.',
      },
    ],
    location: {
      lat: 41.00639,
      lng: 28.97556,
      anchor: 'area',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q387548', deltaM: 0 },
        { kind: 'osm', ref: 'way/25512790', deltaM: 44 },
        { kind: 'wikipedia', ref: 'Hippodrome of Constantinople', deltaM: 23 },
      ],
      verifiedAt: '2026-09-12',
      note: 'An area pin on a square 450 m long; the three monuments stand in a line along its middle.',
      map: { x: 0.556, y: 0.832 },
    },
    question: {
      q: {
        el: 'Πού στεκόταν η στριφτή μπρούντζινη κολόνα πριν έρθει εδώ;',
        en: 'Where did the twisted bronze column stand before it came here?',
      },
      answers: [
        { el: 'Στους Δελφούς', en: 'At Delphi' },
        { el: 'Στην Ολυμπία', en: 'At Olympia' },
        { el: 'Στην Αθήνα', en: 'In Athens' },
        { el: 'Στη Σπάρτη', en: 'In Sparta' },
      ],
      explanation: {
        el:
          'Οι ελληνικές πόλεις την έφτιαξαν από τα όπλα των νικημένων Περσών και τη χάρισαν ' +
          'στον Απόλλωνα στους Δελφούς. Ο Κωνσταντίνος την πήρε για να στολίσει τη νέα του ' +
          'πρωτεύουσα.',
        en:
          'The Greek cities made it from the weapons of the beaten Persians and gave it to ' +
          'Apollo at Delphi. Constantine took it to decorate his new capital.',
      },
    },
  },

  // ---------------------------------------------------------------- hagia sophia
  {
    id: 'istanbul-hagia-sophia',
    cityId: 'istanbul',
    emoji: '🏛️',
    category: 'landmark',
    difficulty: 2,

    name: { el: 'Αγία Σοφία', en: 'Hagia Sophia' },
    tagline: {
      el: 'Ένας θόλος που στέκεται σχεδόν χίλια πεντακόσια χρόνια',
      en: 'A dome that has stood for almost fifteen hundred years',
    },
    story: {
      el:
        'Ο αυτοκράτορας Ιουστινιανός διέταξε αυτή την εκκλησία το 532, λίγες εβδομάδες αφού ' +
        'η παλιά κάηκε σε μια εξέγερση, και οι μάστορές του την τελείωσαν σε πέντε χρόνια και ' +
        'δέκα μήνες. Δύο Έλληνες μαθηματικοί, ο Ανθέμιος από τις Τράλλεις και ο Ισίδωρος από ' +
        'τη Μίλητο, βρήκαν πώς να κρεμάσουν έναν θόλο πλάτους 31 μέτρων πάνω από τους τοίχους. ' +
        'Ένας κύκλος από παράθυρα στη βάση του αφήνει το φως να μπαίνει, κι έτσι ο θόλος ' +
        'μοιάζει να κρέμεται από τον ουρανό· ένας συγγραφέας της εποχής έγραψε ότι έμοιαζε ' +
        'κρεμασμένος με χρυσή αλυσίδα. Ο πρώτος θόλος έπεσε σε σεισμό το 558. Ο καινούργιος, ' +
        'που τελείωσε το 562, χτίστηκε πιο ψηλός και με σαράντα νευρώσεις για να σπρώχνει ' +
        'λιγότερο τους τοίχους, και το μεγαλύτερο μέρος του είναι ακόμα εκεί πάνω. Για πάνω ' +
        'από πεντακόσια χρόνια ήταν η μεγαλύτερη εκκλησία του κόσμου. Το 1453 οι Οθωμανοί ' +
        'πήραν την Πόλη και έγινε τζαμί· προστέθηκαν μιναρέδες, ο ένας από κόκκινο τούβλο. ' +
        'Ήταν μουσείο από το 1935 ως το 2020 και είναι ξανά τζαμί. Ψηλά στον εξώστη, ένας ' +
        'Βίκινγκ φρουρός χάραξε το όνομά του στο μάρμαρο πριν από χίλια χρόνια· από το ' +
        '«Halfdan» διαβάζονται σήμερα μόνο τα γράμματα «-ftan».',
      en:
        'Emperor Justinian ordered this church in 532, a few weeks after the old one burned ' +
        'down in a riot, and his builders finished it in five years and ten months. Two Greek ' +
        'mathematicians, Anthemius of Tralles and Isidore of Miletus, worked out how to hang ' +
        'a dome about 31 metres wide above the walls. A ring of windows at its base lets the ' +
        'light in, so the dome seems to float; a writer of the time said it looked as if it ' +
        'hung from heaven on a golden chain. The first dome fell in an earthquake in 558. The ' +
        'new one, finished in 562, was built taller and with forty ribs so that it would push ' +
        'less on the walls, and most of it is still up there. For more than five hundred ' +
        'years it was the biggest church in the world. In 1453 the Ottomans took the city ' +
        'and it became a mosque; minarets were added, one of them red brick. It was a museum ' +
        'from 1935 to 2020 and is a mosque again. Up in the gallery, a Viking guard scratched ' +
        'his name into the marble a thousand years ago; of “Halfdan”, only the letters ' +
        '“-ftan” can still be read.',
    },
    facts: [
      {
        el: 'Χτίστηκε από το 532 ως το 537: πέντε χρόνια και δέκα μήνες.',
        en: 'It was built between 532 and 537: five years and ten months.',
      },
      {
        el: 'Ο πρώτος θόλος έπεσε στον σεισμό του 558· αυτός που βλέπεις τελείωσε το 562.',
        en: 'The first dome collapsed in the earthquake of 558; the one you see was finished in 562.',
      },
      {
        el: 'Έμεινε η μεγαλύτερη εκκλησία του κόσμου για πάνω από 500 χρόνια.',
        en: 'It stayed the largest church in the world for more than 500 years.',
      },
      {
        el: 'Από τους τέσσερις μιναρέδες, ο ένας είναι από κόκκινο τούβλο και οι τρεις από ανοιχτόχρωμη πέτρα.',
        en: 'Of its four minarets, one is red brick and three are pale stone.',
      },
    ],
    location: {
      lat: 41.00833,
      lng: 28.98,
      anchor: 'centroid',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q12506', deltaM: 0 },
        { kind: 'osm', ref: 'way/109862851', deltaM: 20 },
        { kind: 'wikipedia', ref: 'Hagia Sophia', deltaM: 0 },
      ],
      verifiedAt: '2026-09-12',
      note: 'The centre of the building.',
      findIt: {
        el: 'Οι επισκέπτες μπαίνουν από ξεχωριστή είσοδο, στη μεριά της πλατείας, και βλέπουν το εσωτερικό από τον πάνω εξώστη· το ισόγειο είναι για προσευχή.',
        en: 'Visitors go in by a separate entrance on the square side and see the inside from the upper gallery; the ground floor is for prayer.',
      },
      map: { x: 0.61, y: 0.793 },
    },
    question: {
      q: {
        el: 'Γιατί ο μεγάλος θόλος μοιάζει να αιωρείται στον αέρα;',
        en: 'Why does the great dome seem to hang in the air?',
      },
      answers: [
        { el: 'Ένας κύκλος παράθυρα', en: 'A ring of windows' },
        { el: 'Καθρέφτες πάνω στους τοίχους', en: 'Mirrors on the walls' },
        { el: 'Είναι φτιαγμένος από γυαλί', en: 'It is made of glass' },
        { el: 'Κρυμμένα αερόστατα', en: 'Hidden hot-air balloons' },
      ],
      explanation: {
        el:
          'Τα παράθυρα γύρω γύρω στη βάση του θόλου κόβουν το φως σαν κορδέλα, κι έτσι το ' +
          'μάτι δεν βλέπει πού πατάει ο θόλος.',
        en:
          'The windows all the way round the base cut a ribbon of light, so your eye cannot ' +
          'see where the dome actually rests.',
      },
    },
  },

  // ----------------------------------------------------------------- blue mosque
  {
    id: 'istanbul-blue-mosque',
    cityId: 'istanbul',
    emoji: '🕌',
    category: 'landmark',
    difficulty: 1,

    name: { el: 'Γαλάζιο Τζαμί (Sultanahmet Camii)', en: 'The Blue Mosque (Sultanahmet Camii)' },
    tagline: {
      el: 'Έξι μιναρέδες και 21.043 γαλάζια πλακάκια',
      en: 'Six minarets and 21,043 blue tiles',
    },
    story: {
      el:
        'Ο σουλτάνος Ahmed ο Α΄ ήταν δεκαεννιά χρονών όταν διέταξε αυτό το τζαμί, το 1609, ' +
        'ακριβώς απέναντι από την Αγία Σοφία, και άνοιξε το 1617, τη χρονιά που πέθανε. Ο ' +
        'αρχιτέκτονάς του, ο Sedefkar Mehmed Ağa, είχε μάθει την τέχνη δίπλα στον μεγάλο ' +
        'μάστορα Sinan, και στοίβαξε θόλο πάνω σε θόλο, ώστε το κτίριο να ανεβαίνει σαν λόφος ' +
        'από φούσκες. Μέσα, οι τοίχοι είναι σκεπασμένοι με 21.043 ζωγραφιστά πλακάκια από την ' +
        'πόλη İznik: τουλίπες, γαρίφαλα, κυπαρίσσια, τα περισσότερα σε γαλάζιο και άσπρο. Ο ' +
        'σουλτάνος ήθελε τόσα πολλά, που το 1613 απαγόρευσε στους αγγειοπλάστες του İznik να ' +
        'φτιάχνουν πλακάκια για οποιονδήποτε άλλον. Αυτό το γαλάζιο είναι ο λόγος που οι ' +
        'επισκέπτες το λένε Γαλάζιο Τζαμί. Οι έξι μιναρέδες του έκαναν αίσθηση, γιατί τότε ' +
        'μόνο το πιο ιερό τζαμί από όλα, στη Μέκκα, είχε τόσους. Ο κόσμος λέει ακόμα ένα ' +
        'αστείο: ο σουλτάνος ζήτησε «altın», δηλαδή χρυσούς μιναρέδες, και ο αρχιτέκτονας ' +
        'άκουσε «altı», δηλαδή έξι. Είναι μόνο ιστορία, αλλά είναι καλή. Πριν μπεις, βγάλε τα ' +
        'παπούτσια σου όπως όλοι, και κοίτα ψηλά.',
      en:
        'Sultan Ahmed I was nineteen years old when he ordered this mosque in 1609, right ' +
        'across the square from Hagia Sophia, and it opened in 1617, the year he died. His ' +
        'architect, Sedefkar Mehmed Agha, had learned his trade from the great master Sinan, ' +
        'and he stacked dome upon dome so that the building rises like a hill of bubbles. ' +
        'Inside, the walls are covered with 21,043 painted tiles from the town of İznik: ' +
        'tulips, carnations, cypress trees, mostly in blue and white. The sultan wanted so ' +
        'many that in 1613 he forbade the İznik potters from making tiles for anyone else. ' +
        'That blue is why visitors call it the Blue Mosque. Its six minarets caused a stir, ' +
        'because at the time only the holiest mosque of all, in Mecca, had that many. People ' +
        'still tell a joke about it: the sultan asked for altın, golden, minarets, and the ' +
        'architect heard altı, six. It is only a story, but it is a good one. Before you go ' +
        'in, take off your shoes like everyone else, and look up.',
    },
    facts: [
      {
        el: 'Χτίστηκε από το 1609 ως το 1617.',
        en: 'It was built between 1609 and 1617.',
      },
      {
        el: '21.043 πλακάκια από το İznik σκεπάζουν τους τοίχους, σε πάνω από πενήντα σχέδια.',
        en: '21,043 İznik tiles cover the walls, in more than fifty designs.',
      },
      {
        el: 'Είναι ένα από τα μόνο πέντε τζαμιά της Τουρκίας με έξι μιναρέδες.',
        en: 'It is one of only five mosques in Türkiye with six minarets.',
      },
      {
        el: 'Στην πύλη της αυλής από τον Ιππόδρομο κρέμεται μια αλυσίδα, για να σκύβει το κεφάλι ο σουλτάνος όταν έμπαινε καβάλα.',
        en: 'A chain hangs at the courtyard gate from the Hippodrome, so the sultan had to bow his head when he rode in.',
      },
    ],
    location: {
      lat: 41.00539,
      lng: 28.97682,
      anchor: 'centroid',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q80541', deltaM: 0 },
        { kind: 'osm', ref: 'relation/18055570', deltaM: 14 },
        { kind: 'wikipedia', ref: 'Blue Mosque, Istanbul', deltaM: 1 },
      ],
      verifiedAt: '2026-09-12',
      map: { x: 0.571, y: 0.852 },
    },
    question: {
      q: {
        el: 'Τι έκανε ο σουλτάνος για να πάρει το τζαμί του όλα τα πλακάκια που χρειαζόταν;',
        en: 'What did the sultan do so that his mosque got all the tiles it needed?',
      },
      answers: [
        { el: 'Απαγόρευσε άλλες πωλήσεις', en: 'He banned other sales' },
        { el: 'Αγόρασε τα εργαστήρια του İznik', en: 'He bought the İznik potteries' },
        { el: 'Έχτισε δικό του εργαστήρι', en: 'He built his own tile factory' },
        { el: 'Πλήρωνε διπλά κάθε πλακάκι', en: 'He paid double for every tile' },
      ],
      explanation: {
        el:
          'Το 1613 απαγόρευσε στους αγγειοπλάστες του İznik να πουλούν πλακάκια σε ' +
          'οποιονδήποτε άλλον, ώσπου να τελειώσουν οι δικές του παραγγελίες.',
        en:
          'In 1613 he forbade the İznik potters to sell tiles to anyone else until his own ' +
          'orders were finished.',
      },
    },
  },

  // ------------------------------------------------------------ basilica cistern
  {
    id: 'istanbul-basilica-cistern',
    cityId: 'istanbul',
    emoji: '💧',
    category: 'history',
    difficulty: 2,

    name: { el: 'Βασιλική Κινστέρνα (Yerebatan)', en: 'The Basilica Cistern (Yerebatan)' },
    tagline: {
      el: 'Ένα δάσος από 336 κολόνες κάτω από τον δρόμο',
      en: 'A forest of 336 columns under the street',
    },
    story: {
      el:
        'Πενήντα δύο σκαλιά κάτω από το πεζοδρόμιο, 150 μέτρα από την Αγία Σοφία, απλώνεται ' +
        'μια αίθουσα 138 επί 65 μέτρα. Ο Ιουστινιανός την έχτισε τον 6ο αιώνα για να φυλάει ' +
        'νερό για το παλάτι: περίπου 80.000 κυβικά μέτρα, που έφταναν με υδραγωγεία από ένα ' +
        'δάσος 19 χιλιόμετρα βόρεια. Τη στέγη κρατούν 336 μαρμάρινες κολόνες, 9 μέτρα ψηλές, ' +
        'σε 12 σειρές των 28, οι περισσότερες παρμένες από παλιότερα κτίρια. Μετά η πόλη την ' +
        'ξέχασε. Το 1545 ένας Γάλλος ταξιδιώτης, ο Petrus Gyllius, ανακάλυψε ότι οι κάτοικοι ' +
        'τραβούσαν ακόμα νερό από κάτω, τον έβαλαν σε βάρκα ανάμεσα στις κολόνες και είδε ' +
        'ψάρια να κολυμπούν κάτω από τα κουπιά. Το 1985 με 1987 βγήκαν από μέσα 50.000 τόνοι ' +
        'λάσπη, μπήκαν ξύλινοι διάδρομοι, και άνοιξε για τον κόσμο. Στην πιο μακρινή γωνία, ' +
        'δύο κολόνες πατούν πάνω σε σκαλισμένα κεφάλια της Μέδουσας, του τέρατος των ' +
        'ελληνικών μύθων που πέτρωνε όποιον την κοίταζε: το ένα ανάποδο, το άλλο στο πλάι. ' +
        'Κανείς δεν ξέρει από ποιο κτίριο ήρθαν. Το 1963 γυρίστηκε εδώ μια ταινία του Τζέιμς ' +
        'Μποντ, και οι ήρωες κωπηλατούσαν ακριβώς εκεί που περπατάς εσύ.',
      en:
        'Fifty-two steps below the pavement, 150 metres from Hagia Sophia, there is a hall ' +
        '138 metres long and 65 wide. Justinian had it built in the 6th century to store ' +
        'water for the palace: about 80,000 cubic metres, brought by aqueducts from a forest ' +
        '19 kilometres to the north. The roof rests on 336 marble columns, 9 metres tall, in ' +
        '12 rows of 28, most of them taken from older buildings. Then the city forgot about ' +
        'it. In 1545 a French traveller, Petrus Gyllius, discovered that people were still ' +
        'drawing water from below their houses; he was rowed between the columns and saw ' +
        'fish swimming under the oars. Between 1985 and 1987, 50,000 tons of mud were carried ' +
        'out, wooden walkways went in, and it opened to visitors. In the far corner two ' +
        'columns stand on carved heads of Medusa, the monster of Greek myth whose gaze turned ' +
        'people to stone: one upside down, one on its side. Nobody knows which building they ' +
        'came from. In 1963 a James Bond film was shot here, with the heroes rowing exactly ' +
        'where you are walking.',
    },
    facts: [
      {
        el: 'Έχει 336 κολόνες, 9 μέτρα ψηλές, σε 12 σειρές των 28.',
        en: 'It has 336 columns, each 9 m tall, in 12 rows of 28.',
      },
      {
        el: 'Μετράει περίπου 138 επί 65 μέτρα και χωρούσε 80.000 κυβικά μέτρα νερό.',
        en: 'It measures about 138 by 65 metres and could hold 80,000 cubic metres of water.',
      },
      {
        el: 'Άνοιξε για επισκέπτες στις 9 Σεπτεμβρίου 1987, αφού βγήκαν 50.000 τόνοι λάσπη.',
        en: 'It opened to visitors on 9 September 1987, after 50,000 tons of mud were cleared out.',
      },
      {
        el: 'Το νερό του ερχόταν από 19 χιλιόμετρα μακριά, από το δάσος του Βελιγραδίου.',
        en: 'Its water came 19 km from the Belgrade Forest.',
      },
    ],
    location: {
      lat: 41.0084,
      lng: 28.97792,
      anchor: 'centroid',
      confidence: 'C',
      sources: [
        { kind: 'wikidata', ref: 'Q216511', deltaM: 0 },
        { kind: 'osm', ref: 'node/11006008339', deltaM: 40 },
        { kind: 'wikipedia', ref: 'Basilica Cistern', deltaM: 40 },
      ],
      verifiedAt: '2026-09-12',
      note: 'Both checks sit 40 m off, just outside the 30 m agreement band, on a hall 138 m long. The pin is the middle of the hall.',
      findIt: {
        el: 'Το εκδοτήριο είναι στο επίπεδο του δρόμου, στην οδό Yerebatan: από εκεί κατεβαίνεις τα σκαλιά.',
        en: 'The ticket office is at street level on Yerebatan Caddesi: from there you walk down the steps.',
      },
      map: { x: 0.584, y: 0.792 },
    },
    question: {
      q: {
        el: 'Πώς ξαναβρήκε ένας Γάλλος ταξιδιώτης τη δεξαμενή το 1545;',
        en: 'How did a French traveller rediscover the cistern in 1545?',
      },
      answers: [
        { el: 'Ο κόσμος έπαιρνε ακόμα νερό', en: 'People still used its water' },
        { el: 'Ένας σεισμός άνοιξε τη στέγη', en: 'An earthquake opened the roof' },
        { el: 'Κυνήγησε μια γάτα στα σκαλιά', en: 'He chased a cat down the steps' },
        { el: 'Ένας χάρτης έπεσε από βιβλίο', en: 'A map fell out of an old book' },
      ],
      explanation: {
        el:
          'Οι κάτοικοι κατέβαζαν κουβάδες από τρύπες στα πατώματά τους. Ο Gyllius το ' +
          'πρόσεξε, ζήτησε να δει από πού έρχεται το νερό, και τον κατέβασαν με βάρκα.',
        en:
          'The locals were lowering buckets through holes in their floors. Gyllius noticed, ' +
          'asked where the water came from, and was taken down in a boat.',
      },
    },
  },

  // -------------------------------------------------------------- topkapı palace
  {
    id: 'istanbul-topkapi-palace',
    cityId: 'istanbul',
    emoji: '👑',
    category: 'museum',
    difficulty: 2,

    name: { el: 'Παλάτι Topkapı', en: 'Topkapı Palace' },
    tagline: {
      el: 'Το σπίτι των σουλτάνων για τετρακόσια χρόνια',
      en: 'Home of the sultans for four hundred years',
    },
    story: {
      el:
        'Ο σουλτάνος Mehmed ο Β΄ άρχισε να χτίζει αυτό το παλάτι το 1459, έξι χρόνια αφού ' +
        'πήρε την Πόλη, στη μύτη της χερσονήσου όπου ο Κεράτιος συναντά τη θάλασσα. Δεν είναι ' +
        'ένα κτίριο αλλά τέσσερις αυλές η μία μέσα στην άλλη, με ψηλά τείχη και πύλες που ' +
        'φύλαγαν ποιος περνάει πού. Από την πρώτη αυλή περνούσε όποιος ήθελε· από τη δεύτερη ' +
        'πύλη μόνο ο σουλτάνος επιτρεπόταν να μπει καβάλα, όλοι οι άλλοι ξεπέζευαν. Στις ' +
        'κουζίνες, με τις είκοσι ψηλές καμινάδες, οκτακόσιοι μάγειρες και βοηθοί μαγείρευαν ' +
        'κάθε μέρα για περίπου τέσσερις χιλιάδες ανθρώπους. Στην αίθουσα του συμβουλίου οι ' +
        'βεζίρηδες κυβερνούσαν την αυτοκρατορία, χωρίς να ξέρουν αν ο σουλτάνος τους άκουγε ' +
        'πίσω από ένα παραθυράκι με χρυσό πλέγμα ψηλά στον τοίχο. Το χαρέμι, όπου ζούσε η ' +
        'οικογένειά του, έχει πάνω από τετρακόσια δωμάτια. Οι σουλτάνοι έμειναν εδώ ως το ' +
        '1856, όταν μετακόμισαν σε ένα νέο παλάτι στον Βόσπορο, και το 1924 το Topkapı έγινε ' +
        'μουσείο. Στο θησαυροφυλάκιό του κρέμεται ένα διαμάντι 86 καρατίων που, λένε, ένας ' +
        'ψαράς το αντάλλαξε με τρία κουτάλια.',
      en:
        'Sultan Mehmed II began building this palace in 1459, six years after he took the ' +
        'city, on the tip of the peninsula where the Golden Horn meets the sea. It is not one ' +
        'building but four courtyards, one inside the next, with high walls and gates that ' +
        'controlled who went where. Anyone could walk through the first courtyard; through ' +
        'the second gate only the sultan was allowed to ride, and everybody else got down ' +
        'from their horse. In the kitchens, under twenty tall chimneys, eight hundred cooks ' +
        'and helpers made food every day for about four thousand people. In the council ' +
        'chamber the viziers ran the empire without knowing whether the sultan was listening ' +
        'behind a small window with a golden grille high in the wall. The Harem, where his ' +
        'family lived, has more than four hundred rooms. The sultans stayed here until 1856, ' +
        'when they moved to a new palace on the Bosphorus, and in 1924 Topkapı became a ' +
        'museum. In its treasury hangs an 86-carat diamond that a fisherman, so the story ' +
        'goes, once swapped for three spoons.',
    },
    facts: [
      {
        el: 'Το χτίσιμο ξεκίνησε το 1459 με διαταγή του Mehmed του Β΄.',
        en: 'Building began in 1459 on the orders of Mehmed II.',
      },
      {
        el: 'Οι κουζίνες του μαγείρευαν για περίπου 4.000 ανθρώπους τη μέρα.',
        en: 'Its kitchens cooked for about 4,000 people a day.',
      },
      {
        el: 'Το χαρέμι έχει πάνω από 400 δωμάτια.',
        en: 'The Harem has more than 400 rooms.',
      },
      {
        el: 'Έγινε μουσείο στις 3 Απριλίου 1924.',
        en: 'It became a museum on 3 April 1924.',
      },
    ],
    location: {
      lat: 41.013,
      lng: 28.984,
      anchor: 'area',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q170495', deltaM: 0 },
        { kind: 'osm', ref: 'node/10284696709', deltaM: 196 },
        { kind: 'wikipedia', ref: 'Topkapı Palace', deltaM: 0 },
      ],
      verifiedAt: '2026-09-12',
      note: 'An area pin on a complex of some 60 hectares; the OSM node 196 m away is a point inside the grounds, not a disagreement.',
      // The palace's own page (millisaraylar.gov.tr) gives the address as Bab-ı Hümayun
      // Caddesi 1 and names the Imperial Gate as the main entrance, which stands right
      // behind Hagia Sophia.
      findIt: {
        el: 'Η είσοδος είναι η Αυτοκρατορική Πύλη (Bab-ı Hümayun), η μεγάλη πύλη ακριβώς πίσω από την Αγία Σοφία, δίπλα στην κρήνη με τη φαρδιά στέγη.',
        en: 'The way in is the Imperial Gate (Bab-ı Hümayun), the big gate right behind Hagia Sophia, next to the fountain with the wide roof.',
      },
      map: { x: 0.659, y: 0.7 },
    },
    question: {
      q: {
        el: 'Ποιος επιτρεπόταν να περάσει καβάλα την Πύλη του Χαιρετισμού;',
        en: 'Who was allowed to ride a horse through the Gate of Salutation?',
      },
      answers: [
        { el: 'Μόνο ο σουλτάνος', en: 'Only the sultan' },
        { el: 'Μόνο ο μεγάλος βεζίρης', en: 'Only the grand vizier' },
        { el: 'Κάθε ξένος πρέσβης', en: 'Any foreign ambassador' },
        { el: 'Κάθε φρουρός', en: 'Every palace guard' },
      ],
      explanation: {
        el:
          'Όλοι οι άλλοι, ακόμα και οι πρέσβεις των βασιλιάδων, κατέβαιναν από το άλογο ' +
          'μπροστά στους δύο πύργους της πύλης. Ήταν ένας τρόπος να θυμίζει σε όλους ποιος ' +
          'κυβερνά.',
        en:
          'Everyone else, even the ambassadors of kings, got off their horse in front of ' +
          'the gate’s two towers. It was a way of reminding everybody who was in charge.',
      },
    },

    museum: {
      doorNote: {
        el: 'Δύο εισιτήρια σε ένα: το χαρέμι θέλει δικό του. Και το πιο διάσημο διαμάντι είναι σε ένα μικρό δωμάτιο με ουρά, όχι σε μεγάλη αίθουσα.',
        en: 'Two tickets in one: the Harem needs its own. And the famous diamond hangs in a small room with a queue, not in a grand hall.',
      },
      rooms: [
        {
          id: 'istanbul-topkapi-palace-second-court',
          emoji: '🚪',
          name: { el: 'Η Δεύτερη Αυλή', en: 'The Second Courtyard' },
          intro: {
            el:
              'Εδώ δούλευε η αυτοκρατορία. Από τη μία μεριά οι κουζίνες με τις καμινάδες, ' +
              'από την άλλη η αίθουσα όπου συνεδρίαζαν οι βεζίρηδες, και στη μέση ένας κήπος ' +
              'όπου κάποτε περπατούσαν παγώνια και γαζέλες. Κοίτα πρώτα την πύλη από την ' +
              'οποία μπήκες: έχει δύο πύργους σαν κάστρου, και δεν είναι τυχαίο.',
            en:
              'This is where the empire did its work. On one side the kitchens with their ' +
              'chimneys, on the other the hall where the viziers met, and in between a garden ' +
              'where peacocks and gazelles once wandered. Look first at the gate you came ' +
              'through: it has two towers like a castle, and that is not by accident.',
          },
          exhibits: [
            {
              id: 'istanbul-topkapi-palace-gate-of-salutation',
              name: { el: 'Η Πύλη του Χαιρετισμού', en: 'The Gate of Salutation' },
              blurb: {
                el:
                  'Η μεσαία πύλη του παλατιού, με τους δύο οκτάγωνους πύργους της, χωρίζει ' +
                  'την ανοιχτή πρώτη αυλή από τον χώρο όπου κυβερνιόταν η αυτοκρατορία. Μια ' +
                  'επιγραφή τη χρονολογεί τουλάχιστον στο 1542. Το πέρασμα φυλαγόταν ' +
                  'αυστηρά: κάθε επισκέπτης, όσο σπουδαίος κι αν ήταν, κατέβαινε από το ' +
                  'άλογο, γιατί μόνο ο σουλτάνος περνούσε καβάλα. Το είχαν πάρει από τους ' +
                  'Βυζαντινούς αυτοκράτορες, που έκαναν το ίδιο στην πύλη του δικού τους ' +
                  'παλατιού. Δεξιά, πριν την πύλη, υπάρχει μια μικρή κρήνη με ένα άσχημο ' +
                  'όνομα: του δήμιου. Λένε ότι έπλενε εκεί τα χέρια του, αν και οι ιστορικοί ' +
                  'δεν είναι σίγουροι.',
                en:
                  'The palace’s middle gate, with its two eight-sided towers, separates the ' +
                  'open first courtyard from the part where the empire was governed. An ' +
                  'inscription dates it to at least 1542. Passing through it was strictly ' +
                  'controlled: every visitor, however important, dismounted, because only the ' +
                  'sultan rode through. The Ottomans had borrowed the idea from the Byzantine ' +
                  'emperors, who did the same at the gate of their own palace. To the right, ' +
                  'before the gate, is a small fountain with an ugly name: the executioner’s. ' +
                  'People say he washed his hands there, though historians are not sure it ' +
                  'was ever really used that way.',
              },
              question: {
                q: {
                  el: 'Από ποιους πήραν οι Οθωμανοί τον κανόνα του ξεπεζέματος στην πύλη;',
                  en: 'Where did the Ottomans get the rule of dismounting at the gate?',
                },
                answers: [
                  { el: 'Από τους Βυζαντινούς', en: 'From the Byzantines' },
                  { el: 'Από τους Πέρσες βασιλιάδες', en: 'From the kings of Persia' },
                  { el: 'Από τους Γενουάτες εμπόρους', en: 'From the Genoese merchants' },
                  { el: 'Από τους Φαραώ της Αιγύπτου', en: 'From the pharaohs of Egypt' },
                ],
                explanation: {
                  el: 'Στη Χαλκή Πύλη του βυζαντινού παλατιού ίσχυε ο ίδιος κανόνας, και οι νέοι κύριοι της Πόλης τον κράτησαν.',
                  en: 'The same rule applied at the Chalke Gate of the Byzantine palace, and the city’s new masters kept it.',
                },
              },
            },
            {
              id: 'istanbul-topkapi-palace-kitchens',
              name: { el: 'Οι κουζίνες με τις είκοσι καμινάδες', en: 'The kitchens with twenty chimneys' },
              blurb: {
                el:
                  'Δέκα θολωτά κτίρια σε μια σειρά, με είκοσι φαρδιές καμινάδες που ' +
                  'φαίνονται από τη θάλασσα. Ήταν οι μεγαλύτερες κουζίνες της Οθωμανικής ' +
                  'Αυτοκρατορίας: πάνω από οκτακόσιοι άνθρωποι δούλευαν εδώ και ετοίμαζαν ' +
                  'φαγητό για περίπου τέσσερις χιλιάδες στόματα τη μέρα, με ξεχωριστή κουζίνα ' +
                  'για τα γλυκά και άλλη για τα ποτά. Μια φωτιά τις κατέστρεψε το 1574, και ο ' +
                  'Sinan, ο αρχιτέκτονας του σουλτάνου, τις ξανάχτισε και πρόσθεσε τις ' +
                  'καμινάδες. Σήμερα μέσα τους εκτίθενται 10.700 κινέζικες πορσελάνες, μια ' +
                  'από τις καλύτερες συλλογές του κόσμου, μαζεμένες πιάτο πιάτο επί ' +
                  'τετρακόσια χρόνια.',
                en:
                  'Ten domed buildings in a row, with twenty wide chimneys you can see from ' +
                  'the sea. They were the biggest kitchens in the Ottoman Empire: more than ' +
                  'eight hundred people worked here and prepared food for about four thousand ' +
                  'mouths a day, with a separate kitchen for sweets and another for drinks. A ' +
                  'fire destroyed them in 1574, and Sinan, the sultan’s architect, rebuilt ' +
                  'them and added the chimneys. Today they display 10,700 pieces of Chinese ' +
                  'porcelain, one of the finest collections in the world, gathered plate by ' +
                  'plate over four hundred years.',
              },
              question: {
                q: {
                  el: 'Πόσοι άνθρωποι έτρωγαν κάθε μέρα από αυτές τις κουζίνες;',
                  en: 'How many people ate from these kitchens every day?',
                },
                answers: [
                  { el: 'Περίπου 4.000', en: 'About 4,000' },
                  { el: 'Περίπου 40.000', en: 'About 40,000' },
                  { el: 'Περίπου 400', en: 'About 400' },
                  { el: 'Μόνο η οικογένεια', en: 'Only the family' },
                ],
                explanation: {
                  el: 'Το παλάτι ήταν μια μικρή πόλη: φρουροί, μάγειρες, κηπουροί, γραφιάδες, μαθητές, όλοι έτρωγαν εδώ.',
                  en: 'The palace was a small town: guards, cooks, gardeners, clerks and students all ate here.',
                },
              },
            },
            {
              id: 'istanbul-topkapi-palace-council-window',
              name: { el: 'Το κρυφό παραθυράκι του συμβουλίου', en: 'The council’s hidden window' },
              blurb: {
                el:
                  'Στην αίθουσα του συμβουλίου, κάτω από τον θόλο, οι βεζίρηδες κάθονταν σε ' +
                  'έναν χαμηλό καναπέ και αποφάσιζαν για φόρους, πολέμους και δίκες. Ψηλά ' +
                  'στον τοίχο υπάρχει ένα μικρό άνοιγμα με χρυσό πλέγμα. Πίσω του, από ένα ' +
                  'πέρασμα στον Πύργο της Δικαιοσύνης, μπορούσε να καθίσει ο σουλτάνος και ' +
                  'να ακούει χωρίς να τον βλέπει κανείς. Ένας λόγιος το περιέγραψε ήδη το ' +
                  '1527. Επειδή κανείς δεν ήξερε αν ήταν εκεί, όλοι μιλούσαν σαν να ήταν ' +
                  'πάντα. Η αίθουσα ξαναχτίστηκε μετά από φωτιά το 1665, και τα σημερινά της ' +
                  'χρυσά στολίδια είναι από το 1792 και το 1819.',
                en:
                  'In the council hall, under the dome, the viziers sat on a low sofa and ' +
                  'decided about taxes, wars and trials. High in the wall there is a small ' +
                  'opening covered with a golden grille. Behind it, reached by a passage from ' +
                  'the Tower of Justice, the sultan could sit and listen without anyone seeing ' +
                  'him. A scholar described it as early as 1527. Because nobody knew whether ' +
                  'he was there, everybody spoke as if he always was. The hall was rebuilt ' +
                  'after a fire in 1665, and its gilded decoration today dates from 1792 and ' +
                  '1819.',
              },
              question: {
                q: {
                  el: 'Γιατί μιλούσαν οι βεζίρηδες σαν να τους άκουγε πάντα ο σουλτάνος;',
                  en: 'Why did the viziers talk as if the sultan were always listening?',
                },
                answers: [
                  { el: 'Δεν ήξεραν πότε ήταν εκεί', en: 'They never knew when he was' },
                  { el: 'Ένας φρουρός τα κατέγραφε όλα', en: 'A guard wrote everything down' },
                  { el: 'Ο θόλος μετέφερε τη φωνή τους', en: 'The dome carried their voices' },
                  { el: 'Ήταν υποχρεωμένοι από τον νόμο', en: 'The law obliged them to do so' },
                ],
                explanation: {
                  el: 'Το πλέγμα κρύβει όποιον κάθεται πίσω του. Ένα άδειο παράθυρο φοβίζει όσο και ένα γεμάτο, αν δεν βλέπεις τη διαφορά.',
                  en: 'The grille hides whoever sits behind it. An empty window is as frightening as a full one when you cannot tell the difference.',
                },
              },
            },
          ],
        },
        {
          id: 'istanbul-topkapi-palace-treasury',
          emoji: '💎',
          name: { el: 'Το Θησαυροφυλάκιο', en: 'The Treasury' },
          intro: {
            el:
              'Τέσσερα δωμάτια στην τρίτη αυλή, γεμάτα με ό,τι μάζεψαν οι σουλτάνοι σε ' +
              'τετρακόσια χρόνια: θρόνους, δώρα βασιλιάδων, φτερά για τουρμπάνια γεμάτα ' +
              'πετράδια. Ο κόσμος στέκεται ουρά για δύο πράγματα, ένα διαμάντι και ένα ' +
              'μαχαίρι, και τα δύο έχουν ιστορία που κανείς δεν είναι σίγουρος ότι είναι ' +
              'αληθινή.',
            en:
              'Four rooms in the third courtyard, filled with what the sultans collected in ' +
              'four hundred years: thrones, gifts from kings, turban plumes crusted with ' +
              'jewels. People queue for two things, a diamond and a dagger, and both come ' +
              'with a story that nobody is sure is true.',
          },
          exhibits: [
            {
              id: 'istanbul-topkapi-palace-spoonmakers-diamond',
              name: { el: 'Το Διαμάντι του Κουταλά', en: 'The Spoonmaker’s Diamond' },
              blurb: {
                el:
                  'Ένα διαμάντι 86 καρατίων σε σχήμα αχλαδιού, δεμένο σε ασήμι και ' +
                  'τριγυρισμένο από 49 μικρότερα διαμάντια σε δύο σειρές, σαν φεγγάρι μέσα ' +
                  'σε αστέρια. Κρέμεται σε γυάλινη θήκη στον τοίχο του τρίτου δωματίου και ' +
                  'είναι το πιο πολύτιμο αντικείμενο του παλατιού. Κανείς δεν ξέρει στα ' +
                  'σίγουρα πώς έφτασε εδώ. Η πιο αγαπημένη ιστορία λέει ότι ένας φτωχός ' +
                  'ψαράς το βρήκε στα σκουπίδια, το πήγε σε έναν κοσμηματοπώλη, κι εκείνος ' +
                  'του είπε «είναι γυαλί» και του έδωσε τρία κουτάλια για τον κόπο του. Άλλη ' +
                  'ιστορία το φέρνει από τον Αλή Πασά των Ιωαννίνων. Και οι δύο μπορεί να ' +
                  'είναι ψέματα.',
                en:
                  'An 86-carat diamond shaped like a pear, set in silver and surrounded by 49 ' +
                  'smaller diamonds in two rows, like a moon among stars. It hangs in a glass ' +
                  'case on the wall of the third room and is the most valuable single object ' +
                  'in the palace. Nobody knows for certain how it got here. The favourite ' +
                  'story says a poor fisherman found it on a rubbish heap and took it to a ' +
                  'jeweller, who told him it was glass and gave him three spoons for his ' +
                  'trouble. Another story brings it from Ali Pasha of Ioannina. Both may well ' +
                  'be untrue.',
              },
              question: {
                q: {
                  el: 'Πόσα καράτια ζυγίζει το διαμάντι;',
                  en: 'How many carats does the diamond weigh?',
                },
                answers: [
                  { el: '86 καράτια', en: '86 carats' },
                  { el: '186 καράτια', en: '186 carats' },
                  { el: '8 καράτια', en: '8 carats' },
                  { el: '860 καράτια', en: '860 carats' },
                ],
                explanation: {
                  el: 'Ογδόντα έξι καράτια είναι περίπου 17 γραμμάρια: όσο ένα μεγάλο καρύδι, και το τέταρτο μεγαλύτερο διαμάντι αυτού του είδους στον κόσμο.',
                  en: 'Eighty-six carats is about 17 grams, the weight of a big walnut, and the fourth largest diamond of its kind in the world.',
                },
              },
            },
            {
              id: 'istanbul-topkapi-palace-topkapi-dagger',
              name: { el: 'Το εγχειρίδιο του Topkapı', en: 'The Topkapı Dagger' },
              blurb: {
                el:
                  'Ένα κυρτό μαχαίρι με τρία μεγάλα σμαράγδια στη χρυσή λαβή του και, στην ' +
                  'άκρη της, ένα μικροσκοπικό αγγλικό ρολόι κρυμμένο κάτω από ένα τέταρτο ' +
                  'σμαράγδι. Η θήκη του είναι γεμάτη διαμάντια και ζωγραφισμένα καλάθια με ' +
                  'φρούτα. Ο σουλτάνος Mahmud ο Α΄ το παρήγγειλε το 1746 ως δώρο ειρήνης για ' +
                  'τον σάχη της Περσίας, τον Nadir. Οι απεσταλμένοι ξεκίνησαν με χίλιους ' +
                  'συνοδούς, αλλά στον δρόμο έμαθαν ότι ο σάχης είχε πεθάνει, και γύρισαν ' +
                  'πίσω με το δώρο στα χέρια. Έτσι έμεινε εδώ. Το 1964 μια ταινία έδειξε ' +
                  'κλέφτες να προσπαθούν να το πάρουν, και από τότε είναι το πιο διάσημο ' +
                  'μαχαίρι του κόσμου.',
                en:
                  'A curved knife with three big emeralds in its golden handle and, at the ' +
                  'tip of the handle, a tiny English watch hidden under a fourth emerald. Its ' +
                  'sheath is covered with diamonds and painted baskets of fruit. Sultan ' +
                  'Mahmud I ordered it in 1746 as a peace gift for the Shah of Persia, Nadir. ' +
                  'The envoys set off with a thousand attendants, but on the way they learned ' +
                  'that the Shah had been killed, and they came home with the gift still in ' +
                  'their hands. That is why it is here. In 1964 a film showed thieves trying ' +
                  'to steal it, and it has been the most famous knife in the world ever since.',
              },
              question: {
                q: {
                  el: 'Γιατί το δώρο γύρισε πίσω στην Κωνσταντινούπολη;',
                  en: 'Why did the gift come back to Istanbul?',
                },
                answers: [
                  { el: 'Ο σάχης είχε πεθάνει', en: 'The Shah had died' },
                  { el: 'Ο σάχης το βρήκε άσχημο', en: 'The Shah thought it was ugly' },
                  { el: 'Οι απεσταλμένοι χάθηκαν', en: 'The envoys lost their way' },
                  { el: 'Το ρολόι του σταμάτησε', en: 'Its little watch had stopped' },
                ],
                explanation: {
                  el: 'Οι απεσταλμένοι έμαθαν για τον θάνατό του πριν φτάσουν στα σύνορα, και ένα δώρο για κάποιον που δεν υπάρχει πια δεν παραδίδεται.',
                  en: 'The envoys heard of his death before they reached the border, and a gift for someone who is gone does not get delivered.',
                },
              },
            },
            {
              id: 'istanbul-topkapi-palace-throne-of-ahmed',
              name: { el: 'Ο θρόνος του Ahmed του Α΄', en: 'The throne of Ahmed I' },
              blurb: {
                el:
                  'Στη μέση του δεύτερου δωματίου στέκεται ένας θρόνος από καρυδιά, ' +
                  'στολισμένος με φίλντισι και ταρταρούγα, με έναν ουρανό από πάνω και ένα ' +
                  'χρυσό κόσμημα με μεγάλο σμαράγδι να κρέμεται από αυτόν. Τον έφτιαξε ο ' +
                  'Sedefkar Mehmed Ağa, ο ίδιος μάστορας που έχτισε το Γαλάζιο Τζαμί για τον ' +
                  'ίδιο σουλτάνο. Το «Sedefkar» στο όνομά του σημαίνει «αυτός που δουλεύει το ' +
                  'σεντέφι», το γυαλιστερό εσωτερικό των κοχυλιών, και εδώ βλέπεις γιατί το ' +
                  'πήρε. Γύρω από τον θρόνο υπάρχουν φτερά για τουρμπάνια, γεμάτα διαμάντια ' +
                  'και ρουμπίνια, που φορούσαν οι σουλτάνοι και, μερικά, τα άλογά τους.',
                en:
                  'In the middle of the second room stands a throne of walnut wood, inlaid ' +
                  'with mother-of-pearl and tortoiseshell, with a canopy above it and a golden ' +
                  'pendant holding a large emerald hanging underneath. It was made by Sedefkar ' +
                  'Mehmed Agha, the same master who built the Blue Mosque for the same sultan. ' +
                  'The “Sedefkar” in his name means “the one who works mother-of-pearl”, the ' +
                  'shiny inside of a seashell, and here you can see why he earned it. Around ' +
                  'the throne are turban plumes crusted with diamonds and rubies, worn by the ' +
                  'sultans and, some of them, by their horses.',
              },
              question: {
                q: {
                  el: 'Τι άλλο έφτιαξε ο μάστορας αυτού του θρόνου;',
                  en: 'What else did the maker of this throne build?',
                },
                answers: [
                  { el: 'Το Γαλάζιο Τζαμί', en: 'The Blue Mosque' },
                  { el: 'Τη Γέφυρα του Γαλατά', en: 'The Galata Bridge' },
                  { el: 'Τον Πύργο του Γαλατά', en: 'The Galata Tower' },
                  { el: 'Το Μεγάλο Παζάρι', en: 'The Grand Bazaar' },
                ],
                explanation: {
                  el: 'Ο Sedefkar Mehmed Ağa ήταν ο αρχιτέκτονας του Ahmed του Α΄: πρώτα του έφτιαξε θρόνο, μετά το τζαμί απέναντι από την Αγία Σοφία.',
                  en: 'Sedefkar Mehmed Agha was Ahmed I’s architect: first a throne, then the mosque across from Hagia Sophia.',
                },
              },
            },
          ],
        },
      ],
      riddles: [
        {
          id: 'istanbul-topkapi-palace-riddle-1',
          difficulty: 1,
          prompt: {
            el:
              'Λένε πως με βρήκαν στα σκουπίδια και με αντάλλαξαν με τρία φτηνά πράγματα ' +
              'από την κουζίνα. Τώρα κρέμομαι σε έναν τοίχο με σαράντα εννιά μικρές αδελφές ' +
              'γύρω μου, και κανείς δεν συμφωνεί από πού ήρθα.',
            en:
              'They say I was found on a rubbish heap and traded for three cheap things from ' +
              'a kitchen. Now I hang on a wall with forty-nine little sisters around me, and ' +
              'nobody agrees where I came from.',
          },
          hint: {
            el: 'Είμαι πέτρα, αλλά όχι συνηθισμένη: ζυγίζω 86 καράτια.',
            en: 'I am a stone, but not an ordinary one: I weigh 86 carats.',
          },
          answerExhibitId: 'istanbul-topkapi-palace-spoonmakers-diamond',
        },
        {
          id: 'istanbul-topkapi-palace-riddle-2',
          difficulty: 2,
          prompt: {
            el:
              'Με έφτιαξαν δώρο για έναν βασιλιά στην Περσία, αλλά εκείνος πέθανε πριν ' +
              'φτάσω, και γύρισα σπίτι χωρίς να ανοιχτώ ποτέ. Τρεις πράσινες πέτρες κάθονται ' +
              'στη λαβή μου και ένα μικρό ρολόι κρύβεται στην άκρη της.',
            en:
              'I was made as a present for a king in Persia, but he died before I could ' +
              'reach him, so I came home unopened. Three green stones sit in my handle and a ' +
              'small clock hides at its tip.',
          },
          hint: {
            el: 'Μια ταινία του 1964 έβαλε κλέφτες να με κυνηγούν.',
            en: 'A film from 1964 sent thieves after me.',
          },
          answerExhibitId: 'istanbul-topkapi-palace-topkapi-dagger',
        },
        {
          id: 'istanbul-topkapi-palace-riddle-3',
          difficulty: 3,
          prompt: {
            el:
              'Είμαι ένα άνοιγμα ψηλά σε έναν τοίχο, σκεπασμένο με χρυσό δίχτυ. Κανείς στο ' +
              'δωμάτιο από κάτω δεν μπορούσε να πει αν καθόταν κάποιος πίσω μου, κι έτσι ' +
              'μιλούσαν όλοι σαν να καθόταν πάντα.',
            en:
              'I am an opening high in a wall, covered with a golden net. Nobody in the hall ' +
              'below could tell whether somebody sat behind me, so they all spoke as if ' +
              'somebody always did.',
          },
          hint: {
            el: 'Ψάξε εκεί που συνεδρίαζαν οι βεζίρηδες.',
            en: 'Look where the viziers held their meetings.',
          },
          answerExhibitId: 'istanbul-topkapi-palace-council-window',
        },
      ],
    },
  },

  // ------------------------------------------------------- archaeology museums
  {
    id: 'istanbul-archaeology-museums',
    cityId: 'istanbul',
    emoji: '🏺',
    category: 'museum',
    difficulty: 3,

    name: { el: 'Αρχαιολογικά Μουσεία Κωνσταντινούπολης', en: 'Istanbul Archaeology Museums' },
    tagline: {
      el: 'Ένα εκατομμύριο αντικείμενα και η παλιότερη συνθήκη ειρήνης του κόσμου',
      en: 'A million objects and the oldest peace treaty in the world',
    },
    story: {
      el:
        'Το πρώτο μουσείο της Τουρκίας ξεκίνησε το 1869 μέσα σε μια παλιά βυζαντινή ' +
        'εκκλησία που οι Οθωμανοί χρησιμοποιούσαν ως αποθήκη όπλων. Το 1881 ανέλαβε ένας ' +
        'ζωγράφος και αρχαιολόγος, ο Osman Hamdi Bey, και το άλλαξε όλο. Το 1887 έσκαψε ' +
        'στη Σιδώνα, στον σημερινό Λίβανο, και βρήκε τους τάφους των βασιλιάδων της: ' +
        'μαρμάρινες σαρκοφάγους τόσο μεγάλες και τόσο ωραίες, που το μουσείο χρειάστηκε ' +
        'καινούργιο σπίτι για να τις χωρέσει. Το κύριο κτίριο άνοιξε στις 13 Ιουνίου 1891, ' +
        'και η πρόσοψή του αντιγράφει την πιο διάσημη από αυτές, τη Σαρκοφάγο του ' +
        'Αλεξάνδρου. Σήμερα είναι τρία μουσεία μαζί, με πάνω από ένα εκατομμύριο ' +
        'αντικείμενα: το κύριο κτίριο, το Μουσείο της Αρχαίας Ανατολής, και το Πλακιδωτό ' +
        'Περίπτερο του 1472, ένα από τα παλιότερα οθωμανικά κτίρια της Πόλης που δεν ήταν ' +
        'ποτέ τζαμί. Σε μια ' +
        'βιτρίνα βρίσκεται η πιο παλιά συνθήκη ειρήνης που σώζεται, σε πήλινη πινακίδα· ' +
        'ένα αντίγραφό της κρέμεται στον ΟΗΕ. Λίγο πιο πέρα, το σαγόνι ενός μπρούντζινου ' +
        'φιδιού από τον Ιππόδρομο, και μια σαρκοφάγος 32 τόνων που το 1901 την έσυραν ως ' +
        'εδώ βουβάλια.',
      en:
        'The first museum in Türkiye began in 1869 inside an old Byzantine church that the ' +
        'Ottomans had been using as a weapons store. In 1881 a painter and archaeologist, ' +
        'Osman Hamdi Bey, took charge and changed everything. In 1887 he dug at Sidon, in ' +
        'today’s Lebanon, and found the tombs of its kings: marble coffins so big and so ' +
        'beautiful that the museum needed a new home to hold them. The main building opened ' +
        'on 13 June 1891, and its front copies the most famous of them, the Alexander ' +
        'Sarcophagus. Today it is three museums in one, with more than a million objects: ' +
        'the main building, the Museum of the Ancient Orient, and the Tiled Kiosk of 1472, ' +
        'one of the oldest Ottoman buildings in the city that was never a mosque. In one ' +
        'case lies the oldest ' +
        'peace treaty that survives anywhere, on a clay tablet; a copy hangs at the United ' +
        'Nations. A little further on, the jaw of a bronze snake from the Hippodrome, and a ' +
        '32-ton sarcophagus that water buffaloes dragged here in 1901.',
    },
    facts: [
      {
        el: 'Ξεκίνησε το 1869 ως Αυτοκρατορικό Μουσείο, το πρώτο μουσείο της Τουρκίας.',
        en: 'It began in 1869 as the Imperial Museum, the first museum in Türkiye.',
      },
      {
        el: 'Το κύριο κτίριο άνοιξε στις 13 Ιουνίου 1891 και η πρόσοψή του αντιγράφει τη Σαρκοφάγο του Αλεξάνδρου.',
        en: 'The main building opened on 13 June 1891 and its façade copies the Alexander Sarcophagus.',
      },
      {
        el: 'Φυλάει πάνω από ένα εκατομμύριο αντικείμενα.',
        en: 'It holds over a million objects.',
      },
      {
        el: 'Το Πλακιδωτό Περίπτερο, του 1472, είναι ένα από τα παλιότερα οθωμανικά κτίρια της Πόλης που δεν ήταν ποτέ τζαμί.',
        en: 'The Tiled Kiosk, from 1472, is one of the oldest Ottoman buildings in the city that was never a mosque.',
      },
    ],
    location: {
      lat: 41.01167,
      lng: 28.98139,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q636978', deltaM: 0 },
        { kind: 'osm', ref: 'way/335374188', deltaM: 15 },
      ],
      verifiedAt: '2026-09-12',
      note: 'Wikipedia carries no coordinate for this article, so the grade is B on two sources.',
      // The museum's own page on muze.gov.tr gives the address as Alemdar Caddesi,
      // Osman Hamdi Bey Yokuşu, Gülhane: the lane climbs from the park gate.
      findIt: {
        el: 'Η είσοδος είναι στην ανηφόρα Osman Hamdi Bey, που ξεκινά από την πύλη του πάρκου Gülhane στην Alemdar Caddesi.',
        en: 'The way in is up the Osman Hamdi Bey slope, which starts at the Gülhane Park gate on Alemdar Caddesi.',
      },
      map: { x: 0.627, y: 0.727 },
    },
    question: {
      q: {
        el: 'Τι αντέγραψε ο αρχιτέκτονας για την πρόσοψη του κύριου κτιρίου;',
        en: 'What did the architect copy for the front of the main building?',
      },
      answers: [
        { el: 'Μια σαρκοφάγο από μέσα', en: 'A sarcophagus inside' },
        { el: 'Τον Παρθενώνα της Αθήνας', en: 'The Parthenon in Athens' },
        { el: 'Την πύλη του παλατιού δίπλα', en: 'The palace’s Imperial Gate' },
        { el: 'Μια τράπεζα στο Παρίσι', en: 'A bank in Paris' },
      ],
      explanation: {
        el:
          'Η Σαρκοφάγος του Αλεξάνδρου έχει σχήμα μικρού ναού. Ο αρχιτέκτονας Alexander ' +
          'Vallaury της έδωσε ένα κτίριο με το ίδιο πρόσωπο.',
        en:
          'The Alexander Sarcophagus is shaped like a little temple. The architect, ' +
          'Alexander Vallaury, gave it a building with the same face.',
      },
    },

    museum: {
      doorNote: {
        el: 'Κλειστό τη Δευτέρα. Οι σαρκοφάγοι της Σιδώνας είναι στο κύριο κτίριο, οι πήλινες πινακίδες στο μικρότερο κτίριο απέναντι.',
        en: 'Closed on Mondays. The Sidon sarcophagi are in the main building; the clay tablets are in the smaller building across the courtyard.',
      },
      rooms: [
        {
          id: 'istanbul-archaeology-museums-stone-coffins',
          emoji: '⚱️',
          name: { el: 'Τα μεγάλα πέτρινα φέρετρα', en: 'The great stone coffins' },
          intro: {
            el:
              'Μια σαρκοφάγος είναι ένα φέρετρο από πέτρα, και οι βασιλιάδες της Σιδώνας ' +
              'ήθελαν τα δικά τους σκαλισμένα σαν μικρούς ναούς. Ο Osman Hamdi Bey τα έφερε ' +
              'με καράβι το 1887, και το μουσείο χτίστηκε γύρω τους. Κοίτα από κοντά: σε ' +
              'μερικά σώζεται ακόμα το χρώμα, δυόμισι χιλιάδες χρόνια μετά.',
            en:
              'A sarcophagus is a coffin made of stone, and the kings of Sidon wanted theirs ' +
              'carved like little temples. Osman Hamdi Bey shipped them here in 1887, and the ' +
              'museum was built around them. Look closely: on some of them the paint is ' +
              'still there, two and a half thousand years later.',
          },
          exhibits: [
            {
              id: 'istanbul-archaeology-museums-alexander-sarcophagus',
              name: { el: 'Η Σαρκοφάγος του Αλεξάνδρου', en: 'The Alexander Sarcophagus' },
              blurb: {
                el:
                  'Ένα φέρετρο από πεντελικό μάρμαρο, σκαλισμένο λίγο μετά το 332 π.Χ. σαν ' +
                  'μικρός ελληνικός ναός. Στη μία μακριά πλευρά ο Μέγας Αλέξανδρος, καβάλα ' +
                  'και με λεοντή στο κεφάλι, πολεμά τους Πέρσες στη μάχη της Ισσού· στην ' +
                  'άλλη, Μακεδόνες και Πέρσες κυνηγούν μαζί λιοντάρια. Πήρε το όνομά του από ' +
                  'εκείνον, αλλά δεν ήταν ποτέ δικό του: μάλλον φτιάχτηκε για τον Αβδαλώνυμο, ' +
                  'τον βασιλιά που ο Αλέξανδρος έβαλε στη Σιδώνα. Όταν βγήκε από το χώμα το ' +
                  '1887, οι στρατιώτες είχαν ακόμα τα χρώματά τους πάνω τους, και λίγο από ' +
                  'αυτό το χρώμα φαίνεται ακόμα.',
                en:
                  'A coffin of Pentelic marble, carved soon after 332 BC in the shape of a ' +
                  'small Greek temple. On one long side Alexander the Great, on horseback and ' +
                  'wearing a lion skin on his head, fights the Persians at the battle of ' +
                  'Issus; on the other, Macedonians and Persians hunt lions together. It took ' +
                  'his name, but it was never his: it was probably made for Abdalonymus, the ' +
                  'king Alexander installed at Sidon. When it came out of the ground in 1887 ' +
                  'the soldiers still had their colours on them, and a little of that paint ' +
                  'can still be seen.',
              },
              question: {
                q: {
                  el: 'Ποιος ήταν μάλλον θαμμένος μέσα σε αυτή τη σαρκοφάγο;',
                  en: 'Who was most likely buried in this sarcophagus?',
                },
                answers: [
                  { el: 'Ένας βασιλιάς της Σιδώνας', en: 'A king of Sidon' },
                  { el: 'Ο ίδιος ο Μέγας Αλέξανδρος', en: 'Alexander the Great himself' },
                  { el: 'Ένας Πέρσης στρατηγός', en: 'A Persian army general' },
                  { el: 'Ένας Ρωμαίος αυτοκράτορας', en: 'A Roman emperor' },
                ],
                explanation: {
                  el: 'Ο Αβδαλώνυμος ήταν ένας κηπουρός που ο Αλέξανδρος τον έκανε βασιλιά. Το φέρετρο δείχνει τον φίλο του, όχι τον ίδιο.',
                  en: 'Abdalonymus was a gardener whom Alexander made a king. The coffin shows his friend, not himself.',
                },
              },
            },
            {
              id: 'istanbul-archaeology-museums-tabnit-sarcophagus',
              name: { el: 'Η σαρκοφάγος του βασιλιά Τάβνιτ', en: 'The sarcophagus of King Tabnit' },
              blurb: {
                el:
                  'Μια μαύρη σαρκοφάγος σε σχήμα ανθρώπου, φτιαγμένη πρώτα στην Αίγυπτο για ' +
                  'έναν στρατηγό, όπως λένε τα ιερογλυφικά της. Οι Φοίνικες της Σιδώνας την ' +
                  'πήραν και έθαψαν μέσα τον βασιλιά τους Τάβνιτ, γύρω στο 500 π.Χ., και ' +
                  'χάραξαν από κάτω μια δεύτερη επιγραφή στη δική τους γλώσσα: μια κατάρα για ' +
                  'όποιον την ανοίξει. Το 1887 οι εργάτες την άνοιξαν έτσι κι αλλιώς. Μέσα ' +
                  'επέπλεε ο βασιλιάς, σχεδόν άθικτος, σε ένα παράξενο υγρό. Όσο ο Osman ' +
                  'Hamdi Bey έτρωγε μεσημεριανό, αναποδογύρισαν τη σαρκοφάγο και έχυσαν το ' +
                  'υγρό στην άμμο. Το μυστικό του χάθηκε για πάντα.',
                en:
                  'A black sarcophagus in the shape of a person, first made in Egypt for a ' +
                  'general, as its hieroglyphs say. The Phoenicians of Sidon took it and ' +
                  'buried their king Tabnit inside, around 500 BC, and carved a second ' +
                  'inscription below in their own language: a curse on anyone who opened it. ' +
                  'In 1887 the workmen opened it anyway. Inside, the king was floating, almost ' +
                  'untouched, in a strange liquid. While Osman Hamdi Bey was away at lunch, ' +
                  'they tipped the coffin over and poured the liquid out into the sand. Its ' +
                  'secret was lost for good.',
              },
              question: {
                q: {
                  el: 'Τι έγινε με το υγρό που φύλαγε τον βασιλιά;',
                  en: 'What happened to the liquid that preserved the king?',
                },
                answers: [
                  { el: 'Χύθηκε στην άμμο', en: 'It was poured away' },
                  { el: 'Πουλήθηκε σε γιατρούς', en: 'It was sold to doctors' },
                  { el: 'Φυλάγεται σε μπουκάλι εδώ', en: 'It is kept in a bottle here' },
                  { el: 'Εξατμίστηκε στον ήλιο', en: 'It evaporated in the sun' },
                ],
                explanation: {
                  el: 'Οι εργάτες το έχυσαν πριν προλάβει κανείς να το εξετάσει. Ο Hamdi Bey κράτησε μόνο λίγη λάσπη από τον πάτο.',
                  en: 'The workmen poured it out before anyone could study it. Hamdi Bey kept only a little sludge from the bottom.',
                },
              },
            },
            {
              id: 'istanbul-archaeology-museums-sidamara-sarcophagus',
              name: { el: 'Η σαρκοφάγος των Σιδαμάρων', en: 'The Sidamara Sarcophagus' },
              blurb: {
                el:
                  'Η πιο βαριά σαρκοφάγος του κόσμου: 32 τόνοι ρωμαϊκού μαρμάρου από τον 3ο ' +
                  'αιώνα μ.Χ., σκαλισμένη με κολόνες, αψίδες και ολόκληρες φιγούρες, σαν ' +
                  'πρόσοψη θεάτρου. Στο καπάκι της ξαπλώνουν ο νεκρός και η γυναίκα του. Την ' +
                  'ανακάλυψε ένας Άγγλος αξιωματικός το 1882 σε ένα χωριό της Ανατολίας, ' +
                  'αλλά ήταν τόσο βαριά που την ξανάθαψε. Ένας χωρικός την ξαναβρήκε το 1898, ' +
                  'και το 1901 τη μετέφεραν ως εδώ με βουβάλια και ειδικά βαγόνια τρένου. Ο ' +
                  'Άγγλος είχε πάρει μαζί του ένα μικρό κεφάλι Έρωτα από τη διακόσμησή της· ' +
                  'ένα μουσείο του Λονδίνου το έστειλε πίσω το 2020, και το κεφάλι ξαναμπήκε ' +
                  'στη θέση του.',
                en:
                  'The heaviest sarcophagus in the world: 32 tons of Roman marble from the ' +
                  '3rd century AD, carved with columns, arches and whole figures, like the ' +
                  'front of a theatre. On the lid lie the dead man and his wife. An English ' +
                  'officer discovered it in 1882 in a village in Anatolia, but it was so heavy ' +
                  'that he buried it again. A villager found it once more in 1898, and in 1901 ' +
                  'it was brought here with water buffaloes and specially built railway ' +
                  'wagons. The Englishman had taken a small head of Eros from its decoration ' +
                  'with him; a London museum sent it back in 2020, and the head went back into ' +
                  'its place.',
              },
              question: {
                q: {
                  el: 'Γιατί ξανάθαψε τη σαρκοφάγο ο άνθρωπος που τη βρήκε το 1882;',
                  en: 'Why did the man who found it in 1882 bury it again?',
                },
                answers: [
                  { el: 'Ήταν πολύ βαριά', en: 'It was too heavy' },
                  { el: 'Φοβήθηκε την κατάρα', en: 'He feared its curse' },
                  { el: 'Την έκρυβε από κλέφτες', en: 'To hide it from thieves' },
                  { el: 'Οι χωρικοί τον έδιωξαν', en: 'Villagers chased him off' },
                ],
                explanation: {
                  el: 'Τριάντα δύο τόνοι δεν κουνιούνται με κάρα. Χρειάστηκαν είκοσι χρόνια, βουβάλια και τρένο.',
                  en: 'Thirty-two tons will not move on a cart. It took twenty years, buffaloes and a train.',
                },
              },
            },
          ],
        },
        {
          id: 'istanbul-archaeology-museums-small-things',
          emoji: '📜',
          name: { el: 'Μικρά πράγματα που άλλαξαν τον κόσμο', en: 'Small things that changed the world' },
          intro: {
            el:
              'Στο Μουσείο της Αρχαίας Ανατολής τα πιο σπουδαία εκθέματα χωράνε στη χούφτα ' +
              'σου. Είναι πινακίδες από ψημένο πηλό, γραμμένες με σφηνοειδή γράμματα πριν ' +
              'από τέσσερις χιλιάδες χρόνια: νόμοι, συνθήκες, ακόμα και ένα τραγούδι. Δίπλα ' +
              'τους, ζώα από γυαλιστερά τούβλα και το σαγόνι ενός φιδιού από τον Ιππόδρομο.',
            en:
              'In the Museum of the Ancient Orient the most important exhibits fit in your ' +
              'hand. They are tablets of baked clay, written in wedge-shaped letters four ' +
              'thousand years ago: laws, treaties, even a song. Beside them, animals made of ' +
              'shiny bricks and the jaw of a snake from the Hippodrome.',
          },
          exhibits: [
            {
              id: 'istanbul-archaeology-museums-kadesh-treaty',
              name: { el: 'Η συνθήκη ειρήνης του Καντές', en: 'The peace treaty of Kadesh' },
              blurb: {
                el:
                  'Γύρω στο 1259 π.Χ. ο Φαραώ Ραμσής ο Β΄ και ο βασιλιάς των Χετταίων ' +
                  'Χαττουσίλι ο Γ΄, που είχαν πολεμήσει στο Καντές, υποσχέθηκαν να ζήσουν σαν ' +
                  'αδέλφια και να βοηθούν ο ένας τον άλλον. Η συμφωνία γράφτηκε σε ασημένιες ' +
                  'πλάκες, που χάθηκαν, αλλά και οι δύο πλευρές κράτησαν αντίγραφα: οι ' +
                  'Αιγύπτιοι στους τοίχους των ναών τους, οι Χετταίοι σε πήλινες πινακίδες. ' +
                  'Το 1906 οι αρχαιολόγοι τις βρήκαν στα ερείπια της πρωτεύουσας των Χετταίων, ' +
                  'στην Ανατολία. Δύο από τις τρεις είναι εδώ. Είναι η πιο παλιά συνθήκη ' +
                  'ειρήνης που σώζεται, και ένα μεγάλο αντίγραφό της κρέμεται στον τοίχο του ' +
                  'ΟΗΕ στη Νέα Υόρκη.',
                en:
                  'Around 1259 BC Pharaoh Ramesses II and the Hittite king Hattusili III, who ' +
                  'had fought each other at Kadesh, promised to live as brothers and to help ' +
                  'one another. The agreement was written on silver tablets, which are lost, ' +
                  'but both sides kept copies: the Egyptians on the walls of their temples, ' +
                  'the Hittites on clay tablets. In 1906 archaeologists found those in the ' +
                  'ruins of the Hittite capital, in Anatolia. Two of the three are here. It is ' +
                  'the oldest peace treaty that survives, and a large copy hangs on a wall at ' +
                  'the United Nations in New York.',
              },
              question: {
                q: {
                  el: 'Πού κρέμεται σήμερα ένα μεγάλο αντίγραφο αυτής της συνθήκης;',
                  en: 'Where does a large copy of this treaty hang today?',
                },
                answers: [
                  { el: 'Στα Ηνωμένα Έθνη', en: 'At the United Nations' },
                  { el: 'Στις πυραμίδες', en: 'In Cairo, at the pyramids' },
                  { el: 'Στο παλάτι Topkapı', en: 'In the Topkapı Palace treasury' },
                  { el: 'Στη Βουλή στην Άγκυρα', en: 'In the parliament in Ankara' },
                ],
                explanation: {
                  el: 'Οι χώρες του κόσμου διάλεξαν την πιο παλιά υπόσχεση ειρήνης για τον τοίχο του σπιτιού τους στη Νέα Υόρκη.',
                  en: 'The nations of the world chose the oldest promise of peace for the wall of their house in New York.',
                },
              },
            },
            {
              id: 'istanbul-archaeology-museums-tablet-2461',
              name: { el: 'Η πινακίδα Istanbul 2461', en: 'Tablet Istanbul 2461' },
              blurb: {
                el:
                  'Μια μικρή πινακίδα από πηλό, μεγάλη όσο μια παλάμη, γραμμένη στα ' +
                  'σουμεριακά πριν από περίπου τέσσερις χιλιάδες χρόνια, στην πόλη Νιππούρ. ' +
                  'Βρέθηκε ανάμεσα σε δεκάδες χιλιάδες άλλες και κοιμόταν σε ένα συρτάρι του ' +
                  'μουσείου ώσπου, το 1951, ο μελετητής Samuel Kramer την έβγαλε για να ' +
                  'δει τι λέει. Ήταν ένα ποίημα: μια νύφη τραγουδά στον βασιλιά Σου-Σιν πόσο ' +
                  'τον αγαπά. Ο Kramer έγραψε ότι το διάβασε ξανά και ξανά, μη πιστεύοντας ' +
                  'ότι κρατά στα χέρια του ένα από τα πιο παλιά ερωτικά τραγούδια που έγραψε ' +
                  'ποτέ άνθρωπος. Και δεν ήταν καν σε ξεχωριστή βιτρίνα.',
                en:
                  'A small clay tablet, the size of a palm, written in Sumerian about four ' +
                  'thousand years ago in the city of Nippur. It was found among tens of ' +
                  'thousands of others and slept in a museum drawer until 1951, when the ' +
                  'scholar Samuel Kramer took it out to see what it said. It was a poem: a ' +
                  'bride sings to King Shu-Sin how much she loves him. Kramer wrote that he ' +
                  'read it again and again, unable to believe that he was holding one of the ' +
                  'oldest love songs ever written down by a human hand. And it had not even ' +
                  'had a case of its own.',
              },
              question: {
                q: {
                  el: 'Πού βρισκόταν η πινακίδα όταν ο Kramer την ανακάλυψε το 1951;',
                  en: 'Where was the tablet when Kramer discovered it in 1951?',
                },
                answers: [
                  { el: 'Σε ένα συρτάρι', en: 'In a drawer' },
                  { el: 'Θαμμένη σε έναν τάφο', en: 'Buried in a tomb' },
                  { el: 'Στη βιβλιοθήκη', en: 'In the palace library' },
                  { el: 'Στον βυθό του Κεράτιου', en: 'On the seabed' },
                ],
                explanation: {
                  el: 'Το μουσείο είχε 74.000 πινακίδες. Η πιο όμορφη περίμενε ήσυχα στο συρτάρι της, μέχρι να βρεθεί κάποιος να τη διαβάσει.',
                  en: 'The museum had 74,000 tablets. The loveliest waited quietly in its drawer until somebody came to read it.',
                },
              },
            },
            {
              id: 'istanbul-archaeology-museums-serpent-head',
              name: { el: 'Το σαγόνι του μπρούντζινου φιδιού', en: 'The jaw of the bronze snake' },
              blurb: {
                el:
                  'Στον Ιππόδρομο στέκεται μια στριφτή μπρούντζινη κολόνα από τρία ' +
                  'πλεγμένα φίδια, που χύτευσαν οι Έλληνες μετά τη νίκη τους στις Πλαταιές, ' +
                  'το 479 π.Χ. Τα τρία κεφάλια της κρατούσαν κάποτε έναν χρυσό τρίποδα στους ' +
                  'Δελφούς. Στην Πόλη έμειναν στη θέση τους πάνω από χίλια χρόνια, και οι ' +
                  'Οθωμανοί πίστευαν ότι φύλαγαν την πόλη από τα φίδια. Ένα σαγόνι λείπει από ' +
                  'τον 16ο αιώνα· λένε ότι το έσπασε ένας σουλτάνος για να δείξει τη δύναμή ' +
                  'του. Τη νύχτα της 20ής Οκτωβρίου 1700 τα κεφάλια έπεσαν όλα μαζί. Αυτό το ' +
                  'κομμάτι, το πάνω σαγόνι ενός από αυτά, είναι ό,τι βρέθηκε.',
                en:
                  'In the Hippodrome stands a twisted bronze column of three intertwined ' +
                  'snakes, cast by the Greeks after their victory at Plataea in 479 BC. Its ' +
                  'three heads once held a golden tripod at Delphi. In this city they stayed ' +
                  'in place for more than a thousand years, and the Ottomans believed they ' +
                  'protected the city from snakes. One jaw has been missing since the 16th ' +
                  'century; people say a sultan broke it off to show his strength. On the ' +
                  'night of 20 October 1700 the heads all fell together. This piece, the ' +
                  'upper jaw of one of them, is all that was found.',
              },
              question: {
                q: {
                  el: 'Τι κρατούσαν τα τρία κεφάλια όταν η κολόνα ήταν στους Δελφούς;',
                  en: 'What did the three heads hold when the column stood at Delphi?',
                },
                answers: [
                  { el: 'Έναν χρυσό τρίποδα', en: 'A golden tripod' },
                  { el: 'Ένα άγαλμα του Απόλλωνα', en: 'A statue of Apollo' },
                  { el: 'Μια λάμπα που έκαιγε πάντα', en: 'A lamp that never went out' },
                  { el: 'Ένα καζάνι με νερό', en: 'A cauldron of water' },
                ],
                explanation: {
                  el: 'Ο χρυσός τρίποδας χάθηκε αιώνες πριν η κολόνα φύγει από τους Δελφούς· ο μπρούντζος από κάτω έμεινε.',
                  en: 'The golden tripod was gone centuries before the column left Delphi; the bronze underneath stayed.',
                },
              },
            },
            {
              id: 'istanbul-archaeology-museums-ishtar-animals',
              name: { el: 'Τα ζώα της Πύλης της Ιστάρ', en: 'The animals of the Ishtar Gate' },
              blurb: {
                el:
                  'Λιοντάρια, ταύροι και δράκοι από γυαλιστερά τούβλα, σε βαθύ γαλάζιο, ' +
                  'κίτρινο και άσπρο. Στόλιζαν την Πύλη της Ιστάρ και τον μεγάλο δρόμο της ' +
                  'Βαβυλώνας, που έχτισε ο βασιλιάς Ναβουχοδονόσορ ο Β΄ πριν από περίπου ' +
                  '2.600 χρόνια, στο σημερινό Ιράκ. Κάθε ζώο είναι φτιαγμένο από πολλά ' +
                  'τούβλα, το καθένα ψημένο και βαμμένο ξεχωριστά, που έπρεπε να ταιριάξουν ' +
                  'στον τοίχο σαν παζλ. Γερμανοί αρχαιολόγοι τα έσκαψαν στις αρχές του 20ού ' +
                  'αιώνα και μοιράστηκαν τα ευρήματα με το μουσείο εδώ. Ο δράκος, με κεφάλι ' +
                  'φιδιού, πόδια λιονταριού και αετού, ήταν το ζώο του θεού Μαρδούκ.',
                en:
                  'Lions, bulls and dragons made of glazed bricks, in deep blue, yellow and ' +
                  'white. They decorated the Ishtar Gate and the great processional street of ' +
                  'Babylon, built by King Nebuchadnezzar II about 2,600 years ago, in today’s ' +
                  'Iraq. Each animal is made of many bricks, every one fired and painted ' +
                  'separately, that had to fit together on the wall like a puzzle. German ' +
                  'archaeologists dug them up in the early 20th century and shared the finds ' +
                  'with the museum here. The dragon, with a snake’s head and the legs of a ' +
                  'lion and an eagle, was the animal of the god Marduk.',
              },
              question: {
                q: {
                  el: 'Από τι είναι φτιαγμένα αυτά τα ζώα;',
                  en: 'What are these animals made of?',
                },
                answers: [
                  { el: 'Από γυαλιστερά τούβλα', en: 'Glazed bricks' },
                  { el: 'Από ζωγραφισμένο μάρμαρο', en: 'Painted marble' },
                  { el: 'Από χυτό μπρούντζο', en: 'Cast bronze' },
                  { el: 'Από σκαλισμένο ξύλο κέδρου', en: 'Carved cedar wood' },
                ],
                explanation: {
                  el: 'Κάθε τούβλο ψηνόταν με το κομμάτι του ζώου επάνω και μετά σκεπαζόταν με γυάλινο χρώμα. Γι’ αυτό λάμπουν ακόμα.',
                  en: 'Each brick was fired with its piece of the animal on it and then coated in glassy colour. That is why they still shine.',
                },
              },
            },
          ],
        },
      ],
      riddles: [
        {
          id: 'istanbul-archaeology-museums-riddle-1',
          difficulty: 1,
          prompt: {
            el:
              'Με ονόμασαν από έναν διάσημο βασιλιά, αλλά εκείνος δεν ξάπλωσε ποτέ μέσα ' +
              'μου. Στα πλευρά μου ζωγραφισμένοι στρατιώτες πολεμούν και κυνηγούν λιοντάρια, ' +
              'και λίγο από το χρώμα μου κρατάει ακόμα, δύο χιλιάδες τριακόσια χρόνια μετά.',
            en:
              'People named me after a famous king, but he never lay inside me. On my sides ' +
              'painted soldiers fight and hunt lions, and a little of my colour is still ' +
              'holding on, two thousand three hundred years later.',
          },
          hint: {
            el: 'Το κτίριο που σε περιβάλλει αντέγραψε το πρόσωπό μου.',
            en: 'The building around you copied my face.',
          },
          answerExhibitId: 'istanbul-archaeology-museums-alexander-sarcophagus',
        },
        {
          id: 'istanbul-archaeology-museums-riddle-2',
          difficulty: 2,
          prompt: {
            el:
              'Είμαι μια μικρή πλάκα από ψημένο πηλό με σημαδάκια σαν σφήνες. Πάνω μου δύο ' +
              'βασιλιάδες που είχαν πολεμήσει υποσχέθηκαν να γίνουν αδέλφια για πάντα, και ' +
              'ένα αντίγραφό μου κρέμεται εκεί όπου συναντιούνται τα έθνη του κόσμου.',
            en:
              'I am a small slab of baked clay with marks like little wedges. On me two kings ' +
              'who had fought each other promised to be brothers forever, and a copy of me ' +
              'hangs where the nations of the world meet.',
          },
          hint: {
            el: 'Ψάξε στο κτίριο με τις πινακίδες, όχι με τα φέρετρα.',
            en: 'Look in the building with the tablets, not the coffins.',
          },
          answerExhibitId: 'istanbul-archaeology-museums-kadesh-treaty',
        },
        {
          id: 'istanbul-archaeology-museums-riddle-3',
          difficulty: 3,
          prompt: {
            el:
              'Κοιμόμουν σε ένα συρτάρι ανάμεσα σε χιλιάδες σαν εμένα, ώσπου ένας μελετητής ' +
              'με διάβασε και κοκκίνισε. Είμαι το πιο παλιό τραγούδι μιας νύφης για τον ' +
              'βασιλιά της που βρέθηκε ποτέ.',
            en:
              'I slept in a drawer among thousands like me until a scholar read me and ' +
              'blushed. I am the oldest song of a bride for her king that anyone has ever ' +
              'found.',
          },
          hint: {
            el: 'Έχω αριθμό αντί για όνομα.',
            en: 'I have a number instead of a name.',
          },
          answerExhibitId: 'istanbul-archaeology-museums-tablet-2461',
        },
      ],
    },
  },

  // ---------------------------------------------------------------- gülhane park
  {
    id: 'istanbul-gulhane-park',
    cityId: 'istanbul',
    emoji: '🌷',
    category: 'nature',
    difficulty: 1,

    name: { el: 'Πάρκο Gülhane', en: 'Gülhane Park' },
    tagline: {
      el: 'Ο ροδόκηπος των σουλτάνων, ανοιχτός σε όλους από το 1912',
      en: 'The sultans’ rose garden, open to everyone since 1912',
    },
    story: {
      el:
        'Για τετρακόσια χρόνια αυτό το πάρκο ήταν ο εξωτερικός κήπος του παλατιού Topkapı, ' +
        'ένα άλσος με τριαντάφυλλα πίσω από τα τείχη· γι’ αυτό λέγεται Gülhane, το σπίτι ' +
        'των ρόδων. Το 1839 διαβάστηκε εδώ ένα διάταγμα που υποσχόταν ότι ο ίδιος νόμος θα ' +
        'ισχύει για όλους τους κατοίκους της αυτοκρατορίας, όποια θρησκεία κι αν είχαν, και ' +
        'πήρε το όνομα του κήπου. Το 1912 ο δήμος το άνοιξε για όλους, και είναι το ' +
        'παλιότερο δημόσιο πάρκο της Πόλης, 9,7 εκτάρια με πλατάνια που φυτεύτηκαν πριν ' +
        'από διακόσια χρόνια. Κάποτε είχε ζωολογικό κήπο και λούνα παρκ· τα έβγαλαν, και ' +
        'το πράσινο πήρε πίσω τη θέση του. Βαθιά μέσα του στέκεται μια μοναχική μαρμάρινη ' +
        'κολόνα 18,5 μέτρων, η Κολόνα των Γότθων, το παλιότερο ρωμαϊκό μνημείο της Πόλης, ' +
        'στημένη ίσως πριν ακόμα η πόλη πάρει το όνομα του Κωνσταντίνου. Κάθε Απρίλιο τα ' +
        'παρτέρια γεμίζουν με γύρω στο ένα εκατομμύριο τουλίπες, το λουλούδι που οι ' +
        'σουλτάνοι αγαπούσαν πριν το γνωρίσει η Ολλανδία. Περπάτησε ως το τέλος του ' +
        'μεγάλου δρόμου: εκεί ανοίγει μια βεράντα πάνω από το νερό, στο σημείο όπου ο ' +
        'Κεράτιος συναντά τον Βόσπορο, και απέναντι φαίνεται η Ασία.',
      en:
        'For four hundred years this park was the outer garden of Topkapı Palace, a grove ' +
        'of roses behind the walls; that is why it is called Gülhane, the house of roses. ' +
        'In 1839 a decree was read out here promising that the same law would apply to ' +
        'everyone in the empire, whatever their religion, and it took the garden’s name. In ' +
        '1912 the city opened it to everybody, and it is the oldest public park in Istanbul, ' +
        '9.7 hectares of plane trees planted two hundred years ago. It once had a zoo and a ' +
        'funfair; they were taken out, and the green took back its place. Deep inside stands ' +
        'a lonely marble column 18.5 metres tall, the Column of the Goths, the oldest Roman ' +
        'monument in the city, put up perhaps before the city was even named after ' +
        'Constantine. Every April the flowerbeds fill with around a million tulips, the ' +
        'flower the sultans loved long before Holland knew it. Walk to the end of the main ' +
        'path: a terrace opens above the water, at the very point where the Golden Horn ' +
        'meets the Bosphorus, and across the water you can see Asia.',
    },
    facts: [
      {
        el: 'Άνοιξε για όλους το 1912 και είναι το παλιότερο δημόσιο πάρκο της Πόλης.',
        en: 'It opened to everyone in 1912 and is the oldest public park in the city.',
      },
      {
        el: 'Καλύπτει 9,7 εκτάρια.',
        en: 'It covers 9.7 hectares.',
      },
      {
        el: 'Η Κολόνα των Γότθων μέσα του είναι 18,5 μέτρα ψηλή και το παλιότερο ρωμαϊκό μνημείο της Πόλης.',
        en: 'The Column of the Goths inside it is 18.5 m tall and the oldest Roman monument in Istanbul.',
      },
      {
        el: 'Κάθε Απρίλιο φυτεύεται με γύρω στο ένα εκατομμύριο τουλίπες.',
        en: 'Every April it is planted with around a million tulips.',
      },
    ],
    location: {
      lat: 41.01222,
      lng: 28.98,
      anchor: 'area',
      confidence: 'C',
      sources: [
        { kind: 'wikidata', ref: 'Q1560106', deltaM: 0 },
        { kind: 'osm', ref: 'way/25542618', deltaM: 218 },
      ],
      verifiedAt: '2026-09-12',
      note: 'An area pin on a 9.7-hectare park; the OSM polygon centre sits 218 m away, which is ordinary for a park this size.',
      findIt: {
        el: 'Η κεντρική πύλη είναι στην Alemdar Caddesi, δίπλα στη στάση του τραμ Gülhane.',
        en: 'The main gate is on Alemdar Caddesi, next to the Gülhane tram stop.',
      },
      map: { x: 0.61, y: 0.716 },
    },
    question: {
      q: {
        el: 'Τι ήταν αυτό το πάρκο πριν από το 1912;',
        en: 'What was this park before 1912?',
      },
      answers: [
        { el: 'Ο κήπος του παλατιού', en: 'The palace garden' },
        { el: 'Ιππόδρομος για άλογα', en: 'A horse racecourse' },
        { el: 'Η ψαραγορά της πόλης', en: 'The city’s main fish market' },
        { el: 'Πεδίο ασκήσεων του στρατού', en: 'An army parade field' },
      ],
      explanation: {
        el:
          'Ήταν ο εξωτερικός κήπος του Topkapı, και μπορούσαν να μπουν μόνο όσοι ζούσαν ' +
          'στο παλάτι. Η νότια πύλη του πάρκου είναι ακόμα μια πύλη του παλατιού.',
        en:
          'It was Topkapı’s outer garden, and only people of the palace could go in. The ' +
          'park’s south gate is still one of the palace gates.',
      },
    },
  },

  // ---------------------------------------------------------------- grand bazaar
  {
    id: 'istanbul-grand-bazaar',
    cityId: 'istanbul',
    emoji: '🪔',
    category: 'landmark',
    difficulty: 2,

    name: { el: 'Μεγάλο Παζάρι (Kapalıçarşı)', en: 'The Grand Bazaar (Kapalıçarşı)' },
    tagline: {
      el: 'Μια πόλη με 61 δρόμους κάτω από μία στέγη',
      en: 'A town of 61 streets under one roof',
    },
    story: {
      el:
        'Τον χειμώνα του 1455, δύο χρόνια αφού πήρε την Πόλη, ο σουλτάνος Mehmed ο Β΄ ' +
        'έχτισε μια γερή πέτρινη αίθουσα όπου οι έμποροι θα φύλαγαν με ασφάλεια υφάσματα και ' +
        'πετράδια. Γύρω της άνοιξαν μαγαζιά, μετά κι άλλα, μετά σκέπασαν τους δρόμους, ώσπου ' +
        'η αγορά έγινε πόλη μόνη της: 61 σκεπαστοί δρόμοι, πάνω από 4.000 μαγαζιά, 18 πύλες, ' +
        'κρήνες, ένα τζαμί, ταχυδρομείο. Οι δρόμοι είχαν ο καθένας το επάγγελμά του, οι ' +
        'παπουτσήδες σε έναν, οι χρυσοχόοι σε άλλον, και ακόμα και τα παπούτσια στα ράφια ' +
        'είχαν χρώματα κατά κανόνα. Ήταν ξύλινο μέχρι που μια φωτιά το 1700 το έκανε πέτρα ' +
        'και τούβλο, και σεισμοί και φωτιές το χάλασαν πολλές φορές ακόμα· κάθε φορά οι ' +
        'έμποροι το ξανάχτιζαν. Το 1591 κάποιος έκλεψε 30.000 χρυσά νομίσματα από την παλιά ' +
        'αίθουσα και το παζάρι έκλεισε δύο εβδομάδες, μέχρι που βρήκαν τον θησαυρό κρυμμένο ' +
        'κάτω από μια ψάθα. Σήμερα το περπατούν 250 με 400 χιλιάδες άνθρωποι τη μέρα. Κάθε ' +
        'βράδυ οι πύλες κλειδώνουν, και τις Κυριακές μένει κλειστό. Ο κανόνας του: ρώτα την ' +
        'τιμή, χαμογέλα, πρόσφερε λιγότερα.',
      en:
        'In the winter of 1455, two years after taking the city, Sultan Mehmed II built a ' +
        'strong stone hall where merchants could keep cloth and jewels safe. Shops opened ' +
        'around it, then more, then the streets were roofed over, until the market became a ' +
        'town of its own: 61 covered streets, more than 4,000 shops, 18 gates, fountains, a ' +
        'mosque, a post office. Each street had its own trade, shoemakers in one, goldsmiths ' +
        'in another, and even the shoes on the shelves came in colours fixed by the rules. ' +
        'It was built of wood until a fire in 1700 turned it to stone and brick, and ' +
        'earthquakes and fires damaged it many times after that; each time the traders ' +
        'rebuilt it. In 1591 somebody stole 30,000 gold coins from the old hall, and the ' +
        'bazaar shut for two weeks until the treasure was found hidden under a floor mat. ' +
        'Today between 250 and 400 thousand people walk through it every day. Every evening ' +
        'the gates are locked, and on Sundays it stays closed. Its rule is simple: ask the ' +
        'price, smile, and offer less.',
    },
    facts: [
      {
        el: 'Έχει 61 σκεπαστούς δρόμους και πάνω από 4.000 μαγαζιά.',
        en: 'It has 61 covered streets and more than 4,000 shops.',
      },
      {
        el: 'Το περπατούν 250.000 ως 400.000 άνθρωποι κάθε μέρα.',
        en: 'Between 250,000 and 400,000 people walk through it every day.',
      },
      {
        el: 'Η πρώτη του αίθουσα χτίστηκε από το 1455 ως το 1461 από τον Mehmed τον Β΄.',
        en: 'Its first hall was built between 1455 and 1461 by Mehmed II.',
      },
      {
        el: 'Κλείνει κάθε βράδυ και όλη την Κυριακή.',
        en: 'It closes every evening and all day Sunday.',
      },
    ],
    location: {
      lat: 41.01058,
      lng: 28.96793,
      anchor: 'area',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q505954', deltaM: 0 },
        { kind: 'osm', ref: 'way/303807317', deltaM: 51 },
        { kind: 'wikipedia', ref: 'Grand Bazaar, Istanbul', deltaM: 0 },
      ],
      verifiedAt: '2026-09-12',
      note: 'An area pin in the middle of 61 covered streets. The Explorer pin stood at the Nuruosmaniye gate on the east side, 190 m from here.',
      findIt: {
        el: 'Από τις 18 πύλες, η πιο εύκολη να τη βρεις είναι η πύλη Nuruosmaniye, στην ανατολική πλευρά, δίπλα στο τζαμί Nuruosmaniye.',
        en: 'Of its 18 gates, the easiest one to find is the Nuruosmaniye gate, on the east side, beside the Nuruosmaniye Mosque.',
      },
      map: { x: 0.463, y: 0.748 },
    },
    question: {
      q: {
        el: 'Τι περιμένουν οι μαγαζάτορες να κάνεις με την πρώτη τιμή που ακούς;',
        en: 'What do the shopkeepers expect you to do with the first price you hear?',
      },
      answers: [
        { el: 'Να προσφέρεις λιγότερα', en: 'Offer less' },
        { el: 'Να πληρώσεις αμέσως', en: 'Pay it at once' },
        { el: 'Να πληρώσεις τα διπλά για γούρι', en: 'Pay double for luck' },
        { el: 'Να φύγεις θυμωμένος', en: 'Walk away angry' },
      ],
      explanation: {
        el:
          'Η πρώτη τιμή είναι η αρχή μιας κουβέντας, όχι το τέλος της. Ο πωλητής ξεκινά ' +
          'ψηλά, εσύ χαμηλά, και συναντιέστε κάπου στη μέση, συχνά με ένα τσάι.',
        en:
          'The first price is the start of a conversation, not the end of it. The seller ' +
          'starts high, you start low, and you meet somewhere in the middle, often over tea.',
      },
    },
  },

  // ---------------------------------------------------------------- spice bazaar
  {
    id: 'istanbul-spice-bazaar',
    cityId: 'istanbul',
    emoji: '🌶️',
    category: 'food',
    difficulty: 1,

    name: { el: 'Αιγυπτιακή Αγορά (Mısır Çarşısı)', en: 'The Spice Bazaar (Mısır Çarşısı)' },
    tagline: {
      el: 'Πυραμίδες από κανέλα, πιπέρι και σαφράν σε σχήμα Γ',
      en: 'Pyramids of cinnamon, pepper and saffron in an L-shaped hall',
    },
    story: {
      el:
        'Η αγορά αυτή χτίστηκε από το 1660 ως το 1664 μαζί με το Νέο Τζαμί δίπλα της, και ' +
        'πληρώθηκε με τους φόρους από την Αίγυπτο, που τότε ήταν μια χώρα της Οθωμανικής ' +
        'Αυτοκρατορίας. Γι’ αυτό ακόμα τη λένε Αιγυπτιακή: Mısır είναι η Αίγυπτος στα ' +
        'τουρκικά. Την παρήγγειλε η Turhan Sultan, η μητέρα του σουλτάνου Mehmed του Δ΄, ' +
        'και τα ενοίκια των μαγαζιών πλήρωναν τη συντήρηση του τζαμιού. Το τζαμί είχε ' +
        'ξεκινήσει το 1597 μια άλλη μητέρα σουλτάνου, η Safiye, και είχε μείνει μισό για ' +
        'εξήντα χρόνια, ώσπου μια μεγάλη φωτιά έκαψε τη γειτονιά και όλα ξαναχτίστηκαν μαζί. ' +
        'Το κτίριο έχει δύο μακριά σκέλη που ενώνονται σε γωνία, σαν το γράμμα Γ, με έξι ' +
        'πύλες και μια σειρά από μικρούς θόλους στη στέγη. Για αιώνες, καράβια από την ' +
        'Αίγυπτο και την Ινδία ξεφόρτωναν εδώ σακιά με πιπέρι, κανέλα, γαρίφαλο και σαφράν, ' +
        'το πιο ακριβό μπαχαρικό του κόσμου, που είναι οι τρεις κόκκινες κλωστές ενός μωβ ' +
        'κρόκου. Σήμερα οι 85 πάγκοι στοιβάζουν ακόμα τα μπαχαρικά σε πυραμίδες από ' +
        'κόκκινο, κίτρινο και πορτοκαλί, δίπλα σε πύργους από λουκούμι. Έξω, στην πλατεία, ' +
        'εκατοντάδες περιστέρια περιμένουν τα σπόρια που πουλάνε σε ποτηράκια.',
      en:
        'This market was built between 1660 and 1664 together with the New Mosque next ' +
        'door, and it was paid for with taxes from Egypt, then a land of the Ottoman Empire. ' +
        'That is why it is still called the Egyptian Bazaar: Mısır is Turkish for Egypt. It ' +
        'was ordered by Turhan Sultan, the mother of Sultan Mehmed IV, and the rents of its ' +
        'shops paid for the upkeep of the mosque. The mosque itself had been started in 1597 ' +
        'by another sultan’s mother, Safiye, and had stood half-built for sixty years until ' +
        'a great fire burned the neighbourhood and everything was rebuilt at once. The ' +
        'building has two long arms that meet at a corner, like the letter L, with six gates ' +
        'and a row of small domes along the roof. For centuries, ships from Egypt and India ' +
        'unloaded sacks here of pepper, cinnamon, cloves and saffron, the most expensive spice ' +
        'in the world, which is the three red threads of a purple crocus. Today its 85 stalls ' +
        'still pile spices into pyramids of red, yellow and orange, beside towers of lokum. ' +
        'Outside, in the square, hundreds of pigeons wait for the seed that is sold in little ' +
        'cups.',
    },
    facts: [
      {
        el: 'Χτίστηκε από το 1660 ως το 1664 και πληρώθηκε με φόρους από την Αίγυπτο.',
        en: 'It was built between 1660 and 1664 and paid for with taxes from Egypt.',
      },
      {
        el: 'Το κτίριο έχει σχήμα Γ και έξι πύλες.',
        en: 'The building is shaped like the letter L and has six gates.',
      },
      {
        el: 'Σήμερα έχει 85 μαγαζιά.',
        en: 'Today it has 85 shops.',
      },
      {
        el: 'Τα ενοίκια των μαγαζιών του πλήρωναν τη συντήρηση του Νέου Τζαμιού δίπλα.',
        en: 'The rents of its shops paid for the upkeep of the New Mosque next door.',
      },
    ],
    location: {
      lat: 41.01639,
      lng: 28.97056,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q668641', deltaM: 0 },
        { kind: 'osm', ref: 'way/24234971', deltaM: 46 },
        { kind: 'wikipedia', ref: 'Spice Bazaar', deltaM: 0 },
      ],
      verifiedAt: '2026-09-12',
      findIt: {
        el: 'Η κεντρική πύλη ανοίγει στην πλατεία μπροστά από το Νέο Τζαμί, στην παραλία του Eminönü.',
        en: 'The main gate opens onto the square in front of the New Mosque, on the Eminönü waterfront.',
      },
      map: { x: 0.495, y: 0.632 },
    },
    question: {
      q: {
        el: 'Γιατί τη λένε Αιγυπτιακή Αγορά;',
        en: 'Why is it called the Egyptian Bazaar?',
      },
      answers: [
        { el: 'Το πλήρωσε η Αίγυπτος', en: 'Egypt paid for it' },
        { el: 'Ψώνιζαν εδώ οι Φαραώ', en: 'Pharaohs once shopped here' },
        { el: 'Πουλάει άμμο από τον Νείλο', en: 'It sells sand from the Nile' },
        { el: 'Ο αρχιτέκτονας ήταν Αιγύπτιος', en: 'Its architect was Egyptian' },
      ],
      explanation: {
        el:
          'Οι φόροι που μάζευε η αυτοκρατορία από την Αίγυπτο πλήρωσαν το χτίσιμο, και το ' +
          'όνομα έμεινε.',
        en:
          'The taxes the empire collected from Egypt paid for the building, and the name ' +
          'stuck.',
      },
    },
  },

  // ---------------------------------------------------------- süleymaniye mosque
  {
    id: 'istanbul-suleymaniye-mosque',
    cityId: 'istanbul',
    emoji: '🕌',
    category: 'landmark',
    difficulty: 3,

    name: { el: 'Τζαμί Süleymaniye', en: 'The Süleymaniye Mosque' },
    tagline: {
      el: 'Το αριστούργημα του Sinan στον τρίτο λόφο της Πόλης',
      en: 'Sinan’s masterpiece on the third hill of the city',
    },
    story: {
      el:
        'Ο Σουλεϊμάν ο Μεγαλοπρεπής, ο δέκατος σουλτάνος, ζήτησε από τον αρχιτέκτονά του, ' +
        'τον Sinan, ένα τζαμί που θα ξεπερνούσε όλα τα προηγούμενα. Η επιγραφή στην πόρτα ' +
        'λέει ότι θεμελιώθηκε το 1550 και εγκαινιάστηκε το 1557, στον τρίτο λόφο, εκεί που ' +
        'στεκόταν το παλιό παλάτι. Ο θόλος του είναι 53 μέτρα ψηλός και 26,5 μέτρα φαρδύς, ' +
        'ακριβώς το μισό, και ο Sinan έκρυψε τα στηρίγματά του μέσα στους τοίχους, ώστε απ’ ' +
        'έξω το κτίριο να ανεβαίνει σαν πυραμίδα από θόλους. Οι τέσσερις μιναρέδες έχουν ' +
        'συνολικά δέκα μπαλκόνια, ένα για κάθε σουλτάνο ως τον Σουλεϊμάν. Γύρω του χτίστηκε ' +
        'μια μικρή πόλη: σχολεία, νοσοκομείο, λουτρά, ξενώνας, μια κουζίνα που τάιζε τους ' +
        'φτωχούς, μαγαζιά, και μια πλατεία όπου κάθε εβδομάδα γίνονταν αγώνες πάλης. Στον ' +
        'κήπο πίσω από το τζαμί είναι οι τάφοι του Σουλεϊμάν και της γυναίκας του Χιουρέμ. ' +
        'Λίγο έξω από τον τοίχο, ο Sinan έχτισε για τον εαυτό του έναν μικρό, απλό τάφο, ' +
        'από όπου βλέπει το έργο του. Το τζαμί άντεξε τη μεγάλη φωτιά του 1660 και μια ' +
        'έκρηξη πυρομαχικών στην αυλή του στον Α΄ Παγκόσμιο Πόλεμο· ο σεισμός του 1766 ' +
        'γκρέμισε ένα κομμάτι του θόλου, και το ξανάχτισαν.',
      en:
        'Suleiman the Magnificent, the tenth sultan, asked his architect Sinan for a mosque ' +
        'that would outdo everything built before it. The inscription over the door says it ' +
        'was founded in 1550 and opened in 1557, on the third hill, where the old palace ' +
        'had stood. Its dome is 53 metres high and 26.5 metres wide, exactly half, and Sinan ' +
        'hid its supports inside the walls so that from outside the building climbs like a ' +
        'pyramid of domes. The four minarets have ten balconies between them, one for each ' +
        'sultan up to Suleiman. Around it a small town was built: schools, a hospital, ' +
        'baths, a guesthouse, a kitchen that fed the poor, shops, and a square where ' +
        'wrestling matches were held every week. In the garden behind the mosque are the ' +
        'tombs of Suleiman and his wife Hürrem. Just outside the wall, Sinan built himself a ' +
        'small, plain tomb from which he looks at his work. The mosque came through the ' +
        'great fire of 1660 and an explosion of ammunition stored in its courtyard during ' +
        'the First World War; the earthquake of 1766 brought part of the dome down, and it ' +
        'was rebuilt.',
    },
    facts: [
      {
        el: 'Η επιγραφή του δίνει θεμελίωση το 1550 και εγκαίνια το 1557.',
        en: 'Its inscription gives a foundation date of 1550 and an inauguration in 1557.',
      },
      {
        el: 'Ο θόλος είναι 53 μέτρα ψηλός και 26,5 μέτρα φαρδύς: ακριβώς το μισό.',
        en: 'The dome is 53 m high and 26.5 m wide: exactly half.',
      },
      {
        el: 'Οι τέσσερις μιναρέδες έχουν δέκα μπαλκόνια, ένα για καθέναν από τους δέκα πρώτους σουλτάνους.',
        en: 'Its four minarets have ten balconies, one for each of the first ten sultans.',
      },
      {
        el: 'Ο τάφος του ίδιου του Sinan στέκεται λίγο έξω από τον τοίχο του συγκροτήματος.',
        en: 'Sinan’s own tomb stands just outside the complex wall.',
      },
    ],
    location: {
      lat: 41.01611,
      lng: 28.96389,
      anchor: 'centroid',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q178643', deltaM: 0 },
        { kind: 'osm', ref: 'relation/1564032', deltaM: 15 },
        { kind: 'wikipedia', ref: 'Süleymaniye Mosque', deltaM: 0 },
      ],
      verifiedAt: '2026-09-12',
      map: { x: 0.413, y: 0.638 },
    },
    question: {
      q: {
        el: 'Γιατί οι μιναρέδες έχουν ακριβώς δέκα μπαλκόνια;',
        en: 'Why do the minarets have exactly ten balconies?',
      },
      answers: [
        { el: 'Ήταν ο δέκατος σουλτάνος', en: 'He was the tenth sultan' },
        { el: 'Δούλεψαν δέκα πρωτομάστορες', en: 'There were ten master builders' },
        { el: 'Μία για καθέναν από δέκα γιους', en: 'One for each of ten sons' },
        { el: 'Δέκα χρόνια χτίσιμο', en: 'Ten years of building' },
      ],
      explanation: {
        el:
          'Ο Σουλεϊμάν ήταν ο δέκατος σουλτάνος από την αρχή της δυναστείας, και ο Sinan το ' +
          'έγραψε στους μιναρέδες με μπαλκόνια αντί για γράμματα.',
        en:
          'Suleiman was the tenth sultan since the dynasty began, and Sinan wrote it on the ' +
          'minarets in balconies instead of letters.',
      },
    },
  },

  // --------------------------------------------------------------- galata bridge
  {
    id: 'istanbul-galata-bridge',
    cityId: 'istanbul',
    emoji: '🎣',
    category: 'landmark',
    difficulty: 1,

    name: { el: 'Γέφυρα του Γαλατά', en: 'The Galata Bridge' },
    tagline: {
      el: 'Ψαράδες από πάνω, εστιατόρια από κάτω, φέρι για την Ασία δίπλα',
      en: 'Anglers on top, restaurants underneath, ferries to Asia alongside',
    },
    story: {
      el:
        'Το 1502 ο σουλτάνος Bayezid ο Β΄ ζήτησε σχέδια για μια γέφυρα σε αυτό ακριβώς το ' +
        'σημείο, και ο Λεονάρντο ντα Βίντσι του έστειλε ένα: μια γέφυρα με ένα μόνο τόξο ' +
        'μήκους 280 μέτρων, που θα ήταν η μεγαλύτερη του κόσμου. Ο σουλτάνος είπε όχι. Το ' +
        '2001 μια μικρότερη εκδοχή της χτίστηκε στη Νορβηγία, και στέκεται μια χαρά. Η ' +
        'πρώτη αληθινή γέφυρα εδώ, ξύλινη, άνοιξε το 1845, και για να την περάσεις πλήρωνες ' +
        'διόδια: πέντε παράδες ο άνθρωπος, τρεις το πρόβατο, εκατό η άμαξα. Άνθρωποι με ' +
        'άσπρες στολές τα μάζευαν ως το 1930. Αυτή που πατάς είναι η πέμπτη, από το 1994, ' +
        '490 μέτρα, και η μέση της σηκώνεται σαν δύο πόρτες για να περνούν τα ψηλά πλοία. ' +
        'Μέρα νύχτα, ψαράδες στέκονται στα κάγκελα με τα καλάμια τους πάνω από τον Κεράτιο, ' +
        'κι από κάτω τους, στον κάτω όροφο, εστιατόρια έχουν τραπέζια σχεδόν μέσα στο νερό, ' +
        'όπως και η προηγούμενη γέφυρα. Από τις αποβάθρες δίπλα, τα φέρι περνούν στην ' +
        'ασιατική πλευρά σε είκοσι λεπτά. Ο κόλπος λέγεται Κεράτιος γιατί από ψηλά μοιάζει ' +
        'με κέρατο, και «Χρυσός» στα αγγλικά για τα ηλιοβασιλέματά του ή για τα πλούτη που ' +
        'έφερναν τα καράβια· κανείς δεν ξέρει σίγουρα.',
      en:
        'In 1502 Sultan Bayezid II asked for designs for a bridge at exactly this spot, and ' +
        'Leonardo da Vinci sent him one: a bridge with a single arch 280 metres long, which ' +
        'would have been the longest in the world. The sultan said no. In 2001 a smaller ' +
        'version of it was built in Norway, and it stands perfectly well. The first real ' +
        'bridge here, made of wood, opened in 1845, and you paid a toll to cross: five para ' +
        'for a person, three for a sheep, a hundred for a carriage. Men in white uniforms ' +
        'collected it until 1930. The one you are standing on is the fifth, from 1994, 490 ' +
        'metres long, and its middle lifts like two doors to let tall ships through. Day and ' +
        'night, anglers line the railings with their rods over the Golden Horn, and below ' +
        'them, on the lower deck, restaurants have tables almost in the water, just as the ' +
        'bridge before it did. From the piers alongside, ferries cross to the Asian side in ' +
        'twenty minutes. The inlet is called a horn because from above it looks like one, ' +
        'and golden either for its sunsets or for the riches the ships brought in; nobody ' +
        'knows for sure.',
    },
    facts: [
      {
        el: 'Η πρώτη γέφυρα σε αυτό το σημείο άνοιξε το 1845· η σημερινή είναι η πέμπτη, από το 1994.',
        en: 'The first bridge on this spot opened in 1845; today’s is the fifth, from 1994.',
      },
      {
        el: 'Έχει μήκος 490 μέτρα και η μέση της σηκώνεται για να περνούν τα πλοία.',
        en: 'It is 490 m long and its middle lifts to let ships through.',
      },
      {
        el: 'Ως το 1930 πλήρωνες διόδια για να περάσεις: 5 παράδες ο άνθρωπος, 3 το πρόβατο.',
        en: 'Until 1930 you paid a toll to cross: 5 para for a person, 3 for a sheep.',
      },
      {
        el: 'Ο Λεονάρντο ντα Βίντσι σχεδίασε γέφυρα για αυτό το σημείο το 1502· δεν χτίστηκε ποτέ.',
        en: 'Leonardo da Vinci drew a bridge for this spot in 1502; it was never built.',
      },
    ],
    location: {
      lat: 41.02,
      lng: 28.97306,
      anchor: 'centroid',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q81523', deltaM: 0 },
        { kind: 'osm', ref: 'way/4885624', deltaM: 19 },
        { kind: 'wikipedia', ref: 'Galata Bridge', deltaM: 0 },
      ],
      verifiedAt: '2026-09-12',
      note: 'The middle of the bridge.',
      findIt: {
        el: 'Ανέβα στο πάνω κατάστρωμα από την πλατεία του Eminönü, δίπλα στην Αιγυπτιακή Αγορά.',
        en: 'Walk onto the top deck from Eminönü square, next to the Spice Bazaar.',
      },
      map: { x: 0.525, y: 0.56 },
    },
    question: {
      q: {
        el: 'Τι σχεδίασε ο Λεονάρντο ντα Βίντσι για αυτό το σημείο το 1502;',
        en: 'What did Leonardo da Vinci design for this spot in 1502?',
      },
      answers: [
        { el: 'Μια γέφυρα με ένα τόξο', en: 'A one-arch bridge' },
        { el: 'Ένα τούνελ κάτω από το νερό', en: 'A tunnel under the water' },
        { el: 'Έναν φάρο με ασανσέρ', en: 'A lighthouse with a lift' },
        { el: 'Μια πλωτή ξύλινη αγορά', en: 'A floating wooden market' },
      ],
      explanation: {
        el:
          'Ένα μόνο τόξο 280 μέτρων, χωρίς κολόνες στο νερό, για να περνούν από κάτω τα ' +
          'καράβια. Ήταν πολύ τολμηρό για την εποχή του, αλλά το 2001 αποδείχτηκε ότι ' +
          'στέκεται.',
        en:
          'A single arch of 280 metres with no piers in the water, so that ships could pass ' +
          'underneath. It was too daring for its time, but in 2001 it was proved to stand.',
      },
    },
  },

  // ---------------------------------------------------------------- galata tower
  {
    id: 'istanbul-galata-tower',
    cityId: 'istanbul',
    emoji: '🗼',
    category: 'history',
    difficulty: 2,

    name: { el: 'Πύργος του Γαλατά', en: 'The Galata Tower' },
    tagline: {
      el: 'Ο πύργος με το μυτερό καπέλο και τον άνθρωπο που πέταξε',
      en: 'The tower with the pointed hat and the man who flew',
    },
    story: {
      el:
        'Έμποροι από τη Γένοβα της Ιταλίας είχαν κάποτε τη δική τους τειχισμένη πολιτεία ' +
        'σε αυτόν τον λόφο, και το 1348 έχτισαν τον πύργο στο ψηλότερο σημείο των τειχών ' +
        'της. Τότε ήταν το ψηλότερο κτίριο της Πόλης. Οι τοίχοι του είναι 3,75 μέτρα χοντροί ' +
        'και το ύψος του 62,59 μέτρα, χωρίς το στολίδι στην κορυφή. Όταν οι Οθωμανοί πήραν ' +
        'την Πόλη, ο πύργος έγινε φυλακή, και από το 1717 παρατηρητήριο για φωτιές: φρουροί ' +
        'στην κορυφή κοιτούσαν μέρα νύχτα την ξύλινη πόλη και σήμαιναν συναγερμό. Η πιο ' +
        'διάσημη ιστορία του είναι για τον Hezârfen Ahmed Çelebi, που γύρω στο 1630, όπως ' +
        'γράφει ένας ταξιδιώτης της εποχής, φόρεσε φτερά σαν αετού, πήδηξε από την κορυφή και ' +
        'πέταξε πάνω από τον Βόσπορο ως μια πλατεία της Ασίας. Ο σουλτάνος του έδωσε ένα ' +
        'σακί χρυσά νομίσματα και μετά τον έστειλε μακριά, γιατί ένας άνθρωπος που πετάει ' +
        'τον φόβιζε. Αλήθεια ή όχι, ο κόσμος λάτρεψε την ιδέα. Η κωνική στέγη χάθηκε τον ' +
        '19ο αιώνα και ξαναμπήκε το 1967. Σήμερα ένα ασανσέρ σε ανεβάζει, και από το ' +
        'μπαλκόνι που κάνει τον γύρο του πύργου βλέπεις όλη την πόλη και δύο ηπείρους.',
      en:
        'Merchants from Genoa, in Italy, once had their own walled town on this hill, and in ' +
        '1348 they built the tower at the highest point of its walls. It was then the ' +
        'tallest building in the city. Its walls are 3.75 metres thick and it stands 62.59 ' +
        'metres high, not counting the ornament on top. When the Ottomans took the city the ' +
        'tower became a prison, and from 1717 a lookout for fires: guards at the top ' +
        'watched the wooden city day and night and raised the alarm. Its most famous story ' +
        'is about Hezârfen Ahmed Çelebi, who around 1630, according to a traveller of the ' +
        'time, strapped on wings like an eagle’s, leapt from the top and glided across the ' +
        'Bosphorus to a square on the Asian side. The sultan gave him a sack of gold coins ' +
        'and then sent him far away, because a man who could fly frightened him. True or ' +
        'not, people loved the idea. The pointed roof was lost in the 19th century and put ' +
        'back in 1967. Today a lift takes you up, and from the balcony that runs all the way ' +
        'round you can see the whole city and two continents.',
    },
    facts: [
      {
        el: 'Χτίστηκε το 1348 από τους Γενουάτες και ήταν τότε το ψηλότερο κτίριο της Πόλης.',
        en: 'Built in 1348 by the Genoese, it was then the tallest building in the city.',
      },
      {
        el: 'Έχει ύψος 62,59 μέτρα και οι τοίχοι του είναι 3,75 μέτρα χοντροί.',
        en: 'It is 62.59 m tall and its walls are 3.75 m thick.',
      },
      {
        el: 'Από το 1717 οι Οθωμανοί τον χρησιμοποιούσαν ως παρατηρητήριο πυρκαγιών.',
        en: 'From 1717 the Ottomans used it as a fire lookout.',
      },
      {
        el: 'Η μυτερή στέγη που βλέπεις ξαναμπήκε στη θέση της το 1965–1967.',
        en: 'The pointed roof you see was put back in 1965–1967.',
      },
    ],
    location: {
      lat: 41.02563,
      lng: 28.97415,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q91274', deltaM: 0 },
        { kind: 'osm', ref: 'way/23236783', deltaM: 5 },
      ],
      verifiedAt: '2026-09-12',
      note: 'Wikipedia carries no coordinate for this article, so the grade is B on two sources. A tower is a point.',
      findIt: {
        el: 'Η πόρτα είναι στη βάση του πύργου, στη μικρή πλατεία γύρω του.',
        en: 'The door is at the foot of the tower, on the little square around it.',
      },
      map: { x: 0.538, y: 0.447 },
    },
    question: {
      q: {
        el: 'Τι δουλειά έκανε ο πύργος για τους Οθωμανούς από το 1717;',
        en: 'What job did the tower do for the Ottomans from 1717?',
      },
      answers: [
        { el: 'Βίγλα για φωτιές', en: 'A fire lookout' },
        { el: 'Φάρος για τα καράβια', en: 'A lighthouse for ships' },
        { el: 'Κρεβατοκάμαρα του σουλτάνου', en: 'The sultan’s bedroom' },
        { el: 'Ρολόι της πόλης', en: 'A clock for the city' },
      ],
      explanation: {
        el:
          'Μια πόλη από ξύλινα σπίτια καίγεται σε μια νύχτα. Από εδώ έβλεπες τον καπνό ' +
          'πριν γίνει φλόγα.',
        en:
          'A city of wooden houses can burn in a night. From up here you saw the smoke ' +
          'before it became flame.',
      },
    },
  },

  // -------------------------------------------------------------- flower passage
  {
    id: 'istanbul-flower-passage',
    cityId: 'istanbul',
    emoji: '🚋',
    category: 'landmark',
    difficulty: 2,

    name: { el: 'Στοά των Λουλουδιών (Çiçek Pasajı), οδός İstiklal', en: 'The Flower Passage (Çiçek Pasajı), İstiklal Avenue' },
    tagline: {
      el: 'Μια γυάλινη στοά ενός Έλληνα τραπεζίτη, στον δρόμο με το κόκκινο τραμ',
      en: 'A Greek banker’s glass arcade, on the street of the red tram',
    },
    story: {
      el:
        'Πριν από εκατόν πενήντα χρόνια αυτός ήταν η Grande Rue de Péra, ο πιο κομψός δρόμος ' +
        'της Πόλης, όπου Έλληνες, Αρμένιοι, Τούρκοι, Εβραίοι και Ευρωπαίοι ζούσαν δίπλα ' +
        'δίπλα, με τις πρεσβείες, τα θέατρα και τα ζαχαροπλαστεία τους. Εδώ στεκόταν ένα ' +
        'θέατρο όπου οι σουλτάνοι άκουγαν όπερα, ώσπου μια μεγάλη φωτιά το έκαψε το 1870. ' +
        'Ένας Έλληνας τραπεζίτης, ο Χρηστάκης Ζωγράφος, αγόρασε το οικόπεδο και το 1876 ' +
        'έχτισε μια λαμπρή στοά με γυάλινη οροφή, την Cité de Péra. Μετά το 1917 Ρωσίδες ' +
        'αριστοκράτισσες που είχαν χάσει τα πάντα άνοιξαν εδώ ανθοπωλεία, και ως τη δεκαετία ' +
        'του 1940 η στοά ήταν γεμάτη λουλούδια· έτσι πήρε το σημερινό της όνομα, Çiçek ' +
        'Pasajı. Σήμερα έχει εστιατόρια. Ο δρόμος έξω, η İstiklal, έχει μήκος 1,4 ' +
        'χιλιόμετρα, από το Tünel ως την πλατεία Taksim, χωρίς αυτοκίνητα, και από το 1990 ' +
        'ένα παλιό κόκκινο τραμ κουδουνίζει ξανά ανάμεσα στο πλήθος. Απέναντι, πίσω από τη ' +
        'μεγάλη πύλη, το Λύκειο Galatasaray είναι το παλιότερο λύκειο της χώρας. Και στην ' +
        'άκρη του δρόμου, το Tünel, ένα υπόγειο τρενάκι του 1875, το δεύτερο πιο παλιό στον ' +
        'κόσμο, κατεβάζει σε ενάμισι λεπτό στη γέφυρα.',
      en:
        'A hundred and fifty years ago this was the Grande Rue de Péra, the smartest street ' +
        'in the city, where Greeks, Armenians, Turks, Jews and Europeans lived side by side ' +
        'with their embassies, theatres and cake shops. A theatre stood here where the ' +
        'sultans listened to opera, until a great fire burned it down in 1870. A Greek ' +
        'banker, Hristaki Zografos, bought the plot and in 1876 built a splendid arcade with ' +
        'a glass roof, the Cité de Péra. After 1917, Russian noblewomen who had lost ' +
        'everything opened flower shops here, and by the 1940s the arcade was full of ' +
        'flowers; that is how it got its present name, Çiçek Pasajı. Today it is full of ' +
        'restaurants. The street outside, İstiklal, runs 1.4 kilometres from Tünel to Taksim ' +
        'Square with no cars, and since 1990 an old red tram has rung its bell through the ' +
        'crowds again. Across the square, behind the big gate, Galatasaray High School is ' +
        'the oldest high school in the country. And at the end of the street the Tünel, an ' +
        'underground railway from 1875, the second-oldest in the world, takes you down to ' +
        'the bridge in a minute and a half.',
    },
    facts: [
      {
        el: 'Τη στοά έχτισε το 1876 ένας Έλληνας τραπεζίτης, ο Χρηστάκης Ζωγράφος, στη θέση ενός καμένου θεάτρου.',
        en: 'The arcade was built in 1876 by a Greek banker, Hristaki Zografos, on the site of a burnt theatre.',
      },
      {
        el: 'Μετά το 1917 Ρωσίδες αριστοκράτισσες πουλούσαν εδώ λουλούδια· αυτό της έδωσε το όνομά της.',
        en: 'After 1917, Russian noblewomen sold flowers here; that gave it its name.',
      },
      {
        el: 'Η İstiklal έχει μήκος 1,4 χιλιόμετρα, χωρίς αυτοκίνητα, με κόκκινο τραμ από το 1990.',
        en: 'İstiklal is 1.4 km long and car-free, with a red tram since 1990.',
      },
      {
        el: 'Το Tünel στην άκρη της άνοιξε το 1875 και είναι ο δεύτερος πιο παλιός υπόγειος σιδηρόδρομος του κόσμου.',
        en: 'The Tünel at its end opened in 1875, the second-oldest underground railway in the world.',
      },
    ],
    location: {
      lat: 41.03394,
      lng: 28.97792,
      anchor: 'centroid',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q595289', deltaM: 0 },
        { kind: 'osm', ref: 'node/5602054323', deltaM: 18 },
        { kind: 'wikipedia', ref: 'Çiçek Pasajı', deltaM: 1 },
      ],
      verifiedAt: '2026-09-12',
      note: 'The arcade itself.',
      findIt: {
        el: 'Η πρόσοψή της ανοίγει στην οδό İstiklal, στην πλατεία Galatasaray, και μια πλαϊνή πόρτα βγάζει στην ψαραγορά.',
        en: 'Its front opens onto İstiklal Avenue at Galatasaray Square, and a side door leads into the fish market.',
      },
      map: { x: 0.584, y: 0.281 },
    },
    question: {
      q: {
        el: 'Ποιες πουλούσαν εδώ λουλούδια και έδωσαν στη στοά το όνομά της;',
        en: 'Who sold flowers here and gave the arcade its name?',
      },
      answers: [
        { el: 'Ρωσίδες ευγενείς', en: 'Russian noblewomen' },
        { el: 'Οι κηπουροί του σουλτάνου', en: 'The sultan’s own gardeners' },
        { el: 'Έλληνες μαθητές', en: 'Greek schoolchildren' },
        { el: 'Ολλανδοί έμποροι τουλίπας', en: 'Dutch tulip traders' },
      ],
      explanation: {
        el:
          'Μετά την επανάσταση του 1917 πολλές πλούσιες Ρωσίδες έφτασαν εδώ χωρίς τίποτα ' +
          'και ζούσαν πουλώντας λουλούδια. Çiçek σημαίνει λουλούδι.',
        en:
          'After the revolution of 1917 many wealthy Russian women arrived here with nothing ' +
          'and lived by selling flowers. Çiçek means flower.',
      },
    },
  },

  // ------------------------------------------------------------------ patriarchate
  {
    id: 'istanbul-patriarchate',
    cityId: 'istanbul',
    emoji: '⛪',
    category: 'history',
    difficulty: 3,

    name: { el: 'Πατριαρχικός Ναός Αγίου Γεωργίου, Φανάρι', en: 'The Patriarchal Church of St George, Fener' },
    tagline: {
      el: 'Ένας ταπεινός ναός με μια πύλη κλειστή από το 1821',
      en: 'A modest church with a gate that has been shut since 1821',
    },
    story: {
      el:
        'Όταν η Βυζαντινή Αυτοκρατορία τελείωσε, το 1453, οι Έλληνες της Πόλης δεν ' +
        'χάθηκαν: μαζεύτηκαν σε αυτή τη γειτονιά δίπλα στον Κεράτιο, που πήρε το όνομά της ' +
        'από έναν παλιό φάρο, ένα φανάρι. Από το 1597 ζει εδώ ο Οικουμενικός Πατριάρχης, ο ' +
        'πρώτος ανάμεσα σε όλους τους Ορθόδοξους επισκόπους του κόσμου. Ο ναός του είναι ' +
        'μικρός, γιατί ο οθωμανικός νόμος έλεγε ότι καμία εκκλησία δεν έπρεπε να είναι πιο ' +
        'ψηλή από τζαμί, αλλά μέσα λάμπει: παλιές εικόνες, ασημένια καντήλια, και ένας ' +
        'ξύλινος θρόνος που λένε ότι είναι από τον 5ο αιώνα. Το 1821, όταν η Ελλάδα ' +
        'ξεσηκώθηκε, ο Πατριάρχης Γρηγόριος ο Ε΄ κρεμάστηκε στην κεντρική πύλη με διαταγή ' +
        'του σουλτάνου, την ημέρα του Πάσχα. Η πύλη σφραγίστηκε την ίδια χρονιά και δεν ' +
        'άνοιξε ποτέ ξανά· όλοι μπαίνουν από μια πλαϊνή πόρτα. Το 2004 ο Πάπας επέστρεψε ' +
        'εδώ τα λείψανα δύο αγίων που είχαν πάρει οι Σταυροφόροι το 1204, οκτακόσια χρόνια ' +
        'αργότερα. Στον λόφο από πάνω, η Μεγάλη του Γένους Σχολή, το πιο παλιό ελληνικό ' +
        'σχολείο της Πόλης, μετακόμισε το 1883 σε ένα τεράστιο κόκκινο κτίριο με ' +
        'τηλεσκόπιο στον θόλο του, που όλοι το λένε Κόκκινο Κάστρο.',
      en:
        'When the Byzantine Empire ended in 1453, the Greeks of the city did not vanish: ' +
        'they gathered in this neighbourhood by the Golden Horn, named Fener after an old ' +
        'lighthouse, a fanari. Since 1597 the Ecumenical Patriarch, the first among all the ' +
        'Orthodox bishops in the world, has lived here. His church is small, because Ottoman ' +
        'law said no church could be taller than a mosque, but inside it glows: old icons, ' +
        'silver lamps, and a wooden throne said to be from the 5th century. In 1821, when ' +
        'Greece rose up, Patriarch Gregory V was hanged at the main gate on the sultan’s ' +
        'orders, on Easter Day. The gate was sealed that same year and has never been opened ' +
        'since; everyone goes in through a side door. In 2004 the Pope returned to this ' +
        'church the relics of two saints that the Crusaders had carried off in 1204, eight ' +
        'hundred years later. On the hill above, the Great School of the Nation, the oldest ' +
        'Greek school in the city, moved in 1883 into a huge red building with a telescope ' +
        'in its dome, which everyone calls the Red Castle.',
    },
    facts: [
      {
        el: 'Ο Πατριάρχης ζει εδώ από το 1597.',
        en: 'The Patriarch has lived here since 1597.',
      },
      {
        el: 'Η κεντρική πύλη είναι σφραγισμένη από το 1821.',
        en: 'The main gate has been sealed shut since 1821.',
      },
      {
        el: 'Τα λείψανα δύο αγίων γύρισαν από τη Ρώμη το 2004, 800 χρόνια αφότου τα πήραν οι Σταυροφόροι.',
        en: 'Relics of two saints came back from Rome in 2004, 800 years after the Crusaders took them.',
      },
      {
        el: 'Το κόκκινο σχολείο στον λόφο χτίστηκε το 1881–1883 και έχει τηλεσκόπιο στον θόλο του.',
        en: 'The red school on the hill was built in 1881–1883 and has a telescope in its dome.',
      },
    ],
    location: {
      lat: 41.02909,
      lng: 28.95182,
      anchor: 'centroid',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q1346546', deltaM: 0 },
        { kind: 'osm', ref: 'way/526875901', deltaM: 7 },
        { kind: 'wikipedia', ref: "St. George's Cathedral, Istanbul", deltaM: 6 },
      ],
      verifiedAt: '2026-09-12',
      // The Patriarchate's own site (ec-patr.org) gives its address as Dr. Sadık Ahmet
      // Caddesi 19, Fener; the sealed gate faces that street and the side door is beside it.
      findIt: {
        el: 'Η είσοδος είναι στην οδό Dr. Sadık Ahmet, αριθμός 19: μια πλαϊνή πόρτα δίπλα στη μεγάλη σφραγισμένη πύλη.',
        en: 'The way in is on Dr. Sadık Ahmet Caddesi, number 19: a side door next to the big sealed gate.',
      },
      map: { x: 0.266, y: 0.378 },
    },
    question: {
      q: {
        el: 'Πώς μπαίνουν σήμερα οι επισκέπτες στο Πατριαρχείο;',
        en: 'How do visitors go into the Patriarchate today?',
      },
      answers: [
        { el: 'Από μια πλαϊνή πόρτα', en: 'Through a side door' },
        { el: 'Από τη μεγάλη κεντρική πύλη', en: 'Through the big main gate' },
        { el: 'Από μια κρεμαστή γέφυρα', en: 'Over a drawbridge' },
        { el: 'Με βάρκα από την προβλήτα', en: 'By boat from the pier' },
      ],
      explanation: {
        el:
          'Η κεντρική πύλη σφραγίστηκε το 1821 στη μνήμη του Πατριάρχη Γρηγορίου του Ε΄ ' +
          'και δεν άνοιξε ποτέ ξανά.',
        en:
          'The main gate was sealed in 1821 in memory of Patriarch Gregory V and has never ' +
          'been opened again.',
      },
    },
  },

  // ----------------------------------------------------------- rahmi koç museum
  {
    id: 'istanbul-rahmi-koc-museum',
    cityId: 'istanbul',
    emoji: '⚙️',
    category: 'museum',
    difficulty: 1,

    name: { el: 'Μουσείο Rahmi M. Koç', en: 'The Rahmi M. Koç Museum' },
    tagline: {
      el: 'Τρένα, καράβια, αυτοκίνητα και μηχανές που επιτρέπεται να αγγίξεις',
      en: 'Trains, boats, cars and engines you are allowed to touch',
    },
    story: {
      el:
        'Ο Rahmi Koç, ένας από τους μεγαλύτερους βιομήχανους της Τουρκίας, επισκέφτηκε ' +
        'κάποτε ένα μουσείο μηχανών στην Αμερική και αποφάσισε ότι η πόλη του ήθελε ένα ' +
        'δικό της. Το 1991 αγόρασε ένα ερειπωμένο κτίριο στο Hasköy, στη βόρεια όχθη του ' +
        'Κεράτιου, που στις αρχές του 18ου αιώνα ήταν χυτήριο: εκεί έφτιαχναν άγκυρες και ' +
        'αλυσίδες για τον οθωμανικό στόλο. Μια φωτιά το 1984 το είχε αφήσει χωρίς στέγη. Το ' +
        'ξανάχτισαν σε δυόμισι χρόνια, και το μουσείο άνοιξε στις 13 Δεκεμβρίου 1994. Το ' +
        '2001 πρόσθεσαν απέναντι ένα παλιό ναυπηγείο του 1861, εκεί που μια εταιρεία ' +
        'πλοιαρίων επισκεύαζε τα καράβια της, με προβλήτα ακριβώς στο νερό. Μέσα και έξω ' +
        'υπάρχουν αυτοκίνητα από το 1898, μοτοσικλέτες, τραμ, ατμομηχανές, αεροπλάνα, ' +
        'ένα υπόγειο βαγόνι του 1876, μια αμφίβια μηχανή του 1961 που είναι μισή αυτοκίνητο ' +
        'και μισή βάρκα, τηλέφωνα, φωνογράφοι και ένα μοντέλο τηλέγραφου του ίδιου του ' +
        'Έντισον. Στην προβλήτα είναι δεμένο για πάντα ένα φέρι του 1953, μήκους 76,8 ' +
        'μέτρων, με χώρο για 2.100 επιβάτες, και μπορείς να περπατήσεις τα ' +
        'καταστρώματά του. Πολλά εκθέματα έχουν κουμπιά και μανιβέλες: εδώ το «μην αγγίζετε» ' +
        'ισχύει λιγότερο από οπουδήποτε αλλού στην Πόλη. Κλειστό τη Δευτέρα.',
      en:
        'Rahmi Koç, one of the biggest industrialists in Türkiye, once visited a museum of ' +
        'machines in America and decided his city needed one of its own. In 1991 he bought a ' +
        'ruined building in Hasköy, on the north shore of the Golden Horn, that in the early ' +
        '18th century had been a foundry: anchors and chains for the Ottoman navy were cast ' +
        'there. A fire in 1984 had left it without a roof. It was rebuilt in two and a half ' +
        'years, and the museum opened on 13 December 1994. In 2001 an old shipyard from ' +
        '1861 was added across the road, where a ferry company once repaired its boats, ' +
        'with a quay right on the water. Inside and out there are cars from 1898 onwards, ' +
        'motorcycles, trams, steam locomotives, aeroplanes, an underground railway carriage ' +
        'from 1876, an amphibious machine from 1961 that is half car and half boat, ' +
        'telephones, phonographs and a model telegraph made by Edison himself. Tied up at ' +
        'the quay for good is a ferry from 1953, 76.8 metres long, with room for 2,100 ' +
        'passengers, and you can walk its decks. Many exhibits have buttons and ' +
        'handles: here “do not touch” applies less than anywhere else in the city. Closed ' +
        'on Mondays.',
    },
    facts: [
      {
        el: 'Άνοιξε στις 13 Δεκεμβρίου 1994 σε ένα παλιό χυτήριο για άγκυρες.',
        en: 'It opened on 13 December 1994 in an old anchor foundry.',
      },
      {
        el: 'Το δεύτερο κτίριο του, από το 2001, ήταν ναυπηγείο επισκευών του 1861.',
        en: 'Its second building, from 2001, was a ship-repair yard built in 1861.',
      },
      {
        el: 'Το φέρι Fenerbahçe, δεμένο έξω, έχει μήκος 76,8 μέτρα και μπορείς να ανέβεις πάνω του.',
        en: 'The Fenerbahçe ferry, moored outside, is 76.8 metres long and you can go aboard.',
      },
      {
        el: 'Είναι κλειστό τη Δευτέρα.',
        en: 'It is closed on Mondays.',
      },
    ],
    location: {
      lat: 41.04227,
      lng: 28.94926,
      anchor: 'centroid',
      confidence: 'C',
      sources: [
        { kind: 'wikidata', ref: 'Q3404565', deltaM: 0 },
        { kind: 'osm', ref: 'relation/4297527', deltaM: 69 },
      ],
      verifiedAt: '2026-09-12',
      note: 'Wikipedia carries no coordinate and the OSM relation centre, 69 m away, spans both buildings on either side of the road. The pin sits between them.',
      // The museum's own site gives its address as Rahmi M. Koç Caddesi 3, Hasköy; the
      // two buildings face each other across that road, the shipyard half on the water.
      findIt: {
        el: 'Η είσοδος είναι στην οδό Rahmi M. Koç, αριθμός 3, στο Hasköy: τα δύο κτίρια είναι αντικριστά στον ίδιο δρόμο, και αυτό με τα καράβια είναι στη μεριά του νερού.',
        en: 'The way in is at Rahmi M. Koç Caddesi 3, in Hasköy: the two buildings face each other across the same road, and the one with the boats is on the water side.',
      },
      map: { x: 0.235, y: 0.115 },
    },
    question: {
      q: {
        el: 'Τι έφτιαχναν στο πρώτο κτίριο του μουσείου πριν από τριακόσια χρόνια;',
        en: 'What was made in the museum’s first building three hundred years ago?',
      },
      answers: [
        { el: 'Άγκυρες για πλοία', en: 'Ship anchors' },
        { el: 'Κανόνια για τον στρατό', en: 'Cannons for the army' },
        { el: 'Χαλιά για το παλάτι', en: 'Carpets for the palace' },
        { el: 'Πανιά για τον στόλο', en: 'Sails for the navy' },
      ],
      explanation: {
        el:
          'Το κτίριο λεγόταν Lengerhane, «το σπίτι των αγκυρών». Εδώ έλιωναν το σίδερο για ' +
          'τις άγκυρες και τις αλυσίδες του οθωμανικού στόλου.',
        en:
          'The building was called the Lengerhane, “the house of anchors”. Iron was melted ' +
          'here for the anchors and chains of the Ottoman fleet.',
      },
    },

    museum: {
      doorNote: {
        el: 'Δύο κτίρια, ένα εισιτήριο: μη φύγεις χωρίς να περάσεις τον δρόμο προς το νερό, εκεί είναι τα καράβια.',
        en: 'Two buildings, one ticket: do not leave without crossing the road to the water, where the boats are.',
      },
      rooms: [
        {
          id: 'istanbul-rahmi-koc-museum-on-the-water',
          emoji: '⛴️',
          name: { el: 'Στο νερό', en: 'On the water' },
          intro: {
            el:
              'Το παλιό ναυπηγείο έχει προβλήτα, και στην προβλήτα είναι δεμένα καράβια που ' +
              'μπορείς να ανέβεις. Το ένα μετέφερε δύο χιλιάδες ανθρώπους τη φορά στα νησιά· ' +
              'το άλλο, τόσο μικρό που δεν το πιστεύεις, έκανε τον γύρο του κόσμου. Και ένα ' +
              'αυτοκίνητο εδώ κολυμπάει.',
            en:
              'The old shipyard has a quay, and moored at the quay are boats you can climb ' +
              'aboard. One carried two thousand people at a time to the islands; the other, ' +
              'so small you will hardly believe it, went right round the world. And one car ' +
              'here can swim.',
          },
          exhibits: [
            {
              id: 'istanbul-rahmi-koc-museum-fenerbahce-ferry',
              name: { el: 'Το φέρι Fenerbahçe', en: 'The Fenerbahçe ferry' },
              blurb: {
                el:
                  'Ένα επιβατηγό πλοιάριο με δύο καταστρώματα, ναυπηγημένο το 1952 στη ' +
                  'Σκωτία και σε υπηρεσία από τις 14 Μαΐου 1953. Χωρούσε 2.100 επιβάτες και ' +
                  'για δεκαετίες πηγαινοερχόταν από το Sirkeci στα Πριγκηπόννησα και στη ' +
                  'Γιάλοβα, με τους πωλητές τσαγιού να γυρίζουν τα καταστρώματα και τους ' +
                  'γλάρους να ακολουθούν. Το 2009 ο δήμος το παρέδωσε στο μουσείο, και από ' +
                  'τότε είναι δεμένο εδώ για πάντα: 76,8 μέτρα πλοίο στην προβλήτα. ' +
                  'Μπορείς να μπεις μέσα, να καθίσεις στα ξύλινα καθίσματα και να δεις το ' +
                  'μηχανοστάσιο. Το 2021 το πήραν στο ναυπηγείο για επισκευή και το έφεραν ' +
                  'πίσω ανανεωμένο.',
                en:
                  'A passenger ferry with two decks, built in Scotland in 1952 and in service ' +
                  'from 14 May 1953. It carried 2,100 passengers and for decades went back ' +
                  'and forth from Sirkeci to the Princes’ Islands and Yalova, with tea sellers ' +
                  'walking its decks and seagulls following behind. In 2009 the city handed ' +
                  'it to the museum, and it has been moored here for good ever since: 76.8 ' +
                  'metres of ship at the quay. You can go aboard, sit on the wooden ' +
                  'benches and look into the engine room. In 2021 it was taken to a shipyard ' +
                  'for repairs and brought back renewed.',
              },
              question: {
                q: {
                  el: 'Πόσους επιβάτες χωρούσε αυτό το φέρι;',
                  en: 'How many passengers could this ferry carry?',
                },
                answers: [
                  { el: '2.100 επιβάτες', en: '2,100 passengers' },
                  { el: '210 επιβάτες', en: '210 passengers' },
                  { el: '21.000 επιβάτες', en: '21,000 passengers' },
                  { el: '50 επιβάτες', en: '50 passengers' },
                ],
                explanation: {
                  el: 'Δύο χιλιάδες εκατό άνθρωποι, όσο ένα ολόκληρο χωριό, σε κάθε ταξίδι προς τα νησιά.',
                  en: 'Two thousand one hundred people, a whole village, on every trip to the islands.',
                },
              },
            },
            {
              id: 'istanbul-rahmi-koc-museum-kismet',
              name: { el: 'Το Kısmet', en: 'Kısmet' },
              blurb: {
                el:
                  'Ένα ιστιοφόρο μήκους μόλις 10,5 μέτρων. Στις 22 Αυγούστου 1965 ο Sadun ' +
                  'Boro και η γυναίκα του Oda σάλπαραν με αυτό από την Κωνσταντινούπολη, και ' +
                  'γύρισαν τον Ιούνιο του 1968, αφού είχαν κάνει τον γύρο της Γης: ο πρώτος ' +
                  'Τούρκος που το κατάφερε ποτέ. Στα Κανάρια Νησιά ανέβηκε στο σκάφος μια ' +
                  'γάτα, η Miço, και ταξίδεψε μαζί τους ως το τέλος. Το ταξίδι κράτησε ' +
                  'τριάντα τέσσερις μήνες. Μετά, ο Boro συνέχισε να ζει και να ταξιδεύει ' +
                  'πάνω του για σαράντα έξι χρόνια, και το χάρισε στο μουσείο. Το όνομα ' +
                  'σημαίνει «τύχη», αλλά ο κόσμος που το βλέπει από κοντά καταλαβαίνει ότι ' +
                  'δεν ήταν μόνο τύχη.',
                en:
                  'A sailing boat just 10.5 metres long. On 22 August 1965 Sadun Boro and his ' +
                  'wife Oda set sail on it from Istanbul, and they came back in June 1968 ' +
                  'having gone right round the Earth: the first Turk ever to do it. In the ' +
                  'Canary Islands a cat called Miço came aboard and travelled with them to the ' +
                  'end. The voyage took thirty-four months. Afterwards Boro went on living and ' +
                  'sailing on the boat for forty-six years, and then gave it to the museum. ' +
                  'The name means “luck”, but anyone who looks at it closely understands that ' +
                  'it was not only luck.',
              },
              question: {
                q: {
                  el: 'Ποιος ανέβηκε στο σκάφος στα Κανάρια Νησιά;',
                  en: 'Who came aboard in the Canary Islands?',
                },
                answers: [
                  { el: 'Μια γάτα', en: 'A cat' },
                  { el: 'Ένας παπαγάλος', en: 'A parrot' },
                  { el: 'Ένας ναυαγός', en: 'A castaway' },
                  { el: 'Ένας σκύλος', en: 'A dog' },
                ],
                explanation: {
                  el: 'Η γάτα Miço έγινε το τρίτο μέλος του πληρώματος και έκανε τον γύρο του κόσμου χωρίς να κωπηλατήσει ούτε μία φορά.',
                  en: 'Miço the cat became the third member of the crew and went round the world without rowing once.',
                },
              },
            },
            {
              id: 'istanbul-rahmi-koc-museum-amphibious-car',
              name: { el: 'Το αυτοκίνητο που κολυμπάει', en: 'The car that swims' },
              blurb: {
                el:
                  'Ένα αμφίβιο αυτοκίνητο του 1961: στον δρόμο τρέχει με τέσσερις ρόδες, και ' +
                  'όταν φτάσει σε μια ράμπα κατεβαίνει στο νερό, οι ρόδες γίνονται πηδάλιο ' +
                  'και δύο προπέλες στην ουρά του το σπρώχνουν σαν βάρκα. Το αμάξωμά του ' +
                  'είναι στεγανό σαν κύτος, οι πόρτες κλείνουν με διπλό μάνταλο για να μη ' +
                  'μπαίνει νερό, και ο οδηγός γίνεται καπετάνιος χωρίς να αλλάξει κάθισμα. ' +
                  'Τέτοια αυτοκίνητα φτιάχτηκαν λίγα, γιατί ήταν μέτρια αυτοκίνητα και μέτριες ' +
                  'βάρκες, αλλά κανείς που τα είδε να μπαίνουν στη θάλασσα δεν το ξέχασε. Το ' +
                  'μουσείο το εκθέτει δίπλα στα καράβια, στην πλευρά του νερού, εκεί όπου ' +
                  'ανήκει και στους δύο κόσμους.',
                en:
                  'An amphibious car from 1961: on the road it runs on four wheels, and when ' +
                  'it reaches a slipway it drives into the water, the wheels become the ' +
                  'rudder and two propellers at its tail push it along like a boat. Its body ' +
                  'is sealed like a hull, its doors lock twice so that no water gets in, and ' +
                  'the driver turns into a captain without changing seats. Only a few cars ' +
                  'like this were ever built, because they were middling cars and middling ' +
                  'boats, but nobody who saw one drive into the sea ever forgot it. The museum ' +
                  'shows it beside the ships, on the water side, where it belongs to both ' +
                  'worlds.',
              },
              question: {
                q: {
                  el: 'Τι σπρώχνει αυτό το αυτοκίνητο όταν είναι μέσα στο νερό;',
                  en: 'What pushes this car along when it is in the water?',
                },
                answers: [
                  { el: 'Δύο προπέλες', en: 'Two propellers' },
                  { el: 'Οι τέσσερις ρόδες του', en: 'Its four wheels turning' },
                  { el: 'Ένα μικρό πανί', en: 'A small folding sail' },
                  { el: 'Κουπιά από τα παράθυρα', en: 'Oars from the windows' },
                ],
                explanation: {
                  el: 'Οι ρόδες μόνο στρίβουν, σαν πηδάλιο. Την κίνηση τη δίνουν δύο προπέλες στο πίσω μέρος, όπως σε μια βάρκα με μηχανή.',
                  en: 'The wheels only steer, like a rudder. The push comes from two propellers at the back, as on a motorboat.',
                },
              },
            },
          ],
        },
        {
          id: 'istanbul-rahmi-koc-museum-on-rails',
          emoji: '🚋',
          name: { el: 'Σε ράγες', en: 'On rails' },
          intro: {
            el:
              'Στη σιδηροδρομική αίθουσα στέκονται τρία οχήματα που ξέρουν την Πόλη καλύτερα ' +
              'από τους περισσότερους ανθρώπους της: ένα βαγόνι που πήγε έναν σουλτάνο ως το ' +
              'Λονδίνο, ένα τραμ που κουδούνιζε στους δρόμους της για τριάντα χρόνια, και ένα ' +
              'βαγόνι από το υπόγειο τρενάκι του 1875, με τη μηχανή που το τραβούσε.',
            en:
              'In the railway hall stand three vehicles that know the city better than most ' +
              'of its people: a carriage that took a sultan all the way to London, a tram ' +
              'that rang its bell through the streets for thirty years, and a car from the ' +
              'underground railway of 1875, together with the engine that pulled it.',
          },
          exhibits: [
            {
              id: 'istanbul-rahmi-koc-museum-sultans-carriage',
              name: { el: 'Το βαγόνι του Abdülaziz, 1867', en: 'Abdülaziz’s railway carriage, 1867' },
              blurb: {
                el:
                  'Ένα βαγόνι φτιαγμένο στο Μπέρμιγχαμ της Αγγλίας και χαρισμένο στον ' +
                  'σουλτάνο Abdülaziz από την εταιρεία που έχτισε τον πρώτο σιδηρόδρομο της ' +
                  'Τουρκίας. Το 1867 ο σουλτάνος ταξίδεψε μέσα του στην Ευρώπη, κάτι που ' +
                  'κανένας σουλτάνος δεν είχε κάνει ποτέ: στο Παρίσι συνάντησε τον ' +
                  'αυτοκράτορα Ναπολέοντα Γ΄, στο Λονδίνο τη βασίλισσα Βικτωρία, και μετά ' +
                  'τους βασιλιάδες του Βελγίου και της Πρωσίας και τον αυτοκράτορα της ' +
                  'Αυστρίας. Μέσα έχει βελούδα, καθρέφτες και σκαλιστό ξύλο, σαν μικρό ' +
                  'σαλόνι παλατιού που τρέχει πάνω σε ράγες. Κοίτα από τα παράθυρά του και ' +
                  'φαντάσου την Ευρώπη του 1867 να περνάει απ’ έξω.',
                en:
                  'A carriage built in Birmingham, England, and presented to Sultan Abdülaziz ' +
                  'by the company that built the first railway in Türkiye. In 1867 the sultan ' +
                  'travelled in it through Europe, something no sultan had ever done: in ' +
                  'Paris he met Emperor Napoleon III, in London Queen Victoria, and then the ' +
                  'kings of Belgium and Prussia and the emperor of Austria. Inside it has ' +
                  'velvet, mirrors and carved wood, like a small palace drawing room running ' +
                  'on rails. Look out of its windows and imagine the Europe of 1867 going ' +
                  'past.',
              },
              question: {
                q: {
                  el: 'Ποια βασίλισσα συνάντησε ο σουλτάνος σε αυτό το ταξίδι του 1867;',
                  en: 'Which queen did the sultan meet on his journey of 1867?',
                },
                answers: [
                  { el: 'Τη Βικτωρία', en: 'Victoria' },
                  { el: 'Την Ελισάβετ', en: 'Elizabeth' },
                  { el: 'Την Κλεοπάτρα', en: 'Cleopatra' },
                  { el: 'Την Αμαλία', en: 'Amalia' },
                ],
                explanation: {
                  el: 'Η βασίλισσα Βικτωρία τον υποδέχτηκε στο Λονδίνο. Ήταν το πρώτο ταξίδι Οθωμανού σουλτάνου στη δυτική Ευρώπη.',
                  en: 'Queen Victoria received him in London. It was the first journey of an Ottoman sultan to western Europe.',
                },
              },
            },
            {
              id: 'istanbul-rahmi-koc-museum-tram-1934',
              name: { el: 'Το τραμ του 1934', en: 'The tram of 1934' },
              blurb: {
                el:
                  'Ένα ηλεκτρικό τραμ που έφτιαξε η γερμανική εταιρεία Siemens και μπήκε σε ' +
                  'υπηρεσία στις 29 Οκτωβρίου 1934, την επέτειο της Δημοκρατίας. Για πάνω ' +
                  'από τριάντα χρόνια κουδούνιζε στους δρόμους της Πόλης, με τον οδηγό ' +
                  'όρθιο μπροστά και τον εισπράκτορα να περνάει ανάμεσα στους επιβάτες, ' +
                  'ώσπου τα τραμ σταμάτησαν το 1966 για να κάνουν χώρο στα λεωφορεία. Οι ' +
                  'ξύλινοι πάγκοι του, οι μπρούντζινες λαβές και τα παράθυρα που κατεβαίνουν ' +
                  'είναι όπως ήταν. Στην İstiklal ένα παρόμοιο κόκκινο τραμ γύρισε στις ράγες ' +
                  'το 1990, κι έτσι μπορείς να δεις εδώ το παλιό και μετά να ανέβεις στο ' +
                  'καινούργιο.',
                en:
                  'An electric tram built by the German company Siemens and put into service ' +
                  'on 29 October 1934, the anniversary of the Republic. For more than thirty ' +
                  'years it rang its bell through the streets of the city, with the driver ' +
                  'standing at the front and the conductor squeezing between the passengers, ' +
                  'until the trams stopped in 1966 to make room for buses. Its wooden benches, ' +
                  'brass handles and wind-down windows are just as they were. On İstiklal a ' +
                  'similar red tram went back on the rails in 1990, so you can look at the old ' +
                  'one here and then ride the new one.',
              },
              question: {
                q: {
                  el: 'Γιατί σταμάτησαν τα τραμ της Πόλης το 1966;',
                  en: 'Why did the city’s trams stop in 1966?',
                },
                answers: [
                  { el: 'Για να χωρέσουν τα λεωφορεία', en: 'To make room for buses' },
                  { el: 'Γιατί τέλειωσε το ρεύμα', en: 'Because the electricity ran out' },
                  { el: 'Γιατί οι ράγες σκούριασαν', en: 'Because the rails had rusted' },
                  { el: 'Γιατί ο κόσμος τα φοβόταν', en: 'Because people were afraid of them' },
                ],
                explanation: {
                  el: 'Τη δεκαετία του 1960 πολλές πόλεις νόμιζαν ότι το μέλλον ήταν το λεωφορείο. Το 1990 η Πόλη άλλαξε γνώμη.',
                  en: 'In the 1960s many cities believed the future was the bus. In 1990 the city changed its mind.',
                },
              },
            },
            {
              id: 'istanbul-rahmi-koc-museum-tunel-carriage',
              name: { el: 'Το βαγόνι του Tünel και η μηχανή του', en: 'The Tünel car and its winding engine' },
              blurb: {
                el:
                  'Το Tünel είναι ένα κοντό, απότομο υπόγειο τρενάκι που ανεβάζει από το ' +
                  'Karaköy στην İstiklal, 573 μέτρα μέσα σε τούνελ. Άνοιξε στις 17 Ιανουαρίου ' +
                  '1875, δώδεκα χρόνια μετά το μετρό του Λονδίνου, και είναι ο δεύτερος πιο ' +
                  'παλιός υπόγειος σιδηρόδρομος του κόσμου. Το ξύλινο βαγόνι εδώ είναι από ' +
                  'τον 19ο αιώνα και δεν είχε μηχανή: το τραβούσαν μεταλλικά συρματόσχοινα, ' +
                  'τυλιγμένα σε ένα τεράστιο τύμπανο που γύριζε μια ατμομηχανή με δύο ' +
                  'κυλίνδρους, φτιαγμένη στη Γαλλία το 1873. Δίπλα στο βαγόνι στέκεται ' +
                  'ακριβώς αυτή η μηχανή. Το σημερινό Tünel κάνει τη διαδρομή σε ενάμισι ' +
                  'λεπτό, με ηλεκτρικά βαγόνια πάνω σε λάστιχα.',
                en:
                  'The Tünel is a short, steep underground railway that climbs from Karaköy ' +
                  'to İstiklal, 573 metres inside a tunnel. It opened on 17 January 1875, ' +
                  'twelve years after the London Underground, and is the second-oldest ' +
                  'underground railway in the world. The wooden car here is from the 19th ' +
                  'century and had no engine of its own: it was pulled by metal cables wound ' +
                  'on a huge drum turned by a two-cylinder steam engine, built in France in ' +
                  '1873. That very engine stands next to the car. Today’s Tünel makes the trip ' +
                  'in a minute and a half, with electric cars running on rubber tyres.',
              },
              question: {
                q: {
                  el: 'Τι τραβούσε αυτό το βαγόνι μέσα στο τούνελ;',
                  en: 'What pulled this car through the tunnel?',
                },
                answers: [
                  { el: 'Συρματόσχοινα', en: 'Steel cables' },
                  { el: 'Μια ατμομηχανή μπροστά', en: 'A locomotive in front' },
                  { el: 'Δύο γερά άλογα', en: 'Two strong horses' },
                  { el: 'Δικός του κινητήρας', en: 'A motor of its own' },
                ],
                explanation: {
                  el: 'Η ατμομηχανή έμενε στην κορυφή του λόφου και γύριζε το τύμπανο· το συρματόσχοινο έκανε την υπόλοιπη δουλειά.',
                  en: 'The steam engine stayed at the top of the hill and turned the drum; the cable did the rest of the work.',
                },
              },
            },
          ],
        },
      ],
      riddles: [
        {
          id: 'istanbul-rahmi-koc-museum-riddle-1',
          difficulty: 1,
          prompt: {
            el:
              'Γεννήθηκα στη Σκωτία και κουβαλούσα δύο χιλιάδες ανθρώπους τη φορά στα ' +
              'νησιά. Τώρα είμαι δεμένο για πάντα, και τις σκάλες μου τις ανεβαίνουν παιδιά ' +
              'αντί για επιβάτες.',
            en:
              'I was born in Scotland and carried two thousand people at a time to the ' +
              'islands. Now I am tied up for good, and children climb my stairs instead of ' +
              'passengers.',
          },
          hint: {
            el: 'Είμαι το μόνο πράγμα εδώ που είχε κάποτε πωλητές τσαγιού στα καταστρώματά του.',
            en: 'I am the only thing here that once had tea sellers walking its decks.',
          },
          answerExhibitId: 'istanbul-rahmi-koc-museum-fenerbahce-ferry',
        },
        {
          id: 'istanbul-rahmi-koc-museum-riddle-2',
          difficulty: 2,
          prompt: {
            el:
              'Είμαι μικρό, μόλις δέκα μέτρα και κάτι, αλλά έκανα ολόκληρο τον γύρο της Γης ' +
              'με δύο ανθρώπους και μια γάτα. Μας πήρε σχεδόν τρία χρόνια.',
            en:
              'I am small, just ten metres and a bit, but I went all the way round the Earth ' +
              'with two people and a cat. It took us almost three years.',
          },
          hint: {
            el: 'Το όνομά μου σημαίνει «τύχη» στα τουρκικά.',
            en: 'My name means “luck” in Turkish.',
          },
          answerExhibitId: 'istanbul-rahmi-koc-museum-kismet',
        },
        {
          id: 'istanbul-rahmi-koc-museum-riddle-3',
          difficulty: 3,
          prompt: {
            el:
              'Κύλησα έναν άρχοντα της Ανατολής ως το Παρίσι και το Λονδίνο, τότε που ' +
              'κανείς σαν αυτόν δεν είχε πάει τόσο δυτικά. Δεν έχω δική μου μηχανή· πάντα με ' +
              'τραβούσαν.',
            en:
              'I rolled a ruler of the East all the way to Paris and London, when nobody ' +
              'like him had ever gone that far west. I have no engine of my own; I was ' +
              'always pulled.',
          },
          hint: {
            el: 'Μέσα μου έχει βελούδο και καθρέφτες, σαν σαλόνι παλατιού.',
            en: 'Inside me there is velvet and mirrors, like a palace drawing room.',
          },
          answerExhibitId: 'istanbul-rahmi-koc-museum-sultans-carriage',
        },
      ],
    },
  },

  // ---------------------------------------------------------------- maiden's tower
  {
    id: 'istanbul-maidens-tower',
    cityId: 'istanbul',
    emoji: '🏰',
    category: 'landmark',
    difficulty: 1,

    name: { el: 'Πύργος της Κόρης (Kız Kulesi)', en: 'The Maiden’s Tower (Kız Kulesi)' },
    tagline: {
      el: 'Ένας μικρός πύργος σε ένα βραχάκι στη μέση του νερού',
      en: 'A little tower on a rock in the middle of the water',
    },
    story: {
      el:
        'Διακόσια μέτρα από την ασιατική ακτή, στην είσοδο του Βοσπόρου, ένα βραχάκι ' +
        'κρατάει έναν πύργο. Το 1110 ο αυτοκράτορας Αλέξιος Κομνηνός έχτισε εδώ έναν ' +
        'ξύλινο πύργο και από αυτόν τέντωσε μια σιδερένια αλυσίδα ως την απέναντι ακτή, για ' +
        'να κλείνει το πέρασμα στα εχθρικά πλοία. Από τότε ο πύργος άλλαξε δουλειά πολλές ' +
        'φορές: παρατηρητήριο, φάρος, και από το 1829 σταθμός καραντίνας, όπου έμεναν οι ' +
        'άρρωστοι ναυτικοί μέχρι να γίνουν καλά. Ένας σεισμός τον γκρέμισε το 1509, μια φωτιά ' +
        'τον έκαψε το 1721, και το 1763 ξαναχτίστηκε από πέτρα, όπως τον βλέπεις. Το όνομά ' +
        'του έρχεται από έναν θρύλο: ένας μάντης είπε σε έναν αυτοκράτορα ότι η κόρη του θα ' +
        'πεθάνει από δάγκωμα φιδιού στα δέκατα όγδοα γενέθλιά της. Ο πατέρας την έκλεισε σε ' +
        'αυτόν τον πύργο, μακριά από κάθε φίδι. Στα γενέθλιά της της έστειλε ένα καλάθι ' +
        'φρούτα, και μέσα στα φρούτα κρυβόταν ένα φίδι. Οι Έλληνες τον έλεγαν Πύργο του ' +
        'Λέανδρου, από έναν άλλο μύθο για έναν νέο που κολυμπούσε κάθε νύχτα προς ένα φως. ' +
        'Ο πύργος ανακαινίστηκε από το 2021 ως το 2023 και ξανάνοιξε, και μικρές βάρκες σε ' +
        'φέρνουν από την ακτή του Üsküdar.',
      en:
        'Two hundred metres off the Asian shore, at the entrance to the Bosphorus, a small ' +
        'rock holds a tower. In 1110 the emperor Alexios Komnenos built a wooden tower here ' +
        'and stretched an iron chain from it to the opposite shore, to close the strait to ' +
        'enemy ships. Since then the tower has changed jobs many times: a watchtower, a ' +
        'lighthouse, and from 1829 a quarantine station, where sick sailors stayed until ' +
        'they were well. An earthquake knocked it down in 1509, a fire burned it in 1721, and ' +
        'in 1763 it was rebuilt in stone, as you see it. Its name comes from a legend: a ' +
        'fortune-teller told an emperor that his daughter would die of a snakebite on her ' +
        'eighteenth birthday. Her father shut her in this tower, far from any snake. On her ' +
        'birthday he sent her a basket of fruit, and hidden among the fruit was a snake. The ' +
        'Greeks called it Leander’s Tower, after another myth about a young man who swam ' +
        'every night towards a light. The tower was restored from 2021 to 2023 and reopened, ' +
        'and small boats bring you across from the Üsküdar shore.',
    },
    facts: [
      {
        el: 'Στέκεται σε ένα βραχάκι 200 μέτρα από την ακτή του Üsküdar.',
        en: 'It stands on an islet 200 m from the Üsküdar shore.',
      },
      {
        el: 'Το 1110 μια αλυσίδα ξεκινούσε από εδώ και έκλεινε το πέρασμα του Βοσπόρου.',
        en: 'In 1110 a chain ran from here across the water to close the strait.',
      },
      {
        el: 'Ήταν φάρος, και από το 1829 σταθμός καραντίνας για άρρωστους ναυτικούς.',
        en: 'It was a lighthouse, then from 1829 a quarantine station for sick sailors.',
      },
      {
        el: 'Ξανάνοιξε τον Μάιο του 2023 μετά από δύο χρόνια επισκευών.',
        en: 'It reopened in May 2023 after two years of repairs.',
      },
    ],
    location: {
      lat: 41.02111,
      lng: 29.00417,
      anchor: 'centroid',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q848397', deltaM: 0 },
        { kind: 'osm', ref: 'way/103821246', deltaM: 3 },
        { kind: 'wikipedia', ref: "Maiden's Tower", deltaM: 9 },
      ],
      verifiedAt: '2026-09-12',
      note: 'The tower itself, on its islet.',
      findIt: {
        el: 'Δεν πας με τα πόδια: οι βάρκες φεύγουν από την ακτή Salacak του Üsküdar, 200 μέτρα μακριά.',
        en: 'You cannot walk to it: the boats leave from the Salacak shore of Üsküdar, 200 m away.',
      },
      map: { x: 0.905, y: 0.538 },
    },
    question: {
      q: {
        el: 'Στον θρύλο, τι ήταν κρυμμένο στο καλάθι με τα φρούτα;',
        en: 'In the legend, what was hidden in the basket of fruit?',
      },
      answers: [
        { el: 'Ένα φίδι', en: 'A snake' },
        { el: 'Ένα κλειδί', en: 'A key' },
        { el: 'Ένα γράμμα', en: 'A letter' },
        { el: 'Ένα δαχτυλίδι', en: 'A ring' },
      ],
      explanation: {
        el:
          'Ο πατέρας έχτισε έναν πύργο στη θάλασσα για να μην πλησιάσει ποτέ φίδι την ' +
          'κόρη του, και το φίδι ήρθε με το δικό του δώρο.',
        en:
          'The father built a tower in the sea so that no snake could ever reach his ' +
          'daughter, and the snake arrived with his own present.',
      },
    },
  },

  // ---------------------------------------------------------------------- chora
  {
    id: 'istanbul-chora',
    cityId: 'istanbul',
    emoji: '🎨',
    category: 'art',
    difficulty: 3,

    name: { el: 'Μονή της Χώρας (Kariye)', en: 'The Chora (Kariye)' },
    tagline: {
      el: 'Τα ωραιότερα ψηφιδωτά του Βυζαντίου, κρυμμένα 400 χρόνια κάτω από σοβά',
      en: 'The finest Byzantine mosaics, hidden for 400 years under plaster',
    },
    story: {
      el:
        'Αυτή η εκκλησία ξεκίνησε ως μοναστήρι έξω από τα τείχη της Πόλης, «στη χώρα», ' +
        'δηλαδή στην εξοχή, και το όνομα της έμεινε ακόμα κι όταν τα τείχη μεγάλωσαν και ' +
        'την έκλεισαν μέσα. Ανάμεσα στο 1310 και το 1317 ένας πλούσιος και πολύ μορφωμένος ' +
        'άρχοντας, ο Θεόδωρος Μετοχίτης, πλήρωσε για να γεμίσουν οι τοίχοι και οι θόλοι της ' +
        'με ψηφιδωτά και τοιχογραφίες: τη ζωή της Παναγίας από μωρό, θαύματα, αγίους. Είναι ' +
        'από τα ωραιότερα έργα που άφησε ποτέ το Βυζάντιο. Πάνω από την πόρτα τον βλέπεις ' +
        'τον ίδιο, γονατιστό, να προσφέρει στον Χριστό ένα μικρό μοντέλο της εκκλησίας. ' +
        'Πενήντα περίπου χρόνια μετά το 1453 έγινε τζαμί, το Kariye, και επειδή στα τζαμιά ' +
        'δεν επιτρέπονται εικόνες ανθρώπων, τα ψηφιδωτά σκεπάστηκαν με σοβά. Αυτό τα ' +
        'έσωσε από τη βροχή και τον καπνό για τετρακόσια χρόνια. Το 1945 το κτίριο έγινε ' +
        'μουσείο, και από το 1948 Αμερικανοί ειδικοί καθάρισαν προσεκτικά τον σοβά· το 1958 ' +
        'άνοιξε για τον κόσμο. Από το 2020 είναι ξανά τζαμί, και τα ψηφιδωτά στους ' +
        'προθαλάμους φαίνονται ακόμα σε όποιον μπαίνει.',
      en:
        'This church began as a monastery outside the city walls, “in the chora”, which ' +
        'means in the countryside, and the name stuck even after the walls grew and shut it ' +
        'inside. Between 1310 and 1317 a rich and very learned statesman, Theodore ' +
        'Metochites, paid to fill its walls and domes with mosaics and frescoes: the life of ' +
        'Mary from babyhood, miracles, saints. They are among the finest works Byzantium ' +
        'ever left behind. Above the door you can see the man himself, kneeling, offering ' +
        'Christ a little model of the church. About fifty years after 1453 it became a ' +
        'mosque, the Kariye, and because pictures of people are not allowed in mosques, the ' +
        'mosaics were covered with plaster. That saved them from rain and smoke for four ' +
        'hundred years. In 1945 the building became a museum, and from 1948 American ' +
        'experts carefully cleaned the plaster away; in 1958 it opened to visitors. Since ' +
        '2020 it has been a mosque again, and the mosaics in the entrance halls can still be ' +
        'seen by everyone who comes in.',
    },
    facts: [
      {
        el: 'Τα ψηφιδωτά φτιάχτηκαν ανάμεσα στο 1310 και το 1317.',
        en: 'The mosaics were made between about 1310 and 1317.',
      },
      {
        el: 'Ο Θεόδωρος Μετοχίτης, που τα πλήρωσε, εικονίζεται να δίνει στον Χριστό ένα μοντέλο της εκκλησίας.',
        en: 'Theodore Metochites, who paid for them, is pictured handing Christ a model of the church.',
      },
      {
        el: 'Ήταν μουσείο από το 1945 ως το 2020 και είναι ξανά τζαμί.',
        en: 'It was a museum from 1945 to 2020 and is a mosque again.',
      },
      {
        el: 'Το όνομα Χώρα σημαίνει «στην εξοχή»: κάποτε στεκόταν έξω από τα τείχη.',
        en: 'The name Chora means “in the countryside”: it once stood outside the city walls.',
      },
    ],
    location: {
      lat: 41.03111,
      lng: 28.93917,
      anchor: 'centroid',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q849489', deltaM: 0 },
        { kind: 'osm', ref: 'relation/7614527', deltaM: 16 },
        { kind: 'wikipedia', ref: 'The Chora', deltaM: 17 },
      ],
      verifiedAt: '2026-09-12',
      note: 'The building itself, just inside the land walls at Edirnekapı.',
      findIt: {
        el: 'Στην πόρτα βγάλε τα παπούτσια σου και σκέπασε τους ώμους σου, όπως σε κάθε τζαμί.',
        en: 'At the door take off your shoes and cover your shoulders, as in every mosque.',
      },
      map: { x: 0.112, y: 0.338 },
    },
    question: {
      q: {
        el: 'Πώς έμειναν σώα τα ψηφιδωτά για αιώνες μέσα στο τζαμί;',
        en: 'How were the mosaics kept safe for centuries inside the mosque?',
      },
      answers: [
        { el: 'Κάτω από σοβά', en: 'Under plaster' },
        { el: 'Πίσω από ξύλινες πόρτες', en: 'Behind wooden panels' },
        { el: 'Κάτω από χοντρά χαλιά', en: 'Under thick carpets' },
        { el: 'Κλειδωμένα στο παλάτι', en: 'Locked in the palace' },
      ],
      explanation: {
        el:
          'Ο σοβάς μπήκε για να κρύψει τις εικόνες, αλλά τις προστάτεψε κιόλας. Όταν τον ' +
          'έβγαλαν, τα χρυσά ψηφιδωτά ήταν εκεί από κάτω.',
        en:
          'The plaster went on to hide the pictures, but it protected them too. When it ' +
          'came off, the golden mosaics were there underneath.',
      },
    },
  },
];

export const trails: Trail[] = [
  {
    id: 'istanbul-first-time',
    cityId: 'istanbul',
    emoji: '🕌',
    name: { el: 'Πρώτη φορά στην Πόλη', en: 'First time in the city' },
    promise: {
      el: 'Θα έχεις δει την πίστα, τον θόλο, το γαλάζιο τζαμί, το παλάτι, το παζάρι και τη γέφυρα, με αυτή τη σειρά.',
      en: 'You will have seen the racetrack, the dome, the blue mosque, the palace, the bazaar and the bridge, in that order.',
    },
    placeIds: [
      'istanbul-hippodrome',
      'istanbul-hagia-sophia',
      'istanbul-blue-mosque',
      'istanbul-topkapi-palace',
      'istanbul-grand-bazaar',
      'istanbul-galata-bridge',
    ],
  },
  {
    id: 'istanbul-two-hours',
    cityId: 'istanbul',
    emoji: '⏱️',
    name: { el: 'Δύο ώρες στο Sultanahmet', en: 'Two hours in Sultanahmet' },
    promise: {
      el: 'Τρία μέρη μέσα σε 450 μέτρα: ένας θόλος, μια υπόγεια δεξαμενή, μια πίστα.',
      en: 'Three places within 450 metres: a dome, an underground cistern, a racetrack.',
    },
    placeIds: ['istanbul-hagia-sophia', 'istanbul-basilica-cistern', 'istanbul-hippodrome'],
  },
  {
    id: 'istanbul-rainy-day',
    cityId: 'istanbul',
    emoji: '☔',
    name: { el: 'Μέρα βροχής', en: 'A rainy day' },
    promise: {
      el: 'Τέσσερα μέρη με στέγη: σαρκοφάγοι, κολόνες κάτω από τον δρόμο, 61 σκεπαστοί δρόμοι και μηχανές.',
      en: 'Four places with a roof: sarcophagi, columns under the street, 61 covered streets, and machines.',
    },
    placeIds: [
      'istanbul-archaeology-museums',
      'istanbul-basilica-cistern',
      'istanbul-grand-bazaar',
      'istanbul-rahmi-koc-museum',
    ],
  },
  {
    id: 'istanbul-across-the-horn',
    cityId: 'istanbul',
    emoji: '⛴️',
    name: { el: 'Γύρω από τον Κεράτιο', en: 'Around the Golden Horn' },
    promise: {
      el: 'Ο πύργος των Γενουατών, το κόκκινο τραμ, το Φανάρι, τα ψηφιδωτά της Χώρας και ένα μουσείο με μηχανές.',
      en: 'The Genoese tower, the red tram, the Phanar, the mosaics of the Chora and a museum of machines.',
    },
    placeIds: [
      'istanbul-galata-tower',
      'istanbul-flower-passage',
      'istanbul-patriarchate',
      'istanbul-chora',
      'istanbul-rahmi-koc-museum',
    ],
  },
];
