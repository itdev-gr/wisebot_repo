/**
 * Γ' Δημοτικού · Ιστορία · Η Αργοναυτική Εκστρατεία
 * ====================================================
 * Original questions on the myth of Jason and the Argonauts (curriculum topic only —
 * nothing from ebooks.edu.gr). Language level: a child of 8–9.
 *
 * What the unit covers, in order:
 *   1–3   Jason: who he was, his home Iolcos, the one sandal
 *   4–6   the ship Argo: its name, its builder, the Argonauts on board
 *   7–9   the Golden Fleece: the golden ram, Phrixus, the sleepless dragon
 *   10–11 Colchis: where it was, King Aeetes and the tasks he set
 *   12–14 Medea: the king's daughter who helped Jason with her magic
 *   15–16 Pelias: why he sent Jason away, and what Jason brought back
 *   17–18 the Symplegades: Phineus' advice, the dove, the rocks that stopped moving
 *
 * Distractors are the mix-ups children really make: Odysseus for Jason, Troy for Colchis,
 * Athena for Medea, a horse for the ram. The UI shuffles options.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE3_HISTORY_ARGONAUTS: QuizQuestion[] = [
  // ── 1–3: Jason ──────────────────────────────────────────────────────────────
  {
    q: { el: 'Πώς λεγόταν ο ήρωας που ήταν ο αρχηγός των Αργοναυτών;', en: 'What was the name of the hero who led the Argonauts?' },
    options: { el: ['Οδυσσέας', 'Ιάσονας', 'Ηρακλής', 'Θησέας'], en: ['Odysseus', 'Jason', 'Heracles', 'Theseus'] },
    correct: 1,
    explanation: {
      el: 'Ο Ιάσονας ήταν ο αρχηγός των Αργοναυτών. Ο Ηρακλής ήταν μαζί του στο ταξίδι, αλλά αρχηγός ήταν ο Ιάσονας.',
      en: 'Jason was the leader of the Argonauts. Heracles came along on the voyage, but Jason was the leader.',
    },
  },
  {
    q: { el: 'Από ποια πόλη ήταν ο Ιάσονας;', en: 'Which city was Jason from?' },
    options: { el: ['Από την Αθήνα', 'Από τη Σπάρτη', 'Από την Ιωλκό', 'Από την Τροία'], en: ['Athens', 'Sparta', 'Iolcos', 'Troy'] },
    correct: 2,
    explanation: {
      el: 'Ο Ιάσονας ήταν από την Ιωλκό, μια πόλη της Θεσσαλίας δίπλα στη θάλασσα. Από εκεί ξεκίνησε το μεγάλο ταξίδι.',
      en: 'Jason came from Iolcos, a city in Thessaly by the sea. The great voyage started from there.',
    },
  },
  {
    q: { el: 'Όταν ο Ιάσονας έφτασε στην Ιωλκό, τι περίεργο είχε πάνω του;', en: 'When Jason arrived in Iolcos, what was strange about him?' },
    options: { el: ['Φορούσε μόνο ένα σανδάλι', 'Είχε άσπρα μαλλιά', 'Κρατούσε χρυσό σπαθί', 'Φορούσε κορώνα'], en: ['He wore only one sandal', 'He had white hair', 'He carried a golden sword', 'He wore a crown'] },
    correct: 0,
    explanation: {
      el: 'Ο Ιάσονας έχασε το ένα σανδάλι του περνώντας ένα ποτάμι. Έτσι έφτασε στην Ιωλκό με ένα σανδάλι μόνο.',
      en: 'Jason lost one sandal while crossing a river. So he arrived in Iolcos wearing only one sandal.',
    },
  },

  // ── 4–6: the ship Argo ──────────────────────────────────────────────────────
  {
    q: { el: 'Πώς λεγόταν το πλοίο του Ιάσονα;', en: 'What was the name of Jason\'s ship?' },
    options: { el: ['Τριήρης', 'Αργώ', 'Δούρειος', 'Ναυτίλος'], en: ['Trireme', 'Argo', 'Trojan', 'Nautilus'] },
    correct: 1,
    explanation: {
      el: 'Το πλοίο λεγόταν Αργώ. Γι\' αυτό οι ήρωες που μπήκαν μέσα ονομάστηκαν Αργοναύτες, δηλαδή «οι ναύτες της Αργώς».',
      en: 'The ship was called the Argo. That is why the heroes on board were named Argonauts, “the sailors of the Argo”.',
    },
  },
  {
    q: { el: 'Ποια θεά βοήθησε να χτιστεί η Αργώ;', en: 'Which goddess helped build the Argo?' },
    options: { el: ['Η Αφροδίτη', 'Η Άρτεμη', 'Η Δήμητρα', 'Η Αθηνά'], en: ['Aphrodite', 'Artemis', 'Demeter', 'Athena'] },
    correct: 3,
    explanation: {
      el: 'Η Αθηνά, η θεά της σοφίας, βοήθησε τον ξυλουργό Άργο να φτιάξει το πλοίο. Ήταν το πιο γερό και γρήγορο πλοίο της εποχής του.',
      en: 'Athena, the goddess of wisdom, helped the carpenter Argus build the ship. It was the strongest and fastest ship of its time.',
    },
  },
  {
    q: { el: 'Ποιοι ήταν οι Αργοναύτες;', en: 'Who were the Argonauts?' },
    options: { el: ['Οι ήρωες που ταξίδεψαν με την Αργώ', 'Οι φύλακες του βασιλιά Πελία', 'Οι κάτοικοι της Κολχίδας', 'Οι θεοί του Ολύμπου'], en: ['The heroes who sailed on the Argo', 'King Pelias\' guards', 'The people of Colchis', 'The gods of Olympus'] },
    correct: 0,
    explanation: {
      el: 'Οι Αργοναύτες ήταν οι πιο γενναίοι ήρωες της Ελλάδας, όπως ο Ηρακλής και ο μουσικός Ορφέας. Ταξίδεψαν όλοι μαζί με την Αργώ.',
      en: 'The Argonauts were the bravest heroes of Greece, like Heracles and the musician Orpheus. They all sailed together on the Argo.',
    },
  },

  // ── 7–9: the Golden Fleece ──────────────────────────────────────────────────
  {
    q: { el: 'Τι πήγε να φέρει ο Ιάσονας από το μακρινό ταξίδι του;', en: 'What did Jason set out to bring back from his long voyage?' },
    options: { el: ['Ένα χρυσό μήλο', 'Το Χρυσόμαλλο Δέρας', 'Ένα μαγικό σπαθί', 'Έναν θησαυρό με νομίσματα'], en: ['A golden apple', 'The Golden Fleece', 'A magic sword', 'A treasure of coins'] },
    correct: 1,
    explanation: {
      el: 'Ο Ιάσονας πήγε να φέρει το Χρυσόμαλλο Δέρας. Ήταν το δέρμα ενός κριαριού με χρυσό μαλλί που έλαμπε.',
      en: 'Jason went to bring back the Golden Fleece. It was the skin of a ram with shining golden wool.',
    },
  },
  {
    q: { el: 'Από ποιο ζώο ήταν το Χρυσόμαλλο Δέρας;', en: 'Which animal did the Golden Fleece come from?' },
    options: { el: ['Από ένα άλογο', 'Από ένα λιοντάρι', 'Από ένα κριάρι', 'Από έναν ταύρο'], en: ['A horse', 'A lion', 'A ram', 'A bull'] },
    correct: 2,
    explanation: {
      el: 'Ήταν από ένα μαγικό κριάρι με χρυσό μαλλί. Το κριάρι πέταξε στον ουρανό και μετέφερε τον Φρίξο μακριά, ως την Κολχίδα.',
      en: 'It came from a magic ram with golden wool. The ram flew through the sky and carried Phrixus far away, all the way to Colchis.',
    },
  },
  {
    q: { el: 'Ποιος φύλαγε το Χρυσόμαλλο Δέρας μέρα και νύχτα;', en: 'Who guarded the Golden Fleece day and night?' },
    options: { el: ['Ένας γίγαντας', 'Ένας δράκος που δεν κοιμόταν ποτέ', 'Ένας τρικέφαλος σκύλος', 'Εκατό στρατιώτες'], en: ['A giant', 'A dragon that never slept', 'A three-headed dog', 'A hundred soldiers'] },
    correct: 1,
    explanation: {
      el: 'Το Δέρας κρεμόταν σε ένα δέντρο και το φύλαγε ένας δράκος που δεν έκλεινε ποτέ τα μάτια του. Κανείς δεν μπορούσε να το πλησιάσει.',
      en: 'The Fleece hung on a tree, guarded by a dragon that never closed its eyes. Nobody could get near it.',
    },
  },

  // ── 10–11: Colchis ──────────────────────────────────────────────────────────
  {
    q: { el: 'Πώς λεγόταν η μακρινή χώρα όπου βρισκόταν το Χρυσόμαλλο Δέρας;', en: 'What was the name of the faraway land where the Golden Fleece was kept?' },
    options: { el: ['Τροία', 'Αίγυπτος', 'Κρήτη', 'Κολχίδα'], en: ['Troy', 'Egypt', 'Crete', 'Colchis'] },
    correct: 3,
    explanation: {
      el: 'Το Δέρας ήταν στην Κολχίδα, μια χώρα στην άκρη του Εύξεινου Πόντου (της Μαύρης Θάλασσας). Για να φτάσουν εκεί, οι Αργοναύτες ταξίδεψαν πολύ μακριά.',
      en: 'The Fleece was in Colchis, a land at the far end of the Black Sea. To get there, the Argonauts sailed a very long way.',
    },
  },
  {
    q: { el: 'Ο βασιλιάς της Κολχίδας, ο Αιήτης, τι ζήτησε από τον Ιάσονα για να του δώσει το Δέρας;', en: 'What did Aeetes, the king of Colchis, ask Jason to do before giving him the Fleece?' },
    options: { el: ['Να του φέρει χρυσά νομίσματα', 'Να ζέψει δύο ταύρους που έβγαζαν φωτιά και να οργώσει', 'Να νικήσει στο τρέξιμο', 'Να χτίσει ένα παλάτι'], en: ['Bring him gold coins', 'Yoke two fire-breathing bulls and plough a field', 'Win a running race', 'Build him a palace'] },
    correct: 1,
    explanation: {
      el: 'Ο Αιήτης έβαλε στον Ιάσονα πολύ δύσκολες δοκιμασίες: να ζέψει δύο ταύρους που έβγαζαν φωτιά από τα ρουθούνια και να οργώσει ένα χωράφι. Πίστευε ότι κανείς δεν θα τα κατάφερνε.',
      en: 'Aeetes set Jason very hard tasks: yoke two bulls that breathed fire from their nostrils and plough a field. He believed nobody could do it.',
    },
  },

  // ── 12–14: Medea ────────────────────────────────────────────────────────────
  {
    q: { el: 'Ποια ήταν η Μήδεια;', en: 'Who was Medea?' },
    options: { el: ['Η μητέρα του Ιάσονα', 'Η θεά της θάλασσας', 'Η κόρη του βασιλιά Αιήτη', 'Η βασίλισσα της Ιωλκού'], en: ['Jason\'s mother', 'The goddess of the sea', 'King Aeetes\' daughter', 'The queen of Iolcos'] },
    correct: 2,
    explanation: {
      el: 'Η Μήδεια ήταν η κόρη του βασιλιά Αιήτη. Ήξερε μαγικά και βότανα και αποφάσισε να βοηθήσει τον Ιάσονα.',
      en: 'Medea was King Aeetes\' daughter. She knew magic and herbs, and she decided to help Jason.',
    },
  },
  {
    q: { el: 'Πώς βοήθησε η Μήδεια τον Ιάσονα με τους ταύρους;', en: 'How did Medea help Jason with the bulls?' },
    options: { el: ['Του έδωσε μια μαγική αλοιφή που τον προστάτευε από τη φωτιά', 'Του έδωσε μια ασπίδα από χρυσό', 'Τα ζώα τα έδεσε η ίδια', 'Του έδωσε μια πιο γρήγορη βάρκα'], en: ['She gave him a magic ointment that protected him from fire', 'She gave him a shield made of gold', 'She tied up the animals herself', 'She gave him a faster boat'] },
    correct: 0,
    explanation: {
      el: 'Η Μήδεια έδωσε στον Ιάσονα μια μαγική αλοιφή. Όποιος την έβαζε δεν τον έκαιγε η φωτιά, κι έτσι ο Ιάσονας έζεψε τους ταύρους.',
      en: 'Medea gave Jason a magic ointment. Whoever put it on could not be burned by fire, and so Jason yoked the bulls.',
    },
  },
  {
    q: { el: 'Πώς πήρε τελικά ο Ιάσονας το Χρυσόμαλλο Δέρας από τον δράκο;', en: 'How did Jason finally take the Golden Fleece from the dragon?' },
    options: { el: ['Έτρεξε πιο γρήγορα από τον δράκο', 'Ο δράκος του το χάρισε', 'Η Μήδεια κοίμισε τον δράκο με μαγικά βότανα', 'Ο Ηρακλής κουβάλησε τον δράκο μακριά'], en: ['He ran faster than the dragon', 'The dragon gave it to him as a gift', 'Medea put the dragon to sleep with magic herbs', 'Heracles carried the dragon away'] },
    correct: 2,
    explanation: {
      el: 'Η Μήδεια ράντισε τον δράκο με μαγικά βότανα και του τραγούδησε, ώσπου αποκοιμήθηκε. Τότε ο Ιάσονας πήρε το Δέρας από το δέντρο.',
      en: 'Medea sprinkled the dragon with magic herbs and sang to it until it fell asleep. Then Jason took the Fleece from the tree.',
    },
  },

  // ── 15–16: Pelias ───────────────────────────────────────────────────────────
  {
    q: { el: 'Ποιος ήταν ο Πελίας;', en: 'Who was Pelias?' },
    options: { el: ['Ο ξυλουργός που έφτιαξε την Αργώ', 'Ο βασιλιάς της Ιωλκού, θείος του Ιάσονα', 'Ένας Αργοναύτης', 'Ο βασιλιάς της Κολχίδας'], en: ['The carpenter who built the Argo', 'The king of Iolcos, Jason\'s uncle', 'One of the Argonauts', 'The king of Colchis'] },
    correct: 1,
    explanation: {
      el: 'Ο Πελίας ήταν ο θείος του Ιάσονα και βασίλευε στην Ιωλκό. Ο θρόνος όμως ανήκε στον πατέρα του Ιάσονα, κι ο Πελίας τον είχε πάρει.',
      en: 'Pelias was Jason\'s uncle and ruled Iolcos. But the throne really belonged to Jason\'s father, and Pelias had taken it.',
    },
  },
  {
    q: { el: 'Γιατί ο Πελίας έστειλε τον Ιάσονα να φέρει το Χρυσόμαλλο Δέρας;', en: 'Why did Pelias send Jason to fetch the Golden Fleece?' },
    options: { el: ['Ήθελε να γίνει ο Ιάσονας διάσημος', 'Ήθελε να στολίσει το παλάτι του', 'Ήλπιζε ότι ο Ιάσονας δεν θα γύριζε, για να κρατήσει τον θρόνο', 'Το Δέρας θεράπευε την αρρώστια του'], en: ['He wanted Jason to become famous', 'He wanted to decorate his palace', 'He hoped Jason would not return, so he could keep the throne', 'The Fleece would cure his illness'] },
    correct: 2,
    explanation: {
      el: 'Ο Ιάσονας ζήτησε πίσω τον θρόνο. Ο Πελίας είπε «πρώτα φέρε μου το Χρυσόμαλλο Δέρας», γιατί πίστευε ότι το ταξίδι ήταν τόσο δύσκολο που ο Ιάσονας δεν θα γύριζε ποτέ.',
      en: 'Jason asked for the throne back. Pelias said “first bring me the Golden Fleece”, because he believed the voyage was so hard that Jason would never come back.',
    },
  },

  // ── 17–18: the Symplegades ──────────────────────────────────────────────────
  {
    q: { el: 'Τι ήταν οι Συμπληγάδες Πέτρες;', en: 'What were the Symplegades?' },
    options: { el: ['Δύο βράχοι που άνοιγαν και έκλειναν και συνέτριβαν τα πλοία', 'Δύο νησιά με ψηλά βουνά', 'Δύο πέτρινα αγάλματα στο λιμάνι', 'Δύο σπηλιές όπου ζούσε ένα τέρας'], en: ['Two rocks that opened and slammed shut, crushing ships', 'Two islands with tall mountains', 'Two stone statues in the harbour', 'Two caves where a monster lived'] },
    correct: 0,
    explanation: {
      el: 'Οι Συμπληγάδες ήταν δύο τεράστιοι βράχοι στη θάλασσα που χτυπούσαν ο ένας τον άλλον. Όποιο πλοίο περνούσε ανάμεσά τους, το έλιωναν.',
      en: 'The Symplegades were two huge rocks in the sea that crashed against each other. Any ship that sailed between them was crushed.',
    },
  },
  {
    q: { el: 'Πώς πέρασε η Αργώ ανάμεσα από τις Συμπληγάδες;', en: 'How did the Argo get through the Symplegades?' },
    options: { el: ['Ο Ηρακλής κράτησε τους βράχους ανοιχτούς', 'Οι Αργοναύτες έστειλαν πρώτα ένα περιστέρι και κωπηλάτησαν αμέσως μετά', 'Πέρασαν τη νύχτα, όταν οι βράχοι κοιμόντουσαν', 'Έκαναν τον γύρο από άλλη θάλασσα'], en: ['Heracles held the rocks apart', 'The Argonauts sent a dove through first and rowed right after it', 'They sailed through at night, when the rocks were asleep', 'They went around by another sea'] },
    correct: 1,
    explanation: {
      el: 'Ο σοφός Φινέας τούς συμβούλεψε να αφήσουν πρώτα ένα περιστέρι. Μόλις οι βράχοι έκλεισαν κι άρχισαν να ανοίγουν ξανά, οι Αργοναύτες κωπηλάτησαν με όλη τους τη δύναμη και πέρασαν. Από τότε οι Συμπληγάδες έμειναν ακίνητες για πάντα.',
      en: 'Wise Phineus told them to release a dove first. As soon as the rocks closed and began to open again, the Argonauts rowed with all their strength and got through. From then on, the Symplegades stood still forever.',
    },
  },
];
