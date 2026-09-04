/**
 * Γ' Δημοτικού · Γλώσσα · Υποκείμενο, Ρήμα, Αντικείμενο
 * =======================================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a child of 8–9. What the unit covers, in order:
 *   1–3   the verb is the action; a sentence without a verb is not complete
 *   4–8   the subject: ask the verb «ποιος;» — it can be a person, a thing, or hidden in the ending
 *   9–12  the object: ask the verb «τι;» / «ποιον;» — and some sentences have none
 *   13–15 word order: the usual Υ–Ρ–Α order, the subject is not always first,
 *         swapping subject and object changes the meaning
 *   16–18 the verb agrees with its subject (one / many)
 */
import type { QuizQuestion } from '../../../types';

export const GRADE3_GREEK_SUBJECT_VERB_OBJECT: QuizQuestion[] = [
  // ── 1–3: the verb is the action ─────────────────────────────────────────────
  {
    q: { el: 'Ποια λέξη δείχνει την πράξη, δηλαδή τι γίνεται, στην πρόταση «Ο Νίκος κλωτσάει την μπάλα»;', en: 'Which word shows the action, that is, what is happening, in the sentence «Ο Νίκος κλωτσάει την μπάλα» (Nikos kicks the ball)?' },
    options: { el: ['Νίκος', 'κλωτσάει', 'μπάλα', 'την'], en: ['Νίκος', 'κλωτσάει', 'μπάλα', 'την'] },
    correct: 1,
    explanation: {
      el: 'Το ρήμα λέει τι κάνει κάποιος: «κλωτσάει». Είναι η καρδιά της πρότασης.',
      en: 'The verb says what someone does: «κλωτσάει» (kicks). It is the heart of the sentence.',
    },
  },
  {
    q: { el: 'Ποια λέξη είναι το ρήμα στην πρόταση «Η γάτα κοιμάται στον καναπέ»;', en: 'Which word is the verb in the sentence «Η γάτα κοιμάται στον καναπέ» (The cat sleeps on the sofa)?' },
    options: { el: ['γάτα', 'καναπέ', 'κοιμάται', 'στον'], en: ['γάτα', 'καναπέ', 'κοιμάται', 'στον'] },
    correct: 2,
    explanation: {
      el: 'Τι κάνει η γάτα; Κοιμάται. Το «κοιμάται» είναι το ρήμα της πρότασης.',
      en: 'What does the cat do? It sleeps. «κοιμάται» is the verb of the sentence.',
    },
  },
  {
    q: { el: 'Ποιο κομμάτι λείπει από την πρόταση «Η Μαρία ___ ένα γράμμα»;', en: 'Which part is missing from the sentence «Η Μαρία ___ ένα γράμμα» (Maria ___ a letter)?' },
    options: { el: ['το υποκείμενο', 'το ρήμα', 'το αντικείμενο', 'το άρθρο'], en: ['the subject', 'the verb', 'the object', 'the article'] },
    correct: 1,
    explanation: {
      el: 'Έχουμε ποιος (η Μαρία) και τι (ένα γράμμα), αλλά όχι την πράξη. Λείπει το ρήμα: «Η Μαρία γράφει ένα γράμμα».',
      en: 'We have who (η Μαρία) and what (ένα γράμμα), but not the action. The verb is missing: «Η Μαρία γράφει ένα γράμμα».',
    },
  },

  // ── 4–8: the subject ────────────────────────────────────────────────────────
  {
    q: { el: 'Ποιο είναι το υποκείμενο στην πρόταση «Η δασκάλα διορθώνει τα τετράδια»;', en: 'What is the subject in the sentence «Η δασκάλα διορθώνει τα τετράδια» (The teacher corrects the notebooks)?' },
    options: { el: ['Η δασκάλα', 'διορθώνει', 'τα τετράδια', 'τα'], en: ['Η δασκάλα', 'διορθώνει', 'τα τετράδια', 'τα'] },
    correct: 0,
    explanation: {
      el: 'Ρωτάμε το ρήμα «ποιος διορθώνει;» — η δασκάλα. Το υποκείμενο είναι αυτός που κάνει την πράξη.',
      en: 'We ask the verb “who corrects?” — η δασκάλα. The subject is the one doing the action.',
    },
  },
  {
    q: { el: 'Ποια ερώτηση κάνουμε στο ρήμα για να βρούμε το υποκείμενο;', en: 'Which question do we ask the verb to find the subject?' },
    options: { el: ['πού;', 'πότε;', 'ποιος;', 'τι;'], en: ['πού; (where?)', 'πότε; (when?)', 'ποιος; (who?)', 'τι; (what?)'] },
    correct: 2,
    explanation: {
      el: 'Η ερώτηση «ποιος;» μας δίνει το υποκείμενο: Ποιος τρέχει; — Ο Νίκος. Το «τι;» μας δίνει το αντικείμενο.',
      en: 'The question “who?” gives us the subject: Who runs? — Ο Νίκος. The question “what?” gives us the object.',
    },
  },
  {
    q: { el: 'Ποιο είναι το υποκείμενο στην πρόταση «Το βράδυ ο παππούς διαβάζει εφημερίδα»;', en: 'What is the subject in the sentence «Το βράδυ ο παππούς διαβάζει εφημερίδα» (In the evening grandpa reads the newspaper)?' },
    options: { el: ['Το βράδυ', 'ο παππούς', 'εφημερίδα', 'διαβάζει'], en: ['Το βράδυ', 'ο παππούς', 'εφημερίδα', 'διαβάζει'] },
    correct: 1,
    explanation: {
      el: 'Ποιος διαβάζει; Ο παππούς. Το «το βράδυ» λέει πότε, δεν είναι το υποκείμενο, ας είναι και πρώτο στην πρόταση.',
      en: 'Who reads? Ο παππούς. «Το βράδυ» says when — it is not the subject, even though it comes first in the sentence.',
    },
  },
  {
    q: { el: '«___ ποτίζει τα λουλούδια.» Ποιο μπορεί να είναι το υποκείμενο;', en: '«___ ποτίζει τα λουλούδια.» (___ waters the flowers.) Which could be the subject?' },
    options: { el: ['Η μαμά', 'Την μπάλα', 'Γρήγορα', 'Χθες'], en: ['Η μαμά', 'Την μπάλα', 'Γρήγορα', 'Χθες'] },
    correct: 0,
    explanation: {
      el: 'Το υποκείμενο είναι κάποιος που μπορεί να ποτίζει: η μαμά. Το «γρήγορα» λέει πώς και το «χθες» πότε.',
      en: 'The subject is someone who can do the watering: η μαμά. «Γρήγορα» says how and «χθες» says when.',
    },
  },
  {
    q: { el: 'Στην πρόταση «Παίζουμε κρυφτό στην αυλή» ποιο είναι το υποκείμενο;', en: 'In the sentence «Παίζουμε κρυφτό στην αυλή» (We play hide-and-seek in the yard), what is the subject?' },
    options: {
      el: ['η αυλή', 'εμείς (μας το λέει η κατάληξη -ουμε)', 'το κρυφτό', 'εσείς'],
      en: ['η αυλή', 'εμείς (the ending -ουμε tells us)', 'το κρυφτό', 'εσείς'],
    },
    correct: 1,
    explanation: {
      el: 'Το υποκείμενο δεν γράφεται πάντα! Η κατάληξη -ουμε του ρήματος μάς λέει ποιος παίζει: εμείς.',
      en: 'The subject is not always written out! The verb ending -ουμε tells us who is playing: εμείς (we).',
    },
  },

  // ── 9–12: the object ────────────────────────────────────────────────────────
  {
    q: { el: 'Ποιο είναι το αντικείμενο στην πρόταση «Ο Πέτρος τρώει ένα μήλο»;', en: 'What is the object in the sentence «Ο Πέτρος τρώει ένα μήλο» (Petros eats an apple)?' },
    options: { el: ['Ο Πέτρος', 'τρώει', 'ένα μήλο', 'ένα'], en: ['Ο Πέτρος', 'τρώει', 'ένα μήλο', 'ένα'] },
    correct: 2,
    explanation: {
      el: 'Ρωτάμε το ρήμα «τι τρώει;» — ένα μήλο. Το αντικείμενο είναι αυτό που δέχεται την πράξη.',
      en: 'We ask the verb “what does he eat?” — ένα μήλο. The object is what receives the action.',
    },
  },
  {
    q: { el: 'Ποια ερώτηση κάνουμε στο ρήμα για να βρούμε το αντικείμενο;', en: 'Which question do we ask the verb to find the object?' },
    options: { el: ['ποιος;', 'πότε;', 'πώς;', 'τι; ή ποιον;'], en: ['ποιος; (who?)', 'πότε; (when?)', 'πώς; (how?)', 'τι; ή ποιον; (what? or whom?)'] },
    correct: 3,
    explanation: {
      el: 'Το αντικείμενο απαντάει στο «τι;» ή «ποιον;»: Τι διαβάζει; — ένα βιβλίο. Ποιον αγκαλιάζει; — τη μαμά.',
      en: 'The object answers “what?” or “whom?”: What does he read? — ένα βιβλίο. Whom does she hug? — τη μαμά.',
    },
  },
  {
    q: { el: 'Ποιο είναι το αντικείμενο στην πρόταση «Η Ελένη αγκαλιάζει τη γιαγιά της»;', en: 'What is the object in the sentence «Η Ελένη αγκαλιάζει τη γιαγιά της» (Eleni hugs her grandma)?' },
    options: { el: ['Η Ελένη', 'αγκαλιάζει', 'της', 'τη γιαγιά της'], en: ['Η Ελένη', 'αγκαλιάζει', 'της', 'τη γιαγιά της'] },
    correct: 3,
    explanation: {
      el: 'Ποιον αγκαλιάζει η Ελένη; Τη γιαγιά της. Αυτή δέχεται την αγκαλιά, άρα είναι το αντικείμενο.',
      en: 'Whom does Eleni hug? Τη γιαγιά της (her grandma). She receives the hug, so she is the object.',
    },
  },
  {
    q: { el: 'Ποια πρόταση ΔΕΝ έχει αντικείμενο;', en: 'Which sentence does NOT have an object?' },
    options: {
      el: ['Ο σκύλος γαβγίζει δυνατά.', 'Ο σκύλος δαγκώνει το κόκαλο.', 'Η Άννα ζωγραφίζει ένα σπίτι.', 'Ο Γιώργος φοράει τα γυαλιά του.'],
      en: ['Ο σκύλος γαβγίζει δυνατά. (The dog barks loudly.)', 'Ο σκύλος δαγκώνει το κόκαλο. (The dog bites the bone.)', 'Η Άννα ζωγραφίζει ένα σπίτι. (Anna draws a house.)', 'Ο Γιώργος φοράει τα γυαλιά του. (Giorgos wears his glasses.)'],
    },
    correct: 0,
    explanation: {
      el: '«Γαβγίζει τι;» — τίποτα, το «δυνατά» λέει μόνο πώς. Στις άλλες υπάρχει αντικείμενο: το κόκαλο, ένα σπίτι, τα γυαλιά του.',
      en: '“Barks what?” — nothing; «δυνατά» only says how. The others have an object: το κόκαλο, ένα σπίτι, τα γυαλιά του.',
    },
  },

  // ── 13–15: word order ───────────────────────────────────────────────────────
  {
    q: { el: 'Ποια πρόταση έχει τη συνηθισμένη σειρά: υποκείμενο – ρήμα – αντικείμενο;', en: 'Which sentence has the usual order: subject – verb – object?' },
    options: {
      el: ['Η Σοφία διαβάζει το γράμμα.', 'Το γράμμα η Σοφία διαβάζει.', 'Διαβάζει το γράμμα η Σοφία.', 'Η Σοφία το γράμμα διαβάζει.'],
      en: ['Η Σοφία διαβάζει το γράμμα.', 'Το γράμμα η Σοφία διαβάζει.', 'Διαβάζει το γράμμα η Σοφία.', 'Η Σοφία το γράμμα διαβάζει.'],
    },
    correct: 0,
    explanation: {
      el: 'Πρώτα ποιος (η Σοφία), μετά τι κάνει (διαβάζει), μετά τι δέχεται την πράξη (το γράμμα). Αυτή είναι η πιο συνηθισμένη σειρά.',
      en: 'First who (η Σοφία), then what she does (διαβάζει), then what receives the action (το γράμμα). That is the most common order.',
    },
  },
  {
    q: { el: 'Στην πρόταση «Την μπάλα την έπιασε ο Νίκος» ποιο είναι το υποκείμενο;', en: 'In the sentence «Την μπάλα την έπιασε ο Νίκος» (The ball, Nikos caught it), what is the subject?' },
    options: { el: ['Την μπάλα', 'ο Νίκος', 'έπιασε', 'την'], en: ['Την μπάλα', 'ο Νίκος', 'έπιασε', 'την'] },
    correct: 1,
    explanation: {
      el: 'Το υποκείμενο δεν είναι πάντα πρώτο! Ρωτάμε «ποιος έπιασε;» — ο Νίκος. «Τι έπιασε;» — την μπάλα, το αντικείμενο.',
      en: 'The subject is not always first! We ask “who caught?” — ο Νίκος. “Caught what?” — την μπάλα, the object.',
    },
  },
  {
    q: { el: 'Ποια πρόταση λέει κάτι ΔΙΑΦΟΡΕΤΙΚΟ από τις άλλες τρεις;', en: 'Which sentence says something DIFFERENT from the other three?' },
    options: {
      el: ['Ο Νίκος φωνάζει την Άννα.', 'Την Άννα τη φωνάζει ο Νίκος.', 'Η Άννα φωνάζει τον Νίκο.', 'Φωνάζει ο Νίκος την Άννα.'],
      en: ['Ο Νίκος φωνάζει την Άννα.', 'Την Άννα τη φωνάζει ο Νίκος.', 'Η Άννα φωνάζει τον Νίκο.', 'Φωνάζει ο Νίκος την Άννα.'],
    },
    correct: 2,
    explanation: {
      el: 'Στις τρεις προτάσεις φωνάζει ο Νίκος (υποκείμενο) την Άννα (αντικείμενο), απλώς με άλλη σειρά. Στην τρίτη φωνάζει η Άννα τον Νίκο — άλλαξαν ρόλους!',
      en: 'In three sentences Nikos (subject) calls Anna (object), just in a different order. In the third, Anna calls Nikos — they swapped roles!',
    },
  },

  // ── 16–18: the verb agrees with the subject ─────────────────────────────────
  {
    q: { el: '«Τα παιδιά ___ στην αυλή.» Ποια μορφή του ρήματος ταιριάζει;', en: '«Τα παιδιά ___ στην αυλή.» (The children ___ in the yard.) Which form of the verb fits?' },
    options: { el: ['παίζει', 'παίζεις', 'παίζω', 'παίζουν'], en: ['παίζει', 'παίζεις', 'παίζω', 'παίζουν'] },
    correct: 3,
    explanation: {
      el: 'Το υποκείμενο «τα παιδιά» είναι πολλά, άρα το ρήμα μπαίνει στον πληθυντικό: τα παιδιά παίζουν.',
      en: 'The subject «τα παιδιά» is plural, so the verb goes in the plural too: τα παιδιά παίζουν.',
    },
  },
  {
    q: { el: '«Η Μαρία και ο Κώστας ___ στο πάρκο.» Ποια μορφή του ρήματος ταιριάζει;', en: '«Η Μαρία και ο Κώστας ___ στο πάρκο.» (Maria and Kostas ___ to the park.) Which form of the verb fits?' },
    options: { el: ['πηγαίνει', 'πηγαίνω', 'πηγαίνουν', 'πηγαίνεις'], en: ['πηγαίνει', 'πηγαίνω', 'πηγαίνουν', 'πηγαίνεις'] },
    correct: 2,
    explanation: {
      el: 'Η Μαρία και ο Κώστας είναι δύο άτομα, άρα το υποκείμενο είναι πληθυντικός: αυτοί πηγαίνουν.',
      en: 'Maria and Kostas are two people, so the subject is plural: αυτοί πηγαίνουν (they go).',
    },
  },
  {
    q: { el: 'Σε ποια πρόταση το ρήμα συμφωνεί σωστά με το υποκείμενο;', en: 'In which sentence does the verb agree correctly with the subject?' },
    options: {
      el: ['Ο μαθητής γράφουν την άσκηση.', 'Οι μαθητές γράφει την άσκηση.', 'Οι μαθητές γράφω την άσκηση.', 'Ο μαθητής γράφει την άσκηση.'],
      en: ['Ο μαθητής γράφουν την άσκηση.', 'Οι μαθητές γράφει την άσκηση.', 'Οι μαθητές γράφω την άσκηση.', 'Ο μαθητής γράφει την άσκηση.'],
    },
    correct: 3,
    explanation: {
      el: 'Ένας μαθητής → γράφει. Πολλοί μαθητές → γράφουν. Το ρήμα ακολουθεί πάντα το υποκείμενο: ένας ή πολλοί.',
      en: 'One student → γράφει. Many students → γράφουν. The verb always follows its subject: one or many.',
    },
  },
];
