/**
 * Δ' Δημοτικού · ELA (English Language Arts) · Ανάγνωση πληροφοριακών κειμένων / Reading Non-fiction
 * =================================================================================================
 * Original questions for a native English-speaking child of 9–10 (US 4th grade,
 * UK Year 4–5). All four informational texts are written for this unit — nothing
 * is taken from books or websites.
 *
 * What the unit covers, in order:
 *   1–5   text A (sea otters): what it is mostly about, fact vs opinion, a detail,
 *         a word in context, the best heading
 *   6–9   text B (how hail forms): mostly about, a detail, a fact, a word in context
 *   10–14 text C (the paper clip): mostly about, the purpose of a caption, a detail,
 *         a word in context, fact vs opinion
 *   15–18 text D (why breakfast matters): the purpose of a heading, a detail,
 *         a word in context, fact vs opinion
 *
 * Distractors are details mistaken for the main topic, opinions dressed as facts,
 * and meanings of the word that do not fit the sentence. Options are the English
 * answers being tested, so the Greek option list is the same as the English one.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE4_ELA_READING_NONFICTION: QuizQuestion[] = [
  // ── 1–5: text A — sea otters ───────────────────────────────────────────────
  {
    q: {
      el: '«Οι θαλάσσιες ενυδρίδες είναι γούνινα θηλαστικά που ζουν σε κρύα νερά ωκεανών κοντά σε βραχώδεις ακτές. Η πυκνή γούνα τους τις κρατά ζεστές, γιατί, αντίθετα με τις φάλαινες, δεν έχουν στρώμα λίπους. Επιπλέουν ανάσκελα και χρησιμοποιούν πλακέ πέτρες για να σπάνε όστρακα. Τη νύχτα τυλίγονται σε μακριά φύκια για να μην παρασυρθούν όσο κοιμούνται. Πολλοί πιστεύουν ότι είναι τα πιο χαριτωμένα ζώα της θάλασσας.» Για τι μιλά κυρίως το κείμενο;',
      en: '“Sea otters are furry mammals that live in cold ocean water along rocky coasts. Their thick fur keeps them warm because, unlike whales, they have no layer of fat. Sea otters float on their backs and use flat stones to crack open shellfish. At night, they wrap themselves in long strands of seaweed so they do not drift away while they sleep. Many people think they are the cutest animals in the sea.” What is this text mostly about?',
    },
    options: {
      el: ['How whales stay warm', 'How sea otters live in the ocean', 'Different kinds of seaweed', 'Why shellfish have hard shells'],
      en: ['How whales stay warm', 'How sea otters live in the ocean', 'Different kinds of seaweed', 'Why shellfish have hard shells'],
    },
    correct: 1,
    explanation: {
      el: 'Κάθε πρόταση λέει κάτι για το πώς ζουν οι ενυδρίδες: πού, πώς ζεσταίνονται, πώς τρώνε, πώς κοιμούνται. Οι φάλαινες, τα φύκια και τα όστρακα αναφέρονται μόνο για μια στιγμή.',
      en: 'Every sentence tells something about how sea otters live: where, how they stay warm, how they eat, how they sleep. Whales, seaweed and shellfish are only mentioned for a moment.',
    },
  },
  {
    q: {
      el: 'Στο κείμενο για τις ενυδρίδες, ποια πρόταση είναι ΓΝΩΜΗ και όχι γεγονός;',
      en: 'In the text about sea otters, which sentence is an OPINION, not a fact?',
    },
    options: {
      el: ['Sea otters have thick fur.', 'Sea otters use stones to crack shellfish.', 'Sea otters are the cutest animals in the sea.', 'Sea otters live in cold water.'],
      en: ['Sea otters have thick fur.', 'Sea otters use stones to crack shellfish.', 'Sea otters are the cutest animals in the sea.', 'Sea otters live in cold water.'],
    },
    correct: 2,
    explanation: {
      el: 'Ένα γεγονός μπορεί να ελεγχθεί και να αποδειχθεί. Το «cutest» είναι αυτό που νιώθει κάποιος, και άλλοι μπορεί να διαφωνούν, άρα είναι γνώμη. Λέξεις όπως best, cutest, boring δείχνουν συνήθως γνώμη.',
      en: 'A fact can be checked and proved. “Cutest” is what someone feels, and other people might disagree, so it is an opinion. Words like best, cutest and boring usually signal an opinion.',
    },
  },
  {
    q: {
      el: 'Σύμφωνα με το κείμενο, γιατί οι ενυδρίδες τυλίγονται σε φύκια;',
      en: 'According to the text, why do sea otters wrap themselves in seaweed?',
    },
    options: {
      el: ['To stay warm', 'To hide from sharks', 'To find food', 'So they do not drift away while sleeping'],
      en: ['To stay warm', 'To hide from sharks', 'To find food', 'So they do not drift away while sleeping'],
    },
    correct: 3,
    explanation: {
      el: 'Το κείμενο λέει «so they do not drift away while they sleep». Η λέξη «so» δίνει τον λόγο. Η γούνα, όχι τα φύκια, είναι αυτό που τις κρατά ζεστές.',
      en: 'The text says “so they do not drift away while they sleep”. The word “so” gives the reason. It is the fur, not the seaweed, that keeps them warm.',
    },
  },
  {
    q: {
      el: 'Τι σημαίνει η λέξη «drift» στο κείμενο;',
      en: 'What does the word “drift” mean in the text?',
    },
    options: {
      el: ['float slowly away', 'sink to the bottom', 'swim fast', 'jump out of the water'],
      en: ['float slowly away', 'sink to the bottom', 'swim fast', 'jump out of the water'],
    },
    correct: 0,
    explanation: {
      el: 'Χρησιμοποίησε τα συμφραζόμενα: οι ενυδρίδες κοιμούνται επιπλέοντας και τα φύκια τις κρατούν στη θέση τους. Άρα «drift» σημαίνει να παρασύρεσαι αργά από το νερό.',
      en: 'Use the clues around the word: the otters sleep floating, and the seaweed holds them in place. So “drift” means to be carried slowly along by the water.',
    },
  },
  {
    q: {
      el: 'Ποια επικεφαλίδα ταιριάζει καλύτερα στο κείμενο για τις ενυδρίδες;',
      en: 'Which heading fits the text about sea otters best?',
    },
    options: {
      el: ['Whales of the World', 'Sea Otters: Life in the Ocean', 'How to Cook Shellfish', 'Rocks on the Coast'],
      en: ['Whales of the World', 'Sea Otters: Life in the Ocean', 'How to Cook Shellfish', 'Rocks on the Coast'],
    },
    correct: 1,
    explanation: {
      el: 'Μια επικεφαλίδα λέει στον αναγνώστη για τι μιλά το κείμενο, πριν καν το διαβάσει. Το κείμενο μιλά για τη ζωή των ενυδρίδων, άρα η επικεφαλίδα πρέπει να λέει «Sea Otters».',
      en: 'A heading tells the reader what the text is about before they even read it. The text is about how sea otters live, so the heading should say “Sea Otters”.',
    },
  },

  // ── 6–9: text B — how hail forms ───────────────────────────────────────────
  {
    q: {
      el: '«Το χαλάζι είναι μπαλάκια πάγου που πέφτουν από σύννεφα καταιγίδας. Μέσα σε ένα ψηλό σύννεφο, δυνατοί άνεμοι σπρώχνουν τις σταγόνες βροχής ψηλά, εκεί όπου ο αέρας είναι παγωμένος. Οι σταγόνες γίνονται πάγος, πέφτουν λίγο και μετά σπρώχνονται πάλι ψηλά, παίρνοντας κάθε φορά ένα νέο στρώμα. Όταν οι κόκκοι χαλαζιού γίνουν πολύ βαρείς για να τους κρατήσει ο άνεμος, πέφτουν στο έδαφος. Οι περισσότεροι έχουν μέγεθος μπιζελιού, αλλά μερικοί φτάνουν στο μέγεθος μπάλας του τένις.» Για τι μιλά κυρίως το κείμενο;',
      en: '“Hail is made of balls of ice that fall from storm clouds. Inside a tall thundercloud, strong winds push raindrops up to where the air is freezing. The drops turn to ice, fall a little, and then get pushed up again, adding a new layer each time. When the hailstones become too heavy for the wind to hold, they drop to the ground. Most hailstones are the size of peas, but a few can grow as big as a tennis ball.” What is this text mostly about?',
    },
    options: {
      el: ['How hail forms inside a thundercloud', 'Why storm clouds are gray', 'How to measure a tennis ball', 'What raindrops taste like'],
      en: ['How hail forms inside a thundercloud', 'Why storm clouds are gray', 'How to measure a tennis ball', 'What raindrops taste like'],
    },
    correct: 0,
    explanation: {
      el: 'Το κείμενο εξηγεί βήμα βήμα πώς μια σταγόνα γίνεται κόκκος χαλαζιού. Η μπάλα του τένις είναι μόνο μια σύγκριση για το μέγεθος.',
      en: 'The text explains step by step how a raindrop turns into a hailstone. The tennis ball is only a comparison for size.',
    },
  },
  {
    q: {
      el: 'Σύμφωνα με το κείμενο, τι κάνει έναν κόκκο χαλαζιού να μεγαλώνει;',
      en: 'According to the text, what makes a hailstone grow bigger?',
    },
    options: {
      el: ['It melts in the sun.', 'It is pushed up again and gets a new layer of ice.', 'It rolls along the ground.', 'It joins with a snowflake.'],
      en: ['It melts in the sun.', 'It is pushed up again and gets a new layer of ice.', 'It rolls along the ground.', 'It joins with a snowflake.'],
    },
    correct: 1,
    explanation: {
      el: 'Το κείμενο λέει ότι οι σταγόνες «get pushed up again, adding a new layer each time». Κάθε ταξίδι προς τα πάνω προσθέτει ένα ακόμη στρώμα πάγου.',
      en: 'The text says the drops “get pushed up again, adding a new layer each time”. Every trip back up adds one more coat of ice.',
    },
  },
  {
    q: {
      el: 'Ποια πρόταση είναι ΓΕΓΟΝΟΣ από το κείμενο για το χαλάζι;',
      en: 'Which sentence is a FACT from the text about hail?',
    },
    options: {
      el: ['Hail is the most exciting kind of weather.', 'Thunderstorms are scary.', 'Most hailstones are the size of peas.', 'Hail is prettier than snow.'],
      en: ['Hail is the most exciting kind of weather.', 'Thunderstorms are scary.', 'Most hailstones are the size of peas.', 'Hail is prettier than snow.'],
    },
    correct: 2,
    explanation: {
      el: 'Το μέγεθος των κόκκων χαλαζιού μπορεί να μετρηθεί, άρα είναι γεγονός. Το «exciting», το «scary» και το «prettier» είναι συναισθήματα, δηλαδή γνώμες.',
      en: 'The size of hailstones can be measured, so it is a fact. “Exciting”, “scary” and “prettier” are feelings, which makes them opinions.',
    },
  },
  {
    q: {
      el: 'Τι σημαίνει η λέξη «layer» στη φράση «adding a new layer each time»;',
      en: 'What does the word “layer” mean in “adding a new layer each time”?',
    },
    options: {
      el: ['a loud noise', 'a kind of wind', 'a small hole', 'a coating on top of another'],
      en: ['a loud noise', 'a kind of wind', 'a small hole', 'a coating on top of another'],
    },
    correct: 3,
    explanation: {
      el: 'Το κείμενο λέει ότι ο πάγος «προστίθεται» κάθε φορά που η σταγόνα ανεβαίνει. Ένα στρώμα (layer) είναι μια επίστρωση πάνω σε άλλη, όπως τα στρώματα ενός κρεμμυδιού.',
      en: 'The text says ice is “added” each time the drop goes up. A layer is one coating on top of another, like the layers of an onion.',
    },
  },

  // ── 10–14: text C — the paper clip ─────────────────────────────────────────
  {
    q: {
      el: '«Ο συνδετήρας είναι μία από τις πιο απλές εφευρέσεις που έγιναν ποτέ. Είναι απλώς ένα λεπτό σύρμα λυγισμένο σε δύο θηλιές. Όταν βάζεις χαρτιά ανάμεσα στις θηλιές, το σύρμα επανέρχεται και τα κρατά σφιχτά. Πριν από τους συνδετήρες οι άνθρωποι χρησιμοποιούσαν καρφίτσες, που άφηναν τρύπες και τρυπούσαν δάχτυλα. Σήμερα φτιάχνονται δισεκατομμύρια συνδετήρες κάθε χρόνο, και πολλοί τους χρησιμοποιούν για άλλες δουλειές, όπως να ανοίξουν τη θήκη κάρτας ενός κινητού ή να κρατήσουν έναν σελιδοδείκτη στη θέση του.» Για τι μιλά κυρίως το κείμενο;',
      en: '“The paper clip is one of the simplest inventions ever made. It is just a piece of thin wire bent into two loops. When you slide papers between the loops, the wire springs back and holds them tightly. Before paper clips, people used pins, which left holes and could prick fingers. Today, billions of paper clips are made every year, and many people use them for other jobs, like opening a phone tray or holding a bookmark in place.” What is this text mostly about?',
    },
    options: {
      el: ['How pins are made', 'Why paper has holes', 'A simple invention: the paper clip', 'How to open a phone tray'],
      en: ['How pins are made', 'Why paper has holes', 'A simple invention: the paper clip', 'How to open a phone tray'],
    },
    correct: 2,
    explanation: {
      el: 'Η πρώτη πρόταση δίνει το θέμα, ο συνδετήρας, και όλες οι άλλες προσθέτουν πληροφορίες γι\' αυτόν. Οι καρφίτσες και η θήκη του κινητού είναι μικρές λεπτομέρειες.',
      en: 'The first sentence gives the topic, the paper clip, and every other sentence adds information about it. The pins and the phone tray are small details.',
    },
  },
  {
    q: {
      el: 'Κάτω από μια εικόνα συνδετήρα, η λεζάντα λέει: «A paper clip is bent from a single piece of wire.» Ποιος είναι ο σκοπός της λεζάντας (caption);',
      en: 'Under a picture of a paper clip, the caption says: “A paper clip is bent from a single piece of wire.” What is the purpose of the caption?',
    },
    options: {
      el: ['To explain what the picture shows', 'To tell a joke', 'To ask the reader a question', 'To list the author\'s name'],
      en: ['To explain what the picture shows', 'To tell a joke', 'To ask the reader a question', 'To list the author\'s name'],
    },
    correct: 0,
    explanation: {
      el: 'Η λεζάντα είναι το μικρό κείμενο κάτω από μια εικόνα. Η δουλειά της είναι να λέει τι δείχνει η εικόνα και να προσθέτει μια χρήσιμη πληροφορία.',
      en: 'A caption is the short text under a picture. Its job is to tell you what the picture shows and add a helpful fact about it.',
    },
  },
  {
    q: {
      el: 'Σύμφωνα με το κείμενο, τι χρησιμοποιούσαν οι άνθρωποι πριν από τους συνδετήρες;',
      en: 'According to the text, what did people use before paper clips?',
    },
    options: {
      el: ['Glue', 'Pins', 'String', 'Tape'],
      en: ['Glue', 'Pins', 'String', 'Tape'],
    },
    correct: 1,
    explanation: {
      el: 'Το κείμενο λέει «Before paper clips, people used pins». Η λέξη «before» σε βοηθά να βρεις γρήγορα τη σωστή πρόταση.',
      en: 'The text says “Before paper clips, people used pins”. The word “before” helps you find the right sentence quickly.',
    },
  },
  {
    q: {
      el: 'Τι σημαίνει το «springs back» στη φράση «the wire springs back and holds them tightly»;',
      en: 'What does “springs back” mean in “the wire springs back and holds them tightly”?',
    },
    options: {
      el: ['jumps into the air', 'breaks in half', 'quickly returns to its shape', 'gets wet'],
      en: ['jumps into the air', 'breaks in half', 'quickly returns to its shape', 'gets wet'],
    },
    correct: 2,
    explanation: {
      el: 'Τα συμφραζόμενα λένε ότι το σύρμα «holds them tightly» αμέσως μετά, άρα δεν σπάει ούτε πηδάει: γυρίζει στο σχήμα του και σφίγγει τα χαρτιά.',
      en: 'The clue is that the wire “holds them tightly” right after, so it does not break or jump: it goes back to its shape and grips the papers.',
    },
  },
  {
    q: {
      el: 'Ποια πρόταση για τους συνδετήρες είναι ΓΝΩΜΗ;',
      en: 'Which sentence about paper clips is an OPINION?',
    },
    options: {
      el: ['Paper clips are made of wire.', 'Billions are made every year.', 'Some people use them to open a phone tray.', 'Paper clips are the best invention ever.'],
      en: ['Paper clips are made of wire.', 'Billions are made every year.', 'Some people use them to open a phone tray.', 'Paper clips are the best invention ever.'],
    },
    correct: 3,
    explanation: {
      el: 'Το «the best invention ever» είναι κρίση, όχι κάτι που μπορεί να αποδειχθεί. Οι άλλες τρεις προτάσεις λένε πράγματα που μπορείς να ελέγξεις.',
      en: '“The best invention ever” is a judgment, not something you can prove. The other three sentences say things you could check.',
    },
  },

  // ── 15–18: text D — why breakfast matters ──────────────────────────────────
  {
    q: {
      el: '«Γιατί το πρωινό έχει σημασία. Μετά από μια νύχτα ύπνου, το σώμα σου έχει ξοδέψει μεγάλο μέρος της ενέργειάς του. Ένα υγιεινό πρωινό, όπως βρώμη με φρούτα ή αυγά με ψωμί ολικής άλεσης, ξαναγεμίζει αυτή την ενέργεια. Έρευνες δείχνουν ότι τα παιδιά που τρώνε πρωινό συγκεντρώνονται πιο εύκολα στην τάξη. Αν παραλείψεις το πρωινό, μπορεί να νιώθεις κουρασμένος και γκρινιάρης ως τα μέσα του πρωινού. Τα ζαχαρούχα δημητριακά δίνουν μια γρήγορη ενέργεια, αλλά δεν κρατά πολύ.» Το κείμενο έχει την επικεφαλίδα «Why Breakfast Matters». Ποιος είναι ο σκοπός μιας επικεφαλίδας (heading);',
      en: '“Why Breakfast Matters. After a night of sleep, your body has used up much of its energy. A healthy breakfast, such as oatmeal with fruit or eggs with whole-grain toast, refills that energy. Studies show that children who eat breakfast find it easier to pay attention in class. Skipping breakfast can leave you feeling tired and grumpy by mid-morning. Sugary cereals give a quick burst of energy, but it does not last long.” The text has the heading “Why Breakfast Matters”. What is the purpose of a heading?',
    },
    options: {
      el: ['To tell the reader what the section is about', 'To show who wrote the text', 'To give the page number', 'To make the text longer'],
      en: ['To tell the reader what the section is about', 'To show who wrote the text', 'To give the page number', 'To make the text longer'],
    },
    correct: 0,
    explanation: {
      el: 'Η επικεφαλίδα είναι ένας μικρός τίτλος πάνω από ένα μέρος του κειμένου. Λέει στον αναγνώστη τι θα διαβάσει, ώστε να βρίσκει γρήγορα το κομμάτι που θέλει.',
      en: 'A heading is a short title above one part of a text. It tells the reader what that part is about, so they can find the section they need quickly.',
    },
  },
  {
    q: {
      el: 'Σύμφωνα με το κείμενο, τι συμβαίνει στα παιδιά που τρώνε πρωινό;',
      en: 'According to the text, what happens to children who eat breakfast?',
    },
    options: {
      el: ['They grow taller.', 'They run faster.', 'They find it easier to pay attention in class.', 'They sleep longer.'],
      en: ['They grow taller.', 'They run faster.', 'They find it easier to pay attention in class.', 'They sleep longer.'],
    },
    correct: 2,
    explanation: {
      el: 'Το κείμενο λέει «children who eat breakfast find it easier to pay attention in class». Οι άλλες επιλογές μπορεί να ακούγονται λογικές, αλλά δεν υπάρχουν στο κείμενο.',
      en: 'The text says “children who eat breakfast find it easier to pay attention in class”. The other choices may sound sensible, but they are not in the text.',
    },
  },
  {
    q: {
      el: 'Τι σημαίνει η λέξη «refills» στη φράση «a healthy breakfast refills that energy»;',
      en: 'What does the word “refills” mean in “a healthy breakfast refills that energy”?',
    },
    options: {
      el: ['throws away', 'fills up again', 'cooks slowly', 'measures'],
      en: ['throws away', 'fills up again', 'cooks slowly', 'measures'],
    },
    correct: 1,
    explanation: {
      el: 'Το πρόθεμα «re-» σημαίνει «ξανά»: refill = γεμίζω ξανά. Το κείμενο μόλις είπε ότι η ενέργεια «used up», άρα το πρωινό τη γεμίζει πάλι.',
      en: 'The prefix “re-” means “again”: refill = fill again. The text just said the energy was “used up”, so breakfast fills it back up.',
    },
  },
  {
    q: {
      el: 'Ποια πρόταση είναι ΓΕΓΟΝΟΣ από το κείμενο για το πρωινό;',
      en: 'Which sentence is a FACT from the text about breakfast?',
    },
    options: {
      el: ['Oatmeal tastes better than eggs.', 'Breakfast is the best meal of the day.', 'Everyone should love whole-grain toast.', 'Sugary cereals give energy that does not last long.'],
      en: ['Oatmeal tastes better than eggs.', 'Breakfast is the best meal of the day.', 'Everyone should love whole-grain toast.', 'Sugary cereals give energy that does not last long.'],
    },
    correct: 3,
    explanation: {
      el: 'Το πόσο κρατά η ενέργεια μπορεί να μετρηθεί, άρα είναι γεγονός που αναφέρει το κείμενο. Το «tastes better», «the best» και «should love» είναι γνώμες.',
      en: 'How long energy lasts can be measured, so it is a fact the text states. “Tastes better”, “the best” and “should love” are all opinions.',
    },
  },
];
