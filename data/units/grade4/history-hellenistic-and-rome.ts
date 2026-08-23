/**
 * Δ' Δημοτικού · Ιστορία · Ελληνιστικά Χρόνια & Ρώμη
 * ====================================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr). Language level:
 * a child of 9–10. What the unit covers, in the order a Δ' class meets it:
 *   1–4   after Alexander: the Successors (Διάδοχοι), Ptolemy in Egypt, Seleucus in Asia,
 *         Macedonia, and the Greek language spreading across the Hellenistic world
 *   5–7   Pyrrhus of Epirus: his elephants, his wars in Italy, the «Πύρρειος νίκη»
 *   8–10  Alexandria: the Library, the Museum of scholars, the Lighthouse (Φάρος)
 *   11–12 Rome: the legend of Romulus and Remus, the Senate and the Republic
 *   13–15 Carthage, Hannibal crossing the Alps with elephants, Rome wins the Punic Wars
 *   16–18 Rome turns to Greece: Pydna, Corinth 146 BC, Greece a Roman province — and how
 *         Greek ideas went on to shape Rome
 */
import type { QuizQuestion } from '../../../types';

export const GRADE4_HISTORY_HELLENISTIC_AND_ROME: QuizQuestion[] = [
  // ── 1–4: the Successors ─────────────────────────────────────────────────────
  {
    q: { el: 'Όταν πέθανε ο Μέγας Αλέξανδρος, ποιοι μοιράστηκαν το τεράστιο κράτος του;', en: 'When Alexander the Great died, who divided up his huge empire?' },
    options: { el: ['Οι στρατηγοί του', 'Οι Πέρσες', 'Οι Ρωμαίοι', 'Οι Σπαρτιάτες'], en: ['His generals', 'The Persians', 'The Romans', 'The Spartans'] },
    correct: 0,
    explanation: {
      el: 'Οι στρατηγοί του Αλέξανδρου μοιράστηκαν το κράτος του. Τους λέμε «Διαδόχους», γιατί τον διαδέχτηκαν.',
      en: 'Alexander’s generals divided his empire among themselves. We call them the “Successors” because they came after him.',
    },
  },
  {
    q: { el: 'Ποιος Διάδοχος έγινε βασιλιάς της Αιγύπτου;', en: 'Which Successor became king of Egypt?' },
    options: { el: ['Ο Σέλευκος', 'Ο Πτολεμαίος', 'Ο Αντίγονος', 'Ο Πύρρος'], en: ['Seleucus', 'Ptolemy', 'Antigonus', 'Pyrrhus'] },
    correct: 1,
    explanation: {
      el: 'Ο Πτολεμαίος πήρε την Αίγυπτο και έκανε πρωτεύουσα την Αλεξάνδρεια. Η οικογένειά του βασίλεψε εκεί για πολλά χρόνια.',
      en: 'Ptolemy took Egypt and made Alexandria his capital. His family ruled there for many years.',
    },
  },
  {
    q: { el: 'Ο Σέλευκος πήρε το μεγαλύτερο κομμάτι του κράτους. Πού βρισκόταν;', en: 'Seleucus took the biggest part of the empire. Where was it?' },
    options: { el: ['Στην Ιταλία', 'Στην Αίγυπτο', 'Στην Ασία', 'Στην Ισπανία'], en: ['In Italy', 'In Egypt', 'In Asia', 'In Spain'] },
    correct: 2,
    explanation: {
      el: 'Το βασίλειο του Σέλευκου ήταν στην Ασία, από τη Συρία μέχρι πολύ μακριά στην Ανατολή.',
      en: 'Seleucus’s kingdom was in Asia, stretching from Syria far into the East.',
    },
  },
  {
    q: { el: 'Στα ελληνιστικά χρόνια, ποια γλώσσα μιλούσαν οι άνθρωποι σε όλα αυτά τα βασίλεια για να συνεννοούνται;', en: 'In Hellenistic times, which language did people across all these kingdoms use to understand each other?' },
    options: { el: ['Τα λατινικά', 'Τα ελληνικά', 'Τα περσικά', 'Τα αιγυπτιακά'], en: ['Latin', 'Greek', 'Persian', 'Egyptian'] },
    correct: 1,
    explanation: {
      el: 'Τα ελληνικά έγιναν η κοινή γλώσσα από την Αίγυπτο μέχρι την Ασία. Γι\' αυτό τα χρόνια αυτά λέγονται «ελληνιστικά».',
      en: 'Greek became the shared language from Egypt to Asia. That is why these years are called “Hellenistic”.',
    },
  },

  // ── 5–7: Pyrrhus of Epirus ─────────────────────────────────────────────────
  {
    q: { el: 'Ο Πύρρος ήταν βασιλιάς…', en: 'Pyrrhus was the king of…' },
    options: { el: ['της Ηπείρου', 'της Αιγύπτου', 'της Ρώμης', 'της Κρήτης'], en: ['Epirus', 'Egypt', 'Rome', 'Crete'] },
    correct: 0,
    explanation: {
      el: 'Ο Πύρρος ήταν βασιλιάς της Ηπείρου, στη βορειοδυτική Ελλάδα. Ήταν γενναίος και ήθελε να γίνει σαν τον Αλέξανδρο.',
      en: 'Pyrrhus was king of Epirus, in north-western Greece. He was brave and wanted to be like Alexander.',
    },
  },
  {
    q: { el: 'Ποιο ζώο έφερε ο Πύρρος στην Ιταλία, που οι Ρωμαίοι δεν είχαν ξαναδεί ποτέ;', en: 'Which animal did Pyrrhus bring to Italy that the Romans had never seen before?' },
    options: { el: ['Καμήλες', 'Λιοντάρια', 'Ελέφαντες', 'Αρκούδες'], en: ['Camels', 'Lions', 'Elephants', 'Bears'] },
    correct: 2,
    explanation: {
      el: 'Ο Πύρρος πήγε στην Ιταλία με πολεμικούς ελέφαντες. Οι Ρωμαίοι τρόμαξαν, γιατί δεν είχαν ξαναδεί τέτοια ζώα!',
      en: 'Pyrrhus went to Italy with war elephants. The Romans were shocked, they had never seen such animals!',
    },
  },
  {
    q: { el: 'Τι σημαίνει η φράση «Πύρρειος νίκη»;', en: 'What does the phrase “Pyrrhic victory” mean?' },
    options: { el: ['Νίκη χωρίς καμία προσπάθεια', 'Νίκη που κόστισε τόσο πολύ, που μοιάζει με ήττα', 'Νίκη με ελέφαντες', 'Νίκη σε αγώνα δρόμου'], en: ['A victory with no effort at all', 'A victory that cost so much it feels like a defeat', 'A victory using elephants', 'A victory in a running race'] },
    correct: 1,
    explanation: {
      el: 'Ο Πύρρος νίκησε τους Ρωμαίους, αλλά έχασε τόσους στρατιώτες που είπε: «Άλλη μια τέτοια νίκη και χαθήκαμε!».',
      en: 'Pyrrhus beat the Romans but lost so many soldiers that he said: “One more victory like this and we are finished!”',
    },
  },

  // ── 8–10: Alexandria ───────────────────────────────────────────────────────
  {
    q: { el: 'Η Βιβλιοθήκη της Αλεξάνδρειας ήταν διάσημη γιατί…', en: 'The Library of Alexandria was famous because…' },
    options: { el: ['είχε το πιο ψηλό κτίριο του κόσμου', 'είχε χιλιάδες βιβλία από όλο τον κόσμο', 'ήταν χτισμένη μέσα στη θάλασσα', 'είχε μόνο χάρτες'], en: ['it had the tallest building in the world', 'it had thousands of books from all over the world', 'it was built in the sea', 'it only had maps'] },
    correct: 1,
    explanation: {
      el: 'Οι Πτολεμαίοι μάζεψαν στη Βιβλιοθήκη χιλιάδες παπύρους από παντού. Ήταν η μεγαλύτερη βιβλιοθήκη του αρχαίου κόσμου.',
      en: 'The Ptolemies collected thousands of papyrus scrolls from everywhere. It was the biggest library of the ancient world.',
    },
  },
  {
    q: { el: 'Δίπλα στη Βιβλιοθήκη υπήρχε το «Μουσείο». Τι ήταν;', en: 'Next to the Library stood the “Museum”. What was it?' },
    options: { el: ['Ένα μέρος όπου σοφοί μελετούσαν και έκαναν πειράματα', 'Ένα θέατρο για παραστάσεις', 'Ένα παλάτι για τον βασιλιά', 'Μια αγορά με αγάλματα'], en: ['A place where scholars studied and did experiments', 'A theatre for plays', 'A palace for the king', 'A market selling statues'] },
    correct: 0,
    explanation: {
      el: 'Στο Μουσείο ζούσαν και δούλευαν σοφοί: αστρονόμοι, γιατροί, μαθηματικοί. Ήταν σαν ένα μεγάλο πανεπιστήμιο.',
      en: 'Scholars lived and worked in the Museum: astronomers, doctors, mathematicians. It was like a big university.',
    },
  },
  {
    q: { el: 'Ο Φάρος της Αλεξάνδρειας ήταν ένα από τα Επτά Θαύματα του κόσμου. Σε τι χρησίμευε;', en: 'The Lighthouse of Alexandria was one of the Seven Wonders of the world. What was it for?' },
    options: { el: ['Φύλαγε τα βιβλία της Βιβλιοθήκης', 'Οδηγούσε τα πλοία με το φως του στο λιμάνι', 'Ήταν ο τάφος του Αλέξανδρου', 'Μετρούσε την ώρα'], en: ['It guarded the Library’s books', 'It guided ships into the harbour with its light', 'It was Alexander’s tomb', 'It measured the time'] },
    correct: 1,
    explanation: {
      el: 'Ο Φάρος ήταν ένας πανύψηλος πύργος με φωτιά στην κορυφή. Τα πλοία έβλεπαν το φως του από μακριά και έβρισκαν το λιμάνι.',
      en: 'The Lighthouse was a very tall tower with a fire at the top. Ships saw its light from far away and found the harbour.',
    },
  },

  // ── 11–12: Rome ────────────────────────────────────────────────────────────
  {
    q: { el: 'Σύμφωνα με τον μύθο, ποιο ζώο φρόντισε τα δίδυμα Ρωμύλο και Ρώμο όταν ήταν μωρά;', en: 'According to the legend, which animal looked after the twins Romulus and Remus when they were babies?' },
    options: { el: ['Μια λύκαινα', 'Μια αρκούδα', 'Μια αλεπού', 'Ένας αετός'], en: ['A she-wolf', 'A bear', 'A fox', 'An eagle'] },
    correct: 0,
    explanation: {
      el: 'Ο μύθος λέει ότι μια λύκαινα βρήκε τα δίδυμα και τα τάισε. Όταν μεγάλωσαν, ο Ρωμύλος έχτισε τη Ρώμη.',
      en: 'The legend says a she-wolf found the twins and fed them. When they grew up, Romulus built Rome.',
    },
  },
  {
    q: { el: 'Η Ρώμη ήταν Δημοκρατία. Ποιο ήταν το πιο σημαντικό συμβούλιο που έπαιρνε τις αποφάσεις;', en: 'Rome was a Republic. What was the most important council that made the decisions?' },
    options: { el: ['Η Βουλή των Πεντακοσίων', 'Η Σύγκλητος', 'Το Μουσείο', 'Η Εκκλησία του Δήμου'], en: ['The Council of Five Hundred', 'The Senate', 'The Museum', 'The Assembly of the People'] },
    correct: 1,
    explanation: {
      el: 'Στη Ρώμη δεν υπήρχε βασιλιάς. Τις μεγάλες αποφάσεις τις έπαιρνε η Σύγκλητος, μια ομάδα από σοφούς και πλούσιους Ρωμαίους.',
      en: 'Rome had no king. The big decisions were made by the Senate, a group of wise and wealthy Romans.',
    },
  },

  // ── 13–15: Carthage and Hannibal ───────────────────────────────────────────
  {
    q: { el: 'Η Καρχηδόνα, η μεγάλη αντίπαλος της Ρώμης, βρισκόταν…', en: 'Carthage, Rome’s great rival, was located…' },
    options: { el: ['στη βόρεια Αφρική', 'στην Ελλάδα', 'στην Αίγυπτο', 'στη Γαλλία'], en: ['in North Africa', 'in Greece', 'in Egypt', 'in France'] },
    correct: 0,
    explanation: {
      el: 'Η Καρχηδόνα ήταν μια πλούσια πόλη στη βόρεια Αφρική, απέναντι από τη Σικελία. Είχε πολλά πλοία και εμπόρους.',
      en: 'Carthage was a rich city in North Africa, across the sea from Sicily. It had many ships and merchants.',
    },
  },
  {
    q: { el: 'Ο Αννίβας ξάφνιασε τους Ρωμαίους, γιατί μπήκε στην Ιταλία…', en: 'Hannibal surprised the Romans because he entered Italy…' },
    options: { el: ['με πλοία από τη θάλασσα', 'περνώντας με ελέφαντες πάνω από τις Άλπεις', 'με υπόγεια σήραγγα', 'κρυμμένος σε ένα ξύλινο άλογο'], en: ['by ship from the sea', 'by crossing the Alps with elephants', 'through an underground tunnel', 'hidden inside a wooden horse'] },
    correct: 1,
    explanation: {
      el: 'Ο Αννίβας πέρασε τα χιονισμένα βουνά των Άλπεων με τον στρατό του και τους ελέφαντές του. Κανείς δεν το περίμενε!',
      en: 'Hannibal crossed the snowy Alps with his army and his elephants. Nobody expected it!',
    },
  },
  {
    q: { el: 'Ποιος νίκησε τελικά στους μεγάλους πολέμους ανάμεσα στη Ρώμη και την Καρχηδόνα;', en: 'Who finally won the great wars between Rome and Carthage?' },
    options: { el: ['Η Καρχηδόνα', 'Κανείς, έγιναν φίλοι', 'Η Ρώμη', 'Η Μακεδονία'], en: ['Carthage', 'Nobody, they became friends', 'Rome', 'Macedonia'] },
    correct: 2,
    explanation: {
      el: 'Μετά από πολλά χρόνια, η Ρώμη νίκησε την Καρχηδόνα. Έτσι έγινε η πιο δυνατή δύναμη στη Μεσόγειο.',
      en: 'After many years, Rome defeated Carthage. That made Rome the strongest power in the Mediterranean.',
    },
  },

  // ── 16–18: Rome conquers Greece ────────────────────────────────────────────
  {
    q: { el: 'Μετά την Καρχηδόνα, οι Ρωμαίοι στράφηκαν προς την Ελλάδα. Ποιο ελληνικό βασίλειο νίκησαν πρώτο, στην Πύδνα;', en: 'After Carthage, the Romans turned towards Greece. Which Greek kingdom did they defeat first, at Pydna?' },
    options: { el: ['Τη Σπάρτη', 'Τη Μακεδονία', 'Την Ήπειρο', 'Την Αθήνα'], en: ['Sparta', 'Macedonia', 'Epirus', 'Athens'] },
    correct: 1,
    explanation: {
      el: 'Στη μάχη της Πύδνας οι Ρωμαίοι νίκησαν τον βασιλιά της Μακεδονίας. Η Μακεδονία, η πατρίδα του Αλέξανδρου, έπεσε στα χέρια τους.',
      en: 'At the battle of Pydna the Romans defeated the king of Macedonia. Macedonia, Alexander’s homeland, fell into their hands.',
    },
  },
  {
    q: { el: 'Το 146 π.Χ. οι Ρωμαίοι κατέστρεψαν μια πλούσια ελληνική πόλη και η Ελλάδα έγινε ρωμαϊκή επαρχία. Ποια πόλη ήταν;', en: 'In 146 BC the Romans destroyed a rich Greek city, and Greece became a Roman province. Which city was it?' },
    options: { el: ['Η Αθήνα', 'Η Θήβα', 'Η Κόρινθος', 'Η Πέλλα'], en: ['Athens', 'Thebes', 'Corinth', 'Pella'] },
    correct: 2,
    explanation: {
      el: 'Το 146 π.Χ. οι Ρωμαίοι κατέστρεψαν την Κόρινθο. Από τότε η Ελλάδα ανήκε στη Ρώμη και λεγόταν «Αχαΐα».',
      en: 'In 146 BC the Romans destroyed Corinth. From then on Greece belonged to Rome and was called “Achaea”.',
    },
  },
  {
    q: { el: 'Οι Ρωμαίοι κατέκτησαν την Ελλάδα, αλλά οι Έλληνες «κατέκτησαν» τη Ρώμη. Τι εννοούμε;', en: 'The Romans conquered Greece, but the Greeks “conquered” Rome. What do we mean?' },
    options: { el: ['Οι Έλληνες πήραν πίσω την Ελλάδα με πόλεμο', 'Οι Ρωμαίοι αγάπησαν την ελληνική τέχνη, τη γλώσσα και τις ιδέες', 'Ο Πύρρος έγινε βασιλιάς της Ρώμης', 'Οι Ρωμαίοι μετακόμισαν όλοι στην Αθήνα'], en: ['The Greeks took Greece back by war', 'The Romans fell in love with Greek art, language and ideas', 'Pyrrhus became king of Rome', 'All the Romans moved to Athens'] },
    correct: 1,
    explanation: {
      el: 'Οι Ρωμαίοι θαύμαζαν τα ελληνικά αγάλματα, τα βιβλία και τους φιλοσόφους. Τα πλούσια Ρωμαιόπουλα μάθαιναν ελληνικά!',
      en: 'The Romans admired Greek statues, books and philosophers. Wealthy Roman children even learned Greek!',
    },
  },
];
