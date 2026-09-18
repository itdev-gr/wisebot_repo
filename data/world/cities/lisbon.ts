/**
 * WiseBot World — Lisbon.
 *
 * Sixteen places, two of them museums with an interior. Built by conversion, the way
 * `paris.ts` was: ten of the sixteen come from the Explorer product on origin/main,
 * whose text is the raw material here, reshaped to this module's lengths and voice and
 * given sourced coordinates, museums and riddles. Explorer's `riddle`, `parentHint` and
 * `onSite` fields belong to a GPS treasure hunt and are not carried over.
 *
 * Every coordinate is copied from `data/world/coords/lisbon.json`, field for field.
 * Nothing graded `D`. No place claims an `entrance`, because no door in this city has
 * been measured. Overpass answered for only five of the sixteen places; for the other
 * eleven the resolver records `osm: overpass 429` or `osm: overpass 504`, so those points
 * rest on Wikidata plus the English Wikipedia and grade B or C. A cross-check that never
 * arrives does not move a point: the coordinate is Wikidata's either way.
 *
 * Judgement calls, all of them:
 *
 *  - **Every one of Explorer's ten spots survived.** That is unusual and worth saying:
 *    all ten had a Wikidata item whose Portuguese description names Lisboa, and none of
 *    them landed inside 25 m of another.
 *  - **Ponte 25 de Abril was seeded and then dropped.** It graded D: Wikipedia's point
 *    sits 567 m from Wikidata's, past even the 500 m an `area` is allowed, because the
 *    bridge is 2.3 km long and the two sources picked different spans. No Wikidata item
 *    exists for a single span, so there was nothing better to point at. The bridge is
 *    described from the castle and from the Padrão instead.
 *  - **Museu Nacional dos Coches was seeded and then dropped**, and it is a textbook
 *    institution-not-building failure: the collection moved to a new building in 2015
 *    and its old home stands across the road, so Wikidata, OSM and Wikipedia were
 *    pointing at two different doors 181 m apart. The Museu de Marinha took the slot —
 *    it grades B, and it is 236 m from the Jerónimos pin, which is a second door in the
 *    same monastery rather than a second pin on the same spot.
 *  - **Six places were added** to Explorer's ten: the two museums with interiors, which
 *    Explorer has no model for, plus the Oceanário (nothing in the ten was east of
 *    Alfama), the aqueduct, the Estádio da Luz and the Belém bakery.
 *
 * `el` and `en` only. The other four arrive as overlay files and never as extra keys
 * in here.
 */

import type { Place, Trail } from '../types';

