/**
 * Grade 6 · English Language Arts · Summarizing
 * ==============================================
 * Original questions for a native English-speaking child of 11–12 (curriculum topics only).
 * Four original passages of 6–8 sentences are written into the question text; each is
 * followed by four (or three) questions on the same skills.
 * What the unit covers, in order:
 *   1–2   what a summary is and what it should leave out
 *   3–6   passage A (a school garden): best summary, detail to drop, main idea, paraphrase vs copy
 *   7–10  passage B (a lighthouse cat): best summary, key point, opinion that does not belong, detail vs main idea
 *   11–14 passage C (the honeybee dance): best summary, main idea, point to leave out, paraphrase
 *   15–18 passage D (the town clock): best summary, unnecessary detail, copy vs paraphrase, main idea
 * Distractors are the real mix-ups: a single detail offered as the summary, a copied sentence
 * offered as a paraphrase, an opinion slipped into a summary.
 * el: the passage and question are translated for a Greek-speaking parent; the options stay in English.
 */
import type { QuizQuestion } from '../../../types';

const PASSAGE_A_EN = 'Read the passage. "Last spring, the students at Riverbend School turned an empty patch of ground behind the gym into a vegetable garden. First, they cleared away stones and weeds, which took two whole afternoons. Then a local farmer donated seeds for beans, lettuce, and pumpkins. The younger classes watered the plants every morning, while the older students built a fence to keep out rabbits. By June, the garden had produced enough vegetables for a lunch for the entire school. The head teacher says the garden will be even bigger next year."';
const PASSAGE_A_EL = 'Διάβασε το κείμενο. "Την περασμένη άνοιξη, οι μαθητές του σχολείου Riverbend μετέτρεψαν ένα άδειο κομμάτι γης πίσω από το γυμναστήριο σε λαχανόκηπο. Πρώτα καθάρισαν πέτρες και αγριόχορτα, κάτι που πήρε δύο ολόκληρα απογεύματα. Έπειτα ένας ντόπιος αγρότης δώρισε σπόρους για φασόλια, μαρούλια και κολοκύθες. Οι μικρότερες τάξεις πότιζαν τα φυτά κάθε πρωί, ενώ οι μεγαλύτεροι μαθητές έφτιαξαν φράχτη για να κρατά μακριά τα κουνέλια. Μέχρι τον Ιούνιο, ο κήπος είχε δώσει αρκετά λαχανικά για ένα γεύμα για ολόκληρο το σχολείο. Ο διευθυντής λέει ότι ο κήπος θα είναι ακόμη μεγαλύτερος του χρόνου."';

const PASSAGE_B_EN = 'Read the passage. "Every evening, Nora climbed the ninety-two steps of the lighthouse to light the lamp. Her cat, Pebble, always followed a few steps behind, tail held high. One foggy night, the lamp flickered and went out just as a fishing boat was heading toward the rocks. Nora searched her pockets, but she had left the matches in the kitchen far below. Pebble suddenly darted down the stairs and returned minutes later, carrying the small matchbox in his mouth. Nora relit the lamp, and the boat turned safely away from the rocks. From that night on, the fishermen called Pebble the bravest cat on the coast."';
const PASSAGE_B_EL = 'Διάβασε το κείμενο. "Κάθε βράδυ, η Nora ανέβαινε τα ενενήντα δύο σκαλιά του φάρου για να ανάψει τη λάμπα. Ο γάτος της, ο Pebble, την ακολουθούσε πάντα λίγα σκαλιά πιο πίσω, με την ουρά ψηλά. Μια ομιχλώδη νύχτα, η λάμπα τρεμόπαιξε και έσβησε ακριβώς τη στιγμή που ένα ψαροκάικο πήγαινε προς τα βράχια. Η Nora έψαξε τις τσέπες της, αλλά είχε αφήσει τα σπίρτα στην κουζίνα, πολύ πιο κάτω. Ξαφνικά ο Pebble όρμησε κάτω από τις σκάλες και επέστρεψε λίγα λεπτά αργότερα κρατώντας στο στόμα του το μικρό σπιρτόκουτο. Η Nora ξανάναψε τη λάμπα και το καΐκι απομακρύνθηκε με ασφάλεια από τα βράχια. Από εκείνη τη νύχτα, οι ψαράδες αποκαλούσαν τον Pebble τον πιο γενναίο γάτο της ακτής."';

