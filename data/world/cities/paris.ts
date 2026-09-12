/**
 * WiseBot World — Paris.
 *
 * Thirteen places, two of them museums with an interior. The first city built by
 * conversion rather than by fresh writing: ten of the thirteen come from the Explorer
 * product, whose text is the raw material here, reshaped to this module's lengths and
 * given sourced coordinates, museums and riddles.
 *
 * Every coordinate is copied from `data/world/coords/paris.json`. Nothing graded `D`.
 * No place claims an `entrance`, because no door here has been measured.
 *
 * One substitution is worth knowing about. Explorer pins the Pyramide du Louvre, which
 * sits 12 m from the museum's own point and would fail the separation audit as an
 * undeclared neighbour. The museum ships and the pyramid lives inside its story, where
 * it belongs: it is the door, not a separate place.
 *
 * `el` and `en` only. The other four arrive as overlay files, in the order fr, de, es,
 * it, and never as extra keys in here.
 */

import type { Place, Trail } from '../types';

export const places: Place[] = [
  // --------------------------------------------------------------- eiffel tower
  {
    id: 'paris-eiffel-tower',
    cityId: 'paris',
    emoji: '🗼',
    category: 'landmark',
    difficulty: 1,

    name: { el: 'Πύργος του Άιφελ', en: 'The Eiffel Tower' },
    tagline: {
      el: 'Χτίστηκε για να γκρεμιστεί σε είκοσι χρόνια',
      en: 'Built to be taken down after twenty years',
    },
    story: {
      el:
        'Το 1889 το Παρίσι ετοίμαζε μια τεράστια γιορτή, την Παγκόσμια Έκθεση, και ο ' +
        'μηχανικός Γκυστάβ Άιφελ υποσχέθηκε για πύλη της τον ψηλότερο πύργο του κόσμου. Η ' +
        'ομάδα του ένωσε περίπου δεκαοκτώ χιλιάδες σιδερένια κομμάτια με δυόμισι ' +
        'εκατομμύρια καρφιά, και σε λίγο περισσότερο από δύο χρόνια ο πύργος έφτασε τα ' +
        'τριακόσια μέτρα. Πολλοί Παριζιάνοι τον έβρισκαν απαίσιο και ζητούσαν να ' +
        'κατεδαφιστεί. Δεν ήταν παράλογο: η άδεια έλεγε ότι θα έμενε όρθιος μόνο είκοσι ' +
        'χρόνια και μετά θα γινόταν παλιοσίδερα. Τον έσωσε κάτι που κανείς δεν είχε ' +
        'φανταστεί όταν τον σχεδίαζαν. Ήταν το ψηλότερο πράγμα στην πόλη, άρα η τέλεια ' +
        'θέση για κεραίες, και όταν ο ασύρματος έγινε σημαντικός ο πύργος έγινε χρήσιμος. ' +
        'Δεν σώθηκε επειδή τον αγάπησαν οι Παριζιάνοι. Σώθηκε επειδή αποδείχτηκε χρήσιμος.',
      en:
        'In 1889 Paris was preparing an enormous party, the World Fair, and the engineer ' +
        'Gustave Eiffel promised it a gateway that would be the tallest tower on earth. His ' +
        'team joined about eighteen thousand pieces of iron with two and a half million ' +
        'rivets, and in a little over two years the tower reached three hundred metres. ' +
        'Many Parisians thought it hideous and asked for it to be pulled down. That was not ' +
        'unreasonable: the permit said it would stand for twenty years and then be sold for ' +
        'scrap. What saved it was something nobody had imagined while it was being designed. ' +
        'It was the tallest thing in the city, which made it the perfect place for aerials, ' +
        'and once radio mattered the tower became useful. It was not saved because people ' +
        'grew to love it. It was saved because it was needed.',
    },
    facts: [
      {
        el: 'Χτίστηκε σε λίγο περισσότερο από δύο χρόνια, με περίπου 18.000 σιδερένια κομμάτια.',
        en: 'It went up in a little over two years, from about 18,000 pieces of iron.',
      },
      {
        el: 'Στον καύσωνα ψηλώνει περίπου δεκαπέντε εκατοστά, γιατί το σίδερο διαστέλλεται.',
        en: 'In a heatwave it grows about fifteen centimetres, because iron expands.',
      },
      {
        el: 'Ο Άιφελ είχε δικό του μικρό διαμέρισμα κοντά στην κορυφή.',
        en: 'Eiffel kept a small private flat of his own near the top.',
      },
    ],
    location: {
      lat: 48.8583,
      lng: 2.29448,
      anchor: 'centroid',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q243', deltaM: 0 },
        { kind: 'osm', ref: 'way/5013364', deltaM: 5 },
        { kind: 'wikipedia', ref: 'Eiffel Tower', deltaM: 9 },
      ],
      verifiedAt: '2026-09-12',
    },
    question: {
      q: {
        el: 'Τι έσωσε τον πύργο από την κατεδάφιση;',
        en: 'What saved the tower from being pulled down?',
      },
      answers: [
        { el: 'Οι κεραίες', en: 'Radio aerials' },
        {
          el: 'Μια υπογραφή διάσημων καλλιτεχνών που τον υπερασπίστηκαν δημόσια',
          en: 'A petition signed by famous artists who defended it in public',
        },
        {
          el: 'Η απόφαση του Άιφελ να τον αγοράσει ολόκληρο με δικά του χρήματα',
          en: 'Eiffel’s decision to buy the whole thing with his own money',
        },
        {
          el: 'Ένας νόμος που απαγόρευσε την κατεδάφιση ψηλών κτιρίων στο Παρίσι',
          en: 'A law that banned the demolition of tall buildings anywhere in Paris',
        },
      ],
      explanation: {
        el:
          'Ήταν το ψηλότερο σημείο της πόλης, άρα η τέλεια θέση για κεραίες. Όταν ο ' +
          'ασύρματος έγινε σημαντικός, ο πύργος έγινε χρήσιμος και κανείς δεν τον ξήλωσε.',
        en:
          'It was the highest point in the city, so it was the perfect place for aerials. ' +
          'Once radio mattered the tower became useful, and nobody took it apart.',
      },
    },
  },

  // ------------------------------------------------------------ arc de triomphe
  {
    id: 'paris-arc-de-triomphe',
    cityId: 'paris',
    emoji: '🏛️',
    category: 'landmark',
    difficulty: 2,

    name: { el: 'Αψίδα του Θριάμβου', en: 'The Arc de Triomphe' },
    tagline: {
      el: 'Ο άνθρωπος που τη διέταξε δεν την είδε ποτέ τελειωμένη',
      en: 'The man who ordered it never saw it finished',
    },
    story: {
      el:
        'Το 1806 ο Ναπολέων είχε μόλις κερδίσει μια μεγάλη μάχη και διέταξε μια τεράστια ' +
        'αψίδα, ώστε να περνούν από κάτω της οι στρατιώτες του γυρίζοντας σπίτι. Το ' +
        'χτίσιμο κράτησε τριάντα χρόνια, πολύ περισσότερο από τη δική του εξουσία, και ο ' +
        'Ναπολέων δεν την είδε ποτέ τελειωμένη. Η αψίδα έχει ύψος πενήντα μέτρα, όσο ένα ' +
        'κτίριο δεκαέξι ορόφων, και στους τοίχους της είναι σκαλισμένα εκατοντάδες ' +
        'ονόματα μαχών και στρατηγών. Στέκεται στο κέντρο μιας πλατείας από την οποία ' +
        'ξεκινούν δώδεκα λεωφόροι σαν ακτίνες, και γι’ αυτό από ψηλά μοιάζει με αστέρι. ' +
        'Κάτω από την αψίδα υπάρχει ο τάφος ενός στρατιώτη που δεν αναγνωρίστηκε ποτέ, και ' +
        'δίπλα του μια φλόγα που την ανάβουν κάθε απόγευμα από το 1923 και δεν έχει σβήσει ' +
        'ποτέ από τότε.',
      en:
        'In 1806 Napoleon had just won a great battle and ordered an enormous arch, so that ' +
        'his soldiers could march home underneath it. Building it took thirty years, far ' +
        'longer than his own rule lasted, and Napoleon never saw it finished. The arch is ' +
        'fifty metres high, about the height of a sixteen-storey building, and hundreds of ' +
        'names of battles and generals are carved into its walls. It stands in the middle of ' +
        'a square from which twelve avenues run out like spokes, which is why from above it ' +
        'looks like a star. Under the arch lies the grave of a soldier who was never ' +
        'identified, and beside it a flame that has been lit every evening since 1923 and ' +
        'has never gone out.',
    },
    facts: [
      {
        el: 'Έχει ύψος πενήντα μέτρα και το χτίσιμό της κράτησε τριάντα χρόνια.',
        en: 'It is fifty metres high and took thirty years to build.',
      },
      {
        el: 'Από την πλατεία της ξεκινούν δώδεκα λεωφόροι, σαν ακτίνες αστεριού.',
        en: 'Twelve avenues run out from its square, like the points of a star.',
      },
      {
        el: 'Το 1919 ένας πιλότος πέρασε με το αεροπλάνο του μέσα από την αψίδα.',
        en: 'In 1919 a pilot flew his aeroplane straight through the arch.',
      },
    ],
    location: {
      lat: 48.87378,
      lng: 2.29504,
      anchor: 'centroid',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q64436', deltaM: 0 },
        { kind: 'osm', ref: 'way/226413508', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Arc de Triomphe', deltaM: 1 },
      ],
      verifiedAt: '2026-09-12',
    },
    question: {
      q: {
        el: 'Γιατί μοιάζει με αστέρι η πλατεία γύρω από την αψίδα;',
        en: 'Why does the square around the arch look like a star?',
      },
      answers: [
        { el: 'Ξεκινούν από αυτήν δώδεκα λεωφόροι', en: 'Twelve avenues run out of it' },
        {
          el: 'Γιατί τα φώτα της είναι τοποθετημένα σε σχήμα αστεριού στο οδόστρωμα',
          en: 'Because its lamps are laid out in the shape of a star on the road',
        },
        {
          el: 'Γιατί το σχέδιο αντιγράφει τη σημαία της Γαλλίας από ψηλά',
          en: 'Because the design copies the flag of France when seen from above',
        },
        {
          el: 'Γιατί τα πεζοδρόμια είναι στρωμένα με πέτρες σε σχήμα αστεριού',
          en: 'Because the pavements are laid with stones cut in the shape of stars',
        },
      ],
      explanation: {
        el:
          'Οι δώδεκα δρόμοι φεύγουν προς όλες τις κατευθύνσεις σαν ακτίνες. Από ψηλά, η ' +
          'πλατεία ονομάστηκε γι’ αυτό Πλατεία του Αστεριού.',
        en:
          'The twelve roads leave in every direction like spokes. Seen from above, that is ' +
          'why the square was named the Square of the Star.',
      },
    },
  },

  // ------------------------------------------------------- place de la concorde
  {
    id: 'paris-place-de-la-concorde',
    cityId: 'paris',
    emoji: '🏺',
    category: 'history',
    difficulty: 3,

    name: { el: 'Πλατεία Ομονοίας', en: 'Place de la Concorde' },
    tagline: {
      el: 'Η μεγαλύτερη πλατεία της πόλης, με έναν Αιγύπτιο επισκέπτη',
      en: 'The city’s largest square, with an Egyptian visitor in it',
    },
    story: {
      el:
        'Είναι η μεγαλύτερη πλατεία του Παρισιού, τόσο φαρδιά που μοιάζει με πέτρινο ' +
        'λιβάδι. Χτίστηκε για έναν βασιλιά, και στα χρόνια της Γαλλικής Επανάστασης έγινε ' +
        'τόπος όπου συνέβησαν πολύ σκληρά πράγματα. Όταν ξαναγύρισε η ηρεμία, η πόλη της ' +
        'έδωσε καινούργιο όνομα: Ομόνοια, που σημαίνει να ζούμε μαζί ειρηνικά. Το όνομα ' +
        'ήταν μια απόφαση, ένας τρόπος να πει η πόλη τι θέλει να θυμάται και τι όχι. Το ' +
        '1836 έφτασε εδώ ένας πολύ ασυνήθιστος επισκέπτης: ένας οβελίσκος πάνω από τριών ' +
        'χιλιάδων ετών, δώρο από την Αίγυπτο, που ταξίδεψε με πλοίο φτιαγμένο ειδικά γι’ ' +
        'αυτόν. Ζυγίζει περίπου διακόσιους τόνους. Στο βάθρο του υπάρχουν σκαλισμένα ' +
        'σχέδια που δείχνουν, βήμα βήμα, τις μηχανές που τον κατέβασαν στο Λούξορ και τον ' +
        'σήκωσαν ξανά εδώ, στη μέση του Παρισιού.',
      en:
        'This is the largest square in Paris, so wide it looks like a meadow made of stone. ' +
        'It was built for a king, and during the French Revolution very harsh things ' +
        'happened here. When calm returned, the city gave it a new name: Concorde, which ' +
        'means living together peacefully. The name was a decision, a way for the city to ' +
        'say what it wanted to remember and what it did not. In 1836 a most unusual visitor ' +
        'arrived: an obelisk over three thousand years old, a gift from Egypt, which ' +
        'travelled on a ship built specially to carry it. It weighs about two hundred ' +
        'tonnes. Carved into its base are drawings showing, step by step, the machines that ' +
        'lowered it at Luxor and raised it again here.',
    },
    facts: [
      {
        el: 'Ο οβελίσκος της είναι πάνω από 3.000 ετών και ζυγίζει περίπου 200 τόνους.',
        en: 'Its obelisk is over 3,000 years old and weighs about 200 tonnes.',
      },
      {
        el: 'Ταξίδεψε από την Αίγυπτο με πλοίο φτιαγμένο ειδικά για να τον μεταφέρει.',
        en: 'It travelled from Egypt on a ship built specially to carry it.',
      },
      {
        el: 'Ο δίδυμός του στέκεται ακόμα στο Λούξορ: η Γαλλία τον επέστρεψε επίσημα το 1981.',
        en: 'Its twin still stands at Luxor: France formally gave it back in 1981.',
      },
    ],
    location: {
      lat: 48.86563,
      lng: 2.32124,
      anchor: 'area',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q189503', deltaM: 0 },
        { kind: 'osm', ref: 'way/432819047', deltaM: 16 },
        { kind: 'wikipedia', ref: 'Place de la Concorde', deltaM: 0 },
      ],
      verifiedAt: '2026-09-12',
    },
    question: {
      q: {
        el: 'Τι σημαίνει το όνομα «Ομόνοια» που δόθηκε στην πλατεία;',
        en: 'What does the name "Concorde", given to the square, mean?',
      },
      answers: [
        { el: 'Να ζούμε μαζί ειρηνικά', en: 'Living together in peace' },
        {
          el: 'Τη μεγάλη νίκη που γιόρτασε εδώ ο στρατός της Γαλλίας',
          en: 'The great victory the army of France celebrated on this spot',
        },
        {
          el: 'Το όνομα του βασιλιά για τον οποίο χτίστηκε αρχικά η πλατεία',
          en: 'The name of the king the square was originally built for',
        },
        {
          el: 'Τη συμφωνία με την Αίγυπτο που έφερε εδώ τον μεγάλο οβελίσκο',
          en: 'The agreement with Egypt that brought the great obelisk here',
        },
      ],
      explanation: {
        el:
          'Το όνομα δόθηκε επίτηδες, μετά από πολύ δύσκολα χρόνια. Ήταν ο τρόπος της πόλης ' +
          'να πει τι θέλει να θυμάται από εδώ και πέρα.',
        en:
          'The name was chosen deliberately, after very hard years. It was the city’s way of ' +
          'saying what it wanted to remember from then on.',
      },
    },
  },

  // ---------------------------------------------------------------------- louvre
  {
    id: 'paris-louvre',
    cityId: 'paris',
    emoji: '🖼️',
    category: 'museum',
    difficulty: 2,

    name: { el: 'Μουσείο του Λούβρου', en: 'The Louvre' },
    tagline: {
      el: 'Φρούριο, μετά παλάτι, μετά μουσείο για όλους',
      en: 'A fortress, then a palace, then a museum for everyone',
    },
    story: {
      el:
        'Πριν από περισσότερα από οκτακόσια χρόνια, ένας βασιλιάς έχτισε εδώ φρούριο για ' +
        'να φυλάει το Παρίσι, με χοντρούς τοίχους και έναν ψηλό στρογγυλό πύργο. Οι ' +
        'επόμενοι βασιλιάδες το έκαναν παλάτι με αίθουσες γεμάτες χρυσάφι, ώσπου ένας από ' +
        'αυτούς μετακόμισε στις Βερσαλλίες και το άφησε μισοάδειο. Στη Γαλλική Επανάσταση ' +
        'πάρθηκε μια απόφαση που άλλαξε τα μουσεία παντού: ο λαός είπε ότι οι θησαυροί των ' +
        'βασιλιάδων ανήκουν σε όλους, και το 1793 το παλάτι άνοιξε ως μουσείο. Δεν ήταν ' +
        'δώρο· ήταν διεκδίκηση. Σήμερα είναι το μεγαλύτερο μουσείο τέχνης στον κόσμο, τόσο ' +
        'μεγάλο που αν στεκόσουν τριάντα δευτερόλεπτα μπροστά σε κάθε έργο θα χρειαζόσουν ' +
        'μήνες. Μπαίνεις από μια γυάλινη πυραμίδα που όταν έγινε τη μισούσαν, όπως ακριβώς ' +
        'μισούσαν και τον πύργο του Άιφελ.',
      en:
        'More than eight hundred years ago a king built a fortress here to guard Paris, ' +
        'with thick walls and a tall round keep. Later kings turned it into a palace full of ' +
        'gilded rooms, until one of them moved to Versailles and left it half empty. During ' +
        'the French Revolution a decision was taken that changed museums everywhere: the ' +
        'people said the treasures of kings belonged to everyone, and in 1793 the palace ' +
        'opened as a museum. It was not a gift; it was a claim. Today it is the largest art ' +
        'museum in the world, so large that if you stood thirty seconds in front of every ' +
        'work you would need months. You go in through a glass pyramid that was hated when ' +
        'it was new, exactly as the Eiffel Tower was hated when it was new.',
    },
    facts: [
      {
        el: 'Άνοιξε ως μουσείο το 1793, μετά τη Γαλλική Επανάσταση.',
        en: 'It opened as a museum in 1793, after the French Revolution.',
      },
      {
        el: 'Είναι το μεγαλύτερο μουσείο τέχνης στον κόσμο.',
        en: 'It is the largest art museum in the world.',
      },
      {
        el: 'Η φήμη ότι η πυραμίδα έχει 666 τζάμια είναι μύθος: έχει περισσότερα.',
        en: 'The story that the pyramid has 666 panes is a myth: it has more.',
      },
    ],
    location: {
      lat: 48.86111,
      lng: 2.33583,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q19675', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Louvre', deltaM: 2 },
      ],
      verifiedAt: '2026-09-12',
      note: 'The museum, not the pyramid. Explorer pins the Pyramide du Louvre (Q13397), 12 m away, which would fail the separation audit as an undeclared neighbour.',
    },
    question: {
      q: {
        el: 'Πώς έγινε μουσείο το παλάτι;',
        en: 'How did the palace become a museum?',
      },
      answers: [
        { el: 'Το αποφάσισε ο λαός στην Επανάσταση', en: 'The people decided it in the Revolution' },
        {
          el: 'Ένας βασιλιάς το χάρισε στην πόλη πριν πεθάνει, με διαθήκη',
          en: 'A king left it to the city in his will before he died',
        },
        {
          el: 'Το αγόρασε ένας πλούσιος συλλέκτης και το άνοιξε στο κοινό',
          en: 'A rich collector bought it and opened it up to the public',
        },
        {
          el: 'Χτίστηκε εξαρχής ως μουσείο και δεν ήταν ποτέ κατοικία',
          en: 'It was built as a museum from the start and was never a home',
        },
      ],
      explanation: {
        el:
          'Οι θησαυροί των βασιλιάδων κρίθηκε ότι ανήκουν σε όλους. Από εκείνη την απόφαση ' +
          'ξεκίνησε η ιδέα του δημόσιου μουσείου σε ολόκληρη την Ευρώπη.',
        en:
          'The treasures of kings were judged to belong to everyone. That decision is where ' +
          'the idea of a public museum started, across the whole of Europe.',
      },
    },

    museum: {
      doorNote: {
        el: 'Μην προσπαθήσεις να το δεις όλο. Διάλεξε μία αίθουσα και δες την στ’ αλήθεια.',
        en: 'Do not try to see all of it. Choose one room and actually look at it.',
      },
      rooms: [
        {
          id: 'paris-louvre-medieval',
          emoji: '🏰',
          name: { el: 'Το φρούριο από κάτω', en: 'The fortress underneath' },
          intro: {
            el:
              'Πριν ανέβεις στους πίνακες, κατέβα. Κάτω από το μουσείο σώζονται τα θεμέλια ' +
              'του μεσαιωνικού κάστρου, και περπατάς μέσα στην τάφρο του σε στεγνό έδαφος. ' +
              'Είναι το μέρος όπου καταλαβαίνεις ότι το ίδιο το κτίριο είναι πολύ ' +
              'παλαιότερο από σχεδόν ό,τι περιέχει.',
            en:
              'Before you go up to the paintings, go down. The foundations of the medieval ' +
              'castle survive under the museum, and you walk along its moat on dry ground. ' +
              'It is the place where you realise the building is far older than anything ' +
              'inside it.',
          },
          exhibits: [
            {
              id: 'paris-louvre-moat',
              name: { el: 'Η στεγνή τάφρος', en: 'The dry moat' },
              blurb: {
                el:
                  'Ένας πέτρινος διάδρομος που κάποτε ήταν γεμάτος νερό και περιέτρεχε ' +
                  'ολόκληρο το φρούριο. Σήμερα περπατάς στον πάτο του, ανάμεσα σε τοίχους ' +
                  'ύψους δέκα μέτρων που δεν είδαν φως για αιώνες. Κοίτα τις πέτρες από ' +
                  'κοντά: πολλές έχουν χαραγμένα σημάδια, τα σήματα των χτιστών που τις ' +
                  'έκοψαν, γιατί πληρώνονταν ανά πέτρα και έπρεπε να μπορεί να αποδειχτεί ' +
                  'ποιος ακριβώς είχε κάνει τι.',
                en:
                  'A stone corridor that was once full of water and ran right around the ' +
                  'fortress. Today you walk along the bottom of it, between walls ten metres ' +
                  'high that saw no daylight for centuries. Look closely at the stones: many ' +
                  'carry scratched marks, the signs of the masons who cut them, because they ' +
                  'were paid by the stone and it had to be provable who had done what.',
              },
              question: {
                q: {
                  el: 'Γιατί υπάρχουν χαραγμένα σημάδια στις πέτρες;',
                  en: 'Why are there marks scratched into the stones?',
                },
                answers: [
                  { el: 'Για να πληρωθεί ο σωστός χτίστης', en: 'So the right mason got paid' },
                  {
                    el: 'Για να δείχνουν τη σειρά με την οποία έπρεπε να τοποθετηθούν',
                    en: 'To show the order in which they had to be put in place',
                  },
                  {
                    el: 'Για να ξορκίζουν τη γρουσουζιά από το καινούργιο κτίριο',
                    en: 'To keep bad luck away from the newly finished building',
                  },
                  {
                    el: 'Για να ξεχωρίζουν οι πέτρες που ήρθαν από διαφορετικό λατομείο',
                    en: 'To tell apart the stones that came from a different quarry',
                  },
                ],
                explanation: {
                  el: 'Πληρώνονταν με το κομμάτι. Το σημάδι ήταν η απόδειξη, σε μια εποχή χωρίς χαρτιά.',
                  en: 'They were paid by the piece. The mark was the receipt, in an age with no paperwork.',
                },
              },
            },
            {
              id: 'paris-louvre-keep',
              name: { el: 'Η βάση του πύργου', en: 'The base of the keep' },
              blurb: {
                el:
                  'Στο κέντρο του υπογείου στέκεται ένας τεράστιος κυκλικός τοίχος: είναι ' +
                  'ό,τι απέμεινε από τον κεντρικό πύργο του φρουρίου, που ήταν και το ' +
                  'ασφαλέστερο σημείο του. Εκεί φυλάγονταν το θησαυροφυλάκιο και τα ' +
                  'αρχεία. Ο πύργος γκρεμίστηκε όταν το φρούριο έγινε παλάτι, γιατί ένας ' +
                  'βασιλιάς που θέλει φως και μεγάλα παράθυρα δεν θέλει έναν τυφλό πέτρινο ' +
                  'πύργο στη μέση της αυλής του.',
                en:
                  'In the middle of the basement stands an enormous circular wall: it is what ' +
                  'is left of the fortress keep, which was also its safest place. The ' +
                  'treasury and the records were kept there. The keep was pulled down when ' +
                  'the fortress became a palace, because a king who wants light and windows ' +
                  'does not want a blind tower in the middle of his courtyard.',
              },
              question: {
                q: {
                  el: 'Γιατί γκρεμίστηκε ο κεντρικός πύργος;',
                  en: 'Why was the keep pulled down?',
                },
                answers: [
                  { el: 'Το φρούριο έγινε παλάτι', en: 'The fortress became a palace' },
                  {
                    el: 'Έπεσε μόνος του σε έναν σεισμό που χτύπησε το Παρίσι',
                    en: 'It fell down on its own in an earthquake that struck Paris',
                  },
                  {
                    el: 'Κάηκε σε μεγάλη πυρκαγιά και δεν άξιζε να ξαναχτιστεί',
                    en: 'It burned in a great fire and was not worth rebuilding',
                  },
                  {
                    el: 'Οι πέτρες του χρειάστηκαν για να χτιστεί το τείχος της πόλης',
                    en: 'Its stones were needed to build the wall around the city',
                  },
                ],
                explanation: {
                  el:
                    'Ένα κτίριο αλλάζει όταν αλλάζει η δουλειά του. Το φρούριο ήθελε πύργο, ' +
                    'το παλάτι ήθελε φως.',
                  en:
                    'A building changes when its job changes. A fortress wants a keep; a ' +
                    'palace wants light.',
                },
              },
            },
            {
              id: 'paris-louvre-pyramid',
              name: { el: 'Η γυάλινη πυραμίδα', en: 'The glass pyramid' },
              blurb: {
                el:
                  'Η πυραμίδα δεν είναι διακόσμηση: είναι λύση σε πρόβλημα. Το μουσείο ' +
                  'είχε πολλές εισόδους σκορπισμένες γύρω από το παλάτι και ο κόσμος ' +
                  'χανόταν πριν καν μπει. Η πυραμίδα μάζεψε όλους σε ένα σημείο και ' +
                  'κατεβάζει το φως σε έναν υπόγειο χώρο υποδοχής. Όταν παρουσιάστηκε, την ' +
                  'έβρισκαν προσβολή για ένα ιστορικό κτίριο. Σήμερα είναι το πιο ' +
                  'φωτογραφημένο κομμάτι ολόκληρου του μουσείου.',
                en:
                  'The pyramid is not decoration: it is the answer to a problem. The museum ' +
                  'had several entrances scattered around the palace and people got lost ' +
                  'before they were even inside. The pyramid gathered everyone into one place ' +
                  'and brings daylight down into an underground hall. When it was unveiled ' +
                  'people called it an insult to a historic building. Today it is the most ' +
                  'photographed part of it.',
              },
              question: {
                q: {
                  el: 'Ποιο πρόβλημα έλυσε η πυραμίδα;',
                  en: 'What problem did the pyramid solve?',
                },
                answers: [
                  { el: 'Οι επισκέπτες χάνονταν στις πολλές εισόδους', en: 'Visitors got lost among too many entrances' },
                  {
                    el: 'Τα έργα κινδύνευαν από την υγρασία που ανέβαινε από το έδαφος',
                    en: 'The artworks were at risk from damp rising out of the ground',
                  },
                  {
                    el: 'Το παλάτι δεν είχε αρκετό χώρο για να εκτεθούν οι πίνακες',
                    en: 'The palace did not have enough space to hang all the paintings',
                  },
                  {
                    el: 'Οι παλιές σκάλες ήταν επικίνδυνες για τους μεγάλους σε ηλικία',
                    en: 'The old staircases were dangerous for older visitors to climb',
                  },
                ],
                explanation: {
                  el: 'Μία είσοδος για όλους, και φως που κατεβαίνει από πάνω σε υπόγειο χώρο.',
                  en: 'One entrance for everyone, and daylight coming down into a hall below ground.',
                },
              },
            },
          ],
        },
        {
          id: 'paris-louvre-famous',
          emoji: '🗿',
          name: { el: 'Τα πολύ διάσημα', en: 'The very famous ones' },
          intro: {
            el:
              'Τρία έργα εδώ τα ξέρει σχεδόν όλος ο πλανήτης, και το ενδιαφέρον είναι ότι ' +
              'κανένα δεν έγινε διάσημο για τον λόγο που νομίζεις. Το ένα το έκλεψαν, το ' +
              'άλλο βρέθηκε σπασμένο σε ένα χωράφι, και το τρίτο του λείπουν το κεφάλι και ' +
              'τα χέρια.',
            en:
              'Three works here are known to almost the whole planet, and the interesting ' +
              'part is that none of them became famous for the reason you would expect. One ' +
              'was stolen, one was found broken in a field, and the third is missing its head ' +
              'and its arms.',
          },
          exhibits: [
            {
              id: 'paris-louvre-mona-lisa',
              name: { el: 'Η Μόνα Λίζα', en: 'The Mona Lisa' },
              blurb: {
                el:
                  'Ένα μικρό πορτρέτο, μικρότερο από ό,τι περιμένει ο κόσμος, ζωγραφισμένο ' +
                  'από τον Λεονάρντο ντα Βίντσι σε ξύλο και όχι σε καμβά. Ήταν γνωστό αλλά ' +
                  'όχι διάσημο μέχρι το 1911, όταν ένας πρώην εργάτης του μουσείου το ' +
                  'έκλεψε βγάζοντάς το κάτω από το παλτό του. Για δύο χρόνια οι εφημερίδες ' +
                  'όλου του κόσμου έγραφαν για τον άδειο τοίχο. Όταν βρέθηκε, ήταν πια το ' +
                  'πιο γνωστό έργο στον πλανήτη. Η κλοπή το έκανε διάσημο, όχι η ζωγραφική.',
                en:
                  'A small portrait, smaller than people expect, painted by Leonardo da Vinci ' +
                  'on wood rather than canvas. It was known but not famous until 1911, when a ' +
                  'former museum workman stole it by carrying it out under his coat. For two ' +
                  'years newspapers all over the world wrote about the empty wall. By the ' +
                  'time it was found it was the best known work on the planet. The theft made ' +
                  'it famous, not the painting.',
              },
              question: {
                q: {
                  el: 'Τι έκανε τη Μόνα Λίζα παγκοσμίως διάσημη;',
                  en: 'What made the Mona Lisa world famous?',
                },
                answers: [
                  { el: 'Η κλοπή της το 1911', en: 'Being stolen in 1911' },
                  {
                    el: 'Η απόφαση του Ναπολέοντα να την κρεμάσει στην κρεβατοκάμαρά του',
                    en: 'Napoleon’s decision to hang it in his own bedroom for a while',
                  },
                  {
                    el: 'Το ότι είναι ο μεγαλύτερος πίνακας ολόκληρου του μουσείου',
                    en: 'The fact that it is the largest painting in the entire museum',
                  },
                  {
                    el: 'Μια επιστολή του Λεονάρντο που περιγράφει ποια ήταν η γυναίκα',
                    en: 'A letter by Leonardo explaining exactly who the woman really was',
                  },
                ],
                explanation: {
                  el:
                    'Δύο χρόνια με άδειο τοίχο και πρωτοσέλιδα παντού. Όταν γύρισε, την ' +
                    'ήξερε όλος ο κόσμος.',
                  en:
                    'Two years of an empty wall and front pages everywhere. By the time it ' +
                    'came back, everyone knew it.',
                },
              },
            },
            {
              id: 'paris-louvre-venus',
              name: { el: 'Η Αφροδίτη της Μήλου', en: 'The Venus de Milo' },
              blurb: {
                el:
                  'Ένα μαρμάρινο άγαλμα περίπου δύο μέτρων, φτιαγμένο γύρω στον 2ο αιώνα ' +
                  'π.Χ., που βρέθηκε το 1820 από έναν αγρότη στο ελληνικό νησί της Μήλου. ' +
                  'Της λείπουν και τα δύο χέρια και κανείς δεν ξέρει τι κρατούσαν. Έχουν ' +
                  'προταθεί δεκάδες λύσεις: μήλο, καθρέφτης, ασπίδα, ύφασμα. Το μυστήριο ' +
                  'είναι μέρος της γοητείας της, γιατί κάθε επισκέπτης συμπληρώνει τα χέρια ' +
                  'με τη φαντασία του και κανένας δεν μπορεί να διαψευστεί.',
                en:
                  'A marble statue about two metres tall, made around the 2nd century BC, ' +
                  'found in 1820 by a farmer on the Greek island of Milos. Both her arms are ' +
                  'missing and nobody knows what they held. Dozens of answers have been ' +
                  'proposed: an apple, a mirror, a shield, a piece of cloth. The mystery is ' +
                  'part of the appeal, because every visitor fills in the arms from ' +
                  'imagination and nobody can be proved wrong.',
              },
              question: {
                q: {
                  el: 'Τι δεν ξέρουμε για την Αφροδίτη της Μήλου;',
                  en: 'What do we not know about the Venus de Milo?',
                },
                answers: [
                  { el: 'Τι κρατούσαν τα χέρια της', en: 'What her arms were holding' },
                  {
                    el: 'Από ποιο ακριβώς υλικό είναι φτιαγμένο ολόκληρο το άγαλμα',
                    en: 'Exactly what material the whole statue was carved out of',
                  },
                  {
                    el: 'Σε ποιο νησί της Ελλάδας βρέθηκε από τον αγρότη το 1820',
                    en: 'Which Greek island the farmer found her on back in 1820',
                  },
                  {
                    el: 'Πόσο ψηλή είναι, γιατί δεν έχει μετρηθεί ποτέ με ακρίβεια',
                    en: 'How tall she is, because she has never been measured exactly',
                  },
                ],
                explanation: {
                  el: 'Τα χέρια δεν βρέθηκαν ποτέ. Κάθε απάντηση είναι εικασία, και υπάρχουν δεκάδες.',
                  en: 'The arms were never found. Every answer is a guess, and there are dozens.',
                },
              },
            },
            {
              id: 'paris-louvre-victory',
              name: { el: 'Η Νίκη της Σαμοθράκης', en: 'The Winged Victory of Samothrace' },
              blurb: {
                el:
                  'Μια φτερωτή μορφή στημένη στην κορυφή μιας μεγάλης σκάλας, σαν να μόλις ' +
                  'προσγειώθηκε σε πλώρη πλοίου. Της λείπει το κεφάλι και της λείπουν τα ' +
                  'χέρια, και όμως είναι από τα πιο ζωντανά γλυπτά που έχουν φτιαχτεί: το ' +
                  'ύφασμα κολλάει στο σώμα σαν να το χτυπάει αέρας και θάλασσα. Το μάρμαρο ' +
                  'είναι σκαλισμένο ώστε να δείχνει βρεγμένο. Βρέθηκε σε κομμάτια στο ' +
                  'ελληνικό νησί της Σαμοθράκης το 1863.',
                en:
                  'A winged figure set at the top of a great staircase, as if it had just ' +
                  'landed on the prow of a ship. It is missing its head and its arms, and yet ' +
                  'it is one of the most alive sculptures ever made: the cloth clings to the ' +
                  'body as though wind and sea were hitting it. The marble is carved to look ' +
                  'wet. It was found in pieces on the Greek island of Samothrace in 1863.',
              },
              question: {
                q: {
                  el: 'Πώς είναι σκαλισμένο το μάρμαρο του αγάλματος;',
                  en: 'How is the marble of this statue carved?',
                },
                answers: [
                  { el: 'Ώστε το ύφασμα να φαίνεται βρεγμένο', en: 'So the cloth looks soaking wet' },
                  {
                    el: 'Ώστε να αλλάζει χρώμα ανάλογα με το φως της ημέρας',
                    en: 'So that it changes colour according to the light of the day',
                  },
                  {
                    el: 'Ώστε να είναι κούφιο μέσα και πολύ ελαφρύ για το μέγεθός του',
                    en: 'So that it is hollow inside and very light for its great size',
                  },
                  {
                    el: 'Ώστε να ταιριάζει ακριβώς με το χρώμα της πλώρης του πλοίου',
                    en: 'So that it matches exactly the colour of the prow of the ship',
                  },
                ],
                explanation: {
                  el:
                    'Το βρεγμένο ύφασμα κολλάει και δείχνει το σώμα από κάτω. Είναι το πιο ' +
                    'δύσκολο πράγμα να το κάνεις σε πέτρα.',
                  en:
                    'Wet cloth clings and shows the body underneath. It is the hardest thing ' +
                    'of all to do in stone.',
                },
              },
            },
          ],
        },
      ],
      riddles: [
        {
          id: 'paris-louvre-riddle-1',
          difficulty: 1,
          prompt: {
            el:
              'Είμαι μικρότερη απ’ ό,τι περιμένεις και είμαι ζωγραφισμένη σε ξύλο. Έγινα ' +
              'διάσημη επειδή κάποιος με έβγαλε από εδώ κάτω από το παλτό του και έλειψα ' +
              'δύο χρόνια.',
            en:
              'I am smaller than you expect and I am painted on wood. I became famous ' +
              'because somebody carried me out of here under his coat and I was gone for two ' +
              'years.',
          },
          hint: {
            el: 'Με βρήκαν στη Φλωρεντία.',
            en: 'They found me in Florence.',
          },
          answerExhibitId: 'paris-louvre-mona-lisa',
        },
        {
          id: 'paris-louvre-riddle-2',
          difficulty: 2,
          prompt: {
            el:
              'Έχω φτερά και μου λείπει το κεφάλι, όμως φαίνομαι σαν να κινούμαι. Στέκομαι ' +
              'ψηλά σε μια σκάλα, και το μάρμαρό μου είναι σκαλισμένο για να μοιάζει ' +
              'βρεγμένο.',
            en:
              'I have wings and no head, and yet I look as though I am moving. I stand high ' +
              'on a staircase, and my marble is carved to look soaking wet.',
          },
          hint: {
            el: 'Πατάω σε πλώρη πλοίου.',
            en: 'I am standing on the prow of a ship.',
          },
          answerExhibitId: 'paris-louvre-victory',
        },
        {
          id: 'paris-louvre-riddle-3',
          difficulty: 3,
          prompt: {
            el:
              'Ήμουν γεμάτος νερό και γύριζα ολόκληρο το κάστρο. Τώρα περπατάς στον πάτο ' +
              'μου στα στεγνά, ανάμεσα σε τοίχους που δεν είδαν ήλιο για αιώνες.',
            en:
              'I was full of water and I ran right around the castle. Now you walk along my ' +
              'floor on dry ground, between walls that saw no sun for centuries.',
          },
          hint: {
            el: 'Είμαι κάτω από το μουσείο, όχι μέσα του.',
            en: 'I am underneath the museum, not inside it.',
          },
          answerExhibitId: 'paris-louvre-moat',
        },
      ],
    },
  },

  // -------------------------------------------------------------------- pont neuf
  {
    id: 'paris-pont-neuf',
    cityId: 'paris',
    emoji: '🌉',
    category: 'landmark',
    difficulty: 2,

    name: { el: 'Πον Νεφ', en: 'The Pont Neuf' },
    tagline: {
      el: 'Λέγεται Καινούργια Γέφυρα και είναι η πιο παλιά',
      en: 'It is called the New Bridge and it is the oldest',
    },
    story: {
      el:
        'Ο θεμέλιος λίθος μπήκε το 1578 και η γέφυρα τελείωσε το 1607, δηλαδή χρειάστηκε ' +
        'σχεδόν τριάντα χρόνια. Τότε ήταν η νεότερη γέφυρα της πόλης, κι έτσι ο κόσμος την ' +
        'είπε απλώς Καινούργια Γέφυρα. Το όνομα έμεινε, και σήμερα είναι η παλαιότερη ' +
        'γέφυρα του Παρισιού που στέκεται ακόμα. Ήταν όμως και κάτι πιο σημαντικό από ' +
        'παλιά ή καινούργια: ήταν διαφορετική. Όλες οι άλλες γέφυρες εκείνης της εποχής ' +
        'ήταν σκεπασμένες με σπίτια και μαγαζιά, δηλαδή περνούσες μέσα από έναν δρόμο και ' +
        'δεν έβλεπες καθόλου νερό. Αυτή έμεινε ανοιχτή και πήρε πεζοδρόμια, τα πρώτα της ' +
        'πόλης. Ξαφνικά οι Παριζιάνοι μπορούσαν να σταματήσουν πάνω από το ποτάμι και να ' +
        'κοιτάξουν το νερό. Έγινε αμέσως τόπος όπου μαζεύονταν μουσικοί, πλανόδιοι πωλητές, ' +
        'ταχυδακτυλουργοί και περίεργοι, και η γέφυρα έγινε πλατεία.',
      en:
        'The foundation stone went down in 1578 and the bridge was finished in 1607, so it ' +
        'took almost thirty years. It was the newest bridge in the city then, and people ' +
        'simply called it the New Bridge. The name stuck, and today it is the oldest bridge ' +
        'in Paris still standing. But it was something more important than old or new: it ' +
        'was different. Every other bridge of that time was covered with houses and shops, ' +
        'so crossing one meant walking down a street and never seeing water at all. This one ' +
        'was left open and was given pavements, the first in the city. Suddenly Parisians ' +
        'could stop above the river and look. It became a place where musicians, sellers and ' +
        'the curious gathered straight away.',
    },
    facts: [
      {
        el: 'Ξεκίνησε το 1578 και τελείωσε το 1607.',
        en: 'It was begun in 1578 and finished in 1607.',
      },
      {
        el: 'Ήταν η πρώτη γέφυρα της πόλης χωρίς σπίτια πάνω της.',
        en: 'It was the first bridge in the city with no houses built on it.',
      },
      {
        el: 'Το 1985 δύο καλλιτέχνες την τύλιξαν ολόκληρη με ύφασμα.',
        en: 'In 1985 two artists wrapped the whole of it in cloth.',
      },
    ],
    location: {
      lat: 48.8575,
      lng: 2.34167,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q335277', deltaM: 0 },
        { kind: 'osm', ref: 'way/53574149', deltaM: 125 },
        { kind: 'wikipedia', ref: 'Pont Neuf', deltaM: 0 },
      ],
      verifiedAt: '2026-09-12',
      note: 'The OSM way is the whole bridge, so its centre falls 125 m from the stored point. For a structure this long that is the middle of the span rather than a disagreement.',
    },
    question: {
      q: {
        el: 'Τι είχε αυτή η γέφυρα που δεν είχαν οι άλλες της εποχής της;',
        en: 'What did this bridge have that the others of its time did not?',
      },
      answers: [
        { el: 'Θέα στο ποτάμι', en: 'A view of the river' },
        {
          el: 'Δύο σειρές από μαγαζιά και κατοικίες σε ολόκληρο το μήκος της',
          en: 'Two rows of shops and homes running along its entire length',
        },
        {
          el: 'Κινητό τμήμα στη μέση που σηκωνόταν για να περνούν τα πλοία',
          en: 'A moving section in the middle that lifted to let ships through',
        },
        {
          el: 'Σκεπή από ξύλο που προστάτευε τους περαστικούς από τη βροχή',
          en: 'A wooden roof that protected everyone crossing it from the rain',
        },
      ],
      explanation: {
        el:
          'Οι άλλες γέφυρες ήταν σκεπασμένες με σπίτια. Εδώ, για πρώτη φορά, μπορούσες να ' +
          'σταματήσεις πάνω από το νερό και να το δεις.',
        en:
          'The other bridges were covered in houses. Here, for the first time, you could ' +
          'stop above the water and actually see it.',
      },
    },
  },

  // ------------------------------------------------------------------ notre-dame
  {
    id: 'paris-notre-dame',
    cityId: 'paris',
    emoji: '⛪',
    category: 'history',
    difficulty: 2,

    name: { el: 'Παναγία των Παρισίων', en: 'Notre-Dame de Paris' },
    tagline: {
      el: 'Διακόσια χρόνια χτίσιμο, και πέτρινα τέρατα στη στέγη',
      en: 'Two hundred years of building, and stone monsters on the roof',
    },
    story: {
      el:
        'Το χτίσιμο ξεκίνησε το 1163 και κράτησε σχεδόν διακόσια χρόνια, δηλαδή κανένας ' +
        'από αυτούς που έβαλαν τις πρώτες πέτρες δεν έζησε για να τη δει τελειωμένη. Οι ' +
        'δύο πύργοι της έχουν ύψος εξήντα εννέα μέτρα και τα τρία στρογγυλά παράθυρά της, ' +
        'οι ρόδακες, λάμπουν σαν τεράστια λουλούδια από χρωματιστό γυαλί. Γύρω από τη ' +
        'στέγη κάθονται τα γκαργκόιλ, πέτρινα τέρατα με ανοιχτό στόμα. Δεν είναι ' +
        'διακόσμηση ούτε φόβητρα: είναι υδρορροές. Το νερό της βροχής περνάει μέσα τους ' +
        'και πετάγεται μακριά από τους τοίχους, γιατί το νερό που κυλάει πάνω στην πέτρα ' +
        'είναι ο χειρότερος εχθρός ενός παλιού κτιρίου. Τον Απρίλιο του 2019 μια φωτιά ' +
        'κατέστρεψε τη στέγη και το βέλος της. Δεν έπεσε. Την ξαναέχτισαν, και άνοιξε ' +
        'πάλι στα τέλη του 2024.',
      en:
        'Building began in 1163 and took almost two hundred years, which means nobody who ' +
        'laid the first stones lived to see it finished. Its two towers are sixty-nine ' +
        'metres high, and its three round windows, the rose windows, glow like enormous ' +
        'flowers made of coloured glass. Around the roof crouch the gargoyles, stone ' +
        'monsters with open mouths. They are neither decoration nor scarecrows: they are ' +
        'drainpipes. Rainwater runs through them and is thrown clear of the walls, because ' +
        'water running down stone is the worst enemy an old building has. In April 2019 a ' +
        'fire destroyed the roof and the spire. It did not fall. It was rebuilt by hundreds ' +
        'of carpenters, stonecutters and glassworkers, and it opened again at the end of ' +
        '2024.',
    },
    facts: [
      {
        el: 'Το χτίσιμο ξεκίνησε το 1163 και κράτησε σχεδόν διακόσια χρόνια.',
        en: 'Building started in 1163 and took almost two hundred years.',
      },
      {
        el: 'Τα γκαργκόιλ είναι υδρορροές, όχι στολίδια.',
        en: 'The gargoyles are drainpipes, not ornaments.',
      },
      {
        el: 'Μετά τη φωτιά του 2019 ξαναχτίστηκε και άνοιξε στα τέλη του 2024.',
        en: 'After the fire of 2019 it was rebuilt and reopened at the end of 2024.',
      },
    ],
    location: {
      lat: 48.853,
      lng: 2.3498,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q2981', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Notre-Dame de Paris', deltaM: 16 },
      ],
      verifiedAt: '2026-09-12',
      note: 'Overpass was rate-limiting on this pass; Wikidata and Wikipedia agree to 16 m.',
    },
    question: {
      q: {
        el: 'Σε τι χρησιμεύουν τα γκαργκόιλ;',
        en: 'What are the gargoyles for?',
      },
      answers: [
        { el: 'Διώχνουν τη βροχή', en: 'They throw the rain clear' },
        {
          el: 'Δείχνουν στους πιστούς πού βρίσκεται η είσοδος της εκκλησίας',
          en: 'They show worshippers where the entrance to the church is',
        },
        {
          el: 'Στηρίζουν το βάρος της στέγης πάνω στους εξωτερικούς τοίχους',
          en: 'They hold the weight of the roof up on the outer walls',
        },
        {
          el: 'Μετρούν την ώρα με τη σκιά τους, όπως ένα ηλιακό ρολόι',
          en: 'They tell the time with their shadow, the way a sundial does',
        },
      ],
      explanation: {
        el:
          'Το νερό περνάει μέσα από το σώμα τους και πετάγεται μακριά από τον τοίχο. Χωρίς ' +
          'αυτά, η βροχή θα έτρωγε την πέτρα.',
        en:
          'Water runs through their bodies and is thrown clear of the wall. Without them the ' +
          'rain would eat the stone away.',
      },
    },
  },

  // -------------------------------------------------------------------- pantheon
  {
    id: 'paris-pantheon',
    cityId: 'paris',
    emoji: '🔬',
    category: 'science',
    difficulty: 3,

    name: { el: 'Πάνθεον', en: 'The Panthéon' },
    tagline: {
      el: 'Εδώ ένα εκκρεμές απέδειξε ότι η Γη γυρίζει',
      en: 'Here a pendulum proved that the Earth turns',
    },
    story: {
      el:
        'Ένας βασιλιάς αρρώστησε βαριά και υποσχέθηκε πως, αν γινόταν καλά, θα έχτιζε μια ' +
        'λαμπρή εκκλησία. Έγινε καλά, και ο αρχιτέκτονας σχεδίασε ένα κτίριο με τρούλο που ' +
        'φαίνεται από πολύ μακριά. Μόλις όμως τελείωσε, ξέσπασε η Γαλλική Επανάσταση, και ' +
        'ο λαός αποφάσισε να το χρησιμοποιήσει αλλιώς: ως τόπο ανάπαυσης για τους ' +
        'ανθρώπους που τίμησε η χώρα. Εκεί αναπαύονται συγγραφείς, επιστήμονες και ' +
        'στοχαστές. Το πιο συναρπαστικό όμως κρέμεται από τον τρούλο. Το 1851 ο Λεόν Φουκώ ' +
        'κρέμασε εδώ μια μπάλα είκοσι οκτώ κιλών από ένα σύρμα εξήντα επτά μέτρων και την ' +
        'άφησε να ταλαντεύεται. Μέσα στη μέρα το επίπεδο της κίνησής της γύριζε σιγά σιγά. ' +
        'Δεν γύριζε το εκκρεμές. Γύριζε το κτίριο, και μαζί με αυτό ολόκληρη η Γη κάτω από ' +
        'τα πόδια όσων κοίταζαν.',
      en:
        'A king fell gravely ill and promised that, if he recovered, he would build a ' +
        'splendid church. He recovered, and the architect designed a building with a dome ' +
        'you can see from a long way off. But as soon as it was finished the French ' +
        'Revolution broke out, and the people decided to use it differently: as a resting ' +
        'place for those the country wished to honour. Writers, scientists and thinkers lie ' +
        'here. The most thrilling thing, though, hangs from the dome. In 1851 Léon Foucault ' +
        'hung a twenty-eight-kilo ball here on a wire sixty-seven metres long and let it ' +
        'swing. Over the course of a day the plane of its swing slowly turned. The pendulum ' +
        'was not turning. The building was, and the whole Earth with it.',
    },
    facts: [
      {
        el: 'Σχεδιάστηκε ως εκκλησία και έγινε τόπος ταφής όσων τίμησε η χώρα.',
        en: 'It was designed as a church and became a burial place for the honoured.',
      },
      {
        el: 'Το εκκρεμές του Φουκώ είναι μπάλα 28 κιλών σε σύρμα 67 μέτρων.',
        en: 'Foucault’s pendulum is a 28-kilo ball on a wire 67 metres long.',
      },
      {
        el: 'Η Μαρί Κιουρί αναπαύεται εδώ, η πρώτη γυναίκα που μεταφέρθηκε για τα έργα της.',
        en: 'Marie Curie rests here, the first woman moved in for her own work.',
      },
    ],
    location: {
      lat: 48.8462,
      lng: 2.34611,
      anchor: 'centroid',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q188856', deltaM: 0 },
        { kind: 'osm', ref: 'way/16407465', deltaM: 3 },
        { kind: 'wikipedia', ref: 'Panthéon', deltaM: 23 },
      ],
      verifiedAt: '2026-09-12',
    },
    question: {
      q: {
        el: 'Τι απέδειξε το εκκρεμές του Φουκώ;',
        en: 'What did Foucault’s pendulum prove?',
      },
      answers: [
        { el: 'Ότι η Γη γυρίζει', en: 'That the Earth turns' },
        {
          el: 'Ότι ο τρούλος του κτιρίου κουνιέται ελαφρά με τον δυνατό άνεμο',
          en: 'That the dome of the building sways slightly in a strong wind',
        },
        {
          el: 'Ότι το βάρος ενός σώματος αλλάζει ανάλογα με το ύψος του εδάφους',
          en: 'That the weight of a body changes with the height of the ground',
        },
        {
          el: 'Ότι ο χρόνος περνάει διαφορετικά σε διαφορετικά σημεία του πλανήτη',
          en: 'That time passes differently at different points around the planet',
        },
      ],
      explanation: {
        el:
          'Το εκκρεμές ταλαντεύεται πάντα στο ίδιο επίπεδο. Αν αυτό φαίνεται να γυρίζει, ' +
          'τότε γυρίζει ό,τι βρίσκεται από κάτω του.',
        en:
          'A pendulum always swings in the same plane. If that seems to turn, then what is ' +
          'underneath it is turning.',
      },
    },
  },

  // ----------------------------------------------------------- luxembourg gardens
  {
    id: 'paris-luxembourg-gardens',
    cityId: 'paris',
    emoji: '⛵',
    category: 'nature',
    difficulty: 1,

    name: { el: 'Κήπος του Λουξεμβούργου', en: 'The Luxembourg Gardens' },
    tagline: {
      el: 'Παιδιά σπρώχνουν ξύλινα καράβια με ένα ραβδί',
      en: 'Children push wooden boats along with a stick',
    },
    story: {
      el:
        'Το 1612 μια βασίλισσα που είχε μεγαλώσει στη Φλωρεντία αγόρασε εδώ ένα μεγάλο ' +
        'κτήμα και ζήτησε παλάτι και κήπο σαν εκείνους της πατρίδας της. Έμεινε λίγα μόνο ' +
        'χρόνια, ο κήπος όμως έμεινε και μεγάλωσε. Σήμερα το παλάτι είναι το σπίτι της ' +
        'γαλλικής Γερουσίας, όπου συζητιούνται οι νόμοι, και ο κήπος ανήκει σε όλους. Στη ' +
        'μέση υπάρχει μια στρογγυλή λιμνούλα, και εδώ και εκατό περίπου χρόνια τα παιδιά ' +
        'νοικιάζουν μικρά ξύλινα ιστιοφόρα και τα σπρώχνουν με ένα μακρύ ραβδί. Δεν έχουν ' +
        'μηχανή ούτε τηλεχειριστήριο: τα κινεί ο αέρας, και η δουλειά σου είναι να τα ' +
        'σπρώξεις σωστά και μετά να τρέξεις γύρω γύρω για να τα προλάβεις στην άλλη άκρη. ' +
        'Ο κήπος έχει επίσης κυψέλες και σχολή μελισσοκομίας από το 1856.',
      en:
        'In 1612 a queen who had grown up in Florence bought a large estate here and asked ' +
        'for a palace and a garden like the ones at home. She stayed only a few years, but ' +
        'the garden stayed and grew. Today the palace is the home of the French Senate, ' +
        'where laws are argued over, and the garden belongs to everybody. In the middle ' +
        'there is a round pond, and for about a hundred years children have been hiring ' +
        'small wooden sailing boats and pushing them with a long stick. They have no engine ' +
        'and no remote control: the wind moves them, and your job is to push well and then ' +
        'run round the edge to catch them on the far side. The garden has also kept beehives ' +
        'and a beekeeping school since 1856.',
    },
    facts: [
      {
        el: 'Ο κήπος φτιάχτηκε το 1612 για μια βασίλισσα που είχε μεγαλώσει στη Φλωρεντία.',
        en: 'The garden was made in 1612 for a queen who grew up in Florence.',
      },
      {
        el: 'Τα ξύλινα καράβια της λιμνούλας κινούνται μόνο με τον αέρα.',
        en: 'The wooden boats on the pond move on wind alone.',
      },
      {
        el: 'Έχει κυψέλες και σχολή μελισσοκομίας από το 1856.',
        en: 'It has had beehives and a beekeeping school since 1856.',
      },
    ],
    location: {
      lat: 48.84694,
      lng: 2.33722,
      anchor: 'area',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q309458', deltaM: 0 },
        { kind: 'osm', ref: 'way/128206209', deltaM: 67 },
        { kind: 'wikipedia', ref: 'Jardin du Luxembourg', deltaM: 1 },
      ],
      verifiedAt: '2026-09-12',
      note: 'An area pin. The OSM polygon centre is 67 m away, which for a park this size is the middle of a lawn rather than a disagreement.',
    },
    question: {
      q: {
        el: 'Τι κινεί τα μικρά καράβια στη λιμνούλα;',
        en: 'What moves the little boats on the pond?',
      },
      answers: [
        { el: 'Ο αέρας', en: 'The wind' },
        {
          el: 'Μια μικρή μηχανή με μπαταρία κρυμμένη μέσα στο σκαρί τους',
          en: 'A small battery motor hidden away inside the hull of each one',
        },
        {
          el: 'Ένα ρεύμα νερού που δημιουργεί αντλία στον πάτο της λιμνούλας',
          en: 'A current of water made by a pump at the bottom of the pond',
        },
        {
          el: 'Σχοινιά που τραβούν τα παιδιά από τις δύο άκρες της λιμνούλας',
          en: 'Ropes that the children pull from the two ends of the pond',
        },
      ],
      explanation: {
        el:
          'Είναι κανονικά ιστιοφόρα σε μικρογραφία. Το ραβδί σε βοηθάει μόνο να τα ' +
          'ξεκινήσεις προς τη σωστή μεριά.',
        en:
          'They are proper sailing boats in miniature. The stick only helps you start them ' +
          'off in the right direction.',
      },
    },
  },

  // --------------------------------------------------------------- palais garnier
  {
    id: 'paris-palais-garnier',
    cityId: 'paris',
    emoji: '🎭',
    category: 'art',
    difficulty: 2,

    name: { el: 'Όπερα Γκαρνιέ', en: 'The Palais Garnier' },
    tagline: {
      el: 'Έχει μια αληθινή λίμνη κάτω από το πάτωμά της',
      en: 'It has a real lake underneath its floor',
    },
    story: {
      el:
        'Το 1861 ένας νεαρός και άγνωστος αρχιτέκτονας κέρδισε διαγωνισμό για το πιο ' +
        'μεγαλοπρεπές θέατρο όπερας του κόσμου. Το χτίσιμο κράτησε δεκατέσσερα χρόνια, και ' +
        'ο λόγος ήταν το νερό: το υπόγειο πλημμύριζε συνέχεια, όσο κι αν το άντλησαν. Στο ' +
        'τέλος οι μηχανικοί σταμάτησαν να παλεύουν και έκαναν κάτι εξυπνότερο. Έφτιαξαν ' +
        'μια τεράστια στεγανή δεξαμενή και άφησαν το νερό να μαζευτεί εκεί, ώστε να ' +
        'σταθεροποιηθεί η πίεση κάτω από τα θεμέλια. Η δεξαμενή υπάρχει ακόμα και οι ' +
        'πυροσβέστες του Παρισιού την χρησιμοποιούν για ασκήσεις κατάδυσης. Από αυτήν, και ' +
        'από ένα ατύχημα με τον επτάτονο πολυέλαιο το 1896, γεννήθηκε η ιστορία του ' +
        'Φαντάσματος της Όπερας, που έγινε βιβλίο και μετά ταινία και θεατρικό σε ολόκληρο ' +
        'τον κόσμο. Η υπόγεια λίμνη είναι αληθινή και μπορείς να τη δεις σε φωτογραφίες. Το ' +
        'φάντασμα όχι.',
      en:
        'In 1861 a young and unknown architect won the competition for the most magnificent ' +
        'opera house in the world. Building it took fourteen years, and the reason was ' +
        'water: the foundations kept flooding however hard they pumped. In the end the ' +
        'engineers stopped fighting and did something cleverer. They built an enormous ' +
        'watertight tank and let the water gather in it, so that the pressure under the ' +
        'foundations would hold steady. The tank is still there and the Paris fire brigade ' +
        'uses it for diving practice. Out of that, and out of an accident with the ' +
        'seven-tonne chandelier in 1896, came the story of the Phantom of the Opera, which ' +
        'became a book and then a film and a musical all over the world. The underground ' +
        'lake is real and you can see photographs of it. The phantom is not.',
    },
    facts: [
      {
        el: 'Το χτίσιμο κράτησε δεκατέσσερα χρόνια, κυρίως εξαιτίας του νερού.',
        en: 'Building took fourteen years, mostly because of the water.',
      },
      {
        el: 'Η υπόγεια δεξαμενή υπάρχει ακόμα και χρησιμοποιείται για ασκήσεις κατάδυσης.',
        en: 'The underground tank is still there and is used for diving practice.',
      },
      {
        el: 'Ο πολυέλαιος της αίθουσας ζυγίζει περίπου επτά τόνους.',
        en: 'The chandelier in the auditorium weighs about seven tonnes.',
      },
    ],
    location: {
      lat: 48.87194,
      lng: 2.33167,
      anchor: 'centroid',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q187840', deltaM: 0 },
        { kind: 'osm', ref: 'way/54667456', deltaM: 11 },
        { kind: 'wikipedia', ref: 'Palais Garnier', deltaM: 1 },
      ],
      verifiedAt: '2026-09-12',
    },
    question: {
      q: {
        el: 'Γιατί έφτιαξαν δεξαμενή κάτω από την όπερα;',
        en: 'Why was a tank built underneath the opera house?',
      },
      answers: [
        { el: 'Το υπόγειο πλημμύριζε συνέχεια', en: 'The foundations kept flooding' },
        {
          el: 'Για να έχουν αποθηκευμένο νερό σε περίπτωση μεγάλης πυρκαγιάς',
          en: 'To keep water stored in case a serious fire ever broke out',
        },
        {
          el: 'Για να δροσίζεται η αίθουσα τα καλοκαίρια πριν από τα κλιματιστικά',
          en: 'To cool the auditorium in summer, in the days before air conditioning',
        },
        {
          el: 'Για να χρησιμοποιείται σε παραστάσεις με σκηνικά μέσα στο νερό',
          en: 'So that it could be used in performances with scenery set in water',
        },
      ],
      explanation: {
        el:
          'Σταμάτησαν να παλεύουν με το νερό και το έκλεισαν σε δεξαμενή. Έτσι η πίεση κάτω ' +
          'από τα θεμέλια έμεινε σταθερή.',
        en:
          'They stopped fighting the water and shut it in a tank instead. That kept the ' +
          'pressure under the foundations steady.',
      },
    },
  },

  // ------------------------------------------------------------------ sacré-cœur
  {
    id: 'paris-sacre-coeur',
    cityId: 'paris',
    emoji: '🤍',
    category: 'landmark',
    difficulty: 2,

    name: { el: 'Σακρ Κερ', en: 'The Sacré-Cœur' },
    tagline: {
      el: 'Η πέτρα της ασπρίζει μόνη της κάθε φορά που βρέχει',
      en: 'Its stone whitens itself every time it rains',
    },
    story: {
      el:
        'Η Μονμάρτρη είναι ο ψηλότερος λόφος του Παρισιού, εκατόν τριάντα μέτρα, και για ' +
        'πολύ καιρό ήταν χωριό με ανεμόμυλους και αμπέλια. Μετά από δύσκολα χρόνια για την ' +
        'πόλη, στη δεκαετία του 1870, οι κάτοικοι υποσχέθηκαν να χτίσουν εκεί μια εκκλησία, ' +
        'και την πλήρωσαν με αμέτρητες μικρές δωρεές. Το χτίσιμο κράτησε σχεδόν σαράντα ' +
        'χρόνια. Η εκκλησία είναι εντυπωσιακά λευκή, και δεν την βάφει κανείς. Η πέτρα της ' +
        'έρχεται από ένα συγκεκριμένο λατομείο και έχει μια ασυνήθιστη ιδιότητα: όταν ' +
        'βρέχεται, απελευθερώνει μια ουσία που λειτουργεί σαν ασβέστης και ξεπλένει τη ' +
        'βρομιά. Δηλαδή η βροχή, που μαυρίζει κάθε άλλο κτίριο του Παρισιού, αυτό εδώ το ' +
        'καθαρίζει. Ο λόφος από κάτω είναι γεμάτος παλιά λατομεία γύψου, γι’ αυτό ' +
        'χρειάστηκαν ογδόντα τρία βαθιά πηγάδια γεμάτα μπετόν πριν μπει η πρώτη πέτρα.',
      en:
        'Montmartre is the highest hill in Paris, a hundred and thirty metres, and for a ' +
        'long time it was a village of windmills and vineyards. After hard years for the ' +
        'city in the 1870s, local people promised to build a church up there, and paid for ' +
        'it with countless small donations. Building took almost forty years. The church is ' +
        'startlingly white, and nobody paints it. Its stone comes from one particular ' +
        'quarry and has an unusual property: when it gets wet it releases a substance that ' +
        'acts like whitewash and rinses the dirt away. So rain, which blackens every other ' +
        'building in Paris, cleans this one. The hill underneath is riddled with old gypsum ' +
        'quarries, which is why eighty-three deep shafts had to be filled with concrete ' +
        'before the first stone was laid.',
    },
    facts: [
      {
        el: 'Η Μονμάρτρη είναι ο ψηλότερος λόφος του Παρισιού, 130 μέτρα.',
        en: 'Montmartre is the highest hill in Paris, at 130 metres.',
      },
      {
        el: 'Η πέτρα της ασπρίζει μόνη της όταν βρέχει, και δεν βάφεται ποτέ.',
        en: 'Its stone whitens itself in the rain, and is never painted.',
      },
      {
        el: 'Χρειάστηκαν 83 πηγάδια γεμάτα μπετόν για να σταθεί ο λόφος από κάτω.',
        en: 'Eighty-three shafts filled with concrete were needed to hold the hill up.',
      },
    ],
    location: {
      lat: 48.88665,
      lng: 2.34295,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q28785', deltaM: 0 },
        { kind: 'osm', ref: 'way/23762981', deltaM: 17 },
      ],
      verifiedAt: '2026-09-12',
      note: 'No English Wikipedia coordinate on this pass; Wikidata and OSM agree to 17 m.',
    },
    question: {
      q: {
        el: 'Γιατί μένει λευκή η εκκλησία χωρίς να τη βάφουν;',
        en: 'Why does the church stay white without being painted?',
      },
      answers: [
        { el: 'Η βροχή την καθαρίζει', en: 'The rain cleans it' },
        {
          el: 'Την πλένουν κάθε χρόνο εργάτες με σκάλες και ειδικά σφουγγάρια',
          en: 'Workers wash it every year with ladders and special sponges',
        },
        {
          el: 'Είναι φτιαγμένη από λευκό μάρμαρο που δεν λερώνεται ποτέ',
          en: 'It is made of white marble that simply never gets dirty at all',
        },
        {
          el: 'Ο αέρας στον λόφο είναι τόσο καθαρός που δεν αφήνει καθόλου καπνιά',
          en: 'The air on the hill is so clean that no soot ever settles on it',
        },
      ],
      explanation: {
        el:
          'Η πέτρα της, όταν βραχεί, βγάζει μια ουσία που δουλεύει σαν ασβέστης. Η βροχή ' +
          'μαυρίζει τα άλλα κτίρια και ασπρίζει αυτό.',
        en:
          'When its stone gets wet it releases something that works like whitewash. Rain ' +
          'blackens other buildings and whitens this one.',
      },
    },
  },

  // -------------------------------------------------------------- sainte-chapelle
  {
    id: 'paris-sainte-chapelle',
    cityId: 'paris',
    emoji: '🪟',
    category: 'art',
    difficulty: 3,

    name: { el: 'Σαιντ Σαπέλ', en: 'The Sainte-Chapelle' },
    tagline: {
      el: 'Τοίχοι από χρωματιστό γυαλί αντί για πέτρα',
      en: 'Walls of coloured glass instead of stone',
    },
    story: {
      el:
        'Μπαίνεις από ένα χαμηλό, σκοτεινό ισόγειο και ανεβαίνεις μια στενή σκάλα. Και ' +
        'μετά σταματάς. Το πάνω παρεκκλήσι δεν μοιάζει να έχει τοίχους: δεκαπέντε τεράστια ' +
        'παράθυρα από χρωματιστό γυαλί φτάνουν σχεδόν ως την οροφή, και ανάμεσά τους ' +
        'υπάρχουν μόνο λεπτές πέτρινες κολόνες. Είναι το πιο τολμηρό κόλπο της γοτθικής ' +
        'αρχιτεκτονικής: το βάρος της στέγης δεν το κρατούν οι τοίχοι αλλά ένας σκελετός ' +
        'από πέτρα, οπότε ο τοίχος μπορεί να εξαφανιστεί και να γίνει γυαλί. Χτίστηκε τον ' +
        '13ο αιώνα σε λιγότερο από δέκα χρόνια, πολύ γρήγορα για την εποχή. Τα παράθυρα ' +
        'αφηγούνται ιστορίες σε περίπου χίλιες σκηνές, και διαβάζονται από κάτω αριστερά ' +
        'προς τα πάνω, σαν κόμικ με χίλια καρέ που το βλέπεις μόνο όταν ο ήλιος είναι από ' +
        'πίσω του και το φωτίζει.',
      en:
        'You come in through a low, dark ground floor and climb a narrow stair. And then you ' +
        'stop. The upper chapel does not seem to have walls at all: fifteen enormous windows ' +
        'of coloured glass reach almost to the ceiling, with only thin stone columns between ' +
        'them. It is the boldest trick in Gothic architecture: the weight of the roof is not ' +
        'carried by the walls but by a skeleton of stone, so the wall can disappear and ' +
        'become glass. It was built in the 13th century in under ten years, very fast for ' +
        'its time. The windows tell stories in about a thousand scenes, read from the bottom ' +
        'left upwards, like a comic with a thousand frames that you view with the sun behind ' +
        'it.',
    },
    facts: [
      {
        el: 'Έχει δεκαπέντε τεράστια παράθυρα και ελάχιστο τοίχο ανάμεσά τους.',
        en: 'It has fifteen enormous windows and very little wall between them.',
      },
      {
        el: 'Τα τζάμια της αφηγούνται ιστορίες σε περίπου χίλιες σκηνές.',
        en: 'Its glass tells stories in about a thousand separate scenes.',
      },
      {
        el: 'Χτίστηκε τον 13ο αιώνα σε λιγότερο από δέκα χρόνια.',
        en: 'It was built in the 13th century in under ten years.',
      },
    ],
    location: {
      lat: 48.85537,
      lng: 2.34503,
      anchor: 'centroid',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q193193', deltaM: 0 },
        { kind: 'osm', ref: 'relation/3344870', deltaM: 3 },
        { kind: 'wikipedia', ref: 'Sainte-Chapelle', deltaM: 10 },
      ],
      verifiedAt: '2026-09-12',
    },
    question: {
      q: {
        el: 'Πώς στέκεται η στέγη αν ο τοίχος είναι σχεδόν όλος γυαλί;',
        en: 'How does the roof stand up if the wall is almost all glass?',
      },
      answers: [
        { el: 'Την κρατάει σκελετός από πέτρα', en: 'A skeleton of stone holds it' },
        {
          el: 'Το ίδιο το γυαλί είναι πολύ χοντρό και σηκώνει το βάρος της στέγης',
          en: 'The glass itself is very thick and carries the weight of the roof',
        },
        {
          el: 'Η στέγη είναι από ξύλο και είναι τόσο ελαφριά που δεν χρειάζεται στήριγμα',
          en: 'The roof is wood and so light that it needs no support of any kind',
        },
        {
          el: 'Μεταλλικά σύρματα την κρατούν κρεμασμένη από το διπλανό ψηλό κτίριο',
          en: 'Metal cables hold it hanging from the tall building standing next door',
        },
      ],
      explanation: {
        el:
          'Αυτή είναι όλη η ιδέα του γοτθικού: το βάρος πάει σε κολόνες και νευρώσεις, όχι ' +
          'σε συμπαγή τοίχο. Άρα ο τοίχος ελευθερώνεται.',
        en:
          'That is the whole idea of Gothic: the weight goes into columns and ribs, not into ' +
          'a solid wall. So the wall is set free.',
      },
    },
  },

  // ------------------------------------------------------------ cité des sciences
  {
    id: 'paris-cite-des-sciences',
    cityId: 'paris',
    emoji: '🛸',
    category: 'museum',
    difficulty: 1,

    name: { el: 'Πόλη των Επιστημών', en: 'The Cité des Sciences' },
    tagline: {
      el: 'Το σφαγείο που δεν τελείωσε ποτέ και έγινε μουσείο',
      en: 'The abattoir that was never finished and became a museum',
    },
    story: {
      el:
        'Στα βόρεια του Παρισιού άρχισαν να χτίζουν στα χρόνια του 1960 ένα τεράστιο ' +
        'σφαγείο, το μεγαλύτερο της Ευρώπης. Κόστισε τεράστια ποσά και δεν λειτούργησε ' +
        'ποτέ: μέχρι να τελειώσει, ο τρόπος που μεταφερόταν το κρέας είχε αλλάξει και το ' +
        'κτίριο ήταν ήδη άχρηστο. Έμεινε ένας άδειος σκελετός από μπετόν για χρόνια, ' +
        'ντροπή της πόλης. Αντί να τον γκρεμίσουν, αποφάσισαν να τον γεμίσουν με κάτι ' +
        'εντελώς άλλο, και το 1986 άνοιξε εκεί το μεγαλύτερο μουσείο επιστημών της ' +
        'Ευρώπης. Ο κανόνας μέσα είναι ανάποδος από τα άλλα μουσεία: εδώ αγγίζεις, ' +
        'πατάς, τραβάς και χαλάς. Υπάρχει ολόκληρο τμήμα μόνο για παιδιά, χωρισμένο σε ' +
        'ηλικίες, ώστε να μη μοιράζονται το ίδιο πείραμα ένα τρίχρονο και ένα δεκάχρονο. ' +
        'Και απέξω, μέσα στο πάρκο, στέκονται ένα αληθινό υποβρύχιο και μια γυαλιστερή ' +
        'ασημένια σφαίρα.',
      en:
        'In the north of Paris, work began in the 1960s on an enormous abattoir, the largest ' +
        'in Europe. It cost a fortune and never opened: by the time it was finished the way ' +
        'meat was transported had changed and the building was already useless. It stood for ' +
        'years as an empty concrete skeleton, an embarrassment to the city. Rather than pull ' +
        'it down, they decided to fill it with something else entirely, and in 1986 the ' +
        'largest science museum in Europe opened inside it. The rule in here is the opposite ' +
        'of other museums: you touch, press, pull and break things. There is a whole section ' +
        'for children only, split by age, and outside in the park a real submarine and a ' +
        'shiny silver sphere.',
    },
    facts: [
      {
        el: 'Είναι το μεγαλύτερο μουσείο επιστημών της Ευρώπης και άνοιξε το 1986.',
        en: 'It is the largest science museum in Europe and opened in 1986.',
      },
      {
        el: 'Το κτίριο ξεκίνησε ως σφαγείο που δεν λειτούργησε ποτέ.',
        en: 'The building began as an abattoir that never once opened.',
      },
      {
        el: 'Στο πάρκο απέξω υπάρχει αληθινό υποβρύχιο, που μπορείς να το περπατήσεις.',
        en: 'In the park outside sits a real submarine you can walk through.',
      },
    ],
    location: {
      lat: 48.89556,
      lng: 2.38806,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q1094338', deltaM: 0 },
        { kind: 'wikipedia', ref: "Cité des Sciences et de l'Industrie", deltaM: 5 },
      ],
      verifiedAt: '2026-09-12',
      note: 'Overpass was rate-limiting on this pass; Wikidata and Wikipedia agree to 5 m.',
    },
    question: {
      q: {
        el: 'Τι ήταν αρχικά αυτό το κτίριο;',
        en: 'What was this building meant to be?',
      },
      answers: [
        { el: 'Σφαγείο που δεν άνοιξε ποτέ', en: 'An abattoir that never opened' },
        {
          el: 'Εργοστάσιο αυτοκινήτων που έκλεισε μετά από λίγα μόνο χρόνια',
          en: 'A car factory that shut down after only a handful of years',
        },
        {
          el: 'Σιδηροδρομικός σταθμός που αντικαταστάθηκε από μεγαλύτερο αλλού',
          en: 'A railway station replaced by a bigger one somewhere else',
        },
        {
          el: 'Στρατώνας που εγκαταλείφθηκε όταν μεταφέρθηκε ο στρατός εκτός πόλης',
          en: 'A barracks abandoned when the army moved out of the city itself',
        },
      ],
      explanation: {
        el:
          'Μέχρι να τελειώσει, ο τρόπος μεταφοράς του κρέατος είχε αλλάξει. Το κτίριο ήταν ' +
          'άχρηστο πριν καν χρησιμοποιηθεί.',
        en:
          'By the time it was finished, the way meat was moved had changed. The building was ' +
          'useless before it was ever used.',
      },
    },

    museum: {
      doorNote: {
        el: 'Εδώ επιτρέπεται να αγγίξεις. Αν κάτι δεν κουνιέται, μάλλον δεν το έψαξες αρκετά.',
        en: 'Here you are allowed to touch. If a thing will not move, you have not looked hard enough.',
      },
      rooms: [
        {
          id: 'paris-cite-enfants',
          emoji: '🧒',
          name: { el: 'Η Πόλη των Παιδιών', en: 'The Children’s City' },
          intro: {
            el:
              'Ένα ολόκληρο τμήμα του μουσείου είναι μόνο για παιδιά, και είναι χωρισμένο ' +
              'σε ηλικίες, ώστε ένα τρίχρονο και ένα δεκάχρονο να μη χρειάζεται να ' +
              'μοιραστούν το ίδιο πείραμα. Τίποτα εδώ δεν εξηγείται πρώτα και δοκιμάζεται ' +
              'μετά. Γίνεται ακριβώς το αντίστροφο, και δουλεύει καλύτερα.',
            en:
              'A whole section of the museum is for children only, and it is split by age, ' +
              'so that a three-year-old and a ten-year-old do not have to share the same ' +
              'experiment. Nothing here is explained first and tried afterwards. It works ' +
              'the other way round.',
          },
          exhibits: [
            {
              id: 'paris-cite-water',
              name: { el: 'Το τραπέζι με το νερό', en: 'The water table' },
              blurb: {
                el:
                  'Ένα μακρύ τραπέζι γεμάτο τρεχούμενο νερό, με φράγματα, τροχούς, σωλήνες ' +
                  'και βάρκες που μπορείς να μετακινήσεις. Φοράς αδιάβροχη ποδιά και ' +
                  'βρέχεσαι ούτως ή άλλως. Αυτό που μαθαίνεις δεν λέγεται με λόγια: ότι το ' +
                  'νερό πάει πάντα κάτω, ότι αν το στριμώξεις τρέχει πιο γρήγορα, και ότι ' +
                  'ένα φράγμα δεν σταματάει το νερό αλλά αλλάζει τον δρόμο του. Το ' +
                  'καταλαβαίνεις με τα χέρια, όχι με το κεφάλι.',
                en:
                  'A long table full of running water, with dams, wheels, pipes and boats you ' +
                  'can move around. You put on a waterproof apron and get wet anyway. What ' +
                  'you learn cannot really be said in words: that water always goes down, ' +
                  'that squeezing it makes it run faster, and that a dam does not stop water ' +
                  'but changes where it goes. You understand it with your hands, not with ' +
                  'your head.',
              },
              question: {
                q: {
                  el: 'Τι κάνει στην πραγματικότητα ένα φράγμα;',
                  en: 'What does a dam actually do?',
                },
                answers: [
                  { el: 'Αλλάζει τον δρόμο του νερού', en: 'It changes where water goes' },
                  {
                    el: 'Σταματάει εντελώς το νερό, ώστε να μην περνάει ούτε σταγόνα',
                    en: 'It stops the water completely, so not one drop can get past',
                  },
                  {
                    el: 'Κάνει το νερό πιο καθαρό καθώς περνάει μέσα από τους τοίχους του',
                    en: 'It makes the water cleaner as it passes through its thick walls',
                  },
                  {
                    el: 'Μειώνει τη θερμοκρασία του νερού που κατεβαίνει από το βουνό',
                    en: 'It lowers the temperature of the water coming down the mountain',
                  },
                ],
                explanation: {
                  el: 'Το νερό βρίσκει πάντα δρόμο. Το φράγμα επιλέγει ποιον δρόμο θα βρει.',
                  en: 'Water always finds a way. A dam chooses which way it finds.',
                },
              },
            },
            {
              id: 'paris-cite-building-site',
              name: { el: 'Το εργοτάξιο', en: 'The building site' },
              blurb: {
                el:
                  'Κράνη, τροχαλίες, σχοινιά και ελαφριά τούβλα από αφρώδες υλικό. Σηκώνεις ' +
                  'φορτία με γερανάκι και καταλαβαίνεις κάτι που φαίνεται μαγικό: με μια ' +
                  'τροχαλία, ένα βάρος που δεν το κουνάς με τα χέρια σου ανεβαίνει εύκολα. ' +
                  'Δεν έγινε ελαφρύτερο. Απλώς τραβάς περισσότερο σχοινί για την ίδια ' +
                  'δουλειά, και η προσπάθεια απλώνεται. Είναι το ίδιο κόλπο που σήκωσε τις ' +
                  'πέτρες κάθε καθεδρικού ναού που θα δεις στην πόλη.',
                en:
                  'Helmets, pulleys, ropes and light foam bricks. You lift loads with a small ' +
                  'crane and discover something that looks like magic: with a pulley, a ' +
                  'weight you cannot shift with your hands goes up easily. It did not get ' +
                  'lighter. You simply pull more rope for the same job, and the effort is ' +
                  'spread out. It is the same trick that lifted the stones of every cathedral ' +
                  'you will see in this city.',
              },
              question: {
                q: {
                  el: 'Τι κάνει η τροχαλία στο βάρος που σηκώνεις;',
                  en: 'What does a pulley do to the weight you are lifting?',
                },
                answers: [
                  { el: 'Απλώνει την προσπάθεια', en: 'It spreads the effort out' },
                  {
                    el: 'Μειώνει πραγματικά το βάρος του φορτίου κατά το μισό',
                    en: 'It genuinely halves how much the load actually weighs',
                  },
                  {
                    el: 'Κάνει το σχοινί πιο δυνατό ώστε να μην κόβεται από το φορτίο',
                    en: 'It makes the rope stronger so the load cannot snap it',
                  },
                  {
                    el: 'Κρατάει το φορτίο ακίνητο στον αέρα χωρίς να χρειάζεται δύναμη',
                    en: 'It holds the load still in the air with no force needed at all',
                  },
                ],
                explanation: {
                  el:
                    'Το βάρος μένει ίδιο. Τραβάς πιο πολύ σχοινί με λιγότερη δύναμη, και ' +
                    'γι’ αυτό μοιάζει ελαφρύτερο.',
                  en:
                    'The weight stays the same. You pull more rope with less force, which is ' +
                    'why it feels lighter.',
                },
              },
            },
            {
              id: 'paris-cite-studio',
              name: { el: 'Το τηλεοπτικό στούντιο', en: 'The television studio' },
              blurb: {
                el:
                  'Ένα μικρό στούντιο με κάμερα, φώτα και ένα κατάφωτο πράσινο πανί. ' +
                  'Στέκεσαι μπροστά του και στην οθόνη δίπλα εμφανίζεσαι να πετάς πάνω από ' +
                  'το Παρίσι ή να στέκεσαι στη σελήνη. Το κόλπο είναι απλό και το ' +
                  'καταλαβαίνεις αμέσως όταν το κάνεις: ο υπολογιστής σβήνει ένα ' +
                  'συγκεκριμένο χρώμα και βάζει εικόνα στη θέση του. Γι’ αυτό δεν πρέπει να ' +
                  'φοράς τίποτα πράσινο, αλλιώς θα γίνεις κι εσύ διάφανος.',
                en:
                  'A small studio with a camera, lights and a brightly lit green sheet. You ' +
                  'stand in front of it and on the screen beside you appear flying over Paris ' +
                  'or standing on the moon. The trick is simple and you understand it the ' +
                  'moment you do it: the computer deletes one particular colour and puts a ' +
                  'picture in its place. Which is why you must not wear anything green, or ' +
                  'you will go see-through too.',
              },
              question: {
                q: {
                  el: 'Γιατί δεν πρέπει να φοράς πράσινα στο στούντιο;',
                  en: 'Why must you not wear green in the studio?',
                },
                answers: [
                  { el: 'Θα γίνεις διάφανος', en: 'You will go see-through' },
                  {
                    el: 'Γιατί το πράσινο αντανακλά τα φώτα και χαλάει την ποιότητα',
                    en: 'Because green reflects the lights and spoils the picture quality',
                  },
                  {
                    el: 'Γιατί η κάμερα δυσκολεύεται να εστιάσει σε πράσινα αντικείμενα',
                    en: 'Because the camera finds it hard to focus on anything green',
                  },
                  {
                    el: 'Γιατί το πράσινο μπερδεύεται με το χρώμα του δέρματος στην οθόνη',
                    en: 'Because green is confused with the colour of skin on the screen',
                  },
                ],
                explanation: {
                  el:
                    'Ο υπολογιστής σβήνει ό,τι έχει αυτό το χρώμα. Αν φοράς πράσινο, σβήνει ' +
                    'και εσένα.',
                  en:
                    'The computer deletes everything of that colour. If you wear green, it ' +
                    'deletes you as well.',
                },
              },
            },
          ],
        },
        {
          id: 'paris-cite-outside',
          emoji: '🤿',
          name: { el: 'Τα μεγάλα αντικείμενα', en: 'The big objects' },
          intro: {
            el:
              'Δύο από τα πιο εντυπωσιακά εκθέματα δεν χωρούσαν μέσα, οπότε στέκονται στο ' +
              'πάρκο: ένα αληθινό υποβρύχιο και μια ασημένια σφαίρα που καθρεφτίζει ' +
              'ολόκληρο τον ουρανό. Και τα δύο τα πλησιάζεις περπατώντας, και τα δύο είναι ' +
              'αρκετά μεγαλύτερα από ό,τι περιμένεις να δεις.',
            en:
              'Two of the most striking exhibits would not fit inside, so they stand in the ' +
              'park: a real submarine and a silver sphere that mirrors the whole sky. You ' +
              'walk up to both of them, and both are bigger than you expect.',
          },
          exhibits: [
            {
              id: 'paris-cite-argonaute',
              name: { el: 'Το υποβρύχιο Argonaute', en: 'The submarine Argonaute' },
              blurb: {
                el:
                  'Ένα αληθινό γαλλικό υποβρύχιο, πάνω από πενήντα μέτρα μακρύ, που ' +
                  'υπηρέτησε για δεκαετίες και τώρα κάθεται σε τσιμέντο μέσα στο πάρκο. ' +
                  'Μπαίνεις μέσα και το πρώτο πράγμα που καταλαβαίνεις είναι πόσο στενό ' +
                  'είναι: οι διάδρομοι δεν χωρούν δύο ανθρώπους πλάι πλάι και τα κρεβάτια ' +
                  'είναι στοιβαγμένα ανάμεσα σε σωλήνες. Πενήντα άνθρωποι ζούσαν εδώ μέσα ' +
                  'για βδομάδες, χωρίς να δουν φως, αναπνέοντας αέρα από μηχανήματα.',
                en:
                  'A real French submarine, over fifty metres long, which served for decades ' +
                  'and now sits on concrete in the park. You go inside and the first thing ' +
                  'you understand is how narrow it is: the corridors do not take two people ' +
                  'side by side and the beds are stacked in among the pipes. Fifty people ' +
                  'lived in here for weeks at a time, without seeing daylight, breathing air ' +
                  'made by machines.',
              },
              question: {
                q: {
                  el: 'Τι σε εντυπωσιάζει περισσότερο μέσα στο υποβρύχιο;',
                  en: 'What strikes you most inside the submarine?',
                },
                answers: [
                  { el: 'Πόσο στενό είναι', en: 'How narrow it is' },
                  {
                    el: 'Πόσο μεγάλα και φωτεινά είναι τα παράθυρα προς τη θάλασσα',
                    en: 'How large and bright the windows looking out to sea are',
                  },
                  {
                    el: 'Πόσο άνετα ήταν τα δωμάτια για τους ναύτες που έμεναν μέσα',
                    en: 'How comfortable the rooms were for the sailors who lived in it',
                  },
                  {
                    el: 'Πόσο ήσυχες ήταν οι μηχανές του όταν λειτουργούσαν κανονικά',
                    en: 'How quiet its engines were when they were running normally',
                  },
                ],
                explanation: {
                  el: 'Δεν έχει καθόλου παράθυρα. Πενήντα άνθρωποι, βδομάδες, χωρίς να δουν φως.',
                  en: 'It has no windows at all. Fifty people, weeks at a time, with no daylight.',
                },
              },
            },
            {
              id: 'paris-cite-geode',
              name: { el: 'Η ασημένια σφαίρα', en: 'The silver sphere' },
              blurb: {
                el:
                  'Μια τέλεια σφαίρα διαμέτρου τριάντα έξι μέτρων, σκεπασμένη με χιλιάδες ' +
                  'τριγωνικά ατσάλινα καθρεφτάκια. Απέξω καθρεφτίζει τα σύννεφα και τον ' +
                  'κόσμο που περνάει, οπότε δεν φαίνεται ποτέ ίδια δύο φορές. Μέσα είναι ' +
                  'κινηματογράφος με σφαιρική οθόνη που σε περιβάλλει πάνω, κάτω και στα ' +
                  'πλάγια, και τα καθίσματα γέρνουν πίσω. Το ίδιο σχήμα από έξω και από ' +
                  'μέσα κάνει δύο τελείως διαφορετικές δουλειές.',
                en:
                  'A perfect sphere thirty-six metres across, covered in thousands of ' +
                  'triangular steel mirrors. From outside it reflects the clouds and the ' +
                  'people going past, so it never looks the same twice. Inside it is a cinema ' +
                  'with a spherical screen that wraps above, below and around you, and the ' +
                  'seats lean back. The same shape, seen from outside and from inside, does ' +
                  'two completely different jobs.',
              },
              question: {
                q: {
                  el: 'Γιατί δεν φαίνεται ποτέ ίδια η σφαίρα;',
                  en: 'Why does the sphere never look the same?',
                },
                answers: [
                  { el: 'Καθρεφτίζει ό,τι έχει γύρω της', en: 'It mirrors whatever is around it' },
                  {
                    el: 'Γυρίζει πολύ αργά γύρω από τον άξονά της μέσα στην ημέρα',
                    en: 'It turns very slowly around its own axis during the day',
                  },
                  {
                    el: 'Αλλάζει χρώμα με ειδικά φώτα που είναι κρυμμένα στη βάση της',
                    en: 'It changes colour with special lights hidden away in its base',
                  },
                  {
                    el: 'Τα καθρεφτάκια της αντικαθίστανται συνέχεια από συνεργεία',
                    en: 'Its little mirrors are constantly being replaced by work crews',
                  },
                ],
                explanation: {
                  el:
                    'Δεν έχει δικό της χρώμα. Δείχνει ό,τι υπάρχει γύρω της, άρα αλλάζει με ' +
                    'τον καιρό και με την ώρα.',
                  en:
                    'It has no colour of its own. It shows whatever is around it, so it ' +
                    'changes with the weather and the hour.',
                },
              },
            },
            {
              id: 'paris-cite-planetarium',
              name: { el: 'Ο θόλος του πλανηταρίου', en: 'The planetarium dome' },
              blurb: {
                el:
                  'Μέσα στο κτίριο υπάρχει θόλος όπου προβάλλεται ο ουρανός. Η διαφορά με ' +
                  'μια οθόνη είναι ότι εδώ δεν υπάρχει άκρη: ό,τι κι αν κοιτάξεις, βλέπεις ' +
                  'εικόνα, οπότε ο εγκέφαλος παύει να διαφωνεί και σε πείθει ότι κινείσαι. ' +
                  'Οι προβολές δείχνουν τον σημερινό ουρανό, αλλά και πώς φαινόταν σε άλλες ' +
                  'εποχές ή πώς θα φαινόταν από άλλον πλανήτη. Είναι ό,τι πιο κοντινό σε ' +
                  'ταξίδι χωρίς να κουνηθείς από την καρέκλα.',
                en:
                  'Inside the building there is a dome onto which the sky is projected. The ' +
                  'difference from a screen is that here there is no edge: wherever you look ' +
                  'you see picture, so your brain stops arguing and convinces you that you ' +
                  'are moving. The shows give you tonight’s sky, but also how it looked in ' +
                  'other ages or how it would look from another planet. It is the closest ' +
                  'thing to travelling without leaving your chair.',
              },
              question: {
                q: {
                  el: 'Γιατί σε πείθει ο θόλος ότι κινείσαι;',
                  en: 'Why does the dome convince you that you are moving?',
                },
                answers: [
                  { el: 'Δεν βλέπεις πουθενά άκρη', en: 'You cannot see any edge' },
                  {
                    el: 'Τα καθίσματα κινούνται ελαφρά μαζί με την εικόνα που προβάλλεται',
                    en: 'The seats move gently along with the picture being projected',
                  },
                  {
                    el: 'Ο αέρας στην αίθουσα φυσάει από μπροστά όσο τρέχει η προβολή',
                    en: 'Air is blown at you from the front while the show is running',
                  },
                  {
                    el: 'Ο ήχος έρχεται από πολλά ηχεία και δίνει την αίσθηση ταχύτητας',
                    en: 'Sound arrives from many speakers and gives a sense of speed',
                  },
                ],
                explanation: {
                  el:
                    'Το μάτι καταλαβαίνει ότι κάτι είναι εικόνα επειδή βλέπει το πλαίσιό της. ' +
                    'Βγάλε το πλαίσιο και το κόλπο δουλεύει.',
                  en:
                    'Your eye knows a picture is a picture because it can see the frame. Take ' +
                    'the frame away and the trick works.',
                },
              },
            },
          ],
        },
      ],
      riddles: [
        {
          id: 'paris-cite-riddle-1',
          difficulty: 1,
          prompt: {
            el:
              'Είμαι από ατσάλι, πάνω από πενήντα μέτρα μακρύς, και δεν έχω ούτε ένα ' +
              'παράθυρο. Κάποτε κρυβόμουν κάτω από τη θάλασσα και τώρα κάθομαι ακίνητος ' +
              'μέσα σε ένα πάρκο.',
            en:
              'I am made of steel, over fifty metres long, and I have not one window. I used ' +
              'to hide under the sea and now I sit still in the middle of a park.',
          },
          hint: {
            el: 'Μέσα μου δεν χωρούν δύο άνθρωποι πλάι πλάι.',
            en: 'Two people cannot walk side by side inside me.',
          },
          answerExhibitId: 'paris-cite-argonaute',
        },
        {
          id: 'paris-cite-riddle-2',
          difficulty: 2,
          prompt: {
            el:
              'Είμαι στρογγυλή και δεν έχω δικό μου χρώμα. Δείχνω πάντα ό,τι έχω γύρω μου, ' +
              'οπότε τη μια είμαι γαλάζια και την άλλη γκρίζα, χωρίς να κάνω τίποτα.',
            en:
              'I am round and I have no colour of my own. I always show whatever is around ' +
              'me, so one moment I am blue and the next I am grey, without doing anything.',
          },
          hint: {
            el: 'Από μέσα είμαι κινηματογράφος.',
            en: 'Inside, I am a cinema.',
          },
          answerExhibitId: 'paris-cite-geode',
        },
      ],
    },
  },

  // ------------------------------------------------------------- grande galerie
  {
    id: 'paris-grande-galerie',
    cityId: 'paris',
    emoji: '🦒',
    category: 'science',
    difficulty: 2,

    name: { el: 'Μεγάλη Γκαλερί της Εξέλιξης', en: 'The Great Gallery of Evolution' },
    tagline: {
      el: 'Μια πομπή ζώων που περπατάει μέσα στην αίθουσα',
      en: 'A procession of animals walking through the hall',
    },
    story: {
      el:
        'Τα περισσότερα μουσεία φυσικής ιστορίας βάζουν τα ζώα σε σειρές μέσα σε βιτρίνες, ' +
        'με ταμπελάκια. Εδώ έκαναν κάτι άλλο. Στη μέση μιας τεράστιας αίθουσας με γυάλινη ' +
        'οροφή, δεκάδες ζώα της αφρικανικής σαβάνας στήθηκαν σε μια πομπή που προχωράει: ' +
        'ελέφαντες, καμηλοπαρδάλεις, ρινόκεροι, αντιλόπες, το ένα πίσω από το άλλο, σαν να ' +
        'κατευθύνονται κάπου μαζί. Δεν υπάρχουν τζάμια ανάμεσα. Στέκεσαι δίπλα σε έναν ' +
        'ελέφαντα και βλέπεις πόσο μικρός είσαι. Το φως αλλάζει μέσα στη μέρα, από ' +
        'ανατολή σε καταιγίδα και σε νύχτα, σαν να περνάει μια ολόκληρη μέρα στη σαβάνα. ' +
        'Υπάρχει και μια δεύτερη αίθουσα, πιο σκοτεινή, με ζώα ' +
        'που δεν υπάρχουν πια, ζώα που εξαφανίστηκαν και δεν θα ξαναδεί κανείς ποτέ. Εκεί ' +
        'μέσα κανένα παιδί δεν κάνει φασαρία, και κανείς δεν χρειάζεται να του το ζητήσει.',
      en:
        'Most natural history museums line their animals up in cases with labels on them. ' +
        'Here they did something else. Down the middle of an enormous hall with a glass ' +
        'roof, dozens of animals from the African savannah are arranged in a procession that ' +
        'is walking: elephants, giraffes, rhinoceroses, antelopes, one behind another, as ' +
        'though they were heading somewhere together. There is no glass in between. You ' +
        'stand beside an elephant and see how small you are. The light changes through the ' +
        'day, from dawn to storm to night. There is also a darker room, with animals that no ' +
        'longer exist anywhere, creatures that died out and that nobody will ever see again. ' +
        'In there, no child makes a noise, and nobody has to ask them not to.',
    },
    facts: [
      {
        el: 'Τα ζώα στήνονται σε πομπή που προχωράει, χωρίς τζάμια ανάμεσα.',
        en: 'The animals are arranged in a procession that walks, with no glass between.',
      },
      {
        el: 'Το φως στην αίθουσα αλλάζει μέσα στη μέρα, από ανατολή ως καταιγίδα.',
        en: 'The light in the hall changes through the day, from dawn to storm.',
      },
      {
        el: 'Υπάρχει ξεχωριστή αίθουσα για ζώα που έχουν εξαφανιστεί.',
        en: 'There is a separate room for animals that have gone extinct.',
      },
    ],
    location: {
      lat: 48.8422,
      lng: 2.35639,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q2372049', deltaM: 0 },
        { kind: 'osm', ref: 'way/83913793', deltaM: 14 },
      ],
      verifiedAt: '2026-09-12',
      note: 'No English Wikipedia coordinate on this pass; Wikidata and OSM agree to 14 m.',
    },
    question: {
      q: {
        el: 'Τι διαφορετικό έχει αυτή η αίθουσα από τα άλλα μουσεία;',
        en: 'What does this hall do differently from other museums?',
      },
      answers: [
        { el: 'Τα ζώα περπατούν σε πομπή', en: 'The animals walk in a procession' },
        {
          el: 'Όλα τα ζώα είναι φτιαγμένα από πλαστικό σε φυσικό τους μέγεθος',
          en: 'All the animals are made of plastic at their own natural size',
        },
        {
          el: 'Οι επισκέπτες μπορούν να αγγίξουν και να χαϊδέψουν όλα τα εκθέματα',
          en: 'Visitors are allowed to touch and stroke every one of the exhibits',
        },
        {
          el: 'Κάθε ζώο συνοδεύεται από ηχογράφηση με τη φωνή του στη φύση',
          en: 'Each animal comes with a recording of its own voice in the wild',
        },
      ],
      explanation: {
        el:
          'Δεν υπάρχουν τζάμια ούτε σειρές. Στέκεσαι δίπλα στα ζώα, και γι’ αυτό ' +
          'καταλαβαίνεις το μέγεθός τους.',
        en:
          'There is no glass and there are no rows. You stand beside the animals, which is ' +
          'why you grasp how big they are.',
      },
    },
  },
];

