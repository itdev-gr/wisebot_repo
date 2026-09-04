/**
 * Γ' Δημοτικού · Μαθηματικά · Στρατηγικές Προβλημάτων
 * =====================================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a child of 8–9. What the unit covers, in order:
 *   1–3   read the problem: what is asked (η ερώτηση) and what is known (τα δεδομένα)
 *   4–6   make it visible: draw it, then choose the operation
 *   7–9   the words that point to an operation, a one-step problem
 *   10–14 two-step problems that mix × with + or −, and which step comes first
 *   15–18 check the answer with the inverse operation and ask «βγάζει νόημα;»
 *
 * Distractors are the mistakes children actually make: answering a different
 * question, stopping after the first step, adding when the words say «λιγότερο».
 */
import type { QuizQuestion } from '../../../types';

export const GRADE3_MATH_WORD_PROBLEM_STRATEGIES: QuizQuestion[] = [
  // ── 1–3: what is asked, what is known ───────────────────────────────────────
  {
    q: { el: 'Πρόβλημα: «Η Ελένη έχει 24 αυτοκόλλητα. Δίνει 9 στον αδερφό της. Πόσα της μένουν;» Τι ζητάει το πρόβλημα;', en: 'Problem: “Eleni has 24 stickers. She gives 9 to her brother. How many does she have left?” What does the problem ask?' },
    options: {
      el: ['Πόσα αυτοκόλλητα είχε η Ελένη στην αρχή', 'Πόσα αυτοκόλλητα μένουν στην Ελένη', 'Πόσα αυτοκόλλητα έχει ο αδερφός της', 'Πόσα αυτοκόλλητα έχουν οι δυο τους μαζί'],
      en: ['How many stickers Eleni had at the start', 'How many stickers Eleni has left', 'How many stickers her brother has', 'How many stickers the two of them have together'],
    },
    correct: 1,
    explanation: {
      el: 'Η ερώτηση του προβλήματος είναι «πόσα της μένουν;». Πριν λύσεις ένα πρόβλημα, βρες πρώτα τι ακριβώς ρωτάει!',
      en: 'The problem\'s question is “how many does she have left?”. Before solving, always find exactly what is being asked!',
    },
  },
  {
    q: { el: 'Στο ίδιο πρόβλημα με τα αυτοκόλλητα, ποια είναι τα δεδομένα, δηλαδή αυτά που ξέρουμε;', en: 'In the same sticker problem, what are the data, that is, the things we know?' },
    options: {
      el: ['Έχει 24 και δίνει 9', 'Έχει 24 και της μένουν 15', 'Ξέρουμε μόνο ότι δίνει 9', 'Έχει 9 και δίνει 24'],
      en: ['She has 24 and gives 9', 'She has 24 and has 15 left', 'We only know she gives 9', 'She has 9 and gives 24'],
    },
    correct: 0,
    explanation: {
      el: 'Τα δεδομένα είναι οι αριθμοί που μας δίνει το πρόβλημα: 24 αυτοκόλλητα και 9 που δίνει. Το 15 είναι η απάντηση, όχι δεδομένο.',
      en: 'The data are the numbers the problem gives us: 24 stickers and the 9 she gives away. 15 is the answer, not a piece of data.',
    },
  },
  {
    q: { el: 'Πρόβλημα: «Σε ένα λεωφορείο είναι 32 παιδιά. Στη στάση κατεβαίνουν 7 και ανεβαίνουν 5.» Ποια ερώτηση ταιριάζει στο πρόβλημα;', en: 'Problem: “There are 32 children on a bus. At the stop, 7 get off and 5 get on.” Which question fits this problem?' },
    options: {
      el: ['Πόσο κοστίζει το εισιτήριο;', 'Πόσες στάσεις κάνει το λεωφορείο;', 'Πόσα παιδιά είναι τώρα στο λεωφορείο;', 'Πόσων χρονών είναι τα παιδιά;'],
      en: ['How much does the ticket cost?', 'How many stops does the bus make?', 'How many children are on the bus now?', 'How old are the children?'],
    },
    correct: 2,
    explanation: {
      el: 'Τα δεδομένα μιλούν για παιδιά που κατεβαίνουν και ανεβαίνουν, άρα η ερώτηση είναι πόσα παιδιά είναι τώρα: 32 − 7 + 5 = 30.',
      en: 'The data talk about children getting off and on, so the question is how many children are on the bus now: 32 − 7 + 5 = 30.',
    },
  },

  // ── 4–6: draw it, choose the operation ──────────────────────────────────────
  {
    q: { el: 'Πρόβλημα: «Ο Νίκος φύτεψε 4 σειρές με 6 λουλούδια στην καθεμία.» Ποια ζωγραφιά βοηθάει να το λύσεις;', en: 'Problem: “Nikos planted 4 rows with 6 flowers in each.” Which drawing helps you solve it?' },
    options: {
      el: ['4 σειρές με 6 κουκκίδες η καθεμία', 'Ένας κύκλος με τον αριθμό 10 μέσα', '4 κουκκίδες και δίπλα 6 κουκκίδες', 'Μία σειρά με 4 κουκκίδες'],
      en: ['4 rows with 6 dots in each', 'One circle with the number 10 inside', '4 dots and next to them 6 dots', 'One row with 4 dots'],
    },
    correct: 0,
    explanation: {
      el: 'Όταν ζωγραφίζουμε 4 σειρές με 6 κουκκίδες, βλέπουμε αμέσως ότι είναι 4 × 6 = 24 λουλούδια. Η ζωγραφιά δείχνει τις ίσες ομάδες.',
      en: 'When we draw 4 rows with 6 dots, we see at once that it is 4 × 6 = 24 flowers. The drawing shows the equal groups.',
    },
  },
  {
    q: { el: 'Πρόβλημα: «Η Μαρία έχει 15 καραμέλες και τις μοιράζει ίσα σε 3 φίλες της.» Ποια πράξη διαλέγεις;', en: 'Problem: “Maria has 15 sweets and shares them equally among 3 friends.” Which operation do you choose?' },
    options: { el: ['15 + 3', '15 − 3', '15 × 3', '15 ÷ 3'], en: ['15 + 3', '15 − 3', '15 × 3', '15 ÷ 3'] },
    correct: 3,
    explanation: {
      el: 'Όταν μοιράζουμε ίσα, κάνουμε διαίρεση: 15 ÷ 3 = 5 καραμέλες η καθεμία.',
      en: 'When we share equally, we divide: 15 ÷ 3 = 5 sweets each.',
    },
  },
  {
    q: { el: 'Πρόβλημα: «Στο πάρκο παίζουν 18 παιδιά. Έρχονται άλλα 7.» Ποια πράξη διαλέγεις;', en: 'Problem: “18 children are playing in the park. 7 more arrive.” Which operation do you choose?' },
    options: { el: ['18 − 7', '18 + 7', '18 × 7', '18 ÷ 7'], en: ['18 − 7', '18 + 7', '18 × 7', '18 ÷ 7'] },
    correct: 1,
    explanation: {
      el: 'Έρχονται κι άλλα παιδιά, άρα τα παιδιά γίνονται περισσότερα: πρόσθεση, 18 + 7 = 25.',
      en: 'More children arrive, so there are more children: addition, 18 + 7 = 25.',
    },
  },

  // ── 7–9: words that point to an operation, one-step problems ────────────────
  {
    q: { el: 'Πρόβλημα: «Ένα κουτί έχει 8 μπισκότα. Πόσα μπισκότα έχουν 5 τέτοια κουτιά;» Ποια πράξη διαλέγεις;', en: 'Problem: “A box has 8 biscuits. How many biscuits do 5 such boxes have?” Which operation do you choose?' },
    options: { el: ['8 + 5', '8 − 5', '8 × 5', '8 ÷ 5'], en: ['8 + 5', '8 − 5', '8 × 5', '8 ÷ 5'] },
    correct: 2,
    explanation: {
      el: '5 ίδια κουτιά με 8 μπισκότα το καθένα είναι ίσες ομάδες: πολλαπλασιασμός, 8 × 5 = 40 μπισκότα.',
      en: '5 identical boxes with 8 biscuits each are equal groups: multiplication, 8 × 5 = 40 biscuits.',
    },
  },
  {
    q: { el: 'Ποιες λέξεις σε ένα πρόβλημα μάς δείχνουν συνήθως ότι πρέπει να αφαιρέσουμε;', en: 'Which words in a problem usually tell us we need to subtract?' },
    options: {
      el: ['«συνολικά», «όλα μαζί»', '«πόσα έμειναν», «πόσα λιγότερα»', '«φορές», «το καθένα»', '«μοιράζω ίσα»'],
      en: ['“in total”, “altogether”', '“how many are left”, “how many fewer”', '“times”, “each”', '“share equally”'],
    },
    correct: 1,
    explanation: {
      el: '«Πόσα έμειναν» και «πόσα λιγότερα» δείχνουν αφαίρεση. «Συνολικά» δείχνει πρόσθεση, «φορές» πολλαπλασιασμό, «μοιράζω ίσα» διαίρεση.',
      en: '“How many are left” and “how many fewer” point to subtraction. “In total” points to addition, “times” to multiplication, “share equally” to division.',
    },
  },
  {
    q: { el: 'Η Άννα έχει 6 σελίδες με 9 αυτοκόλλητα στην καθεμία. Πόσα αυτοκόλλητα έχει;', en: 'Anna has 6 pages with 9 stickers on each. How many stickers does she have?' },
    options: { el: ['15', '45', '54', '63'], en: ['15', '45', '54', '63'] },
    correct: 2,
    explanation: {
      el: '6 σελίδες × 9 αυτοκόλλητα = 54. (Το 15 είναι 6 + 9 — πρόσθεση, όχι πολλαπλασιασμός!)',
      en: '6 pages × 9 stickers = 54. (15 is 6 + 9 — that is adding, not multiplying!)',
    },
  },

  // ── 10–14: two-step problems ────────────────────────────────────────────────
  {
    q: { el: 'Ο Δημήτρης αγόρασε 3 πακέτα με 6 μπαλόνια το καθένα. Έσκασαν 4 μπαλόνια. Πόσα μπαλόνια του έμειναν;', en: 'Dimitris bought 3 packs with 6 balloons in each. 4 balloons popped. How many balloons does he have left?' },
    options: { el: ['14', '18', '22', '5'], en: ['14', '18', '22', '5'] },
    correct: 0,
    explanation: {
      el: 'Δύο βήματα: πρώτα πόσα μπαλόνια είχε, 3 × 6 = 18. Μετά όσα έσκασαν: 18 − 4 = 14.',
      en: 'Two steps: first how many balloons he had, 3 × 6 = 18. Then the ones that popped: 18 − 4 = 14.',
    },
  },
  {
    q: { el: 'Η γιαγιά αγόρασε 4 εξάδες αυγά (6 αυγά η καθεμία) και άλλα 3 αυγά χύμα. Πόσα αυγά αγόρασε συνολικά;', en: 'Grandma bought 4 boxes of eggs (6 eggs in each) and 3 more loose eggs. How many eggs did she buy in total?' },
    options: { el: ['13', '24', '27', '21'], en: ['13', '24', '27', '21'] },
    correct: 2,
    explanation: {
      el: 'Πρώτα οι εξάδες: 4 × 6 = 24 αυγά. Μετά τα χύμα: 24 + 3 = 27 αυγά.',
      en: 'First the boxes: 4 × 6 = 24 eggs. Then the loose ones: 24 + 3 = 27 eggs.',
    },
  },
  {
    q: { el: 'Στη βιβλιοθήκη της τάξης υπάρχουν 3 ράφια με 8 βιβλία το καθένα. Η δασκάλα δάνεισε 5 βιβλία. Πόσα βιβλία έμειναν στα ράφια;', en: 'The class library has 3 shelves with 8 books on each. The teacher lent out 5 books. How many books are left on the shelves?' },
    options: { el: ['24', '29', '16', '19'], en: ['24', '29', '16', '19'] },
    correct: 3,
    explanation: {
      el: 'Πρώτα όλα τα βιβλία: 3 × 8 = 24. Μετά βγάζουμε τα δανεισμένα: 24 − 5 = 19 βιβλία.',
      en: 'First all the books: 3 × 8 = 24. Then take away the lent ones: 24 − 5 = 19 books.',
    },
  },
  {
    q: { el: 'Ο Γιάννης έχει 2 σακούλες με 7 κάστανα η καθεμία. Η Ελένη έχει 10 κάστανα. Πόσα κάστανα έχουν οι δυο τους μαζί;', en: 'Giannis has 2 bags with 7 chestnuts in each. Eleni has 10 chestnuts. How many chestnuts do the two of them have together?' },
    options: { el: ['24', '19', '14', '17'], en: ['24', '19', '14', '17'] },
    correct: 0,
    explanation: {
      el: 'Τα κάστανα του Γιάννη: 2 × 7 = 14. Μαζί με της Ελένης: 14 + 10 = 24 κάστανα.',
      en: 'Giannis\'s chestnuts: 2 × 7 = 14. Together with Eleni\'s: 14 + 10 = 24 chestnuts.',
    },
  },
  {
    q: { el: 'Πρόβλημα: «Η Σοφία αγόρασε 5 τετράδια που κοστίζουν 2 € το καθένα και πλήρωσε με ένα χαρτονόμισμα των 20 €. Πόσα ρέστα πήρε;» Ποια πράξη κάνουμε ΠΡΩΤΑ;', en: 'Problem: “Sofia bought 5 notebooks costing 2 € each and paid with a 20 € note. How much change did she get?” Which operation do we do FIRST?' },
    options: { el: ['20 − 5', '5 × 2', '20 − 2', '5 + 2'], en: ['20 − 5', '5 × 2', '20 − 2', '5 + 2'] },
    correct: 1,
    explanation: {
      el: 'Για να βρούμε τα ρέστα πρέπει πρώτα να ξέρουμε πόσο κόστισαν τα τετράδια: 5 × 2 = 10 €. Μετά: 20 − 10 = 10 € ρέστα.',
      en: 'To find the change we first need to know what the notebooks cost: 5 × 2 = 10 €. Then: 20 − 10 = 10 € change.',
    },
  },

  // ── 15–18: check with the inverse operation, does it make sense? ────────────
  {
    q: { el: 'Η Ελένη έλυσε 45 − 18 = 27. Με ποια πράξη μπορεί να ελέγξει αν είναι σωστό;', en: 'Eleni worked out 45 − 18 = 27. Which operation can she use to check it?' },
    options: { el: ['27 + 18', '45 + 18', '27 − 18', '45 × 18'], en: ['27 + 18', '45 + 18', '27 − 18', '45 × 18'] },
    correct: 0,
    explanation: {
      el: 'Η αντίστροφη πράξη της αφαίρεσης είναι η πρόσθεση: 27 + 18 = 45. Βγήκε ο αρχικός αριθμός, άρα η απάντηση είναι σωστή!',
      en: 'The inverse of subtraction is addition: 27 + 18 = 45. We get the starting number back, so the answer is right!',
    },
  },
  {
    q: { el: 'Ο Πέτρος έλυσε 6 × 7 = 42. Με ποια πράξη μπορεί να ελέγξει αν είναι σωστό;', en: 'Petros worked out 6 × 7 = 42. Which operation can he use to check it?' },
    options: { el: ['42 + 7', '42 − 6', '42 ÷ 7', '6 + 7'], en: ['42 + 7', '42 − 6', '42 ÷ 7', '6 + 7'] },
    correct: 2,
    explanation: {
      el: 'Η αντίστροφη πράξη του πολλαπλασιασμού είναι η διαίρεση: 42 ÷ 7 = 6. Βγήκε το 6, άρα το 42 είναι σωστό.',
      en: 'The inverse of multiplication is division: 42 ÷ 7 = 6. We get 6 back, so 42 is correct.',
    },
  },
  {
    q: { el: 'Η Μαρία έλυσε 36 + 27 και βρήκε 53. Ελέγχει με αφαίρεση: 53 − 27 = 26. Τι της δείχνει ο έλεγχος;', en: 'Maria worked out 36 + 27 and got 53. She checks by subtracting: 53 − 27 = 26. What does the check show her?' },
    options: {
      el: ['Ότι η απάντηση 53 είναι σωστή', 'Ότι έκανε λάθος· το σωστό είναι 63', 'Ότι έκανε λάθος· το σωστό είναι 9', 'Ότι έπρεπε να πολλαπλασιάσει'],
      en: ['That the answer 53 is correct', 'That she made a mistake; the right answer is 63', 'That she made a mistake; the right answer is 9', 'That she should have multiplied'],
    },
    correct: 1,
    explanation: {
      el: 'Ο έλεγχος έδωσε 26, όχι 36, άρα κάτι πήγε στραβά. Ξαναμετράμε: 36 + 27 = 63. Έλεγχος: 63 − 27 = 36, σωστά!',
      en: 'The check gave 26, not 36, so something went wrong. We redo it: 36 + 27 = 63. Check: 63 − 27 = 36, correct!',
    },
  },
  {
    q: { el: 'Πρόβλημα: «Ένας σκύλος ζυγίζει 12 κιλά. Ένα γατάκι ζυγίζει 9 κιλά λιγότερο. Πόσα κιλά ζυγίζει το γατάκι;» Ο Νίκος απάντησε 21 κιλά. Τι πήγε στραβά;', en: 'Problem: “A dog weighs 12 kilos. A kitten weighs 9 kilos less. How many kilos does the kitten weigh?” Nikos answered 21 kilos. What went wrong?' },
    options: {
      el: ['Τίποτα, η απάντηση είναι σωστή', 'Έπρεπε να πολλαπλασιάσει: 12 × 9', 'Έπρεπε να διαιρέσει: 12 ÷ 9', 'Πρόσθεσε αντί να αφαιρέσει· το σωστό είναι 3 κιλά'],
      en: ['Nothing, the answer is correct', 'He should have multiplied: 12 × 9', 'He should have divided: 12 ÷ 9', 'He added instead of subtracting; the right answer is 3 kilos'],
    },
    correct: 3,
    explanation: {
      el: '«Λιγότερο» σημαίνει αφαίρεση: 12 − 9 = 3 κιλά. Ένα γατάκι πιο βαρύ από σκύλο δεν βγάζει νόημα — πάντα ρωτάμε «είναι λογική η απάντηση;».',
      en: '“Less” means subtraction: 12 − 9 = 3 kilos. A kitten heavier than a dog makes no sense — always ask “is the answer reasonable?”.',
    },
  },
];
