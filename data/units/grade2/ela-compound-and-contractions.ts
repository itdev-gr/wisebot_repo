/**
 * Β' Δημοτικού · English Language Arts · Compound Words & Contractions
 * ====================================================================
 * Original questions for a native English-speaking child of 7–8 (US Grade 2 / UK Year 2–3).
 * What the unit covers, in order:
 *   1–5   making compound words: sun+flower, foot+ball, rain+bow, bedroom, spotting a compound
 *   6–9   splitting a compound: cupcake, snowman, the word that is not a compound, book+shelf
 *   10–14 contractions and what they stand for: don't, can't, it's, I'm, she's
 *   15–18 where the apostrophe goes and what it shows
 * Distractors are the real mix-ups: the two words in the wrong order (flowersun), a split in the
 * wrong place (cu+pcake), the apostrophe before the wrong letter (do'nt) or left out (dont).
 */
import type { QuizQuestion } from '../../../types';

export const GRADE2_ELA_COMPOUND_AND_CONTRACTIONS: QuizQuestion[] = [
  // ── 1–5: making compound words ─────────────────────────────────────────────
  {
    q: { el: 'Ένωσε το «sun» και το «flower». Ποια σύνθετη λέξη σχηματίζεται;', en: 'Put «sun» and «flower» together. Which compound word do you get?' },
    options: { el: ['sunflower', 'flowersun', 'sunflow', 'sunnyflower'], en: ['sunflower', 'flowersun', 'sunflow', 'sunnyflower'] },
    correct: 0,
    explanation: {
      el: 'sun + flower = sunflower. Η σύνθετη λέξη (compound word) είναι δύο ολόκληρες λέξεις ενωμένες που φτιάχνουν μια καινούργια λέξη.',
      en: 'sun + flower = sunflower. A compound word is two whole words joined together to make a new word.',
    },
  },
  {
    q: { el: 'Ένωσε το «foot» και το «ball». Ποια σύνθετη λέξη σχηματίζεται;', en: 'Put «foot» and «ball» together. Which compound word do you get?' },
    options: { el: ['ballfoot', 'footsball', 'football', 'footballs'], en: ['ballfoot', 'footsball', 'football', 'footballs'] },
    correct: 2,
    explanation: {
      el: 'foot + ball = football. Οι δύο λέξεις μένουν ολόκληρες και κρατούν τη σειρά τους: πρώτα foot, μετά ball.',
      en: 'foot + ball = football. The two words stay whole and keep their order: foot first, then ball.',
    },
  },
  {
    q: { el: 'Ένωσε το «rain» και το «bow». Ποια σύνθετη λέξη σχηματίζεται;', en: 'Put «rain» and «bow» together. Which compound word do you get?' },
    options: { el: ['rainbows', 'rainbow', 'bowrain', 'rainybow'], en: ['rainbows', 'rainbow', 'bowrain', 'rainybow'] },
    correct: 1,
    explanation: {
      el: 'rain + bow = rainbow. Δεν προστίθεται ούτε αφαιρείται τίποτα· οι δύο λέξεις απλώς ενώνονται.',
      en: 'rain + bow = rainbow. Nothing is added or taken away; the two words just join up.',
    },
  },
  {
    q: { el: 'Ποιες δύο λέξεις φτιάχνουν το «bedroom»;', en: 'Which two words make «bedroom»?' },
    options: { el: ['bed + room', 'be + droom', 'bed + rom', 'bear + room'], en: ['bed + room', 'be + droom', 'bed + rom', 'bear + room'] },
    correct: 0,
    explanation: {
      el: 'bedroom = bed + room. Είναι το δωμάτιο όπου βρίσκεται το κρεβάτι σου. Και τα δύο μέρη είναι πραγματικές λέξεις.',
      en: 'bedroom = bed + room. It is the room where your bed is. Both parts are real words on their own.',
    },
  },
  {
    q: { el: 'Ποια από αυτές είναι σύνθετη λέξη;', en: 'Which of these is a compound word?' },
    options: { el: ['beautiful', 'running', 'butterfly', 'little'], en: ['beautiful', 'running', 'butterfly', 'little'] },
    correct: 2,
    explanation: {
      el: 'Το butterfly είναι σύνθετη λέξη: butter + fly. Τα beautiful, running και little δεν χωρίζονται σε δύο ολόκληρες λέξεις.',
      en: 'Butterfly is a compound word: butter + fly. Beautiful, running, and little cannot be split into two whole words.',
    },
  },

  // ── 6–9: splitting a compound ──────────────────────────────────────────────
  {
    q: { el: 'Χώρισε το «cupcake» στις δύο λέξεις του. Ποιο είναι σωστό;', en: 'Split «cupcake» into its two words. Which is right?' },
    options: { el: ['cu + pcake', 'cupc + ake', 'cap + cake', 'cup + cake'], en: ['cu + pcake', 'cupc + ake', 'cap + cake', 'cup + cake'] },
    correct: 3,
    explanation: {
      el: 'cupcake = cup + cake, ένα μικρό κέικ ψημένο σε σχήμα φλιτζανιού. Ψάξε δύο λέξεις που ήδη ξέρεις μέσα στη μεγάλη λέξη.',
      en: 'cupcake = cup + cake, a little cake baked in a cup shape. Look for two words you already know inside the big word.',
    },
  },
  {
    q: { el: 'Ποιες δύο λέξεις κρύβονται μέσα στο «snowman»;', en: 'Which two words are hiding inside «snowman»?' },
    options: { el: ['sno + wman', 'snow + man', 'snowm + an', 'slow + man'], en: ['sno + wman', 'snow + man', 'snowm + an', 'slow + man'] },
    correct: 1,
    explanation: {
      el: 'snowman = snow + man, ένας άνθρωπος από χιόνι. Κάθε μέρος είναι μια ολόκληρη λέξη από μόνο του.',
      en: 'snowman = snow + man, a man made of snow. Each part is a whole word on its own.',
    },
  },
  {
    q: { el: 'Ποια λέξη ΔΕΝ είναι σύνθετη;', en: 'Which word is NOT a compound word?' },
    options: { el: ['toothbrush', 'playground', 'yellow', 'starfish'], en: ['toothbrush', 'playground', 'yellow', 'starfish'] },
    correct: 2,
    explanation: {
      el: 'Το yellow είναι μία μόνο λέξη· το «yell» + «ow» δεν βγάζει νόημα. Τα toothbrush, playground και starfish είναι δύο λέξεις ενωμένες.',
      en: 'Yellow is just one word; «yell» + «ow» does not make sense. Toothbrush, playground, and starfish are all two words joined.',
    },
  },
  {
    q: { el: 'Ποια λέξη μπορείς να προσθέσεις στο «book» για να φτιάξεις σύνθετη λέξη;', en: 'Which word can you add to «book» to make a compound word?' },
    options: { el: ['red', 'big', 'jump', 'shelf'], en: ['red', 'big', 'jump', 'shelf'] },
    correct: 3,
    explanation: {
      el: 'book + shelf = bookshelf, το ράφι όπου ζουν τα βιβλία. Το red book ή το big book είναι δύο ξεχωριστές λέξεις, όχι μία σύνθετη.',
      en: 'book + shelf = bookshelf, the shelf where books live. Red book or big book are two separate words, not one compound.',
    },
  },

  // ── 10–14: contractions and what they stand for ────────────────────────────
  {
    q: { el: 'Τι σημαίνει το «don\'t»;', en: 'What does «don\'t» stand for?' },
    options: { el: ['do not', 'did not', 'does not', 'do it'], en: ['do not', 'did not', 'does not', 'do it'] },
    correct: 0,
    explanation: {
      el: 'don\'t = do not. Η απόστροφος παίρνει τη θέση του o στο «not»: do + not → don\'t.',
      en: 'don\'t = do not. The apostrophe takes the place of the o in «not»: do + not → don\'t.',
    },
  },
  {
    q: { el: 'Τι σημαίνει το «can\'t»;', en: 'What does «can\'t» stand for?' },
    options: { el: ['can it', 'cannot', 'could not', 'can do'], en: ['can it', 'cannot', 'could not', 'can do'] },
    correct: 1,
    explanation: {
      el: 'can\'t = cannot. Η απόστροφος δείχνει πού λείπουν τα γράμματα n και o.',
      en: 'can\'t = cannot. The apostrophe shows where the letters n and o are missing.',
    },
  },
  {
    q: { el: 'Τι σημαίνει το «it\'s»;', en: 'What does «it\'s» stand for?' },
    options: { el: ['its', 'it was', 'it is', 'is it'], en: ['its', 'it was', 'it is', 'is it'] },
    correct: 2,
    explanation: {
      el: 'it\'s = it is. Η απόστροφος αντικαθιστά το i που λείπει: It\'s cold today σημαίνει It is cold today.',
      en: 'it\'s = it is. The apostrophe stands for the missing i: It\'s cold today means It is cold today.',
    },
  },
  {
    q: { el: 'Τι σημαίνει το «I\'m»;', en: 'What does «I\'m» stand for?' },
    options: { el: ['I will', 'I was', 'I have', 'I am'], en: ['I will', 'I was', 'I have', 'I am'] },
    correct: 3,
    explanation: {
      el: 'I\'m = I am. Η απόστροφος αντικαθιστά το a: I\'m happy σημαίνει I am happy.',
      en: 'I\'m = I am. The apostrophe replaces the a: I\'m happy means I am happy.',
    },
  },
  {
    q: { el: 'Ποια είναι η σύντομη μορφή του «she is»;', en: 'What is the short form of «she is»?' },
    options: { el: ['shes', 'she\'s', 'sh\'es', 'she\'is'], en: ['shes', 'she\'s', 'sh\'es', 'she\'is'] },
    correct: 1,
    explanation: {
      el: 'she is → she\'s. Αφαιρούμε το i και βάζουμε απόστροφο στη θέση του. Η απόστροφος μπαίνει ακριβώς εκεί που ήταν το γράμμα.',
      en: 'she is → she\'s. We drop the i and put an apostrophe in its place. The apostrophe goes exactly where the letter was.',
    },
  },

  // ── 15–18: where the apostrophe goes ───────────────────────────────────────
  {
    q: { el: 'Ποια λέξη είναι γραμμένη σωστά;', en: 'Which word is written correctly?' },
    options: { el: ['do\'nt', 'dont\'', 'don\'t', 'd\'ont'], en: ['do\'nt', 'dont\'', 'don\'t', 'd\'ont'] },
    correct: 2,
    explanation: {
      el: 'Το don\'t είναι σωστό. Η απόστροφος μπαίνει εκεί που ήταν το o του «not», ανάμεσα στο n και το t.',
      en: 'don\'t is right. The apostrophe goes where the o of «not» used to be, between the n and the t.',
    },
  },
  {
    q: { el: 'Πού μπαίνει η απόστροφος στη σύντομη μορφή του «cannot»;', en: 'Where does the apostrophe go in the short form of «cannot»?' },
    options: { el: ['ca\'nt', 'can\'t', 'cant\'', 'c\'ant'], en: ['ca\'nt', 'can\'t', 'cant\'', 'c\'ant'] },
    correct: 1,
    explanation: {
      el: 'cannot → can\'t. Τα γράμματα n και o αφαιρούνται και η απόστροφος κάθεται στη θέση τους, πριν από το t.',
      en: 'cannot → can\'t. The letters n and o are taken out, and the apostrophe sits in their spot, right before the t.',
    },
  },
  {
    q: { el: 'Τι δείχνει η απόστροφος σε μια σύντμηση (contraction);', en: 'What does the apostrophe show in a contraction?' },
    options: {
      el: ['that the word is a name', 'that the sentence is a question', 'that the word means more than one', 'that a letter or letters have been left out'],
      en: ['that the word is a name', 'that the sentence is a question', 'that the word means more than one', 'that a letter or letters have been left out'],
    },
    correct: 3,
    explanation: {
      el: 'Στη σύντμηση, η απόστροφος είναι ένα σημαδάκι που λέει «εδώ λείπουν γράμματα»: can\'t, don\'t, it\'s, I\'m.',
      en: 'In a contraction, the apostrophe is a little marker that says «some letters are missing here»: can\'t, don\'t, it\'s, I\'m.',
    },
  },
  {
    q: { el: 'Ποια πρόταση χρησιμοποιεί σωστά τις συντμήσεις;', en: 'Which sentence uses contractions correctly?' },
    options: {
      el: ['We can\'t go outside because it\'s raining.', 'We ca\'nt go outside because its\' raining.', 'We cant go outside because it,s raining.', 'We can t go outside because it\'s\' raining.'],
      en: ['We can\'t go outside because it\'s raining.', 'We ca\'nt go outside because its\' raining.', 'We cant go outside because it,s raining.', 'We can t go outside because it\'s\' raining.'],
    },
    correct: 0,
    explanation: {
      el: 'Τα can\'t και it\'s είναι γραμμένα σωστά: μία απόστροφος το καθένα, ακριβώς εκεί που ήταν τα γράμματα που λείπουν.',
      en: 'can\'t and it\'s are written correctly: one apostrophe each, right where the missing letters were.',
    },
  },
];