export const places: Place[] = [
  // ---------------------------------------------------------- praça do comércio
  {
    id: 'lisbon-praca-do-comercio',
    cityId: 'lisbon',
    emoji: '🐎',
    category: 'landmark',
    difficulty: 1,

    name: { el: 'Πράσα ντο Κομέρσιο', en: 'Praça do Comércio' },
    tagline: {
      el: 'Εδώ ήταν το παλάτι, μέχρι το πρωί του σεισμού',
      en: 'The palace stood here, until the morning of the earthquake',
    },
    story: {
      el:
        'Ακριβώς εδώ, δίπλα στο νερό, στεκόταν το παλάτι των βασιλιάδων της Πορτογαλίας. ' +
        'Το πρωί της 1ης Νοεμβρίου 1755 ένας τρομερός σεισμός ταρακούνησε τη Λισαβόνα, και ' +
        'το παλάτι χάθηκε μαζί με το μεγαλύτερο μέρος του κέντρου. Οι άνθρωποι δεν τα ' +
        'παράτησαν. Ο υπουργός του βασιλιά, ο Μαρκήσιος του Pombal, δεν ξαναέφτιαξε τα ' +
        'παλιά στενά σοκάκια: χάραξε ολοκαίνουργιους ίσιους δρόμους και έχτισε αυτή την ' +
        'τεράστια πλατεία με τις κίτρινες στοές, ανοιχτή από τη μία μεριά στο ποτάμι, για ' +
        'να δέχεται καράβια και εμπόρους από όλον τον κόσμο. Ο βασιλιάς πάνω στο άλογο ' +
        'είναι ο José I, που βασίλευε τότε. Κατέβα ως το νερό και θα βρεις δύο πέτρινες ' +
        'κολόνες και μαρμάρινα σκαλιά που μπαίνουν μέσα στο ποτάμι: εκεί έδεναν οι βάρκες ' +
        'και από εκεί ανέβαιναν οι επίσημοι επισκέπτες στην πόλη. Όταν κάτι σπάει, μπορεί ' +
        'να ξαναχτιστεί, καμιά φορά και καλύτερο.',
      en:
        'Right here, beside the water, stood the palace of the kings of Portugal. On the ' +
        'morning of 1 November 1755 a terrible earthquake shook Lisbon, and the palace was ' +
        'lost along with most of the city centre. The people did not give up. The king’s ' +
        'minister, the Marquis of Pombal, did not put the old tangled lanes back: he drew ' +
        'brand-new straight streets and built this enormous square with its yellow arcades, ' +
        'open on one side to the river, so that ships and merchants from all over the world ' +
        'could arrive at it. The king on the horse is José I, who ruled at the time. Walk ' +
        'down to the water and you will find two stone columns and marble steps going into ' +
        'the river: boats tied up there, and important visitors climbed those steps into the ' +
        'city. When something breaks, it can be built again, and sometimes built better.',
    },
    facts: [
      {
        el: 'Οι Πορτογάλοι τη λένε ακόμα Terreiro do Paço, «η Αυλή του Παλατιού», αν και το παλάτι χάθηκε στον σεισμό του 1755.',
        en: 'People still call it Terreiro do Paço, “the Palace Ground”, though the palace was lost in the earthquake of 1755.',
      },
      {
        el: 'Ο σεισμός του 1755 ήταν από τους ισχυρότερους που έχουν καταγραφεί στην Ευρώπη, και το κύμα του έφτασε ως την Αγγλία.',
        en: 'The 1755 earthquake was one of the strongest recorded in Europe, and its wave reached as far as England.',
      },
      {
        el: 'Στην ανοιχτή πλευρά, τα μαρμάρινα σκαλιά του Cais das Colunas κατεβαίνουν μέσα στο νερό.',
        en: 'On the open side, the marble steps of the Cais das Colunas go down into the water.',
      },
    ],
    location: {
      lat: 38.7075,
      lng: -9.13639,
      anchor: 'area',
      confidence: 'C',
      sources: [
        { kind: 'wikidata', ref: 'Q999002', deltaM: 0 },
        { kind: 'osm', ref: 'node/1118902554', deltaM: 83 },
      ],
      verifiedAt: '2026-09-13',
      note: 'An area: OSM’s node sits 83 m from Wikidata’s point, both inside a square about 175 m across. The English Wikipedia article carries no coordinate for it.',
      findIt: {
        el: 'Στάσου κάτω από τις κίτρινες στοές και προχώρα προς το νερό. Η πλατεία τελειώνει σε σκαλιά, όχι σε τοίχο.',
        en: 'Stand under the yellow arcades and walk towards the water. The square ends in steps, not in a wall.',
      },
    },
    question: {
      q: {
        el: 'Τι υπήρχε σε αυτή την πλατεία πριν από τον σεισμό;',
        en: 'What stood on this square before the earthquake?',
      },
      answers: [
        { el: 'Το παλάτι των βασιλιάδων', en: 'The palace of the kings' },
        { el: 'Ένα μοναστήρι με περιβόλι', en: 'A monastery with an orchard' },
        { el: 'Ο παλιός φάρος του λιμανιού', en: 'The old harbour lighthouse' },
        { el: 'Μια αγορά με στοές', en: 'A market with arcades' },
      ],
      explanation: {
        el:
          'Ήταν το Paço da Ribeira, το παλάτι δίπλα στο ποτάμι. Ο σεισμός του 1755 το ' +
          'γκρέμισε, και στη θέση του η πόλη έφτιαξε μια πλατεία ανοιχτή σε όλους.',
        en:
          'It was the Paço da Ribeira, the palace by the river. The 1755 earthquake brought ' +
          'it down, and in its place the city built a square that was open to everyone.',
      },
    },
  },

  // --------------------------------------------------------- arco da rua augusta
  {
    id: 'lisbon-arco-da-rua-augusta',
    cityId: 'lisbon',
    emoji: '🕰️',
    category: 'history',
    difficulty: 2,

    name: { el: 'Η Αψίδα της Rua Augusta', en: 'The Rua Augusta Arch' },
    tagline: {
      el: 'Ένα «μπράβο» από πέτρα που άργησε εκατό χρόνια',
      en: 'A “well done” in stone that arrived a hundred years late',
    },
    story: {
      el:
        'Αυτή η αψίδα σχεδιάστηκε αμέσως μετά τον σεισμό, σαν πύλη που φωνάζει: «Κοιτάξτε, ' +
        'η Λισαβόνα στέκεται ξανά!» Μόνο που το χτίσιμο πήγε πολύ αργά. Άλλαξαν σχέδια, ' +
        'άλλαξαν βασιλιάδες, και η αψίδα τελείωσε το 1875, περισσότερο από έναν αιώνα μετά ' +
        'τη μέρα που την υποσχέθηκαν. Ψηλά στην κορυφή, μια μαρμάρινη κυρία που λέγεται ' +
        'Δόξα ακουμπάει στεφάνια σε δύο φιγούρες, την Ευφυΐα και την Ανδρεία: την εξυπνάδα ' +
        'και το θάρρος, ακριβώς τα δύο πράγματα που χρειάστηκε η πόλη για να σηκωθεί. Πιο ' +
        'χαμηλά, ανάμεσα στις κολόνες, στέκονται σκαλισμένοι άνθρωποι που έζησαν στ’ ' +
        'αλήθεια, όπως ο θαλασσοπόρος Vasco da Gama και ο Μαρκήσιος του Pombal. Από κάτω ' +
        'της ξεκινάει η Rua Augusta, ο πιο πολυσύχναστος πεζόδρομος της πόλης. Και από το ' +
        '2013 ένα ασανσέρ ανεβάζει επισκέπτες στη σκεπή της, να δουν από ψηλά τους ίσιους ' +
        'δρόμους που σχεδίασε ο Pombal.',
      en:
        'This arch was planned straight after the earthquake, as a gateway that shouts: ' +
        '“Look, Lisbon is standing again!” Only the building of it went very slowly. Plans ' +
        'changed, kings changed, and the arch was finished in 1875, more than a century ' +
        'after the day it was promised. High on top, a marble lady called Glory lays ' +
        'crowns on two figures, Genius and Valour: cleverness and courage, exactly the two ' +
        'things the city needed to get back up. Lower down, between the columns, stand ' +
        'carved people who really lived, such as the navigator Vasco da Gama and the ' +
        'Marquis of Pombal. Underneath it begins the Rua Augusta, the busiest walking ' +
        'street in town. And since 2013 a lift has carried visitors up to its roof, to look ' +
        'down on the straight streets Pombal drew.',
    },
    facts: [
      {
        el: 'Σχεδιάστηκε μετά τον σεισμό του 1755 και τελείωσε μόλις το 1875, 120 χρόνια μετά τον σεισμό.',
        en: 'It was planned after the 1755 earthquake and only finished in 1875, 120 years after the earthquake.',
      },
      {
        el: 'Το γλυπτό στην κορυφή το σκάλισε ο Γάλλος Célestin Anatole Calmels.',
        en: 'The sculpture group on top was carved by the Frenchman Célestin Anatole Calmels.',
      },
      {
        el: 'Η ταράτσα της άνοιξε για το κοινό το 2013· το ρολόι μπήκε πολύ αργότερα από την αψίδα.',
        en: 'Its rooftop opened to the public in 2013, and the clock was added long after the arch.',
      },
    ],
    location: {
      lat: 38.7084,
      lng: -9.1368,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q637590', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Rua Augusta Arch', deltaM: 0 },
      ],
      verifiedAt: '2026-09-13',
      note: 'The Overpass API answered 429 during this run, so there is no OSM cross-check; the two sources that did answer agree exactly.',
      findIt: {
        el: 'Είναι στη βόρεια πλευρά της Praça do Comércio. Η πόρτα για το ασανσέρ της σκεπής είναι στο πλάι, όχι κάτω από το τόξο.',
        en: 'It is on the north side of Praça do Comércio. The door for the roof lift is at the side, not under the arch.',
      },
    },
    question: {
      q: {
        el: 'Πόσο κράτησε το χτίσιμο αυτής της αψίδας;',
        en: 'How long did this arch take to build?',
      },
      answers: [
        { el: 'Πάνω από έναν ολόκληρο αιώνα', en: 'More than a whole century' },
        { el: 'Έναν χειμώνα και μία άνοιξη', en: 'One winter and one spring' },
        { el: 'Περίπου τρία γεμάτα χρόνια', en: 'About three full years' },
        { el: 'Δώδεκα χρόνια με δύο διακοπές', en: 'Twelve years, with two breaks' },
      ],
      explanation: {
        el:
          'Σχεδιάστηκε γύρω στο 1760 και τελείωσε το 1875. Η πόλη ξαναχτίστηκε πολύ πριν ' +
          'προλάβει να τελειώσει η πύλη που θα το γιόρταζε.',
        en:
          'It was planned around 1760 and finished in 1875. The city was rebuilt long before ' +
          'the gateway meant to celebrate that was ready.',
      },
    },
  },

  // ------------------------------------------------------ elevador de santa justa
  {
    id: 'lisbon-elevador-de-santa-justa',
    cityId: 'lisbon',
    emoji: '🛗',
    category: 'science',
    difficulty: 2,

    name: { el: 'Ασανσέρ Σάντα Ζούστα', en: 'The Santa Justa Lift' },
    tagline: {
      el: 'Ένας σιδερένιος πύργος που είναι κανονικό μέσο συγκοινωνίας',
      en: 'An iron tower that counts as public transport',
    },
    story: {
      el:
        'Η Λισαβόνα είναι χτισμένη σε λόφους, και για να πας από τα μαγαζιά της Baixa στη ' +
        'γειτονιά του Chiado, τριάντα μέτρα πιο ψηλά, χρειαζόσουν πολλά, πάρα πολλά ' +
        'σκαλοπάτια. Το 1902 η πόλη απέκτησε τη λύση: έναν σιδερένιο πύργο σαράντα πέντε ' +
        'μέτρων, με δύο ξύλινες καμπίνες που ανεβοκατεβαίνουν μέσα του. Τον σχεδίασε ο ' +
        'μηχανικός Raoul Mesnier du Ponsard, που θαύμαζε τα σιδερένια κτίρια της εποχής ' +
        'του. Στην αρχή τις καμπίνες τις τραβούσε μια ατμομηχανή, όπως ένα τρένο· λίγα ' +
        'χρόνια αργότερα έγιναν ηλεκτρικές. Από την κορυφή μια μεταλλική γέφυρα σε βγάζει ' +
        'στο Chiado, και η θέα απλώνεται πάνω από τις κόκκινες σκεπές μέχρι το κάστρο. Το ' +
        'πιο ωραίο όμως είναι αυτό: ο πύργος δεν είναι αξιοθέατο για τουρίστες. Είναι ' +
        'κανονικό μέσο μαζικής μεταφοράς, της ίδιας εταιρείας με τα τραμ, και οι κάτοικοι ' +
        'τον χρησιμοποιούν για να πάνε στη δουλειά τους.',
      en:
        'Lisbon is built on hills, and getting from the shops of the Baixa up to the Chiado ' +
        'quarter, thirty metres higher, meant many, many steps. In 1902 the city got its ' +
        'answer: an iron tower forty-five metres tall, with two wooden cabins riding up and ' +
        'down inside it. It was designed by the engineer Raoul Mesnier du Ponsard, who ' +
        'admired the iron buildings of his day. At first a steam engine hauled the cabins ' +
        'up, like a train; a few years later they were switched to electricity. From the ' +
        'top a metal walkway takes you out into the Chiado, and the view stretches over red ' +
        'roofs all the way to the castle. Best of all is this: the tower is not a ride for ' +
        'visitors. It is real public transport, run by the same company as the trams, and ' +
        'people take it to work.',
    },
    facts: [
      {
        el: 'Άνοιξε το 1902 και έχει ύψος 45 μέτρα.',
        en: 'It opened in 1902 and stands 45 metres tall.',
      },
      {
        el: 'Στην αρχή τις καμπίνες τις κινούσε ατμομηχανή· λίγα χρόνια μετά έγιναν ηλεκτρικές.',
        en: 'A steam engine moved the cabins at first; a few years later they became electric.',
      },
      {
        el: 'Είναι το μόνο κάθετο ασανσέρ δρόμου της Λισαβόνας που λειτουργεί ακόμα, και ανήκει στη δημόσια συγκοινωνία.',
        en: 'It is the only vertical street lift still working in Lisbon, and it belongs to the public transport network.',
      },
    ],
    location: {
      lat: 38.71194,
      lng: -9.13917,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q168001', deltaM: 0 },
        { kind: 'osm', ref: 'way/115238861', deltaM: 27 },
        { kind: 'wikipedia', ref: 'Santa Justa Lift', deltaM: 39 },
      ],
      verifiedAt: '2026-09-13',
      note: 'All three sources answered: OSM 27 m from Wikidata’s point, Wikipedia 39 m. The tower is 45 m tall and every point is on it.',
      findIt: {
        el: 'Η ουρά σχηματίζεται κάτω, στη Rua do Ouro. Από πάνω μπαίνεις δωρεάν, από το Largo do Carmo.',
        en: 'The queue forms at the bottom, on Rua do Ouro. From above you can walk in free, from the Largo do Carmo.',
      },
    },
    question: {
      q: {
        el: 'Τι κινούσε τις καμπίνες όταν πρωτοάνοιξε;',
        en: 'What moved the cabins when it first opened?',
      },
      answers: [
        { el: 'Μια ατμομηχανή', en: 'A steam engine' },
        { el: 'Άλογα δεμένα με σκοινί', en: 'Horses tied to a rope' },
        { el: 'Νερό μέσα σε δεξαμενές', en: 'Water held in big tanks' },
        { el: 'Ηλεκτρικό μοτέρ', en: 'An electric motor' },
      ],
      explanation: {
        el:
          'Το 1902 δούλευε με ατμό, όπως τα τρένα. Το ηλεκτρικό μοτέρ ήρθε λίγα χρόνια ' +
          'αργότερα και το ασανσέρ δουλεύει έτσι μέχρι σήμερα.',
        en:
          'In 1902 it ran on steam, like the trains. The electric motor came a few years ' +
          'later, and that is how the lift still works today.',
      },
    },
  },

  // ----------------------------------------------------------------- rossio
  {
    id: 'lisbon-rossio',
    cityId: 'lisbon',
    emoji: '🌊',
    category: 'art',
    difficulty: 2,

    name: { el: 'Πλατεία Rossio', en: 'The Rossio' },
    tagline: {
      el: 'Μια πλατεία με κύματα ζωγραφισμένα στο πεζοδρόμιο',
      en: 'A square with waves drawn on the pavement',
    },
    story: {
      el:
        'Το Rossio είναι το σαλόνι της Λισαβόνας εδώ και αιώνες: εδώ γίνονταν αγορές, ' +
        'γιορτές, ακόμα και ταυρομαχίες. Το πιο εντυπωσιακό του όμως δεν είναι ψηλά, είναι ' +
        'κάτω από τα πόδια σου. Το 1848 στρώθηκε το πεζοδρόμιο με μικρές άσπρες και μαύρες ' +
        'πέτρες, βαλμένες μία μία με το χέρι, σε σχέδιο που κάνει κύματα. Όταν περπατάς ' +
        'πάνω του, το μάτι σου νομίζει ότι το έδαφος κουνιέται σαν θάλασσα — η θάλασσα που ' +
        'πέρασαν οι Πορτογάλοι ναυτικοί. Το σχέδιο άρεσε τόσο, που τέτοια πεζοδρόμια ' +
        'απλώθηκαν σε ολόκληρη την πόλη και μετά σε όλη τη χώρα. Στη μέση της πλατείας μια ' +
        'ψηλή κολόνα κρατάει τον βασιλιά Pedro IV, που υπήρξε επίσης ο πρώτος αυτοκράτορας ' +
        'της Βραζιλίας, και δύο μπρούντζινα σιντριβάνια ήρθαν με πλοίο από τη Γαλλία. Το ' +
        'επίσημο όνομά της είναι Praça D. Pedro IV. Κανείς δεν το λέει έτσι.',
      en:
        'The Rossio has been Lisbon’s living room for centuries: markets, festivals and ' +
        'even bullfights happened here. But the most striking thing about it is not above ' +
        'you, it is under your feet. In 1848 the pavement was laid with small black and ' +
        'white stones, set one by one by hand, in a pattern that makes waves. When you walk ' +
        'across it your eyes think the ground is rolling like the sea — the sea Portuguese ' +
        'sailors crossed. People liked it so much that pavements like this spread across ' +
        'the whole city and then the whole country. In the middle a tall column holds King ' +
        'Pedro IV, who was also the first emperor of Brazil, and two bronze fountains came ' +
        'by ship from France. Its official name is Praça D. Pedro IV. Nobody calls it that.',
    },
    facts: [
      {
        el: 'Το κυματιστό πεζοδρόμιο στρώθηκε το 1848 και από εδώ απλώθηκε σε όλη την Πορτογαλία.',
        en: 'The wave pavement was laid in 1848, and from here it spread across all of Portugal.',
      },
      {
        el: 'Οι πέτρες μπαίνουν μία μία στο χέρι· η τέχνη λέγεται calçada portuguesa.',
        en: 'The stones are set one by one by hand; the craft is called calçada portuguesa.',
      },
      {
        el: 'Ο βασιλιάς πάνω στην κολόνα, ο Pedro IV, ήταν και ο πρώτος αυτοκράτορας της Βραζιλίας.',
        en: 'The king on the column, Pedro IV, was also the first emperor of Brazil.',
      },
    ],
    location: {
      lat: 38.71389,
      lng: -9.13944,
      anchor: 'area',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q1549270', deltaM: 0 },
        { kind: 'osm', ref: 'way/1317749306', deltaM: 16 },
        { kind: 'wikipedia', ref: 'Rossio', deltaM: 0 },
      ],
      verifiedAt: '2026-09-13',
      note: 'The square (Q1549270), not the Rossio railway station 150 m north-west, which is a separate Wikidata item. All three sources answered and land within 16 m of each other.',
      findIt: {
        el: 'Στάσου στη μέση, κάτω από την κολόνα, και κοίτα κάτω από τα παπούτσια σου πριν κοιτάξεις γύρω.',
        en: 'Stand in the middle, under the column, and look down at your shoes before you look around.',
      },
    },
    question: {
      q: {
        el: 'Τι σχηματίζουν οι άσπρες και μαύρες πέτρες στο πεζοδρόμιο;',
        en: 'What do the black and white stones on the pavement make?',
      },
      answers: [
        { el: 'Κύματα, σαν τη θάλασσα', en: 'Waves, like the sea' },
        { el: 'Αστέρια και μισοφέγγαρα', en: 'Stars and crescent moons' },
        { el: 'Γράμματα του αλφαβήτου', en: 'Letters of the alphabet' },
        { el: 'Χάρτη με τα βουνά', en: 'Mountains on a map' },
      ],
      explanation: {
        el:
          'Είναι κύματα, και ξεγελούν το μάτι: το έδαφος μοιάζει να κουνιέται. Θυμίζουν τη ' +
          'θάλασσα που πέρασαν τα πορτογαλικά καράβια.',
        en:
          'They are waves, and they fool the eye: the ground seems to move. They stand for ' +
          'the sea that Portuguese ships crossed.',
      },
    },
  },

  // ------------------------------------------------------------- sé de lisboa
  {
    id: 'lisbon-se-de-lisboa',
    cityId: 'lisbon',
    emoji: '⛪',
    category: 'history',
    difficulty: 2,

    name: { el: 'Καθεδρικός της Λισαβόνας', en: 'Lisbon Cathedral' },
    tagline: {
      el: 'Εκκλησία χτισμένη σαν κάστρο, με δύο πύργους φρουράς',
      en: 'A church built like a castle, with two towers for guards',
    },
    story: {
      el:
        'Είναι η παλαιότερη εκκλησία της Λισαβόνας και ξεκίνησε το 1147. Εκείνη τη χρονιά ' +
        'ο Afonso Henriques, ο πρώτος βασιλιάς της Πορτογαλίας, πήρε την πόλη από τους ' +
        'Μαυριτανούς, που την κυβερνούσαν περίπου τετρακόσια χρόνια, και θέλησε αμέσως έναν ' +
        'μεγάλο καθεδρικό. Οι καιροί ήταν αβέβαιοι, οπότε οι χτίστες τον έκαναν γερό σαν ' +
        'κάστρο: χοντροί τοίχοι, λίγα παράθυρα, και δύο πύργοι όπου μπορούσαν να στέκονται ' +
        'φρουροί. Γι’ αυτό, αν τον δεις από μακριά, μοιάζει περισσότερο με οχυρό παρά με ' +
        'εκκλησία. Πάνω από την πόρτα υπάρχει ένα στρογγυλό παράθυρο-ρόδακας: ο ήλιος ' +
        'περνάει από μέσα του και βάφει χρώματα στο πέτρινο δάπεδο. Ο καθεδρικός έχει ' +
        'αντέξει πολλούς σεισμούς, και στον μεγάλο του 1755 έπεσε ένα κομμάτι του και ' +
        'ξαναχτίστηκε. Γεροί τοίχοι και υπομονή: έτσι στέκεται σχεδόν εννιακόσια χρόνια.',
      en:
        'This is the oldest church in Lisbon, and it was begun in 1147. That year Afonso ' +
        'Henriques, the first king of Portugal, took the city from the Moors, who had ruled ' +
        'it for about four hundred years, and he wanted a great cathedral straight away. ' +
        'Times were uncertain, so the builders made it strong like a castle: thick walls, ' +
        'few windows, and two towers where guards could stand. That is why, from a distance, ' +
        'it looks more like a fort than a church. Above the door is a round rose window: ' +
        'sunlight comes through it and paints colours on the stone floor. The cathedral has ' +
        'survived many earthquakes, and in the great one of 1755 a part of it fell and was ' +
        'rebuilt. Strong walls and patience: that is how it has stood for almost nine ' +
        'hundred years.',
    },
    facts: [
      {
        el: 'Ξεκίνησε το 1147 και είναι η παλαιότερη εκκλησία της πόλης.',
        en: 'It was begun in 1147 and is the oldest church in the city.',
      },
      {
        el: 'Κάτω από το μοναστηριακό της αίθριο οι αρχαιολόγοι βρήκαν ρωμαϊκό δρόμο, λίγα μέτρα πιο κάτω.',
        en: 'Under its cloister archaeologists found a Roman street, only a few metres down.',
      },
      {
        el: 'Η παράδοση λέει ότι εδώ βαφτίστηκε ο Άγιος Αντώνιος, ο πιο αγαπημένος άγιος της Λισαβόνας.',
        en: 'Tradition says Saint Anthony, Lisbon’s best-loved saint, was baptised here.',
      },
    ],
    location: {
      lat: 38.70985,
      lng: -9.13298,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q432290', deltaM: 0 },
        { kind: 'osm', ref: 'relation/19372558', deltaM: 34 },
        { kind: 'wikipedia', ref: 'Lisbon Cathedral', deltaM: 16 },
      ],
      verifiedAt: '2026-09-13',
      note: 'All three sources answered and sit within 34 m of each other, which is inside one cathedral.',
      findIt: {
        el: 'Είναι πάνω στις ράγες του τραμ 28, στην ανηφόρα προς το κάστρο. Ψάξε τους δύο κοντούς πύργους και τον ρόδακα ανάμεσά τους.',
        en: 'It sits on the tram 28 rails, on the climb to the castle. Look for the two squat towers with the rose window between them.',
      },
    },
    question: {
      q: {
        el: 'Γιατί ο καθεδρικός μοιάζει με κάστρο;',
        en: 'Why does the cathedral look like a castle?',
      },
      answers: [
        { el: 'Έπρεπε και να υπερασπίζεται', en: 'It had to defend itself too' },
        { el: 'Ήταν παλάτι κάποτε', en: 'It was once a palace' },
        { el: 'Το σχέδιο ήρθε από τη Βόρεια Αφρική', en: 'The design came from North Africa' },
        { el: 'Χτίστηκε πάνω σε ρωμαϊκό οχυρό', en: 'It was built on top of a Roman fort' },
      ],
      explanation: {
        el:
          'Χτίστηκε αμέσως μετά το 1147, όταν η πόλη μόλις είχε αλλάξει χέρια. Οι χοντροί ' +
          'τοίχοι και οι δύο πύργοι ήταν για ασφάλεια, όχι για ομορφιά.',
        en:
          'It went up right after 1147, when the city had only just changed hands. The thick ' +
          'walls and the two towers were for safety, not for beauty.',
      },
    },
  },

  // --------------------------------------------------------- castelo de são jorge
  {
    id: 'lisbon-castelo-de-sao-jorge',
    cityId: 'lisbon',
    emoji: '🏰',
    category: 'landmark',
    difficulty: 1,

    name: { el: 'Κάστρο του Αγίου Γεωργίου', en: 'São Jorge Castle' },
    tagline: {
      el: 'Έντεκα πύργοι, παγώνια, και όλη η πόλη από κάτω',
      en: 'Eleven towers, peacocks, and the whole city below',
    },
    story: {
      el:
        'Οι Μαυριτανοί έχτισαν αυτά τα τείχη πριν από περίπου χίλια χρόνια, στον λόφο από ' +
        'τον οποίο μπορούσαν να βλέπουν κάθε καράβι που ανέβαινε το ποτάμι. Το 1147 ο ' +
        'Afonso Henriques με τον στρατό του πολιόρκησε το κάστρο για μήνες, ώσπου η πόλη ' +
        'παραδόθηκε και έγινε κομμάτι της Πορτογαλίας· περίπου εκατό χρόνια αργότερα έγινε ' +
        'και πρωτεύουσα. Αργότερα εδώ έμεναν ' +
        'βασιλιάδες, και το κάστρο πήρε το όνομα του Αγίου Γεωργίου, του ιππότη με τον ' +
        'δράκο. Περπάτα πάνω στα τείχη και μέτρα τους έντεκα πύργους. Πρόσεχε πού πατάς: τα ' +
        'σκαλοπάτια είναι στραβά και δεν έχουν όλα το ίδιο ύψος, γιατί χτίστηκαν για ' +
        'φρουρούς, όχι για επισκέπτες. Στους κήπους ζουν παγώνια που ανοίγουν την ουρά τους ' +
        'μπροστά στον κόσμο. Και από ψηλά βλέπεις ολόκληρη τη Λισαβόνα, το ποτάμι και τη ' +
        'μεγάλη κόκκινη γέφυρα, την Ponte 25 de Abril: είναι η καλύτερη θέα της πόλης.',
      en:
        'The Moors built these walls about a thousand years ago, on the hill from which they ' +
        'could watch every ship coming up the river. In 1147 Afonso Henriques and his army ' +
        'besieged the castle for months, until the city gave in and became part of ' +
        'Portugal; about a hundred years later it became the capital too. Later, kings ' +
        'lived here, and the castle took the name of Saint George, the ' +
        'knight with the dragon. Walk along the walls and count the eleven towers. Watch your ' +
        'feet: the steps are crooked and not all the same height, because they were built for ' +
        'guards, not for visitors. Peacocks live in the gardens and spread their tails in ' +
        'front of the crowds. And from up here you can see the whole of Lisbon, the river and ' +
        'the big red bridge, the Ponte 25 de Abril: it is the finest view in the city.',
    },
    facts: [
      {
        el: 'Τα τείχη έχουν έντεκα πύργους, και μπορείς να περπατήσεις πάνω τους.',
        en: 'The walls have eleven towers, and you can walk along the top of them.',
      },
      {
        el: 'Στον λόφο βρέθηκαν ευρήματα της Εποχής του Σιδήρου, περίπου 2.700 ετών.',
        en: 'Iron Age finds about 2,700 years old have been dug up on this hill.',
      },
      {
        el: 'Το κάστρο ήταν επί αιώνες στρατώνας και αναστηλώθηκε πολύ στη δεκαετία του 1940.',
        en: 'The castle served for centuries as a barracks and was heavily restored in the 1940s.',
      },
    ],
    location: {
      lat: 38.71389,
      lng: -9.13333,
      anchor: 'area',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q636780', deltaM: 0 },
        { kind: 'wikipedia', ref: 'São Jorge Castle', deltaM: 24 },
      ],
      verifiedAt: '2026-09-13',
      note: 'An area, not a door: the walled enclosure is roughly 300 m across. The Overpass API answered 429 during this run.',
      findIt: {
        el: 'Η μοναδική είσοδος είναι στη δυτική πλευρά, στο Largo do Chão da Feira. Όλες οι ανηφόρες της Alfama καταλήγουν εκεί.',
        en: 'The one entrance is on the west side, at Largo do Chão da Feira. Every uphill lane in Alfama ends there.',
      },
    },
    question: {
      q: {
        el: 'Γιατί χτίστηκε κάστρο ακριβώς σε αυτόν τον λόφο;',
        en: 'Why was a castle built on this particular hill?',
      },
      answers: [
        { el: 'Φαίνεται κάθε καράβι στο ποτάμι', en: 'Every ship on the river is visible' },
        { el: 'Ήταν το μόνο σημείο με πηγάδι', en: 'It was the only spot with a well' },
        { el: 'Ο βράχος του έβγαζε χρήσιμο μάρμαρο', en: 'Its rock gave up useful marble' },
        { el: 'Ήταν το πιο δροσερό μέρος το καλοκαίρι', en: 'It was the coolest place in summer' },
      ],
      explanation: {
        el:
          'Από εδώ ελέγχεις το ποτάμι. Όποιος κρατούσε τον λόφο έβλεπε κάθε πλοίο που ' +
          'πλησίαζε, πολλή ώρα πριν φτάσει.',
        en:
          'From here you control the river. Whoever held the hill saw every ship coming, long ' +
          'before it arrived.',
      },
    },
  },

  // ---------------------------------------------------- miradouro de santa luzia
  {
    id: 'lisbon-miradouro-de-santa-luzia',
    cityId: 'lisbon',
    emoji: '🌅',
    category: 'nature',
    difficulty: 1,

    name: { el: 'Μπαλκόνι της Σάντα Λουζία', en: 'The Santa Luzia terrace' },
    tagline: {
      el: 'Ένα μπαλκόνι με κληματαριά πάνω από την παλιότερη γειτονιά',
      en: 'A vine-covered balcony above the oldest neighbourhood',
    },
    story: {
      el:
        'Αυτό το μπαλκόνι κρέμεται πάνω από την Alfama, την παλαιότερη γειτονιά της ' +
        'Λισαβόνας. Το όνομά της βγαίνει από μια αραβική λέξη για τις ζεστές πηγές, γιατί ' +
        'οι Μαυριτανοί που ζούσαν εδώ βρήκαν ζεστό νερό μέσα στο έδαφος. Οι δρόμοι της ' +
        'είναι τόσο στενοί και στριφογυριστοί που δεν περνάει αυτοκίνητο, και οι γείτονες ' +
        'μιλάνε από παράθυρο σε παράθυρο. Όταν ο μεγάλος σεισμός του 1755 ισοπέδωσε το ' +
        'κέντρο, η Alfama, χτισμένη πάνω σε σκληρό βράχο, έμεινε σχεδόν όρθια· γι’ αυτό τα ' +
        'σπίτια της είναι πολύ παλαιότερα από της υπόλοιπης πόλης. Πάνω από το μπαλκόνι ' +
        'απλώνεται μια κληματαριά με μπουκαμβίλιες, και από κάτω σου κατεβαίνουν κεραμιδιά ' +
        'σκεπές μέχρι το νερό. Στους τοίχους του, γαλάζια και άσπρα πλακάκια δείχνουν την ' +
        'πλατεία του παλατιού πριν από τον σεισμό και τους στρατιώτες να σκαρφαλώνουν στα ' +
        'τείχη του κάστρου το 1147. Ψάξε τις λεπτομέρειες: καράβια, σημαίες, σκάλες.',
      en:
        'This balcony hangs above Alfama, the oldest neighbourhood in Lisbon. Its name comes ' +
        'from an Arabic word for hot springs, because the Moors who lived here found warm ' +
        'water in the ground. Its streets are so narrow and twisty that no car can pass, and ' +
        'neighbours talk from window to window. When the great earthquake of 1755 flattened ' +
        'the centre, Alfama, built on hard rock, stayed mostly standing; that is why its ' +
        'houses are much older than the rest of the city. A pergola of bougainvillea spreads ' +
        'over the terrace, and below you tiled roofs tumble all the way down to the water. On ' +
        'its walls, blue and white tiles show the palace square before the earthquake and ' +
        'soldiers climbing the castle walls in 1147. Hunt for the small details: ships, ' +
        'flags, ladders.',
    },
    facts: [
      {
        el: 'Το όνομα Alfama βγαίνει από αραβική λέξη για τις ζεστές πηγές.',
        en: 'The name Alfama comes from an Arabic word for hot springs.',
      },
      {
        el: 'Η Alfama άντεξε τον σεισμό του 1755 επειδή είναι χτισμένη πάνω σε σκληρό βράχο.',
        en: 'Alfama survived the 1755 earthquake because it is built on hard rock.',
      },
      {
        el: 'Εδώ γεννήθηκε το φάντο, το τραγούδι της Λισαβόνας, που η UNESCO κατέγραψε το 2011.',
        en: 'Fado, Lisbon’s own song, was born here, and UNESCO listed it in 2011.',
      },
    ],
    location: {
      lat: 38.71169,
      lng: -9.13021,
      anchor: 'viewpoint',
      confidence: 'C',
      sources: [{ kind: 'wikidata', ref: 'Q6837314', deltaM: 0 }],
      verifiedAt: '2026-09-13',
      note: 'One source only: the Overpass API answered 429 and the English Wikipedia has no article with coordinates for this viewpoint.',
      findIt: {
        el: 'Στη Rua do Limoeiro, στην ανηφόρα από τον καθεδρικό προς το κάστρο. Ψάξε τη λευκή κληματαριά· τα πλακάκια είναι στον πίσω τοίχο.',
        en: 'On Rua do Limoeiro, on the climb from the cathedral to the castle. Look for the white pergola; the tiles are on the back wall.',
      },
    },
    question: {
      q: {
        el: 'Γιατί τα σπίτια της Alfama είναι παλαιότερα από της υπόλοιπης πόλης;',
        en: 'Why are Alfama’s houses older than the rest of the city’s?',
      },
      answers: [
        { el: 'Ο βράχος τα κράτησε όρθια στον σεισμό', en: 'The rock held them up in the earthquake' },
        { el: 'Είναι από πολύ πιο σκληρό τούβλο', en: 'They are made of a much harder brick' },
        { el: 'Ένας νόμος απαγόρευε σε όλους να τα γκρεμίσουν', en: 'A law forbade knocking them down' },
        { el: 'Ο σεισμός σταμάτησε ακριβώς στα τείχη', en: 'The earthquake stopped right at the walls' },
      ],
      explanation: {
        el:
          'Η Alfama κάθεται πάνω σε σκληρό βράχο. Το κέντρο, χτισμένο σε πιο μαλακό έδαφος, ' +
          'έπεσε το 1755 και ξαναχτίστηκε από την αρχή.',
        en:
          'Alfama sits on hard rock. The centre, built on softer ground, came down in 1755 ' +
          'and had to be rebuilt from nothing.',
      },
    },
  },

  // ---------------------------------------------------------------- torre de belém
  {
    id: 'lisbon-torre-de-belem',
    cityId: 'lisbon',
    emoji: '🗼',
    category: 'landmark',
    difficulty: 1,

    name: { el: 'Πύργος του Μπελέμ', en: 'The Belém Tower' },
    tagline: {
      el: 'Η τελευταία εικόνα της πατρίδας για όποιον έφευγε',
      en: 'The last piece of home for anyone sailing away',
    },
    story: {
      el:
        'Πριν από πεντακόσια και πλέον χρόνια τα πορτογαλικά πλοία ξεκινούσαν από αυτό το ' +
        'ποτάμι για την Ινδία, την Αφρική και τη Βραζιλία, και ο βασιλιάς Manuel I ήθελε ' +
        'έναν γερό φύλακα στην πόρτα του λιμανιού. Έτσι χτίστηκε αυτός ο πύργος, που ' +
        'τελείωσε το 1519, με κανόνια στο κάτω πάτωμα και σκοπιές στην κορυφή. Το στιλ του ' +
        'λέγεται μανουελίνο, από το όνομα του βασιλιά: κοίτα τα σκοινιά, τους κόμπους και ' +
        'τις μικρές σφαίρες που είναι σκαλισμένες στην πέτρα, όλα θυμίζουν καράβια και ' +
        'θάλασσα. Σε μια γωνία, χαμηλά, υπάρχει σκαλισμένο ένα κεφάλι ρινόκερου. Ο πύργος ' +
        'στεκόταν κάποτε σε ένα μικρό νησί μέσα στο ποτάμι· με τα χρόνια η όχθη ήρθε πιο ' +
        'κοντά, και σήμερα τον αγγίζει. Για τους ναυτικούς που έφευγαν ήταν το τελευταίο ' +
        'κομμάτι της πατρίδας, και για όσους γύριζαν το πρώτο.',
      en:
        'More than five hundred years ago Portuguese ships set out from this river for India, ' +
        'Africa and Brazil, and King Manuel I wanted a strong guard at the door of the ' +
        'harbour. So this tower was built, finished in 1519, with cannon on the lower floor ' +
        'and watchmen at the top. Its style is called Manueline, after the king: look at the ' +
        'ropes, the knots and the little spheres carved into the stone, all of them reminders ' +
        'of ships and the sea. Low down in one corner there is a carved rhinoceros head. The ' +
        'tower once stood on a small island in the river; over the years the bank crept ' +
        'closer, and today it touches the shore. For sailors leaving, it was the last piece ' +
        'of home, and for those coming back, the first.',
    },
    facts: [
      {
        el: 'Τελείωσε το 1519, στα χρόνια του βασιλιά Manuel I.',
        en: 'It was finished in 1519, in the reign of King Manuel I.',
      },
      {
        el: 'Ο σκαλισμένος ρινόκερός του θεωρείται η πρώτη απεικόνιση ρινόκερου στην ευρωπαϊκή τέχνη μετά την αρχαιότητα.',
        en: 'Its carved rhinoceros is thought to be the first rhinoceros in European art since antiquity.',
      },
      {
        el: 'Ο πύργος στεκόταν σε νησάκι μέσα στο ποτάμι· η όχθη τον πλησίασε με τα χρόνια.',
        en: 'The tower stood on a little island in the river; the bank moved up to it over the years.',
      },
    ],
    location: {
      lat: 38.69139,
      lng: -9.21583,
      anchor: 'centroid',
      confidence: 'C',
      sources: [
        { kind: 'wikidata', ref: 'Q215003', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Belém Tower', deltaM: 39 },
      ],
      verifiedAt: '2026-09-13',
      note: 'Graded C: Wikipedia sits 39 m away, just outside the 30 m agreement window, and the Overpass API answered 429, so nothing broke the tie. Both points are on the tower and its bastion.',
      findIt: {
        el: 'Περνάς τη γραμμή του τρένου με μια πεζογέφυρα και μετά μια μικρή ξύλινη γέφυρα μέχρι την πόρτα. Η ουρά είναι στην όχθη.',
        en: 'You cross the railway on a footbridge, then a short wooden bridge to the door. The queue forms on the bank.',
      },
    },
    question: {
      q: {
        el: 'Γιατί υπάρχει σκαλισμένος ρινόκερος πάνω στον πύργο;',
        en: 'Why is there a rhinoceros carved on the tower?',
      },
      answers: [
        { el: 'Είχε φτάσει ένας αληθινός από την Ινδία', en: 'A real one had just arrived from India' },
        { el: 'Ήταν το οικόσημο της οικογένειας του βασιλιά', en: 'It was the coat of arms of the king’s family' },
        { el: 'Οι ναυτικοί τον θεωρούσαν σημάδι καλής τύχης', en: 'Sailors thought it was a sign of good luck' },
        { el: 'Ο γλύπτης τον αντέγραψε από βιβλίο', en: 'The sculptor copied it from a book' },
      ],
      explanation: {
        el:
          'Το 1515 έφτασε στη Λισαβόνα ένας ζωντανός ρινόκερος από την Ινδία. Η πόλη ' +
          'ενθουσιάστηκε, και το ζώο κατέληξε σκαλισμένο στην πέτρα.',
        en:
          'In 1515 a living rhinoceros arrived in Lisbon from India. The city was amazed, and ' +
          'the animal ended up carved into the stone.',
      },
    },
  },

  // ------------------------------------------------------ padrão dos descobrimentos
  {
    id: 'lisbon-padrao-dos-descobrimentos',
    cityId: 'lisbon',
    emoji: '⛵',
    category: 'history',
    difficulty: 3,

    name: { el: 'Μνημείο των Ανακαλύψεων', en: 'The Monument of the Discoveries' },
    tagline: {
      el: 'Μια πέτρινη πλώρη γεμάτη ανθρώπους που έφυγαν',
      en: 'A stone ship’s bow crowded with people who sailed',
    },
    story: {
      el:
        'Φαντάσου μια εποχή που κανείς στην Ευρώπη δεν ήξερε τι υπάρχει πέρα από τον ωκεανό. ' +
        'Ένας Πορτογάλος πρίγκιπας, ο Ερρίκος ο Θαλασσοπόρος, αποφάσισε να μάθει. Μάζεψε ' +
        'χαρτογράφους, ναυπηγούς και ναυτικούς και έστελνε καράβι μετά το καράβι κατά μήκος ' +
        'των ακτών της Αφρικής, και κάθε ένα γύριζε με καινούργια γνώση. Αυτό το μνημείο ' +
        'έχει σχήμα πλώρης καραβέλας. Ο Ερρίκος στέκεται μπροστά κρατώντας ένα μικρό πλοίο, ' +
        'και πίσω του ακολουθούν ο Vasco da Gama, που έφτασε στην Ινδία, ο Μαγγελάνος, που ' +
        'η αποστολή του γύρισε τη Γη, και ο Pedro Álvares Cabral, που αποβιβάστηκε στη ' +
        'Βραζιλία. Τα ίδια ταξίδια όμως έκαναν και κάτι άλλο: κατέκτησαν τόπους και ' +
        'μετέφεραν ανθρώπους σκλάβους. Και τα δύο είναι αλήθεια για τα ίδια πλοία, και η ' +
        'Πορτογαλία ακόμα συζητάει πώς πρέπει να τα θυμάται.',
      en:
        'Imagine a time when nobody in Europe knew what lay beyond the ocean. A Portuguese ' +
        'prince, Henry the Navigator, decided to find out. He gathered mapmakers, shipwrights ' +
        'and sailors and sent ship after ship down the coast of Africa, and each one came ' +
        'back with new knowledge. This monument is shaped like the bow of a caravel. Henry ' +
        'stands at the front holding a small ship, and behind him come Vasco da Gama, who ' +
        'reached India, Magellan, whose expedition went round the world, and Pedro Álvares ' +
        'Cabral, who landed in Brazil. But the same voyages did something else as well: they ' +
        'took over other people’s lands and carried enslaved people across the sea. Both ' +
        'things are true of the same ships, and Portugal is still arguing about how it ought ' +
        'to remember them.',
    },
    facts: [
      {
        el: 'Χτίστηκε το 1960, πεντακόσια χρόνια μετά τον θάνατο του Ερρίκου του Θαλασσοπόρου.',
        en: 'It was built in 1960, five hundred years after Henry the Navigator died.',
      },
      {
        el: 'Στήθηκε πρώτα το 1940 ως προσωρινό κατασκεύασμα για μια έκθεση και ξαναχτίστηκε είκοσι χρόνια αργότερα.',
        en: 'It first went up in 1940 as a temporary structure for an exhibition and was rebuilt twenty years later.',
      },
      {
        el: 'Ο τεράστιος ανεμολόγιος με τον παγκόσμιο χάρτη στο πεζοδρόμιο ήταν δώρο από τη Νότια Αφρική το 1960.',
        en: 'The huge compass rose with the world map on the pavement was a gift from South Africa in 1960.',
      },
    ],
    location: {
      lat: 38.69368,
      lng: -9.20569,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q1133712', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Monument of the Discoveries', deltaM: 9 },
      ],
      verifiedAt: '2026-09-13',
      note: 'The Overpass API answered 429 during this run, so there is no OSM cross-check.',
      findIt: {
        el: 'Στην προκυμαία, δίπλα στο νερό. Στάσου πρώτα στον χάρτη του πεζοδρομίου και βρες την Πορτογαλία, μετά μπες μέσα για το ασανσέρ.',
        en: 'On the waterfront, right by the river. Stand on the pavement map and find Portugal first, then go in for the lift.',
      },
    },
    question: {
      q: {
        el: 'Τι σχήμα έχει το μνημείο;',
        en: 'What shape is the monument?',
      },
      answers: [
        { el: 'Πλώρη καραβιού', en: 'The bow of a ship' },
        { el: 'Ανοιχτό βιβλίο', en: 'An open book' },
        { el: 'Πύργος με μεγάλο φάρο', en: 'A tower with a large light' },
        { el: 'Πέτρινο κύμα', en: 'A wave of stone' },
      ],
      explanation: {
        el:
          'Είναι η πλώρη μιας καραβέλας, του πλοίου με το οποίο ταξίδεψαν οι Πορτογάλοι. Οι ' +
          'φιγούρες στέκονται σαν πλήρωμα έτοιμο να φύγει.',
        en:
          'It is the bow of a caravel, the ship the Portuguese sailed in. The figures stand ' +
          'like a crew about to leave.',
      },
    },
  },

  // ------------------------------------------------------- mosteiro dos jerónimos
  {
    id: 'lisbon-mosteiro-dos-jeronimos',
    cityId: 'lisbon',
    emoji: '🏛️',
    category: 'landmark',
    difficulty: 2,

    name: { el: 'Μοναστήρι των Ιερωνυμιτών', en: 'The Jerónimos Monastery' },
    tagline: {
      el: 'Πληρώθηκε με φόρο πάνω στο πιπέρι και την κανέλα',
      en: 'Paid for with a tax on pepper and cinnamon',
    },
    story: {
      el:
        'Όταν τα πλοία του Vasco da Gama γύρισαν από την Ινδία το 1499 φορτωμένα πιπέρι και ' +
        'κανέλα, ο βασιλιάς Manuel I έγινε πλούσιος: όλη η Ευρώπη ήθελε μπαχαρικά. Ο ' +
        'βασιλιάς αποφάσισε να ξοδέψει ένα μέρος από αυτά τα λεφτά σε ένα μοναστήρι τόσο ' +
        'μεγαλόπρεπο που να μην το ξεχάσει κανείς. Οι χτίστες δούλεψαν περίπου εκατό ' +
        'χρόνια, σκαλίζοντας στην πέτρα σκοινιά, κοχύλια, κοράλλια και θαλάσσια τέρατα, στο ' +
        'μανουελίνο στιλ. Μπες στον κλοιστρό, το τετράγωνο αίθριο με τις καμάρες, και κοίτα ' +
        'ψηλά: κάθε κολόνα είναι σκαλισμένη διαφορετικά από τη διπλανή της. Ο ίδιος ο Vasco ' +
        'da Gama είναι θαμμένος μέσα, κοντά στην είσοδο, σε τάφο που τον σηκώνουν πέτρινα ' +
        'λιοντάρια. Λένε ότι πριν φύγει για την Ινδία πέρασε τη νύχτα προσευχόμενος σε ένα ' +
        'μικρό παρεκκλήσι ακριβώς εδώ. Το μοναστήρι άντεξε τον σεισμό του 1755 σχεδόν ' +
        'ανέγγιχτο.',
      en:
        'When Vasco da Gama’s ships came back from India in 1499 loaded with pepper and ' +
        'cinnamon, King Manuel I became rich: all of Europe wanted spices. The king decided ' +
        'to spend part of that money on a monastery so grand that nobody would forget it. ' +
        'The builders worked for about a hundred years, carving ropes, seashells, corals and ' +
        'sea monsters into the stone in the Manueline style. Step into the cloister, the ' +
        'square courtyard of arches, and look up: every column is carved differently from ' +
        'the one beside it. Vasco da Gama himself is buried inside, near the entrance, in a ' +
        'tomb held up by stone lions. They say that before leaving for India he spent the ' +
        'night praying in a small chapel on this very spot. The monastery came through the ' +
        '1755 earthquake almost untouched.',
    },
    facts: [
      {
        el: 'Πληρώθηκε με πραγματικό φόρο: το ένα εικοστό των κερδών από το εμπόριο των μπαχαρικών.',
        en: 'It was paid for by a real tax: one twentieth of the profits of the spice trade.',
      },
      {
        el: 'Το χτίσιμο κράτησε περίπου έναν αιώνα.',
        en: 'Building it took about a hundred years.',
      },
      {
        el: 'Ο Vasco da Gama είναι θαμμένος μέσα, σε τάφο που τον κρατούν πέτρινα λιοντάρια.',
        en: 'Vasco da Gama is buried inside, in a tomb carried by stone lions.',
      },
    ],
    location: {
      lat: 38.69785,
      lng: -9.2056,
      anchor: 'area',
      confidence: 'C',
      sources: [
        { kind: 'wikidata', ref: 'Q272781', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Jerónimos Monastery', deltaM: 45 },
      ],
      verifiedAt: '2026-09-13',
      note: 'The monastery building, not the World Heritage listing that pairs it with the Belém Tower a kilometre away. An area: the façade alone is about 300 m long. The Overpass API answered 429 during this run.',
      findIt: {
        el: 'Η εκκλησία και ο κλοιστρός έχουν δύο διαφορετικές πόρτες. Η ουρά για τον κλοιστρό είναι δεξιά, κάτω από τη μεγάλη νότια πύλη.',
        en: 'The church and the cloister have two different doors. The cloister queue is to the right, past the big south doorway.',
      },
    },
    question: {
      q: {
        el: 'Από πού ήρθαν τα λεφτά για να χτιστεί;',
        en: 'Where did the money to build it come from?',
      },
      answers: [
        { el: 'Από φόρο στα μπαχαρικά', en: 'From a tax on spices' },
        { el: 'Από δωρεές των κατοίκων της πόλης', en: 'From donations by the people of the city' },
        { el: 'Από θησαυρό που βρέθηκε στο έδαφος', en: 'From treasure that was found in the ground' },
        { el: 'Από τα ενοίκια των γύρω χωραφιών', en: 'From the rents of the fields around it' },
      ],
      explanation: {
        el:
          'Ένα εικοστό των κερδών από το εμπόριο των μπαχαρικών πήγαινε στο χτίσιμο. Το ' +
          'μοναστήρι είναι φτιαγμένο κυριολεκτικά από πιπέρι και κανέλα.',
        en:
          'One twentieth of the profits of the spice trade went into the building. The ' +
          'monastery is quite literally made of pepper and cinnamon.',
      },
    },
  },

  // ----------------------------------------------------------- museu de marinha
  {
    id: 'lisbon-museu-de-marinha',
    cityId: 'lisbon',
    emoji: '⚓',
    category: 'museum',
    difficulty: 2,

    name: { el: 'Ναυτικό Μουσείο', en: 'The Maritime Museum' },
    tagline: {
      el: 'Στη δυτική πτέρυγα του μοναστηριού, γεμάτη πλοία',
      en: 'In the monastery’s west wing, and full of ships',
    },
    story: {
      el:
        'Το μοναστήρι είναι τόσο μεγάλο που στη δυτική του πτέρυγα χωράει ολόκληρο μουσείο. ' +
        'Είναι το Ναυτικό Μουσείο, και μαζεύει τα εργαλεία με τα οποία οι Πορτογάλοι ' +
        'έμαθαν τον δρόμο πάνω σε νερό που δεν έχει σημάδια. Θα δεις μπρούντζινους ' +
        'αστρολάβους που μετρούσαν το ύψος του ήλιου, χάρτες που άφηναν κενές τις ακτές που ' +
        'κανείς δεν είχε δει ακόμα, και δεκάδες μοντέλα πλοίων, από τη μικρή καραβέλα μέχρι ' +
        'τα τεράστια σκαριά που μετέφεραν μπαχαρικά. Σε ένα υπόστεγο δίπλα κοιμούνται οι ' +
        'βασιλικές λέμβοι, βαμμένες χρυσές, με θέσεις για δεκάδες κωπηλάτες. Και στο ίδιο ' +
        'υπόστεγο, εκεί που δεν το περιμένεις, στέκεται ένα αεροπλάνο. Το μουσείο δεν λέει ' +
        'μόνο πώς ήταν τα πλοία. Λέει πώς οι άνθρωποι κατάλαβαν πού βρίσκονταν, όταν γύρω ' +
        'τους δεν υπήρχε τίποτα άλλο από θάλασσα και ουρανός.',
      en:
        'The monastery is so big that an entire museum fits into its west wing. This is the ' +
        'Maritime Museum, and it collects the tools with which the Portuguese learned to ' +
        'find their way across water that has no signposts. You will see brass astrolabes ' +
        'that measured the height of the sun, charts that left coastlines blank where nobody ' +
        'had been yet, and dozens of ship models, from the small caravel to the huge hulls ' +
        'that carried spices. In a shed alongside, the royal barges sleep, painted gold, ' +
        'with benches for dozens of oarsmen. And in that same shed, where you least expect ' +
        'it, stands an aeroplane. The museum is not only about what ships looked like. It is ' +
        'about how people worked out where they were, when there was nothing around them but ' +
        'sea and sky.',
    },
    facts: [
      {
        el: 'Στεγάζεται στη δυτική πτέρυγα του μοναστηριού των Ιερωνυμιτών.',
        en: 'It is housed in the west wing of the Jerónimos monastery.',
      },
      {
        el: 'Στη συλλογή του υπάρχουν αντίγραφα των padrões, των στηλών που οι Πορτογάλοι έστηναν σε κάθε νέα ακτή.',
        en: 'Its collection holds copies of the padrões, the pillars the Portuguese set up on each new coast.',
      },
      {
        el: 'Φυλάει το υδροπλάνο Santa Cruz, που το 1922 ολοκλήρωσε την πρώτη αεροπορική διάσχιση του Νότιου Ατλαντικού.',
        en: 'It keeps the seaplane Santa Cruz, which in 1922 completed the first air crossing of the South Atlantic.',
      },
    ],
    location: {
      lat: 38.6971,
      lng: -9.20814,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q1540177', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Navy Museum (Portugal)', deltaM: 0 },
      ],
      verifiedAt: '2026-09-13',
      note: 'Its own point, 236 m west of the monastery’s: the same building, a different door, and well clear of the 25 m separation rule. The Overpass API answered 429 during this run.',
      findIt: {
        el: 'Δεν μπαίνεις από την εκκλησία. Συνέχισε δυτικά μέχρι το τέλος της πρόσοψης, εκεί που το κτίριο έχει καμάρες και μια πλατεία μπροστά.',
        en: 'You do not go in through the church. Keep walking west to the end of the façade, where the building has arches and a square in front.',
      },
    },
    question: {
      q: {
        el: 'Τι έκανε ο ναυτικός αστρολάβος;',
        en: 'What did a mariner’s astrolabe do?',
      },
      answers: [
        { el: 'Μετρούσε το ύψος του ήλιου', en: 'It measured the height of the sun' },
        { el: 'Έδειχνε πάντα τον Βορρά', en: 'It always pointed north' },
        { el: 'Μετρούσε το βάθος κάτω από το πλοίο', en: 'It measured the depth under the ship' },
        { el: 'Υπολόγιζε πόσο γρήγορα πήγαινε το πλοίο', en: 'It worked out how fast the ship was going' },
      ],
      explanation: {
        el:
          'Μετρώντας πόσο ψηλά είναι ο ήλιος το μεσημέρι, ένας ναυτικός υπολόγιζε πόσο ' +
          'βόρεια ή νότια βρισκόταν. Το πυξίδα έδειχνε τη διεύθυνση, ο αστρολάβος τη θέση.',
        en:
          'By measuring how high the sun stood at noon, a sailor could work out how far north ' +
          'or south he was. The compass gave direction; the astrolabe gave position.',
      },
    },

    museum: {
      doorNote: {
        el: 'Το υπόστεγο με τις λέμβους και το αεροπλάνο είναι σε χωριστό κτίριο. Μη φύγεις χωρίς να το δεις.',
        en: 'The shed with the barges and the aeroplane is a separate building. Do not leave without it.',
      },
      rooms: [
        {
          id: 'lisbon-museu-de-marinha-charts',
          emoji: '🧭',
          name: { el: 'Χάρτες και αστέρια', en: 'Charts and stars' },
          intro: {
            el:
              'Πριν από τους δορυφόρους, το μόνο πράγμα που ήξερε πάντα πού βρίσκεται ήταν ο ' +
              'ουρανός. Αυτή η αίθουσα μαζεύει τα εργαλεία με τα οποία οι ναυτικοί ρωτούσαν ' +
              'τον ήλιο και τα άστρα πού είναι, και τα μικρά πλοία που έφτιαχναν οι ίδιοι για ' +
              'να καταλάβουν πώς δουλεύει ένα μεγάλο.',
            en:
              'Before satellites, the only thing that always knew where it was was the sky. ' +
              'This room gathers the instruments with which sailors asked the sun and the ' +
              'stars where they were, and the little ships they built themselves in order to ' +
              'understand how a big one works.',
          },
          exhibits: [
            {
              id: 'lisbon-museu-de-marinha-astrolabio',
              name: { el: 'Ο ναυτικός αστρολάβος', en: 'The mariner’s astrolabe' },
              blurb: {
                el:
                  'Ένας βαρύς μπρούντζινος δίσκος με μια κινητή βελόνα στη μέση. Ο ναυτικός τον ' +
                  'κρεμούσε από το δάχτυλό του για να κρέμεται ίσια, γύριζε τη βελόνα μέχρι να ' +
                  'περάσει από μέσα της μια ακτίνα ήλιου, και διάβαζε τη γωνία στον κύκλο. Είναι ' +
                  'χοντρός και τρύπιος επίτηδες: ο αέρας περνάει από τις τρύπες και δεν τον ' +
                  'κουνάει, και το βάρος τον κρατάει σταθερό σε κατάστρωμα που ανεβοκατεβαίνει. ' +
                  'Ένα εργαλείο σχεδιασμένο για να δουλεύει ενώ όλα τριγύρω κουνιούνται.',
                en:
                  'A heavy brass disc with a moving pointer at its centre. A sailor hung it from ' +
                  'one finger so that it dangled straight, turned the pointer until a beam of ' +
                  'sunlight came through it, and read the angle off the circle. It is thick and ' +
                  'full of holes on purpose: wind blows through the holes instead of pushing it, ' +
                  'and the weight keeps it steady on a deck that will not stop moving. A tool ' +
                  'designed to work while everything around it is swaying.',
              },
              question: {
                q: {
                  el: 'Γιατί έχει τρύπες ο αστρολάβος;',
                  en: 'Why is the astrolabe full of holes?',
                },
                answers: [
                  { el: 'Για να περνάει από μέσα ο αέρας', en: 'So the wind can blow through' },
                  { el: 'Για λιγότερο μπρούντζο', en: 'So less brass was needed' },
                  { el: 'Για να τον κρεμάνε σε πολλά σημεία', en: 'So it could be hung from many points' },
                  { el: 'Για να μπαίνει το φως των άστρων', en: 'So the light of the stars gets in' },
                ],
                explanation: {
                  el:
                    'Ένας γεμάτος δίσκος θα λειτουργούσε σαν πανί και θα στριφογύριζε. Οι τρύπες ' +
                    'αφήνουν τον αέρα να περάσει, και το όργανο μένει ακίνητο.',
                  en:
                    'A solid disc would act like a sail and spin. The holes let the wind pass ' +
                    'through, and the instrument stays still.',
                },
              },
            },
            {
              id: 'lisbon-museu-de-marinha-esfera-armilar',
              name: { el: 'Η αρμίλλια σφαίρα', en: 'The armillary sphere' },
              blurb: {
                el:
                  'Μια μπάλα φτιαγμένη μόνο από κρίκους, με μια μικρή Γη στο κέντρο. Κάθε κρίκος ' +
                  'είναι ένας κύκλος του ουρανού: ο ισημερινός, οι τροπικοί, η διαδρομή που ' +
                  'φαίνεται να κάνει ο ήλιος μέσα στον χρόνο. Δεν είναι διακοσμητικό. Είναι ' +
                  'μοντέλο, το γυρνούσες με το χέρι για να δεις πού θα βρισκόταν ο ήλιος σε μια ' +
                  'ορισμένη μέρα. Ο βασιλιάς Manuel I το έκανε προσωπικό του σύμβολο, και σήμερα ' +
                  'μια αρμίλλια σφαίρα στέκεται στη μέση της πορτογαλικής σημαίας.',
                en:
                  'A ball made of nothing but rings, with a small Earth at its centre. Each ring ' +
                  'is a circle of the sky: the equator, the tropics, the path the sun seems to ' +
                  'take through the year. It is not an ornament. It is a model, turned by hand to ' +
                  'see where the sun would stand on a given day. King Manuel I made it his ' +
                  'personal badge, and an armillary sphere still stands in the middle of the ' +
                  'Portuguese flag today.',
              },
              question: {
                q: {
                  el: 'Πού αλλού θα δεις σήμερα αρμίλλια σφαίρα;',
                  en: 'Where else can you see an armillary sphere today?',
                },
                answers: [
                  { el: 'Στη σημαία της Πορτογαλίας', en: 'On the flag of Portugal' },
                  { el: 'Στα κέρματα του ενός λεπτού', en: 'On the one-cent coins' },
                  { el: 'Στα χαρτονομίσματα του ευρώ', en: 'On the euro banknotes' },
                  { el: 'Στα διαβατήρια της Ισπανίας', en: 'On the passports of Spain' },
                ],
                explanation: {
                  el:
                    'Η σφαίρα ήταν το σύμβολο του Manuel I και πέρασε στη σημαία. Μια χώρα που ' +
                    'βάζει επιστημονικό όργανο στη σημαία της λέει κάτι για τον εαυτό της.',
                  en:
                    'The sphere was Manuel I’s badge and it passed onto the flag. A country that ' +
                    'puts a scientific instrument on its flag is saying something about itself.',
                },
              },
            },
            {
              id: 'lisbon-museu-de-marinha-padrao',
              name: { el: 'Ο πέτρινος padrão', en: 'The stone padrão' },
              blurb: {
                el:
                  'Μια κολόνα από πορτογαλικό ασβεστόλιθο με σταυρό στην κορυφή και σκαλισμένα ' +
                  'γράμματα στο σώμα της. Τα πλοία την κουβαλούσαν στο αμπάρι σαν έρμα και την ' +
                  'έστηναν σε κάθε ακτή που έβλεπαν πρώτη φορά, γράφοντας πάνω της τη χρονιά και ' +
                  'το όνομα του βασιλιά. Ήταν υπογραφή σε πέτρα, ορατή από τη θάλασσα. Για τους ' +
                  'ανθρώπους που ζούσαν ήδη σε εκείνες τις ακτές δεν άλλαζε τίποτα εκείνη τη ' +
                  'μέρα, αλλά για την Ευρώπη ο τόπος τους έμπαινε ξαφνικά στους χάρτες. Αυτή ' +
                  'εδώ είναι αντίγραφο: οι κολόνες που ταξίδεψαν στ’ αλήθεια κατέληξαν μακριά ' +
                  'από τη Λισαβόνα, σε μακρινές ακτές και σε άλλα μουσεία.',
                en:
                  'A pillar of Portuguese limestone with a cross on top and letters cut into its ' +
                  'body. Ships carried one in the hold as ballast and planted it on every coast ' +
                  'they saw for the first time, writing on it the year and the king’s name. It ' +
                  'was a signature in stone, visible from the sea. For the people already living ' +
                  'on those coasts nothing changed that day, but for Europe their land had ' +
                  'suddenly appeared on the maps. The pillar in this room is a copy: the ones ' +
                  'that really sailed ended up far from Lisbon, on distant coasts and in other ' +
                  'museums.',
              },
              question: {
                q: {
                  el: 'Γιατί τα πλοία κουβαλούσαν τέτοιες κολόνες;',
                  en: 'Why did the ships carry pillars like this?',
                },
                answers: [
                  { el: 'Για να σημαδεύουν νέες ακτές', en: 'To mark coasts they had just found' },
                  { el: 'Για να τις πουλάνε στα λιμάνια', en: 'To sell them at the harbours' },
                  { el: 'Για να στηρίζουν το κατάρτι', en: 'To hold up the mast' },
                  { el: 'Για να μετράνε το βάθος του νερού', en: 'To measure the depth of the water' },
                ],
                explanation: {
                  el:
                    'Ήταν σήμα ότι «περάσαμε από εδώ», με χρονιά και όνομα βασιλιά. Στο ταξίδι ' +
                    'χρησίμευαν και ως έρμα, γιατί ζύγιζαν πολύ.',
                  en:
                    'They were a sign saying “we came this far”, with a year and a king’s name. On ' +
                    'the voyage they doubled as ballast, because they were so heavy.',
                },
              },
            },
            {
              id: 'lisbon-museu-de-marinha-caravela',
              name: { el: 'Το μοντέλο της καραβέλας', en: 'The model caravel' },
              blurb: {
                el:
                  'Μικρή, ελαφριά και με τριγωνικά πανιά: αυτό ήταν το μυστικό της καραβέλας. Τα ' +
                  'τετράγωνα πανιά σπρώχνουν καλά όταν ο αέρας έρχεται από πίσω, όμως τα ' +
                  'τριγωνικά επιτρέπουν στο πλοίο να προχωρήσει και όταν ο αέρας έρχεται πλάγια. ' +
                  'Αυτό ήταν κρίσιμο: μπορούσες να πας νότια κατά μήκος της Αφρικής και μετά να ' +
                  'γυρίσεις σπίτι. Η καραβέλα ήταν επίσης ρηχή, οπότε έμπαινε σε ποτάμια και ' +
                  'κόλπους όπου ένα μεγάλο σκαρί θα κόλλαγε στον πάτο.',
                en:
                  'Small, light and rigged with triangular sails: that was the caravel’s secret. ' +
                  'Square sails push well when the wind comes from behind, but triangular ones ' +
                  'let a ship keep going when the wind comes from the side. That mattered ' +
                  'enormously: you could sail south along Africa and still get home again. The ' +
                  'caravel also sat shallow in the water, so it could enter rivers and bays where ' +
                  'a big hull would have stuck fast on the bottom.',
              },
              question: {
                q: {
                  el: 'Τι επέτρεπαν τα τριγωνικά πανιά;',
                  en: 'What did the triangular sails allow?',
                },
                answers: [
                  { el: 'Να πλέεις και με πλάγιο αέρα', en: 'Sailing with the wind from the side' },
                  { el: 'Να ταξιδεύεις χωρίς πλήρωμα', en: 'Travelling with no crew' },
                  { el: 'Να κουβαλάς πολύ βαρύτερο φορτίο', en: 'Carrying a much heavier cargo' },
                  { el: 'Να μένεις ακίνητος μέσα στη φουρτούνα', en: 'Staying still in the middle of a storm' },
                ],
                explanation: {
                  el:
                    'Με τετράγωνο πανί πηγαίνεις εκεί που σε πάει ο αέρας. Με τριγωνικό μπορείς να ' +
                    'πλαγιοδρομήσεις, άρα και να γυρίσεις πίσω.',
                  en:
                    'With a square sail you go where the wind takes you. With a triangular one you ' +
                    'can cut across the wind, which means you can come back.',
                },
              },
            },
          ],
        },
        {
          id: 'lisbon-museu-de-marinha-figureheads',
          emoji: '🗿',
          name: { el: 'Ακρόπρωρα και καμπίνες', en: 'Figureheads and cabins' },
          intro: {
            el:
              'Όταν ένα πλοίο διαλύεται, κάποια κομμάτια του σώζονται επειδή κανείς δεν άντεχε ' +
              'να τα πετάξει. Σε αυτή την αίθουσα στέκονται τα πρόσωπα που κάποτε έσκιζαν τα ' +
              'κύματα στην πλώρη, και ένα ολόκληρο δωμάτιο ξηλωμένο από ένα βασιλικό πλοίο και ' +
              'ξαναστημένο εδώ μέσα, με τα έπιπλά του στη θέση τους.',
            en:
              'When a ship is broken up, some pieces of it survive because nobody could bear to ' +
              'throw them away. In this room stand the faces that once cut through the waves at ' +
              'the bow, and a whole room lifted out of a royal ship and rebuilt in here, with ' +
              'its furniture where it belongs.',
          },
          exhibits: [
            {
              id: 'lisbon-museu-de-marinha-figuras-de-proa',
              name: { el: 'Τα ακρόπρωρα', en: 'The figureheads' },
              blurb: {
                el:
                  'Ξύλινες φιγούρες, ψηλότερες από άνθρωπο, που κάποτε ήταν καρφωμένες στην ' +
                  'πλώρη. Άλλες είναι γυναίκες με μαλλιά που ανεμίζουν, άλλες λιοντάρια, άλλες ' +
                  'στρατιώτες. Δεν ήταν μόνο στολίδι: πολλά πληρώματα δεν ήξεραν γράμματα, και ' +
                  'το ακρόπρωρο ήταν ο τρόπος να αναγνωρίσεις το πλοίο από μακριά και να θυμηθείς ' +
                  'το όνομά του. Πρόσεξε τα μάτια τους: είναι σκαλισμένα να κοιτούν λίγο προς τα ' +
                  'πάνω, γιατί όποιος τα έβλεπε στέκονταν στην αποβάθρα, χαμηλότερα από αυτά.',
                en:
                  'Wooden figures, taller than a person, that were once fixed to a ship’s bow. ' +
                  'Some are women with streaming hair, some are lions, some are soldiers. They ' +
                  'were not only decoration: many crews could not read, and the figurehead was ' +
                  'how you recognised a ship from far off and remembered its name. Look at their ' +
                  'eyes: they are carved looking slightly upwards, because whoever saw them was ' +
                  'standing on the quay, lower down than they were.',
              },
              question: {
                q: {
                  el: 'Γιατί τα ακρόπρωρα κοιτούν ελαφρώς προς τα πάνω;',
                  en: 'Why do the figureheads look slightly upwards?',
                },
                answers: [
                  { el: 'Ο κόσμος τα έβλεπε από χαμηλά', en: 'People saw them from down below' },
                  { el: 'Για να μη βρέχονται τα μάτια τους', en: 'To keep their eyes out of the spray' },
                  { el: 'Έτσι έδειχναν προς τα άστρα', en: 'That way they pointed at the stars' },
                  { el: 'Το ξύλο έσπαγε λιγότερο έτσι', en: 'The wood cracked less that way' },
                ],
                explanation: {
                  el:
                    'Ο γλύπτης σκεφτόταν πού θα στέκεται ο θεατής. Από την αποβάθρα κοιτάς ψηλά, ' +
                    'οπότε το βλέμμα σκαλίζεται ανάλογα.',
                  en:
                    'The carver thought about where the viewer would stand. From the quay you look ' +
                    'up, so the gaze was carved to meet you.',
                },
              },
            },
            {
              id: 'lisbon-museu-de-marinha-camarote',
              name: { el: 'Η καμπίνα του Amélia', en: 'The cabin from the Amélia' },
              blurb: {
                el:
                  'Ένα ολόκληρο δωμάτιο από το βασιλικό θαλαμηγό Amélia, ξηλωμένο και στημένο ' +
                  'ξανά μέσα στο μουσείο: ξύλινοι τοίχοι, κρεβάτι, γραφείο, καθρέφτης. Το πρώτο ' +
                  'που παρατηρείς είναι πόσο μικρό είναι, ακόμα και για βασιλιά. Το δεύτερο είναι ' +
                  'ότι τα έπιπλα δεν κουνιούνται: στα πλοία βιδώνονται στο πάτωμα, γιατί ' +
                  'διαφορετικά ένα τραπέζι μπορεί να διασχίσει το δωμάτιο μέσα σε μια φουρτούνα. ' +
                  'Ακόμα και το κρεβάτι έχει χείλος, για να μη γλιστράει έξω αυτός που κοιμάται.',
                en:
                  'A whole room from the royal yacht Amélia, taken out and rebuilt inside the ' +
                  'museum: wooden walls, bed, desk, mirror. The first thing you notice is how ' +
                  'small it is, even for a king. The second is that the furniture does not move: ' +
                  'on a ship it is screwed to the floor, because otherwise a table can cross the ' +
                  'room in a storm. Even the bed has a raised edge, so that the sleeper does not ' +
                  'slide out of it.',
              },
              question: {
                q: {
                  el: 'Γιατί τα έπιπλα ενός πλοίου βιδώνονται στο πάτωμα;',
                  en: 'Why is a ship’s furniture screwed to the floor?',
                },
                answers: [
                  { el: 'Για να μην τα πετάξει η φουρτούνα', en: 'So a storm cannot throw them about' },
                  { el: 'Για να μην τα κλέψουν στο λιμάνι', en: 'So nobody steals them in port' },
                  { el: 'Για να ζυγίζει σωστά το πλοίο', en: 'So the ship weighs correctly' },
                  { el: 'Για να χωράνε περισσότεροι επιβάτες', en: 'So more passengers can fit in' },
                ],
                explanation: {
                  el:
                    'Στη θάλασσα το πάτωμα γέρνει. Ό,τι δεν είναι στερεωμένο ταξιδεύει μόνο του, ' +
                    'και ένα βαρύ τραπέζι γίνεται επικίνδυνο.',
                  en:
                    'At sea the floor tilts. Anything not fastened down travels by itself, and a ' +
                    'heavy table becomes dangerous.',
                },
              },
            },
            {
              id: 'lisbon-museu-de-marinha-modelos',
              name: { el: 'Οι νάους και τα γαλιόνια', en: 'The carracks and galleons' },
              blurb: {
                el:
                  'Δεκάδες μοντέλα σε γυάλινες προθήκες, φτιαγμένα με την ίδια προσοχή που ' +
                  'φτιάχνονταν τα αληθινά. Βάλε δίπλα δίπλα μια καραβέλα και μια nau, το μεγάλο ' +
                  'φορτηγό πλοίο των μπαχαρικών, και η διαφορά είναι ξεκάθαρη: η nau είναι ' +
                  'πλατιά, ψηλή και αργή, φτιαγμένη να χωράει φορτίο, όχι να τρέχει. Στο ταξίδι ' +
                  'προς την Ινδία και πίσω, ένα τέτοιο πλοίο έλειπε από το σπίτι για έναν ' +
                  'ολόκληρο χρόνο ή και περισσότερο.',
                en:
                  'Dozens of models in glass cases, built with the same care the real ones were. ' +
                  'Put a caravel next to a nau, the great cargo ship of the spice run, and the ' +
                  'difference is obvious: the nau is wide, tall and slow, made to hold cargo ' +
                  'rather than to go fast. On the voyage out to India and back, a ship like that ' +
                  'was away from home for a whole year, and often longer.',
              },
              question: {
                q: {
                  el: 'Γιατί η nau ήταν πλατιά και αργή;',
                  en: 'Why was the nau wide and slow?',
                },
                answers: [
                  { el: 'Ήταν φτιαγμένη για πολύ φορτίο', en: 'It was built to carry much cargo' },
                  { el: 'Το ξύλο της ήταν πολύ φθηνότερο', en: 'Its timber was a great deal cheaper' },
                  { el: 'Έπρεπε να χωράει στα ποτάμια', en: 'It had to fit inside the rivers' },
                  { el: 'Ο βασιλιάς είχε απαγορεύσει την ταχύτητα', en: 'The king had forbidden ships to go fast' },
                ],
                explanation: {
                  el:
                    'Το ζητούμενο ήταν πόσα μπαχαρικά χωράνε, όχι πόσο γρήγορα φτάνεις. Χώρος ' +
                    'σημαίνει πλάτος, και πλάτος σημαίνει αργό πλοίο.',
                  en:
                    'What mattered was how much pepper fitted in, not how fast you arrived. Room ' +
                    'means width, and width means a slow ship.',
                },
              },
            },
          ],
        },
        {
          id: 'lisbon-museu-de-marinha-shed',
          emoji: '🛶',
          name: { el: 'Το υπόστεγο των λέμβων', en: 'The barge shed' },
          intro: {
            el:
              'Βγες από το κυρίως κτίριο και μπες σε ένα τεράστιο υπόστεγο με ψηλή σκεπή. Εδώ ' +
              'δεν υπάρχουν προθήκες, γιατί τίποτα εδώ μέσα δεν χωράει σε προθήκη: χρυσωμένες ' +
              'βασιλικές λέμβοι στη σειρά, και ένα αεροπλάνο που πέρασε τον Ατλαντικό ' +
              'πετώντας πάνω από νερό.',
            en:
              'Walk out of the main building into an enormous shed with a high roof. There are ' +
              'no glass cases here, because nothing in here would fit in one: gilded royal ' +
              'barges in a row, and an aeroplane that crossed the Atlantic flying over open ' +
              'water.',
          },
          exhibits: [
            {
              id: 'lisbon-museu-de-marinha-bergantim-real',
              name: { el: 'Το Βασιλικό Μπριγαντίνι', en: 'The Royal Brigantine' },
              blurb: {
                el:
                  'Χρυσωμένη από την πλώρη ως την πρύμνη, με μια σκεπαστή καμπίνα στη μέση και ' +
                  'θέσεις για δεκάδες κωπηλάτες, αυτό το σκάφος φτιάχτηκε το 1780 για έναν ' +
                  'βασιλικό γάμο. Δεν είναι πλοίο ανοιχτής θάλασσας· είναι για το ποτάμι, για ' +
                  'παρελάσεις μπροστά σε κόσμο που στέκεται στις όχθες. Το εντυπωσιακό είναι ' +
                  'ότι λειτουργεί ακόμα: το 1957 μπήκε στο νερό και μετέφερε τη βασίλισσα ' +
                  'Ελισάβετ Β΄ πάνω στον Τάγο, εκατόν εβδομήντα επτά χρόνια μετά το πρώτο της ταξίδι.',
                en:
                  'Gilded from bow to stern, with a covered cabin amidships and benches for ' +
                  'dozens of oarsmen, this vessel was built in 1780 for a royal wedding. It is not ' +
                  'a seagoing ship; it is for the river, for processions in front of crowds ' +
                  'standing on the banks. The remarkable thing is that it still works: in 1957 it ' +
                  'went back on the water and carried Queen Elizabeth II along the Tagus, a ' +
                  'hundred and seventy-seven years after its first outing.',
              },
              question: {
                q: {
                  el: 'Πού ταξίδευε αυτό το σκάφος;',
                  en: 'Where did this vessel travel?',
                },
                answers: [
                  { el: 'Στο ποτάμι, σε παρελάσεις', en: 'On the river, in processions' },
                  { el: 'Στον Ατλαντικό, προς τη Βραζιλία', en: 'On the Atlantic, towards Brazil' },
                  { el: 'Στα κανάλια της Ολλανδίας', en: 'Along the canals of Holland' },
                  { el: 'Στη Μεσόγειο, με φορτίο', en: 'Across the Mediterranean, with cargo' },
                ],
                explanation: {
                  el:
                    'Είναι σκάφος επίδειξης για ήρεμα νερά. Ο Τάγος στη Λισαβόνα είναι τόσο ' +
                    'φαρδύς που μια τέτοια πομπή φαινόταν από όλη την πόλη.',
                  en:
                    'It is a show boat for calm water. The Tagus at Lisbon is so wide that a ' +
                    'procession like that could be seen from the whole city.',
                },
              },
            },
            {
              id: 'lisbon-museu-de-marinha-galeotas',
              name: { el: 'Οι βασιλικές γαλεότες', en: 'The royal galiots' },
              blurb: {
                el:
                  'Δίπλα στο μεγάλο μπριγαντίνι κάθονται μικρότερα σκάφη με κουπιά, οι γαλεότες ' +
                  'της αυλής. Κοίτα πόσο κοντά είναι τα παγκάκια: οι κωπηλάτες κάθονταν κολλητά, ' +
                  'σε σειρές, και έπρεπε να τραβάνε όλοι μαζί στον ίδιο χρόνο, αλλιώς τα κουπιά ' +
                  'χτυπούσαν μεταξύ τους. Κάποιος κρατούσε τον ρυθμό δυνατά, σαν μετρονόμος. Ένα ' +
                  'σκάφος σαν αυτό δεν κινείται με δύναμη αλλά με συντονισμό: τριάντα άνθρωποι ' +
                  'που κάνουν την ίδια κίνηση την ίδια στιγμή.',
                en:
                  'Beside the great brigantine sit smaller oared boats, the court galiots. Look at ' +
                  'how close the benches are: the rowers sat packed in rows and had to pull ' +
                  'together on the same beat, or the oars would clash. Somebody called that beat ' +
                  'out loud, like a metronome. A boat like this moves not by strength but by ' +
                  'timing: thirty people making the same movement at the same instant.',
              },
              question: {
                q: {
                  el: 'Τι χρειάζεται πιο πολύ ένα σκάφος με τριάντα κουπιά;',
                  en: 'What does a boat with thirty oars need most?',
                },
                answers: [
                  { el: 'Όλοι να τραβάνε την ίδια στιγμή', en: 'Everyone pulling at the same time' },
                  { el: 'Τους πιο δυνατούς άντρες της πόλης', en: 'The strongest men in the whole city' },
                  { el: 'Ένα βαθύ και ήσυχο κανάλι', en: 'A deep and quiet channel' },
                  { el: 'Κουπιά από τρία διαφορετικά ξύλα', en: 'Oars made of three different woods' },
                ],
                explanation: {
                  el:
                    'Αν ένας τραβήξει νωρίτερα, τα κουπιά μπλέκονται. Ο συντονισμός μετράει ' +
                    'περισσότερο από τη δύναμη του καθενός.',
                  en:
                    'If one rower pulls early, the oars tangle. Timing counts for more than any ' +
                    'single person’s strength.',
                },
              },
            },
            {
              id: 'lisbon-museu-de-marinha-santa-cruz',
              name: { el: 'Το υδροπλάνο Santa Cruz', en: 'The Santa Cruz seaplane' },
              blurb: {
                el:
                  'Ένα αεροπλάνο με πλωτήρες αντί για ρόδες, σε ένα ναυτικό μουσείο, και έχει ' +
                  'κάθε λόγο να είναι εκεί. Το 1922 δύο Πορτογάλοι, ο Gago Coutinho και ο ' +
                  'Sacadura Cabral, πέταξαν από τη Λισαβόνα ως το Ρίο ντε Τζανέιρο, την πρώτη ' +
                  'φορά που κάποιος διέσχισε τον Νότιο Ατλαντικό από αέρα. Χάλασαν δύο ' +
                  'αεροπλάνα στη διαδρομή. Το Santa Cruz ήταν το τρίτο και το μόνο που έφτασε. ' +
                  'Πάνω από ωκεανό δεν υπάρχουν σημάδια, οπότε βρήκαν τον δρόμο με τον ήλιο, ' +
                  'όπως οι ναυτικοί τριακόσια χρόνια πριν.',
                en:
                  'An aeroplane on floats instead of wheels, in a maritime museum, and it has ' +
                  'every reason to be there. In 1922 two Portuguese airmen, Gago Coutinho and ' +
                  'Sacadura Cabral, flew from Lisbon to Rio de Janeiro, the first time anyone had ' +
                  'crossed the South Atlantic by air. They wrecked two aircraft on the way. The ' +
                  'Santa Cruz was the third, and the only one that arrived. Over the ocean there ' +
                  'are no signposts, so they found their way by the sun, as sailors had done ' +
                  'three hundred years before.',
              },
              question: {
                q: {
                  el: 'Πώς έβρισκαν τον δρόμο πάνω από τον ωκεανό;',
                  en: 'How did they find their way over the ocean?',
                },
                answers: [
                  { el: 'Με τον ήλιο, όπως και οι ναυτικοί', en: 'By the sun, the way the sailors did' },
                  { el: 'Ακολουθώντας τα πλοία από κάτω τους', en: 'By following the ships underneath them' },
                  { el: 'Με ραδιοφωνικά σήματα από τη στεριά', en: 'By radio signals sent out from the land' },
                  { el: 'Πετώντας πάντα κοντά στην ακτή', en: 'By flying close to the coast' },
                ],
                explanation: {
                  el:
                    'Ο Gago Coutinho είχε φτιάξει ειδικό σεξτάντα για αεροπλάνο. Μετρούσε τον ήλιο ' +
                    'από τον αέρα και υπολόγιζε τη θέση τους.',
                  en:
                    'Gago Coutinho had built a sextant made for an aircraft. He measured the sun ' +
                    'from the air and worked out where they were.',
                },
              },
            },
            {
              id: 'lisbon-museu-de-marinha-sextante',
              name: { el: 'Ο σεξτάντας του Gago Coutinho', en: 'Gago Coutinho’s sextant' },
              blurb: {
                el:
                  'Ένας κανονικός σεξτάντας χρειάζεται τον ορίζοντα: κοιτάς πού ακουμπάει η ' +
                  'θάλασσα τον ουρανό και μετράς από εκεί. Σε ένα αεροπλάνο, μέσα σε σύννεφα ή ' +
                  'στο σκοτάδι, ο ορίζοντας μπορεί να μη φαίνεται καθόλου. Ο Gago Coutinho ' +
                  'πρόσθεσε στο όργανό του μια φυσαλίδα μέσα σε υγρό, σαν αυτή του αλφαδιού: όσο ' +
                  'η φυσαλίδα είναι στο κέντρο, ξέρεις πού είναι το ίσιο. Ένας ορίζοντας που τον ' +
                  'κουβαλάς μαζί σου. Χωρίς αυτόν, η διάσχιση του 1922 δεν θα ήταν δυνατή.',
                en:
                  'An ordinary sextant needs the horizon: you look at where the sea meets the sky ' +
                  'and measure from there. In an aeroplane, inside cloud or in the dark, the ' +
                  'horizon may not be visible at all. Gago Coutinho added a bubble in liquid to ' +
                  'his instrument, like the one in a spirit level: as long as the bubble sits in ' +
                  'the centre, you know which way is flat. A horizon you carry with you. Without ' +
                  'it, the 1922 crossing could not have been made.',
              },
              question: {
                q: {
                  el: 'Τι πρόσθεσε ο Gago Coutinho στον σεξτάντα;',
                  en: 'What did Gago Coutinho add to the sextant?',
                },
                answers: [
                  { el: 'Μια φυσαλίδα σαν του αλφαδιού', en: 'A bubble like a spirit level’s' },
                  { el: 'Έναν ηλεκτρικό κινητήρα', en: 'An electric motor of his own' },
                  { el: 'Δύο επιπλέον καθρέφτες στο πλάι', en: 'Two extra mirrors along the side' },
                  { el: 'Έναν χάρτη τυπωμένο στη βάση του', en: 'A map printed across its base' },
                ],
                explanation: {
                  el:
                    'Η φυσαλίδα δείχνει το επίπεδο όταν ο ορίζοντας δεν φαίνεται. Έτσι το όργανο ' +
                    'της θάλασσας δούλεψε στον αέρα.',
                  en:
                    'The bubble shows what is level when no horizon is in sight. That is how an ' +
                    'instrument of the sea came to work in the air.',
                },
              },
            },
          ],
        },
      ],
      riddles: [
        {
          id: 'lisbon-museu-de-marinha-riddle-1',
          difficulty: 1,
          prompt: {
            el:
              'Είμαι μπάλα φτιαγμένη μόνο από κρίκους, με μια μικρή Γη κρυμμένη στη μέση μου. ' +
              'Ένας βασιλιάς με έκανε σήμα του, και σήμερα με βλέπεις κάθε μέρα σε ένα ύφασμα ' +
              'που ανεμίζει.',
            en:
              'I am a ball made only of rings, with a small Earth hidden in the middle of me. A ' +
              'king made me his badge, and today you see me every day on a piece of cloth that ' +
              'flaps in the wind.',
          },
          hint: {
            el: 'Κοίτα μια πορτογαλική σημαία.',
            en: 'Go and look at a Portuguese flag.',
          },
          answerExhibitId: 'lisbon-museu-de-marinha-esfera-armilar',
        },
        {
          id: 'lisbon-museu-de-marinha-riddle-2',
          difficulty: 2,
          prompt: {
            el:
              'Έχω φτερά, κι ας είναι αυτό μουσείο για πλοία. Ξεκινήσαμε τρία μαζί· τα δύο ' +
              'αδέρφια μου χάλασαν στη διαδρομή, κι εγώ ήμουν το μόνο που έφτασε ως την άλλη ' +
              'μεριά.',
            en:
              'I have wings, though this is a museum of ships. Three of us set out together; ' +
              'two of my brothers broke on the way across, and I was the only one that reached ' +
              'the far side.',
          },
          hint: {
            el: 'Αντί για ρόδες έχω πλωτήρες.',
            en: 'Instead of wheels I have floats.',
          },
          answerExhibitId: 'lisbon-museu-de-marinha-santa-cruz',
        },
        {
          id: 'lisbon-museu-de-marinha-riddle-3',
          difficulty: 3,
          prompt: {
            el:
              'Είμαι αντίγραφο ενός πράγματος που ταξίδεψε στο αμπάρι σαν σκέτο βάρος και ' +
              'μετά το έστησαν όρθιο σε μια παραλία που κανένα πορτογαλικό πλοίο δεν είχε ' +
              'ξαναδεί. Πάνω μου είναι χαραγμένη μια χρονιά και ένα όνομα βασιλιά.',
            en:
              'I am a copy of something that travelled in a hold as plain dead weight and was ' +
              'then stood up on a beach no Portuguese ship had ever seen. Cut into me are a ' +
              'year and the name of a king.',
          },
          hint: {
            el: 'Έχω σταυρό στην κορυφή μου.',
            en: 'I have a cross on the top of me.',
          },
          answerExhibitId: 'lisbon-museu-de-marinha-padrao',
        },
      ],
    },
  },

  // ------------------------------------------------------ museu nacional do azulejo
  {
    id: 'lisbon-museu-nacional-do-azulejo',
    cityId: 'lisbon',
    emoji: '🟦',
    category: 'museum',
    difficulty: 3,

    name: { el: 'Εθνικό Μουσείο του Πλακιδίου', en: 'The National Tile Museum' },
    tagline: {
      el: 'Ένα μοναστήρι γεμάτο τοίχους που διηγούνται ιστορίες',
      en: 'A convent full of walls that tell stories',
    },
    story: {
      el:
        'Στην Πορτογαλία τα πλακάκια δεν είναι μόνο για μπάνια. Λέγονται azulejos, ' +
        'σκεπάζουν προσόψεις σπιτιών, σκάλες, εκκλησίες και σταθμούς του μετρό, και συχνά ' +
        'διηγούνται ολόκληρες ιστορίες με εικόνες, σαν κόμικ σε τοίχο. Το μουσείο τους ' +
        'βρίσκεται μέσα σε ένα μοναστήρι που ίδρυσε το 1509 η βασίλισσα Leonor, και αυτό ' +
        'είναι μέρος της εμπειρίας: περπατάς σε αίθρια και εκκλησίες όπου τα εκθέματα είναι ' +
        'στη θέση για την οποία φτιάχτηκαν. Θα δεις τα πρώτα πλακάκια με ανάγλυφες γραμμές ' +
        'που κρατούσαν τα χρώματα χωριστά, γαλάζιους και άσπρους πίνακες που αντιγράφουν ' +
        'ολλανδική μόδα, και έναν τοίχο είκοσι τριών μέτρων που δείχνει τη Λισαβόνα όπως ' +
        'ήταν πριν από τον σεισμό. Είναι το πιο κοντινό πράγμα σε φωτογραφία μιας πόλης που ' +
        'δεν υπάρχει πια. Και επειδή τα πλακάκια ψήνονται, τα χρώματά τους δεν ξεθωριάζουν ' +
        'όπως της μπογιάς: αυτό που βλέπεις είναι σχεδόν ακριβώς ό,τι είδε και ο τεχνίτης ' +
        'όταν άνοιξε τον φούρνο πριν από τριακόσια χρόνια.',
      en:
        'In Portugal, tiles are not just for bathrooms. They are called azulejos, they cover ' +
        'the fronts of houses, staircases, churches and metro stations, and they often tell ' +
        'whole stories in pictures, like a comic strip on a wall. Their museum sits inside a ' +
        'convent founded in 1509 by Queen Leonor, and that is part of the point: you walk ' +
        'through cloisters and a church where the exhibits are in the place they were made ' +
        'for. You will see the earliest tiles, with raised ridges to keep the colours apart, ' +
        'blue and white panels copying a Dutch fashion, and a wall twenty-three metres long ' +
        'showing Lisbon as it was before the earthquake. It is the closest thing there is to ' +
        'a photograph of a city that no longer exists. And because tiles are fired, their ' +
        'colours do not fade the way paint does: what you see is almost exactly what the ' +
        'craftsman saw when he opened the kiln three hundred years ago.',
    },
    facts: [
      {
        el: 'Στεγάζεται στο μοναστήρι Madre de Deus, που ίδρυσε το 1509 η βασίλισσα Leonor.',
        en: 'It is housed in the Madre de Deus convent, founded in 1509 by Queen Leonor.',
      },
      {
        el: 'Ο μεγάλος πίνακας της Λισαβόνας έχει μήκος περίπου 23 μέτρα και δείχνει την πόλη πριν από τον σεισμό.',
        en: 'Its great panel of Lisbon is about 23 metres long and shows the city before the earthquake.',
      },
      {
        el: 'Η λέξη azulejo δεν έρχεται από το «azul», το γαλάζιο, αλλά από αραβική λέξη για τη γυαλισμένη πετρούλα.',
        en: 'The word azulejo does not come from “azul”, blue, but from an Arabic word for a polished little stone.',
      },
    ],
    location: {
      lat: 38.7244,
      lng: -9.11389,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q2313815', deltaM: 0 },
        { kind: 'wikipedia', ref: 'National Museum of the Azulejo', deltaM: 5 },
      ],
      verifiedAt: '2026-09-13',
      note: 'The museum item, not the Igreja da Madre de Deus, which is the church inside the same convent and has its own Wikidata item. The Overpass API answered 504 during this run.',
      findIt: {
        el: 'Είναι μακριά από το κέντρο, στη Rua da Madre de Deus. Η πρόσοψη είναι απλή και άσπρη: μοιάζει με εκκλησία, όχι με μουσείο.',
        en: 'It is well out of the centre, on Rua da Madre de Deus. The front is plain and white: it looks like a church, not a museum.',
      },
    },
    question: {
      q: {
        el: 'Από πού βγαίνει η λέξη azulejo;',
        en: 'Where does the word azulejo come from?',
      },
      answers: [
        { el: 'Από αραβική λέξη για γυαλισμένη πέτρα', en: 'From an Arabic word for a polished stone' },
        { el: 'Από τη λέξη azul, που σημαίνει απλώς γαλάζιο', en: 'From the word azul, which means blue' },
        { el: 'Από το όνομα του πρώτου εργαστηρίου', en: 'From the name of the first workshop' },
        { el: 'Από ολλανδική λέξη για το ψημένο χώμα', en: 'From a Dutch word for baked earth' },
      ],
      explanation: {
        el:
          'Μοιάζει με το «azul», αλλά είναι σύμπτωση. Η λέξη ήρθε από τα αραβικά και ' +
          'σήμαινε μικρή γυαλισμένη πέτρα, πολύ πριν τα πλακάκια γίνουν γαλάζια.',
        en:
          'It looks like “azul”, but that is a coincidence. The word came from Arabic and ' +
          'meant a small polished stone, long before tiles turned blue.',
      },
    },

    museum: {
      doorNote: {
        el: 'Ο μεγάλος πίνακας της Λισαβόνας είναι στον επάνω όροφο. Άφησέ τον τελευταίο, θέλει χρόνο.',
        en: 'The great panel of Lisbon is upstairs. Leave it for last; it needs time.',
      },
      rooms: [
        {
          id: 'lisbon-museu-nacional-do-azulejo-first-tiles',
          emoji: '🧱',
          name: { el: 'Τα πρώτα πλακάκια', en: 'The first tiles' },
          intro: {
            el:
              'Στην αρχή τα πλακάκια δεν είχαν ζωγραφιές, είχαν σχέδια, και το μεγάλο ' +
              'πρόβλημα ήταν πρακτικό: μέσα στον φούρνο τα χρώματα λιώνουν και τρέχουν το ένα ' +
              'μέσα στο άλλο. Αυτή η αίθουσα δείχνει τους τρόπους που βρήκαν οι τεχνίτες για ' +
              'να κρατήσουν κάθε χρώμα εκεί που το ήθελαν.',
            en:
              'At first tiles carried patterns rather than pictures, and the big problem was a ' +
              'practical one: inside the kiln the colours melt and run into each other. This ' +
              'room shows the tricks the craftsmen invented to keep every colour where they ' +
              'wanted it.',
          },
          exhibits: [
            {
              id: 'lisbon-museu-nacional-do-azulejo-aresta',
              name: { el: 'Το πλακάκι με τις ραχούλες', en: 'The ridged tile' },
              blurb: {
                el:
                  'Πέρασε το δάχτυλό σου πάνω από ένα πλακάκι του 16ου αιώνα και θα νιώσεις ότι ' +
                  'δεν είναι επίπεδο. Το πηλό τον πίεζαν σε καλούπι που άφηνε λεπτές ανασηκωμένες ' +
                  'γραμμές, μικρά τοιχάκια. Μέσα σε κάθε χωράφι που έφτιαχναν αυτά τα τοιχάκια ' +
                  'έβαζαν ένα χρώμα. Στον φούρνο τα χρώματα έλιωναν, αλλά δεν μπορούσαν να ' +
                  'δραπετεύσουν, γιατί η ραχούλα τα κρατούσε. Το σχέδιο βγαίνει καθαρό επειδή ο ' +
                  'τεχνίτης έλυσε ένα πρόβλημα φυσικής, όχι επειδή ζωγράφιζε προσεκτικά.',
                en:
                  'Run a finger over a sixteenth-century tile and you will feel that it is not ' +
                  'flat. The clay was pressed in a mould that left thin raised lines, tiny walls. ' +
                  'Inside each little field those walls made, one colour was poured. In the kiln ' +
                  'the colours melted, but they could not escape, because the ridge held them ' +
                  'in. The pattern comes out crisp because the craftsman solved a problem of ' +
                  'physics, not because he painted carefully.',
              },
              question: {
                q: {
                  el: 'Τι δουλειά κάνουν οι ανασηκωμένες γραμμές;',
                  en: 'What job do the raised lines do?',
                },
                answers: [
                  { el: 'Εμποδίζουν τα χρώματα να ανακατευτούν', en: 'They stop the colours running together' },
                  { el: 'Κάνουν το πλακάκι πιο ελαφρύ', en: 'They make the tile lighter to carry' },
                  { el: 'Δείχνουν πού να μπει το καρφί', en: 'They show where the nail should go' },
                  { el: 'Κρατάνε το πλακάκι στον τοίχο', en: 'They keep the tile stuck to the wall' },
                ],
                explanation: {
                  el:
                    'Στη φωτιά το χρώμα γίνεται υγρό. Χωρίς τοιχάκι θα έτρεχε στο διπλανό ' +
                    'χωράφι και το σχέδιο θα θόλωνε.',
                  en:
                    'In the fire the colour turns liquid. Without a wall it would run into the ' +
                    'next field and blur the pattern.',
                },
              },
            },
            {
              id: 'lisbon-museu-nacional-do-azulejo-nossa-senhora',
              name: { el: 'Το πλακιδωτό εικονοστάσι', en: 'The tile altarpiece' },
              blurb: {
                el:
                  'Ένα ολόκληρο εικονοστάσι από πλακάκια, ύψους πολλών μέτρων, φτιαγμένο στα ' +
                  'τέλη του 16ου αιώνα. Είναι η στιγμή που τα πλακάκια σταματούν να είναι σχέδιο ' +
                  'και γίνονται πίνακας: πρόσωπα, ρούχα, χέρια, ζωγραφισμένα πάνω σε εκατοντάδες ' +
                  'κομμάτια που πρέπει να ταιριάξουν μεταξύ τους μετά το ψήσιμο. Και εδώ κρύβεται ' +
                  'η δυσκολία, γιατί ο πηλός στον φούρνο μαζεύει λίγο. Αν ένα πλακάκι μαζέψει ' +
                  'διαφορετικά από το διπλανό του, το πρόσωπο βγαίνει στραβό.',
                en:
                  'A whole altarpiece made of tiles, several metres high, produced at the end of ' +
                  'the sixteenth century. This is the moment when tiles stop being pattern and ' +
                  'become painting: faces, clothes, hands, painted across hundreds of pieces that ' +
                  'have to line up with one another after firing. And that is where the ' +
                  'difficulty hides, because clay shrinks a little in the kiln. If one tile ' +
                  'shrinks differently from its neighbour, the face comes out crooked.',
              },
              question: {
                q: {
                  el: 'Γιατί είναι δύσκολο να ζωγραφίσεις πρόσωπο σε πολλά πλακάκια;',
                  en: 'Why is a face across many tiles hard to paint?',
                },
                answers: [
                  { el: 'Ο πηλός μαζεύει μέσα στον φούρνο', en: 'The clay shrinks inside the kiln' },
                  { el: 'Τα χρώματα κοστίζουν πάρα πολύ ακριβά', en: 'The colours cost a very great deal of money' },
                  { el: 'Ο ζωγράφος δουλεύει πάντα στο σκοτάδι', en: 'The painter always has to work in the dark' },
                  { el: 'Τα πλακάκια δεν κολλάνε', en: 'The tiles will not stick' },
                ],
                explanation: {
                  el:
                    'Κάθε πλακάκι μικραίνει λίγο στη φωτιά, και όχι όλα το ίδιο. Οι γραμμές του ' +
                    'σχεδίου πρέπει να ξανασυναντηθούν μετά το ψήσιμο.',
                  en:
                    'Every tile gets a little smaller in the fire, and not all by the same amount. ' +
                    'The lines of the drawing have to meet again afterwards.',
                },
              },
            },
            {
              id: 'lisbon-museu-nacional-do-azulejo-tapete',
              name: { el: 'Ο τοίχος-χαλί', en: 'The carpet wall' },
              blurb: {
                el:
                  'Τον 17ο αιώνα οι Πορτογάλοι έστρωναν τους τοίχους με πλακάκια που ' +
                  'επαναλαμβάνονται, σαν χαλί όρθιο. Το κόλπο είναι ότι το σχέδιο δεν σταματάει ' +
                  'στο περίγραμμα του πλακιδίου: συνεχίζεται στο επόμενο, οπότε από μακριά δεν ' +
                  'βλέπεις πλακάκια, βλέπεις ύφασμα. Υπήρχε και πρακτικός λόγος. Η κεραμική ' +
                  'επιφάνεια κρατάει το σπίτι δροσερό το καλοκαίρι, πλένεται με νερό, και δεν ' +
                  'την πειράζει η υγρασία που έρχεται από τον Ατλαντικό.',
                en:
                  'In the seventeenth century the Portuguese covered walls with tiles that repeat, ' +
                  'like a carpet stood on end. The trick is that the pattern does not stop at the ' +
                  'edge of a tile: it carries on into the next one, so from across the room you ' +
                  'do not see tiles, you see cloth. There was a practical reason too. A ceramic ' +
                  'surface keeps a house cool in summer, washes down with water, and does not ' +
                  'mind the damp that comes in off the Atlantic.',
              },
              question: {
                q: {
                  el: 'Γιατί από μακριά δεν ξεχωρίζεις τα πλακάκια;',
                  en: 'Why can you not pick out the tiles from a distance?',
                },
                answers: [
                  { el: 'Το σχέδιο περνάει από το ένα στο άλλο', en: 'The pattern runs from one tile into the next' },
                  { el: 'Είναι κολλημένα χωρίς αρμούς', en: 'They are laid with no joints at all' },
                  { el: 'Τα βάφουν ξανά αφού μπουν στον τοίχο', en: 'They are painted again once they are on the wall' },
                  { el: 'Είναι πολύ μεγαλύτερα από τα σημερινά', en: 'They are much bigger than the tiles of today' },
                ],
                explanation: {
                  el:
                    'Το μοτίβο είναι σχεδιασμένο να συνεχίζεται πέρα από την άκρη. Το μάτι ' +
                    'ακολουθεί το σχέδιο και προσπερνάει τους αρμούς.',
                  en:
                    'The motif is designed to carry on past the edge. The eye follows the pattern ' +
                    'and skips over the joints.',
                },
              },
            },
          ],
        },
        {
          id: 'lisbon-museu-nacional-do-azulejo-before-the-earthquake',
          emoji: '🏙️',
          name: { el: 'Η Λισαβόνα πριν από τον σεισμό', en: 'Lisbon before the earthquake' },
          intro: {
            el:
              'Δεν υπήρχαν φωτογραφικές μηχανές το 1755. Ό,τι ξέρουμε για την όψη της πόλης ' +
              'πριν από εκείνο το πρωί το ξέρουμε από ζωγραφιές, και η μεγαλύτερη από όλες ' +
              'είναι εδώ, φτιαγμένη από πλακάκια. Αυτή η αίθουσα είναι το πιο κοντινό που ' +
              'μπορείς να φτάσεις σε μια χαμένη πόλη.',
            en:
              'There were no cameras in 1755. Everything we know about how the city looked ' +
              'before that morning we know from pictures, and the largest of them all is here, ' +
              'made of tiles. This room is as close as you can get to walking into a city that ' +
              'is gone.',
          },
          exhibits: [
            {
              id: 'lisbon-museu-nacional-do-azulejo-grande-panorama',
              name: { el: 'Το μεγάλο πανόραμα', en: 'The great panorama' },
              blurb: {
                el:
                  'Είκοσι τρία μέτρα τοίχου, φτιαγμένα γύρω στο 1700, που δείχνουν ολόκληρη τη ' +
                  'Λισαβόνα από το ποτάμι, σπίτι το σπίτι. Περπάτα αργά κατά μήκος του και βρες ' +
                  'το κάστρο ψηλά, τον καθεδρικό, τα καράβια στον Τάγο και το βασιλικό παλάτι ' +
                  'δίπλα στο νερό — το παλάτι που ο σεισμός θα ισοπέδωνε περίπου πενήντα χρόνια ' +
                  'αργότερα. Ήταν διακόσμηση όταν φτιάχτηκε. Έγινε ντοκουμέντο κατά λάθος, την ' +
                  'ημέρα που η πόλη που εικονίζει έπαψε να υπάρχει.',
                en:
                  'Twenty-three metres of wall, made around 1700, showing the whole of Lisbon ' +
                  'from the river, house by house. Walk slowly along it and find the castle up on ' +
                  'its hill, the cathedral, the ships on the Tagus and the royal palace beside ' +
                  'the water — the palace the earthquake would flatten about fifty years later. It was ' +
                  'decoration when it was made. It became a document by accident, on the day the ' +
                  'city it shows stopped existing.',
              },
              question: {
                q: {
                  el: 'Γιατί αυτός ο τοίχος είναι τόσο σημαντικός;',
                  en: 'Why does this wall matter so much?',
                },
                answers: [
                  { el: 'Δείχνει την πόλη που χάθηκε το 1755', en: 'It shows the city that was lost in 1755' },
                  { el: 'Είναι το παλαιότερο πλακάκι της Ευρώπης', en: 'It is the oldest tile in Europe' },
                  { el: 'Το ζωγράφισε ο ίδιος ο βασιλιάς Manuel', en: 'It was painted by King Manuel with his own hand' },
                  { el: 'Είναι το μόνο που άντεξε στη φωτιά', en: 'It is the only one that came through the fire' },
                ],
                explanation: {
                  el:
                    'Φτιάχτηκε περίπου πενήντα χρόνια πριν από τον σεισμό. Είναι σχεδόν το μόνο ' +
                    'λεπτομερές πορτρέτο μιας πόλης που δεν υπάρχει πια.',
                  en:
                    'It was made about fifty years before the earthquake. It is almost the only detailed ' +
                    'portrait of a city that no longer exists.',
                },
              },
            },
            {
              id: 'lisbon-museu-nacional-do-azulejo-blue-white',
              name: { el: 'Οι γαλάζιοι πίνακες', en: 'The blue and white panels' },
              blurb: {
                el:
                  'Τον 18ο αιώνα η Πορτογαλία τρελάθηκε με το γαλάζιο πάνω στο άσπρο, μια μόδα ' +
                  'που ήρθε από την Ολλανδία και πριν από εκείνη από την Κίνα. Υπήρχε και ' +
                  'πρακτικός λόγος: το μπλε του κοβαλτίου είναι από τα λίγα χρώματα που αντέχουν ' +
                  'την πολύ ψηλή θερμοκρασία του φούρνου χωρίς να αλλοιωθούν. Τα εργαστήρια ' +
                  'έφτιαχναν τεράστιους πίνακες με κυνήγια, γιορτές και ιστορίες, και τους ' +
                  'πουλούσαν σε παλάτια, μοναστήρια και σπίτια εμπόρων.',
                en:
                  'In the eighteenth century Portugal fell in love with blue on white, a fashion ' +
                  'that came from Holland and, before that, from China. There was a practical ' +
                  'reason too: cobalt blue is one of the few colours that survive the very high ' +
                  'heat of the kiln without changing. Workshops turned out enormous panels of ' +
                  'hunts, feasts and stories, and sold them to palaces, monasteries and ' +
                  'merchants’ houses.',
              },
              question: {
                q: {
                  el: 'Γιατί το μπλε ήταν τόσο βολικό χρώμα;',
                  en: 'Why was blue such a convenient colour?',
                },
                answers: [
                  { el: 'Αντέχει τη μεγάλη ζέστη του φούρνου', en: 'It survives the great heat of the kiln' },
                  { el: 'Ήταν το φθηνότερο χρώμα της αγοράς', en: 'It was the cheapest colour on the market' },
                  { el: 'Στέγνωνε πολύ πιο γρήγορα από τα άλλα', en: 'It dried a great deal faster than the others' },
                  { el: 'Το προτιμούσε ο βασιλιάς από όλα τα άλλα', en: 'The king preferred it above all the others' },
                ],
                explanation: {
                  el:
                    'Πολλά χρωστικά καίγονται και αλλάζουν στη φωτιά. Το κοβάλτιο βγαίνει από τον ' +
                    'φούρνο σχεδόν όπως μπήκε.',
                  en:
                    'Many pigments burn and change in the fire. Cobalt comes out of the kiln almost ' +
                    'exactly as it went in.',
                },
              },
            },
            {
              id: 'lisbon-museu-nacional-do-azulejo-factory',
              name: { el: 'Το πλακάκι της φάμπρικας', en: 'The factory tile' },
              blurb: {
                el:
                  'Τον 19ο αιώνα το πλακάκι σταματάει να φτιάχνεται ένα ένα. Οι φάμπρικες το ' +
                  'πιέζουν σε μηχανή, με ανάγλυφο σχέδιο και γυαλιστερό χρώμα, και το βγάζουν σε ' +
                  'χιλιάδες πανομοιότυπα κομμάτια. Ξαφνικά δεν είναι πολυτέλεια για παλάτια: ' +
                  'είναι κάτι που μπορεί να αγοράσει μια οικογένεια για να ντύσει την πρόσοψη του ' +
                  'σπιτιού της. Γι’ αυτό ολόκληροι δρόμοι της Λισαβόνας γυαλίζουν όταν βρέχει. ' +
                  'Το ίδιο πράγμα, φτιαγμένο πιο φθηνά, άλλαξε την όψη μιας ολόκληρης πόλης.',
                en:
                  'In the nineteenth century the tile stopped being made one at a time. Factories ' +
                  'pressed it out by machine, with a raised pattern and a shiny glaze, in ' +
                  'thousands of identical pieces. Suddenly it was not a luxury for palaces: it ' +
                  'was something an ordinary family could buy to dress the front of their house. ' +
                  'That is why whole streets in Lisbon gleam when it rains. The same object, made ' +
                  'more cheaply, changed the look of an entire city.',
              },
              question: {
                q: {
                  el: 'Τι άλλαξε όταν τα πλακάκια άρχισαν να βγαίνουν από μηχανή;',
                  en: 'What changed once tiles came out of a machine?',
                },
                answers: [
                  { el: 'Μπόρεσαν να τα αγοράσουν και τα απλά σπίτια', en: 'Ordinary houses could afford them too' },
                  { el: 'Έγιναν πολύ πιο βαριά από πριν', en: 'They became far heavier than before' },
                  { el: 'Σταμάτησαν εντελώς να τα βάζουν σε εκκλησίες', en: 'They stopped being put in churches' },
                  { el: 'Χάθηκε εντελώς το γαλάζιο χρώμα', en: 'The colour blue disappeared completely' },
                ],
                explanation: {
                  el:
                    'Η μηχανή έριξε την τιμή. Το πλακάκι βγήκε από τα παλάτια και ανέβηκε στις ' +
                    'προσόψεις κανονικών σπιτιών.',
                  en:
                    'The machine brought the price down. The tile left the palaces and climbed onto ' +
                    'the fronts of ordinary houses.',
                },
              },
            },
          ],
        },
        {
          id: 'lisbon-museu-nacional-do-azulejo-convent',
          emoji: '⛲',
          name: { el: 'Το μοναστήρι γύρω σου', en: 'The convent around you' },
          intro: {
            el:
              'Σε κάποια μουσεία το κτίριο είναι απλώς ένα κουτί που κρατάει τα εκθέματα. ' +
              'Εδώ το κτίριο είναι το ίδιο έκθεμα. Περνάς από δύο αίθρια χτισμένα με ' +
              'σαράντα περίπου χρόνια διαφορά, με εντελώς διαφορετικό ύφος, και μπαίνεις σε μια ' +
              'εκκλησία τόσο φορτωμένη με χρυσό και πλακάκια που δυσκολεύεσαι να βρεις πάνω ' +
              'της έναν γυμνό τοίχο.',
            en:
              'In some museums the building is just a box. Here it is an exhibit. You pass ' +
              'through two cloisters built about forty years apart and step into a church so ' +
              'loaded with gold and tiles that you struggle to find a bare patch of wall.',
          },
          exhibits: [
            {
              id: 'lisbon-museu-nacional-do-azulejo-igreja',
              name: { el: 'Η εκκλησία Madre de Deus', en: 'The Madre de Deus church' },
              blurb: {
                el:
                  'Μπες και σήκωσε το κεφάλι. Το ταβάνι είναι χωρισμένο σε ξύλινα τετράγωνα, ' +
                  'καθένα με τη ζωγραφιά του, οι τοίχοι είναι σκεπασμένοι με σκαλισμένο ' +
                  'επιχρυσωμένο ξύλο, και από κάτω τους τρέχει ζώνη από γαλάζια πλακάκια. Η ' +
                  'εκκλησία έπαθε ζημιά στον σεισμό του 1755 και επισκευάστηκε. Σήμερα ανήκει ' +
                  'στο μουσείο, οπότε μπαίνεις με εισιτήριο και όχι για λειτουργία, και μπορείς ' +
                  'να σταθείς όση ώρα θέλεις κοιτάζοντας ψηλά.',
                en:
                  'Step inside and put your head back. The ceiling is divided into wooden squares, ' +
                  'each with its own painting, the walls are covered in carved gilded woodwork, ' +
                  'and a band of blue tiles runs along beneath them. The church was damaged in the ' +
                  '1755 earthquake and repaired. Today it belongs to the museum, so you come in ' +
                  'with a ticket rather than for a service, and you can stand as long as you like ' +
                  'looking upwards.',
              },
              question: {
                q: {
                  el: 'Τι είναι χωρισμένο σε ζωγραφισμένα τετράγωνα;',
                  en: 'What is divided into painted squares?',
                },
                answers: [
                  { el: 'Το ταβάνι της εκκλησίας', en: 'The ceiling of the church' },
                  { el: 'Το δάπεδο μπροστά στην είσοδο', en: 'The floor in front of the entrance' },
                  { el: 'Η πόρτα προς το μεγάλο αίθριο', en: 'The door out to the larger cloister' },
                  { el: 'Ο τοίχος πίσω από την αγία τράπεζα', en: 'The wall behind the altar table' },
                ],
                explanation: {
                  el:
                    'Είναι το ταβάνι. Κάθε ξύλινο τετράγωνο έχει τον δικό του πίνακα, οπότε η ' +
                    'οροφή είναι μια ολόκληρη έκθεση από μόνη της.',
                  en:
                    'It is the ceiling. Each wooden square holds its own painting, so the roof is ' +
                    'an entire exhibition by itself.',
                },
              },
            },
            {
              id: 'lisbon-museu-nacional-do-azulejo-claustro-manuelino',
              name: { el: 'Το μικρό αίθριο της Leonor', en: 'Leonor’s small cloister' },
              blurb: {
                el:
                  'Ένα μικρό τετράγωνο αίθριο με δύο σειρές καμάρες, τη μία πάνω από την άλλη, ' +
                  'από τα αρχικά χρόνια του μοναστηριού. Είναι μανουελίνο, το ίδιο στιλ με τον ' +
                  'πύργο του Μπελέμ, οπότε ψάξε τα ίδια σκαλισμένα σκοινιά. Πρόσεξε πόσο ήσυχα ' +
                  'είναι εδώ ακόμα και όταν το μουσείο έχει κόσμο: τα αίθρια σχεδιάζονταν έτσι ' +
                  'επίτηδες, ένας τετράγωνος κήπος περικυκλωμένος από κτίριο, ώστε ο θόρυβος της ' +
                  'πόλης να μη φτάνει ποτέ μέσα.',
                en:
                  'A small square courtyard with two rows of arches, one above the other, from ' +
                  'the convent’s earliest years. It is Manueline, the same style as the Belém ' +
                  'Tower, so hunt for the same carved ropes. Notice how quiet it stays even when ' +
                  'the museum is busy: cloisters were designed that way on purpose, a square ' +
                  'garden ringed by building, so that the noise of the city never reaches the ' +
                  'middle.',
              },
              question: {
                q: {
                  el: 'Γιατί ένα αίθριο είναι τόσο ήσυχο;',
                  en: 'Why is a cloister so quiet?',
                },
                answers: [
                  { el: 'Το κτίριο το περικυκλώνει από παντού', en: 'The building surrounds it on every side' },
                  { el: 'Είναι χτισμένο βαθιά κάτω από τη γη', en: 'It is built deep down under the ground' },
                  { el: 'Απαγορευόταν να μιλάς μέσα σε αυτό', en: 'Talking inside it was strictly forbidden' },
                  { el: 'Οι τοίχοι του είναι γεμάτοι με άχυρο', en: 'Its walls are packed full of straw' },
                ],
                explanation: {
                  el:
                    'Ένας κήπος κλεισμένος από τέσσερις πλευρές δεν έχει από πού να μπει ο ' +
                    'θόρυβος. Οι μοναχοί το ήθελαν ακριβώς έτσι.',
                  en:
                    'A garden shut in on four sides gives noise nowhere to come in. The nuns wanted ' +
                    'exactly that.',
                },
              },
            },
            {
              id: 'lisbon-museu-nacional-do-azulejo-claustro-grande',
              name: { el: 'Το μεγάλο αίθριο', en: 'The great cloister' },
              blurb: {
                el:
                  'Το δεύτερο αίθριο είναι μεγαλύτερο, πιο απλό και χτισμένο σαράντα περίπου ' +
                  'χρόνια αργότερα, σε ρυθμό αναγεννησιακό: ίσιες γραμμές, ίσα διαστήματα, καθόλου ' +
                  'σκοινιά και κοχύλια. Βάλε τα δύο αίθρια δίπλα δίπλα και βλέπεις τη μόδα να ' +
                  'αλλάζει μπροστά σου, μέσα στο ίδιο κτίριο. Εδώ σήμερα είναι το ήσυχο σημείο ' +
                  'όπου κάθεται ο κόσμος να ξεκουραστεί, και οι τοίχοι γύρω κρατούν πίνακες από ' +
                  'πλακάκια που ήρθαν από κτίρια τα οποία δεν υπάρχουν πια.',
                en:
                  'The second cloister is bigger, plainer and built about forty years later, in a ' +
                  'Renaissance style: straight lines, even spacing, no ropes and no seashells. ' +
                  'Put the two cloisters side by side and you watch a fashion change in front of ' +
                  'you, inside one building. Today this is the quiet place where people sit down ' +
                  'for a rest, and the walls around it hold tile panels rescued from buildings ' +
                  'that no longer exist.',
              },
              question: {
                q: {
                  el: 'Πώς ξεχωρίζεις το μεγάλο αίθριο από το μικρό;',
                  en: 'How do you tell the great cloister from the small one?',
                },
                answers: [
                  { el: 'Είναι απλό, με ίσιες γραμμές', en: 'It is plain, with straight lines' },
                  { el: 'Δεν έχει καθόλου καμάρες γύρω του', en: 'It has no arches around it at all' },
                  { el: 'Βρίσκεται έξω από το κτίριο', en: 'It sits outside the building' },
                  { el: 'Είναι σκεπασμένο με γυάλινη οροφή', en: 'It is covered with a glass roof' },
                ],
                explanation: {
                  el:
                    'Το μικρό είναι μανουελίνο, γεμάτο σκαλίσματα. Το μεγάλο είναι αναγεννησιακό ' +
                    'και λιτό, χτισμένο σαράντα περίπου χρόνια αργότερα.',
                  en:
                    'The small one is Manueline and covered in carving. The great one is ' +
                    'Renaissance and bare, built about forty years later.',
                },
              },
            },
          ],
        },
      ],
      riddles: [
        {
          id: 'lisbon-museu-nacional-do-azulejo-riddle-1',
          difficulty: 1,
          prompt: {
            el:
              'Είμαι είκοσι τρία μέτρα μακρύς και δεν χωράω σε καμία κορνίζα. Δείχνω μια πόλη ' +
              'που δεν μπορείς πια να επισκεφθείς, γιατί περίπου πενήντα χρόνια αφού με έφτιαξαν ' +
              'γκρεμίστηκε.',
            en:
              'I am twenty-three metres long and I fit into no frame at all. I show a city you ' +
              'can no longer visit, because about fifty years after I was made it fell down.',
          },
          hint: {
            el: 'Πρέπει να περπατήσεις για να με δεις ολόκληρο.',
            en: 'You have to walk to see all of me.',
          },
          answerExhibitId: 'lisbon-museu-nacional-do-azulejo-grande-panorama',
        },
        {
          id: 'lisbon-museu-nacional-do-azulejo-riddle-2',
          difficulty: 2,
          prompt: {
            el:
              'Δεν είμαι επίπεδος, αν και μοιάζω. Έχω μικρά τοιχάκια που δεν τα βλέπεις εύκολα ' +
              'αλλά τα νιώθεις, και η δουλειά τους είναι να μη δραπετεύσουν τα χρώματά μου μέσα ' +
              'στη φωτιά.',
            en:
              'I am not flat, though I look it. I have little walls you hardly see but can feel, ' +
              'and their job is to stop my colours escaping in the fire.',
          },
          hint: {
            el: 'Είμαι από τα πιο παλιά στο μουσείο.',
            en: 'I am one of the oldest things here.',
          },
          answerExhibitId: 'lisbon-museu-nacional-do-azulejo-aresta',
        },
        {
          id: 'lisbon-museu-nacional-do-azulejo-riddle-3',
          difficulty: 3,
          prompt: {
            el:
              'Είμαι τετράγωνος και άδειος στη μέση, με καμάρες σε δύο πατώματα. Φοράω τα ίδια ' +
              'πέτρινα σκοινιά με έναν πύργο δίπλα στο ποτάμι, δέκα χιλιόμετρα από εδώ.',
            en:
              'I am square and empty in the middle, with arches on two floors. I wear the same ' +
              'stone ropes as a tower beside the river, ten kilometres from here.',
          },
          hint: {
            el: 'Είμαι ο μικρότερος από τους δύο.',
            en: 'I am the smaller of the two.',
          },
          answerExhibitId: 'lisbon-museu-nacional-do-azulejo-claustro-manuelino',
        },
      ],
    },
  },

  // -------------------------------------------------------- oceanário de lisboa
  {
    id: 'lisbon-oceanario-de-lisboa',
    cityId: 'lisbon',
    emoji: '🐟',
    category: 'nature',
    difficulty: 1,

    name: { el: 'Ωκεανάριο της Λισαβόνας', en: 'The Lisbon Oceanarium' },
    tagline: {
      el: 'Τέσσερις ωκεανοί γύρω από μία και μόνη δεξαμενή',
      en: 'Four oceans arranged around a single tank',
    },
    story: {
      el:
        'Το Ωκεανάριο χτίστηκε το 1998 και έχει μια ιδέα στη μέση του, κυριολεκτικά. Στο ' +
        'κέντρο υπάρχει μια τεράστια δεξαμενή με πέντε εκατομμύρια λίτρα νερό. Γύρω της, ' +
        'τέσσερα διαφορετικά τοπία: ο Βόρειος Ατλαντικός με τους βράχους του, η Ανταρκτική ' +
        'με τους πιγκουίνους, ο εύκρατος Ειρηνικός με τις ενυδρίδες και ο τροπικός Ινδικός ' +
        'με τα κοράλλια. Κάθε τοπίο έχει τον δικό του αέρα, τη δική του θερμοκρασία και τα ' +
        'δικά του ζώα, όμως όλα κοιτάζουν μέσα στο ίδιο νερό. Αυτό δεν είναι κόλπο ' +
        'εξοικονόμησης χώρου: είναι το μήνυμα του κτιρίου. Οι ωκεανοί δεν είναι πέντε ' +
        'χωριστά πράγματα, είναι ένας, και ό,τι ρίχνεις σε μία ακτή φτάνει τελικά σε όλες ' +
        'τις άλλες. Ο πιο διάσημος κάτοικος είναι το φεγγαρόψαρο, ένα ψάρι που μοιάζει με ' +
        'γιγάντιο κεφάλι χωρίς σώμα.',
      en:
        'The Oceanarium was built in 1998, and it has an idea at its centre, quite literally. ' +
        'In the middle stands an enormous tank holding five million litres of water. Around ' +
        'it are four different landscapes: the North Atlantic with its rocks, the Antarctic ' +
        'with its penguins, the temperate Pacific with its sea otters and the tropical Indian ' +
        'with its corals. Each one has its own air, its own temperature and its own animals, ' +
        'and yet all four look into the same water. That is not a way of saving space: it is ' +
        'what the building is saying. The oceans are not five separate things, they are one, ' +
        'and whatever you drop on one coast eventually reaches all the others. Its most ' +
        'famous resident is the sunfish, which looks like a giant head with no body.',
    },
    facts: [
      {
        el: 'Η κεντρική δεξαμενή κρατάει περίπου πέντε εκατομμύρια λίτρα θαλασσινό νερό.',
        en: 'The central tank holds about five million litres of sea water.',
      },
      {
        el: 'Τα τέσσερα τοπία χωρίζονται από διάφανο ακρυλικό, οπότε από μακριά δεν βλέπεις τον χωρισμό.',
        en: 'The four landscapes are divided by clear acrylic, so from a distance you cannot see the divide.',
      },
      {
        el: 'Χτίστηκε για τη διεθνή έκθεση Expo ’98, που είχε θέμα τους ωκεανούς.',
        en: 'It was built for the Expo ’98 world fair, whose theme was the oceans.',
      },
    ],
    location: {
      lat: 38.76353,
      lng: -9.09375,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q652806', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Lisbon Oceanarium', deltaM: 5 },
      ],
      verifiedAt: '2026-09-13',
      note: 'The Overpass API answered 504 during this run, so there is no OSM cross-check.',
      findIt: {
        el: 'Στο Parque das Nações, δίπλα στο νερό. Το κτίριο στέκεται πάνω σε λιμνούλα και το φτάνεις με μια πεζογέφυρα.',
        en: 'In the Parque das Nações, next to the water. The building stands in a pool and you reach it over a footbridge.',
      },
    },
    question: {
      q: {
        el: 'Γιατί όλα τα τοπία κοιτάζουν στην ίδια δεξαμενή;',
        en: 'Why do all the landscapes look into the same tank?',
      },
      answers: [
        { el: 'Γιατί ο ωκεανός είναι ένας και μόνο', en: 'Because there is only one ocean' },
        { el: 'Γιατί έτσι χωράνε περισσότερα ψάρια', en: 'Because that way more fish will fit inside' },
        { el: 'Γιατί το νερό καθαρίζεται πιο εύκολα', en: 'Because the water is easier to keep clean' },
        { el: 'Γιατί το κτίριο ήταν πολύ μικρό', en: 'Because the building was very small' },
      ],
      explanation: {
        el:
          'Οι ωκεανοί έχουν διαφορετικά ονόματα αλλά είναι ένα ενιαίο νερό. Το κτίριο σε ' +
          'κάνει να το δεις με τα μάτια σου, όχι να το διαβάσεις.',
        en:
          'The oceans have different names but they are one body of water. The building makes ' +
          'you see that, instead of reading it.',
      },
    },
  },

  // ------------------------------------------------------ aqueduto das águas livres
  {
    id: 'lisbon-aqueduto-das-aguas-livres',
    cityId: 'lisbon',
    emoji: '💧',
    category: 'science',
    difficulty: 3,

    name: { el: 'Υδραγωγείο των Ελεύθερων Νερών', en: 'The Águas Livres Aqueduct' },
    tagline: {
      el: 'Ο σεισμός γκρέμισε την πόλη και το άφησε όρθιο',
      en: 'The earthquake flattened the city and left it standing',
    },
    story: {
      el:
        'Για αιώνες η Λισαβόνα δεν είχε αρκετό καθαρό νερό. Τον 18ο αιώνα η πόλη αποφάσισε ' +
        'να το φέρει από πηγές μακριά, στα βορειοδυτικά, με έναν αγωγό που κατεβαίνει τόσο ' +
        'ελαφρά που το νερό κυλάει μόνο του, χωρίς καμία αντλία. Το δύσκολο κομμάτι ήταν η ' +
        'κοιλάδα της Alcântara. Την πέρασαν με τριάντα πέντε τεράστιες καμάρες, και η ' +
        'ψηλότερη από αυτές φτάνει τα εξήντα πέντε μέτρα, η ψηλότερη οξυκόρυφη πέτρινη ' +
        'καμάρα που έχει χτιστεί ποτέ. Το νερό έφτασε στην πόλη το 1748. Επτά χρόνια ' +
        'αργότερα ήρθε ο μεγάλος σεισμός, γκρέμισε το κέντρο της Λισαβόνας και άφησε το ' +
        'υδραγωγείο όρθιο χωρίς ζημιά. Ένα κτίσμα από απλή πέτρα, χωρίς τσιμέντο και χωρίς ' +
        'σίδερο, άντεξε επειδή ήταν σχεδιασμένο σωστά. Σήμερα μπορείς να περπατήσεις πάνω ' +
        'στις καμάρες, με την κοιλάδα κάτω από τα πόδια σου.',
      en:
        'For centuries Lisbon did not have enough clean water. In the eighteenth century the ' +
        'city decided to bring it from springs far away to the north-west, along a channel ' +
        'that slopes so gently the water runs by itself, with no pump anywhere. The hard part ' +
        'was the Alcântara valley. They crossed it on thirty-five enormous arches, and the ' +
        'tallest of them reaches sixty-five metres, the highest pointed stone arch ever ' +
        'built. The water arrived in the city in 1748. Seven years later the great earthquake ' +
        'came, brought down the centre of Lisbon and left the aqueduct standing without ' +
        'damage. A structure of plain stone, with no cement and no steel, survived because it ' +
        'was designed properly. Today you can walk along the top of the arches, with the ' +
        'valley under your feet.',
    },
    facts: [
      {
        el: 'Το νερό έφτασε στη Λισαβόνα το 1748 και κυλάει μόνο με τη βαρύτητα, χωρίς αντλίες.',
        en: 'The water reached Lisbon in 1748, and it flows on gravity alone, with no pumps.',
      },
      {
        el: 'Η ψηλότερη καμάρα του, πάνω από την κοιλάδα Alcântara, φτάνει τα 65 μέτρα.',
        en: 'Its tallest arch, over the Alcântara valley, reaches 65 metres.',
      },
      {
        el: 'Άντεξε τον σεισμό του 1755 χωρίς ζημιά, ενώ το κέντρο της πόλης έπεσε.',
        en: 'It came through the 1755 earthquake undamaged, while the city centre fell.',
      },
    ],
    location: {
      lat: 38.72667,
      lng: -9.16667,
      anchor: 'area',
      confidence: 'C',
      sources: [
        { kind: 'wikidata', ref: 'Q623228', deltaM: 0 },
        { kind: 'osm', ref: 'node/13950436040', deltaM: 34 },
        { kind: 'wikipedia', ref: 'Águas Livres Aqueduct', deltaM: 328 },
      ],
      verifiedAt: '2026-09-13',
      note: 'An area, and a long one: the aqueduct runs about eighteen kilometres, so Wikipedia’s point sits 328 m from Wikidata’s on the same structure, while OSM’s is 34 m away. Wikidata’s point is on the great arches over the Alcântara valley, which is the part you can walk.',
      findIt: {
        el: 'Οι καμάρες φαίνονται από τον δρόμο κάτω, στην Alcântara. Η πόρτα για να ανέβεις πάνω τους είναι στην Calçada da Quintinha.',
        en: 'The arches are visible from the road below, in Alcântara. The door for walking on top is on Calçada da Quintinha.',
      },
    },
    question: {
      q: {
        el: 'Τι έπαθε το υδραγωγείο στον σεισμό του 1755;',
        en: 'What happened to the aqueduct in the 1755 earthquake?',
      },
      answers: [
        { el: 'Τίποτα, έμεινε όρθιο', en: 'Nothing, it stayed standing' },
        { el: 'Έπεσαν οι μισές καμάρες του', en: 'Half of its arches came down' },
        { el: 'Ράγισε και σταμάτησε το νερό', en: 'It cracked and the water stopped' },
        { el: 'Έγειρε και ξαναχτίστηκε αλλού', en: 'It leaned and was rebuilt elsewhere' },
      ],
      explanation: {
        el:
          'Το κέντρο της πόλης έπεσε, το υδραγωγείο όχι. Οι καμάρες μοιράζουν το βάρος στο ' +
          'έδαφος, και το σχήμα τους αντέχει το κούνημα.',
        en:
          'The city centre came down; the aqueduct did not. Arches spread their weight into the ' +
          'ground, and that shape rides out the shaking.',
      },
    },
  },

  // ------------------------------------------------------------- estádio da luz
  {
    id: 'lisbon-estadio-da-luz',
    cityId: 'lisbon',
    emoji: '🦅',
    category: 'sport',
    difficulty: 1,

    name: { el: 'Γήπεδο ντα Λουζ', en: 'Estádio da Luz' },
    tagline: {
      el: 'Πριν από κάθε αγώνα, ένας αετός κάνει έναν γύρο',
      en: 'Before every match, an eagle flies one lap',
    },
    story: {
      el:
        'Είναι το μεγαλύτερο γήπεδο της Πορτογαλίας, με περίπου εξήντα τέσσερις χιλιάδες ' +
        'θέσεις, και άνοιξε το 2003. Το όνομά του σημαίνει «το γήπεδο του Φωτός», από τη ' +
        'γειτονιά Luz στην οποία στέκεται. Εδώ έγινε ο τελικός του Ευρωπαϊκού ' +
        'Πρωταθλήματος το 2004 και δύο τελικοί του Champions League. Το πιο ασυνήθιστο όμως ' +
        'δεν είναι το κτίριο. Λίγο πριν από κάθε αγώνα της Benfica ένας αληθινός αετός ' +
        'ξεκινάει από το χέρι του εκπαιδευτή του, κάνει έναν κύκλο πάνω από το χορτάρι με ' +
        'εξήντα χιλιάδες ανθρώπους να φωνάζουν, και μετά επιστρέφει και κάθεται ήσυχα εκεί ' +
        'από όπου ξεκίνησε. Ο αετός είναι το σύμβολο της ομάδας εδώ και έναν αιώνα. Η ' +
        'σκεπή σκεπάζει μόνο τις κερκίδες και είναι από διάφανο υλικό επίτηδες, ώστε ο ' +
        'ήλιος να φτάνει στο χορτάρι και να το κρατάει ζωντανό — και έτσι μένει και για ' +
        'τον αετό ένας ανοιχτός κύκλος ουρανού.',
      en:
        'This is the largest stadium in Portugal, with about sixty-four thousand seats, and ' +
        'it opened in 2003. Its name means “the stadium of the Light”, after the Luz ' +
        'neighbourhood it stands in. The final of the 2004 European Championship was played ' +
        'here, and two Champions League finals as well. But the most unusual thing about it ' +
        'is not the building. Shortly before every Benfica match a real eagle launches from ' +
        'its handler’s arm, circles once above the grass while sixty thousand people roar, ' +
        'and then comes back and settles quietly where it started. The eagle has been the ' +
        'club’s symbol for a century. The roof covers only the stands, and it is made of a ' +
        'see-through material on purpose, so that sunlight still reaches the grass and keeps ' +
        'it alive — which leaves the eagle a clear circle of sky as well.',
    },
    facts: [
      {
        el: 'Άνοιξε το 2003 και έχει περίπου 64.000 θέσεις: το μεγαλύτερο γήπεδο της Πορτογαλίας.',
        en: 'It opened in 2003 and seats about 64,000: the largest stadium in Portugal.',
      },
      {
        el: 'Φιλοξένησε τον τελικό του Ευρωπαϊκού Πρωταθλήματος του 2004.',
        en: 'It hosted the final of the 2004 European Championship.',
      },
      {
        el: 'Ένας εκπαιδευμένος αετός πετάει πάνω από το χορτάρι πριν από τους αγώνες της Benfica.',
        en: 'A trained eagle flies over the grass before Benfica’s home matches.',
      },
    ],
    location: {
      lat: 38.75278,
      lng: -9.18472,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q7875112', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Estádio da Luz', deltaM: 9 },
      ],
      verifiedAt: '2026-09-13',
      note: 'The stadium opened in 2003 (Q7875112), not the old one on nearly the same ground that was demolished that year, and not the Stadium of Light in England. The Overpass API answered 504 during this run.',
      findIt: {
        el: 'Το μετρό σε αφήνει ακριβώς απέναντι, στη στάση Colégio Militar. Το άγαλμα του Eusébio στέκεται έξω από την είσοδο.',
        en: 'The metro leaves you right opposite, at Colégio Militar. The statue of Eusébio stands outside the entrance.',
      },
    },
    question: {
      q: {
        el: 'Τι πετάει πάνω από το χορτάρι πριν από τον αγώνα;',
        en: 'What flies over the grass before a match?',
      },
      answers: [
        { el: 'Ένας αληθινός αετός', en: 'A real eagle' },
        { el: 'Ένα μικρό αερόστατο', en: 'A small hot-air balloon' },
        { el: 'Ένα τηλεκατευθυνόμενο', en: 'A remote-controlled plane' },
        { el: 'Μια ομάδα περιστεριών', en: 'A flock of white doves' },
      ],
      explanation: {
        el:
          'Ο αετός είναι το σύμβολο της Benfica. Πετάει έναν κύκλο και γυρίζει στο χέρι του ' +
          'εκπαιδευτή του, μπροστά σε εξήντα χιλιάδες κόσμο.',
        en:
          'The eagle is Benfica’s symbol. It flies one circle and returns to its handler’s arm, ' +
          'in front of sixty thousand people.',
      },
    },
  },

  // ---------------------------------------------------------- pastéis de belém
  {
    id: 'lisbon-pasteis-de-belem',
    cityId: 'lisbon',
    emoji: '🥮',
    category: 'food',
    difficulty: 1,

    name: { el: 'Το ζαχαροπλαστείο του Μπελέμ', en: 'The Pastéis de Belém bakery' },
    tagline: {
      el: 'Η συνταγή των μοναχών, κλειδωμένη σε ένα δωμάτιο',
      en: 'The monks’ recipe, locked away in one room',
    },
    story: {
      el:
        'Δίπλα στο μοναστήρι υπάρχει ένα ζαχαροπλαστείο που πουλάει ζεστά ταρτάκια με κρέμα ' +
        'από αυγό, τα pastéis de nata. Η ιστορία τους ξεκινάει από τους μοναχούς. Στα ' +
        'μοναστήρια χρησιμοποιούσαν τεράστιες ποσότητες ασπράδι αυγού για να κολλαρίσουν τα ' +
        'ρούχα, και τους περίσσευαν βουνά από κρόκους. Αντί να τους πετάξουν, έφτιαχναν ' +
        'γλυκά. Γι’ αυτό τόσα πορτογαλικά γλυκά είναι κίτρινα και μοιάζουν με κρέμα. Το ' +
        '1834 τα μοναστήρια της Πορτογαλίας έκλεισαν, και η συνταγή πουλήθηκε σε ένα ' +
        'μαγαζί δίπλα, που άνοιξε το 1837 και δουλεύει από τότε. Η συνταγή δεν έχει γραφτεί ' +
        'ποτέ σε βιβλίο μαγειρικής. Η ζύμη ανοίγεται σε ένα κλειδωμένο δωμάτιο που το λένε ' +
        'Oficina do Segredo, το «εργαστήριο του μυστικού», και μόνο λίγοι άνθρωποι ξέρουν ' +
        'ολόκληρη τη συνταγή. Τα ταρτάκια βγαίνουν από τον φούρνο καμένα λίγο στην ' +
        'επιφάνεια, και αυτό είναι σκόπιμο: η πολύ δυνατή φωτιά καραμελώνει τη ζάχαρη και ' +
        'δίνει τις μαύρες βούλες που όλοι ψάχνουν.',
      en:
        'Next door to the monastery there is a bakery that sells warm little tarts filled ' +
        'with egg custard, the pastéis de nata. Their story starts with the monks. ' +
        'Monasteries used enormous amounts of egg white to starch their clothes, which left ' +
        'them with mountains of leftover yolks. Rather than throw them away, they made sweets ' +
        'out of them. That is why so many Portuguese puddings are yellow and taste of ' +
        'custard. In 1834 the monasteries of Portugal were closed, and the recipe was sold to ' +
        'a shop next door, which opened in 1837 and has been working ever since. The recipe ' +
        'has never been printed in a cookery book. The pastry is rolled in a locked room ' +
        'called the Oficina do Segredo, the “workshop of the secret”, and only a handful of ' +
        'people know the whole of it. The tarts come out of the oven a little burnt on top, ' +
        'and that is on purpose: the very hot fire caramelises the sugar and gives them the ' +
        'dark blisters everyone looks for.',
    },
    facts: [
      {
        el: 'Το μαγαζί λειτουργεί από το 1837, όταν αγόρασε τη συνταγή από το γειτονικό μοναστήρι.',
        en: 'The shop has traded since 1837, when it bought the recipe from the monastery next door.',
      },
      {
        el: 'Οι μοναχοί χρησιμοποιούσαν τα ασπράδια για κολλάρισμα και έφτιαχναν γλυκά με τους κρόκους που περίσσευαν.',
        en: 'The monks used egg whites for starching clothes and made sweets from the yolks left over.',
      },
      {
        el: 'Μόνο εδώ λέγονται pastéis de Belém· παντού αλλού λέγονται pastéis de nata.',
        en: 'Only here are they called pastéis de Belém; everywhere else they are pastéis de nata.',
      },
    ],
    location: {
      lat: 38.69751,
      lng: -9.20323,
      anchor: 'centroid',
      confidence: 'C',
      sources: [{ kind: 'wikidata', ref: 'Q3091352', deltaM: 0 }],
      verifiedAt: '2026-09-13',
      note: 'One source only: the Overpass API answered 429 and the English Wikipedia has no article with coordinates for the bakery. It sits 209 m east of the monastery point, well clear of the separation rule.',
      findIt: {
        el: 'Είναι στη Rua de Belém, με μπλε πινακίδα. Η ουρά στο πεζοδρόμιο είναι για το πακέτο· μέσα υπάρχουν αίθουσες και τραπέζια.',
        en: 'It is on Rua de Belém, with a blue sign. The pavement queue is for takeaway; inside there are rooms and tables.',
      },
    },
    question: {
      q: {
        el: 'Γιατί περίσσευαν στους μοναχούς τόσοι κρόκοι αυγών;',
        en: 'Why did the monks have so many egg yolks left over?',
      },
      answers: [
        { el: 'Κολλάριζαν τα ρούχα τους με τα ασπράδια', en: 'They starched their clothes with the whites' },
        { el: 'Πουλούσαν τα ασπράδια σε φούρνους της πόλης', en: 'They sold the whites to bakeries in the town' },
        { el: 'Τα ασπράδια χαλούσαν πολύ πιο γρήγορα', en: 'The whites went off a great deal faster' },
        { el: 'Τα ασπράδια τα έδιναν στα ζώα του κήπου', en: 'They fed the whites to the animals in the garden' },
      ],
      explanation: {
        el:
          'Το ασπράδι σφίγγει το ύφασμα, οπότε τα μοναστήρια το χρησιμοποιούσαν σε κιλά. Οι ' +
          'κρόκοι έμεναν, και έγιναν γλυκά.',
        en:
          'Egg white stiffens cloth, so monasteries got through it by the bucket. The yolks ' +
          'were left, and they turned into puddings.',
      },
    },
  },
];

