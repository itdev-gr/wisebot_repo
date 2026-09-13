/**
 * WiseBot World — Prague.
 *
 * Seventeen places, two of them museums with an interior. Converted from the Explorer
 * product on origin/main, whose ten spots are the raw material here: every one of them
 * survives, rewritten to this module's lengths and voice, with the treasure-hunt frame
 * — the GPS riddle, the parent hint, the on-site question — dropped, because none of it
 * belongs to a place that a child reads rather than walks to.
 *
 * Seven places are added, and the reason is the shape of the Explorer's day rather than
 * any fault in it. The Explorer walks the Royal Route and never goes inside anything, so
 * this city had no museum at all and no room a child could stand in. `prague-national-
 * museum` and `prague-technical-museum` supply the two interiors. `prague-st-vitus` is
 * split out of the castle, which the Explorer treats as one stop although the cathedral
 * has its own six-hundred-year story and its own coordinate 101 m away. `prague-vysehrad`,
 * `prague-old-new-synagogue`, `prague-havelske-trziste` and `prague-strahov-stadium` fill
 * the categories the Explorer's ten leave empty: nature, food and sport.
 *
 * Every coordinate is copied from `data/world/coords/prague.json`, field for field, and
 * that file is the resolver's own output. The Explorer's lat/lng were hand-written and
 * are used nowhere. Nothing graded `D`. No place claims an `entrance`: no door in Prague
 * has been measured from a source we may use, so every point is the centroid, area or
 * viewpoint the resolver reported. Where the way in is worth describing, it is described
 * in words, in `location.findIt`, in both languages.
 *
 * OpenStreetMap answered for one place out of seventeen. On the re-run of 13 September
 * 2026 the Old Town Square picked up its Overpass relation 29 m away and is the city's
 * only `A`; for the other sixteen the resolver recorded `osm: overpass 504` or
 * `osm: overpass 429`, so their grades rest on Wikidata and Wikipedia. Each
 * `location.note` names the code its own place got. Three places carry
 * no Wikipedia coordinate either and grade C on Wikidata alone: the two museum buildings,
 * whose articles are about the institutions rather than the buildings, and Havelské
 * tržiště, which has no article in any language. A thin audit trail is not a disagreement.
 *
 * Facts were checked on 13 September 2026 against the Czech Wikipedia articles «Národní
 * technické muzeum», «Historická budova Národního muzea», «Havelské město» and «Kostel
 * svatého Havla (Praha)», and the English articles "Old New Synagogue", "Vyšehrad" and
 * "Great Strahov Stadium", plus Wikidata for the q-ids in the seed.
 *
 * `el` and `en` are complete. `de`, `fr`, `es` and `it` arrive as overlay files and never
 * as extra keys in here.
 */

import type { Place, Trail } from '../types';

