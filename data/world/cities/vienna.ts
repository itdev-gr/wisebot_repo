/**
 * WiseBot World — Vienna.
 *
 * Thirteen places, two of them museums with an interior. Written for a six- to
 * twelve-year-old, which is a constraint on the writing and not on the truth.
 *
 * Every coordinate in this file is copied from `data/world/coords/vienna.json`, which
 * `scripts/world/resolve-coords.mjs` produced from Wikidata and cross-checked against
 * OpenStreetMap and Wikipedia. Nothing here was typed by hand. No place graded `D`;
 * two graded A, nine B, two C. No entrance is claimed anywhere, because no door in
 * this city has been measured: every anchor is the centroid or area it really is.
 *
 * The museum interiors name objects that are genuinely on display. Checked on
 * 12 September 2026 against nhm.at (Hall 4 gemstones and the 117 kg topaz, Hall 5
 * meteorites with Knyahinya, Hall 10 with Dippy the Diplodocus carnegii cast, the
 * animatronic Allosaurus and the Iguanodon, Hall 11 with the two Venus figures) and
 * against the Kunsthistorisches Museum's own pages and the English Wikipedia articles
 * "Kunsthistorisches Museum", "Cellini Salt Cellar" and "Paintings in the staircase of
 * the Kunsthistorisches Museum".
 *
 * `el` and `en` are complete. `de`, `fr`, `es` and `it` land in the second pass.
 */

import type { Place, Trail } from '../types';

