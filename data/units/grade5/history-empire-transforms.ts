/**
 * Ε' Δημοτικού · Ιστορία · Η Αυτοκρατορία Αλλάζει
 * ================================================
 * Original questions (curriculum topics only — no textbook text). Language level: a child of 10–11.
 *
 * What the unit covers, in the order an Ε' class meets it:
 *   1–3   who Constantine the Great was, his mother Helena, the old capital Rome
 *   4–9   the new capital: Byzantium → Constantinople, 330 AD, the Bosporus, "New Rome"
 *   10–12 the Edict of Milan (313): freedom of religion, Constantine and Licinius
 *   13–18 Theodosius: Christianity becomes the official religion (380), the Olympic
 *         Games stop, the empire is split East/West (395), the East becomes "Byzantium"
 */
import type { QuizQuestion } from '../../../types';

export const GRADE5_HISTORY_EMPIRE_TRANSFORMS: QuizQuestion[] = [
  // ── 1–3: Constantine the Great ──────────────────────────────────────────────
  {
    q: { el: 'Ποιος ήταν ο Μέγας Κωνσταντίνος;', en: 'Who was Constantine the Great?' },
    options: {
      el: ['Ένας Έλληνας φιλόσοφος', 'Ένας βασιλιάς της Περσίας', 'Ένας Ρωμαίος αυτοκράτορας', 'Ένας στρατηγός του Μεγάλου Αλεξάνδρου'],
      en: ['A Greek philosopher', 'A king of Persia', 'A Roman emperor', 'A general of Alexander the Great'],
    },
    correct: 2,
    explanation: {
      el: 'Ο Κωνσταντίνος ήταν Ρωμαίος αυτοκράτορας. Οι αποφάσεις του άλλαξαν τόσο πολύ την αυτοκρατορία, που τον είπαν «Μέγα».',
      en: 'Constantine was a Roman emperor. His decisions changed the empire so much that people called him “the Great”.',
    },
  },
  {
    q: { el: 'Πώς λεγόταν η μητέρα του Μεγάλου Κωνσταντίνου;', en: 'What was the name of Constantine the Great\'s mother?' },
    options: {
      el: ['Θεοδώρα', 'Ελένη', 'Κλεοπάτρα', 'Ολυμπιάδα'],
      en: ['Theodora', 'Helena', 'Cleopatra', 'Olympias'],
    },
    correct: 1,
    explanation: {
      el: 'Η μητέρα του ήταν η Ελένη. Ταξίδεψε πολύ και βοήθησε τον γιο της στο έργο του. Γι\' αυτό λέμε «Κωνσταντίνος και Ελένη».',
      en: 'His mother was Helena. She travelled a lot and helped her son in his work. That is why we say “Constantine and Helena”.',
    },
  },
  {
    q: { el: 'Πριν από τον Κωνσταντίνο, ποια πόλη ήταν η πρωτεύουσα της Ρωμαϊκής Αυτοκρατορίας;', en: 'Before Constantine, which city was the capital of the Roman Empire?' },
    options: {
      el: ['Η Ρώμη', 'Η Αθήνα', 'Η Αλεξάνδρεια', 'Η Θεσσαλονίκη'],
      en: ['Rome', 'Athens', 'Alexandria', 'Thessaloniki'],
    },
    correct: 0,
    explanation: {
      el: 'Η πρωτεύουσα ήταν η Ρώμη, στην Ιταλία. Από εκεί πήρε το όνομά της ολόκληρη η αυτοκρατορία.',
      en: 'The capital was Rome, in Italy. The whole empire took its name from that city.',
    },
  },

  // ── 4–9: the new capital ────────────────────────────────────────────────────
  {
    q: { el: 'Ο Κωνσταντίνος έχτισε τη νέα πρωτεύουσα πάνω σε μια παλιά ελληνική πόλη. Πώς λεγόταν αυτή η πόλη;', en: 'Constantine built his new capital on the site of an old Greek city. What was that city called?' },
    options: {
      el: ['Μίλητος', 'Σμύρνη', 'Τροία', 'Βυζάντιο'],
      en: ['Miletus', 'Smyrna', 'Troy', 'Byzantium'],
    },
    correct: 3,
    explanation: {
      el: 'Η παλιά πόλη λεγόταν Βυζάντιο. Την είχαν ιδρύσει Έλληνες από τα Μέγαρα πολλούς αιώνες πριν.',
      en: 'The old city was called Byzantium. Greeks from Megara had founded it many centuries earlier.',
    },
  },
  {
    q: { el: 'Πώς ονομάστηκε η νέα πρωτεύουσα προς τιμήν του αυτοκράτορα;', en: 'What was the new capital named, in honour of the emperor?' },
    options: {
      el: ['Αδριανούπολη', 'Κωνσταντινούπολη', 'Νικομήδεια', 'Ηράκλεια'],
      en: ['Adrianople', 'Constantinople', 'Nicomedia', 'Heraclea'],
    },
    correct: 1,
    explanation: {
      el: 'Η πόλη πήρε το όνομα Κωνσταντινούπολη, δηλαδή «η πόλη του Κωνσταντίνου».',
      en: 'The city was named Constantinople, which means “the city of Constantine”.',
    },
  },
  {
    q: { el: 'Ποια χρονιά έγιναν τα εγκαίνια της Κωνσταντινούπολης;', en: 'In which year was Constantinople officially inaugurated?' },
    options: {
      el: ['Το 30 μ.Χ.', 'Το 300 μ.Χ.', 'Το 330 μ.Χ.', 'Το 1453 μ.Χ.'],
      en: ['30 AD', '300 AD', '330 AD', '1453 AD'],
    },
    correct: 2,
    explanation: {
      el: 'Τα εγκαίνια έγιναν το 330 μ.Χ. με μεγάλες γιορτές. Από τότε η Κωνσταντινούπολη ήταν η νέα πρωτεύουσα.',
      en: 'The inauguration was in 330 AD, with big celebrations. From then on Constantinople was the new capital.',
    },
  },
  {
    q: { el: 'Η Κωνσταντινούπολη βρίσκεται δίπλα σε ένα στενό πέρασμα θάλασσας που χωρίζει την Ευρώπη από την Ασία. Πώς λέγεται;', en: 'Constantinople lies next to a narrow sea passage that separates Europe from Asia. What is it called?' },
    options: {
      el: ['Ο Βόσπορος', 'Ο Ισθμός της Κορίνθου', 'Ο Νείλος', 'Το Ιόνιο Πέλαγος'],
      en: ['The Bosporus', 'The Isthmus of Corinth', 'The Nile', 'The Ionian Sea'],
    },
    correct: 0,
    explanation: {
      el: 'Το στενό λέγεται Βόσπορος. Ενώνει τη Μαύρη Θάλασσα με τη Θάλασσα του Μαρμαρά και τα πλοία περνούσαν από μπροστά της.',
      en: 'The strait is called the Bosporus. It joins the Black Sea to the Sea of Marmara, and ships sailed right past the city.',
    },
  },
  {
    q: { el: 'Γιατί ο Κωνσταντίνος διάλεξε αυτή τη θέση για τη νέα πρωτεύουσα;', en: 'Why did Constantine choose this spot for his new capital?' },
    options: {
      el: ['Γιατί είχε χρυσάφι στο έδαφος', 'Γιατί ήταν η πόλη που γεννήθηκε', 'Γιατί δεν έβρεχε ποτέ εκεί', 'Γιατί είχε θάλασσα γύρω της και ήταν εύκολο να την προστατεύεις'],
      en: ['Because there was gold in the ground', 'Because it was the city where he was born', 'Because it never rained there', 'Because it had sea around it and was easy to defend'],
    },
    correct: 3,
    explanation: {
      el: 'Η πόλη είχε θάλασσα από τρεις πλευρές, σαν φυσικό κάστρο. Από εκεί περνούσαν και όλα τα πλοία με τα εμπορεύματα.',
      en: 'The city had sea on three sides, like a natural castle. All the trading ships passed by it too.',
    },
  },
  {
    q: { el: 'Η Κωνσταντινούπολη είχε και ένα δεύτερο όνομα. Ποιο;', en: 'Constantinople also had a second name. Which one?' },
    options: {
      el: ['Μικρή Αθήνα', 'Νέα Ρώμη', 'Μεγάλη Σπάρτη', 'Χρυσή Πόλη'],
      en: ['Little Athens', 'New Rome', 'Great Sparta', 'Golden City'],
    },
    correct: 1,
    explanation: {
      el: 'Την έλεγαν «Νέα Ρώμη», γιατί ο Κωνσταντίνος την έχτισε με παλάτια, πλατείες και ιππόδρομο, όπως η παλιά Ρώμη.',
      en: 'It was called “New Rome”, because Constantine built it with palaces, squares and a hippodrome, just like old Rome.',
    },
  },

  // ── 10–12: the Edict of Milan ───────────────────────────────────────────────
  {
    q: { el: 'Ποια χρονιά υπογράφτηκε το Διάταγμα των Μεδιολάνων;', en: 'In which year was the Edict of Milan signed?' },
    options: {
      el: ['Το 331 μ.Χ.', 'Το 133 μ.Χ.', 'Το 313 μ.Χ.', 'Το 380 μ.Χ.'],
      en: ['331 AD', '133 AD', '313 AD', '380 AD'],
    },
    correct: 2,
    explanation: {
      el: 'Το Διάταγμα των Μεδιολάνων υπογράφτηκε το 313 μ.Χ. Μεδιόλανα είναι το παλιό όνομα του Μιλάνου, στην Ιταλία.',
      en: 'The Edict of Milan was signed in 313 AD. Milan is a city in Italy.',
    },
  },
  {
    q: { el: 'Τι όριζε το Διάταγμα των Μεδιολάνων;', en: 'What did the Edict of Milan say?' },
    options: {
      el: ['Ότι ο καθένας μπορούσε να ακολουθεί ελεύθερα τη θρησκεία του', 'Ότι όλοι έπρεπε να μιλούν λατινικά', 'Ότι η πρωτεύουσα θα άλλαζε', 'Ότι οι φόροι θα γίνονταν διπλάσιοι'],
      en: ['That everyone could follow their religion freely', 'That everyone had to speak Latin', 'That the capital would change', 'That taxes would be doubled'],
    },
    correct: 0,
    explanation: {
      el: 'Το διάταγμα έδωσε ελευθερία στη θρησκεία. Οι χριστιανοί σταμάτησαν να διώκονται και μπορούσαν να λατρεύουν τον Θεό τους ελεύθερα.',
      en: 'The edict gave freedom of religion. Christians were no longer persecuted and could worship freely.',
    },
  },
  {
    q: { el: 'Ο Κωνσταντίνος δεν υπέγραψε μόνος του το Διάταγμα των Μεδιολάνων. Ποιος άλλος αυτοκράτορας το υπέγραψε μαζί του;', en: 'Constantine did not sign the Edict of Milan alone. Which other emperor signed it with him?' },
    options: {
      el: ['Ο Ιουστινιανός', 'Ο Νέρωνας', 'Ο Θεοδόσιος', 'Ο Λικίνιος'],
      en: ['Justinian', 'Nero', 'Theodosius', 'Licinius'],
    },
    correct: 3,
    explanation: {
      el: 'Το υπέγραψε μαζί με τον Λικίνιο. Τότε η αυτοκρατορία είχε δύο αυτοκράτορες: ο Κωνσταντίνος κυβερνούσε τη Δύση και ο Λικίνιος την Ανατολή.',
      en: 'He signed it together with Licinius. At the time the empire had two emperors: Constantine ruled the West and Licinius the East.',
    },
  },

  // ── 13–18: Theodosius and the official religion ─────────────────────────────
  {
    q: { el: 'Ο Κωνσταντίνος και ο Θεοδόσιος έχουν τον ίδιο τίτλο δίπλα στο όνομά τους. Ποιον;', en: 'Constantine and Theodosius share the same title next to their names. Which one?' },
    options: {
      el: ['Ο Σοφός', 'Ο Μέγας', 'Ο Δίκαιος', 'Ο Πορφυρογέννητος'],
      en: ['The Wise', 'The Great', 'The Just', 'The Purple-born'],
    },
    correct: 1,
    explanation: {
      el: 'Και οι δύο λέγονται «Μέγας»: Μέγας Κωνσταντίνος και Μέγας Θεοδόσιος. Ο τίτλος δίνεται σε ηγέτες που άλλαξαν την ιστορία.',
      en: 'Both are called “the Great”: Constantine the Great and Theodosius the Great. The title goes to leaders who changed history.',
    },
  },
  {
    q: { el: 'Ποια χρονιά ο Θεοδόσιος έκανε τον χριστιανισμό επίσημη θρησκεία της αυτοκρατορίας;', en: 'In which year did Theodosius make Christianity the official religion of the empire?' },
    options: {
      el: ['Το 313 μ.Χ.', 'Το 330 μ.Χ.', 'Το 380 μ.Χ.', 'Το 410 μ.Χ.'],
      en: ['313 AD', '330 AD', '380 AD', '410 AD'],
    },
    correct: 2,
    explanation: {
      el: 'Έγινε το 380 μ.Χ. Θυμήσου τη σειρά: 313 ελευθερία στη θρησκεία, 330 νέα πρωτεύουσα, 380 επίσημη θρησκεία.',
      en: 'It happened in 380 AD. Remember the order: 313 freedom of religion, 330 new capital, 380 official religion.',
    },
  },
  {
    q: { el: 'Τι σημαίνει ότι μια θρησκεία είναι «επίσημη θρησκεία» του κράτους;', en: 'What does it mean that a religion is the “official religion” of a state?' },
    options: {
      el: ['Είναι η θρησκεία που αναγνωρίζει και στηρίζει το κράτος', 'Είναι η πιο παλιά θρησκεία στον κόσμο', 'Είναι η θρησκεία μόνο των αυτοκρατόρων', 'Είναι μια θρησκεία που απαγορεύεται'],
      en: ['It is the religion the state recognises and supports', 'It is the oldest religion in the world', 'It is the religion of the emperors only', 'It is a religion that is banned'],
    },
    correct: 0,
    explanation: {
      el: 'Επίσημη θρησκεία είναι αυτή που αναγνωρίζει και στηρίζει το κράτος. Με τον Θεοδόσιο, ο χριστιανισμός έγινε η θρησκεία ολόκληρης της αυτοκρατορίας.',
      en: 'The official religion is the one the state recognises and supports. Under Theodosius, Christianity became the religion of the whole empire.',
    },
  },
  {
    q: { el: 'Ο Θεοδόσιος σταμάτησε μια πολύ παλιά ελληνική γιορτή, που γινόταν κάθε τέσσερα χρόνια. Ποια;', en: 'Theodosius stopped a very old Greek festival that was held every four years. Which one?' },
    options: {
      el: ['Τα Παναθήναια', 'Τα Ελευσίνια', 'Τα Ίσθμια', 'Τους Ολυμπιακούς Αγώνες'],
      en: ['The Panathenaea', 'The Eleusinian festival', 'The Isthmian Games', 'The Olympic Games'],
    },
    correct: 3,
    explanation: {
      el: 'Σταμάτησε τους Ολυμπιακούς Αγώνες, γιατί ήταν γιορτή των αρχαίων θεών. Ξανάρχισαν μετά από 1.500 περίπου χρόνια, το 1896, στην Αθήνα!',
      en: 'He stopped the Olympic Games, because they were a festival of the ancient gods. They started again about 1,500 years later, in 1896, in Athens!',
    },
  },
  {
    q: { el: 'Τι έγινε με την αυτοκρατορία όταν πέθανε ο Θεοδόσιος, το 395 μ.Χ.;', en: 'What happened to the empire when Theodosius died, in 395 AD?' },
    options: {
      el: ['Την πήρε ο στρατός', 'Χωρίστηκε σε Ανατολική και Δυτική, μία για κάθε γιο του', 'Έμεινε χωρίς αυτοκράτορα για 100 χρόνια', 'Ενώθηκε με την Περσία'],
      en: ['The army took it over', 'It was split into East and West, one part for each of his sons', 'It had no emperor for 100 years', 'It joined with Persia'],
    },
    correct: 1,
    explanation: {
      el: 'Ο Θεοδόσιος τη μοίρασε στους δύο γιους του: ο Αρκάδιος πήρε την Ανατολή και ο Ονώριος τη Δύση. Από τότε η αυτοκρατορία δεν ξαναενώθηκε.',
      en: 'Theodosius divided it between his two sons: Arcadius got the East and Honorius the West. The empire was never joined together again.',
    },
  },
  {
    q: { el: 'Το ανατολικό κομμάτι της αυτοκρατορίας, με πρωτεύουσα την Κωνσταντινούπολη, πώς το ονομάζουμε σήμερα;', en: 'What do we call the eastern part of the empire today, the part with Constantinople as its capital?' },
    options: {
      el: ['Οθωμανική Αυτοκρατορία', 'Μακεδονική Αυτοκρατορία', 'Βυζαντινή Αυτοκρατορία', 'Περσική Αυτοκρατορία'],
      en: ['Ottoman Empire', 'Macedonian Empire', 'Byzantine Empire', 'Persian Empire'],
    },
    correct: 2,
    explanation: {
      el: 'Το λέμε Βυζαντινή Αυτοκρατορία, από το Βυζάντιο, την παλιά πόλη όπου χτίστηκε η Κωνσταντινούπολη. Έζησε για πάνω από 1.000 χρόνια!',
      en: 'We call it the Byzantine Empire, after Byzantium, the old city where Constantinople was built. It lasted for more than 1,000 years!',
    },
  },
];
