/**
 * WiseBot World — Kraków.
 *
 * Sixteen places, two of them museums with an interior. Converted from the Explorer
 * product on origin/main, whose ten spots are the raw material: their stories, their
 * «did you know» paragraphs and their quizzes are reshaped to this module's lengths and
 * voice, and the treasure-hunt frame — the GPS riddle, the parent hint, the on-site
 * question — is dropped, because none of it belongs to a place a child reads rather
 * than walks to. The Explorer also puts its correct answer at a varying index; every
 * question here has been reordered so index 0 is the right one.
 *
 * Every coordinate is copied from `data/world/coords/krakow.json`, field for field.
 * The Explorer's own lat/lng are hand-written and are used nowhere in this file — that
 * is the whole reason this conversion exists. Nothing graded `D`. No place claims an
 * `entrance`: no door in Kraków has been measured from a source we may use, so every
 * point is the centroid, area or viewpoint the resolver reported. Where the way in is
 * worth describing it is described in words, in `location.findIt`, in both languages.
 *
 * Judgement calls, in the order a reader will meet them:
 *
 *  - **One Explorer spot is dropped.** `main-square` (Rynek Główny, Q770631) sits 12 m
 *    from the Cloth Hall's coordinate, because the hall stands in the middle of the
 *    square. That is one pin, not two, and it would fail the separation audit as an
 *    undeclared neighbour. The square keeps its story inside `krakow-sukiennice`, where
 *    it belongs: the hall is what stands in the square.
 *  - **Three Explorer spots are split in two**, because each half has its own story and
 *    its own coordinate far enough away to earn its own pin: the Barbican and St
 *    Florian's Gate (92 m apart), and Wawel castle and Wawel cathedral (89 m apart).
 *  - **Two Explorer spots are re-pinned onto a building.** `kazimierz-szeroka` is a
 *    street, and a street has no coordinate, so the place is the Old Synagogue standing
 *    at its end. `wawel-dragon` is a bronze statue with no Wikidata item of its own, so
 *    the place is Smocza Jama, the cave it guards, and the dragon lives in its story.
 *  - **Four places are added**, to reach sixteen, to reach two museums and to fill the
 *    categories the Explorer's day leaves empty. The Explorer never goes inside
 *    anything, so this city had no interior at all: `krakow-collegium-maius` and
 *    `krakow-muzeum-czartoryskich` supply the two. `krakow-kopiec-kosciuszki`,
 *    `krakow-rynek-kleparski` and `krakow-stadion-cracovii` supply nature, food and
 *    sport. (Collegium Maius is an Explorer spot as well as a museum here, so the count
 *    of genuinely new places is four.)
 *
 * OpenStreetMap answered for three places out of sixteen in the resolver run of
 * 14 September 2026; for the rest it returned 504, 429 or failed to answer at all, and
 * those grades rest on Wikidata and Wikipedia. A later run during an outage came back
 * with no OSM cross-check at all and lower grades for the same coordinates, and was
 * discarded in favour of this one — the point never moved, only the audit trail. Each
 * `location.note` names the code its own place got. St Mary's Basilica is the city's
 * only `A`. Five places grade C on Wikidata alone: a thin audit trail is not a
 * disagreement.
 *
 * Facts were checked on 14 September 2026 against the Polish Wikipedia articles
 * «Barbakan w Krakowie», «Brama Floriańska w Krakowie», «Sukiennice w Krakowie»,
 * «Wieża ratuszowa w Krakowie», «Collegium Maius Uniwersytetu Jagiellońskiego»,
 * «Kopiec Kościuszki w Krakowie», «Kleparz» and «Obwarzanek krakowski», against the
 * English articles "Wawel Cathedral", "Smocza Jama", "Czartoryski Museum", "Lady with
 * an Ermine", "Old Synagogue (Kraków)" and "KS Cracovia", and against Wikidata for
 * every q-id in `scripts/world/seeds/krakow.json`.
 *
 * `el` and `en` are complete. `de`, `fr`, `es` and `it` arrive as overlay files in
 * `data/world/i18n/` and never as extra keys in here.
 */

import type { Place, Trail } from '../types';

