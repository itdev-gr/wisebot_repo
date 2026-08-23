/**
 * Α' Δημοτικού · Μελέτη Περιβάλλοντος · Το Σπίτι, η Γειτονιά & ο Τόπος μου
 * =========================================================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a child of 6–7; one short sentence per stem.
 *
 * What the unit covers, in order:
 *   1–5   rooms of a house: where we sleep, cook, wash, eat, play
 *   6–10  the neighbourhood: the baker, the doctor, the post office, the pharmacy, the park
 *   11–14 water places: the coast (sea), the island, the river, the lake
 *   15–18 the mountain, and telling the places apart
 */
import type { QuizQuestion } from '../../../types';

export const GRADE1_SCIENCE_HOME_NEIGHBOURHOOD_PLACE: QuizQuestion[] = [
  // ── 1–5: rooms of a house ───────────────────────────────────────────────────
  {
    q: { el: 'Σε ποιο δωμάτιο κοιμόμαστε;', en: 'In which room do we sleep?' },
    options: { el: ['Στην κουζίνα', 'Στο υπνοδωμάτιο', 'Στο μπάνιο', 'Στο μπαλκόνι'], en: ['In the kitchen', 'In the bedroom', 'In the bathroom', 'On the balcony'] },
    correct: 1,
    explanation: {
      el: 'Στο υπνοδωμάτιο είναι το κρεβάτι μας. Εκεί κοιμόμαστε και ξεκουραζόμαστε.',
      en: 'The bedroom has our bed. That is where we sleep and rest.',
    },
  },
  {
    q: { el: 'Η μαμά μαγειρεύει φακές. Σε ποιο δωμάτιο είναι;', en: 'Mum is cooking lentils. Which room is she in?' },
    options: { el: ['Στο σαλόνι', 'Στο υπνοδωμάτιο', 'Στην κουζίνα', 'Στο μπάνιο'], en: ['In the living room', 'In the bedroom', 'In the kitchen', 'In the bathroom'] },
    correct: 2,
    explanation: {
      el: 'Στην κουζίνα έχουμε την κουζίνα με τα μάτια, το ψυγείο και τον νεροχύτη. Εκεί μαγειρεύουμε.',
      en: 'The kitchen has the stove, the fridge and the sink. That is where we cook.',
    },
  },
  {
    q: { el: 'Πού πλένουμε τα δόντια μας;', en: 'Where do we brush our teeth?' },
    options: { el: ['Στο μπάνιο', 'Στο σαλόνι', 'Στην αποθήκη', 'Στον διάδρομο'], en: ['In the bathroom', 'In the living room', 'In the storeroom', 'In the hallway'] },
    correct: 0,
    explanation: {
      el: 'Στο μπάνιο έχουμε νιπτήρα, μπανιέρα ή ντους. Εκεί πλενόμαστε και πλένουμε τα δόντια μας.',
      en: 'The bathroom has a sink and a bath or shower. That is where we wash and brush our teeth.',
    },
  },
  {
    q: { el: 'Τι βρίσκουμε συνήθως στο σαλόνι;', en: 'What do we usually find in the living room?' },
    options: { el: ['Το ψυγείο', 'Την μπανιέρα', 'Το πλυντήριο', 'Τον καναπέ'], en: ['The fridge', 'The bathtub', 'The washing machine', 'The sofa'] },
    correct: 3,
    explanation: {
      el: 'Στο σαλόνι καθόμαστε όλοι μαζί στον καναπέ, μιλάμε και βλέπουμε τηλεόραση.',
      en: 'In the living room we all sit together on the sofa, talk and watch TV.',
    },
  },
  {
    q: { el: 'Ο Νίκος βάζει το ποδήλατό του έξω από το σπίτι, αλλά μέσα στην αυλή. Πού το έβαλε;', en: 'Nikos leaves his bike outside the house, but inside the fence. Where did he put it?' },
    options: { el: ['Στο μπάνιο', 'Στην κουζίνα', 'Στην αυλή', 'Στο υπνοδωμάτιο'], en: ['In the bathroom', 'In the kitchen', 'In the yard', 'In the bedroom'] },
    correct: 2,
    explanation: {
      el: 'Η αυλή είναι ο χώρος έξω από το σπίτι. Εκεί παίζουμε και αφήνουμε το ποδήλατο.',
      en: 'The yard is the space outside the house. That is where we play and leave the bike.',
    },
  },

  // ── 6–10: the neighbourhood ────────────────────────────────────────────────
  {
    q: { el: 'Ποιος φτιάχνει το ψωμί στη γειτονιά;', en: 'Who makes the bread in the neighbourhood?' },
    options: { el: ['Ο φούρναρης', 'Ο γιατρός', 'Ο ταχυδρόμος', 'Ο μανάβης'], en: ['The baker', 'The doctor', 'The postman', 'The greengrocer'] },
    correct: 0,
    explanation: {
      el: 'Ο φούρναρης ψήνει ψωμί, κουλούρια και τυρόπιτες στον φούρνο της γειτονιάς.',
      en: 'The baker bakes bread, koulouria and cheese pies at the neighbourhood bakery.',
    },
  },
  {
    q: { el: 'Η Ελένη έχει πυρετό. Ποιος θα την εξετάσει;', en: 'Eleni has a fever. Who will examine her?' },
    options: { el: ['Ο φούρναρης', 'Ο γιατρός', 'Ο κουρέας', 'Ο μανάβης'], en: ['The baker', 'The doctor', 'The barber', 'The greengrocer'] },
    correct: 1,
    explanation: {
      el: 'Ο γιατρός μάς εξετάζει όταν είμαστε άρρωστοι και μας λέει τι να κάνουμε για να γίνουμε καλά.',
      en: 'The doctor examines us when we are ill and tells us what to do to get better.',
    },
  },
  {
    q: { el: 'Πού πάμε για να αγοράσουμε μήλα και ντομάτες;', en: 'Where do we go to buy apples and tomatoes?' },
    options: { el: ['Στο φαρμακείο', 'Στο κουρείο', 'Στο ταχυδρομείο', 'Στο μανάβικο'], en: ['To the pharmacy', 'To the barber shop', 'To the post office', 'To the greengrocer'] },
    correct: 3,
    explanation: {
      el: 'Στο μανάβικο ο μανάβης πουλάει φρούτα και λαχανικά: μήλα, ντομάτες, μπανάνες, αγγούρια.',
      en: 'At the greengrocer we buy fruit and vegetables: apples, tomatoes, bananas, cucumbers.',
    },
  },
  {
    q: { el: 'Ο γιατρός έγραψε ένα σιρόπι για τον βήχα. Πού θα το αγοράσουμε;', en: 'The doctor wrote down a cough syrup. Where will we buy it?' },
    options: { el: ['Στο φαρμακείο', 'Στον φούρνο', 'Στο μανάβικο', 'Στο βιβλιοπωλείο'], en: ['At the pharmacy', 'At the bakery', 'At the greengrocer', 'At the bookshop'] },
    correct: 0,
    explanation: {
      el: 'Στο φαρμακείο ο φαρμακοποιός μάς δίνει τα φάρμακα που γράφει ο γιατρός.',
      en: 'At the pharmacy the pharmacist gives us the medicine the doctor writes down.',
    },
  },
  {
    q: { el: 'Ποιος φέρνει τα γράμματα στο σπίτι μας;', en: 'Who brings the letters to our house?' },
    options: { el: ['Ο κουρέας', 'Ο ταχυδρόμος', 'Ο φούρναρης', 'Ο αστυνομικός'], en: ['The barber', 'The postman', 'The baker', 'The police officer'] },
    correct: 1,
    explanation: {
      el: 'Ο ταχυδρόμος παίρνει τα γράμματα από το ταχυδρομείο και τα φέρνει στο γραμματοκιβώτιό μας.',
      en: 'The postman takes the letters from the post office and brings them to our letterbox.',
    },
  },

  // ── 11–14: water places ────────────────────────────────────────────────────
  {
    q: { el: 'Πώς λέγεται το μέρος όπου η στεριά συναντά τη θάλασσα;', en: 'What do we call the place where the land meets the sea?' },
    options: { el: ['Βουνό', 'Δάσος', 'Ακτή', 'Ποτάμι'], en: ['Mountain', 'Forest', 'Coast', 'River'] },
    correct: 2,
    explanation: {
      el: 'Η ακτή είναι εκεί που τελειώνει η στεριά και αρχίζει η θάλασσα. Η παραλία είναι ακτή με άμμο.',
      en: 'The coast is where the land ends and the sea begins. A beach is a coast with sand.',
    },
  },
  {
    q: { el: 'Ο Γιώργος πήγε με το καράβι σε ένα μέρος που έχει θάλασσα γύρω γύρω. Τι είναι;', en: 'Giorgos took a boat to a place with sea all around it. What is it?' },
    options: { el: ['Ένα βουνό', 'Ένα νησί', 'Μια λίμνη', 'Ένα ποτάμι'], en: ['A mountain', 'An island', 'A lake', 'A river'] },
    correct: 1,
    explanation: {
      el: 'Το νησί είναι στεριά που έχει θάλασσα γύρω γύρω. Η Ελλάδα έχει πολλά νησιά, όπως η Κρήτη.',
      en: 'An island is land with sea all around it. Greece has many islands, like Crete.',
    },
  },
  {
    q: { el: 'Ποιο νερό τρέχει και κυλάει προς τη θάλασσα;', en: 'Which water runs and flows towards the sea?' },
    options: { el: ['Το νερό της λίμνης', 'Το νερό της πισίνας', 'Το νερό της θάλασσας', 'Το νερό του ποταμιού'], en: ['The water of a lake', 'The water of a pool', 'The water of the sea', 'The water of a river'] },
    correct: 3,
    explanation: {
      el: 'Το ποτάμι είναι νερό που τρέχει. Ξεκινάει από ψηλά, από το βουνό, και φτάνει στη θάλασσα.',
      en: 'A river is water that runs. It starts up high, on the mountain, and reaches the sea.',
    },
  },
  {
    q: { el: 'Η λίμνη είναι νερό που…', en: 'A lake is water that…' },
    options: { el: ['τρέχει γρήγορα', 'μένει ήσυχο στη στεριά', 'έχει κύματα σαν τη θάλασσα', 'πέφτει από τον ουρανό'], en: ['runs fast', 'stays still on the land', 'has waves like the sea', 'falls from the sky'] },
    correct: 1,
    explanation: {
      el: 'Η λίμνη είναι ήσυχο νερό με στεριά γύρω γύρω. Δεν τρέχει σαν το ποτάμι.',
      en: 'A lake is still water with land all around it. It does not run like a river.',
    },
  },

  // ── 15–18: the mountain and telling places apart ───────────────────────────
  {
    q: { el: 'Τι είναι ο Όλυμπος;', en: 'What is Olympus?' },
    options: { el: ['Ένα ποτάμι', 'Ένα νησί', 'Ένα βουνό', 'Μια λίμνη'], en: ['A river', 'An island', 'A mountain', 'A lake'] },
    correct: 2,
    explanation: {
      el: 'Ο Όλυμπος είναι το πιο ψηλό βουνό της Ελλάδας. Η κορυφή του έχει συχνά χιόνι.',
      en: 'Olympus is the highest mountain in Greece. Its top often has snow.',
    },
  },
  {
    q: { el: 'Πώς λέγεται το πιο ψηλό σημείο του βουνού;', en: 'What do we call the highest point of a mountain?' },
    options: { el: ['Η κορυφή', 'Η ακτή', 'Η πλαγιά', 'Η κοιλάδα'], en: ['The peak', 'The coast', 'The slope', 'The valley'] },
    correct: 0,
    explanation: {
      el: 'Η κορυφή είναι η μύτη του βουνού, το πιο ψηλό του σημείο. Η πλαγιά είναι η κατηφόρα του.',
      en: 'The peak is the tip of the mountain, its highest point. The slope is the part that goes down.',
    },
  },
  {
    q: { el: 'Η Μαρία είδε ένα μέρος με αλμυρό νερό και κύματα. Τι είδε;', en: 'Maria saw a place with salty water and waves. What did she see?' },
    options: { el: ['Μια λίμνη', 'Ένα ποτάμι', 'Ένα βουνό', 'Τη θάλασσα'], en: ['A lake', 'A river', 'A mountain', 'The sea'] },
    correct: 3,
    explanation: {
      el: 'Η θάλασσα έχει αλμυρό νερό και κύματα. Το νερό της λίμνης και του ποταμιού είναι γλυκό.',
      en: 'The sea has salty water and waves. Lake and river water is fresh, not salty.',
    },
  },
  {
    q: { el: 'Ποιο από αυτά δεν έχει νερό;', en: 'Which of these has no water?' },
    options: { el: ['Το ποτάμι', 'Το βουνό', 'Η λίμνη', 'Η θάλασσα'], en: ['The river', 'The mountain', 'The lake', 'The sea'] },
    correct: 1,
    explanation: {
      el: 'Το βουνό είναι ψηλή στεριά με βράχια και δέντρα. Το ποτάμι, η λίμνη και η θάλασσα είναι νερό.',
      en: 'A mountain is high land with rocks and trees. The river, the lake and the sea are water.',
    },
  },
];
