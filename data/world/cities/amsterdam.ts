/**
 * WiseBot World — Amsterdam.
 *
 * Sixteen places, three of them museums with an interior. Written for a six- to
 * twelve-year-old, which is a constraint on the writing and not on the truth: the Anne
 * Frank House is here as a place of history with a story told plainly and to the end,
 * and it is not given an interior of rooms and riddles, because a game inside the
 * Secret Annex is the wrong shape for it. The museum itself admits children from ten,
 * and the story says so.
 *
 * Ten of these places were carried over from the Explorer product on origin/main. Every
 * Explorer story was rewritten longer and re-checked; the Explorer riddle, parent hint
 * and on-site question texts are kept verbatim in
 * `scripts/world/seeds/amsterdam.explorer.json` until they have fields to live in.
 *
 * Every coordinate in this file is copied from `data/world/coords/amsterdam.json`,
 * which `scripts/world/resolve-coords.mjs` produced from Wikidata and cross-checked
 * against OpenStreetMap and Wikipedia. Nothing here was typed by hand, and nothing
 * graded `D` is present. No place claims an entrance: no door was measured, so every
 * point is the centroid or area it is, and where a venue's own page names its door the
 * `findIt` sentence beside the coordinate says so in words, with the source in a comment.
 *
 * Facts were checked against the English and Dutch Wikipedia articles for each place
 * and, where noted, the venue's own site. `el` and `en` are complete. `de`, `fr`, `es`
 * and `it` land in the second pass.
 */

import type { Place, Trail } from '../types';

