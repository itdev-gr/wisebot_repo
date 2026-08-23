/**
 * Ε' Δημοτικού · Μαθηματικά · Δεδομένα και πιθανότητες
 * ====================================================
 * Original questions for a child of 10–11 (curriculum topics only — nothing from ebooks.edu.gr).
 *
 * What the unit covers, in order:
 *   1–3   collecting data: asking a question, reading a tally/frequency table, totals
 *   4–6   bar graphs: what the bar height means, comparing bars, reading a scale that counts in 2s
 *   7–8   line graphs: when to use one, where the line rises the most
 *   9–12  the mean (average): the rule, computing it, a decimal mean, working backwards to the total
 *   13–15 certain / likely / unlikely / impossible
 *   16–18 simple probability as "x in y": a coin, a bag of sweets, an even number on a die
 */
import type { QuizQuestion } from '../../../types';

export const GRADE5_MATH_DATA_AND_PROBABILITY: QuizQuestion[] = [
  // ── 1–3: collecting data ──────────────────────────────────────────────────
  {
    q: { el: 'Η Ελένη ρωτάει όλους τους συμμαθητές της ποιο φρούτο τους αρέσει πιο πολύ και σημειώνει τις απαντήσεις. Τι κάνει;', en: 'Eleni asks all her classmates which fruit they like best and writes down the answers. What is she doing?' },
    options: { el: ['Συλλέγει δεδομένα', 'Λύνει ένα πρόβλημα με διαίρεση', 'Μετράει το ύψος τους', 'Φτιάχνει μια προπαίδεια'], en: ['Collecting data', 'Solving a division problem', 'Measuring their height', 'Making a times table'] },
    correct: 0,
    explanation: {
      el: 'Όταν ρωτάμε και καταγράφουμε απαντήσεις, συλλέγουμε δεδομένα. Μετά μπορούμε να τα δείξουμε σε πίνακα ή γράφημα.',
      en: 'When we ask questions and write down the answers, we are collecting data. Then we can show it in a table or a graph.',
    },
  },
  {
    q: { el: 'Ο πίνακας δείχνει το αγαπημένο χρώμα της τάξης: μπλε 7, κόκκινο 5, πράσινο 9, κίτρινο 3. Ποιο χρώμα διάλεξαν τα περισσότερα παιδιά;', en: 'The table shows the favourite colour of the class: blue 7, red 5, green 9, yellow 3. Which colour did the most children choose?' },
    options: { el: ['Μπλε', 'Κόκκινο', 'Πράσινο', 'Κίτρινο'], en: ['Blue', 'Red', 'Green', 'Yellow'] },
    correct: 2,
    explanation: {
      el: 'Κοιτάμε τον μεγαλύτερο αριθμό στον πίνακα: το 9. Άρα το πράσινο το διάλεξαν τα περισσότερα παιδιά.',
      en: 'We look for the biggest number in the table: 9. So green was chosen by the most children.',
    },
  },
  {
    q: { el: 'Στον ίδιο πίνακα (μπλε 7, κόκκινο 5, πράσινο 9, κίτρινο 3), πόσα παιδιά απάντησαν συνολικά;', en: 'In the same table (blue 7, red 5, green 9, yellow 3), how many children answered in total?' },
    options: { el: ['21', '24', '25', '9'], en: ['21', '24', '25', '9'] },
    correct: 1,
    explanation: {
      el: 'Προσθέτουμε όλες τις απαντήσεις: 7 + 5 + 9 + 3 = 24 παιδιά.',
      en: 'We add up all the answers: 7 + 5 + 9 + 3 = 24 children.',
    },
  },

  // ── 4–6: bar graphs ───────────────────────────────────────────────────────
  {
    q: { el: 'Σε ένα ραβδόγραμμα, τι μας δείχνει το ύψος κάθε ράβδου;', en: 'In a bar graph, what does the height of each bar show us?' },
    options: { el: ['Το όνομα της κατηγορίας', 'Πόσο μεγάλος είναι ο αριθμός που μετράμε', 'Το χρώμα που διαλέξαμε', 'Την ημέρα που κάναμε τη μέτρηση'], en: ['The name of the category', 'How big the number we are counting is', 'The colour we chose', 'The day we did the counting'] },
    correct: 1,
    explanation: {
      el: 'Όσο πιο ψηλή είναι η ράβδος, τόσο πιο μεγάλος είναι ο αριθμός. Το όνομα της κατηγορίας το γράφουμε κάτω από τη ράβδο.',
      en: 'The taller the bar, the bigger the number. The name of the category is written under the bar.',
    },
  },
  {
    q: { el: 'Ένα ραβδόγραμμα δείχνει πόσα βιβλία διάβασε κάθε παιδί το καλοκαίρι: Μαρία 6, Γιώργος 4, Ελένη 8, Νίκος 5. Πόσα περισσότερα βιβλία διάβασε η Ελένη από τον Γιώργο;', en: 'A bar graph shows how many books each child read in the summer: Maria 6, Giorgos 4, Eleni 8, Nikos 5. How many more books did Eleni read than Giorgos?' },
    options: { el: ['2', '12', '4', '3'], en: ['2', '12', '4', '3'] },
    correct: 2,
    explanation: {
      el: 'Για να βρούμε «πόσα περισσότερα» αφαιρούμε: 8 − 4 = 4 βιβλία. (Το 12 είναι 8 + 4 — πρόσθεση, όχι σύγκριση!)',
      en: 'To find “how many more” we subtract: 8 − 4 = 4 books. (12 is 8 + 4 — that is adding, not comparing!)',
    },
  },
  {
    q: { el: 'Στον άξονα ενός ραβδογράμματος οι αριθμοί πάνε ανά 2: 0, 2, 4, 6, 8, 10. Η ράβδος της Δευτέρας φτάνει στην 4η γραμμή πάνω από το 0. Πόσο δείχνει;', en: 'On the axis of a bar graph the numbers go up in 2s: 0, 2, 4, 6, 8, 10. The Monday bar reaches the 4th line above 0. What does it show?' },
    options: { el: ['4', '8', '6', '10'], en: ['4', '8', '6', '10'] },
    correct: 1,
    explanation: {
      el: 'Κάθε γραμμή αξίζει 2. Η 4η γραμμή είναι 4 × 2 = 8. Πάντα κοιτάμε τι αξίζει κάθε γραμμή πριν διαβάσουμε τη ράβδο!',
      en: 'Each line is worth 2. The 4th line is 4 × 2 = 8. Always check what each line is worth before reading the bar!',
    },
  },

  // ── 7–8: line graphs ──────────────────────────────────────────────────────
  {
    q: { el: 'Θέλουμε να δείξουμε πώς άλλαξε η θερμοκρασία μέρα με τη μέρα σε μία εβδομάδα. Ποιο γράφημα ταιριάζει καλύτερα;', en: 'We want to show how the temperature changed day by day over a week. Which graph fits best?' },
    options: { el: ['Εικονόγραμμα', 'Γράφημα γραμμής', 'Πίνακας πολλαπλασιασμού', 'Κυκλικό διάγραμμα'], en: ['Pictogram', 'Line graph', 'Multiplication table', 'Pie chart'] },
    correct: 1,
    explanation: {
      el: 'Το γράφημα γραμμής δείχνει πώς αλλάζει κάτι με τον χρόνο. Ενώνουμε τα σημεία και βλέπουμε αν η γραμμή ανεβαίνει ή κατεβαίνει.',
      en: 'A line graph shows how something changes over time. We join the points and see whether the line goes up or down.',
    },
  },
  {
    q: { el: 'Ένα γράφημα γραμμής δείχνει τη θερμοκρασία: Δευτέρα 18°, Τρίτη 21°, Τετάρτη 19°, Πέμπτη 24°. Ανάμεσα σε ποιες μέρες η γραμμή ανεβαίνει πιο πολύ;', en: 'A line graph shows the temperature: Monday 18°, Tuesday 21°, Wednesday 19°, Thursday 24°. Between which days does the line rise the most?' },
    options: { el: ['Δευτέρα – Τρίτη', 'Τρίτη – Τετάρτη', 'Τετάρτη – Πέμπτη', 'Ανεβαίνει το ίδιο παντού'], en: ['Monday – Tuesday', 'Tuesday – Wednesday', 'Wednesday – Thursday', 'It rises the same everywhere'] },
    correct: 2,
    explanation: {
      el: 'Δευτέρα → Τρίτη: +3. Τρίτη → Τετάρτη: −2 (κατεβαίνει). Τετάρτη → Πέμπτη: +5. Η μεγαλύτερη άνοδος είναι από Τετάρτη σε Πέμπτη.',
      en: 'Monday → Tuesday: +3. Tuesday → Wednesday: −2 (it goes down). Wednesday → Thursday: +5. The biggest rise is from Wednesday to Thursday.',
    },
  },

  // ── 9–12: the mean (average) ──────────────────────────────────────────────
  {
    q: { el: 'Πώς βρίσκουμε τον μέσο όρο τριών αριθμών;', en: 'How do we find the mean (average) of three numbers?' },
    options: { el: ['Τους προσθέτουμε και διαιρούμε με το 3', 'Παίρνουμε τον μεγαλύτερο', 'Τους προσθέτουμε και πολλαπλασιάζουμε με το 3', 'Παίρνουμε τον μεσαίο'], en: ['Add them and divide by 3', 'Take the biggest one', 'Add them and multiply by 3', 'Take the middle one'] },
    correct: 0,
    explanation: {
      el: 'Μέσος όρος = άθροισμα ÷ πλήθος. Για 3 αριθμούς: τους προσθέτουμε και διαιρούμε με το 3.',
      en: 'Mean = total ÷ how many. For 3 numbers: add them up and divide by 3.',
    },
  },
  {
    q: { el: 'Ποιος είναι ο μέσος όρος των αριθμών 4, 6 και 8;', en: 'What is the mean of the numbers 4, 6 and 8?' },
    options: { el: ['18', '6', '8', '5'], en: ['18', '6', '8', '5'] },
    correct: 1,
    explanation: {
      el: '4 + 6 + 8 = 18 και 18 ÷ 3 = 6. Το 18 είναι μόνο το άθροισμα — δεν ξεχνάμε τη διαίρεση!',
      en: '4 + 6 + 8 = 18 and 18 ÷ 3 = 6. 18 is only the total — do not forget to divide!',
    },
  },
  {
    q: { el: 'Ο Γιώργος πήρε 7, 9, 8 και 10 σε τέσσερα τεστ. Ποιος είναι ο μέσος όρος του;', en: 'Giorgos scored 7, 9, 8 and 10 in four tests. What is his mean score?' },
    options: { el: ['8', '34', '9', '8,5'], en: ['8', '34', '9', '8.5'] },
    correct: 3,
    explanation: {
      el: '7 + 9 + 8 + 10 = 34 και 34 ÷ 4 = 8,5. Ο μέσος όρος μπορεί να είναι δεκαδικός αριθμός.',
      en: '7 + 9 + 8 + 10 = 34 and 34 ÷ 4 = 8.5. The mean can be a decimal number.',
    },
  },
  {
    q: { el: 'Η Μαρία ξόδεψε στο κυλικείο κατά μέσο όρο 2 € τη μέρα για 5 μέρες. Πόσα ευρώ ξόδεψε συνολικά;', en: 'Maria spent an average of €2 a day at the school canteen for 5 days. How much did she spend in total?' },
    options: { el: ['10 €', '7 €', '2 €', '25 €'], en: ['€10', '€7', '€2', '€25'] },
    correct: 0,
    explanation: {
      el: 'Αφού μέσος όρος = σύνολο ÷ μέρες, τότε σύνολο = μέσος όρος × μέρες: 2 × 5 = 10 €.',
      en: 'Since mean = total ÷ days, the total = mean × days: 2 × 5 = €10.',
    },
  },

  // ── 13–15: certain, likely, unlikely, impossible ──────────────────────────
  {
    q: { el: 'Ρίχνεις ένα κανονικό ζάρι με τους αριθμούς 1 έως 6. Πόσο πιθανό είναι να φέρεις 7;', en: 'You roll a normal die with the numbers 1 to 6. How likely is it that you roll a 7?' },
    options: { el: ['Βέβαιο', 'Πιθανό', 'Απίθανο', 'Αδύνατο'], en: ['Certain', 'Likely', 'Unlikely', 'Impossible'] },
    correct: 3,
    explanation: {
      el: 'Το ζάρι δεν έχει καθόλου το 7, άρα δεν μπορεί να γίνει ποτέ: είναι αδύνατο. «Απίθανο» λέμε κάτι που μπορεί να γίνει, αλλά σπάνια.',
      en: 'The die has no 7 on it, so it can never happen: it is impossible. “Unlikely” means it can happen, but rarely.',
    },
  },
  {
    q: { el: 'Αύριο το πρωί θα βγει ο ήλιος. Αυτό είναι…', en: 'Tomorrow morning the sun will rise. This is…' },
    options: { el: ['Βέβαιο', 'Πιθανό', 'Απίθανο', 'Αδύνατο'], en: ['Certain', 'Likely', 'Unlikely', 'Impossible'] },
    correct: 0,
    explanation: {
      el: 'Ο ήλιος βγαίνει κάθε μέρα, χωρίς εξαίρεση. Κάτι που γίνεται σίγουρα το λέμε βέβαιο.',
      en: 'The sun rises every day, without exception. Something that definitely happens is called certain.',
    },
  },
  {
    q: { el: 'Σε ένα σακούλι υπάρχουν 9 κόκκινες μπίλιες και 1 μπλε. Ο Νίκος βγάζει μία χωρίς να κοιτάξει. Το να βγάλει τη μπλε είναι…', en: 'A bag has 9 red marbles and 1 blue one. Nikos takes one out without looking. Taking the blue one is…' },
    options: { el: ['Βέβαιο', 'Πιθανό', 'Απίθανο', 'Αδύνατο'], en: ['Certain', 'Likely', 'Unlikely', 'Impossible'] },
    correct: 2,
    explanation: {
      el: 'Υπάρχει μόνο 1 μπλε ανάμεσα σε 10 μπίλιες, άρα είναι απίθανο — αλλά όχι αδύνατο, γιατί η μπλε είναι μέσα στο σακούλι!',
      en: 'There is only 1 blue among 10 marbles, so it is unlikely — but not impossible, because the blue one is in the bag!',
    },
  },

  // ── 16–18: simple probability ─────────────────────────────────────────────
  {
    q: { el: 'Ρίχνεις ένα νόμισμα. Ποια είναι η πιθανότητα να έρθει κορώνα;', en: 'You flip a coin. What is the probability that it lands on heads?' },
    options: { el: ['1 στα 4', '1 στα 2', '2 στα 2', '1 στα 10'], en: ['1 in 4', '1 in 2', '2 in 2', '1 in 10'] },
    correct: 1,
    explanation: {
      el: 'Το νόμισμα έχει 2 όψεις (κορώνα και γράμματα) και η κορώνα είναι η 1 από αυτές: 1 στα 2, δηλαδή μισές-μισές.',
      en: 'A coin has 2 sides (heads and tails) and heads is 1 of them: 1 in 2, a 50-50 chance.',
    },
  },
  {
    q: { el: 'Ένα σακουλάκι έχει 3 πράσινα και 5 κίτρινα καραμελάκια. Η Ελένη τραβάει ένα χωρίς να κοιτάξει. Ποια είναι η πιθανότητα να είναι πράσινο;', en: 'A small bag has 3 green and 5 yellow sweets. Eleni picks one without looking. What is the probability that it is green?' },
    options: { el: ['3 στα 5', '5 στα 8', '3 στα 8', '1 στα 3'], en: ['3 in 5', '5 in 8', '3 in 8', '1 in 3'] },
    correct: 2,
    explanation: {
      el: 'Συνολικά 3 + 5 = 8 καραμελάκια και τα 3 είναι πράσινα: 3 στα 8. Ο δεύτερος αριθμός είναι πάντα το σύνολο, όχι τα κίτρινα.',
      en: 'There are 3 + 5 = 8 sweets in total and 3 are green: 3 in 8. The second number is always the total, not the yellows.',
    },
  },
  {
    q: { el: 'Ρίχνεις ένα ζάρι. Ποια είναι η πιθανότητα να φέρεις ζυγό αριθμό (2, 4 ή 6);', en: 'You roll a die. What is the probability of rolling an even number (2, 4 or 6)?' },
    options: { el: ['2 στα 6', '3 στα 6', '1 στα 6', '6 στα 3'], en: ['2 in 6', '3 in 6', '1 in 6', '6 in 3'] },
    correct: 1,
    explanation: {
      el: 'Το ζάρι έχει 6 αριθμούς και οι 3 από αυτούς είναι ζυγοί (2, 4, 6): 3 στα 6. Είναι το ίδιο με 1 στα 2 — μισές φορές!',
      en: 'A die has 6 numbers and 3 of them are even (2, 4, 6): 3 in 6. That is the same as 1 in 2 — half the time!',
    },
  },
];
