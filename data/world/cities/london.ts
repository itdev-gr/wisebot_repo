/**
 * WiseBot World — London.
 *
 * Seventeen places, three of them museums with an interior. Converted from the ten
 * Explorer spots in `data/explore/cities/london.ts` and extended with the three great
 * free museums, the Monument, Borough Market, the zoo and the two Greenwich places. The
 * Explorer's riddles, parent hints and on-site questions are kept aside in
 * `scripts/world/seeds/london.explorer.json` until the engine has a field for them.
 *
 * Written for a six- to twelve-year-old, which is a constraint on the writing and not
 * on the truth: a fire that ate a city, an admiral who died winning, sculptures that one
 * country asks another to give back. Told plainly and briefly.
 *
 * Every coordinate in this file is copied from `data/world/coords/london.json`, which
 * `scripts/world/resolve-coords.mjs` produced from Wikidata and cross-checked against
 * OpenStreetMap and Wikipedia. Nothing here was typed by hand, and nothing graded `D`
 * is present: the Royal Observatory item graded D on a mistyped Wikipedia coordinate and
 * was replaced by the meridian line itself, for the reason written into
 * `scripts/world/seeds/london.json`. The `map` positions are the same coordinates
 * projected into the bounds declared in `data/world/countries/united-kingdom.ts`.
 *
 * Facts checked on 12 September 2026 against the venues' own pages and Wikipedia:
 * Buckingham Palace (775 rooms; Victoria moved in 1837), Westminster Abbey (40 monarchs
 * crowned since 1066; Coronation Chair commissioned 1296), the Elizabeth Tower (96 m;
 * the Great Bell first rang in 1859 and weighs 13.7 t), the London Eye (135 m; 32
 * capsules; opened for 2000), Nelson's Column (52 m; lions 1867), Covent Garden market
 * hall (1830, Charles Fowler; market left 1974), the British Museum (opened 1759; Rosetta
 * Stone found 1799; roof of 3,312 panes, 2000), St Paul's (finished 1710; dome 111 m;
 * 257 steps to the Whispering Gallery), the Tower (White Tower begun c. 1078; moat
 * drained 1843), Tower Bridge (1894; about 800 lifts a year; walkways 42 m), the Natural
 * History Museum (Hope 25.2 m, hung 2017; sequoia 1,300 years; Sophie 2014), the Science
 * Museum (Puffing Billy 1813–14; Apollo 10 on loan since 1978; Space gallery opened
 * September 2025), the Monument (61 m; 311 steps; 1671–77; 61 m from Pudding Lane),
 * Borough Market (trading recorded 1014; present site since 1756; halls 1851), London
 * Zoo (opened 1828, to the public 1847; first reptile house 1849; first public aquarium
 * 1853; Winnie 1914–1934), Cutty Sark (built 1869 in Dumbarton; Sydney–London in 73
 * days; raised 3 m in 2012), the Royal Observatory (founded 1675; time ball since 1833;
 * meridian 1884).
 *
 * `el` and `en` are complete. `de`, `fr`, `es` and `it` land in the second pass.
 */

import type { Place, Trail } from '../types';

