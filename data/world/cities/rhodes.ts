/**
 * WiseBot World — Rhodes.
 *
 * Twelve places, two of them museums with an interior. Like Heraklion, this is an
 * island rather than a city: Lindos is fifty kilometres south of the town and
 * Monolithos seventy south-west, so the map bounds are regional on purpose.
 *
 * No place here carries an `entrance` anchor. Following the engine session's note, an
 * anchor is only what has been measured, and none of these doors has been. Every point
 * is the centroid or the area it honestly is.
 *
 * Every coordinate is copied from `data/world/coords/rhodes.json`. Nothing graded `D`.
 * The Medieval City was dropped for the reasons in `scripts/world/seeds/rhodes.json`,
 * and the walls that would have replaced it were rejected before running, because their
 * rounded coordinate lands 24 m from the museum and the two would have shared a pin.
 *
 * Overpass was rate-limiting through the resolver pass, so six places grade C on
 * coordinates that three sources would otherwise have agreed on. The letters are honest
 * about what was checked, not about how doubtful the location is.
 *
 * `el` and `en` are complete. `de`, `fr`, `es` and `it` arrive later as overlay files,
 * `data/world/cities/rhodes.<lang>.json`, not as extra keys in here.
 */

import type { Place, Trail } from '../types';

export const places: Place[] = [
  // ------------------------------------------------------- palace of the grand master
  {
    id: 'rhodes-palace-grand-master',
    cityId: 'rhodes',
    emoji: '🏰',
    category: 'landmark',
    difficulty: 2,

    name: { el: 'Παλάτι του Μεγάλου Μαγίστρου', en: 'The Palace of the Grand Master' },
    tagline: {
      el: 'Κάστρο, φυλακή, ερείπιο και ξανά παλάτι, σε έξι αιώνες',
      en: 'Castle, prison, ruin and palace again, across six centuries',
    },
    story: {
      el:
        'Στην κορυφή της μεσαιωνικής πόλης στέκεται ένα κάστρο με δύο στρογγυλούς πύργους ' +
        'στην είσοδο. Το έχτισαν τον 14ο αιώνα οι Ιππότες του Αγίου Ιωάννη, πάνω σε ' +
        'παλαιότερο βυζαντινό οχυρό, και ήταν το κέντρο της εξουσίας τους. Άντεξε ' +
        'πολιορκίες. Δεν άντεξε όμως κάτι πολύ πιο ανόητο: το 1856, μπαρούτι που είχε ' +
        'μείνει ξεχασμένο σε ένα υπόγειο από την εποχή των Ιπποτών εξερράγη, και το ' +
        'παλάτι έγινε ερείπιο σχεδόν σε μια στιγμή. Έμεινε έτσι ογδόντα χρόνια. Στα τέλη ' +
        'της δεκαετίας του 1930, όταν τα Δωδεκάνησα ήταν υπό ιταλική διοίκηση, το ' +
        'ξαναέχτισαν από την αρχή. Για να στρώσουν τα δάπεδα, έφεραν με καράβια αρχαία ' +
        'ψηφιδωτά από την Κω. Έτσι σήμερα περπατάς σε ένα μεσαιωνικό κάστρο πατώντας ' +
        'πάνω σε ρωμαϊκά πατώματα από άλλο νησί.',
      en:
        'At the top of the medieval town stands a castle with two round towers at its gate. ' +
        'The Knights of Saint John built it in the 14th century on top of an older ' +
        'Byzantine fort, and it was the centre of their power. It survived sieges. What it ' +
        'did not survive was something far more foolish: in 1856 gunpowder left forgotten ' +
        'in a cellar since the time of the Knights exploded, and the palace was a ruin in ' +
        'almost a moment. It stayed that way for eighty years. In the late 1930s, when the ' +
        'Dodecanese were under Italian administration, it was rebuilt from the ground up. ' +
        'To lay the floors, ancient mosaics were shipped in from the island of Kos. So ' +
        'today you walk through a medieval castle across Roman floors from somewhere else.',
    },
    facts: [
      {
        el: 'Χτίστηκε τον 14ο αιώνα από τους Ιππότες του Αγίου Ιωάννη.',
        en: 'It was built in the 14th century by the Knights of Saint John.',
      },
      {
        el: 'Καταστράφηκε το 1856 από έκρηξη ξεχασμένου μπαρουτιού.',
        en: 'It was destroyed in 1856 by an explosion of forgotten gunpowder.',
      },
      {
        el: 'Τα ψηφιδωτά δάπεδά του μεταφέρθηκαν από την Κω στη δεκαετία του 1930.',
        en: 'Its mosaic floors were brought from the island of Kos in the 1930s.',
      },
    ],
    location: {
      lat: 36.44569,
      lng: 28.22411,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q931371', deltaM: 0 },
        { kind: 'osm', ref: 'relation/7468393', deltaM: 12 },
      ],
      verifiedAt: '2026-09-11',
      note: 'No English Wikipedia coordinate. OSM agrees with Wikidata to 12 m on the building.',
    },
    question: {
      q: {
        el: 'Τι κατέστρεψε το παλάτι το 1856;',
        en: 'What destroyed the palace in 1856?',
      },
      answers: [
        {
          el: 'Μπαρούτι που είχε ξεχαστεί σε υπόγειο από την εποχή των Ιπποτών',
          en: 'Gunpowder forgotten in a cellar since the time of the Knights',
        },
        { el: 'Μια πολιορκία που κράτησε μήνες', en: 'A siege that lasted for months' },
        { el: 'Ένας σεισμός που άνοιξε το έδαφος', en: 'An earthquake that split the ground' },
        { el: 'Μια πλημμύρα από τη θάλασσα', en: 'A flood coming in from the sea' },
      ],
      explanation: {
        el:
          'Το μπαρούτι είχε μείνει εκεί πάνω από τριακόσια χρόνια. Κανείς δεν θυμόταν πια ' +
          'ότι υπήρχε.',
        en:
          'The gunpowder had sat there for over three hundred years. Nobody remembered it ' +
          'was there at all.',
      },
    },
  },

  // ----------------------------------------------------- archaeological museum
  {
    id: 'rhodes-archaeological-museum',
    cityId: 'rhodes',
    emoji: '🏛️',
    category: 'museum',
    difficulty: 2,

    name: { el: 'Αρχαιολογικό Μουσείο Ρόδου', en: 'The Archaeological Museum of Rhodes' },
    tagline: {
      el: 'Ένα μουσείο μέσα στο νοσοκομείο των Ιπποτών',
      en: 'A museum inside the hospital of the Knights',
    },
    story: {
      el:
        'Το κτίριο ήταν νοσοκομείο πριν γίνει μουσείο, και αυτό δεν είναι λεπτομέρεια: οι ' +
        'Ιππότες του Αγίου Ιωάννη ήταν πρώτα νοσοκόμοι και μετά πολεμιστές. Το τάγμα τους ' +
        'ξεκίνησε για να περιθάλπει προσκυνητές, και σε κάθε τόπο όπου πήγαιναν έχτιζαν ' +
        'νοσοκομείο. Αυτό εδώ χτίστηκε τον 15ο αιώνα και έχει στον επάνω όροφο έναν ' +
        'τεράστιο θάλαμο με ψηλή ξύλινη στέγη, όπου έμεναν οι άρρωστοι σε σειρές από ' +
        'κρεβάτια, με μικρά παράθυρα ψηλά για αέρα. Είναι από τα λίγα μεσαιωνικά ' +
        'νοσοκομεία που σώζονται στην Ευρώπη. Από το 1916 στεγάζει το μουσείο του νησιού, ' +
        'με μάρμαρα, αγγεία και επιτύμβια από τις τρεις αρχαίες πόλεις της Ρόδου. Το ' +
        'κτίριο και το περιεχόμενο μιλούν για δύο διαφορετικούς κόσμους, χωρισμένους ' +
        'χίλια πεντακόσια χρόνια. Λίγα μουσεία στον κόσμο έχουν κτίριο που αξίζει όσο η ' +
        'συλλογή του, και εδώ δεν είναι καθόλου βέβαιο ποιο από τα δύο κερδίζει.',
      en:
        'The building was a hospital before it was a museum, and that is not a detail: the ' +
        'Knights of Saint John were nurses first and fighters second. Their order began in ' +
        'order to care for pilgrims, and everywhere they went they built a hospital. This ' +
        'one went up in the 15th century, and on its upper floor is an enormous ward with a ' +
        'high wooden roof, where the sick lay in rows of beds with small windows set high ' +
        'up for air. It is one of very few medieval hospitals still standing in Europe. ' +
        'Since 1916 it has housed the island’s museum, with marbles, pottery and grave ' +
        'stones from the three ancient cities of Rhodes. The building and its contents ' +
        'speak for two different worlds, fifteen hundred years apart.',
    },
    facts: [
      {
        el: 'Το κτίριο χτίστηκε τον 15ο αιώνα ως νοσοκομείο των Ιπποτών.',
        en: 'The building went up in the 15th century as the Knights’ hospital.',
      },
      {
        el: 'Ο μεγάλος θάλαμος των ασθενών σώζεται ολόκληρος στον επάνω όροφο.',
        en: 'The great ward for the sick survives intact on the upper floor.',
      },
      {
        el: 'Λειτουργεί ως μουσείο από το 1916.',
        en: 'It has been a museum since 1916.',
      },
    ],
    location: {
      lat: 36.4448,
      lng: 28.2271,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q4785432', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Archaeological Museum of Rhodes', deltaM: 0 },
      ],
      verifiedAt: '2026-09-11',
      note: 'Wikidata and Wikipedia agree exactly. OpenStreetMap has no entry tagged with this q-id.',
    },
    question: {
      q: {
        el: 'Τι ήταν αρχικά το τάγμα των Ιπποτών του Αγίου Ιωάννη;',
        en: 'What was the order of the Knights of Saint John originally?',
      },
      answers: [
        {
          el: 'Νοσοκόμοι που φρόντιζαν προσκυνητές',
          en: 'Nurses who looked after pilgrims',
        },
        { el: 'Έμποροι που ταξίδευαν με καράβια', en: 'Merchants who travelled by ship' },
        { el: 'Χτίστες που έφτιαχναν κάστρα επί πληρωμή', en: 'Builders who raised castles for hire' },
        { el: 'Χαρτογράφοι της Μεσογείου', en: 'Mapmakers of the Mediterranean' },
      ],
      explanation: {
        el:
          'Γι’ αυτό το πρώτο μεγάλο κτίριο που έχτισαν στη Ρόδο ήταν νοσοκομείο και όχι ' +
          'στρατώνας.',
        en:
          'That is why the first great building they raised on Rhodes was a hospital rather ' +
          'than a barracks.',
      },
    },

    museum: {
      doorNote: {
        el: 'Ανέβα πρώτα στον μεγάλο θάλαμο. Είναι το σημαντικότερο έκθεμα και είναι το ίδιο το κτίριο.',
        en: 'Go up to the great ward first. The most important exhibit here is the building itself.',
      },
      rooms: [
        {
          id: 'rhodes-archaeological-museum-hospital',
          emoji: '🛏️',
          name: { el: 'Το νοσοκομείο', en: 'The hospital' },
          intro: {
            el:
              'Πριν κοιτάξεις οτιδήποτε αρχαίο, κοίτα τους τοίχους. Αυτοί είναι πεντακόσια ' +
              'χρόνων και χτίστηκαν για συγκεκριμένη δουλειά: να χωρέσουν αρρώστους, να ' +
              'κρατήσουν τον αέρα καθαρό και να μην πέσουν ποτέ. Οι Ιππότες ήξεραν ' +
              'ιατρική πολύ καλύτερα από όσο φαντάζεσαι, και το κτίριο το αποδεικνύει.',
            en:
              'Before you look at anything ancient, look at the walls. They are five hundred ' +
              'years old and were built for one job: to hold the sick, to keep the air ' +
              'moving, and never to fall down. The Knights understood medicine far better ' +
              'than you would expect.',
          },
          exhibits: [
            {
              id: 'rhodes-archaeological-museum-great-ward',
              name: { el: 'Ο μεγάλος θάλαμος', en: 'The great ward' },
              blurb: {
                el:
                  'Μια αίθουσα μήκους σχεδόν πενήντα μέτρων, με ψηλή ξύλινη στέγη και μια ' +
                  'σειρά από καμάρες στη μέση. Εδώ έμεναν οι άρρωστοι, ο καθένας σε δικό ' +
                  'του χώρο με κουρτίνα. Τα παράθυρα είναι μικρά και ψηλά επίτηδες: ' +
                  'τραβούν τον ζεστό αέρα προς τα πάνω και τον βγάζουν έξω, ώστε να μη ' +
                  'λιμνάζει. Στο βάθος υπάρχει παρεκκλήσι, γιατί για τους Ιππότες η ' +
                  'φροντίδα του σώματος και της ψυχής ήταν μία δουλειά.',
                en:
                  'A hall almost fifty metres long, with a high wooden roof and a line of ' +
                  'arches down the middle. The sick stayed here, each in a space of his own ' +
                  'behind a curtain. The windows are small and set high on purpose: they pull ' +
                  'warm air upwards and out, so it does not sit still. At the far end there ' +
                  'is a chapel, because for the Knights caring for the body and the soul was ' +
                  'one job.',
              },
              question: {
                q: {
                  el: 'Γιατί είναι μικρά και ψηλά τα παράθυρα του θαλάμου;',
                  en: 'Why are the ward’s windows small and set high up?',
                },
                answers: [
                  { el: 'Για να βγαίνει ο ζεστός αέρας και να ανανεώνεται', en: 'So the warm air escapes and the air keeps moving' },
                  { el: 'Για να μη βλέπουν έξω οι άρρωστοι', en: 'So the sick could not see out' },
                  { el: 'Για να μπαίνει λιγότερη σκόνη', en: 'To let in less dust' },
                  { el: 'Γιατί το γυαλί ήταν πολύ ακριβό', en: 'Because glass was very expensive' },
                ],
                explanation: {
                  el: 'Ο ζεστός αέρας ανεβαίνει. Ένα παράθυρο ψηλά είναι καμινάδα για αέρα.',
                  en: 'Warm air rises. A high window is a chimney for air.',
                },
              },
            },
            {
              id: 'rhodes-archaeological-museum-knight-slabs',
              name: { el: 'Οι ταφόπλακες των Ιπποτών', en: 'The knights’ grave slabs' },
              blurb: {
                el:
                  'Μαρμάρινες πλάκες με σκαλισμένα οικόσημα: λιοντάρια, σταυροί, πουλιά, ' +
                  'ρίγες. Κάθε οικόσημο είναι σαν σήμα οικογένειας, και επειδή οι Ιππότες ' +
                  'έρχονταν από όλη την Ευρώπη, οι πλάκες διαβάζονται σαν χάρτης: γαλλικά ' +
                  'ονόματα, ισπανικά, ιταλικά, αγγλικά. Το τάγμα χωριζόταν σε ομάδες ' +
                  'ανάλογα με τη γλώσσα που μιλούσε ο καθένας, και κάθε ομάδα είχε δικό της ' +
                  'σπίτι στην Οδό Ιπποτών, λίγα μέτρα πιο πάνω.',
                en:
                  'Marble slabs carved with coats of arms: lions, crosses, birds, stripes. ' +
                  'Every coat of arms works like a family badge, and because the Knights came ' +
                  'from all over Europe, the slabs read like a map: French names, Spanish, ' +
                  'Italian, English. The order was divided into groups according to the ' +
                  'language each man spoke, and every group had a house of its own on the ' +
                  'Street of the Knights, a few metres up the hill.',
              },
              question: {
                q: {
                  el: 'Πώς χωριζόταν το τάγμα των Ιπποτών;',
                  en: 'How was the order of Knights divided?',
                },
                answers: [
                  { el: 'Σε ομάδες ανάλογα με τη γλώσσα που μιλούσαν', en: 'Into groups according to the language they spoke' },
                  { el: 'Σε ομάδες ανάλογα με το ύψος τους', en: 'Into groups according to their height' },
                  { el: 'Σε ομάδες ανάλογα με την ηλικία τους', en: 'Into groups according to their age' },
                  { el: 'Δεν χωριζόταν καθόλου', en: 'It was not divided at all' },
                ],
                explanation: {
                  el:
                    'Λέγονταν «γλώσσες». Γι’ αυτό στην Οδό Ιπποτών κάθε σπίτι έχει άλλα ' +
                    'οικόσημα πάνω από την πόρτα.',
                  en:
                    'They were called "tongues". That is why every house on the Street of the ' +
                    'Knights has different arms above its door.',
                },
              },
            },
            {
              id: 'rhodes-archaeological-museum-courtyard',
              name: { el: 'Η αυλή', en: 'The courtyard' },
              blurb: {
                el:
                  'Μια τετράγωνη αυλή με στοές σε δύο επίπεδα, ανοιχτή στον ουρανό. Δεν ' +
                  'είναι διακόσμηση: σε ένα κτίριο χωρίς ηλεκτρικό, η αυλή είναι η λάμπα ' +
                  'και ο εξαεριστήρας του. Φέρνει φως στα δωμάτια που δεν βλέπουν στον ' +
                  'δρόμο και τραβάει ρεύμα αέρα μέσα από όλο το κτίριο. Το ίδιο σχέδιο θα ' +
                  'το βρεις σε σπίτια, μοναστήρια και σχολεία σε ολόκληρη τη Μεσόγειο, ' +
                  'χιλιάδες χρόνια πριν και μετά από αυτό.',
                en:
                  'A square courtyard with arcades on two levels, open to the sky. It is not ' +
                  'decoration: in a building with no electricity, the courtyard is its lamp ' +
                  'and its extractor fan. It brings light to the rooms with no street ' +
                  'frontage and pulls a current of air through the whole building. You will ' +
                  'find the same plan in houses, monasteries and schools all round the ' +
                  'Mediterranean, for thousands of years before this and after it.',
              },
              question: {
                q: {
                  el: 'Τι δουλειά κάνει μια εσωτερική αυλή σε ένα παλιό κτίριο;',
                  en: 'What job does an inner courtyard do in an old building?',
                },
                answers: [
                  { el: 'Δίνει φως και αέρα στα εσωτερικά δωμάτια', en: 'It gives light and air to the inner rooms' },
                  { el: 'Συγκεντρώνει νερό για πλύσιμο', en: 'It collects water for washing' },
                  { el: 'Κρατάει το κτίριο όρθιο στους σεισμούς', en: 'It holds the building up in earthquakes' },
                  { el: 'Χρησιμεύει μόνο για παρελάσεις', en: 'It is only used for parades' },
                ],
                explanation: {
                  el: 'Πριν από το ηλεκτρικό, το σχήμα ενός κτιρίου ήταν η τεχνολογία του.',
                  en: 'Before electricity, the shape of a building was its technology.',
                },
              },
            },
          ],
        },
        {
          id: 'rhodes-archaeological-museum-marbles',
          emoji: '🗿',
          name: { el: 'Τα μάρμαρα', en: 'The marbles' },
          intro: {
            el:
              'Η αρχαία Ρόδος ήταν πλούσια από το εμπόριο και είχε δική της σχολή ' +
              'γλυπτικής, ξακουστή σε όλη τη Μεσόγειο. Αυτά που βλέπεις εδώ βγήκαν από τη ' +
              'γη του νησιού και από τον βυθό γύρω του. Δύο από αυτά είναι η ίδια θεά, σε ' +
              'δύο εντελώς διαφορετικές καταστάσεις.',
            en:
              'Ancient Rhodes grew rich on trade and had a school of sculpture of its own, ' +
              'famous across the Mediterranean. What you see here came out of the island’s ' +
              'soil and out of the sea around it. Two of these pieces are the same goddess, ' +
              'in two completely different conditions.',
          },
          exhibits: [
            {
              id: 'rhodes-archaeological-museum-aphrodite',
              name: { el: 'Η Αφροδίτη της Ρόδου', en: 'The Aphrodite of Rhodes' },
              blurb: {
                el:
                  'Μια μικρή μαρμάρινη μορφή γονατισμένη, που στύβει τα μαλλιά της αφού ' +
                  'βγήκε από τη θάλασσα. Είναι μια από τις πιο ήρεμες αρχαίες μορφές που ' +
                  'υπάρχουν: δεν ποζάρει, δεν κοιτάζει κανέναν, κάνει απλώς κάτι ' +
                  'καθημερινό. Φτιάχτηκε γύρω στον 1ο αιώνα π.Χ. Το μάρμαρο είναι λεπτό ' +
                  'δουλεμένο στα μαλλιά, όπου φαίνονται οι τούφες βαριές από το νερό, κάτι ' +
                  'πολύ δύσκολο να σκαλιστεί σε πέτρα.',
                en:
                  'A small marble figure kneeling, wringing out her hair after coming out of ' +
                  'the sea. She is one of the calmest ancient figures anywhere: she is not ' +
                  'posing, not looking at anybody, just doing something ordinary. She was ' +
                  'carved around the 1st century BC. The marble is worked finely in the hair, ' +
                  'where you can see the locks hanging heavy with water, which is extremely ' +
                  'hard to carve in stone.',
              },
              question: {
                q: {
                  el: 'Τι κάνει αυτή η μορφή;',
                  en: 'What is this figure doing?',
                },
                answers: [
                  { el: 'Στύβει τα μαλλιά της βγαίνοντας από τη θάλασσα', en: 'Wringing out her hair as she comes out of the sea' },
                  { el: 'Κρατάει ένα παιδί στην αγκαλιά της', en: 'Holding a child in her arms' },
                  { el: 'Τρέχει κρατώντας δάδα', en: 'Running with a torch' },
                  { el: 'Παίζει ένα μουσικό όργανο', en: 'Playing a musical instrument' },
                ],
                explanation: {
                  el: 'Είναι μια στιγμή χωρίς σπουδαιότητα, και γι’ αυτό ακριβώς σε κοιτάει ακόμα.',
                  en: 'It is a moment of no importance at all, which is exactly why it still holds you.',
                },
              },
            },
            {
              id: 'rhodes-archaeological-museum-marine-venus',
              name: { el: 'Η θαλασσινή Αφροδίτη', en: 'The Marine Venus' },
              blurb: {
                el:
                  'Η δεύτερη Αφροδίτη του μουσείου βρέθηκε στον βυθό, και φαίνεται. Το ' +
                  'πρόσωπό της είναι φαγωμένο, οι λεπτομέρειες έχουν λειάνει, και το ' +
                  'μάρμαρο μοιάζει να έχει λιώσει λίγο. Αυτό το έκανε η θάλασσα σε ' +
                  'αιώνες: το αλάτι, η άμμος και μικροί οργανισμοί που τρώνε την επιφάνεια. ' +
                  'Πολλοί τη βρίσκουν πιο συγκινητική έτσι απ’ ό,τι αν ήταν ολόκληρη. ' +
                  'Ένας συγγραφέας που έζησε στη Ρόδο έγραψε ένα βιβλίο με το όνομά της.',
                en:
                  'The museum’s second Aphrodite was found on the sea floor, and it shows. ' +
                  'Her face is eaten away, the detail has gone smooth, and the marble looks ' +
                  'as though it has melted slightly. The sea did that over centuries: salt, ' +
                  'sand and small organisms that feed on the surface. Many people find her ' +
                  'more moving like this than she would be intact. A writer who lived on ' +
                  'Rhodes named a book after her.',
              },
              question: {
                q: {
                  el: 'Γιατί είναι φαγωμένο το πρόσωπό της;',
                  en: 'Why is her face worn away?',
                },
                answers: [
                  { el: 'Γιατί έμεινε αιώνες μέσα στη θάλασσα', en: 'Because she spent centuries in the sea' },
                  { el: 'Γιατί τη χτύπησαν επίτηδες', en: 'Because she was deliberately damaged' },
                  { el: 'Γιατί ο γλύπτης δεν την τελείωσε', en: 'Because the sculptor never finished her' },
                  { el: 'Γιατί την έκαψε φωτιά', en: 'Because a fire burned her' },
                ],
                explanation: {
                  el:
                    'Η θάλασσα προστατεύει τον χαλκό και τρώει το μάρμαρο. Το ίδιο νερό, ' +
                    'δύο εντελώς αντίθετα αποτελέσματα.',
                  en:
                    'The sea protects bronze and eats marble. The same water, two completely ' +
                    'opposite results.',
                },
              },
            },
            {
              id: 'rhodes-archaeological-museum-krito-timarista',
              name: { el: 'Η Κριτώ και η Τιμαρίστα', en: 'Krito and Timarista' },
              blurb: {
                el:
                  'Μια επιτύμβια πλάκα του 5ου αιώνα π.Χ. με δύο γυναίκες: μια κόρη που ' +
                  'αγκαλιάζει τη μητέρα της. Τα ονόματά τους είναι χαραγμένα από πάνω. Το ' +
                  'εκπληκτικό είναι πόσο απλά λέγεται ο αποχαιρετισμός: δεν υπάρχουν θεοί, ' +
                  'ούτε σύμβολα, ούτε λόγια. Μόνο δύο σώματα που ακουμπούν. Τα αρχαία ' +
                  'επιτύμβια της Ρόδου είναι γεμάτα τέτοιες σκηνές, και μας έχουν αφήσει ' +
                  'εκατοντάδες ονόματα ανθρώπων που αλλιώς δεν θα ξέραμε ότι υπήρξαν.',
                en:
                  'A grave relief from the 5th century BC showing two women: a daughter ' +
                  'embracing her mother. Their names are cut above them. What is remarkable ' +
                  'is how plainly the goodbye is said: no gods, no symbols, no words. Only ' +
                  'two bodies touching. The ancient grave stones of Rhodes are full of scenes ' +
                  'like this, and they have left us hundreds of names of people we would ' +
                  'otherwise never know had existed.',
              },
              question: {
                q: {
                  el: 'Τι δείχνει αυτή η επιτύμβια πλάκα;',
                  en: 'What does this grave relief show?',
                },
                answers: [
                  { el: 'Μια κόρη που αγκαλιάζει τη μητέρα της', en: 'A daughter embracing her mother' },
                  { el: 'Δύο στρατιώτες που χαιρετούν', en: 'Two soldiers saluting' },
                  { el: 'Έναν θεό που παίρνει μια ψυχή', en: 'A god taking a soul away' },
                  { el: 'Δύο εμπόρους που κλείνουν συμφωνία', en: 'Two merchants closing a deal' },
                ],
                explanation: {
                  el: 'Χωρίς θεούς και χωρίς σύμβολα. Γι’ αυτό διαβάζεται αμέσως, δυόμισι χιλιετίες μετά.',
                  en: 'No gods, no symbols. Which is why it reads instantly, two and a half millennia later.',
                },
              },
            },
            {
              id: 'rhodes-archaeological-museum-vases',
              name: { el: 'Τα αγγεία της Καμείρου', en: 'The vases from Kameiros' },
              blurb: {
                el:
                  'Πήλινα αγγεία με ζώα σε σειρές: αίγαγροι, λιοντάρια, πουλιά, ελάφια, ' +
                  'το ένα πίσω από το άλλο σαν πομπή. Είναι ροδιακά και φτιάχτηκαν τον 7ο ' +
                  'και 6ο αιώνα π.Χ., όταν το νησί εμπορευόταν με την Αίγυπτο και την ' +
                  'Ανατολή. Αυτό φαίνεται στα σχέδια: κάποια ζώα πάνω τους δεν ζούσαν ποτέ ' +
                  'στη Ρόδο, και κάποια δεν ζούσαν πουθενά. Οι ζωγράφοι αντέγραφαν ' +
                  'εικόνες που έρχονταν με τα καράβια, και τις ανακάτευαν με τη φαντασία ' +
                  'τους.',
                en:
                  'Clay vases with animals in bands: wild goats, lions, birds, deer, one ' +
                  'behind another like a procession. They are Rhodian, made in the 7th and ' +
                  '6th centuries BC, when the island traded with Egypt and the East. You can ' +
                  'see it in the designs: some of the animals on them never lived on Rhodes, ' +
                  'and some never lived anywhere. The painters copied images that arrived on ' +
                  'ships and mixed them with their own imagination.',
              },
              question: {
                q: {
                  el: 'Γιατί υπάρχουν ζώα που δεν ζούσαν ποτέ στη Ρόδο;',
                  en: 'Why are there animals on them that never lived on Rhodes?',
                },
                answers: [
                  {
                    el: 'Γιατί οι ζωγράφοι αντέγραφαν εικόνες που έφταναν με τα καράβια',
                    en: 'Because the painters copied images that arrived on ships',
                  },
                  { el: 'Γιατί τα ζώα είχαν εξαφανιστεί πρόσφατα', en: 'Because those animals had recently died out' },
                  { el: 'Γιατί τα αγγεία φτιάχτηκαν αλλού', en: 'Because the vases were made somewhere else' },
                  { el: 'Γιατί ήταν λάθος του καλουπιού', en: 'Because the mould was faulty' },
                ],
                explanation: {
                  el:
                    'Το εμπόριο δεν μετέφερε μόνο πράγματα. Μετέφερε και εικόνες, και οι ' +
                    'εικόνες ταξιδεύουν πιο μακριά από τα ζώα.',
                  en:
                    'Trade did not only carry goods. It carried pictures, and pictures travel ' +
                    'further than animals do.',
                },
              },
            },
          ],
        },
      ],
      riddles: [
        {
          id: 'rhodes-archaeological-museum-riddle-1',
          difficulty: 1,
          prompt: {
            el:
              'Είμαι γονατιστή και στύβω τα μαλλιά μου. Μόλις βγήκα από τη θάλασσα και δεν ' +
              'κοιτάζω κανέναν. Κάνω κάτι που κάνεις κι εσύ μετά το μπάνιο.',
            en:
              'I am kneeling and wringing out my hair. I have just come out of the sea and I ' +
              'am not looking at anybody. I am doing something you do after a swim.',
          },
          hint: {
            el: 'Είμαι μικρή, και το μάρμαρό μου είναι ολόκληρο.',
            en: 'I am small, and my marble is unbroken.',
          },
          answerExhibitId: 'rhodes-archaeological-museum-aphrodite',
        },
        {
          id: 'rhodes-archaeological-museum-riddle-2',
          difficulty: 2,
          prompt: {
            el:
              'Κι εγώ ήρθα από τη θάλασσα, αλλά εκείνη με κράτησε αιώνες. Το πρόσωπό μου ' +
              'έχει λειάνει και μοιάζω να έχω λιώσει. Πολλοί με βρίσκουν ωραιότερη έτσι.',
            en:
              'I came from the sea as well, but it kept me for centuries. My face has gone ' +
              'smooth and I look as though I have melted. Many people find me better this ' +
              'way.',
          },
          hint: {
            el: 'Δεν είμαι γονατιστή.',
            en: 'I am not kneeling.',
          },
          answerExhibitId: 'rhodes-archaeological-museum-marine-venus',
        },
        {
          id: 'rhodes-archaeological-museum-riddle-3',
          difficulty: 3,
          prompt: {
            el:
              'Είμαι τοίχος, όχι αντικείμενο, και είμαι σχεδόν πενήντα μέτρα μακρύς. Εδώ ' +
              'κοιμήθηκαν άρρωστοι πριν από πεντακόσια χρόνια, ο καθένας πίσω από μια ' +
              'κουρτίνα.',
            en:
              'I am a wall, not an object, and I am almost fifty metres long. Sick people ' +
              'slept here five hundred years ago, each one behind a curtain.',
          },
          hint: {
            el: 'Τα παράθυρά μου είναι μικρά και πολύ ψηλά.',
            en: 'My windows are small and very high up.',
          },
          answerExhibitId: 'rhodes-archaeological-museum-great-ward',
        },
      ],
    },
  },

  // -------------------------------------------------------------------- aquarium
  {
    id: 'rhodes-aquarium',
    cityId: 'rhodes',
    emoji: '🐙',
    category: 'museum',
    difficulty: 1,

    name: { el: 'Ενυδρείο Ρόδου', en: 'The Aquarium of Rhodes' },
    tagline: {
      el: 'Μια ψεύτικη σπηλιά στο βόρειο άκρο του νησιού',
      en: 'A pretend sea cave at the northern tip of the island',
    },
    story: {
      el:
        'Στη βορινή μύτη της Ρόδου, εκεί που το νησί τελειώνει και οι θάλασσες γύρω του ' +
        'συναντιούνται, στέκεται ένα λευκό κτίριο με αυστηρές γραμμές, χτισμένο στη ' +
        'δεκαετία του 1930. Δεν φτιάχτηκε για τουρίστες: ήταν ερευνητικό ινστιτούτο για ' +
        'τη μελέτη της θάλασσας, και ερευνητικός σταθμός παραμένει ως σήμερα. Στο υπόγειο ' +
        'όμως έκαναν κάτι πιο έξυπνο από απλές βιτρίνες. Έσκαψαν έναν διάδρομο και τον ' +
        'διαμόρφωσαν ώστε να μοιάζει με θαλάσσια σπηλιά, με βράχια, χαμηλή οροφή και ' +
        'δεξαμενές ανοιγμένες μέσα στους τοίχους. Περπατάς δηλαδή σαν να είσαι κάτω από ' +
        'το νερό, με τα ψάρια δεξιά κι αριστερά σου. Στον επάνω όροφο υπάρχει το μουσείο, ' +
        'με διατηρημένα ζώα της Μεσογείου που κανείς δεν θα συναντούσε ζωντανά. Είναι ' +
        'κτίριο που κάνει δύο δουλειές ταυτόχρονα, και καμία από τις δύο δεν είναι ' +
        'διακοσμητική.',
      en:
        'At the northern tip of Rhodes, where the island runs out and the seas around it ' +
        'meet, stands a white building with severe straight lines, put up in the 1930s. It ' +
        'was not built for tourists: it was a research institute for the study of the sea, ' +
        'and it remains a research station today. In the basement, though, they did ' +
        'something cleverer than plain display cases. They cut a corridor and shaped it to ' +
        'look like a sea cave, with rock, a low ceiling and tanks opened into the walls. So ' +
        'you walk as though you were under the water, with fish to the left and right of ' +
        'you. Upstairs is the museum, with preserved Mediterranean animals nobody would ' +
        'ever meet alive.',
    },
    facts: [
      {
        el: 'Χτίστηκε στη δεκαετία του 1930 ως ερευνητικό ινστιτούτο, όχι ως αξιοθέατο.',
        en: 'It was built in the 1930s as a research institute, not as an attraction.',
      },
      {
        el: 'Το υπόγειό του είναι διαμορφωμένο σαν θαλάσσια σπηλιά.',
        en: 'Its basement is shaped to look like a sea cave.',
      },
      {
        el: 'Λειτουργεί ακόμα ως ερευνητικός σταθμός θαλάσσιας βιολογίας.',
        en: 'It still works as a marine biology research station.',
      },
    ],
    location: {
      lat: 36.4571,
      lng: 28.2207,
      anchor: 'centroid',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q31833', deltaM: 0 },
        { kind: 'osm', ref: 'way/156945097', deltaM: 7 },
        { kind: 'wikipedia', ref: 'Aquarium of Rhodes', deltaM: 0 },
      ],
      verifiedAt: '2026-09-11',
    },
    question: {
      q: {
        el: 'Για ποιον λόγο χτίστηκε αρχικά αυτό το κτίριο;',
        en: 'What was this building originally built for?',
      },
      answers: [
        {
          el: 'Για την επιστημονική μελέτη της θάλασσας',
          en: 'For the scientific study of the sea',
        },
        { el: 'Για να υποδέχεται επισκέπτες από καράβια', en: 'To receive visitors arriving by ship' },
        { el: 'Ως φάρος για τα πλοία', en: 'As a lighthouse for shipping' },
        { el: 'Ως κατοικία του κυβερνήτη', en: 'As the governor’s residence' },
      ],
      explanation: {
        el:
          'Το ενυδρείο ήρθε μετά, ως τρόπος να δείξει η έρευνα τι μελετάει. Ο σταθμός ' +
          'δουλεύει ακόμα.',
        en:
          'The aquarium came afterwards, as a way for the research to show what it studies. ' +
          'The station is still working.',
      },
    },

    museum: {
      doorNote: {
        el: 'Κατέβα πρώτα. Η σπηλιά είναι κάτω, και εκεί είναι τα ζωντανά.',
        en: 'Go down first. The cave is below, and that is where the living things are.',
      },
      rooms: [
        {
          id: 'rhodes-aquarium-cave',
          emoji: '🌊',
          name: { el: 'Η σπηλιά', en: 'The cave' },
          intro: {
            el:
              'Ο διάδρομος κάτω από το κτίριο δεν είναι φυσική σπηλιά, αλλά είναι ' +
              'φτιαγμένος να σε πείσει. Οι τοίχοι είναι τραχείς, η οροφή χαμηλή, το φως ' +
              'λίγο και γαλάζιο. Το σχέδιο έχει έναν σκοπό: να μη νιώθεις ότι κοιτάς μέσα ' +
              'σε ένα κουτί με νερό, αλλά ότι είσαι εσύ ο επισκέπτης στον δικό τους χώρο.',
            en:
              'The corridor under the building is not a natural cave, but it is built to ' +
              'convince you. The walls are rough, the ceiling low, the light dim and blue. ' +
              'The design has a purpose: not to make you feel you are looking into a box of ' +
              'water, but that you are the visitor in somebody else’s space.',
          },
          exhibits: [
            {
              id: 'rhodes-aquarium-tunnel',
              name: { el: 'Ο σκαμμένος διάδρομος', en: 'The cut corridor' },
              blurb: {
                el:
                  'Ο διάδρομος σκάφτηκε στον βράχο κάτω από το κτίριο τη δεκαετία του ' +
                  '1930 και διαμορφώθηκε ώστε να μοιάζει με σπηλιά. Οι δεξαμενές δεν ' +
                  'στέκονται πάνω σε τραπέζια: είναι ανοιγμένες μέσα στους τοίχους, σαν ' +
                  'παράθυρα. Το θαλασσινό νερό δεν είναι φτιαγμένο στο εργαστήριο, ' +
                  'αντλείται από τη θάλασσα δίπλα και επιστρέφει σε αυτήν. Είναι ένα ' +
                  'κτίριο που ζει με τον ίδιο ρυθμό με το νερό γύρω του.',
                en:
                  'The corridor was cut into the rock under the building in the 1930s and ' +
                  'shaped to look like a cave. The tanks do not stand on tables: they are ' +
                  'opened into the walls, like windows. The seawater is not mixed in a ' +
                  'laboratory, it is pumped in from the sea next door and returns to it. It ' +
                  'is a building living at the same rhythm as the water around it.',
              },
              question: {
                q: {
                  el: 'Από πού έρχεται το νερό στις δεξαμενές;',
                  en: 'Where does the water in the tanks come from?',
                },
                answers: [
                  { el: 'Αντλείται από τη θάλασσα δίπλα και επιστρέφει σε αυτήν', en: 'It is pumped from the sea next door and returns to it' },
                  { el: 'Φτιάχνεται στο εργαστήριο με αλάτι και νερό βρύσης', en: 'It is mixed in a laboratory from salt and tap water' },
                  { el: 'Μεταφέρεται με βυτία από άλλο νησί', en: 'It is trucked in from another island' },
                  { el: 'Μαζεύεται από τη βροχή', en: 'It is collected from rainfall' },
                ],
                explanation: {
                  el: 'Γι’ αυτό ακριβώς χτίστηκε στη μύτη του νησιού και όχι στο κέντρο της πόλης.',
                  en: 'Which is exactly why it was built at the island’s tip and not in the middle of town.',
                },
              },
            },
            {
              id: 'rhodes-aquarium-octopus',
              name: { el: 'Το χταπόδι', en: 'The octopus' },
              blurb: {
                el:
                  'Κοίτα προσεκτικά τον βράχο στη δεξαμενή του: πολύ συχνά δεν θα δεις ' +
                  'τίποτα, γιατί το χταπόδι αλλάζει χρώμα και υφή δέρματος σε λιγότερο από ' +
                  'δευτερόλεπτο και γίνεται πέτρα. Έχει εννιά εγκεφάλους, έναν κεντρικό ' +
                  'και έναν σε κάθε πλοκάμι, οπότε τα πλοκάμια του λύνουν προβλήματα ' +
                  'σχεδόν μόνα τους. Το αίμα του είναι γαλάζιο, επειδή μεταφέρει οξυγόνο ' +
                  'με χαλκό αντί για σίδερο. Είναι το πιο εξωγήινο πλάσμα που μπορείς να ' +
                  'συναντήσεις χωρίς να φύγεις από τη Μεσόγειο.',
                en:
                  'Look carefully at the rock in its tank: very often you will see nothing at ' +
                  'all, because an octopus can change the colour and the texture of its skin ' +
                  'in under a second and become stone. It has nine brains, one central and ' +
                  'one in each arm, so its arms solve problems almost by themselves. Its ' +
                  'blood is blue, because it carries oxygen using copper instead of iron. It ' +
                  'is the most alien creature you can meet without leaving the Mediterranean.',
              },
              question: {
                q: {
                  el: 'Γιατί είναι γαλάζιο το αίμα του χταποδιού;',
                  en: 'Why is an octopus’s blood blue?',
                },
                answers: [
                  { el: 'Γιατί μεταφέρει οξυγόνο με χαλκό αντί για σίδερο', en: 'Because it carries oxygen using copper instead of iron' },
                  { el: 'Γιατί ζει σε βαθιά γαλάζια νερά', en: 'Because it lives in deep blue water' },
                  { el: 'Γιατί τρώει γαλάζια φύκια', en: 'Because it eats blue seaweed' },
                  { el: 'Γιατί αντανακλά το χρώμα του δέρματός του', en: 'Because it reflects the colour of its skin' },
                ],
                explanation: {
                  el:
                    'Το δικό μας αίμα είναι κόκκινο για τον ίδιο λόγο, ανάποδα: κουβαλάει ' +
                    'οξυγόνο με σίδερο.',
                  en:
                    'Our blood is red for the same reason in reverse: it carries oxygen using ' +
                    'iron.',
                },
              },
            },
            {
              id: 'rhodes-aquarium-mediterranean-fish',
              name: { el: 'Τα ψάρια της διπλανής θάλασσας', en: 'The fish from the sea next door' },
              blurb: {
                el:
                  'Ροφοί, σαργοί, σκορπιοί, μουρούνες, σφυρίδες: ψάρια που κολυμπούν ' +
                  'ακριβώς έξω από το κτίριο. Πολλά από αυτά τα έχεις δει σε πιάτο και ' +
                  'ποτέ ζωντανά, και είναι εντελώς διαφορετικό πράγμα. Ο σκορπιός, για ' +
                  'παράδειγμα, δεν κολυμπάει σχεδόν καθόλου: κάθεται ακίνητος στον πάτο, ' +
                  'μοιάζει με πέτρα σκεπασμένη με φύκια και περιμένει. Οι δεξαμενές ' +
                  'δείχνουν και κάτι που δεν φαίνεται αλλού: σε ποιο βάθος και σε ποιο ' +
                  'είδος βυθού ζει το καθένα.',
                en:
                  'Groupers, sea bream, scorpionfish, moray eels, dusky perch: fish that swim ' +
                  'right outside the building. You have seen many of them on a plate and ' +
                  'never alive, and it is a completely different thing. The scorpionfish, for ' +
                  'instance, hardly swims at all: it sits still on the bottom looking like a ' +
                  'stone covered in weed, and waits. The tanks also show something you cannot ' +
                  'see anywhere else: what depth and what kind of sea floor each one lives on.',
              },
              question: {
                q: {
                  el: 'Πώς κυνηγάει ο σκορπιός;',
                  en: 'How does the scorpionfish hunt?',
                },
                answers: [
                  { el: 'Κάθεται ακίνητος, μοιάζει με πέτρα και περιμένει', en: 'It sits still, looks like a stone, and waits' },
                  { el: 'Κυνηγάει σε κοπάδια', en: 'It hunts in shoals' },
                  { el: 'Κολυμπάει πολύ γρήγορα σε ευθεία', en: 'It swims very fast in a straight line' },
                  { el: 'Σκάβει τον βυθό με την ουρά του', en: 'It digs the sea floor with its tail' },
                ],
                explanation: {
                  el: 'Η καμουφλάζ είναι φθηνότερη από την ταχύτητα. Κοστίζει μόνο υπομονή.',
                  en: 'Camouflage is cheaper than speed. It only costs patience.',
                },
              },
            },
          ],
        },
        {
          id: 'rhodes-aquarium-museum-floor',
          emoji: '🐋',
          name: { el: 'Ο επάνω όροφος', en: 'The floor above' },
          intro: {
            el:
              'Εδώ τίποτα δεν είναι ζωντανό, και αυτό είναι όλο το νόημα. Το μουσείο ' +
              'κρατάει ζώα που ξεβράστηκαν ή πιάστηκαν κατά λάθος στα δίχτυα, ώστε να ' +
              'μπορούν οι επιστήμονες, και εσύ, να δουν από κοντά πλάσματα που κανείς δεν ' +
              'συναντάει ποτέ ζωντανά.',
            en:
              'Nothing here is alive, and that is the entire point. The museum keeps animals ' +
              'that washed ashore or were caught by accident in nets, so that scientists, ' +
              'and you, can look closely at creatures nobody ever meets alive. Every one of ' +
              'them is here because something went wrong out at sea.',
          },
          exhibits: [
            {
              id: 'rhodes-aquarium-whale-bones',
              name: { el: 'Τα κόκαλα της φάλαινας', en: 'The whale bones' },
              blurb: {
                el:
                  'Στη Μεσόγειο ζουν φάλαινες, κάτι που ξαφνιάζει σχεδόν όλους. Όταν μία ' +
                  'ξεβραστεί σε ακτή, οι επιστήμονες προσπαθούν να μάθουν γιατί πέθανε, ' +
                  'και μετά ο σκελετός καθαρίζεται και φυλάσσεται. Στέκεσαι δίπλα του και ' +
                  'καταλαβαίνεις το μέγεθος με τρόπο που δεν σου δίνει καμία φωτογραφία. ' +
                  'Πρόσεξε τα οστά κοντά στην ουρά, εκεί όπου το ζώο είχε κάποτε πόδια: ' +
                  'οι φάλαινες κατάγονται από ζώα που περπατούσαν στη στεριά.',
                en:
                  'There are whales in the Mediterranean, which surprises almost everybody. ' +
                  'When one washes ashore, scientists try to learn why it died, and then the ' +
                  'skeleton is cleaned and kept. Standing next to it you understand the size ' +
                  'in a way no photograph gives you. Look at the bones near the tail, where ' +
                  'the animal once had legs: whales are descended from animals that walked on ' +
                  'land.',
              },
              question: {
                q: {
                  el: 'Τι μας λένε τα μικρά οστά κοντά στην ουρά μιας φάλαινας;',
                  en: 'What do the small bones near a whale’s tail tell us?',
                },
                answers: [
                  { el: 'Ότι οι πρόγονοί της περπατούσαν στη στεριά', en: 'That its ancestors walked on land' },
                  { el: 'Ότι κάποτε είχε δεύτερη ουρά', en: 'That it once had a second tail' },
                  { el: 'Ότι ήταν τραυματισμένη', en: 'That it had been injured' },
                  { el: 'Ότι ήταν πολύ νεαρή', en: 'That it was very young' },
                ],
                explanation: {
                  el: 'Είναι υπολείμματα ποδιών. Η εξέλιξη δεν σβήνει, απλώς σταματάει να χρησιμοποιεί.',
                  en: 'They are the remains of legs. Evolution does not erase; it just stops using.',
                },
              },
            },
            {
              id: 'rhodes-aquarium-turtles',
              name: { el: 'Οι θαλάσσιες χελώνες', en: 'The sea turtles' },
              blurb: {
                el:
                  'Η καρέτα καρέτα γεννάει στις ελληνικές παραλίες και ζει δεκαετίες. Οι ' +
                  'χελώνες που φυλάσσονται εδώ βρέθηκαν νεκρές, και οι περισσότερες για ' +
                  'λόγους που φτιάξαμε εμείς: πλαστικές σακούλες που τις μπέρδεψαν με ' +
                  'μέδουσες, αγκίστρια, δίχτυα, προπέλες. Είναι δύσκολο έκθεμα και γι’ ' +
                  'αυτό χρήσιμο. Μια χελώνα χρειάζεται περίπου είκοσι πέντε χρόνια για να ' +
                  'μεγαλώσει αρκετά ώστε να κάνει αυγά, οπότε κάθε μία που χάνεται νωρίς ' +
                  'κοστίζει στον πληθυσμό πολύ περισσότερο από μία ζωή.',
                en:
                  'The loggerhead turtle nests on Greek beaches and lives for decades. The ' +
                  'turtles kept here were found dead, and most of them for reasons we made: ' +
                  'plastic bags they mistook for jellyfish, hooks, nets, propellers. It is a ' +
                  'hard exhibit and that is what makes it useful. A turtle needs about ' +
                  'twenty-five years to grow old enough to lay eggs, so every one lost early ' +
                  'costs the population far more than a single life.',
              },
              question: {
                q: {
                  el: 'Γιατί μπερδεύουν οι χελώνες τις πλαστικές σακούλες;',
                  en: 'Why do turtles get confused by plastic bags?',
                },
                answers: [
                  { el: 'Γιατί μοιάζουν με μέδουσες, που είναι τροφή τους', en: 'Because they look like jellyfish, which they eat' },
                  { el: 'Γιατί τις θεωρούν καταφύγιο', en: 'Because they think they are shelter' },
                  { el: 'Γιατί μυρίζουν σαν φύκια', en: 'Because they smell like seaweed' },
                  { el: 'Γιατί κάνουν θόρυβο στο νερό', en: 'Because they make a noise in the water' },
                ],
                explanation: {
                  el: 'Μια σακούλα στο νερό κινείται όπως μια μέδουσα. Η χελώνα δεν κάνει λάθος, εμείς το κάναμε.',
                  en: 'A bag in water moves like a jellyfish. The turtle is not making a mistake; we made it.',
                },
              },
            },
            {
              id: 'rhodes-aquarium-monk-seal',
              name: { el: 'Η μεσογειακή φώκια', en: 'The Mediterranean monk seal' },
              blurb: {
                el:
                  'Η μεσογειακή φώκια μονάχους είναι από τα σπανιότερα θαλάσσια θηλαστικά ' +
                  'στον κόσμο, και η Ελλάδα φιλοξενεί το μεγαλύτερο κομμάτι του ' +
                  'πληθυσμού της. Ζει σε θαλασσινές σπηλιές με κρυφή είσοδο κάτω από το ' +
                  'νερό, όπου γεννάει τα μωρά της, και γι’ αυτό σχεδόν κανείς δεν τη ' +
                  'βλέπει. Το έκθεμα υπάρχει επειδή κάποιο ζώο βρέθηκε νεκρό, όχι επειδή ' +
                  'πιάστηκε. Αν κάποτε δεις μία στη θάλασσα, το σωστό είναι να μείνεις ' +
                  'μακριά και να μην την ακολουθήσεις στη σπηλιά της.',
                en:
                  'The Mediterranean monk seal is one of the rarest sea mammals in the world, ' +
                  'and Greece holds the largest part of what is left of it. It lives in sea ' +
                  'caves with hidden entrances below the waterline, where it has its pups, ' +
                  'which is why almost nobody sees one. The exhibit exists because an animal ' +
                  'was found dead, not because one was caught. If you ever do see one at sea, ' +
                  'the right thing is to stay away and not follow it into its cave.',
              },
              question: {
                q: {
                  el: 'Πού γεννάει τα μωρά της η μεσογειακή φώκια;',
                  en: 'Where does the Mediterranean monk seal have its pups?',
                },
                answers: [
                  { el: 'Σε θαλασσινές σπηλιές με είσοδο κάτω από το νερό', en: 'In sea caves with entrances below the waterline' },
                  { el: 'Σε ανοιχτές αμμουδιές με κόσμο', en: 'On open sandy beaches with people about' },
                  { el: 'Πάνω σε βράχια στη μέση του πελάγους', en: 'On rocks in the middle of the open sea' },
                  { el: 'Σε ποτάμια κοντά στις εκβολές', en: 'In rivers near their mouths' },
                ],
                explanation: {
                  el:
                    'Κρύβεται επειδή κυνηγήθηκε επί αιώνες. Η κρυψώνα της είναι ο λόγος που ' +
                    'υπάρχει ακόμα.',
                  en:
                    'It hides because it was hunted for centuries. Hiding is the reason it ' +
                    'still exists.',
                },
              },
            },
          ],
        },
      ],
      riddles: [
        {
          id: 'rhodes-aquarium-riddle-1',
          difficulty: 1,
          prompt: {
            el:
              'Έχω οκτώ χέρια και εννιά εγκεφάλους, και το αίμα μου δεν είναι κόκκινο. Αν ' +
              'δεν με βρίσκεις, κοίτα ξανά τον βράχο: πολύ πιθανόν ο βράχος να είμαι εγώ.',
            en:
              'I have eight arms and nine brains, and my blood is not red. If you cannot ' +
              'find me, look at the rock again: there is a good chance the rock is me.',
          },
          hint: {
            el: 'Αλλάζω χρώμα σε λιγότερο από δευτερόλεπτο.',
            en: 'I change colour in less than a second.',
          },
          answerExhibitId: 'rhodes-aquarium-octopus',
        },
        {
          id: 'rhodes-aquarium-riddle-2',
          difficulty: 2,
          prompt: {
            el:
              'Είμαι κόκαλα και τίποτα άλλο, και είμαι τεράστιος. Κοντά στην ουρά μου ' +
              'κρύβονται μικρά οστά που δεν χρειάζομαι πια: ανήκαν στα πόδια των προγόνων ' +
              'μου.',
            en:
              'I am bones and nothing else, and I am enormous. Near my tail there are small ' +
              'bones I no longer need: they belonged to my ancestors’ legs.',
          },
          hint: {
            el: 'Ζούσα στη Μεσόγειο, αν και σχεδόν κανείς δεν το πιστεύει.',
            en: 'I lived in the Mediterranean, although almost nobody believes it.',
          },
          answerExhibitId: 'rhodes-aquarium-whale-bones',
        },
      ],
    },
  },

  // ---------------------------------------------------------------- art gallery
  {
    id: 'rhodes-art-gallery',
    cityId: 'rhodes',
    emoji: '🖼️',
    category: 'art',
    difficulty: 3,

    name: { el: 'Δημοτική Πινακοθήκη Ρόδου', en: 'The Municipal Art Gallery of Rhodes' },
    tagline: {
      el: 'Ελληνική ζωγραφική του 20ού αιώνα, σε ένα νησί',
      en: 'Greek painting of the 20th century, on an island',
    },
    story: {
      el:
        'Οι μεγάλες συλλογές τέχνης μαζεύονται συνήθως σε πρωτεύουσες. Η Ρόδος έκανε κάτι ' +
        'ασυνήθιστο: από τη δεκαετία του 1960 άρχισε να αγοράζει έργα Ελλήνων ζωγράφων ' +
        'της εποχής της, συστηματικά, χρόνο με τον χρόνο. Το αποτέλεσμα είναι μία από τις ' +
        'σημαντικότερες συλλογές ελληνικής ζωγραφικής του 20ού αιώνα έξω από την Αθήνα, ' +
        'στεγασμένη σε κτίρια της παλιάς πόλης. Θα δεις τοπία, πορτρέτα, θάλασσες, ' +
        'αφηρημένα έργα, χαρακτικά. Το ενδιαφέρον για ένα παιδί δεν είναι τα ονόματα αλλά ' +
        'η σειρά: περπατάς μέσα σε έναν αιώνα και βλέπεις τη ζωγραφική να αλλάζει, από ' +
        'εικόνες που προσπαθούν να μοιάζουν με φωτογραφία σε εικόνες που δεν θέλουν να ' +
        'μοιάζουν με τίποτα. Καμία από τις δύο δεν είναι πιο σωστή από την άλλη, και ' +
        'κανένας ζωγράφος δεν ξύπνησε ένα πρωί και αποφάσισε να αλλάξει αιώνα.',
      en:
        'Great art collections usually gather in capital cities. Rhodes did something ' +
        'unusual: from the 1960s onwards it began buying work by Greek painters of its own ' +
        'day, steadily, year after year. The result is one of the most important ' +
        'collections of 20th-century Greek painting outside Athens, housed in buildings in ' +
        'the old town. You will find landscapes, portraits, seas, abstract work, prints. ' +
        'For a child the interesting part is not the names but the order: you walk through ' +
        'a century and watch painting change, from pictures trying to look like photographs ' +
        'to pictures that do not want to look like anything at all. Neither kind is more ' +
        'correct than the other, and no painter woke up one morning and decided to change ' +
        'century.',
    },
    facts: [
      {
        el: 'Η συλλογή χτίστηκε σταδιακά από τη δεκαετία του 1960.',
        en: 'The collection was built up gradually from the 1960s.',
      },
      {
        el: 'Είναι από τις σημαντικότερες συλλογές ελληνικής ζωγραφικής εκτός Αθήνας.',
        en: 'It is one of the most important collections of Greek painting outside Athens.',
      },
      {
        el: 'Στεγάζεται σε κτίρια μέσα στη μεσαιωνική πόλη.',
        en: 'It is housed in buildings inside the medieval town.',
      },
    ],
    location: {
      lat: 36.44605,
      lng: 28.22696,
      anchor: 'centroid',
      confidence: 'C',
      sources: [{ kind: 'wikidata', ref: 'Q66058061', deltaM: 0 }],
      verifiedAt: '2026-09-11',
      note: 'Grade C: Overpass returned a server error on this pass and there is no Wikipedia coordinate. Only Wikidata carries a point.',
    },
    question: {
      q: {
        el: 'Τι αλλάζει καθώς περνάς από αίθουσα σε αίθουσα εδώ;',
        en: 'What changes as you move from room to room here?',
      },
      answers: [
        {
          el: 'Ο τρόπος που ζωγραφίζουν οι άνθρωποι, μέσα σε έναν αιώνα',
          en: 'The way people paint, across one century',
        },
        { el: 'Το μέγεθος των πινάκων, από μικρό σε μεγάλο', en: 'The size of the paintings, from small to large' },
        { el: 'Η χώρα από την οποία προέρχονται τα έργα', en: 'The country the works come from' },
        { el: 'Το υλικό, από λάδι σε μάρμαρο', en: 'The material, from oil paint to marble' },
      ],
      explanation: {
        el:
          'Μια συλλογή που αγοράζει κάθε χρόνο καταγράφει τον χρόνο χωρίς να το ' +
          'προσπαθεί.',
        en:
          'A collection that buys something every year ends up recording time without ' +
          'trying to.',
      },
    },
  },

  // ------------------------------------------------------------------- acropolis
  {
    id: 'rhodes-acropolis',
    cityId: 'rhodes',
    emoji: '🏟️',
    category: 'history',
    difficulty: 2,

    name: { el: 'Ακρόπολη της Ρόδου', en: 'The Acropolis of Rhodes' },
    tagline: {
      el: 'Η αρχαία πόλη που σχεδιάστηκε πριν χτιστεί',
      en: 'The ancient city that was designed before it was built',
    },
    story: {
      el:
        'Στον λόφο πάνω από τη σύγχρονη πόλη σώζονται ο ναός του Απόλλωνα, ένα μικρό ' +
        'μαρμάρινο ωδείο και ένα στάδιο περίπου διακοσίων μέτρων. Αλλά το σημαντικότερο ' +
        'εδώ δεν είναι κτίριο: είναι το σχέδιο. Η αρχαία Ρόδος ιδρύθηκε το 408 π.Χ. από ' +
        'την ένωση τριών παλαιότερων πόλεων, και δεν μεγάλωσε τυχαία όπως οι περισσότερες ' +
        'πόλεις. Σχεδιάστηκε πρώτα, με δρόμους που τέμνονται σε ορθές γωνίες, όπως ' +
        'δίδασκε ο Ιππόδαμος ο Μιλήσιος. Οι αρχαίοι συγγραφείς την περιέγραφαν ως την πιο ' +
        'όμορφη πόλη που είχαν δει, και το εντυπωσιακό είναι ότι το σχέδιο εκείνο ' +
        'υπάρχει ακόμα: αρκετοί δρόμοι της σημερινής Ρόδου ακολουθούν τις ίδιες γραμμές, ' +
        'δυόμισι χιλιάδες χρόνια μετά. Ο λόφος λέγεται σήμερα Μόντε Σμιθ, από έναν Άγγλο ' +
        'ναύαρχο που παρακολουθούσε από εκεί τη θάλασσα τον 19ο αιώνα.',
      en:
        'On the hill above the modern town stand the temple of Apollo, a small marble odeon ' +
        'and a stadium of about two hundred metres. But the most important thing here is ' +
        'not a building: it is the plan. Ancient Rhodes was founded in 408 BC by the union ' +
        'of three older cities, and it did not sprawl the way most cities do. It was ' +
        'designed first, with streets crossing at right angles, in the way taught by ' +
        'Hippodamus of Miletus. Ancient writers described it as the most beautiful city ' +
        'they had seen, and the striking part is that the plan is still there: a good many ' +
        'streets in modern Rhodes follow the same lines, two and a half thousand years ' +
        'later.',
    },
    facts: [
      {
        el: 'Η αρχαία πόλη ιδρύθηκε το 408 π.Χ. από την ένωση τριών πόλεων.',
        en: 'The ancient city was founded in 408 BC by the union of three cities.',
      },
      {
        el: 'Σχεδιάστηκε με δρόμους σε ορθές γωνίες, πριν χτιστεί.',
        en: 'It was laid out on a grid of right angles before it was built.',
      },
      {
        el: 'Το στάδιό της έχει μήκος περίπου 200 μέτρα.',
        en: 'Its stadium is about 200 metres long.',
      },
    ],
    location: {
      lat: 36.4402,
      lng: 28.2109,
      anchor: 'area',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q3557443', deltaM: 0 },
        { kind: 'osm', ref: 'relation/20438585', deltaM: 210 },
        { kind: 'wikipedia', ref: 'Acropolis of Rhodes', deltaM: 0 },
      ],
      verifiedAt: '2026-09-11',
      note: 'An area pin. The OSM outline covers the whole archaeological zone, so its centre is 210 m away.',
    },
    question: {
      q: {
        el: 'Τι είχε η αρχαία Ρόδος που δεν είχαν οι περισσότερες πόλεις;',
        en: 'What did ancient Rhodes have that most cities did not?',
      },
      answers: [
        {
          el: 'Σχέδιο με ίσιους δρόμους, φτιαγμένο πριν από το χτίσιμο',
          en: 'A plan of straight streets, drawn before any building started',
        },
        { el: 'Τείχη από καθαρό μάρμαρο', en: 'Walls of solid marble' },
        { el: 'Δρόμους μόνο για πεζούς', en: 'Streets for pedestrians only' },
        { el: 'Κανένα λιμάνι', en: 'No harbour at all' },
      ],
      explanation: {
        el:
          'Οι περισσότερες αρχαίες πόλεις μεγάλωσαν γύρω από μονοπάτια. Αυτή ξεκίνησε από ' +
          'χαρτί.',
        en:
          'Most ancient cities grew around footpaths. This one started on paper.',
      },
    },
  },

  // ------------------------------------------------------------- diagoras stadium
  {
    id: 'rhodes-diagoras-stadium',
    cityId: 'rhodes',
    emoji: '⚽',
    category: 'sport',
    difficulty: 1,

    name: { el: 'Στάδιο Διαγόρας', en: 'The Diagoras Stadium' },
    tagline: {
      el: 'Το όνομα ενός πυγμάχου που τον σήκωσαν στα χέρια οι γιοι του',
      en: 'Named for a boxer whose sons carried him on their shoulders',
    },
    story: {
      el:
        'Το γήπεδο της πόλης έχει το όνομα ενός αληθινού ανθρώπου. Ο Διαγόρας ο Ρόδιος ' +
        'ήταν πυγμάχος και νίκησε στην Ολυμπία το 464 π.Χ. Δεν έμεινε όμως γνωστός για ' +
        'τη δική του νίκη. Έμεινε γιατί νίκησαν και τα παιδιά του. Σε μία γιορτή στην ' +
        'Ολυμπία, δύο γιοι του στεφανώθηκαν την ίδια μέρα, και μόλις τελείωσαν τους ' +
        'αγώνες τους τον σήκωσαν στους ώμους τους και τον περιέφεραν μέσα στο στάδιο, ' +
        'ενώ ο κόσμος έριχνε λουλούδια. Κάποιος από τις κερκίδες φώναξε ότι τώρα δεν του ' +
        'μένει τίποτα άλλο να ευχηθεί. Ο Διαγόρας πέθανε εκείνη την ίδια μέρα, εκεί, στα ' +
        'χέρια των γιων του, και η ιστορία ταξίδεψε για αιώνες ως παράδειγμα της ' +
        'ευτυχέστερης δυνατής στιγμής. Το γήπεδο της Ρόδου κρατάει αυτό το όνομα, και η ' +
        'ομάδα της πόλης παίζει εκεί κάθε Κυριακή.',
      en:
        'The town’s football ground is named after a real person. Diagoras of Rhodes was a ' +
        'boxer and won at Olympia in 464 BC. He is not remembered for his own victory, ' +
        'though. He is remembered because his children won too. At one festival at Olympia ' +
        'two of his sons were crowned on the same day, and the moment their contests ended ' +
        'they lifted him onto their shoulders and carried him around the stadium while the ' +
        'crowd threw flowers. Somebody in the stands shouted that there was nothing left ' +
        'for him to wish for. Diagoras died that same day, there, in his sons’ arms, and ' +
        'the story travelled for centuries as an example of the happiest moment a person ' +
        'can have.',
    },
    facts: [
      {
        el: 'Ο Διαγόρας ο Ρόδιος νίκησε στην πυγμαχία στην Ολυμπία το 464 π.Χ.',
        en: 'Diagoras of Rhodes won the boxing at Olympia in 464 BC.',
      },
      {
        el: 'Δύο γιοι του στεφανώθηκαν στην Ολυμπία την ίδια μέρα.',
        en: 'Two of his sons were crowned at Olympia on the same day.',
      },
      {
        el: 'Το γήπεδο της πόλης φέρει το όνομά του ως σήμερα.',
        en: 'The town’s stadium still carries his name today.',
      },
    ],
    location: {
      lat: 36.43823,
      lng: 28.22823,
      anchor: 'centroid',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q5270378', deltaM: 0 },
        { kind: 'osm', ref: 'way/117916959', deltaM: 13 },
        { kind: 'wikipedia', ref: 'Diagoras Stadium', deltaM: 0 },
      ],
      verifiedAt: '2026-09-11',
    },
    question: {
      q: {
        el: 'Γιατί έμεινε γνωστός ο Διαγόρας;',
        en: 'Why is Diagoras remembered?',
      },
      answers: [
        {
          el: 'Γιατί νίκησαν και τα παιδιά του, και τον σήκωσαν στα χέρια',
          en: 'Because his children won too, and carried him on their shoulders',
        },
        {
          el: 'Γιατί νίκησε σε τέσσερα διαφορετικά αθλήματα',
          en: 'Because he won in four different sports',
        },
        {
          el: 'Γιατί έχτισε ο ίδιος το στάδιο της Ολυμπίας',
          en: 'Because he built the stadium at Olympia himself',
        },
        {
          el: 'Γιατί ήταν ο πρώτος νικητής των Ολυμπιακών',
          en: 'Because he was the first ever Olympic champion',
        },
      ],
      explanation: {
        el:
          'Η δική του νίκη ξεχάστηκε. Η εικόνα του πατέρα στους ώμους των γιων του δεν ' +
          'ξεχάστηκε ποτέ.',
        en:
          'His own victory was forgotten. The picture of a father on his sons’ shoulders ' +
          'never was.',
      },
    },
  },

  // ------------------------------------------------------------------- kallithea
  {
    id: 'rhodes-kallithea',
    cityId: 'rhodes',
    emoji: '⛲',
    category: 'landmark',
    difficulty: 1,

    name: { el: 'Θέρμες Καλλιθέας', en: 'The Kallithea Springs' },
    tagline: {
      el: 'Λουτρά με τρούλους και βότσαλα, φτιαγμένα για ένα νερό',
      en: 'Domed baths of pebble mosaic, built for one spring',
    },
    story: {
      el:
        'Σε ένα μικρό κόλπο νότια της πόλης υπάρχει μια πηγή που ήταν γνωστή από την ' +
        'αρχαιότητα, γιατί οι άνθρωποι πίστευαν ότι το νερό της βοηθούσε το στομάχι. Το ' +
        '1929, όταν τα Δωδεκάνησα ήταν υπό ιταλική διοίκηση, ένας νέος αρχιτέκτονας ' +
        'σχεδίασε γύρω από την πηγή ένα ολόκληρο συγκρότημα λουτρών: τρούλους, ' +
        'ημικυκλικές στοές, σκάλες που κατεβαίνουν στη θάλασσα. Τα δάπεδα είναι στρωμένα ' +
        'με βότσαλα άσπρα και μαύρα, μαζεμένα από τις παραλίες και βαλμένα ένα ένα σε ' +
        'σχέδια. Τα λουτρά έκλεισαν τη δεκαετία του 1960 και εγκαταλείφθηκαν για πάνω από ' +
        'σαράντα χρόνια, με τα κτίρια να γεμίζουν χόρτα. Αποκαταστάθηκαν και άνοιξαν ξανά ' +
        'το 2007. Σήμερα κανείς δεν πίνει το νερό, αλλά όλοι κολυμπούν στον κόλπο, και τα ' +
        'βότσαλα στο δάπεδο πατιούνται ξανά κάθε καλοκαίρι.',
      en:
        'In a small bay south of the town there is a spring that was known in antiquity, ' +
        'because people believed its water helped the stomach. In 1929, when the Dodecanese ' +
        'were under Italian administration, a young architect designed a whole complex of ' +
        'baths around it: domes, semicircular colonnades, staircases going down to the sea. ' +
        'The floors are laid with black and white pebbles, gathered from the beaches and ' +
        'set one at a time into patterns. The baths closed in the 1960s and were abandoned ' +
        'for more than forty years, with weeds coming up through the buildings. They were ' +
        'restored and reopened in 2007. Today nobody drinks the water, but everybody swims ' +
        'in the bay, and the pebble floors are walked on again every summer.',
    },
    facts: [
      {
        el: 'Το συγκρότημα χτίστηκε γύρω στο 1929, γύρω από μια αρχαία γνωστή πηγή.',
        en: 'The complex was built around 1929, around a spring known since antiquity.',
      },
      {
        el: 'Τα δάπεδά του είναι στρωμένα με βότσαλα, ένα ένα, σε σχέδια.',
        en: 'Its floors are laid with beach pebbles, one at a time, in patterns.',
      },
      {
        el: 'Εγκαταλείφθηκε για πάνω από σαράντα χρόνια και άνοιξε ξανά το 2007.',
        en: 'It was abandoned for over forty years and reopened in 2007.',
      },
    ],
    location: {
      lat: 36.37767,
      lng: 28.23726,
      anchor: 'centroid',
      confidence: 'C',
      sources: [{ kind: 'wikidata', ref: 'Q38282898', deltaM: 0 }],
      verifiedAt: '2026-09-11',
      note: 'Grade C: neither OpenStreetMap nor Wikipedia carries a matching coordinate. Wikidata is the only source.',
    },
    question: {
      q: {
        el: 'Γιατί χτίστηκαν λουτρά ακριβώς σε αυτό το σημείο;',
        en: 'Why were baths built at exactly this spot?',
      },
      answers: [
        {
          el: 'Γιατί εκεί βγαίνει πηγή που τη θεωρούσαν θεραπευτική',
          en: 'Because a spring rises there that people thought healing',
        },
        { el: 'Γιατί ήταν το μόνο μέρος με άμμο', en: 'Because it was the only place with sand' },
        { el: 'Γιατί ήταν κοντά στο λιμάνι', en: 'Because it was close to the harbour' },
        { el: 'Γιατί εκεί υπήρχε ήδη αρχαίος ναός', en: 'Because an ancient temple already stood there' },
      ],
      explanation: {
        el:
          'Ολόκληρο κτίριο χτίστηκε γύρω από ένα νερό. Όταν σταμάτησαν να το πίνουν, το ' +
          'κτίριο έμεινε ορφανό.',
        en:
          'A whole building was raised around one spring. When people stopped drinking it, ' +
          'the building was left with no purpose.',
      },
    },
  },

  // ------------------------------------------------------------------- filerimos
  {
    id: 'rhodes-filerimos',
    cityId: 'rhodes',
    emoji: '🦚',
    category: 'nature',
    difficulty: 2,

    name: { el: 'Φιλέρημος', en: 'Filerimos' },
    tagline: {
      el: 'Ένας λόφος με αρχαία πόλη, μοναστήρι και παγόνια',
      en: 'A hill with an ancient city, a monastery and peacocks',
    },
    story: {
      el:
        'Ο Φιλέρημος είναι λόφος περίπου διακοσίων εβδομήντα μέτρων, με θέα σε όλη τη ' +
        'βορειοδυτική ακτή. Πάνω του βρισκόταν η Ιαλυσός, μία από τις τρεις αρχαίες ' +
        'πόλεις του νησιού που ενώθηκαν για να φτιάξουν τη Ρόδο. Σώζονται τα θεμέλια ναού ' +
        'της Αθηνάς και μια δωρική κρήνη λαξευμένη στον βράχο. Δίπλα τους στέκεται ' +
        'μοναστήρι που έχτισαν οι Ιππότες και ξαναέχτισαν οι Ιταλοί, και από εκεί ξεκινάει ' +
        'ένα μονοπάτι με κυπαρίσσια που καταλήγει σε έναν τεράστιο σταυρό. Ο σταυρός δεν ' +
        'είναι μόνο για να τον κοιτάς: έχει σκάλα μέσα του και ανεβαίνεις ως τα οριζόντια ' +
        'μπράτσα του. Και παντού στον λόφο κυκλοφορούν παγόνια που δεν σε φοβούνται ' +
        'καθόλου και ανοίγουν την ουρά τους όποτε τους κάνει κέφι. Λίγα μέρη μαζεύουν σε ' +
        'τόσο μικρή απόσταση αρχαία ερείπια, μεσαιωνικό μοναστήρι και μια παρέλαση πουλιών.',
      en:
        'Filerimos is a hill of about two hundred and seventy metres with a view over the ' +
        'whole north-west coast. Ialysos stood on top of it, one of the three ancient ' +
        'cities of the island that joined together to make Rhodes. The foundations of a ' +
        'temple of Athena survive, and a Doric fountain house cut into the rock. Beside ' +
        'them stands a monastery built by the Knights and rebuilt by the Italians, and from ' +
        'there a path lined with cypress trees leads to an enormous cross. The cross is not ' +
        'only there to be looked at: it has a staircase inside and you climb up into its ' +
        'horizontal arms. And all over the hill peacocks wander about, entirely unafraid of ' +
        'you, opening their tails whenever they feel like it.',
    },
    facts: [
      {
        el: 'Στον λόφο βρισκόταν η Ιαλυσός, μία από τις τρεις αρχαίες πόλεις της Ρόδου.',
        en: 'Ialysos stood on this hill, one of the three ancient cities of Rhodes.',
      },
      {
        el: 'Ο σταυρός στην κορυφή έχει σκάλα μέσα του και ανεβαίνεις στα μπράτσα του.',
        en: 'The cross on top has a staircase inside and you can climb into its arms.',
      },
      {
        el: 'Στον λόφο ζουν παγόνια που κυκλοφορούν ελεύθερα.',
        en: 'Peacocks live loose all over the hill.',
      },
    ],
    location: {
      lat: 36.40028,
      lng: 28.14306,
      anchor: 'area',
      confidence: 'C',
      sources: [
        { kind: 'wikidata', ref: 'Q1412642', deltaM: 0 },
        { kind: 'osm', ref: 'node/2361386932', deltaM: 191 },
      ],
      verifiedAt: '2026-09-11',
      note: 'One pin for the hill and the ancient acropolis of Ialysos (Q29963099), whose own item sits 160 m away. To a visitor they are the same place, and as two pins they would have failed the separation audit.',
    },
    question: {
      q: {
        el: 'Τι έχει μέσα του ο σταυρός στην κορυφή του λόφου;',
        en: 'What is inside the cross on top of the hill?',
      },
      answers: [
        { el: 'Σκάλα, που σε ανεβάζει στα μπράτσα του', en: 'A staircase, taking you up into its arms' },
        { el: 'Μια μικρή εκκλησία με εικόνες', en: 'A small church full of icons' },
        { el: 'Καμπάνα που χτυπάει κάθε μεσημέρι', en: 'A bell that rings every midday' },
        { el: 'Δεξαμενή νερού για το μοναστήρι', en: 'A water tank for the monastery' },
      ],
      explanation: {
        el: 'Από τα μπράτσα του βλέπεις ταυτόχρονα τη θάλασσα και τα θεμέλια της αρχαίας πόλης.',
        en: 'From its arms you see the sea and the foundations of the ancient city at the same time.',
      },
    },
  },

  // ---------------------------------------------------------------------- lindos
  {
    id: 'rhodes-lindos',
    cityId: 'rhodes',
    emoji: '⛵',
    category: 'history',
    difficulty: 3,

    name: { el: 'Ακρόπολη της Λίνδου', en: 'The Acropolis of Lindos' },
    tagline: {
      el: 'Ναός σε βράχο, και ένα πολεμικό πλοίο σκαλισμένο στη σκάλα',
      en: 'A temple on a rock, and a warship carved into the stairs',
    },
    story: {
      el:
        'Πενήντα χιλιόμετρα νότια της πόλης, ένας βράχος εκατόν δεκαέξι μέτρων υψώνεται ' +
        'πάνω από άσπρα σπίτια και δύο κόλπους. Στην κορυφή του στεκόταν ο ναός της ' +
        'Αθηνάς Λινδίας, και γύρω του μια στοά με σαράντα δύο κολόνες, χτισμένη ώστε να ' +
        'φαίνεται από τη θάλασσα. Οι Ιππότες αργότερα έζωσαν ολόκληρο τον βράχο με ' +
        'κάστρο, οπότε ανεβαίνεις μέσα από μεσαιωνικά τείχη για να φτάσεις σε αρχαίο ναό. ' +
        'Στους πρόποδες της μεγάλης σκάλας υπάρχει το καλύτερο κομμάτι: μια τριήρης ' +
        'σκαλισμένη κατευθείαν στον βράχο, σε φυσικό μέγεθος πλώρης, με τα ίδια τα ' +
        'σκαλοπάτια να ακουμπούν πάνω της. Πάνω της στεκόταν κάποτε άγαλμα. Είναι ' +
        'διαφήμιση δύο χιλιάδων ετών: η Λίνδος ζούσε από τα καράβια και το έλεγε στην ' +
        'πέτρα, στο πρώτο πράγμα που έβλεπε όποιος ανέβαινε.',
      en:
        'Fifty kilometres south of the town, a rock a hundred and sixteen metres high rises ' +
        'above white houses and two bays. On its summit stood the temple of Athena Lindia, ' +
        'and around it a colonnade of forty-two columns, built so that it could be seen ' +
        'from the sea. The Knights later wrapped the whole rock in a castle, so you climb up ' +
        'through medieval walls to reach an ancient temple. At the foot of the great ' +
        'staircase is the best piece of all: a warship carved directly into the rock, the ' +
        'bow at life size, with the steps themselves running up against it. A statue once ' +
        'stood on it. It is two-thousand-year-old advertising: Lindos lived by ships, and ' +
        'it said so in stone.',
    },
    facts: [
      {
        el: 'Ο βράχος φτάνει τα 116 μέτρα πάνω από τη θάλασσα.',
        en: 'The rock rises 116 metres above the sea.',
      },
      {
        el: 'Στους πρόποδες της σκάλας είναι σκαλισμένη στον βράχο μια τριήρης.',
        en: 'A warship is carved into the rock at the foot of the stairs.',
      },
      {
        el: 'Πάνω από τον αρχαίο ναό οι Ιππότες έχτισαν αργότερα κάστρο.',
        en: 'The Knights later built a castle over the ancient temple.',
      },
    ],
    location: {
      lat: 36.09139,
      lng: 28.08806,
      anchor: 'area',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q65122097', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Lindus', deltaM: 13 },
      ],
      verifiedAt: '2026-09-11',
      note: 'The ancient city (Q65122097), not the modern village of the same name (Q738700) 250 m away. Overpass was rate-limiting on this pass.',
    },
    question: {
      q: {
        el: 'Τι είναι σκαλισμένο στον βράχο στους πρόποδες της σκάλας;',
        en: 'What is carved into the rock at the foot of the stairs?',
      },
      answers: [
        { el: 'Ένα πολεμικό πλοίο, σε φυσικό μέγεθος πλώρης', en: 'A warship, its bow at life size' },
        { el: 'Ένα άλογο με αναβάτη', en: 'A horse with a rider' },
        { el: 'Ο χάρτης του νησιού', en: 'A map of the island' },
        { el: 'Τα ονόματα των ιερέων', en: 'The names of the priests' },
      ],
      explanation: {
        el:
          'Ήταν βάση για άγαλμα, και ταυτόχρονα δήλωση: αυτή η πόλη ζούσε από τη ' +
          'θάλασσα.',
        en:
          'It was a base for a statue and a statement at the same time: this city lived by ' +
          'the sea.',
      },
    },
  },

  // -------------------------------------------------------------------- kameiros
  {
    id: 'rhodes-kameiros',
    cityId: 'rhodes',
    emoji: '🏺',
    category: 'history',
    difficulty: 3,

    name: { el: 'Αρχαία Κάμειρος', en: 'Ancient Kameiros' },
    tagline: {
      el: 'Μια ολόκληρη αρχαία πόλη που δεν είχε καθόλου τείχη',
      en: 'A whole ancient city with no walls at all',
    },
    story: {
      el:
        'Η Κάμειρος ήταν η τρίτη από τις αρχαίες πόλεις της Ρόδου, μαζί με τη Λίνδο και ' +
        'την Ιαλυσό. Σκάφτηκε τον 19ο αιώνα και βγήκε σχεδόν ολόκληρη, απλωμένη σε τρία ' +
        'επίπεδα στην πλαγιά: πάνω τα ιερά, στη μέση οι δρόμοι με τα σπίτια, κάτω η αγορά. ' +
        'Περπατάς σε κανονικούς δρόμους και βλέπεις κατώφλια, αυλές, αποχετεύσεις. Το πιο ' +
        'εντυπωσιακό βρίσκεται στο ψηλότερο σημείο: μια τεράστια δεξαμενή λαξευμένη στον ' +
        'βράχο, που αποθήκευε νερό αρκετό για εκατοντάδες οικογένειες και το μοίραζε με ' +
        'πήλινους σωλήνες σε όλη την πόλη. Και υπάρχει κάτι που λείπει: τείχη. Η Κάμειρος ' +
        'δεν είχε. Ήταν πόλη γεωργών, μακριά από το λιμάνι, και προφανώς κανείς δεν ' +
        'θεώρησε ότι κινδύνευε αρκετά για να ξοδέψει πέτρα σε τείχος. Αυτή η απουσία λέει ' +
        'για την εποχή της περισσότερα από όσα θα έλεγε ένα τείχος.',
      en:
        'Kameiros was the third of the ancient cities of Rhodes, together with Lindos and ' +
        'Ialysos. It was excavated in the 19th century and came out almost whole, spread ' +
        'over three levels on a hillside: sanctuaries at the top, streets of houses in the ' +
        'middle, the market square at the bottom. You walk along proper streets and see ' +
        'doorsteps, courtyards, drains. The most impressive thing is at the highest point: ' +
        'an enormous reservoir cut into the rock, holding enough water for hundreds of ' +
        'families and distributing it through clay pipes across the whole town. And there ' +
        'is something missing: walls. Kameiros had none. It was a town of farmers, away ' +
        'from the harbour, and evidently nobody thought it was in enough danger to spend ' +
        'stone on a wall.',
    },
    facts: [
      {
        el: 'Είναι απλωμένη σε τρία επίπεδα: ιερά, σπίτια, αγορά.',
        en: 'It is laid out on three levels: sanctuaries, houses, market.',
      },
      {
        el: 'Στην κορυφή της υπάρχει λαξευμένη δεξαμενή που τροφοδοτούσε όλη την πόλη.',
        en: 'A rock-cut reservoir at the top supplied the whole town.',
      },
      {
        el: 'Δεν είχε καθόλου τείχη.',
        en: 'It had no walls at all.',
      },
    ],
    location: {
      lat: 36.33622,
      lng: 27.92128,
      anchor: 'area',
      confidence: 'C',
      sources: [
        { kind: 'wikidata', ref: 'Q1231539', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Camirus', deltaM: 44 },
      ],
      verifiedAt: '2026-09-11',
      note: 'Grade C: Wikipedia is 44 m away, outside the 30 m agreement window, so it counts as a lone source rather than a second one. Overpass was rate-limiting.',
    },
    question: {
      q: {
        el: 'Τι δεν είχε η Κάμειρος, σε αντίθεση με σχεδόν κάθε αρχαία πόλη;',
        en: 'What did Kameiros lack, unlike almost every ancient city?',
      },
      answers: [
        { el: 'Τείχη', en: 'Walls' },
        { el: 'Νερό', en: 'Water' },
        { el: 'Αγορά', en: 'A market square' },
        { el: 'Δρόμους', en: 'Streets' },
      ],
      explanation: {
        el:
          'Το τείχος είναι πανάκριβο. Μια πόλη το χτίζει μόνο όταν φοβάται, και η ' +
          'Κάμειρος προφανώς δεν φοβόταν.',
        en:
          'A wall is enormously expensive. A town builds one only when it is afraid, and ' +
          'Kameiros evidently was not.',
      },
    },
  },

  // ------------------------------------------------------------------ monolithos
  {
    id: 'rhodes-monolithos',
    cityId: 'rhodes',
    emoji: '🗿',
    category: 'landmark',
    difficulty: 2,

    name: { el: 'Κάστρο Μονολίθου', en: 'Monolithos Castle' },
    tagline: {
      el: 'Κάστρο σε έναν μόνο βράχο, με ένα μόνο μονοπάτι',
      en: 'A castle on a single rock, with a single path',
    },
    story: {
      el:
        'Στη νοτιοδυτική άκρη του νησιού, ένας βράχος υψώνεται απότομα διακόσια τριάντα ' +
        'έξι μέτρα πάνω από τη θάλασσα, και δεν έχει τίποτα γύρω του. Το όνομα του χωριού ' +
        'από κάτω το λέει ακριβώς: Μονόλιθος, μία πέτρα. Τον 15ο αιώνα οι Ιππότες ' +
        'έχτισαν κάστρο στην κορυφή, και το σχέδιό τους ήταν σχεδόν τεμπέλικο, με την ' +
        'καλή έννοια: δεν χρειάστηκε να χτίσουν σχεδόν καθόλου τείχος, γιατί ο βράχος ' +
        'είναι ήδη κάθετος από παντού. Υπάρχει ένα μονοπάτι που ανεβαίνει, και μόνο ένα. ' +
        'Μέσα στο κάστρο σήμερα δεν σώζονται στρατώνες ούτε αίθουσες, μόνο ένα μικρό ' +
        'άσπρο εκκλησάκι. Η θέα από πάνω φτάνει ως το επόμενο ακρωτήρι, και καταλαβαίνεις ' +
        'αμέσως τι έβλεπαν οι φρουροί και γιατί διάλεξαν αυτή τη μοναχική πέτρα. Ένα ' +
        'κάστρο εδώ δεν χρειαζόταν στρατό. Χρειαζόταν δύο ανθρώπους με καλά μάτια.',
      en:
        'At the south-western edge of the island a rock rises sharply two hundred and ' +
        'thirty-six metres above the sea with nothing at all around it. The name of the ' +
        'village below says it exactly: Monolithos, one stone. In the 15th century the ' +
        'Knights built a castle on the summit, and their design was almost lazy, in the ' +
        'good sense: they hardly had to build any wall at all, because the rock is already ' +
        'vertical on every side. There is one path up, and only one. Inside the castle ' +
        'today there are no barracks and no halls, only a small whitewashed chapel. The ' +
        'view from the top reaches the next headland, and you understand at once what the ' +
        'guards could see and why they chose this lonely stone.',
    },
    facts: [
      {
        el: 'Ο βράχος υψώνεται 236 μέτρα πάνω από τη θάλασσα.',
        en: 'The rock rises 236 metres above the sea.',
      },
      {
        el: 'Οι Ιππότες έχτισαν το κάστρο τον 15ο αιώνα.',
        en: 'The Knights built the castle in the 15th century.',
      },
      {
        el: 'Υπάρχει μόνο ένα μονοπάτι που ανεβαίνει στην κορυφή.',
        en: 'There is only one path up to the top.',
      },
    ],
    location: {
      lat: 36.12453,
      lng: 27.72619,
      anchor: 'centroid',
      confidence: 'C',
      sources: [{ kind: 'wikidata', ref: 'Q56450446', deltaM: 0 }],
      verifiedAt: '2026-09-11',
      note: 'Grade C: Overpass returned a server error and there is no Wikipedia coordinate. Wikidata alone.',
    },
    question: {
      q: {
        el: 'Γιατί χρειάστηκε πολύ λίγο τείχος αυτό το κάστρο;',
        en: 'Why did this castle need so little wall?',
      },
      answers: [
        {
          el: 'Γιατί ο βράχος είναι ήδη κάθετος από παντού',
          en: 'Because the rock is already vertical on every side',
        },
        { el: 'Γιατί το έχτισαν βιαστικά', en: 'Because it was built in a hurry' },
        { el: 'Γιατί δεν υπήρχε πέτρα στην περιοχή', en: 'Because there was no stone in the area' },
        { el: 'Γιατί το προστάτευε δάσος', en: 'Because a forest protected it' },
      ],
      explanation: {
        el:
          'Ο καλύτερος μηχανικός σε ένα κάστρο είναι το έδαφος. Οι Ιππότες απλώς το ' +
          'διάλεξαν σωστά.',
        en:
          'The best engineer in a castle is the ground. The Knights simply chose it well.',
      },
    },
  },

  // -------------------------------------------------------------------- tsambika
  {
    id: 'rhodes-tsambika',
    cityId: 'rhodes',
    emoji: '🪜',
    category: 'nature',
    difficulty: 2,

    name: { el: 'Μονή Τσαμπίκας', en: 'Tsambika Monastery' },
    tagline: {
      el: 'Τριακόσια σκαλιά για ένα εκκλησάκι και μια θέα',
      en: 'Three hundred steps for a tiny church and a view',
    },
    story: {
      el:
        'Ανάμεσα στην πόλη και τη Λίνδο, ένας βράχος πετάγεται πάνω από την ανατολική ' +
        'ακτή. Στην κορυφή του στέκεται ένα μικρό εκκλησάκι, και για να φτάσεις εκεί ' +
        'ανεβαίνεις γύρω στα τριακόσια σκαλιά, χωρίς σκιά και χωρίς συντομότερο δρόμο. ' +
        'Είναι η πιο απλή άσκηση του νησιού και η πιο δίκαιη: ο βράχος δεν ξεχωρίζει ' +
        'ποιος ανεβαίνει. Το μοναστήρι είναι τόπος προσκυνήματος εδώ και αιώνες, και κάθε ' +
        'Σεπτέμβρη ανεβαίνει πλήθος κόσμου. Οι περισσότεροι όμως ανεβαίνουν για τον ίδιο ' +
        'λόγο με σένα: από πάνω βλέπεις ολόκληρο τον κόλπο της Τσαμπίκας, με την αμμουδιά ' +
        'να κάνει τέλειο μισοφέγγαρο και το νερό να αλλάζει τρία διαφορετικά γαλάζια ' +
        'ανάλογα με το βάθος. Είναι από τα λίγα μέρη όπου καταλαβαίνεις με τα μάτια ' +
        'πόσο βαθιά είναι η θάλασσα.',
      en:
        'Between the town and Lindos a rock juts out above the eastern coast. On its summit ' +
        'stands a tiny church, and to reach it you climb around three hundred steps, with ' +
        'no shade and no shorter way. It is the island’s simplest exercise and its fairest: ' +
        'the rock does not care who is climbing. The monastery has been a place of ' +
        'pilgrimage for centuries, and every September a crowd goes up. Most people, ' +
        'though, climb for the same reason you will: from the top you see the whole bay of ' +
        'Tsambika, the sand making a perfect crescent and the water turning three different ' +
        'blues according to the depth. It is one of the few places where your eyes can ' +
        'actually read how deep the sea is.',
    },
    facts: [
      {
        el: 'Ανεβαίνεις γύρω στα 300 σκαλιά για να φτάσεις στην κορυφή.',
        en: 'You climb around 300 steps to reach the top.',
      },
      {
        el: 'Το εκκλησάκι στην κορυφή είναι τόπος προσκυνήματος εδώ και αιώνες.',
        en: 'The little church at the top has been a place of pilgrimage for centuries.',
      },
      {
        el: 'Από πάνω το χρώμα του νερού δείχνει πόσο βαθιά είναι η θάλασσα.',
        en: 'From the top, the colour of the water shows how deep the sea is.',
      },
    ],
    location: {
      lat: 36.23611,
      lng: 28.15028,
      anchor: 'centroid',
      confidence: 'C',
      sources: [{ kind: 'wikidata', ref: 'Q1483416', deltaM: 0 }],
      verifiedAt: '2026-09-11',
      note: 'Grade C: Overpass returned a server error and there is no Wikipedia coordinate. Wikidata alone.',
    },
    question: {
      q: {
        el: 'Τι σου λέει το χρώμα του νερού όταν το κοιτάς από ψηλά;',
        en: 'What does the colour of the water tell you when you look from above?',
      },
      answers: [
        { el: 'Πόσο βαθιά είναι η θάλασσα σε κάθε σημείο', en: 'How deep the sea is at each point' },
        { el: 'Πόσο κρύο είναι το νερό', en: 'How cold the water is' },
        { el: 'Πού υπάρχουν ψάρια', en: 'Where the fish are' },
        { el: 'Πόσο αλμυρό είναι το νερό', en: 'How salty the water is' },
      ],
      explanation: {
        el:
          'Στα ρηχά το φως φτάνει στον πάτο και γυρίζει πίσω ανοιχτό. Στα βαθιά ' +
          'χάνεται, και το γαλάζιο σκουραίνει.',
        en:
          'In the shallows light reaches the bottom and comes back pale. In deep water it is ' +
          'lost, and the blue goes dark.',
      },
    },
  },
];

