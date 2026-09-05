/**
 * WiseBot Explorer · Κρακοβία / Kraków
 * ====================================
 * Ten spots along the Royal Road and beyond it: from the Barbican through the Main Square
 * to Wawel hill (spots 1–7), then the dragon by the river, the footbridge and Kazimierz
 * (spots 8–10). Original text only, verified facts, language for a child of 7–12 in Greek
 * and English. Polish names stay in Polish in both languages, with a Greek gloss the first time.
 */
import type { ExploreCity } from '../types';

export const CITY: ExploreCity = {
  id: 'krakow',
  name: { el: 'Κρακοβία', en: 'Kraków' },
  country: { el: 'Πολωνία', en: 'Poland' },
  countryCode: 'PL',
  emoji: '🐉',
  center: { lat: 50.0590, lng: 19.9380 },
  zoom: 14,
  intro: {
    el: 'Γεια σας, εξερευνητές! Είμαι η WiseBot, η σοφή κουκουβάγια, και σας καλωσορίζω στην Κρακοβία, την παλιά βασιλική πρωτεύουσα της Πολωνίας! Εδώ, λέει ο θρύλος, κάτω από το κάστρο ζούσε ένας δράκος. Εδώ μια τρομπέτα παίζει κάθε ώρα από έναν ψηλό πύργο και σταματάει ξαφνικά στη μέση της νότας. Εδώ βρίσκεται η μεγαλύτερη μεσαιωνική πλατεία της Ευρώπης, και εδώ σπούδασε ο Κοπέρνικος, που κατάλαβε ότι η Γη γυρίζει γύρω από τον Ήλιο. Και σε κάθε γωνία θα βρείτε καροτσάκια με obwarzanki (ομπβαζάνκι), τα στριφτά κουλούρια της πόλης. Λύστε τους γρίφους μου, βρείτε τα δέκα μυστικά σημεία και γίνετε εξερευνητές της Κρακοβίας!',
    en: 'Hello, explorers! I am WiseBot the wise owl, and I welcome you to Kraków, the old royal capital of Poland! Here, so the legend says, a dragon lived under the castle. Here a trumpet plays every hour from a tall tower and stops suddenly in the middle of a note. Here lies the biggest medieval square in Europe, and here Copernicus went to university and worked out that the Earth goes round the Sun. And on every corner you will find little carts selling obwarzanki, the twisted bread rings of the city. Solve my riddles, find the ten secret spots and become Kraków explorers yourselves!',
  },
  route: [
    'florian-gate-barbican',
    'main-square',
    'st-marys-basilica',
    'town-hall-tower',
    'collegium-maius',
    'st-peter-and-paul',
    'wawel-courtyard',
    'wawel-dragon',
    'bernatek-footbridge',
    'kazimierz-szeroka',
  ],
  spots: [
    // ── 1. Brama Floriańska & Barbakan ────────────────────────────────────────
    {
      id: 'florian-gate-barbican',
      name: { el: 'Brama Floriańska και Barbakan', en: 'St Florian\'s Gate and the Barbican' },
      emoji: '🛡️',
      lat: 50.0652,
      lng: 19.9414,
      radiusM: 60,
      riddle: {
        el: 'Ένα στρογγυλό πέτρινο φρούριο με μικρά καπέλα στους πύργους του φυλάει τη μοναδική παλιά πόρτα της πόλης που δεν γκρεμίστηκε ποτέ. Από εκεί ξεκινούσαν οι βασιλιάδες τον δρόμο τους προς το κάστρο.',
        en: 'A round stone fort with little hats on its towers guards the only old door of the city that was never knocked down. From here, kings set off on their road to the castle.',
      },
      parentHint: {
        el: 'Είναι η Brama Floriańska (η Πύλη του Αγίου Φλωριανού) και ο Barbakan (ο Μπαρμπακάν), στη βόρεια άκρη της Παλιάς Πόλης. Ξεκινήστε από εδώ: από τον κεντρικό σιδηροδρομικό σταθμό Kraków Główny είναι 8 λεπτά με τα πόδια μέσα από το πάρκο Planty· η στάση τραμ Stary Kleparz είναι 3 λεπτά μακριά. Σταθείτε στο πλακόστρωτο ανάμεσα στον Barbakan και στην πύλη.',
        en: 'It is the Brama Floriańska (St Florian\'s Gate) and the Barbakan, at the north edge of the Old Town. Start here: from Kraków Główny railway station it is an 8-minute walk through the Planty park; the Stary Kleparz tram stop is 3 minutes away. Stand on the paving between the Barbican and the gate.',
      },
      unlockQuestion: {
        question: { el: 'Γιατί οι παλιές πόλεις έχτιζαν τείχη με πύλες και ένα στρογγυλό φρούριο μπροστά τους;', en: 'Why did old cities build walls with gates and a round fort in front of them?' },
        options: {
          el: ['Για να μη φεύγουν τα περιστέρια', 'Για να αφήνουν μέσα τους φίλους και να κρατούν έξω τους εχθρούς', 'Για να έχουν πού να κρεμάνε πίνακες', 'Για να κάνει σκιά το καλοκαίρι'],
          en: ['To stop the pigeons flying away', 'To let friends in and keep enemies out', 'To have somewhere to hang paintings', 'To make shade in summer'],
        },
        correct: 1,
        explanation: {
          el: 'Τα τείχη ήταν η προστασία της πόλης. Οι φρουροί στην πύλη έλεγχαν ποιος μπαίνει, και το στρογγυλό φρούριο μπροστά, ο μπαρμπακάν, σταματούσε τους εχθρούς πριν καν φτάσουν στην πόρτα.',
          en: 'Walls were a city\'s protection. Guards at the gate checked who came in, and the round fort in front, the barbican, stopped enemies before they even reached the door.',
        },
      },
      onSite: {
        question: { el: 'Κάνε τον γύρο του στρογγυλού φρουρίου και μέτρησε τους μικρούς πυργίσκους με τα μυτερά καπέλα στην κορυφή του. Πόσοι είναι;', en: 'Walk round the round fort and count the little turrets with pointed hats on top of it. How many are there?' },
        options: {
          el: ['Τρεις', 'Πέντε', 'Επτά', 'Δώδεκα'],
          en: ['Three', 'Five', 'Seven', 'Twelve'],
        },
        correct: 2,
        explanation: {
          el: 'Επτά πυργίσκοι στολίζουν τον Barbakan. Από εκεί οι φρουροί έβλεπαν μακριά, και στους τοίχους ανάμεσά τους υπάρχουν περίπου 130 μικρές τρύπες, από τις οποίες οι τοξότες έριχναν τα βέλη τους.',
          en: 'Seven turrets crown the Barbican. Guards could see far from up there, and in the walls between them are about 130 little holes through which archers shot their arrows.',
        },
      },
      story: {
        el: 'Πριν από εκατοντάδες χρόνια η Κρακοβία ήταν τυλιγμένη με ένα πέτρινο τείχος με δεκάδες πύργους και οκτώ πύλες. Από τις πύλες έμεινε μόνο μία: η Brama Floriańska, χτισμένη γύρω στο 1300, εκεί όπου αρχίζει ο Βασιλικός Δρόμος. Το 1498 οι κάτοικοι έχτισαν μπροστά της τον στρογγυλό Barbakan, ένα φρούριο με χοντρούς τοίχους, επτά πυργίσκους και 130 τρύπες για τα βέλη, ώστε κανένας εχθρός να μη φτάνει ως την πόρτα. Τον 19ο αιώνα τα περισσότερα τείχη γκρεμίστηκαν και στη θέση τους φυτεύτηκε ένα πράσινο πάρκο, το Planty (Πλάντι). Οι κάτοικοι όμως πάλεψαν και κράτησαν αυτή τη γωνιά. Σήμερα ζωγράφοι κρεμούν τους πίνακές τους στο παλιό τείχος δίπλα στην πύλη.',
        en: 'Hundreds of years ago Kraków was wrapped in a stone wall with dozens of towers and eight gates. Only one gate is left: the Brama Floriańska, built around 1300, where the Royal Road begins. In 1498 the townspeople built the round Barbican in front of it, a fort with thick walls, seven turrets and 130 holes for arrows, so that no enemy could ever reach the door. In the 1800s most of the walls were pulled down and a green park, the Planty, was planted in their place. But the people fought to keep this corner. Today painters hang their pictures on the old wall beside the gate.',
      },
      didYouKnow: {
        el: 'Ο αετός πάνω από την αψίδα της πύλης, από την πλευρά της οδού Floriańska, σχεδιάστηκε από τον Jan Matejko, τον πιο διάσημο ζωγράφο ιστορικών πινάκων της Πολωνίας, που γεννήθηκε λίγα βήματα από εδώ. Ο Barbakan της Κρακοβίας, με τοίχους τρία μέτρα χοντρούς, είναι από τα ελάχιστα τέτοια στρογγυλά προτειχίσματα που σώζονται σε όλη την Ευρώπη· παλιά τον ένωνε με την πύλη ένας σκεπαστός διάδρομος, ο «λαιμός».',
        en: 'The eagle above the arch of the gate, on the Floriańska street side, was designed by Jan Matejko, Poland\'s most famous painter of history scenes, who was born a few steps from here. Kraków\'s Barbican, with walls three metres thick, is one of only a handful of such round outer forts surviving anywhere in Europe; a covered passage called the “neck” once joined it to the gate.',
      },
      quiz: [
        {
          q: { el: 'Πόσες από τις παλιές πύλες της πόλης στέκονται ακόμη;', en: 'How many of the old city gates are still standing?' },
          options: {
            el: ['Οκτώ', 'Μόνο μία', 'Τρεις', 'Καμία'],
            en: ['Eight', 'Only one', 'Three', 'None'],
          },
          correct: 1,
          explanation: {
            el: 'Από τις οκτώ πύλες έμεινε μόνο η Brama Floriańska. Οι υπόλοιπες γκρεμίστηκαν μαζί με τα τείχη τον 19ο αιώνα.',
            en: 'Of the eight gates only the Brama Floriańska is left. The others were pulled down with the walls in the 1800s.',
          },
        },
        {
          q: { el: 'Τι είναι ο Barbakan;', en: 'What is the Barbican?' },
          options: {
            el: ['Ένα στρογγυλό φρούριο που φύλαγε την πύλη', 'Μια εκκλησία', 'Μια αγορά με υφάσματα', 'Μια γέφυρα πάνω από το ποτάμι'],
            en: ['A round fort that guarded the gate', 'A church', 'A cloth market', 'A bridge over the river'],
          },
          correct: 0,
          explanation: {
            el: 'Ο Barbakan χτίστηκε το 1498 μπροστά από την πύλη, με χοντρούς τοίχους και επτά πυργίσκους, για να σταματάει τους εχθρούς.',
            en: 'The Barbican was built in 1498 in front of the gate, with thick walls and seven turrets, to stop enemies.',
          },
        },
        {
          q: { el: 'Τι φυτεύτηκε εκεί όπου ήταν τα παλιά τείχη;', en: 'What was planted where the old walls used to be?' },
          options: {
            el: ['Ένα δάσος με έλατα', 'Αμπέλια', 'Ένα πράσινο πάρκο, το Planty', 'Ένα γήπεδο'],
            en: ['A fir forest', 'Vineyards', 'A green park, the Planty', 'A sports field'],
          },
          correct: 2,
          explanation: {
            el: 'Στη θέση των τειχών φυτεύτηκε το πάρκο Planty, ένα πράσινο δαχτυλίδι που αγκαλιάζει ολόκληρη την Παλιά Πόλη.',
            en: 'The Planty park was planted where the walls stood, a green ring that hugs the whole Old Town.',
          },
        },
      ],
    },

    // ── 2. Rynek Główny & Sukiennice ──────────────────────────────────────────
    {
      id: 'main-square',
      name: { el: 'Rynek Główny και Sukiennice', en: 'Main Market Square and the Cloth Hall' },
      emoji: '🏛️',
      lat: 50.0617,
      lng: 19.9378,
      radiusM: 40,
      riddle: {
        el: 'Μια πλατεία τόσο μεγάλη που χωράει δύο γήπεδα ποδοσφαίρου, με ένα μακρύ κτίριο ακριβώς στη μέση της, όπου κάποτε πουλούσαν ρούχα και τώρα πουλούν χρυσαφένιες πέτρες. Άμαξες με άλογα περιμένουν στην άκρη και τα περιστέρια νομίζουν ότι είναι ιππότες.',
        en: 'A square so big that two football pitches would fit inside, with a long building right in its middle where cloth was once sold and golden stones are sold today. Horse carriages wait at the edge, and the pigeons think they are knights.',
      },
      parentHint: {
        el: 'Είναι η Rynek Główny (η Κεντρική Πλατεία) με τα Sukiennice (Σουκιένιτσε, τα Υφασματάδικα) στη μέση της. Από την πύλη κατεβείτε τον πεζόδρομο Floriańska ευθεία για 5 λεπτά· η πλατεία ανοίγεται μπροστά σας. Σταθείτε στο πλάι των Sukiennice, στην πλευρά του αγάλματος του ποιητή Mickiewicz.',
        en: 'It is the Rynek Główny, the Main Square, with the Sukiennice, the Cloth Hall, in its middle. From the gate walk straight down the pedestrian Floriańska street for 5 minutes; the square opens in front of you. Stand beside the Sukiennice, on the side with the statue of the poet Mickiewicz.',
      },
      unlockQuestion: {
        question: { el: 'Ο γρίφος λέει ότι στην πλατεία χωράνε δύο γήπεδα ποδοσφαίρου. Πόσο μακριά είναι περίπου κάθε πλευρά της;', en: 'The riddle says two football pitches would fit in the square. About how long is each of its sides?' },
        options: {
          el: ['Περίπου 20 μέτρα', 'Περίπου 200 μέτρα', 'Περίπου 2 χιλιόμετρα', 'Περίπου 20 χιλιόμετρα'],
          en: ['About 20 metres', 'About 200 metres', 'About 2 kilometres', 'About 20 kilometres'],
        },
        correct: 1,
        explanation: {
          el: 'Κάθε πλευρά της πλατείας έχει μήκος περίπου 200 μέτρα, όσο δύο γήπεδα ποδοσφαίρου στη σειρά. Είναι η μεγαλύτερη μεσαιωνική πλατεία της Ευρώπης.',
          en: 'Each side of the square is about 200 metres long, as long as two football pitches end to end. It is the biggest medieval square in Europe.',
        },
      },
      onSite: {
        question: { el: 'Κοίταξε ψηλά, στην άκρη της στέγης των Sukiennice, ανάμεσα στα πέτρινα στολίδια. Τι θα δεις εκεί πάνω σε μια σειρά;', en: 'Look up at the edge of the Sukiennice roof, among the stone decorations. What do you see up there in a row?' },
        options: {
          el: ['Χρυσά πουλιά', 'Μικρές καμπάνες', 'Σκαλιστά πρόσωπα με ανοιχτό στόμα', 'Πολύχρωμες σημαίες'],
          en: ['Golden birds', 'Little bells', 'Carved faces with open mouths', 'Colourful flags'],
        },
        correct: 2,
        explanation: {
          el: 'Τα πρόσωπα λέγονται μασκαρόν και σκαλίστηκαν τον 16ο αιώνα, όταν το κτίριο ξαναχτίστηκε μετά από μια πυρκαγιά. Λένε πως ο γλύπτης έδωσε σε κάποια τα χαρακτηριστικά ανθρώπων της πόλης, για να τους πειράξει!',
          en: 'The faces are called mascarons and were carved in the 1500s, when the building was rebuilt after a fire. It is said the sculptor gave some of them the features of people in town, to tease them!',
        },
      },
      story: {
        el: 'Το 1257 ο πρίγκιπας Bolesław ο Αγνός σχεδίασε την Κρακοβία από την αρχή, με ίσιους δρόμους και μια τεράστια πλατεία στη μέση, περίπου 200 επί 200 μέτρα. Στο κέντρο της έχτισαν τα Sukiennice, μια μεγάλη στοά όπου οι έμποροι πουλούσαν υφάσματα από όλη την Ευρώπη. Μετά από μια πυρκαγιά, γύρω στο 1555, το κτίριο ξαναχτίστηκε πιο όμορφο, με τα σκαλιστά πρόσωπα στη στέγη. Σήμερα μέσα πουλούν κεχριμπάρι, τη χρυσαφένια πέτρα της Βαλτικής, ξύλινα παιχνίδια και κεντήματα. Ένας θρύλος λέει ότι τα περιστέρια της πλατείας είναι οι ιππότες ενός πρίγκιπα, που τους μεταμόρφωσε μια μάγισσα και ξέχασε να τους ξαναμεταμορφώσει. Η καρδιά της Κρακοβίας χτυπάει εδώ και 750 χρόνια.',
        en: 'In 1257 Prince Bolesław the Chaste planned Kraków afresh, with straight streets and an enormous square in the middle, about 200 by 200 metres. In its centre they built the Sukiennice, a long hall where merchants sold cloth from all over Europe. After a fire, around 1555, the building was rebuilt more beautifully, with the carved faces along the roof. Today the stalls inside sell amber, the golden stone of the Baltic Sea, wooden toys and embroidery. A legend says the pigeons of the square are the knights of a prince, turned into birds by a witch who forgot to change them back. The heart of Kraków has been beating here for 750 years.',
      },
      didYouKnow: {
        el: 'Ο θρύλος των περιστεριών αφορά τον πρίγκιπα Henryk IV Probus, που τον 13ο αιώνα ήθελε να γίνει βασιλιάς: μια μάγισσα έκανε τους ιππότες του περιστέρια, που ράμφιζαν τους τοίχους και οι πέτρες γίνονταν χρυσάφι για το ταξίδι του στη Ρώμη. Εκείνος ξόδεψε το χρυσάφι στον δρόμο και οι ιππότες έμειναν περιστέρια. Οι καμάρες στα πλάγια των Sukiennice προστέθηκαν πολύ αργότερα, τον 19ο αιώνα. Κάτω από την πλατεία υπάρχει σήμερα ένα υπόγειο μουσείο με τους μεσαιωνικούς δρόμους και τα παλιά μαγαζιά, τέσσερα μέτρα κάτω από τα πόδια σας.',
        en: 'The pigeon legend concerns Prince Henryk IV Probus, who in the 13th century wanted to become king: a witch turned his knights into pigeons that pecked the walls, and the stones became gold for his journey to Rome. He spent it all on the way, and the knights stayed pigeons. The arcades along the sides of the Sukiennice were added much later, in the 1800s. Beneath the square today lies an underground museum with the medieval streets and old stalls, four metres below your feet.',
      },
      quiz: [
        {
          q: { el: 'Πότε σχεδιάστηκε η μεγάλη πλατεία;', en: 'When was the big square planned?' },
          options: {
            el: ['Το 2010', 'Το 1972', 'Το 1820', 'Το 1257'],
            en: ['In 2010', 'In 1972', 'In 1820', 'In 1257'],
          },
          correct: 3,
          explanation: {
            el: 'Η πλατεία σχεδιάστηκε το 1257, όταν ο πρίγκιπας Bolesław ο Αγνός έδωσε στην Κρακοβία καινούργιο σχέδιο με ίσιους δρόμους.',
            en: 'The square was planned in 1257, when Prince Bolesław the Chaste gave Kraków a new plan with straight streets.',
          },
        },
        {
          q: { el: 'Τι πουλούσαν οι έμποροι στα Sukiennice πριν από πολλά χρόνια;', en: 'What did merchants sell in the Sukiennice long ago?' },
          options: {
            el: ['Υφάσματα', 'Ψάρια', 'Παιχνίδια', 'Παγωτά'],
            en: ['Cloth', 'Fish', 'Toys', 'Ice cream'],
          },
          correct: 0,
          explanation: {
            el: 'Το όνομα Sukiennice σημαίνει «τα Υφασματάδικα»: εδώ πουλούσαν υφάσματα από όλη την Ευρώπη. Σήμερα πουλούν κεχριμπάρι και σουβενίρ.',
            en: 'The name Sukiennice means “the Cloth Hall”: cloth from all over Europe was sold here. Today the stalls sell amber and souvenirs.',
          },
        },
        {
          q: { el: 'Σύμφωνα με τον θρύλο, σε τι μεταμόρφωσε η μάγισσα τους ιππότες;', en: 'According to the legend, what did the witch turn the knights into?' },
          options: {
            el: ['Σε πέτρες', 'Σε περιστέρια', 'Σε άλογα', 'Σε δέντρα'],
            en: ['Stones', 'Pigeons', 'Horses', 'Trees'],
          },
          correct: 1,
          explanation: {
            el: 'Οι ιππότες έγιναν περιστέρια, και ο θρύλος λέει ότι τα περιστέρια της πλατείας περιμένουν ακόμη να ξαναγίνουν άνθρωποι.',
            en: 'The knights became pigeons, and the legend says the pigeons of the square are still waiting to become people again.',
          },
        },
      ],
    },

    // ── 3. Kościół Mariacki ───────────────────────────────────────────────────
    {
      id: 'st-marys-basilica',
      name: { el: 'Kościół Mariacki', en: 'St Mary\'s Basilica' },
      emoji: '🎺',
      lat: 50.0616,
      lng: 19.9389,
      radiusM: 40,
      riddle: {
        el: 'Δύο αδέρφια-πύργοι στέκονται δίπλα δίπλα, αλλά ο ένας μεγάλωσε πιο πολύ από τον άλλον. Από τον ψηλότερο, κάθε ώρα, μια μελωδία βγαίνει από ένα παραθυράκι και κόβεται απότομα, σαν να ξέχασε το τέλος της.',
        en: 'Two brother towers stand side by side, but one grew taller than the other. From the taller one, every hour, a tune floats out of a little window and breaks off suddenly, as if it forgot its ending.',
      },
      parentHint: {
        el: 'Είναι ο Kościół Mariacki (η Βασιλική της Παναγίας), στην ανατολική γωνία της πλατείας, 1 λεπτό από τα Sukiennice. Σταθείτε στην πλατεία Rynek, μπροστά στην κύρια πρόσοψη με τους δύο πύργους (η είσοδος επισκεπτών είναι από την πλευρά της μικρής πλατείας Mariacki). Για να ακούσετε το χεϊνάου, να είστε εκεί λίγο πριν χτυπήσει η ώρα. Το εσωτερικό έχει εισιτήριο· ο ξυλόγλυπτος βωμός ανοίγει τις πόρτες του το μεσημέρι, λίγο πριν τις 12.',
        en: 'It is the Kościół Mariacki, St Mary\'s Basilica, on the east corner of the square, 1 minute from the Sukiennice. Stand on the Rynek in front of the main façade with the two towers (the visitors\' entrance is round the side, on the little Mariacki square). To hear the hejnał, be there just before the hour strikes. The interior has a ticket; the carved wooden altarpiece is opened at noon, a little before 12.',
      },
      unlockQuestion: {
        question: { el: 'Η μελωδία του γρίφου παίζεται κάθε ώρα από τον πύργο. Με ποιο όργανο;', en: 'The tune in the riddle is played every hour from the tower. On which instrument?' },
        options: {
          el: ['Με βιολί', 'Με τρομπέτα', 'Με τύμπανο', 'Με πιάνο'],
          en: ['A violin', 'A trumpet', 'A drum', 'A piano'],
        },
        correct: 1,
        explanation: {
          el: 'Είναι μια τρομπέτα. Η μελωδία λέγεται hejnał (χεϊνάου) και την παίζει ένας αληθινός τρομπετίστας, μέρα και νύχτα, κάθε μία ώρα, εδώ και εκατοντάδες χρόνια.',
          en: 'It is a trumpet. The tune is called the hejnał, and a real trumpeter plays it, day and night, every single hour, and has done for hundreds of years.',
        },
      },
      onSite: {
        question: { el: 'Κοίταξε τους δύο πύργους από την πλατεία. Ποιος από τους δύο φοράει μια χρυσή κορόνα;', en: 'Look at the two towers from the square. Which one wears a golden crown?' },
        options: {
          el: ['Ο πιο ψηλός', 'Ο πιο κοντός', 'Και οι δύο', 'Κανένας από τους δύο'],
          en: ['The taller one', 'The shorter one', 'Both of them', 'Neither of them'],
        },
        correct: 0,
        explanation: {
          el: 'Η χρυσή κορόνα βρίσκεται στον ψηλότερο πύργο, που φτάνει τα 81 μέτρα, κάτω από τη μυτερή του κορυφή. Τοποθετήθηκε το 1666. Ο κοντός πύργος, 69 μέτρα, έχει τις καμπάνες.',
          en: 'The golden crown is on the taller tower, which reaches 81 metres, just below its pointed top. It was placed there in 1666. The shorter tower, 69 metres, holds the bells.',
        },
      },
      story: {
        el: 'Αυτή η εκκλησία χτίστηκε από τους εμπόρους της Κρακοβίας τον 14ο αιώνα, και οι δύο πύργοι της δεν είναι ίσοι: ο ένας έχει ύψος 81 μέτρα και ο άλλος 69. Ένας θρύλος λέει ότι τους έχτιζαν δύο αδέρφια που ανταγωνίζονταν ποιος θα τελειώσει πρώτος, και η ζήλια τους άφησε τον έναν πύργο για πάντα πιο κοντό. Από τον ψηλό πύργο, κάθε ώρα, ένας τρομπετίστας παίζει το hejnał από τέσσερα παράθυρα, προς τις τέσσερις κατευθύνσεις. Η μελωδία σταματάει πάντα απότομα στη μέση, για να θυμίζει έναν τρομπετίστα του 1241 που, λέει ο θρύλος, προειδοποιούσε την πόλη για εχθρούς και ένα βέλος τον έκοψε στη μέση της νότας. Μέσα στην εκκλησία, ο γλύπτης Veit Stoss (Βάιτ Στος) σκάλισε έναν ξυλόγλυπτο βωμό με πόρτες που ανοίγουν, ψηλό όσο ένα τετραώροφο σπίτι, με περίπου 200 φιγούρες. Χρειάστηκε περίπου δώδεκα χρόνια για να τον τελειώσει.',
        en: 'This church was built by the merchants of Kraków in the 1300s, and its two towers are not equal: one is 81 metres tall and the other 69. A legend says two brothers built them, racing to finish first, and their jealousy left one tower shorter for ever. From the tall tower, every hour, a trumpeter plays the hejnał from four windows, towards the four directions. The tune always stops suddenly in the middle, in memory of a trumpeter of 1241 who, the legend says, was warning the city of enemies when an arrow cut him off mid-note. Inside the church, the sculptor Veit Stoss carved a wooden altarpiece with doors that open, as tall as a four-storey house, with about 200 figures. It took him about twelve years to finish it.',
      },
      didYouKnow: {
        el: 'Το μεσημεριανό hejnał μεταδίδεται ζωντανά από το πολωνικό ραδιόφωνο κάθε μέρα από το 1927, και είναι πιθανότατα το παλαιότερο ραδιοφωνικό σήμα στον κόσμο που παίζεται ακόμη ζωντανά. Οι τρομπετίστες είναι πυροσβέστες που κάνουν βάρδιες στον πύργο, γιατί ο πύργος ήταν παλιά και παρατηρητήριο για πυρκαγιές. Στον πλήρη θρύλο ο ένας αδερφός χτύπησε τον άλλον με ένα μαχαίρι από ζήλια· ένα σιδερένιο μαχαίρι κρέμεται ακόμη σε αλυσίδα μέσα στο πέρασμα των Sukiennice.',
        en: 'The noon hejnał has been broadcast live by Polish radio every day since 1927, making it probably the oldest radio signal in the world still played live. The trumpeters are firefighters who take shifts in the tower, because the tower once also served as a fire lookout. In the full legend one brother struck the other with a knife out of jealousy; an iron knife still hangs on a chain inside the passage of the Sukiennice.',
      },
      quiz: [
        {
          q: { el: 'Γιατί η μελωδία της τρομπέτας σταματάει ξαφνικά;', en: 'Why does the trumpet tune stop suddenly?' },
          options: {
            el: ['Γιατί ο τρομπετίστας ξεχνάει τη συνέχεια', 'Για να θυμίζει τον τρομπετίστα του 1241 που χτυπήθηκε από βέλος', 'Γιατί τελειώνει η ανάσα του', 'Γιατί χτυπάει το ρολόι'],
            en: ['Because the trumpeter forgets the rest', 'To remember the trumpeter of 1241 who was hit by an arrow', 'Because he runs out of breath', 'Because the clock strikes'],
          },
          correct: 1,
          explanation: {
            el: 'Ο θρύλος λέει ότι το 1241 ένας τρομπετίστας προειδοποιούσε την πόλη για εχθρούς και ένα βέλος τον σταμάτησε στη μέση της νότας. Η μελωδία κόβεται στο ίδιο σημείο μέχρι σήμερα.',
            en: 'The legend says that in 1241 a trumpeter was warning the city of enemies when an arrow stopped him mid-note. The tune still breaks off at the same spot today.',
          },
        },
        {
          q: { el: 'Προς πόσες κατευθύνσεις παίζεται το hejnał κάθε ώρα;', en: 'Towards how many directions is the hejnał played every hour?' },
          options: {
            el: ['Μία', 'Δύο', 'Τέσσερις', 'Δέκα'],
            en: ['One', 'Two', 'Four', 'Ten'],
          },
          correct: 2,
          explanation: {
            el: 'Ο τρομπετίστας παίζει τη μελωδία τέσσερις φορές, από τέσσερα παράθυρα, ώστε να την ακούσει όλη η πόλη.',
            en: 'The trumpeter plays the tune four times, from four windows, so the whole city can hear it.',
          },
        },
        {
          q: { el: 'Τι σκάλισε ο Veit Stoss μέσα στην εκκλησία;', en: 'What did Veit Stoss carve inside the church?' },
          options: {
            el: ['Έναν τεράστιο ξυλόγλυπτο βωμό με περίπου 200 φιγούρες', 'Ένα άγαλμα δράκου', 'Ένα εκκρεμές', 'Ένα πέτρινο πηγάδι'],
            en: ['A huge wooden altarpiece with about 200 figures', 'A dragon statue', 'A pendulum', 'A stone well'],
          },
          correct: 0,
          explanation: {
            el: 'Ο Veit Stoss σκάλισε τον τεράστιο ξυλόγλυπτο βωμό, ψηλό όσο ένα τετραώροφο σπίτι, με περίπου 200 φιγούρες, και χρειάστηκε περίπου δώδεκα χρόνια.',
            en: 'Veit Stoss carved the enormous wooden altarpiece, as tall as a four-storey house, with about 200 figures, and it took him about twelve years.',
          },
        },
      ],
    },

    // ── 4. Wieża Ratuszowa ────────────────────────────────────────────────────
    {
      id: 'town-hall-tower',
      name: { el: 'Wieża Ratuszowa', en: 'Town Hall Tower' },
      emoji: '🗼',
      lat: 50.0615,
      lng: 19.9364,
      radiusM: 40,
      riddle: {
        el: 'Ένας ψηλός πύργος στέκεται ολομόναχος, γιατί το σπίτι που ανήκε κάποτε δίπλα του εξαφανίστηκε. Αν κοιτάξεις προσεκτικά, γέρνει λιγάκι, και δίπλα του ένα γιγάντιο μπρούντζινο κεφάλι κοιμάται στο πλακόστρωτο.',
        en: 'A tall tower stands all alone, because the house it once belonged to has vanished. Look carefully and it leans a little, and next to it a giant bronze head sleeps on the paving stones.',
      },
      parentHint: {
        el: 'Είναι η Wieża Ratuszowa (ο Πύργος του Δημαρχείου), στη δυτική πλευρά της πλατείας. Από την εκκλησία περάστε μέσα από το πέρασμα των Sukiennice, 2 λεπτά. Το μπρούντζινο κεφάλι βρίσκεται στο πλακόστρωτο λίγα βήματα από τον πύργο.',
        en: 'It is the Wieża Ratuszowa, the Town Hall Tower, on the west side of the square. From the church walk through the passage of the Sukiennice, 2 minutes. The bronze head lies on the paving a few steps from the tower.',
      },
      unlockQuestion: {
        question: { el: 'Αυτός ο πύργος γέρνει λιγάκι. Ποιος διάσημος πύργος στην Ιταλία γέρνει πολύ περισσότερο;', en: 'This tower leans a little. Which famous tower in Italy leans much, much more?' },
        options: {
          el: ['Ο Πύργος του Λονδίνου', 'Ο Πύργος του Άιφελ', 'Ο Πύργος της Πίζας', 'Ο Πύργος της Βαβέλ'],
          en: ['The Tower of London', 'The Eiffel Tower', 'The Leaning Tower of Pisa', 'The Tower of Babel'],
        },
        correct: 2,
        explanation: {
          el: 'Ο Πύργος της Πίζας γέρνει σχεδόν τέσσερα μέτρα από την κορυφή του. Ο πύργος της Κρακοβίας γέρνει μόνο 55 εκατοστά, όσο περίπου ένα μπράτσο, γι\' αυτό πρέπει να κοιτάξεις πολύ προσεκτικά!',
          en: 'The Tower of Pisa leans almost four metres at the top. The Kraków tower leans only 55 centimetres, about the length of your arm, so you have to look very carefully!',
        },
      },
      onSite: {
        question: { el: 'Πλησίασε το μεγάλο μπρούντζινο κεφάλι που είναι ξαπλωμένο στην πλατεία. Τι είναι τυλιγμένο γύρω από το πρόσωπό του;', en: 'Go up to the big bronze head lying on the square. What is wrapped around its face?' },
        options: {
          el: ['Μια χρυσή κορόνα', 'Ταινίες σαν επίδεσμοι', 'Ένα κράνος ιππότη', 'Ένα κασκόλ'],
          en: ['A golden crown', 'Strips like bandages', 'A knight\'s helmet', 'A scarf'],
        },
        correct: 1,
        explanation: {
          el: 'Το κεφάλι έχει επιδέσμους στα μάτια. Λέγεται Eros Bendato, ο «Δεμένος Έρωτας», και το έφτιαξε ο γλύπτης Igor Mitoraj το 2005. Είναι κούφιο: μπορείς να μπεις μέσα και να κοιτάξεις έξω από τα μάτια του!',
          en: 'The head has bandages over its eyes. It is called Eros Bendato, “Eros Bound”, and was made by the sculptor Igor Mitoraj in 2005. It is hollow: you can climb inside and look out through its eyes!',
        },
      },
      story: {
        el: 'Κάποτε σε αυτή τη γωνία στεκόταν το δημαρχείο της Κρακοβίας, ένα μεγάλο κτίριο με αίθουσες, φυλακές στο υπόγειο και ένα πανδοχείο. Το 1820 οι κάτοικοι το γκρέμισαν, γιατί ήταν παλιό και χαλασμένο, και άφησαν μόνο τον πύργο του, που ήταν πολύ όμορφος για να χαθεί. Ο πύργος είναι 70 μέτρα ψηλός και χτίστηκε γύρω στο 1300 από τούβλα και πέτρα. Το 1703 μια τρομερή καταιγίδα τον ταρακούνησε, και από τότε γέρνει 55 εκατοστά προς τη μία πλευρά, όμως στέκεται γερά. Μέσα του 110 σκαλιά οδηγούν σε μια θέα πάνω από όλη την πλατεία. Δίπλα του, από το 2005, ξαπλώνει ένα τεράστιο μπρούντζινο κεφάλι με δεμένα μάτια, έργο του γλύπτη Igor Mitoraj, και τα παιδιά της πόλης το χρησιμοποιούν σαν κρυψώνα.',
        en: 'Once the town hall of Kraków stood on this corner, a big building with council rooms, prison cells in the cellar and an inn. In 1820 the townspeople pulled it down because it was old and crumbling, leaving only its tower, which was too beautiful to lose. The tower is 70 metres tall and was built around 1300 of brick and stone. In 1703 a terrible storm shook it, and ever since it has leaned 55 centimetres to one side, yet it still stands firm. Inside, 110 steps lead to a view over the whole square. Beside it, since 2005, lies a huge bronze head with bandaged eyes by the sculptor Igor Mitoraj, and the children of the city use it as a hiding place.',
      },
      didYouKnow: {
        el: 'Το υπόγειο του πύργου, όπου παλιά ήταν φυλακή και μετά ταβέρνα, φιλοξενεί σήμερα ένα μικρό θέατρο και ένα καφέ. Ο γλύπτης Igor Mitoraj, Πολωνός που έζησε στην Ιταλία, χάρισε το κεφάλι στην πόλη· ο Έρωτας με τα δεμένα μάτια είναι το πιο φωτογραφημένο σύγχρονο γλυπτό της Κρακοβίας, και οι πολίτες συζήτησαν για χρόνια αν ταιριάζει σε μια μεσαιωνική πλατεία.',
        en: 'The cellar of the tower, once a prison and later a tavern, now houses a small theatre and a café. The sculptor Igor Mitoraj, a Pole who lived in Italy, gave the head to the city; the blindfolded Eros is Kraków\'s most photographed modern sculpture, and citizens argued for years about whether it belonged on a medieval square.',
      },
      quiz: [
        {
          q: { el: 'Τι απέγινε το υπόλοιπο δημαρχείο;', en: 'What happened to the rest of the town hall?' },
          options: {
            el: ['Κάηκε από έναν δράκο', 'Γκρεμίστηκε το 1820', 'Το πήρε το ποτάμι', 'Μεταφέρθηκε στη Βαρσοβία'],
            en: ['A dragon burned it', 'It was pulled down in 1820', 'The river carried it away', 'It was moved to Warsaw'],
          },
          correct: 1,
          explanation: {
            el: 'Το 1820 το παλιό δημαρχείο γκρεμίστηκε, γιατί ήταν χαλασμένο. Ο πύργος σώθηκε επειδή ήταν πολύ όμορφος.',
            en: 'In 1820 the old town hall was pulled down because it was crumbling. The tower was saved because it was too beautiful to lose.',
          },
        },
        {
          q: { el: 'Γιατί γέρνει ο πύργος;', en: 'Why does the tower lean?' },
          options: {
            el: ['Τον έχτισαν στραβά επίτηδες', 'Από έναν σεισμό', 'Τον έσπρωξε ο δράκος', 'Από μια μεγάλη καταιγίδα το 1703'],
            en: ['It was built crooked on purpose', 'Because of an earthquake', 'The dragon pushed it', 'Because of a big storm in 1703'],
          },
          correct: 3,
          explanation: {
            el: 'Μια δυνατή καταιγίδα το 1703 ταρακούνησε τον πύργο. Από τότε γέρνει 55 εκατοστά, αλλά στέκεται γερά.',
            en: 'A violent storm in 1703 shook the tower. Since then it has leaned 55 centimetres, but it stands firm.',
          },
        },
        {
          q: { el: 'Τι είναι το μπρούντζινο γλυπτό δίπλα στον πύργο;', en: 'What is the bronze sculpture next to the tower?' },
          options: {
            el: ['Ένα άλογο', 'Ένα καράβι', 'Ένα γιγάντιο κεφάλι ξαπλωμένο στο πλάι', 'Μια κουκουβάγια'],
            en: ['A horse', 'A ship', 'A giant head lying on its side', 'An owl'],
          },
          correct: 2,
          explanation: {
            el: 'Είναι ένα τεράστιο μπρούντζινο κεφάλι με δεμένα μάτια, έργο του Igor Mitoraj από το 2005. Είναι κούφιο και τα παιδιά μπαίνουν μέσα.',
            en: 'It is a huge bronze head with bandaged eyes, made by Igor Mitoraj in 2005. It is hollow and children climb inside.',
          },
        },
      ],
    },

    // ── 5. Collegium Maius ────────────────────────────────────────────────────
    {
      id: 'collegium-maius',
      name: { el: 'Collegium Maius', en: 'Collegium Maius' },
      emoji: '🎓',
      lat: 50.0616,
      lng: 19.9334,
      radiusM: 60,
      riddle: {
        el: 'Πίσω από μια πόρτα σε έναν ήσυχο δρόμο κρύβεται μια αυλή με καμάρες, όπου πριν από 500 χρόνια ένας νεαρός φοιτητής άρχισε να αναρωτιέται αν η Γη στέκεται ακίνητη. Πέντε φορές τη μέρα ένα ρολόι εκεί ανοίγει τις πόρτες του και ξύλινες φιγούρες βγαίνουν βόλτα με μουσική.',
        en: 'Behind a door on a quiet street hides a courtyard of arches, where 500 years ago a young student began to wonder whether the Earth really stands still. Five times a day a clock there opens its doors and wooden figures go for a walk to music.',
      },
      parentHint: {
        el: 'Είναι το Collegium Maius (Κολέγκιουμ Μάιους, το «Μεγάλο Κολέγιο») του Πανεπιστημίου Jagiellonian, στη γωνία των οδών Jagiellońska και św. Anny. Από τον πύργο περπατήστε 4 λεπτά δυτικά, από την οδό św. Anny, και μπείτε στην αυλή από την πόρτα της Jagiellońska 15. Η αυλή είναι ελεύθερη· το μουσείο έχει εισιτήριο. Το ρολόι παίζει στις 9, 11, 13, 15 και 17.',
        en: 'It is the Collegium Maius, the “Great College” of the Jagiellonian University, on the corner of Jagiellońska and św. Anny streets. From the tower walk 4 minutes west along św. Anny street and enter the courtyard through the door at Jagiellońska 15. The courtyard is free; the museum has a ticket. The clock plays at 9, 11, 13, 15 and 17.',
      },
      unlockQuestion: {
        question: { el: 'Ο φοιτητής του γρίφου είναι ο Κοπέρνικος. Τι κατάλαβε αργότερα, που άλλαξε τον τρόπο που βλέπουμε τον ουρανό;', en: 'The student in the riddle is Copernicus. What did he later work out, which changed the way we see the sky?' },
        options: {
          el: ['Ότι η Γη είναι επίπεδη', 'Ότι το φεγγάρι είναι από τυρί', 'Ότι ο Ήλιος γυρίζει γύρω από την Κρακοβία', 'Ότι η Γη γυρίζει γύρω από τον Ήλιο'],
          en: ['That the Earth is flat', 'That the Moon is made of cheese', 'That the Sun goes round Kraków', 'That the Earth goes round the Sun'],
        },
        correct: 3,
        explanation: {
          el: 'Ο Κοπέρνικος έδειξε ότι η Γη δεν είναι το κέντρο του κόσμου: γυρίζει γύρω από τον Ήλιο μαζί με τους άλλους πλανήτες. Τότε οι περισσότεροι πίστευαν το αντίθετο, και χρειάστηκε πολύ θάρρος για να το πει.',
          en: 'Copernicus showed that the Earth is not the centre of the universe: it travels round the Sun together with the other planets. Most people then believed the opposite, and it took great courage to say it.',
        },
      },
      onSite: {
        question: { el: 'Μπες στην αυλή και κοίταξε στη μέση της. Τι υπάρχει εκεί;', en: 'Step into the courtyard and look at its middle. What is there?' },
        options: {
          el: ['Ένα σιντριβάνι με ψάρια', 'Ένα πέτρινο πηγάδι', 'Ένα άγαλμα του Κοπέρνικου', 'Ένα μεγάλο δέντρο'],
          en: ['A fountain with fish', 'A stone well', 'A statue of Copernicus', 'A big tree'],
        },
        correct: 1,
        explanation: {
          el: 'Στη μέση της αυλής υπάρχει ένα παλιό πέτρινο πηγάδι. Από εδώ έπαιρναν νερό οι καθηγητές και οι φοιτητές που ζούσαν στο κτίριο. Γύρω γύρω, οι καμάρες κρατούν τον διάδρομο του πάνω ορόφου.',
          en: 'In the middle of the courtyard is an old stone well. The professors and students who lived in the building drew their water here. All around, the arches hold up the gallery of the upper floor.',
        },
      },
      story: {
        el: 'Το 1364 ο βασιλιάς Kazimierz ο Μέγας (Καζίμιεζ) ίδρυσε στην Κρακοβία το πρώτο πανεπιστήμιο της Πολωνίας. Το 1400 ο βασιλιάς Władysław Jagiełło (Βουαντίσουαφ Γιαγκιέουο) το ξανάνοιξε πιο μεγάλο, με τα κοσμήματα που είχε αφήσει η βασίλισσα Jadwiga, και αγόρασε αυτό το κτίριο για να μένουν και να διδάσκουν οι καθηγητές. Γι\' αυτό το πανεπιστήμιο λέγεται σήμερα Jagiellonian (Γιαγκελόνιο). Γύρω στο 1491 ήρθε εδώ για να σπουδάσει ένας νεαρός από την πόλη Toruń, ο Nicolaus Copernicus (Νικόλαος Κοπέρνικος), που αργότερα έδειξε ότι η Γη γυρίζει γύρω από τον Ήλιο. Στην αυλή με τις καμάρες υπάρχει ένα πηγάδι και ένα ρολόι που πέντε φορές τη μέρα βγάζει μια παρέλαση από ξύλινες φιγούρες με μουσική. Μέσα, το μουσείο φυλάει παλιά αστρονομικά όργανα και μια πολύ παλιά υδρόγειο σφαίρα.',
        en: 'In 1364 King Casimir the Great (Kazimierz in Polish) founded Poland\'s first university in Kraków. In 1400 King Władysław Jagiełło opened it again, bigger, with the jewels left by Queen Jadwiga, and bought this building so that the professors could live and teach here. That is why the university is called the Jagiellonian today. Around 1491 a young man from the town of Toruń came here to study: Nicolaus Copernicus, who later showed that the Earth goes round the Sun. In the arcaded courtyard there is a well and a clock that five times a day sends out a parade of wooden figures to music. Inside, the museum keeps old astronomical instruments and a very old globe.',
      },
      didYouKnow: {
        el: 'Το πανεπιστήμιο ήταν το δεύτερο σε όλη την κεντρική Ευρώπη, μετά την Πράγα. Η «Σφαίρα του Γιαγκελόνιου» στο μουσείο, φτιαγμένη γύρω στο 1510, είναι από τις πρώτες υδρόγειους σφαίρες στον κόσμο που δείχνουν την Αμερική, αν και τη βάζει σε λάθος θέση. Το ρολόι με την παρέλαση των φιγούρων είναι πολύ πιο νέο απ\' όσο φαίνεται: τοποθετήθηκε το 2000, και οι φιγούρες βγαίνουν υπό τους ήχους του φοιτητικού ύμνου Gaudeamus igitur.',
        en: 'The university was the second in all of central Europe, after Prague. The “Jagiellonian Globe” in the museum, made around 1510, is one of the earliest globes in the world to show America, although it puts it in the wrong place. The clock with the parade of figures is far younger than it looks: it was installed in 2000, and the figures come out to the sound of the student anthem Gaudeamus igitur.',
      },
      quiz: [
        {
          q: { el: 'Ποιος διάσημος φοιτητής σπούδασε εδώ γύρω στο 1491;', en: 'Which famous student studied here around 1491?' },
          options: {
            el: ['Ο Σοπέν', 'Ο Κοπέρνικος', 'Η Μαρία Κιουρί', 'Ο Kazimierz ο Μέγας'],
            en: ['Chopin', 'Copernicus', 'Marie Curie', 'Casimir the Great'],
          },
          correct: 1,
          explanation: {
            el: 'Ο Νικόλαος Κοπέρνικος ήρθε εδώ γύρω στο 1491 από την πόλη Toruń και αργότερα έδειξε ότι η Γη γυρίζει γύρω από τον Ήλιο.',
            en: 'Nicolaus Copernicus came here around 1491 from the town of Toruń and later showed that the Earth goes round the Sun.',
          },
        },
        {
          q: { el: 'Ποιος ίδρυσε το πανεπιστήμιο και πότε;', en: 'Who founded the university, and when?' },
          options: {
            el: ['Ο Κοπέρνικος το 1490', 'Η βασίλισσα Jadwiga το 1900', 'Ο δράκος το 1000', 'Ο βασιλιάς Kazimierz ο Μέγας το 1364'],
            en: ['Copernicus in 1490', 'Queen Jadwiga in 1900', 'The dragon in 1000', 'King Casimir the Great in 1364'],
          },
          correct: 3,
          explanation: {
            el: 'Ο βασιλιάς Kazimierz ο Μέγας ίδρυσε το πανεπιστήμιο το 1364. Το 1400 ο Jagiełło το ξανάνοιξε πιο μεγάλο με τα κοσμήματα της βασίλισσας Jadwiga.',
            en: 'King Casimir the Great founded the university in 1364. In 1400 Jagiełło reopened it, bigger, with Queen Jadwiga\'s jewels.',
          },
        },
        {
          q: { el: 'Τι γίνεται στο ρολόι της αυλής πέντε φορές τη μέρα;', en: 'What happens at the courtyard clock five times a day?' },
          options: {
            el: ['Ξύλινες φιγούρες κάνουν παρέλαση με μουσική', 'Πετάει έξω ένα περιστέρι', 'Βγαίνει φωτιά', 'Χτυπάει η μεγάλη καμπάνα Sigismund'],
            en: ['Wooden figures parade to music', 'A pigeon flies out', 'Fire comes out', 'The great Sigismund Bell rings'],
          },
          correct: 0,
          explanation: {
            el: 'Στις 9, 11, 13, 15 και 17 το ρολόι ανοίγει και ξύλινες φιγούρες, βασιλιάδες και καθηγητές, περνούν με μουσική.',
            en: 'At 9, 11, 13, 15 and 17 the clock opens and wooden figures, kings and professors, parade past to music.',
          },
        },
      ],
    },

    // ── 6. Kościół św. Piotra i Pawła ─────────────────────────────────────────
    {
      id: 'st-peter-and-paul',
      name: { el: 'Kościół św. Piotra i Pawła', en: 'Church of Saints Peter and Paul' },
      emoji: '⛪',
      lat: 50.0575,
      lng: 19.9388,
      radiusM: 60,
      riddle: {
        el: 'Μια σειρά από πέτρινους άντρες στέκονται πάνω σε ένα κάγκελο, σαν φρουροί, μπροστά από μια εκκλησία με μεγάλο τρούλο. Μέσα της ένα βαρίδι κρέμεται από πολύ ψηλά και κουνιέται αργά, για να αποδείξει ότι ολόκληρη η Γη γυρίζει.',
        en: 'A row of stone men stand on a railing, like guards, in front of a church with a big dome. Inside, a weight hangs from very high up and swings slowly, to prove that the whole Earth is turning.',
      },
      parentHint: {
        el: 'Είναι ο Kościół św. Piotra i Pawła (η Εκκλησία των Αγίων Πέτρου και Παύλου) στην οδό Grodzka. Από το Collegium Maius γυρίστε στην πλατεία και κατεβείτε την οδό Grodzka προς τον νότο για 8 λεπτά· η εκκλησία με τα αγάλματα είναι στα αριστερά σας, αμέσως μετά τη μικρή πλατεία Wszystkich Świętych. Σταθείτε στο πεζοδρόμιο μπροστά από το κάγκελο.',
        en: 'It is the Kościół św. Piotra i Pawła, the Church of Saints Peter and Paul, on Grodzka street. From the Collegium Maius return to the square and walk south down Grodzka street for 8 minutes; the church with the statues is on your left, just after the little Wszystkich Świętych square. Stand on the pavement in front of the railing.',
      },
      unlockQuestion: {
        question: { el: 'Η εκκλησία βρίσκεται στην οδό Grodzka, τον δρόμο που περπατούσαν οι βασιλιάδες. Πού οδηγεί αυτός ο δρόμος;', en: 'The church stands on Grodzka street, the road the kings walked along. Where does this road lead?' },
        options: {
          el: ['Στη θάλασσα', 'Στο κάστρο Wawel, πάνω στον λόφο', 'Στον σιδηροδρομικό σταθμό', 'Στο αεροδρόμιο'],
          en: ['To the sea', 'To Wawel Castle, up on the hill', 'To the railway station', 'To the airport'],
        },
        correct: 1,
        explanation: {
          el: 'Η οδός Grodzka είναι το τελευταίο κομμάτι του Βασιλικού Δρόμου: αρχίζει από την πλατεία και τελειώνει στα πόδια του λόφου Wawel, όπου έμεναν οι βασιλιάδες.',
          en: 'Grodzka street is the last stretch of the Royal Road: it starts at the square and ends at the foot of Wawel hill, where the kings lived.',
        },
      },
      onSite: {
        question: { el: 'Μέτρησε τα αγάλματα πάνω στο κάγκελο μπροστά από την εκκλησία. Πόσα είναι;', en: 'Count the statues on the railing in front of the church. How many are there?' },
        options: {
          el: ['Έξι', 'Οκτώ', 'Δέκα', 'Δώδεκα'],
          en: ['Six', 'Eight', 'Ten', 'Twelve'],
        },
        correct: 3,
        explanation: {
          el: 'Είναι δώδεκα, όσοι και οι απόστολοι, οι μαθητές του Χριστού. Τα πρώτα αγάλματα στήθηκαν εδώ γύρω στο 1720, αλλά ο καιρός τα χάλασε, και αυτά που βλέπεις είναι πιστά αντίγραφα.',
          en: 'There are twelve, one for each of the apostles, the followers of Christ. The first statues were put here around 1720, but the weather wore them away, and the ones you see are faithful copies.',
        },
      },
      story: {
        el: 'Αυτή η εκκλησία χτίστηκε από το 1597 ως το 1619 και ήταν η πρώτη στην Κρακοβία σε ένα καινούργιο, εντυπωσιακό στιλ που λέγεται μπαρόκ, με μεγάλο τρούλο, καμπύλες και πολλά στολίδια. Μπροστά της, πάνω στο κάγκελο, στέκονται δώδεκα αγάλματα των αποστόλων, το καθένα με κάτι στο χέρι που δείχνει ποιος είναι: ο Πέτρος, για παράδειγμα, κρατάει κλειδιά. Τα αγάλματα που βλέπεις είναι αντίγραφα, γιατί τα παλιά, από το 1720 περίπου, έλιωσαν από τη βροχή. Μέσα στην εκκλησία κρέμεται από τον τρούλο ένα εκκρεμές του Φουκώ, ένα βαρίδι σε ένα σκοινί μήκους 46 μέτρων. Όταν κουνιέται, φαίνεται σιγά σιγά να αλλάζει κατεύθυνση, αλλά στην πραγματικότητα αυτό που γυρίζει από κάτω του είναι η Γη! Έτσι απέδειξε ο Γάλλος επιστήμονας Léon Foucault το 1851 ότι ο πλανήτης μας περιστρέφεται.',
        en: 'This church was built between 1597 and 1619, and it was the first in Kraków in a grand new style called baroque, with a big dome, curves and lots of decoration. In front of it, on the railing, stand twelve statues of the apostles, each holding something that shows who he is: Peter, for example, carries keys. The statues you see are copies, because the old ones, from around 1720, were worn away by rain. Inside the church a Foucault pendulum hangs from the dome, a weight on a rope 46 metres long. As it swings, it seems slowly to change direction, but really it is the Earth underneath that is turning! That is how the French scientist Léon Foucault proved in 1851 that our planet spins.',
      },
      didYouKnow: {
        el: 'Το εκκρεμές λειτουργεί μόνο σε ειδικές επιδείξεις, συνήθως κάποιες Πέμπτες, με έναν φυσικό να εξηγεί το πείραμα· ρωτήστε στην είσοδο ή δείτε το πρόγραμμα. Στην κρύπτη της εκκλησίας βρίσκεται ο τάφος του Piotr Skarga, διάσημου ιεροκήρυκα του 16ου αιώνα, και η ίδια η εκκλησία χτίστηκε για το τάγμα των Ιησουιτών, που έφερε το μπαρόκ στην Πολωνία.',
        en: 'The pendulum is only set swinging at special demonstrations, usually on certain Thursdays, with a physicist explaining the experiment; ask at the entrance or check the schedule. The crypt holds the tomb of Piotr Skarga, a famous preacher of the 16th century, and the church itself was built for the Jesuit order, which brought the baroque style to Poland.',
      },
      quiz: [
        {
          q: { el: 'Πόσα αγάλματα αποστόλων στέκονται στο κάγκελο;', en: 'How many apostle statues stand on the railing?' },
          options: {
            el: ['Έξι', 'Δέκα', 'Δώδεκα', 'Είκοσι'],
            en: ['Six', 'Ten', 'Twelve', 'Twenty'],
          },
          correct: 2,
          explanation: {
            el: 'Δώδεκα αγάλματα, ένα για κάθε απόστολο. Το καθένα κρατάει κάτι που δείχνει ποιος είναι, όπως ο Πέτρος με τα κλειδιά.',
            en: 'Twelve statues, one for each apostle. Each holds something that shows who he is, like Peter with his keys.',
          },
        },
        {
          q: { el: 'Τι αποδεικνύει το εκκρεμές μέσα στην εκκλησία;', en: 'What does the pendulum inside the church prove?' },
          options: {
            el: ['Ότι η εκκλησία γέρνει', 'Ότι η Γη γυρίζει', 'Ότι ο τρούλος είναι ψηλός', 'Ότι το σκοινί είναι γερό'],
            en: ['That the church leans', 'That the Earth turns', 'That the dome is tall', 'That the rope is strong'],
          },
          correct: 1,
          explanation: {
            el: 'Το εκκρεμές φαίνεται να αλλάζει κατεύθυνση, αλλά στην πραγματικότητα γυρίζει η Γη από κάτω του. Το απέδειξε ο Léon Foucault το 1851.',
            en: 'The pendulum seems to change direction, but really the Earth is turning beneath it. Léon Foucault proved this in 1851.',
          },
        },
        {
          q: { el: 'Η εκκλησία ήταν η πρώτη στην Κρακοβία σε ποιο στιλ;', en: 'The church was the first in Kraków in which style?' },
          options: {
            el: ['Γοτθικό', 'Μοντέρνο, από γυαλί', 'Αιγυπτιακό', 'Μπαρόκ'],
            en: ['Gothic', 'Modern, made of glass', 'Egyptian', 'Baroque'],
          },
          correct: 3,
          explanation: {
            el: 'Ήταν η πρώτη εκκλησία μπαρόκ της Κρακοβίας, με μεγάλο τρούλο, καμπύλες και πολλά στολίδια. Τελείωσε το 1619.',
            en: 'It was the first baroque church in Kraków, with a big dome, curves and lots of decoration. It was finished in 1619.',
          },
        },
      ],
    },

    // ── 7. Wawel ──────────────────────────────────────────────────────────────
    {
      id: 'wawel-courtyard',
      name: { el: 'Wawel', en: 'Wawel Castle Hill' },
      emoji: '👑',
      lat: 50.0544,
      lng: 19.9354,
      radiusM: 80,
      riddle: {
        el: 'Πάνω σε έναν λόφο δίπλα στο ποτάμι, οι βασιλιάδες φορούσαν την κορόνα τους σε μια εκκλησία με μια χρυσή στέγη και μια καμπάνα τόσο βαριά που χρειάζεται δώδεκα ανθρώπους για να χτυπήσει. Δίπλα στην πόρτα της κρέμονται κόκαλα σε αλυσίδες, και λένε πως όσο κρέμονται εκεί, η πόλη είναι ασφαλής.',
        en: 'On a hill beside the river, kings put on their crowns in a church with a golden roof and a bell so heavy it takes twelve people to ring it. Beside its door hang bones on chains, and they say that as long as they hang there, the city is safe.',
      },
      parentHint: {
        el: 'Είναι ο λόφος Wawel (Βάβελ), με τον καθεδρικό ναό και το βασιλικό κάστρο. Από την εκκλησία συνεχίστε την οδό Grodzka ως το τέλος της, 5 λεπτά, και ανεβείτε την πλακόστρωτη ράμπα στα αριστερά ως την πύλη· άλλα 3 λεπτά. Σταθείτε στην πλατεία μπροστά από την είσοδο του καθεδρικού. Ο λόφος και οι αυλές είναι ελεύθερα· ο καθεδρικός, ο πύργος της καμπάνας και τα δωμάτια του κάστρου έχουν εισιτήριο.',
        en: 'It is Wawel hill, with the cathedral and the royal castle. From the church continue along Grodzka street to its end, 5 minutes, and climb the cobbled ramp on your left up to the gate, another 3 minutes. Stand in the square in front of the cathedral entrance. The hill and its courtyards are free; the cathedral, the bell tower and the castle rooms have tickets.',
      },
      unlockQuestion: {
        question: { el: 'Σύμφωνα με τον θρύλο, τι ζούσε σε μια σπηλιά κάτω από αυτόν τον λόφο;', en: 'According to the legend, what lived in a cave under this hill?' },
        options: {
          el: ['Ένας γίγαντας', 'Ένας δράκος', 'Μια αρκούδα', 'Ένας πειρατής'],
          en: ['A giant', 'A dragon', 'A bear', 'A pirate'],
        },
        correct: 1,
        explanation: {
          el: 'Ο θρύλος λέει ότι στη σπηλιά κάτω από τον λόφο ζούσε ο Δράκος του Wawel, που τρόμαζε όλη την πόλη μέχρι που ένας έξυπνος τσαγκάρης τον ξεγέλασε. Θα τον συναντήσεις στον επόμενο σταθμό!',
          en: 'The legend says the Wawel Dragon lived in the cave under the hill and frightened the whole town, until a clever shoemaker outwitted him. You will meet him at the next spot!',
        },
      },
      onSite: {
        question: { el: 'Στάσου μπροστά στον καθεδρικό ναό και μέτρησε τους πύργους του. Πόσοι είναι;', en: 'Stand in front of the cathedral and count its towers. How many are there?' },
        options: {
          el: ['Ένας', 'Δύο', 'Τρεις', 'Πέντε'],
          en: ['One', 'Two', 'Three', 'Five'],
        },
        correct: 2,
        explanation: {
          el: 'Ο καθεδρικός έχει τρεις πύργους: τον Πύργο του Sigismund με τη μεγάλη καμπάνα, τον Πύργο του Ρολογιού με τη μυτερή κορυφή και τον Πύργο των Ασημένιων Καμπανών. Και κοίτα ψηλά στα αριστερά της πόρτας: τα κόκαλα του θρύλου κρέμονται σε αλυσίδα!',
          en: 'The cathedral has three towers: the Sigismund Tower with the great bell, the Clock Tower with the pointed top, and the Silver Bells Tower. And look up to the left of the door: the bones of the legend hang there on a chain!',
        },
      },
      story: {
        el: 'Για εκατοντάδες χρόνια αυτός ο λόφος ήταν το σπίτι των βασιλιάδων της Πολωνίας: στον καθεδρικό ναό στέφονταν, και εδώ αναπαύονται μέχρι σήμερα. Σε έναν από τους πύργους, τον Πύργο του Sigismund, κρέμεται η καμπάνα Sigismund (Ζίγκμουντ) από το 1520, που ζυγίζει περίπου έντεκα τόνους, όσο δύο ελέφαντες. Χτυπάει μόνο τις πιο σπουδαίες μέρες, με δώδεκα περίπου ανθρώπους να τραβούν τα σκοινιά της. Δίπλα λάμπει ο χρυσός τρούλος του παρεκκλησιού του Sigismund, που έχτισαν Ιταλοί τεχνίτες. Στην είσοδο κρέμονται σε αλυσίδα τεράστια κόκαλα: οι παλιοί τα έλεγαν κόκαλα του δράκου και έλεγαν πως όσο κρέμονται εκεί, η πόλη είναι ασφαλής, αν και στην πραγματικότητα είναι από μαμούθ και φάλαινα. Πίσω από τον ναό ανοίγεται η αυλή του κάστρου με τρεις ορόφους από καμάρες, όπου οι βασιλιάδες έκαναν γιορτές και τουρνουά.',
        en: 'For hundreds of years this hill was the home of the kings of Poland: in the cathedral they were crowned, and here they rest to this day. In one of the towers, the Sigismund Tower, hangs the Sigismund Bell from 1520, weighing about eleven tons, as much as two elephants. It rings only on the most important days, with about a dozen people pulling its ropes. Nearby shines the golden dome of the Sigismund Chapel, built by Italian craftsmen. At the entrance hang huge bones on a chain: people long ago called them dragon bones and said the city is safe as long as they hang there, though really they come from a mammoth and a whale. Behind the cathedral opens the castle courtyard with three floors of arches, where kings held feasts and tournaments.',
      },
      didYouKnow: {
        el: 'Οι βασιλιάδες της Πολωνίας στέφονταν εδώ από το 1320 έως το 1734, ακόμη και αφού η πρωτεύουσα μεταφέρθηκε στη Βαρσοβία γύρω στο 1600. Η παράδοση λέει ότι όποιος αγγίξει με το αριστερό χέρι το γλωσσίδι της καμπάνας Sigismund θα έχει τύχη στην αγάπη· η ανάβαση στον πύργο είναι μέρος του εισιτηρίου του καθεδρικού. Το βασιλικό κάστρο φυλάει και μια περίφημη συλλογή από φλαμανδικές ταπισερί του 16ου αιώνα.',
        en: 'Polish kings were crowned here from 1320 until 1734, even after the capital moved to Warsaw around 1600. Tradition says that anyone who touches the clapper of the Sigismund Bell with the left hand will be lucky in love; the climb up the tower is part of the cathedral ticket. The royal castle also keeps a famous collection of 16th-century Flemish tapestries.',
      },
      quiz: [
        {
          q: { el: 'Πότε χτυπάει η καμπάνα Sigismund;', en: 'When does the Sigismund Bell ring?' },
          options: {
            el: ['Μόνο τις πιο σπουδαίες μέρες', 'Κάθε ώρα', 'Κάθε πρωί στις 7', 'Ποτέ'],
            en: ['Only on the most important days', 'Every hour', 'Every morning at 7', 'Never'],
          },
          correct: 0,
          explanation: {
            el: 'Η τεράστια καμπάνα, που ζυγίζει περίπου έντεκα τόνους, χτυπάει μόνο τις πιο σπουδαίες μέρες, και χρειάζονται περίπου δώδεκα άνθρωποι για να την κουνήσουν.',
            en: 'The enormous bell, weighing about eleven tons, rings only on the most important days, and it takes about a dozen people to swing it.',
          },
        },
        {
          q: { el: 'Τι λέει ο θρύλος για τα κόκαλα στην είσοδο του καθεδρικού;', en: 'What does the legend say about the bones at the cathedral entrance?' },
          options: {
            el: ['Ότι φέρνουν βροχή', 'Ότι είναι από ελέφαντα του βασιλιά', 'Ότι όσο κρέμονται εκεί, η πόλη είναι ασφαλής', 'Ότι τραγουδούν τη νύχτα'],
            en: ['That they bring rain', 'That they come from the king\'s elephant', 'That as long as they hang there, the city is safe', 'That they sing at night'],
          },
          correct: 2,
          explanation: {
            el: 'Οι παλιοί έλεγαν ότι είναι κόκαλα του δράκου και ότι όσο κρέμονται, η πόλη είναι ασφαλής. Στην πραγματικότητα είναι από μαμούθ και φάλαινα.',
            en: 'People long ago said they were dragon bones and that the city is safe as long as they hang there. Really they come from a mammoth and a whale.',
          },
        },
        {
          q: { el: 'Με τι είναι σκεπασμένος ο τρούλος του παρεκκλησιού του Sigismund;', en: 'What covers the dome of the Sigismund Chapel?' },
          options: {
            el: ['Με κόκκινα κεραμίδια', 'Με χρυσάφι', 'Με γυαλί', 'Με χορτάρι'],
            en: ['Red tiles', 'Gold', 'Glass', 'Grass'],
          },
          correct: 1,
          explanation: {
            el: 'Ο τρούλος του παρεκκλησιού είναι χρυσός και λάμπει στον ήλιο. Το παρεκκλήσι το έχτισαν Ιταλοί τεχνίτες.',
            en: 'The dome of the chapel is gold and shines in the sun. Italian craftsmen built the chapel.',
          },
        },
      ],
    },

    // ── 8. Smok Wawelski ──────────────────────────────────────────────────────
    {
      id: 'wawel-dragon',
      name: { el: 'Smok Wawelski', en: 'The Wawel Dragon' },
      emoji: '🐉',
      lat: 50.0530,
      lng: 19.9330,
      radiusM: 80,
      riddle: {
        el: 'Στα πόδια του λόφου, δίπλα στο νερό, ένα μεταλλικό τέρας στέκεται μπροστά από μια τρύπα στον βράχο. Μη φοβηθείς: κάθε λίγα λεπτά κάνει κάτι που κανένα άλλο άγαλμα δεν κάνει, αλλά είναι ο πιο αγαπημένος κάτοικος της πόλης.',
        en: 'At the foot of the hill, beside the water, a metal monster stands in front of a hole in the rock. Do not be afraid: every few minutes it does something no other statue can do, but it is the best-loved resident of the city.',
      },
      parentHint: {
        el: 'Είναι το άγαλμα του Smok Wawelski (ο Δράκος του Wawel), στην όχθη του ποταμού κάτω από τον λόφο, μπροστά από την έξοδο της σπηλιάς Smocza Jama. Από τον καθεδρικό περάστε τον λόφο προς τα δυτικά και κατεβείτε τα σκαλιά προς το ποτάμι, 8 λεπτά· ή, τους ζεστούς μήνες, κατεβείτε μέσα από τη σπηλιά με εισιτήριο και βγείτε ακριβώς δίπλα στον δράκο.',
        en: 'It is the statue of the Smok Wawelski, the Wawel Dragon, on the river bank below the hill, in front of the exit of the Smocza Jama cave. From the cathedral cross the hill westwards and walk down the steps to the river, 8 minutes; or, in the warm months, go down through the cave with a ticket and come out right next to the dragon.',
      },
      unlockQuestion: {
        question: { el: 'Στον θρύλο, πώς νικήθηκε ο δράκος της Κρακοβίας;', en: 'In the legend, how was the dragon of Kraków defeated?' },
        options: {
          el: ['Με το σπαθί ενός ιππότη', 'Με ένα μαγικό τραγούδι', 'Με ένα πονηρό κόλπο και ένα πρόβατο', 'Με μια μεγάλη πλημμύρα'],
          en: ['With a knight\'s sword', 'With a magic song', 'With a clever trick and a sheep', 'With a great flood'],
        },
        correct: 2,
        explanation: {
          el: 'Κανένας ιππότης δεν τα κατάφερε. Ένας φτωχός τσαγκάρης, ο Skuba (Σκούμπα), γέμισε ένα πρόβατο με θειάφι και το άφησε έξω από τη σπηλιά. Ο δράκος το έφαγε, τον έκαψε η κοιλιά του και ήπιε τόσο νερό από το ποτάμι που έσκασε!',
          en: 'No knight managed it. A poor shoemaker called Skuba stuffed a sheep with sulphur and left it outside the cave. The dragon ate it, his tummy burned, and he drank so much river water that he burst!',
        },
      },
      onSite: {
        question: { el: 'Στάσου μπροστά στον δράκο και περίμενε λίγα λεπτά κοιτάζοντας το στόμα του. Τι βγαίνει από μέσα;', en: 'Stand in front of the dragon and wait a few minutes, watching its mouth. What comes out?' },
        options: {
          el: ['Νερό', 'Αληθινές φλόγες', 'Δαχτυλίδια καπνού', 'Σαπουνόφουσκες'],
          en: ['Water', 'Real flames', 'Smoke rings', 'Soap bubbles'],
        },
        correct: 1,
        explanation: {
          el: 'Ο δράκος βγάζει αληθινή φωτιά κάθε λίγα λεπτά! Μέσα του υπάρχει ένας σωλήνας με φυσικό αέριο που ανάβει αυτόματα. Κοίταξε και πάνω από το κεφάλι του: εκεί ανοίγει η έξοδος της σπηλιάς του.',
          en: 'The dragon breathes real fire every few minutes! Inside it there is a pipe of natural gas that lights up automatically. Look above its head too: that is where the exit of its cave opens.',
        },
      },
      story: {
        el: 'Πριν από πολύ πολύ καιρό, λέει ο θρύλος, στη σπηλιά κάτω από τον λόφο ζούσε ένας δράκος που έτρωγε πρόβατα, αγελάδες και ό,τι άλλο έβρισκε. Ο βασιλιάς Krak (Κρακ), που έδωσε το όνομά του στην Κρακοβία, υποσχέθηκε μεγάλη ανταμοιβή σε όποιον τον νικούσε, αλλά όλοι οι ιππότες απέτυχαν. Τότε ένας φτωχός τσαγκάρης, ο Skuba, γέμισε ένα πρόβατο με θειάφι και το άφησε μπροστά στη σπηλιά. Ο δράκος το κατάπιε, η κοιλιά του άρχισε να καίει, και ήπιε τόσο νερό από το ποτάμι Wisła (Βίσουα) που έσκασε. Το μπρούντζινο άγαλμα, ψηλό έξι μέτρα, το έφτιαξε ο γλύπτης Bronisław Chromy το 1972, και από τότε ο δράκος φυσάει αληθινή φωτιά κάθε λίγα λεπτά. Πίσω του, στον βράχο, ανοίγει η Smocza Jama, η Σπηλιά του Δράκου, ένα αληθινό πέρασμα 270 μέτρων μέσα στον λόφο.',
        en: 'Long, long ago, so the legend goes, a dragon lived in the cave under the hill, eating sheep, cows and anything else it could find. King Krak, who gave Kraków its name, promised a great reward to whoever could defeat it, but every knight failed. Then a poor shoemaker called Skuba stuffed a sheep with sulphur and left it in front of the cave. The dragon swallowed it, its belly began to burn, and it drank so much water from the river Wisła that it burst. The bronze statue, six metres tall, was made by the sculptor Bronisław Chromy in 1972, and ever since the dragon has breathed real fire every few minutes. Behind it, in the rock, opens the Smocza Jama, the Dragon\'s Den, a real passage 270 metres long inside the hill.',
      },
      didYouKnow: {
        el: 'Η φωτιά τροφοδοτείται με φυσικό αέριο και ανάβει περίπου κάθε πέντε λεπτά, αλλά μπορεί να ξεκινήσει και επιπλέον όποιος στείλει το μήνυμα SMOK σε έναν ειδικό αριθμό που είναι γραμμένος στην πινακίδα δίπλα στο άγαλμα. Ο δράκος είναι το σύμβολο της πόλης εδώ και αιώνες και εμφανίζεται σε λούτρινα, κουλούρια και ακόμη και στο έμβλημα κάποιων αθλητικών ομάδων.',
        en: 'The fire runs on natural gas and lights roughly every five minutes, but anyone can trigger an extra burst by texting the word SMOK to the special number written on the sign beside the statue. The dragon has been a symbol of the city for centuries and appears on cuddly toys, pastries and even the badges of some sports teams.',
      },
      quiz: [
        {
          q: { el: 'Με τι γέμισε ο Skuba το πρόβατο;', en: 'What did Skuba stuff the sheep with?' },
          options: {
            el: ['Με μέλι', 'Με πέτρες', 'Με πιπέρι', 'Με θειάφι'],
            en: ['Honey', 'Stones', 'Pepper', 'Sulphur'],
          },
          correct: 3,
          explanation: {
            el: 'Ο έξυπνος τσαγκάρης γέμισε το πρόβατο με θειάφι, που καίει την κοιλιά. Έτσι νίκησε τον δράκο χωρίς σπαθί.',
            en: 'The clever shoemaker stuffed the sheep with sulphur, which burns the belly. That is how he beat the dragon without a sword.',
          },
        },
        {
          q: { el: 'Τι έκανε ο δράκος αφού έφαγε το πρόβατο;', en: 'What did the dragon do after eating the sheep?' },
          options: {
            el: ['Ήπιε τόσο νερό από το ποτάμι που έσκασε', 'Αποκοιμήθηκε για εκατό χρόνια', 'Πέταξε στα βουνά', 'Ζήτησε συγγνώμη από τον βασιλιά'],
            en: ['It drank so much river water that it burst', 'It fell asleep for a hundred years', 'It flew away to the mountains', 'It said sorry to the king'],
          },
          correct: 0,
          explanation: {
            el: 'Η κοιλιά του έκαιγε τόσο πολύ που ήπιε νερό από το ποτάμι Wisła χωρίς σταματημό, μέχρι που έσκασε.',
            en: 'Its belly burned so much that it drank water from the river Wisła without stopping, until it burst.',
          },
        },
        {
          q: { el: 'Κάθε πόσο βγάζει φωτιά το μπρούντζινο άγαλμα;', en: 'How often does the bronze statue breathe fire?' },
          options: {
            el: ['Μία φορά τον χρόνο', 'Μόνο τη νύχτα', 'Κάθε λίγα λεπτά', 'Ποτέ, είναι απλώς άγαλμα'],
            en: ['Once a year', 'Only at night', 'Every few minutes', 'Never, it is just a statue'],
          },
          correct: 2,
          explanation: {
            el: 'Το άγαλμα του 1972 βγάζει αληθινή φωτιά κάθε λίγα λεπτά, μέρα και νύχτα. Αν περιμένεις λίγο, θα τη δεις!',
            en: 'The 1972 statue breathes real fire every few minutes, day and night. Wait a little and you will see it!',
          },
        },
      ],
    },

    // ── 9. Kładka Bernatka ────────────────────────────────────────────────────
    {
      id: 'bernatek-footbridge',
      name: { el: 'Kładka Bernatka', en: 'Father Bernatek Footbridge' },
      emoji: '🤸',
      lat: 50.0478,
      lng: 19.9477,
      radiusM: 80,
      riddle: {
        el: 'Μια γέφυρα από την οποία δεν περνάει κανένα αυτοκίνητο ενώνει δύο παλιές γειτονιές πάνω από το ποτάμι. Ψηλά, πάνω από τα κεφάλια σας, ακροβάτες ισορροπούν σε λεπτά σύρματα χωρίς να πέφτουν ποτέ, και χιλιάδες λουκέτα κρέμονται από τα κάγκελα.',
        en: 'A bridge that no car ever crosses joins two old neighbourhoods over the river. High above your heads, acrobats balance on thin wires without ever falling, and thousands of padlocks hang from the railings.',
      },
      parentHint: {
        el: 'Είναι η Kładka Bernatka (η Πεζογέφυρα του Πατέρα Bernatek), που ενώνει το Kazimierz με το Podgórze. Από τον δράκο περπατήστε ανατολικά κατά μήκος της όχθης, από τα βουλεβάρτα του ποταμού, περνώντας κάτω από τη μεγάλη γέφυρα Grunwaldzki· περίπου 25 λεπτά ήρεμου περπατήματος. Σταθείτε στη μέση της γέφυρας.',
        en: 'It is the Kładka Bernatka, the Father Bernatek Footbridge, joining Kazimierz and Podgórze. From the dragon walk east along the river bank on the boulevards, passing under the big Grunwaldzki bridge; about 25 minutes of easy walking. Stand in the middle of the bridge.',
      },
      unlockQuestion: {
        question: { el: 'Ο γρίφος λέει ότι από αυτή τη γέφυρα δεν περνάει κανένα αυτοκίνητο. Για ποιους φτιάχτηκε;', en: 'The riddle says no car ever crosses this bridge. Who was it built for?' },
        options: {
          el: ['Για τρένα', 'Για πεζούς και ποδήλατα', 'Για καράβια', 'Για άμαξες με άλογα'],
          en: ['Trains', 'People on foot and bicycles', 'Boats', 'Horse carriages'],
        },
        correct: 1,
        explanation: {
          el: 'Είναι πεζογέφυρα: περνούν μόνο άνθρωποι με τα πόδια και ποδήλατα, σε δύο χωριστές λωρίδες. Έτσι μπορείς να σταθείς στη μέση της και να κοιτάς το ποτάμι όση ώρα θέλεις.',
          en: 'It is a footbridge: only walkers and cyclists cross it, in two separate lanes. That is why you can stand in the middle and watch the river for as long as you like.',
        },
      },
      onSite: {
        question: { el: 'Κοίταξε ψηλά, πάνω από τη γέφυρα. Μέτρησε τις φιγούρες των ακροβατών που κρέμονται στον αέρα. Πόσες είναι;', en: 'Look up, above the bridge. Count the acrobat figures hanging in the air. How many are there?' },
        options: {
          el: ['Τρεις', 'Πέντε', 'Επτά', 'Εννέα'],
          en: ['Three', 'Five', 'Seven', 'Nine'],
        },
        correct: 3,
        explanation: {
          el: 'Εννέα ακροβάτες ισορροπούν πάνω στα σύρματα: άλλοι κάνουν ποδήλατο, άλλοι κρέμονται ανάποδα, άλλοι στέκονται στο ένα πόδι. Τους έφτιαξε ο γλύπτης Jerzy Kędziora, που ξέρει να φτιάχνει αγάλματα που στέκονται μόνο σε ένα σημείο, όπως ένας αληθινός σχοινοβάτης.',
          en: 'Nine acrobats balance on the wires: some ride bicycles, some hang upside down, some stand on one leg. They were made by the sculptor Jerzy Kędziora, who knows how to build statues that rest on a single point, like a real tightrope walker.',
        },
      },
      story: {
        el: 'Αυτή η γέφυρα άνοιξε το 2010 και έχει μήκος περίπου 145 μέτρα. Ενώνει δύο παλιές γειτονιές, το Kazimierz (Καζίμιεζ) στη μία όχθη και το Podgórze (Ποντγκούζε) στην άλλη. Πήρε το όνομά της από τον πατέρα Laetus Bernatek, έναν μοναχό που πριν από εκατό και πλέον χρόνια έχτισε ένα νοσοκομείο για τους φτωχούς λίγο πιο πέρα. Το 2016 ο γλύπτης Jerzy Kędziora κρέμασε πάνω από τη γέφυρα εννέα ακροβάτες που ισορροπούν σε σύρματα και κουνιούνται ελαφρά με τον αέρα. Κάτω κυλάει η Wisła (Βίσουα), το μεγαλύτερο ποτάμι της Πολωνίας, που ταξιδεύει πάνω από χίλια χιλιόμετρα από τα βουνά ως τη Βαλτική Θάλασσα. Τα ζευγάρια κρεμούν λουκέτα στα κάγκελα και πετούν το κλειδί στο νερό, για να πουν ότι η αγάπη τους δεν ξεκλειδώνει.',
        en: 'This bridge opened in 2010 and is about 145 metres long. It joins two old neighbourhoods, Kazimierz on one bank and Podgórze on the other. It is named after Father Laetus Bernatek, a monk who more than a hundred years ago built a hospital for the poor a little way from here. In 2016 the sculptor Jerzy Kędziora hung nine acrobats above the bridge, balancing on wires and swaying gently in the wind. Below flows the Wisła, the Vistula, Poland\'s longest river, which travels more than a thousand kilometres from the mountains to the Baltic Sea. Couples fasten padlocks to the railings and throw the key into the water, to say that their love cannot be unlocked.',
      },
      didYouKnow: {
        el: 'Το σύμπλεγμα των ακροβατών λέγεται «Ανάμεσα στο νερό και στον ουρανό». Ο Jerzy Kędziora είναι γνωστός διεθνώς για τα γλυπτά ισορροπίας του, που στηρίζονται σε ένα μόνο σημείο και είναι υπολογισμένα ώστε ο άνεμος να τα κουνάει χωρίς να τα ρίχνει. Στην απέναντι όχθη, το Podgórze ήταν ως το 1915 ξεχωριστή πόλη με δικό της δημαρχείο και αγορά.',
        en: 'The acrobat group is titled “Between the Water and the Sky”. Jerzy Kędziora is known internationally for his balancing sculptures, which rest on a single point and are engineered so that the wind rocks them without toppling them. On the far bank, Podgórze was a separate town with its own town hall and market square until 1915.',
      },
      quiz: [
        {
          q: { el: 'Ποιος ήταν ο πατέρας Bernatek;', en: 'Who was Father Bernatek?' },
          options: {
            el: ['Ένας βασιλιάς', 'Ένας μοναχός που έχτισε νοσοκομείο για τους φτωχούς', 'Ένας ακροβάτης', 'Ένας ζωγράφος'],
            en: ['A king', 'A monk who built a hospital for the poor', 'An acrobat', 'A painter'],
          },
          correct: 1,
          explanation: {
            el: 'Ο πατέρας Laetus Bernatek ήταν μοναχός που πριν από εκατό και πλέον χρόνια έχτισε ένα νοσοκομείο για τους φτωχούς κοντά στη γέφυρα.',
            en: 'Father Laetus Bernatek was a monk who more than a hundred years ago built a hospital for the poor near the bridge.',
          },
        },
        {
          q: { el: 'Ποιο ποτάμι περνάει κάτω από τη γέφυρα;', en: 'Which river flows under the bridge?' },
          options: {
            el: ['Ο Δούναβης', 'Ο Τάμεσης', 'Ο Τάγος', 'Η Wisła'],
            en: ['The Danube', 'The Thames', 'The Tagus', 'The Vistula'],
          },
          correct: 3,
          explanation: {
            el: 'Η Wisła, ο Βιστούλας, είναι το μεγαλύτερο ποτάμι της Πολωνίας. Ταξιδεύει πάνω από χίλια χιλιόμετρα από τα βουνά ως τη Βαλτική Θάλασσα.',
            en: 'The Wisła, the Vistula, is Poland\'s longest river. It travels more than a thousand kilometres from the mountains to the Baltic Sea.',
          },
        },
        {
          q: { el: 'Πάνω σε τι ισορροπούν οι ακροβάτες;', en: 'What do the acrobats balance on?' },
          options: {
            el: ['Σε σύρματα πάνω από τη γέφυρα', 'Σε βάρκες στο ποτάμι', 'Σε κολόνες μέσα στο νερό', 'Σε άλογα'],
            en: ['On wires above the bridge', 'On boats in the river', 'On columns in the water', 'On horses'],
          },
          correct: 0,
          explanation: {
            el: 'Οι εννέα ακροβάτες κρέμονται σε σύρματα πάνω από τη γέφυρα και κουνιούνται ελαφρά με τον αέρα.',
            en: 'The nine acrobats hang on wires above the bridge and sway gently in the wind.',
          },
        },
      ],
    },

    // ── 10. Kazimierz · ulica Szeroka ─────────────────────────────────────────
    {
      id: 'kazimierz-szeroka',
      name: { el: 'Kazimierz, οδός Szeroka', en: 'Kazimierz, Szeroka Street' },
      emoji: '🕍',
      lat: 50.0517,
      lng: 19.9478,
      radiusM: 60,
      riddle: {
        el: 'Ένας δρόμος τόσο φαρδύς που μοιάζει με πλατεία, σε μια γειτονιά που κάποτε ήταν ολόκληρη πόλη με το δικό της όνομα, από έναν βασιλιά. Στη μία του άκρη στέκεται το πιο παλιό σπίτι προσευχής του είδους του σε όλη τη χώρα.',
        en: 'A street so wide it looks like a square, in a neighbourhood that was once a whole town of its own, named after a king. At one end stands the oldest house of prayer of its kind in the whole country.',
      },
      parentHint: {
        el: 'Είναι η οδός Szeroka (Σερόκα, «η Φαρδιά») στο Kazimierz, με την Παλιά Συναγωγή (Stara Synagoga) στη νότια άκρη της. Από τη γέφυρα περπατήστε βόρεια από την οδό Mostowa, στρίψτε δεξιά στην οδό Józefa και ξανά αριστερά στην Szeroka· 10 λεπτά. Σταθείτε στο πλάτωμα με τα δέντρα στη μέση του δρόμου.',
        en: 'It is Szeroka street, “the Wide one”, in Kazimierz, with the Old Synagogue (Stara Synagoga) at its southern end. From the bridge walk north along Mostowa street, turn right into Józefa street and left again into Szeroka; 10 minutes. Stand on the tree-lined island in the middle of the street.',
      },
      unlockQuestion: {
        question: { el: 'Το πιο παλιό κτίριο του δρόμου είναι μια συναγωγή. Τι είναι η συναγωγή;', en: 'The oldest building on the street is a synagogue. What is a synagogue?' },
        options: {
          el: ['Ένα εβραϊκό σπίτι προσευχής και μάθησης', 'Ένα κάστρο', 'Ένα μαγαζί με υφάσματα', 'Ένα θέατρο'],
          en: ['A Jewish house of prayer and learning', 'A castle', 'A cloth shop', 'A theatre'],
        },
        correct: 0,
        explanation: {
          el: 'Η συναγωγή είναι ο τόπος όπου οι Εβραίοι προσεύχονται, διαβάζουν τα ιερά τους βιβλία και μαζεύονται ως κοινότητα, όπως η εκκλησία για τους χριστιανούς ή το τζαμί για τους μουσουλμάνους.',
          en: 'A synagogue is the place where Jewish people pray, read their holy books and gather as a community, like a church for Christians or a mosque for Muslims.',
        },
      },
      onSite: {
        question: { el: 'Στάσου στη μέση της Szeroka και κοίταξε γύρω σου. Πώς μοιάζει αυτός ο δρόμος;', en: 'Stand in the middle of Szeroka and look around you. What does this street look like?' },
        options: {
          el: ['Με ένα στενό σκοτεινό σοκάκι', 'Με μια φαρδιά πλατεία με δέντρα στη μέση', 'Με μια γέφυρα πάνω από νερό', 'Με έναν ανηφορικό δρόμο με σκαλιά'],
          en: ['A narrow dark alley', 'A wide square with trees in the middle', 'A bridge over water', 'A steep street with steps'],
        },
        correct: 1,
        explanation: {
          el: 'Η Szeroka είναι πιο φαρδιά από κάθε άλλον δρόμο εδώ γύρω, με δέντρα και γρασίδι στη μέση, γι\' αυτό το όνομά της σημαίνει «η Φαρδιά». Παλιά ήταν η κεντρική πλατεία της εβραϊκής πόλης, με αγορά και γιορτές.',
          en: 'Szeroka is wider than any other street around here, with trees and grass in the middle, which is why its name means “the Wide one”. Long ago it was the main square of the Jewish town, with a market and festivals.',
        },
      },
      story: {
        el: 'Το 1335 ο βασιλιάς Kazimierz ο Μέγας (Καζίμιεζ) ίδρυσε εδώ μια καινούργια πόλη και της έδωσε το όνομά του: Kazimierz. Είχε δικά της τείχη, δικό της δημαρχείο και δική της αγορά. Από τα τέλη του 15ου αιώνα εδώ ζούσαν οι Εβραίοι της Κρακοβίας, και η γειτονιά γέμισε συναγωγές, σχολεία, φούρνους και εργαστήρια. Η Παλιά Συναγωγή στην άκρη του δρόμου χτίστηκε τον 15ο αιώνα και είναι η παλαιότερη που σώζεται σε όλη την Πολωνία· σήμερα είναι μουσείο. Για εκατοντάδες χρόνια η κοινότητα άκμαζε εδώ, μέχρι που στον Δεύτερο Παγκόσμιο Πόλεμο καταστράφηκε· σήμερα η πόλη την τιμά και τη θυμάται. Κάθε καλοκαίρι το Φεστιβάλ Εβραϊκού Πολιτισμού γεμίζει τη Szeroka με μουσική και χορό.',
        en: 'In 1335 King Casimir the Great (Kazimierz in Polish) founded a new town here and gave it his name: Kazimierz. It had its own walls, its own town hall and its own market. From the end of the 1400s the Jews of Kraków lived here, and the neighbourhood filled with synagogues, schools, bakeries and workshops. The Old Synagogue at the end of the street was built in the 15th century and is the oldest still standing in all of Poland; today it is a museum. For hundreds of years the community flourished here, until it was destroyed in the Second World War; today the city honours and remembers it. Every summer the Jewish Culture Festival fills Szeroka with music and dancing.',
      },
      didYouKnow: {
        el: 'Το Kazimierz έμεινε ξεχωριστή πόλη μέχρι το 1800, όταν ενώθηκε με την Κρακοβία. Λίγο πιο πέρα, η μικρή συναγωγή Remuh (Ρέμου) με το παλιό της νεκροταφείο πήρε το όνομά της από τον ραβίνο Moses Isserles, τον «Remuh», έναν από τους σπουδαιότερους λόγιους του 16ου αιώνα· ο τάφος του στο νεκροταφείο δέχεται επισκέπτες από όλον τον κόσμο. Το Φεστιβάλ Εβραϊκού Πολιτισμού γίνεται από το 1988, και η τελική του συναυλία στη Szeroka συγκεντρώνει χιλιάδες ανθρώπους.',
        en: 'Kazimierz remained a separate town until 1800, when it was joined to Kraków. A little further on, the small Remuh synagogue with its old cemetery is named after Rabbi Moses Isserles, the “Remuh”, one of the greatest scholars of the 16th century; his grave in the cemetery receives visitors from all over the world. The Jewish Culture Festival has been held since 1988, and its closing concert on Szeroka draws thousands of people.',
      },
      quiz: [
        {
          q: { el: 'Ποιος ίδρυσε το Kazimierz το 1335;', en: 'Who founded Kazimierz in 1335?' },
          options: {
            el: ['Ο Κοπέρνικος', 'Ο τσαγκάρης Skuba', 'Ο βασιλιάς Kazimierz ο Μέγας', 'Ο πατέρας Bernatek'],
            en: ['Copernicus', 'Skuba the shoemaker', 'King Casimir the Great', 'Father Bernatek'],
          },
          correct: 2,
          explanation: {
            el: 'Ο βασιλιάς Kazimierz ο Μέγας ίδρυσε την πόλη το 1335 και της έδωσε το όνομά του. Είναι ο ίδιος βασιλιάς που ίδρυσε και το πανεπιστήμιο.',
            en: 'King Casimir the Great founded the town in 1335 and gave it his name. He is the same king who founded the university.',
          },
        },
        {
          q: { el: 'Τι το ιδιαίτερο έχει η Παλιά Συναγωγή;', en: 'What is special about the Old Synagogue?' },
          options: {
            el: ['Είναι η παλαιότερη που σώζεται σε όλη την Πολωνία', 'Έχει χρυσό τρούλο', 'Είναι χτισμένη πάνω στο ποτάμι', 'Μέσα της ζει ένας δράκος'],
            en: ['It is the oldest still standing in all of Poland', 'It has a golden dome', 'It is built on the river', 'A dragon lives inside'],
          },
          correct: 0,
          explanation: {
            el: 'Χτίστηκε τον 15ο αιώνα και είναι η παλαιότερη συναγωγή που σώζεται σε ολόκληρη την Πολωνία. Σήμερα λειτουργεί ως μουσείο.',
            en: 'It was built in the 15th century and is the oldest surviving synagogue in the whole of Poland. Today it is a museum.',
          },
        },
        {
          q: { el: 'Τι γίνεται στη Szeroka κάθε καλοκαίρι;', en: 'What happens on Szeroka every summer?' },
          options: {
            el: ['Ένας αγώνας αλόγων', 'Το Φεστιβάλ Εβραϊκού Πολιτισμού με μουσική και χορό', 'Μια έκθεση αυτοκινήτων', 'Ο δράκος βγάζει φωτιά'],
            en: ['A horse race', 'The Jewish Culture Festival with music and dancing', 'A car show', 'The dragon breathes fire'],
          },
          correct: 1,
          explanation: {
            el: 'Κάθε καλοκαίρι το Φεστιβάλ Εβραϊκού Πολιτισμού γεμίζει τον δρόμο με μουσική, χορό και χιλιάδες ανθρώπους.',
            en: 'Every summer the Jewish Culture Festival fills the street with music, dancing and thousands of people.',
          },
        },
      ],
    },
  ],
};