export const places: Place[] = [
  // -------------------------------------------------------------------- barbican
  {
    id: 'krakow-barbakan',
    cityId: 'krakow',
    emoji: '🛡️',
    category: 'history',
    difficulty: 1,

    name: { el: 'Barbakan, ο Μπαρμπακάν', en: 'The Barbican' },
    tagline: {
      el: 'Ένα στρογγυλό φρούριο μπροστά από την πόρτα της πόλης',
      en: 'A round fort standing in front of the city’s door',
    },
    story: {
      el:
        'Το 1498 η Κρακοβία φοβήθηκε. Στρατοί κινούνταν στα ανατολικά, και το πέτρινο ' +
        'τείχος της πόλης ξαφνικά φάνηκε λεπτό. Οι κάτοικοι δεν το πάχυναν· έκαναν κάτι ' +
        'πιο έξυπνο. Έχτισαν έναν ολόκληρο μικρό κύκλο από τούβλα λίγα μέτρα μπροστά από ' +
        'την πύλη τους, με τοίχους τρία μέτρα χοντρούς, μια τάφρο γεμάτη νερό γύρω του ' +
        'και επτά πυργίσκους με μυτερά καπέλα στην κορυφή. Ένας εχθρός που ήθελε την ' +
        'πόλη έπρεπε πρώτα να πάρει αυτό. Στους τοίχους υπάρχουν περίπου εκατόν τριάντα ' +
        'στενές σχισμές: από μέσα ένας τοξότης έβλεπε έξω και έριχνε, από έξω κανείς δεν ' +
        'μπορούσε να τον σημαδέψει. Τον 19ο αιώνα σχεδόν όλα τα τείχη γκρεμίστηκαν και ' +
        'στη θέση τους φυτεύτηκε πάρκο. Ο Μπαρμπακάν σώθηκε γιατί κάποιοι κάτοικοι ' +
        'πάλεψαν γι’ αυτόν. Σήμερα είναι ένα από τα ελάχιστα τέτοια στρογγυλά φρούρια που ' +
        'στέκονται ακόμα οπουδήποτε στην Ευρώπη, και μέσα του γίνονται μονομαχίες με ' +
        'ξύλινα σπαθιά.',
      en:
        'In 1498 Kraków was frightened. Armies were moving in the east, and the city’s ' +
        'stone wall suddenly looked thin. The townspeople did not make it thicker; they ' +
        'did something cleverer. They built a whole small circle of brick a few metres in ' +
        'front of their gate, with walls three metres thick, a moat full of water around ' +
        'it and seven little turrets in pointed hats along the top. An enemy who wanted ' +
        'the city had to take this first. About a hundred and thirty narrow slits are cut ' +
        'through the walls: from inside an archer could see out and shoot, and from ' +
        'outside nobody could aim at him. In the nineteenth century almost all the walls ' +
        'came down and a park was planted where they had stood. The Barbican survived ' +
        'because some of the townspeople fought for it. Today it is one of very few such ' +
        'round forts still standing anywhere in Europe, and knights duel inside it with ' +
        'wooden swords.',
    },
    facts: [
      {
        el: 'Χτίστηκε το 1498 και οι τοίχοι του έχουν πάχος περίπου τρία μέτρα.',
        en: 'It went up in 1498, and its walls are about three metres thick.',
      },
      {
        el: 'Έχει επτά πυργίσκους και περίπου 130 σχισμές για τα βέλη των τοξοτών.',
        en: 'It has seven turrets and about 130 slits for the archers’ arrows.',
      },
      {
        el: 'Παλιά μια τάφρος με νερό το χώριζε από την πύλη· σήμερα εκεί είναι γρασίδι.',
        en: 'A water moat once cut it off from the gate; today that ring is grass.',
      },
    ],
    location: {
      lat: 50.06553,
      lng: 19.94166,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q807309', deltaM: 0 },
        { kind: 'osm', ref: 'relation/13562708', deltaM: 8 },
      ],
      verifiedAt: '2026-09-14',
      note: 'Wikipedia carries no coordinate for this item, so the grade rests on Wikidata and OpenStreetMap, which agree to 8 m.',
      map: { x: 0.826, y: 0.195 },
      findIt: {
        el: 'Είναι ο μεγάλος στρογγυλός τοίχος από τούβλα στη βόρεια άκρη της Παλιάς Πόλης, μέσα στο πάρκο Planty. Η είσοδος βλέπει προς την πύλη.',
        en: 'It is the big round brick wall at the north edge of the Old Town, inside the Planty park. The way in faces the gate.',
      },
    },
    question: {
      q: {
        el: 'Γιατί οι σχισμές στους τοίχους είναι τόσο στενές;',
        en: 'Why are the slits in the walls so narrow?',
      },
      answers: [
        { el: 'Για να ρίχνει ο τοξότης χωρίς να τον χτυπούν', en: 'So an archer can shoot without being hit' },
        { el: 'Για να περνάει από μέσα το σκοινί της γέφυρας', en: 'So the drawbridge rope can pass through' },
        { el: 'Για να περνάει ο αέρας και να φεύγει ο καπνός', en: 'So air gets in and the smoke can get out' },
        { el: 'Για να κρεμάνε από εκεί τις σημαίες της πόλης', en: 'So the flags can be hung out of them' },
      ],
      explanation: {
        el:
          'Η σχισμή είναι φαρδιά από μέσα και στενή απ’ έξω. Ο τοξότης βλέπει και ρίχνει ' +
          'άνετα, αλλά από την άλλη μεριά υπάρχει μόνο μια γραμμή σκοτάδι για στόχος.',
        en:
          'The slit is wide on the inside and narrow on the outside. The archer sees and ' +
          'shoots easily, while from the other side there is only a line of dark to aim at.',
      },
    },
  },

  // ------------------------------------------------------------ st florian's gate
  {
    id: 'krakow-brama-florianska',
    cityId: 'krakow',
    emoji: '🚪',
    category: 'landmark',
    difficulty: 1,

    name: { el: 'Brama Floriańska, η Πύλη του Φλωριανού', en: 'St Florian’s Gate' },
    tagline: {
      el: 'Η μόνη πύλη από τις οκτώ που δεν γκρεμίστηκε ποτέ',
      en: 'The one gate of eight that was never pulled down',
    },
    story: {
      el:
        'Γύρω στο 1300 η Κρακοβία τυλίχτηκε με ένα τείχος που είχε δεκάδες πύργους και ' +
        'οκτώ πύλες. Αυτή είναι η πύλη που έμεινε. Οι άλλες επτά έπεσαν τον 19ο αιώνα, ' +
        'όταν η πόλη αποφάσισε ότι τα τείχη την έπνιγαν και τα αντικατέστησε με ένα ' +
        'πράσινο δαχτυλίδι από δέντρα, το πάρκο Planty. Η Brama Floriańska γλίτωσε επειδή ' +
        'ένας καθηγητής επέμεινε ότι χωρίς αυτήν θα φυσάει κρύος αέρας μέσα στην πόλη. Το ' +
        'επιχείρημα ήταν αστείο και έπιασε. Η πύλη είναι πάνω από τριάντα μέτρα ψηλή και ' +
        'από εδώ ξεκινάει ο Βασιλικός Δρόμος, η διαδρομή που έκαναν οι βασιλιάδες μέχρι ' +
        'το κάστρο. Στην πλευρά που βλέπει προς την πόλη υπάρχει ένας πέτρινος αετός, ' +
        'σχεδιασμένος από τον ζωγράφο Jan Matejko, που γεννήθηκε λίγα βήματα μακριά. Και ' +
        'στο παλιό τείχος δίπλα της, κάθε μέρα, ζωγράφοι κρεμούν τους πίνακές τους: το ' +
        'τείχος έγινε γκαλερί.',
      en:
        'Around 1300 Kraków wrapped itself in a wall with dozens of towers and eight ' +
        'gates. This is the gate that is left. The other seven came down in the ' +
        'nineteenth century, when the city decided the walls were choking it and swapped ' +
        'them for a green ring of trees, the Planty park. St Florian’s Gate escaped ' +
        'because a professor insisted that without it a cold draught would blow straight ' +
        'into town. The argument was funny and it worked. The gate is over thirty metres ' +
        'high, and the Royal Road starts here, the route the kings rode up to the castle. ' +
        'On the side facing the city there is a stone eagle, designed by the painter Jan ' +
        'Matejko, who was born a few steps away. And on the old wall beside it, every day, ' +
        'painters hang their pictures up for sale: the wall turned into a gallery.',
    },
    facts: [
      {
        el: 'Χτίστηκε γύρω στο 1300 και είναι η μόνη από τις οκτώ πύλες που σώζεται.',
        en: 'Built around 1300, it is the only one of the eight gates still standing.',
      },
      {
        el: 'Ο αετός στην πύλη σχεδιάστηκε από τον ζωγράφο Jan Matejko τον 19ο αιώνα.',
        en: 'The eagle on the gate was designed by the painter Jan Matejko in the 1800s.',
      },
      {
        el: 'Από εδώ ξεκινάει ο Βασιλικός Δρόμος, που καταλήγει στον λόφο Wawel.',
        en: 'The Royal Road begins here and ends up on Wawel hill.',
      },
    ],
    location: {
      lat: 50.06472,
      lng: 19.94139,
      anchor: 'centroid',
      confidence: 'C',
      sources: [{ kind: 'wikidata', ref: 'Q1363724', deltaM: 0 }],
      verifiedAt: '2026-09-14',
      note: 'Graded C on Wikidata alone: the OpenStreetMap fetch returned 504 in the resolver run and the item has no Wikipedia coordinate. One source, not a disagreement.',
      map: { x: 0.821, y: 0.224 },
      findIt: {
        el: 'Στέκεται ενενήντα μέτρα νότια από τον Μπαρμπακάν, στην αρχή του πεζόδρομου Floriańska. Ο αετός είναι στην πλευρά που βλέπει τον πεζόδρομο.',
        en: 'It stands ninety metres south of the Barbican, at the top of the Floriańska walking street. The eagle is on the side facing that street.',
      },
    },
    question: {
      q: {
        el: 'Πώς γλίτωσε η πύλη όταν γκρεμίστηκαν τα τείχη;',
        en: 'How did the gate survive when the walls came down?',
      },
      answers: [
        { el: 'Είπαν ότι χωρίς αυτήν θα μπαίνει κρύος αέρας', en: 'They said cold draughts would blow in without it' },
        { el: 'Ο βασιλιάς την αγόρασε και την κράτησε δική του', en: 'The king bought it and kept it for himself' },
        { el: 'Ήταν πολύ γερή και δεν μπόρεσαν να τη ρίξουν', en: 'It was too solid and nobody could knock it down' },
        { el: 'Την είχαν ξεχάσει και τη θυμήθηκαν αργότερα', en: 'It was forgotten and only remembered later on' },
      ],
      explanation: {
        el:
          'Ένας καθηγητής υποστήριξε στα σοβαρά ότι η πύλη προστατεύει την πόλη από τον ' +
          'βοριά. Το επιχείρημα ακούστηκε λογικό, και έτσι η πύλη έμεινε όρθια.',
        en:
          'A professor argued, quite seriously, that the gate shielded the town from the ' +
          'north wind. The argument sounded sensible, and so the gate was left standing.',
      },
    },
  },

  // ------------------------------------------------------------------ cloth hall
  {
    id: 'krakow-sukiennice',
    cityId: 'krakow',
    emoji: '🧵',
    category: 'landmark',
    difficulty: 1,

    name: { el: 'Sukiennice, τα Υφασματάδικα', en: 'The Cloth Hall' },
    tagline: {
      el: 'Ένα σκεπαστό παζάρι στη μέση της μεγαλύτερης πλατείας',
      en: 'A covered bazaar in the middle of the largest square',
    },
    story: {
      el:
        'Το 1257 η Κρακοβία σχεδιάστηκε από την αρχή: ίσιοι δρόμοι σε τετράγωνα και, στη ' +
        'μέση, μια πλατεία διακόσια μέτρα επί διακόσια. Είναι η μεγαλύτερη μεσαιωνική ' +
        'πλατεία της Ευρώπης, και δεν έμεινε άδεια. Στο κέντρο της υψώθηκε ένα μακρύ ' +
        'κτίριο, τα Sukiennice, όπου έμποροι πουλούσαν ύφασμα: μαλλί από τη Φλάνδρα, ' +
        'μετάξι από την Ανατολή, λινό από τα χωριά γύρω. Μετά από μια πυρκαγιά, γύρω στο ' +
        '1555, το ξανάχτισαν πιο όμορφο, και στη στέγη του σκάλισαν σειρές από πέτρινα ' +
        'πρόσωπα με ανοιχτό στόμα, τα μασκαρόν. Λένε ότι ο γλύπτης έδωσε σε μερικά τα ' +
        'χαρακτηριστικά ανθρώπων της πόλης που δεν συμπαθούσε. Σήμερα στους πάγκους ' +
        'πουλάνε κεχριμπάρι, τη χρυσαφένια πέτρα της Βαλτικής, και ξύλινα παιχνίδια. Και ' +
        'τέσσερα μέτρα κάτω από τα πόδια σου υπάρχει ακόμα ένα μουσείο, με τους ' +
        'μεσαιωνικούς δρόμους και τα παλιά μαγαζιά όπως τα άφησαν.',
      en:
        'In 1257 Kraków was planned from scratch: straight streets in blocks and, in the ' +
        'middle, a square two hundred metres by two hundred. It is the largest medieval ' +
        'square in Europe, and it was not left empty. A long building rose in the centre ' +
        'of it, the Sukiennice, where merchants sold cloth: wool from Flanders, silk from ' +
        'the east, linen from the villages round about. After a fire, around 1555, it was ' +
        'rebuilt more handsomely, and rows of stone faces with open mouths, called ' +
        'mascarons, were carved along the roof. The story goes that the sculptor gave some ' +
        'of them the features of townspeople he did not like. Today the stalls sell amber, ' +
        'the golden stone of the Baltic, and wooden toys. And four metres under your feet ' +
        'there is one more museum, with the medieval streets and old shops left as they ' +
        'were found.',
    },
    facts: [
      {
        el: 'Η πλατεία γύρω του έχει πλευρά περίπου 200 μέτρα, όσο δύο γήπεδα ποδοσφαίρου.',
        en: 'The square around it is about 200 metres a side, or two football pitches.',
      },
      {
        el: 'Τα πέτρινα πρόσωπα στη στέγη λέγονται μασκαρόν και σκαλίστηκαν τον 16ο αιώνα.',
        en: 'The stone faces on the roof are called mascarons and were carved in the 1500s.',
      },
      {
        el: 'Κάτω από την πλατεία, τέσσερα μέτρα βαθιά, υπάρχει υπόγειο μουσείο.',
        en: 'Under the square, four metres down, there is an underground museum.',
      },
    ],
    location: {
      lat: 50.06168,
      lng: 19.93738,
      anchor: 'centroid',
      confidence: 'C',
      sources: [{ kind: 'wikidata', ref: 'Q1072350', deltaM: 0 }],
      verifiedAt: '2026-09-14',
      note: 'Graded C on Wikidata alone: OpenStreetMap returned 504 and the item carries no Wikipedia coordinate. The square itself, Q770631, is 12 m away and is deliberately not a separate place — see the file header.',
      map: { x: 0.76, y: 0.333 },
      findIt: {
        el: 'Είναι το μακρύ κτίριο στη μέση της Rynek Główny. Το πέρασμα το διασχίζει από άκρη σε άκρη και μπαίνεις από όποια πλευρά θέλεις.',
        en: 'It is the long building in the middle of the Rynek Główny. The passage runs right through it, so you can go in from either end.',
      },
    },
    question: {
      q: {
        el: 'Τι πουλούσαν εδώ οι έμποροι πριν από εκατοντάδες χρόνια;',
        en: 'What did the merchants sell here hundreds of years ago?',
      },
      answers: [
        { el: 'Υφάσματα από τη Φλάνδρα και την Ανατολή', en: 'Cloth from Flanders and from the east' },
        { el: 'Φρέσκα ψάρια από τα ποτάμια της χώρας', en: 'Fresh fish from the rivers of the land' },
        { el: 'Παγωτά και γλυκά για τους περαστικούς', en: 'Ice creams and sweets for passers-by' },
        { el: 'Άλογα και άμαξες για τους ταξιδιώτες', en: 'Horses and carts for travellers passing' },
      ],
      explanation: {
        el:
          'Το όνομα Sukiennice σημαίνει «εκεί που πουλάνε ύφασμα». Τα παιχνίδια και το ' +
          'κεχριμπάρι ήρθαν πολύ αργότερα, όταν οι επισκέπτες αντικατέστησαν τους εμπόρους.',
        en:
          'The name Sukiennice means «the place where cloth is sold». The toys and the ' +
          'amber came much later, when visitors took the place of the cloth merchants.',
      },
    },
  },

  // ------------------------------------------------------------ st mary's basilica
  {
    id: 'krakow-kosciol-mariacki',
    cityId: 'krakow',
    emoji: '🎺',
    category: 'history',
    difficulty: 2,

    name: { el: 'Kościół Mariacki, ο ναός της Παναγίας', en: 'St Mary’s Basilica' },
    tagline: {
      el: 'Δύο άνισοι πύργοι και μια μελωδία που κόβεται',
      en: 'Two unequal towers and a tune that breaks off',
    },
    story: {
      el:
        'Οι έμποροι της Κρακοβίας έχτισαν αυτή την εκκλησία τον 14ο αιώνα και της έδωσαν ' +
        'δύο πύργους που δεν ταιριάζουν: ο ένας ξεπερνά τα ογδόντα μέτρα, ο άλλος σταματά ' +
        'στα εξήντα εννέα. Ένας θρύλος τους δίνει δύο αδέρφια που μάλωσαν, αλλά η αλήθεια ' +
        'είναι πιο απλή: ο ψηλός έγινε παρατηρητήριο και ο κοντός κράτησε τις καμπάνες. ' +
        'Κάθε ώρα, μέρα και νύχτα, ένας σαλπιγκτής ανεβαίνει στον ψηλό πύργο και παίζει ' +
        'το hejnał από τέσσερα παράθυρα, ένα προς κάθε σημείο του ορίζοντα. Η μελωδία ' +
        'σταματάει πάντα απότομα στη μέση. Ο θρύλος λέει ότι ένα βέλος έκοψε τον σαλπιγκτή ' +
        'που προειδοποιούσε την πόλη το 1241, και η πόλη κρατάει το σιωπηλό αυτό σημείο ' +
        'από τότε. Μέσα, ο γλύπτης Veit Stoss δούλεψε δώδεκα χρόνια για έναν ξύλινο βωμό ' +
        'με πόρτες που ανοίγουν, ψηλότερο από ένα τετραώροφο σπίτι, γεμάτο διακόσιες ' +
        'περίπου φιγούρες με αληθινά, κουρασμένα πρόσωπα.',
      en:
        'The merchants of Kraków built this church in the fourteenth century and gave it ' +
        'two towers that do not match: one passes eighty metres, the other stops at ' +
        'sixty-nine. A legend gives them two brothers who quarrelled, but the truth is ' +
        'plainer: the tall one became a lookout and the short one held the bells. Every ' +
        'hour, day and night, a trumpeter climbs the tall tower and plays the hejnał from ' +
        'four windows, one towards each corner of the sky. The tune always breaks off ' +
        'suddenly in the middle. The legend says an arrow cut down the trumpeter who was ' +
        'warning the city in 1241, and the city has kept that silent spot ever since. ' +
        'Inside, the sculptor Veit Stoss worked twelve years on a wooden altarpiece with ' +
        'doors that open, taller than a four-storey house, filled with some two hundred ' +
        'figures with real, tired faces.',
    },
    facts: [
      {
        el: 'Ο ψηλός πύργος ξεπερνά τα 80 μέτρα και ο κοντός φτάνει τα 69 μέτρα.',
        en: 'The tall tower passes 80 metres and the short one reaches 69 metres.',
      },
      {
        el: 'Το hejnał παίζεται κάθε ώρα προς τέσσερις κατευθύνσεις, μέρα και νύχτα.',
        en: 'The hejnał is played every hour in four directions, day and night.',
      },
      {
        el: 'Το πολωνικό ραδιόφωνο μεταδίδει το μεσημεριανό hejnał ζωντανά από το 1927.',
        en: 'Polish radio has broadcast the noon hejnał live since 1927.',
      },
      {
        el: 'Ο ξύλινος βωμός του Veit Stoss χρειάστηκε περίπου δώδεκα χρόνια δουλειάς.',
        en: 'The wooden altarpiece by Veit Stoss took about twelve years of work.',
      },
    ],
    location: {
      lat: 50.06167,
      lng: 19.93917,
      anchor: 'centroid',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q1143171', deltaM: 0 },
        { kind: 'osm', ref: 'way/26195267', deltaM: 20 },
        {
          kind: 'wikipedia',
          ref: 'Church of the Assumption of the Blessed Virgin Mary, Kraków',
          deltaM: 0,
        },
      ],
      verifiedAt: '2026-09-14',
      note: 'The city’s only A: three sources inside 20 m. It is also the only place here whose Overpass query answered on the first try.',
      map: { x: 0.787, y: 0.333 },
      findIt: {
        el: 'Είναι η εκκλησία με τους δύο άνισους πύργους στην ανατολική γωνία της πλατείας. Οι επισκέπτες μπαίνουν από το πλάι, όχι από την κεντρική πόρτα.',
        en: 'It is the church with two unequal towers on the east corner of the square. Visitors go in from the side, not through the main door.',
      },
    },
    question: {
      q: {
        el: 'Γιατί το hejnał σταματάει απότομα στη μέση;',
        en: 'Why does the hejnał break off in the middle?',
      },
      answers: [
        { el: 'Θυμίζει τον σαλπιγκτή που χτυπήθηκε το 1241', en: 'It recalls the trumpeter struck down in 1241' },
        { el: 'Τελειώνει η ανάσα του σαλπιγκτή στον πύργο', en: 'The trumpeter runs out of breath up the tower' },
        { el: 'Το ρολόι χτυπάει και σκεπάζει τη μελωδία', en: 'The clock strikes and drowns out the melody' },
        { el: 'Οι καμπάνες αρχίζουν και πρέπει να σωπάσει', en: 'The bells begin and he has to stop playing' },
      ],
      explanation: {
        el:
          'Ο θρύλος λέει ότι ένα βέλος τον σταμάτησε στη μέση της νότας ενώ προειδοποιούσε ' +
          'την πόλη. Η μελωδία κόβεται στο ίδιο ακριβώς σημείο μέχρι σήμερα.',
        en:
          'The legend says an arrow stopped him mid-note while he was warning the city. ' +
          'The tune still breaks off at exactly the same place today.',
      },
    },
  },

  // -------------------------------------------------------------- town hall tower
  {
    id: 'krakow-wieza-ratuszowa',
    cityId: 'krakow',
    emoji: '🗼',
    category: 'landmark',
    difficulty: 2,

    name: { el: 'Wieża ratuszowa, ο Πύργος του Δημαρχείου', en: 'The Town Hall Tower' },
    tagline: {
      el: 'Ένας πύργος που έμεινε χωρίς το κτίριό του',
      en: 'A tower left standing without its building',
    },
    story: {
      el:
        'Σε αυτή τη γωνία της πλατείας στεκόταν κάποτε το δημαρχείο της Κρακοβίας: ' +
        'αίθουσες συμβουλίου, ένα πανδοχείο, και στο υπόγειο κελιά. Το 1820 η πόλη το ' +
        'βρήκε παλιό, ετοιμόρροπο και στη μέση, και το γκρέμισε. Τον πύργο όμως δεν ' +
        'μπόρεσε να τον ρίξει κανείς: ήταν πολύ όμορφος, και έμεινε μόνος του στο ' +
        'πλακόστρωτο σαν να ξέχασε να φύγει μαζί με το σπίτι του. Έχει ύψος εβδομήντα ' +
        'μέτρα και χτίστηκε γύρω στο 1300 από τούβλα και πέτρα. Το 1703 μια δυνατή ' +
        'καταιγίδα τον ταρακούνησε και από τότε γέρνει πενήντα πέντε εκατοστά προς τη μία ' +
        'μεριά· πρέπει να κοιτάξεις προσεκτικά για να το δεις. Εκατόν δέκα σκαλιά ' +
        'ανεβάζουν σε μια θέα πάνω από όλη την πλατεία. Και λίγα βήματα πιο πέρα, από το ' +
        '2005, ένα τεράστιο μπρούντζινο κεφάλι με δεμένα μάτια κείτεται στο πλάι. Είναι ' +
        'κούφιο, και τα παιδιά μπαίνουν μέσα και κοιτούν έξω από τα μάτια του.',
      en:
        'On this corner of the square there once stood Kraków’s town hall: council rooms, ' +
        'an inn, and cells down in the cellar. In 1820 the city found it old, crumbling ' +
        'and in the way, and pulled it down. Nobody could bring themselves to fell the ' +
        'tower, though: it was too beautiful, and it was left alone on the paving as if it ' +
        'had forgotten to leave with its house. It is seventy metres high and was built ' +
        'around 1300 of brick and stone. In 1703 a violent storm shook it, and ever since ' +
        'it has leaned fifty-five centimetres to one side; you have to look carefully to ' +
        'catch it. A hundred and ten steps climb to a view over the whole square. And a ' +
        'few paces away, since 2005, an enormous bronze head with bandaged eyes lies on ' +
        'its side. It is hollow, and children climb inside and look out through its eyes.',
    },
    facts: [
      {
        el: 'Έχει ύψος 70 μέτρα και μέσα του 110 σκαλιά ανεβάζουν στη θέα.',
        en: 'It is 70 metres high, and 110 steps inside climb to the view.',
      },
      {
        el: 'Γέρνει 55 εκατοστά από μια καταιγίδα του 1703, αλλά στέκεται γερά.',
        en: 'It leans 55 centimetres after a storm in 1703, but it stands firm.',
      },
      {
        el: 'Το γλυπτό κεφάλι δίπλα του λέγεται Eros Bendato και είναι του 2005.',
        en: 'The sculpted head beside it is called Eros Bendato and dates from 2005.',
      },
    ],
    location: {
      lat: 50.06147,
      lng: 19.93647,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q1786361', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Town Hall Tower', deltaM: 6 },
      ],
      verifiedAt: '2026-09-14',
      note: 'OpenStreetMap did not answer in the resolver run (Overpass returned 429), so the grade rests on Wikidata and Wikipedia, which agree to 6 m.',
      map: { x: 0.746, y: 0.34 },
      findIt: {
        el: 'Στη δυτική πλευρά της πλατείας, εβδομήντα μέτρα από την άκρη των Sukiennice. Το μπρούντζινο κεφάλι είναι στο πλακόστρωτο δίπλα του.',
        en: 'On the west side of the square, seventy metres from the end of the Cloth Hall. The bronze head lies on the paving beside it.',
      },
    },
    question: {
      q: {
        el: 'Γιατί ο πύργος στέκεται μόνος του στην πλατεία;',
        en: 'Why does the tower stand alone on the square?',
      },
      answers: [
        { el: 'Το δημαρχείο γύρω του γκρεμίστηκε το 1820', en: 'The town hall around it came down in 1820' },
        { el: 'Χτίστηκε επίτηδες μακριά από τα άλλα κτίρια', en: 'It was built on purpose far from any building' },
        { el: 'Τα γύρω σπίτια κάηκαν σε μια μεγάλη πυρκαγιά', en: 'The houses round it burned in a great fire' },
        { el: 'Το ποτάμι πήρε τα υπόλοιπα σε μια πλημμύρα', en: 'A flood on the river carried the rest away' },
      ],
      explanation: {
        el:
          'Το δημαρχείο ήταν χαλασμένο και η πόλη το κατεδάφισε. Τον πύργο τον κράτησαν ' +
          'επειδή τον έβρισκαν πολύ όμορφο για να χαθεί μαζί με τα υπόλοιπα.',
        en:
          'The town hall was crumbling and the city demolished it. The tower was kept ' +
          'because people thought it far too beautiful to lose along with the rest.',
      },
    },
  },

  // --------------------------------------------------------------- collegium maius
  {
    id: 'krakow-collegium-maius',
    cityId: 'krakow',
    emoji: '🎓',
    category: 'museum',
    difficulty: 2,

    name: { el: 'Collegium Maius, το Μεγάλο Κολέγιο', en: 'The Collegium Maius' },
    tagline: {
      el: 'Η αυλή όπου ένας φοιτητής άρχισε να αμφιβάλλει',
      en: 'The courtyard where a student began to doubt',
    },
    story: {
      el:
        'Το 1364 ο βασιλιάς Kazimierz ο Μέγας ίδρυσε στην Κρακοβία το πρώτο πανεπιστήμιο ' +
        'της Πολωνίας. Μετά τον θάνατό του παραλίγο να σβήσει, και το έσωσε μια βασίλισσα ' +
        'που δεν το είδε ποτέ να ξαναλειτουργεί: η Jadwiga άφησε τα κοσμήματά της γι’ ' +
        'αυτό, και το 1400 ο βασιλιάς Władysław Jagiełło αγόρασε με αυτά αυτό ακριβώς το ' +
        'κτίριο, ώστε οι καθηγητές να ζουν και να διδάσκουν κάτω από την ίδια στέγη. Στην ' +
        'αυλή με τις καμάρες υπάρχει ένα πέτρινο πηγάδι, και ψηλά ένα ρολόι που πέντε ' +
        'φορές τη μέρα ανοίγει τις πορτούλες του και βγάζει μια παρέλαση από ξύλινες ' +
        'φιγούρες. Γύρω στο 1491 ήρθε εδώ ένας φοιτητής από το Toruń, ο Νικόλαος ' +
        'Κοπέρνικος. Εδώ έμαθε να μετράει τον ουρανό, και αργότερα κατέληξε σε κάτι που ' +
        'κανείς γύρω του δεν πίστευε: ότι η Γη δεν στέκεται ακίνητη στο κέντρο, αλλά ' +
        'γυρίζει γύρω από τον Ήλιο. Μέσα, το μουσείο φυλάει τα όργανα με τα οποία ' +
        'δούλευαν.',
      en:
        'In 1364 King Casimir the Great founded Poland’s first university in Kraków. ' +
        'After his death it almost died out, and it was rescued by a queen who never saw ' +
        'it working again: Jadwiga left her jewels for it, and in 1400 King Władysław ' +
        'Jagiełło used them to buy this very building, so that the professors could live ' +
        'and teach under one roof. In the arcaded courtyard there is a stone well, and ' +
        'high on the wall a clock that five times a day opens its little doors and sends ' +
        'out a parade of wooden figures. Around 1491 a student came here from the town of ' +
        'Toruń: Nicolaus Copernicus. Here he learned to measure the sky, and later he ' +
        'reached a conclusion nobody around him believed — that the Earth does not stand ' +
        'still at the centre but travels round the Sun. Inside, the museum keeps the very ' +
        'instruments they worked with.',
    },
    facts: [
      {
        el: 'Το πανεπιστήμιο ιδρύθηκε το 1364 και είναι το παλαιότερο της Πολωνίας.',
        en: 'The university was founded in 1364 and is the oldest in Poland.',
      },
      {
        el: 'Το κτίριο αγοράστηκε το 1400 με τα κοσμήματα που άφησε η βασίλισσα Jadwiga.',
        en: 'The building was bought in 1400 with the jewels Queen Jadwiga left behind.',
      },
      {
        el: 'Ο Κοπέρνικος ήρθε εδώ φοιτητής γύρω στο 1491, από την πόλη Toruń.',
        en: 'Copernicus arrived here as a student around 1491, from the town of Toruń.',
      },
    ],
    location: {
      lat: 50.06174,
      lng: 19.93376,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q919596', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Collegium Maius, Kraków', deltaM: 12 },
      ],
      verifiedAt: '2026-09-14',
      note: 'OpenStreetMap did not answer in the resolver run (Overpass returned 504), so the grade rests on Wikidata and Wikipedia, which agree to 12 m.',
      map: { x: 0.704, y: 0.331 },
      findIt: {
        el: 'Στη γωνία των οδών Jagiellońska και św. Anny, τέσσερα λεπτά δυτικά από την πλατεία. Η αυλή είναι ελεύθερη· το μουσείο θέλει εισιτήριο.',
        en: 'On the corner of Jagiellońska and św. Anny streets, four minutes west of the square. The courtyard is free; the museum needs a ticket.',
      },
    },
    question: {
      q: {
        el: 'Πώς ξαναζωντάνεψε το πανεπιστήμιο το 1400;',
        en: 'How was the university brought back to life in 1400?',
      },
      answers: [
        { el: 'Με τα κοσμήματα που άφησε η βασίλισσα Jadwiga', en: 'With the jewels Queen Jadwiga left behind her' },
        { el: 'Με τα χρήματα των εμπόρων της μεγάλης πλατείας', en: 'With money from the merchants on the great square' },
        { el: 'Με έναν φόρο στο αλάτι που έβγαινε από τη γη', en: 'With a tax on the salt that came out of the ground' },
        { el: 'Με δώρο ενός πλοιάρχου που γύρισε από μακριά', en: 'With a gift from a captain home from far away' },
      ],
      explanation: {
        el:
          'Η Jadwiga πέθανε νέα και άφησε τα κοσμήματά της στο πανεπιστήμιο. Με αυτά ο ' +
          'Jagiełło αγόρασε το κτίριο, γι’ αυτό το πανεπιστήμιο λέγεται σήμερα Jagiellonian.',
        en:
          'Jadwiga died young and left her jewels to the university. Jagiełło bought the ' +
          'building with them, which is why the university is called the Jagiellonian.',
      },
    },

    museum: {
      doorNote: {
        el: 'Η αυλή είναι ανοιχτή για όλους. Στο μουσείο μπαίνεις μόνο με ξεναγό και σε ώρα που κλείνεις από πριν.',
        en: 'The courtyard is open to everyone. The museum is seen only with a guide, at a time you book beforehand.',
      },
      rooms: [
        {
          id: 'krakow-collegium-maius-dziedziniec',
          emoji: '🏛️',
          name: { el: 'Η αυλή με τις καμάρες', en: 'The arcaded courtyard' },
          intro: {
            el:
              'Περνάς μια πόρτα από έναν ήσυχο δρόμο και ο θόρυβος σβήνει. Γύρω σου ' +
              'καμάρες από τούβλα κρατούν έναν διάδρομο στον πάνω όροφο, εκεί όπου οι ' +
              'καθηγητές περπατούσαν συζητώντας. Κάτω, πέτρες, ένα πηγάδι και ένα ρολόι ' +
              'που περιμένει την ώρα του για να ανοίξει.',
            en:
              'You step through a door off a quiet street and the noise stops. Brick ' +
              'arches around you hold up a gallery on the upper floor, where the ' +
              'professors used to walk while they argued. Below there are flagstones, a ' +
              'well, and a clock waiting for its hour to open.',
          },
          exhibits: [
            {
              id: 'krakow-collegium-maius-studnia',
              name: { el: 'Το πέτρινο πηγάδι', en: 'The stone well' },
              blurb: {
                el:
                  'Στη μέση της αυλής στέκεται ένα πηγάδι, και δεν είναι στολίδι. Πριν ' +
                  'υπάρξουν σωλήνες, το νερό ενός σπιτιού ερχόταν από κάτω, με κουβά και ' +
                  'σκοινί. Οι καθηγητές και οι φοιτητές που ζούσαν εδώ κατέβαιναν σε αυτό ' +
                  'κάθε πρωί. Ένα πηγάδι εξηγεί καλύτερα από κάθε κείμενο γιατί το κτίριο ' +
                  'είναι χτισμένο γύρω από μια αυλή: η αυλή δεν ήταν διακόσμηση, ήταν η ' +
                  'βρύση, το φως και ο αέρας όλου του σπιτιού μαζί.',
                en:
                  'A well stands in the middle of the courtyard, and it is not an ' +
                  'ornament. Before there were pipes, a house got its water from ' +
                  'underneath, with a bucket and a rope. The professors and students who ' +
                  'lived here came down to it every morning. A well explains better than ' +
                  'any label why the building is wrapped around a courtyard: the yard was ' +
                  'not decoration, it was the tap, the light and the air of the whole ' +
                  'house at once.',
              },
              question: {
                q: {
                  el: 'Γιατί χτίστηκε το κολέγιο γύρω από μια αυλή;',
                  en: 'Why was the college built around a courtyard?',
                },
                answers: [
                  { el: 'Η αυλή έδινε νερό, φως και αέρα στο κτίριο', en: 'The yard gave it water, light and fresh air' },
                  { el: 'Ο βασιλιάς είχε ζητήσει να μοιάζει με κάστρο', en: 'The king had asked it to look like a castle' },
                  { el: 'Ήθελαν χώρο για να παίζουν μπάλα οι φοιτητές', en: 'They wanted room for the students to play ball' },
                  { el: 'Το σχήμα προστάτευε τα βιβλία από τη βροχή', en: 'The shape kept the rain away from the books' },
                ],
                explanation: {
                  el: 'Το πηγάδι ήταν στη μέση γιατί το νερό έπρεπε να είναι κοντά σε όλους όσοι ζούσαν γύρω.',
                  en: 'The well sat in the middle because the water had to be near everyone living around it.',
                },
              },
            },
            {
              id: 'krakow-collegium-maius-zegar',
              name: { el: 'Το ρολόι με την παρέλαση', en: 'The clock with the parade' },
              blurb: {
                el:
                  'Πέντε φορές τη μέρα, στις εννιά, στις έντεκα, στη μία, στις τρεις και ' +
                  'στις πέντε, δύο πορτούλες ανοίγουν και ξύλινες φιγούρες βγαίνουν βόλτα ' +
                  'σε έναν κύκλο: βασιλιάδες, καθηγητές, ένας φοιτητής. Παίζει μαζί τους ' +
                  'το Gaudeamus igitur, το τραγούδι που τραγουδούν οι φοιτητές σε όλη την ' +
                  'Ευρώπη εδώ και αιώνες. Το ρολόι μοιάζει μεσαιωνικό και δεν είναι: ' +
                  'μπήκε στη θέση του γύρω στο 2000. Είναι το νεότερο πράγμα στην αυλή και ' +
                  'το πιο πολυφωτογραφημένο.',
                en:
                  'Five times a day — at nine, eleven, one, three and five — two small ' +
                  'doors open and wooden figures come out for a walk in a circle: kings, ' +
                  'professors, a student. Gaudeamus igitur plays along with them, the song ' +
                  'students have sung across Europe for centuries. The clock looks ' +
                  'medieval and is not: it was put up around the year 2000. It is the ' +
                  'newest thing in the courtyard and the most photographed.',
              },
              question: {
                q: {
                  el: 'Πόσο παλιό είναι στ’ αλήθεια το ρολόι της αυλής;',
                  en: 'How old is the courtyard clock really?',
                },
                answers: [
                  { el: 'Μπήκε γύρω στο 2000, είναι το νεότερο εδώ', en: 'It went up around 2000, the newest thing here' },
                  { el: 'Χτίστηκε μαζί με το κτίριο, γύρω στο 1400', en: 'It was made with the building, around the 1400s' },
                  { el: 'Το έφερε ο Κοπέρνικος όταν ήταν φοιτητής', en: 'Copernicus brought it when he was a student here' },
                  { el: 'Το χάρισε η βασίλισσα Jadwiga στους σοφούς', en: 'Queen Jadwiga gave it to the scholars as a gift' },
                ],
                explanation: {
                  el: 'Είναι φτιαγμένο να μοιάζει παλιό, αλλά τοποθετήθηκε γύρω στο 2000, εξακόσια χρόνια μετά το κτίριο.',
                  en: 'It is made to look old, but it was installed around 2000, six hundred years after the building.',
                },
              },
            },
            {
              id: 'krakow-collegium-maius-kruzganki',
              name: { el: 'Οι καμάρες του διαδρόμου', en: 'The arches of the gallery' },
              blurb: {
                el:
                  'Οι καμάρες γύρω από την αυλή δεν είναι στολίδι· είναι μηχανική. Κάθε ' +
                  'μία σπρώχνει το βάρος της στην επόμενη και όλες μαζί κρατούν τον ' +
                  'διάδρομο του πάνω ορόφου, από τον οποίο μπαίνεις σε κάθε δωμάτιο. Έτσι ' +
                  'το κτίριο δεν χρειάστηκε εσωτερικούς διαδρόμους: ο διάδρομος είναι έξω, ' +
                  'στον αέρα, και βλέπει την αυλή. Οι καθηγητές τον έλεγαν τόπο ' +
                  'περιπάτου, και εκεί συνέχιζαν το μάθημα περπατώντας όταν τελείωνε η ώρα.',
                en:
                  'The arches around the courtyard are not decoration; they are ' +
                  'engineering. Each one pushes its weight into the next, and together ' +
                  'they hold up the upper gallery, from which every room is entered. That ' +
                  'way the building needed no inside corridors: the corridor is outdoors, ' +
                  'in the air, looking into the yard. The professors called it a walking ' +
                  'place, and carried on the lesson out there on foot when the hour ended.',
              },
              question: {
                q: {
                  el: 'Γιατί δεν χρειάστηκε το κτίριο εσωτερικούς διαδρόμους;',
                  en: 'Why did the building need no corridors inside?',
                },
                answers: [
                  { el: 'Ο διάδρομος είναι έξω, πάνω από τις καμάρες', en: 'The corridor is outside, above the arches' },
                  { el: 'Κάθε δωμάτιο είχε δική του πόρτα στον δρόμο', en: 'Each room had its own door onto the street' },
                  { el: 'Οι καθηγητές έμπαιναν από σκάλες στους τοίχους', en: 'The teachers came in by stairs in the walls' },
                  { el: 'Το κτίριο είχε μόνο ένα δωμάτιο σε κάθε όροφο', en: 'The building had one room on every floor' },
                ],
                explanation: {
                  el: 'Ο διάδρομος του πάνω ορόφου είναι ανοιχτός προς την αυλή και οδηγεί σε κάθε πόρτα.',
                  en: 'The upper gallery is open to the courtyard and leads to every door in turn.',
                },
              },
            },
          ],
        },
        {
          id: 'krakow-collegium-maius-aula',
          emoji: '📚',
          name: { el: 'Η Αίθουσα και η Βιβλιοθήκη', en: 'The Hall and the Library' },
          intro: {
            el:
              'Ο πάνω όροφος είναι τα δωμάτια στα οποία ζούσε το πανεπιστήμιο: εκεί ' +
              'έτρωγαν, εκεί διάβαζαν, εκεί έδιναν όρκο οι καινούργιοι διδάκτορες. Είναι ' +
              'ξύλινα, χαμηλά και ζεστά, και μυρίζουν παλιό χαρτί. Κάποια από αυτά ' +
              'χρησιμοποιούνται ακόμα, με τον ίδιο ακριβώς τρόπο, τον 21ο αιώνα.',
            en:
              'The upper floor holds the rooms the university actually lived in: they ate ' +
              'here, read here, and here new doctors swore their oath. They are wooden, ' +
              'low and warm, and they smell of old paper. Some of them are still used, in ' +
              'exactly the same way, in the twenty-first century.',
          },
          exhibits: [
            {
              id: 'krakow-collegium-maius-stuba',
              name: { el: 'Η κοινή τραπεζαρία', en: 'The common dining room' },
              blurb: {
                el:
                  'Λέγεται Stuba Communis, το κοινό δωμάτιο, και ήταν η κουζίνα και η ' +
                  'τραπεζαρία όλων. Οι καθηγητές έτρωγαν εδώ μαζί κάθε μέρα, γιατί το ' +
                  'κολέγιο δεν ήταν μόνο σχολείο· ήταν και σπίτι, με κανόνες σαν ' +
                  'μοναστηριού. Στη μία άκρη υπάρχει μια μεγάλη σκάλα με σκαλισμένη ' +
                  'στέγη, και στους τοίχους πορτρέτα ανθρώπων που δίδαξαν εδώ. Το δωμάτιο ' +
                  'σου λέει κάτι που τα βιβλία ξεχνούν: ότι η επιστήμη γινόταν από ' +
                  'ανθρώπους που μοιράζονταν το ίδιο τραπέζι.',
                en:
                  'It is called the Stuba Communis, the common room, and it was everyone’s ' +
                  'kitchen and dining hall. The professors ate here together every day, ' +
                  'because the college was not only a school; it was a home, with rules ' +
                  'rather like a monastery’s. At one end there is a great staircase with a ' +
                  'carved canopy, and on the walls hang portraits of people who taught ' +
                  'here. The room says something books forget: that the science was done ' +
                  'by people who shared one table.',
              },
              question: {
                q: {
                  el: 'Τι μας δείχνει η κοινή τραπεζαρία για το κολέγιο;',
                  en: 'What does the common dining room show about the college?',
                },
                answers: [
                  { el: 'Ότι ήταν και σπίτι, όχι μόνο σχολείο', en: 'That it was a home as well as a school' },
                  { el: 'Ότι οι φοιτητές μαγείρευαν οι ίδιοι εκεί', en: 'That the students did their own cooking' },
                  { el: 'Ότι εκεί γίνονταν οι εξετάσεις των παιδιών', en: 'That the children sat their exams in it' },
                  { el: 'Ότι το κτίριο ήταν κάποτε ένα μοναστήρι', en: 'That the building was once a monastery' },
                ],
                explanation: {
                  el: 'Οι καθηγητές ζούσαν μέσα στο κτίριο και έτρωγαν μαζί κάθε μέρα, σαν μια οικογένεια με κανόνες.',
                  en: 'The professors lived in the building and ate together daily, like a family with rules.',
                },
              },
            },
            {
              id: 'krakow-collegium-maius-libraria',
              name: { el: 'Η Libraria και τα βιβλία της', en: 'The Libraria and its books' },
              blurb: {
                el:
                  'Η Libraria είναι η παλιά βιβλιοθήκη, ένα μακρύ δωμάτιο με ξύλινα ' +
                  'ράφια. Τότε ένα βιβλίο κόστιζε όσο ένα άλογο, γιατί γραφόταν στο χέρι ' +
                  'σε δέρμα ζώου, οπότε τα πιο πολύτιμα ήταν δεμένα με αλυσίδα στο ' +
                  'έπιπλο. Δεν το έκαναν από τσιγκουνιά αλλά από φόβο: ένα κλεμμένο βιβλίο ' +
                  'δεν αντικαθίστατο. Οι φοιτητές διάβαζαν όρθιοι, στο φως του παραθύρου, ' +
                  'και αντέγραφαν με το χέρι ό,τι ήθελαν να κρατήσουν.',
                en:
                  'The Libraria is the old library, a long room lined with wooden shelves. ' +
                  'A book then cost as much as a horse, because it was written by hand on ' +
                  'animal skin, so the most precious ones were chained to the furniture. ' +
                  'That was not meanness but fear: a stolen book could not be replaced. ' +
                  'Students read standing up, in the light from the window, and copied out ' +
                  'by hand whatever they wanted to keep.',
              },
              question: {
                q: {
                  el: 'Γιατί έδεναν κάποια βιβλία με αλυσίδα;',
                  en: 'Why were some of the books chained up?',
                },
                answers: [
                  { el: 'Ένα κλεμμένο βιβλίο δεν αντικαθίστατο ποτέ', en: 'A stolen book could never be replaced' },
                  { el: 'Οι αλυσίδες τα κρατούσαν ανοιχτά στη σελίδα', en: 'The chains held them open at the page' },
                  { el: 'Έτσι δεν τα έριχνε κάτω ο αέρας του δωματίου', en: 'So the draught could not blow them off' },
                  { el: 'Ήταν τιμωρία για όποιον τα διάβαζε πολύ αργά', en: 'It was a punishment for the slow readers' },
                ],
                explanation: {
                  el: 'Κάθε βιβλίο ήταν γραμμένο στο χέρι και κόστιζε όσο ένα άλογο, οπότε η αλυσίδα ήταν φθηνή ασφάλεια.',
                  en: 'Every book was written by hand and cost as much as a horse, so a chain was cheap insurance.',
                },
              },
            },
            {
              id: 'krakow-collegium-maius-berla',
              name: { el: 'Τα σκήπτρα των πρυτάνεων', en: 'The rectors’ sceptres' },
              blurb: {
                el:
                  'Δύο ασημένια ραβδιά, σκαλισμένα σαν μικροί πύργοι εκκλησίας, φυλάγονται ' +
                  'εδώ από τον 15ο αιώνα. Δεν είναι όπλα ούτε στολίδια: είναι απόδειξη. ' +
                  'Όποιος τα κρατούσε μιλούσε εκ μέρους όλου του πανεπιστημίου, όπως ένα ' +
                  'κλειδί δείχνει ποιος έχει το σπίτι. Ακόμα και σήμερα βγαίνουν από τη ' +
                  'βιτρίνα τους λίγες φορές τον χρόνο και προπορεύονται στις τελετές, ' +
                  'πεντακόσια χρόνια μετά την ημέρα που σφυρηλατήθηκαν.',
                en:
                  'Two silver staffs, carved like small church towers, have been kept here ' +
                  'since the fifteenth century. They are neither weapons nor ornaments: ' +
                  'they are proof. Whoever carried one spoke for the whole university, the ' +
                  'way a key shows who holds the house. Even today they leave their case a ' +
                  'few times a year and lead the processions, five hundred years after the ' +
                  'day they were hammered out.',
              },
              question: {
                q: {
                  el: 'Τι σήμαινε το να κρατάς ένα σκήπτρο του πανεπιστημίου;',
                  en: 'What did carrying a university sceptre mean?',
                },
                answers: [
                  { el: 'Ότι μιλάς εκ μέρους όλου του πανεπιστημίου', en: 'That you spoke for the whole university' },
                  { el: 'Ότι έχεις κερδίσει το βραβείο της χρονιάς', en: 'That you had won the prize of the year' },
                  { el: 'Ότι πληρώνεις τα δίδακτρα όλων των φτωχών', en: 'That you paid the fees of the poor students' },
                  { el: 'Ότι μπορείς να ανοίξεις κάθε πόρτα στην πόλη', en: 'That you could open any door in the city' },
                ],
                explanation: {
                  el: 'Το σκήπτρο ήταν σύμβολο εξουσίας: ο πρύτανης το κρατούσε και μιλούσε στο όνομα όλων.',
                  en: 'The sceptre was a badge of office: the rector held it and spoke in everyone’s name.',
                },
              },
            },
          ],
        },
        {
          id: 'krakow-collegium-maius-skarbiec',
          emoji: '🔭',
          name: { el: 'Η αίθουσα των οργάνων', en: 'The room of instruments' },
          intro: {
            el:
              'Εδώ τελειώνει η ξενάγηση, και εδώ γίνεται πιο παράξενη. Σε βιτρίνες ' +
              'βρίσκονται μπρούντζινοι δίσκοι με χαραγμένες γραμμές, μια υδρόγειος από ' +
              'χρυσωμένο μέταλλο και ένα βαρύ χρυσό αγαλματάκι που δεν έχει καμία σχέση ' +
              'με αστρονομία. Όλα τους είναι εργαλεία για να βλέπεις κάτι που δεν φαίνεται ' +
              'με γυμνό μάτι.',
            en:
              'This is where the tour ends, and where it gets stranger. In the cases lie ' +
              'bronze discs scratched with lines, a globe of gilded metal, and one heavy ' +
              'gold figurine with nothing at all to do with astronomy. Every one of them ' +
              'is a tool for seeing something the naked eye cannot.',
          },
          exhibits: [
            {
              id: 'krakow-collegium-maius-globus',
              name: { el: 'Ο Γιαγκελόνιος Γλόμπος', en: 'The Jagiellonian Globe' },
              blurb: {
                el:
                  'Είναι μια μικρή χρυσωμένη υδρόγειος, φτιαγμένη γύρω στο 1510, και ' +
                  'κρύβει μια πρόταση που σε παγώνει: «Αμερική, η νεοανακαλυφθείσα». Είναι ' +
                  'από τις πρώτες σφαίρες στον κόσμο που δείχνουν καθόλου την Αμερική. Και ' +
                  'τη δείχνει λάθος: την τοποθετεί πολύ πιο νότια απ’ όσο είναι, γιατί ' +
                  'κανείς δεν είχε ακόμα μετρήσει πού βρίσκεται. Είναι λοιπόν ταυτόχρονα ' +
                  'ένα λάθος και ένα θαύμα: ο κόσμος όπως τον φαντάζονταν τη στιγμή που ' +
                  'μεγάλωνε κάτω από τα πόδια τους.',
                en:
                  'It is a small gilded globe, made around 1510, and it hides a sentence ' +
                  'that stops you: «America, newly discovered». It is one of the earliest ' +
                  'globes in the world to show America at all. And it shows it wrongly: it ' +
                  'puts the continent far further south than it is, because nobody had yet ' +
                  'measured where it lay. So it is a mistake and a marvel at once — the ' +
                  'world as people imagined it at the moment it was growing under their ' +
                  'feet.',
              },
              question: {
                q: {
                  el: 'Τι κάνει τόσο σπουδαία αυτή τη μικρή σφαίρα;',
                  en: 'What makes this small globe so important?',
                },
                answers: [
                  { el: 'Είναι από τις πρώτες που δείχνουν την Αμερική', en: 'It is one of the first to show America at all' },
                  { el: 'Την κατασκεύασε ο ίδιος ο Νικόλαος Κοπέρνικος', en: 'Nicolaus Copernicus made it with his own hands' },
                  { el: 'Είναι η αρχαιότερη υδρόγειος σφαίρα στον κόσμο', en: 'It is the oldest globe of the world anywhere' },
                  { el: 'Δείχνει σωστά κάθε ήπειρο και κάθε ωκεανό', en: 'It gets every continent and ocean exactly right' },
                ],
                explanation: {
                  el: 'Γράφει πάνω της «Αμερική, η νεοανακαλυφθείσα», αν και την τοποθετεί σε λάθος θέση.',
                  en: 'It carries the words «America, newly discovered», although it puts it in the wrong place.',
                },
              },
            },
            {
              id: 'krakow-collegium-maius-astrolab',
              name: { el: 'Οι αστρολάβοι', en: 'The astrolabes' },
              blurb: {
                el:
                  'Ένας αστρολάβος είναι ένας μπρούντζινος δίσκος με κινούμενα μέρη: ένας ' +
                  'χάρτης του ουρανού που γυρίζει. Σηκώνεις τον δίσκο, σημαδεύεις ένα ' +
                  'αστέρι μέσα από δύο τρυπούλες, διαβάζεις τη γωνία και μαθαίνεις τι ώρα ' +
                  'είναι και πού βρίσκεσαι. Πριν από τα ρολόγια και τους χάρτες, αυτό ήταν ' +
                  'ό,τι πιο κοντινό υπήρχε σε υπολογιστή τσέπης. Στο μουσείο υπάρχουν ' +
                  'αστρολάβοι από τον 15ο αιώνα, δηλαδή όργανα σαν κι αυτά που είχε στα ' +
                  'χέρια του ο Κοπέρνικος όταν σπούδαζε εδώ.',
                en:
                  'An astrolabe is a bronze disc with moving parts: a map of the sky that ' +
                  'turns. You lift the disc, sight a star through two little holes, read ' +
                  'off the angle, and learn the time and where you are. Before clocks and ' +
                  'before charts, this was the closest thing to a pocket computer. The ' +
                  'museum holds astrolabes from the fifteenth century — instruments like ' +
                  'the ones Copernicus had in his hands while he studied here.',
              },
              question: {
                q: {
                  el: 'Τι μάθαινες σημαδεύοντας ένα αστέρι με αστρολάβο;',
                  en: 'What did sighting a star with an astrolabe tell you?',
                },
                answers: [
                  { el: 'Την ώρα και το πού βρίσκεσαι στη Γη', en: 'The time, and where you were on the Earth' },
                  { el: 'Πόσο μακριά είναι το αστέρι από εμάς', en: 'How far away from us that star really is' },
                  { el: 'Αν θα βρέξει τις επόμενες τρεις μέρες', en: 'Whether it would rain in the next three days' },
                  { el: 'Το βάρος του δίσκου που κρατάς στο χέρι', en: 'The weight of the disc you held in your hand' },
                ],
                explanation: {
                  el: 'Από τη γωνία ενός γνωστού αστεριού πάνω από τον ορίζοντα βγαίνει η ώρα και το γεωγραφικό πλάτος.',
                  en: 'The angle of a known star above the horizon gives you both the time and your latitude.',
                },
              },
            },
            {
              id: 'krakow-collegium-maius-oscar',
              name: { el: 'Το χρυσό αγαλματάκι του Wajda', en: 'Wajda’s golden statuette' },
              blurb: {
                el:
                  'Ανάμεσα σε αστρολάβους και υδρογείους στέκεται κάτι εντελώς άσχετο: ' +
                  'ένα χρυσό αγαλματάκι που κρατάει σπαθί, ένα βραβείο Όσκαρ. Το πήρε το ' +
                  '2000 ο Πολωνός σκηνοθέτης Andrzej Wajda για ολόκληρη τη δουλειά της ' +
                  'ζωής του, και αντί να το βάλει στο σαλόνι του το χάρισε στο ' +
                  'πανεπιστήμιο, όπου το βλέπουν όλοι. Είναι το πιο σύγχρονο αντικείμενο ' +
                  'στην αίθουσα και το πιο ανθρώπινο: κάποιος κέρδισε κάτι σπουδαίο και ' +
                  'αποφάσισε να μην το κρατήσει μόνος του.',
                en:
                  'Among astrolabes and globes stands something entirely out of place: a ' +
                  'golden figure holding a sword, an Academy Award. The Polish film ' +
                  'director Andrzej Wajda received it in 2000 for his life’s work, and ' +
                  'instead of putting it on a shelf at home he gave it to the university, ' +
                  'where everyone can see it. It is the most modern object in the room and ' +
                  'the most human: somebody won something great and decided not to keep it ' +
                  'to himself.',
              },
              question: {
                q: {
                  el: 'Γιατί βρίσκεται εδώ το Όσκαρ του Andrzej Wajda;',
                  en: 'Why is Andrzej Wajda’s Academy Award kept here?',
                },
                answers: [
                  { el: 'Το χάρισε ο ίδιος στο πανεπιστήμιο το 2000', en: 'He gave it to the university himself in 2000' },
                  { el: 'Το κέρδισε το πανεπιστήμιο για μια ταινία του', en: 'The university won it for a film of its own' },
                  { el: 'Βρέθηκε ξεχασμένο σε ένα συρτάρι της αυλής', en: 'It was found forgotten in a drawer in the yard' },
                  { el: 'Το αγόρασε το μουσείο σε μια δημοπρασία', en: 'The museum bought it at an auction some years ago' },
                ],
                explanation: {
                  el: 'Ο Wajda πήρε το τιμητικό Όσκαρ το 2000 και το δώρισε αμέσως στο πανεπιστήμιο της πόλης του.',
                  en: 'Wajda received the honorary award in 2000 and at once donated it to the university of his city.',
                },
              },
            },
          ],
        },
      ],
      riddles: [
        {
          id: 'krakow-collegium-maius-riddle-1',
          difficulty: 1,
          prompt: {
            el:
              'Είμαι στρογγυλός, χρυσωμένος και χωράω στα χέρια σου, αλλά με πάνω μου ' +
              'είναι ζωγραφισμένος ολόκληρος ο κόσμος. Έχω μια ήπειρο σε λάθος θέση, γιατί ' +
              'με έφτιαξαν ενώ την ανακάλυπταν ακόμα.',
            en:
              'I am round, gilded and small enough to hold, and yet the whole world is ' +
              'drawn on me. I carry one continent in the wrong place, because I was made ' +
              'while people were still finding it.',
          },
          hint: {
            el: 'Ψάξε το πιο μικρό πράγμα στην αίθουσα που δείχνει το πιο μεγάλο.',
            en: 'Look for the smallest thing in the room that shows the largest one.',
          },
          answerExhibitId: 'krakow-collegium-maius-globus',
        },
        {
          id: 'krakow-collegium-maius-riddle-2',
          difficulty: 2,
          prompt: {
            el:
              'Πέντε φορές τη μέρα ανοίγω δύο πορτούλες και στέλνω έξω μια μικρή παρέλαση ' +
              'με μουσική. Μοιάζω με τα πιο παλιά πράγματα εδώ, αλλά είμαι το πιο ' +
              'καινούργιο απ’ όλα.',
            en:
              'Five times a day I open two little doors and send out a small parade with ' +
              'music. I look like the oldest thing here, and I am in fact the newest of ' +
              'them all.',
          },
          hint: {
            el: 'Δεν είμαι μέσα σε βιτρίνα· είμαι ψηλά σε έναν τοίχο, στο ύπαιθρο.',
            en: 'I am not in a case; I am high up on a wall, out in the open air.',
          },
          answerExhibitId: 'krakow-collegium-maius-zegar',
        },
        {
          id: 'krakow-collegium-maius-riddle-3',
          difficulty: 3,
          prompt: {
            el:
              'Είμαι χρυσός, κρατάω σπαθί και δεν έχω καμία σχέση με τα αστέρια γύρω μου. ' +
              'Κάποιος με κέρδισε για μια ζωή δουλειάς και μετά αποφάσισε να μη με κρατήσει ' +
              'στο σπίτι του.',
            en:
              'I am golden, I hold a sword, and I have nothing to do with the stars around ' +
              'me. Somebody won me for a lifetime of work and then decided not to keep me ' +
              'at home.',
          },
          hint: {
            el: 'Το πιο νέο αντικείμενο στη βιτρίνα, και έρχεται από τον κινηματογράφο.',
            en: 'The youngest object in the case, and it comes from the cinema.',
          },
          answerExhibitId: 'krakow-collegium-maius-oscar',
        },
      ],
    },
  },
  // ------------------------------------------------------- saints peter and paul
  {
    id: 'krakow-kosciol-piotra-pawla',
    cityId: 'krakow',
    emoji: '🌀',
    category: 'science',
    difficulty: 3,

    name: { el: 'Kościół św. Piotra i Pawła, οι Άγιοι Πέτρος και Παύλος', en: 'The Church of Saints Peter and Paul' },
    tagline: {
      el: 'Ένα βαρίδι κρέμεται εδώ και αποδεικνύει ότι γυρίζουμε',
      en: 'A weight hangs here and proves that we are turning',
    },
    story: {
      el:
        'Στην οδό Grodzka, τη μεγάλη ίσια οδό προς το κάστρο, στέκεται μια εκκλησία που ' +
        'δεν μοιάζει με τις γειτονικές της. Χτίστηκε από το 1597 ως το 1619 και ήταν η ' +
        'πρώτη στην Κρακοβία σε ένα καινούργιο, θεατρικό στιλ που λέγεται μπαρόκ: μεγάλος ' +
        'τρούλος, καμπύλες, στολίδια παντού. Μπροστά της, πάνω σε ένα κάγκελο, στέκονται ' +
        'δώδεκα πέτρινοι απόστολοι, ο καθένας με ένα αντικείμενο που τον προδίδει — ο ' +
        'Πέτρος κρατάει κλειδιά. Αυτά που βλέπεις σήμερα είναι αντίγραφα, γιατί τη ' +
        'μαλακή πέτρα των πρωτότυπων την έφαγε η βροχή τριακοσίων χρόνων. Το πιο ' +
        'παράξενο όμως είναι μέσα. Από τον τρούλο κρέμεται ένα βαρίδι σε ένα σύρμα ' +
        'σαράντα έξι μέτρων. Όταν το αφήσουν να κουνηθεί, φαίνεται σιγά σιγά να αλλάζει ' +
        'κατεύθυνση. Δεν αλλάζει. Το εκκρεμές κουνιέται σταθερά και το πάτωμα, δηλαδή η ' +
        'Γη, στρίβει από κάτω του. Ο Léon Foucault το έδειξε έτσι το 1851.',
      en:
        'On Grodzka street, the long straight road to the castle, stands a church that ' +
        'looks nothing like its neighbours. It was built between 1597 and 1619 and was ' +
        'the first in Kraków in a new, theatrical style called baroque: a big dome, ' +
        'curves, decoration everywhere. In front of it, on a railing, stand twelve stone ' +
        'apostles, each with an object that gives him away — Peter is holding keys. The ' +
        'ones you see are copies, because three hundred years of rain ate the soft stone ' +
        'of the originals. The strangest thing, though, is inside. A weight hangs from ' +
        'the dome on a wire forty-six metres long. When it is set swinging, it seems to ' +
        'change direction little by little. It does not. The pendulum swings steadily and ' +
        'the floor, which is to say the Earth, turns underneath it. Léon Foucault showed ' +
        'this in 1851.',
    },
    facts: [
      {
        el: 'Χτίστηκε από το 1597 ως το 1619 και ήταν η πρώτη εκκλησία μπαρόκ της πόλης.',
        en: 'Built between 1597 and 1619, it was the city’s first baroque church.',
      },
      {
        el: 'Δώδεκα πέτρινοι απόστολοι στέκονται στο κάγκελο· είναι αντίγραφα των παλιών.',
        en: 'Twelve stone apostles stand on the railing; they are copies of the old ones.',
      },
      {
        el: 'Το εκκρεμές κρέμεται από σύρμα 46 μέτρων και κουνιέται σε ειδικές επιδείξεις.',
        en: 'The pendulum hangs on a 46-metre wire and swings at special demonstrations.',
      },
    ],
    location: {
      lat: 50.05694,
      lng: 19.93889,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q338657', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Church of Saints Apostles Peter and Paul, Kraków', deltaM: 9 },
      ],
      verifiedAt: '2026-09-14',
      note: 'OpenStreetMap did not answer in the resolver run (Overpass returned 504), so the grade rests on Wikidata and Wikipedia, which agree to 9 m.',
      map: { x: 0.783, y: 0.502 },
      findIt: {
        el: 'Στην οδό Grodzka, οκτώ λεπτά νότια από την πλατεία. Θα την αναγνωρίσεις από τα δώδεκα αγάλματα πάνω στο κάγκελο του πεζοδρομίου.',
        en: 'On Grodzka street, eight minutes south of the square. You will know it by the twelve statues along the railing at the pavement.',
      },
    },
    question: {
      q: {
        el: 'Τι κάνει το εκκρεμές να φαίνεται ότι αλλάζει κατεύθυνση;',
        en: 'What makes the pendulum look as if it changes direction?',
      },
      answers: [
        { el: 'Γυρίζει η Γη από κάτω του, όχι το εκκρεμές', en: 'The Earth turns beneath it, not the weight' },
        { el: 'Ο αέρας του τρούλου το σπρώχνει στο πλάι', en: 'Draughts in the dome push it to the side' },
        { el: 'Το σύρμα του στρίβει αργά κοντά στη στέγη', en: 'The wire slowly twists up near the roof' },
        { el: 'Το βαρίδι είναι μαγνήτης και τραβιέται λίγο', en: 'The weight is a magnet and gets pulled a bit' },
      ],
      explanation: {
        el:
          'Το εκκρεμές κουνιέται πάντα στο ίδιο επίπεδο. Αυτό που στρίβει είναι το πάτωμα, ' +
          'μαζί με την εκκλησία, την πόλη και ολόκληρο τον πλανήτη.',
        en:
          'The pendulum always swings in the same plane. What turns is the floor, along ' +
          'with the church, the city and the whole planet.',
      },
    },
  },

  // ---------------------------------------------------------------- wawel castle
  {
    id: 'krakow-wawel-zamek',
    cityId: 'krakow',
    emoji: '👑',
    category: 'history',
    difficulty: 2,

    name: { el: 'Zamek na Wawelu, το κάστρο του Βάβελ', en: 'Wawel Royal Castle' },
    tagline: {
      el: 'Μια αυλή με τρεις ορόφους καμάρες πάνω σε βράχο',
      en: 'A courtyard of three storeys of arches on a rock',
    },
    story: {
      el:
        'Ο λόφος Wawel είναι ένας βράχος ασβεστόλιθου δίπλα στο ποτάμι, και πάνω του ' +
        'κάθονταν οι ηγεμόνες της Πολωνίας για εκατοντάδες χρόνια. Το κάστρο που βλέπεις ' +
        'σήμερα το έφτιαξε ο βασιλιάς Zygmunt ο Πρεσβύτερος στις αρχές του 16ου αιώνα, ' +
        'και δεν το έκανε μόνος: κάλεσε Ιταλούς αρχιτέκτονες και χτίστες, οι οποίοι ' +
        'έφεραν μαζί τους έναν καινούργιο τρόπο να χτίζεις. Η αυλή τους έχει τρεις ' +
        'ορόφους από καμάρες, η μία πάνω στην άλλη, με τις κολόνες του τελευταίου ορόφου ' +
        'αφύσικα ψηλές. Δεν είναι λάθος: τις τράβηξαν επίτηδες, ώστε να φαίνεται η αυλή ' +
        'ακόμα πιο ψηλή απ’ όσο είναι. Μέσα στα δωμάτια κρέμονται τεράστιες ταπισερί ' +
        'υφασμένες στη Φλάνδρα τον 16ο αιώνα, με ζώα, δέντρα και ιστορίες της Βίβλου. Ο ' +
        'βασιλιάς παρήγγειλε πολλές εκατοντάδες, ταξίδεψαν και κρύφτηκαν σε δύο πολέμους, ' +
        'και όσες γύρισαν πίσω κρέμονται πάλι στους τοίχους τους.',
      en:
        'Wawel hill is a limestone rock beside the river, and the rulers of Poland sat on ' +
        'top of it for hundreds of years. The castle you see now was made by King ' +
        'Sigismund the Old at the start of the sixteenth century, and he did not do it ' +
        'alone: he called in Italian architects and masons, who brought a new way of ' +
        'building with them. Their courtyard has three storeys of arches, one above the ' +
        'other, and the columns of the top storey are oddly tall. That is not a mistake: ' +
        'they were stretched on purpose, so the courtyard would look even higher than it ' +
        'is. Inside the rooms hang enormous tapestries woven in Flanders in the 1500s, ' +
        'full of animals, trees and stories from the Bible. The king ordered many ' +
        'hundreds of them; they travelled and hid through two wars, and those that came ' +
        'back hang on their walls again.',
    },
    facts: [
      {
        el: 'Η αυλή έχει τρεις ορόφους από καμάρες και χτίστηκε στις αρχές του 16ου αιώνα.',
        en: 'The courtyard has three storeys of arches and dates from the early 1500s.',
      },
      {
        el: 'Οι κολόνες του τελευταίου ορόφου είναι επίτηδες πιο ψηλές, για το μάτι.',
        en: 'The columns of the top storey are deliberately taller, to fool the eye.',
      },
      {
        el: 'Οι ταπισερί του κάστρου υφάνθηκαν στη Φλάνδρα και κρύφτηκαν σε δύο πολέμους.',
        en: 'The castle tapestries were woven in Flanders and hidden through two wars.',
      },
    ],
    location: {
      lat: 50.0544,
      lng: 19.9366,
      anchor: 'area',
      confidence: 'C',
      sources: [
        { kind: 'wikidata', ref: 'Q18820', deltaM: 0 },
        { kind: 'osm', ref: 'way/785550415', deltaM: 88 },
        { kind: 'wikipedia', ref: 'Wawel Castle', deltaM: 146 },
      ],
      verifiedAt: '2026-09-14',
      note: 'Three sources, none of them within 30 m of another, so the resolver graded it C. That is what an area looks like: the castle covers a whole hilltop, and each source picked a different part of it. Nothing here disagrees — the widest gap, 146 m, is well inside the 500 m an area is allowed.',
      map: { x: 0.748, y: 0.593 },
      findIt: {
        el: 'Ανεβαίνεις τη πλακόστρωτη ράμπα στο τέλος της οδού Grodzka. Η μεγάλη αυλή με τις καμάρες είναι πίσω από τον καθεδρικό ναό.',
        en: 'You climb the cobbled ramp at the end of Grodzka street. The big arcaded courtyard is behind the cathedral.',
      },
    },
    question: {
      q: {
        el: 'Γιατί οι κολόνες του τελευταίου ορόφου είναι τόσο ψηλές;',
        en: 'Why are the columns of the top storey so very tall?',
      },
      answers: [
        { el: 'Για να δείχνει η αυλή πιο ψηλή απ’ όσο είναι', en: 'To make the courtyard look higher than it is' },
        { el: 'Για να χωράνε άλογα κάτω από τις καμάρες', en: 'To let horses walk in under the arches below' },
        { el: 'Για να μη σπάσουν από το βάρος της στέγης', en: 'To stop them breaking under the roof’s weight' },
        { el: 'Για να ακούγεται καλύτερα η μουσική στην αυλή', en: 'To make music sound better in the courtyard' },
      ],
      explanation: {
        el:
          'Είναι κόλπο του ματιού. Ο τελευταίος όροφος τραβήχτηκε ψηλά επίτηδες, ώστε η ' +
          'αυλή να φαίνεται πιο επιβλητική σε όποιον στέκεται κάτω.',
        en:
          'It is a trick of the eye. The top storey was stretched on purpose so the ' +
          'courtyard would look grander to anyone standing down below.',
      },
    },
  },

  // ------------------------------------------------------------- wawel cathedral
  {
    id: 'krakow-katedra-wawelska',
    cityId: 'krakow',
    emoji: '🔔',
    category: 'landmark',
    difficulty: 2,

    name: { el: 'Katedra na Wawelu, ο καθεδρικός του Βάβελ', en: 'Wawel Cathedral' },
    tagline: {
      el: 'Μια καμπάνα που θέλει δώδεκα ανθρώπους για να ηχήσει',
      en: 'A bell that needs twelve people to make it ring',
    },
    story: {
      el:
        'Δίπλα στο κάστρο στέκεται ο ναός όπου στέφονταν οι βασιλιάδες της Πολωνίας, από ' +
        'το 1320 ως το 1734, και όπου αναπαύονται ακόμη. Έχει τρεις πύργους, και στον ' +
        'έναν κρέμεται από το 1520 η καμπάνα Zygmunt. Είναι τόσο βαριά που κανένα σκοινί ' +
        'δεν την κουνάει: χρειάζονται δώδεκα άνθρωποι, που τραβούν μαζί με ρυθμό, και ' +
        'ηχεί μόνο τις πιο σπουδαίες μέρες της χώρας. Όταν ηχήσει, την ακούει όλη η ' +
        'πόλη και ξέρει ότι κάτι μεγάλο συνέβη. Δίπλα λάμπει ο χρυσός τρούλος ενός ' +
        'παρεκκλησιού που έχτισαν Ιταλοί τεχνίτες τον 16ο αιώνα. Και στην είσοδο, ψηλά ' +
        'στα αριστερά της πόρτας, κρέμονται σε αλυσίδα τρία τεράστια κόκαλα. Οι παλιοί ' +
        'έλεγαν ότι είναι του δράκου και ότι όσο κρέμονται εκεί η πόλη είναι ασφαλής. ' +
        'Είναι στην πραγματικότητα ενός μαμούθ, ενός ρινόκερου και μιας φάλαινας — και ' +
        'είναι, με τον τρόπο τους, ακόμα πιο εντυπωσιακά.',
      en:
        'Beside the castle stands the church where the kings of Poland were crowned, from ' +
        '1320 until 1734, and where they still lie. It has three towers, and in one of ' +
        'them the Sigismund Bell has hung since 1520. It is so heavy that no rope will ' +
        'swing it: twelve people are needed, pulling together in rhythm, and it sounds ' +
        'only on the country’s greatest days. When it does sound, the whole city hears it ' +
        'and knows that something large has happened. Beside it shines the golden dome of ' +
        'a chapel built by Italian craftsmen in the 1500s. And at the entrance, high to ' +
        'the left of the door, three enormous bones hang on a chain. People long ago said ' +
        'they were the dragon’s and that the city is safe while they hang there. They ' +
        'really come from a mammoth, a rhinoceros and a whale — which, in their own way, ' +
        'is even more astonishing.',
    },
    facts: [
      {
        el: 'Οι βασιλιάδες της Πολωνίας στέφονταν εδώ από το 1320 ως το 1734.',
        en: 'The kings of Poland were crowned here from 1320 until 1734.',
      },
      {
        el: 'Η καμπάνα Zygmunt κρέμεται από το 1520 και τη σηκώνουν δώδεκα άνθρωποι.',
        en: 'The Sigismund Bell has hung since 1520 and twelve people swing it.',
      },
      {
        el: 'Τα «κόκαλα του δράκου» στην είσοδο είναι μαμούθ, ρινόκερου και φάλαινας.',
        en: 'The «dragon bones» at the door come from a mammoth, a rhino and a whale.',
      },
    ],
    location: {
      lat: 50.05464,
      lng: 19.93542,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q638519', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Wawel Cathedral', deltaM: 5 },
      ],
      verifiedAt: '2026-09-14',
      note: 'OpenStreetMap did not answer in the resolver run (Overpass returned 429), so the grade rests on Wikidata and Wikipedia, which agree to 5 m.',
      map: { x: 0.729, y: 0.584 },
      findIt: {
        el: 'Είναι το πρώτο κτίριο που συναντάς μόλις περάσεις την πύλη του λόφου. Τα κόκαλα κρέμονται ψηλά αριστερά, πάνω από την είσοδο.',
        en: 'It is the first building you meet once you pass the gate on the hill. The bones hang high on the left, above the door.',
      },
    },
    question: {
      q: {
        el: 'Από πού είναι στ’ αλήθεια τα κόκαλα στην είσοδο;',
        en: 'Where do the bones at the entrance really come from?',
      },
      answers: [
        { el: 'Από μαμούθ, ρινόκερο και φάλαινα', en: 'From a mammoth, a rhino and a whale' },
        { el: 'Από τον δράκο που ζούσε στη σπηλιά', en: 'From the dragon that lived in the cave' },
        { el: 'Από τα άλογα των πρώτων βασιλιάδων', en: 'From the horses of the earliest kings' },
        { el: 'Από έναν ελέφαντα, δώρο σε βασιλιά', en: 'From an elephant given to a king once' },
      ],
      explanation: {
        el:
          'Είναι κόκαλα ζώων της παγετώδους εποχής και μιας φάλαινας. Οι παλιοί δεν τα ' +
          'αναγνώριζαν, οπότε τα εξήγησαν με τον δράκο, που ήταν η καλύτερη ιδέα που είχαν.',
        en:
          'They are bones of ice-age animals and of a whale. People long ago could not ' +
          'name them, so they explained them with the dragon, the best idea they had.',
      },
    },
  },

  // ----------------------------------------------------------------- dragon's den
  {
    id: 'krakow-smocza-jama',
    cityId: 'krakow',
    emoji: '🐉',
    category: 'nature',
    difficulty: 1,

    name: { el: 'Smocza Jama, η Σπηλιά του Δράκου', en: 'The Dragon’s Den' },
    tagline: {
      el: 'Μια αληθινή σπηλιά μέσα στον βράχο, με έναν δράκο έξω',
      en: 'A real cave inside the rock, with a dragon outside',
    },
    story: {
      el:
        'Ο βράχος του Wawel είναι ασβεστόλιθος, και το νερό της βροχής διαλύει αργά τον ' +
        'ασβεστόλιθο. Εκατομμύρια χρόνια τέτοιας δουλειάς άνοιξαν μέσα στον λόφο ένα ' +
        'δίκτυο περασμάτων περίπου διακοσίων εβδομήντα μέτρων. Ένα κομμάτι του είναι ' +
        'ανοιχτό στους επισκέπτες: κατεβαίνεις σκάλες μέσα από τον βράχο, περπατάς σε ' +
        'κρύα, υγρά δωμάτια από πέτρα και βγαίνεις κάτω, στην όχθη του ποταμού. Και εκεί ' +
        'σε περιμένει ο δράκος. Ο θρύλος λέει ότι εδώ ζούσε ένα τέρας που έτρωγε τα ζώα ' +
        'της πόλης, και ότι κανένας ιππότης δεν το νίκησε. Το νίκησε ένας φτωχός ' +
        'τσαγκάρης, ο Skuba, που γέμισε ένα πρόβατο με θειάφι και το άφησε στην είσοδο. ' +
        'Ο δράκος το κατάπιε, η κοιλιά του πήρε φωτιά, και ήπιε τόσο νερό από τη Wisła ' +
        'που έσκασε. Ο μπρούντζινος δράκος έξω από τη σπηλιά είναι έργο του 1972 και ' +
        'βγάζει αληθινή φωτιά κάθε λίγα λεπτά.',
      en:
        'The rock of Wawel is limestone, and rainwater slowly dissolves limestone. ' +
        'Millions of years of that work opened a network of passages some two hundred and ' +
        'seventy metres long inside the hill. One stretch of it is open to visitors: you ' +
        'go down steps through the rock, walk through cold, damp rooms of stone, and come ' +
        'out at the bottom on the river bank. And there the dragon is waiting. The legend ' +
        'says a monster lived here that ate the town’s animals, and that no knight ever ' +
        'beat it. It was beaten by a poor shoemaker, Skuba, who stuffed a sheep with ' +
        'sulphur and left it at the entrance. The dragon swallowed it, its belly caught ' +
        'fire, and it drank so much water from the Wisła that it burst. The bronze dragon ' +
        'outside the cave was made in 1972 and breathes real fire every few minutes.',
    },
    facts: [
      {
        el: 'Η σπηλιά άνοιξε μόνη της: το νερό της βροχής διαλύει τον ασβεστόλιθο.',
        en: 'The cave opened by itself: rainwater dissolves the limestone rock.',
      },
      {
        el: 'Τα περάσματα μέσα στον λόφο φτάνουν περίπου τα 270 μέτρα συνολικά.',
        en: 'The passages inside the hill run to about 270 metres altogether.',
      },
      {
        el: 'Ο μπρούντζινος δράκος στήθηκε το 1972 και βγάζει φωτιά με φυσικό αέριο.',
        en: 'The bronze dragon was put up in 1972 and breathes fire on natural gas.',
      },
    ],
    location: {
      lat: 50.05306,
      lng: 19.93333,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q836876', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Smocza Jama', deltaM: 1 },
      ],
      verifiedAt: '2026-09-14',
      note: 'OpenStreetMap did not answer in the resolver run (Overpass returned 504), so the grade rests on Wikidata and Wikipedia, which agree to 1 m. The bronze dragon stands at the cave’s lower exit and has no Wikidata item of its own, so it is not a separate place.',
      map: { x: 0.697, y: 0.641 },
      findIt: {
        el: 'Η είσοδος είναι πάνω στον λόφο, σε έναν πύργο κοντά στη δυτική άκρη. Βγαίνεις κάτω στην όχθη, ακριβώς δίπλα στον μπρούντζινο δράκο.',
        en: 'The way in is up on the hill, in a tower near its western edge. You come out at the river bank, right beside the bronze dragon.',
      },
    },
    question: {
      q: {
        el: 'Πώς φτιάχτηκε η σπηλιά μέσα στον λόφο;',
        en: 'How was the cave inside the hill made?',
      },
      answers: [
        { el: 'Το νερό διέλυσε αργά τον ασβεστόλιθο', en: 'Water slowly dissolved the limestone' },
        { el: 'Οι βασιλιάδες την έσκαψαν για κρυψώνα', en: 'Kings dug it out as a hiding place' },
        { el: 'Ένας σεισμός άνοιξε τον βράχο στα δύο', en: 'An earthquake split the rock in two' },
        { el: 'Ο δράκος την άνοιξε με τα νύχια του', en: 'The dragon opened it with its claws' },
      ],
      explanation: {
        el:
          'Η βροχή είναι ελαφρώς όξινη και τρώει τον ασβεστόλιθο σταγόνα σταγόνα. Έτσι ' +
          'φτιάχνονται σχεδόν όλες οι σπηλιές αυτού του είδους στον κόσμο.',
        en:
          'Rain is slightly acid and eats limestone drop by drop. That is how almost ' +
          'every cave of this kind in the world is made.',
      },
    },
  },

  // ----------------------------------------------------------- bernatek footbridge
  {
    id: 'krakow-kladka-bernatka',
    cityId: 'krakow',
    emoji: '🤸',
    category: 'art',
    difficulty: 1,

    name: { el: 'Kładka Bernatka, η πεζογέφυρα του Bernatek', en: 'The Bernatek Footbridge' },
    tagline: {
      el: 'Ακροβάτες κρέμονται στον αέρα πάνω από το ποτάμι',
      en: 'Acrobats hang in the air above the river here',
    },
    story: {
      el:
        'Αυτή η γέφυρα άνοιξε το 2010 και δεν περνάει από πάνω της κανένα αυτοκίνητο: ' +
        'μόνο πόδια και ποδήλατα, σε δύο χωριστές λωρίδες. Έχει μήκος περίπου εκατόν ' +
        'σαράντα πέντε μέτρα και ενώνει δύο γειτονιές που ήταν κάποτε δύο διαφορετικές ' +
        'πόλεις, το Kazimierz και το Podgórze. Πήρε το όνομά της από έναν μοναχό, τον ' +
        'πατέρα Laetus Bernatek, που έχτισε εδώ κοντά νοσοκομείο για τους φτωχούς. Το ' +
        'πιο περίεργο πράγμα όμως δεν είναι η γέφυρα αλλά ό,τι κρέμεται από πάνω της. Ο ' +
        'γλύπτης Jerzy Kędziora τοποθέτησε εννέα ακροβάτες σε τεντωμένα σύρματα: άλλοι ' +
        'κάνουν ποδήλατο στον αέρα, άλλοι κρέμονται ανάποδα, άλλοι στέκονται στο ένα ' +
        'πόδι. Το κάθε γλυπτό ισορροπεί σε ένα μοναδικό σημείο και είναι υπολογισμένο ' +
        'ώστε ο άνεμος να το κουνάει χωρίς ποτέ να το ρίχνει. Κάτω κυλάει η Wisła, το ' +
        'μεγαλύτερο ποτάμι της Πολωνίας.',
      en:
        'This bridge opened in 2010 and no car ever crosses it: only feet and bicycles, ' +
        'in two separate lanes. It is about a hundred and forty-five metres long and ' +
        'joins two neighbourhoods that were once two different towns, Kazimierz and ' +
        'Podgórze. It is named after a monk, Father Laetus Bernatek, who built a hospital ' +
        'for the poor nearby. The strangest thing here, though, is not the bridge but ' +
        'what hangs above it. The sculptor Jerzy Kędziora set nine acrobats on taut ' +
        'wires: some pedal bicycles in mid-air, some hang upside down, some stand on one ' +
        'leg. Each sculpture balances on a single point and is calculated so that the ' +
        'wind rocks it without ever tipping it over. Below runs the Wisła, the longest ' +
        'river in Poland.',
    },
    facts: [
      {
        el: 'Άνοιξε το 2010, έχει μήκος περίπου 145 μέτρα και δεν περνούν αυτοκίνητα.',
        en: 'It opened in 2010, runs about 145 metres, and carries no cars at all.',
      },
      {
        el: 'Εννέα γλυπτά ακροβατών ισορροπούν σε σύρματα πάνω από το κατάστρωμα.',
        en: 'Nine acrobat sculptures balance on wires above the walkway.',
      },
      {
        el: 'Κάθε ακροβάτης στηρίζεται σε ένα μόνο σημείο και κουνιέται με τον άνεμο.',
        en: 'Each acrobat rests on a single point and moves with the wind.',
      },
    ],
    location: {
      lat: 50.0465,
      lng: 19.9476,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q11752074', deltaM: 0 },
        { kind: 'osm', ref: 'way/242682567', deltaM: 10 },
      ],
      verifiedAt: '2026-09-14',
      note: 'Wikipedia carries no coordinate for this item, so the grade rests on Wikidata and OpenStreetMap, which agree to 10 m.',
      map: { x: 0.917, y: 0.875 },
      findIt: {
        el: 'Κατεβαίνεις στα βουλεβάρτα του ποταμού στην άκρη του Kazimierz. Είναι η μόνη γέφυρα εδώ χωρίς δρόμο για αυτοκίνητα.',
        en: 'Go down to the river boulevards at the edge of Kazimierz. It is the only bridge here with no road for cars on it.',
      },
    },
    question: {
      q: {
        el: 'Γιατί δεν πέφτουν οι ακροβάτες όταν φυσάει;',
        en: 'Why do the acrobats not fall when the wind blows?',
      },
      answers: [
        { el: 'Ισορροπούν σε ένα σημείο και δεν πέφτουν', en: 'They are calculated to sway without tipping over' },
        { el: 'Είναι βιδωμένοι γερά σε μια σιδερένια δοκό', en: 'They are bolted tightly onto a strong iron beam' },
        { el: 'Τα σύρματα τεντώνονται αυτόματα με μοτέρ', en: 'The wires are tightened by motors on their own' },
        { el: 'Είναι από αφρώδες υλικό και δεν έχουν βάρος', en: 'They are made of foam and have no weight at all' },
      ],
      explanation: {
        el:
          'Κάθε γλυπτό ισορροπεί σε ένα σημείο, με το βάρος μοιρασμένο έτσι ώστε ο άνεμος ' +
          'να το γυρίζει και να το ξαναφέρνει, όπως ένας αληθινός σχοινοβάτης.',
        en:
          'Each sculpture balances on one point, its weight arranged so the wind turns it ' +
          'and brings it back, exactly the way a real tightrope walker works.',
      },
    },
  },

  // ------------------------------------------------------------------- kazimierz
  {
    id: 'krakow-stara-synagoga',
    cityId: 'krakow',
    emoji: '🕍',
    category: 'history',
    difficulty: 3,

    name: { el: 'Stara Synagoga, η Παλιά Συναγωγή', en: 'The Old Synagogue' },
    tagline: {
      el: 'Το παλαιότερο εβραϊκό σπίτι προσευχής της Πολωνίας',
      en: 'The oldest Jewish house of prayer left in Poland',
    },
    story: {
      el:
        'Το 1335 ο βασιλιάς Kazimierz ο Μέγας ίδρυσε δίπλα στην Κρακοβία μια ολόκληρη ' +
        'καινούργια πόλη και της έδωσε το όνομά του: Kazimierz. Είχε δικά της τείχη, ' +
        'δικό της δημαρχείο, δική της αγορά, και έμεινε ξεχωριστή πόλη μέχρι το 1800. ' +
        'Από τα τέλη του 15ου αιώνα εδώ ζούσε η εβραϊκή κοινότητα της Κρακοβίας, και η ' +
        'γειτονιά γέμισε συναγωγές, σχολεία, φούρνους και εργαστήρια. Αυτό το χαμηλό ' +
        'πέτρινο κτίριο στην άκρη της φαρδιάς οδού Szeroka χτίστηκε τον 15ο αιώνα και ' +
        'είναι η παλαιότερη συναγωγή που σώζεται σε ολόκληρη την Πολωνία. Η κοινότητα ' +
        'έζησε εδώ πάνω από τετρακόσια χρόνια και καταστράφηκε στον Δεύτερο Παγκόσμιο ' +
        'Πόλεμο. Το κτίριο επισκευάστηκε και σήμερα είναι μουσείο, ώστε να μπορεί κανείς ' +
        'να δει πώς ζούσαν εδώ οι άνθρωποι. Κάθε καλοκαίρι η Szeroka γεμίζει ξανά με ' +
        'μουσική και χορό στο Φεστιβάλ Εβραϊκού Πολιτισμού.',
      en:
        'In 1335 King Casimir the Great founded a whole new town beside Kraków and gave ' +
        'it his own name: Kazimierz. It had its own walls, its own town hall, its own ' +
        'market, and it stayed a separate town until 1800. From the end of the fifteenth ' +
        'century the Jewish community of Kraków lived here, and the neighbourhood filled ' +
        'with synagogues, schools, bakeries and workshops. This low stone building at the ' +
        'end of the wide Szeroka street was built in the fifteenth century and is the ' +
        'oldest synagogue still standing in all of Poland. The community lived here for ' +
        'more than four hundred years and was destroyed in the Second World War. The ' +
        'building was repaired and is a museum today, so that anyone can come and see how ' +
        'people lived here. Every summer Szeroka fills with music and dancing again, for ' +
        'the Jewish Culture Festival.',
    },
    facts: [
      {
        el: 'Το Kazimierz ιδρύθηκε το 1335 και ήταν ξεχωριστή πόλη ως το 1800.',
        en: 'Kazimierz was founded in 1335 and was a separate town until 1800.',
      },
      {
        el: 'Η συναγωγή χτίστηκε τον 15ο αιώνα και είναι η παλαιότερη στην Πολωνία.',
        en: 'The synagogue was built in the 1400s and is the oldest in Poland.',
      },
      {
        el: 'Το Φεστιβάλ Εβραϊκού Πολιτισμού γίνεται κάθε καλοκαίρι από το 1988.',
        en: 'The Jewish Culture Festival has been held each summer since 1988.',
      },
    ],
    location: {
      lat: 50.05139,
      lng: 19.94857,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q3502453', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Old Synagogue (Kraków)', deltaM: 2 },
      ],
      verifiedAt: '2026-09-14',
      note: 'OpenStreetMap did not answer in the resolver run (Overpass returned 429), so the grade rests on Wikidata and Wikipedia, which agree to 2 m. This place stands in for the Explorer’s Szeroka street: a street has no coordinate, and the synagogue at its end has one.',
      map: { x: 0.932, y: 0.7 },
      findIt: {
        el: 'Στη νότια άκρη της οδού Szeroka, που είναι τόσο φαρδιά που μοιάζει με πλατεία. Είναι το χαμηλό πέτρινο κτίριο με τους αντηρίδες.',
        en: 'At the south end of Szeroka street, which is so wide it looks like a square. It is the low stone building with the buttresses.',
      },
    },
    question: {
      q: {
        el: 'Τι ήταν το Kazimierz πριν από το 1800;',
        en: 'What was Kazimierz before the year 1800?',
      },
      answers: [
        { el: 'Ξεχωριστή πόλη με δικό της δημαρχείο', en: 'A separate town with its own town hall' },
        { el: 'Ένα χωράφι έξω από τα τείχη της πόλης', en: 'A field outside the walls of the city' },
        { el: 'Το λιμάνι όπου έδεναν τα ποταμόπλοια', en: 'The port where the river boats tied up' },
        { el: 'Ένα δάσος όπου κυνηγούσαν οι βασιλιάδες', en: 'A forest where the kings went hunting' },
      ],
      explanation: {
        el:
          'Ήταν αληθινή πόλη, με τείχη, αγορά και δημαρχείο, από το 1335 ως το 1800. Μόνο ' +
          'τότε ενώθηκε με την Κρακοβία και έγινε γειτονιά της.',
        en:
          'It was a real town, with walls, a market and a town hall, from 1335 to 1800. ' +
          'Only then was it joined to Kraków and became a neighbourhood of it.',
      },
    },
  },

  // ----------------------------------------------------------- czartoryski museum
  {
    id: 'krakow-muzeum-czartoryskich',
    cityId: 'krakow',
    emoji: '🖼️',
    category: 'museum',
    difficulty: 3,

    name: { el: 'Muzeum Czartoryskich, το Μουσείο Τσαρτορίσκι', en: 'The Czartoryski Museum' },
    tagline: {
      el: 'Το πρώτο μουσείο της Πολωνίας, φτιαγμένο από μια πριγκίπισσα',
      en: 'Poland’s first museum, made by one princess',
    },
    story: {
      el:
        'Το 1801 η πριγκίπισσα Izabela Czartoryska έκανε κάτι που τότε δεν έκανε σχεδόν ' +
        'κανείς: μάζεψε πίνακες, όπλα, γράμματα και περίεργα αντικείμενα και τα άνοιξε ' +
        'στον κόσμο. Πάνω στην πόρτα έγραψε τρεις λέξεις: «Το παρελθόν στο μέλλον». Ήταν ' +
        'το πρώτο μουσείο της Πολωνίας, και δεν έμεινε στη θέση του: η συλλογή ταξίδεψε, ' +
        'κρύφτηκε και έφτασε στην Κρακοβία το 1876. Μέσα της βρίσκεται ένας από τους ' +
        'πιο διάσημους πίνακες της Ευρώπης, η «Κυρία με την ερμίνα» του Λεονάρντο ντα ' +
        'Βίντσι, μια νεαρή γυναίκα που κρατάει ένα λευκό ζωάκι και γυρίζει το κεφάλι σαν ' +
        'να την φώναξε κάποιος. Υπάρχει επίσης ένα τεράστιο τουρκικό αντίσκηνο και ' +
        'πανοπλίες με φτερά. Και υπάρχει μια κενή κορνίζα. Κρεμάει άδεια επίτηδες, για ' +
        'έναν πίνακα του Ραφαήλ που χάθηκε στον πόλεμο και δεν βρέθηκε ποτέ.',
      en:
        'In 1801 Princess Izabela Czartoryska did something almost nobody did then: she ' +
        'gathered paintings, weapons, letters and curious objects and opened them to the ' +
        'public. Over the door she wrote three words: «The past to the future». It was ' +
        'the first museum in Poland, and it did not stay where it began: the collection ' +
        'travelled, hid, and reached Kraków in 1876. Inside it hangs one of the most ' +
        'famous paintings in Europe, the Lady with an Ermine by Leonardo da Vinci, a ' +
        'young woman holding a small white animal and turning her head as if somebody had ' +
        'called her. There is also an enormous Turkish tent, and armour with wings. And ' +
        'there is one empty frame. It hangs empty on purpose, for a painting by Raphael ' +
        'that was taken in the war and has never been found.',
    },
    facts: [
      {
        el: 'Ιδρύθηκε το 1801 από την Izabela Czartoryska και είναι το πρώτο μουσείο της χώρας.',
        en: 'Founded in 1801 by Izabela Czartoryska, it is the country’s first museum.',
      },
      {
        el: 'Η συλλογή μεταφέρθηκε στην Κρακοβία το 1876, μετά από χρόνια ταξιδιού.',
        en: 'The collection came to Kraków in 1876, after years of travelling.',
      },
      {
        el: 'Φυλάει την «Κυρία με την ερμίνα», έναν από τους λίγους πίνακες του Λεονάρντο.',
        en: 'It keeps the Lady with an Ermine, one of Leonardo’s few surviving paintings.',
      },
    ],
    location: {
      lat: 50.06464,
      lng: 19.93997,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q1450630', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Czartoryski Museum', deltaM: 3 },
      ],
      verifiedAt: '2026-09-14',
      note: 'OpenStreetMap did not answer in the resolver run (Overpass returned 429), so the grade rests on Wikidata and Wikipedia, which agree to 3 m. Wikidata has no separate item for the building; Q1450630 carries P31 architectural structure and its point is on the museum on ul. Pijarska, 102 m from St Florian’s Gate, which is where the museum stands.',
      map: { x: 0.8, y: 0.227 },
      findIt: {
        el: 'Στην οδό Pijarska, εκατό μέτρα δυτικά από την Brama Floriańska. Μια σκεπαστή αερογέφυρα ενώνει τα δύο κτίριά του πάνω από τον δρόμο.',
        en: 'On Pijarska street, a hundred metres west of St Florian’s Gate. A covered bridge joins its two buildings over the road.',
      },
    },
    question: {
      q: {
        el: 'Γιατί κρέμεται μια άδεια κορνίζα μέσα στο μουσείο;',
        en: 'Why does an empty frame hang inside the museum?',
      },
      answers: [
        { el: 'Ο πίνακας χάθηκε στον πόλεμο και λείπει ακόμη', en: 'The painting was lost in the war and is still gone' },
        { el: 'Ο ζωγράφος πέθανε πριν προλάβει να τον αρχίσει', en: 'The painter died before he could begin the work' },
        { el: 'Ο πίνακας καθαρίζεται και θα γυρίσει την άνοιξη', en: 'The picture is being cleaned and returns in spring' },
        { el: 'Η κορνίζα είναι η ίδια το έργο ενός καλλιτέχνη', en: 'The frame is itself the work of a modern artist' },
      ],
      explanation: {
        el:
          'Ο πίνακας του Ραφαήλ αρπάχτηκε στον Δεύτερο Παγκόσμιο Πόλεμο και δεν έχει ' +
          'βρεθεί. Η άδεια κορνίζα είναι ο τρόπος του μουσείου να μην τον ξεχάσει.',
        en:
          'The Raphael was seized in the Second World War and has never turned up. The ' +
          'empty frame is the museum’s way of refusing to forget it.',
      },
    },

    museum: {
      doorNote: {
        el: 'Η «Κυρία με την ερμίνα» έχει δικό της σκοτεινό δωμάτιο. Άφησε τα μάτια σου να συνηθίσουν πριν την κοιτάξεις.',
        en: 'The Lady with an Ermine has a dark room of her own. Let your eyes adjust before you look at her.',
      },
      rooms: [
        {
          id: 'krakow-czartoryskich-dama',
          emoji: '🎨',
          name: { el: 'Το δωμάτιο της Κυρίας', en: 'The room of the Lady' },
          intro: {
            el:
              'Τρία έργα σε ένα σκοτεινό δωμάτιο, και το ένα από αυτά είναι μια άδεια ' +
              'κορνίζα. Το φως είναι χαμηλό επίτηδες: το παλιό χρώμα ξεθωριάζει αν το ' +
              'φωτίσεις δυνατά, οπότε τα μουσεία θυσιάζουν λίγη ορατότητα για να ζήσουν ' +
              'τα έργα μερικούς αιώνες ακόμα.',
            en:
              'Three works in one dark room, and one of them is an empty frame. The light ' +
              'is low on purpose: old paint fades if you shine a lamp on it, so museums ' +
              'trade a little visibility to give the pictures a few more centuries.',
          },
          exhibits: [
            {
              id: 'krakow-czartoryskich-dama-z-gronostajem',
              name: { el: 'Η Κυρία με την ερμίνα', en: 'The Lady with an Ermine' },
              blurb: {
                el:
                  'Ο Λεονάρντο ντα Βίντσι τη ζωγράφισε γύρω στο 1490 στο Μιλάνο. Είναι η ' +
                  'Cecilia Gallerani, δεκαέξι περίπου ετών, και κρατάει ένα λευκό ζώο με ' +
                  'μακρύ σώμα, μια ερμίνα. Το κεφάλι της γυρίζει προς τα δεξιά, σαν ' +
                  'κάποιος να μπήκε στο δωμάτιο και να τη φώναξε — και το ζώο γυρίζει ' +
                  'μαζί της, την ίδια στιγμή. Πριν από τον Λεονάρντο, τα πορτρέτα ήταν ' +
                  'ακίνητα προφίλ. Αυτό είναι μια κίνηση που σταμάτησε στη μέση, και γι’ ' +
                  'αυτό μοιάζει ζωντανό πεντακόσια χρόνια μετά.',
                en:
                  'Leonardo da Vinci painted her around 1490 in Milan. She is Cecilia ' +
                  'Gallerani, about sixteen years old, and she holds a long-bodied white ' +
                  'animal, an ermine. Her head turns to the right, as if someone had come ' +
                  'into the room and called her — and the animal turns with her, at the ' +
                  'same instant. Before Leonardo, portraits were still profiles. This one ' +
                  'is a movement stopped halfway, which is why it still looks alive five ' +
                  'hundred years later.',
              },
              question: {
                q: {
                  el: 'Τι κάνει αυτό το πορτρέτο διαφορετικό από τα παλαιότερα;',
                  en: 'What makes this portrait different from older ones?',
                },
                answers: [
                  { el: 'Πιάνει μια κίνηση, δεν είναι ακίνητο προφίλ', en: 'It catches a movement, not a still profile' },
                  { el: 'Είναι ο πρώτος πίνακας που έγινε με λάδια', en: 'It was the first picture ever made in oils' },
                  { el: 'Είναι ο μεγαλύτερος πίνακας του Λεονάρντο', en: 'It is the largest painting Leonardo ever made' },
                  { el: 'Δείχνει μια βασίλισσα αντί για απλή κοπέλα', en: 'It shows a queen instead of an ordinary girl' },
                ],
                explanation: {
                  el: 'Η κοπέλα και το ζώο γυρίζουν την ίδια στιγμή προς κάτι έξω από τον πίνακα.',
                  en: 'The girl and the animal turn at the same moment towards something outside the picture.',
                },
              },
            },
            {
              id: 'krakow-czartoryskich-samarytanin',
              name: { el: 'Το τοπίο του Ρέμπραντ', en: 'Rembrandt’s landscape' },
              blurb: {
                el:
                  'Ο Ολλανδός Rembrandt το ζωγράφισε το 1638. Λέγεται «Τοπίο με τον καλό ' +
                  'Σαμαρείτη», αλλά ο Σαμαρείτης είναι μια μικρή φιγούρα που μετά βίας ' +
                  'ξεχωρίζει. Ό,τι κυριαρχεί είναι ο ουρανός: μια σκοτεινή καταιγίδα από ' +
                  'τη μία μεριά και φως που ανοίγει από την άλλη, με τα δέντρα ανάμεσα. Ο ' +
                  'Rembrandt ζωγράφισε ελάχιστα τοπία, οπότε αυτό είναι σπάνιο. Κοίτα το ' +
                  'από απόσταση: το βλέμμα σου πάει πρώτα στο φως και μόνο μετά βρίσκει ' +
                  'τους ανθρώπους.',
                en:
                  'The Dutch painter Rembrandt made this in 1638. It is called Landscape ' +
                  'with the Good Samaritan, but the Samaritan is a small figure you can ' +
                  'barely pick out. What fills the picture is the sky: a dark storm on one ' +
                  'side and light breaking on the other, with the trees between them. ' +
                  'Rembrandt painted very few landscapes, so this one is rare. Look at it ' +
                  'from a distance: your eye goes to the light first and only afterwards ' +
                  'finds the people.',
              },
              question: {
                q: {
                  el: 'Τι κυριαρχεί σε αυτόν τον πίνακα του Ρέμπραντ;',
                  en: 'What fills most of this painting by Rembrandt?',
                },
                answers: [
                  { el: 'Ο ουρανός, με καταιγίδα και φως μαζί', en: 'The sky, with a storm and light in it' },
                  { el: 'Ο Σαμαρείτης, ζωγραφισμένος πολύ μεγάλος', en: 'The Samaritan, painted very large indeed' },
                  { el: 'Ένα πλήθος ανθρώπων γύρω από τον δρόμο', en: 'A crowd of people all around the roadway' },
                  { el: 'Ένα κάστρο που γεμίζει όλο το φόντο', en: 'A castle that fills the whole background' },
                ],
                explanation: {
                  el: 'Οι άνθρωποι είναι μικροί. Το θέμα είναι ο καιρός και το φως που περνάει μέσα του.',
                  en: 'The people are tiny. The subject is the weather, and the light coming through it.',
                },
              },
            },
            {
              id: 'krakow-czartoryskich-pusta-rama',
              name: { el: 'Η άδεια κορνίζα', en: 'The empty frame' },
              blurb: {
                el:
                  'Σε αυτόν τον τοίχο κρεμόταν το «Πορτρέτο ενός νέου» του Ραφαήλ. Το ' +
                  '1939 αρπάχτηκε από τη συλλογή και από τότε κανείς δεν ξέρει πού είναι. ' +
                  'Είναι ίσως ο πιο διάσημος χαμένος πίνακας του κόσμου. Το μουσείο θα ' +
                  'μπορούσε να κρεμάσει κάτι άλλο στη θέση του. Δεν το κάνει: αφήνει την ' +
                  'κορνίζα άδεια, ώστε ο επισκέπτης να δει το κενό με τα μάτια του. Ένα ' +
                  'άδειο τετράγωνο σε έναν τοίχο λέει την ιστορία πιο δυνατά από κάθε ' +
                  'πινακίδα.',
                en:
                  'On this wall hung Raphael’s Portrait of a Young Man. In 1939 it was ' +
                  'taken from the collection, and since then nobody knows where it is. It ' +
                  'is perhaps the most famous missing painting in the world. The museum ' +
                  'could hang something else in its place. It does not: it leaves the ' +
                  'frame empty, so that visitors see the gap with their own eyes. An empty ' +
                  'square on a wall tells the story more loudly than any label could.',
              },
              question: {
                q: {
                  el: 'Γιατί το μουσείο δεν βάζει άλλον πίνακα στην κορνίζα;',
                  en: 'Why does the museum not put another picture in the frame?',
                },
                answers: [
                  { el: 'Για να βλέπει ο επισκέπτης το κενό που έμεινε', en: 'So that visitors can see the gap that is left' },
                  { el: 'Γιατί η κορνίζα είναι πολύ εύθραυστη για έργο', en: 'Because the frame is too fragile to hold a work' },
                  { el: 'Γιατί κάθε άλλο έργο θα φαινόταν πολύ μικρό', en: 'Because any other work would look too small' },
                  { el: 'Γιατί το σχήμα της δεν ταιριάζει σε κανένα έργο', en: 'Because its shape does not suit any other work' },
                ],
                explanation: {
                  el: 'Η άδεια κορνίζα είναι μια υπενθύμιση: ο πίνακας λείπει και το μουσείο τον περιμένει ακόμα.',
                  en: 'The empty frame is a reminder: the painting is missing, and the museum is still waiting.',
                },
              },
            },
          ],
        },
        {
          id: 'krakow-czartoryskich-skarby',
          emoji: '⚔️',
          name: { el: 'Η αίθουσα των θησαυρών', en: 'The room of treasures' },
          intro: {
            el:
              'Η Izabela δεν μάζευε μόνο πίνακες. Μάζευε ό,τι μπορούσε να αφηγηθεί μια ' +
              'ιστορία: όπλα, υφάσματα, αγγεία τριών χιλιάδων ετών. Αυτή η αίθουσα είναι ' +
              'η πιο άτακτη του μουσείου, και είναι η πιο κοντινή σε αυτό που φανταζόταν ' +
              'εκείνη όταν το ξεκίνησε.',
            en:
              'Izabela did not only collect pictures. She collected anything that could ' +
              'tell a story: weapons, textiles, pots three thousand years old. This is the ' +
              'untidiest room in the museum, and it is the closest to what she had in ' +
              'mind when she began it.',
          },
          exhibits: [
            {
              id: 'krakow-czartoryskich-namiot',
              name: { el: 'Το τουρκικό αντίσκηνο', en: 'The Turkish tent' },
              blurb: {
                el:
                  'Δεν είναι σκηνή για κάμπινγκ. Είναι ένα κινητό δωμάτιο από ύφασμα, ' +
                  'κεντημένο μέσα έξω με λουλούδια και καμάρες, ώστε ένας διοικητής να ' +
                  'κοιμάται σε πολυτέλεια στη μέση ενός χωραφιού. Ήρθε στην Πολωνία μετά ' +
                  'τη μεγάλη μάχη έξω από τη Βιέννη το 1683, όταν ο στρατός βρήκε ' +
                  'εγκαταλελειμμένο το τουρκικό στρατόπεδο. Τέτοιες σκηνές είναι σπάνιες ' +
                  'σήμερα: το ύφασμα δεν αντέχει τους αιώνες όπως η πέτρα, και ελάχιστες ' +
                  'σώθηκαν οπουδήποτε στον κόσμο.',
                en:
                  'This is not a camping tent. It is a portable room made of cloth, ' +
                  'embroidered inside and out with flowers and arches, so that a commander ' +
                  'could sleep in luxury in the middle of a field. It came to Poland after ' +
                  'the great battle outside Vienna in 1683, when the army found the ' +
                  'Turkish camp abandoned. Tents like this are rare now: cloth does not ' +
                  'survive the centuries the way stone does, and very few are left ' +
                  'anywhere in the world.',
              },
              question: {
                q: {
                  el: 'Γιατί σώζονται τόσο λίγα τέτοια αντίσκηνα;',
                  en: 'Why are so few tents like this one left today?',
                },
                answers: [
                  { el: 'Το ύφασμα δεν αντέχει τους αιώνες σαν πέτρα', en: 'Cloth does not last the centuries as stone does' },
                  { el: 'Χτίζονταν πάντα μία φορά και μετά καίγονταν', en: 'They were always burned after being used once' },
                  { el: 'Ήταν απαγορευμένο να τα βγάλει κανείς έξω', en: 'It was forbidden to take them out of the country' },
                  { el: 'Τα έφτιαχναν μόνο για δύο ή τρεις ημέρες', en: 'They were only ever made to last two or three days' },
                ],
                explanation: {
                  el: 'Το ύφασμα σαπίζει, τρώγεται από έντομα και ξεθωριάζει. Ένα υφασμάτινο αντικείμενο τριών αιώνων είναι σπάνιο.',
                  en: 'Cloth rots, is eaten by insects and fades. A textile object three centuries old is a rare thing.',
                },
              },
            },
            {
              id: 'krakow-czartoryskich-zbroja',
              name: { el: 'Η πανοπλία με τα φτερά', en: 'The armour with wings' },
              blurb: {
                el:
                  'Οι Πολωνοί ιππείς που λέγονταν ουσάροι φορούσαν στην πλάτη τους ' +
                  'σκελετούς από ξύλο γεμάτους φτερά αετού. Κανείς δεν ξέρει με βεβαιότητα ' +
                  'γιατί. Άλλοι λένε ότι έκαναν θόρυβο στον καλπασμό και τρόμαζαν τα ' +
                  'άλογα των αντιπάλων, άλλοι ότι έκαναν τον ιππέα να φαίνεται τεράστιος, ' +
                  'άλλοι ότι ήταν απλώς στολή για τις παρελάσεις. Η πανοπλία από μπροστά ' +
                  'είναι ατσάλι δουλεμένο με το σφυρί, βαριά όσο ένα μεγάλο σακίδιο ' +
                  'σχολείου γεμάτο βιβλία.',
                en:
                  'The Polish riders called hussars wore wooden frames on their backs, ' +
                  'filled with eagle feathers. Nobody knows for certain why. Some say they ' +
                  'made a noise at the gallop and frightened the enemy’s horses, some that ' +
                  'they made the rider look enormous, some that they were simply parade ' +
                  'dress. The armour at the front is hammered steel, about as heavy as a ' +
                  'large school bag packed full of books.',
              },
              question: {
                q: {
                  el: 'Τι ξέρουμε σίγουρα για τα φτερά των ουσάρων;',
                  en: 'What do we know for certain about the hussars’ wings?',
                },
                answers: [
                  { el: 'Δεν ξέρουμε με βεβαιότητα σε τι χρησίμευαν', en: 'We do not know for certain what they were for' },
                  { el: 'Χρησίμευαν για να πετάει λίγο ο αναβάτης', en: 'They helped the rider to fly a little way up' },
                  { el: 'Κρατούσαν τον ήλιο μακριά από την πλάτη του', en: 'They kept the sun off the back of the rider' },
                  { el: 'Έδειχναν πόσες μάχες είχε κερδίσει καθένας', en: 'They showed how many battles each man had won' },
                ],
                explanation: {
                  el: 'Υπάρχουν τρεις τουλάχιστον εξηγήσεις και καμία δεν έχει αποδειχθεί. Μερικές ερωτήσεις μένουν ανοιχτές.',
                  en: 'There are at least three explanations and none is proven. Some questions simply stay open.',
                },
              },
            },
            {
              id: 'krakow-czartoryskich-wazy',
              name: { el: 'Τα αρχαία αγγεία', en: 'The ancient pots' },
              blurb: {
                el:
                  'Σε γυάλινες βιτρίνες στέκονται ελληνικά και ετρουσκικά αγγεία, ' +
                  'μερικά τους πάνω από δύο χιλιάδες πεντακόσια χρόνια παλιά. Ήταν ' +
                  'καθημερινά πράγματα: κανάτες για κρασί, κύπελλα, δοχεία για λάδι. ' +
                  'Πάνω τους είναι ζωγραφισμένοι αθλητές, θεοί και ζώα, με μαύρο και ' +
                  'πορτοκαλί χρώμα. Η Izabela τα αγόρασε γιατί πίστευε ότι ένα μουσείο ' +
                  'δεν πρέπει να δείχνει μόνο τη δική του χώρα. Ήθελε ο επισκέπτης να ' +
                  'καταλάβει ότι ο κόσμος είναι παλιός και μεγάλος.',
                en:
                  'In glass cases stand Greek and Etruscan pots, some of them more than ' +
                  'two thousand five hundred years old. They were everyday things: wine ' +
                  'jugs, cups, jars for oil. Athletes, gods and animals are painted on ' +
                  'them, in black and orange. Izabela bought them because she believed a ' +
                  'museum should not show only its own country. She wanted a visitor to ' +
                  'understand that the world is old and large.',
              },
              question: {
                q: {
                  el: 'Γιατί αγόρασε η Izabela αρχαία ελληνικά αγγεία;',
                  en: 'Why did Izabela buy ancient Greek pots for the museum?',
                },
                answers: [
                  { el: 'Ήθελε το μουσείο να δείχνει όλο τον κόσμο', en: 'She wanted the museum to show the whole world' },
                  { el: 'Ήταν δώρο από έναν βασιλιά της Ελλάδας', en: 'They were a gift from a king of Greece' },
                  { el: 'Τα βρήκε θαμμένα στον κήπο του σπιτιού της', en: 'She found them buried in her own back garden' },
                  { el: 'Τα χρειαζόταν για να σερβίρει στους φίλους της', en: 'She needed them to serve wine to her guests' },
                ],
                explanation: {
                  el: 'Πίστευε ότι ένα μουσείο πρέπει να δείχνει και τους άλλους λαούς, όχι μόνο τον δικό του.',
                  en: 'She believed a museum should show other peoples too, and not only its own.',
                },
              },
            },
          ],
        },
      ],
      riddles: [
        {
          id: 'krakow-czartoryskich-riddle-1',
          difficulty: 1,
          prompt: {
            el:
              'Κρατάω ένα μικρό λευκό ζώο και γυρίζω το κεφάλι μου, σαν να με φώναξε ' +
              'κάποιος από την πόρτα. Ζωγραφίστηκα στο Μιλάνο πριν από πεντακόσια χρόνια ' +
              'και ακόμα φαίνομαι έτοιμη να μιλήσω.',
            en:
              'I hold a small white animal and I am turning my head, as if somebody had ' +
              'called me from the door. I was painted in Milan five hundred years ago and ' +
              'I still look ready to speak.',
          },
          hint: {
            el: 'Το δωμάτιό μου είναι το πιο σκοτεινό, και είμαι ο λόγος που ήρθες.',
            en: 'My room is the darkest one, and I am the reason you came here.',
          },
          answerExhibitId: 'krakow-czartoryskich-dama-z-gronostajem',
        },
        {
          id: 'krakow-czartoryskich-riddle-2',
          difficulty: 2,
          prompt: {
            el:
              'Είμαι ένα δωμάτιο που διπλώνεται και ταξιδεύει. Οι τοίχοι μου είναι ύφασμα ' +
              'με κεντημένα λουλούδια, και έφτασα εδώ επειδή ένας στρατός έφυγε βιαστικά ' +
              'έξω από μια άλλη πόλη.',
            en:
              'I am a room that folds up and travels. My walls are cloth embroidered with ' +
              'flowers, and I arrived here because an army left in a hurry outside another ' +
              'city.',
          },
          hint: {
            el: 'Δεν είμαι φτιαγμένο από πέτρα ή ξύλο, και γι’ αυτό είμαι σπάνιο.',
            en: 'I am not made of stone or wood, and that is why I am so rare.',
          },
          answerExhibitId: 'krakow-czartoryskich-namiot',
        },
        {
          id: 'krakow-czartoryskich-riddle-3',
          difficulty: 3,
          prompt: {
            el:
              'Είμαι το μόνο πράγμα εδώ που δείχνει κάτι με το να μη δείχνει τίποτα. ' +
              'Κρέμομαι σε έναν τοίχο και περιμένω από το 1939 κάποιον που δεν έχει ' +
              'γυρίσει ακόμα.',
            en:
              'I am the only thing here that shows something by showing nothing. I hang on ' +
              'a wall and I have been waiting since 1939 for someone who has not come back ' +
              'yet.',
          },
          hint: {
            el: 'Έχω σχήμα, ξύλο και χρυσό, αλλά καθόλου χρώμα στη μέση μου.',
            en: 'I have a shape, wood and gold, but no paint at all in my middle.',
          },
          answerExhibitId: 'krakow-czartoryskich-pusta-rama',
        },
      ],
    },
  },

  // ------------------------------------------------------------ kościuszko mound
  {
    id: 'krakow-kopiec-kosciuszki',
    cityId: 'krakow',
    emoji: '⛰️',
    category: 'nature',
    difficulty: 2,

    name: { el: 'Kopiec Kościuszki, ο Λόφος του Kościuszko', en: 'The Kościuszko Mound' },
    tagline: {
      el: 'Ένας λόφος που τον έφτιαξαν άνθρωποι με τα χέρια τους',
      en: 'A hill that people built by hand, basket by basket',
    },
    story: {
      el:
        'Δυτικά της πόλης υπάρχει ένας λόφος που δεν τον έφτιαξε η φύση. Ανάμεσα στο ' +
        '1820 και το 1823 χιλιάδες άνθρωποι, από αγρότες ως καθηγητές, ανέβαζαν χώμα σε ' +
        'καλάθια και το άδειαζαν στην ίδια θέση, μέχρι που ο σωρός έφτασε τα τριάντα ' +
        'τέσσερα μέτρα. Τον έφτιαξαν για να θυμούνται τον Tadeusz Kościuszko, έναν ' +
        'άνθρωπο που πολέμησε πρώτα στην Αμερική για την ανεξαρτησία της και μετά στην ' +
        'Πολωνία για τη δική της. Στη βάση του έριξαν χώμα από τα πεδία των μαχών του, ' +
        'από τις δύο ηπείρους. Είκοσι πέντε χρόνια αργότερα οι Αυστριακοί, που τότε ' +
        'κυβερνούσαν την πόλη, έχτισαν γύρω του ένα φρούριο από τούβλα — και έτσι ο ' +
        'λόφος της μνήμης κατέληξε μέσα σε στρατιωτικό οχυρό. Σήμερα ανεβαίνεις με ' +
        'σπειροειδές μονοπάτι, και από την κορυφή βλέπεις ολόκληρη την Κρακοβία και, σε ' +
        'καθαρή μέρα, τα βουνά στα νότια.',
      en:
        'West of the city there is a hill that nature did not make. Between 1820 and ' +
        '1823 thousands of people, from farmers to professors, carried earth up in ' +
        'baskets and tipped it out in the same spot, until the heap stood thirty-four ' +
        'metres high. They built it to remember Tadeusz Kościuszko, a man who fought ' +
        'first in America for its independence and then in Poland for its own. At its ' +
        'base they poured soil from his battlefields, on two continents. Twenty-five ' +
        'years later the Austrians, who ruled the city then, built a brick fort around it ' +
        '— so the hill of memory ended up inside a military stronghold. Today you climb a ' +
        'spiral path, and from the top you see the whole of Kraków and, on a clear day, ' +
        'the mountains to the south.',
    },
    facts: [
      {
        el: 'Χτίστηκε με τα χέρια από το 1820 ως το 1823 και έχει ύψος 34 μέτρα.',
        en: 'It was built by hand from 1820 to 1823 and stands 34 metres high.',
      },
      {
        el: 'Στη βάση του έριξαν χώμα από τα πεδία των μαχών του σε δύο ηπείρους.',
        en: 'Soil from his battlefields on two continents was poured in at its base.',
      },
      {
        el: 'Γύρω του χτίστηκε αργότερα αυστριακό φρούριο από τούβλα, γύρω στο 1850.',
        en: 'An Austrian brick fort was built around it later, in about 1850.',
      },
    ],
    location: {
      lat: 50.0549,
      lng: 19.89328,
      anchor: 'viewpoint',
      confidence: 'C',
      sources: [
        { kind: 'wikidata', ref: 'Q641398', deltaM: 0 },
        { kind: 'wikipedia', ref: "Kościuszko's Mound", deltaM: 354 },
      ],
      verifiedAt: '2026-09-14',
      note: 'Graded C. The OpenStreetMap fetch failed in the resolver run, and Wikipedia’s point is 354 m away — that is a long way for a building and an ordinary distance for a hill inside a fort, which is why the seed declares this a viewpoint. The 354 m is inside the 400 m the resolver allows a viewpoint, so it is not an outlier.',
      map: { x: 0.081, y: 0.575 },
      findIt: {
        el: 'Είναι ο κωνικός λόφος στα δυτικά, μέσα σε ένα φρούριο από κόκκινα τούβλα. Το μονοπάτι ανεβαίνει σπειροειδώς γύρω του.',
        en: 'It is the cone-shaped hill to the west, inside a fort of red brick. The path climbs around it in a spiral.',
      },
    },
    question: {
      q: {
        el: 'Πώς φτιάχτηκε αυτός ο λόφος;',
        en: 'How was this particular hill made?',
      },
      answers: [
        { el: 'Άνθρωποι ανέβασαν χώμα σε καλάθια', en: 'People carried earth up in baskets' },
        { el: 'Ένα ποτάμι άφησε φερτά υλικά εκεί', en: 'A river left its silt behind up here' },
        { el: 'Ένα ηφαίστειο τον έφτιαξε πολύ παλιά', en: 'A volcano threw it up very long ago' },
        { el: 'Παγετώνες έσπρωξαν πέτρες στη θέση του', en: 'Glaciers pushed stones into the place' },
      ],
      explanation: {
        el:
          'Δεν είναι φυσικός λόφος. Χιλιάδες εθελοντές τον έχτισαν με τα χέρια τους σε ' +
          'τρία χρόνια, καλάθι το καλάθι.',
        en:
          'It is not a natural hill. Thousands of volunteers built it with their hands in ' +
          'three years, one basket at a time.',
      },
    },
  },

  // --------------------------------------------------------------- kleparz market
  {
    id: 'krakow-rynek-kleparski',
    cityId: 'krakow',
    emoji: '🥨',
    category: 'food',
    difficulty: 1,

    name: { el: 'Rynek Kleparski, η αγορά του Kleparz', en: 'The Kleparz Market' },
    tagline: {
      el: 'Η αγορά όπου η πόλη ψωνίζει εδώ και αιώνες',
      en: 'The market where the city has shopped for ages',
    },
    story: {
      el:
        'Λίγο βόρεια από τα παλιά τείχη υπάρχει μια πλατεία γεμάτη πάγκους. Το Kleparz ' +
        'ήταν και αυτό, όπως το Kazimierz, μια ξεχωριστή μικρή πόλη που ίδρυσε ο ' +
        'βασιλιάς Kazimierz ο Μέγας τον 14ο αιώνα, και η αγορά του λειτουργεί από τότε ' +
        'σχεδόν χωρίς διακοπή. Δεν είναι μουσείο· είναι το μέρος όπου οι κάτοικοι της ' +
        'πόλης αγοράζουν πράγματι μήλα, μανιτάρια, τυρί και λουλούδια. Εδώ θα δεις και ' +
        'το φαγητό που ανήκει στην Κρακοβία περισσότερο από κάθε άλλο: το obwarzanek, ' +
        'ένα στριφτό κουλούρι πασπαλισμένο με σουσάμι ή παπαρουνόσπορο. Το μυστικό του ' +
        'δεν είναι η ζύμη αλλά η σειρά της δουλειάς: πλέκεται, βράζεται για λίγα ' +
        'δευτερόλεπτα σε νερό και μόνο μετά μπαίνει στον φούρνο. Γι’ αυτό γυαλίζει από ' +
        'έξω και είναι μαλακό μέσα. Το όνομά του προστατεύεται με νόμο από το 2010: ' +
        'obwarzanek krakowski λέγεται μόνο αυτό που φτιάχτηκε εδώ.',
      en:
        'Just north of the old walls there is a square full of stalls. Kleparz, like ' +
        'Kazimierz, was once a separate little town founded by King Casimir the Great in ' +
        'the fourteenth century, and its market has run ever since, almost without a ' +
        'break. It is not a museum; it is where the people of the city genuinely buy ' +
        'apples, mushrooms, cheese and flowers. Here you will also meet the food that ' +
        'belongs to Kraków more than any other: the obwarzanek, a twisted bread ring ' +
        'scattered with sesame or poppy seeds. Its secret is not the dough but the order ' +
        'of the work: it is plaited, boiled for a few seconds in water, and only then ' +
        'baked. That is why it shines outside and stays soft within. Its name has been ' +
        'protected by law since 2010: only a ring made here may be called an obwarzanek ' +
        'krakowski.',
    },
    facts: [
      {
        el: 'Το Kleparz ιδρύθηκε τον 14ο αιώνα και η αγορά του λειτουργεί από τότε.',
        en: 'Kleparz was founded in the 1300s and its market has run ever since.',
      },
      {
        el: 'Το obwarzanek βράζεται για λίγα δευτερόλεπτα πριν ψηθεί στον φούρνο.',
        en: 'The obwarzanek is boiled for a few seconds before it goes in the oven.',
      },
      {
        el: 'Από το 2010 το όνομα «obwarzanek krakowski» προστατεύεται με νόμο.',
        en: 'Since 2010 the name «obwarzanek krakowski» has been protected by law.',
      },
    ],
    location: {
      lat: 50.0675,
      lng: 19.9411,
      anchor: 'area',
      confidence: 'C',
      sources: [{ kind: 'wikidata', ref: 'Q9324454', deltaM: 0 }],
      verifiedAt: '2026-09-14',
      note: 'Graded C on Wikidata alone: the OpenStreetMap fetch failed in the resolver run and the square has no Wikipedia article in any language. Searching «Stary Kleparz» instead returns a tram stop, Q116663895, which is a different thing two streets away.',
      map: { x: 0.817, y: 0.125 },
      findIt: {
        el: 'Τρία λεπτά βόρεια από τον Μπαρμπακάν, περνώντας το πάρκο. Ψάξε το χαμηλό σκέπαστρο και τους πάγκους με τα λουλούδια στη γωνία.',
        en: 'Three minutes north of the Barbican, past the park. Look for the low roof and the flower stalls at its corner.',
      },
    },
    question: {
      q: {
        el: 'Τι κάνει το obwarzanek να γυαλίζει από έξω;',
        en: 'What makes the obwarzanek shiny on the outside?',
      },
      answers: [
        { el: 'Βράζεται σε νερό πριν πάει στον φούρνο', en: 'It is boiled in water before it is baked' },
        { el: 'Αλείφεται με βούτυρο μόλις βγει ζεστό', en: 'It is brushed with butter as it comes out' },
        { el: 'Ψήνεται δύο φορές, με παύση ανάμεσα', en: 'It is baked twice, with a pause between' },
        { el: 'Πασπαλίζεται με ζάχαρη πριν το ψήσιμο', en: 'It is dusted with sugar before the baking' },
      ],
      explanation: {
        el:
          'Το σύντομο βράσιμο ζελατινοποιεί το άμυλο στην επιφάνεια. Στον φούρνο αυτή η ' +
          'επιφάνεια γίνεται λεία και γυαλιστερή, ενώ το μέσα μένει μαλακό.',
        en:
          'The short boil sets the starch on the surface. In the oven that surface turns ' +
          'smooth and glossy, while the inside stays soft.',
      },
    },
  },

  // -------------------------------------------------------------- cracovia stadium
  {
    id: 'krakow-stadion-cracovii',
    cityId: 'krakow',
    emoji: '⚽',
    category: 'sport',
    difficulty: 2,

    name: { el: 'Stadion Cracovii, το γήπεδο της Cracovia', en: 'The Cracovia Stadium' },
    tagline: {
      el: 'Το σπίτι του παλαιότερου συλλόγου της Πολωνίας',
      en: 'Home of the oldest football club in Poland',
    },
    story: {
      el:
        'Το 1906 μια παρέα μαθητών και φοιτητών της Κρακοβίας αποφάσισε να φτιάξει ' +
        'ομάδα ποδοσφαίρου. Την ονόμασαν Cracovia, από το λατινικό όνομα της πόλης τους. ' +
        'Το παιχνίδι ήταν τότε καινούργιο σε αυτό το μέρος της Ευρώπης: οι κανόνες ' +
        'μεταφράζονταν ακόμα και οι μπάλες παραγγέλνονταν από μακριά. Η Cracovia παίζει ' +
        'από τότε συνεχώς, με διακοπές μόνο για τους δύο πολέμους, και είναι ο ' +
        'παλαιότερος πολωνικός σύλλογος που υπάρχει ακόμα. Λίγους μήνες αργότερα ' +
        'γεννήθηκε στην ίδια πόλη μια δεύτερη ομάδα, η Wisła, και ο αγώνας ανάμεσά τους ' +
        'είναι το παλαιότερο ντέρμπι της χώρας. Το σημερινό γήπεδο άνοιξε το 2010 στη ' +
        'θέση του παλιού, δίπλα στο μεγάλο πάρκο Błonia, και χωράει περίπου δεκαπέντε ' +
        'χιλιάδες θεατές. Το χρώμα του συλλόγου είναι λευκό και κόκκινο, όπως η σημαία ' +
        'της χώρας.',
      en:
        'In 1906 a group of Kraków schoolboys and students decided to start a football ' +
        'team. They called it Cracovia, after the Latin name of their city. The game was ' +
        'new in this part of Europe then: the rules were still being translated and the ' +
        'balls had to be ordered from far away. Cracovia has played ever since, stopping ' +
        'only for the two wars, and it is the oldest Polish club still going. A few ' +
        'months later a second team was born in the same city, Wisła, and the match ' +
        'between them is the oldest derby in the country. The present stadium opened in ' +
        '2010 on the site of the old one, next to the great Błonia meadow, and holds ' +
        'about fifteen thousand people. The club’s colours are white and red, like the ' +
        'flag of the country.',
    },
    facts: [
      {
        el: 'Η Cracovia ιδρύθηκε το 1906 και είναι ο παλαιότερος σύλλογος της χώρας.',
        en: 'Cracovia was founded in 1906 and is the oldest club in the country.',
      },
      {
        el: 'Το σημερινό γήπεδο άνοιξε το 2010 και χωράει περίπου 15.000 θεατές.',
        en: 'The present stadium opened in 2010 and holds about 15,000 people.',
      },
      {
        el: 'Δίπλα του απλώνεται το Błonia, ένα τεράστιο λιβάδι μέσα στην πόλη.',
        en: 'Beside it lies the Błonia, an enormous meadow inside the city.',
      },
    ],
    location: {
      lat: 50.05806,
      lng: 19.91972,
      anchor: 'area',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q738643', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Józef Piłsudski Cracovia Stadium', deltaM: 1 },
      ],
      verifiedAt: '2026-09-14',
      note: 'The OpenStreetMap fetch failed in the resolver run, so the grade rests on Wikidata and Wikipedia, which agree to 1 m.',
      map: { x: 0.488, y: 0.462 },
      findIt: {
        el: 'Στη δυτική άκρη του λιβαδιού Błonia, στην οδό Kałuży. Οι λευκές και κόκκινες καρέκλες φαίνονται από τον δρόμο.',
        en: 'At the west edge of the Błonia meadow, on Kałuży street. The white and red seats show from the road.',
      },
    },
    question: {
      q: {
        el: 'Τι το ξεχωριστό έχει η ομάδα Cracovia;',
        en: 'What is special about the Cracovia football club?',
      },
      answers: [
        { el: 'Είναι ο παλαιότερος σύλλογος της Πολωνίας', en: 'It is the oldest football club in Poland' },
        { el: 'Δεν έχει χάσει ποτέ αγώνα στο γήπεδό της', en: 'It has never lost a match on its own ground' },
        { el: 'Έχει κερδίσει τα περισσότερα πρωταθλήματα', en: 'It has won more league titles than any other' },
        { el: 'Έπαιξε τον πρώτο αγώνα που έγινε στη Γη', en: 'It played the first football match on Earth' },
      ],
      explanation: {
        el:
          'Ιδρύθηκε το 1906 και παίζει από τότε. Είναι ο αρχαιότερος πολωνικός σύλλογος ' +
          'που λειτουργεί ακόμα, όχι ο πιο πετυχημένος.',
        en:
          'It was founded in 1906 and has played ever since. It is the oldest Polish club ' +
          'still running, which is not the same as the most successful.',
      },
    },
  },
];

