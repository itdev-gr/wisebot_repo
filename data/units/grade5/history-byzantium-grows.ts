/**
 * Ε' Δημοτικού · Ιστορία · Το Βυζάντιο Μεγαλώνει
 * ================================================
 * Original questions on the age of Justinian (6th century). Language level: a child of 10–11.
 * What the unit covers, in the order an Ε' class meets it:
 *   1–4   Justinian the emperor and Theodora the empress
 *   5–8   Hagia Sophia: who built it, the dome, «Νενίκηκά σε, Σολομών»
 *   9–11  the Justinian Code: laws gathered into one book
 *   12–14 the Hippodrome, the Blues and the Greens, the Nika riots
 *   15–18 Belisarius and how the empire grew (Africa, Italy, the Mediterranean)
 */
import type { QuizQuestion } from '../../../types';

export const GRADE5_HISTORY_BYZANTIUM_GROWS: QuizQuestion[] = [
  // ── 1–4: Justinian and Theodora ────────────────────────────────────────────
  {
    q: { el: 'Ποια πόλη ήταν η πρωτεύουσα του Βυζαντίου την εποχή του Ιουστινιανού;', en: 'Which city was the capital of Byzantium in the time of Justinian?' },
    options: { el: ['Η Αθήνα', 'Η Κωνσταντινούπολη', 'Η Ρώμη', 'Η Θεσσαλονίκη'], en: ['Athens', 'Constantinople', 'Rome', 'Thessaloniki'] },
    correct: 1,
    explanation: {
      el: 'Η Κωνσταντινούπολη ήταν η καρδιά του Βυζαντίου. Εκεί ζούσε ο αυτοκράτορας και εκεί χτίστηκαν τα πιο λαμπρά κτίρια.',
      en: 'Constantinople was the heart of Byzantium. The emperor lived there, and the most splendid buildings were built there.',
    },
  },
  {
    q: { el: 'Ποιο αξίωμα είχε ο Ιουστινιανός;', en: 'What was Justinian?' },
    options: { el: ['Στρατηγός', 'Αρχιτέκτονας', 'Αυτοκράτορας', 'Δάσκαλος'], en: ['A general', 'An architect', 'An emperor', 'A teacher'] },
    correct: 2,
    explanation: {
      el: 'Ο Ιουστινιανός ήταν αυτοκράτορας του Βυζαντίου τον 6ο αιώνα. Ήθελε να κάνει το κράτος του μεγάλο και δυνατό, όπως η παλιά Ρώμη.',
      en: 'Justinian was emperor of Byzantium in the 6th century. He wanted to make his empire big and strong, like old Rome.',
    },
  },
  {
    q: { el: 'Πώς λεγόταν η σύζυγος του Ιουστινιανού, που τον βοηθούσε να κυβερνά;', en: 'What was the name of Justinian\'s wife, who helped him rule?' },
    options: { el: ['Ελένη', 'Θεοδώρα', 'Ειρήνη', 'Ζωή'], en: ['Helena', 'Theodora', 'Irene', 'Zoe'] },
    correct: 1,
    explanation: {
      el: 'Η Θεοδώρα ήταν αυτοκράτειρα και η πιο κοντινή σύμβουλος του Ιουστινιανού. Ήταν έξυπνη και πολύ θαρραλέα.',
      en: 'Theodora was empress and Justinian\'s closest adviser. She was clever and very brave.',
    },
  },
  {
    q: { el: 'Τι ονειρευόταν ο Ιουστινιανός για το Βυζάντιο;', en: 'What was Justinian\'s dream for Byzantium?' },
    options: { el: ['Να μεταφέρει την πρωτεύουσα στην Αθήνα', 'Να ξαναφτιάξει τη μεγάλη Ρωμαϊκή Αυτοκρατορία', 'Να σταματήσει όλο το εμπόριο', 'Να γκρεμίσει τα τείχη της πόλης'], en: ['To move the capital to Athens', 'To rebuild the great Roman Empire', 'To stop all trade', 'To knock down the city walls'] },
    correct: 1,
    explanation: {
      el: 'Ο Ιουστινιανός ήθελε το Βυζάντιο να γίνει όσο μεγάλο ήταν κάποτε η Ρώμη. Γι\' αυτό έφτιαξε νόμους, κτίρια και έστειλε στρατό σε μακρινές χώρες.',
      en: 'Justinian wanted Byzantium to be as big as Rome once was. That is why he made laws, built buildings and sent armies to faraway lands.',
    },
  },

  // ── 5–8: Hagia Sophia ──────────────────────────────────────────────────────
  {
    q: { el: 'Ποιο είναι το πιο φημισμένο κτίριο που έχτισε ο Ιουστινιανός;', en: 'What is the most famous building Justinian built?' },
    options: { el: ['Ο Παρθενώνας', 'Το Κολοσσαίο', 'Η Αγία Σοφία', 'Ο Λευκός Πύργος'], en: ['The Parthenon', 'The Colosseum', 'Hagia Sophia', 'The White Tower'] },
    correct: 2,
    explanation: {
      el: 'Η Αγία Σοφία στην Κωνσταντινούπολη ήταν το πιο μεγάλο και λαμπρό κτίριο της εποχής της. Στέκεται ακόμη και σήμερα!',
      en: 'Hagia Sophia in Constantinople was the biggest and most splendid building of its time. It is still standing today!',
    },
  },
  {
    q: { el: 'Ποιοι ήταν οι δύο αρχιτέκτονες της Αγίας Σοφίας;', en: 'Who were the two architects of Hagia Sophia?' },
    options: { el: ['Ο Φειδίας και ο Ικτίνος', 'Ο Ανθέμιος και ο Ισίδωρος', 'Ο Βελισάριος και ο Ναρσής', 'Ο Τριβωνιανός και ο Προκόπιος'], en: ['Phidias and Ictinus', 'Anthemius and Isidore', 'Belisarius and Narses', 'Tribonian and Procopius'] },
    correct: 1,
    explanation: {
      el: 'Ο Ανθέμιος από τις Τράλλεις και ο Ισίδωρος από τη Μίλητο σχεδίασαν την Αγία Σοφία. Ήταν σπουδαίοι μαθηματικοί και μηχανικοί.',
      en: 'Anthemius of Tralles and Isidore of Miletus designed Hagia Sophia. They were great mathematicians and engineers.',
    },
  },
  {
    q: { el: 'Τι εντυπωσιάζει περισσότερο όποιον μπαίνει στην Αγία Σοφία;', en: 'What amazes people most when they walk into Hagia Sophia?' },
    options: { el: ['Ο τεράστιος τρούλος που μοιάζει να κρέμεται από τον ουρανό', 'Οι ξύλινες σκάλες της', 'Το μικρό της μέγεθος', 'Η πέτρινη γέφυρα στην είσοδο'], en: ['The huge dome that seems to hang from the sky', 'Its wooden staircases', 'Its small size', 'The stone bridge at the entrance'] },
    correct: 0,
    explanation: {
      el: 'Ο τρούλος της Αγίας Σοφίας είναι τεράστιος και έχει γύρω του παράθυρα. Το φως μπαίνει από παντού και ο τρούλος μοιάζει να αιωρείται.',
      en: 'The dome of Hagia Sophia is enormous and has windows all around it. Light pours in from everywhere, so the dome seems to float.',
    },
  },
  {
    q: { el: 'Όταν ο Ιουστινιανός είδε την Αγία Σοφία έτοιμη, λένε πως είπε: «Νενίκηκά σε, Σολομών». Τι εννοούσε;', en: 'When Justinian saw Hagia Sophia finished, they say he said: "Solomon, I have outdone you." What did he mean?' },
    options: { el: ['Ότι νίκησε έναν στρατηγό ονόματι Σολομών', 'Ότι το κτίριό του ξεπέρασε τον φημισμένο ναό του βασιλιά Σολομώντα', 'Ότι κέρδισε έναν αγώνα στον Ιππόδρομο', 'Ότι τελείωσε το κτίριο πιο γρήγορα από τον Σολομώντα'], en: ['That he beat a general called Solomon', 'That his building surpassed King Solomon\'s famous temple', 'That he won a race at the Hippodrome', 'That he finished the building faster than Solomon'] },
    correct: 1,
    explanation: {
      el: 'Ο βασιλιάς Σολομών είχε χτίσει πολύ παλιά έναν φημισμένο ναό. Ο Ιουστινιανός ήταν περήφανος ότι η Αγία Σοφία ήταν ακόμη πιο μεγαλόπρεπη.',
      en: 'King Solomon had built a famous temple long ago. Justinian was proud that Hagia Sophia was even more magnificent.',
    },
  },

  // ── 9–11: the Justinian Code ───────────────────────────────────────────────
  {
    q: { el: 'Τι πρόβλημα είχαν οι νόμοι του Βυζαντίου πριν από τον Ιουστινιανό;', en: 'What was the problem with the laws of Byzantium before Justinian?' },
    options: { el: ['Δεν υπήρχε κανένας νόμος', 'Ήταν πάρα πολλοί, σκόρπιοι και μερικοί έλεγαν αντίθετα πράγματα', 'Ήταν γραμμένοι μόνο στα ελληνικά', 'Ίσχυαν μόνο για τα παιδιά'], en: ['There were no laws at all', 'There were far too many, scattered, and some said opposite things', 'They were written only in Greek', 'They applied only to children'] },
    correct: 1,
    explanation: {
      el: 'Οι παλιοί ρωμαϊκοί νόμοι ήταν χιλιάδες και σκόρπιοι σε πολλά βιβλία. Ούτε οι δικαστές δεν ήξεραν πάντα ποιος νόμος ισχύει!',
      en: 'The old Roman laws were thousands, scattered across many books. Even the judges did not always know which law counted!',
    },
  },
  {
    q: { el: 'Τι έκανε ο Ιουστινιανός με τους νόμους;', en: 'What did Justinian do with the laws?' },
    options: { el: ['Τους έκαψε όλους', 'Τους μάζεψε, τους τακτοποίησε και τους έγραψε σε ένα ενιαίο έργο', 'Τους άφησε όπως ήταν', 'Τους έδωσε στους Πέρσες'], en: ['He burned them all', 'He gathered them, sorted them and wrote them in one single work', 'He left them as they were', 'He gave them to the Persians'] },
    correct: 1,
    explanation: {
      el: 'Ο Ιουστινιανός ζήτησε από νομικούς, με αρχηγό τον Τριβωνιανό, να μαζέψουν όλους τους νόμους σε ένα έργο. Έτσι όλοι ήξεραν τι ισχύει.',
      en: 'Justinian asked lawyers, led by Tribonian, to collect all the laws into one work. That way everyone knew what the rules were.',
    },
  },
  {
    q: { el: 'Γιατί ο Ιουστινιάνειος Κώδικας είναι τόσο σημαντικός ακόμη και σήμερα;', en: 'Why is the Justinian Code still so important today?' },
    options: { el: ['Γιατί πολλοί σημερινοί νόμοι στην Ευρώπη ξεκινούν από αυτόν', 'Γιατί ήταν γραμμένος σε χρυσές πλάκες', 'Γιατί ήταν ο πρώτος νόμος στον κόσμο', 'Γιατί τον διαβάζουν ακόμη στα σχολεία κάθε πρωί'], en: ['Because many of today\'s laws in Europe started from it', 'Because it was written on golden plates', 'Because it was the first law in the world', 'Because it is still read in schools every morning'] },
    correct: 0,
    explanation: {
      el: 'Ο Κώδικας του Ιουστινιανού έγινε η βάση για τους νόμους πολλών χωρών της Ευρώπης. Ιδέες του ζουν ακόμη στα σημερινά δικαστήρια.',
      en: 'Justinian\'s Code became the base for the laws of many European countries. Its ideas still live in today\'s courts.',
    },
  },

  // ── 12–14: the Hippodrome and the Nika riots ───────────────────────────────
  {
    q: { el: 'Τι γινόταν στον Ιππόδρομο της Κωνσταντινούπολης;', en: 'What happened at the Hippodrome of Constantinople?' },
    options: { el: ['Μαθήματα για τα παιδιά', 'Αρματοδρομίες που παρακολουθούσε όλη η πόλη', 'Συνεδριάσεις των δικαστών', 'Αγώνες κολύμβησης'], en: ['Lessons for children', 'Chariot races that the whole city watched', 'Meetings of the judges', 'Swimming races'] },
    correct: 1,
    explanation: {
      el: 'Ο Ιππόδρομος ήταν ένα τεράστιο στάδιο με αρματοδρομίες. Ήταν το αγαπημένο θέαμα της πόλης και ερχόταν και ο ίδιος ο αυτοκράτορας.',
      en: 'The Hippodrome was a huge stadium for chariot races. It was the city\'s favourite show, and even the emperor came to watch.',
    },
  },
  {
    q: { el: 'Ο Νίκος διαβάζει για τους «Βένετους» και τους «Πράσινους». Ποιοι ήταν;', en: 'Nikos is reading about the "Blues" and the "Greens". Who were they?' },
    options: { el: ['Δύο γειτονιές της Αθήνας', 'Δύο στρατοί των Περσών', 'Οι δύο μεγάλες ομάδες οπαδών στον Ιππόδρομο', 'Δύο ομάδες αρχιτεκτόνων'], en: ['Two neighbourhoods of Athens', 'Two Persian armies', 'The two big fan teams at the Hippodrome', 'Two teams of architects'] },
    correct: 2,
    explanation: {
      el: 'Οι Βένετοι (Γαλάζιοι) και οι Πράσινοι ήταν οι δύο μεγάλες ομάδες οπαδών. Φορούσαν τα χρώματά τους και ζητωκραύγαζαν τους αρματοδρόμους τους.',
      en: 'The Blues and the Greens were the two big fan teams. They wore their colours and cheered for their charioteers.',
    },
  },
  {
    q: { el: 'Στη Στάση του Νίκα οι οπαδοί ξεσηκώθηκαν και ο Ιουστινιανός σκέφτηκε να φύγει από την πόλη. Ποιος τον έπεισε να μείνει;', en: 'During the Nika riots the fans rose up and Justinian thought of leaving the city. Who convinced him to stay?' },
    options: { el: ['Ο Βελισάριος', 'Η Θεοδώρα', 'Ο Τριβωνιανός', 'Ο Ανθέμιος'], en: ['Belisarius', 'Theodora', 'Tribonian', 'Anthemius'] },
    correct: 1,
    explanation: {
      el: 'Η Θεοδώρα είπε με θάρρος ότι ένας αυτοκράτορας δεν εγκαταλείπει τον θρόνο του. Ο Ιουστινιανός έμεινε και η εξέγερση σταμάτησε.',
      en: 'Theodora bravely said that an emperor does not abandon his throne. Justinian stayed, and the uprising was stopped.',
    },
  },

  // ── 15–18: Belisarius and the growing empire ───────────────────────────────
  {
    q: { el: 'Ποιος ήταν ο Βελισάριος;', en: 'Who was Belisarius?' },
    options: { el: ['Ο πιο σπουδαίος στρατηγός του Ιουστινιανού', 'Ο αρχιτέκτονας της Αγίας Σοφίας', 'Ο γιος του Ιουστινιανού', 'Ένας φημισμένος αρματοδρόμος'], en: ['Justinian\'s greatest general', 'The architect of Hagia Sophia', 'Justinian\'s son', 'A famous charioteer'] },
    correct: 0,
    explanation: {
      el: 'Ο Βελισάριος ήταν ο πιο ικανός στρατηγός του Ιουστινιανού. Κέρδιζε μάχες ακόμη και με λιγότερους στρατιώτες, χάρη στην εξυπνάδα του.',
      en: 'Belisarius was Justinian\'s most able general. He won battles even with fewer soldiers, thanks to his clever plans.',
    },
  },
  {
    q: { el: 'Σε ποια περιοχή πήγε πρώτα ο Βελισάριος και την ξανάφερε στο Βυζάντιο;', en: 'Which region did Belisarius go to first and bring back to Byzantium?' },
    options: { el: ['Στην Ινδία', 'Στη Βόρεια Αφρική', 'Στη Βρετανία', 'Στη Ρωσία'], en: ['India', 'North Africa', 'Britain', 'Russia'] },
    correct: 1,
    explanation: {
      el: 'Ο Βελισάριος ταξίδεψε με πλοία στη Βόρεια Αφρική, που την κρατούσαν οι Βάνδαλοι, και τη νίκησε γρήγορα.',
      en: 'Belisarius sailed to North Africa, which the Vandals held, and won it back quickly.',
    },
  },
  {
    q: { el: 'Μετά την Αφρική, ο Βελισάριος πολέμησε τους Οστρογότθους. Ποια χώρα κέρδισε έτσι το Βυζάντιο;', en: 'After Africa, Belisarius fought the Ostrogoths. Which country did Byzantium win this way?' },
    options: { el: ['Την Αίγυπτο', 'Την Ισπανία', 'Την Ιταλία', 'Την Περσία'], en: ['Egypt', 'Spain', 'Italy', 'Persia'] },
    correct: 2,
    explanation: {
      el: 'Οι Οστρογότθοι κρατούσαν την Ιταλία. Ο Βελισάριος μπήκε ακόμη και στη Ρώμη, την παλιά πρωτεύουσα, και την ξανάφερε στην αυτοκρατορία.',
      en: 'The Ostrogoths held Italy. Belisarius even entered Rome, the old capital, and brought it back into the empire.',
    },
  },
  {
    q: { el: 'Η Μαρία κοιτάζει έναν χάρτη στο τέλος της βασιλείας του Ιουστινιανού. Τι παρατηρεί;', en: 'Maria looks at a map from the end of Justinian\'s reign. What does she notice?' },
    options: { el: ['Το Βυζάντιο έχει μικρύνει πολύ', 'Το Βυζάντιο έχει μόνο την Κωνσταντινούπολη', 'Το Βυζάντιο απλώνεται γύρω από σχεδόν όλη τη Μεσόγειο', 'Το Βυζάντιο έχει κατακτήσει όλη την Ευρώπη'], en: ['Byzantium has shrunk a lot', 'Byzantium has only Constantinople', 'Byzantium stretches around almost the whole Mediterranean', 'Byzantium has conquered all of Europe'] },
    correct: 2,
    explanation: {
      el: 'Με τις νίκες του Βελισάριου, το Βυζάντιο απλώθηκε γύρω από σχεδόν ολόκληρη τη Μεσόγειο. Ήταν η πιο μεγάλη στιγμή του, αλλά οι πόλεμοι στοίχισαν πολύ.',
      en: 'With Belisarius\'s victories, Byzantium spread around almost the whole Mediterranean. It was its greatest moment, but the wars cost a lot.',
    },
  },
];
