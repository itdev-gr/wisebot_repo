/**
 * Ε' Δημοτικού · ELA · Συμφωνία Υποκειμένου–Ρήματος / Subject–Verb Agreement
 * ===========================================================================
 * Original questions for a native English-speaking child of 10–11 (US Grade 5 / UK Year 5–6).
 * The «el» side is a faithful Greek translation for a Greek-speaking parent; the English
 * words and sentences being tested stay in English on both sides.
 *
 * What the unit covers, in order:
 *   1–4   singular vs plural subjects: he runs / they run, the children play
 *   5–8   there is / there are, don't / doesn't
 *   9–12  collective nouns (the team is) and everyone / each (singular)
 *   13–15 compound subjects (Tom and Ana are), a phrase between subject and verb (the box of crayons is)
 *   16–18 spotting and fixing agreement mistakes in whole sentences
 *
 * Distractors are the real slips: a missing -s, has/have swapped, "there is" with a plural,
 * "everybody like", and agreeing with the nearest noun instead of the true subject.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE5_ELA_SUBJECT_VERB_AGREEMENT: QuizQuestion[] = [
  // ── 1–4: singular vs plural subjects ───────────────────────────────────────
  {
    q: { el: 'Ποια πρόταση είναι σωστή;', en: 'Which sentence is correct?' },
    options: {
      el: ['She runs fast.', 'She run fast.', 'She running fast.', 'She are running fast.'],
      en: ['She runs fast.', 'She run fast.', 'She running fast.', 'She are running fast.'],
    },
    correct: 0,
    explanation: {
      el: 'Με he, she ή it στον ενεστώτα, το ρήμα παίρνει -s: she runs, he jumps, it works. Στο "She run" λείπει το -s.',
      en: 'With he, she or it in the present tense, the verb takes -s: she runs, he jumps, it works. "She run" is missing the -s.',
    },
  },
  {
    q: { el: 'Διάλεξε το ρήμα: "The dogs ___ at the mail carrier every morning."', en: 'Choose the verb: "The dogs ___ at the mail carrier every morning."' },
    options: { el: ['barks', 'bark', 'is barking', 'barking'], en: ['barks', 'bark', 'is barking', 'barking'] },
    correct: 1,
    explanation: {
      el: 'Το "dogs" είναι πληθυντικός, άρα το ρήμα δεν παίρνει -s: the dogs bark. Μόνο το ενικό υποκείμενο παίρνει barks: the dog barks.',
      en: '"Dogs" is plural, so the verb has no -s: the dogs bark. Only a singular subject takes barks: the dog barks.',
    },
  },
  {
    q: { el: 'Ποιο ρήμα ταιριάζει; "My cousin ___ to school by bike."', en: 'Which verb fits? "My cousin ___ to school by bike."' },
    options: { el: ['go', 'going', 'goes', 'are going'], en: ['go', 'going', 'goes', 'are going'] },
    correct: 2,
    explanation: {
      el: 'Το "my cousin" είναι ένα άτομο, όπως το "he" ή το "she", άρα το ρήμα χρειάζεται -s: my cousin goes. Θυμήσου: ένα υποκείμενο, ένα -s.',
      en: '"My cousin" is one person, like "he" or "she", so the verb needs -s: my cousin goes. Remember: one subject, one -s.',
    },
  },
  {
    q: { el: 'Ποια πρόταση είναι σωστή;', en: 'Which sentence is correct?' },
    options: {
      el: ['The children plays outside.', 'The children is playing outside.', 'The child play outside.', 'The children play outside.'],
      en: ['The children plays outside.', 'The children is playing outside.', 'The child play outside.', 'The children play outside.'],
    },
    correct: 3,
    explanation: {
      el: 'Το "children" σημαίνει περισσότερα από ένα παιδιά, άρα παίρνει ρήμα πληθυντικού: the children play. Το ενικό υποκείμενο θα έπαιρνε plays: the child plays.',
      en: '"Children" means more than one child, so it takes the plural verb: the children play. A singular subject would take plays: the child plays.',
    },
  },

  // ── 5–8: there is / there are, don't / doesn't ─────────────────────────────
  {
    q: { el: 'Ποια πρόταση είναι σωστή;', en: 'Which sentence is correct?' },
    options: {
      el: ['There is three apples in the bowl.', 'There are three apples in the bowl.', 'There be three apples in the bowl.', 'There am three apples in the bowl.'],
      en: ['There is three apples in the bowl.', 'There are three apples in the bowl.', 'There be three apples in the bowl.', 'There am three apples in the bowl.'],
    },
    correct: 1,
    explanation: {
      el: 'Το υποκείμενο έρχεται μετά το "there": three apples. Το apples είναι πληθυντικός, άρα λέμε there are. Για ένα πράγμα λέμε there is: there is one apple.',
      en: 'The subject comes after "there": three apples. Apples is plural, so we say there are. For one thing, say there is: there is one apple.',
    },
  },
  {
    q: { el: 'Διάλεξε: "___ a spider on the ceiling!"', en: 'Choose: "___ a spider on the ceiling!"' },
    options: { el: ['There are', 'There were', 'There is', 'There have'], en: ['There are', 'There were', 'There is', 'There have'] },
    correct: 2,
    explanation: {
      el: 'Το "a spider" είναι μία μόνο αράχνη, άρα παίρνει there is. Χρησιμοποίησε there are μόνο όταν αυτό που ακολουθεί είναι πληθυντικός.',
      en: '"A spider" is just one spider, so it takes there is. Use there are only when the thing after it is plural.',
    },
  },
  {
    q: { el: 'Ποια πρόταση είναι σωστή;', en: 'Which sentence is correct?' },
    options: {
      el: ['He don\'t like carrots.', 'He doesn\'t like carrots.', 'He doesn\'t likes carrots.', 'He not like carrots.'],
      en: ['He don\'t like carrots.', 'He doesn\'t like carrots.', 'He doesn\'t likes carrots.', 'He not like carrots.'],
    },
    correct: 1,
    explanation: {
      el: 'Με he, she ή it χρησιμοποιούμε doesn\'t, και το κύριο ρήμα μένει σκέτο: he doesn\'t like. Το -s πάει στο "does", όχι στο "like".',
      en: 'With he, she or it, use doesn\'t, and the main verb stays plain: he doesn\'t like. The -s goes on "does", not on "like".',
    },
  },
  {
    q: { el: 'Διάλεξε: "My parents ___ eat meat on Fridays."', en: 'Choose: "My parents ___ eat meat on Fridays."' },
    options: { el: ['doesn\'t', 'isn\'t', 'not', 'don\'t'], en: ['doesn\'t', 'isn\'t', 'not', 'don\'t'] },
    correct: 3,
    explanation: {
      el: 'Το "parents" είναι πληθυντικός, άρα χρησιμοποιούμε don\'t: my parents don\'t eat. Το doesn\'t είναι μόνο για ένα πρόσωπο ή πράγμα: my dad doesn\'t eat.',
      en: '"Parents" is plural, so use don\'t: my parents don\'t eat. Doesn\'t is only for one person or thing: my dad doesn\'t eat.',
    },
  },

  // ── 9–12: collective nouns, everyone / each ────────────────────────────────
  {
    q: { el: 'Ποια πρόταση είναι σωστή;', en: 'Which sentence is correct?' },
    options: {
      el: ['The team is practicing today.', 'The team are practicing today.', 'The team am practicing today.', 'The team be practicing today.'],
      en: ['The team is practicing today.', 'The team are practicing today.', 'The team am practicing today.', 'The team be practicing today.'],
    },
    correct: 0,
    explanation: {
      el: 'Ένα περιληπτικό ουσιαστικό όπως team, class ή family ονομάζει μία ομάδα, γι\' αυτό στα αμερικανικά αγγλικά παίρνει ρήμα ενικού: the team is practicing.',
      en: 'A collective noun like team, class or family names one group, so in American English it takes a singular verb: the team is practicing.',
    },
  },
  {
    q: { el: 'Διάλεξε: "Everyone ___ ready for the trip."', en: 'Choose: "Everyone ___ ready for the trip."' },
    options: { el: ['are', 'is', 'were', 'be'], en: ['are', 'is', 'were', 'be'] },
    correct: 1,
    explanation: {
      el: 'Το everyone ακούγεται σαν πολλοί άνθρωποι, αλλά είναι λέξη ενικού, σαν να λέμε "ο καθένας". Άρα: everyone is, everybody has, everything looks.',
      en: 'Everyone sounds like a lot of people, but it is a singular word, like "every single one". So: everyone is, everybody has, everything looks.',
    },
  },
  {
    q: { el: 'Ποιο ρήμα ταιριάζει; "Each of the players ___ a number on their shirt."', en: 'Which verb fits? "Each of the players ___ a number on their shirt."' },
    options: { el: ['have', 'having', 'has', 'are having'], en: ['have', 'having', 'has', 'are having'] },
    correct: 2,
    explanation: {
      el: 'Το υποκείμενο είναι το each, που είναι ενικός, όχι το "players". Each has, each one wants, each of us needs.',
      en: 'The subject is each, which is singular, not "players". Each has, each one wants, each of us needs.',
    },
  },
  {
    q: { el: 'Ποια πρόταση είναι σωστή;', en: 'Which sentence is correct?' },
    options: {
      el: ['The class have a new teacher.', 'The classes has a new teacher.', 'The class has a new teacher.', 'The class having a new teacher.'],
      en: ['The class have a new teacher.', 'The classes has a new teacher.', 'The class has a new teacher.', 'The class having a new teacher.'],
    },
    correct: 2,
    explanation: {
      el: 'Το "the class" είναι μία ομάδα, άρα παίρνει has. Αν εννοούσαμε πολλές τάξεις, θα λέγαμε the classes have.',
      en: '"The class" is one group, so it takes has. If we meant several groups, we would say the classes have.',
    },
  },

  // ── 13–15: compound subjects and phrases in between ────────────────────────
  {
    q: { el: 'Διάλεξε: "Tom and Ana ___ in the school choir."', en: 'Choose: "Tom and Ana ___ in the school choir."' },
    options: { el: ['sings', 'is singing', 'singing', 'sing'], en: ['sings', 'is singing', 'singing', 'sing'] },
    correct: 3,
    explanation: {
      el: 'Δύο υποκείμενα ενωμένα με and κάνουν υποκείμενο πληθυντικού, όπως το "they": Tom and Ana sing. Ένας τραγουδιστής θα έπαιρνε sings: Tom sings.',
      en: 'Two subjects joined by and make a plural subject, like "they": Tom and Ana sing. One singer would take sings: Tom sings.',
    },
  },
  {
    q: { el: 'Ποια πρόταση είναι σωστή;', en: 'Which sentence is correct?' },
    options: {
      el: ['The box of crayons is on the shelf.', 'The box of crayons are on the shelf.', 'The boxes of crayons is on the shelf.', 'The box of crayon are on the shelf.'],
      en: ['The box of crayons is on the shelf.', 'The box of crayons are on the shelf.', 'The boxes of crayons is on the shelf.', 'The box of crayon are on the shelf.'],
    },
    correct: 0,
    explanation: {
      el: 'Το υποκείμενο είναι το box, όχι το crayons. Το "of crayons" απλώς περιγράφει το κουτί. Ένα κουτί, άρα: the box is on the shelf.',
      en: 'The subject is box, not crayons. "Of crayons" only describes the box. One box, so: the box is on the shelf.',
    },
  },
  {
    q: { el: 'Διάλεξε: "Either my mom or my dad ___ me up from practice."', en: 'Choose: "Either my mom or my dad ___ me up from practice."' },
    options: { el: ['pick', 'picks', 'are picking', 'picking'], en: ['pick', 'picks', 'are picking', 'picking'] },
    correct: 1,
    explanation: {
      el: 'Με το either… or, το ρήμα συμφωνεί με το υποκείμενο που είναι πιο κοντά του. Το "my dad" είναι ενικός, άρα: my dad picks me up.',
      en: 'With either… or, the verb agrees with the subject closest to it. "My dad" is singular, so: my dad picks me up.',
    },
  },

  // ── 16–18: find and fix the mistake ────────────────────────────────────────
  {
    q: { el: 'Ποια πρόταση έχει λάθος;', en: 'Which sentence has a mistake?' },
    options: {
      el: ['The birds sing at dawn.', 'My sister collects stamps.', 'The students has finished their work.', 'There is a book on the desk.'],
      en: ['The birds sing at dawn.', 'My sister collects stamps.', 'The students has finished their work.', 'There is a book on the desk.'],
    },
    correct: 2,
    explanation: {
      el: 'Το "students" είναι πληθυντικός, άρα χρειάζεται have, όχι has: the students have finished. Οι άλλες τρεις προτάσεις συμφωνούν τέλεια.',
      en: '"Students" is plural, so it needs have, not has: the students have finished. The other three sentences agree perfectly.',
    },
  },
  {
    q: { el: 'Ποια πρόταση έχει λάθος;', en: 'Which sentence has a mistake?' },
    options: {
      el: ['Everybody like pizza.', 'Each puppy has a collar.', 'There are two pencils here.', 'The family is going camping.'],
      en: ['Everybody like pizza.', 'Each puppy has a collar.', 'There are two pencils here.', 'The family is going camping.'],
    },
    correct: 0,
    explanation: {
      el: 'Το everybody είναι ενικός, άρα χρειάζεται likes: everybody likes pizza. Πρόσεχε τις δύσκολες λέξεις everyone, everybody, each και nobody, που όλες παίρνουν ρήμα με -s.',
      en: 'Everybody is singular, so it needs likes: everybody likes pizza. Watch out for the tricky words everyone, everybody, each and nobody, which all take -s verbs.',
    },
  },
  {
    q: { el: 'Πώς πρέπει να διορθωθεί αυτή η πρόταση; "The list of names were long."', en: 'How should this sentence be fixed? "The list of names were long."' },
    options: {
      el: ['Change "were" to "was".', 'Change "list" to "lists".', 'Change "names" to "name".', 'It is already correct.'],
      en: ['Change "were" to "was".', 'Change "list" to "lists".', 'Change "names" to "name".', 'It is already correct.'],
    },
    correct: 0,
    explanation: {
      el: 'Το υποκείμενο είναι το list, που είναι ενικός. Το "of names" είναι απλώς επιπλέον πληροφορία. Άρα: the list of names was long.',
      en: 'The subject is list, which is singular. "Of names" is just extra information. So: the list of names was long.',
    },
  },
];
