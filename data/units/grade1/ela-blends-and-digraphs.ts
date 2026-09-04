/**
 * Grade 1 · English Language Arts · Blends & Digraphs
 * ===================================================
 * Original questions for a native English-speaking child of 6–7 (nothing from published books).
 * What the unit covers, in order:
 *   1–6   digraphs: two letters, one sound — sh, ch, th and ck (ship, chip, thin, duck)
 *   7–10  the missing digraph: which pair of letters finishes a word (fi__, __op, ba__)
 *   11–14 blends: two letters you can still hear — bl, st, tr and fl (blue, star, tree, flag)
 *   15–18 same first sound: which word starts like the given one
 * Distractors are the digraphs and blends that are easiest to mix up (sh/ch, th/f, bl/fl, st/sp).
 */
import type { QuizQuestion } from '../../../types';

export const GRADE1_ELA_BLENDS_AND_DIGRAPHS: QuizQuestion[] = [
  // ── 1–6: digraphs sh, ch, th, ck ───────────────────────────────────────────
  {
    q: { el: 'Ποιος ήχος ακούγεται στην αρχή της λέξης «ship»;', en: 'Which sound do you hear at the start of «ship»?' },
    options: { el: ['ch', 'sh', 'th', 's'], en: ['ch', 'sh', 'th', 's'] },
    correct: 1,
    explanation: {
      el: 'Ship αρχίζει με sh. Το s και το h μαζί κάνουν έναν ήχο, /sh/, σαν να λες σε κάποιον «σσσς, ησυχία».',
      en: 'Ship starts with sh. The s and h work together to make one sound, /sh/, like when you tell someone to be quiet.',
    },
  },
  {
    q: { el: 'Ποιος ήχος ακούγεται στην αρχή της λέξης «chip»;', en: 'Which sound do you hear at the start of «chip»?' },
    options: { el: ['sh', 'th', 'ch', 'c'], en: ['sh', 'th', 'ch', 'c'] },
    correct: 2,
    explanation: {
      el: 'Chip αρχίζει με ch. Το c και το h μαζί κάνουν τον ήχο /ch/, σαν το φτέρνισμα ενός τρένου: ch, ch, ch!',
      en: 'Chip starts with ch. The c and h work together to make the /ch/ sound, like a train puffing along: ch, ch, ch!',
    },
  },
  {
    q: { el: 'Ποιος ήχος ακούγεται στην αρχή της λέξης «thin»;', en: 'Which sound do you hear at the start of «thin»?' },
    options: { el: ['th', 'f', 'sh', 't'], en: ['th', 'f', 'sh', 't'] },
    correct: 0,
    explanation: {
      el: 'Thin αρχίζει με th. Για το /th/ βάζεις τη γλώσσα ανάμεσα στα δόντια και φυσάς απαλά.',
      en: 'Thin starts with th. To say /th/ you put your tongue between your teeth and blow gently.',
    },
  },
  {
    q: { el: 'Ποια λέξη τελειώνει με τον ήχο «ck»;', en: 'Which word ends with the «ck» sound?' },
    options: { el: ['fish', 'duck', 'bath', 'much'], en: ['fish', 'duck', 'bath', 'much'] },
    correct: 1,
    explanation: {
      el: 'Duck τελειώνει σε ck. Το c και το k μαζί κάνουν έναν ήχο /k/. Το ck έρχεται συχνά μετά από ένα σύντομο φωνήεν.',
      en: 'Duck ends in ck. The c and k together make one /k/ sound. We often see ck right after a short vowel.',
    },
  },
  {
    q: { el: 'Ποια λέξη αρχίζει με «sh»;', en: 'Which word starts with «sh»?' },
    options: { el: ['chin', 'sock', 'thick', 'shop'], en: ['chin', 'sock', 'thick', 'shop'] },
    correct: 3,
    explanation: {
      el: 'Shop: sh-o-p. Αρχίζει με τον ήχο /sh/. Το chin αρχίζει με /ch/ και το thick με /th/.',
      en: 'Shop: sh-o-p. It starts with the /sh/ sound. Chin starts with /ch/ and thick starts with /th/.',
    },
  },
  {
    q: { el: 'Ποια λέξη τελειώνει με «th»;', en: 'Which word ends with «th»?' },
    options: { el: ['wish', 'rock', 'moth', 'rich'], en: ['wish', 'rock', 'moth', 'rich'] },
    correct: 2,
    explanation: {
      el: 'Moth: m-o-th. Ο τελευταίος ήχος είναι /th/. Το wish τελειώνει σε /sh/ και το rich σε /ch/.',
      en: 'Moth: m-o-th. The last sound is /th/. Wish ends in /sh/ and rich ends in /ch/.',
    },
  },

  // ── 7–10: the missing digraph ──────────────────────────────────────────────
  {
    q: { el: 'Ποια γράμματα λείπουν; «fi__» (ζει στο νερό)', en: 'Which letters are missing? «fi__» (it lives in water)' },
    options: { el: ['ch', 'th', 'ck', 'sh'], en: ['ch', 'th', 'ck', 'sh'] },
    correct: 3,
    explanation: {
      el: 'Fish: f-i-sh. Η λέξη τελειώνει με τον ήχο /sh/, οπότε γράφουμε sh.',
      en: 'Fish: f-i-sh. The word ends with the /sh/ sound, so we write sh.',
    },
  },
  {
    q: { el: 'Ποια γράμματα λείπουν; «__op» (κόβω ξύλα με τσεκούρι)', en: 'Which letters are missing? «__op» (to cut wood with an axe)' },
    options: { el: ['ch', 'sh', 'th', 'ck'], en: ['ch', 'sh', 'th', 'ck'] },
    correct: 0,
    explanation: {
      el: 'Chop: ch-o-p. Αρχίζει με τον ήχο /ch/. Με sh θα ήταν shop, ένα μαγαζί!',
      en: 'Chop: ch-o-p. It starts with the /ch/ sound. With sh it would be shop, a place to buy things!',
    },
  },
  {
    q: { el: 'Ποια γράμματα λείπουν; «ba__» (πλένεσαι μέσα σε αυτό)', en: 'Which letters are missing? «ba__» (you wash in it)' },
    options: { el: ['sh', 'th', 'ch', 'ck'], en: ['sh', 'th', 'ch', 'ck'] },
    correct: 1,
    explanation: {
      el: 'Bath: b-a-th. Τελειώνει με τον ήχο /th/. Με ck θα ήταν back, η πλάτη σου!',
      en: 'Bath: b-a-th. It ends with the /th/ sound. With ck it would be back, the back of your body!',
    },
  },
  {
    q: { el: 'Ποια γράμματα λείπουν; «so__» (το φοράς στο πόδι)', en: 'Which letters are missing? «so__» (you wear it on your foot)' },
    options: { el: ['ch', 'sh', 'ck', 'th'], en: ['ch', 'sh', 'ck', 'th'] },
    correct: 2,
    explanation: {
      el: 'Sock: s-o-ck. Τελειώνει με τον ήχο /k/, και μετά από σύντομο φωνήεν τον γράφουμε ck.',
      en: 'Sock: s-o-ck. It ends with the /k/ sound, and after a short vowel we write it as ck.',
    },
  },

  // ── 11–14: blends bl, st, tr, fl ───────────────────────────────────────────
  {
    q: { el: 'Ποια λέξη αρχίζει με τον συνδυασμό «bl»;', en: 'Which word starts with the blend «bl»?' },
    options: { el: ['flag', 'blue', 'ball', 'plum'], en: ['flag', 'blue', 'ball', 'plum'] },
    correct: 1,
    explanation: {
      el: 'Blue: b-l-ue. Σε έναν συνδυασμό ακούς και τα δύο γράμματα: /b/ και μετά /l/, γρήγορα μαζί.',
      en: 'Blue: b-l-ue. In a blend you can hear both letters: /b/ and then /l/, said quickly together.',
    },
  },
  {
    q: { el: 'Ποιος συνδυασμός ακούγεται στην αρχή της λέξης «star»;', en: 'Which blend do you hear at the start of «star»?' },
    options: { el: ['sp', 'sk', 'st', 'sl'], en: ['sp', 'sk', 'st', 'sl'] },
    correct: 2,
    explanation: {
      el: 'Star αρχίζει με st: /s/ και μετά /t/. Άκου: s-t-ar. Το sp θα έκανε spar και το sl θα έκανε slar.',
      en: 'Star starts with st: /s/ and then /t/. Listen: s-t-ar. Sp would make spar and sl would make slar.',
    },
  },
  {
    q: { el: 'Ποια λέξη αρχίζει με τον συνδυασμό «tr»;', en: 'Which word starts with the blend «tr»?' },
    options: { el: ['drum', 'tree', 'ten', 'frog'], en: ['drum', 'tree', 'ten', 'frog'] },
    correct: 1,
    explanation: {
      el: 'Tree: t-r-ee. Ακούς /t/ και μετά /r/. Το drum αρχίζει με dr και το frog με fr, που μοιάζουν αλλά είναι διαφορετικά.',
      en: 'Tree: t-r-ee. You hear /t/ and then /r/. Drum starts with dr and frog starts with fr, which sound close but are different.',
    },
  },
  {
    q: { el: 'Ποιος συνδυασμός ακούγεται στην αρχή της λέξης «flag»;', en: 'Which blend do you hear at the start of «flag»?' },
    options: { el: ['bl', 'fr', 'cl', 'fl'], en: ['bl', 'fr', 'cl', 'fl'] },
    correct: 3,
    explanation: {
      el: 'Flag αρχίζει με fl: /f/ και μετά /l/. Άκου: f-l-ag. Με bl θα ήταν blag, που δεν είναι λέξη.',
      en: 'Flag starts with fl: /f/ and then /l/. Listen: f-l-ag. With bl it would be blag, which is not a word.',
    },
  },

  // ── 15–18: same first sound ────────────────────────────────────────────────
  {
    q: { el: 'Ποια λέξη αρχίζει με τον ίδιο ήχο όπως το «sheep»;', en: 'Which word starts with the same sound as «sheep»?' },
    options: { el: ['shell', 'cheek', 'seed', 'thumb'], en: ['shell', 'cheek', 'seed', 'thumb'] },
    correct: 0,
    explanation: {
      el: 'Sheep και shell αρχίζουν και τα δύο με /sh/. Το cheek αρχίζει με /ch/ και το thumb με /th/.',
      en: 'Sheep and shell both start with /sh/. Cheek starts with /ch/ and thumb starts with /th/.',
    },
  },
  {
    q: { el: 'Ποια λέξη αρχίζει με τον ίδιο ήχο όπως το «cheese»;', en: 'Which word starts with the same sound as «cheese»?' },
    options: { el: ['shoe', 'cat', 'thick', 'chair'], en: ['shoe', 'cat', 'thick', 'chair'] },
    correct: 3,
    explanation: {
      el: 'Cheese και chair αρχίζουν και τα δύο με /ch/. Το cat αρχίζει με /k/, όχι /ch/, ακόμα κι αν έχει c.',
      en: 'Cheese and chair both start with /ch/. Cat starts with /k/, not /ch/, even though it has a c.',
    },
  },
  {
    q: { el: 'Ποια λέξη αρχίζει με τον ίδιο ήχο όπως το «stop»;', en: 'Which word starts with the same sound as «stop»?' },
    options: { el: ['spot', 'step', 'slip', 'snap'], en: ['spot', 'step', 'slip', 'snap'] },
    correct: 1,
    explanation: {
      el: 'Stop και step αρχίζουν και τα δύο με st. Τα spot, slip και snap αρχίζουν με s, αλλά το δεύτερο γράμμα είναι διαφορετικό.',
      en: 'Stop and step both start with st. Spot, slip and snap start with s, but the second letter is different.',
    },
  },
  {
    q: { el: 'Ποια λέξη αρχίζει με τον ίδιο ήχο όπως το «black»;', en: 'Which word starts with the same sound as «black»?' },
    options: { el: ['flat', 'back', 'block', 'clap'], en: ['flat', 'back', 'block', 'clap'] },
    correct: 2,
    explanation: {
      el: 'Black και block αρχίζουν και τα δύο με bl. Το back αρχίζει μόνο με /b/, χωρίς το /l/ μετά.',
      en: 'Black and block both start with bl. Back starts with just /b/, with no /l/ after it.',
    },
  },
];