const PASSAGE_C_EN = 'Read the passage. "Honeybees have a surprising way of sharing news about food. When a bee finds a rich patch of flowers, she flies back to the hive and performs a special movement called the waggle dance. The direction of the dance shows the other bees which way to fly, and the length of the dance tells them how far to go. Bees that watch the dance can then find the flowers without ever having seen them. Scientists first worked out the meaning of the dance in the 1940s. Today, researchers use tiny cameras inside hives to study the dance in more detail."';
const PASSAGE_C_EL = 'Διάβασε το κείμενο. "Οι μέλισσες έχουν έναν εκπληκτικό τρόπο να μοιράζονται νέα για την τροφή. Όταν μια μέλισσα βρει ένα πλούσιο σημείο με λουλούδια, πετά πίσω στην κυψέλη και εκτελεί μια ειδική κίνηση που λέγεται waggle dance (χορός της κούνιας). Η κατεύθυνση του χορού δείχνει στις άλλες μέλισσες προς τα πού να πετάξουν, και η διάρκεια του χορού τους λέει πόσο μακριά να πάνε. Οι μέλισσες που παρακολουθούν τον χορό μπορούν έπειτα να βρουν τα λουλούδια χωρίς να τα έχουν δει ποτέ. Οι επιστήμονες αποκρυπτογράφησαν για πρώτη φορά το νόημα του χορού τη δεκαετία του 1940. Σήμερα, οι ερευνητές χρησιμοποιούν μικροσκοπικές κάμερες μέσα στις κυψέλες για να μελετούν τον χορό με περισσότερη λεπτομέρεια."';

const PASSAGE_D_EN = 'Read the passage. "For over a hundred years, the clock on the town hall tower kept perfect time. Then, last winter, it stopped at exactly half past three and refused to move. The council asked an expert clockmaker, Mr. Adeyemi, to look at it. He discovered that a family of pigeons had built a nest inside the mechanism and that one tiny gear had rusted through. It took him three weeks to make a new gear by hand because no factory still produces that size. When the clock finally chimed again, hundreds of people gathered in the square to listen. Mr. Adeyemi said it was the proudest moment of his career."';
const PASSAGE_D_EL = 'Διάβασε το κείμενο. "Για πάνω από εκατό χρόνια, το ρολόι στον πύργο του δημαρχείου κρατούσε τέλεια την ώρα. Τότε, τον περασμένο χειμώνα, σταμάτησε ακριβώς στις τρεις και μισή και αρνιόταν να κουνηθεί. Το δημοτικό συμβούλιο ζήτησε από έναν ειδικό ωρολογοποιό, τον κύριο Adeyemi, να το εξετάσει. Ανακάλυψε ότι μια οικογένεια περιστεριών είχε φτιάξει φωλιά μέσα στον μηχανισμό και ότι ένα μικροσκοπικό γρανάζι είχε σκουριάσει εντελώς. Του πήρε τρεις εβδομάδες να φτιάξει ένα καινούργιο γρανάζι στο χέρι, γιατί κανένα εργοστάσιο δεν παράγει πια αυτό το μέγεθος. Όταν το ρολόι χτύπησε επιτέλους ξανά, εκατοντάδες άνθρωποι μαζεύτηκαν στην πλατεία για να ακούσουν. Ο κύριος Adeyemi είπε ότι ήταν η πιο περήφανη στιγμή της καριέρας του."';

