/**
 * Γ' Δημοτικού · Ιστορία · Ο Θησέας
 * ==================================
 * Μυθολογία: ο ήρωας Θησέας, ο Μινώταυρος και ο Λαβύρινθος. Original text only —
 * curriculum topics, nothing copied from school books. Language level: a child of 8–9.
 *
 * What the unit covers, in order:
 *   1–3   who Theseus is, his father Aegeus, the city of Athens
 *   4–7   King Minos, Crete, the Minotaur and the Labyrinth
 *   8–11  why Athens sent children to Crete, Theseus volunteers, Ariadne's thread
 *   12–15 inside the Labyrinth, finding the way out, sailing home
 *   16–18 the black sails and the white sails, the promise Theseus forgot, the Aegean Sea
 */
import type { QuizQuestion } from '../../../types';

export const GRADE3_HISTORY_THESEUS: QuizQuestion[] = [
  // ── 1–3: Theseus, Aegeus, Athens ─────────────────────────────────────────────
  {
    q: { el: 'Ο Θησέας ήταν…', en: 'Theseus was…' },
    options: {
      el: ['ένας ήρωας της μυθολογίας', 'ένας βασιλιάς της Κρήτης', 'ένα τέρας', 'ένας ζωγράφος'],
      en: ['a hero from mythology', 'a king of Crete', 'a monster', 'a painter'],
    },
    correct: 0,
    explanation: {
      el: 'Ο Θησέας είναι ένας από τους πιο γνωστούς ήρωες της ελληνικής μυθολογίας. Ήταν γενναίος και έξυπνος.',
      en: 'Theseus is one of the most famous heroes of Greek mythology. He was brave and clever.',
    },
  },
  {
    q: { el: 'Πώς έλεγαν τον πατέρα του Θησέα;', en: 'What was the name of Theseus\' father?' },
    options: {
      el: ['Μίνωας', 'Αιγέας', 'Ηρακλής', 'Δαίδαλος'],
      en: ['Minos', 'Aegeus', 'Heracles', 'Daedalus'],
    },
    correct: 1,
    explanation: {
      el: 'Ο πατέρας του Θησέα ήταν ο Αιγέας, ο βασιλιάς της Αθήνας.',
      en: 'Theseus\' father was Aegeus, the king of Athens.',
    },
  },
  {
    q: { el: 'Σε ποια πόλη ήταν βασιλιάς ο Αιγέας;', en: 'In which city was Aegeus king?' },
    options: {
      el: ['Στη Σπάρτη', 'Στην Κνωσό', 'Στην Αθήνα', 'Στη Θήβα'],
      en: ['Sparta', 'Knossos', 'Athens', 'Thebes'],
    },
    correct: 2,
    explanation: {
      el: 'Ο Αιγέας ήταν βασιλιάς της Αθήνας. Γι\' αυτό και ο Θησέας έγινε αργότερα ο μεγάλος ήρωας των Αθηναίων.',
      en: 'Aegeus was king of Athens. That is why Theseus later became the great hero of the Athenians.',
    },
  },

  // ── 4–7: Minos, Crete, the Minotaur, the Labyrinth ──────────────────────────
  {
    q: { el: 'Ο Μίνωας ήταν ο βασιλιάς…', en: 'Minos was the king of…' },
    options: {
      el: ['της Αθήνας', 'της Ρόδου', 'της Κρήτης', 'της Κύπρου'],
      en: ['Athens', 'Rhodes', 'Crete', 'Cyprus'],
    },
    correct: 2,
    explanation: {
      el: 'Ο Μίνωας ήταν ο δυνατός βασιλιάς της Κρήτης. Το παλάτι του ήταν στην Κνωσό.',
      en: 'Minos was the powerful king of Crete. His palace was at Knossos.',
    },
  },
  {
    q: { el: 'Τι ήταν ο Μινώταυρος;', en: 'What was the Minotaur?' },
    options: {
      el: ['Ένα πλοίο με μαύρα πανιά', 'Ένα τέρας, μισό άνθρωπος και μισό ταύρος', 'Ένας γίγαντας με ένα μάτι', 'Ένα άλογο με φτερά'],
      en: ['A ship with black sails', 'A monster, half man and half bull', 'A giant with one eye', 'A horse with wings'],
    },
    correct: 1,
    explanation: {
      el: 'Ο Μινώταυρος είχε σώμα ανθρώπου και κεφάλι ταύρου. Το όνομά του βγαίνει από τον Μίνωα και τον ταύρο.',
      en: 'The Minotaur had the body of a man and the head of a bull. Its name comes from Minos and the word for bull.',
    },
  },
  {
    q: { el: 'Πού ζούσε ο Μινώταυρος;', en: 'Where did the Minotaur live?' },
    options: {
      el: ['Σε μια σπηλιά στη θάλασσα', 'Στο παλάτι της Αθήνας', 'Στην κορυφή ενός βουνού', 'Μέσα στον Λαβύρινθο'],
      en: ['In a cave by the sea', 'In the palace of Athens', 'On top of a mountain', 'Inside the Labyrinth'],
    },
    correct: 3,
    explanation: {
      el: 'Ο Μινώταυρος ζούσε κλεισμένος μέσα στον Λαβύρινθο, στην Κρήτη.',
      en: 'The Minotaur lived locked inside the Labyrinth, in Crete.',
    },
  },
  {
    q: { el: 'Τι ήταν ο Λαβύρινθος;', en: 'What was the Labyrinth?' },
    options: {
      el: ['Ένα κτίριο με τόσους διαδρόμους που χανόσουν μέσα', 'Ένας ψηλός πύργος', 'Ένα μεγάλο πλοίο', 'Μια βαθιά λίμνη'],
      en: ['A building with so many corridors that you got lost inside', 'A tall tower', 'A big ship', 'A deep lake'],
    },
    correct: 0,
    explanation: {
      el: 'Ο Λαβύρινθος είχε αμέτρητους διαδρόμους που μπερδεύονταν. Όποιος έμπαινε δεν έβρισκε την έξοδο. Τον έφτιαξε ο Δαίδαλος.',
      en: 'The Labyrinth had countless twisting corridors. Whoever went in could not find the way out. Daedalus built it.',
    },
  },

  // ── 8–11: the children of Athens, Theseus volunteers, Ariadne's thread ──────
  {
    q: { el: 'Τι ζητούσε ο Μίνωας από την Αθήνα κάθε λίγα χρόνια;', en: 'What did Minos demand from Athens every few years?' },
    options: {
      el: ['Χρυσάφι και ασήμι', 'Επτά αγόρια και επτά κορίτσια για τον Μινώταυρο', 'Εκατό πλοία', 'Τον βασιλιά Αιγέα'],
      en: ['Gold and silver', 'Seven boys and seven girls for the Minotaur', 'A hundred ships', 'King Aegeus himself'],
    },
    correct: 1,
    explanation: {
      el: 'Η Αθήνα έπρεπε να στέλνει επτά αγόρια και επτά κορίτσια στην Κρήτη, για τον Μινώταυρο. Γι\' αυτό οι Αθηναίοι ήταν πολύ λυπημένοι.',
      en: 'Athens had to send seven boys and seven girls to Crete, for the Minotaur. That is why the Athenians were very sad.',
    },
  },
  {
    q: { el: 'Τι αποφάσισε ο Θησέας;', en: 'What did Theseus decide?' },
    options: {
      el: ['Να κρυφτεί στο παλάτι', 'Να στείλει τον φίλο του', 'Να πάει ο ίδιος στην Κρήτη και να νικήσει τον Μινώταυρο', 'Να φτιάξει έναν δικό του Λαβύρινθο'],
      en: ['To hide in the palace', 'To send his friend instead', 'To go to Crete himself and defeat the Minotaur', 'To build a Labyrinth of his own'],
    },
    correct: 2,
    explanation: {
      el: 'Ο Θησέας ζήτησε να πάει μαζί με τα παιδιά στην Κρήτη. Ήθελε να νικήσει τον Μινώταυρο και να σώσει την Αθήνα.',
      en: 'Theseus asked to go with the children to Crete. He wanted to defeat the Minotaur and save Athens.',
    },
  },
  {
    q: { el: 'Ποια ήταν η Αριάδνη;', en: 'Who was Ariadne?' },
    options: {
      el: ['Η κόρη του βασιλιά Μίνωα', 'Η αδερφή του Θησέα', 'Η βασίλισσα της Αθήνας', 'Η μητέρα του Δαίδαλου'],
      en: ['King Minos\' daughter', 'Theseus\' sister', 'The queen of Athens', 'Daedalus\' mother'],
    },
    correct: 0,
    explanation: {
      el: 'Η Αριάδνη ήταν η κόρη του Μίνωα. Όταν είδε τον Θησέα, θέλησε να τον βοηθήσει.',
      en: 'Ariadne was Minos\' daughter. When she saw Theseus, she wanted to help him.',
    },
  },
  {
    q: { el: 'Τι έδωσε η Αριάδνη στον Θησέα;', en: 'What did Ariadne give Theseus?' },
    options: {
      el: ['Έναν χάρτη του Λαβύρινθου', 'Ένα κουβάρι κλωστή', 'Ένα φανάρι', 'Ένα γρήγορο άλογο'],
      en: ['A map of the Labyrinth', 'A ball of thread', 'A lantern', 'A fast horse'],
    },
    correct: 1,
    explanation: {
      el: 'Η Αριάδνη έδωσε στον Θησέα ένα κουβάρι κλωστή. Αυτό λέγεται «ο μίτος της Αριάδνης».',
      en: 'Ariadne gave Theseus a ball of thread. We call it “Ariadne\'s thread”.',
    },
  },

  // ── 12–15: inside the Labyrinth and the way out ─────────────────────────────
  {
    q: { el: 'Τι έκανε ο Θησέας με την κλωστή μόλις μπήκε στον Λαβύρινθο;', en: 'What did Theseus do with the thread as soon as he entered the Labyrinth?' },
    options: {
      el: ['Έδεσε τον Μινώταυρο', 'Έδεσε τη μία άκρη στην είσοδο και την ξετύλιγε καθώς προχωρούσε', 'Την πέταξε μακριά', 'Έφτιαξε ένα σχοινί για να σκαρφαλώσει'],
      en: ['He tied up the Minotaur', 'He tied one end at the entrance and unrolled it as he walked', 'He threw it away', 'He made a rope to climb'],
    },
    correct: 1,
    explanation: {
      el: 'Ο Θησέας έδεσε την άκρη της κλωστής στην είσοδο. Όσο προχωρούσε, το κουβάρι ξετυλιγόταν πίσω του.',
      en: 'Theseus tied the end of the thread at the entrance. As he walked, the ball unrolled behind him.',
    },
  },
  {
    q: { el: 'Γιατί ήταν τόσο χρήσιμη η κλωστή;', en: 'Why was the thread so useful?' },
    options: {
      el: ['Γιατί ήταν χρυσή και πολύτιμη', 'Γιατί φώτιζε τον σκοτεινό Λαβύρινθο', 'Γιατί ο Θησέας μπορούσε να την ακολουθήσει για να βρει την έξοδο', 'Γιατί φόβιζε τον Μινώταυρο'],
      en: ['Because it was golden and precious', 'Because it lit up the dark Labyrinth', 'Because Theseus could follow it back to find the exit', 'Because it scared the Minotaur'],
    },
    correct: 2,
    explanation: {
      el: 'Μέσα στον Λαβύρινθο όλοι χάνονταν. Ο Θησέας όμως ακολούθησε την κλωστή προς τα πίσω και βρήκε την έξοδο. Η ιδέα της Αριάδνης τον έσωσε!',
      en: 'Everyone got lost in the Labyrinth. But Theseus followed the thread back and found the exit. Ariadne\'s idea saved him!',
    },
  },
  {
    q: { el: 'Τι έγινε όταν ο Θησέας συνάντησε τον Μινώταυρο;', en: 'What happened when Theseus met the Minotaur?' },
    options: {
      el: ['Ο Θησέας τον νίκησε με τη δύναμη και το θάρρος του', 'Ο Θησέας έτρεξε μακριά', 'Έγιναν φίλοι', 'Ο Μινώταυρος κρύφτηκε'],
      en: ['Theseus defeated him with his strength and courage', 'Theseus ran away', 'They became friends', 'The Minotaur hid'],
    },
    correct: 0,
    explanation: {
      el: 'Ο Θησέας πάλεψε με τον Μινώταυρο και τον νίκησε. Έτσι η Αθήνα δεν θα έστελνε ποτέ ξανά παιδιά στην Κρήτη.',
      en: 'Theseus fought the Minotaur and defeated him. So Athens would never again send children to Crete.',
    },
  },
  {
    q: { el: 'Τι έκανε ο Θησέας μετά τη νίκη του;', en: 'What did Theseus do after his victory?' },
    options: {
      el: ['Έμεινε στην Κρήτη και έγινε βασιλιάς', 'Έχτισε έναν καινούργιο Λαβύρινθο', 'Πήρε τα παιδιά και την Αριάδνη και έφυγε με το πλοίο', 'Έκρυψε την κλωστή στο παλάτι'],
      en: ['He stayed in Crete and became king', 'He built a new Labyrinth', 'He took the children and Ariadne and left on the ship', 'He hid the thread in the palace'],
    },
    correct: 2,
    explanation: {
      el: 'Ο Θησέας βγήκε από τον Λαβύρινθο, πήρε τα παιδιά της Αθήνας και την Αριάδνη και σάλπαρε κρυφά με το πλοίο του.',
      en: 'Theseus came out of the Labyrinth, took the children of Athens and Ariadne, and secretly sailed away on his ship.',
    },
  },

  // ── 16–18: the sails, the forgotten promise, the Aegean ─────────────────────
  {
    q: { el: 'Τι είχε υποσχεθεί ο Θησέας στον πατέρα του πριν φύγει;', en: 'What had Theseus promised his father before leaving?' },
    options: {
      el: ['Να φέρει πίσω τον Μινώταυρο', 'Να βάλει άσπρα πανιά στο πλοίο αν γύριζε νικητής', 'Να μείνει για πάντα στην Κρήτη', 'Να στείλει ένα γράμμα από την Κνωσό'],
      en: ['To bring the Minotaur back', 'To put white sails on the ship if he returned victorious', 'To stay in Crete forever', 'To send a letter from Knossos'],
    },
    correct: 1,
    explanation: {
      el: 'Το πλοίο έφυγε με μαύρα πανιά, γιατί όλοι ήταν λυπημένοι. Ο Θησέας υποσχέθηκε: «Αν νικήσω, θα βάλω άσπρα πανιά στον γυρισμό».',
      en: 'The ship left with black sails, because everyone was sad. Theseus promised: “If I win, I will put up white sails on the way back.”',
    },
  },
  {
    q: { el: 'Τι ξέχασε να κάνει ο Θησέας στον γυρισμό;', en: 'What did Theseus forget to do on the way home?' },
    options: {
      el: ['Να πάρει μαζί του τα παιδιά', 'Να ευχαριστήσει την Αριάδνη', 'Να αλλάξει τα μαύρα πανιά με άσπρα', 'Να κλείσει την πόρτα του Λαβύρινθου'],
      en: ['To take the children with him', 'To thank Ariadne', 'To change the black sails to white', 'To close the door of the Labyrinth'],
    },
    correct: 2,
    explanation: {
      el: 'Μέσα στη χαρά του, ο Θησέας ξέχασε να αλλάξει τα πανιά. Το πλοίο γύρισε στην Αθήνα με μαύρα πανιά.',
      en: 'In his joy, Theseus forgot to change the sails. The ship returned to Athens with black sails.',
    },
  },
  {
    q: { el: 'Ο Αιγέας είδε τα μαύρα πανιά, νόμισε ότι ο γιος του χάθηκε και έπεσε στη θάλασσα. Πώς ονομάστηκε από τότε αυτή η θάλασσα;', en: 'Aegeus saw the black sails, believed his son was lost, and fell into the sea. What has that sea been called ever since?' },
    options: {
      el: ['Ιόνιο Πέλαγος', 'Κρητικό Πέλαγος', 'Μαύρη Θάλασσα', 'Αιγαίο Πέλαγος'],
      en: ['The Ionian Sea', 'The Sea of Crete', 'The Black Sea', 'The Aegean Sea'],
    },
    correct: 3,
    explanation: {
      el: 'Η θάλασσα πήρε το όνομα του βασιλιά Αιγέα: Αιγαίο Πέλαγος. Έτσι ο μύθος εξηγεί το όνομα της θάλασσάς μας.',
      en: 'The sea took King Aegeus\' name: the Aegean Sea. That is how the myth explains the name of our sea.',
    },
  },
];
