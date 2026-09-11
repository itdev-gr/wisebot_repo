/**
 * Γ' Δημοτικού · Γλώσσα · Επιρρήματα
 * ====================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a child of 8–9. What the unit covers, in order:
 *   1–3   what an adverb is (it answers πώς; πού; πότε; πόσο;) and how to spot it next to the verb
 *   4–6   adverbs of place: εδώ, πάνω, μακριά, έξω
 *   7–9   adverbs of time: χθες, τώρα, πάντα, ποτέ
 *   10–12 adverbs of manner: γρήγορα, δυνατά, προσεκτικά
 *   13–14 adverbs of quantity: πολύ, λίγο
 *   15–16 the endings: most adverbs end in -α (ευγενικά), a few keep -ως (ακριβώς, ευτυχώς)
 *   17–18 adjective or adverb? καλός describes a noun, καλά describes the verb
 */
import type { QuizQuestion } from '../../../types';

export const GRADE3_GREEK_ADVERBS: QuizQuestion[] = [
  // ── 1–3: what an adverb is ──────────────────────────────────────────────────
  {
    q: { el: 'Τι μας λέει συνήθως ένα επίρρημα;', en: 'What does an adverb (επίρρημα) usually tell us?' },
    options: {
      el: ['πώς, πού, πότε ή πόσο γίνεται κάτι', 'ποιος κάνει κάτι', 'σε ποιον ανήκει κάτι', 'πώς λέγεται ένα πράγμα'],
      en: ['how, where, when or how much something happens', 'who does something', 'whom something belongs to', 'what a thing is called'],
    },
    correct: 0,
    explanation: {
      el: 'Το επίρρημα συνοδεύει το ρήμα και απαντάει στις ερωτήσεις πώς; πού; πότε; πόσο; — π.χ. τρέχω γρήγορα, μένω εδώ, ήρθα χθες.',
      en: 'An adverb goes with the verb and answers the questions how? where? when? how much? — e.g. τρέχω γρήγορα, μένω εδώ, ήρθα χθες.',
    },
  },
  {
    q: { el: 'Ποια λέξη είναι επίρρημα στην πρόταση «Ο Νίκος τρέχει γρήγορα»;', en: 'Which word is the adverb in the sentence «Ο Νίκος τρέχει γρήγορα» (Nikos runs fast)?' },
    options: { el: ['Νίκος', 'τρέχει', 'γρήγορα', 'Ο'], en: ['Νίκος', 'τρέχει', 'γρήγορα', 'Ο'] },
    correct: 2,
    explanation: {
      el: 'Ρωτάμε το ρήμα: «Πώς τρέχει;» — γρήγορα. Η λέξη «γρήγορα» είναι επίρρημα τρόπου.',
      en: 'We ask the verb: “How does he run?” — γρήγορα (fast). The word «γρήγορα» is an adverb of manner.',
    },
  },
  {
    q: { el: 'Ποια λέξη είναι επίρρημα στην πρόταση «Η γιαγιά μου μένει μακριά»;', en: 'Which word is the adverb in the sentence «Η γιαγιά μου μένει μακριά» (My grandma lives far away)?' },
    options: { el: ['γιαγιά', 'μακριά', 'μένει', 'μου'], en: ['γιαγιά', 'μακριά', 'μένει', 'μου'] },
    correct: 1,
    explanation: {
      el: 'Ρωτάμε: «Πού μένει;» — μακριά. Το «μακριά» είναι επίρρημα τόπου.',
      en: 'We ask: “Where does she live?” — μακριά (far away). «μακριά» is an adverb of place.',
    },
  },

  // ── 4–6: adverbs of place ───────────────────────────────────────────────────
  {
    q: { el: 'Ποιο επίρρημα απαντάει στην ερώτηση «πού;»;', en: 'Which adverb answers the question «πού;» (where?)?' },
    options: { el: ['χθες', 'πολύ', 'πάνω', 'ήσυχα'], en: ['χθες', 'πολύ', 'πάνω', 'ήσυχα'] },
    correct: 2,
    explanation: {
      el: 'Το «πάνω» λέει πού είναι κάτι: επίρρημα τόπου. Το «χθες» λέει πότε, το «πολύ» πόσο και το «ήσυχα» πώς.',
      en: '«πάνω» (up, on top) says where something is: an adverb of place. «χθες» says when, «πολύ» how much and «ήσυχα» how.',
    },
  },
  {
    q: { el: '«Το βιβλίο σου είναι ___ στο τραπέζι.» Ποιο επίρρημα τόπου ταιριάζει;', en: '«Το βιβλίο σου είναι ___ στο τραπέζι.» (Your book is ___ the table.) Which adverb of place fits?' },
    options: { el: ['πάνω', 'αύριο', 'λίγο', 'γρήγορα'], en: ['πάνω', 'αύριο', 'λίγο', 'γρήγορα'] },
    correct: 0,
    explanation: {
      el: 'Θέλουμε να πούμε πού είναι το βιβλίο: πάνω στο τραπέζι. Τα άλλα δεν απαντούν στο «πού;».',
      en: 'We want to say where the book is: πάνω (on top of) the table. The others do not answer “where?”.',
    },
  },
  {
    q: { el: 'Ποιο από τα παρακάτω ΔΕΝ είναι επίρρημα τόπου;', en: 'Which of the following is NOT an adverb of place?' },
    options: { el: ['εδώ', 'έξω', 'κάτω', 'τώρα'], en: ['εδώ', 'έξω', 'κάτω', 'τώρα'] },
    correct: 3,
    explanation: {
      el: 'Εδώ, έξω, κάτω λένε «πού». Το «τώρα» λέει «πότε», άρα είναι επίρρημα χρόνου.',
      en: 'Εδώ, έξω, κάτω say “where”. «τώρα» (now) says “when”, so it is an adverb of time.',
    },
  },

  // ── 7–9: adverbs of time ────────────────────────────────────────────────────
  {
    q: { el: 'Ποιο επίρρημα απαντάει στην ερώτηση «πότε;»;', en: 'Which adverb answers the question «πότε;» (when?)?' },
    options: { el: ['εκεί', 'χθες', 'καλά', 'πολύ'], en: ['εκεί', 'χθες', 'καλά', 'πολύ'] },
    correct: 1,
    explanation: {
      el: 'Το «χθες» λέει πότε έγινε κάτι: επίρρημα χρόνου. Άλλα επιρρήματα χρόνου: σήμερα, αύριο, τώρα, πάντα, ποτέ.',
      en: '«χθες» (yesterday) says when something happened: an adverb of time. Other adverbs of time: σήμερα, αύριο, τώρα, πάντα, ποτέ.',
    },
  },
  {
    q: { el: '«___ έβρεξε πολύ και δεν βγήκαμε έξω.» Ποιο επίρρημα χρόνου ταιριάζει;', en: '«___ έβρεξε πολύ και δεν βγήκαμε έξω.» (___ it rained a lot and we did not go out.) Which adverb of time fits?' },
    options: { el: ['Χθες', 'Εδώ', 'Λίγο', 'Απαλά'], en: ['Χθες', 'Εδώ', 'Λίγο', 'Απαλά'] },
    correct: 0,
    explanation: {
      el: 'Το ρήμα «έβρεξε» μιλάει για το παρελθόν, άρα ταιριάζει το «χθες». Τα εδώ, λίγο, απαλά δεν λένε «πότε».',
      en: 'The verb «έβρεξε» (it rained) is in the past, so «χθες» (yesterday) fits. Εδώ, λίγο, απαλά do not say “when”.',
    },
  },
  {
    q: { el: 'Ποιο επίρρημα χρόνου σημαίνει «κάθε φορά, συνέχεια»;', en: 'Which adverb of time means “every time, always”?' },
    options: { el: ['ποτέ', 'σπάνια', 'πάντα', 'τώρα'], en: ['ποτέ', 'σπάνια', 'πάντα', 'τώρα'] },
    correct: 2,
    explanation: {
      el: 'Το «πάντα» σημαίνει κάθε φορά. Το «ποτέ» είναι το αντίθετό του, το «σπάνια» σημαίνει λίγες φορές και το «τώρα» αυτή τη στιγμή.',
      en: '«πάντα» means every time. «ποτέ» (never) is its opposite, «σπάνια» means rarely and «τώρα» means right now.',
    },
  },

  // ── 10–12: adverbs of manner ────────────────────────────────────────────────
  {
    q: { el: 'Ποιο επίρρημα απαντάει στην ερώτηση «πώς;»;', en: 'Which adverb answers the question «πώς;» (how?)?' },
    options: { el: ['προσεκτικά', 'εδώ', 'σήμερα', 'λίγο'], en: ['προσεκτικά', 'εδώ', 'σήμερα', 'λίγο'] },
    correct: 0,
    explanation: {
      el: 'Το «προσεκτικά» λέει πώς γίνεται κάτι: επίρρημα τρόπου. Το εδώ λέει πού, το σήμερα πότε, το λίγο πόσο.',
      en: '«προσεκτικά» (carefully) says how something is done: an adverb of manner. Εδώ says where, σήμερα when, λίγο how much.',
    },
  },
  {
    q: { el: '«Η Ελένη διαβάζει το ποίημα ___ για να την ακούνε όλοι.» Ποιο επίρρημα τρόπου ταιριάζει;', en: '«Η Ελένη διαβάζει το ποίημα ___ για να την ακούνε όλοι.» (Eleni reads the poem ___ so everyone can hear her.) Which adverb of manner fits?' },
    options: { el: ['πάνω', 'δυνατά', 'χθες', 'πολλοί'], en: ['πάνω', 'δυνατά', 'χθες', 'πολλοί'] },
    correct: 1,
    explanation: {
      el: 'Πώς διαβάζει; Δυνατά, για να την ακούνε. Το «δυνατά» είναι επίρρημα τρόπου.',
      en: 'How does she read? Δυνατά (loudly), so they can hear her. «δυνατά» is an adverb of manner.',
    },
  },
  {
    q: { el: '«Ο μπαμπάς οδηγεί ___ όταν βρέχει.» Ποιο επίρρημα τρόπου ταιριάζει;', en: '«Ο μπαμπάς οδηγεί ___ όταν βρέχει.» (Dad drives ___ when it rains.) Which adverb of manner fits?' },
    options: { el: ['ψηλά', 'αύριο', 'εκεί', 'προσεκτικά'], en: ['ψηλά', 'αύριο', 'εκεί', 'προσεκτικά'] },
    correct: 3,
    explanation: {
      el: 'Πώς οδηγεί όταν βρέχει; Προσεκτικά. Τα ψηλά και εκεί λένε «πού», το αύριο λέει «πότε».',
      en: 'How does he drive when it rains? Προσεκτικά (carefully). Ψηλά and εκεί say “where”, αύριο says “when”.',
    },
  },

  // ── 13–14: adverbs of quantity ──────────────────────────────────────────────
  {
    q: { el: 'Ποιο επίρρημα απαντάει στην ερώτηση «πόσο;»;', en: 'Which adverb answers the question «πόσο;» (how much?)?' },
    options: { el: ['έξω', 'σιγά', 'πέρυσι', 'πολύ'], en: ['έξω', 'σιγά', 'πέρυσι', 'πολύ'] },
    correct: 3,
    explanation: {
      el: 'Το «πολύ» λέει πόσο: επίρρημα ποσού. Άλλα επιρρήματα ποσού: λίγο, αρκετά, καθόλου.',
      en: '«πολύ» (very, a lot) says how much: an adverb of quantity. Other adverbs of quantity: λίγο, αρκετά, καθόλου.',
    },
  },
  {
    q: { el: '«Πεινάω ___, γι\' αυτό θα φάω μόνο ένα μπισκότο.» Ποιο επίρρημα ποσού ταιριάζει;', en: '«Πεινάω ___, γι\' αυτό θα φάω μόνο ένα μπισκότο.» (I am ___ hungry, so I will eat just one biscuit.) Which adverb of quantity fits?' },
    options: { el: ['πολύ', 'λίγο', 'πάντα', 'μακριά'], en: ['πολύ', 'λίγο', 'πάντα', 'μακριά'] },
    correct: 1,
    explanation: {
      el: 'Μόνο ένα μπισκότο σημαίνει ότι πεινάω λίγο, όχι πολύ. Το «λίγο» είναι επίρρημα ποσού.',
      en: 'Just one biscuit means I am a little hungry, not very. «λίγο» (a little) is an adverb of quantity.',
    },
  },

  // ── 15–16: the endings -α and -ως ───────────────────────────────────────────
  {
    q: { el: '«Ο Κώστας απάντησε ___ στη δασκάλα.» Ποια είναι η σωστή μορφή του επιρρήματος;', en: '«Ο Κώστας απάντησε ___ στη δασκάλα.» (Kostas answered the teacher ___.) Which is the correct adverb form?' },
    options: { el: ['ευγενικός', 'ευγενικά', 'ευγενική', 'ευγενικώς'], en: ['ευγενικός', 'ευγενικά', 'ευγενική', 'ευγενικώς'] },
    correct: 1,
    explanation: {
      el: 'Από το επίθετο «ευγενικός» φτιάχνουμε το επίρρημα με -α: ευγενικά. Τα ευγενικός / ευγενική είναι επίθετα, όχι επιρρήματα.',
      en: 'From the adjective «ευγενικός» we make the adverb with -α: ευγενικά (politely). Ευγενικός / ευγενική are adjectives, not adverbs.',
    },
  },
  {
    q: { el: 'Ποιο επίρρημα είναι σωστά γραμμένο με την κατάληξη -ως;', en: 'Which adverb is correctly written with the ending -ως?' },
    options: { el: ['γρήγορως', 'ήσυχως', 'ακριβώς', 'ωραίως'], en: ['γρήγορως', 'ήσυχως', 'ακριβώς', 'ωραίως'] },
    correct: 2,
    explanation: {
      el: 'Λίγα επιρρήματα κρατούν το -ως: ακριβώς, ευτυχώς, συνήθως, εντελώς. Τα άλλα λέγονται γρήγορα, ήσυχα, ωραία.',
      en: 'A few adverbs keep -ως: ακριβώς, ευτυχώς, συνήθως, εντελώς. The others are γρήγορα, ήσυχα, ωραία.',
    },
  },

  // ── 17–18: adjective or adverb? ─────────────────────────────────────────────
  {
    q: { el: 'Στην πρόταση «Ο Γιάννης είναι καλός μαθητής και διαβάζει καλά», ποια λέξη είναι επίθετο και ποια επίρρημα;', en: 'In the sentence «Ο Γιάννης είναι καλός μαθητής και διαβάζει καλά» (Giannis is a good student and reads well), which word is an adjective and which an adverb?' },
    options: {
      el: ['«καλός» = επίρρημα, «καλά» = επίθετο', 'Και οι δύο λέξεις είναι επίθετα', '«καλός» = επίθετο, «καλά» = επίρρημα', 'Και οι δύο λέξεις είναι επιρρήματα'],
      en: ['«καλός» = adverb, «καλά» = adjective', 'Both words are adjectives', '«καλός» = adjective, «καλά» = adverb', 'Both words are adverbs'],
    },
    correct: 2,
    explanation: {
      el: 'Το «καλός» περιγράφει τον μαθητή (ουσιαστικό): επίθετο. Το «καλά» λέει πώς διαβάζει (ρήμα): επίρρημα.',
      en: '«καλός» describes the student (a noun): adjective. «καλά» says how he reads (a verb): adverb.',
    },
  },
  {
    q: { el: '«Η Άννα τραγουδάει ___.» Ποια λέξη ταιριάζει δίπλα στο ρήμα;', en: '«Η Άννα τραγουδάει ___.» (Anna sings ___.) Which word fits next to the verb?' },
    options: { el: ['ωραίος', 'ωραίο', 'ωραίες', 'ωραία'], en: ['ωραίος', 'ωραίο', 'ωραίες', 'ωραία'] },
    correct: 3,
    explanation: {
      el: 'Δίπλα στο ρήμα θέλουμε επίρρημα: τραγουδάει ωραία. Τα ωραίος, ωραίο, ωραίες είναι επίθετα και πάνε με ουσιαστικά.',
      en: 'Next to the verb we need an adverb: τραγουδάει ωραία (sings nicely). Ωραίος, ωραίο, ωραίες are adjectives and go with nouns.',
    },
  },
];
