/**
 * WiseBot World — Heraklion.
 *
 * Twelve places, two of them museums with an interior. Heraklion is the first city in
 * this module that reaches outside its own streets: the palace it exists because of is
 * five kilometres out, its harbour is seven, its mountain fifteen, and the aquarium and
 * the Kazantzakis house further still. That is how a family actually spends a week
 * here, so the map bounds are wide on purpose.
 *
 * Every coordinate is copied from `data/world/coords/heraklion.json`. Nothing graded
 * `D`. Two entries were changed after grading D and the reasons are in
 * `scripts/world/seeds/heraklion.json`: Mount Juktas became its summit, and the
 * Venetian walls were dropped outright because no source could confirm them and no
 * separate item exists for the Martinengo bastion.
 *
 * No place in this city carries an `entrance` anchor, and that is deliberate rather
 * than an oversight. The resolver now grants `'entrance'` only to a seed that supplies
 * a measured door with a source, because a Wikidata P625 is the centre of a building
 * and a centre is not a door. None of these twelve has had its door looked up yet, so
 * every point here is labelled a centroid, which is what it honestly is.
 *
 * One caveat on the confidence letters in this file. OpenStreetMap's Overpass API was
 * rate-limiting throughout the resolver pass, and four consecutive runs produced
 * identical coordinates but different letters, purely on whether it answered. The
 * coordinates are solid; some of the B and C grades are about the weather at an API,
 * not about doubt over where a building is.
 *
 * `el` and `en` are complete. `de`, `fr`, `es` and `it` land in the second pass.
 */

import type { Place, Trail } from '../types';

