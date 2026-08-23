/**
 * Ε' Δημοτικού · Φυσικά («Ερευνώ και Ανακαλύπτω») · Υλικά Σώματα & Μίγματα
 * =======================================================================
 * Original questions for a child of 10–11 (curriculum topics only — nothing from
 * ebooks.edu.gr). What the unit covers, in the order an Ε' class meets it:
 *   1–3   atoms and molecules: the tiny building blocks of everything
 *   4–7   mass and volume: what they are, how and with what we measure them
 *   8–9   density: same volume, different mass — why oil floats on water
 *   10–11 properties of materials: heat conduction, magnetism
 *   12–14 mixtures and solutions: salad vs salt water, solvent and solute
 *   15–18 dissolving, conservation of mass, filtering, evaporation
 * The correct slot is not balanced on purpose — the UI shuffles options.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE5_SCIENCE_MATERIALS_MIXTURES: QuizQuestion[] = [
  // ── 1–3: atoms and molecules ───────────────────────────────────────────────
  {
    q: { el: 'Όλα τα σώματα γύρω μας — το νερό, η πέτρα, ο αέρας — είναι φτιαγμένα από πολύ μικρά σωματίδια που λέγονται…', en: 'Everything around us — water, stone, air — is made of very tiny particles called…' },
    options: { el: ['κύτταρα', 'άτομα', 'σταγόνες', 'κόκκοι'], en: ['cells', 'atoms', 'drops', 'grains'] },
    correct: 1,
    explanation: {
      el: 'Τα άτομα είναι τα μικρότερα «τουβλάκια» της ύλης. Είναι τόσο μικρά που δεν τα βλέπουμε ούτε με απλό μικροσκόπιο.',
      en: 'Atoms are the tiniest building blocks of matter. They are so small we cannot see them even with a simple microscope.',
    },
  },
  {
    q: { el: 'Όταν δύο ή περισσότερα άτομα ενώνονται, φτιάχνουν ένα…', en: 'When two or more atoms join together, they make a…' },
    options: { el: ['κύτταρο', 'μίγμα', 'μόριο', 'διάλυμα'], en: ['cell', 'mixture', 'molecule', 'solution'] },
    correct: 2,
    explanation: {
      el: 'Τα άτομα πιάνονται χέρι-χέρι και φτιάχνουν μόρια. Ένα μόριο νερού, για παράδειγμα, είναι μια μικρή ομάδα από ενωμένα άτομα.',
      en: 'Atoms hold hands and make molecules. A water molecule, for example, is a small team of joined atoms.',
    },
  },
  {
    q: { el: 'Ο Νίκος διαβάζει ότι ένα μόριο νερού έχει 2 άτομα υδρογόνου και 1 άτομο οξυγόνου. Πόσα άτομα έχει συνολικά;', en: 'Nikos reads that a water molecule has 2 hydrogen atoms and 1 oxygen atom. How many atoms does it have in total?' },
    options: { el: ['2', '1', '4', '3'], en: ['2', '1', '4', '3'] },
    correct: 3,
    explanation: {
      el: '2 υδρογόνο + 1 οξυγόνο = 3 άτομα. Γι\' αυτό το νερό γράφεται H₂O: δύο H και ένα O.',
      en: '2 hydrogen + 1 oxygen = 3 atoms. That is why water is written H₂O: two H and one O.',
    },
  },

  // ── 4–7: mass and volume ───────────────────────────────────────────────────
  {
    q: { el: 'Η Ελένη θέλει να μετρήσει τη μάζα ενός μήλου. Ποιο όργανο θα χρησιμοποιήσει;', en: 'Eleni wants to measure the mass of an apple. Which instrument will she use?' },
    options: { el: ['θερμόμετρο', 'ζυγαριά', 'μεζούρα', 'ρολόι'], en: ['a thermometer', 'a scale', 'a tape measure', 'a clock'] },
    correct: 1,
    explanation: {
      el: 'Τη μάζα τη μετράμε με ζυγαριά. Η μάζα μάς λέει «πόση ύλη» έχει ένα σώμα.',
      en: 'We measure mass with a scale. Mass tells us how much matter a body has.',
    },
  },
  {
    q: { el: 'Ποια μονάδα χρησιμοποιούμε για τη μάζα;', en: 'Which unit do we use for mass?' },
    options: { el: ['το λίτρο', 'το μέτρο', 'το χιλιόγραμμο (κιλό)', 'ο βαθμός Κελσίου'], en: ['the litre', 'the metre', 'the kilogram', 'the degree Celsius'] },
    correct: 2,
    explanation: {
      el: 'Η μάζα μετριέται σε χιλιόγραμμα (κιλά) και γραμμάρια. Το λίτρο είναι για τον όγκο και το μέτρο για το μήκος.',
      en: 'Mass is measured in kilograms and grams. The litre is for volume and the metre is for length.',
    },
  },
  {
    q: { el: 'Ο όγκος ενός σώματος μάς δείχνει…', en: 'The volume of a body tells us…' },
    options: { el: ['πόσο χώρο πιάνει', 'πόσο βαρύ είναι', 'πόσο ζεστό είναι', 'τι χρώμα έχει'], en: ['how much space it takes up', 'how heavy it is', 'how hot it is', 'what colour it is'] },
    correct: 0,
    explanation: {
      el: 'Όγκος = ο χώρος που πιάνει ένα σώμα. Ένα μπαλόνι έχει μεγάλο όγκο αλλά μικρή μάζα!',
      en: 'Volume = the space a body takes up. A balloon has a big volume but a small mass!',
    },
  },
  {
    q: { el: 'Ο Γιώργος ρίχνει μια πέτρα σε ογκομετρικό δοχείο με 200 ml νερό. Η στάθμη ανεβαίνει στα 250 ml. Πόσος είναι ο όγκος της πέτρας;', en: 'Giorgos drops a stone into a measuring jug holding 200 ml of water. The level rises to 250 ml. What is the volume of the stone?' },
    options: { el: ['250 ml', '450 ml', '50 ml', '200 ml'], en: ['250 ml', '450 ml', '50 ml', '200 ml'] },
    correct: 2,
    explanation: {
      el: 'Η πέτρα «σπρώχνει» το νερό όσο χώρο πιάνει: 250 − 200 = 50 ml. Έτσι μετράμε τον όγκο άμορφων σωμάτων.',
      en: 'The stone pushes the water up by exactly the space it takes: 250 − 200 = 50 ml. That is how we measure the volume of odd-shaped objects.',
    },
  },

  // ── 8–9: density ───────────────────────────────────────────────────────────
  {
    q: { el: 'Ένας κύβος σίδερο και ένας κύβος φελλός έχουν ακριβώς τον ίδιο όγκο. Ο σίδερος είναι πολύ πιο βαρύς. Τι λέμε γι\' αυτόν;', en: 'An iron cube and a cork cube have exactly the same volume. The iron one is much heavier. What do we say about it?' },
    options: { el: ['έχει μεγαλύτερο όγκο', 'έχει μεγαλύτερη πυκνότητα', 'έχει μικρότερη μάζα', 'έχει μεγαλύτερη θερμοκρασία'], en: ['it has a bigger volume', 'it has a higher density', 'it has a smaller mass', 'it has a higher temperature'] },
    correct: 1,
    explanation: {
      el: 'Ίδιος όγκος, περισσότερη μάζα = μεγαλύτερη πυκνότητα. Η ύλη του σίδερου είναι πιο «στριμωγμένη».',
      en: 'Same volume, more mass = higher density. The matter in iron is packed more tightly.',
    },
  },
  {
    q: { el: 'Η Μαρία ρίχνει λάδι σε ένα ποτήρι με νερό. Το λάδι μένει από πάνω. Γιατί;', en: 'Maria pours oil into a glass of water. The oil stays on top. Why?' },
    options: { el: ['το λάδι είναι πιο ζεστό', 'το λάδι είναι πιο πυκνό από το νερό', 'το λάδι είναι λιγότερο πυκνό από το νερό', 'το νερό είναι πιο γλυκό'], en: ['oil is warmer', 'oil is denser than water', 'oil is less dense than water', 'water is sweeter'] },
    correct: 2,
    explanation: {
      el: 'Ό,τι έχει μικρότερη πυκνότητα από το νερό επιπλέει. Το λάδι είναι πιο «ελαφρύ» για τον ίδιο όγκο, γι\' αυτό μένει πάνω.',
      en: 'Anything less dense than water floats. Oil is lighter for the same volume, so it stays on top.',
    },
  },

  // ── 10–11: properties of materials ────────────────────────────────────────
  {
    q: { el: 'Ο Νίκος ανακατεύει ζεστή σούπα. Ποιο κουτάλι θα ζεσταθεί πιο γρήγορα στο χέρι του;', en: 'Nikos is stirring hot soup. Which spoon will get hot in his hand fastest?' },
    options: { el: ['το ξύλινο', 'το πλαστικό', 'το μεταλλικό', 'όλα το ίδιο'], en: ['the wooden one', 'the plastic one', 'the metal one', 'they are all the same'] },
    correct: 2,
    explanation: {
      el: 'Τα μέταλλα είναι καλοί αγωγοί της θερμότητας: τη μεταφέρουν γρήγορα. Το ξύλο και το πλαστικό είναι μονωτές.',
      en: 'Metals are good conductors of heat: they pass it along quickly. Wood and plastic are insulators.',
    },
  },
  {
    q: { el: 'Η Ελένη πλησιάζει έναν μαγνήτη σε διάφορα αντικείμενα. Ποιο θα κολλήσει πάνω του;', en: 'Eleni brings a magnet near different objects. Which one will stick to it?' },
    options: { el: ['ένα σιδερένιο καρφί', 'ένας ξύλινος κύβος', 'μια πλαστική χάντρα', 'ένα γυάλινο βάζο'], en: ['an iron nail', 'a wooden cube', 'a plastic bead', 'a glass jar'] },
    correct: 0,
    explanation: {
      el: 'Ο μαγνήτης τραβάει τον σίδηρο. Το ξύλο, το πλαστικό και το γυαλί δεν είναι μαγνητικά υλικά.',
      en: 'A magnet pulls iron. Wood, plastic and glass are not magnetic materials.',
    },
  },

  // ── 12–14: mixtures and solutions ─────────────────────────────────────────
  {
    q: { el: 'Ο Γιώργος φτιάχνει μια σαλάτα με ντομάτα, αγγούρι και ελιές. Η σαλάτα είναι…', en: 'Giorgos makes a salad with tomato, cucumber and olives. The salad is…' },
    options: { el: ['ένα άτομο', 'ένα μίγμα', 'ένα μόριο', 'ένα καθαρό υλικό'], en: ['an atom', 'a mixture', 'a molecule', 'a pure substance'] },
    correct: 1,
    explanation: {
      el: 'Μίγμα = δύο ή περισσότερα υλικά μαζί, που το καθένα κρατάει τις ιδιότητές του. Μπορείς να ξεχωρίσεις τις ελιές όποτε θέλεις!',
      en: 'A mixture = two or more materials together, each keeping its own properties. You can pick the olives out any time!',
    },
  },
  {
    q: { el: 'Σε ποιο ποτήρι έχουμε διάλυμα;', en: 'In which glass do we have a solution?' },
    options: { el: ['νερό με άμμο', 'νερό με χαλίκια', 'νερό με αλάτι', 'νερό με κομματάκια φελλό'], en: ['water with sand', 'water with pebbles', 'water with salt', 'water with bits of cork'] },
    correct: 2,
    explanation: {
      el: 'Το αλάτι διαλύεται και «χάνεται» μέσα στο νερό — αυτό είναι διάλυμα. Η άμμος, τα χαλίκια και ο φελλός μένουν ορατά.',
      en: 'Salt dissolves and seems to vanish into the water — that is a solution. Sand, pebbles and cork stay visible.',
    },
  },
  {
    q: { el: 'Στο αλατόνερο, το νερό είναι…', en: 'In salt water, the water is the…' },
    options: { el: ['ο διαλύτης', 'η διαλυμένη ουσία', 'το ίζημα', 'το φίλτρο'], en: ['solvent', 'solute', 'sediment', 'filter'] },
    correct: 0,
    explanation: {
      el: 'Ο διαλύτης είναι το υγρό που διαλύει (το νερό). Η διαλυμένη ουσία είναι αυτό που διαλύεται (το αλάτι).',
      en: 'The solvent is the liquid that does the dissolving (water). The solute is what gets dissolved (salt).',
    },
  },

  // ── 15–18: dissolving, filtering, evaporation ─────────────────────────────
  {
    q: { el: 'Η Μαρία θέλει η ζάχαρη να διαλυθεί πιο γρήγορα στο γάλα της. Τι τη βοηθάει;', en: 'Maria wants the sugar to dissolve faster in her milk. What helps?' },
    options: { el: ['να βάλει το γάλα στο ψυγείο', 'να ανακατέψει και να ζεστάνει το γάλα', 'να βάλει περισσότερη ζάχαρη', 'να μην το αγγίξει καθόλου'], en: ['putting the milk in the fridge', 'stirring and warming the milk', 'adding more sugar', 'not touching it at all'] },
    correct: 1,
    explanation: {
      el: 'Το ανακάτεμα και η ζέστη κάνουν τη διάλυση πιο γρήγορη. Βοηθάει και αν η ζάχαρη είναι σε μικρούς κόκκους.',
      en: 'Stirring and heat make dissolving faster. Small sugar grains help too.',
    },
  },
  {
    q: { el: 'Ο Νίκος ζυγίζει 100 g νερό και 10 g ζάχαρη. Τα ανακατεύει και η ζάχαρη διαλύεται. Πόσο ζυγίζει τώρα το διάλυμα;', en: 'Nikos weighs 100 g of water and 10 g of sugar. He mixes them and the sugar dissolves. How much does the solution weigh now?' },
    options: { el: ['100 g', '90 g', '110 g', '10 g'], en: ['100 g', '90 g', '110 g', '10 g'] },
    correct: 2,
    explanation: {
      el: 'Η ζάχαρη δεν εξαφανίστηκε — απλώς έγινε πολύ μικρά κομματάκια ανάμεσα στα μόρια του νερού. 100 + 10 = 110 g.',
      en: 'The sugar did not disappear — it just broke into tiny bits between the water molecules. 100 + 10 = 110 g.',
    },
  },
  {
    q: { el: 'Η Ελένη έχει νερό ανακατεμένο με άμμο. Ποιος είναι ο καλύτερος τρόπος να τα χωρίσει;', en: 'Eleni has water mixed with sand. What is the best way to separate them?' },
    options: { el: ['με διήθηση (φίλτρο)', 'με μαγνήτη', 'ανακατεύοντας πιο δυνατά', 'βάζοντάς το στην κατάψυξη'], en: ['filtering it', 'using a magnet', 'stirring harder', 'putting it in the freezer'] },
    correct: 0,
    explanation: {
      el: 'Η άμμος δεν διαλύεται, άρα μένει πάνω στο φίλτρο ενώ το νερό περνάει. Αυτό λέγεται διήθηση.',
      en: 'Sand does not dissolve, so it stays on the filter while the water passes through. This is called filtering.',
    },
  },
  {
    q: { el: 'Ο Γιώργος περνάει αλατόνερο από φίλτρο, αλλά το αλάτι δεν μένει στο φίλτρο. Πώς μπορεί να πάρει το αλάτι πίσω;', en: 'Giorgos pours salt water through a filter, but the salt does not stay on the filter. How can he get the salt back?' },
    options: { el: ['με πιο πυκνό φίλτρο', 'με μαγνήτη', 'αφήνοντας το νερό να εξατμιστεί', 'ρίχνοντας περισσότερο νερό'], en: ['with a finer filter', 'with a magnet', 'by letting the water evaporate', 'by adding more water'] },
    correct: 2,
    explanation: {
      el: 'Το διαλυμένο αλάτι περνάει από κάθε φίλτρο. Αν όμως το νερό εξατμιστεί, το αλάτι μένει πίσω — έτσι το παίρνουν στις αλυκές!',
      en: 'Dissolved salt passes through any filter. But if the water evaporates, the salt is left behind — that is how salt pans work!',
    },
  },
];
