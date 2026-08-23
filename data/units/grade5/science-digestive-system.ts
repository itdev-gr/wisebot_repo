/**
 * Ε' Δημοτικού · Φυσικά («Ερευνώ και Ανακαλύπτω») · Πεπτικό Σύστημα
 * ===================================================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a child of 10–11. In the order the class meets the topics:
 *   1–4   the mouth: teeth types (incisors, canines, molars), saliva, the tongue
 *   5–8   the journey: oesophagus, stomach and gastric juice, small intestine, large intestine
 *   9–12  how it all fits together: the order of the organs, the liver, villi, how long it takes
 *   13–18 balanced diet: food groups, carbohydrates, proteins, water, fibre, reading a plate
 * Distractors are the real mix-ups (stomach before oesophagus, "digestion starts in the stomach",
 * molars for biting). The correct slot is not balanced on purpose — the UI shuffles options.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE5_SCIENCE_DIGESTIVE_SYSTEM: QuizQuestion[] = [
  // ── 1–4: the mouth ─────────────────────────────────────────────────────────
  {
    q: { el: 'Ο Νίκος δαγκώνει ένα μήλο. Ποια δόντια κόβουν την πρώτη μπουκιά;', en: 'Nikos bites into an apple. Which teeth cut the first bite?' },
    options: { el: ['Οι γομφίοι', 'Οι κοπτήρες', 'Οι κυνόδοντες', 'Οι φρονιμίτες'], en: ['The molars', 'The incisors', 'The canines', 'The wisdom teeth'] },
    correct: 1,
    explanation: {
      el: 'Οι κοπτήρες είναι τα μπροστινά, πλατιά δόντια. Κόβουν την τροφή σαν ψαλίδι.',
      en: 'The incisors are the flat front teeth. They cut food like scissors.',
    },
  },
  {
    q: { el: 'Ποια δόντια είναι μεγάλα και πλατιά, για να αλέθουν την τροφή στο πίσω μέρος του στόματος;', en: 'Which teeth are big and flat, for grinding food at the back of the mouth?' },
    options: { el: ['Οι κοπτήρες', 'Οι κυνόδοντες', 'Οι γομφίοι', 'Τα νεογιλά δόντια'], en: ['The incisors', 'The canines', 'The molars', 'The baby teeth'] },
    correct: 2,
    explanation: {
      el: 'Οι γομφίοι είναι οι «μυλόπετρες» του στόματος. Αλέθουν την τροφή σε μικρά κομμάτια.',
      en: 'The molars are the “millstones” of the mouth. They grind food into small pieces.',
    },
  },
  {
    q: { el: 'Οι κυνόδοντες είναι μυτεροί σαν του σκύλου. Σε τι χρησιμεύουν;', en: 'The canines are pointed like a dog\'s. What are they for?' },
    options: { el: ['Να αλέθουν το ψωμί', 'Να σκίζουν την τροφή', 'Να κρατούν τη γλώσσα', 'Να φτιάχνουν σάλιο'], en: ['To grind bread', 'To tear food', 'To hold the tongue', 'To make saliva'] },
    correct: 1,
    explanation: {
      el: 'Οι κυνόδοντες είναι μυτεροί για να σκίζουν την τροφή, π.χ. ένα κομμάτι κρέας.',
      en: 'The canines are pointed so they can tear food, for example a piece of meat.',
    },
  },
  {
    q: { el: 'Η Ελένη μασάει ψωμί για πολλή ώρα και το νιώθει λίγο γλυκό. Γιατί;', en: 'Eleni chews bread for a long time and it starts to taste a little sweet. Why?' },
    options: { el: ['Το σάλιο αρχίζει να χωνεύει το ψωμί', 'Το ψωμί έχει πάντα ζάχαρη', 'Η γλώσσα φτιάχνει ζάχαρη', 'Τα δόντια ζεσταίνουν το ψωμί'], en: ['Saliva starts to digest the bread', 'Bread always contains sugar', 'The tongue makes sugar', 'The teeth warm the bread'] },
    correct: 0,
    explanation: {
      el: 'Η πέψη ξεκινά στο στόμα! Το σάλιο σπάει το άμυλο του ψωμιού σε σάκχαρα, γι\' αυτό γλυκαίνει.',
      en: 'Digestion starts in the mouth! Saliva breaks the starch in bread into sugars, so it tastes sweet.',
    },
  },

  // ── 5–8: the journey of food ───────────────────────────────────────────────
  {
    q: { el: 'Μετά το στόμα, από ποιον «σωλήνα» περνά η μπουκιά για να φτάσει στο στομάχι;', en: 'After the mouth, which “tube” does the food pass through to reach the stomach?' },
    options: { el: ['Από την τραχεία', 'Από το λεπτό έντερο', 'Από τον οισοφάγο', 'Από το συκώτι'], en: ['The windpipe', 'The small intestine', 'The oesophagus', 'The liver'] },
    correct: 2,
    explanation: {
      el: 'Ο οισοφάγος είναι ο σωλήνας που ενώνει το στόμα με το στομάχι. Η τραχεία είναι για τον αέρα!',
      en: 'The oesophagus is the tube that joins the mouth to the stomach. The windpipe is for air!',
    },
  },
  {
    q: { el: 'Ο Γιώργος πίνει νερό ανάποδα, με το κεφάλι κάτω. Το νερό φτάνει στο στομάχι; Γιατί;', en: 'Giorgos drinks water upside down. Does the water reach his stomach? Why?' },
    options: { el: ['Όχι, το νερό πέφτει μόνο με τη βαρύτητα', 'Ναι, οι μύες του οισοφάγου το σπρώχνουν', 'Όχι, ο οισοφάγος κλείνει', 'Ναι, γιατί το νερό είναι ελαφρύ'], en: ['No, water only falls with gravity', 'Yes, the muscles of the oesophagus push it along', 'No, the oesophagus closes', 'Yes, because water is light'] },
    correct: 1,
    explanation: {
      el: 'Ο οισοφάγος έχει μύες που σφίγγουν σαν κύμα και σπρώχνουν την τροφή, ακόμα και ανάποδα.',
      en: 'The oesophagus has muscles that squeeze like a wave and push food along, even upside down.',
    },
  },
  {
    q: { el: 'Τι κάνει το στομάχι στην τροφή που φτάνει εκεί;', en: 'What does the stomach do to the food that arrives there?' },
    options: { el: ['Την αποθηκεύει για μήνες', 'Την ανακατεύει με γαστρικό υγρό και τη λιώνει', 'Τη στέλνει στους πνεύμονες', 'Την κόβει με μικρά δόντια'], en: ['Stores it for months', 'Mixes it with gastric juice and turns it into mush', 'Sends it to the lungs', 'Cuts it with tiny teeth'] },
    correct: 1,
    explanation: {
      el: 'Το στομάχι είναι ένας μυώδης σάκος. Ανακατεύει την τροφή με γαστρικό υγρό ώσπου να γίνει χυλός.',
      en: 'The stomach is a muscular bag. It churns food with gastric juice until it becomes a thick soup.',
    },
  },
  {
    q: { el: 'Πού περνούν τα θρεπτικά συστατικά από την τροφή μέσα στο αίμα;', en: 'Where do the nutrients from food pass into the blood?' },
    options: { el: ['Στο στομάχι', 'Στον οισοφάγο', 'Στο λεπτό έντερο', 'Στο στόμα'], en: ['In the stomach', 'In the oesophagus', 'In the small intestine', 'In the mouth'] },
    correct: 2,
    explanation: {
      el: 'Στο λεπτό έντερο τα θρεπτικά συστατικά περνούν στο αίμα και ταξιδεύουν σε όλο το σώμα.',
      en: 'In the small intestine the nutrients pass into the blood and travel all around the body.',
    },
  },

  // ── 9–12: the whole system ─────────────────────────────────────────────────
  {
    q: { el: 'Τι κάνει το παχύ έντερο, ο τελευταίος σταθμός του ταξιδιού;', en: 'What does the large intestine, the last stop of the journey, do?' },
    options: { el: ['Φτιάχνει σάλιο', 'Απορροφά νερό από ό,τι απέμεινε', 'Αλέθει την τροφή', 'Στέλνει οξυγόνο στο αίμα'], en: ['Makes saliva', 'Absorbs water from what is left', 'Grinds the food', 'Sends oxygen to the blood'] },
    correct: 1,
    explanation: {
      el: 'Το παχύ έντερο παίρνει πίσω το νερό από τα υπολείμματα. Ό,τι δεν χρειάζεται το σώμα, αποβάλλεται.',
      en: 'The large intestine takes water back from the leftovers. What the body does not need is passed out.',
    },
  },
  {
    q: { el: 'Ποια είναι η σωστή σειρά του ταξιδιού της τροφής;', en: 'Which is the correct order of the food\'s journey?' },
    options: { el: ['Στόμα → στομάχι → οισοφάγος → έντερα', 'Στόμα → οισοφάγος → έντερα → στομάχι', 'Στόμα → οισοφάγος → στομάχι → λεπτό έντερο → παχύ έντερο', 'Οισοφάγος → στόμα → στομάχι → έντερα'], en: ['Mouth → stomach → oesophagus → intestines', 'Mouth → oesophagus → intestines → stomach', 'Mouth → oesophagus → stomach → small intestine → large intestine', 'Oesophagus → mouth → stomach → intestines'] },
    correct: 2,
    explanation: {
      el: 'Στόμα, οισοφάγος, στομάχι, λεπτό έντερο, παχύ έντερο. Ο οισοφάγος έρχεται πάντα πριν από το στομάχι!',
      en: 'Mouth, oesophagus, stomach, small intestine, large intestine. The oesophagus always comes before the stomach!',
    },
  },
  {
    q: { el: 'Το συκώτι δεν είναι μέρος του σωλήνα, αλλά βοηθά στην πέψη. Τι φτιάχνει;', en: 'The liver is not part of the tube, but it helps digestion. What does it make?' },
    options: { el: ['Χολή, που βοηθά να χωνέψουμε τα λίπη', 'Σάλιο, για το στόμα', 'Αίμα, για το στομάχι', 'Αέρα, για τα έντερα'], en: ['Bile, which helps digest fats', 'Saliva, for the mouth', 'Blood, for the stomach', 'Air, for the intestines'] },
    correct: 0,
    explanation: {
      el: 'Το συκώτι φτιάχνει τη χολή. Η χολή σπάει τα λίπη σε μικρά σταγονίδια, για να χωνεύονται πιο εύκολα.',
      en: 'The liver makes bile. Bile breaks fats into tiny droplets so they are easier to digest.',
    },
  },
  {
    q: { el: 'Το εσωτερικό του λεπτού εντέρου είναι γεμάτο μικροσκοπικές «προεξοχές», τις λάχνες. Γιατί;', en: 'The inside of the small intestine is covered with tiny “fingers” called villi. Why?' },
    options: { el: ['Για να κρατούν την τροφή ακίνητη', 'Για να κόβουν την τροφή', 'Για να απορροφούν περισσότερα θρεπτικά συστατικά', 'Για να ζεσταίνουν την τροφή'], en: ['To hold the food still', 'To cut the food', 'To absorb more nutrients', 'To warm the food'] },
    correct: 2,
    explanation: {
      el: 'Οι λάχνες κάνουν το εσωτερικό του εντέρου τεράστιο, σαν πετσέτα με χνούδι. Έτσι απορροφά πολύ περισσότερα θρεπτικά συστατικά.',
      en: 'The villi make the inside of the intestine huge, like a fluffy towel. That way it absorbs far more nutrients.',
    },
  },

  // ── 13–18: balanced diet and food groups ───────────────────────────────────
  {
    q: { el: 'Σε ποια ομάδα τροφίμων ανήκουν το ψωμί, τα μακαρόνια και το ρύζι;', en: 'Which food group do bread, pasta and rice belong to?' },
    options: { el: ['Στα γαλακτοκομικά', 'Στα δημητριακά', 'Στα φρούτα', 'Στα λίπη'], en: ['Dairy', 'Grains (cereals)', 'Fruit', 'Fats'] },
    correct: 1,
    explanation: {
      el: 'Το ψωμί, τα μακαρόνια και το ρύζι είναι δημητριακά. Δίνουν ενέργεια για τρέξιμο, παιχνίδι και σκέψη.',
      en: 'Bread, pasta and rice are grains. They give us energy to run, play and think.',
    },
  },
  {
    q: { el: 'Η Μαρία κάνει προπόνηση στο μπάσκετ και θέλει δυνατούς μύες. Ποια τροφή έχει περισσότερες πρωτεΐνες;', en: 'Maria trains for basketball and wants strong muscles. Which food has the most protein?' },
    options: { el: ['Ένα ποτήρι χυμό', 'Μια φέτα ψωμί', 'Ένα αυγό', 'Μια καραμέλα'], en: ['A glass of juice', 'A slice of bread', 'An egg', 'A sweet'] },
    correct: 2,
    explanation: {
      el: 'Τα αυγά, το κρέας, το ψάρι και τα όσπρια είναι πλούσια σε πρωτεΐνες. Οι πρωτεΐνες χτίζουν τους μύες.',
      en: 'Eggs, meat, fish and beans are rich in protein. Protein builds our muscles.',
    },
  },
  {
    q: { el: 'Το γάλα, το τυρί και το γιαούρτι έχουν πολύ ασβέστιο. Σε τι βοηθά το ασβέστιο;', en: 'Milk, cheese and yoghurt have lots of calcium. What does calcium help with?' },
    options: { el: ['Να βλέπουμε στο σκοτάδι', 'Να έχουμε γερά κόκαλα και δόντια', 'Να χωνεύουμε πιο γρήγορα', 'Να μη διψάμε'], en: ['Seeing in the dark', 'Having strong bones and teeth', 'Digesting faster', 'Not feeling thirsty'] },
    correct: 1,
    explanation: {
      el: 'Το ασβέστιο από τα γαλακτοκομικά κάνει τα κόκαλα και τα δόντια μας γερά.',
      en: 'Calcium from dairy makes our bones and teeth strong.',
    },
  },
  {
    q: { el: 'Γιατί τα φρούτα, τα λαχανικά και τα όσπρια βοηθούν το έντερο να δουλεύει σωστά;', en: 'Why do fruit, vegetables and beans help the gut work properly?' },
    options: { el: ['Έχουν φυτικές ίνες', 'Έχουν πολλή ζάχαρη', 'Έχουν πολύ λίπος', 'Έχουν αλάτι'], en: ['They contain fibre', 'They contain lots of sugar', 'They contain lots of fat', 'They contain salt'] },
    correct: 0,
    explanation: {
      el: 'Οι φυτικές ίνες δεν χωνεύονται, αλλά «σκουπίζουν» το έντερο και το βοηθούν να κινείται σωστά.',
      en: 'Fibre is not digested, but it “sweeps” the gut and helps it move food along properly.',
    },
  },
  {
    q: { el: 'Τι σημαίνει «ισορροπημένη διατροφή»;', en: 'What does a “balanced diet” mean?' },
    options: { el: ['Να τρώμε μόνο φρούτα και λαχανικά', 'Να τρώμε από όλες τις ομάδες τροφίμων, στη σωστή ποσότητα', 'Να τρώμε το ίδιο φαγητό κάθε μέρα', 'Να μην τρώμε ποτέ γλυκά'], en: ['Eating only fruit and vegetables', 'Eating from all the food groups, in the right amounts', 'Eating the same meal every day', 'Never eating sweets'] },
    correct: 1,
    explanation: {
      el: 'Ισορροπημένη διατροφή σημαίνει λίγο απ\' όλα: δημητριακά, φρούτα, λαχανικά, γαλακτοκομικά, πρωτεΐνες — και τα γλυκά με μέτρο.',
      en: 'A balanced diet means a bit of everything: grains, fruit, vegetables, dairy, protein — and sweets in moderation.',
    },
  },
  {
    q: { el: 'Στο πιάτο του Νίκου: κοτόπουλο, ρύζι, σαλάτα και ένα ποτήρι νερό. Ποια ομάδα τροφίμων λείπει από το γεύμα;', en: 'On Nikos\'s plate: chicken, rice, salad and a glass of water. Which food group is missing from the meal?' },
    options: { el: ['Οι πρωτεΐνες', 'Τα δημητριακά', 'Τα λαχανικά', 'Τα γαλακτοκομικά'], en: ['Protein', 'Grains', 'Vegetables', 'Dairy'] },
    correct: 3,
    explanation: {
      el: 'Κοτόπουλο = πρωτεΐνη, ρύζι = δημητριακά, σαλάτα = λαχανικά. Λείπουν τα γαλακτοκομικά, π.χ. ένα γιαούρτι στο τέλος.',
      en: 'Chicken = protein, rice = grains, salad = vegetables. Dairy is missing — a yoghurt at the end would do it.',
    },
  },
];
