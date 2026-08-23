/**
 * Γ' Δημοτικού · Μελέτη Περιβάλλοντος · Πολιτισμός & Επικοινωνία
 * ================================================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a child of 8–9. Order of topics, easiest to hardest:
 *   1–5   ancient Greek culture: the Olympic Games, the Parthenon, Homer's heroes and monsters
 *   6–8   ancient theatre: where it was, masks, the chorus
 *   9–10  weaving: the loom, from wool to cloth
 *   11–12 mind and body: a healthy body helps a healthy mind, rest and sleep
 *   13–18 the media: TV, newspapers, magazines — what each one is for, and using them wisely
 */
import type { QuizQuestion } from '../../../types';

export const GRADE3_SCIENCE_CULTURE_COMMUNICATION: QuizQuestion[] = [
  // ── 1–5: ancient Greek culture ─────────────────────────────────────────────
  {
    q: { el: 'Σε ποια πόλη της αρχαίας Ελλάδας γίνονταν οι Ολυμπιακοί Αγώνες;', en: 'In which place in ancient Greece were the Olympic Games held?' },
    options: { el: ['Στην Ολυμπία', 'Στην Αθήνα', 'Στη Σπάρτη', 'Στην Κόρινθο'], en: ['Olympia', 'Athens', 'Sparta', 'Corinth'] },
    correct: 0,
    explanation: {
      el: 'Οι Ολυμπιακοί Αγώνες πήραν το όνομά τους από την Ολυμπία. Εκεί μαζεύονταν αθλητές από όλη την Ελλάδα.',
      en: 'The Olympic Games got their name from Olympia. Athletes from all over Greece gathered there.',
    },
  },
  {
    q: { el: 'Τι έπαιρνε ο νικητής στους αρχαίους Ολυμπιακούς Αγώνες;', en: 'What did a winner receive at the ancient Olympic Games?' },
    options: { el: ['Ένα χρυσό μετάλλιο', 'Ένα στεφάνι από κλαδί ελιάς', 'Ένα ασημένιο κύπελλο', 'Ένα σακί με χρυσά νομίσματα'], en: ['A gold medal', 'A wreath made from an olive branch', 'A silver cup', 'A bag of gold coins'] },
    correct: 1,
    explanation: {
      el: 'Ο νικητής έπαιρνε ένα απλό στεφάνι από κλαδί αγριελιάς. Η τιμή ήταν πιο σημαντική από το χρυσάφι!',
      en: 'The winner received a simple wreath made from a wild olive branch. The honour mattered more than gold!',
    },
  },
  {
    q: { el: 'Ο Παρθενώνας είναι ένας διάσημος αρχαίος ναός. Πού βρίσκεται;', en: 'The Parthenon is a famous ancient temple. Where is it?' },
    options: { el: ['Στην Κνωσό', 'Στους Δελφούς', 'Στην Ακρόπολη της Αθήνας', 'Στην Ολυμπία'], en: ['At Knossos', 'At Delphi', 'On the Acropolis of Athens', 'At Olympia'] },
    correct: 2,
    explanation: {
      el: 'Ο Παρθενώνας στέκεται πάνω στον βράχο της Ακρόπολης, στην Αθήνα. Ήταν ναός της θεάς Αθηνάς.',
      en: 'The Parthenon stands on the rock of the Acropolis in Athens. It was a temple of the goddess Athena.',
    },
  },
  {
    q: { el: 'Ποιος ήρωας ταξίδεψε χρόνια στη θάλασσα για να γυρίσει στην Ιθάκη;', en: 'Which hero travelled for years at sea to return home to Ithaca?' },
    options: { el: ['Ο Ηρακλής', 'Ο Θησέας', 'Ο Αχιλλέας', 'Ο Οδυσσέας'], en: ['Heracles', 'Theseus', 'Achilles', 'Odysseus'] },
    correct: 3,
    explanation: {
      el: 'Ο Οδυσσέας ήταν ο βασιλιάς της Ιθάκης. Οι περιπέτειές του στη θάλασσα λέγονται «Οδύσσεια».',
      en: 'Odysseus was the king of Ithaca. His adventures at sea are called the “Odyssey”.',
    },
  },
  {
    q: { el: 'Ποιο τέρας είχε πολλά κεφάλια και όταν έκοβες ένα, φύτρωναν δύο;', en: 'Which monster had many heads, and when you cut one off, two grew back?' },
    options: { el: ['Ο Μινώταυρος', 'Η Λερναία Ύδρα', 'Ο Κύκλωπας', 'Η Μέδουσα'], en: ['The Minotaur', 'The Hydra of Lerna', 'The Cyclops', 'Medusa'] },
    correct: 1,
    explanation: {
      el: 'Η Λερναία Ύδρα ήταν το τέρας με τα πολλά κεφάλια. Τη νίκησε ο Ηρακλής σε έναν από τους άθλους του.',
      en: 'The Hydra of Lerna was the many-headed monster. Heracles defeated it in one of his labours.',
    },
  },

  // ── 6–8: ancient theatre ──────────────────────────────────────────────────
  {
    q: { el: 'Τα αρχαία θέατρα ήταν χτισμένα…', en: 'Ancient theatres were built…' },
    options: { el: ['μέσα σε μεγάλα κτίρια με στέγη', 'στην ανοιχτή πλαγιά ενός λόφου', 'κάτω από τη γη, σε σπηλιές', 'πάνω σε μεγάλα πλοία'], en: ['inside big buildings with a roof', 'on the open slope of a hill', 'underground, in caves', 'on large ships'] },
    correct: 1,
    explanation: {
      el: 'Τα αρχαία θέατρα ήταν ανοιχτά, χτισμένα στην πλαγιά ενός λόφου. Έτσι όλοι έβλεπαν και άκουγαν καλά.',
      en: 'Ancient theatres were open-air, built on the slope of a hill. That way everyone could see and hear well.',
    },
  },
  {
    q: { el: 'Γιατί οι ηθοποιοί στο αρχαίο θέατρο φορούσαν μάσκες;', en: 'Why did actors in ancient theatre wear masks?' },
    options: { el: ['Για να μην κρυώνουν', 'Για να μην τους γνωρίζει κανείς', 'Για να δείχνουν ποιον ρόλο παίζουν', 'Για να βλέπουν καλύτερα'], en: ['To keep warm', 'So nobody would recognise them', 'To show which role they were playing', 'To see better'] },
    correct: 2,
    explanation: {
      el: 'Η μάσκα έδειχνε τον ρόλο: γέρος, νέος, χαρούμενος, λυπημένος. Έτσι ένας ηθοποιός μπορούσε να παίξει πολλά πρόσωπα.',
      en: 'The mask showed the role: old, young, happy, sad. That way one actor could play many characters.',
    },
  },
  {
    q: { el: 'Στο αρχαίο θέατρο, η ομάδα που τραγουδούσε και χόρευε μαζί λεγόταν…', en: 'In ancient theatre, the group that sang and danced together was called the…' },
    options: { el: ['ορχήστρα', 'χορός', 'κοινό', 'σκηνή'], en: ['orchestra', 'chorus', 'audience', 'stage'] },
    correct: 1,
    explanation: {
      el: 'Ο χορός ήταν η ομάδα που τραγουδούσε και χόρευε. Η «ορχήστρα» ήταν ο στρογγυλός χώρος όπου χόρευε ο χορός.',
      en: 'The chorus was the group that sang and danced. The “orchestra” was the round space where the chorus danced.',
    },
  },

  // ── 9–10: weaving ─────────────────────────────────────────────────────────
  {
    q: { el: 'Πώς λέγεται το εργαλείο που ύφαιναν πάνω του τα υφάσματα οι άνθρωποι παλιά;', en: 'What is the tool called that people used long ago to weave cloth?' },
    options: { el: ['Αργαλειός', 'Ρόκα', 'Αδράχτι', 'Ψαλίδι'], en: ['Loom', 'Distaff', 'Spindle', 'Scissors'] },
    correct: 0,
    explanation: {
      el: 'Ο αργαλειός είναι το εργαλείο της ύφανσης. Πάνω του οι κλωστές πλέκονται και γίνονται ύφασμα.',
      en: 'The loom is the weaving tool. On it, threads cross over each other and become cloth.',
    },
  },
  {
    q: { el: 'Η γιαγιά της Ελένης φτιάχνει ένα μάλλινο χαλί. Ποια είναι η σωστή σειρά;', en: 'Eleni\'s grandmother is making a woollen rug. Which order is correct?' },
    options: { el: ['Ύφανση → κούρεμα → γνέσιμο', 'Γνέσιμο → κούρεμα → ύφανση', 'Κούρεμα → γνέσιμο → ύφανση', 'Κούρεμα → ύφανση → γνέσιμο'], en: ['Weaving → shearing → spinning', 'Spinning → shearing → weaving', 'Shearing → spinning → weaving', 'Shearing → weaving → spinning'] },
    correct: 2,
    explanation: {
      el: 'Πρώτα κουρεύουμε το πρόβατο, μετά γνέθουμε το μαλλί σε κλωστή και στο τέλος υφαίνουμε την κλωστή στον αργαλειό.',
      en: 'First we shear the sheep, then we spin the wool into thread, and finally we weave the thread on the loom.',
    },
  },

  // ── 11–12: mind and body ──────────────────────────────────────────────────
  {
    q: { el: 'Οι αρχαίοι Έλληνες έλεγαν «νους υγιής εν σώματι υγιεί». Τι σημαίνει;', en: 'The ancient Greeks said “a healthy mind in a healthy body”. What does it mean?' },
    options: { el: ['Μόνο το σώμα έχει σημασία', 'Μόνο το μυαλό έχει σημασία', 'Πρέπει να φροντίζουμε και το σώμα και το μυαλό', 'Το διάβασμα κουράζει το σώμα'], en: ['Only the body matters', 'Only the mind matters', 'We should look after both body and mind', 'Reading tires the body'] },
    correct: 2,
    explanation: {
      el: 'Το σώμα και το μυαλό δουλεύουν μαζί. Όταν το σώμα είναι γερό, το μυαλό σκέφτεται καλύτερα — και το ανάποδο!',
      en: 'Body and mind work together. When the body is strong, the mind thinks better — and the other way round too!',
    },
  },
  {
    q: { el: 'Ο Νίκος έχει αύριο τεστ. Τι τον βοηθάει περισσότερο το βράδυ;', en: 'Nikos has a test tomorrow. What helps him most tonight?' },
    options: { el: ['Να βλέπει τηλεόραση μέχρι αργά', 'Να παίξει βιντεοπαιχνίδια όλο το βράδυ', 'Να διαβάζει ως τα μεσάνυχτα χωρίς διάλειμμα', 'Να κοιμηθεί νωρίς και καλά'], en: ['Watching TV until late', 'Playing video games all evening', 'Studying till midnight without a break', 'Going to bed early and sleeping well'] },
    correct: 3,
    explanation: {
      el: 'Ο ύπνος ξεκουράζει το σώμα και βοηθάει το μυαλό να θυμάται όσα έμαθε. Ένα παιδί χρειάζεται περίπου 10 ώρες ύπνο.',
      en: 'Sleep rests the body and helps the mind remember what it learned. A child needs about 10 hours of sleep.',
    },
  },

  // ── 13–18: TV, newspapers, magazines ──────────────────────────────────────
  {
    q: { el: 'Ποιο από αυτά μάς δείχνει εικόνες που κινούνται και έχουν ήχο;', en: 'Which of these shows us moving pictures with sound?' },
    options: { el: ['Η εφημερίδα', 'Η τηλεόραση', 'Το περιοδικό', 'Το βιβλίο'], en: ['The newspaper', 'The television', 'The magazine', 'The book'] },
    correct: 1,
    explanation: {
      el: 'Η τηλεόραση δείχνει εικόνα και ήχο μαζί. Η εφημερίδα και το περιοδικό έχουν μόνο κείμενο και φωτογραφίες.',
      en: 'Television shows picture and sound together. Newspapers and magazines have only text and photos.',
    },
  },
  {
    q: { el: 'Ο μπαμπάς του Γιώργου θέλει να μάθει τι έγινε χθες στην πόλη του. Τι θα διαβάσει;', en: 'Giorgos\'s dad wants to know what happened in his town yesterday. What will he read?' },
    options: { el: ['Ένα παραμύθι', 'Μια εφημερίδα', 'Ένα λεξικό', 'Ένα βιβλίο μαγειρικής'], en: ['A fairy tale', 'A newspaper', 'A dictionary', 'A cookbook'] },
    correct: 1,
    explanation: {
      el: 'Η εφημερίδα γράφει τις ειδήσεις: τι έγινε χθες και σήμερα. Γι\' αυτό βγαίνει καινούργια σχεδόν κάθε μέρα.',
      en: 'A newspaper prints the news: what happened yesterday and today. That is why a new one comes out almost every day.',
    },
  },
  {
    q: { el: 'Πώς λέγεται ο άνθρωπος που μαζεύει τις ειδήσεις και γράφει τα άρθρα της εφημερίδας;', en: 'What do we call the person who collects the news and writes the articles in a newspaper?' },
    options: { el: ['Ηθοποιός', 'Βιβλιοθηκάριος', 'Δημοσιογράφος', 'Ταχυδρόμος'], en: ['Actor', 'Librarian', 'Journalist', 'Postman'] },
    correct: 2,
    explanation: {
      el: 'Ο δημοσιογράφος ψάχνει τι συμβαίνει, ρωτάει ανθρώπους και γράφει τις ειδήσεις για την εφημερίδα ή την τηλεόραση.',
      en: 'A journalist finds out what is happening, asks people questions and writes the news for the paper or TV.',
    },
  },
  {
    q: { el: 'Η Μαρία αγόρασε ένα έντυπο με πολλές φωτογραφίες για ζώα. Βγαίνει μία φορά τον μήνα. Τι είναι;', en: 'Maria bought something printed with lots of animal photos. It comes out once a month. What is it?' },
    options: { el: ['Μια εφημερίδα', 'Ένα περιοδικό', 'Μια αφίσα', 'Ένα γράμμα'], en: ['A newspaper', 'A magazine', 'A poster', 'A letter'] },
    correct: 1,
    explanation: {
      el: 'Το περιοδικό βγαίνει κάθε εβδομάδα ή κάθε μήνα, έχει πολλές φωτογραφίες και μιλάει για ένα θέμα, όπως ζώα ή αθλήματα.',
      en: 'A magazine comes out every week or month, has lots of photos and is about one subject, like animals or sports.',
    },
  },
  {
    q: { el: 'Ποια είναι η μεγαλύτερη διαφορά ανάμεσα σε μια εφημερίδα και ένα περιοδικό;', en: 'What is the biggest difference between a newspaper and a magazine?' },
    options: { el: ['Η εφημερίδα βγαίνει κάθε μέρα, το περιοδικό πιο αραιά', 'Το περιοδικό έχει μόνο ειδήσεις', 'Η εφημερίδα δεν έχει καθόλου φωτογραφίες', 'Το περιοδικό είναι πάντα δωρεάν'], en: ['A newspaper comes out every day, a magazine less often', 'A magazine has only news', 'A newspaper has no photos at all', 'A magazine is always free'] },
    correct: 0,
    explanation: {
      el: 'Η εφημερίδα βγαίνει καθημερινά με τις φρέσκες ειδήσεις. Το περιοδικό βγαίνει κάθε εβδομάδα ή μήνα και έχει πιο πολλές φωτογραφίες.',
      en: 'A newspaper comes out daily with fresh news. A magazine comes out weekly or monthly and has more photos.',
    },
  },
  {
    q: { el: 'Η Ελένη βλέπει τηλεόραση. Τι είναι το πιο σωστό για να την απολαμβάνει με ασφάλεια;', en: 'Eleni is watching TV. What is the best way to enjoy it safely?' },
    options: { el: ['Να βλέπει ό,τι πρόγραμμα βρει, όσες ώρες θέλει', 'Να κάθεται πολύ κοντά στην οθόνη για να βλέπει καλύτερα', 'Να διαλέγει παιδικά προγράμματα και να βλέπει για λίγη ώρα', 'Να τρώει το βραδινό της πάντα μπροστά στην τηλεόραση'], en: ['Watch whatever is on, for as long as she likes', 'Sit very close to the screen to see better', 'Choose children\'s programmes and watch for a short time', 'Always eat dinner in front of the TV'] },
    correct: 2,
    explanation: {
      el: 'Η τηλεόραση είναι ωραία με μέτρο: λίγη ώρα, προγράμματα για παιδιά, και μετά παιχνίδι, βιβλίο ή βόλτα έξω.',
      en: 'TV is great in moderation: a short time, programmes made for children, and then play, a book or a walk outside.',
    },
  },
];
