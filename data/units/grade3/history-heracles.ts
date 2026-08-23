/**
 * Γ' Δημοτικού · Ιστορία · Ο Ηρακλής
 * ===================================
 * Original questions on the myth of Heracles (curriculum topics only — no textbook text).
 * Language level: a child of 8–9. Order, easiest to hardest:
 *   1–3   who Heracles was: a hero, son of Zeus, famous for his strength; the twelve labours
 *   4–5   Eurystheus, the king who set the labours
 *   6–8   the Nemean lion: skin nothing could pierce, wrestled it, wore its skin
 *   9–11  the Lernaean Hydra: many heads, new heads grow back, Iolaus helps with fire
 *   12–14 the Augean stables: thousands of animals, two rivers, done in one day
 *   15–16 Cerberus: three-headed dog, guardian of the Underworld, the hardest labour
 *   17–18 Hera: the goddess who made life hard for Heracles; why the labours still matter
 * The UI shuffles options, so the correct slot is not balanced on purpose.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE3_HISTORY_HERACLES: QuizQuestion[] = [
  // ── 1–3: who Heracles was ───────────────────────────────────────────────────
  {
    q: { el: 'Τι ήταν ο Ηρακλής στους μύθους των αρχαίων Ελλήνων;', en: 'What was Heracles in the myths of the ancient Greeks?' },
    options: { el: ['Ένας ήρωας με τεράστια δύναμη', 'Ένας βασιλιάς της Αθήνας', 'Ένας ζωγράφος', 'Ένας ψαράς'], en: ['A hero with enormous strength', 'A king of Athens', 'A painter', 'A fisherman'] },
    correct: 0,
    explanation: {
      el: 'Ο Ηρακλής ήταν ο πιο δυνατός ήρωας των μύθων. Από μωρό ακόμα έδειχνε τη δύναμή του!',
      en: 'Heracles was the strongest hero in the myths. Even as a baby he showed his strength!',
    },
  },
  {
    q: { el: 'Ποιος θεός ήταν ο πατέρας του Ηρακλή;', en: 'Which god was the father of Heracles?' },
    options: { el: ['Ο Ποσειδώνας', 'Ο Απόλλωνας', 'Ο Δίας', 'Ο Ερμής'], en: ['Poseidon', 'Apollo', 'Zeus', 'Hermes'] },
    correct: 2,
    explanation: {
      el: 'Ο πατέρας του Ηρακλή ήταν ο Δίας, ο βασιλιάς των θεών. Η μητέρα του ήταν η Αλκμήνη, μια θνητή γυναίκα.',
      en: 'The father of Heracles was Zeus, the king of the gods. His mother was Alcmene, a mortal woman.',
    },
  },
  {
    q: { el: 'Πόσους άθλους έκανε ο Ηρακλής;', en: 'How many labours did Heracles complete?' },
    options: { el: ['Δέκα', 'Δώδεκα', 'Επτά', 'Είκοσι'], en: ['Ten', 'Twelve', 'Seven', 'Twenty'] },
    correct: 1,
    explanation: {
      el: 'Ο Ηρακλής έκανε δώδεκα άθλους. «Άθλος» σημαίνει ένα πολύ δύσκολο κατόρθωμα.',
      en: 'Heracles completed twelve labours. A “labour” means a very hard task.',
    },
  },

  // ── 4–5: Eurystheus ─────────────────────────────────────────────────────────
  {
    q: { el: 'Ποιος έδινε στον Ηρακλή τους άθλους;', en: 'Who gave Heracles his labours?' },
    options: { el: ['Ο βασιλιάς Ευρυσθέας', 'Ο βασιλιάς Μίνωας', 'Ο Οδυσσέας', 'Ο Θησέας'], en: ['King Eurystheus', 'King Minos', 'Odysseus', 'Theseus'] },
    correct: 0,
    explanation: {
      el: 'Ο Ευρυσθέας, ο βασιλιάς των Μυκηνών, διάλεγε τους άθλους. Κάθε φορά ζητούσε κάτι πιο δύσκολο.',
      en: 'Eurystheus, the king of Mycenae, chose the labours. Each time he asked for something harder.',
    },
  },
  {
    q: { el: 'Ο Ευρυσθέας ήταν…', en: 'Eurystheus was…' },
    options: { el: ['πιο δυνατός από τον Ηρακλή', 'ένας φίλος που τον βοηθούσε', 'ένας φοβητσιάρης βασιλιάς που τον ζήλευε', 'ένας θεός του Ολύμπου'], en: ['stronger than Heracles', 'a friend who helped him', 'a cowardly king who was jealous of him', 'a god of Olympus'] },
    correct: 2,
    explanation: {
      el: 'Ο Ευρυσθέας ζήλευε τον Ηρακλή και τον φοβόταν. Λένε πως κρυβόταν σε ένα μεγάλο πιθάρι όταν ο Ηρακλής έφερνε τα τέρατα!',
      en: 'Eurystheus was jealous of Heracles and afraid of him. They say he hid in a big jar when Heracles brought back the monsters!',
    },
  },

  // ── 6–8: the Nemean lion ────────────────────────────────────────────────────
  {
    q: { el: 'Ποιος ήταν ο πρώτος άθλος του Ηρακλή;', en: 'What was the first labour of Heracles?' },
    options: { el: ['Το λιοντάρι της Νεμέας', 'Η Λερναία Ύδρα', 'Οι στάβλοι του Αυγεία', 'Ο Κέρβερος'], en: ['The Nemean lion', 'The Lernaean Hydra', 'The Augean stables', 'Cerberus'] },
    correct: 0,
    explanation: {
      el: 'Πρώτος άθλος ήταν το λιοντάρι της Νεμέας, ένα τεράστιο λιοντάρι που τρόμαζε τους ανθρώπους της περιοχής.',
      en: 'The first labour was the Nemean lion, a huge lion that frightened the people of the area.',
    },
  },
  {
    q: { el: 'Γιατί ήταν τόσο δύσκολο να νικήσει κανείς το λιοντάρι της Νεμέας;', en: 'Why was the Nemean lion so hard to defeat?' },
    options: { el: ['Γιατί πετούσε', 'Γιατί το δέρμα του δεν το τρυπούσε κανένα όπλο', 'Γιατί είχε τρία κεφάλια', 'Γιατί ζούσε μέσα στη θάλασσα'], en: ['Because it could fly', 'Because no weapon could pierce its skin', 'Because it had three heads', 'Because it lived in the sea'] },
    correct: 1,
    explanation: {
      el: 'Το δέρμα του λιονταριού ήταν τόσο σκληρό που βέλη και σπαθιά δεν το τρυπούσαν. Έτσι ο Ηρακλής το νίκησε με τα γυμνά του χέρια.',
      en: 'The lion’s skin was so tough that arrows and swords could not pierce it. So Heracles beat it with his bare hands.',
    },
  },
  {
    q: { el: 'Τι έκανε ο Ηρακλής με το δέρμα του λιονταριού;', en: 'What did Heracles do with the lion’s skin?' },
    options: { el: ['Το έδωσε στον Ευρυσθέα για χαλί', 'Το φορούσε σαν πανοπλία', 'Το έριξε στη θάλασσα', 'Το έκρυψε σε μια σπηλιά'], en: ['He gave it to Eurystheus as a rug', 'He wore it as armour', 'He threw it into the sea', 'He hid it in a cave'] },
    correct: 1,
    explanation: {
      el: 'Ο Ηρακλής φορούσε το δέρμα του λιονταριού σαν πανοπλία. Γι\' αυτό στις εικόνες τον βλέπουμε με λιοντάρι στους ώμους και ένα ρόπαλο.',
      en: 'Heracles wore the lion’s skin as armour. That is why pictures show him with a lion on his shoulders and a club.',
    },
  },

  // ── 9–11: the Lernaean Hydra ────────────────────────────────────────────────
  {
    q: { el: 'Τι ήταν η Λερναία Ύδρα;', en: 'What was the Lernaean Hydra?' },
    options: { el: ['Ένα τεράστιο λιοντάρι', 'Ένας σκύλος με τρία κεφάλια', 'Ένα φίδι με πολλά κεφάλια', 'Ένας ταύρος που έβγαζε φωτιά'], en: ['A huge lion', 'A dog with three heads', 'A snake with many heads', 'A bull that breathed fire'] },
    correct: 2,
    explanation: {
      el: 'Η Ύδρα ήταν ένα τέρας σαν φίδι με πολλά κεφάλια. Ζούσε στους βάλτους της Λέρνης, κοντά στο Άργος.',
      en: 'The Hydra was a snake-like monster with many heads. It lived in the marshes of Lerna, near Argos.',
    },
  },
  {
    q: { el: 'Τι συνέβαινε κάθε φορά που ο Ηρακλής έκοβε ένα κεφάλι της Ύδρας;', en: 'What happened every time Heracles cut off one of the Hydra’s heads?' },
    options: { el: ['Η Ύδρα γινόταν πιο μικρή', 'Φύτρωναν δύο καινούργια κεφάλια', 'Το κεφάλι έπεφτε στο νερό και κολυμπούσε', 'Η Ύδρα κοιμόταν'], en: ['The Hydra got smaller', 'Two new heads grew back', 'The head fell in the water and swam away', 'The Hydra fell asleep'] },
    correct: 1,
    explanation: {
      el: 'Στη θέση κάθε κεφαλιού που έκοβε, φύτρωναν δύο καινούργια! Έτσι ο Ηρακλής κατάλαβε ότι χρειαζόταν ένα κόλπο.',
      en: 'In place of every head he cut off, two new ones grew! So Heracles realised he needed a trick.',
    },
  },
  {
    q: { el: 'Ποιος βοήθησε τον Ηρακλή να νικήσει την Ύδρα και πώς;', en: 'Who helped Heracles beat the Hydra, and how?' },
    options: { el: ['Ο Ευρυσθέας, με ένα σπαθί', 'Η Ήρα, με μια μαγική σκόνη', 'Ο Δίας, με έναν κεραυνό', 'Ο Ιόλαος, καίγοντας τους λαιμούς με δαυλό'], en: ['Eurystheus, with a sword', 'Hera, with a magic powder', 'Zeus, with a thunderbolt', 'Iolaus, burning the necks with a torch'] },
    correct: 3,
    explanation: {
      el: 'Ο ανιψιός του, ο Ιόλαος, έκαιγε με έναν δαυλό κάθε λαιμό μόλις έπεφτε το κεφάλι. Έτσι δεν φύτρωναν καινούργια.',
      en: 'His nephew Iolaus burned each neck with a torch as soon as the head came off. That way no new heads grew.',
    },
  },

  // ── 12–14: the Augean stables ───────────────────────────────────────────────
  {
    q: { el: 'Τι ζήτησε ο Ευρυσθέας από τον Ηρακλή στους στάβλους του Αυγεία;', en: 'What did Eurystheus ask Heracles to do at the Augean stables?' },
    options: { el: ['Να καθαρίσει τους στάβλους', 'Να χτίσει καινούργιους στάβλους', 'Να κλέψει τα άλογα', 'Να πουλήσει τα ζώα'], en: ['To clean the stables', 'To build new stables', 'To steal the horses', 'To sell the animals'] },
    correct: 0,
    explanation: {
      el: 'Ο βασιλιάς Αυγείας είχε χιλιάδες ζώα και οι στάβλοι του δεν είχαν καθαριστεί για τριάντα χρόνια. Μεγάλη βρομιά!',
      en: 'King Augeas had thousands of animals and his stables had not been cleaned for thirty years. What a mess!',
    },
  },
  {
    q: { el: 'Πώς καθάρισε ο Ηρακλής τους στάβλους του Αυγεία;', en: 'How did Heracles clean the Augean stables?' },
    options: { el: ['Με μια μεγάλη σκούπα', 'Άλλαξε την πορεία δύο ποταμών', 'Έβαλε φωτιά στους στάβλους', 'Του τους καθάρισε ο Ιόλαος'], en: ['With a big broom', 'He changed the course of two rivers', 'He set fire to the stables', 'Iolaus cleaned them for him'] },
    correct: 1,
    explanation: {
      el: 'Ο Ηρακλής έσκαψε κανάλια και έστρεψε δύο ποτάμια μέσα από τους στάβλους. Το νερό τα καθάρισε όλα!',
      en: 'Heracles dug channels and sent two rivers through the stables. The water washed everything clean!',
    },
  },
  {
    q: { el: 'Πόσο χρόνο χρειάστηκε ο Ηρακλής για τους στάβλους του Αυγεία;', en: 'How long did Heracles need for the Augean stables?' },
    options: { el: ['Τριάντα χρόνια', 'Έναν χρόνο', 'Έναν μήνα', 'Μία μόνο μέρα'], en: ['Thirty years', 'One year', 'One month', 'Just one day'] },
    correct: 3,
    explanation: {
      el: 'Ο Ηρακλής τελείωσε σε μία μέρα! Δεν νίκησε με δύναμη αλλά με εξυπνάδα — το νερό έκανε τη δουλειά.',
      en: 'Heracles finished in one day! He did not win with strength but with cleverness — the water did the work.',
    },
  },

  // ── 15–16: Cerberus ─────────────────────────────────────────────────────────
  {
    q: { el: 'Ποιος ήταν ο Κέρβερος;', en: 'Who was Cerberus?' },
    options: { el: ['Ένα λιοντάρι με φτερά', 'Ένας σκύλος με τρία κεφάλια', 'Ένα άλογο που μιλούσε', 'Ένας γίγαντας με ένα μάτι'], en: ['A lion with wings', 'A dog with three heads', 'A horse that could talk', 'A giant with one eye'] },
    correct: 1,
    explanation: {
      el: 'Ο Κέρβερος ήταν ο σκύλος με τα τρία κεφάλια. Φύλαγε την είσοδο του Κάτω Κόσμου, του βασιλείου του Άδη.',
      en: 'Cerberus was the dog with three heads. He guarded the entrance to the Underworld, the kingdom of Hades.',
    },
  },
  {
    q: { el: 'Τι έπρεπε να κάνει ο Ηρακλής με τον Κέρβερο στον τελευταίο του άθλο;', en: 'What did Heracles have to do with Cerberus in his last labour?' },
    options: { el: ['Να τον φέρει ζωντανό στον Ευρυσθέα', 'Να του μάθει κόλπα', 'Να τον κρύψει σε μια σπηλιά', 'Να τον χαρίσει στον Δία'], en: ['Bring him alive to Eurystheus', 'Teach him tricks', 'Hide him in a cave', 'Give him to Zeus as a gift'] },
    correct: 0,
    explanation: {
      el: 'Ο Ηρακλής κατέβηκε στον Κάτω Κόσμο και έφερε τον Κέρβερο ζωντανό στον Ευρυσθέα. Μετά τον γύρισε πίσω στη θέση του.',
      en: 'Heracles went down to the Underworld and brought Cerberus alive to Eurystheus. Afterwards he took him back to his post.',
    },
  },

  // ── 17–18: Hera and why the labours matter ──────────────────────────────────
  {
    q: { el: 'Ποια θεά ήταν θυμωμένη με τον Ηρακλή και του δυσκόλευε τη ζωή;', en: 'Which goddess was angry with Heracles and made his life hard?' },
    options: { el: ['Η Αθηνά', 'Η Αφροδίτη', 'Η Ήρα', 'Η Άρτεμη'], en: ['Athena', 'Aphrodite', 'Hera', 'Artemis'] },
    correct: 2,
    explanation: {
      el: 'Η Ήρα, η γυναίκα του Δία, δεν ήθελε τον Ηρακλή. Από μωρό του έστελνε εμπόδια, αλλά εκείνος τα ξεπερνούσε όλα.',
      en: 'Hera, the wife of Zeus, did not like Heracles. From the time he was a baby she sent him troubles, but he overcame them all.',
    },
  },
  {
    q: { el: 'Γιατί θυμόμαστε ακόμη τους άθλους του Ηρακλή;', en: 'Why do we still remember the labours of Heracles?' },
    options: { el: ['Γιατί ο Ηρακλής έγινε βασιλιάς των Μυκηνών', 'Γιατί ήταν ο πρώτος Ολυμπιονίκης', 'Γιατί έγραψε ο ίδιος ένα βιβλίο', 'Γιατί δείχνουν ότι με δύναμη, εξυπνάδα και υπομονή νικάς κάθε δυσκολία'], en: ['Because Heracles became king of Mycenae', 'Because he was the first Olympic champion', 'Because he wrote a book himself', 'Because they show that with strength, cleverness and patience you can beat any difficulty'] },
    correct: 3,
    explanation: {
      el: 'Οι άθλοι μάς διδάσκουν ότι οι δυσκολίες νικιούνται με δύναμη, μυαλό και επιμονή. Γι\' αυτό ακόμη σήμερα λέμε «άθλος» για κάτι πολύ δύσκολο.',
      en: 'The labours teach us that hard things are beaten with strength, brains and perseverance. That is why even today we call a very hard task a “labour”.',
    },
  },
];