export const places: Place[] = [
  // ------------------------------------------------------------------ centraal
  {
    id: 'amsterdam-centraal',
    cityId: 'amsterdam',
    emoji: '🚂',
    category: 'landmark',
    difficulty: 1,

    name: { el: 'Άμστερνταμ Σεντράλ', en: 'Amsterdam Centraal' },
    tagline: {
      el: 'Ένα παλάτι από κόκκινο τούβλο που στέκεται πάνω στο νερό',
      en: 'A palace of red brick standing on the water',
    },
    story: {
      el:
        'Πριν από το 1889 εδώ ήταν ανοιχτό νερό: το IJ, το λιμάνι της πόλης. Για να χτίσουν ' +
        'σιδηροδρομικό σταθμό, οι μηχανικοί έπρεπε πρώτα να χτίσουν το έδαφος. Έφτιαξαν τρία ' +
        'τεχνητά νησιά και έμπηξαν στη λάσπη 8.687 ξύλινους πασσάλους, ως το σκληρό στρώμα ' +
        'άμμου από κάτω, γιατί στο Άμστερνταμ ό,τι είναι βαρύ βουλιάζει, αν δεν πατάει σε ' +
        'πασσάλους. Μετά ο Pierre Cuypers, ο αρχιτέκτονας του Rijksmuseum, σχεδίασε έναν ' +
        'σταθμό που μοιάζει με παλάτι από κόκκινο τούβλο, με σκαλίσματα, χρωματιστές εικόνες ' +
        'και δύο πύργους. Ο ανατολικός πύργος έχει ρολόι. Ο δυτικός έχει έναν δίσκο που δεν ' +
        'δείχνει καθόλου την ώρα: ένα πτερύγιο στη στέγη γυρίζει με τον άνεμο και κινεί τον ' +
        'δείκτη, ώστε οι ναυτικοί, και όλοι οι άλλοι, να διαβάζουν από πού φυσάει. Πολλοί ' +
        'κάτοικοι γκρίνιαξαν ότι το κτίριο τούς έκρυψε τη θέα στα καράβια. Σήμερα περνούν από ' +
        'εδώ σχεδόν 200.000 ταξιδιώτες τη μέρα, από πίσω του φεύγουν δωρεάν φέρι για τη ' +
        'βόρεια όχθη, και το 2023 άνοιξε μπροστά του ένα γκαράζ για σχεδόν 7.000 ποδήλατα, ' +
        'χτισμένο κάτω από το νερό.',
      en:
        'Before 1889 there was open water here: the IJ, the harbour of the city. To build a ' +
        'railway station, the engineers first had to build the ground. They made three ' +
        'artificial islands and drove 8,687 wooden piles into the mud, down to the firm sand ' +
        'underneath, because anything heavy in Amsterdam sinks unless it stands on piles. ' +
        'Then Pierre Cuypers, the architect of the Rijksmuseum, designed a station that looks ' +
        'like a palace of red brick, with carvings, coloured pictures and two towers. The ' +
        'eastern tower has a clock. The western one has a dial that does not show the time at ' +
        'all: a vane on the roof turns with the wind and moves the pointer, so that sailors, ' +
        'and everyone else, could read which way the wind was blowing. Many people grumbled ' +
        'that the building hid their view of the ships. Today almost 200,000 travellers pass ' +
        'through every day, free ferries leave from behind it for the north bank, and in 2023 ' +
        'a garage for almost 7,000 bicycles opened in front of it, built under the water.',
    },
    facts: [
      {
        el: 'Στέκεται σε τρία τεχνητά νησιά, πάνω σε 8.687 ξύλινους πασσάλους.',
        en: 'It stands on three artificial islands, on 8,687 wooden piles.',
      },
      {
        el: 'Άνοιξε στις 15 Οκτωβρίου 1889, σε σχέδια του Pierre Cuypers.',
        en: 'It opened on 15 October 1889, to a design by Pierre Cuypers.',
      },
      {
        el: 'Το γκαράζ ποδηλάτων μπροστά του, κάτω από το νερό, άνοιξε τον Ιανουάριο του 2023 με θέση για σχεδόν 7.000 ποδήλατα.',
        en: 'The bicycle garage in front of it, under the water, opened in January 2023 with room for almost 7,000 bikes.',
      },
      {
        el: 'Τα φέρι πίσω από τον σταθμό προς το Amsterdam-Noord είναι δωρεάν.',
        en: 'The ferries behind the station to Amsterdam-Noord are free.',
      },
    ],
    location: {
      lat: 52.37895,
      lng: 4.90016,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q50719', deltaM: 0 },
        { kind: 'osm', ref: 'node/4290854847', deltaM: 29 },
        { kind: 'wikipedia', ref: 'Amsterdam Centraal station', deltaM: 69 },
      ],
      verifiedAt: '2026-09-12',
      map: { x: 0.602, y: 0.201 },
      note: 'Wikipedia sits 69 m from the Wikidata point, which is ordinary for a building this long.',
    },
    question: {
      q: {
        el: 'Τι δείχνει ο δίσκος στον δυτικό πύργο του σταθμού;',
        en: 'What does the dial on the western tower of the station show?',
      },
      answers: [
        { el: 'Την κατεύθυνση του ανέμου', en: 'The wind’s direction' },
        { el: 'Την ώρα στο Λονδίνο', en: 'The time in London' },
        { el: 'Την ημέρα της εβδομάδας', en: 'The day of the week' },
        { el: 'Την αποβάθρα του επόμενου τρένου', en: 'The next train’s platform' },
      ],
      explanation: {
        el:
          'Ένα πτερύγιο στη στέγη γυρίζει με τον άνεμο και κινεί τον δείκτη. Σε μια πόλη ' +
          'ιστιοφόρων, ο άνεμος μετρούσε όσο και η ώρα.',
        en:
          'A vane on the roof turns with the wind and moves the pointer. In a city of sailing ' +
          'ships, the wind mattered as much as the time.',
      },
    },
  },

  // ----------------------------------------------------------------------- dam
  {
    id: 'amsterdam-dam',
    cityId: 'amsterdam',
    emoji: '👑',
    category: 'history',
    difficulty: 2,

    name: { el: 'Πλατεία Dam', en: 'Dam Square' },
    tagline: {
      el: 'Ένα φράγμα σε ένα ποτάμι έδωσε το όνομά του σε μια πόλη',
      en: 'A dam across a river gave a whole city its name',
    },
    story: {
      el:
        'Γύρω στο 1270 κάποιοι έχτισαν εδώ ένα φράγμα στον ποταμό Amstel, για να κρατούν το ' +
        'νερό μακριά από τα σπίτια τους. Το χωριό δίπλα του λεγόταν Amstelredamme, και αυτό ' +
        'είναι όλο το όνομα: Amstel και dam, δηλαδή φράγμα. Τετρακόσια χρόνια αργότερα το ' +
        'μικρό ψαροχώρι είχε γίνει μία από τις πιο πλούσιες πόλεις του κόσμου και έχτισε ένα ' +
        'δημαρχείο τόσο μεγαλόπρεπο, που ο κόσμος το έλεγε όγδοο θαύμα του κόσμου. Στέκεται ' +
        'πάνω σε 13.659 ξύλινους πασσάλους, μετρημένους έναν έναν. Το 1808 ο Λουδοβίκος ' +
        'Βοναπάρτης, ο αδερφός του Ναπολέοντα, που είχε γίνει βασιλιάς της Ολλανδίας, έκανε το ' +
        'δημαρχείο παλάτι του, και παλάτι έμεινε: ο Ολλανδός βασιλιάς το χρησιμοποιεί ακόμη ' +
        'για δεξιώσεις. Στην πίσω πλευρά του κτιρίου ένας Άτλαντας έξι μέτρων κρατάει τον ' +
        'κόσμο στους ώμους του. Απέναντι, η λευκή κολόνα είναι το Εθνικό Μνημείο, που ' +
        'στήθηκε το 1956 για τους ανθρώπους που έχασε η Ολλανδία στον Δεύτερο Παγκόσμιο ' +
        'Πόλεμο· κάθε χρόνο, στις 4 Μαΐου στις οκτώ το βράδυ, ολόκληρη η χώρα σωπαίνει εδώ ' +
        'για δύο λεπτά. Και στη Nieuwe Kerk, δίπλα στο παλάτι, ορκίζονται οι βασιλιάδες και ' +
        'οι βασίλισσες της Ολλανδίας.',
      en:
        'Around 1270 people built a dam across the river Amstel here, to keep the water away ' +
        'from their houses. The village beside it was called Amstelredamme, and that is the ' +
        'whole name: Amstel plus dam. Four hundred years later the little fishing village had ' +
        'become one of the richest cities in the world, and it built itself a town hall so ' +
        'grand that people called it the eighth wonder of the world. It stands on 13,659 ' +
        'wooden piles, counted one by one. In 1808 Louis Bonaparte, Napoleon’s brother, who ' +
        'had been made king of Holland, turned the town hall into his palace, and a palace it ' +
        'has stayed: the Dutch king still uses it for receptions. On the back of the building ' +
        'a six-metre Atlas carries the world on his shoulders. Across the square the white ' +
        'column is the National Monument, unveiled in 1956 for the people the Netherlands ' +
        'lost in the Second World War; every year on 4 May, at eight in the evening, the ' +
        'whole country falls silent here for two minutes. And in the Nieuwe Kerk beside the ' +
        'palace, the kings and queens of the Netherlands are sworn in.',
    },
    facts: [
      {
        el: 'Το παλάτι χτίστηκε ως δημαρχείο (1648–1665) πάνω σε 13.659 ξύλινους πασσάλους.',
        en: 'The palace was built as the town hall (1648–1665) on 13,659 wooden piles.',
      },
      {
        el: 'Έγινε παλάτι το 1808, όταν ο Λουδοβίκος Βοναπάρτης ήταν βασιλιάς της Ολλανδίας.',
        en: 'It became a palace in 1808, when Louis Bonaparte was king of Holland.',
      },
      {
        el: 'Το Εθνικό Μνημείο είναι 22 μέτρα ψηλό και αποκαλύφθηκε στις 4 Μαΐου 1956.',
        en: 'The National Monument is 22 metres tall and was unveiled on 4 May 1956.',
      },
      {
        el: 'Στη Nieuwe Kerk ορκίστηκε ο βασιλιάς Willem-Alexander το 2013.',
        en: 'King Willem-Alexander was sworn in at the Nieuwe Kerk in 2013.',
      },
    ],
    location: {
      lat: 52.37306,
      lng: 4.89278,
      anchor: 'area',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q839050', deltaM: 0 },
        { kind: 'osm', ref: 'way/94756489', deltaM: 14 },
        { kind: 'wikipedia', ref: 'Dam Square', deltaM: 5 },
      ],
      verifiedAt: '2026-09-12',
      map: { x: 0.528, y: 0.308 },
    },
    question: {
      q: {
        el: 'Τι ήταν το Βασιλικό Παλάτι όταν χτίστηκε;',
        en: 'What was the Royal Palace when it was first built?',
      },
      answers: [
        { el: 'Το δημαρχείο της πόλης', en: 'The city’s town hall' },
        { el: 'Το κάστρο ενός δούκα', en: 'A castle for a duke' },
        { el: 'Μια εκκλησία για ναυτικούς', en: 'A church for sailors' },
        { el: 'Μια αγορά για τυριά', en: 'A market for cheese' },
      ],
      explanation: {
        el:
          'Η πόλη δεν είχε βασιλιά τότε· είχε εμπόρους, και οι έμποροι έχτισαν στον εαυτό ' +
          'τους το πιο μεγαλόπρεπο δημαρχείο της Ευρώπης. Παλάτι έγινε το 1808.',
        en:
          'The city had no king back then; it had merchants, and the merchants built ' +
          'themselves the grandest town hall in Europe. It became a palace in 1808.',
      },
    },
  },

  // ---------------------------------------------------------------- westerkerk
  {
    id: 'amsterdam-westerkerk',
    cityId: 'amsterdam',
    emoji: '⛪',
    category: 'landmark',
    difficulty: 2,

    name: { el: 'Βέστερκερκ', en: 'Westerkerk' },
    tagline: {
      el: 'Ο ψηλότερος πύργος της πόλης φοράει το στέμμα ενός αυτοκράτορα',
      en: 'The tallest tower in the city wears an emperor’s crown',
    },
    story: {
      el:
        'Πριν από τετρακόσια χρόνια το Άμστερνταμ είχε γεμίσει κόσμο και δεν χωρούσε πια μέσα ' +
        'στα τείχη του. Έτσι, από το 1613, η πόλη έσκαψε τρία μεγάλα κανάλια σε σχήμα ' +
        'μισοφέγγαρου γύρω από την παλιά πόλη: το Herengracht, το Keizersgracht και το ' +
        'Prinsengracht. Στην όχθη του Prinsengracht σηκώθηκε η Westerkerk, από το 1620 ως το ' +
        '1631, σε σχέδια του Hendrick de Keyser, και ο πύργος της είναι ακόμη ο ψηλότερος ' +
        'πύργος εκκλησίας στο Άμστερνταμ, περίπου 87 μέτρα. Στην κορυφή του κάθεται ένα ' +
        'στέμμα, μπλε και χρυσό. Είναι το στέμμα του αυτοκράτορα Μαξιμιλιανού, που το 1489 ' +
        'επέτρεψε στην πόλη να το βάλει στο οικόσημό της, και το Άμστερνταμ το φοράει με ' +
        'καμάρι από τότε. Μέσα στην εκκλησία είναι θαμμένος ο Rembrandt, ο πιο διάσημος ' +
        'ζωγράφος της Ολλανδίας. Πέθανε φτωχός το 1669 και θάφτηκε σε νοικιασμένο τάφο, και ' +
        'κανείς δεν ξέρει ακριβώς πού. Οι καμπάνες του πύργου χύθηκαν από τον François Hemony ' +
        'το 1658 και παίζουν ακόμη μελωδίες πάνω από το νερό κάθε τέταρτο της ώρας. Η Anne ' +
        'Frank, κρυμμένη στο διπλανό κτίριο, έγραψε ότι ο ήχος τους την παρηγορούσε.',
      en:
        'Four hundred years ago Amsterdam was bursting with people and no longer fitted ' +
        'inside its walls. So from 1613 the city dug three great canals in the shape of a ' +
        'half-moon around the old town: the Herengracht, the Keizersgracht and the ' +
        'Prinsengracht. On the bank of the Prinsengracht the Westerkerk went up between 1620 ' +
        'and 1631, designed by Hendrick de Keyser, and its tower is still the tallest church ' +
        'tower in Amsterdam, about 87 metres. On the very top sits a crown, blue and gold. It ' +
        'is the crown of Emperor Maximilian, who in 1489 allowed the city to put it on its ' +
        'coat of arms, and Amsterdam has worn it proudly ever since. Inside the church lies ' +
        'Rembrandt, the most famous painter of the Netherlands. He died poor in 1669 and was ' +
        'buried in a rented grave, and nobody knows exactly where. The bells in the tower ' +
        'were cast by François Hemony in 1658, and they still play tunes over the water ' +
        'every quarter of an hour. Anne Frank, hiding in the building next door, wrote that ' +
        'she found their sound comforting.',
    },
    facts: [
      {
        el: 'Ο πύργος φτάνει περίπου τα 87 μέτρα, ο ψηλότερος πύργος εκκλησίας της πόλης.',
        en: 'The tower reaches about 87 metres, the tallest church tower in the city.',
      },
      {
        el: 'Χτίστηκε από το 1620 ως το 1631 και εγκαινιάστηκε στις 8 Ιουνίου 1631.',
        en: 'It was built from 1620 to 1631 and inaugurated on 8 June 1631.',
      },
      {
        el: 'Ο Rembrandt θάφτηκε εδώ στις 8 Οκτωβρίου 1669· ο αριθμός του τάφου του χάθηκε.',
        en: 'Rembrandt was buried here on 8 October 1669; the number of his grave was lost.',
      },
      {
        el: 'Ο δακτύλιος των καναλιών είναι Μνημείο Παγκόσμιας Κληρονομιάς της UNESCO από το 2010.',
        en: 'The canal ring has been a UNESCO World Heritage Site since 2010.',
      },
    ],
    location: {
      lat: 52.3745,
      lng: 4.8839,
      anchor: 'centroid',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q1130722', deltaM: 0 },
        { kind: 'osm', ref: 'way/99205257', deltaM: 7 },
        { kind: 'wikipedia', ref: 'Westerkerk', deltaM: 21 },
      ],
      verifiedAt: '2026-09-12',
      map: { x: 0.439, y: 0.282 },
    },
    question: {
      q: {
        el: 'Τι κάθεται στην κορυφή του πύργου;',
        en: 'What sits on the very top of the tower?',
      },
      answers: [
        { el: 'Ένα στέμμα αυτοκράτορα', en: 'An emperor’s crown' },
        { el: 'Ένας χρυσός πετεινός', en: 'A weathercock of gold' },
        { el: 'Ένα ιστιοφόρο καράβι', en: 'A sailing ship' },
        { el: 'Ένα μπρούντζινο λιοντάρι', en: 'A bronze lion' },
      ],
      explanation: {
        el:
          'Το 1489 ο αυτοκράτορας Μαξιμιλιανός άφησε το Άμστερνταμ να βάλει το στέμμα του ' +
          'στο οικόσημό του. Η πόλη το έβαλε και στην κορυφή του πύργου.',
        en:
          'In 1489 Emperor Maximilian let Amsterdam put his crown on its coat of arms. The ' +
          'city put it on top of the tower too.',
      },
    },
  },

  // --------------------------------------------------------- anne frank house
  {
    id: 'amsterdam-anne-frank-house',
    cityId: 'amsterdam',
    emoji: '📔',
    category: 'history',
    difficulty: 3,

    name: { el: 'Το Σπίτι της Anne Frank', en: 'Anne Frank House' },
    tagline: {
      el: 'Το σπίτι όπου ένα κορίτσι έγραψε το ημερολόγιο που διάβασε ο κόσμος',
      en: 'The house where a girl wrote a diary the whole world read',
    },
    story: {
      el:
        'Η Anne Frank γεννήθηκε στη Φρανκφούρτη το 1929 και ήρθε στο Άμστερνταμ τεσσάρων ' +
        'χρονών, γιατί η Γερμανία είχε γίνει επικίνδυνη για τις εβραϊκές οικογένειες. Στα ' +
        'δέκατα τρίτα γενέθλιά της, στις 12 Ιουνίου 1942, πήρε δώρο ένα ημερολόγιο με ' +
        'κόκκινο και άσπρο καρό εξώφυλλο. Τρεις εβδομάδες αργότερα η οικογένειά της κρύφτηκε ' +
        'στα πίσω δωμάτια αυτού του κτιρίου, όπου ο πατέρας της, ο Otto, είχε το γραφείο του. ' +
        'Μια βιβλιοθήκη έκρυβε την πόρτα. Οκτώ άνθρωποι έζησαν πίσω της δύο χρόνια και έναν ' +
        'μήνα, χωρίς να βγουν ποτέ έξω, και η Anne έγραφε σχεδόν κάθε μέρα: για τους ' +
        'καβγάδες, για τις καμπάνες της Westerkerk, για το όνειρό της να γίνει συγγραφέας. ' +
        'Στις 4 Αυγούστου 1944 τους βρήκαν και τους συνέλαβαν. Η Anne και η αδερφή της η ' +
        'Margot πέθαναν στο στρατόπεδο Μπέργκεν-Μπέλσεν στις αρχές του 1945. Μόνο ο Otto ' +
        'γύρισε. Φίλοι είχαν φυλάξει το ημερολόγιο, και το εξέδωσε το 1947, γιατί η Anne ' +
        'ήθελε να διαβαστούν τα λόγια της. Διαβάστηκαν, σε περισσότερες από εβδομήντα ' +
        'γλώσσες. Τα δωμάτια είναι ακόμη άδεια, όπως ζήτησε ο Otto, και οι μολυβιές στον ' +
        'τοίχο, εκεί που μετρούσαν το ύψος των κοριτσιών, είναι ακόμη εκεί. Το μουσείο δέχεται ' +
        'παιδιά από δέκα ετών.',
      en:
        'Anne Frank was born in Frankfurt in 1929 and came to Amsterdam when she was four, ' +
        'because Germany had become dangerous for Jewish families. For her thirteenth ' +
        'birthday, on 12 June 1942, she was given a diary with a red and white checked cover. ' +
        'Three weeks later her family went into hiding in the back rooms of this building, ' +
        'where her father Otto had his office. A bookcase hid the door. Eight people lived ' +
        'behind it for two years and one month, never going outside, and Anne wrote almost ' +
        'every day: about the quarrels, about the Westerkerk bells, about her dream of ' +
        'becoming a writer. On 4 August 1944 they were found and arrested. Anne and her ' +
        'sister Margot died in the Bergen-Belsen camp in early 1945. Only Otto came back. ' +
        'Friends had saved the diary, and he published it in 1947, because Anne had wanted ' +
        'her words to be read. They have been, in more than seventy languages. The rooms are ' +
        'still empty, as Otto asked, and the pencil marks on the wall where the girls’ ' +
        'heights were measured are still there. The museum admits children from the age of ' +
        'ten.',
    },
    facts: [
      {
        el: 'Η Anne πήρε το ημερολόγιο στις 12 Ιουνίου 1942, στα δέκατα τρίτα γενέθλιά της.',
        en: 'Anne was given the diary on 12 June 1942, on her thirteenth birthday.',
      },
      {
        el: 'Η οικογένεια κρύφτηκε από τις 6 Ιουλίου 1942 ως τις 4 Αυγούστου 1944.',
        en: 'The family hid from 6 July 1942 until 4 August 1944.',
      },
      {
        el: 'Το ημερολόγιο εκδόθηκε το 1947 και έχει μεταφραστεί σε περισσότερες από 70 γλώσσες.',
        en: 'The diary was published in 1947 and has been translated into more than 70 languages.',
      },
      {
        el: 'Το μουσείο άνοιξε στις 3 Μαΐου 1960 και δέχεται παιδιά από 10 ετών.',
        en: 'The museum opened on 3 May 1960 and admits children from the age of 10.',
      },
    ],
    location: {
      lat: 52.37515,
      lng: 4.88404,
      anchor: 'centroid',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q165366', deltaM: 0 },
        { kind: 'osm', ref: 'way/601081859', deltaM: 4 },
        { kind: 'wikipedia', ref: 'Anne Frank House', deltaM: 22 },
      ],
      verifiedAt: '2026-09-12',
      map: { x: 0.44, y: 0.27 },
      // The museum's own practical-information page: "The entrance to the museum is
      // around the corner, at Westermarkt 20." (annefrank.org/en/museum/practical-information/)
      findIt: {
        el: 'Η είσοδος του μουσείου είναι στη γωνία, στο Westermarkt 20, δίπλα στην εκκλησία, όχι στην παλιά πόρτα του καναλιού.',
        en: 'The museum entrance is around the corner at Westermarkt 20, beside the church, not the old front door on the canal.',
      },
    },
    question: {
      q: {
        el: 'Τι έκρυβε την πόρτα προς τα μυστικά δωμάτια;',
        en: 'What hid the door to the secret rooms?',
      },
      answers: [
        { el: 'Μια βιβλιοθήκη', en: 'A bookcase' },
        { el: 'Μια ντουλάπα', en: 'A wardrobe' },
        { el: 'Ένας μεγάλος καθρέφτης', en: 'A tall mirror' },
        { el: 'Μια κουρτίνα', en: 'A curtain' },
      ],
      explanation: {
        el:
          'Μια βιβλιοθήκη που άνοιγε σαν πόρτα, φτιαγμένη το 1942 από τον πατέρα μιας από ' +
          'τις γυναίκες που τους βοηθούσαν. Όποιος έμπαινε στο γραφείο έβλεπε μόνο βιβλία.',
        en:
          'A bookcase that swung open like a door, built in 1942 by the father of one of the ' +
          'women who helped them. Anyone coming into the office saw only books.',
      },
    },
  },

  // -------------------------------------------------------------- bloemenmarkt
  {
    id: 'amsterdam-bloemenmarkt',
    cityId: 'amsterdam',
    emoji: '🌷',
    category: 'nature',
    difficulty: 1,

    name: { el: 'Μπλούμενμαρκτ', en: 'Bloemenmarkt' },
    tagline: {
      el: 'Μια αγορά λουλουδιών που επιπλέει',
      en: 'A flower market that floats',
    },
    story: {
      el:
        'Από το 1862 πουλιούνται εδώ λουλούδια, πάνω στο κανάλι Singel. Οι καλλιεργητές τα ' +
        'έφερναν με βάρκες από τα χωράφια έξω από την πόλη και τα πουλούσαν κατευθείαν από το ' +
        'κατάστρωμα, και η αγορά δεν έφυγε ποτέ από το νερό: τα δεκαπέντε μαγαζάκια της ' +
        'στέκονται ακόμη πάνω σε μαούνες δεμένες στην όχθη, και έτσι είναι η μόνη πλωτή αγορά ' +
        'λουλουδιών στον κόσμο. Το λουλούδι που βασιλεύει εδώ είναι η τουλίπα. Ήρθε στην ' +
        'Ολλανδία πριν από περισσότερα από τετρακόσια χρόνια από τα μέρη της σημερινής ' +
        'Τουρκίας, και οι Ολλανδοί την ερωτεύτηκαν τόσο, που τον χειμώνα του 1637 ένας μόνο ' +
        'σπάνιος βολβός πουλιόταν για περισσότερα από όσα έβγαζε ένας καλός τεχνίτης σε δέκα ' +
        'χρόνια. Μετά οι τιμές κατέρρευσαν. Σήμερα τα περισσότερα μαγαζάκια πουλούν βολβούς, ' +
        'ξύλινες τουλίπες και σουβενίρ, όχι κομμένα λουλούδια. Στην άκρη της αγοράς στέκεται ' +
        'η Munttoren, ο Πύργος του Νομισματοκοπείου, κάποτε κομμάτι μιας μεσαιωνικής πύλης. ' +
        'Το 1672, μια χρονιά πολέμου, δεν ήταν ασφαλές να μεταφέρουν το ασήμι στις πόλεις ' +
        'όπου έκοβαν κανονικά νομίσματα, κι έτσι για δύο χρόνια τα έκοβαν εδώ. Το όνομα ' +
        'έμεινε. Οι καμπάνες του, φτιαγμένες από τον Pieter Hemony το 1668, παίζουν ακόμη.',
      en:
        'Since 1862 flowers have been sold here on the Singel canal. The growers used to ' +
        'bring them in by boat from the fields outside the city and sell them straight off ' +
        'the deck, and the market never left the water: its fifteen shops still stand on ' +
        'barges moored to the bank, which makes it the only floating flower market in the ' +
        'world. The flower that rules here is the tulip. It came to the Netherlands more than ' +
        'four hundred years ago from the lands of today’s Turkey, and the Dutch fell so hard ' +
        'for it that in the winter of 1637 a single rare bulb could sell for more than ten ' +
        'times what a skilled craftsman earned in a year. Then the prices collapsed. Today ' +
        'most stalls sell bulbs, wooden tulips and souvenirs rather than cut flowers. At the ' +
        'end of the market stands the Munttoren, the Mint Tower, once part of a medieval city ' +
        'gate. In 1672, a year of war, it was not safe to carry silver to the towns where ' +
        'coins were normally made, so for two years coins were struck here instead, and the ' +
        'name stuck. Its bells, made by Pieter Hemony in 1668, still play.',
    },
    facts: [
      {
        el: 'Η αγορά υπάρχει από το 1862 και τα δεκαπέντε μαγαζάκια της στέκονται σε μαούνες.',
        en: 'The market has been here since 1862 and its fifteen shops stand on barges.',
      },
      {
        el: 'Τον Φεβρουάριο του 1637 κάποιοι βολβοί τουλίπας πουλήθηκαν για πάνω από δέκα φορές τον ετήσιο μισθό ενός τεχνίτη.',
        en: 'In February 1637 some tulip bulbs sold for more than ten times a craftsman’s yearly wage.',
      },
      {
        el: 'Στη Munttoren κόπηκαν νομίσματα μόνο το 1672–1673, σε μια χρονιά πολέμου.',
        en: 'Coins were struck in the Munttoren only in 1672–1673, in a year of war.',
      },
    ],
    location: {
      lat: 52.36678,
      lng: 4.89135,
      anchor: 'area',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q643079', deltaM: 0 },
        { kind: 'osm', ref: 'way/145953534', deltaM: 20 },
        { kind: 'wikipedia', ref: 'Bloemenmarkt', deltaM: 42 },
      ],
      verifiedAt: '2026-09-12',
      map: { x: 0.513, y: 0.422 },
      note: 'An area pin on a market 200 m long; Wikipedia sits 42 m from it.',
    },
    question: {
      q: {
        el: 'Πάνω σε τι στέκονται τα μαγαζάκια της αγοράς;',
        en: 'What do the market’s shops stand on?',
      },
      answers: [
        { el: 'Σε μαούνες στο κανάλι', en: 'Barges on the canal' },
        { el: 'Σε πασσάλους μέσα στο νερό', en: 'Stilts in the water' },
        { el: 'Σε μια ξύλινη γέφυρα', en: 'A wooden bridge' },
        { el: 'Στο παλιό τείχος της πόλης', en: 'The old city wall' },
      ],
      explanation: {
        el:
          'Οι καλλιεργητές έφερναν τα λουλούδια με βάρκες και πουλούσαν από το κατάστρωμα. ' +
          'Η αγορά έμεινε εκεί που γεννήθηκε: πάνω στο νερό.',
        en:
          'The growers brought the flowers by boat and sold from the deck. The market stayed ' +
          'where it was born: on the water.',
      },
    },
  },

  // --------------------------------------------------------------- magere brug
  {
    id: 'amsterdam-magere-brug',
    cityId: 'amsterdam',
    emoji: '🌉',
    category: 'science',
    difficulty: 2,

    name: { el: 'Μάχερε Μπρουχ', en: 'Magere Brug' },
    tagline: {
      el: 'Μια λευκή γέφυρα που ανοίγει σαν τραμπάλα',
      en: 'A white bridge that opens like a seesaw',
    },
    story: {
      el:
        'Η πρώτη γέφυρα εδώ χτίστηκε το 1691 και ήταν τόσο στενή, που δύο άνθρωποι δύσκολα ' +
        'περνούσαν ο ένας δίπλα στον άλλο, γι’ αυτό ο κόσμος την είπε Magere Brug, την ' +
        'Αδύνατη Γέφυρα. Ένας θρύλος λέει ότι την πλήρωσαν δύο αδερφές με το επίθετο Mager, ' +
        'που έμεναν στις δύο όχθες του Amstel και ήθελαν να επισκέπτονται η μία την άλλη. Η ' +
        'γέφυρα που βλέπεις χτίστηκε το 1934, σε σχέδια του Piet Kramer, στο παλιό στιλ, από ' +
        'ξύλο βαμμένο άσπρο. Είναι κινητή γέφυρα: όταν έρχεται ψηλή βάρκα, τα δύο μισά της ' +
        'σηκώνονται σαν τις άκρες μιας τραμπάλας. Κοίτα πάνω από το άνοιγμα και θα δεις τα ' +
        'ξύλινα πλαίσια που κάνουν το σήκωμα· στην πίσω τους άκρη έχουν βαριά αντίβαρα, έτσι ' +
        'ένα μικρό σπρώξιμο κινεί ένα μεγάλο κατάστρωμα. Ως το 1994 ο γεφυροφύλακας την ' +
        'άνοιγε με το χέρι. Τώρα το κάνει ένα μοτέρ, αλλά τα αντίβαρα κάνουν ακόμη το ' +
        'περισσότερο από τη δουλειά. Από το 2003 περνούν μόνο πεζοί και ποδήλατα. Το βράδυ ' +
        'ανάβουν περίπου 1.200 μικρά λαμπάκια, και η γέφυρα γίνεται το πιο φωτογραφημένο ' +
        'πράγμα στο ποτάμι.',
      en:
        'The first bridge here was built in 1691 and was so narrow that two people could ' +
        'hardly pass each other, so people called it Magere Brug, the Skinny Bridge. A legend ' +
        'says it was paid for by two sisters named Mager who lived on opposite banks of the ' +
        'Amstel and wanted to visit each other. The bridge you see was built in 1934 to a ' +
        'design by Piet Kramer, in the old style, of wood painted white. It is a bascule ' +
        'bridge: when a tall boat comes, its two halves swing up like the ends of a seesaw. ' +
        'Look above the opening and you will see the wooden frames that do the lifting; they ' +
        'carry heavy counterweights at the back, so a small push moves a big deck. Until 1994 ' +
        'the bridge keeper opened it by hand. Now a motor does it, but the counterweights ' +
        'still do most of the work. Since 2003 only walkers and cyclists may cross. In the ' +
        'evening about 1,200 little lights come on, and the bridge becomes the most ' +
        'photographed thing on the river.',
    },
    facts: [
      {
        el: 'Η πρώτη γέφυρα εδώ χτίστηκε το 1691· η σημερινή είναι του 1934.',
        en: 'The first bridge here was built in 1691; the present one dates from 1934.',
      },
      {
        el: 'Ως το 1994 άνοιγε με το χέρι.',
        en: 'Until 1994 it was opened by hand.',
      },
      {
        el: 'Από το 2003 περνούν μόνο πεζοί και ποδήλατα, και το βράδυ ανάβουν 1.200 λαμπάκια.',
        en: 'Since 2003 only walkers and cyclists cross it, and 1,200 lights come on at night.',
      },
    ],
    location: {
      lat: 52.36359,
      lng: 4.90236,
      anchor: 'centroid',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q1344400', deltaM: 0 },
        { kind: 'osm', ref: 'way/601096321', deltaM: 1 },
        { kind: 'wikipedia', ref: 'Magere Brug', deltaM: 10 },
      ],
      verifiedAt: '2026-09-12',
      map: { x: 0.624, y: 0.48 },
    },
    question: {
      q: {
        el: 'Γιατί σηκώνει τόσο εύκολα η γέφυρα τα δύο μισά της;',
        en: 'Why can the bridge lift its two halves so easily?',
      },
      answers: [
        { el: 'Έχει βαριά αντίβαρα', en: 'Heavy counterweights' },
        { el: 'Έχει πολύ λεπτές σανίδες', en: 'Very thin wooden planks' },
        { el: 'Έχει αέρα μέσα στο κατάστρωμα', en: 'Air pumped into the deck' },
        { el: 'Την τραβούν άλογα με σχοινιά', en: 'Ropes pulled by horses' },
      ],
      explanation: {
        el:
          'Όπως στην τραμπάλα: ένα βάρος στη μία άκρη σηκώνει ένα βάρος στην άλλη. Τα ' +
          'αντίβαρα κάνουν το κατάστρωμα σχεδόν αβαρές, και ένα μοτέρ, ή παλιά ένα χέρι, ' +
          'κάνει το υπόλοιπο.',
        en:
          'Like a seesaw: a weight at one end lifts a weight at the other. The counterweights ' +
          'make the deck almost weightless, and a motor, or once a hand, does the rest.',
      },
    },
  },

  // --------------------------------------------------------------- rijksmuseum
  {
    id: 'amsterdam-rijksmuseum',
    cityId: 'amsterdam',
    emoji: '🖼️',
    category: 'museum',
    difficulty: 2,

    name: { el: 'Ράικσμουζεουμ', en: 'Rijksmuseum' },
    tagline: {
      el: 'Το μεγάλο μουσείο με έναν δρόμο για ποδήλατα στη μέση του',
      en: 'The great museum with a bicycle road through its middle',
    },
    story: {
      el:
        'Ο Pierre Cuypers, ο αρχιτέκτονας του σταθμού, σχεδίασε πρώτα αυτό το κτίριο: άνοιξε ' +
        'το 1885 σαν πύλη στην άκρη της πόλης, με έναν δρόμο να περνάει ακριβώς από μέσα του. ' +
        'Ο δρόμος υπάρχει ακόμη. Οι ποδηλάτες περνούν κάτω από το μουσείο από τη μέρα που ' +
        'άνοιξε, και όταν το κτίριο ανακαινίστηκε αρνήθηκαν να χάσουν το πέρασμά τους, και ' +
        'κέρδισαν. Η ανακαίνιση κράτησε δέκα χρόνια, από το 2003 ως το 2013, και κόστισε 375 ' +
        'εκατομμύρια ευρώ. Μέσα φυλάγονται οι θησαυροί της Ολλανδίας: περίπου 8.000 ' +
        'αντικείμενα εκτίθενται, από ένα εκατομμύριο που έχει η συλλογή. Το πιο διάσημο είναι ' +
        'η Νυχτερινή Περίπολος του Rembrandt, από το 1642, ένας πίνακας ψηλότερος από έναν ' +
        'ενήλικα και μακρύς όσο ένα αυτοκίνητο, που δείχνει τους φρουρούς της πόλης να ' +
        'ξεκινούν. Υπάρχουν επίσης η Γαλατού του Vermeer, ένα κουκλόσπιτο που κόστισε όσο ' +
        'ένα αληθινό σπίτι στο κανάλι, ένα μοντέλο πολεμικού πλοίου τεσσάρων μέτρων και ένα ' +
        'μαχητικό αεροπλάνο του 1918. Πίσω από το μουσείο, στο γρασίδι της Museumplein, οι ' +
        'οικογένειες κάνουν πικνίκ, και τον χειμώνα στήνεται παγοδρόμιο με τους δύο πύργους ' +
        'για σκηνικό. Ο κήπος γύρω από το κτίριο είναι δωρεάν.',
      en:
        'Pierre Cuypers, the architect of the station, designed this building first: it ' +
        'opened in 1885 like a gateway at the edge of the city, with a road running right ' +
        'through it. That road is still there. Cyclists have ridden under the museum since ' +
        'the day it opened, and when the building was renovated they refused to give up ' +
        'their passage, and won. The renovation took ten years, from 2003 to 2013, and cost ' +
        '375 million euros. Inside are the treasures of the Netherlands: about 8,000 objects ' +
        'on show, out of a million in the collection. The most famous is Rembrandt’s Night ' +
        'Watch of 1642, a painting taller than a grown-up and as long as a car, showing the ' +
        'city’s guards setting out. There are also Vermeer’s Milkmaid, a dolls’ house that ' +
        'cost as much as a real canal house, a warship model four metres long and a fighter ' +
        'plane from 1918. Behind the museum, on the lawn of the Museumplein, families picnic, ' +
        'and in winter a skating rink is set up with the two towers as a backdrop. The garden ' +
        'around the building is free.',
    },
    facts: [
      {
        el: 'Άνοιξε το 1885, σε σχέδια του Pierre Cuypers, τέσσερα χρόνια πριν από τον σταθμό.',
        en: 'It opened in 1885, designed by Pierre Cuypers, four years before the station.',
      },
      {
        el: 'Η ανακαίνιση κράτησε από το 2003 ως το 2013 και κόστισε 375 εκατομμύρια ευρώ.',
        en: 'The renovation ran from 2003 to 2013 and cost 375 million euros.',
      },
      {
        el: 'Εκθέτει περίπου 8.000 αντικείμενα από μια συλλογή ενός εκατομμυρίου.',
        en: 'It shows about 8,000 objects from a collection of one million.',
      },
      {
        el: 'Το 2014 το επισκέφθηκαν 2.474.352 άνθρωποι, περισσότεροι από κάθε άλλο μουσείο της Ολλανδίας.',
        en: 'In 2014 it had 2,474,352 visitors, more than any other museum in the Netherlands.',
      },
    ],
    location: {
      lat: 52.36,
      lng: 4.88528,
      anchor: 'centroid',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q190804', deltaM: 0 },
        { kind: 'osm', ref: 'way/29989787', deltaM: 25 },
        { kind: 'wikipedia', ref: 'Rijksmuseum', deltaM: 1 },
      ],
      verifiedAt: '2026-09-12',
      map: { x: 0.453, y: 0.545 },
      // The museum's access page: both entrances are in the passage that runs under the
      // building; coming from the Museumplein side they are on your left, one with stairs
      // and one with a lift, both leading to the Atrium.
      // (rijksmuseum.nl/en/visit/accessibility/access-to-the-museum)
      findIt: {
        el: 'Οι δύο είσοδοι είναι μέσα στη δίοδο που περνάει κάτω από το κτίριο. Αν μπεις από την πλευρά της Museumplein, είναι στα αριστερά σου.',
        en: 'Both entrances are inside the passage that runs under the building. Coming in from the Museumplein side, they are on your left.',
      },
    },
    question: {
      q: {
        el: 'Ποιοι περνούν κάθε μέρα μέσα από τη δίοδο κάτω από το μουσείο;',
        en: 'Who goes through the passage under the museum every day?',
      },
      answers: [
        { el: 'Ποδηλάτες', en: 'Cyclists' },
        { el: 'Τα τραμ της πόλης', en: 'Trams' },
        { el: 'Τουριστικά λεωφορεία', en: 'Tour buses' },
        { el: 'Άμαξες με άλογα', en: 'Horse carts' },
      ],
      explanation: {
        el:
          'Η δίοδος φτιάχτηκε το 1885 για άμαξες. Σήμερα ανήκει στα ποδήλατα, γιατί όταν το ' +
          'μουσείο θέλησε να την κλείσει, οι ποδηλάτες της πόλης δεν το δέχτηκαν.',
        en:
          'The passage was built in 1885 for carriages. Today it belongs to bicycles, because ' +
          'when the museum wanted to close it, the city’s cyclists would not have it.',
      },
    },

    museum: {
      doorNote: {
        el: 'Κοίτα ψηλά μέσα στη δίοδο πριν μπεις: τα ποδήλατα περνούν από τη μέση, εσύ μπαίνεις από το πλάι.',
        en: 'Look up inside the passage before you go in: the bicycles go through the middle, you go in from the side.',
      },
      rooms: [
        {
          id: 'amsterdam-rijksmuseum-gallery-of-honour',
          emoji: '🎖️',
          name: { el: 'Η Αίθουσα των Τιμών', en: 'The Gallery of Honour' },
          intro: {
            el:
              'Μία μακριά αίθουσα, με τη Νυχτερινή Περίπολο στο βάθος της. Εδώ κρέμονται οι ' +
              'ζωγράφοι του ολλανδικού Χρυσού Αιώνα, και οι περισσότεροι ζωγράφισαν συνηθισμένα ' +
              'πράγματα: μια γυναίκα που χύνει γάλα, έναν κύκνο που φυλάει τη φωλιά του, μια ' +
              'ομάδα φρουρών που ετοιμάζεται. Κοίτα από κοντά και τους μικρούς πίνακες, όχι ' +
              'μόνο τον γίγαντα· οι μικροί συχνά κρύβουν περισσότερα.',
            en:
              'One long hall, with the Night Watch at the end of it. The painters of the Dutch ' +
              'Golden Age hang here, and most of them painted ordinary things: a woman ' +
              'pouring milk, a swan guarding its nest, a company of guards getting ready. ' +
              'Look closely at the small pictures as well as the giant one; the small ones ' +
              'often hide more.',
          },
          exhibits: [
            {
              id: 'amsterdam-rijksmuseum-night-watch',
              name: { el: 'Η Νυχτερινή Περίπολος', en: 'The Night Watch' },
              blurb: {
                el:
                  'Ο Rembrandt τον ζωγράφισε το 1642 για μια ομάδα της πολιτοφυλακής του ' +
                  'Άμστερνταμ, τους πολίτες που φύλαγαν την πόλη. Είναι 363 επί 437 εκατοστά, ' +
                  'ζυγίζει 337 κιλά και δείχνει 34 πρόσωπα. Δεν είναι καθόλου νυχτερινή σκηνή: ' +
                  'στρώσεις σκούρου βερνικιού τον έκαναν να μοιάζει σκοτεινός, και το όνομα ' +
                  'έμεινε. Το 1715 τον έκοψαν και από τις τέσσερις πλευρές για να χωρέσει σε ' +
                  'έναν τοίχο του δημαρχείου, και δύο μορφές στα αριστερά χάθηκαν. Το 2021 το ' +
                  'μουσείο ξαναέφτιαξε τις χαμένες λωρίδες με έναν υπολογιστή και ένα παλιό ' +
                  'αντίγραφο.',
                en:
                  'Rembrandt painted this in 1642 for a company of Amsterdam’s militia, the ' +
                  'citizens who guarded the city. It is 363 by 437 centimetres, weighs 337 ' +
                  'kilograms and shows 34 people. It is not a night scene at all: layers of ' +
                  'dark varnish made it look gloomy, and the name stuck. In 1715 it was cut ' +
                  'down on all four sides to fit a wall in the town hall, and two figures on ' +
                  'the left were lost. In 2021 the museum recreated the missing strips with a ' +
                  'computer and an old copy.',
              },
              question: {
                q: {
                  el: 'Γιατί ο πίνακας λέγεται «Νυχτερινή Περίπολος»;',
                  en: 'Why is the painting called the Night Watch?',
                },
                answers: [
                  { el: 'Από το σκούρο βερνίκι', en: 'Old dark varnish' },
                  { el: 'Δείχνει μεσάνυχτα', en: 'It shows midnight' },
                  { el: 'Οι φρουροί δούλευαν νύχτα', en: 'The guards worked nights' },
                  { el: 'Έτσι το ονόμασε ο Rembrandt', en: 'Rembrandt named it so' },
                ],
                explanation: {
                  el: 'Το βερνίκι σκούρυνε με τα χρόνια και η σκηνή μέρας έμοιαζε νύχτα. Το βερνίκι αφαιρέθηκε τη δεκαετία του 1940, αλλά το όνομα έμεινε.',
                  en: 'The varnish darkened over the years and a daytime scene looked like night. The varnish came off in the 1940s, but the name stayed.',
                },
              },
            },
            {
              id: 'amsterdam-rijksmuseum-milkmaid',
              name: { el: 'Η Γαλατού', en: 'The Milkmaid' },
              blurb: {
                el:
                  'Ο Johannes Vermeer ζωγράφισε αυτή τη μικρή εικόνα γύρω στο 1657, και είναι ' +
                  'μόνο 45 επί 41 εκατοστά. Μια υπηρέτρια χύνει γάλα από μια κανάτα, αργά, σαν ' +
                  'να μη θέλει να χυθεί σταγόνα. Στο τραπέζι ψωμί, στο πάτωμα μια θερμάστρα για ' +
                  'τα πόδια, στον τοίχο πλακάκια από το Delft και ένα καρφί που δεν κρατάει ' +
                  'τίποτα. Ο Vermeer έφτιαξε το μπλε της ποδιάς της από θρυμματισμένο λάπις ' +
                  'λάζουλι, μια πέτρα ακριβότερη από τον χρυσό, τότε που άλλοι ζωγράφοι ' +
                  'χρησιμοποιούσαν φθηνότερα μπλε. Το μουσείο αγόρασε τον πίνακα το 1908, με ' +
                  'χρήματα από το κράτος και από απλούς πολίτες.',
                en:
                  'Johannes Vermeer painted this small picture around 1657, and it is only 45 by ' +
                  '41 centimetres. A kitchen maid pours milk from a jug, slowly, as if she does ' +
                  'not want to spill a drop. On the table lies bread, on the floor a foot ' +
                  'warmer, on the wall tiles from Delft and a nail with nothing hanging from ' +
                  'it. Vermeer made the blue of her apron from crushed lapis lazuli, a stone ' +
                  'dearer than gold, at a time when other painters used cheaper blues. The ' +
                  'museum bought the painting in 1908, with money from the state and from ' +
                  'ordinary people.',
              },
              question: {
                q: {
                  el: 'Από τι φτιάχτηκε το μπλε της ποδιάς της;',
                  en: 'What was the blue of her apron made from?',
                },
                answers: [
                  { el: 'Από την πέτρα λάπις λάζουλι', en: 'Crushed lapis lazuli' },
                  { el: 'Από χυμό μύρτιλου', en: 'Blueberry juice' },
                  { el: 'Από τριμμένο μπλε γυαλί', en: 'Ground blue glass' },
                  { el: 'Από λουλάκι φερμένο από την Ινδία', en: 'Indigo dye from India' },
                ],
                explanation: {
                  el: 'Το λάπις λάζουλι ερχόταν από το σημερινό Αφγανιστάν και κόστιζε περισσότερο από χρυσό. Ο Vermeer το χρησιμοποιούσε ακόμη και σε μια ποδιά υπηρέτριας.',
                  en: 'Lapis lazuli came from what is now Afghanistan and cost more than gold. Vermeer used it even on a servant’s apron.',
                },
              },
            },
            {
              id: 'amsterdam-rijksmuseum-threatened-swan',
              name: { el: 'Ο Απειλούμενος Κύκνος', en: 'The Threatened Swan' },
              blurb: {
                el:
                  'Ο Jan Asselijn ζωγράφισε αυτόν τον κύκνο σε φυσικό μέγεθος γύρω στο 1650. ' +
                  'Ένας σκύλος έχει πλησιάσει τη φωλιά, και ο κύκνος σηκώνεται με τα φτερά ' +
                  'ανοιχτά, σφυρίζοντας, έτοιμος να παλέψει για το αυγό του. Αργότερα κάποιος ' +
                  'έγραψε λέξεις πάνω στον πίνακα για να τον κάνει πολιτική: «ο εχθρός του ' +
                  'κράτους» πάνω από τον σκύλο, «Holland» πάνω στο αυγό, και το αξίωμα ενός ' +
                  'Ολλανδού ηγέτη ανάμεσα στα πόδια του κύκνου. Το 1800, όταν η Ολλανδία άνοιξε ' +
                  'την πρώτη εθνική πινακοθήκη της, αυτός ήταν ο πρώτος πίνακας που αγόρασε, ' +
                  'για 100 φιορίνια. Κρέμεται στο Rijksmuseum από τότε που άνοιξε το κτίριο, ' +
                  'το 1885.',
                en:
                  'Jan Asselijn painted this life-size swan around 1650. A dog has crept up on ' +
                  'the nest, and the swan rises with its wings spread, hissing, ready to fight ' +
                  'for its egg. Later somebody wrote words on the painting to turn it into ' +
                  'politics: “the enemy of the state” above the dog, “Holland” on the egg, and ' +
                  'the title of a Dutch leader between the swan’s legs. In 1800, when the ' +
                  'Netherlands opened its first national art gallery, this was the very first ' +
                  'painting it bought, for 100 guilders. It has hung in the Rijksmuseum since ' +
                  'the building opened in 1885.',
              },
              question: {
                q: {
                  el: 'Τι προστατεύει ο κύκνος;',
                  en: 'What is the swan protecting?',
                },
                answers: [
                  { el: 'Το αυγό του', en: 'Its egg' },
                  { el: 'Το φαγητό του', en: 'Its food' },
                  { el: 'Μια γέφυρα', en: 'A bridge' },
                  { el: 'Μια βάρκα', en: 'A boat' },
                ],
                explanation: {
                  el: 'Το αυγό βρίσκεται στη φωλιά, δεξιά, και πάνω του κάποιος έγραψε αργότερα «Holland»: ο κύκνος έγινε η χώρα που φυλάει το μέλλον της.',
                  en: 'The egg lies in the nest on the right, and later somebody wrote “Holland” on it: the swan became the country guarding its future.',
                },
              },
            },
          ],
        },
        {
          id: 'amsterdam-rijksmuseum-things-that-were-built',
          emoji: '🚢',
          name: { el: 'Πράγματα που χτίστηκαν', en: 'Things that were built' },
          intro: {
            el:
              'Δεν ζωγραφίστηκαν όλα εδώ μέσα. Μερικοί από τους θησαυρούς του μουσείου ' +
              'χτίστηκαν με τα χέρια, κομμάτι κομμάτι: ένα κουκλόσπιτο με αληθινή πορσελάνη, ' +
              'ένα πολεμικό πλοίο σε μινιατούρα με κάθε σχοινί στη θέση του, και ένα αεροπλάνο ' +
              'με ξύλινο σκελετό. Το καθένα σου λέει τι μπορούσαν να φτιάξουν οι άνθρωποι, και ' +
              'τι τους ένοιαζε αρκετά για να το φτιάξουν.',
            en:
              'Not everything in here was painted. Some of the museum’s treasures were built ' +
              'by hand, piece by piece: a dolls’ house with real porcelain in it, a warship in ' +
              'miniature with every rope in place, and an aeroplane with a wooden frame. Each ' +
              'one tells you what people could make, and what they cared about enough to ' +
              'make.',
          },
          exhibits: [
            {
              id: 'amsterdam-rijksmuseum-dolls-house',
              name: { el: 'Το κουκλόσπιτο της Petronella Oortman', en: 'Petronella Oortman’s dolls’ house' },
              blurb: {
                el:
                  'Η Petronella Oortman ήταν μια πλούσια κυρία του Άμστερνταμ που από το 1686 ' +
                  'ως το 1710 γέμιζε αυτό το ντουλάπι. Δεν ήταν ποτέ παιχνίδι. Τεχνίτες ' +
                  'έφτιαξαν κάθε αντικείμενο σε κλίμακα: μικροσκοπική πορσελάνη από την Κίνα ' +
                  'και την Ιαπωνία, ασημένια πιάτα, γυαλικά, λινά για τα κρεβάτια. Έχει ' +
                  'περίπου δέκα δωμάτια, από την κουζίνα ως τη βιβλιοθήκη. Της κόστισε μια ' +
                  'περιουσία, όσο ένα αληθινό σπίτι σε κανάλι, και γύρω στο 1710 έβαλε έναν ' +
                  'ζωγράφο, τον Jacob Appel, να το ζωγραφίσει, με τις κούκλες στις θέσεις τους. ' +
                  'Οι κούκλες χάθηκαν, αλλά το σπίτι στέκεται στο Rijksmuseum από το 1887.',
                en:
                  'Petronella Oortman was a rich Amsterdam woman who spent from 1686 to 1710 ' +
                  'filling this cabinet. It was never a toy. Craftsmen made every object to ' +
                  'scale: tiny porcelain from China and Japan, silver plates, glass, linen for ' +
                  'the beds. There are about ten rooms, from the kitchen to the library. It ' +
                  'cost her a fortune, as much as a real house on a canal, and around 1710 she ' +
                  'had a painter, Jacob Appel, paint its portrait, with the dolls in their ' +
                  'places. The dolls are gone now, but the house has stood in the Rijksmuseum ' +
                  'since 1887.',
              },
              question: {
                q: {
                  el: 'Για ποιον φτιάχτηκε το κουκλόσπιτο;',
                  en: 'Who was the dolls’ house made for?',
                },
                answers: [
                  { el: 'Για μια ενήλικη κυρία', en: 'A grown woman' },
                  { el: 'Για ένα μικρό κορίτσι', en: 'A little girl' },
                  { el: 'Για τον γιο ενός πρίγκιπα', en: 'A prince’s son' },
                  { el: 'Για ένα μαγαζί με κούκλες', en: 'A doll shop' },
                ],
                explanation: {
                  el: 'Οι πλούσιες κυρίες του Άμστερνταμ μάζευαν τέτοια σπίτια όπως άλλοι μάζευαν πίνακες. Ήταν για να τα δείχνεις, όχι για να παίζεις.',
                  en: 'Rich Amsterdam women collected houses like this the way others collected paintings. They were for showing, not for playing.',
                },
              },
            },
            {
              id: 'amsterdam-rijksmuseum-william-rex',
              name: { el: 'Το μοντέλο William Rex', en: 'The model of the William Rex' },
              blurb: {
                el:
                  'Αυτό το πολεμικό πλοίο είναι τέσσερα μέτρα μακρύ, έχει 74 κανόνια και δεν ' +
                  'βγήκε ποτέ στη θάλασσα. Χτίστηκε το 1698 στο ναυπηγείο του Vlissingen, εκεί ' +
                  'όπου χτίζονταν τα αληθινά πολεμικά, από τον Adriaen de Vriend και τον ' +
                  'Cornelis Moesman, και αρματώθηκε με κάθε πανί, άγκυρα και τροχαλία που θα ' +
                  'είχε ένα αληθινό πλοίο. Ένα αληθινό θα ήταν πάνω από δώδεκα φορές ' +
                  'μεγαλύτερο. Φτιάχτηκε για επίδειξη, για το Ναυαρχείο της Ζηλανδίας, και ' +
                  'στεκόταν στην αίθουσά του στο Middelburg. Κανείς δεν ξέρει ποιο πλοίο ' +
                  'παριστάνει, γι’ αυτό από τον 19ο αιώνα το λένε από το μονόγραμμα στην πρύμνη ' +
                  'του: William Rex, ο βασιλιάς Γουλιέλμος.',
                en:
                  'This warship is four metres long, carries 74 cannons and never went to sea. ' +
                  'It was built in 1698 at the shipyard of Vlissingen, where real warships were ' +
                  'built, by Adriaen de Vriend and Cornelis Moesman, and rigged with every ' +
                  'sail, anchor and pulley a real ship would have. A real one would have been ' +
                  'more than twelve times bigger. It was made as a showpiece for the Admiralty ' +
                  'of Zeeland and stood in their hall in Middelburg. Nobody knows which ship it ' +
                  'was meant to be, so since the 1800s it has been called after the monogram ' +
                  'on its stern: William Rex, King William.',
              },
              question: {
                q: {
                  el: 'Πόσα κανόνια έχει το μοντέλο;',
                  en: 'How many cannons does the model carry?',
                },
                answers: [
                  { el: 'Εβδομήντα τέσσερα', en: 'Seventy-four' },
                  { el: 'Δώδεκα', en: 'Twelve' },
                  { el: 'Εκατόν πενήντα δύο', en: 'A hundred and fifty-two' },
                  { el: 'Οκτώ', en: 'Eight' },
                ],
                explanation: {
                  el: 'Εβδομήντα τέσσερα, σε τρεις σειρές. Ένα αληθινό πλοίο με τόσα κανόνια ήθελε εκατοντάδες ναύτες για να τα χειριστεί.',
                  en: 'Seventy-four, in three rows. A real ship with that many cannons needed hundreds of sailors to work them.',
                },
              },
            },
            {
              id: 'amsterdam-rijksmuseum-bantam',
              name: { el: 'Το αεροπλάνο FK 23 Bantam', en: 'The FK 23 Bantam aeroplane' },
              blurb: {
                el:
                  'Αυτό το μικρό μαχητικό σχεδιάστηκε το 1918 από έναν Ολλανδό, τον Frits ' +
                  'Koolhoven, που ήταν αρχισχεδιαστής σε ένα εργοστάσιο αεροπλάνων στην Αγγλία ' +
                  'στον Πρώτο Παγκόσμιο Πόλεμο. Θα ήταν η βρετανική απάντηση στα γερμανικά ' +
                  'μαχητικά, αλλά ο πόλεμος τελείωσε πριν προλάβει να πολεμήσει. Ο κινητήρας ' +
                  'του το έφτανε στα 220 χιλιόμετρα την ώρα, και κάποτε είχε δύο πολυβόλα στη ' +
                  'μύτη του. Είναι το πιο παλιό αεροπλάνο της Ολλανδίας που σώζεται σχεδόν ' +
                  'ολόκληρο αυθεντικό. Το Rijksmuseum το αγόρασε το 2011 και το έβαλε στις ' +
                  'αίθουσες του 20ού αιώνα το 2013.',
                en:
                  'This small fighter plane was designed in 1918 by a Dutchman, Frits ' +
                  'Koolhoven, who was chief designer at an aircraft factory in England during ' +
                  'the First World War. It was meant to be the British answer to the German ' +
                  'fighters, but the war ended before it could fight. Its engine could push it ' +
                  'to 220 kilometres an hour, and it once carried two machine guns in its ' +
                  'nose. It is the oldest aeroplane in the Netherlands that survives almost ' +
                  'entirely original. The Rijksmuseum bought it in 2011 and put it on show in ' +
                  'the twentieth-century rooms in 2013.',
              },
              question: {
                q: {
                  el: 'Για ποια δουλειά φτιάχτηκε το Bantam;',
                  en: 'What was the Bantam built to do?',
                },
                answers: [
                  { el: 'Να πολεμάει στον αέρα', en: 'Fight in the air' },
                  { el: 'Να μεταφέρει γράμματα', en: 'Carry the post' },
                  { el: 'Να μεταφέρει επιβάτες', en: 'Carry passengers' },
                  { el: 'Να κερδίζει αγώνες', en: 'Win air races' },
                ],
                explanation: {
                  el: 'Σχεδιάστηκε για να πολεμήσει στον αέρα το 1918, με δύο πολυβόλα στη μύτη. Ο πόλεμος τελείωσε πριν πετάξει σε μάχη.',
                  en: 'It was designed to fight in the air in 1918, with two machine guns in its nose. The war ended before it flew in combat.',
                },
              },
            },
          ],
        },
        {
          id: 'amsterdam-rijksmuseum-the-building',
          emoji: '🏛️',
          name: { el: 'Το ίδιο το κτίριο', en: 'The building itself' },
          intro: {
            el:
              'Ο Cuypers έχτισε το μουσείο σαν παλάτι για την τέχνη, και μερικά από τα ' +
              'καλύτερα πράγματα μέσα του δεν είναι σε βιτρίνες. Μια βιβλιοθήκη που μοιάζει ' +
              'βγαλμένη από παραμύθι, ένας δρόμος για ποδήλατα από τη μέση, και ένας κήπος ' +
              'απέξω που δεν κοστίζει τίποτα. Δώσε τους την ίδια προσοχή που έδωσες στους ' +
              'πίνακες.',
            en:
              'Cuypers built the museum as a palace for art, and some of the best things in it ' +
              'are not in glass cases. A library that looks like something out of a storybook, ' +
              'a road for bicycles through the middle, and a garden outside that costs ' +
              'nothing. Give them the same attention you gave the paintings.',
          },
          exhibits: [
            {
              id: 'amsterdam-rijksmuseum-cuypers-library',
              name: { el: 'Η Βιβλιοθήκη Cuypers', en: 'The Cuypers Library' },
              blurb: {
                el:
                  'Ο Cuypers σχεδίασε μια βιβλιοθήκη μέσα στο μουσείο του, και άνοιξε μαζί του ' +
                  'το 1885. Είναι η μεγαλύτερη και παλαιότερη βιβλιοθήκη ιστορίας της τέχνης ' +
                  'στην Ολλανδία, με περίπου 450.000 βιβλία σε σιδερένιους εξώστες, τέσσερις ' +
                  'ορόφους ψηλά, κάτω από έναν γυάλινο θόλο, και μια στριφογυριστή σκάλα για ' +
                  'να τα φτάνεις. Για πάνω από έναν αιώνα την έβλεπαν μόνο οι μελετητές. Μετά ' +
                  'τη δεκάχρονη ανακαίνιση αποκαταστάθηκε όπως τη σχεδίασε ο Cuypers, και ' +
                  'άνοιξε ένας εξώστης για να κοιτάζουν οι επισκέπτες κάτω, στο αναγνωστήριο, ' +
                  'χωρίς να κάνουν θόρυβο. Ψάξε τον στον δεύτερο όροφο.',
                en:
                  'Cuypers designed a library inside his museum, and it opened with it in ' +
                  '1885. It is the largest and oldest art history library in the Netherlands, ' +
                  'with about 450,000 books on iron balconies stacked four floors high under a ' +
                  'glass vault, and a spiral staircase to reach them. For more than a century ' +
                  'only scholars saw it. After the ten-year renovation it was restored to the ' +
                  'way Cuypers drew it, and a balcony was opened so that visitors can look down ' +
                  'into the reading room without making a sound. Look for it on the second ' +
                  'floor.',
              },
              question: {
                q: {
                  el: 'Με τι είναι γεμάτη αυτή η αίθουσα;',
                  en: 'What is this room full of?',
                },
                answers: [
                  { el: 'Βιβλία', en: 'Books' },
                  { el: 'Πίνακες', en: 'Paintings' },
                  { el: 'Χάρτες', en: 'Maps' },
                  { el: 'Νομίσματα', en: 'Coins' },
                ],
                explanation: {
                  el: 'Περίπου 450.000 βιβλία για την τέχνη, σε εξώστες τεσσάρων ορόφων. Μπορείς να τα κοιτάξεις από ψηλά, αλλά όχι να τα αγγίξεις.',
                  en: 'About 450,000 books about art, on four floors of balconies. You may look down on them, but not touch them.',
                },
              },
            },
            {
              id: 'amsterdam-rijksmuseum-passage',
              name: { el: 'Η δίοδος των ποδηλάτων', en: 'The bicycle passage' },
              blurb: {
                el:
                  'Ένας δημόσιος δρόμος περνάει κάτω από το μουσείο, από τη Museumplein προς ' +
                  'την πόλη, και περνάει από το 1885, τότε που φτιάχτηκε για άμαξες. Σήμερα ' +
                  'ανήκει στους ποδηλάτες και στους πεζούς: τα ποδήλατα περνούν από τη μέση ' +
                  'και οι άνθρωποι περπατούν στα πλάγια, κάτω από ζωγραφισμένο θόλο. Όταν το ' +
                  'μουσείο ανακαινιζόταν, το σχέδιο ήταν να κλείσει η δίοδος και να γίνει ' +
                  'είσοδος. Οι ποδηλάτες του Άμστερνταμ διαμαρτύρονταν χρόνια, και κέρδισαν: ' +
                  'η δίοδος έμεινε ανοιχτή και οι δύο είσοδοι του μουσείου μπήκαν στους ' +
                  'πλαϊνούς τοίχους της. Στάσου μέσα ένα λεπτό και μέτρα τα ποδήλατα.',
                en:
                  'A public road runs under the museum, from the Museumplein to the city, and ' +
                  'it has done since 1885, when it was built for carriages. Today it belongs to ' +
                  'cyclists and walkers: bicycles ride through the middle and people walk along ' +
                  'the sides, under a painted vault. When the museum was being renovated, the ' +
                  'plan was to close the passage and make it the entrance. Amsterdam’s ' +
                  'cyclists argued for years, and they won: the passage stayed open and the two ' +
                  'museum entrances were put into its side walls instead. Stand in it for a ' +
                  'minute and count the bicycles.',
              },
              question: {
                q: {
                  el: 'Για ποιους φτιάχτηκε η δίοδος το 1885;',
                  en: 'What was the passage first built for, in 1885?',
                },
                answers: [
                  { el: 'Για άμαξες', en: 'Carriages' },
                  { el: 'Για τρένα', en: 'Trains' },
                  { el: 'Για βάρκες', en: 'Boats' },
                  { el: 'Για στρατιώτες', en: 'Tram lines' },
                ],
                explanation: {
                  el: 'Το 1885 δεν υπήρχαν ακόμη ποδήλατα σε κάθε γωνία· η δίοδος ήταν για άμαξες με άλογα. Τα ποδήλατα την κληρονόμησαν.',
                  en: 'In 1885 there was not yet a bicycle on every corner; the passage was for horse-drawn carriages. The bicycles inherited it.',
                },
              },
            },
            {
              id: 'amsterdam-rijksmuseum-gardens',
              name: { el: 'Οι κήποι', en: 'The gardens' },
              blurb: {
                el:
                  'Γύρω από το κτίριο υπάρχει ένας κήπος που επισκέπτεσαι δωρεάν, χωρίς ' +
                  'εισιτήριο. Ο Cuypers τον ήθελε υπαίθριο μουσείο: κομμάτια από παλιά ' +
                  'ολλανδικά κτίρια που γκρεμίζονταν, πύλες, κολόνες και πέτρινα στολίδια, ' +
                  'μεταφέρθηκαν εδώ και στήθηκαν ανάμεσα στους θάμνους, ώστε να περνάς μπροστά ' +
                  'από μια πόρτα ενός αιώνα και μια βρύση ενός άλλου. Κάθε καλοκαίρι ο κήπος ' +
                  'φιλοξενεί μεγάλα γλυπτά σύγχρονων καλλιτεχνών, και έχει και παιδική χαρά. ' +
                  'Είναι το σωστό μέρος για τρέξιμο μετά την ησυχία μέσα, και οι πύργοι του ' +
                  'μουσείου φαίνονται καλύτερα από εδώ.',
                en:
                  'Around the building there is a garden you can visit for free, without a ' +
                  'ticket. Cuypers wanted it as an outdoor museum: pieces of old Dutch ' +
                  'buildings that were being torn down, gateways, columns and stone ornaments, ' +
                  'were brought here and set among the hedges, so that you walk past a doorway ' +
                  'from one century and a fountain from another. Every summer the garden hosts ' +
                  'big sculptures by modern artists, and there is a playground too. It is the ' +
                  'right place to run about after the quiet inside, and the towers of the ' +
                  'museum look their best from here.',
              },
              question: {
                q: {
                  el: 'Πόσο κοστίζει να περπατήσεις στον κήπο;',
                  en: 'How much does it cost to walk in the garden?',
                },
                answers: [
                  { el: 'Τίποτα', en: 'Nothing' },
                  { el: 'Ένα ευρώ', en: 'One euro' },
                  { el: 'Ένα εισιτήριο μουσείου', en: 'A museum ticket' },
                  { el: 'Πέντε ευρώ', en: 'Five euros' },
                ],
                explanation: {
                  el: 'Ο κήπος είναι δημόσιος και δωρεάν. Ο Cuypers ήθελε τα παλιά του κτίρια να τα βλέπουν όλοι, όχι μόνο όσοι πλήρωναν.',
                  en: 'The garden is public and free. Cuypers wanted his old buildings seen by everyone, not only by those who paid.',
                },
              },
            },
          ],
        },
      ],
      riddles: [
        {
          id: 'amsterdam-rijksmuseum-riddle-1',
          difficulty: 1,
          prompt: {
            el:
              'Είμαι μεγαλύτερος από μια πόρτα και δείχνω μια ομάδα που ξεκινάει. Λένε ότι ' +
              'δείχνω σκοτάδι, αλλά δεν ήμουν ποτέ σκοτεινός, ώσπου γέρασε το βερνίκι μου. Το ' +
              '1715 μου έκοψαν τις άκρες για να χωρέσω σε έναν τοίχο.',
            en:
              'I am bigger than a door and I show a company setting out. People say I show the ' +
              'dark, but I was never dark until my varnish grew old. In 1715 they cut my edges ' +
              'to fit me on a wall.',
          },
          hint: {
            el: 'Ψάξε τον μεγαλύτερο πίνακα στην αίθουσα, στο βάθος.',
            en: 'Look for the biggest painting in the hall, at the far end.',
          },
          answerExhibitId: 'amsterdam-rijksmuseum-night-watch',
        },
        {
          id: 'amsterdam-rijksmuseum-riddle-2',
          difficulty: 2,
          prompt: {
            el:
              'Έχω δέκα δωμάτια, ασημένια πιάτα και πορσελάνη από την Κίνα, και κανείς δεν ' +
              'κοιμήθηκε ποτέ στα κρεβάτια μου. Μια πλούσια κυρία με γέμιζε είκοσι τέσσερα ' +
              'χρόνια, και κόστισα όσο ένα αληθινό αρχοντικό σε κανάλι.',
            en:
              'I have ten rooms, silver plates and porcelain from China, and nobody has ever ' +
              'slept in my beds. A rich lady spent twenty-four years filling me, and I cost as ' +
              'much as a real home on a canal.',
          },
          hint: {
            el: 'Δεν είναι παιχνίδι, αν και μοιάζει με παιχνίδι.',
            en: 'It is not a toy, although it looks like one.',
          },
          answerExhibitId: 'amsterdam-rijksmuseum-dolls-house',
        },
        {
          id: 'amsterdam-rijksmuseum-riddle-3',
          difficulty: 3,
          prompt: {
            el:
              'Με έφτιαξαν το 1918 για να πολεμώ πάνω από τα σύννεφα, και ο πόλεμος τελείωσε ' +
              'πριν χρειαστεί. Ένας Ολλανδός με σχεδίασε για ένα αγγλικό εργοστάσιο. Είμαι το ' +
              'πιο παλιό του είδους μου σε αυτή τη χώρα.',
            en:
              'I was made in 1918 to fight above the clouds, and the war ended before I ever ' +
              'had to. A Dutchman drew me for an English factory. I am the oldest of my kind ' +
              'in this country.',
          },
          hint: {
            el: 'Έχει φτερά, αλλά δεν είναι πουλί. Ψάξε στις αίθουσες του 20ού αιώνα.',
            en: 'It has wings, but it is not a bird. Look in the twentieth-century rooms.',
          },
          answerExhibitId: 'amsterdam-rijksmuseum-bantam',
        },
      ],
    },
  },

  // ---------------------------------------------------------------- vondelpark
  {
    id: 'amsterdam-vondelpark',
    cityId: 'amsterdam',
    emoji: '🦜',
    category: 'nature',
    difficulty: 1,

    name: { el: 'Φόντελπαρκ', en: 'Vondelpark' },
    tagline: {
      el: 'Το πράσινο σαλόνι της πόλης, με παπαγάλους στα δέντρα',
      en: 'The city’s green living room, with parrots in the trees',
    },
    story: {
      el:
        'Το 1865 μια ομάδα πλούσιων πολιτών αποφάσισε ότι το Άμστερνταμ χρειαζόταν ένα μέρος ' +
        'για περίπατο και ιππασία. Αγόρασαν υγρά λιβάδια λίγο έξω από την πόλη και ζήτησαν ' +
        'από τον σχεδιαστή κήπων Jan David Zocher ένα πάρκο σε αγγλικό στιλ, με λιμνούλες ' +
        'που στριφογυρίζουν, πλατιά γρασίδια και μονοπάτια που αλλάζουν συνέχεια κατεύθυνση, ' +
        'ώστε να μη βλέπεις ποτέ ολόκληρο το πάρκο με μια ματιά. Το 1867 στήθηκε μέσα του ένα ' +
        'άγαλμα του Joost van den Vondel, του μεγαλύτερου ποιητή της Ολλανδίας, και το 1880 ' +
        'το πάρκο πήρε επίσημα το όνομά του. Έχει 47 εκτάρια, περίπου 65 γήπεδα ποδοσφαίρου, ' +
        'και δέχεται περίπου δέκα εκατομμύρια επισκέψεις τον χρόνο. Βρίσκεται κάτω από τη ' +
        'στάθμη της θάλασσας, πάνω σε μαλακό τυρφώδες έδαφος, και βουλιάζει λίγο κάθε χρόνο· ' +
        'γι’ αυτό ξανασκάφτηκε και ανακαινίστηκε από το 1999 ως το 2010. Άκου όταν περπατάς ' +
        'κάτω από τα δέντρα: το δυνατό τσίριγμα έρχεται από πράσινους παπαγάλους με κόκκινο ' +
        'ράμφος. Είναι απόγονοι πουλιών που δραπέτευσαν από κλουβιά ή αφέθηκαν ελεύθερα τη ' +
        'δεκαετία του 1970, και τώρα είναι περίπου 20.000 στις μεγάλες ολλανδικές πόλεις.',
      en:
        'In 1865 a group of wealthy citizens decided that Amsterdam needed somewhere to walk ' +
        'and ride. They bought wet meadows just outside the town and asked the garden designer ' +
        'Jan David Zocher for a park in the English style, with winding ponds, wide lawns and ' +
        'paths that keep changing direction, so that you never see the whole park at once. In ' +
        '1867 a statue of Joost van den Vondel, the greatest poet of the Netherlands, was ' +
        'placed inside, and in 1880 the park officially took his name. It covers 47 hectares, ' +
        'about 65 football pitches, and about ten million visits are made to it every year. ' +
        'It lies below sea level on soft, peaty ground and sinks a little every year, which ' +
        'is why it was dug up and renovated between 1999 and 2010. Listen when you walk under ' +
        'the trees: the loud screeching comes from green parakeets with red beaks. They are ' +
        'the descendants of pet birds that escaped or were let go in the 1970s, and there are ' +
        'now about 20,000 of them in the big Dutch cities.',
    },
    facts: [
      {
        el: 'Άνοιξε το 1865, σε σχέδια του Jan David Zocher, και έχει 47 εκτάρια.',
        en: 'It opened in 1865, designed by Jan David Zocher, and covers 47 hectares.',
      },
      {
        el: 'Το άγαλμα του ποιητή Vondel στήθηκε το 1867· το πάρκο πήρε το όνομά του το 1880.',
        en: 'The statue of the poet Vondel went up in 1867; the park took his name in 1880.',
      },
      {
        el: 'Είναι εθνικό μνημείο από το 1996.',
        en: 'It has been a national monument since 1996.',
      },
      {
        el: 'Το 2021 ζούσαν περίπου 20.000 πράσινοι παπαγάλοι στις τέσσερις μεγαλύτερες ολλανδικές πόλεις.',
        en: 'In 2021 about 20,000 green parakeets lived in the four biggest Dutch cities.',
      },
    ],
    location: {
      lat: 52.35694,
      lng: 4.86639,
      anchor: 'area',
      confidence: 'C',
      sources: [
        { kind: 'wikidata', ref: 'Q1419691', deltaM: 0 },
        { kind: 'osm', ref: 'relation/17080648', deltaM: 152 },
        { kind: 'wikipedia', ref: 'Vondelpark', deltaM: 161 },
      ],
      verifiedAt: '2026-09-12',
      map: { x: 0.264, y: 0.601 },
      note: 'An area pin on the centroid of a 47-hectare park; Wikipedia sits 161 m from it, which is small for the size.',
      // The main entrance is on the Stadhouderskade, between Zandpad and Vossiusstraat, a
      // minute's walk from Leidseplein. (amsterdam.info/parks/vondelpark)
      findIt: {
        el: 'Η κύρια είσοδος είναι στη Stadhouderskade, ένα λεπτό με τα πόδια από τη Leidseplein· η πινακίδα με το όνομα είναι πάνω από την πύλη.',
        en: 'The main entrance is on the Stadhouderskade, a minute’s walk from Leidseplein; the park’s name is written over the gate.',
      },
    },
    question: {
      q: {
        el: 'Από πού ήρθαν οι πράσινοι παπαγάλοι του πάρκου;',
        en: 'Where did the park’s green parrots come from?',
      },
      answers: [
        { el: 'Από κλουβιά που άνοιξαν', en: 'Escaped pet birds' },
        { el: 'Από ένα καράβι από την Αφρική', en: 'A ship from Africa' },
        { el: 'Από το κλουβί του ζωολογικού', en: 'The city zoo’s aviary' },
        { el: 'Από τον κήπο του ποιητή', en: 'The poet’s garden' },
      ],
      explanation: {
        el:
          'Μερικά κατοικίδια πουλιά δραπέτευσαν ή αφέθηκαν ελεύθερα τη δεκαετία του 1970. ' +
          'Αντέχουν το κρύο, όσο βρίσκουν φαγητό, και τα εγγόνια τους είναι τώρα χιλιάδες.',
        en:
          'A few pet birds escaped or were let go in the 1970s. They cope with the cold as ' +
          'long as they find food, and their grandchildren now number in the thousands.',
      },
    },
  },

  // ---------------------------------------------------------------------- nemo
  {
    id: 'amsterdam-nemo',
    cityId: 'amsterdam',
    emoji: '🚢',
    category: 'museum',
    difficulty: 1,

    name: { el: 'NEMO', en: 'NEMO Science Museum' },
    tagline: {
      el: 'Ένα πράσινο καράβι που δεν σαλπάρει ποτέ, γεμάτο πειράματα',
      en: 'A green ship that never sails, full of experiments',
    },
    story: {
      el:
        'Το μουσείο ξεκίνησε το 1923 ως Μουσείο της Εργασίας και μετακόμισε σε αυτό το ' +
        'κτίριο το 1997. Ο Ιταλός αρχιτέκτονας Renzo Piano το έχτισε πάνω από το στόμιο της ' +
        'σήραγγας του IJ, που περνάει κάτω από το λιμάνι ως το Amsterdam-Noord από το 1968: ' +
        'εκεί που η σήραγγα βουτάει στο νερό, το κτίριο σηκώνεται από αυτό, σαν πλώρη ' +
        'καραβιού. Το έντυσε με χαλκό, που ήταν καφέ-χρυσός όταν ήταν καινούργιος και ' +
        'πρασίνισε με τη βροχή, όπως οι παλιές στέγες και το Άγαλμα της Ελευθερίας. Μέσα ' +
        'υπάρχουν πέντε όροφοι με πράγματα που πρέπει να αγγίξεις. Κάθε μέρα ξεκινάει μια ' +
        'αλυσιδωτή αντίδραση, με γιγάντια ντόμινο, μια καμπάνα και ένα αυτοκίνητο που ' +
        'πετάει· υπάρχει ένα εργοστάσιο που ταξινομεί μπάλες, ένα εργαστήριο όπου φοράς ' +
        'λευκή ποδιά, και ένας όροφος για το δικό σου σώμα και μυαλό. Η κεκλιμένη στέγη είναι ' +
        'δημόσια πλατεία: είναι δωρεάν, ανοιχτή σε όλους ακόμη και χωρίς εισιτήριο, και από ' +
        'την κορυφή βλέπεις τον σταθμό, τα καράβια και τις στέγες της πόλης. Εκεί πάνω ' +
        'δουλεύουν μηχανές που κινούνται με άνεμο, νερό και ήλιο, και τις κινείς εσύ.',
      en:
        'The museum began in 1923 as the Museum of Labour, and moved into this building in ' +
        '1997. The Italian architect Renzo Piano built it over the mouth of the IJ tunnel, ' +
        'which has run under the harbour to Amsterdam-Noord since 1968: where the tunnel ' +
        'dives down into the water, the building rises up out of it, like the bow of a ship. ' +
        'He covered it in copper, which was brownish-gold when new and has turned green with ' +
        'the rain, the way old roofs and the Statue of Liberty do. Inside are five floors of ' +
        'things you are supposed to touch. Every day a chain reaction is set off, with giant ' +
        'dominoes, a bell and a flying car; there is a factory that sorts balls, a laboratory ' +
        'where you wear a white coat, and a floor about your own body and brain. The sloping ' +
        'roof is a public square: it is free, open to everyone even without a ticket, and ' +
        'from the top you see the station, the ships and the roofs of the city. Up there ' +
        'machines run on wind, water and sunshine, and you are the one who makes them go.',
    },
    facts: [
      {
        el: 'Το κτίριο του Renzo Piano άνοιξε το 1997, πάνω από τη σήραγγα του IJ.',
        en: 'Renzo Piano’s building opened in 1997, above the IJ tunnel.',
      },
      {
        el: 'Το μουσείο έχει ρίζες στο 1923, όταν άνοιξε το Μουσείο της Εργασίας.',
        en: 'The museum’s roots go back to 1923, when the Museum of Labour opened.',
      },
      {
        el: 'Το 2023 το επισκέφθηκαν 727.737 άνθρωποι, το έβδομο πιο επισκέψιμο μουσείο της Ολλανδίας.',
        en: 'In 2023 it had 727,737 visitors, the seventh most visited museum in the Netherlands.',
      },
      {
        el: 'Η ταράτσα είναι ανοιχτή και δωρεάν, και χωρίς εισιτήριο για το μουσείο.',
        en: 'The roof terrace is open and free, even without a museum ticket.',
      },
    ],
    location: {
      lat: 52.37411,
      lng: 4.91239,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q1422000', deltaM: 0 },
        { kind: 'osm', ref: 'node/2741083161', deltaM: 34 },
        { kind: 'wikipedia', ref: 'NEMO (museum)', deltaM: 4 },
      ],
      verifiedAt: '2026-09-12',
      map: { x: 0.724, y: 0.289 },
      // The museum's visit page gives the address as Oosterdok 2. The walk from the
      // station along the water past the public library is the Explorer product's route.
      // (nemosciencemuseum.nl/en/visit/)
      findIt: {
        el: 'Oosterdok 2: από τον σταθμό περπάτα ανατολικά κατά μήκος του νερού, πέρνα τη μεγάλη δημόσια βιβλιοθήκη, και η είσοδος είναι στη βάση του πράσινου κτιρίου.',
        en: 'Oosterdok 2: from the station walk east along the water, past the big public library, and the entrance is at the foot of the green building.',
      },
    },
    question: {
      q: {
        el: 'Γιατί είναι πράσινο το κτίριο;',
        en: 'Why is the building green?',
      },
      answers: [
        { el: 'Ο χαλκός του πρασίνισε', en: 'Its copper skin aged' },
        { el: 'Το έβαψαν έτσι επίτηδες', en: 'It was painted that way' },
        { el: 'Φυτρώνουν βρύα πάνω του', en: 'Moss grows on it' },
        { el: 'Είναι από πράσινο γυαλί', en: 'It is made of glass' },
      ],
      explanation: {
        el:
          'Ο χαλκός είναι καφέ-χρυσός όταν είναι καινούργιος. Ο αέρας και η βροχή του ' +
          'φτιάχνουν μια λεπτή πράσινη στρώση, που μετά τον προστατεύει. Κανείς δεν το έβαψε.',
        en:
          'Copper is brownish-gold when new. Air and rain grow a thin green layer on it, which ' +
          'then protects it. Nobody painted it.',
      },
    },

    museum: {
      doorNote: {
        el: 'Όλα εδώ είναι για να τα αγγίζεις. Η στέγη είναι δωρεάν· το μέσα θέλει εισιτήριο.',
        en: 'Everything here is meant to be touched. The roof is free; the inside needs a ticket.',
      },
      rooms: [
        {
          id: 'amsterdam-nemo-inside',
          emoji: '🔬',
          name: { el: 'Μέσα, πέντε όροφοι', en: 'Inside, five floors' },
          intro: {
            el:
              'Τίποτα εδώ μέσα δεν είναι πίσω από γυαλί. Σπρώχνεις, τραβάς, ταξινομείς, δοκιμάζεις ' +
              'και ανακατεύεις, και το μουσείο χαίρεται όταν κάτι πάει στραβά, γιατί τότε ' +
              'μαθαίνεις γιατί. Ξεκίνα από κάτω, με τον μεγαλύτερο κρότο της μέρας, και ανέβα ' +
              'όροφο όροφο ως εκείνον που μιλάει για την πιο παράξενη μηχανή απ’ όλες: εσένα.',
            en:
              'Nothing in here is behind glass. You push, pull, sort, test and mix, and the ' +
              'museum is happy when something goes wrong, because that is when you learn why. ' +
              'Start at the bottom with the biggest bang of the day and work upwards, floor by ' +
              'floor, to the one about the strangest machine of all: you.',
          },
          exhibits: [
            {
              id: 'amsterdam-nemo-chain-reaction',
              name: { el: 'Η αλυσιδωτή αντίδραση', en: 'The chain reaction' },
              blurb: {
                el:
                  'Μία φορά τη μέρα, στον πρώτο όροφο, ένας παρουσιαστής βάζει μπρος μια μηχανή ' +
                  'που γεμίζει μια ολόκληρη αίθουσα. Ένα σπρώξιμο τη ξεκινάει: γιγάντια ντόμινο ' +
                  'πέφτουν, μια μπάλα κυλάει, ένας μοχλός γέρνει, μια καμπάνα χτυπάει, και ένα ' +
                  'αυτοκίνητο πετάει στον αέρα πάνω σε σύρμα, με κάθε κομμάτι να ξυπνάει το ' +
                  'επόμενο, ώσπου να πέσει το τελευταίο. Είναι αλυσιδωτή αντίδραση, η ίδια ' +
                  'ιδέα που ρίχνει μια σειρά ντόμινο ή που κάνει μια σπίθα φωτιά. Κανείς δεν ' +
                  'την αγγίζει μετά το πρώτο σπρώξιμο. Αν ένα κομμάτι είναι λίγο στραβά, όλη η ' +
                  'παράσταση σταματάει, γι’ αυτό στήνεται με τόση προσοχή.',
                en:
                  'Once a day, on the first floor, a presenter sets off a machine that fills a ' +
                  'whole hall. One push starts it: giant dominoes topple, a ball rolls, a lever ' +
                  'tips, a bell rings, and a car flies through the air on a wire, each part ' +
                  'waking the next, until the last piece falls. It is a chain reaction, the ' +
                  'same idea that brings down a row of dominoes or turns a spark into a fire. ' +
                  'Nobody touches it after the first push. If one piece is slightly out of ' +
                  'place, the whole show stops, which is why it is set up so carefully.',
              },
              question: {
                q: {
                  el: 'Πόσα σπρωξίματα χρειάζεται ολόκληρη η μηχανή;',
                  en: 'How many pushes does the whole machine need?',
                },
                answers: [
                  { el: 'Ένα', en: 'One' },
                  { el: 'Δέκα', en: 'Ten' },
                  { el: 'Εκατό', en: 'A hundred' },
                  { el: 'Ένα για κάθε κομμάτι', en: 'One per piece' },
                ],
                explanation: {
                  el: 'Ένα μόνο. Μετά κάθε κομμάτι δίνει την ενέργειά του στο επόμενο. Αυτό σημαίνει «αλυσιδωτή»: ο κρίκος τραβάει τον κρίκο.',
                  en: 'Just one. After that, each piece hands its energy on to the next. That is what “chain” means: link pulls link.',
                },
              },
            },
            {
              id: 'amsterdam-nemo-ball-factory',
              name: { el: 'Το εργοστάσιο με τις μπάλες', en: 'The ball factory' },
              blurb: {
                el:
                  'Στον δεύτερο όροφο ένα εργοστάσιο δεν κάνει τίποτα άλλο από το να κινεί ' +
                  'μπάλες. Τις φορτώνεις, τις ανεβάζεις, τις στέλνεις σε ράγες και τις ' +
                  'ταξινομείς στη σωστή θέση, δουλεύοντας τις μηχανές με τα χέρια σου, και αν ' +
                  'είστε αρκετοί, δουλεύοντας σαν ομάδα. Είναι μια αληθινή γραμμή παραγωγής σε ' +
                  'μικρογραφία, και διδάσκει αυτό που κάθε εργοστάσιο πρέπει να μάθει: η γραμμή ' +
                  'πάει τόσο γρήγορα όσο ο πιο αργός εργάτης της. Δες τι γίνεται όταν ένας ' +
                  'σταθμός μένει πίσω, και πού μαζεύονται οι μπάλες.',
                en:
                  'On the second floor a factory does nothing but move balls. You load them, ' +
                  'lift them, send them along rails and sort them into the right places, ' +
                  'working the machines with your own hands and, if there are enough of you, ' +
                  'working as a team. It is a real production line in miniature, and it teaches ' +
                  'the thing every factory has to learn: the line only moves as fast as the ' +
                  'slowest worker on it. Watch what happens when one station falls behind, and ' +
                  'where the balls pile up.',
              },
              question: {
                q: {
                  el: 'Τι φτιάχνει και κινεί αυτό το εργοστάσιο;',
                  en: 'What does this factory make and move?',
                },
                answers: [
                  { el: 'Μπάλες', en: 'Balls' },
                  { el: 'Νομίσματα', en: 'Coins' },
                  { el: 'Τούβλα', en: 'Bricks' },
                  { el: 'Αυτοκινητάκια', en: 'Toy cars' },
                ],
                explanation: {
                  el: 'Μπάλες, γιατί κυλούν εύκολα και δεν σπάνε. Ό,τι μαθαίνεις μετακινώντας τες ισχύει για κάθε εργοστάσιο του κόσμου.',
                  en: 'Balls, because they roll easily and do not break. What you learn moving them holds for every factory in the world.',
                },
              },
            },
            {
              id: 'amsterdam-nemo-laboratory',
              name: { el: 'Το εργαστήριο', en: 'The laboratory' },
              blurb: {
                el:
                  'Στον τρίτο όροφο φοράς λευκή ποδιά και γυαλιά ασφαλείας και γίνεσαι ' +
                  'επιστήμονας για μισή ώρα. Τα πειράματα είναι αληθινά, με αληθινά εργαλεία: ' +
                  'μπορείς να ελέγξεις ποια ποτά έχουν την περισσότερη βιταμίνη C, ή να βγάλεις ' +
                  'το DNA από ζωντανά κύτταρα, ώστε να το δεις πραγματικά, σαν άσπρη κλωστή ' +
                  'μέσα σε ένα σωληνάκι. Επιστήμονας δεν είναι αυτός που ξέρει τις απαντήσεις· ' +
                  'είναι αυτός που ξέρει πώς να ελέγχει. Εδώ ακολουθείς τα βήματα, γράφεις τι ' +
                  'έγινε και το συγκρίνεις με αυτό που περίμενες.',
                en:
                  'On the third floor you put on a white coat and safety glasses and become a ' +
                  'scientist for half an hour. The experiments are real ones, with real ' +
                  'equipment: you can test which drinks contain the most vitamin C, or pull the ' +
                  'DNA out of living cells so that you can actually see it, as a white thread ' +
                  'in a tube. A scientist is not someone who knows the answers; it is someone ' +
                  'who knows how to check. Here you follow the steps, write down what happened, ' +
                  'and compare it with what you expected.',
              },
              question: {
                q: {
                  el: 'Τι μπορείς να βγάλεις από ένα κύτταρο στο εργαστήριο;',
                  en: 'What can you pull out of a cell in the lab?',
                },
                answers: [
                  { el: 'Το DNA του', en: 'Its DNA' },
                  { el: 'Το νερό του', en: 'Its water' },
                  { el: 'Τη ζάχαρή του', en: 'Its sugar' },
                  { el: 'Το χρώμα του', en: 'Its colour' },
                ],
                explanation: {
                  el: 'Το DNA είναι η οδηγία για το πώς χτίζεται κάθε ζωντανό πράγμα. Με σαπούνι, αλάτι και οινόπνευμα βγαίνει από το κύτταρο και φαίνεται με γυμνό μάτι.',
                  en: 'DNA is the instruction for how every living thing is built. With soap, salt and alcohol it comes out of the cell and can be seen with the naked eye.',
                },
              },
            },
            {
              id: 'amsterdam-nemo-humania',
              name: { el: 'Χιουμάνια', en: 'Humania' },
              blurb: {
                el:
                  'Ο τέταρτος όροφος είναι για ένα ζώο μόνο: εσένα. Η έκθεση λέγεται Humania, ' +
                  'και τα παιχνίδια και τα τεστ της σε κάνουν εσένα το πείραμα. Πόσο καλή είναι ' +
                  'στ’ αλήθεια η μνήμη σου; Μπορεί μια εικόνα να ξεγελάσει τα μάτια σου; Ξέρουν ' +
                  'τα αυτιά σου από πού έρχεται ένας ήχος; Συγκρίνεις τα αποτελέσματά σου με ' +
                  'των ανθρώπων γύρω σου και ανακαλύπτεις ότι δύο μυαλά δεν παίρνουν ποτέ τον ' +
                  'κόσμο με τον ίδιο ακριβώς τρόπο. Είναι ο όροφος όπου οι οικογένειες ' +
                  'μαλώνουν περισσότερο, γιατί όλοι είναι σίγουροι ότι οι δικές τους αισθήσεις ' +
                  'έχουν δίκιο.',
                en:
                  'The fourth floor is about one animal only: you. The exhibition is called ' +
                  'Humania, and its games and tests turn you into the experiment. How good is ' +
                  'your memory really? Can a picture fool your eyes? Do your ears know where a ' +
                  'sound is coming from? You compare your results with the people around you ' +
                  'and discover that no two brains take in the world in exactly the same way. ' +
                  'It is the floor where families argue most, because everyone is sure their ' +
                  'own senses are right.',
              },
              question: {
                q: {
                  el: 'Για τι είναι η έκθεση Humania;',
                  en: 'What is Humania about?',
                },
                answers: [
                  { el: 'Τους ανθρώπους', en: 'People' },
                  { el: 'Τους πλανήτες', en: 'Planets' },
                  { el: 'Τα έντομα', en: 'Insects' },
                  { el: 'Τα ρομπότ', en: 'Robots' },
                ],
                explanation: {
                  el: 'Το όνομα το λέει: humanus σημαίνει «ανθρώπινος» στα λατινικά. Το έκθεμα είσαι εσύ, με τη μνήμη, τα μάτια και τα αυτιά σου.',
                  en: 'The name says it: humanus means “human” in Latin. The exhibit is you, with your memory, your eyes and your ears.',
                },
              },
            },
          ],
        },
        {
          id: 'amsterdam-nemo-roof',
          emoji: '☀️',
          name: { el: 'Η στέγη', en: 'The roof' },
          intro: {
            el:
              'Η κορυφή του καραβιού είναι μια πλατεία στον ουρανό. Γέρνει όπως και η σήραγγα ' +
              'από κάτω, μόνο προς τα πάνω, και ανήκει σε όλη την πόλη: όποιος θέλει ανεβαίνει, ' +
              'με εισιτήριο ή χωρίς. Εδώ πάνω τη δουλειά την κάνουν ο άνεμος, το νερό και ο ' +
              'ήλιος, και η θέα κάνει τα υπόλοιπα.',
            en:
              'The top of the ship is a square in the sky. It slopes the same way as the ' +
              'tunnel underneath, only upwards, and it belongs to the whole city: anyone may ' +
              'climb it, ticket or no ticket. Up here the wind, the water and the sun do the ' +
              'work, and the view does the rest.',
          },
          exhibits: [
            {
              id: 'amsterdam-nemo-energetica',
              name: { el: 'Ενερτζέτικα', en: 'Energetica' },
              blurb: {
                el:
                  'Η υπαίθρια έκθεση στη στέγη λέγεται Energetica και δουλεύει με τον καιρό. Οι ' +
                  'μηχανές της κινούνται με άνεμο, με νερό και με το φως του ήλιου, και τις ' +
                  'κινείς εσύ: γυρίζεις έναν τροχό, αλλάζεις τον δρόμο σε ένα ρυάκι, στρέφεις ' +
                  'ένα πάνελ προς τον ήλιο και βλέπεις τι γίνεται. Η Ολλανδία πάντα έπαιρνε ' +
                  'ενέργεια από τον άνεμο, πρώτα με ανεμόμυλους που αντλούσαν το νερό από τη ' +
                  'γη, τώρα με ανεμογεννήτριες που στέκονται μέσα στη θάλασσα. Εδώ πάνω ' +
                  'ανακαλύπτεις μόνος σου γιατί τα φτερά ενός μύλου είναι λοξά, και τι κάνει ' +
                  'ένα φράγμα στο νερό όταν το κλείνεις.',
                en:
                  'The outdoor exhibition on the roof is called Energetica, and it runs on ' +
                  'weather. Its machines are powered by wind, by water and by sunlight, and you ' +
                  'make them go: turn a wheel, change the course of a stream, tilt a panel ' +
                  'towards the sun and see what happens. The Netherlands has always taken its ' +
                  'energy from the wind, first with windmills that pumped water off the land, ' +
                  'now with turbines standing in the sea. Up here you find out for yourself why ' +
                  'a windmill’s sails are set at an angle, and what a dam does to water when ' +
                  'you close it.',
              },
              question: {
                q: {
                  el: 'Με τι κινούνται οι μηχανές στη στέγη;',
                  en: 'What powers the machines on the roof?',
                },
                answers: [
                  { el: 'Άνεμος, νερό και ήλιος', en: 'Wind, water and sun' },
                  { el: 'Μπαταρίες σε ένα κουτί', en: 'Batteries in a box' },
                  { el: 'Ένα καλώδιο από κάτω', en: 'A cable from below' },
                  { el: 'Παιδιά που γυρίζουν μανιβέλες', en: 'Children turning cranks' },
                ],
                explanation: {
                  el: 'Ο καιρός. Γι’ αυτό η έκθεση είναι έξω: μέσα δεν φυσάει, δεν βρέχει και δεν υπάρχει ήλιος να στρέψεις τίποτα προς αυτόν.',
                  en: 'The weather. That is why the exhibition is outdoors: inside there is no wind, no rain and no sun to tilt anything towards.',
                },
              },
            },
            {
              id: 'amsterdam-nemo-copper-skin',
              name: { el: 'Το χάλκινο δέρμα', en: 'The copper skin' },
              blurb: {
                el:
                  'Το κτίριο είναι τυλιγμένο με φύλλα χαλκού. Όταν ο Renzo Piano το τελείωσε το ' +
                  '1997, ήταν καφέ-χρυσά, σαν καινούργιο νόμισμα. Ο αέρας και η βροχή τα ' +
                  'άλλαξαν σιγά σιγά: ο χαλκός αντιδρά με το οξυγόνο και την υγρασία και βγάζει ' +
                  'μια λεπτή πράσινη στρώση, την πατίνα, που μετά προστατεύει το μέταλλο από ' +
                  'κάτω. Για τον ίδιο λόγο είναι πράσινες οι παλιές στέγες εκκλησιών και το ' +
                  'Άγαλμα της Ελευθερίας. Κανείς δεν έβαψε αυτό το κτίριο. Το έβαψε ο καιρός, ' +
                  'μέσα σε χρόνια, και το βάφει ακόμη. Άγγιξε τον τοίχο ανεβαίνοντας και κοίτα ' +
                  'το χρώμα από κοντά, και μετά από μακριά.',
                en:
                  'The building is wrapped in sheets of copper. When Renzo Piano finished it in ' +
                  '1997 they were brownish-gold, like a new coin. Air and rain slowly changed ' +
                  'them: copper reacts with oxygen and damp and grows a thin green layer called ' +
                  'a patina, which then protects the metal underneath. It is the same reason ' +
                  'old church roofs and the Statue of Liberty are green. Nobody painted this ' +
                  'building. The weather did, over years, and it is still doing it. Touch the ' +
                  'wall on the way up and look at the colour close to, then from far away.',
              },
              question: {
                q: {
                  el: 'Ποιος έκανε το κτίριο πράσινο;',
                  en: 'Who turned the building green?',
                },
                answers: [
                  { el: 'Ο καιρός', en: 'The weather' },
                  { el: 'Ένας μπογιατζής', en: 'A painter' },
                  { el: 'Ο Renzo Piano', en: 'Renzo Piano' },
                  { el: 'Το δημοτικό συμβούλιο', en: 'The city council' },
                ],
                explanation: {
                  el: 'Ο χαλκός αντιδρά με τον αέρα και την υγρασία και φτιάχνει την πατίνα. Ο αρχιτέκτονας το ήξερε και το περίμενε.',
                  en: 'Copper reacts with air and damp and grows a patina. The architect knew it would, and waited for it.',
                },
              },
            },
            {
              id: 'amsterdam-nemo-view',
              name: { el: 'Η θέα από το κατάστρωμα', en: 'The view from the deck' },
              blurb: {
                el:
                  'Από το πιο ψηλό σκαλί βλέπεις πώς είναι φτιαγμένο το Άμστερνταμ. Δυτικά είναι ' +
                  'ο σταθμός στα νησιά του, με τα φέρι να περνούν πίσω του. Κάτω σου είναι το ' +
                  'Oosterdok, και δίπλα του η παλιά αποθήκη του στόλου που είναι τώρα το ' +
                  'ναυτικό μουσείο, με ένα ψηλό καράβι δεμένο απέξω. Ακριβώς κάτω από τα πόδια ' +
                  'σου, αυτοκίνητα μπαίνουν στη σήραγγα που περνάει κάτω από το λιμάνι ως τη ' +
                  'βόρεια όχθη. Γύρνα, και οι στέγες και οι πύργοι της παλιάς πόλης απλώνονται ' +
                  'μακριά. Είναι η καλύτερη δωρεάν θέα της πόλης.',
                en:
                  'From the top step you can see how Amsterdam is put together. To the west is ' +
                  'the station on its islands, with the ferries crossing behind it. Below you ' +
                  'is the Oosterdok, and beside it the old naval arsenal that is now the ' +
                  'maritime museum, with a tall ship moored outside. Straight down, under your ' +
                  'feet, cars are entering the tunnel that runs beneath the harbour to the ' +
                  'north bank. Turn round and the roofs and towers of the old town stretch ' +
                  'away. This is the best free view in the city.',
              },
              question: {
                q: {
                  el: 'Τι περνάει κάτω από το κτίριο;',
                  en: 'What runs underneath the building?',
                },
                answers: [
                  { el: 'Μια σήραγγα για αυτοκίνητα', en: 'A road tunnel' },
                  { el: 'Μια γραμμή του μετρό', en: 'A metro line' },
                  { el: 'Ένα κανάλι με βάρκες', en: 'A canal' },
                  { el: 'Μια γραμμή τρένου κάτω από τη γη', en: 'A railway' },
                ],
                explanation: {
                  el: 'Η σήραγγα του IJ, από το 1968. Το κτίριο σχεδιάστηκε σαν καθρέφτης της: εκείνη κατεβαίνει, αυτό ανεβαίνει, με την ίδια κλίση.',
                  en: 'The IJ tunnel, since 1968. The building was designed as its mirror: the tunnel goes down, the building goes up, at the same slope.',
                },
              },
            },
          ],
        },
      ],
      riddles: [
        {
          id: 'amsterdam-nemo-riddle-1',
          difficulty: 1,
          prompt: {
            el:
              'Χρειάζομαι ακριβώς ένα σπρώξιμο τη μέρα. Μετά κανείς δεν με αγγίζει: πέφτω, ' +
              'κυλάω, χτυπάω και πετάω, με το ένα κομμάτι να ξυπνάει το επόμενο, ώσπου να ' +
              'πέσει το τελευταίο.',
            en:
              'I need exactly one push a day. After that, nobody touches me: I topple, roll, ' +
              'ring and fly, one piece waking the next, until the last one falls.',
          },
          hint: {
            el: 'Ρώτα τι ώρα ξεκινάει η παράσταση στον πρώτο όροφο.',
            en: 'Ask what time the show starts on the first floor.',
          },
          answerExhibitId: 'amsterdam-nemo-chain-reaction',
        },
        {
          id: 'amsterdam-nemo-riddle-2',
          difficulty: 2,
          prompt: {
            el:
              'Είχα το χρώμα καινούργιου νομίσματος το 1997. Από τότε με βάφουν η βροχή και ο ' +
              'αέρας, και αλλάζω ακόμη. Άγγιξέ με στον δρόμο σου για την κορυφή.',
            en:
              'I was the colour of a new coin in 1997. Rain and air have painted me since, and ' +
              'I am still changing. Touch me on your way to the top.',
          },
          hint: {
            el: 'Δεν είναι μέσα στο μουσείο. Είναι το μουσείο.',
            en: 'It is not inside the museum. It is the museum.',
          },
          answerExhibitId: 'amsterdam-nemo-copper-skin',
        },
        {
          id: 'amsterdam-nemo-riddle-3',
          difficulty: 3,
          prompt: {
            el:
              'Ζω έξω, πιο ψηλά από τα καράβια. Δεν έχω πρίζα. Ο άνεμος, το νερό και το φως ' +
              'του ήλιου με κινούν, και εσύ αποφασίζεις ποιο από τα τρία δουλεύει πιο σκληρά.',
            en:
              'I live outdoors, higher than the ships. I have no plug. Wind, water and ' +
              'sunlight make me move, and you decide which of the three works hardest.',
          },
          hint: {
            el: 'Ανέβα τα σκαλιά ως το τέλος και ψάξε μηχανές που δεν είναι συνδεδεμένες πουθενά.',
            en: 'Climb the steps to the top and look for machines that are not plugged into anything.',
          },
          answerExhibitId: 'amsterdam-nemo-energetica',
        },
      ],
    },
  },

  // ---------------------------------------------------------------------- waag
  {
    id: 'amsterdam-waag',
    cityId: 'amsterdam',
    emoji: '⚖️',
    category: 'history',
    difficulty: 2,

    name: { el: 'Ντε Βάαχ', en: 'De Waag' },
    tagline: {
      el: 'Μια πύλη της πόλης που έγινε η ζυγαριά της πόλης',
      en: 'A city gate that became the city’s scales',
    },
    story: {
      el:
        'Το 1488, όταν το Άμστερνταμ ήταν ακόμη μια μικρή πόλη με τείχη, εδώ ήταν μια πύλη: ' +
        'η Sint Antoniespoort, η Πύλη του Αγίου Αντωνίου. Οι αγρότες περνούσαν από μέσα της ' +
        'με κάρα γεμάτα τυριά και λαχανικά, και οι φρουροί κοίταζαν τον δρόμο από τους ' +
        'πύργους της. Μέσα σε εκατό χρόνια η πόλη είχε απλωθεί πολύ πέρα από τα τείχη της, ' +
        'τα τείχη γκρεμίστηκαν, και η πύλη βρέθηκε να στέκεται στη μέση μιας πλατείας. Οι ' +
        'Ολλανδοί δεν πετούν ένα καλό κτίριο. Το 1617 έγινε η Waag, η δημόσια ζυγαριά, όπου ' +
        'τα εμπορεύματα ζυγίζονταν στη ζυγαριά της πόλης, ώστε αγοραστής και πωλητής να ' +
        'ξέρουν ότι το βάρος ήταν τίμιο. Οι πάνω όροφοι δόθηκαν σε τέσσερις συντεχνίες: ' +
        'σιδεράδες, ζωγράφους, χτίστες και χειρουργούς, η καθεμιά με δική της πόρτα. Οι ' +
        'χειρουργοί έκαναν εδώ τα μαθήματα ανατομίας τους, και το 1632 ζήτησαν από έναν ' +
        'ζωγράφο 26 χρονών να ζωγραφίσει ένα από αυτά. Τον έλεγαν Rembrandt, και ο πίνακας ' +
        'τον έκανε διάσημο. Είναι το παλαιότερο κτίριο του Άμστερνταμ που δεν είναι εκκλησία. ' +
        'Κάθε Σάββατο μια αγορά αγροτών γεμίζει την πλατεία γύρω του, όπως υπάρχει αγορά εδώ ' +
        'πεντακόσια χρόνια.',
      en:
        'In 1488, when Amsterdam was still a small town with walls around it, this was a ' +
        'gate: the Sint Antoniespoort, Saint Anthony’s Gate. Farmers came through it with ' +
        'carts of cheese and vegetables, and guards watched the road from its towers. Within ' +
        'a hundred years the city had spread far beyond its walls, the walls came down, and ' +
        'the gate found itself standing in the middle of a square. The Dutch do not throw ' +
        'away a good building. In 1617 it became the Waag, the public weigh house, where ' +
        'goods were weighed on the city’s scales so that buyer and seller both knew the ' +
        'weight was honest. The floors above were given to four guilds: blacksmiths, ' +
        'painters, masons and surgeons, each with a door of its own. The surgeons held their ' +
        'anatomy lessons here, and in 1632 they asked a painter of 26 to paint one. His name ' +
        'was Rembrandt, and the picture made him famous. It is the oldest building in ' +
        'Amsterdam that is not a church. Every Saturday a farmers’ market fills the square ' +
        'around it, as a market has for five hundred years.',
    },
    facts: [
      {
        el: 'Χτίστηκε το 1488 ως πύλη της πόλης και έγινε δημόσια ζυγαριά το 1617.',
        en: 'It was built in 1488 as a city gate and became the public weigh house in 1617.',
      },
      {
        el: 'Είναι το παλαιότερο μη θρησκευτικό κτίριο του Άμστερνταμ.',
        en: 'It is the oldest non-religious building in Amsterdam.',
      },
      {
        el: 'Το «Μάθημα Ανατομίας του Δρ. Tulp» του Rembrandt (1632) ζωγραφίστηκε για τη συντεχνία των χειρουργών εδώ· σήμερα κρέμεται στη Χάγη.',
        en: 'Rembrandt’s “Anatomy Lesson of Dr Tulp” (1632) was painted for the surgeons’ guild here; today it hangs in The Hague.',
      },
    ],
    location: {
      lat: 52.37278,
      lng: 4.90028,
      anchor: 'centroid',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q2466999', deltaM: 0 },
        { kind: 'osm', ref: 'way/57857390', deltaM: 3 },
        { kind: 'wikipedia', ref: 'Waag, Amsterdam', deltaM: 0 },
      ],
      verifiedAt: '2026-09-12',
      map: { x: 0.603, y: 0.313 },
    },
    question: {
      q: {
        el: 'Τι έγινε το κτίριο το 1617;',
        en: 'What did the building become in 1617?',
      },
      answers: [
        { el: 'Η ζυγαριά της πόλης', en: 'The city scales' },
        { el: 'Η φυλακή της πόλης', en: 'The city prison' },
        { el: 'Ο πυροσβεστικός σταθμός', en: 'The fire station' },
        { el: 'Ένα τυροπωλείο', en: 'A cheese shop' },
      ],
      explanation: {
        el:
          'Waag σημαίνει ζυγαριά. Η παλιά ζυγαριά στην πλατεία Dam δεν προλάβαινε, και η ' +
          'πύλη που είχε μείνει χωρίς τείχη πήρε τη δουλειά.',
        en:
          'Waag means scales. The old weigh house on Dam Square could not keep up, and the ' +
          'gate that had lost its walls took the job.',
      },
    },
  },

  // -------------------------------------------------------- scheepvaartmuseum
  {
    id: 'amsterdam-scheepvaartmuseum',
    cityId: 'amsterdam',
    emoji: '⚓',
    category: 'museum',
    difficulty: 2,

    name: { el: 'Ναυτικό Μουσείο (Het Scheepvaartmuseum)', en: 'Het Scheepvaartmuseum' },
    tagline: {
      el: 'Η παλιά αποθήκη του στόλου, με ένα ψηλό καράβι δεμένο απέξω',
      en: 'The navy’s old warehouse, with a tall ship tied up outside',
    },
    story: {
      el:
        'Αυτό το τετράγωνο κτίριο πάνω στο νερό χτίστηκε το 1656 ως ’s Lands Zeemagazijn, η ' +
        'αποθήκη του Ναυαρχείου του Άμστερνταμ. Οι Ολλανδοί είχαν μόλις χάσει έναν πόλεμο στη ' +
        'θάλασσα από την Αγγλία και χρειάζονταν γρήγορα ένα σωστό ναυτικό, κι έτσι ο Daniël ' +
        'Stalpaert σχεδίασε μια αποθήκη για ό,τι χρειάζεται ένας πολεμικός στόλος: πανιά, ' +
        'σχοινιά, σημαίες, κανόνια και καρφιά, πάνω σε 2.300 ξύλινους πασσάλους φερμένους ' +
        'από τη Νορβηγία, με βρόχινο νερό να μαζεύεται κάτω από την αυλή για τα βαρέλια των ' +
        'πλοίων. Από το 1973 είναι το εθνικό ναυτικό μουσείο. Στην ανακαίνιση του 2007–2011 η ' +
        'ανοιχτή αυλή σκεπάστηκε με μια οροφή από 1.200 κομμάτια γυαλί, στημένα όπως οι ' +
        'γραμμές ενός παλιού ναυτικού χάρτη. Έξω, στην προκυμαία, είναι δεμένο ένα αντίγραφο ' +
        'σε φυσικό μέγεθος του πλοίου Amsterdam. Το αληθινό Amsterdam βούλιαξε κοντά στο ' +
        'Hastings το 1749, στο πρώτο του ταξίδι, με 27 κιβώτια ασημένια νομίσματα· το ' +
        'αντίγραφο χτίστηκε από το 1985 ως το 1990, και μπορείς να ανέβεις, να ξαπλώσεις σε ' +
        'αιώρα και να σταθείς στο τιμόνι. Δίπλα του, σε δικό της υπόστεγο, επιπλέει η χρυσή ' +
        'Βασιλική Σαλούπα, με είκοσι κωπηλάτες, που χρησιμοποιήθηκε τελευταία φορά το 1962.',
      en:
        'This square building on the water was built in 1656 as ’s Lands Zeemagazijn, the ' +
        'warehouse of the Admiralty of Amsterdam. The Dutch had just lost a war at sea ' +
        'against England and needed a proper navy fast, so Daniël Stalpaert designed a ' +
        'storehouse for everything a war fleet needs: sails, ropes, flags, cannon and nails, ' +
        'on 2,300 wooden piles brought from Norway, with rainwater collected under the ' +
        'courtyard to fill the ships’ barrels. Since 1973 it has been the national maritime ' +
        'museum. During a renovation in 2007–2011 the open courtyard was covered with a roof ' +
        'of 1,200 pieces of glass, arranged like the lines on an old sea chart. Outside, a ' +
        'full-size copy of the ship Amsterdam is moored to the quay. The real Amsterdam sank ' +
        'near Hastings in 1749 on her very first voyage, with 27 chests of silver coins ' +
        'aboard; the copy was built between 1985 and 1990, and you may climb aboard, lie in ' +
        'a hammock and stand at the helm. Beside it, in a boathouse of its own, floats the ' +
        'golden Royal Barge, rowed by twenty men and last used in 1962.',
    },
    facts: [
      {
        el: 'Το κτίριο χτίστηκε το 1656 σε σχέδια του Daniël Stalpaert, πάνω σε 2.300 πασσάλους από το Όσλο.',
        en: 'The building went up in 1656 to Daniël Stalpaert’s design, on 2,300 piles from Oslo.',
      },
      {
        el: 'Το μουσείο στεγάζεται εδώ από το 1973 και ξανάνοιξε μετά την ανακαίνιση στις 2 Οκτωβρίου 2011.',
        en: 'The museum has been here since 1973 and reopened after renovation on 2 October 2011.',
      },
      {
        el: 'Η γυάλινη οροφή του Laurent Ney έχει 1.200 κομμάτια γυαλί σε τετράγωνο 34 επί 34 μέτρα.',
        en: 'Laurent Ney’s glass roof has 1,200 pieces of glass in a 34-by-34-metre square.',
      },
      {
        el: 'Το αληθινό Amsterdam προσάραξε στις 26 Ιανουαρίου 1749· το αντίγραφο χτίστηκε το 1985–1990.',
        en: 'The real Amsterdam ran aground on 26 January 1749; the replica was built in 1985–1990.',
      },
    ],
    location: {
      lat: 52.37139,
      lng: 4.91472,
      anchor: 'centroid',
      confidence: 'C',
      sources: [
        { kind: 'wikidata', ref: 'Q1616123', deltaM: 0 },
        { kind: 'osm', ref: 'way/1287492683', deltaM: 69 },
        { kind: 'wikipedia', ref: 'Het Scheepvaartmuseum', deltaM: 31 },
      ],
      verifiedAt: '2026-09-12',
      map: { x: 0.747, y: 0.338 },
      note: 'Graded C only because Wikipedia sits 31 m off, one metre past the agreement band, and OSM 69 m; all three points fall inside a building 70 m square.',
      // The museum's own site: the replica ship is docked right beside the museum on the
      // quay; address Kattenburgerplein 1. (hetscheepvaartmuseum.com/whats-on/the-ships)
      findIt: {
        el: 'Kattenburgerplein 1: το μεγάλο τετράγωνο κτίριο πάνω στο νερό, ανατολικά από το NEMO. Το καράβι είναι δεμένο στην προκυμαία δίπλα του.',
        en: 'Kattenburgerplein 1: the big square building on the water east of NEMO. The ship is tied up on the quay beside it.',
      },
    },
    question: {
      q: {
        el: 'Τι ήταν το κτίριο όταν χτίστηκε το 1656;',
        en: 'What was the building when it was built in 1656?',
      },
      answers: [
        { el: 'Αποθήκη του ναυτικού', en: 'A navy warehouse' },
        { el: 'Παλάτι του ναυάρχου', en: 'The admiral’s palace' },
        { el: 'Σχολείο για ναύτες', en: 'A school for sailors' },
        { el: 'Φυλακή για πειρατές', en: 'A prison for pirates' },
      ],
      explanation: {
        el:
          'Ένας στόλος θέλει πανιά, σχοινιά, κανόνια και καρφιά, όλα σε ένα μέρος και ' +
          'κοντά στο νερό. Γι’ αυτό το κτίριο είναι τετράγωνο, με αυλή στη μέση: μια αποθήκη.',
        en:
          'A fleet needs sails, ropes, cannon and nails, all in one place and close to the ' +
          'water. That is why the building is a square with a courtyard: a warehouse.',
      },
    },

    museum: {
      doorNote: {
        el: 'Το καράβι απέξω είναι μέρος του εισιτηρίου. Ανέβα· είναι το καλύτερο δωμάτιο του μουσείου.',
        en: 'The ship outside is part of the ticket. Go aboard; it is the best room in the museum.',
      },
      rooms: [
        {
          id: 'amsterdam-scheepvaartmuseum-on-the-water',
          emoji: '⛵',
          name: { el: 'Στο νερό', en: 'On the water' },
          intro: {
            el:
              'Τα δύο καλύτερα πράγματα σε αυτό το μουσείο επιπλέουν. Το ένα είναι αντίγραφο ενός ' +
              'καραβιού που βούλιαξε στο πρώτο του ταξίδι, χτισμένο σανίδα σανίδα όπως το ' +
              'αρχικό· το άλλο είναι μια χρυσή βάρκα που μετέφερε βασιλιάδες και βασίλισσες με ' +
              'κουπιά. Ανεβαίνεις και στα δύο. Πρόσεχε το κεφάλι σου κάτω από το κατάστρωμα: οι ' +
              'ναύτες τότε ήταν πιο κοντοί.',
            en:
              'The two best things in this museum float. One is a copy of a ship that sank on ' +
              'her first voyage, built plank by plank the way the original was; the other is ' +
              'a golden boat that kings and queens were rowed in. You go aboard both. Mind ' +
              'your head below deck: sailors were shorter then.',
          },
          exhibits: [
            {
              id: 'amsterdam-scheepvaartmuseum-ship-amsterdam',
              name: { el: 'Το καράβι Amsterdam', en: 'The ship Amsterdam' },
              blurb: {
                el:
                  'Το αληθινό Amsterdam ήταν ένα εμπορικό καράβι της Ολλανδικής Εταιρείας ' +
                  'Ανατολικών Ινδιών, 48 μέτρα μακρύ, χτισμένο από βελανιδιά το 1748 για να ' +
                  'πηγαίνει στην Ασία και πίσω. Είχε 203 ναύτες, 127 στρατιώτες και 5 ' +
                  'επιβάτες, με κρασί, υφάσματα, κανόνια και 27 κιβώτια ασημένια νομίσματα. Οι ' +
                  'καταιγίδες το γύρισαν πίσω δύο φορές πριν βγει από τη Μάγχη. Αρρώστια ' +
                  'ξέσπασε στο πλοίο, το τιμόνι έσπασε, και στις 26 Ιανουαρίου 1749 προσάραξε ' +
                  'σε έναν κόλπο κοντά στο Hastings, στην Αγγλία. Το ναυάγιό του είναι ακόμη ' +
                  'εκεί, μέσα στην άμμο. Αυτό το αντίγραφο χτίστηκε από το 1985 ως το 1990 από ' +
                  'ξύλο ιρόκο.',
                en:
                  'The real Amsterdam was an East Indiaman: a merchant ship of the Dutch East ' +
                  'India Company, 48 metres long, built of oak in 1748 to sail to Asia and ' +
                  'back. She carried 203 crew, 127 soldiers and 5 passengers, with wine, ' +
                  'cloth, cannon and 27 chests of silver coins. Storms drove her back twice ' +
                  'before she got out of the Channel. Illness broke out on board, the rudder ' +
                  'broke off, and on 26 January 1749 she ran aground in a bay near Hastings in ' +
                  'England. Her wreck is still there in the sand. This copy was built between ' +
                  '1985 and 1990 out of iroko wood.',
              },
              question: {
                q: {
                  el: 'Τι έπαθε το αληθινό Amsterdam στο πρώτο του ταξίδι;',
                  en: 'What happened to the real Amsterdam on her first voyage?',
                },
                answers: [
                  { el: 'Προσάραξε', en: 'She ran aground' },
                  { el: 'Έφτασε στην Ασία', en: 'She reached Asia' },
                  { el: 'Την πήραν πειρατές', en: 'Pirates took her' },
                  { el: 'Πήρε φωτιά', en: 'She caught fire' },
                ],
                explanation: {
                  el: 'Χωρίς τιμόνι, σε καταιγίδα, με το μισό πλήρωμα άρρωστο, ο καπετάνιος την έριξε στην άμμο για να σώσει τους ανθρώπους. Δεν έφυγε ποτέ από εκεί.',
                  en: 'With no rudder, in a storm, with half the crew ill, the captain ran her onto the sand to save the people. She never left it.',
                },
              },
            },
            {
              id: 'amsterdam-scheepvaartmuseum-on-board',
              name: { el: 'Κάτω από το κατάστρωμα', en: 'Below deck' },
              blurb: {
                el:
                  'Ανέβα και το καράβι γίνεται σπίτι. Οι ναύτες κοιμούνταν σε αιώρες κρεμασμένες ' +
                  'η μία δίπλα στην άλλη, τόσο κοντά που κουνιούνταν όλες μαζί όταν το πλοίο ' +
                  'έγερνε, και μπορείς να σκαρφαλώσεις σε μία. Ο καπετάνιος είχε καμπίνα στην ' +
                  'πρύμνη, με παράθυρα και αληθινό κρεβάτι. Ανάμεσα στα καταστρώματα τα ταβάνια ' +
                  'είναι χαμηλά, γιατί ο χώρος ήταν για φορτίο, όχι για να στέκεσαι όρθιος. ' +
                  'Μπορείς να σταθείς στο τιμόνι, να σηκώσεις φορτίο με τα παλάγκα και να ' +
                  'κοιτάξεις μέσα στην κάννη ενός κανονιού. Πριν από διακόσια χρόνια ένα παιδί ' +
                  'στην ηλικία σου μπορεί να ήταν εδώ μούτσος, να τρέχει θελήματα για τον ' +
                  'μάγειρα.',
                en:
                  'Go aboard and the ship becomes a house. Sailors slept in hammocks slung ' +
                  'side by side, so close that they all swung together when the ship rolled, ' +
                  'and you can climb into one. The captain had a cabin at the stern, with ' +
                  'windows and a real bed. Between decks the ceilings are low, because the ' +
                  'space was for cargo, not for standing up in. You can stand at the helm, ' +
                  'hoist cargo with the tackle and look down the barrel of a cannon. Two ' +
                  'hundred years ago a child your age might have been on board as a ship’s ' +
                  'boy, running errands for the cook.',
              },
              question: {
                q: {
                  el: 'Πού κοιμούνταν οι απλοί ναύτες;',
                  en: 'Where did the ordinary sailors sleep?',
                },
                answers: [
                  { el: 'Σε αιώρες', en: 'In hammocks' },
                  { el: 'Σε ξύλινες κουκέτες', en: 'In wooden bunks' },
                  { el: 'Στο ανοιχτό κατάστρωμα', en: 'On the open deck' },
                  { el: 'Στο αμπάρι με τα εμπορεύματα', en: 'In the cargo hold' },
                ],
                explanation: {
                  el: 'Μια αιώρα κρέμεται, οπότε όταν το πλοίο γέρνει, ο ναύτης μένει ίσιος. Και το πρωί την τυλίγεις και ο χώρος ελευθερώνεται.',
                  en: 'A hammock hangs, so when the ship tilts the sailor stays level. And in the morning you roll it up and the space is free again.',
                },
              },
            },
            {
              id: 'amsterdam-scheepvaartmuseum-royal-barge',
              name: { el: 'Η Βασιλική Σαλούπα', en: 'The Royal Barge' },
              blurb: {
                el:
                  'Αυτή η χρυσή βάρκα χτίστηκε για τον βασιλιά Willem I από το 1816 ως το 1818 ' +
                  'στο ναυπηγείο του ναυτικού στο Ρότερνταμ. Δεν έχει μηχανή ούτε πανί: είκοσι ' +
                  'κωπηλάτες, διαλεγμένοι από το ναυτικό και γυμνασμένοι να κωπηλατούν σε ' +
                  'τέλειο ρυθμό, την κινούσαν στο νερό όσο πιο αργά και μεγαλόπρεπα γινόταν. ' +
                  'Στην πλώρη κάθεται ένας επίχρυσος Ποσειδώνας, ο θεός της θάλασσας, σε ένα ' +
                  'κοχύλι που το σέρνουν τρία θαλάσσια άλογα. Χρησιμοποιήθηκε σε βασιλικούς ' +
                  'γάμους και επισκέψεις για ενάμιση αιώνα, και για τελευταία φορά το 1962, ' +
                  'όταν η βασίλισσα Juliana και ο πρίγκιπας Bernhard γιόρτασαν τα 25 χρόνια ' +
                  'του γάμου τους. Από το 2015 επιπλέει σε υπόστεγο χτισμένο μόνο για αυτήν.',
                en:
                  'This golden boat was built for King Willem I between 1816 and 1818 at the ' +
                  'navy yard in Rotterdam. It has no engine and no sail: twenty rowers, picked ' +
                  'from the navy and drilled to row in perfect time, moved it through the water ' +
                  'as slowly and grandly as possible. On the bow sits a gilded Neptune, the god ' +
                  'of the sea, in a shell drawn by three sea horses. It was used at royal ' +
                  'weddings and visits for a century and a half, and for the last time in ' +
                  '1962, when Queen Juliana and Prince Bernhard celebrated their silver ' +
                  'wedding. Since 2015 it has floated in a boathouse built just for it.',
              },
              question: {
                q: {
                  el: 'Πώς κινούνταν η Βασιλική Σαλούπα;',
                  en: 'How was the Royal Barge moved?',
                },
                answers: [
                  { el: 'Από είκοσι κωπηλάτες', en: 'By twenty rowers' },
                  { el: 'Από μια ατμομηχανή', en: 'By a steam engine' },
                  { el: 'Από ένα μεγάλο πανί', en: 'By a big sail' },
                  { el: 'Από άλογα πάνω στην όχθη', en: 'By horses on the bank' },
                ],
                explanation: {
                  el: 'Είκοσι κουπιά, όλα μαζί, σε ρυθμό. Μια βασιλική βάρκα δεν βιάζεται: το νόημα ήταν να τη βλέπουν όλοι για πολλή ώρα.',
                  en: 'Twenty oars, all together, in time. A royal boat is in no hurry: the point was for everyone to watch it for a long while.',
                },
              },
            },
          ],
        },
        {
          id: 'amsterdam-scheepvaartmuseum-maps-and-monsters',
          emoji: '🗺️',
          name: { el: 'Χάρτες, τέρατα και ένας γυάλινος ουρανός', en: 'Maps, monsters and a glass sky' },
          intro: {
            el:
              'Οι ναυτικοί χρειάζονταν χάρτες, και για ένα διάστημα το Άμστερνταμ έφτιαχνε τους ' +
              'καλύτερους στον κόσμο. Αυτή η αίθουσα είναι για το πώς ζωγράφιζαν οι άνθρωποι τη ' +
              'θάλασσα πριν τη δουν ολόκληρη, τι νόμιζαν ότι ζει μέσα της, και πώς το μουσείο ' +
              'έκανε μια παλιά αυλή χάρτη που στέκεσαι από κάτω του.',
            en:
              'Sailors needed maps, and for a while Amsterdam made the best in the world. This ' +
              'room is about how people drew the sea before they had seen all of it, what they ' +
              'thought lived in it, and how the museum turned an old courtyard into a map you ' +
              'can stand under.',
          },
          exhibits: [
            {
              id: 'amsterdam-scheepvaartmuseum-glass-roof',
              name: { el: 'Η γυάλινη οροφή', en: 'The glass roof' },
              blurb: {
                el:
                  'Για τριακόσια χρόνια η αυλή στη μέση της αποθήκης ήταν ανοιχτή στη βροχή. ' +
                  'Το 2011 σκεπάστηκε με μια οροφή που σχεδίασε ο μηχανικός Laurent Ney: 1.200 ' +
                  'κομμάτια γυαλί σε ατσάλινο σκελετό, 34 μέτρα επί 34, με 160 τόνους ατσάλι ' +
                  'και 40 τόνους γυαλί, που στέκεται μόνη της, χωρίς καμία κολόνα από κάτω. ' +
                  'Το σχέδιο του ατσαλιού είναι αντιγραμμένο από παλιούς ναυτικούς χάρτες, ' +
                  'όπου γραμμές ξεκινούν από ένα ανεμολόγιο, ώστε ο πλοηγός να χαράζει με ' +
                  'χάρακα την πορεία από ένα λιμάνι σε άλλο. Ξάπλωσε στο πάτωμα και κοίτα ' +
                  'ψηλά: είσαι μέσα σε έναν χάρτη.',
                en:
                  'For three hundred years the courtyard in the middle of the arsenal was open ' +
                  'to the rain. In 2011 it was covered with a roof designed by the engineer ' +
                  'Laurent Ney: 1,200 pieces of glass in a steel frame, 34 metres by 34, with ' +
                  '160 tonnes of steel and 40 tonnes of glass, holding itself up with no column ' +
                  'underneath. The pattern of the steel is copied from old sea charts, where ' +
                  'lines fan out from a compass rose so that a navigator could rule a course ' +
                  'from one port to another. Lie on the floor and look up: you are inside a ' +
                  'map.',
              },
              question: {
                q: {
                  el: 'Από πού είναι αντιγραμμένο το σχέδιο της οροφής;',
                  en: 'What is the pattern of the roof copied from?',
                },
                answers: [
                  { el: 'Από παλιούς ναυτικούς χάρτες', en: 'Old sea charts' },
                  { el: 'Από έναν ιστό αράχνης', en: 'A spider’s web' },
                  { el: 'Από τα πανιά ενός μεγάλου καραβιού', en: 'A ship’s sails' },
                  { el: 'Από ένα δίχτυ ψαρέματος', en: 'A fishing net' },
                ],
                explanation: {
                  el: 'Στους παλιούς χάρτες, γραμμές ξεκινούν από ανεμολόγια προς κάθε κατεύθυνση. Ο μηχανικός τις έκανε ατσάλι και έβαλε γυαλί ανάμεσα.',
                  en: 'On old charts, lines fan out from compass roses in every direction. The engineer made them steel and put glass between them.',
                },
              },
            },
            {
              id: 'amsterdam-scheepvaartmuseum-blaeu-atlas',
              name: { el: 'Ο Άτλας του Blaeu', en: 'Blaeu’s Atlas Maior' },
              blurb: {
                el:
                  'Τη δεκαετία του 1660 ο χαρτογράφος του Άμστερνταμ Joan Blaeu εξέδωσε τον ' +
                  'Atlas Maior, τον Μεγάλο Άτλαντα: 594 χάρτες και περίπου 3.000 σελίδες, σε ' +
                  'εννιά ως δώδεκα τόμους, ανάλογα με τη γλώσσα. Ήταν το μεγαλύτερο και πιο ' +
                  'ακριβό βιβλίο που μπορούσε να αγοράσει κανείς τον 17ο αιώνα, και οι πλούσιοι ' +
                  'έμποροι το χάριζαν σε βασιλιάδες. Ο πατέρας του Joan, ο Willem, ήταν ο ' +
                  'επίσημος χαρτογράφος της Εταιρείας Ανατολικών Ινδιών, κι έτσι η οικογένεια ' +
                  'έβλεπε τους νεότερους χάρτες πριν από όλους. Το μουσείο έχει χάρτες τους· ' +
                  'ψάξε ακτογραμμές που σταματούν στη μέση, εκεί που δεν είχε φτάσει ακόμη ' +
                  'κανένα καράβι.',
                en:
                  'In the 1660s the Amsterdam mapmaker Joan Blaeu published the Atlas Maior, ' +
                  'the Great Atlas: 594 maps and about 3,000 pages, in nine to twelve volumes ' +
                  'depending on the language. It was the largest and most expensive book ' +
                  'anyone could buy in the seventeenth century, and rich merchants gave it to ' +
                  'kings as a present. Joan’s father Willem had been the official mapmaker of ' +
                  'the East India Company, so the family saw the newest charts before anyone ' +
                  'else. The museum holds their maps; look for coastlines that stop halfway, ' +
                  'where no ship had yet been.',
              },
              question: {
                q: {
                  el: 'Τι ξεχώριζε τον Atlas Maior;',
                  en: 'What was special about the Atlas Maior?',
                },
                answers: [
                  { el: 'Το πιο ακριβό βιβλίο της εποχής του', en: 'The dearest book of its age' },
                  { el: 'Το πρώτο βιβλίο τυπωμένο στα ολλανδικά', en: 'The first book printed in Dutch' },
                  { el: 'Ο μικρότερος άτλας που φτιάχτηκε ποτέ', en: 'The smallest atlas ever made' },
                  { el: 'Το μόνο βιβλίο χωρίς καμία εικόνα', en: 'The only book with no pictures' },
                ],
                explanation: {
                  el: 'Σχεδόν 600 χάρτες, χαραγμένοι σε χαλκό και χρωματισμένοι με το χέρι, σε δώδεκα τόμους. Κανένα βιβλίο του 17ου αιώνα δεν κόστιζε περισσότερο.',
                  en: 'Almost 600 maps, engraved in copper and coloured by hand, in up to twelve volumes. No book of the seventeenth century cost more.',
                },
              },
            },
            {
              id: 'amsterdam-scheepvaartmuseum-whale',
              name: { el: 'Η ιστορία της φάλαινας', en: 'The Tale of the Whale' },
              blurb: {
                el:
                  'Αυτή η έκθεση είναι φτιαγμένη για παιδιά από έξι ετών. Ξεκινάει με μια ' +
                  'γροιλανδική φάλαινα που ανοίγει το τεράστιο στόμα της για σένα, και τελειώνει ' +
                  'με την ουρά της να βουτάει στο νερό. Ανάμεσα μαθαίνεις ποιες φάλαινες ' +
                  'υπάρχουν, πού ζουν και πώς τους φέρθηκαν οι άνθρωποι. Τον 16ο αιώνα οι ' +
                  'ναυτικοί σπάνια είχαν δει φάλαινα από κοντά· τις ζωγράφιζαν στους χάρτες ' +
                  'τους σαν θαλάσσια τέρατα με δόντια και πίδακες, και οι χάρτες σε αυτό το ' +
                  'μουσείο είναι γεμάτοι από αυτά. Αργότερα οι Ολλανδοί κυνηγούσαν φάλαινες ' +
                  'στην Αρκτική για το λάδι τους. Σήμερα στην ίδια θάλασσα οι άνθρωποι πάνε για ' +
                  'να τις παρατηρήσουν.',
                en:
                  'This exhibition is made for children from six. It starts with a bowhead ' +
                  'whale opening its enormous mouth for you, and ends with its tail plunging ' +
                  'into the water. In between you learn which whales there are, where they ' +
                  'live and how people have treated them. In the sixteenth century sailors had ' +
                  'rarely seen a whale up close; they drew them on their maps as sea monsters ' +
                  'with teeth and spouts, and the maps in this museum are full of them. Later ' +
                  'the Dutch hunted whales in the Arctic for their oil. Today people sail the ' +
                  'same sea to watch them.',
              },
              question: {
                q: {
                  el: 'Πώς ζωγράφιζαν οι ναυτικοί τις φάλαινες στους παλιούς χάρτες;',
                  en: 'How did sailors draw whales on old maps?',
                },
                answers: [
                  { el: 'Σαν θαλάσσια τέρατα', en: 'As sea monsters' },
                  { el: 'Σαν μικρά ψάρια', en: 'As small fish' },
                  { el: 'Σαν νησιά που επιπλέουν', en: 'As floating islands' },
                  { el: 'Σαν γοργόνες', en: 'As mermaids' },
                ],
                explanation: {
                  el: 'Όποιος έβλεπε μια πλάτη να βγαίνει από το νερό και έναν πίδακα, και μετά την έχανε, γέμιζε τα κενά με τη φαντασία του.',
                  en: 'Anyone who saw a back rise out of the water and a spout, and then lost sight of it, filled in the gaps with imagination.',
                },
              },
            },
          ],
        },
      ],
      riddles: [
        {
          id: 'amsterdam-scheepvaartmuseum-riddle-1',
          difficulty: 1,
          prompt: {
            el:
              'Είκοσι άντρες με κωπηλατούσαν, σε τέλειο ρυθμό, και ένας χρυσός θεός της θάλασσας ' +
              'κάθεται στη μύτη μου. Μετέφερα βασίλισσες και βασιλιάδες, αλλά η τελευταία φορά ' +
              'που βγήκα ήταν το 1962.',
            en:
              'Twenty men rowed me, in perfect time, and a golden god of the sea sits on my ' +
              'nose. I carried queens and kings, but the last time I went out was 1962.',
          },
          hint: {
            el: 'Ψάξε το μικρότερο σκάφος, μέσα σε ένα υπόστεγο δικό του.',
            en: 'Look for the smaller vessel, in a boathouse of its own.',
          },
          answerExhibitId: 'amsterdam-scheepvaartmuseum-royal-barge',
        },
        {
          id: 'amsterdam-scheepvaartmuseum-riddle-2',
          difficulty: 2,
          prompt: {
            el:
              'Η μεγάλη μου αδερφή σάλπαρε για την Ασία και δεν πέρασε ποτέ την Αγγλία. Με ' +
              'έχτισαν στο σχήμα της, σανίδα σανίδα, και είμαι δεμένο σε αυτή την προκυμαία ' +
              'από το 1990.',
            en:
              'My big sister sailed for Asia and never got past England. I was built in her ' +
              'shape, plank by plank, and I have been tied to this quay since 1990.',
          },
          hint: {
            el: 'Είναι το πιο μεγάλο πράγμα στο μουσείο, και δεν είναι μέσα στο μουσείο.',
            en: 'It is the biggest thing in the museum, and it is not inside the museum.',
          },
          answerExhibitId: 'amsterdam-scheepvaartmuseum-ship-amsterdam',
        },
        {
          id: 'amsterdam-scheepvaartmuseum-riddle-3',
          difficulty: 3,
          prompt: {
            el:
              'Είμαι χίλια διακόσια κομμάτια που δεν τα κρατάει τίποτα, και τις γραμμές μου τις ' +
              'έκλεψα από τον χάρτη ενός ναυτικού. Ξάπλωσε και κοίτα ψηλά: είσαι μέσα σε χάρτη.',
            en:
              'I am twelve hundred pieces held up by nothing, and my lines were stolen from a ' +
              'sailor’s chart. Lie down and look up: you are inside a map.',
          },
          hint: {
            el: 'Δεν είναι σε καμία αίθουσα. Είναι πάνω από την αυλή.',
            en: 'It is not in any room. It is above the courtyard.',
          },
          answerExhibitId: 'amsterdam-scheepvaartmuseum-glass-roof',
        },
      ],
    },
  },

  // --------------------------------------------------------------------- artis
  {
    id: 'amsterdam-artis',
    cityId: 'amsterdam',
    emoji: '🦁',
    category: 'nature',
    difficulty: 1,

    name: { el: 'Άρτις', en: 'Artis' },
    tagline: {
      el: 'Ο πιο παλιός ζωολογικός κήπος της Ολλανδίας, στη μέση της πόλης',
      en: 'The oldest zoo in the Netherlands, in the middle of the city',
    },
    story: {
      el:
        'Το 1838 τρεις φίλοι που αγαπούσαν τα ζώα, ο Gerard Westerman, ο J.W.H. Werlemann και ' +
        'ο J.J. Wijsmuller, ίδρυσαν μια εταιρεία με το όνομα Natura Artis Magistra, λατινικά ' +
        'για «Η φύση είναι η δασκάλα της τέχνης». Όλοι το κόντυναν σε Artis. Είναι ο ' +
        'παλαιότερος ζωολογικός κήπος της Ολλανδίας και ο πέμπτος παλαιότερος στον κόσμο ' +
        'που λειτουργεί ακόμη, και δεν μετακόμισε ποτέ: η πόλη μεγάλωσε γύρω του, κι έτσι ' +
        'σήμερα λιοντάρια, καμηλοπαρδάλεις και ελέφαντες ζουν λίγα βήματα από τα κανάλια. ' +
        'Ζουν εδώ περίπου 900 είδη. Πολλά από τα κτίρια είναι παλαιότερα από τους ' +
        'προπροπαππούδες σου: το ενυδρείο άνοιξε το 1882, και 27 παλιά κτίρια, γέφυρες και ' +
        'λιμνούλες μέσα στον κήπο είναι προστατευόμενα μνημεία, τα περισσότερα σήμερα σπίτια ' +
        'ζώων. Στην είσοδο υπάρχει πλανητάριο, και από το 2014 ένα μουσείο που λέγεται ' +
        'Micropia, το πρώτο στον κόσμο για τα πλάσματα που είναι πολύ μικρά για να τα δεις: ' +
        'βακτήρια, μούχλες και τα μικρόβια που ζουν πάνω στο δικό σου δέρμα. Περίπου 1,3 ' +
        'εκατομμύρια άνθρωποι έρχονται κάθε χρόνο. Δώσε χρόνο στο ενυδρείο· είναι η ' +
        'παλαιότερη αίθουσα του κήπου.',
      en:
        'In 1838 three friends who loved animals, Gerard Westerman, J.W.H. Werlemann and ' +
        'J.J. Wijsmuller, founded a society called Natura Artis Magistra, Latin for “Nature ' +
        'is the teacher of art”. Everyone shortened it to Artis. It is the oldest zoo in the ' +
        'Netherlands and the fifth oldest in the world still open, and it never moved: the ' +
        'city grew around it, so today lions, giraffes and elephants live a short walk from ' +
        'the canals. Some 900 species live here. Many of the buildings are older than your ' +
        'great-great-grandparents: the aquarium opened in 1882, and 27 old buildings, bridges ' +
        'and ponds on the grounds are protected monuments, most of them now homes for ' +
        'animals. There is a planetarium by the entrance, and since 2014 a museum called ' +
        'Micropia, the first in the world about the creatures too small to see: bacteria, ' +
        'moulds and the microbes that live on your own skin. About 1.3 million people visit ' +
        'every year. Give the aquarium time; it is the oldest room in the zoo.',
    },
    facts: [
      {
        el: 'Ιδρύθηκε το 1838 και είναι ο παλαιότερος ζωολογικός κήπος της Ολλανδίας.',
        en: 'It was founded in 1838 and is the oldest zoo in the Netherlands.',
      },
      {
        el: 'Ζουν εδώ περίπου 900 είδη ζώων.',
        en: 'About 900 species live here.',
      },
      {
        el: 'Το ενυδρείο άνοιξε το 1882· η Micropia, το πρώτο μουσείο μικροβίων στον κόσμο, το 2014.',
        en: 'The aquarium opened in 1882; Micropia, the world’s first microbe museum, in 2014.',
      },
      {
        el: 'Το 2024 το επισκέφθηκαν 1.269.538 άνθρωποι.',
        en: 'In 2024 it had 1,269,538 visitors.',
      },
    ],
    location: {
      lat: 52.36611,
      lng: 4.91667,
      anchor: 'area',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q713124', deltaM: 0 },
        { kind: 'osm', ref: 'way/4366723', deltaM: 8 },
        { kind: 'wikipedia', ref: 'Artis (zoo)', deltaM: 0 },
      ],
      verifiedAt: '2026-09-12',
      map: { x: 0.767, y: 0.434 },
      // The zoo's own visit page gives the entrance as Plantage Kerklaan 38–40.
      // (artis.nl/en/plan-your-visit/)
      findIt: {
        el: 'Η είσοδος είναι στη Plantage Kerklaan 38–40, στη γειτονιά Plantage· το πλανητάριο είναι ακριβώς δίπλα της.',
        en: 'The entrance is at Plantage Kerklaan 38–40, in the Plantage neighbourhood; the planetarium is right beside it.',
      },
    },
    question: {
      q: {
        el: 'Τι σημαίνει το λατινικό όνομα του ζωολογικού κήπου;',
        en: 'What does the zoo’s Latin name mean?',
      },
      answers: [
        { el: 'Η φύση διδάσκει την τέχνη', en: 'Nature teaches art' },
        { el: 'Όλα τα ζώα του κόσμου', en: 'Animals of the world' },
        { el: 'Ο κήπος των μεγάλων βασιλιάδων', en: 'The garden of kings' },
        { el: 'Τέχνη για όλο τον κόσμο', en: 'Art for everyone' },
      ],
      explanation: {
        el:
          'Natura Artis Magistra: η φύση είναι η δασκάλα της τέχνης. Οι ιδρυτές πίστευαν ότι ' +
          'όποιος θέλει να φτιάξει κάτι όμορφο πρέπει πρώτα να κοιτάξει τα ζώα.',
        en:
          'Natura Artis Magistra: nature is the teacher of art. The founders believed that ' +
          'anyone who wants to make something beautiful should first look at animals.',
      },
    },
  },

  // ---------------------------------------------------------- albert cuyp market
  {
    id: 'amsterdam-albert-cuyp-market',
    cityId: 'amsterdam',
    emoji: '🧇',
    category: 'food',
    difficulty: 1,

    name: { el: 'Αγορά Albert Cuyp', en: 'Albert Cuyp Market' },
    tagline: {
      el: 'Η πιο πολυσύχναστη αγορά της χώρας, με ζεστές βάφλες σιροπιού',
      en: 'The busiest market in the country, with hot syrup waffles',
    },
    story: {
      el:
        'Η αγορά Albert Cuyp ξεκίνησε γύρω στο 1905, όταν οι μικροπωλητές που έσπρωχναν ' +
        'καρότσια στη γειτονιά De Pijp πήραν εντολή να μπουν στη σειρά σε έναν δρόμο, τα ' +
        'Σάββατα το βράδυ. Το 1912 έγινε ημερήσια αγορά έξι μέρες την εβδομάδα, και από τότε ' +
        'είναι ανοιχτή Δευτέρα ως Σάββατο. Περίπου 260 πάγκοι απλώνονται κατά μήκος της ' +
        'Albert Cuypstraat, που πήρε το όνομά της από έναν ζωγράφο του 17ου αιώνα, και είναι ' +
        'η πιο πολυσύχναστη αγορά της Ολλανδίας. Αγοράζεις φρούτα, ψάρια, τυρί, κουδούνια ' +
        'ποδηλάτου και κάλτσες, και ακούς μια ντουζίνα γλώσσες, γιατί στη γειτονιά ζουν ' +
        'οικογένειες από το Σουρινάμ, την Τουρκία, το Μαρόκο και από παντού. Για ένα παιδί η ' +
        'αγορά είναι ένα πράγμα: η stroopwafel, δύο λεπτές βάφλες πιεσμένες γύρω από ζεστό ' +
        'σιρόπι καραμέλας, ψημένες μπροστά σου και φαγωμένες όσο ακόμη λυγίζουν. Το κόλπο ' +
        'είναι να την ακουμπήσεις πάνω σε μια κούπα ζεστή σοκολάτα, ώστε ο ατμός να μαλακώσει ' +
        'το σιρόπι. Ψάξε και τους πάγκους με τη ρέγγα, όπου οι τολμηροί τρώνε ελαφρά ' +
        'παστωμένη ρέγγα κρατώντας την από την ουρά, και τα τηγάνια για poffertjes, γεμάτα ' +
        'λακκούβες, με μια μικροσκοπική τηγανίτα να φουσκώνει σε καθεμία.',
      en:
        'The Albert Cuyp Market began around 1905, when the traders who had been pushing ' +
        'carts around the De Pijp neighbourhood were told to line up in one street on ' +
        'Saturday evenings. In 1912 it became a daytime market six days a week, and it has ' +
        'been open Monday to Saturday ever since. Some 260 stalls stretch along Albert ' +
        'Cuypstraat, named after a painter from the seventeenth century, and it is the ' +
        'busiest market in the Netherlands. You can buy fruit, fish, cheese, bicycle bells ' +
        'and socks, and hear a dozen languages, because this neighbourhood is home to ' +
        'families from Suriname, Turkey, Morocco and everywhere else. For a child the market ' +
        'is about one thing: the stroopwafel, two thin waffles pressed around hot caramel ' +
        'syrup, baked in front of you and eaten while it still bends. The trick is to rest it ' +
        'on top of a mug of hot chocolate so the steam softens the syrup. Look also for the ' +
        'herring stalls, where the brave eat lightly salted herring held by the tail, and the ' +
        'poffertjes pans, full of little dimples with a tiny pancake puffing up in each one.',
    },
    facts: [
      {
        el: 'Ξεκίνησε το 1905 τα Σάββατα το βράδυ και από το 1912 λειτουργεί έξι μέρες την εβδομάδα.',
        en: 'It began in 1905 on Saturday evenings and has run six days a week since 1912.',
      },
      {
        el: 'Έχει περίπου 260 πάγκους και είναι η πιο πολυσύχναστη αγορά της Ολλανδίας.',
        en: 'It has about 260 stalls and is the busiest market in the Netherlands.',
      },
      {
        el: 'Πήρε το όνομά της από τον Albert Cuyp, ζωγράφο του 17ου αιώνα.',
        en: 'It is named after Albert Cuyp, a painter of the seventeenth century.',
      },
    ],
    location: {
      lat: 52.35611,
      lng: 4.89694,
      anchor: 'area',
      confidence: 'C',
      sources: [
        { kind: 'wikidata', ref: 'Q2342892', deltaM: 0 },
        { kind: 'osm', ref: 'relation/7112728', deltaM: 134 },
        { kind: 'wikipedia', ref: 'Albert Cuyp Market', deltaM: 108 },
      ],
      verifiedAt: '2026-09-12',
      map: { x: 0.569, y: 0.616 },
      note: 'An area pin on a market street; Wikipedia sits 108 m from it, well inside the length of the market.',
    },
    question: {
      q: {
        el: 'Με τι είναι γεμιστή μια stroopwafel;',
        en: 'What is a stroopwafel filled with?',
      },
      answers: [
        { el: 'Σιρόπι καραμέλας', en: 'Caramel syrup' },
        { el: 'Λιωμένο τυρί', en: 'Melted cheese' },
        { el: 'Μαρμελάδα μήλο', en: 'Apple jam' },
        { el: 'Κρέμα από σοκολάτα', en: 'Chocolate cream' },
      ],
      explanation: {
        el:
          'Stroop σημαίνει σιρόπι. Οι δύο βάφλες κολλούν με ζεστή καραμέλα, και όσο είναι ' +
          'ζεστή λυγίζει· όταν κρυώσει, γίνεται τραγανή.',
        en:
          'Stroop means syrup. The two waffles are stuck together with hot caramel, and while ' +
          'it is warm it bends; once it cools, it goes crisp.',
      },
    },
  },

  // ------------------------------------------------------------ olympic stadium
  {
    id: 'amsterdam-olympic-stadium',
    cityId: 'amsterdam',
    emoji: '🔥',
    category: 'sport',
    difficulty: 2,

    name: { el: 'Ολυμπιακό Στάδιο', en: 'Olympic Stadium' },
    tagline: {
      el: 'Εδώ άναψε για πρώτη φορά η Ολυμπιακή φλόγα',
      en: 'Where the Olympic flame was lit for the first time',
    },
    story: {
      el:
        'Οι Ολυμπιακοί Αγώνες ήρθαν στο Άμστερνταμ το 1928, και η πόλη έχτισε γι’ αυτούς ' +
        'αυτό το στάδιο, σε σχέδια του Jan Wils, από τούβλο, με 31.600 θέσεις. Δίπλα του ' +
        'στέκεται ένας ψηλός πύργος, ο Πύργος του Μαραθωνίου, και στην κορυφή του άναψε μια ' +
        'φωτιά για όλη τη διάρκεια των Αγώνων, ώστε να βλέπει κανείς από μακριά πού γίνονται ' +
        'οι Ολυμπιακοί. Κανείς δεν το είχε κάνει πριν. Κάθε Ολυμπιάδα από τότε έχει τη φλόγα ' +
        'της, και σήμερα ανάβει στην Ολυμπία, στην Ελλάδα, και ταξιδεύει ως την πόλη των ' +
        'Αγώνων· η ιδέα ξεκίνησε εδώ. Εκείνοι οι Αγώνες είχαν κι άλλες πρωτιές: οι γυναίκες ' +
        'έτρεξαν και πήδηξαν στον στίβο για πρώτη φορά, ο στίβος είχε μήκος 400 μέτρα, που ' +
        'έγινε ο κανόνας, και η Ελλάδα μπήκε πρώτη στην παρέλαση της έναρξης, με τη ' +
        'διοργανώτρια χώρα τελευταία, όπως γίνεται ακόμη. Ήρθαν αθλητές από 46 χώρες. Τη ' +
        'δεκαετία του 1990 το στάδιο παραλίγο να γκρεμιστεί· αντί γι’ αυτό έγινε εθνικό ' +
        'μνημείο, η επιπλέον σειρά κερκίδων του 1937 αφαιρέθηκε, και ξανάνοιξε το 2000 όπως ' +
        'ήταν το 1928. Ακόμη γίνονται εδώ αγώνες στίβου.',
      en:
        'The Olympic Games came to Amsterdam in 1928, and the city built this stadium for ' +
        'them, designed by Jan Wils in brick, with 31,600 seats. Beside it stands a tall ' +
        'tower, the Marathon Tower, and at the top of it a fire was lit for the whole of the ' +
        'Games, so that people could see from far away where the Olympics were. Nobody had ' +
        'done that before. Every Games since then has had its flame, and today it is lit in ' +
        'Olympia, in Greece, and carried to the host city; the idea started here. Those ' +
        'Games had other firsts: women ran and jumped in athletics for the first time, the ' +
        'running track was 400 metres long, which became the standard, and Greece marched ' +
        'first in the opening parade, with the host country last, as it still does. Athletes ' +
        'came from 46 countries. In the 1990s the stadium was almost torn down; instead it ' +
        'was made a national monument, the extra ring of seats added in 1937 was removed, ' +
        'and it reopened in 2000 looking as it did in 1928. Athletics is still run here.',
    },
    facts: [
      {
        el: 'Άνοιξε στις 17 Μαΐου 1928, σε σχέδια του Jan Wils, με 31.600 θέσεις.',
        en: 'It opened on 17 May 1928, designed by Jan Wils, with 31,600 seats.',
      },
      {
        el: 'Η πρώτη Ολυμπιακή φλόγα έκαιγε στον Πύργο του Μαραθωνίου, δίπλα στο στάδιο.',
        en: 'The first Olympic flame burned in the Marathon Tower beside the stadium.',
      },
      {
        el: 'Στους Αγώνες του 1928 πήραν μέρος 2.883 αθλητές από 46 χώρες, ανάμεσά τους 277 γυναίκες.',
        en: 'The 1928 Games had 2,883 athletes from 46 countries, 277 of them women.',
      },
      {
        el: 'Έγινε εθνικό μνημείο το 1987 και ξανάνοιξε στις 13 Μαΐου 2000, όπως ήταν το 1928.',
        en: 'It became a national monument in 1987 and reopened on 13 May 2000, as it was in 1928.',
      },
    ],
    location: {
      lat: 52.34342,
      lng: 4.85419,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q503319', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Olympic Stadium (Amsterdam)', deltaM: 10 },
      ],
      verifiedAt: '2026-09-12',
      map: { x: 0.142, y: 0.847 },
      // The stadium's own site gives the address as Olympisch Stadion 2, 1076 DE Amsterdam.
      // (olympischstadion.nl/en/)
      findIt: {
        el: 'Η διεύθυνση είναι Olympisch Stadion 2. Ψάξε πρώτα τον ψηλό τούβλινο πύργο· το στάδιο είναι ακριβώς δίπλα του.',
        en: 'The address is Olympisch Stadion 2. Look for the tall brick tower first; the stadium is right beside it.',
      },
    },
    question: {
      q: {
        el: 'Τι έγινε για πρώτη φορά σε αυτούς τους Αγώνες, το 1928;',
        en: 'What happened for the first time at these Games, in 1928?',
      },
      answers: [
        { el: 'Άναψε μια φλόγα', en: 'A flame was lit' },
        { el: 'Δόθηκαν μετάλλια', en: 'Medals were given' },
        { el: 'Κολύμπησαν γυναίκες', en: 'Women swam' },
        { el: 'Μεταφέρθηκε δάδα', en: 'A torch was carried' },
      ],
      explanation: {
        el:
          'Μετάλλια υπήρχαν από το 1896 και γυναίκες κολυμπούσαν από το 1912. Η φλόγα ήταν ' +
          'καινούργια το 1928· η λαμπαδηδρομία από την Ολυμπία ήρθε αργότερα, το 1936.',
        en:
          'Medals existed from 1896 and women swam from 1912. The flame was new in 1928; the ' +
          'torch relay from Olympia came later, in 1936.',
      },
    },
  },

  // ----------------------------------------------------------------- de gooyer
  {
    id: 'amsterdam-de-gooyer',
    cityId: 'amsterdam',
    emoji: '🌬️',
    category: 'landmark',
    difficulty: 1,

    name: { el: 'Ανεμόμυλος De Gooyer', en: 'De Gooyer windmill' },
    tagline: {
      el: 'Ο ψηλότερος ξύλινος ανεμόμυλος της Ολλανδίας, μέσα στην πόλη',
      en: 'The tallest wooden windmill in the Netherlands, inside the city',
    },
    story: {
      el:
        'Ένας ανεμόμυλος στη μέση μιας πόλης είναι παράξενο θέαμα, αλλά αυτός ήταν εδώ ' +
        'πρώτος. Ο De Gooyer είναι μύλος για σιτάρι, χτισμένος για να αλέθει σπόρους σε ' +
        'αλεύρι, και το όνομά του πάει πίσω στο 1609 περίπου, όταν τον είχαν δύο αδέρφια από ' +
        'την περιοχή Gooi. Οι μύλοι πρέπει να πιάνουν τον άνεμο, κι έτσι όταν φύτρωναν σπίτια ' +
        'γύρω τους, τους μετακινούσαν. Αυτός μετακινήθηκε περισσότερες από μία φορές· το 1814 ' +
        'ξαναχτίστηκε πάνω στην πέτρινη βάση ενός νερόμυλου που μόλις είχε γκρεμιστεί, και ' +
        'εκεί στέκεται από τότε. Έχει ύψος 26,6 μέτρα, ο ψηλότερος ξύλινος μύλος της ' +
        'Ολλανδίας, ένα οκτάγωνο ξύλινο σώμα πάνω σε τούβλινο πόδι. Τη δεκαετία του 1920 ' +
        'έπεφτε κομμάτια· η πόλη τον αγόρασε το 1928 για 3.200 φιορίνια και τον επισκεύασε, ' +
        'και το 1976 πήρε πίσω τα παλιά ολλανδικά φτερά του. Δεν αλέθει πια, και δεν μπορείς ' +
        'να μπεις μέσα, αλλά στάσου από κάτω και κοίτα: σε μέρα με άνεμο τα φτερά γυρίζουν ' +
        'ακόμη. Δίπλα του, σε ό,τι ήταν κάποτε δημόσιο λουτρό του 1911, στεγάζεται τώρα μια ' +
        'ζυθοποιία.',
      en:
        'A windmill in the middle of a city is a strange sight, but this one was here first. ' +
        'De Gooyer is a corn mill, built to grind grain into flour, and its name goes back to ' +
        'about 1609, when two brothers from the Gooi region owned it. Mills have to catch the ' +
        'wind, so when houses grew up around them they were moved, and this one was moved ' +
        'more than once; in 1814 it was rebuilt on the stone base of a water mill that had ' +
        'just been demolished, and there it has stood ever since. It is 26.6 metres tall, the ' +
        'tallest wooden mill in the Netherlands, an eight-sided wooden body on a brick foot. ' +
        'By the 1920s it was falling apart; the city bought it in 1928 for 3,200 guilders and ' +
        'restored it, and in 1976 it got back its old-fashioned Dutch sails. It no longer ' +
        'grinds, and you cannot go inside, but stand under it and watch: on a windy day the ' +
        'sails still turn. Next door, in what was once a public bathhouse from 1911, a ' +
        'brewery has moved in.',
    },
    facts: [
      {
        el: 'Έχει ύψος 26,6 μέτρα και είναι ο ψηλότερος ξύλινος ανεμόμυλος της Ολλανδίας.',
        en: 'It is 26.6 metres tall, the tallest wooden windmill in the Netherlands.',
      },
      {
        el: 'Ξαναχτίστηκε σε αυτό το σημείο το 1814, πάνω στη βάση ενός γκρεμισμένου νερόμυλου.',
        en: 'It was rebuilt on this spot in 1814, on the base of a demolished water mill.',
      },
      {
        el: 'Η πόλη τον αγόρασε το 1928 για 3.200 φιορίνια· είναι εθνικό μνημείο από το 1970.',
        en: 'The city bought it in 1928 for 3,200 guilders; it has been a national monument since 1970.',
      },
    ],
    location: {
      lat: 52.36667,
      lng: 4.92611,
      anchor: 'centroid',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q2756543', deltaM: 0 },
        { kind: 'osm', ref: 'node/33057057', deltaM: 14 },
        { kind: 'wikipedia', ref: 'De Gooyer, Amsterdam', deltaM: 0 },
      ],
      verifiedAt: '2026-09-12',
      map: { x: 0.861, y: 0.424 },
    },
    question: {
      q: {
        el: 'Για ποια δουλειά χτίστηκε αυτός ο μύλος;',
        en: 'What was this mill built to do?',
      },
      answers: [
        { el: 'Να αλέθει σιτάρι', en: 'Grind grain' },
        { el: 'Να αντλεί νερό', en: 'Pump water' },
        { el: 'Να πριονίζει ξύλα', en: 'Saw timber' },
        { el: 'Να φτιάχνει χαρτί', en: 'Make paper' },
      ],
      explanation: {
        el:
          'Οι περισσότεροι ολλανδικοί μύλοι αντλούσαν νερό από τη γη. Αυτός όμως ήταν μύλος ' +
          'σιταριού: ο άνεμος γύριζε δύο βαριές πέτρες που έτριβαν τους σπόρους σε αλεύρι.',
        en:
          'Most Dutch mills pumped water off the land. This one was a corn mill: the wind ' +
          'turned two heavy stones that ground the grain into flour.',
      },
    },
  },

  // -------------------------------------------------------------------- hortus
  {
    id: 'amsterdam-hortus',
    cityId: 'amsterdam',
    emoji: '🌿',
    category: 'science',
    difficulty: 2,

    name: { el: 'Χόρτους Μποτάνικους', en: 'Hortus Botanicus' },
    tagline: {
      el: 'Ο κήπος που έδωσε στον κόσμο τον καφέ του',
      en: 'The garden that gave the world its coffee',
    },
    story: {
      el:
        'Το 1638 η πόλη του Άμστερνταμ φύτεψε έναν κήπο με φαρμακευτικά βότανα, ώστε οι ' +
        'γιατροί και οι φαρμακοποιοί να έχουν τα φυτά που χρειάζονταν για τα φάρμακά τους. ' +
        'Είναι ένας από τους παλαιότερους βοτανικούς κήπους στον κόσμο. Το 1682 μετακόμισε ' +
        'εδώ, στην Plantage, και καθώς τα ολλανδικά καράβια γύριζαν από κάθε γωνιά της γης, ο ' +
        'κήπος γέμισε φυτά που κανείς στην Ευρώπη δεν είχε δει. Ένα από αυτά άλλαξε τον ' +
        'κόσμο. Το 1706 έφτασε ένα φυτό καφέ από την Ιάβα, και από τα βλαστάρια του βγήκαν ' +
        'τα φυτά καφέ που στάλθηκαν στη Νότια και την Κεντρική Αμερική, εκεί όπου σήμερα ' +
        'είναι τα μεγαλύτερα καφεοχώραφα του κόσμου. Δύο μικροί ελαιοφοίνικες από τον ' +
        'Μαυρίκιο έκαναν το ίδιο για την Ασία. Σήμερα φυτρώνουν εδώ πάνω από 4.000 είδη, ' +
        'ανάμεσά τους ένα κυκαδόφυτο από τη Νότια Αφρική που θεωρείται γύρω στα 300 ετών και ' +
        'ίσως είναι το παλαιότερο φυτό σε γλάστρα στον κόσμο. Υπάρχει ένα θερμοκήπιο για ' +
        'φοίνικες από το 1912, ένα θερμοκήπιο με τρία κλίματα, από έρημο ως τροπικό δάσος, ' +
        'και ένα σπίτι πεταλούδων όπου οι πεταλούδες κάθονται πάνω σου, αν σταθείς ακίνητος.',
      en:
        'In 1638 the city of Amsterdam planted a garden of medicinal herbs, so that doctors ' +
        'and apothecaries would have the plants they needed for their medicines. It is one of ' +
        'the oldest botanical gardens in the world. In 1682 it moved here, to the Plantage, ' +
        'and as Dutch ships came back from every corner of the earth, the garden filled with ' +
        'plants nobody in Europe had seen. One of them changed the world. In 1706 a coffee ' +
        'plant arrived from Java, and from its seedlings came the coffee plants that were ' +
        'sent on to South and Central America, where the world’s biggest coffee farms are ' +
        'today. Two small oil palms from Mauritius did the same for Asia. Today more than ' +
        '4,000 species grow here, among them a cycad from South Africa thought to be around ' +
        '300 years old, which may be the oldest potted plant in the world. There is a palm ' +
        'house from 1912, a greenhouse with three climates, from desert to rainforest, and a ' +
        'butterfly house where the butterflies land on you if you stand still.',
    },
    facts: [
      {
        el: 'Ιδρύθηκε το 1638 ως κήπος φαρμακευτικών βοτάνων και μετακόμισε εδώ το 1682.',
        en: 'It was founded in 1638 as a medicinal herb garden and moved here in 1682.',
      },
      {
        el: 'Ένα φυτό καφέ που έφτασε εδώ το 1706 έγινε ο πρόγονος των καφεοχώραφων της Λατινικής Αμερικής.',
        en: 'A coffee plant that arrived here in 1706 became the ancestor of Latin America’s coffee farms.',
      },
      {
        el: 'Φυτρώνουν εδώ πάνω από 4.000 είδη φυτών.',
        en: 'More than 4,000 plant species grow here.',
      },
      {
        el: 'Το θερμοκήπιο των φοινίκων είναι του 1912 και το θερμοκήπιο των τριών κλιμάτων του 1993.',
        en: 'The palm house dates from 1912 and the three-climate greenhouse from 1993.',
      },
    ],
    location: {
      lat: 52.36697,
      lng: 4.90844,
      anchor: 'area',
      confidence: 'C',
      sources: [
        { kind: 'wikidata', ref: 'Q1576733', deltaM: 0 },
        { kind: 'osm', ref: 'way/31527079', deltaM: 58 },
        { kind: 'wikipedia', ref: 'Hortus Botanicus (Amsterdam)', deltaM: 41 },
      ],
      verifiedAt: '2026-09-12',
      map: { x: 0.684, y: 0.419 },
      note: 'An area pin on a garden; OSM sits 58 m and Wikipedia 41 m from it, both inside the grounds.',
      // The garden's own site gives the address as Plantage Middenlaan 2A. (dehortus.nl/en/)
      findIt: {
        el: 'Η είσοδος είναι στην Plantage Middenlaan 2A, λίγα βήματα από τον ζωολογικό κήπο Artis.',
        en: 'The entrance is at Plantage Middenlaan 2A, a few steps from the Artis zoo.',
      },
    },
    question: {
      q: {
        el: 'Ποιο φυτό έφυγε από αυτόν τον κήπο και άλλαξε τι πίνει ο κόσμος;',
        en: 'Which plant left this garden and changed what the world drinks?',
      },
      answers: [
        { el: 'Ο καφές', en: 'Coffee' },
        { el: 'Το τσάι', en: 'Tea' },
        { el: 'Το κακάο', en: 'Cocoa beans' },
        { el: 'Ο δυόσμος', en: 'Mint' },
      ],
      explanation: {
        el:
          'Ένα φυτό καφέ ήρθε από την Ιάβα το 1706. Τα παιδιά και τα εγγόνια του ταξίδεψαν ' +
          'ως την Αμερική, όπου φύτρωσαν τα μεγαλύτερα καφεοχώραφα του κόσμου.',
        en:
          'A coffee plant came from Java in 1706. Its children and grandchildren travelled to ' +
          'the Americas, where the world’s biggest coffee farms grew from them.',
      },
    },
  },
];

