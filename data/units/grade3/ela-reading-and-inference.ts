/**
 * Γ' Δημοτικού · English Language Arts · Reading & Inference
 * ===========================================================
 * Original questions for a native English-speaking child of 8–9 (curriculum topics only).
 * The `en` fields are the real content; `el` is a translation for a Greek-speaking parent.
 * Five original passages of 4–6 sentences each; every question repeats its passage in full.
 *
 * What the unit covers, in order:
 *   1–4   Ruby and the lost mitten: inference (season), why she did that, feelings, fact vs guess
 *   5–8   Theo and the sunflower seeds: a word from context (duds), character trait, best title, what next
 *   9–12  Nadia and the library book: inference (why she yawned), why she smiled, a word from context (due), fact vs guess
 *   13–15 Marcus and the lost dog: inference (the dog has an owner), why he used the phone, what next
 *   16–18 the windy picnic: a word from context (skidded), inference (the family), best title
 *
 * Distractors are the real mistakes: a guess presented as a fact, a title about a small detail,
 * a word meaning that does not fit the clues, a prediction that ignores the story.
 */
import type { QuizQuestion } from '../../../types';

const RUBY_EN = '«Ruby pulled her scarf tight as she stepped off the school bus. Snowflakes were drifting down, and her breath made little clouds in the air. She reached into her pocket for her mittens, but only one was there. Ruby looked back at the bus, but it was already turning the corner. She sighed, tucked her bare hand into her sleeve, and hurried home.»';
const RUBY_EL = '«Η Ruby έσφιξε το κασκόλ της καθώς κατέβαινε από το σχολικό λεωφορείο. Νιφάδες χιονιού έπεφταν αργά και η ανάσα της έκανε μικρά σύννεφα στον αέρα. Έβαλε το χέρι στην τσέπη για τα γάντια της, αλλά μέσα ήταν μόνο το ένα. Η Ruby κοίταξε πίσω προς το λεωφορείο, αλλά αυτό έστριβε ήδη στη γωνία. Αναστέναξε, έχωσε το γυμνό της χέρι στο μανίκι και έτρεξε σπίτι.»';

const THEO_EN = '«Theo planted six sunflower seeds in a row by the fence. Every morning before school he checked the soil and gave each spot a little water. For two whole weeks nothing happened, and his brother said the seeds were probably duds. Theo kept watering anyway. On the fifteenth day, he spotted a tiny green curl pushing up through the dirt.»';
const THEO_EL = '«Ο Theo φύτεψε έξι σπόρους ηλίανθου σε μια σειρά δίπλα στον φράχτη. Κάθε πρωί πριν το σχολείο έλεγχε το χώμα και πότιζε λίγο κάθε σημείο. Για δύο ολόκληρες εβδομάδες δεν έγινε τίποτα, και ο αδερφός του είπε ότι οι σπόροι ήταν μάλλον «duds». Ο Theo συνέχισε να ποτίζει. Τη δέκατη πέμπτη μέρα είδε ένα μικροσκοπικό πράσινο βλασταράκι να σπρώχνει μέσα από το χώμα.»';

const NADIA_EN = '«Nadia\'s library book was due on Friday, but she had not finished it. She loved the story about the girl who trained a falcon. On Thursday night she read under her blanket with a flashlight until her eyes felt heavy. The next morning she yawned all through breakfast. Still, she put the book in her bag with a smile.»';
const NADIA_EL = '«Το βιβλίο της βιβλιοθήκης της Nadia ήταν «due» την Παρασκευή, αλλά δεν το είχε τελειώσει. Λάτρευε την ιστορία για το κορίτσι που εκπαίδευσε ένα γεράκι. Την Πέμπτη το βράδυ διάβαζε κάτω από την κουβέρτα με έναν φακό μέχρι που τα μάτια της βάρυναν. Το επόμενο πρωί χασμουριόταν σε όλο το πρωινό. Κι όμως, έβαλε το βιβλίο στην τσάντα της με ένα χαμόγελο.»';