export const places: Place[] = [
  // --------------------------------------------------------------- powder tower
  {
    id: 'prague-powder-tower',
    cityId: 'prague',
    emoji: '🧨',
    category: 'landmark',
    difficulty: 1,

    name: { el: 'Prašná brána', en: 'The Powder Tower' },
    tagline: {
      el: 'Δώρο σε έναν βασιλιά, μετά αποθήκη για μπαρούτι',
      en: 'A gift to a king, then a store for gunpowder',
    },
    story: {
      el:
        'Το 1475 οι κάτοικοι της Πράγας άρχισαν να χτίζουν αυτή τη σκούρα, μυτερή πύλη ' +
        'ως δώρο στον βασιλιά τους, τον Vladislav, που έμενε στο παλάτι ακριβώς δίπλα. ' +
        'Ήταν μία από τις πύλες στα τείχη της Παλιάς Πόλης, και από εδώ ξεκινούσε η ' +
        'Βασιλική Οδός: όταν ένας καινούργιος βασιλιάς πήγαινε να στεφθεί, η πομπή του ' +
        'περνούσε από αυτή την πύλη, διέσχιζε την πόλη και τη γέφυρα και ανέβαινε στο ' +
        'κάστρο. Η τελευταία τέτοια πομπή πέρασε το 1836. Ο βασιλιάς όμως έφυγε από το ' +
        'διπλανό παλάτι, το χτίσιμο σταμάτησε και ο πύργος έμεινε μισοτελειωμένος για ' +
        'αιώνες. Στο μεταξύ βρήκε μια πολύ πιο πεζή δουλειά: αποθήκη για μπαρούτι, ' +
        'δηλαδή πυρίτιδα, και από εκεί κράτησε το όνομά του. Τη μυτερή στέγη και τα ' +
        'περισσότερα στολίδια τα πρόσθεσε ο αρχιτέκτονας Josef Mocker στα 1875–1886. ' +
        'Δηλαδή το πιο «μεσαιωνικό» κομμάτι της πύλης είναι και το πιο καινούργιο.',
      en:
        'In 1475 the people of Prague began building this dark, pointed gate as a present ' +
        'for their king, Vladislav, who lived in the palace right next door. It was one of ' +
        'the gates in the walls of the Old Town, and the Royal Route started here: when a ' +
        'new king went to be crowned, his procession came through this gate, crossed the ' +
        'town and the bridge and climbed up to the castle. The last such procession passed ' +
        'in 1836. But the king moved out of the palace beside it, the building work ' +
        'stopped, and the tower stood half finished for centuries. Meanwhile it found a ' +
        'far duller job: a store for gunpowder, and that is where its name has stuck ever ' +
        'since. The pointed roof and most of the carving were added by the architect Josef ' +
        'Mocker in 1875–1886. So the most medieval-looking part of the gate is the newest ' +
        'part of it.',
    },
    facts: [
      {
        el: 'Έχει ύψος 65 μέτρα και 186 σκαλοπάτια οδηγούν στη βεράντα με τη θέα.',
        en: 'It is 65 metres tall, and 186 steps lead up to its viewing gallery.',
      },
      {
        el: 'Η τελευταία πομπή στέψης πέρασε από εδώ το 1836.',
        en: 'The last coronation procession passed through it in 1836.',
      },
      {
        el: 'Η μυτερή στέγη δεν είναι μεσαιωνική: μπήκε στα 1875–1886.',
        en: 'The pointed roof is not medieval: it went on in 1875–1886.',
      },
    ],
    location: {
      lat: 50.08722,
      lng: 14.42778,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q1488700', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Powder Tower, Prague', deltaM: 3 },
      ],
      verifiedAt: '2026-09-13',
      note: 'OpenStreetMap did not answer in the resolver run (Overpass returned 504), so the grade rests on Wikidata and Wikipedia alone.',
      map: { x: 0.817, y: 0.319 },
      findIt: {
        el: 'Στέκεται στην άκρη της οδού Celetná, κολλητά στο χρυσό κτίριο Obecní dům. Είναι η μόνη μαύρη πύλη στη γωνία, δεν τη χάνεις.',
        en: 'It stands at the end of Celetná street, right beside the golden Obecní dům. It is the only black gate on the corner, so you cannot miss it.',
      },
    },
    question: {
      q: {
        el: 'Από πού πήρε το όνομά της η Πύλη της Πυρίτιδας;',
        en: 'Where did the Powder Tower get its name?',
      },
      answers: [
        {
          el: 'Από το μπαρούτι που αποθήκευαν οι στρατιώτες μέσα στην πύλη',
          en: 'From the gunpowder that soldiers once stored inside the gate',
        },
        {
          el: 'Από τη σκόνη που σήκωναν οι άμαξες στην πύλη',
          en: 'From the dust the carriages threw up at the gate',
        },
        {
          el: 'Από τον μαύρο σαν στάχτη βράχο με τον οποίο χτίστηκε',
          en: 'From the ash-black rock that it was built out of',
        },
        {
          el: 'Από τα πυροτεχνήματα που άναβαν εδώ στις γιορτές',
          en: 'From the fireworks that were set off here at feasts',
        },
      ],
      explanation: {
        el:
          'Ο μισοτελειωμένος πύργος χρησίμευσε για χρόνια ως αποθήκη πυρίτιδας. Το όνομα ' +
          'έμεινε, αν και ευτυχώς δεν έκανε ποτέ μπαμ.',
        en:
          'The half-finished tower served for years as a gunpowder store. The name stuck, ' +
          'although luckily it never went bang.',
      },
    },
  },

  // ------------------------------------------------------------ old town square
  {
    id: 'prague-old-town-square',
    cityId: 'prague',
    emoji: '🏘️',
    category: 'history',
    difficulty: 2,

    name: { el: 'Staroměstské náměstí', en: 'The Old Town Square' },
    tagline: {
      el: 'Παζάρι εδώ και σχεδόν εννιακόσια χρόνια',
      en: 'A market place for almost nine hundred years',
    },
    story: {
      el:
        'Από τον 12ο αιώνα έμποροι από μακριά στήνουν πάγκους σε αυτή την πλατεία, και ' +
        'εδώ μαζεύονταν οι κάτοικοι για γιορτές, για μεγάλες ειδήσεις και για να δουν τι ' +
        'ώρα είναι. Κάθε σπίτι γύρω έχει άλλο χρώμα και άλλη ηλικία· κάποια είναι ' +
        'μεσαιωνικά, με ζωγραφιές στους τοίχους. Ψηλά ξεπροβάλλουν οι δύο μυτεροί πύργοι ' +
        'της εκκλησίας του Týn, ογδόντα μέτρα ο καθένας, και δεν είναι ίδιοι: ο ένας ' +
        'είναι λίγο πιο χοντρός, κι έτσι οι Πραγινοί τους λένε Αδάμ και Εύα. Στη μέση ' +
        'στέκεται το μνημείο του Jan Hus, ενός ιεροκήρυκα που έλεγε πάντα αυτό που ' +
        'πίστευε ακόμα κι όταν ήταν επικίνδυνο· στήθηκε το 1915, ακριβώς 500 χρόνια μετά ' +
        'τον θάνατό του. Ψάξε και μια μεταλλική γραμμή στο πλακόστρωτο: είναι ο ' +
        'μεσημβρινός της Πράγας. Όταν η σκιά μιας ψηλής κολόνας έπεφτε πάνω της, η πόλη ' +
        'ήξερε ότι ήταν ακριβώς μεσημέρι.',
      en:
        'Traders from far away have been setting up stalls in this square since the 12th ' +
        'century, and the townspeople gathered here for festivals, for big news and to ' +
        'find out the time. Every house around it is a different colour and a different ' +
        'age; some are medieval, with paintings on their walls. Above them rise the two ' +
        'pointed towers of the Týn church, eighty metres each, and they do not match: one ' +
        'is a little thicker than the other, so people in Prague call them Adam and Eve. ' +
        'In the middle stands the monument to Jan Hus, a preacher who always said what he ' +
        'believed even when that was dangerous; it went up in 1915, exactly 500 years after ' +
        'his death. Look for a metal strip in the paving too: it is the Prague meridian. ' +
        'When the shadow of a tall column fell across it, the city knew it was exactly ' +
        'midday.',
    },
    facts: [
      {
        el: 'Οι δύο πύργοι της εκκλησίας του Týn έχουν ύψος 80 μέτρα και δεν είναι ίδιοι.',
        en: 'The two towers of the Týn church are 80 metres tall and are not identical.',
      },
      {
        el: 'Το μνημείο του Jan Hus στήθηκε το 1915, 500 χρόνια μετά τον θάνατό του.',
        en: 'The Jan Hus monument was raised in 1915, 500 years after his death.',
      },
      {
        el: 'Η κολόνα που έριχνε τη σκιά της στον μεσημβρινό ξαναστήθηκε το 2020.',
        en: 'The column that cast its shadow on the meridian was put back in 2020.',
      },
    ],
    location: {
      lat: 50.0875,
      lng: 14.42139,
      anchor: 'area',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q421678', deltaM: 0 },
        { kind: 'osm', ref: 'relation/2362716', deltaM: 29 },
        { kind: 'wikipedia', ref: 'Old Town Square', deltaM: 1 },
      ],
      verifiedAt: '2026-09-13',
      note: 'An area pin in the middle of the square, and the one place here where Overpass answered: the OpenStreetMap relation for the square lands 29 m away, which is why this is the only A in the city. This coordinate is also, character for character, Wikidata\'s coordinate for the city of Prague itself, which is why the seed uses Malá Strana as the audit\'s centre point instead.',
      map: { x: 0.703, y: 0.313 },
      findIt: {
        el: 'Από την Prašná brána πάρε την οδό Celetná προς τα δυτικά. Σε έξι λεπτά ο στενός δρόμος ανοίγει ξαφνικά και είσαι μέσα στην πλατεία.',
        en: 'From the Powder Tower take Celetná street westwards. After six minutes the narrow street suddenly opens out and you are in the square.',
      },
    },
    question: {
      q: {
        el: 'Τι έδειχνε η μεταλλική γραμμή στο πλακόστρωτο της πλατείας;',
        en: 'What did the metal strip in the square’s paving show?',
      },
      answers: [
        {
          el: 'Πότε ήταν ακριβώς μεσημέρι στην Πράγα',
          en: 'When it was exactly midday in Prague',
        },
        {
          el: 'Πού τελείωναν τα παλιά τείχη της Παλιάς Πόλης',
          en: 'Where the old walls of the Old Town used to end',
        },
        {
          el: 'Πού έπρεπε να στήνουν τους πάγκους τους οι έμποροι',
          en: 'Where the traders had to set up their market stalls',
        },
        {
          el: 'Πόσο ψηλά είχε φτάσει το νερό σε μια μεγάλη πλημμύρα',
          en: 'How high the water rose in one very great flood',
        },
      ],
      explanation: {
        el:
          'Η σκιά μιας ψηλής κολόνας έπεφτε πάνω στη γραμμή ακριβώς το μεσημέρι. Ήταν το ' +
          'ρολόι της πόλης, πριν υπάρξουν ρολόγια χειρός.',
        en:
          'The shadow of a tall column touched the strip at exactly noon. It was the city’s ' +
          'clock, before anybody had a wristwatch.',
      },
    },
  },

  // -------------------------------------------------------- astronomical clock
  {
    id: 'prague-astronomical-clock',
    cityId: 'prague',
    emoji: '⏰',
    category: 'science',
    difficulty: 2,

    name: { el: 'Staroměstský orloj', en: 'The Astronomical Clock' },
    tagline: {
      el: 'Το παλαιότερο αστρονομικό ρολόι που δουλεύει ακόμα',
      en: 'The oldest astronomical clock that still works',
    },
    story: {
      el:
        'Αυτό το ρολόι χτύπησε για πρώτη φορά το 1410 και είναι το παλαιότερο ' +
        'αστρονομικό ρολόι στον κόσμο που δουλεύει ακόμα. Μέσα σε εξακόσια χρόνια ' +
        'σταμάτησε πάνω από μία φορά, και κάθε φορά η Πράγα το ξαναέφτιαξε. Το ' +
        'έφτιαξαν μαζί ένας ωρολογοποιός, ο Mikuláš από το Kadaň, και ' +
        'ένας αστρονόμος, ο Jan Šindel. Ο αστρονόμος ήθελε ένα μηχάνημα που να μη λέει ' +
        'απλώς την ώρα αλλά να δείχνει ολόκληρο τον ουρανό: πού βρίσκεται ο ήλιος, πού ' +
        'το φεγγάρι, ποιο ζώδιο ανατέλλει. Το πάνω καντράν μετράει την ώρα με τρεις ' +
        'διαφορετικούς τρόπους ταυτόχρονα, γιατί τότε δεν είχαν συμφωνήσει ακόμα όλοι ' +
        'πότε αρχίζει η μέρα. Το κάτω καντράν, το ημερολόγιο, μπήκε αργότερα. Κάθε ώρα ' +
        'ανοίγουν δύο παραθυράκια, οι δώδεκα Απόστολοι περνούν ένας ένας, ένας σκελετός ' +
        'γυρίζει την κλεψύδρα του και ένας χρυσός κόκορας λαλεί. Το 1945 το ρολόι κάηκε. ' +
        'Οι Πραγινοί το επισκεύασαν και σκάλισαν καινούργιους Αποστόλους από ξύλο.',
      en:
        'This clock first struck in 1410, and it is the oldest astronomical clock in ' +
        'the world that still works. Over six hundred years it has stopped more than ' +
        'once, and each time Prague has mended it. It was made by a ' +
        'clockmaker, Mikuláš of Kadaň, together with an astronomer, Jan Šindel. The ' +
        'astronomer wanted a machine that did not merely tell the time but showed the ' +
        'whole sky: where the sun is, where the moon is, which sign of the zodiac is ' +
        'rising. The upper dial counts the hours in three different ways at once, because ' +
        'back then people had not all agreed on when a day begins. The lower dial, the ' +
        'calendar, came later. Every hour two little windows open, the twelve Apostles go ' +
        'past one by one, a skeleton turns his hourglass and a golden cockerel crows. In ' +
        '1945 the clock burned. The people of Prague repaired it and carved new wooden ' +
        'Apostles for it.',
    },
    facts: [
      {
        el: 'Ξεκίνησε να δουλεύει το 1410, πριν από περισσότερα από 600 χρόνια.',
        en: 'It started working in 1410, more than 600 years ago.',
      },
      {
        el: 'Το πάνω καντράν δείχνει την ώρα με τρεις διαφορετικούς τρόπους μαζί.',
        en: 'The upper dial shows the time in three different ways at once.',
      },
      {
        el: 'Μετά τη φωτιά του 1945, χτυπάει ξανά κάθε ώρα από το 1948.',
        en: 'After the fire of 1945 it has struck every hour again since 1948.',
      },
    ],
    location: {
      lat: 50.08699,
      lng: 14.4207,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q729370', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Prague astronomical clock', deltaM: 16 },
      ],
      verifiedAt: '2026-09-13',
      note: 'The clock, not the town hall it is fixed to: Staroměstská radnice is a separate Wikidata item and a separate building. OpenStreetMap did not answer in the resolver run (Overpass returned 504), so the grade rests on Wikidata and Wikipedia alone.',
      map: { x: 0.691, y: 0.325 },
      findIt: {
        el: 'Είναι στον νότιο τοίχο του πύργου του Παλιού Δημαρχείου, στη νοτιοδυτική γωνία της πλατείας. Στάσου από κάτω λίγο πριν χτυπήσει η ώρα.',
        en: 'It is on the south wall of the Old Town Hall tower, at the south-west corner of the square. Stand underneath a few minutes before the hour.',
      },
    },
    question: {
      q: {
        el: 'Τι δείχνει το πάνω καντράν εκτός από την ώρα;',
        en: 'What does the upper dial show as well as the time?',
      },
      answers: [
        {
          el: 'Πού βρίσκονται ο ήλιος και το φεγγάρι',
          en: 'Where the sun and the moon are just now',
        },
        {
          el: 'Πόσοι άνθρωποι ζουν σήμερα μέσα στην Παλιά Πόλη',
          en: 'How many people live inside the Old Town today',
        },
        {
          el: 'Πόσο θα βρέξει στην πόλη την επόμενη εβδομάδα',
          en: 'How much rain will fall on the city next week',
        },
        {
          el: 'Πότε θα γίνει η επόμενη γιορτή',
          en: 'When the next big feast will be held',
        },
      ],
      explanation: {
        el:
          'Ο αστρονόμος Jan Šindel ήθελε έναν χάρτη του ουρανού που να κινείται μόνος του: ' +
          'ήλιο, φεγγάρι και ζώδια, όλα στη θέση τους αυτή τη στιγμή.',
        en:
          'The astronomer Jan Šindel wanted a map of the sky that moved by itself: sun, ' +
          'moon and zodiac, each in the place it is in right now.',
      },
    },
  },

  // -------------------------------------------------------------- charles bridge
  {
    id: 'prague-charles-bridge',
    cityId: 'prague',
    emoji: '🌉',
    category: 'landmark',
    difficulty: 2,

    name: { el: 'Karlův most', en: 'Charles Bridge' },
    tagline: {
      el: 'Δεκαέξι καμάρες, τριάντα αγάλματα και ένας παλίνδρομος αριθμός',
      en: 'Sixteen arches, thirty statues and a palindrome',
    },
    story: {
      el:
        'Η παλιά γέφυρα της Πράγας είχε γκρεμιστεί από μια μεγάλη πλημμύρα, και η ' +
        'καινούργια έπρεπε να αντέξει για πάντα. Ο βασιλιάς Κάρολος ο Δ΄ αγαπούσε τους ' +
        'αριθμούς και τα άστρα, και λένε ότι διάλεξε γι’ αυτήν μια πολύ ιδιαίτερη ' +
        'στιγμή: 9 Ιουλίου 1357, στις 5 και 31 το πρωί. Γράψε τους αριθμούς στη σειρά, ' +
        '1-3-5-7-9-7-5-3-1, και διάβασέ τους ανάποδα· είναι ολόιδιοι. Την έχτισε ο ' +
        'αρχιτέκτονας Peter Parler, έχει μήκος 516 μέτρα και δεκαέξι καμάρες, και για ' +
        'περισσότερα από τετρακόσια χρόνια ήταν η μοναδική γέφυρα της πόλης πάνω από τον ' +
        'Vltava. Τα τριάντα αγάλματα ήρθαν πολύ αργότερα, τα περισσότερα πριν από περίπου ' +
        'τριακόσια χρόνια, και σήμερα πολλά είναι αντίγραφα. Ένας θρύλος λέει ότι στη ' +
        'λάσπη των χτιστών μπήκαν αυγά από όλα τα χωριά, για να δέσει γερότερα. Κανείς ' +
        'δεν το έχει αποδείξει, αλλά η ιστορία αντέχει σχεδόν όσο και η γέφυρα.',
      en:
        'Prague’s old bridge had been swept away by a great flood, and the new one had to ' +
        'last forever. King Charles IV loved numbers and stars, and the story goes that he ' +
        'chose a very particular moment for it: 9 July 1357, at 5:31 in the morning. Write ' +
        'the figures in a row, 1-3-5-7-9-7-5-3-1, and read them backwards; they are exactly ' +
        'the same. The architect Peter Parler built it, it is 516 metres long with sixteen ' +
        'arches, and for more than four hundred years it was the only bridge in the city ' +
        'over the Vltava. The thirty statues came much later, most of them about three ' +
        'hundred years ago, and today many of them are copies. A legend says the builders ' +
        'asked every village for eggs to make their mortar set harder. Nobody has ever ' +
        'proved it, but the story has lasted almost as long as the bridge.',
    },
    facts: [
      {
        el: 'Έχει μήκος 516 μέτρα, δεκαέξι καμάρες και τριάντα αγάλματα στη σειρά.',
        en: 'It is 516 metres long, with sixteen arches and thirty statues in a row.',
      },
      {
        el: 'Ο θεμέλιος λίθος μπήκε το 1357· οι αριθμοί της ώρας διαβάζονται ίδιοι κι ανάποδα.',
        en: 'The first stone went down in 1357; the figures read the same backwards.',
      },
      {
        el: 'Για 500 χρόνια τη φώναζαν απλώς «Πέτρινη Γέφυρα». Το όνομα του Καρόλου το πήρε το 1870.',
        en: 'For 500 years it was just the “Stone Bridge”. It took Charles’s name in 1870.',
      },
    ],
    location: {
      lat: 50.08639,
      lng: 14.41194,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q204871', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Charles Bridge', deltaM: 0 },
      ],
      verifiedAt: '2026-09-13',
      note: 'The middle of the span. OpenStreetMap did not answer in the resolver run (Overpass returned 429), so the grade rests on Wikidata and Wikipedia alone.',
      map: { x: 0.535, y: 0.34 },
      findIt: {
        el: 'Από την πλευρά της Παλιάς Πόλης μπαίνεις από την πλατεία Křižovnické náměstí, κάτω από τον γοτθικό πύργο της γέφυρας. Πήγαινε νωρίς: αργότερα γεμίζει.',
        en: 'From the Old Town side you go on at Křižovnické náměstí, under the Gothic bridge tower. Go early: later in the day it fills up.',
      },
    },
    question: {
      q: {
        el: 'Τι το ιδιαίτερο έχει η ώρα που μπήκε ο θεμέλιος λίθος;',
        en: 'What is special about the moment the first stone was laid?',
      },
      answers: [
        {
          el: 'Οι αριθμοί της διαβάζονται ίδιοι και ανάποδα',
          en: 'Its numbers read the same forwards and backwards',
        },
        {
          el: 'Ήταν η μοναδική στιγμή που φάνηκαν μαζί δύο κομήτες',
          en: 'It was the one moment two comets were seen together',
        },
        {
          el: 'Ήταν τα γενέθλια του βασιλιά και της γυναίκας του μαζί',
          en: 'It was the birthday of both the king and his wife',
        },
        {
          el: 'Ήταν η πιο ζεστή μέρα της χρονιάς',
          en: 'It was the hottest day of that year',
        },
      ],
      explanation: {
        el:
          '1-3-5-7-9-7-5-3-1: μπρος και πίσω το ίδιο. Ο Κάρολος πίστευε ότι τέτοιοι αριθμοί ' +
          'θα κρατούσαν τη γέφυρα όρθια.',
        en:
          '1-3-5-7-9-7-5-3-1: identical either way. Charles believed numbers like that would ' +
          'keep the bridge standing.',
      },
    },
  },

  // ---------------------------------------------------------------------- kampa
  {
    id: 'prague-kampa',
    cityId: 'prague',
    emoji: '🌳',
    category: 'nature',
    difficulty: 2,

    name: { el: 'Kampa', en: 'Kampa Island' },
    tagline: {
      el: 'Έγινε νησί επειδή κάποιοι ήθελαν να αλέθουν αλεύρι',
      en: 'It became an island because somebody wanted flour',
    },
    story: {
      el:
        'Η Kampa δεν ήταν πάντα νησί. Πριν από περίπου εννιακόσια χρόνια οι άνθρωποι ' +
        'έσκαψαν ένα κανάλι από τον Vltava για να γυρίζει τους νερόμυλούς τους, κι έτσι ' +
        'αυτό το κομμάτι γης βρέθηκε ανάμεσα σε δύο νερά. Το κανάλι το λένε Čertovka, ' +
        'δηλαδή Ρυάκι του Διαβόλου, και ο θρύλος λέει ότι πήρε το όνομά του από μια ' +
        'γκρινιάρα κυρία που έμενε σε ένα σπίτι με το όνομα «Στους Επτά Διαβόλους». Οι ' +
        'μύλοι άλεθαν αλεύρι για τους φούρνους της πόλης και ένας μεγάλος ξύλινος τροχός ' +
        'γυρίζει ακόμα. Το ποτάμι όμως δεν είναι πάντα ήσυχο: τον Αύγουστο του 2002 ' +
        'ανέβηκε πιο ψηλά από κάθε άλλη φορά εδώ και πεντακόσια χρόνια και σκέπασε ' +
        'ολόκληρο το νησί. Οι κάτοικοι το καθάρισαν και το έφτιαξαν ξανά. Σήμερα είναι ' +
        'ένα ήσυχο πάρκο με ένα μουσείο τέχνης σε παλιό μύλο και τρία τεράστια μπρούντζινα ' +
        'μωρά που σέρνονται στο γρασίδι, έργο του γλύπτη David Černý.',
      en:
        'Kampa was not always an island. About nine hundred years ago people dug a channel ' +
        'off the Vltava to turn their water mills, and so this piece of ground ended up ' +
        'between two waters. The channel is called the Čertovka, the Devil’s Stream, and ' +
        'the legend says it was named after a bad-tempered lady who lived in a house called ' +
        '“At the Seven Devils”. The mills ground flour for the city’s bakers, and one big ' +
        'wooden wheel still turns. But the river is not always quiet: in August 2002 it ' +
        'rose higher than it had for five hundred years and covered the whole island. The ' +
        'people cleaned it and put it back together. Today it is a calm park with an art ' +
        'museum in an old mill and three enormous bronze babies crawling on the grass, made ' +
        'by the sculptor David Černý.',
    },
    facts: [
      {
        el: 'Το κανάλι Čertovka σκάφτηκε για να γυρίζει νερόμυλους, όχι για ομορφιά.',
        en: 'The Čertovka channel was dug to turn water mills, not for beauty.',
      },
      {
        el: 'Στην πλημμύρα του Αυγούστου 2002 το νερό σκέπασε ολόκληρο το νησί.',
        en: 'In the flood of August 2002 the water covered the whole island.',
      },
      {
        el: 'Τα τρία μπρούντζινα μωρά έχουν μια σχισμή στο πρόσωπο αντί για μάτια και μύτη.',
        en: 'The three bronze babies have a slot in the face instead of eyes and a nose.',
      },
    ],
    location: {
      lat: 50.08722,
      lng: 14.40861,
      anchor: 'area',
      confidence: 'C',
      sources: [
        { kind: 'wikidata', ref: 'Q3501077', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Kampa Island', deltaM: 248 },
      ],
      verifiedAt: '2026-09-13',
      note: 'An area pin on an island about 600 m long, so Wikipedia\'s point 248 m away is a different part of the same island rather than a disagreement — well inside the 500 m tolerance for an area. OpenStreetMap did not answer in the resolver run (Overpass returned 429), which is why only one source lands inside the agreement band and the grade is C.',
      map: { x: 0.475, y: 0.319 },
      findIt: {
        el: 'Πέρασε τη γέφυρα και, λίγο πριν από τους πύργους στην απέναντι άκρη, κατέβα τα σκαλιά στα αριστερά. Το πάρκο με τα μωρά είναι μπροστά σου.',
        en: 'Cross the bridge and, just before the towers at the far end, take the steps down on the left. The park with the babies is straight ahead.',
      },
    },
    question: {
      q: {
        el: 'Γιατί έσκαψαν οι άνθρωποι το κανάλι Čertovka;',
        en: 'Why did people dig the Čertovka channel?',
      },
      answers: [
        {
          el: 'Για να γυρίζει τους νερόμυλους που άλεθαν το αλεύρι της πόλης',
          en: 'To turn the water mills that ground the city’s flour',
        },
        {
          el: 'Για να μπορούν τα καράβια να παρακάμπτουν τη γέφυρα',
          en: 'So that boats could go around the bridge',
        },
        {
          el: 'Για να προστατεύσουν την πόλη από τις πλημμύρες',
          en: 'To protect the city from being flooded',
        },
        {
          el: 'Για να έχουν οι κάτοικοι πού να ψαρεύουν το καλοκαίρι',
          en: 'To give the people somewhere to fish in summer',
        },
      ],
      explanation: {
        el:
          'Το νερό του καναλιού γύριζε τους τροχούς των μύλων, που άλεθαν το αλεύρι της ' +
          'πόλης. Το νησί ήταν παρενέργεια.',
        en:
          'The water in the channel turned the mill wheels that ground the city’s flour. ' +
          'The island was a side effect.',
      },
    },
  },

  // ----------------------------------------------------------------- lennon wall
  {
    id: 'prague-lennon-wall',
    cityId: 'prague',
    emoji: '☮️',
    category: 'art',
    difficulty: 3,

    name: { el: 'Lennonova zeď', en: 'The Lennon Wall' },
    tagline: {
      el: 'Τον έβαφαν άσπρο και την επόμενη μέρα ξαναγέμιζε',
      en: 'They painted it white and next day it filled up again',
    },
    story: {
      el:
        'Το 1980 πέθανε ξαφνικά ο John Lennon, ο τραγουδιστής των Beatles που έγραφε ' +
        'τραγούδια για την ειρήνη, και οι νέοι της Πράγας θέλησαν να τον θυμούνται. ' +
        'Κάποιος ζωγράφισε το πρόσωπό του σε αυτόν τον τοίχο και άλλοι πρόσθεσαν στίχους ' +
        'και ευχές. Εκείνα τα χρόνια όμως δεν επιτρεπόταν να γράφεις ελεύθερα τη γνώμη ' +
        'σου. Η αστυνομία έβαφε τον τοίχο άσπρο, κι εκείνος ξαναγέμιζε μηνύματα μέσα σε ' +
        'μία νύχτα. Έβαφαν, ξαναγέμιζε. Έβαφαν, ξαναγέμιζε. Έτσι ένας απλός τοίχος έγινε ' +
        'σύμβολο για κάτι που κανείς δεν είχε σχεδιάσει: οι ιδέες δεν σβήνονται με μια ' +
        'βούρτσα. Ο τοίχος ανήκει στον κήπο του Τάγματος της Μάλτας, που το 2019 τον ' +
        'ανακαίνισε και τον ανακήρυξε υπαίθρια γκαλερί, με κανόνες για το τι μπορεί να ' +
        'προσθέσει ο επισκέπτης. Ό,τι βλέπεις σήμερα μπορεί αύριο να έχει σκεπαστεί από ' +
        'κάτι άλλο. Είναι ίσως το μόνο έργο τέχνης της πόλης που δεν είναι ποτέ έτοιμο.',
      en:
        'In 1980 John Lennon, the Beatles singer who wrote songs about peace, died ' +
        'suddenly, and young people in Prague wanted to remember him. Someone painted his ' +
        'face on this wall and others added lyrics and wishes. In those years, though, you ' +
        'were not allowed to write your opinions freely. The police painted the wall white, ' +
        'and it filled up with messages again within a night. They painted; it filled up. ' +
        'They painted; it filled up. So an ordinary wall came to stand for something nobody ' +
        'had planned: ideas cannot be brushed out. The wall belongs to the garden of the ' +
        'Order of Malta, which restored it in 2019 and declared it an open-air gallery, ' +
        'with rules about what a visitor may add. What you see today may be covered by ' +
        'something else tomorrow. It is perhaps the only artwork in the city that is never ' +
        'finished.',
    },
    facts: [
      {
        el: 'Οι ζωγραφιές ξεκίνησαν το 1980, τη χρονιά που πέθανε ο John Lennon.',
        en: 'The painting began in 1980, the year John Lennon died.',
      },
      {
        el: 'Ο τοίχος ανήκει στο Τάγμα της Μάλτας, που τον ανακαίνισε το 2019.',
        en: 'The wall belongs to the Order of Malta, which restored it in 2019.',
      },
      {
        el: 'Το σήμα της ειρήνης σχεδιάστηκε το 1958, πολύ πριν από τον τοίχο.',
        en: 'The peace sign was designed in 1958, long before the wall existed.',
      },
    ],
    location: {
      lat: 50.08624,
      lng: 14.40695,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q1630131', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Lennon Wall', deltaM: 0 },
      ],
      verifiedAt: '2026-09-13',
      note: 'OpenStreetMap did not answer in the resolver run (Overpass returned 429), so the grade rests on Wikidata and Wikipedia alone.',
      map: { x: 0.446, y: 0.344 },
      findIt: {
        el: 'Είναι στη μικρή πλατεία Velkopřevorské náměstí. Από το πάρκο της Kampa περπάτα τρία λεπτά βόρεια και πέρασε το γεφυράκι δίπλα στον νερόμυλο.',
        en: 'It is on the small Velkopřevorské náměstí square. From Kampa park walk three minutes north and cross the little bridge beside the water wheel.',
      },
    },
    question: {
      q: {
        el: 'Τι γινόταν κάθε φορά που η αστυνομία έβαφε τον τοίχο άσπρο;',
        en: 'What happened each time the police painted the wall white?',
      },
      answers: [
        {
          el: 'Ο κόσμος τον ξαναγέμιζε μηνύματα αμέσως',
          en: 'People filled it with messages again at once',
        },
        {
          el: 'Ο τοίχος έμενε άσπρος για μήνες',
          en: 'The wall stayed white for months',
        },
        {
          el: 'Οι κάτοικοι ζωγράφιζαν σε έναν άλλον τοίχο πιο κάτω',
          en: 'People painted a different wall further down instead',
        },
        {
          el: 'Το Τάγμα της Μάλτας πλήρωνε για να ξαναβαφτεί από την αρχή',
          en: 'The Order of Malta paid to have it repainted from scratch',
        },
      ],
      explanation: {
        el:
          'Κάθε άσπρος τοίχος ήταν πρόσκληση. Μέσα σε μία νύχτα ξαναγέμιζε, και αυτό ' +
          'ακριβώς τον έκανε σύμβολο.',
        en:
          'Every white wall was an invitation. Within a night it filled again, and that is ' +
          'exactly what made it a symbol.',
      },
    },
  },

  // --------------------------------------------------------------- prague castle
  {
    id: 'prague-castle',
    cityId: 'prague',
    emoji: '🏰',
    category: 'landmark',
    difficulty: 1,

    name: { el: 'Pražský hrad', en: 'Prague Castle' },
    tagline: {
      el: 'Το μεγαλύτερο παλιό κάστρο του κόσμου, και δουλεύουν ακόμα μέσα',
      en: 'The largest old castle in the world, and still at work',
    },
    story: {
      el:
        'Πριν από περισσότερα από χίλια εκατό χρόνια ένας πρίγκιπας με το όνομα Bořivoj ' +
        'έχτισε ένα ξύλινο οχυρό σε αυτόν τον λόφο, πάνω από το ποτάμι. Από τότε κάθε ' +
        'άρχοντας της Βοημίας πρόσθεσε κάτι δικό του: τείχη, παλάτια, εκκλησίες, κήπους, ' +
        'έναν στενό δρόμο με μικροσκοπικά σπιτάκια. Κανείς δεν σχεδίασε ποτέ ολόκληρο το ' +
        'κάστρο· απλώς κανείς δεν σταμάτησε να χτίζει. Έτσι σήμερα απλώνεται σε σχεδόν ' +
        'εβδομήντα χιλιάδες τετραγωνικά μέτρα, όσο περίπου δέκα γήπεδα ποδοσφαίρου, και ' +
        'είναι το μεγαλύτερο αρχαίο συγκρότημα κάστρου στον κόσμο. Το πιο παράξενο ' +
        'όμως είναι ότι δεν είναι μουσείο. Ο Πρόεδρος της Τσεχίας έχει εδώ το γραφείο ' +
        'του, και όταν βρίσκεται στη χώρα κυματίζει μια ειδική σημαία στη στέγη. Στις ' +
        'πύλες στέκονται φρουροί με μπλε στολές, που τις σχεδίασε το 1990 ο Theodor ' +
        'Pištěk, ένας σχεδιαστής κοστουμιών του κινηματογράφου με βραβείο Όσκαρ. Κάθε ' +
        'μεσημέρι αλλάζουν βάρδια με μουσική.',
      en:
        'More than eleven hundred years ago a prince named Bořivoj built a wooden fort on ' +
        'this hill above the river. Since then every ruler of Bohemia has added something ' +
        'of their own: walls, palaces, churches, gardens, a narrow lane of tiny houses. ' +
        'Nobody ever designed the whole castle; people simply never stopped building it. So ' +
        'today it spreads over almost seventy thousand square metres, about ten football ' +
        'pitches, and it is the largest ancient castle complex in the world. The strangest ' +
        'thing about it, though, is that it is not a museum. The President of Czechia has ' +
        'an office here, and when he is in the country a special flag flies from the roof. ' +
        'Guards in blue uniforms stand at the gates; the uniforms were designed in 1990 by ' +
        'Theodor Pištěk, a film costume designer who had won an Oscar. Every day at noon ' +
        'the guards change shift to music.',
    },
    facts: [
      {
        el: 'Απλώνεται σε σχεδόν 70.000 τετραγωνικά μέτρα, όσο δέκα γήπεδα ποδοσφαίρου.',
        en: 'It covers almost 70,000 square metres, about ten football pitches.',
      },
      {
        el: 'Τις μπλε στολές των φρουρών τις σχεδίασε το 1990 ένας βραβευμένος με Όσκαρ.',
        en: 'The guards’ blue uniforms were designed in 1990 by an Oscar winner.',
      },
      {
        el: 'Ο πρώτος που έχτισε εδώ ήταν ο πρίγκιπας Bořivoj, με ξύλινο οχυρό.',
        en: 'The first to build here was Prince Bořivoj, with a wooden fort.',
      },
    ],
    location: {
      lat: 50.09,
      lng: 14.4,
      anchor: 'area',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q193369', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Prague Castle', deltaM: 0 },
      ],
      verifiedAt: '2026-09-13',
      note: 'An area pin on a complex of some seven hectares; the cathedral inside it has its own coordinate 101 m away and is a separate place in this file. OpenStreetMap did not answer in the resolver run (Overpass returned 429), so the grade rests on Wikidata and Wikipedia alone.',
      map: { x: 0.321, y: 0.25 },
      findIt: {
        el: 'Οι αυλές είναι ελεύθερες και μπαίνεις από τις πύλες, όπου ελέγχουν τις τσάντες. Από τον τοίχο του Λένον ανηφορίζεις είκοσι λεπτά από την οδό Nerudova.',
        en: 'The courtyards are free and you go in through the gates, where bags are checked. From the Lennon Wall it is a twenty-minute climb up Nerudova street.',
      },
    },
    question: {
      q: {
        el: 'Ποιος δουλεύει σήμερα μέσα στο κάστρο;',
        en: 'Who works inside the castle today?',
      },
      answers: [
        {
          el: 'Ο Πρόεδρος της Τσεχίας, στο γραφείο του',
          en: 'The President of Czechia, in his office',
        },
        {
          el: 'Ο βασιλιάς της Βοημίας μαζί με όλη την αυλή του',
          en: 'The king of Bohemia along with his whole court',
        },
        {
          el: 'Ο δήμαρχος της Πράγας και οι υπάλληλοι του δήμου',
          en: 'The mayor of Prague and the officials of the city',
        },
        {
          el: 'Κανένας πια· το κάστρο είναι άδειο εδώ και χρόνια',
          en: 'Nobody any more; the castle has been empty for years',
        },
      ],
      explanation: {
        el:
          'Η Τσεχία δεν έχει βασιλιά εδώ και πάνω από εκατό χρόνια. Το κάστρο κράτησε τη ' +
          'δουλειά του: εδώ κάθεται ο αρχηγός του κράτους.',
        en:
          'Czechia has had no king for over a hundred years. The castle kept its job: this ' +
          'is where the head of state sits.',
      },
    },
  },

  // ------------------------------------------------------------ st vitus cathedral
  {
    id: 'prague-st-vitus',
    cityId: 'prague',
    emoji: '⛪',
    category: 'history',
    difficulty: 3,

    name: { el: 'Katedrála svatého Víta', en: 'St Vitus Cathedral' },
    tagline: {
      el: 'Ξεκίνησε το 1344 και τελείωσε το 1929',
      en: 'Begun in 1344 and finished in 1929',
    },
    story: {
      el:
        'Ο Κάρολος ο Δ΄ ξεκίνησε το 1344 τον τεράστιο καθεδρικό ναό στη μέση του κάστρου. ' +
        'Πρώτος αρχιτέκτονας ήταν ο Matthias από την Αράς, και όταν πέθανε τη δουλειά ' +
        'ανέλαβε ο Peter Parler, που ήταν τότε μόλις είκοσι τριών ετών. Ο Parler έκανε ' +
        'πράγματα που δεν είχε ξανακάνει κανείς με πέτρα, και σκάλισε μέσα και τα ' +
        'πρόσωπα των ανθρώπων που έχτιζαν τον ναό, ανάμεσά τους και το δικό του. Μετά ' +
        'τέλειωσαν τα χρήματα. Ήρθαν πόλεμοι, φωτιές και αιώνες. Ο ναός έμεινε μισός, με ' +
        'έναν προσωρινό τοίχο στη μέση, και οι Πραγινοί συνήθισαν να τον βλέπουν έτσι. ' +
        'Τελείωσε μόλις το 1929, σχεδόν εξακόσια χρόνια μετά την πρώτη πέτρα. Μέσα, το ' +
        'παρεκκλήσι του Αγίου Václav έχει τοίχους στολισμένους με περισσότερους από ' +
        'χίλιους τριακόσιους ημιπολύτιμους λίθους, και σε ένα δωμάτιο από πάνω φυλάγεται ' +
        'το στέμμα της Βοημίας, πίσω από μια πόρτα με επτά κλειδαριές.',
      en:
        'Charles IV began the enormous cathedral in the middle of the castle in 1344. The ' +
        'first architect was Matthias of Arras, and when he died the work passed to Peter ' +
        'Parler, who was then only twenty-three. Parler did things with stone that nobody ' +
        'had done before, and he carved into the building the faces of the people who were ' +
        'putting it up, his own among them. Then the money ran out. Wars came, and fires, ' +
        'and centuries. The church stood half built, with a temporary wall across the ' +
        'middle, and the people of Prague got used to seeing it that way. It was finished ' +
        'only in 1929, almost six hundred years after the first stone. Inside, the walls of ' +
        'the St Wenceslas Chapel are set with more than thirteen hundred semi-precious ' +
        'stones, and in a room above it the crown of Bohemia is kept behind a door with ' +
        'seven locks.',
    },
    facts: [
      {
        el: 'Ξεκίνησε το 1344 και τελείωσε το 1929: σχεδόν 600 χρόνια με πολλές παύσεις.',
        en: 'Begun in 1344, finished in 1929: almost 600 years, with many pauses.',
      },
      {
        el: 'Η πόρτα που φυλάει το στέμμα έχει επτά κλειδαριές και επτά κλειδιά σε επτά χέρια.',
        en: 'The door guarding the crown has seven locks and seven keys in seven hands.',
      },
      {
        el: 'Οι τοίχοι του παρεκκλησίου του Αγίου Václav έχουν πάνω από 1.300 πολύχρωμες πέτρες.',
        en: 'The St Wenceslas Chapel walls carry over 1,300 coloured stones.',
      },
    ],
    location: {
      lat: 50.09083,
      lng: 14.40056,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q5949', deltaM: 0 },
        { kind: 'wikipedia', ref: 'St. Vitus Cathedral', deltaM: 0 },
      ],
      verifiedAt: '2026-09-13',
      note: 'Split out of the castle rather than folded into it: the cathedral is its own Wikidata item with its own point, 101 m from the castle\'s. OpenStreetMap did not answer in the resolver run (Overpass returned 504), so the grade rests on Wikidata and Wikipedia alone.',
      map: { x: 0.331, y: 0.229 },
      findIt: {
        el: 'Γεμίζει την τρίτη αυλή του κάστρου, οπότε δεν τη βλέπεις ολόκληρη παρά μόνο από κοντά. Μπαίνεις από τη δυτική πλευρά, κάτω από τους δύο ψηλούς πύργους.',
        en: 'It fills the castle’s third courtyard, so you cannot see all of it until you are close. You go in at the west end, under the two tall front towers.',
      },
    },
    question: {
      q: {
        el: 'Πόσος καιρός πέρασε από την πρώτη ως την τελευταία πέτρα του ναού;',
        en: 'How long passed between the cathedral’s first and last stone?',
      },
      answers: [
        {
          el: 'Σχεδόν εξακόσια χρόνια, από το 1344 ως το 1929',
          en: 'Almost six hundred years, from 1344 until 1929',
        },
        {
          el: 'Σαράντα χρόνια, όσο κράτησε ο Κάρολος',
          en: 'Forty years, the length of Charles’s reign',
        },
        {
          el: 'Εκατόν είκοσι χρόνια, τρεις γενιές μαστόρων στη σειρά',
          en: 'A hundred and twenty years, three generations of masons',
        },
        {
          el: 'Δεν τελείωσε ποτέ· λείπει ακόμα ο δεύτερος μεγάλος πύργος',
          en: 'It never finished; the second great tower is still missing',
        },
      ],
      explanation: {
        el:
          'Τα χρήματα τέλειωσαν, ήρθαν πόλεμοι, και ο ναός έμεινε μισός με έναν προσωρινό ' +
          'τοίχο. Ο «προσωρινός» τοίχος έμεινε αιώνες.',
        en:
          'The money ran out, wars came, and the church stayed half built behind a ' +
          'temporary wall. The temporary wall lasted centuries.',
      },
    },
  },

  // ---------------------------------------------------------------- petřín tower
  {
    id: 'prague-petrin-tower',
    cityId: 'prague',
    emoji: '🗼',
    category: 'landmark',
    difficulty: 1,

    name: { el: 'Petřínská rozhledna', en: 'The Petřín Tower' },
    tagline: {
      el: 'Πιο κοντός από τον Άιφελ, αλλά η κορυφή του πιο ψηλά',
      en: 'Shorter than the Eiffel Tower, but its top is higher',
    },
    story: {
      el:
        'Το 1891 η Πράγα ετοίμαζε μια μεγάλη έκθεση για να δείξει στον κόσμο τι ξέρει να ' +
        'φτιάχνει. Μερικοί κάτοικοι είχαν πάει στο Παρίσι, είχαν δει τον ολοκαίνουργιο ' +
        'Πύργο του Άιφελ και γύρισαν λέγοντας ότι θέλουν κι αυτοί έναν. Σε λίγους μήνες ' +
        'σηκώθηκε στην κορυφή του λόφου Petřín αυτός ο σιδερένιος πύργος, 63,5 μέτρα. ' +
        'Είναι πέντε φορές πιο κοντός από τον γαλλικό, αλλά επειδή στέκεται σε λόφο, η ' +
        'κορυφή του βρίσκεται πιο ψηλά πάνω από τη θάλασσα από την κορυφή του Παρισιού. ' +
        'Για την ίδια έκθεση φτιάχτηκε και το τελεφερίκ που σε ανεβάζει ως εκεί, και ' +
        'στην αρχή δούλευε με νερό: το βαγόνι που κατέβαινε γέμιζε νερό, βάραινε, και ' +
        'τραβούσε προς τα πάνω το άλλο. Δίπλα στον πύργο ένα μικρό κτίριο σαν κάστρο ' +
        'κρύβει έναν λαβύρινθο από καθρέφτες, χτισμένο την ίδια χρονιά.',
      en:
        'In 1891 Prague was getting ready for a great exhibition to show the world what it ' +
        'could build. Some of its people had been to Paris, seen the brand-new Eiffel Tower ' +
        'and come home saying they wanted one too. Within a few months this iron tower rose ' +
        'on top of Petřín hill, 63.5 metres high. It is five times shorter than the French ' +
        'one, but because it stands on a hill its top is higher above the sea than the top ' +
        'of the Paris tower. The funicular railway that carries you up was built for the ' +
        'same exhibition, and at first it ran on water: the carriage coming down filled ' +
        'with water, grew heavy, and pulled the other one up. Beside the tower a small ' +
        'building shaped like a castle hides a maze of mirrors, put up in the same year.',
    },
    facts: [
      {
        el: 'Έχει ύψος 63,5 μέτρα και 299 σκαλοπάτια μέχρι την κορυφή.',
        en: 'It is 63.5 metres tall, with 299 steps to the top.',
      },
      {
        el: 'Το τελεφερίκ στην αρχή δούλευε με νερό, όχι με ηλεκτρισμό.',
        en: 'The funicular first worked on water, not on electricity.',
      },
      {
        el: 'Ο λαβύρινθος των καθρεφτών δίπλα του χτίστηκε την ίδια χρονιά, το 1891.',
        en: 'The mirror maze next to it was built in the same year, 1891.',
      },
    ],
    location: {
      lat: 50.08354,
      lng: 14.39505,
      anchor: 'viewpoint',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q12256', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Petřín Lookout Tower', deltaM: 0 },
      ],
      verifiedAt: '2026-09-13',
      note: 'A viewpoint: the tower is the chosen spot on a hill a kilometre across, not the hill\'s middle. OpenStreetMap did not answer in the resolver run (Overpass returned 504), so the grade rests on Wikidata and Wikipedia alone.',
      map: { x: 0.233, y: 0.412 },
      findIt: {
        el: 'Είναι τρία λεπτά με τα πόδια από τον πάνω σταθμό του τελεφερίκ, που ξεκινάει από το Újezd. Αλλιώς ανηφορίζεις μέσα από τους κήπους.',
        en: 'It is a three-minute walk from the top station of the funicular, which starts at Újezd. Otherwise you climb up through the gardens.',
      },
    },
    question: {
      q: {
        el: 'Πώς γίνεται η κορυφή του να είναι πιο ψηλά από του Πύργου του Άιφελ;',
        en: 'How can its top be higher than the Eiffel Tower’s top?',
      },
      answers: [
        {
          el: 'Επειδή στέκεται πάνω σε έναν λόφο που είναι ήδη πολύ ψηλός',
          en: 'Because it stands on top of a hill that is already high',
        },
        {
          el: 'Επειδή έχει μια πολύ μακριά κεραία στην κορυφή του',
          en: 'Because it has a very long aerial on its top',
        },
        {
          el: 'Επειδή ο Πύργος του Άιφελ κοντύνει λίγο κάθε χειμώνα',
          en: 'Because the Eiffel Tower shrinks a little each winter',
        },
        {
          el: 'Επειδή τον μέτρησαν μαζί με τα θεμέλιά του στο έδαφος',
          en: 'Because it was measured together with its foundations',
        },
      ],
      explanation: {
        el:
          'Δύο ύψη είναι διαφορετικά πράγματα: πόσο ψηλός είναι ο πύργος και πόσο ψηλά ' +
          'βρίσκεται η κορυφή του. Ο λόφος κάνει τη διαφορά.',
        en:
          'Two heights are different things: how tall the tower is, and how high its top ' +
          'sits. The hill makes the difference.',
      },
    },
  },

  // ------------------------------------------------------------ wenceslas square
  {
    id: 'prague-wenceslas-square',
    cityId: 'prague',
    emoji: '🐎',
    category: 'history',
    difficulty: 3,

    name: { el: 'Václavské náměstí', en: 'Wenceslas Square' },
    tagline: {
      el: 'Το λένε πλατεία, αλλά είναι μια αγορά αλόγων 750 μέτρων',
      en: 'They call it a square, but it is a 750-metre horse market',
    },
    story: {
      el:
        'Το 1348 ο Κάρολος ο Δ΄ ίδρυσε μια ολόκληρη καινούργια πόλη δίπλα στην παλιά, τη ' +
        'Nové Město, και σχεδίασε μέσα της μια τεράστια αγορά, 750 μέτρα μακριά, όπου ' +
        'πουλούσαν άλογα. Γι’ αυτό δεν μοιάζει με πλατεία αλλά με λεωφόρο: χρειάζεσαι ' +
        'δέκα λεπτά για να τη διασχίσεις. Το 1848 πήρε το όνομα του Αγίου Václav, του ' +
        'πρίγκιπα που κυβέρνησε τη Βοημία πριν από χίλια εκατό χρόνια και έγινε ο ' +
        'προστάτης της χώρας. Ο γλύπτης Josef Václav Myslbek δούλεψε το άγαλμά του πάνω ' +
        'από τριάντα χρόνια· στήθηκε το 1912, και ο τελευταίος από τους τέσσερις αγίους ' +
        'γύρω του μπήκε στη θέση του μόλις το 1924. Από τότε, όποτε συμβαίνει κάτι ' +
        'μεγάλο, η πόλη μαζεύεται εδώ. Τον Νοέμβριο του 1989 εκατοντάδες χιλιάδες ' +
        'άνθρωποι γέμισαν την πλατεία κουνώντας τα κλειδιά τους και ζήτησαν ελευθερία ' +
        'χωρίς καμία βία. Την ονόμασαν Βελούδινη Επανάσταση.',
      en:
        'In 1348 Charles IV founded a whole new town beside the old one, the Nové Město, ' +
        'and laid out inside it an enormous market, 750 metres long, where horses were ' +
        'sold. That is why it does not look like a square but like a boulevard: it takes ' +
        'ten minutes to walk from one end to the other. In 1848 it was named after Saint ' +
        'Václav, the prince who ruled Bohemia eleven hundred years ago and became the ' +
        'country’s patron saint. The sculptor Josef Václav Myslbek worked on his statue for ' +
        'more than thirty years; it was raised in 1912, and the last of the four saints ' +
        'around it was only put in place in 1924. Ever since, whenever something big ' +
        'happens, the city gathers here. In November 1989 hundreds of thousands of people ' +
        'filled the square, jingling their keys, and asked for freedom with no violence at ' +
        'all. They called it the Velvet Revolution.',
    },
    facts: [
      {
        el: 'Έχει μήκος 750 μέτρα και ξεκίνησε το 1348 ως αγορά αλόγων.',
        en: 'It is 750 metres long and started in 1348 as a horse market.',
      },
      {
        el: 'Ο γλύπτης δούλεψε το άγαλμα του Αγίου Václav πάνω από τριάντα χρόνια.',
        en: 'The sculptor worked on the statue of Saint Václav for over thirty years.',
      },
      {
        el: 'Τον Νοέμβριο του 1989 ο κόσμος κουνούσε εδώ τα κλειδιά του αντί να φωνάζει.',
        en: 'In November 1989 people here jingled their keys instead of shouting.',
      },
    ],
    location: {
      lat: 50.08231,
      lng: 14.42614,
      anchor: 'area',
      confidence: 'C',
      sources: [
        { kind: 'wikidata', ref: 'Q847613', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Wenceslas Square', deltaM: 141 },
      ],
      verifiedAt: '2026-09-13',
      note: 'An area pin on a square 750 m long, so Wikipedia\'s point 141 m away is another stretch of the same paving rather than a disagreement. OpenStreetMap did not answer in the resolver run (Overpass returned 504), which is why only one source lands inside the agreement band and the grade is C.',
      map: { x: 0.788, y: 0.442 },
      findIt: {
        el: 'Στέκεται σε πλαγιά, οπότε ξέρεις πάντα πού είσαι: το άγαλμα και το μουσείο είναι στο ψηλό άκρο, ο πεζόδρομος με τα μαγαζιά στο χαμηλό.',
        en: 'It runs up a slope, so you always know where you are: the statue and the museum are at the high end, the shops at the low one.',
      },
    },
    question: {
      q: {
        el: 'Γιατί ονομάστηκε «Βελούδινη» η επανάσταση του 1989;',
        en: 'Why was the revolution of 1989 called “Velvet”?',
      },
      answers: [
        {
          el: 'Γιατί έγινε απαλά, χωρίς καθόλου βία',
          en: 'Because it happened gently, with no violence',
        },
        {
          el: 'Γιατί ξεκίνησε μέσα σε ένα εργοστάσιο υφασμάτων της πόλης',
          en: 'Because it began inside a cloth factory in the city',
        },
        {
          el: 'Γιατί οι διαδηλωτές φορούσαν όλοι βελούδινα καπέλα',
          en: 'Because the crowds all wore hats made out of velvet',
        },
        {
          el: 'Γιατί κράτησε μόνο μία νύχτα',
          en: 'Because it lasted only one night',
        },
      ],
      explanation: {
        el:
          'Ζήτησαν ελευθερία ειρηνικά και την πήραν χωρίς μάχες. Γι’ αυτό η αλλαγή ' +
          'ονομάστηκε απαλή σαν βελούδο.',
        en:
          'They asked for freedom peacefully and got it without fighting. That is why the ' +
          'change was called as soft as velvet.',
      },
    },
  },

  // --------------------------------------------------------------- dancing house
  {
    id: 'prague-dancing-house',
    cityId: 'prague',
    emoji: '💃',
    category: 'art',
    difficulty: 2,

    name: { el: 'Tančící dům', en: 'The Dancing House' },
    tagline: {
      el: 'Δύο πύργοι που μοιάζουν να χορεύουν αγκαλιασμένοι',
      en: 'Two towers that look as if they are dancing together',
    },
    story: {
      el:
        'Εδώ στη γωνία υπήρχε κάποτε ένα συνηθισμένο σπίτι, ίδιο με τα διπλανά του. Στο ' +
        'τέλος του Β΄ Παγκοσμίου Πολέμου, το 1945, μια βόμβα έπεσε κατά λάθος και το ' +
        'γκρέμισε, και η γωνία έμεινε άδεια για σχεδόν πενήντα χρόνια. Στο διπλανό κτίριο ' +
        'έμενε ένας συγγραφέας, ο Václav Havel, που αργότερα έγινε Πρόεδρος της χώρας, ' +
        'και σκεφτόταν χρόνια τι θα μπορούσε να μπει σε εκείνο το κενό. Στο τέλος δύο ' +
        'αρχιτέκτονες, ο Τσέχος Vlado Milunić και ο Αμερικανός Frank Gehry, σχεδίασαν ' +
        'μαζί ένα κτίριο που χορεύει. Χτίστηκε στα 1992–1996. Ο ένας πύργος είναι ' +
        'γυάλινος και στενεύει στη μέση σαν κορμί χορεύτριας· ο άλλος είναι τσιμεντένιος ' +
        'και φοράει ένα κουβάρι από μεταλλικούς σωλήνες. Η πρόσοψη έχει ενενήντα εννιά ' +
        'τσιμεντένια πάνελ, το καθένα με άλλο σχήμα, και τα παράθυρα δεν είναι σε ίσιες ' +
        'σειρές, ώστε το κτίριο να φαίνεται ότι κουνιέται. Στην αρχή πολλοί το έβρισκαν ' +
        'αταίριαστο.',
      en:
        'There was once an ordinary house on this corner, just like its neighbours. At the ' +
        'end of the Second World War, in 1945, a bomb fell here by mistake and destroyed ' +
        'it, and the corner stayed empty for almost fifty years. In the building next door ' +
        'lived a writer, Václav Havel, who later became President of the country, and for ' +
        'years he wondered what could go into that gap. In the end two architects, the ' +
        'Czech Vlado Milunić and the American Frank Gehry, designed a building that dances. ' +
        'It went up in 1992–1996. One tower is glass and narrows in the middle like a ' +
        'dancer’s waist; the other is concrete and wears a tangle of metal tubes. The front ' +
        'is made of ninety-nine concrete panels, each a different shape, and the windows ' +
        'are not in straight rows, so that the building seems to be moving. At first many ' +
        'people thought it did not belong here.',
    },
    facts: [
      {
        el: 'Χτίστηκε στα 1992–1996, στη γωνία που είχε μείνει άδεια από το 1945.',
        en: 'It was built in 1992–1996, on a corner left empty since 1945.',
      },
      {
        el: 'Η πρόσοψή του έχει 99 τσιμεντένια πάνελ και κανένα δεν είναι ίδιο με άλλο.',
        en: 'Its front has 99 concrete panels and no two of them are the same.',
      },
      {
        el: 'Το παρατσούκλι «Fred και Ginger» έρχεται από ένα ζευγάρι χορευτών του παλιού σινεμά.',
        en: 'The nickname “Fred and Ginger” comes from a dancing pair in old films.',
      },
    ],
    location: {
      lat: 50.07556,
      lng: 14.41417,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q244816', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Dancing House', deltaM: 1 },
      ],
      verifiedAt: '2026-09-13',
      note: 'OpenStreetMap did not answer in the resolver run (Overpass returned 429), so the grade rests on Wikidata and Wikipedia alone.',
      map: { x: 0.574, y: 0.611 },
      findIt: {
        el: 'Είναι στην προκυμαία Rašínovo nábřeží, στη γωνία της πλατείας Jiráskovo náměstí. Δες το από την απέναντι όχθη: μόνο από εκεί «χορεύει» σωστά.',
        en: 'It is on the Rašínovo nábřeží embankment, at the corner of Jiráskovo náměstí. Look at it from the far bank: only from there does it dance properly.',
      },
    },
    question: {
      q: {
        el: 'Γιατί έμεινε άδεια αυτή η γωνία για σχεδόν πενήντα χρόνια;',
        en: 'Why did this corner stay empty for almost fifty years?',
      },
      answers: [
        {
          el: 'Το σπίτι της γκρεμίστηκε από βόμβα το 1945',
          en: 'Its house was destroyed by a bomb in 1945',
        },
        {
          el: 'Το έδαφος δίπλα στο ποτάμι ήταν πολύ μαλακό για χτίσιμο',
          en: 'The ground by the river was too soft to build on',
        },
        {
          el: 'Η πόλη το κρατούσε για να φτιάξει εκεί μια νέα γέφυρα',
          en: 'The city was keeping it for a new bridge to be built',
        },
        {
          el: 'Οι γείτονες δεν συμφωνούσαν ποτέ σε ένα κοινό σχέδιο',
          en: 'The neighbours could never agree on a plan for it',
        },
      ],
      explanation: {
        el:
          'Στο τέλος του πολέμου μια βόμβα έπεσε κατά λάθος εδώ. Η γωνία περίμενε ως τη ' +
          'δεκαετία του 1990 για να ξαναχτιστεί.',
        en:
          'At the end of the war a bomb fell here by mistake. The corner then waited until ' +
          'the 1990s to be built on again.',
      },
    },
  },

  // -------------------------------------------------------------- national museum
  {
    id: 'prague-national-museum',
    cityId: 'prague',
    emoji: '🐋',
    category: 'museum',
    difficulty: 2,

    name: { el: 'Národní muzeum', en: 'The National Museum' },
    tagline: {
      el: 'Ήταν μαύρο επειδή το είχαν βάψει, όχι από τη μουτζούρα',
      en: 'It was black because somebody painted it, not from soot',
    },
    story: {
      el:
        'Το μουσείο ξεκίνησε το 1818 από τις ιδιωτικές συλλογές κάποιων ευγενών, που ' +
        'αποφάσισαν ότι οι πέτρες, τα φυτά και τα βιβλία τους πρέπει να τα βλέπουν όλοι. ' +
        'Για εβδομήντα χρόνια οι συλλογές μετακόμιζαν από παλάτι σε παλάτι, ώσπου η πόλη ' +
        'έδωσε οικόπεδο στην κορυφή της Václavské náměstí. Ο διαγωνισμός του 1883 είχε ' +
        'είκοσι επτά συμμετοχές· κέρδισε ο Josef Schulz, με την ιδέα ότι ένα μουσείο ' +
        'είναι ναός της γνώσης. Άνοιξε στις 18 Μαΐου 1891. Τον Αύγουστο του 1968 η ' +
        'πρόσοψη χτυπήθηκε από πυροβολισμούς όταν ξένοι στρατοί μπήκαν στην πόλη· στην ' +
        'επισκευή του 1971–1973 οι τρύπες γέμισαν με εκατοντάδες μικρά κομμάτια νέας ' +
        'πέτρας, και ταυτόχρονα ολόκληρο το κτίριο βάφτηκε μαύρο για να δείχνει πιο ' +
        'παλιό. Δεν ήταν λοιπόν μουτζούρα, ήταν μπογιά. Το μουσείο έκλεισε το 2011 και ' +
        'ξανάνοιξε στις 28 Οκτωβρίου 2018, καθαρό και ανοιχτόχρωμο ξανά.',
      en:
        'The museum began in 1818 out of the private collections of a few noblemen, who ' +
        'decided that their stones, plants and books ought to be seen by everybody. For ' +
        'seventy years the collections moved from palace to palace, until the city gave a ' +
        'plot of land at the top of Wenceslas Square. The competition of 1883 drew ' +
        'twenty-seven entries; Josef Schulz won it, with the idea that a museum is a temple ' +
        'of learning. It opened on 18 May 1891. In August 1968 the front of the building ' +
        'was hit by gunfire when foreign armies came into the city; in the repair of ' +
        '1971–1973 the holes were filled with hundreds of small plugs of new stone, and at ' +
        'the same time the whole building was painted black to make it look older. So the ' +
        'black was not soot, it was paint. The museum closed in 2011 and opened again on 28 ' +
        'October 2018, clean and pale once more.',
    },
    facts: [
      {
        el: 'Ιδρύθηκε το 1818· το κτίριο στην πλατεία άνοιξε στις 18 Μαΐου 1891.',
        en: 'Founded in 1818; the building on the square opened on 18 May 1891.',
      },
      {
        el: 'Το μαύρο χρώμα του ήταν μπογιά της δεκαετίας του 1970, όχι βρομιά.',
        en: 'Its black colour was paint from the 1970s, not dirt.',
      },
      {
        el: 'Οι συλλογές του σε όλα τα κτίριά του φτάνουν σχεδόν τα 14 εκατομμύρια αντικείμενα.',
        en: 'Its collections across all its buildings come to nearly 14 million objects.',
      },
    ],
    location: {
      lat: 50.07883,
      lng: 14.4308,
      anchor: 'centroid',
      confidence: 'C',
      sources: [{ kind: 'wikidata', ref: 'Q43755714', deltaM: 0 }],
      verifiedAt: '2026-09-13',
      note: 'The building (Q43755714), not the institution (Q188112), which runs a dozen addresses and whose point would be an administrative fiction. That is also why the grade is C: the Wikipedia article is about the institution, so it carries no coordinate for this building, and OpenStreetMap did not answer in the resolver run (Overpass returned 429). One source, no disagreement.',
      map: { x: 0.871, y: 0.529 },
      findIt: {
        el: 'Κλείνει το πάνω άκρο της Václavské náměstí, οπότε το βλέπεις από ένα χιλιόμετρο μακριά. Ανεβαίνεις τα φαρδιά σκαλιά από την πλευρά της πλατείας.',
        en: 'It closes off the top end of Wenceslas Square, so you can see it from a kilometre away. You go up the wide steps on the square side.',
      },
    },
    question: {
      q: {
        el: 'Γιατί ήταν μαύρο το μουσείο για δεκαετίες;',
        en: 'Why was the museum black for decades?',
      },
      answers: [
        {
          el: 'Το είχαν βάψει μαύρο σε μια επισκευή',
          en: 'It had been painted black in a repair',
        },
        {
          el: 'Η πέτρα του ήταν φυσικά σκούρα',
          en: 'Its stone was naturally dark',
        },
        {
          el: 'Το είχαν μαυρίσει οι καπνοί από τα κάρβουνα της πόλης',
          en: 'Smoke from the city’s coal fires had blackened it',
        },
        {
          el: 'Το είχε κάψει μια φωτιά και δεν το καθάρισαν ποτέ',
          en: 'A fire had scorched it and it was never cleaned up',
        },
      ],
      explanation: {
        el:
          'Στην επισκευή του 1971–1973 βάφτηκαν μαύρα τα αγάλματα, οι κολόνες και όλη η ' +
          'πρόσοψη, ώστε να «δένουν» και να δείχνουν πιο παλιά.',
        en:
          'In the repair of 1971–1973 the statues, the columns and the whole front were ' +
          'painted black so that they would match and look older.',
      },
    },

    museum: {
      doorNote: {
        el: 'Δεν είναι ένα μουσείο, είναι τέσσερα σε ένα κτίριο. Διάλεξε δύο αίθουσες και δες τες αληθινά.',
        en: 'This is not one museum but four in one building. Choose two rooms and really look at them.',
      },
      rooms: [
        {
          id: 'prague-national-museum-building',
          emoji: '🏛️',
          name: { el: 'Το ίδιο το κτίριο', en: 'The building itself' },
          intro: {
            el:
              'Πριν δεις ένα μόνο έκθεμα, κοίτα το δοχείο. Ο Schulz σχεδίασε το κτίριο ' +
              'σαν ναό: φαρδιά σκάλα, γυάλινη οροφή, ένας θόλος στη μέση. Το κτίριο ' +
              'είναι το πρώτο πράγμα που σου λέει πόσο σοβαρά έπαιρναν τη γνώση εκείνοι ' +
              'που το έχτισαν, και τι τους συνέβη μετά.',
            en:
              'Before you look at a single exhibit, look at the container. Schulz designed ' +
              'this building as a temple: a wide staircase, a glass roof, a dome in the ' +
              'middle. The building is the first thing that tells you how seriously the ' +
              'people who built it took learning, and what happened to them afterwards.',
          },
          exhibits: [
            {
              id: 'prague-national-museum-staircase',
              name: { el: 'Η μεγάλη σκάλα', en: 'The great staircase' },
              blurb: {
                el:
                  'Μπαίνεις και βρίσκεσαι μπροστά σε μια σκάλα από μάρμαρο τόσο φαρδιά ' +
                  'που δύο τάξεις χωράνε δίπλα δίπλα. Από πάνω της υπάρχει γυάλινη ' +
                  'οροφή, ώστε το φως να πέφτει στα σκαλοπάτια χωρίς λάμπες: το κτίριο ' +
                  'σχεδιάστηκε πριν τον ηλεκτρισμό γίνει αυτονόητος. Ο Schulz ήθελε ο ' +
                  'επισκέπτης να ανεβαίνει αργά και να καταλαβαίνει ότι μπαίνει κάπου ' +
                  'σημαντικό. Είναι ένα κόλπο αρχιτεκτονικής παλιό όσο και οι ναοί, και ' +
                  'δουλεύει ακόμα.',
                en:
                  'You come in and stand in front of a marble staircase wide enough for two ' +
                  'school classes side by side. Above it is a glass roof, so that daylight ' +
                  'falls on the steps without any lamps: the building was designed before ' +
                  'electricity was taken for granted. Schulz wanted a visitor to climb ' +
                  'slowly and to understand that they were entering somewhere important. It ' +
                  'is an architect’s trick as old as temples, and it still works.',
              },
              question: {
                q: {
                  el: 'Γιατί έχει γυάλινη οροφή πάνω από τη σκάλα;',
                  en: 'Why is there a glass roof above the staircase?',
                },
                answers: [
                  {
                    el: 'Για να τη φωτίζει το φως της μέρας χωρίς καθόλου λάμπες',
                    en: 'So that the daylight lights it without any lamps at all',
                  },
                  {
                    el: 'Για να μπορούν οι επισκέπτες να βλέπουν τα άστρα',
                    en: 'So that visitors can look up and see the stars',
                  },
                  {
                    el: 'Για να φεύγει η ζέστη από το πάνω μέρος του κτιρίου',
                    en: 'So that heat can escape from the top of the building',
                  },
                  {
                    el: 'Για να πέφτει η βροχή σε μια δεξαμενή στο υπόγειο',
                    en: 'So that rain can fall into a tank in the basement',
                  },
                ],
                explanation: {
                  el: 'Το κτίριο σχεδιάστηκε όταν το ηλεκτρικό φως ήταν ακόμα σπάνιο. Ο ήλιος ήταν ο λαμπτήρας.',
                  en: 'The building was designed when electric light was still rare. The sun was the lamp.',
                },
              },
            },
            {
              id: 'prague-national-museum-pantheon',
              name: { el: 'Ο Πάνθεον', en: 'The Pantheon' },
              blurb: {
                el:
                  'Κάτω από τον μεγάλο θόλο υπάρχει μια αίθουσα φτιαγμένη σαν ρωμαϊκός ' +
                  'ναός, γεμάτη αγάλματα και προτομές: πενήντα τέσσερις από μπρούντζο, ' +
                  'επιστήμονες, συγγραφείς, ζωγράφοι, ιστορικοί, και δύο ακόμα από ' +
                  'μάρμαρο. Δεν τους διάλεξε το μουσείο· τους διάλεξε η Βουλή της ' +
                  'Βοημίας, και αυτό είναι το πιο ενδιαφέρον. Το 1919, όταν άλλαξε το ' +
                  'κράτος, οι δύο μαρμάρινες προτομές του αυτοκράτορα και της ' +
                  'αυτοκράτειρας βγήκαν έξω· γύρισαν πίσω το 2018, με τη μεγάλη ' +
                  'ανακαίνιση. Ένας Πάνθεον δείχνει ποιους θαυμάζει μια χώρα σε μια ' +
                  'συγκεκριμένη στιγμή, και η στιγμή αλλάζει.',
                en:
                  'Under the great dome is a hall built like a Roman temple, full of ' +
                  'statues and busts: fifty-four of them in bronze, scientists, writers, ' +
                  'painters, historians, and two more in marble. The museum did not choose ' +
                  'them; the Bohemian Diet did, and that is the interesting part. In 1919, ' +
                  'when the state changed, the two marble busts of the emperor and the ' +
                  'empress were taken out; they came back in 2018, with the great ' +
                  'rebuilding. A pantheon shows who a country admires at one particular ' +
                  'moment, and the moment keeps changing.',
              },
              question: {
                q: {
                  el: 'Ποιος διάλεξε ποιοι θα σταθούν στον Πάνθεον;',
                  en: 'Who chose which people would stand in the Pantheon?',
                },
                answers: [
                  {
                    el: 'Η Βουλή της Βοημίας, όχι το μουσείο',
                    en: 'The Bohemian Diet, and not the museum',
                  },
                  {
                    el: 'Ο αρχιτέκτονας Josef Schulz',
                    en: 'The architect Josef Schulz',
                  },
                  {
                    el: 'Οι επισκέπτες, με ψηφοφορία στο πρώτο έτος λειτουργίας',
                    en: 'Visitors, by a vote in the museum’s first year of opening',
                  },
                  {
                    el: 'Οι ευγενείς που είχαν χαρίσει τις πρώτες συλλογές του',
                    en: 'The noblemen who had given it its first collections',
                  },
                ],
                explanation: {
                  el: 'Γι’ αυτό ο κατάλογος άλλαξε το 1919, και ξανά το 2018: όταν αλλάζει η πολιτική, αλλάζει και ποιον τιμάς.',
                  en: 'That is why the list changed in 1919, and again in 2018: when politics change, so does who you honour.',
                },
              },
            },
            {
              id: 'prague-national-museum-dome',
              name: { el: 'Ο θόλος με τη θέα', en: 'The dome lookout' },
              blurb: {
                el:
                  'Για εκατόν είκοσι οκτώ χρόνια ο θόλος ήταν κλειστός για το κοινό. ' +
                  'Άνοιξε τον Φεβρουάριο του 2019, μετά τη μεγάλη ανακαίνιση, και τώρα ' +
                  'μπορείς να ανέβεις και να κοιτάξεις κάτω ολόκληρη την Václavské ' +
                  'náměstí, από το άγαλμα ως το μακρινό άκρο της. Είναι η καλύτερη ' +
                  'θέση για να καταλάβεις γιατί αυτή η «πλατεία» μοιάζει με δρόμο: από ' +
                  'ψηλά φαίνεται καθαρά ότι είναι μια αγορά 750 μέτρων.',
                en:
                  'For a hundred and twenty-eight years the dome was closed to the public. ' +
                  'It opened in February 2019, after the great renovation, and now you can ' +
                  'climb up and look down the whole of Wenceslas Square, from the statue to ' +
                  'the far end. It is the best place to understand why this “square” looks ' +
                  'like a street: from up here you can plainly see that it is a market 750 ' +
                  'metres long.',
              },
              question: {
                q: {
                  el: 'Πότε άνοιξε ο θόλος για τους επισκέπτες;',
                  en: 'When did the dome open for visitors?',
                },
                answers: [
                  {
                    el: 'Το 2019, μετά τη μεγάλη ανακαίνιση',
                    en: 'In 2019, after the great renovation',
                  },
                  {
                    el: 'Το 1891, την ίδια μέρα που άνοιξε και το μουσείο',
                    en: 'In 1891, on the same day the museum itself opened',
                  },
                  {
                    el: 'Το 1968, όταν επισκευάστηκε η πρόσοψη του κτιρίου',
                    en: 'In 1968, when the front of the building was repaired',
                  },
                  {
                    el: 'Δεν έχει ανοίξει ακόμα· τον βλέπεις μόνο απ’ έξω',
                    en: 'It has not opened yet; you can only see it from outside',
                  },
                ],
                explanation: {
                  el: 'Ο θόλος υπήρχε από το 1891, αλλά κανείς επισκέπτης δεν είχε ανέβει ως το 2019.',
                  en: 'The dome had been there since 1891, but no visitor went up it until 2019.',
                },
              },
            },
            {
              id: 'prague-national-museum-patches',
              name: { el: 'Τα μπαλώματα στην πέτρα', en: 'The patches in the stone' },
              blurb: {
                el:
                  'Στάσου στα σκαλιά και κοίτα την πρόσοψη από κοντά. Θα δεις ' +
                  'εκατοντάδες μικρά κομμάτια πέτρας βαλμένα μέσα στην παλιά, σαν ' +
                  'μπαλώματα σε ρούχο. Τον Αύγουστο του 1968 ξένοι στρατοί μπήκαν στην ' +
                  'Πράγα και το κτίριο δέχτηκε πυροβολισμούς. Στην επισκευή του ' +
                  '1971–1973 κάθε τρύπα γέμισε με ένα καινούργιο κομμάτι πέτρας. Το ' +
                  'μουσείο μπορούσε να τα κρύψει στην τελευταία ανακαίνιση. Διάλεξε να ' +
                  'μην το κάνει.',
                en:
                  'Stand on the steps and look closely at the front. You will see hundreds ' +
                  'of small pieces of stone set into the old stone, like patches on a coat. ' +
                  'In August 1968 foreign armies came into Prague and the building was hit ' +
                  'by gunfire. In the repair of 1971–1973 every hole was filled with a fresh ' +
                  'piece of stone. The museum could have hidden them in the latest ' +
                  'restoration. It chose not to.',
              },
              question: {
                q: {
                  el: 'Τι είναι τα μικρά κομμάτια νέας πέτρας στην πρόσοψη;',
                  en: 'What are the small pieces of new stone in the front?',
                },
                answers: [
                  {
                    el: 'Μπαλώματα σε ζημιές που έγιναν το 1968',
                    en: 'Patches over damage that was done in 1968',
                  },
                  {
                    el: 'Σημάδια που δείχνουν πού είναι κρυμμένες οι πόρτες',
                    en: 'Marks showing where the hidden doors of the building are',
                  },
                  {
                    el: 'Κομμάτια από τους μαστόρους του 1891',
                    en: 'Offcuts left by the masons of 1891',
                  },
                  {
                    el: 'Διακόσμηση που μιμείται τα άστρα στη νυχτερινή πρόσοψη',
                    en: 'Decoration copying the stars across the night-time front',
                  },
                ],
                explanation: {
                  el:
                    'Μια πληγή που δεν κρύβεται είναι μια ιστορία που δεν ξεχνιέται. Γι’ ' +
                    'αυτό τα μπαλώματα φαίνονται ακόμα.',
                  en:
                    'A scar that is not hidden is a story that is not forgotten. That is ' +
                    'why the patches are still visible.',
                },
              },
            },
          ],
        },
        {
          id: 'prague-national-museum-minerals',
          emoji: '💎',
          name: { el: 'Οι αίθουσες των ορυκτών', en: 'The halls of minerals' },
          intro: {
            el:
              'Η συλλογή ορυκτών είναι από τις παλαιότερες του μουσείου και ξεκίνησε ' +
              'από δώρα ευγενών. Εδώ οι πέτρες δεν είναι διακόσμηση: κάθε μία είναι μια ' +
              'απάντηση στην ερώτηση «τι έγινε εδώ πριν από εκατομμύρια χρόνια;». Δύο ' +
              'από αυτές έπεσαν από τον ουρανό.',
            en:
              'The mineral collection is one of the museum’s oldest and began with gifts ' +
              'from noblemen. Here the stones are not decoration: each one is an answer to ' +
              'the question “what happened here millions of years ago?”. Two of them fell ' +
              'out of the sky.',
          },
          exhibits: [
            {
              id: 'prague-national-museum-moldavites',
              name: { el: 'Τα βλταβίνια', en: 'The moldavites' },
              blurb: {
                el:
                  'Είναι κομμάτια πράσινου γυαλιού, τραχιά και ζαρωμένα σαν να τα ' +
                  'ζούληξε κάποιος. Δεν τα έφτιαξε άνθρωπος και δεν τα έφτιαξε ' +
                  'ηφαίστειο. Πριν από περίπου δεκαπέντε εκατομμύρια χρόνια ένας ' +
                  'μετεωρίτης χτύπησε τη Γη στη σημερινή Γερμανία με τέτοια δύναμη που ' +
                  'το έδαφος έλιωσε και εκτοξεύτηκε στον αέρα. Οι σταγόνες κρύωσαν ' +
                  'πετώντας και έπεσαν εκατοντάδες χιλιόμετρα μακριά, εδώ στη Βοημία. ' +
                  'Τα βλταβίνια είναι κυριολεκτικά βροχή από λιωμένο έδαφος.',
                en:
                  'They are pieces of green glass, rough and wrinkled as if somebody had ' +
                  'squeezed them. No human made them and no volcano made them. About ' +
                  'fifteen million years ago a meteorite struck the Earth in what is now ' +
                  'Germany with such force that the ground melted and was thrown into the ' +
                  'air. The droplets cooled as they flew and landed hundreds of kilometres ' +
                  'away, here in Bohemia. Moldavites are literally rain made of melted ' +
                  'ground.',
              },
              question: {
                q: {
                  el: 'Πώς φτιάχτηκε αυτό το πράσινο γυαλί;',
                  en: 'How was this green glass made?',
                },
                answers: [
                  {
                    el: 'Από έδαφος που έλιωσε όταν έπεσε ένας μετεωρίτης στη Γη',
                    en: 'From ground that melted when a meteorite struck the Earth',
                  },
                  {
                    el: 'Από λάβα ηφαιστείου που κρύωσε γρήγορα μέσα σε νερό',
                    en: 'From volcano lava that cooled quickly inside water',
                  },
                  {
                    el: 'Από γυαλί που έλιωσε σε ένα εργαστήριο του Μεσαίωνα',
                    en: 'From glass melted in a workshop in the Middle Ages',
                  },
                  {
                    el: 'Από άμμο που πιέστηκε για χιλιάδες χρόνια στον βυθό',
                    en: 'From sand pressed for thousands of years on a seabed',
                  },
                ],
                explanation: {
                  el:
                    'Ο μετεωρίτης έπεσε στη Γερμανία· τα βλταβίνια βρέθηκαν εκατοντάδες ' +
                    'χιλιόμετρα μακριά. Πέταξαν ως εδώ ενώ ήταν ακόμα λιωμένα.',
                  en:
                    'The meteorite fell in Germany; the moldavites landed hundreds of ' +
                    'kilometres away. They flew here while they were still molten.',
                },
              },
            },
            {
              id: 'prague-national-museum-meteorites',
              name: { el: 'Οι μετεωρίτες', en: 'The meteorites' },
              blurb: {
                el:
                  'Σε μια βιτρίνα κάθονται πέτρες που δεν γεννήθηκαν σε αυτόν τον ' +
                  'πλανήτη. Οι μετεωρίτες είναι κομμάτια από αστεροειδείς, δηλαδή υλικό ' +
                  'που έμεινε αχρησιμοποίητο όταν φτιάχτηκε το ηλιακό σύστημα. Πολλοί ' +
                  'είναι βαρύτεροι απ’ όσο περιμένεις, γιατί περιέχουν σίδερο και ' +
                  'νικέλιο, και η επιφάνειά τους είναι μαύρη και λεία: έλιωσε καθώς ' +
                  'έπεφταν με τεράστια ταχύτητα μέσα από τον αέρα. Κρατάς με τα μάτια ' +
                  'σου κάτι πιο παλιό από τη Γη.',
                en:
                  'In one case sit stones that were not born on this planet. Meteorites are ' +
                  'pieces of asteroids, that is, material left over when the solar system ' +
                  'was made. Many are heavier than you expect, because they contain iron ' +
                  'and nickel, and their surface is black and smooth: it melted as they ' +
                  'fell at enormous speed through the air. You are looking at something ' +
                  'older than the Earth.',
              },
              question: {
                q: {
                  el: 'Γιατί είναι μαύρη και λεία η επιφάνεια ενός μετεωρίτη;',
                  en: 'Why is a meteorite’s surface black and smooth?',
                },
                answers: [
                  {
                    el: 'Έλιωσε από την ταχύτητα μέσα στον αέρα',
                    en: 'It melted from the speed through the air',
                  },
                  {
                    el: 'Την έβαψαν μαύρη στο μουσείο',
                    en: 'It was painted black at the museum',
                  },
                  {
                    el: 'Την τρίβει η σκόνη του διαστήματος για εκατομμύρια χρόνια',
                    en: 'Space dust polishes it over millions of years of travel',
                  },
                  {
                    el: 'Είναι φτιαγμένη από κάρβουνο, όπως τα κομμάτια γαιάνθρακα',
                    en: 'It is made of carbon, in the way lumps of coal are made',
                  },
                ],
                explanation: {
                  el:
                    'Μπαίνοντας στην ατμόσφαιρα, η τριβή τους ζεσταίνει τόσο που η ' +
                    'εξωτερική τους στρώση λιώνει. Αυτή η κρούστα λέγεται φλοιός τήξης.',
                  en:
                    'Coming into the atmosphere, friction heats them so much that the outer ' +
                    'layer melts. That skin is called a fusion crust.',
                },
              },
            },
            {
              id: 'prague-national-museum-founding-stones',
              name: { el: 'Οι πέτρες των δωρητών', en: 'The founders’ stones' },
              blurb: {
                el:
                  'Το μουσείο δεν ξεκίνησε από αγορές αλλά από δωρεές. Ο κόμης ' +
                  'František Antonín Kolowrat άφησε μια συλλογή ορυκτών και τριάντα ' +
                  'πέντε χιλιάδες βιβλία· ο κόμης Kašpar Šternberk έδωσε τις ' +
                  'παλαιοντολογικές του συλλογές. Ένας άλλος ευγενής χάρισε εξακόσια ' +
                  'ταριχευμένα ζώα. Πάνω σε αυτά τα δώρα χτίστηκε όλο το υπόλοιπο. Όταν ' +
                  'κοιτάς μια βιτρίνα με πέτρες, κοιτάς και μια απόφαση κάποιου να μην ' +
                  'τις κρατήσει για τον εαυτό του.',
                en:
                  'The museum did not begin with purchases but with gifts. Count František ' +
                  'Antonín Kolowrat left it a mineral collection and thirty-five thousand ' +
                  'books; Count Kašpar Šternberk gave his fossil collections. Another ' +
                  'nobleman gave six hundred stuffed animals. Everything else was built on ' +
                  'top of those gifts. When you look at a case of stones, you are also ' +
                  'looking at somebody’s decision not to keep them.',
              },
              question: {
                q: {
                  el: 'Πώς απέκτησε το μουσείο τις πρώτες του συλλογές;',
                  en: 'How did the museum get its very first collections?',
                },
                answers: [
                  {
                    el: 'Του τις χάρισαν ευγενείς που τις είχαν μαζέψει',
                    en: 'Noblemen who had gathered them gave them to it',
                  },
                  {
                    el: 'Τις αγόρασε ο αυτοκράτορας',
                    en: 'The emperor bought them',
                  },
                  {
                    el: 'Τις έφεραν επιστήμονες από ταξίδια στη Νότια Αμερική',
                    en: 'Scientists brought them from trips to South America',
                  },
                  {
                    el: 'Τις βρήκαν εργάτες σκάβοντας τα θεμέλια του κτιρίου',
                    en: 'Workers found them digging the building’s foundations',
                  },
                ],
                explanation: {
                  el:
                    'Το 1818 μερικοί ευγενείς έδωσαν πέτρες, φυτά, απολιθώματα και ' +
                    'βιβλία. Το μουσείο ξεκίνησε από αυτά και μεγάλωσε γύρω τους.',
                  en:
                    'In 1818 a few noblemen handed over stones, plants, fossils and books. ' +
                    'The museum started from those and grew around them.',
                },
              },
            },
          ],
        },
        {
          id: 'prague-national-museum-evolution',
          emoji: '🦴',
          name: { el: 'Θαύματα της εξέλιξης', en: 'Miracles of evolution' },
          intro: {
            el:
              'Εδώ ζουν τα μεγάλα και τα μικρά μαζί. Πάνω από το κεφάλι σου κρέμεται ' +
              'ένας σκελετός φάλαινας· μέσα σε βιτρίνες κάθονται ζώα που πέθαναν πριν ' +
              'από πεντακόσια εκατομμύρια χρόνια και χωράνε στην παλάμη σου. Η αίθουσα ' +
              'λέει μία ιστορία: τίποτα ζωντανό δεν έμεινε ποτέ ίδιο για πολύ.',
            en:
              'Here the very large and the very small live together. Over your head hangs ' +
              'the skeleton of a whale; inside the cases sit animals that died five hundred ' +
              'million years ago and would fit in your palm. The room tells one story: ' +
              'nothing alive has ever stayed the same for long.',
          },
          exhibits: [
            {
              id: 'prague-national-museum-whale',
              name: { el: 'Ο σκελετός της φάλαινας', en: 'The whale skeleton' },
              blurb: {
                el:
                  'Είκοσι δύο μισό μέτρα από τη μύτη ως την ουρά και τέσσερις τόνοι ' +
                  'κόκαλα, κρεμασμένα από την οροφή. Είναι σκελετός πτεροφάλαινας που ' +
                  'ξεβράστηκε στη Νορβηγία το 1885. Δεν τον χάρισε κανείς: ο Antonín ' +
                  'Frič, ο ίδιος ο υπεύθυνος των συλλογών του μουσείου, με τον αδελφό ' +
                  'του Václav άνοιξαν έρανο και οι Πραγινοί μάζεψαν τα χρήματα για να ' +
                  'τον αγοράσουν. Είναι τόσο βαρύς που ακόμα και το να τον μετακινήσουν ' +
                  'είναι εγχείρημα: κατέβηκε για την ανακαίνιση και ξαναμπήκε στην ' +
                  'έκθεση τον Σεπτέμβριο του 2021. Στάσου από κάτω και κοίτα τα πλευρά ' +
                  'της. Η φάλαινα δεν είναι ψάρι, είναι θηλαστικό, και τα κόκαλά της το ' +
                  'φωνάζουν.',
                en:
                  'Twenty-two and a half metres from nose to tail and four tonnes of bone, ' +
                  'hanging from the ceiling. It is the skeleton of a fin whale washed up in ' +
                  'Norway in 1885. Nobody gave it to the museum: Antonín Frič, who ran the ' +
                  'museum’s own collections, and his brother Václav opened a public ' +
                  'subscription, and the people of Prague raised the money to buy it. It is ' +
                  'so heavy that simply moving it is an operation: it came down for the ' +
                  'renovation and was back on show in September 2021. Stand underneath and ' +
                  'look at the ribs. A whale is not a fish but a mammal, and its bones say ' +
                  'so out loud.',
              },
              question: {
                q: {
                  el: 'Πόσο μακρύς είναι ο σκελετός της φάλαινας;',
                  en: 'How long is the whale skeleton?',
                },
                answers: [
                  {
                    el: 'Περίπου είκοσι δύο μισό μέτρα',
                    en: 'About twenty-two and a half metres',
                  },
                  {
                    el: 'Περίπου τέσσερα μέτρα, όσο ένα μεγάλο αυτοκίνητο',
                    en: 'About four metres, the length of a large car',
                  },
                  {
                    el: 'Περίπου εννιά μέτρα, όσο το ύψος ενός σπιτιού',
                    en: 'About nine metres, the height of a small house',
                  },
                  {
                    el: 'Περίπου πενήντα μέτρα, όσο μισό γήπεδο ποδοσφαίρου',
                    en: 'About fifty metres, as long as half a football pitch',
                  },
                ],
                explanation: {
                  el:
                    'Είκοσι δύο μισό μέτρα και τέσσερις τόνοι. Γι’ αυτό, για να ' +
                    'ξανακρεμαστεί το 2021, χρειάστηκε ολόκληρη επιχείρηση.',
                  en:
                    'Twenty-two and a half metres and four tonnes. That is why hanging it ' +
                    'back up in 2021 took a whole operation.',
                },
              },
            },
            {
              id: 'prague-national-museum-trilobites',
              name: { el: 'Οι τριλοβίτες του Barrande', en: 'Barrande’s trilobites' },
              blurb: {
                el:
                  'Ο Joachim Barrande ήταν Γάλλος και ήρθε στην Πράγα ως δάσκαλος μιας ' +
                  'βασιλικής οικογένειας που είχε φύγει εξόριστη από τη Γαλλία. Όταν ' +
                  'εκείνη μετακόμισε αλλού, αυτός έμεινε και πιάστηκε μηχανικός στη ' +
                  'χάραξη ενός σιδηροδρόμου με άλογα. Στα σκαψίματα είδε πέτρες γεμάτες ' +
                  'παράξενα ζωάκια με πανοπλία και τρεις λοβούς στο σώμα, τους ' +
                  'τριλοβίτες. Άφησε τον σιδηρόδρομο και πέρασε την υπόλοιπη ζωή του ' +
                  'μελετώντας τα. Οι συλλογές του έκαναν αυτό το μουσείο διάσημο σε ' +
                  'ολόκληρο τον κόσμο. Οι τριλοβίτες ζούσαν στη θάλασσα, κι όμως τους ' +
                  'βρίσκεις σε μια χώρα που δεν έχει καθόλου θάλασσα.',
                en:
                  'Joachim Barrande was a Frenchman who came to Prague as tutor to a royal ' +
                  'family living in exile from France. When they moved on he stayed behind ' +
                  'and took work as an engineer, surveying a railway pulled by horses. In ' +
                  'the diggings he saw stones full of strange armoured ' +
                  'creatures with three lobes down the body: trilobites. He left the ' +
                  'railway and spent the rest of his life studying them. His collections ' +
                  'made this museum famous all over the world. Trilobites lived in the sea, ' +
                  'and yet you find them in a country that has no sea at all.',
              },
              question: {
                q: {
                  el: 'Γιατί βρίσκουμε θαλάσσια ζώα σε μια χώρα χωρίς θάλασσα;',
                  en: 'Why are sea animals found in a country with no sea?',
                },
                answers: [
                  {
                    el: 'Εδώ υπήρχε ολόκληρη θάλασσα πριν από εκατομμύρια χρόνια',
                    en: 'There was a whole sea here, many millions of years ago',
                  },
                  {
                    el: 'Τα έφεραν έμποροι από μακρινές ακτές για να τα πουλήσουν',
                    en: 'Traders brought them from distant coasts to sell them',
                  },
                  {
                    el: 'Τα κουβάλησαν ποτάμια από τη θάλασσα προς τα βουνά',
                    en: 'Rivers carried them from the sea up towards the hills',
                  },
                  {
                    el: 'Ζούσαν σε λίμνες και μοιάζουν απλώς με θαλάσσια ζώα',
                    en: 'They lived in lakes and merely look like sea animals',
                  },
                ],
                explanation: {
                  el:
                    'Οι στεριές και οι θάλασσες αλλάζουν θέση. Η Βοημία ήταν κάποτε ' +
                    'βυθός, και τα απολιθώματα το θυμούνται.',
                  en:
                    'Land and sea change places. Bohemia was once a seabed, and the fossils ' +
                    'remember it.',
                },
              },
            },
            {
              id: 'prague-national-museum-cooksonia',
              name: { el: 'Το πρώτο φυτό της στεριάς', en: 'The first land plant' },
              blurb: {
                el:
                  'Ένα μικροσκοπικό αποτύπωμα σε πέτρα, λίγα εκατοστά, σαν μικρό ' +
                  'διχαλωτό κλαδάκι. Λέγεται Cooksonia barrandei και είναι το ' +
                  'παλαιότερο γνωστό φυτό στον κόσμο με αγγεία, δηλαδή με σωληνάκια που ' +
                  'ανεβάζουν νερό από κάτω προς τα πάνω. Αυτό το κόλπο είναι ο λόγος που ' +
                  'υπάρχουν δέντρα: χωρίς αγγεία, τίποτα δεν μπορεί να ψηλώσει πάνω από ' +
                  'λίγα εκατοστά. Το βρήκαν ερευνητές μέσα στις ίδιες τις συλλογές του ' +
                  'μουσείου, όχι σε καινούργια ανασκαφή.',
                en:
                  'A tiny print in stone, a few centimetres long, like a little forked ' +
                  'twig. It is called Cooksonia barrandei and it is the oldest known plant ' +
                  'in the world with vessels, that is, with tubes that carry water upwards. ' +
                  'That trick is the reason trees exist: without vessels nothing can grow ' +
                  'more than a few centimetres tall. Researchers found it inside the ' +
                  'museum’s own collections, not on a new dig.',
              },
              question: {
                q: {
                  el: 'Γιατί είναι τόσο σημαντικά τα σωληνάκια μέσα σε ένα φυτό;',
                  en: 'Why do the little tubes inside a plant matter so much?',
                },
                answers: [
                  {
                    el: 'Χωρίς αυτά κανένα φυτό δεν μπορεί να ψηλώσει',
                    en: 'Without them no plant can grow tall at all',
                  },
                  {
                    el: 'Χωρίς αυτά το φυτό δεν έχει χρώμα',
                    en: 'Without them a plant has no colour',
                  },
                  {
                    el: 'Χωρίς αυτά το φυτό δεν αντέχει τον χειμωνιάτικο παγετό',
                    en: 'Without them a plant cannot survive the winter frost',
                  },
                  {
                    el: 'Χωρίς αυτά το φυτό δεν μπορεί να βγάλει ποτέ λουλούδια',
                    en: 'Without them a plant can never produce any flowers',
                  },
                ],
                explanation: {
                  el:
                    'Τα αγγεία ανεβάζουν νερό από τις ρίζες. Μόλις εμφανίστηκαν, τα φυτά ' +
                    'μπόρεσαν να γίνουν δέντρα.',
                  en:
                    'Vessels lift water from the roots. Once they appeared, plants could ' +
                    'become trees.',
                },
              },
            },
          ],
        },
      ],
      riddles: [
        {
          id: 'prague-national-museum-riddle-1',
          difficulty: 1,
          prompt: {
            el:
              'Κρέμομαι από την οροφή και ζυγίζω τέσσερις τόνους. Δεν είμαι ψάρι, αν ' +
              'και έζησα στη θάλασσα, και για να με ξανακρεμάσουν χρειάστηκε ολόκληρη ' +
              'επιχείρηση με γερανούς και υπομονή.',
            en:
              'I hang from the ceiling and I weigh four tonnes. I am not a fish, although ' +
              'I lived in the sea, and hanging me back up took a whole operation with ' +
              'cranes and patience.',
          },
          hint: {
            el: 'Έχω πλευρά που φτάνουν από τοίχο σε τοίχο.',
            en: 'My ribs reach from one wall to the other.',
          },
          answerExhibitId: 'prague-national-museum-whale',
        },
        {
          id: 'prague-national-museum-riddle-2',
          difficulty: 2,
          prompt: {
            el:
              'Είμαι πράσινο και τραχύ, και κάποτε ήμουν χώμα. Έλιωσα σε ένα δευτερόλεπτο, ' +
              'πέταξα εκατοντάδες χιλιόμετρα και κρύωσα στον αέρα πριν προσγειωθώ εδώ.',
            en:
              'I am green and rough, and I used to be soil. I melted in a second, flew ' +
              'hundreds of kilometres and cooled in the air before I landed here.',
          },
          hint: {
            el: 'Η αιτία μου έπεσε από τον ουρανό, στη σημερινή Γερμανία.',
            en: 'What made me fell out of the sky, in what is now Germany.',
          },
          answerExhibitId: 'prague-national-museum-moldavites',
        },
        {
          id: 'prague-national-museum-riddle-3',
          difficulty: 3,
          prompt: {
            el:
              'Είμαι μια αίθουσα σαν ρωμαϊκός ναός και μέσα μου στέκονται πάνω από ' +
              'πενήντα άνθρωποι από μπρούντζο και μάρμαρο. Δεν διάλεξα εγώ ποιοι θα ' +
              'είναι, και το 1919 δύο από αυτούς έφυγαν.',
            en:
              'I am a hall built like a Roman temple and more than fifty people in bronze ' +
              'and marble stand inside me. I did not choose which ones, and in 1919 two ' +
              'of them left.',
          },
          hint: {
            el: 'Βρίσκομαι ακριβώς κάτω από τον μεγάλο θόλο.',
            en: 'I am directly underneath the great dome.',
          },
          answerExhibitId: 'prague-national-museum-pantheon',
        },
      ],
    },
  },

  // ------------------------------------------------------------- technical museum
  {
    id: 'prague-technical-museum',
    cityId: 'prague',
    emoji: '⚙️',
    category: 'museum',
    difficulty: 2,

    name: { el: 'Národní technické muzeum', en: 'The National Technical Museum' },
    tagline: {
      el: 'Το κτίριο τελείωσε το 1941 και το μουσείο μπήκε το 1948',
      en: 'The building was ready in 1941; the museum moved in 1948',
    },
    story: {
      el:
        'Το μουσείο ιδρύθηκε στις 5 Ιουλίου 1908 και για δεκαετίες μάζευε μηχανές χωρίς ' +
        'να έχει δικό του σπίτι. Το 1935 κέρδισε τον διαγωνισμό ο αρχιτέκτονας Milan ' +
        'Babuška και το κτίριο στη Letná χτίστηκε στα 1938–1941. Μόλις τελείωσε, το ' +
        'κατέλαβε η διοίκηση της κατοχής για τα γραφεία της, κι έτσι το μουσείο έμεινε ' +
        'απ’ έξω από το ίδιο του το κτίριο. Οι πρώτες αίθουσες άνοιξαν το 1948, αρχίζοντας ' +
        'από τη μεγάλη αίθουσα των μεταφορών, και ακόμα και τότε το μουσείο είχε μόνο το ' +
        'ένα τρίτο του κτιρίου. Στα 1951–1953 έσκαψαν στο υπόγειο ένα ολόκληρο ορυχείο. ' +
        'Ο τελευταίος νοικάρης έφυγε το 1999. Σήμερα το μουσείο φυλάει περίπου εβδομήντα ' +
        'έξι χιλιάδες αντικείμενα και δείχνει τα έξι χιλιάδες, δηλαδή λιγότερα από ένα ' +
        'στα δέκα. Τα υπόλοιπα περιμένουν στις αποθήκες.',
      en:
        'The museum was founded on 5 July 1908 and spent decades collecting machines ' +
        'without a house of its own. In 1935 the architect Milan Babuška won the ' +
        'competition, and the building on Letná went up in 1938–1941. As soon as it was ' +
        'finished, the occupation administration took it over for its offices, so the ' +
        'museum found itself locked out of its own building. The first halls opened in ' +
        '1948, starting with the great transport hall, and even then the museum had only a ' +
        'third of the building. In 1951–1953 a whole mine was dug in the basement. The last ' +
        'tenant moved out in 1999. Today the museum keeps about seventy-six thousand ' +
        'objects and shows six thousand of them, fewer than one in ten. The rest wait in ' +
        'the stores.',
    },
    facts: [
      {
        el: 'Ιδρύθηκε στις 5 Ιουλίου 1908, αλλά μπήκε στο κτίριό του μόλις το 1948.',
        en: 'Founded on 5 July 1908, it moved into its building only in 1948.',
      },
      {
        el: 'Στα 1951–1953 έφτιαξαν ένα ορυχείο μέσα στο υπόγειο του μουσείου.',
        en: 'In 1951–1953 a mine was built inside the museum’s basement.',
      },
      {
        el: 'Από τα περίπου 76.000 αντικείμενά του, εκτίθενται περίπου 6.000.',
        en: 'Of its roughly 76,000 objects, about 6,000 are on display.',
      },
    ],
    location: {
      lat: 50.09746,
      lng: 14.42486,
      anchor: 'centroid',
      confidence: 'C',
      sources: [{ kind: 'wikidata', ref: 'Q1789383', deltaM: 0 }],
      verifiedAt: '2026-09-13',
      note: 'The building (Q1789383), not the organisation (Q96482839). The Wikipedia article is about the organisation and carries no coordinate for the building, and OpenStreetMap did not answer in the resolver run (Overpass returned 429), so this grades C on Wikidata alone. One source, no disagreement.',
      map: { x: 0.765, y: 0.064 },
      findIt: {
        el: 'Είναι στην οδό Kostelní, στη Letná, δίπλα στο γεωργικό μουσείο με το οποίο μοιάζει σαν δίδυμο. Ψάξε το κτίριο με τα τετράγωνα παράθυρα, όχι το διακοσμημένο.',
        en: 'It is on Kostelní street in Letná, beside the agricultural museum, which looks like its twin. Look for the building with the square windows, not the decorated one.',
      },
    },
    question: {
      q: {
        el: 'Γιατί δεν μπόρεσε το μουσείο να μπει στο κτίριό του το 1941;',
        en: 'Why could the museum not move into its building in 1941?',
      },
      answers: [
        {
          el: 'Το κατέλαβε η διοίκηση της κατοχής για γραφεία',
          en: 'The occupation administration took it for offices',
        },
        {
          el: 'Οι σκάλες του ήταν πολύ στενές',
          en: 'Its staircases were far too narrow',
        },
        {
          el: 'Ο αρχιτέκτονας δεν παρέδωσε ποτέ τα σχέδια στο μουσείο',
          en: 'The architect never handed the plans over to the museum',
        },
        {
          el: 'Δεν είχε βρεθεί ακόμα τρόπος να θερμανθεί τον χειμώνα',
          en: 'No way had been found yet to heat it during the winter',
        },
      ],
      explanation: {
        el:
          'Το κτίριο ήταν έτοιμο και το μουσείο περίμενε απ’ έξω. Οι πρώτες αίθουσες ' +
          'άνοιξαν επτά χρόνια αργότερα, το 1948.',
        en:
          'The building was ready and the museum waited outside it. The first halls opened ' +
          'seven years later, in 1948.',
      },
    },

    museum: {
      doorNote: {
        el: 'Μπες πρώτα στη μεγάλη αίθουσα και κοίτα ψηλά πριν κοιτάξεις χαμηλά. Τα αεροπλάνα είναι πάνω από τα αυτοκίνητα.',
        en: 'Go into the great hall first and look up before you look down. The aeroplanes are above the cars.',
      },
      rooms: [
        {
          id: 'prague-technical-museum-transport',
          emoji: '🚂',
          name: { el: 'Η αίθουσα των μεταφορών', en: 'The transport hall' },
          intro: {
            el:
              'Είναι η πρώτη αίθουσα που άνοιξε, το 1948, και εξακολουθεί να είναι ο ' +
              'λόγος που έρχεται κανείς. Σε έναν χώρο ύψους αρκετών ορόφων κρέμονται ' +
              'αεροπλάνα πάνω από ατμομηχανές, αυτοκίνητα και μοτοσικλέτες. Δεν υπάρχουν ' +
              'χωρίσματα: βλέπεις εκατόν πενήντα χρόνια μεταφορών με μία ματιά, από ' +
              'ψηλά προς τα κάτω.',
            en:
              'This was the first hall to open, in 1948, and it is still the reason people ' +
              'come. In a space several storeys high, aeroplanes hang above steam engines, ' +
              'cars and motorcycles. There are no partitions: you see a hundred and fifty ' +
              'years of transport in one glance, from the ceiling down.',
          },
          exhibits: [
            {
              id: 'prague-technical-museum-prasident',
              name: { el: 'Το αυτοκίνητο NW Präsident', en: 'The NW Präsident car' },
              blurb: {
                el:
                  'Μοιάζει με άμαξα που της ξέχασαν το άλογο, γιατί ακριβώς αυτό είναι: ' +
                  'οι πρώτοι κατασκευαστές αυτοκινήτων ήξεραν να φτιάχνουν άμαξες και ' +
                  'απλώς έβαλαν μια μηχανή μέσα. Το NW Präsident είναι το παλαιότερο ' +
                  'αυτοκίνητο που κατασκευάστηκε στα τσεχικά εδάφη. Έχει ψηλούς λεπτούς ' +
                  'τροχούς με ακτίνες, ξύλινο αμάξωμα και καθόλου πόρτα από τη μία ' +
                  'πλευρά. Κοίτα πόσο ψηλά κάθεται ο οδηγός: οι δρόμοι τότε ήταν λάσπη ' +
                  'και πέτρες.',
                en:
                  'It looks like a carriage that has lost its horse, because that is ' +
                  'exactly what it is: the first car makers knew how to build carriages, ' +
                  'and simply put an engine in one. The NW Präsident is the oldest car ' +
                  'built in the Czech lands. It has tall thin spoked wheels, a wooden body ' +
                  'and no door at all on one side. Look how high the driver sits: the roads ' +
                  'then were mud and stones.',
              },
              question: {
                q: {
                  el: 'Γιατί μοιάζει με άμαξα το πρώτο αυτοκίνητο;',
                  en: 'Why does the first car look like a horse carriage?',
                },
                answers: [
                  {
                    el: 'Το έφτιαξαν άνθρωποι που έφτιαχναν άμαξες',
                    en: 'It was built by people who built carriages',
                  },
                  {
                    el: 'Ο νόμος απαιτούσε να μοιάζει με άμαξα για την ασφάλεια',
                    en: 'The law required it to look like one for safety reasons',
                  },
                  {
                    el: 'Ήθελαν να μη φοβούνται τα άλογα όταν το συναντούσαν',
                    en: 'They wanted horses not to be frightened when meeting it',
                  },
                  {
                    el: 'Ήταν όντως άμαξα και του πρόσθεσαν μηχανή πολύ αργότερα',
                    en: 'It really was a carriage and got an engine much later on',
                  },
                ],
                explanation: {
                  el:
                    'Κάθε καινούργιο πράγμα ξεκινά μοιάζοντας με το παλιό. Το σχήμα του ' +
                    'αυτοκινήτου χρειάστηκε δεκαετίες για να βρει τον εαυτό του.',
                  en:
                    'Every new thing starts out looking like the old thing. The shape of ' +
                    'the car took decades to find itself.',
                },
              },
            },
            {
              id: 'prague-technical-museum-kaspar-plane',
              name: { el: 'Το αεροπλάνο του Kašpar', en: 'Kašpar’s aeroplane' },
              blurb: {
                el:
                  'Ψηλά στην αίθουσα κρέμεται ένα αεροπλάνο που μοιάζει με χαρταετό από ' +
                  'ξύλο και ύφασμα. Το πέταξε ο Jan Kašpar, ο πρώτος Τσέχος αεροπόρος, ' +
                  'και είναι φτιαγμένο κατά το σύστημα Blériot: το έφτιαξε ο ίδιος, ' +
                  'ακολουθώντας το σχέδιο του Γάλλου Louis Blériot, που είχε περάσει ' +
                  'πετώντας τη Μάγχη. Γι’ αυτό έχει ένα μόνο ζευγάρι φτερών αντί για ' +
                  'δύο. Δεν έχει καμπίνα, ούτε ζώνη, ούτε όργανα: ο ' +
                  'πιλότος καθόταν στον αέρα και κοίταζε κάτω. Πέρασαν μόλις λίγα χρόνια ' +
                  'από την πρώτη πτήση στον κόσμο ως αυτό το μηχάνημα.',
                en:
                  'High up in the hall hangs an aeroplane that looks like a kite made of ' +
                  'wood and cloth. Jan Kašpar, the first Czech aviator, flew it, and it is ' +
                  'built on the Blériot system: he made it himself, following the design ' +
                  'of the Frenchman Louis Blériot, who had flown across the Channel. That ' +
                  'is why it has a single pair of wings instead of two. It has no cabin, ' +
                  'no belt and no instruments: the pilot ' +
                  'sat out in the air and looked down. Only a few years passed between the ' +
                  'world’s first flight and this machine.',
              },
              question: {
                q: {
                  el: 'Τι σημαίνει ότι είναι φτιαγμένο «κατά το σύστημα Blériot»;',
                  en: 'What does “built on the Blériot system” mean here?',
                },
                answers: [
                  {
                    el: 'Φτιάχτηκε κατά το σχέδιο του Γάλλου Louis Blériot',
                    en: 'It follows the design of the Frenchman Louis Blériot',
                  },
                  {
                    el: 'Έχει μηχανή στην ουρά αντί για μπροστά στη μύτη του',
                    en: 'It has the engine in the tail instead of at the nose',
                  },
                  {
                    el: 'Απογειώνεται από το νερό και όχι από χωμάτινο διάδρομο',
                    en: 'It takes off from water rather than from an earth strip',
                  },
                  {
                    el: 'Είναι φτιαγμένο από μέταλλο και όχι από ξύλο και ύφασμα',
                    en: 'It is built out of metal rather than of wood and cloth',
                  },
                ],
                explanation: {
                  el:
                    'Ο Blériot ήταν ο πρώτος που πέταξε πάνω από τη Μάγχη. Ο Kašpar ' +
                    'αντέγραψε το σχέδιό του και έφτιαξε μόνος του το αεροπλάνο.',
                  en:
                    'Blériot was the first man to fly across the Channel. Kašpar copied ' +
                    'his design and built the aeroplane himself.',
                },
              },
            },
            {
              id: 'prague-technical-museum-saloon-carriage',
              name: { el: 'Το βαγόνι του αυτοκράτορα', en: 'The emperor’s carriage' },
              blurb: {
                el:
                  'Ένα σιδηροδρομικό βαγόνι που από έξω μοιάζει με τα άλλα και από μέσα ' +
                  'είναι σαλόνι: ξύλινες επενδύσεις, βελούδο, καθρέφτες, φωτιστικά. ' +
                  'Ήταν το προσωπικό βαγόνι του αυτοκράτορα Φραγκίσκου Ιωσήφ. Στα τέλη ' +
                  'του 19ου αιώνα το τρένο ήταν ο μόνος γρήγορος τρόπος να διασχίσεις μια ' +
                  'αυτοκρατορία, οπότε οι ηγέτες ταξίδευαν σε δωμάτια πάνω σε ρόδες. ' +
                  'Κοίτα τις λεπτομέρειες: όλα είναι βιδωμένα, γιατί σε ένα τρένο ' +
                  'τίποτα δεν μένει ακίνητο μόνο του.',
                en:
                  'A railway carriage that looks like the others from outside and is a ' +
                  'drawing room inside: wood panelling, velvet, mirrors, lamps. It was the ' +
                  'personal carriage of Emperor Franz Joseph. In the late 19th century the ' +
                  'train was the only quick way to cross an empire, so rulers travelled in ' +
                  'rooms on wheels. Look at the details: everything is screwed down, ' +
                  'because on a train nothing stays still by itself.',
              },
              question: {
                q: {
                  el: 'Γιατί ταξίδευαν οι ηγέτες σε τέτοια βαγόνια;',
                  en: 'Why did rulers travel in carriages like this one?',
                },
                answers: [
                  {
                    el: 'Το τρένο ήταν ο πιο γρήγορος τρόπος να ταξιδέψεις',
                    en: 'The train was the fastest way there was to travel',
                  },
                  {
                    el: 'Απαγορευόταν στους ηγέτες να ταξιδεύουν με άμαξα σε πόλεις',
                    en: 'Rulers were forbidden to travel by carriage inside cities',
                  },
                  {
                    el: 'Ήθελαν να δείχνουν πόσο πλούσιοι είναι',
                    en: 'They wanted to show how rich they were',
                  },
                  {
                    el: 'Δεν υπήρχαν ακόμα ξενοδοχεία σε καμία πόλη της αυτοκρατορίας',
                    en: 'There were no hotels yet in any city of the whole empire',
                  },
                ],
                explanation: {
                  el:
                    'Πριν από τα αεροπλάνα, το τρένο ήταν η ταχύτητα. Ένα βαγόνι σαλόνι ' +
                    'ήταν γραφείο και υπνοδωμάτιο μαζί.',
                  en:
                    'Before aeroplanes, the train was speed. A saloon carriage was an ' +
                    'office and a bedroom at once.',
                },
              },
            },
            {
              id: 'prague-technical-museum-tatra-87',
              name: { el: 'Η Tatra 87 των εξερευνητών', en: 'The travellers’ Tatra 87' },
              blurb: {
                el:
                  'Ένα αυτοκίνητο με στρογγυλή πλάτη και ένα παράξενο πτερύγιο στη μέση ' +
                  'της ουράς. Με αυτό οι Τσέχοι Jiří Hanzelka και Miroslav Zikmund ' +
                  'διέσχισαν την Αφρική και τη Νότια Αμερική στα τέλη της δεκαετίας του ' +
                  '1940, σε δρόμους που συχνά δεν ήταν καν δρόμοι. Γύρισαν με ταινίες, ' +
                  'φωτογραφίες και βιβλία, και για μια χώρα που δεν μπορούσε να ταξιδέψει ' +
                  'εύκολα, εκείνοι ήταν το παράθυρο. Το πτερύγιο δεν είναι διακόσμηση: ' +
                  'βοηθά το αυτοκίνητο να μένει σταθερό στον άνεμο.',
                en:
                  'A car with a rounded back and a strange fin down the middle of its tail. ' +
                  'In it the Czechs Jiří Hanzelka and Miroslav Zikmund crossed Africa and ' +
                  'South America at the end of the 1940s, on roads that were often not ' +
                  'roads at all. They came home with films, photographs and books, and for ' +
                  'a country that could not travel easily they were the window. The fin is ' +
                  'not decoration: it helps the car hold steady in a side wind.',
              },
              question: {
                q: {
                  el: 'Τι δουλειά κάνει το πτερύγιο στην ουρά του αυτοκινήτου;',
                  en: 'What job does the fin on the car’s tail actually do?',
                },
                answers: [
                  {
                    el: 'Το κρατάει σταθερό όταν φυσάει πλάγιος αέρας',
                    en: 'It holds the car steady in a side wind',
                  },
                  {
                    el: 'Ρίχνει καθαρό αέρα στην καμπίνα',
                    en: 'It pushes fresh air into the cabin',
                  },
                  {
                    el: 'Δείχνει στους άλλους οδηγούς προς τα πού θα στρίψει',
                    en: 'It shows the other drivers which way it is about to turn',
                  },
                  {
                    el: 'Κρύβει μέσα του τη ρεζέρβα και τα εργαλεία του ταξιδιού',
                    en: 'It hides the spare wheel and the tools for the long trip',
                  },
                ],
                explanation: {
                  el:
                    'Ένα αυτοκίνητο με στρογγυλή ουρά «γλιστράει» στον πλάγιο άνεμο. Το ' +
                    'πτερύγιο δίνει στον αέρα κάτι να σπρώξει και το ισιώνει.',
                  en:
                    'A car with a rounded tail slides in a side wind. The fin gives the air ' +
                    'something to push against and straightens it out.',
                },
              },
            },
          ],
        },
        {
          id: 'prague-technical-museum-astronomy',
          emoji: '🔭',
          name: { el: 'Αστρονομία', en: 'Astronomy' },
          intro: {
            el:
              'Γύρω στο 1600 η Πράγα ήταν η πόλη των αστρονόμων: ο αυτοκράτορας ' +
              'Ροδόλφος Β΄ κάλεσε εδώ τους καλύτερους παρατηρητές της Ευρώπης και ' +
              'πλήρωσε τους καλύτερους τεχνίτες για να τους φτιάξουν όργανα. Αυτή η ' +
              'αίθουσα φυλάει μερικά από εκείνα τα όργανα: μπρούντζος, χαραγμένοι ' +
              'αριθμοί, καμία λάμπα και κανένας φακός.',
            en:
              'Around 1600 Prague was the city of astronomers: the emperor Rudolf II ' +
              'invited the best observers in Europe here and paid the best craftsmen to ' +
              'make instruments for them. This room keeps some of those instruments: ' +
              'brass, engraved numbers, no lamp and no lens.',
          },
          exhibits: [
            {
              id: 'prague-technical-museum-burgi-sextant',
              name: { el: 'Ο εξάντας του Bürgi', en: 'Bürgi’s sextant' },
              blurb: {
                el:
                  'Ένα μεγάλο μπρούντζινο τόξο με χαραγμένη κλίμακα, φτιαγμένο από τον ' +
                  'Jost Bürgi, τον ωρολογοποιό του αυτοκράτορα Ροδόλφου Β΄. Με αυτό ' +
                  'μετρούσαν τη γωνία ανάμεσα σε δύο άστρα. Δεν μεγεθύνει τίποτα: το ' +
                  'μυστικό του δεν είναι ο φακός αλλά η ακρίβεια των χαραγμάτων. Ο ' +
                  'Bürgi ήταν τόσο καλός τεχνίτης που έφτιαχνε ρολόγια με δείκτη ' +
                  'δευτερολέπτων σε μια εποχή που οι περισσότεροι δεν είχαν καν δείκτη ' +
                  'λεπτών.',
                en:
                  'A large brass arc with an engraved scale, made by Jost Bürgi, clockmaker ' +
                  'to the emperor Rudolf II. With it people measured the angle between two ' +
                  'stars. It magnifies nothing: its secret is not a lens but the accuracy ' +
                  'of the engraved marks. Bürgi was such a fine craftsman that he built ' +
                  'clocks with a second hand at a time when most clocks did not even have a ' +
                  'minute hand.',
              },
              question: {
                q: {
                  el: 'Τι μετρούσαν οι αστρονόμοι με έναν τέτοιον εξάντα;',
                  en: 'What did astronomers measure with a sextant like this?',
                },
                answers: [
                  {
                    el: 'Τη γωνία ανάμεσα σε δύο άστρα στον ουρανό',
                    en: 'The angle between two stars in the sky',
                  },
                  {
                    el: 'Το χρώμα ενός άστρου, για να καταλάβουν πόσο ζεστό είναι',
                    en: 'The colour of a star, to work out how hot it must be',
                  },
                  {
                    el: 'Το βάρος ενός πλανήτη, με μια ζυγαριά κρυμμένη στη βάση',
                    en: 'The weight of a planet, with scales hidden in the base',
                  },
                  {
                    el: 'Την απόσταση της Γης από τον Ήλιο, σε χιλιάδες μίλια',
                    en: 'The distance of the Earth from the Sun, in thousand miles',
                  },
                ],
                explanation: {
                  el:
                    'Πριν από τα τηλεσκόπια, η αστρονομία ήταν γεωμετρία: μετρούσες ' +
                    'γωνίες πολύ προσεκτικά και έβγαζες τα υπόλοιπα με υπολογισμούς.',
                  en:
                    'Before telescopes, astronomy was geometry: you measured angles very ' +
                    'carefully and worked the rest out on paper.',
                },
              },
            },
            {
              id: 'prague-technical-museum-habermel-sextant',
              name: { el: 'Ο εξάντας του Habermel', en: 'Habermel’s sextant' },
              blurb: {
                el:
                  'Ο Erasmus Habermel έφτιαχνε όργανα για την αυλή της Πράγας και ήταν ' +
                  'διάσημος για κάτι που δεν φαίνεται με την πρώτη ματιά: τα εξαρτήματά ' +
                  'του ταίριαζαν τέλεια μεταξύ τους. Κοίτα τα χαράγματα της κλίμακας από ' +
                  'κοντά. Κάθε γραμμούλα σκαλίστηκε στο χέρι, και μια απόκλιση πάχους ' +
                  'τριχας σήμαινε λάθος μέτρηση. Η αστρονομία εκείνης της εποχής ' +
                  'προχώρησε όσο προχώρησαν οι τεχνίτες που έφτιαχναν τα εργαλεία της.',
                en:
                  'Erasmus Habermel made instruments for the court in Prague and was famous ' +
                  'for something you do not notice at first glance: his parts fitted one ' +
                  'another perfectly. Look closely at the marks of the scale. Every little ' +
                  'line was cut by hand, and being out by the width of a hair meant a wrong ' +
                  'measurement. The astronomy of that age went exactly as far as the ' +
                  'craftsmen who made its tools.',
              },
              question: {
                q: {
                  el: 'Γιατί είχε τόση σημασία η δουλειά του τεχνίτη;',
                  en: 'Why did the craftsman’s work matter so much here?',
                },
                answers: [
                  {
                    el: 'Ένα κακό χάραγμα, έστω κατά μια τρίχα, έδινε τελείως λάθος μέτρηση',
                    en: 'A line cut wrong, even by a hair, gave a wrong measurement',
                  },
                  {
                    el: 'Ο αυτοκράτορας πλήρωνε ανάλογα με την ομορφιά του οργάνου',
                    en: 'The emperor paid according to how beautiful the tool was',
                  },
                  {
                    el: 'Τα όργανα έπρεπε να αντέχουν ταξίδια με καράβι σε φουρτούνα',
                    en: 'The instruments had to survive sea voyages through storms',
                  },
                  {
                    el: 'Χωρίς τέλεια εξαρτήματα, το όργανο δεν χωρούσε στη βαλίτσα',
                    en: 'Without perfect parts the tool would not fit in its case',
                  },
                ],
                explanation: {
                  el:
                    'Η επιστήμη δεν προχωράει μόνο με ιδέες. Προχωράει και με χέρια που ' +
                    'μπορούν να φτιάξουν αυτό που η ιδέα χρειάζεται.',
                  en:
                    'Science does not move on ideas alone. It also moves on hands that can ' +
                    'build what the idea needs.',
                },
              },
            },
            {
              id: 'prague-technical-museum-seige-clock',
              name: { el: 'Το αστρονομικό ρολόι του Seige', en: 'Seige’s astronomical clock' },
              blurb: {
                el:
                  'Ένα ρολόι που δεν αρκείται στην ώρα: τα καντράν του δείχνουν τη θέση ' +
                  'του ήλιου και του φεγγαριού, τη μέρα του μήνα και τη φάση της ' +
                  'σελήνης. Το έφτιαξε ο Engelbert Seige. Είναι μια μικρή μηχανή που ' +
                  'μιμείται τον ουρανό με γρανάζια, και το πιο δύσκολο κομμάτι της είναι ' +
                  'ότι ο ουρανός δεν κάνει στρογγυλούς αριθμούς: ο μήνας του φεγγαριού ' +
                  'δεν είναι ακριβώς τριάντα μέρες, οπότε τα δόντια των γραναζιών πρέπει ' +
                  'να μετρηθούν με πονηριά.',
                en:
                  'A clock that is not satisfied with the time: its dials show the position ' +
                  'of the sun and the moon, the day of the month and the phase of the moon. ' +
                  'Engelbert Seige made it. It is a small machine that imitates the sky ' +
                  'with gears, and the hardest part of it is that the sky does not work in ' +
                  'round numbers: the moon’s month is not exactly thirty days, so the teeth ' +
                  'of the gears have to be counted out cleverly.',
              },
              question: {
                q: {
                  el: 'Ποιο είναι το πιο δύσκολο κομμάτι σε ένα τέτοιο ρολόι;',
                  en: 'What is the hardest part of building a clock like this?',
                },
                answers: [
                  {
                    el: 'Ο ουρανός δεν κινείται σε στρογγυλούς αριθμούς',
                    en: 'The sky does not move in round numbers',
                  },
                  {
                    el: 'Ο μπρούντζος σκουριάζει και τα γρανάζια κολλάνε συχνά',
                    en: 'Brass rusts and the gears keep sticking against each other',
                  },
                  {
                    el: 'Πρέπει να κουρδίζεται δύο φορές τη μέρα',
                    en: 'It has to be wound up twice a day',
                  },
                  {
                    el: 'Τα καντράν πρέπει να ζωγραφιστούν από πολύ καλό ζωγράφο',
                    en: 'The dials have to be painted by a really skilled painter',
                  },
                ],
                explanation: {
                  el:
                    'Ο μήνας του φεγγαριού είναι περίπου 29 μισή μέρες. Για να το ' +
                    'δείξεις με γρανάζια, χρειάζεσαι έξυπνους αριθμούς δοντιών.',
                  en:
                    'The moon’s month is about 29 and a half days. To show that with gears ' +
                    'you need clever numbers of teeth.',
                },
              },
            },
          ],
        },
        {
          id: 'prague-technical-museum-mine',
          emoji: '⛏️',
          name: { el: 'Το ορυχείο κάτω από το μουσείο', en: 'The mine under the museum' },
          intro: {
            el:
              'Στα 1951–1953 οι άνθρωποι του μουσείου έκαναν κάτι αλλόκοτο: αντί να ' +
              'βάλουν φωτογραφίες ενός ορυχείου σε τοίχους, έσκαψαν ένα ορυχείο στο ' +
              'υπόγειο. Κατεβαίνεις σκάλες, ο αέρας δροσίζει, το ταβάνι χαμηλώνει και ' +
              'ξαφνικά περπατάς σε στοά με ξύλινα στηρίγματα και μηχανές που δούλεψαν ' +
              'αληθινά κάτω από τη γη.',
            en:
              'In 1951–1953 the museum’s people did something odd: instead of hanging ' +
              'photographs of a mine on a wall, they dug a mine in the basement. You go ' +
              'down stairs, the air turns cool, the ceiling drops, and suddenly you are ' +
              'walking in a gallery with timber props and machines that really worked under ' +
              'the ground.',
          },
          exhibits: [
            {
              id: 'prague-technical-museum-gallery',
              name: { el: 'Η στοά', en: 'The gallery' },
              blurb: {
                el:
                  'Ο διάδρομος είναι στενός και το ταβάνι χαμηλό, γιατί έτσι είναι μια ' +
                  'πραγματική στοά: κάθε επιπλέον εκατοστό κόστιζε ώρες σκαψίματος. Τα ' +
                  'ξύλινα στηρίγματα δεν είναι διακόσμηση· κρατάνε την οροφή. Το ξύλο ' +
                  'προτιμήθηκε από το μέταλλο σε πολλά ορυχεία για έναν παράξενο λόγο: ' +
                  'πριν σπάσει, τρίζει. Ένας ανθρακωρύχος που άκουγε τα ξύλα να μιλάνε ' +
                  'πάνω από το κεφάλι του ήξερε αμέσως ότι έπρεπε να βγει έξω.',
                en:
                  'The passage is narrow and the ceiling low, because that is what a real ' +
                  'gallery is like: every extra centimetre cost hours of digging. The ' +
                  'timber props are not decoration; they hold the roof up. Wood was ' +
                  'preferred to metal in many mines for an odd reason: before it breaks, it ' +
                  'creaks. A miner who heard the timbers talking knew it was time to get ' +
                  'out.',
              },
              question: {
                q: {
                  el: 'Γιατί προτιμούσαν ξύλινα στηρίγματα σε πολλά ορυχεία;',
                  en: 'Why were timber props preferred in many mines?',
                },
                answers: [
                  {
                    el: 'Το ξύλο τρίζει προειδοποιητικά πριν σπάσει',
                    en: 'Wood creaks as a warning before it breaks',
                  },
                  {
                    el: 'Το ξύλο δεν ζεσταίνεται στο χέρι',
                    en: 'Wood does not get hot in the hand',
                  },
                  {
                    el: 'Το ξύλο μπορεί να καεί για να ζεσταθούν οι ανθρακωρύχοι',
                    en: 'Wood can be burned to keep the miners warm down below',
                  },
                  {
                    el: 'Το ξύλο εμποδίζει το νερό να μπει μέσα στη στοά από πάνω',
                    en: 'Wood stops water from getting into the gallery from above',
                  },
                ],
                explanation: {
                  el:
                    'Ένα υλικό που προειδοποιεί πριν υποχωρήσει είναι ασφαλέστερο από ένα ' +
                    'δυνατό υλικό που σπάει χωρίς ήχο.',
                  en:
                    'A material that warns you before it gives way is safer than a strong ' +
                    'one that snaps without a sound.',
                },
              },
            },
            {
              id: 'prague-technical-museum-safety-lamp',
              name: { el: 'Η λάμπα ασφαλείας', en: 'The safety lamp' },
              blurb: {
                el:
                  'Μοιάζει με απλό φανάρι, αλλά η φλόγα του είναι κλεισμένη μέσα σε ένα ' +
                  'μεταλλικό πλέγμα. Σε ένα ορυχείο μπορεί να υπάρχει αέριο που ' +
                  'αναφλέγεται· αν η γυμνή φλόγα το συναντήσει, γίνεται έκρηξη. Το ' +
                  'πλέγμα αφήνει το φως να βγει, αλλά απομακρύνει τη θερμότητα τόσο ' +
                  'γρήγορα που η φλόγα δεν περνάει έξω. Και κάτι ακόμα: όταν υπήρχε ' +
                  'αέριο, η φλόγα μέσα άλλαζε σχήμα. Η λάμπα ήταν ταυτόχρονα φως και ' +
                  'προειδοποίηση.',
                en:
                  'It looks like an ordinary lantern, but its flame is shut inside a metal ' +
                  'mesh. A mine can hold gas that catches fire; if a bare flame meets it, ' +
                  'there is an explosion. The mesh lets the light out but carries the heat ' +
                  'away so fast that the flame cannot get through. And there is more: when ' +
                  'gas was present, the flame inside changed shape. The lamp was light and ' +
                  'warning at the same time.',
              },
              question: {
                q: {
                  el: 'Γιατί έχει μεταλλικό πλέγμα γύρω από τη φλόγα;',
                  en: 'Why is there a metal mesh around the flame?',
                },
                answers: [
                  {
                    el: 'Για να μην περάσει η φλόγα στο αέριο του ορυχείου',
                    en: 'So the flame cannot reach the gas in the mine',
                  },
                  {
                    el: 'Για να μη σβήνει η φλόγα από το ρεύμα αέρα της στοάς',
                    en: 'So the draught in the gallery cannot blow the flame out',
                  },
                  {
                    el: 'Για να μην καίγονται τα δάχτυλα όταν κρατάς τη λάμπα',
                    en: 'So that fingers do not burn when you hold up the lamp',
                  },
                  {
                    el: 'Για να φαίνεται το φως πιο μακριά μέσα στους διαδρόμους',
                    en: 'So that the light can be seen further down the passages',
                  },
                ],
                explanation: {
                  el:
                    'Το πλέγμα κλέβει τη θερμότητα της φλόγας. Έξω από αυτό, το αέριο δεν ' +
                    'ζεσταίνεται αρκετά για να πάρει φωτιά.',
                  en:
                    'The mesh steals the flame’s heat. Outside it, the gas never gets hot ' +
                    'enough to catch light.',
                },
              },
            },
            {
              id: 'prague-technical-museum-mine-trucks',
              name: { el: 'Τα βαγονέτα', en: 'The mine trucks' },
              blurb: {
                el:
                  'Μικρά μεταλλικά κουτιά πάνω σε ρόδες, σε στενές ράγες που περνούν στη ' +
                  'μέση της στοάς. Οι ράγες υπάρχουν επειδή ένα φορτωμένο βαγονέτο ' +
                  'ζυγίζει εκατοντάδες κιλά και σε λάσπη δεν κουνιέται· πάνω σε σίδερο ' +
                  'το σπρώχνει ένας άνθρωπος. Πρώτα το τραβούσαν άνθρωποι, μετά άλογα, ' +
                  'μετά μηχανές. Ολόκληρη η ιστορία του σιδηροδρόμου ξεκίνησε κάτω από ' +
                  'τη γη, σε στοές σαν αυτή, πολύ πριν φτάσει στους σταθμούς.',
                en:
                  'Small metal boxes on wheels, on narrow rails running down the middle of ' +
                  'the gallery. The rails are there because a loaded truck weighs hundreds ' +
                  'of kilos and will not move through mud; on iron, one person can push it. ' +
                  'First people pulled them, then horses, then engines. The whole history ' +
                  'of the railway began underground, in galleries like this one, long ' +
                  'before it reached the stations.',
              },
              question: {
                q: {
                  el: 'Γιατί υπάρχουν ράγες μέσα στη στοά;',
                  en: 'Why are there rails inside the gallery?',
                },
                answers: [
                  {
                    el: 'Για να μπορεί ένας άνθρωπος να σπρώχνει βάρος εκατοντάδων κιλών',
                    en: 'So that one person on their own can push hundreds of kilos',
                  },
                  {
                    el: 'Για να μη χάνονται οι ανθρακωρύχοι στα σκοτεινά',
                    en: 'So the miners do not get lost in the dark',
                  },
                  {
                    el: 'Για να στηρίζεται πάνω τους η οροφή',
                    en: 'So the roof has something to rest on',
                  },
                  {
                    el: 'Για να τρέχει το νερό μακριά από τα πόδια των εργατών',
                    en: 'So that water can run away from the feet of the workers',
                  },
                ],
                explanation: {
                  el:
                    'Ο σίδερος πάνω σε σίδερο έχει ελάχιστη τριβή. Γι’ αυτό οι ράγες ' +
                    'εφευρέθηκαν στα ορυχεία, πριν από τα τρένα.',
                  en:
                    'Iron on iron has almost no friction. That is why rails were invented ' +
                    'in mines, before there were trains.',
                },
              },
            },
          ],
        },
      ],
      riddles: [
        {
          id: 'prague-technical-museum-riddle-1',
          difficulty: 1,
          prompt: {
            el:
              'Είμαι φτιαγμένο από ξύλο και ύφασμα και κρέμομαι πάνω από όλα τα άλλα. ' +
              'Δεν έχω καμπίνα ούτε όργανα, και ο άνθρωπος που με οδηγούσε καθόταν έξω ' +
              'στον αέρα.',
            en:
              'I am made of wood and cloth and I hang above everything else. I have no ' +
              'cabin and no instruments, and the man who flew me sat outside in the open ' +
              'air.',
          },
          hint: {
            el: 'Έχω ένα μόνο ζευγάρι φτερά.',
            en: 'I have only one pair of wings.',
          },
          answerExhibitId: 'prague-technical-museum-kaspar-plane',
        },
        {
          id: 'prague-technical-museum-riddle-2',
          difficulty: 2,
          prompt: {
            el:
              'Έχω φλόγα, αλλά με φοράνε σαν φανάρι σε μέρος όπου μια γυμνή φλόγα θα ' +
              'ήταν επικίνδυνη. Το πλέγμα μου κρατάει τη φωτιά μέσα και αφήνει μόνο το ' +
              'φως να βγει.',
            en:
              'I hold a flame, yet I am carried like a lantern where a bare flame would be ' +
              'dangerous. My mesh keeps the fire inside and lets only the light out.',
          },
          hint: {
            el: 'Θα με βρεις κάτω από το ισόγειο, στα σκοτεινά.',
            en: 'You will find me below the ground floor, in the dark.',
          },
          answerExhibitId: 'prague-technical-museum-safety-lamp',
        },
        {
          id: 'prague-technical-museum-riddle-3',
          difficulty: 3,
          prompt: {
            el:
              'Από έξω μοιάζω με τα άλλα βαγόνια της γραμμής, αλλά μέσα μου έχω βελούδο ' +
              'και καθρέφτες. Ταξίδευε μέσα μου ένας αυτοκράτορας, όταν το τρένο ήταν το ' +
              'πιο γρήγορο πράγμα στον κόσμο.',
            en:
              'From outside I look like the other carriages on the line, but inside me ' +
              'there is velvet and there are mirrors. An emperor travelled in me, when the ' +
              'train was the fastest thing in the world.',
          },
          hint: {
            el: 'Είμαι ένα δωμάτιο πάνω σε ρόδες.',
            en: 'I am a room on wheels.',
          },
          answerExhibitId: 'prague-technical-museum-saloon-carriage',
        },
      ],
    },
  },

  // -------------------------------------------------------------------- vyšehrad
  {
    id: 'prague-vysehrad',
    cityId: 'prague',
    emoji: '🏞️',
    category: 'nature',
    difficulty: 2,

    name: { el: 'Vyšehrad', en: 'The Vyšehrad fort' },
    tagline: {
      el: 'Ένας βράχος με θρύλο, που σήμερα είναι πάρκο',
      en: 'A rock with a legend on it, and now a park',
    },
    story: {
      el:
        'Τρία χιλιόμετρα νότια από το Κάστρο της Πράγας, ένας δεύτερος βράχος στέκεται ' +
        'πάνω από τον Vltava. Εκεί χτίστηκε οχυρό μάλλον τον 10ο αιώνα, και ο θρύλος ' +
        'λέει ότι από αυτόν τον βράχο η πριγκίπισσα Libuše κοίταξε το δάσος και ' +
        'προφήτεψε μια πόλη «που η δόξα της θα αγγίξει τα άστρα». Οι θρύλοι δεν είναι ' +
        'ιστορία, αλλά δείχνουν τι θέλει μια πόλη να πιστεύει για τον εαυτό της. Το ' +
        'παλαιότερο πράγμα που στέκεται ακόμα εδώ είναι η μικρή στρογγυλή εκκλησία του ' +
        'Αγίου Μαρτίνου, από τον 11ο αιώνα. Δίπλα υψώνεται η βασιλική των Αγίων Πέτρου ' +
        'και Παύλου με τους δύο μυτερούς πύργους της, και πίσω από αυτήν το κοιμητήριο ' +
        'όπου αναπαύονται πολλοί διάσημοι Τσέχοι, ανάμεσά τους οι συνθέτες Antonín ' +
        'Dvořák και Bedřich Smetana. Σήμερα τα χορταριασμένα τείχη είναι πάρκο, με τη ' +
        'μεγαλύτερη θέα της πόλης και σχεδόν κανένα πλήθος.',
      en:
        'Three kilometres south of Prague Castle, a second rock stands above the Vltava. A ' +
        'fort was built there probably in the 10th century, and the legend says that from ' +
        'this rock Princess Libuše looked out over the forest and foretold a city “whose ' +
        'glory will touch the stars”. Legends are not history, but they show what a city ' +
        'wants to believe about itself. The oldest thing still standing here is the small ' +
        'round church of St Martin, from the 11th century. Beside it rises the basilica of ' +
        'St Peter and St Paul with its two pointed towers, and behind that the cemetery ' +
        'where many famous Czechs lie, among them the composers Antonín Dvořák and Bedřich ' +
        'Smetana. Today the grassy ramparts are a park, with the widest view in the city ' +
        'and almost no crowds.',
    },
    facts: [
      {
        el: 'Η στρογγυλή εκκλησία του Αγίου Μαρτίνου είναι από τον 11ο αιώνα.',
        en: 'The round church of St Martin dates from the 11th century.',
      },
      {
        el: 'Στο κοιμητήριό του είναι θαμμένοι οι συνθέτες Dvořák και Smetana.',
        en: 'The composers Dvořák and Smetana are buried in its cemetery.',
      },
      {
        el: 'Βρίσκεται περίπου τρία χιλιόμετρα νότια από το Κάστρο της Πράγας.',
        en: 'It sits about three kilometres south of Prague Castle.',
      },
    ],
    location: {
      lat: 50.06443,
      lng: 14.41764,
      anchor: 'area',
      confidence: 'C',
      sources: [
        { kind: 'wikidata', ref: 'Q616334', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Vyšehrad', deltaM: 132 },
      ],
      verifiedAt: '2026-09-13',
      note: 'An area pin on a fortress the size of a small village, so Wikipedia\'s point 132 m away is another corner of the same walls rather than a disagreement. OpenStreetMap did not answer in the resolver run (Overpass returned 429), which is why only one source lands inside the agreement band and the grade is C.',
      map: { x: 0.636, y: 0.889 },
      findIt: {
        el: 'Ανηφορίζεις από το ποτάμι ή μπαίνεις από την τούβλινη πύλη Táborská brána στην ανατολική πλευρά. Μέσα στα τείχη ο δρόμος γίνεται ξαφνικά χωματόδρομος.',
        en: 'You climb up from the river, or go in through the brick Táborská gate on the east side. Inside the walls the road suddenly turns to gravel.',
      },
    },
    question: {
      q: {
        el: 'Ποιο είναι το παλαιότερο κτίριο που στέκεται ακόμα στον βράχο;',
        en: 'Which is the oldest building still standing on the rock?',
      },
      answers: [
        {
          el: 'Η στρογγυλή εκκλησία του Αγίου Μαρτίνου',
          en: 'The round church of Saint Martin',
        },
        {
          el: 'Η βασιλική με τους δύο μυτερούς πύργους στη μέση',
          en: 'The basilica with the two pointed towers in the middle',
        },
        {
          el: 'Η τούβλινη πύλη στην ανατολική πλευρά των τειχών',
          en: 'The brick gate on the eastern side of the fortress walls',
        },
        {
          el: 'Το κοιμητήριο πίσω από την εκκλησία',
          en: 'The cemetery behind the church',
        },
      ],
      explanation: {
        el:
          'Η ροτόντα του Αγίου Μαρτίνου είναι από τον 11ο αιώνα και είναι η παλαιότερη ' +
          'που σώζεται σε ολόκληρη την Πράγα.',
        en:
          'The rotunda of St Martin is from the 11th century and is the oldest one ' +
          'surviving anywhere in Prague.',
      },
    },
  },

  // ----------------------------------------------------------- old-new synagogue
  {
    id: 'prague-old-new-synagogue',
    cityId: 'prague',
    emoji: '🕍',
    category: 'history',
    difficulty: 3,

    name: { el: 'Staronová synagoga', en: 'The Old-New Synagogue' },
    tagline: {
      el: 'Η παλαιότερη συναγωγή της Ευρώπης που λειτουργεί ακόμα',
      en: 'Europe’s oldest synagogue that is still in use',
    },
    story: {
      el:
        'Χτίστηκε γύρω στο 1270, όταν η γοτθική αρχιτεκτονική ήταν καινούργια στην ' +
        'Πράγα, και είναι η παλαιότερη συναγωγή της Ευρώπης που λειτουργεί ακόμα. ' +
        'Το εσωτερικό της είναι ασυνήθιστο: ' +
        'δύο σειρές θόλων στηρίζονται σε μία μόνο σειρά κολόνων στη μέση, σχέδιο που ' +
        'σχεδόν πουθενά αλλού δεν σώζεται. Το όνομα «Παλιά-Νέα» μπερδεύει, και ο ' +
        'λόγος έχει ξεχαστεί: ήταν καινούργια όταν υπήρχε ήδη μια παλαιότερη, και ένας ' +
        'θρύλος λέει ότι οι πέτρες της ήρθαν από την Ιερουσαλήμ «υπό όρον». Ο πιο ' +
        'γνωστός θρύλος αφορά τη σοφίτα της: εκεί λένε ότι αναπαύεται ο Γκόλεμ, μια ' +
        'φιγούρα από πηλό που έφτιαξε ο ραβίνος Löw. Η σοφίτα δεν είναι ανοιχτή. Στον ' +
        'πόλεμο της δεκαετίας του 1940 οι περισσότερες εβραϊκές οικογένειες της Πράγας ' +
        'εκτοπίστηκαν και δεν γύρισαν, και από το 1941 ως το 1945 η συναγωγή έμεινε ' +
        'κλειστή. Το κτίριο σώθηκε, οι προσευχές ξανάρχισαν το 1945, και συνεχίζονται ' +
        'μέχρι σήμερα.',
      en:
        'It was built around 1270, when Gothic building was new in Prague, and it is the ' +
        'oldest synagogue in Europe that is still in ' +
        'use. Inside it is unusual: two rows of vaults rest on a single row of pillars ' +
        'down the middle, a design that survives almost nowhere else. The name “Old-New” ' +
        'is confusing, and the reason has been forgotten: it was new when an older one ' +
        'already existed, and one legend says its stones came from Jerusalem “on ' +
        'condition”. The best-known legend is about its attic: there, they say, rests the ' +
        'Golem, a figure of clay made by Rabbi Löw. The attic is not open. In the war of ' +
        'the 1940s most of Prague’s Jewish families were taken away and did not come back, ' +
        'and from 1941 to 1945 the synagogue was shut. The building survived, prayers began ' +
        'again in 1945, and they have carried on ever since.',
    },
    facts: [
      {
        el: 'Ολοκληρώθηκε γύρω στο 1270 και μέσα της λέγονται προσευχές μέχρι σήμερα.',
        en: 'It was completed around 1270 and prayers are still said in it today.',
      },
      {
        el: 'Οι θόλοι της στηρίζονται σε μία μόνο σειρά κολόνων, σχέδιο σπανιότατο.',
        en: 'Its vaults rest on a single row of pillars, a very rare design.',
      },
      {
        el: 'Η σοφίτα, όπου λέει ο θρύλος ότι είναι ο Γκόλεμ, δεν είναι ανοιχτή.',
        en: 'The attic, where legend puts the Golem, is not open to visitors.',
      },
    ],
    location: {
      lat: 50.09,
      lng: 14.41861,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q443107', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Old New Synagogue', deltaM: 0 },
      ],
      verifiedAt: '2026-09-13',
      note: 'OpenStreetMap did not answer in the resolver run (Overpass returned 504), so the grade rests on Wikidata and Wikipedia alone.',
      map: { x: 0.654, y: 0.25 },
      findIt: {
        el: 'Στέκεται χαμηλά, στη συνοικία Josefov, ανάμεσα σε πολύ πιο ψηλά κτίρια του 1900. Ψάξε την απότομη τούβλινη σκεπή με τα σκαλοπάτια στο περίγραμμά της.',
        en: 'It sits low down, in the Josefov quarter, among much taller buildings from 1900. Look for the steep brick roof with steps along its outline.',
      },
    },
    question: {
      q: {
        el: 'Τι κάνει αυτή τη συναγωγή ξεχωριστή σε ολόκληρη την Ευρώπη;',
        en: 'What makes this synagogue special in the whole of Europe?',
      },
      answers: [
        {
          el: 'Είναι η παλαιότερη που λειτουργεί ακόμα σήμερα',
          en: 'It is the oldest one that is still in use today',
        },
        {
          el: 'Είναι η μεγαλύτερη της ηπείρου',
          en: 'It is the largest in Europe',
        },
        {
          el: 'Είναι η μόνη που έχει χτιστεί εξ ολοκλήρου από ξύλο και τούβλα',
          en: 'It is the only one built entirely out of wood and clay bricks',
        },
        {
          el: 'Είναι η πρώτη που απέκτησε ηλεκτρικό φως, στα τέλη του 19ου αιώνα',
          en: 'It was the first to get electric light, at the end of the 1800s',
        },
      ],
      explanation: {
        el:
          'Χτίστηκε γύρω στο 1270 και μέσα της λέγονται ακόμα προσευχές. Καμιά άλλη ' +
          'συναγωγή στην Ευρώπη δεν λειτουργεί τόσα χρόνια.',
        en:
          'It was built around 1270 and prayers are still said in it. No other synagogue ' +
          'in Europe has been in use for so long.',
      },
    },
  },

  // ---------------------------------------------------------------- havel market
  {
    id: 'prague-havelske-trziste',
    cityId: 'prague',
    emoji: '🍏',
    category: 'food',
    difficulty: 1,

    name: { el: 'Havelské tržiště', en: 'The Havel Market' },
    tagline: {
      el: 'Ό,τι απέμεινε από μια αγορά 560 μέτρων',
      en: 'What is left of a market 560 metres long',
    },
    story: {
      el:
        'Στη δεκαετία του 1230 ο βασιλιάς Václav ο Α΄ επέτρεψε να χτιστεί μια ολόκληρη ' +
        'καινούργια πόλη μέσα στην Παλιά Πόλη, γύρω από την εκκλησία του Αγίου Havel. ' +
        'Είχε δικούς της κανόνες, δικό της σχέδιο σε ίσιους δρόμους, και στην καρδιά της ' +
        'μια τεράστια αγορά: πεντακόσια εξήντα μέτρα μήκος και πάνω από τρία εκτάρια, ' +
        'δηλαδή ανταγωνιστή της παλιάς αγοράς στη σημερινή Staroměstské náměstí. Το 1287 ' +
        'η μικρή πόλη ενώθηκε με την Παλιά Πόλη. Τον 14ο αιώνα έχτισαν σειρές ξύλινων ' +
        'πάγκων στη μέση της αγοράς, και σιγά σιγά αυτές οι σειρές έγιναν κτίρια και ' +
        'δρόμοι. Δηλαδή η αγορά δεν εξαφανίστηκε: πέτρωσε. Τα ονόματα των δρόμων γύρω ' +
        'σου τη θυμούνται ακόμα, Ovocný trh, η Αγορά των Φρούτων, και Uhelný trh, η ' +
        'Αγορά των Κάρβουνων. Και σε έναν από αυτούς στήνουν ακόμα πάγκους.',
      en:
        'In the 1230s King Václav I allowed a whole new town to be laid out inside the Old ' +
        'Town, around the church of St Havel. It had its own rules, its own plan of ' +
        'straight streets, and at its heart an enormous market: five hundred and sixty ' +
        'metres long and more than three hectares, a rival to the old market on today’s ' +
        'Staroměstské náměstí. In 1287 the little town was joined to the Old Town. In the ' +
        '14th century rows of wooden stalls were built down the middle of the market, and ' +
        'bit by bit those rows turned into buildings and streets. So the market did not ' +
        'disappear: it turned to stone. The street names around you still remember it, ' +
        'Ovocný trh, the Fruit Market, and Uhelný trh, the Coal Market. And in one of them ' +
        'the stalls still go up.',
    },
    facts: [
      {
        el: 'Η μεσαιωνική αγορά είχε μήκος περίπου 560 μέτρα και πάνω από τρία εκτάρια.',
        en: 'The medieval market was about 560 metres long and over three hectares.',
      },
      {
        el: 'Η μικρή πόλη γύρω της ενώθηκε με την Παλιά Πόλη το 1287.',
        en: 'The little town around it was joined to the Old Town in 1287.',
      },
      {
        el: 'Τα ονόματα Ovocný trh και Uhelný trh σημαίνουν Αγορά Φρούτων και Αγορά Κάρβουνων.',
        en: 'Ovocný trh and Uhelný trh mean the Fruit Market and the Coal Market.',
      },
    ],
    location: {
      lat: 50.08467,
      lng: 14.42088,
      anchor: 'area',
      confidence: 'C',
      sources: [{ kind: 'wikidata', ref: 'Q31519093', deltaM: 0 }],
      verifiedAt: '2026-09-13',
      note: 'Wikidata alone: this market has no Wikipedia article in any language, and OpenStreetMap did not answer in the resolver run (Overpass returned 504). One source, no disagreement. The pin is an area pin on the surviving line of stalls, not on any one of them.',
      map: { x: 0.694, y: 0.383 },
      findIt: {
        el: 'Είναι στην οδό Havelská, ανάμεσα στη Melantrichova και στο Na Můstku. Πήγαινε το πρωί: το απόγευμα οι πάγκοι μαζεύονται.',
        en: 'It is on Havelská street, between Melantrichova and Na Můstku. Go in the morning: by late afternoon the stalls are packed away.',
      },
    },
    question: {
      q: {
        el: 'Τι απέμεινε σήμερα από τη μεγάλη μεσαιωνική αγορά;',
        en: 'What is left today of the great medieval market?',
      },
      answers: [
        {
          el: 'Ένας δρόμος με πάγκους και μερικά ονόματα δρόμων',
          en: 'One street of stalls and a few street names',
        },
        {
          el: 'Ένα μουσείο που δείχνει πώς ήταν κάποτε ολόκληρη η αγορά',
          en: 'A museum showing what the whole market once looked like',
        },
        {
          el: 'Μια πλατεία χωρίς πάγκους, μόνο με τραπέζια από καφενεία',
          en: 'A square with no stalls at all, only tables from the cafés',
        },
        {
          el: 'Τίποτα· τη σκέπασαν εντελώς τα κτίρια του δέκατου ένατου αιώνα',
          en: 'Nothing; the buildings of the nineteenth century covered it up',
        },
      ],
      explanation: {
        el:
          'Οι σειρές των πάγκων έγιναν κτίρια και δρόμοι. Η αγορά είναι ακόμα εκεί, αλλά ' +
          'σε σχήμα πόλης.',
        en:
          'The rows of stalls became buildings and streets. The market is still there, ' +
          'only in the shape of a town.',
      },
    },
  },

  // ------------------------------------------------------------- strahov stadium
  {
    id: 'prague-strahov-stadium',
    cityId: 'prague',
    emoji: '🏟️',
    category: 'sport',
    difficulty: 3,

    name: { el: 'Velký strahovský stadion', en: 'The Great Strahov Stadium' },
    tagline: {
      el: 'Το μεγαλύτερο στάδιο που χτίστηκε ποτέ, και δεν είναι για ματς',
      en: 'The biggest stadium ever built, and not for matches',
    },
    story: {
      el:
        'Πάνω από την πόλη, στον λόφο δίπλα στο Petřín, απλώνεται κάτι που δύσκολα το ' +
        'πιστεύεις αν δεν το δεις: ένα στάδιο του οποίου το γήπεδο είναι τρεις φορές πιο ' +
        'μακρύ και τρεις φορές πιο φαρδύ από ένα κανονικό γήπεδο ποδοσφαίρου. Χωράνε ' +
        'εννιά γήπεδα μέσα. Δεν χτίστηκε για ματς, γιατί δύο ομάδες δεν θα χρειάζονταν ' +
        'ποτέ τόσο χώρο. Χτίστηκε για μαζικές επιδείξεις γυμναστικής, όπου δεκάδες ' +
        'χιλιάδες άνθρωποι έκαναν τις ίδιες κινήσεις ταυτόχρονα, και το θέαμα ήταν το ' +
        'ίδιο το πλήθος. Στη μεγαλύτερή του μορφή μπορούσε να δεχτεί περίπου διακόσιες ' +
        'πενήντα χιλιάδες θεατές, περισσότερους από οποιοδήποτε άλλο στάδιο στην ' +
        'ιστορία. Στα χρόνια του κομμουνιστικού καθεστώτος οι επιδείξεις λέγονταν ' +
        'Spartakiáda και η συμμετοχή συχνά δεν ήταν πραγματική επιλογή. Μετά το 1989 ' +
        'σταμάτησαν. Σήμερα μέσα στα τεράστια τείχη υπάρχουν κανονικά γήπεδα ' +
        'προπόνησης, και το στάδιο γερνάει ήσυχα.',
      en:
        'Above the city, on the hill next to Petřín, lies something you would not believe ' +
        'without seeing it: a stadium whose field is three times as long and three times ' +
        'as wide as an ordinary football pitch. Nine pitches fit inside it. It was not ' +
        'built for matches, because two teams would never need that much room. It was ' +
        'built for mass displays of gymnastics, in which tens of thousands of people made ' +
        'the same movements at the same time, and the spectacle was the crowd itself. At ' +
        'its largest it could hold about two hundred and fifty thousand spectators, more ' +
        'than any other stadium in history. In the years of the communist government the ' +
        'displays were called Spartakiáda, and taking part was often not a real choice. ' +
        'After 1989 they stopped. Today there are ordinary training pitches inside the ' +
        'enormous walls, and the stadium is quietly growing old.',
    },
    facts: [
      {
        el: 'Το γήπεδό του είναι τρεις φορές πιο μακρύ και τρεις φορές πιο φαρδύ από ένα κανονικό.',
        en: 'Its field is three times as long and three times as wide as a normal one.',
      },
      {
        el: 'Χωρούσε περίπου 250.000 θεατές, περισσότερους από κάθε άλλο στάδιο.',
        en: 'It held about 250,000 spectators, more than any other stadium.',
      },
      {
        el: 'Σήμερα χρησιμοποιείται ως προπονητικό κέντρο και όχι για αγώνες.',
        en: 'Today it is used as a training centre and not for matches.',
      },
    ],
    location: {
      lat: 50.08034,
      lng: 14.38786,
      anchor: 'area',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q1353687', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Great Strahov Stadium', deltaM: 0 },
      ],
      verifiedAt: '2026-09-13',
      note: 'An area pin in the middle of the field. OpenStreetMap did not answer in the resolver run (Overpass returned 504), so the grade rests on Wikidata and Wikipedia alone.',
      map: { x: 0.105, y: 0.492 },
      findIt: {
        el: 'Είναι στην κορυφή του λόφου, δυτικά από τον πύργο του Petřín. Περπατάς μέσα από τους κήπους περίπου είκοσι λεπτά και τα τείχη εμφανίζονται ξαφνικά.',
        en: 'It is at the top of the hill, west of the Petřín tower. You walk through the gardens for about twenty minutes and the walls appear all at once.',
      },
    },
    question: {
      q: {
        el: 'Για ποιον λόγο χτίστηκε ένα τόσο τεράστιο στάδιο;',
        en: 'What was such an enormous stadium built for?',
      },
      answers: [
        {
          el: 'Για τεράστιες μαζικές επιδείξεις γυμναστικής με χιλιάδες ανθρώπους',
          en: 'For enormous mass displays of gymnastics by thousands of people',
        },
        {
          el: 'Για τους Ολυμπιακούς Αγώνες, που τελικά δεν έγιναν ποτέ εδώ',
          en: 'For an Olympic Games that in the end never took place here',
        },
        {
          el: 'Για αγώνες ποδοσφαίρου ανάμεσα στις ομάδες ολόκληρης της χώρας',
          en: 'For football matches between the teams of the whole country',
        },
        {
          el: 'Για ιπποδρομίες, όπως τα παλιά ρωμαϊκά στάδια',
          en: 'For horse races, like the old Roman circuses',
        },
      ],
      explanation: {
        el:
          'Δύο ομάδες δεν χρειάζονται εννιά γήπεδα. Το θέαμα ήταν χιλιάδες άνθρωποι που ' +
          'κινούνταν όλοι μαζί στον ίδιο ρυθμό.',
        en:
          'Two teams do not need nine pitches. The spectacle was thousands of people all ' +
          'moving together in the same rhythm.',
      },
    },
  },
];

