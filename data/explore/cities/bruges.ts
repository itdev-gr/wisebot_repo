/**
 * WiseBot Explorer · Μπριζ / Bruges
 * =================================
 * Ten spots in one long day on foot: the medieval centre and the canals (spots 1–4), the
 * quiet south with the great brick tower, the Begijnhof and the swans (spots 5–8), then
 * the old port and the windmills on the ramparts (spots 9–10). Original text only,
 * verified facts, language for a child of 7–12 in Greek and English. Flemish names stay
 * in Flemish in both languages, with a Greek gloss the first time they appear.
 */
import type { ExploreCity } from '../types';

export const CITY: ExploreCity = {
  id: 'bruges',
  name: { el: 'Μπριζ', en: 'Bruges' },
  country: { el: 'Βέλγιο', en: 'Belgium' },
  countryCode: 'BE',
  emoji: '🦢',
  center: { lat: 51.2080, lng: 3.2260 },
  zoom: 15,
  intro: {
    el: 'Γεια σας, εξερευνητές! Είμαι η WiseBot, η σοφή κουκουβάγια, και σας καλωσορίζω στη Μπριζ, μια πόλη που μοιάζει να έχει σταματήσει τον χρόνο! Εδώ κύκνοι κολυμπούν σε ήσυχα κανάλια, γι\' αυτό τη λένε «Βενετία του Βορρά», ένας πύργος με καμπάνες γέρνει λιγάκι, και στον αέρα μυρίζει σοκολάτα και βάφλα. Πριν από 600 χρόνια η Μπριζ ήταν από τις πιο πλούσιες πόλεις του κόσμου, με καράβια από παντού. Μετά όμως το κανάλι της προς τη θάλασσα γέμισε άμμο και λάσπη, τα καράβια έφυγαν, και η πόλη έμεινε όπως ήταν, σαν ένα μεσαιωνικό παραμύθι. Λύστε τους γρίφους μου, βρείτε τα δέκα μυστικά σημεία και γίνετε εξερευνητές της Μπριζ!',
    en: 'Hello, explorers! I am WiseBot the wise owl, and I welcome you to Bruges, a city where time seems to have stopped! Here swans glide along quiet canals, which is why people call it the “Venice of the North”, a bell tower leans just a little, and the air smells of chocolate and waffles. Six hundred years ago Bruges was one of the richest cities in the world, with ships arriving from everywhere. Then its channel to the sea filled up with sand and mud, the ships went away, and the city stayed just as it was, like a medieval fairy tale. Solve my riddles, find the ten secret spots and become Bruges explorers!',
  },
  route: [
    'markt',
    'burg',
    'rozenhoedkaai',
    'vismarkt',
    'bonifacius-bridge',
    'church-of-our-lady',
    'begijnhof',
    'minnewater',
    'jan-van-eyck-square',
    'windmills',
  ],
  spots: [
    // ── 1. Markt & Belfort ─────────────────────────────────────────────────────
    {
      id: 'markt',
      name: { el: 'Markt', en: 'Markt' },
      emoji: '🔔',
      lat: 51.2088,
      lng: 3.2246,
      radiusM: 40,
      riddle: {
        el: 'Στη μεγαλύτερη πλατεία της πόλης ένας πύργος με 47 καμπάνες γέρνει λιγάκι, σαν να κρυφακούει. Από κάτω, δύο χάλκινοι άντρες σηκώνουν τα όπλα τους μπροστά σε σπίτια με μυτερές, πολύχρωμες στέγες.',
        en: 'In the biggest square in town, a tower with 47 bells leans a tiny bit, as if it were eavesdropping. Below it, two bronze men raise their weapons in front of houses with pointed, colourful roofs.',
      },
      parentHint: {
        el: 'Είναι η Markt (Μαρκτ, η Πλατεία της Αγοράς) με το Belfort (Μπέλφορτ, τον Πύργο των Καμπανών). Ξεκινήστε από εδώ: από τον σιδηροδρομικό σταθμό είναι 20 λεπτά με τα πόδια ή λίγα λεπτά με τα λεωφορεία του κέντρου, και ο πύργος φαίνεται σχεδόν από παντού.',
        en: 'It is the Markt, the market square, with the Belfort, the bell tower. Start here: from the railway station it is a 20-minute walk or a few minutes by the city-centre buses, and the tower is visible from almost everywhere.',
      },
      unlockQuestion: {
        question: { el: 'Ο γρίφος λέει ότι ο πύργος «γέρνει λιγάκι». Ποιος άλλος διάσημος πύργος στην Ιταλία είναι γνωστός γιατί γέρνει;', en: 'The riddle says the tower “leans a tiny bit”. Which other famous tower, in Italy, is known for leaning?' },
        options: {
          el: ['Ο Πύργος του Άιφελ', 'Ο Πύργος του Λονδίνου', 'Ο Πύργος της Πίζας', 'Το Μπιγκ Μπεν'],
          en: ['The Eiffel Tower', 'The Tower of London', 'The Tower of Pisa', 'Big Ben'],
        },
        correct: 2,
        explanation: {
          el: 'Ο Πύργος της Πίζας γέρνει σχεδόν 4 μέτρα. Ο πύργος της Μπριζ γέρνει περίπου ένα μέτρο προς τα νοτιοανατολικά, τόσο λίγο που οι περισσότεροι δεν το προσέχουν καν!',
          en: 'The Tower of Pisa leans almost 4 metres. The Bruges tower leans about one metre to the south-east, so little that most people never notice!',
        },
      },
      onSite: {
        question: { el: 'Κοίταξε ψηλά τον πύργο. Το πιο πάνω κομμάτι του είναι διαφορετικό από τα δύο από κάτω. Σε τι διαφέρει;', en: 'Look up at the tower. Its top part is different from the two parts below it. How?' },
        options: {
          el: ['Είναι από γυαλί', 'Έχει οκτώ πλευρές και πιο ανοιχτό χρώμα', 'Είναι από ξύλο', 'Είναι βαμμένο κόκκινο'],
          en: ['It is made of glass', 'It has eight sides and a lighter colour', 'It is made of wood', 'It is painted red'],
        },
        correct: 1,
        explanation: {
          el: 'Τα δύο κάτω κομμάτια είναι τετράγωνα και από κόκκινο τούβλο, χτισμένα τον 13ο και τον 14ο αιώνα. Το πάνω, οκτάγωνο κομμάτι από ανοιχτόχρωμη πέτρα προστέθηκε γύρω στο 1480. Ο πύργος χτίστηκε σε τρεις δόσεις!',
          en: 'The two lower parts are square and made of red brick, built in the 13th and 14th centuries. The eight-sided top of pale stone was added around 1480. The tower was built in three goes!',
        },
      },
      story: {
        el: 'Αυτός ο πύργος, το Belfort, είναι 83 μέτρα ψηλός και έχει 366 σκαλιά ως την κορυφή. Για εκατοντάδες χρόνια οι καμπάνες του έλεγαν στους ανθρώπους της Μπριζ πότε ξυπνάει η πόλη, πότε ανοίγει η αγορά και πότε υπάρχει κίνδυνος. Σε ένα δωμάτιο του πύργου φυλάγονταν ο θησαυρός και τα πολύτιμα χαρτιά της πόλης πίσω από σιδερένιες πόρτες με δέκα κλειδαριές, και τα δέκα κλειδιά τα κρατούσαν διαφορετικοί άνθρωποι, ώστε κανείς να μην μπορεί να τις ανοίξει μόνος του. Οι δύο άντρες του αγάλματος είναι ο Jan Breydel (Γιαν Μπρέιντελ), ένας χασάπης, και ο Pieter de Coninck (Πίτερ ντε Κόνινκ), ένας υφαντής. Το 1302 οδήγησαν τους Φλαμανδούς εναντίον των ιπποτών του βασιλιά της Γαλλίας και νίκησαν, στη Μάχη των Χρυσών Σπιρουνιών. Σήμερα 47 καμπάνες παίζουν μελωδίες πάνω από την πλατεία.',
        en: 'This tower, the Belfort, is 83 metres tall and has 366 steps to the top. For hundreds of years its bells told the people of Bruges when the city woke up, when the market opened and when danger was near. In one room of the tower the city treasure and its precious papers were kept behind iron doors with ten locks, and the ten keys were held by different people, so that nobody could open them alone. The two men on the statue are Jan Breydel, a butcher, and Pieter de Coninck, a weaver. In 1302 they led the people of Flanders against the knights of the French king and won, at the Battle of the Golden Spurs. Today 47 bells play tunes above the square.',
      },
      didYouKnow: {
        el: 'Ο πύργος είχε δύο φορές ξύλινη κορυφή και τις δύο φορές κάηκε, το 1493 και το 1741, γι\' αυτό σήμερα τελειώνει «κοντός», χωρίς μυτερή στέγη. Γέρνει σχεδόν ένα μέτρο προς τα νοτιοανατολικά, και ο καριγιονίστας της πόλης δίνει ακόμη τακτικά συναυλίες πάνω από την πλατεία.',
        en: 'The tower twice had a wooden spire and twice it burned down, in 1493 and 1741, which is why it ends “short” today, without a pointed roof. It leans almost a metre to the south-east, and the city carillonneur still gives regular concerts above the square.',
      },
      quiz: [
        {
          q: { el: 'Πόσα σκαλιά έχει ο πύργος ως την κορυφή;', en: 'How many steps does the tower have to the top?' },
          options: {
            el: ['366', '100', '1.000', '47'],
            en: ['366', '100', '1,000', '47'],
          },
          correct: 0,
          explanation: {
            el: 'Ο πύργος έχει 366 σκαλιά, σχεδόν όσες οι μέρες ενός χρόνου! Οι 47 είναι οι καμπάνες του.',
            en: 'The tower has 366 steps, almost as many as the days in a year! The 47 is the number of its bells.',
          },
        },
        {
          q: { el: 'Τι δουλειά έκαναν οι δύο ήρωες του αγάλματος;', en: 'What jobs did the two heroes on the statue have?' },
          options: {
            el: ['Βασιλιάς και πρίγκιπας', 'Ζωγράφος και μουσικός', 'Χασάπης και υφαντής', 'Καπετάνιος και ναύτης'],
            en: ['A king and a prince', 'A painter and a musician', 'A butcher and a weaver', 'A captain and a sailor'],
          },
          correct: 2,
          explanation: {
            el: 'Ο Jan Breydel ήταν χασάπης και ο Pieter de Coninck υφαντής: απλοί άνθρωποι της πόλης που έγιναν ήρωες.',
            en: 'Jan Breydel was a butcher and Pieter de Coninck a weaver: ordinary townspeople who became heroes.',
          },
        },
        {
          q: { el: 'Πώς φυλαγόταν ο θησαυρός της πόλης μέσα στον πύργο;', en: 'How was the city treasure kept inside the tower?' },
          options: {
            el: ['Σε ένα πηγάδι', 'Πίσω από σιδερένιες πόρτες με δέκα κλειδαριές', 'Κρεμασμένος από μια καμπάνα', 'Μέσα σε ένα άγαλμα'],
            en: ['In a well', 'Behind iron doors with ten locks', 'Hanging from a bell', 'Inside a statue'],
          },
          correct: 1,
          explanation: {
            el: 'Οι πόρτες είχαν δέκα κλειδαριές και τα κλειδιά τα είχαν δέκα διαφορετικοί άνθρωποι. Έτσι κανείς δεν μπορούσε να τις ανοίξει μόνος του.',
            en: 'The doors had ten locks and the keys belonged to ten different people. That way nobody could open them alone.',
          },
        },
      ],
    },

    // ── 2. Burg ────────────────────────────────────────────────────────────────
    {
      id: 'burg',
      name: { el: 'Burg', en: 'Burg' },
      emoji: '🏛️',
      lat: 51.2085,
      lng: 3.2268,
      radiusM: 40,
      riddle: {
        el: 'Δίπλα στη μεγάλη πλατεία κρύβεται μια μικρότερη, όπου ένα από τα πιο παλιά δημαρχεία της χώρας στέκεται στολισμένο με σειρές από αγάλματα, ενώ στη γωνία κρύβεται μια μικρή εκκλησία που φυλάει έναν πολύτιμο θησαυρό.',
        en: 'Next to the big square hides a smaller one, where one of the oldest town halls in the country stands dressed in rows of statues, while in the corner hides a little church that guards a precious treasure.',
      },
      parentHint: {
        el: 'Είναι η Burg (Μπουργκ, η Πλατεία του Κάστρου). Από τη Markt περάστε το στενό δρομάκι Breidelstraat στη νοτιοανατολική γωνία της πλατείας, δίπλα στο Belfort, και σε 2 λεπτά είστε εκεί.',
        en: 'It is the Burg, the castle square. From the Markt take the narrow Breidelstraat in the south-east corner of the square, beside the Belfort, and you are there in 2 minutes.',
      },
      unlockQuestion: {
        question: { el: 'Η πλατεία λέγεται Burg, που σημαίνει «κάστρο». Γιατί άραγε;', en: 'The square is called Burg, which means “castle”. Why do you think that is?' },
        options: {
          el: ['Γιατί έχει σχήμα κάστρου', 'Γιατί εδώ στεκόταν το κάστρο του κόμη, εκεί όπου γεννήθηκε η πόλη', 'Γιατί το δημαρχείο είναι κάστρο', 'Γιατί το λένε έτσι όλες οι πλατείες του Βελγίου'],
          en: ['Because it is shaped like a castle', 'Because the count\'s castle stood here, where the city was born', 'Because the town hall is a castle', 'Because every square in Belgium is called that'],
        },
        correct: 1,
        explanation: {
          el: 'Πριν από περισσότερα από 1.100 χρόνια, ο κόμης της Φλάνδρας έχτισε εδώ ένα κάστρο για να προστατεύει την περιοχή. Γύρω του μεγάλωσε η πόλη. Το κάστρο χάθηκε εδώ και αιώνες, αλλά το όνομα έμεινε.',
          en: 'More than 1,100 years ago, the Count of Flanders built a castle here to protect the area. The city grew around it. The castle disappeared centuries ago, but the name stayed.',
        },
      },
      onSite: {
        question: { el: 'Κοίταξε τη μικρή εκκλησία στη γωνία της πλατείας. Τι παρατηρείς στην πρόσοψή της;', en: 'Look at the little church in the corner of the square. What do you notice about its front?' },
        options: {
          el: ['Είναι όλη από γυαλί', 'Το κάτω μέρος είναι απλό και σκούρο, το πάνω γεμάτο στολίδια και χρυσές φιγούρες', 'Είναι βαμμένη μπλε', 'Έχει έναν ανεμόμυλο στη στέγη'],
          en: ['It is all glass', 'The lower part is plain and dark, the upper part is full of decoration and golden figures', 'It is painted blue', 'It has a windmill on the roof'],
        },
        correct: 1,
        explanation: {
          el: 'Η εκκλησία είναι δύο εκκλησίες, η μία πάνω στην άλλη! Η κάτω είναι σχεδόν 900 ετών, με χοντρούς, απλούς τοίχους. Η πάνω ξαναχτίστηκε πριν από σχεδόν 200 χρόνια με πολλά στολίδια και χρυσά αγάλματα.',
          en: 'The church is two churches, one on top of the other! The lower one is almost 900 years old, with thick, plain walls. The upper one was rebuilt almost 200 years ago with lots of decoration and golden statues.',
        },
      },
      story: {
        el: 'Αυτή η πλατεία είναι η καρδιά της Μπριζ. Εδώ, πριν από περισσότερα από χίλια χρόνια, στεκόταν το κάστρο του κόμη, και γύρω του γεννήθηκε η πόλη. Το Stadhuis (Στάντχαους, το Δημαρχείο) χτίστηκε από το 1376 ως το 1421 και είναι από τα πιο παλιά δημαρχεία του Βελγίου. Οι άνθρωποι της πόλης ήθελαν να δείξουν πόσο πλούσιοι και περήφανοι ήταν, γι\' αυτό το γέμισαν με μυτερά παράθυρα, πυργάκια και αγάλματα κόμηδων και κοντεσών σε μικρές κόγχες. Δίπλα του, ένα μικρό κτίριο με χρυσά αγάλματα στη στέγη ήταν το γραφείο όπου γράφονταν τα επίσημα χαρτιά της πόλης. Και στη γωνία, η Βασιλική του Αγίου Αίματος φυλάει ένα μικρό κρυστάλλινο φιαλίδιο, που έφτασε εδώ από τα ταξίδια των Σταυροφόρων πριν από περισσότερα από 800 χρόνια.',
        en: 'This square is the heart of Bruges. More than a thousand years ago the count\'s castle stood here, and the city grew up around it. The Stadhuis, the City Hall, was built from 1376 to 1421 and is one of the oldest city halls in Belgium. The townspeople wanted to show how rich and proud they were, so they covered it with pointed windows, little turrets and statues of counts and countesses in small niches. Next to it, a small building with golden statues on its roof was the office where the city\'s official papers were written. And in the corner, the Basilica of the Holy Blood keeps a tiny crystal flask that came here from the journeys of the Crusaders more than 800 years ago.',
      },
      didYouKnow: {
        el: 'Τα αγάλματα στην πρόσοψη του Δημαρχείου δεν είναι τα αρχικά: τα παλιά καταστράφηκαν το 1792, όταν η πόλη καταλήφθηκε από τα γαλλικά επαναστατικά στρατεύματα, και αντικαταστάθηκαν πολύ αργότερα. Κάθε χρόνο, την Ημέρα της Αναλήψεως (συνήθως τον Μάιο), το φιαλίδιο του Αγίου Αίματος περιφέρεται στην πόλη σε μια πομπή που η UNESCO έχει ανακηρύξει άυλη πολιτιστική κληρονομιά.',
        en: 'The statues on the City Hall façade are not the originals: the old ones were destroyed in 1792, when the city was taken by French revolutionary troops, and were replaced much later. Every year on Ascension Day (usually in May), the flask of the Holy Blood is carried through the city in a procession that UNESCO has listed as intangible cultural heritage.',
      },
      quiz: [
        {
          q: { el: 'Τι υπήρχε σε αυτή την πλατεία πριν από περισσότερα από χίλια χρόνια;', en: 'What stood on this square more than a thousand years ago?' },
          options: {
            el: ['Ένα λιμάνι', 'Ένας ανεμόμυλος', 'Ένα θέατρο', 'Το κάστρο του κόμη'],
            en: ['A harbour', 'A windmill', 'A theatre', 'The count\'s castle'],
          },
          correct: 3,
          explanation: {
            el: 'Εδώ στεκόταν το κάστρο του κόμη της Φλάνδρας, και γύρω του γεννήθηκε η Μπριζ.',
            en: 'The castle of the Count of Flanders stood here, and Bruges was born around it.',
          },
        },
        {
          q: { el: 'Πότε χτίστηκε το Δημαρχείο;', en: 'When was the City Hall built?' },
          options: {
            el: ['Πέρυσι', 'Από το 1376 ως το 1421', 'Το 1902', 'Πριν από 100 χρόνια'],
            en: ['Last year', 'From 1376 to 1421', 'In 1902', 'A hundred years ago'],
          },
          correct: 1,
          explanation: {
            el: 'Το Δημαρχείο χτίστηκε από το 1376 ως το 1421, δηλαδή πριν από περισσότερα από 600 χρόνια, και είναι από τα πιο παλιά του Βελγίου.',
            en: 'The City Hall was built from 1376 to 1421, more than 600 years ago, and it is one of the oldest in Belgium.',
          },
        },
        {
          q: { el: 'Τι φυλάει η μικρή εκκλησία στη γωνία της πλατείας;', en: 'What does the little church in the corner of the square keep?' },
          options: {
            el: ['Ένα μικρό κρυστάλλινο φιαλίδιο', 'Τον θησαυρό της πόλης', 'Ένα χρυσό σπαθί', 'Το στέμμα του κόμη'],
            en: ['A tiny crystal flask', 'The city treasure', 'A golden sword', 'The count\'s crown'],
          },
          correct: 0,
          explanation: {
            el: 'Η Βασιλική του Αγίου Αίματος φυλάει ένα μικρό κρυστάλλινο φιαλίδιο που έφτασε στη Μπριζ πριν από περισσότερα από 800 χρόνια.',
            en: 'The Basilica of the Holy Blood keeps a tiny crystal flask that came to Bruges more than 800 years ago.',
          },
        },
      ],
    },

    // ── 3. Rozenhoedkaai ───────────────────────────────────────────────────────
    {
      id: 'rozenhoedkaai',
      name: { el: 'Rozenhoedkaai', en: 'Rozenhoedkaai' },
      emoji: '📸',
      lat: 51.2072,
      lng: 3.2271,
      radiusM: 60,
      riddle: {
        el: 'Σε μια γωνία όπου δύο κανάλια συναντιούνται, όλοι σταματούν και βγάζουν φωτογραφίες. Παλιά σπίτια από τούβλο σκύβουν πάνω από το νερό, βάρκες περνούν από κάτω τους, και ο ψηλός πύργος της πόλης καθρεφτίζεται ανάποδα στο κανάλι.',
        en: 'At a corner where two canals meet, everyone stops to take a photo. Old brick houses lean over the water, boats slip past below them, and the tall tower of the city appears upside down in the canal.',
      },
      parentHint: {
        el: 'Είναι η Rozenhoedkaai (Ρόζενχουντκάι, η Προκυμαία του Ροζάριου). Από τη Burg περάστε κάτω από την καμάρα της Blinde-Ezelstraat, διασχίστε τη μικρή γέφυρα, στρίψτε δεξιά στη μικρή πλατεία Huidenvettersplein και σε 3 λεπτά φτάνετε στη γωνία του καναλιού.',
        en: 'It is the Rozenhoedkaai, the Rosary Quay. From the Burg walk under the archway of Blinde-Ezelstraat, cross the little bridge, turn right into the small Huidenvettersplein and you reach the canal corner in 3 minutes.',
      },
      unlockQuestion: {
        question: { el: 'Η Μπριζ έχει το παρατσούκλι «Βενετία του Βορρά». Τι έχουν κοινό οι δύο πόλεις;', en: 'Bruges has the nickname “Venice of the North”. What do the two cities have in common?' },
        options: {
          el: ['Και οι δύο έχουν πολλά κανάλια με νερό αντί για δρόμους', 'Και οι δύο είναι πάνω σε βουνό', 'Και οι δύο έχουν ηφαίστειο', 'Και οι δύο είναι πρωτεύουσες'],
          en: ['Both have many water canals instead of streets', 'Both sit on a mountain', 'Both have a volcano', 'Both are capital cities'],
        },
        correct: 0,
        explanation: {
          el: 'Όπως η Βενετία στην Ιταλία, έτσι και η Μπριζ είναι γεμάτη κανάλια. Παλιά τα εμπορεύματα ταξίδευαν με βάρκες ως τις πόρτες των σπιτιών. Σήμερα στις βάρκες ταξιδεύουν οι επισκέπτες!',
          en: 'Like Venice in Italy, Bruges is full of canals. Long ago goods travelled by boat right up to the doors of the houses. Today it is the visitors who travel in the boats!',
        },
      },
      onSite: {
        question: { el: 'Στάσου στη γωνία και κοίταξε πάνω από τα σπίτια, απέναντι από το νερό. Ποιον πύργο βλέπεις να ξεπροβάλλει;', en: 'Stand at the corner and look above the houses across the water. Which tower do you see rising up?' },
        options: {
          el: ['Έναν φάρο', 'Τον πύργο των καμπανών που είδες στη Markt', 'Έναν ανεμόμυλο', 'Έναν πύργο από γυαλί'],
          en: ['A lighthouse', 'The bell tower you saw at the Markt', 'A windmill', 'A glass tower'],
        },
        correct: 1,
        explanation: {
          el: 'Είναι το Belfort, ο πύργος με τις 47 καμπάνες! Το νερό, τα παλιά σπίτια και ο πύργος από πίσω κάνουν αυτή τη γωνία την πιο φωτογραφημένη εικόνα της Μπριζ.',
          en: 'It is the Belfort, the tower with 47 bells! The water, the old houses and the tower behind them make this corner the most photographed view in Bruges.',
        },
      },
      story: {
        el: 'Το όνομα Rozenhoedkaai σημαίνει «Προκυμαία του Ροζάριου»: παλιά, εδώ δίπλα, οι έμποροι πουλούσαν ροζάρια, δηλαδή χάντρες προσευχής από ξύλο και γυαλί. Ακόμα πιο παλιά, σε αυτό το σημείο ξεφόρτωναν αλάτι, που τότε ήταν πολύτιμο σαν χρυσάφι, γιατί με αυτό κρατούσαν το φαγητό φρέσκο. Τα κανάλια της Μπριζ λέγονται reien (ράιεν) και ήταν οι δρόμοι της πόλης: οι βάρκες έφερναν μαλλί, μπαχαρικά και ύφασμα ως τις πόρτες των σπιτιών. Κοίτα πόσο κοντά στο νερό είναι χτισμένα τα σπίτια, με τους τοίχους τους να βρέχονται! Σήμερα οι βάρκες μεταφέρουν επισκέπτες, και όποιος κάθεται μέσα τους πρέπει να σκύβει όταν περνάει κάτω από τις χαμηλές γέφυρες.',
        en: 'The name Rozenhoedkaai means “Rosary Quay”: long ago, right here, traders sold prayer beads made of wood and glass. Even earlier, this was the place where salt was unloaded, and salt was then as precious as gold, because it kept food fresh. The canals of Bruges are called reien and they were the streets of the city: boats carried wool, spices and cloth right to the doors of the houses. Look how close to the water the houses are built, with their walls standing in it! Today the boats carry visitors, and anyone sitting in them has to duck when they pass under the low bridges.',
      },
      didYouKnow: {
        el: 'Τα κανάλια της Μπριζ δεν είναι πια ανοιχτά στη θάλασσα: το φυσικό κανάλι Zwin, που ένωνε την πόλη με τη Βόρεια Θάλασσα, γέμισε άμμο σταδιακά από τον 15ο αιώνα και το εμπόριο μετακόμισε στην Αμβέρσα. Αυτή η «κακή τύχη» είναι ο λόγος που το μεσαιωνικό κέντρο έμεινε σχεδόν άθικτο και σήμερα είναι μνημείο της UNESCO.',
        en: 'The canals of Bruges are no longer open to the sea: the natural Zwin channel that linked the city to the North Sea silted up gradually from the 15th century, and trade moved to Antwerp. That “bad luck” is the reason the medieval centre survived almost untouched and is now a UNESCO World Heritage site.',
      },
      quiz: [
        {
          q: { el: 'Τι σημαίνει το όνομα αυτής της προκυμαίας;', en: 'What does the name of this quay mean?' },
          options: {
            el: ['Προκυμαία των Κύκνων', 'Προκυμαία της Σοκολάτας', 'Προκυμαία του Ροζάριου', 'Προκυμαία των Βασιλιάδων'],
            en: ['Swan Quay', 'Chocolate Quay', 'Rosary Quay', 'Kings\' Quay'],
          },
          correct: 2,
          explanation: {
            el: 'Rozenhoedkaai σημαίνει «Προκυμαία του Ροζάριου», γιατί εδώ πουλούσαν ροζάρια, χάντρες προσευχής.',
            en: 'Rozenhoedkaai means “Rosary Quay”, because prayer beads were sold here.',
          },
        },
        {
          q: { el: 'Τι ξεφόρτωναν εδώ ακόμα πιο παλιά, που ήταν πολύτιμο σαν χρυσάφι;', en: 'What was unloaded here even earlier, as precious as gold?' },
          options: {
            el: ['Αλάτι', 'Σοκολάτα', 'Άμμο', 'Πάγο'],
            en: ['Salt', 'Chocolate', 'Sand', 'Ice'],
          },
          correct: 0,
          explanation: {
            el: 'Το αλάτι κρατούσε το φαγητό φρέσκο σε μια εποχή χωρίς ψυγεία, γι\' αυτό ήταν τόσο πολύτιμο.',
            en: 'Salt kept food fresh in a time without fridges, which is why it was so precious.',
          },
        },
        {
          q: { el: 'Τι ήταν παλιά τα κανάλια για την πόλη;', en: 'What were the canals for the city long ago?' },
          options: {
            el: ['Πισίνες', 'Χώροι για ψάρεμα', 'Φράχτες του κάστρου', 'Οι δρόμοι της, όπου οι βάρκες έφερναν τα εμπορεύματα'],
            en: ['Swimming pools', 'Fishing spots', 'The castle fences', 'Its streets, where boats brought the goods'],
          },
          correct: 3,
          explanation: {
            el: 'Οι βάρκες έφερναν μαλλί, μπαχαρικά και ύφασμα μέσα από τα κανάλια ως τις πόρτες των σπιτιών, σαν να ήταν δρόμοι από νερό.',
            en: 'Boats brought wool, spices and cloth along the canals right to the doors of the houses, like streets made of water.',
          },
        },
      ],
    },

    // ── 4. Vismarkt ────────────────────────────────────────────────────────────
    {
      id: 'vismarkt',
      name: { el: 'Vismarkt', en: 'Vismarkt' },
      emoji: '🐟',
      lat: 51.2078,
      lng: 3.2278,
      radiusM: 40,
      riddle: {
        el: 'Ένα δάσος από πέτρινες κολόνες κρατάει μια στέγη χωρίς τοίχους. Από κάτω, μακριά πέτρινα τραπέζια περιμένουν κάθε πρωί τα πιο γλιστερά εμπορεύματα της πόλης, που μυρίζουν θάλασσα.',
        en: 'A forest of stone columns holds up a roof with no walls. Underneath, long stone tables wait each morning for the slipperiest goods in town, the ones that smell of the sea.',
      },
      parentHint: {
        el: 'Είναι η Vismarkt (Βίσμαρκτ, η Ψαραγορά). Από τη Rozenhoedkaai περπατήστε 2 λεπτά πίσω, με το κανάλι στα αριστερά σας, και η στοά με τις κολόνες είναι ακριβώς μετά τη μικρή γέφυρα. Ψάρια πωλούνται τα πρωινά, συνήθως από Τετάρτη ως Σάββατο.',
        en: 'It is the Vismarkt, the Fish Market. From the Rozenhoedkaai walk 2 minutes back with the canal on your left, and the colonnade is just past the little bridge. Fish is sold in the mornings, usually Wednesday to Saturday.',
      },
      unlockQuestion: {
        question: { el: 'Ο γρίφος μιλάει για «γλιστερά εμπορεύματα που μυρίζουν θάλασσα». Τι πουλάνε εδώ;', en: 'The riddle talks about “slippery goods that smell of the sea”. What is sold here?' },
        options: {
          el: ['Λουλούδια', 'Ψάρια', 'Παπούτσια', 'Βάφλες'],
          en: ['Flowers', 'Fish', 'Shoes', 'Waffles'],
        },
        correct: 1,
        explanation: {
          el: 'Είναι η ψαραγορά της πόλης, από το 1821. Η θάλασσα δεν είναι μακριά, και τα ψάρια φτάνουν εδώ φρέσκα κάθε πρωί εδώ και 200 χρόνια.',
          en: 'It is the city\'s fish market, since 1821. The sea is not far away, and fresh fish has arrived here every morning for 200 years.',
        },
      },
      onSite: {
        question: { el: 'Κοίταξε από κοντά τις κολόνες που κρατούν τη στέγη. Πώς είναι;', en: 'Look closely at the columns holding up the roof. What are they like?' },
        options: {
          el: ['Στρογγυλές, λείες, με απλή κορυφή', 'Στριφτές σαν σχοινί', 'Τετράγωνες από ξύλο', 'Από σίδερο με δαντέλες'],
          en: ['Round and smooth, with a plain top', 'Twisted like a rope', 'Square and made of wood', 'Iron, with lacy patterns'],
        },
        correct: 0,
        explanation: {
          el: 'Οι κολόνες είναι στρογγυλές και απλές, χωρίς στολίδια, όπως στους αρχαίους ελληνικούς ναούς. Το 1821 αυτό το στιλ ήταν πολύ της μόδας, ακόμη και για μια ψαραγορά!',
          en: 'The columns are round and plain, without decoration, like those of ancient Greek temples. In 1821 this style was very fashionable, even for a fish market!',
        },
      },
      story: {
        el: 'Για αιώνες τα ψάρια πουλιούνταν στη μεγάλη πλατεία Markt. Οι πλούσιοι που έμεναν εκεί γύρω όμως παραπονιούνταν για τη μυρωδιά! Έτσι, το 1821 η πόλη έχτισε εδώ, δίπλα στο κανάλι, μια καινούργια ψαραγορά με πέτρινες κολόνες και σκεπασμένους πάγκους. Οι ψαράδες έφερναν τα ψάρια από τη Βόρεια Θάλασσα, που απέχει λίγα μόνο χιλιόμετρα, και τα άπλωναν πάνω στα μακριά πέτρινα τραπέζια, γιατί η πέτρα μένει δροσερή και πλένεται εύκολα. Ακόμη και σήμερα, τα πρωινά, οι ψαράδες στήνουν εδώ τα ψάρια τους, όπως πριν από 200 χρόνια. Πλησίασε ένα τραπέζι και άγγιξέ το: νιώθεις πόσο κρύα είναι η πέτρα;',
        en: 'For centuries fish was sold on the big Markt square. But the rich people who lived around it complained about the smell! So in 1821 the city built a new fish market here, beside the canal, with stone columns and covered stalls. The fishermen brought their catch from the North Sea, only a few kilometres away, and laid it out on the long stone tables, because stone stays cool and is easy to wash. Even today, in the mornings, fish sellers set up here just as they did 200 years ago. Go up to a table and touch it: can you feel how cold the stone is?',
      },
      didYouKnow: {
        el: 'Η ψαραγορά σχεδιάστηκε σε νεοκλασικό στιλ, με κολόνες που θυμίζουν αρχαίους ναούς, κάτι σπάνιο για μια πόλη γεμάτη γοτθικά κτίρια. Η γειτονική μικρή πλατεία Huidenvettersplein ήταν η πλατεία των βυρσοδεψών, αυτών που κατεργάζονταν δέρματα, μια δουλειά που μύριζε ακόμη χειρότερα από τα ψάρια.',
        en: 'The fish market was designed in neoclassical style, with columns that recall ancient temples, a rarity in a city full of Gothic buildings. The neighbouring little Huidenvettersplein was the square of the tanners, who treated animal hides, a job that smelled even worse than fish.',
      },
      quiz: [
        {
          q: { el: 'Γιατί η ψαραγορά μετακόμισε από τη μεγάλη πλατεία εδώ;', en: 'Why did the fish market move from the big square to here?' },
          options: {
            el: ['Γιατί η πλατεία ήταν πολύ μικρή', 'Γιατί οι πλούσιοι γείτονες παραπονιούνταν για τη μυρωδιά', 'Γιατί έπεσε ο πύργος', 'Γιατί τελείωσαν τα ψάρια'],
            en: ['Because the square was too small', 'Because the rich neighbours complained about the smell', 'Because the tower fell down', 'Because the fish ran out'],
          },
          correct: 1,
          explanation: {
            el: 'Οι πλούσιοι που έμεναν γύρω από τη Markt δεν άντεχαν τη μυρωδιά, και έτσι το 1821 η ψαραγορά μετακόμισε δίπλα στο κανάλι.',
            en: 'The rich people living around the Markt could not stand the smell, so in 1821 the fish market moved beside the canal.',
          },
        },
        {
          q: { el: 'Από πού έφερναν οι ψαράδες τα ψάρια;', en: 'Where did the fishermen bring the fish from?' },
          options: {
            el: ['Από τη Μεσόγειο', 'Από το ποτάμι', 'Από μια λίμνη στα βουνά', 'Από τη Βόρεια Θάλασσα'],
            en: ['From the Mediterranean', 'From the river', 'From a mountain lake', 'From the North Sea'],
          },
          correct: 3,
          explanation: {
            el: 'Η Βόρεια Θάλασσα απέχει λίγα μόνο χιλιόμετρα από τη Μπριζ, γι\' αυτό τα ψάρια έφταναν φρέσκα.',
            en: 'The North Sea is only a few kilometres from Bruges, so the fish arrived fresh.',
          },
        },
        {
          q: { el: 'Γιατί τα τραπέζια είναι από πέτρα;', en: 'Why are the tables made of stone?' },
          options: {
            el: ['Γιατί η πέτρα είναι φτηνή', 'Γιατί η πέτρα λάμπει', 'Γιατί η πέτρα μένει δροσερή και πλένεται εύκολα', 'Γιατί δεν υπήρχε ξύλο'],
            en: ['Because stone is cheap', 'Because stone shines', 'Because stone stays cool and is easy to wash', 'Because there was no wood'],
          },
          correct: 2,
          explanation: {
            el: 'Η πέτρα μένει κρύα και πλένεται εύκολα, οπότε τα ψάρια μένουν φρέσκα και ο πάγκος καθαρός.',
            en: 'Stone stays cold and washes easily, so the fish stays fresh and the counter stays clean.',
          },
        },
      ],
    },

    // ── 5. Bonifaciusbrug ──────────────────────────────────────────────────────
    {
      id: 'bonifacius-bridge',
      name: { el: 'Bonifaciusbrug', en: 'Bonifaciusbrug' },
      emoji: '🌉',
      lat: 51.2048,
      lng: 3.2256,
      radiusM: 60,
      riddle: {
        el: 'Μια μικροσκοπική πέτρινη γέφυρα, τόσο στενή που χωράει μετά βίας δύο άνθρωποι, κρύβεται σε έναν κήπο ανάμεσα σε παλιούς τοίχους. Μοιάζει χιλίων χρόνων, αλλά η γιαγιά σου ίσως είναι πιο μεγάλη από αυτήν!',
        en: 'A tiny stone bridge, so narrow that two people can barely pass, hides in a garden between old walls. It looks a thousand years old, but your grandmother might be older than it is!',
      },
      parentHint: {
        el: 'Είναι η Bonifaciusbrug (Μπονιφάτσιουσμπρουχ, η Γέφυρα του Βονιφάτιου). Από τη Vismarkt γυρίστε στη Rozenhoedkaai και συνεχίστε κατά μήκος της προκυμαίας Dijver με το κανάλι στα δεξιά σας, περάστε το μουσείο Groeninge και μπείτε στον κήπο Arentshof από την πόρτα του, 8 λεπτά συνολικά. Η γέφυρα είναι στο βάθος του κήπου.',
        en: 'It is the Bonifaciusbrug, the Bonifacius Bridge. From the Vismarkt return to the Rozenhoedkaai and continue along the Dijver quay with the canal on your right, pass the Groeninge museum and enter the Arentshof garden through its gate, 8 minutes in all. The bridge is at the far end of the garden.',
      },
      unlockQuestion: {
        question: { el: 'Ο γρίφος λέει ότι η γέφυρα μοιάζει πολύ παλιά αλλά δεν είναι. Πότε περίπου χτίστηκε;', en: 'The riddle says the bridge looks very old but is not. When was it built, roughly?' },
        options: {
          el: ['Πριν από περίπου 1.000 χρόνια', 'Πριν από περίπου 500 χρόνια', 'Πριν από περίπου 100 χρόνια', 'Πέρυσι'],
          en: ['About 1,000 years ago', 'About 500 years ago', 'About 100 years ago', 'Last year'],
        },
        correct: 2,
        explanation: {
          el: 'Η γέφυρα χτίστηκε γύρω στο 1910, δηλαδή πριν από περίπου 100 χρόνια. Οι χτίστες της τη σχεδίασαν επίτηδες να μοιάζει μεσαιωνική, για να ταιριάζει με τα παλιά κτίρια γύρω της.',
          en: 'The bridge was built around 1910, about 100 years ago. Its builders designed it on purpose to look medieval, so that it would match the old buildings around it.',
        },
      },
      onSite: {
        question: { el: 'Κοίταξε τη γέφυρα από το πλάι, από τον κήπο. Πόσες καμάρες έχει από κάτω;', en: 'Look at the bridge from the side, from the garden. How many arches does it have underneath?' },
        options: {
          el: ['Μία', 'Δύο', 'Τρεις', 'Πέντε'],
          en: ['One', 'Two', 'Three', 'Five'],
        },
        correct: 0,
        explanation: {
          el: 'Μία μόνο καμάρα, γιατί το κανάλι εδώ είναι πολύ στενό. Από πάνω της, ανάμεσα στα δέντρα, ξεπροβάλλει ο τεράστιος πύργος από τούβλο της εκκλησίας, ο επόμενος σταθμός μας!',
          en: 'Just one arch, because the canal is very narrow here. Above it, between the trees, rises the enormous brick tower of the church, our next stop!',
        },
      },
      story: {
        el: 'Αυτή η γέφυρα είναι το πιο ρομαντικό σημείο της Μπριζ, και κρύβει ένα μυστικό: μοιάζει μεσαιωνική, αλλά χτίστηκε γύρω στο 1910. Δίπλα της στέκεται το Gruuthuse (Χρύτχουζε), το παλάτι μιας οικογένειας που έγινε πάμπλουτη με έναν παράξενο τρόπο. Τον Μεσαίωνα η μπίρα δεν φτιαχνόταν με λυκίσκο αλλά με ένα μείγμα από βότανα, το gruut (χρουτ), και μόνο αυτή η οικογένεια είχε το δικαίωμα να το πουλάει! Ο πιο διάσημος από αυτούς, ο Lodewijk van Gruuthuse, είχε το σύνθημα «Plus est en vous», δηλαδή «Μέσα σου υπάρχουν περισσότερα απ\' όσα νομίζεις». Στο νερό γύρω από τη γέφυρα κολυμπούν συχνά κύκνοι, τα αγαπημένα πουλιά της πόλης. Πέρασε τη γέφυρα αργά και κοίτα πάνω από τα δέντρα: ένας γίγαντας από τούβλο σε παρακολουθεί.',
        en: 'This bridge is the most romantic spot in Bruges, and it hides a secret: it looks medieval, but it was built around 1910. Beside it stands the Gruuthuse, the palace of a family that became enormously rich in a strange way. In the Middle Ages beer was not made with hops but with a mix of herbs called gruut, and only this family had the right to sell it! The most famous of them, Lodewijk van Gruuthuse, had the motto “Plus est en vous”, which means “There is more in you than you think”. Swans, the favourite birds of the city, often swim in the water around the bridge. Cross the bridge slowly and look above the trees: a giant made of brick is watching you.',
      },
      didYouKnow: {
        el: 'Ο Lodewijk van Gruuthuse (περ. 1427–1492) ήταν από τους μεγαλύτερους συλλέκτες χειρόγραφων βιβλίων της εποχής του, και η βιβλιοθήκη του βρίσκεται σήμερα σε μεγάλο μέρος στην Εθνική Βιβλιοθήκη της Γαλλίας. Το παλάτι του έχει ένα ιδιωτικό παρεκκλήσι που ανοίγει απευθείας μέσα στη διπλανή εκκλησία, ώστε η οικογένεια να παρακολουθεί τη λειτουργία χωρίς να βγαίνει από το σπίτι.',
        en: 'Lodewijk van Gruuthuse (c. 1427–1492) was one of the greatest collectors of illuminated manuscripts of his time, and much of his library is now in the National Library of France. His palace has a private chapel that opens directly into the neighbouring church, so the family could follow the service without leaving home.',
      },
      quiz: [
        {
          q: { el: 'Με τι φτιαχνόταν η μπίρα τον Μεσαίωνα στη Μπριζ;', en: 'What was beer made with in medieval Bruges?' },
          options: {
            el: ['Με ένα μείγμα από βότανα, το gruut', 'Με σοκολάτα', 'Με θαλασσινό νερό', 'Με μέλι και μήλα'],
            en: ['With a mix of herbs called gruut', 'With chocolate', 'With sea water', 'With honey and apples'],
          },
          correct: 0,
          explanation: {
            el: 'Το gruut ήταν ένα μείγμα από βότανα που έδινε γεύση στην μπίρα, πριν αρχίσουν να χρησιμοποιούν τον λυκίσκο.',
            en: 'Gruut was a mix of herbs that gave beer its flavour, before people started using hops.',
          },
        },
        {
          q: { el: 'Τι σημαίνει το σύνθημα «Plus est en vous»;', en: 'What does the motto “Plus est en vous” mean?' },
          options: {
            el: ['Η μπίρα είναι καλή', 'Μέσα σου υπάρχουν περισσότερα απ\' όσα νομίζεις', 'Η γέφυρα είναι παλιά', 'Οι κύκνοι είναι λευκοί'],
            en: ['Beer is good', 'There is more in you than you think', 'The bridge is old', 'Swans are white'],
          },
          correct: 1,
          explanation: {
            el: 'Ο Lodewijk van Gruuthuse ήθελε να θυμίζει στους ανθρώπους ότι μπορούν να καταφέρουν περισσότερα απ\' όσα πιστεύουν.',
            en: 'Lodewijk van Gruuthuse wanted to remind people that they can achieve more than they believe.',
          },
        },
        {
          q: { el: 'Ποιο είναι το μυστικό της γέφυρας;', en: 'What is the secret of the bridge?' },
          options: {
            el: ['Είναι από ξύλο', 'Κινείται τη νύχτα', 'Είναι η μεγαλύτερη της πόλης', 'Μοιάζει μεσαιωνική αλλά χτίστηκε γύρω στο 1910'],
            en: ['It is made of wood', 'It moves at night', 'It is the biggest in town', 'It looks medieval but was built around 1910'],
          },
          correct: 3,
          explanation: {
            el: 'Η γέφυρα χτίστηκε γύρω στο 1910, αλλά σχεδιάστηκε να μοιάζει πολύ πιο παλιά. Τα φαινόμενα απατούν!',
            en: 'The bridge was built around 1910 but designed to look much older. Looks can be deceiving!',
          },
        },
      ],
    },

    // ── 6. Onze-Lieve-Vrouwekerk ───────────────────────────────────────────────
    {
      id: 'church-of-our-lady',
      name: { el: 'Onze-Lieve-Vrouwekerk', en: 'Onze-Lieve-Vrouwekerk' },
      emoji: '⛪',
      lat: 51.2046,
      lng: 3.2245,
      radiusM: 60,
      riddle: {
        el: 'Ένας πύργος σκαρφαλώνει ψηλότερα κι από τον πύργο με τις καμπάνες. Μέσα του κρύβεται μια μαρμάρινη μητέρα με το μωρό της, σκαλισμένη από τον πιο διάσημο γλύπτη της Ιταλίας.',
        en: 'A tower climbs even higher than the bell tower. Inside it hides a marble mother with her baby, carved by the most famous sculptor in Italy.',
      },
      parentHint: {
        el: 'Είναι η Onze-Lieve-Vrouwekerk (Όνζε-Λίβε-Βράουβεκερκ, η Εκκλησία της Παναγίας). Από τη γέφυρα περάστε μέσα από την αυλή του Gruuthuse ή γυρίστε στην οδό Dijver και στρίψτε αριστερά στη Mariastraat, 2 λεπτά. Η είσοδος για τους επισκέπτες είναι από τη Mariastraat· το άγαλμα του Michelangelo θέλει εισιτήριο.',
        en: 'It is the Onze-Lieve-Vrouwekerk, the Church of Our Lady. From the bridge walk through the Gruuthuse courtyard or go back to Dijver and turn left into Mariastraat, 2 minutes. The visitors\' entrance is on Mariastraat; seeing the Michelangelo statue needs a ticket.',
      },
      unlockQuestion: {
        question: { el: 'Ο γρίφος λέει ότι το άγαλμα το σκάλισε ο πιο διάσημος γλύπτης της Ιταλίας. Ποιος είναι;', en: 'The riddle says the statue was carved by the most famous sculptor in Italy. Who is he?' },
        options: {
          el: ['Ο Λεονάρντο ντα Βίντσι', 'Ο Πικάσο', 'Ο Michelangelo', 'Ο Βαν Γκογκ'],
          en: ['Leonardo da Vinci', 'Picasso', 'Michelangelo', 'Van Gogh'],
        },
        correct: 2,
        explanation: {
          el: 'Ο Michelangelo (Μιχαήλ Άγγελος) σκάλισε την «Παναγία της Μπριζ» γύρω στο 1504, την ίδια εποχή που έφτιαχνε τον περίφημο Δαβίδ στη Φλωρεντία. Δύο έμποροι της Μπριζ την αγόρασαν και την έφεραν εδώ.',
          en: 'Michelangelo carved the “Madonna of Bruges” around 1504, at the same time he was making the famous David in Florence. Two merchants from Bruges bought it and brought it here.',
        },
      },
      onSite: {
        question: { el: 'Στάσου στον δρόμο και κοίταξε τον πύργο από κάτω ως πάνω. Από τι είναι φτιαγμένος;', en: 'Stand in the street and look at the tower from bottom to top. What is it made of?' },
        options: {
          el: ['Από άσπρο μάρμαρο', 'Από ξύλο', 'Από γυαλί και σίδερο', 'Από κόκκινο τούβλο'],
          en: ['White marble', 'Wood', 'Glass and iron', 'Red brick'],
        },
        correct: 3,
        explanation: {
          el: 'Ο πύργος είναι ολόκληρος από τούβλο, από κάτω ως πάνω! Στη Φλάνδρα δεν υπάρχουν βουνά με πέτρα, οπότε οι χτίστες έψηναν τούβλα από τη λάσπη της γης, εκατομμύρια τούβλα για έναν πύργο 115 μέτρων.',
          en: 'The tower is made entirely of brick, from bottom to top! Flanders has no mountains with stone, so the builders baked bricks from the clay of the land, millions of bricks for a tower 115 metres tall.',
        },
      },
      story: {
        el: 'Ο πύργος αυτής της εκκλησίας είναι 115,5 μέτρα ψηλός, πολύ πιο ψηλός από το Belfort, και είναι από τους ψηλότερους πύργους από τούβλο σε όλον τον κόσμο. Οι χτίστες δούλεψαν πάνω του περισσότερα από 200 χρόνια, τούβλο τούβλο. Μέσα στην εκκλησία κάθεται ένα άγαλμα από άσπρο μάρμαρο, η Παναγία με το μωρό Ιησού, που το σκάλισε ο Michelangelo γύρω στο 1504. Είναι το μόνο έργο του που έφυγε από την Ιταλία όσο ζούσε ο ίδιος: δύο έμποροι της Μπριζ το αγόρασαν και το έφεραν εδώ με καράβι. Λίγο πιο πέρα, δύο χρυσές φιγούρες ξαπλώνουν πάνω σε μαύρα μνήματα: η Μαρία της Βουργουνδίας, που ήταν η αρχόντισσα όλης της Φλάνδρας, και ο πατέρας της, ο Κάρολος ο Τολμηρός. Η Μαρία λάτρευε τα άλογα και το κυνήγι με γεράκια, και πέθανε νέα, μόλις 25 χρονών, μετά από μια πτώση από το άλογό της.',
        en: 'The tower of this church is 115.5 metres tall, much taller than the Belfort, and it is one of the tallest brick towers in the whole world. The builders worked on it for more than 200 years, brick by brick. Inside the church sits a statue of white marble, Mary with the baby Jesus, carved by Michelangelo around 1504. It is the only work of his that left Italy while he was alive: two merchants from Bruges bought it and brought it here by ship. A little further on, two golden figures lie on dark tombs: Mary of Burgundy, who was the lady of all Flanders, and her father, Charles the Bold. Mary loved horses and hunting with falcons, and she died young, only 25, after a fall from her horse.',
      },
      didYouKnow: {
        el: 'Η «Παναγία της Μπριζ» έχει κλαπεί δύο φορές από στρατούς κατοχής, το 1794 από τους Γάλλους και το 1944 από τους Γερμανούς, και επέστρεψε και τις δύο φορές: τη δεύτερη τη βρήκαν οι «Monuments Men» των Συμμάχων κρυμμένη σε αλατωρυχείο στην Αυστρία. Μόνο ο πύργος του Αγίου Μαρτίνου στο Landshut της Γερμανίας θεωρείται ψηλότερος πύργος από τούβλο.',
        en: 'The “Madonna of Bruges” has been taken twice by occupying armies, in 1794 by the French and in 1944 by the Germans, and came back both times: the second time the Allied “Monuments Men” found it hidden in a salt mine in Austria. Only St Martin\'s tower in Landshut, Germany, is generally counted as a taller brick tower.',
      },
      quiz: [
        {
          q: { el: 'Πόσο ψηλός είναι ο πύργος της εκκλησίας;', en: 'How tall is the church tower?' },
          options: {
            el: ['Περίπου 115 μέτρα', 'Περίπου 30 μέτρα', 'Περίπου 300 μέτρα', 'Περίπου 83 μέτρα'],
            en: ['About 115 metres', 'About 30 metres', 'About 300 metres', 'About 83 metres'],
          },
          correct: 0,
          explanation: {
            el: 'Ο πύργος είναι 115,5 μέτρα, ενώ το Belfort είναι 83 μέτρα. Ο πύργος της εκκλησίας κερδίζει!',
            en: 'The tower is 115.5 metres, while the Belfort is 83 metres. The church tower wins!',
          },
        },
        {
          q: { el: 'Πώς έφτασε το άγαλμα του Michelangelo στη Μπριζ;', en: 'How did Michelangelo\'s statue reach Bruges?' },
          options: {
            el: ['Το έφερε ο ίδιος ο Michelangelo', 'Δύο έμποροι της πόλης το αγόρασαν και το έφεραν με καράβι', 'Ήταν δώρο του βασιλιά της Γαλλίας', 'Το βρήκαν μέσα στο κανάλι'],
            en: ['Michelangelo brought it himself', 'Two merchants from the city bought it and brought it by ship', 'It was a gift from the king of France', 'It was found in the canal'],
          },
          correct: 1,
          explanation: {
            el: 'Δύο έμποροι της Μπριζ το αγόρασαν στην Ιταλία και το έφεραν εδώ με καράβι. Είναι το μόνο έργο του που έφυγε από την Ιταλία όσο ζούσε.',
            en: 'Two merchants from Bruges bought it in Italy and shipped it here. It is the only work of his that left Italy in his lifetime.',
          },
        },
        {
          q: { el: 'Ποια ήταν η Μαρία της Βουργουνδίας;', en: 'Who was Mary of Burgundy?' },
          options: {
            el: ['Μια ζωγράφος', 'Μια ψαρού', 'Μια μοναχή', 'Η αρχόντισσα όλης της Φλάνδρας, που λάτρευε τα άλογα'],
            en: ['A painter', 'A fish seller', 'A nun', 'The lady of all Flanders, who loved horses'],
          },
          correct: 3,
          explanation: {
            el: 'Η Μαρία της Βουργουνδίας ήταν η αρχόντισσα που κυβερνούσε όλη τη Φλάνδρα και λάτρευε τα άλογα και το κυνήγι με γεράκια. Ο χρυσός τάφος της βρίσκεται μέσα στην εκκλησία.',
            en: 'Mary of Burgundy ruled Flanders and loved horses and hunting with falcons. Her golden tomb is inside the church.',
          },
        },
      ],
    },

    // ── 7. Begijnhof ───────────────────────────────────────────────────────────
    {
      id: 'begijnhof',
      name: { el: 'Begijnhof', en: 'Begijnhof' },
      emoji: '🌼',
      lat: 51.2020,
      lng: 3.2226,
      radiusM: 60,
      riddle: {
        el: 'Πέρνα μια γέφυρα και μια πύλη και θα βρεθείς σε ένα χωριό μέσα στην πόλη: χαμηλά σπιτάκια γύρω από ένα λιβάδι με ψηλά δέντρα, όπου κανείς δεν μιλάει δυνατά. Την άνοιξη το γρασίδι γεμίζει κίτρινα λουλούδια.',
        en: 'Cross a bridge and a gate and you will find a village inside the city: little houses around a meadow of tall trees, where nobody speaks loudly. In spring the grass fills with yellow flowers.',
      },
      parentHint: {
        el: 'Είναι το Begijnhof (Μπεχάινχοφ, η Αυλή των Μπεγκινών). Από την εκκλησία κατεβείτε νότια τη Mariastraat, που γίνεται Katelijnestraat, στρίψτε δεξιά στη Wijngaardstraat και ακολουθήστε την ως τη μικρή πλατεία Wijngaardplein με τις άμαξες, 8 λεπτά. Περάστε τη γέφυρα και την πύλη. Μέσα ζητούν ησυχία.',
        en: 'It is the Begijnhof, the Beguinage. From the church walk south down Mariastraat, which becomes Katelijnestraat, turn right into Wijngaardstraat and follow it to the little Wijngaardplein with the horse carriages, 8 minutes. Cross the bridge and go through the gate. Silence is asked for inside.',
      },
      unlockQuestion: {
        question: { el: 'Ποιες ήταν οι μπεγκίνες, που έμεναν εδώ;', en: 'Who were the beguines who lived here?' },
        options: {
          el: ['Πριγκίπισσες από τη Γαλλία', 'Γυναίκες που ζούσαν μαζί, προσεύχονταν και δούλευαν, χωρίς να είναι μοναχές', 'Ζωγράφοι από την Ιταλία', 'Κόρες των ψαράδων'],
          en: ['Princesses from France', 'Women who lived together, prayed and worked, without being nuns', 'Painters from Italy', 'Daughters of the fishermen'],
        },
        correct: 1,
        explanation: {
          el: 'Οι μπεγκίνες ήταν γυναίκες που διάλεγαν να ζουν μαζί, ήσυχα και απλά. Προσεύχονταν και δούλευαν, συνήθως με μαλλί και δαντέλα, αλλά δεν έδιναν όρκους μοναχής και μπορούσαν να φύγουν όποτε ήθελαν.',
          en: 'Beguines were women who chose to live together, quietly and simply. They prayed and worked, usually with wool and lace, but they took no vows as nuns and could leave whenever they wished.',
        },
      },
      onSite: {
        question: { el: 'Κοίταξε τα σπίτια γύρω από το λιβάδι. Τι χρώμα είναι οι τοίχοι τους;', en: 'Look at the houses around the meadow. What colour are their walls?' },
        options: {
          el: ['Κόκκινοι', 'Κίτρινοι', 'Άσπροι', 'Μπλε'],
          en: ['Red', 'Yellow', 'White', 'Blue'],
        },
        correct: 2,
        explanation: {
          el: 'Όλα τα σπίτια είναι ασβεστωμένα άσπρα, με πράσινες ή σκούρες πόρτες. Το άσπρο δείχνει καθαριότητα και απλότητα, ακριβώς όπως ήθελαν να ζουν οι μπεγκίνες.',
          en: 'All the houses are whitewashed, with green or dark doors. White stands for cleanliness and simplicity, exactly how the beguines wanted to live.',
        },
      },
      story: {
        el: 'Το 1245 η Μαργαρίτα, κόμισσα της Φλάνδρας, ίδρυσε αυτή την αυλή για τις μπεγκίνες. Ήταν γυναίκες που δεν ήθελαν ούτε να παντρευτούν ούτε να γίνουν μοναχές. Ζούσαν μαζί σε αυτά τα μικρά σπίτια, προσεύχονταν, φρόντιζαν αρρώστους και έπλεκαν δαντέλα, και κάθε μια μπορούσε να φύγει όποτε ήθελε. Η αυλή είχε τείχος και πύλη, σαν μικρό χωριό, για να ζουν με ασφάλεια. Οι τελευταίες μπεγκίνες έφυγαν πριν από περίπου 100 χρόνια, και από το 1927 εδώ μένουν μοναχές του Αγίου Βενεδίκτου, με μακριά μαύρα ρούχα. Την άνοιξη το λιβάδι σκεπάζεται από χιλιάδες νάρκισσους, κίτρινα λουλούδια που φαίνονται σαν χαλί.',
        en: 'In 1245 Margaret, Countess of Flanders, founded this courtyard for the beguines. They were women who wanted neither to marry nor to become nuns. They lived together in these little houses, prayed, cared for the sick and made lace, and each of them could leave whenever she wished. The courtyard had a wall and a gate, like a small village, so they could live safely. The last beguines left about 100 years ago, and since 1927 Benedictine sisters have lived here, wearing long black habits. In spring the meadow is covered with thousands of daffodils, yellow flowers that look like a carpet.',
      },
      didYouKnow: {
        el: 'Το Begijnhof της Μπριζ είναι ένα από τα 13 φλαμανδικά μπεγκινάζ που η UNESCO ανακήρυξε Μνημεία Παγκόσμιας Κληρονομιάς το 1998. Η πύλη από την οποία μπαίνετε χρονολογείται από το 1776, και οι ψηλές λεύκες του λιβαδιού είναι πολύ νεότερες από τα σπίτια.',
        en: 'The Bruges Begijnhof is one of 13 Flemish beguinages that UNESCO listed as World Heritage in 1998. The gate you enter through dates from 1776, and the tall poplars of the meadow are far younger than the houses.',
      },
      quiz: [
        {
          q: { el: 'Ποιος ίδρυσε αυτή την αυλή το 1245;', en: 'Who founded this courtyard in 1245?' },
          options: {
            el: ['Ο Michelangelo', 'Η Μαργαρίτα, κόμισσα της Φλάνδρας', 'Ο βασιλιάς της Γαλλίας', 'Ένας ψαράς'],
            en: ['Michelangelo', 'Margaret, Countess of Flanders', 'The king of France', 'A fisherman'],
          },
          correct: 1,
          explanation: {
            el: 'Η κόμισσα Μαργαρίτα της Φλάνδρας ίδρυσε την αυλή το 1245, για να έχουν οι μπεγκίνες ένα ασφαλές σπίτι.',
            en: 'Countess Margaret of Flanders founded the courtyard in 1245, so that the beguines would have a safe home.',
          },
        },
        {
          q: { el: 'Τι δουλειά έκαναν συχνά οι μπεγκίνες;', en: 'What work did the beguines often do?' },
          options: {
            el: ['Έχτιζαν πύργους', 'Οδηγούσαν βάρκες', 'Έπλεκαν δαντέλα και φρόντιζαν αρρώστους', 'Έφτιαχναν σοκολάτα'],
            en: ['They built towers', 'They drove boats', 'They made lace and cared for the sick', 'They made chocolate'],
          },
          correct: 2,
          explanation: {
            el: 'Οι μπεγκίνες έπλεκαν δαντέλα, για την οποία η Μπριζ είναι διάσημη, και φρόντιζαν τους αρρώστους.',
            en: 'The beguines made lace, for which Bruges is famous, and cared for the sick.',
          },
        },
        {
          q: { el: 'Ποιοι μένουν εδώ σήμερα;', en: 'Who lives here today?' },
          options: {
            el: ['Κανείς, είναι άδειο', 'Ψαράδες', 'Ζωγράφοι', 'Μοναχές του Αγίου Βενεδίκτου'],
            en: ['Nobody, it is empty', 'Fishermen', 'Painters', 'Benedictine sisters'],
          },
          correct: 3,
          explanation: {
            el: 'Από το 1927 στην αυλή ζουν μοναχές του Αγίου Βενεδίκτου, γι\' αυτό όλοι ζητούν ησυχία.',
            en: 'Since 1927 Benedictine sisters have lived in the courtyard, which is why everyone asks for silence.',
          },
        },
      ],
    },

    // ── 8. Minnewater ──────────────────────────────────────────────────────────
    {
      id: 'minnewater',
      name: { el: 'Minnewater', en: 'Minnewater' },
      emoji: '🦢',
      lat: 51.2007,
      lng: 3.2241,
      radiusM: 60,
      riddle: {
        el: 'Μια λίμνη με όνομα που μιλάει για αγάπη, όπου λευκά πουλιά με μακρύ λαιμό κολυμπούν εδώ και 500 χρόνια, επειδή έτσι διέταξε ένας θυμωμένος πρίγκιπας.',
        en: 'A lake with a name that speaks of love, where white birds with long necks have swum for 500 years, because an angry prince ordered it.',
      },
      parentHint: {
        el: 'Είναι το Minnewater (Μίνεβατερ, η Λίμνη της Αγάπης). Από το Begijnhof βγείτε από την πύλη που μπήκατε και στρίψτε δεξιά: η λίμνη με τη γέφυρα είναι 2 λεπτά νότια. Σταθείτε στη γέφυρα ή στο πάρκο στην ανατολική όχθη.',
        en: 'It is the Minnewater, the Lake of Love. From the Begijnhof leave through the gate you came in by and turn right: the lake with its bridge is 2 minutes south. Stand on the bridge or in the park on the eastern bank.',
      },
      unlockQuestion: {
        question: { el: 'Ο γρίφος μιλάει για «λευκά πουλιά με μακρύ λαιμό». Ποια πουλιά είναι;', en: 'The riddle talks about “white birds with long necks”. Which birds are they?' },
        options: {
          el: ['Γλάροι', 'Πάπιες', 'Πελαργοί', 'Κύκνοι'],
          en: ['Seagulls', 'Ducks', 'Storks', 'Swans'],
        },
        correct: 3,
        explanation: {
          el: 'Οι κύκνοι είναι το σύμβολο της Μπριζ. Η πόλη τους φροντίζει εδώ και περισσότερα από 500 χρόνια, και θα τους δεις σε όλα τα κανάλια.',
          en: 'Swans are the symbol of Bruges. The city has looked after them for more than 500 years, and you will see them on all the canals.',
        },
      },
      onSite: {
        question: { el: 'Βρες έναν κύκνο και κοίταξε καλά το ράμφος του. Τι χρώμα έχει;', en: 'Find a swan and look carefully at its beak. What colour is it?' },
        options: {
          el: ['Κίτρινο', 'Πορτοκαλί με ένα μαύρο εξόγκωμα στη βάση', 'Άσπρο', 'Πράσινο'],
          en: ['Yellow', 'Orange with a black bump at the base', 'White', 'Green'],
        },
        correct: 1,
        explanation: {
          el: 'Οι κύκνοι της Μπριζ είναι βουβόκυκνοι: έχουν πορτοκαλί ράμφος με ένα μαύρο εξόγκωμα κοντά στα μάτια. Λέγονται «βουβοί» γιατί σπάνια βγάζουν ήχους, αλλά μπορούν να σφυρίξουν αν θυμώσουν, οπότε μην τους πλησιάζεις πολύ!',
          en: 'The swans of Bruges are mute swans: they have an orange beak with a black bump near the eyes. They are called “mute” because they rarely make sounds, but they can hiss if annoyed, so do not get too close!',
        },
      },
      story: {
        el: 'Αυτή η ήσυχη λίμνη ήταν κάποτε το λιμάνι της πόλης! Εδώ έδεναν τα ποταμόπλοια που έρχονταν από τη Γάνδη, και το μικρό πέτρινο σπίτι με τον πύργο στην άκρη της, το Sashuis (Σάσχαους), ρύθμιζε από το 1519 το νερό με ένα φράγμα. Το όνομα Minnewater σημαίνει «Νερό της Αγάπης», και ένας θρύλος λέει για την Minna, ένα κορίτσι που το έσκασε για να μην παντρευτεί κάποιον που δεν αγαπούσε, και τον Stromberg που την αναζητούσε. Οι κύκνοι έχουν τη δική τους ιστορία: το 1488 οι κάτοικοι της Μπριζ φυλάκισαν τον Μαξιμιλιανό, που αργότερα έγινε αυτοκράτορας, και ο σύμβουλός του, ο Pieter Lanchals, που το όνομά του σημαίνει «μακρύς λαιμός», δεν επέζησε από την εξέγερση. Όταν ο Μαξιμιλιανός ελευθερώθηκε, διέταξε την πόλη να κρατάει για πάντα κύκνους, πουλιά με μακρύ λαιμό, για να τον θυμούνται. Έτσι λένε, και η πόλη ακόμη τους φροντίζει.',
        en: 'This quiet lake was once the port of the city! River boats coming from Ghent tied up here, and the little stone house with the tower at its end, the Sashuis, has controlled the water with a lock since 1519. The name Minnewater means “Water of Love”, and a legend tells of Minna, a girl who ran away so she would not have to marry someone she did not love, and of Stromberg, who searched for her. The swans have their own story: in 1488 the people of Bruges imprisoned Maximilian, who later became emperor, and his adviser Pieter Lanchals, whose name means “long neck”, did not survive the uprising. When Maximilian was freed, he ordered the city to keep swans, birds with long necks, for ever. So the story goes, and the city still looks after them.',
      },
      didYouKnow: {
        el: 'Το οικόσημο της οικογένειας Lanchals είχε πράγματι έναν κύκνο, γι\' αυτό ο θρύλος έδεσε τόσο καλά. Οι ιστορικοί όμως σημειώνουν ότι η πόλη εξέτρεφε κύκνους ήδη πριν από το 1488· η διαταγή του Μαξιμιλιανού είναι πιθανότατα μια όμορφη ιστορία που προστέθηκε αργότερα. Στην απέναντι όχθη στέκεται ο Poertoren, ο «Πύργος της Πυρίτιδας» του 1398, όπου φυλασσόταν το μπαρούτι της πόλης.',
        en: 'The Lanchals family coat of arms really did feature a swan, which is why the legend stuck so well. Historians note, however, that the city kept swans already before 1488; Maximilian\'s order is most likely a lovely story added later. On the opposite bank stands the Poertoren, the “Powder Tower” of 1398, where the city\'s gunpowder was stored.',
      },
      quiz: [
        {
          q: { el: 'Τι ήταν παλιά αυτή η λίμνη;', en: 'What was this lake long ago?' },
          options: {
            el: ['Το λιμάνι της πόλης', 'Μια πισίνα', 'Ένα χωράφι', 'Μια παγοδρομία'],
            en: ['The port of the city', 'A swimming pool', 'A field', 'An ice rink'],
          },
          correct: 0,
          explanation: {
            el: 'Εδώ έδεναν τα ποταμόπλοια που έρχονταν από τη Γάνδη. Η λίμνη ήταν το λιμάνι της Μπριζ.',
            en: 'River boats from Ghent tied up here. The lake was the port of Bruges.',
          },
        },
        {
          q: { el: 'Τι σημαίνει το όνομα Lanchals;', en: 'What does the name Lanchals mean?' },
          options: {
            el: ['Μεγάλο καράβι', 'Χρυσό σπαθί', 'Άσπρο φτερό', 'Μακρύς λαιμός'],
            en: ['Big ship', 'Golden sword', 'White feather', 'Long neck'],
          },
          correct: 3,
          explanation: {
            el: 'Lanchals σημαίνει «μακρύς λαιμός», γι\' αυτό ο Μαξιμιλιανός διάλεξε τους κύκνους, πουλιά με μακρύ λαιμό, για να τον θυμίζουν.',
            en: 'Lanchals means “long neck”, which is why Maximilian chose swans, birds with long necks, to remind people of him.',
          },
        },
        {
          q: { el: 'Από πότε δουλεύει το μικρό σπίτι με το φράγμα στην άκρη της λίμνης;', en: 'Since when has the little lock house at the end of the lake been working?' },
          options: {
            el: ['Από πέρυσι', 'Από το 1519', 'Από το 1902', 'Από το 2000'],
            en: ['Since last year', 'Since 1519', 'Since 1902', 'Since 2000'],
          },
          correct: 1,
          explanation: {
            el: 'Το Sashuis ρυθμίζει το νερό της λίμνης από το 1519, δηλαδή εδώ και περισσότερα από 500 χρόνια.',
            en: 'The Sashuis has controlled the water of the lake since 1519, more than 500 years ago.',
          },
        },
      ],
    },

    // ── 9. Jan van Eyckplein ───────────────────────────────────────────────────
    {
      id: 'jan-van-eyck-square',
      name: { el: 'Jan van Eyckplein', en: 'Jan van Eyckplein' },
      emoji: '🎨',
      lat: 51.2112,
      lng: 3.2270,
      radiusM: 40,
      riddle: {
        el: 'Ένας ζωγράφος από πέτρα στέκεται δίπλα σε ένα κανάλι όπου κάποτε έδεναν καράβια από όλη την Ευρώπη. Πίσω του, ένας λεπτός πύργος κρύβει σε μια γωνιά του τον πιο μικρό και πιο παλιό κάτοικο της πόλης.',
        en: 'A painter made of stone stands beside a canal where ships from all over Europe once tied up. Behind him, a slim tower hides in one corner the smallest and oldest inhabitant of the city.',
      },
      parentHint: {
        el: 'Είναι η Jan van Eyckplein (Γιαν βαν Άικπλαϊν, η Πλατεία του Jan van Eyck). Είναι βόρεια του κέντρου: από το Minnewater γυρίστε στη Markt μέσω της Katelijnestraat (15 λεπτά) και συνεχίστε βόρεια από τη Philipstockstraat και τη Sint-Jansplein ως το κανάλι, άλλα 8 λεπτά. Ιδανικό μετά από ένα διάλειμμα για βάφλα.',
        en: 'It is the Jan van Eyckplein, Jan van Eyck Square. It lies north of the centre: from the Minnewater return to the Markt via Katelijnestraat (15 minutes) and continue north along Philipstockstraat and Sint-Jansplein to the canal, another 8 minutes. Ideal after a waffle break.',
      },
      unlockQuestion: {
        question: { el: 'Ο Jan van Eyck έγινε διάσημος γιατί τελειοποίησε έναν τρόπο ζωγραφικής. Ποιον;', en: 'Jan van Eyck became famous for perfecting a way of painting. Which one?' },
        options: {
          el: ['Τη ζωγραφική με σπρέι', 'Τη ζωγραφική με χρώματα από λάδι', 'Τη ζωγραφική με τα δάχτυλα', 'Τη ζωγραφική με σοκολάτα'],
          en: ['Spray painting', 'Painting with oil colours', 'Finger painting', 'Painting with chocolate'],
        },
        correct: 1,
        explanation: {
          el: 'Ο Jan van Eyck ανακάτευε τα χρώματά του με λάδι αντί για αυγό. Έτσι στέγνωναν αργά και μπορούσε να ζωγραφίζει κάθε λεπτομέρεια: γυαλιστερά κοσμήματα, γούνες, ακόμη και το φως σε έναν καθρέφτη.',
          en: 'Jan van Eyck mixed his colours with oil instead of egg. They dried slowly, so he could paint every detail: shiny jewels, furs, even the light in a mirror.',
        },
      },
      onSite: {
        question: { el: 'Βρες τον πύργο με τη λεπτή, ψηλή κορυφή στη γωνία της πλατείας. Σε μια μικρή κόγχη στη γωνία του στέκεται ένα ζώο. Ποιο;', en: 'Find the tower with the slim, tall top at the corner of the square. In a small niche on its corner stands an animal. Which one?' },
        options: {
          el: ['Ένα λιοντάρι', 'Ένας κύκνος', 'Μια αρκούδα', 'Ένα άλογο'],
          en: ['A lion', 'A swan', 'A bear', 'A horse'],
        },
        correct: 2,
        explanation: {
          el: 'Είναι η μικρή αρκούδα της Μπριζ! Ο θρύλος λέει ότι ο πρώτος κόμης της Φλάνδρας πάλεψε εδώ με μια αρκούδα, και από τότε η αρκούδα είναι το σύμβολο και ο «πιο παλιός κάτοικος» της πόλης. Στις γιορτές οι ντόπιοι τής φοράνε ρούχα!',
          en: 'It is the little bear of Bruges! Legend says that the first Count of Flanders fought a bear here, and since then the bear has been the symbol and the “oldest inhabitant” of the city. On festival days the locals dress it up!',
        },
      },
      story: {
        el: 'Πριν από 600 χρόνια αυτή η πλατεία ήταν το λιμάνι της Μπριζ. Το κανάλι μπροστά σου, η Spiegelrei (Σπίχελράι), γέμιζε βάρκες και μικρά καράβια με εμπορεύματα από την Ιταλία, την Ισπανία, την Αγγλία και τη Βαλτική, φορτωμένα με μαλλί, μετάξι, κρασί και μπαχαρικά. Κάθε καράβι πλήρωνε φόρο στο Tolhuis (Τόλχαους, το Τελωνείο), το κτίριο με τα στολίδια στη γωνία. Ο άντρας του αγάλματος είναι ο Jan van Eyck (Γιαν βαν Άικ), που έζησε εδώ και πέθανε στη Μπριζ το 1441. Ήταν τόσο καλός στο να ζωγραφίζει με χρώματα από λάδι, που οι πίνακές του μοιάζουν με φωτογραφίες: σε έναν από αυτούς ζωγράφισε έναν μικροσκοπικό καθρέφτη στον οποίο καθρεφτίζεται ολόκληρο το δωμάτιο. Ο λεπτός πύργος πίσω του ανήκε στη λέσχη των πλούσιων εμπόρων, και στη γωνία του, σε μια μικρή κόγχη, κατοικεί η αρκούδα, το σύμβολο της πόλης.',
        en: 'Six hundred years ago this square was the port of Bruges. The canal in front of you, the Spiegelrei, was full of boats and small ships with goods from Italy, Spain, England and the Baltic, loaded with wool, silk, wine and spices. Every ship paid a tax at the Tolhuis, the toll house, the decorated building at the corner. The man on the statue is Jan van Eyck, who lived here and died in Bruges in 1441. He was so good at painting with oil colours that his pictures look like photographs: in one of them he painted a tiny mirror in which the whole room is reflected. The slim tower behind him belonged to the club of the rich merchants, and in its corner, in a small niche, lives the bear, the symbol of the city.',
      },
      didYouKnow: {
        el: 'Λίγα βήματα πιο πέρα, στη Vlamingstraat, βρίσκεται το σπίτι της οικογένειας Van der Beurze, μπροστά στο οποίο συναντιούνταν οι έμποροι για να κάνουν συμφωνίες. Από το όνομά τους βγήκε η λέξη «bourse» (χρηματιστήριο) σε πολλές γλώσσες. Ο διάσημος πίνακας του Van Eyck με τον καθρέφτη, το «Πορτρέτο των Arnolfini» του 1434, ζωγραφίστηκε στη Μπριζ και βρίσκεται σήμερα στην Εθνική Πινακοθήκη του Λονδίνου.',
        en: 'A few steps away, in Vlamingstraat, stands the house of the Van der Beurze family, in front of which merchants met to make deals. Their name gave the word “bourse” (stock exchange) to many languages. Van Eyck\'s famous painting with the mirror, the “Arnolfini Portrait” of 1434, was painted in Bruges and now hangs in the National Gallery in London.',
      },
      quiz: [
        {
          q: { el: 'Τι ήταν αυτή η πλατεία πριν από 600 χρόνια;', en: 'What was this square 600 years ago?' },
          options: {
            el: ['Ένα δάσος', 'Ένα γήπεδο', 'Μια αγορά λουλουδιών', 'Το λιμάνι της πόλης'],
            en: ['A forest', 'A sports field', 'A flower market', 'The port of the city'],
          },
          correct: 3,
          explanation: {
            el: 'Στο κανάλι Spiegelrei έδεναν καράβια από όλη την Ευρώπη, φορτωμένα με μαλλί, μετάξι, κρασί και μπαχαρικά.',
            en: 'Ships from all over Europe tied up on the Spiegelrei canal, loaded with wool, silk, wine and spices.',
          },
        },
        {
          q: { el: 'Τι έκαναν τα καράβια στο Tolhuis;', en: 'What did ships do at the Tolhuis?' },
          options: {
            el: ['Πλήρωναν φόρο για τα εμπορεύματά τους', 'Επισκευάζονταν', 'Έπαιρναν ψάρια', 'Άφηναν τους ναύτες να κοιμηθούν'],
            en: ['They paid a tax on their goods', 'They were repaired', 'They took on fish', 'They let the sailors sleep'],
          },
          correct: 0,
          explanation: {
            el: 'Το Tolhuis ήταν το τελωνείο: κάθε καράβι πλήρωνε εκεί φόρο για ό,τι έφερνε στην πόλη.',
            en: 'The Tolhuis was the toll house: every ship paid a tax there on whatever it brought into the city.',
          },
        },
        {
          q: { el: 'Τι ζωγράφισε ο Jan van Eyck σε έναν διάσημο πίνακά του;', en: 'What did Jan van Eyck paint in one of his famous pictures?' },
          options: {
            el: ['Έναν δράκο', 'Έναν ανεμόμυλο', 'Έναν μικροσκοπικό καθρέφτη που καθρεφτίζει όλο το δωμάτιο', 'Έναν κύκνο'],
            en: ['A dragon', 'A windmill', 'A tiny mirror reflecting the whole room', 'A swan'],
          },
          correct: 2,
          explanation: {
            el: 'Στον μικροσκοπικό καθρέφτη φαίνεται ολόκληρο το δωμάτιο, ακόμη και άνθρωποι που στέκονται εκεί που θα στεκόμασταν εμείς. Τόσο προσεκτικά ζωγράφιζε!',
            en: 'The tiny mirror shows the whole room, even people standing where we would stand. That is how carefully he painted!',
          },
        },
      ],
    },

    // ── 10. Sint-Janshuismolen, Kruisvest ──────────────────────────────────────
    {
      id: 'windmills',
      name: { el: 'Sint-Janshuismolen', en: 'Sint-Janshuismolen' },
      emoji: '🌬️',
      lat: 51.2150,
      lng: 3.2367,
      radiusM: 80,
      riddle: {
        el: 'Στην άκρη της πόλης, πάνω σε ένα πράσινο ανάχωμα όπου παλιά στέκονταν τα τείχη, ξύλινοι γίγαντες ανοίγουν τα φτερά τους στον αέρα. Ένας από αυτούς αλέθει ακόμη σιτάρι, όπως πριν από 250 χρόνια.',
        en: 'At the edge of the city, on a green bank where the walls once stood, wooden giants spread their wings in the wind. One of them still grinds grain, just as it did 250 years ago.',
      },
      parentHint: {
        el: 'Είναι ο Sint-Janshuismolen (Σιντ-Γιάνσχαουσμόλεν, ο Μύλος του Αγίου Ιωάννη) στο Kruisvest, την πράσινη ζώνη των παλιών τειχών. Από την Jan van Eyckplein ακολουθήστε το κανάλι ανατολικά (Spinolarei, μετά Sint-Annarei), στρίψτε στη Rolweg και βγείτε στο ανάχωμα, 15 λεπτά. Ο μύλος στέκεται ανάμεσα στη Rolweg και την πύλη Kruispoort.',
        en: 'It is the Sint-Janshuismolen, St John\'s House Mill, on the Kruisvest, the green belt of the old ramparts. From Jan van Eyckplein follow the canal east (Spinolarei, then Sint-Annarei), turn into Rolweg and come out on the bank, 15 minutes. The mill stands between Rolweg and the Kruispoort gate.',
      },
      unlockQuestion: {
        question: { el: 'Γιατί χτίστηκαν οι ανεμόμυλοι πάνω στα παλιά τείχη της πόλης;', en: 'Why were the windmills built on top of the old city walls?' },
        options: {
          el: ['Για να φυλάνε την πόλη από εχθρούς', 'Επειδή εκεί ψηλά φυσάει πιο δυνατά', 'Επειδή είναι πιο όμορφα', 'Για να τους βλέπουν τα καράβια'],
          en: ['To guard the city from enemies', 'Because the wind blows harder up there', 'Because they look prettier there', 'So that ships could see them'],
        },
        correct: 1,
        explanation: {
          el: 'Ένας ανεμόμυλος χρειάζεται αέρα, και το ανάχωμα των τειχών ήταν το πιο ψηλό μέρος σε μια επίπεδη χώρα. Τα σπίτια της πόλης δεν έκοβαν τον αέρα εκεί πάνω, και τα φτερά γύριζαν πιο γρήγορα.',
          en: 'A windmill needs wind, and the bank of the ramparts was the highest spot in a flat country. Up there the houses of the city did not block the wind, and the sails turned faster.',
        },
      },
      onSite: {
        question: { el: 'Κοίταξε τον μύλο. Πόσα φτερά έχει;', en: 'Look at the mill. How many sails does it have?' },
        options: {
          el: ['Δύο', 'Τρία', 'Τέσσερα', 'Έξι'],
          en: ['Two', 'Three', 'Four', 'Six'],
        },
        correct: 2,
        explanation: {
          el: 'Τέσσερα ξύλινα φτερά σε σχήμα σταυρού. Ο μυλωνάς άπλωνε πάνω τους πανιά για να πιάνουν περισσότερο αέρα, και μπορούσε να γυρίσει ολόκληρο το ξύλινο σώμα του μύλου γύρω από έναν χοντρό στύλο, ώστε τα φτερά να κοιτάζουν πάντα προς τον άνεμο.',
          en: 'Four wooden sails in the shape of a cross. The miller spread cloth over them to catch more wind, and he could turn the whole wooden body of the mill around a thick post, so that the sails always faced the wind.',
        },
      },
      story: {
        el: 'Πριν από 250 χρόνια, γύρω από τη Μπριζ στέκονταν περισσότεροι από είκοσι ανεμόμυλοι, πάνω στο ανάχωμα των τειχών, όπου ο αέρας φυσάει πιο δυνατά. Άλεθαν σιτάρι για το ψωμί όλης της πόλης. Σήμερα έχουν μείνει τέσσερις σε αυτή τη γραμμή, και ο Sint-Janshuismolen είναι ο πιο ξεχωριστός: χτίστηκε το 1770, δεν μετακινήθηκε ποτέ, και αλέθει ακόμη αλεύρι όταν φυσάει! Είναι «μύλος με στύλο»: ολόκληρο το ξύλινο σπίτι του γυρίζει γύρω από έναν τεράστιο κορμό δέντρου, για να στρέφει τα φτερά του προς τον άνεμο. Το πράσινο ανάχωμα λέγεται Kruisvest, και εδώ στέκονταν τα τείχη που προστάτευαν την πόλη. Λίγο πιο κάτω φυλάει ακόμη την είσοδο η Kruispoort (Κρόισπορτ), μια πύλη με δύο στρογγυλούς πύργους, από τις τέσσερις που έχουν απομείνει.',
        en: 'Two hundred and fifty years ago, more than twenty windmills stood around Bruges on the bank of the city walls, where the wind blows harder. They ground wheat for the bread of the whole city. Today four are left along this stretch, and the Sint-Janshuismolen is the most special: it was built in 1770, it has never been moved, and it still grinds flour when the wind blows! It is a post mill: its whole wooden house turns around a giant tree trunk, so that its sails face the wind. The green bank is called the Kruisvest, and the walls that protected the city once stood here. A little further along, the Kruispoort, a gate with two round towers, still guards the entrance, one of only four gates that remain.',
      },
      didYouKnow: {
        el: 'Ο Sint-Janshuismolen ανήκει στην πόλη από το 1914 και λειτουργεί ως μουσείο, με τον μυλωνά να αλέθει κανονικά τις καλοκαιρινές μέρες που υπάρχει άνεμος. Από τους τέσσερις μύλους του Kruisvest, οι άλλοι τρεις μεταφέρθηκαν εδώ από άλλα μέρη της Φλάνδρας τον 20ό αιώνα. Οι ντόπιοι εξακολουθούν να αποκαλούν τον μύλο απλώς «Sint-Jans», και το ανάχωμα είναι σήμερα αγαπημένος περίπατος.',
        en: 'The Sint-Janshuismolen has belonged to the city since 1914 and works as a museum, with the miller grinding for real on windy summer days. Of the four mills on the Kruisvest, the other three were moved here from elsewhere in Flanders during the 20th century. Locals still just call the mill “Sint-Jans”, and the bank is a favourite place for a walk today.',
      },
      quiz: [
        {
          q: { el: 'Πότε χτίστηκε ο Sint-Janshuismolen;', en: 'When was the Sint-Janshuismolen built?' },
          options: {
            el: ['Το 1302', 'Πέρυσι', 'Το 1770', 'Το 1914'],
            en: ['In 1302', 'Last year', 'In 1770', 'In 1914'],
          },
          correct: 2,
          explanation: {
            el: 'Ο μύλος χτίστηκε το 1770, πριν από περίπου 250 χρόνια, και από τότε στέκεται στο ίδιο ακριβώς σημείο.',
            en: 'The mill was built in 1770, about 250 years ago, and it has stood on exactly the same spot ever since.',
          },
        },
        {
          q: { el: 'Πώς στρέφει ο μύλος τα φτερά του προς τον άνεμο;', en: 'How does the mill turn its sails towards the wind?' },
          options: {
            el: ['Με μια μηχανή βενζίνης', 'Ολόκληρο το ξύλινο σπίτι του γυρίζει γύρω από έναν στύλο', 'Δεν στρέφεται, μένει πάντα ίδιος', 'Τον σπρώχνουν τα άλογα'],
            en: ['With a petrol engine', 'Its whole wooden house turns around a post', 'It does not turn, it always stays the same', 'Horses push it'],
          },
          correct: 1,
          explanation: {
            el: 'Είναι μύλος με στύλο: όλο το ξύλινο σπίτι γυρίζει γύρω από έναν τεράστιο κορμό, ώστε τα φτερά να κοιτάζουν πάντα τον άνεμο.',
            en: 'It is a post mill: the whole wooden house turns around a giant trunk, so the sails always face the wind.',
          },
        },
        {
          q: { el: 'Πόσοι ανεμόμυλοι έχουν μείνει σε αυτή τη γραμμή σήμερα;', en: 'How many windmills are left along this stretch today?' },
          options: {
            el: ['Τέσσερις', 'Είκοσι', 'Ένας', 'Δέκα'],
            en: ['Four', 'Twenty', 'One', 'Ten'],
          },
          correct: 0,
          explanation: {
            el: 'Από τους περισσότερους από είκοσι μύλους της παλιάς εποχής έχουν μείνει τέσσερις, πάνω στο ανάχωμα Kruisvest.',
            en: 'Of the more than twenty mills of the old days, four remain, on the Kruisvest bank.',
          },
        },
      ],
    },
  ],
};
