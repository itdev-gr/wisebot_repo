/**
 * WiseBot World — Nicosia.
 *
 * Fifteen places, two of them museums with an interior: the Hadjigeorgakis Kornesios
 * Mansion, which holds the Cyprus Ethnological Museum, and the Cyprus Museum. The
 * second city built by conversion rather than by fresh writing — six of the fifteen
 * come from the Explorer product on origin/main, whose text is the raw material here,
 * reshaped to this module's lengths and given sourced coordinates, museums and riddles.
 *
 * Every coordinate is copied from `data/world/coords/nicosia.json`, field for field.
 * Nothing graded `D`. No place claims an `entrance`, because no door here has been
 * measured. Overpass answered 429 or 504 to most queries on the resolving pass, so
 * five places carry an OSM cross-check and ten do not; that is why nine of them grade
 * B or C rather than A. A missing cross-check never moved a point — Wikidata is the
 * source of every one of them.
 *
 * Four Explorer spots are not pins here, and the seed's `note` carries the full
 * reasoning. In short: Laiki Geitonia has no Wikidata item at all, so no coordinate
 * could be resolved for it. Its halloumi, copper and lace material once went into a
 * third Kornesios room, but none of those objects is documented as on show in that
 * museum, so the room was removed on review; the interior now keeps only the house's
 * own documented architecture (door, courtyard, kioski, reception room, ceiling,
 * hammam). The museum has been closed until further notice since 1 September 2026
 * (visitcyprus.com), which its door note says. St John's Cathedral graded D on a three-decimal Wikipedia coordinate
 * and is told inside the Archbishop's Palace story, 48 m from its own door. The
 * Liberty Monument has no item of its own and is told inside the walls. Paphos Gate
 * graded D and would have repeated Famagusta Gate.
 *
 * Six places were added that Explorer has no model for: the two museum interiors, the
 * Omeriye Hammam, the Leventis Gallery, the Municipal Gardens as a place of its own
 * rather than a doorstep to the museum, and the Classic Motorcycle Museum.
 *
 * There is no `food` and no `sport` place, as in Paris. Nicosia's food spot is Laiki
 * Geitonia, which has no coordinate, and its stadiums sit five kilometres out in
 * Makedonitissa, far enough to shrink the whole walled city to a blob on the map.
 *
 * `el` and `en` only. The other four arrive as overlay files and never as extra keys
 * in here.
 */

import type { Place, Trail } from '../types';

