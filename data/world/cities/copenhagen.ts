/**
 * WiseBot World — Copenhagen.
 *
 * Seventeen places, two of them museums with an interior. The second city built by
 * conversion rather than by fresh writing: nine of the seventeen come from the Explorer
 * product on origin/main, whose text is the raw material here, reshaped to this module's
 * lengths and given sourced coordinates, museums and riddles.
 *
 * Every coordinate is copied from `data/world/coords/copenhagen.json`, field for field.
 * Nothing graded `D`. No place claims an `entrance`, because no door in this city has
 * been measured; the door sentences live in `location.findIt`, which carries no licence.
 *
 * Judgement calls a later reader would ask about:
 *
 *  - **Explorer's Kongens Nytorv was dropped.** Its honest story is a king putting up a
 *    statue of himself, and everything else on that square — the Royal Theatre, the
 *    ballet, Holberg — belongs to buildings that are not the pin. The room went to the
 *    two museums a child can walk into, which Explorer has no model for.
 *  - **Explorer's Strøget spot ships as the Stork Fountain.** Strøget is 1.1 km of
 *    street and has no point a pin can honestly sit on; the fountain on Amagertorv is
 *    what Explorer actually sends a child to look at, and it is a point. The story is
 *    still the street's.
 *  - **The City Hall is pinned on the building, not on Rådhuspladsen.** The square sits
 *    39 m from Wikidata's point for Copenhagen itself, which the resolver reads as a
 *    centroid mistake. Same story, honest pin.
 *  - **Seven places were added**: both museums, Christiansborg, Rosenborg, the Botanical
 *    Garden, Torvehallerne, the Harbour Bath and Amager Bakke — the last three so that
 *    food, sport and a working power station are in the city as well as its palaces.
 *  - **Six places carry a `note` saying the OpenStreetMap cross-check did not answer.**
 *    Overpass was intermittent on the day of the run and those six graded `C` on a
 *    Wikidata point that is not in doubt. The grade is honest and stays as it is.
 *
 * `el` and `en` only. The other four arrive as overlay files and never as extra keys
 * in here.
 */

import type { Place, Trail } from '../types';