export const places: Place[] = [
  // ------------------------------------------------------------------ cathedral
  {
    id: 'vienna-stephansdom',
    cityId: 'vienna',
    emoji: '⛪',
    category: 'landmark',
    difficulty: 2,

    name: { el: 'Καθεδρικός του Αγίου Στεφάνου', en: 'St Stephen’s Cathedral' },
    tagline: {
      el: 'Ένας πύργος τελείωσε, ο άλλος έμεινε μισός για πάντα',
      en: 'One tower was finished, the other stayed half-built forever',
    },
    story: {
      el:
        'Ο Άγιος Στέφανος στέκεται στη μέση της Βιέννης εδώ και οκτακόσια χρόνια, και έχει ' +
        'δύο πύργους που δεν μοιάζουν καθόλου. Ο νότιος, που οι Βιεννέζοι τον φωνάζουν ' +
        'Στέφλ, φτάνει τα 136,4 μέτρα και χρειάστηκε εξήντα πέντε χρόνια δουλειάς, από το ' +
        '1368 ως το 1433. Ο βόρειος σταμάτησε στα 68 μέτρα. Τα χρήματα τελείωσαν, οι ' +
        'μάστορες πήγαν αλλού, και κάποια στιγμή του φόρεσαν ένα καπάκι σαν σκουφί και τον ' +
        'άφησαν έτσι. Η στέγη είναι το άλλο θαύμα: περίπου 230.000 γυαλισμένα κεραμίδια ' +
        'σχηματίζουν πάνω της έναν δικέφαλο αετό, και είναι τόσο απότομη που η βροχή την ' +
        'πλένει μόνη της. Το 1945 ο ναός πήρε φωτιά. Η στέγη έπεσε μέσα, και μαζί της έπεσε ' +
        'και η Πούμεριν, η τεράστια καμπάνα. Ολόκληρη η Αυστρία έστειλε χρήματα για να ' +
        'ξαναχτιστεί. Η νέα Πούμεριν χύθηκε το 1951 από το μέταλλο της παλιάς, ζυγίζει πάνω ' +
        'από είκοσι ένα τόνους, και ανέβηκε στον μισοτελειωμένο βόρειο πύργο το 1957.',
      en:
        'St Stephen’s has stood in the middle of Vienna for eight hundred years, and it has ' +
        'two towers that look nothing alike. The south one, which the Viennese call the ' +
        'Steffl, reaches 136.4 metres and took sixty-five years to build, from 1368 to 1433. ' +
        'The north one stopped at 68 metres. The money ran out, the masons went elsewhere, ' +
        'and eventually somebody put a cap on it like a woolly hat and left it that way. The ' +
        'roof is the other marvel: about 230,000 glazed tiles make a double-headed eagle ' +
        'across it, and it is so steep that rain washes it clean by itself. In 1945 the ' +
        'cathedral caught fire. The roof fell in and took the Pummerin, the enormous bell, ' +
        'down with it. The whole of Austria sent money to rebuild. The new Pummerin was cast ' +
        'in 1951 from the metal of the old one, weighs more than twenty-one tonnes, and was ' +
        'lifted into the unfinished north tower in 1957.',
    },
    facts: [
      {
        el: 'Ο νότιος πύργος έχει ύψος 136,4 μέτρα και χτίστηκε από το 1368 ως το 1433.',
        en: 'The south tower is 136.4 metres tall and was built between 1368 and 1433.',
      },
      {
        el: 'Η στέγη του είναι στρωμένη με περίπου 230.000 γυαλισμένα κεραμίδια.',
        en: 'Its roof is covered with about 230,000 glazed tiles.',
      },
      {
        el: 'Η καμπάνα Πούμεριν ζυγίζει πάνω από 21 τόνους και χτυπάει κάθε Πρωτοχρονιά.',
        en: 'The Pummerin bell weighs more than 21 tonnes and rings in every New Year.',
      },
    ],
    location: {
      lat: 48.20843,
      lng: 16.37326,
      anchor: 'centroid',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q5943', deltaM: 0 },
        { kind: 'osm', ref: 'way/212496461', deltaM: 10 },
        { kind: 'wikipedia', ref: "St. Stephen's Cathedral, Vienna", deltaM: 21 },
      ],
      verifiedAt: '2026-09-12',
      findIt: {
        el: 'Η κεντρική πόρτα βλέπει δυτικά, προς την πλατεία Στεφανσπλατς.',
        en: 'The main door faces west, onto Stephansplatz.',
      },
    },
    question: {
      q: {
        el: 'Γιατί ο ένας πύργος του ναού είναι πολύ πιο κοντός από τον άλλο;',
        en: 'Why is one of the cathedral’s towers much shorter than the other?',
      },
      answers: [
        { el: 'Δεν τον τελείωσαν ποτέ', en: 'It was never finished' },
        {
          el: 'Τον κόντυναν για να μη ρίχνει σκιά στην πλατεία',
          en: 'It was shortened so it would not shade the square',
        },
        {
          el: 'Έπεσε σε σεισμό και τον ξανάχτισαν χαμηλότερο',
          en: 'An earthquake felled it and it was rebuilt lower',
        },
        {
          el: 'Χτίστηκε κοντός επίτηδες, για να κρεμάσουν εκεί την καμπάνα',
          en: 'It was built short on purpose, to hang the bell in',
        },
      ],
      explanation: {
        el:
          'Τα χρήματα τελείωσαν και οι μάστορες έφυγαν. Ο βόρειος πύργος έμεινε στα 68 μέτρα ' +
          'και αντί για μυτερή κορυφή του φόρεσαν ένα καπάκι.',
        en:
          'The money ran out and the masons left. The north tower stopped at 68 metres and ' +
          'was given a cap instead of a spire.',
      },
    },
  },

  // ----------------------------------------------------------------- anker clock
  {
    id: 'vienna-anker-clock',
    cityId: 'vienna',
    emoji: '🕰️',
    category: 'art',
    difficulty: 1,

    name: { el: 'Το Ρολόι Άνκερ', en: 'The Anker Clock' },
    tagline: {
      el: 'Δώδεκα μορφές περνούν τη γέφυρα, μία κάθε ώρα',
      en: 'Twelve figures cross the bridge, one every hour',
    },
    story: {
      el:
        'Στην πλατεία Χόχερ Μαρκτ, δύο κτίρια μιας ασφαλιστικής εταιρείας ενώνονται με μια ' +
        'γέφυρα, και μέσα σε αυτή τη γέφυρα ζει ένα ρολόι. Το σχεδίασε ο ζωγράφος Φραντς ' +
        'φον Ματς και το έφτιαξαν από το 1911 ως το 1914. Δεν έχει δείκτες. Αντί για ' +
        'δείκτες έχει δώδεκα χάλκινες μορφές, ύψους σχεδόν τριών μέτρων, που περνούν αργά ' +
        'από τη μία άκρη στην άλλη. Κάθε μορφή κάνει μία ολόκληρη ώρα για να διασχίσει τη ' +
        'γέφυρα, και για να δεις τι ώρα είναι κοιτάς πού έχει φτάσει. Οι μορφές δεν είναι ' +
        'φανταστικές. Είναι άνθρωποι που έζησαν αληθινά στη Βιέννη, ο ένας μετά τον άλλο ' +
        'μέσα σε δεκαοκτώ αιώνες: ένας Ρωμαίος αυτοκράτορας, ένας ποιητής, μια αυτοκράτειρα, ' +
        'ένας συνθέτης. Στις δώδεκα το μεσημέρι το ρολόι κάνει το κόλπο του: βγαίνουν και οι ' +
        'δώδεκα, η μία πίσω από την άλλη, με μουσική. Κάτω από την πλατεία σώζονται ακόμα ' +
        'ερείπια του ρωμαϊκού οικισμού Βίντομπονα.',
      en:
        'On Hoher Markt square, two buildings of an insurance company are joined by a bridge, ' +
        'and inside that bridge lives a clock. The painter Franz von Matsch designed it and ' +
        'it was built between 1911 and 1914. It has no hands. Instead it has twelve copper ' +
        'figures, nearly three metres tall, that move slowly from one side to the other. Each ' +
        'figure takes a whole hour to cross the bridge, and to tell the time you look at how ' +
        'far it has got. The figures are not made up. They are people who really lived in ' +
        'Vienna, one after another across eighteen centuries: a Roman emperor, a poet, an ' +
        'empress, a composer. At twelve noon the clock does its trick: all twelve come out, ' +
        'one behind the other, with music playing. Underneath the square, ruins of the Roman ' +
        'settlement of Vindobona are still there.',
    },
    facts: [
      {
        el: 'Φτιάχτηκε από το 1911 ως το 1914 από τον ζωγράφο Φραντς φον Ματς.',
        en: 'It was built between 1911 and 1914 by the painter Franz von Matsch.',
      },
      {
        el: 'Οι δώδεκα χάλκινες μορφές έχουν ύψος σχεδόν τρία μέτρα η καθεμία.',
        en: 'The twelve copper figures are each nearly three metres tall.',
      },
      {
        el: 'Στις δώδεκα το μεσημέρι περνούν και οι δώδεκα μαζί, με μουσική.',
        en: 'At twelve noon all twelve of them parade past together, with music.',
      },
    ],
    location: {
      lat: 48.2108,
      lng: 16.3737,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q557226', deltaM: 0 },
        { kind: 'osm', ref: 'way/129241327', deltaM: 5 },
      ],
      verifiedAt: '2026-09-12',
      findIt: {
        el: 'Ψάξε ψηλά, στη γέφυρα που ενώνει δύο κτίρια πάνω από ένα στενό.',
        en: 'Look up, at the bridge joining two buildings across a lane.',
      },
    },
    question: {
      q: {
        el: 'Πώς δείχνει την ώρα το ρολόι Άνκερ, αφού δεν έχει δείκτες;',
        en: 'How does the Anker Clock tell the time, if it has no hands?',
      },
      answers: [
        { el: 'Μια μορφή περνάει τη γέφυρα σε μία ώρα', en: 'A figure crosses the bridge in one hour' },
        {
          el: 'Χτυπάει μια καμπάνα τόσες φορές όσες και η ώρα',
          en: 'A bell rings as many times as the hour',
        },
        {
          el: 'Αλλάζει χρώμα κάθε εξήντα λεπτά, από γαλάζιο σε χρυσό',
          en: 'It changes colour every sixty minutes, from blue to gold',
        },
        {
          el: 'Ανοίγει ένα παραθυράκι με νούμερα, όπως τα ψηφιακά ρολόγια',
          en: 'A little window opens with numbers in it, like a digital clock',
        },
      ],
      explanation: {
        el: 'Η μορφή είναι ο δείκτης. Όταν φτάσει στο σημάδι, η ώρα άλλαξε.',
        en: 'The figure is the hand. When it reaches the mark, the hour has changed.',
      },
    },
  },

  // -------------------------------------------------------------------- hofburg
  {
    id: 'vienna-hofburg',
    cityId: 'vienna',
    emoji: '👑',
    category: 'history',
    difficulty: 3,

    name: { el: 'Το Χόφμπουργκ', en: 'The Hofburg' },
    tagline: {
      el: 'Ένα παλάτι που μεγάλωνε επί εξακόσια χρόνια',
      en: 'A palace that kept growing for six hundred years',
    },
    story: {
      el:
        'Το Χόφμπουργκ δεν είναι ένα κτίριο. Είναι πολλά κτίρια που μεγάλωσαν το ένα πάνω ' +
        'στο άλλο για εξακόσια χρόνια. Ξεκίνησε τον 13ο αιώνα σαν κάστρο του Ροδόλφου Α΄ ' +
        'των Αψβούργων, και το παλιότερο κομμάτι που σώζεται, η πτέρυγα των Ελβετών, είναι ' +
        'ακόμα εκεί. Μετά, κάθε ηγεμόνας που ερχόταν δεν γκρέμιζε: πρόσθετε. Μια πτέρυγα ' +
        'εδώ, μια αυλή εκεί, ένας θόλος παραπέρα. Γι’ αυτό, αν το γυρίσεις όλο, νομίζεις ότι ' +
        'αλλάζεις πόλη τέσσερις φορές. Οι Αψβούργοι έφυγαν το 1918, αλλά το παλάτι δεν ' +
        'άδειασε. Σήμερα εκεί δουλεύει ο Πρόεδρος της Αυστρίας. Μέσα του βρίσκεται επίσης η ' +
        'Ισπανική Σχολή Ιππασίας, όπου τα λευκά άλογα Λιπιτσάνερ προπονούνται από τον 16ο ' +
        'αιώνα, και το αυτοκρατορικό θησαυροφυλάκιο. Εκεί φυλάγεται ένα στέμμα πάνω από ' +
        'χίλια χρόνια παλιό, και δίπλα του ένα μακρύ, στριφτό κέρατο που οι αυτοκράτορες ' +
        'πίστευαν ότι ανήκε σε μονόκερο. Είναι δόντι νάρβαλου, μιας φάλαινας του Βορρά.',
      en:
        'The Hofburg is not one building. It is many buildings that grew into each other over ' +
        'six hundred years. It began in the 13th century as a castle for Rudolf I of ' +
        'Habsburg, and the oldest surviving piece, the Swiss Wing, is still there. After ' +
        'that, each ruler who arrived knocked nothing down: they added. A wing here, a ' +
        'courtyard there, a dome further along. That is why walking round the whole thing ' +
        'feels like changing city four times. The Habsburgs left in 1918, but the palace did ' +
        'not empty. The President of Austria works here now. Inside it there is also the ' +
        'Spanish Riding School, where the white Lipizzaner horses have trained since the 16th ' +
        'century, and the imperial treasury. That holds a crown more than a thousand years ' +
        'old, and beside it a long twisted horn that emperors believed had come from a ' +
        'unicorn. It is the tooth of a narwhal, a whale of the far north.',
    },
    facts: [
      {
        el: 'Το παλιότερο κομμάτι του, η πτέρυγα των Ελβετών, είναι του 13ου και 14ου αιώνα.',
        en: 'Its oldest part, the Swiss Wing, dates from the 13th and 14th centuries.',
      },
      {
        el: 'Ήταν το σπίτι των Αψβούργων ως το 1918. Σήμερα εκεί δουλεύει ο Πρόεδρος της Αυστρίας.',
        en: 'It was the Habsburgs’ home until 1918. The President of Austria works there today.',
      },
      {
        el: 'Τα λευκά άλογα Λιπιτσάνερ προπονούνται μέσα στο παλάτι από τον 16ο αιώνα.',
        en: 'The white Lipizzaner horses have trained inside the palace since the 16th century.',
      },
    ],
    location: {
      lat: 48.20639,
      lng: 16.36528,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q46242', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Hofburg', deltaM: 0 },
      ],
      verifiedAt: '2026-09-12',
      note: 'The stored point is the centre of the whole complex, which is nineteen courtyards wide; no single door is claimed.',
      findIt: {
        el: 'Ο πιο εύκολος δρόμος μέσα είναι από τον θολωτό τρούλο στην πλατεία Μιχαέλερπλατς.',
        en: 'The easiest way in is under the domed gate on Michaelerplatz.',
      },
    },
    question: {
      q: {
        el: 'Γιατί το Χόφμπουργκ μοιάζει με πολλά διαφορετικά κτίρια κολλημένα μαζί;',
        en: 'Why does the Hofburg look like several different buildings stuck together?',
      },
      answers: [
        { el: 'Κάθε ηγεμόνας πρόσθετε μια νέα πτέρυγα', en: 'Each ruler added a new wing' },
        {
          el: 'Το αγόρασαν κομμάτι κομμάτι από δώδεκα διαφορετικές οικογένειες',
          en: 'It was bought piece by piece from twelve different families',
        },
        {
          el: 'Το μετέφεραν πέτρα πέτρα από τρεις άλλες πόλεις',
          en: 'It was moved here stone by stone from three other cities',
        },
        {
          el: 'Χτίστηκε όλο μαζί, αλλά κάθε συνεργείο δούλευε αλλιώς',
          en: 'It all went up at once, but each crew worked differently',
        },
      ],
      explanation: {
        el:
          'Κανείς δεν γκρέμισε τη δουλειά του προηγούμενου. Έτσι το παλάτι κρατάει έξι αιώνες ' +
          'μόδας, τον έναν δίπλα στον άλλο.',
        en:
          'Nobody pulled down what came before. So the palace keeps six centuries of fashion ' +
          'standing side by side.',
      },
    },
  },

  // ------------------------------------------------------------------ state opera
  {
    id: 'vienna-staatsoper',
    cityId: 'vienna',
    emoji: '🎭',
    category: 'art',
    difficulty: 2,

    name: { el: 'Η Κρατική Όπερα', en: 'The State Opera' },
    tagline: {
      el: 'Σχεδόν κάθε βράδυ παίζεται εδώ κάτι άλλο',
      en: 'Almost every night, something different is on',
    },
    story: {
      el:
        'Η Όπερα άνοιξε στις 25 Μαΐου 1869 με τον Ντον Τζιοβάνι του Μότσαρτ. Οι Βιεννέζοι ' +
        'όμως δεν την αγάπησαν αμέσως. Έλεγαν ότι μοιάζει με σιδηροδρομικό σταθμό και ότι ' +
        'κάθεται στον δρόμο σαν κουτί που βούλιαξε. Η κοροϊδία ήταν σκληρή, και κανένας από ' +
        'τους δύο αρχιτέκτονες δεν πρόλαβε να δει την πρεμιέρα. Τον Μάρτιο του 1945 βόμβες ' +
        'κατέστρεψαν την αίθουσα και εκατόν πενήντα χιλιάδες κοστούμια. Έμειναν όρθια μόνο η ' +
        'πρόσοψη, η μεγάλη σκάλα και ένα φουαγιέ. Η πόλη την ξανάχτισε και την άνοιξε στις 5 ' +
        'Νοεμβρίου 1955 με τον Φιντέλιο του Μπετόβεν. Σήμερα η Όπερα δίνει πάνω από ' +
        'διακόσιες παραστάσεις τον χρόνο, και σχεδόν κάθε βράδυ παίζει κάτι διαφορετικό. ' +
        'Αυτό σημαίνει ότι μόλις πέσει η αυλαία, συνεργεία δουλεύουν όλη τη νύχτα: κατεβάζουν ' +
        'ένα ολόκληρο σκηνικό και ανεβάζουν άλλο, για να είναι έτοιμο ως το πρωί. Μία φορά ' +
        'τον χρόνο ανεβαίνει και το πάτωμα της πλατείας ως το ύψος της σκηνής, και η Όπερα ' +
        'γίνεται αίθουσα χορού.',
      en:
        'The Opera opened on 25 May 1869 with Mozart’s Don Giovanni. The Viennese did not ' +
        'love it straight away. They said it looked like a railway station and sat in the ' +
        'street like a box that had sunk. The mockery was cruel, and neither of the two ' +
        'architects lived to see the first night. In March 1945 bombs destroyed the ' +
        'auditorium and a hundred and fifty thousand costumes. Only the front, the grand ' +
        'staircase and one foyer were left standing. The city rebuilt it and opened it again ' +
        'on 5 November 1955 with Beethoven’s Fidelio. Today the Opera gives more than two ' +
        'hundred performances a year, and almost every night it plays something different. ' +
        'That means that the moment the curtain falls, crews work through the night: one ' +
        'whole set comes down and another goes up, ready by morning. Once a year the floor of ' +
        'the stalls is raised to the height of the stage, and the Opera turns into a ballroom.',
    },
    facts: [
      {
        el: 'Άνοιξε στις 25 Μαΐου 1869 με τον Ντον Τζιοβάνι του Μότσαρτ.',
        en: 'It opened on 25 May 1869 with Mozart’s Don Giovanni.',
      },
      {
        el: 'Καταστράφηκε από βόμβες το 1945 και ξανάνοιξε το 1955 με τον Φιντέλιο του Μπετόβεν.',
        en: 'Bombs destroyed it in 1945; it reopened in 1955 with Beethoven’s Fidelio.',
      },
      {
        el: 'Δίνει πάνω από διακόσιες παραστάσεις τον χρόνο, με πρόγραμμα που αλλάζει σχεδόν καθημερινά.',
        en: 'It gives more than two hundred performances a year, with the programme changing almost daily.',
      },
    ],
    location: {
      lat: 48.20333,
      lng: 16.36917,
      anchor: 'centroid',
      confidence: 'C',
      sources: [{ kind: 'wikidata', ref: 'Q209937', deltaM: 0 }],
      verifiedAt: '2026-09-12',
      note: 'Only one source answered on this pass; OpenStreetMap and Wikipedia both failed, so the grade is C rather than a disagreement.',
    },
    question: {
      q: {
        el: 'Γιατί δουλεύουν συνεργεία μέσα στην Όπερα όλη τη νύχτα;',
        en: 'Why do crews work inside the Opera all night?',
      },
      answers: [
        { el: 'Γιατί το επόμενο βράδυ παίζεται άλλο έργο', en: 'Because a different piece is on the next night' },
        {
          el: 'Γιατί οι τραγουδιστές προτιμούν να προβάρουν στο σκοτάδι',
          en: 'Because the singers prefer to rehearse in the dark',
        },
        {
          el: 'Γιατί τα φώτα της σκηνής ανάβουν μόνο μετά τα μεσάνυχτα',
          en: 'Because the stage lights only come on after midnight',
        },
        {
          el: 'Γιατί καθαρίζουν ένα ένα με το χέρι όλα τα καθίσματα',
          en: 'Because every single seat is cleaned by hand',
        },
      ],
      explanation: {
        el:
          'Το ένα σκηνικό φεύγει και το άλλο μπαίνει μέσα σε λίγες ώρες. Χωρίς αυτή τη ' +
          'νυχτερινή δουλειά το πρόγραμμα δεν θα μπορούσε να αλλάζει κάθε μέρα.',
        en:
          'One set goes out and the next comes in within a few hours. Without that night ' +
          'shift the programme could not change every day.',
      },
    },
  },
  // ---------------------------------------------------------------- karlskirche
  {
    id: 'vienna-karlskirche',
    cityId: 'vienna',
    emoji: '🏛️',
    category: 'landmark',
    difficulty: 3,

    name: { el: 'Η Καρλσκίρχε', en: 'The Karlskirche' },
    tagline: {
      el: 'Μια εκκλησία με δύο ρωμαϊκές κολόνες μπροστά της',
      en: 'A church with two Roman columns standing in front',
    },
    story: {
      el:
        'Το 1713 μια αρρώστια σάρωσε τη Βιέννη. Ο αυτοκράτορας Κάρολος Στ΄ υποσχέθηκε τότε ' +
        'δημόσια ότι, αν σταματήσει, θα χτίσει μια εκκλησία. Σταμάτησε, και ο θεμέλιος λίθος ' +
        'μπήκε το 1716. Τον διαγωνισμό τον κέρδισε ο Γιόχαν Μπέρναρντ Φίσερ φον Έρλαχ, που ' +
        'πέθανε πριν τελειώσει το έργο· το ολοκλήρωσε ο γιος του το 1737. Η πρόσοψη είναι το ' +
        'πιο περίεργο κομμάτι. Στη μέση υπάρχει ένα ελληνικό πρόπυλο με κολόνες και αέτωμα. ' +
        'Από πίσω σηκώνεται ένας τεράστιος τρούλος, περίπου εβδομήντα μέτρα ψηλός, ρωμαϊκής ' +
        'ιδέας. Και δεξιά κι αριστερά στέκονται δύο πελώριες κολόνες, σαράντα μέτρων, ' +
        'τυλιγμένες σε μια λωρίδα από σκαλισμένες εικόνες που ανεβαίνει σπειροειδώς. Αυτές ' +
        'οι δύο αντιγράφουν μια ιδέα από τη Ρώμη, τη στήλη του Τραϊανού. Ο αρχιτέκτονας ' +
        'πήρε τρία διαφορετικά κτίρια από τρεις εποχές και τα ένωσε σε ένα. Μπροστά της ' +
        'υπάρχει μια ρηχή λίμνη, και μέσα της η εκκλησία στέκεται ανάποδα.',
      en:
        'In 1713 a sickness swept through Vienna. Emperor Charles VI promised in public that ' +
        'if it stopped he would build a church. It stopped, and the foundation stone was laid ' +
        'in 1716. The competition was won by Johann Bernhard Fischer von Erlach, who died ' +
        'before the work was done; his son finished it in 1737. The front is the strangest ' +
        'part. In the middle there is a Greek porch with columns and a triangle above them. ' +
        'Behind it rises an enormous dome about seventy metres high, a Roman idea. And to the ' +
        'left and right stand two huge columns, forty metres tall, wrapped in a strip of ' +
        'carved pictures that climbs round them in a spiral. Those two copy an idea from ' +
        'Rome, Trajan’s Column. The architect took three different buildings from three ' +
        'different ages and joined them into one. In front there is a shallow pool, and in it ' +
        'the church stands upside down.',
    },
    facts: [
      {
        el: 'Υποσχέθηκε το 1713 μετά από επιδημία και τελείωσε το 1737.',
        en: 'It was promised in 1713 after an epidemic and finished in 1737.',
      },
      {
        el: 'Ο τρούλος της φτάνει περίπου τα 70 μέτρα.',
        en: 'Its dome rises about 70 metres.',
      },
      {
        el: 'Οι δύο κολόνες της αντιγράφουν τη στήλη του Τραϊανού στη Ρώμη.',
        en: 'Its two columns copy Trajan’s Column in Rome.',
      },
    ],
    location: {
      lat: 48.19828,
      lng: 16.37188,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q408847', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Karlskirche', deltaM: 1 },
      ],
      verifiedAt: '2026-09-12',
      findIt: {
        el: 'Στάσου στην άκρη της ρηχής λίμνης: η πόρτα είναι ακριβώς απέναντι.',
        en: 'Stand at the edge of the shallow pool: the door is straight ahead.',
      },
    },
    question: {
      q: {
        el: 'Από πού πήρε ο αρχιτέκτονας την ιδέα για τις δύο σπειροειδείς κολόνες;',
        en: 'Where did the architect get the idea for the two spiral columns?',
      },
      answers: [
        { el: 'Από τη στήλη του Τραϊανού στη Ρώμη', en: 'From Trajan’s Column in Rome' },
        {
          el: 'Από τους μιναρέδες που είχε δει σε ταξίδι στην Ανατολή',
          en: 'From minarets he had seen on a journey east',
        },
        {
          el: 'Από τα κατάρτια των πλοίων στο λιμάνι της Βενετίας',
          en: 'From the masts of the ships in the harbour of Venice',
        },
        {
          el: 'Από τα δέντρα του αυτοκρατορικού κήπου, που ήταν στριφτά',
          en: 'From the trees in the imperial garden, which grew twisted',
        },
      ],
      explanation: {
        el:
          'Η στήλη του Τραϊανού αφηγείται μια ιστορία σε μια λωρίδα που ανεβαίνει γύρω γύρω. ' +
          'Εδώ η λωρίδα αφηγείται τη ζωή του αγίου.',
        en:
          'Trajan’s Column tells a story on a strip that winds upwards. Here the strip tells ' +
          'the life of the saint.',
      },
    },
  },

  // -------------------------------------------------------------------- rathaus
  {
    id: 'vienna-rathaus',
    cityId: 'vienna',
    emoji: '🏰',
    category: 'landmark',
    difficulty: 2,

    name: { el: 'Το Δημαρχείο', en: 'The City Hall' },
    tagline: {
      el: 'Ο πύργος έμεινε στα 98 μέτρα, και μετά ανέβηκε ένας ιππότης',
      en: 'The tower stopped at 98 metres, then a knight climbed on',
    },
    story: {
      el:
        'Το δημαρχείο της Βιέννης χτίστηκε από το 1872 ως το 1883, με σχέδια του Φρίντριχ ' +
        'φον Σμιντ. Το παράξενο είναι το στιλ: είναι γοτθικό, με μυτερά τόξα και καμπαναριά, ' +
        'τετρακόσια χρόνια αφότου είχε τελειώσει η γοτθική εποχή. Ο 19ος αιώνας λάτρευε να ' +
        'ντύνει τα καινούρια κτίρια με παλιά ρούχα. Υπήρχε όμως ένας κανόνας: ο πύργος δεν ' +
        'επιτρεπόταν να ξεπεράσει τον πύργο της Φοτίφκιρχε, που έχει ενενήντα εννιά μέτρα. Ο ' +
        'Σμιντ τον σταμάτησε στα ενενήντα οκτώ, ακριβώς όπως του ζήτησαν. Και μετά έβαλε ' +
        'στην κορυφή έναν σιδερένιο ιππότη με σημαία, που ανέβηκε εκεί πάνω με βίντσια στις ' +
        '21 Οκτωβρίου 1882. Με τον ιππότη, το κτίριο φτάνει τα 103,3 μέτρα. Οι Βιεννέζοι τον ' +
        'λένε Ράτχαουσμαν, τον άντρα του δημαρχείου. Η πλατεία μπροστά αλλάζει δουλειά με ' +
        'τις εποχές: τον χειμώνα γίνεται τεράστιο παγοδρόμιο και το καλοκαίρι υπαίθριος ' +
        'κινηματογράφος.',
      en:
        'Vienna’s city hall was built between 1872 and 1883 to plans by Friedrich von Schmidt. ' +
        'The odd thing is the style: it is Gothic, with pointed arches and spires, four ' +
        'hundred years after the Gothic age ended. The 19th century loved dressing new ' +
        'buildings in old clothes. There was one rule, though: the tower was not allowed to ' +
        'rise above the tower of the Votivkirche, which is ninety-nine metres. Schmidt stopped ' +
        'it at ninety-eight, exactly as he had been asked. And then he put an iron knight with ' +
        'a banner on the very tip, winched up there on 21 October 1882. With the knight, the ' +
        'building reaches 103.3 metres. The Viennese call him the Rathausmann, the city hall ' +
        'man. The square in front changes job with the seasons: in winter it becomes an ' +
        'enormous ice rink and in summer an open-air cinema.',
    },
    facts: [
      {
        el: 'Χτίστηκε από το 1872 ως το 1883 σε γοτθικό στιλ, πολύ μετά τη γοτθική εποχή.',
        en: 'It was built from 1872 to 1883 in a Gothic style, long after the Gothic age.',
      },
      {
        el: 'Ο πύργος έχει 98 μέτρα, και με τον σιδερένιο ιππότη φτάνει τα 103,3.',
        en: 'The tower is 98 metres; with the iron knight on top it reaches 103.3.',
      },
      {
        el: 'Ο ιππότης ανέβηκε στην κορυφή στις 21 Οκτωβρίου 1882.',
        en: 'The knight was hoisted to the top on 21 October 1882.',
      },
    ],
    location: {
      lat: 48.2108,
      lng: 16.3574,
      anchor: 'centroid',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q686468', deltaM: 0 },
        { kind: 'osm', ref: 'relation/11101', deltaM: 8 },
        { kind: 'wikipedia', ref: 'Vienna City Hall', deltaM: 14 },
      ],
      verifiedAt: '2026-09-12',
    },
    question: {
      q: {
        el: 'Πώς κατάφερε ο αρχιτέκτονας να ξεπεράσει το όριο ύψους;',
        en: 'How did the architect get past the height limit?',
      },
      answers: [
        { el: 'Έβαλε έναν σιδερένιο ιππότη πάνω από τον πύργο', en: 'He put an iron knight above the tower' },
        {
          el: 'Έσκαψε τη βάση του κτιρίου δύο μέτρα πιο βαθιά',
          en: 'He dug the base of the building two metres deeper',
        },
        {
          el: 'Έχτισε τον πύργο σε λόφο λίγο ψηλότερο από την πλατεία',
          en: 'He built the tower on a mound higher than the square',
        },
        {
          el: 'Ζήτησε γραπτή άδεια από τον αυτοκράτορα και την πήρε',
          en: 'He asked the emperor for written permission and got it',
        },
      ],
      explanation: {
        el:
          'Το όριο αφορούσε τον πύργο, όχι το άγαλμα. Ο πύργος έμεινε στα 98 μέτρα και ο ' +
          'ιππότης πρόσθεσε τα υπόλοιπα.',
        en:
          'The limit was about the tower, not the statue. The tower stayed at 98 metres and ' +
          'the knight added the rest.',
      },
    },
  },

  // ------------------------------------------------------------------ parliament
  {
    id: 'vienna-parliament',
    cityId: 'vienna',
    emoji: '🦉',
    category: 'history',
    difficulty: 3,

    name: { el: 'Το Κοινοβούλιο', en: 'The Parliament Building' },
    tagline: {
      el: 'Ένα αυστριακό κοινοβούλιο ντυμένο ελληνικός ναός',
      en: 'An Austrian parliament dressed as a Greek temple',
    },
    story: {
      el:
        'Το αυστριακό κοινοβούλιο χτίστηκε από το 1874 ως το 1883 και μοιάζει με ελληνικό ' +
        'ναό. Δεν είναι τυχαίο. Ο αρχιτέκτονάς του, ο Θεόφιλος Χάνσεν, ήταν Δανός που είχε ' +
        'ζήσει χρόνια στην Αθήνα, και ήθελε το κτίριο να θυμίζει από πού ξεκίνησε η ιδέα να ' +
        'αποφασίζουν οι πολίτες μαζί. Έτσι του έβαλε κολόνες, αετώματα και μαρμάρινα ' +
        'αγάλματα, και δίπλα στην είσοδο δύο πλατιές ράμπες, γιατί τότε οι βουλευτές ' +
        'έφταναν με άμαξες. Μπροστά στέκεται η Παλλάδα Αθηνά, πέντε και μισό μέτρα ύψος, με ' +
        'κράνος και με μια μικρή φτερωτή Νίκη στο χέρι. Το άγαλμα το σκάλισε ο Καρλ Κούντμαν ' +
        'και αποκαλύφθηκε το 1902. Από το 2018 ως το 2022 το κτίριο ανακαινίστηκε ολόκληρο ' +
        'και οι βουλευτές δούλευαν προσωρινά στο Χόφμπουργκ. Ξανάνοιξε το 2023, με μια ' +
        'γυάλινη σκεπή πάνω από τη μεγάλη αίθουσα, ώστε να μπαίνει φως της ημέρας εκεί που ' +
        'γίνονται οι συζητήσεις.',
      en:
        'Austria’s parliament was built between 1874 and 1883 and looks like a Greek temple. ' +
        'That is not an accident. Its architect, Theophil Hansen, was a Dane who had lived ' +
        'for years in Athens, and he wanted the building to remind everyone where the idea of ' +
        'citizens deciding together began. So he gave it columns, gables and marble statues, ' +
        'and two wide ramps beside the entrance, because members arrived by carriage back ' +
        'then. In front stands Pallas Athena, five and a half metres tall, in a helmet, with a ' +
        'small winged Nike in her hand. Carl Kundmann carved the statue and it was unveiled in ' +
        '1902. From 2018 to 2022 the whole building was rebuilt inside, and the members worked ' +
        'in the Hofburg meanwhile. It opened again in 2023, with a glass roof over the main ' +
        'chamber so that daylight falls where the arguing happens.',
    },
    facts: [
      {
        el: 'Το σχεδίασε ο Δανός Θεόφιλος Χάνσεν, που είχε ζήσει χρόνια στην Αθήνα.',
        en: 'It was designed by the Dane Theophil Hansen, who had lived for years in Athens.',
      },
      {
        el: 'Η Αθηνά μπροστά του έχει ύψος 5,5 μέτρα και αποκαλύφθηκε το 1902.',
        en: 'The Athena in front of it is 5.5 metres tall and was unveiled in 1902.',
      },
      {
        el: 'Ανακαινίστηκε από το 2018 ως το 2022 και ξανάνοιξε το 2023.',
        en: 'It was renovated from 2018 to 2022 and reopened in 2023.',
      },
    ],
    location: {
      lat: 48.20805,
      lng: 16.3587,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q702121', deltaM: 0 },
        { kind: 'osm', ref: 'relation/54286', deltaM: 19 },
        { kind: 'wikipedia', ref: 'Austrian Parliament Building', deltaM: 48 },
      ],
      verifiedAt: '2026-09-12',
      findIt: {
        el: 'Η Αθηνά με το κράνος στέκεται ακριβώς μπροστά από τη σκάλα της εισόδου.',
        en: 'The helmeted Athena stands right in front of the entrance steps.',
      },
    },
    question: {
      q: {
        el: 'Γιατί το κοινοβούλιο της Αυστρίας μοιάζει με ελληνικό ναό;',
        en: 'Why does Austria’s parliament look like a Greek temple?',
      },
      answers: [
        { el: 'Γιατί η δημοκρατία ξεκίνησε στην Ελλάδα', en: 'Because democracy began in Greece' },
        {
          el: 'Γιατί το μάρμαρο ήρθε με πλοίο από ελληνικό λατομείο',
          en: 'Because the marble came by ship from a Greek quarry',
        },
        {
          el: 'Γιατί ο αυτοκράτορας ήθελε να ταιριάζει με το παλάτι του',
          en: 'Because the emperor wanted it to match his own palace',
        },
        {
          el: 'Γιατί ήταν το φθηνότερο σχέδιο από όσα κατατέθηκαν τότε',
          en: 'Because it was the cheapest design of all those submitted',
        },
      ],
      explanation: {
        el:
          'Ο Χάνσεν είχε ζήσει στην Αθήνα και ήθελε το κτίριο να το λέει μόνο του: εδώ ' +
          'αποφασίζουν οι πολίτες.',
        en:
          'Hansen had lived in Athens and wanted the building to say it by itself: this is ' +
          'where citizens decide.',
      },
    },
  },

  // ------------------------------------------------------------------- riesenrad
  {
    id: 'vienna-riesenrad',
    cityId: 'vienna',
    emoji: '🎡',
    category: 'science',
    difficulty: 1,

    name: { el: 'Η Μεγάλη Ρόδα του Πράτερ', en: 'The Giant Wheel of the Prater' },
    tagline: {
      el: 'Μια μηχανή του 1897 που γυρίζει ακόμα',
      en: 'An 1897 machine that is still turning',
    },
    story: {
      el:
        'Η μεγάλη ρόδα του Πράτερ στήθηκε το 1897, τη χρονιά που ο αυτοκράτορας έκλεινε ' +
        'πενήντα χρόνια στον θρόνο. Την έφτιαξε ένας Άγγλος μηχανικός, ο Βάλτερ Μπάσετ, και ' +
        'έχει ύψος 64,75 μέτρα. Από μακριά μοιάζει με ρόδα ποδηλάτου, και αυτό δεν είναι ' +
        'σύμπτωση: οι δεκαπέντε ακτίνες της δεν σπρώχνουν, τραβούν. Είναι ατσάλινες ράβδοι ' +
        'που κρατούν τεντωμένο τον κύκλο, όπως ακριβώς οι λεπτές ακτίνες σε ένα ποδήλατο. Τα ' +
        'βαγόνια δεν είναι βιδωμένα πάνω στη ρόδα. Κρέμονται από έναν πείρο και γυρίζουν ' +
        'ελεύθερα, έτσι το πάτωμά τους μένει πάντα οριζόντιο όσο κι αν ανεβαίνει ο κύκλος. ' +
        'Δεν το κάνει κάποιο μοτέρ· το κάνει η βαρύτητα. Η ρόδα γυρίζει με εβδομήντα πέντε ' +
        'εκατοστά το δευτερόλεπτο, πιο αργά από το περπάτημά σου. Το 1945 κάηκε, και όταν ' +
        'την επισκεύασαν έβαλαν δεκαπέντε βαγόνια αντί για τριάντα. Γι’ αυτό σήμερα τα κενά ' +
        'ανάμεσά τους είναι τόσο μεγάλα.',
      en:
        'The great wheel in the Prater went up in 1897, the year the emperor completed fifty ' +
        'years on the throne. An English engineer, Walter Bassett, built it, and it stands ' +
        '64.75 metres high. From far off it looks like a bicycle wheel, and that is no ' +
        'coincidence: its fifteen spokes do not push, they pull. They are steel rods holding ' +
        'the rim tight, exactly the way the thin spokes on a bicycle do. The cabins are not ' +
        'bolted to the wheel. They hang from a pin and swing freely, so their floors stay flat ' +
        'however far the rim turns. No motor does that; gravity does. The wheel moves at ' +
        'seventy-five centimetres a second, slower than you walk. In 1945 it burned, and when ' +
        'it was repaired fifteen cabins went back on instead of thirty. That is why the gaps ' +
        'between them are so wide today.',
    },
    facts: [
      {
        el: 'Στήθηκε το 1897 και έχει ύψος 64,75 μέτρα.',
        en: 'It was built in 1897 and stands 64.75 metres high.',
      },
      {
        el: 'Γυρίζει με 0,75 μέτρα το δευτερόλεπτο, δηλαδή 2,7 χιλιόμετρα την ώρα.',
        en: 'It turns at 0.75 metres a second, which is 2.7 kilometres an hour.',
      },
      {
        el: 'Είχε τριάντα βαγόνια· μετά τη φωτιά του 1945 ξανάνοιξε με δεκαπέντε.',
        en: 'It had thirty cabins; after the fire of 1945 it reopened with fifteen.',
      },
    ],
    location: {
      lat: 48.21683,
      lng: 16.39592,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q697578', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Wiener Riesenrad', deltaM: 20 },
      ],
      verifiedAt: '2026-09-12',
    },
    question: {
      q: {
        el: 'Γιατί το πάτωμα του βαγονιού μένει ίσιο ενώ η ρόδα γυρίζει;',
        en: 'Why does a cabin’s floor stay flat while the wheel turns?',
      },
      answers: [
        { el: 'Κρέμεται ελεύθερα από έναν πείρο', en: 'It hangs freely from a pin' },
        {
          el: 'Ένας μικρός κινητήρας το ισιώνει συνέχεια',
          en: 'A small motor keeps straightening it out',
        },
        {
          el: 'Είναι γεμάτο νερό, που βρίσκει μόνο του το επίπεδο',
          en: 'It is full of water, which finds its own level',
        },
        {
          el: 'Οι επιβάτες μετακινούνται μέσα του για να το ισορροπήσουν',
          en: 'The passengers move about inside to balance it',
        },
      ],
      explanation: {
        el:
          'Ό,τι κρέμεται ελεύθερα το τραβάει η βαρύτητα προς τα κάτω. Το βαγόνι γυρίζει γύρω ' +
          'από τον πείρο του και μένει ίσιο σε όλη τη διαδρομή.',
        en:
          'Anything hanging freely is pulled straight down by gravity. The cabin swings round ' +
          'its pin and stays level all the way.',
      },
    },
  },
  // ------------------------------------------------------------------ schönbrunn
  {
    id: 'vienna-schonbrunn',
    cityId: 'vienna',
    emoji: '⛲',
    category: 'history',
    difficulty: 2,

    name: { el: 'Τα Ανάκτορα του Σένμπρουν', en: 'Schönbrunn Palace' },
    tagline: {
      el: 'Χίλια τετρακόσια σαράντα ένα δωμάτια, κι ένας λαβύρινθος στον κήπο',
      en: 'One thousand four hundred and forty-one rooms, and a garden maze',
    },
    story: {
      el:
        'Το Σένμπρουν ήταν το εξοχικό των Αψβούργων, το σπίτι όπου πήγαιναν το καλοκαίρι για ' +
        'να ξεφύγουν από την πόλη. Έχει 1.441 δωμάτια, από τα οποία επισκέπτεσαι περίπου ' +
        'σαράντα· τα υπόλοιπα είναι γραφεία, αποθήκες και κατοικίες. Εδώ μεγάλωσε η Μαρία ' +
        'Θηρεσία με τα δεκαέξι παιδιά της. Στις 13 Οκτωβρίου 1762 ένα εξάχρονο αγόρι κάθισε ' +
        'να παίξει μπροστά της στην Αίθουσα των Καθρεφτών, μαζί με τη μεγαλύτερη αδελφή του. ' +
        'Το αγόρι λεγόταν Βόλφγκανγκ Αμαντέους Μότσαρτ. Ο κήπος είναι σχεδόν πιο σημαντικός ' +
        'από το παλάτι. Στην κορυφή του λόφου στέκεται η Γκλοριέτε, χτισμένη το 1775, που ' +
        'δεν είναι σπίτι: είναι ένα κτίριο φτιαγμένο για να το κοιτάς από κάτω και να βλέπεις ' +
        'τη Βιέννη από πάνω. Πιο χαμηλά υπάρχει ένας λαβύρινθος από θάμνους, και το Μεγάλο ' +
        'Θερμοκήπιο των Φοινίκων, από σίδερο και τζάμι, που άνοιξε στις 19 Ιουνίου 1882 και ' +
        'κρύβει τρία διαφορετικά κλίματα κάτω από μία σκεπή.',
      en:
        'Schönbrunn was the Habsburgs’ country house, the place they went in summer to get out ' +
        'of the city. It has 1,441 rooms, of which about forty can be visited; the rest are ' +
        'offices, stores and flats. Maria Theresa raised sixteen children here. On 13 October ' +
        '1762 a six-year-old boy sat down to play in front of her in the Hall of Mirrors, ' +
        'together with his older sister. The boy was Wolfgang Amadeus Mozart. The garden ' +
        'almost matters more than the palace. On the top of the hill stands the Gloriette, ' +
        'built in 1775, which is not a house at all: it is a building made to be looked at ' +
        'from below and to look at Vienna from above. Lower down there is a maze of hedges, ' +
        'and the Great Palm House of iron and glass, opened on 19 June 1882, which hides three ' +
        'different climates under one roof.',
    },
    facts: [
      {
        el: 'Έχει 1.441 δωμάτια. Στους επισκέπτες ανοίγουν περίπου σαράντα.',
        en: 'It has 1,441 rooms. About forty of them are open to visitors.',
      },
      {
        el: 'Στις 13 Οκτωβρίου 1762 ο εξάχρονος Μότσαρτ έπαιξε εδώ για τη Μαρία Θηρεσία.',
        en: 'On 13 October 1762 the six-year-old Mozart played here for Maria Theresa.',
      },
      {
        el: 'Η Γκλοριέτε στον λόφο χτίστηκε το 1775 και το Θερμοκήπιο των Φοινίκων άνοιξε το 1882.',
        en: 'The Gloriette on the hill was built in 1775 and the Palm House opened in 1882.',
      },
    ],
    location: {
      lat: 48.18479,
      lng: 16.31227,
      anchor: 'area',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q131330', deltaM: 0 },
        { kind: 'osm', ref: 'way/8756754', deltaM: 23 },
        { kind: 'wikipedia', ref: 'Schönbrunn Palace', deltaM: 43 },
      ],
      verifiedAt: '2026-09-12',
      note: 'An area point for the palace and its grounds together. The three sources agree to within 43 m, which is small for something this size.',
    },
    question: {
      q: {
        el: 'Ποιος έπαιξε μουσική εδώ σε ηλικία έξι ετών;',
        en: 'Who played music here at the age of six?',
      },
      answers: [
        { el: 'Ο Μότσαρτ', en: 'Mozart' },
        { el: 'Ο Λούντβιχ βαν Μπετόβεν', en: 'Ludwig van Beethoven' },
        { el: 'Ο Γιόχαν Στράους ο νεότερος', en: 'Johann Strauss the younger' },
        { el: 'Ο Γιόζεφ Χάιντν', en: 'Joseph Haydn' },
      ],
      explanation: {
        el: 'Ήταν 13 Οκτωβρίου 1762, στην Αίθουσα των Καθρεφτών, μαζί με την αδελφή του τη Νάνερλ.',
        en: 'It was 13 October 1762, in the Hall of Mirrors, together with his sister Nannerl.',
      },
    },
  },

  // ------------------------------------------------------------------------ zoo
  {
    id: 'vienna-schonbrunn-zoo',
    cityId: 'vienna',
    emoji: '🐼',
    category: 'nature',
    difficulty: 1,

    name: { el: 'Ο Ζωολογικός Κήπος του Σένμπρουν', en: 'Schönbrunn Zoo' },
    tagline: {
      el: 'Ο παλαιότερος ζωολογικός κήπος που λειτουργεί ακόμα',
      en: 'The oldest zoo in the world still open today',
    },
    story: {
      el:
        'Ο ζωολογικός κήπος του Σένμπρουν άνοιξε το 1752 και είναι ο παλαιότερος στον κόσμο ' +
        'που λειτουργεί ακόμα. Τον έφτιαξε ο Φραγκίσκος Στέφανος, ο σύζυγος της Μαρίας ' +
        'Θηρεσίας, όχι για το κοινό αλλά για την αυλή. Από το 1779 άνοιξε και για τους ' +
        'απλούς ανθρώπους. Στη μέση του στέκεται ένα οκτάγωνο περίπτερο του 1759. Εκεί έτρωγε ' +
        'πρωινό ο αυτοκράτορας, και γύρω γύρω από τα παράθυρά του απλώνονταν οι μάντρες των ' +
        'ζώων σαν κομμάτια τούρτας. Αυτό το σχέδιο υπάρχει ακόμα: αν σταθείς στο κέντρο, ' +
        'βλέπεις προς όλες τις κατευθύνσεις. Ο σημερινός ζωολογικός δεν μοιάζει με τον παλιό. ' +
        'Έχει ένα σπίτι τροπικού δάσους με αληθινή βροχή μέσα του και ένα ψυχρό σπίτι για τα ' +
        'ζώα των πάγων. Στις 23 Αυγούστου 2007 γεννήθηκε εδώ ένα γιγαντιαίο πάντα, ο Φου ' +
        'Λονγκ. Ήταν το πρώτο πάντα στην Ευρώπη που ήρθε στον κόσμο χωρίς καμία βοήθεια από ' +
        'γιατρούς.',
      en:
        'Schönbrunn Zoo opened in 1752 and is the oldest zoo in the world still running. ' +
        'Francis Stephen, Maria Theresa’s husband, built it, not for the public but for the ' +
        'court. From 1779 ordinary people were let in too. In the middle stands an eight-sided ' +
        'pavilion from 1759. The emperor ate breakfast in it, and the animal pens fanned out ' +
        'around his windows like slices of a cake. That plan is still there: stand in the ' +
        'centre and you can look out in every direction. The zoo today looks nothing like the ' +
        'old one. It has a rainforest house with real rain falling inside it and a cold house ' +
        'for animals of the ice. On 23 August 2007 a giant panda was born here, Fu Long. He ' +
        'was the first panda in Europe to arrive without any help at all from doctors.',
    },
    facts: [
      {
        el: 'Άνοιξε το 1752 και είναι ο παλαιότερος ζωολογικός κήπος που λειτουργεί ακόμα.',
        en: 'It opened in 1752 and is the oldest zoo still in operation anywhere.',
      },
      {
        el: 'Το οκτάγωνο περίπτερο στο κέντρο του χτίστηκε το 1759 για τον αυτοκράτορα.',
        en: 'The eight-sided pavilion at its centre was built in 1759 for the emperor.',
      },
      {
        el: 'Στις 23 Αυγούστου 2007 γεννήθηκε εδώ ο Φου Λονγκ, ένα γιγαντιαίο πάντα.',
        en: 'On 23 August 2007 Fu Long, a giant panda, was born here.',
      },
    ],
    location: {
      lat: 48.18222,
      lng: 16.3025,
      anchor: 'area',
      confidence: 'C',
      sources: [{ kind: 'wikidata', ref: 'Q752283', deltaM: 0 }],
      verifiedAt: '2026-09-12',
      note: 'Only Wikidata answered for this one, so the grade is C. The point is the area of the zoo inside the Schönbrunn grounds.',
    },
    question: {
      q: {
        el: 'Τι υπάρχει ακριβώς στο κέντρο του ζωολογικού κήπου;',
        en: 'What stands exactly in the middle of the zoo?',
      },
      answers: [
        { el: 'Ένα οκτάγωνο περίπτερο του αυτοκράτορα', en: 'An eight-sided pavilion of the emperor' },
        {
          el: 'Μια μεγάλη λίμνη με πελεκάνους και φλαμίνγκο',
          en: 'A big lake with pelicans and flamingos',
        },
        {
          el: 'Το σπίτι των ελεφάντων, το μεγαλύτερο κτίριο του κήπου',
          en: 'The elephant house, the largest building in the zoo',
        },
        {
          el: 'Ένας πύργος από όπου βλέπεις όλες τις μάντρες μαζί',
          en: 'A tower from which you can see every enclosure at once',
        },
      ],
      explanation: {
        el:
          'Οι μάντρες σχεδιάστηκαν γύρω από το περίπτερο σαν κομμάτια τούρτας, ώστε ο ' +
          'αυτοκράτορας να τα βλέπει όλα από το τραπέζι του.',
        en:
          'The pens were laid out around the pavilion like slices of a cake, so the emperor ' +
          'could see them all from his table.',
      },
    },
  },

  // ------------------------------------------------------------------- naschmarkt
  {
    id: 'vienna-naschmarkt',
    cityId: 'vienna',
    emoji: '🥨',
    category: 'food',
    difficulty: 1,

    name: { el: 'Ο Νάσμαρκτ', en: 'The Naschmarkt' },
    tagline: {
      el: 'Ενάμισι χιλιόμετρο πάγκοι πάνω από ένα θαμμένο ποτάμι',
      en: 'A kilometre and a half of stalls above a buried river',
    },
    story: {
      el:
        'Στη Βιέννη υπάρχει αγορά σε αυτό το σημείο από το 1780 περίπου. Σήμερα ο Νάσμαρκτ ' +
        'απλώνεται σε ενάμισι χιλιόμετρο, με πάνω από εκατόν είκοσι πάγκους: μπαχαρικά σε ' +
        'βουναλάκια, ελιές, τυριά, ψάρια, φρούτα που δεν έχεις ξαναδεί. Το πιο περίεργο όμως ' +
        'δεν φαίνεται. Κάτω από τα πόδια σου τρέχει ένα ποτάμι. Είναι ο Βιν, το ποτάμι που ' +
        'έδωσε στην πόλη το όνομά της και που κάθε λίγα χρόνια ξεχείλιζε και έπνιγε τις ' +
        'γειτονιές. Γύρω στο 1900 οι μηχανικοί το σκέπασαν με θόλο, και πάνω στο καπάκι ' +
        'στρώθηκε η αγορά. Κάθε Σάββατο στην άκρη του Νάσμαρκτ ανοίγει ένα τεράστιο παζάρι με ' +
        'παλιά πράγματα: δίσκους, βιβλία, κλειδιά, καπέλα. Και ακριβώς απέναντι στέκεται ένα ' +
        'σπίτι με ολόκληρη την πρόσοψη σκεπασμένη με ζωγραφισμένα πλακάκια γεμάτα ' +
        'τριαντάφυλλα. Το σχεδίασε ο Ότο Βάγκνερ το 1898, και το πλύσιμό του γίνεται με ' +
        'λάστιχο.',
      en:
        'There has been a market on this spot in Vienna since about 1780. Today the Naschmarkt ' +
        'stretches for a kilometre and a half, with more than a hundred and twenty stalls: ' +
        'little mountains of spices, olives, cheeses, fish, fruit you have never seen before. ' +
        'The strangest thing about it, though, is out of sight. A river runs under your feet. ' +
        'It is the Wien, the river that gave the city its name and that used to burst its ' +
        'banks every few years and drown the neighbourhoods. Around 1900 engineers roofed it ' +
        'over, and the market was laid out on the lid. Every Saturday a huge flea market opens ' +
        'at one end of the Naschmarkt: records, books, keys, hats. And directly opposite ' +
        'stands a house whose entire front is covered in painted tiles full of roses. Otto ' +
        'Wagner designed it in 1898, and it is cleaned with a hose.',
    },
    facts: [
      {
        el: 'Απλώνεται σε περίπου 1,5 χιλιόμετρο, με πάνω από 120 πάγκους.',
        en: 'It runs for about 1.5 kilometres, with more than 120 stalls.',
      },
      {
        el: 'Ο ποταμός Βιν περνάει σκεπασμένος ακριβώς από κάτω του.',
        en: 'The river Wien flows underneath it, roofed over.',
      },
      {
        el: 'Κάθε Σάββατο ανοίγει στην άκρη του ένα μεγάλο παζάρι με παλιά πράγματα.',
        en: 'Every Saturday a big flea market opens at one end of it.',
      },
    ],
    location: {
      lat: 48.1989,
      lng: 16.3636,
      anchor: 'area',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q417645', deltaM: 0 },
        { kind: 'osm', ref: 'way/29320733', deltaM: 98 },
        { kind: 'wikipedia', ref: 'Naschmarkt', deltaM: 1 },
      ],
      verifiedAt: '2026-09-12',
      note: 'The OpenStreetMap point sits 98 m away, which is expected: the market is 1.5 km long and the two sources picked different ends of it.',
    },
    question: {
      q: {
        el: 'Τι κρύβεται κάτω από τους πάγκους του Νάσμαρκτ;',
        en: 'What is hidden underneath the Naschmarkt’s stalls?',
      },
      answers: [
        { el: 'Ένα σκεπασμένο ποτάμι, ο Βιν', en: 'A covered river, the Wien' },
        {
          el: 'Οι παλιές αποθήκες κρασιού των αυτοκρατόρων',
          en: 'The old wine cellars of the emperors',
        },
        {
          el: 'Ένα ρωμαϊκό θέατρο που δεν έχει σκαφτεί ακόμα',
          en: 'A Roman theatre that has not been dug up yet',
        },
        {
          el: 'Το μεγαλύτερο υπόγειο πάρκινγκ ολόκληρης της Βιέννης',
          en: 'The largest underground car park in all of Vienna',
        },
      ],
      explanation: {
        el:
          'Ο Βιν ξεχείλιζε συνέχεια. Τον σκέπασαν γύρω στο 1900 και πάνω στο καπάκι στρώθηκε ' +
          'η αγορά.',
        en:
          'The Wien kept flooding. It was roofed over around 1900, and the market was laid out ' +
          'on the lid.',
      },
    },
  },
  // -------------------------------------------------- natural history museum
  {
    id: 'vienna-naturhistorisches',
    cityId: 'vienna',
    emoji: '🦕',
    category: 'museum',
    difficulty: 2,

    name: { el: 'Το Μουσείο Φυσικής Ιστορίας', en: 'The Natural History Museum' },
    tagline: {
      el: 'Τριάντα εκατομμύρια αντικείμενα, από μετεωρίτες ως μια μικρή Αφροδίτη',
      en: 'Thirty million objects, from meteorites to one small Venus',
    },
    story: {
      el:
        'Απέναντι από ένα μουσείο τέχνης στέκεται το δίδυμό του, και τα δύο είναι τόσο ίδια ' +
        'που μπερδεύεις ποιο είναι ποιο. Ο αυτοκράτορας Φραγκίσκος Ιωσήφ τα έχτισε το ένα ' +
        'απέναντι στο άλλο γιατί οι αυτοκρατορικές συλλογές δεν χωρούσαν πια στο παλάτι. Το ' +
        'Μουσείο Φυσικής Ιστορίας άνοιξε το 1889. Οι συλλογές του όμως είναι πολύ παλιότερες: ' +
        'ξεκίνησαν το 1750, όταν ο Φραγκίσκος Στέφανος αγόρασε τριάντα χιλιάδες πέτρες και ' +
        'ορυκτά και τα έφερε στη Βιέννη με άμαξες. Σήμερα το μουσείο φυλάει περίπου τριάντα ' +
        'εκατομμύρια αντικείμενα, και στις αίθουσες βλέπεις μόνο ένα μικρό κομμάτι τους. Μέσα ' +
        'θα συναντήσεις μετεωρίτες που έπεσαν από τον ουρανό, έναν σκελετό δεινοσαύρου ' +
        'μακρύτερο από λεωφορείο, έναν αλλόσαυρο που κουνιέται, και ένα ειδώλιο έντεκα ' +
        'εκατοστών που είναι σχεδόν τριάντα χιλιάδων ετών. Το τελευταίο έχει δικό του δωμάτιο, ' +
        'γιατί είναι το πιο διάσημο αντικείμενο ολόκληρου του κτιρίου.',
      en:
        'Across the square from an art museum stands its twin, and the two are so alike that ' +
        'you lose track of which is which. Emperor Franz Joseph had them built facing each ' +
        'other because the imperial collections no longer fitted in the palace. The Natural ' +
        'History Museum opened in 1889. Its collections are far older than that: they began in ' +
        '1750, when Francis Stephen bought thirty thousand stones and minerals and had them ' +
        'carted to Vienna. Today the museum keeps around thirty million objects, and the halls ' +
        'show only a small slice of them. Inside you will meet meteorites that fell out of the ' +
        'sky, a dinosaur skeleton longer than a bus, an Allosaurus that moves, and a carved ' +
        'figure eleven centimetres tall that is almost thirty thousand years old. The last of ' +
        'those has a room to itself, because it is the most famous object in the whole building.',
    },
    facts: [
      {
        el: 'Άνοιξε το 1889 και φυλάει περίπου 30 εκατομμύρια αντικείμενα.',
        en: 'It opened in 1889 and holds around 30 million objects.',
      },
      {
        el: 'Η αίθουσα των μετεωριτών του είναι η μεγαλύτερη έκθεση μετεωριτών στον κόσμο.',
        en: 'Its meteorite hall is the largest display of meteorites in the world.',
      },
      {
        el: 'Οι συλλογές ξεκίνησαν το 1750, με 30.000 ορυκτά που αγόρασε ο Φραγκίσκος Στέφανος.',
        en: 'The collections began in 1750, with 30,000 minerals bought by Francis Stephen.',
      },
    ],
    location: {
      lat: 48.20513,
      lng: 16.35993,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q688704', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Natural History Museum, Vienna', deltaM: 8 },
      ],
      verifiedAt: '2026-09-12',
      findIt: {
        el: 'Είναι το βόρειο από τα δύο δίδυμα κτίρια, με τον κήπο και το άγαλμα ανάμεσά τους.',
        en: 'It is the northern one of the twin buildings, with the garden and statue between them.',
      },
    },
    question: {
      q: {
        el: 'Γιατί το μουσείο έχει ένα δίδυμο κτίριο ακριβώς απέναντί του;',
        en: 'Why does the museum have a twin building directly opposite it?',
      },
      answers: [
        {
          el: 'Οι αυτοκρατορικές συλλογές δεν χωρούσαν σε ένα κτίριο',
          en: 'The imperial collections did not fit in one building',
        },
        {
          el: 'Οι δύο αρχιτέκτονες μάλωσαν και έχτισαν από ένα ο καθένας',
          en: 'The two architects quarrelled and each built one',
        },
        {
          el: 'Το πρώτο κτίριο κάηκε και το ξανάχτισαν ακριβώς δίπλα',
          en: 'The first building burned down and was rebuilt right beside it',
        },
        {
          el: 'Ήθελαν να κόψουν τον άνεμο που περνούσε από την πλατεία',
          en: 'They wanted to block the wind that swept across the square',
        },
      ],
      explanation: {
        el:
          'Η φύση πήγε στο ένα, η τέχνη στο άλλο, και η πλατεία ανάμεσά τους έγινε επίτηδες ' +
          'απόλυτα συμμετρική.',
        en:
          'Nature went into one, art into the other, and the square between them was made ' +
          'perfectly symmetrical on purpose.',
      },
    },

    museum: {
      doorNote: {
        el: 'Οι μετεωρίτες, οι δεινόσαυροι και η Αφροδίτη είναι όλα στον ίδιο όροφο.',
        en: 'The meteorites, the dinosaurs and the Venus are all on the same floor.',
      },
      rooms: [
        {
          id: 'vienna-naturhistorisches-stones',
          emoji: '💎',
          name: {
            el: 'Πέτρες από τη Γη και από τον ουρανό',
            en: 'Stones from the Earth and from the sky',
          },
          intro: {
            el:
              'Οι πρώτες αίθουσες του μουσείου είναι γεμάτες πέτρες, και αυτό ακούγεται ' +
              'βαρετό μέχρι να μπεις μέσα. Άλλες μεγάλωσαν αργά μέσα σε βράχους για ' +
              'εκατομμύρια χρόνια. Άλλες ταξίδεψαν στο διάστημα και έπεσαν καίγοντας μέσα ' +
              'στον αέρα. Και ανάμεσά τους υπάρχει μία που δεν την έφτιαξε η φύση: την ' +
              'έφτιαξε ένας χρυσοχόος, για μια αυτοκράτειρα.',
            en:
              'The museum’s first halls are full of stones, which sounds dull until you walk ' +
              'in. Some of them grew slowly inside rocks for millions of years. Others ' +
              'travelled through space and came down burning through the air. And among them ' +
              'there is one that nature did not make at all: a goldsmith made it, for an ' +
              'empress.',
          },
          exhibits: [
            {
              id: 'vienna-naturhistorisches-knyahinya',
              name: { el: 'Ο μετεωρίτης της Κνιαχίνια', en: 'The Knyahinya meteorite' },
              blurb: {
                el:
                  'Στις 9 Ιουνίου 1866 ένας φλεγόμενος βράχος έσκισε τον ουρανό πάνω από ένα ' +
                  'χωριό στα Καρπάθια και έπεσε σε ένα χωράφι. Ζύγιζε σχεδόν τριακόσια κιλά. ' +
                  'Για δεκαετίες ήταν ο μεγαλύτερος πέτρινος μετεωρίτης που είχε βρεθεί ποτέ, ' +
                  'και σήμερα στέκεται στη μέση της βιτρίνας σαν αρχηγός. Γύρω του υπάρχουν ' +
                  'εκατοντάδες άλλοι. Η αίθουσα δείχνει περίπου χίλιους εκατό μετεωρίτες και ' +
                  'είναι η μεγαλύτερη έκθεση μετεωριτών στον κόσμο. Καθένας τους ήταν κάποτε ' +
                  'κομμάτι κάποιου άλλου κόσμου.',
                en:
                  'On 9 June 1866 a burning rock tore across the sky above a village in the ' +
                  'Carpathians and landed in a field. It weighed almost three hundred ' +
                  'kilograms. For decades it was the largest stone meteorite anyone had ever ' +
                  'found, and today it stands in the middle of the case like a chief. Hundreds ' +
                  'more surround it. The hall shows around eleven hundred meteorites and is ' +
                  'the largest meteorite display in the world. Every one of them was once a ' +
                  'piece of some other world.',
              },
              question: {
                q: { el: 'Τι είναι ένας μετεωρίτης;', en: 'What is a meteorite?' },
                answers: [
                  { el: 'Πέτρα από το διάστημα που έπεσε στη Γη', en: 'A rock from space that landed on Earth' },
                  {
                    el: 'Πέτρα που πετάχτηκε από το στόμιο ενός ηφαιστείου',
                    en: 'A rock thrown out of the mouth of a volcano',
                  },
                  {
                    el: 'Κομμάτι πάγου που έλιωσε και άφησε πίσω του μέταλλο',
                    en: 'A lump of ice that melted and left metal behind',
                  },
                  {
                    el: 'Βράχος που έγινε γυαλί από τον κεραυνό',
                    en: 'A rock turned into glass by a lightning strike',
                  },
                ],
                explanation: {
                  el: 'Όσο πετάει, το λέμε μετέωρο. Μόλις ακουμπήσει το χώμα, γίνεται μετεωρίτης.',
                  en: 'While it is still flying we call it a meteor. The moment it touches the ground it becomes a meteorite.',
                },
              },
            },
            {
              id: 'vienna-naturhistorisches-gem-bouquet',
              name: { el: 'Το μπουκέτο από πολύτιμες πέτρες', en: 'The gemstone bouquet' },
              blurb: {
                el:
                  'Το 1764 η Μαρία Θηρεσία έκρυψε ένα δώρο μέσα στη συλλογή ορυκτών του ' +
                  'άντρα της. Ήταν ένα μπουκέτο λουλούδια που δεν μαραίνεται ποτέ: εξήντα ένα ' +
                  'άνθη και δώδεκα έντομα, φτιαγμένα από 2.102 διαμάντια και 761 χρωματιστές ' +
                  'πέτρες, στημένα σε ένα βάζο από ορεία κρύσταλλο. Τα πέταλα είναι σμαράγδια, ' +
                  'ρουμπίνια, τουρμαλίνες και οπάλια. Οι μέλισσες και οι πεταλούδες έχουν ' +
                  'φτερά από λεπτά πετράδια. Κάθε πέτρα κόπηκε ξεχωριστά και δέθηκε πάνω σε ' +
                  'συρμάτινο μίσχο.',
                en:
                  'In 1764 Maria Theresa hid a present inside her husband’s mineral ' +
                  'collection. It was a bunch of flowers that never wilts: sixty-one blooms ' +
                  'and twelve insects, made from 2,102 diamonds and 761 coloured stones, ' +
                  'standing in a vase of rock crystal. The petals are emeralds, rubies, ' +
                  'tourmalines and opals. The bees and butterflies have wings of thin ' +
                  'gemstone. Every single stone was cut on its own and tied onto a wire stem.',
              },
              question: {
                q: { el: 'Πόσα διαμάντια έχει το μπουκέτο;', en: 'How many diamonds are in the bouquet?' },
                answers: [
                  { el: '2.102 διαμάντια', en: '2,102 diamonds' },
                  { el: 'Δώδεκα διαμάντια, ένα σε κάθε έντομο', en: 'Twelve diamonds, one on each insect' },
                  { el: 'Εξήντα ένα διαμάντια, ένα σε κάθε λουλούδι', en: 'Sixty-one diamonds, one in each flower' },
                  { el: 'Κανένα· όλες οι πέτρες του είναι χρωματιστές', en: 'None at all; every stone in it is coloured' },
                ],
                explanation: {
                  el: 'Μαζί τους υπάρχουν και 761 χρωματιστές πέτρες, από σμαράγδι ως οπάλι.',
                  en: 'Along with them there are 761 coloured stones, from emerald to opal.',
                },
              },
            },
            {
              id: 'vienna-naturhistorisches-topaz',
              name: { el: 'Ο τεράστιος τοπάζιος', en: 'The giant topaz' },
              blurb: {
                el:
                  'Σε μια βιτρίνα χωμένη στο πάτωμα, μπροστά από τα χρηματοκιβώτια με τα ' +
                  'πετράδια, κάθεται ένας κρύσταλλος τοπαζίου που ζυγίζει 117 κιλά. Δεν τον ' +
                  'έφτιαξε κανείς. Μεγάλωσε μόνος του μέσα σε βράχο στη Βραζιλία, σχηματίζοντας ' +
                  'αργά επίπεδες πλευρές και αιχμηρές γωνίες, όπως κάνει κάθε κρύσταλλος. Ένα ' +
                  'παιδί δεν μπορεί να τον σηκώσει· ούτε δύο μπορούν. Ήρθε στη συλλογή το 1978. ' +
                  'Δίπλα σε αυτόν, τα δαχτυλίδια των βασιλισσών μοιάζουν με ψίχουλα.',
                en:
                  'In a case set into the floor, in front of the safes full of jewels, sits a ' +
                  'topaz crystal weighing 117 kilograms. Nobody made it. It grew by itself ' +
                  'inside rock in Brazil, slowly building flat faces and sharp angles the way ' +
                  'every crystal does. One child cannot lift it; two cannot either. It came ' +
                  'into the collection in 1978. Standing next to it, the rings of queens look ' +
                  'like crumbs.',
              },
              question: {
                q: {
                  el: 'Ποιος έδωσε στον κρύσταλλο τις ίσιες πλευρές του;',
                  en: 'Who gave the crystal its flat, straight faces?',
                },
                answers: [
                  { el: 'Κανείς· μεγάλωσε έτσι μόνος του', en: 'Nobody; it grew that way on its own' },
                  { el: 'Ένας κόφτης διαμαντιών στη Βιέννη, το 1978', en: 'A diamond cutter in Vienna, in 1978' },
                  { el: 'Το νερό ενός ποταμού, που τον έτριβε για αιώνες', en: 'A river, which rubbed at it for centuries' },
                  { el: 'Οι εργάτες του ορυχείου, με σφυρί και σκαρπέλο', en: 'The miners, with a hammer and a chisel' },
                ],
                explanation: {
                  el: 'Οι κρύσταλλοι μεγαλώνουν βάζοντας τα άτομά τους σε τάξη. Οι επίπεδες πλευρές είναι αυτή η τάξη, ιδωμένη απέξω.',
                  en: 'Crystals grow by stacking their atoms in order. The flat faces are what that order looks like from outside.',
                },
              },
            },
            {
              id: 'vienna-naturhistorisches-florentine-copy',
              name: {
                el: 'Το αντίγραφο του Φλωρεντινού διαμαντιού',
                en: 'The copy of the Florentine Diamond',
              },
              blurb: {
                el:
                  'Σε μια βιτρίνα λάμπει ένα κίτρινο διαμάντι με εκατόν είκοσι έξι έδρες. Δεν ' +
                  'είναι διαμάντι. Είναι ένα αντίγραφο από γυαλί, φτιαγμένο το 1865, γιατί το ' +
                  'αληθινό δεν βρίσκεται πια εδώ. Το Φλωρεντινό ήταν μία από τις πιο διάσημες ' +
                  'πέτρες της Ευρώπης και ανήκε στους Αψβούργους. Μετά το 1918, όταν τελείωσε ' +
                  'η αυτοκρατορία, χάθηκε. Κανείς δεν ξέρει αν κόπηκε σε μικρότερα κομμάτια, ' +
                  'αν πουλήθηκε κρυφά ή αν κάθεται κάπου σε ένα συρτάρι. Το μουσείο δείχνει το ' +
                  'γυαλί και λέει την αλήθεια στην ταμπέλα.',
                en:
                  'In one case a yellow diamond glitters, cut with a hundred and twenty-six ' +
                  'facets. It is not a diamond. It is a copy in glass, made in 1865, because ' +
                  'the real one is no longer here. The Florentine was one of the most famous ' +
                  'stones in Europe and belonged to the Habsburgs. After 1918, when the empire ' +
                  'ended, it disappeared. Nobody knows whether it was cut into smaller stones, ' +
                  'sold in secret, or is sitting in a drawer somewhere. The museum shows the ' +
                  'glass and tells the truth on the label.',
              },
              question: {
                q: {
                  el: 'Γιατί το μουσείο εκθέτει ένα γυάλινο αντίγραφο και όχι το αληθινό διαμάντι;',
                  en: 'Why does the museum display a glass copy instead of the real diamond?',
                },
                answers: [
                  { el: 'Το αληθινό χάθηκε και δεν βρέθηκε ποτέ', en: 'The real one vanished and was never found' },
                  {
                    el: 'Το αληθινό είναι πολύ βαρύ για τη βιτρίνα του μουσείου',
                    en: 'The real one is too heavy for the museum’s display case',
                  },
                  {
                    el: 'Το αληθινό ταξιδεύει συνέχεια σε εκθέσεις άλλων χωρών',
                    en: 'The real one is always travelling to shows in other countries',
                  },
                  {
                    el: 'Το αληθινό ραγίζει στο φως και φυλάγεται στο σκοτάδι',
                    en: 'The real one cracks in light and is kept in the dark',
                  },
                ],
                explanation: {
                  el: 'Το Φλωρεντινό εξαφανίστηκε μετά το 1918. Το αντίγραφο του 1865 είναι ό,τι έμεινε για να το δούμε.',
                  en: 'The Florentine vanished after 1918. The copy from 1865 is all that is left to look at.',
                },
              },
            },
          ],
        },
        {
          id: 'vienna-naturhistorisches-dinosaurs',
          emoji: '🦖',
          name: { el: 'Η αίθουσα των δεινοσαύρων', en: 'The dinosaur hall' },
          intro: {
            el:
              'Στη μέση αυτής της αίθουσας υπάρχει μια πλατφόρμα, και πάνω της στέκονται ' +
              'τρεις σκελετοί που μπορείς να τους γυρίσεις ολόγυρα. Δεν υπάρχει τζάμι ' +
              'ανάμεσά σας. Ο ένας από τους τρεις είναι τόσο μακρύς που δεν χωράει σε ' +
              'φωτογραφία, και κάπου εκεί κοντά κάτι κουνιέται και γυρίζει το κεφάλι του ' +
              'προς το μέρος σου.',
            en:
              'In the middle of this hall there is a platform, and on it stand three ' +
              'skeletons you can walk all the way around. There is no glass between you and ' +
              'them. One of the three is so long that it will not fit in a photograph, and ' +
              'somewhere close by something moves and turns its head towards you.',
          },
          exhibits: [
            {
              id: 'vienna-naturhistorisches-diplodocus',
              name: { el: 'Ο Ντίπι, ο Diplodocus', en: 'Dippy the Diplodocus' },
              blurb: {
                el:
                  'Ο σκελετός που κυριαρχεί στην αίθουσα ανήκει σε έναν Diplodocus carnegii, ' +
                  'και όλοι εδώ τον φωνάζουν Ντίπι. Δεν είναι κόκαλα· είναι εκμαγείο, δηλαδή ' +
                  'ακριβές αντίγραφο των αληθινών οστών. Ο Άντριου Κάρνεγκι, ένας πάμπλουτος ' +
                  'βιομήχανος, παρήγγειλε τέτοια αντίγραφα και τα χάρισε σε μουσεία της ' +
                  'Ευρώπης. Της Βιέννης το καταγράφηκε το 1909. Ο Diplodocus είχε λαιμό σαν ' +
                  'γερανό, ουρά σαν καμτσίκι και έτρωγε μόνο φυτά. Το κεφάλι του, σε σχέση με ' +
                  'το σώμα του, είναι κωμικά μικρό.',
                en:
                  'The skeleton that dominates the hall belongs to a Diplodocus carnegii, and ' +
                  'everyone here calls him Dippy. These are not bones; it is a cast, an exact ' +
                  'copy of the real skeleton. Andrew Carnegie, an enormously rich ' +
                  'industrialist, had copies like this made and gave them to museums across ' +
                  'Europe. Vienna’s was entered in the books in 1909. Diplodocus had a neck ' +
                  'like a crane, a tail like a whip, and ate nothing but plants. Its head, ' +
                  'compared with its body, is comically small.',
              },
              question: {
                q: { el: 'Τι ακριβώς είναι ο σκελετός του Ντίπι;', en: 'What exactly is Dippy’s skeleton?' },
                answers: [
                  { el: 'Ένα αντίγραφο από εκμαγείο', en: 'A copy made from a cast' },
                  {
                    el: 'Τα αληθινά κόκαλα ενός ζώου που βρέθηκε στην Αυστρία',
                    en: 'The real bones of an animal found in Austria',
                  },
                  {
                    el: 'Ένα γλυπτό από πέτρα, σκαλισμένο από έναν καλλιτέχνη',
                    en: 'A sculpture in stone, carved by an artist',
                  },
                  {
                    el: 'Κόκαλα από πολλά διαφορετικά ζώα, ενωμένα μεταξύ τους',
                    en: 'Bones from many different animals, joined together',
                  },
                ],
                explanation: {
                  el: 'Τα εκμαγεία επιτρέπουν σε δέκα μουσεία να δείξουν τον ίδιο δεινόσαυρο. Τα αληθινά κόκαλα μπορούν να είναι μόνο σε ένα μέρος.',
                  en: 'Casts let ten museums show the same dinosaur. The real bones can only be in one place at a time.',
                },
              },
            },
            {
              id: 'vienna-naturhistorisches-allosaurus',
              name: { el: 'Ο αλλόσαυρος που κουνιέται', en: 'The Allosaurus that moves' },
              blurb: {
                el:
                  'Στην ίδια πλατφόρμα στέκεται και κάτι που δεν είναι σκελετός. Είναι ένα ' +
                  'ρομποτικό μοντέλο αλλόσαυρου, πάνω από έξι μέτρα μακρύ, με δέρμα, μάτια ' +
                  'και αναπνοή. Κουνάει την ουρά του, γέρνει το κεφάλι και κοιτάζει. Το ' +
                  'μέγεθός του αντιστοιχεί σε νεαρό ζώο, όχι σε ενήλικο: ο αλλόσαυρος ήταν το ' +
                  'πιο επικίνδυνο αρπακτικό στο τέλος της Ιουρασικής περιόδου. Δίπλα του, στην ' +
                  'ίδια πλατφόρμα, ο σκελετός ενός αληθινού αλλόσαυρου σου δείχνει τι υπάρχει ' +
                  'κάτω από όλο αυτό το δέρμα.',
                en:
                  'On the same platform stands something that is not a skeleton at all. It is ' +
                  'a robotic model of an Allosaurus, more than six metres long, with skin, ' +
                  'eyes and breath. It swings its tail, tilts its head and looks at you. Its ' +
                  'size matches a young animal rather than a full-grown one: Allosaurus was ' +
                  'the most dangerous hunter of the late Jurassic. Beside it, on the same ' +
                  'platform, the skeleton of a real Allosaurus shows you what is underneath ' +
                  'all that skin.',
              },
              question: {
                q: {
                  el: 'Γιατί το κινούμενο μοντέλο στέκεται δίπλα σε έναν σκελετό αλλόσαυρου;',
                  en: 'Why does the moving model stand beside an Allosaurus skeleton?',
                },
                answers: [
                  { el: 'Για να δεις το ίδιο ζώο μέσα και έξω', en: 'So you can see the same animal inside and out' },
                  {
                    el: 'Για να καταλάβεις πόσο μεγαλύτερος ήταν ο σκελετός',
                    en: 'So you understand how much bigger the skeleton was',
                  },
                  {
                    el: 'Γιατί το μοντέλο στηρίζεται πάνω στον ίδιο τον σκελετό',
                    en: 'Because the model is held up by the skeleton itself',
                  },
                  {
                    el: 'Γιατί τα δύο βρέθηκαν μαζί στο ίδιο λατομείο',
                    en: 'Because the two were found together in one quarry',
                  },
                ],
                explanation: {
                  el: 'Τα κόκαλα δείχνουν τη μηχανή. Το μοντέλο δείχνει το ζώο που την κουβαλούσε.',
                  en: 'The bones show the machine. The model shows the animal that carried it around.',
                },
              },
            },
            {
              id: 'vienna-naturhistorisches-iguanodon',
              name: { el: 'Ο ιγκουανόδοντας', en: 'The Iguanodon' },
              blurb: {
                el:
                  'Ο τρίτος μεγάλος σκελετός της πλατφόρμας είναι ένας ιγκουανόδοντας, ' +
                  'φυτοφάγος του Κρητιδικού. Οι πρώτοι επιστήμονες που τον μελέτησαν έκαναν ' +
                  'ένα διάσημο λάθος. Βρήκαν ένα μυτερό κόκαλο και το κόλλησαν στη μύτη του, ' +
                  'σαν κέρατο ρινόκερου. Πολύ αργότερα, όταν βρέθηκαν ολόκληροι σκελετοί ' +
                  'μαζεμένοι σε ένα ορυχείο στο Βέλγιο, κατάλαβαν την αλήθεια: το μυτερό ' +
                  'κόκαλο ήταν ο αντίχειράς του. Ο ιγκουανόδοντας είχε σε κάθε χέρι ένα καρφί ' +
                  'αντί για αντίχειρα, τρία δάχτυλα για βάδισμα και ένα μικρό λυγιστό ' +
                  'δαχτυλάκι.',
                en:
                  'The third big skeleton on the platform is an Iguanodon, a plant-eater of ' +
                  'the Cretaceous. The first scientists to study it made a famous mistake. ' +
                  'They found a pointed bone and stuck it on its nose, like a rhinoceros horn. ' +
                  'Much later, when whole skeletons turned up together in a mine in Belgium, ' +
                  'they understood: the pointed bone was its thumb. Iguanodon had a spike ' +
                  'instead of a thumb on each hand, three fingers it could walk on, and one ' +
                  'small bendy finger at the side.',
              },
              question: {
                q: {
                  el: 'Πού ανήκε τελικά το μυτερό κόκαλο του ιγκουανόδοντα;',
                  en: 'Where did the Iguanodon’s pointed bone actually belong?',
                },
                answers: [
                  { el: 'Στον αντίχειρά του', en: 'On its thumb' },
                  { el: 'Στην άκρη της ουράς του, σαν όπλο', en: 'At the tip of its tail, as a weapon' },
                  { el: 'Πάνω στη μύτη του, όπως στον ρινόκερο', en: 'On its nose, like a rhinoceros' },
                  { el: 'Στη ράχη του, σε μια σειρά από αγκάθια', en: 'Along its back, in a row of spines' },
                ],
                explanation: {
                  el: 'Το λάθος κράτησε δεκαετίες. Το διόρθωσαν οι σκελετοί που βρέθηκαν ολόκληροι σε βελγικό ορυχείο.',
                  en: 'The mistake lasted for decades. Complete skeletons found in a Belgian mine put it right.',
                },
              },
            },
          ],
        },
        {
          id: 'vienna-naturhistorisches-venus',
          emoji: '🗿',
          name: { el: 'Το δωμάτιο της Αφροδίτης', en: 'The Venus room' },
          intro: {
            el:
              'Πιο πέρα στο μουσείο, οι αίθουσες γεμίζουν με πράγματα φτιαγμένα από ' +
              'ανθρώπινα χέρια: πέτρινα εργαλεία, κοσμήματα, τάφους. Δύο μικροσκοπικές μορφές ' +
              'έχουν δικό τους σκοτεινό δωμάτιο και δικό τους φως. Είναι από τα αρχαιότερα ' +
              'γλυπτά που έχουν βρεθεί στον κόσμο, και οι δύο βγήκαν από αυστριακό χώμα, όχι ' +
              'μακριά η μία από την άλλη.',
            en:
              'Further into the museum, the halls fill with things made by human hands: stone ' +
              'tools, jewellery, graves. Two tiny figures have a dark room and a light of ' +
              'their own. They are among the oldest sculptures ever found anywhere in the ' +
              'world, and both of them came out of Austrian ground, not far from each other.',
          },
          exhibits: [
            {
              id: 'vienna-naturhistorisches-venus-willendorf',
              name: { el: 'Η Αφροδίτη του Βίλεντορφ', en: 'The Venus of Willendorf' },
              blurb: {
                el:
                  'Έχει ύψος έντεκα εκατοστά και χωράει στην παλάμη σου. Είναι σκαλισμένη σε ' +
                  'ασβεστόλιθο πριν από περίπου 29.500 χρόνια και βρέθηκε το 1908 δίπλα στον ' +
                  'Δούναβη, στο Βίλεντορφ. Πάνω της σώζονται ίχνη κόκκινης ώχρας, άρα κάποτε ' +
                  'ήταν βαμμένη. Το κεφάλι της δεν έχει πρόσωπο· έχει σειρές από σκαλισμένους ' +
                  'κύκλους, ίσως πλεξούδες, ίσως καπέλο. Δεν ξέρουμε ποιος την έφτιαξε ούτε ' +
                  'γιατί. Ξέρουμε ότι κάποιος, πριν από τριακόσιους αιώνες, κάθισε με ένα ' +
                  'κομμάτι πέτρα και δούλεψε μέχρι να γίνει αυτό.',
                en:
                  'She is eleven centimetres tall and fits in the palm of your hand. She was ' +
                  'carved from limestone about 29,500 years ago and found in 1908 beside the ' +
                  'Danube, at Willendorf. Traces of red ochre survive on her, so she was once ' +
                  'painted. Her head has no face; it has rows of carved circles instead, ' +
                  'perhaps plaits, perhaps a cap. We do not know who made her, or why. We do ' +
                  'know that someone, three hundred centuries ago, sat down with a piece of ' +
                  'stone and worked until it became this.',
              },
              question: {
                q: { el: 'Πόσο μεγάλη είναι η Αφροδίτη του Βίλεντορφ;', en: 'How big is the Venus of Willendorf?' },
                answers: [
                  { el: 'Έντεκα εκατοστά', en: 'Eleven centimetres' },
                  { el: 'Περίπου ένα μέτρο, όσο ένα μικρό παιδί', en: 'About a metre, the height of a small child' },
                  { el: 'Τρία μέτρα, όσο δύο άνθρωποι ο ένας πάνω στον άλλο', en: 'Three metres, two people standing on each other' },
                  { el: 'Μισό μέτρο, όσο ένας μεγάλος σκύλος', en: 'Half a metre, the size of a big dog' },
                ],
                explanation: {
                  el: 'Χωράει σε μια παλάμη. Γι’ αυτό μπορούσε να ταξιδεύει μαζί με τους ανθρώπους που την έφτιαξαν.',
                  en: 'She fits in a palm. That is how she could travel with the people who made her.',
                },
              },
            },
            {
              id: 'vienna-naturhistorisches-venus-galgenberg',
              name: { el: 'Η Φάνι του Γκάλγκενμπεργκ', en: 'Fanny of the Galgenberg' },
              blurb: {
                el:
                  'Στην ίδια βιτρίνα κάθεται μια δεύτερη, πολύ μικρότερη μορφή: 7,2 εκατοστά ' +
                  'από πράσινη πέτρα σερπεντίνη. Βρέθηκε το 1988 κοντά στο Στρατσίνγκ, λίγα ' +
                  'χιλιόμετρα από το Βίλεντορφ, και είναι πολύ παλαιότερη από τη γειτόνισσά ' +
                  'της: περίπου 36.000 ετών. Την ονόμασαν Φάνι από μια Αυστριακή χορεύτρια, ' +
                  'γιατί το σώμα της φαίνεται να κινείται, με το ένα χέρι σηκωμένο. Οι δύο ' +
                  'μορφές εκτίθενται μαζί επίτηδες, για να δει κανείς πόσο διαφορετικά μπορεί ' +
                  'να βγει η ίδια ιδέα.',
                en:
                  'In the same case sits a second, much smaller figure: 7.2 centimetres of ' +
                  'green serpentine stone. It was found in 1988 near Stratzing, a few ' +
                  'kilometres from Willendorf, and it is far older than its neighbour: about ' +
                  '36,000 years. It was nicknamed Fanny after an Austrian dancer, because the ' +
                  'body looks as if it is moving, with one arm raised. The two figures are ' +
                  'shown side by side on purpose, so you can see how differently the same idea ' +
                  'can turn out.',
              },
              question: {
                q: { el: 'Ποια από τις δύο μορφές είναι η παλαιότερη;', en: 'Which of the two figures is the older one?' },
                answers: [
                  { el: 'Η Φάνι, με περίπου 36.000 χρόνια', en: 'Fanny, at about 36,000 years' },
                  { el: 'Η Αφροδίτη του Βίλεντορφ, με περίπου 29.500 χρόνια', en: 'The Venus of Willendorf, at about 29,500 years' },
                  { el: 'Είναι ακριβώς της ίδιας ηλικίας, από το ίδιο χέρι', en: 'They are exactly the same age, from the same hand' },
                  { el: 'Δεν μπορεί να μετρηθεί η ηλικία τους με κανέναν τρόπο', en: 'There is no way at all to measure their age' },
                ],
                explanation: {
                  el: 'Η μικρότερη σε μέγεθος είναι η μεγαλύτερη σε ηλικία, κατά έξι χιλιάδες χρόνια περίπου.',
                  en: 'The smaller of the two is the older, by about six thousand years.',
                },
              },
            },
            {
              id: 'vienna-naturhistorisches-hallstatt',
              name: { el: 'Τα ευρήματα του Χάλστατ', en: 'The finds from Hallstatt' },
              blurb: {
                el:
                  'Ψηλά στις Άλπεις, σε ένα χωριό που λέγεται Χάλστατ, υπάρχει ένα ορυχείο ' +
                  'αλατιού που δουλεύεται εδώ και τρεις χιλιάδες χρόνια. Το αλάτι κάνει κάτι ' +
                  'μαγικό: δεν αφήνει τίποτα να σαπίσει. Έτσι μέσα στις στοές σώθηκαν ξύλο, ' +
                  'δέρμα, σκοινιά και υφάσματα από την Εποχή του Χαλκού, δηλαδή ακριβώς τα ' +
                  'πράγματα που κανονικά χάνονται. Το μουσείο εκθέτει σκαπάνες από μπρούντζο, ' +
                  'έναν δερμάτινο σάκο για να κουβαλάνε το αλάτι στην πλάτη, και κομμάτια ' +
                  'μάλλινου ρούχου με ρίγες και χρώματα. Οι ανασκαφές εκεί συνεχίζονται από ' +
                  'τον 19ο αιώνα.',
                en:
                  'High in the Alps, in a village called Hallstatt, there is a salt mine that ' +
                  'has been worked for three thousand years. Salt does something magical: it ' +
                  'lets nothing rot. So inside the tunnels wood, leather, rope and cloth from ' +
                  'the Bronze Age survived, which are exactly the things that normally ' +
                  'disappear. The museum shows bronze picks, a leather sack for carrying salt ' +
                  'on a miner’s back, and pieces of woollen clothing with stripes and colours ' +
                  'still in them. The digging up there has been going on since the 19th ' +
                  'century.',
              },
              question: {
                q: {
                  el: 'Γιατί σώθηκαν στο ορυχείο ρούχα και σκοινιά τριών χιλιάδων ετών;',
                  en: 'Why did cloth and rope three thousand years old survive in the mine?',
                },
                answers: [
                  { el: 'Το αλάτι δεν τα άφησε να σαπίσουν', en: 'Salt did not let them rot' },
                  { el: 'Τα τύλιξαν σε πηλό οι ίδιοι οι μεταλλωρύχοι', en: 'The miners themselves wrapped them in clay' },
                  { el: 'Ο πάγος του βουνού τα κράτησε παγωμένα από τότε', en: 'The mountain’s ice kept them frozen ever since' },
                  { el: 'Τα έφτιαξαν από υλικά που δεν καταστρέφονται ποτέ', en: 'They were made of materials that never break down' },
                ],
                explanation: {
                  el: 'Το αλάτι τραβάει την υγρασία. Χωρίς νερό, τα μικρόβια που σαπίζουν τα πράγματα δεν μπορούν να ζήσουν.',
                  en: 'Salt pulls the water out. Without water, the tiny creatures that rot things cannot live.',
                },
              },
            },
          ],
        },
      ],
      riddles: [
        {
          id: 'vienna-naturhistorisches-riddle-1',
          difficulty: 1,
          prompt: {
            el:
              'Χωράω στην παλάμη σου, αλλά είμαι σχεδόν τριάντα χιλιάδων ετών. Δεν έχω ' +
              'πρόσωπο, μόνο σειρές από κύκλους στο κεφάλι μου. Κάποτε ήμουν βαμμένη ' +
              'κόκκινη, και με βρήκαν δίπλα σε ένα ποτάμι.',
            en:
              'I fit in the palm of your hand, but I am almost thirty thousand years old. I ' +
              'have no face, only rows of circles on my head. I was once painted red, and I ' +
              'was found beside a river.',
          },
          hint: {
            el: 'Δεν είμαι η πιο παλιά στη βιτρίνα, είμαι όμως η πιο διάσημη.',
            en: 'I am not the oldest one in the case, but I am the most famous.',
          },
          answerExhibitId: 'vienna-naturhistorisches-venus-willendorf',
        },
        {
          id: 'vienna-naturhistorisches-riddle-2',
          difficulty: 2,
          prompt: {
            el:
              'Δεν έχω κόκαλα, έχω δέρμα και μάτια. Στέκομαι πάνω στην ίδια πλατφόρμα με ' +
              'τους σκελετούς, αλλά εγώ είμαι αυτός που κουνάει την ουρά του και γυρίζει το ' +
              'κεφάλι προς το μέρος σου.',
            en:
              'I have no bones, I have skin and eyes. I stand on the same platform as the ' +
              'skeletons, but I am the one that swings its tail and turns its head towards ' +
              'you.',
          },
          hint: {
            el: 'Τον αληθινό μου σκελετό μπορείς να τον δεις ακριβώς δίπλα μου.',
            en: 'You can see my real skeleton standing right next to me.',
          },
          answerExhibitId: 'vienna-naturhistorisches-allosaurus',
        },
        {
          id: 'vienna-naturhistorisches-riddle-3',
          difficulty: 2,
          prompt: {
            el:
              'Είμαι λουλούδια που δεν μαράθηκαν ποτέ, γιατί κανένα πέταλό μου δεν είναι ' +
              'φυτό. Μια αυτοκράτειρα με έκρυψε ανάμεσα στις πέτρες του άντρα της, ως ' +
              'έκπληξη για τη γιορτή του.',
            en:
              'I am flowers that never wilted, because not one of my petals is a plant. An ' +
              'empress hid me among her husband’s stones, as a surprise for his name day.',
          },
          hint: {
            el: 'Δώδεκα έντομα κάθονται πάνω μου και δεν πετούν ποτέ.',
            en: 'Twelve insects sit on me and never fly away.',
          },
          answerExhibitId: 'vienna-naturhistorisches-gem-bouquet',
        },
        {
          id: 'vienna-naturhistorisches-riddle-4',
          difficulty: 3,
          prompt: {
            el:
              'Ταξίδεψα εκατομμύρια χρόνια μέσα στο κρύο και τελείωσα το ταξίδι μου σε ένα ' +
              'χωράφι, μια μέρα του Ιουνίου του 1866. Ζυγίζω σχεδόν τριακόσια κιλά και ' +
              'στέκομαι στη μέση της βιτρίνας.',
            en:
              'I travelled for millions of years in the cold and finished my journey inside a ' +
              'field, on a June day in 1866. I weigh almost three hundred kilograms and I ' +
              'stand in the middle of the case.',
          },
          hint: {
            el: 'Γύρω μου υπάρχουν άλλοι χίλιοι, αλλά κανένας τόσο βαρύς.',
            en: 'There are a thousand others around me, but none as heavy.',
          },
          answerExhibitId: 'vienna-naturhistorisches-knyahinya',
        },
      ],
    },
  },
  // ------------------------------------------------- kunsthistorisches museum
  {
    id: 'vienna-kunsthistorisches',
    cityId: 'vienna',
    emoji: '🖼️',
    category: 'museum',
    difficulty: 3,

    name: { el: 'Το Μουσείο Ιστορίας της Τέχνης', en: 'The Kunsthistorisches Museum' },
    tagline: {
      el: 'Το δίδυμο κτίριο, με τους πίνακες μέσα του',
      en: 'The twin building, with the paintings inside it',
    },
    story: {
      el:
        'Το Μουσείο Ιστορίας της Τέχνης άνοιξε το 1891, δίδυμο του Μουσείου Φυσικής ' +
        'Ιστορίας, με μια πλατεία ανάμεσά τους. Χτίστηκε για να χωρέσει ό,τι είχαν μαζέψει ' +
        'οι Αψβούργοι σε τέσσερις αιώνες, και εκεί κρύβεται το αστείο: ελάχιστα από όσα ' +
        'υπάρχουν μέσα είναι αυστριακά. Η οικογένεια αγόραζε, κληρονομούσε και έπαιρνε ' +
        'προίκες σε όλη την Ευρώπη, οπότε οι αίθουσες είναι γεμάτες φλαμανδικούς, ιταλικούς ' +
        'και ισπανικούς πίνακες, καθώς και αιγυπτιακά ευρήματα. Το πιο σπάνιο πράγμα εδώ ' +
        'είναι δώδεκα πίνακες ενός μόνο ζωγράφου, του Πίτερ Μπρέγκελ του Πρεσβύτερου. Από ' +
        'αυτόν σώζονται περίπου σαράντα έργα σε ολόκληρο τον κόσμο, άρα σχεδόν το ένα τρίτο ' +
        'βρίσκεται σε αυτό το κτίριο. Ακόμα και η σκάλα είναι έκθεμα: στην κορυφή της ένας ' +
        'μαρμάρινος Θησέας, και δώδεκα μέτρα ψηλά, στριμωγμένες ανάμεσα στις κολόνες, ' +
        'ζωγραφιές που έκανε ο Γκούσταβ Κλιμτ όταν ήταν ακόμα νέος και άγνωστος.',
      en:
        'The Kunsthistorisches Museum opened in 1891, the twin of the Natural History Museum, ' +
        'with a square between them. It was built to hold what the Habsburgs had gathered ' +
        'over four centuries, and that is where the joke hides: almost nothing inside it is ' +
        'Austrian. The family bought, inherited and married its way across Europe, so the ' +
        'halls are full of Flemish, Italian and Spanish paintings, and Egyptian finds as ' +
        'well. The rarest thing here is twelve paintings by one artist, Pieter Bruegel the ' +
        'Elder. Only about forty of his panels survive anywhere in the world, so nearly a ' +
        'third of them are in this one building. Even the staircase is an exhibit: a marble ' +
        'Theseus at the top of it, and twelve metres up, squeezed between the columns, ' +
        'paintings made by Gustav Klimt while he was still young and unknown.',
    },
    facts: [
      {
        el: 'Άνοιξε το 1891 και είναι το δίδυμο κτίριο του Μουσείου Φυσικής Ιστορίας.',
        en: 'It opened in 1891 and is the twin of the Natural History Museum.',
      },
      {
        el: 'Έχει δώδεκα πίνακες του Πίτερ Μπρέγκελ, τη μεγαλύτερη συλλογή του στον κόσμο.',
        en: 'It has twelve paintings by Pieter Bruegel, the largest collection of him anywhere.',
      },
      {
        el: 'Σώζονται περίπου σαράντα έργα του Μπρέγκελ συνολικά, οπότε εδώ βρίσκεται σχεδόν το ένα τρίτο.',
        en: 'About forty Bruegel panels survive in total, so nearly a third of them are here.',
      },
    ],
    location: {
      lat: 48.20388,
      lng: 16.3616,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q95569', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Kunsthistorisches Museum', deltaM: 0 },
      ],
      verifiedAt: '2026-09-12',
      findIt: {
        el: 'Είναι το νότιο από τα δύο δίδυμα κτίρια, εκείνο που βλέπει προς την Όπερα.',
        en: 'It is the southern one of the twin buildings, the one facing the Opera.',
      },
    },
    question: {
      q: {
        el: 'Γιατί ελάχιστα από τα έργα του μουσείου είναι αυστριακά;',
        en: 'Why is almost nothing in this museum Austrian?',
      },
      answers: [
        {
          el: 'Οι Αψβούργοι μάζευαν έργα από όλη την Ευρώπη',
          en: 'The Habsburgs collected from all over Europe',
        },
        {
          el: 'Τα αυστριακά έργα στάλθηκαν σε άλλα μουσεία της χώρας',
          en: 'The Austrian works were sent to other museums in the country',
        },
        {
          el: 'Στην Αυστρία δεν υπήρχαν ζωγράφοι εκείνη την εποχή',
          en: 'There were no painters in Austria at that time',
        },
        {
          el: 'Τα αυστριακά έργα καταστράφηκαν σε πυρκαγιά του 1891',
          en: 'The Austrian works were destroyed in a fire in 1891',
        },
      ],
      explanation: {
        el:
          'Αγόραζαν, κληρονομούσαν και έπαιρναν προίκες σε πολλές χώρες. Η συλλογή είναι ο ' +
          'χάρτης μιας οικογένειας, όχι μιας χώρας.',
        en:
          'They bought, inherited and married across many countries. The collection maps a ' +
          'family, not a country.',
      },
    },

    museum: {
      doorNote: {
        el: 'Σήκωσε το κεφάλι στη σκάλα πριν ανέβεις: οι πιο ψηλές ζωγραφιές είναι δώδεκα μέτρα πάνω σου.',
        en: 'Look up on the staircase before you climb it: the highest paintings are twelve metres above you.',
      },
      rooms: [
        {
          id: 'vienna-kunsthistorisches-bruegel',
          emoji: '❄️',
          name: { el: 'Η αίθουσα του Μπρέγκελ', en: 'The Bruegel room' },
          intro: {
            el:
              'Ένα μόνο δωμάτιο, και μέσα του δώδεκα πίνακες του ίδιου ανθρώπου. Ο Μπρέγκελ ' +
              'ζωγράφιζε χωριά, χιόνι, γάμους και παιδιά, σε μια εποχή που οι περισσότεροι ' +
              'ζωγράφοι έκαναν μόνο αγίους και βασιλιάδες. Οι πίνακές του θέλουν χρόνο: όσο ' +
              'πιο κοντά πλησιάζεις, τόσο περισσότερα μικρά πράγματα ανακαλύπτεις να ' +
              'συμβαίνουν στις γωνίες τους.',
            en:
              'One room, and inside it twelve paintings by the same man. Bruegel painted ' +
              'villages, snow, weddings and children at a time when most painters did only ' +
              'saints and kings. His pictures need time: the closer you get, the more small ' +
              'things you find happening in the corners of them.',
          },
          exhibits: [
            {
              id: 'vienna-kunsthistorisches-hunters-snow',
              name: { el: 'Οι κυνηγοί στο χιόνι', en: 'The Hunters in the Snow' },
              blurb: {
                el:
                  'Τρεις κυνηγοί κατεβαίνουν έναν λόφο με τα σκυλιά τους. Το χιόνι είναι ' +
                  'βαθύ, τα σκυλιά έχουν σκυμμένα κεφάλια, και το μόνο θήραμα που κουβαλούν ' +
                  'είναι μια αλεπού. Δεν πήγε καλά η μέρα τους. Πιο κάτω, στις παγωμένες ' +
                  'λίμνες, ο κόσμος πατινάρει και παίζει. Ο Μπρέγκελ τον ζωγράφισε το 1565 ως ' +
                  'μέρος μιας σειράς έξι πινάκων για τις εποχές του χρόνου· πέντε σώζονται και ' +
                  'οι τρεις είναι σε αυτή την αίθουσα. Κοίτα το πουλί στη μέση: πιάστηκε στη ' +
                  'στιγμή που κατεβαίνει.',
                en:
                  'Three hunters come down a hill with their dogs. The snow is deep, the ' +
                  'dogs’ heads hang low, and the only catch they carry is one fox. Their day ' +
                  'did not go well. Below them, on frozen ponds, people are skating and ' +
                  'playing. Bruegel painted this in 1565 as part of a set of six pictures ' +
                  'about the times of the year; five survive, and three of them are in this ' +
                  'room. Look at the bird in the middle: it is caught in the act of coming ' +
                  'down.',
              },
              question: {
                q: {
                  el: 'Τι μας λέει η αλεπού που κουβαλούν οι κυνηγοί;',
                  en: 'What does the fox the hunters carry tell us?',
                },
                answers: [
                  { el: 'Ότι το κυνήγι πήγε άσχημα', en: 'That the hunt went badly' },
                  {
                    el: 'Ότι γύριζαν από γιορτή στο διπλανό χωριό',
                    en: 'That they were coming back from a feast in the next village',
                  },
                  {
                    el: 'Ότι το χιόνι είχε μόλις αρχίσει να λιώνει',
                    en: 'That the snow had only just begun to melt',
                  },
                  {
                    el: 'Ότι τα σκυλιά τους ήταν τα καλύτερα της περιοχής',
                    en: 'That their dogs were the best in the whole area',
                  },
                ],
                explanation: {
                  el: 'Μία αλεπού για τρεις κυνηγούς και μια αγέλη σκυλιά είναι πολύ λίγο φαγητό για έναν χειμώνα.',
                  en: 'One fox for three hunters and a pack of dogs is very little food for a winter.',
                },
              },
            },
            {
              id: 'vienna-kunsthistorisches-childrens-games',
              name: { el: 'Τα παιχνίδια των παιδιών', en: 'Children’s Games' },
              blurb: {
                el:
                  'Ζωγραφισμένος το 1560, αυτός ο πίνακας δεν έχει κεντρικό ήρωα. Έχει μια ' +
                  'πλατεία γεμάτη παιδιά, γύρω στα διακόσια, και το καθένα κάνει κάτι ' +
                  'διαφορετικό. Οι ιστορικοί έχουν μετρήσει πάνω από ογδόντα διαφορετικά ' +
                  'παιχνίδια μέσα του: σβούρες, τσέρκια, κουτσό, ξυλοπόδαρα, κρυφτό, καβάλα ο ' +
                  'ένας στον άλλο. Πολλά τα παίζουν ακόμα τα παιδιά σήμερα, τετρακόσια εξήντα ' +
                  'χρόνια μετά. Δεν υπάρχει ούτε ένας μεγάλος στην εικόνα. Ο Μπρέγκελ άφησε ' +
                  'ολόκληρη την πόλη στα παιδιά, κι εκείνα την πήραν.',
                en:
                  'Painted in 1560, this picture has no hero in the middle. It has a square ' +
                  'full of children, around two hundred of them, and every one is doing ' +
                  'something different. Historians have counted more than eighty different ' +
                  'games in it: spinning tops, hoops, hopscotch, stilts, hide and seek, riding ' +
                  'on each other’s shoulders. Many of them are still played today, four ' +
                  'hundred and sixty years later. There is not one grown-up in the picture. ' +
                  'Bruegel handed the whole town over to the children, and they took it.',
              },
              question: {
                q: {
                  el: 'Πόσα διαφορετικά παιχνίδια έχουν μετρήσει μέσα στον πίνακα;',
                  en: 'How many different games have been counted in the painting?',
                },
                answers: [
                  { el: 'Πάνω από ογδόντα', en: 'More than eighty' },
                  {
                    el: 'Ακριβώς δώδεκα, ένα για κάθε μήνα του χρόνου',
                    en: 'Exactly twelve, one for each month of the year',
                  },
                  {
                    el: 'Τρία, που επαναλαμβάνονται ξανά και ξανά παντού',
                    en: 'Three, repeated over and over again everywhere',
                  },
                  {
                    el: 'Κανένα· τα παιδιά απλώς στέκονται και κοιτάζουν',
                    en: 'None; the children are only standing and looking',
                  },
                ],
                explanation: {
                  el: 'Ο πίνακας λειτουργεί σχεδόν σαν κατάλογος. Πολλά από αυτά τα παιχνίδια παίζονται ακόμα στις αυλές.',
                  en: 'The painting works almost as a catalogue. Many of those games are still played in playgrounds.',
                },
              },
            },
            {
              id: 'vienna-kunsthistorisches-tower-babel',
              name: { el: 'Ο Πύργος της Βαβέλ', en: 'The Tower of Babel' },
              blurb: {
                el:
                  'Ένας πύργος τόσο ψηλός που η κορυφή του μπαίνει στα σύννεφα, ζωγραφισμένος ' +
                  'το 1563. Η ιστορία λέει ότι οι άνθρωποι θέλησαν να χτίσουν ως τον ουρανό ' +
                  'και σταμάτησαν όταν έπαψαν να καταλαβαίνουν ο ένας τη γλώσσα του άλλου. Ο ' +
                  'Μπρέγκελ όμως ζωγράφισε και κάτι ακόμα: κοίτα καλά και θα δεις ότι ο πύργος ' +
                  'γέρνει. Οι αψίδες στη μία πλευρά δεν είναι στη σειρά. Ακόμα κι αν όλοι ' +
                  'μιλούσαν την ίδια γλώσσα, αυτό το κτίριο δεν επρόκειτο να σταθεί όρθιο.',
                en:
                  'A tower so tall that its top pushes into the clouds, painted in 1563. The ' +
                  'story goes that people set out to build up to heaven and stopped when they ' +
                  'could no longer understand each other’s language. But Bruegel painted ' +
                  'something else as well: look carefully and you will see the tower is ' +
                  'leaning. The arches on one side are out of line. Even if everyone had ' +
                  'spoken the same language, this building was never going to stand up.',
              },
              question: {
                q: { el: 'Τι λάθος έχει ο πύργος στον πίνακα;', en: 'What is wrong with the tower in the painting?' },
                answers: [
                  { el: 'Γέρνει και οι αψίδες του δεν είναι ίσιες', en: 'It leans, and its arches are not level' },
                  { el: 'Του λείπει εντελώς η πόρτα της εισόδου', en: 'It has no front door at all' },
                  { el: 'Είναι ζωγραφισμένος με λάθος χρώμα πέτρας', en: 'It is painted in the wrong colour of stone' },
                  { el: 'Δεν χωράει ολόκληρος μέσα στο κάδρο του πίνακα', en: 'It does not fit inside the frame of the picture' },
                ],
                explanation: {
                  el: 'Ο Μπρέγκελ έβαλε το λάθος στα θεμέλια, όχι στη γλώσσα. Ο πύργος θα έπεφτε έτσι κι αλλιώς.',
                  en: 'Bruegel put the mistake in the foundations, not in the language. The tower would have fallen anyway.',
                },
              },
            },
            {
              id: 'vienna-kunsthistorisches-peasant-wedding',
              name: { el: 'Ο χωριάτικος γάμος', en: 'The Peasant Wedding' },
              blurb: {
                el:
                  'Ένας γάμος μέσα σε αχυρώνα. Η νύφη κάθεται μπροστά σε ένα πράσινο πανί, με ' +
                  'τα χέρια σταυρωμένα και ένα μικρό χάρτινο στέμμα κρεμασμένο πάνω από το ' +
                  'κεφάλι της. Ο γαμπρός δεν εντοπίζεται εύκολα, και οι ιστορικοί μαλώνουν ' +
                  'ακόμα για το ποιος είναι. Δύο άντρες κουβαλούν πιάτα πάνω σε μια ' +
                  'ξεκρέμαστη πόρτα, γιατί δίσκος τόσο μεγάλος δεν υπήρχε. Στη γωνία, ένα ' +
                  'παιδί με πολύ μεγάλο καπέλο γλείφει με τα δάχτυλα ένα πιάτο. Ο πίνακας ' +
                  'είναι από το 1568 περίπου.',
                en:
                  'A wedding inside a barn. The bride sits in front of a green cloth with her ' +
                  'hands folded and a small paper crown hanging above her head. The groom is ' +
                  'not easy to spot, and historians still argue about which man he is. Two ' +
                  'servers carry plates on an unhinged door, because no tray that size ' +
                  'existed. In the corner, a child in a much too big hat is licking a plate ' +
                  'with its fingers. The painting dates from about 1568.',
              },
              question: {
                q: { el: 'Πάνω σε τι σερβίρουν το φαγητό στον γάμο;', en: 'What are the plates of food being carried on?' },
                answers: [
                  { el: 'Πάνω σε μια πόρτα', en: 'On a door' },
                  { el: 'Πάνω σε ένα ξύλινο κάρο με τέσσερις ρόδες', en: 'On a wooden cart with four wheels' },
                  { el: 'Πάνω σε ένα σεντόνι που κρατούν τέσσερις άνθρωποι', en: 'On a sheet held up by four people' },
                  { el: 'Πάνω σε μια σκάλα ξαπλωμένη στο πλάι', en: 'On a ladder laid on its side' },
                ],
                explanation: {
                  el: 'Ξεκρέμασαν μια πόρτα και την έκαναν δίσκο. Σε ένα χωριό, ό,τι υπάρχει γίνεται ό,τι χρειάζεται.',
                  en: 'They took a door off its hinges and made it a tray. In a village, whatever you have becomes whatever you need.',
                },
              },
            },
          ],
        },
        {
          id: 'vienna-kunsthistorisches-faces',
          emoji: '🍑',
          name: { el: 'Πρόσωπα', en: 'Faces' },
          intro: {
            el:
              'Σε αυτές τις αίθουσες η ζωγραφική κοιτάζει ανθρώπους στα μάτια. Υπάρχει ένα ' +
              'πρόσωπο φτιαγμένο εξ ολοκλήρου από φρούτα, ένα κορίτσι που το ζωγράφιζαν κάθε ' +
              'λίγα χρόνια για να το βλέπει η οικογένειά του να μεγαλώνει, ένας ζωγράφος που ' +
              'ζωγράφισε τον εαυτό του από πίσω, και μια μητέρα καθισμένη σε ένα λιβάδι.',
            en:
              'In these rooms painting looks people in the eye. There is a face made entirely ' +
              'out of fruit, a girl who was painted every few years so her family could watch ' +
              'her grow up, a painter who painted himself from behind, and a mother sitting in ' +
              'a meadow.',
          },
          exhibits: [
            {
              id: 'vienna-kunsthistorisches-arcimboldo-summer',
              name: { el: 'Το Καλοκαίρι του Αρτσιμπόλντο', en: 'Arcimboldo’s Summer' },
              blurb: {
                el:
                  'Από μακριά είναι ένα ανθρώπινο προφίλ. Από κοντά δεν υπάρχει κανένας ' +
                  'άνθρωπος: το μάγουλο είναι ροδάκινο, η μύτη κολοκυθάκι, τα χείλη κεράσια, ' +
                  'τα μαλλιά σταφύλια και στάχυα. Ο Τζουζέπε Αρτσιμπόλντο το ζωγράφισε το ' +
                  '1563 για τον αυτοκράτορα, ως μέρος μιας σειράς με τις τέσσερις εποχές. Το ' +
                  'πιο πονηρό κομμάτι είναι ο γιακάς: είναι πλεγμένος από στάχυα, και μέσα στο ' +
                  'πλέξιμο ο ζωγράφος έκρυψε το όνομά του. Το μουσείο έχει και τον Χειμώνα, ' +
                  'που είναι φτιαγμένος από ξερά κλαδιά.',
                en:
                  'From far away it is a person in profile. From close up there is no person ' +
                  'at all: the cheek is a peach, the nose a courgette, the lips cherries, the ' +
                  'hair grapes and ears of wheat. Giuseppe Arcimboldo painted it in 1563 for ' +
                  'the emperor, as part of a set of the four seasons. The cleverest part is ' +
                  'the collar: it is woven out of straw, and the painter hid his own name ' +
                  'inside the weave. The museum has Winter too, made out of dry branches.',
              },
              question: {
                q: { el: 'Πού έκρυψε ο ζωγράφος το όνομά του;', en: 'Where did the painter hide his own name?' },
                answers: [
                  { el: 'Στον πλεγμένο γιακά από στάχυα', en: 'In the collar woven out of straw' },
                  { el: 'Μέσα στο κουκούτσι του ροδάκινου στο μάγουλο', en: 'Inside the stone of the peach on the cheek' },
                  { el: 'Στην πίσω πλευρά του ξύλινου πίνακα, με μελάνι', en: 'On the back of the wooden panel, in ink' },
                  { el: 'Πουθενά· ο πίνακας έμεινε ανυπόγραφος για αιώνες', en: 'Nowhere; the painting stayed unsigned for centuries' },
                ],
                explanation: {
                  el: 'Ο Αρτσιμπόλντο έγραψε το όνομά του μέσα στο πλέξιμο, όπου το βλέπεις μόνο αν πλησιάσεις πολύ.',
                  en: 'Arcimboldo wrote his name into the weave, where you see it only if you come very close.',
                },
              },
            },
            {
              id: 'vienna-kunsthistorisches-vermeer',
              name: { el: 'Η τέχνη της ζωγραφικής', en: 'The Art of Painting' },
              blurb: {
                el:
                  'Ένας ζωγράφος κάθεται με την πλάτη σε εμάς και δουλεύει. Μπροστά του ' +
                  'ποζάρει ένα κορίτσι με ένα βιβλίο, μια σάλπιγγα και ένα στεφάνι από φύλλα ' +
                  'δάφνης: είναι ντυμένο σαν τη Μούσα της Ιστορίας. Στον τοίχο πίσω της ' +
                  'κρέμεται ένας μεγάλος χάρτης. Ο Γιοχάνες Βερμέερ τον ζωγράφισε γύρω στο ' +
                  '1666 και δεν τον πούλησε ποτέ. Από αυτόν τον ζωγράφο σώζονται περίπου ' +
                  'τριάντα πέντε έργα σε ολόκληρο τον κόσμο, οπότε το να στέκεσαι μπροστά σε ' +
                  'ένα από αυτά είναι σπάνιο πράγμα.',
                en:
                  'A painter sits with his back to us and works. In front of him a girl poses ' +
                  'with a book, a trumpet and a wreath of laurel leaves: she is dressed as the ' +
                  'Muse of History. A big map hangs on the wall behind her. Johannes Vermeer ' +
                  'painted this around 1666 and never sold it. Only about thirty-five ' +
                  'paintings by him survive in the whole world, so standing in front of one of ' +
                  'them is a rare thing.',
              },
              question: {
                q: { el: 'Τι κρατάει το κορίτσι που ποζάρει;', en: 'What is the girl who is posing holding?' },
                answers: [
                  { el: 'Βιβλίο και σάλπιγγα', en: 'A book and a trumpet' },
                  { el: 'Έναν καθρέφτη και ένα αναμμένο κερί', en: 'A mirror and a lighted candle' },
                  { el: 'Ένα πινέλο και μια παλέτα με χρώματα', en: 'A brush and a palette of colours' },
                  { el: 'Ένα καλάθι με φρούτα από τον κήπο', en: 'A basket of fruit from the garden' },
                ],
                explanation: {
                  el: 'Είναι τα σύμβολα της Ιστορίας: το βιβλίο για όσα γράφτηκαν, η σάλπιγγα για τη φήμη.',
                  en: 'They are the signs of History: the book for what was written down, the trumpet for fame.',
                },
              },
            },
            {
              id: 'vienna-kunsthistorisches-infanta',
              name: {
                el: 'Η μικρή Ινφάντα με το γαλάζιο φόρεμα',
                en: 'The little Infanta in a blue dress',
              },
              blurb: {
                el:
                  'Ένα κορίτσι οκτώ ετών στέκεται ακίνητο μέσα σε ένα τεράστιο γαλάζιο ' +
                  'φόρεμα. Λεγόταν Μαργαρίτα Τερέζα και ζούσε στη Μαδρίτη. Ο Ντιέγκο ' +
                  'Βελάθκεθ τη ζωγράφισε το 1659 και ο πίνακας ταξίδεψε αμέσως στη Βιέννη. Ο ' +
                  'λόγος είναι ασυνήθιστος: η οικογένειά της εδώ ήθελε να τη βλέπει να ' +
                  'μεγαλώνει από απόσταση. Δεν υπήρχαν φωτογραφίες, οπότε κάθε λίγα χρόνια ' +
                  'έστελναν έναν καινούριο πίνακα. Είναι από τα πρώτα άλμπουμ παιδικών ' +
                  'φωτογραφιών στην ιστορία, ζωγραφισμένο με λάδια.',
                en:
                  'A girl of eight stands perfectly still inside an enormous blue dress. Her ' +
                  'name was Margarita Teresa and she lived in Madrid. Diego Velázquez painted ' +
                  'her in 1659 and the picture travelled straight to Vienna. The reason is an ' +
                  'unusual one: her family here wanted to watch her grow up from far away. ' +
                  'There were no photographs, so every few years a new painting was sent. It ' +
                  'is one of the first albums of childhood photographs in history, done in oil ' +
                  'paint.',
              },
              question: {
                q: {
                  el: 'Γιατί έστελναν στη Βιέννη πίνακες της Μαργαρίτας κάθε λίγα χρόνια;',
                  en: 'Why was a new painting of Margarita sent to Vienna every few years?',
                },
                answers: [
                  { el: 'Για να τη βλέπει η οικογένειά της να μεγαλώνει', en: 'So her family could watch her growing up' },
                  {
                    el: 'Για να μάθουν οι ζωγράφοι της Βιέννης να ζωγραφίζουν παιδιά',
                    en: 'So Vienna’s painters could learn to paint children',
                  },
                  {
                    el: 'Για να αποδεικνύεται κάθε φορά ότι το κορίτσι ήταν καλά',
                    en: 'To prove each time that the girl was in good health',
                  },
                  {
                    el: 'Για να διαλέγει η ίδια ποιο φόρεμα της πήγαινε καλύτερα',
                    en: 'So she could choose which dress suited her best',
                  },
                ],
                explanation: {
                  el: 'Δεν υπήρχε φωτογραφία τον 17ο αιώνα. Ένας πίνακας ήταν ο μόνος τρόπος να δεις κάποιον που ζούσε μακριά.',
                  en: 'There was no photography in the 17th century. A painting was the only way to see someone who lived far away.',
                },
              },
            },
            {
              id: 'vienna-kunsthistorisches-madonna-meadow',
              name: { el: 'Η Παναγία στο λιβάδι', en: 'The Madonna of the Meadow' },
              blurb: {
                el:
                  'Μια μητέρα κάθεται στο γρασίδι και κρατάει δύο μικρά παιδιά. Ο Ραφαήλ την ' +
                  'ζωγράφισε το 1506, όταν ήταν είκοσι τριών ετών. Αν κοιτάξεις τα κεφάλια ' +
                  'και τα χέρια, θα δεις ότι σχηματίζουν ένα τρίγωνο, με την κορυφή του στο ' +
                  'πρόσωπο της γυναίκας. Ο Ραφαήλ το έκανε επίτηδες: το τρίγωνο κάνει την ' +
                  'εικόνα να στέκεται ήσυχη, όπως στέκεται ήσυχο ένα βουνό. Πίσω τους ' +
                  'απλώνεται ένα τοπίο με νερό, δέντρα και έναν πολύ γαλάζιο ουρανό.',
                en:
                  'A mother sits on the grass and holds two small children. Raphael painted ' +
                  'her in 1506, when he was twenty-three. If you look at the heads and the ' +
                  'hands, you will see that they make a triangle, with its point at the ' +
                  'woman’s face. Raphael did that on purpose: a triangle makes a picture stand ' +
                  'quiet, the way a mountain stands quiet. Behind them a landscape opens out, ' +
                  'with water, trees and a very blue sky.',
              },
              question: {
                q: { el: 'Τι σχήμα σχηματίζουν οι τρεις μορφές του πίνακα;', en: 'What shape do the three figures in the painting make?' },
                answers: [
                  { el: 'Ένα τρίγωνο', en: 'A triangle' },
                  { el: 'Έναν κύκλο γύρω από το κεντρικό παιδί', en: 'A circle around the child in the middle' },
                  { el: 'Μια ίσια οριζόντια γραμμή στη μέση του κάδρου', en: 'A straight flat line across the middle of the frame' },
                  { el: 'Ένα τετράγωνο, με μια μορφή σε κάθε γωνία', en: 'A square, with a figure at each corner' },
                ],
                explanation: {
                  el: 'Το τρίγωνο έχει πλατιά βάση και ήσυχη κορυφή. Οι ζωγράφοι το χρησιμοποιούν για να ηρεμεί το μάτι.',
                  en: 'A triangle has a wide base and a quiet top. Painters use it to settle the eye.',
                },
              },
            },
          ],
        },
        {
          id: 'vienna-kunsthistorisches-treasures',
          emoji: '🧂',
          name: { el: 'Θησαυροί και σκαλοπάτια', en: 'Treasures and stairs' },
          intro: {
            el:
              'Το μουσείο δεν έχει μόνο πίνακες. Έχει και έναν όροφο γεμάτο αντικείμενα που ' +
              'έφτιαξαν χρυσοχόοι και ωρολογοποιοί για ανθρώπους που είχαν ήδη τα πάντα. Και ' +
              'έχει τη σκάλα του, που δεν είναι απλώς δρόμος προς τα πάνω: πάνω της στέκεται ' +
              'ένα μαρμάρινο γλυπτό σε φυσικό μέγεθος, και πολύ ψηλά κρύβονται ζωγραφιές που ' +
              'λίγοι σηκώνουν το κεφάλι να δουν.',
            en:
              'The museum is not only paintings. It also has a floor full of objects made by ' +
              'goldsmiths and clockmakers for people who already owned everything. And it has ' +
              'its staircase, which is not just a way upstairs: a life-size marble sculpture ' +
              'stands on it, and high above hide paintings that few visitors ever look up to ' +
              'see.',
          },
          exhibits: [
            {
              id: 'vienna-kunsthistorisches-saliera',
              name: { el: 'Η Σαλιέρα', en: 'The Saliera' },
              blurb: {
                el:
                  'Είναι μια αλατιέρα, και είναι το μόνο χρυσό έργο του Μπενβενούτο Τσελίνι ' +
                  'που σώζεται. Την έφτιαξε από το 1540 ως το 1543 για τον βασιλιά της ' +
                  'Γαλλίας. Δύο μορφές κάθονται αντικριστά: ένας άντρας που είναι η θάλασσα, ' +
                  'με ένα καραβάκι δίπλα του για το αλάτι, και μια γυναίκα που είναι η γη, με ' +
                  'έναν μικρό ναό δίπλα της για το πιπέρι. Στις 11 Μαΐου 2003 ένας κλέφτης ' +
                  'ανέβηκε στις σκαλωσιές και την πήρε. Βρέθηκε στις 21 Ιανουαρίου 2006, ' +
                  'θαμμένη μέσα σε μολύβδινο κουτί σε ένα δάσος.',
                en:
                  'It is a salt cellar, and it is the only work in gold by Benvenuto Cellini ' +
                  'that still exists. He made it between 1540 and 1543 for the king of France. ' +
                  'Two figures sit facing each other: a man who is the sea, with a little boat ' +
                  'beside him for the salt, and a woman who is the earth, with a small temple ' +
                  'beside her for the pepper. On 11 May 2003 a thief climbed the scaffolding ' +
                  'and took it. It was found on 21 January 2006, buried in a lead box in a ' +
                  'forest.',
              },
              question: {
                q: {
                  el: 'Τι κρατούσε το καραβάκι δίπλα στη μορφή της θάλασσας;',
                  en: 'What did the little boat beside the sea figure hold?',
                },
                answers: [
                  { el: 'Το αλάτι', en: 'The salt' },
                  { el: 'Το πιπέρι, σε μια μικρή κρυφή θήκη', en: 'The pepper, in a small hidden compartment' },
                  { el: 'Λάδι για τη σαλάτα του βασιλιά', en: 'Oil for the king’s salad' },
                  { el: 'Νερό, για να ξεπλένει ο βασιλιάς τα δάχτυλά του', en: 'Water, so the king could rinse his fingers' },
                ],
                explanation: {
                  el: 'Το αλάτι έρχεται από τη θάλασσα και το πιπέρι από φυτά της γης. Γι’ αυτό κάθεται το καθένα δίπλα στη δική του μορφή.',
                  en: 'Salt comes from the sea and pepper from plants of the earth. That is why each sits beside its own figure.',
                },
              },
            },
            {
              id: 'vienna-kunsthistorisches-canova-theseus',
              name: { el: 'Ο Θησέας του Κανόβα', en: 'Canova’s Theseus' },
              blurb: {
                el:
                  'Στην κορυφή της μεγάλης σκάλας, ένας νέος άντρας από λευκό μάρμαρο έχει ' +
                  'ρίξει κάτω έναν κένταυρο και σηκώνει το ρόπαλό του. Το γλυπτό είναι του ' +
                  'Αντόνιο Κανόβα και δουλεύτηκε για χρόνια, από το 1805 ως το 1819. Το ' +
                  'παρήγγειλε ο Ναπολέων· τελικά το αγόρασε ο αυτοκράτορας της Αυστρίας το ' +
                  '1822 και το έστησε σε έναν μικρό ναό μέσα σε πάρκο. Όταν άνοιξε το μουσείο, ' +
                  'το μετέφεραν εδώ. Λένε ότι ο Κανόβα μελέτησε αληθινό άλογο για να πετύχει ' +
                  'τους μυς του κένταυρου.',
                en:
                  'At the top of the grand staircase, a young man of white marble has thrown a ' +
                  'centaur down and is lifting his club. The sculpture is by Antonio Canova ' +
                  'and was worked on for years, from 1805 to 1819. Napoleon ordered it; in the ' +
                  'end the emperor of Austria bought it in 1822 and set it up in a small ' +
                  'temple in a park. When the museum opened, it was moved here. Canova is said ' +
                  'to have studied a real horse to get the centaur’s muscles right.',
              },
              question: {
                q: { el: 'Ποιος είχε παραγγείλει αρχικά αυτό το γλυπτό;', en: 'Who originally ordered this sculpture?' },
                answers: [
                  { el: 'Ο Ναπολέων', en: 'Napoleon' },
                  { el: 'Ο αυτοκράτορας Φραγκίσκος Ιωσήφ της Αυστρίας', en: 'Emperor Franz Joseph of Austria' },
                  { el: 'Ο δήμος της Βιέννης, για την κεντρική του πλατεία', en: 'The city of Vienna, for its main square' },
                  { el: 'Το ίδιο το μουσείο, πριν καν χτιστεί', en: 'The museum itself, before it was even built' },
                ],
                explanation: {
                  el: 'Ο Κανόβα το ξεκίνησε για τον Ναπολέοντα. Το αγόρασε αργότερα η Αυστρία, το 1822.',
                  en: 'Canova began it for Napoleon. Austria bought it later, in 1822.',
                },
              },
            },
            {
              id: 'vienna-kunsthistorisches-klimt-staircase',
              name: {
                el: 'Οι ζωγραφιές του Κλιμτ στη σκάλα',
                en: 'Klimt’s paintings on the staircase',
              },
              blurb: {
                el:
                  'Δώδεκα μέτρα πάνω από τα κεφάλια των επισκεπτών, στα στενά κενά ανάμεσα ' +
                  'στις κολόνες, υπάρχουν μικρές ζωγραφισμένες μορφές: μια Αιγύπτια, μια ' +
                  'αρχαία Ελληνίδα, μια Ιταλίδα της Αναγέννησης. Τις έκανε ο Γκούσταβ Κλιμτ ' +
                  'γύρω στο 1890, μαζί με τον αδελφό του και έναν φίλο τους, όταν ήταν ακόμα ' +
                  'εικοσιοκτώ χρονών και κανείς δεν ήξερε το όνομά του. Είναι τόσο ψηλά που ' +
                  'για χρόνια σχεδόν κανείς δεν τις πρόσεχε. Το μουσείο στήνει κάθε τόσο μια ' +
                  'γέφυρα, για να τις δει ο κόσμος από κοντά.',
                en:
                  'Twelve metres above the visitors’ heads, in the narrow gaps between the ' +
                  'columns, there are small painted figures: an Egyptian woman, an ancient ' +
                  'Greek, an Italian of the Renaissance. Gustav Klimt made them around 1890, ' +
                  'together with his brother and a friend, when he was still twenty-eight and ' +
                  'nobody knew his name. They are so high up that for years hardly anyone ' +
                  'noticed them. Every so often the museum builds a bridge so that people can ' +
                  'look at them close up.',
              },
              question: {
                q: { el: 'Γιατί λίγοι επισκέπτες προσέχουν αυτές τις ζωγραφιές;', en: 'Why do few visitors notice these paintings?' },
                answers: [
                  { el: 'Είναι δώδεκα μέτρα πάνω από τα κεφάλια τους', en: 'They are twelve metres above their heads' },
                  { el: 'Είναι σκεπασμένες με ένα προστατευτικό γκρίζο ύφασμα', en: 'They are covered with a protective grey cloth' },
                  { el: 'Βρίσκονται σε αίθουσα που ανοίγει μία φορά τον χρόνο', en: 'They are in a room that opens once a year' },
                  { el: 'Είναι πολύ μικρές, μόλις λίγα εκατοστά η καθεμία', en: 'They are tiny, only a few centimetres each' },
                ],
                explanation: {
                  el: 'Ο Κλιμτ τις ζωγράφισε για τη σκάλα, όχι για τον τοίχο μπροστά σου. Θέλουν σήκωμα κεφαλιού.',
                  en: 'Klimt painted them for the staircase, not for the wall in front of you. They need you to look up.',
                },
              },
            },
          ],
        },
      ],
      riddles: [
        {
          id: 'vienna-kunsthistorisches-riddle-1',
          difficulty: 1,
          prompt: {
            el:
              'Κατεβαίνω έναν λόφο μέσα στο χιόνι, με σκυλιά που έχουν σκυμμένα κεφάλια, και ' +
              'κουβαλάω μία μόνο αλεπού. Από κάτω μου, στις παγωμένες λίμνες, ο κόσμος ' +
              'διασκεδάζει.',
            en:
              'I am coming down a hill through deep snow with dogs whose heads hang low, and I ' +
              'am carrying one single fox. Below me, on the frozen ponds, everyone is having ' +
              'fun.',
          },
          hint: {
            el: 'Είμαι ένας από τους τρεις πίνακες των εποχών σε αυτή την αίθουσα.',
            en: 'I am one of the three pictures of the seasons in this room.',
          },
          answerExhibitId: 'vienna-kunsthistorisches-hunters-snow',
        },
        {
          id: 'vienna-kunsthistorisches-riddle-2',
          difficulty: 2,
          prompt: {
            el:
              'Από μακριά έχω πρόσωπο. Από κοντά δεν έχω δέρμα: το μάγουλό μου είναι ροδάκινο ' +
              'και τα χείλη μου κεράσια. Το όνομα του ζωγράφου μου κρύβεται μέσα στον γιακά ' +
              'μου.',
            en:
              'From far away I have a face. Close up I have no skin: my cheek is a peach and ' +
              'my lips are cherries. My painter’s name is hidden inside my collar.',
          },
          hint: {
            el: 'Δίπλα μου κρέμεται η αντίθετη εποχή, φτιαγμένη από ξερά κλαδιά.',
            en: 'The opposite season hangs beside me, made out of dry branches.',
          },
          answerExhibitId: 'vienna-kunsthistorisches-arcimboldo-summer',
        },
        {
          id: 'vienna-kunsthistorisches-riddle-3',
          difficulty: 2,
          prompt: {
            el:
              'Είμαι μικρή, χρυσή, και κάποτε είχα δουλειά πάνω στο τραπέζι ενός βασιλιά. Το ' +
              '2003 κάποιος με έκλεψε και με έθαψε μέσα σε ένα δάσος. Γύρισα πίσω τρία χρόνια ' +
              'αργότερα.',
            en:
              'I am small and golden, and I once had a job on a king’s table. In 2003 somebody ' +
              'stole me and buried me in a forest. I came back three years later.',
          },
          hint: {
            el: 'Δύο μορφές κάθονται πάνω μου, η θάλασσα και η γη.',
            en: 'Two figures sit on me, the sea and the earth.',
          },
          answerExhibitId: 'vienna-kunsthistorisches-saliera',
        },
        {
          id: 'vienna-kunsthistorisches-riddle-4',
          difficulty: 3,
          prompt: {
            el:
              'Δεν κρέμομαι σε τοίχο και δεν έχω κορνίζα. Ζω στα στενά κενά ανάμεσα σε ' +
              'κολόνες, δώδεκα μέτρα πάνω σου, και με ζωγράφισε ένας εικοσιοκτάχρονος που ' +
              'έγινε διάσημος πολύ αργότερα.',
            en:
              'I do not hang on a wall and I have no frame. I live in the narrow gaps between ' +
              'columns, twelve metres above you, and a twenty-eight-year-old who became famous ' +
              'much later painted me.',
          },
          hint: {
            el: 'Θα με βρεις πριν μπεις σε οποιαδήποτε αίθουσα.',
            en: 'You will find me before you enter any gallery at all.',
          },
          answerExhibitId: 'vienna-kunsthistorisches-klimt-staircase',
        },
      ],
    },
  },
];

