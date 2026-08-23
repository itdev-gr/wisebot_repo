/**
 * Β' Δημοτικού · Γλώσσα · Κατανόηση Κειμένου
 * ==========================================
 * Original short texts (2–4 sentences each, inside the stem) for a child of 7–8.
 * Nothing is taken from school textbooks — curriculum topics only.
 *
 * What the unit covers, in the order a Β' class meets it:
 *   1–3   short stories: who, where, what (find the answer in the text)
 *   4–6   letters: who receives it, what it says, who wrote it
 *   7–9   recipes: ingredients, what comes first, small quantities
 *   10–12 invitations: day, place, what to bring
 *   13–15 main idea, a fitting title, the characters
 *   16–18 sequence of events and simple inference (weather, feelings)
 */
import type { QuizQuestion } from '../../../types';

export const GRADE2_GREEK_READING: QuizQuestion[] = [
  // ── 1–3: short stories ──────────────────────────────────────────────────────
  {
    q: {
      el: '«Ο Νίκος πήγε στο πάρκο με τον σκύλο του. Έπαιξαν με μια μπάλα.» Ποιος πήγε στο πάρκο;',
      en: '“Nikos went to the park with his dog. They played with a ball.” Who went to the park?',
    },
    options: { el: ['Ο Νίκος', 'Η Μαρία', 'Ο παππούς', 'Η δασκάλα'], en: ['Nikos', 'Maria', 'Grandpa', 'The teacher'] },
    correct: 0,
    explanation: {
      el: 'Το κείμενο λέει «Ο Νίκος πήγε στο πάρκο». Η απάντηση είναι μέσα στην πρώτη πρόταση.',
      en: 'The text says “Nikos went to the park”. The answer is right there in the first sentence.',
    },
  },
  {
    q: {
      el: '«Η Ελένη ζωγραφίζει στην κουζίνα. Ζωγραφίζει έναν μεγάλο κίτρινο ήλιο.» Πού ζωγραφίζει η Ελένη;',
      en: '“Eleni is drawing in the kitchen. She is drawing a big yellow sun.” Where is Eleni drawing?',
    },
    options: { el: ['Στο σχολείο', 'Στο πάρκο', 'Στην κουζίνα', 'Στο δωμάτιό της'], en: ['At school', 'In the park', 'In the kitchen', 'In her room'] },
    correct: 2,
    explanation: {
      el: 'Όταν ρωτάμε «πού;», ψάχνουμε έναν τόπο. Το κείμενο λέει «στην κουζίνα».',
      en: 'When we ask “where?”, we look for a place. The text says “in the kitchen”.',
    },
  },
  {
    q: {
      el: '«Ο Γιώργος έχει μια γάτα. Τη λένε Λουλού. Η Λουλού είναι άσπρη και πολύ παιχνιδιάρα.» Τι χρώμα είναι η Λουλού;',
      en: '“Giorgos has a cat. Her name is Loulou. Loulou is white and very playful.” What colour is Loulou?',
    },
    options: { el: ['Μαύρη', 'Άσπρη', 'Γκρι', 'Πορτοκαλί'], en: ['Black', 'White', 'Grey', 'Orange'] },
    correct: 1,
    explanation: {
      el: 'Η τρίτη πρόταση λέει «Η Λουλού είναι άσπρη». Διαβάζουμε όλο το κείμενο για να βρούμε την απάντηση.',
      en: 'The third sentence says “Loulou is white”. We read the whole text to find the answer.',
    },
  },

  // ── 4–6: letters ────────────────────────────────────────────────────────────
  {
    q: {
      el: '«Αγαπημένη γιαγιά, σ\' ευχαριστώ για το δώρο. Η κούκλα είναι πολύ όμορφη! Φιλιά, Μαρία». Σε ποιον γράφει η Μαρία;',
      en: '“Dear Grandma, thank you for the present. The doll is so pretty! Kisses, Maria”. Who is Maria writing to?',
    },
    options: { el: ['Στη γιαγιά της', 'Στη μαμά της', 'Στη φίλη της', 'Στη δασκάλα της'], en: ['Her grandma', 'Her mum', 'Her friend', 'Her teacher'] },
    correct: 0,
    explanation: {
      el: 'Το γράμμα ξεκινάει με «Αγαπημένη γιαγιά». Η πρώτη λέξη ενός γράμματος μάς λέει σε ποιον γράφουμε.',
      en: 'The letter starts with “Dear Grandma”. The first line of a letter tells us who it is for.',
    },
  },
  {
    q: {
      el: '«Γεια σου, Νίκο! Το καλοκαίρι πήγα στη θάλασσα. Έμαθα να κολυμπάω! Ο φίλος σου, Πέτρος». Τι έμαθε ο Πέτρος;',
      en: '“Hi Nikos! In the summer I went to the seaside. I learned to swim! Your friend, Petros”. What did Petros learn?',
    },
    options: { el: ['Να χορεύει', 'Να ψαρεύει', 'Να διαβάζει', 'Να κολυμπάει'], en: ['To dance', 'To fish', 'To read', 'To swim'] },
    correct: 3,
    explanation: {
      el: 'Ο Πέτρος γράφει «Έμαθα να κολυμπάω!». Το θαυμαστικό δείχνει πόσο χάρηκε.',
      en: 'Petros writes “I learned to swim!”. The exclamation mark shows how happy he was.',
    },
  },
  {
    q: {
      el: '«Αγαπητή κυρία Άννα, σας ευχαριστώ για τα ωραία μαθήματα. Καλές διακοπές! Ο μαθητής σας, Γιώργος». Ποιος έγραψε το γράμμα;',
      en: '“Dear Mrs Anna, thank you for the lovely lessons. Have a nice holiday! Your student, Giorgos”. Who wrote the letter?',
    },
    options: { el: ['Η κυρία Άννα', 'Ο Γιώργος', 'Ο μπαμπάς', 'Ο Νίκος'], en: ['Mrs Anna', 'Giorgos', 'Dad', 'Nikos'] },
    correct: 1,
    explanation: {
      el: 'Στο τέλος του γράμματος βάζουμε το όνομά μας. Εδώ γράφει «Ο μαθητής σας, Γιώργος».',
      en: 'We sign our name at the end of a letter. Here it says “Your student, Giorgos”.',
    },
  },

  // ── 7–9: recipes ────────────────────────────────────────────────────────────
  {
    q: {
      el: '«Τοστ με τυρί: Βάζουμε μια φέτα τυρί ανάμεσα σε δύο φέτες ψωμί. Το ψήνουμε στην τοστιέρα.» Τι χρειαζόμαστε;',
      en: '“Cheese toastie: Put a slice of cheese between two slices of bread. Toast it in the toaster.” What do we need?',
    },
    options: { el: ['Ψωμί και τυρί', 'Ψωμί και μέλι', 'Γάλα και τυρί', 'Ψωμί και ζαμπόν'], en: ['Bread and cheese', 'Bread and honey', 'Milk and cheese', 'Bread and ham'] },
    correct: 0,
    explanation: {
      el: 'Η συνταγή λέει «τυρί» και «ψωμί». Τα υλικά είναι αυτά που χρειαζόμαστε για να φτιάξουμε το φαγητό.',
      en: 'The recipe says “cheese” and “bread”. The ingredients are the things we need to make the food.',
    },
  },
  {
    q: {
      el: '«Φρουτοσαλάτα: Πρώτα πλένουμε τα φρούτα. Μετά τα κόβουμε σε κομματάκια. Στο τέλος βάζουμε λίγο μέλι.» Τι κάνουμε πρώτα;',
      en: '“Fruit salad: First we wash the fruit. Then we cut it into small pieces. At the end we add a little honey.” What do we do first?',
    },
    options: { el: ['Κόβουμε τα φρούτα', 'Βάζουμε μέλι', 'Πλένουμε τα φρούτα', 'Τρώμε τη σαλάτα'], en: ['Cut the fruit', 'Add honey', 'Wash the fruit', 'Eat the salad'] },
    correct: 2,
    explanation: {
      el: 'Η λέξη «Πρώτα» μάς δείχνει το πρώτο βήμα: «Πρώτα πλένουμε τα φρούτα». Μετά έρχονται τα άλλα.',
      en: 'The word “First” shows the first step: “First we wash the fruit”. The other steps come after.',
    },
  },
  {
    q: {
      el: '«Μιλκσέικ μπανάνα: Βάζουμε στο μπλέντερ 1 μπανάνα και 1 ποτήρι γάλα. Χτυπάμε για 1 λεπτό.» Πόσες μπανάνες βάζουμε;',
      en: '“Banana milkshake: Put 1 banana and 1 glass of milk in the blender. Blend for 1 minute.” How many bananas do we use?',
    },
    options: { el: ['Μία', 'Δύο', 'Τρεις', 'Καμία'], en: ['One', 'Two', 'Three', 'None'] },
    correct: 0,
    explanation: {
      el: 'Η συνταγή λέει «1 μπανάνα». Στις συνταγές οι αριθμοί μάς λένε πόσο βάζουμε από κάθε υλικό.',
      en: 'The recipe says “1 banana”. In recipes, the numbers tell us how much of each ingredient to use.',
    },
  },

  // ── 10–12: invitations ──────────────────────────────────────────────────────
  {
    q: {
      el: '«Έλα στο πάρτι μου! Σάββατο, στις 5 το απόγευμα, στο σπίτι μου. Θα έχει τούρτα και παιχνίδια. Ελένη». Ποια μέρα είναι το πάρτι;',
      en: '“Come to my party! Saturday, at 5 in the afternoon, at my house. There will be cake and games. Eleni”. What day is the party?',
    },
    options: { el: ['Κυριακή', 'Σάββατο', 'Παρασκευή', 'Δευτέρα'], en: ['Sunday', 'Saturday', 'Friday', 'Monday'] },
    correct: 1,
    explanation: {
      el: 'Η πρόσκληση λέει «Σάββατο, στις 5 το απόγευμα». Μια πρόσκληση μάς λέει πάντα πότε και πού.',
      en: 'The invitation says “Saturday, at 5 in the afternoon”. An invitation always tells us when and where.',
    },
  },
  {
    q: {
      el: '«Γιορτάζω τα γενέθλιά μου! Σε περιμένω την Κυριακή στις 11 το πρωί, στην παιδική χαρά. Νίκος». Πού θα γίνει η γιορτή;',
      en: '“It\'s my birthday! I\'ll be waiting for you on Sunday at 11 in the morning, at the playground. Nikos”. Where is the party?',
    },
    options: { el: ['Στο σπίτι του Νίκου', 'Στο σχολείο', 'Στη θάλασσα', 'Στην παιδική χαρά'], en: ['At Nikos\'s house', 'At school', 'At the seaside', 'At the playground'] },
    correct: 3,
    explanation: {
      el: 'Το «πού» είναι ο τόπος: «στην παιδική χαρά». Η Κυριακή και οι 11 είναι το «πότε».',
      en: '“Where” is the place: “at the playground”. Sunday and 11 o\'clock are the “when”.',
    },
  },
  {
    q: {
      el: '«Ελάτε στη γιορτή της τάξης μας την Παρασκευή στις 12! Φέρτε ένα φρούτο για να φτιάξουμε φρουτοσαλάτα.» Τι πρέπει να φέρεις;',
      en: '“Come to our class party on Friday at 12! Bring a piece of fruit so we can make a fruit salad.” What should you bring?',
    },
    options: { el: ['Ένα φρούτο', 'Ένα δώρο', 'Μια τούρτα', 'Ένα βιβλίο'], en: ['A piece of fruit', 'A present', 'A cake', 'A book'] },
    correct: 0,
    explanation: {
      el: 'Η πρόσκληση λέει «Φέρτε ένα φρούτο». Διαβάζουμε προσεκτικά τι μας ζητάει.',
      en: 'The invitation says “Bring a piece of fruit”. We read carefully to see what it asks for.',
    },
  },

  // ── 13–15: main idea, title, characters ─────────────────────────────────────
  {
    q: {
      el: '«Ο Γιώργος αγαπάει το ποδόσφαιρο. Παίζει κάθε μέρα στην αυλή. Το βράδυ βλέπει αγώνες με τον μπαμπά του.» Για τι μιλάει το κείμενο;',
      en: '“Giorgos loves football. He plays in the yard every day. In the evening he watches matches with his dad.” What is the text about?',
    },
    options: { el: ['Για τον μπαμπά του Γιώργου', 'Για την αυλή', 'Για το ποδόσφαιρο που αγαπάει ο Γιώργος', 'Για το βράδυ'], en: ['Giorgos\'s dad', 'The yard', 'How much Giorgos loves football', 'The evening'] },
    correct: 2,
    explanation: {
      el: 'Όλες οι προτάσεις μιλούν για το ποδόσφαιρο. Αυτό είναι το κύριο θέμα. Ο μπαμπάς και η αυλή είναι μικρές λεπτομέρειες.',
      en: 'Every sentence is about football. That is the main idea. Dad and the yard are small details.',
    },
  },
  {
    q: {
      el: '«Η Μαρία ξύπνησε νωρίς. Έβαλε την καινούργια της μπλούζα και πήρε την τσάντα της. Σήμερα είναι η πρώτη μέρα στο σχολείο!» Ποιος τίτλος ταιριάζει;',
      en: '“Maria woke up early. She put on her new top and took her bag. Today is the first day of school!” Which title fits best?',
    },
    options: { el: ['«Η πρώτη μέρα στο σχολείο»', '«Η τσάντα της Μαρίας»', '«Το πρωινό»', '«Η καινούργια μπλούζα»'], en: ['“The first day of school”', '“Maria\'s bag”', '“Breakfast”', '“The new top”'] },
    correct: 0,
    explanation: {
      el: 'Ο τίτλος λέει το πιο σημαντικό. Η Μαρία ετοιμάζεται για την πρώτη μέρα στο σχολείο — η τσάντα και η μπλούζα είναι λεπτομέρειες.',
      en: 'A title says the most important thing. Maria is getting ready for the first day of school — the bag and the top are details.',
    },
  },
  {
    q: {
      el: '«Η Ελένη και ο αδερφός της ο Νίκος έφτιαξαν έναν χιονάνθρωπο. Η μαμά τους έφερε ένα καρότο για μύτη.» Ποιοι έφτιαξαν τον χιονάνθρωπο;',
      en: '“Eleni and her brother Nikos built a snowman. Their mum brought a carrot for its nose.” Who built the snowman?',
    },
    options: { el: ['Η Ελένη και η μαμά', 'Η Ελένη και ο Νίκος', 'Ο Νίκος και η μαμά', 'Η Ελένη μόνη της'], en: ['Eleni and Mum', 'Eleni and Nikos', 'Nikos and Mum', 'Eleni by herself'] },
    correct: 1,
    explanation: {
      el: 'Η πρώτη πρόταση λέει «Η Ελένη και ο Νίκος έφτιαξαν». Η μαμά έφερε μόνο το καρότο.',
      en: 'The first sentence says “Eleni and Nikos built”. Mum only brought the carrot.',
    },
  },

  // ── 16–18: sequence and simple inference ────────────────────────────────────
  {
    q: {
      el: '«Ο Πέτρος έφαγε πρωινό. Μετά έπλυνε τα δόντια του. Ύστερα φόρεσε τα παπούτσια του και βγήκε έξω.» Τι έκανε ο Πέτρος αμέσως μετά το πρωινό;',
      en: '“Petros ate breakfast. Then he brushed his teeth. After that he put on his shoes and went outside.” What did Petros do right after breakfast?',
    },
    options: { el: ['Φόρεσε τα παπούτσια του', 'Βγήκε έξω', 'Ξύπνησε', 'Έπλυνε τα δόντια του'], en: ['Put on his shoes', 'Went outside', 'Woke up', 'Brushed his teeth'] },
    correct: 3,
    explanation: {
      el: 'Οι λέξεις «Μετά» και «Ύστερα» δείχνουν τη σειρά. Μετά το πρωινό έρχεται «έπλυνε τα δόντια του».',
      en: 'The words “Then” and “After that” show the order. Right after breakfast comes “brushed his teeth”.',
    },
  },
  {
    q: {
      el: '«Η Μαρία κοίταξε έξω από το παράθυρο. Πήρε την ομπρέλα της και φόρεσε τις γαλότσες της.» Τι καιρό κάνει έξω;',
      en: '“Maria looked out of the window. She took her umbrella and put on her rain boots.” What is the weather like outside?',
    },
    options: { el: ['Έχει ήλιο', 'Βρέχει', 'Χιονίζει', 'Φυσάει'], en: ['It is sunny', 'It is raining', 'It is snowing', 'It is windy'] },
    correct: 1,
    explanation: {
      el: 'Το κείμενο δεν λέει «βρέχει», αλλά το καταλαβαίνουμε: ομπρέλα και γαλότσες παίρνουμε όταν βρέχει.',
      en: 'The text does not say “raining”, but we can work it out: we take an umbrella and rain boots when it rains.',
    },
  },
  {
    q: {
      el: '«Ο Νίκος άνοιξε το μεγάλο κουτί. Μέσα ήταν το ποδήλατο που ήθελε τόσο καιρό! Πήδηξε και χτύπησε παλαμάκια.» Πώς νιώθει ο Νίκος;',
      en: '“Nikos opened the big box. Inside was the bike he had wanted for so long! He jumped up and clapped his hands.” How does Nikos feel?',
    },
    options: { el: ['Λυπημένος', 'Θυμωμένος', 'Χαρούμενος', 'Φοβισμένος'], en: ['Sad', 'Angry', 'Happy', 'Scared'] },
    correct: 2,
    explanation: {
      el: 'Δεν γράφει «χαρούμενος», αλλά το καταλαβαίνουμε από αυτά που κάνει: πηδάει και χτυπάει παλαμάκια.',
      en: 'It does not say “happy”, but we can tell from what he does: he jumps up and claps his hands.',
    },
  },
];