export const places: Place[] = [
  // ------------------------------------------------------------------- city hall
  {
    id: 'copenhagen-radhus',
    cityId: 'copenhagen',
    emoji: '🏛️',
    category: 'landmark',
    difficulty: 1,

    name: { el: 'Το Δημαρχείο της Κοπεγχάγης', en: 'Copenhagen City Hall' },
    tagline: {
      el: 'Ένα κτίριο χτισμένο για να κρατάει την ώρα της πόλης',
      en: 'A building put up to keep the whole city’s time',
    },
    story: {
      el:
        'Το Δημαρχείο άνοιξε το 1905 και χτίστηκε για να είναι το ρολόι της πόλης. Ο ' +
        'πύργος του φτάνει τα 106 μέτρα περίπου, και για πολλά χρόνια τίποτα στην ' +
        'Κοπεγχάγη δεν ήταν ψηλότερο. Πάνω από τη μεγάλη πόρτα κοιτάζει μια χρυσή ' +
        'φιγούρα: ο επίσκοπος Άμπσαλον, που το 1167 έχτισε ένα μικρό κάστρο δίπλα σε ' +
        'αυτά τα νερά και θεωρείται ο ιδρυτής της πόλης. Μέσα, σε δική του αίθουσα, ' +
        'στέκεται το Παγκόσμιο Ρολόι του Γενς Όλσεν. Ένας ωρολογοποιός πέρασε το ' +
        'μεγαλύτερο μέρος της ζωής του σχεδιάζοντάς το, πέθανε πριν τελειώσει, και άλλοι ' +
        'το ολοκλήρωσαν το 1955. Έχει πάνω από δεκαπέντε χιλιάδες εξαρτήματα. Μερικά ' +
        'κουνιούνται κάθε δευτερόλεπτο. Ένα από αυτά, ο πιο αργός τροχός της μηχανής, ' +
        'χρειάζεται περίπου είκοσι πέντε χιλιάδες χρόνια για μία μόνο περιστροφή: ' +
        'γυρίζει από το 1955 και δεν έχει προλάβει ούτε το πρώτο του γύρισμα. Έξω, στην ' +
        'πλατεία, δύο μπρούντζινοι άντρες σηκώνουν τεράστιες καμπυλωτές τρομπέτες.',
      en:
        'The City Hall opened in 1905, and it was built to be the city’s clock. Its tower ' +
        'is about 106 metres high, and for many years nothing in Copenhagen stood taller. ' +
        'Above the main door a golden figure looks down: Bishop Absalon, who put up a ' +
        'small castle beside this water in 1167 and is counted as the city’s founder. ' +
        'Inside, in a room of its own, stands Jens Olsen’s World Clock. A clockmaker spent ' +
        'most of his life planning it, died before it was finished, and other people ' +
        'completed it in 1955. It has more than fifteen thousand parts. Some of them move ' +
        'every second. One of them, the slowest wheel in the machine, needs about ' +
        'twenty-five thousand years for a single turn: it has been going since 1955 and ' +
        'has not finished its first rotation yet. Outside on the square, two bronze men ' +
        'lift enormous curved horns to their lips.',
    },
    facts: [
      {
        el: 'Ο πύργος του φτάνει τα 106 μέτρα περίπου και άνοιξε μαζί με το κτίριο, το 1905.',
        en: 'Its tower is about 106 metres high and opened with the building, in 1905.',
      },
      {
        el: 'Το Παγκόσμιο Ρολόι του Γενς Όλσεν ολοκληρώθηκε το 1955 και έχει πάνω από 15.000 εξαρτήματα.',
        en: 'Jens Olsen’s World Clock was completed in 1955 and has more than 15,000 parts.',
      },
      {
        el: 'Ο πιο αργός τροχός του ρολογιού κάνει μία περιστροφή σε περίπου 25.000 χρόνια.',
        en: 'The clock’s slowest wheel makes one full turn in about 25,000 years.',
      },
    ],
    location: {
      lat: 55.67528,
      lng: 12.57028,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q2010247', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Copenhagen City Hall', deltaM: 0 },
      ],
      verifiedAt: '2026-09-14',
      note: 'The building, not Rådhuspladsen (Q2178686): the square sits 39 m from Wikidata’s point for Copenhagen itself and the resolver reads that as a centroid mistake.',
      findIt: {
        el: 'Η μεγάλη πόρτα κοιτάζει την πλατεία. Ψηλά από πάνω της λάμπει ο χρυσός επίσκοπος.',
        en: 'The big door faces the square. High above it shines the golden bishop.',
      },
    },
    question: {
      q: {
        el: 'Πόσο κάνει ο πιο αργός τροχός του ρολογιού για μία περιστροφή;',
        en: 'How long does the clock’s slowest wheel take for one full turn?',
      },
      answers: [
        { el: 'Περίπου 25.000 χρόνια', en: 'About 25,000 years' },
        { el: 'Περίπου 25.000 ώρες', en: 'About 25,000 hours' },
        { el: 'Περίπου 25.000 μέρες', en: 'About 25,000 days' },
        { el: 'Περίπου 25.000 λεπτά', en: 'About 25,000 minutes' },
      ],
      explanation: {
        el:
          'Το ρολόι δουλεύει από το 1955 και ο πιο αργός τροχός του δεν έχει ολοκληρώσει ' +
          'ούτε μία περιστροφή. Θα τη χρειαστεί περίπου είκοσι πέντε χιλιάδες χρόνια.',
        en:
          'The clock has run since 1955 and its slowest wheel has not completed a single ' +
          'rotation. It needs roughly twenty-five thousand years for one.',
      },
    },
  },

  // ---------------------------------------------------------------------- tivoli
  {
    id: 'copenhagen-tivoli',
    cityId: 'copenhagen',
    emoji: '🎡',
    category: 'landmark',
    difficulty: 1,

    name: { el: 'Το Τίβολι', en: 'Tivoli Gardens' },
    tagline: {
      el: 'Ένα τρενάκι του 1914 που το φρενάρει ακόμα ένας άνθρωπος',
      en: 'A 1914 roller coaster a person still brakes by hand',
    },
    story: {
      el:
        'Το Τίβολι άνοιξε το καλοκαίρι του 1843, σε ένα χωράφι έξω από τα παλιά τείχη ' +
        'της πόλης. Ο ιδρυτής του, ο Γκέοργκ Κάρστενσεν, έπεισε τον βασιλιά με μία ' +
        'πρόταση: όταν ο κόσμος διασκεδάζει, δεν σκέφτεται τις έγνοιες του. Πήρε την ' +
        'άδεια και τη γη. Μέσα υπάρχει ένα ξύλινο τρενάκι από το 1914 που λειτουργεί ' +
        'ακόμη, και δεν έχει καθόλου αυτόματα φρένα: σε κάθε διαδρομή ένας άνθρωπος, ο ' +
        'φρεναδόρος, στέκεται στη μέση του τρένου και το φρενάρει με το χέρι. Τα βράδια ' +
        'ανάβουν χιλιάδες μικρά φαναράκια ανάμεσα στα λουλούδια και γύρω από τη λίμνη. ' +
        'Το πάρκο έχει δική του ορχήστρα και δική του φρουρά από παιδιά με στολές, που ' +
        'παρελαύνει εδώ από το 1844. Ο Χανς Κρίστιαν Άντερσεν ερχόταν συχνά. Τη δεκαετία ' +
        'του 1950 ήρθε και ένας Αμερικανός που έφτιαχνε κινούμενα σχέδια: ο Γουόλτ ' +
        'Ντίσνεϊ κοίταξε τα λουλούδια, τα φώτα και τη μουσική, γύρισε σπίτι και το 1955 ' +
        'άνοιξε το δικό του πάρκο.',
      en:
        'Tivoli opened in the summer of 1843, on a field outside the old city walls. Its ' +
        'founder, Georg Carstensen, talked the king into it with a single sentence: people ' +
        'who are enjoying themselves do not brood on their worries. He got his permission ' +
        'and his land. Inside there is a wooden roller coaster from 1914 that still runs, ' +
        'and it has no automatic brakes at all: on every trip a person called the brakeman ' +
        'stands in the middle of the train and slows it by hand. In the evening thousands ' +
        'of small lanterns come on among the flowers and around the lake. The park has its ' +
        'own orchestra and its own guard of children in uniform, who have paraded here ' +
        'since 1844. Hans Christian Andersen came often. In the 1950s so did an American ' +
        'who made cartoons: Walt Disney looked at the flowers, the lights and the music, ' +
        'went home, and opened a park of his own in 1955.',
    },
    facts: [
      {
        el: 'Άνοιξε το καλοκαίρι του 1843 και λειτουργεί από τότε.',
        en: 'It opened in the summer of 1843 and has run ever since.',
      },
      {
        el: 'Το ξύλινο τρενάκι του 1914 φρενάρεται με το χέρι, από άνθρωπο που ταξιδεύει μέσα του.',
        en: 'Its wooden coaster from 1914 is braked by hand, by a person riding inside it.',
      },
      {
        el: 'Η παιδική φρουρά του παρελαύνει με στολές από το 1844.',
        en: 'Its guard of children has paraded in uniform since 1844.',
      },
    ],
    location: {
      lat: 55.67361,
      lng: 12.56833,
      anchor: 'area',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q110289', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Tivoli Gardens', deltaM: 0 },
      ],
      verifiedAt: '2026-09-14',
      findIt: {
        el: 'Η κεντρική πύλη είναι μια μεγάλη στρογγυλή αψίδα στην οδό Vesterbrogade, με το όνομα ψηλά.',
        en: 'The main gate is a big round arch on Vesterbrogade, with the name high on top.',
      },
    },
    question: {
      q: {
        el: 'Τι δουλειά κάνει ο φρεναδόρος στο ξύλινο τρενάκι;',
        en: 'What is the brakeman’s job on the wooden roller coaster?',
      },
      answers: [
        { el: 'Φρενάρει με το χέρι', en: 'He brakes it by hand' },
        { el: 'Πουλάει τα εισιτήρια', en: 'He sells the tickets' },
        { el: 'Μετράει τους γύρους', en: 'He counts the laps' },
        { el: 'Βάφει τα βαγόνια', en: 'He paints the cars' },
      ],
      explanation: {
        el:
          'Το τρενάκι του 1914 δεν έχει αυτόματα φρένα. Σε κάθε διαδρομή ένας άνθρωπος ' +
          'ταξιδεύει μέσα στο τρένο και το φρενάρει μόνος του, με μοχλό.',
        en:
          'The 1914 coaster has no automatic brakes. On every trip a person rides inside ' +
          'the train and slows it himself, with a lever.',
      },
    },
  },

  // ----------------------------------------------------------------- glyptotek
  {
    id: 'copenhagen-glyptoteket',
    cityId: 'copenhagen',
    emoji: '🗿',
    category: 'museum',
    difficulty: 2,

    name: { el: 'Η Γλυπτοθήκη Ny Carlsberg', en: 'The Ny Carlsberg Glyptotek' },
    tagline: {
      el: 'Ένα μουσείο με αληθινούς φοίνικες στη μέση του',
      en: 'A museum with real palm trees growing in the middle',
    },
    story: {
      el:
        'Γλυπτοθήκη σημαίνει «θήκη για γλυπτά», και η λέξη είναι ελληνική. Αυτήν εδώ την ' +
        'έχτισε ο Καρλ Γιάκομπσεν, ένας ζυθοποιός που ξόδευε τα λεφτά του σε γλυπτά και ' +
        'μετά χάρισε ολόκληρη τη συλλογή του στον κόσμο. Το πρώτο κτίριο άνοιξε το 1897 ' +
        'και μια δεύτερη πτέρυγα ήρθε το 1906. Στη μέση του μουσείου, εκεί που περιμένεις ' +
        'άλλη μια αίθουσα, υπάρχει ένας κήπος κάτω από γυάλινο τρούλο, με αληθινούς ' +
        'φοίνικες, ένα σιντριβάνι και ζεστό αέρα όλον τον χειμώνα. Ο κόσμος μπαίνει από ' +
        'το χιονόνερο, κάθεται ανάμεσα στα φύλλα και κοιτάζει μαρμάρινα πρόσωπα δύο ' +
        'χιλιάδων ετών. Πιο πέρα υπάρχουν αιγυπτιακά φέρετρα, σειρές ρωμαϊκών ' +
        'πορτρέτων και γαλλικά γλυπτά. Εδώ αποδείχτηκε και κάτι που ξαφνιάζει: για ' +
        'διακόσια χρόνια όλοι νόμιζαν ότι το αρχαίο μάρμαρο ήταν λευκό. Ερευνητές αυτού ' +
        'του μουσείου βρήκαν μικροσκοπικούς κόκκους χρώματος κρυμμένους μέσα στην πέτρα.',
      en:
        'A glyptotek is a case for carved things, and the word is Greek. This one was built ' +
        'by Carl Jacobsen, a brewer who spent his money on sculpture and then gave the ' +
        'whole collection to the public. The first building opened in 1897 and a second ' +
        'wing followed in 1906. In the middle of the museum, where you expect another ' +
        'gallery, there is a garden under a glass dome, with real palm trees, a fountain ' +
        'and warm air all winter. People come in out of the sleet, sit down among the ' +
        'leaves and look at marble faces two thousand years old. Further in there are ' +
        'Egyptian coffins, rows of Roman portraits and French sculpture. Something ' +
        'surprising was also proved here. For two hundred years everybody believed ancient ' +
        'marble was white. Researchers at this museum found tiny grains of paint still ' +
        'hidden in the stone.',
    },
    facts: [
      {
        el: 'Η λέξη «γλυπτοθήκη» είναι ελληνική και σημαίνει τη θήκη όπου φυλάς τα γλυπτά.',
        en: 'The word "glyptotek" is Greek and means the case where you keep the carvings.',
      },
      {
        el: 'Το πρώτο του κτίριο άνοιξε το 1897 και η δεύτερη πτέρυγα το 1906.',
        en: 'Its first building opened in 1897 and the second wing in 1906.',
      },
      {
        el: 'Ο ίδιος ζυθοποιός, ο Καρλ Γιάκομπσεν, πλήρωσε και το άγαλμα της Μικρής Γοργόνας.',
        en: 'The same brewer, Carl Jacobsen, also paid for the statue of the Little Mermaid.',
      },
    ],
    location: {
      lat: 55.6725,
      lng: 12.57194,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q1140507', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Ny Carlsberg Glyptotek', deltaM: 0 },
      ],
      verifiedAt: '2026-09-14',
      findIt: {
        el: 'Η είσοδος είναι στην πλευρά του κήπου, ανάμεσα σε δύο πέτρινες σκάλες.',
        en: 'The way in is on the garden side, between two flights of stone steps.',
      },
    },
    question: {
      q: {
        el: 'Τι ανακάλυψαν εδώ για τα αρχαία μαρμάρινα αγάλματα;',
        en: 'What did researchers here discover about ancient marble statues?',
      },
      answers: [
        { el: 'Ήταν βαμμένα με χρώματα', en: 'They were painted in colour' },
        { el: 'Ήταν φτιαγμένα από γύψο', en: 'They were made of plaster' },
        { el: 'Ήταν όλα κομμένα στη μέση', en: 'They were all cut in half' },
        { el: 'Ήταν κρυμμένα σε σπηλιές', en: 'They were hidden in caves' },
      ],
      explanation: {
        el:
          'Με πλάγιο φως και ειδικές λάμπες βρέθηκαν κόκκοι χρώματος μέσα στις χαραμάδες ' +
          'του μαρμάρου. Το λευκό που ξέρουμε είναι απλώς το χρώμα που έφυγε.',
        en:
          'Side lighting and special lamps found grains of pigment inside the scratches of ' +
          'the marble. The white we know is simply the colour having worn away.',
      },
    },

    museum: {
      doorNote: {
        el: 'Ξεκίνα από τον κήπο στη μέση και μετά διάλεξε μία αίθουσα. Το μουσείο δεν βγαίνει όλο σε μία φορά.',
        en: 'Start in the garden at the centre, then pick one room. This museum does not fit into one visit.',
      },
      rooms: [
        {
          id: 'copenhagen-glyptoteket-winter-garden',
          emoji: '🌴',
          name: { el: 'Ο χειμωνιάτικος κήπος', en: 'The winter garden' },
          intro: {
            el:
              'Στη μέση του μουσείου, εκεί που περιμένεις άλλη μια αίθουσα με γλυπτά, ' +
              'υπάρχει κήπος. Ένας γυάλινος τρούλος αφήνει το φως να μπει, ο αέρας μένει ' +
              'ζεστός όλον τον χειμώνα, και ένας φοίνικας έχει ψηλώσει σχεδόν ως τη σκεπή. ' +
              'Στη μέση τρέχει νερό. Πολλοί Δανοί έρχονται τον Φεβρουάριο μόνο και μόνο ' +
              'για να καθίσουν κάπου πράσινα.',
            en:
              'In the middle of the museum, where you expect another room full of ' +
              'sculpture, there is a garden. A glass dome lets the light in, the air stays ' +
              'warm all winter, and a palm has grown almost up to the roof. Water runs in ' +
              'the middle of it. Plenty of Danes come here in February simply to sit ' +
              'somewhere green.',
          },
          exhibits: [
            {
              id: 'copenhagen-glyptoteket-dome',
              name: { el: 'Ο γυάλινος τρούλος', en: 'The glass dome' },
              blurb: {
                el:
                  'Ο τρούλος πάνω από τον κήπο είναι από σίδερο και τζάμι, και κάνει τη ' +
                  'δουλειά ενός θερμοκηπίου: το φως του ήλιου μπαίνει εύκολα, η ζέστη ' +
                  'δυσκολεύεται να βγει. Γι’ αυτό μπορούν να ζήσουν εδώ φυτά που θέλουν ' +
                  'ζεστή χώρα, μέσα σε μια κρύα. Κοίτα ψηλά μια γκρίζα μέρα και θα δεις ' +
                  'τον ουρανό κομμένο σε μικρά τετράγωνα. Κοίτα χαμηλά και το ίδιο φως ' +
                  'πέφτει πάνω σε μάρμαρα που σκαλίστηκαν στην Ελλάδα και στην Ιταλία, ' +
                  'πολύ πριν φτιάξει κανείς στη Δανία τζάμι τέτοιου μεγέθους.',
                en:
                  'The dome over the garden is iron and glass, and it does a greenhouse’s ' +
                  'job: sunlight gets in easily, warmth finds it hard to get out. That is ' +
                  'why plants that need a hot country can live inside a cold one. Look up ' +
                  'on a grey day and you will see the sky cut into small squares. Look ' +
                  'down and the same light is falling on marble carved in Greece and ' +
                  'Italy, long before anyone in Denmark could make a pane of glass this ' +
                  'big.',
              },
              question: {
                q: {
                  el: 'Γιατί ζουν εδώ φυτά από ζεστές χώρες;',
                  en: 'Why can plants from hot countries live here?',
                },
                answers: [
                  { el: 'Το τζάμι κρατά τη ζέστη', en: 'The glass keeps the heat in' },
                  { el: 'Είναι όλα ψεύτικα φυτά', en: 'The plants here are all fake' },
                  { el: 'Τα ποτίζουν με ζεστό νερό', en: 'They are watered in hot water' },
                  { el: 'Πίνουν νερό από τη θάλασσα', en: 'They drink water from the sea' },
                ],
                explanation: {
                  el:
                    'Ένα θερμοκήπιο αφήνει το φως να μπει και δυσκολεύει τη ζέστη να ' +
                    'βγει. Έτσι ο φοίνικας ζει σε μια πόλη που παγώνει τον χειμώνα.',
                  en:
                    'A greenhouse lets light in and makes it hard for warmth to leave. ' +
                    'That is how a palm lives in a city that freezes in winter.',
                },
              },
            },
            {
              id: 'copenhagen-glyptoteket-water-mother',
              name: { el: 'Η Μητέρα του Νερού', en: 'The Water Mother' },
              blurb: {
                el:
                  'Μέσα στη γούρνα στο κέντρο του κήπου ξαπλώνει μια μεγάλη πέτρινη ' +
                  'γυναίκα, και πάνω της είναι σκορπισμένα μικρά παιδιά. Σκαρφαλώνουν στα ' +
                  'μπράτσα της, κάθονται στα γόνατά της, κοιμούνται ακουμπισμένα στο ' +
                  'πλευρό της. Ο γλύπτης Κάι Νίλσεν την τελείωσε γύρω στο 1920 και την ' +
                  'ονόμασε Μητέρα του Νερού. Δεν είναι θεά που την προσευχήθηκε ποτέ ' +
                  'κανείς: τη σκέφτηκε ο ίδιος. Τα παιδιά που έρχονται συνήθως μετράνε τα ' +
                  'μωρά, και συνήθως βγάζουν άλλον αριθμό κάθε φορά, γιατί μερικά είναι ' +
                  'σχεδόν κρυμμένα.',
                en:
                  'In the pool at the centre of the garden lies a large stone woman, and ' +
                  'small children are scattered all over her. They climb her arms, sit on ' +
                  'her knees, sleep against her side. The sculptor Kai Nielsen finished ' +
                  'her around 1920 and called her the Water Mother. She is not a goddess ' +
                  'anybody ever prayed to: he thought her up himself. Children who visit ' +
                  'usually count the babies, and usually get a different number each ' +
                  'time, because some of them are almost hidden.',
              },
              question: {
                q: {
                  el: 'Ποια είναι η Μητέρα του Νερού;',
                  en: 'Who is the Water Mother?',
                },
                answers: [
                  { el: 'Μια εφεύρεση του γλύπτη', en: 'An invention of the sculptor' },
                  { el: 'Μια θεά των αρχαίων Δανών', en: 'A goddess of the old Danes' },
                  { el: 'Μια βασίλισσα της Δανίας', en: 'A queen of Denmark long ago' },
                  { el: 'Μια ηρωίδα από παραμύθι', en: 'A heroine from a fairy tale' },
                ],
                explanation: {
                  el:
                    'Ο Κάι Νίλσεν δεν αντέγραψε καμιά παλιά ιστορία. Έφτιαξε μια δική ' +
                    'του μορφή, μια μητέρα γεμάτη παιδιά, και την έβαλε μέσα στο νερό.',
                  en:
                    'Kai Nielsen was not copying an old story. He invented a figure of ' +
                    'his own, a mother covered in children, and set her in the water.',
                },
              },
            },
            {
              id: 'copenhagen-glyptoteket-palm',
              name: { el: 'Ο φοίνικας κάτω από το τζάμι', en: 'The palm under the glass' },
              blurb: {
                el:
                  'Ο φοίνικας δεν είναι δανέζικο φυτό. Έξω από αυτόν τον χώρο ο χειμώνας ' +
                  'πέφτει κάτω από το μηδέν και ένας φοίνικας θα πέθαινε μέσα σε μία ' +
                  'εβδομάδα. Μέσα, κάτω από το γυαλί, κάνει ζέστη όλον τον χρόνο, και το ' +
                  'δέντρο έχει ψηλώσει τόσο που τα πάνω του φύλλα σχεδόν αγγίζουν τον ' +
                  'τρούλο. Δεν είναι εδώ μόνο για στολίδι. Ο Καρλ Γιάκομπσεν ήθελε έναν ' +
                  'χώρο όπου ο κόσμος θα κάθεται, θα ζεσταίνεται και θα κοιτάζει γλυπτά ' +
                  'χωρίς βιασύνη. Ένας κήπος το κάνει αυτό καλύτερα από έναν διάδρομο.',
                en:
                  'A palm is not a Danish plant. Outside this room the winter drops below ' +
                  'freezing and a palm would be dead within a week. Inside, under the ' +
                  'glass, it is warm all year, and the tree has grown tall enough that its ' +
                  'top leaves almost touch the dome. It is not here only for decoration. ' +
                  'Carl Jacobsen wanted a place where people could sit down, get warm and ' +
                  'look at sculpture without hurrying. A garden does that better than a ' +
                  'corridor does.',
              },
              question: {
                q: {
                  el: 'Γιατί ήθελε ο ιδρυτής έναν κήπο μέσα στο μουσείο;',
                  en: 'Why did the founder want a garden inside the museum?',
                },
                answers: [
                  { el: 'Για να κάθεται ο κόσμος χωρίς βιασύνη', en: 'So people could sit without hurrying' },
                  { el: 'Για να πουλάει φρέσκους χουρμάδες', en: 'So he could sell fresh dates there' },
                  { el: 'Για να κρύβει τα παλιά του γλυπτά', en: 'So he could hide his older statues' },
                  { el: 'Για να στεγνώνουν τα βρεγμένα παλτά', en: 'So the wet winter coats could dry' },
                ],
                explanation: {
                  el:
                    'Ένα μουσείο κουράζει αν το περπατάς όρθιος. Ο κήπος έδωσε ένα ζεστό ' +
                    'μέρος να καθίσεις, και ο κόσμος μένει πιο πολλή ώρα.',
                  en:
                    'A museum tires you out if you only ever stand. The garden gave people ' +
                    'a warm place to sit, and so they stay much longer.',
                },
              },
            },
          ],
        },
        {
          id: 'copenhagen-glyptoteket-egypt',
          emoji: '⚱️',
          name: { el: 'Η αίθουσα της Αιγύπτου', en: 'The Egyptian room' },
          intro: {
            el:
              'Η αιγυπτιακή συλλογή μαζεύτηκε κομμάτι κομμάτι για πάνω από έναν αιώνα. ' +
              'Εδώ υπάρχουν ζωγραφισμένα φέρετρα, πέτρινα κεφάλια και βιτρίνες γεμάτες ' +
              'μικροσκοπικές φιγούρες. Τα περισσότερα βγήκαν από τάφους, και οι τάφοι στην ' +
              'Αίγυπτο είναι στεγνοί, οπότε κράτησαν χρώματα και ύφασμα που αλλού θα είχαν ' +
              'γίνει σκόνη πριν από τρεις χιλιάδες χρόνια.',
            en:
              'The Egyptian collection was gathered piece by piece over more than a ' +
              'century. There are painted coffins here, stone heads, and cases full of ' +
              'tiny figures. Most of it came out of tombs, and tombs in Egypt are dry, so ' +
              'they kept colour and cloth that anywhere else would have turned to dust ' +
              'three thousand years ago.',
          },
          exhibits: [
            {
              id: 'copenhagen-glyptoteket-coffin',
              name: { el: 'Το ζωγραφισμένο φέρετρο', en: 'The painted coffin' },
              blurb: {
                el:
                  'Ένα αιγυπτιακό φέρετρο δεν ήταν ένα απλό κουτί. Ήταν ζωγραφισμένο σε ' +
                  'κάθε πλευρά με μορφές, πουλιά, καράβια και στήλες γραφής, και η γραφή ' +
                  'δεν είναι διακόσμηση: είναι οδηγίες και προστασία για τον άνθρωπο μέσα. ' +
                  'Το καπάκι είναι συχνά σκαλισμένο σαν πρόσωπο, ώστε το φέρετρο να μοιάζει ' +
                  'λίγο με αυτόν που κρατάει. Το ξύλο στην Αίγυπτο ήταν σπάνιο, οπότε τα ' +
                  'καλά σανίδια τα ξαναχρησιμοποιούσαν, τα ένωναν και τα έβαφαν από πάνω. ' +
                  'Κοίτα τα χρώματα: μπλε, κόκκινο και κίτρινο, ακόμα ζωντανά.',
                en:
                  'An Egyptian coffin was not a plain box. It was painted on every side ' +
                  'with figures, birds, boats and columns of writing, and the writing is ' +
                  'not decoration: it is instructions and protection for the person ' +
                  'inside. The lid is often carved as a face, so that the coffin looks a ' +
                  'little like whoever it holds. Wood was scarce in Egypt, so good planks ' +
                  'were reused, joined together and painted over. Look at the colours: ' +
                  'blue, red and yellow, still bright.',
              },
              question: {
                q: {
                  el: 'Τι είναι η γραφή πάνω στο φέρετρο;',
                  en: 'What is the writing on the coffin?',
                },
                answers: [
                  { el: 'Ξόρκια και προστασίες', en: 'Spells and protections' },
                  { el: 'Παραμύθια και γρίφοι', en: 'Fairy tales and riddles' },
                  { el: 'Λογαριασμοί και ονόματα', en: 'Bills and family names' },
                  { el: 'Συνταγές και κατάλογοι', en: 'Recipes and long lists' },
                ],
                explanation: {
                  el:
                    'Οι στήλες με τα ιερογλυφικά δεν είναι στολίδι. Είναι ξόρκια και ' +
                    'προστασία για το ταξίδι του ανθρώπου που βρίσκεται μέσα.',
                  en:
                    'The columns of hieroglyphs are not ornament. They are spells and ' +
                    'protection for the journey of the person inside.',
                },
              },
            },
            {
              id: 'copenhagen-glyptoteket-shabti',
              name: { el: 'Οι μικροί υπηρέτες', en: 'The little servants' },
              blurb: {
                el:
                  'Μέσα στις βιτρίνες στέκονται σειρές από μικρές φιγούρες, η καθεμιά ' +
                  'περίπου όσο η παλάμη σου, από γαλαζοπράσινο γυαλισμένο πηλό ή από ' +
                  'πέτρα. Λέγονται σαμπτί, και τις έβαζαν στους τάφους σε μεγάλες ' +
                  'ποσότητες. Οι Αιγύπτιοι πίστευαν ότι και στην άλλη ζωή θα υπήρχε ' +
                  'δουλειά — σκάψιμο, κουβάλημα νερού, χωράφια — και οι φιγούρες ήταν εκεί ' +
                  'για να την κάνουν αντί για τον νεκρό. Μερικοί τάφοι είχαν εκατοντάδες, ' +
                  'κάποτε μία για κάθε μέρα του χρόνου, μαζί με επιστάτες που τις ' +
                  'επέβλεπαν.',
                en:
                  'Inside the cases stand rows of small figures, each about the size of ' +
                  'your hand, made of blue-green glazed clay or of stone. They are called ' +
                  'shabti, and they were put into graves in large numbers. The Egyptians ' +
                  'believed there would still be work in the next life — digging, carrying ' +
                  'water, farming — and the little figures were there to do it instead of ' +
                  'the dead person. Some tombs held hundreds, sometimes one for every day ' +
                  'of the year, with overseers to keep them at it.',
              },
              question: {
                q: {
                  el: 'Τι δουλειά είχαν οι φιγούρες σαμπτί;',
                  en: 'What job did the shabti figures have?',
                },
                answers: [
                  { el: 'Να δουλεύουν στην άλλη ζωή', en: 'To work in the next life' },
                  { el: 'Να μετράνε όλες τις μέρες', en: 'To count out all the days' },
                  { el: 'Να κρατάνε ψηλά το φέρετρο', en: 'To hold the coffin up high' },
                  { el: 'Να παίζουν με τα παιδιά', en: 'To be toys for the children' },
                ],
                explanation: {
                  el:
                    'Οι Αιγύπτιοι περίμεναν δουλειά και μετά τον θάνατο. Οι μικρές ' +
                    'φιγούρες θα την έκαναν στη θέση τους, γι’ αυτό ήταν τόσες πολλές.',
                  en:
                    'Egyptians expected work after death too. The little figures were to ' +
                    'do it in their place, which is why there were so many of them.',
                },
              },
            },
            {
              id: 'copenhagen-glyptoteket-granite',
              name: { el: 'Το γρανιτένιο κεφάλι', en: 'The granite head' },
              blurb: {
                el:
                  'Ο γρανίτης είναι από τις πιο σκληρές πέτρες που υπάρχουν, και οι ' +
                  'Αιγύπτιοι γλύπτες τον διάλεγαν επίτηδες. Η μαλακή πέτρα σκαλίζεται πιο ' +
                  'γρήγορα, όμως θρυμματίζεται· ο γρανίτης στομώνει τα εργαλεία σου και ' +
                  'μετά αντέχει χιλιάδες χρόνια. Ένα τέτοιο κεφάλι δουλεύτηκε με άλλες, ' +
                  'ακόμα σκληρότερες πέτρες σαν σφυριά και με τριβή από άμμο, όχι με ' +
                  'σιδερένια καλέμια: το σίδερο ήταν σπάνιο και δεν θα τον έκοβε ούτως ή ' +
                  'άλλως. Το αποτέλεσμα είναι ένα πρόσωπο που πέρασε πλημμύρες, κλέφτες ' +
                  'και άμμο, και ακόμα σε κοιτάζει ίσια.',
                en:
                  'Granite is one of the hardest stones there is, and Egyptian sculptors ' +
                  'chose it on purpose. Soft stone carves faster but crumbles; granite ' +
                  'blunts your tools and then lasts for thousands of years. A head like ' +
                  'this was worked with other, even harder stones used as hammers and with ' +
                  'sand as an abrasive, not with iron chisels: iron was scarce and would ' +
                  'not have cut it anyway. The result is a face that has come through ' +
                  'floods, thieves and sand, and still looks straight back at you.',
              },
              question: {
                q: {
                  el: 'Γιατί διάλεγαν τον σκληρό γρανίτη;',
                  en: 'Why did they choose hard granite?',
                },
                answers: [
                  { el: 'Για να αντέξει χιλιάδες χρόνια', en: 'So it would last thousands of years' },
                  { el: 'Για να σκαλίζεται πιο γρήγορα', en: 'So it would be quicker to carve' },
                  { el: 'Για να είναι πιο ελαφρύ κομμάτι', en: 'So the finished piece stays light' },
                  { el: 'Για να λάμπει κάτω από το φως', en: 'So it would shine under the lamps' },
                ],
                explanation: {
                  el:
                    'Ο γρανίτης είναι δύσκολος στη δουλειά και εύκολος στον χρόνο. Γι’ ' +
                    'αυτό τα πρόσωπα που σκαλίστηκαν σε αυτόν υπάρχουν ακόμα.',
                  en:
                    'Granite is hard on the worker and easy on time. That is why the faces ' +
                    'carved into it are still here at all.',
                },
              },
            },
          ],
        },
        {
          id: 'copenhagen-glyptoteket-roman-faces',
          emoji: '🏛️',
          name: { el: 'Τα ρωμαϊκά πρόσωπα', en: 'The Roman faces' },
          intro: {
            el:
              'Μια ολόκληρη αίθουσα με μαρμάρινα κεφάλια, στη σειρά, στο ύψος του δικού ' +
              'σου. Δεν είναι θεοί. Είναι Ρωμαίοι, αληθινοί άνθρωποι που οι οικογένειές ' +
              'τους πλήρωσαν για ένα πορτρέτο. Το μουσείο έχει μία από τις μεγαλύτερες ' +
              'ομάδες ρωμαϊκών πορτρέτων που υπάρχουν, και εδώ αποδείχτηκε ότι κάποτε ' +
              'ήταν όλα βαμμένα.',
            en:
              'A whole room of marble heads, in rows, at about your own height. They are ' +
              'not gods. They are Romans, real people whose families paid for a portrait. ' +
              'The museum holds one of the largest groups of Roman portraits anywhere, and ' +
              'it was here that they were shown to have once been painted.',
          },
          exhibits: [
            {
              id: 'copenhagen-glyptoteket-emperors',
              name: { el: 'Ο τοίχος με τους αυτοκράτορες', en: 'The wall of emperors' },
              blurb: {
                el:
                  'Ένας ολόκληρος τοίχος με κεφάλια, όλα από μάρμαρο, όλα να κοιτάζουν ' +
                  'λίγο δίπλα σου. Οι περισσότεροι δεν είναι θεοί ούτε ήρωες αλλά ' +
                  'άνθρωποι που έζησαν. Γι’ αυτό έχουν στραβές μύτες, λεπτά χείλη, βαριά ' +
                  'σαγόνια και φαλάκρες: ένα ρωμαϊκό πορτρέτο έπρεπε να μοιάζει με τον ' +
                  'άνθρωπο, όχι να τον κολακεύει. Ένας αυτοκράτορας που είχε μεγάλα αυτιά ' +
                  'έμεινε στο μάρμαρο με μεγάλα αυτιά. Περπάτησε αργά τη σειρά και ' +
                  'σταματάει να μοιάζει με μουσείο: αρχίζει να μοιάζει με πλήθος.',
                en:
                  'A whole wall of heads, all in marble, all looking slightly past you. ' +
                  'Most of them are neither gods nor heroes but people who lived. That is ' +
                  'why they have crooked noses, thin lips, heavy jaws and bald patches: a ' +
                  'Roman portrait was meant to look like the person, not to flatter them. ' +
                  'An emperor with big ears stayed in the marble with big ears. Walk the ' +
                  'row slowly and it stops feeling like a museum: it starts feeling like a ' +
                  'crowd.',
              },
              question: {
                q: {
                  el: 'Γιατί έχουν στραβές μύτες και φαλάκρες;',
                  en: 'Why do they have crooked noses and bald heads?',
                },
                answers: [
                  { el: 'Έπρεπε να μοιάζει με τον άνθρωπο', en: 'The portrait had to look like them' },
                  { el: 'Ο γλύπτης δεν ήξερε να σκαλίζει', en: 'The sculptor could not carve well' },
                  { el: 'Το μάρμαρο έσπασε με τον καιρό', en: 'The marble broke over the years' },
                  { el: 'Τα έφτιαχναν όλα πολύ βιαστικά', en: 'They were always made in a hurry' },
                ],
                explanation: {
                  el:
                    'Οι Ρωμαίοι ήθελαν πορτρέτα που να αναγνωρίζονται. Μια στραβή μύτη ' +
                    'δεν ήταν λάθος του γλύπτη· ήταν η μύτη του ανθρώπου.',
                  en:
                    'Romans wanted portraits you could recognise. A crooked nose was not ' +
                    'the sculptor’s mistake; it was the man’s nose.',
                },
              },
            },
            {
              id: 'copenhagen-glyptoteket-child-portrait',
              name: { el: 'Το πορτρέτο ενός παιδιού', en: 'The portrait of a child' },
              blurb: {
                el:
                  'Ανάμεσα στους αυτοκράτορες και τους στρατηγούς υπάρχουν και παιδιά. Το ' +
                  'πορτρέτο ενός Ρωμαίου παιδιού ξεχωρίζει εύκολα: πιο στρογγυλά μάγουλα, ' +
                  'πιο απαλά μαλλιά, καμία ρυτίδα να σκαλιστεί. Φτιάχτηκαν για τον ίδιο ' +
                  'λόγο με τα μεγάλα, για να μείνουν στο σπίτι της οικογένειας ή δίπλα σε ' +
                  'έναν τάφο. Πολλά ρωμαϊκά παιδιά δεν πρόλαβαν να μεγαλώσουν, και ένα ' +
                  'πορτρέτο ήταν ένας τρόπος να μείνουν στο δωμάτιο. Είναι λυπηρός λόγος ' +
                  'για ένα όμορφο πράγμα, και αξίζει να το ξέρεις όσο το κοιτάς.',
                en:
                  'Among the emperors and the generals there are children. A Roman child’s ' +
                  'portrait is easy to pick out: rounder cheeks, softer hair, no wrinkles ' +
                  'to carve. They were made for the same reason as the grown-up ones, to ' +
                  'stay in the family house or stand beside a grave. Many Roman children ' +
                  'did not live to grow up, and a portrait was a way of keeping them in ' +
                  'the room. It is a sad reason for a beautiful thing, and it is worth ' +
                  'knowing while you look.',
              },
              question: {
                q: {
                  el: 'Πού έστηναν συνήθως ένα τέτοιο πορτρέτο;',
                  en: 'Where was a portrait like this usually kept?',
                },
                answers: [
                  { el: 'Στο σπίτι ή δίπλα σε τάφο', en: 'At home or beside a grave' },
                  { el: 'Στη μέση της αγοράς τους', en: 'In the middle of a market' },
                  { el: 'Στον πάτο ενός πηγαδιού', en: 'At the bottom of a well' },
                  { el: 'Πάνω σε ένα πολεμικό πλοίο', en: 'On board a ship of war' },
                ],
                explanation: {
                  el:
                    'Το πορτρέτο έμενε εκεί όπου το έβλεπε η οικογένεια: στο σπίτι της, ή ' +
                    'στο μνήμα, ώστε το πρόσωπο να μη χαθεί.',
                  en:
                    'The portrait stayed where the family would see it: in their house, ' +
                    'or at the grave, so that the face would not be lost.',
                },
              },
            },
            {
              id: 'copenhagen-glyptoteket-colour',
              name: { el: 'Το μάρμαρο που κράτησε το χρώμα του', en: 'The marble that kept its colour' },
              blurb: {
                el:
                  'Για διακόσια χρόνια τα μουσεία έδειχναν την αρχαία γλυπτική ως καθαρή ' +
                  'λευκή πέτρα, και όλοι υπέθεταν ότι έτσι είχε φτιαχτεί. Ερευνητές αυτού ' +
                  'του μουσείου έψαξαν με δυνατό πλάγιο φως και με υπεριώδεις λάμπες, και ' +
                  'βρήκαν αυτό που δεν πιάνει το μάτι: κόκκους χρωστικής κολλημένους μέσα ' +
                  'στις χαραματιές και τις κοιλότητες του μαρμάρου. Μερικά κομμάτια εδώ ' +
                  'στέκονται δίπλα σε βαμμένα αντίγραφα, και τα αντίγραφα σοκάρουν: έντονο ' +
                  'κόκκινο, μπλε, χρυσό, υφάσματα με σχέδια. Το λευκό μάρμαρο δεν είναι το ' +
                  'έργο. Είναι το έργο με το χρώμα φαγωμένο.',
                en:
                  'For two hundred years museums showed ancient sculpture as clean white ' +
                  'stone, and everyone assumed that was how it had been made. Researchers ' +
                  'at this museum looked with strong side-lighting and ultraviolet lamps, ' +
                  'and found what the eye misses: grains of pigment lodged in the ' +
                  'scratches and hollows of the marble. Some pieces here stand beside ' +
                  'painted copies, and the copies are a shock: bright red, blue, gold, ' +
                  'patterned cloth. The white marble is not the artwork. It is the artwork ' +
                  'with the paint worn off.',
              },
              question: {
                q: {
                  el: 'Πώς βρήκαν το χρώμα που δεν φαίνεται;',
                  en: 'How did they find colour nobody could see?',
                },
                answers: [
                  { el: 'Με πλάγιο φως και ειδικές λάμπες', en: 'With side light and special lamps' },
                  { el: 'Πλένοντας τα μάρμαρα με σαπούνι', en: 'By washing the marble with soap' },
                  { el: 'Ρωτώντας τους παλιούς φύλακες', en: 'By asking the older museum guards' },
                  { el: 'Διαβάζοντας ρωμαϊκές συνταγές', en: 'By reading old Roman recipe books' },
                ],
                explanation: {
                  el:
                    'Το πλάγιο φως δείχνει ανάγλυφα που δεν βλέπεις κατά μέτωπο, και ' +
                    'κάποιες λάμπες κάνουν τα υπολείμματα χρώματος να λάμψουν.',
                  en:
                    'Side light shows up relief you cannot see head-on, and certain lamps ' +
                    'make the leftover traces of pigment glow.',
                },
              },
            },
          ],
        },
      ],
      riddles: [
        {
          id: 'copenhagen-glyptoteket-riddle-1',
          difficulty: 1,
          prompt: {
            el:
              'Είμαι από πέτρα και είμαι σκεπασμένη με μωρά. Σκαρφαλώνουν στα μπράτσα ' +
              'μου, κάθονται στα γόνατά μου, κοιμούνται στο πλευρό μου. Ξαπλώνω μέσα στο ' +
              'νερό, κάτω από φύλλα φοίνικα.',
            en:
              'I am made of stone and I am covered in babies. They climb my arms, sit on ' +
              'my knees and sleep against my side. I lie in the water, underneath palm ' +
              'leaves.',
          },
          hint: {
            el: 'Κανείς δεν μου προσευχήθηκε ποτέ: με σκέφτηκε ένας γλύπτης το 1920.',
            en: 'Nobody ever prayed to me: a sculptor thought me up around 1920.',
          },
          answerExhibitId: 'copenhagen-glyptoteket-water-mother',
        },
        {
          id: 'copenhagen-glyptoteket-riddle-2',
          difficulty: 2,
          prompt: {
            el:
              'Είμαστε μικροί σαν την παλάμη σου και είμαστε πάρα πολλοί. Μας έβαλαν σε ' +
              'τάφους πριν από χιλιάδες χρόνια για να σκάβουμε και να κουβαλάμε νερό στη ' +
              'θέση κάποιου άλλου.',
            en:
              'We are as small as your palm and there are a great many of us. We were put ' +
              'into graves thousands of years ago to dig and to carry water in somebody ' +
              'else’s place.',
          },
          hint: {
            el: 'Στεκόμαστε σε σειρές μέσα σε βιτρίνα, στην ίδια αίθουσα με τα φέρετρα.',
            en: 'We stand in rows inside a case, in the same room as the coffins.',
          },
          answerExhibitId: 'copenhagen-glyptoteket-shabti',
        },
        {
          id: 'copenhagen-glyptoteket-riddle-3',
          difficulty: 3,
          prompt: {
            el:
              'Δύο χιλιάδες χρόνια όλοι με έλεγαν λευκό, και δεν ήμουν ποτέ. Κρύβω ακόμα ' +
              'μικροσκοπικούς κόκκους χρώματος στις χαραματιές μου, και μια λάμπα τους ' +
              'βρήκε.',
            en:
              'For two thousand years everyone called me white, and I never was. I still ' +
              'hide tiny grains of colour in my scratches, and a lamp found them.',
          },
          hint: {
            el: 'Δίπλα μου στέκεται ένα αντίγραφό μου βαμμένο, και ξαφνιάζει.',
            en: 'A painted copy of me stands next to me, and it is a shock.',
          },
          answerExhibitId: 'copenhagen-glyptoteket-colour',
        },
      ],
    },
  },

  // ------------------------------------------------------------ national museum
  {
    id: 'copenhagen-nationalmuseet',
    cityId: 'copenhagen',
    emoji: '🏺',
    category: 'museum',
    difficulty: 2,

    name: { el: 'Το Εθνικό Μουσείο της Δανίας', en: 'The National Museum of Denmark' },
    tagline: {
      el: 'Ένας ήλιος πάνω σε ρόδες, βγαλμένος από βάλτο',
      en: 'A sun on wheels, pulled out of a bog by a plough',
    },
    story: {
      el:
        'Το Εθνικό Μουσείο μένει στο Πρίνσενς Παλαί, ένα παλάτι της δεκαετίας του 1740, ' +
        'και γι’ αυτό οι αίθουσές του είναι πιο μεγαλόπρεπες από πολλά αντικείμενα που ' +
        'φιλοξενούν. Σχεδόν όλα βγήκαν από δανέζικο χώμα: από βάλτους, χωράφια και ' +
        'τάφους. Οι τυρφώνες της Δανίας είναι υγροί, κρύοι και φτωχοί σε οξυγόνο, και ' +
        'μέσα τους τα πράγματα σαπίζουν πάρα πολύ αργά. Έτσι μια μπρούντζινη τρομπέτα ' +
        'που έπεσε σε έναν βάλτο πριν από τρεις χιλιάδες χρόνια μπορεί να βγει και να ' +
        'παίξει. Το 1902 ένας αγρότης όργωνε στο Τρούντχολμ, το αλέτρι του χτύπησε ' +
        'μέταλλο, και ανέβηκε ένα μπρούντζινο άλογο που τραβάει έναν χρυσό δίσκο πάνω σε ' +
        'ρόδες: το Ηλιακό Άρμα, φτιαγμένο γύρω στο 1400 π.Χ. Σε άλλο χωράφι, μια δρύινη ' +
        'κάσα κρατούσε μια έφηβη με φούστα από κορδόνια, με τα μαλλιά και τα δόντια της ' +
        'ακόμα εκεί. Το μουσείο έχει και ολόκληρο όροφο για παιδιά.',
      en:
        'The National Museum lives in the Prince’s Mansion, a palace from the 1740s, which ' +
        'is why its rooms are grander than many of the objects they hold. Almost all of it ' +
        'came out of Danish ground: bogs, fields and graves. Denmark’s peat bogs are wet, ' +
        'cold and short of oxygen, and things rot in them extremely slowly. So a bronze ' +
        'horn dropped into a marsh three thousand years ago can be lifted out and played. ' +
        'In 1902 a farmer was ploughing at Trundholm, his plough struck metal, and up came ' +
        'a bronze horse pulling a golden disc on wheels: the Sun Chariot, made around 1400 ' +
        'BC. In another field an oak coffin held a teenage girl in a skirt of twisted ' +
        'cords, with her hair and her teeth still there. The museum also keeps a whole ' +
        'floor for children.',
    },
    facts: [
      {
        el: 'Στεγάζεται στο Πρίνσενς Παλαί, ένα παλάτι χτισμένο τη δεκαετία του 1740.',
        en: 'It is housed in the Prince’s Mansion, a palace built in the 1740s.',
      },
      {
        el: 'Το Ηλιακό Άρμα βρέθηκε το 1902 από αγρότη που όργωνε έναν αποξηραμένο βάλτο.',
        en: 'The Sun Chariot was found in 1902 by a farmer ploughing a drained bog.',
      },
      {
        el: 'Για όσους δεν έχουν κλείσει τα 18 η είσοδος δεν κοστίζει τίποτα.',
        en: 'For anyone under eighteen there is nothing to pay at the door.',
      },
    ],
    location: {
      lat: 55.67472,
      lng: 12.57472,
      anchor: 'centroid',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q648166', deltaM: 0 },
        { kind: 'osm', ref: 'relation/1989714', deltaM: 5 },
        { kind: 'wikipedia', ref: 'National Museum of Denmark', deltaM: 3 },
      ],
      verifiedAt: '2026-09-14',
      note: 'Q648166 is the institution, and it is used here only because its Wikidata point is identical to five decimals to the building item, Prinsens Palæ (Q3432994) — so there is no two-streets-away risk to avoid. Q3432994 has no OpenStreetMap object at all and would have shipped at C on the very same coordinate.',
      findIt: {
        el: 'Η είσοδος βλέπει στην πλατεία Ny Vestergade, όχι στο κανάλι. Ψάξε τη μεγάλη αυλή.',
        en: 'The entrance faces Ny Vestergade, not the canal. Look for the wide courtyard.',
      },
    },
    question: {
      q: {
        el: 'Γιατί σώζονται τόσο καλά τα πράγματα μέσα στους βάλτους;',
        en: 'Why do things survive so well inside peat bogs?',
      },
      answers: [
        { el: 'Το νερό τους δεν έχει οξυγόνο', en: 'Their water holds no oxygen' },
        { el: 'Ο βάλτος είναι πολύ ζεστός', en: 'A bog is a very warm place' },
        { el: 'Το νερό τους έχει πολύ αλάτι', en: 'Their water is very salty' },
        { el: 'Ο βάλτος στεγνώνει κάθε χρόνο', en: 'A bog dries out every year' },
      ],
      explanation: {
        el:
          'Τα μικρόβια που σαπίζουν τα πράγματα χρειάζονται οξυγόνο. Στο κρύο νερό του ' +
          'βάλτου δεν το βρίσκουν, οπότε ξύλο, μαλλί, μαλλιά και δέρμα αντέχουν αιώνες.',
        en:
          'The microbes that rot things need oxygen. In the cold water of a bog they ' +
          'cannot find it, so wood, wool, hair and skin last for centuries.',
      },
    },

    museum: {
      doorNote: {
        el: 'Υπάρχει ολόκληρος όροφος για παιδιά, με αντίγραφα που επιτρέπεται να πιάσεις και να φορέσεις.',
        en: 'There is a whole floor for children, with copies you are allowed to touch and wear.',
      },
      rooms: [
        {
          id: 'copenhagen-nationalmuseet-bronze-age',
          emoji: '☀️',
          name: { el: 'Η Εποχή του Χαλκού', en: 'The Bronze Age' },
          intro: {
            el:
              'Τρεις χιλιάδες χρόνια πριν, εδώ δεν υπήρχε γραφή. Ό,τι ξέρουμε για αυτούς ' +
              'τους ανθρώπους το ξέρουμε από πράγματα: όπλα, κοσμήματα, ρούχα, μουσικά ' +
              'όργανα. Πολλά τα άφησαν επίτηδες μέσα σε βάλτους, μάλλον ως δώρα. Η ' +
              'αίθουσα αυτή είναι γεμάτη μπρούντζο που έλαμπε κάποτε σαν χρυσάφι, πριν ' +
              'πρασινίσει.',
            en:
              'Three thousand years ago nobody here wrote anything down. Everything we ' +
              'know about these people we know from things: weapons, jewellery, clothes, ' +
              'instruments. A great deal of it was left in bogs on purpose, most likely as ' +
              'gifts. This room is full of bronze that once shone like gold, before it ' +
              'turned green.',
          },
          exhibits: [
            {
              id: 'copenhagen-nationalmuseet-sun-chariot',
              name: { el: 'Το Ηλιακό Άρμα', en: 'The Sun Chariot' },
              blurb: {
                el:
                  'Το 1902 ένας αγρότης στο Τρούντχολμ όργωνε ένα χωράφι που παλιά ήταν ' +
                  'βάλτος, και το αλέτρι του χτύπησε μέταλλο. Αυτό που βγήκε ήταν ένα ' +
                  'μπρούντζινο άλογο πάνω σε ρόδες, που τραβάει έναν δίσκο περίπου σαν ' +
                  'πιάτο φαγητού. Η μία μεριά του δίσκου είναι σκεπασμένη με φύλλο ' +
                  'χρυσού, η άλλη είναι γυμνός μπρούντζος. Φτιάχτηκε γύρω στο 1400 π.Χ., ' +
                  'και οι αρχαιολόγοι πιστεύουν ότι δείχνει τον ήλιο να τον τραβούν στον ' +
                  'ουρανό: χρυσή η φωτεινή μεριά της μέρας, σκοτεινή η άλλη, για το ' +
                  'ταξίδι της νύχτας.',
                en:
                  'In 1902 a farmer at Trundholm was ploughing a field that had once been ' +
                  'a bog, and his plough struck metal. What came up was a bronze horse on ' +
                  'wheels, pulling a disc about the size of a dinner plate. One side of ' +
                  'the disc is covered in gold leaf; the other is bare bronze. It was made ' +
                  'around 1400 BC, and archaeologists think it shows the sun being pulled ' +
                  'across the sky: gold for the bright side of the day, dark for the ' +
                  'other, on the journey back through the night.',
              },
              question: {
                q: {
                  el: 'Γιατί έχει χρυσάφι μόνο η μία μεριά του δίσκου;',
                  en: 'Why is only one side of the disc covered in gold?',
                },
                answers: [
                  { el: 'Η μία μεριά είναι η μέρα', en: 'One side stands for the day' },
                  { el: 'Το χρυσάφι τους τελείωσε', en: 'They ran out of gold leaf' },
                  { el: 'Το άλλο μισό το έκλεψαν', en: 'The other half was stolen' },
                  { el: 'Ο μπρούντζος ήταν φθηνός', en: 'Bronze was simply cheaper' },
                ],
                explanation: {
                  el:
                    'Ο ήλιος λάμπει τη μέρα και ταξιδεύει πίσω τη νύχτα. Ο δίσκος λέει ' +
                    'ακριβώς αυτό: χρυσός από τη μία, σκούρος από την άλλη.',
                  en:
                    'The sun shines by day and travels back by night. The disc says ' +
                    'exactly that: gold on one face, dark on the other.',
                },
              },
            },
            {
              id: 'copenhagen-nationalmuseet-egtved-girl',
              name: { el: 'Το κορίτσι του Έγκτβεντ', en: 'The Egtved Girl' },
              blurb: {
                el:
                  'Το 1921 άνοιξαν μια δρύινη κάσα μέσα σε έναν τύμβο στο Έγκτβεντ. Μέσα ' +
                  'ήταν μια κοπέλα δεκαέξι ή δεκαεφτά χρονών, θαμμένη γύρω στο 1370 π.Χ. ' +
                  'Τα κόκαλά της είχαν διαλυθεί, όμως το όξινο νερό του τύμβου κράτησε ' +
                  'αυτά που συνήθως χάνονται: τα ξανθά μαλλιά της, τα νύχια της, τα ' +
                  'δόντια της, μια μάλλινη μπλούζα και μια φούστα από στριφτά κορδόνια. ' +
                  'Είχαν αφήσει πάνω της και λουλούδια, αχίλλεια ανθισμένη, που μας λέει ' +
                  'ότι θάφτηκε καλοκαίρι.',
                en:
                  'In 1921 an oak coffin was opened inside a burial mound at Egtved. In it ' +
                  'lay a girl of about sixteen or seventeen, buried around 1370 BC. Her ' +
                  'bones had gone, but the acid water in the mound kept what usually ' +
                  'disappears: her fair hair, her fingernails, her teeth, a woollen top ' +
                  'and a skirt made of twisted cords. Flowers had been laid on her too, ' +
                  'yarrow in bloom, which tells us she was buried in the summer.',
              },
              question: {
                q: {
                  el: 'Πώς ξέρουμε ότι θάφτηκε καλοκαίρι;',
                  en: 'How do we know she was buried in summer?',
                },
                answers: [
                  { el: 'Από ένα ανθισμένο λουλούδι', en: 'From a flower still in bloom' },
                  { el: 'Από ένα γράμμα στην κάσα', en: 'From a letter in the coffin' },
                  { el: 'Από τα ρούχα του χειμώνα', en: 'From her thick winter clothes' },
                  { el: 'Από τον χάρτη του τύμβου', en: 'From a map of the burial mound' },
                ],
                explanation: {
                  el:
                    'Η αχίλλεια ανθίζει το καλοκαίρι. Το λουλούδι που άφησαν πάνω της ' +
                    'ήταν ανθισμένο, άρα η ταφή έγινε τη ζεστή εποχή.',
                  en:
                    'Yarrow flowers in summer. The flower laid on her was in bloom, so the ' +
                    'burial happened in the warm season.',
                },
              },
            },
            {
              id: 'copenhagen-nationalmuseet-lurs',
              name: { el: 'Οι λούροι', en: 'The lurs' },
              blurb: {
                el:
                  'Ο λούρος είναι μια μπρούντζινη τρομπέτα, καμπυλωτή σαν χαυλιόδοντας ' +
                  'και σχεδόν τόσο μακριά όσο είναι ψηλός ένας άνθρωπος. Φτιάχτηκαν εδώ ' +
                  'πριν από τρεις χιλιάδες χρόνια περίπου, και σχεδόν πάντα βρίσκονται σε ' +
                  'ζευγάρια, ακουμπισμένα μέσα σε βάλτο, να γυρίζουν προς αντίθετες ' +
                  'μεριές σαν δύο κέρατα. Κανείς δεν έγραψε σε τι χρησίμευαν. Μερικοί από ' +
                  'όσους βρέθηκαν παίζουν ακόμα: ένας μουσικός ακουμπάει τα χείλη του και ' +
                  'βγάζει νότα από ένα όργανο που κοιμόταν σε νερό από την Εποχή του ' +
                  'Χαλκού.',
                en:
                  'A lur is a bronze horn, curved like a tusk and nearly as long as a ' +
                  'person is tall. They were made here around three thousand years ago, ' +
                  'and they are almost always found in pairs, laid down in a bog, curving ' +
                  'in opposite directions like two horns. Nobody wrote down what they were ' +
                  'for. Some of the ones recovered still work: a player puts their lips to ' +
                  'the mouthpiece and gets a note out of an instrument that has been under ' +
                  'water since the Bronze Age.',
              },
              question: {
                q: {
                  el: 'Πώς βρίσκονται σχεδόν πάντα οι λούροι;',
                  en: 'How are lurs almost always found?',
                },
                answers: [
                  { el: 'Σε ζευγάρια, μέσα σε βάλτο', en: 'In pairs, laid down in a bog' },
                  { el: 'Ένας ένας, μέσα σε τάφο', en: 'One by one, inside a grave' },
                  { el: 'Σε σωρούς, κάτω από σπίτι', en: 'In heaps, under an old house' },
                  { el: 'Κομμένοι, μέσα σε ποτάμι', en: 'Cut up, in the bed of a river' },
                ],
                explanation: {
                  el:
                    'Σχεδόν πάντα είναι δύο μαζί, ακουμπισμένοι σε βάλτο και γυρισμένοι ' +
                    'αντίθετα. Μοιάζει με δώρο που το άφησαν επίτηδες στο νερό.',
                  en:
                    'They nearly always come in twos, set down in a bog and curving apart. ' +
                    'It looks like a gift left in the water on purpose.',
                },
              },
            },
          ],
        },
        {
          id: 'copenhagen-nationalmuseet-vikings',
          emoji: '🪓',
          name: { el: 'Οι Βίκινγκ', en: 'The Vikings' },
          intro: {
            el:
              'Οι Βίκινγκ δεν ήταν μόνο πολεμιστές. Ήταν και έμποροι, αγρότες, ' +
              'ναυπηγοί και ταξιδιώτες που έφταναν από τη Γροιλανδία μέχρι τη Βαγδάτη. ' +
              'Αυτή η αίθουσα το δείχνει με πράγματα και όχι με ιστορίες: ένα τσεκούρι ' +
              'γεμάτο ασήμι, νομίσματα από πολύ μακριά, και πέτρες με γράμματα ' +
              'σκαλισμένα σε ευθείες γραμμές.',
            en:
              'Vikings were not only fighters. They were traders, farmers, shipbuilders ' +
              'and travellers who reached from Greenland to Baghdad. This room shows that ' +
              'with objects rather than with stories: an axe inlaid with silver, coins ' +
              'from a very long way off, and stones with letters cut in straight lines.',
          },
          exhibits: [
            {
              id: 'copenhagen-nationalmuseet-mammen-axe',
              name: { el: 'Το τσεκούρι του Μάμεν', en: 'The Mammen axe' },
              blurb: {
                el:
                  'Ένα τσεκούρι από πλούσιο τάφο στο Μάμεν, φτιαγμένο γύρω στο 970. Είναι ' +
                  'σιδερένιο, και ολόκληρη η κεφαλή του είναι στολισμένη με λεπτές ' +
                  'ασημένιες κλωστές, σε σχέδιο με ζώα που τυλίγονται και ένα πρόσωπο. ' +
                  'Ένα τέτοιο τσεκούρι δεν ήταν για να κόβεις ξύλα. Ήταν για να το ' +
                  'βλέπουν: το σχέδιο είναι το νόημα, και το ασήμι έλεγε ποιος ήταν ο ' +
                  'ιδιοκτήτης. Το ύφος του ήταν τόσο χαρακτηριστικό, που οι αρχαιολόγοι ' +
                  'ονόμασαν ολόκληρη περίοδο της τέχνης των Βίκινγκ από αυτό το ένα ' +
                  'αντικείμενο.',
                en:
                  'An axe from a rich grave at Mammen, made around the year 970. It is ' +
                  'iron, and its whole head is inlaid with fine threads of silver, in a ' +
                  'pattern of curling animals and a face. An axe like this was not for ' +
                  'chopping wood. It was for being seen: the pattern is the point, and the ' +
                  'silver said who its owner was. Its style was so distinctive that ' +
                  'archaeologists named a whole period of Viking art after this single ' +
                  'object.',
              },
              question: {
                q: {
                  el: 'Για τι χρησίμευε κυρίως αυτό το τσεκούρι;',
                  en: 'What was this axe mainly for?',
                },
                answers: [
                  { el: 'Για να το βλέπουν οι άλλοι', en: 'For other people to look at' },
                  { el: 'Για να κόβει ξύλα στο δάσος', en: 'For cutting wood in a forest' },
                  { el: 'Για να σκάβει μέσα στον βάλτο', en: 'For digging down into the bog' },
                  { el: 'Για να ανοίγει τα καρύδια', en: 'For cracking open some nuts' },
                ],
                explanation: {
                  el:
                    'Το ασήμι και το σχέδιο δεν βοηθάνε ένα τσεκούρι να κόψει. Βοηθάνε ' +
                    'τον ιδιοκτήτη του να δείξει ποιος είναι.',
                  en:
                    'Silver and pattern do not help an axe to cut. They help its owner to ' +
                    'show everyone who he is.',
                },
              },
            },
            {
              id: 'copenhagen-nationalmuseet-silver-hoard',
              name: { el: 'Ο θησαυρός με τα ασημένια', en: 'The buried silver' },
              blurb: {
                el:
                  'Οι Βίκινγκ έθαβαν ασήμι, και αρκετά συχνά δεν γύριζαν να το πάρουν. Τα ' +
                  'δανέζικα χωράφια βγάζουν ακόμα τέτοιους θησαυρούς: βραχιόλια, ' +
                  'κομμένες πόρπες, σβώλους λιωμένου μετάλλου και νομίσματα. Τα νομίσματα ' +
                  'είναι η έκπληξη. Πολλά κόπηκαν χιλιάδες χιλιόμετρα μακριά, σε πόλεις ' +
                  'του ισλαμικού κόσμου, και έχουν αραβικά γράμματα. Έφτασαν εδώ από τα ' +
                  'ποτάμια της ανατολικής Ευρώπης, από χέρι σε χέρι. Για έναν Βίκινγκ το ' +
                  'νόμισμα δεν ήταν λεφτά με τιμή γραμμένη πάνω του: ήταν ασήμι, και το ' +
                  'ζύγιζαν.',
                en:
                  'Vikings buried silver, and fairly often did not come back for it. ' +
                  'Danish fields still give up hoards: arm rings, chopped-up brooches, ' +
                  'lumps of melted metal and coins. The coins are the surprise. Many were ' +
                  'struck thousands of kilometres away, in cities of the Islamic world, ' +
                  'and carry Arabic writing. They reached Denmark along the rivers of ' +
                  'eastern Europe, hand to hand. To a Viking a coin was not money with a ' +
                  'value printed on it: it was silver, and it was weighed.',
              },
              question: {
                q: {
                  el: 'Πώς μετρούσε ένας Βίκινγκ την αξία ενός νομίσματος;',
                  en: 'How did a Viking measure what a coin was worth?',
                },
                answers: [
                  { el: 'Το ζύγιζε σαν κομμάτι ασήμι', en: 'He weighed it as a lump of silver' },
                  { el: 'Διάβαζε τα γράμματα πάνω του', en: 'He read the writing stamped on it' },
                  { el: 'Μετρούσε πόσο μακριά ταξίδεψε', en: 'He counted how far it had travelled' },
                  { el: 'Κοίταζε το πρόσωπο του βασιλιά', en: 'He looked at the king’s face on it' },
                ],
                explanation: {
                  el:
                    'Πολλά νομίσματα είναι κομμένα στη μέση ή σε τέταρτα. Αυτό γίνεται ' +
                    'μόνο όταν αυτό που μετράει είναι το βάρος του ασημιού.',
                  en:
                    'Many of the coins are cut in half or in quarters. You only do that ' +
                    'when the thing that counts is the weight of the silver.',
                },
              },
            },
            {
              id: 'copenhagen-nationalmuseet-runestone',
              name: { el: 'Η ρουνική πέτρα', en: 'The runestone' },
              blurb: {
                el:
                  'Ρουνική πέτρα είναι ένα μήνυμα σκαλισμένο σε βράχο με ένα αλφάβητο από ' +
                  'ίσιες γραμμές, τους ρούνους. Οι ίσιες γραμμές δεν είναι τυχαίες: το ' +
                  'καλέμι κόβει εύκολα ευθείες στην πέτρα και δύσκολα καμπύλες. Οι ' +
                  'περισσότερες πέτρες δεν λένε ξόρκια. Λένε ποιος τις έστησε και για ' +
                  'ποιον: ένας πατέρας για τον γιο του, μια γυναίκα για τον άντρα της, ένα ' +
                  'πλήρωμα για έναν σύντροφο που δεν γύρισε. Είναι από τις πιο παλιές ' +
                  'προτάσεις στα δανέζικα, και σχεδόν όλες μιλάνε για κάποιον που λείπει.',
                en:
                  'A runestone is a message cut into rock with an alphabet of straight ' +
                  'lines, the runes. The straight lines are not an accident: a chisel cuts ' +
                  'straight easily in stone and curves badly. Most of the stones are not ' +
                  'spells. They say who raised them and for whom: a father for his son, a ' +
                  'wife for her husband, a crew for a shipmate who did not come home. They ' +
                  'are among the oldest sentences in Danish, and nearly all of them are ' +
                  'about somebody missing somebody.',
              },
              question: {
                q: {
                  el: 'Γιατί είναι από ίσιες γραμμές τα γράμματα;',
                  en: 'Why are the letters made of straight lines?',
                },
                answers: [
                  { el: 'Το καλέμι κόβει εύκολα ευθείες', en: 'A chisel cuts straight lines easily' },
                  { el: 'Οι Βίκινγκ αγαπούσαν τα τρίγωνα', en: 'The Vikings were fond of triangles' },
                  { el: 'Τα γράμματα ήταν και αριθμοί', en: 'The letters doubled up as numbers' },
                  { el: 'Έτσι διαβάζονται και ανάποδα', en: 'They can be read upside down too' },
                ],
                explanation: {
                  el:
                    'Το σχήμα των γραμμάτων το επέβαλε το υλικό. Σε πέτρα, μια ευθεία ' +
                    'είναι μία κοφτή κίνηση· μια καμπύλη είναι δύσκολη δουλειά.',
                  en:
                    'The shape of the letters came from the material. In stone a straight ' +
                    'line is one clean stroke; a curve is hard work.',
                },
              },
            },
          ],
        },
        {
          id: 'copenhagen-nationalmuseet-ground-gave-back',
          emoji: '🌾',
          name: { el: 'Ό,τι έδωσε πίσω η γη', en: 'What the ground gave back' },
          intro: {
            el:
              'Τα περισσότερα κομμάτια αυτής της αίθουσας δεν τα βρήκαν αρχαιολόγοι. Τα ' +
              'βρήκαν άνθρωποι που δούλευαν: αγρότες με αλέτρι, εργάτες που έκοβαν τύρφη, ' +
              'ένα κορίτσι που περπατούσε σε ένα χωράφι. Η γη κρατάει πράγματα και τα ' +
              'δίνει πίσω τυχαία, και μερικά από αυτά είναι τα πιο πολύτιμα που έχει η ' +
              'χώρα.',
            en:
              'Most of the pieces in this room were not found by archaeologists. They were ' +
              'found by people at work: farmers with a plough, labourers cutting peat, a ' +
              'girl walking across a field. The ground keeps things and hands them back at ' +
              'random, and some of them are the most precious objects the country has.',
          },
          exhibits: [
            {
              id: 'copenhagen-nationalmuseet-golden-horns',
              name: { el: 'Τα χρυσά κέρατα του Γκάλεχους', en: 'The Golden Horns of Gallehus' },
              blurb: {
                el:
                  'Το 1639 ένα κορίτσι που περπατούσε κοντά στο Γκάλεχους βρήκε στο χώμα ' +
                  'ένα βαρύ χρυσό κέρας. Ενενήντα πέντε χρόνια αργότερα, σχεδόν στο ίδιο ' +
                  'σημείο, ένας αγρότης βρήκε και δεύτερο. Ήταν μακριά, καμπυλωτά, από ' +
                  'χρυσάφι και γεμάτα παράξενες μικρές μορφές, και ήταν περίπου χίλια ' +
                  'τετρακόσια ετών. Ο βασιλιάς τα κράτησε στη συλλογή του. Το 1802 ένας ' +
                  'κλέφτης μπήκε, πήρε και τα δύο, τα έλιωσε και έφτιαξε ψεύτικα ' +
                  'νομίσματα. Τον έπιασαν, αλλά τα κέρατα είχαν χαθεί για πάντα. Αυτά που ' +
                  'βλέπεις είναι αντίγραφα από παλιά σχέδια.',
                en:
                  'In 1639 a girl walking near Gallehus found a heavy golden horn in the ' +
                  'ground. Ninety-five years later, almost in the same spot, a farmer ' +
                  'found a second one. They were long, curved, made of gold and covered in ' +
                  'strange little figures, and they were about fourteen hundred years old. ' +
                  'The king kept them in his collection. In 1802 a thief broke in, took ' +
                  'both, melted them down and made fake coins from the gold. He was ' +
                  'caught, but the horns were gone for good. What you see here are copies ' +
                  'made from old drawings.',
              },
              question: {
                q: {
                  el: 'Γιατί βλέπουμε σήμερα μόνο αντίγραφα;',
                  en: 'Why do we only see copies today?',
                },
                answers: [
                  { el: 'Ένας κλέφτης έλιωσε τα αληθινά', en: 'A thief melted the real ones down' },
                  { el: 'Τα αληθινά έμειναν στο χωράφι', en: 'The real ones stayed in the field' },
                  { el: 'Τα αληθινά ήταν πολύ βαριά', en: 'The real ones were far too heavy' },
                  { el: 'Τα αληθινά είναι σε άλλη χώρα', en: 'The real ones are in another land' },
                ],
                explanation: {
                  el:
                    'Το 1802 κλάπηκαν και λιώθηκαν για να γίνουν νομίσματα. Τα αντίγραφα ' +
                    'φτιάχτηκαν από σχέδια, γιατί δεν πρόλαβε κανείς να τα φωτογραφίσει.',
                  en:
                    'In 1802 they were stolen and melted into coins. The copies were made ' +
                    'from drawings, because nobody had photographed them in time.',
                },
              },
            },
            {
              id: 'copenhagen-nationalmuseet-gundestrup',
              name: { el: 'Ο λέβητας του Γκούντεστρουπ', en: 'The Gundestrup cauldron' },
              blurb: {
                el:
                  'Το 1891 εργάτες που έκοβαν τύρφη σε έναν βάλτο στο Γκούντεστρουπ ' +
                  'βρήκαν ένα μεγάλο ασημένιο σκεύος, λυμένο σε πλάκες και στοιβαγμένο. ' +
                  'Ενωμένο ξανά, είναι ένας λέβητας αρκετά μεγάλος για να κάνει μπάνιο ' +
                  'μέσα του ένα μικρό παιδί, και κάθε πλάκα του είναι σφυρηλατημένη με ' +
                  'θεούς, ζώα και ανθρώπους: μια μορφή με κέρατα ελαφιού, ένας ελέφαντας, ' +
                  'μια λεοπάρδαλη. Ελέφαντες και λεοπαρδάλεις δεν ζουν στη Δανία, και το ' +
                  'ύφος δεν είναι δανέζικο. Πιθανότατα φτιάχτηκε πολύ νοτιοανατολικά και ' +
                  'ταξίδεψε ως εδώ.',
                en:
                  'In 1891 labourers cutting peat in a bog at Gundestrup found a large ' +
                  'silver vessel, taken apart into plates and stacked. Put back together ' +
                  'it is a cauldron big enough to bath a small child in, and every plate ' +
                  'is hammered with gods, animals and people: a figure with antlers, an ' +
                  'elephant, a leopard. Elephants and leopards do not live in Denmark, and ' +
                  'the style is not Danish either. It was most likely made far to the ' +
                  'south-east and travelled here.',
              },
              question: {
                q: {
                  el: 'Τι δείχνει ότι δεν φτιάχτηκε στη Δανία;',
                  en: 'What shows that it was not made in Denmark?',
                },
                answers: [
                  { el: 'Ζώα που δεν ζουν εδώ πέρα', en: 'Animals that do not live here' },
                  { el: 'Το βάρος του ασημιού του', en: 'The weight of all its silver' },
                  { el: 'Τα γράμματα στον πάτο του', en: 'The letters on its bottom' },
                  { el: 'Το χρώμα του βάλτου πάνω του', en: 'The bog colour staining it' },
                ],
                explanation: {
                  el:
                    'Πάνω του υπάρχουν ελέφαντας και λεοπάρδαλη. Κανείς στη Δανία δεν είχε ' +
                    'δει τέτοια ζώα, άρα το σχέδιο ήρθε από πολύ μακριά.',
                  en:
                    'There is an elephant and a leopard on it. Nobody in Denmark had seen ' +
                    'such animals, so the design came from a long way off.',
                },
              },
            },
            {
              id: 'copenhagen-nationalmuseet-dejbjerg-wagon',
              name: { el: 'Το άρμα του Ντέιμπιεργκ', en: 'The Dejbjerg wagon' },
              blurb: {
                el:
                  'Σε έναν βάλτο στο Ντέιμπιεργκ βρέθηκαν δύο ξύλινα οχήματα, λυμένα σε ' +
                  'κομμάτια πριν τα βάλουν στο νερό. Είναι περίπου δύο χιλιάδων ετών, και ' +
                  'δεν είναι κάρα του χωραφιού: έχουν μπρούντζινα στολίδια, ο μπροστινός ' +
                  'άξονας γυρίζει γύρω από έναν πείρο ώστε να στρίβουν, και το κάθισμα ' +
                  'είναι ένας μικρός στρωμένος θρόνος. Ένα τέτοιο όχημα ήταν για να ' +
                  'μεταφέρει κάποιον σημαντικό αργά και φανερά. Ο βάλτος κράτησε το ξύλο, ' +
                  'και γι’ αυτό ξέρουμε πώς ήταν στ’ αλήθεια ένας τροχός εκείνης της ' +
                  'εποχής.',
                en:
                  'Two wooden vehicles were found in a bog at Dejbjerg, taken to pieces ' +
                  'before they were put in the water. They are about two thousand years ' +
                  'old, and they are not farm carts: they carry bronze ornament, the front ' +
                  'axle swivels on a pin so that they can steer, and the seat is a small ' +
                  'padded throne. A vehicle like this was for carrying somebody important ' +
                  'slowly and visibly. The bog kept the wood, which is how we know what a ' +
                  'wheel of that age really looked like.',
              },
              question: {
                q: {
                  el: 'Τι δείχνει ότι δεν ήταν κάρο του χωραφιού;',
                  en: 'What shows it was not an ordinary farm cart?',
                },
                answers: [
                  { el: 'Έχει θρόνο για κάθισμα', en: 'Its seat is a small throne' },
                  { el: 'Έχει δέκα μικρές ρόδες', en: 'It has ten little wheels' },
                  { el: 'Είναι φτιαγμένο από χρυσό', en: 'It is made out of pure gold' },
                  { el: 'Έχει πανιά σαν καράβι', en: 'It has sails like a boat' },
                ],
                explanation: {
                  el:
                    'Ένα κάρο δουλειάς δεν έχει μπρούντζινα στολίδια ούτε στρωμένο ' +
                    'κάθισμα. Αυτό το όχημα ήταν φτιαγμένο για να το κοιτάνε.',
                  en:
                    'A working cart has no bronze ornament and no padded seat. This ' +
                    'vehicle was built to be looked at.',
                },
              },
            },
          ],
        },
      ],
      riddles: [
        {
          id: 'copenhagen-nationalmuseet-riddle-1',
          difficulty: 1,
          prompt: {
            el:
              'Ένα άλογο με τραβάει και εγώ κυλάω πάνω σε ρόδες. Η μία μου πλευρά λάμπει ' +
              'χρυσή και η άλλη είναι σκοτεινή, γιατί οι άνθρωποι που με έφτιαξαν ' +
              'εξηγούσαν έτσι τη μέρα και τη νύχτα.',
            en:
              'A horse pulls me and I roll along on wheels. One of my sides shines gold ' +
              'and the other is dark, because the people who made me explained day and ' +
              'night that way.',
          },
          hint: {
            el: 'Με ξέθαψε ένα αλέτρι το 1902, και με έσπασε κιόλας.',
            en: 'A plough dug me up in 1902, and broke me while doing it.',
          },
          answerExhibitId: 'copenhagen-nationalmuseet-sun-chariot',
        },
        {
          id: 'copenhagen-nationalmuseet-riddle-2',
          difficulty: 2,
          prompt: {
            el:
              'Δεν είμαστε αληθινά. Τα αληθινά ήταν από χρυσάφι, κάποιος τα έκλεψε το ' +
              '1802 και τα έλιωσε. Εμάς μας έφτιαξαν από παλιά σχέδια, γιατί δεν πρόλαβε ' +
              'κανείς να τα φωτογραφίσει.',
            en:
              'We are not the real thing. The real ones were gold, somebody stole them in ' +
              '1802 and melted them down. We were made from old drawings, because nobody ' +
              'had photographed them in time.',
          },
          hint: {
            el: 'Το πρώτο από τα δύο το βρήκε ένα κορίτσι που περπατούσε, το 1639.',
            en: 'The first of the two was found by a girl out walking, in 1639.',
          },
          answerExhibitId: 'copenhagen-nationalmuseet-golden-horns',
        },
        {
          id: 'copenhagen-nationalmuseet-riddle-3',
          difficulty: 3,
          prompt: {
            el:
              'Είμαι από μπρούντζο, γυρίζω σαν χαυλιόδοντας και έχω δίδυμο που γυρίζει ' +
              'αντίθετα από μένα. Κοιμήθηκα μέσα σε βάλτο τρεις χιλιάδες χρόνια και ' +
              'μπορώ ακόμα να βγάλω ήχο.',
            en:
              'I am bronze, I curve like a tusk, and I have a twin that curves the other ' +
              'way. I slept in a bog for three thousand years and I can still be made to ' +
              'sound.',
          },
          hint: {
            el: 'Δύο σαν εμένα στέκονται σε κολόνα, έξω από το Δημαρχείο.',
            en: 'Two like me stand on a column, out in front of the City Hall.',
          },
          answerExhibitId: 'copenhagen-nationalmuseet-lurs',
        },
      ],
    },
  },

  // -------------------------------------------------------------- christiansborg
  {
    id: 'copenhagen-christiansborg',
    cityId: 'copenhagen',
    emoji: '🏰',
    category: 'history',
    difficulty: 3,

    name: { el: 'Το Κρίστιανσμποργκ', en: 'Christiansborg Palace' },
    tagline: {
      el: 'Το ίδιο ύψωμα κάηκε δύο φορές και ξαναχτίστηκε τρεις',
      en: 'The same small island burned twice and was rebuilt three times',
    },
    story: {
      el:
        'Όλα στην Κοπεγχάγη ξεκινούν από αυτό το μικρό νησί. Το 1167 ο επίσκοπος ' +
        'Άμπσαλον έχτισε εδώ ένα κάστρο για να φυλάει το λιμάνι, και η πόλη μεγάλωσε ' +
        'γύρω του. Από τότε, τα κτίρια σε αυτό το σημείο κάηκαν δύο φορές και ' +
        'γκρεμίστηκαν μία. Το παλάτι που στέκεται σήμερα τελείωσε το 1928 και είναι το ' +
        'τρίτο Κρίστιανσμποργκ. Μέσα του βρίσκονται τρία πράγματα που στις περισσότερες ' +
        'χώρες μένουν σε τρία διαφορετικά κτίρια: το κοινοβούλιο, το γραφείο του ' +
        'πρωθυπουργού και το ανώτατο δικαστήριο. Κάτω από το πάτωμα περπατάς μέσα στα ' +
        'ερείπια των παλιότερων κάστρων, σε τούβλινα θεμέλια και δίπλα σε ένα πηγάδι, ' +
        'στεγνά και φωτισμένα, με το σημερινό κτίριο να πατάει από πάνω. Ο πύργος του ' +
        'φτάνει τα 106 μέτρα και είναι ο ψηλότερος της πόλης· σε αντίθεση με τους ' +
        'περισσότερους πύργους, η άνοδος δεν κοστίζει τίποτα. Πίσω υπάρχουν οι βασιλικοί ' +
        'στάβλοι, γεμάτοι ακόμα άλογα.',
      en:
        'Everything in Copenhagen starts on this small island. In 1167 Bishop Absalon ' +
        'built a castle here to guard the harbour, and the city grew up around it. Since ' +
        'then the buildings on this spot have burned down twice and been pulled down once. ' +
        'The palace standing here now was finished in 1928 and is the third ' +
        'Christiansborg. Inside it are three things that in most countries sit in three ' +
        'separate buildings: the parliament, the prime minister’s office and the supreme ' +
        'court. Under the floor you can walk through the ruins of the older castles, brick ' +
        'foundations and a well, dry and lit, with the modern building resting overhead. ' +
        'Its tower is 106 metres, the tallest in the city, and unlike most towers it costs ' +
        'nothing at all to go up. Round the back are the royal stables, still full of ' +
        'horses.',
    },
    facts: [
      {
        el: 'Το σημερινό κτίριο τελείωσε το 1928 και είναι το τρίτο Κρίστιανσμποργκ στο ίδιο σημείο.',
        en: 'The present building was finished in 1928 and is the third Christiansborg on the spot.',
      },
      {
        el: 'Στεγάζει μαζί το κοινοβούλιο, τον πρωθυπουργό και το ανώτατο δικαστήριο.',
        en: 'It houses the parliament, the prime minister and the supreme court together.',
      },
      {
        el: 'Ο πύργος του, 106 μέτρα, είναι ο ψηλότερος της Κοπεγχάγης και η άνοδος είναι δωρεάν.',
        en: 'Its 106-metre tower is the tallest in Copenhagen, and going up is free.',
      },
    ],
    location: {
      lat: 55.67583,
      lng: 12.57889,
      anchor: 'area',
      confidence: 'C',
      sources: [{ kind: 'wikidata', ref: 'Q940733', deltaM: 0 }],
      verifiedAt: '2026-09-14',
      note: 'Graded C because neither cross-check answered: the OpenStreetMap fetch failed during the run, and the English Wikipedia article carries no coordinate of its own. The Wikidata point itself is not in doubt — it is the palace, not Folketinget the institution.',
      findIt: {
        el: 'Το ασανσέρ του πύργου είναι μέσα στην εσωτερική αυλή, και η άνοδος δεν κοστίζει.',
        en: 'The tower lift is inside the inner courtyard, and going up costs nothing.',
      },
    },
    question: {
      q: {
        el: 'Πόσα παλάτια Κρίστιανσμποργκ έχουν υπάρξει εδώ;',
        en: 'How many Christiansborg palaces have stood here?',
      },
      answers: [
        { el: 'Τρία, και δύο τους κάηκαν', en: 'Three, and two of them burned' },
        { el: 'Ένα, από το 1167 ως σήμερα', en: 'One, from 1167 until today' },
        { el: 'Εννιά, ένα σε κάθε αιώνα', en: 'Nine, one for every century' },
        { el: 'Δύο, και στέκονται ακόμα', en: 'Two, and both still stand' },
      ],
      explanation: {
        el:
          'Το πρώτο κάηκε το 1794 και το δεύτερο το 1884. Το τρίτο τελείωσε το 1928 και ' +
          'πατάει πάνω στα ερείπια όλων των προηγούμενων.',
        en:
          'The first burned in 1794 and the second in 1884. The third was finished in 1928 ' +
          'and stands on the ruins of everything before it.',
      },
    },
  },

  // ------------------------------------------------------------- stork fountain
  {
    id: 'copenhagen-storkespringvandet',
    cityId: 'copenhagen',
    emoji: '🦩',
    category: 'art',
    difficulty: 2,

    name: { el: 'Το Σιντριβάνι με τους Πελαργούς', en: 'The Stork Fountain' },
    tagline: {
      el: 'Τρία πουλιά σε έναν δρόμο που έδιωξε τα αυτοκίνητα',
      en: 'Three birds on a street that sent all its cars away',
    },
    story: {
      el:
        'Το σιντριβάνι στήθηκε το 1894, δώρο για τα ασημένια γαμήλια χρόνια ενός ' +
        'διαδόχου: τρία μπρούντζινα πουλιά με ανοιχτά φτερά πάνω από μια γρανιτένια ' +
        'γούρνα. Όλοι τα λένε πελαργούς. Όσοι τα κοιτάξουν προσεκτικά λένε ότι είναι ' +
        'ερωδιοί. Η πόλη δεν το έλυσε ποτέ. Υπήρχε και μια συνήθεια: οι νέες μαίες ' +
        'χόρευαν γύρω από τη γούρνα όταν τελείωναν τις σπουδές τους. Πιο σημαντικός όμως ' +
        'είναι ο δρόμος πάνω στον οποίο στέκεται. Το Strøget έχει μήκος περίπου 1,1 ' +
        'χιλιόμετρο και δεν είναι ένας δρόμος αλλά πέντε στη σειρά. Το 1962 η πόλη τον ' +
        'έκλεισε για τα αυτοκίνητα, ως δοκιμή, για έναν χειμώνα. Οι καταστηματάρχες ' +
        'εξοργίστηκαν και οι εφημερίδες προέβλεψαν καταστροφή. Αντί γι’ αυτό, ο κόσμος ' +
        'ήρθε, έμεινε περισσότερη ώρα, και τα αυτοκίνητα δεν ξαναγύρισαν ποτέ. Ένας ' +
        'Δανός αρχιτέκτονας, ο Γιαν Γκελ, πέρασε χρόνια εδώ μετρώντας ποιος κάθεται πού ' +
        'και για πόσο, και οι μετρήσεις του άλλαξαν δρόμους σε όλον τον κόσμο.',
      en:
        'The fountain went up in 1894, a present for the silver wedding of a crown prince: ' +
        'three bronze birds with their wings open above a granite basin. Everybody calls ' +
        'them storks. People who look carefully say they are herons. The city has never ' +
        'settled it. There was a custom, too: newly trained midwives danced around the ' +
        'basin when they finished their studies. More important, though, is the street it ' +
        'stands on. Strøget is about 1.1 kilometres long and it is not one street but five ' +
        'in a row. In 1962 the city closed it to cars, as an experiment, for one winter. ' +
        'Shopkeepers were furious and newspapers predicted ruin. Instead people came, ' +
        'stayed longer, and the cars never returned. A Danish architect, Jan Gehl, spent ' +
        'years here counting who sat where and for how long, and what he found has changed ' +
        'streets all over the world.',
    },
    facts: [
      {
        el: 'Στήθηκε το 1894 και έχει τρία μπρούντζινα πουλιά με ανοιχτά φτερά.',
        en: 'It was put up in 1894 and has three bronze birds with open wings.',
      },
      {
        el: 'Το Strøget δεν είναι ένας δρόμος αλλά πέντε στη σειρά, μήκους περίπου 1,1 χλμ.',
        en: 'Strøget is not one street but five in a row, about 1.1 km end to end.',
      },
      {
        el: 'Το 1962 έκλεισε για τα αυτοκίνητα ως δοκιμή ενός χειμώνα, και δεν ξανάνοιξε.',
        en: 'In 1962 it closed to cars as a one-winter experiment, and never reopened.',
      },
    ],
    location: {
      lat: 55.67883,
      lng: 12.57956,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q3428616', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Stork Fountain', deltaM: 4 },
      ],
      verifiedAt: '2026-09-14',
      note: 'This is Explorer’s Strøget spot, pinned on what it actually sends a child to look at. Strøget is 1.1 km of street and has no point a pin can honestly sit on; the fountain does.',
      findIt: {
        el: 'Στέκεται στη μέση της πλατείας Amagertorv, στο πλατύ σημείο του πεζόδρομου.',
        en: 'It stands in the middle of Amagertorv, at the wide part of the walking street.',
      },
    },
    question: {
      q: {
        el: 'Τι έγινε το 1962 στον δρόμο του σιντριβανιού;',
        en: 'What happened in 1962 on the fountain’s street?',
      },
      answers: [
        { el: 'Έδιωξαν τα αυτοκίνητα', en: 'The cars were sent away' },
        { el: 'Έχτισαν το σιντριβάνι', en: 'The fountain was built' },
        { el: 'Άνοιξαν έναν σταθμό', en: 'A new station was opened' },
        { el: 'Έβαψαν όλα τα σπίτια', en: 'The houses were painted' },
      ],
      explanation: {
        el:
          'Ο δρόμος έκλεισε για τα αυτοκίνητα ως δοκιμή ενός χειμώνα. Ο κόσμος τον ' +
          'αγάπησε, ο πεζόδρομος έμεινε, και άλλες πόλεις αντέγραψαν την ιδέα.',
        en:
          'The street was closed to cars as a one-winter experiment. People loved it, the ' +
          'walking street stayed, and other cities copied the idea.',
      },
    },
  },

  // ----------------------------------------------------------------- round tower
  {
    id: 'copenhagen-rundetaarn',
    cityId: 'copenhagen',
    emoji: '🔭',
    category: 'science',
    difficulty: 2,

    name: { el: 'Ο Στρογγυλός Πύργος', en: 'The Round Tower' },
    tagline: {
      el: 'Ένας πύργος σχεδόν χωρίς σκαλοπάτια, με ράμπα σαν κοχύλι',
      en: 'A tower with almost no steps, and a ramp like a shell',
    },
    story: {
      el:
        'Ο βασιλιάς Χριστιανός ο Δ΄ αγαπούσε το χτίσιμο. Το 1642 τελείωσε αυτόν τον ' +
        'στρογγυλό πύργο για τους αστρονόμους του πανεπιστημίου, ώστε να κοιτάζουν τον ' +
        'ουρανό από πάνω από τον καπνό της πόλης. Είναι ακόμα αστεροσκοπείο, και το ' +
        'παλαιότερο της Ευρώπης που λειτουργεί συνεχώς. Μέσα δεν υπάρχουν σχεδόν καθόλου ' +
        'σκαλοπάτια. Στη θέση τους μια χτιστή ράμπα στριφογυρίζει εφτάμισι φορές γύρω από ' +
        'έναν κεντρικό πυρήνα, περίπου 209 μέτρα ήπιας ανηφόρας, ώστε ένα άλογο με κάρο ' +
        'να ανεβάζει βαριά όργανα και βιβλία ως την κορυφή. Το 1716 ο τσάρος Πέτρος ο ' +
        'Μέγας την ανέβηκε καβάλα, και λένε ότι η τσαρίνα ακολούθησε με άμαξα. Ο πύργος ' +
        'έχει ύψος περίπου 35 μέτρα: δεν είναι ψηλός με σημερινά μέτρα, όμως σε μια ' +
        'επίπεδη πόλη φτάνει, και από την πλατφόρμα βλέπεις κάθε πράσινη χάλκινη στέγη ' +
        'της παλιάς πόλης. Πάνω από την πόρτα ο βασιλιάς άφησε έναν γρίφο από εικόνες.',
      en:
        'King Christian IV loved building. In 1642 he finished this round tower for the ' +
        'university’s astronomers, so that they could watch the sky from above the smoke ' +
        'of the city. It is still an observatory, and the oldest one in Europe in ' +
        'continuous use. Inside there are almost no steps at all. In their place a brick ' +
        'ramp spirals seven and a half times around a central core, about 209 metres of ' +
        'gentle slope, so that a horse and cart could carry heavy instruments and books to ' +
        'the top. In 1716 Tsar Peter the Great rode up it, and the story goes that the ' +
        'tsarina followed in a carriage. The tower is about 35 metres high: not tall by ' +
        'modern standards, but tall enough in a flat city, and from the platform you can ' +
        'see every green copper roof in the old town. Above the door the king left a ' +
        'puzzle made of pictures.',
    },
    facts: [
      {
        el: 'Τελείωσε το 1642 και είναι το παλαιότερο αστεροσκοπείο της Ευρώπης που λειτουργεί ακόμα.',
        en: 'It was finished in 1642 and is Europe’s oldest observatory still in use.',
      },
      {
        el: 'Η ράμπα του στριφογυρίζει εφτάμισι φορές, περίπου 209 μέτρα, χωρίς σκαλοπάτια.',
        en: 'Its ramp spirals seven and a half times, about 209 metres, with no steps.',
      },
      {
        el: 'Το 1716 ο τσάρος Πέτρος ο Μέγας ανέβηκε τη ράμπα καβάλα στο άλογό του.',
        en: 'In 1716 Tsar Peter the Great rode up the ramp on his own horse.',
      },
    ],
    location: {
      lat: 55.68137,
      lng: 12.57579,
      anchor: 'centroid',
      confidence: 'C',
      sources: [{ kind: 'wikidata', ref: 'Q1140534', deltaM: 0 }],
      verifiedAt: '2026-09-14',
      note: 'Graded C because neither cross-check answered: the OpenStreetMap fetch failed during the run and the English Wikipedia article carries no coordinate of its own.',
      findIt: {
        el: 'Η πόρτα είναι στην οδό Købmagergade. Ψηλά από πάνω της υπάρχει γρίφος με εικόνες.',
        en: 'The door is on Købmagergade. High above it there is a puzzle made of pictures.',
      },
    },
    question: {
      q: {
        el: 'Γιατί έχει ράμπα αντί για σκάλα ο πύργος;',
        en: 'Why does the tower have a ramp instead of stairs?',
      },
      answers: [
        { el: 'Για να ανεβαίνει άλογο με κάρο', en: 'So a horse and cart could go up' },
        { el: 'Για να ανεβαίνουν τα ποδήλατα', en: 'So that bicycles could ride up' },
        { el: 'Για να γλιστράει το χιόνι κάτω', en: 'So that the snow would slide off' },
        { el: 'Για να χωράει πιο πολύς κόσμος', en: 'So that more people would fit in' },
      ],
      explanation: {
        el:
          'Τα όργανα των αστρονόμων και τα βιβλία ήταν βαριά. Με ράμπα, το άλογο και το ' +
          'κάρο έφταναν ως την κορυφή χωρίς να τα κουβαλήσει κανείς στα χέρια.',
        en:
          'The astronomers’ instruments and books were heavy. With a ramp, a horse and ' +
          'cart could reach the top without anyone carrying them by hand.',
      },
    },
  },

  // ------------------------------------------------------------ rosenborg castle
  {
    id: 'copenhagen-rosenborg',
    cityId: 'copenhagen',
    emoji: '👑',
    category: 'history',
    difficulty: 2,

    name: { el: 'Το Κάστρο Ρόζενμποργκ', en: 'Rosenborg Castle' },
    tagline: {
      el: 'Ένας θρόνος από κέρατο μονόκερου που δεν υπήρξε ποτέ',
      en: 'A throne of unicorn horn, from an animal that never existed',
    },
    story: {
      el:
        'Ο Χριστιανός ο Δ΄ ξεκίνησε αυτό το σπίτι το 1606 ως ένα μικρό εξοχικό έξω από ' +
        'την πόλη και συνέχισε να του προσθέτει, ώσπου έγινε κάστρο. Σε ένα από τα ' +
        'δωμάτιά του πέθανε. Σήμερα, στο υπόγειο, φυλάσσονται τα στέμματα και τα ' +
        'βασιλικά διάσημα της Δανίας πίσω από χοντρές πόρτες. Πιο πάνω υπάρχει μια ' +
        'αίθουσα όπου τρία ασημένια λιοντάρια σε φυσικό μέγεθος φυλάνε έναν θρόνο, και ο ' +
        'θρόνος έχει τη δική του ιστορία. Φτιάχτηκε τη δεκαετία του 1660 από αυτό που ' +
        'όλοι τότε ονόμαζαν κέρατο μονόκερου, που θεωρούνταν προστασία από το δηλητήριο ' +
        'και άξιζε περισσότερο από χρυσάφι. Είναι χαυλιόδοντας νάρβαλου, δηλαδή το μακρύ ' +
        'σπειροειδές δόντι μιας φάλαινας που ζει στις παγωμένες θάλασσες γύρω από τη ' +
        'Γροιλανδία. Η Δανία έλεγχε τα μέρη από όπου έρχονταν, και γι’ αυτό ένας Δανός ' +
        'βασιλιάς μπορούσε να φτιάξει έναν ολόκληρο θρόνο. Γύρω απλώνεται ο Κήπος του ' +
        'Βασιλιά, ανοιχτός σε όλους.',
      en:
        'Christian IV began this house in 1606 as a small summer place outside the city ' +
        'and kept adding to it until it was a castle. He died in one of its rooms. Today ' +
        'the crowns and the royal regalia of Denmark are kept in the basement, behind ' +
        'thick doors. Above them is a hall where three life-size silver lions guard a ' +
        'throne, and the throne has a story of its own. It was made in the 1660s out of ' +
        'what everyone then called unicorn horn, which was believed to protect against ' +
        'poison and was worth more than gold. It is narwhal tusk: the long spiral tooth of ' +
        'a whale that lives in the icy seas around Greenland. Denmark controlled where ' +
        'those tusks came from, which is precisely why a Danish king could afford a whole ' +
        'throne of them. Around the castle lies the King’s Garden, open to everybody.',
    },
    facts: [
      {
        el: 'Ξεκίνησε το 1606 ως εξοχικό του Χριστιανού Δ΄ και έγινε σιγά σιγά κάστρο.',
        en: 'It began in 1606 as Christian IV’s summer house and slowly became a castle.',
      },
      {
        el: 'Στο υπόγειό του φυλάσσονται τα στέμματα και τα βασιλικά διάσημα της Δανίας.',
        en: 'Its basement holds the crowns and the royal regalia of Denmark.',
      },
      {
        el: 'Ο θρόνος του είναι φτιαγμένος από χαυλιόδοντες νάρβαλου, όχι από κέρατο μονόκερου.',
        en: 'Its throne is built from narwhal tusks, not from any unicorn’s horn.',
      },
    ],
    location: {
      lat: 55.68566,
      lng: 12.57748,
      anchor: 'centroid',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q206101', deltaM: 0 },
        { kind: 'osm', ref: 'way/25524592', deltaM: 4 },
        { kind: 'wikipedia', ref: 'Rosenborg Castle', deltaM: 22 },
      ],
      verifiedAt: '2026-09-14',
      findIt: {
        el: 'Μπες από τον Κήπο του Βασιλιά. Το ταμείο είναι στο χαμηλό κτίριο δίπλα στο κάστρο.',
        en: 'Come in through the King’s Garden. The ticket house is the low building beside it.',
      },
    },
    question: {
      q: {
        el: 'Από τι είναι φτιαγμένος ο «θρόνος του μονόκερου»;',
        en: 'What is the "unicorn throne" actually made of?',
      },
      answers: [
        { el: 'Από δόντι φάλαινας', en: 'From the tooth of a whale' },
        { el: 'Από κέρατο ελαφιού', en: 'From the horn of a deer' },
        { el: 'Από δόντι ελέφαντα', en: 'From the tusk of a walrus' },
        { el: 'Από κόκαλο αλόγου', en: 'From the bone of a horse' },
      ],
      explanation: {
        el:
          'Ο νάρβαλος είναι μια φάλαινα με ένα μακρύ σπειροειδές δόντι. Επί αιώνες το ' +
          'πουλούσαν ως κέρατο μονόκερου, και κόστιζε περισσότερο από χρυσάφι.',
        en:
          'A narwhal is a whale with one long spiral tooth. For centuries it was sold as ' +
          'unicorn horn, and it cost more than gold.',
      },
    },
  },

  // ------------------------------------------------------------ botanical garden
  {
    id: 'copenhagen-botanisk-have',
    cityId: 'copenhagen',
    emoji: '🌿',
    category: 'nature',
    difficulty: 1,

    name: { el: 'Ο Βοτανικός Κήπος', en: 'The Botanical Garden' },
    tagline: {
      el: 'Ένα θερμοκήπιο του 1874 πάνω στα παλιά τείχη της πόλης',
      en: 'An 1874 glasshouse standing on the city’s old defences',
    },
    story: {
      el:
        'Ως τα μέσα του 19ου αιώνα η Κοπεγχάγη ήταν ακόμα κλεισμένη μέσα σε προμαχώνες ' +
        'και τάφρο, και δεν μπορούσε να μεγαλώσει πέρα από αυτά. Όταν τα τείχη έπεσαν, η ' +
        'λωρίδα γης που άφησαν δεν έγινε σπίτια. Ένα κομμάτι της έγινε αυτός ο κήπος, ' +
        'στρωμένος τη δεκαετία του 1870, και η λίμνη στη μέση είναι η παλιά αμυντική ' +
        'τάφρος, αφημένη εκεί που ήταν. Εδώ υπάρχουν περίπου δεκατρείς χιλιάδες είδη ' +
        'φυτών, τακτοποιημένα έτσι ώστε να περπατήσεις από ένα δανέζικο δάσος σε έναν ' +
        'βραχόκηπο με βουνίσια φυτά μέσα σε πέντε λεπτά. Το Σπίτι των Φοινίκων, από το ' +
        '1874, είναι από χυτοσίδηρο και τζάμι, με μια στενή στριφογυριστή σκάλα που σε ' +
        'ανεβάζει ανάμεσα στις κορυφές των δέντρων. Μέσα κάνει ζέστη, έχει υγρασία και ' +
        'μυρίζει βροχή. Το καλοκαίρι ένα μικρότερο θερμοκήπιο γεμίζει πεταλούδες. Ο ' +
        'κήπος ανήκει στο πανεπιστήμιο, οπότε οι ταμπέλες δεν είναι στολίδι.',
      en:
        'Until the middle of the nineteenth century Copenhagen was still shut inside ' +
        'ramparts and a moat, and could not grow past them. When the walls came down, the ' +
        'strip of land they left did not become housing. Part of it became this garden, ' +
        'laid out in the 1870s, and the lake in the middle is the old defensive moat, left ' +
        'where it was. There are about thirteen thousand kinds of plant here, arranged so ' +
        'that you can walk from Danish woodland to a rock garden of mountain plants in ' +
        'five minutes. The Palm House, from 1874, is cast iron and glass, with a narrow ' +
        'spiral staircase that takes you up among the treetops. Inside it is warm and damp ' +
        'and smells of rain. In summer a smaller glasshouse fills with butterflies. The ' +
        'garden belongs to the university, so the labels are not decoration.',
    },
    facts: [
      {
        el: 'Στρώθηκε τη δεκαετία του 1870 πάνω στη γη που άφησαν τα παλιά οχυρά της πόλης.',
        en: 'It was laid out in the 1870s on the land left by the city’s old defences.',
      },
      {
        el: 'Η λίμνη στη μέση του είναι κομμάτι της παλιάς αμυντικής τάφρου.',
        en: 'The lake in the middle of it is a piece of the old defensive moat.',
      },
      {
        el: 'Το Σπίτι των Φοινίκων χτίστηκε το 1874 από χυτοσίδηρο και τζάμι.',
        en: 'The Palm House was built in 1874 out of cast iron and glass.',
      },
    ],
    location: {
      lat: 55.68694,
      lng: 12.57389,
      anchor: 'area',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q892711', deltaM: 0 },
        { kind: 'wikipedia', ref: 'University of Copenhagen Botanical Garden', deltaM: 0 },
      ],
      verifiedAt: '2026-09-14',
      findIt: {
        el: 'Οι πύλες είναι στην οδό Gothersgade και στην Øster Farimagsgade. Ο κήπος είναι δωρεάν.',
        en: 'The gates are on Gothersgade and on Øster Farimagsgade. The garden itself is free.',
      },
    },
    question: {
      q: {
        el: 'Τι ήταν παλιά η λίμνη μέσα στον κήπο;',
        en: 'What was the lake inside the garden before?',
      },
      answers: [
        { el: 'Η τάφρος της πόλης', en: 'The moat of the city' },
        { el: 'Το πηγάδι ενός χωριού', en: 'The well of a village' },
        { el: 'Η δεξαμενή της φωτιάς', en: 'A tank kept for fires' },
        { el: 'Το λιμάνι των ψαράδων', en: 'A harbour for fishing' },
      ],
      explanation: {
        el:
          'Η Κοπεγχάγη ήταν κλεισμένη σε τείχη με τάφρο. Όταν τα τείχη έπεσαν, το νερό ' +
          'έμεινε εκεί που ήταν και ο κήπος χτίστηκε γύρω του.',
        en:
          'Copenhagen was shut inside walls with a moat. When the walls came down, the ' +
          'water stayed where it was and the garden was built around it.',
      },
    },
  },

  // -------------------------------------------------------------- torvehallerne
  {
    id: 'copenhagen-torvehallerne',
    cityId: 'copenhagen',
    emoji: '🥪',
    category: 'food',
    difficulty: 1,

    name: { el: 'Οι Αγορές Torvehallerne', en: 'The Torvehallerne markets' },
    tagline: {
      el: 'Η πλατεία έχασε την αγορά της και την πήρε πίσω',
      en: 'A square lost its market and then got it back again',
    },
    story: {
      el:
        'Για πολύν καιρό αυτή η πλατεία ήταν το μέρος όπου η Κοπεγχάγη αγόραζε τα ' +
        'λαχανικά της. Τα κάρα έφταναν πριν ξημερώσει, οι πάγκοι ήταν ξύλινοι, και η ' +
        'πλατεία λεγόταν απλώς Λαχαναγορά. Το 1958 όλο το εμπόριο μετακόμισε σε ' +
        'μεγαλύτερο χώρο στην άκρη της πόλης, και η πλατεία έγινε πάρκινγκ. Έμεινε ' +
        'πάρκινγκ για περισσότερα από πενήντα χρόνια. Το 2011 άνοιξαν στο ίδιο έδαφος ' +
        'δύο αίθουσες από γυαλί και ατσάλι, με περίπου εξήντα πάγκους: ψάρι, τυρί, ψωμί, ' +
        'μπαχαρικά, καφές, λουλούδια, και πάρα πολύ smørrebrød. Το smørrebrød είναι το ' +
        'δανέζικο ανοιχτό σάντουιτς, μια φέτα πυκνό μαύρο ψωμί σίκαλης με κάτι χτισμένο ' +
        'προσεκτικά από πάνω, και έχει κανόνες. Τρώγεται με μαχαίρι και πιρούνι, και αν ' +
        'πάρεις πολλά, πρώτα πάει η ρέγγα, μετά το ψάρι, μετά το κρέας και τελευταίο το ' +
        'τυρί. Αν μπερδέψεις τη σειρά, δεν είναι παράνομο. Απλώς το προσέχουν.',
      en:
        'For a long time this square was where Copenhagen bought its vegetables. The carts ' +
        'arrived before dawn, the stalls were wooden, and the square was called simply the ' +
        'Vegetable Market. In 1958 the whole trade was moved out to a bigger site on the ' +
        'edge of town, and the square became a car park. It stayed a car park for more ' +
        'than fifty years. In 2011 two halls of glass and steel opened on the same ground, ' +
        'with about sixty stalls: fish, cheese, bread, spices, coffee, flowers, and a great ' +
        'deal of smørrebrød. Smørrebrød is the Danish open sandwich, a slice of dense dark ' +
        'rye bread with something built carefully on top, and it comes with rules. You eat ' +
        'it with a knife and fork, and if you are having several, herring goes first, then ' +
        'fish, then meat, and cheese last. Getting the order wrong is not illegal. It is ' +
        'simply noticed.',
    },
    facts: [
      {
        el: 'Η πλατεία ήταν η λαχαναγορά της πόλης, ώσπου το εμπόριο μετακόμισε το 1958.',
        en: 'The square was the city’s vegetable market until the trade moved out in 1958.',
      },
      {
        el: 'Οι δύο γυάλινες αίθουσες άνοιξαν το 2011, με περίπου εξήντα πάγκους.',
        en: 'The two glass halls opened in 2011, with around sixty stalls inside.',
      },
      {
        el: 'Το smørrebrød τρώγεται με μαχαίρι και πιρούνι, ποτέ με τα χέρια.',
        en: 'Smørrebrød is eaten with a knife and fork, never with your hands.',
      },
    ],
    location: {
      lat: 55.68382,
      lng: 12.56949,
      anchor: 'centroid',
      confidence: 'C',
      sources: [{ kind: 'wikidata', ref: 'Q19409991', deltaM: 0 }],
      verifiedAt: '2026-09-14',
      note: 'Graded C because neither cross-check answered: the OpenStreetMap fetch failed during the run and there is no English Wikipedia article with a coordinate.',
      findIt: {
        el: 'Δύο γυάλινες αίθουσες στην πλατεία Israels Plads, μία κάθε πλευρά του πεζόδρομου.',
        en: 'Two glass halls on Israels Plads, one on each side of the walkway between them.',
      },
    },
    question: {
      q: {
        el: 'Με ποια σειρά τρώγονται πολλά smørrebrød;',
        en: 'In what order do you eat several smørrebrød?',
      },
      answers: [
        { el: 'Ρέγγα, ψάρι, κρέας, τυρί', en: 'Herring, fish, meat, cheese' },
        { el: 'Τυρί, κρέας, ψάρι, ρέγγα', en: 'Cheese, meat, fish, herring' },
        { el: 'Κρέας, τυρί, ρέγγα, ψάρι', en: 'Meat, cheese, herring, fish' },
        { el: 'Ψάρι, ρέγγα, τυρί, κρέας', en: 'Fish, herring, cheese, meat' },
      ],
      explanation: {
        el:
          'Η σειρά πάει από τις πιο δυνατές γεύσεις της θάλασσας προς τις πιο ήπιες, και ' +
          'κλείνει με το τυρί. Κανείς δεν σε συλλαμβάνει αν την μπερδέψεις.',
        en:
          'The order runs from the strongest tastes of the sea towards the milder ones, ' +
          'and finishes with cheese. Nobody arrests you for getting it wrong.',
      },
    },
  },

  // ---------------------------------------------------------------------- nyhavn
  {
    id: 'copenhagen-nyhavn',
    cityId: 'copenhagen',
    emoji: '⛵',
    category: 'landmark',
    difficulty: 1,

    name: { el: 'Το Νίχαουν', en: 'Nyhavn' },
    tagline: {
      el: 'Ένα κανάλι σκαμμένο με φτυάρια, με σπίτια σαν κραγιόνια',
      en: 'A canal dug with spades, and houses like a box of crayons',
    },
    story: {
      el:
        'Πριν από περίπου 350 χρόνια ο βασιλιάς Χριστιανός ο Ε΄ έβαλε στρατιώτες και ' +
        'Σουηδούς αιχμαλώτους πολέμου να σκάψουν ένα κανάλι από το λιμάνι ως τη νέα του ' +
        'πλατεία, ώστε τα καράβια να ξεφορτώνουν ξυλεία, ψάρια και μπαχαρικά μέσα στην ' +
        'πόλη. Και στις δύο μεριές υψώθηκαν στενά ψηλά σπίτια. Το πιο παλιό, στον αριθμό ' +
        '9, στέκεται από το 1681. Για το μεγαλύτερο μέρος της ζωής του αυτό ήταν η ' +
        'συνοικία των ναυτικών, και δεν ήταν ήσυχη: γεμάτη ταβέρνες, και οι ' +
        'νοικοκυραίοι δεν περπατούσαν εδώ τη νύχτα. Ο Χανς Κρίστιαν Άντερσεν έμεινε σε ' +
        'τρία από αυτά τα σπίτια. Στον αριθμό 20 έγραψε το 1835 τα πρώτα του παραμύθια, ' +
        'και αργότερα έζησε στο 67 και στο 18. Η προκυμαία έκλεισε για τα αυτοκίνητα το ' +
        '1980, και τα παλιά ξύλινα σκάφη που δένουν εδώ σχηματίζουν σήμερα ένα πλωτό ' +
        'μουσείο. Στην άκρη προς το λιμάνι στέκεται μια τεράστια άγκυρα, μνημείο για ' +
        'τους Δανούς ναυτικούς που χάθηκαν στη θάλασσα στον Δεύτερο Παγκόσμιο Πόλεμο.',
      en:
        'About 350 years ago King Christian V set soldiers and Swedish prisoners of war to ' +
        'dig a canal from the harbour up to his new square, so that ships could unload ' +
        'timber, fish and spices inside the city. Tall narrow houses went up along both ' +
        'sides. The oldest, at number 9, has stood since 1681. For most of its life this ' +
        'was the sailors’ quarter, and not a quiet one: full of taverns, and respectable ' +
        'people did not walk here at night. Hans Christian Andersen lived in three of ' +
        'these houses. At number 20 he wrote his first fairy tales in 1835, and later he ' +
        'lived at number 67 and number 18. The quay was closed to cars in 1980, and the ' +
        'old wooden vessels moored along it now make up a floating museum. At the harbour ' +
        'end stands an enormous anchor, a memorial to the Danish sailors lost at sea in ' +
        'the Second World War.',
    },
    facts: [
      {
        el: 'Το κανάλι σκάφτηκε το 1670–1673 από στρατιώτες και Σουηδούς αιχμαλώτους.',
        en: 'The canal was dug in 1670–1673 by soldiers and Swedish prisoners of war.',
      },
      {
        el: 'Το πιο παλιό σπίτι του, στον αριθμό 9, στέκεται από το 1681.',
        en: 'Its oldest house, at number 9, has stood there since 1681.',
      },
      {
        el: 'Ο Άντερσεν έγραψε τα πρώτα του παραμύθια στον αριθμό 20, το 1835.',
        en: 'Andersen wrote his first fairy tales at number 20, in 1835.',
      },
    ],
    location: {
      lat: 55.67987,
      lng: 12.59041,
      anchor: 'area',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q943946', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Nyhavn', deltaM: 19 },
      ],
      verifiedAt: '2026-09-14',
      findIt: {
        el: 'Το κανάλι ξεκινάει από τη βορειοανατολική γωνία της Kongens Nytorv. Τα χρωματιστά σπίτια είναι στην ηλιόλουστη πλευρά.',
        en: 'The canal starts at the north-east corner of Kongens Nytorv. The painted houses are on the sunny side.',
      },
    },
    question: {
      q: {
        el: 'Ποιοι έσκαψαν το κανάλι πριν από 350 χρόνια;',
        en: 'Who dug the canal 350 years ago?',
      },
      answers: [
        { el: 'Στρατιώτες και αιχμάλωτοι', en: 'Soldiers and prisoners of war' },
        { el: 'Ναύτες και ντόπιοι ψαράδες', en: 'Sailors and local fishermen' },
        { el: 'Μοναχοί και μαθητές τους', en: 'Monks and their schoolboys' },
        { el: 'Έμποροι και τραπεζίτες', en: 'Merchants and their bankers' },
      ],
      explanation: {
        el:
          'Το σκάψιμο έγινε με φτυάρια, από στρατιώτες του βασιλιά και από Σουηδούς ' +
          'αιχμαλώτους πολέμου, ανάμεσα στο 1670 και το 1673.',
        en:
          'The digging was done with spades, by the king’s soldiers and by Swedish ' +
          'prisoners of war, between 1670 and 1673.',
      },
    },
  },

  // ----------------------------------------------------------------- amalienborg
  {
    id: 'copenhagen-amalienborg',
    cityId: 'copenhagen',
    emoji: '🛡️',
    category: 'history',
    difficulty: 2,

    name: { el: 'Το Αμάλιενμποργκ', en: 'Amalienborg' },
    tagline: {
      el: 'Τέσσερα ολόιδια παλάτια γύρω από πλατεία με οκτώ πλευρές',
      en: 'Four identical palaces around a square with eight sides',
    },
    story: {
      el:
        'Τα τέσσερα παλάτια χτίστηκαν τη δεκαετία του 1750, όχι για τον βασιλιά αλλά για ' +
        'τέσσερις πλούσιες οικογένειες ευγενών, γύρω από μια πλατεία με οκτώ πλευρές. Ο ' +
        'βασιλιάς Φρειδερίκος ο Ε΄ ήθελε μια ολόκληρη καινούργια συνοικία τόσο όμορφη ' +
        'ώστε να τη συζητάνε οι επισκέπτες, και έβαλε στη μέση της το άγαλμα του εαυτού ' +
        'του πάνω σε άλογο. Ο Γάλλος γλύπτης Ζακ Σαλί χρειάστηκε περίπου είκοσι χρόνια ' +
        'γι’ αυτό το άγαλμα, και λένε ότι κόστισε σχεδόν όσο ένα από τα παλάτια. Το 1794 ' +
        'το βασιλικό παλάτι στο Κρίστιανσμποργκ κάηκε, ο βασιλιάς αγόρασε τα τέσσερα ' +
        'σπίτια από τους ιδιοκτήτες τους, και η οικογένεια μετακόμισε εδώ. Είναι ακόμα ' +
        'εδώ. Στρατιώτες με ψηλά μαύρα καπέλα από γούνα φυλάνε την πλατεία. Κάθε πρωί ' +
        'στις έντεκα και μισή η φρουρά ξεκινάει από το κάστρο Ρόζενμποργκ, περνάει την ' +
        'πόλη με τύμπανα και αλλάζει βάρδια εδώ στις δώδεκα ακριβώς.',
      en:
        'The four palaces were built in the 1750s, not for the king but for four wealthy ' +
        'noble families, around a square with eight sides. King Frederik V wanted a whole ' +
        'new district so handsome that visitors would talk about it, and he put a statue ' +
        'of himself on horseback in the middle of it. The French sculptor Jacques Saly ' +
        'took about twenty years over that statue, and it is said to have cost nearly as ' +
        'much as one of the palaces. Then in 1794 the royal palace at Christiansborg ' +
        'burned down, the king bought the four houses from their owners, and the family ' +
        'moved in. They are still here. Soldiers in tall black fur caps guard the square. ' +
        'Every morning at half past eleven the guard sets out from Rosenborg Castle, ' +
        'marches across the city with drums, and changes over here at twelve exactly.',
    },
    facts: [
      {
        el: 'Τα τέσσερα παλάτια χτίστηκαν τη δεκαετία του 1750 για οικογένειες ευγενών.',
        en: 'The four palaces were built in the 1750s for families of nobles.',
      },
      {
        el: 'Η βασιλική οικογένεια μετακόμισε εδώ το 1794, όταν κάηκε το Κρίστιανσμποργκ.',
        en: 'The royal family moved here in 1794, when Christiansborg burned down.',
      },
      {
        el: 'Η φρουρά ξεκινάει στις 11:30 από το Ρόζενμποργκ και αλλάζει εδώ στις 12 ακριβώς.',
        en: 'The guard leaves Rosenborg at 11:30 and changes over here at 12 sharp.',
      },
    ],
    location: {
      lat: 55.68403,
      lng: 12.59333,
      anchor: 'area',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q211053', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Amalienborg', deltaM: 0 },
      ],
      verifiedAt: '2026-09-14',
      note: 'The four-palace complex, not Amalienborg Slotsplads (Q11957655), which is the square between them and sits 14 m away — one place, not two pins.',
      findIt: {
        el: 'Μπες στην οκτάγωνη πλατεία από την Amaliegade. Στη μέση στέκεται ο βασιλιάς πάνω σε άλογο.',
        en: 'Enter the eight-sided square from Amaliegade. In the middle stands the king on his horse.',
      },
    },
    question: {
      q: {
        el: 'Γιατί μετακόμισε εδώ η βασιλική οικογένεια το 1794;',
        en: 'Why did the royal family move here in 1794?',
      },
      answers: [
        { el: 'Κάηκε το παλάτι τους', en: 'Their own palace burned' },
        { el: 'Ήθελαν πιο πολύ φως', en: 'They wanted more light' },
        { el: 'Τους το ζήτησε ο λαός', en: 'The people asked them' },
        { el: 'Ήταν κοντά στο Τίβολι', en: 'It was close to Tivoli' },
      ],
      explanation: {
        el:
          'Το Κρίστιανσμποργκ καταστράφηκε από φωτιά. Ο βασιλιάς αγόρασε τα τέσσερα ' +
          'παλάτια από τους ευγενείς που τα είχαν, και η οικογένεια έμεινε εδώ.',
        en:
          'Christiansborg was destroyed by fire. The king bought the four palaces from the ' +
          'nobles who owned them, and the family stayed on here.',
      },
    },
  },

  // ------------------------------------------------------------------- kastellet
  {
    id: 'copenhagen-kastellet',
    cityId: 'copenhagen',
    emoji: '⭐',
    category: 'history',
    difficulty: 2,

    name: { el: 'Το Καστέλετ', en: 'Kastellet' },
    tagline: {
      el: 'Ένα αστέρι με πέντε μύτες και νερό ολόγυρα',
      en: 'A star with five points and water all the way round',
    },
    story: {
      el:
        'Το Καστέλετ χτίστηκε τη δεκαετία του 1660, αμέσως μετά την πολιορκία της ' +
        'Κοπεγχάγης από σουηδικό στρατό, όταν ο βασιλιάς Φρειδερίκος ο Γ΄ ήθελε ένα ' +
        'φρούριο που να κρατάει το λιμάνι. Από ψηλά είναι ένα αστέρι με πέντε μύτες. Το ' +
        'σχήμα δεν είναι στολίδι: κάθε μύτη, ο προμαχώνας, επιτρέπει σε όσους στέκονται ' +
        'πάνω της να βλέπουν κατά μήκος των δύο τειχών δίπλα της, οπότε ο επιτιθέμενος ' +
        'δεν έχει πουθενά να σταθεί κρυμμένος. Κάθε μύτη έχει όνομα: του Βασιλιά, της ' +
        'Βασίλισσας, του Πρίγκιπα, της Πριγκίπισσας και του Κόμη. Γύρω γύρω τρέχει τάφρος ' +
        'με νερό. Μέσα υπάρχουν μακριοί κόκκινοι στρατώνες όπου κοιμόντουσαν οι ' +
        'στρατιώτες, μια εκκλησία του 1704 και ένας ανεμόμυλος ξαναχτισμένος το 1847, ' +
        'γιατί σε πολιορκία η φρουρά έπρεπε να αλέθει μόνη της το σιτάρι της. Ο στρατός ' +
        'έχει ακόμα γραφεία εδώ. Οι πύλες όμως είναι ανοιχτές, και ο κόσμος τρέχει πάνω ' +
        'στα τείχη ανάμεσα σε πάπιες.',
      en:
        'Kastellet was built in the 1660s, right after a Swedish army had besieged ' +
        'Copenhagen and King Frederik III wanted a fortress that could hold the harbour. ' +
        'From above it is a star with five points. The shape is not decoration: each ' +
        'point, called a bastion, lets whoever stands on it see along the two walls beside ' +
        'it, so an attacker has nowhere to stand out of sight. Every point has a name: the ' +
        'King, the Queen, the Prince, the Princess and the Count. A moat full of water ' +
        'runs all the way round. Inside are long red barracks where the soldiers slept, a ' +
        'church from 1704, and a windmill rebuilt in 1847, because under siege the ' +
        'garrison had to grind its own grain. The army still has offices here. The gates ' +
        'are open all the same, and people run on the ramparts among the ducks.',
    },
    facts: [
      {
        el: 'Χτίστηκε τη δεκαετία του 1660, αμέσως μετά από σουηδική πολιορκία της πόλης.',
        en: 'It was built in the 1660s, right after a Swedish siege of the city.',
      },
      {
        el: 'Οι πέντε προμαχώνες του λέγονται Βασιλιάς, Βασίλισσα, Πρίγκιπας, Πριγκίπισσα και Κόμης.',
        en: 'Its five bastions are named King, Queen, Prince, Princess and Count.',
      },
      {
        el: 'Ο ανεμόμυλός του ξαναχτίστηκε το 1847, για να αλέθει το σιτάρι της φρουράς.',
        en: 'Its windmill was rebuilt in 1847, to grind the garrison’s own grain.',
      },
    ],
    location: {
      lat: 55.69161,
      lng: 12.59357,
      anchor: 'area',
      confidence: 'C',
      sources: [
        { kind: 'wikidata', ref: 'Q221812', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Kastellet, Copenhagen', deltaM: 59 },
      ],
      verifiedAt: '2026-09-14',
      note: 'Graded C rather than B: the OpenStreetMap fetch failed during the run, and Wikipedia’s point is 59 m off, which is well inside the tolerance for an area this size but outside the 30 m window that counts as agreement. Two sources describing the same fortress, one grade lost to a silent third.',
      findIt: {
        el: 'Η νότια πύλη είναι στο τέλος του πάρκου Churchillparken. Πέρνα τη γέφυρα πάνω από την τάφρο.',
        en: 'The south gate is at the end of Churchillparken. Cross the bridge over the moat.',
      },
    },
    question: {
      q: {
        el: 'Γιατί χτίζονταν τα φρούρια σε σχήμα αστεριού;',
        en: 'Why were fortresses built in the shape of a star?',
      },
      answers: [
        { el: 'Κάθε μύτη βλέπει τα τείχη', en: 'Each point can see the walls' },
        { el: 'Για να φαίνονται από ψηλά', en: 'So they show up from above' },
        { el: 'Για να χωράνε πιο πολλοί', en: 'So more soldiers could fit' },
        { el: 'Για να αντέχουν τον άνεμο', en: 'So they stand up to storms' },
      ],
      explanation: {
        el:
          'Από κάθε προμαχώνα φαίνονται τα διπλανά τείχη. Έτσι δεν μένει καμία γωνία ' +
          'όπου να μπορεί ο εχθρός να πλησιάσει χωρίς να τον δει κανείς.',
        en:
          'From every bastion you can see the walls next door. That leaves no corner where ' +
          'an enemy can get close without being seen.',
      },
    },
  },

  // --------------------------------------------------------------- little mermaid
  {
    id: 'copenhagen-little-mermaid',
    cityId: 'copenhagen',
    emoji: '🧜',
    category: 'art',
    difficulty: 1,

    name: { el: 'Η Μικρή Γοργόνα', en: 'The Little Mermaid' },
    tagline: {
      el: 'Το πιο διάσημο άγαλμα της Δανίας έχει ύψος 1,25 μέτρα',
      en: 'Denmark’s most famous statue is 1.25 metres tall',
    },
    story: {
      el:
        'Το 1909 ένας ζυθοποιός, ο Καρλ Γιάκομπσεν — ο ίδιος που έχτισε τη Γλυπτοθήκη — ' +
        'πήγε στο Βασιλικό Θέατρο, είδε ένα μπαλέτο βασισμένο στη Μικρή Γοργόνα του ' +
        'Άντερσεν και συγκινήθηκε τόσο, που πλήρωσε για ένα άγαλμά της. Ο γλύπτης ' +
        'Έντβαρντ Έρικσεν ζήτησε από την μπαλαρίνα που είχε χορέψει τον ρόλο, την Έλεν ' +
        'Πράις, να ποζάρει. Εκείνη δέχτηκε για το πρόσωπο αλλά όχι για τα υπόλοιπα, ' +
        'οπότε το σώμα είναι της γυναίκας του γλύπτη, της Ελίνε. Ο μπρούντζος ' +
        'τοποθετήθηκε πάνω σε έναν βράχο στην άκρη του νερού το 1913. Έχει ύψος 1,25 ' +
        'μέτρα, όσο περίπου ένα παιδί εννιά χρονών, και οι επισκέπτες ξαφνιάζονται ' +
        'τακτικά με το πόσο μικρό είναι. Κοίτα τα πόδια της: στο παραμύθι η γοργόνα ' +
        'έδωσε τη φωνή της για να αποκτήσει πόδια, και ο γλύπτης της έδωσε και τα δύο ' +
        'μαζί, πόδια που τελειώνουν σε πτερύγια. Το 2010 έφυγε από τη Δανία για πρώτη ' +
        'φορά, για μια παγκόσμια έκθεση στη Σανγκάη.',
      en:
        'In 1909 a brewer called Carl Jacobsen — the same man who built the Glyptotek — ' +
        'went to the Royal Theatre, watched a ballet based on Andersen’s Little Mermaid ' +
        'and was so moved that he paid for a statue of her. The sculptor Edvard Eriksen ' +
        'asked the ballerina who had danced the part, Ellen Price, to model. She agreed to ' +
        'sit for the face but not for the rest, so the body is the sculptor’s wife, Eline. ' +
        'The bronze was set on a rock at the water’s edge in 1913. It is 1.25 metres tall, ' +
        'about the size of a nine-year-old, and visitors are regularly startled by how ' +
        'small it is. Look at her legs: in the tale the mermaid gave away her voice to get ' +
        'legs, and the sculptor gave her both at once, legs that end in fins. In 2010 she ' +
        'left Denmark for the first time, for a world fair in Shanghai.',
    },
    facts: [
      {
        el: 'Στήθηκε πάνω στον βράχο της το 1913 και έχει ύψος μόλις 1,25 μέτρα.',
        en: 'She was placed on her rock in 1913 and is only 1.25 metres tall.',
      },
      {
        el: 'Το πρόσωπο είναι της μπαλαρίνας Έλεν Πράις και το σώμα της γυναίκας του γλύπτη.',
        en: 'The face is the ballerina Ellen Price’s and the body the sculptor’s wife’s.',
      },
      {
        el: 'Το 2010 ταξίδεψε για πρώτη φορά εκτός Δανίας, σε έκθεση στη Σανγκάη.',
        en: 'In 2010 she travelled outside Denmark for the first time, to a fair in Shanghai.',
      },
    ],
    location: {
      lat: 55.69286,
      lng: 12.59926,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q214619', deltaM: 0 },
        { kind: 'wikipedia', ref: 'The Little Mermaid (statue)', deltaM: 1 },
      ],
      verifiedAt: '2026-09-14',
      findIt: {
        el: 'Κάθεται σε βράχο μέσα στο νερό, στον περίπατο Langelinie, βόρεια από το φρούριο.',
        en: 'She sits on a rock in the water, on the Langelinie walk, north of the fortress.',
      },
    },
    question: {
      q: {
        el: 'Πόσο ψηλό είναι το άγαλμα της γοργόνας;',
        en: 'How tall is the statue of the mermaid?',
      },
      answers: [
        { el: '1,25 μέτρα, σαν παιδί', en: '1.25 metres, like a child' },
        { el: '3,25 μέτρα, σαν πόρτα', en: '3.25 metres, like a door' },
        { el: '5,25 μέτρα, σαν σπίτι', en: '5.25 metres, like a house' },
        { el: '9,25 μέτρα, σαν δέντρο', en: '9.25 metres, like a tree' },
      ],
      explanation: {
        el:
          'Είναι μόλις 1,25 μέτρα, όσο ένα παιδί εννιά χρονών. Οι περισσότεροι ' +
          'επισκέπτες περιμένουν κάτι πολύ μεγαλύτερο και ξαφνιάζονται.',
        en:
          'She is just 1.25 metres, about the size of a nine-year-old. Most visitors ' +
          'expect something far bigger and are surprised.',
      },
    },
  },

  // --------------------------------------------------------- church of our saviour
  {
    id: 'copenhagen-vor-frelsers-kirke',
    cityId: 'copenhagen',
    emoji: '🌀',
    category: 'landmark',
    difficulty: 3,

    name: { el: 'Η Εκκλησία του Σωτήρος', en: 'The Church of Our Saviour' },
    tagline: {
      el: 'Μια χρυσή σκάλα που στριφογυρίζει έξω από τον πύργο',
      en: 'A golden staircase spiralling round the outside of a tower',
    },
    story: {
      el:
        'Η ίδια η εκκλησία τελείωσε γύρω στο 1696, όμως ο πύργος για τον οποίο έρχονται ' +
        'όλοι προστέθηκε το 1752, από τον αρχιτέκτονα Λάουριτς ντε Τούρα. Είναι μαύρος, ' +
        'με χρυσό κιγκλίδωμα, και η σκάλα του τυλίγεται στην έξω μεριά του πύργου αντί ' +
        'για μέσα, στενεύοντας όσο ανεβαίνει. Για να φτάσεις στην κορυφή ανεβαίνεις ' +
        'περίπου 400 σκαλοπάτια, και τα τελευταία 150 είναι στον ανοιχτό αέρα, με ' +
        'ολόκληρη την πόλη από κάτω σου. Η σκάλα γυρίζει αριστερόστροφα, που είναι ' +
        'ασυνήθιστο, και μια παλιά ιστορία λέει ότι ο αρχιτέκτονας έπεσε από τον πύργο ' +
        'όταν κατάλαβε ότι την είχε χτίσει ανάποδα. Δεν έπεσε. Πέθανε στο κρεβάτι του ' +
        'εφτά χρόνια αργότερα. Ο πύργος φτάνει περίπου τα 90 μέτρα. Μέσα του κρέμονται ' +
        '48 καμπάνες, ένα όργανο που παίζεται από πληκτρολόγιο και βγάζει μελωδίες κάθε ' +
        'ώρα, από το πρωί ως τα μεσάνυχτα.',
      en:
        'The church itself was finished around 1696, but the spire everybody comes for was ' +
        'added in 1752, by the architect Lauritz de Thurah. It is black, with a golden ' +
        'handrail, and its staircase winds around the outside of the tower instead of ' +
        'inside it, narrowing as it climbs. To reach the top you go up about 400 steps, ' +
        'and the last 150 are in the open air, with the whole city underneath you. The ' +
        'stairs turn anticlockwise, which is unusual, and an old story says the architect ' +
        'fell from the tower when he realised he had built them the wrong way round. He ' +
        'did not. He died in his bed seven years later. The spire is about 90 metres high. ' +
        'Inside the tower hang 48 bells, an instrument played from a keyboard, which rings ' +
        'out tunes every hour from morning until midnight.',
    },
    facts: [
      {
        el: 'Η εκκλησία τελείωσε γύρω στο 1696 και ο πύργος προστέθηκε το 1752.',
        en: 'The church was finished around 1696 and the spire was added in 1752.',
      },
      {
        el: 'Από τα περίπου 400 σκαλοπάτια, τα τελευταία 150 είναι έξω, στον ανοιχτό αέρα.',
        en: 'Of about 400 steps, the last 150 are outside, in the open air.',
      },
      {
        el: 'Μέσα στον πύργο κρέμονται 48 καμπάνες που παίζουν μελωδίες κάθε ώρα.',
        en: 'Inside the tower hang 48 bells that play tunes every hour.',
      },
    ],
    location: {
      lat: 55.67278,
      lng: 12.59389,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q29157', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Church of Our Saviour, Copenhagen', deltaM: 0 },
      ],
      verifiedAt: '2026-09-14',
      note: 'Eight Danish churches are called Vor Frelsers Kirke. Q29157 is the one whose Danish description reads «kirke på Christianshavn, København»; the others are in Esbjerg, Vejle, Ålborg, Odense, Horsens, Assens and Nuuk.',
      findIt: {
        el: 'Η πόρτα είναι στην οδό Sankt Annæ Gade. Η άνοδος στη σκάλα κλείνει με δυνατό αέρα.',
        en: 'The door is on Sankt Annæ Gade. The stair up closes when the wind is strong.',
      },
    },
    question: {
      q: {
        el: 'Τι λέει ο παλιός θρύλος για τον αρχιτέκτονα;',
        en: 'What does the old legend say about the architect?',
      },
      answers: [
        { el: 'Ότι έπεσε από τον πύργο', en: 'That he fell off the tower' },
        { el: 'Ότι έχτισε άλλους δέκα', en: 'That he built ten others' },
        { el: 'Ότι ζωγράφισε τον χάρτη', en: 'That he drew up the map' },
        { el: 'Ότι έχασε τα σχέδιά του', en: 'That he lost his drawings' },
      ],
      explanation: {
        el:
          'Ο θρύλος λέει ότι έπεσε μόλις είδε πως η σκάλα γυρίζει ανάποδα. Δεν συνέβη: ' +
          'ο ντε Τούρα πέθανε στο κρεβάτι του εφτά χρόνια αργότερα.',
        en:
          'The legend says he fell the moment he saw the stairs turned the wrong way. It ' +
          'did not happen: de Thurah died in his bed seven years later.',
      },
    },
  },

  // ----------------------------------------------------------------- harbour bath
  {
    id: 'copenhagen-havnebadet',
    cityId: 'copenhagen',
    emoji: '🏊',
    category: 'sport',
    difficulty: 2,

    name: { el: 'Το Κολυμβητήριο του Λιμανιού', en: 'The Harbour Bath' },
    tagline: {
      el: 'Ένα λιμάνι που καθάρισε τόσο, ώστε να κολυμπάς μέσα του',
      en: 'A harbour cleaned up until you could swim in it again',
    },
    story: {
      el:
        'Για το μεγαλύτερο μέρος του 20ού αιώνα δεν μπορούσες να κολυμπήσεις στο λιμάνι ' +
        'της Κοπεγχάγης. Η βροχή και τα λύματα μοιράζονταν τους ίδιους αγωγούς, οπότε ' +
        'κάθε δυνατή μπόρα έσπρωχνε βρόμικο νερό κατευθείαν στο κανάλι, και το νερό ' +
        'κουβαλούσε μικρόβια και, κατά τόπους, δηλητήρια από παλιά εργοστάσια. Η πόλη ' +
        'αποφάσισε να το διορθώσει αντί να το περιφράξει. Μέσα σε είκοσι περίπου χρόνια ' +
        'χώρισε τους αγωγούς, έφτιαξε τεράστιες υπόγειες δεξαμενές που κρατάνε την ' +
        'υπερχείλιση όταν βρέχει πολύ, και σταμάτησε τα βιομηχανικά απόβλητα. Το 2002 το ' +
        'νερό ήταν αρκετά καθαρό ώστε να ανοίξει ένα δημόσιο κολυμβητήριο μέσα στο ίδιο ' +
        'το λιμάνι, στο Islands Brygge. Είναι μια ξύλινη πλατφόρμα με πέντε πισίνες ' +
        'κομμένες μέσα της, μία ρηχή για μικρά παιδιά, με ναυαγοσώστες το καλοκαίρι και ' +
        'χωρίς εισιτήριο. Αισθητήρες παρακολουθούν το νερό και οι πισίνες κλείνουν αν ' +
        'μια καταιγίδα το κάνει επικίνδυνο.',
      en:
        'For most of the twentieth century you could not swim in Copenhagen’s harbour. ' +
        'Rain and sewage shared the same pipes, so every heavy shower pushed dirty water ' +
        'straight into the channel, and the water carried bacteria and, in places, poisons ' +
        'from old factories. The city decided to fix it rather than fence it off. Over ' +
        'about twenty years it separated the pipes, built enormous underground tanks to ' +
        'hold the overflow when it rains hard, and stopped the industrial discharges. By ' +
        '2002 the water was clean enough to open a public swimming place in the harbour ' +
        'itself, off Islands Brygge. It is a wooden platform with five pools cut into it, ' +
        'one of them shallow for small children, with lifeguards in summer and nothing to ' +
        'pay. Sensors watch the water and the pools close if a storm makes it unsafe.',
    },
    facts: [
      {
        el: 'Άνοιξε το 2002, όταν το νερό του λιμανιού έγινε αρκετά καθαρό για κολύμπι.',
        en: 'It opened in 2002, once the harbour water was clean enough to swim in.',
      },
      {
        el: 'Έχει πέντε πισίνες, μία ρηχή για μικρά παιδιά, και η είσοδος δεν κοστίζει.',
        en: 'It has five pools, one shallow for small children, and costs nothing to use.',
      },
      {
        el: 'Η πόλη χώρισε τους αγωγούς της βροχής από τους αγωγούς των λυμάτων.',
        en: 'The city separated its rainwater pipes from its sewage pipes.',
      },
    ],
    location: {
      lat: 55.66871,
      lng: 12.57787,
      anchor: 'area',
      confidence: 'C',
      sources: [{ kind: 'wikidata', ref: 'Q107117790', deltaM: 0 }],
      verifiedAt: '2026-09-14',
      note: 'Graded C because neither cross-check answered: the OpenStreetMap fetch failed during the run and there is no English Wikipedia article with a coordinate.',
      findIt: {
        el: 'Είναι μια ξύλινη πλατφόρμα μέσα στο νερό, στην προκυμαία του Islands Brygge.',
        en: 'It is a wooden platform out in the water, on the Islands Brygge waterfront.',
      },
    },
    question: {
      q: {
        el: 'Πώς κατάφερε η πόλη να καθαρίσει το λιμάνι της;',
        en: 'How did the city manage to clean up its harbour?',
      },
      answers: [
        { el: 'Χώρισε τους αγωγούς της', en: 'It separated its own pipes' },
        { el: 'Άλλαξε όλο το νερό της', en: 'It swapped all of the water' },
        { el: 'Έριξε αλάτι στο νερό', en: 'It poured in a lot of salt' },
        { el: 'Έκλεισε τις γέφυρές της', en: 'It closed all its bridges' },
      ],
      explanation: {
        el:
          'Όσο η βροχή και τα λύματα περνούσαν από τους ίδιους σωλήνες, κάθε μπόρα ' +
          'λέρωνε το λιμάνι. Χωριστοί αγωγοί και δεξαμενές σταμάτησαν τις υπερχειλίσεις.',
        en:
          'While rain and sewage went down the same pipes, every downpour dirtied the ' +
          'harbour. Separate pipes and holding tanks stopped the overflows.',
      },
    },
  },

  // ----------------------------------------------------------------- amager bakke
  {
    id: 'copenhagen-amager-bakke',
    cityId: 'copenhagen',
    emoji: '⛷️',
    category: 'science',
    difficulty: 3,

    name: { el: 'Το Άμαγκερ Μπάκε', en: 'Amager Bakke' },
    tagline: {
      el: 'Ένα εργοστάσιο σκουπιδιών με πίστα του σκι στη σκεπή',
      en: 'A rubbish-burning power station with a ski slope on top',
    },
    story: {
      el:
        'Το Άμαγκερ Μπάκε είναι ένα εργοστάσιο ενέργειας που δουλεύει με σκουπίδια. Τα ' +
        'οικιακά απορρίμματα εκατοντάδων χιλιάδων ανθρώπων καίγονται εδώ σε πολύ υψηλή ' +
        'θερμοκρασία· η θερμότητα βράζει νερό, ο ατμός γυρίζει έναν στρόβιλο, και το ' +
        'εργοστάσιο στέλνει έξω και ρεύμα και ζεστό νερό, που τρέχει μέσα σε σωλήνες και ' +
        'ζεσταίνει σπίτια σε όλη την πόλη. Ο καπνός περνάει από φίλτρα που κρατάνε το ' +
        'μεγαλύτερο μέρος όσων θα πήγαιναν αλλιώς στον αέρα. Αυτό που το έκανε διάσημο ' +
        'είναι η σκεπή. Οι αρχιτέκτονες υποστήριξαν ότι αν μια πόλη βάλει ένα τεράστιο ' +
        'βιομηχανικό κτίριο δίπλα σε κατοικίες, οφείλει να δώσει και κάτι πίσω. Έτσι η ' +
        'σκεπή χτίστηκε σαν λόφος: μια πίστα σκι πάνω από 400 μέτρα που δουλεύει όλον ' +
        'τον χρόνο σε πλαστική επιφάνεια, ένα μονοπάτι για ανάβαση ανάμεσα σε δέντρα, ' +
        'και στο πλάι ένας τοίχος αναρρίχησης όσο ψηλό είναι όλο το κτίριο. Άνοιξε στο ' +
        'κοινό το 2019. Από την κορυφή φαίνεται η Σουηδία.',
      en:
        'Amager Bakke is a power station that runs on rubbish. Household waste from ' +
        'several hundred thousand people is burned here at very high temperature; the heat ' +
        'boils water, the steam turns a turbine, and the plant sends out both electricity ' +
        'and hot water, which travels through pipes and warms homes across the city. The ' +
        'smoke passes through filters that catch most of what would otherwise go into the ' +
        'air. What made it famous is the roof. The architects argued that if a city puts a ' +
        'huge industrial building next to where people live, the city owes them something ' +
        'back. So the roof was built as a hill: a ski slope more than 400 metres long that ' +
        'works all year on a plastic surface, a path for walking up among planted trees, ' +
        'and on one flank a climbing wall the full height of the building. It opened to ' +
        'the public in 2019. From the top you can see Sweden.',
    },
    facts: [
      {
        el: 'Καίει σκουπίδια και βγάζει ρεύμα και ζεστό νερό για τη θέρμανση της πόλης.',
        en: 'It burns rubbish and produces both electricity and hot water for the city.',
      },
      {
        el: 'Στη σκεπή του υπάρχει πίστα σκι πάνω από 400 μέτρα, που δουλεύει όλον τον χρόνο.',
        en: 'On its roof is a ski slope over 400 metres long, open all year round.',
      },
      {
        el: 'Άνοιξε στο κοινό ως πάρκο και πίστα το 2019.',
        en: 'It opened to the public as a park and a slope in 2019.',
      },
    ],
    location: {
      lat: 55.68474,
      lng: 12.62055,
      anchor: 'centroid',
      confidence: 'C',
      sources: [
        { kind: 'wikidata', ref: 'Q16002749', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Amager Bakke', deltaM: 48 },
      ],
      verifiedAt: '2026-09-14',
      note: 'Graded C rather than B: the OpenStreetMap fetch failed during the run, and Wikipedia’s point is 48 m off — inside the tolerance for a building this large, but outside the 30 m window that counts as agreement.',
      findIt: {
        el: 'Το μονοπάτι και η πίστα ξεκινούν από την πλευρά του δρόμου Vindmøllevej.',
        en: 'The walking path and the slope both start from the Vindmøllevej side.',
      },
    },
    question: {
      q: {
        el: 'Τι βγάζει το εργοστάσιο καίγοντας σκουπίδια;',
        en: 'What does the plant produce by burning rubbish?',
      },
      answers: [
        { el: 'Ρεύμα και ζεστό νερό', en: 'Power and hot water' },
        { el: 'Βενζίνη και πλαστικό', en: 'Petrol and plastic' },
        { el: 'Χαρτί και χαρτόνι', en: 'Paper and cardboard' },
        { el: 'Πάγο και κρύο αέρα', en: 'Ice and cold air' },
      ],
      explanation: {
        el:
          'Η φωτιά βράζει νερό, ο ατμός γυρίζει στρόβιλο και δίνει ρεύμα. Το υπόλοιπο ' +
          'ζεστό νερό φεύγει με σωλήνες και ζεσταίνει σπίτια της πόλης.',
        en:
          'The fire boils water, the steam turns a turbine and makes electricity. The ' +
          'leftover hot water goes out through pipes and warms homes in the city.',
      },
    },
  },
];