export const trails: Trail[] = [
  {
    id: 'vienna-old-town-hour',
    cityId: 'vienna',
    emoji: '⏱️',
    name: { el: 'Μία ώρα στην παλιά πόλη', en: 'An hour in the old town' },
    promise: {
      el: 'Ένας ναός, ένα ρολόι που παρελαύνει, και η πόρτα ενός παλατιού.',
      en: 'A cathedral, a clock that parades, and the door of a palace.',
    },
    placeIds: ['vienna-stephansdom', 'vienna-anker-clock', 'vienna-hofburg'],
  },
  {
    id: 'vienna-great-circle',
    cityId: 'vienna',
    emoji: '⭕',
    name: { el: 'Ο μεγάλος κύκλος της Βιέννης', en: 'Vienna’s great circle' },
    promise: {
      el: 'Έξι κτίρια σε έναν κύκλο γύρω από την παλιά πόλη, το καθένα σε άλλο στιλ.',
      en: 'Six buildings in a circle around the old town, each one in a different style.',
    },
    placeIds: [
      'vienna-rathaus',
      'vienna-parliament',
      'vienna-naturhistorisches',
      'vienna-kunsthistorisches',
      'vienna-staatsoper',
      'vienna-karlskirche',
    ],
  },
  {
    id: 'vienna-imperial-day',
    cityId: 'vienna',
    emoji: '👑',
    name: { el: 'Μια μέρα με αυτοκράτορες', en: 'A day with emperors' },
    promise: {
      el: 'Θα έχεις δει πού έμεναν, πού άκουγαν μουσική και τι μάζευαν.',
      en: 'You will have seen where they lived, where they listened to music, and what they collected.',
    },
    placeIds: [
      'vienna-hofburg',
      'vienna-schonbrunn',
      'vienna-kunsthistorisches',
      'vienna-staatsoper',
    ],
  },
  {
    id: 'vienna-day-for-playing',
    cityId: 'vienna',
    emoji: '🎪',
    name: { el: 'Μια μέρα για παιχνίδι', en: 'A day for playing' },
    promise: {
      el: 'Μια ρόδα, ένα πάντα, εκατόν είκοσι πάγκοι και ένας δεινόσαυρος.',
      en: 'A wheel, a panda, a hundred and twenty stalls and a dinosaur.',
    },
    placeIds: [
      'vienna-riesenrad',
      'vienna-schonbrunn-zoo',
      'vienna-naschmarkt',
      'vienna-naturhistorisches',
    ],
  },
];
