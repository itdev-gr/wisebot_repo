/**
 * Δ' Δημοτικού · Μελέτη Περιβάλλοντος · Μελετάμε τον Φυσικό Κόσμο
 * =================================================================
 * Original questions (curriculum topics only — no textbook text). Language level: a child of 9–10.
 *
 * What the unit covers, in order:
 *   1–5   mixtures: dissolving, what a mixture is, separating with a magnet, a filter, evaporation
 *   6–8   the thermometer and temperature: what it measures, how the liquid moves, boiling point
 *   9–11  air: the "empty" glass, the dry paper experiment, air has weight
 *   12–15 ice, water, vapour: the three states, melting, evaporation, condensation
 *   16–18 light: travels in straight lines, sources of light, mirrors
 */
import type { QuizQuestion } from '../../../types';

export const GRADE4_SCIENCE_PHYSICAL_WORLD: QuizQuestion[] = [
  // ── 1–5: mixing and separating ──────────────────────────────────────────────
  {
    q: { el: 'Η Ελένη ρίχνει μια κουταλιά ζάχαρη στο νερό και ανακατεύει. Η ζάχαρη δεν φαίνεται πια. Τι έγινε;', en: 'Eleni puts a spoon of sugar in water and stirs. The sugar can no longer be seen. What happened?' },
    options: { el: ['Η ζάχαρη διαλύθηκε στο νερό', 'Η ζάχαρη έγινε πάγος', 'Η ζάχαρη πέταξε στον αέρα', 'Η ζάχαρη χάθηκε για πάντα'], en: ['The sugar dissolved in the water', 'The sugar turned into ice', 'The sugar flew into the air', 'The sugar is gone forever'] },
    correct: 0,
    explanation: {
      el: 'Η ζάχαρη διαλύθηκε: έγινε τόσο μικρά κομματάκια που δεν τα βλέπουμε, αλλά είναι ακόμα μέσα στο νερό. Δοκίμασέ το — το νερό είναι γλυκό!',
      en: 'The sugar dissolved: it broke into pieces so tiny we cannot see them, but it is still in the water. Taste it — the water is sweet!',
    },
  },
  {
    q: { el: 'Ο Νίκος ανακατεύει φακές και ρύζι σε ένα μπολ. Πώς λέγεται αυτό που έφτιαξε;', en: 'Nikos mixes lentils and rice in a bowl. What is the thing he made called?' },
    options: { el: ['Ένα διάλυμα', 'Ένα μείγμα', 'Μια καθαρή ουσία', 'Ένα υγρό'], en: ['A solution', 'A mixture', 'A pure substance', 'A liquid'] },
    correct: 1,
    explanation: {
      el: 'Όταν βάζουμε δύο ή περισσότερα υλικά μαζί, φτιάχνουμε ένα μείγμα. Οι φακές και το ρύζι δεν διαλύονται — μπορούμε να τα ξεχωρίσουμε πάλι.',
      en: 'When we put two or more materials together, we make a mixture. The lentils and rice do not dissolve — we can separate them again.',
    },
  },
  {
    q: { el: 'Στο εργαστήριο του σχολείου έπεσαν μικρά σιδερένια καρφάκια μέσα σε ένα μπολ με άμμο. Πώς θα τα βγάλει πιο εύκολα η Μαρία;', en: 'In the school lab, small iron nails fell into a bowl of sand. What is the easiest way for Maria to get them out?' },
    options: { el: ['Ρίχνοντας νερό στο μπολ', 'Ζεσταίνοντας την άμμο', 'Ανακατεύοντας πιο δυνατά', 'Με έναν μαγνήτη'], en: ['By pouring water into the bowl', 'By heating the sand', 'By stirring harder', 'With a magnet'] },
    correct: 3,
    explanation: {
      el: 'Ο μαγνήτης τραβάει το σίδερο αλλά όχι την άμμο. Έτσι χωρίζουμε εύκολα τα μέταλλα που έλκονται από τον μαγνήτη.',
      en: 'A magnet pulls iron but not sand. That is how we easily separate metals that a magnet attracts.',
    },
  },
  {
    q: { el: 'Ο Γιώργος έχει ένα ποτήρι νερό με χαλίκια μέσα. Τι θα χρησιμοποιήσει για να χωρίσει τα χαλίκια από το νερό;', en: 'Giorgos has a glass of water with small pebbles in it. What should he use to separate the pebbles from the water?' },
    options: { el: ['Έναν μαγνήτη', 'Ένα σουρωτήρι ή φίλτρο', 'Ένα θερμόμετρο', 'Ένα κουτάλι για ανακάτεμα'], en: ['A magnet', 'A sieve or filter', 'A thermometer', 'A spoon to stir with'] },
    correct: 1,
    explanation: {
      el: 'Το σουρωτήρι έχει μικρές τρύπες: το νερό περνάει, τα χαλίκια μένουν πάνω. Αυτό λέγεται φιλτράρισμα.',
      en: 'A sieve has small holes: the water goes through and the pebbles stay on top. This is called filtering.',
    },
  },
  {
    q: { el: 'Στις αλυκές παίρνουν αλάτι από το θαλασσινό νερό. Πώς το καταφέρνουν;', en: 'At the salt pans, people get salt from sea water. How do they do it?' },
    options: { el: ['Αφήνουν τον ήλιο να εξατμίσει το νερό και μένει το αλάτι', 'Περνούν το νερό από σουρωτήρι', 'Τραβούν το αλάτι με μεγάλους μαγνήτες', 'Βάζουν το νερό στην κατάψυξη'], en: ['They let the sun evaporate the water and the salt is left behind', 'They pass the water through a sieve', 'They pull the salt out with big magnets', 'They put the water in the freezer'] },
    correct: 0,
    explanation: {
      el: 'Το αλάτι είναι διαλυμένο, γι\' αυτό το σουρωτήρι δεν το πιάνει. Όταν όμως το νερό εξατμιστεί με τη ζέστη του ήλιου, το αλάτι μένει πίσω.',
      en: 'The salt is dissolved, so a sieve cannot catch it. But when the sun\'s heat evaporates the water, the salt is left behind.',
    },
  },

  // ── 6–8: thermometer and temperature ────────────────────────────────────────
  {
    q: { el: 'Τι μετράμε με το θερμόμετρο;', en: 'What do we measure with a thermometer?' },
    options: { el: ['Πόσο βαρύ είναι κάτι', 'Πόσο ζεστό ή κρύο είναι κάτι', 'Πόσο μακρύ είναι κάτι', 'Πόσο γρήγορα κινείται κάτι'], en: ['How heavy something is', 'How hot or cold something is', 'How long something is', 'How fast something moves'] },
    correct: 1,
    explanation: {
      el: 'Το θερμόμετρο μετράει τη θερμοκρασία, δηλαδή πόσο ζεστό ή κρύο είναι κάτι. Τη μετράμε σε βαθμούς Κελσίου (°C).',
      en: 'A thermometer measures temperature, which means how hot or cold something is. We measure it in degrees Celsius (°C).',
    },
  },
  {
    q: { el: 'Η Ελένη βάζει ένα θερμόμετρο μέσα σε ζεστό τσάι. Τι κάνει το υγρό μέσα στο θερμόμετρο;', en: 'Eleni puts a thermometer into hot tea. What does the liquid inside the thermometer do?' },
    options: { el: ['Κατεβαίνει προς τα κάτω', 'Μένει ακίνητο', 'Ανεβαίνει προς τα πάνω', 'Αλλάζει χρώμα'], en: ['It goes down', 'It stays still', 'It goes up', 'It changes colour'] },
    correct: 2,
    explanation: {
      el: 'Όταν το υγρό ζεσταίνεται, απλώνει και ανεβαίνει στον σωλήνα. Όσο πιο ψηλά φτάνει, τόσο πιο μεγάλη είναι η θερμοκρασία.',
      en: 'When the liquid warms up, it expands and rises up the tube. The higher it goes, the higher the temperature.',
    },
  },
  {
    q: { el: 'Ο Νίκος ζεσταίνει νερό σε μια κατσαρόλα και το βλέπει να βράζει. Τι δείχνει περίπου το θερμόμετρο;', en: 'Nikos heats water in a pot and watches it boil. What does the thermometer show, roughly?' },
    options: { el: ['0 °C', '37 °C', '50 °C', '100 °C'], en: ['0 °C', '37 °C', '50 °C', '100 °C'] },
    correct: 3,
    explanation: {
      el: 'Το νερό βράζει στους 100 °C. Στους 0 °C παγώνει, και τα 37 °C είναι περίπου η θερμοκρασία του σώματός μας.',
      en: 'Water boils at 100 °C. At 0 °C it freezes, and 37 °C is about the temperature of our body.',
    },
  },

  // ── 9–11: where is air? ─────────────────────────────────────────────────────
  {
    q: { el: 'Ένα ποτήρι πάνω στο τραπέζι φαίνεται άδειο. Τι έχει μέσα στ\' αλήθεια;', en: 'A glass on the table looks empty. What is really inside it?' },
    options: { el: ['Τίποτα απολύτως', 'Αέρα', 'Νερό που δεν φαίνεται', 'Φως μόνο'], en: ['Absolutely nothing', 'Air', 'Water we cannot see', 'Only light'] },
    correct: 1,
    explanation: {
      el: 'Ο αέρας είναι παντού γύρω μας, ακόμα κι εκεί που δεν βλέπουμε τίποτα. Το «άδειο» ποτήρι είναι γεμάτο αέρα!',
      en: 'Air is everywhere around us, even where we see nothing. The “empty” glass is full of air!',
    },
  },
  {
    q: { el: 'Η Μαρία κολλάει ένα χαρτάκι στον πάτο ενός ποτηριού, το γυρίζει ανάποδα και το βυθίζει ίσια μέσα στο νερό. Όταν το βγάζει, το χαρτάκι είναι στεγνό. Γιατί;', en: 'Maria sticks a piece of paper to the bottom of a glass, turns it upside down and pushes it straight down into water. When she pulls it out, the paper is dry. Why?' },
    options: { el: ['Ο αέρας μέσα στο ποτήρι δεν αφήνει το νερό να μπει', 'Το χαρτί δεν βρέχεται ποτέ', 'Το νερό φοβάται το γυαλί', 'Το ποτήρι είναι μαγικό'], en: ['The air inside the glass does not let the water in', 'Paper never gets wet', 'Water is afraid of glass', 'The glass is magic'] },
    correct: 0,
    explanation: {
      el: 'Το ποτήρι είναι γεμάτο αέρα, και ο αέρας πιάνει χώρο. Το νερό δεν χωράει να μπει, έτσι το χαρτάκι μένει στεγνό.',
      en: 'The glass is full of air, and air takes up space. The water cannot fit inside, so the paper stays dry.',
    },
  },
  {
    q: { el: 'Ο Γιώργος ζυγίζει ένα άδειο μπαλόνι και μετά το ίδιο μπαλόνι φουσκωμένο. Τι θα παρατηρήσει;', en: 'Giorgos weighs an empty balloon and then the same balloon blown up. What will he notice?' },
    options: { el: ['Το άδειο μπαλόνι είναι πιο βαρύ', 'Το φουσκωμένο μπαλόνι είναι λίγο πιο βαρύ', 'Ζυγίζουν ακριβώς το ίδιο', 'Το φουσκωμένο μπαλόνι δεν ζυγίζει τίποτα'], en: ['The empty balloon is heavier', 'The blown-up balloon is a little heavier', 'They weigh exactly the same', 'The blown-up balloon weighs nothing'] },
    correct: 1,
    explanation: {
      el: 'Ο αέρας έχει βάρος, αν και πολύ μικρό. Το φουσκωμένο μπαλόνι έχει περισσότερο αέρα μέσα του, άρα ζυγίζει λίγο παραπάνω.',
      en: 'Air has weight, even though it is very small. The blown-up balloon has more air inside, so it weighs a little more.',
    },
  },

  // ── 12–15: ice, water, vapour ───────────────────────────────────────────────
  {
    q: { el: 'Ο πάγος, το νερό και οι υδρατμοί είναι…', en: 'Ice, water and water vapour are…' },
    options: { el: ['τρία διαφορετικά υλικά', 'το ίδιο υλικό σε τρεις μορφές', 'τρία είδη αέρα', 'το ίδιο με το χιόνι'], en: ['three different materials', 'the same material in three forms', 'three kinds of air', 'the same thing as snow'] },
    correct: 1,
    explanation: {
      el: 'Είναι όλα νερό! Στερεό είναι ο πάγος, υγρό το νερό που πίνουμε, και αέριο οι υδρατμοί.',
      en: 'They are all water! Ice is the solid, the water we drink is the liquid, and water vapour is the gas.',
    },
  },
  {
    q: { el: 'Η Ελένη αφήνει ένα παγάκι στο πιάτο, στον ήλιο. Τι θα γίνει σε λίγη ώρα;', en: 'Eleni leaves an ice cube on a plate in the sun. What will happen after a while?' },
    options: { el: ['Θα γίνει πιο σκληρό', 'Θα μεγαλώσει', 'Θα λιώσει και θα γίνει νερό', 'Θα γίνει χιόνι'], en: ['It will get harder', 'It will grow bigger', 'It will melt and turn into water', 'It will turn into snow'] },
    correct: 2,
    explanation: {
      el: 'Όταν ο πάγος ζεσταίνεται, λιώνει: από στερεός γίνεται υγρό νερό. Αυτό λέγεται τήξη.',
      en: 'When ice warms up, it melts: it changes from a solid into liquid water. This is called melting.',
    },
  },
  {
    q: { el: 'Μετά τη βροχή υπήρχε μια λακκούβα στην αυλή. Το απόγευμα, με τον ήλιο, η λακκούβα εξαφανίστηκε. Πού πήγε το νερό;', en: 'After the rain there was a puddle in the yard. In the afternoon, with the sun out, the puddle disappeared. Where did the water go?' },
    options: { el: ['Έγινε πάγος', 'Το ήπιαν τα μυρμήγκια', 'Έγινε υδρατμοί και πήγε στον αέρα', 'Χάθηκε για πάντα'], en: ['It turned into ice', 'The ants drank it', 'It turned into water vapour and went into the air', 'It vanished forever'] },
    correct: 2,
    explanation: {
      el: 'Ο ήλιος ζέστανε το νερό και αυτό εξατμίστηκε: έγινε υδρατμοί, που είναι αόρατοι και ανεβαίνουν στον αέρα. Αυτό λέγεται εξάτμιση.',
      en: 'The sun warmed the water and it evaporated: it became water vapour, which is invisible and rises into the air. This is called evaporation.',
    },
  },
  {
    q: { el: 'Ο Νίκος βγάζει ένα κρύο μπουκάλι από το ψυγείο. Σε λίγο, το έξω μέρος του μπουκαλιού γεμίζει σταγονίτσες. Από πού ήρθαν;', en: 'Nikos takes a cold bottle out of the fridge. Soon the outside of the bottle is covered with little drops. Where did they come from?' },
    options: { el: ['Το μπουκάλι τρύπησε και βγαίνει νερό', 'Από τους υδρατμούς του αέρα που κρύωσαν πάνω στο μπουκάλι', 'Από τον ήλιο', 'Από τον πάγο που έλιωσε μέσα στο μπουκάλι'], en: ['The bottle has a hole and water is leaking out', 'From water vapour in the air that cooled on the bottle', 'From the sun', 'From ice that melted inside the bottle'] },
    correct: 1,
    explanation: {
      el: 'Ο αέρας έχει πάντα λίγους υδρατμούς. Όταν ακουμπούν το κρύο μπουκάλι, κρυώνουν και ξαναγίνονται νερό. Αυτό λέγεται συμπύκνωση.',
      en: 'The air always has a little water vapour in it. When it touches the cold bottle, it cools and turns back into water. This is called condensation.',
    },
  },

  // ── 16–18: how light travels ────────────────────────────────────────────────
  {
    q: { el: 'Η Μαρία στήνει τρία χαρτόνια με μια τρύπα στο καθένα και ένα κερί πίσω τους. Βλέπει τη φλόγα μόνο όταν οι τρεις τρύπες είναι στην ίδια ευθεία. Γιατί;', en: 'Maria lines up three cards with a hole in each and a candle behind them. She can see the flame only when the three holes are in a straight line. Why?' },
    options: { el: ['Το φως ταξιδεύει σε ευθεία γραμμή', 'Το φως κάνει ζιγκ-ζαγκ', 'Το φως είναι πολύ αργό', 'Τα χαρτόνια σβήνουν το κερί'], en: ['Light travels in a straight line', 'Light moves in a zigzag', 'Light is very slow', 'The cards put out the candle'] },
    correct: 0,
    explanation: {
      el: 'Το φως προχωράει ίσια, σε ευθεία γραμμή. Δεν μπορεί να στρίψει για να περάσει από τρύπες που δεν είναι στη σειρά.',
      en: 'Light moves straight ahead, in a straight line. It cannot turn corners to get through holes that are not lined up.',
    },
  },
  {
    q: { el: 'Ποιο από αυτά ΔΕΝ βγάζει δικό του φως;', en: 'Which of these does NOT give out its own light?' },
    options: { el: ['Ο ήλιος', 'Μια αναμμένη λάμπα', 'Ένας καθρέφτης', 'Μια φλόγα κεριού'], en: ['The sun', 'A lamp that is on', 'A mirror', 'A candle flame'] },
    correct: 2,
    explanation: {
      el: 'Ο ήλιος, η λάμπα και η φλόγα είναι πηγές φωτός. Ο καθρέφτης δεν φτιάχνει φως — απλώς στέλνει πίσω το φως που πέφτει πάνω του.',
      en: 'The sun, the lamp and the flame are sources of light. A mirror does not make light — it only sends back the light that falls on it.',
    },
  },
  {
    q: { el: 'Ο Γιώργος στέκεται στον ήλιο και βλέπει τη σκιά του στο έδαφος. Γιατί σχηματίζεται η σκιά;', en: 'Giorgos stands in the sun and sees his shadow on the ground. Why does the shadow form?' },
    options: { el: ['Επειδή το φως στρίβει γύρω από το σώμα του', 'Επειδή το έδαφος είναι σκούρο', 'Επειδή ο ήλιος κρύβεται πίσω από σύννεφο', 'Επειδή το σώμα του σταματάει το φως που ταξιδεύει ίσια'], en: ['Because light bends around his body', 'Because the ground is dark', 'Because the sun is hiding behind a cloud', 'Because his body blocks the light that travels straight'] },
    correct: 3,
    explanation: {
      el: 'Το φως ταξιδεύει ίσια και δεν περνάει μέσα από το σώμα μας. Πίσω από το σώμα δεν φτάνει φως — και εκεί βλέπουμε τη σκιά.',
      en: 'Light travels straight and cannot pass through our body. No light reaches the spot behind the body — and that is where we see the shadow.',
    },
  },
];
