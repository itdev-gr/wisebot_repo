/**
 * ΣΤ' Δημοτικού · Γλώσσα · Ρηματικό Σύστημα
 * ==========================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr). Language level: 11–12.
 * What the unit covers, in order:
 *   1–6   the tenses: ενεστώτας, αόριστος, παρατατικός (repeated past), παρακείμενος, υπερσυντέλικος, συντελεσμένος μέλλοντας
 *   7–8   the moods: προστακτική, υποτακτική (να / ας / μη)
 *   9–10  the voices: recognising παθητική φωνή, turning an active sentence into a passive one
 *   11–13 aspect choice: εξακολουθητικός vs στιγμιαίος μέλλοντας, the same choice in the imperative
 *   14–15 participles: -οντας/-ώντας (invariable) and -μένος/-η/-ο (agrees like an adjective)
 *   16–18 impersonal verbs, irregular aorists (είδα, είπα…), the passive agent: από for the doer, με for the tool
 */
import type { QuizQuestion } from '../../../types';

export const GRADE6_GREEK_VERB_SYSTEM: QuizQuestion[] = [
  // ── 1–6: the tenses ─────────────────────────────────────────────────────────
  {
    q: { el: 'Σε ποιον χρόνο είναι το ρήμα; «Η Ελένη διαβάζει τώρα ένα βιβλίο.»', en: 'Which tense is the verb in? «Η Ελένη διαβάζει τώρα ένα βιβλίο.» (Eleni is reading a book now.)' },
    options: { el: ['Ενεστώτας', 'Παρατατικός', 'Αόριστος', 'Μέλλοντας'], en: ['Ενεστώτας (present)', 'Παρατατικός (past continuous)', 'Αόριστος (simple past)', 'Μέλλοντας (future)'] },
    correct: 0,
    explanation: {
      el: 'Το «διαβάζει» δείχνει κάτι που γίνεται τώρα. Αυτός είναι ο ενεστώτας.',
      en: '«Διαβάζει» shows something happening right now. That is the ενεστώτας, the present tense.',
    },
  },
  {
    q: { el: 'Σε ποιον χρόνο είναι το ρήμα; «Χθες ο Νίκος έπαιξε μπάλα με τους φίλους του.»', en: 'Which tense is the verb in? «Χθες ο Νίκος έπαιξε μπάλα.» (Yesterday Nikos played football.)' },
    options: { el: ['Παρατατικός', 'Αόριστος', 'Παρακείμενος', 'Ενεστώτας'], en: ['Παρατατικός (past continuous)', 'Αόριστος (simple past)', 'Παρακείμενος (present perfect)', 'Ενεστώτας (present)'] },
    correct: 1,
    explanation: {
      el: 'Το «έπαιξε» δείχνει κάτι που έγινε μία φορά στο παρελθόν και τελείωσε. Αυτός είναι ο αόριστος.',
      en: '«Έπαιξε» shows something that happened once in the past and is finished. That is the αόριστος.',
    },
  },
  {
    q: { el: 'Ποιο ρήμα ταιριάζει; «Κάθε καλοκαίρι ___ στη θάλασσα με τον παππού.»', en: 'Which verb fits? «Κάθε καλοκαίρι ___ στη θάλασσα με τον παππού.» (Every summer we ___ in the sea with grandpa.)' },
    options: { el: ['κολυμπούσαμε', 'κολυμπήσαμε', 'θα κολυμπήσουμε', 'έχουμε κολυμπήσει'], en: ['κολυμπούσαμε', 'κολυμπήσαμε', 'θα κολυμπήσουμε', 'έχουμε κολυμπήσει'] },
    correct: 0,
    explanation: {
      el: 'Το «κάθε καλοκαίρι» δείχνει κάτι που γινόταν ξανά και ξανά στο παρελθόν. Γι\' αυτό βάζουμε παρατατικό: κολυμπούσαμε.',
      en: '«Κάθε καλοκαίρι» (every summer) shows something that happened again and again in the past. That needs the παρατατικός: κολυμπούσαμε.',
    },
  },
  {
    q: { el: 'Ποιο ρήμα ταιριάζει; «Ο Γιώργος ___ ήδη τα μαθήματά του, γι\' αυτό τώρα παίζει.»', en: 'Which verb fits? «Ο Γιώργος ___ ήδη τα μαθήματά του, γι\' αυτό τώρα παίζει.» (Giorgos ___ already finished his homework, so now he is playing.)' },
    options: { el: ['τελείωνε', 'έχει τελειώσει', 'είχε τελειώσει', 'θα τελειώσει'], en: ['τελείωνε', 'έχει τελειώσει', 'είχε τελειώσει', 'θα τελειώσει'] },
    correct: 1,
    explanation: {
      el: 'Ο παρακείμενος (έχω + ρήμα) δείχνει κάτι που τελείωσε, αλλά το αποτέλεσμα το βλέπουμε τώρα: έχει τελειώσει, άρα τώρα παίζει.',
      en: 'The παρακείμενος (έχω + verb) shows something finished whose result we see now: he has finished, so now he plays.',
    },
  },
  {
    q: { el: 'Ποιο ρήμα ταιριάζει; «Όταν φτάσαμε στον σταθμό, το τρένο ___ ήδη.»', en: 'Which verb fits? «Όταν φτάσαμε στον σταθμό, το τρένο ___ ήδη.» (When we got to the station, the train ___ already.)' },
    options: { el: ['φεύγει', 'έφυγε', 'είχε φύγει', 'θα έχει φύγει'], en: ['φεύγει', 'έφυγε', 'είχε φύγει', 'θα έχει φύγει'] },
    correct: 2,
    explanation: {
      el: 'Το τρένο έφυγε ΠΡΙΝ φτάσουμε εμείς. Για κάτι που είχε τελειώσει πριν από κάτι άλλο στο παρελθόν βάζουμε υπερσυντέλικο: είχε φύγει.',
      en: 'The train left BEFORE we arrived. For something finished before another past event we use the υπερσυντέλικος (είχα + verb): είχε φύγει.',
    },
  },
  {
    q: { el: 'Ποιο ρήμα ταιριάζει; «Μέχρι αύριο το μεσημέρι ___ το γράμμα στη θεία μου.»', en: 'Which verb fits? «Μέχρι αύριο το μεσημέρι ___ το γράμμα.» (By tomorrow noon I ___ the letter.)' },
    options: { el: ['θα γράφω', 'θα γράψω', 'έγραψα', 'θα έχω γράψει'], en: ['θα γράφω', 'θα γράψω', 'έγραψα', 'θα έχω γράψει'] },
    correct: 3,
    explanation: {
      el: 'Το «μέχρι αύριο» δείχνει ότι κάτι θα έχει τελειώσει πριν από μια στιγμή στο μέλλον. Αυτός είναι ο συντελεσμένος μέλλοντας: θα έχω γράψει.',
      en: '«Μέχρι αύριο» (by tomorrow) shows something that will be finished before a point in the future. That is the συντελεσμένος μέλλοντας: θα έχω γράψει.',
    },
  },

  // ── 7–8: the moods ──────────────────────────────────────────────────────────
  {
    q: { el: 'Σε ποια έγκλιση είναι το ρήμα; «Γράψε το όνομά σου εδώ.»', en: 'Which mood is the verb in? «Γράψε το όνομά σου εδώ.» (Write your name here.)' },
    options: { el: ['Οριστική', 'Υποτακτική', 'Προστακτική', 'Παρατατικός'], en: ['Οριστική (indicative)', 'Υποτακτική (subjunctive)', 'Προστακτική (imperative)', 'Παρατατικός (a tense)'] },
    correct: 2,
    explanation: {
      el: 'Το «γράψε» δίνει μια προσταγή. Η έγκλιση που προστάζει ή παρακαλεί λέγεται προστακτική. (Ο παρατατικός είναι χρόνος, όχι έγκλιση!)',
      en: '«Γράψε» gives an order. The mood that orders or asks is the προστακτική. (Παρατατικός is a tense, not a mood!)',
    },
  },
  {
    q: { el: 'Σε ποια πρόταση το ρήμα είναι σε υποτακτική;', en: 'In which sentence is the verb in the υποτακτική (subjunctive)?' },
    options: { el: ['Ο Νίκος παίζει μπάλα.', 'Θέλω να παίξω μπάλα.', 'Παίξε μπάλα!', 'Χθες έπαιξα μπάλα.'], en: ['Ο Νίκος παίζει μπάλα. (Nikos plays football.)', 'Θέλω να παίξω μπάλα. (I want to play football.)', 'Παίξε μπάλα! (Play football!)', 'Χθες έπαιξα μπάλα. (Yesterday I played football.)'] },
    correct: 1,
    explanation: {
      el: 'Η υποτακτική έχει μπροστά της τα «να», «ας» ή «μη(ν)». Το «να παίξω» δείχνει κάτι που θέλουμε ή που μπορεί να γίνει.',
      en: 'The υποτακτική comes after «να», «ας» or «μη(ν)». «Να παίξω» shows something we want or something that may happen.',
    },
  },

  // ── 9–10: the voices ────────────────────────────────────────────────────────
  {
    q: { el: 'Σε ποια φωνή είναι το ρήμα; «Το δέντρο φυτεύτηκε από τα παιδιά.»', en: 'Which voice is the verb in? «Το δέντρο φυτεύτηκε από τα παιδιά.» (The tree was planted by the children.)' },
    options: { el: ['Ενεργητική φωνή', 'Παθητική φωνή', 'Ενεστώτας', 'Προστακτική'], en: ['Ενεργητική φωνή (active voice)', 'Παθητική φωνή (passive voice)', 'Ενεστώτας (a tense)', 'Προστακτική (a mood)'] },
    correct: 1,
    explanation: {
      el: 'Το δέντρο δεν κάνει κάτι, κάτι γίνεται σε αυτό. Τα ρήματα που τελειώνουν σε -μαι, -τηκα, -θηκα είναι σε παθητική φωνή.',
      en: 'The tree does not do anything; something is done to it. Verbs ending in -μαι, -τηκα, -θηκα are in the passive voice.',
    },
  },
  {
    q: { el: 'Η πρόταση «Η Μαρία έγραψε το γράμμα» σε παθητική φωνή γίνεται: «Το γράμμα ___ από τη Μαρία.»', en: 'Turn «Η Μαρία έγραψε το γράμμα» (Maria wrote the letter) into the passive: «Το γράμμα ___ από τη Μαρία.»' },
    options: { el: ['γράφτηκε', 'έγραψε', 'γράφεται', 'γράφτηκαν'], en: ['γράφτηκε', 'έγραψε', 'γράφεται', 'γράφτηκαν'] },
    correct: 0,
    explanation: {
      el: 'Στην παθητική φωνή το γράμμα γίνεται υποκείμενο, και ο χρόνος μένει αόριστος: έγραψε → γράφτηκε. Ένα γράμμα, άρα ενικός.',
      en: 'In the passive the letter becomes the subject and the tense stays αόριστος: έγραψε → γράφτηκε. One letter, so singular.',
    },
  },

  // ── 11–13: aspect — once or again and again? ───────────────────────────────
  {
    q: { el: 'Ποιο ρήμα ταιριάζει; «Από εδώ και πέρα, κάθε πρωί θα ___ λίγο πριν το σχολείο.»', en: 'Which verb fits? «Κάθε πρωί θα ___ λίγο πριν το σχολείο.» (Every morning I will ___ a little before school.)' },
    options: { el: ['θα διαβάσω', 'θα διαβάζω', 'θα έχω διαβάσει', 'διάβασα'], en: ['θα διαβάσω', 'θα διαβάζω', 'θα έχω διαβάσει', 'διάβασα'] },
    correct: 1,
    explanation: {
      el: 'Το «κάθε πρωί» δείχνει κάτι που θα γίνεται συνέχεια. Τότε βάζουμε εξακολουθητικό μέλλοντα: θα διαβάζω (όχι θα διαβάσω, που είναι για μία φορά).',
      en: '«Κάθε πρωί» (every morning) shows something that will keep happening, so we use the continuous future: θα διαβάζω (not θα διαβάσω, which is for one time).',
    },
  },
  {
    q: { el: 'Ποιο ρήμα ταιριάζει; «Αύριο θα ___ ένα γράμμα στη γιαγιά μου.»', en: 'Which verb fits? «Αύριο θα ___ ένα γράμμα στη γιαγιά μου.» (Tomorrow I will ___ a letter to my grandma.)' },
    options: { el: ['θα γράφω', 'θα έχω γράψει', 'θα γράψω', 'έγραφα'], en: ['θα γράφω', 'θα έχω γράψει', 'θα γράψω', 'έγραφα'] },
    correct: 2,
    explanation: {
      el: 'Ένα γράμμα, μία φορά, αύριο. Για κάτι που θα γίνει μία φορά βάζουμε στιγμιαίο μέλλοντα: θα γράψω.',
      en: 'One letter, one time, tomorrow. For something that will happen once we use the simple (στιγμιαίος) future: θα γράψω.',
    },
  },
  {
    q: { el: 'Ποια προστακτική ταιριάζει; «___ τα δόντια σου κάθε βράδυ!»', en: 'Which imperative fits? «___ τα δόντια σου κάθε βράδυ!» (___ your teeth every night!)' },
    options: { el: ['Πλύνε', 'Πλένε', 'Πλένεις', 'Έπλενες'], en: ['Πλύνε', 'Πλένε', 'Πλένεις', 'Έπλενες'] },
    correct: 1,
    explanation: {
      el: 'Και η προστακτική διαλέγει: «πλύνε» για μία φορά (πλύνε τα τώρα!), «πλένε» για κάτι που γίνεται συνέχεια (κάθε βράδυ).',
      en: 'The imperative chooses too: «πλύνε» for one time (wash them now!), «πλένε» for something repeated (every night).',
    },
  },

  // ── 14–15: participles ──────────────────────────────────────────────────────
  {
    q: { el: 'Ποια λέξη ταιριάζει; «Τα παιδιά μπήκαν στην τάξη ___.»', en: 'Which word fits? «Τα παιδιά μπήκαν στην τάξη ___.» (The children came into the classroom ___.)' },
    options: { el: ['τραγουδώντας', 'τραγουδούσαν', 'τραγουδισμένα', 'τραγουδήσουν'], en: ['τραγουδώντας', 'τραγουδούσαν', 'τραγουδισμένα', 'τραγουδήσουν'] },
    correct: 0,
    explanation: {
      el: 'Η ενεργητική μετοχή σε -οντας / -ώντας δείχνει πώς ή πότε γίνεται κάτι, και δεν αλλάζει ποτέ μορφή: μπήκαν τραγουδώντας.',
      en: 'The active participle in -οντας / -ώντας shows how or when something happens and never changes form: they came in singing.',
    },
  },
  {
    q: { el: 'Ποια λέξη ταιριάζει; «Η Ελένη γύρισε σπίτι ___ από το τρέξιμο.»', en: 'Which word fits? «Η Ελένη γύρισε σπίτι ___ από το τρέξιμο.» (Eleni came home ___ from running.)' },
    options: { el: ['κουράζοντας', 'κουραστεί', 'κουράστηκε', 'κουρασμένη'], en: ['κουράζοντας', 'κουραστεί', 'κουράστηκε', 'κουρασμένη'] },
    correct: 3,
    explanation: {
      el: 'Η παθητική μετοχή σε -μένος, -μένη, -μένο περιγράφει σαν επίθετο και συμφωνεί με το ουσιαστικό: η Ελένη → κουρασμένη.',
      en: 'The passive participle in -μένος, -μένη, -μένο describes like an adjective and agrees with the noun: η Ελένη → κουρασμένη.',
    },
  },

  // ── 16–18: impersonal verbs, irregular aorists, από / με ───────────────────
  {
    q: { el: 'Σε ποια πρόταση το ρήμα είναι απρόσωπο;', en: 'In which sentence is the verb impersonal (απρόσωπο)?' },
    options: { el: ['Βρέχει από το πρωί.', 'Η Μαρία τρέχει γρήγορα.', 'Ο Νίκος γράφει ένα γράμμα.', 'Το σκυλί παίζει στην αυλή.'], en: ['Βρέχει από το πρωί. (It has been raining since morning.)', 'Η Μαρία τρέχει γρήγορα. (Maria runs fast.)', 'Ο Νίκος γράφει ένα γράμμα. (Nikos writes a letter.)', 'Το σκυλί παίζει στην αυλή. (The dog plays in the yard.)'] },
    correct: 0,
    explanation: {
      el: 'Τα απρόσωπα ρήματα δεν έχουν πρόσωπο που κάνει την πράξη και μπαίνουν πάντα στο τρίτο ενικό: βρέχει, χιονίζει, πρέπει, φαίνεται.',
      en: 'Impersonal verbs have no person doing the action and are always third person singular: βρέχει (it rains), χιονίζει, πρέπει, φαίνεται.',
    },
  },
  {
    q: { el: 'Ποιος είναι ο αόριστος του «βλέπω»; «Χθες ο Γιώργος ___ μια ωραία ταινία.»', en: 'What is the αόριστος of «βλέπω» (I see)? «Χθες ο Γιώργος ___ μια ωραία ταινία.» (Yesterday Giorgos ___ a nice film.)' },
    options: { el: ['έβλεπε', 'έβλεψε', 'είδε', 'βλέψε'], en: ['έβλεπε', 'έβλεψε', 'είδε', 'βλέψε'] },
    correct: 2,
    explanation: {
      el: 'Μερικά ρήματα αλλάζουν εντελώς στον αόριστο: βλέπω → είδα, λέω → είπα, τρώω → έφαγα, πίνω → ήπια. Το «έβλεψε» δεν υπάρχει!',
      en: 'Some verbs change completely in the αόριστος: βλέπω → είδα, λέω → είπα, τρώω → έφαγα, πίνω → ήπια. «Έβλεψε» does not exist!',
    },
  },
  {
    q: { el: 'Ποια πρόταση είναι σωστή;', en: 'Which sentence is correct? (The drawing was made by Eleni with paints.)' },
    options: { el: ['Η ζωγραφιά έγινε από την Ελένη με μπογιές.', 'Η ζωγραφιά έγινε με την Ελένη από μπογιές.', 'Η ζωγραφιά έγινε από την Ελένη από μπογιές.', 'Η ζωγραφιά έγινε με την Ελένη με μπογιές.'], en: ['Η ζωγραφιά έγινε από την Ελένη με μπογιές.', 'Η ζωγραφιά έγινε με την Ελένη από μπογιές.', 'Η ζωγραφιά έγινε από την Ελένη από μπογιές.', 'Η ζωγραφιά έγινε με την Ελένη με μπογιές.'] },
    correct: 0,
    explanation: {
      el: 'Στην παθητική φωνή, αυτός που κάνει την πράξη (το ποιητικό αίτιο) μπαίνει με «από»: από την Ελένη. Το εργαλείο ή το υλικό μπαίνει με «με»: με μπογιές.',
      en: 'In the passive, the doer of the action (ποιητικό αίτιο) takes «από»: από την Ελένη. The tool or material takes «με»: με μπογιές.',
    },
  },
];
