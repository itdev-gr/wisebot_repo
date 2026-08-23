/**
 * Ε' Δημοτικού · Ιστορία · Ζωή στο Βυζάντιο
 * ==========================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a child of 10–11. Order, from easiest to hardest:
 *   1–3   houses and the capital (Constantinople), family life at home
 *   4–6   food and clothing (bread, olives, wine, silk, the purple of the emperor)
 *   7–9   school and the church (tablets, teachers, Hagia Sophia, mosaics)
 *   10–13 markets, crafts, coins and trade (the gold nomisma, the Silk Road)
 *   14–16 the Hippodrome: chariot races, Greens and Blues, the Kathisma
 *   17–18 hymns and Romanos the Melodist, one review question
 */
import type { QuizQuestion } from '../../../types';

export const GRADE5_HISTORY_BYZANTINE_DAILY_LIFE: QuizQuestion[] = [
  // ── 1–3: houses and the city ───────────────────────────────────────────────
  {
    q: { el: 'Ποια πόλη ήταν η πρωτεύουσα του Βυζαντίου;', en: 'Which city was the capital of Byzantium?' },
    options: { el: ['Η Αθήνα', 'Η Κωνσταντινούπολη', 'Η Ρώμη', 'Η Θεσσαλονίκη'], en: ['Athens', 'Constantinople', 'Rome', 'Thessaloniki'] },
    correct: 1,
    explanation: {
      el: 'Η Κωνσταντινούπολη ήταν η «Βασιλεύουσα», η πιο μεγάλη και πλούσια πόλη του Βυζαντίου. Εκεί ζούσε ο αυτοκράτορας.',
      en: 'Constantinople was the “Queen of Cities”, the biggest and richest city of Byzantium. The emperor lived there.',
    },
  },
  {
    q: { el: 'Πώς ήταν τα σπίτια των απλών ανθρώπων στο Βυζάντιο;', en: 'What were the houses of ordinary people like in Byzantium?' },
    options: { el: ['Μικρά, με λίγα δωμάτια και μια αυλή', 'Τεράστια παλάτια με χρυσές σκάλες', 'Σκηνές που άλλαζαν θέση κάθε μέρα', 'Σπίτια από γυαλί και σίδερο'], en: ['Small, with few rooms and a yard', 'Huge palaces with golden stairs', 'Tents that moved every day', 'Houses made of glass and iron'] },
    correct: 0,
    explanation: {
      el: 'Οι απλοί άνθρωποι ζούσαν σε μικρά σπίτια από πέτρα ή πλίνθους, με λίγα δωμάτια και συχνά μια μικρή αυλή. Τα παλάτια ήταν μόνο για τους πλούσιους και τον αυτοκράτορα.',
      en: 'Ordinary people lived in small houses of stone or brick, with few rooms and often a little yard. Palaces were only for the rich and the emperor.',
    },
  },
  {
    q: { el: 'Το βράδυ, πώς φώτιζε η οικογένεια της Ελένης το σπίτι της στο Βυζάντιο;', en: 'At night, how did Eleni\'s family light their home in Byzantium?' },
    options: { el: ['Με ηλεκτρικές λάμπες', 'Με φακούς', 'Με λυχνάρια που έκαιγαν λάδι', 'Με φωτιστικά μπαταρίας'], en: ['With electric lamps', 'With flashlights', 'With little oil lamps', 'With battery lights'] },
    correct: 2,
    explanation: {
      el: 'Δεν υπήρχε ηλεκτρικό ρεύμα. Τα σπίτια φωτίζονταν με λυχνάρια που έκαιγαν λάδι και με κεριά.',
      en: 'There was no electricity. Homes were lit with small lamps that burned oil, and with candles.',
    },
  },

  // ── 4–6: food and clothing ────────────────────────────────────────────────
  {
    q: { el: 'Ποιο ήταν το πιο βασικό φαγητό στο τραπέζι μιας βυζαντινής οικογένειας;', en: 'What was the most basic food on a Byzantine family\'s table?' },
    options: { el: ['Το ψωμί', 'Οι πατάτες', 'Η σοκολάτα', 'Οι ντομάτες'], en: ['Bread', 'Potatoes', 'Chocolate', 'Tomatoes'] },
    correct: 0,
    explanation: {
      el: 'Το ψωμί ήταν το κύριο φαγητό, μαζί με ελιές, όσπρια, λαχανικά, τυρί και ψάρι. Πατάτες, ντομάτες και σοκολάτα ήρθαν στην Ευρώπη πολλούς αιώνες αργότερα.',
      en: 'Bread was the main food, with olives, beans, vegetables, cheese and fish. Potatoes, tomatoes and chocolate came to Europe many centuries later.',
    },
  },
  {
    q: { el: 'Ποιο πολύτιμο ύφασμα φορούσαν οι πλούσιοι Βυζαντινοί;', en: 'Which precious fabric did rich Byzantines wear?' },
    options: { el: ['Το νάιλον', 'Το μετάξι', 'Το τζιν', 'Τη φανέλα'], en: ['Nylon', 'Silk', 'Denim', 'Fleece'] },
    correct: 1,
    explanation: {
      el: 'Το μετάξι ήταν το πιο ακριβό ύφασμα. Οι Βυζαντινοί έμαθαν να το φτιάχνουν μόνοι τους από τους μεταξοσκώληκες και το πουλούσαν σε όλο τον κόσμο.',
      en: 'Silk was the most expensive fabric. The Byzantines learned to make it themselves from silkworms and sold it all over the world.',
    },
  },
  {
    q: { el: 'Ποιο χρώμα ρούχων ήταν μόνο για τον αυτοκράτορα;', en: 'Which colour of clothing was only for the emperor?' },
    options: { el: ['Το πράσινο', 'Το άσπρο', 'Το πορφυρό (βαθύ κόκκινο-μοβ)', 'Το καφέ'], en: ['Green', 'White', 'Purple (deep red-violet)', 'Brown'] },
    correct: 2,
    explanation: {
      el: 'Το πορφυρό χρώμα ήταν το χρώμα του αυτοκράτορα. Η βαφή του ήταν πανάκριβη και απαγορευόταν στους απλούς ανθρώπους.',
      en: 'Purple was the emperor\'s colour. Its dye was extremely expensive, and ordinary people were not allowed to wear it.',
    },
  },

  // ── 7–9: school and church ────────────────────────────────────────────────
  {
    q: { el: 'Ο Νίκος πηγαίνει σχολείο στο Βυζάντιο. Πάνω σε τι έγραφε τα πρώτα του γράμματα;', en: 'Nikos goes to school in Byzantium. What did he write his first letters on?' },
    options: { el: ['Σε τάμπλετ με οθόνη', 'Σε πλάκα με κερί, με ένα μυτερό εργαλείο', 'Σε τετράδιο με στυλό', 'Σε πίνακα με μαρκαδόρο'], en: ['On a tablet with a screen', 'On a wax tablet, with a pointed tool', 'In a notebook with a pen', 'On a whiteboard with a marker'] },
    correct: 1,
    explanation: {
      el: 'Τα παιδιά έγραφαν σε ξύλινες πλάκες με κερί, χαράζοντας τα γράμματα με ένα μυτερό εργαλείο. Τα μεγαλύτερα παιδιά έγραφαν σε περγαμηνή με πένα και μελάνι.',
      en: 'Children wrote on wooden tablets covered in wax, scratching the letters with a pointed tool. Older children wrote on parchment with pen and ink.',
    },
  },
  {
    q: { el: 'Τι μάθαιναν πρώτα τα παιδιά στο βυζαντινό σχολείο;', en: 'What did children learn first at a Byzantine school?' },
    options: { el: ['Ανάγνωση, γραφή και αριθμητική', 'Οδήγηση άρματος', 'Πλοήγηση πλοίου', 'Ιππασία και κολύμπι'], en: ['Reading, writing and arithmetic', 'Chariot driving', 'Sailing a ship', 'Horse riding and swimming'] },
    correct: 0,
    explanation: {
      el: 'Στο πρώτο σχολείο τα παιδιά μάθαιναν να διαβάζουν, να γράφουν και να μετρούν. Έπειτα διάβαζαν Όμηρο και άλλους αρχαίους συγγραφείς.',
      en: 'At the first school children learned to read, write and count. Later they read Homer and other ancient writers.',
    },
  },
  {
    q: { el: 'Ποια ήταν η πιο ξακουστή εκκλησία της Κωνσταντινούπολης;', en: 'Which was the most famous church of Constantinople?' },
    options: { el: ['Ο Παρθενώνας', 'Η Αγία Σοφία', 'Ο Άγιος Δημήτριος', 'Ο Άγιος Πέτρος'], en: ['The Parthenon', 'Hagia Sophia', 'Saint Demetrius', 'Saint Peter\'s'] },
    correct: 1,
    explanation: {
      el: 'Η Αγία Σοφία, με τον τεράστιο τρούλο της, ήταν το καμάρι της Κωνσταντινούπολης. Την έχτισε ο αυτοκράτορας Ιουστινιανός.',
      en: 'Hagia Sophia, with its huge dome, was the pride of Constantinople. It was built by the emperor Justinian.',
    },
  },

  // ── 10–13: markets, crafts, coins and trade ───────────────────────────────
  {
    q: { el: 'Με τι ήταν στολισμένοι οι τοίχοι των βυζαντινών εκκλησιών;', en: 'What decorated the walls of Byzantine churches?' },
    options: { el: ['Με ψηφιδωτά και τοιχογραφίες', 'Με αφίσες', 'Με καθρέφτες', 'Με ταπετσαρία'], en: ['With mosaics and wall paintings', 'With posters', 'With mirrors', 'With wallpaper'] },
    correct: 0,
    explanation: {
      el: 'Οι τεχνίτες έφτιαχναν ψηφιδωτά από χιλιάδες μικρές χρωματιστές πέτρες και γυαλάκια. Πολλά λάμπουν ακόμα και σήμερα.',
      en: 'Craftsmen made mosaics from thousands of tiny coloured stones and pieces of glass. Many still shine today.',
    },
  },
  {
    q: { el: 'Ο Γιώργος πηγαίνει στην αγορά της Κωνσταντινούπολης. Τι θα έβρισκε εκεί;', en: 'Giorgos goes to the market of Constantinople. What would he find there?' },
    options: { el: ['Μόνο φρούτα και λαχανικά', 'Εργαστήρια και μαγαζιά με υφάσματα, μπαχαρικά, κοσμήματα και τρόφιμα', 'Μόνο ζώα', 'Ένα μεγάλο σούπερ μάρκετ'], en: ['Only fruit and vegetables', 'Workshops and shops with fabrics, spices, jewellery and food', 'Only animals', 'A big supermarket'] },
    correct: 1,
    explanation: {
      el: 'Η αγορά ήταν γεμάτη εργαστήρια και μαγαζιά. Κάθε δρόμος είχε τη δική του τέχνη: υφαντάδες, χρυσοχόοι, φούρναρηδες, έμποροι μπαχαρικών.',
      en: 'The market was full of workshops and shops. Each street had its own craft: weavers, goldsmiths, bakers, spice merchants.',
    },
  },
  {
    q: { el: 'Πώς λεγόταν το χρυσό νόμισμα του Βυζαντίου;', en: 'What was the gold coin of Byzantium called?' },
    options: { el: ['Δραχμή', 'Ευρώ', 'Νόμισμα (σόλιδος)', 'Δηνάριο'], en: ['Drachma', 'Euro', 'Nomisma (solidus)', 'Denarius'] },
    correct: 2,
    explanation: {
      el: 'Το χρυσό «νόμισμα» (στα λατινικά σόλιδος) ήταν τόσο καθαρό και σταθερό που το δέχονταν έμποροι σε όλο τον γνωστό κόσμο.',
      en: 'The gold “nomisma” (solidus in Latin) was so pure and reliable that merchants accepted it all over the known world.',
    },
  },
  {
    q: { el: 'Γιατί η Κωνσταντινούπολη έγινε τόσο σπουδαίο κέντρο εμπορίου;', en: 'Why did Constantinople become such an important trading centre?' },
    options: { el: ['Γιατί είχε τα περισσότερα χωράφια', 'Γιατί βρισκόταν ανάμεσα σε Ευρώπη και Ασία, πάνω στους θαλάσσιους δρόμους', 'Γιατί είχε το πιο ζεστό κλίμα', 'Γιατί εκεί έβγαινε χρυσός από τη γη'], en: ['Because it had the most fields', 'Because it stood between Europe and Asia, on the sea routes', 'Because it had the warmest climate', 'Because gold was dug from the ground there'] },
    correct: 1,
    explanation: {
      el: 'Η πόλη ήταν χτισμένη στο σταυροδρόμι Ευρώπης και Ασίας, ανάμεσα σε δύο θάλασσες. Από εκεί περνούσαν πλοία και καραβάνια με μετάξι, μπαχαρικά και σιτάρι.',
      en: 'The city stood at the crossroads of Europe and Asia, between two seas. Ships and caravans with silk, spices and wheat passed through it.',
    },
  },

  // ── 14–16: the Hippodrome ─────────────────────────────────────────────────
  {
    q: { el: 'Ποιο ήταν το πιο αγαπημένο θέαμα των Βυζαντινών στον Ιππόδρομο;', en: 'What was the Byzantines\' favourite show at the Hippodrome?' },
    options: { el: ['Οι αρματοδρομίες', 'Το ποδόσφαιρο', 'Οι ταυρομαχίες', 'Οι αγώνες κολύμβησης'], en: ['Chariot races', 'Football', 'Bullfights', 'Swimming races'] },
    correct: 0,
    explanation: {
      el: 'Στον Ιππόδρομο έτρεχαν άρματα με τέσσερα άλογα. Χιλιάδες θεατές φώναζαν και χειροκροτούσαν τους αγαπημένους τους ηνίοχους.',
      en: 'At the Hippodrome chariots pulled by four horses raced. Thousands of spectators shouted and cheered for their favourite charioteers.',
    },
  },
  {
    q: { el: 'Πώς λέγονταν οι δύο μεγάλες ομάδες οπαδών του Ιπποδρόμου;', en: 'What were the two big fan teams of the Hippodrome called?' },
    options: { el: ['Κόκκινοι και Κίτρινοι', 'Λευκοί και Μαύροι', 'Πράσινοι και Βένετοι (Γαλάζιοι)', 'Χρυσοί και Ασημένιοι'], en: ['Reds and Yellows', 'Whites and Blacks', 'Greens and Blues', 'Golds and Silvers'] },
    correct: 2,
    explanation: {
      el: 'Οι Πράσινοι και οι Βένετοι (Γαλάζιοι) ήταν οι δύο μεγάλοι «δήμοι». Ο καθένας είχε τα χρώματά του, τα άρματά του και φανατικούς οπαδούς, σαν τις ομάδες σήμερα.',
      en: 'The Greens and the Blues were the two great “factions”. Each had its colours, its chariots and devoted fans, like sports teams today.',
    },
  },
  {
    q: { el: 'Από πού παρακολουθούσε ο αυτοκράτορας τους αγώνες στον Ιππόδρομο;', en: 'From where did the emperor watch the games at the Hippodrome?' },
    options: { el: ['Από τη μέση του στίβου', 'Από το Κάθισμα, το ειδικό θεωρείο που ένωνε τον Ιππόδρομο με το παλάτι', 'Από την πιο ψηλή κερκίδα μαζί με τον λαό', 'Από ένα άρμα που έτρεχε κι αυτό'], en: ['From the middle of the track', 'From the Kathisma, a special box that connected the Hippodrome to the palace', 'From the highest stand, with the people', 'From a chariot that was racing too'] },
    correct: 1,
    explanation: {
      el: 'Ο αυτοκράτορας καθόταν στο Κάθισμα, ένα θεωρείο που είχε δικό του πέρασμα από το παλάτι. Εκεί ο λαός τον έβλεπε και του φώναζε τα παράπονά του.',
      en: 'The emperor sat in the Kathisma, a box with its own passage from the palace. There the people could see him and shout their complaints to him.',
    },
  },

  // ── 17–18: hymns and review ───────────────────────────────────────────────
  {
    q: { el: 'Ποιος ήταν ο Ρωμανός ο Μελωδός;', en: 'Who was Romanos the Melodist?' },
    options: { el: ['Ένας διάσημος ηνίοχος', 'Ένας αυτοκράτορας', 'Ένας σπουδαίος ποιητής ύμνων της Εκκλησίας', 'Ένας αρχιτέκτονας της Αγίας Σοφίας'], en: ['A famous charioteer', 'An emperor', 'A great poet of church hymns', 'An architect of Hagia Sophia'] },
    correct: 2,
    explanation: {
      el: 'Ο Ρωμανός ο Μελωδός έγραψε εκατοντάδες ύμνους που ψάλλονταν στις εκκλησίες. Ο πιο γνωστός είναι ο ύμνος των Χριστουγέννων «Η Παρθένος σήμερον».',
      en: 'Romanos the Melodist wrote hundreds of hymns that were sung in churches. His best-known one is the Christmas hymn “Today the Virgin”.',
    },
  },
  {
    q: { el: 'Η Μαρία περιγράφει μια μέρα στο Βυζάντιο. Ποια φράση ΔΕΝ ταιριάζει στην εποχή;', en: 'Maria describes a day in Byzantium. Which sentence does NOT fit the period?' },
    options: { el: ['«Έφαγα ψωμί με ελιές και τυρί.»', '«Άκουσα ύμνους στην εκκλησία.»', '«Είδα αρματοδρομίες στον Ιππόδρομο.»', '«Αγόρασα μια ντομάτα από το σούπερ μάρκετ.»'], en: ['“I ate bread with olives and cheese.”', '“I heard hymns at church.”', '“I saw chariot races at the Hippodrome.”', '“I bought a tomato from the supermarket.”'] },
    correct: 3,
    explanation: {
      el: 'Στο Βυζάντιο δεν υπήρχαν ούτε ντομάτες ούτε σούπερ μάρκετ. Οι ντομάτες ήρθαν από την Αμερική πολλούς αιώνες αργότερα, και τα ψώνια γίνονταν στην αγορά.',
      en: 'In Byzantium there were no tomatoes and no supermarkets. Tomatoes came from America many centuries later, and shopping was done at the market.',
    },
  },
];
