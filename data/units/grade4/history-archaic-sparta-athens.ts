/**
 * Δ' Δημοτικού · Ιστορία · Σπάρτη & Αθήνα (Αρχαϊκά χρόνια)
 * ========================================================
 * Original questions (curriculum topics only — no textbook text). Language level: a child of 9–10.
 *
 * What the unit covers, in the order a Δ' class meets it:
 *   1–4   the Olympic Games: where, for whom, the prize, the sacred truce
 *   5–6   the oracle of Delphi: Apollo, the Pythia, who asked and why
 *   7–10  Sparta: Lycurgus the lawgiver, the agoge, the two kings, the Spartan way of life
 *   11–13 Athens: Solon's laws (debt relief, people's court), Peisistratus the tyrant
 *   14–18 Cleisthenes: the ten tribes, the Boule of 500, ostracism, what «δημοκρατία» means
 */
import type { QuizQuestion } from '../../../types';

export const GRADE4_HISTORY_ARCHAIC_SPARTA_ATHENS: QuizQuestion[] = [
  // ── 1–4: the Olympic Games ──────────────────────────────────────────────────
  {
    q: { el: 'Σε ποιο μέρος της Ελλάδας γίνονταν οι αρχαίοι Ολυμπιακοί Αγώνες;', en: 'In which part of Greece were the ancient Olympic Games held?' },
    options: { el: ['Στην Ολυμπία', 'Στην Αθήνα', 'Στη Σπάρτη', 'Στον Όλυμπο'], en: ['At Olympia', 'In Athens', 'In Sparta', 'On Mount Olympus'] },
    correct: 0,
    explanation: {
      el: 'Οι αγώνες γίνονταν στην Ολυμπία, στην Πελοπόννησο. Από εκεί πήραν και το όνομά τους, όχι από το βουνό Όλυμπο.',
      en: 'The Games were held at Olympia, in the Peloponnese. That is where their name comes from, not from Mount Olympus.',
    },
  },
  {
    q: { el: 'Προς τιμήν ποιου θεού γίνονταν οι Ολυμπιακοί Αγώνες;', en: 'Which god were the Olympic Games held in honour of?' },
    options: { el: ['Του Ποσειδώνα', 'Του Δία', 'Του Απόλλωνα', 'Του Άρη'], en: ['Poseidon', 'Zeus', 'Apollo', 'Ares'] },
    correct: 1,
    explanation: {
      el: 'Οι Ολυμπιακοί Αγώνες ήταν γιορτή για τον Δία. Στην Ολυμπία υπήρχε ένας μεγάλος ναός του με ένα τεράστιο άγαλμα από χρυσό και ελεφαντόδοντο.',
      en: 'The Olympic Games were a festival for Zeus. At Olympia he had a great temple with a huge statue made of gold and ivory.',
    },
  },
  {
    q: { el: 'Τι έπαιρνε ο νικητής στους Ολυμπιακούς Αγώνες;', en: 'What did a winner at the Olympic Games receive?' },
    options: { el: ['Ένα χρυσό μετάλλιο', 'Ένα σακί με χρυσά νομίσματα', 'Ένα στεφάνι από κλαδί ελιάς', 'Ένα άλογο'], en: ['A gold medal', 'A bag of gold coins', 'A wreath of olive branches', 'A horse'] },
    correct: 2,
    explanation: {
      el: 'Ο νικητής έπαιρνε μόνο ένα στεφάνι από αγριελιά, τον «κότινο». Η μεγάλη δόξα ήταν το βραβείο του. Τα μετάλλια είναι σύγχρονη ιδέα.',
      en: 'The winner got only a wreath of wild olive, the «kotinos». Great glory was his real prize. Medals are a modern idea.',
    },
  },
  {
    q: { el: 'Τι ήταν η «εκεχειρία» στους Ολυμπιακούς Αγώνες;', en: 'What was the Olympic «truce»?' },
    options: { el: ['Ο κανόνας να τρέχουν όλοι ξυπόλητοι', 'Η παύση των πολέμων για να φτάσουν όλοι με ασφάλεια', 'Το γεύμα των αθλητών πριν τον αγώνα', 'Ο όρκος του νικητή'], en: ['The rule that everyone ran barefoot', 'A pause in all wars so everyone could travel safely', 'The athletes\' meal before the race', 'The winner\'s oath'] },
    correct: 1,
    explanation: {
      el: 'Πριν τους αγώνες οι πόλεις σταματούσαν τους πολέμους τους. Έτσι αθλητές και θεατές ταξίδευαν στην Ολυμπία χωρίς φόβο.',
      en: 'Before the Games the cities stopped their wars. That way athletes and visitors could travel to Olympia without fear.',
    },
  },

  // ── 5–6: the oracle of Delphi ─────────────────────────────────────────────
  {
    q: { el: 'Ποιος θεός είχε το φημισμένο μαντείο στους Δελφούς;', en: 'Which god had the famous oracle at Delphi?' },
    options: { el: ['Ο Δίας', 'Ο Ερμής', 'Ο Απόλλωνας', 'Ο Ήφαιστος'], en: ['Zeus', 'Hermes', 'Apollo', 'Hephaestus'] },
    correct: 2,
    explanation: {
      el: 'Το μαντείο των Δελφών ανήκε στον Απόλλωνα. Οι αρχαίοι πίστευαν ότι εκεί ο θεός απαντούσε στις ερωτήσεις των ανθρώπων.',
      en: 'The oracle of Delphi belonged to Apollo. The ancient Greeks believed the god answered people\'s questions there.',
    },
  },
  {
    q: { el: 'Πώς λεγόταν η ιέρεια που έδινε τους χρησμούς στους Δελφούς;', en: 'What was the priestess who gave the prophecies at Delphi called?' },
    options: { el: ['Η Αθηνά', 'Η Πυθία', 'Η Ελένη', 'Η Αριάδνη'], en: ['Athena', 'The Pythia', 'Helen', 'Ariadne'] },
    correct: 1,
    explanation: {
      el: 'Η Πυθία καθόταν σε έναν τρίποδα και έλεγε τον χρησμό. Τα λόγια της ήταν συχνά μπερδεμένα, και ο καθένας τα καταλάβαινε αλλιώς!',
      en: 'The Pythia sat on a tripod and spoke the prophecy. Her words were often puzzling, and everyone understood them differently!',
    },
  },

  // ── 7–10: Sparta ───────────────────────────────────────────────────────────
  {
    q: { el: 'Ποιος, σύμφωνα με την παράδοση, έδωσε τους νόμους στη Σπάρτη;', en: 'According to tradition, who gave Sparta its laws?' },
    options: { el: ['Ο Σόλωνας', 'Ο Λυκούργος', 'Ο Περικλής', 'Ο Λεωνίδας'], en: ['Solon', 'Lycurgus', 'Pericles', 'Leonidas'] },
    correct: 1,
    explanation: {
      el: 'Ο Λυκούργος ήταν ο νομοθέτης της Σπάρτης. Λένε ότι ρώτησε πρώτα το μαντείο των Δελφών και μετά έφτιαξε τους νόμους.',
      en: 'Lycurgus was the lawgiver of Sparta. The story says he first asked the oracle of Delphi and then made the laws.',
    },
  },
  {
    q: { el: 'Σε ποια ηλικία άφηναν τα αγόρια της Σπάρτης το σπίτι τους για να ξεκινήσουν τη σκληρή εκπαίδευση;', en: 'At what age did Spartan boys leave home to begin their tough training?' },
    options: { el: ['Στα 3', 'Στα 7', 'Στα 12', 'Στα 18'], en: ['At 3', 'At 7', 'At 12', 'At 18'] },
    correct: 1,
    explanation: {
      el: 'Στα 7 τους τα αγόρια έφευγαν από το σπίτι και ζούσαν όλα μαζί. Μάθαιναν να αντέχουν το κρύο, την πείνα και τον πόνο, για να γίνουν γενναίοι στρατιώτες.',
      en: 'At age 7 the boys left home and lived all together. They learned to bear cold, hunger and pain, so they would become brave soldiers.',
    },
  },
  {
    q: { el: 'Τι θεωρούσαν οι Σπαρτιάτες ως το πιο σημαντικό πράγμα να μάθει ένα παιδί;', en: 'What did the Spartans think was the most important thing for a child to learn?' },
    options: { el: ['Να γράφει όμορφα ποιήματα', 'Να φτιάχνει αγάλματα', 'Να είναι δυνατό, πειθαρχημένο και γενναίο', 'Να κάνει εμπόριο'], en: ['To write beautiful poems', 'To make statues', 'To be strong, disciplined and brave', 'To do trade'] },
    correct: 2,
    explanation: {
      el: 'Η Σπάρτη ήθελε τέλειους στρατιώτες. Γι\' αυτό τα παιδιά μάθαιναν γυμναστική, υπακοή και να μιλούν λίγο και σωστά, δηλαδή «λακωνικά».',
      en: 'Sparta wanted perfect soldiers. So children learned exercise, obedience and how to speak briefly and well — «laconically».',
    },
  },
  {
    q: { el: 'Πόσους βασιλιάδες είχε η Σπάρτη ταυτόχρονα;', en: 'How many kings did Sparta have at the same time?' },
    options: { el: ['Κανέναν', 'Έναν', 'Δύο', 'Πέντε'], en: ['None', 'One', 'Two', 'Five'] },
    correct: 2,
    explanation: {
      el: 'Η Σπάρτη είχε δύο βασιλιάδες μαζί, από δύο διαφορετικές οικογένειες. Τους βοηθούσαν η Γερουσία, δηλαδή οι γέροντες, και οι πέντε έφοροι.',
      en: 'Sparta had two kings at once, from two different families. They were helped by the Gerousia, the council of elders, and the five ephors.',
    },
  },

  // ── 11–13: Athens — Solon and Peisistratus ────────────────────────────────
  {
    q: { el: 'Ο Σόλωνας έφτιαξε νέους νόμους στην Αθήνα. Ποιο πρόβλημα ήθελε να λύσει πρώτα;', en: 'Solon made new laws in Athens. Which problem did he want to solve first?' },
    options: { el: ['Οι φτωχοί αγρότες είχαν τόσα χρέη που γίνονταν δούλοι', 'Δεν υπήρχαν αρκετά πλοία', 'Η πόλη δεν είχε τείχη', 'Οι αθλητές δεν είχαν στάδιο'], en: ['Poor farmers had so many debts that they became slaves', 'There were not enough ships', 'The city had no walls', 'The athletes had no stadium'] },
    correct: 0,
    explanation: {
      el: 'Ο Σόλωνας έσβησε τα χρέη των φτωχών και απαγόρευσε να γίνεται κανείς Αθηναίος δούλος για χρέη. Αυτό το λέμε «σεισάχθεια», δηλαδή «ξεφόρτωμα του βάρους».',
      en: 'Solon cancelled the debts of the poor and banned making any Athenian a slave for debt. This was called «seisachtheia», the «shaking off of burdens».',
    },
  },
  {
    q: { el: 'Τι έκανε ο Σόλωνας για να έχουν και οι απλοί πολίτες λόγο στην Αθήνα;', en: 'What did Solon do so that ordinary citizens also had a say in Athens?' },
    options: { el: ['Τους έκανε όλους στρατηγούς', 'Τους μοίρασε χρυσάφι', 'Έστειλε τους πλούσιους μακριά από την πόλη', 'Έδωσε σε όλους τους πολίτες δικαίωμα στην Εκκλησία του Δήμου και στο δικαστήριο'], en: ['He made them all generals', 'He gave them gold', 'He sent the rich away from the city', 'He gave all citizens a place in the assembly and in the people\'s court'] },
    correct: 3,
    explanation: {
      el: 'Με τον Σόλωνα όλοι οι πολίτες, ακόμη και οι φτωχοί, μπορούσαν να ψηφίζουν στην Εκκλησία του Δήμου και να γίνονται δικαστές στην Ηλιαία.',
      en: 'Under Solon all citizens, even the poor, could vote in the assembly and serve as judges in the people\'s court, the Heliaia.',
    },
  },
  {
    q: { el: 'Ο Πεισίστρατος πήρε την εξουσία στην Αθήνα με τη βία και κυβέρνησε μόνος του. Πώς λέγεται ένας τέτοιος άρχοντας;', en: 'Peisistratus took power in Athens by force and ruled alone. What is such a ruler called?' },
    options: { el: ['Βασιλιάς', 'Τύραννος', 'Έφορος', 'Στρατηγός'], en: ['A king', 'A tyrant', 'An ephor', 'A general'] },
    correct: 1,
    explanation: {
      el: 'Ο Πεισίστρατος ήταν τύραννος: κυβερνούσε μόνος, χωρίς να τον διαλέξει ο λαός. Όμως βοήθησε τους αγρότες και στόλισε την Αθήνα με ναούς και γιορτές.',
      en: 'Peisistratus was a tyrant: he ruled alone, without being chosen by the people. Still, he helped the farmers and gave Athens new temples and festivals.',
    },
  },

  // ── 14–18: Cleisthenes and democracy ──────────────────────────────────────
  {
    q: { el: 'Ποιος θεωρείται ο «πατέρας» της δημοκρατίας στην Αθήνα;', en: 'Who is considered the «father» of democracy in Athens?' },
    options: { el: ['Ο Λυκούργος', 'Ο Πεισίστρατος', 'Ο Κλεισθένης', 'Ο Δίας'], en: ['Lycurgus', 'Peisistratus', 'Cleisthenes', 'Zeus'] },
    correct: 2,
    explanation: {
      el: 'Ο Κλεισθένης άλλαξε τους νόμους της Αθήνας ώστε να αποφασίζει ο λαός. Γι\' αυτό τον λέμε «πατέρα της δημοκρατίας».',
      en: 'Cleisthenes changed the laws of Athens so that the people made the decisions. That is why we call him the «father of democracy».',
    },
  },
  {
    q: { el: 'Ο Κλεισθένης χώρισε τους Αθηναίους σε 10 φυλές. Γιατί το έκανε αυτό;', en: 'Cleisthenes divided the Athenians into 10 tribes. Why did he do this?' },
    options: { el: ['Για να γίνουν καλύτερες οι ομάδες στους αγώνες', 'Για να μην αποφασίζουν μόνο οι παλιές πλούσιες οικογένειες', 'Για να μαζεύονται πιο εύκολα οι φόροι', 'Για να χωρέσουν όλοι στο θέατρο'], en: ['So the teams at the games would be better', 'So the old rich families would no longer decide everything', 'So taxes could be collected more easily', 'So everyone could fit in the theatre'] },
    correct: 1,
    explanation: {
      el: 'Σε κάθε φυλή ανακάτεψε ανθρώπους από την πόλη, την παραλία και τα χωριά. Έτσι οι παλιές δυνατές οικογένειες δεν μπορούσαν πια να ελέγχουν μια ολόκληρη περιοχή.',
      en: 'In each tribe he mixed people from the city, the coast and the villages. That way the old powerful families could no longer control a whole region.',
    },
  },
  {
    q: { el: 'Τι ήταν η Βουλή των Πεντακοσίων;', en: 'What was the Council of Five Hundred?' },
    options: { el: ['Ένας στρατός από 500 πολεμιστές', 'Ένα πλοίο με 500 κωπηλάτες', '500 πολίτες που ετοίμαζαν τις αποφάσεις για την Εκκλησία του Δήμου', '500 ιερείς στους Δελφούς'], en: ['An army of 500 warriors', 'A ship with 500 rowers', '500 citizens who prepared the decisions for the assembly', '500 priests at Delphi'] },
    correct: 2,
    explanation: {
      el: 'Κάθε φυλή έστελνε 50 πολίτες με κλήρωση, 10 × 50 = 500. Η Βουλή ετοίμαζε τα θέματα και μετά ψήφιζε όλος ο λαός.',
      en: 'Each tribe sent 50 citizens chosen by lot, 10 × 50 = 500. The Council prepared the topics and then all the people voted.',
    },
  },
  {
    q: { el: 'Οι Αθηναίοι έγραφαν σε ένα κομμάτι σπασμένου πήλινου αγγείου το όνομα κάποιου που φοβόντουσαν ότι θα γίνει τύραννος. Πώς λεγόταν αυτό;', en: 'The Athenians wrote on a piece of broken pottery the name of someone they feared might become a tyrant. What was this called?' },
    options: { el: ['Εκεχειρία', 'Σεισάχθεια', 'Χρησμός', 'Οστρακισμός'], en: ['Truce', 'Seisachtheia', 'Prophecy', 'Ostracism'] },
    correct: 3,
    explanation: {
      el: 'Το κομμάτι λεγόταν «όστρακο», γι\' αυτό και η ψηφοφορία λέγεται οστρακισμός. Όποιος μάζευε τα περισσότερα ονόματα έφευγε από την Αθήνα για 10 χρόνια.',
      en: 'The piece was called an «ostrakon», which is why the vote is called ostracism. Whoever got the most names had to leave Athens for 10 years.',
    },
  },
  {
    q: { el: 'Η λέξη «δημοκρατία» είναι φτιαγμένη από δύο λέξεις. Τι σημαίνει;', en: 'The word «democracy» is made from two Greek words. What does it mean?' },
    options: { el: ['Η εξουσία του βασιλιά', 'Η εξουσία του λαού', 'Η εξουσία των στρατιωτών', 'Η εξουσία των θεών'], en: ['Rule by the king', 'Rule by the people', 'Rule by the soldiers', 'Rule by the gods'] },
    correct: 1,
    explanation: {
      el: '«Δήμος» είναι ο λαός και «κράτος» η εξουσία. Δημοκρατία, λοιπόν, σημαίνει ότι ο λαός αποφασίζει για την πόλη του.',
      en: '«Demos» means the people and «kratos» means power. So democracy means that the people decide about their city.',
    },
  },
];