const MARCUS_EN = '«Marcus was walking home when a small brown dog trotted up to him. It had a collar with a tag, but no one was with it. The dog wagged its tail and sniffed his shoes. Marcus knelt down and read the tag: it said Biscuit and had a phone number. He walked to the shop on the corner and asked the owner if he could use the phone.»';
const MARCUS_EL = '«Ο Marcus γύριζε σπίτι όταν ένας μικρός καφέ σκύλος ήρθε τρέχοντας κοντά του. Είχε κολάρο με ταυτότητα, αλλά κανείς δεν ήταν μαζί του. Ο σκύλος κουνούσε την ουρά του και μύριζε τα παπούτσια του. Ο Marcus γονάτισε και διάβασε την ταυτότητα: έγραφε Biscuit και είχε έναν αριθμό τηλεφώνου. Πήγε στο μαγαζί της γωνίας και ρώτησε τον ιδιοκτήτη αν μπορούσε να χρησιμοποιήσει το τηλέφωνο.»';

const PICNIC_EN = '«The Patel family spread their blanket on the hill for a picnic. Just as they opened the basket, the wind picked up. Paper plates skidded across the grass, and a napkin sailed up into a tree. Dad grabbed the cups while Priya chased the plates. In the end they ate their sandwiches in the car, laughing about their windy picnic.»';
const PICNIC_EL = '«Η οικογένεια Patel άπλωσε την κουβέρτα της στον λόφο για πικνίκ. Μόλις άνοιξαν το καλάθι, ο άνεμος δυνάμωσε. Τα χάρτινα πιάτα «skidded» πάνω στο γρασίδι και μια χαρτοπετσέτα πέταξε ψηλά σε ένα δέντρο. Ο μπαμπάς άρπαξε τα ποτήρια ενώ η Priya κυνηγούσε τα πιάτα. Στο τέλος έφαγαν τα σάντουιτς τους μέσα στο αυτοκίνητο, γελώντας με το ανεμοδαρμένο πικνίκ τους.»';

