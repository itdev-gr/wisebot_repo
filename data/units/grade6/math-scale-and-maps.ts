/**
 * ΣΤ' Δημοτικού · Μαθηματικά · Κλίμακα & χάρτες
 * ==============================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a child of 11–12.
 *
 * What the unit covers, in the order a ΣΤ' class meets it:
 *   1–3   what 1:100 and 1:1000 mean, which scale shows more detail
 *   4–8   real distance from a map distance (1:100, 1:1000, 1:200, 1:50.000, 1:100.000)
 *   9–11  drawing to scale: from the real length to the length on the plan
 *   12–14 finding the scale, and an enlargement scale (5:1)
 *   15–18 enlarging and reducing shapes, the ratio of lengths of a model to the real thing
 *
 * Distractors are the mistakes children actually make: unit slips (cm ↔ m ↔ km),
 * dividing instead of multiplying (or the reverse), adding a fixed amount instead of
 * scaling every side, reading 1:1000 as "more detailed" than 1:100.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE6_MATH_SCALE_AND_MAPS: QuizQuestion[] = [
  // ── 1–3: what a scale means ────────────────────────────────────────────────
  {
    q: { el: 'Τι σημαίνει κλίμακα 1:100 σε ένα σχέδιο;', en: 'What does a scale of 1:100 mean on a plan?' },
    options: {
      el: ['1 cm στο σχέδιο = 100 cm στην πραγματικότητα', '100 cm στο σχέδιο = 1 cm στην πραγματικότητα', 'το σχέδιο είναι 100 φορές μεγαλύτερο από το πραγματικό', '1 cm στο σχέδιο = 100 km στην πραγματικότητα'],
      en: ['1 cm on the plan = 100 cm in real life', '100 cm on the plan = 1 cm in real life', 'the plan is 100 times bigger than the real thing', '1 cm on the plan = 100 km in real life'],
    },
    correct: 0,
    explanation: {
      el: 'Στην κλίμακα 1:100, κάθε 1 cm του σχεδίου είναι 100 cm (δηλαδή 1 m) στην πραγματικότητα. Το σχέδιο είναι 100 φορές μικρότερο.',
      en: 'At 1:100, every 1 cm on the plan is 100 cm (that is 1 m) in real life. The plan is 100 times smaller.',
    },
  },
  {
    q: { el: 'Σε χάρτη με κλίμακα 1:1.000, το 1 cm στον χάρτη αντιστοιχεί σε πόσα μέτρα στην πραγματικότητα;', en: 'On a map with scale 1:1,000, how many real metres does 1 cm on the map stand for?' },
    options: { el: ['1 m', '10 m', '100 m', '1 km'], en: ['1 m', '10 m', '100 m', '1 km'] },
    correct: 1,
    explanation: {
      el: '1 cm × 1.000 = 1.000 cm. Και 1.000 cm = 10 m, γιατί το 1 m έχει 100 cm.',
      en: '1 cm × 1,000 = 1,000 cm. And 1,000 cm = 10 m, because 1 m has 100 cm.',
    },
  },
  {
    q: { el: 'Ποιος από τους παρακάτω χάρτες δείχνει τα πράγματα μεγαλύτερα και με περισσότερη λεπτομέρεια;', en: 'Which of these maps shows things bigger and in more detail?' },
    options: { el: ['1:1.000', '1:10.000', '1:100.000', '1:100'], en: ['1:1,000', '1:10,000', '1:100,000', '1:100'] },
    correct: 3,
    explanation: {
      el: 'Όσο μικρότερος είναι ο δεύτερος αριθμός, τόσο λιγότερο έχει σμικρυνθεί η εικόνα. Στο 1:100 ένα σπίτι φαίνεται μεγάλο, στο 1:100.000 είναι μια κουκκίδα.',
      en: 'The smaller the second number, the less the picture has been shrunk. At 1:100 a house looks big; at 1:100,000 it is a dot.',
    },
  },

  // ── 4–8: real distance from the map ──────────────────────────────────────
  {
    q: { el: 'Σε σχέδιο με κλίμακα 1:100, ένα δωμάτιο έχει μήκος 5 cm. Πόσο είναι το πραγματικό του μήκος;', en: 'On a 1:100 plan, a room is 5 cm long. What is its real length?' },
    options: { el: ['50 cm', '5 m', '50 m', '500 m'], en: ['50 cm', '5 m', '50 m', '500 m'] },
    correct: 1,
    explanation: {
      el: '5 cm × 100 = 500 cm = 5 m. Στο 1:100 τα εκατοστά του σχεδίου γίνονται απλώς μέτρα.',
      en: '5 cm × 100 = 500 cm = 5 m. At 1:100, centimetres on the plan simply become metres.',
    },
  },
  {
    q: { el: 'Σε χάρτη με κλίμακα 1:1.000, η απόσταση από το σχολείο ως το πάρκο είναι 3 cm. Πόση είναι στην πραγματικότητα;', en: 'On a 1:1,000 map, the distance from the school to the park is 3 cm. What is the real distance?' },
    options: { el: ['3 m', '300 m', '30 m', '3 km'], en: ['3 m', '300 m', '30 m', '3 km'] },
    correct: 2,
    explanation: {
      el: '3 cm × 1.000 = 3.000 cm. 3.000 cm ÷ 100 = 30 m.',
      en: '3 cm × 1,000 = 3,000 cm. 3,000 cm ÷ 100 = 30 m.',
    },
  },
  {
    q: { el: 'Σε χάρτη με κλίμακα 1:50.000, δύο χωριά απέχουν 4 cm. Πόσο απέχουν στην πραγματικότητα;', en: 'On a 1:50,000 map, two villages are 4 cm apart. How far apart are they in real life?' },
    options: { el: ['2 km', '20 km', '200 m', '50 km'], en: ['2 km', '20 km', '200 m', '50 km'] },
    correct: 0,
    explanation: {
      el: '4 × 50.000 = 200.000 cm = 2.000 m = 2 km. Θυμήσου: 100 cm = 1 m και 1.000 m = 1 km.',
      en: '4 × 50,000 = 200,000 cm = 2,000 m = 2 km. Remember: 100 cm = 1 m and 1,000 m = 1 km.',
    },
  },
  {
    q: { el: 'Σε σχέδιο με κλίμακα 1:200, ένα λεωφορείο έχει μήκος 6 cm. Πόσο είναι το πραγματικό του μήκος;', en: 'On a 1:200 drawing, a bus is 6 cm long. What is its real length?' },
    options: { el: ['1,2 m', '120 m', '12 m', '60 m'], en: ['1.2 m', '120 m', '12 m', '60 m'] },
    correct: 2,
    explanation: {
      el: '6 cm × 200 = 1.200 cm = 12 m. Λογικό: ένα λεωφορείο έχει όντως μήκος περίπου 12 μέτρα.',
      en: '6 cm × 200 = 1,200 cm = 12 m. That makes sense: a bus really is about 12 metres long.',
    },
  },
  {
    q: { el: 'Σε χάρτη με κλίμακα 1:100.000, μια διαδρομή είναι 2,5 cm. Πόση είναι στην πραγματικότητα;', en: 'On a 1:100,000 map, a route is 2.5 cm. What is its real length?' },
    options: { el: ['25 km', '250 m', '2.500 km', '2,5 km'], en: ['25 km', '250 m', '2,500 km', '2.5 km'] },
    correct: 3,
    explanation: {
      el: '2,5 × 100.000 = 250.000 cm = 2.500 m = 2,5 km. Στο 1:100.000 τα εκατοστά του χάρτη γίνονται χιλιόμετρα.',
      en: '2.5 × 100,000 = 250,000 cm = 2,500 m = 2.5 km. At 1:100,000, centimetres on the map become kilometres.',
    },
  },

  // ── 9–11: drawing to scale ───────────────────────────────────────────────
  {
    q: { el: 'Θέλεις να σχεδιάσεις σε κλίμακα 1:100 έναν τοίχο με πραγματικό μήκος 4 m. Πόσο μακρύ θα τον σχεδιάσεις;', en: 'You want to draw a wall with real length 4 m at a scale of 1:100. How long will you draw it?' },
    options: { el: ['40 cm', '4 mm', '400 cm', '4 cm'], en: ['40 cm', '4 mm', '400 cm', '4 cm'] },
    correct: 3,
    explanation: {
      el: 'Πρώτα σε εκατοστά: 4 m = 400 cm. Μετά διαιρούμε με την κλίμακα: 400 ÷ 100 = 4 cm.',
      en: 'First in centimetres: 4 m = 400 cm. Then divide by the scale: 400 ÷ 100 = 4 cm.',
    },
  },
  {
    q: { el: 'Ένας κήπος έχει μήκος 60 m. Σε κλίμακα 1:1.000, πόσο θα είναι το μήκος του στο σχέδιο;', en: 'A garden is 60 m long. At a scale of 1:1,000, how long will it be on the plan?' },
    options: { el: ['60 cm', '6 cm', '0,6 cm', '600 cm'], en: ['60 cm', '6 cm', '0.6 cm', '600 cm'] },
    correct: 1,
    explanation: {
      el: '60 m = 6.000 cm. 6.000 ÷ 1.000 = 6 cm. Για να σχεδιάσουμε, διαιρούμε — για να βρούμε το πραγματικό, πολλαπλασιάζουμε.',
      en: '60 m = 6,000 cm. 6,000 ÷ 1,000 = 6 cm. To draw, we divide — to find the real size, we multiply.',
    },
  },
  {
    q: { el: 'Ένας δρόμος έχει μήκος 3 km. Σε χάρτη με κλίμακα 1:100.000, πόσο θα είναι;', en: 'A road is 3 km long. On a 1:100,000 map, how long will it be?' },
    options: { el: ['30 cm', '3 mm', '3 cm', '300 cm'], en: ['30 cm', '3 mm', '3 cm', '300 cm'] },
    correct: 2,
    explanation: {
      el: '3 km = 3.000 m = 300.000 cm. 300.000 ÷ 100.000 = 3 cm.',
      en: '3 km = 3,000 m = 300,000 cm. 300,000 ÷ 100,000 = 3 cm.',
    },
  },

  // ── 12–14: finding the scale, enlargement ────────────────────────────────
  {
    q: { el: 'Στο σχέδιο, ένας τοίχος με πραγματικό μήκος 5 m έχει μήκος 10 cm. Ποια είναι η κλίμακα του σχεδίου;', en: 'On a plan, a wall with real length 5 m is 10 cm long. What is the scale of the plan?' },
    options: { el: ['1:5', '1:50', '1:500', '1:100'], en: ['1:5', '1:50', '1:500', '1:100'] },
    correct: 1,
    explanation: {
      el: '5 m = 500 cm. Στο σχέδιο είναι 10 cm, άρα 500 ÷ 10 = 50: κάθε 1 cm του σχεδίου είναι 50 cm πραγματικά. Κλίμακα 1:50.',
      en: '5 m = 500 cm. On the plan it is 10 cm, so 500 ÷ 10 = 50: every 1 cm on the plan is 50 cm in real life. Scale 1:50.',
    },
  },
  {
    q: { el: 'Σε έναν χάρτη, 2 cm αντιστοιχούν σε 20 m στην πραγματικότητα. Ποια είναι η κλίμακα;', en: 'On a map, 2 cm stand for 20 m in real life. What is the scale?' },
    options: { el: ['1:10', '1:100', '1:1.000', '1:2.000'], en: ['1:10', '1:100', '1:1,000', '1:2,000'] },
    correct: 2,
    explanation: {
      el: '20 m = 2.000 cm. 2.000 ÷ 2 = 1.000, άρα 1 cm στον χάρτη = 1.000 cm πραγματικά: κλίμακα 1:1.000.',
      en: '20 m = 2,000 cm. 2,000 ÷ 2 = 1,000, so 1 cm on the map = 1,000 cm in real life: scale 1:1,000.',
    },
  },
  {
    q: { el: 'Ένα σχέδιο μυρμηγκιού έχει κλίμακα 5:1 (μεγέθυνση). Το πραγματικό μυρμήγκι έχει μήκος 4 mm. Πόσο είναι στο σχέδιο;', en: 'A drawing of an ant has a scale of 5:1 (an enlargement). The real ant is 4 mm long. How long is it in the drawing?' },
    options: { el: ['20 mm', '0,8 mm', '9 mm', '45 mm'], en: ['20 mm', '0.8 mm', '9 mm', '45 mm'] },
    correct: 0,
    explanation: {
      el: 'Στην κλίμακα 5:1 το σχέδιο είναι 5 φορές μεγαλύτερο από το πραγματικό: 4 × 5 = 20 mm. Όταν ο πρώτος αριθμός είναι μεγαλύτερος, μεγεθύνουμε.',
      en: 'At 5:1 the drawing is 5 times bigger than the real thing: 4 × 5 = 20 mm. When the first number is the bigger one, we enlarge.',
    },
  },

  // ── 15–18: enlarging and reducing shapes, ratio of lengths ───────────────
  {
    q: { el: 'Ένα ορθογώνιο 3 cm × 5 cm μεγεθύνεται με κλίμακα 2:1. Ποιες είναι οι νέες του διαστάσεις;', en: 'A 3 cm × 5 cm rectangle is enlarged at a scale of 2:1. What are its new dimensions?' },
    options: { el: ['5 cm × 7 cm', '6 cm × 10 cm', '9 cm × 25 cm', '6 cm × 5 cm'], en: ['5 cm × 7 cm', '6 cm × 10 cm', '9 cm × 25 cm', '6 cm × 5 cm'] },
    correct: 1,
    explanation: {
      el: 'Στη μεγέθυνση κάθε πλευρά πολλαπλασιάζεται με τον ίδιο αριθμό: 3 × 2 = 6 και 5 × 2 = 10. Δεν προσθέτουμε 2 (5 × 7) και δεν αλλάζουμε μόνο μία πλευρά.',
      en: 'In an enlargement every side is multiplied by the same number: 3 × 2 = 6 and 5 × 2 = 10. We do not add 2 (5 × 7) and we do not change only one side.',
    },
  },
  {
    q: { el: 'Ένα τρίγωνο με πλευρές 8 cm, 6 cm και 10 cm σμικρύνεται στο μισό. Ποιες είναι οι νέες πλευρές του;', en: 'A triangle with sides 8 cm, 6 cm and 10 cm is reduced to half size. What are its new sides?' },
    options: { el: ['6, 4, 8 cm', '16, 12, 20 cm', '4, 3, 10 cm', '4, 3, 5 cm'], en: ['6, 4, 8 cm', '16, 12, 20 cm', '4, 3, 10 cm', '4, 3, 5 cm'] },
    correct: 3,
    explanation: {
      el: 'Στη σμίκρυνση όλες οι πλευρές διαιρούνται με τον ίδιο αριθμό: 8 ÷ 2 = 4, 6 ÷ 2 = 3, 10 ÷ 2 = 5. Το σχήμα μένει ίδιο, μόνο μικρότερο.',
      en: 'In a reduction all the sides are divided by the same number: 8 ÷ 2 = 4, 6 ÷ 2 = 3, 10 ÷ 2 = 5. The shape stays the same, only smaller.',
    },
  },
  {
    q: { el: 'Μια φωτογραφία 4 cm × 6 cm μεγεθύνεται έτσι ώστε η μικρή πλευρά να γίνει 12 cm. Πόσο θα γίνει η μεγάλη πλευρά;', en: 'A 4 cm × 6 cm photo is enlarged so that its short side becomes 12 cm. How long will the long side become?' },
    options: { el: ['14 cm', '24 cm', '18 cm', '12 cm'], en: ['14 cm', '24 cm', '18 cm', '12 cm'] },
    correct: 2,
    explanation: {
      el: 'Η μικρή πλευρά έγινε από 4 → 12, δηλαδή τριπλασιάστηκε. Άρα και η μεγάλη τριπλασιάζεται: 6 × 3 = 18 cm. Αν προσθέταμε 8 σε κάθε πλευρά, η φωτογραφία θα παραμορφωνόταν.',
      en: 'The short side went from 4 → 12, so it tripled. The long side triples too: 6 × 3 = 18 cm. If we added 8 to each side, the photo would be distorted.',
    },
  },
  {
    q: { el: 'Μια μακέτα αυτοκινήτου έχει μήκος 8 cm και το πραγματικό αυτοκίνητο 4 m. Ποιος είναι ο λόγος των μηκών μακέτα : πραγματικό;', en: 'A model car is 8 cm long and the real car is 4 m long. What is the ratio of lengths model : real?' },
    options: { el: ['1:5', '1:500', '2:1', '1:50'], en: ['1:5', '1:500', '2:1', '1:50'] },
    correct: 3,
    explanation: {
      el: 'Ίδιες μονάδες πρώτα: 4 m = 400 cm. Λόγος 8 : 400 = 1 : 50 (διαιρούμε και τους δύο με το 8). Η μακέτα είναι 50 φορές μικρότερη.',
      en: 'Same units first: 4 m = 400 cm. Ratio 8 : 400 = 1 : 50 (divide both by 8). The model is 50 times smaller.',
    },
  },
];