export const trails: Trail[] = [
  {
    id: 'krakow-royal-road',
    cityId: 'krakow',
    emoji: '👑',
    name: { el: 'Ο Βασιλικός Δρόμος', en: 'The Royal Road' },
    promise: {
      el: 'Η διαδρομή που έκαναν οι βασιλιάδες, από την πύλη ως τον θρόνο τους.',
      en: 'The route the kings rode, from the city gate up to their throne.',
    },
    placeIds: [
      'krakow-barbakan',
      'krakow-brama-florianska',
      'krakow-sukiennice',
      'krakow-kosciol-piotra-pawla',
      'krakow-wawel-zamek',
      'krakow-katedra-wawelska',
    ],
  },
  {
    id: 'krakow-dragon-day',
    cityId: 'krakow',
    emoji: '🐉',
    name: { el: 'Μια μέρα με τον δράκο', en: 'A day with the dragon' },
    promise: {
      el: 'Θα έχεις μπει σε σπηλιά, ανέβει σε πύργο και ακούσει μια σάλπιγγα.',
      en: 'You will have gone into a cave, up a tower, and heard a trumpet.',
    },
    placeIds: [
      'krakow-smocza-jama',
      'krakow-katedra-wawelska',
      'krakow-wieza-ratuszowa',
      'krakow-kosciol-mariacki',
    ],
  },
  {
    id: 'krakow-things-people-made',
    cityId: 'krakow',
    emoji: '🔭',
    name: { el: 'Πράγματα που έφτιαξαν άνθρωποι', en: 'Things that people made' },
    promise: {
      el: 'Ένας γλόμπος με λάθος ήπειρο, ένα εκκρεμές, μια Κυρία και ένας λόφος.',
      en: 'A globe with a continent misplaced, a pendulum, a Lady and a hill.',
    },
    placeIds: [
      'krakow-collegium-maius',
      'krakow-kosciol-piotra-pawla',
      'krakow-muzeum-czartoryskich',
      'krakow-kopiec-kosciuszki',
    ],
  },
  {
    id: 'krakow-across-the-river',
    cityId: 'krakow',
    emoji: '🌉',
    name: { el: 'Πέρα από το ποτάμι', en: 'Over the river' },
    promise: {
      el: 'Μια γειτονιά που ήταν πόλη, ακροβάτες στον αέρα και ένα κουλούρι.',
      en: 'A neighbourhood that was a town, acrobats in the air, and a bread ring.',
    },
    placeIds: [
      'krakow-stara-synagoga',
      'krakow-kladka-bernatka',
      'krakow-rynek-kleparski',
    ],
  },
  {
    id: 'krakow-open-air',
    cityId: 'krakow',
    emoji: '🌳',
    name: { el: 'Έξω, στον αέρα', en: 'Outside, in the open air' },
    promise: {
      el: 'Τρία μέρη χωρίς ταβάνι: ένας λόφος, ένα λιβάδι και μια αγορά.',
      en: 'Three places with no ceiling: a hill, a meadow and a market.',
    },
    placeIds: [
      'krakow-kopiec-kosciuszki',
      'krakow-stadion-cracovii',
      'krakow-rynek-kleparski',
      'krakow-smocza-jama',
    ],
  },
];
