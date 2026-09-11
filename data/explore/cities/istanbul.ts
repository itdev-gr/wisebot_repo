/**
 * WiseBot Explorer · Κωνσταντινούπολη / Istanbul
 * ==============================================
 * Ten spots in two half-days: the old city on foot (spots 1–6), then across the Golden
 * Horn to Galata, Pera and Fener (spots 7–10). Original text only, verified facts, language
 * for a child of 7–12 in Greek and English. Turkish names stay in Turkish in both languages;
 * Byzantine and Greek-community history is told proudly and gently.
 */
import type { ExploreCity } from '../types';

export const CITY: ExploreCity = {
  id: 'istanbul',
  name: { el: 'Κωνσταντινούπολη', en: 'Istanbul' },
  country: { el: 'Τουρκία', en: 'Türkiye' },
  countryCode: 'TR',
  emoji: '🕌',
  center: { lat: 41.015, lng: 28.972 },
  zoom: 13,
  intro: {
    el: 'Γεια σας, εξερευνητές! Είμαι η WiseBot, η σοφή κουκουβάγια, και σας καλωσορίζω στην Κωνσταντινούπολη, μια πόλη που απλώνεται σε δύο ηπείρους, την Ευρώπη και την Ασία! Για περισσότερα από χίλια χρόνια ήταν η πρωτεύουσα των Βυζαντινών, των Ελλήνων του Μεσαίωνα, και μετά για σχεδόν πεντακόσια χρόνια η πρωτεύουσα των σουλτάνων. Εδώ τα πλοιάρια σφυρίζουν, οι γλάροι κλέβουν κουλούρια με σουσάμι, τα simit, και ένας θόλος στέκεται σχεδόν 1.500 χρόνια. Λύστε τους γρίφους μου, βρείτε τα δέκα μυστικά σημεία και γίνετε εξερευνητές της Πόλης!',
    en: 'Hello, explorers! I am WiseBot the wise owl, and I welcome you to Istanbul, a city that stretches across two continents, Europe and Asia! For more than a thousand years it was Constantinople, the capital of the Byzantine Greeks, and then for almost five hundred years the capital of the sultans. Here ferries hoot, seagulls steal sesame rings called simit, and one dome has been standing for almost 1,500 years. Solve my riddles, find the ten secret spots and become explorers of the City!',
  },
  route: [
    'hippodrome',
    'hagia-sophia',
    'blue-mosque',
    'gulhane-park',
    'grand-bazaar',
    'spice-bazaar',
    'galata-bridge',
    'galata-tower',
    'istiklal-street',
    'fener-patriarchate',
  ],
  spots: [
    // ── 1. Hippodrome / Sultanahmet Meydanı ────────────────────────────────────
    {
      id: 'hippodrome',
      name: { el: 'Ιππόδρομος (Sultanahmet Meydanı)', en: 'Hippodrome (Sultanahmet Meydanı)' },
      emoji: '🏇',
      lat: 41.0058,
      lng: 28.9755,
      radiusM: 40,
      riddle: {
        el: 'Εδώ κάποτε άλογα έτρεχαν γύρω γύρω και μια ολόκληρη πόλη φώναζε για τους Γαλάζιους ή τους Πράσινους. Σήμερα στη μέση της μακρόστενης πλατείας στέκονται τρεις πανάρχαιες κολόνες, και η μία ήρθε με καράβι από την Αίγυπτο.',
        en: 'Here horses once raced round and round while a whole city cheered for the Blues or the Greens. Today three ancient pillars stand in the middle of the long square, and one of them sailed here all the way from Egypt.',
      },
      parentHint: {
        el: 'Είναι ο Ιππόδρομος, η σημερινή πλατεία Sultanahmet (Σουλταναχμέτ), δίπλα στον Οβελίσκο του Θεοδοσίου. Ξεκινήστε από εδώ: η στάση Sultanahmet του τραμ T1 είναι 3 λεπτά με τα πόδια.',
        en: 'It is the Hippodrome, today Sultanahmet Square, by the Obelisk of Theodosius. Start here: the Sultanahmet stop of tram T1 is a 3-minute walk away.',
      },
      unlockQuestion: {
        question: { el: 'Τι αγώνες γίνονταν εδώ την εποχή των αυτοκρατόρων;', en: 'What kind of races were held here in the days of the emperors?' },
        options: {
          el: ['Αγώνες αυτοκινήτων', 'Αρματοδρομίες με άλογα', 'Αγώνες κολύμβησης', 'Αγώνες με καμήλες'],
          en: ['Car races', 'Chariot races pulled by horses', 'Swimming races', 'Camel races'],
        },
        correct: 1,
        explanation: {
          el: 'Άρματα με τέσσερα άλογα έτρεχαν επτά γύρους, και οι ηνίοχοι ήταν οι σταρ της εποχής. Η λέξη «ιππόδρομος» είναι ελληνική: ίππος, δηλαδή άλογο, και δρόμος.',
          en: 'Chariots pulled by four horses raced seven laps, and the drivers were the superstars of their day. The word “hippodrome” is Greek: hippos means horse, and dromos means racecourse.',
        },
      },
      onSite: {
        question: { el: 'Βρες την πράσινη μπρούντζινη κολόνα που στρίβει σαν κορδόνι. Με τι μοιάζει;', en: 'Find the green bronze column that twists like a rope. What does it look like?' },
        options: {
          el: ['Με κορμό δέντρου', 'Με κατάρτι καραβιού', 'Με τρία φίδια πλεγμένα μαζί, χωρίς τα κεφάλια τους', 'Με έναν δράκο με φτερά'],
          en: ['A tree trunk', 'A ship\'s mast', 'Three snakes twisted together, missing their heads', 'A dragon with wings'],
        },
        correct: 2,
        explanation: {
          el: 'Είναι η Στήλη των Όφεων, τρία μπρούντζινα φίδια που την έφτιαξαν οι Έλληνες μετά τη νίκη τους στις Πλαταιές, το 479 π.Χ. Τα κεφάλια χάθηκαν πριν από αιώνες· το ένα βρέθηκε και φυλάγεται στο Αρχαιολογικό Μουσείο, λίγο πιο κάτω.',
          en: 'It is the Serpent Column, three bronze snakes made by the Greeks after their victory at Plataea in 479 BC. The heads were lost centuries ago; one was found and is kept in the Archaeological Museum, just down the hill.',
        },
      },
      story: {
        el: 'Πριν από περίπου 1.700 χρόνια ο αυτοκράτορας Κωνσταντίνος έκανε αυτή την πόλη νέα πρωτεύουσα της Ρωμαϊκής Αυτοκρατορίας και μεγάλωσε τον τεράστιο ιππόδρομό της. Άρματα με τέσσερα άλογα βροντούσαν γύρω από την πίστα, ενώ ένα πλήθος από πολλές χιλιάδες ζητωκραύγαζε για την ομάδα του, τους Γαλάζιους ή τους Πράσινους. Οι αυτοκράτορες στόλισαν τη μέση της πίστας με θησαυρούς από όλη την αυτοκρατορία. Ο πιο παλιός είναι ο οβελίσκος με τα αιγυπτιακά ιερογλυφικά, σκαλισμένος στην Αίγυπτο πριν από περίπου 3.500 χρόνια για έναν Φαραώ· στη βάση του θα δεις τον αυτοκράτορα Θεοδόσιο να παρακολουθεί τους αγώνες από το θεωρείο του. Η στριφτή μπρούντζινη κολόνα είναι ακόμη πιο ξεχωριστή για εμάς τους Έλληνες: φτιάχτηκε όταν οι ελληνικές πόλεις νίκησαν τους Πέρσες στις Πλαταιές, το 479 π.Χ., και στεκόταν στους Δελφούς σχεδόν 800 χρόνια, μέχρι που ο Κωνσταντίνος την έφερε εδώ. Στέκεσαι εκεί όπου η ιστορία πέρασε τρέχοντας!',
        en: 'About 1,700 years ago Emperor Constantine made this city the new capital of the Roman Empire and enlarged its giant racetrack. Chariots pulled by four horses thundered round the track while a crowd of many thousands cheered for their team, the Blues or the Greens. The emperors decorated the middle of the track with treasures from all over the empire. The oldest is the obelisk covered in Egyptian hieroglyphs, carved in Egypt about 3,500 years ago for a pharaoh; on its base you can spot Emperor Theodosius watching the races from his box. The twisted bronze column is extra special for Greeks: it was made after the Greek cities beat the Persians at Plataea in 479 BC, and it stood at Delphi for almost 800 years before Constantine brought it here. You are standing where history raced by!',
      },
      didYouKnow: {
        el: 'Τα τέσσερα μπρούντζινα άλογα που στολίζουν σήμερα τον Άγιο Μάρκο στη Βενετία στέκονταν κάποτε εδώ, πάνω από τις θέσεις των θεατών· τα πήραν οι Βενετοί το 1204, όταν οι Σταυροφόροι κατέλαβαν την Πόλη. Το σιντριβάνι με τον πράσινο θόλο στην άκρη της πλατείας ήταν δώρο του Γερμανού Κάιζερ Γουλιέλμου Β΄ και συναρμολογήθηκε εδώ το 1901.',
        en: 'The four bronze horses that today decorate St Mark\'s in Venice once stood here, above the spectators\' seats; the Venetians carried them off in 1204, when the Crusaders captured the city. The fountain with the green dome at the end of the square was a gift from the German Kaiser Wilhelm II and was assembled here in 1901.',
      },
      quiz: [
        {
          q: { el: 'Ποιες ήταν οι δύο ομάδες των φιλάθλων;', en: 'What were the two teams of fans?' },
          options: {
            el: ['Οι Γαλάζιοι και οι Πράσινοι', 'Οι Κόκκινοι και οι Κίτρινοι', 'Τα Λιοντάρια και οι Αετοί', 'Οι Άσπροι και οι Μαύροι'],
            en: ['The Blues and the Greens', 'The Reds and the Yellows', 'The Lions and the Eagles', 'The Whites and the Blacks'],
          },
          correct: 0,
          explanation: {
            el: 'Οι Γαλάζιοι και οι Πράσινοι ήταν οι μεγάλες ομάδες του ιπποδρόμου, και όλη η πόλη ήταν χωρισμένη στα δύο, όπως σήμερα με το ποδόσφαιρο.',
            en: 'The Blues and the Greens were the big teams of the Hippodrome, and the whole city was split between them, just like football fans today.',
          },
        },
        {
          q: { el: 'Από πού ήρθε ο ψηλός οβελίσκος;', en: 'Where did the tall obelisk come from?' },
          options: {
            el: ['Από τη Ρώμη', 'Από τους Δελφούς', 'Από την Περσία', 'Από την Αίγυπτο'],
            en: ['From Rome', 'From Delphi', 'From Persia', 'From Egypt'],
          },
          correct: 3,
          explanation: {
            el: 'Ο οβελίσκος σκαλίστηκε στην Αίγυπτο για έναν Φαραώ πριν από περίπου 3.500 χρόνια και ταξίδεψε με καράβι ως εδώ.',
            en: 'The obelisk was carved in Egypt for a pharaoh about 3,500 years ago and travelled here by ship.',
          },
        },
        {
          q: { el: 'Πού στεκόταν η στριφτή μπρούντζινη κολόνα πριν έρθει εδώ;', en: 'Where did the twisted bronze column stand before it came here?' },
          options: {
            el: ['Στην Αθήνα', 'Στους Δελφούς', 'Στη Σπάρτη', 'Στην Ολυμπία'],
            en: ['In Athens', 'At Delphi', 'In Sparta', 'At Olympia'],
          },
          correct: 1,
          explanation: {
            el: 'Η Στήλη των Όφεων στεκόταν στο ιερό των Δελφών σχεδόν 800 χρόνια, ως ευχαριστώ για τη νίκη στις Πλαταιές.',
            en: 'The Serpent Column stood in the sanctuary of Delphi for almost 800 years, as a thank-you for the victory at Plataea.',
          },
        },
      ],
    },

    // ── 2. Hagia Sophia / Ayasofya ─────────────────────────────────────────────
    {
      id: 'hagia-sophia',
      name: { el: 'Αγία Σοφία (Ayasofya)', en: 'Hagia Sophia (Ayasofya)' },
      emoji: '🏛️',
      lat: 41.0083,
      lng: 28.9790,
      radiusM: 60,
      riddle: {
        el: 'Ένας αυτοκράτορας ήθελε τη μεγαλύτερη εκκλησία του κόσμου και την έχτισε σε πέντε μόνο χρόνια. Ο τεράστιος θόλος της μοιάζει να κρέμεται από τον ουρανό, και εδώ και σχεδόν 1.500 χρόνια κανείς δεν σταμάτησε να την θαυμάζει.',
        en: 'An emperor wanted the biggest church in the world and had it built in just five years. Its enormous dome seems to hang from the sky, and for almost 1,500 years people have not stopped gazing at it.',
      },
      parentHint: {
        el: 'Είναι η Αγία Σοφία (Ayasofya). Από τον Οβελίσκο περπατήστε 4 λεπτά προς τα βορειοανατολικά, μέσα από την πλατεία με τα σιντριβάνια· η είσοδος των επισκεπτών είναι στην πλευρά που βλέπει προς την πλατεία. Προσοχή: οι ξένοι επισκέπτες πληρώνουν εισιτήριο (περίπου 25 ευρώ, 2024) και μπαίνουν από ξεχωριστή είσοδο επισκεπτών στη νοτιοδυτική πλευρά, βλέποντας το εσωτερικό από τον πάνω όροφο· το ισόγειο είναι για την προσευχή. Ελέγξτε τιμές και ωράριο πριν πάτε.',
        en: 'It is Hagia Sophia (Ayasofya). From the Obelisk walk 4 minutes north-east through the square with the fountains; the visitor entrance is on the side facing the square. Note: foreign visitors pay an entrance fee (about €25 in 2024) and use a separate tourist entrance on the south-west side, viewing the interior from the upper gallery; the ground floor is for prayer. Check prices and hours before you go.',
      },
      unlockQuestion: {
        question: { el: 'Ο γρίφος μιλάει για μια τεράστια στρογγυλή στέγη. Πώς λέγεται μια τέτοια στέγη;', en: 'The riddle talks about a giant round roof. What is a roof like that called?' },
        options: {
          el: ['Πύργος', 'Πυραμίδα', 'Θόλος (τρούλος)', 'Μπαλκόνι'],
          en: ['A tower', 'A pyramid', 'A dome', 'A balcony'],
        },
        correct: 2,
        explanation: {
          el: 'Ο θόλος, ή τρούλος, είναι μια στέγη σαν μισή μπάλα. Εδώ έχει πλάτος 31 μέτρα και ύψος 55, και μια σειρά από 40 παράθυρα στη βάση του τον κάνει να μοιάζει σαν να αιωρείται.',
          en: 'A dome is a roof shaped like half a ball. This one is 31 metres wide and 55 metres high, and a ring of 40 windows at its base makes it look as if it is floating.',
        },
      },
      onSite: {
        question: { el: 'Σταθείτε λίγο πιο μακριά και μετρήστε τους ψηλούς, λεπτούς πύργους στις γωνίες του κτιρίου. Πόσοι είναι;', en: 'Stand a little way back and count the tall, thin towers at the corners of the building. How many are there?' },
        options: {
          el: ['Ένας', 'Δύο', 'Τρεις', 'Τέσσερις'],
          en: ['One', 'Two', 'Three', 'Four'],
        },
        correct: 3,
        explanation: {
          el: 'Τέσσερις μιναρέδες. Προστέθηκαν μετά το 1453, όταν το κτίριο έγινε τζαμί, από διαφορετικούς σουλτάνους· γι\' αυτό δεν είναι όλοι ίδιοι: ο ένας είναι από κόκκινο τούβλο και οι άλλοι από πέτρα.',
          en: 'Four minarets. They were added after 1453, when the building became a mosque, by different sultans; that is why they do not all match: one is red brick and the others are stone.',
        },
      },
      story: {
        el: 'Ο αυτοκράτορας Ιουστινιανός διέταξε αυτή την εκκλησία το 532, αφού η παλιά είχε καεί σε μια εξέγερση, και χιλιάδες εργάτες την τελείωσαν σε πέντε μόνο χρόνια. Δύο σοφοί Έλληνες μαθηματικοί, ο Ανθέμιος και ο Ισίδωρος, βρήκαν τον τρόπο να «καθίσει» πάνω στους τοίχους ένας θόλος με πλάτος 31 μέτρα. Το φως μπαίνει από έναν κύκλο παραθύρων, κι έτσι ο θόλος μοιάζει να κρέμεται από τον ουρανό με χρυσή αλυσίδα. Μέσα, οι τοίχοι έλαμπαν με χρυσά ψηφιδωτά αυτοκρατόρων, αυτοκρατειρών και αγίων. Για περίπου 900 χρόνια ήταν η μεγαλύτερη εκκλησία της γης. Το 1453 οι Οθωμανοί πήραν την Πόλη και έγινε τζαμί· προστέθηκαν μιναρέδες, και σήμερα είναι ξανά τζαμί. Ο σοφός χτίζει κάτι που όλοι, για αιώνες, θέλουν να το φροντίζουν.',
        en: 'Emperor Justinian ordered this church in the year 532, after the old one had burned in a riot, and thousands of workers finished it in only five years. Two clever Greek mathematicians, Anthemius and Isidore, worked out how to float a dome 31 metres wide on top of the walls. Light pours in through a ring of windows, so the dome seems to hang from heaven on a golden chain. Inside, the walls sparkled with golden mosaics of emperors, empresses and saints. For about 900 years it was the biggest church on Earth. In 1453 the Ottomans took the city and it became a mosque; minarets were added, and today it is a mosque again. A wise person builds something that everyone, for centuries, wants to take care of.',
      },
      didYouKnow: {
        el: 'Στον πάνω όροφο, σε ένα μαρμάρινο στηθαίο, ένας Βίκινγκ που έφτασε στην Πόλη τον 9ο αιώνα, μάλλον ως στρατιώτης, χάραξε το όνομά του με ρούνους: «Halfdan». Στο ισόγειο, στη «στήλη των ευχών», οι επισκέπτες για αιώνες έβαζαν τον αντίχειρα σε μια υγρή τρύπα και έκαναν μια ευχή· σήμερα το ισόγειο είναι ανοιχτό μόνο για την προσευχή.',
        en: 'In the upper gallery, on a marble parapet, a Viking who reached the city in the 9th century, probably as a soldier, scratched his name in runes: “Halfdan”. Downstairs, at the “wishing column”, visitors for centuries put a thumb into a damp hole in the marble and made a wish; today the ground floor is open only for prayer.',
      },
      quiz: [
        {
          q: { el: 'Πόσα χρόνια κράτησε το χτίσιμο;', en: 'How many years did the building take?' },
          options: {
            el: ['Πενήντα χρόνια', 'Μόνο πέντε χρόνια', 'Εκατό χρόνια', 'Ένα καλοκαίρι'],
            en: ['Fifty years', 'Only five years', 'A hundred years', 'One summer'],
          },
          correct: 1,
          explanation: {
            el: 'Από το 532 ως το 537: μόνο πέντε χρόνια για το μεγαλύτερο κτίριο της εποχής. Ο Ιουστινιανός βιαζόταν πολύ!',
            en: 'From 532 to 537: only five years for the biggest building of its time. Justinian was in a great hurry!',
          },
        },
        {
          q: { el: 'Ποιος αυτοκράτορας διέταξε το χτίσιμο;', en: 'Which emperor ordered it built?' },
          options: {
            el: ['Ο Ιουστινιανός', 'Ο Μέγας Αλέξανδρος', 'Ο Θεοδόσιος', 'Ο Ναπολέων'],
            en: ['Justinian', 'Alexander the Great', 'Theodosius', 'Napoleon'],
          },
          correct: 0,
          explanation: {
            el: 'Ο Ιουστινιανός, ο Βυζαντινός αυτοκράτορας, ήθελε μια εκκλησία που κανείς δεν θα ξεπερνούσε, και για 900 χρόνια κανείς δεν την ξεπέρασε.',
            en: 'Justinian, the Byzantine emperor, wanted a church nobody could outdo, and for 900 years nobody did.',
          },
        },
        {
          q: { el: 'Τι έγινε το κτίριο μετά το 1453;', en: 'What did the building become after 1453?' },
          options: {
            el: ['Παλάτι', 'Σχολείο', 'Τζαμί', 'Αγορά'],
            en: ['A palace', 'A school', 'A mosque', 'A market'],
          },
          correct: 2,
          explanation: {
            el: 'Μετά το 1453 έγινε τζαμί και απέκτησε μιναρέδες. Οι πιο πολλοί από τους ανθρώπους της εποχής θαύμαζαν τόσο πολύ το κτίριο, που το κράτησαν όπως ήταν.',
            en: 'After 1453 it became a mosque and got its minarets. People of the time admired the building so much that they kept it just as it was.',
          },
        },
      ],
    },

    // ── 3. Blue Mosque / Sultanahmet Camii ─────────────────────────────────────
    {
      id: 'blue-mosque',
      name: { el: 'Γαλάζιο Τζαμί (Sultanahmet Camii)', en: 'Blue Mosque (Sultanahmet Camii)' },
      emoji: '🕌',
      lat: 41.0057,
      lng: 28.9764,
      radiusM: 60,
      riddle: {
        el: 'Απέναντι από τη γριά εκκλησία με τον θόλο, ένας νεαρός σουλτάνος έχτισε έναν ναό προσευχής για να την ξεπεράσει. Μέσα, χιλιάδες πλακάκια τον κάνουν να λάμπει σαν θάλασσα, και έξω οι θόλοι του κατεβαίνουν σαν σκαλοπάτια.',
        en: 'Across from the old domed church, a young sultan built a house of prayer to outshine it. Inside, thousands of tiles make it glow like the sea, and outside its domes tumble down like steps.',
      },
      parentHint: {
        el: 'Είναι το Γαλάζιο Τζαμί (Sultanahmet Camii). Από την Αγία Σοφία περάστε ξανά την πλατεία με τα σιντριβάνια, 5 λεπτά νοτιοδυτικά, και μπείτε στη μεγάλη αυλή· οι επισκέπτες μπαίνουν από την πλαϊνή είσοδο, εκτός από τις ώρες προσευχής, με τα παπούτσια στο χέρι και καλυμμένους ώμους και γόνατα.',
        en: 'It is the Blue Mosque (Sultanahmet Camii). From Hagia Sophia cross the fountain square again, 5 minutes south-west, and enter the big courtyard; visitors go in through the side entrance outside prayer times, shoes in hand, shoulders and knees covered.',
      },
      unlockQuestion: {
        question: { el: 'Ο γρίφος λέει ότι μέσα λάμπει σαν θάλασσα. Τι χρώμα έχουν τα περισσότερα πλακάκια του;', en: 'The riddle says it glows like the sea inside. What colour are most of its tiles?' },
        options: {
          el: ['Γαλάζιο', 'Κόκκινο', 'Μαύρο', 'Χρυσό'],
          en: ['Blue', 'Red', 'Black', 'Gold'],
        },
        correct: 0,
        explanation: {
          el: 'Περίπου 20.000 πλακάκια από την πόλη İznik (Νίκαια), ζωγραφισμένα με τουλίπες και γαρίφαλα σε γαλάζιο και άσπρο, σκεπάζουν τους τοίχους. Γι\' αυτό όλος ο κόσμος το λέει «Γαλάζιο Τζαμί».',
          en: 'About 20,000 tiles from the town of İznik, painted with tulips and carnations in blue and white, cover the walls. That is why everyone calls it the Blue Mosque.',
        },
      },
      onSite: {
        question: { el: 'Βγες στην αυλή ή στην πλατεία και μέτρησε τους μιναρέδες, τους ψηλούς λεπτούς πύργους. Πόσοι είναι;', en: 'Step into the courtyard or the square and count the minarets, the tall thin towers. How many are there?' },
        options: {
          el: ['Τέσσερις', 'Έξι', 'Δύο', 'Οκτώ'],
          en: ['Four', 'Six', 'Two', 'Eight'],
        },
        correct: 1,
        explanation: {
          el: 'Έξι μιναρέδες, κάτι πολύ σπάνιο. Λένε πως ο σουλτάνος ζήτησε μιναρέδες από χρυσό, «altın» στα τουρκικά, και ο αρχιτέκτονας άκουσε «altı», δηλαδή έξι!',
          en: 'Six minarets, which is very rare. People say the sultan asked for minarets of gold, “altın” in Turkish, and the architect heard “altı”, which means six!',
        },
      },
      story: {
        el: 'Ο σουλτάνος Ahmed ο Α΄ (Αχμέτ) ήταν μόλις δεκαεννιά χρονών όταν διέταξε αυτό το τζαμί, το 1609, ακριβώς απέναντι από την Αγία Σοφία, και τελείωσε επτά χρόνια αργότερα. Ο αρχιτέκτονάς του, ο Mehmed Ağa, είχε μαθητεύσει δίπλα στον μεγάλο μάστορα Sinan (Σινάν), και στοίβαξε θόλο πάνω σε θόλο, ώστε το κτίριο να μοιάζει με βουνό από φούσκες. Μέσα, περίπου 20.000 ζωγραφιστά πλακάκια από την πόλη İznik, γεμάτα τουλίπες και γαρίφαλα, σκεπάζουν τους τοίχους σε γαλάζιο και άσπρο· γι\' αυτό οι επισκέπτες το λένε Γαλάζιο Τζαμί. Οι έξι μιναρέδες του έκαναν αίσθηση, γιατί τότε μόνο το πιο ιερό τζαμί, στη Μέκκα, είχε έξι. Ο κόσμος λέει ακόμη ένα αστείο: ο σουλτάνος ζήτησε «altın», χρυσούς μιναρέδες, και ο αρχιτέκτονας άκουσε «altı», έξι! Πριν μπεις, βγάλε τα παπούτσια σου, όπως όλοι, και κοίτα ψηλά.',
        en: 'Sultan Ahmed I was only nineteen when he ordered this mosque in 1609, right opposite Hagia Sophia, and it was finished seven years later. His architect, Mehmed Ağa, had learned from the great master Sinan, and he piled dome upon dome so the building looks like a mountain of bubbles. Inside, about 20,000 painted tiles from the town of İznik, full of tulips and carnations, cover the walls in blue and white; that is why visitors call it the Blue Mosque. Its six minarets caused a stir, because back then only the holiest mosque, in Mecca, had six. People still tell a joke: the sultan asked for altın, golden minarets, and the architect heard altı, six! Before you go in, take off your shoes, as everyone does, and look up.',
      },
      didYouKnow: {
        el: 'Στην είσοδο της αυλής από τη δυτική πλευρά κρέμεται ψηλά μια βαριά σιδερένια αλυσίδα. Μόνο ο σουλτάνος επιτρεπόταν να μπαίνει έφιππος, και έπρεπε να σκύβει το κεφάλι για να περάσει, μια υπενθύμιση ταπεινότητας ακόμη και για τον πιο ισχυρό άνθρωπο της αυτοκρατορίας.',
        en: 'A heavy iron chain hangs high across the western entrance to the courtyard. Only the sultan was allowed to ride in on horseback, and he had to bow his head to pass under it, a reminder of humility even for the most powerful man in the empire.',
      },
      quiz: [
        {
          q: { el: 'Πόσων χρονών ήταν ο σουλτάνος Ahmed όταν διέταξε το τζαμί;', en: 'How old was Sultan Ahmed when he ordered the mosque?' },
          options: {
            el: ['Ενενήντα', 'Πενήντα', 'Τριάντα πέντε', 'Δεκαεννιά'],
            en: ['Ninety', 'Fifty', 'Thirty-five', 'Nineteen'],
          },
          correct: 3,
          explanation: {
            el: 'Ήταν μόλις δεκαεννιά χρονών. Ένας έφηβος σουλτάνος με μια τεράστια ιδέα!',
            en: 'He was only nineteen. A teenage sultan with an enormous idea!',
          },
        },
        {
          q: { el: 'Από ποια πόλη ήρθαν τα πλακάκια;', en: 'Which town did the tiles come from?' },
          options: {
            el: ['Από την Αθήνα', 'Από τη Βενετία', 'Από το İznik', 'Από το Κάιρο'],
            en: ['Athens', 'Venice', 'İznik', 'Cairo'],
          },
          correct: 2,
          explanation: {
            el: 'Το İznik, η αρχαία Νίκαια, ήταν τότε η πόλη με τα πιο όμορφα πλακάκια του κόσμου.',
            en: 'İznik, the ancient Nicaea, was then the town with the most beautiful tiles in the world.',
          },
        },
        {
          q: { el: 'Τι πρέπει να κάνεις πριν μπεις μέσα;', en: 'What must you do before you go inside?' },
          options: {
            el: ['Να βγάλεις τα παπούτσια σου', 'Να φορέσεις καπέλο', 'Να χτυπήσεις μια καμπάνα', 'Να αγοράσεις εισιτήριο'],
            en: ['Take off your shoes', 'Put on a hat', 'Ring a bell', 'Buy a ticket'],
          },
          correct: 0,
          explanation: {
            el: 'Σε κάθε τζαμί βγάζουμε τα παπούτσια, γιατί το πάτωμα με τα χαλιά είναι ο χώρος της προσευχής. Η είσοδος είναι δωρεάν.',
            en: 'In every mosque we take off our shoes, because the carpeted floor is the place of prayer. Entry is free.',
          },
        },
      ],
    },

    // ── 4. Gülhane Park ────────────────────────────────────────────────────────
    {
      id: 'gulhane-park',
      name: { el: 'Πάρκο Gülhane', en: 'Gülhane Park' },
      emoji: '🌷',
      lat: 41.0129,
      lng: 28.9803,
      radiusM: 80,
      riddle: {
        el: 'Πίσω από ψηλά τείχη με πύργους κρυβόταν κάποτε ο κήπος με τα τριαντάφυλλα των σουλτάνων. Σήμερα περνάς την πύλη του ελεύθερα, περπατάς κάτω από τα πλατάνια, και στο τέλος του δρόμου σε περιμένει η θάλασσα.',
        en: 'Behind tall walls with towers, the rose garden of the sultans was once hidden away. Today you walk through its gate for free, stroll under the plane trees, and at the end of the path the sea is waiting for you.',
      },
      parentHint: {
        el: 'Είναι το πάρκο Gülhane (Γκιουλχανέ, «το σπίτι των ρόδων»), δίπλα στο παλάτι Topkapı. Από το Γαλάζιο Τζαμί περάστε πίσω από την Αγία Σοφία, δείτε αριστερά την Αυτοκρατορική Πύλη του παλατιού και την κρήνη του Ahmed III με τη φαρδιά στέγη, και κατηφορίστε την Alemdar Caddesi, 15 λεπτά συνολικά, ως την πύλη του πάρκου δίπλα στη στάση Gülhane του τραμ.',
        en: 'It is Gülhane Park, “the house of roses”, beside Topkapı Palace. From the Blue Mosque walk round behind Hagia Sophia, spot the palace\'s Imperial Gate and the Fountain of Ahmed III with its wide roof on your left, then head downhill along Alemdar Caddesi, 15 minutes in all, to the park gate next to the Gülhane tram stop.',
      },
      unlockQuestion: {
        question: { el: 'Οι τουλίπες ξεκίνησαν από τους κήπους των σουλτάνων και ταξίδεψαν στην Ευρώπη. Ποια χώρα είναι σήμερα διάσημη για τις τουλίπες της;', en: 'Tulips started in the gardens of the sultans and travelled to Europe. Which country is famous for its tulips today?' },
        options: {
          el: ['Η Ιταλία', 'Η Ελλάδα', 'Η Αίγυπτος', 'Η Ολλανδία'],
          en: ['Italy', 'Greece', 'Egypt', 'The Netherlands (Holland)'],
        },
        correct: 3,
        explanation: {
          el: 'Οι βολβοί της τουλίπας έφυγαν από την αυλή του σουλτάνου για τη Βιέννη τον 16ο αιώνα και από εκεί για την Ολλανδία. Η λέξη «τουλίπα» έρχεται από την τουρκική λέξη για το τουρμπάνι, το «tülbent», γιατί το λουλούδι έμοιαζε με τουρμπάνι.',
          en: 'Tulip bulbs left the sultan\'s court for Vienna in the 1500s and went on from there to Holland. The word “tulip” comes from the Turkish word for a turban, “tülbent”, because the flower looked like one.',
        },
      },
      onSite: {
        question: { el: 'Περπάτησε τον μεγάλο δρόμο του πάρκου ως το τέλος του, εκεί που ανοίγει μια βεράντα. Τι βλέπεις από κάτω;', en: 'Walk the main path of the park all the way to the end, where a terrace opens up. What do you see below?' },
        options: {
          el: ['Τη θάλασσα με καράβια', 'Μια μεγάλη λίμνη', 'Ένα γήπεδο ποδοσφαίρου', 'Μια έρημο με άμμο'],
          en: ['The sea, with ships', 'A big lake', 'A football stadium', 'A sandy desert'],
        },
        correct: 0,
        explanation: {
          el: 'Η άκρη του πάρκου λέγεται Sarayburnu, «η μύτη του παλατιού». Εδώ ο Κεράτιος Κόλπος συναντά τον Βόσπορο και τη θάλασσα του Μαρμαρά, και απέναντι βλέπεις την Ασία.',
          en: 'The tip of the park is called Sarayburnu, “Palace Point”. Here the Golden Horn meets the Bosphorus and the Sea of Marmara, and across the water you can see Asia.',
        },
      },
      story: {
        el: 'Για σχεδόν 400 χρόνια οι σουλτάνοι της Οθωμανικής Αυτοκρατορίας ζούσαν δίπλα, στο παλάτι Topkapı (Τοπκαπί), και αυτό το πάρκο ήταν ο ιδιωτικός τους κήπος, γεμάτος τριαντάφυλλα· γι\' αυτό ονομάστηκε Gülhane, το σπίτι των ρόδων. Μόλις το 1912 άνοιξε για όλους. Το παλάτι πίσω από τα τείχη είχε κουζίνες για χιλιάδες ανθρώπους, βιβλιοθήκη, θησαυροφυλάκιο με ένα διαμάντι μεγάλο σαν καρύδι, και έναν μυστικό κόσμο δωματίων που λεγόταν χαρέμι. Το αγαπημένο λουλούδι των σουλτάνων ήταν η τουλίπα, και οι βολβοί της ταξίδεψαν από εδώ στη Βιέννη και μετά στην Ολλανδία, όπου έγιναν παγκοσμίως διάσημοι. Βαθιά μέσα στο πάρκο στέκεται μια μοναχική πέτρινη κολόνα από τα ρωμαϊκά χρόνια, πάνω από 1.600 ετών, από τα πιο παλιά μνημεία της Πόλης. Κάθε άνοιξη το πάρκο γεμίζει ακόμη με χιλιάδες τουλίπες.',
        en: 'For almost 400 years the sultans of the Ottoman Empire lived next door, in Topkapı Palace, and this park was their private garden, full of roses, so it was called Gülhane, the house of roses. Only in 1912 was it opened to everyone. The palace behind the walls had kitchens for thousands of people, a library, a treasury with a diamond as big as a walnut, and a secret world of rooms called the harem. Tulips were the favourite flower of the sultans, and their bulbs travelled from here to Vienna and then to Holland, where they became world famous. Deep in the park stands a lonely stone column from Roman times, more than 1,600 years old, one of the oldest monuments in the city. Every spring the park still blooms with thousands of tulips.',
      },
      didYouKnow: {
        el: 'Το Διαμάντι του Κουταλά (Kaşıkçı Elması), 86 καρατίων, είναι το αστέρι του θησαυροφυλακίου του Topkapı. Ο θρύλος λέει ότι ένας φτωχός ψαράς το βρήκε σε έναν σωρό σκουπιδιών και το αντάλλαξε με έναν κουταλά για τρία ξύλινα κουτάλια.',
        en: 'The Spoonmaker\'s Diamond (Kaşıkçı Elması), 86 carats, is the star of the Topkapı treasury. Legend says a poor fisherman found it on a rubbish heap and swapped it with a spoon-maker for three wooden spoons.',
      },
      quiz: [
        {
          q: { el: 'Τι σημαίνει Gülhane;', en: 'What does Gülhane mean?' },
          options: {
            el: ['Το σπίτι του βασιλιά', 'Ο κήπος με τις τουλίπες', 'Το σπίτι των ρόδων', 'Η θάλασσα'],
            en: ['The house of the king', 'The tulip garden', 'The house of roses', 'The sea'],
          },
          correct: 2,
          explanation: {
            el: 'Gül είναι το τριαντάφυλλο στα τουρκικά και hane το σπίτι. Ήταν ο ροδόκηπος των σουλτάνων.',
            en: 'Gül is Turkish for rose and hane means house. It was the rose garden of the sultans.',
          },
        },
        {
          q: { el: 'Πότε άνοιξε το πάρκο για όλους;', en: 'When did the park open to everyone?' },
          options: {
            el: ['Το 1453', 'Το 1912', 'Πέρυσι', 'Το 2000'],
            en: ['In 1453', 'In 1912', 'Last year', 'In 2000'],
          },
          correct: 1,
          explanation: {
            el: 'Το 1912 ο κήπος των σουλτάνων έγινε δημόσιο πάρκο, και από τότε είναι ανοιχτός για όλους.',
            en: 'In 1912 the sultans\' garden became a public park, and it has been open to everyone ever since.',
          },
        },
        {
          q: { el: 'Ποιο ήταν το αγαπημένο λουλούδι των σουλτάνων;', en: 'What was the favourite flower of the sultans?' },
          options: {
            el: ['Η μαργαρίτα', 'Το ηλιοτρόπιο', 'Ο κρίνος', 'Η τουλίπα'],
            en: ['The daisy', 'The sunflower', 'The lily', 'The tulip'],
          },
          correct: 3,
          explanation: {
            el: 'Η τουλίπα. Οι σουλτάνοι την αγαπούσαν τόσο, που μια ολόκληρη εποχή της ιστορίας τους ονομάστηκε «Εποχή της Τουλίπας».',
            en: 'The tulip. The sultans loved it so much that a whole period of their history is called the “Tulip Era”.',
          },
        },
      ],
    },

    // ── 5. Grand Bazaar / Kapalıçarşı ──────────────────────────────────────────
    {
      id: 'grand-bazaar',
      name: { el: 'Μεγάλο Παζάρι (Kapalıçarşı)', en: 'Grand Bazaar (Kapalıçarşı)' },
      emoji: '🪔',
      lat: 41.0105,
      lng: 28.9702,
      radiusM: 60,
      riddle: {
        el: 'Μια ολόκληρη πόλη κρύβεται κάτω από μία στέγη: δρόμοι, σιντριβάνια, ακόμη και ταχυδρομείο. Χιλιάδες μαγαζιά πουλάνε χαλιά, λάμπες και λουκούμια, και κανένας δεν πληρώνει την πρώτη τιμή που ακούει!',
        en: 'A whole town hides under one roof: streets, fountains, even a post office. Thousands of shops sell carpets, lamps and sweets, and nobody ever pays the first price they hear!',
      },
      parentHint: {
        el: 'Είναι το Μεγάλο Παζάρι (Kapalıçarşı, η «σκεπαστή αγορά»), στην πύλη Nuruosmaniye. Από το πάρκο Gülhane πάρτε το τραμ T1 δύο στάσεις ως το Çemberlitaş και περπατήστε 5 λεπτά από τη Vezirhan Caddesi ως το τζαμί Nuruosmaniye· η πύλη είναι ακριβώς δίπλα του.',
        en: 'It is the Grand Bazaar (Kapalıçarşı, the “covered market”), at the Nuruosmaniye gate. From Gülhane Park take tram T1 two stops to Çemberlitaş and walk 5 minutes along Vezirhan Caddesi to the Nuruosmaniye Mosque; the gate is right beside it.',
      },
      unlockQuestion: {
        question: { el: 'Ο γρίφος λέει ότι κανείς δεν πληρώνει την πρώτη τιμή. Πώς λέγεται αυτό το παιχνίδι ανάμεσα σε αγοραστή και πωλητή;', en: 'The riddle says nobody pays the first price. What is this game between buyer and seller called?' },
        options: {
          el: ['Κρυφτό', 'Παζάρι (διαπραγμάτευση)', 'Λαχειοφόρος', 'Δημοπρασία'],
          en: ['Hide and seek', 'Bargaining (haggling)', 'A lottery', 'An auction'],
        },
        correct: 1,
        explanation: {
          el: 'Ο πωλητής ξεκινά ψηλά, εσύ προσφέρεις λιγότερα, και συναντιέστε κάπου στη μέση, με χαμόγελο και συχνά με ένα τσάι. Η ελληνική λέξη «παζάρι» έρχεται από την τουρκική «pazar», που σημαίνει αγορά.',
          en: 'The seller starts high, you offer less, and you meet somewhere in the middle, with a smile and often a glass of tea. The Greek word for haggling, “pazari”, comes from the Turkish “pazar”, which means market.',
        },
      },
      onSite: {
        question: { el: 'Κοίταξε ψηλά, πάνω από την πύλη. Τι είναι σκαλισμένο εκεί;', en: 'Look up above the gate. What is carved there?' },
        options: {
          el: ['Ένα μεγάλο ρολόι', 'Ένα άγαλμα αλόγου', 'Ένα έμβλημα με σημαίες, όπλα και μια περίτεχνη υπογραφή', 'Ένα τεράστιο χαλί'],
          en: ['A big clock', 'A statue of a horse', 'An emblem with flags, weapons and a fancy signature', 'A giant carpet'],
        },
        correct: 2,
        explanation: {
          el: 'Είναι το έμβλημα της Οθωμανικής Αυτοκρατορίας. Η στριφτή «υπογραφή» λέγεται τουγράς (tuğra): το όνομα του σουλτάνου ζωγραφισμένο σαν εικόνα. Η επιγραφή λέει ότι ο Θεός αγαπά τον έμπορο.',
          en: 'It is the emblem of the Ottoman Empire. The curly “signature” is called a tughra (tuğra): the sultan\'s name drawn like a picture. The inscription says that God loves the merchant.',
        },
      },
      story: {
        el: 'Λίγο μετά το 1453, όταν οι Οθωμανοί πήραν την Πόλη, ο σουλτάνος Mehmed ο Β΄ (Μωάμεθ) διέταξε μια γερή πέτρινη αίθουσα όπου οι έμποροι θα φύλαγαν με ασφάλεια τα πιο πολύτιμα εμπορεύματά τους. Γύρω της σκεπάστηκαν όλο και περισσότεροι δρόμοι, ώσπου η αγορά έγινε μια πόλη μόνη της: περίπου 60 δρόμοι, χιλιάδες μαγαζιά, τζαμιά, σιντριβάνια, ταχυδρομείο και περισσότερες από είκοσι πύλες. Χαλιά έρχονταν με καμήλες από την Περσία, μετάξι από την Κίνα, μπαχαρικά από την Ινδία και πετράδια από παντού. Φωτιές και σεισμοί την έβλαψαν πολλές φορές, και κάθε φορά οι έμποροι την ξανάχτιζαν. Σήμερα εκατοντάδες χιλιάδες άνθρωποι την περπατούν σε μία μόνο μέρα. Θυμήσου τον κανόνα του παζαριού: χαμογέλα, ρώτα την τιμή, πρόσφερε λιγότερα και απόλαυσε το παιχνίδι.',
        en: 'Soon after the Ottomans took the city in 1453, Sultan Mehmed II ordered a strong stone hall where merchants could keep their most precious goods safe. Around it, more and more streets were roofed over, until the market became a town of its own: about 60 streets, thousands of shops, mosques, fountains, a post office and more than twenty gates. Carpets came by camel from Persia, silk from China, spices from India and jewels from everywhere. Fires and earthquakes damaged it many times, and each time the traders rebuilt it. Today hundreds of thousands of people walk through it in a single day. Remember the rule of the bazaar: smile, ask the price, offer less, and enjoy the game.',
      },
      didYouKnow: {
        el: 'Το παζάρι κρατά ωράριο χωριού: κάθε βράδυ οι πύλες του κλειδώνουν, η πόλη κάτω από τη στέγη κοιμάται με τους δικούς της νυχτοφύλακες, όπως πριν από 500 χρόνια, και τις Κυριακές μένει κλειστό. Οι λαβύρινθοί του χρησίμευσαν ως σκηνικό σε ταινίες περιπέτειας, με καταδιώξεις πάνω στις στέγες του.',
        en: 'The bazaar keeps village hours: every evening its gates are locked and the town under the roof sleeps with its own night watchmen, just as it did 500 years ago, and on Sundays it stays closed. Its maze of lanes has served as a film set for adventure movies, with chases across its rooftops.',
      },
      quiz: [
        {
          q: { el: 'Ποιος σουλτάνος ξεκίνησε το παζάρι;', en: 'Which sultan started the bazaar?' },
          options: {
            el: ['Ο Mehmed ο Β΄', 'Ο Ahmed ο Α΄', 'Ο Ιουστινιανός', 'Ο Σουλεϊμάν'],
            en: ['Mehmed II', 'Ahmed I', 'Justinian', 'Suleiman'],
          },
          correct: 0,
          explanation: {
            el: 'Ο Mehmed ο Β΄, ο σουλτάνος που πήρε την Πόλη το 1453, έχτισε την πρώτη πέτρινη αίθουσα του παζαριού λίγα χρόνια αργότερα.',
            en: 'Mehmed II, the sultan who took the city in 1453, built the first stone hall of the bazaar a few years later.',
          },
        },
        {
          q: { el: 'Πόσες πύλες έχει περίπου το παζάρι;', en: 'About how many gates does the bazaar have?' },
          options: {
            el: ['Μία', 'Περισσότερες από είκοσι', 'Τρεις', 'Εκατό'],
            en: ['One', 'More than twenty', 'Three', 'A hundred'],
          },
          correct: 1,
          explanation: {
            el: 'Περισσότερες από είκοσι πύλες οδηγούν μέσα στο παζάρι. Αν χαθείς, ρώτα έναν μαγαζάτορα: όλοι ξέρουν τον δρόμο.',
            en: 'More than twenty gates lead into the bazaar. If you get lost, ask a shopkeeper: they all know the way.',
          },
        },
        {
          q: { el: 'Τι έκαναν οι έμποροι κάθε φορά που φωτιά ή σεισμός χαλούσε το παζάρι;', en: 'What did the traders do each time fire or earthquake damaged the bazaar?' },
          options: {
            el: ['Το εγκατέλειπαν', 'Έφευγαν στην Αίγυπτο', 'Πουλούσαν μόνο στον δρόμο', 'Το ξανάχτιζαν'],
            en: ['They abandoned it', 'They moved to Egypt', 'They sold only in the street', 'They rebuilt it'],
          },
          correct: 3,
          explanation: {
            el: 'Κάθε φορά το ξανάχτιζαν. Πάνω από 500 χρόνια, το παζάρι δεν σταμάτησε ποτέ να δουλεύει για πολύ.',
            en: 'Each time they rebuilt it. In more than 500 years, the bazaar has never stopped trading for long.',
          },
        },
      ],
    },

    // ── 6. Spice Bazaar / Mısır Çarşısı ────────────────────────────────────────
    {
      id: 'spice-bazaar',
      name: { el: 'Αιγυπτιακή Αγορά (Mısır Çarşısı)', en: 'Spice Bazaar (Mısır Çarşısı)' },
      emoji: '🌶️',
      lat: 41.0165,
      lng: 28.9705,
      radiusM: 40,
      riddle: {
        el: 'Δίπλα σε ένα τζαμί γεμάτο περιστέρια, μια αγορά σε σχήμα Γ μυρίζει κανέλα, πιπέρι και τριαντάφυλλο. Τα μπαχαρικά στέκονται σε πολύχρωμες πυραμίδες, και το όνομά της είναι δανεικό από τη χώρα των Φαραώ.',
        en: 'Next to a mosque full of pigeons, an L-shaped market smells of cinnamon, pepper and rose. Spices sit in colourful pyramids, and its name is borrowed from the land of the pharaohs.',
      },
      parentHint: {
        el: 'Είναι η Αιγυπτιακή Αγορά (Mısır Çarşısı), γνωστή και ως Αγορά των Μπαχαρικών, στο Eminönü. Από την πύλη Nuruosmaniye κατηφορίστε 12 λεπτά προς τη θάλασσα από τη Mahmutpaşa Yokuşu ως την πλατεία με το Νέο Τζαμί (Yeni Cami)· η κύρια είσοδος είναι στην πλατεία.',
        en: 'It is the Spice Bazaar (Mısır Çarşısı, the Egyptian Market), in Eminönü. From the Nuruosmaniye gate walk 12 minutes downhill towards the water along Mahmutpaşa Yokuşu to the square with the New Mosque (Yeni Cami); the main entrance is on the square.',
      },
      unlockQuestion: {
        question: { el: 'Το όνομα της αγοράς είναι δανεικό από τη χώρα των Φαραώ. Ποια χώρα είναι αυτή;', en: 'The market\'s name is borrowed from the land of the pharaohs. Which country is that?' },
        options: {
          el: ['Η Ινδία', 'Η Περσία', 'Η Αίγυπτος', 'Η Κίνα'],
          en: ['India', 'Persia', 'Egypt', 'China'],
        },
        correct: 2,
        explanation: {
          el: 'Mısır σημαίνει Αίγυπτος στα τουρκικά. Η αγορά πληρώθηκε με φόρους από την Αίγυπτο, που τότε ανήκε στην Οθωμανική Αυτοκρατορία, και πολλά μπαχαρικά έφταναν από την Ινδία μέσω Αιγύπτου.',
          en: 'Mısır means Egypt in Turkish. The market was paid for with taxes from Egypt, then part of the Ottoman Empire, and many spices arrived from India by way of Egypt.',
        },
      },
      onSite: {
        question: { el: 'Κάνε ένα βήμα πίσω στην πλατεία και κοίτα τη στέγη της αγοράς. Τι έχει επάνω της;', en: 'Take a step back into the square and look at the roof of the market. What is on top of it?' },
        options: {
          el: ['Μια σειρά από μικρούς θόλους', 'Κόκκινα κεραμίδια', 'Έναν ψηλό πύργο με ρολόι', 'Μια γυάλινη οροφή'],
          en: ['A row of small domes', 'Red roof tiles', 'A tall clock tower', 'A glass roof'],
        },
        correct: 0,
        explanation: {
          el: 'Δεκάδες μικροί θόλοι σκεπάζουν τα δύο μακριά σκέλη της αγοράς. Από ψηλά μοιάζει με ένα Γ φτιαγμένο από φούσκες, και οι γλάροι λατρεύουν να κάθονται πάνω τους.',
          en: 'Dozens of little domes cover the two long arms of the market. From above it looks like an L made of bubbles, and the seagulls love to perch on them.',
        },
      },
      story: {
        el: 'Αυτή η αγορά τελείωσε το 1664, μαζί με το Νέο Τζαμί δίπλα της, και πληρώθηκε με φόρους από την Αίγυπτο, που τότε ήταν μια χώρα της Οθωμανικής Αυτοκρατορίας. Γι\' αυτό ακόμη τη λένε Αιγυπτιακή Αγορά. Για αιώνες, καράβια από την Αίγυπτο και την Ινδία ξεφόρτωναν εδώ σακιά με πιπέρι, κανέλα, γαρίφαλο και σαφράν, το πιο ακριβό μπαχαρικό του κόσμου, που φτιάχνεται από τις μικροσκοπικές κλωστές ενός μωβ λουλουδιού, του κρόκου. Το κτίριο έχει δύο μακριά σκέλη που ενώνονται σε μια γωνία, σαν το γράμμα Γ, με πύλες στις άκρες. Σήμερα οι πάγκοι στοιβάζουν ακόμη τα μπαχαρικά σε πυραμίδες από κόκκινο, κίτρινο και πορτοκαλί, δίπλα σε πύργους από λουκούμια και ξερά φρούτα. Έξω, πωλητές προσφέρουν ποτηράκια με σπόρους, και εκατοντάδες περιστέρια τους περιμένουν.',
        en: 'This market was finished in 1664 as part of the New Mosque next door, and it was paid for with taxes from Egypt, then a land of the Ottoman Empire. That is why it is still called the Egyptian Market. For centuries, ships from Egypt and India unloaded here sacks of pepper, cinnamon, cloves and saffron, the most expensive spice in the world, made from the tiny threads of a purple crocus flower. The building has two long arms that meet in a corner, like the letter L, with gates at the ends. Today the stalls still pile spices into pyramids of red, yellow and orange, next to towers of Turkish delight and dried fruit. Outside, sellers offer little cups of seed, and hundreds of pigeons wait for it.',
      },
      didYouKnow: {
        el: 'Το Νέο Τζαμί δίπλα χρειάστηκε σχεδόν 70 χρόνια για να χτιστεί: το ξεκίνησε το 1597 η Safiye Sultan, η μητέρα του σουλτάνου Mehmed Γ΄, και το τελείωσε το 1665 μια άλλη μητέρα σουλτάνου, η Turhan Hatice. Τζαμί και αγορά ήταν έργα δύο πανίσχυρων βασιλομητόρων.',
        en: 'The New Mosque next door took almost 70 years to build: it was begun in 1597 by Safiye Sultan, mother of Sultan Mehmed III, and finished in 1665 by another sultan\'s mother, Turhan Hatice. Both mosque and market were projects of two powerful queen mothers.',
      },
      quiz: [
        {
          q: { el: 'Με ποια χρήματα χτίστηκε η αγορά;', en: 'What money paid for the market?' },
          options: {
            el: ['Με χρυσό από τη Βενετία', 'Με εισιτήρια', 'Με δώρα των εμπόρων', 'Με φόρους από την Αίγυπτο'],
            en: ['Gold from Venice', 'Entrance tickets', 'Gifts from the merchants', 'Taxes from Egypt'],
          },
          correct: 3,
          explanation: {
            el: 'Οι φόροι από την Αίγυπτο πλήρωσαν το χτίσιμο, και έτσι η αγορά πήρε το όνομά της.',
            en: 'Taxes from Egypt paid for the building, and that is how the market got its name.',
          },
        },
        {
          q: { el: 'Ποιο είναι το πιο ακριβό μπαχαρικό του κόσμου;', en: 'What is the most expensive spice in the world?' },
          options: {
            el: ['Το πιπέρι', 'Η κανέλα', 'Το σαφράν (ο κρόκος)', 'Το αλάτι'],
            en: ['Pepper', 'Cinnamon', 'Saffron', 'Salt'],
          },
          correct: 2,
          explanation: {
            el: 'Το σαφράν. Κάθε λουλούδι κρόκου δίνει μόνο τρεις κλωστίτσες, και χρειάζονται χιλιάδες λουλούδια για λίγα γραμμάρια.',
            en: 'Saffron. Each crocus flower gives only three tiny threads, and it takes thousands of flowers to make a few grams.',
          },
        },
        {
          q: { el: 'Με ποιο γράμμα μοιάζει το σχήμα του κτιρίου;', en: 'Which letter does the shape of the building look like?' },
          options: {
            el: ['Με το Ο', 'Με το Γ (L)', 'Με το Χ', 'Με το Τ'],
            en: ['The letter O', 'The letter L', 'The letter X', 'The letter T'],
          },
          correct: 1,
          explanation: {
            el: 'Δύο μακριοί διάδρομοι ενώνονται σε μια γωνία, σαν το γράμμα Γ. Στη γωνία υπάρχει ένα μικρό μπαλκόνι για προσευχή.',
            en: 'Two long corridors meet at a corner, like the letter L. At the corner there is a little prayer balcony.',
          },
        },
      ],
    },

    // ── 7. Galata Bridge / Galata Köprüsü ──────────────────────────────────────
    {
      id: 'galata-bridge',
      name: { el: 'Γέφυρα του Γαλατά (Galata Köprüsü)', en: 'Galata Bridge (Galata Köprüsü)' },
      emoji: '🎣',
      lat: 41.0201,
      lng: 28.9733,
      radiusM: 80,
      riddle: {
        el: 'Μια γέφυρα με δύο ορόφους: επάνω, εκατοντάδες καλάμια ψαρέματος κρέμονται πάνω από το νερό, και από κάτω ο κόσμος τρώει με τα πόδια σχεδόν μέσα στη θάλασσα. Γλάροι ακολουθούν τα πλοία που φεύγουν για μια άλλη ήπειρο.',
        en: 'A bridge with two floors: on top, hundreds of fishing rods dangle over the water, and underneath people eat with their feet almost in the sea. Seagulls chase the boats that leave for another continent.',
      },
      parentHint: {
        el: 'Είναι η Γέφυρα του Γαλατά (Galata Köprüsü) πάνω από τον Κεράτιο Κόλπο. Από την Αιγυπτιακή Αγορά περάστε την πλατεία του Eminönü, 3 λεπτά, και περπατήστε στο πάνω κατάστρωμα ως τη μέση της γέφυρας.',
        en: 'It is the Galata Bridge (Galata Köprüsü) over the Golden Horn. From the Spice Bazaar cross Eminönü square, 3 minutes, and walk along the top deck to the middle of the bridge.',
      },
      unlockQuestion: {
        question: { el: 'Το νερό κάτω από τη γέφυρα λέγεται Κεράτιος Κόλπος, στα αγγλικά «Χρυσό Κέρας». Γιατί «κέρας»;', en: 'The water under the bridge is called the Golden Horn. Why “horn”?' },
        options: {
          el: ['Γιατί ο κόλπος είναι στενός και κυρτός σαν κέρατο', 'Γιατί ζουν ελάφια στις όχθες του', 'Γιατί τα πλοία κορνάρουν', 'Γιατί το νερό του είναι χρυσό'],
          en: ['Because the inlet is narrow and curved like a horn', 'Because deer live on its banks', 'Because the ships blow their horns', 'Because its water is gold'],
        },
        correct: 0,
        explanation: {
          el: 'Από ψηλά ο κόλπος μοιάζει με κυρτό κέρατο, και «χρυσός» τον είπαν για τα χρυσαφένια ηλιοβασιλέματα και τα πλούτη που έφερναν τα καράβια. Οι Έλληνες τον λένε Κεράτιο, από την ίδια λέξη: κέρας.',
          en: 'From above, the inlet looks like a curved horn, and “golden” came from its golden sunsets and the riches the ships brought in. Greeks call it Keratios, from the same word for horn.',
        },
      },
      onSite: {
        question: { el: 'Σκύψε λίγο από το κάγκελο. Τι υπάρχει ακριβώς κάτω από τα πόδια σου, στον κάτω όροφο της γέφυρας;', en: 'Lean a little over the railing. What is right under your feet, on the lower floor of the bridge?' },
        options: {
          el: ['Σιδηροδρομικές γραμμές', 'Ένα μουσείο', 'Αποθήκες για τα ψάρια', 'Εστιατόρια και καφενεία με τραπέζια δίπλα στο νερό'],
          en: ['Railway tracks', 'A museum', 'Storerooms for the fish', 'Restaurants and cafés with tables by the water'],
        },
        correct: 3,
        explanation: {
          el: 'Ο κάτω όροφος είναι γεμάτος εστιατόρια και καφενεία, με τα τραπέζια σχεδόν να αγγίζουν το νερό. Πρόσεχε από πάνω: τα αγκίστρια των ψαράδων περνούν ακριβώς μπροστά από τα πιάτα!',
          en: 'The lower floor is lined with restaurants and cafés, their tables almost touching the water. Watch out from above: the fishermen\'s hooks drop right past the plates!',
        },
      },
      story: {
        el: 'Για πολύ καιρό δεν υπήρχε γέφυρα εδώ· ο κόσμος περνούσε τον Κεράτιο Κόλπο με βάρκες με κουπιά. Η πρώτη γέφυρα σε αυτό το σημείο, ξύλινη, άνοιξε το 1845, και από τότε η πόλη έχτισε ολοένα καινούργιες· αυτή που πατάς είναι από το 1994 και ανοίγει στη μέση για να περνούν τα ψηλά πλοία. Μέρα νύχτα, ψαράδες στέκονται στα κάγκελα και περιμένουν μικρά ασημένια ψαράκια, τα istavrit (σαυρίδια), ενώ οι γλάροι πετούν από πάνω για το μερίδιό τους. Κάτω από τα πόδια σου, εστιατόρια κάθονται σχεδόν πάνω στο νερό, και στην όχθη βάρκες ψήνουν ψάρι για το διάσημο σάντουιτς balık ekmek (μπαλίκ εκμέκ). Από την αποβάθρα δίπλα στη γέφυρα, τα πλοιάρια περνούν τον Βόσπορο στην ασιατική πλευρά σε είκοσι περίπου λεπτά. Είναι μια πόλη όπου αλλάζεις ήπειρο πριν από το μεσημεριανό!',
        en: 'For a long time there was no bridge here; people crossed the Golden Horn by rowing boat. The first bridge on this spot, made of wood, opened in 1845, and the city has built new ones ever since; the one you are standing on dates from 1994 and can open in the middle to let tall ships through. Day and night, fishermen line the railings, hoping for small silvery fish called istavrit, and seagulls hover waiting for their share. Below your feet, restaurants sit almost on the water, and by the shore boats grill fish for the famous fish sandwich, balık ekmek. From the pier next to the bridge, ferries cross the Bosphorus to the Asian side in about twenty minutes. This is a city where you can change continents before lunch!',
      },
      didYouKnow: {
        el: 'Το 1502 ο Λεονάρντο ντα Βίντσι σχεδίασε για τον σουλτάνο Bayezid Β΄ μια γέφυρα με ένα μόνο τόξο πάνω από τον Κεράτιο· δεν χτίστηκε ποτέ, αλλά το 2001 μια μικρότερη εκδοχή της κατασκευάστηκε στη Νορβηγία, αποδεικνύοντας ότι το σχέδιο θα στεκόταν.',
        en: 'In 1502 Leonardo da Vinci designed a single-arch bridge across the Golden Horn for Sultan Bayezid II; it was never built, but in 2001 a smaller version was constructed in Norway, proving his design would have stood.',
      },
      quiz: [
        {
          q: { el: 'Πότε άνοιξε η πρώτη γέφυρα σε αυτό το σημείο;', en: 'When did the first bridge open on this spot?' },
          options: {
            el: ['Το 1453', 'Το 1845', 'Το 1994', 'Το 2010'],
            en: ['In 1453', 'In 1845', 'In 1994', 'In 2010'],
          },
          correct: 1,
          explanation: {
            el: 'Η πρώτη, ξύλινη γέφυρα άνοιξε το 1845. Η σημερινή είναι η πέμπτη στη σειρά και είναι από το 1994.',
            en: 'The first, wooden bridge opened in 1845. The one you see today is the fifth in line and dates from 1994.',
          },
        },
        {
          q: { el: 'Τι κάνει η σημερινή γέφυρα για να περνούν τα ψηλά πλοία;', en: 'What does today\'s bridge do to let tall ships through?' },
          options: {
            el: ['Ανοίγει στη μέση', 'Σηκώνεται ολόκληρη ψηλά', 'Γυρίζει σαν ρόδα', 'Βουλιάζει κάτω από το νερό'],
            en: ['It opens in the middle', 'It lifts up all at once', 'It spins like a wheel', 'It sinks under the water'],
          },
          correct: 0,
          explanation: {
            el: 'Το μεσαίο κομμάτι της σηκώνεται σαν δύο πόρτες, συνήθως τη νύχτα, για να περνούν τα μεγάλα πλοία.',
            en: 'The middle section lifts like two doors, usually at night, so that big ships can pass.',
          },
        },
        {
          q: { el: 'Πώς λέγεται το διάσημο σάντουιτς με ψάρι;', en: 'What is the famous fish sandwich called?' },
          options: {
            el: ['Simit', 'Lokum', 'Balık ekmek', 'Baklava'],
            en: ['Simit', 'Lokum', 'Balık ekmek', 'Baklava'],
          },
          correct: 2,
          explanation: {
            el: 'Balık ekmek σημαίνει απλώς «ψάρι ψωμί»: ψητό ψάρι, κρεμμύδι και μαρούλι μέσα σε μισή φραντζόλα, δίπλα στο νερό.',
            en: 'Balık ekmek simply means “fish bread”: grilled fish, onion and lettuce in half a loaf, eaten by the water.',
          },
        },
      ],
    },

    // ── 8. Galata Tower / Galata Kulesi ────────────────────────────────────────
    {
      id: 'galata-tower',
      name: { el: 'Πύργος του Γαλατά (Galata Kulesi)', en: 'Galata Tower (Galata Kulesi)' },
      emoji: '🗼',
      lat: 41.0256,
      lng: 28.9741,
      radiusM: 60,
      riddle: {
        el: 'Ένας πέτρινος πύργος με μυτερό καπέλο στέκεται στην κορυφή ενός λόφου εδώ και σχεδόν 700 χρόνια. Λένε πως ένας τολμηρός άντρας πήδηξε από την κορυφή του με ξύλινα φτερά και πέταξε πάνω από τη θάλασσα ως την Ασία!',
        en: 'A stone tower wearing a pointed hat has stood on its hilltop for almost 700 years. They say a daring man once jumped from its top with wooden wings and glided over the sea all the way to Asia!',
      },
      parentHint: {
        el: 'Είναι ο Πύργος του Γαλατά (Galata Kulesi). Από τη γέφυρα συνεχίστε στο Karaköy και ανηφορίστε 10 λεπτά από τα σκαλιά Kamondo και τη Galata Kulesi Sokak, ή πάρτε τον ιστορικό υπόγειο Tünel από το Karaköy και κατεβείτε 5 λεπτά από τη Galip Dede Caddesi.',
        en: 'It is the Galata Tower (Galata Kulesi). From the bridge carry on into Karaköy and climb 10 minutes up the Kamondo Steps and Galata Kulesi Sokak, or ride the historic Tünel funicular from Karaköy and walk 5 minutes down Galip Dede Caddesi.',
      },
      unlockQuestion: {
        question: { el: 'Ο γρίφος λέει ότι ο πύργος στέκεται σχεδόν 700 χρόνια. Πότε περίπου χτίστηκε;', en: 'The riddle says the tower has stood for almost 700 years. About when was it built?' },
        options: {
          el: ['Γύρω στο 500', 'Γύρω στο 1900', 'Γύρω στο 1750', 'Γύρω στο 1350'],
          en: ['Around the year 500', 'Around 1900', 'Around 1750', 'Around 1350'],
        },
        correct: 3,
        explanation: {
          el: 'Σωστά: 700 χρόνια πριν από σήμερα μας πάνε γύρω στο 1350. Ο πύργος τελείωσε το 1348, όταν αυτός ο λόφος ήταν μια μικρή πόλη Ιταλών εμπόρων από τη Γένοβα.',
          en: 'Right: 700 years before today takes us to around 1350. The tower was finished in 1348, when this hill was a little town of Italian merchants from Genoa.',
        },
      },
      onSite: {
        question: { el: 'Κοίτα την κορυφή του πύργου. Τι σχήμα έχει η στέγη του;', en: 'Look at the top of the tower. What shape is its roof?' },
        options: {
          el: ['Επίπεδη, σαν ταράτσα', 'Μυτερός κώνος, σαν ανάποδο χωνάκι παγωτού', 'Στρογγυλός θόλος', 'Πυραμίδα με τέσσερις πλευρές'],
          en: ['Flat, like a terrace', 'A pointed cone, like an upside-down ice-cream cone', 'A round dome', 'A four-sided pyramid'],
        },
        correct: 1,
        explanation: {
          el: 'Ο κώνος χάθηκε σε καταιγίδες και φωτιές περισσότερες από μία φορές· ο σημερινός μπήκε ξανά στη θέση του τη δεκαετία του 1960. Κάτω από αυτόν, το μπαλκόνι κάνει ολόκληρο τον γύρο του πύργου.',
          en: 'The cone was lost to storms and fires more than once; today\'s cone was put back in the 1960s. Just below it, the balcony runs all the way round the tower.',
        },
      },
      story: {
        el: 'Έμποροι από τη Γένοβα, μια πόλη της Ιταλίας, είχαν κάποτε τη δική τους τειχισμένη πολιτεία σε αυτόν τον λόφο, και το 1348 έχτισαν τον πύργο ως το ψηλότερο παρατηρητήριό της, περίπου 63 μέτρα, με τοίχους πιο χοντρούς από ένα κρεβάτι στο μάκρος. Αργότερα οι Οθωμανοί τον έκαναν παρατηρητήριο για πυρκαγιές: φρουροί στην κορυφή κοιτούσαν μέρα νύχτα την ξύλινη πόλη και σήμαιναν συναγερμό με τύμπανα. Η πιο διάσημη ιστορία του είναι για τον Hezârfen Ahmed Çelebi (Χεζαρφέν Αχμέτ Τσελεμπί), που λένε πως τη δεκαετία του 1630 φόρεσε φτερά, πήδηξε από την κορυφή και πέταξε πάνω από τον Βόσπορο ως την ασιατική ακτή. Αλήθεια ή όχι, ο κόσμος λάτρεψε την ιδέα ότι ένας άνθρωπος μπορεί να πετάξει. Σήμερα ένα ασανσέρ σε ανεβάζει, και από το μπαλκόνι βλέπεις όλη την πόλη, τους θόλους, τις γέφυρες και δύο ηπείρους.',
        en: 'Merchants from Genoa, a city in Italy, once had their own walled town on this hill, and in 1348 they built this tower as its tallest lookout, about 63 metres high with walls thicker than a bed is long. Later the Ottomans used it as a watchtower for fires: guards on top scanned the wooden city day and night and raised the alarm with drums. The most famous story is about Hezârfen Ahmed Çelebi, who in the 1630s is said to have strapped on wings, leapt from the top and glided across the Bosphorus to the Asian shore. True or not, people loved the idea that a human could fly. Today a lift takes you up, and from the balcony you can see the whole city, its domes, bridges and two continents.',
      },
      didYouKnow: {
        el: 'Το Tünel, το μικρό υπόγειο τρενάκι από το Karaköy ως τον λόφο του πύργου, λειτουργεί από το 1875 και είναι ο δεύτερος παλαιότερος υπόγειος σιδηρόδρομος του κόσμου, μετά το μετρό του Λονδίνου. Η διαδρομή του κρατά μόνο ενάμισι λεπτό.',
        en: 'The Tünel, the little underground funicular from Karaköy up to the tower\'s hill, has run since 1875 and is the second-oldest underground railway in the world, after the London Underground. The ride takes just a minute and a half.',
      },
      quiz: [
        {
          q: { el: 'Ποιοι έχτισαν τον πύργο;', en: 'Who built the tower?' },
          options: {
            el: ['Οι Βυζαντινοί', 'Οι Οθωμανοί', 'Οι έμποροι από τη Γένοβα', 'Οι Βίκινγκ'],
            en: ['The Byzantines', 'The Ottomans', 'The merchants from Genoa', 'The Vikings'],
          },
          correct: 2,
          explanation: {
            el: 'Οι Γενουάτες έμποροι, που είχαν τη δική τους μικρή πόλη σε αυτόν τον λόφο, τον έχτισαν το 1348.',
            en: 'The Genoese merchants, who had their own little town on this hill, built it in 1348.',
          },
        },
        {
          q: { el: 'Σε τι χρησίμευε ο πύργος στους Οθωμανούς;', en: 'What did the Ottomans use the tower for?' },
          options: {
            el: ['Για φυλακή', 'Για φάρο', 'Για σχολείο', 'Για παρατηρητήριο πυρκαγιών'],
            en: ['As a prison', 'As a lighthouse', 'As a school', 'As a fire lookout'],
          },
          correct: 3,
          explanation: {
            el: 'Φρουροί στην κορυφή έψαχναν για καπνό πάνω από τα ξύλινα σπίτια και χτυπούσαν τύμπανα όταν έβλεπαν φωτιά.',
            en: 'Guards at the top searched for smoke above the wooden houses and beat drums when they spotted a fire.',
          },
        },
        {
          q: { el: 'Τι λένε ότι έκανε ο Hezârfen Ahmed Çelebi;', en: 'What is Hezârfen Ahmed Çelebi said to have done?' },
          options: {
            el: ['Πέταξε με φτερά ως την Ασία', 'Έχτισε τη γέφυρα', 'Έσκαψε ένα τούνελ', 'Κολύμπησε ως την Αίγυπτο'],
            en: ['Flew with wings to Asia', 'Built the bridge', 'Dug a tunnel', 'Swam to Egypt'],
          },
          correct: 0,
          explanation: {
            el: 'Λένε πως πέταξε με φτερά από τον πύργο ως την ασιατική ακτή. Το όνομα Hezârfen σημαίνει «αυτός που ξέρει χίλιες επιστήμες».',
            en: 'He is said to have flown with wings from the tower to the Asian shore. The name Hezârfen means “the one who knows a thousand sciences”.',
          },
        },
      ],
    },

    // ── 9. İstiklal Caddesi / Galatasaray Meydanı ──────────────────────────────
    {
      id: 'istiklal-street',
      name: { el: 'Οδός İstiklal (Galatasaray Meydanı)', en: 'İstiklal Street (Galatasaray Meydanı)' },
      emoji: '🚋',
      lat: 41.0330,
      lng: 28.9770,
      radiusM: 60,
      riddle: {
        el: 'Σε έναν μακρύ δρόμο χωρίς αυτοκίνητα, ένα παλιό τραμ κουδουνίζει ανάμεσα σε πλήθη, εκκλησίες και πρώην πρεσβείες. Στη μέση της διαδρομής, μια στοά με γυάλινη οροφή που την έχτισε ένας Έλληνας ήταν κάποτε γεμάτη λουλούδια.',
        en: 'On a long street with no cars, an old-fashioned tram rings its bell through crowds, churches and former embassies. Halfway along, a glass-roofed arcade built by a Greek was once filled with flowers.',
      },
      parentHint: {
        el: 'Είναι η οδός İstiklal (Ιστικλάλ, «οδός Ανεξαρτησίας»), στην πλατεία Galatasaray. Από τον Πύργο του Γαλατά ανεβείτε 8 λεπτά τη Galip Dede Caddesi ως την πλατεία Tünel και μετά περπατήστε 12 λεπτά στον πεζόδρομο, ή πάρτε το νοσταλγικό τραμ από το Tünel ως τη στάση Galatasaray.',
        en: 'It is İstiklal Street (“Independence Street”), at Galatasaray Square. From Galata Tower climb Galip Dede Caddesi for 8 minutes to Tünel Square, then walk 12 minutes along the pedestrian street, or ride the nostalgic tram from Tünel to the Galatasaray stop.',
      },
      unlockQuestion: {
        question: { el: 'Ο γρίφος μιλάει για πρώην πρεσβείες. Τι είναι μια πρεσβεία;', en: 'The riddle mentions former embassies. What is an embassy?' },
        options: {
          el: ['Ένα μεγάλο ξενοδοχείο', 'Ένα μουσείο με πίνακες', 'Το σπίτι όπου μια ξένη χώρα έχει τους εκπροσώπους της', 'Ένας σταθμός τρένου'],
          en: ['A big hotel', 'A museum of paintings', 'The house where a foreign country keeps its representatives', 'A railway station'],
        },
        correct: 2,
        explanation: {
          el: 'Σε μια πρεσβεία μένουν και δουλεύουν οι εκπρόσωποι μιας άλλης χώρας. Όταν η πρωτεύουσα μεταφέρθηκε στην Άγκυρα το 1923, οι πρεσβείες έγιναν προξενεία, αλλά τα μεγαλοπρεπή κτίρια έμειναν στη θέση τους.',
          en: 'An embassy is where the representatives of another country live and work. When the capital moved to Ankara in 1923, the embassies became consulates, but the grand buildings stayed put.',
        },
      },
      onSite: {
        question: { el: 'Περίμενε να περάσει το παλιό τραμ. Τι χρώμα είναι;', en: 'Wait for the old tram to pass. What colour is it?' },
        options: {
          el: ['Κίτρινο', 'Κόκκινο', 'Πράσινο', 'Μπλε'],
          en: ['Yellow', 'Red', 'Green', 'Blue'],
        },
        correct: 1,
        explanation: {
          el: 'Κόκκινο, το χρώμα των παλιών τραμ της Πόλης. Τα ηλεκτρικά τραμ πρωτοπέρασαν από εδώ το 1914, και το νοσταλγικό τραμ επέστρεψε το 1990, όταν ο δρόμος έγινε πεζόδρομος.',
          en: 'Red, the colour of the city\'s old trams. Electric trams first ran here in 1914, and the nostalgic tram came back in 1990, when the street became car-free.',
        },
      },
      story: {
        el: 'Πριν από εκατό χρόνια αυτός ήταν η Grande Rue de Péra, ο πιο κομψός δρόμος της Πόλης, όπου Έλληνες, Αρμένιοι, Τούρκοι, Εβραίοι και Ευρωπαίοι ζούσαν δίπλα δίπλα. Εδώ στέκονταν οι πρεσβείες ξένων βασιλείων, τα πρώτα θέατρα και σινεμά, και τα πιο φανταχτερά ζαχαροπλαστεία. Το 1876 ένας Έλληνας τραπεζίτης, ο Χρηστάκης Ζωγράφος, έχτισε μια λαμπρή στοά με γυάλινη οροφή, τη Cité de Péra· αργότερα γέμισε ανθοπώλες και πήρε το όνομα Çiçek Pasajı (Τσιτσέκ Πασαζί), η Στοά των Λουλουδιών. Τα ηλεκτρικά τραμ πρωτοκουδούνισαν στον δρόμο το 1914, και το παλιό κόκκινο τραμ που βλέπεις σήμερα επέστρεψε το 1990, όταν ο δρόμος έκλεισε για τα αυτοκίνητα. Έχει μήκος 1,4 χιλιόμετρα, από το Tünel ως την πλατεία Taksim, και σε ένα πολυσύχναστο Σαββατοκύριακο τον περπατούν ως και τρία εκατομμύρια άνθρωποι.',
        en: 'A hundred years ago this was the Grande Rue de Péra, the smartest street of the city, where Greeks, Armenians, Turks, Jews and Europeans lived side by side. Here stood the embassies of foreign kingdoms, the first theatres and cinemas, and the fanciest cake shops. In 1876 a Greek banker, Hristaki Zografos, built a splendid arcade with a glass roof, the Cité de Péra; later it filled with flower sellers and earned its name Çiçek Pasajı, the Flower Passage. Electric trams first rattled along the street in 1914, and the old red tram you see today came back in 1990, when the street was closed to cars. It runs 1.4 kilometres from Tünel to Taksim Square, and on a busy weekend up to three million people walk here.',
      },
      didYouKnow: {
        el: 'Πίσω από τη μεγάλη πύλη της πλατείας βρίσκεται το Λύκειο Galatasaray, σχολείο από το 1481, όταν ήταν σχολή του παλατιού· από το 1868 διδάσκει στα γαλλικά. Το 1905 οι μαθητές του ίδρυσαν την ποδοσφαιρική ομάδα Galatasaray, μία από τις πιο διάσημες της Τουρκίας.',
        en: 'Behind the big gate on the square stands Galatasaray High School, a school since 1481, when it was a palace academy; since 1868 it has taught in French. In 1905 its students founded the Galatasaray football club, one of the most famous in Türkiye.',
      },
      quiz: [
        {
          q: { el: 'Ποιος έχτισε τη στοά με τη γυάλινη οροφή;', en: 'Who built the arcade with the glass roof?' },
          options: {
            el: ['Ένας Έλληνας τραπεζίτης', 'Ένας Γάλλος ζωγράφος', 'Ένας σουλτάνος', 'Ένας ανθοπώλης'],
            en: ['A Greek banker', 'A French painter', 'A sultan', 'A flower seller'],
          },
          correct: 0,
          explanation: {
            el: 'Ο Χρηστάκης Ζωγράφος, Έλληνας τραπεζίτης της Πόλης, έχτισε τη στοά το 1876.',
            en: 'Hristaki Zografos, a Greek banker of the city, built the arcade in 1876.',
          },
        },
        {
          q: { el: 'Πώς λέγεται σήμερα η στοά;', en: 'What is the arcade called today?' },
          options: {
            el: ['Στοά των Πουλιών', 'Στοά του Τραμ', 'Çiçek Pasajı, η Στοά των Λουλουδιών', 'Στοά των Γλυκών'],
            en: ['The Bird Passage', 'The Tram Passage', 'Çiçek Pasajı, the Flower Passage', 'The Sweet Passage'],
          },
          correct: 2,
          explanation: {
            el: 'Çiçek σημαίνει λουλούδι στα τουρκικά. Οι ανθοπώλες που έστησαν εκεί τους πάγκους τους έδωσαν στη στοά το όνομά της.',
            en: 'Çiçek means flower in Turkish. The flower sellers who set up their stalls there gave the arcade its name.',
          },
        },
        {
          q: { el: 'Πότε γύρισε το κόκκινο τραμ στον δρόμο;', en: 'When did the red tram return to the street?' },
          options: {
            el: ['Το 1453', 'Το 1876', 'Το 1914', 'Το 1990'],
            en: ['In 1453', 'In 1876', 'In 1914', 'In 1990'],
          },
          correct: 3,
          explanation: {
            el: 'Το 1990, όταν ο δρόμος έγινε πεζόδρομος, το νοσταλγικό τραμ ξαναμπήκε στις ράγες του.',
            en: 'In 1990, when the street became pedestrian-only, the nostalgic tram went back on its rails.',
          },
        },
      ],
    },

    // ── 10. Fener · Ecumenical Patriarchate ────────────────────────────────────
    {
      id: 'fener-patriarchate',
      name: { el: 'Φανάρι, Οικουμενικό Πατριαρχείο', en: 'Fener, the Ecumenical Patriarchate' },
      emoji: '⛪',
      lat: 41.0292,
      lng: 28.9518,
      radiusM: 60,
      riddle: {
        el: 'Σε μια γειτονιά με πλακόστρωτα σοκάκια, πίσω από μια πύλη που κλείδωσε πριν από 200 χρόνια, ζει ο γέροντας που είναι πρώτος ανάμεσα σε όλους τους Ορθόδοξους της γης. Ψηλά στον λόφο, ένα κατακόκκινο σχολείο μοιάζει με κάστρο.',
        en: 'In a neighbourhood of cobbled lanes, behind a gate locked 200 years ago, lives the elder who is first among all the Orthodox Christians of the world. High on the hill above, a bright red school looks like a castle.',
      },
      parentHint: {
        el: 'Είναι το Οικουμενικό Πατριαρχείο στο Φανάρι (Fener), με τον ναό του Αγίου Γεωργίου. Από την πλατεία Galatasaray πάρτε ταξί (περίπου 15 λεπτά), ή κατεβείτε στο Karaköy και πάρτε το πλοιάριο του Κεράτιου (γραμμή Haliç) ως την αποβάθρα Fener· από εκεί 5 λεπτά με τα πόδια ως την πύλη στη Sadrazam Ali Paşa Caddesi.',
        en: 'It is the Ecumenical Patriarchate in Fener, with the church of Saint George. From Galatasaray Square take a taxi (about 15 minutes), or go down to Karaköy and ride the Golden Horn ferry (Haliç line) to the Fener pier; from there it is a 5-minute walk to the gate on Sadrazam Ali Paşa Caddesi.',
      },
      unlockQuestion: {
        question: { el: 'Ο γρίφος μιλάει για τον «πρώτο ανάμεσα στους Ορθόδοξους». Πώς λέγεται ο τίτλος του;', en: 'The riddle speaks of the “first among the Orthodox”. What is his title?' },
        options: {
          el: ['Πάπας', 'Πατριάρχης', 'Σουλτάνος', 'Δήμαρχος'],
          en: ['Pope', 'Patriarch', 'Sultan', 'Mayor'],
        },
        correct: 1,
        explanation: {
          el: 'Ο Οικουμενικός Πατριάρχης Κωνσταντινουπόλεως είναι «πρώτος μεταξύ ίσων» ανάμεσα στους Ορθόδοξους επισκόπους όλου του κόσμου. Από το 1601 το σπίτι του είναι εδώ, στο Φανάρι.',
          en: 'The Ecumenical Patriarch of Constantinople is “first among equals” of all the Orthodox bishops in the world. Since 1601 his home has been here, in Fener.',
        },
      },
      onSite: {
        question: { el: 'Κοίτα την κεντρική είσοδο. Τι παράξενο έχει η μεγάλη πόρτα στη μέση;', en: 'Look at the main entrance. What is strange about the big door in the middle?' },
        options: {
          el: ['Είναι κλειστή και σφραγισμένη· ο κόσμος μπαίνει από πλαϊνή πόρτα', 'Είναι βαμμένη χρυσή', 'Είναι περιστρεφόμενη, σαν σε ξενοδοχείο', 'Έχει μια κρεμαστή γέφυρα'],
          en: ['It is shut and sealed; people go in through a side door', 'It is painted gold', 'It is a revolving door, like in a hotel', 'It has a drawbridge'],
        },
        correct: 0,
        explanation: {
          el: 'Είναι η Πύλη του Αγίου Πέτρου. Κλείστηκε το 1821, μια πολύ δύσκολη χρονιά, στη μνήμη του Πατριάρχη Γρηγορίου Ε΄, που έχασε τη ζωή του εδώ, και από τότε δεν άνοιξε ποτέ ξανά.',
          en: 'It is the Gate of Saint Peter. It was closed in 1821, a very hard year, in memory of Patriarch Gregory V, who lost his life here, and it has never been opened since.',
        },
      },
      story: {
        el: 'Όταν η Βυζαντινή Αυτοκρατορία τελείωσε, το 1453, οι Έλληνες της Πόλης δεν χάθηκαν: μαζεύτηκαν σε αυτή τη γειτονιά δίπλα στον Κεράτιο, που πήρε το όνομά της από έναν παλιό φάρο, ένα φανάρι. Από το 1601 ζει εδώ ο Οικουμενικός Πατριάρχης, ο πρώτος ανάμεσα σε όλους τους Ορθόδοξους επισκόπους, σε έναν ταπεινό ναό του Αγίου Γεωργίου γεμάτο παλιές εικόνες, ασημένια καντήλια και έναν σκαλιστό ξύλινο θρόνο. Πλούσιες ελληνικές οικογένειες του Φαναριού, οι Φαναριώτες, έγιναν λόγιοι, μεταφραστές, ακόμη και ηγεμόνες σε μακρινές χώρες. Στον λόφο από πάνω, η Μεγάλη του Γένους Σχολή, το πιο παλιό ελληνικό σχολείο της Πόλης, μετακόμισε τη δεκαετία του 1880 σε ένα τεράστιο κτίριο από κόκκινο τούβλο που όλοι το λένε Κόκκινο Κάστρο. Ψάξε τον δικέφαλο αετό στην πύλη: το ένα κεφάλι κοιτάζει ανατολικά, το άλλο δυτικά, ακριβώς όπως αυτή η πόλη.',
        en: 'When the Byzantine Empire ended in 1453, the Greeks of the city did not disappear: they gathered in this neighbourhood by the Golden Horn, named Fener after an old lighthouse, a fanari. Since 1601 the Ecumenical Patriarch, the first among all Orthodox bishops, has lived here, in a modest church of Saint George full of old icons, silver lamps and a carved wooden throne. Rich Greek families of Fener, the Phanariots, became scholars, translators and even princes in far-off lands. On the hill above, the Great School of the Nation, the oldest Greek school of the city, moved in the 1880s into a huge red-brick building that everyone calls the Red Castle. Look for the double-headed eagle on the gate: one head looks east, the other west, just like this city.',
      },
      didYouKnow: {
        el: 'Στον ναό του Αγίου Γεωργίου φυλάσσονται ένα τμήμα της Στήλης της Φραγγέλωσης και τα λείψανα των Αγίων Γρηγορίου του Θεολόγου και Ιωάννη του Χρυσοστόμου, που επέστρεψαν από τη Ρώμη το 2004, 800 χρόνια αφότου τα είχαν πάρει οι Σταυροφόροι.',
        en: 'The church of Saint George keeps part of the Column of the Flagellation and the relics of Saints Gregory the Theologian and John Chrysostom, which were returned from Rome in 2004, 800 years after the Crusaders had carried them off.',
      },
      quiz: [
        {
          q: { el: 'Από πότε ζει ο Πατριάρχης στο Φανάρι;', en: 'Since when has the Patriarch lived in Fener?' },
          options: {
            el: ['Από το 1453', 'Από το 1821', 'Από το 1881', 'Από το 1601'],
            en: ['Since 1453', 'Since 1821', 'Since 1881', 'Since 1601'],
          },
          correct: 3,
          explanation: {
            el: 'Από το 1601. Μετά το 1453 το Πατριαρχείο άλλαξε σπίτι αρκετές φορές, μέχρι που βρήκε τη μόνιμη θέση του εδώ.',
            en: 'Since 1601. After 1453 the Patriarchate moved house several times before finding its permanent home here.',
          },
        },
        {
          q: { el: 'Πώς λένε το μεγάλο κόκκινο σχολείο στον λόφο;', en: 'What do people call the big red school on the hill?' },
          options: {
            el: ['Το Γαλάζιο Παλάτι', 'Το Κόκκινο Κάστρο (Μεγάλη του Γένους Σχολή)', 'Ο Κόκκινος Πύργος', 'Το Σχολείο του Φάρου'],
            en: ['The Blue Palace', 'The Red Castle (the Great School of the Nation)', 'The Red Tower', 'The Lighthouse School'],
          },
          correct: 1,
          explanation: {
            el: 'Η Μεγάλη του Γένους Σχολή, με τα κόκκινα τούβλα και τον θόλο της, μοιάζει με κάστρο και έτσι τη λένε όλοι Κόκκινο Κάστρο.',
            en: 'The Great School of the Nation, with its red bricks and its dome, looks like a castle, so everyone calls it the Red Castle.',
          },
        },
        {
          q: { el: 'Πόσα κεφάλια έχει ο αετός στην πύλη;', en: 'How many heads does the eagle on the gate have?' },
          options: {
            el: ['Ένα', 'Τρία', 'Δύο', 'Τέσσερα'],
            en: ['One', 'Three', 'Two', 'Four'],
          },
          correct: 2,
          explanation: {
            el: 'Δύο. Ο δικέφαλος αετός ήταν το σύμβολο των τελευταίων Βυζαντινών αυτοκρατόρων και είναι σήμερα το σύμβολο του Πατριαρχείου.',
            en: 'Two. The double-headed eagle was the symbol of the last Byzantine emperors and is today the symbol of the Patriarchate.',
          },
        },
      ],
    },
  ],
};
