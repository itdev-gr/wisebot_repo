/**
 * Δ' Δημοτικού · Ιστορία · Μέγας Αλέξανδρος
 * ==========================================
 * 18 original questions, language level: a child of 9–10. Curriculum topics only,
 * no textbook text. In the order a Δ' class meets them:
 *   1–4   Macedonia, Pella, Philip II, the teacher Aristotle
 *   5–6   Bucephalus — the horse and the shadow trick
 *   7–9   Granicus, Issus and king Darius
 *   10–11 the Gordian knot
 *   12–14 Egypt and Alexandria (the city, the library, the many Alexandrias)
 *   15–16 India — elephants and tired soldiers
 *   17–18 Babylon, the end of the journey, and why he is called "the Great"
 */
import type { QuizQuestion } from '../../../types';

export const GRADE4_HISTORY_ALEXANDER_THE_GREAT: QuizQuestion[] = [
  // ── 1–4: Macedonia and the family ─────────────────────────────────────────
  {
    q: { el: 'Από ποιο μέρος της Ελλάδας καταγόταν ο Μέγας Αλέξανδρος;', en: 'Which part of Greece did Alexander the Great come from?' },
    options: { el: ['Από την Κρήτη', 'Από την Πελοπόννησο', 'Από τη Μακεδονία', 'Από τα νησιά του Αιγαίου'], en: ['From Crete', 'From the Peloponnese', 'From Macedonia', 'From the Aegean islands'] },
    correct: 2,
    explanation: {
      el: 'Ο Αλέξανδρος ήταν Μακεδόνας. Η Μακεδονία είναι στον βορρά της Ελλάδας.',
      en: 'Alexander was a Macedonian. Macedonia is in the north of Greece.',
    },
  },
  {
    q: { el: 'Ποιος ήταν ο πατέρας του Αλέξανδρου;', en: 'Who was Alexander\'s father?' },
    options: { el: ['Ο βασιλιάς Φίλιππος Β\'', 'Ο βασιλιάς Λεωνίδας', 'Ο Περικλής', 'Ο βασιλιάς Δαρείος'], en: ['King Philip II', 'King Leonidas', 'Pericles', 'King Darius'] },
    correct: 0,
    explanation: {
      el: 'Ο πατέρας του ήταν ο Φίλιππος Β\', βασιλιάς της Μακεδονίας. Ο Αλέξανδρος έγινε βασιλιάς μετά από αυτόν.',
      en: 'His father was Philip II, king of Macedonia. Alexander became king after him.',
    },
  },
  {
    q: { el: 'Ποια πόλη ήταν η πρωτεύουσα της Μακεδονίας, όπου γεννήθηκε ο Αλέξανδρος;', en: 'Which city was the capital of Macedonia, where Alexander was born?' },
    options: { el: ['Η Αθήνα', 'Η Σπάρτη', 'Η Θήβα', 'Η Πέλλα'], en: ['Athens', 'Sparta', 'Thebes', 'Pella'] },
    correct: 3,
    explanation: {
      el: 'Ο Αλέξανδρος γεννήθηκε στην Πέλλα, την πρωτεύουσα της Μακεδονίας. Τα ερείπιά της σώζονται ακόμη κοντά στη Θεσσαλονίκη.',
      en: 'Alexander was born in Pella, the capital of Macedonia. Its ruins can still be seen near Thessaloniki.',
    },
  },
  {
    q: { el: 'Ποιος σοφός έγινε δάσκαλος του μικρού Αλέξανδρου;', en: 'Which wise man became young Alexander\'s teacher?' },
    options: { el: ['Ο Όμηρος', 'Ο Αριστοτέλης', 'Ο Πυθαγόρας', 'Ο Ηρακλής'], en: ['Homer', 'Aristotle', 'Pythagoras', 'Heracles'] },
    correct: 1,
    explanation: {
      el: 'Ο Φίλιππος κάλεσε τον φιλόσοφο Αριστοτέλη να διδάξει τον γιο του. Ο Αλέξανδρος αγάπησε τα βιβλία και ειδικά τον Όμηρο.',
      en: 'Philip asked the philosopher Aristotle to teach his son. Alexander loved books, especially Homer.',
    },
  },

  // ── 5–6: Bucephalus ───────────────────────────────────────────────────────
  {
    q: { el: 'Τι ήταν ο Βουκεφάλας;', en: 'What was Bucephalus?' },
    options: { el: ['Ο σκύλος του Αλέξανδρου', 'Το πλοίο του Αλέξανδρου', 'Το άλογο του Αλέξανδρου', 'Ο φίλος του Αλέξανδρου'], en: ['Alexander\'s dog', 'Alexander\'s ship', 'Alexander\'s horse', 'Alexander\'s friend'] },
    correct: 2,
    explanation: {
      el: 'Ο Βουκεφάλας ήταν το αγαπημένο άλογο του Αλέξανδρου. Τον πήγε μαζί του σε όλη τη μεγάλη εκστρατεία.',
      en: 'Bucephalus was Alexander\'s favourite horse. He took him along on the whole great journey.',
    },
  },
  {
    q: { el: 'Κανείς δεν μπορούσε να καβαλήσει τον άγριο Βουκεφάλα. Πώς τον ημέρεψε ο μικρός Αλέξανδρος;', en: 'Nobody could ride the wild Bucephalus. How did young Alexander calm him down?' },
    options: { el: ['Του έδωσε πολλά μήλα', 'Τον έδεσε με χοντρό σκοινί', 'Τον γύρισε προς τον ήλιο, για να μη βλέπει τη σκιά του', 'Τον φώναξε δυνατά'], en: ['He gave him lots of apples', 'He tied him with a thick rope', 'He turned him towards the sun, so he could not see his shadow', 'He shouted at him loudly'] },
    correct: 2,
    explanation: {
      el: 'Ο Αλέξανδρος κατάλαβε ότι το άλογο φοβόταν τη σκιά του. Το γύρισε προς τον ήλιο και το καβάλησε ήρεμα.',
      en: 'Alexander noticed the horse was afraid of its own shadow. He turned it towards the sun and rode it calmly.',
    },
  },

  // ── 7–9: Granicus, Issus, Darius ──────────────────────────────────────────
  {
    q: { el: 'Εναντίον ποιου μεγάλου βασιλείου ξεκίνησε την εκστρατεία του ο Αλέξανδρος;', en: 'Against which great kingdom did Alexander begin his campaign?' },
    options: { el: ['Των Περσών', 'Των Ρωμαίων', 'Των Σπαρτιατών', 'Των Αιγυπτίων'], en: ['The Persians', 'The Romans', 'The Spartans', 'The Egyptians'] },
    correct: 0,
    explanation: {
      el: 'Ο Αλέξανδρος πέρασε στην Ασία για να πολεμήσει τους Πέρσες, που είχαν ένα τεράστιο βασίλειο.',
      en: 'Alexander crossed into Asia to fight the Persians, who had an enormous kingdom.',
    },
  },
  {
    q: { el: 'Η πρώτη μεγάλη μάχη του Αλέξανδρου με τους Πέρσες έγινε δίπλα σε ένα ποτάμι. Πώς λεγόταν;', en: 'Alexander\'s first big battle with the Persians took place beside a river. What was it called?' },
    options: { el: ['Νείλος', 'Αλιάκμονας', 'Ευφράτης', 'Γρανικός'], en: ['Nile', 'Aliakmonas', 'Euphrates', 'Granicus'] },
    correct: 3,
    explanation: {
      el: 'Στον ποταμό Γρανικό ο Αλέξανδρος νίκησε τους Πέρσες για πρώτη φορά. Έτσι άνοιξε ο δρόμος του προς την Ασία.',
      en: 'At the river Granicus Alexander beat the Persians for the first time. That opened his road into Asia.',
    },
  },
  {
    q: { el: 'Στη μάχη της Ισσού ο Αλέξανδρος αντιμετώπισε τον ίδιο τον βασιλιά των Περσών. Πώς τον έλεγαν;', en: 'At the battle of Issus Alexander faced the king of the Persians himself. What was his name?' },
    options: { el: ['Ξέρξης', 'Δαρείος', 'Πώρος', 'Κύρος'], en: ['Xerxes', 'Darius', 'Porus', 'Cyrus'] },
    correct: 1,
    explanation: {
      el: 'Ο βασιλιάς Δαρείος έφυγε τρέχοντας από τη μάχη της Ισσού και ο Αλέξανδρος νίκησε.',
      en: 'King Darius ran away from the battle of Issus and Alexander won.',
    },
  },

  // ── 10–11: the Gordian knot ───────────────────────────────────────────────
  {
    q: { el: 'Ο «Γόρδιος δεσμός» ήταν…', en: 'The "Gordian knot" was…' },
    options: { el: ['ένα βουνό', 'ένα κάστρο', 'ένας πολύ μπερδεμένος κόμπος', 'ένα μυστικό πέρασμα'], en: ['a mountain', 'a castle', 'a very tangled knot', 'a secret passage'] },
    correct: 2,
    explanation: {
      el: 'Στην πόλη Γόρδιο υπήρχε ένας κόμπος τόσο μπερδεμένος, που κανείς δεν μπορούσε να τον λύσει.',
      en: 'In the city of Gordium there was a knot so tangled that nobody could untie it.',
    },
  },
  {
    q: { el: 'Ο θρύλος έλεγε ότι όποιος λύσει τον Γόρδιο δεσμό θα γίνει κύριος της Ασίας. Τι έκανε ο Αλέξανδρος;', en: 'The legend said that whoever undid the Gordian knot would rule Asia. What did Alexander do?' },
    options: { el: ['Τον έκοψε με το σπαθί του', 'Τον έλυσε αργά με τα δάχτυλά του', 'Τον έκαψε', 'Τον άφησε όπως ήταν'], en: ['He cut it with his sword', 'He untied it slowly with his fingers', 'He burned it', 'He left it as it was'] },
    correct: 0,
    explanation: {
      el: 'Ο Αλέξανδρος δεν έχασε χρόνο: τράβηξε το σπαθί του και έκοψε τον κόμπο με μια κίνηση. Σήμερα λέμε «έλυσε τον Γόρδιο δεσμό» όταν κάποιος λύνει ένα δύσκολο πρόβλημα με έξυπνο τρόπο.',
      en: 'Alexander did not waste time: he drew his sword and cut the knot in one stroke. Today we say someone "cut the Gordian knot" when they solve a hard problem in a clever way.',
    },
  },

  // ── 12–14: Egypt and Alexandria ───────────────────────────────────────────
  {
    q: { el: 'Πώς υποδέχτηκαν οι Αιγύπτιοι τον Αλέξανδρο;', en: 'How did the Egyptians receive Alexander?' },
    options: { el: ['Τον έδιωξαν', 'Τον υποδέχτηκαν με χαρά και τον έκαναν Φαραώ', 'Τον έκλεισαν στη φυλακή', 'Δεν τον άφησαν να μπει'], en: ['They chased him away', 'They welcomed him gladly and made him Pharaoh', 'They locked him in prison', 'They did not let him in'] },
    correct: 1,
    explanation: {
      el: 'Οι Αιγύπτιοι δεν αγαπούσαν τους Πέρσες που τους κυβερνούσαν. Γι\' αυτό υποδέχτηκαν τον Αλέξανδρο με χαρά και τον ονόμασαν Φαραώ.',
      en: 'The Egyptians did not like the Persians who ruled them. So they welcomed Alexander gladly and named him Pharaoh.',
    },
  },
  {
    q: { el: 'Στην Αίγυπτο ο Αλέξανδρος ίδρυσε μια καινούργια πόλη δίπλα στη θάλασσα. Πώς την ονόμασε;', en: 'In Egypt Alexander founded a brand-new city by the sea. What did he name it?' },
    options: { el: ['Πέλλα', 'Κάιρο', 'Αλεξάνδρεια', 'Μέμφιδα'], en: ['Pella', 'Cairo', 'Alexandria', 'Memphis'] },
    correct: 2,
    explanation: {
      el: 'Την ονόμασε Αλεξάνδρεια, από το όνομά του. Η Αλεξάνδρεια της Αιγύπτου υπάρχει ακόμη και είναι μεγάλη πόλη.',
      en: 'He named it Alexandria, after himself. Alexandria in Egypt still exists and is a big city.',
    },
  },
  {
    q: { el: 'Η Αλεξάνδρεια της Αιγύπτου έγινε αργότερα διάσημη σε όλον τον κόσμο για…', en: 'Alexandria in Egypt later became famous all over the world for…' },
    options: { el: ['τις πυραμίδες της', 'το μεγάλο της στάδιο', 'τα χρυσωρυχεία της', 'τη μεγάλη της βιβλιοθήκη'], en: ['its pyramids', 'its big stadium', 'its gold mines', 'its great library'] },
    correct: 3,
    explanation: {
      el: 'Η Βιβλιοθήκη της Αλεξάνδρειας είχε χιλιάδες βιβλία και σοφοί από παντού πήγαιναν εκεί για να μελετήσουν.',
      en: 'The Library of Alexandria held thousands of books, and scholars from everywhere went there to study.',
    },
  },

  // ── 15–16: India ──────────────────────────────────────────────────────────
  {
    q: { el: 'Στην Ινδία ο στρατός του Αλέξανδρου συνάντησε για πρώτη φορά στη μάχη ένα τεράστιο ζώο. Ποιο;', en: 'In India Alexander\'s army met a huge animal in battle for the first time. Which one?' },
    options: { el: ['Την καμήλα', 'Τον ελέφαντα', 'Τον ρινόκερο', 'Την τίγρη'], en: ['The camel', 'The elephant', 'The rhinoceros', 'The tiger'] },
    correct: 1,
    explanation: {
      el: 'Ο Ινδός βασιλιάς Πώρος είχε πολεμικούς ελέφαντες. Οι Μακεδόνες δεν είχαν ξαναδεί τέτοια ζώα, αλλά νίκησαν.',
      en: 'The Indian king Porus had war elephants. The Macedonians had never seen such animals before, but they still won.',
    },
  },
  {
    q: { el: 'Γιατί ο Αλέξανδρος σταμάτησε την εκστρατεία στην Ινδία και γύρισε πίσω;', en: 'Why did Alexander stop his campaign in India and turn back?' },
    options: { el: ['Επειδή οι στρατιώτες του ήταν κουρασμένοι και ήθελαν να γυρίσουν σπίτι', 'Επειδή έχασε τη μάχη', 'Επειδή τελείωσαν τα χρήματα', 'Επειδή ο Βουκεφάλας δεν ήθελε να προχωρήσει'], en: ['Because his soldiers were tired and wanted to go home', 'Because he lost the battle', 'Because the money ran out', 'Because Bucephalus refused to go on'] },
    correct: 0,
    explanation: {
      el: 'Οι στρατιώτες του είχαν χρόνια μακριά από τις οικογένειές τους. Όταν του το ζήτησαν, ο Αλέξανδρος αποφάσισε να γυρίσουν πίσω.',
      en: 'His soldiers had been away from their families for years. When they asked him, Alexander decided to turn back.',
    },
  },

  // ── 17–18: Babylon and "the Great" ────────────────────────────────────────
  {
    q: { el: 'Σε ποια πόλη τελείωσε η ζωή και το μεγάλο ταξίδι του Αλέξανδρου;', en: 'In which city did Alexander\'s life and great journey come to an end?' },
    options: { el: ['Στην Αθήνα', 'Στην Αλεξάνδρεια', 'Στην Πέλλα', 'Στη Βαβυλώνα'], en: ['In Athens', 'In Alexandria', 'In Pella', 'In Babylon'] },
    correct: 3,
    explanation: {
      el: 'Ο Αλέξανδρος αρρώστησε και πέθανε στη Βαβυλώνα, πολύ νέος, μόλις 32 χρονών. Δεν πρόλαβε να γυρίσει στη Μακεδονία.',
      en: 'Alexander fell ill and died in Babylon, very young, only 32 years old. He never made it back to Macedonia.',
    },
  },
  {
    q: { el: 'Γιατί λέμε τον Αλέξανδρο «Μέγα»;', en: 'Why do we call Alexander "the Great"?' },
    options: { el: ['Επειδή ήταν πολύ ψηλός', 'Επειδή έφτιαξε ένα τεράστιο κράτος και έκανε γνωστή την ελληνική γλώσσα και τον πολιτισμό ως την Ινδία', 'Επειδή έζησε πάρα πολλά χρόνια', 'Επειδή έχτισε τις πυραμίδες'], en: ['Because he was very tall', 'Because he built a huge empire and spread the Greek language and culture as far as India', 'Because he lived a very long life', 'Because he built the pyramids'] },
    correct: 1,
    explanation: {
      el: 'Σε λίγα μόνο χρόνια ο Αλέξανδρος έφτασε ως την Ινδία. Παντού όπου πέρασε, οι άνθρωποι γνώρισαν την ελληνική γλώσσα και τον ελληνικό πολιτισμό.',
      en: 'In just a few years Alexander reached India. Everywhere he went, people came to know the Greek language and Greek culture.',
    },
  },
];