export const GRADE6_ELA_SUMMARIZING: QuizQuestion[] = [
  // ── 1–2: what a summary is ─────────────────────────────────────────────────
  {
    q: { el: 'Τι είναι η περίληψη;', en: 'What is a summary?' },
    options: { el: ['A short retelling of the most important points in your own words', 'A copy of the first paragraph of the text', 'A list of every detail in the text', 'Your opinion about whether the text was good'], en: ['A short retelling of the most important points in your own words', 'A copy of the first paragraph of the text', 'A list of every detail in the text', 'Your opinion about whether the text was good'] },
    correct: 0,
    explanation: {
      el: 'Η περίληψη είναι σύντομη, κρατά μόνο τα βασικά σημεία και τα λέει με δικά σου λόγια. Δεν αντιγράφει, δεν αναφέρει κάθε λεπτομέρεια και δεν προσθέτει γνώμη.',
      en: 'A summary is short, keeps only the key points, and says them in your own words. It does not copy, it does not list every detail, and it does not add your opinion.',
    },
  },
  {
    q: { el: 'Τι ΔΕΝ πρέπει να περιλαμβάνει μια καλή περίληψη;', en: 'Which of these should a good summary NOT include?' },
    options: { el: ['The main idea', 'The key events in order', 'Important names', 'Your personal opinion of the text'], en: ['The main idea', 'The key events in order', 'Important names', 'Your personal opinion of the text'] },
    correct: 3,
    explanation: {
      el: 'Η περίληψη λέει τι λέει το κείμενο, όχι τι σκέφτεσαι εσύ γι\' αυτό. Φράσεις όπως "I loved this story" ανήκουν σε κριτική, όχι σε περίληψη.',
      en: 'A summary reports what the text says, not what you think of it. Phrases like "I loved this story" belong in a review, not a summary.',
    },
  },

  // ── 3–6: passage A, the school garden ──────────────────────────────────────
  {
    q: { el: PASSAGE_A_EL + ' Ποια είναι η καλύτερη περίληψη;', en: PASSAGE_A_EN + ' Which is the best summary?' },
    options: { el: ['Riverbend students built a vegetable garden behind the gym, grew enough food for a school lunch, and plan to make it bigger next year.', 'Clearing the stones and weeds took two whole afternoons.', 'A farmer gave seeds for beans, lettuce, and pumpkins, and rabbits are a problem for gardens.', 'The head teacher likes vegetables and wants everyone to eat lunch at school.'], en: ['Riverbend students built a vegetable garden behind the gym, grew enough food for a school lunch, and plan to make it bigger next year.', 'Clearing the stones and weeds took two whole afternoons.', 'A farmer gave seeds for beans, lettuce, and pumpkins, and rabbits are a problem for gardens.', 'The head teacher likes vegetables and wants everyone to eat lunch at school.'] },
    correct: 0,
    explanation: {
      el: 'Η καλύτερη περίληψη καλύπτει όλο το κείμενο: τι έγινε (ο κήπος), το αποτέλεσμα (το γεύμα) και το μέλλον (μεγαλύτερος του χρόνου). Οι άλλες επιλογές πιάνουν μία μόνο λεπτομέρεια ή προσθέτουν πράγματα που δεν λέει το κείμενο.',
      en: 'The best summary covers the whole passage: what happened (the garden), the result (the lunch) and the future (bigger next year). The other options grab one detail or add things the passage never says.',
    },
  },
  {
    q: { el: PASSAGE_A_EL + ' Ποια λεπτομέρεια θα μπορούσε να μείνει έξω από μια περίληψη;', en: PASSAGE_A_EN + ' Which detail could be left out of a summary?' },
    options: { el: ['The students made a garden.', 'The garden produced food for a school lunch.', 'Clearing the ground took two afternoons.', 'The garden will grow next year.'], en: ['The students made a garden.', 'The garden produced food for a school lunch.', 'Clearing the ground took two afternoons.', 'The garden will grow next year.'] },
    correct: 2,
    explanation: {
      el: 'Το πόσες ώρες πήρε το καθάρισμα είναι μικρή λεπτομέρεια: αν την αφαιρέσεις, η ιστορία βγάζει ακόμη νόημα. Το ότι φτιάχτηκε ο κήπος, ότι έδωσε φαγητό και ότι θα μεγαλώσει είναι τα βασικά σημεία.',
      en: 'How long the clearing took is a minor detail: remove it and the story still makes sense. That the garden was made, fed the school and will grow are the key points.',
    },
  },
  {
    q: { el: PASSAGE_A_EL + ' Ποια είναι η κεντρική ιδέα του κειμένου;', en: PASSAGE_A_EN + ' What is the main idea of the passage?' },
    options: { el: ['Rabbits eat vegetables.', 'Students worked together to create a successful school garden.', 'Watering plants is a job for younger children.', 'Farmers are generous people.'], en: ['Rabbits eat vegetables.', 'Students worked together to create a successful school garden.', 'Watering plants is a job for younger children.', 'Farmers are generous people.'] },
    correct: 1,
    explanation: {
      el: 'Η κεντρική ιδέα είναι αυτό για το οποίο μιλάει ολόκληρο το κείμενο: μαθητές που έφτιαξαν μαζί έναν επιτυχημένο κήπο. Τα κουνέλια, το πότισμα και ο αγρότης είναι λεπτομέρειες που τη στηρίζουν.',
      en: 'The main idea is what the whole passage is about: students building a successful garden together. The rabbits, the watering and the farmer are details that support it.',
    },
  },
  {
    q: { el: PASSAGE_A_EL + ' Ποια πρόταση αποδίδει με άλλα λόγια (και δεν αντιγράφει) το "The younger classes watered the plants every morning, while the older students built a fence to keep out rabbits";', en: PASSAGE_A_EN + ' Which sentence paraphrases (rather than copies) "The younger classes watered the plants every morning, while the older students built a fence to keep out rabbits"?' },
    options: { el: ['The younger classes watered the plants every morning, while the older students built a fence to keep out rabbits.', 'The garden had a fence.', 'Older students watered the plants and younger students built a fence.', 'Younger pupils handled the daily watering and older ones fenced the garden against rabbits.'], en: ['The younger classes watered the plants every morning, while the older students built a fence to keep out rabbits.', 'The garden had a fence.', 'Older students watered the plants and younger students built a fence.', 'Younger pupils handled the daily watering and older ones fenced the garden against rabbits.'] },
    correct: 3,
    explanation: {
      el: 'Η παράφραση κρατά το ίδιο νόημα με διαφορετικές λέξεις. Η πρώτη επιλογή είναι αντιγραφή λέξη προς λέξη, η δεύτερη χάνει το μισό νόημα και η τρίτη μπερδεύει ποιος έκανε τι.',
      en: 'A paraphrase keeps the same meaning in different words. The first option is a word-for-word copy, the second loses half the meaning, and the third mixes up who did what.',
    },
  },

  // ── 7–10: passage B, the lighthouse cat ────────────────────────────────────
  {
    q: { el: PASSAGE_B_EL + ' Ποια είναι η καλύτερη περίληψη;', en: PASSAGE_B_EN + ' Which is the best summary?' },
    options: { el: ['The lighthouse has ninety-two steps and Nora climbs them every evening.', 'Pebble is a cat who likes to hold his tail high and follow Nora.', 'When the lighthouse lamp went out on a foggy night, Nora\'s cat Pebble fetched the matches so she could relight it and save a boat.', 'Fishermen on the coast like cats and give them names.'], en: ['The lighthouse has ninety-two steps and Nora climbs them every evening.', 'Pebble is a cat who likes to hold his tail high and follow Nora.', 'When the lighthouse lamp went out on a foggy night, Nora\'s cat Pebble fetched the matches so she could relight it and save a boat.', 'Fishermen on the coast like cats and give them names.'] },
    correct: 2,
    explanation: {
      el: 'Μια περίληψη ιστορίας χρειάζεται το πρόβλημα (η λάμπα έσβησε), τη λύση (ο Pebble έφερε τα σπίρτα) και το αποτέλεσμα (το καΐκι σώθηκε). Οι άλλες επιλογές μένουν σε λεπτομέρειες του σκηνικού.',
      en: 'A story summary needs the problem (the lamp went out), the solution (Pebble fetched the matches) and the outcome (the boat was saved). The other options stay stuck on background details.',
    },
  },
  {
    q: { el: PASSAGE_B_EL + ' Ποιο είναι βασικό σημείο που ΠΡΕΠΕΙ να μπει στην περίληψη;', en: PASSAGE_B_EN + ' Which is a key point that MUST be in the summary?' },
    options: { el: ['The lighthouse has ninety-two steps.', 'Pebble brought the matchbox so the lamp could be relit.', 'Pebble\'s tail was held high.', 'The night was foggy.'], en: ['The lighthouse has ninety-two steps.', 'Pebble brought the matchbox so the lamp could be relit.', 'Pebble\'s tail was held high.', 'The night was foggy.'] },
    correct: 1,
    explanation: {
      el: 'Χωρίς τον Pebble να φέρνει τα σπίρτα, η ιστορία δεν έχει λύση. Ο αριθμός των σκαλιών, η ουρά και η ομίχλη είναι χρώμα, όχι πλοκή.',
      en: 'Without Pebble bringing the matches, the story has no solution. The number of steps, the tail and the fog are color, not plot.',
    },
  },
  {
    q: { el: PASSAGE_B_EL + ' Ποια περίληψη περιλαμβάνει μια γνώμη που δεν έχει θέση εκεί;', en: PASSAGE_B_EN + ' Which summary includes an opinion that does not belong?' },
    options: { el: ['Pebble fetched the matches and the lamp was relit.', 'The lamp went out, Pebble fetched the matches, and the boat was saved.', 'A cat helped Nora relight the lighthouse lamp in time to save a boat.', 'Pebble, who is the cutest cat ever, fetched the matches and saved the boat.'], en: ['Pebble fetched the matches and the lamp was relit.', 'The lamp went out, Pebble fetched the matches, and the boat was saved.', 'A cat helped Nora relight the lighthouse lamp in time to save a boat.', 'Pebble, who is the cutest cat ever, fetched the matches and saved the boat.'] },
    correct: 3,
    explanation: {
      el: 'Το "the cutest cat ever" είναι γνώμη του συγγραφέα της περίληψης, όχι κάτι από το κείμενο. Η περίληψη μένει σε αυτά που συνέβησαν.',
      en: '"The cutest cat ever" is the summary writer\'s opinion, not something from the passage. A summary sticks to what happened.',
    },
  },
  {
    q: { el: PASSAGE_B_EL + ' Ποιο από αυτά είναι μικρή λεπτομέρεια και όχι η κεντρική ιδέα;', en: PASSAGE_B_EN + ' Which of these is a small detail, not the main idea?' },
    options: { el: ['A cat helped save a fishing boat.', 'The story is about a brave lighthouse cat.', 'Nora had left the matches in the kitchen.', 'Pebble\'s quick action saved the boat.'], en: ['A cat helped save a fishing boat.', 'The story is about a brave lighthouse cat.', 'Nora had left the matches in the kitchen.', 'Pebble\'s quick action saved the boat.'] },
    correct: 2,
    explanation: {
      el: 'Το πού ήταν τα σπίρτα είναι λεπτομέρεια που εξηγεί το πρόβλημα. Οι άλλες τρεις επιλογές λένε με διαφορετικά λόγια το ίδιο πράγμα: την κεντρική ιδέα, ένας γενναίος γάτος σώζει ένα καΐκι.',
      en: 'Where the matches were is a detail that explains the problem. The other three options all say the same thing in different words: the main idea, a brave cat saves a boat.',
    },
  },

  // ── 11–14: passage C, the honeybee dance ───────────────────────────────────
  {
    q: { el: PASSAGE_C_EL + ' Ποια είναι η καλύτερη περίληψη;', en: PASSAGE_C_EN + ' Which is the best summary?' },
    options: { el: ['Bees like flowers and fly around looking for them.', 'Honeybees use the waggle dance to tell each other the direction and distance of food, something scientists decoded in the 1940s and still study today.', 'Scientists put tiny cameras inside beehives.', 'A bee flew back to the hive and danced because she was happy.'], en: ['Bees like flowers and fly around looking for them.', 'Honeybees use the waggle dance to tell each other the direction and distance of food, something scientists decoded in the 1940s and still study today.', 'Scientists put tiny cameras inside beehives.', 'A bee flew back to the hive and danced because she was happy.'] },
    correct: 1,
    explanation: {
      el: 'Η καλή περίληψη ενός πληροφοριακού κειμένου κρατά το κύριο γεγονός (ο χορός δείχνει κατεύθυνση και απόσταση) και τα βασικά σημεία (αποκρυπτογράφηση, σημερινή έρευνα). Η τέταρτη επιλογή εφευρίσκει έναν λόγο που το κείμενο δεν αναφέρει.',
      en: 'A good summary of an information text keeps the main fact (the dance shows direction and distance) and the key points (decoded, still studied). The fourth option invents a reason the passage never gives.',
    },
  },
  {
    q: { el: PASSAGE_C_EL + ' Ποιο γεγονός είναι η κεντρική ιδέα;', en: PASSAGE_C_EN + ' Which fact is the main idea?' },
    options: { el: ['Scientists use tiny cameras.', 'The dance was decoded in the 1940s.', 'Bees share the location of food through a dance.', 'Bees find patches of flowers.'], en: ['Scientists use tiny cameras.', 'The dance was decoded in the 1940s.', 'Bees share the location of food through a dance.', 'Bees find patches of flowers.'] },
    correct: 2,
    explanation: {
      el: 'Κάθε πρόταση του κειμένου υπηρετεί μία ιδέα: οι μέλισσες επικοινωνούν πού είναι η τροφή χορεύοντας. Οι κάμερες και η δεκαετία του 1940 είναι υποστηρικτικές λεπτομέρειες.',
      en: 'Every sentence in the passage serves one idea: bees communicate where food is by dancing. The cameras and the 1940s are supporting details.',
    },
  },
  {
    q: { el: PASSAGE_C_EL + ' Ποιο σημείο θα μπορούσε να μείνει έξω από μια πολύ σύντομη περίληψη;', en: PASSAGE_C_EN + ' Which point could be left out of a very short summary?' },
    options: { el: ['The dance shows direction.', 'The dance shows distance.', 'Bees use the dance to share where food is.', 'Researchers now use tiny cameras to watch the dance.'], en: ['The dance shows direction.', 'The dance shows distance.', 'Bees use the dance to share where food is.', 'Researchers now use tiny cameras to watch the dance.'] },
    correct: 3,
    explanation: {
      el: 'Ο τρόπος που οι ερευνητές μελετούν τον χορό σήμερα είναι ενδιαφέρον, αλλά δεν είναι απαραίτητος για να καταλάβει κανείς τι είναι ο χορός. Η κατεύθυνση, η απόσταση και ο σκοπός του είναι το κύριο περιεχόμενο.',
      en: 'How researchers study the dance today is interesting, but not needed to understand what the dance is. Direction, distance and purpose are the core content.',
    },
  },
  {
    q: { el: PASSAGE_C_EL + ' Ποια είναι παράφραση του "The direction of the dance shows the other bees which way to fly, and the length of the dance tells them how far to go";', en: PASSAGE_C_EN + ' Which is a paraphrase of "The direction of the dance shows the other bees which way to fly, and the length of the dance tells them how far to go"?' },
    options: { el: ['The way the bee dances tells the hive both the direction and the distance of the flowers.', 'The dance is fun to watch.', 'The direction of the dance shows the other bees which way to fly, and the length of the dance tells them how far to go.', 'Bees fly a long way to find flowers.'], en: ['The way the bee dances tells the hive both the direction and the distance of the flowers.', 'The dance is fun to watch.', 'The direction of the dance shows the other bees which way to fly, and the length of the dance tells them how far to go.', 'Bees fly a long way to find flowers.'] },
    correct: 0,
    explanation: {
      el: 'Η παράφραση λέει το ίδιο πράγμα (κατεύθυνση + απόσταση) με καινούργιες λέξεις. Η τρίτη επιλογή είναι αντιγραφή, και οι άλλες δύο αλλάζουν το νόημα.',
      en: 'The paraphrase says the same thing (direction + distance) in fresh words. The third option is a copy, and the other two change the meaning.',
    },
  },

  // ── 15–18: passage D, the town clock ───────────────────────────────────────
  {
    q: { el: PASSAGE_D_EL + ' Ποια είναι η καλύτερη περίληψη;', en: PASSAGE_D_EN + ' Which is the best summary?' },
    options: { el: ['A clockmaker named Mr. Adeyemi is very proud of his job.', 'Pigeons like to build nests in warm places such as clock towers.', 'The town hall clock stopped because of a pigeon nest and a rusted gear; a clockmaker made a new gear by hand, and the town celebrated when it chimed again.', 'The clock stopped at half past three, which is an unlucky time.'], en: ['A clockmaker named Mr. Adeyemi is very proud of his job.', 'Pigeons like to build nests in warm places such as clock towers.', 'The town hall clock stopped because of a pigeon nest and a rusted gear; a clockmaker made a new gear by hand, and the town celebrated when it chimed again.', 'The clock stopped at half past three, which is an unlucky time.'] },
    correct: 2,
    explanation: {
      el: 'Η καλύτερη περίληψη έχει την αιτία (φωλιά και σκουριασμένο γρανάζι), την επισκευή (νέο γρανάζι στο χέρι) και το τέλος (η πόλη γιόρτασε). Η τέταρτη επιλογή προσθέτει μια ιδέα, "unlucky", που δεν υπάρχει στο κείμενο.',
      en: 'The best summary has the cause (nest and rusted gear), the repair (new gear made by hand) and the ending (the town celebrated). The fourth option adds an idea, "unlucky", that is not in the passage.',
    },
  },
  {
    q: { el: PASSAGE_D_EL + ' Ποια λεπτομέρεια ΔΕΝ χρειάζεται σε μια σύντομη περίληψη;', en: PASSAGE_D_EN + ' Which detail is NOT needed in a short summary?' },
    options: { el: ['The clock stopped.', 'The clock stopped at exactly half past three.', 'A clockmaker repaired it.', 'The town celebrated when it worked again.'], en: ['The clock stopped.', 'The clock stopped at exactly half past three.', 'A clockmaker repaired it.', 'The town celebrated when it worked again.'] },
    correct: 1,
    explanation: {
      el: 'Η ακριβής ώρα που σταμάτησε το ρολόι δεν αλλάζει την ιστορία. Το ότι σταμάτησε, επισκευάστηκε και η πόλη γιόρτασε είναι τα βασικά.',
      en: 'The exact time the clock stopped does not change the story. That it stopped, was repaired and the town celebrated are the essentials.',
    },
  },
  {
    q: { el: PASSAGE_D_EL + ' Ποια πρόταση αντιγράφει το κείμενο αντί να το αποδίδει με άλλα λόγια;', en: PASSAGE_D_EN + ' Which sentence copies the passage instead of paraphrasing it?' },
    options: { el: ['A clockmaker repaired the old clock.', 'Making the replacement part by hand took nearly a month.', 'The clock had been reliable for a century.', 'It took him three weeks to make a new gear by hand because no factory still produces that size.'], en: ['A clockmaker repaired the old clock.', 'Making the replacement part by hand took nearly a month.', 'The clock had been reliable for a century.', 'It took him three weeks to make a new gear by hand because no factory still produces that size.'] },
    correct: 3,
    explanation: {
      el: 'Η τέταρτη πρόταση είναι πανομοιότυπη με μια πρόταση του κειμένου: αυτό είναι αντιγραφή. Οι άλλες τρεις λένε τις ίδιες πληροφορίες με δικά τους λόγια.',
      en: 'The fourth sentence is identical to a sentence in the passage: that is copying. The other three say the same information in their own words.',
    },
  },
  {
    q: { el: PASSAGE_D_EL + ' Ποια είναι η κεντρική ιδέα;', en: PASSAGE_D_EN + ' What is the main idea?' },
    options: { el: ['A town\'s much-loved clock was carefully repaired after a long stop, to everyone\'s delight.', 'Pigeons cause problems.', 'Old machines are hard to fix.', 'Mr. Adeyemi works for the council.'], en: ['A town\'s much-loved clock was carefully repaired after a long stop, to everyone\'s delight.', 'Pigeons cause problems.', 'Old machines are hard to fix.', 'Mr. Adeyemi works for the council.'] },
    correct: 0,
    explanation: {
      el: 'Η κεντρική ιδέα συνδέει όλο το κείμενο: ένα αγαπημένο ρολόι σταμάτησε, επισκευάστηκε με φροντίδα και η πόλη χάρηκε. Τα περιστέρια και η δουλειά του ωρολογοποιού είναι λεπτομέρειες.',
      en: 'The main idea ties the whole passage together: a beloved clock stopped, was carefully repaired, and the town rejoiced. The pigeons and the clockmaker\'s job are details.',
    },
  },
];
