/**
 * Δ' Δημοτικού · Γλώσσα · Περίληψη & δομή κειμένου
 * =================================================
 * All questions are original (curriculum topics only — nothing from ebooks.edu.gr), including
 * the three short texts inside the questions (the grandfather's vegetable garden, the rainy
 * school trip, the little swallow). Language level: a child of 9–10.
 * What the unit covers, in order:
 *   1–5   the paragraph and its main idea; detail vs main idea; the topic sentence
 *   6–8   the title that fits: specific, not too general, short
 *   9–12  the order of paragraphs (beginning – middle – end) and the words that mark the end
 *   13–15 the summary: what stays, what is left out, own words, shorter than the text
 *   16–18 connecting words: πρώτα, έπειτα, τέλος, όμως
 * Distractors are the mistakes children actually make: picking a detail as the main idea,
 * a title that is too general, a "summary" that is one detail copied out, mixing up the
 * connecting words of order and contrast. The UI shuffles options.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE4_GREEK_SUMMARY_AND_TEXT_STRUCTURE: QuizQuestion[] = [
  // ── 1–5: the paragraph and its main idea ──────────────────────────────────
  {
    q: { el: '«Κάθε Σάββατο ο Πέτρος βοηθάει τον παππού του στον λαχανόκηπο. Ποτίζει τις ντομάτες, βγάζει τα αγριόχορτα και μαζεύει τα ώριμα κολοκύθια σε ένα καλάθι. Στο τέλος κάθονται μαζί κάτω από τη συκιά και τρώνε ό,τι μάζεψαν. Ο Πέτρος λέει ότι είναι η πιο ωραία μέρα της εβδομάδας.» Ποια είναι η κύρια ιδέα της παραγράφου;', en: '“Every Saturday Petros helps his grandfather in the vegetable garden. He waters the tomatoes, pulls out the weeds and collects the ripe courgettes in a basket. At the end they sit together under the fig tree and eat what they picked. Petros says it is the best day of the week.” What is the main idea of the paragraph?' },
    options: { el: ['Ο Πέτρος βοηθάει με χαρά τον παππού του στον κήπο κάθε Σάββατο.', 'Οι ντομάτες θέλουν πολύ νερό.', 'Τα κολοκύθια μπαίνουν σε ένα καλάθι.', 'Η συκιά έχει σκιά.'], en: ['Petros happily helps his grandfather in the garden every Saturday.', 'Tomatoes need a lot of water.', 'The courgettes go in a basket.', 'The fig tree gives shade.'] },
    correct: 0,
    explanation: {
      el: 'Η κύρια ιδέα είναι αυτό για το οποίο μιλάει όλη η παράγραφος: ο Πέτρος και ο παππούς στον κήπο. Οι ντομάτες, το καλάθι και η συκιά είναι λεπτομέρειες.',
      en: 'The main idea is what the whole paragraph is about: Petros and his grandfather in the garden. The tomatoes, the basket and the fig tree are details.',
    },
  },
  {
    q: { el: 'Στην παράγραφο για τον Πέτρο και τον παππού του, ποια πληροφορία είναι λεπτομέρεια και θα μπορούσε να λείπει από μια περίληψη;', en: 'In the paragraph about Petros and his grandfather, which piece of information is a detail that could be left out of a summary?' },
    options: { el: ['Ο Πέτρος βοηθάει τον παππού του στον κήπο.', 'Μαζεύει τα κολοκύθια σε ένα καλάθι.', 'Το κάνει κάθε Σάββατο.', 'Του αρέσει πολύ αυτή η μέρα.'], en: ['Petros helps his grandfather in the garden.', 'He collects the courgettes in a basket.', 'He does it every Saturday.', 'He loves this day.'] },
    correct: 1,
    explanation: {
      el: 'Το καλάθι είναι μια μικρή λεπτομέρεια: αν λείψει, η ιστορία δεν αλλάζει. Το ποιος, το τι κάνει, το πότε και το πώς νιώθει είναι τα σημαντικά.',
      en: 'The basket is a small detail: without it, the story does not change. Who, what he does, when and how he feels are the important parts.',
    },
  },
  {
    q: { el: 'Τι είναι μια παράγραφος;', en: 'What is a paragraph?' },
    options: { el: ['Μία μόνο λέξη', 'Ο τίτλος του κειμένου', 'Μια ομάδα από προτάσεις που μιλούν για την ίδια ιδέα', 'Μια πρόταση με ερωτηματικό'], en: ['A single word', 'The title of the text', 'A group of sentences that talk about the same idea', 'A sentence with a question mark'] },
    correct: 2,
    explanation: {
      el: 'Η παράγραφος είναι ένα κομμάτι του κειμένου με προτάσεις που μιλούν για την ίδια ιδέα. Όταν αλλάζει η ιδέα, αλλάζουμε παράγραφο.',
      en: 'A paragraph is a piece of the text with sentences that talk about the same idea. When the idea changes, we start a new paragraph.',
    },
  },
  {
    q: { el: 'Πώς καταλαβαίνουμε ότι αρχίζει καινούργια παράγραφος;', en: 'How can we tell that a new paragraph begins?' },
    options: { el: ['Αρχίζει σε νέα γραμμή, συνήθως λίγο πιο μέσα', 'Έχει πάντα ερωτηματικό', 'Γράφεται όλη με κεφαλαία γράμματα', 'Έχει μόνο μία λέξη'], en: ['It starts on a new line, usually a little further in', 'It always has a question mark', 'It is written all in capital letters', 'It has only one word'] },
    correct: 0,
    explanation: {
      el: 'Κάθε παράγραφος ξεκινάει σε νέα γραμμή και η πρώτη της λέξη μπαίνει λίγο πιο μέσα (αυτό λέγεται εσοχή). Έτσι το κείμενο διαβάζεται πιο εύκολα.',
      en: 'Each paragraph starts on a new line and its first word sits a little further in (this is called an indent). That makes the text easier to read.',
    },
  },
  {
    q: { el: 'Ποια πρόταση ταιριάζει ως θεματική πρόταση (η πρώτη πρόταση) μιας παραγράφου για τα δελφίνια;', en: 'Which sentence works as the topic sentence (the first sentence) of a paragraph about dolphins?' },
    options: { el: ['Χθες έφαγα μακαρόνια.', 'Το μπλε είναι το αγαπημένο μου χρώμα.', 'Η θάλασσα έχει κύματα.', 'Τα δελφίνια είναι έξυπνα θαλάσσια θηλαστικά.'], en: ['Yesterday I ate pasta.', 'Blue is my favourite colour.', 'The sea has waves.', 'Dolphins are clever sea mammals.'] },
    correct: 3,
    explanation: {
      el: 'Η θεματική πρόταση λέει από την αρχή για τι θα μιλήσει η παράγραφος. Οι υπόλοιπες προτάσεις έπειτα δίνουν λεπτομέρειες για τα δελφίνια.',
      en: 'The topic sentence says right at the start what the paragraph will talk about. The other sentences then give details about dolphins.',
    },
  },

  // ── 6–8: the title that fits ──────────────────────────────────────────────
  {
    q: { el: '«Η τάξη μας είχε προγραμματίσει εκδρομή στο δάσος. Το πρωί όμως ο ουρανός ήταν γεμάτος σύννεφα και άρχισε να βρέχει δυνατά. Η δασκάλα μας είπε να μη στενοχωριόμαστε. Στρώσαμε τις κουβέρτες στο πάτωμα της τάξης, ανοίξαμε τα σάντουιτς και κάναμε πικνίκ μέσα στο σχολείο. Ήταν η πιο αστεία εκδρομή που κάναμε ποτέ!» Ποιος τίτλος ταιριάζει καλύτερα στο κείμενο;', en: '“Our class had planned a trip to the forest. In the morning, though, the sky was full of clouds and it started raining hard. Our teacher told us not to be upset. We spread the blankets on the classroom floor, opened our sandwiches and had a picnic inside the school. It was the funniest trip we ever had!” Which title fits the text best?' },
    options: { el: ['Τα ζώα του δάσους', 'Πικνίκ μέσα στην τάξη', 'Πώς φτιάχνουμε σάντουιτς', 'Η ιστορία της βροχής'], en: ['The animals of the forest', 'A picnic in the classroom', 'How to make sandwiches', 'The story of rain'] },
    correct: 1,
    explanation: {
      el: 'Ο τίτλος πρέπει να ταιριάζει με το πιο σημαντικό γεγονός: το πικνίκ έγινε μέσα στην τάξη. Το δάσος, τα σάντουιτς και η βροχή είναι μόνο κομμάτια της ιστορίας.',
      en: 'The title must match the most important event: the picnic happened inside the classroom. The forest, the sandwiches and the rain are only parts of the story.',
    },
  },
  {
    q: { el: 'Για το κείμενο με το πικνίκ, ποιος τίτλος είναι πολύ γενικός και δεν λέει τίποτα για την ιστορία;', en: 'For the picnic text, which title is too general and says nothing about the story?' },
    options: { el: ['Μια εκδρομή που άλλαξε', 'Το σχολείο', 'Πικνίκ με βροχή', 'Η εκδρομή που έγινε μέσα στην τάξη'], en: ['A trip that changed', 'The school', 'A picnic with rain', 'The trip that happened in the classroom'] },
    correct: 1,
    explanation: {
      el: '«Το σχολείο» θα μπορούσε να είναι τίτλος για χίλια κείμενα. Ένας καλός τίτλος είναι σύντομος, αλλά δείχνει τι ξεχωριστό έχει αυτή η ιστορία.',
      en: '“The school” could be the title of a thousand texts. A good title is short, but shows what is special about this story.',
    },
  },
  {
    q: { el: 'Ένας καλός τίτλος…', en: 'What is true of a good title?' },
    options: { el: ['είναι πάντα μια ολόκληρη σελίδα', 'πρέπει να έχει το όνομα του συγγραφέα', 'λέει με λίγες λέξεις για τι μιλάει το κείμενο', 'γράφεται στο τέλος του κειμένου'], en: ['is always a whole page long', 'must contain the name of the author', 'says in a few words what the text is about', 'is written at the end of the text'] },
    correct: 2,
    explanation: {
      el: 'Ο τίτλος μπαίνει στην αρχή, είναι σύντομος και δίνει μια ιδέα για το θέμα, ώστε ο αναγνώστης να θέλει να διαβάσει παρακάτω.',
      en: 'The title goes at the start, is short and gives an idea of the subject, so that the reader wants to read on.',
    },
  },

  // ── 9–12: beginning, middle, end ──────────────────────────────────────────
  {
    q: { el: 'Τρεις παράγραφοι μιας ιστορίας, ανακατεμένες. Α: «Τελικά, το χελιδόνι βρήκε τη φωλιά του κάτω από το μπαλκόνι και κοιμήθηκε ήσυχο.» Β: «Ένα μικρό χελιδόνι έφυγε για πρώτη φορά από τη φωλιά του ένα ανοιξιάτικο πρωί.» Γ: «Πέταξε πάνω από την πλατεία, κουράστηκε και δεν θυμόταν πια τον δρόμο για πίσω.» Ποια είναι η σωστή σειρά;', en: 'Three paragraphs of a story, mixed up. A: “In the end, the swallow found its nest under the balcony and slept peacefully.” B: “A little swallow left its nest for the first time one spring morning.” C: “It flew over the square, got tired and could no longer remember the way back.” What is the correct order?' },
    options: { el: ['Α – Β – Γ', 'Γ – Α – Β', 'Β – Γ – Α', 'Β – Α – Γ'], en: ['A – B – C', 'C – A – B', 'B – C – A', 'B – A – C'] },
    correct: 2,
    explanation: {
      el: 'Αρχή: το χελιδόνι φεύγει από τη φωλιά (Β). Μέση: χάνεται (Γ). Τέλος: βρίσκει τη φωλιά του (Α). Κάθε ιστορία έχει αρχή, μέση και τέλος.',
      en: 'Beginning: the swallow leaves the nest (B). Middle: it gets lost (C). End: it finds its nest (A). Every story has a beginning, a middle and an end.',
    },
  },
  {
    q: { el: 'Στην ιστορία με το χελιδόνι, ποια παράγραφος είναι η αρχή (η εισαγωγή);', en: 'In the swallow story, which paragraph is the beginning (the introduction)?' },
    options: { el: ['Η Α, που λέει πού κοιμήθηκε', 'Η Γ, που λέει ότι χάθηκε', 'Καμία από τις τρεις', 'Η Β, που λέει ποιος είναι ο ήρωας και τι έκανε πρώτα'], en: ['A, which says where it slept', 'C, which says it got lost', 'None of the three', 'B, which says who the hero is and what it did first'] },
    correct: 3,
    explanation: {
      el: 'Η αρχή μας γνωρίζει τον ήρωα (ένα μικρό χελιδόνι), το πού και το πότε (στη φωλιά, ένα ανοιξιάτικο πρωί). Αυτό το κάνει η παράγραφος Β.',
      en: 'The beginning introduces the hero (a little swallow), the where and the when (in the nest, one spring morning). Paragraph B does that.',
    },
  },
  {
    q: { el: 'Τι βρίσκουμε συνήθως στο τέλος (τον επίλογο) μιας ιστορίας;', en: 'What do we usually find at the end (the conclusion) of a story?' },
    options: { el: ['Πώς λύθηκε το πρόβλημα και πώς τελειώνει η ιστορία', 'Ποιος είναι ο ήρωας και πού βρίσκεται', 'Το πρόβλημα που ξεκινάει την περιπέτεια', 'Τον τίτλο'], en: ['How the problem was solved and how the story ends', 'Who the hero is and where they are', 'The problem that starts the adventure', 'The title'] },
    correct: 0,
    explanation: {
      el: 'Η αρχή παρουσιάζει τον ήρωα, η μέση φέρνει το πρόβλημα και το τέλος δείχνει τη λύση. Στο χελιδόνι, η λύση είναι ότι βρήκε τη φωλιά του.',
      en: 'The beginning presents the hero, the middle brings the problem and the end shows the solution. For the swallow, the solution is that it found its nest.',
    },
  },
  {
    q: { el: 'Στην παράγραφο Α του χελιδονιού, ποια λέξη μάς δείχνει ότι φτάσαμε στο τέλος της ιστορίας;', en: 'In paragraph A of the swallow story, which word shows us that we have reached the end of the story?' },
    options: { el: ['χελιδόνι', 'φωλιά', 'μπαλκόνι', 'Τελικά'], en: ['χελιδόνι (swallow)', 'φωλιά (nest)', 'μπαλκόνι (balcony)', 'Τελικά (in the end)'] },
    correct: 3,
    explanation: {
      el: 'Λέξεις όπως «τελικά», «στο τέλος», «έτσι» μας προειδοποιούν ότι η ιστορία κλείνει. Οι άλλες τρεις λέξεις είναι ουσιαστικά της ιστορίας.',
      en: 'Words like “τελικά” (in the end), “στο τέλος” (at the end), “έτσι” (so) warn us that the story is closing. The other three words are nouns from the story.',
    },
  },

  // ── 13–15: the summary ────────────────────────────────────────────────────
  {
    q: { el: 'Θυμήσου το κείμενο με το πικνίκ: η εκδρομή στο δάσος, η δυνατή βροχή, η δασκάλα, οι κουβέρτες στο πάτωμα, τα σάντουιτς, η πιο αστεία εκδρομή. Ποια είναι η καλύτερη περίληψη;', en: 'Remember the picnic text: the trip to the forest, the heavy rain, the teacher, the blankets on the floor, the sandwiches, the funniest trip. Which is the best summary?' },
    options: { el: ['Στρώσαμε κουβέρτες στο πάτωμα.', 'Η εκδρομή στο δάσος χάλασε από τη βροχή, αλλά η τάξη έκανε πικνίκ μέσα στο σχολείο και πέρασε υπέροχα.', 'Ο ουρανός είχε σύννεφα, έβρεχε δυνατά και τα σάντουιτς ήταν νόστιμα.', 'Η δασκάλα είπε να μη στενοχωριόμαστε.'], en: ['We spread blankets on the floor.', 'The forest trip was spoiled by the rain, but the class had a picnic inside the school and had a wonderful time.', 'The sky had clouds, it rained hard and the sandwiches were tasty.', 'The teacher told us not to be upset.'] },
    correct: 1,
    explanation: {
      el: 'Η περίληψη λέει με λίγα λόγια το πρόβλημα (βροχή), τη λύση (πικνίκ στην τάξη) και το τέλος (πέρασαν υπέροχα). Οι άλλες επιλογές είναι μία μόνο λεπτομέρεια η καθεμία.',
      en: 'The summary tells in a few words the problem (rain), the solution (picnic in the classroom) and the ending (they had a great time). The other options are each a single detail.',
    },
  },
  {
    q: { el: 'Τι ΔΕΝ βάζουμε σε μια περίληψη;', en: 'What do we NOT put in a summary?' },
    options: { el: ['Το κύριο γεγονός της ιστορίας', 'Πώς τελειώνει η ιστορία', 'Τις μικρές λεπτομέρειες, όπως τι είχαν μέσα τα σάντουιτς', 'Ποιος είναι ο ήρωας'], en: ['The main event of the story', 'How the story ends', 'The small details, like what was in the sandwiches', 'Who the hero is'] },
    correct: 2,
    explanation: {
      el: 'Στην περίληψη κρατάμε μόνο τα βασικά: ποιος, τι έγινε, πώς τελείωσε. Οι μικρές λεπτομέρειες, οι διάλογοι και οι περιγραφές μένουν απέξω.',
      en: 'In a summary we keep only the essentials: who, what happened, how it ended. Small details, dialogue and descriptions stay out.',
    },
  },
  {
    q: { el: 'Μια περίληψη πρέπει να είναι…', en: 'What should a summary be like?' },
    options: { el: ['πιο μεγάλη από το κείμενο', 'πιο μικρή από το κείμενο και γραμμένη με δικά μας λόγια', 'ακριβώς ίδια με το κείμενο', 'μόνο ο τίτλος του κειμένου'], en: ['longer than the text', 'shorter than the text and written in our own words', 'exactly the same as the text', 'only the title of the text'] },
    correct: 1,
    explanation: {
      el: 'Περίληψη σημαίνει «λίγα λόγια για πολλά». Δεν αντιγράφουμε προτάσεις· λέμε τα σημαντικά με τον δικό μας τρόπο, σε λίγες γραμμές.',
      en: 'A summary means “a few words for many”. We do not copy sentences; we say the important things in our own way, in a few lines.',
    },
  },

  // ── 16–18: connecting words ───────────────────────────────────────────────
  {
    q: { el: '«___ βάζουμε το αλεύρι, ___ προσθέτουμε τα αβγά και ___ ψήνουμε το κέικ.» Ποιες λέξεις ταιριάζουν με τη σειρά;', en: '“___ we put in the flour, ___ we add the eggs and ___ we bake the cake.” Which words fit, in order?' },
    options: { el: ['Τέλος – πρώτα – έπειτα', 'Έπειτα – τέλος – πρώτα', 'Όμως – γιατί – πρώτα', 'Πρώτα – έπειτα – τέλος'], en: ['Τέλος – πρώτα – έπειτα (finally – first – then)', 'Έπειτα – τέλος – πρώτα (then – finally – first)', 'Όμως – γιατί – πρώτα (but – because – first)', 'Πρώτα – έπειτα – τέλος (first – then – finally)'] },
    correct: 3,
    explanation: {
      el: 'Οι λέξεις «πρώτα, έπειτα, τέλος» βάζουν τα βήματα στη σωστή σειρά: πρώτα το αλεύρι, έπειτα τα αβγά, τέλος το ψήσιμο.',
      en: 'The words “πρώτα, έπειτα, τέλος” (first, then, finally) put the steps in the right order: first the flour, then the eggs, finally the baking.',
    },
  },
  {
    q: { el: '«Ήθελα να παίξω έξω, ___ έβρεχε.» Ποια λέξη ταιριάζει;', en: '“I wanted to play outside, ___ it was raining.” Which word fits?' },
    options: { el: ['όμως', 'πρώτα', 'έπειτα', 'τέλος'], en: ['όμως (but)', 'πρώτα (first)', 'έπειτα (then)', 'τέλος (finally)'] },
    correct: 0,
    explanation: {
      el: 'Το «όμως» ενώνει δύο πράγματα που είναι αντίθετα: ήθελα να παίξω, αλλά η βροχή δεν με άφηνε. Οι άλλες λέξεις δείχνουν σειρά, όχι αντίθεση.',
      en: '“Όμως” (but) joins two things that are opposite: I wanted to play, but the rain would not let me. The other words show order, not contrast.',
    },
  },
  {
    q: { el: 'Η λέξη «έπειτα» σε ένα κείμενο μάς δείχνει…', en: 'What does the word “έπειτα” show us in a text?' },
    options: { el: ['ότι κάτι είναι αντίθετο από το προηγούμενο', 'την αιτία που έγινε κάτι', 'ότι κάτι γίνεται μετά από κάτι άλλο', 'ότι η ιστορία τελειώνει'], en: ['that something is the opposite of what came before', 'the reason something happened', 'that something happens after something else', 'that the story is ending'] },
    correct: 2,
    explanation: {
      el: 'Το «έπειτα» (όπως και το «μετά», το «ύστερα») είναι λέξη σειράς: λέει τι έγινε μετά. Για την αντίθεση έχουμε το «όμως» και για την αιτία το «γιατί».',
      en: '“Έπειτα” (like “μετά” and “ύστερα”) is a word of order: it says what happened next. For contrast we have “όμως” and for the reason “γιατί”.',
    },
  },
];