export const places: Place[] = [
  // --------------------------------------------------------------------- knossos
  {
    id: 'heraklion-knossos',
    cityId: 'heraklion',
    emoji: '🐂',
    category: 'history',
    difficulty: 2,

    name: { el: 'Κνωσός', en: 'Knossos' },
    tagline: {
      el: 'Το ανάκτορο με τους χίλιους χώρους και τους σωλήνες του',
      en: 'The palace with a thousand rooms and its own plumbing',
    },
    story: {
      el:
        'Πριν από περίπου τέσσερις χιλιάδες χρόνια, στον λόφο της Κνωσού υπήρχε ένα ' +
        'κτίριο με πάνω από χίλιους χώρους, ενωμένους με διαδρόμους και σκάλες που ' +
        'πηγαίνουν σε τέσσερα επίπεδα. Δεν ήταν μόνο σπίτι ενός βασιλιά: ήταν αποθήκη, ' +
        'εργαστήριο, γραφείο και ιερό μαζί. Το πιο εντυπωσιακό δεν είναι τα χρώματα αλλά ' +
        'οι σωλήνες. Οι Μινωίτες είχαν πήλινες σωληνώσεις που έφερναν καθαρό νερό και ' +
        'άλλες που έβγαζαν τα βρόμικα, σε μια εποχή που οι περισσότεροι λαοί κουβαλούσαν ' +
        'νερό με στάμνες. Είχαν επίσης «φωταγωγούς», ανοίγματα στην οροφή που φέρνουν φως ' +
        'και αέρα στα μεσαία δωμάτια. Ένας μύθος λέει ότι κάτω από το ανάκτορο υπήρχε ' +
        'λαβύρινθος με ένα τέρας, τον Μινώταυρο. Οι αρχαιολόγοι δεν βρήκαν λαβύρινθο, ' +
        'βρήκαν όμως ένα κτίριο τόσο μπερδεμένο που καταλαβαίνεις αμέσως από πού ξεκίνησε ' +
        'η ιστορία.',
      en:
        'About four thousand years ago, on the hill at Knossos, there was a building with ' +
        'over a thousand rooms, joined by corridors and staircases running through four ' +
        'levels. It was not only a king’s house: it was a warehouse, a workshop, an office ' +
        'and a shrine at once. The most impressive thing about it is not the colours but ' +
        'the pipes. The Minoans had clay plumbing that brought clean water in and other ' +
        'pipes that carried dirty water out, at a time when most peoples were carrying ' +
        'water in jars. They also had light wells, openings in the roof that bring daylight ' +
        'and air down into the middle rooms. A myth says a labyrinth with a monster in it, ' +
        'the Minotaur, lay under the palace. Archaeologists found no labyrinth, but they ' +
        'found a building so confusing that you see at once where the story started.',
    },
    facts: [
      {
        el: 'Είχε πάνω από χίλιους χώρους, σε τέσσερα επίπεδα.',
        en: 'It had over a thousand rooms, on four levels.',
      },
      {
        el: 'Είχε πήλινες σωληνώσεις για καθαρό και για βρόμικο νερό.',
        en: 'It had clay pipes for clean water and separate ones for waste.',
      },
      {
        el: 'Τα κόκκινα τμήματα που βλέπεις είναι αναστηλώσεις του 20ού αιώνα, όχι μινωικά.',
        en: 'The red sections you see are 20th-century restorations, not Minoan.',
      },
    ],
    location: {
      lat: 35.29796,
      lng: 25.16316,
      anchor: 'area',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q173527', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Knossos', deltaM: 14 },
      ],
      verifiedAt: '2026-09-11',
      note: 'The palace, not the modern settlement of the same name 400 m away (Q117884854). OpenStreetMap was rate-limiting on this pass.',
    },
    question: {
      q: {
        el: 'Τι είναι τα κόκκινα, ίσια κομμάτια που βλέπεις σήμερα στην Κνωσό;',
        en: 'What are the red, straight-edged parts you see at Knossos today?',
      },
      answers: [
        {
          el: 'Αναστηλώσεις από τσιμέντο, φτιαγμένες τον 20ό αιώνα',
          en: 'Concrete restorations, built in the 20th century',
        },
        {
          el: 'Μινωικοί τοίχοι που σώθηκαν ολόκληροι',
          en: 'Minoan walls that survived intact',
        },
        {
          el: 'Ρωμαϊκές προσθήκες πάνω στο ανάκτορο',
          en: 'Roman additions built on top of the palace',
        },
        {
          el: 'Κομμάτια από άλλο ανάκτορο, μεταφερμένα εδώ',
          en: 'Pieces of another palace, moved here',
        },
      ],
      explanation: {
        el:
          'Ο αρχαιολόγος που έσκαψε την Κνωσό ξαναέχτισε τμήματα για να καταλαβαίνει ο ' +
          'κόσμος το σχήμα τους. Είναι χρήσιμο και συζητιέται ακόμα.',
        en:
          'The archaeologist who dug Knossos rebuilt parts of it so visitors could read the ' +
          'shape. It is useful, and it is still argued about.',
      },
    },
  },

  // ---------------------------------------------------- archaeological museum
  {
    id: 'heraklion-archaeological-museum',
    cityId: 'heraklion',
    emoji: '🐍',
    category: 'museum',
    difficulty: 2,

    name: { el: 'Αρχαιολογικό Μουσείο Ηρακλείου', en: 'The Heraklion Archaeological Museum' },
    tagline: {
      el: 'Όλα όσα έβγαλαν τα μινωικά ανάκτορα, σε ένα κτίριο',
      en: 'Everything the Minoan palaces gave up, in one building',
    },
    story: {
      el:
        'Αν η Κνωσός είναι το άδειο κτίριο, αυτό το μουσείο είναι τα περιεχόμενά του. ' +
        'Εδώ βρίσκεται σχεδόν ό,τι σημαντικό βγήκε από τα μινωικά ανάκτορα της Κρήτης, ' +
        'και είναι η μεγαλύτερη συλλογή μινωικών ευρημάτων στον κόσμο. Οι τοιχογραφίες ' +
        'της Κνωσού είναι εδώ, όχι στην Κνωσό: εκεί βλέπεις αντίγραφα, ώστε τα πρωτότυπα ' +
        'να μη λιώνουν στον ήλιο. Το μουσείο δείχνει κάτι που ξαφνιάζει: οι Μινωίτες δεν ' +
        'ζωγράφιζαν σχεδόν καθόλου πολέμους. Ζωγράφιζαν δελφίνια, κρίνα, μαϊμούδες, ' +
        'ανθρώπους που πηδάνε πάνω από ταύρους, γυναίκες με περίτεχνα φορέματα. Ζωγράφιζαν ' +
        'δηλαδή ζωή, όχι νίκες. Και υπάρχει ένα αντικείμενο που κανείς δεν έχει διαβάσει ' +
        'ακόμα, παρότι το κοιτάζουν ειδικοί πάνω από εκατό χρόνια. Αν έχεις χρόνο μόνο ' +
        'για ένα μουσείο σε όλη την Κρήτη, οι αρχαιολόγοι θα σου πουν να διαλέξεις αυτό, ' +
        'και μετά να ανέβεις στην Κνωσό για να δεις πού στέκονταν όλα.',
      en:
        'If Knossos is the empty building, this museum is what was inside it. Almost ' +
        'everything important that came out of the Minoan palaces of Crete is here, and it ' +
        'is the largest collection of Minoan finds anywhere. The frescoes of Knossos are ' +
        'here, not at Knossos: up there you see copies, so the originals do not bleach in ' +
        'the sun. The museum shows something surprising: the Minoans painted almost no ' +
        'wars. They painted dolphins, lilies, monkeys, people vaulting over bulls, women in ' +
        'elaborate dresses. They painted life rather than victories. And there is one object ' +
        'here that nobody has managed to read, although specialists have been staring at it ' +
        'for more than a hundred years. If you only have time for one museum on the whole ' +
        'island, archaeologists will tell you to pick this one, and then go up to Knossos ' +
        'to see where all of it once stood.',
    },
    facts: [
      {
        el: 'Έχει τη μεγαλύτερη συλλογή μινωικών ευρημάτων στον κόσμο.',
        en: 'It holds the largest collection of Minoan finds in the world.',
      },
      {
        el: 'Οι αυθεντικές τοιχογραφίες της Κνωσού φυλάσσονται εδώ, όχι στον αρχαιολογικό χώρο.',
        en: 'The original Knossos frescoes are kept here, not at the site.',
      },
      {
        el: 'Ο Δίσκος της Φαιστού δεν έχει αποκρυπτογραφηθεί ως σήμερα.',
        en: 'The Phaistos Disc has still not been deciphered.',
      },
    ],
    location: {
      lat: 35.33917,
      lng: 25.1375,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q636972', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Heraklion Archaeological Museum', deltaM: 4 },
      ],
      verifiedAt: '2026-09-11',
      note: 'OpenStreetMap was rate-limiting on this pass; Wikidata and Wikipedia agree to 4 m.',
    },
    question: {
      q: {
        el: 'Γιατί βλέπεις αντίγραφα τοιχογραφιών στην Κνωσό και όχι τα πρωτότυπα;',
        en: 'Why do you see copies of the frescoes at Knossos instead of the originals?',
      },
      answers: [
        {
          el: 'Για να μην καταστραφούν τα πρωτότυπα από τον ήλιο και τον καιρό',
          en: 'So the originals are not destroyed by sun and weather',
        },
        {
          el: 'Γιατί τα πρωτότυπα χάθηκαν σε σεισμό',
          en: 'Because the originals were lost in an earthquake',
        },
        {
          el: 'Γιατί τα πρωτότυπα ανήκουν σε ιδιώτη',
          en: 'Because the originals belong to a private owner',
        },
        {
          el: 'Γιατί τα πρωτότυπα είναι πολύ μικρά για να φανούν',
          en: 'Because the originals are too small to see',
        },
      ],
      explanation: {
        el:
          'Το χρώμα ξεθωριάζει στο φως και η υγρασία τρώει τον σοβά. Το μουσείο είναι ' +
          'σκοτεινό και σταθερό επίτηδες.',
        en:
          'Paint fades in light and damp eats plaster. A museum is kept dark and steady on ' +
          'purpose.',
      },
    },

    museum: {
      doorNote: {
        el: 'Οι Μινωίτες δεν ζωγράφιζαν πολέμους. Πρόσεξε τι ζωγράφιζαν αντί γι’ αυτούς.',
        en: 'The Minoans did not paint wars. Notice what they painted instead.',
      },
      rooms: [
        {
          id: 'heraklion-archaeological-museum-frescoes',
          emoji: '🎨',
          name: { el: 'Οι τοιχογραφίες', en: 'The frescoes' },
          intro: {
            el:
              'Αυτές οι εικόνες ήταν κάποτε τοίχοι στην Κνωσό. Σώθηκαν σε κομμάτια, ' +
              'μερικές φορές σε ελάχιστα, και γύρω τους έχει συμπληρωθεί χρώμα πιο αχνό ' +
              'ώστε να ξεχωρίζεις τι είναι αρχαίο και τι μαντεψιά. Κοίτα πρώτα πού ' +
              'τελειώνει το δυνατό χρώμα, και μετά κοίτα τι ζωγράφισαν οι Μινωίτες.',
            en:
              'These pictures were once walls at Knossos. They survived in fragments, ' +
              'sometimes in very few, and paler paint has been filled in around them so you ' +
              'can tell what is ancient from what is a guess. Look first for where the ' +
              'strong colour stops.',
          },
          exhibits: [
            {
              id: 'heraklion-archaeological-museum-bull-leaping',
              name: { el: 'Τα ταυροκαθάψια', en: 'The bull-leaping fresco' },
              blurb: {
                el:
                  'Ένας ταύρος τρέχει, και τρεις άνθρωποι κάνουν κάτι απίστευτο γύρω του: ' +
                  'ο ένας πιάνει τα κέρατα, ο δεύτερος είναι στον αέρα πάνω από τη ράχη ' +
                  'του, ο τρίτος περιμένει με ανοιχτά χέρια να τον πιάσει. Οι ειδικοί ' +
                  'διαφωνούν αν αυτό γινόταν πραγματικά ή αν είναι εικόνα τελετής. Πρόσεξε ' +
                  'τα χρώματα των σωμάτων: στη μινωική ζωγραφική οι άντρες αποδίδονται ' +
                  'συνήθως σκουρόχρωμοι και οι γυναίκες ανοιχτόχρωμες.',
                en:
                  'A bull is running, and three people are doing something extraordinary ' +
                  'around it: one grips the horns, the second is in mid-air above its back, ' +
                  'the third waits with open arms to catch them. Specialists disagree about ' +
                  'whether this really happened or whether it is a picture of a ceremony. ' +
                  'Notice the colours of the bodies: in Minoan painting men are usually shown ' +
                  'dark-skinned and women pale.',
              },
              question: {
                q: {
                  el: 'Πόσοι άνθρωποι συμμετέχουν στη σκηνή με τον ταύρο;',
                  en: 'How many people are taking part in the bull scene?',
                },
                answers: [
                  { el: 'Τρεις, σε τρεις διαφορετικές στιγμές του άλματος', en: 'Three, at three different moments of the leap' },
                  { el: 'Ένας μόνο, στον αέρα', en: 'Only one, in mid-air' },
                  { el: 'Πέντε, σε κύκλο γύρω του', en: 'Five, in a circle around it' },
                  { el: 'Κανένας: ο ταύρος είναι μόνος', en: 'None: the bull is alone' },
                ],
                explanation: {
                  el: 'Ίσως δείχνει τρία πρόσωπα, ίσως το ίδιο πρόσωπο τρεις φορές, σαν καρέ ταινίας.',
                  en: 'It may show three people, or the same person three times, like frames of a film.',
                },
              },
            },
            {
              id: 'heraklion-archaeological-museum-prince-lilies',
              name: { el: 'Ο «Πρίγκιπας με τα κρίνα»', en: 'The "Prince of the Lilies"' },
              blurb: {
                el:
                  'Μια μορφή που περπατάει, με στέμμα από κρίνα και φτερά παγονιού. Είναι ' +
                  'από τις πιο γνωστές εικόνες της Κρήτης και ταυτόχρονα από τις πιο ' +
                  'αμφισβητούμενες: τα αυθεντικά κομμάτια είναι λίγα, και το υπόλοιπο ' +
                  'συμπληρώθηκε στις αρχές του 20ού αιώνα. Κάποιοι ερευνητές θεωρούν ότι ' +
                  'τα θραύσματα ίσως ανήκουν σε περισσότερες από μία μορφές, οπότε ο ' +
                  '«πρίγκιπας» μπορεί να μην υπήρξε ποτέ έτσι.',
                en:
                  'A figure walking, wearing a crown of lilies and peacock feathers. It is ' +
                  'one of the best known images from Crete and also one of the most ' +
                  'disputed: the genuine fragments are few, and the rest was filled in during ' +
                  'the early 20th century. Some researchers think the pieces may belong to ' +
                  'more than one figure, in which case the "prince" may never have existed ' +
                  'in this form at all.',
              },
              question: {
                q: {
                  el: 'Γιατί αμφισβητείται αυτή η τοιχογραφία;',
                  en: 'Why is this fresco disputed?',
                },
                answers: [
                  {
                    el: 'Γιατί τα αυθεντικά κομμάτια είναι λίγα και τα υπόλοιπα συμπληρώθηκαν',
                    en: 'Because the genuine fragments are few and the rest was filled in',
                  },
                  { el: 'Γιατί ζωγραφίστηκε πρόσφατα από πλαστογράφο', en: 'Because it was painted recently by a forger' },
                  { el: 'Γιατί βρέθηκε έξω από την Κρήτη', en: 'Because it was found outside Crete' },
                  { el: 'Γιατί δεν σώζεται καθόλου χρώμα πάνω της', en: 'Because no colour survives on it at all' },
                ],
                explanation: {
                  el: 'Η συμπλήρωση είναι υπόθεση. Όταν τα θραύσματα είναι λίγα, η υπόθεση γίνεται μεγάλη.',
                  en: 'Filling in is guesswork. When the fragments are few, the guess gets large.',
                },
              },
            },
            {
              id: 'heraklion-archaeological-museum-saffron-gatherer',
              name: { el: 'Ο «συλλέκτης του κρόκου»', en: 'The "saffron gatherer"' },
              blurb: {
                el:
                  'Όταν βρέθηκε αυτή η τοιχογραφία, την αποκατέστησαν ως ένα αγόρι που ' +
                  'μαζεύει λουλούδια κρόκου σε ένα λιβάδι. Χρόνια αργότερα βρέθηκαν κι ' +
                  'άλλα θραύσματα, και έδειξαν κάτι διαφορετικό: το πλάσμα δεν είχε ' +
                  'ανθρώπινα χέρια αλλά πατούσες, και ήταν μπλε. Είναι μαϊμού. Η ιστορία ' +
                  'αυτή είναι το καλύτερο παράδειγμα του πώς δουλεύει η αρχαιολογία: μια ' +
                  'εξήγηση κρατάει μέχρι να έρθουν νέα στοιχεία.',
                en:
                  'When this fresco was found it was restored as a boy picking saffron ' +
                  'flowers in a meadow. Years later more fragments turned up and showed ' +
                  'something else: the creature did not have human hands but paws, and it was ' +
                  'blue. It is a monkey. That story is the best example of how archaeology ' +
                  'works: an explanation stands until new evidence arrives.',
              },
              question: {
                q: {
                  el: 'Τι αποδείχτηκε τελικά ότι είναι η μορφή που μαζεύει κρόκο;',
                  en: 'What did the saffron-picking figure turn out to be?',
                },
                answers: [
                  { el: 'Μια μπλε μαϊμού', en: 'A blue monkey' },
                  { el: 'Ένα αγόρι με μπλε ρούχα', en: 'A boy in blue clothes' },
                  { el: 'Μια ιέρεια', en: 'A priestess' },
                  { el: 'Ένας ταύρος', en: 'A bull' },
                ],
                explanation: {
                  el:
                    'Τα καινούργια θραύσματα έδειξαν πατούσες αντί για χέρια. Η επιστήμη ' +
                    'άλλαξε γνώμη, και αυτό είναι το σωστό.',
                  en:
                    'The new fragments showed paws instead of hands. Science changed its ' +
                    'mind, which is exactly what it should do.',
                },
              },
            },
          ],
        },
        {
          id: 'heraklion-archaeological-museum-small-wonders',
          emoji: '🔍',
          name: { el: 'Τα μικρά θαύματα', en: 'The small wonders' },
          intro: {
            el:
              'Τα πιο εκπληκτικά αντικείμενα αυτού του μουσείου χωράνε στη χούφτα. Είναι ' +
              'σφραγίδες, κοσμήματα, αγγεία και ένας δίσκος που κανείς δεν διαβάζει. Πλησίασε ' +
              'τις βιτρίνες: σχεδόν όλα εδώ φτιάχτηκαν με εργαλεία χωρίς μεγεθυντικό φακό, ' +
              'γιατί ο φακός δεν είχε ακόμα εφευρεθεί.',
            en:
              'The most astonishing objects in this museum fit in your hand. They are seals, ' +
              'jewellery, vessels, and a disc that nobody can read. Get close to the cases: ' +
              'almost everything here was made with tools and no magnifying glass, because ' +
              'the magnifying glass had not been invented yet.',
          },
          exhibits: [
            {
              id: 'heraklion-archaeological-museum-phaistos-disc',
              name: { el: 'Ο Δίσκος της Φαιστού', en: 'The Phaistos Disc' },
              blurb: {
                el:
                  'Ένας πήλινος δίσκος στο μέγεθος μιας μικρής πίτσας, με σύμβολα ' +
                  'τυπωμένα σε σπείρα και στις δύο πλευρές του. Τα σύμβολα δεν είναι ' +
                  'χαραγμένα: είναι σφραγισμένα, το καθένα με δικό του καλούπι. Αυτό ' +
                  'σημαίνει ότι κάποιος είχε φτιάξει ένα σετ από σφραγίδες, δηλαδή κάτι ' +
                  'σαν τυπογραφία, τρεισήμισι χιλιάδες χρόνια πριν από την τυπογραφία. ' +
                  'Κανείς δεν ξέρει τι γράφει. Δεν έχει βρεθεί δεύτερο κείμενο στην ίδια ' +
                  'γραφή για να το συγκρίνουμε.',
                en:
                  'A clay disc the size of a small pizza, with symbols printed in a spiral on ' +
                  'both sides. The symbols are not scratched on: they are stamped, each one ' +
                  'with its own punch. That means somebody had made a set of stamps, a kind ' +
                  'of printing, three and a half thousand years before printing. Nobody knows ' +
                  'what it says. No second text in the same script has ever been found to ' +
                  'compare it with.',
              },
              question: {
                q: {
                  el: 'Γιατί δεν έχει διαβαστεί ο Δίσκος της Φαιστού;',
                  en: 'Why has the Phaistos Disc not been read?',
                },
                answers: [
                  {
                    el: 'Γιατί δεν έχει βρεθεί άλλο κείμενο στην ίδια γραφή',
                    en: 'Because no other text in the same script has been found',
                  },
                  { el: 'Γιατί τα σύμβολα έχουν σβηστεί', en: 'Because the symbols have worn away' },
                  { el: 'Γιατί είναι σπασμένος στη μέση', en: 'Because it is broken in half' },
                  { el: 'Γιατί κανείς δεν έχει προσπαθήσει', en: 'Because nobody has tried' },
                ],
                explanation: {
                  el:
                    'Για να λύσεις μια γραφή χρειάζεσαι πολλά δείγματα. Με ένα μόνο ' +
                    'αντικείμενο, κάθε λύση είναι εικασία.',
                  en:
                    'To crack a script you need many samples. With a single object, every ' +
                    'solution is a guess.',
                },
              },
            },
            {
              id: 'heraklion-archaeological-museum-snake-goddess',
              name: { el: 'Η θεά με τα φίδια', en: 'The snake goddess' },
              blurb: {
                el:
                  'Μια μικρή φιγούρα από φαγεντιανή, ύψους λίγων εκατοστών, που κρατάει ' +
                  'από ένα φίδι σε κάθε χέρι και φοράει μακρύ φόρεμα με βολάν. Βρέθηκε σε ' +
                  'κρύπτη της Κνωσού μαζί με άλλα ιερά αντικείμενα. Κανείς δεν ξέρει αν ' +
                  'είναι θεά, ιέρεια ή κάτι άλλο· το όνομα το έδωσαν οι αρχαιολόγοι. Τα ' +
                  'φίδια δεν είναι απειλή: σε πολλούς αρχαίους πολιτισμούς συμβολίζουν το ' +
                  'σπίτι, τη γη και την ανανέωση, επειδή αλλάζουν δέρμα.',
                en:
                  'A small faience figure a few centimetres tall, holding a snake in each ' +
                  'hand and wearing a long flounced dress. It was found in a sealed pit at ' +
                  'Knossos with other sacred objects. Nobody knows whether she is a goddess, ' +
                  'a priestess or something else; archaeologists gave her the name. The ' +
                  'snakes are not a threat: in many ancient cultures they stand for the home, ' +
                  'the earth and renewal, because they shed their skin.',
              },
              question: {
                q: {
                  el: 'Ποιος της έδωσε το όνομα «θεά με τα φίδια»;',
                  en: 'Who gave her the name "snake goddess"?',
                },
                answers: [
                  { el: 'Οι αρχαιολόγοι που τη βρήκαν', en: 'The archaeologists who found her' },
                  { el: 'Οι Μινωίτες, σε επιγραφή δίπλα της', en: 'The Minoans, in an inscription beside her' },
                  { el: 'Ο Όμηρος, σε ένα ποίημα', en: 'Homer, in a poem' },
                  { el: 'Το μουσείο, με ψηφοφορία επισκεπτών', en: 'The museum, by a visitors’ vote' },
                ],
                explanation: {
                  el: 'Πολλά ονόματα σε μουσεία είναι σύγχρονα. Χρήσιμα, αλλά όχι αποδείξεις.',
                  en: 'Many museum names are modern. Useful, but not evidence.',
                },
              },
            },
            {
              id: 'heraklion-archaeological-museum-bee-pendant',
              name: { el: 'Οι χρυσές μέλισσες', en: 'The golden bees' },
              blurb: {
                el:
                  'Ένα κόσμημα από τα Μάλια, λίγα εκατοστά μόνο: δύο μέλισσες που κρατούν ' +
                  'μαζί μια σταγόνα μελιού. Πάνω τους υπάρχουν μικροσκοπικές χρυσές ' +
                  'μπαλίτσες κολλημένες μία μία, με τεχνική που λέγεται κοκκίδωση, και ' +
                  'λεπτά σύρματα που σχηματίζουν τα φτερά. Για να δεις τη δουλειά ' +
                  'χρειάζεσαι σήμερα φακό. Ο τεχνίτης που το έφτιαξε δεν είχε φακό, είχε ' +
                  'μόνο νεανικά μάτια και πολλή υπομονή.',
                en:
                  'A piece of jewellery from Malia, only a few centimetres across: two bees ' +
                  'holding a drop of honey between them. Tiny gold balls are fixed to them ' +
                  'one by one, in a technique called granulation, and fine wires form the ' +
                  'wings. To see the work today you need a magnifier. The craftsman who made ' +
                  'it had no magnifier, only young eyes and a great deal of patience.',
              },
              question: {
                q: {
                  el: 'Πώς μπήκαν οι μικροσκοπικές χρυσές μπαλίτσες πάνω στο κόσμημα;',
                  en: 'How were the tiny gold balls fixed onto the jewel?',
                },
                answers: [
                  { el: 'Κολλήθηκαν μία μία με τεχνική που λέγεται κοκκίδωση', en: 'Fixed on one by one, in a technique called granulation' },
                  { el: 'Χύθηκαν μαζί με το υπόλοιπο χρυσάφι σε καλούπι', en: 'Cast together with the rest of the gold in a mould' },
                  { el: 'Ζωγραφίστηκαν με χρυσή μπογιά', en: 'Painted on with gold paint' },
                  { el: 'Σφυρηλατήθηκαν από την ανάποδη', en: 'Hammered out from the back' },
                ],
                explanation: {
                  el: 'Κάθε μπαλίτσα είναι ξεχωριστό κομμάτι χρυσού. Μέτρα τες, αν αντέχεις.',
                  en: 'Every ball is a separate piece of gold. Count them, if you have the patience.',
                },
              },
            },
            {
              id: 'heraklion-archaeological-museum-harvester-vase',
              name: { el: 'Το αγγείο των θεριστών', en: 'The Harvester Vase' },
              blurb: {
                el:
                  'Ένα μικρό μαύρο αγγείο με ανάγλυφη πομπή γύρω γύρω: άντρες που ' +
                  'επιστρέφουν από τη δουλειά κρατώντας εργαλεία στον ώμο, και μπροστά ' +
                  'τους κάποιοι που τραγουδούν. Ένας από αυτούς έχει το στόμα ορθάνοιχτο ' +
                  'και το στήθος φουσκωμένο, και φαίνεται καθαρά ότι φωνάζει δυνατά. ' +
                  'Είναι σπάνιο σε αρχαία τέχνη να βλέπεις ήχο. Τα πρόσωπα δεν είναι ' +
                  'ίδια μεταξύ τους: άλλος γελάει, άλλος έχει κουραστεί.',
                en:
                  'A small black vessel with a procession carved right around it: men coming ' +
                  'back from work with tools over their shoulders, and in front of them some ' +
                  'who are singing. One has his mouth wide open and his chest pushed out, and ' +
                  'you can see plainly that he is shouting the words. It is rare in ancient ' +
                  'art to be able to see sound. The faces are not identical either: one is ' +
                  'laughing, another has had enough.',
              },
              question: {
                q: {
                  el: 'Τι κάνει ξεχωριστό το αγγείο των θεριστών;',
                  en: 'What makes the Harvester Vase unusual?',
                },
                answers: [
                  { el: 'Φαίνεται ότι οι μορφές τραγουδούν, δηλαδή βλέπεις τον ήχο', en: 'You can see that the figures are singing, so you see sound' },
                  { el: 'Είναι φτιαγμένο από καθαρό χρυσό', en: 'It is made of solid gold' },
                  { el: 'Έχει πάνω του γραμμένο ένα ποίημα', en: 'A poem is written on it' },
                  { el: 'Είναι το μεγαλύτερο αγγείο του μουσείου', en: 'It is the largest vessel in the museum' },
                ],
                explanation: {
                  el: 'Ανοιχτό στόμα, φουσκωμένο στήθος, σώματα σε ρυθμό. Ο γλύπτης ζωγράφισε θόρυβο.',
                  en: 'Open mouth, chest out, bodies in rhythm. The carver drew noise.',
                },
              },
            },
          ],
        },
      ],
      riddles: [
        {
          id: 'heraklion-archaeological-museum-riddle-1',
          difficulty: 1,
          prompt: {
            el:
              'Είμαι στρογγυλός και από πηλό, και κουβαλάω σύμβολα σε σπείρα και στις δύο ' +
              'μου πλευρές. Με κοιτάνε πάνω από εκατό χρόνια και κανείς δεν ξέρει ακόμα τι ' +
              'λέω.',
            en:
              'I am round and made of clay, and I carry symbols in a spiral on both my ' +
              'sides. People have been staring at me for over a hundred years and nobody ' +
              'knows yet what I say.',
          },
          hint: {
            el: 'Τα σύμβολά μου δεν χαράχτηκαν. Πατήθηκαν.',
            en: 'My symbols were not scratched on. They were stamped.',
          },
          answerExhibitId: 'heraklion-archaeological-museum-phaistos-disc',
        },
        {
          id: 'heraklion-archaeological-museum-riddle-2',
          difficulty: 2,
          prompt: {
            el:
              'Με πήραν για αγόρι σε λιβάδι με λουλούδια. Ύστερα βρέθηκαν κι άλλα κομμάτια ' +
              'μου, και φάνηκε ότι δεν έχω χέρια αλλά πατούσες, και ότι είμαι μπλε.',
            en:
              'They took me for a boy in a meadow of flowers. Then more of my pieces were ' +
              'found, and it turned out I have paws instead of hands, and that I am blue.',
          },
          hint: {
            el: 'Δεν είμαι άνθρωπος, αλλά έχω πέντε δάχτυλα.',
            en: 'I am not a person, but I have five fingers.',
          },
          answerExhibitId: 'heraklion-archaeological-museum-saffron-gatherer',
        },
        {
          id: 'heraklion-archaeological-museum-riddle-3',
          difficulty: 3,
          prompt: {
            el:
              'Χωράω σε μια χούφτα και είμαστε δύο, όχι μία. Κρατάμε μαζί κάτι γλυκό, και ' +
              'πάνω μας υπάρχουν εκατοντάδες χρυσές μπαλίτσες κολλημένες μία μία.',
            en:
              'I fit in your hand and there are two of us, not one. Between us we hold ' +
              'something sweet, and hundreds of gold balls are fixed to us one at a time.',
          },
          hint: {
            el: 'Έχω φτερά από λεπτό σύρμα.',
            en: 'My wings are made of fine wire.',
          },
          answerExhibitId: 'heraklion-archaeological-museum-bee-pendant',
        },
      ],
    },
  },

  // ---------------------------------------------------------------------- koules
  {
    id: 'heraklion-koules',
    cityId: 'heraklion',
    emoji: '🏰',
    category: 'landmark',
    difficulty: 1,

    name: { el: 'Κούλες', en: 'The Koules Fortress' },
    tagline: {
      el: 'Ένα φρούριο μέσα στη θάλασσα, με τοίχους εννιά μέτρων',
      en: 'A fortress standing in the sea, with walls nine metres thick',
    },
    story: {
      el:
        'Στην είσοδο του παλιού λιμανιού στέκεται ένα τετράγωνο φρούριο χτισμένο μέσα ' +
        'στο νερό. Οι Βενετοί το έχτισαν ανάμεσα στο 1523 και το 1540 και το ονόμασαν ' +
        'Ρόκα α Μάρε, «ο βράχος στη θάλασσα». Οι Τούρκοι αργότερα το είπαν Κούλες, που ' +
        'θα πει πύργος, και αυτό το όνομα έμεινε. Κοίτα το πάχος των τοίχων του: προς τη ' +
        'μεριά της θάλασσας φτάνουν σχεδόν τα εννιά μέτρα, ενώ προς τη στεριά είναι πολύ ' +
        'λεπτότεροι. Ο λόγος είναι απλός και έξυπνος: οι μπάλες των κανονιών έρχονταν από ' +
        'τα καράβια, όχι από την πόλη. Στο ισόγειο υπάρχουν είκοσι έξι θολωτοί χώροι, ' +
        'όπου φυλάγονταν μπαρούτι, τρόφιμα και νερό. Στους εξωτερικούς τοίχους είναι ' +
        'σκαλισμένο τρεις φορές το φτερωτό λιοντάρι της Βενετίας, το σήμα της πόλης που ' +
        'το έχτισε.',
      en:
        'At the mouth of the old harbour stands a square fortress built out in the water. ' +
        'The Venetians raised it between 1523 and 1540 and called it Rocca a Mare, "the ' +
        'rock in the sea". The Turks later called it Koules, meaning tower, and that is the ' +
        'name that stuck. Look at the thickness of its walls: on the sea side they reach ' +
        'almost nine metres, while on the landward side they are much thinner. The reason ' +
        'is simple and clever: cannonballs came from ships, not from the town. On the ' +
        'ground floor there are twenty-six vaulted rooms where gunpowder, food and water ' +
        'were kept. Carved three times on the outside walls is the winged lion of Venice, ' +
        'the badge of the city that built it.',
    },
    facts: [
      {
        el: 'Χτίστηκε από τους Βενετούς ανάμεσα στο 1523 και το 1540.',
        en: 'It was built by the Venetians between 1523 and 1540.',
      },
      {
        el: 'Οι τοίχοι προς τη θάλασσα φτάνουν σχεδόν τα 9 μέτρα πάχος.',
        en: 'The walls facing the sea are almost 9 metres thick.',
      },
      {
        el: 'Στο ισόγειό του υπάρχουν 26 θολωτοί χώροι.',
        en: 'Its ground floor holds 26 vaulted rooms.',
      },
    ],
    location: {
      lat: 35.34457,
      lng: 25.13688,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q603920', deltaM: 0 },
        { kind: 'osm', ref: 'relation/5251038', deltaM: 4 },
      ],
      verifiedAt: '2026-09-11',
      note: 'Filed on Wikidata under its Venetian name, Rocca a Mare; a Greek search for Κούλες returns nothing relevant. No English Wikipedia coordinate.',
    },
    question: {
      q: {
        el: 'Γιατί είναι πολύ πιο χοντροί οι τοίχοι προς τη θάλασσα;',
        en: 'Why are the walls facing the sea so much thicker?',
      },
      answers: [
        {
          el: 'Γιατί από εκεί έρχονταν οι μπάλες των κανονιών',
          en: 'Because that is where the cannonballs came from',
        },
        {
          el: 'Γιατί το αλάτι τρώει γρηγορότερα την πέτρα',
          en: 'Because salt eats stone faster',
        },
        {
          el: 'Γιατί εκεί ήταν οι φυλακές',
          en: 'Because the prisons were on that side',
        },
        {
          el: 'Γιατί έτσι στέκεται όρθιο στο νερό',
          en: 'Because that is what keeps it upright in the water',
        },
      ],
      explanation: {
        el:
          'Το φρούριο χτίστηκε για μια συγκεκριμένη απειλή. Χοντραίνεις τον τοίχο εκεί ' +
          'που περιμένεις το χτύπημα.',
        en:
          'The fortress was built against one particular threat. You thicken the wall where ' +
          'you expect the blow.',
      },
    },
  },

  // ------------------------------------------------------------- morosini fountain
  {
    id: 'heraklion-morosini-fountain',
    cityId: 'heraklion',
    emoji: '🦁',
    category: 'landmark',
    difficulty: 1,

    name: { el: 'Κρήνη Μοροζίνι', en: 'The Morosini Fountain' },
    tagline: {
      el: 'Τα Λιοντάρια, που είναι παλιότερα από την ίδια τη βρύση',
      en: 'The Lions, which are older than the fountain itself',
    },
    story: {
      el:
        'Στην καρδιά της πόλης, εκεί που οι Ηρακλειώτες λένε ραντεβού «στα Λιοντάρια», ' +
        'υπάρχει μια βρύση που τελείωσε το 1628. Τη χρωστάει η πόλη στον Φραντσέσκο ' +
        'Μοροζίνι, που έλυσε ένα πρόβλημα δεκαετιών: το Ηράκλειο δεν είχε αρκετό πόσιμο ' +
        'νερό. Έφτιαξε υδραγωγείο που κατέβαζε νερό από τον Γιούχτα, περίπου δεκαπέντε ' +
        'χιλιόμετρα μακριά, με την κλίση του εδάφους και μόνο, χωρίς καμία αντλία. Η ' +
        'λεκάνη έχει οκτώ λοβούς με ανάγλυφα από θαλάσσια πλάσματα, δελφίνια και νύμφες. ' +
        'Και τα τέσσερα λιοντάρια που την κρατούν είναι κατά τριακόσια χρόνια παλιότερα ' +
        'από αυτήν: δεν φτιάχτηκαν για τη βρύση, μεταφέρθηκαν από αλλού και ' +
        'ξαναχρησιμοποιήθηκαν. Ακόμα και σήμερα, το νερό βγαίνει από τα στόματά τους. Αν ' +
        'καθίσεις απέναντι και ακούσεις, θα καταλάβεις γιατί εδώ κλείνουν ραντεβού όλοι: ' +
        'το νερό ακούγεται πιο δυνατά από την πόλη.',
      en:
        'In the heart of the city, at the spot where people in Heraklion say "meet me at ' +
        'the Lions", there is a fountain finished in 1628. The city owes it to Francesco ' +
        'Morosini, who solved a problem decades old: Heraklion did not have enough drinking ' +
        'water. He built an aqueduct that brought water down from Mount Juktas, about ' +
        'fifteen kilometres away, using the slope of the ground alone and no pump at all. ' +
        'The basin has eight lobes carved with sea creatures, dolphins and nymphs. And the ' +
        'four lions holding it up are some three hundred years older than the fountain: ' +
        'they were not made for it, they were brought from somewhere else and reused. Water ' +
        'still comes out of their mouths today.',
    },
    facts: [
      {
        el: 'Ολοκληρώθηκε το 1628 και έλυσε το πρόβλημα του πόσιμου νερού της πόλης.',
        en: 'It was completed in 1628 and solved the city’s drinking-water problem.',
      },
      {
        el: 'Το νερό ερχόταν περίπου 15 χιλιόμετρα από τον Γιούχτα, χωρίς αντλία.',
        en: 'The water came about 15 kilometres from Mount Juktas, with no pump.',
      },
      {
        el: 'Τα τέσσερα λιοντάρια είναι αρκετά παλαιότερα από τη βρύση και ξαναχρησιμοποιήθηκαν.',
        en: 'The four lions are considerably older than the fountain and were reused.',
      },
    ],
    location: {
      lat: 35.33917,
      lng: 25.13314,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q15616490', deltaM: 0 },
        { kind: 'osm', ref: 'way/621718927', deltaM: 6 },
      ],
      verifiedAt: '2026-09-11',
    },
    question: {
      q: {
        el: 'Πώς έφτανε το νερό στη βρύση από δεκαπέντε χιλιόμετρα μακριά;',
        en: 'How did the water reach the fountain from fifteen kilometres away?',
      },
      answers: [
        {
          el: 'Με υδραγωγείο που κατέβαινε σιγά σιγά, μόνο με την κλίση του εδάφους',
          en: 'By an aqueduct running gently downhill, on the slope of the ground alone',
        },
        {
          el: 'Με αντλίες που δούλευαν με άλογα',
          en: 'By pumps worked by horses',
        },
        {
          el: 'Με βαρέλια που κουβαλούσαν κάρα κάθε πρωί',
          en: 'By barrels carted in every morning',
        },
        {
          el: 'Από πηγάδι ακριβώς από κάτω της',
          en: 'From a well directly underneath it',
        },
      ],
      explanation: {
        el:
          'Ένα υδραγωγείο δεν χρειάζεται ενέργεια, χρειάζεται ακρίβεια: η κλίση πρέπει να ' +
          'είναι μικρή και σταθερή σε όλη τη διαδρομή.',
        en:
          'An aqueduct needs no power, only precision: the slope has to be slight and ' +
          'steady along the entire route.',
      },
    },
  },

  // ---------------------------------------------------------------------- loggia
  {
    id: 'heraklion-loggia',
    cityId: 'heraklion',
    emoji: '🏛️',
    category: 'history',
    difficulty: 2,

    name: { el: 'Λότζια', en: 'The Venetian Loggia' },
    tagline: {
      el: 'Η λέσχη των Βενετών ευγενών, σήμερα το δημαρχείο',
      en: 'The clubhouse of the Venetian nobles, now the city hall',
    },
    story: {
      el:
        'Η Λότζια χτίστηκε τη δεκαετία του 1620 και δεν ήταν εκκλησία, ούτε παλάτι, ούτε ' +
        'φρούριο. Ήταν λέσχη. Εδώ μαζεύονταν οι Βενετοί ευγενείς του Ηρακλείου για να ' +
        'συζητήσουν, να κλείσουν συμφωνίες και να πάρουν αποφάσεις για την πόλη. Έχει δύο ' +
        'ορόφους με τοξοστοιχίες, δηλαδή σειρές από καμάρες που στηρίζονται σε κολόνες, ' +
        'και είναι φτιαγμένη ώστε να δείχνει πλούτο χωρίς να φωνάζει. Με τον καιρό ' +
        'ερειπώθηκε σχεδόν εντελώς. Την ξαναέχτισαν κομμάτι κομμάτι, χρησιμοποιώντας ' +
        'όσες αυθεντικές πέτρες βρέθηκαν, και η δουλειά αυτή βραβεύτηκε το 1987 ως η ' +
        'καλύτερη αναστήλωση μνημείου στην Ευρώπη. Σήμερα το κτίριο δεν είναι μουσείο: ' +
        'είναι το δημαρχείο του Ηρακλείου, και μέσα δουλεύουν άνθρωποι κάθε μέρα. Ένα ' +
        'κτίριο τετρακοσίων ετών που εξακολουθεί να κάνει σχεδόν την ίδια δουλειά είναι ' +
        'σπανιότερο από ένα ερείπιο.',
      en:
        'The Loggia was built in the 1620s and it was not a church, a palace or a fortress. ' +
        'It was a club. The Venetian nobles of Heraklion gathered here to talk, to strike ' +
        'deals and to take decisions about the city. It has two storeys of arcades, rows of ' +
        'arches resting on columns, and it is built to show wealth without shouting about ' +
        'it. Over time it fell almost completely into ruin. It was rebuilt piece by piece ' +
        'using whatever original stones could be found, and that work was named the best ' +
        'restored monument in Europe in 1987. Today the building is not a museum: it is ' +
        'Heraklion’s city hall, and people work inside it every day. A four-hundred-year-old ' +
        'building still doing more or less its original job is rarer than a ruin.',
    },
    facts: [
      {
        el: 'Χτίστηκε τη δεκαετία του 1620 ως λέσχη των Βενετών ευγενών.',
        en: 'It was built in the 1620s as a club for the Venetian nobles.',
      },
      {
        el: 'Η αναστήλωσή της βραβεύτηκε το 1987 ως η καλύτερη στην Ευρώπη.',
        en: 'Its restoration was named the best in Europe in 1987.',
      },
      {
        el: 'Σήμερα στεγάζει το δημαρχείο του Ηρακλείου.',
        en: 'Today it houses Heraklion’s city hall.',
      },
    ],
    location: {
      lat: 35.33978,
      lng: 25.13396,
      anchor: 'centroid',
      confidence: 'C',
      sources: [{ kind: 'wikidata', ref: 'Q14175781', deltaM: 0 }],
      verifiedAt: '2026-09-11',
      note: 'Grade C on this pass only: Overpass rate-limited the request and there is no English Wikipedia coordinate. An earlier run matched OpenStreetMap and graded B on the same coordinate.',
    },
    question: {
      q: {
        el: 'Τι ήταν αρχικά αυτό το κτίριο;',
        en: 'What was this building originally?',
      },
      answers: [
        {
          el: 'Λέσχη όπου μαζεύονταν οι Βενετοί ευγενείς',
          en: 'A club where the Venetian nobles gathered',
        },
        { el: 'Εκκλησία με δύο καμπαναριά', en: 'A church with two bell towers' },
        { el: 'Αποθήκη του λιμανιού', en: 'A harbour warehouse' },
        { el: 'Σχολείο για τα παιδιά της πόλης', en: 'A school for the children of the city' },
      ],
      explanation: {
        el:
          'Οι αποφάσεις για μια πόλη δεν παίρνονταν πάντα σε επίσημα κτίρια. Εδώ ' +
          'παίρνονταν σε μια λέσχη, και το κτίριο έγινε τελικά το δημαρχείο.',
        en:
          'Decisions about a city were not always taken in official buildings. Here they ' +
          'were taken in a club, and the building eventually became the city hall.',
      },
    },
  },

  // -------------------------------------------------------------- historical museum
  {
    id: 'heraklion-historical-museum',
    cityId: 'heraklion',
    emoji: '🖼️',
    category: 'museum',
    difficulty: 3,

    name: { el: 'Ιστορικό Μουσείο Κρήτης', en: 'The Historical Museum of Crete' },
    tagline: {
      el: 'Από τους πρώτους χριστιανούς ως τον Καζαντζάκη, και δύο Ελ Γκρέκο',
      en: 'From the first Christians to Kazantzakis, and two El Grecos',
    },
    story: {
      el:
        'Το Αρχαιολογικό Μουσείο σταματάει περίπου εκεί που αρχίζει αυτό. Το Ιστορικό ' +
        'Μουσείο Κρήτης καλύπτει τα χίλια εξακόσια χρόνια μετά τους Μινωίτες: ' +
        'παλαιοχριστιανικά, βυζαντινά, βενετσιάνικα, οθωμανικά, και τον εικοστό αιώνα. ' +
        'Ιδρύθηκε το 1953 σε ένα αρχοντικό δίπλα στη θάλασσα. Το πιο γνωστό του απόκτημα ' +
        'είναι δύο πίνακες ενός ζωγράφου που γεννήθηκε στην Κρήτη γύρω στο 1541 και λεγόταν ' +
        'Δομήνικος Θεοτοκόπουλος. Έμαθε να ζωγραφίζει εικόνες, έφυγε για τη Βενετία και ' +
        'κατέληξε στην Ισπανία, όπου τον φώναζαν απλώς «ο Έλληνας»: Ελ Γκρέκο. Οι δύο ' +
        'πίνακες είναι τα μοναδικά έργα του που βρίσκονται στην Κρήτη. Μέσα στο μουσείο ' +
        'υπάρχει επίσης μια τεράστια μακέτα του Ηρακλείου όπως ήταν τον 17ο αιώνα, και το ' +
        'γραφείο του Νίκου Καζαντζάκη, μεταφερμένο όπως ήταν, με τα βιβλία και τα ' +
        'χειρόγραφά του στη θέση που τα άφησε.',
      en:
        'The Archaeological Museum stops roughly where this one begins. The Historical ' +
        'Museum of Crete covers the sixteen hundred years after the Minoans: early ' +
        'Christian, Byzantine, Venetian, Ottoman, and the twentieth century. It was founded ' +
        'in 1953 in a mansion beside the sea. Its best known holding is two paintings by an ' +
        'artist born in Crete around 1541 and named Domenikos Theotokopoulos. He learned to ' +
        'paint icons, left for Venice and ended up in Spain, where people simply called him ' +
        '"the Greek": El Greco. These two are the only works of his anywhere in Crete. The ' +
        'museum also holds an enormous model of Heraklion as it was in the 17th century, ' +
        'and the study of Nikos Kazantzakis, moved in exactly as it was.',
    },
    facts: [
      {
        el: 'Ιδρύθηκε το 1953 και καλύπτει την Κρήτη μετά τους Μινωίτες.',
        en: 'It was founded in 1953 and covers Crete after the Minoans.',
      },
      {
        el: 'Φυλάει τους δύο μοναδικούς πίνακες του Ελ Γκρέκο που βρίσκονται στην Κρήτη.',
        en: 'It keeps the only two El Greco paintings in Crete.',
      },
      {
        el: 'Έχει μακέτα του Ηρακλείου όπως ήταν τον 17ο αιώνα.',
        en: 'It has a model of Heraklion as it stood in the 17th century.',
      },
    ],
    location: {
      lat: 35.34181,
      lng: 25.13117,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q4204518', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Historical Museum of Crete', deltaM: 0 },
      ],
      verifiedAt: '2026-09-11',
      note: 'Wikidata and Wikipedia agree exactly. Overpass was rate-limiting on this pass.',
    },
    question: {
      q: {
        el: 'Γιατί ονομάστηκε «Ελ Γκρέκο» ο Δομήνικος Θεοτοκόπουλος;',
        en: 'Why was Domenikos Theotokopoulos called "El Greco"?',
      },
      answers: [
        {
          el: 'Γιατί στην Ισπανία τον φώναζαν απλώς «ο Έλληνας»',
          en: 'Because in Spain people simply called him "the Greek"',
        },
        {
          el: 'Γιατί έτσι υπέγραφε από μικρός τα έργα του',
          en: 'Because he signed his work that way from childhood',
        },
        {
          el: 'Γιατί ήταν το όνομα του δασκάλου του',
          en: 'Because it was his teacher’s name',
        },
        {
          el: 'Γιατί γεννήθηκε σε χωριό με αυτό το όνομα',
          en: 'Because he was born in a village of that name',
        },
      ],
      explanation: {
        el:
          'Το όνομά του ήταν δύσκολο για τους Ισπανούς. Το παρατσούκλι επικράτησε και ' +
          'έμεινε για πάντα.',
        en:
          'His name was hard for Spaniards to say. The nickname took over and stayed for ' +
          'good.',
      },
    },

    museum: {
      doorNote: {
        el: 'Ξεκίνα από τη μακέτα. Θα καταλάβεις πού ακριβώς στέκεσαι τώρα.',
        en: 'Start at the model. You will work out exactly where you are standing now.',
      },
      rooms: [
        {
          id: 'heraklion-historical-museum-el-greco',
          emoji: '🖌️',
          name: { el: 'Δύο πίνακες που γύρισαν σπίτι', en: 'Two paintings that came home' },
          intro: {
            el:
              'Ο ζωγράφος έφυγε από την Κρήτη νέος και δεν γύρισε ποτέ. Τα έργα του ' +
              'βρίσκονται σε μεγάλα μουσεία της Ευρώπης και της Αμερικής, και στο νησί ' +
              'που τον γέννησε υπάρχουν μόνο δύο. Είναι μικρά, και χρειάζονται χρόνο: ' +
              'κοίτα πρώτα το φως, μετά τα πρόσωπα.',
            en:
              'The painter left Crete young and never came back. His work hangs in the ' +
              'great museums of Europe and America, and on the island that produced him ' +
              'there are only two. They are small, and they need time: look at the light ' +
              'first, then at the faces.',
          },
          exhibits: [
            {
              id: 'heraklion-historical-museum-sinai',
              name: { el: 'Το Σινά', en: 'The View of Mount Sinai' },
              blurb: {
                el:
                  'Ένας βραχώδης όγκος που ανεβαίνει, με ένα μοναστήρι μικρό στη ρίζα του ' +
                  'και ανθρώπους ακόμα μικρότερους στα μονοπάτια. Είναι τοπίο, κάτι ' +
                  'ασυνήθιστο για την εποχή του: η ζωγραφική τότε ήθελε κυρίως πρόσωπα και ' +
                  'ιστορίες. Ο νεαρός Θεοτοκόπουλος το έφτιαξε στην Κρήτη ή λίγο μετά την ' +
                  'αναχώρησή του, όταν ζωγράφιζε ακόμα με τεχνική κοντά στις βυζαντινές ' +
                  'εικόνες, με χρυσό και λεπτές γραμμές.',
                en:
                  'A mass of rock rising up, with a small monastery at its foot and people ' +
                  'smaller still on the paths. It is a landscape, which was unusual for its ' +
                  'time: painting then mostly wanted faces and stories. The young ' +
                  'Theotokopoulos made it in Crete or shortly after leaving, while he was ' +
                  'still working in a technique close to Byzantine icons, with gold and fine ' +
                  'lines.',
              },
              question: {
                q: {
                  el: 'Τι είναι ασυνήθιστο σε αυτόν τον πίνακα για την εποχή του;',
                  en: 'What is unusual about this painting for its time?',
                },
                answers: [
                  { el: 'Είναι τοπίο, με τους ανθρώπους μικροσκοπικούς', en: 'It is a landscape, with the people tiny' },
                  { el: 'Είναι ζωγραφισμένος σε γυαλί', en: 'It is painted on glass' },
                  { el: 'Δεν έχει καθόλου χρώμα', en: 'It has no colour at all' },
                  { el: 'Είναι μεγαλύτερος από τοίχο', en: 'It is bigger than a wall' },
                ],
                explanation: {
                  el: 'Το τοπίο έγινε αυτόνομο θέμα πολύ αργότερα. Εδώ το βουνό είναι ο πρωταγωνιστής.',
                  en: 'Landscape became a subject in its own right much later. Here the mountain is the hero.',
                },
              },
            },
            {
              id: 'heraklion-historical-museum-baptism',
              name: { el: 'Η Βάπτιση', en: 'The Baptism of Christ' },
              blurb: {
                el:
                  'Ένας μικρός πίνακας με έντονο, σχεδόν ηλεκτρικό φως, όπου τα σώματα ' +
                  'είναι τραβηγμένα σε ύψος και τα χρώματα δεν είναι φυσικά. Αυτό είναι το ' +
                  'σήμα κατατεθέν του Ελ Γκρέκο και ο λόγος που τον αναγνωρίζεις αμέσως. ' +
                  'Δεν προσπαθούσε να ζωγραφίσει αυτό που βλέπει το μάτι· ζωγράφιζε αυτό ' +
                  'που θέλει να νιώσεις. Τρακόσια χρόνια αργότερα, ζωγράφοι του 20ού αιώνα ' +
                  'τον ανακάλυψαν ξανά και τον θεώρησαν δικό τους.',
                en:
                  'A small painting with intense, almost electric light, where the bodies are ' +
                  'stretched tall and the colours are not natural. This is El Greco’s ' +
                  'signature and the reason you can recognise him instantly. He was not ' +
                  'trying to paint what the eye sees; he painted what he wanted you to feel. ' +
                  'Three hundred years later, painters of the 20th century rediscovered him ' +
                  'and claimed him as one of their own.',
              },
              question: {
                q: {
                  el: 'Πώς αναγνωρίζεις έναν πίνακα του Ελ Γκρέκο;',
                  en: 'How do you recognise an El Greco painting?',
                },
                answers: [
                  { el: 'Από τα τραβηγμένα σώματα και το αφύσικο φως', en: 'By the stretched bodies and the unnatural light' },
                  { el: 'Από το ότι είναι πάντα τεράστιος', en: 'By its always being enormous' },
                  { el: 'Από το ότι δεν έχει ανθρώπους', en: 'By its having no people in it' },
                  { el: 'Από την υπογραφή στα ισπανικά', en: 'By the signature in Spanish' },
                ],
                explanation: {
                  el: 'Υπέγραφε στα ελληνικά ως το τέλος. Αλλά το ύφος του δεν χρειάζεται υπογραφή.',
                  en: 'He signed in Greek to the end. But his style needs no signature.',
                },
              },
            },
            {
              id: 'heraklion-historical-museum-byzantine-frescoes',
              name: { el: 'Οι τοιχογραφίες από τα εκκλησάκια', en: 'The frescoes from the chapels' },
              blurb: {
                el:
                  'Η Κρήτη έχει εκατοντάδες μικρά βυζαντινά εκκλησάκια σε χωριά και ' +
                  'βουνά, πολλά με ζωγραφισμένους τοίχους. Όταν ένα από αυτά κινδυνεύει να ' +
                  'καταρρεύσει, οι τοιχογραφίες αποσπώνται και σώζονται. Στο μουσείο ' +
                  'βλέπεις τέτοια κομμάτια, με άγιους, αγγέλους και σκηνές της καθημερινής ' +
                  'ζωής στο περιθώριο. Κοίτα τα χέρια και τα μάτια: είναι μεγάλα και ' +
                  'έντονα επίτηδες, γιατί ο ζωγράφος ήξερε ότι ο κόσμος θα τα κοιτάζει από ' +
                  'μακριά και με λίγο φως.',
                en:
                  'Crete has hundreds of small Byzantine chapels in villages and mountains, ' +
                  'many with painted walls. When one of them is in danger of collapse, the ' +
                  'paintings are detached and saved. In the museum you see such pieces, with ' +
                  'saints, angels and scenes of daily life around the edges. Look at the ' +
                  'hands and the eyes: they are large and strong on purpose, because the ' +
                  'painter knew people would be looking from a distance in very little light.',
              },
              question: {
                q: {
                  el: 'Γιατί είναι τόσο μεγάλα τα μάτια και τα χέρια στις τοιχογραφίες;',
                  en: 'Why are the eyes and hands so large in these frescoes?',
                },
                answers: [
                  { el: 'Για να διαβάζονται από μακριά και με λίγο φως', en: 'So they read from a distance and in very little light' },
                  { el: 'Γιατί ο ζωγράφος δεν ήξερε αναλογίες', en: 'Because the painter did not know proportion' },
                  { el: 'Γιατί έτσι έμοιαζαν οι άνθρωποι τότε', en: 'Because people looked like that then' },
                  { el: 'Για να χωράει λιγότερο χρώμα', en: 'So that less paint would be needed' },
                ],
                explanation: {
                  el: 'Είναι σχεδιαστική απόφαση. Το εκκλησάκι είναι σκοτεινό και ο τοίχος μακριά.',
                  en: 'It is a design decision. The chapel is dark and the wall is far away.',
                },
              },
            },
          ],
        },
        {
          id: 'heraklion-historical-museum-city-and-people',
          emoji: '🏘️',
          name: { el: 'Η πόλη και οι άνθρωποί της', en: 'The city and its people' },
          intro: {
            el:
              'Η δεύτερη αίθουσα κατεβαίνει από τους ζωγράφους στους κατοίκους. Εδώ ' +
              'υπάρχει ολόκληρη η πόλη σε μικρογραφία, το γραφείο ενός συγγραφέα όπως το ' +
              'άφησε, και υφαντά που έφτιαξαν γυναίκες σε χωριά, με σχέδια που περνούσαν ' +
              'από μάνα σε κόρη χωρίς να γραφτούν ποτέ πουθενά.',
            en:
              'The second room comes down from the painters to the inhabitants. There is a ' +
              'whole city in miniature here, the study of a writer exactly as he left it, ' +
              'and weaving made by women in villages, with patterns passed from mother to ' +
              'daughter and never written down anywhere.',
          },
          exhibits: [
            {
              id: 'heraklion-historical-museum-city-model',
              name: { el: 'Η μακέτα του Χάνδακα', en: 'The model of the walled city' },
              blurb: {
                el:
                  'Μια τεράστια μακέτα δείχνει το Ηράκλειο όπως ήταν τον 17ο αιώνα, όταν ' +
                  'λεγόταν Χάνδακας: ένα τείχος με προμαχώνες που ζώνει ολόκληρη την πόλη, ' +
                  'το λιμάνι με τα νεώρια, εκκλησίες, στενά. Βρες πρώτα το φρούριο στη ' +
                  'θάλασσα και ύστερα τη βρύση με τα λιοντάρια, και ξαφνικά ολόκληρη η ' +
                  'σημερινή πόλη μπαίνει στη θέση της. Οι μακέτες είναι το πιο ' +
                  'υποτιμημένο εργαλείο ενός μουσείου: δείχνουν σχέσεις, όχι αντικείμενα.',
                en:
                  'A huge model shows Heraklion as it was in the 17th century, when it was ' +
                  'called Candia: a wall with bastions wrapped around the whole town, the ' +
                  'harbour with its boat sheds, churches, alleys. Find the sea fortress ' +
                  'first, then the fountain with the lions, and suddenly the whole modern ' +
                  'city drops into place. Models are the most underrated tool in a museum: ' +
                  'they show relationships rather than objects.',
              },
              question: {
                q: {
                  el: 'Πώς λεγόταν το Ηράκλειο τον 17ο αιώνα;',
                  en: 'What was Heraklion called in the 17th century?',
                },
                answers: [
                  { el: 'Χάνδακας', en: 'Candia' },
                  { el: 'Κνωσός', en: 'Knossos' },
                  { el: 'Αμνισός', en: 'Amnisos' },
                  { el: 'Γόρτυνα', en: 'Gortyn' },
                ],
                explanation: {
                  el: 'Από το όνομα αυτό βγήκε και το ιταλικό Candia, που για αιώνες σήμαινε όλη την Κρήτη.',
                  en: 'That name gave the Italian Candia, which for centuries meant the whole of Crete.',
                },
              },
            },
            {
              id: 'heraklion-historical-museum-kazantzakis-study',
              name: { el: 'Το γραφείο του συγγραφέα', en: 'The writer’s study' },
              blurb: {
                el:
                  'Ένα δωμάτιο μεταφερμένο ολόκληρο: το γραφείο του Νίκου Καζαντζάκη, με ' +
                  'το τραπέζι του, τα βιβλία του, τα γυαλιά του και τα χειρόγραφά του. ' +
                  'Είναι παράξενο έκθεμα, γιατί δεν είναι σπάνιο ούτε πολύτιμο· είναι απλώς ' +
                  'αληθινό. Δείχνει ότι τα βιβλία δεν εμφανίζονται από το πουθενά: κάποιος ' +
                  'κάθισε σε μια καρέκλα, μέρα με τη μέρα, και έγραψε με το χέρι σελίδες ' +
                  'που διαβάστηκαν αργότερα σε δεκάδες γλώσσες.',
                en:
                  'A room moved in whole: the study of Nikos Kazantzakis, with his table, his ' +
                  'books, his glasses and his manuscripts. It is a strange exhibit, because ' +
                  'it is neither rare nor valuable; it is simply real. It shows that books do ' +
                  'not appear from nowhere: somebody sat in a chair, day after day, and wrote ' +
                  'by hand the pages that were later read in dozens of languages.',
              },
              question: {
                q: {
                  el: 'Γιατί αξίζει να εκτεθεί ένα απλό γραφείο;',
                  en: 'Why is an ordinary desk worth exhibiting?',
                },
                answers: [
                  { el: 'Γιατί δείχνει πώς φτιάχνεται στην πραγματικότητα ένα βιβλίο', en: 'Because it shows how a book actually gets made' },
                  { el: 'Γιατί είναι φτιαγμένο από σπάνιο ξύλο', en: 'Because it is made of rare wood' },
                  { el: 'Γιατί ανήκε σε βασιλιά', en: 'Because it belonged to a king' },
                  { el: 'Γιατί κρύβει μυστική θυρίδα', en: 'Because it hides a secret drawer' },
                ],
                explanation: {
                  el: 'Η δουλειά του συγγραφέα είναι αόρατη. Ένα τραπέζι με χαρτιά την κάνει ορατή.',
                  en: 'A writer’s work is invisible. A table with papers on it makes it visible.',
                },
              },
            },
            {
              id: 'heraklion-historical-museum-weaving',
              name: { el: 'Τα υφαντά', en: 'The weaving' },
              blurb: {
                el:
                  'Υφάσματα φτιαγμένα σε αργαλειό, με σχέδια που επαναλαμβάνονται σε ' +
                  'αυστηρή σειρά: ρόμβοι, δέντρα, πουλιά, ζιγκ ζαγκ. Κάθε περιοχή της ' +
                  'Κρήτης είχε δικά της μοτίβα, και ένας ειδικός μπορεί να δει ένα ύφασμα ' +
                  'και να πει από ποιο χωριό είναι, όπως θα αναγνώριζε μια διάλεκτο. Τα ' +
                  'σχέδια δεν υπήρχαν γραμμένα πουθενά. Ζούσαν στη μνήμη και στα χέρια, ' +
                  'και περνούσαν από γενιά σε γενιά με το να τα δουλεύεις δίπλα σε κάποιον.',
                en:
                  'Cloth made on a loom, with patterns repeating in a strict order: diamonds, ' +
                  'trees, birds, zigzags. Every region of Crete had its own motifs, and a ' +
                  'specialist can look at a piece and say which village it comes from, the ' +
                  'way you would recognise a dialect. The patterns were not written down ' +
                  'anywhere. They lived in memory and in hands, and passed from one ' +
                  'generation to the next by working beside somebody.',
              },
              question: {
                q: {
                  el: 'Πώς περνούσαν τα σχέδια των υφαντών από γενιά σε γενιά;',
                  en: 'How were the weaving patterns passed from one generation to the next?',
                },
                answers: [
                  { el: 'Δουλεύοντας δίπλα σε κάποιον που τα ήξερε', en: 'By working beside somebody who knew them' },
                  { el: 'Από τυπωμένα βιβλία με σχέδια', en: 'From printed pattern books' },
                  { el: 'Από επιθεωρητές που τα δίδασκαν', en: 'From inspectors who taught them' },
                  { el: 'Δεν περνούσαν: κάθε γενιά τα εφεύρισκε ξανά', en: 'They were not: each generation invented new ones' },
                ],
                explanation: {
                  el:
                    'Είναι γνώση χωρίς εγχειρίδιο. Γι’ αυτό, όταν σταματήσει η μεταβίβαση, ' +
                    'χάνεται σε μία γενιά.',
                  en:
                    'It is knowledge with no manual. Which is why, once it stops being passed ' +
                    'on, it disappears in a single generation.',
                },
              },
            },
          ],
        },
      ],
      riddles: [
        {
          id: 'heraklion-historical-museum-riddle-1',
          difficulty: 1,
          prompt: {
            el:
              'Είμαι ολόκληρη πόλη, αλλά χωράω σε ένα δωμάτιο. Έχω τείχη, λιμάνι και ' +
              'στενά, και αν με κοιτάξεις αρκετή ώρα θα βρεις πάνω μου τον δρόμο που ' +
              'περπάτησες σήμερα.',
            en:
              'I am a whole city, and I fit in one room. I have walls, a harbour and alleys, ' +
              'and if you look at me long enough you will find the street you walked down ' +
              'today.',
          },
          hint: {
            el: 'Δεν είμαι χάρτης. Έχω ύψος.',
            en: 'I am not a map. I have height.',
          },
          answerExhibitId: 'heraklion-historical-museum-city-model',
        },
        {
          id: 'heraklion-historical-museum-riddle-2',
          difficulty: 2,
          prompt: {
            el:
              'Είμαι βουνό ζωγραφισμένο, και οι άνθρωποι πάνω μου είναι όσο ένας κόκκος. ' +
              'Με έφτιαξε ένας νέος από αυτό το νησί, πριν φύγει και γίνει διάσημος με ' +
              'άλλο όνομα.',
            en:
              'I am a painted mountain, and the people on me are the size of a grain. A ' +
              'young man from this island made me, before he left and became famous under ' +
              'another name.',
          },
          hint: {
            el: 'Στη ρίζα μου υπάρχει ένα μοναστήρι.',
            en: 'There is a monastery at my foot.',
          },
          answerExhibitId: 'heraklion-historical-museum-sinai',
        },
      ],
    },
  },

  // ---------------------------------------------------- natural history museum
  {
    id: 'heraklion-natural-history-museum',
    cityId: 'heraklion',
    emoji: '🦣',
    category: 'science',
    difficulty: 1,

    name: { el: 'Μουσείο Φυσικής Ιστορίας Κρήτης', en: 'The Natural History Museum of Crete' },
    tagline: {
      el: 'Ένα δωμάτιο που σε κουνάει, και ένας γίγαντας που έζησε εδώ',
      en: 'A room that shakes you, and a giant that really lived here',
    },
    story: {
      el:
        'Το μουσείο στεγάζεται σε ένα παλιό εργοστάσιο ηλεκτρικού ρεύματος στην παραλία, ' +
        'και ανήκει στο Πανεπιστήμιο Κρήτης. Δείχνει τη φύση της Μεσογείου σε μεγάλες ' +
        'σκηνές: βουνά, φαράγγια, έρημοι, ακτές, με τα ζώα τους στη θέση τους. Έχει και ' +
        'ζωντανά ζώα, κυρίως ερπετά και έντομα. Δύο πράγματα δεν τα ξεχνάς. Το πρώτο ' +
        'είναι ο προσομοιωτής σεισμού: μπαίνεις σε ένα δωμάτιο και το πάτωμα αναπαράγει ' +
        'πραγματικούς σεισμούς που έχουν καταγραφεί, ώστε να καταλάβεις τι κάνει η γη ' +
        'όταν κινείται. Το δεύτερο είναι ένα ζώο σε φυσικό μέγεθος: το Δεινοθήριο, ' +
        'συγγενής των ελεφάντων, που ζούσε στην Κρήτη πριν από εκατομμύρια χρόνια και ' +
        'ήταν ψηλότερο από ένα λεωφορείο. Στέκεσαι μπροστά του και καταλαβαίνεις ότι η ' +
        'Κρήτη δεν είχε πάντα κατσίκες και ελιές: είχε και θηρία, πολύ πριν από εμάς.',
      en:
        'The museum is housed in an old electricity works on the seafront and belongs to ' +
        'the University of Crete. It shows the nature of the Mediterranean in big scenes: ' +
        'mountains, gorges, deserts, coasts, with their animals in place. It also keeps ' +
        'live animals, mostly reptiles and insects. Two things you do not forget. The first ' +
        'is the earthquake simulator: you step into a room and the floor replays real ' +
        'recorded earthquakes, so you understand what the ground actually does when it ' +
        'moves. The second is an animal at full size: Deinotherium, a relative of the ' +
        'elephants, which lived on Crete millions of years ago and stood taller than a bus. ' +
        'Standing in front of it you realise Crete was not always goats and olive trees: ' +
        'there were monsters here, long before us.',
    },
    facts: [
      {
        el: 'Στεγάζεται σε παλιό εργοστάσιο ηλεκτρικού ρεύματος και ανήκει στο Πανεπιστήμιο Κρήτης.',
        en: 'It is housed in an old power station and belongs to the University of Crete.',
      },
      {
        el: 'Ο προσομοιωτής του αναπαράγει πραγματικούς καταγεγραμμένους σεισμούς.',
        en: 'Its simulator replays real recorded earthquakes.',
      },
      {
        el: 'Εκθέτει σε φυσικό μέγεθος το Δεινοθήριο, συγγενή των ελεφάντων που έζησε στην Κρήτη.',
        en: 'It shows a full-size Deinotherium, an elephant relative that lived on Crete.',
      },
    ],
    location: {
      lat: 35.3419,
      lng: 25.1266,
      anchor: 'centroid',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q6980521', deltaM: 0 },
        { kind: 'osm', ref: 'way/211917529', deltaM: 10 },
        { kind: 'wikipedia', ref: 'Natural History Museum of Crete', deltaM: 0 },
      ],
      verifiedAt: '2026-09-11',
    },
    question: {
      q: {
        el: 'Τι κάνει ο προσομοιωτής σεισμού του μουσείου;',
        en: 'What does the museum’s earthquake simulator do?',
      },
      answers: [
        {
          el: 'Αναπαράγει πραγματικούς σεισμούς που έχουν καταγραφεί',
          en: 'It replays real earthquakes that were actually recorded',
        },
        {
          el: 'Προβλέπει πότε θα γίνει ο επόμενος σεισμός',
          en: 'It predicts when the next earthquake will happen',
        },
        {
          el: 'Δείχνει ταινία για τους σεισμούς σε τρεις διαστάσεις',
          en: 'It shows a three-dimensional film about earthquakes',
        },
        {
          el: 'Μετράει πόσο δυνατά μπορείς να χτυπήσεις το πάτωμα',
          en: 'It measures how hard you can stamp on the floor',
        },
      ],
      explanation: {
        el:
          'Κανείς δεν προβλέπει σεισμούς. Το να ξέρεις όμως πώς είναι, βοηθάει να ξέρεις ' +
          'τι να κάνεις.',
        en:
          'Nobody predicts earthquakes. Knowing what one feels like, though, helps you know ' +
          'what to do.',
      },
    },
  },

  // ----------------------------------------------------------------- cretaquarium
  {
    id: 'heraklion-cretaquarium',
    cityId: 'heraklion',
    emoji: '🐠',
    category: 'nature',
    difficulty: 1,

    name: { el: 'Ενυδρείο Κρήτης', en: 'The Cretaquarium' },
    tagline: {
      el: 'Δύο χιλιάδες κυβικά θαλασσινού νερού, όλα μεσογειακά',
      en: 'Two thousand cubic metres of seawater, all of it Mediterranean',
    },
    story: {
      el:
        'Στις Γούρνες, δεκαπέντε χιλιόμετρα ανατολικά του Ηρακλείου, υπάρχει ένα ενυδρείο ' +
        'χτισμένο εκεί όπου παλιά ήταν αμερικανική αεροπορική βάση. Άνοιξε το 2005 και ' +
        'ανήκει στο Ελληνικό Κέντρο Θαλάσσιων Ερευνών, δηλαδή είναι ταυτόχρονα επισκέψιμος ' +
        'χώρος και ερευνητικό κέντρο. Έχει δεκάδες δεξαμενές με συνολικά περίπου δύο ' +
        'χιλιάδες κυβικά μέτρα θαλασσινό νερό. Η σημαντικότερη απόφασή του είναι αυτό που ' +
        'δεν έχει: δεν υπάρχουν τροπικά ψάρια, ούτε πλάσματα από άλλους ωκεανούς. Όλα όσα ' +
        'βλέπεις ζουν στη Μεσόγειο, δηλαδή στη θάλασσα που έχεις ακριβώς απέξω. Έτσι ο ' +
        'καρχαρίας πίσω από το τζάμι δεν είναι εξωτικός: κολυμπάει στα ίδια νερά με σένα, ' +
        'και δεν έχεις λόγο να τον φοβάσαι περισσότερο απ’ όσο πρέπει. Το ενυδρείο δεν ' +
        'σου δείχνει έναν μακρινό κόσμο. Σου δείχνει τι υπάρχει κάτω από την επιφάνεια ' +
        'στην παραλία που πήγες χθες.',
      en:
        'At Gournes, fifteen kilometres east of Heraklion, there is an aquarium built where ' +
        'an American air base used to be. It opened in 2005 and belongs to the Hellenic ' +
        'Centre for Marine Research, so it is a place to visit and a research centre at the ' +
        'same time. It has dozens of tanks holding around two thousand cubic metres of ' +
        'seawater between them. Its most important decision is what it does not have: no ' +
        'tropical fish, nothing from other oceans. Everything you see lives in the ' +
        'Mediterranean, which is the sea directly outside. So the shark behind the glass is ' +
        'not exotic: it swims in the same water you do, and there is no reason to fear it ' +
        'more than you should.',
    },
    facts: [
      {
        el: 'Άνοιξε το 2005, στη θέση παλιάς αεροπορικής βάσης.',
        en: 'It opened in 2005, on the site of a former air base.',
      },
      {
        el: 'Οι δεξαμενές του κρατούν περίπου 2.000 κυβικά μέτρα θαλασσινό νερό.',
        en: 'Its tanks hold around 2,000 cubic metres of seawater.',
      },
      {
        el: 'Δείχνει μόνο είδη που ζουν στη Μεσόγειο.',
        en: 'It shows only species that live in the Mediterranean.',
      },
    ],
    location: {
      lat: 35.33269,
      lng: 25.28247,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q31529', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Cretaquarium', deltaM: 0 },
      ],
      verifiedAt: '2026-09-11',
      note: 'Wikidata and Wikipedia agree exactly. Overpass was rate-limiting on this pass.',
    },
    question: {
      q: {
        el: 'Τι δεν θα δεις σε αυτό το ενυδρείο;',
        en: 'What will you not see in this aquarium?',
      },
      answers: [
        { el: 'Τροπικά ψάρια από άλλους ωκεανούς', en: 'Tropical fish from other oceans' },
        { el: 'Καρχαρίες', en: 'Sharks' },
        { el: 'Χταπόδια', en: 'Octopuses' },
        { el: 'Χελώνες', en: 'Turtles' },
      ],
      explanation: {
        el:
          'Η επιλογή είναι σκόπιμη: το ενυδρείο δείχνει τη θάλασσα που έχεις απέξω, όχι ' +
          'μια θάλασσα που δεν θα δεις ποτέ.',
        en:
          'The choice is deliberate: the aquarium shows the sea outside the door, not a sea ' +
          'you will never visit.',
      },
    },
  },

  // ------------------------------------------------------------ pankritio stadium
  {
    id: 'heraklion-pankritio-stadium',
    cityId: 'heraklion',
    emoji: '🏟️',
    category: 'sport',
    difficulty: 1,

    name: { el: 'Παγκρήτιο Στάδιο', en: 'The Pankritio Stadium' },
    tagline: {
      el: 'Χτισμένο για τους Ολυμπιακούς του 2004, σε ένα νησί',
      en: 'Built for the 2004 Olympics, on an island',
    },
    story: {
      el:
        'Όταν η Αθήνα ανέλαβε τους Ολυμπιακούς Αγώνες του 2004, το ποδόσφαιρο δεν χώραγε ' +
        'σε μία πόλη. Οι αγώνες μοιράστηκαν σε πέντε στάδια της χώρας, και ένα από αυτά ' +
        'ήταν εδώ. Το Παγκρήτιο χτίστηκε γι’ αυτόν ακριβώς τον σκοπό και χωράει περίπου ' +
        'είκοσι έξι χιλιάδες θεατές. Έχει στίβο γύρω από τον αγωνιστικό χώρο, άρα οι ' +
        'εξέδρες είναι πιο μακριά από ό,τι σε ένα καθαρά ποδοσφαιρικό γήπεδο, και ' +
        'χρησιμοποιείται και για στίβο και για συναυλίες. Το ενδιαφέρον ερώτημα για ένα ' +
        'τέτοιο κτίριο δεν είναι πώς χτίστηκε αλλά τι έγινε μετά: πολλά ολυμπιακά στάδια ' +
        'σε όλο τον κόσμο ερήμωσαν όταν τελείωσαν οι αγώνες. Αυτό δεν ερήμωσε. Παίζουν ' +
        'εκεί κρητικές ομάδες, και γεμίζει τακτικά. Ένα στάδιο ζει μόνο αν κάποιος το ' +
        'χρειάζεται τη Δευτέρα μετά τη γιορτή.',
      en:
        'When Athens took on the Olympic Games of 2004, the football would not fit into one ' +
        'city. The matches were spread across five stadiums around the country, and one of ' +
        'them was here. The Pankritio was built for exactly that and holds about twenty-six ' +
        'thousand people. It has a running track around the pitch, so the stands sit ' +
        'further back than in a football-only ground, and it is used for athletics and ' +
        'concerts too. The interesting question about a building like this is not how it ' +
        'was built but what happened next: many Olympic stadiums around the world emptied ' +
        'out once the games ended. This one did not. Cretan clubs play here, and it fills ' +
        'up regularly. A stadium only stays alive if somebody needs it on the Monday after ' +
        'the party.',
    },
    facts: [
      {
        el: 'Χτίστηκε για τους Ολυμπιακούς Αγώνες του 2004 και χωράει περίπου 26.000 θεατές.',
        en: 'It was built for the 2004 Olympic Games and holds about 26,000 people.',
      },
      {
        el: 'Το ολυμπιακό ποδόσφαιρο μοιράστηκε σε πέντε στάδια της Ελλάδας.',
        en: 'The Olympic football was shared across five stadiums around Greece.',
      },
      {
        el: 'Έχει στίβο γύρω από το γήπεδο, οπότε χρησιμοποιείται και για αγώνες στίβου.',
        en: 'It has a running track around the pitch, so it is used for athletics too.',
      },
    ],
    location: {
      lat: 35.33667,
      lng: 25.10611,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q1928668', deltaM: 0 },
        { kind: 'osm', ref: 'relation/1626818', deltaM: 179 },
        { kind: 'wikipedia', ref: 'Pankritio Stadium', deltaM: 0 },
      ],
      verifiedAt: '2026-09-11',
      note: 'The OSM outline covers the whole sports complex, so its centre falls 179 m away. Wikidata and Wikipedia agree exactly on the stadium.',
    },
    question: {
      q: {
        el: 'Γιατί χτίστηκε αυτό το στάδιο στην Κρήτη;',
        en: 'Why was this stadium built in Crete?',
      },
      answers: [
        {
          el: 'Γιατί το ολυμπιακό ποδόσφαιρο του 2004 μοιράστηκε σε πέντε πόλεις',
          en: 'Because the 2004 Olympic football was shared across five cities',
        },
        {
          el: 'Γιατί η Κρήτη διεκδίκησε δικούς της Ολυμπιακούς',
          en: 'Because Crete bid for Olympic Games of its own',
        },
        {
          el: 'Γιατί το παλιό στάδιο καταστράφηκε σε σεισμό',
          en: 'Because the old stadium was destroyed in an earthquake',
        },
        {
          el: 'Γιατί χρειαζόταν χώρος για συναυλίες',
          en: 'Because space was needed for concerts',
        },
      ],
      explanation: {
        el:
          'Ένα ποδοσφαιρικό τουρνουά χρειάζεται πολλά γήπεδα ταυτόχρονα. Γι’ αυτό οι ' +
          'Ολυμπιακοί απλώνονται σε ολόκληρη χώρα.',
        en:
          'A football tournament needs many grounds at once. That is why an Olympics spreads ' +
          'across a whole country.',
      },
    },
  },

  // --------------------------------------------------------- kazantzakis museum
  {
    id: 'heraklion-kazantzakis-museum',
    cityId: 'heraklion',
    emoji: '✍️',
    category: 'art',
    difficulty: 3,

    name: { el: 'Μουσείο Νίκου Καζαντζάκη', en: 'The Nikos Kazantzakis Museum' },
    tagline: {
      el: 'Σε ένα χωριό, τα χαρτιά ενός ανθρώπου που διαβάστηκε παντού',
      en: 'In a village, the papers of a man who was read everywhere',
    },
    story: {
      el:
        'Στη Μυρτιά, ένα χωριό νότια του Ηρακλείου, βρίσκεται το σπίτι της οικογένειας ' +
        'του πατέρα του Νίκου Καζαντζάκη, και μέσα του ένα μουσείο αφιερωμένο σε αυτόν. ' +
        'Άνοιξε το 1983. Θα δεις χειρόγραφα με σβησίματα, γράμματα, φωτογραφίες, ' +
        'ταξιδιωτικά αντικείμενα, σκηνικά από θεατρικά του και, το πιο εντυπωσιακό για ' +
        'παιδιά, τα βιβλία του μεταφρασμένα σε δεκάδες γλώσσες, στοιχισμένα στο ίδιο ' +
        'ράφι. Ο Καζαντζάκης έγραψε τον «Ζορμπά» και πολλά ακόμα, ταξίδεψε σε όλο τον ' +
        'κόσμο και επέστρεφε συνέχεια στην Κρήτη με το γράψιμο. Πέθανε το 1957 και θάφτηκε ' +
        'στο Ηράκλειο, πάνω στα τείχη. Στην πέτρα του τάφου του υπάρχουν τρεις φράσεις που ' +
        'τις διάλεξε ο ίδιος: «Δεν ελπίζω τίποτα. Δε φοβούμαι τίποτα. Είμαι λέφτερος.» ' +
        'Είναι από τα λίγα επιτύμβια στον κόσμο που τα ξέρουν απέξω άνθρωποι που δεν ' +
        'έχουν πάει ποτέ στον τάφο.',
      en:
        'In Myrtia, a village south of Heraklion, stands the family house of Nikos ' +
        'Kazantzakis’s father, and inside it a museum devoted to him. It opened in 1983. ' +
        'You will find manuscripts full of crossings-out, letters, photographs, things he ' +
        'travelled with, sets from his plays and, most striking of all for children, his ' +
        'books translated into dozens of languages, lined up on one shelf. Kazantzakis ' +
        'wrote Zorba the Greek and a great deal more, travelled all over the world and kept ' +
        'coming back to Crete in his writing. He died in 1957 and was buried in Heraklion, ' +
        'up on the walls. On the stone over his grave are three sentences he chose himself: ' +
        '"I hope for nothing. I fear nothing. I am free."',
    },
    facts: [
      {
        el: 'Βρίσκεται στη Μυρτιά, το χωριό της οικογένειας του πατέρα του, και άνοιξε το 1983.',
        en: 'It is in Myrtia, his father’s family village, and it opened in 1983.',
      },
      {
        el: 'Τα βιβλία του έχουν μεταφραστεί σε δεκάδες γλώσσες.',
        en: 'His books have been translated into dozens of languages.',
      },
      {
        el: 'Ο τάφος του στο Ηράκλειο γράφει: «Δεν ελπίζω τίποτα. Δε φοβούμαι τίποτα. Είμαι λέφτερος.»',
        en: 'His grave in Heraklion reads: "I hope for nothing. I fear nothing. I am free."',
      },
    ],
    location: {
      lat: 35.23485,
      lng: 25.20938,
      anchor: 'centroid',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q4306167', deltaM: 0 },
        { kind: 'osm', ref: 'node/5169462643', deltaM: 11 },
        { kind: 'wikipedia', ref: 'Nikos Kazantzakis Museum', deltaM: 0 },
      ],
      verifiedAt: '2026-09-11',
    },
    question: {
      q: {
        el: 'Τι γράφει ο τάφος του Καζαντζάκη στο Ηράκλειο;',
        en: 'What is written on Kazantzakis’s grave in Heraklion?',
      },
      answers: [
        {
          el: '«Δεν ελπίζω τίποτα. Δε φοβούμαι τίποτα. Είμαι λέφτερος.»',
          en: '"I hope for nothing. I fear nothing. I am free."',
        },
        {
          el: '«Εδώ αναπαύεται ένας ταξιδιώτης της Κρήτης.»',
          en: '"Here rests a traveller of Crete."',
        },
        {
          el: '«Γράψε ό,τι βλέπεις, και μετά φύγε.»',
          en: '"Write what you see, then leave."',
        },
        {
          el: '«Η θάλασσα δεν τελειώνει ποτέ.»',
          en: '"The sea never ends."',
        },
      ],
      explanation: {
        el:
          'Τις διάλεξε ο ίδιος πριν πεθάνει. Είναι από τα λίγα επιτύμβια που τα ξέρουν ' +
          'άνθρωποι σε όλο τον κόσμο.',
        en:
          'He chose them himself before he died. It is one of very few epitaphs that people ' +
          'all over the world can quote.',
      },
    },
  },

  // ---------------------------------------------------------------------- juktas
  {
    id: 'heraklion-juktas',
    cityId: 'heraklion',
    emoji: '⛰️',
    category: 'nature',
    difficulty: 2,

    name: { el: 'Γιούχτας', en: 'Mount Juktas' },
    tagline: {
      el: 'Το βουνό που μοιάζει με πρόσωπο ξαπλωμένο ανάσκελα',
      en: 'The mountain that looks like a face lying on its back',
    },
    story: {
      el:
        'Κοίτα τον Γιούχτα από το Ηράκλειο, με τον ήλιο χαμηλά. Η γραμμή της κορυφογραμμής ' +
        'σχηματίζει μέτωπο, μύτη, στόμα και γενειάδα: ένα τεράστιο πρόσωπο ξαπλωμένο ' +
        'ανάσκελα. Οι αρχαίοι Κρητικοί έλεγαν ότι είναι ο Δίας, και ότι ο Δίας είναι ' +
        'θαμμένος εκεί. Αυτό ενοχλούσε τους υπόλοιπους Έλληνες, γιατί για εκείνους ο Δίας ' +
        'δεν πέθαινε ποτέ, και έτσι έλεγαν ότι οι Κρητικοί λένε ψέματα. Ολόκληρη διαφωνία ' +
        'ανάμεσα σε νησί και ηπειρωτική χώρα, για ένα βουνό που μοιάζει με πρόσωπο. Στην ' +
        'κορυφή του, στα 811 μέτρα, υπήρχε μινωικό ιερό: ένα από εκείνα τα ιερά που δεν ' +
        'χτίζονταν σε πόλεις αλλά ψηλά, στον αέρα. Σήμερα ο Γιούχτας είναι προστατευόμενη ' +
        'περιοχή, και πάνω από τις πλαγιές του πετάνε γύπες που εκμεταλλεύονται τα ' +
        'ανοδικά ρεύματα και μένουν στον αέρα χωρίς να κουνήσουν φτερό.',
      en:
        'Look at Juktas from Heraklion with the sun low. The line of the ridge makes a ' +
        'forehead, a nose, a mouth and a beard: an enormous face lying on its back. The ' +
        'ancient Cretans said it was Zeus, and that Zeus was buried there. This annoyed the ' +
        'rest of the Greeks, because for them Zeus never died, so they said the Cretans were ' +
        'liars. An entire argument between an island and a mainland, over a mountain that ' +
        'looks like a face. On its summit, at 811 metres, there was a Minoan sanctuary: one ' +
        'of those shrines that were not built in towns but high up, in the open air. Today ' +
        'Juktas is a protected area, and vultures ride the air above its slopes.',
    },
    facts: [
      {
        el: 'Φτάνει τα 811 μέτρα και φαίνεται από όλο το Ηράκλειο.',
        en: 'It reaches 811 metres and can be seen from all over Heraklion.',
      },
      {
        el: 'Στην κορυφή του υπήρχε μινωικό ιερό κορυφής.',
        en: 'A Minoan peak sanctuary stood on its summit.',
      },
      {
        el: 'Από αυτόν κατέβαινε το νερό της Κρήνης Μοροζίνι στο Ηράκλειο.',
        en: 'The water for the Morosini Fountain in Heraklion came down from it.',
      },
    ],
    location: {
      lat: 35.24,
      lng: 25.14442,
      anchor: 'viewpoint',
      confidence: 'C',
      sources: [{ kind: 'wikidata', ref: 'Q18629969', deltaM: 0 }],
      verifiedAt: '2026-09-11',
      note: 'The summit, not the mountain item (Q3321879), which graded D as a viewpoint because Wikipedia’s point for the ridge sits 829 m south of here. Only Wikidata carries a coordinate for the summit.',
    },
    question: {
      q: {
        el: 'Τι έλεγαν οι αρχαίοι Κρητικοί για αυτό το βουνό;',
        en: 'What did the ancient Cretans say about this mountain?',
      },
      answers: [
        {
          el: 'Ότι είναι ο Δίας ξαπλωμένος, θαμμένος εκεί',
          en: 'That it is Zeus lying there, buried in it',
        },
        {
          el: 'Ότι κάτω του ζει ο Μινώταυρος',
          en: 'That the Minotaur lives underneath it',
        },
        {
          el: 'Ότι το έφτιαξαν άνθρωποι με χώμα',
          en: 'That people built it out of soil',
        },
        {
          el: 'Ότι μεγαλώνει ένα μέτρο κάθε αιώνα',
          en: 'That it grows a metre every century',
        },
      ],
      explanation: {
        el:
          'Οι υπόλοιποι Έλληνες διαφωνούσαν, γιατί για εκείνους ο Δίας δεν πέθαινε. Η ' +
          'κόντρα κράτησε αιώνες.',
        en:
          'The rest of the Greeks disagreed, because for them Zeus never died. The argument ' +
          'ran for centuries.',
      },
    },
  },

  // --------------------------------------------------------------------- amnisos
  {
    id: 'heraklion-amnisos',
    cityId: 'heraklion',
    emoji: '⚓',
    category: 'history',
    difficulty: 2,

    name: { el: 'Αμνισός', en: 'Amnisos' },
    tagline: {
      el: 'Το λιμάνι της Κνωσού, που το ονομάζει ο Όμηρος',
      en: 'The harbour of Knossos, and Homer names it',
    },
    story: {
      el:
        'Ένα ανάκτορο χωρίς λιμάνι δεν εξηγείται. Η Κνωσός είναι πέντε χιλιόμετρα από τη ' +
        'θάλασσα, και το λιμάνι της ήταν εδώ, στην Αμνισό. Σήμερα βλέπεις χαμηλά ερείπια ' +
        'δίπλα στην ακτή, ανάμεσά τους ένα κτίριο που λέγεται «Έπαυλη των Κρίνων», επειδή ' +
        'στους τοίχους του υπήρχαν ζωγραφισμένα κρίνα σε γλάστρες. Ο Όμηρος αναφέρει την ' +
        'Αμνισό στην Οδύσσεια, όταν ο Οδυσσέας λέει ένα ψέμα και ισχυρίζεται πως έπιασε ' +
        'εκεί λιμάνι. Είναι από τις λίγες φορές που ένα ποίημα και ένα σκάμμα δείχνουν το ' +
        'ίδιο σημείο. Το πιο σοβαρό εύρημα όμως είναι η ελαφρόπετρα: στα ερείπια βρέθηκε ' +
        'ελαφρόπετρα από την έκρηξη του ηφαιστείου της Θήρας, που έφτασε ως εδώ πάνω από ' +
        'τη θάλασσα. Μια πέτρα που επιπλέει έφερε την είδηση μιας καταστροφής εκατό ' +
        'χιλιόμετρα μακριά, και την άφησε εδώ για να τη διαβάσουμε.',
      en:
        'A palace with no harbour makes no sense. Knossos is five kilometres from the sea, ' +
        'and its harbour was here, at Amnisos. Today you see low ruins beside the shore, ' +
        'among them a building called the House of the Lilies, because lilies in pots were ' +
        'painted on its walls. Homer names Amnisos in the Odyssey, when Odysseus tells a lie ' +
        'and claims he put in there. It is one of the rare times a poem and an excavation ' +
        'point at the same spot. The most serious find, though, is the pumice: pumice from ' +
        'the eruption of the Thera volcano was found in the ruins, carried this far across ' +
        'the sea. A stone that floats brought news of a disaster a hundred kilometres away ' +
        'and left it here for us to read.',
    },
    facts: [
      {
        el: 'Ήταν το λιμάνι που εξυπηρετούσε την Κνωσό.',
        en: 'It was the harbour that served Knossos.',
      },
      {
        el: 'Ο Όμηρος την ονομάζει στην Οδύσσεια.',
        en: 'Homer names it in the Odyssey.',
      },
      {
        el: 'Στα ερείπιά της βρέθηκε ελαφρόπετρα από την έκρηξη της Θήρας.',
        en: 'Pumice from the Thera eruption was found in its ruins.',
      },
    ],
    location: {
      lat: 35.33083,
      lng: 25.20611,
      anchor: 'area',
      confidence: 'C',
      sources: [
        { kind: 'wikidata', ref: 'Q473766', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Amnisos', deltaM: 98 },
      ],
      verifiedAt: '2026-09-11',
      note: 'An area pin over a coastal site; Wikipedia’s point is 98 m along the shore, which is inside the site. OpenStreetMap has no matching entry.',
    },
    question: {
      q: {
        el: 'Τι σημαίνει ότι βρέθηκε εδώ ελαφρόπετρα από τη Θήρα;',
        en: 'What does it mean that pumice from Thera was found here?',
      },
      answers: [
        {
          el: 'Ότι η έκρηξη του ηφαιστείου έφτασε ως αυτή την ακτή',
          en: 'That the volcanic eruption reached this coast',
        },
        {
          el: 'Ότι οι κάτοικοι έκαναν εμπόριο με πέτρες',
          en: 'That the inhabitants traded in stones',
        },
        {
          el: 'Ότι υπήρχε ηφαίστειο και στην Κρήτη',
          en: 'That there was a volcano on Crete as well',
        },
        {
          el: 'Ότι το λιμάνι χτίστηκε πάνω σε λάβα',
          en: 'That the harbour was built on lava',
        },
      ],
      explanation: {
        el:
          'Η ελαφρόπετρα επιπλέει. Ταξιδεύει με το νερό, και όπου φτάνει αφήνει ημερομηνία.',
        en:
          'Pumice floats. It travels with the water, and wherever it lands it leaves a date ' +
          'behind.',
      },
    },
  },
];

