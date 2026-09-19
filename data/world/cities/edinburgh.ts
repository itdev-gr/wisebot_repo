/**
 * WiseBot World — Edinburgh.
 *
 * Seventeen places, two of them museums with an interior. Edinburgh is not in the old
 * Explorer, so this city was written fresh rather than converted.
 *
 * Every coordinate is copied from `data/world/coords/edinburgh.json`, field for field,
 * and `location.map` is projected from it onto the bounds declared in
 * `countries/united-kingdom.ts`. Nothing graded `D`. No place claims an `entrance`,
 * because no door here has been measured.
 *
 * Every question is written so that the correct answer is neither the longest nor the
 * shortest of the four, in both languages, with the reasoning kept in the explanation.
 *
 * `el` and `en` only. The other languages arrive as overlay files.
 */

import type { Place, Trail } from '../types';

export const places: Place[] = [
  // --------------------------------------------------------------------- castle
  {
    id: 'edinburgh-castle',
    cityId: 'edinburgh',
    emoji: '🏰',
    category: 'history',
    difficulty: 1,

    name: { el: 'Το Κάστρο του Εδιμβούργου', en: 'Edinburgh Castle' },
    tagline: {
      el: 'Ένα κάστρο πάνω σε ένα σβησμένο ηφαίστειο',
      en: 'A castle on top of an extinct volcano',
    },
    story: {
      el:
        'Στη μέση του Εδιμβούργου υψώνεται ένας μαύρος βράχος με ένα κάστρο στην κορυφή. Ο ' +
        'βράχος είναι ό,τι έμεινε από ένα ηφαίστειο που έσβησε πριν από τριακόσια πενήντα ' +
        'εκατομμύρια χρόνια, και από τις τρεις πλευρές του είναι απόκρημνος, γι’ αυτό ήταν το ' +
        'τέλειο μέρος για κάστρο. Άνθρωποι ζούσαν εδώ πάνω πριν από τρεις χιλιάδες χρόνια, ' +
        'και βασιλιάδες της Σκωτίας από τον 12ο αιώνα. Το πιο παλιό κτίριο της πόλης είναι ' +
        'ένα μικρό παρεκκλήσι μέσα στο κάστρο, εννιακοσίων χρόνων. Μέσα φυλάγονται το στέμμα ' +
        'και το σπαθί των βασιλιάδων της Σκωτίας, τα πιο παλιά βασιλικά κοσμήματα της ' +
        'Βρετανίας, και ένα τεράστιο κανόνι του 15ου αιώνα, η Μονς Μεγκ, που έριχνε πέτρες ' +
        'βαριές σαν αυτοκίνητο. Κάθε μέρα, εκτός Κυριακής, ακριβώς στη μία το μεσημέρι, ' +
        'ένα κανόνι ρίχνει από τα τείχη μια βολή. Ξεκίνησε το 1861 για να ρυθμίζουν τα ρολόγια ' +
        'τους τα πλοία στο λιμάνι, και όλη η πόλη το ακούει ακόμα.',
      en:
        'In the middle of Edinburgh rises a black rock with a castle on top. The rock is what ' +
        'is left of a volcano that went out three hundred and fifty million years ago, and it ' +
        'is sheer on three sides, which made it the perfect place for a castle. People lived ' +
        'up here three thousand years ago, and kings of Scotland from the 12th century. The ' +
        'oldest building in the city is a tiny chapel inside the castle, nine hundred years ' +
        'old. Inside are kept the crown and sword of the kings of Scotland, the oldest royal ' +
        'jewels in Britain, and an enormous 15th-century cannon, Mons Meg, which fired stones ' +
        'as heavy as a car. Every day except Sunday, at exactly one o’clock, a gun fires a ' +
        'shot from the walls. It began in 1861 so that ships in the harbour could set their ' +
        'clocks, and the whole city still hears it.',
    },
    facts: [
      {
        el: 'Ο βράχος του είναι ένα ηφαίστειο σβησμένο εδώ και 350 εκατομμύρια χρόνια.',
        en: 'Its rock is a volcano that went out 350 million years ago.',
      },
      {
        el: 'Το παρεκκλήσι του είναι το πιο παλιό κτίριο της πόλης.',
        en: 'Its chapel is the oldest building in the city.',
      },
      {
        el: 'Κάθε μέρα στη μία το μεσημέρι ρίχνει ένα κανόνι.',
        en: 'A gun fires every day at one o’clock.',
      },
    ],
    location: {
      lat: 55.9487,
      lng: -3.20073,
      anchor: 'centroid',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q212065', deltaM: 0 },
        { kind: 'osm', ref: 'way/4301292', deltaM: 20 },
        { kind: 'wikipedia', ref: 'Edinburgh Castle', deltaM: 12 },
      ],
      verifiedAt: '2026-09-19',
      map: { x: 0.198, y: 0.689 },
    },
    question: {
      q: { el: 'Γιατί ξεκίνησε το κανόνι της μίας;', en: 'Why did the one o’clock gun begin?' },
      answers: [
        { el: 'Για να ρυθμίζουν τα ρολόγια τους τα πλοία', en: 'So ships could set their clocks' },
        { el: 'Για πόλεμο', en: 'For war' },
        { el: 'Για τα γενέθλια του βασιλιά', en: 'For the king’s birthday' },
        {
          el: 'Για να ξυπνάει τους στρατιώτες που κοιμόντουσαν μετά το μεσημεριανό',
          en: 'To wake up the soldiers who fell asleep after their lunch',
        },
      ],
      explanation: {
        el: 'Από το 1861. Τα πλοία στο λιμάνι άκουγαν τη βολή και έβαζαν την ώρα.',
        en: 'Since 1861. Ships in the harbour heard the shot and set the time.',
      },
    },
  },

  // -------------------------------------------------------------- camera obscura
  {
    id: 'edinburgh-camera-obscura',
    cityId: 'edinburgh',
    emoji: '🔭',
    category: 'museum',
    difficulty: 1,

    name: { el: 'Η Σκοτεινή Κάμερα', en: 'Camera Obscura' },
    tagline: {
      el: 'Ένα δωμάτιο που δείχνει όλη την πόλη ζωντανή πάνω σε ένα τραπέζι',
      en: 'A room that shows the whole city, live, on a table',
    },
    story: {
      el:
        'Λίγα βήματα από το κάστρο, στην κορυφή ενός ψηλού στενού κτιρίου, υπάρχει ένα ' +
        'σκοτεινό δωμάτιο με ένα άσπρο στρογγυλό τραπέζι στη μέση. Κλείνει η πόρτα, σβήνουν ' +
        'τα φώτα, και πάνω στο τραπέζι εμφανίζεται ολόκληρο το Εδιμβούργο: οι δρόμοι, τα ' +
        'αυτοκίνητα, οι άνθρωποι που περπατάνε, όλα κινούνται ζωντανά, την ίδια στιγμή. Δεν ' +
        'είναι βίντεο. Στη στέγη υπάρχει ένας καθρέφτης και φακοί, που πιάνουν το φως της ' +
        'πόλης και το ρίχνουν κάτω, στο τραπέζι, όπως μια τεράστια φωτογραφική μηχανή χωρίς ' +
        'φιλμ. Αυτό λέγεται «κάμερα ομπσκούρα», δηλαδή «σκοτεινό δωμάτιο», και είναι η πιο ' +
        'παλιά εφεύρεση πίσω από κάθε φωτογραφία. Το έστησε εδώ μια γυναίκα, η Μαρία Σορτ, το ' +
        '1853, και λειτουργεί ακόμα. Στους πέντε ορόφους από κάτω υπάρχουν εκατοντάδες ' +
        'οφθαλμαπάτες, ένας λαβύρινθος από καθρέφτες και ένα τούνελ που γυρίζει.',
      en:
        'A few steps from the castle, at the top of a tall narrow building, there is a dark ' +
        'room with a round white table in the middle. The door closes, the lights go out, and ' +
        'on the table the whole of Edinburgh appears: the streets, the cars, the people ' +
        'walking, all moving live, at that very moment. It is not a video. On the roof there ' +
        'is a mirror and lenses, which catch the light of the city and throw it down onto the ' +
        'table, like a giant camera with no film. This is called a "camera obscura", which ' +
        'means "dark room", and it is the oldest invention behind every photograph. A woman, ' +
        'Maria Short, set it up here in 1853, and it still works. On the five floors below ' +
        'there are hundreds of optical illusions, a maze of mirrors and a tunnel that spins.',
    },
    facts: [
      {
        el: '«Κάμερα ομπσκούρα» σημαίνει «σκοτεινό δωμάτιο».',
        en: '"Camera obscura" means "dark room".',
      },
      {
        el: 'Τη στήθηκε το 1853 η Μαρία Σορτ και λειτουργεί ακόμα.',
        en: 'Maria Short set it up in 1853 and it still works.',
      },
      {
        el: 'Δείχνει την πόλη ζωντανή, χωρίς φιλμ και χωρίς ρεύμα.',
        en: 'It shows the city live, with no film and no electricity.',
      },
    ],
    location: {
      lat: 55.949,
      lng: -3.19557,
      anchor: 'centroid',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q4211494', deltaM: 0 },
        { kind: 'osm', ref: 'node/268408103', deltaM: 4 },
        { kind: 'wikipedia', ref: 'Camera Obscura, Edinburgh', deltaM: 2 },
      ],
      verifiedAt: '2026-09-19',
      map: { x: 0.288, y: 0.679 },
    },
    question: {
      q: { el: 'Πώς εμφανίζεται η πόλη πάνω στο τραπέζι;', en: 'How does the city appear on the table?' },
      answers: [
        { el: 'Καθρέφτης και φακοί ρίχνουν το φως κάτω', en: 'A mirror and lenses throw the light down' },
        { el: 'Με βίντεο', en: 'By video' },
        { el: 'Είναι ζωγραφισμένη', en: 'It is painted on' },
        {
          el: 'Ένας άνθρωπος στη στέγη τη σχεδιάζει γρήγορα με κιμωλία και τη σβήνει',
          en: 'A person on the roof draws it quickly in chalk and rubs it out again',
        },
      ],
      explanation: {
        el: 'Όπως μια τεράστια φωτογραφική μηχανή χωρίς φιλμ. Η πιο παλιά ιδέα πίσω από τη φωτογραφία.',
        en: 'Like a giant camera with no film. The oldest idea behind photography.',
      },
    },

    museum: {
      doorNote: {
        el: 'Ανέβα πρώτα στην κορυφή, στο σκοτεινό δωμάτιο. Μετά κατέβα όροφο όροφο.',
        en: 'Go up to the top first, to the dark room. Then come down floor by floor.',
      },
      rooms: [
        {
          id: 'edinburgh-camera-roof',
          emoji: '🪞',
          name: { el: 'Η κορυφή του πύργου', en: 'The top of the tower' },
          intro: {
            el:
              'Στην κορυφή του κτιρίου είναι το ίδιο το σκοτεινό δωμάτιο και μια ταράτσα με ' +
              'θέα. Εδώ δεν υπάρχουν οθόνες: όλα γίνονται με φως, καθρέφτες και γυαλί, όπως ' +
              'πριν από εκατόν εβδομήντα χρόνια. Κάθε παράσταση κρατάει λίγα λεπτά, και ' +
              'χρειάζεται ήλιο ή έστω φως της μέρας.',
            en:
              'At the top of the building is the dark room itself and a rooftop with a view. ' +
              'There are no screens here: everything is done with light, mirrors and glass, as ' +
              'it was a hundred and seventy years ago. Each show lasts a few minutes, and it ' +
              'needs sun, or at least daylight.',
          },
          exhibits: [
            {
              id: 'edinburgh-camera-table',
              name: { el: 'Το τραπέζι με την πόλη', en: 'The table with the city' },
              blurb: {
                el:
                  'Ένας οδηγός γυρίζει ένα χερούλι, και ο καθρέφτης στη στέγη στρέφεται αργά ' +
                  'γύρω γύρω, δείχνοντας το κάστρο, τον δρόμο, τους λόφους, τη θάλασσα. Το ' +
                  'πιο διασκεδαστικό κόλπο: αν βάλεις ένα χαρτί κάτω από την εικόνα ενός ' +
                  'ανθρώπου που περπατάει, μοιάζει να τον σηκώνεις στο χέρι σου. Οι ' +
                  'επιστήμονες ήξεραν αυτό το φαινόμενο πριν από δύο χιλιάδες χρόνια: μια μικρή ' +
                  'τρύπα σε σκοτεινό δωμάτιο ρίχνει στον απέναντι τοίχο την εικόνα του έξω ' +
                  'κόσμου, ανάποδα. Εδώ οι φακοί τη μεγαλώνουν και ο καθρέφτης τη γυρίζει σωστά.',
                en:
                  'A guide turns a handle, and the mirror on the roof slowly swings round, showing ' +
                  'the castle, the street, the hills, the sea. The most fun trick: if you hold a ' +
                  'piece of paper under the image of a person walking, you seem to lift them up ' +
                  'in your hand. Scientists knew this effect two thousand years ago: a small hole ' +
                  'in a dark room throws the image of the outside world onto the opposite wall, ' +
                  'upside down. Here the lenses make it bigger and the mirror turns it the right ' +
                  'way up.',
              },
              question: {
                q: { el: 'Τι γίνεται αν βάλεις χαρτί κάτω από την εικόνα ενός ανθρώπου;', en: 'What happens if you hold paper under the image of a person?' },
                answers: [
                  { el: 'Μοιάζει να τον σηκώνεις στο χέρι σου', en: 'You seem to lift them in your hand' },
                  { el: 'Εξαφανίζεται', en: 'They vanish' },
                  { el: 'Το χαρτί καίγεται', en: 'The paper catches fire' },
                  {
                    el: 'Ο άνθρωπος έξω στον δρόμο σταματάει και κοιτάζει προς τα πάνω',
                    en: 'The person outside in the street stops and looks up towards you',
                  },
                ],
                explanation: {
                  el: 'Η εικόνα πέφτει πάνω στο χαρτί, οπότε ο άνθρωπος «περπατάει» πάνω στην παλάμη σου.',
                  en: 'The image lands on the paper, so the person "walks" on your palm.',
                },
              },
            },
            {
              id: 'edinburgh-camera-rooftop',
              name: { el: 'Η ταράτσα', en: 'The rooftop' },
              blurb: {
                el:
                  'Έξω από το σκοτεινό δωμάτιο, μια ταράτσα κοιτάζει προς όλες τις πλευρές. Από ' +
                  'εδώ βλέπεις με τα ίδια σου τα μάτια ό,τι είδες πριν πάνω στο τραπέζι: το ' +
                  'κάστρο στα δεξιά, τη στέγη του καθεδρικού με το στέμμα της, τους λόφους, ' +
                  'και μακριά τη θάλασσα. Υπάρχουν τηλεσκόπια που μπορείς να χρησιμοποιήσεις ' +
                  'δωρεάν. Το κτίριο λεγόταν κάποτε «Πύργος της Θέας», και ένας καθηγητής, ο ' +
                  'Πάτρικ Γκέντες, το είχε κάνει τον 19ο αιώνα ένα μουσείο για το πώς ζουν οι ' +
                  'πόλεις. Πίστευε ότι για να καταλάβεις μια πόλη, πρέπει πρώτα να τη δεις από ' +
                  'ψηλά.',
                en:
                  'Outside the dark room, a rooftop looks out on every side. From here you see ' +
                  'with your own eyes what you saw on the table before: the castle to the right, ' +
                  'the cathedral roof with its crown, the hills, and far off the sea. There are ' +
                  'telescopes you can use for free. The building was once called the "Outlook ' +
                  'Tower", and a professor, Patrick Geddes, made it in the 19th century into a ' +
                  'museum about how cities live. He believed that to understand a city, you first ' +
                  'have to see it from above.',
              },
              question: {
                q: { el: 'Τι πίστευε ο Πάτρικ Γκέντες για τις πόλεις;', en: 'What did Patrick Geddes believe about cities?' },
                answers: [
                  { el: 'Πρέπει πρώτα να τις δεις από ψηλά', en: 'You must first see them from above' },
                  { el: 'Είναι θορυβώδεις', en: 'They are noisy' },
                  { el: 'Πρέπει να έχουν κάστρο', en: 'They must have a castle' },
                  {
                    el: 'Ότι κάθε πόλη πρέπει να έχει το δικό της σκοτεινό δωμάτιο με τραπέζι',
                    en: 'That every city should have its own dark room with a table in it',
                  },
                ],
                explanation: {
                  el: 'Γι’ αυτό έκανε το κτίριο μουσείο για τις πόλεις, με τη θέα στην κορυφή.',
                  en: 'That is why he made the building a museum of cities, with the view on top.',
                },
              },
            },
            {
              id: 'edinburgh-camera-holograms',
              name: { el: 'Τα ολογράμματα', en: 'The holograms' },
              blurb: {
                el:
                  'Έναν όροφο πιο κάτω, σε σκοτεινούς διαδρόμους, κρέμονται εικόνες που ' +
                  'μοιάζουν να βγαίνουν από το πλαίσιό τους: ένα χέρι που απλώνεται προς εσένα, ' +
                  'ένα κεφάλι που γυρίζει καθώς περπατάς, ένα λουλούδι που μπορείς να δεις από ' +
                  'πίσω. Είναι ολογράμματα, φωτογραφίες με βάθος, φτιαγμένες με λέιζερ. Μια ' +
                  'κανονική φωτογραφία κρατάει μόνο το χρώμα του φωτός. Το ολόγραμμα κρατάει και ' +
                  'από πού ήρθε το φως, κι έτσι το μάτι σου βλέπει τρεις διαστάσεις. Κούνησε το ' +
                  'κεφάλι σου δεξιά και αριστερά και δες πώς αλλάζει η εικόνα.',
                en:
                  'One floor down, in dark corridors, hang pictures that seem to come out of their ' +
                  'frames: a hand reaching towards you, a head that turns as you walk, a flower ' +
                  'you can see from behind. They are holograms, photographs with depth, made with ' +
                  'lasers. An ordinary photograph keeps only the colour of the light. A hologram ' +
                  'also keeps where the light came from, so your eye sees three dimensions. Move ' +
                  'your head left and right and watch the picture change.',
              },
              question: {
                q: { el: 'Τι κρατάει ένα ολόγραμμα που δεν κρατάει μια φωτογραφία;', en: 'What does a hologram keep that a photograph does not?' },
                answers: [
                  { el: 'Από πού ήρθε το φως', en: 'Where the light came from' },
                  { el: 'Το χρώμα', en: 'The colour' },
                  { el: 'Τον ήχο', en: 'The sound' },
                  {
                    el: 'Τη μυρωδιά του πράγματος που φωτογραφήθηκε',
                    en: 'The smell of the thing that was photographed',
                  },
                ],
                explanation: {
                  el: 'Γι’ αυτό το μάτι σου βλέπει βάθος, και η εικόνα αλλάζει όταν κουνιέσαι.',
                  en: 'That is why your eye sees depth, and the picture changes as you move.',
                },
              },
            },
          ],
        },
        {
          id: 'edinburgh-camera-illusions',
          emoji: '🌀',
          name: { el: 'Ο κόσμος των οφθαλμαπατών', en: 'The world of illusions' },
          intro: {
            el:
              'Οι κάτω όροφοι είναι γεμάτοι παιχνίδια με τα μάτια και με τον εγκέφαλό σου. Ο ' +
              'εγκέφαλος μαντεύει συνέχεια τι βλέπει, και όταν του δώσεις λάθος στοιχεία, ' +
              'μαντεύει λάθος. Εδώ μπορείς να αγγίξεις τα πάντα, να μπεις μέσα, να τραβήξεις ' +
              'φωτογραφίες.',
            en:
              'The lower floors are full of games with your eyes and your brain. The brain is ' +
              'always guessing what it sees, and when you give it the wrong clues, it guesses ' +
              'wrong. Here you can touch everything, go inside, take photographs.',
          },
          exhibits: [
            {
              id: 'edinburgh-camera-vortex',
              name: { el: 'Το τούνελ που γυρίζει', en: 'The spinning tunnel' },
              blurb: {
                el:
                  'Μια γέφυρα περνάει μέσα από έναν κύλινδρο γεμάτο φώτα που γυρίζει γύρω γύρω. ' +
                  'Η γέφυρα δεν κουνιέται καθόλου, κι όμως, μόλις μπεις, νιώθεις ότι γέρνεις και ' +
                  'πιάνεσαι από τα κάγκελα. Αυτό συμβαίνει γιατί το μάτι σου βλέπει ότι όλα γύρω ' +
                  'σου γυρίζουν, και ο εγκέφαλος αποφασίζει ότι εσύ πέφτεις, παρόλο που τα πόδια ' +
                  'σου λένε το αντίθετο. Το ίδιο κόλπο κάνει τους ανθρώπους να ζαλίζονται σε ' +
                  'κινηματογράφους με τεράστιες οθόνες. Αν κλείσεις τα μάτια, η ζάλη σταματάει ' +
                  'αμέσως.',
                en:
                  'A bridge passes through a cylinder full of lights that spins round and round. ' +
                  'The bridge does not move at all, and yet, as soon as you step in, you feel ' +
                  'yourself tilting and grab the rails. This happens because your eye sees ' +
                  'everything around you spinning, and your brain decides that you are falling, ' +
                  'even though your feet say otherwise. The same trick makes people dizzy in ' +
                  'cinemas with huge screens. If you close your eyes, the dizziness stops at once.',
              },
              question: {
                q: { el: 'Τι κινείται στ’ αλήθεια μέσα στο τούνελ;', en: 'What really moves inside the tunnel?' },
                answers: [
                  { el: 'Μόνο ο κύλινδρος με τα φώτα', en: 'Only the cylinder with the lights' },
                  { el: 'Η γέφυρα', en: 'The bridge' },
                  { el: 'Εσύ και το πάτωμα', en: 'You and the floor' },
                  {
                    el: 'Τίποτα, όλα είναι μια ζωγραφιά στον τοίχο που αλλάζει χρώματα',
                    en: 'Nothing, it is all a painting on the wall that changes colours',
                  },
                ],
                explanation: {
                  el: 'Το μάτι βλέπει κίνηση, ο εγκέφαλος νομίζει ότι πέφτεις. Κλείσε τα μάτια και περνάει.',
                  en: 'The eye sees motion, the brain thinks you are falling. Close your eyes and it passes.',
                },
              },
            },
            {
              id: 'edinburgh-camera-ames',
              name: { el: 'Το δωμάτιο που σε μεγαλώνει', en: 'The room that makes you grow' },
              blurb: {
                el:
                  'Δύο παιδιά στέκονται στις δύο γωνίες ενός δωματίου. Το ένα μοιάζει γίγαντας, ' +
                  'το άλλο νάνος. Αν αλλάξουν γωνίες, αλλάζουν και μεγέθη. Το δωμάτιο έχει ένα ' +
                  'μυστικό: δεν είναι ορθογώνιο. Η μία γωνία είναι πολύ πιο μακριά από την ' +
                  'άλλη, και το πάτωμα, οι τοίχοι και τα παράθυρα είναι λοξά, φτιαγμένα έτσι ώστε ' +
                  'από ένα συγκεκριμένο σημείο, εκεί που στέκεσαι για να κοιτάξεις, να μοιάζει ' +
                  'κανονικό. Ο εγκέφαλος πιστεύει ότι το δωμάτιο είναι ίσιο, οπότε ο άνθρωπος στη ' +
                  'μακρινή γωνία πρέπει να είναι μικρός. Το επινόησε ένας Αμερικανός γιατρός, ο ' +
                  'Έιμς, το 1946.',
                en:
                  'Two children stand in the two corners of a room. One looks like a giant, the ' +
                  'other like a dwarf. If they swap corners, they swap sizes. The room has a ' +
                  'secret: it is not rectangular. One corner is much further away than the other, ' +
                  'and the floor, walls and windows are slanted, built so that from one particular ' +
                  'spot, where you stand to look, it seems normal. The brain believes the room is ' +
                  'straight, so the person in the far corner must be small. It was invented by an ' +
                  'American doctor, Ames, in 1946.',
              },
              question: {
                q: { el: 'Ποιο είναι το μυστικό αυτού του δωματίου;', en: 'What is the secret of this room?' },
                answers: [
                  { el: 'Δεν είναι ορθογώνιο, είναι λοξό', en: 'It is not rectangular, it is slanted' },
                  { el: 'Καθρέφτες', en: 'Mirrors' },
                  { el: 'Το πάτωμα ανεβαίνει', en: 'The floor rises up' },
                  {
                    el: 'Τα παιδιά φοράνε παπούτσια με πολύ ψηλές κρυφές σόλες',
                    en: 'The children wear shoes with very tall hidden soles',
                  },
                ],
                explanation: {
                  el: 'Η μία γωνία είναι πολύ πιο μακριά. Ο εγκέφαλος νομίζει ότι είναι ίσιο και μπερδεύεται.',
                  en: 'One corner is much further away. The brain thinks it is straight and gets confused.',
                },
              },
            },
            {
              id: 'edinburgh-camera-mirror-maze',
              name: { el: 'Ο λαβύρινθος με τους καθρέφτες', en: 'The mirror maze' },
              blurb: {
                el:
                  'Ένας διάδρομος από καθρέφτες που στρίβει, χωρίζεται και ενώνεται, με ' +
                  'χρωματιστά φώτα που αλλάζουν. Βλέπεις δέκα φορές τον εαυτό σου, βλέπεις ' +
                  'ανοίγματα που είναι γυαλί και γυαλιά που είναι ανοίγματα. Σχεδόν όλοι ' +
                  'χτυπάνε ελαφρά τη μύτη τους τουλάχιστον μία φορά, γι’ αυτό σου δίνουν να ' +
                  'κρατάς τα χέρια μπροστά. Το κόλπο για να βγεις είναι το ίδιο με κάθε ' +
                  'λαβύρινθο: ακολούθησε τον έναν τοίχο με το χέρι σου, χωρίς να το σηκώσεις. ' +
                  'Οι καθρέφτες είναι τοποθετημένοι σε γωνίες που κάνουν τον χώρο να μοιάζει ' +
                  'δέκα φορές μεγαλύτερος από ό,τι είναι.',
                en:
                  'A corridor of mirrors that turns, splits and joins, with coloured lights that ' +
                  'change. You see yourself ten times over, you see openings that are glass and ' +
                  'glass that is an opening. Almost everyone bumps their nose gently at least ' +
                  'once, which is why they tell you to hold your hands out in front. The trick to ' +
                  'getting out is the same as in any maze: follow one wall with your hand, ' +
                  'without lifting it. The mirrors are set at angles that make the space look ten ' +
                  'times bigger than it is.',
              },
              question: {
                q: { el: 'Γιατί σου λένε να κρατάς τα χέρια μπροστά;', en: 'Why do they tell you to hold your hands out in front?' },
                answers: [
                  { el: 'Για να μη χτυπήσεις τη μύτη σου', en: 'So you do not bump your nose' },
                  { el: 'Για ισορροπία', en: 'For balance' },
                  { el: 'Για να φαίνεσαι στους καθρέφτες', en: 'To show up in the mirrors' },
                  {
                    el: 'Γιατί οι καθρέφτες ανοίγουν μόνο όταν τους αγγίξεις με τα δύο χέρια',
                    en: 'Because the mirrors only open when you touch them with both hands',
                  },
                ],
                explanation: {
                  el: 'Ανοίγματα που είναι γυαλί: σχεδόν όλοι χτυπάνε τη μύτη τους μία φορά.',
                  en: 'Openings that are glass: almost everyone bumps their nose once.',
                },
              },
            },
          ],
        },
      ],
      riddles: [
        {
          id: 'edinburgh-camera-riddle-1',
          difficulty: 1,
          prompt: {
            el:
              'Γυρίζω γύρω γύρω, αλλά η γέφυρα μέσα μου δεν κουνιέται. Κι όμως, μόλις μπεις, ' +
              'πιάνεσαι από τα κάγκελα. Κλείσε τα μάτια και θα με νικήσεις.',
            en:
              'I spin round and round, but the bridge inside me does not move. And yet, as soon ' +
              'as you step in, you grab the rails. Close your eyes and you will beat me.',
          },
          hint: { el: 'Είμαι γεμάτο φώτα.', en: 'I am full of lights.' },
          answerExhibitId: 'edinburgh-camera-vortex',
        },
        {
          id: 'edinburgh-camera-riddle-2',
          difficulty: 2,
          prompt: {
            el:
              'Είμαι στρογγυλό και άσπρο, και πάνω μου περπατάει όλη η πόλη την ίδια στιγμή. ' +
              'Βάλε ένα χαρτί από κάτω και θα σηκώσεις έναν άνθρωπο στο χέρι σου.',
            en:
              'I am round and white, and the whole city walks across me at this very moment. ' +
              'Hold a piece of paper beneath me and you will lift a person in your hand.',
          },
          hint: { el: 'Είμαι στο σκοτεινό δωμάτιο.', en: 'I am in the dark room.' },
          answerExhibitId: 'edinburgh-camera-table',
        },
        {
          id: 'edinburgh-camera-riddle-3',
          difficulty: 3,
          prompt: {
            el:
              'Σε μια γωνιά μου γίνεσαι γίγαντας, στην άλλη νάνος. Το μυστικό μου είναι ότι ' +
              'κανένας τοίχος μου δεν είναι ίσιος, και ένας γιατρός με σκέφτηκε.',
            en:
              'In one of my corners you become a giant, in the other a dwarf. My secret is that ' +
              'none of my walls is straight, and a doctor thought me up.',
          },
          hint: { el: 'Είμαι ένα δωμάτιο.', en: 'I am a room.' },
          answerExhibitId: 'edinburgh-camera-ames',
        },
      ],
    },
  },

  // ------------------------------------------------------------------- st giles
  {
    id: 'edinburgh-st-giles',
    cityId: 'edinburgh',
    emoji: '👑',
    category: 'history',
    difficulty: 2,

    name: { el: 'Ο Καθεδρικός του Αγίου Αιγιδίου', en: 'St Giles’ Cathedral' },
    tagline: {
      el: 'Μια εκκλησία με στέμμα αντί για κωδωνοστάσιο',
      en: 'A church with a crown instead of a steeple',
    },
    story: {
      el:
        'Στη μέση του μεγάλου δρόμου της παλιάς πόλης, που κατεβαίνει από το κάστρο ως το ' +
        'παλάτι, στέκεται μια σκουρόχρωμη εκκλησία με μια πολύ ασυνήθιστη κορυφή. Αντί για ' +
        'μυτερό κωδωνοστάσιο, ο πύργος της τελειώνει σε ένα πέτρινο στέμμα: οκτώ καμάρες που ' +
        'ενώνονται ψηλά σαν το στέμμα ενός βασιλιά. Το βλέπεις από παντού και είναι από τα ' +
        'σύμβολα της πόλης. Η εκκλησία είναι εννιακοσίων χρόνων, αλλά ξαναχτίστηκε πολλές ' +
        'φορές. Μέσα υπάρχει ένα μικρό παρεκκλήσι από το 1911, σκαλισμένο από πάνω ως κάτω με ' +
        'ξύλο και πέτρα, τόσο πυκνά που μοιάζει με δάσος. Ψηλά, ανάμεσα στα σκαλίσματα, ' +
        'κρύβεται ένας άγγελος που παίζει γκάιντα, το πιο σκωτσέζικο μουσικό όργανο. Στην ' +
        'πλατεία έξω, στο πλακόστρωτο, υπάρχει μια καρδιά από πέτρες σε σχήμα μωσαϊκού. Οι ' +
        'κάτοικοι έχουν την παράξενη συνήθεια να φτύνουν πάνω της για καλή τύχη, από τότε ' +
        'που εκεί ήταν η πόρτα μιας παλιάς φυλακής.',
      en:
        'In the middle of the great street of the old town, which runs down from the castle to ' +
        'the palace, stands a dark church with a very unusual top. Instead of a pointed ' +
        'steeple, its tower ends in a stone crown: eight arches meeting high up like the crown ' +
        'of a king. You can see it from everywhere and it is one of the city’s symbols. The ' +
        'church is nine hundred years old, but it has been rebuilt many times. Inside there is ' +
        'a small chapel from 1911, carved from top to bottom in wood and stone, so densely ' +
        'that it looks like a forest. High up among the carvings hides an angel playing the ' +
        'bagpipes, the most Scottish instrument of all. In the square outside, set into the ' +
        'paving, there is a heart made of stones like a mosaic. Locals have the odd habit of ' +
        'spitting on it for good luck, ever since the door of an old prison stood there.',
    },
    facts: [
      {
        el: 'Ο πύργος της τελειώνει σε ένα πέτρινο στέμμα από οκτώ καμάρες.',
        en: 'Its tower ends in a stone crown of eight arches.',
      },
      {
        el: 'Στο παρεκκλήσι της κρύβεται ένας άγγελος που παίζει γκάιντα.',
        en: 'An angel playing bagpipes hides in its chapel.',
      },
      {
        el: 'Έξω, στο πλακόστρωτο, υπάρχει μια πέτρινη καρδιά.',
        en: 'Outside, in the paving, there is a heart of stones.',
      },
    ],
    location: {
      lat: 55.94944,
      lng: -3.19083,
      anchor: 'centroid',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q1547466', deltaM: 0 },
        { kind: 'osm', ref: 'way/42407060', deltaM: 4 },
        { kind: 'wikipedia', ref: 'St Giles\' Cathedral', deltaM: 1 },
      ],
      verifiedAt: '2026-09-19',
      map: { x: 0.371, y: 0.663 },
    },
    question: {
      q: { el: 'Τι έχει ο πύργος της εκκλησίας αντί για κωδωνοστάσιο;', en: 'What does the church tower have instead of a steeple?' },
      answers: [
        { el: 'Ένα πέτρινο στέμμα', en: 'A stone crown' },
        { el: 'Ρολόι', en: 'A clock' },
        { el: 'Έναν χρυσό άγγελο', en: 'A golden angel' },
        {
          el: 'Ένα καπέλο από χαλκό που γυρίζει με τον άνεμο σαν ανεμοδείκτης',
          en: 'A copper hat that turns with the wind like a weathervane',
        },
      ],
      explanation: {
        el: 'Οκτώ καμάρες ενώνονται ψηλά σαν στέμμα βασιλιά. Φαίνεται από όλη την πόλη.',
        en: 'Eight arches meet high up like a king’s crown. It can be seen from all over the city.',
      },
    },
  },

  // ----------------------------------------------------------- mary kings close
  {
    id: 'edinburgh-mary-kings-close',
    cityId: 'edinburgh',
    emoji: '🕯️',
    category: 'history',
    difficulty: 2,

    name: { el: 'Το Στενό της Μαίρης Κινγκ', en: 'Mary King’s Close' },
    tagline: {
      el: 'Δρόμοι του 17ου αιώνα θαμμένοι κάτω από το δημαρχείο',
      en: '17th-century streets buried under the city hall',
    },
    story: {
      el:
        'Η παλιά πόλη του Εδιμβούργου είναι χτισμένη σε μια στενή ράχη, και από τον κεντρικό ' +
        'της δρόμο κατεβαίνουν στα πλάγια δεκάδες πολύ στενά σοκάκια, που εδώ τα λένε ' +
        '«κλόουζ». Πριν από τετρακόσια χρόνια η πόλη ήταν τόσο γεμάτη που τα σπίτια έφταναν ' +
        'τους δέκα και δώδεκα ορόφους, από τους ψηλότερους στον κόσμο τότε, και οι πλούσιοι ' +
        'και οι φτωχοί ζούσαν στο ίδιο κτίριο, οι πλούσιοι στη μέση και οι φτωχοί πολύ ψηλά ή ' +
        'πολύ χαμηλά. Το 1753 η πόλη αποφάσισε να χτίσει ένα μεγάλο δημόσιο κτίριο, και αντί ' +
        'να γκρεμίσει τα σοκάκια από κάτω, έκοψε τους πάνω ορόφους τους και έχτισε πάνω τους. ' +
        'Έτσι ένα ολόκληρο κομμάτι της παλιάς πόλης έμεινε θαμμένο, με τους δρόμους, τα ' +
        'δωμάτια και τους τοίχους του. Σήμερα κατεβαίνεις με έναν οδηγό ντυμένο όπως τότε και ' +
        'περπατάς σε έναν δρόμο του 17ου αιώνα, στο σκοτάδι, κάτω από το σημερινό δημαρχείο. ' +
        'Το όνομά του το πήρε από μια γυναίκα που είχε μαγαζί εδώ, τη Μαίρη Κινγκ.',
      en:
        'Edinburgh’s old town is built on a narrow ridge, and from its main street dozens of ' +
        'very narrow alleys run down the sides, called "closes" here. Four hundred years ago ' +
        'the city was so crowded that the houses reached ten and twelve storeys, among the ' +
        'tallest in the world then, and the rich and the poor lived in the same building, the ' +
        'rich in the middle and the poor very high up or very low down. In 1753 the city ' +
        'decided to build a big public building, and instead of knocking down the alleys ' +
        'beneath it, it cut off their upper floors and built on top of them. So a whole piece ' +
        'of the old town stayed buried, with its streets, rooms and walls. Today you go down ' +
        'with a guide dressed as people were then and walk along a 17th-century street, in the ' +
        'dark, beneath today’s city hall. It takes its name from a woman who had a shop here, ' +
        'Mary King.',
    },
    facts: [
      {
        el: 'Τα «κλόουζ» είναι τα στενά σοκάκια της παλιάς πόλης.',
        en: '"Closes" are the narrow alleys of the old town.',
      },
      {
        el: 'Το 1753 χτίστηκε από πάνω ένα δημόσιο κτίριο και οι δρόμοι θάφτηκαν.',
        en: 'In 1753 a public building was built on top and the streets were buried.',
      },
      {
        el: 'Τα σπίτια εδώ έφταναν κάποτε τους δώδεκα ορόφους.',
        en: 'The houses here once reached twelve storeys.',
      },
    ],
    location: {
      lat: 55.95011,
      lng: -3.19069,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q1084992', deltaM: 0 },
        { kind: 'osm', ref: 'way/1126727983', deltaM: 16 },
        { kind: 'wikipedia', ref: 'Mary King\'s Close', deltaM: 32 },
      ],
      verifiedAt: '2026-09-19',
      map: { x: 0.374, y: 0.639 },
    },
    question: {
      q: { el: 'Γιατί οι δρόμοι είναι κάτω από τη γη;', en: 'Why are the streets underground?' },
      answers: [
        { el: 'Χτίστηκε ένα κτίριο πάνω τους', en: 'A building was built on top of them' },
        { el: 'Σεισμός', en: 'An earthquake' },
        { el: 'Βούλιαξαν στη λάσπη', en: 'They sank into the mud' },
        {
          el: 'Οι κάτοικοι τους έσκαψαν για να κρύβονται από τους Άγγλους',
          en: 'The people dug them to hide from the English',
        },
      ],
      explanation: {
        el: 'Το 1753. Έκοψαν τους πάνω ορόφους και έχτισαν το δημαρχείο πάνω από τα σοκάκια.',
        en: 'In 1753. They cut off the upper floors and built the city hall over the alleys.',
      },
    },
  },

  // ------------------------------------------------------------- writers museum
  {
    id: 'edinburgh-writers-museum',
    cityId: 'edinburgh',
    emoji: '✒️',
    category: 'art',
    difficulty: 2,

    name: { el: 'Το Μουσείο των Συγγραφέων', en: 'The Writers’ Museum' },
    tagline: {
      el: 'Το σπίτι τριών συγγραφέων, με σκαλοπάτια που σε κάνουν να σκοντάφτεις',
      en: 'The house of three writers, with steps made to trip you',
    },
    story: {
      el:
        'Σε μια μικρή αυλή δίπλα στον κεντρικό δρόμο υπάρχει ένα ψηλό πέτρινο σπίτι του ' +
        '1622, με μια στριφτή σκάλα μέσα σε έναν πυργίσκο. Η σκάλα έχει ένα μυστικό: ένα ' +
        'σκαλοπάτι είναι επίτηδες πιο ψηλό από τα άλλα, για να σκοντάφτει όποιος κλέφτης ' +
        'ανέβαινε στο σκοτάδι και να ξυπνάνε οι νοικοκύρηδες. Σήμερα το σπίτι είναι μουσείο ' +
        'για τρεις Σκωτσέζους συγγραφείς. Ο Ρόμπερτ Μπερνς έγραφε ποιήματα στη γλώσσα του λαού, ' +
        'και ένα από αυτά το τραγουδάει όλος ο κόσμος κάθε Πρωτοχρονιά. Ο Γουόλτερ Σκοτ έγραψε ' +
        'ιστορίες για ιππότες και κάστρα. Και ο Ρόμπερτ Λούις Στίβενσον, που γεννήθηκε σε ' +
        'αυτή την πόλη, έγραψε το «Νησί των Θησαυρών», με πειρατές, έναν χάρτη και ένα ' +
        'παπαγάλο. Θα δεις το γραφείο του Μπερνς, την πίπα του Στίβενσον, το ξύλινο αλογάκι ' +
        'που είχε ως παιδί και το πιεστήριο που τύπωσε τα βιβλία του Σκοτ. Στην αυλή έξω, στις ' +
        'πλάκες, είναι χαραγμένες φράσεις Σκωτσέζων συγγραφέων.',
      en:
        'In a small courtyard beside the main street there is a tall stone house from 1622, ' +
        'with a twisting staircase inside a little tower. The staircase has a secret: one step ' +
        'is deliberately taller than the others, so that any thief climbing in the dark would ' +
        'trip and wake the household. Today the house is a museum for three Scottish writers. ' +
        'Robert Burns wrote poems in the language of ordinary people, and one of them is sung ' +
        'by the whole world every New Year’s Eve. Walter Scott wrote stories about knights and ' +
        'castles. And Robert Louis Stevenson, who was born in this city, wrote "Treasure ' +
        'Island", with pirates, a map and a parrot. You will see Burns’s desk, Stevenson’s ' +
        'pipe, the wooden rocking horse he had as a child and the press that printed Scott’s ' +
        'books. In the courtyard outside, sayings by Scottish writers are carved into the ' +
        'paving stones.',
    },
    facts: [
      {
        el: 'Το σπίτι είναι του 1622 και έχει ένα σκαλοπάτι πιο ψηλό επίτηδες.',
        en: 'The house is from 1622 and has one step deliberately taller.',
      },
      {
        el: 'Ο Στίβενσον, που έγραψε το «Νησί των Θησαυρών», γεννήθηκε στο Εδιμβούργο.',
        en: 'Stevenson, who wrote "Treasure Island", was born in Edinburgh.',
      },
      {
        el: 'Στις πλάκες της αυλής είναι χαραγμένες φράσεις συγγραφέων.',
        en: 'Writers’ sayings are carved into the courtyard paving.',
      },
    ],
    location: {
      lat: 55.9497,
      lng: -3.1937,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q8038444', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Writers\' Museum', deltaM: 0 },
      ],
      verifiedAt: '2026-09-19',
      map: { x: 0.321, y: 0.654 },
    },
    question: {
      q: { el: 'Γιατί ένα σκαλοπάτι είναι πιο ψηλό από τα άλλα;', en: 'Why is one step taller than the others?' },
      answers: [
        { el: 'Για να σκοντάφτουν οι κλέφτες', en: 'So that thieves would trip' },
        { el: 'Λάθος', en: 'A mistake' },
        { el: 'Για να κάθονται', en: 'For people to sit on' },
        {
          el: 'Γιατί οι χτίστες τελείωσαν τις πέτρες και έβαλαν μια μεγαλύτερη',
          en: 'Because the builders ran out of stones and used a bigger one',
        },
      ],
      explanation: {
        el: 'Στο σκοτάδι ο κλέφτης σκόνταφτε και οι νοικοκύρηδες ξυπνούσαν.',
        en: 'In the dark the thief would trip and the household would wake.',
      },
    },
  },

  // ------------------------------------------------------------ national museum
  {
    id: 'edinburgh-national-museum',
    cityId: 'edinburgh',
    emoji: '🐑',
    category: 'museum',
    difficulty: 1,

    name: { el: 'Εθνικό Μουσείο της Σκωτίας', en: 'National Museum of Scotland' },
    tagline: {
      el: 'Ένα πρόβατο-αντίγραφο, ένα ρολόι-πύργος και δεινόσαυροι, όλα δωρεάν',
      en: 'A cloned sheep, a tower clock and dinosaurs, all free',
    },
    story: {
      el:
        'Αυτό το μουσείο είναι στην πραγματικότητα δύο κτίρια ενωμένα: ένα παλιό του 1866 με ' +
        'μια τεράστια φωτεινή αίθουσα από σίδερο και γυαλί, σαν γυάλινο παλάτι, και ένα ' +
        'καινούργιο από χρυσαφένια πέτρα, με έναν στρογγυλό πύργο, που άνοιξε το 1998. Μέσα ' +
        'έχει τα πάντα: την ιστορία της Σκωτίας από τους πρώτους ανθρώπους, ζώα από όλο τον ' +
        'κόσμο, μηχανές, διαστημικές στολές, ρούχα, μουσικά όργανα, ένα σκελετό ' +
        'τυραννόσαυρου. Το πιο διάσημο έκθεμα είναι ένα πρόβατο, η Ντόλι. Το 1996 επιστήμονες ' +
        'κοντά στο Εδιμβούργο κατάφεραν να φτιάξουν από ένα κύτταρο ενός προβάτου ένα ' +
        'δεύτερο, ολόιδιο πρόβατο, το πρώτο ζώο-αντίγραφο στον κόσμο. Η Ντόλι έζησε έξι ' +
        'χρόνια, έκανε αρνάκια, και τώρα στέκεται εδώ σε μια γυάλινη βιτρίνα και γυρίζει αργά. ' +
        'Η είσοδος είναι δωρεάν, και από την ταράτσα βλέπεις το κάστρο. Μπορείς να περάσεις ' +
        'εδώ μια ολόκληρη βροχερή μέρα, και στο Εδιμβούργο υπάρχουν πολλές.',
      en:
        'This museum is really two buildings joined together: an old one from 1866 with a ' +
        'huge bright hall of iron and glass, like a glass palace, and a new one of golden ' +
        'stone, with a round tower, which opened in 1998. Inside it has everything: the ' +
        'history of Scotland from the first people, animals from all over the world, ' +
        'machines, space suits, clothes, musical instruments, a Tyrannosaurus skeleton. The ' +
        'most famous exhibit is a sheep, Dolly. In 1996 scientists near Edinburgh managed to ' +
        'make, from a single cell of one sheep, a second, identical sheep, the first cloned ' +
        'animal in the world. Dolly lived six years, had lambs, and now stands here in a glass ' +
        'case, turning slowly. Entry is free, and from the roof terrace you can see the ' +
        'castle. You can spend a whole rainy day here, and Edinburgh has plenty of those.',
    },
    facts: [
      {
        el: 'Είναι δύο κτίρια, ένα του 1866 και ένα του 1998.',
        en: 'It is two buildings, one from 1866 and one from 1998.',
      },
      {
        el: 'Η Ντόλι ήταν το πρώτο ζώο-αντίγραφο στον κόσμο, το 1996.',
        en: 'Dolly was the first cloned animal in the world, in 1996.',
      },
      {
        el: 'Η είσοδος είναι δωρεάν.',
        en: 'Entry is free.',
      },
    ],
    location: {
      lat: 55.94694,
      lng: -3.19,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q1633842', deltaM: 0 },
        { kind: 'osm', ref: 'way/467226683', deltaM: 32 },
        { kind: 'wikipedia', ref: 'National Museum of Scotland', deltaM: 0 },
      ],
      verifiedAt: '2026-09-19',
      map: { x: 0.386, y: 0.752 },
    },
    question: {
      q: { el: 'Ποια ήταν η Ντόλι;', en: 'Who was Dolly?' },
      answers: [
        { el: 'Το πρώτο ζώο-αντίγραφο', en: 'The first cloned animal' },
        { el: 'Μια βασίλισσα', en: 'A queen' },
        { el: 'Μια διάσημη κούκλα', en: 'A famous doll' },
        {
          el: 'Το πρόβατο που έδωσε το μαλλί για τη στολή του πρώτου αστροναύτη',
          en: 'The sheep that gave the wool for the first astronaut’s suit',
        },
      ],
      explanation: {
        el: 'Από ένα κύτταρο ενός προβάτου έφτιαξαν ένα δεύτερο, ολόιδιο. Στέκεται εδώ σε βιτρίνα.',
        en: 'From one cell of a sheep they made a second, identical one. She stands here in a case.',
      },
    },

    museum: {
      doorNote: {
        el: 'Μπες από τη μεγάλη γυάλινη αίθουσα και ψάξε πρώτα το ρολόι που είναι ψηλό σαν σπίτι.',
        en: 'Come in through the big glass hall and look first for the clock as tall as a house.',
      },
      rooms: [
        {
          id: 'edinburgh-museum-grand-gallery',
          emoji: '🏛️',
          name: { el: 'Η Μεγάλη Αίθουσα', en: 'The Grand Gallery' },
          intro: {
            el:
              'Η παλιά αίθουσα του 1866 είναι ένα δάσος από λεπτές σιδερένιες κολόνες κάτω από ' +
              'γυάλινη οροφή, με μπαλκόνια σε τρεις ορόφους. Τότε ήταν από τα πιο μοντέρνα ' +
              'κτίρια της Ευρώπης. Εδώ στέκονται τα πιο μεγάλα και πιο παράξενα αντικείμενα ' +
              'του μουσείου.',
            en:
              'The old hall from 1866 is a forest of slender iron columns under a glass roof, ' +
              'with balconies on three floors. At the time it was one of the most modern ' +
              'buildings in Europe. The museum’s biggest and strangest objects stand here.',
          },
          exhibits: [
            {
              id: 'edinburgh-museum-millennium-clock',
              name: { el: 'Το Ρολόι της Χιλιετίας', en: 'The Millennium Clock' },
              blurb: {
                el:
                  'Ένας πύργος δέκα μέτρων από ξύλο, μέταλλο και γυαλί, γεμάτος φιγούρες: ' +
                  'πίθηκοι, άγγελοι, ένας γίγαντας, μια γυναίκα που τραβάει έναν άντρα, ρόδες ' +
                  'και αλυσίδες. Είναι ένα ρολόι, φτιαγμένο το 1999 για την αλλαγή της ' +
                  'χιλιετίας. Σε ορισμένες ώρες ζωντανεύει: ακούγεται μουσική, οι φιγούρες ' +
                  'κινούνται, τα φώτα ανάβουν, και όλο το μουσείο μαζεύεται γύρω του. Λέει, με ' +
                  'μηχανές αντί για λόγια, την ιστορία του 20ού αιώνα, με τα καλά και τα κακά ' +
                  'του. Οι τεχνίτες που το έφτιαξαν ήρθαν από τη Σκωτία, τη Γερμανία και τη Ρωσία.',
                en:
                  'A ten-metre tower of wood, metal and glass, full of figures: monkeys, angels, a ' +
                  'giant, a woman pulling a man, wheels and chains. It is a clock, made in 1999 ' +
                  'for the turn of the millennium. At certain hours it comes alive: music plays, ' +
                  'the figures move, lights come on, and the whole museum gathers round it. It ' +
                  'tells, with machines instead of words, the story of the 20th century, with its ' +
                  'good and its bad. The craftsmen who made it came from Scotland, Germany and ' +
                  'Russia.',
              },
              question: {
                q: { el: 'Τι γίνεται όταν το ρολόι ζωντανεύει;', en: 'What happens when the clock comes alive?' },
                answers: [
                  { el: 'Μουσική, κίνηση και φώτα', en: 'Music, movement and lights' },
                  { el: 'Χτυπάει', en: 'It chimes' },
                  { el: 'Ανοίγει μια πόρτα', en: 'A door opens' },
                  {
                    el: 'Οι φιγούρες κατεβαίνουν από τον πύργο και περπατάνε στην αίθουσα',
                    en: 'The figures climb down from the tower and walk around the hall',
                  },
                ],
                explanation: {
                  el: 'Οι φιγούρες κινούνται στη θέση τους και όλο το μουσείο μαζεύεται γύρω.',
                  en: 'The figures move in place and the whole museum gathers round.',
                },
              },
            },
            {
              id: 'edinburgh-museum-trex',
              name: { el: 'Ο τυραννόσαυρος', en: 'The Tyrannosaurus' },
              blurb: {
                el:
                  'Ένας σκελετός τυραννόσαυρου, δώδεκα μέτρα μακρύς, στέκεται με το κεφάλι ' +
                  'χαμηλά, σαν να κυνηγάει. Είναι αντίγραφο ενός αληθινού σκελετού που βρέθηκε ' +
                  'στην Αμερική, όπου ζούσε αυτός ο δεινόσαυρος πριν από εξήντα έξι εκατομμύρια ' +
                  'χρόνια. Τα δόντια του είναι μακριά σαν μπανάνες. Πρόσεξε τα μπροστινά του ' +
                  'πόδια: είναι τόσο μικρά που δεν έφταναν ούτε το στόμα του, και οι επιστήμονες ' +
                  'ακόμα διαφωνούν σε τι χρησίμευαν. Στη Σκωτία δεν βρέθηκε ποτέ τυραννόσαυρος, ' +
                  'αλλά στο νησί Σκάι έχουν βρεθεί πατημασιές άλλων δεινοσαύρων.',
                en:
                  'A Tyrannosaurus skeleton, twelve metres long, stands with its head low, as if ' +
                  'hunting. It is a cast of a real skeleton found in America, where this dinosaur ' +
                  'lived sixty-six million years ago. Its teeth are as long as bananas. Notice its ' +
                  'front legs: they are so short they could not even reach its mouth, and ' +
                  'scientists still argue about what they were for. No Tyrannosaurus was ever ' +
                  'found in Scotland, but on the island of Skye footprints of other dinosaurs ' +
                  'have been found.',
              },
              question: {
                q: { el: 'Τι είναι παράξενο με τα μπροστινά πόδια του τυραννόσαυρου;', en: 'What is odd about the Tyrannosaurus’s front legs?' },
                answers: [
                  { el: 'Είναι πολύ μικρά', en: 'They are surprisingly short' },
                  { el: 'Λείπουν', en: 'They are missing' },
                  { el: 'Έχουν φτερά', en: 'They have wings' },
                  {
                    el: 'Είναι πιο μακριά από τα πίσω, γι’ αυτό περπατούσε με τα τέσσερα',
                    en: 'They are longer than the back ones, so it walked on all fours',
                  },
                ],
                explanation: {
                  el: 'Δεν έφταναν ούτε το στόμα του. Οι επιστήμονες ακόμα διαφωνούν σε τι χρησίμευαν.',
                  en: 'They could not even reach its mouth. Scientists still argue about their use.',
                },
              },
            },
            {
              id: 'edinburgh-museum-lighthouse-lens',
              name: { el: 'Ο φακός του φάρου', en: 'The lighthouse lens' },
              blurb: {
                el:
                  'Ένας τεράστιος φακός από γυαλί, ψηλότερος από άνθρωπο, φτιαγμένος από ' +
                  'δακτυλίους γυαλιού σε κύκλους, σαν μια γιγάντια κυψέλη. Ήταν το μάτι ενός ' +
                  'φάρου στις ακτές της Σκωτίας. Στη μέση καιγόταν μια λάμπα, και οι δακτύλιοι ' +
                  'μάζευαν το φως της και το έστελναν σε μια ίσια δέσμη, που έφτανε δεκάδες ' +
                  'χιλιόμετρα στη θάλασσα. Η οικογένεια του συγγραφέα Στίβενσον έχτισε πολλούς ' +
                  'από τους φάρους της Σκωτίας: ο πατέρας, ο παππούς και οι θείοι του ήταν ' +
                  'μηχανικοί φάρων. Εκείνος όμως προτίμησε να γράφει βιβλία.',
                en:
                  'A huge glass lens, taller than a person, made of rings of glass in circles, like ' +
                  'a giant beehive. It was the eye of a lighthouse on the Scottish coast. In the ' +
                  'middle a lamp burned, and the rings gathered its light and sent it out in a ' +
                  'straight beam that reached tens of kilometres out to sea. The family of the ' +
                  'writer Stevenson built many of Scotland’s lighthouses: his father, grandfather ' +
                  'and uncles were lighthouse engineers. He, though, preferred to write books.',
              },
              question: {
                q: { el: 'Τι έκαναν οι δακτύλιοι από γυαλί;', en: 'What did the rings of glass do?' },
                answers: [
                  { el: 'Μάζευαν το φως σε μια ίσια δέσμη', en: 'They gathered the light into a beam' },
                  { el: 'Στόλιζαν', en: 'Decorated' },
                  { el: 'Κρατούσαν τη λάμπα', en: 'They held the lamp up' },
                  {
                    el: 'Μεγάλωναν τα πλοία για να τα βλέπει ο φαροφύλακας από μακριά',
                    en: 'They magnified the ships so the keeper could see them from afar',
                  },
                ],
                explanation: {
                  el: 'Η δέσμη έφτανε δεκάδες χιλιόμετρα στη θάλασσα. Η οικογένεια Στίβενσον έχτιζε φάρους.',
                  en: 'The beam reached tens of kilometres out to sea. The Stevensons built lighthouses.',
                },
              },
            },
          ],
        },
        {
          id: 'edinburgh-museum-scotland',
          emoji: '🏴',
          name: { el: 'Η ιστορία της Σκωτίας', en: 'The story of Scotland' },
          intro: {
            el:
              'Στο νέο κτίριο, όροφο με όροφο, ανεβαίνεις μέσα από την ιστορία της Σκωτίας: ' +
              'από τις πέτρες των πρώτων ανθρώπων ως τα εργαστήρια των σημερινών επιστημόνων. ' +
              'Εδώ θα βρεις τη Ντόλι, πιόνια σκακιού από κόκαλο θαλάσσιου ζώου και μια ' +
              'μηχανή που άλλαξε τον κόσμο.',
            en:
              'In the new building, floor by floor, you climb through the story of Scotland: ' +
              'from the stones of the first people to the labs of today’s scientists. Here you ' +
              'will find Dolly, chess pieces made of sea-animal tusk and a machine that changed ' +
              'the world.',
          },
          exhibits: [
            {
              id: 'edinburgh-museum-dolly',
              name: { el: 'Η Ντόλι', en: 'Dolly the sheep' },
              blurb: {
                el:
                  'Ένα άσπρο πρόβατο στέκεται σε μια γυάλινη βιτρίνα που γυρίζει αργά, για να τη ' +
                  'δεις από όλες τις πλευρές. Η Ντόλι γεννήθηκε το 1996 σε ένα ινστιτούτο λίγα ' +
                  'χιλιόμετρα από εδώ. Δεν είχε πατέρα. Οι επιστήμονες πήραν ένα κύτταρο από τον ' +
                  'μαστό ενός προβάτου, το έβαλαν σε ένα αυγό άλλου προβάτου, και γεννήθηκε ' +
                  'ένα αρνί ολόιδιο με το πρώτο: ένας κλώνος. Ήταν η πρώτη φορά που γινόταν αυτό ' +
                  'με θηλαστικό, και όλος ο κόσμος μίλησε γι’ αυτήν. Η Ντόλι έζησε κανονική ζωή ' +
                  'προβάτου, γέννησε έξι αρνάκια, και μετά τον θάνατό της την ταρίχευσαν για ' +
                  'να μείνει εδώ.',
                en:
                  'A white sheep stands in a glass case that turns slowly, so you can see her ' +
                  'from every side. Dolly was born in 1996 at an institute a few kilometres from ' +
                  'here. She had no father. Scientists took a cell from the udder of one sheep, ' +
                  'put it into an egg from another sheep, and a lamb was born identical to the ' +
                  'first: a clone. It was the first time this had been done with a mammal, and ' +
                  'the whole world talked about her. Dolly lived a normal sheep’s life, had six ' +
                  'lambs, and after her death she was preserved so that she could stay here.',
              },
              question: {
                q: { el: 'Από τι γεννήθηκε η Ντόλι;', en: 'What was Dolly made from?' },
                answers: [
                  { el: 'Από ένα κύτταρο άλλου προβάτου', en: 'From a cell of another sheep' },
                  { el: 'Από αυγό', en: 'From an egg' },
                  { el: 'Από δύο πρόβατα', en: 'From two parent sheep' },
                  {
                    el: 'Από ένα κομμάτι μαλλί που βρήκαν οι επιστήμονες σε ένα χωράφι',
                    en: 'From a tuft of wool that scientists found in a field',
                  },
                ],
                explanation: {
                  el: 'Ένα κύτταρο μέσα σε ένα αυγό: ένα αρνί ολόιδιο με το πρώτο πρόβατο, χωρίς πατέρα.',
                  en: 'One cell inside an egg: a lamb identical to the first sheep, with no father.',
                },
              },
            },
            {
              id: 'edinburgh-museum-chessmen',
              name: { el: 'Τα πιόνια του Λιούις', en: 'The Lewis chessmen' },
              blurb: {
                el:
                  'Μικρά πιόνια σκακιού από κόκαλο θαλάσσιου ίππου, με πρόσωπα που μοιάζουν ' +
                  'ανήσυχα ή θυμωμένα: ένας βασιλιάς με το σπαθί στα γόνατα, μια βασίλισσα που ' +
                  'ακουμπάει το μάγουλό της απορημένη, ένας πολεμιστής που δαγκώνει την ασπίδα ' +
                  'του. Σκαλίστηκαν πριν από οκτακόσια χρόνια, μάλλον στη Νορβηγία, και βρέθηκαν ' +
                  'το 1831 θαμμένα στην άμμο ενός νησιού της Σκωτίας, του Λιούις. Ο θρύλος λέει ' +
                  'ότι τα βρήκε μια αγελάδα σκάβοντας με τη μουσούδα της. Ήταν πάνω από ' +
                  'ενενήντα κομμάτια· τα περισσότερα είναι στο Λονδίνο, και έντεκα εδώ.',
                en:
                  'Small chess pieces made of walrus tusk, with faces that look worried or ' +
                  'grumpy: a king with his sword across his knees, a queen resting her cheek on ' +
                  'her hand in puzzlement, a warrior biting his shield. They were carved eight ' +
                  'hundred years ago, probably in Norway, and were found in 1831 buried in the ' +
                  'sand of a Scottish island, Lewis. Legend says a cow found them digging with ' +
                  'its nose. There were more than ninety pieces; most are in London, and eleven ' +
                  'are here.',
              },
              question: {
                q: { el: 'Από τι είναι φτιαγμένα αυτά τα πιόνια;', en: 'What are these chess pieces made of?' },
                answers: [
                  { el: 'Από κόκαλο θαλάσσιου ίππου', en: 'From walrus tusk' },
                  { el: 'Ξύλο', en: 'Wood' },
                  { el: 'Από άσπρη πέτρα', en: 'From white stone' },
                  {
                    el: 'Από κόκαλα μιας φάλαινας που είχε ξεβραστεί στο νησί',
                    en: 'From the bones of a whale that had washed up on the island',
                  },
                ],
                explanation: {
                  el: 'Σκαλίστηκαν πριν από οκτακόσια χρόνια και βρέθηκαν στην άμμο ενός νησιού.',
                  en: 'They were carved eight hundred years ago and found in the sand of an island.',
                },
              },
            },
            {
              id: 'edinburgh-museum-steam-engine',
              name: { el: 'Η ατμομηχανή', en: 'The steam engine' },
              blurb: {
                el:
                  'Μια μεγάλη μηχανή από σίδερο, με μια τεράστια ρόδα και έναν βραχίονα που ' +
                  'ανεβοκατεβαίνει. Είναι ατμομηχανή: το νερό ζεσταίνεται σε έναν λέβητα, γίνεται ' +
                  'ατμός, και ο ατμός σπρώχνει ένα έμβολο, που γυρίζει τη ρόδα. Ένας Σκωτσέζος, ' +
                  'ο Τζέιμς Βατ, βελτίωσε τόσο πολύ αυτές τις μηχανές τον 18ο αιώνα που έγιναν η ' +
                  'δύναμη πίσω από τα εργοστάσια, τα τρένα και τα πλοία, και άλλαξαν τον τρόπο ' +
                  'που ζούσε όλος ο κόσμος. Η μονάδα με την οποία μετράμε σήμερα την ισχύ, το ' +
                  '«βατ», έχει το όνομά του. Το μουσείο βάζει μερικές μηχανές του σε κίνηση.',
                en:
                  'A big iron machine, with a huge wheel and an arm that rises and falls. It is a ' +
                  'steam engine: water is heated in a boiler, turns to steam, and the steam pushes ' +
                  'a piston, which turns the wheel. A Scotsman, James Watt, improved these engines ' +
                  'so much in the 18th century that they became the power behind factories, ' +
                  'trains and ships, and changed the way the whole world lived. The unit we use ' +
                  'today to measure power, the "watt", is named after him. The museum sets some ' +
                  'of its engines in motion.',
              },
              question: {
                q: { el: 'Τι σπρώχνει τη ρόδα σε μια ατμομηχανή;', en: 'What pushes the wheel in a steam engine?' },
                answers: [
                  { el: 'Ο ατμός από ζεστό νερό', en: 'Steam from heated water' },
                  { el: 'Ρεύμα', en: 'Electricity' },
                  { el: 'Ένας άνθρωπος', en: 'A person' },
                  {
                    el: 'Ο άνεμος, που μπαίνει από έναν σωλήνα στην κορυφή της μηχανής',
                    en: 'The wind, which comes in through a pipe at the top of the engine',
                  },
                ],
                explanation: {
                  el: 'Ο ατμός σπρώχνει ένα έμβολο, το έμβολο γυρίζει τη ρόδα. Ο Τζέιμς Βατ την τελειοποίησε.',
                  en: 'Steam pushes a piston, the piston turns the wheel. James Watt perfected it.',
                },
              },
            },
          ],
        },
      ],
      riddles: [
        {
          id: 'edinburgh-museum-riddle-1',
          difficulty: 1,
          prompt: {
            el:
              'Δεν είχα πατέρα, και είμαι ολόιδια με τη μητέρα μου. Όλος ο κόσμος μίλησε για ' +
              'μένα, κι ας ήμουν απλώς ένα πρόβατο. Τώρα γυρίζω αργά σε μια βιτρίνα.',
            en:
              'I had no father, and I am identical to my mother. The whole world talked about ' +
              'me, though I was only a sheep. Now I turn slowly in a glass case.',
          },
          hint: { el: 'Γεννήθηκα το 1996.', en: 'I was born in 1996.' },
          answerExhibitId: 'edinburgh-museum-dolly',
        },
        {
          id: 'edinburgh-museum-riddle-2',
          difficulty: 2,
          prompt: {
            el:
              'Είμαι ψηλό σαν σπίτι και γεμάτο πιθήκους και αγγέλους. Σε ορισμένες ώρες ' +
              'ζωντανεύω με μουσική, και όλο το μουσείο μαζεύεται γύρω μου.',
            en:
              'I am as tall as a house and full of monkeys and angels. At certain hours I come ' +
              'alive with music, and the whole museum gathers round me.',
          },
          hint: { el: 'Λέω την ώρα.', en: 'I tell the time.' },
          answerExhibitId: 'edinburgh-museum-millennium-clock',
        },
        {
          id: 'edinburgh-museum-riddle-3',
          difficulty: 3,
          prompt: {
            el:
              'Μια αγελάδα, λένε, μας βρήκε στην άμμο. Είμαστε φτιαγμένα από δόντι θαλάσσιου ' +
              'ζώου, και ένας από εμάς δαγκώνει την ασπίδα του από αγωνία.',
            en:
              'A cow, they say, found us in the sand. We are made from a sea animal’s tusk, and ' +
              'one of us bites his shield in worry.',
          },
          hint: { el: 'Είμαστε ένα παιχνίδι.', en: 'We are a game.' },
          answerExhibitId: 'edinburgh-museum-chessmen',
        },
      ],
    },
  },

  // ----------------------------------------------------------- greyfriars bobby
  {
    id: 'edinburgh-greyfriars-bobby',
    cityId: 'edinburgh',
    emoji: '🐕',
    category: 'landmark',
    difficulty: 1,

    name: { el: 'Ο Μπόμπι', en: 'Greyfriars Bobby' },
    tagline: {
      el: 'Το άγαλμα ενός σκύλου που δεν έφυγε ποτέ από τον φίλο του',
      en: 'The statue of a dog who never left his friend',
    },
    story: {
      el:
        'Στη γωνία ενός δρόμου, πάνω σε μια πέτρινη βάση, κάθεται ένα μικρό χάλκινο σκυλάκι ' +
        'με μακρύ τρίχωμα. Είναι ο Μπόμπι, ο πιο διάσημος σκύλος της Σκωτίας. Πριν από ' +
        'εκατόν εξήντα χρόνια ο Μπόμπι ανήκε σε έναν άντρα που δούλευε στην πόλη, και τον ' +
        'ακολουθούσε παντού. Όταν ο άντρας πέθανε και θάφτηκε στο νεκροταφείο δίπλα, ο ' +
        'Μπόμπι δεν έφυγε από εκεί. Λέγεται ότι για δεκατέσσερα χρόνια κοιμόταν κάθε νύχτα ' +
        'κοντά στον τάφο, και κάθε μεσημέρι, όταν ακουγόταν το κανόνι της μίας, πήγαινε σε ' +
        'ένα καφενείο όπου του έδιναν φαγητό. Οι κάτοικοι τον αγάπησαν τόσο που ο δήμαρχος ' +
        'πλήρωσε ο ίδιος την άδειά του, για να μην τον πάρουν ως αδέσποτο. Όταν ο Μπόμπι ' +
        'πέθανε το 1872, του έστησαν αυτό το άγαλμα, με μια βρύση από κάτω για τους ' +
        'ανθρώπους και μια χαμηλότερη για τους σκύλους. Οι επισκέπτες τρίβουν τη μύτη του για ' +
        'τύχη, τόσο πολύ που έχει γίνει χρυσή, και η πόλη ζητάει να μην το κάνουμε.',
      en:
        'On a street corner, on a stone base, sits a small bronze dog with long fur. He is ' +
        'Bobby, the most famous dog in Scotland. A hundred and sixty years ago Bobby belonged ' +
        'to a man who worked in the city, and followed him everywhere. When the man died and ' +
        'was buried in the churchyard next door, Bobby would not leave. It is said that for ' +
        'fourteen years he slept every night near the grave, and every day, when the one ' +
        'o’clock gun sounded, he went to a café where he was given food. The people loved him ' +
        'so much that the mayor paid for his licence himself, so he would not be taken away as ' +
        'a stray. When Bobby died in 1872, this statue was put up for him, with a drinking ' +
        'fountain below for people and a lower one for dogs. Visitors rub his nose for luck, so ' +
        'much that it has turned gold, and the city asks us not to.',
    },
    facts: [
      {
        el: 'Ο Μπόμπι έμεινε δεκατέσσερα χρόνια κοντά στον τάφο του φίλου του.',
        en: 'Bobby stayed fourteen years near his friend’s grave.',
      },
      {
        el: 'Ο δήμαρχος πλήρωσε ο ίδιος την άδειά του.',
        en: 'The mayor paid for his licence himself.',
      },
      {
        el: 'Το άγαλμα στήθηκε το 1872 με μια βρύση για σκύλους.',
        en: 'The statue was put up in 1872 with a fountain for dogs.',
      },
    ],
    location: {
      lat: 55.9469,
      lng: -3.19133,
      anchor: 'centroid',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q17570789', deltaM: 0 },
        { kind: 'osm', ref: 'node/258016781', deltaM: 3 },
        { kind: 'wikipedia', ref: 'Greyfriars Bobby Fountain', deltaM: 4 },
      ],
      verifiedAt: '2026-09-19',
      map: { x: 0.363, y: 0.754 },
    },
    question: {
      q: { el: 'Πώς ήξερε ο Μπόμπι πότε είναι ώρα για φαγητό;', en: 'How did Bobby know when it was time to eat?' },
      answers: [
        { el: 'Από το κανόνι της μίας', en: 'From the one o’clock gun' },
        { el: 'Από την πείνα', en: 'From hunger' },
        { el: 'Τον φώναζε ο μάγειρας', en: 'The cook called him' },
        {
          el: 'Ένα άλλο σκυλί ερχόταν από το καφενείο για να τον πάρει',
          en: 'Another dog came over from the café to fetch him',
        },
      ],
      explanation: {
        el: 'Κάθε μεσημέρι, με τη βολή από το κάστρο, πήγαινε στο καφενείο που τον τάιζε.',
        en: 'Every day, at the shot from the castle, he went to the café that fed him.',
      },
    },
  },

  // ---------------------------------------------------------------- grassmarket
  {
    id: 'edinburgh-grassmarket',
    cityId: 'edinburgh',
    emoji: '🐄',
    category: 'landmark',
    difficulty: 2,

    name: { el: 'Το Γκράσμαρκετ', en: 'The Grassmarket' },
    tagline: {
      el: 'Μια πλατεία κάτω από το κάστρο, όπου κάποτε πουλούσαν αγελάδες',
      en: 'A square below the castle, where cows were once sold',
    },
    story: {
      el:
        'Ακριβώς κάτω από τον βράχο του κάστρου, σε μια κοιλάδα ανάμεσα στην παλιά πόλη και ' +
        'τον λόφο, απλώνεται μια μακριά πλατεία. Το όνομά της σημαίνει «αγορά του χόρτου». Από ' +
        'το 1477 και για τετρακόσια χρόνια εδώ γινόταν η αγορά των ζώων: αγρότες έφερναν ' +
        'αγελάδες, άλογα και πρόβατα από τα χωριά και τα πουλούσαν, και οι πανδοχείς γύρω από ' +
        'την πλατεία έδιναν φαγητό και κρεβάτι στους ταξιδιώτες. Πολλά από τα πανδοχεία ' +
        'υπάρχουν ακόμα, με τα παλιά τους ονόματα. Από εδώ έχεις την πιο εντυπωσιακή θέα του ' +
        'κάστρου: ο βράχος υψώνεται κατακόρυφα πάνω από τις στέγες, και καταλαβαίνεις γιατί ' +
        'κανείς δεν μπορούσε να το πάρει από αυτή την πλευρά. Από τη μία γωνία της πλατείας ' +
        'ξεκινάει ένας καμπύλος δρόμος με πολύχρωμες προσόψεις, ο Βικτόρια Στριτ, που λέγεται ' +
        'ότι ενέπνευσε τον μαγικό δρόμο των μαγαζιών σε μια πολύ γνωστή σειρά βιβλίων για ' +
        'έναν νεαρό μάγο.',
      en:
        'Right beneath the castle rock, in a valley between the old town and the hill, lies a ' +
        'long square. Its name means "grass market". From 1477 and for four hundred years the ' +
        'animal market was held here: farmers brought cows, horses and sheep in from the ' +
        'villages and sold them, and the inns around the square gave travellers food and a ' +
        'bed. Many of the inns are still there, with their old names. From here you have the ' +
        'most dramatic view of the castle: the rock rises straight up above the rooftops, and ' +
        'you understand why nobody could take it from this side. From one corner of the ' +
        'square a curved street with colourful shopfronts, Victoria Street, leads up, which is ' +
        'said to have inspired the magical shopping street in a very well-known series of books ' +
        'about a young wizard.',
    },
    facts: [
      {
        el: 'Το όνομά του σημαίνει «αγορά του χόρτου».',
        en: 'Its name means "grass market".',
      },
      {
        el: 'Από το 1477 εδώ πουλούσαν αγελάδες, άλογα και πρόβατα.',
        en: 'From 1477 cows, horses and sheep were sold here.',
      },
      {
        el: 'Ο βράχος του κάστρου υψώνεται κατακόρυφα από πάνω του.',
        en: 'The castle rock rises straight up above it.',
      },
    ],
    location: {
      lat: 55.9475,
      lng: -3.19611,
      anchor: 'area',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q1543570', deltaM: 0 },
        { kind: 'osm', ref: 'way/2956313', deltaM: 20 },
        { kind: 'wikipedia', ref: 'Grassmarket', deltaM: 0 },
      ],
      verifiedAt: '2026-09-19',
      map: { x: 0.279, y: 0.732 },
    },
    question: {
      q: { el: 'Τι πουλούσαν εδώ για τετρακόσια χρόνια;', en: 'What was sold here for four hundred years?' },
      answers: [
        { el: 'Αγελάδες, άλογα και πρόβατα', en: 'Cows, horses and sheep' },
        { el: 'Χόρτο', en: 'Grass' },
        { el: 'Ψάρια από το λιμάνι', en: 'Fish from the harbour' },
        {
          el: 'Μαγικά ραβδιά και βιβλία με ξόρκια για τους μαθητευόμενους μάγους',
          en: 'Magic wands and spell books for the apprentice wizards',
        },
      ],
      explanation: {
        el: 'Ήταν η αγορά των ζώων της πόλης, και τα πανδοχεία γύρω της φιλοξενούσαν τους αγρότες.',
        en: 'It was the city’s animal market, and the inns around it put up the farmers.',
      },
    },
  },

  // --------------------------------------------------------- museum of childhood
  {
    id: 'edinburgh-museum-of-childhood',
    cityId: 'edinburgh',
    emoji: '🪀',
    category: 'art',
    difficulty: 1,

    name: { el: 'Μουσείο της Παιδικής Ηλικίας', en: 'Museum of Childhood' },
    tagline: {
      el: 'Το πρώτο μουσείο στον κόσμο για το πώς ήταν να είσαι παιδί',
      en: 'The world’s first museum about being a child',
    },
    story: {
      el:
        'Στον κεντρικό δρόμο της παλιάς πόλης, ανάμεσα σε μαγαζιά με φούστες καρό, υπάρχει ' +
        'ένα μουσείο που άνοιξε το 1955 και ήταν το πρώτο στον κόσμο αφιερωμένο στην παιδική ' +
        'ηλικία. Δεν είναι μόνο μουσείο παιχνιδιών, παρόλο που έχει χιλιάδες: κούκλες, ' +
        'αρκουδάκια, τρένα, στρατιωτάκια, κουκλόσπιτα, ποδήλατα. Δείχνει και πώς ζούσαν τα ' +
        'παιδιά σε άλλες εποχές: πώς ήταν το σχολείο τους, τι φορούσαν, τι έτρωγαν, τι ' +
        'δουλειές έκαναν, γιατί πριν από εκατόν πενήντα χρόνια πολλά παιδιά δούλευαν αντί να ' +
        'πηγαίνουν σχολείο. Υπάρχουν παλιές σχολικές αίθουσες, ένα βίντεο με παιδιά της ' +
        'πόλης να παίζουν στους δρόμους τη δεκαετία του 1950, και παιχνίδια που μπορείς να ' +
        'πιάσεις. Οι παππούδες συχνά δείχνουν στα εγγόνια τους «αυτό το είχα κι εγώ». Η ' +
        'είσοδος είναι δωρεάν, και μπορείς να μείνεις όση ώρα θέλεις.',
      en:
        'On the main street of the old town, between shops selling tartan skirts, there is a ' +
        'museum that opened in 1955 and was the first in the world devoted to childhood. It is ' +
        'not only a toy museum, though it has thousands of toys: dolls, teddy bears, trains, ' +
        'soldiers, dolls’ houses, bicycles. It also shows how children lived in other times: ' +
        'what their school was like, what they wore, what they ate, what jobs they did, because ' +
        'a hundred and fifty years ago many children worked instead of going to school. There ' +
        'are old classrooms, a film of the city’s children playing in the streets in the 1950s, ' +
        'and toys you can pick up. Grandparents often point and tell their grandchildren "I had ' +
        'one of those". Entry is free.',
    },
    facts: [
      {
        el: 'Άνοιξε το 1955, το πρώτο τέτοιο μουσείο στον κόσμο.',
        en: 'It opened in 1955, the first museum of its kind in the world.',
      },
      {
        el: 'Δείχνει πώς ζούσαν, μάθαιναν και δούλευαν τα παιδιά παλιά.',
        en: 'It shows how children lived, learned and worked in the past.',
      },
      {
        el: 'Η είσοδος είναι δωρεάν.',
        en: 'Entry is free.',
      },
    ],
    location: {
      lat: 55.95039,
      lng: -3.18558,
      anchor: 'centroid',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q15122172', deltaM: 0 },
        { kind: 'osm', ref: 'node/2955931322', deltaM: 8 },
        { kind: 'wikipedia', ref: 'Museum of Childhood (Edinburgh)', deltaM: 2 },
      ],
      verifiedAt: '2026-09-19',
      map: { x: 0.464, y: 0.629 },
    },
    question: {
      q: { el: 'Τι δείχνει το μουσείο εκτός από παιχνίδια;', en: 'What does the museum show besides toys?' },
      answers: [
        { el: 'Πώς ζούσαν τα παιδιά άλλων εποχών', en: 'How children of other times lived' },
        { el: 'Ζώα', en: 'Animals' },
        { el: 'Πίνακες ζωγραφικής', en: 'Paintings of children' },
        {
          el: 'Τα παιχνίδια που θα υπάρχουν στο μέλλον, σε εκατό χρόνια από τώρα',
          en: 'The toys that will exist in the future, a hundred years from now',
        },
      ],
      explanation: {
        el: 'Σχολείο, ρούχα, φαγητό, δουλειά. Πριν από 150 χρόνια πολλά παιδιά δούλευαν.',
        en: 'School, clothes, food, work. 150 years ago many children worked.',
      },
    },
  },

  // ------------------------------------------------------------------- holyrood
  {
    id: 'edinburgh-holyrood',
    cityId: 'edinburgh',
    emoji: '🦌',
    category: 'history',
    difficulty: 2,

    name: { el: 'Το Παλάτι του Χόλιρουντ', en: 'The Palace of Holyroodhouse' },
    tagline: {
      el: 'Ένα παλάτι που ξεκίνησε από ένα ελάφι και έναν σταυρό',
      en: 'A palace that began with a stag and a cross',
    },
    story: {
      el:
        'Στην κάτω άκρη του μεγάλου δρόμου, απέναντι από το κάστρο, στέκεται το παλάτι όπου ' +
        'μένει ο βασιλιάς όταν έρχεται στη Σκωτία. Ο θρύλος λέει πώς ξεκίνησε. Το 1128 ο ' +
        'βασιλιάς Δαβίδ κυνηγούσε εδώ, στο δάσος, όταν ένα τεράστιο ελάφι του επιτέθηκε. ' +
        'Καθώς άπλωνε τα χέρια να προστατευτεί, βρέθηκε να κρατάει ανάμεσα στα κέρατα του ' +
        'ελαφιού έναν σταυρό, και το ελάφι έφυγε. Για να ευχαριστήσει, ο βασιλιάς έχτισε εδώ ' +
        'ένα μοναστήρι, το «Χόλι Ρουντ», δηλαδή «Άγιος Σταυρός». Δίπλα στο μοναστήρι ' +
        'χτίστηκε αργότερα το παλάτι. Το μοναστήρι είναι σήμερα ένα ερείπιο χωρίς στέγη, ' +
        'όμορφο και λίγο τρομακτικό, δίπλα στους κήπους. Στο παλάτι έζησε η Μαρία, βασίλισσα ' +
        'της Σκωτίας, πριν από τετρακόσια πενήντα χρόνια, και μπορείς να δεις τα δωμάτιά της. ' +
        'Μία εβδομάδα κάθε καλοκαίρι ο βασιλιάς μένει εδώ, και τότε το παλάτι κλείνει για ' +
        'επισκέπτες. Το ελάφι με τον σταυρό είναι ακόμα το σύμβολο της περιοχής.',
      en:
        'At the bottom end of the great street, facing the castle, stands the palace where the ' +
        'king stays when he comes to Scotland. Legend tells how it began. In 1128 King David ' +
        'was hunting here, in the forest, when a huge stag attacked him. As he held out his ' +
        'hands to protect himself, he found he was holding a cross between the stag’s antlers, ' +
        'and the stag fled. To give thanks, the king built an abbey here, the "Holy Rood", ' +
        'which means "Holy Cross". Beside the abbey the palace was built later. The abbey today ' +
        'is a roofless ruin, beautiful and a little spooky, next to the gardens. Mary, Queen of ' +
        'Scots, lived in the palace four hundred and fifty years ago, and you can see her rooms. ' +
        'For one week every summer the king stays here, and then the palace closes to visitors. ' +
        'The stag with the cross is still the symbol of the area.',
    },
    facts: [
      {
        el: '«Χόλι Ρουντ» σημαίνει «Άγιος Σταυρός».',
        en: '"Holy Rood" means "Holy Cross".',
      },
      {
        el: 'Το μοναστήρι ξεκίνησε το 1128 και σήμερα είναι ερείπιο χωρίς στέγη.',
        en: 'The abbey began in 1128 and today is a roofless ruin.',
      },
      {
        el: 'Ο βασιλιάς μένει εδώ μία εβδομάδα κάθε καλοκαίρι.',
        en: 'The king stays here for a week every summer.',
      },
    ],
    location: {
      lat: 55.9527,
      lng: -3.17229,
      anchor: 'centroid',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q505950', deltaM: 0 },
        { kind: 'osm', ref: 'relation/16769442', deltaM: 14 },
        { kind: 'wikipedia', ref: 'Holyrood Palace', deltaM: 26 },
      ],
      verifiedAt: '2026-09-19',
      map: { x: 0.697, y: 0.546 },
    },
    question: {
      q: { el: 'Κατά τον θρύλο, τι βρήκε ο βασιλιάς ανάμεσα στα κέρατα του ελαφιού;', en: 'According to legend, what did the king find between the stag’s antlers?' },
      answers: [
        { el: 'Έναν σταυρό μέσα στα χέρια του', en: 'A cross in his hands' },
        { el: 'Χρυσάφι', en: 'Gold' },
        { el: 'Ένα στέμμα', en: 'A crown' },
        {
          el: 'Ένα γράμμα από τον αδερφό του που τον προειδοποιούσε για κίνδυνο',
          en: 'A letter from his brother warning him of danger',
        },
      ],
      explanation: {
        el: 'Το ελάφι έφυγε, και ο βασιλιάς έχτισε εδώ ένα μοναστήρι για να ευχαριστήσει.',
        en: 'The stag fled, and the king built an abbey here to give thanks.',
      },
    },
  },

  // ----------------------------------------------------------------- parliament
  {
    id: 'edinburgh-parliament',
    cityId: 'edinburgh',
    emoji: '🍃',
    category: 'landmark',
    difficulty: 3,

    name: { el: 'Το Κοινοβούλιο της Σκωτίας', en: 'The Scottish Parliament' },
    tagline: {
      el: 'Ένα κτίριο από ανάποδες βάρκες και φύλλα',
      en: 'A building made of upturned boats and leaves',
    },
    story: {
      el:
        'Απέναντι από το παλάτι στέκεται ένα από τα πιο παράξενα κτίρια της Σκωτίας. Δεν έχει ' +
        'ίσιες γραμμές: οι στέγες του μοιάζουν με ανάποδες βάρκες, τα παράθυρα με κλαδιά, οι ' +
        'πάνω όψεις με μπλεγμένα φύλλα, και μια πλευρά του είναι ένας κήπος από γρασίδι που ' +
        'ανεβαίνει σαν λόφος. Το σχεδίασε ένας Καταλανός αρχιτέκτονας, ο Ενρίκ Μιράγιες, που ' +
        'ήθελε το κτίριο να «βγαίνει από τη γη» σαν φυτό και να μη μοιάζει με παλάτι. Άνοιξε ' +
        'το 2004. Εδώ συνεδριάζει η βουλή της Σκωτίας, που ψηφίζει νόμους για τα σχολεία, τα ' +
        'νοσοκομεία και τους δρόμους της. Η Σκωτία είχε δική της βουλή αιώνες πριν, την έχασε ' +
        'το 1707 όταν ενώθηκε με την Αγγλία, και την ξαναπήρε το 1999, μετά από διακόσια ' +
        'ενενήντα δύο χρόνια. Μπορείς να μπεις μέσα δωρεάν και να δεις τη μεγάλη αίθουσα από ' +
        'ξύλο, με τα καθίσματα σε ημικύκλιο για να βλέπονται όλοι.',
      en:
        'Facing the palace stands one of the strangest buildings in Scotland. It has no ' +
        'straight lines: its roofs look like upturned boats, its windows like branches, its ' +
        'upper walls like tangled leaves, and one side of it is a grass garden rising like a ' +
        'hill. It was designed by a Catalan architect, Enric Miralles, who wanted the building ' +
        'to "grow out of the land" like a plant and not look like a palace. It opened in 2004. ' +
        'The Scottish Parliament meets here, which votes on laws for Scotland’s schools, ' +
        'hospitals and roads. Scotland had its own parliament centuries ago, lost it in 1707 ' +
        'when it joined with England, and got it back in 1999, after two hundred and ninety-two ' +
        'years. You can go in for free and see the great wooden chamber, with its seats in a ' +
        'semicircle so that everyone can see each other.',
    },
    facts: [
      {
        el: 'Το σχεδίασε ο Καταλανός Ενρίκ Μιράγιες και άνοιξε το 2004.',
        en: 'It was designed by the Catalan Enric Miralles and opened in 2004.',
      },
      {
        el: 'Η Σκωτία ξαναπήρε τη βουλή της το 1999, μετά από 292 χρόνια.',
        en: 'Scotland got its parliament back in 1999, after 292 years.',
      },
      {
        el: 'Οι στέγες του μοιάζουν με ανάποδες βάρκες.',
        en: 'Its roofs look like upturned boats.',
      },
    ],
    location: {
      lat: 55.95222,
      lng: -3.17472,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q2746031', deltaM: 0 },
        { kind: 'osm', ref: 'way/938084558', deltaM: 42 },
        { kind: 'wikipedia', ref: 'Scottish Parliament Building', deltaM: 3 },
      ],
      verifiedAt: '2026-09-19',
      map: { x: 0.654, y: 0.564 },
    },
    question: {
      q: { el: 'Πώς ήθελε ο αρχιτέκτονας να μοιάζει το κτίριο;', en: 'What did the architect want the building to look like?' },
      answers: [
        { el: 'Σαν φυτό που βγαίνει από τη γη', en: 'Like a plant growing from the land' },
        { el: 'Σαν κάστρο', en: 'Like a castle' },
        { el: 'Σαν ένα μεγάλο πλοίο', en: 'Like a big ship' },
        {
          el: 'Σαν το παλάτι απέναντι, για να είναι τα δύο κτίρια ολόιδια',
          en: 'Like the palace opposite, so the two buildings would be identical',
        },
      ],
      explanation: {
        el: 'Ανάποδες βάρκες, κλαδιά, φύλλα, και ένας κήπος που ανεβαίνει σαν λόφος. Όχι παλάτι.',
        en: 'Upturned boats, branches, leaves, and a garden rising like a hill. Not a palace.',
      },
    },
  },

  // -------------------------------------------------------------- dynamic earth
  {
    id: 'edinburgh-dynamic-earth',
    cityId: 'edinburgh',
    emoji: '🌍',
    category: 'science',
    difficulty: 1,

    name: { el: 'Η Ζωντανή Γη', en: 'Dynamic Earth' },
    tagline: {
      el: 'Ένα ταξίδι από τη γέννηση του πλανήτη, με σεισμό και παγόβουνο',
      en: 'A journey from the planet’s birth, with an earthquake and an iceberg',
    },
    story: {
      el:
        'Κάτω από μια άσπρη στέγη σαν σκηνή, στα πόδια του μεγάλου λόφου, βρίσκεται ένα ' +
        'μουσείο επιστήμης για τον ίδιο τον πλανήτη. Άνοιξε το 1999 και το επισκέπτεσαι σαν ' +
        'ταξίδι στον χρόνο. Μπαίνεις σε έναν ανελκυστήρα που σε πάει «πίσω» τέσσερα ' +
        'δισεκατομμύρια χρόνια, στη στιγμή που γεννήθηκε η Γη, με φώτα και ήχους. Μετά περνάς ' +
        'από ένα δωμάτιο όπου το πάτωμα τρέμει σαν σε σεισμό, βλέπεις ηφαίστεια να βράζουν, ' +
        'αγγίζεις ένα αληθινό παγόβουνο, περπατάς μέσα σε ένα τροπικό δάσος με βροχή και ' +
        'βροντές, και τελειώνεις σε έναν κινηματογράφο όπου η καρέκλα σου κουνιέται και ' +
        'νιώθεις τον αέρα και τις σταγόνες. Το μουσείο βρίσκεται εδώ για έναν λόγο: ο λόφος ' +
        'από πίσω, ο Άρθουρς Σιτ, είναι ένα σβησμένο ηφαίστειο, και ένας Σκωτσέζος του 18ου ' +
        'αιώνα, ο Τζέιμς Χάτον, κοιτάζοντας τα βράχια του κατάλαβε πρώτος ότι η Γη είναι πολύ ' +
        'πιο παλιά απ’ ό,τι πίστευαν όλοι τότε.',
      en:
        'Under a white roof like a tent, at the foot of the big hill, is a science museum about ' +
        'the planet itself. It opened in 1999 and you visit it like a journey through time. You ' +
        'step into a lift that takes you "back" four billion years, to the moment the Earth was ' +
        'born, with lights and sounds. Then you pass through a room where the floor shakes as ' +
        'in an earthquake, you see volcanoes boiling, you touch a real iceberg, you walk ' +
        'through a rainforest with rain and thunder, and you finish in a cinema where your ' +
        'seat moves and you feel the wind and the spray. The museum is here for a reason: the ' +
        'hill behind it, Arthur’s Seat, is an extinct volcano, and an 18th-century Scot, James ' +
        'Hutton, looking at its rocks, was the first to understand that the Earth is far older ' +
        'than everyone then believed.',
    },
    facts: [
      {
        el: 'Άνοιξε το 1999, κάτω από μια άσπρη στέγη σαν σκηνή.',
        en: 'It opened in 1999, under a white roof like a tent.',
      },
      {
        el: 'Μπορείς να αγγίξεις ένα αληθινό παγόβουνο.',
        en: 'You can touch a real iceberg.',
      },
      {
        el: 'Ο Τζέιμς Χάτον κατάλαβε από τα βράχια εδώ πόσο παλιά είναι η Γη.',
        en: 'James Hutton understood from the rocks here how old the Earth is.',
      },
    ],
    location: {
      lat: 55.9506,
      lng: -3.17437,
      anchor: 'centroid',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q3358350', deltaM: 0 },
        { kind: 'osm', ref: 'way/25946269', deltaM: 8 },
        { kind: 'wikipedia', ref: 'Dynamic Earth (Edinburgh)', deltaM: 2 },
      ],
      verifiedAt: '2026-09-19',
      map: { x: 0.660, y: 0.621 },
    },
    question: {
      q: { el: 'Τι κάνει ο ανελκυστήρας στην αρχή της επίσκεψης;', en: 'What does the lift do at the start of the visit?' },
      answers: [
        { el: 'Σε πάει «πίσω» στη γέννηση της Γης', en: 'It takes you "back" to the Earth’s birth' },
        { el: 'Ανεβαίνει', en: 'It goes up' },
        { el: 'Σε πάει στο ηφαίστειο', en: 'It takes you to the volcano' },
        {
          el: 'Κατεβαίνει τόσο βαθιά που φτάνεις στο κέντρο της Γης και βλέπεις τη λάβα',
          en: 'It goes down so deep that you reach the centre of the Earth and see the lava',
        },
      ],
      explanation: {
        el: 'Τέσσερα δισεκατομμύρια χρόνια, με φώτα και ήχους. Μετά έρχονται σεισμός, πάγος και βροχή.',
        en: 'Four billion years, with lights and sounds. Then come earthquake, ice and rain.',
      },
    },
  },

  // --------------------------------------------------------------- arthurs seat
  {
    id: 'edinburgh-arthurs-seat',
    cityId: 'edinburgh',
    emoji: '🌋',
    category: 'nature',
    difficulty: 2,

    name: { el: 'Το Κάθισμα του Αρθούρου', en: 'Arthur’s Seat' },
    tagline: {
      el: 'Ένα ηφαίστειο στη μέση της πόλης, που ανεβαίνεις με τα πόδια',
      en: 'A volcano in the middle of the city, climbed on foot',
    },
    story: {
      el:
        'Δίπλα στο παλάτι αρχίζει ένα τεράστιο πάρκο χωρίς δέντρα, με λόφους, βράχους, ' +
        'λιμνούλες και μονοπάτια, και στη μέση του υψώνεται ένα βουνό διακοσίων πενήντα ' +
        'μέτρων. Είναι ένα ηφαίστειο, σβησμένο εδώ και τριακόσια πενήντα εκατομμύρια χρόνια, ' +
        'το ίδιο που έφτιαξε και τον βράχο του κάστρου. Κανείς δεν ξέρει σίγουρα γιατί λέγεται ' +
        '«Κάθισμα του Αρθούρου»: ίσως από τον θρυλικό βασιλιά Αρθούρο, ίσως από μια παλιά ' +
        'λέξη για «ύψος». Το ανέβασμα κρατάει περίπου μία ώρα, και δεν είναι δύσκολο, αλλά ' +
        'θέλει καλά παπούτσια γιατί φυσάει πολύ. Από την κορυφή βλέπεις όλο το Εδιμβούργο ' +
        'σαν χάρτη: το κάστρο, τον μεγάλο δρόμο, τη θάλασσα, τα βουνά στον νότο. Δίπλα στο ' +
        'βουνό υπάρχει μια σειρά από κόκκινους κατακόρυφους βράχους, όπου ο Τζέιμς Χάτον ' +
        'διάβασε τα στρώματα της πέτρας σαν σελίδες βιβλίου. Την πρώτη Μαΐου οι κάτοικοι ' +
        'ανεβαίνουν την αυγή για να πλύνουν το πρόσωπό τους με τη δροσιά, για ομορφιά, λέει ' +
        'το έθιμο.',
      en:
        'Beside the palace begins a huge park without trees, with hills, crags, small lochs ' +
        'and paths, and in the middle of it rises a mountain two hundred and fifty metres high. ' +
        'It is a volcano, extinct for three hundred and fifty million years, the same one that ' +
        'made the castle rock. Nobody knows for certain why it is called "Arthur’s Seat": ' +
        'perhaps after the legendary King Arthur, perhaps from an old word for "height". The ' +
        'climb takes about an hour, and it is not hard, but you need good shoes because it is ' +
        'very windy. From the top you see all of Edinburgh like a map: the castle, the great ' +
        'street, the sea, the mountains to the south. Beside the mountain runs a line of red ' +
        'vertical cliffs, where James Hutton read the layers of rock like the pages of a book. ' +
        'On the first of May locals climb up at dawn to wash their faces in the dew, for ' +
        'beauty, so the custom says.',
    },
    facts: [
      {
        el: 'Είναι ηφαίστειο σβησμένο εδώ και 350 εκατομμύρια χρόνια, 250 μέτρα ψηλό.',
        en: 'It is a volcano extinct for 350 million years, 250 metres high.',
      },
      {
        el: 'Το ανέβασμα κρατάει περίπου μία ώρα.',
        en: 'The climb takes about an hour.',
      },
      {
        el: 'Την πρώτη Μαΐου οι κάτοικοι ανεβαίνουν την αυγή να πλύνουν το πρόσωπό τους με δροσιά.',
        en: 'On the first of May locals climb at dawn to wash their faces in the dew.',
      },
    ],
    location: {
      lat: 55.94298,
      lng: -3.16002,
      anchor: 'viewpoint',
      confidence: 'C',
      sources: [{ kind: 'wikidata', ref: 'Q31118012', deltaM: 0 }],
      verifiedAt: '2026-09-19',
      note: 'The summit hillfort, not the mountain item (Q712311), whose centroid is a kilometre wide. Grade C: Wikidata alone carries a point for the summit; neither OpenStreetMap nor Wikipedia matched it.',
      map: { x: 0.912, y: 0.894 },
    },
    question: {
      q: { el: 'Τι είναι αυτό το βουνό στη μέση της πόλης;', en: 'What is this mountain in the middle of the city?' },
      answers: [
        { el: 'Ένα σβησμένο ηφαίστειο', en: 'An extinct volcano' },
        { el: 'Ένας σωρός', en: 'A heap' },
        { el: 'Ένας παλιός λόφος από άμμο', en: 'An old hill of sand' },
        {
          el: 'Ένα βουνό που έχτισαν οι βασιλιάδες για να κάθονται και να βλέπουν την πόλη',
          en: 'A mountain the kings built so they could sit and look at the city',
        },
      ],
      explanation: {
        el: 'Το ίδιο ηφαίστειο έφτιαξε και τον βράχο του κάστρου, πριν από 350 εκατομμύρια χρόνια.',
        en: 'The same volcano made the castle rock, 350 million years ago.',
      },
    },
  },

  // ---------------------------------------------------------------- calton hill
  {
    id: 'edinburgh-calton-hill',
    cityId: 'edinburgh',
    emoji: '🏛️',
    category: 'landmark',
    difficulty: 2,

    name: { el: 'Ο Λόφος Κάλτον', en: 'Calton Hill' },
    tagline: {
      el: 'Ένας μισός Παρθενώνας, γιατί τελείωσαν τα χρήματα',
      en: 'Half a Parthenon, because the money ran out',
    },
    story: {
      el:
        'Στην ανατολική άκρη του κέντρου υψώνεται ένας χαμηλός λόφος με μια παράξενη ' +
        'συλλογή από μνημεία στην κορυφή του. Το πιο εντυπωσιακό είναι μια σειρά από δώδεκα ' +
        'τεράστιες κολόνες που δεν στηρίζουν τίποτα. Το 1826 η πόλη αποφάσισε να χτίσει ένα ' +
        'αντίγραφο του Παρθενώνα της Αθήνας, για να τιμήσει τους Σκωτσέζους που είχαν ' +
        'πεθάνει σε έναν πόλεμο. Το Εδιμβούργο ήθελε να λέγεται «η Αθήνα του Βορρά». Τα ' +
        'χρήματα όμως τελείωσαν, και το κτίριο σταμάτησε στις δώδεκα κολόνες. Έτσι έμεινε ως ' +
        'σήμερα, μισοτελειωμένο, και οι κάτοικοι το είπαν «η ντροπή του Εδιμβούργου». Παρόλα ' +
        'αυτά είναι το πιο φωτογραφημένο σημείο της πόλης. Δίπλα του στέκεται ένας πύργος σε ' +
        'σχήμα ανάποδου τηλεσκοπίου, για έναν ναύαρχο, με μια μεγάλη μπάλα στην κορυφή που ' +
        'πέφτει κάθε μέρα στη μία, μαζί με το κανόνι του κάστρου. Ο λόφος είναι το καλύτερο ' +
        'μέρος για να δεις το ηλιοβασίλεμα πάνω από την πόλη.',
      en:
        'At the eastern edge of the centre rises a low hill with a strange collection of ' +
        'monuments on top. The most striking is a row of twelve enormous columns holding up ' +
        'nothing. In 1826 the city decided to build a copy of the Parthenon of Athens, to ' +
        'honour the Scots who had died in a war. Edinburgh wanted to be called "the Athens of ' +
        'the North". But the money ran out, and the building stopped at twelve columns. So it ' +
        'has stayed to this day, half finished, and locals called it "Edinburgh’s Disgrace". ' +
        'All the same, it is the most photographed spot in the city. Beside it stands a tower ' +
        'shaped like an upturned telescope, for an admiral, with a big ball on top that drops ' +
        'every day at one o’clock, together with the castle gun. The hill is the best place to ' +
        'watch the sunset over the city.',
    },
    facts: [
      {
        el: 'Το μνημείο ξεκίνησε το 1826 ως αντίγραφο του Παρθενώνα.',
        en: 'The monument began in 1826 as a copy of the Parthenon.',
      },
      {
        el: 'Σταμάτησε στις δώδεκα κολόνες γιατί τελείωσαν τα χρήματα.',
        en: 'It stopped at twelve columns because the money ran out.',
      },
      {
        el: 'Το Εδιμβούργο ήθελε να λέγεται «η Αθήνα του Βορρά».',
        en: 'Edinburgh wanted to be called "the Athens of the North".',
      },
    ],
    location: {
      lat: 55.95474,
      lng: -3.18191,
      anchor: 'viewpoint',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q6974379', deltaM: 0 },
        { kind: 'osm', ref: 'way/22412844', deltaM: 9 },
        { kind: 'wikipedia', ref: 'National Monument of Scotland', deltaM: 7 },
      ],
      verifiedAt: '2026-09-19',
      note: 'The National Monument on the hilltop, not the hill (Q1199959). The Nelson Monument is 60 m away and is told here.',
      map: { x: 0.528, y: 0.474 },
    },
    question: {
      q: { el: 'Γιατί το μνημείο έμεινε μισοτελειωμένο;', en: 'Why was the monument left half finished?' },
      answers: [
        { el: 'Τελείωσαν τα χρήματα', en: 'The money ran out' },
        { el: 'Καταιγίδα', en: 'A storm' },
        { el: 'Έτσι το ήθελαν', en: 'They wanted it that way' },
        {
          el: 'Οι Αθηναίοι παραπονέθηκαν ότι τους αντέγραφαν και η πόλη σταμάτησε',
          en: 'The Athenians complained about being copied and the city stopped',
        },
      ],
      explanation: {
        el: 'Δώδεκα κολόνες που δεν στηρίζουν τίποτα, από το 1826. «Η ντροπή του Εδιμβούργου».',
        en: 'Twelve columns holding up nothing, since 1826. "Edinburgh’s Disgrace".',
      },
    },
  },

  // ------------------------------------------------------------- scott monument
  {
    id: 'edinburgh-scott-monument',
    cityId: 'edinburgh',
    emoji: '🚀',
    category: 'landmark',
    difficulty: 2,

    name: { el: 'Το Μνημείο του Σκοτ', en: 'The Scott Monument' },
    tagline: {
      el: 'Ο μεγαλύτερος πύργος του κόσμου για έναν συγγραφέα',
      en: 'The biggest tower in the world for a writer',
    },
    story: {
      el:
        'Στον κεντρικό δρόμο της νέας πόλης υψώνεται ένας μαύρος μυτερός πύργος εξήντα ενός ' +
        'μέτρων, σαν πύραυλος από δαντέλα, γεμάτος καμάρες, πυργάκια και μικρά αγάλματα. Είναι ' +
        'μνημείο για έναν συγγραφέα, τον Γουόλτερ Σκοτ, που έγραψε ιστορίες για ιππότες, ' +
        'κάστρα και ληστές, και έκανε όλη την Ευρώπη να αγαπήσει τη Σκωτία. Όταν πέθανε το ' +
        '1832, οι κάτοικοι μάζεψαν χρήματα και έκαναν διαγωνισμό. Κέρδισε ένας νεαρός ' +
        'ξυλουργός που ήταν αυτοδίδακτος αρχιτέκτονας. Ο πύργος τελείωσε το 1844 και είναι ο ' +
        'μεγαλύτερος στον κόσμο για συγγραφέα. Κάτω από τις καμάρες κάθεται ο Σκοτ από άσπρο ' +
        'μάρμαρο, με τον σκύλο του, τη Μάιντα, δίπλα του. Ο πύργος είναι μαύρος γιατί η ' +
        'πέτρα του ρουφούσε την καπνιά από τις καμινάδες της πόλης, τότε που το Εδιμβούργο ' +
        'ζεσταινόταν με κάρβουνο και το έλεγαν «Παλιά Καπνιά». Μέσα, μια πολύ στενή στριφτή ' +
        'σκάλα με διακόσια ογδόντα επτά σκαλοπάτια ανεβαίνει ως την κορυφή.',
      en:
        'On the main street of the new town rises a black spiky tower sixty-one metres tall, ' +
        'like a rocket made of lace, full of arches, turrets and small statues. It is a ' +
        'monument to a writer, Walter Scott, who wrote stories about knights, castles and ' +
        'outlaws, and made the whole of Europe fall in love with Scotland. When he died in ' +
        '1832, the people collected money and held a competition. It was won by a young joiner ' +
        'who had taught himself architecture. The tower was finished in 1844 and is the largest ' +
        'in the world for a writer. Under the arches sits Scott in white marble, with his dog ' +
        'Maida beside him. The tower is black because its stone soaked up the soot from the ' +
        'city’s chimneys, back when Edinburgh was heated with coal and was nicknamed "Auld ' +
        'Reekie", Old Smoky. Inside, a very narrow spiral staircase of two hundred and ' +
        'eighty-seven steps climbs to the top.',
    },
    facts: [
      {
        el: 'Είναι 61 μέτρα ψηλό, το μεγαλύτερο μνημείο συγγραφέα στον κόσμο.',
        en: 'It is 61 metres tall, the largest monument to a writer in the world.',
      },
      {
        el: 'Τελείωσε το 1844, σχεδιασμένο από έναν αυτοδίδακτο ξυλουργό.',
        en: 'It was finished in 1844, designed by a self-taught joiner.',
      },
      {
        el: 'Έχει 287 σκαλοπάτια ως την κορυφή.',
        en: 'It has 287 steps to the top.',
      },
    ],
    location: {
      lat: 55.95242,
      lng: -3.19328,
      anchor: 'centroid',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q2502213', deltaM: 0 },
        { kind: 'osm', ref: 'way/39044819', deltaM: 7 },
        { kind: 'wikipedia', ref: 'Scott Monument', deltaM: 0 },
      ],
      verifiedAt: '2026-09-19',
      map: { x: 0.328, y: 0.556 },
    },
    question: {
      q: { el: 'Γιατί ο πύργος είναι μαύρος;', en: 'Why is the tower black?' },
      answers: [
        { el: 'Η πέτρα ρούφηξε την καπνιά της πόλης', en: 'The stone soaked up the city’s soot' },
        { el: 'Τον έβαψαν', en: 'It was painted' },
        { el: 'Κάηκε σε μια φωτιά', en: 'It burned in a fire' },
        {
          el: 'Ο συγγραφέας ζήτησε να είναι μαύρος για να ταιριάζει με τα βιβλία του',
          en: 'The writer asked for it to be black to match his books',
        },
      ],
      explanation: {
        el: 'Τότε η πόλη ζεσταινόταν με κάρβουνο και την έλεγαν «Παλιά Καπνιά».',
        en: 'Back then the city was heated with coal and nicknamed "Auld Reekie", Old Smoky.',
      },
    },
  },

  // -------------------------------------------------------------- ross fountain
  {
    id: 'edinburgh-ross-fountain',
    cityId: 'edinburgh',
    emoji: '⛲',
    category: 'nature',
    difficulty: 1,

    name: { el: 'Οι Κήποι της Πρίνσες Στριτ', en: 'Princes Street Gardens' },
    tagline: {
      el: 'Ένας κήπος στη θέση μιας λίμνης, με ένα ρολόι από λουλούδια',
      en: 'A garden where a loch once was, with a clock of flowers',
    },
    story: {
      el:
        'Ανάμεσα στο κάστρο και στον κεντρικό δρόμο της νέας πόλης απλώνεται ένας μακρύς ' +
        'κήπος σε μια κοιλάδα. Για αιώνες αυτή η κοιλάδα ήταν μια λίμνη, βρόμικη και ' +
        'βαλτώδης, όπου η παλιά πόλη πετούσε τα σκουπίδια της. Τον 18ο αιώνα, όταν χτίστηκε ' +
        'η νέα πόλη, τη στράγγιξαν και φύτεψαν κήπους. Σήμερα είναι το πάρκο του κέντρου, με ' +
        'το κάστρο να κρέμεται από πάνω. Στη δυτική άκρη υπάρχει ένα μεγάλο σιντριβάνι από ' +
        'σίδερο, βαμμένο σε χρυσό και τιρκουάζ, με γοργόνες, θεές και ένα κορίτσι στην κορυφή. ' +
        'Φτιάχτηκε στη Γαλλία το 1862 και το αγόρασε ένας κατασκευαστής όπλων της πόλης, ο ' +
        'Ρος, για να το χαρίσει στους κατοίκους. Λίγο πιο πέρα υπάρχει ένα ρολόι που ' +
        'δουλεύει κανονικά, αλλά οι δείκτες του είναι σκεπασμένοι με λουλούδια: κάθε άνοιξη ' +
        'το φυτεύουν ξανά με χιλιάδες φυτά σε νέο σχέδιο. Ήταν το πρώτο τέτοιο ρολόι στον ' +
        'κόσμο, το 1903. Τον χειμώνα οι κήποι γεμίζουν με παγοδρόμιο και χριστουγεννιάτικη ' +
        'αγορά.',
      en:
        'Between the castle and the main street of the new town lies a long garden in a ' +
        'valley. For centuries this valley was a loch, dirty and marshy, where the old town ' +
        'threw its rubbish. In the 18th century, when the new town was built, it was drained ' +
        'and gardens were planted. Today it is the park of the city centre, with the castle ' +
        'hanging above. At the western end there is a big iron fountain, painted gold and ' +
        'turquoise, with mermaids, goddesses and a girl on top. It was made in France in 1862 ' +
        'and bought by a gunmaker of the city, Ross, to give to the people. A little further ' +
        'on there is a clock that works normally, but its hands are covered in flowers: every ' +
        'spring it is replanted with thousands of plants in a new design. It was the first ' +
        'clock of its kind in the world, in 1903. In winter the gardens fill with an ice rink ' +
        'and a Christmas market.',
    },
    facts: [
      {
        el: 'Οι κήποι είναι στη θέση μιας λίμνης που στράγγιξαν τον 18ο αιώνα.',
        en: 'The gardens are where a loch was drained in the 18th century.',
      },
      {
        el: 'Το σιντριβάνι φτιάχτηκε στη Γαλλία το 1862.',
        en: 'The fountain was made in France in 1862.',
      },
      {
        el: 'Το ρολόι από λουλούδια ήταν το πρώτο στον κόσμο, το 1903.',
        en: 'The floral clock was the first in the world, in 1903.',
      },
    ],
    location: {
      lat: 55.9501,
      lng: -3.20307,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q7369346', deltaM: 0 },
        { kind: 'osm', ref: 'way/62066717', deltaM: 5 },
      ],
      verifiedAt: '2026-09-19',
      note: 'The fountain, whose point is 6 m from Princes Street Gardens\' own (Q980646); the gardens are told here.',
      map: { x: 0.157, y: 0.639 },
    },
    question: {
      q: { el: 'Τι υπήρχε εδώ πριν από τους κήπους;', en: 'What was here before the gardens?' },
      answers: [
        { el: 'Μια βρόμικη λίμνη', en: 'A dirty, marshy loch' },
        { el: 'Ένα δάσος', en: 'A forest' },
        { el: 'Ένα παλιό κάστρο', en: 'An old castle' },
        {
          el: 'Ένα γήπεδο όπου οι βασιλιάδες οργάνωναν αγώνες ιππασίας',
          en: 'A field where the kings held jousting tournaments',
        },
      ],
      explanation: {
        el: 'Η παλιά πόλη πετούσε εκεί τα σκουπίδια της. Τη στράγγιξαν όταν χτίστηκε η νέα πόλη.',
        en: 'The old town threw its rubbish there. It was drained when the new town was built.',
      },
    },
  },

  // ------------------------------------------------------------- botanic garden
  {
    id: 'edinburgh-botanic-garden',
    cityId: 'edinburgh',
    emoji: '🌿',
    category: 'nature',
    difficulty: 2,

    name: { el: 'Ο Βασιλικός Βοτανικός Κήπος', en: 'The Royal Botanic Garden' },
    tagline: {
      el: 'Ένας κήπος για φάρμακα που έγινε ένας από τους καλύτερους του κόσμου',
      en: 'A medicine garden that became one of the world’s best',
    },
    story: {
      el:
        'Το 1670 δύο γιατροί του Εδιμβούργου φύτεψαν έναν μικρό κήπο με βότανα, όχι ' +
        'μεγαλύτερο από γήπεδο τένις, για να φτιάχνουν φάρμακα και να μαθαίνουν οι φοιτητές ' +
        'τους να ξεχωρίζουν τα φυτά. Από εκείνον τον μικρό κήπο βγήκε αυτός: ο δεύτερος πιο ' +
        'παλιός βοτανικός κήπος της Βρετανίας, που μετακόμισε εδώ, βόρεια από το κέντρο, το ' +
        '1820, και σήμερα είναι από τους σημαντικότερους του κόσμου. Έχει εβδομήντα στρέμματα ' +
        'με δεκατρείς χιλιάδες είδη φυτών από όλες τις ηπείρους. Υπάρχει ένας βραχόκηπος με ' +
        'φυτά από βουνά, ένα κινέζικο τμήμα με λίμνη και καταρράκτη, τεράστια δέντρα και ' +
        'δέκα θερμοκήπια από γυαλί, με φοίνικες που φτάνουν ως την οροφή, κάκτους, ' +
        'σαρκοφάγα φυτά που τρώνε έντομα και μια δεξαμενή με νούφαρα τόσο μεγάλα που θα ' +
        'κρατούσαν ένα μικρό παιδί. Το πιο ψηλό θερμοκήπιο, με τους φοίνικες, είναι του 1858. ' +
        'Ο κήπος είναι δωρεάν, και οι σκίουροι τρέχουν ανάμεσα στα δέντρα.',
      en:
        'In 1670 two Edinburgh doctors planted a small garden of herbs, no bigger than a ' +
        'tennis court, to make medicines and to teach their students to tell plants apart. ' +
        'From that little garden came this one: the second oldest botanic garden in Britain, ' +
        'which moved here, north of the centre, in 1820, and is today one of the most ' +
        'important in the world. It has seventy acres with thirteen thousand kinds of plant ' +
        'from every continent. There is a rock garden with plants from mountains, a Chinese ' +
        'section with a pond and a waterfall, enormous trees and ten glasshouses, with palms ' +
        'reaching the roof, cactuses, carnivorous plants that eat insects and a pool of water ' +
        'lilies so big they would hold a small child. The tallest glasshouse, with the palms, ' +
        'dates from 1858. The garden is free, and squirrels run among the trees.',
    },
    facts: [
      {
        el: 'Ξεκίνησε το 1670 ως κήπος για φάρμακα.',
        en: 'It began in 1670 as a garden for medicines.',
      },
      {
        el: 'Έχει δεκατρείς χιλιάδες είδη φυτών από όλες τις ηπείρους.',
        en: 'It has thirteen thousand kinds of plant from every continent.',
      },
      {
        el: 'Το θερμοκήπιο με τους φοίνικες είναι του 1858.',
        en: 'The palm glasshouse dates from 1858.',
      },
    ],
    location: {
      lat: 55.96507,
      lng: -3.20853,
      anchor: 'area',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q1807521', deltaM: 0 },
        { kind: 'osm', ref: 'way/5209575', deltaM: 28 },
        { kind: 'wikipedia', ref: 'Royal Botanic Garden Edinburgh', deltaM: 92 },
      ],
      verifiedAt: '2026-09-19',
      map: { x: 0.061, y: 0.105 },
    },
    question: {
      q: { el: 'Γιατί φύτεψαν οι δύο γιατροί τον πρώτο κήπο;', en: 'Why did the two doctors plant the first garden?' },
      answers: [
        { el: 'Για φάρμακα και για τους φοιτητές τους', en: 'For medicines and for their students' },
        { el: 'Για ομορφιά', en: 'For beauty' },
        { el: 'Για να πουλάνε λουλούδια', en: 'To sell flowers' },
        {
          el: 'Για να δώσουν φαγητό στους σκίουρους που ζούσαν στην πόλη',
          en: 'To give food to the squirrels that lived in the city',
        },
      ],
      explanation: {
        el: 'Ένας κήπος βοτάνων όσο ένα γήπεδο τένις, το 1670. Από εκεί βγήκε όλος αυτός ο κήπος.',
        en: 'A herb garden the size of a tennis court, in 1670. This whole garden grew from it.',
      },
    },
  },
];

