/**
 * Γ' Δημοτικού · Γλώσσα · Κατανόηση Κειμένου
 * ===========================================
 * Every question carries its own short original text (2–4 sentences); nothing is
 * taken from school textbooks. Language level: a child of 8–9.
 *
 * What the unit covers, in the order a Γ' class meets it:
 *   1–4   short stories (αφηγήσεις): who, what, where — finding the detail in the text
 *   5–7   descriptions (περιγραφές): picking out the features of a place, a person, a pet
 *   8–9   instructions (οδηγίες): what to do first, what must not be done
 *   10–12 the main idea: the best title, what the text is mostly about
 *   13–14 order of events: what happened first / last
 *   15–16 why-questions: finding the reason inside the text
 *   17–18 vocabulary in context: guessing a word's meaning from the sentence around it
 *
 * Distractors are details that appear in the text but answer a different question,
 * or things a child might assume without reading. The UI shuffles options.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE3_GREEK_READING_WRITING: QuizQuestion[] = [
  // ── 1–4: short stories — find the detail ──────────────────────────────────
  {
    q: {
      el: 'Διάβασε: «Ο Νίκος ξύπνησε νωρίς. Έβαλε το κόκκινο μπουφάν του και πήγε στο πάρκο με τον σκύλο του, τον Μπόμπο.» Πώς λένε τον σκύλο;',
      en: 'Read: “Nikos woke up early. He put on his red jacket and went to the park with his dog, Bobo.” What is the dog called?',
    },
    options: { el: ['Νίκος', 'Μπόμπος', 'Μπουφάν', 'Πάρκο'], en: ['Nikos', 'Bobo', 'Jacket', 'Park'] },
    correct: 1,
    explanation: {
      el: 'Το κείμενο λέει «τον σκύλο του, τον Μπόμπο». Ο Νίκος είναι το παιδί, όχι ο σκύλος.',
      en: 'The text says “his dog, Bobo”. Nikos is the boy, not the dog.',
    },
  },
  {
    q: {
      el: 'Διάβασε: «Η Ελένη πήγε στη λαϊκή με τη γιαγιά της. Αγόρασαν μήλα, ντομάτες και ένα κιλό πορτοκάλια.» Πού πήγε η Ελένη;',
      en: 'Read: “Eleni went to the street market with her grandma. They bought apples, tomatoes and a kilo of oranges.” Where did Eleni go?',
    },
    options: { el: ['Στο σχολείο', 'Στη γιαγιά της', 'Στη λαϊκή', 'Στον κήπο'], en: ['To school', 'To her grandma', 'To the street market', 'To the garden'] },
    correct: 2,
    explanation: {
      el: 'Η πρώτη πρόταση απαντά στο «πού»: «πήγε στη λαϊκή». Η γιαγιά είναι το «με ποιον», όχι το «πού».',
      en: 'The first sentence answers “where”: “went to the street market”. Grandma is the “with whom”, not the “where”.',
    },
  },
  {
    q: {
      el: 'Διάβασε: «Ο Γιώργος έχασε το μπλε του κασκόλ στην αυλή. Το βράδυ η μαμά του το βρήκε κάτω από το παγκάκι.» Ποιος βρήκε το κασκόλ;',
      en: 'Read: “Giorgos lost his blue scarf in the yard. In the evening his mum found it under the bench.” Who found the scarf?',
    },
    options: { el: ['Ο Γιώργος', 'Η μαμά του', 'Ο δάσκαλος', 'Ένας φίλος του'], en: ['Giorgos', 'His mum', 'The teacher', 'A friend of his'] },
    correct: 1,
    explanation: {
      el: 'Ο Γιώργος το έχασε, αλλά «η μαμά του το βρήκε». Πρόσεχε ποιος κάνει τι σε κάθε πρόταση.',
      en: 'Giorgos lost it, but “his mum found it”. Watch who does what in each sentence.',
    },
  },
  {
    q: {
      el: 'Διάβασε: «Η Μαρία έχει γενέθλια την Κυριακή. Θα κάνει πάρτι στο σπίτι της και θα καλέσει έξι φίλους της από την τάξη.» Πότε έχει γενέθλια η Μαρία;',
      en: 'Read: “Maria has her birthday on Sunday. She will have a party at her house and invite six friends from her class.” When is Maria\'s birthday?',
    },
    options: { el: ['Το Σάββατο', 'Την Κυριακή', 'Τη Δευτέρα', 'Σε έξι μέρες'], en: ['On Saturday', 'On Sunday', 'On Monday', 'In six days'] },
    correct: 1,
    explanation: {
      el: 'Το κείμενο λέει «την Κυριακή». Το «έξι» είναι οι φίλοι, όχι οι μέρες.',
      en: 'The text says “on Sunday”. “Six” is the number of friends, not days.',
    },
  },

  // ── 5–7: descriptions ──────────────────────────────────────────────────────
  {
    q: {
      el: 'Διάβασε: «Το δωμάτιό μου είναι μικρό αλλά φωτεινό. Έχει ένα μεγάλο παράθυρο, ένα ξύλινο κρεβάτι και ράφια γεμάτα βιβλία.» Τι είναι ξύλινο;',
      en: 'Read: “My room is small but bright. It has a big window, a wooden bed and shelves full of books.” What is wooden?',
    },
    options: { el: ['Το παράθυρο', 'Το κρεβάτι', 'Τα βιβλία', 'Το δωμάτιο'], en: ['The window', 'The bed', 'The books', 'The room'] },
    correct: 1,
    explanation: {
      el: 'Η λέξη «ξύλινο» στέκεται δίπλα στη λέξη «κρεβάτι». Η περιγραφή βάζει κάθε λέξη δίπλα σε αυτό που περιγράφει.',
      en: 'The word “wooden” sits next to “bed”. A description puts each describing word next to the thing it describes.',
    },
  },
  {
    q: {
      el: 'Διάβασε: «Η γάτα μας η Ζουζού είναι άσπρη με μια μαύρη βούλα στη μύτη. Έχει πράσινα μάτια και της αρέσει να κοιμάται στον ήλιο.» Τι χρώμα είναι τα μάτια της;',
      en: 'Read: “Our cat Zouzou is white with a black spot on her nose. She has green eyes and likes to sleep in the sun.” What colour are her eyes?',
    },
    options: { el: ['Άσπρα', 'Μαύρα', 'Πράσινα', 'Κίτρινα'], en: ['White', 'Black', 'Green', 'Yellow'] },
    correct: 2,
    explanation: {
      el: 'Το άσπρο είναι το τρίχωμα, το μαύρο η βούλα και τα μάτια «πράσινα». Κάθε χρώμα ανήκει σε κάτι διαφορετικό.',
      en: 'White is the fur, black is the spot, and the eyes are “green”. Each colour belongs to something different.',
    },
  },
  {
    q: {
      el: 'Διάβασε: «Ο παππούς μου είναι ψηλός και έχει άσπρα μαλλιά. Φοράει πάντα γυαλιά και γελάει δυνατά. Το αγαπημένο του χόμπι είναι το ψάρεμα.» Τι του αρέσει να κάνει;',
      en: 'Read: “My grandpa is tall and has white hair. He always wears glasses and laughs loudly. His favourite hobby is fishing.” What does he like doing?',
    },
    options: { el: ['Να φοράει γυαλιά', 'Να ψαρεύει', 'Να μαγειρεύει', 'Να τρέχει'], en: ['Wearing glasses', 'Fishing', 'Cooking', 'Running'] },
    correct: 1,
    explanation: {
      el: 'Το «αγαπημένο χόμπι» είναι αυτό που του αρέσει να κάνει: το ψάρεμα. Τα γυαλιά τα φοράει, δεν είναι χόμπι.',
      en: 'A “favourite hobby” is what he likes doing: fishing. He wears glasses, but that is not a hobby.',
    },
  },

  // ── 8–9: instructions ──────────────────────────────────────────────────────
  {
    q: {
      el: 'Διάβασε τις οδηγίες: «Για να φτιάξεις τσάι: 1. Ζήτα από έναν μεγάλο να βράσει νερό. 2. Βάλε το φακελάκι στο φλιτζάνι. 3. Ρίξε το ζεστό νερό. 4. Περίμενε τρία λεπτά.» Τι κάνεις πρώτα;',
      en: 'Read the instructions: “To make tea: 1. Ask a grown-up to boil water. 2. Put the tea bag in the cup. 3. Pour in the hot water. 4. Wait three minutes.” What do you do first?',
    },
    options: { el: ['Περιμένεις τρία λεπτά', 'Ρίχνεις το ζεστό νερό', 'Ζητάς να βράσει νερό', 'Βάζεις το φακελάκι'], en: ['Wait three minutes', 'Pour in the hot water', 'Ask for water to be boiled', 'Put in the tea bag'] },
    correct: 2,
    explanation: {
      el: 'Στις οδηγίες οι αριθμοί δείχνουν τη σειρά. Το βήμα 1 είναι να βράσει το νερό.',
      en: 'In instructions the numbers show the order. Step 1 is boiling the water.',
    },
  },
  {
    q: {
      el: 'Διάβασε την πινακίδα στην πισίνα: «Κάνε ντους πριν μπεις στο νερό. Μην τρέχεις γύρω από την πισίνα. Τα παιδιά κολυμπούν μόνο με έναν μεγάλο.» Τι ΔΕΝ επιτρέπεται;',
      en: 'Read the sign at the pool: “Shower before you get in the water. Do not run around the pool. Children swim only with a grown-up.” What is NOT allowed?',
    },
    options: { el: ['Να κάνεις ντους', 'Να τρέχεις γύρω από την πισίνα', 'Να κολυμπάς με έναν μεγάλο', 'Να μπαίνεις στο νερό'], en: ['Showering', 'Running around the pool', 'Swimming with a grown-up', 'Getting in the water'] },
    correct: 1,
    explanation: {
      el: 'Η λέξη «Μην» δείχνει την απαγόρευση: «Μην τρέχεις». Τα άλλα η πινακίδα τα ζητάει ή τα επιτρέπει.',
      en: 'The words “Do not” show what is forbidden: “Do not run”. The sign asks for or allows the others.',
    },
  },

  // ── 10–12: main idea ──────────────────────────────────────────────────────
  {
    q: {
      el: 'Διάβασε: «Ο Νίκος πότισε τα λουλούδια. Έβγαλε τα ξερά φύλλα και έσκαψε λίγο το χώμα. Στο τέλος έβαλε καινούργιους σπόρους.» Ποιος τίτλος ταιριάζει καλύτερα;',
      en: 'Read: “Nikos watered the flowers. He removed the dry leaves and dug the soil a little. Finally he planted new seeds.” Which title fits best?',
    },
    options: { el: ['Ο Νίκος στον κήπο', 'Τα ξερά φύλλα', 'Μια μέρα στη θάλασσα', 'Το ποδήλατο του Νίκου'], en: ['Nikos in the garden', 'The dry leaves', 'A day at the sea', 'Nikos\'s bicycle'] },
    correct: 0,
    explanation: {
      el: 'Όλες οι προτάσεις μιλούν για δουλειές στον κήπο. Ο τίτλος πρέπει να ταιριάζει σε όλο το κείμενο, όχι σε μία λεπτομέρεια.',
      en: 'Every sentence is about garden jobs. A title must fit the whole text, not just one detail.',
    },
  },
  {
    q: {
      el: 'Διάβασε: «Η Ελένη φοβόταν το ποδήλατο. Ο μπαμπάς της την κρατούσε κάθε απόγευμα στην πλατεία. Μετά από μία εβδομάδα έκανε ποδήλατο μόνη της!» Για τι μιλάει κυρίως το κείμενο;',
      en: 'Read: “Eleni was afraid of the bicycle. Her dad held her every afternoon in the square. After a week she rode the bike on her own!” What is the text mostly about?',
    },
    options: { el: ['Για την πλατεία', 'Για το πώς η Ελένη έμαθε ποδήλατο', 'Για τον μπαμπά της Ελένης', 'Για το απόγευμα'], en: ['The square', 'How Eleni learned to ride a bike', 'Eleni\'s dad', 'The afternoon'] },
    correct: 1,
    explanation: {
      el: 'Η κεντρική ιδέα είναι το ταξίδι από τον φόβο στο «μόνη της». Η πλατεία και ο μπαμπάς βοηθούν την ιστορία, δεν είναι το θέμα.',
      en: 'The main idea is the journey from fear to “on her own”. The square and dad help the story; they are not the topic.',
    },
  },
  {
    q: {
      el: 'Διάβασε: «Τα δελφίνια ζουν στη θάλασσα, αλλά δεν είναι ψάρια. Ανεβαίνουν στην επιφάνεια για να πάρουν αέρα. Ζουν σε ομάδες και παίζουν μεταξύ τους.» Ποια πρόταση λέει την κεντρική ιδέα;',
      en: 'Read: “Dolphins live in the sea, but they are not fish. They come up to the surface to breathe air. They live in groups and play with each other.” Which sentence gives the main idea?',
    },
    options: { el: ['Τα δελφίνια παίζουν.', 'Η θάλασσα είναι μεγάλη.', 'Το κείμενο μάς μαθαίνει πώς ζουν τα δελφίνια.', 'Τα ψάρια παίρνουν αέρα.'], en: ['Dolphins play.', 'The sea is big.', 'The text teaches us how dolphins live.', 'Fish breathe air.'] },
    correct: 2,
    explanation: {
      el: 'Κάθε πρόταση δίνει κάτι για τη ζωή των δελφινιών. Άρα η κεντρική ιδέα είναι «πώς ζουν τα δελφίνια». Το παιχνίδι είναι μόνο μία λεπτομέρεια.',
      en: 'Every sentence gives something about dolphin life, so the main idea is “how dolphins live”. Playing is only one detail.',
    },
  },

  // ── 13–14: order of events ────────────────────────────────────────────────
  {
    q: {
      el: 'Διάβασε: «Το πρωί ο Γιώργος έφαγε πρωινό. Μετά έβαλε τα βιβλία στην τσάντα του. Τέλος, φόρεσε τα παπούτσια του και έφυγε για το σχολείο.» Τι έκανε ΤΕΛΕΥΤΑΙΟ;',
      en: 'Read: “In the morning Giorgos ate breakfast. Then he put his books in his bag. Finally, he put on his shoes and left for school.” What did he do LAST?',
    },
    options: { el: ['Έφαγε πρωινό', 'Έβαλε τα βιβλία στην τσάντα', 'Φόρεσε τα παπούτσια και έφυγε', 'Ξύπνησε'], en: ['Ate breakfast', 'Put the books in the bag', 'Put on his shoes and left', 'Woke up'] },
    correct: 2,
    explanation: {
      el: 'Οι λέξεις «πρωί», «μετά», «τέλος» δείχνουν τη σειρά. Το «τέλος» είναι το τελευταίο.',
      en: 'The words “morning”, “then”, “finally” show the order. “Finally” is the last thing.',
    },
  },
  {
    q: {
      el: 'Διάβασε: «Η Μαρία έφτιαξε ένα χαρταετό. Πριν τον φτιάξει, αγόρασε χρωματιστό χαρτί. Όταν τελείωσε, τον πέταξε στον λόφο με τον Νίκο.» Τι έγινε ΠΡΩΤΟ;',
      en: 'Read: “Maria made a kite. Before making it, she bought coloured paper. When she finished, she flew it on the hill with Nikos.” What happened FIRST?',
    },
    options: { el: ['Έφτιαξε τον χαρταετό', 'Πέταξε τον χαρταετό', 'Αγόρασε χρωματιστό χαρτί', 'Ανέβηκε στον λόφο'], en: ['She made the kite', 'She flew the kite', 'She bought coloured paper', 'She went up the hill'] },
    correct: 2,
    explanation: {
      el: 'Προσοχή: η σειρά στο κείμενο δεν είναι πάντα η σειρά που έγιναν τα πράγματα. Η λέξη «πριν» μάς λέει ότι το χαρτί αγοράστηκε πρώτα.',
      en: 'Careful: the order in the text is not always the order things happened. The word “before” tells us the paper was bought first.',
    },
  },

  // ── 15–16: why-questions ──────────────────────────────────────────────────
  {
    q: {
      el: 'Διάβασε: «Ο Νίκος δεν πήγε στο πάρκο σήμερα. Έβρεχε πολύ δυνατά όλο το απόγευμα. Έμεινε στο σπίτι και διάβασε ένα βιβλίο.» Γιατί δεν πήγε στο πάρκο;',
      en: 'Read: “Nikos did not go to the park today. It rained very hard all afternoon. He stayed home and read a book.” Why did he not go to the park?',
    },
    options: { el: ['Γιατί ήθελε να διαβάσει', 'Γιατί έβρεχε δυνατά', 'Γιατί ήταν άρρωστος', 'Γιατί το πάρκο ήταν κλειστό'], en: ['Because he wanted to read', 'Because it rained hard', 'Because he was ill', 'Because the park was closed'] },
    correct: 1,
    explanation: {
      el: 'Ο λόγος είναι η βροχή. Το κείμενο δεν λέει ότι ήταν άρρωστος — αυτό θα ήταν δική μας ιδέα, όχι του κειμένου. Το βιβλίο το διάβασε επειδή έμεινε μέσα.',
      en: 'The reason is the rain. The text never says he was ill — that would be our idea, not the text\'s. He read the book because he stayed in.',
    },
  },
  {
    q: {
      el: 'Διάβασε: «Η Ελένη κέρασε όλη την τάξη σοκολατάκια. Ο δάσκαλος τη χειροκρότησε και τα παιδιά φώναξαν «μπράβο». Είχε πάρει το πρώτο βραβείο στον διαγωνισμό ζωγραφικής.» Γιατί τη χειροκρότησαν;',
      en: 'Read: “Eleni gave the whole class chocolates. The teacher clapped for her and the children shouted ‘well done’. She had won first prize in the drawing competition.” Why did they clap for her?',
    },
    options: { el: ['Γιατί μοίρασε σοκολατάκια', 'Γιατί κέρδισε το πρώτο βραβείο', 'Γιατί ήταν η μέρα της', 'Γιατί ζωγράφισε τον δάσκαλο'], en: ['Because she handed out chocolates', 'Because she won first prize', 'Because it was her special day', 'Because she drew the teacher'] },
    correct: 1,
    explanation: {
      el: 'Ο λόγος κρύβεται στην τελευταία πρόταση: το βραβείο. Τα σοκολατάκια ήταν δικό της κέρασμα, όχι ο λόγος για το χειροκρότημα.',
      en: 'The reason hides in the last sentence: the prize. The chocolates were her treat, not the reason for the clapping.',
    },
  },

  // ── 17–18: vocabulary in context ──────────────────────────────────────────
  {
    q: {
      el: 'Διάβασε: «Ο Γιώργος ήταν εξαντλημένος μετά τον αγώνα. Ξάπλωσε στον καναπέ και αποκοιμήθηκε αμέσως.» Τι σημαίνει «εξαντλημένος»;',
      en: 'Read: “Giorgos was exhausted after the match. He lay on the sofa and fell asleep straight away.” What does “exhausted” mean?',
    },
    options: { el: ['Πολύ κουρασμένος', 'Πολύ χαρούμενος', 'Πολύ πεινασμένος', 'Πολύ θυμωμένος'], en: ['Very tired', 'Very happy', 'Very hungry', 'Very angry'] },
    correct: 0,
    explanation: {
      el: 'Οι διπλανές λέξεις βοηθούν: «μετά τον αγώνα», «ξάπλωσε», «αποκοιμήθηκε». Κάποιος που κοιμάται αμέσως είναι πολύ κουρασμένος.',
      en: 'The words around it help: “after the match”, “lay down”, “fell asleep”. Someone who falls asleep straight away is very tired.',
    },
  },
  {
    q: {
      el: 'Διάβασε: «Η Μαρία δίστασε λίγο μπροστά στη σκάλα της τσουλήθρας. Κοίταξε ψηλά, πήρε μια βαθιά ανάσα και τελικά ανέβηκε.» Τι σημαίνει «δίστασε»;',
      en: 'Read: “Maria hesitated a little in front of the slide\'s ladder. She looked up, took a deep breath and finally climbed up.” What does “hesitated” mean?',
    },
    options: { el: ['Έτρεξε γρήγορα', 'Σταμάτησε γιατί δεν ήταν σίγουρη', 'Γέλασε δυνατά', 'Έπεσε κάτω'], en: ['Ran fast', 'Stopped because she was not sure', 'Laughed loudly', 'Fell down'] },
    correct: 1,
    explanation: {
      el: 'Το «πήρε μια βαθιά ανάσα και τελικά ανέβηκε» δείχνει ότι πρώτα σταμάτησε και σκέφτηκε. «Διστάζω» σημαίνει σταματώ γιατί δεν είμαι σίγουρος.',
      en: '“Took a deep breath and finally climbed up” shows she stopped and thought first. “Hesitate” means to pause because you are not sure.',
    },
  },
];
