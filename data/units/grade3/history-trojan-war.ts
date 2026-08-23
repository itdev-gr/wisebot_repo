/**
 * Γ' Δημοτικού · Ιστορία · Ο Τρωικός Πόλεμος
 * ============================================
 * Original questions on the myth as a Γ' class meets it (curriculum topics only —
 * nothing from ebooks.edu.gr). Language level: a child of 8–9. Told as a story,
 * without battle details.
 *
 * What the unit covers, in order:
 *   1–2   Helen: the most beautiful woman, wife of Menelaus, taken to Troy
 *   3–4   Paris: the prince of Troy who took her — the reason the war started
 *   5–7   Achilles: the fastest, bravest Greek, the river Styx, his heel
 *   8–9   Hector: the brave prince who protected Troy, son of King Priam
 *   10–11 Agamemnon: king of Mycenae, leader of all the Greeks, brother of Menelaus
 *   12–14 the Trojan Horse: Odysseus's trick, the hollow wooden horse
 *   15–16 Troy: a walled city near the sea in Asia Minor, a ten-year war
 *   17–18 the apple of discord: Eris, «για την πιο όμορφη», the three goddesses
 *
 * Distractors are the mix-ups children really make: Greek vs Trojan heroes,
 * Menelaus vs Agamemnon, Achilles vs Odysseus. The UI shuffles options.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE3_HISTORY_TROJAN_WAR: QuizQuestion[] = [
  // ── 1–2: Helen ──────────────────────────────────────────────────────────────
  {
    q: { el: 'Ποια ήταν η ωραία Ελένη;', en: 'Who was Helen of Troy?' },
    options: {
      el: ['Η πιο όμορφη γυναίκα της Ελλάδας', 'Μια θεά του Ολύμπου', 'Η βασίλισσα της Τροίας', 'Η μητέρα του Αχιλλέα'],
      en: ['The most beautiful woman in Greece', 'A goddess of Olympus', 'The queen of Troy', 'The mother of Achilles'],
    },
    correct: 0,
    explanation: {
      el: 'Η Ελένη ήταν η πιο όμορφη γυναίκα της Ελλάδας. Ο μύθος λέει ότι για χάρη της ξεκίνησε ο Τρωικός Πόλεμος.',
      en: 'Helen was the most beautiful woman in Greece. The myth says the Trojan War began because of her.',
    },
  },
  {
    q: { el: 'Ο άντρας της Ελένης ήταν ο Μενέλαος. Πού βασίλευε;', en: 'Helen\'s husband was Menelaus. Where was he king?' },
    options: {
      el: ['Στην Τροία', 'Στη Σπάρτη', 'Στην Αθήνα', 'Στην Ιθάκη'],
      en: ['In Troy', 'In Sparta', 'In Athens', 'In Ithaca'],
    },
    correct: 1,
    explanation: {
      el: 'Ο Μενέλαος ήταν βασιλιάς της Σπάρτης. Η Ελένη ζούσε μαζί του εκεί, πριν φύγει για την Τροία.',
      en: 'Menelaus was the king of Sparta. Helen lived there with him before she left for Troy.',
    },
  },

  // ── 3–4: Paris ──────────────────────────────────────────────────────────────
  {
    q: { el: 'Ποιος πήρε την Ελένη από τη Σπάρτη και την πήγε στην Τροία;', en: 'Who took Helen from Sparta and brought her to Troy?' },
    options: {
      el: ['Ο Αχιλλέας', 'Ο Οδυσσέας', 'Ο Πάρης', 'Ο Αγαμέμνονας'],
      en: ['Achilles', 'Odysseus', 'Paris', 'Agamemnon'],
    },
    correct: 2,
    explanation: {
      el: 'Ο Πάρης, ο πρίγκιπας της Τροίας, πήρε την Ελένη μαζί του. Έτσι ξεκίνησε ο πόλεμος.',
      en: 'Paris, the prince of Troy, took Helen away with him. That is how the war started.',
    },
  },
  {
    q: { el: 'Τι έκαναν οι Έλληνες όταν έμαθαν ότι η Ελένη ήταν στην Τροία;', en: 'What did the Greeks do when they learned Helen was in Troy?' },
    options: {
      el: ['Την ξέχασαν', 'Έστειλαν δώρα στον Πάρη', 'Έχτισαν μια νέα πόλη', 'Μάζεψαν στρατό και πλοία και ταξίδεψαν στην Τροία'],
      en: ['They forgot about her', 'They sent gifts to Paris', 'They built a new city', 'They gathered an army and ships and sailed to Troy'],
    },
    correct: 3,
    explanation: {
      el: 'Όλοι οι βασιλιάδες της Ελλάδας μάζεψαν στρατό και πλοία και ταξίδεψαν στην Τροία για να πάρουν πίσω την Ελένη.',
      en: 'All the kings of Greece gathered an army and ships and sailed to Troy to bring Helen back.',
    },
  },

  // ── 5–7: Achilles ───────────────────────────────────────────────────────────
  {
    q: { el: 'Ποιος ήταν ο πιο γενναίος και πιο γρήγορος ήρωας των Ελλήνων;', en: 'Who was the bravest and fastest hero of the Greeks?' },
    options: {
      el: ['Ο Αχιλλέας', 'Ο Έκτορας', 'Ο Πρίαμος', 'Ο Πάρης'],
      en: ['Achilles', 'Hector', 'Priam', 'Paris'],
    },
    correct: 0,
    explanation: {
      el: 'Ο Αχιλλέας ήταν ο μεγαλύτερος ήρωας των Ελλήνων. Τον έλεγαν «γοργοπόδαρο» γιατί έτρεχε πιο γρήγορα από όλους.',
      en: 'Achilles was the greatest hero of the Greeks. They called him “swift-footed” because he ran faster than anyone.',
    },
  },
  {
    q: { el: 'Ο μύθος λέει ότι η μητέρα του Αχιλλέα, η Θέτιδα, τον βούτηξε μωρό σε ένα ποτάμι. Γιατί;', en: 'The myth says Achilles\' mother, Thetis, dipped him in a river as a baby. Why?' },
    options: {
      el: ['Για να τον πλύνει', 'Για να μάθει κολύμπι', 'Για να γίνει το σώμα του άτρωτο', 'Για να γίνει ψηλός'],
      en: ['To wash him', 'So he would learn to swim', 'So his body could not be hurt', 'So he would grow tall'],
    },
    correct: 2,
    explanation: {
      el: 'Η Θέτιδα τον βούτηξε στο ποτάμι Στύγα για να μην μπορεί να τον πληγώσει τίποτα. Τον κρατούσε όμως από τη φτέρνα!',
      en: 'Thetis dipped him in the river Styx so nothing could hurt him. But she was holding him by the heel!',
    },
  },
  {
    q: { el: 'Ποιο ήταν το μόνο αδύνατο σημείο του Αχιλλέα;', en: 'What was Achilles\' only weak spot?' },
    options: {
      el: ['Το χέρι του', 'Η φτέρνα του', 'Το κεφάλι του', 'Η πλάτη του'],
      en: ['His hand', 'His heel', 'His head', 'His back'],
    },
    correct: 1,
    explanation: {
      el: 'Η φτέρνα δεν βράχηκε στο ποτάμι, γι\' αυτό ήταν το αδύνατο σημείο του. Μέχρι σήμερα λέμε «αχίλλειος πτέρνα» για την αδυναμία κάποιου.',
      en: 'His heel did not get wet in the river, so it was his weak spot. Even today we say “Achilles\' heel” for someone\'s weakness.',
    },
  },

  // ── 8–9: Hector ─────────────────────────────────────────────────────────────
  {
    q: { el: 'Ο Έκτορας ήταν ο πιο γενναίος πολεμιστής…', en: 'Hector was the bravest warrior…' },
    options: {
      el: ['της Σπάρτης', 'των Μυκηνών', 'της Τροίας', 'της Ιθάκης'],
      en: ['of Sparta', 'of Mycenae', 'of Troy', 'of Ithaca'],
    },
    correct: 2,
    explanation: {
      el: 'Ο Έκτορας ήταν ο πρίγκιπας και ο καλύτερος πολεμιστής της Τροίας. Προστάτευε την πόλη του και την οικογένειά του.',
      en: 'Hector was the prince and best warrior of Troy. He protected his city and his family.',
    },
  },
  {
    q: { el: 'Ο Έκτορας και ο Πάρης ήταν…', en: 'Hector and Paris were…' },
    options: {
      el: ['εχθροί', 'αδέρφια, γιοι του βασιλιά Πρίαμου', 'πατέρας και γιος', 'φίλοι από τη Σπάρτη'],
      en: ['enemies', 'brothers, sons of King Priam', 'father and son', 'friends from Sparta'],
    },
    correct: 1,
    explanation: {
      el: 'Ο Έκτορας και ο Πάρης ήταν αδέρφια. Πατέρας τους ήταν ο Πρίαμος, ο γέρος βασιλιάς της Τροίας.',
      en: 'Hector and Paris were brothers. Their father was Priam, the old king of Troy.',
    },
  },

  // ── 10–11: Agamemnon ────────────────────────────────────────────────────────
  {
    q: { el: 'Ποιος ήταν ο αρχηγός όλων των Ελλήνων στον Τρωικό Πόλεμο;', en: 'Who was the leader of all the Greeks in the Trojan War?' },
    options: {
      el: ['Ο Αγαμέμνονας', 'Ο Αχιλλέας', 'Ο Έκτορας', 'Ο Πρίαμος'],
      en: ['Agamemnon', 'Achilles', 'Hector', 'Priam'],
    },
    correct: 0,
    explanation: {
      el: 'Ο Αγαμέμνονας, ο βασιλιάς των Μυκηνών, ήταν ο αρχηγός όλου του ελληνικού στρατού. Ο Αχιλλέας ήταν ο καλύτερος πολεμιστής, όχι ο αρχηγός.',
      en: 'Agamemnon, the king of Mycenae, was the leader of the whole Greek army. Achilles was the best warrior, not the leader.',
    },
  },
  {
    q: { el: 'Ο Αγαμέμνονας και ο Μενέλαος ήταν…', en: 'Agamemnon and Menelaus were…' },
    options: {
      el: ['πατέρας και γιος', 'δύο βασιλιάδες της Τροίας', 'αδέρφια', 'ο ίδιος άνθρωπος με δύο ονόματα'],
      en: ['father and son', 'two kings of Troy', 'brothers', 'the same person with two names'],
    },
    correct: 2,
    explanation: {
      el: 'Ήταν αδέρφια! Ο Μενέλαος βασίλευε στη Σπάρτη και ο Αγαμέμνονας στις Μυκήνες. Γι\' αυτό ο Αγαμέμνονας βοήθησε τον αδερφό του να πάρει πίσω την Ελένη.',
      en: 'They were brothers! Menelaus ruled Sparta and Agamemnon ruled Mycenae. That is why Agamemnon helped his brother get Helen back.',
    },
  },

  // ── 12–14: the Trojan Horse ─────────────────────────────────────────────────
  {
    q: { el: 'Από τι ήταν φτιαγμένος ο Δούρειος Ίππος;', en: 'What was the Trojan Horse made of?' },
    options: {
      el: ['Από χρυσό', 'Από πέτρα', 'Από ξύλο', 'Από σίδερο'],
      en: ['Gold', 'Stone', 'Wood', 'Iron'],
    },
    correct: 2,
    explanation: {
      el: 'Ο Δούρειος Ίππος ήταν ένα τεράστιο ξύλινο άλογο. «Δούρειος» σημαίνει «ξύλινος» στα αρχαία ελληνικά.',
      en: 'The Trojan Horse was a huge wooden horse. “Dourios” means “wooden” in ancient Greek.',
    },
  },
  {
    q: { el: 'Ποιος σκέφτηκε το κόλπο με το ξύλινο άλογο;', en: 'Who thought of the trick with the wooden horse?' },
    options: {
      el: ['Ο Αχιλλέας', 'Ο Οδυσσέας', 'Ο Μενέλαος', 'Ο Έκτορας'],
      en: ['Achilles', 'Odysseus', 'Menelaus', 'Hector'],
    },
    correct: 1,
    explanation: {
      el: 'Ο Οδυσσέας, ο πιο έξυπνος από τους Έλληνες, σκέφτηκε το κόλπο. Όταν η δύναμη δεν αρκούσε, χρειάστηκε πονηριά.',
      en: 'Odysseus, the cleverest of the Greeks, came up with the trick. When strength was not enough, they needed a clever plan.',
    },
  },
  {
    q: { el: 'Τι κρυβόταν μέσα στο ξύλινο άλογο;', en: 'What was hiding inside the wooden horse?' },
    options: {
      el: ['Θησαυρός για τους Τρώες', 'Τρόφιμα για το ταξίδι', 'Έλληνες πολεμιστές', 'Τίποτα — ήταν απλώς δώρο'],
      en: ['Treasure for the Trojans', 'Food for the journey', 'Greek warriors', 'Nothing — it was just a gift'],
    },
    correct: 2,
    explanation: {
      el: 'Μέσα στο άλογο κρύβονταν Έλληνες πολεμιστές. Οι Τρώες νόμισαν ότι ήταν δώρο και το έβαλαν μέσα στην πόλη. Τη νύχτα οι Έλληνες βγήκαν και άνοιξαν τις πύλες.',
      en: 'Greek warriors were hiding inside the horse. The Trojans thought it was a gift and pulled it into the city. At night the Greeks climbed out and opened the gates.',
    },
  },

  // ── 15–16: Troy ─────────────────────────────────────────────────────────────
  {
    q: { el: 'Η Τροία ήταν μια πόλη…', en: 'Troy was a city…' },
    options: {
      el: ['με ψηλά, γερά τείχη, κοντά στη θάλασσα', 'χωρίς τείχη, πάνω σε βουνό', 'μέσα στην Ελλάδα, δίπλα στη Σπάρτη', 'πάνω σε ένα μικρό νησί'],
      en: ['with tall, strong walls, near the sea', 'without walls, on a mountain', 'inside Greece, next to Sparta', 'on a small island'],
    },
    correct: 0,
    explanation: {
      el: 'Η Τροία βρισκόταν στη Μικρά Ασία, απέναντι από την Ελλάδα, κοντά στη θάλασσα. Τα τείχη της ήταν τόσο γερά που οι Έλληνες δεν μπορούσαν να τα περάσουν.',
      en: 'Troy was in Asia Minor, across the sea from Greece, near the coast. Its walls were so strong the Greeks could not get through them.',
    },
  },
  {
    q: { el: 'Πόσα χρόνια κράτησε ο Τρωικός Πόλεμος;', en: 'How many years did the Trojan War last?' },
    options: {
      el: ['1 χρόνο', '3 χρόνια', '10 χρόνια', '100 χρόνια'],
      en: ['1 year', '3 years', '10 years', '100 years'],
    },
    correct: 2,
    explanation: {
      el: 'Ο πόλεμος κράτησε δέκα ολόκληρα χρόνια. Τόσο δύσκολο ήταν να περάσουν τα τείχη — μέχρι που ήρθε το ξύλινο άλογο.',
      en: 'The war lasted ten whole years. That is how hard it was to get past the walls — until the wooden horse came.',
    },
  },

  // ── 17–18: the apple of discord ─────────────────────────────────────────────
  {
    q: { el: 'Ο μύθος λέει ότι όλα ξεκίνησαν από ένα χρυσό μήλο. Τι έγραφε πάνω του;', en: 'The myth says it all began with a golden apple. What was written on it?' },
    options: {
      el: ['«Για τον πιο δυνατό»', '«Για την πιο όμορφη»', '«Για τον βασιλιά της Τροίας»', '«Για την πιο σοφή»'],
      en: ['“For the strongest”', '“For the most beautiful”', '“For the king of Troy”', '“For the wisest”'],
    },
    correct: 1,
    explanation: {
      el: 'Η θεά Έριδα, που αγαπούσε τους καβγάδες, πέταξε σε ένα γλέντι ένα χρυσό μήλο που έγραφε «για την πιο όμορφη». Αμέσως άρχισε μάλωμα για το ποια θα το πάρει!',
      en: 'Eris, the goddess who loved quarrels, threw a golden apple into a feast. It said “for the most beautiful”. At once an argument began over who should get it!',
    },
  },
  {
    q: { el: 'Τρεις θεές ήθελαν το μήλο: η Ήρα, η Αθηνά και η Αφροδίτη. Ο Πάρης το έδωσε στην Αφροδίτη. Τι του υποσχέθηκε εκείνη;', en: 'Three goddesses wanted the apple: Hera, Athena and Aphrodite. Paris gave it to Aphrodite. What did she promise him?' },
    options: {
      el: ['Να γίνει βασιλιάς όλου του κόσμου', 'Να γίνει ο πιο σοφός άνθρωπος', 'Ένα καράβι γεμάτο χρυσάφι', 'Την πιο όμορφη γυναίκα του κόσμου, την Ελένη'],
      en: ['To make him king of the whole world', 'To make him the wisest man', 'A ship full of gold', 'The most beautiful woman in the world, Helen'],
    },
    correct: 3,
    explanation: {
      el: 'Η Αφροδίτη του υποσχέθηκε την ωραία Ελένη. Έτσι ο Πάρης πήγε στη Σπάρτη και την πήρε — και το χρυσό μήλο έφερε τον Τρωικό Πόλεμο!',
      en: 'Aphrodite promised him Helen. So Paris went to Sparta and took her — and the golden apple led to the Trojan War!',
    },
  },
];
