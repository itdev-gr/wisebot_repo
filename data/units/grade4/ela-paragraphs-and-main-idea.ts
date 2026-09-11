/**
 * Δ' Δημοτικού · ELA (English Language Arts) · Παράγραφοι & Κεντρική Ιδέα / Paragraphs & Main Idea
 * ===============================================================================================
 * Original questions for a native English-speaking child of 9–10 (US 4th grade,
 * UK Year 4–5). Every paragraph is written for this unit — nothing is taken from
 * books or websites.
 *
 * What the unit covers, in order:
 *   1–4   paragraph A (bees): topic sentence, supporting detail, best title, summary
 *   5–8   paragraph B (a park clean-up): the sentence that does not belong, main idea,
 *         a detail, best title
 *   9–12  paragraph C (a class recycling corner): topic sentence, a detail that could
 *         be added, one-sentence summary, a detail
 *   13–16 paragraph D (walking to school): main idea, the sentence that does not
 *         belong, best title, summary
 *   17–18 writing your own: picking a topic sentence, picking a supporting detail
 *
 * Distractors are details mistaken for the main idea, off-topic sentences and
 * titles that are too narrow or too broad. Options are the English sentences
 * being tested, so the Greek option list is the same as the English one.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE4_ELA_PARAGRAPHS_AND_MAIN_IDEA: QuizQuestion[] = [
  // ── 1–4: paragraph A — bees ────────────────────────────────────────────────
  {
    q: {
      el: '«Οι μέλισσες είναι πολυάσχολες βοηθοί στον κήπο. Πετούν από λουλούδι σε λουλούδι μαζεύοντας γλυκό νέκταρ. Καθώς επισκέπτονται τα λουλούδια, κίτρινη γύρη κολλάει στα πόδια τους και πέφτει στο επόμενο λουλούδι. Έτσι τα φυτά φτιάχνουν σπόρους και καρπούς. Χωρίς μέλισσες, πολλά από τα φρούτα και τα λαχανικά μας δεν θα φύτρωναν.» Ποια είναι η θεματική πρόταση (topic sentence) της παραγράφου;',
      en: '“Bees are busy helpers in the garden. They fly from flower to flower collecting sweet nectar. As they visit, yellow pollen sticks to their legs and rubs off on the next flower. This helps plants make seeds and fruit. Without bees, many of our fruits and vegetables would not grow.” Which is the topic sentence of the paragraph?',
    },
    options: {
      el: ['Bees are busy helpers in the garden.', 'They fly from flower to flower collecting sweet nectar.', 'This helps plants make seeds and fruit.', 'Without bees, many of our fruits and vegetables would not grow.'],
      en: ['Bees are busy helpers in the garden.', 'They fly from flower to flower collecting sweet nectar.', 'This helps plants make seeds and fruit.', 'Without bees, many of our fruits and vegetables would not grow.'],
    },
    correct: 0,
    explanation: {
      el: 'Η θεματική πρόταση λέει για τι μιλά ολόκληρη η παράγραφος και συνήθως είναι η πρώτη. Όλες οι άλλες προτάσεις εξηγούν ΠΩΣ οι μέλισσες βοηθούν.',
      en: 'The topic sentence tells what the whole paragraph is about, and it is usually the first one. Every other sentence explains HOW bees help.',
    },
  },
  {
    q: {
      el: 'Στην παράγραφο για τις μέλισσες, ποια λεπτομέρεια δείχνει ΠΩΣ οι μέλισσες βοηθούν τα φυτά;',
      en: 'In the paragraph about bees, which detail shows HOW bees help plants?',
    },
    options: {
      el: ['Bees are busy.', 'Pollen sticks to their legs and rubs off on the next flower.', 'Bees like the garden.', 'Nectar is sweet.'],
      en: ['Bees are busy.', 'Pollen sticks to their legs and rubs off on the next flower.', 'Bees like the garden.', 'Nectar is sweet.'],
    },
    correct: 1,
    explanation: {
      el: 'Οι λεπτομέρειες στηρίζουν τη θεματική πρόταση με γεγονότα. Η μεταφορά της γύρης από λουλούδι σε λουλούδι είναι ακριβώς ο τρόπος που οι μέλισσες βοηθούν τα φυτά.',
      en: 'Supporting details back up the topic sentence with facts. Carrying pollen from flower to flower is exactly the way bees help plants.',
    },
  },
  {
    q: {
      el: 'Ποιος είναι ο καλύτερος τίτλος για την παράγραφο για τις μέλισσες;',
      en: 'Which is the best title for the paragraph about bees?',
    },
    options: {
      el: ['My Garden', 'Sweet Nectar', 'Why Bees Matter to Plants', 'How to Grow Vegetables'],
      en: ['My Garden', 'Sweet Nectar', 'Why Bees Matter to Plants', 'How to Grow Vegetables'],
    },
    correct: 2,
    explanation: {
      el: 'Ένας καλός τίτλος καλύπτει ολόκληρη την παράγραφο, όχι μία μόνο λεπτομέρεια. Το «Sweet Nectar» είναι πολύ στενό και το «My Garden» πολύ γενικό.',
      en: 'A good title covers the whole paragraph, not just one detail. “Sweet Nectar” is too narrow, and “My Garden” is too broad.',
    },
  },
  {
    q: {
      el: 'Ποια είναι η καλύτερη περίληψη της παραγράφου για τις μέλισσες σε μία πρόταση;',
      en: 'Which is the best one-sentence summary of the paragraph about bees?',
    },
    options: {
      el: ['Bees collect nectar because it is sweet.', 'Gardens need lots of flowers.', 'Pollen is yellow and sticky.', 'Bees carry pollen between flowers, which helps plants grow food.'],
      en: ['Bees collect nectar because it is sweet.', 'Gardens need lots of flowers.', 'Pollen is yellow and sticky.', 'Bees carry pollen between flowers, which helps plants grow food.'],
    },
    correct: 3,
    explanation: {
      el: 'Μια περίληψη λέει την κεντρική ιδέα με λίγα λόγια και αφήνει έξω τις μικρές λεπτομέρειες. Οι άλλες επιλογές είναι μόνο λεπτομέρειες ή δεν είναι καν στο κείμενο.',
      en: 'A summary gives the main idea in a few words and leaves out the small details. The other choices are only details, or are not in the paragraph at all.',
    },
  },

  // ── 5–8: paragraph B — a park clean-up ─────────────────────────────────────
  {
    q: {
      el: '«Το Σάββατο ήταν η τέλεια μέρα για τον καθαρισμό της γειτονιάς. Δώδεκα οικογένειες συναντήθηκαν στο πάρκο με γάντια και σακούλες. Τα παιδιά μάζευαν περιτυλίγματα ενώ οι μεγάλοι μάζευαν τα φύλλα με τσουγκράνες. Το αγαπημένο μου χρώμα είναι το πράσινο. Ως το μεσημέρι, το πάρκο ήταν πάλι καθαρό και τακτοποιημένο.» Ποια πρόταση ΔΕΝ ανήκει στην παράγραφο;',
      en: '“Saturday was the perfect day for the neighborhood clean-up. Twelve families met at the park with gloves and trash bags. The children picked up wrappers while the adults raked the leaves. My favorite color is green. By noon, the park looked neat and tidy again.” Which sentence does NOT belong in the paragraph?',
    },
    options: {
      el: ['Twelve families met at the park with gloves and trash bags.', 'My favorite color is green.', 'The children picked up wrappers while the adults raked the leaves.', 'By noon, the park looked neat and tidy again.'],
      en: ['Twelve families met at the park with gloves and trash bags.', 'My favorite color is green.', 'The children picked up wrappers while the adults raked the leaves.', 'By noon, the park looked neat and tidy again.'],
    },
    correct: 1,
    explanation: {
      el: 'Κάθε πρόταση μιας παραγράφου πρέπει να μιλά για το ίδιο θέμα. Το αγαπημένο χρώμα του συγγραφέα δεν έχει καμία σχέση με τον καθαρισμό του πάρκου.',
      en: 'Every sentence in a paragraph should be about the same topic. The writer\'s favorite color has nothing to do with cleaning up the park.',
    },
  },
  {
    q: {
      el: 'Ποια είναι η κεντρική ιδέα της παραγράφου για τον καθαρισμό του πάρκου;',
      en: 'What is the main idea of the paragraph about the park clean-up?',
    },
    options: {
      el: ['Children like to pick up wrappers.', 'Twelve is a lucky number.', 'Neighbors worked together to clean the park.', 'Saturday is the best day of the week.'],
      en: ['Children like to pick up wrappers.', 'Twelve is a lucky number.', 'Neighbors worked together to clean the park.', 'Saturday is the best day of the week.'],
    },
    correct: 2,
    explanation: {
      el: 'Η κεντρική ιδέα είναι το μεγάλο μήνυμα που στηρίζουν όλες οι λεπτομέρειες: οικογένειες, γάντια, τσουγκράνες και ένα καθαρό πάρκο δείχνουν όλα ότι οι γείτονες δούλεψαν μαζί.',
      en: 'The main idea is the big point all the details support: families, gloves, rakes and a tidy park all show neighbors working together.',
    },
  },
  {
    q: {
      el: 'Σύμφωνα με την παράγραφο για τον καθαρισμό του πάρκου, τι έκαναν οι μεγάλοι;',
      en: 'According to the park clean-up paragraph, what did the adults do?',
    },
    options: {
      el: ['Picked up wrappers', 'Brought lunch', 'Painted the benches', 'Raked the leaves'],
      en: ['Picked up wrappers', 'Brought lunch', 'Painted the benches', 'Raked the leaves'],
    },
    correct: 3,
    explanation: {
      el: 'Το κείμενο λέει «the children picked up wrappers while the adults raked the leaves». Για μια ερώτηση λεπτομέρειας, ξαναβρές την ακριβή πρόταση στο κείμενο.',
      en: 'The text says “the children picked up wrappers while the adults raked the leaves”. For a detail question, go back and find the exact sentence.',
    },
  },
  {
    q: {
      el: 'Ποιος είναι ο καλύτερος τίτλος για την παράγραφο για τον καθαρισμό του πάρκου;',
      en: 'Which is the best title for the park clean-up paragraph?',
    },
    options: {
      el: ['A Park Clean-up Day', 'Gloves and Bags', 'A Rainy Saturday', 'Colors I Like'],
      en: ['A Park Clean-up Day', 'Gloves and Bags', 'A Rainy Saturday', 'Colors I Like'],
    },
    correct: 0,
    explanation: {
      el: 'Ο τίτλος πρέπει να ταιριάζει με την κεντρική ιδέα. Το «Gloves and Bags» είναι μόνο μια λεπτομέρεια, και η μέρα δεν ήταν βροχερή, ήταν τέλεια.',
      en: 'The title should match the main idea. “Gloves and Bags” is only a detail, and the day wasn\'t rainy, it was perfect.',
    },
  },

  // ── 9–12: paragraph C — a class recycling corner ───────────────────────────
  {
    q: {
      el: '«Η τάξη μας ξεκίνησε μια γωνιά ανακύκλωσης τον Σεπτέμβριο. Βάλαμε τρεις κάδους δίπλα στην πόρτα: έναν για χαρτί, έναν για πλαστικό και έναν για κουτάκια. Κάθε Παρασκευή δύο μαθητές αδειάζουν τους κάδους και ζυγίζουν όσα μαζέψαμε. Τον περασμένο μήνα ανακυκλώσαμε πάνω από είκοσι κιλά χαρτί. Η ανακύκλωση έγινε συνήθεια για όλους στην Αίθουσα 12.» Ποια είναι η θεματική πρόταση;',
      en: '“Our class started a recycling corner in September. We put three bins by the door: one for paper, one for plastic, and one for cans. Every Friday two students empty the bins and weigh what we collected. Last month we recycled over twenty kilograms of paper. Recycling has become a habit for everyone in Room 12.” Which is the topic sentence?',
    },
    options: {
      el: ['Every Friday two students empty the bins and weigh what we collected.', 'Last month we recycled over twenty kilograms of paper.', 'We put three bins by the door.', 'Our class started a recycling corner in September.'],
      en: ['Every Friday two students empty the bins and weigh what we collected.', 'Last month we recycled over twenty kilograms of paper.', 'We put three bins by the door.', 'Our class started a recycling corner in September.'],
    },
    correct: 3,
    explanation: {
      el: 'Η θεματική πρόταση παρουσιάζει το θέμα, τη γωνιά ανακύκλωσης, και οι υπόλοιπες προτάσεις δίνουν λεπτομέρειες γι\' αυτήν: οι κάδοι, η Παρασκευή, τα κιλά.',
      en: 'The topic sentence introduces the subject, the recycling corner, and the other sentences give details about it: the bins, Fridays, the kilograms.',
    },
  },
  {
    q: {
      el: 'Ποια πρόταση θα μπορούσε να ΠΡΟΣΤΕΘΕΙ στην παράγραφο για την ανακύκλωση ως λεπτομέρεια που στηρίζει το θέμα;',
      en: 'Which sentence could be ADDED to the recycling paragraph as a supporting detail?',
    },
    options: {
      el: ['The school bus is yellow.', 'My uncle drives a truck.', 'We also collect empty juice cartons for the plastic bin.', 'Fridays are my favorite day because of gym.'],
      en: ['The school bus is yellow.', 'My uncle drives a truck.', 'We also collect empty juice cartons for the plastic bin.', 'Fridays are my favorite day because of gym.'],
    },
    correct: 2,
    explanation: {
      el: 'Μια λεπτομέρεια που στηρίζει το θέμα πρέπει να μιλά για τη γωνιά ανακύκλωσης. Τα χαρτόκουτα χυμού στον κάδο πλαστικού ταιριάζουν, ενώ το λεωφορείο, ο θείος και η γυμναστική όχι.',
      en: 'A supporting detail has to be about the recycling corner. Juice cartons in the plastic bin fit the topic, while the bus, the uncle and gym class do not.',
    },
  },
  {
    q: {
      el: 'Ποια είναι η καλύτερη περίληψη της παραγράφου για την ανακύκλωση σε μία πρόταση;',
      en: 'Which is the best one-sentence summary of the recycling paragraph?',
    },
    options: {
      el: ['Room 12 has a door.', 'A class set up a recycling corner and now recycles every week.', 'Paper is heavy.', 'Two students are in charge of everything in the class.'],
      en: ['Room 12 has a door.', 'A class set up a recycling corner and now recycles every week.', 'Paper is heavy.', 'Two students are in charge of everything in the class.'],
    },
    correct: 1,
    explanation: {
      el: 'Μια καλή περίληψη ενώνει τη θεματική πρόταση με το κύριο αποτέλεσμα: η τάξη έστησε τη γωνιά και η ανακύκλωση έγινε εβδομαδιαία συνήθεια.',
      en: 'A good summary joins the topic sentence with the main result: the class set up the corner, and recycling became a weekly habit.',
    },
  },
  {
    q: {
      el: 'Σύμφωνα με την παράγραφο για την ανακύκλωση, πόσο συχνά αδειάζουν οι κάδοι;',
      en: 'According to the recycling paragraph, how often are the bins emptied?',
    },
    options: {
      el: ['Every day', 'Once a month', 'Every Friday', 'In September'],
      en: ['Every day', 'Once a month', 'Every Friday', 'In September'],
    },
    correct: 2,
    explanation: {
      el: 'Το κείμενο λέει «Every Friday two students empty the bins». Ο Σεπτέμβριος είναι πότε ξεκίνησε η γωνιά, όχι πότε αδειάζουν οι κάδοι.',
      en: 'The text says “Every Friday two students empty the bins”. September is when the corner started, not when the bins are emptied.',
    },
  },

  // ── 13–16: paragraph D — walking to school ─────────────────────────────────
  {
    q: {
      el: '«Το να πηγαίνεις στο σχολείο με τα πόδια έχει πολλά οφέλη. Γυμνάζει τα πόδια και την καρδιά σου πριν αρχίσει η μέρα. Ο καθαρός αέρας σε βοηθά να νιώθεις ξύπνιος και έτοιμος να μάθεις. Το περπάτημα με φίλους είναι επίσης ένας διασκεδαστικός τρόπος να κουβεντιάσετε πριν το μάθημα. Και το καλύτερο: είναι δωρεάν και δεν μολύνει τον αέρα.» Ποια είναι η κεντρική ιδέα;',
      en: '“Walking to school has many benefits. It gives your legs and heart a good workout before the day begins. Fresh air helps you feel awake and ready to learn. Walking with friends is also a fun way to chat before class. Best of all, it is free and does not pollute the air.” What is the main idea?',
    },
    options: {
      el: ['Walking to school is good for you in many ways.', 'Friends like to chat.', 'Cars pollute the air.', 'School starts early.'],
      en: ['Walking to school is good for you in many ways.', 'Friends like to chat.', 'Cars pollute the air.', 'School starts early.'],
    },
    correct: 0,
    explanation: {
      el: 'Η κεντρική ιδέα είναι αυτό που στηρίζουν όλες οι προτάσεις μαζί: κάθε πρόταση δίνει ένα ακόμη όφελος του περπατήματος. Οι άλλες επιλογές είναι μικρά κομμάτια ή δεν αναφέρονται καν.',
      en: 'The main idea is what all the sentences support together: each one gives another benefit of walking. The other choices are small pieces, or are not even mentioned.',
    },
  },
  {
    q: {
      el: 'Αν προσθέταμε μία πρόταση στην παράγραφο για το περπάτημα στο σχολείο, ποια ΔΕΝ θα ταίριαζε;',
      en: 'If we added one sentence to the paragraph about walking to school, which one would NOT belong?',
    },
    options: {
      el: ['Walking also saves your family money on gas.', 'You can notice birds and flowers along the way.', 'It helps you arrive calm and ready.', 'My dog has brown spots.'],
      en: ['Walking also saves your family money on gas.', 'You can notice birds and flowers along the way.', 'It helps you arrive calm and ready.', 'My dog has brown spots.'],
    },
    correct: 3,
    explanation: {
      el: 'Οι τρεις πρώτες προτάσεις δίνουν ακόμη ένα όφελος του περπατήματος, άρα ταιριάζουν. Οι βούλες του σκύλου είναι εκτός θέματος.',
      en: 'The first three sentences each give one more benefit of walking, so they fit. The dog\'s spots are off topic.',
    },
  },
  {
    q: {
      el: 'Ποιος είναι ο καλύτερος τίτλος για την παράγραφο για το περπάτημα στο σχολείο;',
      en: 'Which is the best title for the paragraph about walking to school?',
    },
    options: {
      el: ['The Long Road', 'Why Walk to School?', 'Fresh Air', 'My Best Friend'],
      en: ['The Long Road', 'Why Walk to School?', 'Fresh Air', 'My Best Friend'],
    },
    correct: 1,
    explanation: {
      el: 'Η παράγραφος δίνει λόγους για να περπατάς στο σχολείο, άρα ο τίτλος «Why Walk to School?» καλύπτει τα πάντα. Το «Fresh Air» είναι μόνο ένας από τους λόγους.',
      en: 'The paragraph gives reasons to walk to school, so “Why Walk to School?” covers everything. “Fresh Air” is only one of the reasons.',
    },
  },
  {
    q: {
      el: 'Ποια είναι η καλύτερη περίληψη της παραγράφου για το περπάτημα στο σχολείο σε μία πρόταση;',
      en: 'Which is the best one-sentence summary of the paragraph about walking to school?',
    },
    options: {
      el: ['Walking to school helps your body, your mood, and the planet.', 'Chatting with friends before class is fun.', 'Walking is slow but free.', 'Legs and hearts need workouts.'],
      en: ['Walking to school helps your body, your mood, and the planet.', 'Chatting with friends before class is fun.', 'Walking is slow but free.', 'Legs and hearts need workouts.'],
    },
    correct: 0,
    explanation: {
      el: 'Η περίληψη μαζεύει όλα τα οφέλη σε μία πρόταση: το σώμα (γυμναστική), η διάθεση (ξύπνιος, με φίλους) και ο πλανήτης (χωρίς ρύπανση).',
      en: 'The summary gathers all the benefits into one sentence: your body (a workout), your mood (awake, with friends) and the planet (no pollution).',
    },
  },

  // ── 17–18: writing your own paragraph ──────────────────────────────────────
  {
    q: {
      el: 'Ποια θα ήταν η καλύτερη θεματική πρόταση για μια παράγραφο σχετικά με τα μέρη ενός ποδηλάτου;',
      en: 'Which would be the best topic sentence for a paragraph about the parts of a bicycle?',
    },
    options: {
      el: ['A bicycle has several important parts that work together.', 'The chain can get rusty.', 'I got a bicycle for my birthday.', 'Some bicycles are red.'],
      en: ['A bicycle has several important parts that work together.', 'The chain can get rusty.', 'I got a bicycle for my birthday.', 'Some bicycles are red.'],
    },
    correct: 0,
    explanation: {
      el: 'Μια θεματική πρόταση ανοίγει την πόρτα σε πολλές λεπτομέρειες: μετά από αυτήν μπορείς να γράψεις για τις ρόδες, τα πετάλια, την αλυσίδα και τα φρένα. Οι άλλες είναι μεμονωμένες λεπτομέρειες.',
      en: 'A topic sentence opens the door to lots of details: after it, you can write about the wheels, pedals, chain and brakes. The others are single details.',
    },
  },
  {
    q: {
      el: 'Η θεματική πρόταση είναι: «Winter is my favorite season.» Ποια λεπτομέρεια τη ΣΤΗΡΙΖΕΙ;',
      en: 'The topic sentence is: “Winter is my favorite season.” Which detail SUPPORTS it?',
    },
    options: {
      el: ['Summer holidays are long.', 'My birthday is in May.', 'I love building snow forts with my cousins.', 'The school has a new playground.'],
      en: ['Summer holidays are long.', 'My birthday is in May.', 'I love building snow forts with my cousins.', 'The school has a new playground.'],
    },
    correct: 2,
    explanation: {
      el: 'Μια λεπτομέρεια που στηρίζει τη θεματική πρόταση δίνει έναν λόγο ή ένα παράδειγμα γι\' αυτήν. Τα κάστρα από χιόνι είναι λόγος να αγαπάς τον χειμώνα, ενώ οι άλλες δεν μιλούν καθόλου για χειμώνα.',
      en: 'A supporting detail gives a reason or an example for the topic sentence. Snow forts are a reason to love winter, while the others don\'t mention winter at all.',
    },
  },
];
