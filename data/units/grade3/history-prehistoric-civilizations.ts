/**
 * Γ' Δημοτικού · Ιστορία · Κυκλάδες, Μινωίτες, Μυκηναίοι
 * =======================================================
 * Original questions (curriculum topics only — no textbook text). Language level: 8–9.
 *
 * What the unit covers, in order:
 *   1–3   the Stone Age: tools made of stone, hunting and gathering, the first farmers
 *   4–6   the Cyclades: marble figurines, where the islands are, Cycladic sailors
 *   7–11  the Minoans: Knossos palace, King Minos, the Labyrinth and the Minotaur, bull-leaping frescoes
 *   12–15 the Mycenaeans: Mycenae, the Lion Gate, gold masks, the Cyclopean walls
 *   16–18 Linear B: what it is, who read it, what the tablets recorded
 */
import type { QuizQuestion } from '../../../types';

export const GRADE3_HISTORY_PREHISTORIC_CIVILIZATIONS: QuizQuestion[] = [
  // ── 1–3: the Stone Age ────────────────────────────────────────────────────
  {
    q: { el: 'Από τι έφτιαχναν τα εργαλεία τους οι άνθρωποι της Εποχής του Λίθου;', en: 'What did people in the Stone Age make their tools from?' },
    options: { el: ['Από σίδερο', 'Από πέτρα', 'Από πλαστικό', 'Από γυαλί'], en: ['From iron', 'From stone', 'From plastic', 'From glass'] },
    correct: 1,
    explanation: {
      el: 'Γι\' αυτό λέγεται Εποχή του Λίθου! Οι άνθρωποι έκοβαν και τρόχιζαν πέτρες για να φτιάξουν μαχαίρια, τσεκούρια και αιχμές.',
      en: 'That is why it is called the Stone Age! People chipped and sharpened stones to make knives, axes and spear tips.',
    },
  },
  {
    q: { el: 'Πώς έβρισκαν το φαγητό τους οι πρώτοι άνθρωποι της Εποχής του Λίθου;', en: 'How did the first Stone Age people find their food?' },
    options: { el: ['Το αγόραζαν από το μαγαζί', 'Το παράγγελναν από μακριά', 'Κυνηγούσαν ζώα και μάζευαν καρπούς', 'Το μαγείρευαν σε φούρνο μικροκυμάτων'], en: ['They bought it from a shop', 'They ordered it from far away', 'They hunted animals and gathered fruit', 'They cooked it in a microwave'] },
    correct: 2,
    explanation: {
      el: 'Οι πρώτοι άνθρωποι ήταν κυνηγοί και τροφοσυλλέκτες: κυνηγούσαν ζώα, ψάρευαν και μάζευαν καρπούς και ρίζες.',
      en: 'The first people were hunters and gatherers: they hunted animals, fished, and collected fruit and roots.',
    },
  },
  {
    q: { el: 'Τι μεγάλη αλλαγή έγινε προς το τέλος της Εποχής του Λίθου;', en: 'What big change happened near the end of the Stone Age?' },
    options: { el: ['Οι άνθρωποι έφτιαξαν αυτοκίνητα', 'Οι άνθρωποι άρχισαν να καλλιεργούν τη γη και να έχουν ζώα', 'Οι άνθρωποι έχτισαν ουρανοξύστες', 'Οι άνθρωποι έμαθαν να πετούν'], en: ['People built cars', 'People started farming the land and keeping animals', 'People built skyscrapers', 'People learned to fly'] },
    correct: 1,
    explanation: {
      el: 'Οι άνθρωποι έγιναν γεωργοί και κτηνοτρόφοι. Έτσι σταμάτησαν να περιπλανιούνται και έχτισαν τα πρώτα χωριά.',
      en: 'People became farmers and shepherds. So they stopped wandering and built the first villages.',
    },
  },

  // ── 4–6: the Cyclades ─────────────────────────────────────────────────────
  {
    q: { el: 'Οι Κυκλάδες είναι…', en: 'The Cyclades are…' },
    options: { el: ['βουνά στη Βόρεια Ελλάδα', 'ποτάμια στην Πελοπόννησο', 'νησιά στο Αιγαίο Πέλαγος', 'λίμνες στην Κρήτη'], en: ['mountains in northern Greece', 'rivers in the Peloponnese', 'islands in the Aegean Sea', 'lakes in Crete'] },
    correct: 2,
    explanation: {
      el: 'Οι Κυκλάδες είναι νησιά στη μέση του Αιγαίου. Λέγονται έτσι γιατί σχηματίζουν έναν κύκλο γύρω από τη Δήλο.',
      en: 'The Cyclades are islands in the middle of the Aegean. They got their name because they form a circle around Delos.',
    },
  },
  {
    q: { el: 'Τα περίφημα κυκλαδικά ειδώλια είναι φτιαγμένα από…', en: 'The famous Cycladic figurines are made of…' },
    options: { el: ['ξύλο', 'μάρμαρο', 'χρυσό', 'πηλό'], en: ['wood', 'marble', 'gold', 'clay'] },
    correct: 1,
    explanation: {
      el: 'Τα νησιά των Κυκλάδων έχουν πολύ μάρμαρο. Οι καλλιτέχνες σκάλιζαν λευκές, λείες φιγούρες με σταυρωμένα χέρια.',
      en: 'The Cycladic islands have lots of marble. Artists carved smooth white figures with folded arms.',
    },
  },
  {
    q: { el: 'Η Ελένη είδε ένα κυκλαδικό ειδώλιο στο μουσείο. Πώς ήταν;', en: 'Eleni saw a Cycladic figurine at the museum. What did it look like?' },
    options: { el: ['Μια απλή, λεία φιγούρα με σταυρωμένα χέρια', 'Ένα άγαλμα με πολλά χρώματα και φτερά', 'Ένα μεγάλο άλογο από σίδερο', 'Ένας βασιλιάς πάνω σε άμαξα'], en: ['A simple, smooth figure with folded arms', 'A statue with many colours and wings', 'A big iron horse', 'A king on a chariot'] },
    correct: 0,
    explanation: {
      el: 'Τα κυκλαδικά ειδώλια είναι απλά και λιτά: λείο σώμα, σταυρωμένα χέρια και μια μικρή μύτη. Ούτε χρώματα ούτε πολλές λεπτομέρειες.',
      en: 'Cycladic figurines are simple and plain: a smooth body, folded arms and a little nose. No bright colours and few details.',
    },
  },

  // ── 7–11: the Minoans ─────────────────────────────────────────────────────
  {
    q: { el: 'Σε ποιο νησί έζησαν οι Μινωίτες;', en: 'On which island did the Minoans live?' },
    options: { el: ['Στη Ρόδο', 'Στην Κέρκυρα', 'Στην Κρήτη', 'Στη Μύκονο'], en: ['Rhodes', 'Corfu', 'Crete', 'Mykonos'] },
    correct: 2,
    explanation: {
      el: 'Οι Μινωίτες έζησαν στην Κρήτη, το μεγαλύτερο νησί της Ελλάδας. Ήταν σπουδαίοι ναυτικοί και έμποροι.',
      en: 'The Minoans lived on Crete, the biggest island in Greece. They were great sailors and traders.',
    },
  },
  {
    q: { el: 'Πώς λέγεται το πιο γνωστό παλάτι των Μινωιτών;', en: 'What is the most famous Minoan palace called?' },
    options: { el: ['Κνωσός', 'Μυκήνες', 'Ολυμπία', 'Δελφοί'], en: ['Knossos', 'Mycenae', 'Olympia', 'Delphi'] },
    correct: 0,
    explanation: {
      el: 'Το παλάτι της Κνωσού ήταν τεράστιο, με εκατοντάδες δωμάτια, σκάλες και διαδρόμους. Πολλοί λένε ότι μοιάζει με λαβύρινθο!',
      en: 'The palace of Knossos was huge, with hundreds of rooms, stairs and corridors. Many say it looks like a maze!',
    },
  },
  {
    q: { el: 'Ποιος ήταν ο Μίνωας, σύμφωνα με τον μύθο;', en: 'Who was Minos, according to the myth?' },
    options: { el: ['Ένας ζωγράφος από την Αθήνα', 'Ο βασιλιάς της Κρήτης', 'Ένας ψαράς από τη Μήλο', 'Ο στρατηγός των Μυκηνών'], en: ['A painter from Athens', 'The king of Crete', 'A fisherman from Milos', 'The general of Mycenae'] },
    correct: 1,
    explanation: {
      el: 'Ο Μίνωας ήταν ο μυθικός βασιλιάς της Κρήτης. Από το όνομά του πήραν το όνομά τους οι Μινωίτες!',
      en: 'Minos was the legendary king of Crete. The Minoans are named after him!',
    },
  },
  {
    q: { el: 'Ποιο μυθικό τέρας ζούσε μέσα στον Λαβύρινθο του Μίνωα;', en: 'Which mythical monster lived inside the Labyrinth of Minos?' },
    options: { el: ['Ο Κύκλωπας', 'Ο Κέρβερος', 'Η Μέδουσα', 'Ο Μινώταυρος'], en: ['The Cyclops', 'Cerberus', 'Medusa', 'The Minotaur'] },
    correct: 3,
    explanation: {
      el: 'Ο Μινώταυρος είχε σώμα ανθρώπου και κεφάλι ταύρου. Ο Θησέας τον νίκησε και βρήκε την έξοδο με τον μίτο της Αριάδνης.',
      en: 'The Minotaur had a man\'s body and a bull\'s head. Theseus beat him and found the way out with Ariadne\'s thread.',
    },
  },
  {
    q: { el: 'Σε μια τοιχογραφία της Κνωσού, νέοι κάνουν τούμπες πάνω από ένα ζώο. Ποιο ζώο;', en: 'In a Knossos wall painting, young people somersault over an animal. Which animal?' },
    options: { el: ['Ένα άλογο', 'Έναν ταύρο', 'Ένα λιοντάρι', 'Έναν ελέφαντα'], en: ['A horse', 'A bull', 'A lion', 'An elephant'] },
    correct: 1,
    explanation: {
      el: 'Οι Μινωίτες αγαπούσαν τον ταύρο. Στις τοιχογραφίες τους βλέπουμε ταυροκαθάψια: αθλητές που πηδούν πάνω από τον ταύρο!',
      en: 'The Minoans loved the bull. Their wall paintings show bull-leaping: athletes jumping over a bull!',
    },
  },

  // ── 12–15: the Mycenaeans ─────────────────────────────────────────────────
  {
    q: { el: 'Σε ποιο μέρος της Ελλάδας βρίσκονται οι Μυκήνες;', en: 'In which part of Greece is Mycenae?' },
    options: { el: ['Στην Πελοπόννησο', 'Στην Κρήτη', 'Στη Μακεδονία', 'Στα Δωδεκάνησα'], en: ['In the Peloponnese', 'On Crete', 'In Macedonia', 'In the Dodecanese'] },
    correct: 0,
    explanation: {
      el: 'Οι Μυκήνες είναι χτισμένες πάνω σε λόφο στην Πελοπόννησο, κοντά στο Άργος. Από εκεί πήραν το όνομά τους οι Μυκηναίοι.',
      en: 'Mycenae is built on a hill in the Peloponnese, near Argos. The Mycenaeans are named after it.',
    },
  },
  {
    q: { el: 'Ποια ζώα είναι σκαλισμένα πάνω από τη μεγάλη πύλη των Μυκηνών;', en: 'Which animals are carved above the great gate of Mycenae?' },
    options: { el: ['Δύο αετοί', 'Δύο ταύροι', 'Δύο λιοντάρια', 'Δύο άλογα'], en: ['Two eagles', 'Two bulls', 'Two lions', 'Two horses'] },
    correct: 2,
    explanation: {
      el: 'Γι\' αυτό λέγεται Πύλη των Λεόντων! Δύο λιοντάρια στέκονται απέναντι σε μια κολόνα και φυλάνε την είσοδο.',
      en: 'That is why it is called the Lion Gate! Two lions stand facing a column and guard the entrance.',
    },
  },
  {
    q: { el: 'Τα τείχη των Μυκηνών είναι φτιαγμένα από τεράστιες πέτρες. Πώς τα ονόμασαν οι αρχαίοι;', en: 'The walls of Mycenae are made of gigantic stones. What did the ancient Greeks call them?' },
    options: { el: ['Μινωικά τείχη', 'Κυκλώπεια τείχη', 'Μαρμάρινα τείχη', 'Χρυσά τείχη'], en: ['Minoan walls', 'Cyclopean walls', 'Marble walls', 'Golden walls'] },
    correct: 1,
    explanation: {
      el: 'Οι πέτρες είναι τόσο μεγάλες που οι άνθρωποι πίστευαν ότι μόνο οι γίγαντες Κύκλωπες μπορούσαν να τις σηκώσουν. Έτσι τα είπαν Κυκλώπεια.',
      en: 'The stones are so big that people believed only the giant Cyclopes could lift them. So they called the walls Cyclopean.',
    },
  },
  {
    q: { el: 'Ο Γιώργος είδε στο μουσείο μια χρυσή μάσκα από τις Μυκήνες. Τι ήταν;', en: 'Giorgos saw a gold mask from Mycenae at the museum. What was it?' },
    options: { el: ['Μάσκα για καρναβάλι', 'Μάσκα που έβαζαν σε σπουδαίους βασιλιάδες όταν πέθαιναν', 'Μάσκα για να πολεμούν οι στρατιώτες', 'Μάσκα για το θέατρο'], en: ['A carnival mask', 'A mask placed on important kings when they died', 'A mask soldiers wore in battle', 'A theatre mask'] },
    correct: 1,
    explanation: {
      el: 'Οι Μυκηναίοι έθαβαν τους βασιλιάδες τους με χρυσές μάσκες και χρυσά κοσμήματα. Η πιο γνωστή λέγεται «μάσκα του Αγαμέμνονα».',
      en: 'The Mycenaeans buried their kings with gold masks and gold jewellery. The most famous one is called the “mask of Agamemnon”.',
    },
  },

  // ── 16–18: Linear B ───────────────────────────────────────────────────────
  {
    q: { el: 'Τι είναι η Γραμμική Β;', en: 'What is Linear B?' },
    options: { el: ['Ένα είδος αγγείου', 'Ένα παιχνίδι με πέτρες', 'Μια γραφή των Μυκηναίων', 'Ένας χορός της Κρήτης'], en: ['A kind of vase', 'A game played with stones', 'A writing system of the Mycenaeans', 'A dance from Crete'] },
    correct: 2,
    explanation: {
      el: 'Η Γραμμική Β είναι μια γραφή που χρησιμοποιούσαν οι Μυκηναίοι. Είναι η πιο παλιά γραφή της ελληνικής γλώσσας που ξέρουμε!',
      en: 'Linear B is a writing system the Mycenaeans used. It is the oldest known writing of the Greek language!',
    },
  },
  {
    q: { el: 'Πάνω σε τι έγραφαν οι Μυκηναίοι τη Γραμμική Β;', en: 'What did the Mycenaeans write Linear B on?' },
    options: { el: ['Σε χαρτί', 'Σε πινακίδες από πηλό', 'Σε δέρμα ζώου', 'Σε φύλλα δέντρων'], en: ['On paper', 'On clay tablets', 'On animal skin', 'On tree leaves'] },
    correct: 1,
    explanation: {
      el: 'Χάραζαν τα σημάδια σε μαλακό πηλό. Όταν τα παλάτια κάηκαν, ο πηλός ψήθηκε και οι πινακίδες σώθηκαν μέχρι σήμερα!',
      en: 'They scratched the signs into soft clay. When the palaces burned, the clay baked hard and the tablets survived until today!',
    },
  },
  {
    q: { el: 'Τι κυρίως έγραφαν οι Μυκηναίοι στις πινακίδες της Γραμμικής Β;', en: 'What did the Mycenaeans mostly write on the Linear B tablets?' },
    options: { el: ['Παραμύθια για παιδιά', 'Λίστες με ζώα, λάδι, σιτάρι και άλλα αγαθά του παλατιού', 'Τραγούδια και ποιήματα', 'Γράμματα σε φίλους'], en: ['Fairy tales for children', 'Lists of animals, oil, wheat and other palace goods', 'Songs and poems', 'Letters to friends'] },
    correct: 1,
    explanation: {
      el: 'Οι πινακίδες ήταν οι «λογαριασμοί» του παλατιού: πόσα πρόβατα, πόσο λάδι, πόσο σιτάρι. Δεν βρέθηκαν ιστορίες, μόνο λίστες!',
      en: 'The tablets were the palace “accounts”: how many sheep, how much oil, how much wheat. No stories were found, only lists!',
    },
  },
];
