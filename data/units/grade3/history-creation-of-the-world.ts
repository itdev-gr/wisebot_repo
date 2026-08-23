/**
 * Γ' Δημοτικού · Ιστορία · Η Δημιουργία του Κόσμου & οι Θεοί
 * ===========================================================
 * Original questions on the curriculum topic (nothing from ebooks.edu.gr). Language level: a child of 8–9.
 *
 * What the unit covers, in order:
 *   1–4   the beginning: Chaos, Gaia (Earth), Uranus (Sky), their children the Titans
 *   5–9   Cronus and Rhea, the hidden baby Zeus on Crete, the wrapped stone
 *   10–13 the war of the gods, the Titans sent to Tartarus, Zeus and his brothers share the world
 *   14–16 the Twelve Olympians and their home, Mount Olympus
 *   17–18 Prometheus, the Titan who brought fire to people
 */
import type { QuizQuestion } from '../../../types';

export const GRADE3_HISTORY_CREATION_OF_THE_WORLD: QuizQuestion[] = [
  // ── 1–4: the beginning ──────────────────────────────────────────────────────
  {
    q: { el: 'Σύμφωνα με τον μύθο, τι υπήρχε πριν από όλα;', en: 'According to the myth, what existed before everything else?' },
    options: { el: ['Η θάλασσα', 'Ο Όλυμπος', 'Το Χάος', 'Ο ήλιος'], en: ['The sea', 'Olympus', 'Chaos', 'The sun'] },
    correct: 2,
    explanation: {
      el: 'Στην αρχή υπήρχε μόνο το Χάος, ένα απέραντο, σκοτεινό κενό. Μέσα από αυτό γεννήθηκε ο κόσμος.',
      en: 'In the beginning there was only Chaos, an endless dark emptiness. The world was born out of it.',
    },
  },
  {
    q: { el: 'Η Γαία είναι η θεά…', en: 'Gaia is the goddess of…' },
    options: { el: ['της Γης', 'του νερού', 'της νύχτας', 'της φωτιάς'], en: ['the Earth', 'water', 'the night', 'fire'] },
    correct: 0,
    explanation: {
      el: 'Η Γαία είναι η Γη, η μητέρα όλων. Από το Χάος γεννήθηκε πρώτη και πάνω της φύτρωσαν βουνά και θάλασσες.',
      en: 'Gaia is the Earth, the mother of all. She was born first from Chaos, and mountains and seas grew on her.',
    },
  },
  {
    q: { el: 'Ποιος ήταν ο Ουρανός;', en: 'Who was Uranus?' },
    options: { el: ['Ο θεός της θάλασσας', 'Ο Ουρανός που σκεπάζει τη Γη', 'Ένα ψηλό βουνό', 'Ο βασιλιάς των ανθρώπων'], en: ['The god of the sea', 'The Sky that covers the Earth', 'A tall mountain', 'The king of humans'] },
    correct: 1,
    explanation: {
      el: 'Ο Ουρανός είναι ο έναστρος ουρανός που απλώνεται πάνω από τη Γαία. Οι δυο τους έγιναν το πρώτο ζευγάρι.',
      en: 'Uranus is the starry Sky that stretches over Gaia. The two of them became the first couple.',
    },
  },
  {
    q: { el: 'Πώς λέγονται τα παιδιά της Γαίας και του Ουρανού;', en: 'What are the children of Gaia and Uranus called?' },
    options: { el: ['Ολύμπιοι', 'Ήρωες', 'Κένταυροι', 'Τιτάνες'], en: ['Olympians', 'Heroes', 'Centaurs', 'Titans'] },
    correct: 3,
    explanation: {
      el: 'Οι Τιτάνες ήταν τα γιγάντια παιδιά της Γαίας και του Ουρανού. Ο πιο μικρός από αυτούς ήταν ο Κρόνος.',
      en: 'The Titans were the giant children of Gaia and Uranus. The youngest of them was Cronus.',
    },
  },

  // ── 5–9: Cronus, Rhea and baby Zeus ─────────────────────────────────────────
  {
    q: { el: 'Ποιος Τιτάνας πήρε την εξουσία από τον Ουρανό και έγινε βασιλιάς του κόσμου;', en: 'Which Titan took power from Uranus and became king of the world?' },
    options: { el: ['Ο Προμηθέας', 'Ο Κρόνος', 'Ο Δίας', 'Ο Άτλαντας'], en: ['Prometheus', 'Cronus', 'Zeus', 'Atlas'] },
    correct: 1,
    explanation: {
      el: 'Ο Κρόνος, ο μικρότερος Τιτάνας, πήρε τον θρόνο από τον πατέρα του, τον Ουρανό, και κυβέρνησε τον κόσμο.',
      en: 'Cronus, the youngest Titan, took the throne from his father Uranus and ruled the world.',
    },
  },
  {
    q: { el: 'Πώς λεγόταν η γυναίκα του Κρόνου;', en: 'What was the name of Cronus’ wife?' },
    options: { el: ['Ρέα', 'Ήρα', 'Αθηνά', 'Γαία'], en: ['Rhea', 'Hera', 'Athena', 'Gaia'] },
    correct: 0,
    explanation: {
      el: 'Η Ρέα ήταν Τιτανίδα και γυναίκα του Κρόνου. Μαζί έκαναν έξι παιδιά, και το πιο μικρό ήταν ο Δίας.',
      en: 'Rhea was a Titaness and the wife of Cronus. Together they had six children, and the youngest was Zeus.',
    },
  },
  {
    q: { el: 'Γιατί ο Κρόνος κατάπινε τα παιδιά του μόλις γεννιούνταν;', en: 'Why did Cronus swallow his children as soon as they were born?' },
    options: { el: ['Γιατί πεινούσε', 'Γιατί του το ζήτησε η Ρέα', 'Γιατί φοβόταν ότι ένα παιδί του θα του έπαιρνε τον θρόνο', 'Γιατί ήθελε να τα κρύψει από τη Γαία'], en: ['Because he was hungry', 'Because Rhea asked him to', 'Because he feared one of his children would take his throne', 'Because he wanted to hide them from Gaia'] },
    correct: 2,
    explanation: {
      el: 'Μια προφητεία έλεγε ότι ένα παιδί του θα τον έριχνε από τον θρόνο. Ο Κρόνος φοβόταν και τα κατάπινε για να μείνει βασιλιάς.',
      en: 'A prophecy said one of his children would push him off the throne. Cronus was afraid, so he swallowed them to stay king.',
    },
  },
  {
    q: { el: 'Πού έκρυψε η Ρέα τον μικρό Δία για να τον σώσει;', en: 'Where did Rhea hide baby Zeus to save him?' },
    options: { el: ['Στον βυθό της θάλασσας', 'Σε μια σπηλιά στην Κρήτη', 'Στην κορυφή του Ολύμπου', 'Σε ένα παλάτι στην Αθήνα'], en: ['At the bottom of the sea', 'In a cave on Crete', 'On the top of Olympus', 'In a palace in Athens'] },
    correct: 1,
    explanation: {
      el: 'Η Ρέα έκρυψε τον Δία σε μια σπηλιά στην Κρήτη. Εκεί τον μεγάλωσαν νύμφες και τον θήλασε η κατσίκα Αμάλθεια.',
      en: 'Rhea hid Zeus in a cave on Crete. Nymphs raised him there, and the goat Amaltheia fed him with her milk.',
    },
  },
  {
    q: { el: 'Τι έδωσε η Ρέα στον Κρόνο τυλιγμένο σε πάνες, αντί για το μωρό;', en: 'What did Rhea give Cronus wrapped in baby clothes instead of the baby?' },
    options: { el: ['Μια κούκλα', 'Ένα αρνάκι', 'Ένα ξύλο', 'Μια πέτρα'], en: ['A doll', 'A little lamb', 'A piece of wood', 'A stone'] },
    correct: 3,
    explanation: {
      el: 'Η Ρέα τύλιξε μια πέτρα σε πάνες και ο Κρόνος την κατάπιε νομίζοντας ότι είναι το μωρό. Έτσι ο Δίας σώθηκε!',
      en: 'Rhea wrapped a stone in baby clothes, and Cronus swallowed it thinking it was the baby. That is how Zeus was saved!',
    },
  },

  // ── 10–13: the war of the gods and the sharing of the world ─────────────────
  {
    q: { el: 'Όταν ο Δίας μεγάλωσε, έγινε μεγάλος πόλεμος ανάμεσα στους θεούς και τους Τιτάνες. Ποιος νίκησε;', en: 'When Zeus grew up, a great war broke out between the gods and the Titans. Who won?' },
    options: { el: ['Ο Δίας και τα αδέλφια του', 'Ο Κρόνος και οι Τιτάνες', 'Κανείς, έκαναν ειρήνη', 'Οι άνθρωποι'], en: ['Zeus and his siblings', 'Cronus and the Titans', 'No one, they made peace', 'The humans'] },
    correct: 0,
    explanation: {
      el: 'Ο Δίας ελευθέρωσε τα αδέλφια του και μαζί πολέμησαν τους Τιτάνες για δέκα χρόνια. Στο τέλος νίκησαν οι θεοί.',
      en: 'Zeus freed his brothers and sisters, and together they fought the Titans for ten years. In the end the gods won.',
    },
  },
  {
    q: { el: 'Πού έστειλε ο Δίας τους Τιτάνες μετά τη νίκη του;', en: 'Where did Zeus send the Titans after his victory?' },
    options: { el: ['Στην Κρήτη', 'Στο φεγγάρι', 'Στα Τάρταρα, βαθιά κάτω από τη Γη', 'Στον Όλυμπο'], en: ['To Crete', 'To the moon', 'To Tartarus, deep under the Earth', 'To Olympus'] },
    correct: 2,
    explanation: {
      el: 'Ο Δίας έκλεισε τους Τιτάνες στα Τάρταρα, ένα μέρος πολύ βαθιά κάτω από τη Γη, για να μην ξαναβγούν.',
      en: 'Zeus locked the Titans in Tartarus, a place very deep under the Earth, so they could never come out again.',
    },
  },
  {
    q: { el: 'Ο Δίας και τα δύο αδέλφια του μοιράστηκαν τον κόσμο. Ποιος πήρε τη θάλασσα;', en: 'Zeus and his two brothers shared the world. Who got the sea?' },
    options: { el: ['Ο Άδης', 'Ο Ποσειδώνας', 'Ο Απόλλωνας', 'Ο Ερμής'], en: ['Hades', 'Poseidon', 'Apollo', 'Hermes'] },
    correct: 1,
    explanation: {
      el: 'Ο Ποσειδώνας πήρε τη θάλασσα, ο Άδης τον Κάτω Κόσμο και ο Δίας τον ουρανό. Το σύμβολο του Ποσειδώνα είναι η τρίαινα.',
      en: 'Poseidon got the sea, Hades the Underworld, and Zeus the sky. Poseidon’s symbol is the trident.',
    },
  },
  {
    q: { el: 'Ποιο είναι το όπλο του Δία;', en: 'What is Zeus’ weapon?' },
    options: { el: ['Το τόξο', 'Η τρίαινα', 'Το σπαθί', 'Ο κεραυνός'], en: ['The bow', 'The trident', 'The sword', 'The thunderbolt'] },
    correct: 3,
    explanation: {
      el: 'Ο Δίας κρατάει τον κεραυνό. Τον έφτιαξαν για εκείνον οι Κύκλωπες και με αυτόν νίκησε τους Τιτάνες.',
      en: 'Zeus holds the thunderbolt. The Cyclopes made it for him, and with it he defeated the Titans.',
    },
  },

  // ── 14–16: the Twelve Olympians and Mount Olympus ───────────────────────────
  {
    q: { el: 'Πόσοι ήταν οι μεγάλοι θεοί του Ολύμπου;', en: 'How many great gods of Olympus were there?' },
    options: { el: ['Δώδεκα', 'Δέκα', 'Τρεις', 'Είκοσι'], en: ['Twelve', 'Ten', 'Three', 'Twenty'] },
    correct: 0,
    explanation: {
      el: 'Οι μεγάλοι θεοί ήταν δώδεκα, γι’ αυτό τους λέμε «Δωδεκάθεο». Αρχηγός τους ήταν ο Δίας.',
      en: 'There were twelve great gods, which is why we call them the Twelve Olympians. Their leader was Zeus.',
    },
  },
  {
    q: { el: 'Ποια θεά είναι η θεά της σοφίας, που γεννήθηκε από το κεφάλι του Δία;', en: 'Which goddess is the goddess of wisdom, born from the head of Zeus?' },
    options: { el: ['Η Ήρα', 'Η Άρτεμη', 'Η Αθηνά', 'Η Αφροδίτη'], en: ['Hera', 'Artemis', 'Athena', 'Aphrodite'] },
    correct: 2,
    explanation: {
      el: 'Η Αθηνά, η θεά της σοφίας, πετάχτηκε πάνοπλη από το κεφάλι του Δία. Η πόλη της Αθήνας πήρε το όνομά της.',
      en: 'Athena, the goddess of wisdom, sprang fully armed from the head of Zeus. The city of Athens is named after her.',
    },
  },
  {
    q: { el: 'Ο Όλυμπος, το σπίτι των θεών, είναι…', en: 'Olympus, the home of the gods, is…' },
    options: { el: ['ένα νησί στο Αιγαίο', 'το ψηλότερο βουνό της Ελλάδας', 'ένας ποταμός στη Θεσσαλία', 'ένα σύννεφο που ταξιδεύει'], en: ['an island in the Aegean', 'the highest mountain in Greece', 'a river in Thessaly', 'a travelling cloud'] },
    correct: 1,
    explanation: {
      el: 'Ο Όλυμπος είναι το ψηλότερο βουνό της Ελλάδας. Οι αρχαίοι πίστευαν ότι οι θεοί ζούσαν στην κορυφή του, πάνω από τα σύννεφα.',
      en: 'Olympus is the highest mountain in Greece. The ancient Greeks believed the gods lived on its peak, above the clouds.',
    },
  },

  // ── 17–18: Prometheus ───────────────────────────────────────────────────────
  {
    q: { el: 'Τι έδωσε ο Προμηθέας στους ανθρώπους, κρυφά από τον Δία;', en: 'What did Prometheus give to humans, secretly from Zeus?' },
    options: { el: ['Το νερό', 'Το σιτάρι', 'Τη μουσική', 'Τη φωτιά'], en: ['Water', 'Wheat', 'Music', 'Fire'] },
    correct: 3,
    explanation: {
      el: 'Ο Προμηθέας αγαπούσε τους ανθρώπους. Έκλεψε τη φωτιά από τους θεούς και τους την έδωσε, για να ζεσταίνονται και να μαγειρεύουν.',
      en: 'Prometheus loved humans. He stole fire from the gods and gave it to them, so they could keep warm and cook.',
    },
  },
  {
    q: { el: 'Πώς κατάφερε ο Προμηθέας να κρύψει τη φωτιά όταν την έκλεψε;', en: 'How did Prometheus manage to hide the fire when he stole it?' },
    options: { el: ['Μέσα σε ένα πήλινο κανάτι', 'Μέσα σε ένα κούφιο καλάμι', 'Κάτω από τον μανδύα του', 'Μέσα σε ένα σακί'], en: ['Inside a clay jug', 'Inside a hollow reed', 'Under his cloak', 'Inside a sack'] },
    correct: 1,
    explanation: {
      el: 'Ο Προμηθέας έκρυψε τη σπίθα μέσα σε ένα κούφιο καλάμι και την κατέβασε στη Γη. Το όνομά του σημαίνει «αυτός που σκέφτεται από πριν».',
      en: 'Prometheus hid the spark inside a hollow reed and carried it down to Earth. His name means “the one who thinks ahead”.',
    },
  },
];