export const trails: Trail[] = [
  {
    id: 'rhodes-knights-day',
    cityId: 'rhodes',
    emoji: '🛡️',
    name: { el: 'Η μέρα των Ιπποτών', en: 'The day of the Knights' },
    promise: {
      el: 'Ένα παλάτι, ένα νοσοκομείο και δύο κάστρα, από τους ίδιους ανθρώπους.',
      en: 'A palace, a hospital and two castles, all from the same people.',
    },
    placeIds: [
      'rhodes-palace-grand-master',
      'rhodes-archaeological-museum',
      'rhodes-filerimos',
      'rhodes-monolithos',
    ],
  },
  {
    id: 'rhodes-three-ancient-cities',
    cityId: 'rhodes',
    emoji: '🏺',
    name: { el: 'Οι τρεις αρχαίες πόλεις', en: 'The three ancient cities' },
    promise: {
      el: 'Λίνδος, Κάμειρος, Ιαλυσός, και η πόλη που έφτιαξαν ενώνοντας τις δυνάμεις τους.',
      en: 'Lindos, Kameiros, Ialysos, and the city they made by joining forces.',
    },
    placeIds: ['rhodes-lindos', 'rhodes-kameiros', 'rhodes-filerimos', 'rhodes-acropolis'],
  },
  {
    id: 'rhodes-sea-and-steps',
    cityId: 'rhodes',
    emoji: '🌊',
    name: { el: 'Θάλασσα και σκαλιά', en: 'Sea and steps' },
    promise: {
      el: 'Μια ψεύτικη σπηλιά με ζωντανά ψάρια, μια πηγή με τρούλους και τριακόσια σκαλιά.',
      en: 'A pretend cave with live fish, a domed spring, and three hundred steps.',
    },
    placeIds: ['rhodes-aquarium', 'rhodes-kallithea', 'rhodes-tsambika'],
  },
  {
    id: 'rhodes-town-today',
    cityId: 'rhodes',
    emoji: '🖼️',
    name: { el: 'Η πόλη σήμερα', en: 'The town today' },
    promise: {
      el: 'Ένας αιώνας ελληνικής ζωγραφικής και ένα γήπεδο με αρχαίο όνομα.',
      en: 'A century of Greek painting and a football ground with an ancient name.',
    },
    placeIds: ['rhodes-art-gallery', 'rhodes-diagoras-stadium', 'rhodes-acropolis'],
  },
];