export const trails: Trail[] = [
  {
    id: 'paris-the-river',
    cityId: 'paris',
    emoji: '🌉',
    name: { el: 'Κατά μήκος του ποταμού', en: 'Along the river' },
    promise: {
      el: 'Το νησί στη μέση του Σηκουάνα, οι δύο εκκλησίες του και η γέφυρα που άλλαξε τη συνήθεια μιας πόλης.',
      en: 'The island in the Seine, its two churches, and the bridge that changed a city’s habits.',
    },
    placeIds: [
      'paris-notre-dame',
      'paris-sainte-chapelle',
      'paris-pont-neuf',
      'paris-louvre',
    ],
  },
  {
    id: 'paris-the-grand-axis',
    cityId: 'paris',
    emoji: '🗼',
    name: { el: 'Ο μεγάλος άξονας', en: 'The grand axis' },
    promise: {
      el: 'Τρία τεράστια πράγματα σε μία ευθεία, και ένα από αυτά επρόκειτο να γκρεμιστεί.',
      en: 'Three enormous things in one straight line, and one of them was to be torn down.',
    },
    placeIds: [
      'paris-eiffel-tower',
      'paris-arc-de-triomphe',
      'paris-place-de-la-concorde',
      'paris-palais-garnier',
    ],
  },
  {
    id: 'paris-how-things-work',
    cityId: 'paris',
    emoji: '🔬',
    name: { el: 'Πώς δουλεύουν τα πράγματα', en: 'How things work' },
    promise: {
      el: 'Ένα εκκρεμές που γυρίζει τη Γη, ένα υποβρύχιο σε πάρκο, και ελέφαντες χωρίς τζάμι.',
      en: 'A pendulum that turns the Earth, a submarine in a park, and elephants with no glass.',
    },
    placeIds: [
      'paris-pantheon',
      'paris-cite-des-sciences',
      'paris-grande-galerie',
    ],
  },
  {
    id: 'paris-up-the-hill',
    cityId: 'paris',
    emoji: '🤍',
    name: { el: 'Οι δύο λόφοι', en: 'The two hills' },
    promise: {
      el: 'Η λευκή εκκλησία που την καθαρίζει η βροχή, ένας τρούλος με εκκρεμές, και μια λιμνούλα με ξύλινα καράβια.',
      en: 'The white church the rain keeps clean, a dome with a pendulum, and a pond of wooden boats.',
    },
    placeIds: ['paris-sacre-coeur', 'paris-pantheon', 'paris-luxembourg-gardens'],
  },
];
