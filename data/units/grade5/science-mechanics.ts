/**
 * Ε' Δημοτικού · Φυσικά («Ερευνώ και Ανακαλύπτω») · Μηχανική
 * =========================================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a child of 10–11. What the unit covers, in order:
 *   1–5   speed, distance and time: what speed means, comparing speeds, the
 *         distance = speed × time idea, km/h
 *   6–9   force: what a force does (starts, stops, turns, bends), measuring in
 *         Newton, balanced forces, gravity as a pull
 *   10–13 friction: what it is, rough vs smooth, when it helps and when we reduce it
 *   14–16 pressure: the same push on a small area presses harder (nails, snowshoes,
 *         knife edges)
 *   17–18 pushes and pulls: reading a situation and telling which is which
 * Distractors are the mistakes children really make (mixing up speed with distance,
 * thinking a moving thing "runs out" of force, thinking heavy always means more pressure).
 */
import type { QuizQuestion } from '../../../types';

export const GRADE5_SCIENCE_MECHANICS: QuizQuestion[] = [
  // ── 1–5: speed, distance and time ──────────────────────────────────────────
  {
    q: { el: 'Τι μας λέει η ταχύτητα ενός ποδηλάτη;', en: 'What does a cyclist\'s speed tell us?' },
    options: {
      el: ['Πόσο δρόμο κάνει σε ένα ορισμένο χρόνο', 'Πόσο βαρύ είναι το ποδήλατο', 'Πόσο ψηλά είναι η σέλα', 'Πόσο μακριά είναι ο προορισμός'],
      en: ['How much distance he covers in a certain time', 'How heavy the bike is', 'How high the saddle is', 'How far away the destination is'],
    },
    correct: 0,
    explanation: {
      el: 'Η ταχύτητα δείχνει πόση απόσταση διανύουμε σε κάποιο χρόνο, π.χ. 20 χιλιόμετρα σε μία ώρα.',
      en: 'Speed tells us how much distance we cover in a certain time, for example 20 kilometres in one hour.',
    },
  },
  {
    q: { el: 'Ο Νίκος και η Ελένη τρέχουν 100 μέτρα. Ο Νίκος κάνει 20 δευτερόλεπτα, η Ελένη 18. Ποιος έχει μεγαλύτερη ταχύτητα;', en: 'Nikos and Eleni run 100 metres. Nikos takes 20 seconds, Eleni takes 18. Who has the greater speed?' },
    options: {
      el: ['Ο Νίκος, γιατί έκανε περισσότερο χρόνο', 'Η Ελένη, γιατί έκανε λιγότερο χρόνο', 'Ίδια ταχύτητα, γιατί έτρεξαν ίδια απόσταση', 'Δεν μπορούμε να ξέρουμε'],
      en: ['Nikos, because he took more time', 'Eleni, because she took less time', 'The same speed, because they ran the same distance', 'We cannot know'],
    },
    correct: 1,
    explanation: {
      el: 'Ίδια απόσταση σε λιγότερο χρόνο σημαίνει μεγαλύτερη ταχύτητα. Η Ελένη ήταν πιο γρήγορη.',
      en: 'The same distance in less time means a greater speed. Eleni was faster.',
    },
  },
  {
    q: { el: 'Ένα αυτοκίνητο τρέχει με 60 χιλιόμετρα την ώρα. Πόσα χιλιόμετρα θα κάνει σε 2 ώρες;', en: 'A car travels at 60 kilometres per hour. How many kilometres will it cover in 2 hours?' },
    options: { el: ['30', '62', '120', '600'], en: ['30', '62', '120', '600'] },
    correct: 2,
    explanation: {
      el: 'Κάθε ώρα κάνει 60 χιλιόμετρα, άρα σε 2 ώρες: 60 × 2 = 120 χιλιόμετρα.',
      en: 'Every hour it covers 60 kilometres, so in 2 hours: 60 × 2 = 120 kilometres.',
    },
  },
  {
    q: { el: 'Τι σημαίνει ότι ένα τρένο έχει ταχύτητα 80 km/h;', en: 'What does it mean that a train has a speed of 80 km/h?' },
    options: {
      el: ['Κάνει 80 χιλιόμετρα σε κάθε ώρα', 'Ταξιδεύει 80 ώρες', 'Το ταξίδι του είναι 80 χιλιόμετρα', 'Έχει 80 βαγόνια'],
      en: ['It covers 80 kilometres every hour', 'It travels for 80 hours', 'Its journey is 80 kilometres long', 'It has 80 carriages'],
    },
    correct: 0,
    explanation: {
      el: 'Το km/h διαβάζεται «χιλιόμετρα την ώρα». 80 km/h σημαίνει 80 χιλιόμετρα σε μία ώρα.',
      en: 'km/h is read “kilometres per hour”. 80 km/h means 80 kilometres in one hour.',
    },
  },
  {
    q: { el: 'Μια χελώνα περπατά 10 μέτρα σε 5 λεπτά. Πόσα μέτρα κάνει σε ένα λεπτό;', en: 'A tortoise walks 10 metres in 5 minutes. How many metres does it cover in one minute?' },
    options: { el: ['50', '15', '5', '2'], en: ['50', '15', '5', '2'] },
    correct: 3,
    explanation: {
      el: 'Μοιράζουμε την απόσταση στα λεπτά: 10 ÷ 5 = 2 μέτρα το λεπτό. Αυτή είναι η ταχύτητά της.',
      en: 'We divide the distance by the minutes: 10 ÷ 5 = 2 metres per minute. That is its speed.',
    },
  },

  // ── 6–9: force ─────────────────────────────────────────────────────────────
  {
    q: { el: 'Η Μαρία κλωτσά μια μπάλα που ήταν ακίνητη και η μπάλα ξεκινά να κυλά. Τι έκανε η δύναμη της κλωτσιάς;', en: 'Maria kicks a ball that was still and the ball starts rolling. What did the force of the kick do?' },
    options: {
      el: ['Έκανε την μπάλα πιο ελαφριά', 'Έβαλε την μπάλα σε κίνηση', 'Έκανε την μπάλα μεγαλύτερη', 'Δεν έκανε τίποτα στην μπάλα'],
      en: ['It made the ball lighter', 'It set the ball in motion', 'It made the ball bigger', 'It did nothing to the ball'],
    },
    correct: 1,
    explanation: {
      el: 'Μια δύναμη μπορεί να βάλει σε κίνηση κάτι ακίνητο, να το σταματήσει, να το στρίψει ή να του αλλάξει σχήμα.',
      en: 'A force can set a still object moving, stop it, turn it, or change its shape.',
    },
  },
  {
    q: { el: 'Με ποια μονάδα μετράμε τη δύναμη;', en: 'Which unit do we use to measure force?' },
    options: { el: ['Κιλά', 'Μέτρα', 'Νιούτον', 'Λίτρα'], en: ['Kilograms', 'Metres', 'Newtons', 'Litres'] },
    correct: 2,
    explanation: {
      el: 'Η δύναμη μετριέται σε Νιούτον (N), από τον επιστήμονα Ισαάκ Νεύτωνα. Τα κιλά μετρούν τη μάζα, όχι τη δύναμη.',
      en: 'Force is measured in newtons (N), named after the scientist Isaac Newton. Kilograms measure mass, not force.',
    },
  },
  {
    q: { el: 'Ο Γιώργος και ο Νίκος τραβούν ένα σχοινί από αντίθετες πλευρές με την ίδια δύναμη. Τι θα συμβεί στο σχοινί;', en: 'Giorgos and Nikos pull a rope from opposite sides with the same force. What will happen to the rope?' },
    options: {
      el: ['Θα πάει προς τον Γιώργο', 'Θα πάει προς τον Νίκο', 'Θα μείνει στη θέση του', 'Θα πεταχτεί προς τα πάνω'],
      en: ['It will move towards Giorgos', 'It will move towards Nikos', 'It will stay where it is', 'It will fly upwards'],
    },
    correct: 2,
    explanation: {
      el: 'Όταν δύο ίσες δυνάμεις τραβούν αντίθετα, η μία «σβήνει» την άλλη. Οι δυνάμεις ισορροπούν και το σχοινί δεν κουνιέται.',
      en: 'When two equal forces pull in opposite directions, one cancels the other. The forces balance and the rope does not move.',
    },
  },
  {
    q: { el: 'Αφήνεις ένα μήλο από το χέρι σου και πέφτει στο πάτωμα. Ποια δύναμη το τραβά προς τα κάτω;', en: 'You let go of an apple and it falls to the floor. Which force pulls it down?' },
    options: { el: ['Η τριβή', 'Η βαρύτητα', 'Ο αέρας', 'Ο μαγνητισμός'], en: ['Friction', 'Gravity', 'The air', 'Magnetism'] },
    correct: 1,
    explanation: {
      el: 'Η Γη τραβά όλα τα σώματα προς το κέντρο της. Αυτή η έλξη λέγεται βαρύτητα και γι\' αυτό τα πράγματα πέφτουν.',
      en: 'The Earth pulls every object towards its centre. This pull is called gravity, and that is why things fall.',
    },
  },

  // ── 10–13: friction ────────────────────────────────────────────────────────
  {
    q: { el: 'Σπρώχνεις ένα κουτί πάνω στο πάτωμα και, μόλις σταματήσεις να σπρώχνεις, το κουτί σταματά. Ποια δύναμη το σταμάτησε;', en: 'You push a box across the floor and, as soon as you stop pushing, the box stops. Which force stopped it?' },
    options: {
      el: ['Η βαρύτητα', 'Το βάρος του κουτιού', 'Η τριβή με το πάτωμα', 'Καμία δύναμη, σταμάτησε μόνο του'],
      en: ['Gravity', 'The weight of the box', 'Friction with the floor', 'No force, it stopped by itself'],
    },
    correct: 2,
    explanation: {
      el: 'Η τριβή είναι η δύναμη που φρενάρει ένα σώμα όταν τρίβεται πάνω σε μια επιφάνεια. Τίποτα δεν σταματά «μόνο του».',
      en: 'Friction is the force that slows an object down when it rubs against a surface. Nothing stops “by itself”.',
    },
  },
  {
    q: { el: 'Σε ποια επιφάνεια θα κυλήσει ένα μαρμάρινο βόλι πιο μακριά, με την ίδια ώθηση;', en: 'On which surface will a marble roll furthest with the same push?' },
    options: { el: ['Σε χαλί', 'Σε άμμο', 'Σε χλοοτάπητα', 'Σε γυαλιστερό πλακάκι'], en: ['On a carpet', 'On sand', 'On grass', 'On a shiny tile'] },
    correct: 3,
    explanation: {
      el: 'Οι λείες επιφάνειες έχουν μικρή τριβή, άρα το βόλι φρενάρει λιγότερο. Οι τραχιές (χαλί, άμμος) έχουν μεγάλη τριβή.',
      en: 'Smooth surfaces have little friction, so the marble slows down less. Rough ones (carpet, sand) have a lot of friction.',
    },
  },
  {
    q: { el: 'Γιατί τα παπούτσια για τρέξιμο έχουν αυλάκια στη σόλα;', en: 'Why do running shoes have grooves on the sole?' },
    options: {
      el: ['Για να αυξάνουν την τριβή και να μη γλιστράμε', 'Για να είναι πιο ελαφριά', 'Για να μειώνουν την τριβή και να τρέχουμε πιο γρήγορα', 'Για να κρατούν το πόδι ζεστό'],
      en: ['To increase friction so we do not slip', 'To make them lighter', 'To reduce friction so we run faster', 'To keep the foot warm'],
    },
    correct: 0,
    explanation: {
      el: 'Μερικές φορές η τριβή είναι φίλη μας! Τα αυλάκια «πιάνουν» το έδαφος, αυξάνουν την τριβή και δεν γλιστράμε.',
      en: 'Sometimes friction is our friend! The grooves grip the ground, increase friction and stop us slipping.',
    },
  },
  {
    q: { el: 'Ο μηχανικός βάζει λάδι στην αλυσίδα του ποδηλάτου. Τι πετυχαίνει;', en: 'The mechanic puts oil on the bicycle chain. What does this achieve?' },
    options: {
      el: ['Μεγαλώνει την τριβή για να κρατά καλύτερα', 'Μικραίνει την τριβή για να γυρίζει πιο εύκολα', 'Κάνει την αλυσίδα πιο βαριά', 'Σταματά τη βαρύτητα'],
      en: ['It increases friction so it grips better', 'It reduces friction so it turns more easily', 'It makes the chain heavier', 'It stops gravity'],
    },
    correct: 1,
    explanation: {
      el: 'Το λάδι κάνει τα μέταλλα να γλιστρούν μεταξύ τους. Έτσι μειώνεται η τριβή, η αλυσίδα γυρίζει εύκολα και δεν φθείρεται.',
      en: 'Oil makes the metal parts slide over each other. Friction is reduced, the chain turns easily and does not wear out.',
    },
  },

  // ── 14–16: pressure ────────────────────────────────────────────────────────
  {
    q: { el: 'Γιατί η πρόκα μπαίνει εύκολα στο ξύλο από τη μυτερή της άκρη και όχι από το κεφάλι της;', en: 'Why does a nail go into wood easily from its sharp end and not from its head?' },
    options: {
      el: ['Γιατί η μύτη είναι πιο βαριά', 'Γιατί η μύτη είναι πιο σκληρή', 'Γιατί η ίδια δύναμη σε μικρή επιφάνεια δίνει μεγάλη πίεση', 'Γιατί το ξύλο είναι μαλακό μόνο από τη μία μεριά'],
      en: ['Because the point is heavier', 'Because the point is harder', 'Because the same force on a small area gives a large pressure', 'Because the wood is soft only on one side'],
    },
    correct: 2,
    explanation: {
      el: 'Πίεση είναι το πόσο «συγκεντρωμένη» είναι μια δύναμη. Ίδια δύναμη σε πολύ μικρή επιφάνεια σημαίνει πολύ μεγάλη πίεση.',
      en: 'Pressure is how “concentrated” a force is. The same force on a very small area means a very large pressure.',
    },
  },
  {
    q: { el: 'Η Ελένη περπατά στο φρέσκο χιόνι. Με τι θα βουλιάζει λιγότερο;', en: 'Eleni walks on fresh snow. With what will she sink less?' },
    options: {
      el: ['Με μπότες με λεπτό τακούνι', 'Με πλατιά χιονοπέδιλα', 'Ξυπόλητη', 'Με πατίνια πάγου'],
      en: ['With thin-heeled boots', 'With wide snowshoes', 'Barefoot', 'With ice skates'],
    },
    correct: 1,
    explanation: {
      el: 'Το βάρος της είναι το ίδιο, αλλά τα χιονοπέδιλα το απλώνουν σε μεγάλη επιφάνεια. Μεγάλη επιφάνεια σημαίνει μικρή πίεση, άρα δεν βουλιάζει.',
      en: 'Her weight is the same, but snowshoes spread it over a large area. A large area means a small pressure, so she does not sink.',
    },
  },
  {
    q: { el: 'Δύο ίδια τούβλα στέκονται στην άμμο: το ένα όρθιο στη στενή του πλευρά, το άλλο ξαπλωμένο στην πλατιά. Ποιο πιέζει περισσότερο την άμμο;', en: 'Two identical bricks stand on sand: one upright on its narrow side, the other lying on its wide side. Which presses harder on the sand?' },
    options: {
      el: ['Το ξαπλωμένο, γιατί ακουμπά περισσότερο', 'Και τα δύο το ίδιο, γιατί έχουν ίδιο βάρος', 'Το όρθιο, γιατί το βάρος του πέφτει σε μικρότερη επιφάνεια', 'Κανένα, η άμμος δεν πιέζεται'],
      en: ['The lying one, because it touches more', 'Both the same, because they weigh the same', 'The upright one, because its weight falls on a smaller area', 'Neither, sand cannot be pressed'],
    },
    correct: 2,
    explanation: {
      el: 'Ίδιο βάρος, διαφορετική επιφάνεια. Όσο μικρότερη η επιφάνεια, τόσο μεγαλύτερη η πίεση — το όρθιο τούβλο βουλιάζει πιο πολύ.',
      en: 'Same weight, different area. The smaller the area, the greater the pressure — the upright brick sinks more.',
    },
  },

  // ── 17–18: pushes and pulls ────────────────────────────────────────────────
  {
    q: { el: 'Ποια από τις παρακάτω κινήσεις είναι έλξη (τράβηγμα);', en: 'Which of these actions is a pull?' },
    options: {
      el: ['Κλείνεις την πόρτα με το χέρι από μέσα προς τα έξω', 'Ανοίγεις ένα συρτάρι', 'Κλωτσάς μια μπάλα', 'Πατάς το κουμπί του ασανσέρ'],
      en: ['Closing a door by pushing it away from you', 'Opening a drawer', 'Kicking a ball', 'Pressing the lift button'],
    },
    correct: 1,
    explanation: {
      el: 'Έλξη είναι όταν φέρνουμε κάτι προς το μέρος μας. Το συρτάρι το τραβάμε· την μπάλα, την πόρτα και το κουμπί τα σπρώχνουμε.',
      en: 'A pull brings something towards us. We pull a drawer; we push a ball, a door and a button.',
    },
  },
  {
    q: { el: 'Ένας μάγος λέει ότι κινεί ένα βαρύ κιβώτιο χωρίς να το σπρώξει ούτε να το τραβήξει — απλώς το κοιτάζει. Γιατί δεν μπορεί να είναι αλήθεια;', en: 'A magician says he moves a heavy chest without pushing or pulling it — just by looking at it. Why can this not be true?' },
    options: {
      el: ['Γιατί τα κιβώτια δεν κινούνται ποτέ', 'Γιατί για να αλλάξει η κίνηση ενός σώματος χρειάζεται δύναμη', 'Γιατί το κιβώτιο είναι πολύ βαρύ για μάγο', 'Γιατί η βαρύτητα το κρατά κολλημένο για πάντα'],
      en: ['Because chests never move', 'Because a force is needed to change an object\'s motion', 'Because the chest is too heavy for a magician', 'Because gravity keeps it stuck forever'],
    },
    correct: 1,
    explanation: {
      el: 'Κάθε ώθηση ή έλξη είναι δύναμη. Χωρίς δύναμη, ένα ακίνητο σώμα μένει ακίνητο — κανένα βλέμμα δεν το κουνά!',
      en: 'Every push or pull is a force. Without a force, a still object stays still — no stare can move it!',
    },
  },
];
