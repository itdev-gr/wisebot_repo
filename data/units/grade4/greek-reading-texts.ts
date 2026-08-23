/**
 * Δ' Δημοτικού · Γλώσσα · Κατανόηση Κειμένων
 * ==========================================
 * Every question carries its own short original text (2–4 sentences) — nothing is
 * taken from school books or websites. Language level: a child of 9–10.
 *
 * What the unit covers, in order:
 *   1–5   narrative texts: who, where, when, what happened, in what order
 *   6–8   descriptive texts: picking out details, what a description tells us
 *   9–11  informational texts: finding a fact, what the text explains
 *   12–14 inference: what the text means without saying it (feelings, time, reason)
 *   15–16 main idea vs detail: what the whole text is about, what is only a detail
 *   17    text-type identification: story, description, information, instructions
 *   18    choosing the best title for a text
 */
import type { QuizQuestion } from '../../../types';

export const GRADE4_GREEK_READING_TEXTS: QuizQuestion[] = [
  // ── 1–5: narrative texts ───────────────────────────────────────────────────
  {
    q: {
      el: '«Το Σάββατο ο Νίκος πήγε με τον παππού του στο ποτάμι. Έριξαν τα καλάμια τους και περίμεναν. Μετά από μία ώρα ο Νίκος έπιασε ένα μικρό ψάρι.» Πού πήγε ο Νίκος;',
      en: '“On Saturday Nikos went to the river with his grandfather. They cast their fishing rods and waited. After an hour Nikos caught a small fish.” Where did Nikos go?',
    },
    options: {
      el: ['Στη θάλασσα', 'Στο ποτάμι', 'Στη λίμνη', 'Στο πάρκο'],
      en: ['To the sea', 'To the river', 'To the lake', 'To the park'],
    },
    correct: 1,
    explanation: {
      el: 'Το κείμενο λέει «πήγε με τον παππού του στο ποτάμι». Για το «πού» ψάχνουμε τη λέξη που δείχνει τόπο.',
      en: 'The text says “went to the river with his grandfather”. For “where” we look for the word that shows a place.',
    },
  },
  {
    q: {
      el: '«Η Ελένη ξύπνησε νωρίς γιατί είχε τα γενέθλιά της. Η μαμά της είχε ετοιμάσει τηγανίτες με μέλι. Το απόγευμα θα έρχονταν οι φίλες της.» Γιατί ξύπνησε νωρίς η Ελένη;',
      en: '“Eleni woke up early because it was her birthday. Her mum had made pancakes with honey. In the afternoon her friends would come.” Why did Eleni wake up early?',
    },
    options: {
      el: ['Γιατί είχε σχολείο', 'Γιατί ήρθαν οι φίλες της', 'Γιατί είχε τα γενέθλιά της', 'Γιατί μύρισε τις τηγανίτες'],
      en: ['Because she had school', 'Because her friends came', 'Because it was her birthday', 'Because she smelled the pancakes'],
    },
    correct: 2,
    explanation: {
      el: 'Η λέξη «γιατί» μέσα στο κείμενο μάς δίνει την αιτία: «ξύπνησε νωρίς γιατί είχε τα γενέθλιά της».',
      en: 'The word “because” in the text gives the reason: “woke up early because it was her birthday”.',
    },
  },
  {
    q: {
      el: '«Ο Γιώργος έχασε το κόκκινο κασκόλ του στο σχολείο. Το έψαξε στην τάξη και στην αυλή. Τελικά το βρήκε κρεμασμένο στο γυμναστήριο.» Πού βρήκε το κασκόλ του ο Γιώργος;',
      en: '“Giorgos lost his red scarf at school. He looked for it in the classroom and in the yard. In the end he found it hanging in the gym.” Where did Giorgos find his scarf?',
    },
    options: {
      el: ['Στην τάξη', 'Στην αυλή', 'Στο σπίτι', 'Στο γυμναστήριο'],
      en: ['In the classroom', 'In the yard', 'At home', 'In the gym'],
    },
    correct: 3,
    explanation: {
      el: 'Στην τάξη και στην αυλή μόνο το έψαξε. Το «τελικά το βρήκε» δείχνει πού ήταν στ\' αλήθεια: στο γυμναστήριο.',
      en: 'He only looked in the classroom and the yard. “In the end he found it” shows where it really was: in the gym.',
    },
  },
  {
    q: {
      el: '«Πρώτα η Μαρία πότισε τα λουλούδια. Έπειτα τάισε τη γάτα. Στο τέλος κάθισε να διαβάσει το βιβλίο της.» Τι έκανε η Μαρία αμέσως μετά το πότισμα;',
      en: '“First Maria watered the flowers. Then she fed the cat. Finally she sat down to read her book.” What did Maria do right after watering?',
    },
    options: {
      el: ['Διάβασε το βιβλίο της', 'Τάισε τη γάτα', 'Πότισε τα λουλούδια', 'Έπαιξε με τη γάτα'],
      en: ['Read her book', 'Fed the cat', 'Watered the flowers', 'Played with the cat'],
    },
    correct: 1,
    explanation: {
      el: 'Οι λέξεις «πρώτα, έπειτα, στο τέλος» δείχνουν τη σειρά. Μετά το «πρώτα» έρχεται το «έπειτα»: τάισε τη γάτα.',
      en: 'The words “first, then, finally” show the order. After “first” comes “then”: she fed the cat.',
    },
  },
  {
    q: {
      el: '«Ο Κώστας και η αδερφή του έφτιαξαν έναν χαρταετό. Τον πήγαν στον λόφο, αλλά δεν φυσούσε καθόλου. Την άλλη μέρα ο αέρας ήταν δυνατός και ο χαρταετός πέταξε ψηλά.» Πότε πέταξε ο χαρταετός;',
      en: '“Kostas and his sister made a kite. They took it to the hill, but there was no wind at all. The next day the wind was strong and the kite flew high.” When did the kite fly?',
    },
    options: {
      el: ['Την ίδια μέρα που τον έφτιαξαν', 'Την άλλη μέρα', 'Δεν πέταξε ποτέ', 'Μόλις έφτασαν στον λόφο'],
      en: ['The same day they made it', 'The next day', 'It never flew', 'As soon as they reached the hill'],
    },
    correct: 1,
    explanation: {
      el: 'Την πρώτη μέρα «δεν φυσούσε καθόλου». Το κείμενο λέει ότι «την άλλη μέρα» ο χαρταετός πέταξε ψηλά.',
      en: 'On the first day “there was no wind at all”. The text says that “the next day” the kite flew high.',
    },
  },

  // ── 6–8: descriptive texts ─────────────────────────────────────────────────
  {
    q: {
      el: '«Ο σκύλος μας ο Μπρούνο είναι μικρόσωμος, με καφέ τρίχωμα και μια άσπρη βούλα στο μέτωπο. Τα αυτιά του είναι μακριά και κρεμαστά. Η ουρά του κουνιέται συνέχεια.» Τι χρώμα έχει η βούλα στο μέτωπο του Μπρούνο;',
      en: '“Our dog Bruno is small, with brown fur and a white spot on his forehead. His ears are long and floppy. His tail wags all the time.” What colour is the spot on Bruno’s forehead?',
    },
    options: {
      el: ['Καφέ', 'Μαύρο', 'Άσπρο', 'Γκρι'],
      en: ['Brown', 'Black', 'White', 'Grey'],
    },
    correct: 2,
    explanation: {
      el: 'Το τρίχωμα είναι καφέ, αλλά η βούλα στο μέτωπο είναι άσπρη. Σε μια περιγραφή προσέχουμε σε ποιο πράγμα ανήκει κάθε λέξη.',
      en: 'The fur is brown, but the spot on the forehead is white. In a description we check which thing each word belongs to.',
    },
  },
  {
    q: {
      el: '«Το δωμάτιό μου έχει ένα μεγάλο παράθυρο που βλέπει στον κήπο. Δίπλα στο κρεβάτι είναι το γραφείο μου με τα βιβλία. Στον τοίχο κρέμεται ένας χάρτης του κόσμου.» Τι υπάρχει δίπλα στο κρεβάτι;',
      en: '“My room has a big window that looks out onto the garden. Next to the bed is my desk with my books. On the wall hangs a map of the world.” What is next to the bed?',
    },
    options: {
      el: ['Το παράθυρο', 'Ο χάρτης', 'Ο κήπος', 'Το γραφείο'],
      en: ['The window', 'The map', 'The garden', 'The desk'],
    },
    correct: 3,
    explanation: {
      el: '«Δίπλα στο κρεβάτι είναι το γραφείο μου». Λέξεις όπως «δίπλα, πάνω, κάτω, στον τοίχο» μάς λένε πού βρίσκεται το καθένα.',
      en: '“Next to the bed is my desk”. Words like “next to, on, under, on the wall” tell us where each thing is.',
    },
  },
  {
    q: {
      el: '«Η πλατεία του χωριού έχει έναν τεράστιο πλάτανο στη μέση. Γύρω του υπάρχουν ξύλινα παγκάκια και μια παλιά βρύση με κρύο νερό. Τα καλοκαιρινά βράδια η πλατεία γεμίζει παιδιά.» Τι περιγράφει το κείμενο;',
      en: '“The village square has a huge plane tree in the middle. Around it there are wooden benches and an old fountain with cold water. On summer evenings the square fills with children.” What does the text describe?',
    },
    options: {
      el: ['Ένα καλοκαιρινό παιχνίδι', 'Την πλατεία του χωριού', 'Έναν πλάτανο', 'Μια παλιά βρύση'],
      en: ['A summer game', 'The village square', 'A plane tree', 'An old fountain'],
    },
    correct: 1,
    explanation: {
      el: 'Ο πλάτανος και η βρύση είναι κομμάτια της εικόνας. Όλο το κείμενο όμως μιλάει για την πλατεία και τι έχει μέσα της.',
      en: 'The plane tree and the fountain are parts of the picture. But the whole text talks about the square and what is in it.',
    },
  },

  // ── 9–11: informational texts ──────────────────────────────────────────────
  {
    q: {
      el: '«Η χελώνα της θάλασσας μπορεί να ζήσει πάνω από 80 χρόνια. Κολυμπάει χιλιάδες χιλιόμετρα, αλλά γυρίζει πάντα στην ίδια παραλία για να γεννήσει τα αυγά της.» Πόσα χρόνια μπορεί να ζήσει μια θαλάσσια χελώνα;',
      en: '“The sea turtle can live for more than 80 years. It swims thousands of kilometres, but it always returns to the same beach to lay its eggs.” How many years can a sea turtle live?',
    },
    options: {
      el: ['Πάνω από 80', 'Περίπου 8', 'Πάνω από 800', 'Χίλια'],
      en: ['More than 80', 'About 8', 'More than 800', 'A thousand'],
    },
    correct: 0,
    explanation: {
      el: 'Το κείμενο δίνει τον αριθμό καθαρά: «πάνω από 80 χρόνια». Στα πληροφοριακά κείμενα οι αριθμοί είναι σημαντικές πληροφορίες.',
      en: 'The text gives the number clearly: “more than 80 years”. In informational texts, numbers are important facts.',
    },
  },
  {
    q: {
      el: '«Οι μέλισσες φτιάχνουν το μέλι από το νέκταρ των λουλουδιών. Το μεταφέρουν στην κυψέλη και το αποθηκεύουν σε μικρές κερήθρες. Μια κυψέλη μπορεί να έχει πάνω από 40.000 μέλισσες.» Από τι φτιάχνουν το μέλι οι μέλισσες;',
      en: '“Bees make honey from the nectar of flowers. They carry it to the hive and store it in small honeycombs. One hive can have more than 40,000 bees.” What do bees make honey from?',
    },
    options: {
      el: ['Από το κερί', 'Από το νέκταρ των λουλουδιών', 'Από τα φύλλα', 'Από το νερό'],
      en: ['From wax', 'From the nectar of flowers', 'From leaves', 'From water'],
    },
    correct: 1,
    explanation: {
      el: 'Η πρώτη πρόταση το εξηγεί: «φτιάχνουν το μέλι από το νέκταρ των λουλουδιών». Οι κερήθρες είναι το μέρος που το φυλάνε.',
      en: 'The first sentence explains it: “make honey from the nectar of flowers”. The honeycombs are where they keep it.',
    },
  },
  {
    q: {
      el: '«Το ποδήλατο έχει δύο τροχούς, πετάλια και τιμόνι. Για να είμαστε ασφαλείς φοράμε πάντα κράνος. Πριν ξεκινήσουμε, ελέγχουμε αν τα φρένα δουλεύουν.» Τι μας συμβουλεύει το κείμενο να φοράμε;',
      en: '“A bicycle has two wheels, pedals and handlebars. To be safe we always wear a helmet. Before we set off, we check that the brakes work.” What does the text advise us to wear?',
    },
    options: {
      el: ['Γάντια', 'Κράνος', 'Γυαλιά', 'Επιγονατίδες'],
      en: ['Gloves', 'A helmet', 'Glasses', 'Knee pads'],
    },
    correct: 1,
    explanation: {
      el: '«Για να είμαστε ασφαλείς φοράμε πάντα κράνος.» Όταν η ερώτηση ρωτάει «τι», ψάχνουμε το ρήμα (φοράμε) και δίπλα του την απάντηση.',
      en: '“To be safe we always wear a helmet.” When the question asks “what”, we find the verb (wear) and the answer next to it.',
    },
  },

  // ── 12–14: inference ───────────────────────────────────────────────────────
  {
    q: {
      el: '«Η Άννα κοίταξε τον βαθμό στο τεστ της και χαμογέλασε. Έτρεξε στο σπίτι να το δείξει στη γιαγιά της.» Πώς νιώθει η Άννα;',
      en: '“Anna looked at the mark on her test and smiled. She ran home to show it to her grandmother.” How does Anna feel?',
    },
    options: {
      el: ['Λυπημένη', 'Χαρούμενη', 'Θυμωμένη', 'Κουρασμένη'],
      en: ['Sad', 'Happy', 'Angry', 'Tired'],
    },
    correct: 1,
    explanation: {
      el: 'Το κείμενο δεν λέει «χαρούμενη», αλλά το καταλαβαίνουμε: χαμογέλασε και έτρεξε να δείξει τον βαθμό. Αυτό λέγεται συμπέρασμα.',
      en: 'The text does not say “happy”, but we can tell: she smiled and ran to show her mark. This is called an inference.',
    },
  },
  {
    q: {
      el: '«Ο Πέτρος φόρεσε το χοντρό μπουφάν και τα γάντια του. Έξω τα δέντρα ήταν γυμνά και η ανάσα του έβγαινε σαν σύννεφο.» Ποια εποχή είναι;',
      en: '“Petros put on his thick jacket and his gloves. Outside the trees were bare and his breath came out like a little cloud.” What season is it?',
    },
    options: {
      el: ['Καλοκαίρι', 'Άνοιξη', 'Χειμώνας', 'Αρχές φθινοπώρου'],
      en: ['Summer', 'Spring', 'Winter', 'Early autumn'],
    },
    correct: 2,
    explanation: {
      el: 'Χοντρό μπουφάν, γάντια, γυμνά δέντρα, ανάσα σαν σύννεφο: όλα δείχνουν κρύο. Το κείμενο μάς βάζει να μαντέψουμε ότι είναι χειμώνας.',
      en: 'Thick jacket, gloves, bare trees, breath like a cloud: all show cold. The text lets us work out that it is winter.',
    },
  },
  {
    q: {
      el: '«Η Σοφία άπλωσε το χέρι στο ράφι, αλλά δεν έφτανε. Έφερε ένα σκαμνί από την κουζίνα και ανέβηκε πάνω του.» Γιατί έφερε το σκαμνί η Σοφία;',
      en: '“Sofia reached up to the shelf, but she could not reach it. She brought a stool from the kitchen and climbed onto it.” Why did Sofia bring the stool?',
    },
    options: {
      el: ['Για να καθίσει και να ξεκουραστεί', 'Για να φτάσει το ράφι', 'Για να το καθαρίσει', 'Για να το βάλει στην κουζίνα'],
      en: ['To sit down and rest', 'To reach the shelf', 'To clean it', 'To put it in the kitchen'],
    },
    correct: 1,
    explanation: {
      el: 'Το κείμενο δεν λέει «για να φτάσει», αλλά ενώνουμε τα δύο κομμάτια: δεν έφτανε, άρα ανέβηκε στο σκαμνί για να φτάσει ψηλότερα.',
      en: 'The text does not say “to reach it”, but we join the two pieces: she could not reach, so she climbed the stool to get higher.',
    },
  },

  // ── 15–16: main idea vs detail ─────────────────────────────────────────────
  {
    q: {
      el: '«Η ανακύκλωση βοηθάει τον πλανήτη μας. Πετάμε το χαρτί στον μπλε κάδο και το γυαλί στον πράσινο. Έτσι τα υλικά ξαναχρησιμοποιούνται και τα σκουπίδια λιγοστεύουν.» Ποια είναι η κύρια ιδέα του κειμένου;',
      en: '“Recycling helps our planet. We put paper in the blue bin and glass in the green one. This way materials are used again and rubbish is reduced.” What is the main idea of the text?',
    },
    options: {
      el: ['Το χαρτί πάει στον μπλε κάδο', 'Η ανακύκλωση βοηθάει τον πλανήτη', 'Το γυαλί πάει στον πράσινο κάδο', 'Οι κάδοι έχουν χρώματα'],
      en: ['Paper goes in the blue bin', 'Recycling helps the planet', 'Glass goes in the green bin', 'Bins have colours'],
    },
    correct: 1,
    explanation: {
      el: 'Η κύρια ιδέα είναι αυτό που λέει όλο το κείμενο μαζί. Οι κάδοι και τα χρώματα είναι λεπτομέρειες που τη στηρίζουν.',
      en: 'The main idea is what the whole text says together. The bins and their colours are details that support it.',
    },
  },
  {
    q: {
      el: '«Ο Θανάσης αγαπάει πολύ το ποδόσφαιρο. Κάθε Τετάρτη έχει προπόνηση στο γήπεδο της γειτονιάς. Η αγαπημένη του θέση είναι τερματοφύλακας. Το καλοκαίρι πήγε σε κατασκήνωση ποδοσφαίρου.» Ποια πρόταση είναι μια λεπτομέρεια και ΟΧΙ η κύρια ιδέα;',
      en: '“Thanasis loves football very much. Every Wednesday he has practice at the local pitch. His favourite position is goalkeeper. In summer he went to a football camp.” Which sentence is a detail and NOT the main idea?',
    },
    options: {
      el: ['Ο Θανάσης αγαπάει πολύ το ποδόσφαιρο', 'Το κείμενο μιλάει για τον Θανάση', 'Ο Θανάσης είναι ένα παιδί που του αρέσει ο αθλητισμός', 'Η αγαπημένη του θέση είναι τερματοφύλακας'],
      en: ['Thanasis loves football very much', 'The text is about Thanasis', 'Thanasis is a child who likes sport', 'His favourite position is goalkeeper'],
    },
    correct: 3,
    explanation: {
      el: 'Η θέση του τερματοφύλακα είναι μία μικρή πληροφορία. Η κύρια ιδέα είναι ότι ο Θανάσης αγαπάει το ποδόσφαιρο, και όλες οι άλλες προτάσεις το αποδεικνύουν.',
      en: 'The goalkeeper position is one small piece of information. The main idea is that Thanasis loves football, and all the other sentences prove it.',
    },
  },

  // ── 17: text-type identification ──────────────────────────────────────────
  {
    q: {
      el: '«Βάζουμε το αλεύρι σε ένα μπολ. Προσθέτουμε δύο αυγά και λίγο γάλα. Ανακατεύουμε καλά μέχρι να γίνει ένας λείος χυλός.» Τι είδους κείμενο είναι αυτό;',
      en: '“Put the flour in a bowl. Add two eggs and a little milk. Mix well until it becomes a smooth batter.” What kind of text is this?',
    },
    options: {
      el: ['Μια ιστορία', 'Οδηγίες', 'Μια περιγραφή', 'Ένα ποίημα'],
      en: ['A story', 'Instructions', 'A description', 'A poem'],
    },
    correct: 1,
    explanation: {
      el: 'Το κείμενο λέει τι να κάνουμε βήμα βήμα: βάζουμε, προσθέτουμε, ανακατεύουμε. Τα κείμενα με βήματα λέγονται οδηγίες.',
      en: 'The text tells us what to do step by step: put, add, mix. Texts with steps are called instructions.',
    },
  },

  // ── 18: choosing a title ───────────────────────────────────────────────────
  {
    q: {
      el: '«Ο Δημήτρης βρήκε ένα μικρό γατάκι έξω από το σχολείο. Κρύωνε και νιαούριζε. Το πήρε αγκαλιά, το πήγε σπίτι και του έδωσε γάλα. Τώρα το γατάκι κοιμάται στο κρεβάτι του.» Ποιος τίτλος ταιριάζει καλύτερα στο κείμενο;',
      en: '“Dimitris found a tiny kitten outside the school. It was cold and meowing. He picked it up, took it home and gave it milk. Now the kitten sleeps on his bed.” Which title fits the text best?',
    },
    options: {
      el: ['«Το σχολείο μας»', '«Ένα ποτήρι γάλα»', '«Ο Δημήτρης σώζει ένα γατάκι»', '«Τα ζώα του δάσους»'],
      en: ['“Our school”', '“A glass of milk”', '“Dimitris saves a kitten”', '“The animals of the forest”'],
    },
    correct: 2,
    explanation: {
      el: 'Ο καλός τίτλος λέει με λίγες λέξεις το πιο σημαντικό πράγμα του κειμένου. Το σχολείο και το γάλα είναι λεπτομέρειες· το δάσος δεν υπάρχει καν.',
      en: 'A good title says the most important thing in the text in a few words. The school and the milk are details; the forest is not even in it.',
    },
  },
];
