/**
 * Δ' Δημοτικού · Γλώσσα · Ενεργητική & παθητική φωνή
 * ===================================================
 * All questions are original (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a child of 9–10. What the unit covers, in order:
 *   1–4   recognising the two voices: -ω vs -ομαι/-άμαι/-ιέμαι, πλένω vs πλένομαι
 *   5–8   who does and who receives the action; «από + …» after a passive verb
 *   9–11  conjugating a passive verb: σηκώνεσαι, πλενόμαστε, κρύβονται
 *   12–14 deponent verbs (αποθετικά): έρχομαι, κοιμάμαι, σκέφτομαι look passive but the
 *         subject does the action and there is no active form
 *   15–18 turning an active sentence into passive and back; the passive αόριστος (-θηκε/-χτηκε)
 * Distractors are the mistakes children actually make: -ετε (εσείς, active) for -εται,
 * swapping subject and object without changing the verb, thinking «κοιμάμαι» means someone
 * else acts on me, keeping the active verb in the "passive" sentence. The UI shuffles options.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE4_GREEK_ACTIVE_AND_PASSIVE_VOICE: QuizQuestion[] = [
  // ── 1–4: recognising the two voices ───────────────────────────────────────
  {
    q: { el: 'Τα ρήματα «γράφω, τρέχω, παίζω» ανήκουν στην…', en: 'Which voice do the verbs “γράφω, τρέχω, παίζω” (I write, I run, I play) belong to?' },
    options: { el: ['ενεργητική φωνή', 'παθητική φωνή', 'και στις δύο φωνές', 'σε καμία φωνή'], en: ['ενεργητική φωνή (active voice)', 'παθητική φωνή (passive voice)', 'both voices', 'neither voice'] },
    correct: 0,
    explanation: {
      el: 'Τα ρήματα που τελειώνουν σε -ω στο πρώτο πρόσωπο (γράφω, τρέχω, παίζω) είναι στην ενεργητική φωνή: το υποκείμενο κάνει την ενέργεια.',
      en: 'Verbs ending in -ω in the first person (γράφω, τρέχω, παίζω) are in the active voice: the subject does the action.',
    },
  },
  {
    q: { el: 'Ποιο από τα παρακάτω ρήματα είναι στην παθητική φωνή;', en: 'Which of these verbs is in the passive voice?' },
    options: { el: ['κρύβω', 'κρύβομαι', 'έκρυψα', 'θα κρύψω'], en: ['κρύβω', 'κρύβομαι', 'έκρυψα', 'θα κρύψω'] },
    correct: 1,
    explanation: {
      el: 'Το «κρύβομαι» τελειώνει σε -ομαι, άρα είναι παθητική φωνή: κρύβω τον εαυτό μου. Τα «κρύβω, έκρυψα, θα κρύψω» είναι ενεργητική φωνή σε τρεις χρόνους.',
      en: '“Κρύβομαι” ends in -ομαι, so it is passive: I hide myself. “Κρύβω, έκρυψα, θα κρύψω” are active voice in three tenses.',
    },
  },
  {
    q: { el: 'Τι διαφορά έχει το «πλένω» από το «πλένομαι»;', en: 'What is the difference between “πλένω” and “πλένομαι”?' },
    options: { el: ['πλένω = τώρα, πλένομαι = χθες', 'είναι ακριβώς το ίδιο', 'πλένω = εγώ, πλένομαι = εμείς', 'πλένω = πλένω κάτι άλλο, πλένομαι = πλένω τον εαυτό μου'], en: ['πλένω = now, πλένομαι = yesterday', 'they are exactly the same', 'πλένω = I, πλένομαι = we', 'πλένω = I wash something else, πλένομαι = I wash myself'] },
    correct: 3,
    explanation: {
      el: 'Πλένω τα πιάτα (ενεργητική: η ενέργεια πάει σε κάτι άλλο). Πλένομαι (παθητική: η ενέργεια γυρίζει σε μένα). Και τα δύο είναι ενεστώτας, πρώτο πρόσωπο.',
      en: 'Πλένω τα πιάτα (active: the action goes to something else). Πλένομαι (passive: the action comes back to me). Both are present tense, first person.',
    },
  },
  {
    q: { el: 'Ποιο από τα παρακάτω ρήματα είναι στην ενεργητική φωνή;', en: 'Which of these verbs is in the active voice?' },
    options: { el: ['σηκώνομαι', 'φοβάμαι', 'σηκώνω', 'αγαπιέμαι'], en: ['σηκώνομαι', 'φοβάμαι', 'σηκώνω', 'αγαπιέμαι'] },
    correct: 2,
    explanation: {
      el: 'Μόνο το «σηκώνω» τελειώνει σε -ω. Οι καταλήξεις -ομαι (σηκώνομαι), -άμαι (φοβάμαι) και -ιέμαι (αγαπιέμαι) είναι όλες καταλήξεις της παθητικής φωνής.',
      en: 'Only “σηκώνω” ends in -ω. The endings -ομαι (σηκώνομαι), -άμαι (φοβάμαι) and -ιέμαι (αγαπιέμαι) are all passive-voice endings.',
    },
  },

  // ── 5–8: who does and who receives the action ─────────────────────────────
  {
    q: { el: '«Η μαμά χτενίζει τη Μαρία.» Ποιος κάνει την ενέργεια;', en: '“Η μαμά χτενίζει τη Μαρία.” (Mum combs Maria.) Who does the action?' },
    options: { el: ['η μαμά', 'η Μαρία', 'και οι δύο', 'κανείς'], en: ['η μαμά (mum)', 'η Μαρία (Maria)', 'both of them', 'nobody'] },
    correct: 0,
    explanation: {
      el: 'Το ρήμα «χτενίζει» είναι ενεργητικό, άρα το υποκείμενο (η μαμά) κάνει την ενέργεια και το αντικείμενο (τη Μαρία) τη δέχεται.',
      en: 'The verb “χτενίζει” is active, so the subject (mum) does the action and the object (Maria) receives it.',
    },
  },
  {
    q: { el: '«Η Μαρία χτενίζεται από τη μαμά.» Ποιος δέχεται την ενέργεια;', en: '“Η Μαρία χτενίζεται από τη μαμά.” (Maria is combed by mum.) Who receives the action?' },
    options: { el: ['η μαμά', 'κανείς', 'η Μαρία', 'η χτένα'], en: ['η μαμά (mum)', 'nobody', 'η Μαρία (Maria)', 'η χτένα (the comb)'] },
    correct: 2,
    explanation: {
      el: 'Τώρα το ρήμα είναι παθητικό (χτενίζεται). Το υποκείμενο, η Μαρία, δέχεται την ενέργεια. Ποιος την κάνει; Η μαμά, που τη βρίσκουμε μετά το «από».',
      en: 'Now the verb is passive (χτενίζεται). The subject, Maria, receives the action. Who does it? Mum, whom we find after “από” (by).',
    },
  },
  {
    q: { el: '«Το γράμμα γράφτηκε από τον Νίκο.» Ποιος έγραψε το γράμμα;', en: '“Το γράμμα γράφτηκε από τον Νίκο.” (The letter was written by Nikos.) Who wrote the letter?' },
    options: { el: ['το γράμμα', 'ο Νίκος', 'δεν το λέει η πρόταση', 'η δασκάλα'], en: ['το γράμμα (the letter)', 'ο Νίκος (Nikos)', 'the sentence does not say', 'η δασκάλα (the teacher)'] },
    correct: 1,
    explanation: {
      el: 'Μετά από ένα παθητικό ρήμα, το «από + όνομα» μας λέει ποιος έκανε την ενέργεια. Το γράμμα γράφτηκε από τον Νίκο = ο Νίκος έγραψε το γράμμα.',
      en: 'After a passive verb, “από + name” tells us who did the action. Το γράμμα γράφτηκε από τον Νίκο = Nikos wrote the letter.',
    },
  },
  {
    q: { el: 'Σε ποια πρόταση το υποκείμενο δέχεται την ενέργεια (δεν την κάνει);', en: 'In which sentence does the subject receive the action (rather than doing it)?' },
    options: { el: ['Ο σκύλος κυνηγάει τη γάτα.', 'Η γάτα κυνηγιέται από τον σκύλο.', 'Ο σκύλος τρέχει στην αυλή.', 'Η γάτα πίνει γάλα.'], en: ['Ο σκύλος κυνηγάει τη γάτα. (The dog chases the cat.)', 'Η γάτα κυνηγιέται από τον σκύλο. (The cat is chased by the dog.)', 'Ο σκύλος τρέχει στην αυλή. (The dog runs in the yard.)', 'Η γάτα πίνει γάλα. (The cat drinks milk.)'] },
    correct: 1,
    explanation: {
      el: 'Το «κυνηγιέται» είναι παθητικό: η γάτα (υποκείμενο) δέχεται το κυνήγι, δεν κυνηγάει. Στις άλλες προτάσεις τα ρήματα είναι ενεργητικά και το υποκείμενο κάνει κάτι.',
      en: '“Κυνηγιέται” is passive: the cat (subject) receives the chasing, it does not chase. In the other sentences the verbs are active and the subject does something.',
    },
  },

  // ── 9–11: conjugating a passive verb ──────────────────────────────────────
  {
    q: { el: 'Εσύ ___ κάθε πρωί στις 7. (ρήμα: σηκώνομαι) Ποιος τύπος ταιριάζει;', en: 'You (singular) ___ every morning at 7. (verb: σηκώνομαι, to get up) Which form fits?' },
    options: { el: ['σηκώνεται', 'σηκώνομαι', 'σηκώνεις', 'σηκώνεσαι'], en: ['σηκώνεται', 'σηκώνομαι', 'σηκώνεις', 'σηκώνεσαι'] },
    correct: 3,
    explanation: {
      el: 'Παθητική φωνή, ενεστώτας: εγώ σηκώνομαι, εσύ σηκώνεσαι, αυτός σηκώνεται. Το «σηκώνεις» είναι ενεργητικό (σηκώνεις κάτι).',
      en: 'Passive voice, present: εγώ σηκώνομαι, εσύ σηκώνεσαι, αυτός σηκώνεται. “Σηκώνεις” is active (you lift something).',
    },
  },
  {
    q: { el: 'Εμείς ___ κάθε βράδυ πριν κοιμηθούμε. (ρήμα: πλένομαι) Ποιος τύπος ταιριάζει;', en: 'We ___ every night before going to sleep. (verb: πλένομαι, to wash oneself) Which form fits?' },
    options: { el: ['πλένουμε', 'πλενόμαστε', 'πλένεστε', 'πλένονται'], en: ['πλένουμε', 'πλενόμαστε', 'πλένεστε', 'πλένονται'] },
    correct: 1,
    explanation: {
      el: 'Παθητική φωνή, πληθυντικός: εμείς πλενόμαστε, εσείς πλένεστε, αυτοί πλένονται. Το «πλένουμε» είναι ενεργητικό: πλένουμε τα χέρια μας, τα πιάτα.',
      en: 'Passive voice, plural: εμείς πλενόμαστε, εσείς πλένεστε, αυτοί πλένονται. “Πλένουμε” is active: we wash our hands, the dishes.',
    },
  },
  {
    q: { el: 'Τα παιδιά ___ πίσω από τα δέντρα. (ρήμα: κρύβομαι) Ποιος τύπος ταιριάζει;', en: 'The children ___ behind the trees. (verb: κρύβομαι, to hide oneself) Which form fits?' },
    options: { el: ['κρύβεται', 'κρυβόμαστε', 'κρύβονται', 'κρύβουν'], en: ['κρύβεται', 'κρυβόμαστε', 'κρύβονται', 'κρύβουν'] },
    correct: 2,
    explanation: {
      el: 'Τα παιδιά = αυτά, τρίτο πρόσωπο πληθυντικού της παθητικής φωνής: κρύβονται. Το «κρύβουν» είναι ενεργητικό και θα χρειαζόταν αντικείμενο (κρύβουν τον θησαυρό).',
      en: 'The children = they, third person plural of the passive voice: κρύβονται. “Κρύβουν” is active and would need an object (κρύβουν τον θησαυρό, they hide the treasure).',
    },
  },

  // ── 12–14: deponent verbs ─────────────────────────────────────────────────
  {
    q: { el: 'Το ρήμα «έρχομαι» τελειώνει σε -ομαι, αλλά…', en: 'The verb “έρχομαι” (I come) ends in -ομαι, but what is special about it?' },
    options: { el: ['δεν έχει ενεργητική φωνή (δεν υπάρχει «έρχω»)', 'είναι ενεργητική φωνή', 'σημαίνει ότι κάποιος με φέρνει', 'είναι λάθος γραμμένο'], en: ['it has no active voice (there is no “έρχω”)', 'it is active voice', 'it means that someone brings me', 'it is misspelt'] },
    correct: 0,
    explanation: {
      el: 'Ρήματα όπως το «έρχομαι» λέγονται αποθετικά: έχουν μόνο παθητική μορφή, αλλά το υποκείμενο κάνει την ενέργεια. Δεν υπάρχει ρήμα «έρχω»!',
      en: 'Verbs like “έρχομαι” are called deponent (αποθετικά): they have only a passive form, but the subject does the action. There is no verb “έρχω”!',
    },
  },
  {
    q: { el: 'Ποιο από τα παρακάτω είναι αποθετικό ρήμα (έχει μόνο παθητική μορφή);', en: 'Which of these is a deponent verb (it has only a passive form)?' },
    options: { el: ['κοιμάμαι', 'πλένομαι', 'ντύνομαι', 'κρύβομαι'], en: ['κοιμάμαι (I sleep)', 'πλένομαι (I wash myself)', 'ντύνομαι (I get dressed)', 'κρύβομαι (I hide)'] },
    correct: 0,
    explanation: {
      el: 'Τα πλένομαι, ντύνομαι, κρύβομαι έχουν και ενεργητική φωνή: πλένω, ντύνω, κρύβω. Το «κοιμάμαι» δεν έχει («κοιμώ» δεν υπάρχει), άρα είναι αποθετικό, όπως τα έρχομαι, σκέφτομαι, φοβάμαι.',
      en: 'Πλένομαι, ντύνομαι, κρύβομαι also have an active voice: πλένω, ντύνω, κρύβω. “Κοιμάμαι” does not (“κοιμώ” does not exist), so it is deponent, like έρχομαι, σκέφτομαι, φοβάμαι.',
    },
  },
  {
    q: { el: '«Ο Γιώργος σκέφτεται τη λύση.» Τι ισχύει για το ρήμα «σκέφτεται»;', en: '“Ο Γιώργος σκέφτεται τη λύση.” (Giorgos is thinking about the answer.) What is true of the verb “σκέφτεται”?' },
    options: { el: ['δείχνει ότι κάποιος σκέφτεται τον Γιώργο', 'είναι ενεργητική φωνή', 'έχει παθητική μορφή, αλλά ο Γιώργος κάνει την ενέργεια', 'είναι επίθετο'], en: ['it shows that someone is thinking about Giorgos', 'it is active voice', 'it has a passive form, but Giorgos does the action', 'it is an adjective'] },
    correct: 2,
    explanation: {
      el: 'Το «σκέφτομαι» είναι αποθετικό: μοιάζει παθητικό (-εται), αλλά ο Γιώργος είναι αυτός που σκέφτεται. Κανείς δεν «σκέφτει» τον Γιώργο!',
      en: '“Σκέφτομαι” is deponent: it looks passive (-εται), but Giorgos is the one doing the thinking. Nobody “thinks” Giorgos!',
    },
  },

  // ── 15–18: active ↔ passive ───────────────────────────────────────────────
  {
    q: { el: 'Πώς γίνεται η πρόταση «Η δασκάλα διορθώνει τα γραπτά.» στην παθητική φωνή;', en: 'How does the sentence “Η δασκάλα διορθώνει τα γραπτά.” (The teacher marks the papers.) become passive?' },
    options: { el: ['Τα γραπτά διορθώνουν τη δασκάλα.', 'Η δασκάλα διορθώνεται από τα γραπτά.', 'Η δασκάλα διόρθωσε τα γραπτά.', 'Τα γραπτά διορθώνονται από τη δασκάλα.'], en: ['Τα γραπτά διορθώνουν τη δασκάλα. (The papers mark the teacher.)', 'Η δασκάλα διορθώνεται από τα γραπτά. (The teacher is marked by the papers.)', 'Η δασκάλα διόρθωσε τα γραπτά. (The teacher marked the papers.)', 'Τα γραπτά διορθώνονται από τη δασκάλα. (The papers are marked by the teacher.)'] },
    correct: 3,
    explanation: {
      el: 'Τρία βήματα: το αντικείμενο (τα γραπτά) γίνεται υποκείμενο, το ρήμα γίνεται παθητικό (διορθώνονται) και το παλιό υποκείμενο μπαίνει μετά το «από» (από τη δασκάλα).',
      en: 'Three steps: the object (τα γραπτά) becomes the subject, the verb becomes passive (διορθώνονται), and the old subject goes after “από” (από τη δασκάλα).',
    },
  },
  {
    q: { el: 'Πώς γίνεται η πρόταση «Ο μπαμπάς ετοιμάζει το πρωινό.» στην παθητική φωνή;', en: 'How does the sentence “Ο μπαμπάς ετοιμάζει το πρωινό.” (Dad prepares breakfast.) become passive?' },
    options: { el: ['Ο μπαμπάς ετοιμάζεται για το πρωινό.', 'Το πρωινό ετοιμάζει τον μπαμπά.', 'Το πρωινό ετοιμάζεται από τον μπαμπά.', 'Ο μπαμπάς θα ετοιμάσει το πρωινό.'], en: ['Ο μπαμπάς ετοιμάζεται για το πρωινό. (Dad gets ready for breakfast.)', 'Το πρωινό ετοιμάζει τον μπαμπά. (Breakfast prepares dad.)', 'Το πρωινό ετοιμάζεται από τον μπαμπά. (Breakfast is prepared by dad.)', 'Ο μπαμπάς θα ετοιμάσει το πρωινό. (Dad will prepare breakfast.)'] },
    correct: 2,
    explanation: {
      el: 'Το πρωινό (παλιό αντικείμενο) γίνεται υποκείμενο, το ρήμα γίνεται «ετοιμάζεται» και ο μπαμπάς πάει μετά το «από». Το «ο μπαμπάς ετοιμάζεται» λέει κάτι άλλο: ότι ντύνεται και ετοιμάζεται ο ίδιος!',
      en: 'Το πρωινό (the old object) becomes the subject, the verb becomes “ετοιμάζεται” and dad goes after “από”. “Ο μπαμπάς ετοιμάζεται” says something different: that dad himself is getting ready!',
    },
  },
  {
    q: { el: 'Πώς γίνεται η πρόταση «Το δέντρο ποτίζεται από τον κηπουρό.» στην ενεργητική φωνή;', en: 'How does the sentence “Το δέντρο ποτίζεται από τον κηπουρό.” (The tree is watered by the gardener.) become active?' },
    options: { el: ['Το δέντρο ποτίζει τον κηπουρό.', 'Ο κηπουρός ποτίζεται από το δέντρο.', 'Το δέντρο ποτίστηκε.', 'Ο κηπουρός ποτίζει το δέντρο.'], en: ['Το δέντρο ποτίζει τον κηπουρό. (The tree waters the gardener.)', 'Ο κηπουρός ποτίζεται από το δέντρο. (The gardener is watered by the tree.)', 'Το δέντρο ποτίστηκε. (The tree was watered.)', 'Ο κηπουρός ποτίζει το δέντρο. (The gardener waters the tree.)'] },
    correct: 3,
    explanation: {
      el: 'Αντίστροφα βήματα: αυτός που βρίσκεται μετά το «από» (ο κηπουρός) γίνεται υποκείμενο, το ρήμα γίνεται ενεργητικό (ποτίζει) και το δέντρο γίνεται αντικείμενο.',
      en: 'The steps in reverse: the one after “από” (ο κηπουρός) becomes the subject, the verb becomes active (ποτίζει) and the tree becomes the object.',
    },
  },
  {
    q: { el: '«Η γιαγιά έπλεξε το κασκόλ.» Στην παθητική φωνή: «Το κασκόλ ___ από τη γιαγιά.» Ποιος τύπος ταιριάζει;', en: '“Η γιαγιά έπλεξε το κασκόλ.” (Grandma knitted the scarf.) In the passive: “Το κασκόλ ___ από τη γιαγιά.” Which form fits?' },
    options: { el: ['έπλεξε', 'πλέχτηκε', 'πλέκεται', 'πλεκόταν'], en: ['έπλεξε', 'πλέχτηκε', 'πλέκεται', 'πλεκόταν'] },
    correct: 1,
    explanation: {
      el: 'Το «έπλεξε» είναι αόριστος, άρα και το παθητικό θέλει αόριστο. Ο αόριστος της παθητικής φωνής τελειώνει σε -θηκα, -τηκα ή -χτηκα: πλέχτηκε. Το «πλέκεται» είναι ενεστώτας.',
      en: '“Έπλεξε” is the simple past, so the passive needs the simple past too. The passive simple past ends in -θηκα, -τηκα or -χτηκα: πλέχτηκε. “Πλέκεται” is the present.',
    },
  },
];