export const places: Place[] = [
  // ------------------------------------------------------------ buckingham palace
  {
    id: 'london-buckingham-palace',
    cityId: 'london',
    emoji: '👑',
    category: 'landmark',
    difficulty: 1,

    name: { el: 'Ανάκτορα του Μπάκιγχαμ', en: 'Buckingham Palace' },
    tagline: {
      el: '775 δωμάτια και μια σημαία που λέει ποιος είναι μέσα',
      en: '775 rooms and a flag that says who is home',
    },
    story: {
      el:
        'Αυτό το παλάτι ξεκίνησε ως ένα πολύ μικρότερο σπίτι, χτισμένο πριν από τριακόσια ' +
        'χρόνια για έναν δούκα που λεγόταν Μπάκιγχαμ. Ο βασιλιάς Γεώργιος Γ΄ το αγόρασε το ' +
        '1761 για τη γυναίκα του, και οι επόμενοι βασιλιάδες το μεγάλωναν και το μεγάλωναν. ' +
        'Η πρώτη που έμεινε πραγματικά εδώ ήταν η βασίλισσα Βικτωρία, το 1837, λίγες ' +
        'εβδομάδες αφότου πήρε το στέμμα σε ηλικία δεκαοκτώ ετών. Σήμερα το παλάτι έχει 775 ' +
        'δωμάτια, ανάμεσά τους 78 μπάνια και 19 μεγάλες αίθουσες για επίσημες γιορτές. Ο ' +
        'κήπος πίσω του είναι ο μεγαλύτερος ιδιωτικός κήπος του Λονδίνου, με δική του λίμνη. ' +
        'Μπροστά, πίσω από τα κάγκελα, γίνεται η αλλαγή της φρουράς με μουσική και ' +
        'παρέλαση, και οι στρατιώτες με τα ψηλά γούνινα καπέλα στέκονται ακίνητοι σαν ' +
        'αγάλματα. Κοίτα τον ιστό στη στέγη: αν κυματίζει η βασιλική σημαία με τα λιοντάρια, ' +
        'ο βασιλιάς είναι μέσα. Αν κυματίζει η σημαία της χώρας, λείπει. Ένα ολόκληρο παλάτι ' +
        'που σου λέει με μια ματιά αν είναι κανείς στο σπίτι.',
      en:
        'This palace began as a much smaller house, built three hundred years ago for a ' +
        'duke called Buckingham. King George III bought it in 1761 for his wife, and the ' +
        'kings after him made it bigger and bigger. The first monarch who actually lived ' +
        'here was Queen Victoria, in 1837, a few weeks after she was given the crown at the ' +
        'age of eighteen. Today the palace has 775 rooms, among them 78 bathrooms and 19 ' +
        'grand State Rooms for official celebrations. The garden behind it is the largest ' +
        'private garden in London, with a lake of its own. Out front, behind the railings, ' +
        'the Changing of the Guard happens with music and marching, and the soldiers in ' +
        'tall bearskin hats stand as still as statues. Look at the flagpole on the roof: if ' +
        'the royal flag with the lions is flying, the King is inside. If the flag of the ' +
        'country is flying, he is away. A whole palace that tells you at a glance whether ' +
        'anyone is home.',
    },
    facts: [
      {
        el: 'Έχει 775 δωμάτια, ανάμεσά τους 78 μπάνια.',
        en: 'It has 775 rooms, including 78 bathrooms.',
      },
      {
        el: 'Η βασίλισσα Βικτωρία ήταν η πρώτη που έμεινε εδώ, το 1837.',
        en: 'Queen Victoria was the first monarch to live here, in 1837.',
      },
      {
        el: 'Ο κήπος του είναι ο μεγαλύτερος ιδιωτικός κήπος του Λονδίνου.',
        en: 'Its garden is the largest private garden in London.',
      },
    ],
    location: {
      lat: 51.501,
      lng: -0.142,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q42182', deltaM: 0 },
        { kind: 'osm', ref: 'relation/5208404', deltaM: 49 },
        { kind: 'wikipedia', ref: 'Buckingham Palace', deltaM: 19 },
      ],
      verifiedAt: '2026-09-12',
      map: { x: 0.238, y: 0.571 },
      // The stored point is the middle of the building. A child watches from the
      // forecourt railings, in front of the white Victoria Memorial.
      findIt: {
        el: 'Στάσου μπροστά στα κάγκελα, δίπλα στο λευκό μνημείο της Βικτωρίας με τη χρυσή φιγούρα στην κορυφή.',
        en: 'Stand at the front railings, beside the white Victoria Memorial with the golden figure on top.',
      },
    },
    question: {
      q: {
        el: 'Ποιος έμεινε πρώτος σε αυτό το παλάτι ως βασιλιάς ή βασίλισσα;',
        en: 'Who was the first king or queen to live in this palace?',
      },
      answers: [
        { el: 'Η βασίλισσα Βικτωρία', en: 'Queen Victoria' },
        { el: 'Ο Ερρίκος ο Η΄', en: 'Henry VIII' },
        { el: 'Ο Γουλιέλμος ο Κατακτητής', en: 'William the Conqueror' },
        { el: 'Η βασίλισσα Ελισάβετ Β΄', en: 'Queen Elizabeth II' },
      ],
      explanation: {
        el:
          'Η Βικτωρία μετακόμισε εδώ το 1837, λίγες εβδομάδες αφότου έγινε βασίλισσα. Από ' +
          'τότε το παλάτι είναι το σπίτι του θρόνου.',
        en:
          'Victoria moved in in 1837, a few weeks after she became queen. The palace has ' +
          'been the home of the throne ever since.',
      },
    },
  },

  // ------------------------------------------------------------ westminster abbey
  {
    id: 'london-westminster-abbey',
    cityId: 'london',
    emoji: '⛪',
    category: 'history',
    difficulty: 2,

    name: { el: 'Αβαείο του Γουέστμινστερ', en: 'Westminster Abbey' },
    tagline: {
      el: 'Η εκκλησία όπου στέφονται οι βασιλιάδες εδώ και χίλια χρόνια',
      en: 'The church where kings have been crowned for a thousand years',
    },
    story: {
      el:
        'Ανήμερα τα Χριστούγεννα του 1066, ο Γουλιέλμος ο Κατακτητής στέφθηκε βασιλιάς ' +
        'ακριβώς εδώ, και από τότε σαράντα βασιλιάδες και βασίλισσες πήραν το στέμμα τους ' +
        'σε αυτή την εκκλησία. Σχεδόν όλοι κάθισαν στην ίδια ξύλινη καρέκλα, την Καρέκλα ' +
        'της Στέψης, που την παρήγγειλε ο βασιλιάς Εδουάρδος Α΄ το 1296. Είναι γεμάτη ' +
        'χαραγμένα ονόματα: τον 18ο και 19ο αιώνα μαθητές του διπλανού σχολείου σκάλιζαν ' +
        'πάνω της κρυφά. Το κτίριο που βλέπεις το ξεκίνησε ο Ερρίκος Γ΄ πριν από 750 ' +
        'χρόνια, με μυτερές καμάρες και ψηλά παράθυρα φτιαγμένα για να σηκώνουν το βλέμμα ' +
        'σου προς τα πάνω. Το αβαείο είναι όμως και τόπος ανάπαυσης. Σε μια γωνιά ' +
        'βρίσκονται ποιητές και συγγραφείς, και κοντά τους ο Ισαάκ Νεύτων, που εξήγησε ' +
        'γιατί πέφτουν τα μήλα, ο Κάρολος Δαρβίνος, που εξήγησε πώς αλλάζουν τα ζώα, και ' +
        'ο Στίβεν Χόκινγκ, που μελέτησε τις μαύρες τρύπες. Πάνω από τη μεγάλη δυτική πόρτα ' +
        'στέκονται δέκα αγάλματα του 1998· δεν είναι βασιλιάδες, αλλά γενναίοι άνθρωποι ' +
        'του 20ού αιώνα, όπως ο Μάρτιν Λούθερ Κινγκ.',
      en:
        'On Christmas Day 1066, William the Conqueror was crowned king right here, and ' +
        'since then forty kings and queens have received their crown in this church. Almost ' +
        'all of them sat on the same wooden seat, the Coronation Chair, which King Edward I ' +
        'ordered in 1296. It is covered in carved names: in the 1700s and 1800s pupils from ' +
        'the school next door scratched their names into it when nobody was looking. The ' +
        'building you see was begun by Henry III 750 years ago, with pointed arches and ' +
        'tall windows made to pull your eyes upwards. But the abbey is also a resting ' +
        'place. In one corner lie poets and writers, and near them Isaac Newton, who ' +
        'explained why apples fall, Charles Darwin, who explained how animals change, and ' +
        'Stephen Hawking, who studied black holes. Above the great west door stand ten ' +
        'statues from 1998; they are not kings, but brave people of the twentieth century, ' +
        'such as Martin Luther King.',
    },
    facts: [
      {
        el: 'Σαράντα βασιλιάδες και βασίλισσες στέφθηκαν εδώ από το 1066.',
        en: 'Forty kings and queens have been crowned here since 1066.',
      },
      {
        el: 'Η Καρέκλα της Στέψης παραγγέλθηκε το 1296 και χρησιμοποιείται ακόμη.',
        en: 'The Coronation Chair was ordered in 1296 and is still in use.',
      },
      {
        el: 'Ο Νεύτων, ο Δαρβίνος και ο Χόκινγκ αναπαύονται μέσα στο αβαείο.',
        en: 'Newton, Darwin and Hawking all rest inside the abbey.',
      },
    ],
    location: {
      lat: 51.4994,
      lng: -0.12737,
      anchor: 'centroid',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q5933', deltaM: 0 },
        { kind: 'osm', ref: 'way/364313092', deltaM: 1 },
        { kind: 'wikipedia', ref: 'Westminster Abbey', deltaM: 10 },
      ],
      verifiedAt: '2026-09-12',
      map: { x: 0.31, y: 0.592 },
      // westminster-abbey.org/visit-us: visitors enter by the Great North Door, the
      // side that faces Parliament Square, not the west front with the two towers.
      findIt: {
        el: 'Η είσοδος για τους επισκέπτες είναι η μεγάλη βόρεια πόρτα, στην πλευρά που βλέπει την πλατεία του Κοινοβουλίου.',
        en: 'Visitors go in by the Great North Door, on the side that faces Parliament Square.',
      },
    },
    question: {
      q: {
        el: 'Πού κάθονται οι βασιλιάδες την ώρα της στέψης;',
        en: 'What do kings sit on at the moment they are crowned?',
      },
      answers: [
        { el: 'Σε μια ξύλινη καρέκλα', en: 'On a wooden chair' },
        { el: 'Σε έναν χρυσό θρόνο', en: 'On a golden throne' },
        { el: 'Σε ένα πέτρινο κάθισμα', en: 'On a stone seat' },
        { el: 'Σε ένα ασημένιο σκαμνί', en: 'On a silver stool' },
      ],
      explanation: {
        el:
          'Η Καρέκλα της Στέψης είναι από βελανιδιά και έχει πάνω από 700 χρόνια. Κάποτε ' +
          'ήταν χρυσωμένη· τώρα φαίνεται το ξύλο και τα χαραγμένα ονόματα.',
        en:
          'The Coronation Chair is oak and more than 700 years old. It was once gilded; now ' +
          'you can see the wood and the carved names.',
      },
    },
  },

  // -------------------------------------------------------------------- big ben
  {
    id: 'london-big-ben',
    cityId: 'london',
    emoji: '🕰️',
    category: 'landmark',
    difficulty: 1,

    name: { el: 'Μπιγκ Μπεν', en: 'Big Ben' },
    tagline: {
      el: 'Ο πύργος που όλοι φωνάζουν με το όνομα της καμπάνας του',
      en: 'The tower everyone calls by the name of its bell',
    },
    story: {
      el:
        'Το 1834 μια μεγάλη φωτιά κατέστρεψε το παλιό κτίριο του Κοινοβουλίου. Οι ' +
        'Λονδρέζοι έχτισαν στη θέση του ένα καινούργιο παλάτι με πάνω από χίλια δωμάτια ' +
        'και έναν πύργο ρολογιού 96 μέτρων. Μέσα του κρέμεται μια καμπάνα 13,7 τόνων, όσο ' +
        'δύο μεγάλοι ελέφαντες, και αυτή η καμπάνα, όχι ο πύργος, είναι το Μπιγκ Μπεν. ' +
        'Χτύπησε για πρώτη φορά το 1859 και ράγισε μέσα σε λίγους μήνες. Αντί να την ' +
        'αλλάξουν, οι μηχανικοί τη γύρισαν λίγο και έβαλαν ελαφρύτερο σφυρί· η ρωγμή ' +
        'υπάρχει ακόμη και δίνει στον ήχο της τον διάσημο, λίγο φάλτσο τόνο. Κανείς δεν ' +
        'ξέρει σίγουρα από πού βγήκε το όνομα· οι περισσότεροι πιστεύουν ότι τιμά τον ' +
        'Μπέντζαμιν Χολ, τον μεγαλόσωμο κύριο που είχε την ευθύνη των έργων. Ο πύργος ' +
        'λέγεται Πύργος της Ελισάβετ από το 2012. Τα τέσσερα πρόσωπα του ρολογιού έχουν ' +
        'πλάτος επτά μέτρα και, από την επισκευή του 2022, δείκτες βαμμένους μπλε, το ' +
        'αρχικό τους χρώμα. Όταν το Κοινοβούλιο συνεδριάζει μετά τη δύση, ένα φως ανάβει ' +
        'στην κορυφή για να το ξέρει όλη η πόλη.',
      en:
        'In 1834 a great fire destroyed the old parliament building. Londoners built a new ' +
        'palace in its place with more than a thousand rooms and a clock tower 96 metres ' +
        'tall. Inside hangs a bell of 13.7 tonnes, as heavy as two big elephants, and that ' +
        'bell, not the tower, is Big Ben. It rang for the first time in 1859 and cracked ' +
        'within months. Instead of replacing it, the engineers turned it slightly and ' +
        'fitted a lighter hammer; the crack is still there and gives the sound its famous, ' +
        'slightly off-key tone. Nobody knows for sure where the name came from; most people ' +
        'think it honours Benjamin Hall, the large gentleman in charge of the building ' +
        'works. The tower has been called the Elizabeth Tower since 2012. Its four clock ' +
        'faces are seven metres wide and, since the repairs of 2022, have hands painted ' +
        'blue, their original colour. When Parliament sits after dark, a light shines at ' +
        'the very top so the whole city knows.',
    },
    facts: [
      {
        el: 'Ο πύργος έχει ύψος 96 μέτρα και 334 σκαλιά ως την καμπάνα.',
        en: 'The tower is 96 metres tall, with 334 steps up to the bell.',
      },
      {
        el: 'Η καμπάνα ζυγίζει 13,7 τόνους και χτύπησε πρώτη φορά το 1859.',
        en: 'The bell weighs 13.7 tonnes and first rang in 1859.',
      },
      {
        el: 'Κάθε πρόσωπο του ρολογιού έχει πλάτος επτά μέτρα.',
        en: 'Each clock face is seven metres across.',
      },
    ],
    location: {
      lat: 51.50067,
      lng: -0.12457,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q41225', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Big Ben', deltaM: 6 },
      ],
      verifiedAt: '2026-09-12',
      note: 'Overpass answered 504 on this run, so OSM is absent and the grade is B on two sources.',
      map: { x: 0.324, y: 0.576 },
      findIt: {
        el: 'Η καλύτερη θέα είναι από τη γέφυρα του Γουέστμινστερ, με τον πύργο απέναντί σου.',
        en: 'The best view is from Westminster Bridge, with the tower straight in front of you.',
      },
    },
    question: {
      q: {
        el: 'Τι είναι στην πραγματικότητα το «Μπιγκ Μπεν»;',
        en: 'What is “Big Ben”, actually?',
      },
      answers: [
        { el: 'Η μεγάλη καμπάνα', en: 'The great bell' },
        { el: 'Ο ίδιος ο πύργος', en: 'The tower itself' },
        { el: 'Τα τέσσερα ρολόγια', en: 'The four clock faces' },
        { el: 'Το φως στην κορυφή', en: 'The light on top' },
      ],
      explanation: {
        el:
          'Μπιγκ Μπεν είναι η καμπάνα που χτυπάει τις ώρες. Ο πύργος λέγεται Πύργος της ' +
          'Ελισάβετ, αλλά το παρατσούκλι κόλλησε σε όλο το κτίριο.',
        en:
          'Big Ben is the bell that strikes the hours. The tower is the Elizabeth Tower, ' +
          'but the nickname stuck to the whole building.',
      },
    },
  },

  // ------------------------------------------------------------------ london eye
  {
    id: 'london-london-eye',
    cityId: 'london',
    emoji: '🎡',
    category: 'landmark',
    difficulty: 1,

    name: { el: 'Λόντον Άι', en: 'The London Eye' },
    tagline: {
      el: 'Η ρόδα που θα έμενε πέντε χρόνια και έμεινε για πάντα',
      en: 'The wheel meant to stay five years that stayed for good',
    },
    story: {
      el:
        'Αυτή η ρόδα χτίστηκε για να γιορτάσει το έτος 2000, και όταν άνοιξε ήταν η ' +
        'ψηλότερη ρόδα θέασης στον κόσμο: 135 μέτρα, όσο τριάντα διώροφα λεωφορεία το ένα ' +
        'πάνω στο άλλο. Την ιδέα την είχαν δύο αρχιτέκτονες που ήταν και ζευγάρι, ο Ντέιβιντ ' +
        'Μαρκς και η Τζούλια Μπάρφιλντ. Τα κομμάτια της ήρθαν από το ποτάμι με φορτηγίδες, ' +
        'ενώθηκαν ξαπλωτά πάνω από το νερό και μετά η ρόδα σηκώθηκε όρθια, αργά, μέσα σε ' +
        'μια εβδομάδα. Έχει 32 γυάλινες καμπίνες, μία για καθέναν από τους 32 δήμους του ' +
        'Λονδίνου, και κάθε καμπίνα χωράει 25 ανθρώπους. Οι καμπίνες έχουν αριθμούς ως το ' +
        '33, γιατί το 13 το παρέλειψαν για γούρι. Η ρόδα δεν σταματάει για να μπεις: γυρίζει ' +
        'πιο αργά κι από άνθρωπο που περπατάει, και μια περιστροφή κρατάει μισή ώρα. Με ' +
        'καθαρό ουρανό βλέπεις σαράντα χιλιόμετρα μακριά. Θα την ξήλωναν μετά από πέντε ' +
        'χρόνια, αλλά οι Λονδρέζοι την αγάπησαν τόσο που δεν την άφησαν να φύγει.',
      en:
        'This wheel was built to celebrate the year 2000, and when it opened it was the ' +
        'tallest observation wheel in the world: 135 metres, as high as thirty double-decker ' +
        'buses stacked on top of each other. The idea came from two architects who were ' +
        'also a married couple, David Marks and Julia Barfield. Its pieces came up the ' +
        'river on barges, were joined together lying flat over the water, and then the ' +
        'wheel was pulled upright, slowly, over a week. It has 32 glass capsules, one for ' +
        'each of London’s 32 boroughs, and each capsule holds 25 people. The capsules are ' +
        'numbered up to 33, because number 13 was skipped for luck. The wheel does not stop ' +
        'for you to get on: it turns more slowly than a person walking, and one turn takes ' +
        'half an hour. On a clear day you can see forty kilometres. It was meant to be ' +
        'taken down after five years, but Londoners loved it too much to let it go.',
    },
    facts: [
      {
        el: 'Έχει ύψος 135 μέτρα και άνοιξε για το έτος 2000.',
        en: 'It is 135 metres tall and opened for the year 2000.',
      },
      {
        el: 'Οι 32 καμπίνες της αντιστοιχούν στους 32 δήμους του Λονδίνου.',
        en: 'Its 32 capsules stand for London’s 32 boroughs.',
      },
      {
        el: 'Μια πλήρης περιστροφή κρατάει περίπου 30 λεπτά.',
        en: 'One full turn takes about 30 minutes.',
      },
    ],
    location: {
      lat: 51.50333,
      lng: -0.11972,
      anchor: 'centroid',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q160659', deltaM: 0 },
        { kind: 'osm', ref: 'way/204068874', deltaM: 3 },
        { kind: 'wikipedia', ref: 'London Eye', deltaM: 22 },
      ],
      verifiedAt: '2026-09-12',
      map: { x: 0.348, y: 0.541 },
      // londoneye.com: the ticket office is inside County Hall, the big stone building
      // beside the wheel; boarding is on the riverside walk.
      findIt: {
        el: 'Τα εισιτήρια βγαίνουν μέσα στο μεγάλο πέτρινο κτίριο δίπλα στη ρόδα, το County Hall· η επιβίβαση γίνεται στην όχθη.',
        en: 'Tickets are sold inside County Hall, the big stone building next to the wheel; you board on the riverside walk.',
      },
    },
    question: {
      q: {
        el: 'Πόσες καμπίνες έχει η ρόδα, και γιατί;',
        en: 'How many capsules does the wheel have, and why?',
      },
      answers: [
        { el: '32, μία για κάθε δήμο', en: '32, one per borough' },
        { el: '12, μία για κάθε μήνα', en: '12, one per month' },
        { el: '24, μία για κάθε ώρα', en: '24, one per hour' },
        { el: '52, μία για κάθε εβδομάδα', en: '52, one for each week' },
      ],
      explanation: {
        el:
          'Το Λονδίνο είναι φτιαγμένο από 32 δήμους, και η ρόδα έχει μία καμπίνα για τον ' +
          'καθένα. Οι αριθμοί φτάνουν ως το 33, γιατί το 13 λείπει.',
        en:
          'London is made up of 32 boroughs, and the wheel has one capsule for each. The ' +
          'numbers run up to 33, because 13 is missing.',
      },
    },
  },

  // ------------------------------------------------------------ trafalgar square
  {
    id: 'london-trafalgar-square',
    cityId: 'london',
    emoji: '🦁',
    category: 'art',
    difficulty: 2,

    name: { el: 'Πλατεία Τραφάλγκαρ', en: 'Trafalgar Square' },
    tagline: {
      el: 'Τέσσερα λιοντάρια, ένας ναύαρχος και ένα βάθρο που αλλάζει γνώμη',
      en: 'Four lions, one admiral and a pedestal that keeps changing its mind',
    },
    story: {
      el:
        'Η πλατεία θυμίζει μια ναυμαχία του 1805 κοντά στο ακρωτήριο Τραφάλγκαρ της ' +
        'Ισπανίας, όπου ο ναύαρχος Νέλσον οδήγησε τον βρετανικό στόλο στη νίκη, αλλά ' +
        'τραυματίστηκε και πέθανε την ίδια μέρα. Η πόλη του έχτισε μια κολόνα 52 μέτρων, ' +
        'ώστε να στέκεται ψηλότερα από όλα γύρω του. Τα τέσσερα μπρούντζινα λιοντάρια στα ' +
        'πόδια της ήρθαν το 1867 και τα έφτιαξε ο Έντουιν Λάντσιρ, ένας ζωγράφος διάσημος ' +
        'για τα ζώα του, που δεν είχε ξανακάνει γλυπτό. Στις τέσσερις γωνιές υπάρχουν ' +
        'βάθρα, και τα τρία κρατούν παλιά αγάλματα. Το τέταρτο έμεινε άδειο πάνω από 150 ' +
        'χρόνια, γιατί τελείωσαν τα χρήματα για το άγαλμα που περίμενε· σήμερα φιλοξενεί ένα ' +
        'καινούργιο έργο σύγχρονης τέχνης κάθε δύο χρόνια περίπου, και κάθε φορά η πόλη ' +
        'μαλώνει αν της αρέσει. Στη νοτιοανατολική γωνιά ψάξε το πιο μικρό αστυνομικό ' +
        'φυλάκιο της Βρετανίας, με χώρο για έναν μόνο αστυνομικό. Και κάθε Δεκέμβριο από ' +
        'το 1947, η Νορβηγία στέλνει εδώ ένα τεράστιο χριστουγεννιάτικο δέντρο, ως ' +
        'ευχαριστώ για τη βοήθεια στον πόλεμο.',
      en:
        'The square remembers a sea battle of 1805 near Cape Trafalgar in Spain, where ' +
        'Admiral Nelson led the British fleet to victory but was wounded and died the same ' +
        'day. The city built him a column 52 metres tall, so that he stands higher than ' +
        'everything around him. The four bronze lions at its foot arrived in 1867 and were ' +
        'made by Edwin Landseer, a painter famous for his animals, who had never made a ' +
        'sculpture before. In the four corners there are pedestals, and three of them carry ' +
        'old statues. The fourth stood empty for more than 150 years, because the money for ' +
        'the statue it was waiting for ran out; today it holds a new piece of modern art ' +
        'every couple of years, and every time the city argues about whether it likes it. ' +
        'In the south-east corner, look for the smallest police box in Britain, with room ' +
        'for a single officer. And every December since 1947, Norway has sent a huge ' +
        'Christmas tree here, as a thank-you for help during the war.',
    },
    facts: [
      {
        el: 'Η Στήλη του Νέλσονα έχει ύψος 52 μέτρα.',
        en: 'Nelson’s Column is 52 metres tall.',
      },
      {
        el: 'Τα τέσσερα λιοντάρια τα έφτιαξε ένας ζωγράφος, ο Έντουιν Λάντσιρ, το 1867.',
        en: 'The four lions were made by a painter, Edwin Landseer, in 1867.',
      },
      {
        el: 'Κάθε Δεκέμβριο από το 1947 το Όσλο στέλνει εδώ ένα χριστουγεννιάτικο δέντρο.',
        en: 'Every December since 1947 Oslo has sent a Christmas tree here.',
      },
    ],
    location: {
      lat: 51.50806,
      lng: -0.12806,
      anchor: 'area',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q129143', deltaM: 0 },
        { kind: 'osm', ref: 'way/4369049', deltaM: 79 },
        { kind: 'wikipedia', ref: 'Trafalgar Square', deltaM: 1 },
      ],
      verifiedAt: '2026-09-12',
      map: { x: 0.307, y: 0.48 },
    },
    question: {
      q: {
        el: 'Γιατί το τέταρτο βάθρο έμεινε άδειο πάνω από 150 χρόνια;',
        en: 'Why did the fourth pedestal stay empty for more than 150 years?',
      },
      answers: [
        { el: 'Τελείωσαν τα χρήματα', en: 'The money ran out' },
        { el: 'Το άγαλμα έσπασε στον δρόμο', en: 'The statue broke on the way' },
        { el: 'Το κράτησαν για τον βασιλιά', en: 'It was kept for the King' },
        { el: 'Ξέχασαν να το παραγγείλουν', en: 'They forgot to order one' },
      ],
      explanation: {
        el:
          'Περίμενε ένα άγαλμα βασιλιά πάνω σε άλογο, αλλά τα λεφτά δεν έφτασαν. Το άδειο ' +
          'βάθρο έγινε τελικά η πιο ενδιαφέρουσα γωνιά της πλατείας.',
        en:
          'It was waiting for a statue of a king on horseback, but the money never came. ' +
          'The empty pedestal ended up as the most interesting corner of the square.',
      },
    },
  },

  // --------------------------------------------------------------- covent garden
  {
    id: 'london-covent-garden',
    cityId: 'london',
    emoji: '🎭',
    category: 'landmark',
    difficulty: 2,

    name: { el: 'Κόβεντ Γκάρντεν', en: 'Covent Garden' },
    tagline: {
      el: 'Ένας κήπος χωρίς γρασίδι, όπου τα λάχανα έγιναν τούμπες',
      en: 'A garden with no grass, where cabbages turned into cartwheels',
    },
    story: {
      el:
        'Πριν από πεντακόσια χρόνια εδώ ήταν ο λαχανόκηπος των μοναχών του Γουέστμινστερ, ' +
        'ο «convent garden». Πες το γρήγορα και ακούς «Covent Garden». Τη δεκαετία του 1630 ' +
        'ο αρχιτέκτονας Ίνιγκο Τζόουνς, που είχε δει τις πλατείες της Ιταλίας, σχεδίασε ' +
        'εδώ την πρώτη αληθινή πλατεία του Λονδίνου, με κομψά σπίτια και μια εκκλησία με ' +
        'μεγάλες κολόνες. Σύντομα ήρθαν αγρότες με φρούτα και λαχανικά, και για πάνω από ' +
        'τριακόσια χρόνια αυτή ήταν η μεγάλη αγορά του Λονδίνου, που ξυπνούσε πριν βγει ο ' +
        'ήλιος. Το πέτρινο κτίριο της αγοράς στη μέση χτίστηκε το 1830, και οι γυάλινες ' +
        'στέγες του προστέθηκαν αργότερα, για να πέφτει φως στους πάγκους. Το 1974 η αγορά ' +
        'μετακόμισε αλλού και οι παλιές στοές σώθηκαν για μαγαζιά και καφέ. Οι ' +
        'καλλιτέχνες του δρόμου όμως ήταν εδώ από πάντα: τον Μάιο του 1662 ο Σάμιουελ ' +
        'Πιπς είδε μπροστά στην εκκλησία μια παράσταση με κούκλες, την πρώτη γνωστή του ' +
        'Πάντς και της Τζούντι στη Βρετανία, και μια πλάκα στον τοίχο το θυμίζει. Σήμερα ' +
        'ζογκλέρ και μουσικοί μαζεύουν κόσμο στο ίδιο ακριβώς σημείο.',
      en:
        'Five hundred years ago this was the vegetable garden of the monks of Westminster, ' +
        'the “convent garden”. Say it quickly and you hear “Covent Garden”. In the 1630s ' +
        'the architect Inigo Jones, who had seen the piazzas of Italy, designed London’s ' +
        'first proper square here, with elegant houses and a church with big columns. Soon ' +
        'farmers arrived with fruit and vegetables, and for more than three hundred years ' +
        'this was London’s great market, waking up before the sun. The stone market ' +
        'building in the middle went up in 1830, and its glass roofs were added later so ' +
        'that daylight fell on the stalls. In 1974 the market moved away and the old halls ' +
        'were saved for shops and cafés. The street performers, though, were always here: ' +
        'in May 1662 Samuel Pepys watched a puppet show in front of the church, the first ' +
        'known Punch and Judy performance in Britain, and a plaque on the wall remembers ' +
        'it. Today jugglers and musicians draw a crowd on exactly the same spot.',
    },
    facts: [
      {
        el: 'Το όνομα προέρχεται από τον «convent garden», τον κήπο των μοναχών.',
        en: 'The name comes from the “convent garden”, the monks’ vegetable garden.',
      },
      {
        el: 'Το κτίριο της αγοράς χτίστηκε το 1830 και η αγορά έφυγε το 1974.',
        en: 'The market building went up in 1830 and the market left in 1974.',
      },
      {
        el: 'Η πρώτη γνωστή παράσταση Πάντς και Τζούντι στη Βρετανία έγινε εδώ το 1662.',
        en: 'Britain’s first known Punch and Judy show was performed here in 1662.',
      },
    ],
    location: {
      lat: 51.5119,
      lng: -0.12284,
      anchor: 'centroid',
      confidence: 'C',
      sources: [{ kind: 'wikidata', ref: 'Q17549514', deltaM: 0 }],
      verifiedAt: '2026-09-12',
      note: 'Only Wikidata carries this building: no OSM object is tagged with it and the English article has no coordinate, so the grade is C on one source. The point is the middle of the 1830 market hall, which is where the piazza is.',
      map: { x: 0.332, y: 0.43 },
      findIt: {
        el: 'Οι καλλιτέχνες του δρόμου παίζουν συνήθως μπροστά στην εκκλησία με τις κολόνες, στη δυτική άκρη της πλατείας.',
        en: 'The street performers usually play in front of the church with the columns, at the west end of the square.',
      },
    },
    question: {
      q: {
        el: 'Τι πουλούσαν εδώ για πάνω από τριακόσια χρόνια;',
        en: 'What was sold here for more than three hundred years?',
      },
      answers: [
        { el: 'Φρούτα και λαχανικά', en: 'Fruit and vegetables' },
        { el: 'Χαλιά και έπιπλα σπιτιού', en: 'Carpets and furniture' },
        { el: 'Βιβλία και χάρτες', en: 'Books and maps' },
        { el: 'Ψάρια και αλάτι', en: 'Fish and salt' },
      ],
      explanation: {
        el:
          'Ξεκίνησε ως λαχανόκηπος και έγινε η αγορά φρούτων και λαχανικών όλης της πόλης, ' +
          'ώσπου μετακόμισε το 1974.',
        en:
          'It began as a vegetable garden and became the whole city’s fruit and vegetable ' +
          'market, until it moved away in 1974.',
      },
    },
  },

  // -------------------------------------------------------------- british museum
  {
    id: 'london-british-museum',
    cityId: 'london',
    emoji: '🏛️',
    category: 'museum',
    difficulty: 2,

    name: { el: 'Βρετανικό Μουσείο', en: 'The British Museum' },
    tagline: {
      el: 'Οκτώ εκατομμύρια αντικείμενα από όλο τον κόσμο, και η είσοδος δωρεάν',
      en: 'Eight million objects from the whole world, and entry costs nothing',
    },
    story: {
      el:
        'Όταν ο γιατρός και συλλέκτης Χανς Σλόουν πέθανε το 1753, άφησε 71.000 αντικείμενα ' +
        'στο έθνος με έναν όρο: να μπορεί να τα βλέπει όποιος θέλει. Έτσι γεννήθηκε το ' +
        'πρώτο εθνικό μουσείο του κόσμου, που άνοιξε το 1759 και είναι δωρεάν από την πρώτη ' +
        'μέρα. Σήμερα ζουν εδώ περίπου οκτώ εκατομμύρια αντικείμενα. Το πιο διάσημο είναι ' +
        'η Στήλη της Ροζέτας, μια μαύρη πέτρα με το ίδιο μήνυμα σε τρεις γραφές· επειδή η ' +
        'μία ήταν ελληνικά, ένας νεαρός Γάλλος, ο Σαμπολιόν, κατάφερε το 1822 να διαβάσει ' +
        'επιτέλους τα ιερογλυφικά. Εδώ βρίσκονται και τα μισά περίπου γλυπτά του ' +
        'Παρθενώνα, που τα κατέβασε από τον ναό ο λόρδος Έλγιν πριν από διακόσια χρόνια· η ' +
        'Ελλάδα ζητάει να γυρίσουν στην Αθήνα, το μουσείο λέει όχι, και η συζήτηση ' +
        'συνεχίζεται. Στη μέση του κτιρίου, μια αυλή με κυματιστή γυάλινη στέγη από 3.312 ' +
        'τζάμια, κανένα ίδιο με το άλλο, αγκαλιάζει ένα στρογγυλό αναγνωστήριο. Είναι ' +
        'αδύνατο να τα δεις όλα σε μια μέρα. Κανείς δεν τα έχει δει όλα.',
      en:
        'When the doctor and collector Hans Sloane died in 1753, he left 71,000 objects to ' +
        'the nation on one condition: anyone who wanted to could come and see them. So the ' +
        'world’s first national museum was born; it opened in 1759 and has been free since ' +
        'the first day. About eight million objects live here today. The most famous is the ' +
        'Rosetta Stone, a black slab with the same message in three scripts; because one ' +
        'of them was Greek, a young Frenchman called Champollion managed in 1822 to read ' +
        'hieroglyphs at last. Here too are about half of the sculptures of the Parthenon, ' +
        'taken down from the temple by Lord Elgin two hundred years ago; Greece asks for ' +
        'them to return to Athens, the museum says no, and the argument goes on. In the ' +
        'middle of the building, a courtyard with a wavy glass roof of 3,312 panes, no two ' +
        'the same, wraps around a round reading room. It is impossible to see everything in ' +
        'a day. Nobody has seen everything.',
    },
    facts: [
      {
        el: 'Άνοιξε το 1759 και η είσοδος είναι δωρεάν από τότε.',
        en: 'It opened in 1759 and entry has been free ever since.',
      },
      {
        el: 'Η Στήλη της Ροζέτας βρέθηκε στην Αίγυπτο το 1799.',
        en: 'The Rosetta Stone was found in Egypt in 1799.',
      },
      {
        el: 'Η γυάλινη στέγη της Μεγάλης Αυλής έχει 3.312 τζάμια, κανένα ίδιο.',
        en: 'The glass roof of the Great Court has 3,312 panes, no two alike.',
      },
    ],
    location: {
      lat: 51.51944,
      lng: -0.12694,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q6373', deltaM: 0 },
        { kind: 'wikipedia', ref: 'British Museum', deltaM: 5 },
      ],
      verifiedAt: '2026-09-12',
      note: 'Overpass answered 429 on this run, so OSM is absent and the grade is B on two sources.',
      map: { x: 0.312, y: 0.332 },
      // britishmuseum.org/visit: main entrance on Great Russell Street, through the
      // gates and up the steps under the columns; a second entrance on Montague Place.
      findIt: {
        el: 'Η κύρια είσοδος είναι από την Great Russell Street: περνάς τα κάγκελα και ανεβαίνεις τα σκαλιά κάτω από τις κολόνες.',
        en: 'The main entrance is on Great Russell Street: through the gates and up the steps under the columns.',
      },
    },
    question: {
      q: {
        el: 'Γιατί μπόρεσαν οι μελετητές να διαβάσουν τη Στήλη της Ροζέτας;',
        en: 'Why were scholars able to read the Rosetta Stone?',
      },
      answers: [
        { el: 'Ένα μέρος της ήταν ελληνικά', en: 'Part of it was in Greek' },
        { el: 'Ήταν γραμμένη με εικόνες ζώων', en: 'It was written in animal pictures' },
        { el: 'Είχε δίπλα της λεξικό', en: 'A dictionary came with it' },
        { el: 'Την εξήγησε ένας Αιγύπτιος βασιλιάς', en: 'An Egyptian king explained it' },
      ],
      explanation: {
        el:
          'Το ίδιο κείμενο ήταν γραμμένο τρεις φορές. Τα ελληνικά τα ήξεραν, και ' +
          'συγκρίνοντας τις γραφές έσπασαν τον κώδικα των ιερογλυφικών.',
        en:
          'The same text was written three times. Greek could be read, and by comparing ' +
          'the scripts they cracked the code of the hieroglyphs.',
      },
    },

    museum: {
      doorNote: {
        el: 'Είναι δωρεάν, αλλά τεράστιο. Διάλεξε τρεις αίθουσες και μην προσπαθήσεις να τα δεις όλα.',
        en: 'It is free, but enormous. Pick three rooms and do not try to see everything.',
      },
      rooms: [
        {
          id: 'london-british-museum-egypt',
          emoji: '🏺',
          name: { el: 'Η Αίγυπτος', en: 'Egypt' },
          intro: {
            el:
              'Οι αίθουσες της Αιγύπτου είναι οι πιο γεμάτες του μουσείου, και όχι τυχαία: ' +
              'εδώ είναι η πέτρα που έμαθε στον κόσμο να διαβάζει τα ιερογλυφικά, μια γάτα ' +
              'από μπρούντζο με χρυσά σκουλαρίκια, και ένας άνθρωπος που κοιμάται στην ' +
              'άμμο εδώ και πεντέμισι χιλιάδες χρόνια. Πήγαινε πρώτα στη μαύρη πέτρα, πριν ' +
              'μαζευτεί ο κόσμος.',
            en:
              'The Egyptian rooms are the busiest in the museum, and not by accident: here ' +
              'is the stone that taught the world to read hieroglyphs, a bronze cat with ' +
              'gold earrings, and a man who has been asleep in the sand for five and a half ' +
              'thousand years. Go to the black stone first, before the crowd gathers.',
          },
          exhibits: [
            {
              id: 'london-british-museum-rosetta-stone',
              name: { el: 'Η Στήλη της Ροζέτας', en: 'The Rosetta Stone' },
              blurb: {
                el:
                  'Μια μαύρη πέτρα, σπασμένη στην κορυφή, γεμάτη μικρά γράμματα. Είναι ' +
                  'μια ανακοίνωση του 196 π.Χ. για έναν νεαρό βασιλιά, τον Πτολεμαίο Ε΄, ' +
                  'γραμμένη τρεις φορές: με ιερογλυφικά για τους ιερείς, με δημοτική ' +
                  'αιγυπτιακή για τον κόσμο, και με ελληνικά για τους κυβερνήτες, που ' +
                  'τότε ήταν Έλληνες. Τη βρήκαν Γάλλοι στρατιώτες το 1799 μέσα σε ένα ' +
                  'παλιό τείχος στην πόλη Ρασίντ, που οι Ευρωπαίοι έλεγαν Ροζέτα. Επειδή ' +
                  'τα ελληνικά διαβάζονταν, οι μελετητές είχαν επιτέλους ένα κλειδί. Ο ' +
                  'Σαμπολιόν το γύρισε το 1822, και τα ιερογλυφικά μίλησαν ξανά μετά από ' +
                  'χίλια τετρακόσια χρόνια σιωπής.',
                en:
                  'A black stone, broken at the top, crowded with tiny writing. It is an ' +
                  'announcement from 196 BC about a boy king, Ptolemy V, written three ' +
                  'times: in hieroglyphs for the priests, in everyday Egyptian for the ' +
                  'people, and in Greek for the rulers, who were Greek at the time. French ' +
                  'soldiers found it in 1799 inside an old wall in the town of Rashid, ' +
                  'which Europeans called Rosetta. Because the Greek could be read, ' +
                  'scholars finally had a key. Champollion turned it in 1822, and the ' +
                  'hieroglyphs spoke again after fourteen hundred years of silence.',
              },
              question: {
                q: {
                  el: 'Πόσες γραφές έχει η Στήλη της Ροζέτας;',
                  en: 'How many scripts are on the Rosetta Stone?',
                },
                answers: [
                  { el: 'Τρεις', en: 'Three' },
                  { el: 'Δύο', en: 'Two' },
                  { el: 'Πέντε', en: 'Five' },
                  { el: 'Δέκα', en: 'Ten' },
                ],
                explanation: {
                  el: 'Ιερογλυφικά πάνω, δημοτική αιγυπτιακή στη μέση, ελληνικά κάτω. Το ίδιο μήνυμα τρεις φορές.',
                  en: 'Hieroglyphs at the top, everyday Egyptian in the middle, Greek at the bottom. The same message three times.',
                },
              },
            },
            {
              id: 'london-british-museum-gayer-anderson-cat',
              name: { el: 'Η γάτα με τα χρυσά σκουλαρίκια', en: 'The cat with the gold earrings' },
              blurb: {
                el:
                  'Μια γάτα από μπρούντζο κάθεται όρθια, με το κεφάλι ψηλά, όπως κάθονται ' +
                  'οι γάτες όταν θέλουν να δείξουν ότι δεν σε χρειάζονται. Φοράει χρυσά ' +
                  'σκουλαρίκια, ένα κρίκο στη μύτη και ένα ασημένιο περιδέραιο, και στο ' +
                  'στήθος της είναι χαραγμένο ένα μάτι που προστατεύει. Φτιάχτηκε γύρω στο ' +
                  '600 π.Χ. και δεν είναι απλώς μια γάτα: είναι η θεά Μπαστέτ, που οι ' +
                  'Αιγύπτιοι φαντάζονταν με μορφή γάτας. Πήρε το όνομά της από τον Ρόμπερτ ' +
                  'Γκέιερ-Άντερσον, που τη χάρισε στο μουσείο το 1939. Είναι ίσως η πιο ' +
                  'φωτογραφημένη γάτα του Λονδίνου.',
                en:
                  'A bronze cat sits upright with its head held high, the way cats sit when ' +
                  'they want you to know they do not need you. It wears gold earrings, a ' +
                  'ring in its nose and a silver collar, and on its chest is carved a ' +
                  'protective eye. It was made around 600 BC and it is not just a cat: it ' +
                  'is the goddess Bastet, whom the Egyptians pictured in cat form. It is ' +
                  'named after Robert Gayer-Anderson, who gave it to the museum in 1939. It ' +
                  'may be the most photographed cat in London.',
              },
              question: {
                q: {
                  el: 'Από τι είναι φτιαγμένη η γάτα;',
                  en: 'What is the cat made of?',
                },
                answers: [
                  { el: 'Από μπρούντζο', en: 'Bronze' },
                  { el: 'Από χρυσάφι', en: 'Gold' },
                  { el: 'Από μαύρο μάρμαρο', en: 'Black marble' },
                  { el: 'Από ξύλο κέδρου', en: 'Cedar wood' },
                ],
                explanation: {
                  el: 'Το σώμα είναι μπρούντζος. Χρυσά είναι μόνο τα σκουλαρίκια και ο κρίκος στη μύτη.',
                  en: 'The body is bronze. Only the earrings and the nose ring are gold.',
                },
              },
            },
            {
              id: 'london-british-museum-gebelein-man',
              name: { el: 'Ο άνθρωπος από την άμμο', en: 'The man from the sand' },
              blurb: {
                el:
                  'Πριν από πεντέμισι χιλιάδες χρόνια, πολύ πριν από τις πυραμίδες, ένας ' +
                  'νεαρός άντρας θάφτηκε σε έναν ρηχό λάκκο στην έρημο, κουλουριασμένος ' +
                  'στο πλάι, χωρίς φέρετρο. Η ζεστή, στεγνή άμμος ρούφηξε το νερό από το ' +
                  'σώμα του και το διατήρησε: ακόμη και τα κοκκινωπά μαλλιά του υπάρχουν. ' +
                  'Οι Αιγύπτιοι είδαν τι κάνει η άμμος και αργότερα έμαθαν να το κάνουν ' +
                  'μόνοι τους, με αλάτι και επιδέσμους. Το 2012 το μουσείο τον πέρασε από ' +
                  'αξονικό τομογράφο και βρήκε ότι είχε τραυματιστεί στην πλάτη. Ο ' +
                  'επισκέπτης τον βλέπει όπως βρέθηκε, ξαπλωμένο στην άμμο του.',
                en:
                  'Five and a half thousand years ago, long before the pyramids, a young ' +
                  'man was buried in a shallow pit in the desert, curled on his side, with ' +
                  'no coffin. The hot, dry sand drew the water out of his body and ' +
                  'preserved it: even his reddish hair is still there. The Egyptians saw ' +
                  'what sand could do and later learned to do it themselves, with salt and ' +
                  'bandages. In 2012 the museum put him through a CT scanner and found he ' +
                  'had been wounded in the back. Visitors see him as he was found, lying in ' +
                  'his sand.',
              },
              question: {
                q: {
                  el: 'Τι διατήρησε το σώμα του για 5.500 χρόνια;',
                  en: 'What preserved his body for 5,500 years?',
                },
                answers: [
                  { el: 'Η ζεστή άμμος', en: 'Hot dry sand' },
                  { el: 'Ο πάγος', en: 'Ice' },
                  { el: 'Μια χρυσή σαρκοφάγος', en: 'A golden coffin' },
                  { el: 'Το αλάτι της θάλασσας', en: 'Sea salt' },
                ],
                explanation: {
                  el: 'Χωρίς νερό δεν ζουν τα μικρόβια που σαπίζουν ένα σώμα. Η άμμος το στέγνωσε πριν προλάβουν.',
                  en: 'The microbes that rot a body need water. The sand dried him out before they could start.',
                },
              },
            },
          ],
        },
        {
          id: 'london-british-museum-greece',
          emoji: '🏛️',
          name: { el: 'Η Ελλάδα στο Λονδίνο', en: 'Greece in London' },
          intro: {
            el:
              'Αυτές οι αίθουσες θα σου φανούν γνωστές. Εδώ είναι μάρμαρα που στέκονταν ' +
              'πάνω στον Παρθενώνα, μια Καρυάτιδα που λείπει από τις αδελφές της, και ' +
              'ένας ολόκληρος τάφος από τη Μικρά Ασία. Ήρθαν εδώ πριν από διακόσια χρόνια, ' +
              'και το αν έπρεπε να μείνουν είναι μια συζήτηση που κάνουν ακόμη δύο χώρες.',
            en:
              'These rooms will look familiar. Here are marbles that stood on the Parthenon, ' +
              'a Caryatid missing from her sisters, and a whole tomb from Asia Minor. They ' +
              'came here two hundred years ago, and whether they should have stayed is a ' +
              'conversation two countries are still having.',
          },
          exhibits: [
            {
              id: 'london-british-museum-parthenon-frieze',
              name: { el: 'Οι ιππείς του Παρθενώνα', en: 'The horsemen of the Parthenon' },
              blurb: {
                el:
                  'Γύρω γύρω από τον Παρθενώνα έτρεχε μια ζωφόρος 160 μέτρων, μια ' +
                  'μαρμάρινη ταινία με μια πομπή: ιππείς, άρματα, μουσικοί, κοπέλες με ' +
                  'δώρα, βόδια για τη θυσία, όλοι στον δρόμο για τη γιορτή της Αθηνάς. Στην ' +
                  'αίθουσα αυτή βλέπεις τα άλογα να σηκώνονται στα πίσω πόδια και τους ' +
                  'νεαρούς ιππείς να τα κρατούν, τόσο ζωντανά που ακούς σχεδόν τις οπλές. ' +
                  'Ο λόρδος Έλγιν τα κατέβασε από τον ναό ανάμεσα στο 1801 και το 1812, και ' +
                  'η Βρετανία τα αγόρασε το 1816. Το υπόλοιπο της ζωφόρου είναι στο Μουσείο ' +
                  'της Ακρόπολης, με άσπρα γύψινα αντίγραφα στη θέση αυτών που λείπουν.',
                en:
                  'Around the Parthenon ran a frieze 160 metres long, a marble ribbon ' +
                  'showing a procession: riders, chariots, musicians, girls carrying gifts, ' +
                  'cattle for the sacrifice, all on their way to the festival of Athena. In ' +
                  'this room you see the horses rearing and the young riders holding them, ' +
                  'so alive you can almost hear the hooves. Lord Elgin took them down from ' +
                  'the temple between 1801 and 1812, and Britain bought them in 1816. The ' +
                  'rest of the frieze is in the Acropolis Museum, with white plaster copies ' +
                  'standing in for the pieces that are here.',
              },
              question: {
                q: {
                  el: 'Τι δείχνει η μεγάλη ζωφόρος γύρω γύρω;',
                  en: 'What does the long frieze show all the way round?',
                },
                answers: [
                  { el: 'Μια πομπή με άλογα', en: 'A procession with horses' },
                  { el: 'Μια ναυμαχία', en: 'A sea battle' },
                  { el: 'Δώδεκα θεούς στο τραπέζι', en: 'Twelve gods at a table' },
                  { el: 'Το χτίσιμο του ναού', en: 'The building of the temple' },
                ],
                explanation: {
                  el: 'Είναι η πομπή των Παναθηναίων, η μεγάλη γιορτή της Αθηνάς, με τους ιππείς μπροστά.',
                  en: 'It is the Panathenaic procession, the great festival of Athena, with the riders leading.',
                },
              },
            },
            {
              id: 'london-british-museum-caryatid',
              name: { el: 'Η Καρυάτιδα που λείπει', en: 'The missing Caryatid' },
              blurb: {
                el:
                  'Μια νεαρή γυναίκα από μάρμαρο στέκεται μόνη της, με ένα καλάθι στο ' +
                  'κεφάλι που κάποτε κρατούσε μια στέγη. Ήταν μία από τις έξι Καρυάτιδες ' +
                  'του Ερεχθείου, του ναού δίπλα στον Παρθενώνα, όπου έξι κοπέλες έκαναν τη ' +
                  'δουλειά των κολόνων. Ο λόρδος Έλγιν την πήρε το 1801 και οι άλλες πέντε ' +
                  'είναι σήμερα στο Μουσείο της Ακρόπολης, με ένα κενό στη σειρά τους. Αν ' +
                  'την κοιτάξεις προσεκτικά, το βάρος της πέφτει στο ένα πόδι, όπως όταν ' +
                  'στέκεσαι πολλή ώρα και ξεκουράζεις το άλλο. Στέκεται έτσι δυόμισι ' +
                  'χιλιάδες χρόνια.',
                en:
                  'A young woman of marble stands on her own, with a basket on her head that ' +
                  'once held up a roof. She was one of the six Caryatids of the Erechtheion, ' +
                  'the temple beside the Parthenon, where six maidens did the work of ' +
                  'columns. Lord Elgin took her in 1801, and the other five are today in the ' +
                  'Acropolis Museum, with a gap in their row. Look closely and her weight ' +
                  'rests on one leg, the way you stand when you have been standing a long ' +
                  'time and want to rest the other. She has been standing like that for two ' +
                  'and a half thousand years.',
              },
              question: {
                q: {
                  el: 'Πόσες αδελφές της στέκονται ακόμη στην Αθήνα;',
                  en: 'How many of her sisters still stand in Athens?',
                },
                answers: [
                  { el: 'Πέντε', en: 'Five' },
                  { el: 'Καμία', en: 'None' },
                  { el: 'Δύο', en: 'Two' },
                  { el: 'Έντεκα', en: 'Eleven' },
                ],
                explanation: {
                  el: 'Ήταν έξι. Μία είναι εδώ, οι πέντε στο Μουσείο της Ακρόπολης, και η σειρά τους έχει ένα κενό.',
                  en: 'There were six. One is here, five are in the Acropolis Museum, and their row has a gap in it.',
                },
              },
            },
            {
              id: 'london-british-museum-nereid-monument',
              name: { el: 'Ο τάφος με τις κοπέλες του ανέμου', en: 'The tomb with the wind maidens' },
              blurb: {
                el:
                  'Μοιάζει με μικρό ελληνικό ναό, με κολόνες και αέτωμα, αλλά είναι τάφος. ' +
                  'Χτίστηκε γύρω στο 390 π.Χ. στην Ξάνθο, μια πόλη της Λυκίας στη σημερινή ' +
                  'Τουρκία, για έναν τοπικό άρχοντα που ήθελε να θάβεται σαν Έλληνας. ' +
                  'Ανάμεσα στις κολόνες στέκονται κοπέλες με ρούχα που ανεμίζουν σαν να ' +
                  'φυσάει δυνατά· είναι Νηρηίδες, κόρες της θάλασσας, και τα ρούχα τους ' +
                  'είναι ό,τι πιο κοντά σε αέρα κατάφερε ποτέ το μάρμαρο. Ο Βρετανός Τσαρλς ' +
                  'Φέλοους το βρήκε το 1838 και το έστειλε κομμάτι κομμάτι στο Λονδίνο, ' +
                  'όπου το ξανασυναρμολόγησαν σε ολόκληρη πρόσοψη.',
                en:
                  'It looks like a small Greek temple, with columns and a pediment, but it ' +
                  'is a tomb. It was built around 390 BC at Xanthos, a city of Lycia in ' +
                  'what is now Turkey, for a local ruler who wanted to be buried like a ' +
                  'Greek. Between the columns stand young women whose clothes stream out as ' +
                  'if a strong wind were blowing; they are Nereids, daughters of the sea, ' +
                  'and their dresses are the closest marble has ever come to air. The ' +
                  'Briton Charles Fellows found it in 1838 and shipped it to London piece by ' +
                  'piece, where it was put back together as a whole façade.',
              },
              question: {
                q: {
                  el: 'Τι ήταν αυτό το κτίριο στην πατρίδα του;',
                  en: 'What was this building back home?',
                },
                answers: [
                  { el: 'Ένας τάφος', en: 'A tomb' },
                  { el: 'Ένας ναός', en: 'A temple' },
                  { el: 'Ένα σχολείο', en: 'A school' },
                  { el: 'Ένα λουτρό', en: 'A bath house' },
                ],
                explanation: {
                  el: 'Ένας άρχοντας της Λυκίας το έχτισε για τον εαυτό του, σε σχήμα ναού, για να ξεχωρίζει.',
                  en: 'A ruler of Lycia built it for himself, in the shape of a temple, so that it would stand out.',
                },
              },
            },
          ],
        },
        {
          id: 'london-british-museum-kings-and-games',
          emoji: '♟️',
          name: { el: 'Βασιλιάδες, παιχνίδια και ένας γίγαντας', en: 'Kings, games and a giant' },
          intro: {
            el:
              'Τρία πράγματα που βρέθηκαν θαμμένα, κρυμμένα ή στημένα με την πλάτη στη ' +
              'θάλασσα: ένα κράνος μέσα σε ένα πλοίο, μια στρατιά από μικρά σκαλιστά ' +
              'πιόνια στην άμμο ενός νησιού, και ένα κεφάλι από μαύρη πέτρα που ήρθε από ' +
              'το πιο απομακρυσμένο νησί του κόσμου. Κανένα από τα τρία δεν είχε σκοπό να ' +
              'βρεθεί.',
            en:
              'Three things that were found buried, hidden or standing with their back to ' +
              'the sea: a helmet inside a ship, an army of small carved pieces in the sand ' +
              'of an island, and a head of black stone from the most remote island in the ' +
              'world. None of the three was ever meant to be found.',
          },
          exhibits: [
            {
              id: 'london-british-museum-sutton-hoo-helmet',
              name: { el: 'Το κράνος από το θαμμένο πλοίο', en: 'The helmet from the buried ship' },
              blurb: {
                el:
                  'Το 1939, σε ένα χωράφι στην ανατολική Αγγλία, μια αρχαιολόγος και ένας ' +
                  'κηπουρός έσκαψαν έναν λόφο και βρήκαν το αποτύπωμα ενός πλοίου 27 ' +
                  'μέτρων. Το ξύλο είχε λιώσει στο χώμα, αλλά τα καρφιά έμεναν στη θέση ' +
                  'τους, και στη μέση υπήρχε ο θησαυρός ενός βασιλιά του 7ου αιώνα. Το ' +
                  'κράνος βρέθηκε σε εκατοντάδες κομμάτια και συναρμολογήθηκε δύο φορές. ' +
                  'Έχει πρόσωπο από σίδερο, με φρύδια, μουστάκι και μύτη, και αν το ' +
                  'κοιτάξεις από μπροστά, τα φρύδια και η μύτη σχηματίζουν έναν δράκο που ' +
                  'πετάει. Δίπλα στέκεται ένα λαμπερό αντίγραφο, για να δεις πώς έλαμπε ' +
                  'καινούργιο.',
                en:
                  'In 1939, in a field in eastern England, an archaeologist and a gardener ' +
                  'dug into a mound and found the imprint of a ship 27 metres long. The ' +
                  'wood had melted into the soil, but the nails stayed in place, and in the ' +
                  'middle lay the treasure of a seventh-century king. The helmet was found ' +
                  'in hundreds of pieces and was put together twice. It has an iron face, ' +
                  'with eyebrows, a moustache and a nose, and if you look at it from the ' +
                  'front the eyebrows and the nose make a flying dragon. Beside it stands a ' +
                  'gleaming replica, so you can see how it shone when new.',
              },
              question: {
                q: {
                  el: 'Πού βρέθηκε το κράνος;',
                  en: 'Where was the helmet found?',
                },
                answers: [
                  { el: 'Μέσα σε ένα θαμμένο πλοίο', en: 'Inside a buried ship' },
                  { el: 'Στον πάτο του Τάμεση', en: 'On the bed of the Thames' },
                  { el: 'Σε ένα κάστρο της Σκωτίας', en: 'In a castle in Scotland' },
                  { el: 'Σε μια σπηλιά της Ουαλίας', en: 'In a cave in Wales' },
                ],
                explanation: {
                  el: 'Ένας βασιλιάς θάφτηκε μέσα στο πλοίο του, κάτω από έναν λόφο χώματος, με όλα του τα πλούτη γύρω του.',
                  en: 'A king was buried inside his ship, under a mound of earth, with all his riches around him.',
                },
              },
            },
            {
              id: 'london-british-museum-lewis-chessmen',
              name: { el: 'Τα πιόνια του Λιούις', en: 'The Lewis chessmen' },
              blurb: {
                el:
                  'Το 1831, στην αμμουδιά ενός νησιού στα δυτικά της Σκωτίας, ήρθε στο φως ' +
                  'ένας θησαυρός από μικρά σκαλιστά πιόνια σκακιού: βασιλιάδες που κάθονται ' +
                  'σκεφτικοί, βασίλισσες που ακουμπούν το μάγουλο στο χέρι σαν να ανησυχούν, ' +
                  'επίσκοποι, ιππότες πάνω σε μικρά άλογα, και φρουροί που δαγκώνουν την ' +
                  'ασπίδα τους από την αγωνία. Σκαλίστηκαν στη Νορβηγία γύρω στο 1150 από ' +
                  'δόντι θαλάσσιου ίππου. Βρέθηκαν 93 κομμάτια, από τέσσερα τουλάχιστον ' +
                  'σετ· τα 82 είναι εδώ και τα 11 στο Εδιμβούργο. Είναι τα πιο διάσημα ' +
                  'πιόνια στον κόσμο, και ένα από αυτά έπαιξε σε μια ταινία με μάγους.',
                en:
                  'In 1831, on a sandy shore of an island off the west of Scotland, a hoard ' +
                  'of small carved chess pieces came to light: kings sitting deep in thought, ' +
                  'queens resting a cheek on one hand as if worried, bishops, knights on ' +
                  'small horses, and guards biting the top of their shields with nerves. ' +
                  'They were carved in Norway around 1150 from walrus tusk. Ninety-three ' +
                  'pieces were found, from at least four sets; 82 are here and 11 are in ' +
                  'Edinburgh. They are the most famous chess pieces in the world, and one ' +
                  'of them appeared in a film about wizards.',
              },
              question: {
                q: {
                  el: 'Από τι είναι σκαλισμένα τα περισσότερα πιόνια;',
                  en: 'What are most of the pieces carved from?',
                },
                answers: [
                  { el: 'Δόντια θαλάσσιου ίππου', en: 'Walrus tusk' },
                  { el: 'Ελεφαντόδοντο Αφρικής', en: 'Elephant ivory' },
                  { el: 'Ξύλο από βελανιδιά', en: 'Dark oak wood' },
                  { el: 'Άσπρο μάρμαρο νησιού', en: 'White marble' },
                ],
                explanation: {
                  el: 'Στον Βορρά δεν υπήρχαν ελέφαντες, αλλά υπήρχαν θαλάσσιοι ίπποι με μακριά δόντια, ιδανικά για σκάλισμα.',
                  en: 'The North had no elephants, but it had walruses with long tusks, ideal for carving.',
                },
              },
            },
            {
              id: 'london-british-museum-hoa-hakananaia',
              name: { el: 'Χόα Χακανανάι’α', en: 'Hoa Hakananai’a' },
              blurb: {
                el:
                  'Ένα κεφάλι και ένας κορμός από μαύρη ηφαιστειακή πέτρα, ψηλότερο από ' +
                  'έναν ενήλικα, με βαθιά μάτια και σφιγμένα χείλη. Οι κάτοικοι του Ράπα ' +
                  'Νούι, του Νησιού του Πάσχα στη μέση του Ειρηνικού, το σκάλισαν πριν από ' +
                  'πολλούς αιώνες και το έστησαν μέσα σε ένα σπίτι στο χωριό Ορόνγκο, με ' +
                  'την πλάτη προς τη θάλασσα. Στην πλάτη του είναι χαραγμένα πουλιά και ' +
                  'άνθρωποι-πουλιά, από μια γιορτή του νησιού. Το 1868 το πλήρωμα ενός ' +
                  'βρετανικού πολεμικού το ξέθαψε και το έφερε στο Λονδίνο. Το όνομά του ' +
                  'σημαίνει «ο κλεμμένος ή κρυμμένος φίλος», και το Ράπα Νούι ζήτησε ' +
                  'επίσημα το 2018 να γυρίσει σπίτι.',
                en:
                  'A head and body of black volcanic stone, taller than a grown-up, with ' +
                  'deep eyes and tight lips. The people of Rapa Nui, Easter Island in the ' +
                  'middle of the Pacific, carved it many centuries ago and set it inside a ' +
                  'house in the village of Orongo, with its back to the sea. Carved into ' +
                  'that back are birds and birdmen, from a festival held on the island. In ' +
                  '1868 the crew of a British warship dug it up and brought it to London. ' +
                  'Its name means “the stolen or hidden friend”, and in 2018 Rapa Nui ' +
                  'formally asked for it to come home.',
              },
              question: {
                q: {
                  el: 'Πώς ήρθε το άγαλμα στο Λονδίνο;',
                  en: 'How did the statue come to London?',
                },
                answers: [
                  { el: 'Με ένα πλοίο του ναυτικού', en: 'On a navy ship' },
                  { el: 'Το αγόρασε ένα μουσείο', en: 'A museum bought it' },
                  { el: 'Το έστειλαν οι κάτοικοι δώρο', en: 'A gift from the islanders' },
                  { el: 'Με αεροπλάνο το 1960', en: 'By aeroplane in 1960' },
                ],
                explanation: {
                  el: 'Το πλήρωμα του HMS Topaze το πήρε το 1868. Οι κάτοικοι του νησιού δεν το χάρισαν ποτέ, και γι’ αυτό το ζητούν πίσω.',
                  en: 'The crew of HMS Topaze took it in 1868. The islanders never gave it away, which is why they ask for it back.',
                },
              },
            },
          ],
        },
      ],
      riddles: [
        {
          id: 'london-british-museum-riddle-1',
          difficulty: 1,
          prompt: {
            el:
              'Είμαι μαύρη, βαριά και σπασμένη στην κορυφή. Λέω το ίδιο πράγμα τρεις φορές, ' +
              'με τρεις διαφορετικούς τρόπους, και χάρη στον τρίτο ο κόσμος κατάλαβε ' +
              'επιτέλους τους δύο πρώτους.',
            en:
              'I am black, heavy and broken at the top. I say the same thing three times, in ' +
              'three different ways, and thanks to the third one the world finally ' +
              'understood the first two.',
          },
          hint: {
            el: 'Ψάξε μια πλάκα γεμάτη μικρά γράμματα, με τα ελληνικά στο κάτω μέρος.',
            en: 'Look for a slab crowded with tiny writing, with the Greek at the bottom.',
          },
          answerExhibitId: 'london-british-museum-rosetta-stone',
        },
        {
          id: 'london-british-museum-riddle-2',
          difficulty: 2,
          prompt: {
            el:
              'Στεκόμουν σε ένα μπαλκόνι ψηλά πάνω από την Αθήνα με πέντε αδελφές, ' +
              'κρατώντας μια στέγη στο κεφάλι μου. Πριν από διακόσια χρόνια με κατέβασαν και ' +
              'με έφεραν εδώ. Οι αδελφές μου με περιμένουν ακόμη.',
            en:
              'I stood on a balcony high above Athens with five sisters, holding a roof on ' +
              'my head. Two hundred years ago I was taken down and brought here. My sisters ' +
              'are still waiting for me.',
          },
          hint: {
            el: 'Μια κοπέλα που κάνει τη δουλειά μιας κολόνας.',
            en: 'A young woman doing the job of a column.',
          },
          answerExhibitId: 'london-british-museum-caryatid',
        },
        {
          id: 'london-british-museum-riddle-3',
          difficulty: 2,
          prompt: {
            el:
              'Είμαστε μια μικρή στρατιά από βασιλιάδες, βασίλισσες και ιππότες, σκαλισμένοι ' +
              'από δόντια ζώων της θάλασσας. Κοιμηθήκαμε αιώνες στην άμμο ενός νησιού, και ' +
              'μερικοί από εμάς δαγκώνουν την ασπίδα τους.',
            en:
              'We are a little army of kings, queens and knights, carved from the teeth of ' +
              'sea animals. We slept for centuries in the sand of an island, and some of us ' +
              'are biting our shields.',
          },
          hint: {
            el: 'Ψάξε ένα παιχνίδι που παίζεται σε 64 τετράγωνα.',
            en: 'Look for a game played on 64 squares.',
          },
          answerExhibitId: 'london-british-museum-lewis-chessmen',
        },
        {
          id: 'london-british-museum-riddle-4',
          difficulty: 3,
          prompt: {
            el:
              'Με σκάλισαν από μαύρη πέτρα σε ένα νησί στη μέση του ωκεανού και με έστησαν ' +
              'με την πλάτη στη θάλασσα. Ναύτες με ξέθαψαν και με πήραν. Στην πλάτη μου ' +
              'κρύβω ζωγραφιές από πουλιά.',
            en:
              'I was carved from black stone on an island in the middle of the ocean and set ' +
              'up with my back to the sea. Sailors dug me out and took me away. On my back I ' +
              'hide carvings of birds.',
          },
          hint: {
            el: 'Ένα τεράστιο κεφάλι με βαθιά μάτια, από πολύ μακριά.',
            en: 'An enormous head with deep eyes, from very far away.',
          },
          answerExhibitId: 'london-british-museum-hoa-hakananaia',
        },
      ],
    },
  },

  // ---------------------------------------------------------- st paul's cathedral
  {
    id: 'london-st-pauls-cathedral',
    cityId: 'london',
    emoji: '🔔',
    category: 'landmark',
    difficulty: 2,

    name: { el: 'Καθεδρικός του Αγίου Παύλου', en: 'St Paul’s Cathedral' },
    tagline: {
      el: 'Ο θόλος που γεννήθηκε από μια φωτιά και άντεξε έναν πόλεμο',
      en: 'The dome that was born from a fire and survived a war',
    },
    story: {
      el:
        'Το 1666 η Μεγάλη Πυρκαγιά σάρωσε το Λονδίνο και ο παλιός καθεδρικός κάηκε. Ο ' +
        'βασιλιάς ζήτησε από τον Κρίστοφερ Ρεν, που ήταν αστρονόμος και μαθηματικός εκτός ' +
        'από αρχιτέκτονας, να σχεδιάσει έναν καινούργιο. Ο Ρεν δούλεψε 35 χρόνια, και ο ' +
        'καθεδρικός τελείωσε το 1710 με έναν θόλο 111 μέτρων, από τους μεγαλύτερους στον ' +
        'κόσμο. Στην πραγματικότητα είναι τρεις θόλοι ο ένας μέσα στον άλλον: αυτός που ' +
        'βλέπεις απ’ έξω, αυτός που βλέπεις από μέσα, και ένας κρυφός από τούβλα ανάμεσά ' +
        'τους που κρατάει το βάρος. Αν ανέβεις 257 σκαλιά φτάνεις στη Γαλαρία των Ψιθύρων, ' +
        'όπου ένας ψίθυρος στον τοίχο ταξιδεύει γύρω γύρω ως την απέναντι πλευρά. Στον ' +
        'Β΄ Παγκόσμιο Πόλεμο οι βόμβες έπεφταν ολόγυρα, αλλά εθελοντές φύλαγαν τη στέγη ' +
        'κάθε νύχτα και ο θόλος άντεξε· μια φωτογραφία του, όρθιου μέσα στους καπνούς, ' +
        'έδωσε κουράγιο σε όλη τη χώρα. Ο Ρεν είναι θαμμένος στην κρύπτη, και ο τάφος του ' +
        'λέει: «Αν ψάχνεις το μνημείο του, κοίταξε γύρω σου».',
      en:
        'In 1666 the Great Fire swept through London and the old cathedral burned down. The ' +
        'King asked Christopher Wren, who was an astronomer and mathematician as well as an ' +
        'architect, to design a new one. Wren worked for 35 years, and the cathedral was ' +
        'finished in 1710 with a dome 111 metres high, one of the biggest in the world. It ' +
        'is really three domes one inside another: the one you see from outside, the one ' +
        'you see from inside, and a hidden brick cone between them that carries the weight. ' +
        'Climb 257 steps and you reach the Whispering Gallery, where a whisper against the ' +
        'wall travels all the way round to the far side. In the Second World War bombs fell ' +
        'all around, but volunteers guarded the roof every night and the dome survived; a ' +
        'photograph of it standing in the smoke gave courage to the whole country. Wren is ' +
        'buried in the crypt, and his tomb says: “If you seek his monument, look around ' +
        'you.”',
    },
    facts: [
      {
        el: 'Ο Ρεν δούλεψε 35 χρόνια, από το 1675 ως το 1710.',
        en: 'Wren worked on it for 35 years, from 1675 to 1710.',
      },
      {
        el: 'Ο θόλος φτάνει τα 111 μέτρα και είναι τρεις θόλοι ο ένας μέσα στον άλλον.',
        en: 'The dome reaches 111 metres and is three domes one inside another.',
      },
      {
        el: 'Η Γαλαρία των Ψιθύρων είναι 257 σκαλιά πάνω από το πάτωμα.',
        en: 'The Whispering Gallery is 257 steps above the floor.',
      },
    ],
    location: {
      lat: 51.51378,
      lng: -0.09831,
      anchor: 'centroid',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q173882', deltaM: 0 },
        { kind: 'osm', ref: 'way/369161987', deltaM: 9 },
        { kind: 'wikipedia', ref: "St Paul's Cathedral", deltaM: 2 },
      ],
      verifiedAt: '2026-09-12',
      map: { x: 0.454, y: 0.405 },
      // stpauls.co.uk/visit: visitors enter up the west steps, the front with the two
      // towers and the statue of Queen Anne.
      findIt: {
        el: 'Η είσοδος είναι από τα μεγάλα σκαλιά της δυτικής πρόσοψης, με το άγαλμα της βασίλισσας Άννας μπροστά.',
        en: 'The way in is up the big west steps, the front with the statue of Queen Anne in front of it.',
      },
    },
    question: {
      q: {
        el: 'Τι συμβαίνει στη Γαλαρία των Ψιθύρων;',
        en: 'What happens in the Whispering Gallery?',
      },
      answers: [
        { el: 'Ο ψίθυρος φτάνει απέναντι', en: 'A whisper reaches the far side' },
        { el: 'Το πάτωμα κουνιέται ελαφρά', en: 'The floor moves a little' },
        { el: 'Τα φώτα σβήνουν από μόνα τους', en: 'The lights switch themselves off' },
        { el: 'Η φωνή σου ακούγεται πιο βαριά', en: 'Your voice sounds much deeper' },
      ],
      explanation: {
        el:
          'Ο στρογγυλός τοίχος οδηγεί τον ήχο γύρω γύρω σαν ράγα, κι έτσι ένας ψίθυρος ' +
          'φτάνει 30 μέτρα πιο πέρα, στο αυτί κάποιου που δεν βλέπεις καν.',
        en:
          'The round wall carries the sound around it like a rail, so a whisper arrives 30 ' +
          'metres away in the ear of someone you cannot even see.',
      },
    },
  },

  // ------------------------------------------------------------- tower of london
  {
    id: 'london-tower-of-london',
    cityId: 'london',
    emoji: '🏰',
    category: 'history',
    difficulty: 2,

    name: { el: 'Πύργος του Λονδίνου', en: 'The Tower of London' },
    tagline: {
      el: 'Ένα κάστρο χιλίων χρόνων, με κοράκια, στέμματα και μια πολική αρκούδα',
      en: 'A thousand-year-old castle with ravens, crowns and a polar bear',
    },
    story: {
      el:
        'Αφού κέρδισε την Αγγλία το 1066, ο Γουλιέλμος ο Κατακτητής ήθελε ένα φρούριο για ' +
        'να δείξει σε όλους ποιος κάνει κουμάντο. Γύρω στο 1078 ξεκίνησε τον μεγάλο ' +
        'τετράγωνο πύργο στη μέση, που αργότερα ασπρίστηκε και ονομάστηκε Λευκός Πύργος. ' +
        'Οι επόμενοι βασιλιάδες πρόσθεσαν τείχη, πύργους και μια τάφρο με νερό, και το ' +
        'κάστρο έγινε παλάτι, θησαυροφυλάκιο, νομισματοκοπείο και φυλακή για ανθρώπους που ' +
        'ο βασιλιάς θεωρούσε επικίνδυνους. Ήταν ακόμη και ζωολογικός κήπος: το 1252 ο ' +
        'βασιλιάς της Νορβηγίας χάρισε μια πολική αρκούδα, που την άφηναν να ψαρεύει στον ' +
        'Τάμεση δεμένη με μακρύ σκοινί. Σήμερα τα Κοσμήματα του Στέμματος λάμπουν σε ένα ' +
        'θησαυροφυλάκιο, τουλάχιστον έξι κοράκια περπατούν καμαρωτά στο γρασίδι, γιατί ' +
        'ένας θρύλος λέει ότι αν φύγουν θα πέσει το βασίλειο, και οι φρουροί με τα ' +
        'κόκκινα και μπλε, οι Yeoman Warders με το παρατσούκλι Beefeaters, μένουν μέσα στα ' +
        'τείχη με τις οικογένειές τους. Η τάφρος αδειάστηκε το 1843 και έγινε γρασίδι. ' +
        'Κάθε βράδυ, εδώ και επτακόσια χρόνια, οι πύλες κλειδώνουν με την ίδια τελετή.',
      en:
        'After winning England in 1066, William the Conqueror wanted a fortress to show ' +
        'everyone who was in charge. Around 1078 he began the great square keep in the ' +
        'middle, later whitewashed and named the White Tower. The kings who followed added ' +
        'walls, towers and a moat full of water, and the castle became a palace, a ' +
        'treasury, a mint for making coins and a prison for people the king thought were ' +
        'dangerous. It was even a zoo: in 1252 the King of Norway sent a polar bear, which ' +
        'was allowed to fish in the Thames on a long rope. Today the Crown Jewels sparkle ' +
        'in a strongroom, at least six ravens strut across the grass, because a legend says ' +
        'the kingdom will fall if they leave, and the guards in red and blue, the Yeoman ' +
        'Warders nicknamed Beefeaters, live inside the walls with their families. The moat ' +
        'was drained in 1843 and turned into a lawn. Every night for seven hundred years ' +
        'the gates have been locked with the same ceremony.',
    },
    facts: [
      {
        el: 'Ο Λευκός Πύργος ξεκίνησε γύρω στο 1078, από τον Γουλιέλμο τον Κατακτητή.',
        en: 'The White Tower was begun around 1078 by William the Conqueror.',
      },
      {
        el: 'Τουλάχιστον έξι κοράκια ζουν πάντα εδώ, με δικό τους φύλακα.',
        en: 'At least six ravens always live here, with a keeper of their own.',
      },
      {
        el: 'Η τάφρος αδειάστηκε το 1843 και σήμερα είναι γρασίδι.',
        en: 'The moat was drained in 1843 and is grass today.',
      },
    ],
    location: {
      lat: 51.5082,
      lng: -0.0762,
      anchor: 'area',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q62378', deltaM: 0 },
        { kind: 'osm', ref: 'way/370870741', deltaM: 10 },
        { kind: 'wikipedia', ref: 'Tower of London', deltaM: 17 },
      ],
      verifiedAt: '2026-09-12',
      map: { x: 0.563, y: 0.478 },
      // hrp.org.uk/tower-of-london/visit: the entrance and ticket office are on the
      // west side, by the river, a few minutes from Tower Hill station.
      findIt: {
        el: 'Η είσοδος και τα εκδοτήρια είναι στη δυτική πλευρά του κάστρου, κοντά στο ποτάμι.',
        en: 'The entrance and the ticket office are on the west side of the castle, close to the river.',
      },
    },
    question: {
      q: {
        el: 'Ποιο ζώο έζησε κάποτε στο κάστρο και ψάρευε στο ποτάμι;',
        en: 'Which animal once lived in the castle and fished in the river?',
      },
      answers: [
        { el: 'Μια αρκούδα', en: 'A bear' },
        { el: 'Ένας κροκόδειλος', en: 'A crocodile' },
        { el: 'Μια καμηλοπάρδαλη', en: 'A giraffe' },
        { el: 'Ένας ιπποπόταμος', en: 'A hippopotamus' },
      ],
      explanation: {
        el:
          'Μια πολική αρκούδα, δώρο του βασιλιά της Νορβηγίας το 1252. Την έβγαζαν στην ' +
          'όχθη με σκοινί για να πιάνει μόνη της τα ψάρια της.',
        en:
          'A polar bear, a gift from the King of Norway in 1252. It was taken to the bank on ' +
          'a rope so that it could catch its own fish.',
      },
    },
  },

  // ---------------------------------------------------------------- tower bridge
  {
    id: 'london-tower-bridge',
    cityId: 'london',
    emoji: '🌉',
    category: 'landmark',
    difficulty: 1,

    name: { el: 'Τάουερ Μπριτζ', en: 'Tower Bridge' },
    tagline: {
      el: 'Η γέφυρα που ανοίγει σαν βιβλίο για να περάσουν τα καράβια',
      en: 'The bridge that opens like a book so ships can pass',
    },
    story: {
      el:
        'Τη δεκαετία του 1880 τα λιμάνια του Λονδίνου είχαν τόση δουλειά που η πόλη ' +
        'χρειαζόταν μια καινούργια γέφυρα εδώ, αλλά μια κανονική γέφυρα θα έκλεινε τον ' +
        'δρόμο στα καράβια. Ο αρχιτέκτονας Χόρας Τζόουνς και ο μηχανικός Τζον Γουλφ Μπάρι ' +
        'σχεδίασαν λοιπόν μια γέφυρα που ανοίγει: δύο μισά δρόμου που σηκώνονται προς τα ' +
        'πάνω μέσα σε περίπου πέντε λεπτά. Οι πέτρινοι πύργοι μοιάζουν με μεσαιωνικό ' +
        'κάστρο, για να ταιριάζουν με τον Πύργο του Λονδίνου δίπλα, αλλά μέσα τους κρύβουν ' +
        'ατσάλι και μηχανές, που πρώτα κινούνταν με ατμό και από το 1976 με ηλεκτρισμό. ' +
        'Άνοιξε το 1894 βαμμένη καφέ σαν σοκολάτα και σηκώνεται ακόμη περίπου 800 φορές ' +
        'τον χρόνο, δωρεάν, αρκεί το καράβι να το ζητήσει μια μέρα πριν. Οι δύο διάδρομοι ' +
        'ψηλά, 42 μέτρα πάνω από το νερό, έχουν σήμερα γυάλινο πάτωμα. Τον Δεκέμβριο του ' +
        '1952 ένα διώροφο λεωφορείο βρέθηκε πάνω της την ώρα που άρχισε κατά λάθος να ' +
        'ανοίγει· ο οδηγός πάτησε γκάζι, το λεωφορείο πήδηξε το κενό και όλοι έγιναν καλά. ' +
        'Πήρε ανταμοιβή δέκα λίρες.',
      en:
        'By the 1880s London’s docks were so busy that the city needed a new bridge here, ' +
        'but an ordinary bridge would have blocked the ships. So the architect Horace Jones ' +
        'and the engineer John Wolfe Barry designed a bridge that opens: two halves of road ' +
        'that tilt upwards in about five minutes. The stone towers look like a medieval ' +
        'castle, to match the Tower of London next door, but inside they hide steel and ' +
        'machinery, driven first by steam and since 1976 by electricity. It opened in 1894 ' +
        'painted chocolate brown and still lifts about 800 times a year, for free, as long ' +
        'as the ship asks a day ahead. The two walkways high up, 42 metres above the water, ' +
        'have glass floors today. In December 1952 a double-decker bus was on the bridge ' +
        'when it began to open by mistake; the driver put his foot down, the bus jumped ' +
        'the gap and everyone recovered. He was given a reward of ten pounds.',
    },
    facts: [
      {
        el: 'Άνοιξε το 1894 και σηκώνεται περίπου 800 φορές τον χρόνο.',
        en: 'It opened in 1894 and lifts about 800 times a year.',
      },
      {
        el: 'Οι ψηλοί διάδρομοι είναι 42 μέτρα πάνω από το ποτάμι και έχουν γυάλινο πάτωμα.',
        en: 'The high walkways are 42 metres above the river and have glass floors.',
      },
      {
        el: 'Οι μηχανές δούλευαν με ατμό ως το 1976· από τότε με ηλεκτρισμό.',
        en: 'The machinery ran on steam until 1976; since then, on electricity.',
      },
    ],
    location: {
      lat: 51.50556,
      lng: -0.07528,
      anchor: 'centroid',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q83125', deltaM: 0 },
        { kind: 'osm', ref: 'node/2079674503', deltaM: 8 },
        { kind: 'wikipedia', ref: 'Tower Bridge', deltaM: 5 },
      ],
      verifiedAt: '2026-09-12',
      map: { x: 0.568, y: 0.512 },
      // towerbridge.org.uk/visit: the entrance to the exhibition and the walkways is
      // in the north-west tower, the one nearest the Tower of London.
      findIt: {
        el: 'Η είσοδος για τους ψηλούς διαδρόμους είναι στον βορειοδυτικό πύργο, αυτόν που είναι πιο κοντά στον Πύργο του Λονδίνου.',
        en: 'The entrance to the high walkways is in the north-west tower, the one nearest the Tower of London.',
      },
    },
    question: {
      q: {
        el: 'Γιατί ανοίγει η γέφυρα στη μέση;',
        en: 'Why does the bridge open in the middle?',
      },
      answers: [
        { el: 'Για να περνούν ψηλά καράβια', en: 'So tall ships can pass' },
        { el: 'Για να φεύγει η βροχή', en: 'So the rain can drain away' },
        { el: 'Για να ξεκουράζονται οι μηχανές', en: 'So the machines can rest' },
        { el: 'Για να περνούν τα λεωφορεία', en: 'So buses can get across' },
      ],
      explanation: {
        el:
          'Τα δύο μισά του δρόμου σηκώνονται για να χωρέσει ένα κατάρτι από κάτω. Το ' +
          'καράβι το ζητάει μια μέρα πριν, και η γέφυρα ανοίγει χωρίς να πληρώσει.',
        en:
          'The two halves of the road tilt up so that a mast can fit underneath. The ship ' +
          'asks a day ahead, and the bridge opens without charging a penny.',
      },
    },
  },

  // ------------------------------------------------------ natural history museum
  {
    id: 'london-natural-history-museum',
    cityId: 'london',
    emoji: '🦕',
    category: 'museum',
    difficulty: 1,

    name: { el: 'Μουσείο Φυσικής Ιστορίας', en: 'The Natural History Museum' },
    tagline: {
      el: 'Μια φάλαινα στην οροφή, δεινόσαυροι στο ισόγειο, ζώα στους τοίχους',
      en: 'A whale on the ceiling, dinosaurs downstairs, animals on the walls',
    },
    story: {
      el:
        'Το κτίριο μοιάζει με καθεδρικό ναό και το έφτιαξε επίτηδες έτσι ο αρχιτέκτονας ' +
        'Άλφρεντ Γουότερχαουζ το 1881, έναν ναό για τη φύση. Κοίτα τους τοίχους: είναι ' +
        'ντυμένοι με κεραμικά πλακάκια και πάνω τους σκαρφαλώνουν μαϊμούδες, φίδια, ' +
        'ψάρια και πουλιά, όλα ψημένα από πηλό. Στο δυτικό μισό του κτιρίου τα ζώα είναι ' +
        'ζωντανά είδη, στο ανατολικό είδη που έχουν χαθεί. Μόλις μπεις, σήκωσε το κεφάλι: ' +
        'από την οροφή της μεγάλης αίθουσας κρέμεται ο σκελετός μιας γαλάζιας φάλαινας ' +
        '25 μέτρων, με ανοιχτό το στόμα, σαν να βουτάει προς το μέρος σου. Πιο πέρα ' +
        'περιμένουν οι δεινόσαυροι, με έναν Τυραννόσαυρο που κουνιέται και βρυχάται, και ' +
        'ένα δωμάτιο που τρέμει για να καταλάβεις πώς είναι ένας σεισμός. Το μουσείο ' +
        'φυλάει 80 εκατομμύρια δείγματα, από μετεωρίτες ως πεταλούδες, και εκατοντάδες ' +
        'επιστήμονες δουλεύουν πίσω από τις αίθουσες ανακαλύπτοντας καινούργια είδη κάθε ' +
        'χρόνο. Η είσοδος είναι δωρεάν, και ο Δαρβίνος κάθεται σε μαρμάρινη καρέκλα στην ' +
        'κορυφή της σκάλας, παρακολουθώντας ποιος μπαίνει.',
      en:
        'The building looks like a cathedral, and the architect Alfred Waterhouse made it ' +
        'that way on purpose in 1881: a temple for nature. Look at the walls: they are ' +
        'dressed in terracotta tiles, and up them climb monkeys, snakes, fish and birds, ' +
        'all baked from clay. In the west half of the building the animals are living ' +
        'species; in the east half, species that have died out. As soon as you walk in, ' +
        'look up: from the ceiling of the great hall hangs the skeleton of a blue whale 25 ' +
        'metres long, mouth open, as if diving towards you. Further on the dinosaurs are ' +
        'waiting, with a Tyrannosaurus that moves and roars, and a room that shakes so you ' +
        'can feel what an earthquake is like. The museum keeps 80 million specimens, from ' +
        'meteorites to butterflies, and hundreds of scientists work behind the galleries ' +
        'discovering new species every year. Entry is free, and Darwin sits in a marble ' +
        'chair at the top of the stairs, watching who comes in.',
    },
    facts: [
      {
        el: 'Το κτίριο άνοιξε το 1881 και οι τοίχοι του είναι γεμάτοι ζώα από ψημένο πηλό.',
        en: 'The building opened in 1881 and its walls are covered in animals of baked clay.',
      },
      {
        el: 'Ο σκελετός της γαλάζιας φάλαινας έχει μήκος 25 μέτρα.',
        en: 'The blue whale skeleton is 25 metres long.',
      },
      {
        el: 'Φυλάει 80 εκατομμύρια δείγματα και η είσοδος είναι δωρεάν.',
        en: 'It keeps 80 million specimens and entry is free.',
      },
    ],
    location: {
      lat: 51.49611,
      lng: -0.17611,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q309388', deltaM: 0 },
        { kind: 'osm', ref: 'way/24436446', deltaM: 39 },
        { kind: 'wikipedia', ref: 'Natural History Museum, London', deltaM: 19 },
      ],
      verifiedAt: '2026-09-12',
      map: { x: 0.069, y: 0.635 },
      // nhm.ac.uk/visit: two entrances, Cromwell Road (the grand front, into Hintze
      // Hall) and Exhibition Road (the side, into the Earth galleries).
      findIt: {
        el: 'Η μεγάλη είσοδος είναι στην Cromwell Road, κάτω από τους δύο πύργους· υπάρχει και δεύτερη, στην Exhibition Road.',
        en: 'The grand entrance is on Cromwell Road, under the two towers; there is a second one on Exhibition Road.',
      },
    },
    question: {
      q: {
        el: 'Ποιο ζώο κρέμεται από την οροφή της μεγάλης αίθουσας;',
        en: 'Which animal hangs from the ceiling of the great hall?',
      },
      answers: [
        { el: 'Μια γαλάζια φάλαινα', en: 'A blue whale' },
        { el: 'Ένας δεινόσαυρος', en: 'A dinosaur' },
        { el: 'Ένα γιγάντιο καλαμάρι', en: 'A giant squid' },
        { el: 'Ένα μαμούθ', en: 'A woolly mammoth' },
      ],
      explanation: {
        el:
          'Ως το 2017 στη θέση της στεκόταν ο σκελετός ενός Διπλόδοκου. Τώρα κρέμεται η ' +
          'φάλαινα, το μεγαλύτερο ζώο που έζησε ποτέ.',
        en:
          'Until 2017 a Diplodocus skeleton stood in its place. Now the whale hangs there, ' +
          'the largest animal that has ever lived.',
      },
    },

    museum: {
      doorNote: {
        el: 'Τα Σαββατοκύριακα η ουρά για τους δεινόσαυρους είναι μεγάλη. Πήγαινε εκεί πρώτα, ή αργά το απόγευμα.',
        en: 'At weekends the queue for the dinosaurs is long. Go there first, or late in the afternoon.',
      },
      rooms: [
        {
          id: 'london-natural-history-museum-hintze-hall',
          emoji: '🐋',
          name: { el: 'Η Μεγάλη Αίθουσα', en: 'Hintze Hall' },
          intro: {
            el:
              'Η αίθουσα της εισόδου είναι από μόνη της μια έκθεση. Ψηλά, μια φάλαινα ' +
              'βουτάει προς τα κάτω. Στα πλάγια, σε κόγχες, στέκονται ένα κομμάτι ' +
              'δέντρου παλιότερο από κάθε κάστρο της Αγγλίας, ένας μετεωρίτης και ένα ' +
              'κοράλλι. Και στην κορυφή της σκάλας κάθεται ο άνθρωπος που εξήγησε πώς ' +
              'γίναμε όλοι αυτό που είμαστε.',
            en:
              'The entrance hall is an exhibition in itself. Overhead, a whale dives ' +
              'downwards. At the sides, in alcoves, stand a slice of a tree older than any ' +
              'castle in England, a meteorite and a coral. And at the top of the stairs ' +
              'sits the man who explained how we all became what we are.',
          },
          exhibits: [
            {
              id: 'london-natural-history-museum-hope-whale',
              name: { el: 'Η Ελπίδα, η γαλάζια φάλαινα', en: 'Hope, the blue whale' },
              blurb: {
                el:
                  'Ο σκελετός έχει μήκος 25,2 μέτρα και ζυγίζει τεσσεράμισι τόνους, κι ας ' +
                  'είναι μόνο κόκαλα. Η φάλαινα ήταν θηλυκή και το 1891 βγήκε στα ρηχά ' +
                  'ενός λιμανιού στην Ιρλανδία, όπου δεν μπορούσε πια να ξαναβγεί στο ' +
                  'βαθύ νερό. Το μουσείο αγόρασε τα κόκαλα, τα φύλαξε σε αποθήκη για ' +
                  'χρόνια και τα κρέμασε πρώτη φορά το 1934, σε άλλη αίθουσα. Το 2017 τη ' +
                  'μετέφεραν εδώ και την κρέμασαν σε στάση βουτιάς, με το στόμα ανοιχτό ' +
                  'σαν να τρώει. Την ονόμασαν Ελπίδα, γιατί οι γαλάζιες φάλαινες ' +
                  'κόντεψαν να εξαφανιστούν και τώρα, που απαγορεύεται το κυνήγι τους, ' +
                  'ξαναπληθαίνουν σιγά σιγά.',
                en:
                  'The skeleton is 25.2 metres long and weighs four and a half tonnes, even ' +
                  'though it is only bones. The whale was a female, and in 1891 she came ' +
                  'into the shallows of a harbour in Ireland, where she could no longer get ' +
                  'back to deep water. The museum bought the bones, kept them in storage ' +
                  'for years and hung them for the first time in 1934, in another hall. In ' +
                  '2017 she was moved here and hung in a diving pose, mouth open as if ' +
                  'feeding. She was named Hope, because blue whales came close to dying out ' +
                  'and now, with hunting banned, their numbers are slowly growing again.',
              },
              question: {
                q: {
                  el: 'Πόσο μακρύς είναι ο σκελετός της φάλαινας;',
                  en: 'How long is the whale skeleton?',
                },
                answers: [
                  { el: '25 μέτρα', en: '25 metres' },
                  { el: '5 μέτρα', en: '5 metres' },
                  { el: '50 μέτρα', en: '50 metres' },
                  { el: '100 μέτρα', en: '100 metres' },
                ],
                explanation: {
                  el: 'Είκοσι πέντε μέτρα, όσο δύο λεωφορεία στη σειρά. Και αυτή δεν ήταν καν από τις πιο μεγάλες.',
                  en: 'Twenty-five metres, as long as two buses end to end. And she was not even one of the biggest.',
                },
              },
            },
            {
              id: 'london-natural-history-museum-sequoia',
              name: { el: 'Η φέτα από τη γιγάντια σεκόγια', en: 'The slice of giant sequoia' },
              blurb: {
                el:
                  'Στον τοίχο της σκάλας κρέμεται μια φέτα από κορμό δέντρου, τόσο φαρδιά ' +
                  'που θα χρειαζόσουν τέσσερα παιδιά με ανοιχτά χέρια για να την ' +
                  'αγκαλιάσετε. Είναι από μια γιγάντια σεκόγια της Καλιφόρνιας, που ήταν ' +
                  '101 μέτρα ψηλή και 1.300 χρονών όταν την έκοψαν το 1891. Κάθε χρόνο ' +
                  'ένα δέντρο μεγαλώνει έναν δακτύλιο κάτω από τον φλοιό του, κι έτσι οι ' +
                  'επιστήμονες μέτρησαν τους κύκλους και έμαθαν την ηλικία του. Το δέντρο ' +
                  'φύτρωσε πριν χτιστεί ο πρώτος πέτρινος πύργος του Λονδίνου, και ήταν ' +
                  'ήδη γέρικο όταν έφτασε ο Γουλιέλμος ο Κατακτητής.',
                en:
                  'On the wall of the staircase hangs a slice of tree trunk so wide that it ' +
                  'would take four children with arms stretched out to hug it. It comes ' +
                  'from a giant sequoia in California that was 101 metres tall and 1,300 ' +
                  'years old when it was cut down in 1891. Every year a tree grows one ring ' +
                  'under its bark, so scientists counted the rings and learned its age. The ' +
                  'tree sprouted before the first stone tower in London was built, and it ' +
                  'was already old when William the Conqueror arrived.',
              },
              question: {
                q: {
                  el: 'Πώς ξέρουν οι επιστήμονες πόσο χρονών ήταν το δέντρο;',
                  en: 'How do scientists know how old the tree was?',
                },
                answers: [
                  { el: 'Μέτρησαν τους δακτυλίους', en: 'They counted its rings' },
                  { el: 'Το έγραφε ένα βιβλίο', en: 'A book said so' },
                  { el: 'Το ρώτησαν τους ξυλοκόπους', en: 'They asked the lumberjacks' },
                  { el: 'Μέτρησαν το βάρος του', en: 'They weighed it' },
                ],
                explanation: {
                  el: 'Ένας δακτύλιος για κάθε χρόνο. Οι φαρδιοί είναι καλές χρονιές με βροχή, οι στενοί χρονιές ξηρασίας.',
                  en: 'One ring for every year. Wide rings are good years with rain; narrow ones are years of drought.',
                },
              },
            },
            {
              id: 'london-natural-history-museum-darwin-statue',
              name: { el: 'Ο Δαρβίνος στη σκάλα', en: 'Darwin on the stairs' },
              blurb: {
                el:
                  'Ένας γέρος με μακριά γενειάδα κάθεται σε μαρμάρινη καρέκλα στην κορυφή ' +
                  'της κεντρικής σκάλας, με τα χέρια ήρεμα στα γόνατα. Είναι ο Κάρολος ' +
                  'Δαρβίνος, και το άγαλμα αποκαλύφθηκε το 1885, τρία χρόνια μετά τον ' +
                  'θάνατό του. Νέος, ο Δαρβίνος ταξίδεψε πέντε χρόνια με ένα πλοίο γύρω ' +
                  'από τον κόσμο, μάζεψε πουλιά, σκαθάρια και απολιθώματα, και παρατήρησε ' +
                  'ότι σε κάθε νησί οι σπίνοι είχαν λίγο διαφορετικό ράμφος. Από τέτοιες ' +
                  'μικρές παρατηρήσεις κατάλαβε ότι τα ζώα αλλάζουν σιγά σιγά από γενιά σε ' +
                  'γενιά. Το άγαλμα μεταφέρθηκε δύο φορές και επέστρεψε στη θέση του το ' +
                  '2009, για τα 200 χρόνια από τη γέννησή του.',
                en:
                  'An old man with a long beard sits in a marble chair at the top of the ' +
                  'main staircase, hands resting calmly on his knees. He is Charles Darwin, ' +
                  'and the statue was unveiled in 1885, three years after his death. As a ' +
                  'young man Darwin spent five years on a ship sailing round the world, ' +
                  'collecting birds, beetles and fossils, and he noticed that on each island ' +
                  'the finches had slightly different beaks. From small observations like ' +
                  'that he worked out that animals change little by little from one ' +
                  'generation to the next. The statue was moved twice and came back to its ' +
                  'place in 2009, for the 200th anniversary of his birth.',
              },
              question: {
                q: {
                  el: 'Ποια πουλιά μελέτησε ο Δαρβίνος για να καταλάβει πώς αλλάζουν τα ζώα;',
                  en: 'Which birds did Darwin study to understand how animals change?',
                },
                answers: [
                  { el: 'Σπίνους από νησιά', en: 'Finches from islands' },
                  { el: 'Λιοντάρια της Αφρικής', en: 'Lions of Africa' },
                  { el: 'Χρυσόψαρα σε γυάλα', en: 'Goldfish in a bowl' },
                  { el: 'Πιγκουίνους της Ανταρκτικής', en: 'Penguins of Antarctica' },
                ],
                explanation: {
                  el: 'Στα νησιά Γκαλαπάγκος κάθε νησί είχε σπίνους με ράμφος φτιαγμένο για το δικό του φαγητό.',
                  en: 'On the Galápagos Islands each island had finches with a beak shaped for its own food.',
                },
              },
            },
          ],
        },
        {
          id: 'london-natural-history-museum-dinosaurs-and-earth',
          emoji: '🦖',
          name: { el: 'Δεινόσαυροι και η Γη που τρέμει', en: 'Dinosaurs and the shaking Earth' },
          intro: {
            el:
              'Δύο μέρη του μουσείου που τα παιδιά ζητούν πρώτα. Η αίθουσα των ' +
              'δεινοσαύρων, με έναν Τυραννόσαυρο που δεν είναι απολίθωμα αλλά μηχανή, και ' +
              'οι αίθουσες της Γης, όπου μια Στεγόσαυρος με γυναικείο όνομα σε υποδέχεται ' +
              'και ένα ιαπωνικό μαγαζί ταρακουνιέται για να νιώσεις έναν αληθινό σεισμό.',
            en:
              'Two parts of the museum that children ask for first. The dinosaur gallery, ' +
              'with a Tyrannosaurus that is not a fossil but a machine, and the Earth ' +
              'galleries, where a Stegosaurus with a girl’s name greets you and a Japanese ' +
              'shop shakes so you can feel a real earthquake.',
          },
          exhibits: [
            {
              id: 'london-natural-history-museum-t-rex',
              name: { el: 'Ο Τυραννόσαυρος που κουνιέται', en: 'The Tyrannosaurus that moves' },
              blurb: {
                el:
                  'Στο βάθος της αίθουσας των δεινοσαύρων, μέσα σε μισοσκόταδο, ένας ' +
                  'Τυραννόσαυρος σε φυσικό μέγεθος γυρίζει το κεφάλι, ανοιγοκλείνει τα ' +
                  'μάτια, μυρίζει τον αέρα και βρυχάται. Δεν είναι απολίθωμα· είναι μια ' +
                  'μηχανή ντυμένη με δέρμα, φτιαγμένη με βάση αληθινούς σκελετούς, και τα ' +
                  'μοτέρ της κάνουν όλες τις κινήσεις. Ο αληθινός Τυραννόσαυρος έζησε πριν ' +
                  'από 66 εκατομμύρια χρόνια, είχε μήκος 12 μέτρα και δόντια σαν μπανάνες. ' +
                  'Μερικά μικρά παιδιά κλαίνε, τα περισσότερα θέλουν να τον ξαναδούν. Πιο ' +
                  'πριν, στη διαδρομή, περνάς πάνω από απολιθώματα σε μια γέφυρα και βλέπεις ' +
                  'το κρανίο ενός Τρικεράτοπα με τα τρία του κέρατα.',
                en:
                  'At the far end of the dinosaur gallery, in half-darkness, a life-size ' +
                  'Tyrannosaurus turns its head, blinks, sniffs the air and roars. It is not ' +
                  'a fossil; it is a machine dressed in skin, built from real skeletons, and ' +
                  'its motors make every movement. The real Tyrannosaurus lived 66 million ' +
                  'years ago, was 12 metres long and had teeth like bananas. A few small ' +
                  'children cry; most want to see it again. Before you reach it, the route ' +
                  'takes you over the fossils on a raised walkway, past the skull of a ' +
                  'Triceratops with its three horns.',
              },
              question: {
                q: {
                  el: 'Τι κάνει ο Τυραννόσαυρος της αίθουσας που δεν κάνει ένα απολίθωμα;',
                  en: 'What does the gallery’s Tyrannosaurus do that a fossil cannot?',
                },
                answers: [
                  { el: 'Κουνιέται και βρυχάται', en: 'It moves and roars' },
                  { el: 'Τρώει αληθινό κρέας', en: 'It eats real meat' },
                  { el: 'Αλλάζει χρώμα τη νύχτα', en: 'It changes colour' },
                  { el: 'Πετάει πάνω από τον κόσμο', en: 'It flies over the crowd' },
                ],
                explanation: {
                  el: 'Είναι μηχανή με μοτέρ, φτιαγμένη από επιστήμονες και τεχνίτες με βάση αληθινά κόκαλα.',
                  en: 'It is a machine with motors, built by scientists and craftspeople using real bones as a guide.',
                },
              },
            },
            {
              id: 'london-natural-history-museum-sophie',
              name: { el: 'Η Σόφι η Στεγόσαυρος', en: 'Sophie the Stegosaurus' },
              blurb: {
                el:
                  'Στην αίθουσα της Γης, δίπλα στην είσοδο της Exhibition Road, στέκεται ' +
                  'ένας αληθινός σκελετός Στεγόσαυρου, 5,6 μέτρα μήκος, με μεγάλες ' +
                  'πλάκες στη ράχη και τέσσερα αγκάθια στην ουρά. Βρέθηκε στο Γουαϊόμινγκ ' +
                  'της Αμερικής το 2003 και είναι ο πιο ολοκληρωμένος Στεγόσαυρος στον ' +
                  'κόσμο: σχεδόν 300 από τα κόκαλά του είναι τα δικά του, όχι αντίγραφα. ' +
                  'Το μουσείο τον ονόμασε Σόφι από την κόρη του ανθρώπου που βοήθησε να ' +
                  'αγοραστεί, αν και κανείς δεν ξέρει αν το ζώο ήταν αγόρι ή κορίτσι. Ήταν ' +
                  'νεαρό όταν πέθανε, πριν από 150 εκατομμύρια χρόνια, κι έτσι δεν είχε ' +
                  'μεγαλώσει όσο θα μπορούσε.',
                en:
                  'In the Earth Hall, beside the Exhibition Road entrance, stands a real ' +
                  'Stegosaurus skeleton, 5.6 metres long, with big plates along its back ' +
                  'and four spikes on its tail. It was found in Wyoming in America in 2003 ' +
                  'and is the most complete Stegosaurus in the world: almost 300 of its ' +
                  'bones are its own, not copies. The museum named it Sophie after the ' +
                  'daughter of the man who helped buy it, although nobody knows whether the ' +
                  'animal was a boy or a girl. It was young when it died, 150 million years ' +
                  'ago, so it had not grown as big as it could have.',
              },
              question: {
                q: {
                  el: 'Τι κάνει τη Σόφι ξεχωριστή ανάμεσα στους Στεγόσαυρους;',
                  en: 'What makes Sophie special among Stegosauruses?',
                },
                answers: [
                  { el: 'Είναι η πιο πλήρης', en: 'She is the most complete' },
                  { el: 'Είναι η μεγαλύτερη', en: 'She is the biggest' },
                  { el: 'Είναι η μόνη με φτερά', en: 'She is the only one with wings' },
                  { el: 'Είναι η πιο παλιά', en: 'She is the oldest' },
                ],
                explanation: {
                  el: 'Σχεδόν 300 από τα κόκαλά της βρέθηκαν μαζί. Οι περισσότεροι δεινόσαυροι είναι μισοί, συμπληρωμένοι με αντίγραφα.',
                  en: 'Almost 300 of her bones were found together. Most dinosaur skeletons are half real, filled in with copies.',
                },
              },
            },
            {
              id: 'london-natural-history-museum-earthquake-room',
              name: { el: 'Το μαγαζί που τρέμει', en: 'The shop that shakes' },
              blurb: {
                el:
                  'Στην αίθουσα των ηφαιστείων και των σεισμών υπάρχει ένα μικρό ιαπωνικό ' +
                  'σούπερ μάρκετ. Μπαίνεις, στέκεσαι ανάμεσα στα ράφια, και το πάτωμα ' +
                  'αρχίζει να τραντάζεται όπως τραντάχτηκε η πόλη Κόμπε τα ξημερώματα της ' +
                  '17ης Ιανουαρίου 1995. Οι οθόνες δείχνουν αληθινές εικόνες από τις ' +
                  'κάμερες ενός μαγαζιού εκείνη τη μέρα, με τα προϊόντα να πέφτουν από τα ' +
                  'ράφια. Ο αληθινός σεισμός κράτησε είκοσι δευτερόλεπτα και κατέστρεψε ' +
                  'μεγάλο μέρος της πόλης. Το μουσείο το έφτιαξε όχι για να τρομάξεις, ' +
                  'αλλά για να καταλάβεις γιατί οι μηχανικοί στην Ιαπωνία χτίζουν κτίρια ' +
                  'που λυγίζουν χωρίς να σπάνε.',
                en:
                  'In the volcanoes and earthquakes gallery there is a small Japanese ' +
                  'supermarket. You walk in, stand between the shelves, and the floor ' +
                  'begins to shake the way the city of Kobe shook in the early morning of ' +
                  '17 January 1995. The screens show real footage from a shop’s cameras ' +
                  'that day, with goods tumbling off the shelves. The real earthquake ' +
                  'lasted twenty seconds and destroyed a large part of the city. The museum ' +
                  'built this not to scare you, but so you understand why engineers in ' +
                  'Japan build buildings that bend without breaking.',
              },
              question: {
                q: {
                  el: 'Ποια πόλη ταρακουνήθηκε στον σεισμό που ξαναζείς μέσα στο μαγαζί;',
                  en: 'Which city was shaken by the earthquake you relive in the shop?',
                },
                answers: [
                  { el: 'Το Κόμπε', en: 'Kobe' },
                  { el: 'Η Λισαβόνα', en: 'Lisbon' },
                  { el: 'Το Σαν Φρανσίσκο', en: 'San Francisco' },
                  { el: 'Το Μεξικό', en: 'Mexico City' },
                ],
                explanation: {
                  el: 'Το Κόμπε της Ιαπωνίας, τον Ιανουάριο του 1995. Οι εικόνες στις οθόνες είναι από αληθινό μαγαζί εκείνο το πρωί.',
                  en: 'Kobe, in Japan, in January 1995. The pictures on the screens are from a real shop that morning.',
                },
              },
            },
          ],
        },
      ],
      riddles: [
        {
          id: 'london-natural-history-museum-riddle-1',
          difficulty: 1,
          prompt: {
            el:
              'Είμαι το μεγαλύτερο ζώο που έζησε ποτέ, κι όμως πετάω. Κρέμομαι από την ' +
              'οροφή με ανοιχτό το στόμα, σαν να βουτάω για φαγητό, και από κάτω μου ' +
              'περνούν χιλιάδες άνθρωποι κάθε μέρα.',
            en:
              'I am the largest animal that ever lived, and yet I fly. I hang from the ' +
              'ceiling with my mouth open, as if diving for food, and thousands of people ' +
              'pass beneath me every day.',
          },
          hint: {
            el: 'Κοίτα ψηλά μόλις μπεις από την κύρια είσοδο.',
            en: 'Look up as soon as you come in through the main entrance.',
          },
          answerExhibitId: 'london-natural-history-museum-hope-whale',
        },
        {
          id: 'london-natural-history-museum-riddle-2',
          difficulty: 2,
          prompt: {
            el:
              'Έζησα χίλια τριακόσια χρόνια χωρίς να κουνηθώ από τη θέση μου. Μετρώ τα ' +
              'χρόνια μου με κύκλους, τον έναν μέσα στον άλλον, και όποιος θέλει μπορεί να ' +
              'τους μετρήσει κι αυτός.',
            en:
              'I lived for thirteen hundred years without ever moving from my spot. I count ' +
              'my years in circles, one inside the other, and anyone who wants to can count ' +
              'them too.',
          },
          hint: {
            el: 'Δεν είμαι ζώο. Ψάξε στον τοίχο της σκάλας.',
            en: 'I am not an animal. Look on the wall of the staircase.',
          },
          answerExhibitId: 'london-natural-history-museum-sequoia',
        },
        {
          id: 'london-natural-history-museum-riddle-3',
          difficulty: 2,
          prompt: {
            el:
              'Έχω πλάκες στη ράχη σαν πανιά και τέσσερα αγκάθια στην ουρά, και το κεφάλι ' +
              'μου είναι μικρό για το μέγεθός μου. Είμαι η πιο ολοκληρωμένη από όλο μου το ' +
              'σόι, και έχω όνομα κοριτσιού.',
            en:
              'I have plates on my back like sails and four spikes on my tail, and my head is ' +
              'small for my size. I am the most complete of my whole family, and I have a ' +
              'girl’s name.',
          },
          hint: {
            el: 'Είμαι δεινόσαυρος, αλλά όχι αυτός που βρυχάται.',
            en: 'I am a dinosaur, but not the one that roars.',
          },
          answerExhibitId: 'london-natural-history-museum-sophie',
        },
      ],
    },
  },

  // ---------------------------------------------------------------- science museum
  {
    id: 'london-science-museum',
    cityId: 'london',
    emoji: '🚀',
    category: 'museum',
    difficulty: 2,

    name: { el: 'Μουσείο Επιστημών', en: 'The Science Museum' },
    tagline: {
      el: 'Η πιο παλιά ατμομηχανή του κόσμου, μια κάψουλα από τη Σελήνη',
      en: 'The world’s oldest steam engine and a capsule from the Moon',
    },
    story: {
      el:
        'Δίπλα ακριβώς στο Μουσείο Φυσικής Ιστορίας στέκεται ένα μουσείο για όλα όσα ' +
        'έφτιαξαν οι άνθρωποι: μηχανές, ρολόγια, αεροπλάνα, υπολογιστές, φάρμακα, ' +
        'διαστημόπλοια. Ξεκίνησε το 1857 με τα αντικείμενα μιας μεγάλης έκθεσης που είχε ' +
        'γίνει στο Χάιντ Παρκ, και μεγάλωσε τόσο που χρειάστηκε δικό του κτίριο. Στο ' +
        'ισόγειο, σε μια αίθουσα που λέγεται «Φτιάχνοντας τον σύγχρονο κόσμο», στέκεται η ' +
        'Puffing Billy, η πιο παλιά ατμομηχανή που σώζεται στον κόσμο, από το 1814, που ' +
        'έσερνε βαγόνια με κάρβουνο σε ένα ορυχείο. Δίπλα της είναι το μοντέλο του DNA που ' +
        'έφτιαξαν δύο επιστήμονες το 1953 και ένα κομμάτι από την πρώτη μηχανή υπολογισμών, ' +
        'που ο εφευρέτης της δεν πρόλαβε ποτέ να τελειώσει. Στην αίθουσα του Διαστήματος, ' +
        'που άνοιξε το 2025, μια καμένη κάψουλα σε σχήμα κώνου έχει κάνει τον γύρο της ' +
        'Σελήνης με τρεις αστροναύτες μέσα της. Η είσοδος είναι δωρεάν, και οι περισσότεροι ' +
        'επισκέπτες φεύγουν με την απορία πώς λειτουργεί κάτι που χρησιμοποιούν κάθε μέρα.',
      en:
        'Right next to the Natural History Museum stands a museum for everything people ' +
        'have made: engines, clocks, aeroplanes, computers, medicines, spacecraft. It began ' +
        'in 1857 with objects from a great exhibition that had been held in Hyde Park, and ' +
        'grew so much that it needed a building of its own. On the ground floor, in a hall ' +
        'called Making the Modern World, stands Puffing Billy, the oldest surviving steam ' +
        'locomotive in the world, from 1814, which hauled wagons of coal at a mine. Beside ' +
        'it are the model of DNA that two scientists built in 1953 and a piece of the first ' +
        'calculating machine, which its inventor never managed to finish. In the Space ' +
        'gallery, opened in 2025, a scorched cone-shaped capsule has been round the Moon ' +
        'with three astronauts inside it. Entry is free, and most visitors leave wondering ' +
        'how something they use every day actually works.',
    },
    facts: [
      {
        el: 'Η Puffing Billy, από το 1814, είναι η πιο παλιά ατμομηχανή που σώζεται στον κόσμο.',
        en: 'Puffing Billy, from 1814, is the oldest surviving steam locomotive in the world.',
      },
      {
        el: 'Η κάψουλα του Απόλλων 10 βρίσκεται εδώ δανεική από το 1978.',
        en: 'The Apollo 10 capsule has been here on loan since 1978.',
      },
      {
        el: 'Η αίθουσα του Διαστήματος άνοιξε τον Σεπτέμβριο του 2025.',
        en: 'The Space gallery opened in September 2025.',
      },
    ],
    location: {
      lat: 51.4975,
      lng: -0.17472,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q674773', deltaM: 0 },
        { kind: 'osm', ref: 'way/27765411', deltaM: 105 },
        { kind: 'wikipedia', ref: 'Science Museum, London', deltaM: 0 },
      ],
      verifiedAt: '2026-09-12',
      note: 'OSM’s centre for the building sits 105 m off, because the museum is a long block along Exhibition Road; the stored point is Wikidata’s and lies inside the building.',
      map: { x: 0.076, y: 0.617 },
      // sciencemuseum.org.uk/visit-us: the entrance is on Exhibition Road.
      findIt: {
        el: 'Η είσοδος είναι στην Exhibition Road, στον ίδιο δρόμο με την πλαϊνή είσοδο του Μουσείου Φυσικής Ιστορίας.',
        en: 'The entrance is on Exhibition Road, the same street as the side entrance of the Natural History Museum.',
      },
    },
    question: {
      q: {
        el: 'Τι κουβαλούσε η ατμομηχανή Puffing Billy;',
        en: 'What did the locomotive Puffing Billy carry?',
      },
      answers: [
        { el: 'Κάρβουνο από ορυχείο', en: 'Coal from a mine' },
        { el: 'Επιβάτες στο Λονδίνο', en: 'Passengers to London' },
        { el: 'Γράμματα και δέματα', en: 'Letters and parcels' },
        { el: 'Στρατιώτες στον πόλεμο', en: 'Soldiers to the war' },
      ],
      explanation: {
        el:
          'Έσερνε βαγόνια με κάρβουνο από το ορυχείο του Γουάιλαμ ως το ποτάμι, οκτώ ' +
          'χιλιόμετρα, για σχεδόν πενήντα χρόνια.',
        en:
          'It hauled coal wagons from Wylam colliery down to the river, eight kilometres, ' +
          'for almost fifty years.',
      },
    },

    museum: {
      doorNote: {
        el: 'Το ισόγειο είναι δωρεάν και τεράστιο. Η αίθουσα με τα πειράματα για παιδιά, το Wonderlab, έχει εισιτήριο.',
        en: 'The ground floor is free and enormous. The hands-on gallery for children, Wonderlab, needs a ticket.',
      },
      rooms: [
        {
          id: 'london-science-museum-making-the-modern-world',
          emoji: '⚙️',
          name: { el: 'Φτιάχνοντας τον σύγχρονο κόσμο', en: 'Making the Modern World' },
          intro: {
            el:
              'Μια μακριά αίθουσα με 250 χρόνια εφευρέσεων στη σειρά, από τις πρώτες ' +
              'ατμομηχανές ως τους πρώτους υπολογιστές. Δεν είναι όλα λαμπερά: υπάρχει ένα ' +
              'σιδερένιο τέρας που ξεφυσούσε καπνό, μια μηχανή που δεν τελείωσε ποτέ, και ' +
              'ένα μοντέλο από μεταλλικές πλάκες που εξηγεί πώς είναι φτιαγμένος εσύ.',
            en:
              'A long hall with 250 years of inventions in a row, from the first steam ' +
              'engines to the first computers. Not everything is shiny: there is an iron ' +
              'monster that puffed smoke, a machine that was never finished, and a model of ' +
              'metal plates that explains how you are made.',
          },
          exhibits: [
            {
              id: 'london-science-museum-puffing-billy',
              name: { el: 'Η Puffing Billy', en: 'Puffing Billy' },
              blurb: {
                el:
                  'Μια μαύρη, βαριά μηχανή με ψηλή καμινάδα, φτιαγμένη το 1813 με 1814 στο ' +
                  'ορυχείο του Γουάιλαμ, στη βόρεια Αγγλία, από τον Γουίλιαμ Χέντλι και ' +
                  'τους μηχανικούς του. Είναι η πιο παλιά ατμομηχανή που σώζεται στον ' +
                  'κόσμο. Έσερνε βαγόνια με κάρβουνο ως το ποτάμι, με ταχύτητα ανθρώπου ' +
                  'που περπατάει γρήγορα, και ξεφυσούσε τόσο δυνατά που οι ντόπιοι της ' +
                  'έδωσαν το παρατσούκλι «Μπίλι που ξεφυσάει». Δούλεψε ως το 1862, σχεδόν ' +
                  'πενήντα χρόνια, και μετά ήρθε κατευθείαν στο μουσείο. Οι πρώτες ' +
                  'ατμομηχανές που έφεραν επιβάτες, λίγα χρόνια αργότερα, έμαθαν από τα ' +
                  'λάθη της.',
                en:
                  'A black, heavy engine with a tall chimney, built in 1813 to 1814 at Wylam ' +
                  'colliery in the north of England by William Hedley and his engineers. It ' +
                  'is the oldest surviving steam locomotive in the world. It hauled coal ' +
                  'wagons down to the river at the speed of a person walking fast, and it ' +
                  'puffed so loudly that the locals nicknamed it Puffing Billy. It worked ' +
                  'until 1862, almost fifty years, and then came straight to the museum. The ' +
                  'first locomotives that carried passengers, a few years later, learned ' +
                  'from its mistakes.',
              },
              question: {
                q: {
                  el: 'Πόσο χρονών είναι περίπου η Puffing Billy;',
                  en: 'About how old is Puffing Billy?',
                },
                answers: [
                  { el: 'Πάνω από 200 χρόνων', en: 'More than 200 years' },
                  { el: 'Περίπου 100 χρόνων', en: 'About 100 years' },
                  { el: 'Περίπου 50 χρόνων', en: 'About 50 years' },
                  { el: 'Πάνω από 500 χρόνων', en: 'More than 500 years' },
                ],
                explanation: {
                  el: 'Φτιάχτηκε το 1814. Κανένα άλλο τρένο με ατμό δεν έχει επιζήσει από τόσο παλιά.',
                  en: 'It was built in 1814. No other steam engine has survived from so long ago.',
                },
              },
            },
            {
              id: 'london-science-museum-dna-model',
              name: { el: 'Το μοντέλο του DNA', en: 'The DNA model' },
              blurb: {
                el:
                  'Το 1953, στο Κέιμπριτζ, ο Φράνσις Κρικ και ο Τζέιμς Γουάτσον κατάλαβαν ' +
                  'το σχήμα του DNA, της συνταγής που έχει μέσα του κάθε ζωντανό πλάσμα: ' +
                  'δύο κλωστές στριμμένες η μία γύρω από την άλλη, σαν στριφτή σκάλα. Για ' +
                  'να το ελέγξουν έφτιαξαν ένα μοντέλο από μεταλλικές πλάκες, σύρματα και ' +
                  'σφιγκτήρες, δύο μέτρα ψηλό. Αυτό που βλέπεις εδώ είναι ανακατασκευή με ' +
                  'μερικές από τις αρχικές πλάκες. Η ιδέα στηρίχτηκε και στις φωτογραφίες ' +
                  'της Ρόζαλιντ Φράνκλιν, που είχε βγάλει με ακτίνες Χ τη σκιά του μορίου. ' +
                  'Χωρίς τη δική της εικόνα, η σκάλα δεν θα είχε βρει το σχήμα της.',
                en:
                  'In 1953, in Cambridge, Francis Crick and James Watson worked out the shape ' +
                  'of DNA, the recipe inside every living thing: two strands twisted round ' +
                  'each other like a spiral staircase. To test it they built a model of ' +
                  'metal plates, wires and clamps, two metres tall. What you see here is a ' +
                  'reconstruction using some of the original plates. The idea also rested ' +
                  'on the photographs of Rosalind Franklin, who had captured the molecule’s ' +
                  'shadow with X-rays. Without her picture, the staircase would not have ' +
                  'found its shape.',
              },
              question: {
                q: {
                  el: 'Τι σχήμα έχει το μοντέλο του DNA;',
                  en: 'What shape is the DNA model?',
                },
                answers: [
                  { el: 'Μια στριφτή σκάλα', en: 'A twisted ladder' },
                  { el: 'Μια ίσια σκάλα', en: 'A straight ladder' },
                  { el: 'Μια μπάλα', en: 'A ball' },
                  { el: 'Ένας κύβος', en: 'A cube' },
                ],
                explanation: {
                  el: 'Δύο κλωστές γυρίζουν η μία γύρω από την άλλη. Οι επιστήμονες το λένε «διπλή έλικα».',
                  en: 'Two strands wind round each other. Scientists call it a “double helix”.',
                },
              },
            },
            {
              id: 'london-science-museum-difference-engine',
              name: { el: 'Η μηχανή που δεν τελείωσε ποτέ', en: 'The machine that was never finished' },
              blurb: {
                el:
                  'Ένα κομμάτι από μπρούντζινα γρανάζια και άξονες, γυαλισμένο και ' +
                  'σιωπηλό. Είναι ό,τι πρόλαβε να φτιάξει ο Τσαρλς Μπάμπατζ από τη ' +
                  '«Μηχανή Διαφορών» του, μια μηχανή που θα έκανε υπολογισμούς γυρίζοντας ' +
                  'μια μανιβέλα, για να μη γίνονται λάθη στους πίνακες των αριθμών που ' +
                  'χρησιμοποιούσαν οι ναυτικοί. Ξεκίνησε το 1823, τσακώθηκε με τον ' +
                  'μηχανικό του, τα χρήματα τελείωσαν, και το 1833 το έργο σταμάτησε. Το ' +
                  'κομμάτι αυτό όμως δουλεύει, και ήταν η πρώτη φορά που κάποιος έφτιαξε ' +
                  'μηχανή που σκέφτεται με αριθμούς. Πολύ αργότερα, οι υπολογιστές του ' +
                  'κόσμου ξεκίνησαν από αυτή την ιδέα.',
                en:
                  'A section of brass gears and shafts, polished and silent. It is all that ' +
                  'Charles Babbage managed to build of his Difference Engine, a machine that ' +
                  'would do calculations by turning a handle, so that no mistakes crept ' +
                  'into the tables of numbers sailors used. He began in 1823, fell out with ' +
                  'his engineer, ran out of money, and in 1833 the work stopped. But this ' +
                  'section works, and it was the first time anyone had built a machine that ' +
                  'thinks in numbers. Much later, the world’s computers grew out of this ' +
                  'idea.',
              },
              question: {
                q: {
                  el: 'Τι θα έκανε η μηχανή του Μπάμπατζ αν είχε τελειώσει;',
                  en: 'What would Babbage’s machine have done if it had been finished?',
                },
                answers: [
                  { el: 'Υπολογισμούς', en: 'Sums' },
                  { el: 'Ζωγραφιές με χρώματα', en: 'Coloured drawings' },
                  { el: 'Μουσική για πιάνο', en: 'Piano music' },
                  { el: 'Ρούχα από μαλλί', en: 'Woollen clothes' },
                ],
                explanation: {
                  el: 'Θα έβγαζε πίνακες αριθμών χωρίς λάθη, γυρίζοντας μια μανιβέλα. Οι άνθρωποι που τους έγραφαν με το χέρι έκαναν λάθη.',
                  en: 'It would have printed tables of numbers with no mistakes, by turning a handle. People writing them by hand made errors.',
                },
              },
            },
          ],
        },
        {
          id: 'london-science-museum-space',
          emoji: '🌙',
          name: { el: 'Το Διάστημα', en: 'Space' },
          intro: {
            el:
              'Η νεότερη αίθουσα του μουσείου, από τον Σεπτέμβριο του 2025. Δύο κάψουλες ' +
              'που γύρισαν αληθινά από το διάστημα στέκονται η μία δίπλα στην άλλη, μια ' +
              'αμερικανική και μια ρωσική, και ανάμεσά τους μια πέτρα που ήρθε από τη ' +
              'Σελήνη. Όλα εδώ είναι καμένα, γρατζουνισμένα ή σκονισμένα, γιατί έχουν ' +
              'ταξιδέψει στ’ αλήθεια.',
            en:
              'The newest gallery in the museum, open since September 2025. Two capsules ' +
              'that really came back from space stand side by side, one American and one ' +
              'Russian, and between them a stone that came from the Moon. Everything here ' +
              'is scorched, scratched or dusty, because it has actually travelled.',
          },
          exhibits: [
            {
              id: 'london-science-museum-apollo-10',
              name: { el: 'Η κάψουλα του Απόλλων 10', en: 'The Apollo 10 capsule' },
              blurb: {
                el:
                  'Ένας κώνος από μέταλλο, καμένος και καφετής απ’ έξω, με τρεις ' +
                  'μικρές θέσεις μέσα. Τον Μάιο του 1969 ταξίδεψε ως τη Σελήνη με τρεις ' +
                  'αστροναύτες, τον Στάφορντ, τον Γιανγκ και τον Σέρναν, και έκανε την ' +
                  'πρόβα της προσσελήνωσης: κατέβηκε ως 15 χιλιόμετρα από την επιφάνεια και ' +
                  'γύρισε πίσω, χωρίς να πατήσει. Δύο μήνες αργότερα το Απόλλων 11 έκανε ' +
                  'το βήμα. Στην επιστροφή η κάψουλα μπήκε στην ατμόσφαιρα με τέτοια ' +
                  'ταχύτητα που ο αέρας την έκαψε, γι’ αυτό είναι μαύρη. Βρίσκεται στο ' +
                  'Λονδίνο δανεική από το 1978 και είναι η μόνη κάψουλα που πήγε στη ' +
                  'Σελήνη έξω από τις ΗΠΑ.',
                en:
                  'A metal cone, scorched and brown on the outside, with three small seats ' +
                  'inside. In May 1969 it travelled to the Moon with three astronauts, ' +
                  'Stafford, Young and Cernan, and rehearsed the landing: it went down to ' +
                  'within 15 kilometres of the surface and came back up, without touching ' +
                  'down. Two months later Apollo 11 took the step. On the way home the ' +
                  'capsule hit the atmosphere so fast that the air burned it, which is why ' +
                  'it is black. It has been in London on loan since 1978 and is the only ' +
                  'capsule that went to the Moon that is kept outside the USA.',
              },
              question: {
                q: {
                  el: 'Τι έκανε το Απόλλων 10 όταν έφτασε στη Σελήνη;',
                  en: 'What did Apollo 10 do when it reached the Moon?',
                },
                answers: [
                  { el: 'Έκανε πρόβα', en: 'A rehearsal' },
                  { el: 'Προσγειώθηκε πρώτο', en: 'The first landing' },
                  { el: 'Μάζεψε πέτρες', en: 'It collected rocks' },
                  { el: 'Έβαλε τη σημαία', en: 'It planted the flag' },
                ],
                explanation: {
                  el: 'Κατέβηκε ως 15 χιλιόμετρα από την επιφάνεια και γύρισε. Το Απόλλων 11 προσγειώθηκε δύο μήνες μετά.',
                  en: 'It went down to 15 kilometres above the surface and came back. Apollo 11 landed two months later.',
                },
              },
            },
            {
              id: 'london-science-museum-soyuz',
              name: { el: 'Η κάψουλα του Τιμ Πικ', en: 'Tim Peake’s capsule' },
              blurb: {
                el:
                  'Μια στρογγυλή ρωσική κάψουλα Σογιούζ, με το εξωτερικό της καμένο και ' +
                  'ένα φουσκωτό κάθισμα στο σχήμα του σώματος ενός συγκεκριμένου ' +
                  'ανθρώπου. Τον Δεκέμβριο του 2015 μετέφερε τον Βρετανό αστροναύτη Τιμ ' +
                  'Πικ στον Διεθνή Διαστημικό Σταθμό, και τον Ιούνιο του 2016 τον έφερε ' +
                  'πίσω, πέφτοντας με αλεξίπτωτο στη στέπα του Καζακστάν. Ο Πικ έμεινε ' +
                  'έξι μήνες στο διάστημα, έκανε έναν περίπατο έξω από τον σταθμό και ' +
                  'έτρεξε έναν ολόκληρο μαραθώνιο πάνω σε διάδρομο, δεμένος για να μην ' +
                  'πετάξει. Είναι η πρώτη φορά που μια κάψουλα Απόλλων και μια Σογιούζ ' +
                  'στέκονται δίπλα δίπλα.',
                en:
                  'A round Russian Soyuz capsule, its outside scorched, with a moulded seat ' +
                  'in the exact shape of one particular person’s body. In December 2015 it ' +
                  'carried the British astronaut Tim Peake to the International Space ' +
                  'Station, and in June 2016 it brought him back, landing by parachute on ' +
                  'the steppe of Kazakhstan. Peake spent six months in space, took a walk ' +
                  'outside the station, and ran a whole marathon on a treadmill, strapped ' +
                  'down so he would not float away. It is the first time an Apollo capsule ' +
                  'and a Soyuz have stood side by side.',
              },
              question: {
                q: {
                  el: 'Ποιος γύρισε στη Γη μέσα σε αυτή την κάψουλα;',
                  en: 'Who came back to Earth inside this capsule?',
                },
                answers: [
                  { el: 'Ο Τιμ Πικ', en: 'Tim Peake' },
                  { el: 'Ο Νιλ Άρμστρονγκ', en: 'Neil Armstrong' },
                  { el: 'Ο Γιούρι Γκαγκάριν', en: 'Yuri Gagarin' },
                  { el: 'Η Λάικα', en: 'Laika the dog' },
                ],
                explanation: {
                  el: 'Ο Βρετανός αστροναύτης Τιμ Πικ, τον Ιούνιο του 2016, μετά από έξι μήνες στον διαστημικό σταθμό.',
                  en: 'The British astronaut Tim Peake, in June 2016, after six months on the space station.',
                },
              },
            },
            {
              id: 'london-science-museum-moon-rock',
              name: { el: 'Η πέτρα από τη Σελήνη', en: 'The Moon rock' },
              blurb: {
                el:
                  'Μια μικρή, σκούρα πέτρα μέσα σε γυάλινη θήκη, που δεν φαίνεται ' +
                  'σπουδαία μέχρι να διαβάσεις από πού ήρθε. Την μάζεψαν οι αστροναύτες ' +
                  'του Απόλλων 15 το 1971, από μια περιοχή της Σελήνης δίπλα σε μια βαθιά ' +
                  'χαράδρα, και είναι περίπου τριών δισεκατομμυρίων ετών. Η Σελήνη δεν ' +
                  'έχει αέρα ούτε βροχή, κι έτσι οι πέτρες της δεν φθείρονται· είναι σαν ' +
                  'παγωμένες στον χρόνο. Η πέτρα ανήκει στη NASA και είναι δανεική στο ' +
                  'μουσείο. Οι αστροναύτες έφεραν συνολικά 382 κιλά από τη Σελήνη, και ' +
                  'ακόμη και σήμερα οι επιστήμονες ανοίγουν κάποια δείγματα πρώτη φορά.',
                en:
                  'A small, dark stone in a glass case that does not look like much until ' +
                  'you read where it came from. The astronauts of Apollo 15 collected it in ' +
                  '1971, from a part of the Moon beside a deep canyon, and it is about three ' +
                  'billion years old. The Moon has no air and no rain, so its rocks do not ' +
                  'wear away; they are like frozen time. The stone belongs to NASA and is on ' +
                  'loan to the museum. Altogether the astronauts brought back 382 kilograms ' +
                  'of the Moon, and even today scientists are opening some samples for the ' +
                  'first time.',
              },
              question: {
                q: {
                  el: 'Πόσο χρονών είναι περίπου η πέτρα από τη Σελήνη;',
                  en: 'About how old is the Moon rock?',
                },
                answers: [
                  { el: 'Τρία δισεκατομμύρια χρόνια', en: 'Three billion years' },
                  { el: 'Τρεις χιλιάδες χρόνια', en: 'Three thousand years' },
                  { el: 'Τρία εκατομμύρια χρόνια', en: 'Three million years' },
                  { el: 'Τριακόσια χρόνια', en: 'Three hundred years' },
                ],
                explanation: {
                  el: 'Τρία δισεκατομμύρια. Στη Γη οι πέτρες αλλάζουν συνέχεια από το νερό και τον αέρα· στη Σελήνη μένουν ίδιες.',
                  en: 'Three billion. On Earth rocks are worn away by water and air all the time; on the Moon they stay the same.',
                },
              },
            },
          ],
        },
      ],
      riddles: [
        {
          id: 'london-science-museum-riddle-1',
          difficulty: 1,
          prompt: {
            el:
              'Ταξίδεψα ως τη Σελήνη με τρεις ανθρώπους μέσα μου, έκανα κύκλους γύρω της και ' +
              'γύρισα πίσω χωρίς να πατήσω πάνω της. Η πόρτα μου είναι πολύ μικρή για ' +
              'τόσο μεγάλο ταξίδι.',
            en:
              'I travelled to the Moon with three people inside me, circled around it and ' +
              'came back without ever touching it. My door is very small for such a long ' +
              'journey.',
          },
          hint: {
            el: 'Έχω σχήμα κώνου και είμαι καμένη απ’ έξω.',
            en: 'I am cone-shaped and scorched on the outside.',
          },
          answerExhibitId: 'london-science-museum-apollo-10',
        },
        {
          id: 'london-science-museum-riddle-2',
          difficulty: 2,
          prompt: {
            el:
              'Είμαι η πιο ηλικιωμένη του είδους μου σε όλο τον κόσμο. Έσερνα κάρβουνο σε ' +
              'ένα ορυχείο πριν από δύο αιώνες, ξεφυσώντας καπνό, και το παρατσούκλι μου ' +
              'βγήκε από αυτό το ξεφύσημα.',
            en:
              'I am the oldest of my kind in the whole world. I hauled coal at a mine two ' +
              'centuries ago, huffing out smoke, and my nickname came from that noise.',
          },
          hint: {
            el: 'Έχω ρόδες, καμινάδα, και όχι κέρατα.',
            en: 'I have wheels, a chimney, and no horns.',
          },
          answerExhibitId: 'london-science-museum-puffing-billy',
        },
        {
          id: 'london-science-museum-riddle-3',
          difficulty: 3,
          prompt: {
            el:
              'Δεν είμαι μηχανή ούτε όχημα· είμαι μια ιδέα από μεταλλικές πλάκες και ' +
              'σύρματα. Δείχνω πώς είναι φτιαγμένη η συνταγή που έχει μέσα του κάθε ζωντανό ' +
              'πλάσμα, στριμμένη σαν σκάλα.',
            en:
              'I am not a machine or a vehicle; I am an idea made of metal plates and ' +
              'wires. I show how the recipe inside every living thing is built, twisted ' +
              'like a staircase.',
          },
          hint: {
            el: 'Δύο επιστήμονες με έφτιαξαν το 1953 για να καταλάβουν κάτι πολύ μικρό.',
            en: 'Two scientists built me in 1953 to understand something very small.',
          },
          answerExhibitId: 'london-science-museum-dna-model',
        },
      ],
    },
  },

  // -------------------------------------------------------------------- monument
  {
    id: 'london-monument',
    cityId: 'london',
    emoji: '🔥',
    category: 'history',
    difficulty: 2,

    name: { el: 'Το Μνημείο της Μεγάλης Πυρκαγιάς', en: 'The Monument' },
    tagline: {
      el: 'Μια κολόνα ψηλή όσο η απόστασή της από τη φωτιά',
      en: 'A column as tall as its distance from the fire',
    },
    story: {
      el:
        'Τα ξημερώματα της 2ας Σεπτεμβρίου 1666, σε έναν φούρνο στην Pudding Lane, ξέφυγε ' +
        'μια φωτιά. Τα σπίτια ήταν ξύλινα και στριμωγμένα, φυσούσε δυνατός άνεμος, και ' +
        'μέσα σε τέσσερις μέρες κάηκε το μεγαλύτερο μέρος της παλιάς πόλης: 13.000 σπίτια ' +
        'και 87 εκκλησίες. Τα θύματα που καταγράφηκαν ήταν παραδόξως ελάχιστα, γιατί οι ' +
        'άνθρωποι πρόλαβαν να φύγουν, αλλά δεκάδες χιλιάδες έμειναν χωρίς σπίτι. Το ' +
        'Λονδίνο ξαναχτίστηκε με τούβλα και πέτρα, και ο Κρίστοφερ Ρεν με τον φίλο του ' +
        'Ρόμπερτ Χουκ σχεδίασαν αυτή την κολόνα για να θυμίζει τι έγινε. Τελείωσε το 1677, ' +
        'έχει ύψος 61 μέτρα και στέκεται ακριβώς 61 μέτρα από το σημείο που ξεκίνησε η ' +
        'φωτιά· στην κορυφή της λάμπει μια χρυσή σφαίρα με φλόγες. Μέσα της, 311 ' +
        'σκαλοπάτια τυλίγονται γύρω γύρω ως μια πλατφόρμα με θέα σε όλη την πόλη, και ' +
        'όποιος ανέβει παίρνει πιστοποιητικό. Ο Χουκ είχε άλλη μια ιδέα: η κολόνα είναι ' +
        'κούφια, και από ένα εργαστήριο στη βάση της κοιτούσε τα άστρα μέσα από τον ' +
        'σωλήνα της, σαν τηλεσκόπιο.',
      en:
        'In the early hours of 2 September 1666, a fire got out of control in a bakery on ' +
        'Pudding Lane. The houses were wooden and packed together, a strong wind was ' +
        'blowing, and within four days most of the old city had burned: 13,000 houses and ' +
        '87 churches. Amazingly few deaths were recorded, because people had time to flee, ' +
        'but tens of thousands were left without a home. London was rebuilt in brick and ' +
        'stone, and Christopher Wren and his friend Robert Hooke designed this column to ' +
        'remember what had happened. It was finished in 1677, it is 61 metres tall, and it ' +
        'stands exactly 61 metres from the spot where the fire began; at the top glows a ' +
        'golden ball of flames. Inside, 311 steps wind round and round to a platform with a ' +
        'view over the whole city, and everyone who climbs up is given a certificate. Hooke ' +
        'had one more idea: the column is hollow, and from a laboratory at its base he ' +
        'looked at the stars up through the shaft, as if it were a telescope.',
    },
    facts: [
      {
        el: 'Έχει ύψος 61 μέτρα και στέκεται 61 μέτρα από τον φούρνο όπου άρχισε η φωτιά.',
        en: 'It is 61 metres tall and stands 61 metres from the bakery where the fire began.',
      },
      {
        el: '311 σκαλοπάτια οδηγούν στην πλατφόρμα της κορυφής.',
        en: '311 steps lead up to the viewing platform.',
      },
      {
        el: 'Χτίστηκε από το 1671 ως το 1677, από τον Ρεν και τον Χουκ.',
        en: 'It was built from 1671 to 1677, by Wren and Hooke.',
      },
    ],
    location: {
      lat: 51.51014,
      lng: -0.08594,
      anchor: 'centroid',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q607700', deltaM: 0 },
        { kind: 'osm', ref: 'relation/3374550', deltaM: 1 },
        { kind: 'wikipedia', ref: 'Monument to the Great Fire of London', deltaM: 0 },
      ],
      verifiedAt: '2026-09-12',
      map: { x: 0.515, y: 0.453 },
      // themonument.org.uk: the door is at the base of the column, on the corner of
      // Monument Street and Fish Street Hill, a minute from Monument station.
      findIt: {
        el: 'Η πόρτα είναι στη βάση της κολόνας, στη γωνία Monument Street και Fish Street Hill, δίπλα στον σταθμό Monument.',
        en: 'The door is at the foot of the column, on the corner of Monument Street and Fish Street Hill, beside Monument station.',
      },
    },
    question: {
      q: {
        el: 'Πόσο μακριά από το σημείο που άρχισε η φωτιά στέκεται το Μνημείο;',
        en: 'How far from the spot where the fire began does the Monument stand?',
      },
      answers: [
        { el: 'Όσο το ύψος του, 61 μέτρα', en: 'Its own height, 61 metres' },
        { el: 'Ακριβώς πάνω του', en: 'Right on top of it' },
        { el: 'Ένα χιλιόμετρο', en: 'One kilometre away' },
        { el: 'Στην άλλη όχθη του ποταμού', en: 'On the other bank of the river' },
      ],
      explanation: {
        el:
          'Αν η κολόνα έπεφτε προς τα ανατολικά, η κορυφή της θα ακουμπούσε στον φούρνο. ' +
          'Έτσι το σχεδίασαν επίτηδες.',
        en:
          'If the column fell over towards the east, its top would land on the bakery. ' +
          'That was the design.',
      },
    },
  },

  // ---------------------------------------------------------------- borough market
  {
    id: 'london-borough-market',
    cityId: 'london',
    emoji: '🧀',
    category: 'food',
    difficulty: 1,

    name: { el: 'Αγορά Μπόρο', en: 'Borough Market' },
    tagline: {
      el: 'Χίλια χρόνια φαγητό κάτω από τις καμάρες του τρένου',
      en: 'A thousand years of food under the railway arches',
    },
    story: {
      el:
        'Στη νότια άκρη της Γέφυρας του Λονδίνου, από την εποχή που η γέφυρα ήταν η μόνη ' +
        'στην πόλη, οι αγρότες που έρχονταν από τον νότο σταματούσαν εδώ για να πουλήσουν ' +
        'ό,τι έφερναν πριν περάσουν απέναντι. Τα πρώτα γραπτά για την αγορά είναι από το ' +
        '1014, πάνω από χίλια χρόνια πριν. Ο δρόμος όμως μπούκωνε τόσο από κάρα και ' +
        'πάγκους που το 1754 το Κοινοβούλιο την έκλεισε. Οι κάτοικοι μάζεψαν χρήματα, ' +
        'αγόρασαν ένα τριγωνικό οικόπεδο δίπλα στην εκκλησία και άνοιξαν την αγορά ξανά το ' +
        '1756, εκεί που είναι ακόμη. Οι σιδερένιες στοές με τα πράσινα χρώματα χτίστηκαν ' +
        'το 1851, και αργότερα το τρένο πέρασε από πάνω τους σε καμάρες, κι έτσι ψωνίζεις ' +
        'με τα βαγόνια να βροντούν πάνω από το κεφάλι σου. Για αιώνες πουλούσαν εδώ ' +
        'χονδρικά, φρούτα και λαχανικά για τα μαγαζιά της πόλης, από τα μεσάνυχτα ως το ' +
        'πρωί. Σήμερα οι πάγκοι έχουν τυριά, ψωμιά, φρούτα, μπαχαρικά και φαγητό από όλο ' +
        'τον κόσμο, και το καλύτερο μεσημεριανό είναι ό,τι σου δώσουν να δοκιμάσεις.',
      en:
        'At the southern end of London Bridge, since the days when that bridge was the only ' +
        'one in the city, farmers coming up from the south stopped here to sell what they ' +
        'had brought before crossing over. The first written records of the market are ' +
        'from 1014, more than a thousand years ago. But the street became so choked with ' +
        'carts and stalls that in 1754 Parliament closed it down. The locals raised money, ' +
        'bought a triangle of land beside the church, and opened the market again in 1756, ' +
        'where it still is. The green iron halls were built in 1851, and later the railway ' +
        'was carried over them on arches, so you shop with trains rumbling above your head. ' +
        'For centuries this was a wholesale market, selling fruit and vegetables to the ' +
        'city’s shops from midnight until morning. Today the stalls hold cheeses, breads, ' +
        'fruit, spices and food from all over the world, and the best lunch is whatever ' +
        'they hand you to taste.',
    },
    facts: [
      {
        el: 'Τα πρώτα γραπτά για αγορά εδώ είναι από το 1014.',
        en: 'The first written records of a market here date from 1014.',
      },
      {
        el: 'Βρίσκεται στο ίδιο τριγωνικό οικόπεδο από το 1756.',
        en: 'It has stood on the same triangle of land since 1756.',
      },
      {
        el: 'Οι σιδερένιες στοές είναι του 1851 και το τρένο περνάει από πάνω τους.',
        en: 'The iron halls date from 1851 and the railway runs over the top of them.',
      },
    ],
    location: {
      lat: 51.50556,
      lng: -0.09083,
      anchor: 'area',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q894072', deltaM: 0 },
        { kind: 'osm', ref: 'way/24282400', deltaM: 36 },
        { kind: 'wikipedia', ref: 'Borough Market', deltaM: 1 },
      ],
      verifiedAt: '2026-09-12',
      map: { x: 0.491, y: 0.512 },
      // boroughmarket.org.uk/visit: the market sits between Southwark Cathedral and
      // the railway viaduct; the main way in is from Borough High Street, under the arches.
      findIt: {
        el: 'Η αγορά είναι δίπλα στον καθεδρικό του Σάουθγουορκ, κάτω από τις καμάρες του τρένου· μπες από την Borough High Street.',
        en: 'The market is next to Southwark Cathedral, under the railway arches; go in from Borough High Street.',
      },
    },
    question: {
      q: {
        el: 'Από πότε πουλάνε τρόφιμα σε αυτή τη γειτονιά;',
        en: 'How long has food been sold in this neighbourhood?',
      },
      answers: [
        { el: 'Εδώ και χίλια χρόνια', en: 'For a thousand years' },
        { el: 'Από το 1974 και μετά', en: 'Since the 1970s only' },
        { el: 'Από τη βασίλισσα Βικτωρία', en: 'Since Queen Victoria' },
        { el: 'Από τη Μεγάλη Πυρκαγιά', en: 'Since the Great Fire' },
      ],
      explanation: {
        el:
          'Τα πρώτα γραπτά είναι από το 1014. Η αγορά μετακόμισε λίγα μέτρα το 1756, αλλά ' +
          'δεν σταμάτησε ποτέ.',
        en:
          'The first records are from 1014. The market moved a few metres in 1756, but it ' +
          'never stopped.',
      },
    },
  },

  // ------------------------------------------------------------------ london zoo
  {
    id: 'london-london-zoo',
    cityId: 'london',
    emoji: '🐧',
    category: 'nature',
    difficulty: 1,

    name: { el: 'Ζωολογικός Κήπος του Λονδίνου', en: 'London Zoo' },
    tagline: {
      el: 'Ο πιο παλιός επιστημονικός ζωολογικός κήπος, με μια αρκούδα που έγινε παραμύθι',
      en: 'The oldest scientific zoo, and a bear who turned into a story',
    },
    story: {
      el:
        'Ο ζωολογικός κήπος άνοιξε το 1828 στην άκρη του Ρίτζεντς Παρκ, όχι για βόλτα αλλά ' +
        'για μελέτη: οι επιστήμονες ήθελαν να παρατηρούν ζώα από κοντά, και ο κόσμος μπήκε ' +
        'μέσα μόνο το 1847. Ήταν ο πρώτος ζωολογικός κήπος στον κόσμο που έγινε για την ' +
        'επιστήμη, και συνέχισε τις πρωτιές: το πρώτο σπίτι ερπετών το 1849, το πρώτο ' +
        'ενυδρείο ανοιχτό στο κοινό το 1853, το πρώτο σπίτι εντόμων το 1881 και ο πρώτος ' +
        'παιδικός ζωολογικός κήπος το 1938. Το 1914 ένας Καναδός στρατιώτης, που πήγαινε ' +
        'στον πόλεμο, άφησε εδώ για φύλαξη μια μικρή μαύρη αρκούδα που την έλεγε Γουίνι, ' +
        'από την πόλη του, το Γουίνιπεγκ. Ένα αγόρι, ο Κρίστοφερ Ρόμπιν, ερχόταν συχνά να ' +
        'τη δει και έδωσε το όνομά της στο αρκουδάκι του· ο πατέρας του, ο Α. Α. Μιλν, ' +
        'έγραψε τις ιστορίες του Γουίνι του Αρκουδάκι. Σήμερα εδώ ζουν περισσότερα από ' +
        '10.000 ζώα, από γορίλες ως πιγκουίνους, και μέρος της δουλειάς του κήπου είναι να ' +
        'γεννιούνται ζώα που στη φύση κοντεύουν να χαθούν.',
      en:
        'The zoo opened in 1828 on the edge of Regent’s Park, not for outings but for study: ' +
        'scientists wanted to watch animals up close, and the public was only let in in ' +
        '1847. It was the first zoo in the world made for science, and it kept coming ' +
        'first: the first reptile house in 1849, the first public aquarium in 1853, the ' +
        'first insect house in 1881 and the first children’s zoo in 1938. In 1914 a ' +
        'Canadian soldier on his way to the war left a small black bear here for ' +
        'safekeeping; he called her Winnie, after his home town, Winnipeg. A boy called ' +
        'Christopher Robin came to see her often and gave her name to his teddy bear; his ' +
        'father, A. A. Milne, wrote the Winnie-the-Pooh stories. Today more than 10,000 ' +
        'animals live here, from gorillas to penguins, and part of the zoo’s work is ' +
        'breeding animals that are close to disappearing in the wild.',
    },
    facts: [
      {
        el: 'Άνοιξε το 1828 για τους επιστήμονες και το 1847 για τον κόσμο.',
        en: 'It opened in 1828 for scientists and in 1847 for the public.',
      },
      {
        el: 'Είχε το πρώτο σπίτι ερπετών (1849) και το πρώτο δημόσιο ενυδρείο (1853) στον κόσμο.',
        en: 'It had the world’s first reptile house (1849) and first public aquarium (1853).',
      },
      {
        el: 'Η αρκούδα Γουίνι έζησε εδώ από το 1914 και έδωσε το όνομά της στον Γουίνι το Αρκουδάκι.',
        en: 'Winnie the bear lived here from 1914 and gave her name to Winnie-the-Pooh.',
      },
    ],
    location: {
      lat: 51.53556,
      lng: -0.15583,
      anchor: 'area',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q270263', deltaM: 0 },
        { kind: 'osm', ref: 'relation/231792', deltaM: 50 },
        { kind: 'wikipedia', ref: 'London Zoo', deltaM: 1 },
      ],
      verifiedAt: '2026-09-12',
      map: { x: 0.169, y: 0.123 },
      // londonzoo.org/plan-your-visit: the main entrance is on the Outer Circle, the
      // road that runs round Regent's Park, on the north side of the park.
      findIt: {
        el: 'Η κύρια είσοδος είναι στον Outer Circle, τον δρόμο που κάνει τον γύρο του Ρίτζεντς Παρκ, στη βόρεια πλευρά του πάρκου.',
        en: 'The main entrance is on the Outer Circle, the road that runs round Regent’s Park, on the north side of the park.',
      },
    },
    question: {
      q: {
        el: 'Πώς έφτασε η αρκούδα Γουίνι στο Λονδίνο;',
        en: 'How did Winnie the bear get to London?',
      },
      answers: [
        { el: 'Με έναν στρατιώτη από τον Καναδά', en: 'With a soldier from Canada' },
        { el: 'Με ένα τσίρκο από τη Ρωσία', en: 'With a circus from Russia' },
        { el: 'Δώρο από τον βασιλιά της Νορβηγίας', en: 'A gift from the King of Norway' },
        { el: 'Την έπιασαν σε ένα δάσος της Σκωτίας', en: 'Caught in a forest in Scotland' },
      ],
      explanation: {
        el:
          'Ο στρατιώτης Χάρι Κόλμπορν την αγόρασε στον Καναδά και την άφησε εδώ όταν έφυγε ' +
          'για τον πόλεμο. Μετά τον πόλεμο τη χάρισε στον κήπο.',
        en:
          'The soldier Harry Colebourn bought her in Canada and left her here when he went ' +
          'to the war. After the war he gave her to the zoo.',
      },
    },
  },

  // ------------------------------------------------------------------ cutty sark
  {
    id: 'london-cutty-sark',
    cityId: 'london',
    emoji: '⛵',
    category: 'history',
    difficulty: 2,

    name: { el: 'Κάτι Σαρκ', en: 'Cutty Sark' },
    tagline: {
      el: 'Το πιο γρήγορο ιστιοφόρο της εποχής του, τώρα σηκωμένο στον αέρα',
      en: 'The fastest sailing ship of its day, now lifted into the air',
    },
    story: {
      el:
        'Το 1869 ναυπηγήθηκε στη Σκωτία ένα καράβι φτιαγμένο για ένα μόνο πράγμα: να ' +
        'τρέχει. Ήταν ένα «κλίπερ» με λεπτή γάστρα και τεράστια πανιά, και η δουλειά του ' +
        'ήταν να φέρνει τσάι από την Κίνα στο Λονδίνο πριν από τα άλλα καράβια, γιατί το ' +
        'πρώτο τσάι της χρονιάς πουλιόταν ακριβότερα. Το όνομά του σημαίνει «κοντό ' +
        'πουκάμισο» στα σκωτσέζικα, από ένα ποίημα με μια μάγισσα που φορούσε ένα, και η ' +
        'ξύλινη φιγούρα στην πλώρη είναι η ίδια η μάγισσα, που κρατάει την ουρά ενός ' +
        'αλόγου. Τα ατμόπλοια όμως πήραν σύντομα το τσάι, κι έτσι το Κάτι Σαρκ γύρισε ' +
        'στο μαλλί από την Αυστραλία, όπου έγινε το πιο γρήγορο καράβι της διαδρομής: το ' +
        '1885 έφτασε από το Σίδνεϊ στο Λονδίνο σε 73 μέρες. Είναι το τελευταίο κλίπερ του ' +
        'τσαγιού που σώζεται στον κόσμο. Το 2007, την ώρα που το επισκεύαζαν, μια φωτιά το ' +
        'έκαψε, αλλά τα περισσότερα ξύλα του είχαν βγει για συντήρηση και σώθηκαν. Το 2012 ' +
        'άνοιξε ξανά, σηκωμένο τρία μέτρα στον αέρα, ώστε να περπατάς κάτω από τη γάστρα ' +
        'και να την αγγίζεις.',
      en:
        'In 1869 a ship was built in Scotland for one thing only: speed. It was a clipper, ' +
        'with a slim hull and enormous sails, and its job was to bring tea from China to ' +
        'London ahead of the other ships, because the first tea of the year sold for more. ' +
        'Its name means “short shirt” in Scots, from a poem about a witch who wore one, and ' +
        'the wooden figure on the bow is the witch herself, holding a horse’s tail. But ' +
        'steamships soon took over the tea, so Cutty Sark switched to wool from Australia, ' +
        'where it became the fastest ship on the route: in 1885 it sailed from Sydney to ' +
        'London in 73 days. It is the last tea clipper left in the world. In 2007, while it ' +
        'was being repaired, a fire burned through it, but most of its timbers had been ' +
        'taken out for conservation and survived. In 2012 it reopened, lifted three metres ' +
        'into the air, so that you walk underneath the hull and can touch it.',
    },
    facts: [
      {
        el: 'Ναυπηγήθηκε το 1869 στο Ντάμπαρτον της Σκωτίας.',
        en: 'It was built in 1869 at Dumbarton in Scotland.',
      },
      {
        el: 'Το 1885 ταξίδεψε από το Σίδνεϊ ως το Λονδίνο σε 73 μέρες.',
        en: 'In 1885 it sailed from Sydney to London in 73 days.',
      },
      {
        el: 'Από το 2012 στέκεται σηκωμένο τρία μέτρα πάνω από το έδαφος.',
        en: 'Since 2012 it has stood raised three metres above the ground.',
      },
    ],
    location: {
      lat: 51.48278,
      lng: -0.00972,
      anchor: 'centroid',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q171255', deltaM: 0 },
        { kind: 'osm', ref: 'way/25608663', deltaM: 14 },
        { kind: 'wikipedia', ref: 'Cutty Sark', deltaM: 0 },
      ],
      verifiedAt: '2026-09-12',
      map: { x: 0.892, y: 0.808 },
      // rmg.co.uk/cutty-sark/visit: the ship sits in its dry dock by the river at
      // Greenwich; the entrance is beside the bow, a minute from the DLR station.
      findIt: {
        el: 'Το καράβι είναι μέσα σε στεγνή δεξαμενή δίπλα στο ποτάμι· η είσοδος είναι δίπλα στην πλώρη, ένα λεπτό από τον σταθμό Cutty Sark.',
        en: 'The ship sits in a dry dock beside the river; the entrance is by the bow, a minute from Cutty Sark station.',
      },
    },
    question: {
      q: {
        el: 'Τι μετέφερε το Κάτι Σαρκ στα πρώτα του ταξίδια;',
        en: 'What did Cutty Sark carry on its first voyages?',
      },
      answers: [
        { el: 'Τσάι από την Κίνα', en: 'Tea from China' },
        { el: 'Χρυσό από την Αυστραλία', en: 'Gold from Australia' },
        { el: 'Μπαχαρικά από την Ινδία', en: 'Spices from India' },
        { el: 'Ξυλεία από τον Καναδά', en: 'Timber from Canada' },
      ],
      explanation: {
        el:
          'Τσάι, όσο πιο γρήγορα γινόταν. Όταν τα ατμόπλοια πήραν το τσάι, γύρισε στο ' +
          'μαλλί από την Αυστραλία και εκεί έγινε το πιο γρήγορο.',
        en:
          'Tea, as fast as possible. When steamships took the tea, it switched to wool from ' +
          'Australia, and that is where it became the fastest.',
      },
    },
  },

  // ----------------------------------------------------------- royal observatory
  {
    id: 'london-royal-observatory',
    cityId: 'london',
    emoji: '⏱️',
    category: 'science',
    difficulty: 2,

    name: { el: 'Βασιλικό Αστεροσκοπείο του Γκρίνουιτς', en: 'The Royal Observatory' },
    tagline: {
      el: 'Η γραμμή στο έδαφος από όπου μετράει ο κόσμος την ώρα του',
      en: 'The line on the ground the world measures its time from',
    },
    story: {
      el:
        'Στην κορυφή του λόφου του πάρκου του Γκρίνουιτς, ο βασιλιάς Κάρολος Β΄ έχτισε το ' +
        '1675 ένα μικρό αστεροσκοπείο με μια δουλειά: να λύσει ένα πρόβλημα που ' +
        'βούλιαζε καράβια. Οι ναυτικοί ήξεραν πόσο βόρεια ή νότια βρίσκονται από τα ' +
        'άστρα, αλλά όχι πόσο ανατολικά ή δυτικά, και για αυτό χρειάζονταν πολύ ακριβή ' +
        'ρολόγια και πολύ ακριβείς χάρτες του ουρανού. Οι αστρονόμοι εδώ μέτρησαν τα ' +
        'άστρα για διακόσια χρόνια, και το 1884 ο κόσμος συμφώνησε: η γραμμή που περνάει ' +
        'από το τηλεσκόπιο του Γκρίνουιτς είναι το μηδέν, ο Πρώτος Μεσημβρινός, από όπου ' +
        'μετράμε κάθε άλλο σημείο της Γης και από όπου ξεκινούν οι ζώνες ώρας. Σήμερα η ' +
        'γραμμή είναι χαραγμένη στην αυλή, και μπορείς να σταθείς με το ένα πόδι στο ' +
        'ανατολικό μισό του πλανήτη και το άλλο στο δυτικό. Στη στέγη υπάρχει μια μεγάλη ' +
        'κόκκινη μπάλα: από το 1833 ανεβαίνει σε έναν στύλο και πέφτει κάθε μέρα ακριβώς ' +
        'στη μία το μεσημέρι, ώστε τα καράβια στο ποτάμι να ρυθμίζουν τα ρολόγια τους. ' +
        'Πέφτει ακόμη, κάθε μέρα, κι ας μην την περιμένει πια κανένα καράβι.',
      en:
        'On top of the hill in Greenwich Park, King Charles II built a small observatory in ' +
        '1675 with one job: to solve a problem that was sinking ships. Sailors could tell ' +
        'from the stars how far north or south they were, but not how far east or west, ' +
        'and for that they needed very accurate clocks and very accurate maps of the sky. ' +
        'The astronomers here measured the stars for two hundred years, and in 1884 the ' +
        'world agreed: the line running through the Greenwich telescope is zero, the Prime ' +
        'Meridian, from which every other point on Earth is measured and where the time ' +
        'zones begin. Today the line is marked across the courtyard, and you can stand with ' +
        'one foot in the eastern half of the planet and the other in the western half. On ' +
        'the roof there is a big red ball: since 1833 it has climbed a pole and dropped ' +
        'every day at exactly one o’clock, so that ships on the river could set their ' +
        'clocks. It still drops, every day, even though no ship is waiting for it any more.',
    },
    facts: [
      {
        el: 'Ιδρύθηκε το 1675 από τον βασιλιά Κάρολο Β΄.',
        en: 'It was founded in 1675 by King Charles II.',
      },
      {
        el: 'Ο Πρώτος Μεσημβρινός, το μηδέν του κόσμου, περνάει από εδώ από το 1884.',
        en: 'The Prime Meridian, the world’s zero line, has run through here since 1884.',
      },
      {
        el: 'Η κόκκινη μπάλα της ώρας πέφτει κάθε μέρα στη 1 το μεσημέρι από το 1833.',
        en: 'The red time ball has dropped at 1 pm every day since 1833.',
      },
    ],
    location: {
      lat: 51.47781,
      lng: -0.00147,
      anchor: 'viewpoint',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q131108', deltaM: 0 },
        { kind: 'osm', ref: 'node/1901784364', deltaM: 239310 },
        { kind: 'wikipedia', ref: 'Prime meridian (Greenwich)', deltaM: 0 },
      ],
      verifiedAt: '2026-09-12',
      note: 'Q131108 is the Greenwich meridian itself; its point is the brass line in the observatory courtyard. The OSM object carrying the tag is the whole meridian, hundreds of kilometres long, so its centre is meaningless and is recorded only as a warning. Wikidata and Wikipedia agree to the metre.',
      map: { x: 0.933, y: 0.873 },
      // rmg.co.uk/royal-observatory/visit: the observatory is at the top of the hill
      // in Greenwich Park; the entrance is the courtyard gate under the red time ball.
      findIt: {
        el: 'Ανέβα τον λόφο μέσα από το πάρκο του Γκρίνουιτς· η είσοδος είναι η πύλη της αυλής, κάτω από την κόκκινη μπάλα στη στέγη.',
        en: 'Climb the hill through Greenwich Park; the entrance is the courtyard gate, under the red ball on the roof.',
      },
    },
    question: {
      q: {
        el: 'Τι κάνει η κόκκινη μπάλα στη στέγη κάθε μέρα στη μία το μεσημέρι;',
        en: 'What does the red ball on the roof do every day at one o’clock?',
      },
      answers: [
        { el: 'Πέφτει', en: 'It drops' },
        { el: 'Ανάβει', en: 'It lights up' },
        { el: 'Γυρίζει', en: 'It spins' },
        { el: 'Σφυρίζει', en: 'It whistles' },
      ],
      explanation: {
        el:
          'Ανεβαίνει λίγο πριν τη μία και πέφτει ακριβώς στη μία, από το 1833. Τα καράβια ' +
          'στο ποτάμι την έβλεπαν και έβαζαν τα ρολόγια τους στην ώρα.',
        en:
          'It climbs just before one and drops at exactly one, and has done since 1833. Ships ' +
          'on the river watched it and set their clocks.',
      },
    },
  },
];

