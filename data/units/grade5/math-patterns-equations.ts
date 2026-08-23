/**
 * Ε' Δημοτικού · Μαθηματικά · Μοτίβα και εξισώσεις
 * ================================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr). Language level: a child of 10–11.
 *
 * What the unit covers, in order:
 *   1–6   numeric patterns: find the next term, find the rule, a savings pattern in €
 *   7–8   geometric patterns: a repeating shape sequence and a growing one
 *   9–12  negative numbers on a thermometer: reading, comparing, going up and down past zero
 *   13–16 simple equations with a missing number, two as word problems
 *   17–18 inequalities: which value fits, and "how many at most" with money
 *
 * Distractors are real child mistakes: off-by-one steps, the wrong rule, dropping the minus
 * sign, adding instead of subtracting, rounding up instead of down. The UI shuffles options.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE5_MATH_PATTERNS_EQUATIONS: QuizQuestion[] = [
  // ── 1–6: numeric patterns ───────────────────────────────────────────────────
  {
    q: { el: 'Ποιος αριθμός συνεχίζει το μοτίβο; 5, 10, 15, 20, ___', en: 'Which number continues the pattern? 5, 10, 15, 20, ___' },
    options: { el: ['24', '30', '25', '21'], en: ['24', '30', '25', '21'] },
    correct: 2,
    explanation: {
      el: 'Κάθε αριθμός είναι 5 περισσότερο από τον προηγούμενο. 20 + 5 = 25.',
      en: 'Each number is 5 more than the one before. 20 + 5 = 25.',
    },
  },
  {
    q: { el: 'Ποιος αριθμός λείπει; 3, 6, 9, 12, ___, 18', en: 'Which number is missing? 3, 6, 9, 12, ___, 18' },
    options: { el: ['14', '15', '16', '13'], en: ['14', '15', '16', '13'] },
    correct: 1,
    explanation: {
      el: 'Το μοτίβο ανεβαίνει κατά 3 κάθε φορά. 12 + 3 = 15 και 15 + 3 = 18.',
      en: 'The pattern goes up by 3 each time. 12 + 3 = 15 and 15 + 3 = 18.',
    },
  },
  {
    q: { el: 'Ποιος αριθμός συνεχίζει το μοτίβο; 50, 45, 40, 35, ___', en: 'Which number continues the pattern? 50, 45, 40, 35, ___' },
    options: { el: ['30', '25', '34', '40'], en: ['30', '25', '34', '40'] },
    correct: 0,
    explanation: {
      el: 'Αυτό το μοτίβο κατεβαίνει κατά 5 κάθε φορά. 35 − 5 = 30.',
      en: 'This pattern goes down by 5 each time. 35 − 5 = 30.',
    },
  },
  {
    q: { el: 'Ποιος αριθμός συνεχίζει το μοτίβο; 2, 4, 8, 16, ___', en: 'Which number continues the pattern? 2, 4, 8, 16, ___' },
    options: { el: ['18', '24', '32', '20'], en: ['18', '24', '32', '20'] },
    correct: 2,
    explanation: {
      el: 'Εδώ δεν προσθέτουμε, διπλασιάζουμε! Κάθε αριθμός είναι ο προηγούμενος × 2. 16 × 2 = 32.',
      en: 'Here we do not add, we double! Each number is the previous one × 2. 16 × 2 = 32.',
    },
  },
  {
    q: { el: 'Ποιος είναι ο κανόνας του μοτίβου 7, 11, 15, 19, 23;', en: 'What is the rule of the pattern 7, 11, 15, 19, 23?' },
    options: { el: ['Προσθέτουμε 3', 'Προσθέτουμε 4', 'Πολλαπλασιάζουμε με 2', 'Προσθέτουμε 5'], en: ['Add 3', 'Add 4', 'Multiply by 2', 'Add 5'] },
    correct: 1,
    explanation: {
      el: 'Για να βρούμε τον κανόνα, αφαιρούμε δύο γειτονικούς αριθμούς: 11 − 7 = 4, 15 − 11 = 4. Ο κανόνας είναι «+4».',
      en: 'To find the rule, subtract two neighbouring numbers: 11 − 7 = 4, 15 − 11 = 4. The rule is “+4”.',
    },
  },
  {
    q: { el: 'Η Ελένη βάζει 4 € στον κουμπαρά της κάθε εβδομάδα. Μετά από 1 εβδομάδα έχει 4 €, μετά από 2 έχει 8 €. Πόσα θα έχει μετά από 6 εβδομάδες;', en: 'Eleni puts €4 in her money box every week. After 1 week she has €4, after 2 weeks €8. How much will she have after 6 weeks?' },
    options: { el: ['20 €', '24 €', '28 €', '10 €'], en: ['€20', '€24', '€28', '€10'] },
    correct: 1,
    explanation: {
      el: 'Το μοτίβο είναι 4, 8, 12, 16, 20, 24. Πιο γρήγορα: 6 εβδομάδες × 4 € = 24 €.',
      en: 'The pattern is 4, 8, 12, 16, 20, 24. Faster: 6 weeks × €4 = €24.',
    },
  },

  // ── 7–8: geometric patterns ─────────────────────────────────────────────────
  {
    q: { el: 'Ένα μοτίβο επαναλαμβάνεται: κύκλος, τετράγωνο, τρίγωνο, κύκλος, τετράγωνο, τρίγωνο, … Ποιο είναι το 7ο σχήμα;', en: 'A pattern repeats: circle, square, triangle, circle, square, triangle, … What is the 7th shape?' },
    options: { el: ['Τρίγωνο', 'Τετράγωνο', 'Κύκλος', 'Ρόμβος'], en: ['Triangle', 'Square', 'Circle', 'Diamond'] },
    correct: 2,
    explanation: {
      el: 'Η ομάδα «κύκλος, τετράγωνο, τρίγωνο» έχει 3 σχήματα. Το 6ο είναι τρίγωνο, άρα το 7ο ξεκινά πάλι από την αρχή: κύκλος.',
      en: 'The group “circle, square, triangle” has 3 shapes. The 6th is a triangle, so the 7th starts again from the beginning: circle.',
    },
  },
  {
    q: { el: 'Ο Νίκος φτιάχνει σχήματα με τουβλάκια. Το 1ο σχήμα έχει 1 τουβλάκι, το 2ο έχει 3, το 3ο έχει 5. Πόσα τουβλάκια θα έχει το 5ο σχήμα;', en: 'Nikos builds shapes with blocks. The 1st shape has 1 block, the 2nd has 3, the 3rd has 5. How many blocks will the 5th shape have?' },
    options: { el: ['7', '8', '9', '10'], en: ['7', '8', '9', '10'] },
    correct: 2,
    explanation: {
      el: 'Κάθε σχήμα έχει 2 τουβλάκια περισσότερα: 1, 3, 5, 7, 9. Το 5ο σχήμα έχει 9 τουβλάκια.',
      en: 'Each shape has 2 more blocks: 1, 3, 5, 7, 9. The 5th shape has 9 blocks.',
    },
  },

  // ── 9–12: negative numbers on the thermometer ──────────────────────────────
  {
    q: { el: 'Το θερμόμετρο δείχνει −3 °C. Τι σημαίνει αυτό;', en: 'The thermometer shows −3 °C. What does that mean?' },
    options: { el: ['3 βαθμούς πάνω από το μηδέν', '3 βαθμούς κάτω από το μηδέν', '30 βαθμούς κάτω από το μηδέν', 'Ακριβώς μηδέν βαθμούς'], en: ['3 degrees above zero', '3 degrees below zero', '30 degrees below zero', 'Exactly zero degrees'] },
    correct: 1,
    explanation: {
      el: 'Το «−» μπροστά από τον αριθμό σημαίνει «κάτω από το μηδέν». −3 °C είναι 3 βαθμοί κάτω από το 0, δηλαδή παγωνιά!',
      en: 'The “−” in front of the number means “below zero”. −3 °C is 3 degrees below 0, which is freezing!',
    },
  },
  {
    q: { el: 'Ποια θερμοκρασία είναι πιο κρύα: −5 °C ή −2 °C;', en: 'Which temperature is colder: −5 °C or −2 °C?' },
    options: { el: ['−5 °C', '−2 °C', 'Είναι το ίδιο κρύες', 'Δεν μπορούμε να ξέρουμε'], en: ['−5 °C', '−2 °C', 'They are equally cold', 'We cannot know'] },
    correct: 0,
    explanation: {
      el: 'Στους αρνητικούς αριθμούς, όσο πιο μεγάλο είναι το ψηφίο τόσο πιο κάτω από το μηδέν είμαστε. Το −5 είναι πιο χαμηλά στο θερμόμετρο από το −2, άρα πιο κρύο.',
      en: 'With negative numbers, the bigger the digit, the further below zero we are. −5 is lower on the thermometer than −2, so it is colder.',
    },
  },
  {
    q: { el: 'Το πρωί η θερμοκρασία ήταν −4 °C. Το μεσημέρι ανέβηκε κατά 7 βαθμούς. Πόσο δείχνει τώρα το θερμόμετρο;', en: 'In the morning the temperature was −4 °C. By noon it rose by 7 degrees. What does the thermometer show now?' },
    options: { el: ['11 °C', '−11 °C', '3 °C', '−3 °C'], en: ['11 °C', '−11 °C', '3 °C', '−3 °C'] },
    correct: 2,
    explanation: {
      el: 'Από το −4 ανεβαίνουμε 4 βαθμούς και φτάνουμε στο 0. Μας μένουν άλλοι 3 βαθμοί: 0 + 3 = 3 °C.',
      en: 'From −4 we go up 4 degrees and reach 0. We have 3 more degrees to go: 0 + 3 = 3 °C.',
    },
  },
  {
    q: { el: 'Το βράδυ η θερμοκρασία ήταν 2 °C. Τη νύχτα έπεσε κατά 6 βαθμούς. Πόσο έγινε;', en: 'In the evening the temperature was 2 °C. During the night it dropped by 6 degrees. What is it now?' },
    options: { el: ['4 °C', '−4 °C', '−8 °C', '8 °C'], en: ['4 °C', '−4 °C', '−8 °C', '8 °C'] },
    correct: 1,
    explanation: {
      el: 'Από το 2 κατεβαίνουμε 2 βαθμούς και φτάνουμε στο 0. Μετά κατεβαίνουμε άλλους 4 κάτω από το μηδέν: −4 °C.',
      en: 'From 2 we go down 2 degrees and reach 0. Then we go down 4 more below zero: −4 °C.',
    },
  },

  // ── 13–16: equations with a missing number ─────────────────────────────────
  {
    q: { el: 'Ποιος αριθμός λείπει; ___ + 8 = 15', en: 'Which number is missing? ___ + 8 = 15' },
    options: { el: ['23', '7', '8', '6'], en: ['23', '7', '8', '6'] },
    correct: 1,
    explanation: {
      el: 'Για να βρούμε τον αριθμό που λείπει σε μια πρόσθεση, κάνουμε αφαίρεση: 15 − 8 = 7. Έλεγχος: 7 + 8 = 15.',
      en: 'To find the missing number in an addition, we subtract: 15 − 8 = 7. Check: 7 + 8 = 15.',
    },
  },
  {
    q: { el: 'Ποιος αριθμός λείπει; 3 × ___ = 24', en: 'Which number is missing? 3 × ___ = 24' },
    options: { el: ['21', '27', '8', '7'], en: ['21', '27', '8', '7'] },
    correct: 2,
    explanation: {
      el: 'Για να βρούμε τον αριθμό που λείπει σε έναν πολλαπλασιασμό, κάνουμε διαίρεση: 24 ÷ 3 = 8. Έλεγχος: 3 × 8 = 24.',
      en: 'To find the missing number in a multiplication, we divide: 24 ÷ 3 = 8. Check: 3 × 8 = 24.',
    },
  },
  {
    q: { el: 'Ο Γιώργος είχε μερικά αυτοκόλλητα. Έδωσε 9 στον φίλο του και του έμειναν 14. Πόσα είχε στην αρχή;', en: 'Giorgos had some stickers. He gave 9 to his friend and had 14 left. How many did he have at the start?' },
    options: { el: ['23', '5', '22', '14'], en: ['23', '5', '22', '14'] },
    correct: 0,
    explanation: {
      el: 'Η εξίσωση είναι ___ − 9 = 14. Για να βρούμε τον αρχικό αριθμό, προσθέτουμε: 14 + 9 = 23.',
      en: 'The equation is ___ − 9 = 14. To find the starting number, we add: 14 + 9 = 23.',
    },
  },
  {
    q: { el: 'Η Μαρία αγόρασε 4 ίδια τετράδια και πλήρωσε 12 € συνολικά. Πόσο κοστίζει το ένα τετράδιο;', en: 'Maria bought 4 identical notebooks and paid €12 in total. How much does one notebook cost?' },
    options: { el: ['48 €', '8 €', '3 €', '16 €'], en: ['€48', '€8', '€3', '€16'] },
    correct: 2,
    explanation: {
      el: 'Η εξίσωση είναι 4 × ___ = 12. Διαιρούμε: 12 ÷ 4 = 3. Κάθε τετράδιο κοστίζει 3 €.',
      en: 'The equation is 4 × ___ = 12. We divide: 12 ÷ 4 = 3. Each notebook costs €3.',
    },
  },

  // ── 17–18: inequalities ────────────────────────────────────────────────────
  {
    q: { el: 'Ποιος αριθμός μπορεί να μπει στο κενό ώστε να ισχύει ___ > 12;', en: 'Which number can go in the blank so that ___ > 12 is true?' },
    options: { el: ['12', '10', '11', '15'], en: ['12', '10', '11', '15'] },
    correct: 3,
    explanation: {
      el: 'Το σύμβολο «>» σημαίνει «μεγαλύτερο από». Χρειαζόμαστε αριθμό μεγαλύτερο από το 12. Το 12 δεν είναι μεγαλύτερο από τον εαυτό του, άρα μόνο το 15 κάνει.',
      en: 'The symbol “>” means “greater than”. We need a number greater than 12. 12 is not greater than itself, so only 15 works.',
    },
  },
  {
    q: { el: 'Η Ελένη έχει 20 €. Κάθε βιβλίο κοστίζει 7 €. Πόσα βιβλία μπορεί να αγοράσει το πολύ;', en: 'Eleni has €20. Each book costs €7. What is the most books she can buy?' },
    options: { el: ['3', '2', '4', '1'], en: ['3', '2', '4', '1'] },
    correct: 1,
    explanation: {
      el: 'Ψάχνουμε πόσα βιβλία × 7 € είναι μικρότερο ή ίσο με 20 €. 2 × 7 = 14 € (φτάνουν), 3 × 7 = 21 € (δεν φτάνουν). Άρα το πολύ 2 βιβλία.',
      en: 'We look for how many books × €7 is less than or equal to €20. 2 × 7 = €14 (enough), 3 × 7 = €21 (not enough). So at most 2 books.',
    },
  },
];
