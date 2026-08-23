/**
 * ΣΤ' Δημοτικού · Φυσικά («Ερευνώ και Ανακαλύπτω») · Οξέα, Βάσεις & Μικρόβια
 * ===========================================================================
 * Original questions on the curriculum topics (no textbook text). Language level: 11–12.
 *
 * What the unit covers, in order:
 *   1–4   acids and bases in daily life: sour taste, soap, vinegar, neutral water
 *   5–7   indicators: litmus paper, red-cabbage juice, what an indicator does
 *   8–9   acid meets base: neutralisation makes a salt; vinegar + baking soda fizz
 *   10–12 microbes: what they are, useful ones (yoghurt), viruses vs bacteria
 *   13–14 vaccines: how they train the body, why we take them before getting sick
 *   15–18 hygiene and stopping contagious diseases: hand-washing, sneezing, how germs travel, staying home
 */
import type { QuizQuestion } from '../../../types';

export const GRADE6_SCIENCE_ACIDS_BASES_MICROBES: QuizQuestion[] = [
  // ── 1–4: acids and bases in daily life ─────────────────────────────────────
  {
    q: { el: 'Η Μαρία δοκιμάζει χυμό λεμονιού και ζαρώνει το πρόσωπό της. Γιατί ο χυμός λεμονιού είναι τόσο ξινός;', en: 'Maria tastes lemon juice and screws up her face. Why is lemon juice so sour?' },
    options: { el: ['Γιατί έχει πολλή ζάχαρη', 'Γιατί είναι βάση', 'Γιατί περιέχει οξύ', 'Γιατί είναι πολύ κρύος'], en: ['Because it has a lot of sugar', 'Because it is a base', 'Because it contains an acid', 'Because it is very cold'] },
    correct: 2,
    explanation: {
      el: 'Ο χυμός λεμονιού περιέχει οξύ (κιτρικό οξύ). Τα οξέα έχουν ξινή γεύση — γι\' αυτό το λεμόνι, το πορτοκάλι και το ξίδι είναι ξινά.',
      en: 'Lemon juice contains an acid (citric acid). Acids taste sour — that is why lemons, oranges and vinegar are sour.',
    },
  },
  {
    q: { el: 'Ποιο από τα παρακάτω είναι βάση και όχι οξύ;', en: 'Which of these is a base, not an acid?' },
    options: { el: ['Το ξίδι', 'Το σαπούνι', 'Ο χυμός πορτοκαλιού', 'Η κόκα κόλα'], en: ['Vinegar', 'Soap', 'Orange juice', 'Cola'] },
    correct: 1,
    explanation: {
      el: 'Το σαπούνι είναι βάση: οι βάσεις είναι γλιστερές στην αφή και «τρώνε» τα λίπη. Το ξίδι, ο χυμός και τα αναψυκτικά είναι οξέα.',
      en: 'Soap is a base: bases feel slippery and break up grease. Vinegar, juice and fizzy drinks are acids.',
    },
  },
  {
    q: { el: 'Ο Γιώργος καθαρίζει τα άλατα από τον βραστήρα με ξίδι. Το ξίδι είναι…', en: 'George cleans the limescale off the kettle with vinegar. Vinegar is…' },
    options: { el: ['ένα αδύναμο οξύ', 'μια δυνατή βάση', 'ουδέτερο, όπως το νερό', 'ένα αλάτι'], en: ['a weak acid', 'a strong base', 'neutral, like water', 'a salt'] },
    correct: 0,
    explanation: {
      el: 'Το ξίδι είναι αδύναμο οξύ (οξικό οξύ). Τα οξέα διαλύουν τα άλατα του βραστήρα — γι\' αυτό το ξίδι καθαρίζει.',
      en: 'Vinegar is a weak acid (acetic acid). Acids dissolve limescale — that is why vinegar cleans the kettle.',
    },
  },
  {
    q: { el: 'Ποιο υγρό δεν είναι ούτε οξύ ούτε βάση, αλλά ουδέτερο;', en: 'Which liquid is neither an acid nor a base, but neutral?' },
    options: { el: ['Ο χυμός λεμονιού', 'Το υγρό πιάτων', 'Το ξίδι', 'Το καθαρό νερό'], en: ['Lemon juice', 'Dish soap', 'Vinegar', 'Pure water'] },
    correct: 3,
    explanation: {
      el: 'Το καθαρό νερό είναι ουδέτερο: ούτε ξινό σαν τα οξέα ούτε γλιστερό σαν τις βάσεις. Στην κλίμακα pH βρίσκεται στη μέση, στο 7.',
      en: 'Pure water is neutral: not sour like acids and not slippery like bases. On the pH scale it sits in the middle, at 7.',
    },
  },

  // ── 5–7: indicators ────────────────────────────────────────────────────────
  {
    q: { el: 'Η Ελένη βουτάει μπλε χαρτί ηλιοτροπίου (λακμού) σε χυμό λεμονιού. Τι χρώμα θα πάρει;', en: 'Eleni dips blue litmus paper into lemon juice. What colour will it turn?' },
    options: { el: ['Θα μείνει μπλε', 'Κόκκινο', 'Πράσινο', 'Κίτρινο'], en: ['It will stay blue', 'Red', 'Green', 'Yellow'] },
    correct: 1,
    explanation: {
      el: 'Το μπλε χαρτί λακμού γίνεται κόκκινο μέσα σε οξύ. Μέσα σε βάση, το κόκκινο χαρτί λακμού γίνεται μπλε.',
      en: 'Blue litmus paper turns red in an acid. In a base, red litmus paper turns blue.',
    },
  },
  {
    q: { el: 'Ο Νίκος έφτιαξε μωβ ζουμί από κόκκινο λάχανο και έριξε λίγο σε ξίδι. Τι παρατηρεί;', en: 'Nikos made purple red-cabbage juice and poured some into vinegar. What does he see?' },
    options: { el: ['Το ζουμί αφρίζει και χάνεται', 'Το ζουμί μένει μωβ', 'Το ζουμί γίνεται κόκκινο-ροζ', 'Το ζουμί γίνεται μαύρο'], en: ['The juice fizzes and disappears', 'The juice stays purple', 'The juice turns red-pink', 'The juice turns black'] },
    correct: 2,
    explanation: {
      el: 'Το ζουμί του κόκκινου λάχανου είναι φυσικός δείκτης: στα οξέα γίνεται κόκκινο-ροζ, στις βάσεις γίνεται πράσινο ή μπλε.',
      en: 'Red-cabbage juice is a natural indicator: in acids it turns red-pink, in bases it turns green or blue.',
    },
  },
  {
    q: { el: 'Τι είναι ένας «δείκτης» στη Χημεία;', en: 'What is an “indicator” in chemistry?' },
    options: { el: ['Μια ουσία που αλλάζει χρώμα και μας δείχνει αν κάτι είναι οξύ ή βάση', 'Ένα θερμόμετρο για υγρά', 'Μια ουσία που κάνει το νερό να βράζει πιο γρήγορα', 'Ένας μεγεθυντικός φακός'], en: ['A substance that changes colour to show if something is an acid or a base', 'A thermometer for liquids', 'A substance that makes water boil faster', 'A magnifying glass'] },
    correct: 0,
    explanation: {
      el: 'Ο δείκτης είναι ουσία που αλλάζει χρώμα ανάλογα με το αν βρίσκεται σε οξύ ή σε βάση. Έτσι «βλέπουμε» κάτι που δεν φαίνεται με το μάτι.',
      en: 'An indicator is a substance that changes colour depending on whether it is in an acid or a base. It lets us “see” something invisible to the eye.',
    },
  },

  // ── 8–9: acid meets base — salts ───────────────────────────────────────────
  {
    q: { el: 'Όταν ένα οξύ ενώνεται με μια βάση, τι σχηματίζεται;', en: 'When an acid combines with a base, what is formed?' },
    options: { el: ['Ένα πιο δυνατό οξύ', 'Ένα αλάτι και νερό', 'Μόνο αέρας', 'Ζάχαρη'], en: ['A stronger acid', 'A salt and water', 'Only air', 'Sugar'] },
    correct: 1,
    explanation: {
      el: 'Οξύ + βάση → αλάτι + νερό. Η αντίδραση λέγεται εξουδετέρωση, γιατί το οξύ και η βάση «εξουδετερώνουν» το ένα το άλλο.',
      en: 'Acid + base → salt + water. This is called neutralisation, because the acid and the base cancel each other out.',
    },
  },
  {
    q: { el: 'Η Μαρία ρίχνει μια κουταλιά μαγειρική σόδα σε ξίδι και το μείγμα αφρίζει σαν ηφαίστειο. Τι είναι οι φυσαλίδες;', en: 'Maria drops a spoon of baking soda into vinegar and the mixture fizzes like a volcano. What are the bubbles?' },
    options: { el: ['Οξυγόνο', 'Ατμός από ζεστό νερό', 'Σαπούνι', 'Διοξείδιο του άνθρακα'], en: ['Oxygen', 'Steam from hot water', 'Soap', 'Carbon dioxide'] },
    correct: 3,
    explanation: {
      el: 'Η σόδα (βάση) αντιδρά με το ξίδι (οξύ) και ελευθερώνει διοξείδιο του άνθρακα — το ίδιο αέριο που κάνει τα αναψυκτικά να αφρίζουν.',
      en: 'Baking soda (a base) reacts with vinegar (an acid) and releases carbon dioxide — the same gas that makes fizzy drinks fizz.',
    },
  },

  // ── 10–12: microbes ────────────────────────────────────────────────────────
  {
    q: { el: 'Τι είναι τα μικρόβια;', en: 'What are microbes?' },
    options: { el: ['Μικρά έντομα που ζουν στη σκόνη', 'Πολύ μικροί ζωντανοί οργανισμοί που φαίνονται μόνο με μικροσκόπιο', 'Κόκκοι βρομιάς που κολλάνε στα χέρια', 'Μικρά σωματίδια σκόνης στον αέρα'], en: ['Tiny insects that live in dust', 'Very small living things you can only see with a microscope', 'Bits of dirt that stick to your hands', 'Small dust particles in the air'] },
    correct: 1,
    explanation: {
      el: 'Τα μικρόβια είναι ζωντανοί οργανισμοί τόσο μικροί που χρειαζόμαστε μικροσκόπιο για να τους δούμε. Βακτήρια, ιοί και μύκητες είναι μικρόβια.',
      en: 'Microbes are living things so small that we need a microscope to see them. Bacteria, viruses and fungi are microbes.',
    },
  },
  {
    q: { el: 'Η γιαγιά του Νίκου φτιάχνει γιαούρτι από γάλα. Ποιος κάνει το γάλα γιαούρτι;', en: 'Nikos\'s grandmother makes yoghurt from milk. What turns the milk into yoghurt?' },
    options: { el: ['Η ζάχαρη', 'Το αλάτι', 'Χρήσιμα βακτήρια', 'Ο κρύος αέρας του ψυγείου'], en: ['Sugar', 'Salt', 'Helpful bacteria', 'The cold air of the fridge'] },
    correct: 2,
    explanation: {
      el: 'Δεν είναι όλα τα μικρόβια βλαβερά! Χρήσιμα βακτήρια μετατρέπουν το γάλα σε γιαούρτι και τυρί, και άλλα ζουν στο έντερό μας και μας βοηθούν να χωνεύουμε.',
      en: 'Not all microbes are harmful! Helpful bacteria turn milk into yoghurt and cheese, and others live in our gut and help us digest food.',
    },
  },
  {
    q: { el: 'Ο Γιώργος έχει γρίπη. Ποιο μικρόβιο προκαλεί τη γρίπη;', en: 'George has the flu. Which kind of microbe causes the flu?' },
    options: { el: ['Ένας ιός', 'Ένας μύκητας', 'Ένα βακτήριο', 'Ένα παράσιτο'], en: ['A virus', 'A fungus', 'A bacterium', 'A parasite'] },
    correct: 0,
    explanation: {
      el: 'Τη γρίπη και το κρυολόγημα τα προκαλούν ιοί. Οι ιοί είναι ακόμη πιο μικροί από τα βακτήρια, και τα αντιβιοτικά δεν τους πιάνουν — γι\' αυτό δεν τα παίρνουμε για γρίπη.',
      en: 'Flu and colds are caused by viruses. Viruses are even smaller than bacteria, and antibiotics do not work on them — that is why we do not take them for the flu.',
    },
  },

  // ── 13–14: vaccines ────────────────────────────────────────────────────────
  {
    q: { el: 'Πώς μας προστατεύει ένα εμβόλιο;', en: 'How does a vaccine protect us?' },
    options: { el: ['Σκοτώνει όλα τα μικρόβια του σώματος', 'Μας κάνει να μην κρυώνουμε τον χειμώνα', 'Είναι ένα φάρμακο που παίρνουμε όταν είμαστε άρρωστοι', 'Μαθαίνει στο σώμα να αναγνωρίζει ένα μικρόβιο και να το πολεμά'], en: ['It kills all the microbes in the body', 'It stops us feeling cold in winter', 'It is a medicine we take when we are ill', 'It teaches the body to recognise a microbe and fight it'] },
    correct: 3,
    explanation: {
      el: 'Το εμβόλιο δείχνει στο σώμα ένα αδύναμο ή «νεκρό» κομμάτι του μικροβίου. Το σώμα φτιάχνει άμυνες (αντισώματα) και τις θυμάται — σαν εκπαίδευση των φρουρών πριν έρθει ο εχθρός.',
      en: 'A vaccine shows the body a weakened or “dead” piece of the microbe. The body makes defences (antibodies) and remembers them — like training the guards before the enemy arrives.',
    },
  },
  {
    q: { el: 'Πότε κάνουμε ένα εμβόλιο;', en: 'When do we get a vaccine?' },
    options: { el: ['Μόνο όταν έχουμε ήδη πυρετό', 'Πριν αρρωστήσουμε, για να μην κολλήσουμε την ασθένεια', 'Αφού περάσει η ασθένεια, για να μην ξαναγυρίσει', 'Μόνο αν πάμε ταξίδι'], en: ['Only when we already have a fever', 'Before we get ill, so we do not catch the disease', 'After the illness passes, so it does not come back', 'Only if we go on a trip'] },
    correct: 1,
    explanation: {
      el: 'Το εμβόλιο είναι πρόληψη: το κάνουμε ενώ είμαστε υγιείς, ώστε το σώμα να είναι έτοιμο αν συναντήσει το μικρόβιο. Έτσι σταμάτησαν ασθένειες που παλιά ήταν πολύ επικίνδυνες.',
      en: 'A vaccine is prevention: we get it while we are healthy, so the body is ready if it meets the microbe. That is how diseases that were once very dangerous were stopped.',
    },
  },

  // ── 15–18: hygiene and stopping contagious diseases ───────────────────────
  {
    q: { el: 'Η Ελένη πλένει τα χέρια της πριν το φαγητό. Ποιος είναι ο σωστός τρόπος;', en: 'Eleni washes her hands before eating. What is the right way?' },
    options: { el: ['Μια γρήγορη βουτιά σε κρύο νερό', 'Μόνο με νερό, για 5 δευτερόλεπτα', 'Με σαπούνι και νερό για περίπου 20 δευτερόλεπτα, και ανάμεσα στα δάχτυλα', 'Να τα σκουπίσει καλά στο παντελόνι της'], en: ['A quick dip in cold water', 'With water only, for 5 seconds', 'With soap and water for about 20 seconds, including between the fingers', 'Wiping them well on her trousers'] },
    correct: 2,
    explanation: {
      el: 'Το σαπούνι ξεκολλάει τα μικρόβια από το δέρμα και το νερό τα παρασύρει. Χρειάζονται περίπου 20 δευτερόλεπτα — όσο να πεις δύο φορές το «Χρόνια πολλά».',
      en: 'Soap loosens microbes from the skin and water washes them away. It takes about 20 seconds — as long as singing “Happy Birthday” twice.',
    },
  },
  {
    q: { el: 'Ο Νίκος νιώθει ότι θα φταρνιστεί μέσα στην τάξη. Τι πρέπει να κάνει;', en: 'Nikos feels a sneeze coming in class. What should he do?' },
    options: { el: ['Να φταρνιστεί στον αγκώνα του ή σε χαρτομάντιλο', 'Να φταρνιστεί στην παλάμη του και μετά να συνεχίσει το γράψιμο', 'Να κρατήσει το φτάρνισμα με κάθε τρόπο', 'Να φταρνιστεί προς το πάτωμα'], en: ['Sneeze into his elbow or a tissue', 'Sneeze into his palm and carry on writing', 'Hold the sneeze in no matter what', 'Sneeze towards the floor'] },
    correct: 0,
    explanation: {
      el: 'Το φτάρνισμα εκτοξεύει σταγονίδια γεμάτα μικρόβια. Ο αγκώνας ή το χαρτομάντιλο τα κρατάει — η παλάμη μετά αγγίζει θρανία, πόμολα και φίλους.',
      en: 'A sneeze shoots out droplets full of microbes. An elbow or a tissue catches them — a palm goes on to touch desks, door handles and friends.',
    },
  },
  {
    q: { el: 'Η γρίπη είναι μεταδοτική ασθένεια. Πώς περνάει από έναν άνθρωπο σε άλλον;', en: 'The flu is a contagious disease. How does it pass from one person to another?' },
    options: { el: ['Από το κρύο του χειμώνα', 'Από το να βραχούμε στη βροχή', 'Αν κοιτάξουμε κάποιον που είναι άρρωστος', 'Με σταγονίδια από βήχα ή φτάρνισμα και με βρόμικα χέρια'], en: ['From the cold of winter', 'From getting wet in the rain', 'By looking at someone who is ill', 'Through droplets from coughs or sneezes and through dirty hands'] },
    correct: 3,
    explanation: {
      el: 'Οι ιοί της γρίπης ταξιδεύουν με τα σταγονίδια που βγαίνουν όταν βήχουμε ή φταρνιζόμαστε, και με τα χέρια που αγγίζουν μια μολυσμένη επιφάνεια και μετά το πρόσωπό μας. Το κρύο από μόνο του δεν «δίνει» γρίπη.',
      en: 'Flu viruses travel in the droplets released when we cough or sneeze, and on hands that touch an infected surface and then our face. Cold weather by itself does not “give” us the flu.',
    },
  },
  {
    q: { el: 'Η Μαρία ξυπνάει με πυρετό και βήχα τη μέρα της σχολικής γιορτής. Ποια είναι η πιο σωστή απόφαση;', en: 'Maria wakes up with a fever and a cough on the day of the school show. What is the best decision?' },
    options: { el: ['Να πάει κανονικά, αλλά να μη μιλήσει σε κανέναν', 'Να μείνει σπίτι, να ξεκουραστεί και να ειδοποιήσει το σχολείο', 'Να πάει και να πλένει τα χέρια της κάθε μία ώρα', 'Να πάρει μόνη της αντιβιοτικό και να πάει'], en: ['Go anyway, but not talk to anyone', 'Stay home, rest, and let the school know', 'Go, and wash her hands every hour', 'Take an antibiotic on her own and go'] },
    correct: 1,
    explanation: {
      el: 'Όταν είμαστε άρρωστοι, μένουμε σπίτι: έτσι το σώμα ξεκουράζεται και δεν κολλάμε τους συμμαθητές μας. Φάρμακα παίρνουμε μόνο όταν μας τα δώσει γιατρός.',
      en: 'When we are ill, we stay home: the body gets to rest and we do not infect our classmates. We only take medicine when a doctor gives it to us.',
    },
  },
];
