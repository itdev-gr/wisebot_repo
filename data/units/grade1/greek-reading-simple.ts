/**
 * Α' Δημοτικού · Γλώσσα · Διαβάζω Ιστορίες (Reading Stories)
 * =============================================================
 * Reading comprehension of tiny original texts (2–3 short sentences) for a child of 6–7.
 * What the unit covers, in the order a first grader meets it:
 *   1–5   «ποιος / τι / πού» on a single-fact text (name, object, place, colour)
 *   6–11  two-sentence texts: who does what, where something was found, when
 *   12–18 sequence of events: first / then / at the end, and how a character feels
 * Every text is written for this unit — nothing from school books or websites.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE1_GREEK_READING_SIMPLE: QuizQuestion[] = [
  // ── 1–5: who / what / where on one simple text ──────────────────────────────
  {
    q: {
      el: '«Ο Νίκος έχει έναν σκύλο. Τον λένε Ρεξ.» Πώς λένε τον σκύλο;',
      en: '“Nikos has a dog. His name is Rex.” What is the dog\'s name?',
    },
    options: { el: ['Ρεξ', 'Νίκος', 'Μαξ', 'Λούλου'], en: ['Rex', 'Nikos', 'Max', 'Loulou'] },
    correct: 0,
    explanation: {
      el: 'Το κείμενο λέει «Τον λένε Ρεξ». Ο Νίκος είναι το παιδί, ο Ρεξ είναι ο σκύλος.',
      en: 'The text says “His name is Rex”. Nikos is the boy, Rex is the dog.',
    },
  },
  {
    q: {
      el: '«Η Μαρία ζωγραφίζει έναν ήλιο. Ο ήλιος είναι κίτρινος.» Τι ζωγραφίζει η Μαρία;',
      en: '“Maria is drawing a sun. The sun is yellow.” What is Maria drawing?',
    },
    options: { el: ['Ένα φεγγάρι', 'Ένα σπίτι', 'Έναν ήλιο', 'Ένα λουλούδι'], en: ['A moon', 'A house', 'A sun', 'A flower'] },
    correct: 2,
    explanation: {
      el: 'Η πρώτη πρόταση το λέει: «ζωγραφίζει έναν ήλιο». Ψάχνουμε τη λέξη μέσα στο κείμενο.',
      en: 'The first sentence says it: “is drawing a sun”. We look for the word inside the text.',
    },
  },
  {
    q: {
      el: '«Ο Γιώργος παίζει μπάλα στην αυλή. Φωνάζει τον φίλο του.» Πού παίζει ο Γιώργος;',
      en: '“Giorgos is playing ball in the yard. He calls his friend.” Where is Giorgos playing?',
    },
    options: { el: ['Στο δωμάτιο', 'Στην αυλή', 'Στην παραλία', 'Στο σχολείο'], en: ['In his room', 'In the yard', 'At the beach', 'At school'] },
    correct: 1,
    explanation: {
      el: 'Η ερώτηση «πού;» ρωτάει για τον τόπο. Το κείμενο λέει «στην αυλή».',
      en: 'The question “where?” asks about the place. The text says “in the yard”.',
    },
  },
  {
    q: {
      el: '«Η Ελένη τρώει ένα μήλο. Το μήλο είναι κόκκινο.» Τι χρώμα είναι το μήλο;',
      en: '“Eleni is eating an apple. The apple is red.” What colour is the apple?',
    },
    options: { el: ['Πράσινο', 'Κίτρινο', 'Άσπρο', 'Κόκκινο'], en: ['Green', 'Yellow', 'White', 'Red'] },
    correct: 3,
    explanation: {
      el: 'Η δεύτερη πρόταση λέει «Το μήλο είναι κόκκινο». Διαβάζουμε όλο το κείμενο, όχι μόνο την αρχή!',
      en: 'The second sentence says “The apple is red”. We read the whole text, not just the start!',
    },
  },
  {
    q: {
      el: '«Ο παππούς κάθεται στον κήπο. Διαβάζει μια εφημερίδα.» Ποιος διαβάζει;',
      en: '“Grandpa is sitting in the garden. He is reading a newspaper.” Who is reading?',
    },
    options: { el: ['Η γιαγιά', 'Ο μπαμπάς', 'Ο παππούς', 'Ο Νίκος'], en: ['Grandma', 'Dad', 'Grandpa', 'Nikos'] },
    correct: 2,
    explanation: {
      el: 'Η ερώτηση «ποιος;» ρωτάει για το πρόσωπο. Στο κείμενο μόνο ο παππούς κάνει κάτι, άρα αυτός διαβάζει.',
      en: 'The question “who?” asks about the person. Only Grandpa does anything in the text, so he is the one reading.',
    },
  },

  // ── 6–11: two sentences, two facts ─────────────────────────────────────────
  {
    q: {
      el: '«Η γάτα κοιμάται στον καναπέ. Είναι άσπρη και μαλακή.» Πού κοιμάται η γάτα;',
      en: '“The cat is sleeping on the sofa. It is white and soft.” Where is the cat sleeping?',
    },
    options: { el: ['Στον καναπέ', 'Στο κρεβάτι', 'Στον κήπο', 'Στο πάτωμα'], en: ['On the sofa', 'On the bed', 'In the garden', 'On the floor'] },
    correct: 0,
    explanation: {
      el: 'Το κείμενο λέει «κοιμάται στον καναπέ». Το «άσπρη και μαλακή» λέει πώς είναι, όχι πού είναι.',
      en: 'The text says “sleeping on the sofa”. “White and soft” tells us what it is like, not where it is.',
    },
  },
  {
    q: {
      el: '«Η Μαρία και ο Νίκος πάνε στην παραλία. Παίρνουν μαζί τους έναν κουβά.» Ποιοι πάνε στην παραλία;',
      en: '“Maria and Nikos are going to the beach. They take a bucket with them.” Who is going to the beach?',
    },
    options: { el: ['Η Μαρία και η Ελένη', 'Η Μαρία και ο Νίκος', 'Ο Νίκος και ο μπαμπάς', 'Μόνο η Μαρία'], en: ['Maria and Eleni', 'Maria and Nikos', 'Nikos and Dad', 'Only Maria'] },
    correct: 1,
    explanation: {
      el: 'Πάνε δύο παιδιά μαζί: η Μαρία και ο Νίκος. Η λέξη «και» ενώνει τα δύο ονόματα.',
      en: 'Two children go together: Maria and Nikos. The word “and” joins the two names.',
    },
  },
  {
    q: {
      el: '«Ο Νίκος αγόρασε ψωμί. Το έδωσε στη μαμά του.» Τι αγόρασε ο Νίκος;',
      en: '“Nikos bought bread. He gave it to his mum.” What did Nikos buy?',
    },
    options: { el: ['Γάλα', 'Μήλα', 'Τυρί', 'Ψωμί'], en: ['Milk', 'Apples', 'Cheese', 'Bread'] },
    correct: 3,
    explanation: {
      el: 'Η ερώτηση «τι;» ρωτάει για το πράγμα. Το κείμενο λέει «αγόρασε ψωμί».',
      en: 'The question “what?” asks about the thing. The text says “bought bread”.',
    },
  },
  {
    q: {
      el: '«Το πρωί η Ελένη πίνει γάλα. Μετά πάει στο σχολείο.» Πότε πίνει γάλα η Ελένη;',
      en: '“In the morning Eleni drinks milk. Then she goes to school.” When does Eleni drink milk?',
    },
    options: { el: ['Το πρωί', 'Το μεσημέρι', 'Το βράδυ', 'Στο σχολείο'], en: ['In the morning', 'At noon', 'In the evening', 'At school'] },
    correct: 0,
    explanation: {
      el: 'Η ερώτηση «πότε;» ρωτάει για τον χρόνο. Το κείμενο ξεκινάει με «Το πρωί».',
      en: 'The question “when?” asks about the time. The text starts with “In the morning”.',
    },
  },
  {
    q: {
      el: '«Ο Γιώργος έχασε το καπέλο του. Το βρήκε κάτω από το κρεβάτι.» Πού ήταν το καπέλο;',
      en: '“Giorgos lost his hat. He found it under the bed.” Where was the hat?',
    },
    options: { el: ['Πάνω στο τραπέζι', 'Μέσα στην τσάντα', 'Κάτω από το κρεβάτι', 'Στην αυλή'], en: ['On the table', 'In the bag', 'Under the bed', 'In the yard'] },
    correct: 2,
    explanation: {
      el: 'Το κείμενο λέει «Το βρήκε κάτω από το κρεβάτι». Εκεί ήταν το καπέλο.',
      en: 'The text says “He found it under the bed”. That is where the hat was.',
    },
  },
  {
    q: {
      el: '«Η Μαρία έχει δύο αδέρφια, τον Πέτρο και την Άννα. Η Άννα είναι η πιο μικρή.» Πώς λένε τη μικρή αδερφή;',
      en: '“Maria has two siblings, Petros and Anna. Anna is the youngest.” What is the little sister\'s name?',
    },
    options: { el: ['Μαρία', 'Άννα', 'Πέτρος', 'Ελένη'], en: ['Maria', 'Anna', 'Petros', 'Eleni'] },
    correct: 1,
    explanation: {
      el: 'Η δεύτερη πρόταση λέει «Η Άννα είναι η πιο μικρή». Η Μαρία είναι αυτή που έχει τα αδέρφια.',
      en: 'The second sentence says “Anna is the youngest”. Maria is the one who has the siblings.',
    },
  },

  // ── 12–18: sequence of events and feelings ─────────────────────────────────
  {
    q: {
      el: '«Πρώτα ο Νίκος πλένει τα χέρια του. Μετά τρώει το φαγητό του.» Τι κάνει ο Νίκος πρώτα;',
      en: '“First Nikos washes his hands. Then he eats his food.” What does Nikos do first?',
    },
    options: { el: ['Τρώει το φαγητό του', 'Πάει για ύπνο', 'Παίζει', 'Πλένει τα χέρια του'], en: ['Eats his food', 'Goes to sleep', 'Plays', 'Washes his hands'] },
    correct: 3,
    explanation: {
      el: 'Η λέξη «πρώτα» μας δείχνει τι γίνεται στην αρχή: πλένει τα χέρια. Το «μετά» δείχνει τι γίνεται ύστερα.',
      en: 'The word “first” shows what happens at the start: he washes his hands. “Then” shows what comes after.',
    },
  },
  {
    q: {
      el: '«Η Ελένη φοράει τα παπούτσια της. Μετά βγαίνει έξω να παίξει.» Τι κάνει η Ελένη μετά;',
      en: '“Eleni puts on her shoes. Then she goes outside to play.” What does Eleni do next?',
    },
    options: { el: ['Βγαίνει έξω να παίξει', 'Φοράει τα παπούτσια της', 'Τρώει πρωινό', 'Διαβάζει ένα βιβλίο'], en: ['Goes outside to play', 'Puts on her shoes', 'Eats breakfast', 'Reads a book'] },
    correct: 0,
    explanation: {
      el: 'Η λέξη «μετά» δείχνει τι γίνεται ύστερα: βγαίνει έξω να παίξει. Τα παπούτσια τα φόρεσε πριν.',
      en: 'The word “then” shows what happens after: she goes outside to play. She put the shoes on before that.',
    },
  },
  {
    q: {
      el: '«Η Μαρία φυτεύει έναν σπόρο. Τον ποτίζει κάθε μέρα. Μια μέρα βγαίνει ένα λουλούδι.» Τι γίνεται στο τέλος;',
      en: '“Maria plants a seed. She waters it every day. One day a flower comes out.” What happens at the end?',
    },
    options: { el: ['Φυτεύει έναν σπόρο', 'Ποτίζει τον σπόρο', 'Βγαίνει ένα λουλούδι', 'Βρέχει'], en: ['She plants a seed', 'She waters the seed', 'A flower comes out', 'It rains'] },
    correct: 2,
    explanation: {
      el: 'Το τέλος είναι η τελευταία πρόταση: «βγαίνει ένα λουλούδι». Πρώτα σπόρος, μετά νερό, στο τέλος λουλούδι.',
      en: 'The end is the last sentence: “a flower comes out”. First the seed, then the water, at the end the flower.',
    },
  },
  {
    q: {
      el: '«Ο Γιώργος ξυπνάει. Πλένει το πρόσωπό του. Μετά τρώει το πρωινό του.» Τι κάνει ο Γιώργος αμέσως μόλις ξυπνήσει;',
      en: '“Giorgos wakes up. He washes his face. Then he eats his breakfast.” What does Giorgos do right after he wakes up?',
    },
    options: { el: ['Τρώει το πρωινό του', 'Πλένει το πρόσωπό του', 'Πάει στο σχολείο', 'Ντύνεται'], en: ['Eats his breakfast', 'Washes his face', 'Goes to school', 'Gets dressed'] },
    correct: 1,
    explanation: {
      el: 'Η σειρά είναι: ξυπνάει, πλένει το πρόσωπό του, τρώει. Αμέσως μετά το ξύπνημα έρχεται το πλύσιμο.',
      en: 'The order is: wakes up, washes his face, eats. Right after waking up comes the washing.',
    },
  },
  {
    q: {
      el: '«Η γιαγιά ζυμώνει. Βάζει το ψωμί στον φούρνο. Σε λίγο το σπίτι μυρίζει όμορφα.» Γιατί μυρίζει όμορφα το σπίτι;',
      en: '“Grandma kneads the dough. She puts the bread in the oven. Soon the house smells lovely.” Why does the house smell lovely?',
    },
    options: { el: ['Γιατί άνοιξε το παράθυρο', 'Γιατί έβαλε λουλούδια', 'Γιατί καθάρισε το σπίτι', 'Γιατί ψήνεται το ψωμί'], en: ['Because she opened the window', 'Because she put out flowers', 'Because she cleaned the house', 'Because the bread is baking'] },
    correct: 3,
    explanation: {
      el: 'Το κείμενο δεν το λέει με μια λέξη, αλλά το καταλαβαίνουμε: το ψωμί ψήνεται στον φούρνο και μυρίζει όμορφα.',
      en: 'The text does not say it in one word, but we can tell: the bread is baking in the oven and that smells lovely.',
    },
  },
  {
    q: {
      el: '«Ο Νίκος ψάχνει την μπάλα του. Κοιτάζει στο δωμάτιό του. Τελικά τη βρίσκει στον κήπο.» Ποια είναι η σωστή σειρά;',
      en: '“Nikos is looking for his ball. He looks in his room. In the end he finds it in the garden.” Which is the right order?',
    },
    options: {
      el: ['Ψάχνει, κοιτάζει στο δωμάτιο, βρίσκει στον κήπο', 'Βρίσκει στον κήπο, ψάχνει, κοιτάζει στο δωμάτιο', 'Κοιτάζει στο δωμάτιο, βρίσκει στον κήπο, ψάχνει', 'Ψάχνει, βρίσκει στον κήπο, κοιτάζει στο δωμάτιο'],
      en: ['Looks for it, looks in the room, finds it in the garden', 'Finds it in the garden, looks for it, looks in the room', 'Looks in the room, finds it in the garden, looks for it', 'Looks for it, finds it in the garden, looks in the room'],
    },
    correct: 0,
    explanation: {
      el: 'Τα γεγονότα γίνονται με τη σειρά που τα διαβάζουμε: πρώτα ψάχνει, μετά κοιτάζει στο δωμάτιο, στο τέλος βρίσκει την μπάλα.',
      en: 'Events happen in the order we read them: first he looks for it, then he looks in the room, at the end he finds the ball.',
    },
  },
  {
    q: {
      el: '«Η Ελένη φτιάχνει μια τούρτα για τη μαμά της. Τη στολίζει με φράουλες. Η μαμά χαίρεται πολύ.» Πώς νιώθει η μαμά στο τέλος;',
      en: '“Eleni makes a cake for her mum. She decorates it with strawberries. Mum is very happy.” How does Mum feel at the end?',
    },
    options: { el: ['Λυπημένη', 'Χαρούμενη', 'Κουρασμένη', 'Θυμωμένη'], en: ['Sad', 'Happy', 'Tired', 'Angry'] },
    correct: 1,
    explanation: {
      el: 'Η τελευταία πρόταση λέει «Η μαμά χαίρεται πολύ». Όταν κάποιος χαίρεται, είναι χαρούμενος.',
      en: 'The last sentence says “Mum is very happy”. When someone rejoices, they feel happy.',
    },
  },
];
