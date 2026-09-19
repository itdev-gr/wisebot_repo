/**
 * WiseBot World — Lyon.
 *
 * Sixteen places, two of them museums with an interior. Lyon is not in the old
 * Explorer, so this city was written fresh rather than converted.
 *
 * Every coordinate is copied from `data/world/coords/lyon.json`, field for field, and
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
  // ------------------------------------------------------------------ fourviere
  {
    id: 'lyon-fourviere',
    cityId: 'lyon',
    emoji: '⛪',
    category: 'landmark',
    difficulty: 1,

    name: { el: 'Η Βασιλική της Φουρβιέρ', en: 'The Basilica of Fourvière' },
    tagline: {
      el: 'Μια άσπρη εκκλησία στον λόφο που οι κάτοικοι λένε «ανάποδο ελέφαντα»',
      en: 'A white church on the hill that locals call "the upside-down elephant"',
    },
    story: {
      el:
        'Πάνω από τη Λυών, στην κορυφή ενός λόφου, στέκεται μια άσπρη εκκλησία με τέσσερις ' +
        'πύργους στις γωνίες. Φαίνεται από όλη την πόλη, και οι κάτοικοι τη λένε χαϊδευτικά ' +
        '«τον ανάποδο ελέφαντα», γιατί από μακριά οι τέσσερις πύργοι μοιάζουν με πόδια ' +
        'ελέφαντα που κοιτάζουν προς τον ουρανό. Χτίστηκε ανάμεσα στο 1872 και το 1896 με ' +
        'χρήματα που έδωσαν οι ίδιοι οι κάτοικοι, ως ευχαριστώ επειδή η πόλη γλίτωσε από έναν ' +
        'πόλεμο. Μέσα είναι σκεπασμένη με χρυσά ψηφιδωτά, μάρμαρα σε πολλά χρώματα και ' +
        'βιτρό. Η ίδια η βασιλική είναι στην πραγματικότητα δύο εκκλησίες, η μία πάνω στην ' +
        'άλλη: μια φωτεινή επάνω και μια σκοτεινή, χαμηλή από κάτω. Για να ανέβεις παίρνεις ' +
        'ένα μικρό τρένο με σχοινιά που σκαρφαλώνει τον λόφο, το «φικισέλ». Κάθε 8 ' +
        'Δεκεμβρίου η πόλη βάζει μικρά κεριά σε όλα τα παράθυρα, μια γιορτή που ξεκίνησε από ' +
        'αυτόν τον λόφο.',
      en:
        'Above Lyon, on the top of a hill, stands a white church with four towers at its ' +
        'corners. It can be seen from all over the city, and locals fondly call it "the ' +
        'upside-down elephant", because from a distance the four towers look like an ' +
        'elephant’s legs pointing at the sky. It was built between 1872 and 1896 with money ' +
        'given by the citizens themselves, as a thank-you because the city had been spared ' +
        'from a war. Inside it is covered in golden mosaics, marble in many colours and ' +
        'stained glass. The basilica is really two churches, one on top of the other: a bright ' +
        'one above and a dark, low one beneath. To get up you take a little cable railway that ' +
        'climbs the hill, the "ficelle". Every 8 December the city puts small candles in all ' +
        'its windows, a festival that began on this hill.',
    },
    facts: [
      {
        el: 'Χτίστηκε ανάμεσα στο 1872 και το 1896 με χρήματα των κατοίκων.',
        en: 'It was built between 1872 and 1896 with the citizens’ money.',
      },
      {
        el: 'Είναι δύο εκκλησίες, η μία πάνω στην άλλη.',
        en: 'It is two churches, one on top of the other.',
      },
      {
        el: 'Οι κάτοικοι τη λένε «τον ανάποδο ελέφαντα».',
        en: 'Locals call it "the upside-down elephant".',
      },
    ],
    location: {
      lat: 45.76229,
      lng: 4.82256,
      anchor: 'centroid',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q1516', deltaM: 0 },
        { kind: 'osm', ref: 'way/29179429', deltaM: 2 },
        { kind: 'wikipedia', ref: 'Basilica of Notre-Dame de Fourvière', deltaM: 24 },
      ],
      verifiedAt: '2026-09-18',
      map: { x: 0.211, y: 0.409 },
    },
    question: {
      q: { el: 'Γιατί τη λένε «ανάποδο ελέφαντα»;', en: 'Why is it called "the upside-down elephant"?' },
      answers: [
        { el: 'Οι τέσσερις πύργοι μοιάζουν με πόδια', en: 'Its four towers look like legs' },
        { el: 'Είναι γκρίζα', en: 'It is grey' },
        { el: 'Έχει μια προβοσκίδα', en: 'It has a trunk' },
        {
          el: 'Γιατί μέσα της φυλάγεται ένας σκελετός ελέφαντα από τον ζωολογικό κήπο',
          en: 'Because an elephant’s skeleton from the zoo is kept inside it',
        },
      ],
      explanation: {
        el: 'Από μακριά οι πύργοι στις γωνίες μοιάζουν με πόδια ελέφαντα προς τον ουρανό.',
        en: 'From a distance the corner towers look like an elephant’s legs pointing skyward.',
      },
    },
  },

  // ------------------------------------------------------------- tour metallique
  {
    id: 'lyon-tour-metallique',
    cityId: 'lyon',
    emoji: '🗼',
    category: 'landmark',
    difficulty: 2,

    name: { el: 'Ο μεταλλικός πύργος της Φουρβιέρ', en: 'The Metallic Tower of Fourvière' },
    tagline: {
      el: 'Ένας μικρός Πύργος του Άιφελ που ήθελε να ξεπεράσει την εκκλησία',
      en: 'A little Eiffel Tower that wanted to outdo the church',
    },
    story: {
      el:
        'Λίγα βήματα από τη βασιλική, στον ίδιο λόφο, στέκεται ένας σιδερένιος πύργος που ' +
        'μοιάζει πολύ με την κορυφή του Πύργου του Άιφελ. Δεν είναι σύμπτωση. Χτίστηκε το ' +
        '1894, πέντε χρόνια μετά τον πύργο του Παρισιού, και οι κατασκευαστές του αντέγραψαν ' +
        'επίτηδες το σχέδιο. Λέγεται ότι ήθελαν να δείξουν ότι η Λυών δεν πάει πίσω από το ' +
        'Παρίσι, και ίσως και να στέκεται κάτι πιο ψηλό από την καινούργια εκκλησία δίπλα. ' +
        'Ο πύργος είναι ογδόντα έξι μέτρα, αλλά επειδή στέκεται στην κορυφή του λόφου, η ' +
        'κορυφή του είναι το ψηλότερο σημείο της Λυών. Στην αρχή είχε εστιατόριο και ' +
        'ανελκυστήρα, και οι επισκέπτες ανέβαιναν για τη θέα. Από το 1953 όμως δεν ανεβαίνει ' +
        'κανείς: ο πύργος έγινε κεραία τηλεόρασης, και έτσι μένει ως σήμερα. Το βράδυ ' +
        'φωτίζεται, και μαζί με τη βασιλική δίπλα του φτιάχνει τη γνωστή εικόνα της πόλης.',
      en:
        'A few steps from the basilica, on the same hill, stands an iron tower that looks very ' +
        'much like the top of the Eiffel Tower. That is no coincidence. It was built in 1894, ' +
        'five years after the Paris tower, and its builders copied the design on purpose. It ' +
        'is said that they wanted to show that Lyon was not behind Paris, and perhaps also to ' +
        'have something taller than the new church next door. The tower is eighty-six metres ' +
        'tall, but because it stands on top of the hill, its tip is the highest point in Lyon. ' +
        'At first it had a restaurant and a lift, and visitors went up for the view. Since ' +
        '1953, though, nobody goes up: the tower became a television transmitter, and so it ' +
        'remains today. At night it is lit up, and together with the basilica beside it makes ' +
        'the city’s famous skyline.',
    },
    facts: [
      {
        el: 'Χτίστηκε το 1894, αντιγράφοντας τον Πύργο του Άιφελ.',
        en: 'It was built in 1894, copying the Eiffel Tower.',
      },
      {
        el: 'Η κορυφή του είναι το ψηλότερο σημείο της Λυών.',
        en: 'Its tip is the highest point in Lyon.',
      },
      {
        el: 'Από το 1953 είναι κεραία τηλεόρασης.',
        en: 'Since 1953 it has been a television transmitter.',
      },
    ],
    location: {
      lat: 45.76377,
      lng: 4.82227,
      anchor: 'centroid',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q625', deltaM: 0 },
        { kind: 'osm', ref: 'node/320879095', deltaM: 17 },
        { kind: 'wikipedia', ref: 'Metallic tower of Fourvière', deltaM: 0 },
      ],
      verifiedAt: '2026-09-18',
      map: { x: 0.205, y: 0.383 },
    },
    question: {
      q: { el: 'Γιατί δεν ανεβαίνει κανείς πια στον πύργο;', en: 'Why does nobody go up the tower any more?' },
      answers: [
        { el: 'Έγινε κεραία τηλεόρασης', en: 'It became a TV transmitter' },
        { el: 'Έπεσε', en: 'It fell' },
        { el: 'Χάλασε ο ανελκυστήρας', en: 'The lift broke down' },
        {
          el: 'Γιατί η εκκλησία δίπλα ζήτησε να μην τη βλέπει κανείς από ψηλά',
          en: 'Because the church next door asked that nobody look down on it',
        },
      ],
      explanation: {
        el: 'Από το 1953 στέλνει το σήμα της τηλεόρασης. Το εστιατόριο έκλεισε.',
        en: 'Since 1953 it has sent out the television signal. The restaurant closed.',
      },
    },
  },

  // ------------------------------------------------------------ theatre antique
  {
    id: 'lyon-theatre-antique',
    cityId: 'lyon',
    emoji: '🎭',
    category: 'history',
    difficulty: 2,

    name: { el: 'Το ρωμαϊκό θέατρο', en: 'The Roman Theatre' },
    tagline: {
      el: 'Δύο χιλιάδες χρόνων, και ακόμα γίνονται συναυλίες',
      en: 'Two thousand years old, and concerts are still held here',
    },
    story: {
      el:
        'Πριν λέγεται Λυών, η πόλη λεγόταν Λούγκντουνουμ, και ήταν η πρωτεύουσα της ρωμαϊκής ' +
        'Γαλατίας. Ιδρύθηκε το 43 π.Χ. σε αυτόν τον λόφο, και εδώ σκάφτηκε μέσα στην πλαγιά ' +
        'ένα θέατρο, το πιο παλιό ρωμαϊκό θέατρο της Γαλλίας. Χωρούσε περίπου δέκα χιλιάδες ' +
        'θεατές, καθισμένους σε ημικυκλικές πέτρινες σειρές, με τη σκηνή χαμηλά. Δίπλα του ' +
        'υπάρχει ένα δεύτερο, μικρότερο θέατρο, το ωδείο, για μουσική και ποίηση, με ' +
        'χρωματιστά μάρμαρα στο πάτωμα. Για αιώνες τα θέατρα ήταν θαμμένα κάτω από χώμα και ' +
        'αμπέλια, μέχρι που ξεσκεπάστηκαν τον 20ό αιώνα. Το πιο ωραίο είναι ότι το μεγάλο ' +
        'θέατρο δεν είναι μόνο για να το κοιτάς: κάθε καλοκαίρι γίνονται εδώ συναυλίες, με ' +
        'χιλιάδες ανθρώπους στις ίδιες πέτρινες σειρές όπου κάθονταν οι Ρωμαίοι. Το μουσείο ' +
        'δίπλα είναι χωμένο μέσα στον λόφο, για να μην κρύβει τη θέα.',
      en:
        'Before it was called Lyon, the city was called Lugdunum, and it was the capital of ' +
        'Roman Gaul. It was founded in 43 BC on this hill, and here a theatre was dug into the ' +
        'slope, the oldest Roman theatre in France. It held about ten thousand spectators, ' +
        'seated on semicircular stone rows, with the stage down below. Beside it is a second, ' +
        'smaller theatre, the odeon, for music and poetry, with coloured marble on its floor. ' +
        'For centuries the theatres were buried under earth and vines, until they were ' +
        'uncovered in the 20th century. The best part is that the big theatre is not just for ' +
        'looking at: every summer concerts are held here, with thousands of people on the same ' +
        'stone rows where the Romans sat. The museum next door is tucked into the hill, so as ' +
        'not to block the view.',
    },
    facts: [
      {
        el: 'Είναι το πιο παλιό ρωμαϊκό θέατρο της Γαλλίας.',
        en: 'It is the oldest Roman theatre in France.',
      },
      {
        el: 'Χωρούσε περίπου δέκα χιλιάδες θεατές.',
        en: 'It held about ten thousand spectators.',
      },
      {
        el: 'Κάθε καλοκαίρι γίνονται εδώ συναυλίες.',
        en: 'Concerts are held here every summer.',
      },
    ],
    location: {
      lat: 45.75972,
      lng: 4.81972,
      anchor: 'centroid',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q1510', deltaM: 0 },
        { kind: 'osm', ref: 'way/88526502', deltaM: 4 },
        { kind: 'wikipedia', ref: 'Ancient Theatre of Fourvière', deltaM: 0 },
      ],
      verifiedAt: '2026-09-18',
      map: { x: 0.154, y: 0.453 },
    },
    question: {
      q: { el: 'Τι γίνεται στο θέατρο κάθε καλοκαίρι;', en: 'What happens at the theatre every summer?' },
      answers: [
        { el: 'Συναυλίες στις ρωμαϊκές σειρές', en: 'Concerts on the Roman rows' },
        { el: 'Τίποτα', en: 'Nothing' },
        { el: 'Αγώνες μονομάχων', en: 'Gladiator fights' },
        {
          el: 'Ένα παζάρι όπου πουλάνε ρωμαϊκά νομίσματα από τις ανασκαφές',
          en: 'A fair where Roman coins from the digs are sold to visitors',
        },
      ],
      explanation: {
        el: 'Χιλιάδες άνθρωποι κάθονται στις ίδιες πέτρες όπου κάθονταν οι Ρωμαίοι.',
        en: 'Thousands of people sit on the same stones where the Romans sat.',
      },
    },
  },

  // ------------------------------------------------------------------- lugdunum
  {
    id: 'lyon-lugdunum',
    cityId: 'lyon',
    emoji: '🏛️',
    category: 'museum',
    difficulty: 2,

    name: { el: 'Λούγκντουνουμ, το ρωμαϊκό μουσείο', en: 'Lugdunum, the Roman Museum' },
    tagline: {
      el: 'Ένα μουσείο κρυμμένο μέσα στον λόφο, γεμάτο ρωμαϊκά ψηφιδωτά',
      en: 'A museum hidden inside the hill, full of Roman mosaics',
    },
    story: {
      el:
        'Δίπλα στα ρωμαϊκά θέατρα υπάρχει ένα μουσείο που σχεδόν δεν φαίνεται. Ο αρχιτέκτονάς ' +
        'του το έχωσε μέσα στον λόφο το 1975, με μόνο δύο μεγάλα παράθυρα να κοιτάζουν προς ' +
        'τα θέατρα, ώστε το κτίριο να μην κρύβει τα ερείπια. Μέσα, μια ράμπα από τσιμέντο ' +
        'κατηφορίζει γύρω γύρω, και καθώς κατεβαίνεις περνάς από όλη την ιστορία της ρωμαϊκής ' +
        'Λυών. Θα δεις ψηφιδωτά μεγάλα σαν δωμάτια, αγάλματα, κοσμήματα, παιχνίδια παιδιών, ' +
        'εργαλεία γιατρών και μια μεγάλη χάλκινη πλάκα με έναν λόγο ενός αυτοκράτορα. Υπάρχει ' +
        'και ένα μοντέλο της ρωμαϊκής πόλης, ώστε να καταλάβεις πού βρίσκεσαι. Οι Ρωμαίοι ' +
        'είχαν φτιάξει εδώ ναούς, λουτρά, υδραγωγεία που έφερναν νερό από εβδομήντα χιλιόμετρα ' +
        'μακριά, και δρόμους που έφταναν ως τη Ρώμη. Το μουσείο εξηγεί πώς έμοιαζε μια ' +
        'μέρα στη ζωή ενός παιδιού που ζούσε εδώ πριν από δύο χιλιάδες χρόνια.',
      en:
        'Beside the Roman theatres there is a museum you can hardly see. Its architect buried ' +
        'it inside the hill in 1975, with only two big windows looking out at the theatres, so ' +
        'that the building would not hide the ruins. Inside, a concrete ramp winds downward, ' +
        'and as you go down you pass through the whole history of Roman Lyon. You will see ' +
        'mosaics as big as rooms, statues, jewellery, children’s toys, doctors’ tools and a ' +
        'large bronze plaque with a speech by an emperor. There is also a model of the Roman ' +
        'city, so you understand where you are. The Romans built temples here, baths, ' +
        'aqueducts that brought water from seventy kilometres away, and roads that reached all ' +
        'the way to Rome. The museum explains what a day looked like in the life of a child ' +
        'who lived here two thousand years ago.',
    },
    facts: [
      {
        el: 'Το κτίριο είναι χωμένο μέσα στον λόφο για να μην κρύβει τα ερείπια.',
        en: 'The building is buried in the hill so as not to hide the ruins.',
      },
      {
        el: 'Οι Ρωμαίοι έφερναν νερό με υδραγωγεία από εβδομήντα χιλιόμετρα μακριά.',
        en: 'The Romans brought water by aqueduct from seventy kilometres away.',
      },
      {
        el: 'Έχει ψηφιδωτά μεγάλα σαν δωμάτια.',
        en: 'It has mosaics as big as rooms.',
      },
    ],
    location: {
      lat: 45.76042,
      lng: 4.81991,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q509', deltaM: 0 },
        { kind: 'osm', ref: 'way/88526510', deltaM: 47 },
        { kind: 'wikipedia', ref: 'Lugdunum (museum)', deltaM: 0 },
      ],
      verifiedAt: '2026-09-18',
      map: { x: 0.158, y: 0.441 },
    },
    question: {
      q: { el: 'Γιατί το μουσείο χώθηκε μέσα στον λόφο;', en: 'Why was the museum buried in the hill?' },
      answers: [
        { el: 'Για να μην κρύβει τα ρωμαϊκά θέατρα', en: 'So it would not hide the Roman theatres' },
        { el: 'Για δροσιά', en: 'To keep cool' },
        { el: 'Για να μην το βρουν κλέφτες', en: 'So thieves would not find it' },
        {
          el: 'Γιατί οι Ρωμαίοι είχαν σκάψει εκεί μια σπηλιά και το μουσείο τη χρησιμοποίησε',
          en: 'Because the Romans had dug a cave there and the museum made use of it',
        },
      ],
      explanation: {
        el: 'Μόνο δύο μεγάλα παράθυρα κοιτάζουν έξω. Τα ερείπια μένουν ορατά από παντού.',
        en: 'Only two big windows look out. The ruins stay visible from everywhere.',
      },
    },

    museum: {
      doorNote: {
        el: 'Κατέβα τη ράμπα σιγά σιγά. Ψάξε πρώτα τον πιο μεγάλο χάλκινο πίνακα με γράμματα.',
        en: 'Go down the ramp slowly. Look first for the biggest bronze plaque with letters.',
      },
      rooms: [
        {
          id: 'lyon-lugdunum-city',
          emoji: '🏗️',
          name: { el: 'Η ρωμαϊκή πόλη', en: 'The Roman city' },
          intro: {
            el:
              'Το πρώτο κομμάτι της ράμπας εξηγεί πώς γεννήθηκε η Λούγκντουνουμ και πώς ' +
              'έγινε πρωτεύουσα. Εδώ θα δεις τα πιο σημαντικά πράγματα του μουσείου: μια ' +
              'χάλκινη πλάκα με τα λόγια ενός αυτοκράτορα, ένα μοντέλο της πόλης και ένα ' +
              'ημερολόγιο που δεν είναι ρωμαϊκό αλλά γαλατικό.',
            en:
              'The first stretch of the ramp explains how Lugdunum was born and how it became ' +
              'a capital. Here you will see the most important things in the museum: a bronze ' +
              'plaque with an emperor’s words, a model of the city and a calendar that is not ' +
              'Roman but Gaulish.',
          },
          exhibits: [
            {
              id: 'lyon-lugdunum-claudian-table',
              name: { el: 'Η χάλκινη πλάκα του Κλαύδιου', en: 'The Claudian Table' },
              blurb: {
                el:
                  'Μια μεγάλη χάλκινη πλάκα, σπασμένη σε δύο κομμάτια, σκεπασμένη με σειρές από ' +
                  'μικρά λατινικά γράμματα. Είναι ο λόγος που έβγαλε ο αυτοκράτορας Κλαύδιος το ' +
                  '48 μ.Χ., ο οποίος είχε γεννηθεί σε αυτή την πόλη. Ζητούσε να επιτραπεί στους ' +
                  'Γαλάτες, τους κατοίκους της σημερινής Γαλλίας, να γίνουν μέλη της Συγκλήτου, ' +
                  'δηλαδή της βουλής της Ρώμης. Η πλάκα βρέθηκε το 1528 από έναν αμπελουργό που ' +
                  'έσκαβε το χωράφι του στον λόφο. Είναι από τα λίγα κείμενα αυτοκράτορα που ' +
                  'σώζονται ακριβώς όπως γράφτηκαν.',
                en:
                  'A large bronze plaque, broken in two pieces, covered in rows of small Latin ' +
                  'letters. It is the speech given in AD 48 by the emperor Claudius, who was born ' +
                  'in this city. He asked that the Gauls, the people of what is now France, be ' +
                  'allowed to become members of the Senate, the parliament of Rome. The plaque ' +
                  'was found in 1528 by a wine-grower digging his field on the hill. It is one of ' +
                  'the few texts by an emperor that survive exactly as they were written.',
              },
              question: {
                q: { el: 'Ποιος βρήκε αυτή την πλάκα;', en: 'Who found this plaque?' },
                answers: [
                  { el: 'Ένας αμπελουργός που έσκαβε', en: 'A wine-grower who was digging' },
                  { el: 'Ένας βασιλιάς', en: 'A king' },
                  { el: 'Αρχαιολόγοι το 1975', en: 'Archaeologists in 1975' },
                  {
                    el: 'Ένα παιδί που έψαχνε την μπάλα του στα ερείπια του θεάτρου',
                    en: 'A child who was looking for a lost ball in the ruins of the theatre',
                  },
                ],
                explanation: {
                  el: 'Το 1528, στο χωράφι του στον λόφο. Η πλάκα είχε τα λόγια ενός αυτοκράτορα γεννημένου εδώ.',
                  en: 'In 1528, in his field on the hill. It carried the words of an emperor born here.',
                },
              },
            },
            {
              id: 'lyon-lugdunum-model',
              name: { el: 'Το μοντέλο της πόλης', en: 'The model of the city' },
              blurb: {
                el:
                  'Ένα μεγάλο μοντέλο δείχνει πώς έμοιαζε ο λόφος πριν από δύο χιλιάδες χρόνια: ' +
                  'τα δύο θέατρα, ένας μεγάλος ναός, λουτρά, σπίτια με κόκκινες στέγες, δρόμοι ' +
                  'στρωμένοι με πέτρα, και τέσσερα υδραγωγεία που έφταναν από τα βουνά. Κοίτα ' +
                  'από το παράθυρο δίπλα και σύγκρινε το μοντέλο με τα αληθινά θέατρα έξω. Τότε ' +
                  'η πόλη ήταν στον λόφο, γιατί από ψηλά τη φύλαγαν πιο εύκολα. Αργότερα οι ' +
                  'κάτοικοι κατέβηκαν δίπλα στα ποτάμια, εκεί που είναι η Λυών σήμερα.',
                en:
                  'A large model shows what the hill looked like two thousand years ago: the two ' +
                  'theatres, a great temple, baths, houses with red roofs, streets paved with ' +
                  'stone, and four aqueducts arriving from the mountains. Look out of the window ' +
                  'next to it and compare the model with the real theatres outside. Back then the ' +
                  'city was on the hill, because it was easier to guard from up high. Later the ' +
                  'people moved down beside the rivers, where Lyon is today.',
              },
              question: {
                q: { el: 'Γιατί οι Ρωμαίοι έχτισαν την πόλη πάνω στον λόφο;', en: 'Why did the Romans build the city on the hill?' },
                answers: [
                  { el: 'Από ψηλά τη φύλαγαν πιο εύκολα', en: 'It was easier to guard from up high' },
                  { el: 'Για τη θέα', en: 'For the view' },
                  { el: 'Ήταν πιο ζεστά', en: 'It was warmer up there' },
                  {
                    el: 'Γιατί κάτω δίπλα στα ποτάμια ζούσαν ακόμα οι Γαλάτες και δεν τους άφηναν',
                    en: 'Because the Gauls still lived down by the rivers and would not let them',
                  },
                ],
                explanation: {
                  el: 'Αργότερα οι κάτοικοι κατέβηκαν στα ποτάμια, εκεί που είναι η Λυών σήμερα.',
                  en: 'Later the people moved down to the rivers, where Lyon is today.',
                },
              },
            },
            {
              id: 'lyon-lugdunum-calendar',
              name: { el: 'Το γαλατικό ημερολόγιο', en: 'The Gaulish calendar' },
              blurb: {
                el:
                  'Δεκάδες μικρά χάλκινα κομμάτια, ενωμένα σαν παζλ, σχηματίζουν μια μεγάλη ' +
                  'πλάκα γεμάτη λέξεις και τρύπες. Είναι ένα ημερολόγιο, αλλά όχι ρωμαϊκό: είναι ' +
                  'γραμμένο στη γλώσσα των Γαλατών, με ρωμαϊκά γράμματα. Οι Γαλάτες μετρούσαν ' +
                  'τον χρόνο με το φεγγάρι, και το ημερολόγιό τους κάλυπτε πέντε χρόνια, με ' +
                  'μήνες «καλούς» και «κακούς». Σε κάθε μέρα υπήρχε μια τρύπα, όπου έμπαινε ένα ' +
                  'καρφάκι για να δείχνει πού βρίσκεσαι. Είναι το πιο μεγάλο κείμενο στη ' +
                  'γαλατική γλώσσα που έχει βρεθεί ποτέ, και οι επιστήμονες προσπαθούν ακόμα να ' +
                  'το καταλάβουν ολόκληρο.',
                en:
                  'Dozens of small bronze pieces, fitted together like a jigsaw, form a big plaque ' +
                  'full of words and holes. It is a calendar, but not a Roman one: it is written ' +
                  'in the language of the Gauls, in Roman letters. The Gauls counted time by the ' +
                  'moon, and their calendar covered five years, with "good" months and "bad" ' +
                  'ones. For each day there was a hole, where a peg was put to show where you ' +
                  'were. It is the longest text in the Gaulish language ever found, and scholars ' +
                  'are still trying to understand all of it.',
              },
              question: {
                q: { el: 'Πώς έδειχναν οι Γαλάτες ποια μέρα είναι;', en: 'How did the Gauls mark which day it was?' },
                answers: [
                  { el: 'Με ένα καρφάκι σε μια τρύπα', en: 'With a peg in a hole' },
                  { el: 'Με κιμωλία', en: 'With chalk' },
                  { el: 'Δεν το έδειχναν', en: 'They did not mark it' },
                  {
                    el: 'Ανάβοντας ένα κερί μπροστά στο όνομα της μέρας κάθε πρωί',
                    en: 'By lighting a candle in front of the name of the day every morning',
                  },
                ],
                explanation: {
                  el: 'Κάθε μέρα είχε τη δική της τρύπα. Το ημερολόγιο μετρούσε τον χρόνο με το φεγγάρι.',
                  en: 'Each day had its own hole. The calendar counted time by the moon.',
                },
              },
            },
          ],
        },
        {
          id: 'lyon-lugdunum-life',
          emoji: '🎲',
          name: { el: 'Η ζωή κάθε μέρα', en: 'Everyday life' },
          intro: {
            el:
              'Πιο κάτω στη ράμπα, το μουσείο αφήνει τους αυτοκράτορες και δείχνει τους ' +
              'απλούς ανθρώπους: πώς έτρωγαν, πώς έπαιζαν, με τι στόλιζαν τα σπίτια τους. Τα ' +
              'ψηφιδωτά είναι τεράστια και πρέπει να τα δεις από ψηλά. Ψάξε ανάμεσα στα ' +
              'μικρά αντικείμενα κάτι που θα το είχες κι εσύ στο δωμάτιό σου.',
            en:
              'Further down the ramp, the museum leaves the emperors and shows ordinary people: ' +
              'how they ate, how they played, what they decorated their houses with. The ' +
              'mosaics are enormous and you should look at them from above. Among the small ' +
              'objects, look for something you would have in your own room.',
          },
          exhibits: [
            {
              id: 'lyon-lugdunum-circus-mosaic',
              name: { el: 'Το ψηφιδωτό με τις αρματοδρομίες', en: 'The chariot-race mosaic' },
              blurb: {
                el:
                  'Ένα ψηφιδωτό μεγάλο σαν δωμάτιο, από χιλιάδες μικρά χρωματιστά πετραδάκια, ' +
                  'δείχνει έναν ολόκληρο αγώνα αρμάτων. Οκτώ άρματα με τέσσερα άλογα το καθένα ' +
                  'τρέχουν γύρω από μια μακριά πίστα, σε τέσσερις ομάδες με διαφορετικά χρώματα, ' +
                  'κόκκινη, άσπρη, πράσινη και μπλε, όπως οι σημερινές ομάδες ποδοσφαίρου. Ένα ' +
                  'άρμα έχει ανατραπεί. Στη μέση της πίστας φαίνονται μηχανές που μετρούσαν τους ' +
                  'γύρους, με αυγά και δελφίνια που κατέβαιναν ένα ένα. Το ψηφιδωτό ήταν το ' +
                  'πάτωμα ενός πλούσιου σπιτιού στη Λυών.',
                en:
                  'A mosaic as big as a room, made of thousands of small coloured stones, shows ' +
                  'a whole chariot race. Eight chariots with four horses each run round a long ' +
                  'track, in four teams of different colours, red, white, green and blue, like ' +
                  'football teams today. One chariot has overturned. In the middle of the track ' +
                  'you can see the machines that counted the laps, with eggs and dolphins that ' +
                  'were lowered one by one. The mosaic was the floor of a rich house in Lyon.',
              },
              question: {
                q: { el: 'Πώς μετρούσαν τους γύρους στον αγώνα;', en: 'How did they count the laps in the race?' },
                answers: [
                  { el: 'Με αυγά και δελφίνια που κατέβαιναν', en: 'With eggs and dolphins lowered one by one' },
                  { el: 'Φωνάζοντας', en: 'By shouting' },
                  { el: 'Με έναν πίνακα', en: 'On a scoreboard' },
                  {
                    el: 'Ένα παιδί έτρεχε δίπλα στα άρματα και τους μετρούσε με τα δάχτυλα',
                    en: 'A child ran alongside the chariots and counted them on its fingers',
                  },
                ],
                explanation: {
                  el: 'Οι μηχανές ήταν στη μέση της πίστας. Το ψηφιδωτό ήταν πάτωμα ενός σπιτιού.',
                  en: 'The machines stood in the middle of the track. The mosaic was a house floor.',
                },
              },
            },
            {
              id: 'lyon-lugdunum-toys',
              name: { el: 'Παιχνίδια και ζάρια', en: 'Toys and dice' },
              blurb: {
                el:
                  'Σε μια βιτρίνα υπάρχουν πράγματα που θα αναγνωρίσεις αμέσως: ζάρια από κόκαλο, ' +
                  'ίδια με τα σημερινά, με τις τελείες τους· μικρές πήλινες κούκλες με χέρια που ' +
                  'κουνιούνται· βόλοι από γυαλί· πιόνια για επιτραπέζια παιχνίδια· μια μικρή ' +
                  'πήλινη κότα με ρόδες. Τα ρωμαϊκά παιδιά έπαιζαν με τα ίδια πράγματα που ' +
                  'παίζουν τα παιδιά σήμερα, πριν από δύο χιλιάδες χρόνια. Πολλά από αυτά ' +
                  'βρέθηκαν σε τάφους παιδιών, γιατί οι γονείς τα έθαβαν μαζί τους για να τα ' +
                  'έχουν.',
                en:
                  'In one case there are things you will recognise at once: dice made of bone, ' +
                  'just like today’s, with their dots; small clay dolls with arms that move; ' +
                  'glass marbles; pieces for board games; a little clay hen on wheels. Roman ' +
                  'children played with the same things children play with today, two thousand ' +
                  'years ago. Many of these were found in children’s graves, because parents ' +
                  'buried them with their children so that they would have them.',
              },
              question: {
                q: { el: 'Με τι έπαιζαν τα ρωμαϊκά παιδιά;', en: 'What did Roman children play with?' },
                answers: [
                  { el: 'Ζάρια, κούκλες και βόλους', en: 'Dice, dolls and marbles' },
                  { el: 'Με τίποτα', en: 'Nothing' },
                  { el: 'Με σπαθιά μόνο', en: 'Only with swords' },
                  {
                    el: 'Με μικρά ζωντανά ζώα που τους έδιναν οι γονείς τους στα γενέθλιά τους',
                    en: 'With small live animals that their parents gave them on their birthdays',
                  },
                ],
                explanation: {
                  el: 'Σχεδόν ίδια με τα σημερινά. Πολλά βρέθηκαν σε τάφους παιδιών.',
                  en: 'Almost the same as today’s. Many were found in children’s graves.',
                },
              },
            },
            {
              id: 'lyon-lugdunum-doctor',
              name: { el: 'Τα εργαλεία του γιατρού', en: 'The doctor’s tools' },
              blurb: {
                el:
                  'Μια σειρά από λεπτά χάλκινα εργαλεία: λαβίδες, μικρά κουτάλια, βελόνες, ' +
                  'μαχαιράκια, και ένα κουτί για αλοιφές. Ανήκαν σε έναν Ρωμαίο γιατρό. Οι Ρωμαίοι ' +
                  'ήξεραν να καθαρίζουν πληγές, να δένουν σπασμένα κόκαλα και να βγάζουν δόντια, ' +
                  'και έφτιαχναν φάρμακα από βότανα και μέλι. Δεν ήξεραν όμως τίποτα για τα ' +
                  'μικρόβια, οπότε πολλές αρρώστιες δεν μπορούσαν να τις γιατρέψουν. Τα ' +
                  'εργαλεία μοιάζουν με αυτά ενός σημερινού γιατρού, αλλά αν τα κοιτάξεις καλά, ' +
                  'κάθε ένα έχει στολίδια: οι Ρωμαίοι ήθελαν και τα εργαλεία τους όμορφα.',
                en:
                  'A row of slender bronze tools: tweezers, tiny spoons, needles, little knives, ' +
                  'and a box for ointments. They belonged to a Roman doctor. The Romans knew how ' +
                  'to clean wounds, set broken bones and pull teeth, and they made medicines from ' +
                  'herbs and honey. But they knew nothing about germs, so many illnesses they could ' +
                  'not cure. The tools look like those of a doctor today, but if you look closely, ' +
                  'each one is decorated: the Romans wanted even their tools to be beautiful.',
              },
              question: {
                q: { el: 'Τι δεν ήξεραν οι Ρωμαίοι γιατροί;', en: 'What did Roman doctors not know about?' },
                answers: [
                  { el: 'Τα μικρόβια που κολλάνε αρρώστιες', en: 'The germs that spread illness' },
                  { el: 'Το μέλι', en: 'Honey' },
                  { el: 'Πώς να βγάζουν δόντια', en: 'How to pull a tooth' },
                  {
                    el: 'Ότι οι άνθρωποι έχουν κόκαλα μέσα τους, γιατί δεν έβλεπαν μέσα στο σώμα',
                    en: 'That people have bones inside them, because they could not see into the body',
                  },
                ],
                explanation: {
                  el: 'Ήξεραν πληγές, κόκαλα και δόντια, αλλά όχι γιατί κολλάνε οι αρρώστιες.',
                  en: 'They knew wounds, bones and teeth, but not why illnesses spread.',
                },
              },
            },
          ],
        },
      ],
      riddles: [
        {
          id: 'lyon-lugdunum-riddle-1',
          difficulty: 1,
          prompt: {
            el:
              'Είμαι πάτωμα, αλλά κανείς δεν με πατάει πια. Πάνω μου τρέχουν τριάντα δύο άλογα ' +
              'σε τέσσερα χρώματα, και ένα άρμα έχει πέσει.',
            en:
              'I am a floor, but nobody walks on me any more. Thirty-two horses in four colours ' +
              'run across me, and one chariot has fallen over.',
          },
          hint: { el: 'Είμαι φτιαγμένο από χιλιάδες πετραδάκια.', en: 'I am made of thousands of little stones.' },
          answerExhibitId: 'lyon-lugdunum-circus-mosaic',
        },
        {
          id: 'lyon-lugdunum-riddle-2',
          difficulty: 2,
          prompt: {
            el:
              'Με βρήκε ένας αμπελουργός σκάβοντας. Είμαι σπασμένη στα δύο, αλλά κρατάω ακόμα ' +
              'κάθε λέξη που είπε ένας αυτοκράτορας γεννημένος σε αυτή την πόλη.',
            en:
              'A wine-grower found me while digging. I am broken in two, but I still hold every ' +
              'word an emperor born in this city once said.',
          },
          hint: { el: 'Είμαι από χαλκό.', en: 'I am made of bronze.' },
          answerExhibitId: 'lyon-lugdunum-claudian-table',
        },
        {
          id: 'lyon-lugdunum-riddle-3',
          difficulty: 3,
          prompt: {
            el:
              'Μετράω τον χρόνο με το φεγγάρι, όχι με τον ήλιο. Έχω μια τρύπα για κάθε μέρα, ' +
              'και τη γλώσσα μου δεν την καταλαβαίνει ακόμα κανείς ολόκληρη.',
            en:
              'I count time by the moon, not the sun. I have a hole for every day, and nobody ' +
              'yet understands the whole of my language.',
          },
          hint: { el: 'Δεν είμαι ρωμαϊκό.', en: 'I am not Roman.' },
          answerExhibitId: 'lyon-lugdunum-calendar',
        },
      ],
    },
  },

  // ----------------------------------------------------------------- cathedrale
  {
    id: 'lyon-cathedrale',
    cityId: 'lyon',
    emoji: '🕰️',
    category: 'history',
    difficulty: 2,

    name: { el: 'Ο Καθεδρικός του Αγίου Ιωάννη', en: 'Saint John’s Cathedral' },
    tagline: {
      el: 'Μια εκκλησία με ένα ρολόι που έχει μέσα του κοκόρι και αγγέλους',
      en: 'A church with a clock that has a cockerel and angels inside',
    },
    story: {
      el:
        'Στα πόδια του λόφου της Φουρβιέρ, στην καρδιά της παλιάς πόλης, στέκεται ο ' +
        'καθεδρικός της Λυών. Άρχισε να χτίζεται το 1180 και τελείωσε τριακόσια χρόνια ' +
        'αργότερα, γι’ αυτό το κάτω μέρος του είναι σε ένα στυλ και το πάνω σε άλλο. Το πιο ' +
        'διάσημο πράγμα μέσα του είναι ένα ρολόι, ψηλό σαν τριώροφο σπίτι, φτιαγμένο τον 14ο ' +
        'αιώνα και επισκευασμένο πολλές φορές από τότε. Δεν δείχνει μόνο την ώρα: δείχνει την ' +
        'ημερομηνία, τη θέση του ήλιου και του φεγγαριού, και τα άστρα. Και ορισμένες ώρες ' +
        'της ημέρας ζωντανεύει. Ένα κοκόρι στην κορυφή χτυπάει τα φτερά του και λαλεί, άγγελοι ' +
        'χτυπούν καμπάνες, και μικρές φιγούρες βγαίνουν και κάνουν υπόκλιση. Είναι ένα από τα ' +
        'πιο παλιά αστρονομικά ρολόγια της Ευρώπης. Στην πλατεία μπροστά από τον καθεδρικό ' +
        'υπάρχουν ερείπια από ακόμα πιο παλιές εκκλησίες, που φαίνονται μέσα από κάγκελα.',
      en:
        'At the foot of Fourvière hill, in the heart of the old town, stands Lyon’s cathedral. ' +
        'It was begun in 1180 and finished three hundred years later, which is why its lower ' +
        'part is in one style and its upper part in another. The most famous thing inside is a ' +
        'clock, as tall as a three-storey house, made in the 14th century and repaired many ' +
        'times since. It does not only tell the time: it shows the date, the position of the ' +
        'sun and moon, and the stars. And at certain hours of the day it comes to life. A ' +
        'cockerel on top flaps its wings and crows, angels ring bells, and little figures come ' +
        'out and bow. It is one of the oldest astronomical clocks in Europe. In the square in ' +
        'front of the cathedral there are the remains of even older churches, visible through ' +
        'railings.',
    },
    facts: [
      {
        el: 'Άρχισε να χτίζεται το 1180 και τελείωσε τριακόσια χρόνια αργότερα.',
        en: 'It was begun in 1180 and finished three hundred years later.',
      },
      {
        el: 'Το ρολόι του είναι από τα πιο παλιά αστρονομικά ρολόγια της Ευρώπης.',
        en: 'Its clock is one of the oldest astronomical clocks in Europe.',
      },
      {
        el: 'Ένα κοκόρι στην κορυφή του ρολογιού λαλεί.',
        en: 'A cockerel on top of the clock crows.',
      },
    ],
    location: {
      lat: 45.76083,
      lng: 4.82722,
      anchor: 'centroid',
      confidence: 'C',
      sources: [
        { kind: 'wikidata', ref: 'Q1521', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Lyon Cathedral', deltaM: 37 },
      ],
      verifiedAt: '2026-09-18',
      note: 'Grade C: Wikipedia is 37 m off, inside the same cathedral footprint; Overpass answered 429.',
      map: { x: 0.304, y: 0.434 },
    },
    question: {
      q: { el: 'Τι κάνει το κοκόρι στην κορυφή του ρολογιού;', en: 'What does the cockerel on top of the clock do?' },
      answers: [
        { el: 'Χτυπάει τα φτερά του και λαλεί', en: 'It flaps its wings and crows' },
        { el: 'Τίποτα', en: 'Nothing' },
        { el: 'Γεννάει ένα αυγό', en: 'It lays an egg' },
        {
          el: 'Πετάει γύρω από την εκκλησία και γυρίζει πίσω στη θέση του',
          en: 'It flies around the church and comes back to its place',
        },
      ],
      explanation: {
        el: 'Σε ορισμένες ώρες το ρολόι ζωντανεύει: κοκόρι, άγγελοι με καμπάνες, φιγούρες που υποκλίνονται.',
        en: 'At certain hours the clock comes alive: cockerel, angels with bells, bowing figures.',
      },
    },
  },

  // -------------------------------------------------------------------- gadagne
  {
    id: 'lyon-gadagne',
    cityId: 'lyon',
    emoji: '🎎',
    category: 'art',
    difficulty: 1,

    name: { el: 'Τα Μουσεία Γκαντάν', en: 'The Gadagne Museums' },
    tagline: {
      el: 'Ένα παλάτι της παλιάς πόλης, με μια μαριονέτα που έγινε διάσημη',
      en: 'A palace in the old town, with a puppet that became famous',
    },
    story: {
      el:
        'Η παλιά πόλη της Λυών είναι μια από τις μεγαλύτερες αναγεννησιακές γειτονιές της ' +
        'Ευρώπης, με σπίτια ροζ και ώχρα, στενά δρομάκια και κρυφά περάσματα που λέγονται ' +
        '«τραμπούλ»: διάδρομοι μέσα από τα σπίτια, από τον έναν δρόμο στον άλλο. Στη μέση της ' +
        'στέκεται ένα μεγάλο παλάτι του 16ου αιώνα, το Γκαντάν, με αυλές και εξωτερικές ' +
        'σκάλες. Σήμερα έχει δύο μουσεία. Το ένα λέει την ιστορία της Λυών. Το άλλο είναι για ' +
        'μαριονέτες από όλο τον κόσμο, και ξεκίνησε από έναν ήρωα της πόλης, τον Γκινιόλ. Ο ' +
        'Γκινιόλ είναι μια κούκλα που φοριέται στο χέρι, ένας εργάτης του μεταξιού με ' +
        'κοτσίδα, που τη δημιούργησε γύρω στο 1808 ένας φτωχός οδοντίατρος για να ' +
        'διασκεδάζει τους πελάτες του. Ο Γκινιόλ λέει πάντα την αλήθεια, κοροϊδεύει τους ' +
        'ισχυρούς και τρώει ξύλο από τον αστυνόμο, και τα παιδιά της Γαλλίας τον αγαπούν ' +
        'ακόμα.',
      en:
        'Lyon’s old town is one of the largest Renaissance neighbourhoods in Europe, with pink ' +
        'and ochre houses, narrow lanes and hidden passages called "traboules": corridors ' +
        'running through the houses from one street to the next. In the middle stands a big ' +
        '16th-century palace, Gadagne, with courtyards and outside staircases. Today it holds ' +
        'two museums. One tells the history of Lyon. The other is about puppets from all over ' +
        'the world, and it began with a hero of the city, Guignol. Guignol is a puppet worn on ' +
        'the hand, a silk worker with a pigtail, created around 1808 by a poor tooth-puller to ' +
        'entertain his customers. Guignol always tells the truth, makes fun of the powerful and ' +
        'gets a beating from the policeman, and the children of France still love him.',
    },
    facts: [
      {
        el: 'Το παλάτι είναι του 16ου αιώνα.',
        en: 'The palace is from the 16th century.',
      },
      {
        el: 'Ο Γκινιόλ δημιουργήθηκε γύρω στο 1808 από έναν οδοντίατρο.',
        en: 'Guignol was created around 1808 by a tooth-puller.',
      },
      {
        el: 'Τα «τραμπούλ» είναι κρυφά περάσματα μέσα από τα σπίτια.',
        en: '"Traboules" are hidden passages through the houses.',
      },
    ],
    location: {
      lat: 45.76417,
      lng: 4.8275,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q8397', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Musée Gadagne', deltaM: 0 },
      ],
      verifiedAt: '2026-09-18',
      map: { x: 0.310, y: 0.376 },
    },
    question: {
      q: { el: 'Ποιος δημιούργησε τον Γκινιόλ;', en: 'Who created Guignol?' },
      answers: [
        { el: 'Ένας φτωχός οδοντίατρος', en: 'A poor tooth-puller' },
        { el: 'Ένας βασιλιάς', en: 'A king' },
        { el: 'Ένας εργάτης του μεταξιού', en: 'A silk worker' },
        {
          el: 'Ένας δάσκαλος που ήθελε να μαθαίνει στα παιδιά την ιστορία της Λυών',
          en: 'A teacher who wanted to teach children the history of Lyon',
        },
      ],
      explanation: {
        el: 'Για να διασκεδάζει τους πελάτες του, γύρω στο 1808. Η κούκλα φοριέται στο χέρι.',
        en: 'To entertain his customers, around 1808. The puppet is worn on the hand.',
      },
    },
  },

  // -------------------------------------------------------------------- fresque
  {
    id: 'lyon-fresque',
    cityId: 'lyon',
    emoji: '🖌️',
    category: 'art',
    difficulty: 1,

    name: { el: 'Η Τοιχογραφία των Λυωνέζων', en: 'The Fresco of the Lyonnais' },
    tagline: {
      el: 'Ένας τοίχος όπου τριάντα διάσημοι κάτοικοι κοιτάζουν από ψεύτικα παράθυρα',
      en: 'A wall where thirty famous locals look out of fake windows',
    },
    story: {
      el:
        'Στη γωνία ενός κτιρίου δίπλα στο ποτάμι, ένας ολόκληρος τοίχος έξι ορόφων είναι ' +
        'ζωγραφισμένος έτσι ώστε να μοιάζει με πρόσοψη σπιτιού: παράθυρα, μπαλκόνια, ' +
        'παντζούρια, ένα βιβλιοπωλείο στο ισόγειο. Τίποτα δεν είναι αληθινό. Στα ψεύτικα ' +
        'παράθυρα και μπαλκόνια στέκονται τριάντα άνθρωποι που γεννήθηκαν ή έζησαν στη Λυών ' +
        'στη διάρκεια δύο χιλιάδων χρόνων. Υπάρχει ένας Ρωμαίος αυτοκράτορας, ένας μάγειρας, ' +
        'ένας ποιητής, ο εφευρέτης της ραπτομηχανής, οι αδερφοί Λυμιέρ που έφτιαξαν τον ' +
        'κινηματογράφο, ο Σαιντ-Εξυπερύ που έγραψε τον «Μικρό Πρίγκιπα», και ο Γκινιόλ με ' +
        'τη μαριονέτα του. Η Λυών έχει πάνω από εκατό τέτοιες ζωγραφισμένες προσόψεις, ' +
        'περισσότερες από κάθε άλλη πόλη της Ευρώπης. Αυτή ζωγραφίστηκε το 1995 και είναι η ' +
        'πιο γνωστή. Παιχνίδι: βρες τον Μικρό Πρίγκιπα, που στέκεται δίπλα στον συγγραφέα του.',
      en:
        'On the corner of a building beside the river, a whole wall six storeys high is ' +
        'painted to look like the front of a house: windows, balconies, shutters, a bookshop ' +
        'on the ground floor. None of it is real. At the fake windows and balconies stand ' +
        'thirty people who were born or lived in Lyon over two thousand years. There is a ' +
        'Roman emperor, a cook, a poet, the inventor of the sewing machine, the Lumière ' +
        'brothers who made cinema, Saint-Exupéry who wrote "The Little Prince", and Guignol ' +
        'with his puppet. Lyon has more than a hundred painted walls like this, more than any ' +
        'other city in Europe. This one was painted in 1995 and is the best known. A game: find ' +
        'the Little Prince, standing next to his author.',
    },
    facts: [
      {
        el: 'Ζωγραφίστηκε το 1995 και δείχνει τριάντα διάσημους Λυωνέζους.',
        en: 'It was painted in 1995 and shows thirty famous people of Lyon.',
      },
      {
        el: 'Τα παράθυρα και τα μπαλκόνια του είναι όλα ζωγραφισμένα.',
        en: 'Its windows and balconies are all painted.',
      },
      {
        el: 'Η Λυών έχει πάνω από εκατό ζωγραφισμένους τοίχους.',
        en: 'Lyon has more than a hundred painted walls.',
      },
    ],
    location: {
      lat: 45.7681,
      lng: 4.82791,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q10147', deltaM: 0 },
        { kind: 'osm', ref: 'node/8306296317', deltaM: 8 },
      ],
      verifiedAt: '2026-09-18',
      map: { x: 0.318, y: 0.309 },
    },
    question: {
      q: { el: 'Ποιος στέκεται δίπλα στον Σαιντ-Εξυπερύ στον τοίχο;', en: 'Who stands next to Saint-Exupéry on the wall?' },
      answers: [
        { el: 'Ο Μικρός Πρίγκιπας', en: 'The Little Prince' },
        { el: 'Ένας σκύλος', en: 'A dog' },
        { el: 'Ένας αυτοκράτορας', en: 'An emperor' },
        {
          el: 'Ο πιλότος του αεροπλάνου με το οποίο πετούσε πάνω από την έρημο',
          en: 'The pilot of the plane he flew in over the desert',
        },
      ],
      explanation: {
        el: 'Ο συγγραφέας γεννήθηκε στη Λυών, και ο ήρωάς του στέκεται δίπλα του, με το κασκόλ.',
        en: 'The author was born in Lyon, and his hero stands next to him, with his scarf.',
      },
    },
  },

  // ---------------------------------------------------------- fontaine bartholdi
  {
    id: 'lyon-fontaine-bartholdi',
    cityId: 'lyon',
    emoji: '🐎',
    category: 'landmark',
    difficulty: 2,

    name: { el: 'Το Σιντριβάνι Μπαρτολντί', en: 'The Bartholdi Fountain' },
    tagline: {
      el: 'Τέσσερα άλογα από τον γλύπτη του Αγάλματος της Ελευθερίας',
      en: 'Four horses by the sculptor of the Statue of Liberty',
    },
    story: {
      el:
        'Στην Πλατεία Τερό, μπροστά στο δημαρχείο, μια γυναίκα οδηγεί ένα άρμα που το ' +
        'τραβάνε τέσσερα άλογα μέσα από το νερό. Τα άλογα είναι άγρια, με ανοιχτά στόματα και ' +
        'ρουθούνια που βγάζουν ατμό, και το νερό ξεπηδάει από παντού. Το έργο είναι του Μπαρτολντί, ' +
        'του γλύπτη που έφτιαξε το Άγαλμα της Ελευθερίας στη Νέα Υόρκη. Η γυναίκα συμβολίζει ' +
        'τη Γαλλία και τα τέσσερα άλογα τα τέσσερα μεγάλα ποτάμια της. Το σιντριβάνι όμως δεν ' +
        'φτιάχτηκε για τη Λυών: το είχε παραγγείλει η πόλη Μπορντό, που δεν το πλήρωσε ποτέ. ' +
        'Έτσι το 1892 το αγόρασε η Λυών. Είναι φτιαγμένο από φύλλα μολύβδου πάνω σε σιδερένιο ' +
        'σκελετό, ένα υλικό μαλακό και βαρύ, και ζυγίζει είκοσι ένα τόνους. Το 2016 το έλυσαν ' +
        'κομμάτι κομμάτι, το επισκεύασαν και το ξανάστησαν. Στην πλατεία γύρω του υπάρχουν ' +
        'δεκάδες μικρά πίδακες στο έδαφος, όπου τα παιδιά τρέχουν το καλοκαίρι.',
      en:
        'On Place des Terreaux, in front of the town hall, a woman drives a chariot pulled by ' +
        'four horses through the water. The horses are wild, with open mouths and nostrils ' +
        'that breathe out steam, and water spurts everywhere. The work is by Bartholdi, the ' +
        'sculptor who made the Statue of Liberty in New York. The woman stands for France and ' +
        'the four horses for its four great rivers. But the fountain was not made for Lyon: ' +
        'the city of Bordeaux had ordered it and never paid. So in 1892 Lyon bought it. It is ' +
        'made of sheets of lead over an iron frame, a soft, heavy material, and weighs ' +
        'twenty-one tonnes. In 2016 it was taken apart piece by piece, repaired and put back ' +
        'up. In the square around it there are dozens of little jets in the ground, where ' +
        'children run in summer.',
    },
    facts: [
      {
        el: 'Ο γλύπτης του έφτιαξε και το Άγαλμα της Ελευθερίας.',
        en: 'Its sculptor also made the Statue of Liberty.',
      },
      {
        el: 'Το παρήγγειλε το Μπορντό, αλλά το αγόρασε η Λυών το 1892.',
        en: 'Bordeaux ordered it, but Lyon bought it in 1892.',
      },
      {
        el: 'Τα τέσσερα άλογα συμβολίζουν τέσσερα ποτάμια.',
        en: 'The four horses stand for four rivers.',
      },
    ],
    location: {
      lat: 45.76764,
      lng: 4.83346,
      anchor: 'centroid',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q10144', deltaM: 0 },
        { kind: 'osm', ref: 'way/55071957', deltaM: 1 },
        { kind: 'wikipedia', ref: 'Fontaine Bartholdi', deltaM: 0 },
      ],
      verifiedAt: '2026-09-18',
      map: { x: 0.429, y: 0.317 },
    },
    question: {
      q: { el: 'Γιατί το σιντριβάνι κατέληξε στη Λυών;', en: 'Why did the fountain end up in Lyon?' },
      answers: [
        { el: 'Το Μπορντό δεν το πλήρωσε ποτέ', en: 'Bordeaux never paid for it' },
        { el: 'Δώρο', en: 'A gift' },
        { el: 'Το κέρδισε σε διαγωνισμό', en: 'It won it in a contest' },
        {
          el: 'Γιατί ο γλύπτης γεννήθηκε στη Λυών και το ήθελε στην πόλη του',
          en: 'Because the sculptor was born in Lyon and wanted it in his home city',
        },
      ],
      explanation: {
        el: 'Το είχε παραγγείλει το Μπορντό. Η Λυών το αγόρασε το 1892.',
        en: 'Bordeaux had ordered it. Lyon bought it in 1892.',
      },
    },
  },

  // ----------------------------------------------------------------- beaux arts
  {
    id: 'lyon-beaux-arts',
    cityId: 'lyon',
    emoji: '🖼️',
    category: 'art',
    difficulty: 2,

    name: { el: 'Μουσείο Καλών Τεχνών', en: 'The Museum of Fine Arts' },
    tagline: {
      el: 'Ένα παλιό μοναστήρι με τέχνη από την Αίγυπτο ως τον Πικάσο',
      en: 'An old abbey with art from Egypt to Picasso',
    },
    story: {
      el:
        'Δίπλα στο σιντριβάνι, στην ίδια πλατεία, ένα μεγάλο κτίριο με ήσυχο κήπο στη μέση ' +
        'ήταν κάποτε μοναστήρι γυναικών από πλούσιες οικογένειες. Μετά τη Γαλλική Επανάσταση ' +
        'έγινε μουσείο, το 1801, και σήμερα είναι το δεύτερο μεγαλύτερο μουσείο τέχνης της ' +
        'Γαλλίας μετά το Λούβρο. Οι αίθουσές του κάνουν έναν κύκλο γύρω από τον κήπο, και ' +
        'κάθε αίθουσα είναι μια άλλη εποχή. Υπάρχουν αιγυπτιακές σαρκοφάγοι και πόρτες ναού, ' +
        'ελληνικά αγγεία, μεσαιωνικά αγάλματα, πίνακες του Μονέ, του Γκογκέν και του Πικάσο, ' +
        'και μια από τις μεγαλύτερες συλλογές νομισμάτων της Ευρώπης. Ο κήπος στη μέση, με ' +
        'αγάλματα του Ροντέν ανάμεσα στα δέντρα, είναι ανοιχτός σε όλους, ακόμα και χωρίς ' +
        'εισιτήριο, και οι κάτοικοι έρχονται να διαβάσουν ή να φάνε το μεσημεριανό τους. Η ' +
        'μεγάλη σκάλα του μουσείου είναι ζωγραφισμένη από πάνω ως κάτω.',
      en:
        'Beside the fountain, on the same square, a large building with a quiet garden in the ' +
        'middle was once an abbey for nuns from rich families. After the French Revolution it ' +
        'became a museum, in 1801, and today it is the second largest art museum in France ' +
        'after the Louvre. Its rooms run in a circle around the garden, and every room is a ' +
        'different age. There are Egyptian sarcophagi and temple doors, Greek vases, medieval ' +
        'statues, paintings by Monet, Gauguin and Picasso, and one of the largest coin ' +
        'collections in Europe. The garden in the middle, with statues by Rodin among the ' +
        'trees, is open to everyone, even without a ticket, and locals come to read or eat ' +
        'their lunch. The museum’s grand staircase is painted from top to bottom.',
    },
    facts: [
      {
        el: 'Έγινε μουσείο το 1801, σε ένα παλιό μοναστήρι.',
        en: 'It became a museum in 1801, in an old abbey.',
      },
      {
        el: 'Είναι το δεύτερο μεγαλύτερο μουσείο τέχνης της Γαλλίας.',
        en: 'It is the second largest art museum in France.',
      },
      {
        el: 'Ο κήπος του είναι ανοιχτός σε όλους χωρίς εισιτήριο.',
        en: 'Its garden is open to everyone without a ticket.',
      },
    ],
    location: {
      lat: 45.76694,
      lng: 4.83361,
      anchor: 'centroid',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q511', deltaM: 0 },
        { kind: 'osm', ref: 'way/493540665', deltaM: 26 },
        { kind: 'wikipedia', ref: 'Museum of Fine Arts of Lyon', deltaM: 5 },
      ],
      verifiedAt: '2026-09-18',
      map: { x: 0.432, y: 0.329 },
    },
    question: {
      q: { el: 'Τι ήταν αυτό το κτίριο πριν γίνει μουσείο;', en: 'What was this building before it became a museum?' },
      answers: [
        { el: 'Ένα μοναστήρι γυναικών', en: 'An abbey for nuns' },
        { el: 'Σχολείο', en: 'A school' },
        { el: 'Ένα παλάτι βασιλιά', en: 'A king’s palace' },
        {
          el: 'Ένα εργοστάσιο μεταξιού με εκατοντάδες αργαλειούς στους πάνω ορόφους',
          en: 'A silk factory with hundreds of looms on the upper floors',
        },
      ],
      explanation: {
        el: 'Μετά τη Γαλλική Επανάσταση οι μοναχές έφυγαν και το κτίριο έγινε μουσείο το 1801.',
        en: 'After the French Revolution the nuns left and the building became a museum in 1801.',
      },
    },
  },

  // ---------------------------------------------------------------------- opera
  {
    id: 'lyon-opera',
    cityId: 'lyon',
    emoji: '🎼',
    category: 'art',
    difficulty: 2,

    name: { el: 'Η Όπερα της Λυών', en: 'The Lyon Opera' },
    tagline: {
      el: 'Ένα παλιό θέατρο με μια μαύρη γυάλινη καμάρα στη στέγη του',
      en: 'An old theatre with a black glass barrel on its roof',
    },
    story: {
      el:
        'Πίσω από το δημαρχείο στέκεται ένα κτίριο που μοιάζει με δύο κτίρια το ένα πάνω στο ' +
        'άλλο. Κάτω είναι ένα παλιό θέατρο του 1831, με πέτρινες καμάρες και οκτώ αγάλματα ' +
        'μουσών στην κορυφή του τοίχου. Πάνω του κάθεται ένας τεράστιος μισός κύλινδρος από ' +
        'μαύρο γυαλί και μέταλλο, σαν βαρέλι ξαπλωμένο. Τη δεκαετία του 1980 η όπερα ήταν ' +
        'πολύ μικρή και παλιά, και η πόλη κάλεσε τον αρχιτέκτονα Ζαν Νουβέλ. Εκείνος κράτησε ' +
        'μόνο τους εξωτερικούς τοίχους, άδειασε το εσωτερικό και έχτισε μέσα και από πάνω ένα ' +
        'καινούργιο θέατρο, τρεις φορές μεγαλύτερο, με αίθουσες για μπαλέτο κάτω από τη ' +
        'γυάλινη στέγη και μια μεγάλη μαύρη αίθουσα για όπερα στο κέντρο. Μέσα, οι κόκκινες ' +
        'σκάλες μηχανής ανεβαίνουν μέσα στο σκοτάδι σαν σε διαστημόπλοιο. Το βράδυ η στέγη ' +
        'φωτίζεται κόκκινη. Στα σκαλιά έξω, κάθε απόγευμα, νέοι κάνουν χορό του δρόμου.',
      en:
        'Behind the town hall stands a building that looks like two buildings one on top of the ' +
        'other. Below is an old theatre from 1831, with stone arches and eight statues of the ' +
        'Muses along the top of the wall. On top sits an enormous half-cylinder of black glass ' +
        'and metal, like a barrel lying on its side. In the 1980s the opera house was too small ' +
        'and old, and the city called in the architect Jean Nouvel. He kept only the outer ' +
        'walls, emptied the inside and built a new theatre inside and on top, three times ' +
        'bigger, with ballet studios under the glass roof and a big black opera hall in the ' +
        'middle. Inside, red escalators climb through the dark as if in a spaceship. At night ' +
        'the roof glows red. On the steps outside, every afternoon, young people do street ' +
        'dance.',
    },
    facts: [
      {
        el: 'Οι παλιοί τοίχοι είναι του 1831, η γυάλινη στέγη της δεκαετίας του 1990.',
        en: 'The old walls are from 1831, the glass roof from the 1990s.',
      },
      {
        el: 'Το νέο θέατρο μέσα είναι τρεις φορές μεγαλύτερο από το παλιό.',
        en: 'The new theatre inside is three times bigger than the old one.',
      },
      {
        el: 'Στα σκαλιά του χορεύουν κάθε απόγευμα νέοι.',
        en: 'Young people dance on its steps every afternoon.',
      },
    ],
    location: {
      lat: 45.76783,
      lng: 4.83661,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q9496', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Opéra de Lyon', deltaM: 0 },
      ],
      verifiedAt: '2026-09-18',
      map: { x: 0.492, y: 0.313 },
    },
    question: {
      q: { el: 'Τι κράτησε ο αρχιτέκτονας από το παλιό θέατρο;', en: 'What did the architect keep from the old theatre?' },
      answers: [
        { el: 'Μόνο τους εξωτερικούς τοίχους', en: 'Only the outer walls' },
        { el: 'Όλα', en: 'Everything' },
        { el: 'Μόνο τη σκηνή', en: 'Only the stage' },
        {
          el: 'Τις καρέκλες, που τις έβαλε στο νέο θέατρο για να θυμούνται οι θεατές το παλιό',
          en: 'The seats, which he put in the new theatre so audiences would remember the old one',
        },
      ],
      explanation: {
        el: 'Άδειασε το εσωτερικό και έχτισε ένα νέο θέατρο μέσα και από πάνω.',
        en: 'He emptied the inside and built a new theatre inside and on top.',
      },
    },
  },

  // ------------------------------------------------------------------ bellecour
  {
    id: 'lyon-bellecour',
    cityId: 'lyon',
    emoji: '🤴',
    category: 'landmark',
    difficulty: 1,

    name: { el: 'Πλατεία Μπελκούρ', en: 'Place Bellecour' },
    tagline: {
      el: 'Μια τεράστια κόκκινη πλατεία, με τον Μικρό Πρίγκιπα σε μια γωνία',
      en: 'A huge red square, with the Little Prince in one corner',
    },
    story: {
      el:
        'Ανάμεσα στα δύο ποτάμια της Λυών, τον Ροδανό και τον Σον, απλώνεται μια από τις ' +
        'μεγαλύτερες πλατείες της Ευρώπης. Δεν έχει πλάκες ούτε γρασίδι: είναι ένα ' +
        'απέραντο ορθογώνιο από κόκκινο χώμα, που την άνοιξη σηκώνει σκόνη και τον χειμώνα ' +
        'φιλοξενεί μια τεράστια ρόδα. Στη μέση στέκεται το άγαλμα του βασιλιά Λουδοβίκου ' +
        'του Δέκατου Τέταρτου πάνω σε άλογο, χωρίς αναβολείς, όπως οι Ρωμαίοι αυτοκράτορες. ' +
        'Είναι το σημείο από όπου μετριούνται όλες οι αποστάσεις προς τη Λυών, το χιλιόμετρο ' +
        'μηδέν της πόλης. Σε μια γωνία της πλατείας υπάρχει ένα πολύ διαφορετικό άγαλμα: ένας ' +
        'άντρας με στολή πιλότου κάθεται σε ένα πέτρινο στήριγμα, και πίσω του στέκεται ένα ' +
        'μικρό αγόρι με κασκόλ. Είναι ο Αντουάν ντε Σαιντ-Εξυπερύ, που γεννήθηκε λίγα βήματα ' +
        'από εδώ, με τον ήρωά του, τον Μικρό Πρίγκιπα. Από την πλατεία βλέπεις ψηλά στον λόφο ' +
        'τη βασιλική και τον μεταλλικό πύργο.',
      en:
        'Between Lyon’s two rivers, the Rhône and the Saône, lies one of the largest squares ' +
        'in Europe. It has no paving and no grass: it is a vast rectangle of red earth, which ' +
        'raises dust in spring and hosts a giant Ferris wheel in winter. In the middle stands ' +
        'the statue of King Louis the Fourteenth on horseback, without stirrups, like the Roman ' +
        'emperors. It is the point from which all distances to Lyon are measured, the city’s ' +
        'kilometre zero. In one corner of the square there is a very different statue: a man ' +
        'in a pilot’s uniform sits on a stone column, and behind him stands a small boy with a ' +
        'scarf. It is Antoine de Saint-Exupéry, who was born a few steps from here, with his ' +
        'hero, the Little Prince. From the square you can see the basilica and the metal tower ' +
        'high up on the hill.',
    },
    facts: [
      {
        el: 'Είναι από τις μεγαλύτερες πλατείες της Ευρώπης, από κόκκινο χώμα.',
        en: 'It is one of the largest squares in Europe, made of red earth.',
      },
      {
        el: 'Από εδώ μετριούνται όλες οι αποστάσεις προς τη Λυών.',
        en: 'All distances to Lyon are measured from here.',
      },
      {
        el: 'Ο Σαιντ-Εξυπερύ, ο συγγραφέας του «Μικρού Πρίγκιπα», γεννήθηκε δίπλα.',
        en: 'Saint-Exupéry, author of "The Little Prince", was born next door.',
      },
    ],
    location: {
      lat: 45.7575,
      lng: 4.83222,
      anchor: 'area',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q614', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Place Bellecour', deltaM: 0 },
      ],
      verifiedAt: '2026-09-18',
      map: { x: 0.404, y: 0.491 },
    },
    question: {
      q: { el: 'Ποιος στέκεται πίσω από τον πιλότο στο άγαλμα;', en: 'Who stands behind the pilot in the statue?' },
      answers: [
        { el: 'Ο Μικρός Πρίγκιπας', en: 'The Little Prince' },
        { el: 'Ένας βασιλιάς', en: 'A king' },
        { el: 'Μια αλεπού', en: 'A small fox' },
        {
          el: 'Η μητέρα του συγγραφέα, που τον έμαθε να διαβάζει σε αυτή την πλατεία',
          en: 'The author’s mother, who taught him to read on this very square',
        },
      ],
      explanation: {
        el: 'Ο Σαιντ-Εξυπερύ γεννήθηκε λίγα βήματα από εδώ. Ο ήρωάς του φοράει το κασκόλ του.',
        en: 'Saint-Exupéry was born a few steps from here. His hero wears his scarf.',
      },
    },
  },

  // ----------------------------------------------------------------- hotel dieu
  {
    id: 'lyon-hotel-dieu',
    cityId: 'lyon',
    emoji: '🏥',
    category: 'history',
    difficulty: 3,

    name: { el: 'Το Γκραν Οτέλ-Ντιέ', en: 'The Grand Hôtel-Dieu' },
    tagline: {
      el: 'Ένα νοσοκομείο οκτακοσίων χρόνων που έγινε πλατεία με μαγαζιά',
      en: 'An eight-hundred-year-old hospital that became a square with shops',
    },
    story: {
      el:
        'Κατά μήκος του Ροδανού απλώνεται ένα κτίριο τριακοσίων εβδομήντα μέτρων, με έναν ' +
        'μεγάλο τρούλο στη μέση. Για οκτακόσια χρόνια ήταν νοσοκομείο. Ξεκίνησε τον 12ο αιώνα ' +
        'ως ένα σπίτι δίπλα στη γέφυρα, όπου μοναχοί φρόντιζαν φτωχούς και ταξιδιώτες, και ' +
        'μεγάλωνε αιώνα με αιώνα. Τον 16ο αιώνα δούλευε εδώ ως γιατρός ο Ραμπελαί, που έγινε ' +
        'διάσημος συγγραφέας με ιστορίες για γίγαντες. Τα παιδιά της Λυών γεννιόνταν εδώ μέχρι ' +
        'το 2010, όταν το νοσοκομείο μετακόμισε σε καινούργια κτίρια. Τι κάνεις με ένα τόσο ' +
        'μεγάλο και τόσο παλιό κτίριο; Η πόλη το άνοιξε: σήμερα οι αυλές του είναι πλατείες ' +
        'με μαγαζιά, εστιατόρια, ένα ξενοδοχείο και ένα μουσείο για το φαγητό, γιατί η Λυών ' +
        'θεωρείται η πρωτεύουσα της γαλλικής κουζίνας. Ο μεγάλος τρούλος, που κάποτε ήταν ' +
        'εκκλησία του νοσοκομείου, στέκεται ακόμα πάνω από όλα.',
      en:
        'Along the Rhône stretches a building three hundred and seventy metres long, with a ' +
        'great dome in the middle. For eight hundred years it was a hospital. It began in the ' +
        '12th century as a house by the bridge where monks cared for the poor and for ' +
        'travellers, and it grew century by century. In the 16th century Rabelais worked here ' +
        'as a doctor, before becoming a famous writer with stories about giants. The children ' +
        'of Lyon were born here until 2010, when the hospital moved to new buildings. What do ' +
        'you do with a building so big and so old? The city opened it up: today its courtyards ' +
        'are squares with shops, restaurants, a hotel and a museum about food, because Lyon is ' +
        'considered the capital of French cooking. The great dome, once the hospital’s chapel, ' +
        'still stands over everything.',
    },
    facts: [
      {
        el: 'Ήταν νοσοκομείο για οκτακόσια χρόνια, μέχρι το 2010.',
        en: 'It was a hospital for eight hundred years, until 2010.',
      },
      {
        el: 'Ο συγγραφέας Ραμπελαί δούλεψε εδώ ως γιατρός.',
        en: 'The writer Rabelais worked here as a doctor.',
      },
      {
        el: 'Σήμερα έχει μαγαζιά και ένα μουσείο για το φαγητό.',
        en: 'Today it has shops and a museum about food.',
      },
    ],
    location: {
      lat: 45.75833,
      lng: 4.83639,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q4013', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Hôtel-Dieu de Lyon', deltaM: 0 },
      ],
      verifiedAt: '2026-09-18',
      map: { x: 0.488, y: 0.477 },
    },
    question: {
      q: { el: 'Τι ήταν αυτό το κτίριο για οκτακόσια χρόνια;', en: 'What was this building for eight hundred years?' },
      answers: [
        { el: 'Νοσοκομείο για φτωχούς και ταξιδιώτες', en: 'A hospital for the poor and travellers' },
        { el: 'Παλάτι', en: 'A palace' },
        { el: 'Ένα σχολείο', en: 'A big school' },
        {
          el: 'Ένα εργοστάσιο όπου έφτιαχναν τις γέφυρες του ποταμού',
          en: 'A factory where the bridges over the river were built',
        },
      ],
      explanation: {
        el: 'Ξεκίνησε από μοναχούς τον 12ο αιώνα. Τα παιδιά της Λυών γεννιόνταν εδώ ως το 2010.',
        en: 'It began with monks in the 12th century. Lyon’s children were born here until 2010.',
      },
    },
  },

  // ----------------------------------------------------------------- imprimerie
  {
    id: 'lyon-imprimerie',
    cityId: 'lyon',
    emoji: '📖',
    category: 'science',
    difficulty: 2,

    name: { el: 'Μουσείο Τυπογραφίας', en: 'The Printing Museum' },
    tagline: {
      el: 'Πώς τα βιβλία σταμάτησαν να γράφονται με το χέρι',
      en: 'How books stopped being written by hand',
    },
    story: {
      el:
        'Πριν από το 1450 κάθε βιβλίο γραφόταν με το χέρι, γράμμα γράμμα, και ένα βιβλίο ' +
        'μπορούσε να κοστίζει όσο ένα σπίτι. Τότε ένας Γερμανός, ο Γουτεμβέργιος, βρήκε τον ' +
        'τρόπο να φτιάχνει μεταλλικά γράμματα, να τα βάζει σε σειρές, να τα μελανώνει και να ' +
        'τα πιέζει πάνω σε χαρτί με μια πρέσα. Η Λυών έγινε πολύ γρήγορα μια από τις τρεις ' +
        'πιο μεγάλες πόλεις τυπογραφίας της Ευρώπης, γιατί βρισκόταν σε σταυροδρόμι εμπόρων ' +
        'και είχε μεγάλα παζάρια. Εδώ τυπώθηκαν χιλιάδες βιβλία, ανάμεσά τους τα πρώτα βιβλία ' +
        'του Ραμπελαί. Το μουσείο στεγάζεται σε ένα παλιό αρχοντικό που ήταν κάποτε ' +
        'δημαρχείο, και δείχνει πώς γινόταν όλο αυτό: μεταλλικά γράμματα ανάποδα, ξύλινες ' +
        'πρέσες, τα πρώτα τυπωμένα βιβλία με ζωγραφισμένα αρχικά γράμματα, χαρακτικά, και ' +
        'αργότερα μηχανές που τύπωναν εφημερίδες. Σε εργαστήρια, τα παιδιά μπορούν να ' +
        'τυπώσουν μια σελίδα με τον παλιό τρόπο.',
      en:
        'Before 1450 every book was written by hand, letter by letter, and a book could cost ' +
        'as much as a house. Then a German, Gutenberg, found a way to make metal letters, set ' +
        'them in rows, ink them and press them onto paper with a press. Lyon very quickly ' +
        'became one of the three biggest printing cities in Europe, because it stood at a ' +
        'crossroads of merchants and held great fairs. Thousands of books were printed here, ' +
        'among them the first books by Rabelais. The museum is housed in an old mansion that ' +
        'was once the town hall, and shows how it was all done: metal letters back to front, ' +
        'wooden presses, the first printed books with hand-painted initials, engravings, and ' +
        'later the machines that printed newspapers. In workshops, children can print a page ' +
        'the old way.',
    },
    facts: [
      {
        el: 'Πριν από το 1450 κάθε βιβλίο γραφόταν με το χέρι.',
        en: 'Before 1450 every book was written by hand.',
      },
      {
        el: 'Η Λυών έγινε από τις τρεις μεγαλύτερες πόλεις τυπογραφίας της Ευρώπης.',
        en: 'Lyon became one of the three biggest printing cities in Europe.',
      },
      {
        el: 'Τα μεταλλικά γράμματα της τυπογραφίας είναι ανάποδα.',
        en: 'The metal letters used for printing are back to front.',
      },
    ],
    location: {
      lat: 45.76444,
      lng: 4.83472,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q8323', deltaM: 0 },
        { kind: 'osm', ref: 'way/62271798', deltaM: 18 },
      ],
      verifiedAt: '2026-09-18',
      map: { x: 0.454, y: 0.372 },
    },
    question: {
      q: { el: 'Γιατί τα μεταλλικά γράμματα είναι ανάποδα;', en: 'Why are the metal letters back to front?' },
      answers: [
        { el: 'Για να βγουν σωστά στο χαρτί', en: 'So they come out right on the paper' },
        { el: 'Λάθος', en: 'A mistake' },
        { el: 'Για να μην τα διαβάζουν', en: 'So nobody could read them' },
        {
          el: 'Γιατί ο Γουτεμβέργιος έγραφε από τα δεξιά προς τα αριστερά',
          en: 'Because Gutenberg wrote from right to left',
        },
      ],
      explanation: {
        el: 'Όταν πιέζεις ένα ανάποδο γράμμα σε χαρτί, το αποτύπωμα βγαίνει σωστό, σαν σε καθρέφτη.',
        en: 'When you press a mirrored letter onto paper, the print comes out the right way, like a mirror.',
      },
    },
  },

  // ------------------------------------------------------------------ tete d'or
  {
    id: 'lyon-tete-d-or',
    cityId: 'lyon',
    emoji: '🦒',
    category: 'nature',
    difficulty: 1,

    name: { el: 'Πάρκο του Χρυσού Κεφαλιού', en: 'The Golden Head Park' },
    tagline: {
      el: 'Λίμνη, ζωολογικός κήπος και ένας θησαυρός που δεν βρέθηκε ποτέ',
      en: 'A lake, a zoo and a buried treasure never found',
    },
    story: {
      el:
        'Το μεγαλύτερο πάρκο της Λυών λέγεται «Χρυσό Κεφάλι», και το όνομα έρχεται από έναν ' +
        'θρύλο: κάπου εδώ, λένε, είναι θαμμένο ένα χρυσό κεφάλι του Χριστού, που δεν το ' +
        'βρήκε ποτέ κανείς. Το πάρκο άνοιξε το 1857, την ίδια χρονιά με το Σέντραλ Παρκ της ' +
        'Νέας Υόρκης, και είναι σχεδόν ίδιο σε μέγεθος με το κέντρο της πόλης. Έχει μια μεγάλη ' +
        'λίμνη με βάρκες και ένα νησί, χιλιάδες τριανταφυλλιές σε έναν κήπο μόνο για ' +
        'τριαντάφυλλα, και τεράστια θερμοκήπια από γυαλί με τροπικά φυτά. Το πιο αγαπημένο ' +
        'σημείο για τα παιδιά είναι ο ζωολογικός κήπος, που είναι δωρεάν: υπάρχει μια αφρικανική ' +
        'πεδιάδα όπου καμηλοπαρδάλεις, ζέβρες και αντιλόπες περπατάνε μαζί, όπως στη φύση, ' +
        'και ξεχωριστά λιοντάρια, κροκόδειλοι και φλαμίνγκο. Το πάρκο έχει και ένα μικρό ' +
        'τρένο, γαϊδουράκια, ποδήλατα με τέσσερις ρόδες και καρουζέλ.',
      en:
        'Lyon’s biggest park is called the "Golden Head", and the name comes from a legend: ' +
        'somewhere here, they say, a golden head of Christ is buried, which nobody has ever ' +
        'found. The park opened in 1857, the same year as Central Park in New York, and it is ' +
        'almost the size of the city centre. It has a big lake with boats and an island, ' +
        'thousands of rose bushes in a garden just for roses, and enormous glasshouses with ' +
        'tropical plants. Children’s favourite spot is the zoo, which is free: there is an ' +
        'African plain where giraffes, zebras and antelopes walk together, as in the wild, and ' +
        'separately lions, crocodiles and flamingos. The park also has a little train, ' +
        'donkeys, four-wheeled bikes and a carousel.',
    },
    facts: [
      {
        el: 'Άνοιξε το 1857, την ίδια χρονιά με το Σέντραλ Παρκ.',
        en: 'It opened in 1857, the same year as Central Park.',
      },
      {
        el: 'Ο ζωολογικός κήπος του είναι δωρεάν.',
        en: 'Its zoo is free.',
      },
      {
        el: 'Το όνομά του έρχεται από έναν θρύλο για ένα θαμμένο χρυσό κεφάλι.',
        en: 'Its name comes from a legend about a buried golden head.',
      },
    ],
    location: {
      lat: 45.78056,
      lng: 4.85417,
      anchor: 'area',
      confidence: 'C',
      sources: [
        { kind: 'wikidata', ref: 'Q3991', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Parc de la Tête d\'or', deltaM: 64 },
      ],
      verifiedAt: '2026-09-18',
      note: 'Grade C: Wikipedia is 64 m off, well inside a park of over a hundred hectares; Overpass answered 429.',
      map: { x: 0.843, y: 0.094 },
    },
    question: {
      q: { el: 'Από πού πήρε το όνομά του το πάρκο;', en: 'Where does the park get its name from?' },
      answers: [
        { el: 'Από έναν θρύλο για θαμμένο θησαυρό', en: 'From a legend of buried treasure' },
        { el: 'Από ένα άγαλμα', en: 'From a statue' },
        { el: 'Από τα κίτρινα φύλλα', en: 'From its yellow leaves' },
        {
          el: 'Από ένα λιοντάρι με χρυσή χαίτη που ζούσε στον ζωολογικό κήπο',
          en: 'From a lion with a golden mane that once lived in the zoo',
        },
      ],
      explanation: {
        el: 'Ένα χρυσό κεφάλι, λένε, είναι θαμμένο εδώ. Κανείς δεν το βρήκε ποτέ.',
        en: 'A golden head, they say, is buried here. Nobody has ever found it.',
      },
    },
  },

  // --------------------------------------------------------------------- halles
  {
    id: 'lyon-halles',
    cityId: 'lyon',
    emoji: '🧀',
    category: 'food',
    difficulty: 1,

    name: { el: 'Οι Αγορές Πολ Μποκίζ', en: 'The Paul Bocuse Food Hall' },
    tagline: {
      el: 'Η αγορά της πόλης που θεωρείται πρωτεύουσα του φαγητού',
      en: 'The market of the city called the capital of food',
    },
    story: {
      el:
        'Η Λυών θεωρείται εδώ και πάνω από εκατό χρόνια η πρωτεύουσα της γαλλικής κουζίνας. ' +
        'Αυτό ξεκίνησε από γυναίκες: τις «μητέρες της Λυών», μαγείρισσες που άνοιξαν μικρά ' +
        'εστιατόρια και μαγείρευαν απλά αλλά τέλεια. Ο πιο διάσημος μάγειρας της πόλης, ο ' +
        'Πολ Μποκίζ, έμαθε από μία από αυτές, και αυτή η σκεπαστή αγορά έχει το όνομά του. ' +
        'Μέσα υπάρχουν πάνω από πενήντα πάγκοι, ο καθένας για ένα πράγμα: τυριά που ' +
        'μυρίζουν από μακριά, λουκάνικα, ψάρια, ψωμί, γλυκά, σοκολάτες, φρούτα. Οι μάγειρες ' +
        'της πόλης ψωνίζουν εδώ το πρωί. Δύο πράγματα να δοκιμάσεις: ένα ροζ πραλίνα, δηλαδή ' +
        'αμύγδαλο με κόκκινη ζάχαρη, που μπαίνει και μέσα σε τάρτες, και ένα τυρί με βότανα ' +
        'που λέγεται «ο εγκέφαλος του υφαντή», γιατί οι φτωχοί εργάτες του μεταξιού το έτρωγαν ' +
        'αντί για κρέας. Η αγορά άνοιξε το 1971 σε ένα απλό κτίριο, αλλά αυτό που μετράει ' +
        'είναι μέσα.',
      en:
        'For more than a hundred years Lyon has been called the capital of French cooking. It ' +
        'started with women: the "mothers of Lyon", cooks who opened small restaurants and ' +
        'cooked simply but perfectly. The city’s most famous chef, Paul Bocuse, learned from ' +
        'one of them, and this covered market bears his name. Inside there are more than fifty ' +
        'stalls, each for one thing: cheeses you can smell from far away, sausages, fish, ' +
        'bread, cakes, chocolates, fruit. The city’s chefs shop here in the morning. Two things ' +
        'to try: a pink praline, an almond in red sugar, which also goes into tarts, and a ' +
        'cheese with herbs called "the weaver’s brain", because the poor silk workers ate it ' +
        'instead of meat. The market opened in 1971 in a plain building, but what counts is ' +
        'inside.',
    },
    facts: [
      {
        el: 'Η Λυών θεωρείται η πρωτεύουσα της γαλλικής κουζίνας.',
        en: 'Lyon is called the capital of French cooking.',
      },
      {
        el: 'Η αγορά έχει το όνομα του μάγειρα Πολ Μποκίζ.',
        en: 'The market is named after the chef Paul Bocuse.',
      },
      {
        el: 'Οι ροζ πραλίνες είναι αμύγδαλα με κόκκινη ζάχαρη.',
        en: 'Pink pralines are almonds in red sugar.',
      },
    ],
    location: {
      lat: 45.7632,
      lng: 4.85049,
      anchor: 'centroid',
      confidence: 'C',
      sources: [{ kind: 'wikidata', ref: 'Q3126137', deltaM: 0 }],
      verifiedAt: '2026-09-18',
      note: 'Grade C: Wikidata alone; Wikipedia gives no coordinate and Overpass answered 504.',
      map: { x: 0.770, y: 0.393 },
    },
    question: {
      q: { el: 'Ποιες ήταν οι «μητέρες της Λυών»;', en: 'Who were the "mothers of Lyon"?' },
      answers: [
        { el: 'Μαγείρισσες με μικρά εστιατόρια', en: 'Cooks with small restaurants' },
        { el: 'Βασίλισσες', en: 'Queens' },
        { el: 'Οι πωλήτριες της αγοράς', en: 'The market’s stallholders' },
        {
          el: 'Γυναίκες που έφτιαχναν το μετάξι για τα φορέματα των πλουσίων',
          en: 'Women who made the silk for rich people’s dresses',
        },
      ],
      explanation: {
        el: 'Μαγείρευαν απλά αλλά τέλεια, και από αυτές έμαθε ο Πολ Μποκίζ.',
        en: 'They cooked simply but perfectly, and Paul Bocuse learned from one of them.',
      },
    },
  },

  // ---------------------------------------------------------------- confluences
  {
    id: 'lyon-confluences',
    cityId: 'lyon',
    emoji: '🦣',
    category: 'museum',
    difficulty: 2,

    name: { el: 'Μουσείο των Συμβολών', en: 'The Confluences Museum' },
    tagline: {
      el: 'Ένα γυάλινο σύννεφο εκεί που ενώνονται τα δύο ποτάμια',
      en: 'A glass cloud where the two rivers meet',
    },
    story: {
      el:
        'Στη νότια άκρη της πόλης, εκεί που ο Ροδανός και ο Σον ενώνονται σε ένα ποτάμι, ' +
        'στέκεται ένα κτίριο που δεν μοιάζει με τίποτα άλλο. Είναι από γυαλί και μέταλλο, με ' +
        'μυτερές γωνίες και καμπύλες, σαν ένα σύννεφο που κάθισε σε ένα κρύσταλλο. Άνοιξε το ' +
        '2014 και είναι μουσείο για τα πάντα: πώς ξεκίνησε το σύμπαν, πώς εξελίχθηκε η ζωή, ' +
        'πώς ζουν οι άνθρωποι σε διάφορες γωνιές του κόσμου, τι σκέφτονται για τον θάνατο. ' +
        'Μέσα θα δεις έναν σκελετό δεινοσαύρου με μακρύ λαιμό, ένα μαμούθ που βρέθηκε ' +
        'σκάβοντας στη Λυών, μετεωρίτες, μια μούμια, μάσκες από την Αφρική, ένα ρομπότ, ' +
        'στολές αστροναυτών. Το μουσείο θέλει να σε κάνει να ρωτάς «γιατί;» και όχι μόνο να ' +
        'κοιτάς. Από τις μεγάλες γυάλινες πλευρές του βλέπεις τα δύο ποτάμια να γίνονται ένα.',
      en:
        'At the southern tip of the city, where the Rhône and the Saône join into one river, ' +
        'stands a building that looks like nothing else. It is made of glass and metal, with ' +
        'sharp angles and curves, like a cloud that has settled on a crystal. It opened in 2014 ' +
        'and is a museum about everything: how the universe began, how life evolved, how ' +
        'people live in different corners of the world, what they think about death. Inside ' +
        'you will see a long-necked dinosaur skeleton, a mammoth found while digging in Lyon, ' +
        'meteorites, a mummy, masks from Africa, a robot, astronauts’ suits. The museum wants ' +
        'to make you ask "why?" and not just look. From its big glass sides you can see the two ' +
        'rivers become one.',
    },
    facts: [
      {
        el: 'Άνοιξε το 2014 εκεί που ενώνονται τα δύο ποτάμια.',
        en: 'It opened in 2014 where the two rivers meet.',
      },
      {
        el: 'Έχει σκελετό δεινοσαύρου και ένα μαμούθ που βρέθηκε στη Λυών.',
        en: 'It has a dinosaur skeleton and a mammoth found in Lyon.',
      },
      {
        el: 'Το κτίριο μοιάζει με σύννεφο πάνω σε κρύσταλλο.',
        en: 'The building looks like a cloud on a crystal.',
      },
    ],
    location: {
      lat: 45.73236,
      lng: 4.81792,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q8352', deltaM: 0 },
        { kind: 'osm', ref: 'way/440270631', deltaM: 30 },
        { kind: 'wikipedia', ref: 'Musée des Confluences', deltaM: 68 },
      ],
      verifiedAt: '2026-09-18',
      map: { x: 0.118, y: 0.925 },
    },
    question: {
      q: { el: 'Τι σημαίνει «συμβολή» ποταμών;', en: 'What is a "confluence" of rivers?' },
      answers: [
        { el: 'Το σημείο όπου δύο ποτάμια ενώνονται', en: 'The point where two rivers join' },
        { el: 'Μια γέφυρα', en: 'A bridge' },
        { el: 'Ένας καταρράκτης', en: 'A waterfall' },
        {
          el: 'Το μέρος όπου ένα ποτάμι χύνεται στη θάλασσα και γίνεται αλμυρό',
          en: 'The place where a river flows into the sea and turns salty',
        },
      ],
      explanation: {
        el: 'Ο Ροδανός και ο Σον γίνονται ένα ποτάμι ακριβώς μπροστά στο μουσείο.',
        en: 'The Rhône and the Saône become one river right in front of the museum.',
      },
    },

    museum: {
      doorNote: {
        el: 'Ξεκίνα από τις «Απαρχές». Το μαμούθ σε περιμένει εκεί.',
        en: 'Start with "Origins". The mammoth is waiting for you there.',
      },
      rooms: [
        {
          id: 'lyon-confluences-origins',
          emoji: '🦕',
          name: { el: 'Απαρχές: η ιστορία του κόσμου', en: 'Origins: the story of the world' },
          intro: {
            el:
              'Αυτή η αίθουσα ξεκινάει από τη στιγμή που γεννήθηκε το σύμπαν και φτάνει ως ' +
              'τους πρώτους ανθρώπους. Είναι σκοτεινή, με τα εκθέματα φωτισμένα σαν αστέρια. ' +
              'Θα δεις πέτρες από το διάστημα, ζώα που δεν υπάρχουν πια, και εργαλεία που ' +
              'έφτιαξαν οι πρόγονοί μας πριν από εκατοντάδες χιλιάδες χρόνια.',
            en:
              'This room starts from the moment the universe was born and reaches the first ' +
              'humans. It is dark, with the exhibits lit up like stars. You will see stones ' +
              'from space, animals that no longer exist, and tools our ancestors made hundreds ' +
              'of thousands of years ago.',
          },
          exhibits: [
            {
              id: 'lyon-confluences-camarasaurus',
              name: { el: 'Ο δεινόσαυρος με τον μακρύ λαιμό', en: 'The long-necked dinosaur' },
              blurb: {
                el:
                  'Ένας σκελετός δεινοσαύρου, πάνω από δεκαπέντε μέτρα από τη μύτη ως την άκρη ' +
                  'της ουράς, στέκεται στη μέση της αίθουσας. Είναι ένας καμαρόσαυρος, ένα ζώο ' +
                  'που έτρωγε φυτά και ζούσε στη σημερινή Αμερική πριν από εκατόν πενήντα ' +
                  'εκατομμύρια χρόνια. Ο μακρύς λαιμός του τού επέτρεπε να φτάνει τα ψηλά κλαδιά, ' +
                  'και τα δόντια του ήταν σαν κουτάλια, για να ξεκολλάει φύλλα. Παρόλο το μέγεθος ' +
                  'του, το κεφάλι του είναι μικρό σαν κεφάλι αλόγου. Οι επιστήμονες πιστεύουν ' +
                  'ότι ζούσε σε κοπάδια, όπως οι ελέφαντες σήμερα.',
                en:
                  'A dinosaur skeleton, more than fifteen metres from nose to tail tip, stands in ' +
                  'the middle of the hall. It is a Camarasaurus, a plant-eating animal that lived ' +
                  'in what is now America a hundred and fifty million years ago. Its long neck let ' +
                  'it reach high branches, and its teeth were shaped like spoons, for stripping ' +
                  'leaves. Despite its size, its head is as small as a horse’s. Scientists think ' +
                  'it lived in herds, like elephants today.',
              },
              question: {
                q: { el: 'Τι έτρωγε αυτός ο δεινόσαυρος;', en: 'What did this dinosaur eat?' },
                answers: [
                  { el: 'Φύλλα από ψηλά κλαδιά', en: 'Leaves from high branches' },
                  { el: 'Ψάρια', en: 'Fish' },
                  { el: 'Άλλους δεινοσαύρους', en: 'Other dinosaurs' },
                  {
                    el: 'Πέτρες, που τις έλιωνε στο στομάχι του γιατί δεν είχε δόντια',
                    en: 'Stones, which it melted in its stomach because it had no teeth',
                  },
                ],
                explanation: {
                  el: 'Τα δόντια του ήταν σαν κουτάλια, για να ξεκολλάει φύλλα.',
                  en: 'Its teeth were shaped like spoons, for stripping leaves.',
                },
              },
            },
            {
              id: 'lyon-confluences-mammoth',
              name: { el: 'Το μαμούθ της Λυών', en: 'The Lyon mammoth' },
              blurb: {
                el:
                  'Αυτός ο σκελετός δεν ήρθε από μακριά. Βρέθηκε το 1859 σε μια γειτονιά της ' +
                  'Λυών, όταν εργάτες έσκαβαν για να φτιάξουν έναν δρόμο. Είναι ένα μαμούθ που ' +
                  'ζούσε εδώ πριν από περίπου ένα εκατομμύριο χρόνια, τότε που η κοιλάδα του ' +
                  'Ροδανού ήταν σαβάνα με ζέβρες και ρινόκερους. Δεν είναι το μαλλιαρό μαμούθ ' +
                  'των παγετώνων αλλά ένας παλιότερος πρόγονός του, ψηλότερος από τους σημερινούς ' +
                  'ελέφαντες. Οι χαυλιόδοντές του είναι στριφτοί και μακρύτεροι από έναν ενήλικα. ' +
                  'Είναι από τους πιο πλήρεις σκελετούς αυτού του είδους στον κόσμο.',
                en:
                  'This skeleton did not come from far away. It was found in 1859 in a ' +
                  'neighbourhood of Lyon, when workers were digging to build a road. It is a ' +
                  'mammoth that lived here about a million years ago, when the Rhône valley was ' +
                  'savannah with zebras and rhinoceroses. It is not the woolly mammoth of the ice ' +
                  'ages but an older ancestor of it, taller than today’s elephants. Its tusks are ' +
                  'twisted and longer than a grown-up. It is one of the most complete skeletons ' +
                  'of its kind in the world.',
              },
              question: {
                q: { el: 'Πού βρέθηκε αυτό το μαμούθ;', en: 'Where was this mammoth found?' },
                answers: [
                  { el: 'Σε μια γειτονιά της Λυών', en: 'In a neighbourhood of Lyon' },
                  { el: 'Στη Σιβηρία', en: 'In Siberia' },
                  { el: 'Στον πάγο των Άλπεων', en: 'In the ice of the Alps' },
                  {
                    el: 'Στον βυθό του Ροδανού, από δύτες που έψαχναν ένα βυθισμένο πλοίο',
                    en: 'On the bed of the Rhône, by divers looking for a sunken ship',
                  },
                ],
                explanation: {
                  el: 'Το 1859, από εργάτες που έσκαβαν έναν δρόμο. Τότε εδώ ήταν σαβάνα.',
                  en: 'In 1859, by workers digging a road. Back then this was savannah.',
                },
              },
            },
            {
              id: 'lyon-confluences-meteorite',
              name: { el: 'Πέτρες από το διάστημα', en: 'Stones from space' },
              blurb: {
                el:
                  'Σε μια βιτρίνα υπάρχουν σκούρες, βαριές πέτρες που δεν γεννήθηκαν στη Γη. ' +
                  'Είναι μετεωρίτες, κομμάτια από αστεροειδείς που έπεσαν από τον ουρανό. Μερικοί ' +
                  'είναι από σίδερο, και αν τους έκοβες θα έβλεπες μέσα τους κρυστάλλους σε ' +
                  'σχέδια σαν πλέγμα, που φτιάχνονται μόνο στο διάστημα, όταν το μέταλλο κρυώνει ' +
                  'πολύ αργά για εκατομμύρια χρόνια. Οι μετεωρίτες είναι τα πιο παλιά πράγματα ' +
                  'που μπορείς να αγγίξεις: σχηματίστηκαν πριν από τη Γη, την ίδια εποχή με τον ' +
                  'Ήλιο. Ένας από αυτούς μπορείς όντως να τον αγγίξεις.',
                en:
                  'In one case there are dark, heavy stones that were not born on Earth. They are ' +
                  'meteorites, pieces of asteroids that fell from the sky. Some are made of iron, ' +
                  'and if you cut them open you would see crystals inside in a lattice pattern, ' +
                  'which only forms in space, when metal cools very slowly over millions of years. ' +
                  'Meteorites are the oldest things you can touch: they formed before the Earth, ' +
                  'at the same time as the Sun. One of them you really can touch.',
              },
              question: {
                q: { el: 'Πότε σχηματίστηκαν οι μετεωρίτες;', en: 'When did the meteorites form?' },
                answers: [
                  { el: 'Πριν από τη Γη, μαζί με τον Ήλιο', en: 'Before the Earth, along with the Sun' },
                  { el: 'Χθες', en: 'Yesterday' },
                  { el: 'Μαζί με τους δεινοσαύρους', en: 'Along with the dinosaurs' },
                  {
                    el: 'Όταν έπεσαν στη Γη και η θερμότητα της πτώσης τους έλιωσε την πέτρα',
                    en: 'When they hit the Earth and the heat of the fall melted the stone',
                  },
                ],
                explanation: {
                  el: 'Είναι τα πιο παλιά πράγματα που μπορείς να αγγίξεις.',
                  en: 'They are the oldest things you can touch.',
                },
              },
            },
          ],
        },
        {
          id: 'lyon-confluences-societies',
          emoji: '🌍',
          name: { el: 'Κοινωνίες: πώς ζουν οι άνθρωποι', en: 'Societies: how people live' },
          intro: {
            el:
              'Εδώ το μουσείο αφήνει την προϊστορία και κοιτάζει τους ανθρώπους σήμερα, σε ' +
              'διάφορες γωνιές του κόσμου: πώς οργανώνονται, τι εφευρίσκουν, πώς γιορτάζουν. ' +
              'Τα εκθέματα ταξιδεύουν από τη Λυών του 19ου αιώνα ως το διάστημα, και από ' +
              'μάσκες της Αφρικής ως ρομπότ.',
            en:
              'Here the museum leaves prehistory and looks at people today, in different ' +
              'corners of the world: how they organise themselves, what they invent, how they ' +
              'celebrate. The exhibits travel from 19th-century Lyon to outer space, and from ' +
              'African masks to robots.',
          },
          exhibits: [
            {
              id: 'lyon-confluences-loom',
              name: { el: 'Ο αργαλειός με τις τρύπες', en: 'The loom with the holes' },
              blurb: {
                el:
                  'Ένας μεγάλος ξύλινος αργαλειός για μετάξι, από αυτούς που γέμιζαν τη Λυών τον ' +
                  '19ο αιώνα, όταν η πόλη ύφαινε τα πιο ωραία μεταξωτά της Ευρώπης. Στην κορυφή ' +
                  'του κρέμεται μια αλυσίδα από χαρτόνια με τρύπες. Κάθε χαρτόνι λέει στον ' +
                  'αργαλειό ποιες κλωστές να σηκώσει, κι έτσι υφαίνεται ένα σχέδιο, λουλούδια ή ' +
                  'πουλιά, χωρίς ο υφαντής να το θυμάται. Τον επινόησε ένας Λυωνέζος, ο Ζακάρ, το ' +
                  '1801. Πολλοί λένε ότι αυτά τα χαρτόνια με τρύπες ήταν οι πρόγονοι των ' +
                  'προγραμμάτων των υπολογιστών: μια μηχανή που ακολουθεί οδηγίες.',
                en:
                  'A big wooden loom for silk, one of those that filled Lyon in the 19th century, ' +
                  'when the city wove the finest silks in Europe. At the top hangs a chain of ' +
                  'cards with holes in them. Each card tells the loom which threads to lift, and so ' +
                  'a pattern is woven, flowers or birds, without the weaver having to remember it. ' +
                  'It was invented by a man from Lyon, Jacquard, in 1801. Many people say these ' +
                  'punched cards were the ancestors of computer programs: a machine that follows ' +
                  'instructions.',
              },
              question: {
                q: { el: 'Τι κάνουν τα χαρτόνια με τις τρύπες;', en: 'What do the cards with holes do?' },
                answers: [
                  { el: 'Λένε στον αργαλειό ποιες κλωστές να σηκώσει', en: 'Tell the loom which threads to lift' },
                  { el: 'Τίποτα', en: 'Nothing' },
                  { el: 'Μετράνε το ύφασμα', en: 'They measure the cloth' },
                  {
                    el: 'Κρατάνε τον αργαλειό όρθιο, για να μην πέσει από το βάρος του μεταξιού',
                    en: 'They hold the loom upright, so it does not fall over from the weight of the silk',
                  },
                ],
                explanation: {
                  el: 'Μια μηχανή που ακολουθεί οδηγίες, το 1801. Πρόγονος των προγραμμάτων.',
                  en: 'A machine following instructions, in 1801. An ancestor of programs.',
                },
              },
            },
            {
              id: 'lyon-confluences-spacesuit',
              name: { el: 'Η στολή του αστροναύτη', en: 'The astronaut’s suit' },
              blurb: {
                el:
                  'Μια λευκή, φουσκωτή στολή με χρυσή μάσκα στέκεται σαν να έχει κάποιον μέσα. ' +
                  'Είναι μια διαστημική στολή, φτιαγμένη για να βγαίνει κανείς έξω από το ' +
                  'διαστημόπλοιο. Στο διάστημα δεν υπάρχει αέρας, κάνει είτε φοβερό κρύο είτε ' +
                  'φοβερή ζέστη ανάλογα με το αν σε βλέπει ο ήλιος, και η στολή είναι ένα μικρό ' +
                  'διαστημόπλοιο για έναν άνθρωπο: έχει μέσα αέρα, νερό, θέρμανση και ψύξη. Η ' +
                  'χρυσή μάσκα δεν είναι για ομορφιά: το χρυσό αντανακλά το φως του ήλιου, που ' +
                  'χωρίς ατμόσφαιρα θα τύφλωνε τον αστροναύτη. Το μουσείο τη δείχνει δίπλα σε ' +
                  'παλιά όργανα εξερεύνησης, γιατί η περιέργεια είναι η ίδια.',
                en:
                  'A white, puffy suit with a golden visor stands as if someone were inside it. It ' +
                  'is a space suit, made for going outside the spacecraft. In space there is no ' +
                  'air, it is either terribly cold or terribly hot depending on whether the sun ' +
                  'can see you, and the suit is a tiny spacecraft for one person: it has air, ' +
                  'water, heating and cooling inside. The golden visor is not for looks: gold ' +
                  'reflects sunlight, which without an atmosphere would blind the astronaut. The ' +
                  'museum shows it next to old exploring instruments, because the curiosity is ' +
                  'the same.',
              },
              question: {
                q: { el: 'Γιατί η μάσκα της στολής είναι χρυσή;', en: 'Why is the suit’s visor golden?' },
                answers: [
                  { el: 'Για να αντανακλά το φως του ήλιου', en: 'To reflect the sunlight' },
                  { el: 'Για ομορφιά', en: 'For looks' },
                  { el: 'Είναι από αληθινό χρυσάφι', en: 'It is solid gold' },
                  {
                    el: 'Για να τον βλέπουν οι άλλοι αστροναύτες από μακριά μέσα στο σκοτάδι',
                    en: 'So the other astronauts can see him from far away in the dark',
                  },
                ],
                explanation: {
                  el: 'Χωρίς ατμόσφαιρα ο ήλιος θα τύφλωνε τον αστροναύτη. Το χρυσό τον προστατεύει.',
                  en: 'Without an atmosphere the sun would blind the astronaut. Gold protects him.',
                },
              },
            },
            {
              id: 'lyon-confluences-masks',
              name: { el: 'Μάσκες από όλο τον κόσμο', en: 'Masks from all over the world' },
              blurb: {
                el:
                  'Σε έναν σκοτεινό τοίχο κρέμονται μάσκες από πολλές χώρες: ξύλινες μάσκες από ' +
                  'την Αφρική με μακριά πρόσωπα, μάσκες με φτερά από την Ωκεανία, μάσκες θεάτρου ' +
                  'από την Ασία, μια μάσκα καρναβαλιού από την Ευρώπη. Σε κάθε γωνιά του κόσμου ' +
                  'οι άνθρωποι φοράνε μάσκες για τον ίδιο λόγο: για να γίνουν για λίγο κάποιος ' +
                  'άλλος, ένα πνεύμα, ένα ζώο, ένας πρόγονος, ή απλώς για να παίξουν. Το μουσείο ' +
                  'τις κρέμασε δίπλα δίπλα για να δεις πόσο διαφορετικές και πόσο ίδιες είναι. ' +
                  'Ποια θα φορούσες εσύ;',
                en:
                  'On a dark wall hang masks from many countries: wooden masks from Africa with ' +
                  'long faces, feathered masks from Oceania, theatre masks from Asia, a carnival ' +
                  'mask from Europe. In every corner of the world people wear masks for the same ' +
                  'reason: to become someone else for a while, a spirit, an animal, an ancestor, ' +
                  'or simply to play. The museum hung them side by side so you can see how ' +
                  'different and how alike they are. Which one would you wear?',
              },
              question: {
                q: { el: 'Γιατί φοράνε μάσκες οι άνθρωποι σε όλο τον κόσμο;', en: 'Why do people all over the world wear masks?' },
                answers: [
                  { el: 'Για να γίνουν για λίγο κάποιος άλλος', en: 'To become someone else for a while' },
                  { el: 'Για ζέστη', en: 'For warmth' },
                  { el: 'Για να μη τους γνωρίζουν', en: 'So nobody recognises them' },
                  {
                    el: 'Γιατί σε πολλές χώρες απαγορεύεται να δείχνεις το πρόσωπό σου στις γιορτές',
                    en: 'Because in many countries it is forbidden to show your face at festivals',
                  },
                ],
                explanation: {
                  el: 'Ένα πνεύμα, ένα ζώο, έναν πρόγονο, ή απλώς για παιχνίδι. Παντού ο ίδιος λόγος.',
                  en: 'A spirit, an animal, an ancestor, or simply to play. The same reason everywhere.',
                },
              },
            },
          ],
        },
      ],
      riddles: [
        {
          id: 'lyon-confluences-riddle-1',
          difficulty: 1,
          prompt: {
            el:
              'Δεν ήρθα από μακριά: με βρήκαν εργάτες σκάβοντας έναν δρόμο σε αυτή την πόλη. Οι ' +
              'χαυλιόδοντές μου είναι πιο μακρείς από εσένα.',
            en:
              'I did not come from far away: workers found me digging a road in this city. My ' +
              'tusks are longer than you are tall.',
          },
          hint: { el: 'Είμαι πρόγονος του ελέφαντα.', en: 'I am an ancestor of the elephant.' },
          answerExhibitId: 'lyon-confluences-mammoth',
        },
        {
          id: 'lyon-confluences-riddle-2',
          difficulty: 2,
          prompt: {
            el:
              'Είμαι μια μηχανή από ξύλο, αλλά διαβάζω οδηγίες από χαρτόνια με τρύπες. Ύφαινα ' +
              'λουλούδια από μετάξι πολύ πριν υπάρξουν υπολογιστές.',
            en:
              'I am a machine made of wood, but I read instructions from cards with holes. I wove ' +
              'flowers in silk long before there were computers.',
          },
          hint: { el: 'Με επινόησε ένας Λυωνέζος.', en: 'A man from Lyon invented me.' },
          answerExhibitId: 'lyon-confluences-loom',
        },
        {
          id: 'lyon-confluences-riddle-3',
          difficulty: 3,
          prompt: {
            el:
              'Είμαι πιο παλιά από τη Γη και έπεσα από τον ουρανό. Είμαι βαριά, σκούρα, και αν ' +
              'με έκοβες θα έβλεπες μέσα μου σχέδια που φτιάχνονται μόνο στο διάστημα.',
            en:
              'I am older than the Earth and I fell from the sky. I am heavy and dark, and if you ' +
              'cut me open you would see patterns inside that only form in space.',
          },
          hint: { el: 'Μπορείς να με αγγίξεις.', en: 'You are allowed to touch me.' },
          answerExhibitId: 'lyon-confluences-meteorite',
        },
      ],
    },
  },
];

export const trails: Trail[] = [
  {
    id: 'lyon-the-hill',
    cityId: 'lyon',
    emoji: '⛪',
    name: { el: 'Ο λόφος των Ρωμαίων', en: 'The Romans’ hill' },
    promise: {
      el: 'Ένας ανάποδος ελέφαντας, ένας μικρός Πύργος του Άιφελ, ένα θέατρο δύο χιλιάδων χρόνων και ένα μουσείο κρυμμένο στον λόφο.',
      en: 'An upside-down elephant, a little Eiffel Tower, a two-thousand-year-old theatre and a museum hidden in the hill.',
    },
    placeIds: ['lyon-fourviere', 'lyon-tour-metallique', 'lyon-theatre-antique', 'lyon-lugdunum'],
  },
  {
    id: 'lyon-old-town',
    cityId: 'lyon',
    emoji: '🎎',
    name: { el: 'Η παλιά πόλη και οι ζωγραφισμένοι τοίχοι', en: 'The old town and the painted walls' },
    promise: {
      el: 'Ένα ρολόι με κοκόρι, ο Γκινιόλ και τα κρυφά περάσματα, τριάντα Λυωνέζοι σε ψεύτικα παράθυρα, τέσσερα άγρια άλογα και ένα μοναστήρι γεμάτο τέχνη.',
      en: 'A clock with a cockerel, Guignol and the hidden passages, thirty locals at fake windows, four wild horses and an abbey full of art.',
    },
    placeIds: ['lyon-cathedrale', 'lyon-gadagne', 'lyon-fresque', 'lyon-fontaine-bartholdi', 'lyon-beaux-arts', 'lyon-opera'],
  },
  {
    id: 'lyon-between-the-rivers',
    cityId: 'lyon',
    emoji: '🤴',
    name: { el: 'Ανάμεσα στα δύο ποτάμια', en: 'Between the two rivers' },
    promise: {
      el: 'Ο Μικρός Πρίγκιπας σε μια κόκκινη πλατεία, ένα νοσοκομείο που έγινε αγορά, ανάποδα γράμματα και ένα γυάλινο σύννεφο εκεί που τα ποτάμια γίνονται ένα.',
      en: 'The Little Prince on a red square, a hospital turned market, back-to-front letters and a glass cloud where the rivers become one.',
    },
    placeIds: ['lyon-imprimerie', 'lyon-bellecour', 'lyon-hotel-dieu', 'lyon-confluences'],
  },
  {
    id: 'lyon-food-and-giraffes',
    cityId: 'lyon',
    emoji: '🦒',
    name: { el: 'Τυριά και καμηλοπαρδάλεις', en: 'Cheese and giraffes' },
    promise: {
      el: 'Η αγορά της πρωτεύουσας του φαγητού, και ένα πάρκο με λίμνη, δωρεάν ζωολογικό κήπο και έναν θησαυρό που κανείς δεν βρήκε.',
      en: 'The market of the capital of food, and a park with a lake, a free zoo and a treasure nobody ever found.',
    },
    placeIds: ['lyon-halles', 'lyon-tete-d-or'],
  },
];
