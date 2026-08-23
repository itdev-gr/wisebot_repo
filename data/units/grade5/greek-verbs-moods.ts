/**
 * Ε' Δημοτικού · Γλώσσα · Ρήματα: Εγκλίσεις
 * ==========================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a child of 10–11. Order, as an Ε' class meets it:
 *   1–7   the three moods: οριστική, υποτακτική, προστακτική (να/ας, μην + υποτακτική)
 *   8–11  active and passive voice (ενεργητική / παθητική φωνή), endings -ω / -ομαι
 *   12–15 the aorist and the aorist stem (γραφ- / γραψ-, παιζ- / παιξ-)
 *   16–18 irregular verbs: λέω → είπα, πάω → πήγα, τρώω → έφαγα / φάε
 * Distractors are real children's mistakes: the imperfect instead of the aorist,
 * «δεν» instead of «μην» with the imperative, a regular ending on an irregular verb.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE5_GREEK_VERBS_MOODS: QuizQuestion[] = [
  // ── 1–7: the three moods ────────────────────────────────────────────────────
  {
    q: { el: '«Η Μαρία διαβάζει ένα βιβλίο.» Σε ποια έγκλιση είναι το ρήμα «διαβάζει»;', en: '"Η Μαρία διαβάζει ένα βιβλίο." (Maria is reading a book.) Which mood is the verb «διαβάζει» in?' },
    options: { el: ['Οριστική', 'Υποτακτική', 'Προστακτική', 'Μετοχή'], en: ['Οριστική (indicative)', 'Υποτακτική (subjunctive)', 'Προστακτική (imperative)', 'Μετοχή (participle)'] },
    correct: 0,
    explanation: {
      el: 'Η οριστική δείχνει κάτι πραγματικό και σίγουρο: η Μαρία διαβάζει τώρα, αυτό γίνεται στ\' αλήθεια.',
      en: 'The indicative (οριστική) shows something real and certain: Maria is reading right now, it is actually happening.',
    },
  },
  {
    q: { el: 'Ποια έγκλιση χρησιμοποιούμε όταν δίνουμε μια εντολή ή μια οδηγία;', en: 'Which mood do we use when we give an order or an instruction?' },
    options: { el: ['Υποτακτική', 'Οριστική', 'Προστακτική', 'Παρατατικός'], en: ['Υποτακτική (subjunctive)', 'Οριστική (indicative)', 'Προστακτική (imperative)', 'Παρατατικός (imperfect tense)'] },
    correct: 2,
    explanation: {
      el: 'Η προστακτική είναι η έγκλιση της εντολής: «Κλείσε την πόρτα!», «Διάβασε!». Ο παρατατικός δεν είναι έγκλιση, είναι χρόνος.',
      en: 'The imperative (προστακτική) is the mood for commands: «Κλείσε την πόρτα!» (Close the door!). Παρατατικός is a tense, not a mood.',
    },
  },
  {
    q: { el: '«Θέλω να παίξω μπάλα.» Σε ποια έγκλιση είναι το «να παίξω»;', en: '"Θέλω να παίξω μπάλα." (I want to play ball.) Which mood is «να παίξω» in?' },
    options: { el: ['Οριστική', 'Προστακτική', 'Μέλλοντας', 'Υποτακτική'], en: ['Οριστική (indicative)', 'Προστακτική (imperative)', 'Μέλλοντας (future tense)', 'Υποτακτική (subjunctive)'] },
    correct: 3,
    explanation: {
      el: 'Η υποτακτική δείχνει κάτι που θέλουμε ή περιμένουμε να γίνει και έχει μπροστά της το «να» ή το «ας».',
      en: 'The subjunctive (υποτακτική) shows something we want or expect to happen, and it comes after «να» or «ας».',
    },
  },
  {
    q: { el: 'Ποια λεξούλα βάζουμε συνήθως μπροστά από την υποτακτική;', en: 'Which little word usually goes in front of the subjunctive?' },
    options: { el: ['θα', 'να', 'δεν', 'και'], en: ['θα', 'να', 'δεν', 'και'] },
    correct: 1,
    explanation: {
      el: 'Η υποτακτική θέλει «να» ή «ας»: να γράψω, ας φύγουμε. Το «θα» φτιάχνει μέλλοντα και το «δεν» πάει με την οριστική.',
      en: 'The subjunctive takes «να» or «ας»: να γράψω (that I write), ας φύγουμε (let\'s go). «Θα» makes the future and «δεν» goes with the indicative.',
    },
  },
  {
    q: { el: 'Ποια είναι η προστακτική του ρήματος «γράφω» όταν μιλάμε σε ένα παιδί;', en: 'What is the imperative of «γράφω» (I write) when speaking to one child?' },
    options: { el: ['Έγραψε', 'Γράψε', 'Γράφεις', 'Να γράφει'], en: ['Έγραψε', 'Γράψε', 'Γράφεις', 'Να γράφει'] },
    correct: 1,
    explanation: {
      el: '«Γράψε!» είναι η εντολή. Το «έγραψε» (με έ- μπροστά) είναι αόριστος οριστικής: «αυτός έγραψε χθες».',
      en: '«Γράψε!» is the command. «Έγραψε» (with έ- in front) is the aorist indicative: «he wrote yesterday».',
    },
  },
  {
    q: { el: 'Πώς λέμε σωστά σε κάποιον να ΜΗΝ κάνει κάτι;', en: 'How do we correctly tell someone NOT to do something?' },
    options: { el: ['Δεν τρέξε!', 'Όχι τρέξε!', 'Μην τρέχεις!', 'Δεν τρέχεις!'], en: ['Δεν τρέξε!', 'Όχι τρέξε!', 'Μην τρέχεις!', 'Δεν τρέχεις!'] },
    correct: 2,
    explanation: {
      el: 'Η προστακτική δεν παίρνει άρνηση. Για να απαγορεύσουμε κάτι, λέμε «μην» + υποτακτική: «Μην τρέχεις!».',
      en: 'The imperative cannot be made negative. To forbid something we say «μην» + subjunctive: «Μην τρέχεις!» (Don\'t run!).',
    },
  },
  {
    q: { el: 'Ποια πρόταση δείχνει κάτι που γίνεται στ\' αλήθεια, σίγουρα;', en: 'Which sentence shows something that is really, certainly happening?' },
    options: { el: ['Να παίξει μπάλα ο Νίκος.', 'Ο Νίκος παίζει μπάλα.', 'Παίξε μπάλα, Νίκο!', 'Ας παίξει μπάλα ο Νίκος.'], en: ['Να παίξει μπάλα ο Νίκος. (May Nikos play ball.)', 'Ο Νίκος παίζει μπάλα. (Nikos is playing ball.)', 'Παίξε μπάλα, Νίκο! (Play ball, Nikos!)', 'Ας παίξει μπάλα ο Νίκος. (Let Nikos play ball.)'] },
    correct: 1,
    explanation: {
      el: 'Μόνο η οριστική («παίζει») δείχνει κάτι πραγματικό. Το «να παίξει» και το «ας παίξει» είναι ευχή ή επιθυμία, το «παίξε» είναι εντολή.',
      en: 'Only the indicative («παίζει») shows a real fact. «Να παίξει» and «ας παίξει» are a wish, and «παίξε» is a command.',
    },
  },

  // ── 8–11: active and passive voice ─────────────────────────────────────────
  {
    q: { el: 'Ποιο από τα παρακάτω ρήματα είναι στην παθητική φωνή;', en: 'Which of these verbs is in the passive voice?' },
    options: { el: ['πλένω', 'έπλυνα', 'πλύνε', 'πλένομαι'], en: ['πλένω', 'έπλυνα', 'πλύνε', 'πλένομαι'] },
    correct: 3,
    explanation: {
      el: 'Τα ρήματα της παθητικής φωνής τελειώνουν σε -ομαι: πλένομαι, ντύνομαι, χτενίζομαι. Τα άλλα τρία είναι ενεργητική φωνή.',
      en: 'Passive-voice verbs end in -ομαι: πλένομαι (I wash myself), ντύνομαι, χτενίζομαι. The other three are active voice.',
    },
  },
  {
    q: { el: 'Ποια κατάληξη έχει το α\' ενικό πρόσωπο στην παθητική φωνή (π.χ. «εγώ κρύβ…»);', en: 'Which ending does the first person singular take in the passive voice (e.g. «εγώ κρύβ…»)?' },
    options: { el: ['-ω', '-ομαι', '-εις', '-εται'], en: ['-ω', '-ομαι', '-εις', '-εται'] },
    correct: 1,
    explanation: {
      el: 'Εγώ κρύβ-ομαι. Το -ω είναι ενεργητική φωνή (κρύβω), το -εται είναι το γ\' πρόσωπο (αυτός κρύβεται).',
      en: 'Εγώ κρύβ-ομαι (I hide myself). -ω is active voice (κρύβω), and -εται is third person (αυτός κρύβεται).',
    },
  },
  {
    q: { el: '«Η Ελένη χτενίζει την αδερφή της.» Συμπλήρωσε την παθητική φωνή: «Η αδερφή της ___ από την Ελένη.»', en: '"Η Ελένη χτενίζει την αδερφή της." (Eleni combs her sister\'s hair.) Complete the passive: «Η αδερφή της ___ από την Ελένη.»' },
    options: { el: ['χτενίζει', 'χτενίζεσαι', 'χτενίστηκε', 'χτενίζεται'], en: ['χτενίζει', 'χτενίζεσαι', 'χτενίστηκε', 'χτενίζεται'] },
    correct: 3,
    explanation: {
      el: 'Στην παθητική φωνή αυτός που «παθαίνει» την ενέργεια γίνεται υποκείμενο: η αδερφή χτενίζεται (τώρα, γ\' πρόσωπο). Το «χτενίστηκε» είναι αόριστος.',
      en: 'In the passive, the one who receives the action becomes the subject: the sister χτενίζεται (is combed, now, third person). «Χτενίστηκε» is the aorist (past).',
    },
  },
  {
    q: { el: '«Ο Γιώργος ντύνεται γρήγορα.» Ποιο είναι το ίδιο ρήμα στην ενεργητική φωνή;', en: '"Ο Γιώργος ντύνεται γρήγορα." (Giorgos gets dressed quickly.) What is the same verb in the active voice?' },
    options: { el: ['ντύνει', 'ντύθηκε', 'ντύσου', 'ντυνόταν'], en: ['ντύνει', 'ντύθηκε', 'ντύσου', 'ντυνόταν'] },
    correct: 0,
    explanation: {
      el: 'Ενεργητική: ντύνει (ντύνει το μωρό). Παθητική: ντύνεται (ντύνει τον εαυτό του). Τα «ντύθηκε» και «ντυνόταν» είναι παθητική σε άλλον χρόνο.',
      en: 'Active: ντύνει (he dresses the baby). Passive: ντύνεται (he dresses himself). «Ντύθηκε» and «ντυνόταν» are passive in other tenses.',
    },
  },

  // ── 12–15: the aorist and the aorist stem ──────────────────────────────────
  {
    q: { el: 'Ποιος είναι ο αόριστος του ρήματος «γράφω»;', en: 'What is the aorist (simple past) of «γράφω» (I write)?' },
    options: { el: ['έγραφα', 'θα γράψω', 'έγραψα', 'γράψω'], en: ['έγραφα', 'θα γράψω', 'έγραψα', 'γράψω'] },
    correct: 2,
    explanation: {
      el: 'Έγραψα = έγραψα μια φορά και τελείωσα. Το «έγραφα» είναι παρατατικός: έγραφα συνέχεια, για πολλή ώρα.',
      en: 'Έγραψα = I wrote once and finished. «Έγραφα» is the imperfect: I was writing, for a long time.',
    },
  },
  {
    q: { el: 'Ποιο από τα παρακάτω ρήματα είναι σε αόριστο;', en: 'Which of these verbs is in the aorist?' },
    options: { el: ['διάβαζα', 'διάβασα', 'διαβάζω', 'θα διαβάσω'], en: ['διάβαζα', 'διάβασα', 'διαβάζω', 'θα διαβάσω'] },
    correct: 1,
    explanation: {
      el: 'Διάβασα: έγινε στο παρελθόν, μια φορά, και τελείωσε. Πρόσεξε τη διαφορά: διάβαζα (παρατατικός, -ζ-) και διάβασα (αόριστος, -σ-).',
      en: 'Διάβασα: it happened in the past, once, and finished. Notice the difference: διάβαζα (imperfect, -ζ-) and διάβασα (aorist, -σ-).',
    },
  },
  {
    q: { el: 'Ποιο είναι το αοριστικό θέμα του ρήματος «παίζω»;', en: 'What is the aorist stem of «παίζω» (I play)?' },
    options: { el: ['παιζ-', 'παιγ-', 'παισ-', 'παιξ-'], en: ['παιζ-', 'παιγ-', 'παισ-', 'παιξ-'] },
    correct: 3,
    explanation: {
      el: 'Έ-παιξ-α, θα παίξ-ω, να παίξ-ω: το θέμα είναι «παιξ-». Το «παιζ-» είναι το ενεστωτικό θέμα (παίζω, έπαιζα).',
      en: 'Έ-παιξ-α, θα παίξ-ω, να παίξ-ω: the stem is «παιξ-». «Παιζ-» is the present stem (παίζω, έπαιζα).',
    },
  },
  {
    q: { el: 'Ποιο από τα παρακάτω είναι φτιαγμένο με το αοριστικό θέμα;', en: 'Which of these is built on the aorist stem?' },
    options: { el: ['θα τρέξω', 'θα τρέχω', 'έτρεχα', 'τρέχω'], en: ['θα τρέξω', 'θα τρέχω', 'έτρεχα', 'τρέχω'] },
    correct: 0,
    explanation: {
      el: 'Θα τρέξ-ω έχει το αοριστικό θέμα «τρεξ-» (όπως το έτρεξα). Τα άλλα τρία έχουν το ενεστωτικό θέμα «τρεχ-».',
      en: 'Θα τρέξ-ω has the aorist stem «τρεξ-» (like έτρεξα). The other three have the present stem «τρεχ-».',
    },
  },

  // ── 16–18: irregular verbs ─────────────────────────────────────────────────
  {
    q: { el: 'Ποιος είναι ο αόριστος του ρήματος «λέω»;', en: 'What is the aorist of «λέω» (I say)?' },
    options: { el: ['έλεγα', 'έλεξα', 'είπα', 'λέξα'], en: ['έλεγα', 'έλεξα', 'είπα', 'λέξα'] },
    correct: 2,
    explanation: {
      el: 'Το «λέω» είναι ανώμαλο: ο αόριστός του είναι «είπα», δεν μοιάζει καθόλου με τον ενεστώτα. Το «έλεγα» είναι παρατατικός.',
      en: '«Λέω» is irregular: its aorist is «είπα», which looks nothing like the present. «Έλεγα» is the imperfect.',
    },
  },
  {
    q: { el: '«Χθες ο Νίκος ___ στο πάρκο και έπαιξε με τους φίλους του.» (ρήμα: πάω)', en: '"Χθες ο Νίκος ___ στο πάρκο και έπαιξε με τους φίλους του." (Yesterday Nikos ___ to the park and played with his friends.) Verb: πάω (go)' },
    options: { el: ['πάγε', 'πήγε', 'πηγαίνει', 'θα πάει'], en: ['πάγε', 'πήγε', 'πηγαίνει', 'θα πάει'] },
    correct: 1,
    explanation: {
      el: 'Το «πάω» είναι ανώμαλο: πάω → πήγα, πήγες, πήγε. Το «πάγε» δεν υπάρχει, και το «πηγαίνει» είναι ενεστώτας, όχι χθες.',
      en: '«Πάω» is irregular: πάω → πήγα, πήγες, πήγε. «Πάγε» does not exist, and «πηγαίνει» is the present, not yesterday.',
    },
  },
  {
    q: { el: 'Η μαμά λέει στην Ελένη να τελειώσει το φαγητό της. Ποια εντολή είναι σωστή;', en: 'Mum tells Eleni to finish her food. Which command is correct?' },
    options: { el: ['Φάε το φαγητό σου!', 'Έφαγε το φαγητό σου!', 'Τρώξε το φαγητό σου!', 'Φάγε το φαγητό σου!'], en: ['Φάε το φαγητό σου!', 'Έφαγε το φαγητό σου!', 'Τρώξε το φαγητό σου!', 'Φάγε το φαγητό σου!'] },
    correct: 0,
    explanation: {
      el: 'Το «τρώω» είναι ανώμαλο: αόριστος «έφαγα», προστακτική «φάε!» (σε έναν) και «φάτε!» (σε πολλούς). Το «έφαγε» είναι αόριστος, όχι εντολή.',
      en: '«Τρώω» (eat) is irregular: aorist «έφαγα», imperative «φάε!» (to one person) and «φάτε!» (to many). «Έφαγε» is the aorist, not a command.',
    },
  },
];