export const trails: Trail[] = [
  {
    id: 'prague-royal-route',
    cityId: 'prague',
    emoji: '👑',
    name: { el: 'Η Βασιλική Οδός', en: 'The Royal Route' },
    promise: {
      el: 'Ο δρόμος που έπαιρνε ένας καινούργιος βασιλιάς για να στεφθεί, από την πύλη ως τον καθεδρικό ναό.',
      en: 'The road a new king took to be crowned, from the city gate to the cathedral.',
    },
    placeIds: [
      'prague-powder-tower',
      'prague-old-town-square',
      'prague-astronomical-clock',
      'prague-charles-bridge',
      'prague-castle',
      'prague-st-vitus',
    ],
  },
  {
    id: 'prague-the-other-bank',
    cityId: 'prague',
    emoji: '🌳',
    name: { el: 'Η άλλη όχθη', en: 'The other bank' },
    promise: {
      el: 'Ένα νησί από μύλους, ένας τοίχος που δεν έμενε ποτέ άσπρος, και το μεγαλύτερο στάδιο του κόσμου.',
      en: 'An island of mills, a wall that never stayed white, and the biggest stadium on earth.',
    },
    placeIds: [
      'prague-kampa',
      'prague-lennon-wall',
      'prague-petrin-tower',
      'prague-strahov-stadium',
    ],
  },
  {
    id: 'prague-indoors',
    cityId: 'prague',
    emoji: '🐋',
    name: { el: 'Μια μέρα σε εσωτερικούς χώρους', en: 'A day indoors' },
    promise: {
      el: 'Μια φάλαινα κάτω από γυάλινη οροφή, ένα αεροπλάνο πάνω από αυτοκίνητα, και η πλατεία ανάμεσά τους.',
      en: 'A whale under a glass roof, an aeroplane above the cars, and the square in between.',
    },
    placeIds: [
      'prague-national-museum',
      'prague-wenceslas-square',
      'prague-technical-museum',
    ],
  },
  {
    id: 'prague-oldest-stones',
    cityId: 'prague',
    emoji: '🪨',
    name: { el: 'Οι παλαιότερες πέτρες', en: 'The oldest stones' },
    promise: {
      el: 'Ένας βράχος με θρύλο, μια αίθουσα προσευχής επτακοσίων ετών, και η τελευταία αγορά του Μεσαίωνα.',
      en: 'A rock with a legend, a hall of prayer seven hundred years old, and the last medieval market.',
    },
    placeIds: [
      'prague-vysehrad',
      'prague-old-new-synagogue',
      'prague-havelske-trziste',
    ],
  },
  {
    id: 'prague-along-the-vltava',
    cityId: 'prague',
    emoji: '🌉',
    name: { el: 'Κατά μήκος του Vltava', en: 'Along the Vltava' },
    promise: {
      el: 'Από τη γέφυρα του 1357 ως ένα σπίτι που χορεύει, με ένα νησί και έναν βράχο στη μέση.',
      en: 'From the bridge of 1357 to a house that dances, with an island and a rock between.',
    },
    placeIds: [
      'prague-charles-bridge',
      'prague-kampa',
      'prague-dancing-house',
      'prague-vysehrad',
    ],
  },
];
