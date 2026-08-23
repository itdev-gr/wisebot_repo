/**
 * Γ' Δημοτικού · Ιστορία · Οι Περιπέτειες του Οδυσσέα
 * ====================================================
 * Original questions on the Odyssey as a Γ' class meets it (story, not dates).
 * Language level: a child of 8–9. Nothing frightening — the Cyclops is tricked,
 * not hurt; the suitors do not appear.
 *
 * What the unit covers, in order:
 *   1–2   who Odysseus is and where he is coming from (Troy → Ithaca)
 *   3–6   the Cyclops Polyphemus: one eye, the name «Κανένας», the sheep escape
 *   7–8   Circe the sorceress and the pigs
 *   9–11  the Sirens: the song, the wax, the mast
 *   12    Calypso and her island
 *   13–16 Ithaca, Penelope's weaving trick, Telemachus
 *   17–18 Scylla and Charybdis — the narrow passage
 */
import type { QuizQuestion } from '../../../types';

export const GRADE3_HISTORY_ODYSSEUS: QuizQuestion[] = [
  // ── 1–2: who is Odysseus ──────────────────────────────────────────────────
  {
    q: { el: 'Ποιος ήταν ο Οδυσσέας;', en: 'Who was Odysseus?' },
    options: {
      el: ['Ένας θεός της θάλασσας', 'Ένας γίγαντας με ένα μάτι', 'Ο βασιλιάς της Ιθάκης', 'Ένας ναύτης από την Κρήτη'],
      en: ['A god of the sea', 'A giant with one eye', 'The king of Ithaca', 'A sailor from Crete'],
    },
    correct: 2,
    explanation: {
      el: 'Ο Οδυσσέας ήταν ο βασιλιάς της Ιθάκης, ενός μικρού νησιού. Ήταν πολύ έξυπνος και πολυμήχανος.',
      en: 'Odysseus was the king of Ithaca, a small island. He was very clever and full of ideas.',
    },
  },
  {
    q: { el: 'Από ποιον πόλεμο γύριζε ο Οδυσσέας όταν άρχισαν οι περιπέτειές του;', en: 'Which war was Odysseus coming home from when his adventures began?' },
    options: {
      el: ['Από τον πόλεμο της Σπάρτης', 'Από τον πόλεμο της Τροίας', 'Από τον πόλεμο της Αθήνας', 'Από τον πόλεμο της Κρήτης'],
      en: ['The war of Sparta', 'The war of Troy', 'The war of Athens', 'The war of Crete'],
    },
    correct: 1,
    explanation: {
      el: 'Μετά τον πόλεμο της Τροίας ο Οδυσσέας ξεκίνησε για το σπίτι του. Το ταξίδι κράτησε δέκα ολόκληρα χρόνια!',
      en: 'After the war of Troy, Odysseus set off for home. The journey took ten whole years!',
    },
  },

  // ── 3–6: the Cyclops Polyphemus ───────────────────────────────────────────
  {
    q: { el: 'Πόσα μάτια είχε ο Κύκλωπας;', en: 'How many eyes did the Cyclops have?' },
    options: { el: ['Ένα', 'Δύο', 'Τρία', 'Κανένα'], en: ['One', 'Two', 'Three', 'None'] },
    correct: 0,
    explanation: {
      el: 'Ο Κύκλωπας ήταν ένας τεράστιος γίγαντας με ένα μόνο μάτι στη μέση του μετώπου του.',
      en: 'The Cyclops was a huge giant with just one eye in the middle of his forehead.',
    },
  },
  {
    q: { el: 'Πώς λεγόταν ο Κύκλωπας που συνάντησε ο Οδυσσέας;', en: 'What was the name of the Cyclops Odysseus met?' },
    options: { el: ['Ποσειδώνας', 'Ηρακλής', 'Αχιλλέας', 'Πολύφημος'], en: ['Poseidon', 'Heracles', 'Achilles', 'Polyphemus'] },
    correct: 3,
    explanation: {
      el: 'Ο Κύκλωπας λεγόταν Πολύφημος. Ζούσε σε μια σπηλιά και φύλαγε τα πρόβατά του.',
      en: 'The Cyclops was called Polyphemus. He lived in a cave and looked after his sheep.',
    },
  },
  {
    q: { el: 'Ποιο όνομα είπε ο Οδυσσέας στον Πολύφημο για να τον ξεγελάσει;', en: 'What name did Odysseus give Polyphemus to trick him?' },
    options: { el: ['«Βασιλιάς»', '«Κανένας»', '«Ναύτης»', '«Ξένος»'], en: ['“King”', '“Nobody”', '“Sailor”', '“Stranger”'] },
    correct: 1,
    explanation: {
      el: 'Ο Οδυσσέας είπε ότι τον λένε «Κανένας». Έτσι, όταν ο Πολύφημος φώναζε βοήθεια, έλεγε «ο Κανένας με πείραξε» και κανείς δεν ήρθε!',
      en: 'Odysseus said his name was “Nobody”. So when Polyphemus shouted for help, he said “Nobody is hurting me” and no one came!',
    },
  },
  {
    q: { el: 'Πώς βγήκαν ο Οδυσσέας και οι σύντροφοί του από τη σπηλιά του Κύκλωπα;', en: 'How did Odysseus and his companions get out of the Cyclops’s cave?' },
    options: {
      el: ['Έσκαψαν μια τρύπα στον τοίχο', 'Πέταξαν με φτερά', 'Κρύφτηκαν κάτω από τα πρόβατα', 'Τους άνοιξε ο Κύκλωπας την πόρτα'],
      en: ['They dug a hole in the wall', 'They flew with wings', 'They hid under the sheep', 'The Cyclops opened the door for them'],
    },
    correct: 2,
    explanation: {
      el: 'Κρατήθηκαν κάτω από τις κοιλιές των προβάτων. Ο Κύκλωπας χάιδευε τις πλάτες τους και δεν κατάλαβε τίποτα!',
      en: 'They held on under the sheep’s bellies. The Cyclops patted the sheep’s backs and noticed nothing!',
    },
  },

  // ── 7–8: Circe ────────────────────────────────────────────────────────────
  {
    q: { el: 'Σε τι μεταμόρφωσε η Κίρκη τους συντρόφους του Οδυσσέα;', en: 'What did Circe turn Odysseus’s companions into?' },
    options: { el: ['Σε γουρούνια', 'Σε πουλιά', 'Σε ψάρια', 'Σε πέτρες'], en: ['Pigs', 'Birds', 'Fish', 'Stones'] },
    correct: 0,
    explanation: {
      el: 'Η Κίρκη τους έδωσε ένα μαγικό ποτό και τους έκανε γουρούνια. Ο Οδυσσέας την έπεισε να τους ξανακάνει ανθρώπους.',
      en: 'Circe gave them a magic drink and turned them into pigs. Odysseus made her turn them back into people.',
    },
  },
  {
    q: { el: 'Τι ήταν η Κίρκη;', en: 'What was Circe?' },
    options: { el: ['Μια βασίλισσα της Τροίας', 'Μια ναυτικός', 'Μια γοργόνα', 'Μια μάγισσα'], en: ['A queen of Troy', 'A sailor', 'A mermaid', 'A sorceress'] },
    correct: 3,
    explanation: {
      el: 'Η Κίρκη ήταν μια μάγισσα που ζούσε σε ένα νησί. Ήξερε μαγικά βότανα και ξόρκια.',
      en: 'Circe was a sorceress who lived on an island. She knew magic herbs and spells.',
    },
  },

  // ── 9–11: the Sirens ──────────────────────────────────────────────────────
  {
    q: { el: 'Τι έκαναν οι Σειρήνες για να τραβήξουν τα καράβια κοντά τους;', en: 'What did the Sirens do to draw ships towards them?' },
    options: { el: ['Φώναζαν δυνατά', 'Τραγουδούσαν γλυκά', 'Άναβαν φωτιές', 'Χόρευαν στα βράχια'], en: ['They shouted loudly', 'They sang sweetly', 'They lit fires', 'They danced on the rocks'] },
    correct: 1,
    explanation: {
      el: 'Οι Σειρήνες τραγουδούσαν τόσο γλυκά, που οι ναύτες ξεχνούσαν τα πάντα και οδηγούσαν τα καράβια στα βράχια.',
      en: 'The Sirens sang so sweetly that sailors forgot everything and steered their ships onto the rocks.',
    },
  },
  {
    q: { el: 'Τι έβαλαν οι σύντροφοι του Οδυσσέα στα αυτιά τους για να μην ακούν τις Σειρήνες;', en: 'What did Odysseus’s companions put in their ears so they would not hear the Sirens?' },
    options: { el: ['Βαμβάκι', 'Χώμα', 'Κερί', 'Νερό'], en: ['Cotton', 'Soil', 'Wax', 'Water'] },
    correct: 2,
    explanation: {
      el: 'Έβαλαν κερί στα αυτιά τους. Έτσι δεν άκουγαν το τραγούδι και κωπηλατούσαν ήσυχα μπροστά.',
      en: 'They put wax in their ears. That way they could not hear the song and kept rowing calmly ahead.',
    },
  },
  {
    q: { el: 'Ο Οδυσσέας ήθελε να ακούσει τις Σειρήνες. Τι ζήτησε από τους συντρόφους του;', en: 'Odysseus wanted to hear the Sirens. What did he ask his companions to do?' },
    options: {
      el: ['Να τον δέσουν στο κατάρτι', 'Να τον κλείσουν στο αμπάρι', 'Να τον αφήσουν σε μια βάρκα', 'Να τραγουδούν πιο δυνατά'],
      en: ['To tie him to the mast', 'To lock him below deck', 'To leave him in a small boat', 'To sing louder'],
    },
    correct: 0,
    explanation: {
      el: 'Τον έδεσαν γερά στο κατάρτι. Όσο κι αν φώναζε να τον λύσουν, αυτοί δεν τον άκουγαν και το καράβι πέρασε ασφαλές.',
      en: 'They tied him tightly to the mast. However much he shouted to be untied, they could not hear him and the ship passed safely.',
    },
  },

  // ── 12: Calypso ───────────────────────────────────────────────────────────
  {
    q: { el: 'Ποια ήταν η Καλυψώ;', en: 'Who was Calypso?' },
    options: {
      el: ['Η κόρη του Οδυσσέα', 'Μια Σειρήνα', 'Η βασίλισσα της Τροίας', 'Μια νύμφη που κράτησε τον Οδυσσέα στο νησί της'],
      en: ['Odysseus’s daughter', 'A Siren', 'The queen of Troy', 'A nymph who kept Odysseus on her island'],
    },
    correct: 3,
    explanation: {
      el: 'Η Καλυψώ ήταν μια όμορφη νύμφη. Κράτησε τον Οδυσσέα στο νησί της πολλά χρόνια, αλλά εκείνος ήθελε μόνο να γυρίσει σπίτι του.',
      en: 'Calypso was a beautiful nymph. She kept Odysseus on her island for many years, but all he wanted was to go home.',
    },
  },

  // ── 13–16: Ithaca, Penelope, Telemachus ───────────────────────────────────
  {
    q: { el: 'Τι είναι η Ιθάκη;', en: 'What is Ithaca?' },
    options: { el: ['Ένα βουνό', 'Ένα νησί', 'Ένα ποτάμι', 'Ένα καράβι'], en: ['A mountain', 'An island', 'A river', 'A ship'] },
    correct: 1,
    explanation: {
      el: 'Η Ιθάκη είναι ένα νησί στο Ιόνιο πέλαγος. Ήταν η πατρίδα του Οδυσσέα και εκεί ήθελε να γυρίσει.',
      en: 'Ithaca is an island in the Ionian Sea. It was Odysseus’s homeland, and that is where he wanted to return.',
    },
  },
  {
    q: { el: 'Ποια ήταν η Πηνελόπη;', en: 'Who was Penelope?' },
    options: { el: ['Η μητέρα του Οδυσσέα', 'Η αδερφή του Οδυσσέα', 'Η γυναίκα του Οδυσσέα', 'Η κόρη της Κίρκης'], en: ['Odysseus’s mother', 'Odysseus’s sister', 'Odysseus’s wife', 'Circe’s daughter'] },
    correct: 2,
    explanation: {
      el: 'Η Πηνελόπη ήταν η γυναίκα του Οδυσσέα. Τον περίμενε πιστά στην Ιθάκη είκοσι χρόνια.',
      en: 'Penelope was Odysseus’s wife. She waited faithfully for him in Ithaca for twenty years.',
    },
  },
  {
    q: { el: 'Με ποιο κόλπο κέρδιζε χρόνο η Πηνελόπη όσο περίμενε τον Οδυσσέα;', en: 'What trick did Penelope use to gain time while she waited for Odysseus?' },
    options: {
      el: ['Ύφαινε τη μέρα και ξήλωνε τη νύχτα', 'Κρυβόταν στο δάσος', 'Έφευγε με καράβι', 'Έκανε πως δεν καταλαβαίνει'],
      en: ['She wove by day and unpicked it at night', 'She hid in the forest', 'She sailed away on a ship', 'She pretended not to understand'],
    },
    correct: 0,
    explanation: {
      el: 'Η Πηνελόπη είπε ότι θα διαλέξει νέο σύζυγο όταν τελειώσει το ύφασμά της. Όμως κάθε νύχτα ξήλωνε ό,τι είχε υφάνει τη μέρα!',
      en: 'Penelope said she would choose a new husband when her weaving was finished. But every night she unpicked what she had woven that day!',
    },
  },
  {
    q: { el: 'Ποιος ήταν ο Τηλέμαχος;', en: 'Who was Telemachus?' },
    options: { el: ['Ο αδερφός του Οδυσσέα', 'Ο πατέρας της Πηνελόπης', 'Ο καλύτερος φίλος του Οδυσσέα', 'Ο γιος του Οδυσσέα'], en: ['Odysseus’s brother', 'Penelope’s father', 'Odysseus’s best friend', 'Odysseus’s son'] },
    correct: 3,
    explanation: {
      el: 'Ο Τηλέμαχος ήταν ο γιος του Οδυσσέα και της Πηνελόπης. Όταν μεγάλωσε, ταξίδεψε για να μάθει νέα για τον πατέρα του.',
      en: 'Telemachus was the son of Odysseus and Penelope. When he grew up, he travelled to find news of his father.',
    },
  },

  // ── 17–18: Scylla and Charybdis ───────────────────────────────────────────
  {
    q: { el: 'Τι ήταν η Σκύλλα;', en: 'What was Scylla?' },
    options: { el: ['Ένα γρήγορο καράβι', 'Ένα θαλάσσιο τέρας με έξι κεφάλια', 'Μια μάγισσα', 'Ένα νησί με ψηλά βράχια'], en: ['A fast ship', 'A sea monster with six heads', 'A sorceress', 'An island with tall cliffs'] },
    correct: 1,
    explanation: {
      el: 'Η Σκύλλα ήταν ένα θαλάσσιο τέρας με έξι κεφάλια που ζούσε σε μια σπηλιά πάνω από τη θάλασσα.',
      en: 'Scylla was a sea monster with six heads that lived in a cave above the sea.',
    },
  },
  {
    q: { el: 'Απέναντι από τη Σκύλλα ήταν η Χάρυβδη. Τι έκανε η Χάρυβδη;', en: 'Opposite Scylla was Charybdis. What did Charybdis do?' },
    options: {
      el: ['Τραγουδούσε στους ναύτες', 'Έριχνε βράχους στα καράβια', 'Ρουφούσε το νερό της θάλασσας σαν ρουφήχτρα', 'Έκρυβε τον ήλιο με σύννεφα'],
      en: ['It sang to the sailors', 'It threw rocks at ships', 'It sucked in the sea water like a whirlpool', 'It hid the sun with clouds'],
    },
    correct: 2,
    explanation: {
      el: 'Η Χάρυβδη ρουφούσε το νερό της θάλασσας σαν τεράστια ρουφήχτρα. Ο Οδυσσέας έπρεπε να περάσει ανάμεσα στη Σκύλλα και στη Χάρυβδη — ένα πολύ στενό πέρασμα!',
      en: 'Charybdis sucked in the sea water like a giant whirlpool. Odysseus had to pass between Scylla and Charybdis — a very narrow passage!',
    },
  },
];