export const trails: Trail[] = [
  {
    id: 'amsterdam-first-time',
    cityId: 'amsterdam',
    emoji: '🚲',
    name: { el: 'Πρώτη φορά στο Άμστερνταμ', en: 'First time in Amsterdam' },
    promise: {
      el: 'Θα έχεις δει τον σταθμό-παλάτι, το φράγμα που ονόμασε την πόλη, το στέμμα στον πύργο, μια αγορά που επιπλέει, μια γέφυρα που ανοίγει και τον πιο διάσημο πίνακα της χώρας.',
      en: 'You will have seen the palace of a station, the dam that named the city, the crown on the tower, a market that floats, a bridge that opens and the country’s most famous painting.',
    },
    placeIds: [
      'amsterdam-centraal',
      'amsterdam-dam',
      'amsterdam-westerkerk',
      'amsterdam-bloemenmarkt',
      'amsterdam-magere-brug',
      'amsterdam-rijksmuseum',
    ],
  },
  {
    id: 'amsterdam-two-hours',
    cityId: 'amsterdam',
    emoji: '⏱️',
    name: { el: 'Δύο ώρες στο λιμάνι', en: 'Two hours by the harbour' },
    promise: {
      el: 'Τέσσερα μέρα σε απόσταση περιπάτου από τον σταθμό: μια πύλη που έγινε ζυγαριά, ένα πράσινο καράβι με δωρεάν στέγη και ένα αληθινό καράβι που ανεβαίνεις.',
      en: 'Four places within a walk of the station: a gate that became a set of scales, a green ship with a free roof and a real ship you can climb aboard.',
    },
    placeIds: ['amsterdam-centraal', 'amsterdam-waag', 'amsterdam-nemo', 'amsterdam-scheepvaartmuseum'],
  },
  {
    id: 'amsterdam-rainy-day',
    cityId: 'amsterdam',
    emoji: '☔',
    name: { el: 'Μέρα βροχής, μέσα', en: 'A rainy day, indoors' },
    promise: {
      el: 'Τέσσερις στέγες για μια βρεγμένη μέρα: πίνακες, πειράματα, ένα καράβι με αιώρες, και ένα ήσυχο σπίτι για όσους είναι πάνω από δέκα.',
      en: 'Four roofs for a wet day: paintings, experiments, a ship with hammocks, and a quiet house for those aged ten and over.',
    },
    placeIds: [
      'amsterdam-rijksmuseum',
      'amsterdam-nemo',
      'amsterdam-scheepvaartmuseum',
      'amsterdam-anne-frank-house',
    ],
  },
  {
    id: 'amsterdam-out-of-doors',
    cityId: 'amsterdam',
    emoji: '🦜',
    name: { el: 'Έξω, με τα πόδια ή με ποδήλατο', en: 'Outdoors, on foot or by bike' },
    promise: {
      el: 'Παπαγάλοι σε ένα πάρκο, η πρώτη Ολυμπιακή φλόγα, ζεστές βάφλες, το φυτό που έγινε καφές, λιοντάρια δίπλα στα κανάλια και ένας μύλος που γυρίζει ακόμη.',
      en: 'Parrots in a park, the first Olympic flame, hot waffles, the plant that became coffee, lions beside the canals and a mill that still turns.',
    },
    placeIds: [
      'amsterdam-vondelpark',
      'amsterdam-olympic-stadium',
      'amsterdam-albert-cuyp-market',
      'amsterdam-hortus',
      'amsterdam-artis',
      'amsterdam-de-gooyer',
    ],
  },
];
