/**
 * ΣΤ' Δημοτικού · Μαθηματικά · Δεδομένα και γραφήματα
 * ====================================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a child of 11–12. All data is given in words, since the quiz
 * has no pictures; the child must "see" the chart from the description.
 *
 * What the unit covers, in order:
 *   1–3   bar charts: what a bar shows, tallest bar, difference between bars
 *   4–6   pictograms: the key (one symbol = N), half symbols, drawing one
 *   7–9   line charts: biggest rise, a falling line, continuing a pattern
 *   10–12 pie charts: quarter = 25 %, half of a class, the missing slice
 *   13–14 reading tables: smallest value, total of a row
 *   15–16 drawing conclusions: what the data really says, a too-small survey
 *   17–18 average (μέσος όρος): add up, then divide by how many
 *
 * Distractors are real child mistakes: counting symbols instead of using the key,
 * adding instead of subtracting, forgetting to divide for the average.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE6_MATH_DATA_AND_GRAPHS: QuizQuestion[] = [
  // ── 1–3: bar charts ────────────────────────────────────────────────────────
  {
    q: { el: 'Σε ένα ραβδόγραμμα, τι μας δείχνει το ύψος κάθε ράβδου;', en: 'In a bar chart, what does the height of each bar show?' },
    options: { el: ['Το χρώμα της κατηγορίας', 'Τη σειρά που μετρήσαμε', 'Πόσο μεγάλη είναι η ποσότητα', 'Πόσες κατηγορίες υπάρχουν'], en: ['The colour of the category', 'The order we counted in', 'How big the amount is', 'How many categories there are'] },
    correct: 2,
    explanation: {
      el: 'Όσο πιο ψηλή είναι η ράβδος, τόσο μεγαλύτερη είναι η ποσότητα. Το διαβάζουμε στον κάθετο άξονα.',
      en: 'The taller the bar, the bigger the amount. We read it on the vertical axis.',
    },
  },
  {
    q: { el: 'Ένα ραβδόγραμμα δείχνει τα αγαπημένα φρούτα μιας τάξης: μήλο 8, μπανάνα 12, πορτοκάλι 5, φράουλα 10. Ποια ράβδος είναι η πιο ψηλή;', en: 'A bar chart shows a class\'s favourite fruits: apple 8, banana 12, orange 5, strawberry 10. Which bar is the tallest?' },
    options: { el: ['Μήλο', 'Μπανάνα', 'Πορτοκάλι', 'Φράουλα'], en: ['Apple', 'Banana', 'Orange', 'Strawberry'] },
    correct: 1,
    explanation: {
      el: 'Η πιο ψηλή ράβδος είναι αυτή με τον μεγαλύτερο αριθμό. Το 12 είναι το μεγαλύτερο, άρα η μπανάνα.',
      en: 'The tallest bar is the one with the biggest number. 12 is the biggest, so it is the banana.',
    },
  },
  {
    q: { el: 'Στο ίδιο ραβδόγραμμα (μπανάνα 12, πορτοκάλι 5), πόσα περισσότερα παιδιά διάλεξαν μπανάνα από πορτοκάλι;', en: 'In the same bar chart (banana 12, orange 5), how many more children chose banana than orange?' },
    options: { el: ['7', '17', '5', '8'], en: ['7', '17', '5', '8'] },
    correct: 0,
    explanation: {
      el: 'Για το «πόσα περισσότερα» κάνουμε αφαίρεση: 12 − 5 = 7. (Το 17 είναι πρόσθεση — λάθος πράξη!)',
      en: 'For “how many more” we subtract: 12 − 5 = 7. (17 is adding — the wrong operation!)',
    },
  },

  // ── 4–6: pictograms ────────────────────────────────────────────────────────
  {
    q: { el: 'Σε ένα εικονόγραμμα, κάθε σύμβολο βιβλίου σημαίνει 5 βιβλία. Ο Νίκος έχει 4 σύμβολα. Πόσα βιβλία διάβασε;', en: 'In a pictogram, each book symbol stands for 5 books. Nikos has 4 symbols. How many books did he read?' },
    options: { el: ['4', '9', '25', '20'], en: ['4', '9', '25', '20'] },
    correct: 3,
    explanation: {
      el: 'Κοιτάμε πάντα το κλειδί: 1 σύμβολο = 5 βιβλία. 4 × 5 = 20 βιβλία.',
      en: 'Always check the key: 1 symbol = 5 books. 4 × 5 = 20 books.',
    },
  },
  {
    q: { el: 'Σε ένα εικονόγραμμα, κάθε σύμβολο σημαίνει 10 παιδιά. Την Τρίτη υπάρχουν 2 ολόκληρα σύμβολα και 1 μισό. Πόσα παιδιά ήρθαν την Τρίτη;', en: 'In a pictogram, each symbol stands for 10 children. On Tuesday there are 2 whole symbols and 1 half symbol. How many children came on Tuesday?' },
    options: { el: ['20', '25', '30', '3'], en: ['20', '25', '30', '3'] },
    correct: 1,
    explanation: {
      el: 'Το μισό σύμβολο αξίζει τα μισά: 5 παιδιά. 10 + 10 + 5 = 25 παιδιά.',
      en: 'A half symbol is worth half: 5 children. 10 + 10 + 5 = 25 children.',
    },
  },
  {
    q: { el: 'Η Ελένη φτιάχνει εικονόγραμμα όπου 1 σύμβολο = 10 σελίδες. Διάβασε 35 σελίδες. Πόσα σύμβολα θα ζωγραφίσει;', en: 'Eleni is making a pictogram where 1 symbol = 10 pages. She read 35 pages. How many symbols will she draw?' },
    options: { el: ['35', '3', '3 και μισό', '4'], en: ['35', '3', '3 and a half', '4'] },
    correct: 2,
    explanation: {
      el: '35 ÷ 10 = 3 και περισσεύουν 5. Τα 5 είναι το μισό του 10, άρα 3 ολόκληρα σύμβολα και 1 μισό.',
      en: '35 ÷ 10 = 3 with 5 left over. 5 is half of 10, so 3 whole symbols and 1 half.',
    },
  },

  // ── 7–9: line charts ───────────────────────────────────────────────────────
  {
    q: { el: 'Ένα γραμμικό γράφημα δείχνει τη θερμοκρασία: Δευτέρα 18°, Τρίτη 21°, Τετάρτη 19°, Πέμπτη 24°, Παρασκευή 22°. Πότε ανέβηκε πιο πολύ η γραμμή;', en: 'A line chart shows the temperature: Monday 18°, Tuesday 21°, Wednesday 19°, Thursday 24°, Friday 22°. When did the line rise the most?' },
    options: { el: ['Από Δευτέρα σε Τρίτη', 'Από Τρίτη σε Τετάρτη', 'Από Τετάρτη σε Πέμπτη', 'Από Πέμπτη σε Παρασκευή'], en: ['From Monday to Tuesday', 'From Tuesday to Wednesday', 'From Wednesday to Thursday', 'From Thursday to Friday'] },
    correct: 2,
    explanation: {
      el: 'Από Τετάρτη σε Πέμπτη: 24 − 19 = 5 βαθμοί άνοδος. Δευτέρα σε Τρίτη μόνο 3, και τις άλλες μέρες η γραμμή κατεβαίνει.',
      en: 'From Wednesday to Thursday: 24 − 19 = a rise of 5 degrees. Monday to Tuesday is only 3, and on the other days the line goes down.',
    },
  },
  {
    q: { el: 'Σε ένα γραμμικό γράφημα η γραμμή κατεβαίνει από τα αριστερά προς τα δεξιά. Τι σημαίνει αυτό;', en: 'In a line chart the line goes down from left to right. What does this mean?' },
    options: { el: ['Η ποσότητα μικραίνει με τον χρόνο', 'Η ποσότητα μεγαλώνει με τον χρόνο', 'Η ποσότητα μένει ίδια', 'Το γράφημα έχει λάθος'], en: ['The amount is getting smaller over time', 'The amount is getting bigger over time', 'The amount stays the same', 'The chart has a mistake'] },
    correct: 0,
    explanation: {
      el: 'Γραμμή που κατεβαίνει = η ποσότητα μειώνεται. Γραμμή που ανεβαίνει = αυξάνεται. Ίσια γραμμή = μένει ίδια.',
      en: 'A line going down = the amount is decreasing. Going up = increasing. A flat line = staying the same.',
    },
  },
  {
    q: { el: 'Ο Γιώργος αποταμιεύει: Ιανουάριος 10 €, Φεβρουάριος 15 €, Μάρτιος 20 €, Απρίλιος 25 €. Αν συνεχίσει έτσι, πόσα θα έχει τον Μάιο;', en: 'Giorgos is saving money: January €10, February €15, March €20, April €25. If he keeps going like this, how much will he have in May?' },
    options: { el: ['25 €', '30 €', '35 €', '40 €'], en: ['€25', '€30', '€35', '€40'] },
    correct: 1,
    explanation: {
      el: 'Κάθε μήνα προσθέτει 5 €. Η γραμμή ανεβαίνει σταθερά: 25 + 5 = 30 € τον Μάιο.',
      en: 'Every month he adds €5. The line rises steadily: 25 + 5 = €30 in May.',
    },
  },

  // ── 10–12: pie charts ──────────────────────────────────────────────────────
  {
    q: { el: 'Σε ένα κυκλικό διάγραμμα, ένα κομμάτι είναι το ένα τέταρτο του κύκλου. Τι ποσοστό δείχνει;', en: 'In a pie chart, one slice is a quarter of the circle. What percentage does it show?' },
    options: { el: ['50 %', '4 %', '25 %', '75 %'], en: ['50 %', '4 %', '25 %', '75 %'] },
    correct: 2,
    explanation: {
      el: 'Ολόκληρος ο κύκλος είναι 100 %. Το ένα τέταρτο: 100 ÷ 4 = 25 %.',
      en: 'The whole circle is 100 %. A quarter: 100 ÷ 4 = 25 %.',
    },
  },
  {
    q: { el: 'Σε μια τάξη 40 παιδιών, το κυκλικό διάγραμμα δείχνει ότι το μισό διάλεξε ποδόσφαιρο. Πόσα παιδιά διάλεξαν ποδόσφαιρο;', en: 'In a class of 40 children, the pie chart shows that half chose football. How many children chose football?' },
    options: { el: ['20', '40', '10', '50'], en: ['20', '40', '10', '50'] },
    correct: 0,
    explanation: {
      el: 'Το μισό των 40 παιδιών: 40 ÷ 2 = 20 παιδιά. Το διάγραμμα δείχνει μερίδιο, όχι αριθμό — το βρίσκουμε εμείς.',
      en: 'Half of 40 children: 40 ÷ 2 = 20 children. The chart shows a share, not a number — we work it out.',
    },
  },
  {
    q: { el: 'Ένα κυκλικό διάγραμμα έχει τρία κομμάτια: 50 %, 30 % και ένα ακόμα. Πόσο είναι το τρίτο κομμάτι;', en: 'A pie chart has three slices: 50 %, 30 % and one more. How big is the third slice?' },
    options: { el: ['80 %', '30 %', '10 %', '20 %'], en: ['80 %', '30 %', '10 %', '20 %'] },
    correct: 3,
    explanation: {
      el: 'Όλα τα κομμάτια μαζί κάνουν 100 %. 50 + 30 = 80, άρα 100 − 80 = 20 %.',
      en: 'All the slices together make 100 %. 50 + 30 = 80, so 100 − 80 = 20 %.',
    },
  },

  // ── 13–14: reading tables ──────────────────────────────────────────────────
  {
    q: { el: 'Ένας πίνακας δείχνει τα παγωτά που πούλησε ένα κυλικείο: Δευτέρα 14, Τρίτη 9, Τετάρτη 17, Πέμπτη 12. Ποια μέρα πούλησε τα λιγότερα;', en: 'A table shows the ice creams a canteen sold: Monday 14, Tuesday 9, Wednesday 17, Thursday 12. On which day did it sell the fewest?' },
    options: { el: ['Δευτέρα', 'Τρίτη', 'Τετάρτη', 'Πέμπτη'], en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'] },
    correct: 1,
    explanation: {
      el: 'Συγκρίνουμε τους αριθμούς: 9 είναι ο μικρότερος, άρα την Τρίτη.',
      en: 'We compare the numbers: 9 is the smallest, so Tuesday.',
    },
  },
  {
    q: { el: 'Στον ίδιο πίνακα (14, 9, 17, 12), πόσα παγωτά πούλησε συνολικά τις τέσσερις μέρες;', en: 'In the same table (14, 9, 17, 12), how many ice creams did it sell in total over the four days?' },
    options: { el: ['42', '50', '52', '62'], en: ['42', '50', '52', '62'] },
    correct: 2,
    explanation: {
      el: 'Προσθέτουμε όλη τη σειρά: 14 + 9 + 17 + 12 = 52 παγωτά.',
      en: 'We add up the whole row: 14 + 9 + 17 + 12 = 52 ice creams.',
    },
  },

  // ── 15–16: drawing conclusions ─────────────────────────────────────────────
  {
    q: { el: 'Η Μαρία πουλάει λεμονάδα. Τις ηλιόλουστες μέρες πουλάει 30 ποτήρια, τις συννεφιασμένες 12 και τις βροχερές 4. Ποιο συμπέρασμα είναι σωστό;', en: 'Maria sells lemonade. On sunny days she sells 30 glasses, on cloudy days 12 and on rainy days 4. Which conclusion is correct?' },
    options: { el: ['Πουλάει περισσότερο όταν έχει ήλιο', 'Πουλάει το ίδιο κάθε μέρα', 'Πουλάει περισσότερο όταν βρέχει', 'Ο καιρός δεν επηρεάζει τις πωλήσεις'], en: ['She sells more when it is sunny', 'She sells the same every day', 'She sells more when it rains', 'The weather does not affect her sales'] },
    correct: 0,
    explanation: {
      el: 'Το 30 είναι πολύ μεγαλύτερο από το 12 και το 4. Τα δεδομένα δείχνουν ότι ο ήλιος φέρνει περισσότερους πελάτες.',
      en: '30 is much bigger than 12 and 4. The data shows that sunshine brings more customers.',
    },
  },
  {
    q: { el: 'Ο Νίκος ρώτησε 10 παιδιά της τάξης του και 7 είπαν ότι προτιμούν το μπάσκετ. Μπορεί να πει ότι «όλα τα παιδιά της Ελλάδας προτιμούν το μπάσκετ»;', en: 'Nikos asked 10 children in his class and 7 said they prefer basketball. Can he say that “all the children in Greece prefer basketball”?' },
    options: { el: ['Ναι, γιατί το 7 είναι πάνω από το μισό', 'Ναι, γιατί τα παιδιά απάντησαν ειλικρινά', 'Όχι, γιατί το μπάσκετ δεν είναι δημοφιλές', 'Όχι, γιατί ρώτησε πολύ λίγα παιδιά'], en: ['Yes, because 7 is more than half', 'Yes, because the children answered honestly', 'No, because basketball is not popular', 'No, because he asked far too few children'] },
    correct: 3,
    explanation: {
      el: 'Για να βγάλουμε συμπέρασμα για πολλούς, πρέπει να ρωτήσουμε πολλούς και διαφορετικούς. 10 παιδιά μιας τάξης δεν αρκούν.',
      en: 'To draw a conclusion about many people, we must ask many different people. 10 children from one class are not enough.',
    },
  },

  // ── 17–18: the average ─────────────────────────────────────────────────────
  {
    q: { el: 'Ο Γιώργος πήρε 8, 6 και 10 σε τρία τεστ. Ποιος είναι ο μέσος όρος του;', en: 'Giorgos scored 8, 6 and 10 in three tests. What is his average?' },
    options: { el: ['6', '8', '10', '24'], en: ['6', '8', '10', '24'] },
    correct: 1,
    explanation: {
      el: 'Μέσος όρος = άθροισμα ÷ πλήθος. 8 + 6 + 10 = 24, και 24 ÷ 3 = 8. (Το 24 είναι μόνο το άθροισμα — μην ξεχνάς τη διαίρεση!)',
      en: 'Average = total ÷ how many. 8 + 6 + 10 = 24, and 24 ÷ 3 = 8. (24 is just the total — do not forget to divide!)',
    },
  },
  {
    q: { el: 'Η Ελένη ξόδεψε σε τέσσερις μέρες 3 €, 5 €, 4 € και 8 €. Πόσα ξόδεψε κατά μέσο όρο την ημέρα;', en: 'Over four days Eleni spent €3, €5, €4 and €8. How much did she spend per day on average?' },
    options: { el: ['20 €', '4 €', '5 €', '8 €'], en: ['€20', '€4', '€5', '€8'] },
    correct: 2,
    explanation: {
      el: 'Άθροισμα: 3 + 5 + 4 + 8 = 20 €. Διαιρούμε με τις 4 μέρες: 20 ÷ 4 = 5 € την ημέρα.',
      en: 'Total: 3 + 5 + 4 + 8 = €20. Divide by the 4 days: 20 ÷ 4 = €5 per day.',
    },
  },
];
