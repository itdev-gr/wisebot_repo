/**
 * Ε' Δημοτικού · ELA · Χρόνοι Ρημάτων / Verb Tenses
 * ===================================================
 * Original questions for a native English-speaking child of 10–11 (US Grade 5 / UK Year 5–6).
 * The «el» side is a faithful Greek translation for a Greek-speaking parent; the English
 * words and sentences being tested stay in English on both sides.
 *
 * What the unit covers, in order:
 *   1–4   present perfect: has / have + past participle (has eaten, have seen)
 *   5–7   past progressive: was / were + -ing (was running)
 *   8–11  the future: will vs going to
 *   12–15 irregular past participles: ridden, written, broken, gone
 *   16–18 keeping the tense consistent inside a sentence
 *
 * Distractors are the real slips: "have saw", "has went", "will helped", was/were swapped,
 * and a sentence that jumps from past to present halfway through.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE5_ELA_VERB_TENSES: QuizQuestion[] = [
  // ── 1–4: present perfect ───────────────────────────────────────────────────
  {
    q: { el: 'Διάλεξε: "I ___ that movie three times."', en: 'Choose: "I ___ that movie three times."' },
    options: { el: ['have seen', 'has seen', 'have saw', 'seen'], en: ['have seen', 'has seen', 'have saw', 'seen'] },
    correct: 0,
    explanation: {
      el: 'Ο present perfect σχηματίζεται με have/has + μετοχή παρακειμένου. Το "I" παίρνει have, και η μετοχή του see είναι seen: I have seen.',
      en: 'The present perfect is have/has + past participle. "I" takes have, and the participle of see is seen: I have seen.',
    },
  },
  {
    q: { el: 'Ποια πρόταση είναι σε present perfect;', en: 'Which sentence is in the present perfect?' },
    options: {
      el: ['She eats lunch at noon.', 'She ate lunch early.', 'She is eating lunch now.', 'She has eaten lunch already.'],
      en: ['She eats lunch at noon.', 'She ate lunch early.', 'She is eating lunch now.', 'She has eaten lunch already.'],
    },
    correct: 3,
    explanation: {
      el: 'Present perfect = has/have + μετοχή: she has eaten. Τον χρησιμοποιούμε για κάτι που έγινε πριν από τώρα, όταν η ακριβής στιγμή δεν έχει σημασία.',
      en: 'Present perfect = has/have + past participle: she has eaten. We use it for something that happened before now, when the exact time does not matter.',
    },
  },
  {
    q: { el: 'Διάλεξε: "My grandparents ___ in the same house for forty years."', en: 'Choose: "My grandparents ___ in the same house for forty years."' },
    options: { el: ['has lived', 'have lived', 'are lived', 'have living'], en: ['has lived', 'have lived', 'are lived', 'have living'] },
    correct: 1,
    explanation: {
      el: 'Το "grandparents" είναι πληθυντικός, άρα χρησιμοποιούμε have + τη μετοχή lived: they have lived. Ο present perfect συνδέει το παρελθόν με το τώρα, και ακόμα μένουν εκεί.',
      en: '"Grandparents" is plural, so use have + the past participle lived: they have lived. The present perfect links the past to now, and they still live there.',
    },
  },
  {
    q: { el: 'Ποια πρόταση είναι σωστή;', en: 'Which sentence is correct?' },
    options: {
      el: ['He have finished his homework.', 'He has finish his homework.', 'He finished has his homework.', 'He has finished his homework.'],
      en: ['He have finished his homework.', 'He has finish his homework.', 'He finished has his homework.', 'He has finished his homework.'],
    },
    correct: 3,
    explanation: {
      el: 'Το he παίρνει has, και το ρήμα μετά πρέπει να είναι μετοχή: has finished. Ποτέ has + σκέτο ρήμα.',
      en: 'He takes has, and the verb after it must be the past participle: has finished. Never has + plain verb.',
    },
  },

  // ── 5–7: past progressive ──────────────────────────────────────────────────
  {
    q: { el: 'Ποια πρόταση είναι σε past progressive;', en: 'Which sentence is in the past progressive?' },
    options: {
      el: ['She runs to the park.', 'She was running to the park.', 'She has run to the park.', 'She will run to the park.'],
      en: ['She runs to the park.', 'She was running to the park.', 'She has run to the park.', 'She will run to the park.'],
    },
    correct: 1,
    explanation: {
      el: 'Past progressive = was/were + -ing: she was running. Δείχνει μια πράξη που ήταν σε εξέλιξη κάποια στιγμή στο παρελθόν.',
      en: 'Past progressive = was/were + -ing: she was running. It shows an action that was in progress at a moment in the past.',
    },
  },
  {
    q: { el: 'Διάλεξε: "We ___ TV when the lights went out."', en: 'Choose: "We ___ TV when the lights went out."' },
    options: { el: ['watched', 'are watching', 'were watching', 'have watched'], en: ['watched', 'are watching', 'were watching', 'have watched'] },
    correct: 2,
    explanation: {
      el: 'Τα φώτα έσβησαν στη μέση μιας πράξης που ήταν σε εξέλιξη, άρα χρησιμοποιούμε past progressive: we were watching. Το "we" παίρνει were, όχι was.',
      en: 'The lights went out in the middle of an action that was going on, so use the past progressive: we were watching. "We" takes were, not was.',
    },
  },
  {
    q: { el: 'Ποια πρόταση είναι σωστή;', en: 'Which sentence is correct?' },
    options: {
      el: ['The kids was playing outside.', 'The kids were play outside.', 'The kids is playing outside.', 'The kids were playing outside.'],
      en: ['The kids was playing outside.', 'The kids were play outside.', 'The kids is playing outside.', 'The kids were playing outside.'],
    },
    correct: 3,
    explanation: {
      el: 'Το "kids" είναι πληθυντικός, άρα χρησιμοποιούμε were + -ing: the kids were playing. Μόνο ένα παιδί θα έπαιρνε was: the kid was playing.',
      en: '"Kids" is plural, so use were + -ing: the kids were playing. Only one kid would take was: the kid was playing.',
    },
  },

  // ── 8–11: will vs going to ─────────────────────────────────────────────────
  {
    q: { el: 'Διάλεξε: "Look at those dark clouds! It ___ rain."', en: 'Choose: "Look at those dark clouds! It ___ rain."' },
    options: { el: ['will', 'is going to', 'was going to', 'going to'], en: ['will', 'is going to', 'was going to', 'going to'] },
    correct: 1,
    explanation: {
      el: 'Όταν βλέπεις τα σημάδια ότι κάτι πρόκειται να συμβεί, χρησιμοποίησε going to: it is going to rain. Το "will" είναι περισσότερο για υποσχέσεις, προσφορές και εικασίες.',
      en: 'When you can see the evidence that something is about to happen, use going to: it is going to rain. "Will" is more for promises, offers and guesses.',
    },
  },
  {
    q: { el: 'Ποια πρόταση χρησιμοποιεί σωστά το "will";', en: 'Which sentence uses "will" the right way?' },
    options: {
      el: ['I will helped you carry that.', 'I will to help you carry that.', 'I will helping you carry that.', 'I will help you carry that.'],
      en: ['I will helped you carry that.', 'I will to help you carry that.', 'I will helping you carry that.', 'I will help you carry that.'],
    },
    correct: 3,
    explanation: {
      el: 'Μετά το will βάζουμε το σκέτο ρήμα, χωρίς -ed, χωρίς to και χωρίς -ing: I will help. Γι\' αυτό λέμε she will come, they will win.',
      en: 'After will, use the plain verb with no -ed, no to and no -ing: I will help. That is why we say she will come, they will win.',
    },
  },
  {
    q: { el: 'Διάλεξε: "We ___ visit my aunt next weekend. We bought the train tickets yesterday."', en: 'Choose: "We ___ visit my aunt next weekend. We bought the train tickets yesterday."' },
    options: { el: ['are going to', 'will', 'were going to', 'have'], en: ['are going to', 'will', 'were going to', 'have'] },
    correct: 0,
    explanation: {
      el: 'Όταν το σχέδιο έχει ήδη γίνει, το going to είναι η φυσική επιλογή: we are going to visit. Το will ταιριάζει καλύτερα σε απόφαση που παίρνεται εκείνη τη στιγμή, όπως "I\'ll get it!"',
      en: 'When a plan is already made, going to is the natural choice: we are going to visit. Will works better for a decision made right now, like "I\'ll get it!"',
    },
  },
  {
    q: { el: 'Ποια πρόταση μιλάει για το μέλλον;', en: 'Which sentence is about the future?' },
    options: {
      el: ['They will play tennis tomorrow.', 'They have played tennis.', 'They were playing tennis.', 'They played tennis.'],
      en: ['They will play tennis tomorrow.', 'They have played tennis.', 'They were playing tennis.', 'They played tennis.'],
    },
    correct: 0,
    explanation: {
      el: 'Το will + ρήμα δείχνει το μέλλον: they will play tomorrow. Οι άλλες μιλούν όλες για το παρελθόν.',
      en: 'Will + verb points to the future: they will play tomorrow. The others are all about the past.',
    },
  },

  // ── 12–15: irregular past participles ──────────────────────────────────────
  {
    q: { el: 'Διάλεξε: "She has ___ her bike to school every day this week."', en: 'Choose: "She has ___ her bike to school every day this week."' },
    options: { el: ['rode', 'ride', 'ridden', 'rided'], en: ['rode', 'ride', 'ridden', 'rided'] },
    correct: 2,
    explanation: {
      el: 'Η μετοχή του ride είναι ridden: ride, rode, ridden. Μετά το has και το have χρησιμοποιούμε πάντα τη μετοχή, όχι τον απλό αόριστο.',
      en: 'The past participle of ride is ridden: ride, rode, ridden. After has and have, always use the participle, not the simple past.',
    },
  },
  {
    q: { el: 'Διάλεξε: "Have you ___ your letter yet?"', en: 'Choose: "Have you ___ your letter yet?"' },
    options: { el: ['wrote', 'written', 'writed', 'write'], en: ['wrote', 'written', 'writed', 'write'] },
    correct: 1,
    explanation: {
      el: 'Write, wrote, written. Μετά το have χρησιμοποιούμε τον τρίτο τύπο: have you written? Το "wrote" είναι μόνο για τον απλό αόριστο: I wrote it yesterday.',
      en: 'Write, wrote, written. After have, use the third form: have you written? "Wrote" is only for the simple past: I wrote it yesterday.',
    },
  },
  {
    q: { el: 'Διάλεξε: "My little brother has ___ my favorite mug."', en: 'Choose: "My little brother has ___ my favorite mug."' },
    options: { el: ['broke', 'breaked', 'break', 'broken'], en: ['broke', 'breaked', 'break', 'broken'] },
    correct: 3,
    explanation: {
      el: 'Break, broke, broken. Με το has χρησιμοποιούμε broken: he has broken it. Το "broke" είναι ο απλός αόριστος: he broke it this morning.',
      en: 'Break, broke, broken. With has, use broken: he has broken it. "Broke" is the simple past: he broke it this morning.',
    },
  },
  {
    q: { el: 'Ποια πρόταση είναι σωστή;', en: 'Which sentence is correct?' },
    options: {
      el: ['She has gone to the library.', 'She has went to the library.', 'She has go to the library.', 'She have gone to the library.'],
      en: ['She has gone to the library.', 'She has went to the library.', 'She has go to the library.', 'She have gone to the library.'],
    },
    correct: 0,
    explanation: {
      el: 'Go, went, gone. Μετά το has χρησιμοποιούμε gone: she has gone. Το "went" δεν ακολουθεί ποτέ το has ή το have.',
      en: 'Go, went, gone. After has, use gone: she has gone. "Went" never follows has or have.',
    },
  },

  // ── 16–18: keeping the tense consistent ────────────────────────────────────
  {
    q: { el: 'Ποια πρόταση κρατάει τον ίδιο χρόνο από την αρχή ως το τέλος;', en: 'Which sentence keeps the same tense all the way through?' },
    options: {
      el: ['I opened the door and the cat ran out.', 'I opened the door and the cat runs out.', 'I open the door and the cat ran out.', 'I am opening the door and the cat ran out.'],
      en: ['I opened the door and the cat ran out.', 'I opened the door and the cat runs out.', 'I open the door and the cat ran out.', 'I am opening the door and the cat ran out.'],
    },
    correct: 0,
    explanation: {
      el: 'Και οι δύο πράξεις έγιναν στο παρελθόν, άρα και τα δύο ρήματα μένουν στο παρελθόν: opened και ran. Το πήδημα από παρελθόν σε παρόν μπερδεύει τον αναγνώστη.',
      en: 'Both actions happened in the past, so both verbs stay in the past: opened and ran. Jumping from past to present confuses the reader.',
    },
  },
  {
    q: {
      el: 'Ποιο ρήμα πρέπει να αλλάξει για να μείνει ο χρόνος σταθερός; "Every Saturday we walk to the market, buy fruit, and ate lunch by the river."',
      en: 'Which verb should be changed to keep the tense consistent? "Every Saturday we walk to the market, buy fruit, and ate lunch by the river."',
    },
    options: { el: ['walk', 'buy', 'ate', 'the sentence is fine'], en: ['walk', 'buy', 'ate', 'the sentence is fine'] },
    correct: 2,
    explanation: {
      el: 'Τα walk και buy είναι ενεστώτας, άρα το ate πρέπει να γίνει eat: we walk, buy and eat. Κάθε ρήμα σε μια απαρίθμηση πρέπει να έχει τον ίδιο χρόνο.',
      en: 'Walk and buy are present, so ate needs to become eat: we walk, buy and eat. Every verb in a list should share the same tense.',
    },
  },
  {
    q: {
      el: 'Ποιος τύπος ρήματος ταιριάζει; "Last summer we camped by the lake and ___ under the stars every night."',
      en: 'Which verb form fits? "Last summer we camped by the lake and ___ under the stars every night."',
    },
    options: { el: ['sleep', 'slept', 'will sleep', 'are sleeping'], en: ['sleep', 'slept', 'will sleep', 'are sleeping'] },
    correct: 1,
    explanation: {
      el: 'Το "last summer" και το camped σου λένε ότι η ιστορία είναι στο παρελθόν, άρα χρησιμοποίησε slept. Κράτα τον χρόνο με τον οποίο ξεκίνησες.',
      en: '"Last summer" and camped tell you the story is in the past, so use slept. Keep the tense you started with.',
    },
  },
];