export const trails: Trail[] = [
  {
    id: 'edinburgh-royal-mile-top',
    cityId: 'edinburgh',
    emoji: '🏰',
    name: { el: 'Από το κάστρο προς τα κάτω', en: 'Down from the castle' },
    promise: {
      el: 'Ένα κάστρο πάνω σε ηφαίστειο, η πόλη ζωντανή πάνω σε ένα τραπέζι, μια εκκλησία με στέμμα, ένα σκαλοπάτι για κλέφτες και δρόμοι θαμμένοι κάτω από τη γη.',
      en: 'A castle on a volcano, the city live on a table, a church with a crown, a step for thieves and streets buried underground.',
    },
    placeIds: [
      'edinburgh-castle',
      'edinburgh-camera-obscura',
      'edinburgh-writers-museum',
      'edinburgh-st-giles',
      'edinburgh-mary-kings-close',
      'edinburgh-museum-of-childhood',
    ],
  },
  {
    id: 'edinburgh-south-side',
    cityId: 'edinburgh',
    emoji: '🐕',
    name: { el: 'Ο σκύλος, τα ζώα και η Ντόλι', en: 'The dog, the animals and Dolly' },
    promise: {
      el: 'Η αγορά των αγελάδων κάτω από τον βράχο, ο πιο πιστός σκύλος της Σκωτίας και ένα μουσείο με πρόβατο-αντίγραφο, όλα δωρεάν.',
      en: 'The cow market beneath the rock, Scotland’s most faithful dog and a museum with a cloned sheep, all free.',
    },
    placeIds: ['edinburgh-grassmarket', 'edinburgh-greyfriars-bobby', 'edinburgh-national-museum'],
  },
  {
    id: 'edinburgh-holyrood',
    cityId: 'edinburgh',
    emoji: '🌋',
    name: { el: 'Το παλάτι και το ηφαίστειο', en: 'The palace and the volcano' },
    promise: {
      el: 'Ένα παλάτι από ένα ελάφι, ένα κοινοβούλιο από ανάποδες βάρκες, ένας σεισμός και ένα παγόβουνο, και ένα βουνό που ανεβαίνεις με τα πόδια.',
      en: 'A palace from a stag, a parliament of upturned boats, an earthquake and an iceberg, and a mountain you climb on foot.',
    },
    placeIds: ['edinburgh-holyrood', 'edinburgh-parliament', 'edinburgh-dynamic-earth', 'edinburgh-arthurs-seat'],
  },
  {
    id: 'edinburgh-new-town',
    cityId: 'edinburgh',
    emoji: '🌿',
    name: { el: 'Η νέα πόλη και οι λόφοι της', en: 'The new town and its hills' },
    promise: {
      el: 'Ένας μισός Παρθενώνας, ένας μαύρος πύργος για έναν συγγραφέα, ένα ρολόι από λουλούδια και φυτά που τρώνε έντομα.',
      en: 'Half a Parthenon, a black tower for a writer, a clock made of flowers and plants that eat insects.',
    },
    placeIds: ['edinburgh-calton-hill', 'edinburgh-scott-monument', 'edinburgh-ross-fountain', 'edinburgh-botanic-garden'],
  },
];
