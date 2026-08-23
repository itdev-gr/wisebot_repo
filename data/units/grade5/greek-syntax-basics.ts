/**
 * Ε' Δημοτικού · Γλώσσα · Υποκείμενο, Ρήμα, Αντικείμενο
 * ====================================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a child of 10–11. Ordered from easiest to hardest:
 *   1–4   the subject: finding it with «ποιος;», always in the nominative
 *   5–6   the verb: the word that tells us what happens
 *   7–10  the object: finding it with «τι; / ποιον;», the accusative, sentences with/without one
 *   11–15 the predicate (κατηγορούμενο) and linking verbs (είμαι, γίνομαι, φαίνομαι…)
 *   16–18 simple vs compound sentence (one or more subjects / objects)
 */
import type { QuizQuestion } from '../../../types';

export const GRADE5_GREEK_SYNTAX_BASICS: QuizQuestion[] = [
  // ── 1–4: the subject ────────────────────────────────────────────────────────
  {
    q: { el: '«Ο Νίκος παίζει μπάλα.» Ποιο είναι το υποκείμενο της πρότασης;', en: '«Ο Νίκος παίζει μπάλα.» (Nikos plays ball.) Which is the subject of the sentence?' },
    options: { el: ['Ο Νίκος', 'παίζει', 'μπάλα', 'παίζει μπάλα'], en: ['Ο Νίκος', 'παίζει', 'μπάλα', 'παίζει μπάλα'] },
    correct: 0,
    explanation: {
      el: 'Υποκείμενο είναι αυτός που κάνει ό,τι λέει το ρήμα. Ποιος παίζει; Ο Νίκος.',
      en: 'The subject is the one who does what the verb says. Who plays? Nikos — «Ο Νίκος».',
    },
  },
  {
    q: { el: 'Ποια ερώτηση κάνουμε στο ρήμα για να βρούμε το υποκείμενο;', en: 'Which question do we ask the verb to find the subject?' },
    options: { el: ['Πού;', 'Πότε;', 'Ποιος; ή Τι;', 'Γιατί;'], en: ['Where? (Πού;)', 'When? (Πότε;)', 'Who? or What? (Ποιος; ή Τι;)', 'Why? (Γιατί;)'] },
    correct: 2,
    explanation: {
      el: 'Ρωτάμε «ποιος;» ή «τι;» πριν από το ρήμα. Η απάντηση είναι το υποκείμενο.',
      en: 'We ask «ποιος;» (who?) or «τι;» (what?) before the verb. The answer is the subject.',
    },
  },
  {
    q: { el: '«Τα παιδιά τρέχουν στην αυλή.» Ποιο είναι το υποκείμενο;', en: '«Τα παιδιά τρέχουν στην αυλή.» (The children run in the yard.) Which is the subject?' },
    options: { el: ['στην αυλή', 'τρέχουν', 'την αυλή', 'Τα παιδιά'], en: ['στην αυλή', 'τρέχουν', 'την αυλή', 'Τα παιδιά'] },
    correct: 3,
    explanation: {
      el: 'Ποιοι τρέχουν; Τα παιδιά. Το «στην αυλή» μας λέει πού τρέχουν, όχι ποιος τρέχει.',
      en: 'Who runs? The children — «Τα παιδιά». «στην αυλή» tells us where they run, not who runs.',
    },
  },
  {
    q: { el: 'Σε ποια πτώση βρίσκεται πάντα το υποκείμενο;', en: 'In which case is the subject always found?' },
    options: { el: ['ονομαστική', 'γενική', 'αιτιατική', 'κλητική'], en: ['nominative (ονομαστική)', 'genitive (γενική)', 'accusative (αιτιατική)', 'vocative (κλητική)'] },
    correct: 0,
    explanation: {
      el: 'Το υποκείμενο είναι πάντα σε ονομαστική: «ο Νίκος», «η Μαρία», «τα παιδιά».',
      en: 'The subject is always in the nominative: «ο Νίκος», «η Μαρία», «τα παιδιά».',
    },
  },

  // ── 5–6: the verb ───────────────────────────────────────────────────────────
  {
    q: { el: '«Η Ελένη διαβάζει ένα βιβλίο.» Ποια λέξη είναι το ρήμα;', en: '«Η Ελένη διαβάζει ένα βιβλίο.» (Eleni reads a book.) Which word is the verb?' },
    options: { el: ['Η Ελένη', 'διαβάζει', 'ένα', 'βιβλίο'], en: ['Η Ελένη', 'διαβάζει', 'ένα', 'βιβλίο'] },
    correct: 1,
    explanation: {
      el: 'Το ρήμα μάς λέει τι κάνει το υποκείμενο. Η Ελένη τι κάνει; Διαβάζει.',
      en: 'The verb tells us what the subject does. What does Eleni do? She reads — «διαβάζει».',
    },
  },
  {
    q: { el: 'Ποια από τις παρακάτω λέξεις είναι ρήμα;', en: 'Which of these words is a verb?' },
    options: { el: ['τραγούδι', 'τραγουδιστής', 'τραγουδάει', 'τραγουδιστά'], en: ['τραγούδι (song)', 'τραγουδιστής (singer)', 'τραγουδάει (sings)', 'τραγουδιστά (in a singing way)'] },
    correct: 2,
    explanation: {
      el: 'Το «τραγουδάει» δείχνει μια πράξη και αλλάζει πρόσωπο: τραγουδάω, τραγουδάς, τραγουδάει. Άρα είναι ρήμα.',
      en: '«τραγουδάει» shows an action and changes with the person: τραγουδάω, τραγουδάς, τραγουδάει. So it is a verb.',
    },
  },

  // ── 7–10: the object ────────────────────────────────────────────────────────
  {
    q: { el: '«Ο Γιώργος αγόρασε ένα ποδήλατο.» Ποιο είναι το αντικείμενο;', en: '«Ο Γιώργος αγόρασε ένα ποδήλατο.» (Giorgos bought a bicycle.) Which is the object?' },
    options: { el: ['Ο Γιώργος', 'αγόρασε', 'Ο Γιώργος αγόρασε', 'ένα ποδήλατο'], en: ['Ο Γιώργος', 'αγόρασε', 'Ο Γιώργος αγόρασε', 'ένα ποδήλατο'] },
    correct: 3,
    explanation: {
      el: 'Αντικείμενο είναι αυτό που «δέχεται» την πράξη. Τι αγόρασε ο Γιώργος; Ένα ποδήλατο.',
      en: 'The object is what “receives” the action. What did Giorgos buy? A bicycle — «ένα ποδήλατο».',
    },
  },
  {
    q: { el: 'Ποια ερώτηση κάνουμε στο ρήμα για να βρούμε το αντικείμενο;', en: 'Which question do we ask the verb to find the object?' },
    options: { el: ['Ποιος;', 'Τι; ή Ποιον;', 'Πού;', 'Πώς;'], en: ['Who? (Ποιος;)', 'What? or Whom? (Τι; ή Ποιον;)', 'Where? (Πού;)', 'How? (Πώς;)'] },
    correct: 1,
    explanation: {
      el: 'Ρωτάμε «τι;» ή «ποιον;» μετά το ρήμα. Προσοχή: το «ποιος;» βρίσκει το υποκείμενο, όχι το αντικείμενο.',
      en: 'We ask «τι;» (what?) or «ποιον;» (whom?) after the verb. Careful: «ποιος;» (who?) finds the subject, not the object.',
    },
  },
  {
    q: { el: '«Η Μαρία φωνάζει τον αδερφό της.» Σε ποια πτώση είναι το αντικείμενο «τον αδερφό»;', en: '«Η Μαρία φωνάζει τον αδερφό της.» (Maria calls her brother.) In which case is the object «τον αδερφό»?' },
    options: { el: ['ονομαστική', 'γενική', 'αιτιατική', 'κλητική'], en: ['nominative (ονομαστική)', 'genitive (γενική)', 'accusative (αιτιατική)', 'vocative (κλητική)'] },
    correct: 2,
    explanation: {
      el: 'Το αντικείμενο μπαίνει σε αιτιατική: «τον αδερφό», «τη μπάλα», «το βιβλίο».',
      en: 'The object goes in the accusative: «τον αδερφό», «τη μπάλα», «το βιβλίο».',
    },
  },
  {
    q: { el: 'Ποια πρόταση έχει αντικείμενο;', en: 'Which sentence has an object?' },
    options: { el: ['Ο Νίκος κρατάει μια ομπρέλα.', 'Ο σκύλος κοιμάται.', 'Η Μαρία γελάει.', 'Τα πουλιά πετούν.'], en: ['Ο Νίκος κρατάει μια ομπρέλα. (Nikos holds an umbrella.)', 'Ο σκύλος κοιμάται. (The dog sleeps.)', 'Η Μαρία γελάει. (Maria laughs.)', 'Τα πουλιά πετούν. (The birds fly.)'] },
    correct: 0,
    explanation: {
      el: 'Τι κρατάει ο Νίκος; Μια ομπρέλα — αυτό είναι το αντικείμενο. Στις άλλες προτάσεις δεν απαντάει τίποτα στο «τι;».',
      en: 'What does Nikos hold? An umbrella — that is the object. In the other sentences nothing answers «τι;» (what?).',
    },
  },

  // ── 11–15: predicate and linking verbs ──────────────────────────────────────
  {
    q: { el: '«Ο ουρανός είναι γαλάζιος.» Ποια λέξη είναι το κατηγορούμενο;', en: '«Ο ουρανός είναι γαλάζιος.» (The sky is blue.) Which word is the predicate (κατηγορούμενο)?' },
    options: { el: ['Ο ουρανός', 'είναι', 'γαλάζιος', 'Ο'], en: ['Ο ουρανός', 'είναι', 'γαλάζιος', 'Ο'] },
    correct: 2,
    explanation: {
      el: 'Το κατηγορούμενο λέει πώς είναι το υποκείμενο. Ο ουρανός πώς είναι; Γαλάζιος.',
      en: 'The predicate says what the subject is like. What is the sky like? Blue — «γαλάζιος».',
    },
  },
  {
    q: { el: 'Το κατηγορούμενο συμφωνεί με το υποκείμενο σε…', en: 'The predicate agrees with the subject in…' },
    options: { el: ['γένος, αριθμό και πτώση', 'μόνο στον αριθμό', 'μόνο στο γένος', 'τίποτα, είναι ανεξάρτητο'], en: ['gender, number and case', 'number only', 'gender only', 'nothing, it is independent'] },
    correct: 0,
    explanation: {
      el: 'Λέμε «ο Νίκος είναι ψηλός» αλλά «η Ελένη είναι ψηλή»: το κατηγορούμενο ακολουθεί το γένος, τον αριθμό και την πτώση του υποκειμένου.',
      en: 'We say «ο Νίκος είναι ψηλός» but «η Ελένη είναι ψηλή»: the predicate follows the gender, number and case of the subject.',
    },
  },
  {
    q: { el: 'Ποιο από τα παρακάτω ρήματα είναι συνδετικό;', en: 'Which of these verbs is a linking verb (συνδετικό);' },
    options: { el: ['τρέχω', 'γίνομαι', 'γράφω', 'πίνω'], en: ['τρέχω (I run)', 'γίνομαι (I become)', 'γράφω (I write)', 'πίνω (I drink)'] },
    correct: 1,
    explanation: {
      el: 'Συνδετικά ρήματα είναι το «είμαι», το «γίνομαι», το «φαίνομαι» και μερικά ακόμη. Συνδέουν το υποκείμενο με το κατηγορούμενο.',
      en: 'Linking verbs are «είμαι» (am), «γίνομαι» (become), «φαίνομαι» (seem) and a few more. They link the subject to the predicate.',
    },
  },
  {
    q: { el: '«Η Ελένη έγινε δασκάλα.» Τι είναι η λέξη «δασκάλα»;', en: '«Η Ελένη έγινε δασκάλα.» (Eleni became a teacher.) What is the word «δασκάλα»?' },
    options: { el: ['αντικείμενο', 'κατηγορούμενο', 'υποκείμενο', 'ρήμα'], en: ['object (αντικείμενο)', 'predicate (κατηγορούμενο)', 'subject (υποκείμενο)', 'verb (ρήμα)'] },
    correct: 1,
    explanation: {
      el: 'Το «έγινε» είναι συνδετικό ρήμα, άρα η λέξη που ακολουθεί είναι κατηγορούμενο, όχι αντικείμενο. Η «δασκάλα» είναι η ίδια η Ελένη.',
      en: '«έγινε» is a linking verb, so the word after it is a predicate, not an object. The «δασκάλα» is Eleni herself.',
    },
  },
  {
    q: { el: 'Ποια πρόταση έχει κατηγορούμενο;', en: 'Which sentence has a predicate (κατηγορούμενο)?' },
    options: { el: ['Ο Νίκος αγόρασε ένα μήλο.', 'Η Μαρία πήρε το βιβλίο.', 'Τα παιδιά έφαγαν παγωτό.', 'Ο Γιώργος φαίνεται χαρούμενος.'], en: ['Ο Νίκος αγόρασε ένα μήλο. (Nikos bought an apple.)', 'Η Μαρία πήρε το βιβλίο. (Maria took the book.)', 'Τα παιδιά έφαγαν παγωτό. (The children ate ice cream.)', 'Ο Γιώργος φαίνεται χαρούμενος. (Giorgos seems happy.)'] },
    correct: 3,
    explanation: {
      el: 'Το «φαίνεται» είναι συνδετικό ρήμα και το «χαρούμενος» λέει πώς είναι ο Γιώργος. Στις άλλες προτάσεις υπάρχει αντικείμενο: μήλο, βιβλίο, παγωτό.',
      en: '«φαίνεται» is a linking verb and «χαρούμενος» tells us what Giorgos is like. The other sentences have an object: apple, book, ice cream.',
    },
  },

  // ── 16–18: simple vs compound sentence ──────────────────────────────────────
  {
    q: { el: 'Ποια από τις παρακάτω προτάσεις είναι απλή;', en: 'Which of these sentences is simple (απλή)?' },
    options: { el: ['Η Μαρία και ο Νίκος παίζουν.', 'Ο Γιώργος τρώει.', 'Η Ελένη αγόρασε μήλα και πορτοκάλια.', 'Ο Νίκος και η Ελένη είναι αδέρφια.'], en: ['Η Μαρία και ο Νίκος παίζουν. (Maria and Nikos play.)', 'Ο Γιώργος τρώει. (Giorgos eats.)', 'Η Ελένη αγόρασε μήλα και πορτοκάλια. (Eleni bought apples and oranges.)', 'Ο Νίκος και η Ελένη είναι αδέρφια. (Nikos and Eleni are siblings.)'] },
    correct: 1,
    explanation: {
      el: 'Απλή είναι η πρόταση που έχει ένα υποκείμενο, ένα ρήμα και το πολύ ένα αντικείμενο ή κατηγορούμενο. «Ο Γιώργος τρώει»: ένα υποκείμενο, ένα ρήμα.',
      en: 'A simple sentence has one subject, one verb and at most one object or predicate. «Ο Γιώργος τρώει»: one subject, one verb.',
    },
  },
  {
    q: { el: '«Η Μαρία και η Ελένη τραγουδούν.» Γιατί η πρόταση είναι σύνθετη;', en: '«Η Μαρία και η Ελένη τραγουδούν.» (Maria and Eleni sing.) Why is this sentence compound (σύνθετη)?' },
    options: { el: ['Έχει δύο ρήματα.', 'Έχει δύο υποκείμενα.', 'Έχει δύο αντικείμενα.', 'Έχει κατηγορούμενο.'], en: ['It has two verbs.', 'It has two subjects.', 'It has two objects.', 'It has a predicate.'] },
    correct: 1,
    explanation: {
      el: 'Ποιες τραγουδούν; Η Μαρία και η Ελένη — δύο υποκείμενα. Όταν ένας όρος είναι διπλός, η πρόταση λέγεται σύνθετη.',
      en: 'Who sings? Maria and Eleni — two subjects. When a part of the sentence is doubled, the sentence is called compound.',
    },
  },
  {
    q: { el: 'Ποια από τις παρακάτω προτάσεις είναι σύνθετη;', en: 'Which of these sentences is compound (σύνθετη)?' },
    options: { el: ['Ο Νίκος διαβάζει ένα βιβλίο.', 'Τα παιδιά παίζουν στην αυλή.', 'Η γιαγιά μαγειρεύει σούπα.', 'Ο Γιώργος αγόρασε ψωμί και γάλα.'], en: ['Ο Νίκος διαβάζει ένα βιβλίο. (Nikos reads a book.)', 'Τα παιδιά παίζουν στην αυλή. (The children play in the yard.)', 'Η γιαγιά μαγειρεύει σούπα. (Grandma cooks soup.)', 'Ο Γιώργος αγόρασε ψωμί και γάλα. (Giorgos bought bread and milk.)'] },
    correct: 3,
    explanation: {
      el: 'Τι αγόρασε ο Γιώργος; Ψωμί και γάλα — δύο αντικείμενα. Άρα η πρόταση είναι σύνθετη. Οι άλλες έχουν ένα υποκείμενο και ένα αντικείμενο το πολύ.',
      en: 'What did Giorgos buy? Bread and milk — two objects. So the sentence is compound. The others have one subject and at most one object.',
    },
  },
];