export const trails: Trail[] = [
  {
    id: 'lisbon-the-city-rebuilt',
    cityId: 'lisbon',
    emoji: '📐',
    name: { el: 'Η πόλη που ξαναχτίστηκε', en: 'The city that was rebuilt' },
    promise: {
      el: 'Τέσσερα μέρη που υπάρχουν μόνο επειδή ένα πρωί του 1755 έπεσε το κέντρο της Λισαβόνας.',
      en: 'Four places that exist only because one morning in 1755 the centre of Lisbon fell.',
    },
    placeIds: [
      'lisbon-praca-do-comercio',
      'lisbon-arco-da-rua-augusta',
      'lisbon-rossio',
      'lisbon-elevador-de-santa-justa',
    ],
  },
  {
    id: 'lisbon-up-the-hill',
    cityId: 'lisbon',
    emoji: '🏰',
    name: { el: 'Ο λόφος και τα στενά του', en: 'The hill and its narrow streets' },
    promise: {
      el: 'Μια εκκλησία χτισμένη σαν κάστρο, ένα κάστρο με παγώνια, και ένα μπαλκόνι πάνω από την Alfama.',
      en: 'A church built like a castle, a castle with peacocks, and a balcony above Alfama.',
    },
    placeIds: [
      'lisbon-se-de-lisboa',
      'lisbon-castelo-de-sao-jorge',
      'lisbon-miradouro-de-santa-luzia',
    ],
  },
  {
    id: 'lisbon-belem',
    cityId: 'lisbon',
    emoji: '⛵',
    name: { el: 'Το Μπελέμ, απ’ όπου έφευγαν τα καράβια', en: 'Belém, where the ships left from' },
    promise: {
      el: 'Ο πύργος-φύλακας, το μοναστήρι των μπαχαρικών, ένα υδροπλάνο και τα ζεστά ταρτάκια στο τέλος.',
      en: 'The guard tower, the spice monastery, a seaplane, and warm custard tarts at the end.',
    },
    placeIds: [
      'lisbon-torre-de-belem',
      'lisbon-padrao-dos-descobrimentos',
      'lisbon-mosteiro-dos-jeronimos',
      'lisbon-museu-de-marinha',
      'lisbon-pasteis-de-belem',
    ],
  },
  {
    id: 'lisbon-how-it-works',
    cityId: 'lisbon',
    emoji: '⚙️',
    name: { el: 'Πώς δουλεύουν τα πράγματα', en: 'How things work' },
    promise: {
      el: 'Νερό που κυλάει μόνο του, χρώματα που δεν δραπετεύουν από τη φωτιά, και ένας ωκεανός σε μια δεξαμενή.',
      en: 'Water that flows by itself, colours that cannot escape the fire, and one ocean in a tank.',
    },
    placeIds: [
      'lisbon-aqueduto-das-aguas-livres',
      'lisbon-museu-nacional-do-azulejo',
      'lisbon-oceanario-de-lisboa',
    ],
  },
  {
    id: 'lisbon-out-of-the-centre',
    cityId: 'lisbon',
    emoji: '🦅',
    name: { el: 'Έξω από το κέντρο', en: 'Out of the centre' },
    promise: {
      el: 'Τρεις στάσεις μακριά από τα σοκάκια: ένας αετός, ένα φεγγαρόψαρο και μια καμάρα 65 μέτρων.',
      en: 'Three stops away from the lanes: an eagle, a sunfish and a sixty-five-metre arch.',
    },
    placeIds: [
      'lisbon-estadio-da-luz',
      'lisbon-oceanario-de-lisboa',
      'lisbon-aqueduto-das-aguas-livres',
    ],
  },
];
