/**
 * Δ' Δημοτικού · Ιστορία · Ο Χρυσός Αιώνας του Περικλή
 * ======================================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr). Language level: 9–10.
 *
 * What the unit covers, in the order a Δ' class meets it:
 *   1–3   Pericles: who he was, why the era is called "golden", the city of Athens
 *   4–7   Athenian democracy: the Ekklesia on the Pnyx, who could vote, the lottery, ostracism
 *   8–11  the Acropolis and the Parthenon, Athena, Phidias and his statues
 *   12–14 theatre: Dionysus, the open-air theatre, tragedy and comedy, masks
 *   15–16 Socrates and his questions
 *   17–18 daily life: the Agora, education for boys, life at home
 */
import type { QuizQuestion } from '../../../types';

export const GRADE4_HISTORY_GOLDEN_AGE_PERICLES: QuizQuestion[] = [
  // ── 1–3: Pericles and the golden age ───────────────────────────────────────
  {
    q: { el: 'Ποιος ήταν ο Περικλής;', en: 'Who was Pericles?' },
    options: {
      el: ['Ένας σπουδαίος πολιτικός της Αθήνας', 'Ένας βασιλιάς της Σπάρτης', 'Ένας θεός του Ολύμπου', 'Ένας ήρωας που πολέμησε στην Τροία'],
      en: ['A great leader of Athens', 'A king of Sparta', 'A god of Olympus', 'A hero who fought at Troy'],
    },
    correct: 0,
    explanation: {
      el: 'Ο Περικλής ήταν πολιτικός της Αθήνας. Οι Αθηναίοι τον ψήφιζαν ξανά και ξανά, γιατί μιλούσε ωραία και είχε μεγάλες ιδέες.',
      en: 'Pericles was a leader of Athens. The Athenians voted for him again and again, because he spoke well and had big ideas.',
    },
  },
  {
    q: { el: 'Γιατί λέμε την εποχή του Περικλή «Χρυσό Αιώνα»;', en: 'Why do we call the time of Pericles the “Golden Age”?' },
    options: {
      el: ['Γιατί βρήκαν πολύ χρυσάφι στα βουνά', 'Γιατί η Αθήνα έφτασε στην πιο λαμπρή της εποχή', 'Γιατί όλοι φορούσαν χρυσά ρούχα', 'Γιατί ο Περικλής ήταν πολύ πλούσιος'],
      en: ['Because lots of gold was found in the mountains', 'Because Athens reached its most brilliant time', 'Because everyone wore golden clothes', 'Because Pericles was very rich'],
    },
    correct: 1,
    explanation: {
      el: 'Τότε η Αθήνα έλαμπε σαν χρυσάφι: μεγάλα κτίρια, θέατρο, τέχνη και σοφοί άνθρωποι. Γι\' αυτό τη λέμε «Χρυσό Αιώνα».',
      en: 'Back then Athens shone like gold: great buildings, theatre, art and wise people. That is why we call it the “Golden Age”.',
    },
  },
  {
    q: { el: 'Σε ποια πόλη έζησε ο Περικλής;', en: 'In which city did Pericles live?' },
    options: {
      el: ['Στη Σπάρτη', 'Στην Κόρινθο', 'Στην Αθήνα', 'Στη Θήβα'],
      en: ['In Sparta', 'In Corinth', 'In Athens', 'In Thebes'],
    },
    correct: 2,
    explanation: {
      el: 'Ο Περικλής έζησε στην Αθήνα. Η Αθήνα ήταν τότε η πιο δυνατή πόλη της Ελλάδας, με πολλά πλοία και μεγάλο λιμάνι.',
      en: 'Pericles lived in Athens. Athens was then the strongest city in Greece, with many ships and a big harbour.',
    },
  },

  // ── 4–7: democracy ─────────────────────────────────────────────────────────
  {
    q: { el: 'Τι σημαίνει η λέξη «δημοκρατία»;', en: 'What does the word “democracy” mean?' },
    options: {
      el: ['Ο βασιλιάς αποφασίζει για όλα', 'Οι στρατηγοί αποφασίζουν για όλα', 'Οι πλούσιοι αποφασίζουν για όλα', 'Ο λαός αποφασίζει για την πόλη του'],
      en: ['The king decides everything', 'The generals decide everything', 'The rich decide everything', 'The people decide for their city'],
    },
    correct: 3,
    explanation: {
      el: 'Δημοκρατία = «δήμος» (ο λαός) + «κράτος» (η δύναμη). Στη δημοκρατία ο λαός έχει τη δύναμη και αποφασίζει.',
      en: 'Democracy = “demos” (the people) + “kratos” (power). In a democracy the people have the power and decide.',
    },
  },
  {
    q: { el: 'Πού μαζεύονταν οι Αθηναίοι πολίτες για να ψηφίσουν;', en: 'Where did the citizens of Athens gather to vote?' },
    options: {
      el: ['Στην Πνύκα', 'Στον Παρθενώνα', 'Στο λιμάνι του Πειραιά', 'Στον Όλυμπο'],
      en: ['On the Pnyx', 'In the Parthenon', 'At the harbour of Piraeus', 'On Mount Olympus'],
    },
    correct: 0,
    explanation: {
      el: 'Η Πνύκα ήταν ένας λόφος απέναντι από την Ακρόπολη. Εκεί μαζευόταν η Εκκλησία του Δήμου, μιλούσαν και ψήφιζαν σηκώνοντας το χέρι.',
      en: 'The Pnyx was a hill across from the Acropolis. There the Assembly met, people spoke and voted by raising their hands.',
    },
  },
  {
    q: { el: 'Ποιος από αυτούς μπορούσε να ψηφίσει στην αρχαία Αθήνα;', en: 'Which of these could vote in ancient Athens?' },
    options: {
      el: ['Ο Νίκος, ένας ενήλικος Αθηναίος πολίτης', 'Η Ελένη, μια Αθηναία γυναίκα', 'Ο Γιώργος, ένα αγόρι 9 ετών', 'Ένας έμπορος από την Κόρινθο που ζούσε στην Αθήνα'],
      en: ['Nikos, an adult Athenian citizen', 'Eleni, an Athenian woman', 'Giorgos, a 9-year-old boy', 'A merchant from Corinth who lived in Athens'],
    },
    correct: 0,
    explanation: {
      el: 'Ψήφιζαν μόνο οι άντρες πολίτες της Αθήνας. Οι γυναίκες, τα παιδιά, οι ξένοι και οι δούλοι δεν είχαν αυτό το δικαίωμα.',
      en: 'Only the adult male citizens of Athens could vote. Women, children, foreigners and slaves did not have this right.',
    },
  },
  {
    q: { el: 'Τι ήταν ο «οστρακισμός»;', en: 'What was “ostracism”?' },
    options: {
      el: ['Ένας αγώνας δρόμου με όστρακα', 'Η ψηφοφορία για να διώξουν από την πόλη κάποιον επικίνδυνο για 10 χρόνια', 'Η γιορτή για τη θεά Αθηνά', 'Ο τρόπος που έφτιαχναν τα πήλινα αγγεία'],
      en: ['A running race with shells', 'A vote to send someone dangerous away from the city for 10 years', 'The festival for the goddess Athena', 'The way they made clay pots'],
    },
    correct: 1,
    explanation: {
      el: 'Οι Αθηναίοι έγραφαν σε ένα κομμάτι σπασμένου αγγείου (όστρακο) το όνομα όποιου φοβούνταν ότι θα γίνει τύραννος. Αν μαζεύονταν πολλά, έφευγε από την πόλη για 10 χρόνια.',
      en: 'Athenians wrote on a piece of broken pottery (ostrakon) the name of anyone they feared might become a tyrant. If enough pieces had his name, he left the city for 10 years.',
    },
  },

  // ── 8–11: the Acropolis, the Parthenon, Phidias ───────────────────────────
  {
    q: { el: 'Τι είναι η Ακρόπολη;', en: 'What is the Acropolis?' },
    options: {
      el: ['Ένα μεγάλο ποτάμι της Αθήνας', 'Το λιμάνι της Αθήνας', 'Ο ψηλός βράχος της Αθήνας με τους ναούς', 'Η αγορά όπου πουλούσαν λαχανικά'],
      en: ['A big river in Athens', 'The harbour of Athens', 'The high rock of Athens with the temples', 'The market where vegetables were sold'],
    },
    correct: 2,
    explanation: {
      el: 'Ακρόπολη σημαίνει «η ψηλή πόλη». Είναι ο βράχος στη μέση της Αθήνας, όπου οι Αθηναίοι έχτισαν τους πιο όμορφους ναούς τους.',
      en: 'Acropolis means “the high city”. It is the rock in the middle of Athens, where the Athenians built their most beautiful temples.',
    },
  },
  {
    q: { el: 'Για ποια θεά χτίστηκε ο Παρθενώνας;', en: 'For which goddess was the Parthenon built?' },
    options: {
      el: ['Για την Ήρα', 'Για την Αθηνά', 'Για την Άρτεμη', 'Για την Αφροδίτη'],
      en: ['For Hera', 'For Athena', 'For Artemis', 'For Aphrodite'],
    },
    correct: 1,
    explanation: {
      el: 'Ο Παρθενώνας ήταν ο ναός της Αθηνάς, της προστάτιδας της Αθήνας. Η πόλη πήρε και το όνομά της από αυτή!',
      en: 'The Parthenon was the temple of Athena, the protector of Athens. The city even got its name from her!',
    },
  },
  {
    q: { el: 'Από τι υλικό είναι φτιαγμένος ο Παρθενώνας;', en: 'What material is the Parthenon made of?' },
    options: {
      el: ['Από ξύλο', 'Από τούβλα', 'Από χρυσό', 'Από μάρμαρο'],
      en: ['Wood', 'Bricks', 'Gold', 'Marble'],
    },
    correct: 3,
    explanation: {
      el: 'Ο Παρθενώνας είναι από λευκό μάρμαρο, που το έφερναν από το βουνό Πεντέλη. Γι\' αυτό στέκεται ακόμα μετά από τόσα χρόνια!',
      en: 'The Parthenon is made of white marble, brought from Mount Pentelicus. That is why it still stands after so many years!',
    },
  },
  {
    q: { el: 'Ποιος ήταν ο Φειδίας;', en: 'Who was Phidias?' },
    options: {
      el: ['Ο στρατηγός που νίκησε τους Πέρσες', 'Ο μεγάλος γλύπτης που έφτιαξε το άγαλμα της Αθηνάς', 'Ο ποιητής που έγραφε κωμωδίες', 'Ο δάσκαλος του Περικλή'],
      en: ['The general who beat the Persians', 'The great sculptor who made the statue of Athena', 'The poet who wrote comedies', 'The teacher of Pericles'],
    },
    correct: 1,
    explanation: {
      el: 'Ο Φειδίας ήταν ο πιο φημισμένος γλύπτης της εποχής. Μέσα στον Παρθενώνα έφτιαξε ένα τεράστιο άγαλμα της Αθηνάς από χρυσό και ελεφαντόδοντο.',
      en: 'Phidias was the most famous sculptor of his time. Inside the Parthenon he made a huge statue of Athena from gold and ivory.',
    },
  },

  // ── 12–14: theatre ─────────────────────────────────────────────────────────
  {
    q: { el: 'Πού γίνονταν οι θεατρικές παραστάσεις στην αρχαία Αθήνα;', en: 'Where were plays performed in ancient Athens?' },
    options: {
      el: ['Σε κλειστά κτίρια με σκεπή', 'Μέσα στον Παρθενώνα', 'Σε ανοιχτό θέατρο στην πλαγιά ενός λόφου', 'Πάνω στα πλοία στο λιμάνι'],
      en: ['In closed buildings with a roof', 'Inside the Parthenon', 'In an open-air theatre on the slope of a hill', 'On the ships in the harbour'],
    },
    correct: 2,
    explanation: {
      el: 'Το θέατρο ήταν ανοιχτό, κάτω από τον ουρανό. Τα καθίσματα ήταν σκαλισμένα στην πλαγιά του λόφου, έτσι όλοι έβλεπαν και άκουγαν καλά.',
      en: 'The theatre was open, under the sky. The seats were carved into the hillside, so everyone could see and hear well.',
    },
  },
  {
    q: { el: 'Ποιες ήταν οι δύο μεγάλες «οικογένειες» θεατρικών έργων;', en: 'What were the two big “families” of plays?' },
    options: {
      el: ['Τραγωδία και κωμωδία', 'Τραγωδία και όπερα', 'Κωμωδία και κινούμενα σχέδια', 'Ποίηση και χορός'],
      en: ['Tragedy and comedy', 'Tragedy and opera', 'Comedy and cartoons', 'Poetry and dance'],
    },
    correct: 0,
    explanation: {
      el: 'Η τραγωδία ήταν σοβαρή και έκανε τους θεατές να σκέφτονται. Η κωμωδία ήταν αστεία και τους έκανε να γελούν.',
      en: 'Tragedy was serious and made the audience think. Comedy was funny and made them laugh.',
    },
  },
  {
    q: { el: 'Γιατί οι ηθοποιοί φορούσαν μάσκες;', en: 'Why did the actors wear masks?' },
    options: {
      el: ['Για να μην τους γνωρίζει κανείς στον δρόμο', 'Για να προστατεύονται από τον ήλιο', 'Για να μη φοβούνται το κοινό', 'Για να δείχνουν τον ρόλο τους και να φαίνονται από μακριά'],
      en: ['So nobody would recognise them in the street', 'To protect themselves from the sun', 'So they would not be afraid of the audience', 'To show their role and be seen from far away'],
    },
    correct: 3,
    explanation: {
      el: 'Το θέατρο ήταν τεράστιο και οι θεατές κάθονταν μακριά. Η μάσκα έδειχνε αν ο ήρωας ήταν χαρούμενος ή λυπημένος, γέρος ή νέος, και ένας ηθοποιός μπορούσε να παίξει πολλούς ρόλους.',
      en: 'The theatre was huge and the audience sat far away. The mask showed if the hero was happy or sad, old or young, and one actor could play many roles.',
    },
  },

  // ── 15–16: Socrates ────────────────────────────────────────────────────────
  {
    q: { el: 'Ποιος ήταν ο Σωκράτης;', en: 'Who was Socrates?' },
    options: {
      el: ['Ένας φιλόσοφος που έκανε συνέχεια ερωτήσεις', 'Ένας αθλητής των Ολυμπιακών Αγώνων', 'Ένας αρχιτέκτονας του Παρθενώνα', 'Ένας πλούσιος έμπορος'],
      en: ['A philosopher who always asked questions', 'An athlete at the Olympic Games', 'An architect of the Parthenon', 'A rich merchant'],
    },
    correct: 0,
    explanation: {
      el: 'Ο Σωκράτης ήταν φιλόσοφος, δηλαδή «φίλος της σοφίας». Περπατούσε στην Αθήνα και ρωτούσε τους ανθρώπους για να τους βάλει να σκεφτούν.',
      en: 'Socrates was a philosopher, a “friend of wisdom”. He walked around Athens asking people questions to make them think.',
    },
  },
  {
    q: { el: 'Ο Σωκράτης έλεγε μια φράση που έγινε διάσημη. Ποια;', en: 'Socrates said a phrase that became famous. Which one?' },
    options: {
      el: ['«Τα ξέρω όλα»', '«Ένα ξέρω, ότι δεν ξέρω τίποτα»', '«Ο δυνατός έχει πάντα δίκιο»', '«Μη ρωτάς, απλώς άκου»'],
      en: ['“I know everything”', '“I know one thing: that I know nothing”', '“The strong are always right”', '“Do not ask, just listen”'],
    },
    correct: 1,
    explanation: {
      el: 'Ο Σωκράτης έλεγε ότι ο σοφός ξέρει πόσα δεν ξέρει. Έτσι συνεχίζει να ρωτάει και να μαθαίνει — όπως κάνεις κι εσύ!',
      en: 'Socrates said that a wise person knows how much they do not know. So they keep asking and learning, just like you do!',
    },
  },

  // ── 17–18: daily life ──────────────────────────────────────────────────────
  {
    q: { el: 'Τι ήταν η Αγορά της αρχαίας Αθήνας;', en: 'What was the Agora of ancient Athens?' },
    options: {
      el: ['Ένα σχολείο για αγόρια', 'Ο ναός της Αθηνάς', 'Η μεγάλη πλατεία όπου ψώνιζαν και συζητούσαν', 'Το στάδιο για τους αγώνες'],
      en: ['A school for boys', 'The temple of Athena', 'The big square where people shopped and talked', 'The stadium for the games'],
    },
    correct: 2,
    explanation: {
      el: 'Η Αγορά ήταν η καρδιά της πόλης. Εκεί οι Αθηναίοι αγόραζαν ψάρια, λάδι και αγγεία, άκουγαν τα νέα και συζητούσαν ώρες ολόκληρες.',
      en: 'The Agora was the heart of the city. There the Athenians bought fish, oil and pots, heard the news and talked for hours.',
    },
  },
  {
    q: { el: 'Ο Γιώργος είναι ένα αγόρι 9 ετών στην αρχαία Αθήνα. Τι μάθαινε στο σχολείο;', en: 'Giorgos is a 9-year-old boy in ancient Athens. What did he learn at school?' },
    options: {
      el: ['Μόνο πολεμικές τέχνες, όπως στη Σπάρτη', 'Γράμματα, μουσική και γυμναστική', 'Μόνο να φτιάχνει αγγεία', 'Τίποτα, τα αγόρια δεν πήγαιναν σχολείο'],
      en: ['Only fighting skills, like in Sparta', 'Reading and writing, music and gymnastics', 'Only how to make pots', 'Nothing, boys did not go to school'],
    },
    correct: 1,
    explanation: {
      el: 'Τα αγόρια της Αθήνας μάθαιναν γράμματα, μουσική (έπαιζαν λύρα) και γυμναστική. Τα κορίτσια έμεναν στο σπίτι και μάθαιναν από τη μητέρα τους.',
      en: 'Athenian boys learned reading and writing, music (they played the lyre) and gymnastics. Girls stayed at home and learned from their mother.',
    },
  },
];
