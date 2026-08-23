/**
 * ΣΤ' Δημοτικού · Αγγλικά · Ψώνια (Shopping)
 * =======================================================================
 * Original questions for a child of 11–12 learning English (curriculum topics
 * only — nothing from ebooks.edu.gr). What the unit covers, in order:
 *   1–3   the supermarket: where we buy food, the trolley/basket, the checkout
 *   4–5   the mall: shops, the shop assistant
 *   6–8   clothes: trousers, jacket, "Can I try it on?"
 *   9–12  prices and asking «How much is it? / How much are they?», cheap vs expensive
 *   13–15 some / any in offers, questions and negatives
 *   16–18 countable / uncountable nouns, How many / How much
 */
import type { QuizQuestion } from '../../../types';

export const GRADE6_ENGLISH_SHOPPING: QuizQuestion[] = [
  // ── 1–3: the supermarket ───────────────────────────────────────────────────
  {
    q: { el: 'Πού αγοράζουμε γάλα, ψωμί και φρούτα; Διάλεξε τη σωστή λέξη.', en: 'Where do we buy milk, bread and fruit? Choose the right word.' },
    options: { el: ['library', 'hospital', 'supermarket', 'school'], en: ['library', 'hospital', 'supermarket', 'school'] },
    correct: 2,
    explanation: {
      el: 'Στο supermarket (σουπερμάρκετ) αγοράζουμε τρόφιμα. Library είναι η βιβλιοθήκη, hospital το νοσοκομείο.',
      en: 'We buy food at the supermarket. A library is for books, a hospital is for sick people.',
    },
  },
  {
    q: { el: 'Πώς λέμε στα αγγλικά το «καρότσι του σουπερμάρκετ»;', en: 'How do you say «καρότσι του σουπερμάρκετ» in English?' },
    options: { el: ['trolley', 'bag', 'box', 'shelf'], en: ['trolley', 'bag', 'box', 'shelf'] },
    correct: 0,
    explanation: {
      el: 'Το καρότσι είναι trolley. Το μικρό καλάθι λέγεται basket και το ράφι shelf.',
      en: 'The trolley is the cart you push. A small basket is a basket, and a shelf holds the products.',
    },
  },
  {
    q: { el: 'Ο Νίκος τελείωσε τα ψώνια του. Πού πηγαίνει για να πληρώσει;', en: 'Nikos has finished shopping. Where does he go to pay?' },
    options: { el: ['to the entrance', 'to the car park', 'to the shelves', 'to the checkout'], en: ['to the entrance', 'to the car park', 'to the shelves', 'to the checkout'] },
    correct: 3,
    explanation: {
      el: 'Πληρώνουμε στο checkout (ταμείο). Entrance είναι η είσοδος, car park το πάρκινγκ.',
      en: 'We pay at the checkout. The entrance is where we go in, the car park is for cars.',
    },
  },

  // ── 4–5: the mall ──────────────────────────────────────────────────────────
  {
    q: { el: 'Ένα μεγάλο κτίριο με πολλά μαγαζιά, καφετέριες και σινεμά λέγεται…', en: 'A big building with lots of shops, cafés and a cinema is called a…' },
    options: { el: ['market stall', 'shopping mall', 'bakery', 'kiosk'], en: ['market stall', 'shopping mall', 'bakery', 'kiosk'] },
    correct: 1,
    explanation: {
      el: 'Το shopping mall (εμπορικό κέντρο) έχει πολλά μαγαζιά μαζί. Το bakery είναι ο φούρνος, το kiosk το περίπτερο.',
      en: 'A shopping mall has many shops under one roof. A bakery sells bread, a kiosk is a tiny shop.',
    },
  },
  {
    q: { el: 'Πώς λέγεται ο άνθρωπος που δουλεύει σε ένα μαγαζί και σε βοηθάει;', en: 'What do we call the person who works in a shop and helps you?' },
    options: { el: ['customer', 'driver', 'shop assistant', 'teacher'], en: ['customer', 'driver', 'shop assistant', 'teacher'] },
    correct: 2,
    explanation: {
      el: 'Ο shop assistant είναι ο υπάλληλος του μαγαζιού. Ο customer είναι ο πελάτης — δηλαδή εσύ!',
      en: 'The shop assistant works in the shop. The customer is the person who buys — that is you!',
    },
  },

  // ── 6–8: clothes ───────────────────────────────────────────────────────────
  {
    q: { el: 'Πώς λέμε «παντελόνι» στα αγγλικά;', en: 'How do you say «παντελόνι» in English?' },
    options: { el: ['trousers', 'skirt', 'socks', 'scarf'], en: ['trousers', 'skirt', 'socks', 'scarf'] },
    correct: 0,
    explanation: {
      el: 'Παντελόνι = trousers (πάντα με -s!). Skirt είναι η φούστα, socks οι κάλτσες, scarf το κασκόλ.',
      en: 'Trousers always ends in -s. A skirt is for the legs too, socks go on feet, a scarf goes round the neck.',
    },
  },
  {
    q: { el: 'Κάνει κρύο. Η Ελένη πηγαίνει στο μαγαζί για να αγοράσει ένα ζεστό…', en: 'It is cold. Eleni goes to the shop to buy a warm…' },
    options: { el: ['T-shirt', 'swimsuit', 'cap', 'jacket'], en: ['T-shirt', 'swimsuit', 'cap', 'jacket'] },
    correct: 3,
    explanation: {
      el: 'Όταν κρυώνουμε φοράμε jacket (μπουφάν). Το T-shirt και το swimsuit (μαγιό) είναι για το καλοκαίρι.',
      en: 'A jacket keeps us warm. A T-shirt and a swimsuit are for summer, and a cap is just for the head.',
    },
  },
  {
    q: { el: 'Ο Γιώργος λέει στο μαγαζί: «Can I try it on?». Τι θέλει να κάνει;', en: 'Giorgos says in the shop: «Can I try it on?». What does he want to do?' },
    options: { el: ['να το πληρώσει', 'να το δοκιμάσει', 'να το επιστρέψει', 'να το πλύνει'], en: ['to pay for it', 'to try it on', 'to return it', 'to wash it'] },
    correct: 1,
    explanation: {
      el: '«Try on» σημαίνει δοκιμάζω ένα ρούχο για να δω αν μου κάνει. Το δοκιμαστήριο λέγεται fitting room.',
      en: '«Try on» means to put a piece of clothing on to see if it fits. You do it in the fitting room.',
    },
  },

  // ── 9–12: prices and asking the price ─────────────────────────────────────
  {
    q: { el: 'Η τιμή γράφει €2.50. Πώς τη διαβάζουμε στα αγγλικά;', en: 'The price tag says €2.50. How do we read it in English?' },
    options: { el: ['two euros and five', 'twenty-five euros', 'two euros fifty', 'two hundred and fifty euros'], en: ['two euros and five', 'twenty-five euros', 'two euros fifty', 'two hundred and fifty euros'] },
    correct: 2,
    explanation: {
      el: '€2.50 = two euros fifty (δύο ευρώ και πενήντα λεπτά). Η τελεία χωρίζει τα ευρώ από τα λεπτά.',
      en: '€2.50 is read «two euros fifty». The dot separates the euros from the cents.',
    },
  },
  {
    q: { el: 'Η Μαρία λέει: «This bag is too expensive!». Τι σημαίνει expensive;', en: 'Maria says: «This bag is too expensive!». What does expensive mean?' },
    options: { el: ['ακριβό', 'φθηνό', 'μεγάλο', 'όμορφο'], en: ['costs a lot', 'costs very little', 'big', 'beautiful'] },
    correct: 0,
    explanation: {
      el: 'Expensive = ακριβό. Το αντίθετο είναι cheap = φθηνό.',
      en: 'Expensive means it costs a lot of money. The opposite is cheap.',
    },
  },
  {
    q: { el: 'Θέλεις να μάθεις την τιμή ενός βιβλίου. Τι ρωτάς;', en: 'You want to know the price of a book. What do you ask?' },
    options: { el: ['How old is it?', 'How many is it?', 'What time is it?', 'How much is it?'], en: ['How old is it?', 'How many is it?', 'What time is it?', 'How much is it?'] },
    correct: 3,
    explanation: {
      el: 'Για την τιμή ρωτάμε «How much is it?» (Πόσο κάνει;). Το «How many» είναι για να μετρήσουμε πράγματα, όχι για τιμές.',
      en: 'To ask the price we say «How much is it?». «How many» is for counting things, not for prices.',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: «How much ___ these shoes?»', en: 'Complete: «How much ___ these shoes?»' },
    options: { el: ['is', 'are', 'do', 'has'], en: ['is', 'are', 'do', 'has'] },
    correct: 1,
    explanation: {
      el: 'Τα shoes είναι πληθυντικός, άρα λέμε «How much are…». Για ένα πράγμα λέμε «How much is…».',
      en: 'Shoes is plural, so we say «How much are…». For one thing we say «How much is…».',
    },
  },

  // ── 13–15: some / any ──────────────────────────────────────────────────────
  {
    q: { el: 'Συμπλήρωσε: «I\'d like ___ apples, please.»', en: 'Complete: «I\'d like ___ apples, please.»' },
    options: { el: ['some', 'any', 'a', 'much'], en: ['some', 'any', 'a', 'much'] },
    correct: 0,
    explanation: {
      el: 'Στις καταφατικές προτάσεις βάζουμε some. Το «a» πάει μόνο με ενικό (an apple), όχι με apples.',
      en: 'In positive sentences we use some. «A» only goes with one thing (an apple), not with apples.',
    },
  },
  {
    q: { el: 'Συμπλήρωσε την ερώτηση: «Have we got ___ milk at home?»', en: 'Complete the question: «Have we got ___ milk at home?»' },
    options: { el: ['a', 'many', 'any', 'the'], en: ['a', 'many', 'any', 'the'] },
    correct: 2,
    explanation: {
      el: 'Στις ερωτήσεις χρησιμοποιούμε any: «Have we got any milk?». Το «a» δεν πάει με το milk, γιατί δεν μετριέται.',
      en: 'In questions we use any: «Have we got any milk?». We cannot say «a milk» because milk is not counted.',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: «There isn\'t ___ bread, so we need to go to the bakery.»', en: 'Complete: «There isn\'t ___ bread, so we need to go to the bakery.»' },
    options: { el: ['some', 'any', 'a', 'many'], en: ['some', 'any', 'a', 'many'] },
    correct: 1,
    explanation: {
      el: 'Στις αρνητικές προτάσεις (isn\'t, haven\'t) βάζουμε any. Το some το κρατάμε για τις καταφατικές.',
      en: 'In negative sentences (isn\'t, haven\'t) we use any. Some is for positive sentences.',
    },
  },

  // ── 16–18: countable / uncountable ─────────────────────────────────────────
  {
    q: { el: 'Ποια από αυτές τις λέξεις δεν μπορούμε να τη μετρήσουμε (uncountable);', en: 'Which of these words is uncountable (we cannot count it)?' },
    options: { el: ['bananas', 'eggs', 'tomatoes', 'rice'], en: ['bananas', 'eggs', 'tomatoes', 'rice'] },
    correct: 3,
    explanation: {
      el: 'Το rice (ρύζι) δεν μετριέται: δεν λέμε «two rices». Μπανάνες, αυγά και ντομάτες μετριούνται μία μία.',
      en: 'Rice is uncountable: we never say «two rices». Bananas, eggs and tomatoes can be counted one by one.',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: «How ___ bananas do you want?»', en: 'Complete: «How ___ bananas do you want?»' },
    options: { el: ['much', 'long', 'many', 'often'], en: ['much', 'long', 'many', 'often'] },
    correct: 2,
    explanation: {
      el: 'Οι μπανάνες μετριούνται, άρα ρωτάμε «How many». Το «How much» το βάζουμε με τα αμέτρητα (How much rice?).',
      en: 'Bananas can be counted, so we ask «How many». We use «How much» with uncountable nouns (How much rice?).',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: «We haven\'t got ___ sugar, but we have got ___ eggs.»', en: 'Complete: «We haven\'t got ___ sugar, but we have got ___ eggs.»' },
    options: { el: ['any / some', 'some / any', 'a / some', 'any / a'], en: ['any / some', 'some / any', 'a / some', 'any / a'] },
    correct: 0,
    explanation: {
      el: 'Το πρώτο μέρος είναι αρνητικό (haven\'t) → any. Το δεύτερο είναι καταφατικό (have got) → some. Τα eggs είναι πληθυντικός, άρα όχι «a».',
      en: 'The first part is negative (haven\'t) → any. The second is positive (have got) → some. Eggs is plural, so not «a».',
    },
  },
];
