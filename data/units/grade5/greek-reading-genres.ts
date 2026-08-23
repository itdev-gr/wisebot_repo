/**
 * Ε' Δημοτικού · Γλώσσα · Κειμενικά Είδη
 * =====================================
 * All questions are original (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a child of 10–11. The short texts inside the stems are our own.
 *
 * What the unit covers, in the order an Ε' class meets it:
 *   1–3   the news article: purpose, the "5 questions", the lead (who/what/where/when)
 *   4–6   the letter: parts of a letter, formal vs friendly address, audience
 *   7–9   the advertisement: purpose, persuasive language, what is fact and what is "pitch"
 *   10–12 the argument: thesis, reason/evidence, linking words (επειδή, επομένως)
 *   13–15 the science-fiction story: setting, narrator, imaginative but logical
 *   16–18 mixed: recognising a genre from a snippet, purpose + audience, inference
 */
import type { QuizQuestion } from '../../../types';

export const GRADE5_GREEK_READING_GENRES: QuizQuestion[] = [
  // ── 1–3: the news article ──────────────────────────────────────────────────
  {
    q: {
      el: 'Ποιος είναι ο κύριος σκοπός μιας είδησης στην εφημερίδα;',
      en: 'What is the main purpose of a news article in a newspaper?',
    },
    options: {
      el: ['Να μας πείσει να αγοράσουμε κάτι', 'Να μας ενημερώσει για κάτι που συνέβη', 'Να μας διηγηθεί μια φανταστική ιστορία', 'Να μας πει πώς νιώθει ο συγγραφέας'],
      en: ['To persuade us to buy something', 'To inform us about something that happened', 'To tell us an imaginary story', 'To tell us how the writer feels'],
    },
    correct: 1,
    explanation: {
      el: 'Η είδηση ενημερώνει: λέει τι έγινε, πού, πότε και ποιος το έκανε, με απλά και ακριβή λόγια.',
      en: 'A news article informs: it tells what happened, where, when and who did it, in plain, exact words.',
    },
  },
  {
    q: {
      el: 'Διάβασε την είδηση: «Χθες το πρωί, οι μαθητές του 3ου Δημοτικού Βόλου φύτεψαν 40 δέντρα στο πάρκο της γειτονιάς τους.» Ποια ερώτηση ΔΕΝ απαντάει η είδηση;',
      en: 'Read the news item: “Yesterday morning, the pupils of the 3rd Primary School of Volos planted 40 trees in their neighbourhood park.” Which question does the news item NOT answer?',
    },
    options: {
      el: ['Πότε έγινε;', 'Ποιος το έκανε;', 'Γιατί το έκαναν;', 'Πού έγινε;'],
      en: ['When did it happen?', 'Who did it?', 'Why did they do it?', 'Where did it happen?'],
    },
    correct: 2,
    explanation: {
      el: 'Η είδηση λέει πότε (χθες το πρωί), ποιος (οι μαθητές) και πού (στο πάρκο), αλλά δεν εξηγεί γιατί φύτεψαν τα δέντρα.',
      en: 'The item says when (yesterday morning), who (the pupils) and where (the park), but it does not explain why they planted the trees.',
    },
  },
  {
    q: {
      el: 'Πώς λέγεται η πρώτη παράγραφος μιας είδησης, που μας δίνει με λίγα λόγια τα πιο σημαντικά;',
      en: 'What do we call the first paragraph of a news article, which gives the most important facts in a few words?',
    },
    options: {
      el: ['Επίλογος', 'Διάλογος', 'Τίτλος', 'Εισαγωγή (λιντ)'],
      en: ['Conclusion', 'Dialogue', 'Headline', 'Lead (introduction)'],
    },
    correct: 3,
    explanation: {
      el: 'Η εισαγωγή, που οι δημοσιογράφοι τη λένε «λιντ», απαντά αμέσως στο ποιος, τι, πού, πότε. Ο τίτλος είναι η επικεφαλίδα πάνω από το κείμενο.',
      en: 'The introduction, which journalists call the “lead”, answers who, what, where and when right away. The headline is the title above the text.',
    },
  },

  // ── 4–6: the letter ────────────────────────────────────────────────────────
  {
    q: {
      el: 'Ποιο από τα παρακάτω ΔΕΝ είναι μέρος ενός γράμματος;',
      en: 'Which of these is NOT a part of a letter?',
    },
    options: {
      el: ['Η προσφώνηση («Αγαπητή Ελένη,»)', 'Η ημερομηνία', 'Ο τίτλος με μεγάλα γράμματα', 'Η υπογραφή'],
      en: ['The greeting (“Dear Eleni,”)', 'The date', 'A headline in capital letters', 'The signature'],
    },
    correct: 2,
    explanation: {
      el: 'Ένα γράμμα έχει ημερομηνία, προσφώνηση, κυρίως κείμενο, αποχαιρετισμό και υπογραφή. Τίτλο έχουν οι ειδήσεις και οι διαφημίσεις, όχι τα γράμματα.',
      en: 'A letter has a date, a greeting, the main text, a closing and a signature. Headlines belong to news articles and adverts, not letters.',
    },
  },
  {
    q: {
      el: 'Ο Νίκος γράφει γράμμα στον διευθυντή του σχολείου για να ζητήσει μια νέα μπασκέτα. Ποια προσφώνηση ταιριάζει;',
      en: 'Nikos is writing a letter to the school headteacher to ask for a new basketball hoop. Which greeting fits?',
    },
    options: {
      el: ['Αξιότιμε κύριε Διευθυντά,', 'Γεια σου, φίλε!', 'Αγαπημένε μου παππού,', 'Έλα, τι κάνεις;'],
      en: ['Dear Mr Headteacher,', 'Hi there, buddy!', 'My dearest grandpa,', 'Hey, what\'s up?'],
    },
    correct: 0,
    explanation: {
      el: 'Στον διευθυντή γράφουμε επίσημα, στον πληθυντικό ευγενείας: «Αξιότιμε κύριε Διευθυντά». Το «γεια σου» και το «έλα» είναι για φίλους.',
      en: 'To the headteacher we write formally and politely: “Dear Mr Headteacher”. “Hi” and “hey” are for friends.',
    },
  },
  {
    q: {
      el: 'Διάβασε: «Γεια σου, Μαρία! Πώς πέρασες στη θάλασσα; Εδώ στο χωριό κάθε μέρα παίζω με τα ξαδέρφια μου. Σε περιμένω να γυρίσεις! Φιλιά, Γιώργος.» Σε ποιον απευθύνεται το γράμμα;',
      en: 'Read: “Hi Maria! How was the seaside? Here in the village I play with my cousins every day. I can\'t wait for you to come back! Kisses, Giorgos.” Who is the letter written to?',
    },
    options: {
      el: ['Σε μια δασκάλα', 'Σε μια φίλη', 'Σε μια εφημερίδα', 'Σε έναν άγνωστο'],
      en: ['To a teacher', 'To a friend', 'To a newspaper', 'To a stranger'],
    },
    correct: 1,
    explanation: {
      el: 'Το «γεια σου», ο ενικός και τα «φιλιά» δείχνουν ότι ο Γιώργος γράφει σε φίλη του. Ο τρόπος που γράφουμε αλλάζει ανάλογα με τον αποδέκτη.',
      en: '“Hi”, the casual tone and “kisses” show that Giorgos is writing to a friend. The way we write changes depending on who will read it.',
    },
  },

  // ── 7–9: the advertisement ─────────────────────────────────────────────────
  {
    q: {
      el: 'Ποιος είναι ο σκοπός μιας διαφήμισης;',
      en: 'What is the purpose of an advertisement?',
    },
    options: {
      el: ['Να περιγράψει ένα πείραμα', 'Να μας πείσει να αγοράσουμε ή να κάνουμε κάτι', 'Να μας πει τα νέα της ημέρας', 'Να μας διδάξει γραμματική'],
      en: ['To describe an experiment', 'To persuade us to buy or do something', 'To tell us the news of the day', 'To teach us grammar'],
    },
    correct: 1,
    explanation: {
      el: 'Η διαφήμιση θέλει να μας πείσει: να αγοράσουμε ένα προϊόν, να πάμε κάπου ή να κάνουμε κάτι. Γι\' αυτό χρησιμοποιεί όμορφα λόγια και εικόνες.',
      en: 'An advert wants to persuade us: to buy a product, to go somewhere or to do something. That is why it uses attractive words and pictures.',
    },
  },
  {
    q: {
      el: 'Διάβασε τη διαφήμιση: «Χυμός ΗΛΙΟΣ! Ο πιο δροσερός χυμός του καλοκαιριού. Με 100% πορτοκάλι. Δοκίμασέ τον σήμερα!» Ποια φράση είναι γεγονός που μπορούμε να ελέγξουμε;',
      en: 'Read the advert: “HELIOS Juice! The most refreshing juice of the summer. Made with 100% orange. Try it today!” Which phrase is a fact we can check?',
    },
    options: {
      el: ['«Ο πιο δροσερός χυμός του καλοκαιριού»', '«Δοκίμασέ τον σήμερα!»', '«Με 100% πορτοκάλι»', '«Χυμός ΗΛΙΟΣ!»'],
      en: ['“The most refreshing juice of the summer”', '“Try it today!”', '“Made with 100% orange”', '“HELIOS Juice!”'],
    },
    correct: 2,
    explanation: {
      el: 'Το «100% πορτοκάλι» μπορούμε να το ελέγξουμε στη συσκευασία. Το «πιο δροσερός» είναι γνώμη και το «δοκίμασέ τον» είναι προτροπή.',
      en: '“100% orange” can be checked on the packaging. “Most refreshing” is an opinion and “try it” is a call to action.',
    },
  },
  {
    q: {
      el: 'Γιατί οι διαφημίσεις χρησιμοποιούν συχνά προστακτική, όπως «Αγόρασε!», «Δοκίμασε!», «Έλα!»;',
      en: 'Why do adverts often use commands such as “Buy!”, “Try!”, “Come!”?',
    },
    options: {
      el: ['Για να μας δώσουν πληροφορίες', 'Για να μας ενθαρρύνουν να δράσουμε αμέσως', 'Επειδή είναι πιο ευγενικό', 'Για να εξηγήσουν πώς φτιάχνεται το προϊόν'],
      en: ['To give us information', 'To encourage us to act right away', 'Because it is more polite', 'To explain how the product is made'],
    },
    correct: 1,
    explanation: {
      el: 'Η προστακτική μιλάει κατευθείαν σε εμάς και μας σπρώχνει να κάνουμε κάτι τώρα. Είναι ένα από τα βασικά «κόλπα» της διαφήμισης.',
      en: 'Commands speak straight to us and push us to do something now. It is one of the main “tricks” of advertising.',
    },
  },

  // ── 10–12: the argument ────────────────────────────────────────────────────
  {
    q: {
      el: 'Η Ελένη γράφει ένα κείμενο με τίτλο «Γιατί πρέπει να έχουμε περισσότερη γυμναστική στο σχολείο». Τι είδους κείμενο είναι;',
      en: 'Eleni writes a text titled “Why we should have more PE at school”. What kind of text is it?',
    },
    options: {
      el: ['Επιχειρηματολογικό', 'Είδηση', 'Διαφήμιση', 'Διήγημα'],
      en: ['Argument', 'News article', 'Advertisement', 'Short story'],
    },
    correct: 0,
    explanation: {
      el: 'Όταν υποστηρίζουμε μια άποψη με λόγους, γράφουμε επιχειρηματολογικό κείμενο. Η Ελένη θέλει να πείσει με επιχειρήματα, όχι με διαφήμιση.',
      en: 'When we support an opinion with reasons, we write an argument. Eleni wants to persuade with arguments, not with an advert.',
    },
  },
  {
    q: {
      el: 'Διάβασε: «Τα παιδιά πρέπει να διαβάζουν κάθε μέρα. Πρώτον, μαθαίνουν νέες λέξεις. Δεύτερον, ξεκουράζουν το μυαλό τους από τις οθόνες.» Ποια είναι η θέση (η κύρια άποψη) του κειμένου;',
      en: 'Read: “Children should read every day. First, they learn new words. Second, they rest their minds from screens.” What is the thesis (main opinion) of the text?',
    },
    options: {
      el: ['Τα παιδιά μαθαίνουν νέες λέξεις', 'Οι οθόνες κουράζουν το μυαλό', 'Τα παιδιά πρέπει να διαβάζουν κάθε μέρα', 'Τα βιβλία είναι ακριβά'],
      en: ['Children learn new words', 'Screens tire the mind', 'Children should read every day', 'Books are expensive'],
    },
    correct: 2,
    explanation: {
      el: 'Η θέση είναι αυτό που θέλει να μας πείσει ο συγγραφέας: «να διαβάζουν κάθε μέρα». Το «πρώτον» και το «δεύτερον» είναι τα επιχειρήματα που τη στηρίζουν.',
      en: 'The thesis is what the writer wants to convince us of: “read every day”. “First” and “second” introduce the arguments that support it.',
    },
  },
  {
    q: {
      el: 'Ποια λέξη συμπληρώνει σωστά το επιχείρημα; «Η ποδηλασία είναι καλή για την υγεία, ___ γυμνάζει την καρδιά.»',
      en: 'Which word correctly completes the argument? “Cycling is good for your health, ___ it exercises the heart.”',
    },
    options: {
      el: ['όμως', 'επειδή', 'αλλά', 'ενώ'],
      en: ['however', 'because', 'but', 'while'],
    },
    correct: 1,
    explanation: {
      el: 'Το «επειδή» δίνει την αιτία, δηλαδή τον λόγο που στηρίζει την άποψη. Τα «όμως», «αλλά», «ενώ» δείχνουν αντίθεση.',
      en: '“Because” gives the reason that supports the opinion. “However”, “but” and “while” show contrast.',
    },
  },

  // ── 13–15: the science-fiction story ───────────────────────────────────────
  {
    q: {
      el: 'Ποιο από τα παρακάτω είναι ιστορία επιστημονικής φαντασίας;',
      en: 'Which of these is a science-fiction story?',
    },
    options: {
      el: ['Ένας βασιλιάς ζητά από έναν μάγο να κάνει ένα ξόρκι', 'Μια παρέα φτιάχνει καλύβα στο δάσος', 'Μια ομάδα παιδιών ταξιδεύει με διαστημόπλοιο στον Άρη το 2150', 'Ένας γάτος και ένας σκύλος μαλώνουν για ένα κόκαλο'],
      en: ['A king asks a wizard to cast a spell', 'A group of friends builds a hut in the forest', 'A team of children travels to Mars in a spaceship in 2150', 'A cat and a dog argue over a bone'],
    },
    correct: 2,
    explanation: {
      el: 'Η επιστημονική φαντασία μιλάει για το μέλλον, την τεχνολογία και το διάστημα. Οι μάγοι και τα ξόρκια ανήκουν στο παραμύθι.',
      en: 'Science fiction is about the future, technology and space. Wizards and spells belong to fairy tales.',
    },
  },
  {
    q: {
      el: 'Διάβασε: «Το ρομπότ Ζ-7 άνοιξε τα μάτια του. Έξω από το παράθυρο του σταθμού, η Γη έμοιαζε με μια μικρή μπλε μπάλα. "Ώρα για δουλειά", είπε στον εαυτό του.» Πού εξελίσσεται η ιστορία;',
      en: 'Read: “Robot Z-7 opened its eyes. Outside the station window, the Earth looked like a small blue ball. ‘Time for work,’ it said to itself.” Where does the story take place?',
    },
    options: {
      el: ['Σε ένα εργοστάσιο στη Γη', 'Σε έναν διαστημικό σταθμό', 'Σε ένα σχολείο', 'Στον βυθό της θάλασσας'],
      en: ['In a factory on Earth', 'On a space station', 'At a school', 'At the bottom of the sea'],
    },
    correct: 1,
    explanation: {
      el: 'Αν η Γη φαίνεται από το παράθυρο σαν μικρή μπλε μπάλα, τότε ο «σταθμός» είναι στο διάστημα. Το καταλαβαίνουμε από τα στοιχεία, χωρίς να το λέει το κείμενο.',
      en: 'If the Earth looks like a small blue ball from the window, the “station” must be in space. We work it out from the clues, even though the text does not say it.',
    },
  },
  {
    q: {
      el: 'Στην ιστορία «Ξύπνησα και είδα ότι η πόλη μου πετούσε πάνω από τα σύννεφα. Έτρεξα να βρω τον αδερφό μου», ποιος αφηγείται;',
      en: 'In the story “I woke up and saw that my city was flying above the clouds. I ran to find my brother”, who is telling the story?',
    },
    options: {
      el: ['Ένας ήρωας της ιστορίας, σε πρώτο πρόσωπο', 'Ένας αφηγητής που βλέπει τα πάντα απ\' έξω, σε τρίτο πρόσωπο', 'Ο αδερφός', 'Ένας δημοσιογράφος'],
      en: ['A character in the story, in the first person', 'A narrator watching everything from outside, in the third person', 'The brother', 'A journalist'],
    },
    correct: 0,
    explanation: {
      el: 'Το «ξύπνησα», «είδα», «έτρεξα» είναι πρώτο πρόσωπο: μιλάει ένας ήρωας που ζει την ιστορία. Στο τρίτο πρόσωπο θα λέγαμε «ξύπνησε και είδε».',
      en: '“I woke up”, “I saw”, “I ran” are first person: a character who lives the story is speaking. In the third person we would say “he woke up and saw”.',
    },
  },

  // ── 16–18: mixed — recognising genre, purpose and audience, inference ──────
  {
    q: {
      el: 'Διάβασε: «Μεγάλη έκπτωση μόνο για αυτήν την εβδομάδα! Ποδήλατα ΑΣΤΡΟ με 30% λιγότερο. Μην το χάσεις!» Τι είδους κείμενο είναι;',
      en: 'Read: “Big discount this week only! ASTRO bikes at 30% off. Don\'t miss it!” What kind of text is this?',
    },
    options: {
      el: ['Γράμμα', 'Είδηση', 'Ιστορία επιστημονικής φαντασίας', 'Διαφήμιση'],
      en: ['Letter', 'News article', 'Science-fiction story', 'Advertisement'],
    },
    correct: 3,
    explanation: {
      el: 'Τα θαυμαστικά, η «έκπτωση», το όνομα του προϊόντος και το «μην το χάσεις» δείχνουν διαφήμιση: θέλει να μας κάνει να αγοράσουμε.',
      en: 'The exclamation marks, the “discount”, the product name and “don\'t miss it” point to an advert: it wants us to buy.',
    },
  },
  {
    q: {
      el: 'Η Μαρία γράφει στη δημοτική βιβλιοθήκη για να προτείνει να ανοίγει και τα Σάββατα. Ποιος είναι ο σκοπός και ποιος ο αποδέκτης;',
      en: 'Maria writes to the town library to suggest it should also open on Saturdays. What is the purpose and who is the audience?',
    },
    options: {
      el: ['Σκοπός: να διασκεδάσει · Αποδέκτης: οι φίλοι της', 'Σκοπός: να πείσει · Αποδέκτης: οι υπεύθυνοι της βιβλιοθήκης', 'Σκοπός: να ενημερώσει · Αποδέκτης: οι γονείς της', 'Σκοπός: να διηγηθεί · Αποδέκτης: η τάξη της'],
      en: ['Purpose: to entertain · Audience: her friends', 'Purpose: to persuade · Audience: the people in charge of the library', 'Purpose: to inform · Audience: her parents', 'Purpose: to tell a story · Audience: her class'],
    },
    correct: 1,
    explanation: {
      el: 'Όταν προτείνουμε μια αλλαγή, θέλουμε να πείσουμε. Το γράμμα το διαβάζουν όσοι αποφασίζουν, δηλαδή οι υπεύθυνοι της βιβλιοθήκης.',
      en: 'When we suggest a change, we want to persuade. The letter is read by the people who decide, that is, the library staff in charge.',
    },
  },
  {
    q: {
      el: 'Διάβασε την είδηση: «Μετά από τρεις μέρες δυνατής βροχής, ο δήμος ανακοίνωσε ότι τα σχολεία της περιοχής θα μείνουν κλειστά και αύριο.» Τι μπορούμε να συμπεράνουμε;',
      en: 'Read the news item: “After three days of heavy rain, the council announced that the area\'s schools will stay closed tomorrow as well.” What can we infer?',
    },
    options: {
      el: ['Τα σχολεία ήταν κλειστά και σήμερα', 'Αύριο θα έχει ήλιο', 'Οι μαθητές έχουν διακοπές', 'Η βροχή σταμάτησε πριν από τρεις μέρες'],
      en: ['The schools were closed today as well', 'Tomorrow will be sunny', 'The pupils are on holiday', 'The rain stopped three days ago'],
    },
    correct: 0,
    explanation: {
      el: 'Η λέξη «και αύριο» μας λέει ότι τα σχολεία ήταν ήδη κλειστά σήμερα, αν και το κείμενο δεν το γράφει καθαρά. Αυτό είναι συμπέρασμα.',
      en: 'The words “tomorrow as well” tell us the schools were already closed today, even though the text does not say it directly. That is an inference.',
    },
  },
];
