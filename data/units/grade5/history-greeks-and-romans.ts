/**
 * Ε' Δημοτικού · Ιστορία · Έλληνες & Ρωμαίοι
 * ===========================================
 * Original questions for a child of 10–11 (curriculum topics only — nothing from ebooks.edu.gr).
 * What the unit covers, in the order the class meets it:
 *   1–5   the Roman Empire: Rome, Italy, Greece becomes a province, the emperor, Augustus
 *   6–8   Pax Romana: what it means, roads and trade, the legions guarding the borders
 *   9–12  Greek culture in Rome: the Greek language, statues, Greek teachers, shared gods
 *   13–16 the early Christians and the journeys of the apostle Paul in Greek cities
 *   17–18 persecutions, the catacombs and the fish symbol, Constantine allows free worship
 */
import type { QuizQuestion } from '../../../types';

export const GRADE5_HISTORY_GREEKS_AND_ROMANS: QuizQuestion[] = [
  // ── 1–5: the Roman Empire ─────────────────────────────────────────────────
  {
    q: { el: 'Ποια πόλη ήταν η πρωτεύουσα της Ρωμαϊκής Αυτοκρατορίας;', en: 'Which city was the capital of the Roman Empire?' },
    options: { el: ['Η Αθήνα', 'Η Αλεξάνδρεια', 'Η Ρώμη', 'Η Σπάρτη'], en: ['Athens', 'Alexandria', 'Rome', 'Sparta'] },
    correct: 2,
    explanation: {
      el: 'Η Ρώμη ήταν η καρδιά της αυτοκρατορίας. Από εκεί πήρε και το όνομά της: Ρωμαϊκή!',
      en: 'Rome was the heart of the empire. That is where its name comes from: Roman!',
    },
  },
  {
    q: { el: 'Σε ποια σημερινή χώρα βρίσκεται η Ρώμη;', en: 'In which country is Rome today?' },
    options: { el: ['Στην Ιταλία', 'Στην Ισπανία', 'Στην Ελλάδα', 'Στη Γαλλία'], en: ['Italy', 'Spain', 'Greece', 'France'] },
    correct: 0,
    explanation: {
      el: 'Η Ρώμη είναι η πρωτεύουσα της Ιταλίας. Οι Ρωμαίοι ξεκίνησαν από εκεί και απλώθηκαν γύρω από όλη τη Μεσόγειο.',
      en: 'Rome is the capital of Italy. The Romans started there and spread all around the Mediterranean.',
    },
  },
  {
    q: { el: 'Τι έγινε η Ελλάδα όταν την κατέκτησαν οι Ρωμαίοι;', en: 'What did Greece become when the Romans conquered it?' },
    options: { el: ['Ανεξάρτητο βασίλειο', 'Επαρχία της Ρωμαϊκής Αυτοκρατορίας', 'Πρωτεύουσα της αυτοκρατορίας', 'Αποικία της Αιγύπτου'], en: ['An independent kingdom', 'A province of the Roman Empire', 'The capital of the empire', 'A colony of Egypt'] },
    correct: 1,
    explanation: {
      el: 'Η Ελλάδα έγινε επαρχία, δηλαδή ένα κομμάτι της αυτοκρατορίας που το διοικούσε Ρωμαίος άρχοντας.',
      en: 'Greece became a province, a part of the empire run by a Roman governor.',
    },
  },
  {
    q: { el: 'Ποιος κυβερνούσε ολόκληρη τη Ρωμαϊκή Αυτοκρατορία;', en: 'Who ruled the whole Roman Empire?' },
    options: { el: ['Ο βασιλιάς της Αθήνας', 'Ο φαραώ', 'Ο αρχιερέας', 'Ο αυτοκράτορας'], en: ['The king of Athens', 'The pharaoh', 'The high priest', 'The emperor'] },
    correct: 3,
    explanation: {
      el: 'Ο αυτοκράτορας ήταν ο ανώτατος άρχοντας. Διοικούσε τον στρατό, τους νόμους και όλες τις επαρχίες.',
      en: 'The emperor was the highest ruler. He commanded the army, the laws and all the provinces.',
    },
  },
  {
    q: { el: 'Ποιος ήταν ο πρώτος Ρωμαίος αυτοκράτορας;', en: 'Who was the first Roman emperor?' },
    options: { el: ['Ο Οκταβιανός Αύγουστος', 'Ο Μέγας Αλέξανδρος', 'Ο Περικλής', 'Ο Νέρωνας'], en: ['Octavian Augustus', 'Alexander the Great', 'Pericles', 'Nero'] },
    correct: 0,
    explanation: {
      el: 'Ο Οκταβιανός πήρε τον τίτλο «Αύγουστος» και έγινε ο πρώτος αυτοκράτορας. Ο μήνας Αύγουστος έχει το όνομά του!',
      en: 'Octavian took the title “Augustus” and became the first emperor. The month of August is named after him!',
    },
  },

  // ── 6–8: Pax Romana ───────────────────────────────────────────────────────
  {
    q: { el: 'Τι σημαίνει «Pax Romana»;', en: 'What does “Pax Romana” mean?' },
    options: { el: ['Ρωμαϊκός στρατός', 'Ρωμαϊκός νόμος', 'Ρωμαϊκή ειρήνη', 'Ρωμαϊκή γιορτή'], en: ['Roman army', 'Roman law', 'Roman peace', 'Roman festival'] },
    correct: 2,
    explanation: {
      el: '«Pax» στα λατινικά σημαίνει ειρήνη. Η Pax Romana ήταν μια μεγάλη περίοδος ηρεμίας μέσα στην αυτοκρατορία.',
      en: '“Pax” is Latin for peace. The Pax Romana was a long period of calm inside the empire.',
    },
  },
  {
    q: { el: 'Ο Νίκος είναι έμπορος την εποχή της Pax Romana. Τι τον βοηθούσε να ταξιδεύει με ασφάλεια;', en: 'Nikos is a merchant in the time of the Pax Romana. What helped him travel safely?' },
    options: { el: ['Τα τείχη γύρω από κάθε χωριό', 'Οι καλοί δρόμοι και τα λιμάνια', 'Τα αεροπλάνα', 'Οι χάρτες με θησαυρούς'], en: ['The walls around every village', 'The good roads and harbours', 'Aeroplanes', 'Treasure maps'] },
    correct: 1,
    explanation: {
      el: 'Οι Ρωμαίοι έφτιαξαν πέτρινους δρόμους και λιμάνια. Έτσι τα εμπορεύματα ταξίδευαν εύκολα από τη μία άκρη της αυτοκρατορίας στην άλλη.',
      en: 'The Romans built stone roads and harbours. Goods could travel easily from one end of the empire to the other.',
    },
  },
  {
    q: { el: 'Ποιοι φύλαγαν τα σύνορα της αυτοκρατορίας για να κρατούν την ειρήνη;', en: 'Who guarded the borders of the empire to keep the peace?' },
    options: { el: ['Οι ιερείς', 'Οι αθλητές', 'Οι έμποροι', 'Οι λεγεώνες των στρατιωτών'], en: ['The priests', 'The athletes', 'The merchants', 'The legions of soldiers'] },
    correct: 3,
    explanation: {
      el: 'Οι λεγεώνες ήταν μεγάλες ομάδες καλά εκπαιδευμένων στρατιωτών. Στρατοπέδευαν στα σύνορα και κρατούσαν μακριά τους εχθρούς.',
      en: 'Legions were large groups of well-trained soldiers. They camped at the borders and kept enemies away.',
    },
  },

  // ── 9–12: Greek culture in Rome ───────────────────────────────────────────
  {
    q: { el: 'Ποια ξένη γλώσσα μάθαιναν τα μορφωμένα Ρωμαιόπουλα;', en: 'Which foreign language did educated Roman children learn?' },
    options: { el: ['Τα ελληνικά', 'Τα αιγυπτιακά', 'Τα περσικά', 'Τα αγγλικά'], en: ['Greek', 'Egyptian', 'Persian', 'English'] },
    correct: 0,
    explanation: {
      el: 'Οι Ρωμαίοι θαύμαζαν τους Έλληνες. Τα παιδιά των πλούσιων μάθαιναν ελληνικά για να διαβάζουν τον Όμηρο και τους φιλοσόφους.',
      en: 'The Romans admired the Greeks. Children of rich families learned Greek so they could read Homer and the philosophers.',
    },
  },
  {
    q: { el: 'Η Ελένη βλέπει στο μουσείο ένα ρωμαϊκό άγαλμα που μοιάζει πολύ με ελληνικό. Γιατί;', en: 'Eleni sees a Roman statue in the museum that looks very Greek. Why?' },
    options: { el: ['Οι Έλληνες έκλεψαν την ιδέα από τους Ρωμαίους', 'Είναι τυχαίο', 'Οι Ρωμαίοι αντέγραφαν τα ελληνικά αγάλματα', 'Οι Ρωμαίοι δεν έφτιαχναν αγάλματα'], en: ['The Greeks stole the idea from the Romans', 'It is a coincidence', 'The Romans copied Greek statues', 'The Romans never made statues'] },
    correct: 2,
    explanation: {
      el: 'Οι Ρωμαίοι αγαπούσαν τόσο την ελληνική τέχνη, που έφτιαχναν αντίγραφα από διάσημα ελληνικά αγάλματα για τα σπίτια και τις πλατείες τους.',
      en: 'The Romans loved Greek art so much that they made copies of famous Greek statues for their houses and squares.',
    },
  },
  {
    q: { el: 'Ποιοι δίδασκαν συχνά τα παιδιά των πλούσιων Ρωμαίων;', en: 'Who often taught the children of rich Romans?' },
    options: { el: ['Ρωμαίοι στρατηγοί', 'Έλληνες δάσκαλοι', 'Αιγύπτιοι ιερείς', 'Πέρσες έμποροι'], en: ['Roman generals', 'Greek teachers', 'Egyptian priests', 'Persian merchants'] },
    correct: 1,
    explanation: {
      el: 'Πολλοί Έλληνες δούλευαν στη Ρώμη ως δάσκαλοι, γιατροί και καλλιτέχνες. Έτσι η ελληνική γνώση ταξίδεψε μέσα στα ρωμαϊκά σπίτια.',
      en: 'Many Greeks worked in Rome as teachers, doctors and artists. That is how Greek knowledge travelled into Roman homes.',
    },
  },
  {
    q: { el: 'Οι Ρωμαίοι λάτρευαν θεούς που έμοιαζαν με τους ελληνικούς. Ποιο ήταν το ρωμαϊκό όνομα του Δία;', en: 'The Romans worshipped gods much like the Greek ones. What was the Roman name for Zeus?' },
    options: { el: ['Απόλλωνας', 'Άρης', 'Ερμής', 'Γιούπιτερ'], en: ['Apollo', 'Mars', 'Mercury', 'Jupiter'] },
    correct: 3,
    explanation: {
      el: 'Ο Δίας, ο πατέρας των θεών, λεγόταν Γιούπιτερ στη Ρώμη. Οι Ρωμαίοι πήραν τους ελληνικούς μύθους και τους έδωσαν δικά τους ονόματα.',
      en: 'Zeus, the father of the gods, was called Jupiter in Rome. The Romans took the Greek myths and gave them their own names.',
    },
  },

  // ── 13–16: the early Christians and the apostle Paul ──────────────────────
  {
    q: { el: 'Σε ποια περιοχή της Ρωμαϊκής Αυτοκρατορίας εμφανίστηκαν οι πρώτοι Χριστιανοί;', en: 'In which region of the Roman Empire did the first Christians appear?' },
    options: { el: ['Στη Γαλατία', 'Στην Παλαιστίνη', 'Στη Βρετανία', 'Στην Ισπανία'], en: ['Gaul', 'Palestine', 'Britain', 'Spain'] },
    correct: 1,
    explanation: {
      el: 'Ο χριστιανισμός ξεκίνησε στην Παλαιστίνη, που τότε ήταν επαρχία της Ρώμης. Από εκεί απλώθηκε σε όλη την αυτοκρατορία.',
      en: 'Christianity began in Palestine, which was then a Roman province. From there it spread across the empire.',
    },
  },
  {
    q: { el: 'Ο απόστολος Παύλος ταξίδεψε πολύ. Ποιες από τις παρακάτω ελληνικές πόλεις επισκέφτηκε;', en: 'The apostle Paul travelled a lot. Which of these Greek cities did he visit?' },
    options: { el: ['Φιλίππους, Θεσσαλονίκη, Κόρινθο', 'Σπάρτη, Μυκήνες, Κνωσό', 'Τροία, Δελφούς, Ολυμπία', 'Μαραθώνα, Σαλαμίνα, Πλαταιές'], en: ['Philippi, Thessaloniki, Corinth', 'Sparta, Mycenae, Knossos', 'Troy, Delphi, Olympia', 'Marathon, Salamis, Plataea'] },
    correct: 0,
    explanation: {
      el: 'Ο Παύλος πήγε με πλοίο και με τα πόδια στους Φιλίππους, στη Θεσσαλονίκη, στην Αθήνα και στην Κόρινθο, για να μιλήσει στους ανθρώπους.',
      en: 'Paul went by ship and on foot to Philippi, Thessaloniki, Athens and Corinth to speak to the people.',
    },
  },
  {
    q: { el: 'Σε ποιο μέρος της Αθήνας μίλησε ο Παύλος στους Αθηναίους;', en: 'Where in Athens did Paul speak to the Athenians?' },
    options: { el: ['Στο Κολοσσαίο', 'Στον Παρθενώνα', 'Στον Άρειο Πάγο', 'Στο στάδιο'], en: ['At the Colosseum', 'At the Parthenon', 'At the Areopagus', 'At the stadium'] },
    correct: 2,
    explanation: {
      el: 'Ο Παύλος μίλησε στον Άρειο Πάγο, τον βράχο κοντά στην Ακρόπολη όπου μαζεύονταν οι Αθηναίοι για να ακούν και να συζητούν.',
      en: 'Paul spoke at the Areopagus, the rock near the Acropolis where Athenians gathered to listen and debate.',
    },
  },
  {
    q: { el: 'Πώς κρατούσε επαφή ο Παύλος με τις πόλεις που είχε επισκεφτεί;', en: 'How did Paul keep in touch with the cities he had visited?' },
    options: { el: ['Με μηνύματα στο κινητό', 'Με επιστολές που τις μετέφεραν ταξιδιώτες', 'Με καπνούς φωτιάς', 'Με περιστέρια'], en: ['With messages on a mobile phone', 'With letters carried by travellers', 'With smoke signals', 'With pigeons'] },
    correct: 1,
    explanation: {
      el: 'Ο Παύλος έγραφε επιστολές, δηλαδή γράμματα, στους Θεσσαλονικείς, στους Κορίνθιους και σε άλλους. Πολλές από αυτές σώζονται μέχρι σήμερα.',
      en: 'Paul wrote epistles, that is letters, to the Thessalonians, the Corinthians and others. Many of them survive to this day.',
    },
  },

  // ── 17–18: persecutions and freedom of worship ────────────────────────────
  {
    q: { el: 'Τι ήταν οι κατακόμβες, όπου συναντιούνταν κρυφά οι πρώτοι Χριστιανοί;', en: 'What were the catacombs, where the early Christians met in secret?' },
    options: { el: ['Ψηλοί πύργοι', 'Πλοία στο λιμάνι', 'Ναοί στην αγορά', 'Υπόγειες στοές κάτω από τη Ρώμη'], en: ['Tall towers', 'Ships in the harbour', 'Temples in the market', 'Underground tunnels beneath Rome'] },
    correct: 3,
    explanation: {
      el: 'Οι Χριστιανοί διώκονταν, γιατί δεν λάτρευαν τους ρωμαϊκούς θεούς. Γι\' αυτό μαζεύονταν κρυφά στις κατακόμβες και αναγνώριζαν ο ένας τον άλλο με το σύμβολο του ψαριού.',
      en: 'Christians were persecuted because they did not worship the Roman gods. So they met secretly in the catacombs and recognised each other with the fish symbol.',
    },
  },
  {
    q: { el: 'Ποιος αυτοκράτορας επέτρεψε στους Χριστιανούς να λατρεύουν ελεύθερα τον Θεό τους;', en: 'Which emperor allowed the Christians to worship freely?' },
    options: { el: ['Ο Μέγας Κωνσταντίνος', 'Ο Οκταβιανός Αύγουστος', 'Ο Ιούλιος Καίσαρας', 'Ο Νέρωνας'], en: ['Constantine the Great', 'Octavian Augustus', 'Julius Caesar', 'Nero'] },
    correct: 0,
    explanation: {
      el: 'Ο Μέγας Κωνσταντίνος σταμάτησε τους διωγμούς και έδωσε στους Χριστιανούς το δικαίωμα να λατρεύουν ελεύθερα. Αργότερα έχτισε μια νέα πρωτεύουσα, την Κωνσταντινούπολη.',
      en: 'Constantine the Great ended the persecutions and gave Christians the right to worship freely. Later he built a new capital, Constantinople.',
    },
  },
];