export const places: Place[] = [
  // ----------------------------------------------------------- eleftheria square
  {
    id: 'nicosia-eleftheria-square',
    cityId: 'nicosia',
    emoji: '🌉',
    category: 'landmark',
    difficulty: 1,

    name: { el: 'Πλατεία Ελευθερίας', en: 'Eleftheria Square' },
    tagline: {
      el: 'Μια πλατεία που δεν πατάει καθόλου στο χώμα',
      en: 'A square that does not touch the ground at all',
    },
    story: {
      el:
        'Οι περισσότερες πλατείες είναι κομμάτια εδάφους. Αυτή δεν είναι. Είναι μια ' +
        'κατάλευκη πλατφόρμα που περνάει σαν γέφυρα πάνω από την τάφρο των παλιών ' +
        'τειχών, και όταν σκύψεις στο κάγκελο βλέπεις από κάτω σου δέντρα και μονοπάτια. ' +
        'Οι Ενετοί έστρεψαν ένα ποτάμι και για να γεμίζει την τάφρο, όμως τώρα είναι ' +
        'ξερή. Ήταν ένα βαθύ χαντάκι που ανάγκαζε τους εχθρούς να κατέβουν μέσα του πριν φτάσουν στο τείχος, εκεί όπου οι φρουροί τους ' +
        'έβλεπαν από ψηλά. Σήμερα το χαντάκι γεμίζει σιγά σιγά με κήπους. Την πλατεία τη ' +
        'σχεδίασε η Ζάχα Χαντίντ, αρχιτέκτονας που απέφευγε τις ίσιες γωνίες όπως εσύ ' +
        'αποφεύγεις τα λαχανικά. Ο διαγωνισμός έγινε το 2005, τα έργα κράτησαν χρόνια, ' +
        'και η πλατεία άνοιξε το 2021, πέντε χρόνια μετά τον θάνατό της. Στη μία άκρη ' +
        'της αρχίζουν τα σοκάκια της παλιάς πόλης· στην άλλη οι φαρδιές λεωφόροι της ' +
        'καινούργιας. Είναι κυριολεκτικά μια γέφυρα ανάμεσα σε δύο εποχές.',
      en:
        'Most squares are pieces of ground. This one is not. It is a bright white ' +
        'platform that crosses like a bridge over the moat of the old walls, and when you ' +
        'lean on the railing you look down on trees and footpaths. The Venetians diverted ' +
        'a river partly to fill the moat, but it is dry now. It was a deep ditch that forced attackers to climb down into it before ' +
        'they could reach the wall, where the guards could see them from above. Today the ' +
        'ditch is slowly filling with gardens. The square was designed by Zaha Hadid, an ' +
        'architect who avoided straight corners the way you avoid vegetables. The ' +
        'competition was held in 2005, the work took years, and the square opened in 2021, ' +
        'five years after she died. At one end the lanes of the old town begin; at the ' +
        'other, the wide avenues of the new one. It is literally a bridge between two ages.',
    },
    facts: [
      {
        el: 'Άνοιξε το 2021, δεκαέξι χρόνια μετά τον διαγωνισμό για τον σχεδιασμό της.',
        en: 'It opened in 2021, sixteen years after the competition to design it.',
      },
      {
        el: 'Η τάφρος από κάτω έχει μήκος περίπου 5 χιλιόμετρα και γίνεται πάρκο.',
        en: 'The moat underneath runs about 5 kilometres and is becoming a park.',
      },
      {
        el: 'Πήρε το όνομα «Ελευθερίας» το 1974, ύστερα από διαγωνισμό για νέο όνομα.',
        en: 'It was named Eleftheria, meaning Freedom, in 1974, after a competition for a new name.',
      },
    ],
    location: {
      lat: 35.17025,
      lng: 33.35947,
      anchor: 'area',
      confidence: 'C',
      sources: [
        { kind: 'wikidata', ref: 'Q5358622', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Eleftheria square', deltaM: 56 },
      ],
      verifiedAt: '2026-09-14',
      note:
        'An area, not a point: the deck spans the whole junction of Ledra and Onasagorou ' +
        'with five avenues. The OSM fetch failed on this pass, so only two sources.',
      findIt: {
        el: 'Στάσου στη μέση της άσπρης πλατφόρμας, εκεί όπου τελειώνει η οδός Λήδρας, και σκύψε στο κάγκελο.',
        en: 'Stand in the middle of the white deck, where Ledra Street ends, and lean over the railing.',
      },
    },
    question: {
      q: {
        el: 'Τι υπάρχει ακριβώς κάτω από την πλατεία;',
        en: 'What lies directly underneath the square?',
      },
      answers: [
        { el: 'Η παλιά τάφρος των τειχών', en: 'The old moat of the walls' },
        { el: 'Ένα ποτάμι με μικρές βάρκες', en: 'A river with small boats' },
        { el: 'Ένας σταθμός για τα τρένα', en: 'A station for the trains' },
        { el: 'Μια σπηλιά με σταλακτίτες', en: 'A cave with stalactites' },
      ],
      explanation: {
        el:
          'Η πλατεία στέκεται σαν γέφυρα πάνω από την τάφρο που έσκαψαν οι Ενετοί γύρω ' +
          'από τα τείχη, ξερή σήμερα. Σήμερα εκεί κάτω φυτεύουν δέντρα και ανοίγουν μονοπάτια.',
        en:
          'The square stands like a bridge over the moat the Venetians dug around the ' +
          'walls, dry today. Today trees are being planted down there and paths are being opened.',
      },
    },
  },

  // ------------------------------------------------------------- venetian walls
  {
    id: 'nicosia-venetian-walls',
    cityId: 'nicosia',
    emoji: '🛡️',
    category: 'history',
    difficulty: 2,

    name: { el: 'Τα Ενετικά Τείχη', en: 'The Venetian Walls' },
    tagline: {
      el: 'Ένας τέλειος κύκλος με έντεκα μύτες σαν καρδιές',
      en: 'A perfect circle with eleven points shaped like hearts',
    },
    story: {
      el:
        'Το 1567 οι Ενετοί, που τότε ήταν τα αφεντικά της Κύπρου, πήραν μια σκληρή ' +
        'απόφαση: γκρέμισαν τα πολύ μεγαλύτερα μεσαιωνικά τείχη της πόλης, μαζί με ' +
        'εκκλησίες και σπίτια που έμεναν απ’ έξω, και έχτισαν έναν μικρότερο, τέλειο ' +
        'κύκλο. Ήθελαν κάτι που να μπορούν να το υπερασπιστούν. Ο μηχανικός Τζούλιο ' +
        'Σαβορνιάν σχεδίασε έντεκα μυτερούς προμαχώνες, σαν καρδιές, τοποθετημένους έτσι ' +
        'ώστε από τον καθένα οι φρουροί να βλέπουν όλο το τείχος μέχρι τον επόμενο. ' +
        'Κανένας εχθρός δεν είχε πού να κρυφτεί. Εξέτρεψαν μάλιστα και το ποτάμι, τον ' +
        'Πεδιαίο, για να τρέχει έξω από την πόλη. Δεν πρόλαβαν να τελειώσουν. Το 1570 ο ' +
        'οθωμανικός στρατός έφτασε και πήρε τη Λευκωσία. Πάνω στον προμαχώνα Ποδοκάταρο ' +
        'στέκεται σήμερα το Μνημείο Ελευθερίας, του 1973: δύο αγωνιστές τραβούν αλυσίδες ' +
        'και ανοίγουν μια φυλακή, άνθρωποι βγαίνουν στο φως, και ψηλά στέκεται η Ελευθερία.',
      en:
        'In 1567 the Venetians, who were then the masters of Cyprus, took a hard decision: ' +
        'they pulled down the city’s much larger medieval walls, along with churches and ' +
        'houses left outside them, and built a smaller, perfect circle instead. They wanted ' +
        'something they could actually defend. The engineer Giulio Savorgnan designed ' +
        'eleven pointed bastions, shaped like hearts and placed so that from each one the ' +
        'guards could see the whole stretch of wall to the next. No attacker had anywhere ' +
        'to hide. They even diverted the river, the Pedieos, to run outside the city. They ' +
        'did not finish in time. In 1570 the Ottoman army arrived and took Nicosia. On the ' +
        'Podocataro bastion stands the Liberty Monument of 1973: two fighters pull chains ' +
        'and open a prison, people step out into the light, and Liberty stands above them.',
    },
    facts: [
      {
        el: 'Οι προμαχώνες είναι έντεκα, και ο καθένας πήρε το όνομα μιας αρχοντικής οικογένειας.',
        en: 'There are eleven bastions, each named after a noble family of the time.',
      },
      {
        el: 'Ο κύκλος των τειχών έχει μήκος περίπου 5 χιλιόμετρα.',
        en: 'The circle of the walls runs about 5 kilometres all the way round.',
      },
      {
        el: 'Τα μπρούντζινα αγάλματα του Μνημείου Ελευθερίας χύθηκαν στη Φλωρεντία της Ιταλίας.',
        en: 'The bronze figures of the Liberty Monument were cast in Florence, in Italy.',
      },
    ],
    location: {
      lat: 35.17106,
      lng: 33.37006,
      anchor: 'area',
      confidence: 'C',
      sources: [{ kind: 'wikidata', ref: 'Q7919752', deltaM: 0 }],
      verifiedAt: '2026-09-14',
      note:
        'A 4.5 km ring has no meaningful centre, so this is an area and the point is where ' +
        'Wikidata puts it: on the eastern rampart, by the Podocataro and Caraffa bastions, ' +
        'which is where a visitor climbs up and where the Liberty Monument stands. Only one ' +
        'source: the OSM fetch failed and there is no English Wikipedia coordinate.',
      findIt: {
        el: 'Ανέβα στον προμαχώνα Ποδοκάταρο, στα ανατολικά τείχη. Το Μνημείο Ελευθερίας είναι πάνω του.',
        en: 'Climb up onto the Podocataro bastion, on the eastern walls. The Liberty Monument stands on it.',
      },
    },
    question: {
      q: {
        el: 'Γιατί οι προμαχώνες μπήκαν εκεί ακριβώς όπου μπήκαν;',
        en: 'Why were the bastions placed exactly where they were placed?',
      },
      answers: [
        { el: 'Για να βλέπουν όλο το τείχος', en: 'So they could see the whole wall' },
        { el: 'Για να μοιάζουν με καρδιές', en: 'So they would look like hearts' },
        { el: 'Για να χωρέσουν έντεκα πύλες', en: 'So eleven gates could fit in' },
        { el: 'Για να μη βρέχονται τα κανόνια', en: 'So the cannon stayed out of rain' },
      ],
      explanation: {
        el:
          'Ο Σαβορνιάν τους τοποθέτησε έτσι ώστε από κάθε προμαχώνα να φαίνεται ολόκληρο ' +
          'το κομμάτι του τείχους μέχρι τον επόμενο. Έτσι κανένας εχθρός δεν έβρισκε κρυψώνα.',
        en:
          'Savorgnan set them so that from each bastion the guards saw the entire stretch of ' +
          'wall to the next one. That way no attacker could find anywhere to hide.',
      },
    },
  },

  // -------------------------------------------------------------- famagusta gate
  {
    id: 'nicosia-famagusta-gate',
    cityId: 'nicosia',
    emoji: '🚪',
    category: 'landmark',
    difficulty: 2,

    name: { el: 'Πύλη Αμμοχώστου', en: 'Famagusta Gate' },
    tagline: {
      el: 'Ένα τούνελ με τρούλο και μια τρύπα για τον ήλιο',
      en: 'A tunnel with a dome and a hole for the sun',
    },
    story: {
      el:
        'Τα τείχη είχαν τρεις πύλες, και αυτή ήταν η μεγαλύτερη. Δεν είναι μια πόρτα ' +
        'αλλά ένα ολόκληρο τούνελ που τρυπάει το χοντρό χωμάτινο ανάχωμα, αρκετά φαρδύ ' +
        'ώστε να περνούν δύο άμαξες πλάι πλάι. Στη μέση του το πέρασμα ανοίγει σε έναν ' +
        'πέτρινο τρούλο έντεκα μέτρων, και στην κορυφή του τρούλου υπάρχει μια στρογγυλή ' +
        'τρύπα. Από εκεί πέφτει μια στήλη φως που μετακινείται όλη μέρα στο πάτωμα, ' +
        'ακριβώς όπως στο Πάνθεον της Ρώμης. Οι Ενετοί την έχτισαν το 1567 και ' +
        'αντέγραψαν το σχέδιο από μια πύλη στον Χάνδακα, το σημερινό Ηράκλειο της ' +
        'Κρήτης, που ανήκε κι αυτός στη Βενετία. Το πρώτο της όνομα ήταν Πόρτα ' +
        'Τζουλιάνα. Πρόσεξε κάτι παράξενο: η όψη προς την πόλη είναι επιβλητική, ενώ η ' +
        'όψη προς την τάφρο είναι σχεδόν γυμνή. Η πύλη ήταν φτιαγμένη για να τη ' +
        'θαυμάζουν όσοι ήταν ήδη μέσα. Σήμερα το τούνελ γεμίζει με εκθέσεις και συναυλίες.',
      en:
        'The walls had three gates, and this was the largest. It is not a door but a whole ' +
        'tunnel bored through the thick earth rampart, wide enough for two carts side by ' +
        'side. Halfway along, the passage opens into a stone dome eleven metres across, and ' +
        'at the top of the dome there is a round hole. A column of light falls through it ' +
        'and travels across the floor all day, exactly as it does in the Pantheon in Rome. ' +
        'The Venetians built it in 1567 and copied the design from a gate in Candia, today’s ' +
        'Heraklion on Crete, which also belonged to Venice. Its first name was Porta ' +
        'Giuliana. Notice something odd: the face towards the city is grand, while the face ' +
        'towards the moat is almost bare. The gate was made to be admired by people who were ' +
        'already inside. Today the tunnel fills with exhibitions and concerts.',
    },
    facts: [
      {
        el: 'Ο τρούλος στη μέση του περάσματος έχει διάμετρο έντεκα μέτρα.',
        en: 'The dome in the middle of the passage is eleven metres across.',
      },
      {
        el: 'Το πρώτο της όνομα ήταν Πόρτα Τζουλιάνα, από τον μηχανικό Τζούλιο Σαβορνιάν.',
        en: 'Its first name was Porta Giuliana, after the engineer Giulio Savorgnan.',
      },
      {
        el: 'Οι τρεις πύλες των τειχών ήταν της Αμμοχώστου, της Κερύνειας και της Πάφου.',
        en: 'The three gates of the walls were Famagusta, Kyrenia and Paphos.',
      },
    ],
    location: {
      lat: 35.1743,
      lng: 33.3712,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q6046232', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Famagusta Gate', deltaM: 0 },
      ],
      verifiedAt: '2026-09-14',
      note: 'Wikidata and Wikipedia agree exactly; the OSM fetch failed on this pass.',
      findIt: {
        el: 'Στο ανατολικό άκρο της οδού Αθηνάς. Ψάξε τη μεγάλη στρογγυλή καμάρα μέσα στο τείχος.',
        en: 'At the east end of Athinas Street. Look for the big round arch set into the wall.',
      },
    },
    question: {
      q: {
        el: 'Πώς μπαίνει φως μέσα στο σκοτεινό πέρασμα;',
        en: 'How does light get into the dark passage?',
      },
      answers: [
        { el: 'Από τρύπα στην κορυφή του τρούλου', en: 'Through a hole at the top of the dome' },
        { el: 'Από λάμπες κρεμασμένες στον τοίχο', en: 'From lamps hung along the side wall' },
        { el: 'Από παράθυρα και στις δύο πλευρές', en: 'From windows down both of its sides' },
        { el: 'Από καθρέφτες έξω από την πύλη', en: 'From mirrors outside the gate itself' },
      ],
      explanation: {
        el:
          'Στη μέση του τούνελ υπάρχει τρούλος με στρογγυλό άνοιγμα στην κορυφή. Το φως ' +
          'πέφτει από εκεί και μετακινείται στο πάτωμα όσο προχωράει η μέρα.',
        en:
          'Halfway along the tunnel there is a dome with a round opening at its top. Light ' +
          'falls through it and moves across the floor as the day goes on.',
      },
    },
  },

  // ---------------------------------------------------------- archbishop's palace
  {
    id: 'nicosia-archbishops-palace',
    cityId: 'nicosia',
    emoji: '⛪',
    category: 'history',
    difficulty: 2,

    name: { el: 'Αρχιεπισκοπικό Μέγαρο', en: 'The Archbishop’s Palace' },
    tagline: {
      el: 'Μοιάζει πεντακοσίων ετών και είναι νεότερο από τη γιαγιά σου',
      en: 'It looks five hundred years old and is younger than your grandmother',
    },
    story: {
      el:
        'Στην πλατεία Αρχιεπισκόπου Κυπριανού στέκεται ένα παλάτι με καμάρες, σκαλιστές ' +
        'πέτρες και μπαλκόνια που φωνάζουν «Μεσαίωνας». Δεν είναι. Χτίστηκε γύρω στο ' +
        '1960, από αρχιτέκτονες που δανείστηκαν επίτηδες βυζαντινά και ενετικά σχήματα ' +
        'για να δείχνει το κτίριο τόσο παλιό όσο η Εκκλησία που στεγάζει. Δίπλα του ' +
        'όμως στέκεται κάτι πραγματικά παλιό: ο μικρός καθεδρικός ναός του Αγίου Ιωάννη, ' +
        'του 1662, με τους τοίχους του καλυμμένους ολόκληρους με ζωγραφιές. Μπροστά στο ' +
        'παλάτι είναι το άγαλμα του Μακαρίου Γ΄, που ήταν ταυτόχρονα αρχιεπίσκοπος και, ' +
        'από το 1960, ο πρώτος πρόεδρος της Κύπρου. Φορούσε πάντα το μαύρο ράσο του, ' +
        'ακόμα και όταν συναντούσε ηγέτες άλλων χωρών. Για είκοσι χρόνια εδώ στεκόταν ' +
        'ένα μπρούντζινο άγαλμά του δέκα μέτρων, ψηλό όσο τριώροφο σπίτι. Το 2008 το ' +
        'φόρτωσαν και το πήγαν στα βουνά, στο Θρονί κοντά στο Μοναστήρι του Κύκκου. Στη ' +
        'θέση του ήρθε ένα πολύ μικρότερο.',
      en:
        'On Archbishop Kyprianos Square stands a palace with arches, carved stone and ' +
        'balconies that shout “Middle Ages”. It is not. It was built around 1960 by ' +
        'architects who deliberately borrowed Byzantine and Venetian shapes so the building ' +
        'would look as old as the Church it houses. Next to it, though, stands something ' +
        'genuinely old: the small cathedral of St John, from 1662, its walls covered edge to ' +
        'edge with paintings. In front of the palace is the statue of Makarios III, who was ' +
        'at the same time an archbishop and, from 1960, the first president of Cyprus. He ' +
        'always wore his black robe, even when meeting the leaders of other countries. For ' +
        'twenty years a bronze statue of him ten metres high, as tall as a three-storey ' +
        'house, stood here. In 2008 it was loaded up and driven into the mountains, to ' +
        'Throni near Kykkos Monastery. A much smaller one took its place.',
    },
    facts: [
      {
        el: 'Το παλάτι χτίστηκε γύρω στο 1960, αν και το σχέδιό του αντιγράφει πολύ παλαιότερα κτίρια.',
        en: 'The palace was built around 1960, although its design copies far older buildings.',
      },
      {
        el: 'Ο ναός του Αγίου Ιωάννη δίπλα του χτίστηκε το 1662 και είναι ζωγραφισμένος παντού.',
        en: 'The church of St John beside it was built in 1662 and is painted all over inside.',
      },
      {
        el: 'Το μπρούντζινο άγαλμα του Μακαρίου, ύψους δέκα μέτρων, μεταφέρθηκε στα βουνά το 2008.',
        en: 'The bronze statue of Makarios, ten metres tall, was moved to the mountains in 2008.',
      },
    ],
    location: {
      lat: 35.173,
      lng: 33.3675,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q4140950', deltaM: 0 },
        { kind: 'wikipedia', ref: "Archbishop's Palace, Nicosia", deltaM: 0 },
      ],
      verifiedAt: '2026-09-14',
      note:
        'St John’s Cathedral is a separate Wikidata item 48 m away, but it graded D on a ' +
        'three-decimal Wikipedia coordinate that lands 166 m off, so it is told inside this ' +
        'place rather than pinned. Both stand on the same square. OSM fetch failed here.',
      findIt: {
        el: 'Πλατεία Αρχιεπισκόπου Κυπριανού. Το άγαλμα με το ράσο είναι μπροστά· ο μικρός ναός στο πλάι.',
        en: 'Archbishop Kyprianos Square. The robed statue stands in front; the small church is to one side.',
      },
    },
    question: {
      q: {
        el: 'Γιατί το παλάτι δείχνει πολύ παλαιότερο απ’ ό,τι είναι;',
        en: 'Why does the palace look much older than it really is?',
      },
      answers: [
        { el: 'Αντιγράφει επίτηδες παλιά σχήματα', en: 'It copies old shapes on purpose' },
        { el: 'Οι πέτρες του ήρθαν από κάστρο', en: 'Its stones came from a castle' },
        { el: 'Το έχτισαν πάνω σε ερείπια', en: 'It was built on top of ruins' },
        { el: 'Το μαύρισε ο ήλιος της Κύπρου', en: 'The Cyprus sun darkened it' },
      ],
      explanation: {
        el:
          'Χτίστηκε γύρω στο 1960. Οι αρχιτέκτονες δανείστηκαν βυζαντινές και ενετικές ' +
          'φόρμες, ώστε το κτίριο να φαίνεται τόσο παλιό όσο η Εκκλησία που στεγάζει.',
        en:
          'It was built around 1960. The architects borrowed Byzantine and Venetian forms so ' +
          'the building would look as old as the Church it houses.',
      },
    },
  },

  // -------------------------------------------------------- pancyprian gymnasium
  {
    id: 'nicosia-pancyprian-gymnasium',
    cityId: 'nicosia',
    emoji: '🎓',
    category: 'history',
    difficulty: 2,

    name: { el: 'Παγκύπριο Γυμνάσιο', en: 'The Pancyprian Gymnasium' },
    tagline: {
      el: 'Το κουδούνι του χτυπάει από το 1812 χωρίς διακοπή',
      en: 'Its bell has been ringing since 1812 without a break',
    },
    story: {
      el:
        'Το 1812 ο Αρχιεπίσκοπος Κυπριανός άνοιξε εδώ μια σχολή, ώστε τα παιδιά της ' +
        'Κύπρου να μαθαίνουν γράμματα. Τότε το νησί το κυβερνούσαν οι Οθωμανοί. Από ' +
        'εκείνη τη χρονιά μέχρι σήμερα το σχολείο δεν έκλεισε ποτέ, και είναι το ' +
        'παλαιότερο σχολείο της Κύπρου που κάνει ακόμα μάθημα. Το σημερινό όνομά του, ' +
        '«Παγκύπριον Γυμνάσιον», το πήρε το 1896. Το μεγάλο κτίριο με τις κολόνες ' +
        'είναι χτισμένο από πουρόπετρα, τον ντόπιο μαλακό ασβεστόλιθο στο χρώμα της ' +
        'άμμου. Σχεδόν όλη η παλιά Λευκωσία είναι από αυτή την πέτρα, και γι’ αυτό όλη η ' +
        'πόλη γίνεται χρυσαφένια το απόγευμα. Μέσα, ανάμεσα στις τάξεις, υπάρχουν ' +
        'πραγματικές συλλογές: πέτρες και κοχύλια, αρχαία αγγεία, νομίσματα, πίνακες. ' +
        'Δίπλα του στέκεται η Σεβέρειος Βιβλιοθήκη, του 1949, με χιλιάδες σπάνια βιβλία. ' +
        'Φαντάσου να βγαίνεις από το μάθημα των μαθηματικών και να περνάς μπροστά από ' +
        'μια βιτρίνα με απολιθώματα.',
      en:
        'In 1812 Archbishop Kyprianos opened a school here so that the children of Cyprus ' +
        'could learn to read and write. The island was ruled by the Ottomans then. From ' +
        'that year to this one the school has never closed, and it is the oldest school in ' +
        'Cyprus still holding lessons. It took its present name, the Pancyprian Gymnasium, ' +
        'in 1896. The big columned building is made of pouropetra, the soft local ' +
        'limestone the colour of sand. Almost all of old Nicosia is built from that stone, ' +
        'which is why the whole city turns golden in the late afternoon. Inside, among the ' +
        'classrooms, there are real collections: rocks and shells, ancient pots, coins, ' +
        'paintings. Next door stands the Severios Library, from 1949, with thousands of ' +
        'rare books. Imagine coming out of a maths lesson and walking past a case of fossils.',
    },
    facts: [
      {
        el: 'Άνοιξε το 1812 και δεν έχει κλείσει από τότε ούτε μία σχολική χρονιά.',
        en: 'It opened in 1812 and has not closed for a single school year since.',
      },
      {
        el: 'Πήρε το όνομα «Παγκύπριον Γυμνάσιον» το 1896.',
        en: 'It took the name Pancyprian Gymnasium in 1896.',
      },
      {
        el: 'Είναι χτισμένο από πουρόπετρα, τον μαλακό ασβεστόλιθο της Λευκωσίας.',
        en: 'It is built of pouropetra, the soft limestone of Nicosia.',
      },
    ],
    location: {
      lat: 35.1733,
      lng: 33.3692,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q3563324', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Pancyprian Gymnasium', deltaM: 5 },
      ],
      verifiedAt: '2026-09-14',
      note: 'The centre of the school block, not a door. OSM fetch failed on this pass.',
      findIt: {
        el: 'Το μεγάλο κιτρινωπό κτίριο με τις κολόνες, απέναντι από την Αρχιεπισκοπή.',
        en: 'The big yellowish building with the columns, across the square from the Archbishop’s Palace.',
      },
    },
    question: {
      q: {
        el: 'Γιατί η παλιά Λευκωσία γίνεται χρυσαφένια το απόγευμα;',
        en: 'Why does old Nicosia turn golden in the late afternoon?',
      },
      answers: [
        { el: 'Η πέτρα της έχει χρώμα άμμου', en: 'Its stone is the colour of sand' },
        { el: 'Τα σπίτια της είναι βαμμένα', en: 'Its houses have been painted' },
        { el: 'Ο ουρανός εκεί είναι κίτρινος', en: 'The sky above there is yellow' },
        { el: 'Οι δρόμοι έχουν χρυσά φανάρια', en: 'The lanes have golden lamps' },
      ],
      explanation: {
        el:
          'Είναι χτισμένη από πουρόπετρα, έναν μαλακό ασβεστόλιθο στο χρώμα της άμμου. ' +
          'Όταν ο ήλιος χαμηλώνει, η πέτρα ανάβει.',
        en:
          'It is built from pouropetra, a soft limestone the colour of sand. When the sun ' +
          'drops low, the stone lights up.',
      },
    },
  },

  // ------------------------------------------------------------ kornesios mansion
  {
    id: 'nicosia-kornesios-mansion',
    cityId: 'nicosia',
    emoji: '🏠',
    category: 'museum',
    difficulty: 3,

    name: {
      el: 'Οικία Χατζηγεωργάκη Κορνέσιου',
      en: 'The Hadjigeorgakis Kornesios Mansion',
    },
    tagline: {
      el: 'Το σπίτι του ανθρώπου που μιλούσε και για τις δύο πλευρές',
      en: 'The house of the man who spoke for both sides',
    },
    story: {
      el:
        'Στα χρόνια των Οθωμανών, ο κυβερνήτης του νησιού μιλούσε τουρκικά και οι ' +
        'περισσότεροι κάτοικοι ελληνικά. Ανάμεσά τους στεκόταν ένας άνθρωπος με έναν ' +
        'παράξενο τίτλο: ο δραγουμάνος, δηλαδή ο διερμηνέας. Δεν μετέφραζε μόνο λέξεις. ' +
        'Μάζευε φόρους, μετέφερε παράπονα, τα κατάφερνε ή τα χαλούσε. Ο Χατζηγεωργάκης ' +
        'Κορνέσιος, από την Κρήτου Τέρρα της Πάφου, ήταν δραγουμάνος από το 1779 ως το ' +
        '1809, και έγινε ο πλουσιότερος Κύπριος της εποχής του. Αυτό είναι το σπίτι που ' +
        'έχτισε: το ωραιότερο αρχοντικό του δέκατου όγδοου αιώνα στη Λευκωσία, με αυλή, ' +
        'σκαλιστό οικόσημο πάνω από την πόρτα, ξύλινο κλειστό μπαλκόνι και δικό του ' +
        'μικρό χαμάμ μέσα στο σπίτι. Η θέση του ήταν επικίνδυνη όσο ήταν και ισχυρή: το ' +
        '1809 τον κατηγόρησαν, τον πήραν στην Κωνσταντινούπολη και εκεί έχασε τη ζωή ' +
        'του. Σήμερα το σπίτι είναι το Εθνολογικό Μουσείο Κύπρου, και το ίδιο το κτίριο ' +
        'είναι το μεγαλύτερο έκθεμά του.',
      en:
        'In Ottoman times the governor of the island spoke Turkish and most of its people ' +
        'spoke Greek. Between them stood a man with an odd title: the dragoman, the ' +
        'interpreter. He did not only translate words. He collected taxes, carried ' +
        'complaints, smoothed things over or made them worse. Hadjigeorgakis Kornesios, ' +
        'from Kritou Terra in Paphos, was dragoman from 1779 to 1809, and became the richest ' +
        'Cypriot of his day. This is the house he built: the finest eighteenth-century ' +
        'mansion in Nicosia, with a courtyard, a carved coat of arms over the door, a closed ' +
        'wooden balcony and a small hammam of its own inside the house. His position was as ' +
        'dangerous as it was powerful: in 1809 he was accused, taken to Constantinople, and ' +
        'lost his life there. Today the house is the Cyprus Ethnological Museum, and the ' +
        'building itself is its largest exhibit.',
    },
    facts: [
      {
        el: 'Ο Χατζηγεωργάκης Κορνέσιος ήταν δραγουμάνος της Κύπρου από το 1779 ως το 1809.',
        en: 'Hadjigeorgakis Kornesios was dragoman of Cyprus from 1779 to 1809.',
      },
      {
        el: 'Καταγόταν από την Κρήτου Τέρρα, ένα χωριό της επαρχίας Πάφου.',
        en: 'He came from Kritou Terra, a village in the district of Paphos.',
      },
      {
        el: 'Το σπίτι έχει δικό του μικρό χαμάμ, χτισμένο μέσα στο ίδιο το αρχοντικό.',
        en: 'The house has a small hammam of its own, built inside the mansion itself.',
      },
    ],
    location: {
      lat: 35.17194,
      lng: 33.3669,
      anchor: 'centroid',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q5637923', deltaM: 0 },
        { kind: 'osm', ref: 'way/808783879', deltaM: 14 },
        { kind: 'wikipedia', ref: 'Hadjigeorgakis Kornesios Mansion', deltaM: 0 },
      ],
      verifiedAt: '2026-09-14',
      findIt: {
        el: 'Οδός Πατριάρχου Γρηγορίου. Ψάξε το σκαλιστό οικόσημο πάνω από τη μεγάλη ξύλινη πόρτα.',
        en: 'On Patriarchou Grigoriou Street. Look for the carved coat of arms above the big wooden door.',
      },
    },
    question: {
      q: {
        el: 'Τι δουλειά έκανε ο δραγουμάνος;',
        en: 'What was the job of a dragoman?',
      },
      answers: [
        { el: 'Μετέφερε λόγια ανάμεσα σε δύο γλώσσες', en: 'He carried words between two languages' },
        { el: 'Φύλαγε τα κλειδιά των τριών πυλών', en: 'He guarded the keys of the three gates' },
        { el: 'Δίδασκε γράμματα στα παιδιά της πόλης', en: 'He taught the children of the city to read' },
        { el: 'Σχεδίαζε τα τείχη και τους προμαχώνες', en: 'He drew the plans of the walls and bastions' },
      ],
      explanation: {
        el:
          'Ήταν ο διερμηνέας ανάμεσα στον Οθωμανό κυβερνήτη και τους κατοίκους. Μαζί με ' +
          'τις λέξεις μετέφερε φόρους και παράπονα, και αυτό τον έκανε πολύ ισχυρό.',
        en:
          'He was the interpreter between the Ottoman governor and the people. Along with ' +
          'the words he carried taxes and complaints, and that made him very powerful.',
      },
    },

    museum: {
      doorNote: {
        el:
          'Εδώ το ίδιο το σπίτι είναι το έκθεμα. Από τον Σεπτέμβριο του 2026 είναι κλειστό ' +
          'μέχρι νεωτέρας για τεχνικούς λόγους, οπότε ρώτα αν άνοιξε πριν πας.',
        en:
          'Here the house itself is the exhibit. Since September 2026 it has been closed until ' +
          'further notice for technical reasons, so ask whether it has reopened before you go.',
      },
      rooms: [
        {
          id: 'nicosia-kornesios-mansion-courtyard',
          emoji: '🚪',
          name: { el: 'Η αυλή και η πόρτα', en: 'The courtyard and the door' },
          intro: {
            el:
              'Ένα αρχοντικό της εποχής δεν έδειχνε τίποτα στον δρόμο. Περνάς μια βαριά ' +
              'πόρτα και βρίσκεσαι ξαφνικά σε μια ήσυχη αυλή με πέτρινες σκάλες, όπου ο ' +
              'θόρυβος της πόλης σβήνει. Όλο το σπίτι κοιτάζει προς τα μέσα. Εδώ αρχίζεις ' +
              'να καταλαβαίνεις πώς σκεφτόταν κάποιος που έχτιζε σπίτι σε έναν τόπο πολύ ' +
              'ζεστό και όχι πάντα ασφαλή.',
            en:
              'A mansion of that age showed nothing to the street. You pass through a heavy ' +
              'door and are suddenly in a quiet courtyard with stone stairs, where the noise ' +
              'of the city dies away. The whole house looks inwards. This is where you start ' +
              'to understand how somebody thought who was building in a place that was very ' +
              'hot and not always safe.',
          },
          exhibits: [
            {
              id: 'nicosia-kornesios-coat-of-arms',
              name: { el: 'Το σκαλιστό οικόσημο', en: 'The carved coat of arms' },
              blurb: {
                el:
                  'Πάνω από τη μεγάλη ξύλινη πόρτα υπάρχει μια σκαλισμένη πέτρα με έμβλημα. ' +
                  'Δεν είναι διακόσμηση. Είναι ανακοίνωση. Λέει σε όποιον περνάει από τον ' +
                  'δρόμο ποιος μένει μέσα και πόσο σημαντικός είναι, σε μια εποχή που ' +
                  'ελάχιστοι ήξεραν να διαβάσουν γράμματα αλλά όλοι διάβαζαν σύμβολα. Ένας ' +
                  'δραγουμάνος δεν είχε στρατό. Είχε κύρος, και το κύρος έπρεπε να ' +
                  'φαίνεται από μακριά. Το σπίτι χτίστηκε το 1793.',
                en:
                  'Above the big wooden door is a carved stone with an emblem on it. That is ' +
                  'not decoration. It is an announcement. It tells anyone passing in the ' +
                  'street who lives inside and how important he is, in an age when few people ' +
                  'could read letters but everybody could read symbols. A dragoman had no ' +
                  'army. He had standing, and standing had to be visible from a distance. The house was ' +
                  'built in 1793.',
              },
              question: {
                q: {
                  el: 'Γιατί μπήκε το οικόσημο πάνω από την πόρτα;',
                  en: 'Why was the coat of arms put above the door?',
                },
                answers: [
                  { el: 'Για να δείχνει ποιος μένει μέσα', en: 'To show who lives inside' },
                  { el: 'Για να κρατάει σταθερή την πόρτα', en: 'To hold the door steady' },
                  { el: 'Για να στάζει αλλού η βροχή', en: 'To send the rain elsewhere' },
                  { el: 'Για να μετράνε την ώρα οι γείτονες', en: 'To tell neighbours the time' },
                ],
                explanation: {
                  el:
                    'Ήταν το όνομα του σπιτιού για όσους δεν διάβαζαν. Το σύμβολο έλεγε ' +
                    'αμέσως πόσο σημαντικός ήταν ο ιδιοκτήτης.',
                  en:
                    'It was the name of the house for people who could not read. The symbol ' +
                    'said at once how important the owner was.',
                },
              },
            },
            {
              id: 'nicosia-kornesios-courtyard',
              name: { el: 'Η εσωτερική αυλή', en: 'The inner courtyard' },
              blurb: {
                el:
                  'Η αυλή είναι το κλιματιστικό του σπιτιού. Τη νύχτα ο αέρας κρυώνει και ' +
                  'κατεβαίνει μέσα της· τη μέρα οι τοίχοι τη σκιάζουν και το δροσερό μένει ' +
                  'παγιδευμένο πολύ αφότου ο δρόμος έξω έχει γίνει φούρνος. Γύρω της ' +
                  'ανοίγουν όλα τα δωμάτια, οπότε η αυλή είναι και διάδρομος. Μια πέτρινη ' +
                  'σκάλα ανεβαίνει στον επάνω όροφο, εκεί όπου ζούσε η οικογένεια. Οι ' +
                  'αποθήκες και τα εργαστήρια έμεναν κάτω.',
                en:
                  'The courtyard is the air conditioning of the house. At night cool air ' +
                  'sinks into it; by day the walls shade it and the coolness stays trapped ' +
                  'long after the street outside has turned into an oven. Every room opens ' +
                  'onto it, so the courtyard is the corridor too. A stone stair climbs to the ' +
                  'upper floor, where the family lived. Storerooms and workrooms stayed below.',
              },
              question: {
                q: {
                  el: 'Τι κάνει η αυλή για το σπίτι το καλοκαίρι;',
                  en: 'What does the courtyard do for the house in summer?',
                },
                answers: [
                  { el: 'Κρατάει τον δροσερό αέρα μέσα', en: 'It keeps the cool air inside' },
                  { el: 'Μαζεύει νερό για τον χειμώνα', en: 'It stores water for winter' },
                  { el: 'Ζεσταίνει τα δωμάτια από κάτω', en: 'It warms the rooms below' },
                  { el: 'Κρύβει το σπίτι από τον ήλιο', en: 'It hides the house from view' },
                ],
                explanation: {
                  el:
                    'Ο κρύος νυχτερινός αέρας κατεβαίνει στην αυλή και οι τοίχοι τη ' +
                    'σκιάζουν όλη μέρα, οπότε η δροσιά μένει μέσα.',
                  en:
                    'Cool night air sinks into the courtyard and the walls shade it all day, ' +
                    'so the coolness stays in.',
                },
              },
            },
            {
              id: 'nicosia-kornesios-balcony',
              name: { el: 'Το ξύλινο κλειστό μπαλκόνι', en: 'The closed wooden balcony' },
              blurb: {
                el:
                  'Στον επάνω όροφο ένα ξύλινο κουτί προεξέχει πάνω από τον δρόμο, με ' +
                  'μικρά παραθυράκια σε τρεις πλευρές. Στην Κύπρο πολλοί το λένε κιόσκι. ' +
                  'Κάνει τρία πράγματα ταυτόχρονα: μεγαλώνει το δωμάτιο χωρίς να ' +
                  'μεγαλώσει το οικόπεδο, πιάνει το αεράκι από όποια μεριά κι αν φυσάει, ' +
                  'και επιτρέπει σε αυτόν που κάθεται μέσα να βλέπει ολόκληρο τον δρόμο ' +
                  'χωρίς να τον βλέπει κανένας. Για έναν άνθρωπο που ζούσε από τις ' +
                  'πληροφορίες, το τρίτο ήταν το πιο χρήσιμο.',
                en:
                  'On the upper floor a wooden box juts out over the street, with small ' +
                  'windows on three sides. Many Cypriots call it a kioski. It does three ' +
                  'things at once: it makes the room bigger without making the plot bigger, ' +
                  'it catches the breeze from whichever side it blows, and it lets whoever ' +
                  'sits inside watch the whole street without being seen. For a man who lived ' +
                  'on information, the third was the most useful of the three.',
              },
              question: {
                q: {
                  el: 'Τι μπορούσε να κάνει όποιος καθόταν μέσα στο κιόσκι;',
                  en: 'What could a person sitting inside the kioski do?',
                },
                answers: [
                  { el: 'Να βλέπει τον δρόμο χωρίς να φαίνεται', en: 'Watch the street without being seen' },
                  { el: 'Να κατεβαίνει με σκάλα στον δρόμο', en: 'Climb down a ladder to the street' },
                  { el: 'Να ακούει τι λέγανε μέσα στο παλάτι', en: 'Hear what was said in the palace' },
                  { el: 'Να κλειδώνει όλες τις πύλες όλης της πόλης', en: 'Lock all the gates of the whole city' },
                ],
                explanation: {
                  el:
                    'Η δουλειά του ήταν να ξέρει τι γίνεται. Από το κιόσκι έβλεπε ποιος ' +
                    'έρχεται και ποιος φεύγει, χωρίς να τον προσέξει κανείς.',
                  en:
                    'His work was knowing what was going on. From the kioski he saw who came ' +
                    'and who went, and nobody noticed him.',
                },
              },
            },
          ],
        },
        {
          id: 'nicosia-kornesios-mansion-ontas',
          emoji: '🛋️',
          name: { el: 'Ο οντάς', en: 'The great room' },
          intro: {
            el:
              'Ο οντάς ήταν το δωμάτιο υποδοχής, εκεί όπου ο δραγουμάνος δεχόταν ' +
              'επισκέπτες που έπρεπε να εντυπωσιαστούν. Δεν έχει τραπέζι ούτε καρέκλες. ' +
              'Έχει χαμηλούς καναπέδες γύρω γύρω στους τοίχους, ένα ταβάνι από σκαλιστό ' +
              'ξύλο και πολύ φως. Κάθεσαι χαμηλά, μιλάς ήσυχα και κοιτάς ψηλά. Έτσι ' +
              'γίνονταν οι σοβαρές κουβέντες.',
            en:
              'The ontas was the reception room, where the dragoman received visitors who ' +
              'were meant to be impressed. It has no table and no chairs. It has low couches ' +
              'all round the walls, a ceiling of carved wood and a great deal of light. You ' +
              'sit low, you speak quietly and you look up. That is how the serious ' +
              'conversations were held.',
          },
          exhibits: [
            {
              id: 'nicosia-kornesios-ceiling',
              name: { el: 'Το ξύλινο ταβάνι', en: 'The wooden ceiling' },
              blurb: {
                el:
                  'Σήκωσε το κεφάλι. Το ταβάνι του οντά είναι ολόκληρο από ξύλο, κομμένο ' +
                  'σε δεκάδες μικρά σχήματα που κουμπώνουν μεταξύ τους σαν παζλ. Κανένα ' +
                  'κομμάτι δεν είναι μεγάλο, γιατί το ξύλο στην Κύπρο ήταν ακριβό και ' +
                  'δύσκολο να βρεθεί σε μεγάλα μήκη. Οι μαραγκοί το γύρισαν σε πλεονέκτημα: ' +
                  'με πολλά μικρά κομμάτια φτιάχνεις σχέδιο, ενώ με μία μεγάλη σανίδα ' +
                  'φτιάχνεις μόνο ταβάνι.',
                en:
                  'Look up. The ceiling of the ontas is entirely wooden, cut into dozens of ' +
                  'small shapes that lock into one another like a puzzle. No piece is large, ' +
                  'because timber in Cyprus was expensive and hard to find in long lengths. ' +
                  'The carpenters turned that into an advantage: with many small pieces you ' +
                  'make a pattern, while with one big plank you only make a ceiling.',
              },
              question: {
                q: {
                  el: 'Γιατί το ταβάνι έγινε από πολλά μικρά κομμάτια;',
                  en: 'Why was the ceiling made from many small pieces?',
                },
                answers: [
                  { el: 'Το μακρύ ξύλο ήταν σπάνιο εδώ', en: 'Long timber was scarce here' },
                  { el: 'Τα μικρά κομμάτια δεν καίγονται', en: 'Small pieces do not burn' },
                  { el: 'Έτσι το ταβάνι έβγαινε ψηλότερο', en: 'It made the ceiling taller' },
                  { el: 'Για να ακούγεται καλύτερα η μουσική', en: 'It made music sound better' },
                ],
                explanation: {
                  el:
                    'Στο νησί δεν έβρισκες εύκολα μεγάλες σανίδες. Οι μαραγκοί έκαναν την ' +
                    'ανάγκη σχέδιο, κυριολεκτικά.',
                  en:
                    'Big planks were hard to come by on the island. The carpenters turned ' +
                    'the shortage into a pattern, quite literally.',
                },
              },
            },
            {
              id: 'nicosia-kornesios-divans',
              name: { el: 'Οι χαμηλοί καναπέδες', en: 'The low couches' },
              blurb: {
                el:
                  'Γύρω από τους τοίχους τρέχει μια συνεχής χαμηλή σειρά καθισμάτων με ' +
                  'μαξιλάρια. Στη μέση δεν υπάρχει τραπέζι, οπότε το πάτωμα μένει ελεύθερο ' +
                  'και όλοι βλέπουν ο ένας τον άλλον. Ο επισκέπτης έβγαζε τα παπούτσια του ' +
                  'πριν μπει, όπως ακόμα γίνεται σε πολλά σπίτια. Και επειδή κάθεσαι ' +
                  'χαμηλά, το δωμάτιο δείχνει ψηλότερο και το σκαλιστό, βαμμένο ταβάνι από ' +
                  'πάνω κάνει ακόμα καλύτερα τη δουλειά του: να εντυπωσιάσει τον καλεσμένο.',
                en:
                  'A continuous low run of seating with cushions goes right round the walls. ' +
                  'There is no table in the middle, so the floor stays open and everyone can ' +
                  'see everyone else. A visitor took off his shoes before stepping in, as ' +
                  'people still do in many homes. And because you sit low, the room looks ' +
                  'taller and the carved and painted ceiling above does its job even better: ' +
                  'impressing the guest.',
              },
              question: {
                q: {
                  el: 'Γιατί το δωμάτιο δείχνει ψηλότερο από τους καναπέδες;',
                  en: 'Why does the room seem taller from the low couches?',
                },
                answers: [
                  { el: 'Κάθεσαι πολύ πιο κοντά στο πάτωμα', en: 'You sit much closer to the floor' },
                  { el: 'Οι τοίχοι γέρνουν προς τα έξω', en: 'The walls lean out at the top' },
                  { el: 'Οι καναπέδες βουλιάζουν στο πάτωμα', en: 'The couches sink into the floor' },
                  { el: 'Το πάτωμα κατηφορίζει προς τη μέση', en: 'The floor slopes down to the middle' },
                ],
                explanation: {
                  el:
                    'Από χαμηλά, ό,τι είναι από πάνω σου δείχνει ψηλότερο. Γι’ αυτό το ' +
                    'σκαλιστό ταβάνι εντυπωσιάζει ακόμα περισσότερο τον καθισμένο επισκέπτη.',
                  en:
                    'From low down, everything above you looks higher. That is why the carved ' +
                    'ceiling impresses a seated guest even more.',
                },
              },
            },
            {
              id: 'nicosia-kornesios-house-hammam',
              name: { el: 'Το χαμάμ του σπιτιού', en: 'The hammam of the house' },
              blurb: {
                el:
                  'Σε μια γωνιά του αρχοντικού υπάρχει ένα μικροσκοπικό λουτρό με θόλο: ' +
                  'ένα ιδιωτικό χαμάμ, μέσα στο ίδιο το σπίτι. Στη Λευκωσία του δέκατου ' +
                  'όγδοου αιώνα οι άνθρωποι πήγαιναν στα δημόσια λουτρά της πόλης. Το να ' +
                  'έχεις δικό σου ήταν σαν να έχεις σήμερα πισίνα στο σαλόνι. Ο θόλος ' +
                  'έχει μικρές τρύπες με τζαμάκια, ώστε να μπαίνει φως χωρίς να φεύγει ο ' +
                  'ατμός, και το πάτωμα ζεσταινόταν από κάτω.',
                en:
                  'In a corner of the mansion there is a tiny domed bathroom: a private ' +
                  'hammam, inside the house itself. In eighteenth-century Nicosia people went ' +
                  'to the public baths of the city. Having your own was like having a ' +
                  'swimming pool in the living room today. The dome is pierced with small ' +
                  'glazed holes, so light comes in without the steam getting out, and the ' +
                  'floor was heated from underneath.',
              },
              question: {
                q: {
                  el: 'Γιατί ο θόλος έχει μικρές τρύπες με τζάμι;',
                  en: 'Why is the dome pierced with small glazed holes?',
                },
                answers: [
                  { el: 'Μπαίνει φως και μένει ο ατμός', en: 'Light comes in, steam stays in' },
                  { el: 'Για να φεύγει γρήγορα ο ατμός', en: 'So the steam escapes quickly' },
                  { el: 'Για να μπαίνει βρόχινο νερό', en: 'So rainwater can come inside' },
                  { el: 'Για να ελαφρύνει ο πέτρινος θόλος', en: 'So the stone dome weighs less' },
                ],
                explanation: {
                  el:
                    'Ένα λουτρό χρειάζεται φως αλλά δεν αντέχει ρεύμα. Τα τζαμάκια λύνουν ' +
                    'και τα δύο μαζί.',
                  en:
                    'A bathhouse needs light but cannot take a draught. The small panes solve ' +
                    'both problems at once.',
                },
              },
            },
          ],
        },
      ],
      riddles: [
        {
          id: 'nicosia-kornesios-mansion-riddle-1',
          difficulty: 1,
          prompt: {
            el:
              'Είμαι ένα μικρό δωμάτιο με θόλο, γεμάτο ζεστό ατμό. Οι περισσότεροι ' +
              'άνθρωποι της πόλης πήγαιναν στα δημόσια λουτρά, όμως ο αφέντης αυτού του ' +
              'σπιτιού είχε εμένα δικό του.',
            en:
              'I am a small domed room full of warm steam. Most people in the city went to ' +
              'the public baths, but the master of this house had me all to himself.',
          },
          hint: {
            el: 'Το φως μου μπαίνει από τζαμάκια στον θόλο.',
            en: 'My light comes in through small panes in the dome.',
          },
          answerExhibitId: 'nicosia-kornesios-house-hammam',
        },
        {
          id: 'nicosia-kornesios-mansion-riddle-2',
          difficulty: 2,
          prompt: {
            el:
              'Είμαι φτιαγμένο από δεκάδες μικρά κομμάτια ξύλου που κουμπώνουν σαν παζλ. ' +
              'Για να με δεις, πρέπει να καθίσεις χαμηλά στον καναπέ και να σηκώσεις το ' +
              'κεφάλι.',
            en:
              'I am made of dozens of small pieces of wood that lock together like a ' +
              'puzzle. To see me, you have to sit low on the couch and lift your head.',
          },
          hint: {
            el: 'Βρίσκομαι πάνω από το δωμάτιο υποδοχής.',
            en: 'I am found above the reception room.',
          },
          answerExhibitId: 'nicosia-kornesios-ceiling',
        },
        {
          id: 'nicosia-kornesios-mansion-riddle-3',
          difficulty: 3,
          prompt: {
            el:
              'Κρέμομαι πάνω από τον δρόμο και έχω παραθυράκια σε τρεις πλευρές. Αυτός ' +
              'που καθόταν μέσα μου έβλεπε ποιος έρχεται και ποιος φεύγει, και κανένας ' +
              'δεν έβλεπε αυτόν.',
            en:
              'I hang out over the street and I have small windows on three sides. Whoever ' +
              'sat inside me saw who was coming and who was going, and nobody at all saw ' +
              'him.',
          },
          hint: {
            el: 'Είμαι από ξύλο και προεξέχω από τον επάνω όροφο.',
            en: 'I am wooden and I stick out from the upper floor.',
          },
          answerExhibitId: 'nicosia-kornesios-balcony',
        },
      ],
    },
  },

  // -------------------------------------------------------------- omeriye mosque
  {
    id: 'nicosia-omeriye-mosque',
    cityId: 'nicosia',
    emoji: '🕌',
    category: 'history',
    difficulty: 2,

    name: { el: 'Τζαμί Ομεριέ', en: 'The Omeriye Mosque' },
    tagline: {
      el: 'Γοτθική εκκλησία από τη Γαλλία, με μιναρέ στο πλάι',
      en: 'A Gothic church from France, with a minaret at its side',
    },
    story: {
      el:
        'Κοίτα τις πόρτες πριν κοιτάξεις οτιδήποτε άλλο. Είναι μυτερές, σαν την άκρη ' +
        'ενός βέλους. Αυτό το σχήμα λέγεται γοτθικό και το έφεραν από τη Γαλλία οι ' +
        'Λουζινιανοί, μια γαλλική οικογένεια που ήταν βασιλιάδες της Κύπρου για ' +
        'τριακόσια χρόνια. Τον δέκατο τέταρτο αιώνα μοναχοί Αυγουστινιανοί έχτισαν εδώ ' +
        'μια μεγάλη εκκλησία της Αγίας Μαρίας με τέτοιες καμάρες, ίδιες με εκείνες των ' +
        'μεγάλων εκκλησιών του Παρισιού. Το 1570 η εκκλησία έπαθε σοβαρές ζημιές στην ' +
        'πολιορκία της πόλης, και τον επόμενο χρόνο έγινε τζαμί. Δίπλα της υψώθηκε ο ' +
        'μιναρές, ο ψηλός λεπτός πύργος από όπου ακούγεται το κάλεσμα της προσευχής. ' +
        'Πήρε το όνομα Ομεριέ επειδή οι άνθρωποι πίστευαν πως αιώνες πριν είχε ' +
        'ξεκουραστεί εδώ ο χαλίφης Ομάρ. Στο δάπεδο, αν κοιτάξεις κάτω, θα δεις πέτρες ' +
        'με σκαλισμένα σχήματα: είναι ταφόπλακες από την εποχή των Λουζινιανών, που ' +
        'ξαναχρησιμοποιήθηκαν ως πλακάκια. Το τζαμί λειτουργεί κανονικά μέχρι σήμερα.',
      en:
        'Look at the doorways before you look at anything else. They are pointed, like the ' +
        'tip of an arrow. That shape is called Gothic and it was brought from France by the ' +
        'Lusignans, a French family who were kings of Cyprus for three hundred years. In ' +
        'the fourteenth century Augustinian monks built a large church of St Mary here with ' +
        'arches like these, the same as those in the great churches of Paris. In 1570 the ' +
        'church was badly damaged in the siege of the city, and the following year it became ' +
        'a mosque. Beside it rose the minaret, the tall thin tower from which the call to ' +
        'prayer is heard. It was named Omeriye because people believed the caliph Omar had ' +
        'rested here centuries before. On the floor, if you look down, you will see stones ' +
        'with carved shapes: they are gravestones from Lusignan times, reused as paving. The ' +
        'mosque is still in regular use today.',
    },
    facts: [
      {
        el: 'Πριν από το 1571 το κτίριο ήταν εκκλησία των Αυγουστινιανών μοναχών.',
        en: 'Before 1571 the building was a church of the Augustinian monks.',
      },
      {
        el: 'Οι μυτερές γοτθικές καμάρες του ήρθαν στην Κύπρο μαζί με τους Λουζινιανούς από τη Γαλλία.',
        en: 'Its pointed Gothic arches came to Cyprus with the Lusignans from France.',
      },
      {
        el: 'Μέρος του δαπέδου του είναι στρωμένο με ταφόπλακες της εποχής των Λουζινιανών.',
        en: 'Part of its floor is paved with gravestones from the Lusignan period.',
      },
    ],
    location: {
      lat: 35.17192,
      lng: 33.36558,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q20896012', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Ömeriye Mosque', deltaM: 17 },
      ],
      verifiedAt: '2026-09-14',
      note: 'OSM fetch failed on this pass; Wikidata and Wikipedia agree to 17 m.',
      findIt: {
        el: 'Πλατεία Τυλληρίας. Ο μιναρές φαίνεται από μακριά· βγάλε τα παπούτσια σου πριν μπεις.',
        en: 'On Tyllirias Square. The minaret is visible from far off; take your shoes off before going in.',
      },
    },
    question: {
      q: {
        el: 'Τι φανερώνουν οι μυτερές καμάρες του κτιρίου;',
        en: 'What do the building’s pointed arches reveal?',
      },
      answers: [
        { el: 'Ότι χτίστηκε ως γοτθική εκκλησία', en: 'That it was built as a Gothic church' },
        { el: 'Ότι το σχεδίασαν Ενετοί μηχανικοί', en: 'That Venetian engineers designed it' },
        { el: 'Ότι κάποτε ήταν αποθήκη σιταριού', en: 'That it was once a store for grain' },
        { el: 'Ότι η στέγη του ήταν πολύ βαριά', en: 'That its roof was extremely heavy' },
      ],
      explanation: {
        el:
          'Η μυτερή καμάρα είναι γοτθική και ήρθε από τη Γαλλία με τους Λουζινιανούς. Το ' +
          'κτίριο ήταν εκκλησία μοναχών πριν γίνει τζαμί το 1571.',
        en:
          'The pointed arch is Gothic and came from France with the Lusignans. The building ' +
          'was a monks’ church before it became a mosque in 1571.',
      },
    },
  },

  // ------------------------------------------------------------- omeriye hammam
  {
    id: 'nicosia-omeriye-hammam',
    cityId: 'nicosia',
    emoji: '♨️',
    category: 'science',
    difficulty: 3,

    name: { el: 'Χαμάμ Ομεριέ', en: 'The Omeriye Hammam' },
    tagline: {
      el: 'Ένα κτίριο όπου το πάτωμα είναι το καλοριφέρ',
      en: 'A building where the floor itself is the radiator',
    },
    story: {
      el:
        'Απέναντι από το τζαμί, κάτω από χαμηλούς πέτρινους θόλους, υπάρχει ένα λουτρό ' +
        'που δουλεύει ακόμα. Το έχτισε ο Λαλά Μουσταφά Πασάς τη δεκαετία του 1570, ως ' +
        'μέρος του ίδιου συγκροτήματος με το τζαμί. Ένα χαμάμ δεν είναι ένα δωμάτιο ' +
        'αλλά τρία, στη σειρά, και το καθένα πιο ζεστό από το προηγούμενο: μπαίνεις στο ' +
        'κρύο, περνάς στο χλιαρό και καταλήγεις στο καυτό. Το σώμα σου προλαβαίνει να ' +
        'συνηθίσει σε κάθε βήμα. Ο τρόπος που ζεσταίνεται είναι το έξυπνο κομμάτι. Κάτω ' +
        'από το πέτρινο δάπεδο υπάρχει κενός χώρος με χαμηλές κολόνες. Ένας φούρνος στην ' +
        'άκρη στέλνει ζεστό αέρα και καπνό μέσα σε αυτόν τον χώρο, οπότε ζεσταίνεται ' +
        'ολόκληρο το πάτωμα και όχι ο αέρας. Επάνω, οι θόλοι είναι τρυπημένοι με ' +
        'δεκάδες μικρές τρύπες κλεισμένες με χοντρό γυαλί: μπαίνει φως, δεν φεύγει ο ' +
        'ατμός. Το κτίριο αναστηλώθηκε ανάμεσα στο 2002 και το 2004.',
      en:
        'Across from the mosque, under low stone domes, there is a bathhouse that still ' +
        'works. Lala Mustafa Pasha built it in the 1570s, as part of the same complex as the ' +
        'mosque. A hammam is not one room but three, in a row, each hotter than the last: ' +
        'you enter the cold one, move through the warm one and end in the hot one. Your body ' +
        'has time to get used to each step. The way it is heated is the clever part. Under ' +
        'the stone floor there is an empty space held up by low pillars. A furnace at one ' +
        'end sends hot air and smoke into that space, so the whole floor warms up rather ' +
        'than the air. Above, the domes are pierced with dozens of small holes closed with ' +
        'thick glass: light comes in, steam does not get out. The building was restored ' +
        'between 2002 and 2004.',
    },
    facts: [
      {
        el: 'Χτίστηκε τη δεκαετία του 1570 από τον Λαλά Μουσταφά Πασά, μαζί με το τζαμί.',
        en: 'It was built in the 1570s by Lala Mustafa Pasha, together with the mosque.',
      },
      {
        el: 'Έχει τρία δωμάτια στη σειρά, καθένα θερμότερο από το προηγούμενο.',
        en: 'It has three rooms in a row, each one hotter than the one before.',
      },
      {
        el: 'Αναστηλώθηκε ανάμεσα στο 2002 και το 2004 και λειτουργεί ακόμα ως λουτρό.',
        en: 'It was restored between 2002 and 2004 and still works as a bathhouse.',
      },
    ],
    location: {
      lat: 35.1726,
      lng: 33.3654,
      anchor: 'centroid',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q5644014', deltaM: 0 },
        { kind: 'osm', ref: 'way/116919987', deltaM: 6 },
        { kind: 'wikipedia', ref: 'Ömeriye Hamam', deltaM: 0 },
      ],
      verifiedAt: '2026-09-14',
      note:
        'Part of the same Ottoman complex as the mosque, but 77 m from it, so a place of its ' +
        'own and no adjacentPairs entry is needed.',
      findIt: {
        el: 'Απέναντι από το τζαμί, στην ίδια πλατεία. Ψάξε τους χαμηλούς θόλους με τα γυάλινα ματάκια.',
        en: 'Across the same square from the mosque. Look for the low domes with the little glass eyes.',
      },
    },
    question: {
      q: {
        el: 'Πώς ζεσταίνεται το εσωτερικό ενός χαμάμ;',
        en: 'How is the inside of a hammam heated?',
      },
      answers: [
        { el: 'Ζεστός αέρας τρέχει κάτω από το πάτωμα', en: 'Hot air runs underneath the floor' },
        { el: 'Ένα τζάκι καίει στη μέση του δωματίου', en: 'A fireplace burns in the middle of it' },
        { el: 'Ο ήλιος μπαίνει από τα γυάλινα ματάκια', en: 'The sun comes in through the glass eyes' },
        { el: 'Ζεστό νερό κυλάει μέσα στους τοίχους', en: 'Hot water runs inside the walls of it' },
      ],
      explanation: {
        el:
          'Κάτω από το δάπεδο υπάρχει κενός χώρος. Ο φούρνος στέλνει εκεί ζεστό αέρα, ' +
          'οπότε θερμαίνεται η ίδια η πέτρα που πατάς.',
        en:
          'There is an empty space under the floor. The furnace sends hot air into it, so ' +
          'the very stone you stand on is what gets warm.',
      },
    },
  },

  // ------------------------------------------------------------------ faneromeni
  {
    id: 'nicosia-faneromeni',
    cityId: 'nicosia',
    emoji: '🔔',
    category: 'history',
    difficulty: 2,

    name: { el: 'Παναγία Φανερωμένη', en: 'Panagia Faneromeni' },
    tagline: {
      el: 'Χτισμένη με πέτρες από κτίρια που δεν υπάρχουν πια',
      en: 'Built from the stones of buildings that no longer exist',
    },
    story: {
      el:
        'Η Φανερωμένη είναι η μεγαλύτερη εκκλησία μέσα στα τείχη. Χτίστηκε το 1872 στη ' +
        'θέση μιας παλιότερης και μικρότερης. Οι χτίστες δεν πήγαν σε λατομείο: πήραν ' +
        'πέτρες από την παλιά εκκλησία και από γκρεμισμένα μεσαιωνικά κτίρια της εποχής ' +
        'των Λουζινιανών. Έτσι μέσα στους τοίχους της κρύβονται πέτρες πολύ αρχαιότερες ' +
        'από την ίδια, και σε μερικές διακρίνεις ακόμα σκαλισμένα σχήματα που δεν ' +
        'ταιριάζουν με τίποτα γύρω τους. Το όνομα «Φανερωμένη» σημαίνει «αυτή που ' +
        'φανερώθηκε». Δίπλα στην εκκλησία στέκεται ένα κατάλευκο μαρμάρινο μαυσωλείο, ' +
        'χτισμένο το 1930, που φυλάει τα οστά του Αρχιεπισκόπου Κυπριανού και άλλων ' +
        'επισκόπων που έχασαν τη ζωή τους το 1821. Ο Κυπριανός ήταν ο ίδιος που είχε ' +
        'ανοίξει το Παγκύπριο Γυμνάσιο εννιά χρόνια νωρίτερα. Απέναντι, το Παρθεναγωγείο ' +
        'άνοιξε το 1857 και ήταν από τα πρώτα σχολεία για κορίτσια στην Κύπρο. Σήμερα η ' +
        'πλατεία είναι γεμάτη καφενεία και ποδήλατα.',
      en:
        'Faneromeni is the largest church inside the walls. It was built in 1872 on the site ' +
        'of an older and smaller one. The builders did not go to a quarry: they took stones ' +
        'from the old church and from ruined medieval buildings of the Lusignan period. So ' +
        'stones far older than the church are hidden inside its walls, and on some of them ' +
        'you can still make out carved shapes that match nothing around them. The name ' +
        'Faneromeni means “she who was revealed”. Beside the church stands a snow-white ' +
        'marble mausoleum, built in 1930, which holds the remains of Archbishop Kyprianos ' +
        'and other bishops who lost their lives in 1821. Kyprianos was the same man who had ' +
        'opened the Pancyprian Gymnasium nine years earlier. Across the square, the girls’ ' +
        'school opened in 1857 and was among the first in Cyprus. Today the square is full ' +
        'of cafés and bicycles.',
    },
    facts: [
      {
        el: 'Χτίστηκε το 1872 και είναι η μεγαλύτερη εκκλησία μέσα στα τείχη.',
        en: 'It was built in 1872 and is the largest church inside the walls.',
      },
      {
        el: 'Το μαρμάρινο μαυσωλείο δίπλα της χτίστηκε το 1930.',
        en: 'The marble mausoleum beside it was built in 1930.',
      },
      {
        el: 'Το Παρθεναγωγείο απέναντι άνοιξε το 1857, από τα πρώτα σχολεία για κορίτσια στο νησί.',
        en: 'The girls’ school opposite opened in 1857, one of the first on the island.',
      },
    ],
    location: {
      lat: 35.17353,
      lng: 33.3625,
      anchor: 'centroid',
      confidence: 'C',
      sources: [{ kind: 'wikidata', ref: 'Q20501264', deltaM: 0 }],
      verifiedAt: '2026-09-14',
      note:
        'One source only: there is no English Wikipedia article for this church and the OSM ' +
        'fetch failed. The item is unambiguous — its description names Nicosia, which is ' +
        'what separates it from the Faneromeni churches in Larnaca and in Aigio.',
      findIt: {
        el: 'Πλατεία Φανερωμένης, δυτικά της Λήδρας. Το άσπρο μαρμάρινο μνημείο είναι στο πλάι της εκκλησίας.',
        en: 'Faneromeni Square, west of Ledra Street. The white marble monument stands beside the church.',
      },
    },
    question: {
      q: {
        el: 'Από πού ήρθαν πολλές από τις πέτρες της εκκλησίας;',
        en: 'Where did many of the church’s stones come from?',
      },
      answers: [
        { el: 'Από γκρεμισμένα μεσαιωνικά κτίρια', en: 'From ruined medieval buildings' },
        { el: 'Από ένα λατομείο κοντά στην Πάφο', en: 'From a quarry close to Paphos' },
        { el: 'Από τα βουνά του Τροόδους με κάρα', en: 'From the Troodos mountains by cart' },
        { el: 'Από πλοία που έφταναν στην Αμμόχωστο', en: 'From ships arriving in Famagusta' },
      ],
      explanation: {
        el:
          'Οι χτίστες του 1872 ξαναχρησιμοποίησαν πέτρες από την παλιά εκκλησία και από ' +
          'ερειπωμένα κτίρια της εποχής των Λουζινιανών.',
        en:
          'The builders of 1872 reused stones from the old church and from ruined buildings ' +
          'of the Lusignan period.',
      },
    },
  },

  // ----------------------------------------------------------------- ledra street
  {
    id: 'nicosia-ledra-street',
    cityId: 'nicosia',
    emoji: '🛍️',
    category: 'landmark',
    difficulty: 3,

    name: { el: 'Οδός Λήδρας', en: 'Ledra Street' },
    tagline: {
      el: 'Ο δρόμος της αγοράς που φτάνει σε μια γραμμή',
      en: 'The market street that runs up to a line',
    },
    story: {
      el:
        'Το όνομα του δρόμου είναι το παλαιότερο πράγμα στη Λευκωσία. Πριν από περίπου ' +
        'τρεις χιλιάδες χρόνια υπήρχε εδώ μια μικρή αρχαία πόλη που λεγόταν Λήδρα. Η ' +
        'Λευκωσία μεγάλωσε πάνω της και ο κεντρικός της δρόμος κράτησε το όνομα. Από τα ' +
        'χρόνια των Οθωμανών αυτός ήταν ο δρόμος της αγοράς, με υφάσματα και μπαχαρικά· ' +
        'σήμερα έχει μαγαζιά, καφέδες και παγωτά, και δεν περνάει ούτε ένα αυτοκίνητο. ' +
        'Στη μέση του υψώνεται ένας πύργος με έντεκα ορόφους. Αν συνεχίσεις βόρεια, ' +
        'φτάνεις σε κάτι που δεν έχουν άλλοι δρόμοι. Από τη δεκαετία του 1960, και ' +
        'οριστικά από το 1974, μια γραμμή χωρίζει τη Λευκωσία στα δύο. Στο νότιο μέρος ζουν κυρίως Ελληνοκύπριοι, στο βόρειο κυρίως ' +
        'Τουρκοκύπριοι, και ανάμεσα υπάρχει μια λωρίδα που φυλάνε στρατιώτες του ΟΗΕ με ' +
        'γαλάζιους μπερέδες. Εδώ, μέσα στην παλιά πόλη, η λωρίδα στενεύει σε λίγα μέτρα. ' +
        'Ο δρόμος ήταν κλειστός σε αυτό το σημείο από τη δεκαετία του 1960. Στις 3 ' +
        'Απριλίου 2008 άνοιξε πέρασμα, και τώρα οι άνθρωποι περνούν δείχνοντας ταυτότητα.',
      en:
        'The name of this street is the oldest thing in Nicosia. About three thousand years ' +
        'ago a small ancient town called Ledra stood here. Nicosia grew on top of it and its ' +
        'main street kept the name. Since Ottoman times this has been the market street, ' +
        'with cloth and spices; today it has shops, cafés and ice cream, and not a single ' +
        'car goes down it. Halfway along, a tower of eleven floors rises above the roofs. If ' +
        'you keep walking north you reach something other streets do not have. Since the 1960s, ' +
        'and for good since 1974, a line has divided Nicosia in two. Greek Cypriots live mostly in the southern part, ' +
        'Turkish Cypriots mostly in the northern, and between them lies a strip guarded by ' +
        'United Nations soldiers in blue berets. Here, inside the old town, the strip ' +
        'narrows to a few metres. The street was closed at this point from the 1960s. On 3 ' +
        'April 2008 a crossing opened, and now people walk through by showing an ID card.',
    },
    facts: [
      {
        el: 'Πήρε το όνομά της από τη Λήδρα, την αρχαία πόλη που υπήρχε εδώ πριν από τη Λευκωσία.',
        en: 'It is named after Ledra, the ancient town that stood here before Nicosia.',
      },
      {
        el: 'Είναι πεζόδρομος: δεν κυκλοφορεί κανένα όχημα σε όλο το μήκος της.',
        en: 'It is pedestrian only: no vehicle at all travels down its whole length.',
      },
      {
        el: 'Το πέρασμα στη βόρεια άκρη της άνοιξε στις 3 Απριλίου 2008.',
        en: 'The crossing at its northern end opened on 3 April 2008.',
      },
    ],
    location: {
      lat: 35.17444,
      lng: 33.36139,
      anchor: 'area',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q257937', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Ledra Street', deltaM: 1 },
      ],
      verifiedAt: '2026-09-14',
      note:
        'An area: a street has a length, not a point, and this one runs several hundred ' +
        'metres. OSM fetch failed on this pass.',
      findIt: {
        el: 'Ο πεζόδρομος που ξεκινά από την Πλατεία Ελευθερίας και τραβάει βόρεια. Ακολούθησέ τον ως το τέλος.',
        en: 'The pedestrian street running north from Eleftheria Square. Follow it to the far end.',
      },
    },
    question: {
      q: {
        el: 'Από πού πήρε ο δρόμος το όνομά του;',
        en: 'Where did the street get its name?',
      },
      answers: [
        { el: 'Από μια αρχαία πόλη που ήταν εδώ', en: 'From an ancient town that stood here' },
        { el: 'Από έναν έμπορο υφασμάτων του 1800', en: 'From a cloth trader of the eighteen hundreds' },
        { el: 'Από τον πύργο με τους έντεκα ορόφους', en: 'From the tower with the eleven floors' },
        { el: 'Από τα λευκά σπίτια που είχε κάποτε', en: 'From the white houses it once had along it' },
      ],
      explanation: {
        el:
          'Η Λήδρα ήταν μικρή αρχαία πόλη σε αυτό ακριβώς το σημείο, πριν από περίπου ' +
          'τρεις χιλιάδες χρόνια. Η Λευκωσία χτίστηκε πάνω της.',
        en:
          'Ledra was a small ancient town on this very spot about three thousand years ago. ' +
          'Nicosia was built on top of it.',
      },
    },
  },

  // -------------------------------------------------------------- shacolas tower
  {
    id: 'nicosia-shacolas-tower',
    cityId: 'nicosia',
    emoji: '🔭',
    category: 'landmark',
    difficulty: 1,

    name: { el: 'Πύργος Σιακόλα', en: 'The Shacolas Tower' },
    tagline: {
      el: 'Έντεκα όροφοι σε μια πόλη με δύο ορόφους',
      en: 'Eleven floors in a city of two-storey houses',
    },
    story: {
      el:
        'Η παλιά Λευκωσία είναι χαμηλή. Σπίτια ενός και δύο ορόφων, στέγες, αυλές, ' +
        'σοκάκια. Και μετά, στη μέση της οδού Λήδρας, στέκεται ένα κτίριο έντεκα ' +
        'ορόφων. Ολοκληρώθηκε το 1959 και το έχτισε ο Κώστας Μαγκλής, οπότε στην αρχή ' +
        'το έλεγαν Πύργο Μαγκλή· μέσα στέγαζε γραφεία μιας μεταλλευτικής εταιρείας. Για ' +
        'δεκαεννιά χρόνια, μέχρι το 1978, ήταν το ψηλότερο κτίριο ολόκληρης της Κύπρου. ' +
        'Σήμερα οι κάτω όροφοι είναι κατάστημα ρούχων, αλλά ο ενδέκατος είναι κάτι άλλο: ' +
        'ένα παρατηρητήριο με τηλεσκόπια και κιάλια. Από εκεί πάνω η πόλη γίνεται χάρτης. ' +
        'Βλέπεις τον κύκλο των τειχών, τους μιναρέδες, τους τρούλους, τις ταράτσες, το ' +
        'νότιο και το βόρειο κομμάτι μαζί, και πέρα από όλα αυτά τα βουνά. Είναι ο ' +
        'γρηγορότερος τρόπος να καταλάβεις τη Λευκωσία: μία ματιά από ψηλά αξίζει όσο ' +
        'μία ώρα περπάτημα.',
      en:
        'Old Nicosia is low. One- and two-storey houses, roofs, courtyards, lanes. And then, ' +
        'halfway along Ledra Street, an eleven-storey building stands up out of it. It was ' +
        'completed in 1959 and built by Costas Manglis, so at first it was called the Manglis ' +
        'Tower; inside it held the offices of a mining company. For nineteen years, until ' +
        '1978, it was the tallest building in all of Cyprus. Today the lower floors are a ' +
        'clothes shop, but the eleventh is something else: an observatory with telescopes and ' +
        'binoculars. From up there the city turns into a map. You see the circle of the ' +
        'walls, the minarets, the domes, the flat roofs, the southern and the northern part ' +
        'together, and beyond all of it the mountains. It is the quickest way to understand ' +
        'Nicosia: one look from above is worth an hour of walking.',
    },
    facts: [
      {
        el: 'Ολοκληρώθηκε το 1959 και ήταν το ψηλότερο κτίριο της Κύπρου μέχρι το 1978.',
        en: 'It was completed in 1959 and was the tallest building in Cyprus until 1978.',
      },
      {
        el: 'Στον ενδέκατο όροφο υπάρχει παρατηρητήριο με τηλεσκόπια και κιάλια.',
        en: 'On the eleventh floor there is an observatory with telescopes and binoculars.',
      },
      {
        el: 'Το πρώτο του όνομα ήταν Πύργος Μαγκλή, από τον άνθρωπο που τον έχτισε.',
        en: 'Its first name was the Manglis Tower, after the man who built it.',
      },
    ],
    location: {
      lat: 35.1719,
      lng: 33.3615,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q7460193', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Shacolas Tower', deltaM: 0 },
      ],
      verifiedAt: '2026-09-14',
      note: 'Wikidata and Wikipedia agree exactly; the OSM fetch failed on this pass.',
      findIt: {
        el: 'Στην οδό Λήδρας, στη γωνία με την Αρσινόης. Το ασανσέρ για το παρατηρητήριο είναι μέσα στο κατάστημα.',
        en: 'On Ledra Street at the corner of Arsinois. The lift to the observatory is inside the shop.',
      },
    },
    question: {
      q: {
        el: 'Τι υπάρχει στον ενδέκατο όροφο του πύργου;',
        en: 'What is on the eleventh floor of the tower?',
      },
      answers: [
        { el: 'Παρατηρητήριο με τηλεσκόπια', en: 'An observatory with telescopes' },
        { el: 'Ένα εστιατόριο που γυρίζει', en: 'A restaurant that slowly turns' },
        { el: 'Ο μεγάλος μηχανισμός ρολογιού', en: 'The works of a very large clock' },
        { el: 'Ένα ελικοδρόμιο στην ταράτσα', en: 'A landing pad for a helicopter' },
      ],
      explanation: {
        el:
          'Στην κορυφή υπάρχει παρατηρητήριο με τηλεσκόπια και κιάλια. Από εκεί βλέπεις ' +
          'και τα δύο κομμάτια της πόλης, μέχρι τα βουνά.',
        en:
          'At the top there is an observatory with telescopes and binoculars. From it you ' +
          'see both parts of the city, all the way to the mountains.',
      },
    },
  },

  // --------------------------------------------------------------- cyprus museum
  {
    id: 'nicosia-cyprus-museum',
    cityId: 'nicosia',
    emoji: '🏺',
    category: 'museum',
    difficulty: 2,

    name: { el: 'Κυπριακό Μουσείο', en: 'The Cyprus Museum' },
    tagline: {
      el: 'Ιδρύθηκε για να μη φεύγουν τα ευρήματα από το νησί',
      en: 'Founded so that the finds would stop leaving the island',
    },
    story: {
      el:
        'Στα τέλη του δέκατου ένατου αιώνα το χώμα της Κύπρου έβγαζε συνέχεια αρχαία ' +
        'πράγματα, και τα περισσότερα έφευγαν αμέσως για μουσεία και συλλογές στο ' +
        'εξωτερικό. Το 1882 οι Κύπριοι ζήτησαν κάτι απλό: ένα σπίτι για τα δικά τους ' +
        'ευρήματα, εδώ. Έτσι ιδρύθηκε το Κυπριακό Μουσείο, το παλαιότερο και μεγαλύτερο ' +
        'αρχαιολογικό μουσείο του νησιού. Το σημερινό κτίριο, με τις ψηλές κολόνες στην ' +
        'είσοδο, χτίστηκε στις αρχές του εικοστού αιώνα με δημόσια χρήματα και με ' +
        'δωρεές των κατοίκων. Ο ρυθμός λέγεται νεοκλασικός: «νέος», γιατί το κτίριο είναι νέο, ' +
        'και «κλασικός», γιατί αντιγράφει τους αρχαίους ναούς. Μέσα, οι αίθουσες είναι ' +
        'βαλμένες σε χρονολογική σειρά. Ξεκινάς από πέτρινα εργαλεία εννιά χιλιάδων ' +
        'ετών, περνάς ανάμεσα σε εκατοντάδες πήλινα ανθρωπάκια που στέκονταν σε ημικύκλιο ' +
        'γύρω από έναν βωμό, και καταλήγεις σε μάρμαρο και χαλκό. Δεν είναι μεγάλο μουσείο. ' +
        'Είναι όμως ολόκληρο ένα νησί βαλμένο στη σειρά.',
      en:
        'At the end of the nineteenth century the soil of Cyprus kept turning up ancient ' +
        'things, and most of them left at once for museums and collections abroad. In 1882 ' +
        'Cypriots asked for something simple: a home for their own finds, here. So the ' +
        'Cyprus Museum was founded, the oldest and largest archaeological museum on the ' +
        'island. The present building, with the tall columns at its entrance, was put up in ' +
        'the early twentieth century with public money and donations from the people. The style ' +
        'is called neoclassical: “neo” because the building is new, and “classical” because ' +
        'it copies ancient temples. Inside, the rooms are laid out in order of time. You ' +
        'start with stone tools nine thousand years old, pass hundreds of little clay ' +
        'people who stood in a half-circle around an altar, and finish with marble and ' +
        'copper. It is not a big museum. But it is an entire island, put in order.',
    },
    facts: [
      {
        el: 'Ιδρύθηκε το 1882 και είναι το παλαιότερο μουσείο της Κύπρου.',
        en: 'It was founded in 1882 and is the oldest museum in Cyprus.',
      },
      {
        el: 'Το νεοκλασικό κτίριό του πληρώθηκε εν μέρει από το δημόσιο και εν μέρει με δωρεές Κυπρίων.',
        en: 'Its neoclassical building was paid for partly with public money and partly by donations from Cypriots.',
      },
      {
        el: 'Στην Αγία Ειρήνη βρέθηκαν περίπου δύο χιλιάδες πήλινα ειδώλια· τα μισά περίπου είναι εδώ και τα υπόλοιπα στη Στοκχόλμη.',
        en: 'About two thousand clay figures were found at Agia Irini; about half are here and the rest are in Stockholm.',
      },
    ],
    location: {
      lat: 35.17167,
      lng: 33.35528,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q1148462', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Cyprus Museum', deltaM: 0 },
      ],
      verifiedAt: '2026-09-14',
      note: 'Wikidata and Wikipedia agree exactly; the OSM fetch failed on this pass.',
      findIt: {
        el: 'Οδός Μουσείου, έξω από τα τείχη κοντά στην Πύλη Πάφου. Η είσοδος έχει ψηλές πέτρινες κολόνες.',
        en: 'On Museum Street, outside the walls near Paphos Gate. The entrance has tall stone columns.',
      },
    },
    question: {
      q: {
        el: 'Γιατί ιδρύθηκε το μουσείο το 1882;',
        en: 'Why was the museum founded in 1882?',
      },
      answers: [
        { el: 'Για να μένουν τα ευρήματα στο νησί', en: 'So the finds would stay on the island' },
        { el: 'Για να στεγαστεί μια σχολή τεχνών', en: 'So an art school could have a building' },
        { el: 'Για να γιορτάσουν την ανεξαρτησία', en: 'So the island could mark independence' },
        { el: 'Για να φυλαχτεί η βιβλιοθήκη της πόλης', en: 'So the city library would have a home' },
      ],
      explanation: {
        el:
          'Τα αρχαία που έβγαιναν από το χώμα έφευγαν στο εξωτερικό. Οι Κύπριοι ζήτησαν ' +
          'ένα δικό τους σπίτι για αυτά, και το μουσείο ήταν η απάντηση.',
        en:
          'The ancient things coming out of the ground were leaving the country. Cypriots ' +
          'asked for a home of their own for them, and the museum was the answer.',
      },
    },

    museum: {
      doorNote: {
        el: 'Οι αίθουσες είναι σε χρονολογική σειρά. Ακολούθησέ τες με τη σειρά και θα βγει νόημα.',
        en: 'The rooms run in order of time. Follow them in order and it will make sense.',
      },
      rooms: [
        {
          id: 'nicosia-cyprus-museum-before-writing',
          emoji: '🪨',
          name: { el: 'Πριν από τη γραφή', en: 'Before writing' },
          intro: {
            el:
              'Αυτή η αίθουσα καλύπτει χιλιάδες χρόνια κατά τα οποία κανείς στην Κύπρο ' +
              'δεν έγραφε τίποτα. Ό,τι ξέρουμε για εκείνους τους ανθρώπους το ξέρουμε από ' +
              'αντικείμενα: πέτρες που τις έτριψαν μέχρι να γίνουν μπολ, πηλό που τον ' +
              'έπλασαν σε σχήματα. Τα πράγματα εδώ μιλούν επειδή δεν υπάρχει κανένα ' +
              'κείμενο να μιλήσει αντί γι’ αυτά.',
            en:
              'This room covers thousands of years in which nobody in Cyprus wrote anything ' +
              'down. Everything we know about those people we know from objects: stones ' +
              'rubbed until they became bowls, clay shaped into figures. The things here ' +
              'speak because there is no text at all to speak for them.',
          },
          exhibits: [
            {
              id: 'nicosia-cyprus-museum-pomos-idol',
              name: { el: 'Το ειδώλιο του Πωμού', en: 'The Pomos idol' },
              blurb: {
                el:
                  'Μια μικρή φιγούρα από πικρόλιθο, γαλαζοπράσινη πέτρα, με τα χέρια ' +
                  'ανοιχτά σε σχήμα σταυρού. Είναι περίπου πέντε χιλιάδων ετών και ' +
                  'βρέθηκε κοντά στο χωριό Πωμός. Στον λαιμό της κρέμεται μια δεύτερη, ' +
                  'μικροσκοπική φιγούρα ίδιου σχήματος: ένα ειδώλιο που φοράει ειδώλιο. ' +
                  'Δεν ξέρουμε τι σήμαινε. Ξέρουμε όμως ότι κάποιος το θεώρησε τόσο ' +
                  'σημαντικό ώστε να το κουβαλάει πάνω του. Σήμερα το βλέπεις και στα ' +
                  'κυπριακά κέρματα του ενός και των δύο ευρώ.',
                en:
                  'A small figure of picrolite, a blue-green stone, with its arms open in the ' +
                  'shape of a cross. It is about five thousand years old and was found near ' +
                  'the village of Pomos. Hanging at its neck is a second, tiny figure of the ' +
                  'same shape: a figurine wearing a figurine. We do not know what it meant. ' +
                  'We do know somebody thought it important enough to carry about with them. ' +
                  'Today you can also see it on the Cypriot one and two euro coins.',
              },
              question: {
                q: {
                  el: 'Πού αλλού μπορείς να δεις αυτό το σχήμα σήμερα;',
                  en: 'Where else can you see this shape today?',
                },
                answers: [
                  { el: 'Στα κυπριακά κέρματα του ευρώ', en: 'On the Cypriot euro coins' },
                  { el: 'Στη σημαία της Κυπριακής Δημοκρατίας', en: 'On the flag of the Republic of Cyprus' },
                  { el: 'Στα διαβατήρια όλων των Κυπρίων', en: 'On the passports of every Cypriot' },
                  { el: 'Στην είσοδο κάθε σχολείου του νησιού', en: 'At the entrance of every island school' },
                ],
                explanation: {
                  el:
                    'Το ειδώλιο του Πωμού εικονίζεται στα κυπριακά κέρματα του ενός και ' +
                    'των δύο ευρώ. Το έχεις κρατήσει χωρίς να το ξέρεις.',
                  en:
                    'The Pomos idol appears on the Cypriot one and two euro coins. You have ' +
                    'held it without knowing.',
                },
              },
            },
            {
              id: 'nicosia-cyprus-museum-stone-bowls',
              name: { el: 'Τα πέτρινα μπολ της Χοιροκοιτίας', en: 'The stone bowls of Khirokitia' },
              blurb: {
                el:
                  'Βαριά μπολ σκαλισμένα σε σκληρή πέτρα, από έναν οικισμό όπου οι ' +
                  'άνθρωποι ζούσαν σε στρογγυλά πέτρινα σπίτια πριν από εννιά χιλιάδες ' +
                  'χρόνια. Δεν υπήρχε ακόμα πηλός ψημένος σε φούρνο, οπότε τα αγγεία ' +
                  'έπρεπε να βγουν από βράχο, με άλλον βράχο, με τρίψιμο που κρατούσε ' +
                  'μέρες. Σήκωσε νοερά ένα: ζυγίζει όσο μια γάτα. Όταν σκέφτεσαι πόσο ' +
                  'κόπο θέλει, καταλαβαίνεις γιατί το ψημένο πήλινο αγγείο, όταν ήρθε, ' +
                  'άλλαξε τα πάντα.',
                en:
                  'Heavy bowls carved out of hard stone, from a settlement where people lived ' +
                  'in round stone houses nine thousand years ago. Clay fired in a kiln did ' +
                  'not exist yet, so a vessel had to be got out of rock, with other rock, by ' +
                  'grinding that took days. Lift one in your mind: it weighs about as much as ' +
                  'a cat. Once you think about the work involved, you understand why the ' +
                  'fired clay pot, when it arrived, changed everything.',
              },
              question: {
                q: {
                  el: 'Γιατί έφτιαχναν τα μπολ τους από πέτρα;',
                  en: 'Why were their bowls made out of stone?',
                },
                answers: [
                  { el: 'Δεν ήξεραν ακόμα να ψήνουν πηλό', en: 'They could not yet fire clay' },
                  { el: 'Η πέτρα ήταν πολύ πιο ελαφριά', en: 'Stone was a great deal lighter' },
                  { el: 'Ο πηλός δεν υπήρχε στο νησί', en: 'There was no clay on the island' },
                  { el: 'Τα πέτρινα μπολ κρατούσαν ζέστη', en: 'Stone bowls held the heat in' },
                ],
                explanation: {
                  el:
                    'Το ψήσιμο του πηλού δεν είχε φτάσει ακόμα εδώ. Ό,τι ήθελαν σε σχήμα ' +
                    'αγγείου έπρεπε να το τρίψουν από βράχο.',
                  en:
                    'Firing clay had not reached here yet. Anything they wanted in the shape ' +
                    'of a vessel had to be ground out of rock.',
                },
              },
            },
            {
              id: 'nicosia-cyprus-museum-vounous-bowl',
              name: { el: 'Το ομοίωμα από τον Βουνούς', en: 'The model from Vounous' },
              blurb: {
                el:
                  'Ένα πήλινο μπολ που δεν είναι μπολ. Μέσα του, κάποιος έπλασε ' +
                  'μικροσκοπικές ανθρώπινες φιγούρες μέσα σε έναν περίφρακτο χώρο, με ' +
                  'ζώα και με μορφές που κάθονται σε σειρά. Είναι σαν παγωμένη σκηνή, ' +
                  'τεσσάρων χιλιάδων ετών περίπου, από τη νεκρόπολη του Βουνούς. Δεν ' +
                  'υπάρχει γραπτό που να εξηγεί τι συμβαίνει εκεί μέσα, οπότε οι ' +
                  'αρχαιολόγοι διαφωνούν ακόμα. Είναι το πλησιέστερο πράγμα σε ' +
                  'φωτογραφία που έχουμε από εκείνη την εποχή.',
                en:
                  'A clay bowl that is not a bowl. Inside it somebody modelled tiny human ' +
                  'figures within a fenced enclosure, with animals and with figures seated in ' +
                  'a row. It is like a frozen scene, roughly four thousand years old, from ' +
                  'the cemetery at Vounous. There is no writing to explain what is going on ' +
                  'in there, so archaeologists still disagree. It is the closest thing to a ' +
                  'photograph that we have from that age.',
              },
              question: {
                q: {
                  el: 'Γιατί διαφωνούν οι αρχαιολόγοι για αυτό το ομοίωμα;',
                  en: 'Why do archaeologists disagree about this model?',
                },
                answers: [
                  { el: 'Δεν υπάρχει κείμενο να το εξηγήσει', en: 'No text exists to explain it' },
                  { el: 'Είναι σπασμένο σε πολλά κομμάτια', en: 'It is broken into many pieces' },
                  { el: 'Βρέθηκε πολύ μακριά από την Κύπρο', en: 'It was found far from Cyprus' },
                  { el: 'Δύο μουσεία λένε ότι τους ανήκει', en: 'Two museums both claim it' },
                ],
                explanation: {
                  el:
                    'Είναι από εποχή χωρίς γραφή. Βλέπουμε τη σκηνή αλλά κανείς δεν άφησε ' +
                    'λεζάντα, οπότε κάθε ερμηνεία είναι εικασία.',
                  en:
                    'It comes from an age with no writing. We see the scene but nobody left a ' +
                    'caption, so every reading of it is a guess.',
                },
              },
            },
          ],
        },
        {
          id: 'nicosia-cyprus-museum-clay-army',
          emoji: '🗿',
          name: { el: 'Ο στρατός από πηλό', en: 'The clay army' },
          intro: {
            el:
              'Το 1929 αρχαιολόγοι έσκαβαν κοντά στην Αγία Ειρήνη και βρήκαν κάτι που ' +
              'δεν περίμεναν: περίπου δύο χιλιάδες πήλινες φιγούρες, στημένες σε ' +
              'ημικύκλια γύρω από έναν βωμό, ακριβώς όπως τις είχε αφήσει κάποιος πριν ' +
              'από δυόμισι χιλιάδες χρόνια. Το 1931 περίπου οι μισές πήγαν στη Σουηδία και ' +
              'βρίσκονται σε μουσείο της Στοκχόλμης. Οι υπόλοιπες έμειναν εδώ.',
            en:
              'In 1929 archaeologists digging near Agia Irini found something they were not ' +
              'expecting: about two thousand clay figures, set in half-circles around an ' +
              'altar, exactly as somebody had left them two and a half thousand years ' +
              'earlier. In 1931 about half of them went to Sweden and are now in a museum in ' +
              'Stockholm. The rest stayed here.',
          },
          exhibits: [
            {
              id: 'nicosia-cyprus-museum-agia-irini-circle',
              name: { el: 'Το ημικύκλιο', en: 'The half-circle' },
              blurb: {
                el:
                  'Οι φιγούρες δεν είναι σκορπισμένες σε βιτρίνες. Είναι στημένες σε ' +
                  'σειρές, η μία πίσω από την άλλη, όλες στραμμένες προς το ίδιο σημείο. ' +
                  'Αυτό είναι το σημαντικό εύρημα, περισσότερο και από την κάθε φιγούρα ' +
                  'ξεχωριστά: οι αρχαιολόγοι σημείωσαν πού ακριβώς βρισκόταν το καθένα ' +
                  'πριν το σηκώσουν, οπότε η διάταξη σώθηκε μαζί με τα αντικείμενα. Χωρίς ' +
                  'αυτές τις σημειώσεις θα είχαμε δύο χιλιάδες ειδώλια και καμία σκηνή.',
                en:
                  'The figures are not scattered through display cases. They are set in rows, ' +
                  'one behind another, all turned towards the same point. That arrangement is ' +
                  'the real find, more than any single figure: the archaeologists recorded ' +
                  'exactly where each one lay before lifting it, so the layout was saved along ' +
                  'with the objects. Without those notes we would have two thousand figurines ' +
                  'and no scene at all.',
              },
              question: {
                q: {
                  el: 'Τι έσωσε τη διάταξη των φιγούρων;',
                  en: 'What saved the arrangement of the figures?',
                },
                answers: [
                  { el: 'Σημείωσαν πού βρισκόταν η καθεμιά', en: 'They noted where each one lay' },
                  { el: 'Τις μετέφεραν όλες μαζί σε ένα κιβώτιο', en: 'They moved them all in one crate' },
                  { el: 'Τις είχαν κολλήσει στο έδαφος με πηλό', en: 'They were stuck to the ground with clay' },
                  { el: 'Υπήρχε αρχαία ζωγραφιά που τις έδειχνε', en: 'An ancient painting showed them in place' },
                ],
                explanation: {
                  el:
                    'Η θέση κάθε ειδωλίου καταγράφηκε πριν σηκωθεί. Έτσι το μουσείο μπορεί ' +
                    'να δείχνει τη σκηνή και όχι απλώς τα κομμάτια της.',
                  en:
                    'The place of every figurine was written down before it was lifted. That ' +
                    'is why the museum can show the scene and not just its pieces.',
                },
              },
            },
            {
              id: 'nicosia-cyprus-museum-agia-irini-warriors',
              name: { el: 'Οι πολεμιστές', en: 'The warriors' },
              blurb: {
                el:
                  'Οι μεγαλύτερες φιγούρες είναι πολεμιστές: άντρες με κράνη, ασπίδες και ' +
                  'σπαθιά. Όμως δεν στέκονταν μπροστά. Οι αρχαιολόγοι βρήκαν τις ' +
                  'μικρότερες φιγούρες πιο κοντά στον βωμό και τις μεγαλύτερες στο πίσω ' +
                  'μέρος, σαν σε θέατρο όπου οι ψηλοί κάθονται πίσω. Έτσι όλες κοίταζαν ' +
                  'προς τον βωμό και καμία δεν έκρυβε την άλλη. Πλησίασε και σύγκρινε δύο ' +
                  'πρόσωπα: κανένα δεν είναι ίδιο με το άλλο, όσο κι αν μοιάζουν από μακριά.',
                en:
                  'The largest figures are warriors: men with helmets, shields and swords. But ' +
                  'they did not stand at the front. The archaeologists found the smallest ' +
                  'figures nearest the altar and the largest ones at the back, like a theatre ' +
                  'where the tall people sit behind. That way they all faced the altar and ' +
                  'none hid another. Go closer and compare two faces: no two are the same, ' +
                  'however alike they look from a distance.',
              },
              question: {
                q: {
                  el: 'Πού στέκονταν οι μεγαλύτερες φιγούρες;',
                  en: 'Where did the biggest figures stand?',
                },
                answers: [
                  { el: 'Πίσω, μακριά από τον βωμό', en: 'At the back, far from the altar' },
                  { el: 'Ακριβώς δίπλα στον βωμό', en: 'Right up against the altar' },
                  { el: 'Πάνω στη στέγη του ναού', en: 'Up on the roof of the temple' },
                  { el: 'Κρεμασμένες ψηλά στους τοίχους του ναού', en: 'Hanging high on the temple walls' },
                ],
                explanation: {
                  el:
                    'Τα μικρά ειδώλια στέκονταν πιο κοντά στον βωμό και τα μεγάλα πίσω τους. ' +
                    'Έτσι οι ψηλές μορφές πίσω φαίνονταν πάνω από τις μικρές μπροστά.',
                  en:
                    'The little figures stood nearest the altar and the big ones behind them. ' +
                    'That way the tall figures at the back could be seen over the small ones.',
                },
              },
            },
            {
              id: 'nicosia-cyprus-museum-agia-irini-chariots',
              name: { el: 'Τα μικρά άρματα', en: 'The little chariots' },
              blurb: {
                el:
                  'Ανάμεσα στις φιγούρες υπάρχουν πήλινα άρματα με άλογα και αναβάτες, ' +
                  'μερικά μικρότερα από την παλάμη σου. Δεν είναι παιχνίδια. Πιθανότατα ' +
                  'ήταν αφιερώματα: αντί να χαρίσεις στον βωμό ένα αληθινό άρμα, που ' +
                  'κόστιζε όσο ένα σπίτι, χάριζες ένα μικρό πήλινο. Η σκέψη είναι η ίδια ' +
                  'με το να ζωγραφίζεις κάτι που θα ήθελες. Χάρη σε αυτά ξέρουμε τι σχήμα ' +
                  'είχαν τα άρματα εκείνης της εποχής στην Κύπρο.',
                en:
                  'Among the figures there are clay chariots with horses and riders, some ' +
                  'smaller than your palm. They are not toys. They were most likely ' +
                  'offerings: instead of giving the altar a real chariot, which cost as much ' +
                  'as a house, you gave a small clay one. The thinking is the same as drawing ' +
                  'something you wish you had. Thanks to them we know what shape chariots in ' +
                  'Cyprus were at that time.',
              },
              question: {
                q: {
                  el: 'Γιατί άφηναν στον βωμό μικρά πήλινα άρματα;',
                  en: 'Why were small clay chariots left at the altar?',
                },
                answers: [
                  { el: 'Ένα αληθινό άρμα κόστιζε πάρα πολύ', en: 'A real chariot cost far too much' },
                  { el: 'Τα παιδιά τα έπαιζαν στη γιορτή', en: 'Children played with them at the feast' },
                  { el: 'Ο πηλός θεωρούνταν ιερό υλικό', en: 'Clay was thought to be a holy material' },
                  { el: 'Έδειχναν τον δρόμο προς τον ναό', en: 'They pointed the way towards the temple' },
                ],
                explanation: {
                  el:
                    'Ήταν αφιερώματα. Χάριζες μια μικρογραφία εκεί όπου το αληθινό ' +
                    'αντικείμενο ήταν αδύνατο να δοθεί.',
                  en:
                    'They were offerings. You gave a miniature where the real object was ' +
                    'impossible to give.',
                },
              },
            },
            {
              id: 'nicosia-cyprus-museum-agia-irini-masks',
              name: { el: 'Οι μορφές με τα προσωπεία', en: 'The masked figures' },
              blurb: {
                el:
                  'Λίγες από τις φιγούρες δεν έχουν ανθρώπινο πρόσωπο αλλά μουσούδα και ' +
                  'κέρατα ταύρου. Δεν είναι τέρατα: είναι άνθρωποι που φορούν προσωπείο. ' +
                  'Ο ταύρος ήταν σημαντικό ζώο σε ολόκληρη την ανατολική Μεσόγειο, και ' +
                  'κάποιος που φορούσε τέτοιο προσωπείο πιθανότατα είχε ξεχωριστό ρόλο ' +
                  'στην τελετή. Πλησίασε και κοίτα την άκρη του προσωπείου: φαίνεται καθαρά ' +
                  'ότι είναι φορεμένο πάνω σε ανθρώπινο κεφάλι. Μέτρησε πόσες τέτοιες μορφές ' +
                  'μπορείς να βρεις.',
                en:
                  'A few of the figures do not have a human face but the muzzle and horns of ' +
                  'a bull. They are not monsters: they are people wearing a mask. The bull ' +
                  'was an important animal right across the eastern Mediterranean, and ' +
                  'somebody wearing such a mask probably had a particular part to play in the ' +
                  'ceremony. Go close and look at the edge of the mask: you can clearly see ' +
                  'it is worn over a human head. Count how many of them you can find.',
              },
              question: {
                q: {
                  el: 'Τι είναι στην πραγματικότητα οι μορφές με τα κέρατα;',
                  en: 'What are the horned figures really?',
                },
                answers: [
                  { el: 'Άνθρωποι που φορούν προσωπείο', en: 'People who are wearing a mask' },
                  { el: 'Ταύροι που στέκονται στα πίσω πόδια', en: 'Bulls standing up on their back legs' },
                  { el: 'Τέρατα από έναν κυπριακό μύθο', en: 'Monsters out of a Cypriot legend' },
                  { el: 'Μισοτελειωμένα ειδώλια των πολεμιστών', en: 'Half-finished figures of the warriors' },
                ],
                explanation: {
                  el:
                    'Αν κοιτάξεις την άκρη του προσωπείου, φαίνεται ότι είναι φορεμένο σε ' +
                    'ανθρώπινο κεφάλι. Είναι ρόλος στην τελετή, όχι πλάσμα.',
                  en:
                    'Look at the edge of the mask and you can see it is worn over a human ' +
                    'head. It is a role in the ceremony, not a creature.',
                },
              },
            },
          ],
        },
        {
          id: 'nicosia-cyprus-museum-marble-and-copper',
          emoji: '🥉',
          name: { el: 'Μάρμαρο και χαλκός', en: 'Marble and copper' },
          intro: {
            el:
              'Η τελευταία αίθουσα είναι η εποχή που η Κύπρος ήταν κομμάτι μεγάλων ' +
              'αυτοκρατοριών και το νησί έβγαζε το μέταλλο που ήθελε ολόκληρη η ' +
              'Μεσόγειος. Εδώ τα υλικά αλλάζουν: μετά από αίθουσες γεμάτες πηλό και ' +
              'πέτρα, ξαφνικά βλέπεις μάρμαρο που γυαλίζει και μπρούντζο που σκουριάζει ' +
              'πράσινος.',
            en:
              'The last room is the age when Cyprus was part of large empires and the island ' +
              'produced the metal the whole Mediterranean wanted. Here the materials change: ' +
              'after rooms full of clay and stone you suddenly see marble that shines and ' +
              'bronze that rusts green.',
          },
          exhibits: [
            {
              id: 'nicosia-cyprus-museum-aphrodite-soloi',
              name: { el: 'Η Αφροδίτη των Σόλων', en: 'The Aphrodite of Soloi' },
              blurb: {
                el:
                  'Ένα μαρμάρινο κεφάλι και τμήμα σώματος, από την αρχαία πόλη Σόλοι στη ' +
                  'βόρεια ακτή. Έχει γίνει το πιο αναγνωρίσιμο αρχαίο της Κύπρου και ' +
                  'εμφανίζεται σε αφίσες και εξώφυλλα σε όλο το νησί. Ο μύθος λέει ότι η ' +
                  'Αφροδίτη γεννήθηκε από τον αφρό της κυπριακής θάλασσας, κοντά στην ' +
                  'Πάφο, γι’ αυτό και οι αρχαίοι Έλληνες τη φώναζαν συχνά «Κύπριδα». Το ' +
                  'μάρμαρο δεν βγαίνει από την Κύπρο: ήρθε με πλοίο, και μόνο αυτό δείχνει ' +
                  'πόσο ακριβό ήταν το άγαλμα.',
                en:
                  'A marble head and part of a body, from the ancient city of Soloi on the ' +
                  'northern coast. It has become the most recognisable ancient object in ' +
                  'Cyprus and appears on posters and covers all over the island. The myth ' +
                  'says Aphrodite was born from the foam of the Cypriot sea, near Paphos, ' +
                  'which is why the ancient Greeks often called her Kypris. Marble does not ' +
                  'come from Cyprus: it arrived by ship, and that alone shows how costly the ' +
                  'statue was.',
              },
              question: {
                q: {
                  el: 'Τι μας λέει το ίδιο το μάρμαρο του αγάλματος;',
                  en: 'What does the statue’s marble itself tell us?',
                },
                answers: [
                  { el: 'Ήρθε με πλοίο, άρα κόστιζε ακριβά', en: 'It came by ship, so it cost a lot' },
                  { el: 'Ήταν φτηνό υλικό στην αρχαία Κύπρο', en: 'It was a cheap material in old Cyprus' },
                  { el: 'Το έκοψαν στα βουνά του Τροόδους', en: 'It was cut in the Troodos mountains' },
                  { el: 'Είναι νεότερο από το υπόλοιπο άγαλμα', en: 'It is newer than the rest of the statue' },
                ],
                explanation: {
                  el:
                    'Στην Κύπρο δεν υπάρχει μάρμαρο. Κάθε μαρμάρινο άγαλμα εδώ ταξίδεψε ' +
                    'με πλοίο, και το ταξίδι κόστιζε περισσότερο από την πέτρα.',
                  en:
                    'There is no marble in Cyprus. Every marble statue here travelled by ' +
                    'ship, and the voyage cost more than the stone did.',
                },
              },
            },
            {
              id: 'nicosia-cyprus-museum-bronze-emperor',
              name: { el: 'Ο μπρούντζινος αυτοκράτορας', en: 'The bronze emperor' },
              blurb: {
                el:
                  'Ένα μπρούντζινο άγαλμα μεγαλύτερο από άνθρωπο, του Ρωμαίου ' +
                  'αυτοκράτορα Σεπτιμίου Σεβήρου, που βρέθηκε στην Κυθρέα. Τα μπρούντζινα ' +
                  'αγάλματα της αρχαιότητας είναι σπανιότατα, και ο λόγος είναι απλός και ' +
                  'λίγο θλιβερός: ο μπρούντζος λιώνει και ξαναχύνεται. Για αιώνες, όποιος ' +
                  'έβρισκε ένα άγαλμα το έλιωνε για να φτιάξει εργαλεία, νομίσματα ή ' +
                  'όπλα. Όσα σώθηκαν, σώθηκαν σχεδόν πάντα επειδή κάποιος τα είχε θάψει ' +
                  'και τα ξέχασε.',
                en:
                  'A bronze statue larger than a person, of the Roman emperor Septimius ' +
                  'Severus, found at Kythrea. Ancient bronze statues are extremely rare, and ' +
                  'the reason is simple and slightly sad: bronze melts and can be poured ' +
                  'again. For centuries, whoever found a statue melted it down to make tools, ' +
                  'coins or weapons. The ones that survived almost always survived because ' +
                  'somebody had buried them and then forgotten.',
              },
              question: {
                q: {
                  el: 'Γιατί σώθηκαν τόσο λίγα αρχαία μπρούντζινα αγάλματα;',
                  en: 'Why did so few ancient bronze statues survive?',
                },
                answers: [
                  { el: 'Τα έλιωναν για να φτιάξουν άλλα', en: 'They were melted down for other things' },
                  { el: 'Ο μπρούντζος διαλύεται με τον χρόνο', en: 'Bronze falls apart as the years pass' },
                  { el: 'Οι Ρωμαίοι έφτιαχναν ελάχιστα από αυτά', en: 'The Romans made very few of them at all' },
                  { el: 'Τα έσπαγαν οι σεισμοί της Μεσογείου', en: 'Mediterranean earthquakes shattered them' },
                ],
                explanation: {
                  el:
                    'Ο μπρούντζος ξαναχρησιμοποιείται. Ένα άγαλμα ήταν ταυτόχρονα και ' +
                    'πρώτη ύλη για εργαλεία ή νομίσματα.',
                  en:
                    'Bronze can be used again. A statue was also a supply of raw material for ' +
                    'tools or coins.',
                },
              },
            },
            {
              id: 'nicosia-cyprus-museum-copper-ingots',
              name: { el: 'Οι πλίνθοι του χαλκού', en: 'The copper ingots' },
              blurb: {
                el:
                  'Βαριές πλάκες χαλκού σε ένα σχήμα με τέσσερις γωνίες που προεξέχουν, ' +
                  'σαν δέρμα βοδιού απλωμένο. Οι γωνίες είναι λαβές: έτσι δύο άνθρωποι ' +
                  'μπορούσαν να σηκώσουν τριάντα κιλά μετάλλου και να το φορτώσουν σε ' +
                  'πλοίο. Ο χαλκός ήταν ο λόγος που όλοι ήθελαν αυτό το νησί. Η ίδια η ' +
                  'λατινική λέξη για τον χαλκό, aes cyprium, σημαίνει «μέταλλο της ' +
                  'Κύπρου», και από εκεί βγήκε το αγγλικό copper.',
                en:
                  'Heavy slabs of copper in a shape with four corners sticking out, like an ' +
                  'ox hide laid flat. The corners are handles: two people could lift thirty ' +
                  'kilos of metal that way and load it onto a ship. Copper was the reason ' +
                  'everybody wanted this island. The Latin word for copper itself, aes ' +
                  'cyprium, means “metal of Cyprus”, and the English word copper came out of ' +
                  'it.',
              },
              question: {
                q: {
                  el: 'Γιατί οι πλίνθοι είχαν τέσσερις γωνίες που προεξέχουν;',
                  en: 'Why did the ingots have four corners sticking out?',
                },
                answers: [
                  { el: 'Ήταν λαβές για να τους σηκώνουν', en: 'They were handles for lifting them' },
                  { el: 'Έδειχναν από ποιο ορυχείο ήρθαν', en: 'They showed which mine they came from' },
                  { el: 'Κούμπωναν ο ένας μέσα στον άλλον', en: 'They locked one into the next one' },
                  { el: 'Έτσι κρύωνε γρήγορα το ζεστό μέταλλο', en: 'They let the hot metal cool down fast' },
                ],
                explanation: {
                  el:
                    'Το σχήμα βοηθούσε στη μεταφορά. Δύο άνθρωποι έπιαναν από δύο γωνίες ' +
                    'και κουβαλούσαν τριάντα κιλά χαλκού.',
                  en:
                    'The shape helped with carrying. Two people took a corner each and moved ' +
                    'thirty kilos of copper.',
                },
              },
            },
          ],
        },
      ],
      riddles: [
        {
          id: 'nicosia-cyprus-museum-riddle-1',
          difficulty: 1,
          prompt: {
            el:
              'Είμαι μικρός, γαλαζοπράσινος και ανοίγω τα χέρια μου σαν σταυρός. Φοράω ' +
              'στον λαιμό μου έναν ακόμα μικρότερο εαυτό μου, και σήμερα με βρίσκεις ' +
              'πάνω στα κυπριακά κέρματα του ευρώ.',
            en:
              'I am small, blue-green, and I hold my arms out like a cross. Around my neck I ' +
              'wear an even smaller version of myself, and today you can find me on ' +
              'the Cypriot euro coins.',
          },
          hint: {
            el: 'Κοίταξε ένα κέρμα του ενός ευρώ.',
            en: 'Have a look at a one euro coin.',
          },
          answerExhibitId: 'nicosia-cyprus-museum-pomos-idol',
        },
        {
          id: 'nicosia-cyprus-museum-riddle-2',
          difficulty: 2,
          prompt: {
            el:
              'Είμαι μέταλλο σε σχήμα απλωμένου δέρματος, με τέσσερις γωνίες για να με ' +
              'πιάνουν. Ζυγίζω όσο δύο άνθρωποι μαζί μπορούν να σηκώσουν, και το λατινικό ' +
              'μου όνομα κρύβει το όνομα αυτού του νησιού.',
            en:
              'I am metal in the shape of a laid-out hide, with four corners so I can be ' +
              'gripped. I weigh what two people together can lift, and my Latin name hides ' +
              'the name of this island.',
          },
          hint: {
            el: 'Στα λατινικά με έλεγαν aes cyprium.',
            en: 'In Latin they called me aes cyprium.',
          },
          answerExhibitId: 'nicosia-cyprus-museum-copper-ingots',
        },
        {
          id: 'nicosia-cyprus-museum-riddle-3',
          difficulty: 3,
          prompt: {
            el:
              'Έχω κέρατα και μουσούδα, αλλά δεν είμαι ζώο και δεν είμαι τέρας. Κοίτα ' +
              'προσεκτικά την άκρη του προσώπου μου και θα δεις τι ακριβώς κρύβεται από ' +
              'κάτω: ένας άνθρωπος με ρόλο.',
            en:
              'I have horns and a muzzle, but I am not an animal and I am not a monster. ' +
              'Look carefully at the edge of my face and you will see exactly what is hiding ' +
              'underneath: a person with a part to play.',
          },
          hint: {
            el: 'Στέκομαι ανάμεσα σε εκατοντάδες πήλινους γείτονες.',
            en: 'I stand among hundreds of clay neighbours.',
          },
          answerExhibitId: 'nicosia-cyprus-museum-agia-irini-masks',
        },
      ],
    },
  },

  // ------------------------------------------------------------- leventis gallery
  {
    id: 'nicosia-leventis-gallery',
    cityId: 'nicosia',
    emoji: '🖼️',
    category: 'art',
    difficulty: 2,

    name: { el: 'Λεβέντειος Πινακοθήκη', en: 'The Leventis Gallery' },
    tagline: {
      el: 'Μια συλλογή που περίμενε δεκαετίες για ένα σπίτι',
      en: 'A collection that waited decades for a home',
    },
    story: {
      el:
        'Ο Αναστάσιος Γ. Λεβέντης ήταν Κύπριος επιχειρηματίας που αγόραζε πίνακες σε ' +
        'όλη του τη ζωή. Στο τέλος είχε πάνω από οκτακόσια έργα, και ήθελε να τα δουν ' +
        'οι Κύπριοι. Ένα πρόβλημα: δεν υπήρχε κτίριο. Η συλλογή περίμενε δεκαετίες. ' +
        'Τελικά προκηρύχθηκε διεθνής αρχιτεκτονικός διαγωνισμός, το κτίριο ' +
        'ολοκληρώθηκε, και η πινακοθήκη άνοιξε το 2014, λίγο έξω από τα τείχη. Μέσα, τα ' +
        'έργα χωρίζονται σε τρεις συλλογές, μία σε κάθε όροφο. Στο ισόγειο είναι η ' +
        'κυπριακή, όπου οι ζωγράφοι ζωγραφίζουν τόπους που πιθανότατα έχεις δει με τα ' +
        'μάτια σου. Πιο πάνω είναι η Συλλογή του Παρισιού, που πήρε το όνομά της από το ' +
        'σπίτι του συλλέκτη στο Παρίσι, όπου κρέμονταν οι πίνακες: έργα μεγάλων Ευρωπαίων ' +
        'ζωγράφων, από τον Καναλέτο ως τον Μονέ και τον Σαγκάλ. Στον τελευταίο όροφο ' +
        'είναι η ελληνική συλλογή.',
      en:
        'Anastasios G. Leventis was a Cypriot businessman who bought paintings all his life. ' +
        'In the end he had more than eight hundred works, and he wanted Cypriots to see ' +
        'them. One problem: there was no building. The collection waited for decades. In the ' +
        'end an international architecture competition was held, the building was completed, ' +
        'and the gallery opened in 2014, just outside the walls. Inside, the works are split ' +
        'into three collections, one on each floor. On the ground floor is the Cypriot one, ' +
        'where painters paint places you have probably seen with your own eyes. Above it is ' +
        'the Paris Collection, named after the collector’s home in Paris, where the ' +
        'paintings used to hang: works by great European painters, from Canaletto to Monet ' +
        'and Chagall. On the top floor is the Greek collection.',
    },
    facts: [
      {
        el: 'Άνοιξε το 2014, μετά από διεθνή αρχιτεκτονικό διαγωνισμό για το κτίριό της.',
        en: 'It opened in 2014, after an international architecture competition for its building.',
      },
      {
        el: 'Η συλλογή έχει πάνω από οκτακόσιους πίνακες.',
        en: 'The collection holds more than eight hundred paintings.',
      },
      {
        el: 'Τα έργα είναι χωρισμένα σε τρεις συλλογές: κυπριακή, του Παρισιού και ελληνική.',
        en: 'The works are split into three collections: Cypriot, Paris and Greek.',
      },
    ],
    location: {
      lat: 35.1694,
      lng: 33.3585,
      anchor: 'centroid',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q16960570', deltaM: 0 },
        { kind: 'osm', ref: 'way/20493985', deltaM: 14 },
        { kind: 'wikipedia', ref: 'Leventis Gallery', deltaM: 0 },
      ],
      verifiedAt: '2026-09-14',
      findIt: {
        el: 'Λίγο έξω από τα τείχη, νότια της Πλατείας Ελευθερίας. Είναι το καινούργιο κτίριο με τα μεγάλα τζάμια.',
        en: 'Just outside the walls, south of Eleftheria Square. It is the newer building with the large windows.',
      },
    },
    question: {
      q: {
        el: 'Γιατί η μία συλλογή λέγεται «του Παρισιού»;',
        en: 'Why is one collection called the Paris Collection?',
      },
      answers: [
        { el: 'Κρέμονταν στο σπίτι του στο Παρίσι', en: 'They hung in his home in Paris' },
        { el: 'Δείχνει μόνο το Παρίσι', en: 'It shows only Paris' },
        { el: 'Όλοι οι ζωγράφοι της γεννήθηκαν στο Παρίσι', en: 'All its painters were born in Paris' },
        { el: 'Ταξιδεύει στο Παρίσι κάθε καλοκαίρι', en: 'It travels to Paris every summer' },
      ],
      explanation: {
        el:
          'Πήρε το όνομά της από το σπίτι του συλλέκτη στο Παρίσι, όπου κρέμονταν αυτοί οι ' +
          'πίνακες. Είναι έργα Ευρωπαίων ζωγράφων, από τον Καναλέτο ως τον Σαγκάλ, και όχι ' +
          'εικόνες του Παρισιού.',
        en:
          'It is named after the collector’s home in Paris, where these paintings hung. ' +
          'They are works by European painters, from Canaletto to Chagall, not pictures of Paris.',
      },
    },
  },

  // ------------------------------------------------------------ municipal gardens
  {
    id: 'nicosia-municipal-gardens',
    cityId: 'nicosia',
    emoji: '🌴',
    category: 'nature',
    difficulty: 1,

    name: { el: 'Δημοτικός Κήπος', en: 'The Municipal Gardens' },
    tagline: {
      el: 'Ο μεγαλύτερος κήπος της πόλης, ακριβώς έξω από τα τείχη',
      en: 'The city’s biggest garden, just outside the walls',
    },
    story: {
      el:
        'Η Λευκωσία βρίσκεται μακριά από τη θάλασσα, στη μέση μιας μεγάλης ' +
        'πεδιάδας, και το καλοκαίρι εκεί κάνει πολλή, ' +
        'πολλή ζέστη: το απόγευμα ο αέρας καίει και οι τοίχοι της πόλης έχουν ζεσταθεί ' +
        'όλη μέρα. Γι’ αυτό η σκιά εδώ δεν είναι πολυτέλεια αλλά υποδομή, όπως τα ' +
        'φανάρια και οι σωλήνες. Ο Δημοτικός Κήπος είναι ο μεγαλύτερος κήπος της πόλης ' +
        'και φυτεύτηκε πάνω από εκατό χρόνια πριν, όταν την Κύπρο τη διοικούσαν οι ' +
        'Βρετανοί. Οι φοίνικες και τα πεύκα του έχουν προλάβει να ψηλώσουν αρκετά ώστε ' +
        'να ρίχνουν πραγματική σκιά, κάτι που ένα νέο δέντρο δεν κάνει. Στην άκρη του ' +
        'στέκονται το Δημοτικό Θέατρο και το Κυπριακό Μουσείο. Το καλοκαίρι, τα ' +
        'τζιτζίκια στα πεύκα κάνουν τόσο θόρυβο που πρέπει να μιλήσεις δυνατότερα για να ' +
        'σε ακούσουν.',
      en:
        'Nicosia lies far from the sea, in the middle ' +
        'of a wide plain, and in summer it gets very, very hot there: by afternoon the air ' +
        'burns and the walls of the city have been heating up all day. That is why shade ' +
        'here is not a luxury but infrastructure, like traffic lights and pipes. The ' +
        'Municipal Gardens are the largest garden in the city and were planted more than a ' +
        'hundred years ago, when Cyprus was governed by the British. Their palms and pines ' +
        'have had time to grow tall enough to throw real shade, which a young tree does not ' +
        'do. At one edge stand the Municipal Theatre and the Cyprus Museum. In summer the ' +
        'cicadas in the pines make so much noise that you have to talk louder to be heard.',
    },
    facts: [
      {
        el: 'Είναι ο μεγαλύτερος δημοτικός κήπος της Λευκωσίας.',
        en: 'It is the largest municipal garden in Nicosia.',
      },
      {
        el: 'Φυτεύτηκε πάνω από εκατό χρόνια πριν, στα χρόνια της βρετανικής διοίκησης.',
        en: 'It was planted more than a hundred years ago, under British administration.',
      },
      {
        el: 'Στην άκρη του βρίσκονται το Δημοτικό Θέατρο και το Κυπριακό Μουσείο.',
        en: 'The Municipal Theatre and the Cyprus Museum stand at its edge.',
      },
    ],
    location: {
      lat: 35.173,
      lng: 33.354,
      anchor: 'area',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q7030534', deltaM: 0 },
        { kind: 'osm', ref: 'way/22634563', deltaM: 9 },
        { kind: 'wikipedia', ref: 'Nicosia municipal gardens', deltaM: 0 },
      ],
      verifiedAt: '2026-09-14',
      note: 'An area: the point is the middle of the planting, not a gate.',
      findIt: {
        el: 'Έξω από τα τείχη, δίπλα στο Δημοτικό Θέατρο. Μπες από την πύλη που κοιτάζει την οδό Μουσείου.',
        en: 'Outside the walls, next to the Municipal Theatre. Go in by the gate facing Museum Street.',
      },
    },
    question: {
      q: {
        el: 'Γιατί η σκιά μετράει τόσο πολύ στη Λευκωσία;',
        en: 'Why does shade matter so much in Nicosia?',
      },
      answers: [
        { el: 'Είναι μακριά από τη θάλασσα και ζεσταίνεται', en: 'It is far from the sea and gets very hot' },
        { el: 'Βρέχει τόσο πολύ που θέλει κάλυμμα', en: 'It rains so much that cover is needed' },
        { el: 'Τα δέντρα κρατούν τα τείχη στη θέση τους', en: 'The trees hold the old walls in position' },
        { el: 'Η πόλη είναι χτισμένη ψηλά στα βουνά', en: 'The city is built high up in the mountains' },
      ],
      explanation: {
        el:
          'Η Λευκωσία είναι μακριά από τη θάλασσα, στη μέση μιας ' +
          'πεδιάδας. Χωρίς θαλασσινό αεράκι, το καλοκαίρι η ζέστη μένει.',
        en:
          'Nicosia lies far from the sea, in the middle of a plain. ' +
          'With no sea breeze, the summer heat simply stays.',
      },
    },
  },

  // ----------------------------------------------------------- motorcycle museum
  {
    id: 'nicosia-motorcycle-museum',
    cityId: 'nicosia',
    emoji: '🏍️',
    category: 'science',
    difficulty: 1,

    name: {
      el: 'Μουσείο Κλασικών Μοτοσικλετών',
      en: 'The Classic Motorcycle Museum',
    },
    tagline: {
      el: 'Τετρακόσιες μηχανές που ξεκίνησαν από τη συλλογή ενός ανθρώπου',
      en: 'Four hundred machines that began as one man’s collection',
    },
    story: {
      el:
        'Το 2000 ο Ανδρέας Νικολάου άνοιξε ένα μουσείο για τις μοτοσικλέτες που ' +
        'μάζευε. Σήμερα εκεί μέσα στέκονται περισσότερες από τετρακόσιες, από το 1914 ' +
        'ως το 1983: AJS, Norton, BSA, Triumph, Matchless, BMW, Moto Guzzi, Royal ' +
        'Enfield και πολλές ακόμα. Είναι το μεγαλύτερο μουσείο μοτοσικλέτας της Μέσης ' +
        'Ανατολής. Το ωραίο με τις παλιές μηχανές είναι ότι δεν κρύβουν τίποτα. Δεν ' +
        'έχουν πλαστικά καπάκια, οπότε βλέπεις όλη τη διαδρομή της κίνησης: μια μικρή ' +
        'έκρηξη βενζίνης σπρώχνει ένα έμβολο κάτω, το έμβολο γυρίζει έναν άξονα, ο ' +
        'άξονας τραβάει μια αλυσίδα, και η αλυσίδα γυρίζει τον πίσω τροχό. Τέσσερα ' +
        'βήματα, από φωτιά σε ταχύτητα, όλα ορατά με γυμνό μάτι. Οι παλιότερες δεν ' +
        'έχουν καν μίζα: ο οδηγός έπρεπε να πηδήξει πάνω σε μια μανιβέλα με όλο του το ' +
        'βάρος για να ξεκινήσει ο κινητήρας.',
      en:
        'In 2000 Andreas Nicolaou opened a museum for the motorcycles he had been ' +
        'collecting. Today more than four hundred of them stand in there, from 1914 to ' +
        '1983: AJS, Norton, BSA, Triumph, Matchless, BMW, Moto Guzzi, Royal Enfield and many ' +
        'more. It is the largest motorcycle museum in the Middle East. The good thing about ' +
        'old machines is that they hide nothing. They have no plastic covers, so you can see ' +
        'the whole path of the movement: a small explosion of petrol pushes a piston down, ' +
        'the piston turns a shaft, the shaft pulls a chain, and the chain turns the back ' +
        'wheel. Four steps, from fire to speed, all of them visible with the naked eye. The ' +
        'oldest ones have no starter at all: the rider had to jump on a lever with his whole ' +
        'weight to get the engine going.',
    },
    facts: [
      {
        el: 'Το μουσείο ιδρύθηκε το 2000 από τον Ανδρέα Νικολάου.',
        en: 'The museum was founded in 2000 by Andreas Nicolaou.',
      },
      {
        el: 'Στεγάζει περισσότερες από τετρακόσιες μοτοσικλέτες.',
        en: 'It houses more than four hundred motorcycles.',
      },
      {
        el: 'Οι μηχανές του καλύπτουν τα χρόνια από το 1914 ως το 1983.',
        en: 'Its machines cover the years from 1914 to 1983.',
      },
    ],
    location: {
      lat: 35.17278,
      lng: 33.35833,
      anchor: 'centroid',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q5200446', deltaM: 0 },
        { kind: 'osm', ref: 'node/4557557192', deltaM: 11 },
        { kind: 'wikipedia', ref: 'Cyprus Classic Motorcycle Museum', deltaM: 4 },
      ],
      verifiedAt: '2026-09-14',
      findIt: {
        el: 'Οδός Γρανικού, έξω από τα τείχη κοντά στην Πύλη Πάφου. Είναι μικρό κτίριο· κοίτα για μηχανές στη βιτρίνα.',
        en: 'On Granikou Street, outside the walls near Paphos Gate. It is a small building; look for bikes in the window.',
      },
    },
    question: {
      q: {
        el: 'Τι κάνει η μικρή έκρηξη μέσα στον κινητήρα;',
        en: 'What does the small explosion inside the engine do?',
      },
      answers: [
        { el: 'Σπρώχνει ένα έμβολο προς τα κάτω', en: 'It pushes a piston downwards' },
        { el: 'Ανάβει τον προβολέα της μηχανής', en: 'It lights the lamp on the machine' },
        { el: 'Ζεσταίνει τη βενζίνη στο ρεζερβουάρ', en: 'It warms the petrol in the tank' },
        { el: 'Γυρίζει κατευθείαν τον πίσω τροχό', en: 'It turns the back wheel directly' },
      ],
      explanation: {
        el:
          'Η έκρηξη σπρώχνει το έμβολο, το έμβολο γυρίζει έναν άξονα, ο άξονας τραβάει ' +
          'την αλυσίδα και η αλυσίδα γυρίζει τον τροχό.',
        en:
          'The explosion pushes the piston, the piston turns a shaft, the shaft pulls the ' +
          'chain and the chain turns the wheel.',
      },
    },
  },
];