export const trails: Trail[] = [
  {
    id: 'copenhagen-a-day-on-foot',
    cityId: 'copenhagen',
    emoji: '👟',
    name: { el: 'Μια μέρα με τα πόδια', en: 'A day on foot' },
    promise: {
      el: 'Από το ρολόι της πόλης ως το κανάλι όπου γράφτηκαν τα πρώτα παραμύθια.',
      en: 'From the city’s clock to the canal where the first fairy tales were written.',
    },
    placeIds: [
      'copenhagen-radhus',
      'copenhagen-tivoli',
      'copenhagen-storkespringvandet',
      'copenhagen-rundetaarn',
      'copenhagen-nyhavn',
    ],
  },
  {
    id: 'copenhagen-above-the-roofs',
    cityId: 'copenhagen',
    emoji: '🔭',
    name: { el: 'Πάνω από τις στέγες', en: 'Above the roofs' },
    promise: {
      el: 'Τρεις πύργοι και τρεις τρόποι ανάβασης: ράμπα, ασανσέρ και σκάλα στον αέρα.',
      en: 'Three towers and three ways up: a ramp, a lift, and stairs in open air.',
    },
    placeIds: [
      'copenhagen-rundetaarn',
      'copenhagen-christiansborg',
      'copenhagen-vor-frelsers-kirke',
    ],
  },
  {
    id: 'copenhagen-inside-the-museums',
    cityId: 'copenhagen',
    emoji: '🗿',
    name: { el: 'Μέσα στα μουσεία', en: 'Inside the museums' },
    promise: {
      el: 'Ένας ήλιος πάνω σε ρόδες, ένα μάρμαρο που κράτησε το χρώμα του, ένας θρόνος από δόντι φάλαινας.',
      en: 'A sun on wheels, a marble that kept its colour, and a throne of whale tooth.',
    },
    placeIds: [
      'copenhagen-nationalmuseet',
      'copenhagen-glyptoteket',
      'copenhagen-rosenborg',
    ],
  },
  {
    id: 'copenhagen-the-water-side',
    cityId: 'copenhagen',
    emoji: '⚓',
    name: { el: 'Η μεριά του νερού', en: 'The water side' },
    promise: {
      el: 'Ένα αστέρι με τάφρο, τέσσερα παλάτια και μια μικρή μπρούντζινη γοργόνα.',
      en: 'A star with a moat, four palaces, and one small bronze mermaid.',
    },
    placeIds: [
      'copenhagen-nyhavn',
      'copenhagen-amalienborg',
      'copenhagen-kastellet',
      'copenhagen-little-mermaid',
    ],
  },
  {
    id: 'copenhagen-a-city-that-fixes-things',
    cityId: 'copenhagen',
    emoji: '♻️',
    name: { el: 'Μια πόλη που φτιάχνει πράγματα', en: 'A city that fixes things' },
    promise: {
      el: 'Ένα εργοστάσιο με πίστα σκι, ένα λιμάνι για κολύμπι και μια αγορά που γύρισε πίσω.',
      en: 'A power station you can ski down, a swimmable harbour, and a market that came back.',
    },
    placeIds: [
      'copenhagen-amager-bakke',
      'copenhagen-havnebadet',
      'copenhagen-torvehallerne',
      'copenhagen-botanisk-have',
    ],
  },
];