export const trails: Trail[] = [
  {
    id: 'heraklion-minoan-day',
    cityId: 'heraklion',
    emoji: '🐂',
    name: { el: 'Μινωική μέρα', en: 'A Minoan day' },
    promise: {
      el: 'Το ανάκτορο, τα πράγματά του, το λιμάνι του και το βουνό που το έβλεπε.',
      en: 'The palace, its belongings, its harbour and the mountain that watched it.',
    },
    placeIds: [
      'heraklion-knossos',
      'heraklion-archaeological-museum',
      'heraklion-amnisos',
      'heraklion-juktas',
    ],
  },
  {
    id: 'heraklion-after-the-minoans',
    cityId: 'heraklion',
    emoji: '🦁',
    name: { el: 'Μετά τους Μινωίτες', en: 'After the Minoans' },
    promise: {
      el: 'Βενετοί, νερό από μακριά, δύο πίνακες ενός Κρητικού και τα χαρτιά ενός συγγραφέα.',
      en: 'Venetians, water from far away, two paintings by a Cretan and a writer’s papers.',
    },
    placeIds: [
      'heraklion-koules',
      'heraklion-morosini-fountain',
      'heraklion-loggia',
      'heraklion-historical-museum',
      'heraklion-kazantzakis-museum',
    ],
  },
  {
    id: 'heraklion-living-crete',
    cityId: 'heraklion',
    emoji: '🐠',
    name: { el: 'Η Κρήτη που ζει τώρα', en: 'The Crete that is alive now' },
    promise: {
      el: 'Ένα δωμάτιο που σείεται, δύο χιλιάδες κυβικά θάλασσα και ένα γεμάτο γήπεδο.',
      en: 'A room that shakes, two thousand cubic metres of sea, and a full stadium.',
    },
    placeIds: [
      'heraklion-natural-history-museum',
      'heraklion-cretaquarium',
      'heraklion-pankritio-stadium',
    ],
  },
];