export const trails: Trail[] = [
  {
    id: 'nicosia-the-circle',
    cityId: 'nicosia',
    emoji: '🛡️',
    name: { el: 'Ο κύκλος και η τάφρος του', en: 'The circle and its ditch' },
    promise: {
      el: 'Έντεκα προμαχώνες σαν καρδιές, ένα τούνελ με τρύπα για τον ήλιο και μια πλατεία που κρέμεται.',
      en: 'Eleven bastions like hearts, a tunnel with a hole for the sun, and a square that hangs.',
    },
    placeIds: [
      'nicosia-eleftheria-square',
      'nicosia-venetian-walls',
      'nicosia-famagusta-gate',
      'nicosia-municipal-gardens',
    ],
  },
  {
    id: 'nicosia-five-rulers',
    cityId: 'nicosia',
    emoji: '👑',
    name: { el: 'Τέσσερα αφεντικά, μία πόλη', en: 'Four rulers, one city' },
    promise: {
      el: 'Γάλλοι, Ενετοί, Οθωμανοί και Βρετανοί άφησαν όλοι κάτι, και όλα στέκονται ακόμα όρθια.',
      en: 'French, Venetians, Ottomans and British each left something, and all of it still stands.',
    },
    placeIds: [
      'nicosia-omeriye-mosque',
      'nicosia-famagusta-gate',
      'nicosia-kornesios-mansion',
      'nicosia-cyprus-museum',
    ],
  },
  {
    id: 'nicosia-inside-things',
    cityId: 'nicosia',
    emoji: '🔍',
    name: { el: 'Μέσα στα πράγματα', en: 'Inside things' },
    promise: {
      el: 'Δύο μουσεία με δωμάτια να μπεις, τετρακόσιες μηχανές και οκτακόσιοι πίνακες.',
      en: 'Two museums with rooms to walk into, four hundred machines and eight hundred paintings.',
    },
    placeIds: [
      'nicosia-cyprus-museum',
      'nicosia-kornesios-mansion',
      'nicosia-leventis-gallery',
      'nicosia-motorcycle-museum',
    ],
  },
  {
    id: 'nicosia-one-afternoon',
    cityId: 'nicosia',
    emoji: '🌞',
    name: { el: 'Ένα απόγευμα στην παλιά πόλη', en: 'One afternoon in the old town' },
    promise: {
      el: 'Ο δρόμος της αγοράς, η θέα από τον ενδέκατο όροφο και ένα λουτρό που ζεσταίνεται από κάτω.',
      en: 'The market street, the view from the eleventh floor, and a bath heated from below.',
    },
    placeIds: [
      'nicosia-ledra-street',
      'nicosia-shacolas-tower',
      'nicosia-omeriye-hammam',
      'nicosia-faneromeni',
    ],
  },
];
