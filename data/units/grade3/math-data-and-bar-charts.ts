/**
 * Γ' Δημοτικού · Μαθηματικά · Δεδομένα & Ραβδογράμματα
 * ======================================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a child of 8–9. Charts are described in words inside each question.
 * What the unit covers, in order:
 *   1–3   tally marks: a «δεμένη πεντάδα» is 5, reading and writing a count
 *   4–6   frequency tables: the total, the least, adding two rows
 *   7–11  bar charts: the tallest bar, the difference between two bars, adding bars,
 *         the total, reading a bar that sits between two grid lines
 *   12–15 pictograms with a key (1 picture = 2): picture → number, number → pictures,
 *         half a picture, comparing two rows
 *   16–18 a conclusion from the data, and what the data can (and cannot) tell us
 *
 * Distractors are the mistakes children actually make: counting pictures instead of
 * using the key, adding two bars when the question asks for the difference,
 * forgetting a row when totalling.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE3_MATH_DATA_AND_BAR_CHARTS: QuizQuestion[] = [
  // ── 1–3: tally marks ────────────────────────────────────────────────────────
  {
    q: { el: 'Όταν μετράμε με γραμμούλες, κάθε πέμπτη γραμμούλα κόβει λοξά τις τέσσερις προηγούμενες. Πόσο αξίζει μια τέτοια «δεμένη» ομάδα;', en: 'When we count with tally marks, every fifth mark crosses the four before it. How much is one such “tied” group worth?' },
    options: { el: ['4', '5', '10', '1'], en: ['4', '5', '10', '1'] },
    correct: 1,
    explanation: {
      el: 'Τέσσερις όρθιες γραμμούλες και μία λοξή που τις κόβει κάνουν μια πεντάδα. Έτσι μετράμε γρήγορα ανά 5.',
      en: 'Four upright marks and one slanted mark crossing them make a group of five. That way we count quickly in fives.',
    },
  },
  {
    q: { el: 'Ο Νίκος μέτρησε τα αυτοκίνητα που πέρασαν και έγραψε 2 δεμένες πεντάδες και 3 μονές γραμμούλες. Πόσα αυτοκίνητα πέρασαν;', en: 'Nikos counted the cars that went by and wrote 2 tied groups of five and 3 single marks. How many cars went by?' },
    options: { el: ['23', '10', '13', '8'], en: ['23', '10', '13', '8'] },
    correct: 2,
    explanation: {
      el: '2 πεντάδες = 2 × 5 = 10. Μαζί με τις 3 μονές: 10 + 3 = 13 αυτοκίνητα.',
      en: '2 groups of five = 2 × 5 = 10. Plus the 3 single marks: 10 + 3 = 13 cars.',
    },
  },
  {
    q: { el: 'Η Ελένη θέλει να γράψει τον αριθμό 17 με γραμμούλες. Πόσες πεντάδες και πόσες μονές γραμμούλες θα κάνει;', en: 'Eleni wants to write the number 17 in tally marks. How many groups of five and how many single marks will she make?' },
    options: {
      el: ['3 πεντάδες και 2 μονές', '2 πεντάδες και 5 μονές', '1 πεντάδα και 7 μονές', '4 πεντάδες και 3 μονές'],
      en: ['3 fives and 2 singles', '2 fives and 5 singles', '1 five and 7 singles', '4 fives and 3 singles'],
    },
    correct: 0,
    explanation: {
      el: '17 = 5 + 5 + 5 + 2. Άρα 3 δεμένες πεντάδες και 2 μονές γραμμούλες. (2 πεντάδες και 5 μονές κάνουν μόνο 15.)',
      en: '17 = 5 + 5 + 5 + 2. So 3 tied fives and 2 single marks. (2 fives and 5 singles only make 15.)',
    },
  },

  // ── 4–6: frequency tables ───────────────────────────────────────────────────
  {
    q: { el: 'Πίνακας «Αγαπημένο ζώο της τάξης»: σκύλος 9, γάτα 6, παπαγάλος 2, κουνέλι 4. Πόσα παιδιά ρωτήθηκαν συνολικά;', en: 'Table “The class\'s favourite animal”: dog 9, cat 6, parrot 2, rabbit 4. How many children were asked in total?' },
    options: { el: ['20', '21', '19', '17'], en: ['20', '21', '19', '17'] },
    correct: 1,
    explanation: {
      el: 'Για το σύνολο προσθέτουμε όλες τις γραμμές του πίνακα: 9 + 6 + 2 + 4 = 21 παιδιά.',
      en: 'For the total we add every row of the table: 9 + 6 + 2 + 4 = 21 children.',
    },
  },
  {
    q: { el: 'Στον ίδιο πίνακα (σκύλος 9, γάτα 6, παπαγάλος 2, κουνέλι 4), ποιο ζώο διάλεξαν τα λιγότερα παιδιά;', en: 'In the same table (dog 9, cat 6, parrot 2, rabbit 4), which animal did the fewest children choose?' },
    options: { el: ['σκύλος', 'γάτα', 'παπαγάλος', 'κουνέλι'], en: ['dog', 'cat', 'parrot', 'rabbit'] },
    correct: 2,
    explanation: {
      el: 'Ψάχνουμε τον πιο μικρό αριθμό στον πίνακα: το 2, δίπλα στον παπαγάλο. Ο σκύλος με 9 είναι ο πιο δημοφιλής.',
      en: 'We look for the smallest number in the table: 2, next to the parrot. The dog with 9 is the most popular.',
    },
  },
  {
    q: { el: 'Η δασκάλα ρώτησε τα παιδιά ποιο φρούτο προτιμούν. Καταμέτρηση: μήλο 4 γραμμούλες, μπανάνα μία δεμένη πεντάδα, φράουλα 3 γραμμούλες. Πόσα παιδιά προτιμούν μπανάνα ή φράουλα;', en: 'The teacher asked the children which fruit they prefer. Tally: apple 4 marks, banana one tied group of five, strawberry 3 marks. How many children prefer banana or strawberry?' },
    options: { el: ['8', '7', '9', '12'], en: ['8', '7', '9', '12'] },
    correct: 0,
    explanation: {
      el: 'Μπανάνα: μία πεντάδα = 5 παιδιά. Φράουλα: 3 παιδιά. Μαζί: 5 + 3 = 8 παιδιά.',
      en: 'Banana: one group of five = 5 children. Strawberry: 3 children. Together: 5 + 3 = 8 children.',
    },
  },

  // ── 7–11: bar charts ────────────────────────────────────────────────────────
  {
    q: { el: 'Ραβδόγραμμα «Φρούτα στο κυλικείο»: μήλα 8, μπανάνες 5, πορτοκάλια 3, αχλάδια 6. Ποια μπάρα είναι η πιο ψηλή;', en: 'Bar chart “Fruit in the canteen”: apples 8, bananas 5, oranges 3, pears 6. Which bar is the tallest?' },
    options: { el: ['μπανάνες', 'μήλα', 'αχλάδια', 'πορτοκάλια'], en: ['bananas', 'apples', 'pears', 'oranges'] },
    correct: 1,
    explanation: {
      el: 'Σε ένα ραβδόγραμμα η πιο ψηλή μπάρα δείχνει τον μεγαλύτερο αριθμό. Τα μήλα έχουν 8, περισσότερα από όλα.',
      en: 'In a bar chart the tallest bar shows the biggest number. Apples have 8, more than anything else.',
    },
  },
  {
    q: { el: 'Στο ίδιο ραβδόγραμμα (μήλα 8, μπανάνες 5, πορτοκάλια 3, αχλάδια 6), πόσα περισσότερα μήλα από πορτοκάλια υπάρχουν;', en: 'In the same bar chart (apples 8, bananas 5, oranges 3, pears 6), how many more apples than oranges are there?' },
    options: { el: ['5', '11', '3', '2'], en: ['5', '11', '3', '2'] },
    correct: 0,
    explanation: {
      el: '«Πόσα περισσότερα» σημαίνει αφαίρεση: 8 − 3 = 5. (Το 11 είναι 8 + 3 — αυτό θα ήταν «πόσα μαζί».)',
      en: '“How many more” means subtraction: 8 − 3 = 5. (11 is 8 + 3 — that would be “how many together”.)',
    },
  },
  {
    q: { el: 'Ραβδόγραμμα «Πώς ερχόμαστε στο σχολείο»: με τα πόδια 12, με αυτοκίνητο 7, με λεωφορείο 4, με ποδήλατο 2. Πόσα παιδιά έρχονται με λεωφορείο ή με ποδήλατο;', en: 'Bar chart “How we get to school”: on foot 12, by car 7, by bus 4, by bike 2. How many children come by bus or by bike?' },
    options: { el: ['4', '2', '8', '6'], en: ['4', '2', '8', '6'] },
    correct: 3,
    explanation: {
      el: 'Προσθέτουμε τις δύο μπάρες που μας ζητούν: λεωφορείο 4 + ποδήλατο 2 = 6 παιδιά.',
      en: 'We add the two bars we are asked about: bus 4 + bike 2 = 6 children.',
    },
  },
  {
    q: { el: 'Στο ίδιο ραβδόγραμμα (με τα πόδια 12, με αυτοκίνητο 7, με λεωφορείο 4, με ποδήλατο 2), πόσα παιδιά έχει η τάξη συνολικά;', en: 'In the same bar chart (on foot 12, by car 7, by bus 4, by bike 2), how many children does the class have in total?' },
    options: { el: ['23', '27', '19', '25'], en: ['23', '27', '19', '25'] },
    correct: 3,
    explanation: {
      el: 'Προσθέτουμε όλες τις μπάρες, χωρίς να ξεχάσουμε καμία: 12 + 7 + 4 + 2 = 25 παιδιά.',
      en: 'We add all the bars, without forgetting any: 12 + 7 + 4 + 2 = 25 children.',
    },
  },
  {
    q: { el: 'Σε ένα ραβδόγραμμα ο άξονας με τους αριθμούς ανεβαίνει ανά 2: 0, 2, 4, 6, 8. Η μπάρα «γάτες» φτάνει ακριβώς στη μέση ανάμεσα στο 4 και στο 6. Πόσες γάτες δείχνει;', en: 'In a bar chart the number axis goes up in twos: 0, 2, 4, 6, 8. The “cats” bar reaches exactly halfway between 4 and 6. How many cats does it show?' },
    options: { el: ['5', '4', '6', '10'], en: ['5', '4', '6', '10'] },
    correct: 0,
    explanation: {
      el: 'Όταν ο άξονας ανεβαίνει ανά 2, η μέση ανάμεσα στο 4 και στο 6 είναι το 5. Πάντα κοιτάμε πόσο μετράει κάθε γραμμή του άξονα!',
      en: 'When the axis goes up in twos, halfway between 4 and 6 is 5. Always check how much each line of the axis counts for!',
    },
  },

  // ── 12–15: pictograms with a key ────────────────────────────────────────────
  {
    q: { el: 'Εικονόγραμμα «Βιβλία που διαβάσαμε». Κλειδί: 1 εικόνα βιβλίου = 2 βιβλία. Δίπλα στον Πέτρο υπάρχουν 4 εικόνες. Πόσα βιβλία διάβασε;', en: 'Pictogram “Books we read”. Key: 1 book picture = 2 books. Next to Petros there are 4 pictures. How many books did he read?' },
    options: { el: ['4', '6', '8', '2'], en: ['4', '6', '8', '2'] },
    correct: 2,
    explanation: {
      el: 'Κάθε εικόνα αξίζει 2 βιβλία, άρα 4 εικόνες × 2 = 8 βιβλία. Το κλειδί μάς λέει πόσο μετράει κάθε εικόνα.',
      en: 'Each picture is worth 2 books, so 4 pictures × 2 = 8 books. The key tells us how much each picture counts for.',
    },
  },
  {
    q: { el: 'Στο ίδιο εικονόγραμμα (1 εικόνα = 2 βιβλία), η Μαρία διάβασε 10 βιβλία. Πόσες εικόνες ζωγραφίζουμε δίπλα στο όνομά της;', en: 'In the same pictogram (1 picture = 2 books), Maria read 10 books. How many pictures do we draw next to her name?' },
    options: { el: ['10', '5', '20', '8'], en: ['10', '5', '20', '8'] },
    correct: 1,
    explanation: {
      el: 'Πάμε ανάποδα: 10 βιβλία ÷ 2 = 5 εικόνες. Έλεγχος: 5 × 2 = 10.',
      en: 'We go backwards: 10 books ÷ 2 = 5 pictures. Check: 5 × 2 = 10.',
    },
  },
  {
    q: { el: 'Στο ίδιο εικονόγραμμα (1 εικόνα = 2 βιβλία), δίπλα στην Άννα υπάρχουν 3 ολόκληρες εικόνες και μισή εικόνα. Πόσα βιβλία διάβασε;', en: 'In the same pictogram (1 picture = 2 books), next to Anna there are 3 whole pictures and half a picture. How many books did she read?' },
    options: { el: ['3', '6', '7', '8'], en: ['3', '6', '7', '8'] },
    correct: 2,
    explanation: {
      el: '3 ολόκληρες εικόνες = 3 × 2 = 6 βιβλία. Η μισή εικόνα αξίζει 1 βιβλίο. Σύνολο: 6 + 1 = 7 βιβλία.',
      en: '3 whole pictures = 3 × 2 = 6 books. Half a picture is worth 1 book. Total: 6 + 1 = 7 books.',
    },
  },
  {
    q: { el: 'Εικονόγραμμα «Γκολ στο τουρνουά». Κλειδί: 1 μπάλα = 2 γκολ. Ομάδα Α: 3 μπάλες, Ομάδα Β: 5 μπάλες. Πόσα περισσότερα γκολ έβαλε η Ομάδα Β;', en: 'Pictogram “Goals in the tournament”. Key: 1 ball = 2 goals. Team A: 3 balls, Team B: 5 balls. How many more goals did Team B score?' },
    options: { el: ['2', '8', '16', '4'], en: ['2', '8', '16', '4'] },
    correct: 3,
    explanation: {
      el: 'Ομάδα Β: 5 × 2 = 10 γκολ. Ομάδα Α: 3 × 2 = 6 γκολ. Διαφορά: 10 − 6 = 4 γκολ. (Το 2 είναι η διαφορά στις μπάλες, όχι στα γκολ!)',
      en: 'Team B: 5 × 2 = 10 goals. Team A: 3 × 2 = 6 goals. Difference: 10 − 6 = 4 goals. (2 is the difference in balls, not in goals!)',
    },
  },

  // ── 16–18: a conclusion from the data ───────────────────────────────────────
  {
    q: { el: 'Πίνακας «Ο καιρός τον Μάρτιο»: ηλιόλουστες μέρες 15, συννεφιασμένες 10, βροχερές 6. Ποιο συμπέρασμα είναι σωστό;', en: 'Table “The weather in March”: sunny days 15, cloudy 10, rainy 6. Which conclusion is correct?' },
    options: {
      el: ['Οι περισσότερες μέρες ήταν ηλιόλουστες', 'Έβρεξε τις μισές μέρες του μήνα', 'Οι συννεφιασμένες μέρες ήταν οι λιγότερες', 'Δεν έβρεξε καθόλου τον Μάρτιο'],
      en: ['Most days were sunny', 'It rained on half the days of the month', 'Cloudy days were the fewest', 'It did not rain at all in March'],
    },
    correct: 0,
    explanation: {
      el: 'Ο μεγαλύτερος αριθμός είναι το 15 (ηλιόλουστες). Οι βροχερές μέρες ήταν 6 από τις 31 — πολύ λιγότερες από τις μισές.',
      en: 'The biggest number is 15 (sunny). Rainy days were 6 out of 31 — far fewer than half.',
    },
  },
  {
    q: { el: 'Ραβδόγραμμα «Αγαπημένο μάθημα»: Γυμναστική 11, Μαθηματικά 6, Γλώσσα 5, Μουσική 3. Η δασκάλα θέλει να οργανώσει μια γιορτή που θα αρέσει στα περισσότερα παιδιά. Τι της δείχνουν τα δεδομένα;', en: 'Bar chart “Favourite subject”: PE 11, Maths 6, Greek 5, Music 3. The teacher wants to organise a party that most children will enjoy. What do the data suggest?' },
    options: {
      el: ['Να κάνει μια συναυλία με τραγούδια', 'Να κάνει αγώνες δρόμου και παιχνίδια με μπάλα', 'Να κάνει διαγωνισμό ορθογραφίας', 'Να κάνει διαγωνισμό προπαίδειας'],
      en: ['Hold a concert with songs', 'Hold running races and ball games', 'Hold a spelling competition', 'Hold a times-tables competition'],
    },
    correct: 1,
    explanation: {
      el: 'Η πιο ψηλή μπάρα είναι η Γυμναστική με 11 παιδιά. Τα δεδομένα μάς βοηθούν να πάρουμε μια καλή απόφαση: παιχνίδια με κίνηση!',
      en: 'The tallest bar is PE with 11 children. Data help us make a good decision: games with movement!',
    },
  },
  {
    q: { el: 'Πίνακας «Κατοικίδια της τάξης»: σκύλος 7, γάτα 5, ψάρι 3, κανένα 8. Ποια ερώτηση ΔΕΝ μπορεί να απαντηθεί από τον πίνακα;', en: 'Table “Pets in the class”: dog 7, cat 5, fish 3, none 8. Which question can NOT be answered from the table?' },
    options: {
      el: ['Πόσα παιδιά έχουν γάτα;', 'Πόσα παιδιά δεν έχουν κατοικίδιο;', 'Ποιο κατοικίδιο είναι το πιο συνηθισμένο;', 'Πώς λένε τον σκύλο του Νίκου;'],
      en: ['How many children have a cat?', 'How many children have no pet?', 'Which pet is the most common?', 'What is Nikos\'s dog called?'],
    },
    correct: 3,
    explanation: {
      el: 'Ο πίνακας έχει μόνο αριθμούς: γάτα 5, κανένα 8, πιο συνηθισμένος ο σκύλος. Το όνομα ενός σκύλου δεν υπάρχει στα δεδομένα.',
      en: 'The table only has numbers: cat 5, none 8, the dog is the most common. A dog\'s name is not in the data.',
    },
  },
];