export const GRADE3_ELA_READING_AND_INFERENCE: QuizQuestion[] = [
  // ── 1–4: Ruby and the lost mitten ──────────────────────────────────────────
  {
    q: { el: 'Διάβασε το κείμενο: ' + RUBY_EL + ' Ποια εποχή είναι στο κείμενο;', en: 'Read the passage: ' + RUBY_EN + ' What season is it in the passage?' },
    options: { el: ['summer', 'spring', 'winter', 'fall'], en: ['summer', 'spring', 'winter', 'fall'] },
    correct: 2,
    explanation: {
      el: 'Το κείμενο δεν λέει πουθενά «winter», αλλά οι νιφάδες, το κασκόλ, τα γάντια και η ανάσα που κάνει σύννεφα είναι όλα στοιχεία ότι κάνει κρύο. Οι καλοί αναγνώστες χρησιμοποιούν τα στοιχεία για να βγάλουν συμπεράσματα.',
      en: 'The passage never says "winter", but snowflakes, a scarf, mittens and breath making clouds are all clues that it is cold. Good readers use clues to work things out.',
    },
  },
  {
    q: { el: 'Διάβασε το κείμενο: ' + RUBY_EL + ' Γιατί η Ruby κοίταξε πίσω προς το λεωφορείο;', en: 'Read the passage: ' + RUBY_EN + ' Why did Ruby look back at the bus?' },
    options: { el: ['She wanted to wave to the driver.', 'She forgot which stop was hers.', 'She wanted to ride it again.', 'She thought her mitten might be on the bus.'], en: ['She wanted to wave to the driver.', 'She forgot which stop was hers.', 'She wanted to ride it again.', 'She thought her mitten might be on the bus.'] },
    correct: 3,
    explanation: {
      el: 'Η Ruby μόλις είχε ανακαλύψει ότι έλειπε το ένα γάντι, οπότε κοίταξε πίσω προς το λεωφορείο όπου καθόταν. Ήλπιζε να το πάρει πίσω.',
      en: 'Ruby had just found that one mitten was missing, so she looked back at the bus where she had been sitting. She was hoping to get it back.',
    },
  },
  {
    q: { el: 'Διάβασε το κείμενο: ' + RUBY_EL + ' Πώς νιώθει η Ruby στο τέλος;', en: 'Read the passage: ' + RUBY_EN + ' How does Ruby feel at the end?' },
    options: { el: ['excited', 'a little disappointed', 'angry at the driver', 'proud'], en: ['excited', 'a little disappointed', 'angry at the driver', 'proud'] },
    correct: 1,
    explanation: {
      el: 'Αναστέναξε και έπρεπε να καλύψει το γυμνό της χέρι με το μανίκι. Ο αναστεναγμός συνήθως δείχνει ότι κάποιος είναι λίγο λυπημένος ή απογοητευμένος, όχι θυμωμένος ή ενθουσιασμένος.',
      en: 'She sighed and had to cover her bare hand with her sleeve. A sigh usually shows someone is a bit sad or disappointed, not angry or excited.',
    },
  },
  {
    q: { el: 'Διάβασε το κείμενο: ' + RUBY_EL + ' Ποιο από αυτά είναι ΓΕΓΟΝΟΣ από το κείμενο και όχι εικασία;', en: 'Read the passage: ' + RUBY_EN + ' Which of these is a FACT from the passage, not a guess?' },
    options: { el: ['Ruby had only one mitten in her pocket.', 'Ruby will find her mitten tomorrow.', 'Ruby\'s mom will be cross.', 'Ruby loves the snow.'], en: ['Ruby had only one mitten in her pocket.', 'Ruby will find her mitten tomorrow.', 'Ruby\'s mom will be cross.', 'Ruby loves the snow.'] },
    correct: 0,
    explanation: {
      el: 'Το κείμενο μάς λέει ξεκάθαρα ότι μόνο ένα γάντι ήταν στην τσέπη της. Οι άλλες προτάσεις είναι εικασίες, γιατί το κείμενο δεν τις λέει.',
      en: 'The passage tells us straight out that only one mitten was in her pocket. The other sentences are guesses, because the text does not say them.',
    },
  },

  // ── 5–8: Theo and the sunflower seeds ──────────────────────────────────────
  {
    q: { el: 'Διάβασε το κείμενο: ' + THEO_EL + ' Τι σημαίνει η λέξη «duds» στο κείμενο;', en: 'Read the passage: ' + THEO_EN + ' What does the word «duds» mean in the passage?' },
    options: { el: ['seeds that will not grow', 'very big seeds', 'seeds from a shop', 'seeds that grow fast'], en: ['seeds that will not grow', 'very big seeds', 'seeds from a shop', 'seeds that grow fast'] },
    correct: 0,
    explanation: {
      el: 'Ο αδερφός το λέει μετά από δύο εβδομάδες που δεν φύτρωσε τίποτα, άρα duds πρέπει να σημαίνει πράγματα που δεν δουλεύουν. Οι διπλανές λέξεις μάς βοηθούν να μαντέψουμε τη σημασία μιας λέξης.',
      en: 'The brother says this after two weeks of nothing growing, so duds must mean things that do not work. The words around a new word help us guess what it means.',
    },
  },
  {
    q: { el: 'Διάβασε το κείμενο: ' + THEO_EL + ' Τι μας λέει το κείμενο για τον Theo;', en: 'Read the passage: ' + THEO_EN + ' What does the passage tell you about Theo?' },
    options: { el: ['He gives up easily.', 'He does not like plants.', 'He is always late for school.', 'He is patient and does not give up.'], en: ['He gives up easily.', 'He does not like plants.', 'He is always late for school.', 'He is patient and does not give up.'] },
    correct: 3,
    explanation: {
      el: 'Ο Theo συνέχισε να ποτίζει κάθε μέρα για δύο εβδομάδες, ακόμα κι όταν δεν φύτρωνε τίποτα και ο αδερφός του αμφέβαλλε. Αυτό δείχνει υπομονή.',
      en: 'Theo kept watering every day for two weeks, even when nothing grew and his brother doubted him. That shows patience.',
    },
  },
  {
    q: { el: 'Διάβασε το κείμενο: ' + THEO_EL + ' Ποιος είναι ο καλύτερος τίτλος για αυτό το κείμενο;', en: 'Read the passage: ' + THEO_EN + ' Which is the best title for this passage?' },
    options: { el: ['A Trip to the Shop', 'Theo\'s Brother', 'The Seeds That Finally Grew', 'How to Build a Fence'], en: ['A Trip to the Shop', 'Theo\'s Brother', 'The Seeds That Finally Grew', 'How to Build a Fence'] },
    correct: 2,
    explanation: {
      el: 'Ένας καλός τίτλος λέει την κεντρική ιδέα. Όλο το κείμενο είναι για τον Theo που περιμένει τους σπόρους του να φυτρώσουν, και στο τέλος ένας φυτρώνει.',
      en: 'A good title tells the main idea. The whole passage is about Theo waiting for his seeds to grow, and at the end one does.',
    },
  },
  {
    q: { el: 'Διάβασε το κείμενο: ' + THEO_EL + ' Τι θα συμβεί μάλλον στη συνέχεια;', en: 'Read the passage: ' + THEO_EN + ' What will probably happen next?' },
    options: { el: ['Theo will keep caring for the plants as they grow.', 'Theo will pull up the seedling.', 'Theo will stop watering the seeds.', 'Theo will plant a tree instead.'], en: ['Theo will keep caring for the plants as they grow.', 'Theo will pull up the seedling.', 'Theo will stop watering the seeds.', 'Theo will plant a tree instead.'] },
    correct: 0,
    explanation: {
      el: 'Ο Theo φρόντιζε τους σπόρους κάθε μέρα, και τώρα ένας φυτρώνει. Είναι λογικό να συνεχίσει να τους φροντίζει.',
      en: 'Theo has cared for the seeds every day, and now one is growing. It makes sense that he will keep looking after them.',
    },
  },

  // ── 9–12: Nadia and the library book ───────────────────────────────────────
  {
    q: { el: 'Διάβασε το κείμενο: ' + NADIA_EL + ' Γιατί η Nadia χασμουριόταν σε όλο το πρωινό;', en: 'Read the passage: ' + NADIA_EN + ' Why did Nadia yawn all through breakfast?' },
    options: { el: ['She was bored by her breakfast.', 'She stayed up late reading.', 'She was getting sick.', 'She did not like Fridays.'], en: ['She was bored by her breakfast.', 'She stayed up late reading.', 'She was getting sick.', 'She did not like Fridays.'] },
    correct: 1,
    explanation: {
      el: 'Το προηγούμενο βράδυ διάβαζε κάτω από την κουβέρτα μέχρι που βάρυναν τα μάτια της. Το διάβασμα ως αργά σημαίνει λιγότερο ύπνο, και ο λίγος ύπνος φέρνει χασμουρητά.',
      en: 'The night before, she read under her blanket until her eyes felt heavy. Reading late means less sleep, and less sleep makes you yawn.',
    },
  },
  {
    q: { el: 'Διάβασε το κείμενο: ' + NADIA_EL + ' Γιατί η Nadia έβαλε το βιβλίο στην τσάντα της με ένα χαμόγελο;', en: 'Read the passage: ' + NADIA_EN + ' Why did Nadia put the book in her bag with a smile?' },
    options: { el: ['She was glad to get rid of it.', 'She had finished the story and could return it on time.', 'She was going to hide it.', 'She wanted to sell it.'], en: ['She was glad to get rid of it.', 'She had finished the story and could return it on time.', 'She was going to hide it.', 'She wanted to sell it.'] },
    correct: 1,
    explanation: {
      el: 'Διάβασε ως αργά την Πέμπτη για να τελειώσει πριν την Παρασκευή. Το χαμόγελο δείχνει ότι χαίρεται που πρόλαβε.',
      en: 'She read late on Thursday so she could finish before Friday. The smile shows she is happy she made it in time.',
    },
  },
  {
    q: { el: 'Διάβασε το κείμενο: ' + NADIA_EL + ' Τι σημαίνει η λέξη «due» στο κείμενο;', en: 'Read the passage: ' + NADIA_EN + ' What does the word «due» mean in the passage?' },
    options: { el: ['lost', 'expensive', 'brand new', 'needed to be returned'], en: ['lost', 'expensive', 'brand new', 'needed to be returned'] },
    correct: 3,
    explanation: {
      el: 'Ένα βιβλίο βιβλιοθήκης που είναι due την Παρασκευή πρέπει να επιστραφεί την Παρασκευή. Η λέξη «library» και η ημέρα μάς βοηθούν να καταλάβουμε το due.',
      en: 'A library book that is due on Friday has to be given back on Friday. The word "library" and the day help us understand due.',
    },
  },
  {
    q: { el: 'Διάβασε το κείμενο: ' + NADIA_EL + ' Ποιο είναι ΕΙΚΑΣΙΑ και όχι κάτι που λέει το κείμενο;', en: 'Read the passage: ' + NADIA_EN + ' Which is a GUESS, not something the passage says?' },
    options: { el: ['Nadia read with a flashlight.', 'The book was about a girl and a falcon.', 'Nadia will borrow another book about birds.', 'The book was due on Friday.'], en: ['Nadia read with a flashlight.', 'The book was about a girl and a falcon.', 'Nadia will borrow another book about birds.', 'The book was due on Friday.'] },
    correct: 2,
    explanation: {
      el: 'Το κείμενο δεν λέει τι θα δανειστεί η Nadia στη συνέχεια, άρα αυτό είναι εικασία. Τα άλλα τρία μάς τα λέει το κείμενο.',
      en: 'The passage does not say what Nadia will borrow next, so that is a guess. The other three are told to us in the text.',
    },
  },

  // ── 13–15: Marcus and the lost dog ─────────────────────────────────────────
  {
    q: { el: 'Διάβασε το κείμενο: ' + MARCUS_EL + ' Τι μπορείς να καταλάβεις για τον σκύλο;', en: 'Read the passage: ' + MARCUS_EN + ' What can you tell about the dog?' },
    options: { el: ['It is wild and has no home.', 'It belongs to someone.', 'It is afraid of people.', 'It is very old.'], en: ['It is wild and has no home.', 'It belongs to someone.', 'It is afraid of people.', 'It is very old.'] },
    correct: 1,
    explanation: {
      el: 'Ο σκύλος έχει κολάρο, ταυτότητα με όνομα και αριθμό τηλεφώνου, άρα κάποιος τον έχει. Ένας αδέσποτος σκύλος δεν θα είχε τέτοια πράγματα.',
      en: 'The dog has a collar, a name tag and a phone number, so someone owns it. A wild dog would not have those things.',
    },
  },
  {
    q: { el: 'Διάβασε το κείμενο: ' + MARCUS_EL + ' Γιατί ήθελε ο Marcus να χρησιμοποιήσει το τηλέφωνο;', en: 'Read the passage: ' + MARCUS_EN + ' Why did Marcus want to use the phone?' },
    options: { el: ['to call the number on the tag', 'to call his mom', 'to order food', 'to ask about a job'], en: ['to call the number on the tag', 'to call his mom', 'to order food', 'to ask about a job'] },
    correct: 0,
    explanation: {
      el: 'Ο Marcus διάβασε τον αριθμό τηλεφώνου στην ταυτότητα ακριβώς πριν πάει στο μαγαζί. Θέλει να τηλεφωνήσει στον ιδιοκτήτη του σκύλου.',
      en: 'Marcus read the phone number on the tag just before going to the shop. He wants to call the dog\'s owner.',
    },
  },
  {
    q: { el: 'Διάβασε το κείμενο: ' + MARCUS_EL + ' Τι θα συμβεί μάλλον στη συνέχεια;', en: 'Read the passage: ' + MARCUS_EN + ' What will probably happen next?' },
    options: { el: ['Marcus will keep the dog forever.', 'The dog will run away.', 'Marcus will go to the park.', 'The owner will come to collect Biscuit.'], en: ['Marcus will keep the dog forever.', 'The dog will run away.', 'Marcus will go to the park.', 'The owner will come to collect Biscuit.'] },
    correct: 3,
    explanation: {
      el: 'Μόλις ο Marcus τηλεφωνήσει στον αριθμό, ο ιδιοκτήτης πιθανότατα θα έρθει να πάρει τον Biscuit. Οι προβλέψεις πρέπει να βγαίνουν από τα στοιχεία της ιστορίας.',
      en: 'Once Marcus calls the number, the owner will most likely come to get Biscuit. A prediction should follow from the clues in the story.',
    },
  },

  // ── 16–18: the windy picnic ────────────────────────────────────────────────
  {
    q: { el: 'Διάβασε το κείμενο: ' + PICNIC_EL + ' Τι σημαίνει η λέξη «skidded» στο κείμενο;', en: 'Read the passage: ' + PICNIC_EN + ' What does the word «skidded» mean in the passage?' },
    options: { el: ['stayed still', 'folded up', 'slid quickly', 'got wet'], en: ['stayed still', 'folded up', 'slid quickly', 'got wet'] },
    correct: 2,
    explanation: {
      el: 'Ο άνεμος δυνάμωσε και τα πιάτα κινήθηκαν πάνω στο γρασίδι, άρα skidded πρέπει να σημαίνει γλίστρησαν γρήγορα. Η χαρτοπετσέτα που πέταξε στο δέντρο είναι ακόμα ένα στοιχείο.',
      en: 'The wind picked up and the plates moved across the grass, so skidded must mean slid quickly. The napkin flying into the tree is another clue.',
    },
  },
  {
    q: { el: 'Διάβασε το κείμενο: ' + PICNIC_EL + ' Τι μπορείς να καταλάβεις για την οικογένεια από την τελευταία πρόταση;', en: 'Read the passage: ' + PICNIC_EN + ' What can you tell about the family from the last sentence?' },
    options: { el: ['They were upset about the picnic.', 'They did not like their sandwiches.', 'They wanted to go home.', 'They can find the fun in a problem.'], en: ['They were upset about the picnic.', 'They did not like their sandwiches.', 'They wanted to go home.', 'They can find the fun in a problem.'] },
    correct: 3,
    explanation: {
      el: 'Γελούσαν με το ανεμοδαρμένο πικνίκ τους, άρα δεν άφησαν τον άνεμο να τους χαλάσει τη μέρα. Το γέλιο δείχνει ότι έμειναν χαρούμενοι.',
      en: 'They were laughing about their windy picnic, so they did not let the wind spoil their day. Laughing shows they stayed cheerful.',
    },
  },
  {
    q: { el: 'Διάβασε το κείμενο: ' + PICNIC_EL + ' Ποιος είναι ο καλύτερος τίτλος για το κείμενο;', en: 'Read the passage: ' + PICNIC_EN + ' Which is the best title for the passage?' },
    options: { el: ['The Windy Picnic', 'A Day at the Beach', 'Priya\'s New Blanket', 'How to Make Sandwiches'], en: ['The Windy Picnic', 'A Day at the Beach', 'Priya\'s New Blanket', 'How to Make Sandwiches'] },
    correct: 0,
    explanation: {
      el: 'Το κείμενο είναι όλο για ένα πικνίκ που ο άνεμος τα έφερε άνω κάτω. Ο τίτλος πρέπει να λέει για τι είναι όλη η ιστορία.',
      en: 'The passage is all about a picnic that the wind turned upside down. The title should say what the whole story is about.',
    },
  },
];
