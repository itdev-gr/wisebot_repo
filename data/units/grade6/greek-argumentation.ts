/**
 * ΣΤ' Δημοτικού · Γλώσσα · Επιχειρηματολογία
 * ===========================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr). Language level: 11–12.
 * The four short texts (A: trees in the schoolyard, B: cycling, C: video games,
 * and the water / recycling arguments) are written for this unit.
 *
 * What the unit covers, in order:
 *   1–5   Text A, a persuasive paragraph: claim (θέση), argument, evidence (τεκμήριο),
 *         and the connecting words πρώτον / επιπλέον / συνεπώς
 *   6–8   fact vs opinion, and the words that signal an opinion
 *   9–10  Text B: informative vs persuasive text, the purpose of a persuasive text
 *   11–12 Text C: the counter-argument (αντεπιχείρημα) and «αντίθετα»
 *   13–14 connecting words: adding an argument, drawing a conclusion
 *   15–18 the strongest argument, a non-argument, the structure of the text, «για παράδειγμα»
 */
import type { QuizQuestion } from '../../../types';

export const GRADE6_GREEK_ARGUMENTATION: QuizQuestion[] = [
  // ── 1–5: Text A — claim, argument, evidence, connecting words ──────────────
  {
    q: { el: 'Τι είναι η «θέση» σε ένα επιχειρηματολογικό κείμενο;', en: 'What is the «θέση» (claim) in an argumentative text?' },
    options: {
      el: ['η άποψη που υποστηρίζει ο συγγραφέας', 'το μέρος όπου γράφτηκε το κείμενο', 'ο τίτλος του κειμένου', 'η τελευταία πρόταση του κειμένου'],
      en: ['the view the writer supports', 'the place where the text was written', 'the title of the text', 'the last sentence of the text'],
    },
    correct: 0,
    explanation: {
      el: 'Η θέση είναι αυτό που πιστεύει ο συγγραφέας και θέλει να μας πείσει γι\' αυτό. Όλα τα επιχειρήματα του κειμένου τη στηρίζουν.',
      en: 'The claim is what the writer believes and wants to convince us of. Every argument in the text supports it.',
    },
  },
  {
    q: { el: 'Κείμενο Α: «Πιστεύω ότι η αυλή του σχολείου μας χρειάζεται περισσότερα δέντρα. Πρώτον, τα δέντρα προσφέρουν σκιά τις ζεστές μέρες. Επιπλέον, μια μέτρηση του δήμου έδειξε ότι οι αυλές με δέντρα είναι 3 βαθμούς πιο δροσερές. Συνεπώς, η φύτευση δέντρων θα κάνει τα διαλείμματα πιο ευχάριστα.» Ποια είναι η θέση του συγγραφέα;', en: 'Text A: «Πιστεύω ότι η αυλή του σχολείου μας χρειάζεται περισσότερα δέντρα. Πρώτον, τα δέντρα προσφέρουν σκιά τις ζεστές μέρες. Επιπλέον, μια μέτρηση του δήμου έδειξε ότι οι αυλές με δέντρα είναι 3 βαθμούς πιο δροσερές. Συνεπώς, η φύτευση δέντρων θα κάνει τα διαλείμματα πιο ευχάριστα.» (I believe our schoolyard needs more trees. First, trees give shade on hot days. Moreover, a measurement by the town council showed that yards with trees are 3 degrees cooler. Therefore, planting trees will make break time more pleasant.) What is the writer\'s claim?' },
    options: {
      el: ['Τα δέντρα προσφέρουν σκιά.', 'Η αυλή του σχολείου χρειάζεται περισσότερα δέντρα.', 'Ο δήμος έκανε μια μέτρηση.', 'Τα διαλείμματα είναι ευχάριστα.'],
      en: ['Trees give shade.', 'The schoolyard needs more trees.', 'The town council took a measurement.', 'Break time is pleasant.'],
    },
    correct: 1,
    explanation: {
      el: 'Η θέση δηλώνεται συνήθως στην αρχή, μετά από λέξεις όπως «πιστεύω»: η αυλή χρειάζεται περισσότερα δέντρα. Η σκιά και η μέτρηση είναι επιχειρήματα που τη στηρίζουν.',
      en: 'The claim is usually stated at the start, after words like «πιστεύω» (I believe): the yard needs more trees. The shade and the measurement are arguments that support it.',
    },
  },
  {
    q: { el: 'Στο Κείμενο Α, ποια πρόταση είναι τεκμήριο (απόδειξη) που στηρίζει το επιχείρημα;', en: 'In Text A, which sentence is evidence (τεκμήριο) that supports the argument?' },
    options: {
      el: ['Πιστεύω ότι η αυλή χρειάζεται περισσότερα δέντρα.', 'Τα δέντρα προσφέρουν σκιά τις ζεστές μέρες.', 'Η μέτρηση του δήμου έδειξε ότι οι αυλές με δέντρα είναι 3 βαθμούς πιο δροσερές.', 'Η φύτευση δέντρων θα κάνει τα διαλείμματα πιο ευχάριστα.'],
      en: ['I believe the yard needs more trees.', 'Trees give shade on hot days.', 'The council\'s measurement showed that yards with trees are 3 degrees cooler.', 'Planting trees will make break time more pleasant.'],
    },
    correct: 2,
    explanation: {
      el: 'Τεκμήριο είναι ένα στοιχείο που μπορεί να ελεγχθεί: αριθμοί, μετρήσεις, έρευνες. Οι «3 βαθμοί» από τη μέτρηση του δήμου κάνουν το επιχείρημα πολύ πιο πειστικό.',
      en: 'Evidence is something that can be checked: numbers, measurements, studies. The “3 degrees” from the council\'s measurement make the argument far more convincing.',
    },
  },
  {
    q: { el: 'Στο Κείμενο Α, τι δηλώνει η λέξη «Συνεπώς»;', en: 'In Text A, what does the word «Συνεπώς» (therefore) signal?' },
    options: {
      el: ['αντίθεση', 'παράδειγμα', 'χρόνο', 'συμπέρασμα'],
      en: ['contrast', 'an example', 'time', 'a conclusion'],
    },
    correct: 3,
    explanation: {
      el: 'Το «συνεπώς» (όπως και το «άρα», «επομένως») εισάγει το συμπέρασμα: αφού ισχύουν τα προηγούμενα, τότε… Είναι το κλείσιμο της επιχειρηματολογίας.',
      en: '«Συνεπώς» (like «άρα», «επομένως») introduces the conclusion: since the above is true, then… It closes the argument.',
    },
  },
  {
    q: { el: 'Στο Κείμενο Α, οι λέξεις «Πρώτον» και «Επιπλέον» βοηθούν τον συγγραφέα να…', en: 'In Text A, what do the words «Πρώτον» (first) and «Επιπλέον» (moreover) help the writer do?' },
    options: {
      el: ['βάλει τα επιχειρήματά του στη σειρά και να προσθέσει καινούργια', 'δείξει αντίθεση με κάποιον άλλον', 'κάνει μια ερώτηση στον αναγνώστη', 'κλείσει το κείμενο'],
      en: ['put the arguments in order and add new ones', 'show contrast with someone else', 'ask the reader a question', 'close the text'],
    },
    correct: 0,
    explanation: {
      el: 'Το «πρώτον» ανοίγει τη λίστα των επιχειρημάτων και το «επιπλέον» προσθέτει το επόμενο. Έτσι ο αναγνώστης βλέπει καθαρά πόσα επιχειρήματα υπάρχουν.',
      en: '«Πρώτον» opens the list of arguments and «επιπλέον» adds the next one. That way the reader can clearly see how many arguments there are.',
    },
  },

  // ── 6–8: fact vs opinion ─────────────────────────────────────────────────
  {
    q: { el: 'Ποια από τις παρακάτω προτάσεις είναι γεγονός (κάτι που μπορεί να ελεγχθεί);', en: 'Which of these sentences is a fact (something that can be checked)?' },
    options: {
      el: ['Το καλοκαίρι είναι η καλύτερη εποχή.', 'Ο Ιούνιος έχει 30 ημέρες.', 'Η θάλασσα είναι πιο ωραία από το βουνό.', 'Το παγωτό σοκολάτα είναι το πιο νόστιμο.'],
      en: ['Summer is the best season.', 'June has 30 days.', 'The sea is nicer than the mountains.', 'Chocolate ice cream is the tastiest.'],
    },
    correct: 1,
    explanation: {
      el: 'Το ότι ο Ιούνιος έχει 30 ημέρες το ελέγχεις σε ένα ημερολόγιο — είναι γεγονός. «Καλύτερη», «πιο ωραία», «πιο νόστιμο» είναι γνώμες: άλλος συμφωνεί, άλλος όχι.',
      en: 'That June has 30 days can be checked on a calendar — it is a fact. “Best”, “nicer”, “tastiest” are opinions: some agree, some do not.',
    },
  },
  {
    q: { el: 'Ποια από τις παρακάτω προτάσεις είναι γνώμη;', en: 'Which of these sentences is an opinion?' },
    options: {
      el: ['Η Αθήνα είναι η πρωτεύουσα της Ελλάδας.', 'Η Γη γυρίζει γύρω από τον Ήλιο.', 'Η Αθήνα είναι η πιο όμορφη πόλη του κόσμου.', 'Το νερό βράζει στους 100 βαθμούς.'],
      en: ['Athens is the capital of Greece.', 'The Earth goes around the Sun.', 'Athens is the most beautiful city in the world.', 'Water boils at 100 degrees.'],
    },
    correct: 2,
    explanation: {
      el: '«Η πιο όμορφη» είναι προσωπική κρίση — δεν υπάρχει όργανο που να μετράει την ομορφιά. Οι άλλες τρεις προτάσεις ελέγχονται και ισχύουν για όλους.',
      en: '“The most beautiful” is a personal judgement — there is no instrument that measures beauty. The other three sentences can be checked and hold for everyone.',
    },
  },
  {
    q: { el: 'Ποιες λέξεις μας δείχνουν ότι κάποιος εκφράζει γνώμη και όχι γεγονός;', en: 'Which words show us that someone is expressing an opinion rather than a fact?' },
    options: {
      el: ['πιστεύω, νομίζω, κατά τη γνώμη μου', 'χθες, σήμερα, αύριο', 'πάνω, κάτω, δίπλα', 'ένα, δύο, τρία'],
      en: ['πιστεύω (I believe), νομίζω (I think), κατά τη γνώμη μου (in my opinion)', 'χθες (yesterday), σήμερα (today), αύριο (tomorrow)', 'πάνω (up), κάτω (down), δίπλα (next to)', 'ένα (one), δύο (two), τρία (three)'],
    },
    correct: 0,
    explanation: {
      el: 'Όταν διαβάζεις «πιστεύω», «νομίζω», «κατά τη γνώμη μου», «μου φαίνεται», ξέρεις ότι ακολουθεί άποψη. Είναι τίμιο να τις χρησιμοποιούμε όταν λέμε τη γνώμη μας.',
      en: 'When you read «πιστεύω», «νομίζω», «κατά τη γνώμη μου», «μου φαίνεται» (it seems to me), you know a view follows. It is honest to use them when giving our opinion.',
    },
  },

  // ── 9–10: informative vs persuasive ──────────────────────────────────────
  {
    q: { el: 'Κείμενο Β: «Η ποδηλασία είναι άθλημα που γίνεται με ποδήλατο. Οι αγώνες χωρίζονται σε αγώνες δρόμου, βουνού και πίστας. Το πρώτο ποδήλατο με πετάλια κατασκευάστηκε τον 19ο αιώνα.» Τι είδους κείμενο είναι αυτό;', en: 'Text B: «Η ποδηλασία είναι άθλημα που γίνεται με ποδήλατο. Οι αγώνες χωρίζονται σε αγώνες δρόμου, βουνού και πίστας. Το πρώτο ποδήλατο με πετάλια κατασκευάστηκε τον 19ο αιώνα.» (Cycling is a sport done on a bicycle. Races are divided into road, mountain and track races. The first bicycle with pedals was built in the 19th century.) What kind of text is this?' },
    options: {
      el: ['πειστικό — προσπαθεί να μας πείσει για κάτι', 'πληροφοριακό — δίνει πληροφορίες χωρίς να παίρνει θέση', 'παραμύθι — διηγείται μια φανταστική ιστορία', 'ποίημα — έχει ρίμα και στίχους'],
      en: ['persuasive — it tries to convince us of something', 'informative — it gives information without taking a side', 'a fairy tale — it tells an imaginary story', 'a poem — it has rhyme and verses'],
    },
    correct: 1,
    explanation: {
      el: 'Το κείμενο δίνει μόνο γεγονότα (τι είναι, πώς χωρίζεται, πότε φτιάχτηκε) και δεν λέει «πρέπει» ή «πιστεύω». Δεν προσπαθεί να μας πείσει — μας ενημερώνει.',
      en: 'The text gives only facts (what it is, how it is divided, when it was built) and never says “should” or “I believe”. It does not try to persuade us — it informs us.',
    },
  },
  {
    q: { el: 'Ποιος είναι ο σκοπός ενός πειστικού κειμένου;', en: 'What is the purpose of a persuasive text?' },
    options: {
      el: ['να διασκεδάσει τον αναγνώστη', 'να περιγράψει ένα τοπίο', 'να πείσει τον αναγνώστη να συμφωνήσει με μια άποψη', 'να δώσει οδηγίες για μια συνταγή'],
      en: ['to entertain the reader', 'to describe a landscape', 'to convince the reader to agree with a view', 'to give instructions for a recipe'],
    },
    correct: 2,
    explanation: {
      el: 'Το πειστικό κείμενο θέλει να αλλάξει ή να ενισχύσει τη γνώμη του αναγνώστη — γι\' αυτό έχει θέση, επιχειρήματα και τεκμήρια. Τέτοια είναι οι αφίσες, τα άρθρα γνώμης, οι επιστολές διαμαρτυρίας.',
      en: 'A persuasive text wants to change or strengthen the reader\'s opinion — that is why it has a claim, arguments and evidence. Posters, opinion pieces and letters of complaint are like this.',
    },
  },

  // ── 11–12: Text C — the counter-argument ─────────────────────────────────
  {
    q: { el: 'Κείμενο Γ: «Κάποιοι υποστηρίζουν ότι τα βιντεοπαιχνίδια είναι χάσιμο χρόνου. Αντίθετα, εγώ πιστεύω ότι, όταν παίζουμε με μέτρο, μας μαθαίνουν να σκεφτόμαστε γρήγορα και να συνεργαζόμαστε.» Ποιο είναι το αντεπιχείρημα στο οποίο απαντά ο συγγραφέας;', en: 'Text C: «Κάποιοι υποστηρίζουν ότι τα βιντεοπαιχνίδια είναι χάσιμο χρόνου. Αντίθετα, εγώ πιστεύω ότι, όταν παίζουμε με μέτρο, μας μαθαίνουν να σκεφτόμαστε γρήγορα και να συνεργαζόμαστε.» (Some people claim that video games are a waste of time. On the contrary, I believe that, when we play in moderation, they teach us to think fast and to cooperate.) Which is the counter-argument the writer is answering?' },
    options: {
      el: ['Τα βιντεοπαιχνίδια είναι χάσιμο χρόνου.', 'Τα βιντεοπαιχνίδια μας μαθαίνουν να συνεργαζόμαστε.', 'Πρέπει να παίζουμε με μέτρο.', 'Τα βιντεοπαιχνίδια είναι ακριβά.'],
      en: ['Video games are a waste of time.', 'Video games teach us to cooperate.', 'We should play in moderation.', 'Video games are expensive.'],
    },
    correct: 0,
    explanation: {
      el: 'Αντεπιχείρημα είναι η αντίθετη άποψη που αναφέρει ο συγγραφέας («κάποιοι υποστηρίζουν…») για να την απαντήσει. Όταν απαντάς στους αντιπάλους σου, το κείμενό σου γίνεται πιο δυνατό.',
      en: 'A counter-argument is the opposing view the writer mentions («κάποιοι υποστηρίζουν…» — some people claim…) in order to answer it. Answering your opponents makes your text stronger.',
    },
  },
  {
    q: { el: 'Στο Κείμενο Γ, τι δηλώνει η λέξη «Αντίθετα»;', en: 'In Text C, what does the word «Αντίθετα» (on the contrary) signal?' },
    options: {
      el: ['ότι προσθέτει ένα ακόμα επιχείρημα', 'ότι φέρνει ένα παράδειγμα', 'ότι θα πει κάτι αντίθετο από το προηγούμενο', 'ότι τελειώνει το κείμενο'],
      en: ['that another argument is being added', 'that an example is coming', 'that something opposite to the previous point will be said', 'that the text is ending'],
    },
    correct: 2,
    explanation: {
      el: 'Το «αντίθετα» (όπως και το «όμως», «ωστόσο», «από την άλλη») δείχνει αντίθεση: πρώτα η γνώμη των άλλων, μετά η δική μου, διαφορετική.',
      en: '«Αντίθετα» (like «όμως», «ωστόσο», «από την άλλη») signals contrast: first the others\' view, then my own, different one.',
    },
  },

  // ── 13–14: connecting words ──────────────────────────────────────────────
  {
    q: { el: 'Ποια συνδετική λέξη χρησιμοποιούμε για να προσθέσουμε ένα ακόμα επιχείρημα;', en: 'Which connecting word do we use to add one more argument?' },
    options: {
      el: ['αντίθετα', 'επιπλέον', 'συνεπώς', 'όμως'],
      en: ['αντίθετα (on the contrary)', 'επιπλέον (moreover)', 'συνεπώς (therefore)', 'όμως (however)'],
    },
    correct: 1,
    explanation: {
      el: 'Για πρόσθεση: επιπλέον, επίσης, ακόμη, δεύτερον. Για αντίθεση: αντίθετα, όμως. Για συμπέρασμα: συνεπώς, άρα.',
      en: 'To add: επιπλέον, επίσης, ακόμη, δεύτερον. For contrast: αντίθετα, όμως. For a conclusion: συνεπώς, άρα.',
    },
  },
  {
    q: { el: 'Ποια συνδετική λέξη εισάγει το συμπέρασμα ενός κειμένου;', en: 'Which connecting word introduces the conclusion of a text?' },
    options: {
      el: ['πρώτον', 'για παράδειγμα', 'αντίθετα', 'άρα'],
      en: ['πρώτον (first)', 'για παράδειγμα (for example)', 'αντίθετα (on the contrary)', 'άρα (so, therefore)'],
    },
    correct: 3,
    explanation: {
      el: 'Το «άρα» (και το «συνεπώς», «επομένως», «συμπερασματικά») λέει στον αναγνώστη: «τώρα έρχεται το συμπέρασμα από όσα είπα».',
      en: '«Άρα» (and «συνεπώς», «επομένως», «συμπερασματικά») tells the reader: “here comes the conclusion from what I said”.',
    },
  },

  // ── 15–18: strong and weak arguments, structure, examples ────────────────
  {
    q: { el: 'Θέση: «Πρέπει να πίνουμε αρκετό νερό κάθε μέρα.» Ποιο είναι το πιο δυνατό επιχείρημα;', en: 'Claim: «Πρέπει να πίνουμε αρκετό νερό κάθε μέρα.» (We should drink enough water every day.) Which is the strongest argument?' },
    options: {
      el: ['Επειδή έτσι λέει ο ξάδερφός μου.', 'Επειδή το σώμα μας αποτελείται κατά τα δύο τρίτα από νερό και το χρειάζεται για να λειτουργεί.', 'Επειδή το νερό είναι υγρό.', 'Επειδή μου αρέσει η γεύση του.'],
      en: ['Because my cousin says so.', 'Because our body is two-thirds water and needs it to work.', 'Because water is a liquid.', 'Because I like the taste.'],
    },
    correct: 1,
    explanation: {
      el: 'Το δυνατό επιχείρημα στηρίζεται σε γεγονός που αφορά όλους (το σώμα χρειάζεται νερό). Το «έτσι λέει ο ξάδερφός μου» και το «μου αρέσει» πείθουν μόνο εσένα.',
      en: 'A strong argument rests on a fact that applies to everyone (the body needs water). “My cousin says so” and “I like it” only convince you.',
    },
  },
  {
    q: { el: 'Θέση: «Πρέπει να ανακυκλώνουμε.» Ποιο από τα παρακάτω ΔΕΝ είναι πραγματικό επιχείρημα;', en: 'Claim: «Πρέπει να ανακυκλώνουμε.» (We should recycle.) Which of these is NOT a real argument?' },
    options: {
      el: ['Η ανακύκλωση μειώνει τα σκουπίδια στις χωματερές.', 'Η ανακύκλωση εξοικονομεί πρώτες ύλες.', 'Όλοι ανακυκλώνουν, άρα πρέπει κι εσύ.', 'Η ανακύκλωση χαρτιού σώζει δέντρα.'],
      en: ['Recycling reduces rubbish in landfills.', 'Recycling saves raw materials.', 'Everyone recycles, so you must too.', 'Recycling paper saves trees.'],
    },
    correct: 2,
    explanation: {
      el: '«Όλοι το κάνουν» δεν εξηγεί γιατί είναι σωστό — απλώς πιέζει. Τα άλλα τρία λένε τι κερδίζουμε από την ανακύκλωση, άρα είναι επιχειρήματα.',
      en: '“Everyone does it” does not explain why it is right — it just pushes. The other three say what we gain from recycling, so they are arguments.',
    },
  },
  {
    q: { el: 'Ποια είναι η σωστή σειρά των μερών σε ένα επιχειρηματολογικό κείμενο;', en: 'What is the correct order of the parts in an argumentative text?' },
    options: {
      el: ['συμπέρασμα → θέση → επιχειρήματα', 'επιχειρήματα → τίτλος → θέση', 'παράδειγμα → συμπέρασμα → θέση', 'θέση → επιχειρήματα → συμπέρασμα'],
      en: ['conclusion → claim → arguments', 'arguments → title → claim', 'example → conclusion → claim', 'claim → arguments → conclusion'],
    },
    correct: 3,
    explanation: {
      el: 'Πρώτα λες τι πιστεύεις (θέση), μετά γιατί (επιχειρήματα με τεκμήρια) και στο τέλος κλείνεις (συμπέρασμα). Ακριβώς όπως το Κείμενο Α.',
      en: 'First say what you believe (claim), then why (arguments with evidence) and finally close (conclusion). Exactly like Text A.',
    },
  },
  {
    q: { el: 'Η φράση «για παράδειγμα» χρησιμεύει σε ένα επιχειρηματολογικό κείμενο για να…', en: 'In an argumentative text, what is the phrase «για παράδειγμα» (for example) used for?' },
    options: {
      el: ['δείξουμε αντίθεση', 'βγάλουμε συμπέρασμα', 'αλλάξουμε θέμα', 'στηρίξουμε το επιχείρημα με κάτι συγκεκριμένο'],
      en: ['to show contrast', 'to draw a conclusion', 'to change the subject', 'to support the argument with something specific'],
    },
    correct: 3,
    explanation: {
      el: 'Ένα παράδειγμα κάνει το επιχείρημα χειροπιαστό: «Τα δέντρα δροσίζουν την αυλή. Για παράδειγμα, κάτω από τον πλάτανο κάθονται όλοι στο διάλειμμα.»',
      en: 'An example makes the argument concrete: “Trees cool the yard. For example, at break time everyone sits under the plane tree.”',
    },
  },
];
