/**
 * Ε' Δημοτικού · ELA · Γεγονός, Γνώμη & Πειθώ / Fact, Opinion & Persuasion
 * =========================================================================
 * Original questions for a native English-speaking child of 10–11 (US Grade 5 / UK Year 5–6).
 * The «el» side is a faithful Greek translation for a Greek-speaking parent; the English
 * sentences being tested stay in English on both sides.
 *
 * What the unit covers, in order:
 *   1–5   fact vs opinion: which is which, the difference, a fact hiding inside an opinion
 *   6–8   signal words: best, should, I believe vs according to, the chart shows
 *   9–12  persuasive techniques: rhetorical question, exaggeration, appeal to feelings, and why
 *   13–16 an original poster text ("Splash Day"): audience, purpose, a fact in it, repetition
 *   17–18 bias: what it means and how to spot it
 *
 * Distractors are the real confusions: a surprising fact mistaken for an opinion, a checkable
 * number mistaken for persuasion, and a loud opinion mistaken for a fact.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE5_ELA_FACT_OPINION_AND_PERSUASION: QuizQuestion[] = [
  // ── 1–5: fact vs opinion ───────────────────────────────────────────────────
  {
    q: { el: 'Ποια πρόταση είναι γεγονός;', en: 'Which sentence is a fact?' },
    options: {
      el: ['A soccer team has eleven players on the field.', 'Soccer is the most exciting sport.', 'Everyone should play soccer.', 'Soccer is better than basketball.'],
      en: ['A soccer team has eleven players on the field.', 'Soccer is the most exciting sport.', 'Everyone should play soccer.', 'Soccer is better than basketball.'],
    },
    correct: 0,
    explanation: {
      el: 'Ένα γεγονός μπορεί να ελεγχθεί και να αποδειχθεί αληθινό: μπορείς να μετρήσεις τους παίκτες. Οι άλλες λένε τι πιστεύει ή νιώθει κάποιος, άρα είναι γνώμες.',
      en: 'A fact can be checked and proven true: you can count the players. The others tell what someone thinks or feels, so they are opinions.',
    },
  },
  {
    q: { el: 'Ποια πρόταση είναι γνώμη;', en: 'Which sentence is an opinion?' },
    options: {
      el: ['Water freezes at 0 degrees Celsius.', 'Our school has two floors.', 'Chocolate ice cream is the best flavor.', 'The library opens at nine.'],
      en: ['Water freezes at 0 degrees Celsius.', 'Our school has two floors.', 'Chocolate ice cream is the best flavor.', 'The library opens at nine.'],
    },
    correct: 2,
    explanation: {
      el: 'Το "best" δείχνει προσωπικό γούστο· κάποιος άλλος μπορεί να προτιμά βανίλια. Γεγονότα όπως το σημείο πήξης του νερού μένουν αληθινά όποιος κι αν τα λέει.',
      en: '"Best" shows a personal taste; someone else might prefer vanilla. Facts like the freezing point of water stay true no matter who says them.',
    },
  },
  {
    q: { el: 'Ποια είναι η διαφορά ανάμεσα σε γεγονός και γνώμη;', en: 'What is the difference between a fact and an opinion?' },
    options: {
      el: ['Το γεγονός είναι μεγάλο και η γνώμη μικρή.', 'Το γεγονός είναι πάντα για την επιστήμη.', 'Η γνώμη είναι πάντα λάθος.', 'Το γεγονός μπορεί να αποδειχθεί αληθινό ή ψεύτικο· η γνώμη είναι αυτό που πιστεύει ή νιώθει κάποιος.'],
      en: ['A fact is long and an opinion is short.', 'A fact is always about science.', 'An opinion is always wrong.', 'A fact can be proven true or false; an opinion is what someone believes or feels.'],
    },
    correct: 3,
    explanation: {
      el: 'Τα γεγονότα ελέγχονται σε ένα βιβλίο, με μια μέτρηση ή ένα πείραμα. Οι γνώμες μπορεί να είναι δυνατές ή καλά τεκμηριωμένες, αλλά δεν αποδεικνύονται όπως ένα γεγονός.',
      en: 'Facts can be checked in a book, a measurement or an experiment. Opinions can be strong or well argued, but they cannot be proven the way a fact can.',
    },
  },
  {
    q: { el: 'Ποιο είναι γεγονός, παρόλο που ακούγεται περίεργο;', en: 'Which is a fact, even though it sounds surprising?' },
    options: {
      el: ['Octopuses have three hearts.', 'Octopuses are the creepiest animals.', 'Nobody likes octopuses.', 'Octopuses should be kept as pets.'],
      en: ['Octopuses have three hearts.', 'Octopuses are the creepiest animals.', 'Nobody likes octopuses.', 'Octopuses should be kept as pets.'],
    },
    correct: 0,
    explanation: {
      el: 'Είτε ακούγεται περίεργο είτε όχι, το "three hearts" μπορεί να ελεγχθεί και είναι αλήθεια. Τα "creepiest" και "should" είναι σημάδια γνώμης.',
      en: 'Whether it sounds surprising or not, "three hearts" can be checked and is true. "Creepiest" and "should" are signs of opinion.',
    },
  },
  {
    q: {
      el: '"I think our town needs more bike lanes because 200 students cycle to school every day." Ποιο μέρος είναι γεγονός;',
      en: '"I think our town needs more bike lanes because 200 students cycle to school every day." Which part is the fact?',
    },
    options: {
      el: ['I think', 'our town needs more bike lanes', '200 students cycle to school every day', 'the whole sentence'],
      en: ['I think', 'our town needs more bike lanes', '200 students cycle to school every day', 'the whole sentence'],
    },
    correct: 2,
    explanation: {
      el: 'Ο αριθμός των μαθητών μπορεί να μετρηθεί, άρα αυτό το μέρος είναι γεγονός. Το "I think our town needs…" είναι η γνώμη του συγγραφέα, και το γεγονός χρησιμοποιείται για να τη στηρίξει.',
      en: 'The number of students can be counted, so that part is a fact. "I think our town needs…" is the writer\'s opinion, and the fact is being used to support it.',
    },
  },

  // ── 6–8: signal words ──────────────────────────────────────────────────────
  {
    q: { el: 'Ποια λέξη είναι σημάδι ότι μια πρόταση είναι μάλλον γνώμη;', en: 'Which word is a signal that a sentence is probably an opinion?' },
    options: { el: ['measured', 'best', 'eleven', 'Tuesday'], en: ['measured', 'best', 'eleven', 'Tuesday'] },
    correct: 1,
    explanation: {
      el: 'Λέξεις όπως best, worst, beautiful, boring και should δείχνουν κρίση, όχι απόδειξη. Αριθμοί, ημερομηνίες και μετρήσεις συνήθως δείχνουν γεγονότα.',
      en: 'Words like best, worst, beautiful, boring and should show judgment, not proof. Numbers, dates and measurements usually point to facts.',
    },
  },
  {
    q: { el: 'Ποια φράση δηλώνει γνώμη;', en: 'Which phrase signals an opinion?' },
    options: { el: ['According to the map', 'The chart shows', 'It was measured at', 'I believe'], en: ['According to the map', 'The chart shows', 'It was measured at', 'I believe'] },
    correct: 3,
    explanation: {
      el: 'Τα "I believe", "I think" και "in my view" προαναγγέλλουν ότι έρχεται προσωπική γνώμη. Τα "according to" και "the chart shows" δείχνουν πηγή που μπορείς να ελέγξεις.',
      en: '"I believe", "I think" and "in my view" announce that a personal opinion is coming. "According to" and "the chart shows" point to a source you can check.',
    },
  },
  {
    q: { el: 'Ποια πρόταση περιέχει λέξη-σημάδι γνώμης;', en: 'Which sentence has an opinion signal word in it?' },
    options: {
      el: ['The bus arrives at 7:45.', 'The pool is 25 meters long.', 'Everyone should visit the new museum.', 'The museum opened in 2019.'],
      en: ['The bus arrives at 7:45.', 'The pool is 25 meters long.', 'Everyone should visit the new museum.', 'The museum opened in 2019.'],
    },
    correct: 2,
    explanation: {
      el: 'Το should λέει στον αναγνώστη τι θέλει ο συγγραφέας να κάνει ή να πιστέψει· αυτό είναι γνώμη. Ώρες, μήκη και χρονολογίες είναι ελέγξιμα γεγονότα.',
      en: 'Should tells the reader what the writer wants them to do or believe; that is an opinion. Times, lengths and years are checkable facts.',
    },
  },

  // ── 9–12: persuasive techniques ────────────────────────────────────────────
  {
    q: { el: '"Don\'t you want to be the fastest runner in your class?" Ποια τεχνική πειθούς είναι αυτή;', en: '"Don\'t you want to be the fastest runner in your class?" Which persuasive technique is this?' },
    options: {
      el: ['Ρητορική ερώτηση', 'Υπερβολή', 'Γεγονός', 'Παρήχηση'],
      en: ['Rhetorical question', 'Exaggeration', 'A fact', 'Alliteration'],
    },
    correct: 0,
    explanation: {
      el: 'Η ρητορική ερώτηση δεν θέλει πραγματικά απάντηση· σε σπρώχνει να συμφωνήσεις. Οι διαφημίσεις τις χρησιμοποιούν για να πεις "ναι" μέσα σου πριν καν σκεφτείς.',
      en: 'A rhetorical question does not really want an answer; it nudges you to agree. Ads use them so you say "yes" in your head before you even think.',
    },
  },
  {
    q: { el: '"These sneakers will make you faster than lightning!" Ποια τεχνική είναι αυτή;', en: '"These sneakers will make you faster than lightning!" Which technique is this?' },
    options: {
      el: ['Ρητορική ερώτηση', 'Υπερβολή', 'Γεγονός', 'Επίκληση στον φόβο'],
      en: ['Rhetorical question', 'Exaggeration', 'A fact', 'Appeal to fear'],
    },
    correct: 1,
    explanation: {
      el: 'Κανείς δεν τρέχει πιο γρήγορα από τον κεραυνό. Η υπερβολή τεντώνει την αλήθεια για να κάνει κάτι να ακούγεται καταπληκτικό.',
      en: 'Nobody can run faster than lightning. Exaggeration (also called hyperbole) stretches the truth to make something sound amazing.',
    },
  },
  {
    q: { el: '"Imagine how happy your grandmother will feel when she opens this card." Ποια τεχνική είναι αυτή;', en: '"Imagine how happy your grandmother will feel when she opens this card." Which technique is this?' },
    options: {
      el: ['Στατιστικά στοιχεία', 'Ρητορική ερώτηση', 'Επίκληση στο συναίσθημα', 'Γνώμη ειδικού'],
      en: ['Statistics', 'Rhetorical question', 'Appeal to feelings', 'Expert opinion'],
    },
    correct: 2,
    explanation: {
      el: 'Αυτή η πρόταση δουλεύει στα συναισθήματά σου, κάνοντάς σε να φανταστείς κάποιον χαρούμενο. Η επίκληση στο συναίσθημα προσπαθεί να πείσει με την καρδιά, όχι με αποδείξεις.',
      en: 'This sentence works on your emotions, making you picture someone happy. An appeal to feelings tries to persuade with the heart, not with proof.',
    },
  },
  {
    q: { el: 'Γιατί οι συγγραφείς χρησιμοποιούν τεχνικές πειθούς;', en: 'Why do writers use persuasive techniques?' },
    options: {
      el: ['Για να πουν μια ιστορία με αρχή, μέση και τέλος', 'Για να εξηγήσουν βήμα βήμα πώς λειτουργεί κάτι', 'Για να περιγράψουν έναν τόπο με λεπτομέρειες', 'Για να πείσουν τους αναγνώστες να συμφωνήσουν ή να δράσουν'],
      en: ['To tell a story with a beginning, middle and end', 'To explain how something works step by step', 'To describe a place in detail', 'To convince readers to agree or take action'],
    },
    correct: 3,
    explanation: {
      el: 'Πειθώ σημαίνει προσπάθεια να αλλάξεις τι σκέφτονται ή τι κάνουν οι άνθρωποι. Οι ιστορίες ψυχαγωγούν και οι εξηγήσεις πληροφορούν, αλλά το κείμενο πειθούς θέλει να συμφωνήσεις ή να δράσεις.',
      en: 'Persuasion means trying to change what people think or do. Stories entertain and explanations inform, but a persuasive text wants you to agree or act.',
    },
  },

  // ── 13–16: a poster — audience and purpose ─────────────────────────────────
  {
    q: {
      el: 'Διάβασε την αφίσα. «SPLASH DAY στην πισίνα Riverside! Σάββατο, 10 π.μ. με 4 μ.μ. Γιγάντια φουσκωτή τσουλήθρα, δωρεάν γρανίτες και διαγωνισμός βουτιάς με βραβεία. Φέρε τους φίλους σου, φέρε την οικογένειά σου, φέρε το πιο μεγάλο σου χαμόγελο! Παιδιά κάτω από 12 κολυμπούν με μόνο δύο δολάρια. Μη χάσεις την πιο δροσερή μέρα του καλοκαιριού!» Ποιο είναι το κύριο κοινό της αφίσας;',
      en: 'Read the poster. "SPLASH DAY at Riverside Pool! Saturday, 10 a.m. to 4 p.m. Giant inflatable slide, free ice pops, and a diving contest with prizes. Bring your friends, bring your family, bring your biggest smile! Kids under 12 swim for just two dollars. Don\'t miss the coolest day of the summer!" Who is the main audience of the poster?',
    },
    options: {
      el: ['Παιδιά και οικογένειες', 'Ιδιοκτήτες επιχειρήσεων', 'Επαγγελματίες κολυμβητές', 'Δάσκαλοι που διορθώνουν διαγωνίσματα'],
      en: ['Kids and families', 'Business owners', 'Professional swimmers', 'Teachers grading tests'],
    },
    correct: 0,
    explanation: {
      el: 'Τα βραβεία, οι δωρεάν γρανίτες, η τιμή για παιδιά κάτω από 12 και το "bring your family" απευθύνονται σε παιδιά και γονείς. Οι καλοί πειστές διαμορφώνουν τα λόγια τους για το κοινό τους.',
      en: 'The prizes, free ice pops, the price for kids under 12 and "bring your family" all aim at kids and their parents. Good persuaders shape their words to fit the audience.',
    },
  },
  {
    q: {
      el: 'Διάβασε την αφίσα. «SPLASH DAY στην πισίνα Riverside! Σάββατο, 10 π.μ. με 4 μ.μ. Γιγάντια φουσκωτή τσουλήθρα, δωρεάν γρανίτες και διαγωνισμός βουτιάς με βραβεία. Φέρε τους φίλους σου, φέρε την οικογένειά σου, φέρε το πιο μεγάλο σου χαμόγελο! Παιδιά κάτω από 12 κολυμπούν με μόνο δύο δολάρια. Μη χάσεις την πιο δροσερή μέρα του καλοκαιριού!» Ποιος είναι ο σκοπός της αφίσας;',
      en: 'Read the poster. "SPLASH DAY at Riverside Pool! Saturday, 10 a.m. to 4 p.m. Giant inflatable slide, free ice pops, and a diving contest with prizes. Bring your friends, bring your family, bring your biggest smile! Kids under 12 swim for just two dollars. Don\'t miss the coolest day of the summer!" What is the purpose of the poster?',
    },
    options: {
      el: ['Να εξηγήσει πώς καθαρίζονται οι πισίνες', 'Να προειδοποιήσει για τα βαθιά νερά', 'Να πείσει τον κόσμο να έρθει στην εκδήλωση', 'Να πει μια ιστορία για έναν κολυμβητή'],
      en: ['To explain how pools are cleaned', 'To warn people about deep water', 'To persuade people to come to the event', 'To tell a story about a swimmer'],
    },
    correct: 2,
    explanation: {
      el: 'Η αφίσα δίνει ώρα, τόπο και διασκεδαστικούς λόγους να έρθεις, και τελειώνει με "Don\'t miss…". Ο σκοπός της είναι να πείσει τον κόσμο να παρευρεθεί.',
      en: 'The poster gives the time, the place and fun reasons to come, and ends with "Don\'t miss…". Its purpose is to persuade people to attend.',
    },
  },
  {
    q: {
      el: 'Διάβασε την αφίσα. «SPLASH DAY στην πισίνα Riverside! Σάββατο, 10 π.μ. με 4 μ.μ. Γιγάντια φουσκωτή τσουλήθρα, δωρεάν γρανίτες και διαγωνισμός βουτιάς με βραβεία. Φέρε τους φίλους σου, φέρε την οικογένειά σου, φέρε το πιο μεγάλο σου χαμόγελο! Παιδιά κάτω από 12 κολυμπούν με μόνο δύο δολάρια. Μη χάσεις την πιο δροσερή μέρα του καλοκαιριού!» Ποια γραμμή της αφίσας είναι γεγονός;',
      en: 'Read the poster. "SPLASH DAY at Riverside Pool! Saturday, 10 a.m. to 4 p.m. Giant inflatable slide, free ice pops, and a diving contest with prizes. Bring your friends, bring your family, bring your biggest smile! Kids under 12 swim for just two dollars. Don\'t miss the coolest day of the summer!" Which line from the poster is a fact?',
    },
    options: {
      el: ['the coolest day of the summer', 'Kids under 12 swim for just two dollars.', 'bring your biggest smile', 'Don\'t miss it!'],
      en: ['the coolest day of the summer', 'Kids under 12 swim for just two dollars.', 'bring your biggest smile', 'Don\'t miss it!'],
    },
    correct: 1,
    explanation: {
      el: 'Η τιμή και το όριο ηλικίας μπορούν να ελεγχθούν στην είσοδο, άρα είναι γεγονότα. Το "coolest day of the summer" είναι γνώμη, και οι άλλες γραμμές είναι προτροπές για να σε πείσουν.',
      en: 'The price and the age limit can be checked at the entrance, so they are facts. "Coolest day of the summer" is an opinion, and the other lines are commands meant to persuade you.',
    },
  },
  {
    q: {
      el: 'Ποια τεχνική χρησιμοποιείται στη γραμμή της αφίσας "Bring your friends, bring your family, bring your biggest smile!";',
      en: 'Which technique is used in the poster line "Bring your friends, bring your family, bring your biggest smile!"?',
    },
    options: {
      el: ['Επανάληψη', 'Στατιστικό στοιχείο', 'Γνώμη ειδικού', 'Γεγονός'],
      en: ['Repetition', 'A statistic', 'Expert opinion', 'A fact'],
    },
    correct: 0,
    explanation: {
      el: 'Η επανάληψη του "bring your…" τρεις φορές κάνει τη φράση πιασάρικη και χτίζει ενθουσιασμό. Η επανάληψη είναι αγαπημένο εργαλείο σε σλόγκαν και ομιλίες.',
      en: 'Repeating "bring your…" three times makes the line catchy and builds excitement. Repetition is a favorite tool in slogans and speeches.',
    },
  },

  // ── 17–18: bias ────────────────────────────────────────────────────────────
  {
    q: { el: 'Τι σημαίνει ότι ένα κείμενο είναι μεροληπτικό (biased);', en: 'What does it mean if a text is biased?' },
    options: {
      el: ['Περιέχει πολλούς αριθμούς.', 'Είναι γραμμένο σε δύο γλώσσες.', 'Έχει τίτλο και εικόνα.', 'Γέρνει προς μία πλευρά και παραλείπει την άποψη της άλλης.'],
      en: ['It contains a lot of numbers.', 'It is written in two languages.', 'It has a title and a picture.', 'It leans to one side and leaves out the other side\'s view.'],
    },
    correct: 3,
    explanation: {
      el: 'Το μεροληπτικό κείμενο δεν είναι ισορροπημένο: παρουσιάζει μόνο μία πλευρά ή χρησιμοποιεί φορτισμένες λέξεις για να σε σπρώξει προς μία γνώμη. Το να εντοπίζεις τη μεροληψία σε βοηθά να αποφασίζεις μόνος σου.',
      en: 'A biased text is not balanced: it presents only one side or uses loaded words to push you toward one opinion. Spotting bias helps you decide for yourself.',
    },
  },
  {
    q: { el: 'Ποια κριτική δείχνει μεροληψία;', en: 'Which review shows bias?' },
    options: {
      el: ['The film lasts two hours and has a happy ending.', 'The theater has 300 seats and opens at noon.', 'This is the greatest film ever made, and anyone who disagrees is silly.', 'The film was released in the spring.'],
      en: ['The film lasts two hours and has a happy ending.', 'The theater has 300 seats and opens at noon.', 'This is the greatest film ever made, and anyone who disagrees is silly.', 'The film was released in the spring.'],
    },
    correct: 2,
    explanation: {
      el: 'Το να την πεις "the greatest ever" και να προσβάλεις όσους διαφωνούν δείχνει ότι ο συγγραφέας δεν είναι δίκαιος ή ισορροπημένος. Οι άλλες προτάσεις είναι σκέτα γεγονότα.',
      en: 'Calling it "the greatest ever" and insulting people who disagree shows the writer is not being fair or balanced. The other sentences are plain facts.',
    },
  },
];
