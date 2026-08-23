/**
 * Ε' Δημοτικού · Φυσικά («Ερευνώ και Ανακαλύπτω») · Θερμότητα
 * ==========================================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a child of 10–11.
 *
 * What the unit covers, in order:
 *   1–4   temperature vs heat: the thermometer, °C, heat flows from warm to cold
 *   5–7   melting and freezing: 0 °C, solid ↔ liquid, water expands when it freezes
 *   8–11  evaporation and boiling: 100 °C, what makes a puddle dry faster, steam
 *   12–14 condensation: cold glass, foggy mirror, clouds — the water cycle
 *   15–18 expansion and contraction: metals, bridges, rails, the tight jar lid
 */
import type { QuizQuestion } from '../../../types';

export const GRADE5_SCIENCE_HEAT: QuizQuestion[] = [
  // ── 1–4: temperature vs heat ──────────────────────────────────────────────
  {
    q: { el: 'Με ποιο όργανο μετράμε τη θερμοκρασία;', en: 'Which instrument do we use to measure temperature?' },
    options: { el: ['Με τη ζυγαριά', 'Με το θερμόμετρο', 'Με τον χάρακα', 'Με το ρολόι'], en: ['A scale', 'A thermometer', 'A ruler', 'A clock'] },
    correct: 1,
    explanation: {
      el: 'Το θερμόμετρο μετράει τη θερμοκρασία, δηλαδή πόσο ζεστό ή κρύο είναι κάτι.',
      en: 'A thermometer measures temperature, that is how hot or cold something is.',
    },
  },
  {
    q: { el: 'Πώς λέγεται η μονάδα που δείχνει το θερμόμετρο στην Ελλάδα;', en: 'What is the unit a thermometer shows in Greece?' },
    options: { el: ['Μέτρα', 'Κιλά', 'Βαθμοί Κελσίου (°C)', 'Λίτρα'], en: ['Metres', 'Kilograms', 'Degrees Celsius (°C)', 'Litres'] },
    correct: 2,
    explanation: {
      el: 'Η θερμοκρασία μετριέται σε βαθμούς Κελσίου και γράφεται °C. Μια ζεστή μέρα έχει περίπου 30 °C.',
      en: 'Temperature is measured in degrees Celsius, written °C. A hot day is about 30 °C.',
    },
  },
  {
    q: { el: 'Ο Νίκος βάζει ένα ζεστό κουτάλι μέσα σε ένα ποτήρι με κρύο νερό. Πού πηγαίνει η θερμότητα;', en: 'Nikos puts a hot spoon into a glass of cold water. Where does the heat go?' },
    options: { el: ['Από το κουτάλι στο νερό', 'Από το νερό στο κουτάλι', 'Πουθενά, μένει στο κουτάλι', 'Στον αέρα μόνο'], en: ['From the spoon to the water', 'From the water to the spoon', 'Nowhere, it stays in the spoon', 'Only into the air'] },
    correct: 0,
    explanation: {
      el: 'Η θερμότητα πηγαίνει πάντα από το πιο ζεστό σώμα στο πιο κρύο. Το κουτάλι κρυώνει και το νερό ζεσταίνεται λίγο.',
      en: 'Heat always moves from the hotter object to the colder one. The spoon cools down and the water warms up a little.',
    },
  },
  {
    q: { el: 'Η Ελένη λέει: «Ο ήλιος δίνει θερμότητα στη θάλασσα και η θερμοκρασία της ανεβαίνει.» Τι διαφορά έχουν οι δύο λέξεις;', en: 'Eleni says: "The sun gives heat to the sea and its temperature goes up." What is the difference between the two words?' },
    options: { el: ['Είναι ακριβώς το ίδιο πράγμα', 'Η θερμότητα είναι ενέργεια που περνάει από σώμα σε σώμα· η θερμοκρασία δείχνει πόσο ζεστό είναι κάτι', 'Η θερμοκρασία είναι ενέργεια· η θερμότητα είναι ένα όργανο', 'Η θερμότητα υπάρχει μόνο το καλοκαίρι'], en: ['They are exactly the same thing', 'Heat is energy passing from one object to another; temperature shows how hot something is', 'Temperature is energy; heat is an instrument', 'Heat only exists in summer'] },
    correct: 1,
    explanation: {
      el: 'Η θερμότητα είναι ενέργεια που ταξιδεύει από το ζεστό στο κρύο. Η θερμοκρασία είναι ο αριθμός που δείχνει το θερμόμετρο.',
      en: 'Heat is energy that travels from hot to cold. Temperature is the number the thermometer shows.',
    },
  },

  // ── 5–7: melting and freezing ─────────────────────────────────────────────
  {
    q: { el: 'Ο Γιώργος αφήνει ένα παγάκι στο τραπέζι. Σε λίγο γίνεται νερό. Πώς λέγεται αυτό;', en: 'Giorgos leaves an ice cube on the table. Soon it turns into water. What is this called?' },
    options: { el: ['Πήξη', 'Εξάτμιση', 'Τήξη', 'Βρασμός'], en: ['Freezing', 'Evaporation', 'Melting', 'Boiling'] },
    correct: 2,
    explanation: {
      el: 'Όταν ένα στερεό παίρνει θερμότητα και γίνεται υγρό, λέμε ότι λιώνει. Αυτό λέγεται τήξη.',
      en: 'When a solid takes in heat and becomes a liquid, we say it melts. This is called melting.',
    },
  },
  {
    q: { el: 'Σε ποια θερμοκρασία παγώνει το νερό;', en: 'At what temperature does water freeze?' },
    options: { el: ['Στους 100 °C', 'Στους 0 °C', 'Στους 10 °C', 'Στους −100 °C'], en: ['At 100 °C', 'At 0 °C', 'At 10 °C', 'At −100 °C'] },
    correct: 1,
    explanation: {
      el: 'Το νερό παγώνει στους 0 °C. Στην ίδια θερμοκρασία ο πάγος λιώνει — είναι το «σύνορο» ανάμεσα σε πάγο και νερό.',
      en: 'Water freezes at 0 °C. At the same temperature ice melts — it is the "border" between ice and water.',
    },
  },
  {
    q: { el: 'Η Μαρία γεμίζει ένα πλαστικό μπουκάλι μέχρι πάνω με νερό και το βάζει στην κατάψυξη. Το πρωί το μπουκάλι έχει σκάσει. Γιατί;', en: 'Maria fills a plastic bottle to the top with water and puts it in the freezer. In the morning the bottle has burst. Why?' },
    options: { el: ['Το νερό, όταν παγώνει, πιάνει περισσότερο χώρο', 'Το νερό, όταν παγώνει, γίνεται πιο βαρύ', 'Η κατάψυξη τρύπησε το μπουκάλι', 'Ο πάγος είναι πιο ζεστός από το νερό'], en: ['Water takes up more space when it freezes', 'Water becomes heavier when it freezes', 'The freezer made a hole in the bottle', 'Ice is hotter than water'] },
    correct: 0,
    explanation: {
      el: 'Το νερό είναι ξεχωριστό: όταν γίνεται πάγος, φουσκώνει και πιάνει περισσότερο χώρο. Γι\' αυτό το γεμάτο μπουκάλι σκάει.',
      en: 'Water is special: when it turns into ice it swells and takes up more space. That is why the full bottle bursts.',
    },
  },

  // ── 8–11: evaporation and boiling ─────────────────────────────────────────
  {
    q: { el: 'Μετά τη βροχή, η λακκούβα στην αυλή εξαφανίζεται σιγά σιγά. Πού πήγε το νερό;', en: 'After the rain, the puddle in the yard slowly disappears. Where did the water go?' },
    options: { el: ['Έγινε υδρατμοί και ανέβηκε στον αέρα', 'Το ήπιε το χώμα όλο', 'Πάγωσε και έγινε αόρατο', 'Το πήρε ο ήλιος μαζί του'], en: ['It turned into water vapour and rose into the air', 'The soil drank all of it', 'It froze and became invisible', 'The sun took it away with it'] },
    correct: 0,
    explanation: {
      el: 'Το νερό γίνεται αέριο (υδρατμοί) και ανακατεύεται με τον αέρα. Αυτό λέγεται εξάτμιση.',
      en: 'The water turns into a gas (water vapour) and mixes with the air. This is called evaporation.',
    },
  },
  {
    q: { el: 'Η Ελένη απλώνει δύο ίδια βρεγμένα μπλουζάκια: ένα στον ήλιο με αέρα και ένα σε σκιερή γωνιά χωρίς αέρα. Ποιο θα στεγνώσει πρώτο;', en: 'Eleni hangs two identical wet T-shirts: one in the sun with a breeze and one in a shady corner with no wind. Which will dry first?' },
    options: { el: ['Αυτό στη σκιά', 'Αυτό στον ήλιο με αέρα', 'Και τα δύο την ίδια στιγμή', 'Κανένα, τα μπλουζάκια δεν στεγνώνουν μόνα τους'], en: ['The one in the shade', 'The one in the sun with a breeze', 'Both at the same time', 'Neither, T-shirts do not dry by themselves'] },
    correct: 1,
    explanation: {
      el: 'Η εξάτμιση γίνεται πιο γρήγορα όταν έχει ζέστη και αέρα. Γι\' αυτό απλώνουμε τα ρούχα έξω στον ήλιο.',
      en: 'Evaporation is faster when it is warm and windy. That is why we hang clothes outside in the sun.',
    },
  },
  {
    q: { el: 'Σε ποια θερμοκρασία βράζει το νερό στην κατσαρόλα;', en: 'At what temperature does water boil in a pot?' },
    options: { el: ['Στους 50 °C', 'Στους 0 °C', 'Στους 200 °C', 'Στους 100 °C'], en: ['At 50 °C', 'At 0 °C', 'At 200 °C', 'At 100 °C'] },
    correct: 3,
    explanation: {
      el: 'Το νερό βράζει στους 100 °C. Όσο βράζει, η θερμοκρασία του μένει στους 100 °C, ακόμα κι αν δυναμώσουμε τη φωτιά.',
      en: 'Water boils at 100 °C. While it boils, its temperature stays at 100 °C, even if we turn up the heat.',
    },
  },
  {
    q: { el: 'Ποια είναι η διαφορά ανάμεσα στην εξάτμιση και τον βρασμό;', en: 'What is the difference between evaporation and boiling?' },
    options: { el: ['Δεν υπάρχει διαφορά, είναι η ίδια λέξη', 'Στην εξάτμιση το νερό παγώνει, στον βρασμό λιώνει', 'Η εξάτμιση γίνεται μόνο από την επιφάνεια και σε κάθε θερμοκρασία· ο βρασμός γίνεται σε όλο το νερό στους 100 °C', 'Ο βρασμός γίνεται μόνο το χειμώνα'], en: ['There is no difference, it is the same word', 'In evaporation water freezes, in boiling it melts', 'Evaporation happens only from the surface and at any temperature; boiling happens in all the water at 100 °C', 'Boiling happens only in winter'] },
    correct: 2,
    explanation: {
      el: 'Η εξάτμιση είναι αργή και γίνεται από την επιφάνεια, ακόμα και σε κρύο νερό. Ο βρασμός είναι γρήγορος, με φουσκάλες παντού, στους 100 °C.',
      en: 'Evaporation is slow and happens from the surface, even in cold water. Boiling is fast, with bubbles everywhere, at 100 °C.',
    },
  },

  // ── 12–14: condensation ───────────────────────────────────────────────────
  {
    q: { el: 'Ο Νίκος βγάζει ένα παγωμένο μπουκάλι από το ψυγείο. Σε λίγο το μπουκάλι είναι γεμάτο σταγόνες απ\' έξω. Από πού ήρθαν;', en: 'Nikos takes an ice-cold bottle out of the fridge. Soon the outside of the bottle is covered in drops. Where did they come from?' },
    options: { el: ['Το νερό πέρασε μέσα από το πλαστικό', 'Οι υδρατμοί του αέρα κρύωσαν πάνω στο μπουκάλι και έγιναν νερό', 'Το μπουκάλι ιδρώνει όπως οι άνθρωποι', 'Έσταξε νερό από το ψυγείο'], en: ['The water passed through the plastic', 'Water vapour in the air cooled on the bottle and turned into water', 'The bottle sweats like people do', 'Water dripped from the fridge'] },
    correct: 1,
    explanation: {
      el: 'Ο αέρας έχει πάντα αόρατους υδρατμούς. Όταν ακουμπήσουν κάτι κρύο, γίνονται πάλι νερό. Αυτό λέγεται υγροποίηση.',
      en: 'Air always holds invisible water vapour. When it touches something cold, it turns back into water. This is called condensation.',
    },
  },
  {
    q: { el: 'Μετά από ζεστό ντους, ο καθρέφτης του μπάνιου θολώνει. Ποια αλλαγή έγινε στο νερό;', en: 'After a hot shower, the bathroom mirror fogs up. Which change happened to the water?' },
    options: { el: ['Από υγρό έγινε στερεό', 'Από στερεό έγινε υγρό', 'Από αέριο έγινε υγρό', 'Από υγρό έγινε αέριο'], en: ['From liquid to solid', 'From solid to liquid', 'From gas to liquid', 'From liquid to gas'] },
    correct: 2,
    explanation: {
      el: 'Οι ζεστοί υδρατμοί (αέριο) ακούμπησαν τον κρύο καθρέφτη και έγιναν μικροσκοπικές σταγόνες (υγρό). Γι\' αυτό θολώνει.',
      en: 'The warm water vapour (gas) touched the cold mirror and became tiny drops (liquid). That is why it fogs up.',
    },
  },
  {
    q: { el: 'Ποια είναι η σωστή σειρά του ταξιδιού μιας σταγόνας: από τη θάλασσα μέχρι το σύννεφο;', en: 'What is the correct order of a drop\'s journey from the sea to a cloud?' },
    options: { el: ['Πήξη → τήξη → βροχή', 'Εξάτμιση → ο υδρατμός ανεβαίνει → υγροποίηση ψηλά όπου κάνει κρύο', 'Βρασμός της θάλασσας → σύννεφο', 'Υγροποίηση → εξάτμιση → πάγος'], en: ['Freezing → melting → rain', 'Evaporation → the vapour rises → condensation up high where it is cold', 'The sea boils → cloud', 'Condensation → evaporation → ice'] },
    correct: 1,
    explanation: {
      el: 'Ο ήλιος εξατμίζει νερό από τη θάλασσα. Οι υδρατμοί ανεβαίνουν, ψηλά κάνει κρύο, υγροποιούνται και φτιάχνουν σύννεφα.',
      en: 'The sun evaporates water from the sea. The vapour rises, it is cold up high, it condenses and forms clouds.',
    },
  },

  // ── 15–18: expansion and contraction ──────────────────────────────────────
  {
    q: { el: 'Τι παθαίνουν τα περισσότερα σώματα όταν ζεσταίνονται;', en: 'What happens to most objects when they are heated?' },
    options: { el: ['Μικραίνουν λίγο', 'Μεγαλώνουν λίγο (διαστέλλονται)', 'Γίνονται πιο βαριά', 'Δεν αλλάζουν καθόλου'], en: ['They get a little smaller', 'They get a little bigger (they expand)', 'They get heavier', 'They do not change at all'] },
    correct: 1,
    explanation: {
      el: 'Με τη θερμότητα τα σώματα διαστέλλονται, δηλαδή μεγαλώνουν λίγο. Όταν κρυώνουν, συστέλλονται, δηλαδή μικραίνουν πάλι.',
      en: 'With heat, objects expand, that is they get a little bigger. When they cool, they contract, that is they shrink again.',
    },
  },
  {
    q: { el: 'Το μεταλλικό καπάκι σε ένα βάζο μαρμελάδα δεν ανοίγει. Η μαμά της Μαρίας βάζει το καπάκι κάτω από ζεστό νερό και ανοίγει εύκολα. Γιατί;', en: 'The metal lid on a jam jar will not open. Maria\'s mum runs hot water over the lid and it opens easily. Why?' },
    options: { el: ['Το ζεστό νερό έλιωσε την κόλλα', 'Το μέταλλο ζεστάθηκε, διαστάλθηκε και χαλάρωσε', 'Το ζεστό νερό έκανε το γυαλί μικρότερο', 'Το νερό μπήκε μέσα στο βάζο'], en: ['The hot water melted the glue', 'The metal warmed up, expanded and loosened', 'The hot water made the glass smaller', 'The water got inside the jar'] },
    correct: 1,
    explanation: {
      el: 'Το μεταλλικό καπάκι διαστέλλεται πιο γρήγορα από το γυαλί. Μεγαλώνει λίγο, «χαλαρώνει» και ξεβιδώνει εύκολα.',
      en: 'The metal lid expands faster than the glass. It gets slightly bigger, loosens and unscrews easily.',
    },
  },
  {
    q: { el: 'Οι μηχανικοί αφήνουν μικρά κενά ανάμεσα στα κομμάτια μιας μεγάλης γέφυρας. Γιατί;', en: 'Engineers leave small gaps between the pieces of a large bridge. Why?' },
    options: { el: ['Για να περνάει το νερό της βροχής', 'Για να έχει χώρο η γέφυρα να διαστέλλεται το καλοκαίρι χωρίς να στραβώσει', 'Για να είναι πιο ελαφριά η γέφυρα', 'Επειδή δεν τους έφτασαν τα υλικά'], en: ['So rainwater can pass through', 'So the bridge has room to expand in summer without bending', 'To make the bridge lighter', 'Because they ran out of materials'] },
    correct: 1,
    explanation: {
      el: 'Τη ζέστη η γέφυρα διαστέλλεται και μακραίνει λίγο. Τα κενά της δίνουν χώρο, αλλιώς θα στράβωνε ή θα έσπαγε.',
      en: 'In the heat the bridge expands and gets slightly longer. The gaps give it room, otherwise it would bend or crack.',
    },
  },
  {
    q: { el: 'Ο Γιώργος κάνει ένα πείραμα: μια μεταλλική μπάλα περνάει ίσα ίσα μέσα από έναν μεταλλικό κρίκο. Τη ζεσταίνει με φλόγα και τώρα δεν περνάει. Τι πρέπει να κάνει για να περάσει ξανά;', en: 'Giorgos does an experiment: a metal ball just fits through a metal ring. He heats the ball with a flame and now it will not go through. What should he do to make it fit again?' },
    options: { el: ['Να ζεστάνει την μπάλα κι άλλο', 'Να αφήσει την μπάλα να κρυώσει, ώστε να συσταλεί', 'Να κρυώσει τον κρίκο, για να μικρύνει', 'Να βρέξει την μπάλα με ζεστό νερό'], en: ['Heat the ball even more', 'Let the ball cool down so that it contracts', 'Cool the ring so that it gets smaller', 'Wet the ball with hot water'] },
    correct: 1,
    explanation: {
      el: 'Η ζεστή μπάλα διαστάλθηκε και μεγάλωσε. Όταν κρυώσει, θα συσταλεί, θα ξαναγίνει μικρή και θα περάσει από τον κρίκο.',
      en: 'The hot ball expanded and got bigger. When it cools it will contract, become small again and pass through the ring.',
    },
  },
];
