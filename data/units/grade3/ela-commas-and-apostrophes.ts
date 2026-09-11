/**
 * Γ' Δημοτικού · English Language Arts · Commas & Apostrophes
 * ============================================================
 * Original questions for a native English-speaking child of 8–9 (curriculum topics only).
 * The `en` fields are the real content; `el` is a translation for a Greek-speaking parent.
 *
 * What the unit covers, in order:
 *   1–5   commas in a list: where they go, how many, a list of two needs none
 *   6–9   the apostrophe for belonging: Sam's bike, the dog's tail, my teacher's pencil
 *   10–13 contractions vs belonging: don't, she's = she is, Leo's lunch, didn't
 *   14–16 its vs it's
 *   17–18 plural vs possessive: dogs / dog's
 *
 * Distractors are the real mistakes: a comma after "and", the apostrophe on the wrong word,
 * do'nt, it's for belonging, an apostrophe in a plain plural (dog's are barking).
 */
import type { QuizQuestion } from '../../../types';

export const GRADE3_ELA_COMMAS_AND_APOSTROPHES: QuizQuestion[] = [
  // ── 1–5: commas in a list ──────────────────────────────────────────────────
  {
    q: { el: 'Ποια πρόταση χρησιμοποιεί σωστά τα κόμματα;', en: 'Which sentence uses commas correctly?' },
    options: { el: ['I bought apples, pears, and grapes.', 'I bought apples pears and grapes.', 'I bought, apples, pears and grapes.', 'I bought apples, pears and, grapes.'], en: ['I bought apples, pears, and grapes.', 'I bought apples pears and grapes.', 'I bought, apples, pears and grapes.', 'I bought apples, pears and, grapes.'] },
    correct: 0,
    explanation: {
      el: 'Σε μια απαρίθμηση βάζουμε κόμμα ανάμεσα σε κάθε στοιχείο: apples, pears, and grapes. Η λέξη «and» μπαίνει πριν από το τελευταίο.',
      en: 'In a list, put a comma between each item: apples, pears, and grapes. The word "and" comes before the last item.',
    },
  },
  {
    q: { el: 'Πού μπαίνουν τα κόμματα; «We saw lions tigers and bears at the zoo.»', en: 'Where do the commas go? «We saw lions tigers and bears at the zoo.»' },
    options: { el: ['We saw, lions tigers and bears at the zoo.', 'We saw lions tigers, and bears at the zoo.', 'We saw lions, tigers and bears, at the zoo.', 'We saw lions, tigers, and bears at the zoo.'], en: ['We saw, lions tigers and bears at the zoo.', 'We saw lions tigers, and bears at the zoo.', 'We saw lions, tigers and bears, at the zoo.', 'We saw lions, tigers, and bears at the zoo.'] },
    correct: 3,
    explanation: {
      el: 'Τα κόμματα χωρίζουν τα στοιχεία της απαρίθμησης: lions, tigers, and bears. Δεν μπαίνει κόμμα μετά το «saw» ούτε πριν από το «at».',
      en: 'Commas separate the things in a list: lions, tigers, and bears. There is no comma after "saw" or before "at".',
    },
  },
  {
    q: { el: 'Πόσα κόμματα χρειάζεται αυτή η απαρίθμηση; «My favorite colors are blue green red and purple.»', en: 'How many commas does this list need? «My favorite colors are blue green red and purple.»' },
    options: { el: ['1', '2', '3', '4'], en: ['1', '2', '3', '4'] },
    correct: 2,
    explanation: {
      el: 'Τέσσερα στοιχεία χρειάζονται τρία κόμματα: blue, green, red, and purple. Τα κόμματα είναι πάντα ένα λιγότερο από τα στοιχεία.',
      en: 'Four items need three commas: blue, green, red, and purple. There is always one fewer comma than there are items.',
    },
  },
  {
    q: { el: 'Ποια πρόταση ΔΕΝ χρειάζεται καθόλου κόμματα;', en: 'Which sentence does NOT need any commas?' },
    options: { el: ['Mom packed sandwiches juice and fruit.', 'Mom packed sandwiches and juice.', 'We need eggs milk butter and flour.', 'Ava likes swimming running and dancing.'], en: ['Mom packed sandwiches juice and fruit.', 'Mom packed sandwiches and juice.', 'We need eggs milk butter and flour.', 'Ava likes swimming running and dancing.'] },
    correct: 1,
    explanation: {
      el: 'Μια απαρίθμηση με μόνο δύο πράγματα ενωμένα με «and» δεν χρειάζεται κόμμα: sandwiches and juice. Τα κόμματα είναι για απαριθμήσεις τριών ή περισσότερων.',
      en: 'A list of only two things joined by "and" does not need a comma: sandwiches and juice. Commas are for lists of three or more.',
    },
  },
  {
    q: { el: 'Διάλεξε την πρόταση με τη σωστή στίξη.', en: 'Choose the sentence with the correct punctuation.' },
    options: { el: ['Kim, Jo and, Ali play chess.', 'Kim Jo, and Ali play chess.', 'Kim, Jo, and, Ali play chess.', 'Kim, Jo, and Ali play chess.'], en: ['Kim, Jo and, Ali play chess.', 'Kim Jo, and Ali play chess.', 'Kim, Jo, and, Ali play chess.', 'Kim, Jo, and Ali play chess.'] },
    correct: 3,
    explanation: {
      el: 'Και τα ονόματα σε απαρίθμηση χωρίζονται με κόμματα: Kim, Jo, and Ali. Ποτέ μην βάζεις κόμμα αμέσως μετά το «and».',
      en: 'Names in a list are separated by commas too: Kim, Jo, and Ali. Never put a comma right after "and".',
    },
  },

  // ── 6–9: the apostrophe for belonging ──────────────────────────────────────
  {
    q: { el: 'Ποιο δείχνει ότι το ποδήλατο ανήκει στον Sam;', en: 'Which shows that the bike belongs to Sam?' },
    options: { el: ['Sams bike', 'Sam\'s bike', 'Sams\' bike', 'Sam bike\'s'], en: ['Sams bike', 'Sam\'s bike', 'Sams\' bike', 'Sam bike\'s'] },
    correct: 1,
    explanation: {
      el: 'Για να δείξουμε κτήση, προσθέτουμε απόστροφο και s στον κάτοχο: Sam\'s bike. Η απόστροφος μπαίνει ανάμεσα στο Sam και το s.',
      en: 'To show belonging, add an apostrophe and s to the owner: Sam\'s bike. The apostrophe goes between Sam and the s.',
    },
  },
  {
    q: { el: 'Ποια πρόταση είναι σωστή;', en: 'Which sentence is correct?' },
    options: { el: ['The dog\'s tail is wagging.', 'The dogs tail is wagging.', 'The dog tail\'s is wagging.', 'The dogs\' tails is wagging.'], en: ['The dog\'s tail is wagging.', 'The dogs tail is wagging.', 'The dog tail\'s is wagging.', 'The dogs\' tails is wagging.'] },
    correct: 0,
    explanation: {
      el: 'Η ουρά ανήκει στον σκύλο, οπότε γράφουμε dog\'s tail. Η απόστροφος και το s μπαίνουν στον κάτοχο, όχι στο πράγμα που του ανήκει.',
      en: 'The tail belongs to the dog, so we write dog\'s tail. The apostrophe and s go on the owner, not on the thing that is owned.',
    },
  },
  {
    q: { el: 'Τι σημαίνει «Mia\'s hat»;', en: 'What does «Mia\'s hat» mean?' },
    options: { el: ['Mia is a hat', 'the hat belongs to Mia', 'Mia has more than one hat', 'Mia lost the hat'], en: ['Mia is a hat', 'the hat belongs to Mia', 'Mia has more than one hat', 'Mia lost the hat'] },
    correct: 1,
    explanation: {
      el: 'Η απόστροφος και το s δείχνουν κτήση: Mia\'s hat είναι το καπέλο που ανήκει στη Mia. Εδώ δεν είναι σύντμηση.',
      en: 'The apostrophe and s show belonging: Mia\'s hat is the hat that belongs to Mia. It is not a contraction here.',
    },
  },
  {
    q: { el: 'Ποιος είναι ο σωστός τρόπος να γράψεις «το μολύβι που ανήκει στη δασκάλα μου»;', en: 'Which is the correct way to write "the pencil that belongs to my teacher"?' },
    options: { el: ['my teachers pencil', 'my teacher pencil\'s', 'my teachers\' pencil', 'my teacher\'s pencil'], en: ['my teachers pencil', 'my teacher pencil\'s', 'my teachers\' pencil', 'my teacher\'s pencil'] },
    correct: 3,
    explanation: {
      el: 'Μία δασκάλα έχει το μολύβι, οπότε γράφουμε teacher\'s pencil: απόστροφος και μετά s στον κάτοχο.',
      en: 'One teacher owns the pencil, so we write teacher\'s pencil: apostrophe, then s, on the owner.',
    },
  },

  // ── 10–13: contractions vs belonging ───────────────────────────────────────
  {
    q: { el: 'Ποια είναι η σύντμηση του «do not»;', en: 'What is the contraction of «do not»?' },
    options: { el: ['don\'t', 'dont', 'do\'nt', 'dont\''], en: ['don\'t', 'dont', 'do\'nt', 'dont\''] },
    correct: 0,
    explanation: {
      el: 'Η σύντμηση ενώνει δύο λέξεις σε μία. Η απόστροφος παίρνει τη θέση του γράμματος που λείπει: do not γίνεται don\'t, και λείπει το o.',
      en: 'A contraction squeezes two words into one. The apostrophe takes the place of the missing letter: do not becomes don\'t, and the o is missing.',
    },
  },
  {
    q: { el: 'Στο «she\'s happy», ποιες δύο λέξεις είναι το «she\'s»;', en: 'In «she\'s happy», which two words is «she\'s» short for?' },
    options: { el: ['she has', 'she is', 'she was', 'she does'], en: ['she has', 'she is', 'she was', 'she does'] },
    correct: 1,
    explanation: {
      el: 'Εδώ το she\'s σημαίνει she is: she is happy. Η απόστροφος αντικαθιστά το γράμμα i που λείπει.',
      en: 'Here she\'s means she is: she is happy. The apostrophe stands for the missing letter i.',
    },
  },
  {
    q: { el: 'Σε ποια πρόταση η απόστροφος δείχνει ότι κάτι ΑΝΗΚΕΙ σε κάποιον;', en: 'In which sentence does the apostrophe show that something BELONGS to someone?' },
    options: { el: ['I can\'t find my shoes.', 'We\'re going home.', 'That is Leo\'s lunch.', 'It\'s raining again.'], en: ['I can\'t find my shoes.', 'We\'re going home.', 'That is Leo\'s lunch.', 'It\'s raining again.'] },
    correct: 2,
    explanation: {
      el: 'Leo\'s lunch σημαίνει ότι το φαγητό ανήκει στον Leo. Τα can\'t, we\'re και it\'s είναι συντμήσεις των cannot, we are και it is.',
      en: 'Leo\'s lunch means the lunch belongs to Leo. Can\'t, we\'re and it\'s are contractions, short for cannot, we are and it is.',
    },
  },
  {
    q: { el: 'Ποια πρόταση χρησιμοποιεί σύντμηση;', en: 'Which sentence uses a contraction?' },
    options: { el: ['The cat\'s bowl is empty.', 'Ben\'s coat is red.', 'The bird\'s nest fell.', 'I didn\'t see the bus.'], en: ['The cat\'s bowl is empty.', 'Ben\'s coat is red.', 'The bird\'s nest fell.', 'I didn\'t see the bus.'] },
    correct: 3,
    explanation: {
      el: 'Το didn\'t είναι σύντμηση του did not. Οι άλλες προτάσεις χρησιμοποιούν την απόστροφο για να δείξουν κτήση.',
      en: 'Didn\'t is short for did not, so it is a contraction. The other sentences use the apostrophe to show belonging.',
    },
  },

  // ── 14–16: its vs it's ─────────────────────────────────────────────────────
  {
    q: { el: 'Διάλεξε: «___ time to go home.»', en: 'Choose: «___ time to go home.»' },
    options: { el: ['Its', 'It\'s', 'Its\'', 'Ist'], en: ['Its', 'It\'s', 'Its\'', 'Ist'] },
    correct: 1,
    explanation: {
      el: 'Το it\'s με απόστροφο είναι σύντμηση του it is: It is time to go home. Δοκίμασέ το: αν ταιριάζει το «it is», γράψε it\'s.',
      en: 'It\'s with an apostrophe is short for it is: It is time to go home. Test it: if "it is" fits, use it\'s.',
    },
  },
  {
    q: { el: 'Διάλεξε: «The cat licked ___ paws.»', en: 'Choose: «The cat licked ___ paws.»' },
    options: { el: ['its', 'it\'s', 'its\'', 'it is'], en: ['its', 'it\'s', 'its\'', 'it is'] },
    correct: 0,
    explanation: {
      el: 'Το its χωρίς απόστροφο σημαίνει ότι ανήκει σε αυτό. Οι πατούσες ανήκουν στη γάτα: its paws. Το «it is paws» δεν βγάζει νόημα, άρα δεν βάζουμε απόστροφο.',
      en: 'Its with no apostrophe means belonging to it. The paws belong to the cat: its paws. "It is paws" makes no sense, so there is no apostrophe.',
    },
  },
  {
    q: { el: 'Ποια πρόταση είναι γραμμένη σωστά;', en: 'Which sentence is written correctly?' },
    options: { el: ['The dog wagged it\'s tail.', 'Its going to rain.', 'It\'s a sunny day and the tree lost its leaves.', 'Its a sunny day and the tree lost it\'s leaves.'], en: ['The dog wagged it\'s tail.', 'Its going to rain.', 'It\'s a sunny day and the tree lost its leaves.', 'Its a sunny day and the tree lost it\'s leaves.'] },
    correct: 2,
    explanation: {
      el: 'Το it\'s σημαίνει it is (It\'s a sunny day). Το its σημαίνει ότι ανήκει σε αυτό (its leaves). Και τα δύο χρησιμοποιούνται σωστά σε αυτή την πρόταση.',
      en: 'It\'s means it is (It\'s a sunny day). Its means belonging to it (its leaves). Both are used correctly in that sentence.',
    },
  },

  // ── 17–18: plural vs possessive ────────────────────────────────────────────
  {
    q: { el: 'Διάλεξε: «Three ___ are barking in the yard.»', en: 'Choose: «Three ___ are barking in the yard.»' },
    options: { el: ['dog\'s', 'dogs\'', 'dogs\'s', 'dogs'], en: ['dog\'s', 'dogs\'', 'dogs\'s', 'dogs'] },
    correct: 3,
    explanation: {
      el: 'Το dogs χωρίς απόστροφο σημαίνει απλώς περισσότερους από έναν σκύλους. Εδώ δεν τους ανήκει τίποτα, οπότε δεν χρειάζεται απόστροφος.',
      en: 'Dogs with no apostrophe just means more than one dog. Nothing belongs to them here, so no apostrophe is needed.',
    },
  },
  {
    q: { el: 'Διάλεξε: «The ___ bone is under the table.» (υπάρχει μόνο ένας σκύλος)', en: 'Choose: «The ___ bone is under the table.» (there is only one dog)' },
    options: { el: ['dogs', 'dog', 'dog\'s', 'dogs\''], en: ['dogs', 'dog', 'dog\'s', 'dogs\''] },
    correct: 2,
    explanation: {
      el: 'Το κόκαλο ανήκει σε έναν σκύλο, οπότε γράφουμε dog\'s bone. Ο πληθυντικός dogs δεν έχει απόστροφο, εκτός αν κάτι ανήκει στους σκύλους.',
      en: 'The bone belongs to one dog, so we write dog\'s bone. Plural dogs has no apostrophe unless something belongs to the dogs.',
    },
  },
];