export const trails: Trail[] = [
  {
    id: 'london-first-time',
    cityId: 'london',
    emoji: '👑',
    name: { el: 'Πρώτη φορά στο Λονδίνο', en: 'First time in London' },
    promise: {
      el: 'Ένα παλάτι, μια στέψη, μια καμπάνα, μια ρόδα και τέσσερα λιοντάρια, όλα με τα πόδια.',
      en: 'A palace, a coronation, a bell, a wheel and four lions, all on foot.',
    },
    placeIds: [
      'london-buckingham-palace',
      'london-westminster-abbey',
      'london-big-ben',
      'london-london-eye',
      'london-trafalgar-square',
    ],
  },
  {
    id: 'london-two-hours-by-the-river',
    cityId: 'london',
    emoji: '🌉',
    name: { el: 'Δύο ώρες στο ποτάμι', en: 'Two hours by the river' },
    promise: {
      el: 'Ένα κάστρο, μια γέφυρα που ανοίγει, μια κολόνα με 311 σκαλιά και κάτι να φας στο τέλος.',
      en: 'A castle, a bridge that opens, a column with 311 steps and something to eat at the end.',
    },
    placeIds: [
      'london-tower-of-london',
      'london-tower-bridge',
      'london-monument',
      'london-borough-market',
    ],
  },
  {
    id: 'london-rainy-day',
    cityId: 'london',
    emoji: '☔',
    name: { el: 'Μέρα βροχής', en: 'A rainy day' },
    promise: {
      el: 'Τρία μουσεία, όλα δωρεάν, όλα στεγνά: μια μαύρη πέτρα, μια φάλαινα και μια κάψουλα από τη Σελήνη.',
      en: 'Three museums, all free, all dry: a black stone, a whale and a capsule back from the Moon.',
    },
    placeIds: [
      'london-british-museum',
      'london-natural-history-museum',
      'london-science-museum',
    ],
  },
  {
    id: 'london-day-for-playing',
    cityId: 'london',
    emoji: '🎭',
    name: { el: 'Μια μέρα για παιχνίδι', en: 'A day for playing' },
    promise: {
      el: 'Ζογκλέρ σε μια πλατεία, πιγκουίνοι σε ένα πάρκο, ένα καράβι να περάσεις από κάτω και μια γραμμή να πατήσεις.',
      en: 'Jugglers in a square, penguins in a park, a ship to walk under and a line to stand on.',
    },
    placeIds: [
      'london-covent-garden',
      'london-london-zoo',
      'london-cutty-sark',
      'london-royal-observatory',
    ],
  },
];
