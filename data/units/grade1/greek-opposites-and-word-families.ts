/**
 * Α' Δημοτικού · Γλώσσα · Αντίθετα & οικογένειες λέξεων
 * ======================================================
 * Original questions for a child of 6–7 (curriculum topics only — nothing from textbooks).
 * Two ways of seeing that words are related: by meaning (opposites) and by shape (same root).
 * What the unit covers, in order:
 *   1–6   opposites that describe things: μεγάλος–μικρός, ψηλός–κοντός, ζεστός–κρύος, γρήγορος–αργός
 *   7–10  opposites that are actions or places: ανοίγω–κλείνω, μπαίνω–βγαίνω, πάνω–κάτω, μέρα–νύχτα
 *   11–15 word families: the word that shares its root (παίζω → παιχνίδι, γράφω → γράμμα, ψάρι → ψαράς)
 *   16–18 the odd one out: the word that only looks like it belongs (φως, φωτίζω, φωτεινός… φωλιά)
 * Distractors are words that are near in meaning but not opposite (μεγάλος–τεράστιος),
 * words from the same topic but not the same family (ψάρι–θάλασσα),
 * and look-alikes that start with the same letters.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE1_GREEK_OPPOSITES_AND_WORD_FAMILIES: QuizQuestion[] = [
  // ── 1–6: opposites that describe things ───────────────────────────────────
  {
    q: { el: 'Ποιο είναι το αντίθετο του «μεγάλος»;', en: 'What is the opposite of «μεγάλος» (big)?' },
    options: { el: ['μικρός', 'ψηλός', 'χοντρός', 'καλός'], en: ['μικρός', 'ψηλός', 'χοντρός', 'καλός'] },
    correct: 0,
    explanation: {
      el: 'Μεγάλος – μικρός. Ο ελέφαντας είναι μεγάλος, το μυρμήγκι είναι μικρό. Τα αντίθετα λένε το εντελώς ανάποδο.',
      en: 'Μεγάλος – μικρός (big – small). The elephant is big, the ant is small. Opposites say the complete reverse.',
    },
  },
  {
    q: { el: 'Ποιο είναι το αντίθετο του «ψηλός»;', en: 'What is the opposite of «ψηλός» (tall)?' },
    options: { el: ['μεγάλος', 'κοντός', 'λεπτός', 'δυνατός'], en: ['μεγάλος', 'κοντός', 'λεπτός', 'δυνατός'] },
    correct: 1,
    explanation: {
      el: 'Ψηλός – κοντός. Η καμηλοπάρδαλη είναι ψηλή, ο σκαντζόχοιρος είναι κοντός.',
      en: 'Ψηλός – κοντός (tall – short). The giraffe is tall, the hedgehog is short.',
    },
  },
  {
    q: { el: 'Ποιο είναι το αντίθετο του «ζεστός»;', en: 'What is the opposite of «ζεστός» (hot)?' },
    options: { el: ['καυτός', 'βρεγμένος', 'κρύος', 'γλυκός'], en: ['καυτός', 'βρεγμένος', 'κρύος', 'γλυκός'] },
    correct: 2,
    explanation: {
      el: 'Ζεστός – κρύος. Η σούπα είναι ζεστή, το χιόνι είναι κρύο. Το «καυτός» είναι ακόμα πιο ζεστό, όχι αντίθετο!',
      en: 'Ζεστός – κρύος (hot – cold). Soup is hot, snow is cold. «Καυτός» means even hotter, not the opposite!',
    },
  },
  {
    q: { el: 'Ποιο είναι το αντίθετο του «γρήγορος»;', en: 'What is the opposite of «γρήγορος» (fast)?' },
    options: { el: ['αργός', 'δυνατός', 'μικρός', 'ήσυχος'], en: ['αργός', 'δυνατός', 'μικρός', 'ήσυχος'] },
    correct: 0,
    explanation: {
      el: 'Γρήγορος – αργός. Ο λαγός είναι γρήγορος, η χελώνα είναι αργή.',
      en: 'Γρήγορος – αργός (fast – slow). The hare is fast, the tortoise is slow.',
    },
  },
  {
    q: { el: 'Ο ελέφαντας είναι μεγάλος. Το ποντίκι είναι…', en: 'The elephant is μεγάλος (big). Which word describes the mouse?' },
    options: { el: ['ψηλό', 'κοντό', 'μικρό', 'χοντρό'], en: ['ψηλό', 'κοντό', 'μικρό', 'χοντρό'] },
    correct: 2,
    explanation: {
      el: 'Το ποντίκι είναι μικρό, το αντίθετο του μεγάλου. Προσοχή: για το ποντίκι λέμε «μικρό», για τον ελέφαντα «μεγάλος».',
      en: 'The mouse is μικρό (small), the opposite of big. Note: for the mouse we say «μικρό», for the elephant «μεγάλος».',
    },
  },
  {
    q: { el: 'Ποιο ζευγάρι λέξεων είναι αντίθετα;', en: 'Which pair of words are opposites?' },
    options: { el: ['καλός – κακός', 'μεγάλος – τεράστιος', 'ψηλός – μακρύς', 'κόκκινος – μπλε'], en: ['καλός – κακός', 'μεγάλος – τεράστιος', 'ψηλός – μακρύς', 'κόκκινος – μπλε'] },
    correct: 0,
    explanation: {
      el: 'Καλός – κακός είναι αντίθετα. Το «μεγάλος» και το «τεράστιος» λένε σχεδόν το ίδιο, δεν είναι αντίθετα.',
      en: 'Καλός – κακός (good – bad) are opposites. «Μεγάλος» and «τεράστιος» (big and huge) mean nearly the same, they are not opposites.',
    },
  },

  // ── 7–10: opposites that are actions or places ────────────────────────────
  {
    q: { el: 'Ποιο είναι το αντίθετο του «ανοίγω»;', en: 'What is the opposite of «ανοίγω» (I open)?' },
    options: { el: ['τρέχω', 'παίζω', 'κλείνω', 'κοιμάμαι'], en: ['τρέχω', 'παίζω', 'κλείνω', 'κοιμάμαι'] },
    correct: 2,
    explanation: {
      el: 'Ανοίγω – κλείνω. Ανοίγω την πόρτα για να μπω και την κλείνω όταν φύγω.',
      en: 'Ανοίγω – κλείνω (open – close). I open the door to come in and close it when I leave.',
    },
  },
  {
    q: { el: 'Ποιο είναι το αντίθετο του «μπαίνω»;', en: 'What is the opposite of «μπαίνω» (I go in)?' },
    options: { el: ['πηδάω', 'βγαίνω', 'κάθομαι', 'γελάω'], en: ['πηδάω', 'βγαίνω', 'κάθομαι', 'γελάω'] },
    correct: 1,
    explanation: {
      el: 'Μπαίνω – βγαίνω. Μπαίνω μέσα στο σπίτι και βγαίνω έξω στην αυλή.',
      en: 'Μπαίνω – βγαίνω (go in – go out). I go into the house and go out into the yard.',
    },
  },
  {
    q: { el: 'Ποιο είναι το αντίθετο του «πάνω»;', en: 'What is the opposite of «πάνω» (up)?' },
    options: { el: ['δίπλα', 'μέσα', 'κάτω', 'πίσω'], en: ['δίπλα', 'μέσα', 'κάτω', 'πίσω'] },
    correct: 2,
    explanation: {
      el: 'Πάνω – κάτω. Το πουλί πετάει πάνω, το σκουλήκι σέρνεται κάτω. Το «μέσα» έχει άλλο αντίθετο: «έξω».',
      en: 'Πάνω – κάτω (up – down). The bird flies up, the worm crawls down. «Μέσα» (in) has another opposite: «έξω» (out).',
    },
  },
  {
    q: { el: 'Ποιο είναι το αντίθετο της λέξης «μέρα»;', en: 'What is the opposite of the word «μέρα» (day)?' },
    options: { el: ['πρωί', 'μεσημέρι', 'ήλιος', 'νύχτα'], en: ['πρωί', 'μεσημέρι', 'ήλιος', 'νύχτα'] },
    correct: 3,
    explanation: {
      el: 'Μέρα – νύχτα. Τη μέρα έχει φως και παίζουμε, τη νύχτα είναι σκοτάδι και κοιμόμαστε.',
      en: 'Μέρα – νύχτα (day – night). In the day there is light and we play, at night it is dark and we sleep.',
    },
  },

  // ── 11–15: word families ──────────────────────────────────────────────────
  {
    q: { el: 'Ποια λέξη είναι από την ίδια οικογένεια με το «παίζω»;', en: 'Which word is from the same family as «παίζω» (I play)?' },
    options: { el: ['πάω', 'παιχνίδι', 'πίνω', 'πατάτα'], en: ['πάω', 'παιχνίδι', 'πίνω', 'πατάτα'] },
    correct: 1,
    explanation: {
      el: 'Παίζω – παιχνίδι – παιχνιδιάρης. Όλες κρύβουν μέσα τους το «παι» και μιλάνε για το παιχνίδι.',
      en: 'Παίζω – παιχνίδι – παιχνιδιάρης (play – toy – playful). They all hide «παι» inside and talk about playing.',
    },
  },
  {
    q: { el: 'Ποια λέξη είναι από την ίδια οικογένεια με το «γράφω»;', en: 'Which word is from the same family as «γράφω» (I write)?' },
    options: { el: ['γάτα', 'γάλα', 'γράμμα', 'γέλιο'], en: ['γάτα', 'γάλα', 'γράμμα', 'γέλιο'] },
    correct: 2,
    explanation: {
      el: 'Γράφω – γράμμα – γραφείο. Το «γρα» είναι η ρίζα τους. Η γάτα και το γάλα αρχίζουν με «γ», αλλά δεν έχουν σχέση με το γράψιμο.',
      en: 'Γράφω – γράμμα – γραφείο (write – letter – desk). «Γρα» is their root. Γάτα and γάλα start with «γ», but have nothing to do with writing.',
    },
  },
  {
    q: { el: 'Ποια λέξη ανήκει στην οικογένεια της λέξης «χιόνι»;', en: 'Which word belongs to the family of the word «χιόνι» (snow)?' },
    options: { el: ['χιονάνθρωπος', 'χειμώνας', 'κρύο', 'πάγος'], en: ['χιονάνθρωπος', 'χειμώνας', 'κρύο', 'πάγος'] },
    correct: 0,
    explanation: {
      el: 'Χιόνι – χιονάνθρωπος – χιονίζει. Ο χειμώνας και το κρύο έρχονται μαζί με το χιόνι, αλλά είναι άλλες λέξεις, χωρίς το «χιον».',
      en: 'Χιόνι – χιονάνθρωπος – χιονίζει (snow – snowman – it snows). Winter and cold come with snow, but they are different words, without «χιον».',
    },
  },
  {
    q: { el: 'Ποια λέξη ανήκει στην οικογένεια της λέξης «ψάρι»;', en: 'Which word belongs to the family of the word «ψάρι» (fish)?' },
    options: { el: ['θάλασσα', 'ψαράς', 'νερό', 'βάρκα'], en: ['θάλασσα', 'ψαράς', 'νερό', 'βάρκα'] },
    correct: 1,
    explanation: {
      el: 'Ψάρι – ψαράς – ψαρεύω. Ο ψαράς είναι αυτός που πιάνει ψάρια. Η θάλασσα και η βάρκα είναι φίλες του ψαριού, όχι οικογένεια!',
      en: 'Ψάρι – ψαράς – ψαρεύω (fish – fisherman – I fish). The fisherman is the one who catches fish. The sea and the boat are friends of the fish, not family!',
    },
  },
  {
    q: { el: 'Ποια λέξη ανήκει στην οικογένεια της λέξης «ήλιος»;', en: 'Which word belongs to the family of the word «ήλιος» (sun)?' },
    options: { el: ['ζέστη', 'καλοκαίρι', 'ουρανός', 'ηλιοβασίλεμα'], en: ['ζέστη', 'καλοκαίρι', 'ουρανός', 'ηλιοβασίλεμα'] },
    correct: 3,
    explanation: {
      el: 'Ήλιος – ηλιοβασίλεμα – ηλιόλουστος. Το ηλιοβασίλεμα είναι όταν ο ήλιος «βασιλεύει», δηλαδή δύει το βράδυ.',
      en: 'Ήλιος – ηλιοβασίλεμα – ηλιόλουστος (sun – sunset – sunny). The ηλιοβασίλεμα is when the sun sets in the evening.',
    },
  },

  // ── 16–18: the odd one out ────────────────────────────────────────────────
  {
    q: { el: 'Ποια λέξη ΔΕΝ ανήκει στην ίδια οικογένεια με τις άλλες;', en: 'Which word does NOT belong to the same family as the others?' },
    options: { el: ['παιχνίδι', 'παίζω', 'πατάτα', 'παιχνιδιάρης'], en: ['παιχνίδι', 'παίζω', 'πατάτα', 'παιχνιδιάρης'] },
    correct: 2,
    explanation: {
      el: 'Η πατάτα δεν έχει σχέση με το παιχνίδι. Οι άλλες τρεις έχουν μέσα τους το «παι» και μιλάνε για παιχνίδι.',
      en: 'Πατάτα (potato) has nothing to do with playing. The other three have «παι» inside and talk about play.',
    },
  },
  {
    q: { el: 'Ποια λέξη δεν ταιριάζει στην οικογένεια; βροχή, βρέχει, βροχερός, βιβλίο', en: 'Which word does not fit the family βροχή, βρέχει, βροχερός, βιβλίο?' },
    options: { el: ['βροχή', 'βρέχει', 'βροχερός', 'βιβλίο'], en: ['βροχή', 'βρέχει', 'βροχερός', 'βιβλίο'] },
    correct: 3,
    explanation: {
      el: 'Το βιβλίο δεν ταιριάζει. Βροχή, βρέχει και βροχερός μιλάνε όλες για τη βροχή και έχουν τη ρίζα «βρ-χ».',
      en: 'Βιβλίο (book) does not fit. Βροχή, βρέχει and βροχερός (rain, it rains, rainy) all talk about rain and share the root «βρ-χ».',
    },
  },
  {
    q: { el: 'Ποια λέξη μόνο μοιάζει, αλλά δεν ανήκει στην οικογένεια του «φως»;', en: 'Which word only looks alike, but does not belong to the family of «φως» (light)?' },
    options: { el: ['φωτίζω', 'φωλιά', 'φωτεινός', 'φως'], en: ['φωτίζω', 'φωλιά', 'φωτεινός', 'φως'] },
    correct: 1,
    explanation: {
      el: 'Η φωλιά αρχίζει με «φω», αλλά είναι το σπιτάκι του πουλιού, όχι φως. Φως, φωτίζω, φωτεινός: αυτά είναι οικογένεια.',
      en: 'Φωλιά starts with «φω», but it is a bird\'s nest, not light. Φως, φωτίζω, φωτεινός (light, I light up, bright): those are the family.',
    },
  },
];
