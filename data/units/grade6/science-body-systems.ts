/**
 * ΣΤ' Δημοτικού · Φυσικά («Ερευνώ και Ανακαλύπτω») · Αναπνευστικό, Κυκλοφορικό & Αναπαραγωγικό
 * ==========================================================================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr). Language level: 11–12.
 * What the unit covers, in the order a ΣΤ' class meets it:
 *   1–4   lungs and breathing: air route, oxygen in / carbon dioxide out, diaphragm, alveoli
 *   5–7   the heart: a muscle pump, four chambers, the pulse
 *   8–11  blood and vessels: arteries / veins / capillaries, red cells, white cells, platelets
 *   12–13 small (pulmonary) and big (systemic) circulation
 *   14–18 beginning of life and embryo growth: egg + sperm, the uterus, umbilical cord, 9 months, twins
 */
import type { QuizQuestion } from '../../../types';

export const GRADE6_SCIENCE_BODY_SYSTEMS: QuizQuestion[] = [
  // ── 1–4: lungs and breathing ───────────────────────────────────────────────
  {
    q: { el: 'Ο Νίκος παίρνει μια βαθιά ανάσα. Ποιο αέριο από τον αέρα χρειάζεται το σώμα του;', en: 'Nikos takes a deep breath. Which gas from the air does his body need?' },
    options: { el: ['Το διοξείδιο του άνθρακα', 'Το οξυγόνο', 'Το άζωτο', 'Τους υδρατμούς'], en: ['Carbon dioxide', 'Oxygen', 'Nitrogen', 'Water vapour'] },
    correct: 1,
    explanation: {
      el: 'Το σώμα μας χρειάζεται οξυγόνο για να «καίει» την τροφή και να παίρνει ενέργεια. Το διοξείδιο του άνθρακα είναι το αέριο που βγάζουμε.',
      en: 'Our body needs oxygen to “burn” food and get energy. Carbon dioxide is the gas we breathe out.',
    },
  },
  {
    q: { el: 'Ποια είναι η σωστή διαδρομή του αέρα όταν εισπνέουμε;', en: 'Which is the correct route of the air when we breathe in?' },
    options: { el: ['Μύτη → τραχεία → βρόγχοι → πνεύμονες', 'Μύτη → στομάχι → πνεύμονες', 'Μύτη → πνεύμονες → τραχεία → βρόγχοι', 'Μύτη → καρδιά → πνεύμονες'], en: ['Nose → windpipe → bronchi → lungs', 'Nose → stomach → lungs', 'Nose → lungs → windpipe → bronchi', 'Nose → heart → lungs'] },
    correct: 0,
    explanation: {
      el: 'Ο αέρας μπαίνει από τη μύτη, κατεβαίνει την τραχεία, χωρίζεται στους δύο βρόγχους και φτάνει στους πνεύμονες.',
      en: 'Air enters through the nose, goes down the windpipe, splits into the two bronchi and reaches the lungs.',
    },
  },
  {
    q: { el: 'Ποιος μυς κάτω από τους πνεύμονες κατεβαίνει και ανεβαίνει για να γεμίζουν και να αδειάζουν;', en: 'Which muscle under the lungs moves down and up so the lungs fill and empty?' },
    options: { el: ['Ο δικέφαλος', 'Η καρδιά', 'Το διάφραγμα', 'Οι κοιλιακοί'], en: ['The biceps', 'The heart', 'The diaphragm', 'The abdominals'] },
    correct: 2,
    explanation: {
      el: 'Το διάφραγμα είναι ένας πλατύς μυς κάτω από τους πνεύμονες. Όταν κατεβαίνει, οι πνεύμονες γεμίζουν αέρα· όταν ανεβαίνει, αδειάζουν.',
      en: 'The diaphragm is a wide muscle below the lungs. When it moves down the lungs fill with air; when it moves up they empty.',
    },
  },
  {
    q: { el: 'Οι πνεύμονες έχουν εκατομμύρια μικροσκοπικά «σακουλάκια» όπου το οξυγόνο περνάει στο αίμα. Πώς λέγονται;', en: 'The lungs have millions of tiny “sacs” where oxygen passes into the blood. What are they called?' },
    options: { el: ['Βρόγχοι', 'Κυψελίδες', 'Αρτηρίες', 'Αμυγδαλές'], en: ['Bronchi', 'Alveoli', 'Arteries', 'Tonsils'] },
    correct: 1,
    explanation: {
      el: 'Οι κυψελίδες είναι σαν μικροσκοπικά μπαλονάκια με πολύ λεπτά τοιχώματα. Εκεί το οξυγόνο μπαίνει στο αίμα και το διοξείδιο του άνθρακα βγαίνει.',
      en: 'Alveoli are like tiny balloons with very thin walls. There oxygen enters the blood and carbon dioxide leaves it.',
    },
  },

  // ── 5–7: the heart ─────────────────────────────────────────────────────────
  {
    q: { el: 'Τι είδους όργανο είναι η καρδιά;', en: 'What kind of organ is the heart?' },
    options: { el: ['Ένα οστό', 'Ένας αδένας', 'Ένας μυς που δουλεύει σαν αντλία', 'Ένα μεγάλο αγγείο'], en: ['A bone', 'A gland', 'A muscle that works like a pump', 'A large vessel'] },
    correct: 2,
    explanation: {
      el: 'Η καρδιά είναι ένας δυνατός μυς. Σφίγγει και χαλαρώνει συνέχεια, σαν αντλία, και σπρώχνει το αίμα σε όλο το σώμα.',
      en: 'The heart is a strong muscle. It squeezes and relaxes all the time, like a pump, pushing blood around the whole body.',
    },
  },
  {
    q: { el: 'Πόσους χώρους (κοιλότητες) έχει η καρδιά του ανθρώπου;', en: 'How many chambers does the human heart have?' },
    options: { el: ['Δύο', 'Τρεις', 'Τέσσερις', 'Έξι'], en: ['Two', 'Three', 'Four', 'Six'] },
    correct: 2,
    explanation: {
      el: 'Η καρδιά έχει τέσσερις χώρους: δύο κόλπους επάνω και δύο κοιλίες κάτω. Ένα τοίχωμα χωρίζει τη δεξιά από την αριστερή πλευρά.',
      en: 'The heart has four chambers: two atria on top and two ventricles below. A wall separates the right side from the left.',
    },
  },
  {
    q: { el: 'Η Ελένη ακουμπάει δύο δάχτυλα στον καρπό της και νιώθει «χτυπήματα». Τι μετράει;', en: 'Eleni puts two fingers on her wrist and feels “beats”. What is she measuring?' },
    options: { el: ['Την αναπνοή της', 'Τον σφυγμό της', 'Τη θερμοκρασία της', 'Τη δύναμη των μυών της'], en: ['Her breathing', 'Her pulse', 'Her temperature', 'The strength of her muscles'] },
    correct: 1,
    explanation: {
      el: 'Κάθε φορά που η καρδιά σφίγγει, στέλνει ένα κύμα αίματος στις αρτηρίες. Αυτό το κύμα νιώθουμε ως σφυγμό. Όταν τρέχουμε, ο σφυγμός γίνεται πιο γρήγορος.',
      en: 'Every time the heart squeezes, it sends a wave of blood into the arteries. We feel that wave as the pulse. When we run, the pulse gets faster.',
    },
  },

  // ── 8–11: blood and vessels ────────────────────────────────────────────────
  {
    q: { el: 'Ποια αγγεία μεταφέρουν το αίμα ΑΠΟ την καρδιά προς το υπόλοιπο σώμα;', en: 'Which vessels carry blood AWAY from the heart to the rest of the body?' },
    options: { el: ['Οι φλέβες', 'Τα τριχοειδή', 'Οι αρτηρίες', 'Οι βρόγχοι'], en: ['Veins', 'Capillaries', 'Arteries', 'Bronchi'] },
    correct: 2,
    explanation: {
      el: 'Οι αρτηρίες ξεκινούν από την καρδιά και έχουν χοντρά, ελαστικά τοιχώματα. Οι φλέβες φέρνουν το αίμα πίσω στην καρδιά.',
      en: 'Arteries start from the heart and have thick, elastic walls. Veins bring the blood back to the heart.',
    },
  },
  {
    q: { el: 'Ποια αγγεία είναι τόσο λεπτά που το αίμα περνάει από αυτά σχεδόν κύτταρο-κύτταρο;', en: 'Which vessels are so thin that blood passes through them almost one cell at a time?' },
    options: { el: ['Οι αρτηρίες', 'Τα τριχοειδή', 'Οι φλέβες', 'Οι κόλποι'], en: ['Arteries', 'Capillaries', 'Veins', 'Atria'] },
    correct: 1,
    explanation: {
      el: 'Τα τριχοειδή είναι λεπτά σαν τρίχα. Ενώνουν τις αρτηρίες με τις φλέβες και εκεί το αίμα δίνει οξυγόνο και τροφή στα κύτταρα.',
      en: 'Capillaries are as thin as a hair. They join arteries to veins, and there the blood gives oxygen and food to the cells.',
    },
  },
  {
    q: { el: 'Ποια κύτταρα του αίματος μεταφέρουν το οξυγόνο και του δίνουν το κόκκινο χρώμα;', en: 'Which blood cells carry oxygen and give blood its red colour?' },
    options: { el: ['Τα λευκά αιμοσφαίρια', 'Τα αιμοπετάλια', 'Τα ερυθρά αιμοσφαίρια', 'Τα κύτταρα του δέρματος'], en: ['White blood cells', 'Platelets', 'Red blood cells', 'Skin cells'] },
    correct: 2,
    explanation: {
      el: 'Τα ερυθρά αιμοσφαίρια είναι σαν μικρά φορτηγάκια: φορτώνουν οξυγόνο στους πνεύμονες και το ξεφορτώνουν σε όλο το σώμα.',
      en: 'Red blood cells are like little delivery vans: they load oxygen in the lungs and unload it all over the body.',
    },
  },
  {
    q: { el: 'Ο Γιώργος γρατζουνίστηκε και το αίμα σταμάτησε γρήγορα, σχηματίζοντας μια κρούστα. Ποια κύτταρα βοήθησαν;', en: 'Giorgos got a scratch and the bleeding stopped quickly, forming a scab. Which cells helped?' },
    options: { el: ['Τα αιμοπετάλια', 'Τα ερυθρά αιμοσφαίρια', 'Τα λευκά αιμοσφαίρια', 'Οι κυψελίδες'], en: ['Platelets', 'Red blood cells', 'White blood cells', 'Alveoli'] },
    correct: 0,
    explanation: {
      el: 'Τα αιμοπετάλια κολλούν στην πληγή και σχηματίζουν ένα «μπάλωμα» που σταματά την αιμορραγία. Τα λευκά αιμοσφαίρια είναι οι «στρατιώτες» που πολεμούν τα μικρόβια.',
      en: 'Platelets stick to the wound and form a “patch” that stops the bleeding. White blood cells are the “soldiers” that fight germs.',
    },
  },

  // ── 12–13: small and big circulation ──────────────────────────────────────
  {
    q: { el: 'Η μικρή κυκλοφορία είναι το ταξίδι του αίματος από την καρδιά…', en: 'The small circulation is the journey of the blood from the heart…' },
    options: { el: ['στα πόδια και πίσω', 'στον εγκέφαλο και πίσω', 'στους πνεύμονες και πίσω', 'στο στομάχι και πίσω'], en: ['to the feet and back', 'to the brain and back', 'to the lungs and back', 'to the stomach and back'] },
    correct: 2,
    explanation: {
      el: 'Στη μικρή κυκλοφορία η δεξιά πλευρά της καρδιάς στέλνει το αίμα στους πνεύμονες, παίρνει οξυγόνο και γυρίζει στην αριστερή πλευρά.',
      en: 'In the small circulation the right side of the heart sends blood to the lungs, it picks up oxygen and returns to the left side.',
    },
  },
  {
    q: { el: 'Στη μεγάλη κυκλοφορία, το αίμα που επιστρέφει στην καρδιά από το σώμα είναι…', en: 'In the big circulation, the blood returning to the heart from the body is…' },
    options: { el: ['γεμάτο οξυγόνο', 'φτωχό σε οξυγόνο και πλούσιο σε διοξείδιο του άνθρακα', 'χωρίς καθόλου κύτταρα', 'πιο κρύο από τον πάγο'], en: ['full of oxygen', 'low in oxygen and rich in carbon dioxide', 'without any cells', 'colder than ice'] },
    correct: 1,
    explanation: {
      el: 'Στη μεγάλη κυκλοφορία η αριστερή πλευρά στέλνει αίμα με οξυγόνο σε όλο το σώμα. Τα κύτταρα παίρνουν το οξυγόνο και δίνουν διοξείδιο του άνθρακα, γι\' αυτό το αίμα γυρίζει «φτωχό».',
      en: 'In the big circulation the left side sends oxygen-rich blood to the whole body. The cells take the oxygen and give back carbon dioxide, so the blood returns “poor”.',
    },
  },

  // ── 14–18: beginning of life and embryo growth ────────────────────────────
  {
    q: { el: 'Η ζωή ενός ανθρώπου ξεκινά όταν ενώνονται δύο κύτταρα. Ποια είναι;', en: 'A human life begins when two cells join. Which ones?' },
    options: { el: ['Ένα ερυθρό και ένα λευκό αιμοσφαίριο', 'Ένα ωάριο και ένα σπερματοζωάριο', 'Δύο ωάρια', 'Ένα κύτταρο του δέρματος και ένα του αίματος'], en: ['A red and a white blood cell', 'An egg cell and a sperm cell', 'Two egg cells', 'A skin cell and a blood cell'] },
    correct: 1,
    explanation: {
      el: 'Το ωάριο προέρχεται από τη μητέρα και το σπερματοζωάριο από τον πατέρα. Η ένωσή τους λέγεται γονιμοποίηση.',
      en: 'The egg cell comes from the mother and the sperm cell from the father. Their joining is called fertilisation.',
    },
  },
  {
    q: { el: 'Σε ποιο όργανο του σώματος της μητέρας μεγαλώνει το έμβρυο;', en: 'In which organ of the mother\'s body does the embryo grow?' },
    options: { el: ['Στο στομάχι', 'Στη μήτρα', 'Στους πνεύμονες', 'Στην καρδιά'], en: ['In the stomach', 'In the uterus (womb)', 'In the lungs', 'In the heart'] },
    correct: 1,
    explanation: {
      el: 'Το έμβρυο μεγαλώνει στη μήτρα, ένα ζεστό και προστατευμένο όργανο στην κοιλιά της μητέρας. Δεν είναι το στομάχι, όπου πάει η τροφή!',
      en: 'The embryo grows in the uterus, a warm, protected organ in the mother\'s belly. It is not the stomach, where food goes!',
    },
  },
  {
    q: { el: 'Πώς παίρνει το έμβρυο οξυγόνο και τροφή μέσα στη μήτρα;', en: 'How does the embryo get oxygen and food inside the uterus?' },
    options: { el: ['Αναπνέει με τους πνεύμονές του', 'Τρώει μόνο του μικρές ποσότητες', 'Μέσω του ομφάλιου λώρου, από το αίμα της μητέρας', 'Από τον αέρα που μπαίνει στην κοιλιά'], en: ['It breathes with its own lungs', 'It eats small amounts by itself', 'Through the umbilical cord, from the mother\'s blood', 'From air that enters the belly'] },
    correct: 2,
    explanation: {
      el: 'Ο ομφάλιος λώρος ενώνει το έμβρυο με τον πλακούντα. Από εκεί παίρνει οξυγόνο και θρεπτικές ουσίες από το αίμα της μητέρας. Ο αφαλός μας είναι το σημάδι που αφήνει!',
      en: 'The umbilical cord connects the embryo to the placenta. Through it the embryo gets oxygen and nutrients from the mother\'s blood. Our belly button is the mark it leaves!',
    },
  },
  {
    q: { el: 'Πόσο περίπου διαρκεί η εγκυμοσύνη, από τη γονιμοποίηση μέχρι τη γέννηση;', en: 'About how long does a pregnancy last, from fertilisation to birth?' },
    options: { el: ['3 μήνες', '6 μήνες', '9 μήνες', '12 μήνες'], en: ['3 months', '6 months', '9 months', '12 months'] },
    correct: 2,
    explanation: {
      el: 'Η εγκυμοσύνη διαρκεί περίπου 9 μήνες. Σε αυτό το διάστημα το έμβρυο από ένα κύτταρο γίνεται ένα ολόκληρο μωρό.',
      en: 'A pregnancy lasts about 9 months. In that time the embryo grows from a single cell into a whole baby.',
    },
  },
  {
    q: { el: 'Η Μαρία και η Άννα είναι δίδυμες και μοιάζουν σαν δύο σταγόνες νερό. Πώς ξεκίνησαν;', en: 'Maria and Anna are twins and look exactly alike. How did they begin?' },
    options: { el: ['Από ένα γονιμοποιημένο ωάριο που χωρίστηκε στα δύο', 'Από δύο διαφορετικά ωάρια', 'Από ένα ωάριο που γονιμοποιήθηκε δύο φορές', 'Από δύο διαφορετικές μητέρες'], en: ['From one fertilised egg that split in two', 'From two different eggs', 'From one egg fertilised twice', 'From two different mothers'] },
    correct: 0,
    explanation: {
      el: 'Τα πανομοιότυπα δίδυμα ξεκινούν από ένα γονιμοποιημένο ωάριο που χωρίζεται σε δύο έμβρυα. Τα δίδυμα που δεν μοιάζουν προέρχονται από δύο διαφορετικά ωάρια.',
      en: 'Identical twins start from one fertilised egg that splits into two embryos. Twins who do not look alike come from two different eggs.',
    },
  },
];
