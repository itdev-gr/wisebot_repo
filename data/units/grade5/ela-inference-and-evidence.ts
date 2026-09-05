/**
 * Ε' Δημοτικού · ELA · Συμπεράσματα & Τεκμήρια / Inference & Evidence
 * ====================================================================
 * Original questions for a native English-speaking child of 10–11 (US Grade 5 / UK Year 5–6).
 * Four original passages of 5–7 sentences, each repeated inside the questions that use it.
 * The «el» side is a faithful Greek translation (passage included) for a Greek-speaking parent;
 * the English sentences being tested as evidence stay in English on both sides.
 *
 * What the unit covers, in order:
 *   1–2   what an inference is, what text evidence is
 *   3–6   passage A (Priya waits for a car): feelings, evidence, what happened before, prediction
 *   7–10  passage B (Mr. Okafor and the old bench): feelings, motive, evidence, author's point of view
 *   11–14 passage C (the paper boats mystery): conclusion, ruling out, reading a reaction, method
 *   15–18 passage D (the tide pool): a change of mind, evidence, author's point of view, word clues
 *
 * Distractors are the real traps: a detail that is in the text but does not prove the claim,
 * a guess that ignores the clues, and the opposite of what the character's actions show.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE5_ELA_INFERENCE_AND_EVIDENCE: QuizQuestion[] = [
  // ── 1–2: inference and evidence ────────────────────────────────────────────
  {
    q: { el: 'Τι είναι ένα συμπέρασμα (inference);', en: 'What is an inference?' },
    options: {
      el: ['Η αντιγραφή μιας πρότασης από το κείμενο', 'Μια εικασία χωρίς κανέναν λόγο', 'Ο κύριος τίτλος ενός κειμένου', 'Ένα συμπέρασμα στο οποίο φτάνεις με στοιχεία από το κείμενο και όσα ήδη ξέρεις'],
      en: ['Copying a sentence from the text', 'A guess with no reason behind it', 'The main title of a passage', 'A conclusion you reach using clues from the text plus what you already know'],
    },
    correct: 3,
    explanation: {
      el: 'Το συμπέρασμα είναι μια λογική σκέψη: ο συγγραφέας δεν το λέει ευθέως, αλλά τα στοιχεία σε οδηγούν εκεί. Αν κάποιος μπαίνει μέσα με βρεγμένη ομπρέλα, συμπεραίνεις ότι βρέχει.',
      en: 'An inference is a smart conclusion: the author does not say it outright, but the clues lead you there. If someone walks in with a wet umbrella, you infer that it is raining.',
    },
  },
  {
    q: { el: 'Τι είναι το «τεκμήριο από το κείμενο» (text evidence);', en: 'What is "text evidence"?' },
    options: {
      el: ['Η δική σου γνώμη για την ιστορία', 'Λέξεις ή προτάσεις από το κείμενο που στηρίζουν μια ιδέα', 'Το όνομα του συγγραφέα', 'Μια εικόνα στο βιβλίο'],
      en: ['Your own opinion about the story', 'Words or sentences from the text that support an idea', 'The name of the author', 'A picture in the book'],
    },
    correct: 1,
    explanation: {
      el: 'Τεκμήριο είναι η απόδειξη μέσα στο κείμενο. Όταν λες «η Priya είναι ενθουσιασμένη», η πρόταση που το δείχνει είναι το τεκμήριό σου.',
      en: 'Evidence is the proof inside the text. When you say "Priya is excited", the sentence that shows it is your evidence.',
    },
  },

  // ── 3–6: passage A — Priya waits for a car ─────────────────────────────────
  {
    q: {
      el: 'Διάβασε το κείμενο. «Η Priya κοίταξε το ρολόι για τρίτη φορά μέσα σε πέντε λεπτά. Το σακίδιό της ήταν ήδη κλειστό και περίμενε δίπλα στην πόρτα. Έξω, η βροχή είχε επιτέλους σταματήσει, και οι λακκούβες γυάλιζαν κάτω από έναν χλωμό ήλιο. Χτυπούσε το πόδι της και κοίταξε ξανά τον άδειο δρόμο της αυλής. Όταν άκουσε λάστιχα να τρίζουν στο χαλίκι, πετάχτηκε πάνω και άρπαξε την τσάντα της. “Επιτέλους!” είπε, φορώντας τις μπότες της πριν καν σταματήσει το αυτοκίνητο.» Τι υπονοεί το κείμενο για το πώς νιώθει η Priya;',
      en: 'Read the passage. "Priya checked the clock for the third time in five minutes. Her backpack was already zipped and waiting by the door. Outside, the rain had finally stopped, and the puddles shone under a pale sun. She tapped her foot and glanced down the empty driveway again. When she heard tires crunching on the gravel, she leaped up and grabbed her bag. \'Finally!\' she said, pulling on her boots before the car had even stopped." What does the text suggest about how Priya feels?',
    },
    options: {
      el: ['bored and sleepy', 'impatient and excited', 'angry at her friend', 'worried about the rain'],
      en: ['bored and sleepy', 'impatient and excited', 'angry at her friend', 'worried about the rain'],
    },
    correct: 1,
    explanation: {
      el: 'Το να κοιτάζει το ρολόι, να χτυπάει το πόδι της και να πετάγεται πάνω δείχνουν ανυπομονησία, και το «Επιτέλους!» μαζί με την έτοιμη τσάντα δείχνουν ότι ανυπομονεί να φύγει. Ο συγγραφέας δεν λέει ποτέ «ενθουσιασμένη»· το συμπεραίνουμε από τις πράξεις της.',
      en: 'Checking the clock, tapping her foot and leaping up all show impatience, and "Finally!" plus her ready bag show she is excited to go. The author never says "excited"; we infer it from her actions.',
    },
  },
  {
    q: {
      el: 'Διάβασε το κείμενο. «Η Priya κοίταξε το ρολόι για τρίτη φορά μέσα σε πέντε λεπτά. Το σακίδιό της ήταν ήδη κλειστό και περίμενε δίπλα στην πόρτα. Έξω, η βροχή είχε επιτέλους σταματήσει, και οι λακκούβες γυάλιζαν κάτω από έναν χλωμό ήλιο. Χτυπούσε το πόδι της και κοίταξε ξανά τον άδειο δρόμο της αυλής. Όταν άκουσε λάστιχα να τρίζουν στο χαλίκι, πετάχτηκε πάνω και άρπαξε την τσάντα της. “Επιτέλους!” είπε, φορώντας τις μπότες της πριν καν σταματήσει το αυτοκίνητο.» Ποια πρόταση είναι το καλύτερο τεκμήριο ότι η Priya περιμένει ένα αυτοκίνητο;',
      en: 'Read the passage. "Priya checked the clock for the third time in five minutes. Her backpack was already zipped and waiting by the door. Outside, the rain had finally stopped, and the puddles shone under a pale sun. She tapped her foot and glanced down the empty driveway again. When she heard tires crunching on the gravel, she leaped up and grabbed her bag. \'Finally!\' she said, pulling on her boots before the car had even stopped." Which sentence is the best evidence that Priya is waiting for a car?',
    },
    options: {
      el: ['She glanced down the empty driveway again.', 'The rain had finally stopped.', 'Her backpack was zipped and waiting by the door.', 'The puddles shone under a pale sun.'],
      en: ['She glanced down the empty driveway again.', 'The rain had finally stopped.', 'Her backpack was zipped and waiting by the door.', 'The puddles shone under a pale sun.'],
    },
    correct: 0,
    explanation: {
      el: 'Το να κοιτάζει ξανά και ξανά τον δρόμο της αυλής μάς λέει ότι περιμένει κάποιον να έρθει με αυτοκίνητο. Το σακίδιο δείχνει ότι είναι έτοιμη να φύγει, αλλά όχι τι περιμένει.',
      en: 'Looking down the driveway again and again tells us she expects someone to drive up. The backpack shows she is ready to go, but not what she is waiting for.',
    },
  },
  {
    q: {
      el: 'Διάβασε το κείμενο. «Η Priya κοίταξε το ρολόι για τρίτη φορά μέσα σε πέντε λεπτά. Το σακίδιό της ήταν ήδη κλειστό και περίμενε δίπλα στην πόρτα. Έξω, η βροχή είχε επιτέλους σταματήσει, και οι λακκούβες γυάλιζαν κάτω από έναν χλωμό ήλιο. Χτυπούσε το πόδι της και κοίταξε ξανά τον άδειο δρόμο της αυλής. Όταν άκουσε λάστιχα να τρίζουν στο χαλίκι, πετάχτηκε πάνω και άρπαξε την τσάντα της. “Επιτέλους!” είπε, φορώντας τις μπότες της πριν καν σταματήσει το αυτοκίνητο.» Τι μπορείς να συμπεράνεις ότι έγινε λίγο πριν αρχίσει το κείμενο;',
      en: 'Read the passage. "Priya checked the clock for the third time in five minutes. Her backpack was already zipped and waiting by the door. Outside, the rain had finally stopped, and the puddles shone under a pale sun. She tapped her foot and glanced down the empty driveway again. When she heard tires crunching on the gravel, she leaped up and grabbed her bag. \'Finally!\' she said, pulling on her boots before the car had even stopped." What can you infer happened just before the passage begins?',
    },
    options: {
      el: ['Priya had been asleep.', 'Priya lost her backpack.', 'It had been raining.', 'The car broke down.'],
      en: ['Priya had been asleep.', 'Priya lost her backpack.', 'It had been raining.', 'The car broke down.'],
    },
    correct: 2,
    explanation: {
      el: 'Το «η βροχή είχε επιτέλους σταματήσει» και οι γυαλιστερές λακκούβες μάς λένε ότι έβρεχε νωρίτερα. Οι καλοί αναγνώστες χρησιμοποιούν τέτοια μικρά στοιχεία για να φανταστούν τι έγινε πριν.',
      en: '"The rain had finally stopped" and the shiny puddles tell us it was raining earlier. Good readers use small clues like this to picture what happened before.',
    },
  },
  {
    q: {
      el: 'Διάβασε το κείμενο. «Η Priya κοίταξε το ρολόι για τρίτη φορά μέσα σε πέντε λεπτά. Το σακίδιό της ήταν ήδη κλειστό και περίμενε δίπλα στην πόρτα. Έξω, η βροχή είχε επιτέλους σταματήσει, και οι λακκούβες γυάλιζαν κάτω από έναν χλωμό ήλιο. Χτυπούσε το πόδι της και κοίταξε ξανά τον άδειο δρόμο της αυλής. Όταν άκουσε λάστιχα να τρίζουν στο χαλίκι, πετάχτηκε πάνω και άρπαξε την τσάντα της. “Επιτέλους!” είπε, φορώντας τις μπότες της πριν καν σταματήσει το αυτοκίνητο.» Τι είναι πιο πιθανό να κάνει η Priya αμέσως μετά;',
      en: 'Read the passage. "Priya checked the clock for the third time in five minutes. Her backpack was already zipped and waiting by the door. Outside, the rain had finally stopped, and the puddles shone under a pale sun. She tapped her foot and glanced down the empty driveway again. When she heard tires crunching on the gravel, she leaped up and grabbed her bag. \'Finally!\' she said, pulling on her boots before the car had even stopped." What is Priya most likely going to do next?',
    },
    options: {
      el: ['Unpack her bag and stay home', 'Go back to sleep', 'Play in the puddles', 'Get in the car and leave'],
      en: ['Unpack her bag and stay home', 'Go back to sleep', 'Play in the puddles', 'Get in the car and leave'],
    },
    correct: 3,
    explanation: {
      el: 'Έχει αρπάξει την τσάντα της και φοράει τις μπότες της καθώς φτάνει το αυτοκίνητο, άρα η λογική πρόβλεψη είναι ότι μπαίνει μέσα και φεύγει. Η πρόβλεψη είναι ένα συμπέρασμα για το τι ακολουθεί.',
      en: 'She has grabbed her bag and is pulling on her boots as the car arrives, so the sensible prediction is that she gets in and goes. A prediction is an inference about what comes next.',
    },
  },

  // ── 7–10: passage B — Mr. Okafor and the old bench ─────────────────────────
  {
    q: {
      el: 'Διάβασε το κείμενο. «Το παλιό ξύλινο παγκάκι πίσω από τη βιβλιοθήκη είχε μια ρωγμή στη μέση και ένα πόδι που κουνιόταν. Οι περισσότεροι μαθητές το προσπερνούσαν πηγαίνοντας στο γήπεδο. Όμως κάθε μεσημέρι, ο κύριος Okafor καθόταν εκεί με το σάντουιτς και ένα βιβλίο του, γυρίζοντας αργά τις σελίδες. Είχε σκαλίσει τα αρχικά του στο μπράτσο του παγκακιού όταν ήταν παιδί, τότε που το παγκάκι ήταν καινούργιο. Όταν το σχολείο ανακοίνωσε ότι θα το αντικαταστήσει με ένα γυαλιστερό μεταλλικό, έγραψε ένα μακροσκελές γράμμα στη διευθύντρια. Προσφέρθηκε μάλιστα να επισκευάσει ο ίδιος το πόδι που κουνιόταν.» Τι υπονοεί το κείμενο για το πώς νιώθει ο κύριος Okafor για το παγκάκι;',
      en: 'Read the passage. "The old wooden bench behind the library had a crack down the middle and a wobble in one leg. Most students walked right past it on their way to the field. But every lunchtime, Mr. Okafor sat there with his sandwich and a book, turning the pages slowly. He had carved his initials into the armrest as a boy, back when the bench was new. When the school announced it would replace the bench with a shiny metal one, he wrote a long letter to the principal. He even offered to repair the wobbly leg himself." What does the text suggest about how Mr. Okafor feels about the bench?',
    },
    options: {
      el: ['He is attached to it.', 'He thinks it is dangerous.', 'He does not notice it.', 'He wants a new one.'],
      en: ['He is attached to it.', 'He thinks it is dangerous.', 'He does not notice it.', 'He wants a new one.'],
    },
    correct: 0,
    explanation: {
      el: 'Το ότι κάθεται εκεί κάθε μέρα, τα αρχικά από τα παιδικά του χρόνια, το μακροσκελές γράμμα και η προσφορά να το επισκευάσει δείχνουν όλα μια δυνατή προσκόλληση. Το κείμενο δεν λέει ποτέ «αγαπάει το παγκάκι», αλλά τα στοιχεία το κάνουν ξεκάθαρο.',
      en: 'Sitting there every day, the initials from his childhood, the long letter and the offer to fix it all point to a strong attachment. The text never says "he loves the bench", but the clues make it clear.',
    },
  },
  {
    q: {
      el: 'Διάβασε το κείμενο. «Το παλιό ξύλινο παγκάκι πίσω από τη βιβλιοθήκη είχε μια ρωγμή στη μέση και ένα πόδι που κουνιόταν. Οι περισσότεροι μαθητές το προσπερνούσαν πηγαίνοντας στο γήπεδο. Όμως κάθε μεσημέρι, ο κύριος Okafor καθόταν εκεί με το σάντουιτς και ένα βιβλίο του, γυρίζοντας αργά τις σελίδες. Είχε σκαλίσει τα αρχικά του στο μπράτσο του παγκακιού όταν ήταν παιδί, τότε που το παγκάκι ήταν καινούργιο. Όταν το σχολείο ανακοίνωσε ότι θα το αντικαταστήσει με ένα γυαλιστερό μεταλλικό, έγραψε ένα μακροσκελές γράμμα στη διευθύντρια. Προσφέρθηκε μάλιστα να επισκευάσει ο ίδιος το πόδι που κουνιόταν.» Γιατί, πιο πιθανό, έγραψε ο κύριος Okafor στη διευθύντρια;',
      en: 'Read the passage. "The old wooden bench behind the library had a crack down the middle and a wobble in one leg. Most students walked right past it on their way to the field. But every lunchtime, Mr. Okafor sat there with his sandwich and a book, turning the pages slowly. He had carved his initials into the armrest as a boy, back when the bench was new. When the school announced it would replace the bench with a shiny metal one, he wrote a long letter to the principal. He even offered to repair the wobbly leg himself." Why did Mr. Okafor most likely write to the principal?',
    },
    options: {
      el: ['To ask for a longer lunch break', 'To keep the old bench from being replaced', 'To complain about the students', 'To order a metal bench'],
      en: ['To ask for a longer lunch break', 'To keep the old bench from being replaced', 'To complain about the students', 'To order a metal bench'],
    },
    correct: 1,
    explanation: {
      el: 'Το γράμμα ήρθε αμέσως μετά την ανακοίνωση ότι το παγκάκι θα αντικατασταθεί, και προσφέρθηκε να το επισκευάσει. Το κίνητρό του είναι να σώσει το παγκάκι.',
      en: 'The letter came right after the school announced the bench would be replaced, and he offered to repair it. His motive is to save the bench.',
    },
  },
  {
    q: {
      el: 'Διάβασε το κείμενο. «Το παλιό ξύλινο παγκάκι πίσω από τη βιβλιοθήκη είχε μια ρωγμή στη μέση και ένα πόδι που κουνιόταν. Οι περισσότεροι μαθητές το προσπερνούσαν πηγαίνοντας στο γήπεδο. Όμως κάθε μεσημέρι, ο κύριος Okafor καθόταν εκεί με το σάντουιτς και ένα βιβλίο του, γυρίζοντας αργά τις σελίδες. Είχε σκαλίσει τα αρχικά του στο μπράτσο του παγκακιού όταν ήταν παιδί, τότε που το παγκάκι ήταν καινούργιο. Όταν το σχολείο ανακοίνωσε ότι θα το αντικαταστήσει με ένα γυαλιστερό μεταλλικό, έγραψε ένα μακροσκελές γράμμα στη διευθύντρια. Προσφέρθηκε μάλιστα να επισκευάσει ο ίδιος το πόδι που κουνιόταν.» Ποια πρόταση είναι το καλύτερο τεκμήριο ότι το παγκάκι είναι πολύ παλιό;',
      en: 'Read the passage. "The old wooden bench behind the library had a crack down the middle and a wobble in one leg. Most students walked right past it on their way to the field. But every lunchtime, Mr. Okafor sat there with his sandwich and a book, turning the pages slowly. He had carved his initials into the armrest as a boy, back when the bench was new. When the school announced it would replace the bench with a shiny metal one, he wrote a long letter to the principal. He even offered to repair the wobbly leg himself." Which sentence is the best evidence that the bench is very old?',
    },
    options: {
      el: ['Most students walked right past it on their way to the field.', 'He wrote a long letter to the principal.', 'He sat there every lunchtime with his sandwich.', 'He had carved his initials into it as a boy, back when the bench was new.'],
      en: ['Most students walked right past it on their way to the field.', 'He wrote a long letter to the principal.', 'He sat there every lunchtime with his sandwich.', 'He had carved his initials into it as a boy, back when the bench was new.'],
    },
    correct: 3,
    explanation: {
      el: 'Αν το παγκάκι ήταν καινούργιο όταν ο κύριος Okafor ήταν παιδί, και τώρα είναι δάσκαλος, πρέπει να είναι δεκαετίες παλιό. Η ρωγμή και το πόδι που κουνιέται το στηρίζουν, αλλά η πρόταση με τα αρχικά δίνει την πιο καθαρή απόδειξη.',
      en: 'If the bench was new when Mr. Okafor was a boy, and he is now a teacher, it must be decades old. The crack and the wobble support this, but the initials sentence gives the clearest proof.',
    },
  },
  {
    q: {
      el: 'Διάβασε το κείμενο. «Το παλιό ξύλινο παγκάκι πίσω από τη βιβλιοθήκη είχε μια ρωγμή στη μέση και ένα πόδι που κουνιόταν. Οι περισσότεροι μαθητές το προσπερνούσαν πηγαίνοντας στο γήπεδο. Όμως κάθε μεσημέρι, ο κύριος Okafor καθόταν εκεί με το σάντουιτς και ένα βιβλίο του, γυρίζοντας αργά τις σελίδες. Είχε σκαλίσει τα αρχικά του στο μπράτσο του παγκακιού όταν ήταν παιδί, τότε που το παγκάκι ήταν καινούργιο. Όταν το σχολείο ανακοίνωσε ότι θα το αντικαταστήσει με ένα γυαλιστερό μεταλλικό, έγραψε ένα μακροσκελές γράμμα στη διευθύντρια. Προσφέρθηκε μάλιστα να επισκευάσει ο ίδιος το πόδι που κουνιόταν.» Πώς φαίνεται να νιώθει ο συγγραφέας για το παγκάκι;',
      en: 'Read the passage. "The old wooden bench behind the library had a crack down the middle and a wobble in one leg. Most students walked right past it on their way to the field. But every lunchtime, Mr. Okafor sat there with his sandwich and a book, turning the pages slowly. He had carved his initials into the armrest as a boy, back when the bench was new. When the school announced it would replace the bench with a shiny metal one, he wrote a long letter to the principal. He even offered to repair the wobbly leg himself." How does the author seem to feel about the bench?',
    },
    options: {
      el: ['The author thinks it should be thrown away.', 'The author finds it sad and pointless.', 'The author seems fond of it and its history.', 'The author does not care either way.'],
      en: ['The author thinks it should be thrown away.', 'The author finds it sad and pointless.', 'The author seems fond of it and its history.', 'The author does not care either way.'],
    },
    correct: 2,
    explanation: {
      el: 'Ο συγγραφέας αφιερώνει το μεγαλύτερο μέρος του κειμένου στην ιστορία του παγκακιού και στη φροντίδα του κυρίου Okafor, με τρυφερές λεπτομέρειες όπως «γυρίζοντας αργά τις σελίδες». Αυτή η επιλογή λεπτομερειών δείχνει μια ζεστή οπτική γωνία.',
      en: 'The author spends most of the passage on the bench\'s story and on Mr. Okafor\'s care for it, using gentle details like "turning the pages slowly". That choice of details shows a warm point of view.',
    },
  },

  // ── 11–14: passage C — the paper boats mystery ─────────────────────────────
  {
    q: {
      el: 'Διάβασε το κείμενο. «Κανείς στην πολυκατοικία δεν μπορούσε να καταλάβει ποιος άφηνε τα μικροσκοπικά χάρτινα καραβάκια στις σκάλες. Ένα εμφανιζόταν κάθε πρωί, διπλωμένο από μια σελίδα της εφημερίδας της περασμένης εβδομάδας, πάντα σε διαφορετικό σκαλί. Η κυρία Reyes από τον δεύτερο όροφο κατηγορούσε τα δίδυμα από τον τέταρτο, αλλά τα δίδυμα έλειπαν σε κατασκήνωση όλη την εβδομάδα. Ο Jonah, που έμενε στο ισόγειο, πρόσεξε μελάνι εφημερίδας στις πατούσες της γάτας του θυρωρού. Πρόσεξε επίσης μια στοίβα παλιές εφημερίδες δίπλα στην πόρτα του θυρωρού, με σελίδες προσεκτικά κομμένες. Εκείνο το βράδυ ρώτησε τον θυρωρό, τον κύριο Bell, αν είχε μάθει ποτέ οριγκάμι. Ο κύριος Bell κοκκίνισε και άλλαξε γρήγορα θέμα.» Ποιος, πιο πιθανό, έφτιαχνε τα χάρτινα καραβάκια;',
      en: 'Read the passage. "Nobody in the apartment building could work out who was leaving the tiny paper boats on the stairs. One appeared each morning, folded from a page of last week\'s newspaper, always on a different step. Mrs. Reyes on the second floor blamed the twins from the fourth floor, but the twins had been away at camp all week. Jonah, who lived on the ground floor, noticed newspaper ink smudged on the paws of the caretaker\'s cat. He also noticed a stack of old newspapers by the caretaker\'s door, with pages neatly cut out. That evening he asked the caretaker, Mr. Bell, whether he had ever learned origami. Mr. Bell went pink and quickly changed the subject." Who most likely made the paper boats?',
    },
    options: { el: ['Mrs. Reyes', 'the twins', 'Mr. Bell', 'Jonah'], en: ['Mrs. Reyes', 'the twins', 'Mr. Bell', 'Jonah'] },
    correct: 2,
    explanation: {
      el: 'Οι κομμένες εφημερίδες δίπλα στην πόρτα του, το μελάνι στις πατούσες της γάτας του και το κοκκίνισμα όταν ρωτήθηκε για οριγκάμι δείχνουν όλα τον κύριο Bell. Οι ντετέκτιβ και οι αναγνώστες προσθέτουν τα στοιχεία για να φτάσουν σε συμπέρασμα.',
      en: 'The cut-up newspapers by his door, the ink on his cat\'s paws and his blushing when asked about origami all point to Mr. Bell. Detectives and readers both add up clues to reach a conclusion.',
    },
  },
  {
    q: {
      el: 'Διάβασε το κείμενο. «Κανείς στην πολυκατοικία δεν μπορούσε να καταλάβει ποιος άφηνε τα μικροσκοπικά χάρτινα καραβάκια στις σκάλες. Ένα εμφανιζόταν κάθε πρωί, διπλωμένο από μια σελίδα της εφημερίδας της περασμένης εβδομάδας, πάντα σε διαφορετικό σκαλί. Η κυρία Reyes από τον δεύτερο όροφο κατηγορούσε τα δίδυμα από τον τέταρτο, αλλά τα δίδυμα έλειπαν σε κατασκήνωση όλη την εβδομάδα. Ο Jonah, που έμενε στο ισόγειο, πρόσεξε μελάνι εφημερίδας στις πατούσες της γάτας του θυρωρού. Πρόσεξε επίσης μια στοίβα παλιές εφημερίδες δίπλα στην πόρτα του θυρωρού, με σελίδες προσεκτικά κομμένες. Εκείνο το βράδυ ρώτησε τον θυρωρό, τον κύριο Bell, αν είχε μάθει ποτέ οριγκάμι. Ο κύριος Bell κοκκίνισε και άλλαξε γρήγορα θέμα.» Ποια πρόταση δείχνει ότι τα δίδυμα ΔΕΝ μπορεί να ήταν οι ένοχοι;',
      en: 'Read the passage. "Nobody in the apartment building could work out who was leaving the tiny paper boats on the stairs. One appeared each morning, folded from a page of last week\'s newspaper, always on a different step. Mrs. Reyes on the second floor blamed the twins from the fourth floor, but the twins had been away at camp all week. Jonah, who lived on the ground floor, noticed newspaper ink smudged on the paws of the caretaker\'s cat. He also noticed a stack of old newspapers by the caretaker\'s door, with pages neatly cut out. That evening he asked the caretaker, Mr. Bell, whether he had ever learned origami. Mr. Bell went pink and quickly changed the subject." Which sentence shows that the twins could NOT be the ones?',
    },
    options: {
      el: ['One appeared each morning.', 'The twins had been away at camp all week.', 'Mrs. Reyes blamed the twins.', 'Jonah lived on the ground floor.'],
      en: ['One appeared each morning.', 'The twins had been away at camp all week.', 'Mrs. Reyes blamed the twins.', 'Jonah lived on the ground floor.'],
    },
    correct: 1,
    explanation: {
      el: 'Αν τα δίδυμα ήταν σε κατασκήνωση όλη την εβδομάδα, δεν ήταν εκεί για να αφήνουν τα καραβάκια κάθε πρωί. Αυτό είναι τεκμήριο που τα αποκλείει.',
      en: 'If the twins were at camp all week, they were not there to leave the boats each morning. This is evidence that rules them out.',
    },
  },
  {
    q: {
      el: 'Διάβασε το κείμενο. «Κανείς στην πολυκατοικία δεν μπορούσε να καταλάβει ποιος άφηνε τα μικροσκοπικά χάρτινα καραβάκια στις σκάλες. Ένα εμφανιζόταν κάθε πρωί, διπλωμένο από μια σελίδα της εφημερίδας της περασμένης εβδομάδας, πάντα σε διαφορετικό σκαλί. Η κυρία Reyes από τον δεύτερο όροφο κατηγορούσε τα δίδυμα από τον τέταρτο, αλλά τα δίδυμα έλειπαν σε κατασκήνωση όλη την εβδομάδα. Ο Jonah, που έμενε στο ισόγειο, πρόσεξε μελάνι εφημερίδας στις πατούσες της γάτας του θυρωρού. Πρόσεξε επίσης μια στοίβα παλιές εφημερίδες δίπλα στην πόρτα του θυρωρού, με σελίδες προσεκτικά κομμένες. Εκείνο το βράδυ ρώτησε τον θυρωρό, τον κύριο Bell, αν είχε μάθει ποτέ οριγκάμι. Ο κύριος Bell κοκκίνισε και άλλαξε γρήγορα θέμα.» Τι υπονοεί το «ο κύριος Bell κοκκίνισε και άλλαξε γρήγορα θέμα»;',
      en: 'Read the passage. "Nobody in the apartment building could work out who was leaving the tiny paper boats on the stairs. One appeared each morning, folded from a page of last week\'s newspaper, always on a different step. Mrs. Reyes on the second floor blamed the twins from the fourth floor, but the twins had been away at camp all week. Jonah, who lived on the ground floor, noticed newspaper ink smudged on the paws of the caretaker\'s cat. He also noticed a stack of old newspapers by the caretaker\'s door, with pages neatly cut out. That evening he asked the caretaker, Mr. Bell, whether he had ever learned origami. Mr. Bell went pink and quickly changed the subject." What does "Mr. Bell went pink and quickly changed the subject" suggest?',
    },
    options: {
      el: ['He was embarrassed because the boats were his secret.', 'He was feeling cold.', 'He did not hear the question.', 'He was angry at Jonah.'],
      en: ['He was embarrassed because the boats were his secret.', 'He was feeling cold.', 'He did not hear the question.', 'He was angry at Jonah.'],
    },
    correct: 0,
    explanation: {
      el: 'Το «κοκκίνισε» σημαίνει ότι ντράπηκε, και η αλλαγή θέματος είναι αυτό που κάνουν οι άνθρωποι όταν δεν θέλουν να απαντήσουν. Μαζί υπονοούν ότι ντρέπεται που τον ανακάλυψαν.',
      en: 'Going pink means blushing, and changing the subject is what people do when they do not want to answer. Together they suggest he is embarrassed to be found out.',
    },
  },
  {
    q: {
      el: 'Διάβασε το κείμενο. «Κανείς στην πολυκατοικία δεν μπορούσε να καταλάβει ποιος άφηνε τα μικροσκοπικά χάρτινα καραβάκια στις σκάλες. Ένα εμφανιζόταν κάθε πρωί, διπλωμένο από μια σελίδα της εφημερίδας της περασμένης εβδομάδας, πάντα σε διαφορετικό σκαλί. Η κυρία Reyes από τον δεύτερο όροφο κατηγορούσε τα δίδυμα από τον τέταρτο, αλλά τα δίδυμα έλειπαν σε κατασκήνωση όλη την εβδομάδα. Ο Jonah, που έμενε στο ισόγειο, πρόσεξε μελάνι εφημερίδας στις πατούσες της γάτας του θυρωρού. Πρόσεξε επίσης μια στοίβα παλιές εφημερίδες δίπλα στην πόρτα του θυρωρού, με σελίδες προσεκτικά κομμένες. Εκείνο το βράδυ ρώτησε τον θυρωρό, τον κύριο Bell, αν είχε μάθει ποτέ οριγκάμι. Ο κύριος Bell κοκκίνισε και άλλαξε γρήγορα θέμα.» Με ποιον τρόπο λύνει ο Jonah το μυστήριο;',
      en: 'Read the passage. "Nobody in the apartment building could work out who was leaving the tiny paper boats on the stairs. One appeared each morning, folded from a page of last week\'s newspaper, always on a different step. Mrs. Reyes on the second floor blamed the twins from the fourth floor, but the twins had been away at camp all week. Jonah, who lived on the ground floor, noticed newspaper ink smudged on the paws of the caretaker\'s cat. He also noticed a stack of old newspapers by the caretaker\'s door, with pages neatly cut out. That evening he asked the caretaker, Mr. Bell, whether he had ever learned origami. Mr. Bell went pink and quickly changed the subject." How does Jonah go about solving the mystery?',
    },
    options: {
      el: ['He guesses without any clues.', 'He asks everyone in the building.', 'He waits for someone to confess.', 'He looks for physical evidence and then tests his idea.'],
      en: ['He guesses without any clues.', 'He asks everyone in the building.', 'He waits for someone to confess.', 'He looks for physical evidence and then tests his idea.'],
    },
    correct: 3,
    explanation: {
      el: 'Ο Jonah προσέχει το μελάνι και τις κομμένες εφημερίδες (τεκμήρια) και μετά ρωτάει τον κύριο Bell για το οριγκάμι (δοκιμάζει την ιδέα του). Ακριβώς έτσι κάνει συμπεράσματα ένας προσεκτικός αναγνώστης.',
      en: 'Jonah notices the ink and the cut-up newspapers (evidence) and then asks Mr. Bell about origami (testing his idea). That is exactly how a careful reader makes an inference.',
    },
  },

  // ── 15–18: passage D — the tide pool ───────────────────────────────────────
  {
    q: {
      el: 'Διάβασε το κείμενο. «Με το πρώτο φως, η λιμνούλα της παλίρροιας δεν έμοιαζε με τίποτα παραπάνω από μια λακκούβα ανάμεσα στα βράχια. Παραλίγο να την προσπεράσω. Τότε ένας ερημίτης κάβουρας σύρθηκε πλάγια μέσα σε ένα δανεικό κοχύλι, και ένα μικροσκοπικό ψάρι χώθηκε κάτω από μια κουρτίνα από φύκια. Μια θαλάσσια ανεμώνη, μοβ σαν σταφύλι, μάζεψε τα πλοκάμια της όταν πέρασε η σκιά μου. Έμεινα σκυμμένος εκεί μια ολόκληρη ώρα, μέχρι που πόνεσαν τα γόνατά μου και η παλίρροια άρχισε να ξαναμπαίνει. Όταν τελικά σηκώθηκα, υποσχέθηκα στον εαυτό μου ότι δεν θα ξαναπώ ποτέ μια λιμνούλα της παλίρροιας “απλώς μια λακκούβα”.» Τι υπονοεί η τελευταία πρόταση για τον αφηγητή;',
      en: 'Read the passage. "At first light, the tide pool looked like nothing more than a puddle in the rocks. I almost stepped over it. Then a hermit crab shuffled sideways in a borrowed shell, and a tiny fish darted under a curtain of seaweed. A sea anemone, purple as a grape, folded its arms when my shadow passed. I crouched there for an hour, until my knees ached and the tide crept back in. When I finally stood up, I promised myself I would never call a tide pool \'just a puddle\' again." What does the last sentence suggest about the narrator?',
    },
    options: {
      el: ['The narrator is bored of the beach.', 'The narrator\'s opinion of tide pools has changed.', 'The narrator is afraid of crabs.', 'The narrator wants to go swimming.'],
      en: ['The narrator is bored of the beach.', 'The narrator\'s opinion of tide pools has changed.', 'The narrator is afraid of crabs.', 'The narrator wants to go swimming.'],
    },
    correct: 1,
    explanation: {
      el: 'Στην αρχή ο αφηγητής παραλίγο να προσπεράσει τη λιμνούλα, αλλά αφού την παρακολούθησε μια ώρα υπόσχεται να μην την ξαναπεί «απλώς μια λακκούβα». Η αλλαγή στα λόγια δείχνει αλλαγή γνώμης.',
      en: 'At the start the narrator almost stepped over the pool, but after watching for an hour they promise never to call it "just a puddle". The change in words shows a change in opinion.',
    },
  },
  {
    q: {
      el: 'Διάβασε το κείμενο. «Με το πρώτο φως, η λιμνούλα της παλίρροιας δεν έμοιαζε με τίποτα παραπάνω από μια λακκούβα ανάμεσα στα βράχια. Παραλίγο να την προσπεράσω. Τότε ένας ερημίτης κάβουρας σύρθηκε πλάγια μέσα σε ένα δανεικό κοχύλι, και ένα μικροσκοπικό ψάρι χώθηκε κάτω από μια κουρτίνα από φύκια. Μια θαλάσσια ανεμώνη, μοβ σαν σταφύλι, μάζεψε τα πλοκάμια της όταν πέρασε η σκιά μου. Έμεινα σκυμμένος εκεί μια ολόκληρη ώρα, μέχρι που πόνεσαν τα γόνατά μου και η παλίρροια άρχισε να ξαναμπαίνει. Όταν τελικά σηκώθηκα, υποσχέθηκα στον εαυτό μου ότι δεν θα ξαναπώ ποτέ μια λιμνούλα της παλίρροιας “απλώς μια λακκούβα”.» Ποια πρόταση είναι το καλύτερο τεκμήριο ότι ο αφηγητής βρήκε τη λιμνούλα συναρπαστική;',
      en: 'Read the passage. "At first light, the tide pool looked like nothing more than a puddle in the rocks. I almost stepped over it. Then a hermit crab shuffled sideways in a borrowed shell, and a tiny fish darted under a curtain of seaweed. A sea anemone, purple as a grape, folded its arms when my shadow passed. I crouched there for an hour, until my knees ached and the tide crept back in. When I finally stood up, I promised myself I would never call a tide pool \'just a puddle\' again." Which sentence is the best evidence that the narrator found the tide pool fascinating?',
    },
    options: {
      el: ['I crouched there for an hour, until my knees ached.', 'At first light, the tide pool looked like nothing more than a puddle.', 'I almost stepped over it.', 'The tide crept back in.'],
      en: ['I crouched there for an hour, until my knees ached.', 'At first light, the tide pool looked like nothing more than a puddle.', 'I almost stepped over it.', 'The tide crept back in.'],
    },
    correct: 0,
    explanation: {
      el: 'Κανείς δεν μένει σκυμμένος μια ώρα με πονεμένα γόνατα αν κάτι δεν του κρατάει την προσοχή. Τέτοιες πράξεις είναι πιο δυνατό τεκμήριο από το να πει ο αφηγητής «ήταν ενδιαφέρον».',
      en: 'Nobody stays crouched for an hour with aching knees unless something is holding their attention. Actions like this are stronger evidence than the narrator saying "it was interesting".',
    },
  },
  {
    q: {
      el: 'Διάβασε το κείμενο. «Με το πρώτο φως, η λιμνούλα της παλίρροιας δεν έμοιαζε με τίποτα παραπάνω από μια λακκούβα ανάμεσα στα βράχια. Παραλίγο να την προσπεράσω. Τότε ένας ερημίτης κάβουρας σύρθηκε πλάγια μέσα σε ένα δανεικό κοχύλι, και ένα μικροσκοπικό ψάρι χώθηκε κάτω από μια κουρτίνα από φύκια. Μια θαλάσσια ανεμώνη, μοβ σαν σταφύλι, μάζεψε τα πλοκάμια της όταν πέρασε η σκιά μου. Έμεινα σκυμμένος εκεί μια ολόκληρη ώρα, μέχρι που πόνεσαν τα γόνατά μου και η παλίρροια άρχισε να ξαναμπαίνει. Όταν τελικά σηκώθηκα, υποσχέθηκα στον εαυτό μου ότι δεν θα ξαναπώ ποτέ μια λιμνούλα της παλίρροιας “απλώς μια λακκούβα”.» Ποια είναι η οπτική γωνία του συγγραφέα για τα μικρά πράγματα στη φύση;',
      en: 'Read the passage. "At first light, the tide pool looked like nothing more than a puddle in the rocks. I almost stepped over it. Then a hermit crab shuffled sideways in a borrowed shell, and a tiny fish darted under a curtain of seaweed. A sea anemone, purple as a grape, folded its arms when my shadow passed. I crouched there for an hour, until my knees ached and the tide crept back in. When I finally stood up, I promised myself I would never call a tide pool \'just a puddle\' again." What is the author\'s point of view about small things in nature?',
    },
    options: {
      el: ['They are easy to miss but worth a closer look.', 'They are dangerous.', 'They are not as good as big animals.', 'They are boring.'],
      en: ['They are easy to miss but worth a closer look.', 'They are dangerous.', 'They are not as good as big animals.', 'They are boring.'],
    },
    correct: 0,
    explanation: {
      el: 'Όλο το κείμενο πηγαίνει από το «τίποτα παραπάνω από μια λακκούβα» σε μια υπόσχεση σεβασμού προς τις λιμνούλες της παλίρροιας. Το μήνυμα του συγγραφέα είναι ότι οι μικροσκοπικοί κόσμοι ανταμείβουν την υπομονετική προσοχή.',
      en: 'The whole passage moves from "nothing more than a puddle" to a promise to respect tide pools. The author\'s message is that tiny worlds reward patient attention.',
    },
  },
  {
    q: {
      el: 'Διάβασε το κείμενο. «Με το πρώτο φως, η λιμνούλα της παλίρροιας δεν έμοιαζε με τίποτα παραπάνω από μια λακκούβα ανάμεσα στα βράχια. Παραλίγο να την προσπεράσω. Τότε ένας ερημίτης κάβουρας σύρθηκε πλάγια μέσα σε ένα δανεικό κοχύλι, και ένα μικροσκοπικό ψάρι χώθηκε κάτω από μια κουρτίνα από φύκια. Μια θαλάσσια ανεμώνη, μοβ σαν σταφύλι, μάζεψε τα πλοκάμια της όταν πέρασε η σκιά μου. Έμεινα σκυμμένος εκεί μια ολόκληρη ώρα, μέχρι που πόνεσαν τα γόνατά μου και η παλίρροια άρχισε να ξαναμπαίνει. Όταν τελικά σηκώθηκα, υποσχέθηκα στον εαυτό μου ότι δεν θα ξαναπώ ποτέ μια λιμνούλα της παλίρροιας “απλώς μια λακκούβα”.» Τι μπορείς να συμπεράνεις από το «ένας ερημίτης κάβουρας σύρθηκε πλάγια μέσα σε ένα δανεικό κοχύλι»;',
      en: 'Read the passage. "At first light, the tide pool looked like nothing more than a puddle in the rocks. I almost stepped over it. Then a hermit crab shuffled sideways in a borrowed shell, and a tiny fish darted under a curtain of seaweed. A sea anemone, purple as a grape, folded its arms when my shadow passed. I crouched there for an hour, until my knees ached and the tide crept back in. When I finally stood up, I promised myself I would never call a tide pool \'just a puddle\' again." What can you infer from "a hermit crab shuffled sideways in a borrowed shell"?',
    },
    options: {
      el: ['The crab stole the shell from a fish.', 'The crab was injured.', 'The shell was made of seaweed.', 'Hermit crabs live in shells that are not their own.'],
      en: ['The crab stole the shell from a fish.', 'The crab was injured.', 'The shell was made of seaweed.', 'Hermit crabs live in shells that are not their own.'],
    },
    correct: 3,
    explanation: {
      el: 'Το «δανεικό» σου λέει ότι το κοχύλι δεν ανήκε αρχικά στον κάβουρα. Οι ερημίτες κάβουρες μετακομίζουν σε άδεια κοχύλια που άφησαν άλλα θαλάσσια πλάσματα, και η επιλογή της λέξης το υπονοεί.',
      en: '"Borrowed" tells you the shell did not originally belong to the crab. Hermit crabs move into empty shells left behind by other sea creatures, and the word choice hints at that.',
    },
  },
];
