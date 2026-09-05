/**
 * ΣΤ' Δημοτικού · Γλώσσα · Παθητική σύνταξη & ποιητικό αίτιο
 * ============================================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr). Language level: 11–12.
 *
 * What the unit covers, in order:
 *   1–4   active → passive: the object becomes the subject, the doer becomes «από + …» (ποιητικό αίτιο)
 *   5–9   recognising a passive sentence, keeping the tense when converting, passive → active,
 *         «από» (doer) is the agent — «με» (tool) is not
 *   10–11 when the passive is preferred: the doer is unknown or unimportant
 *   12–14 deponent verbs (αποθετικά): passive form, active meaning, no agent possible
 *   15–18 the tense of a passive verb, a role-swap trap, middle (reflexive) vs passive meaning,
 *         one last conversion with a person as the object
 */
import type { QuizQuestion } from '../../../types';

export const GRADE6_GREEK_PASSIVE_SYNTAX: QuizQuestion[] = [
  // ── 1–4: active → passive, the agent ───────────────────────────────────────
  {
    q: { el: '«Ο κηπουρός ποτίζει τα λουλούδια.» Πώς γίνεται η πρόταση σε παθητική σύνταξη;', en: '«Ο κηπουρός ποτίζει τα λουλούδια.» (The gardener waters the flowers.) How does the sentence become passive?' },
    options: {
      el: ['Τα λουλούδια ποτίζονται από τον κηπουρό.', 'Ο κηπουρός ποτίζεται από τα λουλούδια.', 'Τα λουλούδια ποτίζουν τον κηπουρό.', 'Τα λουλούδια ποτίστηκαν από τον κηπουρό.'],
      en: ['Τα λουλούδια ποτίζονται από τον κηπουρό. (The flowers are watered by the gardener.)', 'Ο κηπουρός ποτίζεται από τα λουλούδια. (The gardener is watered by the flowers.)', 'Τα λουλούδια ποτίζουν τον κηπουρό. (The flowers water the gardener.)', 'Τα λουλούδια ποτίστηκαν από τον κηπουρό. (The flowers were watered by the gardener.)'],
    },
    correct: 0,
    explanation: {
      el: 'Το αντικείμενο (τα λουλούδια) γίνεται υποκείμενο, το ρήμα μπαίνει σε παθητική φωνή στον ίδιο χρόνο (ποτίζει → ποτίζονται) και ο κηπουρός γίνεται «από τον κηπουρό».',
      en: 'The object (the flowers) becomes the subject, the verb goes passive in the same tense (ποτίζει → ποτίζονται) and the gardener becomes «από τον κηπουρό».',
    },
  },
  {
    q: { el: 'Στην πρόταση «Τα λουλούδια ποτίζονται από τον κηπουρό», ποιο είναι το υποκείμενο;', en: 'In «Τα λουλούδια ποτίζονται από τον κηπουρό» (The flowers are watered by the gardener), which is the subject?' },
    options: {
      el: ['ο κηπουρός', 'τα λουλούδια', 'ποτίζονται', 'από τον κηπουρό'],
      en: ['ο κηπουρός (the gardener)', 'τα λουλούδια (the flowers)', 'ποτίζονται (are watered)', 'από τον κηπουρό (by the gardener)'],
    },
    correct: 1,
    explanation: {
      el: 'Στην παθητική σύνταξη υποκείμενο είναι αυτό που δέχεται την ενέργεια: τα λουλούδια. Το ρήμα συμφωνεί μαζί του (πληθυντικός: ποτίζονται).',
      en: 'In the passive, the subject is what receives the action: the flowers. The verb agrees with it (plural: ποτίζονται).',
    },
  },
  {
    q: { el: 'Πώς λέγεται η φράση «από τον κηπουρό» στην παθητική σύνταξη;', en: 'What is the phrase «από τον κηπουρό» (by the gardener) called in the passive construction?' },
    options: {
      el: ['αντικείμενο', 'κατηγορούμενο', 'ποιητικό αίτιο', 'υποκείμενο'],
      en: ['αντικείμενο (object)', 'κατηγορούμενο (predicate)', 'ποιητικό αίτιο (agent)', 'υποκείμενο (subject)'],
    },
    correct: 2,
    explanation: {
      el: 'Το ποιητικό αίτιο δείχνει ποιος κάνει την πράξη και μπαίνει με το «από»: από τον κηπουρό. Στην ενεργητική σύνταξη ήταν το υποκείμενο.',
      en: 'The agent (ποιητικό αίτιο) shows who does the action and takes «από»: από τον κηπουρό. In the active sentence it was the subject.',
    },
  },
  {
    q: { el: 'Όταν μετατρέπουμε μια ενεργητική πρόταση σε παθητική, τι γίνεται το αντικείμενο της ενεργητικής;', en: 'When we turn an active sentence into a passive one, what does the object of the active sentence become?' },
    options: {
      el: ['ποιητικό αίτιο', 'ρήμα', 'επίθετο', 'υποκείμενο'],
      en: ['the agent (ποιητικό αίτιο)', 'the verb', 'an adjective', 'the subject'],
    },
    correct: 3,
    explanation: {
      el: 'Το αντικείμενο γίνεται υποκείμενο και το υποκείμενο γίνεται ποιητικό αίτιο. Η «Ελένη έπλυνε το αυτοκίνητο» → «Το αυτοκίνητο πλύθηκε από την Ελένη».',
      en: 'The object becomes the subject and the subject becomes the agent. «Η Ελένη έπλυνε το αυτοκίνητο» (Eleni washed the car) → «Το αυτοκίνητο πλύθηκε από την Ελένη».',
    },
  },

  // ── 5–9: recognising the passive, keeping the tense, από vs με ──────────
  {
    q: { el: 'Ποια από τις παρακάτω προτάσεις είναι σε παθητική σύνταξη;', en: 'Which of these sentences is in the passive?' },
    options: {
      el: ['Η Ελένη ζωγράφισε έναν πίνακα.', 'Ο πίνακας ζωγραφίστηκε από την Ελένη.', 'Η Ελένη αγαπάει τη ζωγραφική.', 'Ο πίνακας είναι πολύ όμορφος.'],
      en: ['Η Ελένη ζωγράφισε έναν πίνακα. (Eleni painted a picture.)', 'Ο πίνακας ζωγραφίστηκε από την Ελένη. (The picture was painted by Eleni.)', 'Η Ελένη αγαπάει τη ζωγραφική. (Eleni loves painting.)', 'Ο πίνακας είναι πολύ όμορφος. (The picture is very beautiful.)'],
    },
    correct: 1,
    explanation: {
      el: 'Στην παθητική σύνταξη το υποκείμενο δέχεται την ενέργεια: ο πίνακας «ζωγραφίστηκε». Η κατάληξη -θηκε/-τηκε και το «από» είναι τα σημάδια.',
      en: 'In the passive, the subject receives the action: the picture «ζωγραφίστηκε» (was painted). The ending -θηκε/-τηκε and «από» are the signs.',
    },
  },
  {
    q: { el: '«Η δασκάλα διόρθωσε τα γραπτά.» Ποια είναι η σωστή παθητική σύνταξη, με τον ίδιο χρόνο;', en: '«Η δασκάλα διόρθωσε τα γραπτά.» (The teacher corrected the papers.) Which is the correct passive, keeping the same tense?' },
    options: {
      el: ['Τα γραπτά διορθώνονται από τη δασκάλα.', 'Τα γραπτά θα διορθωθούν από τη δασκάλα.', 'Τα γραπτά διορθώθηκαν από τη δασκάλα.', 'Η δασκάλα διορθώθηκε από τα γραπτά.'],
      en: ['Τα γραπτά διορθώνονται από τη δασκάλα. (The papers are corrected by the teacher.)', 'Τα γραπτά θα διορθωθούν από τη δασκάλα. (The papers will be corrected by the teacher.)', 'Τα γραπτά διορθώθηκαν από τη δασκάλα. (The papers were corrected by the teacher.)', 'Η δασκάλα διορθώθηκε από τα γραπτά. (The teacher was corrected by the papers.)'],
    },
    correct: 2,
    explanation: {
      el: 'Το «διόρθωσε» είναι αόριστος, άρα και το παθητικό ρήμα πρέπει να είναι αόριστος: διορθώθηκαν. Ο χρόνος δεν αλλάζει όταν αλλάζουμε σύνταξη.',
      en: '«Διόρθωσε» is aorist (past), so the passive verb must be aorist too: διορθώθηκαν. The tense does not change when we change the construction.',
    },
  },
  {
    q: { el: '«Ο μάγειρας θα ετοιμάσει το γλυκό.» Ποια είναι η σωστή παθητική σύνταξη;', en: '«Ο μάγειρας θα ετοιμάσει το γλυκό.» (The cook will prepare the dessert.) Which is the correct passive?' },
    options: {
      el: ['Το γλυκό ετοιμάστηκε από τον μάγειρα.', 'Το γλυκό ετοιμάζεται από τον μάγειρα.', 'Ο μάγειρας θα ετοιμαστεί από το γλυκό.', 'Το γλυκό θα ετοιμαστεί από τον μάγειρα.'],
      en: ['Το γλυκό ετοιμάστηκε από τον μάγειρα. (The dessert was prepared by the cook.)', 'Το γλυκό ετοιμάζεται από τον μάγειρα. (The dessert is prepared by the cook.)', 'Ο μάγειρας θα ετοιμαστεί από το γλυκό. (The cook will be prepared by the dessert.)', 'Το γλυκό θα ετοιμαστεί από τον μάγειρα. (The dessert will be prepared by the cook.)'],
    },
    correct: 3,
    explanation: {
      el: 'Μέλλοντας μένει μέλλοντας: θα ετοιμάσει → θα ετοιμαστεί. Και προσοχή στους ρόλους — το γλυκό ετοιμάζεται, όχι ο μάγειρας!',
      en: 'Future stays future: θα ετοιμάσει → θα ετοιμαστεί. And mind the roles — the dessert gets prepared, not the cook!',
    },
  },
  {
    q: { el: '«Η γέφυρα χτίστηκε από τους εργάτες.» Πώς γίνεται η πρόταση σε ενεργητική σύνταξη;', en: '«Η γέφυρα χτίστηκε από τους εργάτες.» (The bridge was built by the workers.) How does the sentence become active?' },
    options: {
      el: ['Οι εργάτες χτίζουν τη γέφυρα.', 'Οι εργάτες έχτισαν τη γέφυρα.', 'Η γέφυρα έχτισε τους εργάτες.', 'Οι εργάτες θα χτίσουν τη γέφυρα.'],
      en: ['Οι εργάτες χτίζουν τη γέφυρα. (The workers build the bridge.)', 'Οι εργάτες έχτισαν τη γέφυρα. (The workers built the bridge.)', 'Η γέφυρα έχτισε τους εργάτες. (The bridge built the workers.)', 'Οι εργάτες θα χτίσουν τη γέφυρα. (The workers will build the bridge.)'],
    },
    correct: 1,
    explanation: {
      el: 'Το ποιητικό αίτιο (οι εργάτες) γίνεται υποκείμενο, η γέφυρα γίνεται αντικείμενο και ο αόριστος μένει αόριστος: χτίστηκε → έχτισαν.',
      en: 'The agent (the workers) becomes the subject, the bridge becomes the object and the aorist stays aorist: χτίστηκε → έχτισαν.',
    },
  },
  {
    q: { el: 'Σε ποια πρόταση το ποιητικό αίτιο είναι «από τους μαθητές»;', en: 'In which sentence is the agent (ποιητικό αίτιο) «από τους μαθητές» (by the pupils)?' },
    options: {
      el: ['Οι μαθητές στόλισαν την τάξη.', 'Η τάξη στολίστηκε με μπαλόνια.', 'Οι μαθητές στολίζονται για τη γιορτή.', 'Η τάξη στολίστηκε από τους μαθητές.'],
      en: ['Οι μαθητές στόλισαν την τάξη. (The pupils decorated the classroom.)', 'Η τάξη στολίστηκε με μπαλόνια. (The classroom was decorated with balloons.)', 'Οι μαθητές στολίζονται για τη γιορτή. (The pupils are dressing up for the celebration.)', 'Η τάξη στολίστηκε από τους μαθητές. (The classroom was decorated by the pupils.)'],
    },
    correct: 3,
    explanation: {
      el: 'Ποιητικό αίτιο = «από» + αυτός που κάνει την πράξη. Το «με μπαλόνια» δεν είναι ποιητικό αίτιο: τα μπαλόνια είναι το υλικό, όχι ο δράστης.',
      en: 'Agent = «από» + the doer. «Με μπαλόνια» is not an agent: the balloons are the material, not the doer.',
    },
  },

  // ── 10–11: when the passive is preferred ─────────────────────────────────
  {
    q: { el: 'Πότε προτιμάμε συνήθως την παθητική σύνταξη;', en: 'When do we usually prefer the passive construction?' },
    options: {
      el: ['όταν δεν ξέρουμε ή δεν μας ενδιαφέρει ποιος έκανε την πράξη', 'όταν θέλουμε να τονίσουμε ποιος έκανε την πράξη', 'μόνο όταν το ρήμα είναι στον αόριστο', 'όταν το ρήμα δεν έχει αντικείμενο'],
      en: ['when we do not know or do not care who did the action', 'when we want to stress who did the action', 'only when the verb is in the aorist', 'when the verb has no object'],
    },
    correct: 0,
    explanation: {
      el: 'Η παθητική βάζει μπροστά αυτό που έπαθε κάτι. «Το μουσείο ανακαινίστηκε πέρυσι» — δεν μας νοιάζει ποιος το έκανε, μας νοιάζει το μουσείο.',
      en: 'The passive puts what was acted upon up front. «Το μουσείο ανακαινίστηκε πέρυσι» (The museum was renovated last year) — we do not care who did it, we care about the museum.',
    },
  },
  {
    q: { el: '«Κάποιος έκλεψε το ποδήλατό μου χθες.» Ποια παθητική πρόταση ταιριάζει καλύτερα, αφού δεν ξέρουμε τον δράστη;', en: '«Κάποιος έκλεψε το ποδήλατό μου χθες.» (Someone stole my bicycle yesterday.) Which passive sentence fits best, since we do not know the doer?' },
    options: {
      el: ['Το ποδήλατό μου κλάπηκε χθες.', 'Το ποδήλατό μου κλάπηκε από τον γείτονα.', 'Κάποιος κλάπηκε από το ποδήλατό μου.', 'Το ποδήλατό μου έκλεψε κάποιον.'],
      en: ['Το ποδήλατό μου κλάπηκε χθες. (My bicycle was stolen yesterday.)', 'Το ποδήλατό μου κλάπηκε από τον γείτονα. (My bicycle was stolen by the neighbour.)', 'Κάποιος κλάπηκε από το ποδήλατό μου. (Someone was stolen by my bicycle.)', 'Το ποδήλατό μου έκλεψε κάποιον. (My bicycle stole someone.)'],
    },
    correct: 0,
    explanation: {
      el: 'Όταν ο δράστης είναι άγνωστος, το ποιητικό αίτιο απλώς παραλείπεται: «Το ποδήλατό μου κλάπηκε». Δεν βάζουμε δράστη που δεν ξέρουμε!',
      en: 'When the doer is unknown, the agent is simply left out: «Το ποδήλατό μου κλάπηκε». We do not invent a doer we do not know!',
    },
  },

  // ── 12–14: deponent verbs ────────────────────────────────────────────────
  {
    q: { el: 'Το ρήμα «κοιμάμαι» έχει παθητική μορφή (-μαι), αλλά ενεργητική σημασία. Πώς λέγονται τα ρήματα αυτά;', en: 'The verb «κοιμάμαι» (I sleep) has a passive form (-μαι) but an active meaning. What are such verbs called?' },
    options: {
      el: ['αποθετικά', 'απρόσωπα', 'βοηθητικά', 'συνδετικά'],
      en: ['αποθετικά (deponent)', 'απρόσωπα (impersonal)', 'βοηθητικά (auxiliary)', 'συνδετικά (linking)'],
    },
    correct: 0,
    explanation: {
      el: 'Τα αποθετικά ρήματα «απέθεσαν» (άφησαν) την ενεργητική τους φωνή: κοιμάμαι, έρχομαι, φοβάμαι, σκέφτομαι. Μοιάζουν παθητικά, αλλά κανείς δεν «μας κοιμίζει».',
      en: 'Deponent verbs have “put away” their active voice: κοιμάμαι, έρχομαι, φοβάμαι, σκέφτομαι. They look passive, but nobody is doing the sleeping to us.',
    },
  },
  {
    q: { el: 'Ποιο από τα παρακάτω ρήματα είναι αποθετικό;', en: 'Which of these verbs is deponent (αποθετικό)?' },
    options: {
      el: ['πλένομαι', 'διαβάζομαι', 'έρχομαι', 'χτενίζομαι'],
      en: ['πλένομαι (I get washed)', 'διαβάζομαι (I am read)', 'έρχομαι (I come)', 'χτενίζομαι (I get combed)'],
    },
    correct: 2,
    explanation: {
      el: 'Το «έρχομαι» δεν έχει ενεργητικό τύπο «έρχω» — είναι αποθετικό. Τα άλλα έχουν: πλένω, διαβάζω, χτενίζω.',
      en: '«Έρχομαι» has no active form «έρχω» — it is deponent. The others do: πλένω, διαβάζω, χτενίζω.',
    },
  },
  {
    q: { el: '«Η Ελένη φοβάται το σκοτάδι.» Μπορούμε να κάνουμε την πρόταση παθητική με ποιητικό αίτιο «από την Ελένη»;', en: '«Η Ελένη φοβάται το σκοτάδι.» (Eleni is afraid of the dark.) Can we make the sentence passive with the agent «από την Ελένη»?' },
    options: {
      el: ['Ναι: «Το σκοτάδι φοβάται από την Ελένη».', 'Ναι, αν αλλάξουμε τον χρόνο του ρήματος.', 'Όχι — η πρόταση δεν έχει ρήμα.', 'Όχι — το «φοβάμαι» είναι αποθετικό και δεν έχει ενεργητική φωνή.'],
      en: ['Yes: «Το σκοτάδι φοβάται από την Ελένη».', 'Yes, if we change the tense of the verb.', 'No — the sentence has no verb.', 'No — «φοβάμαι» is deponent and has no active voice.'],
    },
    correct: 3,
    explanation: {
      el: 'Το «φοβάμαι» είναι ήδη σε μορφή -μαι και δεν υπάρχει «φοβώ» με την ίδια σημασία. Τα αποθετικά δεν μετατρέπονται: η Ελένη είναι το υποκείμενο και τέλος.',
      en: '«Φοβάμαι» is already in the -μαι form and there is no «φοβώ» with the same meaning. Deponent verbs cannot be converted: Eleni is the subject, full stop.',
    },
  },

  // ── 15–18: tense, traps, middle voice, one last conversion ───────────────
  {
    q: { el: 'Σε ποιον χρόνο είναι το ρήμα στην πρόταση «Τα δέντρα φυτεύονται από τους μαθητές»;', en: 'What tense is the verb in «Τα δέντρα φυτεύονται από τους μαθητές» (The trees are planted by the pupils)?' },
    options: {
      el: ['αόριστος', 'μέλλοντας', 'ενεστώτας', 'παρατατικός'],
      en: ['αόριστος (aorist)', 'μέλλοντας (future)', 'ενεστώτας (present)', 'παρατατικός (imperfect)'],
    },
    correct: 2,
    explanation: {
      el: 'Το «φυτεύονται» είναι ενεστώτας παθητικής φωνής (φυτεύω → φυτεύομαι). Αόριστος θα ήταν «φυτεύτηκαν» και μέλλοντας «θα φυτευτούν».',
      en: '«Φυτεύονται» is the present tense of the passive (φυτεύω → φυτεύομαι). The aorist would be «φυτεύτηκαν» and the future «θα φυτευτούν».',
    },
  },
  {
    q: { el: '«Ο σκύλος κυνηγάει τη γάτα.» Ποια είναι η σωστή παθητική σύνταξη;', en: '«Ο σκύλος κυνηγάει τη γάτα.» (The dog is chasing the cat.) Which is the correct passive?' },
    options: {
      el: ['Ο σκύλος κυνηγιέται από τη γάτα.', 'Η γάτα κυνηγάει τον σκύλο.', 'Η γάτα κυνηγήθηκε από τον σκύλο.', 'Η γάτα κυνηγιέται από τον σκύλο.'],
      en: ['Ο σκύλος κυνηγιέται από τη γάτα. (The dog is chased by the cat.)', 'Η γάτα κυνηγάει τον σκύλο. (The cat is chasing the dog.)', 'Η γάτα κυνηγήθηκε από τον σκύλο. (The cat was chased by the dog.)', 'Η γάτα κυνηγιέται από τον σκύλο. (The cat is chased by the dog.)'],
    },
    correct: 3,
    explanation: {
      el: 'Η γάτα δέχεται το κυνηγητό, άρα γίνεται υποκείμενο, και ο σκύλος γίνεται ποιητικό αίτιο. Ο ενεστώτας μένει: κυνηγάει → κυνηγιέται. Η πρώτη επιλογή αντιστρέφει τους ρόλους!',
      en: 'The cat receives the chasing, so it becomes the subject, and the dog becomes the agent. The present stays: κυνηγάει → κυνηγιέται. The first option swaps the roles!',
    },
  },
  {
    q: { el: '«Ο Νίκος πλένεται κάθε πρωί.» Ποιος κάνει την πράξη εδώ;', en: '«Ο Νίκος πλένεται κάθε πρωί.» (Nikos washes every morning.) Who is doing the action here?' },
    options: {
      el: ['κάποιος άλλος — είναι παθητική διάθεση', 'ο ίδιος ο Νίκος στον εαυτό του — είναι μέση διάθεση', 'κανείς — είναι απρόσωπο ρήμα', 'το πρωί'],
      en: ['someone else — it is passive meaning', 'Nikos himself, to himself — it is middle (reflexive) meaning', 'nobody — it is an impersonal verb', 'the morning'],
    },
    correct: 1,
    explanation: {
      el: 'Ίδια κατάληξη (-εται), άλλη σημασία: ο Νίκος πλένει τον εαυτό του. Αν έλεγε «πλένεται από τη μαμά του», τότε θα ήταν παθητική.',
      en: 'Same ending (-εται), different meaning: Nikos washes himself. If it said «πλένεται από τη μαμά του» (is washed by his mum), then it would be passive.',
    },
  },
  {
    q: { el: '«Ο γιατρός εξέτασε τον Γιώργο.» Ποια είναι η σωστή παθητική σύνταξη;', en: '«Ο γιατρός εξέτασε τον Γιώργο.» (The doctor examined Giorgos.) Which is the correct passive?' },
    options: {
      el: ['Ο Γιώργος εξετάστηκε από τον γιατρό.', 'Ο γιατρός εξετάστηκε από τον Γιώργο.', 'Ο Γιώργος εξετάζεται από τον γιατρό.', 'Ο Γιώργος θα εξεταστεί από τον γιατρό.'],
      en: ['Ο Γιώργος εξετάστηκε από τον γιατρό. (Giorgos was examined by the doctor.)', 'Ο γιατρός εξετάστηκε από τον Γιώργο. (The doctor was examined by Giorgos.)', 'Ο Γιώργος εξετάζεται από τον γιατρό. (Giorgos is examined by the doctor.)', 'Ο Γιώργος θα εξεταστεί από τον γιατρό. (Giorgos will be examined by the doctor.)'],
    },
    correct: 0,
    explanation: {
      el: 'Τρία βήματα: ο Γιώργος (αντικείμενο) → υποκείμενο, ο γιατρός → «από τον γιατρό», αόριστος → αόριστος (εξέτασε → εξετάστηκε). Μπράβο αν τα έπιασες και τα τρία!',
      en: 'Three steps: Giorgos (object) → subject, the doctor → «από τον γιατρό», aorist → aorist (εξέτασε → εξετάστηκε). Well done if you caught all three!',
    },
  },
];
