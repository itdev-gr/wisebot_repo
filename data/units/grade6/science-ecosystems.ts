/**
 * ΣΤ' Δημοτικού · Φυσικά («Ερευνώ και Ανακαλύπτω») · Οικοσυστήματα
 * ===================================================================
 * Original questions on curriculum topics only (nothing from ebooks.edu.gr).
 * Language level: a child of 11–12.
 *
 * What the unit covers, in order:
 *   1–4   what an ecosystem is, and how a food chain works (arrows, start, end)
 *   5–7   food webs: many chains joined, what happens when one link disappears
 *   8–9   producers: plants make their own food with sunlight (photosynthesis)
 *   10–12 consumers: herbivores, carnivores, omnivores, top predators
 *   13–14 decomposers: fungi and bacteria recycle what dies
 *   15–18 humans and ecosystems: pollution, overfishing, invasive species, protection
 */
import type { QuizQuestion } from '../../../types';

export const GRADE6_SCIENCE_ECOSYSTEMS: QuizQuestion[] = [
  // ── 1–4: ecosystems and food chains ───────────────────────────────────────
  {
    q: { el: 'Τι ονομάζουμε «οικοσύστημα»;', en: 'What do we call an "ecosystem"?' },
    options: {
      el: ['Μόνο τα ζώα μιας περιοχής', 'Τους ζωντανούς οργανισμούς μιας περιοχής μαζί με το περιβάλλον τους', 'Μόνο τα φυτά ενός δάσους', 'Έναν ζωολογικό κήπο'],
      en: ['Only the animals of an area', 'The living things of an area together with their environment', 'Only the plants of a forest', 'A zoo'],
    },
    correct: 1,
    explanation: {
      el: 'Οικοσύστημα = τα φυτά, τα ζώα και οι μικροοργανισμοί ενός τόπου μαζί με το νερό, το χώμα, τον αέρα και το φως. Όλα συνδέονται μεταξύ τους.',
      en: 'An ecosystem is all the plants, animals and microbes of a place together with its water, soil, air and light. Everything is connected.',
    },
  },
  {
    q: { el: 'Σε μια τροφική αλυσίδα, τι δείχνει το βέλος →;', en: 'In a food chain, what does the arrow → show?' },
    options: {
      el: ['Ποιος είναι πιο μεγάλος', 'Ποιος τρέχει πιο γρήγορα', 'Προς τα πού πηγαίνει η τροφή (ποιος τρώγεται από ποιον)', 'Ποιος ζει πιο πολλά χρόνια'],
      en: ['Who is bigger', 'Who runs faster', 'Where the food goes (who is eaten by whom)', 'Who lives longer'],
    },
    correct: 2,
    explanation: {
      el: 'Το βέλος δείχνει την κατεύθυνση της τροφής: «χορτάρι → λαγός» σημαίνει ότι ο λαγός τρώει το χορτάρι.',
      en: 'The arrow points the way the food goes: "grass → rabbit" means the rabbit eats the grass.',
    },
  },
  {
    q: { el: 'Με ποιον οργανισμό ξεκινά σχεδόν πάντα μια τροφική αλυσίδα;', en: 'Which organism does a food chain almost always start with?' },
    options: {
      el: ['Με ένα φυτό', 'Με ένα σαρκοφάγο ζώο', 'Με έναν άνθρωπο', 'Με ένα μικρό έντομο'],
      en: ['A plant', 'A meat-eating animal', 'A human', 'A small insect'],
    },
    correct: 0,
    explanation: {
      el: 'Η αλυσίδα ξεκινά από ένα φυτό, γιατί τα φυτά φτιάχνουν μόνα τους την τροφή τους με το φως του ήλιου. Όλοι οι άλλοι τρώνε κάτι.',
      en: 'A chain starts with a plant, because plants make their own food from sunlight. Everyone else has to eat something.',
    },
  },
  {
    q: { el: 'Ποια τροφική αλυσίδα είναι γραμμένη σωστά;', en: 'Which food chain is written correctly?' },
    options: {
      el: ['Αλεπού → λαγός → τριφύλλι', 'Τριφύλλι → λαγός → αλεπού', 'Λαγός → τριφύλλι → αλεπού', 'Τριφύλλι → αλεπού → λαγός'],
      en: ['Fox → rabbit → clover', 'Clover → rabbit → fox', 'Rabbit → clover → fox', 'Clover → fox → rabbit'],
    },
    correct: 1,
    explanation: {
      el: 'Το τριφύλλι το τρώει ο λαγός και τον λαγό τον τρώει η αλεπού. Το βέλος πάει πάντα από αυτόν που τρώγεται σε αυτόν που τρώει.',
      en: 'The rabbit eats the clover and the fox eats the rabbit. The arrow always goes from the one being eaten to the one eating.',
    },
  },

  // ── 5–7: food webs ────────────────────────────────────────────────────────
  {
    q: { el: 'Τι είναι το «τροφικό πλέγμα»;', en: 'What is a "food web"?' },
    options: {
      el: ['Μια τροφική αλυσίδα με πολύ μεγάλα ζώα', 'Ο ιστός της αράχνης', 'Πολλές τροφικές αλυσίδες που ενώνονται μεταξύ τους', 'Ένας κατάλογος με τις τροφές ενός ζώου'],
      en: ['A food chain with very big animals', 'A spider\'s web', 'Many food chains joined together', 'A list of the foods one animal eats'],
    },
    correct: 2,
    explanation: {
      el: 'Στη φύση τα περισσότερα ζώα τρώνε πολλά διαφορετικά πράγματα. Όταν ενώσουμε όλες τις αλυσίδες, βγαίνει ένα πλέγμα σαν δίχτυ.',
      en: 'In nature most animals eat many different things. When we join all the chains, we get a web, like a net.',
    },
  },
  {
    q: { el: 'Γιατί στα τροφικά πλέγματα η κουκουβάγια μπορεί να ανήκει σε πολλές αλυσίδες μαζί;', en: 'Why can an owl belong to many food chains at once in a food web?' },
    options: {
      el: ['Γιατί πετάει ψηλά', 'Γιατί τρώει διάφορα ζώα: ποντίκια, έντομα, μικρά πουλιά', 'Γιατί είναι νυχτόβια', 'Γιατί ζει σε πολλά δάση'],
      en: ['Because it flies high', 'Because it eats different animals: mice, insects, small birds', 'Because it is awake at night', 'Because it lives in many forests'],
    },
    correct: 1,
    explanation: {
      el: 'Κάθε τροφή της κουκουβάγιας είναι κι άλλη μια αλυσίδα. Ένα ζώο που τρώει πολλά πράγματα βρίσκεται σε πολλά σημεία του πλέγματος.',
      en: 'Each food the owl eats is another chain. An animal that eats many things sits in many places of the web.',
    },
  },
  {
    q: { el: 'Σε ένα λιβάδι εξαφανίζονται ξαφνικά όλα τα ποντίκια. Τι θα συμβεί πιθανότατα στις αλεπούδες που τα έτρωγαν;', en: 'All the mice in a meadow suddenly disappear. What will most likely happen to the foxes that ate them?' },
    options: {
      el: ['Θα αρχίσουν να τρώνε χορτάρι', 'Δεν θα αλλάξει τίποτα', 'Θα γίνουν περισσότερες', 'Θα λιγοστέψουν ή θα ψάξουν άλλη τροφή'],
      en: ['They will start eating grass', 'Nothing will change', 'There will be more of them', 'They will become fewer or look for other food'],
    },
    correct: 3,
    explanation: {
      el: 'Όταν χάνεται ένας κρίκος, επηρεάζονται όλοι οι άλλοι. Με λιγότερη τροφή, οι αλεπούδες λιγοστεύουν ή στρέφονται σε λαγούς και πουλιά.',
      en: 'When one link is lost, all the others are affected. With less food, the foxes become fewer or turn to rabbits and birds.',
    },
  },

  // ── 8–9: producers ────────────────────────────────────────────────────────
  {
    q: { el: 'Ποιοι οργανισμοί λέγονται «παραγωγοί»;', en: 'Which organisms are called "producers"?' },
    options: {
      el: ['Τα φυτά, που φτιάχνουν μόνα τους την τροφή τους', 'Τα ζώα που γεννούν πολλά μικρά', 'Οι αγρότες που καλλιεργούν χωράφια', 'Τα ζώα που κυνηγούν'],
      en: ['Plants, which make their own food', 'Animals that have many babies', 'Farmers who grow crops', 'Animals that hunt'],
    },
    correct: 0,
    explanation: {
      el: 'Παραγωγοί είναι τα φυτά (και τα φύκια). Παράγουν την τροφή τους από φως, νερό και διοξείδιο του άνθρακα. Από αυτούς ξεκινά κάθε αλυσίδα.',
      en: 'Producers are plants (and algae). They produce their food from light, water and carbon dioxide. Every chain starts with them.',
    },
  },
  {
    q: { el: 'Η Ελένη έβαλε ένα φυτό σε σκοτεινό ντουλάπι για δύο εβδομάδες. Τι θα πάθει και γιατί;', en: 'Eleni put a plant in a dark cupboard for two weeks. What will happen to it and why?' },
    options: {
      el: ['Θα μεγαλώσει πιο γρήγορα, γιατί ξεκουράζεται', 'Θα κιτρινίσει και θα μαραθεί, γιατί χωρίς φως δεν φτιάχνει τροφή', 'Δεν θα πάθει τίποτα, αρκεί να έχει νερό', 'Θα γίνει πιο πράσινο, γιατί το σκοτάδι το προστατεύει'],
      en: ['It will grow faster because it is resting', 'It will turn yellow and wilt, because without light it cannot make food', 'Nothing will happen as long as it has water', 'It will get greener, because the dark protects it'],
    },
    correct: 1,
    explanation: {
      el: 'Τα φυτά χρειάζονται φως για τη φωτοσύνθεση. Χωρίς φως δεν παράγουν τροφή, κιτρινίζουν και μαραίνονται, ακόμα κι αν τα ποτίζουμε.',
      en: 'Plants need light for photosynthesis. Without light they make no food, turn yellow and wilt, even if we water them.',
    },
  },

  // ── 10–12: consumers ──────────────────────────────────────────────────────
  {
    q: { el: 'Ποιο από τα παρακάτω ζώα είναι φυτοφάγο;', en: 'Which of these animals is a herbivore?' },
    options: {
      el: ['Ο λύκος', 'Η οχιά', 'Η κατσίκα', 'Η αρκούδα'],
      en: ['The wolf', 'The viper', 'The goat', 'The bear'],
    },
    correct: 2,
    explanation: {
      el: 'Η κατσίκα τρώει μόνο φυτά: χόρτα, φύλλα, κλαδάκια. Ο λύκος και η οχιά είναι σαρκοφάγα, η αρκούδα τρώει από όλα (παμφάγο).',
      en: 'The goat eats only plants: grass, leaves, twigs. The wolf and the viper are carnivores; the bear eats everything (omnivore).',
    },
  },
  {
    q: { el: 'Ο Νίκος έφαγε για μεσημέρι ψάρι με σαλάτα και πορτοκάλι. Πώς λέγεται ένας οργανισμός που τρώει και φυτά και ζώα;', en: 'Nikos had fish with salad and an orange for lunch. What do we call an organism that eats both plants and animals?' },
    options: {
      el: ['Φυτοφάγος', 'Σαρκοφάγος', 'Παραγωγός', 'Παμφάγος'],
      en: ['Herbivore', 'Carnivore', 'Producer', 'Omnivore'],
    },
    correct: 3,
    explanation: {
      el: '«Παμ-φάγος» σημαίνει «τρώει τα πάντα». Ο άνθρωπος, η αρκούδα και ο σκαντζόχοιρος είναι παμφάγοι.',
      en: '"Omni-vore" means "eats everything". Humans, bears and hedgehogs are omnivores.',
    },
  },
  {
    q: { el: 'Στην αλυσίδα «φύκια → μικρά ψάρια → τόνος → καρχαρίας», ποιος είναι ο κορυφαίος θηρευτής;', en: 'In the chain "algae → small fish → tuna → shark", which is the top predator?' },
    options: {
      el: ['Τα φύκια', 'Ο τόνος', 'Ο καρχαρίας', 'Τα μικρά ψάρια'],
      en: ['The algae', 'The tuna', 'The shark', 'The small fish'],
    },
    correct: 2,
    explanation: {
      el: 'Κορυφαίος θηρευτής είναι αυτός στο τέλος της αλυσίδας, που δεν τον κυνηγά κανένα άλλο ζώο. Εδώ είναι ο καρχαρίας.',
      en: 'The top predator is the one at the end of the chain that no other animal hunts. Here it is the shark.',
    },
  },

  // ── 13–14: decomposers ────────────────────────────────────────────────────
  {
    q: { el: 'Ένα φύλλο πέφτει στο δάσος και μετά από μήνες έχει γίνει χώμα. Ποιοι το «διέλυσαν»;', en: 'A leaf falls in the forest and months later it has become soil. Who "broke it down"?' },
    options: {
      el: ['Τα πουλιά', 'Οι αποικοδομητές: μύκητες, βακτήρια και σκουλήκια', 'Η βροχή μόνο', 'Τα ελάφια'],
      en: ['The birds', 'The decomposers: fungi, bacteria and worms', 'Only the rain', 'The deer'],
    },
    correct: 1,
    explanation: {
      el: 'Οι αποικοδομητές τρώνε ό,τι πεθαίνει (φύλλα, ξύλα, νεκρά ζώα) και το μετατρέπουν σε θρεπτικά συστατικά που γυρίζουν στο χώμα.',
      en: 'Decomposers eat whatever dies (leaves, wood, dead animals) and turn it into nutrients that go back into the soil.',
    },
  },
  {
    q: { el: 'Γιατί οι αποικοδομητές είναι τόσο σημαντικοί για ένα οικοσύστημα;', en: 'Why are decomposers so important for an ecosystem?' },
    options: {
      el: ['Γιατί ανακυκλώνουν τα θρεπτικά συστατικά, ώστε να τα ξαναπάρουν τα φυτά', 'Γιατί παράγουν οξυγόνο', 'Γιατί τρώνε τα παράσιτα των ζώων', 'Γιατί φτιάχνουν τροφή με το φως του ήλιου'],
      en: ['Because they recycle nutrients so plants can use them again', 'Because they produce oxygen', 'Because they eat the parasites of animals', 'Because they make food from sunlight'],
    },
    correct: 0,
    explanation: {
      el: 'Χωρίς αποικοδομητές, τα νεκρά φύλλα και ζώα θα μαζεύονταν παντού και το χώμα δεν θα είχε θρεπτικά συστατικά. Κλείνουν τον κύκλο της ζωής.',
      en: 'Without decomposers, dead leaves and animals would pile up everywhere and the soil would have no nutrients. They close the circle of life.',
    },
  },

  // ── 15–18: humans and ecosystems ──────────────────────────────────────────
  {
    q: { el: 'Ένα εργοστάσιο ρίχνει απόβλητα σε ένα ποτάμι. Ποιοι οργανισμοί θα επηρεαστούν;', en: 'A factory dumps waste into a river. Which organisms will be affected?' },
    options: {
      el: ['Μόνο τα ψάρια', 'Μόνο τα φυτά του ποταμού', 'Όλοι: φυτά, ψάρια, πουλιά που τρώνε ψάρια, ακόμα και άνθρωποι', 'Κανένας, το νερό καθαρίζει μόνο του'],
      en: ['Only the fish', 'Only the river plants', 'Everyone: plants, fish, birds that eat fish, even people', 'No one, the water cleans itself'],
    },
    correct: 2,
    explanation: {
      el: 'Η ρύπανση περνά από κρίκο σε κρίκο της τροφικής αλυσίδας. Ό,τι μπαίνει στο νερό φτάνει σε όποιον πίνει ή τρώει από αυτό.',
      en: 'Pollution travels from link to link along the food chain. Whatever enters the water reaches whoever drinks or eats from it.',
    },
  },
  {
    q: { el: 'Αν οι ψαράδες ψαρέψουν σχεδόν όλα τα μικρά ψάρια μιας θάλασσας, τι θα συμβεί στα μεγάλα ψάρια που τα τρώνε;', en: 'If fishermen catch almost all the small fish in a sea, what will happen to the big fish that eat them?' },
    options: {
      el: ['Θα μείνουν χωρίς τροφή και θα λιγοστέψουν', 'Θα γίνουν περισσότερα', 'Θα αρχίσουν να τρώνε φύκια', 'Δεν θα αλλάξει τίποτα'],
      en: ['They will run out of food and become fewer', 'There will be more of them', 'They will start eating algae', 'Nothing will change'],
    },
    correct: 0,
    explanation: {
      el: 'Η υπεραλίευση σπάει την αλυσίδα: χωρίς μικρά ψάρια, τα μεγάλα δεν έχουν τι να φάνε. Γι\' αυτό υπάρχουν κανόνες για το πόσο ψαρεύουμε.',
      en: 'Overfishing breaks the chain: without small fish, the big ones have nothing to eat. That is why there are rules about how much we fish.',
    },
  },
  {
    q: { el: 'Ο Γιώργος άφησε τα ψαράκια του ενυδρείου του σε μια λίμνη. Γιατί αυτό μπορεί να είναι πρόβλημα;', en: 'Giorgos released his aquarium fish into a lake. Why can this be a problem?' },
    options: {
      el: ['Γιατί θα κρυώσουν', 'Γιατί ένα ξένο είδος μπορεί να πολλαπλασιαστεί και να διώξει τα ντόπια είδη', 'Γιατί δεν θα βρουν τον δρόμο για το σπίτι', 'Δεν είναι πρόβλημα, η λίμνη έχει χώρο'],
      en: ['Because they will get cold', 'Because a foreign species can multiply and push out the local species', 'Because they will not find their way home', 'It is not a problem, the lake has room'],
    },
    correct: 1,
    explanation: {
      el: 'Ένα ξένο είδος συχνά δεν έχει εχθρούς στο νέο μέρος, οπότε πολλαπλασιάζεται και τρώει την τροφή ή τα αυγά των ντόπιων ειδών. Λέγεται «εισβολικό είδος».',
      en: 'A foreign species often has no enemies in its new home, so it multiplies and eats the food or eggs of the local species. It is called an "invasive species".',
    },
  },
  {
    q: { el: 'Η Μαρία θέλει να βοηθήσει το οικοσύστημα του δάσους κοντά στο χωριό της. Ποια ενέργεια βοηθά πραγματικά;', en: 'Maria wants to help the forest ecosystem near her village. Which action really helps?' },
    options: {
      el: ['Να ταΐζει τα άγρια ζώα κάθε μέρα με ψωμί', 'Να μαζέψει όλα τα έντομα, γιατί είναι ενοχλητικά', 'Να φυτέψει λουλούδια από άλλη χώρα, γιατί είναι πιο όμορφα', 'Να μην αφήνει σκουπίδια και να σέβεται τα φυτά και τις φωλιές'],
      en: ['Feed the wild animals bread every day', 'Collect all the insects, because they are annoying', 'Plant flowers from another country, because they are prettier', 'Leave no litter and respect the plants and the nests'],
    },
    correct: 3,
    explanation: {
      el: 'Το καλύτερο που μπορούμε να κάνουμε είναι να μην ενοχλούμε την ισορροπία: ούτε σκουπίδια, ούτε ξένα φυτά, ούτε «βοήθεια» που αλλάζει τις συνήθειες των ζώων.',
      en: 'The best thing we can do is not disturb the balance: no litter, no foreign plants, no "help" that changes how the animals live.',
    },
  },
];
