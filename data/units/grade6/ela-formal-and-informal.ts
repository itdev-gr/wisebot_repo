/**
 * Grade 6 · English Language Arts · Formal & Informal Language
 * =============================================================
 * Original questions for a native English-speaking child of 11–12 (curriculum topics only).
 * What the unit covers, in order:
 *   1–4   register: what it is, spotting the most formal / most informal sentence, when informal is fine
 *   5–9   contractions and slang vs standard English
 *   10–13 a letter to the head teacher vs a text to a friend: openings, closings, tone
 *   14–16 choosing the right word for the audience (report, invitation, sign)
 *   17–18 question tags vs formal requests
 * Distractors are the real mix-ups: slang in a formal letter, a stiff phrase in a chat,
 * a contraction where a full form belongs.
 * el: the question is translated for a Greek-speaking parent; the options stay in English.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE6_ELA_FORMAL_AND_INFORMAL: QuizQuestion[] = [
  // ── 1–4: register ──────────────────────────────────────────────────────────
  {
    q: { el: 'Τι σημαίνει "register" (επίπεδο ύφους) στη γλώσσα;', en: 'What does "register" mean when we talk about language?' },
    options: { el: ['The list of names a teacher calls in the morning', 'The level of formality we choose for a situation', 'A machine in a shop that holds money', 'The number of words in a sentence'], en: ['The list of names a teacher calls in the morning', 'The level of formality we choose for a situation', 'A machine in a shop that holds money', 'The number of words in a sentence'] },
    correct: 1,
    explanation: {
      el: 'Το register είναι το πόσο επίσημα ή ανεπίσημα μιλάμε ή γράφουμε, ανάλογα με το ποιος ακούει. Λες "Good morning, Mr. Lee" στον δάσκαλο αλλά "Hey!" στον καλύτερό σου φίλο.',
      en: 'Register is how formal or informal our language is, depending on who is listening. You say "Good morning, Mr. Lee" to a teacher but "Hey!" to your best friend.',
    },
  },
  {
    q: { el: 'Ποια πρόταση είναι η πιο επίσημη;', en: 'Which sentence is the most formal?' },
    options: { el: ['Hey, can you gimme a hand?', 'Help me out, will ya?', 'Need a hand here, buddy.', 'Could you possibly help me?'], en: ['Hey, can you gimme a hand?', 'Help me out, will ya?', 'Need a hand here, buddy.', 'Could you possibly help me?'] },
    correct: 3,
    explanation: {
      el: 'Το "Could you possibly help me?" χρησιμοποιεί ευγενικές, πλήρεις λέξεις και καθόλου slang. Τα "gimme", "ya" και "buddy" είναι χαλαρά, ανεπίσημα.',
      en: '"Could you possibly help me?" uses polite, complete words and no slang. "Gimme", "ya" and "buddy" are relaxed and informal.',
    },
  },
  {
    q: { el: 'Ποια πρόταση είναι η πιο ανεπίσημη;', en: 'Which sentence is the most informal?' },
    options: { el: ['I would be grateful for your assistance.', 'Please let me know if you require anything further.', 'Gonna grab a snack, want one?', 'We look forward to hearing from you.'], en: ['I would be grateful for your assistance.', 'Please let me know if you require anything further.', 'Gonna grab a snack, want one?', 'We look forward to hearing from you.'] },
    correct: 2,
    explanation: {
      el: 'Το "Gonna grab a snack, want one?" έχει slang (gonna), λείπουν λέξεις (I am, do you) και ακούγεται σαν κουβέντα. Οι άλλες τρεις είναι φράσεις από επίσημα γράμματα.',
      en: '"Gonna grab a snack, want one?" has slang (gonna), missing words (I am, do you) and sounds like chat. The other three are phrases from formal letters.',
    },
  },
  {
    q: { el: 'Πότε είναι καλή επιλογή η ανεπίσημη γλώσσα;', en: 'When is informal language a good choice?' },
    options: { el: ['Chatting with a close friend', 'Writing a job application', 'Writing to the local council', 'Giving a speech at a school assembly'], en: ['Chatting with a close friend', 'Writing a job application', 'Writing to the local council', 'Giving a speech at a school assembly'] },
    correct: 0,
    explanation: {
      el: 'Η ανεπίσημη γλώσσα δεν είναι λάθος, είναι για χαλαρές στιγμές με ανθρώπους που ξέρεις καλά. Οι αιτήσεις, οι επιστολές σε αρχές και οι ομιλίες χρειάζονται επίσημο ύφος.',
      en: 'Informal language is not wrong; it is for relaxed moments with people you know well. Applications, letters to officials and speeches call for a formal register.',
    },
  },

  // ── 5–9: contractions and slang vs standard English ────────────────────────
  {
    q: { el: 'Ποια είναι η εκδοχή σε standard English του "We ain\'t got no homework";', en: 'Which is the standard English version of "We ain\'t got no homework"?' },
    options: { el: ['We do not have any homework.', 'We ain\'t got any homework.', 'We don\'t got no homework.', 'We got no homework, right?'], en: ['We do not have any homework.', 'We ain\'t got any homework.', 'We don\'t got no homework.', 'We got no homework, right?'] },
    correct: 0,
    explanation: {
      el: 'Το "ain\'t" είναι slang και το "no" μετά από αρνητικό ρήμα είναι διπλή άρνηση. Το standard English λέει "We do not have any homework."',
      en: '"Ain\'t" is slang, and "no" after a negative verb is a double negative. Standard English says "We do not have any homework."',
    },
  },
  {
    q: { el: 'Ποια λέξη είναι slang;', en: 'Which word is slang?' },
    options: { el: ['excited', 'stoked', 'thrilled', 'eager'], en: ['excited', 'stoked', 'thrilled', 'eager'] },
    correct: 1,
    explanation: {
      el: 'Το "stoked" είναι slang για "πολύ ενθουσιασμένος". Ακούγεται φυσικό ανάμεσα σε φίλους, αλλά σε μια σχολική εργασία γράφεις excited, thrilled ή eager.',
      en: '"Stoked" is slang for "very excited". It sounds natural among friends, but in a school essay you would write excited, thrilled or eager.',
    },
  },
  {
    q: { el: 'Σε επίσημο γραπτό λόγο, ποιος είναι ο καλύτερος τρόπος να γράψεις το "don\'t";', en: 'In formal writing, which is the best way to write "don\'t"?' },
    options: { el: ['dont', 'do\'nt', 'don', 'do not'], en: ['dont', 'do\'nt', 'don', 'do not'] },
    correct: 3,
    explanation: {
      el: 'Το "don\'t" είναι σύντμηση του "do not". Το επίσημο γράψιμο προτιμά τους πλήρεις τύπους: do not, cannot, it is, they are.',
      en: '"Don\'t" is a contraction of "do not". Formal writing prefers the full forms: do not, cannot, it is, they are.',
    },
  },
  {
    q: { el: 'Ποια πρόταση είναι γραμμένη σε standard English χωρίς συντμήσεις ή slang;', en: 'Which sentence is written in standard English with no contractions or slang?' },
    options: { el: ['The kids were dead tired after the trip.', 'The children were exhausted after the excursion.', 'The kids couldn\'t keep their eyes open, lol.', 'The children were totally wiped out.'], en: ['The kids were dead tired after the trip.', 'The children were exhausted after the excursion.', 'The kids couldn\'t keep their eyes open, lol.', 'The children were totally wiped out.'] },
    correct: 1,
    explanation: {
      el: 'Το "The children were exhausted after the excursion" χρησιμοποιεί πλήρεις, standard λέξεις. Τα "dead tired", "wiped out" και "lol" είναι ανεπίσημα, και το "couldn\'t" είναι σύντμηση.',
      en: '"The children were exhausted after the excursion" uses full, standard words. "Dead tired", "wiped out" and "lol" are informal, and "couldn\'t" is a contraction.',
    },
  },
  {
    q: { el: 'Το "It\'s" είναι σύντμηση. Ποιες δύο λέξεις ενώνει στο "It\'s going to rain";', en: '"It\'s" is a contraction. Which two words does it join in "It\'s going to rain"?' },
    options: { el: ['It has', 'It was', 'It is', 'Its'], en: ['It has', 'It was', 'It is', 'Its'] },
    correct: 2,
    explanation: {
      el: 'Εδώ το "it\'s" σημαίνει "it is": It is going to rain. Στον επίσημο λόγο γράφεις τις λέξεις ολόκληρες. (Το "its" χωρίς απόστροφο σημαίνει "δικό του".)',
      en: 'Here "it\'s" means "it is": It is going to rain. In formal writing you spell the words out. ("Its" with no apostrophe means "belonging to it".)',
    },
  },

  // ── 10–13: letter to the head teacher vs text to a friend ──────────────────
  {
    q: { el: 'Ποιο άνοιγμα ταιριάζει καλύτερα σε γράμμα προς τον διευθυντή του σχολείου;', en: 'Which opening is best for a letter to the head teacher?' },
    options: { el: ['Hiya!', 'Yo Mrs. O,', 'Hey there,', 'Dear Mrs. Okafor,'], en: ['Hiya!', 'Yo Mrs. O,', 'Hey there,', 'Dear Mrs. Okafor,'] },
    correct: 3,
    explanation: {
      el: 'Ένα επίσημο γράμμα ανοίγει με "Dear" και το πλήρες όνομα με τον τίτλο: "Dear Mrs. Okafor,". Τα "Hiya", "Yo" και "Hey there" είναι για φίλους.',
      en: 'A formal letter opens with "Dear" and the person\'s full name with a title: "Dear Mrs. Okafor,". "Hiya", "Yo" and "Hey there" are for friends.',
    },
  },
  {
    q: { el: 'Ποιο κλείσιμο ταιριάζει σε μήνυμα προς φίλο;', en: 'Which closing suits a text message to a friend?' },
    options: { el: ['Yours sincerely,', 'Yours faithfully,', 'See you tomorrow!', 'With kind regards,'], en: ['Yours sincerely,', 'Yours faithfully,', 'See you tomorrow!', 'With kind regards,'] },
    correct: 2,
    explanation: {
      el: 'Το "See you tomorrow!" είναι φιλικό και χαλαρό, ιδανικό για μήνυμα. Τα "Yours sincerely", "Yours faithfully" και "With kind regards" κλείνουν επίσημα γράμματα.',
      en: '"See you tomorrow!" is friendly and relaxed, perfect for a text. "Yours sincerely", "Yours faithfully" and "With kind regards" close formal letters.',
    },
  },
  {
    q: { el: 'Μια μαθήτρια θέλει περισσότερους κάδους ανακύκλωσης. Ποια πρόταση ανήκει στο γράμμα προς τον διευθυντή;', en: 'A student wants more recycling bins. Which sentence belongs in the letter to the head teacher?' },
    options: { el: ['I would like to suggest that more recycling bins are placed in the playground.', 'We seriously need more bins, it\'s gross.', 'Bins pls!!!', 'Can u sort out the bins?'], en: ['I would like to suggest that more recycling bins are placed in the playground.', 'We seriously need more bins, it\'s gross.', 'Bins pls!!!', 'Can u sort out the bins?'] },
    correct: 0,
    explanation: {
      el: '"I would like to suggest that..." είναι ευγενικό, πλήρες και επίσημο. Τα "gross", "pls" και "u" είναι γλώσσα μηνυμάτων, και τα τρία θαυμαστικά φαίνονται σαν φωνές.',
      en: '"I would like to suggest that..." is polite, complete and formal. "Gross", "pls" and "u" are texting language, and three exclamation marks look like shouting.',
    },
  },
  {
    q: { el: 'Ποια πρόταση θα φαινόταν παράξενη σε μήνυμα προς τον καλύτερό σου φίλο;', en: 'Which sentence would look strange in a text to your best friend?' },
    options: { el: ['Movie tonight?', 'I am writing to inquire whether you would be available this evening.', 'You free later?', 'Pizza after?'], en: ['Movie tonight?', 'I am writing to inquire whether you would be available this evening.', 'You free later?', 'Pizza after?'] },
    correct: 1,
    explanation: {
      el: 'Το "I am writing to inquire whether..." είναι γλώσσα επίσημης επιστολής. Σε έναν φίλο ακούγεται ψυχρό και αστείο. Οι σύντομες ερωτήσεις όπως "Movie tonight?" είναι το σωστό ύφος.',
      en: '"I am writing to inquire whether..." is formal-letter language. To a friend it sounds cold and a bit silly. Short questions like "Movie tonight?" are the right register.',
    },
  },

  // ── 14–16: the right word for the audience ─────────────────────────────────
  {
    q: { el: 'Διάλεξε την καλύτερη λέξη για μια σχολική επιστημονική αναφορά: "The plant ___ faster in sunlight."', en: 'Choose the best word for a school science report: "The plant ___ faster in sunlight."' },
    options: { el: ['grew', 'shot up', 'got big', 'zoomed'], en: ['grew', 'shot up', 'got big', 'zoomed'] },
    correct: 0,
    explanation: {
      el: 'Το "grew" είναι η ακριβής, ουδέτερη λέξη που περιμένει μια επιστημονική αναφορά. Τα "shot up", "got big" και "zoomed" είναι χαλαρά και ανακριβή.',
      en: '"Grew" is the precise, neutral word a science report expects. "Shot up", "got big" and "zoomed" are casual and vague.',
    },
  },
  {
    q: { el: 'Ποια λέξη ταιριάζει σε μια χαρούμενη πρόσκληση γενεθλίων; "Come and ___ with us on Saturday!"', en: 'Which word fits a fun birthday invitation? "Come and ___ with us on Saturday!"' },
    options: { el: ['convene', 'assemble', 'celebrate', 'commence'], en: ['convene', 'assemble', 'celebrate', 'commence'] },
    correct: 2,
    explanation: {
      el: 'Το "celebrate" είναι ζεστό και φιλικό, όπως πρέπει να είναι μια πρόσκληση. Τα "convene", "assemble" και "commence" είναι ψυχρές, επίσημες λέξεις που ταιριάζουν σε συνέδρια, όχι σε πάρτι.',
      en: '"Celebrate" is warm and friendly, just as an invitation should be. "Convene", "assemble" and "commence" are stiff, formal words that belong at a conference, not a party.',
    },
  },
  {
    q: { el: 'Μια πινακίδα σε βιβλιοθήκη: ποια εκδοχή είναι η πιο κατάλληλη;', en: 'A sign in a library: which version is the most suitable?' },
    options: { el: ['Shush, ppl are reading!', 'Keep it down, guys.', 'Zip it.', 'Please keep noise to a minimum.'], en: ['Shush, ppl are reading!', 'Keep it down, guys.', 'Zip it.', 'Please keep noise to a minimum.'] },
    correct: 3,
    explanation: {
      el: 'Μια δημόσια πινακίδα απευθύνεται σε αγνώστους κάθε ηλικίας, άρα χρειάζεται ευγενικό, επίσημο ύφος: "Please keep noise to a minimum." Τα "Zip it" και "ppl" είναι αγενή ή πολύ χαλαρά.',
      en: 'A public sign speaks to strangers of every age, so it needs a polite, formal register: "Please keep noise to a minimum." "Zip it" and "ppl" are rude or far too casual.',
    },
  },

  // ── 17–18: question tags vs formal requests ────────────────────────────────
  {
    q: { el: 'Ποιο είναι το σωστό question tag; "You\'ve finished your homework, ___?"', en: 'Which is the correct question tag? "You\'ve finished your homework, ___?"' },
    options: { el: ['isn\'t it', 'did you', 'haven\'t you', 'don\'t they'], en: ['isn\'t it', 'did you', 'haven\'t you', 'don\'t they'] },
    correct: 2,
    explanation: {
      el: 'Το question tag επαναλαμβάνει το βοηθητικό ρήμα (have) και το υποκείμενο (you), γυρισμένο σε αρνητικό: "You\'ve finished, haven\'t you?" Τα question tags είναι ανεπίσημα και χαλαρά.',
      en: 'A question tag repeats the helping verb (have) and the subject (you), turned negative: "You\'ve finished, haven\'t you?" Question tags are informal and chatty.',
    },
  },
  {
    q: { el: 'Ποιος είναι ο πιο ευγενικός, επίσημος τρόπος να ζητήσεις βοήθεια από βιβλιοθηκάριο;', en: 'Which is the most polite, formal way to ask a librarian for help?' },
    options: { el: ['You can help me, can\'t you?', 'Would you be able to help me find this book, please?', 'Help me find this, yeah?', 'Find this book for me.'], en: ['You can help me, can\'t you?', 'Would you be able to help me find this book, please?', 'Help me find this, yeah?', 'Find this book for me.'] },
    correct: 1,
    explanation: {
      el: 'Το "Would you be able to... please?" είναι μια επίσημη, ευγενική παράκληση. Τα question tags ("can\'t you?", "yeah?") είναι ανεπίσημα, και η προστακτική "Find this book for me" ακούγεται σαν διαταγή.',
      en: '"Would you be able to... please?" is a formal, polite request. Question tags ("can\'t you?", "yeah?") are informal, and the command "Find this book for me" sounds bossy.',
    },
  },
];
