/**
 * Grade 1 · English Language Arts · Short Vowel Sounds
 * ====================================================
 * Original questions for a native English-speaking child of 6–7 (nothing from published books).
 * What the unit covers, in order:
 *   1–5   short a and e: the vowel sound in cat and pen, which word has the /a/ sound
 *   6–10  short i, o and u: the vowel sound in pig, dog and sun
 *   11–14 the missing vowel: which letter finishes a word (h_t, b_d, c_p…)
 *   15–18 odd one out: the word whose vowel sound does not match the others
 * Distractors are words with a different short vowel, so the child has to listen to the middle sound.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE1_ELA_PHONICS_SHORT_VOWELS: QuizQuestion[] = [
  // ── 1–5: short a and e ─────────────────────────────────────────────────────
  {
    q: { el: 'Ποιο φωνήεν ακούγεται στη μέση της λέξης «cat»;', en: 'Which vowel do you hear in the middle of «cat»?' },
    options: { el: ['e', 'a', 'i', 'o'], en: ['e', 'a', 'i', 'o'] },
    correct: 1,
    explanation: {
      el: 'Cat: c-a-t. Το μεσαίο γράμμα είναι το a, και κάνει τον σύντομο ήχο /a/, όπως στο apple.',
      en: 'Cat: c-a-t. The middle letter is a, and it makes the short /a/ sound, like in apple.',
    },
  },
  {
    q: { el: 'Ποια λέξη έχει τον σύντομο ήχο /a/ όπως στο «cat»;', en: 'Which word has the short /a/ sound, like in «cat»?' },
    options: { el: ['pen', 'sun', 'map', 'dog'], en: ['pen', 'sun', 'map', 'dog'] },
    correct: 2,
    explanation: {
      el: 'Map: m-a-p. Το a στη μέση κάνει /a/, ακριβώς όπως στο cat. Το pen έχει e και το sun έχει u.',
      en: 'Map: m-a-p. The a in the middle says /a/, just like in cat. Pen has an e and sun has a u.',
    },
  },
  {
    q: { el: 'Ποιο φωνήεν ακούγεται στη μέση της λέξης «pen»;', en: 'Which vowel do you hear in the middle of «pen»?' },
    options: { el: ['a', 'i', 'u', 'e'], en: ['a', 'i', 'u', 'e'] },
    correct: 3,
    explanation: {
      el: 'Pen: p-e-n. Το μεσαίο γράμμα είναι το e, και κάνει τον σύντομο ήχο /e/, όπως στο egg.',
      en: 'Pen: p-e-n. The middle letter is e, and it makes the short /e/ sound, like in egg.',
    },
  },
  {
    q: { el: 'Ποια λέξη έχει τον σύντομο ήχο /e/ όπως στο «pen»;', en: 'Which word has the short /e/ sound, like in «pen»?' },
    options: { el: ['bed', 'bag', 'bug', 'big'], en: ['bed', 'bag', 'bug', 'big'] },
    correct: 0,
    explanation: {
      el: 'Bed: b-e-d. Το e στη μέση κάνει /e/, όπως στο pen. Άκου καλά: bag, bug και big έχουν άλλα φωνήεντα.',
      en: 'Bed: b-e-d. The e in the middle says /e/, like in pen. Listen closely: bag, bug and big have other vowels.',
    },
  },
  {
    q: { el: 'Ποια λέξη έχει ΔΙΑΦΟΡΕΤΙΚΟ φωνήεν από το «hat»;', en: 'Which word has a DIFFERENT vowel sound from «hat»?' },
    options: { el: ['bat', 'jam', 'net', 'van'], en: ['bat', 'jam', 'net', 'van'] },
    correct: 2,
    explanation: {
      el: 'Hat, bat, jam και van έχουν όλα τον ήχο /a/. Το net έχει /e/ στη μέση, οπότε ακούγεται διαφορετικά.',
      en: 'Hat, bat, jam and van all have the /a/ sound. Net has /e/ in the middle, so it sounds different.',
    },
  },

  // ── 6–10: short i, o and u ─────────────────────────────────────────────────
  {
    q: { el: 'Ποιο φωνήεν ακούγεται στη μέση της λέξης «pig»;', en: 'Which vowel do you hear in the middle of «pig»?' },
    options: { el: ['i', 'e', 'a', 'u'], en: ['i', 'e', 'a', 'u'] },
    correct: 0,
    explanation: {
      el: 'Pig: p-i-g. Το μεσαίο γράμμα είναι το i, και κάνει τον σύντομο ήχο /i/, όπως στο ink.',
      en: 'Pig: p-i-g. The middle letter is i, and it makes the short /i/ sound, like in ink.',
    },
  },
  {
    q: { el: 'Ποια λέξη έχει τον σύντομο ήχο /i/ όπως στο «pig»;', en: 'Which word has the short /i/ sound, like in «pig»?' },
    options: { el: ['hop', 'lid', 'cup', 'jet'], en: ['hop', 'lid', 'cup', 'jet'] },
    correct: 1,
    explanation: {
      el: 'Lid: l-i-d. Το i στη μέση κάνει /i/, όπως στο pig. Hop, cup και jet έχουν o, u και e.',
      en: 'Lid: l-i-d. The i in the middle says /i/, like in pig. Hop, cup and jet have o, u and e.',
    },
  },
  {
    q: { el: 'Ποιο φωνήεν ακούγεται στη μέση της λέξης «dog»;', en: 'Which vowel do you hear in the middle of «dog»?' },
    options: { el: ['u', 'a', 'o', 'i'], en: ['u', 'a', 'o', 'i'] },
    correct: 2,
    explanation: {
      el: 'Dog: d-o-g. Το μεσαίο γράμμα είναι το o, και κάνει τον σύντομο ήχο /o/, όπως στο octopus.',
      en: 'Dog: d-o-g. The middle letter is o, and it makes the short /o/ sound, like in octopus.',
    },
  },
  {
    q: { el: 'Ποιο φωνήεν ακούγεται στη μέση της λέξης «sun»;', en: 'Which vowel do you hear in the middle of «sun»?' },
    options: { el: ['o', 'a', 'e', 'u'], en: ['o', 'a', 'e', 'u'] },
    correct: 3,
    explanation: {
      el: 'Sun: s-u-n. Το μεσαίο γράμμα είναι το u, και κάνει τον σύντομο ήχο /u/, όπως στο umbrella.',
      en: 'Sun: s-u-n. The middle letter is u, and it makes the short /u/ sound, like in umbrella.',
    },
  },
  {
    q: { el: 'Ποια λέξη έχει τον σύντομο ήχο /u/ όπως στο «sun»;', en: 'Which word has the short /u/ sound, like in «sun»?' },
    options: { el: ['pot', 'pin', 'pat', 'bus'], en: ['pot', 'pin', 'pat', 'bus'] },
    correct: 3,
    explanation: {
      el: 'Bus: b-u-s. Το u στη μέση κάνει /u/, όπως στο sun. Pot, pin και pat έχουν o, i και a.',
      en: 'Bus: b-u-s. The u in the middle says /u/, like in sun. Pot, pin and pat have o, i and a.',
    },
  },

  // ── 11–14: the missing vowel ───────────────────────────────────────────────
  {
    q: { el: 'Ποιο φωνήεν λείπει; «h_t» (το φοράς στο κεφάλι)', en: 'Which vowel is missing? «h_t» (you wear it on your head)' },
    options: { el: ['a', 'o', 'u', 'i'], en: ['a', 'o', 'u', 'i'] },
    correct: 0,
    explanation: {
      el: 'Hat: h-a-t. Το a κάνει /a/. Με o θα ήταν hot, με u θα ήταν hut, οπότε το φωνήεν αλλάζει τη λέξη!',
      en: 'Hat: h-a-t. The a says /a/. With o it would be hot, with u it would be hut, so the vowel changes the word!',
    },
  },
  {
    q: { el: 'Ποιο φωνήεν λείπει; «b_d» (κοιμάσαι σε αυτό)', en: 'Which vowel is missing? «b_d» (you sleep in it)' },
    options: { el: ['a', 'i', 'e', 'u'], en: ['a', 'i', 'e', 'u'] },
    correct: 2,
    explanation: {
      el: 'Bed: b-e-d. Το e κάνει /e/. Με a θα ήταν bad και με u θα ήταν bud. Το e είναι το σωστό για το κρεβάτι.',
      en: 'Bed: b-e-d. The e says /e/. With a it would be bad, and with u it would be bud. The e is right for the thing you sleep in.',
    },
  },
  {
    q: { el: 'Ποιο φωνήεν λείπει; «c_p» (πίνεις από αυτό)', en: 'Which vowel is missing? «c_p» (you drink from it)' },
    options: { el: ['o', 'u', 'a', 'e'], en: ['o', 'u', 'a', 'e'] },
    correct: 1,
    explanation: {
      el: 'Cup: c-u-p. Το u κάνει /u/. Με a θα ήταν cap, που είναι καπέλο. Το cup είναι αυτό από το οποίο πίνεις.',
      en: 'Cup: c-u-p. The u says /u/. With a it would be cap, which is a hat. A cup is what you drink from.',
    },
  },
  {
    q: { el: 'Ποιο φωνήεν λείπει; «f_x» (ένα ζώο με φουντωτή ουρά)', en: 'Which vowel is missing? «f_x» (an animal with a bushy tail)' },
    options: { el: ['a', 'e', 'i', 'o'], en: ['a', 'e', 'i', 'o'] },
    correct: 3,
    explanation: {
      el: 'Fox: f-o-x. Το o κάνει /o/ στη μέση. Με i θα ήταν fix, που σημαίνει «φτιάχνω». Το ζώο είναι fox.',
      en: 'Fox: f-o-x. The o says /o/ in the middle. With i it would be fix, which means to mend. The animal is a fox.',
    },
  },

  // ── 15–18: odd one out ─────────────────────────────────────────────────────
  {
    q: { el: 'Ποια λέξη ΔΕΝ ταιριάζει; Τρεις έχουν τον ήχο /o/.', en: 'Which word does NOT belong? Three have the /o/ sound.' },
    options: { el: ['top', 'log', 'mud', 'box'], en: ['top', 'log', 'mud', 'box'] },
    correct: 2,
    explanation: {
      el: 'Top, log και box έχουν όλα /o/ στη μέση. Το mud έχει /u/, οπότε αυτό είναι το διαφορετικό.',
      en: 'Top, log and box all have /o/ in the middle. Mud has /u/, so mud is the odd one out.',
    },
  },
  {
    q: { el: 'Ποια λέξη ΔΕΝ ταιριάζει; Τρεις έχουν τον ήχο /i/.', en: 'Which word does NOT belong? Three have the /i/ sound.' },
    options: { el: ['hen', 'sit', 'fin', 'zip'], en: ['hen', 'sit', 'fin', 'zip'] },
    correct: 0,
    explanation: {
      el: 'Sit, fin και zip έχουν όλα /i/ στη μέση. Το hen έχει /e/, οπότε αυτό είναι το διαφορετικό.',
      en: 'Sit, fin and zip all have /i/ in the middle. Hen has /e/, so hen is the odd one out.',
    },
  },
  {
    q: { el: 'Ποια λέξη ΔΕΝ ταιριάζει; Τρεις έχουν τον ήχο /u/.', en: 'Which word does NOT belong? Three have the /u/ sound.' },
    options: { el: ['hug', 'run', 'tub', 'wig'], en: ['hug', 'run', 'tub', 'wig'] },
    correct: 3,
    explanation: {
      el: 'Hug, run και tub έχουν όλα /u/ στη μέση. Το wig έχει /i/, οπότε αυτό είναι το διαφορετικό.',
      en: 'Hug, run and tub all have /u/ in the middle. Wig has /i/, so wig is the odd one out.',
    },
  },
  {
    q: { el: 'Ποιες δύο λέξεις έχουν το ΙΔΙΟ φωνήεν στη μέση;', en: 'Which two words have the SAME vowel sound in the middle?' },
    options: { el: ['cat and cot', 'pen and pin', 'ham and jam', 'bug and bag'], en: ['cat and cot', 'pen and pin', 'ham and jam', 'bug and bag'] },
    correct: 2,
    explanation: {
      el: 'Ham και jam έχουν και τα δύο /a/ στη μέση. Τα άλλα ζευγάρια αλλάζουν φωνήεν: cat/cot, pen/pin, bug/bag.',
      en: 'Ham and jam both have /a/ in the middle. The other pairs change their vowel: cat/cot, pen/pin, bug/bag.',
    },
  },
];
