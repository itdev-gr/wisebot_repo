/**
 * Δ' Δημοτικού · Μελέτη Περιβάλλοντος · Ο Πολιτισμός των Ελλήνων & Άλλων Λαών
 * ==========================================================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a child of 9–10. Order, easiest → hardest:
 *   1–3   what tradition is: stories, songs, dances passed down in the family
 *   4–6   monuments: the Parthenon, the theatre of Epidaurus, museums, protecting ruins
 *   7–8   religious sites: churches and monasteries as places of quiet and respect
 *   9–11  customs through the year: carnival, Easter eggs, the vasilopita coin
 *   12–14 other cultures: different languages, foods and festivals — all valuable
 *   15–18 sports & the Olympic spirit: Olympia, the rings, fair play, the flame
 */
import type { QuizQuestion } from '../../../types';

export const GRADE4_SCIENCE_CULTURE_OF_GREEKS: QuizQuestion[] = [
  // ── 1–3: tradition ─────────────────────────────────────────────────────────
  {
    q: { el: 'Η γιαγιά της Ελένης της μαθαίνει ένα τραγούδι που της είχε μάθει η δική της γιαγιά. Πώς το λέμε αυτό;', en: 'Eleni\'s grandma teaches her a song that her own grandma taught her. What do we call this?' },
    options: { el: ['Παράδοση', 'Εφεύρεση', 'Διαφήμιση', 'Συνταγή'], en: ['Tradition', 'Invention', 'Advertisement', 'Recipe'] },
    correct: 0,
    explanation: {
      el: 'Παράδοση είναι ό,τι περνάει από τους παππούδες στους γονείς και από τους γονείς στα παιδιά: τραγούδια, χοροί, ιστορίες, έθιμα.',
      en: 'Tradition is what passes from grandparents to parents and from parents to children: songs, dances, stories, customs.',
    },
  },
  {
    q: { el: 'Ποιο από τα παρακάτω είναι παραδοσιακός ελληνικός χορός;', en: 'Which of these is a traditional Greek dance?' },
    options: { el: ['Το τάνγκο', 'Το συρτάκι', 'Η σάμπα', 'Το βαλς'], en: ['The tango', 'The sirtaki', 'The samba', 'The waltz'] },
    correct: 1,
    explanation: {
      el: 'Το συρτάκι χορεύεται πιασμένοι από τους ώμους, σε κύκλο. Το τάνγκο, η σάμπα και το βαλς είναι χοροί άλλων λαών.',
      en: 'The sirtaki is danced in a circle, holding each other\'s shoulders. The tango, samba and waltz are dances of other peoples.',
    },
  },
  {
    q: { el: 'Πώς έφταναν τα παλιά παραμύθια και τα δημοτικά τραγούδια από τη μια γενιά στην άλλη, πριν υπάρξουν βιβλία για όλους;', en: 'How did old folk tales and songs pass from one generation to the next, before everyone had books?' },
    options: { el: ['Με το διαδίκτυο', 'Με την τηλεόραση', 'Από στόμα σε στόμα', 'Με γράμματα στο ταχυδρομείο'], en: ['Through the internet', 'Through television', 'By word of mouth', 'By letters in the post'] },
    correct: 2,
    explanation: {
      el: 'Οι μεγάλοι τα έλεγαν και τα τραγουδούσαν στα παιδιά, και τα παιδιά τα θυμόντουσαν. Έτσι λέμε ότι πέρασαν «από στόμα σε στόμα».',
      en: 'Grown-ups told and sang them to children, and the children remembered them. That is why we say they passed “by word of mouth”.',
    },
  },

  // ── 4–6: monuments ─────────────────────────────────────────────────────────
  {
    q: { el: 'Ο Παρθενώνας είναι ένας αρχαίος ναός. Πού βρίσκεται;', en: 'The Parthenon is an ancient temple. Where is it?' },
    options: { el: ['Στην Ακρόπολη της Αθήνας', 'Στην Κρήτη', 'Στη Θεσσαλονίκη', 'Στον Όλυμπο'], en: ['On the Acropolis of Athens', 'On Crete', 'In Thessaloniki', 'On Mount Olympus'] },
    correct: 0,
    explanation: {
      el: 'Ο Παρθενώνας στέκεται πάνω στον βράχο της Ακρόπολης, στην Αθήνα. Είναι από τα πιο γνωστά μνημεία του κόσμου.',
      en: 'The Parthenon stands on the rock of the Acropolis, in Athens. It is one of the most famous monuments in the world.',
    },
  },
  {
    q: { el: 'Το αρχαίο θέατρο της Επιδαύρου είναι φημισμένο επειδή…', en: 'The ancient theatre of Epidaurus is famous because…' },
    options: { el: ['έχει οροφή από χρυσό', 'ακούγεται μέχρι και ένας ψίθυρος από την τελευταία σειρά', 'χωράει μόνο 50 θεατές', 'είναι χτισμένο μέσα στη θάλασσα'], en: ['it has a roof made of gold', 'even a whisper can be heard from the last row', 'it only fits 50 spectators', 'it is built in the sea'] },
    correct: 1,
    explanation: {
      el: 'Στην Επίδαυρο η ακουστική είναι τόσο καλή, που ένας ψίθυρος στη σκηνή ακούγεται ψηλά, στην τελευταία σειρά. Ακόμα και σήμερα παίζονται εκεί παραστάσεις.',
      en: 'At Epidaurus the sound carries so well that a whisper on stage is heard high up in the last row. Plays are still performed there today.',
    },
  },
  {
    q: { el: 'Ο Νίκος επισκέπτεται έναν αρχαιολογικό χώρο. Τι πρέπει να κάνει;', en: 'Nikos visits an archaeological site. What should he do?' },
    options: { el: ['Να σκαλίσει το όνομά του σε μια κολόνα', 'Να πάρει μια πέτρα για ενθύμιο', 'Να ανέβει πάνω στα αγάλματα', 'Να περπατά στα μονοπάτια και να μην αγγίζει τα μνημεία'], en: ['Carve his name on a column', 'Take a stone as a souvenir', 'Climb on the statues', 'Walk on the paths and not touch the monuments'] },
    correct: 3,
    explanation: {
      el: 'Τα μνημεία είναι πολύ παλιά και πολύ ευαίσθητα. Τα προστατεύουμε για να τα δουν και τα παιδιά του μέλλοντος.',
      en: 'Monuments are very old and very fragile. We protect them so that children of the future can see them too.',
    },
  },

  // ── 7–8: religious sites ───────────────────────────────────────────────────
  {
    q: { el: 'Τι είναι το μοναστήρι;', en: 'What is a monastery?' },
    options: { el: ['Ένα μεγάλο εμπορικό κέντρο', 'Ένας χώρος όπου ζουν και προσεύχονται μοναχοί', 'Ένα αρχαίο στάδιο', 'Ένα σχολείο για μουσική'], en: ['A big shopping centre', 'A place where monks live and pray', 'An ancient stadium', 'A music school'] },
    correct: 1,
    explanation: {
      el: 'Στα μοναστήρια ζουν μοναχοί ή μοναχές. Πολλά είναι χτισμένα σε ήσυχα μέρη, πάνω σε βράχους ή σε βουνά, και είναι πολύ παλιά.',
      en: 'Monks or nuns live in monasteries. Many are built in quiet places, on rocks or mountains, and are very old.',
    },
  },
  {
    q: { el: 'Η Μαρία μπαίνει με την τάξη της σε έναν παλιό ναό με τοιχογραφίες. Πώς πρέπει να φέρεται;', en: 'Maria enters an old church with wall paintings with her class. How should she behave?' },
    options: { el: ['Να μιλά σιγά και να μην αγγίζει τις τοιχογραφίες', 'Να τρέχει για να τα δει όλα γρήγορα', 'Να φωνάζει για να ακούσει την ηχώ', 'Να ακουμπήσει τις εικόνες για να δει αν είναι αληθινές'], en: ['Speak quietly and not touch the paintings', 'Run so she can see everything quickly', 'Shout to hear the echo', 'Touch the paintings to see if they are real'] },
    correct: 0,
    explanation: {
      el: 'Οι ναοί και τα μοναστήρια είναι ιεροί χώροι για τους ανθρώπους που πιστεύουν, και συχνά είναι και μνημεία. Δείχνουμε σεβασμό: ήσυχα και χωρίς να αγγίζουμε.',
      en: 'Churches and monasteries are sacred to the people who believe, and often they are monuments too. We show respect: quietly and without touching.',
    },
  },

  // ── 9–11: customs through the year ─────────────────────────────────────────
  {
    q: { el: 'Τις Απόκριες τα παιδιά συνήθως…', en: 'At Carnival time, children usually…' },
    options: { el: ['στολίζουν δέντρο', 'βάφουν αυγά', 'ντύνονται μασκαράδες', 'φυτεύουν λουλούδια'], en: ['decorate a tree', 'dye eggs', 'dress up in costumes', 'plant flowers'] },
    correct: 2,
    explanation: {
      el: 'Τις Απόκριες φοράμε στολές και μάσκες, πετάμε σερπαντίνες και γλεντάμε. Το δέντρο είναι για τα Χριστούγεννα και τα αυγά για το Πάσχα.',
      en: 'At Carnival we wear costumes and masks, throw streamers and celebrate. The tree is for Christmas and the eggs are for Easter.',
    },
  },
  {
    q: { el: 'Ποιο χρώμα έχουν παραδοσιακά τα πασχαλινά αυγά στην Ελλάδα;', en: 'What colour are Easter eggs traditionally in Greece?' },
    options: { el: ['Πράσινο', 'Κόκκινο', 'Μπλε', 'Κίτρινο'], en: ['Green', 'Red', 'Blue', 'Yellow'] },
    correct: 1,
    explanation: {
      el: 'Τα αυγά βάφονται κόκκινα τη Μεγάλη Πέμπτη. Το Πάσχα τα τσουγκρίζουμε και όποιου το αυγό δεν σπάσει, κερδίζει!',
      en: 'The eggs are dyed red on Holy Thursday. At Easter we crack them together, and whoever\'s egg does not break wins!',
    },
  },
  {
    q: { el: 'Την Πρωτοχρονιά κόβουμε τη βασιλόπιτα. Τι είναι κρυμμένο μέσα της;', en: 'On New Year\'s Day we cut the vasilopita. What is hidden inside it?' },
    options: { el: ['Ένα κλειδί', 'Μια καραμέλα', 'Ένα νόμισμα', 'Ένα κουμπί'], en: ['A key', 'A sweet', 'A coin', 'A button'] },
    correct: 2,
    explanation: {
      el: 'Μέσα στη βασιλόπιτα κρύβεται ένα νόμισμα, το φλουρί. Όποιος το βρει στο κομμάτι του λέμε ότι θα έχει τύχη όλη τη χρονιά.',
      en: 'A coin, the “flouri”, is hidden in the vasilopita. Whoever finds it in their slice is said to have good luck all year.',
    },
  },

  // ── 12–14: other cultures ──────────────────────────────────────────────────
  {
    q: { el: 'Ο Γιώργος έχει έναν φίλο από την Κίνα που γιορτάζει την Πρωτοχρονιά με χορό του δράκου. Αυτό δείχνει ότι…', en: 'Giorgos has a friend from China who celebrates New Year with a dragon dance. This shows that…' },
    options: { el: ['μόνο οι Έλληνες έχουν έθιμα', 'κάθε λαός έχει τα δικά του έθιμα', 'τα έθιμα είναι ίδια σε όλο τον κόσμο', 'οι άλλοι λαοί δεν γιορτάζουν'], en: ['only Greeks have customs', 'every people has its own customs', 'customs are the same all over the world', 'other peoples do not celebrate'] },
    correct: 1,
    explanation: {
      el: 'Κάθε λαός έχει τον δικό του πολιτισμό: δικές του γιορτές, χορούς, φαγητά και γλώσσα. Όλοι είναι πολύτιμοι.',
      en: 'Every people has its own culture: its own festivals, dances, foods and language. All of them are valuable.',
    },
  },
  {
    q: { el: 'Η πίτσα, το σούσι και ο μουσακάς είναι φαγητά. Από ποιες χώρες ξεκίνησαν, με τη σειρά;', en: 'Pizza, sushi and moussaka are foods. Which countries did they come from, in order?' },
    options: { el: ['Ιταλία, Ιαπωνία, Ελλάδα', 'Ελλάδα, Ιταλία, Ιαπωνία', 'Ιαπωνία, Ελλάδα, Ιταλία', 'Ιταλία, Ελλάδα, Ιαπωνία'], en: ['Italy, Japan, Greece', 'Greece, Italy, Japan', 'Japan, Greece, Italy', 'Italy, Greece, Japan'] },
    correct: 0,
    explanation: {
      el: 'Η πίτσα είναι ιταλική, το σούσι ιαπωνικό και ο μουσακάς ελληνικός. Τα φαγητά ταξιδεύουν και έτσι γνωρίζουμε άλλους πολιτισμούς.',
      en: 'Pizza is Italian, sushi is Japanese and moussaka is Greek. Foods travel, and that is one way we get to know other cultures.',
    },
  },
  {
    q: { el: 'Στην τάξη ήρθε ένα νέο παιδί από άλλη χώρα που δεν μιλάει ακόμα καλά ελληνικά. Ποιο είναι το σωστό;', en: 'A new child from another country who does not speak Greek well yet has joined the class. What is the right thing to do?' },
    options: { el: ['Να το αφήσουμε μόνο του μέχρι να μάθει', 'Να το κοροϊδεύουμε όταν κάνει λάθη', 'Να το βοηθάμε και να μαθαίνουμε κι εμείς για τη χώρα του', 'Να του μιλάμε μόνο δυνατά για να καταλαβαίνει'], en: ['Leave them alone until they learn', 'Laugh at them when they make mistakes', 'Help them, and learn about their country too', 'Only talk loudly so they understand'] },
    correct: 2,
    explanation: {
      el: 'Όταν βοηθάμε και ρωτάμε με ενδιαφέρον, κερδίζουμε όλοι: εκείνο μαθαίνει ελληνικά κι εμείς μαθαίνουμε έναν καινούριο πολιτισμό.',
      en: 'When we help and ask with interest, everyone wins: they learn Greek and we learn about a new culture.',
    },
  },

  // ── 15–18: sports & the Olympic spirit ─────────────────────────────────────
  {
    q: { el: 'Πού γίνονταν οι Ολυμπιακοί Αγώνες στην αρχαία Ελλάδα;', en: 'Where were the Olympic Games held in ancient Greece?' },
    options: { el: ['Στην Αθήνα', 'Στη Σπάρτη', 'Στους Δελφούς', 'Στην Ολυμπία'], en: ['In Athens', 'In Sparta', 'In Delphi', 'In Olympia'] },
    correct: 3,
    explanation: {
      el: 'Οι αρχαίοι Ολυμπιακοί Αγώνες γίνονταν στην Ολυμπία, στην Πελοπόννησο, κάθε τέσσερα χρόνια. Από εκεί πήραν και το όνομά τους.',
      en: 'The ancient Olympic Games were held in Olympia, in the Peloponnese, every four years. That is where their name comes from.',
    },
  },
  {
    q: { el: 'Πόσους κύκλους έχει η ολυμπιακή σημαία;', en: 'How many rings does the Olympic flag have?' },
    options: { el: ['Τρεις', 'Πέντε', 'Επτά', 'Τέσσερις'], en: ['Three', 'Five', 'Seven', 'Four'] },
    correct: 1,
    explanation: {
      el: 'Η ολυμπιακή σημαία έχει πέντε ενωμένους κύκλους. Συμβολίζουν τις ηπείρους του κόσμου που σμίγουν στους Αγώνες.',
      en: 'The Olympic flag has five linked rings. They stand for the continents of the world coming together at the Games.',
    },
  },
  {
    q: { el: 'Σε έναν αγώνα, ο Νίκος έχασε. Τι σημαίνει «ευ αγωνίζεσθαι»;', en: 'Nikos lost a race. What does “fair play” mean?' },
    options: { el: ['Να κερδίζεις με κάθε τρόπο', 'Να παίζεις τίμια και να σέβεσαι τον αντίπαλο', 'Να μην παίζεις αν δεν είσαι σίγουρος ότι θα κερδίσεις', 'Να θυμώνεις όταν χάνεις'], en: ['To win by any means', 'To play honestly and respect your opponent', 'Not to play unless you are sure you will win', 'To get angry when you lose'] },
    correct: 1,
    explanation: {
      el: '«Ευ αγωνίζεσθαι» σημαίνει να αγωνίζεσαι τίμια, χωρίς ζαβολιές, και να δίνεις το χέρι στον αντίπαλο είτε κερδίσεις είτε χάσεις. Αυτό είναι το ολυμπιακό πνεύμα.',
      en: '“Fair play” means competing honestly, without cheating, and shaking your opponent\'s hand whether you win or lose. That is the Olympic spirit.',
    },
  },
  {
    q: { el: 'Η ολυμπιακή φλόγα ανάβει στην Ολυμπία και μετά…', en: 'The Olympic flame is lit in Olympia and then…' },
    options: { el: ['μένει εκεί μέχρι να τελειώσουν οι Αγώνες', 'ταξιδεύει από χέρι σε χέρι μέχρι το στάδιο των Αγώνων', 'σβήνει αμέσως', 'στέλνεται με γράμμα στη χώρα των Αγώνων'], en: ['stays there until the Games end', 'travels from hand to hand to the stadium of the Games', 'is put out right away', 'is sent by letter to the host country'] },
    correct: 1,
    explanation: {
      el: 'Η φλόγα ανάβει από τον ήλιο στην αρχαία Ολυμπία. Λαμπαδηδρόμοι την περνούν από χέρι σε χέρι, από χώρα σε χώρα, μέχρι να ανάψει τον βωμό στην τελετή έναρξης.',
      en: 'The flame is lit by the sun at ancient Olympia. Torchbearers pass it from hand to hand, country to country, until it lights the cauldron at the opening ceremony.',
    },
  },
];
