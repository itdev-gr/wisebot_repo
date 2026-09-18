/**
 * WiseBot World — Florence.
 *
 * Sixteen places, two of them museums with an interior. Florence is not in the old
 * Explorer, so this city was written fresh rather than converted.
 *
 * Every coordinate is copied from `data/world/coords/florence.json`, field for field, and
 * `location.map` is projected from it onto the bounds declared in `countries/italy.ts`.
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
  // ---------------------------------------------------------------------- duomo
  {
    id: 'florence-duomo',
    cityId: 'florence',
    emoji: '⛪',
    category: 'landmark',
    difficulty: 1,

    name: { el: 'Ο Καθεδρικός και ο τρούλος του', en: 'The Cathedral and its dome' },
    tagline: {
      el: 'Ένας τρούλος που κανείς δεν ήξερε πώς να χτίσει',
      en: 'A dome that nobody knew how to build',
    },
    story: {
      el:
        'Ο καθεδρικός της Φλωρεντίας άρχισε να χτίζεται το 1296. Οι χτίστες άφησαν στην ' +
        'κορυφή ένα τεράστιο στρογγυλό άνοιγμα για τρούλο, αλλά υπήρχε ένα πρόβλημα: κανείς ' +
        'δεν ήξερε πώς να τον χτίσει. Ήταν τόσο φαρδύς που δεν υπήρχαν αρκετά μεγάλα δέντρα ' +
        'για να φτιάξουν το ξύλινο καλούπι που στήριζε τότε κάθε καμάρα όσο στέγνωνε. Για ' +
        'δεκαετίες η εκκλησία έμεινε ανοιχτή στη βροχή. Τότε ένας χρυσοχόος, ο Μπρουνελέσκι, ' +
        'είπε ότι μπορεί να τον χτίσει χωρίς καλούπι. Έφτιαξε δύο τρούλους, τον έναν μέσα ' +
        'στον άλλο, και έβαλε τα τούβλα σε ένα έξυπνο σχέδιο που κρατούσε τον εαυτό του ' +
        'καθώς ανέβαινε. Εφεύρε ακόμα και μηχανές για να σηκώνει τις πέτρες. Ο τρούλος ' +
        'τελείωσε το 1436 και είναι ακόμα ο μεγαλύτερος τρούλος από τούβλα στον κόσμο. ' +
        'Ανάμεσα στους δύο τρούλους ανεβαίνει μια σκάλα ως την κορυφή.',
      en:
        'Florence Cathedral was begun in 1296. The builders left an enormous round opening at ' +
        'the top for a dome, but there was a problem: nobody knew how to build it. It was so ' +
        'wide that there were no trees big enough to make the wooden frame that held up every ' +
        'arch in those days while it set. For decades the church stood open to the rain. Then ' +
        'a goldsmith, Brunelleschi, said he could build it without a frame. He made two domes, ' +
        'one inside the other, and laid the bricks in a clever pattern that held itself up as ' +
        'it rose. He even invented machines to lift the stones. The dome was finished in 1436 ' +
        'and is still the largest brick dome in the world. Between the two domes a staircase ' +
        'climbs all the way to the top.',
    },
    facts: [
      {
        el: 'Ο καθεδρικός άρχισε να χτίζεται το 1296.',
        en: 'The cathedral was begun in 1296.',
      },
      {
        el: 'Ο τρούλος τελείωσε το 1436 και είναι ο μεγαλύτερος από τούβλα στον κόσμο.',
        en: 'The dome was finished in 1436 and is the largest brick dome in the world.',
      },
      {
        el: 'Είναι στην πραγματικότητα δύο τρούλοι, ο ένας μέσα στον άλλο.',
        en: 'It is really two domes, one inside the other.',
      },
    ],
    location: {
      lat: 43.77306,
      lng: 11.25694,
      anchor: 'centroid',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q191739', deltaM: 0 },
        { kind: 'osm', ref: 'way/43768260', deltaM: 30 },
        { kind: 'wikipedia', ref: 'Florence Cathedral', deltaM: 1 },
      ],
      verifiedAt: '2026-09-18',
      note: 'The cathedral item. Brunelleschi’s dome has its own (Q3699556), but its point sits 12 m from Giotto’s bell tower, so the dome is told here rather than seeded as a second pin.',
      map: { x: 0.497, y: 0.331 },
    },
    question: {
      q: { el: 'Πώς έχτισε ο Μπρουνελέσκι τον τρούλο;', en: 'How did Brunelleschi build the dome?' },
      answers: [
        { el: 'Χωρίς ξύλινο καλούπι από κάτω', en: 'Without a wooden frame underneath' },
        { el: 'Με γυαλί', en: 'With glass' },
        { el: 'Από μάρμαρο μόνο', en: 'Out of marble only' },
        {
          el: 'Τον έφτιαξε κάτω στο έδαφος και μετά τον σήκωσαν με σχοινιά',
          en: 'He built it on the ground and then it was hoisted up with ropes',
        },
      ],
      explanation: {
        el: 'Δεν υπήρχαν τόσο μεγάλα δέντρα. Τα τούβλα του, σε έξυπνο σχέδιο, κρατούσαν μόνα τους.',
        en: 'There were no trees that big. His bricks, in a clever pattern, held themselves up.',
      },
    },
  },

  // ------------------------------------------------------------------ campanile
  {
    id: 'florence-campanile',
    cityId: 'florence',
    emoji: '🔔',
    category: 'landmark',
    difficulty: 2,

    name: { el: 'Το καμπαναριό του Τζόττο', en: 'Giotto’s bell tower' },
    tagline: {
      el: 'Ένας πύργος ντυμένος με άσπρο, πράσινο και ροζ μάρμαρο',
      en: 'A tower dressed in white, green and pink marble',
    },
    story: {
      el:
        'Δίπλα στον καθεδρικό στέκεται ένα ψηλό, ίσιο καμπαναριό, σχεδόν ογδόντα πέντε μέτρα. ' +
        'Το σχεδίασε το 1334 ο Τζόττο, ένας ζωγράφος τόσο διάσημος που η πόλη του ζήτησε να ' +
        'γίνει και αρχιτέκτονας. Ο Τζόττο πέθανε τρία χρόνια αργότερα, όταν ο πύργος είχε ' +
        'φτάσει μόνο στον πρώτο όροφο, και άλλοι τεχνίτες τον τελείωσαν. Όλος ο πύργος είναι ' +
        'ντυμένος με μάρμαρο σε τρία χρώματα, άσπρο, πράσινο και ροζ, όπως ο καθεδρικός. Στο ' +
        'κάτω μέρος υπάρχουν μικρά εξάγωνα ανάγλυφα που δείχνουν τις δουλειές των ανθρώπων: ' +
        'έναν υφαντή, έναν γιατρό, έναν ναυτικό, έναν αγρότη που οργώνει, ακόμα και έναν άντρα ' +
        'που προσπαθεί να πετάξει. Αυτά που βλέπεις είναι αντίγραφα· τα αληθινά φυλάγονται σε ' +
        'μουσείο. Ο πύργος δεν έχει ανελκυστήρα. Για να φτάσεις στην κορυφή ανεβαίνεις ' +
        'τετρακόσια δεκατέσσερα σκαλοπάτια με τα πόδια.',
      en:
        'Beside the cathedral stands a tall, straight bell tower, almost eighty-five metres ' +
        'high. It was designed in 1334 by Giotto, a painter so famous that the city asked him ' +
        'to become an architect as well. Giotto died three years later, when the tower had ' +
        'only reached its first storey, and other craftsmen finished it. The whole tower is ' +
        'dressed in marble of three colours, white, green and pink, like the cathedral. Near ' +
        'the bottom there are small six-sided carvings showing the work people do: a weaver, ' +
        'a doctor, a sailor, a farmer ploughing, even a man trying to fly. The ones you see ' +
        'are copies; the real ones are kept in a museum. The tower has no lift. To reach the ' +
        'top you climb four hundred and fourteen steps on foot.',
    },
    facts: [
      {
        el: 'Το σχεδίασε ο ζωγράφος Τζόττο το 1334.',
        en: 'It was designed by the painter Giotto in 1334.',
      },
      {
        el: 'Είναι σχεδόν 85 μέτρα ψηλό.',
        en: 'It is almost 85 metres tall.',
      },
      {
        el: 'Έχει 414 σκαλοπάτια και κανέναν ανελκυστήρα.',
        en: 'It has 414 steps and no lift.',
      },
    ],
    location: {
      lat: 43.77281,
      lng: 11.25581,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q1140023', deltaM: 0 },
        { kind: 'osm', ref: 'way/251650632', deltaM: 10 },
        { kind: 'wikipedia', ref: 'Giotto\'s Campanile', deltaM: 47 },
      ],
      verifiedAt: '2026-09-18',
      map: { x: 0.446, y: 0.341 },
    },
    question: {
      q: { el: 'Τι δείχνουν τα μικρά εξάγωνα ανάγλυφα;', en: 'What do the small six-sided carvings show?' },
      answers: [
        { el: 'Τις δουλειές των ανθρώπων', en: 'The work that people do' },
        { el: 'Ζώα', en: 'Animals' },
        { el: 'Τους βασιλιάδες', en: 'Kings and queens' },
        {
          el: 'Τα πρόσωπα όλων των τεχνιτών που δούλεψαν στον πύργο',
          en: 'The faces of all the craftsmen who worked on the tower',
        },
      ],
      explanation: {
        el: 'Έναν υφαντή, έναν γιατρό, έναν αγρότη, ακόμα και έναν άντρα που προσπαθεί να πετάξει.',
        en: 'A weaver, a doctor, a farmer, even a man trying to fly.',
      },
    },
  },

  // ----------------------------------------------------------------- battistero
  {
    id: 'florence-battistero',
    cityId: 'florence',
    emoji: '🚪',
    category: 'art',
    difficulty: 2,

    name: { el: 'Το Βαπτιστήριο', en: 'The Baptistery' },
    tagline: {
      el: 'Χρυσές πόρτες τόσο όμορφες που τις είπαν «Πύλες του Παραδείσου»',
      en: 'Golden doors so beautiful they were called the Gates of Paradise',
    },
    story: {
      el:
        'Μπροστά στον καθεδρικό υπάρχει ένα οκταγωνικό κτίριο, δηλαδή με οκτώ πλευρές, ντυμένο ' +
        'με άσπρο και πράσινο μάρμαρο. Είναι από τα πιο παλιά κτίρια της πόλης, και εδώ ' +
        'βαφτίζονταν για αιώνες τα παιδιά της Φλωρεντίας, ανάμεσά τους και ο ποιητής Δάντης. ' +
        'Το 1401 η πόλη έκανε έναν διαγωνισμό για καινούργιες χάλκινες πόρτες. Ανάμεσα στους ' +
        'διαγωνιζόμενους ήταν ο Γκιμπέρτι και ο Μπρουνελέσκι. Κέρδισε ο Γκιμπέρτι, και ο ' +
        'Μπρουνελέσκι στράφηκε στην αρχιτεκτονική, όπου αργότερα έχτισε τον μεγάλο τρούλο. Ο ' +
        'Γκιμπέρτι δούλεψε πάνω από είκοσι χρόνια σε εκείνες τις πόρτες, και μετά άλλα τόσα ' +
        'σε ένα δεύτερο ζευγάρι, χρυσωμένο, με δέκα σκηνές από την Αγία Γραφή. Λέγεται ότι ο ' +
        'Μιχαήλ Άγγελος τις είπε «Πύλες του Παραδείσου», και το όνομα έμεινε. Αυτές που ' +
        'βλέπεις σήμερα έξω είναι αντίγραφα· οι αληθινές φυλάγονται σε μουσείο δίπλα.',
      en:
        'In front of the cathedral stands an octagonal building, one with eight sides, dressed ' +
        'in white and green marble. It is one of the oldest buildings in the city, and for ' +
        'centuries the children of Florence were baptised here, among them the poet Dante. In ' +
        '1401 the city held a competition for new bronze doors. Among the competitors were ' +
        'Ghiberti and Brunelleschi. Ghiberti won, and Brunelleschi turned to architecture, ' +
        'where he later built the great dome. Ghiberti worked for more than twenty years on ' +
        'those doors, and then as long again on a second pair, gilded, with ten scenes from ' +
        'the Bible. It is said that Michelangelo called them the Gates of Paradise, and the ' +
        'name stuck. The ones you see outside today are copies; the real ones are kept in a ' +
        'museum next door.',
    },
    facts: [
      {
        el: 'Έχει οκτώ πλευρές και είναι από τα πιο παλιά κτίρια της πόλης.',
        en: 'It has eight sides and is one of the oldest buildings in the city.',
      },
      {
        el: 'Εδώ βαφτίστηκε ο ποιητής Δάντης.',
        en: 'The poet Dante was baptised here.',
      },
      {
        el: 'Οι χρυσές πόρτες έξω είναι αντίγραφα· οι αληθινές είναι σε μουσείο.',
        en: 'The golden doors outside are copies; the real ones are in a museum.',
      },
    ],
    location: {
      lat: 43.77306,
      lng: 11.255,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q732511', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Florence Baptistery', deltaM: 4 },
      ],
      verifiedAt: '2026-09-18',
      map: { x: 0.409, y: 0.331 },
    },
    question: {
      q: { el: 'Τι έκανε ο Μπρουνελέσκι όταν έχασε τον διαγωνισμό;', en: 'What did Brunelleschi do after losing the competition?' },
      answers: [
        { el: 'Στράφηκε στην αρχιτεκτονική', en: 'He turned to architecture' },
        { el: 'Έφυγε', en: 'He left' },
        { el: 'Έγινε ζωγράφος', en: 'He became a painter' },
        {
          el: 'Έφτιαξε κρυφά τις δικές του πόρτες για την πίσω είσοδο',
          en: 'He secretly made his own doors for the back entrance',
        },
      ],
      explanation: {
        el: 'Και καλά έκανε: αργότερα έχτισε τον μεγάλο τρούλο του καθεδρικού, λίγα βήματα πιο πέρα.',
        en: 'Just as well: later he built the cathedral’s great dome, a few steps away.',
      },
    },
  },

  // -------------------------------------------------------------- ponte vecchio
  {
    id: 'florence-ponte-vecchio',
    cityId: 'florence',
    emoji: '💍',
    category: 'landmark',
    difficulty: 1,

    name: { el: 'Πόντε Βέκιο', en: 'The Ponte Vecchio' },
    tagline: {
      el: 'Μια γέφυρα με σπίτια και κοσμηματοπωλεία πάνω της',
      en: 'A bridge with houses and jewellers’ shops on top',
    },
    story: {
      el:
        'Πόντε Βέκιο σημαίνει «Παλιά Γέφυρα», και είναι πράγματι η πιο παλιά γέφυρα της ' +
        'Φλωρεντίας πάνω από τον ποταμό Άρνο. Η σημερινή χτίστηκε το 1345. Το παράξενο είναι ' +
        'ότι πάνω της υπάρχουν μικρά σπίτια και μαγαζιά, που κρέμονται πάνω από το νερό σαν ' +
        'κουτιά. Στην αρχή εδώ δούλευαν χασάπηδες, που πετούσαν τα απορρίμματα στο ποτάμι. Το ' +
        '1593 ο άρχοντας της πόλης βαρέθηκε τη μυρωδιά και διέταξε να φύγουν, και στη θέση ' +
        'τους μπήκαν χρυσοχόοι. Από τότε η γέφυρα γυαλίζει από κοσμήματα. Πάνω από τα μαγαζιά ' +
        'περνάει ένας κλειστός διάδρομος. Τον έφτιαξε η πλούσια οικογένεια των Μεδίκων για να ' +
        'πηγαίνουν από το ένα παλάτι τους στο άλλο χωρίς να περπατούν ανάμεσα στον κόσμο. Στον ' +
        'πόλεμο του 1944 ήταν η μόνη γέφυρα της Φλωρεντίας που δεν γκρεμίστηκε.',
      en:
        'Ponte Vecchio means "Old Bridge", and it really is the oldest bridge in Florence over ' +
        'the river Arno. The present one was built in 1345. The strange thing is that there ' +
        'are little houses and shops on it, hanging out over the water like boxes. At first ' +
        'butchers worked here, and they threw their scraps into the river. In 1593 the ruler ' +
        'of the city had had enough of the smell and ordered them out, and goldsmiths moved ' +
        'in instead. Ever since, the bridge has sparkled with jewellery. Above the shops runs ' +
        'a covered corridor. The rich Medici family had it built so they could go from one of ' +
        'their palaces to the other without walking among the crowds. In the war of 1944 it ' +
        'was the only bridge in Florence that was not destroyed.',
    },
    facts: [
      {
        el: 'Η σημερινή γέφυρα χτίστηκε το 1345.',
        en: 'The present bridge was built in 1345.',
      },
      {
        el: 'Το 1593 οι χασάπηδες έδωσαν τη θέση τους στους χρυσοχόους.',
        en: 'In 1593 the butchers made way for goldsmiths.',
      },
      {
        el: 'Ένας κλειστός διάδρομος των Μεδίκων περνάει πάνω από τα μαγαζιά.',
        en: 'A covered corridor built for the Medici runs above the shops.',
      },
    ],
    location: {
      lat: 43.76799,
      lng: 11.25319,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q208633', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Ponte Vecchio', deltaM: 2 },
      ],
      verifiedAt: '2026-09-18',
      map: { x: 0.327, y: 0.542 },
    },
    question: {
      q: { el: 'Γιατί έφυγαν οι χασάπηδες από τη γέφυρα;', en: 'Why did the butchers have to leave the bridge?' },
      answers: [
        { el: 'Ο άρχοντας βαρέθηκε τη μυρωδιά', en: 'The ruler was tired of the smell' },
        { el: 'Πλημμύρα', en: 'A flood' },
        { el: 'Ήταν πολύ ακριβή', en: 'It was too expensive' },
        {
          el: 'Γιατί η γέφυρα θα γινόταν πεζόδρομος μόνο για παιδιά',
          en: 'Because the bridge was going to become a street just for children',
        },
      ],
      explanation: {
        el: 'Πετούσαν τα απορρίμματα στο ποτάμι. Στη θέση τους μπήκαν χρυσοχόοι, που μένουν ως σήμερα.',
        en: 'They threw scraps into the river. Goldsmiths replaced them, and are still there today.',
      },
    },
  },

  // --------------------------------------------------------------------- uffizi
  {
    id: 'florence-uffizi',
    cityId: 'florence',
    emoji: '🖼️',
    category: 'museum',
    difficulty: 2,

    name: { el: 'Πινακοθήκη Ουφίτσι', en: 'The Uffizi Gallery' },
    tagline: {
      el: 'Γραφεία που έγιναν ένα από τα πιο διάσημα μουσεία του κόσμου',
      en: 'Offices that became one of the most famous museums in the world',
    },
    story: {
      el:
        'Ουφίτσι σημαίνει «γραφεία». Το μακρύ κτίριο σε σχήμα πέταλου χτίστηκε το 1560 για ' +
        'να δουλεύουν εκεί οι υπάλληλοι που κυβερνούσαν τη Φλωρεντία για λογαριασμό των ' +
        'Μεδίκων, της πιο ισχυρής οικογένειας της πόλης. Οι Μέδικοι ήταν τραπεζίτες και ' +
        'αγόραζαν τέχνη για τρεις αιώνες: πίνακες, αγάλματα, παράξενα αντικείμενα από όλο τον ' +
        'κόσμο. Στον πάνω όροφο των γραφείων άρχισαν να κρεμούν τους πίνακες τους, και σιγά ' +
        'σιγά το κτίριο έγινε μουσείο. Η τελευταία από την οικογένεια, η Άννα Μαρία Λουίζα, ' +
        'έκανε το 1737 κάτι πολύ σημαντικό. Άφησε ολόκληρη τη συλλογή στην πόλη, με έναν όρο: ' +
        'κανένα έργο να μη φύγει ποτέ από τη Φλωρεντία, για να το βλέπουν όλοι. Χάρη σε αυτή ' +
        'την υπόσχεση, οι πίνακες είναι ακόμα εδώ. Από τα παράθυρα του μουσείου βλέπεις και ' +
        'το ποτάμι και την Πόντε Βέκιο.',
      en:
        'Uffizi means "offices". The long, horseshoe-shaped building was put up in 1560 for ' +
        'the officials who ran Florence on behalf of the Medici, the most powerful family in ' +
        'the city. The Medici were bankers, and they bought art for three centuries: paintings, ' +
        'statues, curious objects from all over the world. They began hanging their pictures ' +
        'on the top floor of the offices, and little by little the building became a museum. ' +
        'The last of the family, Anna Maria Luisa, did something very important in 1737. She ' +
        'left the whole collection to the city, on one condition: that no work should ever ' +
        'leave Florence, so that everyone could see it. Thanks to that promise, the paintings ' +
        'are still here. From the museum’s windows you can also see the river and the Ponte ' +
        'Vecchio.',
    },
    facts: [
      {
        el: '«Ουφίτσι» σημαίνει «γραφεία».',
        en: '"Uffizi" means "offices".',
      },
      {
        el: 'Το κτίριο χτίστηκε το 1560.',
        en: 'The building was put up in 1560.',
      },
      {
        el: 'Το 1737 η τελευταία των Μεδίκων άφησε τη συλλογή στην πόλη.',
        en: 'In 1737 the last of the Medici left the collection to the city.',
      },
    ],
    location: {
      lat: 43.76833,
      lng: 11.25528,
      anchor: 'centroid',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q51252', deltaM: 0 },
        { kind: 'osm', ref: 'way/477279033', deltaM: 17 },
        { kind: 'wikipedia', ref: 'Uffizi', deltaM: 4 },
      ],
      verifiedAt: '2026-09-18',
      note: 'The palace-and-museum item, not the institution (Q16335227).',
      map: { x: 0.422, y: 0.528 },
    },
    question: {
      q: { el: 'Ποιον όρο έβαλε η Άννα Μαρία Λουίζα;', en: 'What condition did Anna Maria Luisa set?' },
      answers: [
        { el: 'Κανένα έργο να μη φύγει από την πόλη', en: 'No work may ever leave the city' },
        { el: 'Καμία', en: 'None' },
        { el: 'Να μπαίνουν μόνο παιδιά', en: 'Only children may enter' },
        {
          el: 'Να κρεμαστεί το δικό της πορτρέτο πρώτο, στην είσοδο του μουσείου',
          en: 'That her own portrait be hung first, at the museum’s entrance',
        },
      ],
      explanation: {
        el: 'Άφησε τη συλλογή στην πόλη για να τη βλέπουν όλοι, και γι’ αυτό είναι ακόμα εδώ.',
        en: 'She left the collection to the city for everyone to see, which is why it is still here.',
      },
    },

    museum: {
      doorNote: {
        el: 'Ψάξε πρώτα τη θεά πάνω στο κοχύλι. Είναι στην αίθουσα του Μποτιτσέλι.',
        en: 'Look for the goddess on the shell first. She is in the Botticelli room.',
      },
      rooms: [
        {
          id: 'florence-uffizi-botticelli',
          emoji: '🐚',
          name: { el: 'Θεοί, άγγελοι και λουλούδια', en: 'Gods, angels and flowers' },
          intro: {
            el:
              'Σε αυτές τις αίθουσες θα δεις πίνακες που ζωγραφίστηκαν στη Φλωρεντία τον 15ο ' +
              'αιώνα, όταν οι ζωγράφοι ξαναθυμήθηκαν τις ιστορίες των αρχαίων Ελλήνων και ' +
              'Ρωμαίων. Τα χρώματα είναι φωτεινά και τα πρόσωπα ήρεμα. Κοίτα από κοντά: ' +
              'μέσα στο χορτάρι και στα φορέματα κρύβονται δεκάδες μικρά λουλούδια.',
            en:
              'In these rooms you will see paintings made in Florence in the 15th century, ' +
              'when painters rediscovered the stories of the ancient Greeks and Romans. The ' +
              'colours are bright and the faces calm. Look closely: dozens of tiny flowers ' +
              'are hidden in the grass and on the dresses.',
          },
          exhibits: [
            {
              id: 'florence-uffizi-venus',
              name: { el: 'Η Γέννηση της Αφροδίτης', en: 'The Birth of Venus' },
              blurb: {
                el:
                  'Ο Μποτιτσέλι ζωγράφισε αυτόν τον πίνακα γύρω στο 1485. Δείχνει την Αφροδίτη, ' +
                  'τη θεά της ομορφιάς, τη στιγμή που φτάνει στη στεριά όρθια πάνω σε ένα ' +
                  'τεράστιο κοχύλι. Αριστερά, δύο φτερωτοί άνεμοι φυσάνε και τη σπρώχνουν προς ' +
                  'την ακτή, και γύρω τους πέφτουν τριαντάφυλλα. Δεξιά, μια κοπέλα τρέχει να τη ' +
                  'σκεπάσει με έναν μανδύα γεμάτο λουλούδια. Κοίτα τη θάλασσα: τα κύματα είναι ' +
                  'μικρά σημαδάκια σε σχήμα V, σαν να τα ζωγράφισε ένα παιδί.',
                en:
                  'Botticelli painted this picture around 1485. It shows Venus, the goddess of ' +
                  'beauty, arriving on land standing on a huge shell. On the left, two winged ' +
                  'winds blow and push her towards the shore, and roses fall around them. On ' +
                  'the right, a young woman hurries to wrap her in a cloak covered in flowers. ' +
                  'Look at the sea: the waves are little V-shaped marks, as if a child had ' +
                  'drawn them.',
              },
              question: {
                q: { el: 'Πάνω σε τι στέκεται η θεά;', en: 'What is the goddess standing on?' },
                answers: [
                  { el: 'Σε ένα τεράστιο κοχύλι', en: 'On a huge sea shell' },
                  { el: 'Βράχο', en: 'A rock' },
                  { el: 'Σε μια βάρκα', en: 'In a small boat' },
                  {
                    el: 'Στην πλάτη ενός δελφινιού που κολυμπάει προς την ακτή',
                    en: 'On the back of a dolphin swimming towards the shore',
                  },
                ],
                explanation: {
                  el: 'Δύο φτερωτοί άνεμοι σπρώχνουν το κοχύλι της προς τη στεριά.',
                  en: 'Two winged winds push her shell towards the land.',
                },
              },
            },
            {
              id: 'florence-uffizi-primavera',
              name: { el: 'Η Άνοιξη', en: 'Primavera (Spring)' },
              blurb: {
                el:
                  'Κι αυτός ο πίνακας είναι του Μποτιτσέλι. Σε έναν κήπο με πορτοκαλιές ' +
                  'στέκονται θεοί και νύμφες, και στη μέση η Αφροδίτη. Από πάνω ένας μικρός ' +
                  'φτερωτός Έρωτας σημαδεύει με το τόξο του με δεμένα μάτια. Το πιο εντυπωσιακό ' +
                  'είναι το χορτάρι: οι βοτανολόγοι έχουν αναγνωρίσει εκεί πάνω από εκατό ' +
                  'διαφορετικά είδη φυτών, ζωγραφισμένα τόσο προσεκτικά που μπορείς να τα ' +
                  'ονομάσεις. Μια νύμφη στα δεξιά έχει λουλούδια να βγαίνουν από το στόμα της, ' +
                  'καθώς γίνεται η θεά της άνοιξης.',
                en:
                  'This painting is by Botticelli too. In a garden of orange trees stand gods ' +
                  'and nymphs, with Venus in the middle. Above her a little winged Cupid takes ' +
                  'aim with his bow, blindfolded. The most amazing part is the grass: botanists ' +
                  'have identified more than a hundred different kinds of plant there, painted ' +
                  'so carefully that you can name them. A nymph on the right has flowers coming ' +
                  'out of her mouth as she turns into the goddess of spring.',
              },
              question: {
                q: { el: 'Τι έχουν βρει οι βοτανολόγοι σε αυτόν τον πίνακα;', en: 'What have botanists found in this painting?' },
                answers: [
                  { el: 'Πάνω από εκατό είδη φυτών', en: 'Over a hundred kinds of plant' },
                  { el: 'Ένα λάθος', en: 'A mistake' },
                  { el: 'Ένα κρυμμένο ζώο', en: 'A hidden animal' },
                  {
                    el: 'Αληθινά αποξηραμένα λουλούδια κολλημένα πάνω στον καμβά',
                    en: 'Real dried flowers glued on top of the canvas',
                  },
                ],
                explanation: {
                  el: 'Ζωγραφισμένα τόσο προσεκτικά που μπορείς να πεις το όνομα του καθενός.',
                  en: 'Painted so carefully that you can tell the name of each one.',
                },
              },
            },
            {
              id: 'florence-uffizi-annunciation',
              name: { el: 'Ο Ευαγγελισμός του Λεονάρντο', en: 'Leonardo’s Annunciation' },
              blurb: {
                el:
                  'Αυτός ο πίνακας είναι από τους πρώτους του Λεονάρντο ντα Βίντσι. Τον ζωγράφισε ' +
                  'όταν ήταν περίπου είκοσι χρονών και ακόμα μαθητευόμενος στο εργαστήριο ενός ' +
                  'δασκάλου στη Φλωρεντία. Ένας άγγελος γονατίζει σε έναν κήπο και φέρνει ένα ' +
                  'μήνυμα στη Μαρία. Κοίτα τα φτερά του: ο Λεονάρντο τα ζωγράφισε σαν φτερά ' +
                  'αληθινού πουλιού, γιατί του άρεσε να παρατηρεί τη φύση. Αργότερα γέμισε ' +
                  'τετράδια με σχέδια πουλιών και μηχανών που πετούν. Στο βάθος, ένα βουνό ' +
                  'χάνεται μέσα σε γαλάζια ομίχλη.',
                en:
                  'This is one of Leonardo da Vinci’s first paintings. He painted it when he was ' +
                  'about twenty and still an apprentice in a master’s workshop in Florence. An ' +
                  'angel kneels in a garden and brings a message to Mary. Look at the wings: ' +
                  'Leonardo painted them like the wings of a real bird, because he loved to ' +
                  'watch nature. Later he filled notebooks with drawings of birds and flying ' +
                  'machines. In the background, a mountain fades into blue mist.',
              },
              question: {
                q: { el: 'Πόσο χρονών ήταν ο Λεονάρντο όταν τον ζωγράφισε;', en: 'How old was Leonardo when he painted it?' },
                answers: [
                  { el: 'Περίπου είκοσι χρονών', en: 'About twenty years old' },
                  { el: 'Εννιά', en: 'Nine' },
                  { el: 'Πενήντα χρονών', en: 'Fifty years old' },
                  {
                    el: 'Πάνω από εβδομήντα, λίγο πριν σταματήσει να ζωγραφίζει',
                    en: 'Over seventy, shortly before he stopped painting for good',
                  },
                ],
                explanation: {
                  el: 'Ήταν ακόμα μαθητευόμενος. Τα φτερά του αγγέλου δείχνουν ήδη πόσο παρατηρούσε τα πουλιά.',
                  en: 'He was still an apprentice. The angel’s wings already show how closely he watched birds.',
                },
              },
            },
          ],
        },
        {
          id: 'florence-uffizi-faces',
          emoji: '🪞',
          name: { el: 'Πρόσωπα και ιστορίες', en: 'Faces and stories' },
          intro: {
            el:
              'Εδώ οι πίνακες δείχνουν ανθρώπους που έζησαν πραγματικά, και οικογένειες ' +
              'όπως τις φαντάζονταν οι ζωγράφοι. Κάθε έργο κρύβει μια μικρή ιστορία: γιατί ' +
              'ένα πρόσωπο κοιτάζει στο πλάι, γιατί ένας πίνακας είναι στρογγυλός, ή πώς ' +
              'ένας άλλος σώθηκε αφού έσπασε σε κομμάτια.',
            en:
              'Here the paintings show people who really lived, and families as the painters ' +
              'imagined them. Each work hides a small story: why a face looks sideways, why a ' +
              'painting is round, or how another one was saved after breaking into pieces.',
          },
          exhibits: [
            {
              id: 'florence-uffizi-urbino',
              name: { el: 'Ο Δούκας και η Δούκισσα του Ουρμπίνο', en: 'The Duke and Duchess of Urbino' },
              blurb: {
                el:
                  'Δύο πορτρέτα, το ένα απέναντι στο άλλο, σαν να κοιτάζονται ο άντρας και η ' +
                  'γυναίκα. Και οι δύο φαίνονται από το πλάι. Ο δούκας είχε χάσει το δεξί του ' +
                  'μάτι σε έναν αγώνα ιππασίας, γι’ αυτό ο ζωγράφος τον έδειξε πάντα από την ' +
                  'αριστερή πλευρά. Προσέξτε τη μύτη του: έχει ένα σπάσιμο στη μέση. Πίσω τους ' +
                  'απλώνεται ένα τοπίο με λόφους, ποτάμια και βάρκες, τόσο μακρύ που μοιάζει να ' +
                  'μην τελειώνει. Στην πίσω πλευρά του πίνακα υπάρχουν κι άλλες ζωγραφιές.',
                en:
                  'Two portraits facing each other, as if the husband and wife were looking at ' +
                  'one another. Both are shown from the side. The duke had lost his right eye in ' +
                  'a jousting contest, so the painter always showed him from the left. Notice ' +
                  'his nose: it has a dip in the middle. Behind them stretches a landscape of ' +
                  'hills, rivers and boats, so long it seems never to end. On the back of the ' +
                  'panels there are more paintings.',
              },
              question: {
                q: { el: 'Γιατί ο δούκας φαίνεται μόνο από την αριστερή πλευρά;', en: 'Why is the duke shown only from the left?' },
                answers: [
                  { el: 'Είχε χάσει το δεξί του μάτι', en: 'He had lost his right eye' },
                  { el: 'Ντροπή', en: 'Shyness' },
                  { el: 'Ήταν η μόδα', en: 'It was the fashion' },
                  {
                    el: 'Γιατί ο ζωγράφος καθόταν πάντα στην αριστερή πλευρά του δωματίου',
                    en: 'Because the painter always sat on the left side of the room',
                  },
                ],
                explanation: {
                  el: 'Τον έχασε σε αγώνα ιππασίας. Η αριστερή πλευρά ήταν η πλευρά που ήθελε να φαίνεται.',
                  en: 'He lost it in a jousting contest. The left was the side he wanted shown.',
                },
              },
            },
            {
              id: 'florence-uffizi-doni',
              name: { el: 'Ο στρογγυλός πίνακας του Μιχαήλ Αγγέλου', en: 'Michelangelo’s round painting' },
              blurb: {
                el:
                  'Ο Μιχαήλ Άγγελος θεωρούσε τον εαυτό του γλύπτη, όχι ζωγράφο. Αυτός ο ' +
                  'στρογγυλός πίνακας είναι ο μόνος τελειωμένος πίνακας σε ξύλο που έχει μείνει ' +
                  'από αυτόν στη Φλωρεντία. Δείχνει μια οικογένεια: τη Μαρία, τον Ιωσήφ και το ' +
                  'μωρό. Κοίτα πόσο δυνατά είναι τα χέρια και οι ώμοι τους, σαν αγάλματα. Ο ' +
                  'Μιχαήλ Άγγελος ζωγράφιζε σαν να σκάλιζε μάρμαρο. Το χρυσό σκαλιστό πλαίσιο ' +
                  'γύρω του είναι επίσης πολύ παλιό και έχει μικρά κεφάλια που κοιτάζουν έξω.',
                en:
                  'Michelangelo thought of himself as a sculptor, not a painter. This round ' +
                  'picture is the only finished painting on wood by him left in Florence. It ' +
                  'shows a family: Mary, Joseph and the baby. See how strong their arms and ' +
                  'shoulders are, like statues. Michelangelo painted as if he were carving ' +
                  'marble. The carved golden frame around it is very old too, and has little ' +
                  'heads that peer out.',
              },
              question: {
                q: { el: 'Γιατί οι μορφές μοιάζουν με αγάλματα;', en: 'Why do the figures look like statues?' },
                answers: [
                  { el: 'Ο ζωγράφος ήταν πρώτα γλύπτης', en: 'The painter was a sculptor first' },
                  { el: 'Είναι πέτρα', en: 'It is stone' },
                  { el: 'Είναι παγωμένες', en: 'They are frozen' },
                  {
                    el: 'Γιατί ο πίνακας αντιγράφτηκε από ένα άγαλμα που υπάρχει δίπλα',
                    en: 'Because the painting was copied from a statue standing next to it',
                  },
                ],
                explanation: {
                  el: 'Ο Μιχαήλ Άγγελος ζωγράφιζε σαν να σκάλιζε μάρμαρο: δυνατά χέρια, στρογγυλοί ώμοι.',
                  en: 'Michelangelo painted as if carving marble: strong arms, rounded shoulders.',
                },
              },
            },
            {
              id: 'florence-uffizi-goldfinch',
              name: { el: 'Η Παναγία με την καρδερίνα', en: 'The Madonna of the Goldfinch' },
              blurb: {
                el:
                  'Ο Ραφαήλ ζωγράφισε αυτόν τον πίνακα γύρω στο 1506 ως γαμήλιο δώρο για έναν ' +
                  'φίλο του. Δύο μικρά αγόρια παίζουν μπροστά στη Μαρία με ένα μικρό πουλάκι, μια ' +
                  'καρδερίνα. Λίγα χρόνια αργότερα το σπίτι όπου κρεμόταν γκρεμίστηκε, και ο ' +
                  'πίνακας έσπασε σε πολλά κομμάτια. Κάποιος τα μάζεψε και τα ένωσε με καρφιά. ' +
                  'Αιώνες μετά, οι συντηρητές δούλεψαν δέκα χρόνια για να τον καθαρίσουν και να ' +
                  'τον σταθεροποιήσουν, και σήμερα σχεδόν δεν φαίνεται ότι είχε σπάσει.',
                en:
                  'Raphael painted this picture around 1506 as a wedding present for a friend. ' +
                  'Two little boys play in front of Mary with a small bird, a goldfinch. A few ' +
                  'years later the house where it hung collapsed, and the painting broke into ' +
                  'many pieces. Someone gathered them up and joined them with nails. Centuries ' +
                  'later, restorers worked for ten years to clean and steady it, and today you ' +
                  'can hardly tell that it was ever broken.',
              },
              question: {
                q: { el: 'Τι έπαθε αυτός ο πίνακας λίγα χρόνια αφού ζωγραφίστηκε;', en: 'What happened to this painting a few years after it was made?' },
                answers: [
                  { el: 'Έσπασε σε πολλά κομμάτια', en: 'It broke into many pieces' },
                  { el: 'Κλάπηκε', en: 'Stolen' },
                  { el: 'Ξεθώριασε στον ήλιο', en: 'It faded in the sun' },
                  {
                    el: 'Τον έβαψαν από πάνω και έγινε ένας εντελώς άλλος πίνακας',
                    en: 'It was painted over and turned into a completely different picture',
                  },
                ],
                explanation: {
                  el: 'Το σπίτι όπου κρεμόταν γκρεμίστηκε. Οι συντηρητές χρειάστηκαν δέκα χρόνια για να τον σώσουν.',
                  en: 'The house where it hung collapsed. Restorers needed ten years to save it.',
                },
              },
            },
          ],
        },
      ],
      riddles: [
        {
          id: 'florence-uffizi-riddle-1',
          difficulty: 1,
          prompt: {
            el:
              'Δεν ήρθα με πλοίο ούτε με βάρκα. Ήρθα όρθια πάνω σε κάτι που βρίσκεις στην ' +
              'παραλία, και δύο άνεμοι με φύσηξαν ως τη στεριά.',
            en:
              'I did not come by ship or by boat. I came standing on something you find on the ' +
              'beach, and two winds blew me to the shore.',
          },
          hint: { el: 'Είμαι μια θεά.', en: 'I am a goddess.' },
          answerExhibitId: 'florence-uffizi-venus',
        },
        {
          id: 'florence-uffizi-riddle-2',
          difficulty: 2,
          prompt: {
            el:
              'Κάποτε έσπασα σε κομμάτια, όταν έπεσε το σπίτι μου. Με ένωσαν με καρφιά, και ' +
              'ένα μικρό πουλί στο κέντρο μου δεν πέταξε ποτέ μακριά.',
            en:
              'Once I broke into pieces, when my house fell down. They joined me with nails, and ' +
              'a little bird in my middle never flew away.',
          },
          hint: { el: 'Ήμουν γαμήλιο δώρο.', en: 'I was a wedding present.' },
          answerExhibitId: 'florence-uffizi-goldfinch',
        },
        {
          id: 'florence-uffizi-riddle-3',
          difficulty: 3,
          prompt: {
            el:
              'Ο δούκας μας σου δείχνει πάντα την ίδια πλευρά του προσώπου του, και η γυναίκα του τον ' +
              'κοιτάζει από απέναντι. Πίσω μας το τοπίο δεν τελειώνει ποτέ.',
            en:
              'Our duke always shows you the same side of his face, and his wife looks at him from ' +
              'across the way. Behind us the landscape never ends.',
          },
          hint: { el: 'Είμαστε δύο πορτρέτα.', en: 'We are two portraits.' },
          answerExhibitId: 'florence-uffizi-urbino',
        },
      ],
    },
  },

  // ------------------------------------------------------------ palazzo vecchio
  {
    id: 'florence-palazzo-vecchio',
    cityId: 'florence',
    emoji: '🏰',
    category: 'history',
    difficulty: 2,

    name: { el: 'Παλάτσο Βέκιο', en: 'The Palazzo Vecchio' },
    tagline: {
      el: 'Ένα πέτρινο κάστρο που είναι ακόμα το δημαρχείο',
      en: 'A stone castle that is still the town hall',
    },
    story: {
      el:
        'Αυτό το βαρύ πέτρινο κτίριο με τις πολεμίστρες στην κορυφή μοιάζει με κάστρο, και ' +
        'αυτό ήταν ο σκοπός. Άρχισε να χτίζεται το 1299 για να στεγάσει την κυβέρνηση της ' +
        'πόλης και να την προστατεύει. Ο ψηλός πύργος του, σχεδόν εκατό μέτρα, έχει μια ' +
        'καμπάνα που κάποτε καλούσε τους πολίτες να μαζευτούν στην πλατεία. Αργότερα έμεναν ' +
        'εδώ οι Μέδικοι, πριν μετακομίσουν σε ένα πιο άνετο παλάτι απέναντι από το ποτάμι. ' +
        'Τότε το κτίριο πήρε το όνομα «Παλιό Παλάτι». Μέσα υπάρχει μια αίθουσα τεράστια, ' +
        'φτιαγμένη για να χωράει πεντακόσιους άρχοντες, με πίνακες μάχης στους τοίχους και ' +
        'χρυσά ταβάνια. Υπάρχει και μια αίθουσα με ντουλάπια που έχουν ζωγραφισμένους χάρτες ' +
        'όλου του κόσμου στις πόρτες τους. Ακόμα και σήμερα, πάνω από επτακόσια χρόνια μετά, ' +
        'εδώ δουλεύει ο δήμαρχος της Φλωρεντίας.',
      en:
        'This heavy stone building with battlements on top looks like a castle, and that was ' +
        'the idea. It was begun in 1299 to house the city’s government and keep it safe. Its ' +
        'tall tower, almost a hundred metres high, has a bell that once called the citizens ' +
        'to gather in the square. Later the Medici lived here, before they moved to a more ' +
        'comfortable palace across the river. That is when the building got its name, the ' +
        '"Old Palace". Inside there is an enormous hall, made to hold five hundred noblemen, ' +
        'with battle paintings on the walls and golden ceilings. There is also a room with ' +
        'cupboards whose doors are painted with maps of the whole world. Even today, more ' +
        'than seven hundred years later, the mayor of Florence works here.',
    },
    facts: [
      {
        el: 'Άρχισε να χτίζεται το 1299.',
        en: 'It was begun in 1299.',
      },
      {
        el: 'Ο πύργος του είναι σχεδόν εκατό μέτρα ψηλός.',
        en: 'Its tower is almost a hundred metres tall.',
      },
      {
        el: 'Είναι ακόμα το δημαρχείο της Φλωρεντίας.',
        en: 'It is still Florence’s town hall.',
      },
    ],
    location: {
      lat: 43.76944,
      lng: 11.25611,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q271928', deltaM: 0 },
        { kind: 'osm', ref: 'relation/1461712', deltaM: 57 },
        { kind: 'wikipedia', ref: 'Palazzo Vecchio', deltaM: 5 },
      ],
      verifiedAt: '2026-09-18',
      map: { x: 0.460, y: 0.482 },
    },
    question: {
      q: { el: 'Γιατί λέγεται «Παλιό Παλάτι»;', en: 'Why is it called the "Old Palace"?' },
      answers: [
        { el: 'Οι Μέδικοι μετακόμισαν σε καινούργιο', en: 'The Medici moved to a new one' },
        { el: 'Είναι σκονισμένο', en: 'It is dusty' },
        { el: 'Είναι το πιο παλιό', en: 'It is the oldest' },
        {
          el: 'Γιατί εκεί μέσα ζούσαν μόνο οι πιο ηλικιωμένοι κάτοικοι της πόλης',
          en: 'Because only the oldest people in the city were allowed to live there',
        },
      ],
      explanation: {
        el: 'Όταν οι Μέδικοι πήγαν σε ένα νέο παλάτι απέναντι από το ποτάμι, αυτό έγινε το «παλιό».',
        en: 'When the Medici moved to a new palace across the river, this one became the "old" one.',
      },
    },
  },

  // ------------------------------------------------------------------- signoria
  {
    id: 'florence-signoria',
    cityId: 'florence',
    emoji: '🗿',
    category: 'art',
    difficulty: 1,

    name: { el: 'Πλατεία της Σινιορίας', en: 'Piazza della Signoria' },
    tagline: {
      el: 'Μια πλατεία που είναι μουσείο αγαλμάτων στον ανοιχτό αέρα',
      en: 'A square that is an open-air museum of statues',
    },
    story: {
      el:
        'Μπροστά στο Παλάτσο Βέκιο απλώνεται η πιο σημαντική πλατεία της Φλωρεντίας. Εδώ για ' +
        'αιώνες οι πολίτες μαζεύονταν για γιορτές, για ανακοινώσεις και για να μάθουν τα νέα. ' +
        'Σήμερα η πλατεία είναι γεμάτη αγάλματα, τόσα πολλά που μοιάζει με μουσείο χωρίς ' +
        'στέγη. Μπροστά στην πόρτα του παλατιού στέκεται ένας μαρμάρινος Δαβίδ. Είναι ' +
        'αντίγραφο: ο αληθινός του Μιχαήλ Αγγέλου στεκόταν εδώ πάνω από τριακόσια πενήντα ' +
        'χρόνια, μέχρι που τον πήγαν σε μουσείο για να προστατευτεί. Δίπλα υπάρχει ένα ' +
        'μεγάλο σιντριβάνι με τον Ποσειδώνα, τόσο άσπρο που οι Φλωρεντινοί τον έλεγαν κοροϊδευτικά ' +
        '«ο Μεγάλος Ασπρουλιάρης». Υπάρχει και ένα λιοντάρι που ακουμπά το πόδι του σε μια ' +
        'ασπίδα με κρίνο, το σύμβολο της πόλης. Στη μια άκρη, μια ανοιχτή στοά με καμάρες ' +
        'έχει κι άλλα αγάλματα, και μπορείς να περπατήσεις ανάμεσά τους.',
      en:
        'In front of the Palazzo Vecchio lies the most important square in Florence. For ' +
        'centuries citizens gathered here for festivals, for announcements and to hear the ' +
        'news. Today the square is full of statues, so many that it looks like a museum ' +
        'without a roof. In front of the palace door stands a marble David. It is a copy: ' +
        'Michelangelo’s real one stood here for more than three hundred and fifty years, until ' +
        'it was moved to a museum to protect it. Nearby is a large fountain with Neptune, so ' +
        'white that Florentines teasingly called him "the Big White One". There is also a lion ' +
        'resting its paw on a shield with a lily, the symbol of the city. At one side, an ' +
        'open arcade with arches holds more statues, and you can walk among them.',
    },
    facts: [
      {
        el: 'Ο Δαβίδ μπροστά στο παλάτι είναι αντίγραφο.',
        en: 'The David in front of the palace is a copy.',
      },
      {
        el: 'Οι Φλωρεντινοί έλεγαν τον Ποσειδώνα «ο Μεγάλος Ασπρουλιάρης».',
        en: 'Florentines called the Neptune "the Big White One".',
      },
      {
        el: 'Το κρίνο είναι το σύμβολο της Φλωρεντίας.',
        en: 'The lily is the symbol of Florence.',
      },
    ],
    location: {
      lat: 43.76972,
      lng: 11.25556,
      anchor: 'area',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q849846', deltaM: 0 },
        { kind: 'osm', ref: 'way/23298643', deltaM: 35 },
        { kind: 'wikipedia', ref: 'Piazza della Signoria', deltaM: 0 },
      ],
      verifiedAt: '2026-09-18',
      map: { x: 0.435, y: 0.470 },
    },
    question: {
      q: { el: 'Γιατί ο αληθινός Δαβίδ δεν είναι πια στην πλατεία;', en: 'Why is the real David no longer in the square?' },
      answers: [
        { el: 'Τον πήγαν σε μουσείο να προστατευτεί', en: 'It was moved indoors to protect it' },
        { el: 'Κλάπηκε', en: 'Stolen' },
        { el: 'Έσπασε στα δύο', en: 'It broke in two' },
        {
          el: 'Γιατί οι κάτοικοι ψήφισαν να τον αντικαταστήσουν με τον Ποσειδώνα',
          en: 'Because the citizens voted to replace him with the statue of Neptune',
        },
      ],
      explanation: {
        el: 'Η βροχή και ο αέρας τον χαλούσαν. Εδώ στέκεται ένα αντίγραφο, ο αληθινός είναι στην Ακαδημία.',
        en: 'Rain and wind were damaging it. A copy stands here; the real one is in the Accademia.',
      },
    },
  },

  // ------------------------------------------------------------------ accademia
  {
    id: 'florence-accademia',
    cityId: 'florence',
    emoji: '🗽',
    category: 'art',
    difficulty: 1,

    name: { el: 'Ο Δαβίδ στην Ακαδημία', en: 'David at the Accademia' },
    tagline: {
      el: 'Ένα άγαλμα από ένα μάρμαρο που οι άλλοι είχαν παρατήσει',
      en: 'A statue carved from marble that others had given up on',
    },
    story: {
      el:
        'Στη Φλωρεντία υπήρχε ένα τεράστιο κομμάτι μάρμαρο που το είχαν αρχίσει άλλοι γλύπτες ' +
        'και το είχαν παρατήσει. Ήταν ψηλό και στενό, και όλοι πίστευαν ότι είχε χαλάσει. Το ' +
        '1501 το πήρε ένας νεαρός είκοσι έξι χρονών, ο Μιχαήλ Άγγελος, και δούλεψε πάνω του ' +
        'σχεδόν τρία χρόνια. Από αυτό έβγαλε τον Δαβίδ, πάνω από πέντε μέτρα ψηλό, τη στιγμή ' +
        'που κοιτάζει τον γίγαντα Γολιάθ και ετοιμάζεται. Το κεφάλι και τα χέρια του είναι ' +
        'λίγο μεγαλύτερα από το κανονικό, γιατί το άγαλμα αρχικά θα έμπαινε ψηλά και θα το ' +
        'έβλεπες από κάτω. Για αιώνες στεκόταν έξω, στην πλατεία, αλλά το 1873 το έφεραν σε ' +
        'αυτό το μουσείο για να το προστατεύσουν. Στον διάδρομο προς τον Δαβίδ υπάρχουν ' +
        'αγάλματα του Μιχαήλ Αγγέλου που δεν τελείωσαν ποτέ. Μοιάζουν με ανθρώπους που ' +
        'προσπαθούν να βγουν από την πέτρα.',
      en:
        'In Florence there was a huge block of marble that other sculptors had started and ' +
        'then given up on. It was tall and narrow, and everyone thought it was spoiled. In ' +
        '1501 a young man of twenty-six, Michelangelo, took it on and worked on it for almost ' +
        'three years. Out of it he brought David, more than five metres tall, at the moment ' +
        'he looks at the giant Goliath and gets ready. His head and hands are a little bigger ' +
        'than normal, because the statue was first meant to stand high up and be seen from ' +
        'below. For centuries it stood outside in the square, but in 1873 it was brought to ' +
        'this museum to protect it. In the corridor leading to David there are statues by ' +
        'Michelangelo that were never finished. They look like people trying to climb out of ' +
        'the stone.',
    },
    facts: [
      {
        el: 'Ο Μιχαήλ Άγγελος τον άρχισε το 1501, στα είκοσι έξι του.',
        en: 'Michelangelo began it in 1501, at the age of twenty-six.',
      },
      {
        el: 'Ο Δαβίδ είναι πάνω από πέντε μέτρα ψηλός.',
        en: 'David is more than five metres tall.',
      },
      {
        el: 'Μπήκε σε αυτό το μουσείο το 1873.',
        en: 'It was moved into this museum in 1873.',
      },
    ],
    location: {
      lat: 43.77694,
      lng: 11.25889,
      anchor: 'centroid',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q10855544', deltaM: 0 },
        { kind: 'osm', ref: 'node/560308250', deltaM: 11 },
        { kind: 'wikipedia', ref: 'Galleria dell\'Accademia', deltaM: 5 },
      ],
      verifiedAt: '2026-09-18',
      note: 'The gallery, not the Academy of the Arts of Drawing (Q1760178) next door.',
      map: { x: 0.586, y: 0.169 },
    },
    question: {
      q: { el: 'Γιατί το κεφάλι και τα χέρια του Δαβίδ είναι μεγαλύτερα;', en: 'Why are David’s head and hands bigger?' },
      answers: [
        { el: 'Θα στεκόταν ψηλά και θα φαινόταν από κάτω', en: 'He was meant to be seen from below' },
        { el: 'Λάθος', en: 'A mistake' },
        { el: 'Ήταν γίγαντας', en: 'He was a giant' },
        {
          el: 'Γιατί το μάρμαρο ήταν πιο φαρδύ στην κορυφή και δεν ήθελαν να το πετάξουν',
          en: 'Because the marble was wider at the top and nobody wanted to waste it',
        },
      ],
      explanation: {
        el: 'Αρχικά θα έμπαινε ψηλά. Από κάτω, τα μεγαλύτερα κεφάλι και χέρια φαίνονται σωστά.',
        en: 'He was first meant to stand high up. From below, the bigger head and hands look right.',
      },
    },
  },

  // --------------------------------------------------------------------- boboli
  {
    id: 'florence-boboli',
    cityId: 'florence',
    emoji: '🐢',
    category: 'nature',
    difficulty: 1,

    name: { el: 'Κήποι Μπόμπολι', en: 'The Boboli Gardens' },
    tagline: {
      el: 'Ο κήπος των Μεδίκων, με μια ψεύτικη σπηλιά και μια χελώνα',
      en: 'The Medici garden, with a fake cave and a tortoise',
    },
    story: {
      el:
        'Πίσω από το Παλάτσο Πίτι, το παλάτι όπου μετακόμισαν οι Μέδικοι τον 16ο αιώνα, ' +
        'ανεβαίνει σε έναν λόφο ένας τεράστιος κήπος. Δεν είναι ένα απλό πάρκο: σχεδιάστηκε ' +
        'για να εντυπωσιάζει, και έγινε πρότυπο για τους βασιλικούς κήπους πολλών χωρών. ' +
        'Έχει μακριές δεντροστοιχίες, σκάλες, λιμνούλες και πάνω από εκατό αγάλματα. Στη ' +
        'μέση ενός μεγάλου θεάτρου από χορτάρι στέκεται ένας αιγυπτιακός οβελίσκος, πολύ ' +
        'πιο παλιός από τον κήπο. Κοντά στην είσοδο υπάρχει μια ψεύτικη σπηλιά, η Μεγάλη ' +
        'Σπηλιά, με τοίχους που μοιάζουν να στάζουν και ζώα σκαλισμένα μέσα στην πέτρα. Και ' +
        'υπάρχει ένα σιντριβάνι που κάνει τα παιδιά να γελάνε: ένας στρουμπουλός άντρας ' +
        'κάθεται πάνω σε μια χελώνα σαν να την καβαλάει. Ήταν ένας αληθινός άνθρωπος, ένας ' +
        'γνωστός αστείος της αυλής των Μεδίκων.',
      en:
        'Behind the Palazzo Pitti, the palace the Medici moved to in the 16th century, a huge ' +
        'garden climbs a hill. It is not just a park: it was designed to impress, and it ' +
        'became the model for royal gardens in many countries. It has long avenues of trees, ' +
        'staircases, ponds and more than a hundred statues. In the middle of a large theatre ' +
        'made of grass stands an Egyptian obelisk, far older than the garden. Near the ' +
        'entrance there is a fake cave, the Great Grotto, with walls that seem to drip and ' +
        'animals carved into the stone. And there is a fountain that makes children laugh: a ' +
        'plump man sits on a tortoise as if he were riding it. He was a real person, a ' +
        'well-known jester at the Medici court.',
    },
    facts: [
      {
        el: 'Ήταν ο κήπος του παλατιού των Μεδίκων.',
        en: 'It was the garden of the Medici palace.',
      },
      {
        el: 'Έχει πάνω από εκατό αγάλματα και έναν αιγυπτιακό οβελίσκο.',
        en: 'It has more than a hundred statues and an Egyptian obelisk.',
      },
      {
        el: 'Η Μεγάλη Σπηλιά είναι ψεύτικη, φτιαγμένη από ανθρώπους.',
        en: 'The Great Grotto is fake, made by people.',
      },
    ],
    location: {
      lat: 43.76528,
      lng: 11.24997,
      anchor: 'area',
      confidence: 'C',
      sources: [
        { kind: 'wikidata', ref: 'Q888825', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Boboli Gardens', deltaM: 336 },
      ],
      verifiedAt: '2026-09-18',
      note: 'Grade C: Wikipedia’s point is 336 m away, further up the hill inside the same 45-hectare garden. Wikidata’s point is by the palace, where visitors enter. Palazzo Pitti (Q29286) is 15 m from it and is told here instead of pinned.',
      map: { x: 0.180, y: 0.655 },
    },
    question: {
      q: { el: 'Πάνω σε τι κάθεται ο άντρας του σιντριβανιού;', en: 'What is the man on the fountain sitting on?' },
      answers: [
        { el: 'Πάνω σε μια χελώνα', en: 'On a big tortoise' },
        { el: 'Άλογο', en: 'A horse' },
        { el: 'Σε ένα βαρέλι', en: 'On an old barrel' },
        {
          el: 'Πάνω σε έναν δράκο που βγάζει νερό αντί για φωτιά',
          en: 'On a dragon that breathes out water instead of fire',
        },
      ],
      explanation: {
        el: 'Κάθεται σαν να την καβαλάει. Ήταν ένας αληθινός αστείος της αυλής των Μεδίκων.',
        en: 'He sits as if riding it. He was a real jester at the Medici court.',
      },
    },
  },

  // ------------------------------------------------------- piazzale michelangelo
  {
    id: 'florence-piazzale-michelangelo',
    cityId: 'florence',
    emoji: '🌅',
    category: 'landmark',
    difficulty: 1,

    name: { el: 'Πλατεία Μιχαήλ Αγγέλου', en: 'Piazzale Michelangelo' },
    tagline: {
      el: 'Όλη η Φλωρεντία μπροστά σου, σαν σε καρτ ποστάλ',
      en: 'All of Florence laid out in front of you, like a postcard',
    },
    story: {
      el:
        'Στον λόφο απέναντι από το ποτάμι υπάρχει μια μεγάλη πλατεία φτιαγμένη για ένα μόνο ' +
        'πράγμα: για να κοιτάς. Χτίστηκε το 1869, τα χρόνια που η Φλωρεντία ήταν για λίγο η ' +
        'πρωτεύουσα της Ιταλίας, και η πόλη μεγάλωνε και ομόρφαινε. Από εδώ βλέπεις σχεδόν ' +
        'όλα όσα θα επισκεφτείς: τον κόκκινο τρούλο του καθεδρικού, το καμπαναριό του Τζόττο, ' +
        'τον ψηλό πύργο του Παλάτσο Βέκιο και τις γέφυρες του Άρνο, με την Πόντε Βέκιο ανάμεσά ' +
        'τους. Πίσω από την πόλη υψώνονται οι λόφοι της Τοσκάνης. Στη μέση της πλατείας ' +
        'στέκεται ένας ακόμα Δαβίδ, αυτή τη φορά από πράσινο χάλκωμα, αντίγραφο του ' +
        'μαρμάρινου. Το καλύτερο είναι να έρθεις λίγο πριν δύσει ο ήλιος, όταν τα κεραμίδια ' +
        'της πόλης γίνονται πορτοκαλί. Μπορείς να ανέβεις με τα πόδια από το ποτάμι, από ' +
        'σκάλες και μονοπάτια ανάμεσα σε δέντρα.',
      en:
        'On the hill across the river there is a big square built for just one thing: ' +
        'looking. It was made in 1869, in the years when Florence was briefly the capital of ' +
        'Italy and the city was growing and being made beautiful. From here you can see nearly ' +
        'everything you will visit: the red dome of the cathedral, Giotto’s bell tower, the ' +
        'tall tower of the Palazzo Vecchio and the bridges over the Arno, with the Ponte ' +
        'Vecchio among them. Behind the city rise the hills of Tuscany. In the middle of the ' +
        'square stands yet another David, this time in green bronze, a copy of the marble one. ' +
        'The best time to come is just before sunset, when the roof tiles of the city turn ' +
        'orange. You can walk up from the river by steps and paths among the trees.',
    },
    facts: [
      {
        el: 'Φτιάχτηκε το 1869, όταν η Φλωρεντία ήταν πρωτεύουσα της Ιταλίας.',
        en: 'It was built in 1869, when Florence was the capital of Italy.',
      },
      {
        el: 'Στη μέση στέκεται ένα χάλκινο αντίγραφο του Δαβίδ.',
        en: 'A bronze copy of David stands in the middle.',
      },
      {
        el: 'Από εδώ φαίνονται ο τρούλος, οι πύργοι και οι γέφυρες.',
        en: 'From here you can see the dome, the towers and the bridges.',
      },
    ],
    location: {
      lat: 43.76292,
      lng: 11.26516,
      anchor: 'viewpoint',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q1348158', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Piazzale Michelangelo', deltaM: 18 },
      ],
      verifiedAt: '2026-09-18',
      map: { x: 0.871, y: 0.753 },
    },
    question: {
      q: { el: 'Για ποιο λόγο φτιάχτηκε αυτή η πλατεία;', en: 'What was this square built for?' },
      answers: [
        { el: 'Για να κοιτάς την πόλη', en: 'For looking at the city' },
        { el: 'Αγορά', en: 'Market' },
        { el: 'Για πάρκινγκ', en: 'For parking cars' },
        {
          el: 'Για να προσγειώνονται τα πρώτα αερόστατα που πετούσαν πάνω από την πόλη',
          en: 'For landing the first hot-air balloons that flew over the city',
        },
      ],
      explanation: {
        el: 'Από εδώ φαίνονται ο τρούλος, οι πύργοι και οι γέφυρες, ειδικά λίγο πριν δύσει ο ήλιος.',
        en: 'From here you see the dome, the towers and the bridges, best just before sunset.',
      },
    },
  },

  // --------------------------------------------------------------- museo galileo
  {
    id: 'florence-museo-galileo',
    cityId: 'florence',
    emoji: '🔭',
    category: 'museum',
    difficulty: 2,

    name: { el: 'Μουσείο Γαλιλαίου', en: 'The Galileo Museum' },
    tagline: {
      el: 'Τα τηλεσκόπια που άλλαξαν τον τρόπο που βλέπουμε τον ουρανό',
      en: 'The telescopes that changed how we see the sky',
    },
    story: {
      el:
        'Ο Γαλιλαίος ήταν ένας επιστήμονας από την Τοσκάνη που δεν πίστευε κάτι μόνο επειδή ' +
        'το έλεγαν οι παλιοί. Ήθελε να το δει και να το μετρήσει ο ίδιος. Το 1609 άκουσε ότι ' +
        'στην Ολλανδία κάποιος είχε φτιάξει ένα σωλήνα με φακούς που έκανε τα μακρινά ' +
        'πράγματα να φαίνονται κοντά. Έφτιαξε τον δικό του, καλύτερο, και τον γύρισε προς τον ' +
        'ουρανό. Είδε βουνά στο φεγγάρι και τέσσερα μικρά φεγγάρια να γυρίζουν γύρω από τον ' +
        'Δία. Αυτό έδειχνε ότι δεν γυρίζουν όλα γύρω από τη Γη, όπως πίστευαν τότε σχεδόν ' +
        'όλοι. Ονόμασε τα φεγγάρια «άστρα των Μεδίκων», προς τιμήν της οικογένειας που τον ' +
        'προστάτευε. Οι Μέδικοι μάζευαν επιστημονικά όργανα όπως μάζευαν πίνακες, και αυτό ' +
        'το μουσείο φυλάει τη συλλογή τους: τηλεσκόπια, πυξίδες, θερμόμετρα, υδρόγειες και ' +
        'μηχανές για πειράματα.',
      en:
        'Galileo was a scientist from Tuscany who would not believe something just because ' +
        'the old books said so. He wanted to see it and measure it for himself. In 1609 he ' +
        'heard that someone in Holland had made a tube with lenses that made distant things ' +
        'look close. He built his own, a better one, and turned it to the sky. He saw ' +
        'mountains on the Moon and four little moons circling Jupiter. That showed that not ' +
        'everything goes round the Earth, as almost everyone believed then. He named the ' +
        'moons the "Medici stars", in honour of the family that protected him. The Medici ' +
        'collected scientific instruments the way they collected paintings, and this museum ' +
        'keeps their collection: telescopes, compasses, thermometers, globes and machines for ' +
        'experiments.',
    },
    facts: [
      {
        el: 'Το 1609 ο Γαλιλαίος έφτιαξε το δικό του τηλεσκόπιο.',
        en: 'In 1609 Galileo built his own telescope.',
      },
      {
        el: 'Ανακάλυψε τέσσερα φεγγάρια που γυρίζουν γύρω από τον Δία.',
        en: 'He discovered four moons circling Jupiter.',
      },
      {
        el: 'Τα ονόμασε «άστρα των Μεδίκων».',
        en: 'He named them the "Medici stars".',
      },
    ],
    location: {
      lat: 43.76768,
      lng: 11.25602,
      anchor: 'centroid',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q1668196', deltaM: 0 },
        { kind: 'osm', ref: 'node/3518187675', deltaM: 9 },
        { kind: 'wikipedia', ref: 'Museo Galileo', deltaM: 19 },
      ],
      verifiedAt: '2026-09-18',
      map: { x: 0.455, y: 0.555 },
    },
    question: {
      q: { el: 'Τι είδε ο Γαλιλαίος γύρω από τον Δία;', en: 'What did Galileo see circling Jupiter?' },
      answers: [
        { el: 'Τέσσερα μικρά φεγγάρια', en: 'Four little moons' },
        { el: 'Σύννεφα', en: 'Clouds' },
        { el: 'Ένα δαχτυλίδι', en: 'A ring' },
        {
          el: 'Ένα διαστημόπλοιο που είχαν στείλει οι Ολλανδοί πριν από αυτόν',
          en: 'A spaceship that the Dutch had sent there before him',
        },
      ],
      explanation: {
        el: 'Αφού γύριζαν γύρω από τον Δία, δεν γύριζαν όλα γύρω από τη Γη.',
        en: 'Since they circled Jupiter, not everything circled the Earth.',
      },
    },

    museum: {
      doorNote: {
        el: 'Βρες πρώτα τα δύο τηλεσκόπια του Γαλιλαίου. Είναι πιο μικρά απ’ όσο φαντάζεσαι.',
        en: 'Find Galileo’s two telescopes first. They are smaller than you think.',
      },
      rooms: [
        {
          id: 'florence-galileo-galileo',
          emoji: '🌙',
          name: { el: 'Η αίθουσα του Γαλιλαίου', en: 'Galileo’s room' },
          intro: {
            el:
              'Εδώ βρίσκονται πράγματα που άγγιξε ο ίδιος ο Γαλιλαίος πριν από τετρακόσια ' +
              'χρόνια. Είναι απλά, από ξύλο, χαρτί και γυαλί, και μοιάζουν σχεδόν με παιχνίδια. ' +
              'Κι όμως, με αυτά ένας άνθρωπος είδε πρώτος πράγματα στον ουρανό που κανείς δεν ' +
              'είχε δει ποτέ.',
            en:
              'Here are things that Galileo himself touched four hundred years ago. They are ' +
              'simple, made of wood, paper and glass, and look almost like toys. And yet with ' +
              'them one man was the first to see things in the sky that nobody had ever seen.',
          },
          exhibits: [
            {
              id: 'florence-galileo-telescopes',
              name: { el: 'Τα δύο τηλεσκόπια', en: 'The two telescopes' },
              blurb: {
                el:
                  'Δύο μακριοί λεπτοί σωλήνες, ντυμένοι με χαρτί και δέρμα, είναι τα μόνα ' +
                  'τηλεσκόπια του Γαλιλαίου που σώθηκαν. Ο ίδιος έτριβε τους φακούς με το χέρι. ' +
                  'Μεγάλωναν τα πράγματα περίπου είκοσι φορές, λιγότερο από τα κιάλια που ' +
                  'πουλιούνται σήμερα σε ένα μαγαζί. Το πεδίο τους ήταν τόσο μικρό που έβλεπες ' +
                  'μόνο ένα κομματάκι του φεγγαριού κάθε φορά. Με αυτά όμως ο Γαλιλαίος ζωγράφισε ' +
                  'τα βουνά της Σελήνης και μέτρησε τα φεγγάρια του Δία νύχτα με τη νύχτα.',
                en:
                  'Two long, thin tubes, covered in paper and leather, are the only telescopes ' +
                  'of Galileo’s that survive. He ground the lenses by hand himself. They made ' +
                  'things look about twenty times bigger, less than a pair of binoculars from a ' +
                  'shop today. Their view was so narrow that you saw only a small piece of the ' +
                  'Moon at a time. But with them Galileo drew the mountains of the Moon and ' +
                  'tracked Jupiter’s moons night after night.',
              },
              question: {
                q: { el: 'Πόσο μεγάλωναν τα πράγματα αυτά τα τηλεσκόπια;', en: 'How much bigger did these telescopes make things look?' },
                answers: [
                  { el: 'Περίπου είκοσι φορές', en: 'About twenty times' },
                  { el: 'Δύο', en: 'Twice' },
                  { el: 'Χίλιες φορές', en: 'A thousand times' },
                  {
                    el: 'Τόσο πολύ που έβλεπε ανθρώπους να περπατάνε στο φεγγάρι',
                    en: 'So much that he could see people walking on the Moon',
                  },
                ],
                explanation: {
                  el: 'Λιγότερο από τα σημερινά κιάλια, κι όμως αρκετά για να αλλάξει όσα ξέραμε.',
                  en: 'Less than today’s binoculars, yet enough to change what we knew.',
                },
              },
            },
            {
              id: 'florence-galileo-lens',
              name: { el: 'Ο ραγισμένος φακός', en: 'The cracked lens' },
              blurb: {
                el:
                  'Μέσα σε ένα στολισμένο πλαίσιο από ελεφαντόδοντο φυλάγεται ένας μικρός ' +
                  'στρογγυλός φακός, ραγισμένος. Είναι ο φακός από το τηλεσκόπιο με το οποίο ο ' +
                  'Γαλιλαίος ανακάλυψε τα φεγγάρια του Δία το 1610. Κάποια στιγμή έσπασε, αλλά ' +
                  'κανείς δεν τον πέταξε. Αντίθετα, οι Μέδικοι του έφτιαξαν αυτό το πολύτιμο ' +
                  'πλαίσιο, σαν να ήταν κόσμημα. Ήξεραν ότι ένα μικρό κομμάτι γυαλί μπορεί να ' +
                  'είναι πιο σημαντικό από ένα διαμάντι, αν μέσα από αυτό κάποιος είδε κάτι ' +
                  'καινούργιο.',
                en:
                  'Inside a decorated ivory frame sits a small round lens, cracked. It is the ' +
                  'lens from the telescope with which Galileo discovered Jupiter’s moons in ' +
                  '1610. At some point it broke, but nobody threw it away. Instead, the Medici ' +
                  'had this precious frame made for it, as if it were a jewel. They knew that a ' +
                  'little piece of glass can matter more than a diamond, if someone once looked ' +
                  'through it and saw something new.',
              },
              question: {
                q: { el: 'Γιατί ο ραγισμένος φακός μπήκε σε πολύτιμο πλαίσιο;', en: 'Why was the cracked lens given a precious frame?' },
                answers: [
                  { el: 'Μέσα από αυτόν βρέθηκαν τα φεγγάρια', en: 'The moons were found through it' },
                  { el: 'Ήταν χρυσός', en: 'It was gold' },
                  { el: 'Για να μη σπάσει', en: 'So it would not break' },
                  {
                    el: 'Γιατί ήταν ο πρώτος φακός γυαλιών που φόρεσε ποτέ ο Γαλιλαίος',
                    en: 'Because it was the first pair of glasses Galileo ever wore',
                  },
                ],
                explanation: {
                  el: 'Με αυτόν ο Γαλιλαίος είδε πρώτος τα φεγγάρια του Δία, το 1610.',
                  en: 'Through it Galileo first saw Jupiter’s moons, in 1610.',
                },
              },
            },
            {
              id: 'florence-galileo-finger',
              name: { el: 'Το δάχτυλο του Γαλιλαίου', en: 'Galileo’s finger' },
              blurb: {
                el:
                  'Μέσα σε ένα γυάλινο αυγό πάνω σε μια μαρμάρινη βάση στέκεται όρθιο ένα ' +
                  'δάχτυλο. Είναι αληθινό: το μεσαίο δάχτυλο του δεξιού χεριού του Γαλιλαίου. Το ' +
                  'κράτησαν το 1737, σχεδόν εκατό χρόνια μετά τον θάνατό του, όταν τα λείψανά του ' +
                  'μεταφέρθηκαν σε έναν μεγάλο τάφο στην εκκλησία του Σάντα Κρότσε. Εκείνη την ' +
                  'εποχή φύλαγαν κομμάτια από αγίους, και οι θαυμαστές του Γαλιλαίου ήθελαν να ' +
                  'τον τιμήσουν με τον ίδιο τρόπο. Είναι παράξενο, αλλά δείχνει πόσο τον ' +
                  'αγαπούσαν.',
                en:
                  'Inside a glass egg on a marble stand, a finger stands upright. It is real: ' +
                  'the middle finger of Galileo’s right hand. It was kept in 1737, almost a ' +
                  'hundred years after his death, when his remains were moved to a grand tomb in ' +
                  'the church of Santa Croce. In those days people kept pieces of saints, and ' +
                  'Galileo’s admirers wanted to honour him in the same way. It is strange, but ' +
                  'it shows how much he was loved.',
              },
              question: {
                q: { el: 'Πότε κρατήθηκε το δάχτυλο του Γαλιλαίου;', en: 'When was Galileo’s finger kept?' },
                answers: [
                  { el: 'Όταν μεταφέρθηκε στον νέο τάφο του', en: 'When he was moved to his new tomb' },
                  { el: 'Ποτέ', en: 'Never' },
                  { el: 'Όταν ήταν παιδί', en: 'When he was a boy' },
                  {
                    el: 'Όταν κέρδισε ένα βραβείο για το καλύτερο τηλεσκόπιο της Ευρώπης',
                    en: 'When he won a prize for the best telescope in all of Europe',
                  },
                ],
                explanation: {
                  el: 'Το 1737, στη μεταφορά στο Σάντα Κρότσε. Οι θαυμαστές του ήθελαν να τον τιμήσουν.',
                  en: 'In 1737, on the move to Santa Croce. His admirers wanted to honour him.',
                },
              },
            },
          ],
        },
        {
          id: 'florence-galileo-experiments',
          emoji: '⚗️',
          name: { el: 'Μηχανές για πειράματα', en: 'Machines for experiments' },
          intro: {
            el:
              'Μετά τον Γαλιλαίο, οι μαθητές του στη Φλωρεντία ίδρυσαν μια από τις πρώτες ' +
              'επιστημονικές ακαδημίες της Ευρώπης, και δεν σταμάτησαν να μετράνε: τη ζέστη, ' +
              'τον χρόνο, την κίνηση. Σε αυτή την αίθουσα θα δεις τα εργαλεία τους, και ένα ' +
              'μεγάλο χρυσό μοντέλο του σύμπαντος όπως το φαντάζονταν πριν.',
            en:
              'After Galileo, his pupils in Florence founded one of the first scientific ' +
              'academies in Europe, and they never stopped measuring: heat, time, movement. In ' +
              'this room you will see their tools, and a big golden model of the universe as ' +
              'people imagined it before.',
          },
          exhibits: [
            {
              id: 'florence-galileo-sphere',
              name: { el: 'Η μεγάλη κρικωτή σφαίρα', en: 'The great armillary sphere' },
              blurb: {
                el:
                  'Μια τεράστια σφαίρα από χρυσωμένους κύκλους, ψηλότερη από έναν ενήλικα, ' +
                  'φτιαγμένη για τους Μεδίκους στα τέλη του 16ου αιώνα. Στο κέντρο της βρίσκεται ' +
                  'η Γη, και γύρω της γυρίζουν οι κύκλοι του Ήλιου, της Σελήνης, των πλανητών και ' +
                  'των άστρων. Έτσι φαντάζονταν τότε τον κόσμο: τη Γη ακίνητη στη μέση και όλα τα ' +
                  'άλλα να γυρίζουν γύρω της. Λίγα χρόνια αργότερα ο Γαλιλαίος θα έδειχνε με το ' +
                  'τηλεσκόπιό του ότι αυτό το όμορφο μοντέλο ήταν λάθος.',
                en:
                  'A huge sphere of gilded rings, taller than a grown-up, made for the Medici at ' +
                  'the end of the 16th century. At its centre is the Earth, and around it turn the ' +
                  'rings of the Sun, the Moon, the planets and the stars. That is how people ' +
                  'imagined the world then: the Earth standing still in the middle and ' +
                  'everything else going round it. A few years later Galileo would show with his ' +
                  'telescope that this beautiful model was wrong.',
              },
              question: {
                q: { el: 'Τι βρίσκεται στο κέντρο αυτής της σφαίρας;', en: 'What is at the centre of this sphere?' },
                answers: [
                  { el: 'Η Γη, ακίνητη', en: 'The Earth, standing still' },
                  { el: 'Ο Ήλιος', en: 'The Sun' },
                  { el: 'Ένα φεγγάρι', en: 'One moon' },
                  {
                    el: 'Ένα μικρό ρολόι που δείχνει την ώρα σε όλες τις χώρες',
                    en: 'A little clock that shows the time in every country',
                  },
                ],
                explanation: {
                  el: 'Έτσι φαντάζονταν τότε τον κόσμο. Ο Γαλιλαίος έδειξε ότι δεν ήταν έτσι.',
                  en: 'That is how people imagined the world then. Galileo showed it was not so.',
                },
              },
            },
            {
              id: 'florence-galileo-thermometers',
              name: { el: 'Τα θερμόμετρα με τα μπαλάκια', en: 'The thermometers with little balls' },
              blurb: {
                el:
                  'Οι μαθητές του Γαλιλαίου ήθελαν να μετρήσουν τη ζέστη, και έφτιαξαν ' +
                  'θερμόμετρα από λεπτό γυαλί, μερικά στριφογυριστά σαν ελατήρια. Ένα από τα πιο ' +
                  'έξυπνα είναι ένας γυάλινος σωλήνας γεμάτος υγρό, με μικρές γυάλινες μπαλίτσες ' +
                  'μέσα. Όταν ζεσταίνει, το υγρό γίνεται πιο ελαφρύ και οι μπαλίτσες βουλιάζουν ' +
                  'μία μία. Όταν κρυώνει, ανεβαίνουν ξανά. Κοιτάζοντας πόσες έχουν πέσει, ξέρεις ' +
                  'πόσο ζεστή είναι η μέρα. Τέτοια θερμόμετρα πουλιούνται ακόμα σήμερα ως ' +
                  'διακοσμητικά.',
                en:
                  'Galileo’s pupils wanted to measure heat, and they made thermometers of thin ' +
                  'glass, some twisted like springs. One of the cleverest is a glass tube filled ' +
                  'with liquid, with small glass balls inside. When it gets warmer, the liquid ' +
                  'gets lighter and the balls sink one by one. When it cools, they rise again. By ' +
                  'looking at how many have fallen, you know how warm the day is. Thermometers ' +
                  'like this are still sold today as ornaments.',
              },
              question: {
                q: { el: 'Τι κάνουν οι μπαλίτσες όταν ζεσταίνει;', en: 'What do the little balls do when it gets warmer?' },
                answers: [
                  { el: 'Βουλιάζουν μία μία', en: 'They sink one by one' },
                  { el: 'Λιώνουν', en: 'Melt' },
                  { el: 'Αλλάζουν χρώμα', en: 'They change colour' },
                  {
                    el: 'Χτυπάνε μεταξύ τους και κάνουν έναν ήχο σαν καμπανάκι',
                    en: 'They bump into each other and ring like a little bell',
                  },
                ],
                explanation: {
                  el: 'Το ζεστό υγρό γίνεται πιο ελαφρύ, κι έτσι οι μπαλίτσες δεν επιπλέουν πια.',
                  en: 'Warm liquid gets lighter, so the little balls no longer float.',
                },
              },
            },
            {
              id: 'florence-galileo-incline',
              name: { el: 'Το κεκλιμένο επίπεδο με τα κουδουνάκια', en: 'The slope with the little bells' },
              blurb: {
                el:
                  'Μια μακριά ξύλινη ράμπα με ένα αυλάκι, και πάνω της μικρά κουδουνάκια. ' +
                  'Αφήνεις μια μπάλα να κυλήσει, και καθώς περνάει χτυπάει τα κουδουνάκια ένα ένα. ' +
                  'Τα κουδουνάκια δεν είναι σε ίσες αποστάσεις: όσο πιο κάτω, τόσο πιο αραιά. ' +
                  'Κι όμως, χτυπάνε με τον ίδιο ρυθμό, γιατί η μπάλα τρέχει όλο και πιο γρήγορα. ' +
                  'Έτσι έδειχνε ο Γαλιλαίος πώς επιταχύνουν τα πράγματα όταν πέφτουν. Αυτή η ' +
                  'μηχανή φτιάχτηκε αργότερα, για να δείχνει το πείραμά του σε μαθητές.',
                en:
                  'A long wooden ramp with a groove, and small bells along it. You let a ball ' +
                  'roll, and as it passes it rings the bells one by one. The bells are not evenly ' +
                  'spaced: the further down, the further apart. And yet they ring in a steady ' +
                  'rhythm, because the ball keeps going faster. That is how Galileo showed that ' +
                  'things speed up as they fall. This machine was made later, to show his ' +
                  'experiment to students.',
              },
              question: {
                q: { el: 'Γιατί τα κουδουνάκια απέχουν όλο και περισσότερο;', en: 'Why are the bells further and further apart?' },
                answers: [
                  { el: 'Η μπάλα τρέχει όλο και πιο γρήγορα', en: 'The ball keeps going faster' },
                  { el: 'Τυχαία', en: 'By chance' },
                  { el: 'Για να χωράνε', en: 'To fit them all in' },
                  {
                    el: 'Γιατί ο τεχνίτης δεν είχε αρκετά κουδουνάκια για όλη τη ράμπα',
                    en: 'Because the craftsman did not have enough bells for the whole ramp',
                  },
                ],
                explanation: {
                  el: 'Καθώς επιταχύνει, καλύπτει περισσότερο δρόμο στον ίδιο χρόνο, κι έτσι ο ρυθμός μένει ίδιος.',
                  en: 'As it speeds up, it covers more ground in the same time, so the rhythm stays even.',
                },
              },
            },
          ],
        },
      ],
      riddles: [
        {
          id: 'florence-galileo-riddle-1',
          difficulty: 1,
          prompt: {
            el:
              'Είμαι ραγισμένος, κι όμως με έβαλαν σε πλαίσιο σαν κόσμημα. Μέσα από μένα ένας ' +
              'άνθρωπος είδε πρώτη φορά τα φεγγάρια ενός άλλου πλανήτη.',
            en:
              'I am cracked, and yet they put me in a frame like a jewel. Through me a man saw ' +
              'the moons of another planet for the very first time.',
          },
          hint: { el: 'Είμαι από γυαλί.', en: 'I am made of glass.' },
          answerExhibitId: 'florence-galileo-lens',
        },
        {
          id: 'florence-galileo-riddle-2',
          difficulty: 2,
          prompt: {
            el:
              'Στη ζέστη πέφτουμε κάτω μία μία, στο κρύο ανεβαίνουμε ξανά. Μέτρα πόσες ' +
              'κοιμούνται στον πάτο και θα μάθεις τι καιρό κάνει.',
            en:
              'In the heat we drop down one by one; in the cold we rise again. Count how many ' +
              'are sleeping at the bottom and you will know the weather.',
          },
          hint: { el: 'Είμαστε μικρές και στρογγυλές.', en: 'We are small and round.' },
          answerExhibitId: 'florence-galileo-thermometers',
        },
        {
          id: 'florence-galileo-riddle-3',
          difficulty: 3,
          prompt: {
            el:
              'Βάζω τη Γη στη μέση και κάνω όλα τα άλλα να γυρίζουν γύρω της. Είμαι ψηλή, ' +
              'χρυσή και όμορφη, αλλά ο Γαλιλαίος απέδειξε ότι κάνω λάθος.',
            en:
              'I put the Earth in the middle and make everything else go round it. I am tall, ' +
              'golden and beautiful, but Galileo proved that I am wrong.',
          },
          hint: { el: 'Είμαι φτιαγμένη από κύκλους.', en: 'I am made of rings.' },
          answerExhibitId: 'florence-galileo-sphere',
        },
      ],
    },
  },

  // ---------------------------------------------------------------- santa croce
  {
    id: 'florence-santa-croce',
    cityId: 'florence',
    emoji: '🌊',
    category: 'history',
    difficulty: 2,

    name: { el: 'Σάντα Κρότσε', en: 'Santa Croce' },
    tagline: {
      el: 'Η εκκλησία των μεγάλων ανθρώπων, και οι άγγελοι της λάσπης',
      en: 'The church of great people, and the angels of the mud',
    },
    story: {
      el:
        'Η Σάντα Κρότσε είναι μια τεράστια εκκλησία σε μια μεγάλη πλατεία, που άρχισε να ' +
        'χτίζεται το 1294. Μέσα της θα βρεις τους τάφους και τα μνημεία μερικών από τους πιο ' +
        'διάσημους Ιταλούς: του Μιχαήλ Αγγέλου, του Γαλιλαίου, του μουσικού Ροσίνι και ' +
        'πολλών άλλων. Γι’ αυτό τη λένε «ναό των ιταλικών δόξων». Η εκκλησία έχει όμως και ' +
        'μια πιο καινούργια ιστορία. Τον Νοέμβριο του 1966, μετά από πολλές μέρες βροχής, ο ' +
        'Άρνο ξεχείλισε και πλημμύρισε την πόλη. Εδώ το νερό ανέβηκε πάνω από πέντε μέτρα και ' +
        'άφησε πίσω του λάσπη παντού. Χιλιάδες νέοι από την Ιταλία και από όλο τον κόσμο ' +
        'ήρθαν να βοηθήσουν. Έβγαζαν βιβλία και πίνακες από τη λάσπη με τα χέρια, και οι ' +
        'Φλωρεντινοί τους ονόμασαν «άγγελους της λάσπης». Σε τοίχους γύρω από την πλατεία ' +
        'υπάρχουν μικρές πλάκες που δείχνουν ως πού έφτασε το νερό.',
      en:
        'Santa Croce is a huge church on a big square, begun in 1294. Inside you will find the ' +
        'tombs and monuments of some of the most famous Italians: Michelangelo, Galileo, the ' +
        'composer Rossini and many others. That is why it is called the "temple of Italian ' +
        'glories". But the church also has a newer story. In November 1966, after many days of ' +
        'rain, the Arno burst its banks and flooded the city. Here the water rose more than ' +
        'five metres and left mud everywhere. Thousands of young people from Italy and all over ' +
        'the world came to help. They pulled books and paintings out of the mud with their ' +
        'hands, and Florentines called them the "angels of the mud". On walls around the ' +
        'square there are small plaques showing how high the water came.',
    },
    facts: [
      {
        el: 'Εδώ βρίσκονται οι τάφοι του Μιχαήλ Αγγέλου και του Γαλιλαίου.',
        en: 'Michelangelo and Galileo are buried here.',
      },
      {
        el: 'Στην πλημμύρα του 1966 το νερό εδώ ανέβηκε πάνω από πέντε μέτρα.',
        en: 'In the 1966 flood the water here rose more than five metres.',
      },
      {
        el: 'Οι εθελοντές που βοήθησαν λέγονται «άγγελοι της λάσπης».',
        en: 'The volunteers who helped are called the "angels of the mud".',
      },
    ],
    location: {
      lat: 43.76845,
      lng: 11.26274,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q51177', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Santa Croce, Florence', deltaM: 4 },
      ],
      verifiedAt: '2026-09-18',
      map: { x: 0.761, y: 0.523 },
    },
    question: {
      q: { el: 'Ποιοι ήταν οι «άγγελοι της λάσπης»;', en: 'Who were the "angels of the mud"?' },
      answers: [
        { el: 'Νέοι που ήρθαν να βοηθήσουν', en: 'Young people who came to help' },
        { el: 'Αγάλματα', en: 'Statues' },
        { el: 'Οι μοναχοί της', en: 'The church’s monks' },
        {
          el: 'Ζωγραφιές αγγέλων που βρέθηκαν κάτω από τη λάσπη μετά την πλημμύρα',
          en: 'Paintings of angels that were found under the mud after the flood',
        },
      ],
      explanation: {
        el: 'Ήρθαν από όλο τον κόσμο το 1966 και έσωσαν βιβλία και πίνακες με τα χέρια τους.',
        en: 'They came from all over the world in 1966 and saved books and paintings by hand.',
      },
    },
  },

  // ----------------------------------------------------------------- porcellino
  {
    id: 'florence-porcellino',
    cityId: 'florence',
    emoji: '🐗',
    category: 'landmark',
    difficulty: 1,

    name: { el: 'Το Γουρουνάκι', en: 'Il Porcellino' },
    tagline: {
      el: 'Ένας χάλκινος αγριόχοιρος με μια μύτη που γυαλίζει σαν χρυσάφι',
      en: 'A bronze wild boar with a nose that shines like gold',
    },
    story: {
      el:
        'Στην άκρη μιας παλιάς σκεπαστής αγοράς, λίγα βήματα από την Πόντε Βέκιο, κάθεται ' +
        'ένας χάλκινος αγριόχοιρος πάνω σε μια βάση γεμάτη μικρά ζωάκια, φίδια, βατράχους και ' +
        'σαλιγκάρια. Από το στόμα του τρέχει νερό, γιατί είναι σιντριβάνι. Οι Φλωρεντινοί τον ' +
        'λένε με αγάπη «Πορτσελίνο», δηλαδή «γουρουνάκι», παρόλο που είναι αγριόχοιρος. Το ' +
        'πρώτο χάλκινο άγαλμα το έφτιαξε ένας γλύπτης το 1633, αντιγράφοντας ένα αρχαίο ' +
        'μαρμάρινο. Αυτό που βλέπεις σήμερα είναι ένα νεότερο αντίγραφο, και το παλιό ' +
        'φυλάγεται σε μουσείο. Υπάρχει ένα έθιμο: τρίβεις τη μύτη του για καλή τύχη και για να ' +
        'ξαναγυρίσεις κάποτε στη Φλωρεντία. Μετά βάζεις ένα κέρμα στο στόμα του και το ' +
        'αφήνεις να πέσει. Αν περάσει από τη σχάρα από κάτω, λένε ότι θα σε βρει η τύχη. Τόσοι ' +
        'άνθρωποι τρίβουν τη μύτη του που γυαλίζει σαν χρυσάφι.',
      en:
        'At the edge of an old covered market, a few steps from the Ponte Vecchio, sits a ' +
        'bronze wild boar on a base covered with little creatures, snakes, frogs and snails. ' +
        'Water runs from its mouth, because it is a fountain. Florentines fondly call it ' +
        '"Porcellino", which means "piglet", even though it is a wild boar. The first bronze ' +
        'statue was made by a sculptor in 1633, copying an ancient marble one. The one you see ' +
        'today is a newer copy, and the old one is kept in a museum. There is a custom: you ' +
        'rub its nose for good luck and so that you will come back to Florence one day. Then ' +
        'you put a coin in its mouth and let it drop. If it falls through the grate below, ' +
        'they say luck will find you. So many people rub its nose that it shines like gold.',
    },
    facts: [
      {
        el: 'Το πρώτο χάλκινο άγαλμα φτιάχτηκε το 1633.',
        en: 'The first bronze statue was made in 1633.',
      },
      {
        el: 'Αυτό που βλέπεις είναι αντίγραφο· το παλιό είναι σε μουσείο.',
        en: 'The one you see is a copy; the old one is in a museum.',
      },
      {
        el: 'Τρίβουν τη μύτη του για να ξαναγυρίσουν στη Φλωρεντία.',
        en: 'People rub its nose so that they will come back to Florence.',
      },
    ],
    location: {
      lat: 43.76989,
      lng: 11.25423,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q1713758', deltaM: 0 },
        { kind: 'osm', ref: 'node/3391028134', deltaM: 2 },
      ],
      verifiedAt: '2026-09-18',
      map: { x: 0.374, y: 0.463 },
    },
    question: {
      q: { el: 'Γιατί η μύτη του γουρουνιού γυαλίζει;', en: 'Why does the boar’s nose shine?' },
      answers: [
        { el: 'Όλοι την τρίβουν για τύχη', en: 'Everyone rubs it for luck' },
        { el: 'Χρυσάφι', en: 'Gold' },
        { el: 'Τη βάφουν κάθε χρόνο', en: 'It is painted every year' },
        {
          el: 'Γιατί το νερό του σιντριβανιού πέφτει πάνω της όλη μέρα και όλη νύχτα',
          en: 'Because the water of the fountain splashes onto it all day and all night',
        },
      ],
      explanation: {
        el: 'Τόσα χέρια την τρίβουν κάθε μέρα που ο χαλκός γυαλίζει σαν χρυσάφι.',
        en: 'So many hands rub it every day that the bronze shines like gold.',
      },
    },
  },

  // ----------------------------------------------------------- mercato centrale
  {
    id: 'florence-mercato-centrale',
    cityId: 'florence',
    emoji: '🍞',
    category: 'food',
    difficulty: 1,

    name: { el: 'Κεντρική Αγορά', en: 'The Central Market' },
    tagline: {
      el: 'Μια αγορά από σίδερο και γυαλί, και ψωμί χωρίς αλάτι',
      en: 'An iron-and-glass market, and bread without salt',
    },
    story: {
      el:
        'Η Κεντρική Αγορά της Φλωρεντίας είναι ένα μεγάλο κτίριο από σίδερο και γυαλί, που ' +
        'άνοιξε το 1874. Στο ισόγειο οι πάγκοι πουλάνε ό,τι βγάζει η γη της Τοσκάνης: ' +
        'λαχανικά, φρούτα, τυριά, αλλαντικά, ελαιόλαδο, μανιτάρια το φθινόπωρο. Στον πάνω ' +
        'όροφο υπάρχουν πάγκοι με φαγητό όπου κάθεσαι σε μεγάλα κοινά τραπέζια και τρως. Αν ' +
        'δοκιμάσεις το ψωμί εδώ, θα σου φανεί παράξενο: η παραδοσιακή φραντζόλα της Τοσκάνης ' +
        'δεν έχει καθόλου αλάτι. Υπάρχουν διάφορες ιστορίες για το γιατί, όπως ότι κάποτε το ' +
        'αλάτι ήταν πολύ ακριβό. Σίγουρο είναι ότι ταιριάζει με τα αλμυρά φαγητά της ' +
        'περιοχής, το τυρί, το προσούτο και τις σούπες. Γύρω από την αγορά, στους δρόμους, ' +
        'στήνεται και ένα παζάρι με δερμάτινες τσάντες και ζώνες, γιατί η Φλωρεντία είναι γνωστή εδώ και αιώνες για τους τεχνίτες του δέρματος.',
      en:
        'Florence’s Central Market is a big building of iron and glass that opened in 1874. ' +
        'On the ground floor the stalls sell everything the land of Tuscany grows: vegetables, ' +
        'fruit, cheese, cured meats, olive oil, mushrooms in autumn. On the upper floor there ' +
        'are food stalls where you sit at big shared tables and eat. If you try the bread here, ' +
        'it will taste strange: the traditional Tuscan loaf has no salt at all. There are ' +
        'various stories about why, such as that salt was once very expensive. What is certain ' +
        'is that it goes well with the salty foods of the region, the cheese, the ham and the ' +
        'soups. Around the market, in the streets, there is also a bazaar selling leather ' +
        'bags and belts, because Florence has been known for its leather craftsmen for centuries.',
    },
    facts: [
      {
        el: 'Η αγορά άνοιξε το 1874.',
        en: 'The market opened in 1874.',
      },
      {
        el: 'Το παραδοσιακό ψωμί της Τοσκάνης δεν έχει αλάτι.',
        en: 'Traditional Tuscan bread has no salt.',
      },
      {
        el: 'Στον πάνω όροφο τρως σε μεγάλα κοινά τραπέζια.',
        en: 'Upstairs you eat at big shared tables.',
      },
    ],
    location: {
      lat: 43.77667,
      lng: 11.25333,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q3854843', deltaM: 0 },
        { kind: 'osm', ref: 'node/2361666938', deltaM: 47 },
        { kind: 'wikipedia', ref: 'Mercato Centrale (Florence)', deltaM: 0 },
      ],
      verifiedAt: '2026-09-18',
      map: { x: 0.333, y: 0.180 },
    },
    question: {
      q: { el: 'Τι λείπει από το παραδοσιακό ψωμί της Τοσκάνης;', en: 'What is missing from traditional Tuscan bread?' },
      answers: [
        { el: 'Το αλάτι', en: 'The salt' },
        { el: 'Όλα', en: 'All' },
        { el: 'Η κόρα του', en: 'Its hard crust' },
        {
          el: 'Το αλεύρι, γιατί φτιάχνεται μόνο από πατάτες και καλαμπόκι',
          en: 'The flour, because it is made only from potatoes and corn',
        },
      ],
      explanation: {
        el: 'Ταιριάζει έτσι με τα αλμυρά φαγητά της περιοχής, όπως το τυρί και το προσούτο.',
        en: 'That way it goes well with the region’s salty foods, like cheese and ham.',
      },
    },
  },

  // ---------------------------------------------------------------- san miniato
  {
    id: 'florence-san-miniato',
    cityId: 'florence',
    emoji: '🦅',
    category: 'history',
    difficulty: 2,

    name: { el: 'Σαν Μινιάτο αλ Μόντε', en: 'San Miniato al Monte' },
    tagline: {
      el: 'Μια εκκλησία στον λόφο, με έναν χρυσό αετό στη στέγη',
      en: 'A church on the hill, with a golden eagle on its roof',
    },
    story: {
      el:
        'Λίγο πιο ψηλά από την Πλατεία Μιχαήλ Αγγέλου, στην κορυφή του λόφου, στέκεται μια από ' +
        'τις πιο όμορφες και πιο παλιές εκκλησίες της Φλωρεντίας. Άρχισε να χτίζεται το 1013, ' +
        'πριν από χίλια χρόνια. Η πρόσοψή της είναι ντυμένη με άσπρο και σκούρο πράσινο ' +
        'μάρμαρο σε σχέδια σαν γεωμετρία, και στο πάνω μέρος λάμπει ένα χρυσό ψηφιδωτό. Στην ' +
        'κορυφή κάθεται ένας χάλκινος αετός που κρατάει στα νύχια του ένα δέμα ύφασμα. Ήταν ' +
        'το σύμβολο του σωματείου των εμπόρων υφασμάτων, που πλήρωναν για τη φροντίδα της ' +
        'εκκλησίας. Μέσα, στο δάπεδο, υπάρχει ένας μαρμάρινος κύκλος με τα ζώδια, πάνω από ' +
        'οκτακοσίων χρόνων. Μοναχοί ζουν ακόμα εδώ και το σούρουπο ψάλλουν. Από τη σκάλα ' +
        'μπροστά στην εκκλησία βλέπεις ολόκληρη την πόλη, και είναι πολύ πιο ήσυχα από την ' +
        'πλατεία πιο κάτω.',
      en:
        'A little higher than Piazzale Michelangelo, at the top of the hill, stands one of the ' +
        'most beautiful and oldest churches in Florence. It was begun in 1013, a thousand years ' +
        'ago. Its front is dressed in white and dark green marble in patterns like geometry, ' +
        'and a golden mosaic shines near the top. On the very top sits a bronze eagle holding a ' +
        'bale of cloth in its claws. It was the symbol of the guild of cloth merchants, who ' +
        'paid for the upkeep of the church. Inside, on the floor, there is a marble circle ' +
        'with the signs of the zodiac, more than eight hundred years old. Monks still live ' +
        'here and sing at dusk. From the steps in front of the church you can see the whole ' +
        'city, and it is much quieter than the square below.',
    },
    facts: [
      {
        el: 'Άρχισε να χτίζεται το 1013.',
        en: 'It was begun in 1013.',
      },
      {
        el: 'Ο αετός στην κορυφή ήταν το σύμβολο των εμπόρων υφασμάτων.',
        en: 'The eagle on top was the symbol of the cloth merchants.',
      },
      {
        el: 'Στο δάπεδο υπάρχει ένας μαρμάρινος κύκλος με τα ζώδια.',
        en: 'On the floor there is a marble circle with the zodiac.',
      },
    ],
    location: {
      lat: 43.75944,
      lng: 11.265,
      anchor: 'centroid',
      confidence: 'C',
      sources: [
        { kind: 'wikidata', ref: 'Q844337', deltaM: 0 },
        { kind: 'wikipedia', ref: 'San Miniato al Monte', deltaM: 41 },
      ],
      verifiedAt: '2026-09-18',
      note: 'Grade C: Wikipedia is 41 m off, within the church and its terrace; Overpass did not answer in this run.',
      map: { x: 0.864, y: 0.898 },
    },
    question: {
      q: { el: 'Τι κρατάει ο αετός στην κορυφή της εκκλησίας;', en: 'What is the eagle on top of the church holding?' },
      answers: [
        { el: 'Ένα δέμα ύφασμα', en: 'A bale of cloth' },
        { el: 'Ψάρι', en: 'A fish' },
        { el: 'Ένα κλειδί', en: 'A big key' },
        {
          el: 'Ένα στεφάνι από ελιά, το σύμβολο της ειρήνης για όλη την πόλη',
          en: 'An olive wreath, the symbol of peace for the whole city',
        },
      ],
      explanation: {
        el: 'Ήταν το σύμβολο των εμπόρων υφασμάτων, που φρόντιζαν την εκκλησία.',
        en: 'It was the symbol of the cloth merchants, who looked after the church.',
      },
    },
  },

  // ---------------------------------------------------------- giardino semplici
  {
    id: 'florence-giardino-semplici',
    cityId: 'florence',
    emoji: '🌿',
    category: 'nature',
    difficulty: 2,

    name: { el: 'Ο Κήπος των Βοτάνων', en: 'The Garden of Simples' },
    tagline: {
      el: 'Ένας από τους πιο παλιούς βοτανικούς κήπους του κόσμου',
      en: 'One of the oldest botanical gardens in the world',
    },
    story: {
      el:
        'Το 1545 ο άρχοντας της Φλωρεντίας, ο Κόζιμο των Μεδίκων, ίδρυσε αυτόν τον κήπο. Είναι ' +
        'ένας από τους πιο παλιούς βοτανικούς κήπους του κόσμου. Το όνομά του σημαίνει «ο ' +
        'κήπος των απλών». «Απλά» έλεγαν τότε τα φαρμακευτικά φυτά, δηλαδή τα βότανα που ' +
        'χρησιμοποιούσαν οι γιατροί για να φτιάξουν φάρμακα. Οι φοιτητές ιατρικής έρχονταν ' +
        'εδώ για να μάθουν να τα αναγνωρίζουν, γιατί ένα λάθος φυτό μπορούσε να κάνει κακό ' +
        'αντί για καλό. Σήμερα ο κήπος ανήκει στο πανεπιστήμιο και έχει χιλιάδες φυτά από όλο ' +
        'τον κόσμο, θερμοκήπια με τροπικά φυτά και μια μεγάλη συλλογή από λεμονιές και ' +
        'πορτοκαλιές σε γλάστρες. Ένα από τα δέντρα του, ένα ίταμο, φυτεύτηκε το 1720 και ' +
        'στέκεται ακόμα. Είναι ένα ήσυχο μέρος, μακριά από το πλήθος του κέντρου.',
      en:
        'In 1545 the ruler of Florence, Cosimo de’ Medici, founded this garden. It is one of ' +
        'the oldest botanical gardens in the world. Its name means "the garden of simples". ' +
        '"Simples" was the old word for medicinal plants, the herbs doctors used to make ' +
        'medicines. Medical students came here to learn to recognise them, because the wrong ' +
        'plant could do harm instead of good. Today the garden belongs to the university and ' +
        'has thousands of plants from all over the world, glasshouses with tropical plants and ' +
        'a big collection of lemon and orange trees in pots. One of its trees, a yew, was ' +
        'planted in 1720 and is still standing. It is a quiet place, away from the crowds of ' +
        'the centre.',
    },
    facts: [
      {
        el: 'Ιδρύθηκε το 1545 από τον Κόζιμο των Μεδίκων.',
        en: 'It was founded in 1545 by Cosimo de’ Medici.',
      },
      {
        el: '«Απλά» έλεγαν τότε τα φαρμακευτικά φυτά.',
        en: '"Simples" was the old word for medicinal plants.',
      },
      {
        el: 'Ένα ίταμο του κήπου φυτεύτηκε το 1720.',
        en: 'One of the garden’s yew trees was planted in 1720.',
      },
    ],
    location: {
      lat: 43.77889,
      lng: 11.26139,
      anchor: 'area',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q1875558', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Orto Botanico di Firenze', deltaM: 0 },
      ],
      verifiedAt: '2026-09-18',
      map: { x: 0.700, y: 0.088 },
    },
    question: {
      q: { el: 'Γιατί έρχονταν εδώ οι φοιτητές ιατρικής;', en: 'Why did medical students come here?' },
      answers: [
        { el: 'Για να μάθουν τα φαρμακευτικά φυτά', en: 'To learn the medicinal plants' },
        { el: 'Για ύπνο', en: 'To nap' },
        { el: 'Για να παίξουν μπάλα', en: 'To play football' },
        {
          el: 'Για να κόψουν λουλούδια και να τα πουλήσουν στην αγορά της πόλης',
          en: 'To pick flowers and sell them at the market in the city',
        },
      ],
      explanation: {
        el: 'Ένα λάθος φυτό μπορούσε να κάνει κακό αντί για καλό, γι’ αυτό έπρεπε να τα ξέρουν καλά.',
        en: 'The wrong plant could do harm instead of good, so they had to know them well.',
      },
    },
  },
];

export const trails: Trail[] = [
  {
    id: 'florence-around-the-dome',
    cityId: 'florence',
    emoji: '⛪',
    name: { el: 'Γύρω από τον τρούλο', en: 'Around the dome' },
    promise: {
      el: 'Ο τρούλος που κανείς δεν ήξερε να χτίσει, οι Πύλες του Παραδείσου, ο Δαβίδ και ψωμί χωρίς αλάτι.',
      en: 'The dome nobody knew how to build, the Gates of Paradise, David and bread without salt.',
    },
    placeIds: [
      'florence-duomo',
      'florence-battistero',
      'florence-campanile',
      'florence-mercato-centrale',
      'florence-accademia',
      'florence-giardino-semplici',
    ],
  },
  {
    id: 'florence-square-and-river',
    cityId: 'florence',
    emoji: '🔭',
    name: { el: 'Από την πλατεία ως το ποτάμι', en: 'From the square to the river' },
    promise: {
      el: 'Ένα γουρουνάκι για τύχη, ένα παλάτι-κάστρο, η θεά στο κοχύλι, τα τηλεσκόπια του Γαλιλαίου και μια γέφυρα με κοσμήματα.',
      en: 'A boar for luck, a castle-palace, the goddess on the shell, Galileo’s telescopes and a bridge full of jewellery.',
    },
    placeIds: [
      'florence-porcellino',
      'florence-signoria',
      'florence-palazzo-vecchio',
      'florence-uffizi',
      'florence-museo-galileo',
      'florence-ponte-vecchio',
    ],
  },
  {
    id: 'florence-over-the-river',
    cityId: 'florence',
    emoji: '🌅',
    name: { el: 'Πέρα από το ποτάμι', en: 'Across the river' },
    promise: {
      el: 'Ένας άντρας πάνω σε χελώνα, όλη η πόλη από ψηλά, ένας χρυσός αετός και οι άγγελοι της λάσπης.',
      en: 'A man riding a tortoise, the whole city from above, a golden eagle and the angels of the mud.',
    },
    placeIds: [
      'florence-boboli',
      'florence-piazzale-michelangelo',
      'florence-san-miniato',
      'florence-santa-croce',
    ],
  },
];
