/**
 * Ε' Δημοτικού · ELA · Ευθύς Λόγος / Direct Speech
 * ==================================================
 * Original questions for a native English-speaking child of 10–11 (US Grade 5 / UK Year 5–6).
 * The «el» side is a faithful Greek translation for a Greek-speaking parent; the English
 * sentences being tested stay in English on both sides.
 *
 * What the unit covers, in order:
 *   1–4   quotation marks: what goes inside them, direct speech as a term, the closing mark
 *   5–8   the comma before the quote, the capital letter inside, punctuation inside the closing mark
 *   9–12  reporting verbs: said, asked, whispered, cheered, and why writers vary them
 *   13–15 layout and harder cases: new speaker = new line, reporting words in the middle, questions
 *   16–18 direct vs reported speech, changing one into the other
 *
 * US punctuation style: commas and periods sit inside the closing quotation mark.
 * Distractors are the real slips: the mark in the wrong place, no comma after "said",
 * a small letter opening the quote, and the question mark outside the quote.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE5_ELA_DIRECT_SPEECH: QuizQuestion[] = [
  // ── 1–4: quotation marks ───────────────────────────────────────────────────
  {
    q: { el: 'Ποια πρόταση χρησιμοποιεί σωστά τα εισαγωγικά;', en: 'Which sentence uses quotation marks correctly?' },
    options: {
      el: ['"Come here," said Mia.', 'Come here, "said Mia."', '"Come here, said Mia."', 'Come here, said "Mia."'],
      en: ['"Come here," said Mia.', 'Come here, "said Mia."', '"Come here, said Mia."', 'Come here, said "Mia."'],
    },
    correct: 0,
    explanation: {
      el: 'Τα εισαγωγικά μπαίνουν μόνο γύρω από τις λέξεις που ειπώθηκαν πραγματικά: το "Come here," είναι αυτό που είπε η Mia, άρα αυτό μπαίνει μέσα στα εισαγωγικά.',
      en: 'Quotation marks go around only the words that were actually spoken: "Come here," is what Mia said, so that is what sits inside the marks.',
    },
  },
  {
    q: { el: 'Πώς λέγονται οι λέξεις μέσα στα εισαγωγικά;', en: 'What are the words inside quotation marks called?' },
    options: {
      el: ['πλάγιος λόγος (reported speech)', 'λεζάντα', 'επικεφαλίδα', 'ευθύς λόγος (direct speech)'],
      en: ['reported speech', 'a caption', 'a heading', 'direct speech'],
    },
    correct: 3,
    explanation: {
      el: 'Ευθύς λόγος (direct speech) είναι τα ακριβή λόγια κάποιου, μέσα σε εισαγωγικά. Ο πλάγιος λόγος (reported speech) μας λέει τι ειπώθηκε χωρίς να παραθέτει τις λέξεις.',
      en: 'Direct speech is the exact words someone says, shown inside quotation marks. Reported speech tells us what was said without quoting the words.',
    },
  },
  {
    q: { el: 'Ποια πρόταση έχει σωστή στίξη;', en: 'Which sentence is punctuated correctly?' },
    options: {
      el: ['"Leo said," I finished my project.', 'Leo said, I finished my project.', 'Leo said, "I finished my project."', 'Leo "said, I finished my project."'],
      en: ['"Leo said," I finished my project.', 'Leo said, I finished my project.', 'Leo said, "I finished my project."', 'Leo "said, I finished my project."'],
    },
    correct: 2,
    explanation: {
      el: 'Μόνο τα λόγια του Leo μπαίνουν μέσα στα εισαγωγικά. Ένα κόμμα μετά το said ανοίγει την παράθεση, και η τελεία μπαίνει μέσα από το εισαγωγικό που κλείνει.',
      en: 'Only Leo\'s spoken words go inside the marks. A comma after said opens the quote, and the period sits inside the closing mark.',
    },
  },
  {
    q: { el: 'Τι λείπει από αυτή την πρόταση; Dad said, "Dinner is ready.', en: 'What is missing from this sentence? Dad said, "Dinner is ready.' },
    options: {
      el: ['ένα κόμμα', 'το εισαγωγικό που κλείνει', 'ένα κεφαλαίο γράμμα', 'ένα ερωτηματικό'],
      en: ['a comma', 'the closing quotation mark', 'a capital letter', 'a question mark'],
    },
    correct: 1,
    explanation: {
      el: 'Κάθε παράθεση χρειάζεται εισαγωγικό που ανοίγει και εισαγωγικό που κλείνει: "Dinner is ready." Χωρίς το εισαγωγικό που κλείνει, ο αναγνώστης δεν ξέρει πού τελειώνουν τα λόγια.',
      en: 'Every quote needs an opening and a closing mark: "Dinner is ready." Without the closing mark, the reader cannot tell where the speech ends.',
    },
  },

  // ── 5–8: comma, capital letter, punctuation inside the quote ───────────────
  {
    q: { el: 'Ποιο σημείο στίξης μπαίνει μετά το "said" και πριν από την παράθεση;', en: 'Which punctuation mark goes after "said" and before the quote?' },
    options: {
      el: ['τελεία', 'άνω και κάτω τελεία', 'κόμμα', 'τίποτα'],
      en: ['a period', 'a colon', 'a comma', 'nothing'],
    },
    correct: 2,
    explanation: {
      el: 'Ένα κόμμα χωρίζει τις λέξεις αναφοράς από την παράθεση: Mom said, "Let\'s go." Το κόμμα είναι σαν μια μικρή παύση πριν αρχίσουν τα λόγια.',
      en: 'A comma separates the reporting words from the quote: Mom said, "Let\'s go." The comma is like a little pause before the spoken words start.',
    },
  },
  {
    q: { el: 'Ποια πρόταση είναι σωστή;', en: 'Which sentence is correct?' },
    options: {
      el: ['Ben asked, "can I borrow a pencil?"', 'Ben asked, "Can I borrow a pencil"?', 'Ben asked "Can I borrow a pencil?"', 'Ben asked, "Can I borrow a pencil?"'],
      en: ['Ben asked, "can I borrow a pencil?"', 'Ben asked, "Can I borrow a pencil"?', 'Ben asked "Can I borrow a pencil?"', 'Ben asked, "Can I borrow a pencil?"'],
    },
    correct: 3,
    explanation: {
      el: 'Η πρώτη λέξη μέσα στα εισαγωγικά παίρνει κεφαλαίο, και το ερωτηματικό μένει μέσα από το εισαγωγικό που κλείνει: "Can I borrow a pencil?" Και μην ξεχνάς το κόμμα μετά το asked.',
      en: 'The first word inside the quote gets a capital letter, and the question mark stays inside the closing mark: "Can I borrow a pencil?" And do not forget the comma after asked.',
    },
  },
  {
    q: { el: 'Πού μπαίνει η τελεία στο τέλος αυτής της πρότασης; The teacher said, "Open your books"', en: 'Where does the period go at the end of this sentence? The teacher said, "Open your books"' },
    options: {
      el: ['Μέσα από το εισαγωγικό που κλείνει', 'Έξω από το εισαγωγικό που κλείνει', 'Και μέσα και έξω', 'Δεν χρειάζεται τελεία'],
      en: ['Inside the closing quotation mark', 'Outside the closing quotation mark', 'Both inside and outside', 'No period is needed'],
    },
    correct: 0,
    explanation: {
      el: 'Στα αμερικανικά αγγλικά, οι τελείες και τα κόμματα μπαίνουν μέσα από το εισαγωγικό που κλείνει: "Open your books." Η στίξη ανήκει στις λέξεις που ειπώθηκαν.',
      en: 'In American English, periods and commas go inside the closing quotation mark: "Open your books." The punctuation belongs to the words that were spoken.',
    },
  },
  {
    q: { el: 'Ποια πρόταση έχει σωστή στίξη;', en: 'Which sentence is punctuated correctly?' },
    options: {
      el: ['"I love this song." said Kim.', '"I love this song" said Kim.', '"I love this song," said Kim.', '"I love this song", said Kim.'],
      en: ['"I love this song." said Kim.', '"I love this song" said Kim.', '"I love this song," said Kim.', '"I love this song", said Kim.'],
    },
    correct: 2,
    explanation: {
      el: 'Όταν η παράθεση έρχεται πρώτη και η πρόταση συνεχίζει με said Kim, η παράθεση τελειώνει με κόμμα μέσα στα εισαγωγικά, όχι με τελεία: "I love this song," said Kim.',
      en: 'When the quote comes first and the sentence continues with said Kim, the quote ends with a comma inside the marks, not a period: "I love this song," said Kim.',
    },
  },

  // ── 9–12: reporting verbs ──────────────────────────────────────────────────
  {
    q: { el: 'Ποιο ρήμα αναφοράς ταιριάζει καλύτερα; "Is anyone home?" ___ Sam.', en: 'Which reporting verb fits best? "Is anyone home?" ___ Sam.' },
    options: { el: ['asked', 'shouted', 'whispered', 'said'], en: ['asked', 'shouted', 'whispered', 'said'] },
    correct: 0,
    explanation: {
      el: 'Η παράθεση είναι ερώτηση, άρα το asked ταιριάζει καλύτερα. Ρήματα αναφοράς όπως asked, replied και explained λένε στον αναγνώστη πώς ειπώθηκαν τα λόγια.',
      en: 'The quote is a question, so asked is the best fit. Reporting verbs like asked, replied and explained tell the reader how the words were spoken.',
    },
  },
  {
    q: { el: 'Ποιο ρήμα αναφοράς δείχνει ότι αυτός που μιλάει είναι πολύ σιγανός;', en: 'Which reporting verb shows the speaker is being very quiet?' },
    options: { el: ['shouted', 'whispered', 'cheered', 'announced'], en: ['shouted', 'whispered', 'cheered', 'announced'] },
    correct: 1,
    explanation: {
      el: 'Το whispered σημαίνει μιλάω πολύ σιγά: "Don\'t wake the baby," whispered Nora. Το σωστό ρήμα βοηθάει τον αναγνώστη να ακούσει τη φωνή.',
      en: 'Whispered means speaking very softly: "Don\'t wake the baby," whispered Nora. Choosing the right verb helps the reader hear the voice.',
    },
  },
  {
    q: { el: 'Ποιο ρήμα αναφοράς ταιριάζει καλύτερα; "We won the game!" ___ the whole team.', en: 'Which reporting verb fits best? "We won the game!" ___ the whole team.' },
    options: { el: ['muttered', 'whispered', 'sighed', 'cheered'], en: ['muttered', 'whispered', 'sighed', 'cheered'] },
    correct: 3,
    explanation: {
      el: 'Το θαυμαστικό και τα χαρούμενα νέα σου λένε ότι η ομάδα ήταν δυνατή και ενθουσιασμένη, άρα ταιριάζει το cheered. Τα muttered, whispered και sighed είναι όλα σιγανά.',
      en: 'The exclamation mark and the happy news tell you the team was loud and excited, so cheered fits. Muttered, whispered and sighed are all quiet.',
    },
  },
  {
    q: { el: 'Γιατί οι συγγραφείς χρησιμοποιούν διάφορα ρήματα αναφοράς αντί πάντα "said";', en: 'Why do writers use different reporting verbs instead of always "said"?' },
    options: {
      el: ['Επειδή το "said" δεν είναι αληθινή λέξη', 'Επειδή κάθε παράθεση πρέπει να έχει διαφορετικό ρήμα', 'Για να δείξουν πώς ειπώθηκαν τα λόγια', 'Για να γίνει η πρόταση πιο μεγάλη'],
      en: ['Because "said" is not a real word', 'Because quotes must have a different verb every time', 'To show how the words were spoken', 'To make the sentence longer'],
    },
    correct: 2,
    explanation: {
      el: 'Ρήματα όπως grumbled, giggled ή begged δείχνουν τη διάθεση και τη φωνή του ομιλητή. Το "said" είναι επίσης μια χαρά και καθαρό· απλώς είναι καλό να έχεις επιλογές.',
      en: 'Verbs like grumbled, giggled or begged show the speaker\'s mood and voice. "Said" is still fine and clear; it is just good to have choices.',
    },
  },

  // ── 13–15: layout and harder cases ─────────────────────────────────────────
  {
    q: { el: 'Δύο ήρωες συζητούν. Πότε πρέπει να αρχίζεις νέα γραμμή;', en: 'Two characters are talking. When should you start a new line?' },
    options: {
      el: ['Σε κάθε κόμμα', 'Μόνο στο τέλος της σελίδας', 'Μετά από κάθε ρήμα αναφοράς', 'Κάθε φορά που μιλάει νέο πρόσωπο'],
      en: ['At every comma', 'Only at the end of the page', 'After every reporting verb', 'Every time a new person speaks'],
    },
    correct: 3,
    explanation: {
      el: 'Κάθε νέος ομιλητής παίρνει νέα γραμμή (νέα παράγραφο). Έτσι ο αναγνώστης παρακολουθεί ποιος μιλάει χωρίς να χρειάζεται όνομα κάθε φορά.',
      en: 'Each new speaker gets a new line (a new paragraph). This helps the reader keep track of who is talking without a name every time.',
    },
  },
  {
    q: { el: 'Ποια πρόταση έχει σωστή στίξη όταν οι λέξεις αναφοράς μπαίνουν στη μέση;', en: 'Which sentence is punctuated correctly when the reporting words come in the middle?' },
    options: {
      el: ['"If it rains," said Pia, "we will stay inside."', '"If it rains" said Pia, "we will stay inside."', '"If it rains," said Pia, "We will stay inside."', '"If it rains, said Pia, we will stay inside."'],
      en: ['"If it rains," said Pia, "we will stay inside."', '"If it rains" said Pia, "we will stay inside."', '"If it rains," said Pia, "We will stay inside."', '"If it rains, said Pia, we will stay inside."'],
    },
    correct: 0,
    explanation: {
      el: 'Όταν οι λέξεις αναφοράς διακόπτουν μία πρόταση, και τα δύο μέρη παίρνουν εισαγωγικά, κόμματα χωρίζουν τα μέρη, και το δεύτερο μέρος δεν αρχίζει με κεφαλαίο επειδή συνεχίζει την ίδια πρόταση.',
      en: 'When the reporting words interrupt one sentence, both parts get quotation marks, commas separate the parts, and the second part does not start with a capital because it continues the same sentence.',
    },
  },
  {
    q: { el: 'Ποια πρόταση είναι σωστή;', en: 'Which sentence is correct?' },
    options: {
      el: ['"Where are my keys"? asked Dad.', '"Where are my keys?" asked Dad.', '"Where are my keys?", asked Dad.', '"Where are my keys," asked Dad?'],
      en: ['"Where are my keys"? asked Dad.', '"Where are my keys?" asked Dad.', '"Where are my keys?", asked Dad.', '"Where are my keys," asked Dad?'],
    },
    correct: 1,
    explanation: {
      el: 'Το ερωτηματικό ανήκει στα λόγια που ειπώθηκαν, άρα μπαίνει μέσα από το εισαγωγικό που κλείνει: "Where are my keys?" asked Dad. Δεν χρειάζεται επιπλέον κόμμα ή ερωτηματικό μετά.',
      en: 'The question mark belongs to the spoken words, so it goes inside the closing mark: "Where are my keys?" asked Dad. No extra comma or question mark is needed after it.',
    },
  },

  // ── 16–18: direct vs reported speech ───────────────────────────────────────
  {
    q: { el: 'Ποια πρόταση είναι πλάγιος λόγος (όχι ευθύς);', en: 'Which sentence is reported speech (not direct speech)?' },
    options: {
      el: ['Maya said, "I am tired."', '"I am tired," said Maya.', '"I am tired," Maya said.', 'Maya said that she was tired.'],
      en: ['Maya said, "I am tired."', '"I am tired," said Maya.', '"I am tired," Maya said.', 'Maya said that she was tired.'],
    },
    correct: 3,
    explanation: {
      el: 'Ο πλάγιος λόγος λέει τι ειπώθηκε χωρίς τα ακριβή λόγια ή εισαγωγικά: Maya said that she was tired. Πρόσεξε πώς το "I am" γίνεται "she was".',
      en: 'Reported speech tells what was said without the exact words or quotation marks: Maya said that she was tired. Notice how "I am" changes to "she was".',
    },
  },
  {
    q: { el: 'Μετέτρεψε σε ευθύ λόγο: Rafi said that he wanted to go home.', en: 'Change this to direct speech: Rafi said that he wanted to go home.' },
    options: {
      el: ['Rafi said, "I want to go home."', 'Rafi said, "He wanted to go home."', 'Rafi said that "I want to go home."', 'Rafi said, "he wants to go home."'],
      en: ['Rafi said, "I want to go home."', 'Rafi said, "He wanted to go home."', 'Rafi said that "I want to go home."', 'Rafi said, "he wants to go home."'],
    },
    correct: 0,
    explanation: {
      el: 'Στον ευθύ λόγο γράφουμε τα πραγματικά λόγια του Rafi: "I want to go home." Το "he" γίνεται "I", το "wanted" γίνεται "want", και η παράθεση αρχίζει με κεφαλαίο.',
      en: 'In direct speech we write Rafi\'s actual words: "I want to go home." "He" becomes "I", "wanted" becomes "want", and the quote starts with a capital.',
    },
  },
  {
    q: { el: 'Μετέτρεψε σε πλάγιο λόγο: "We are leaving now," said the twins.', en: 'Change this to reported speech: "We are leaving now," said the twins.' },
    options: {
      el: ['The twins said, "we are leaving now."', 'The twins said that we are leaving now.', 'The twins said that they were leaving then.', 'The twins said "they are leaving now."'],
      en: ['The twins said, "we are leaving now."', 'The twins said that we are leaving now.', 'The twins said that they were leaving then.', 'The twins said "they are leaving now."'],
    },
    correct: 2,
    explanation: {
      el: 'Στον πλάγιο λόγο βγάζουμε τα εισαγωγικά και αλλάζουμε τις λέξεις: το "we" γίνεται they, το "are" γίνεται were, και το "now" γίνεται then.',
      en: 'In reported speech, drop the quotation marks and shift the words: "we" becomes they, "are" becomes were, and "now" becomes then.',
    },
  },
];
