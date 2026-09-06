/**
 * WiseBot Explorer · Γεύσεις του Άμστερνταμ / A taste of Amsterdam
 * Written for a family with a 7–12 year old: what it is, a tip for the kids, one fact for
 * the parents, and the kind of place that serves it. No business names. Beer only as a
 * note for the parents.
 */
import type { TasteItem } from '../types';

export const TASTE: TasteItem[] = [
  {
    id: 'stroopwafel', emoji: '🧇', kind: 'sweet', brave: 1,
    name: { el: 'Στρόοπβαφελ (Stroopwafel)', en: 'Stroopwafel' },
    what: { el: 'Δύο λεπτές, τραγανές βάφλες κολλημένες με ζεστό σιρόπι καραμέλας. Φρέσκια από τον πάγκο είναι μαλακή και ζεστή, και το σιρόπι στάζει!', en: 'Two thin, crisp waffles stuck together with warm caramel syrup. Fresh from the stall it is soft and hot, and the syrup drips!' },
    kidTip: { el: 'Φρέσκια από τον πάγκο είναι καυτή — άσ’ την λίγο να κρυώσει. Το κόλπο των Ολλανδών: ακούμπησέ την πάνω στην κούπα με τη ζεστή σοκολάτα σου — ο ατμός λιώνει το σιρόπι. Στην αγορά ζήτα «een verse stroopwafel, alstublieft» (μία φρέσκια, παρακαλώ).', en: 'Fresh from the stall it is very hot — let it cool a moment. The Dutch trick: rest it on top of your mug of hot chocolate — the steam melts the syrup. At the market ask for “een verse stroopwafel, alstublieft” (a fresh one, please).' },
    funFact: { el: 'Γεννήθηκε στη Γκούντα, την πόλη του τυριού, πριν από 200 περίπου χρόνια. Λέγεται ότι ένας φούρναρης την έφτιαξε από ό,τι περίσσευε στον φούρνο: ψίχουλα, σιρόπι και μπαχαρικά.', en: 'It was born in Gouda, the cheese town, about 200 years ago. The story goes that a baker made it from the bakery’s leftovers: crumbs, syrup and spices.' },
    where: { el: 'Σε πάγκους στις υπαίθριες αγορές, όπου τις ψήνουν μπροστά σου, και σε πακέτα σε κάθε σούπερ μάρκετ.', en: 'At stalls in the open-air markets, where they bake them in front of you, and in packets at any supermarket.' },
  },
  {
    id: 'poffertjes', emoji: '🥞', kind: 'sweet', brave: 1,
    name: { el: 'Πόφερτγιες (Poffertjes)', en: 'Poffertjes' },
    what: { el: 'Μικροσκοπικές, αφράτες τηγανίτες σαν μαξιλαράκια, πασπαλισμένες με ζάχαρη άχνη και με ένα κομματάκι βούτυρο που λιώνει από πάνω. Τρώγονται με πιρουνάκι, δέκα-δέκα!', en: 'Tiny, fluffy pancakes like little pillows, dusted with icing sugar, with a knob of butter melting on top. You eat them with a little fork, ten at a time!' },
    kidTip: { el: 'Μια μερίδα φτάνει για δύο. Στον πάγκο πες «een portie poffertjes, alstublieft» και δες τον μάγειρα να τις γυρίζει μία-μία με ένα πιρούνι.', en: 'One portion is plenty for two. At the stall say “een portie poffertjes, alstublieft” and watch the cook flip them one by one with a fork.' },
    funFact: { el: 'Ψήνονται σε ένα ειδικό μαντεμένιο τηγάνι γεμάτο λακκούβες — μία για κάθε τηγανίτα — και η ζύμη έχει μαγιά και αλεύρι από φαγόπυρο, γι’ αυτό φουσκώνουν τόσο.', en: 'They are cooked in a special cast-iron pan full of little dimples — one per pancake — and the batter is made with yeast and buckwheat flour, which is why they puff up.' },
    where: { el: 'Σε πάγκους (poffertjeskraam) στις αγορές και στα πανηγύρια, και σε εστιατόρια για τηγανίτες (pannenkoekenhuis) στο κέντρο.', en: 'At stalls (poffertjeskraam) in markets and at funfairs, and in pancake houses (pannenkoekenhuis) in the centre.' },
  },
  {
    id: 'bitterballen', emoji: '🧆', kind: 'snack', brave: 2,
    name: { el: 'Μπίτερμπαλεν (Bitterballen)', en: 'Bitterballen' },
    what: { el: 'Τραγανά, χρυσαφένια μπαλάκια με πανάρισμα, γεμιστά με μια πηχτή, βελούδινη κρέμα από μοσχαρίσιο ραγού. Απ’ έξω κριτς-κρατς, μέσα ζεστά και μαλακά.', en: 'Crisp, golden breaded balls filled with a thick, velvety beef ragout. Crunchy outside, hot and soft inside.' },
    kidTip: { el: 'Μέσα είναι καυτά σαν λάβα: περίμενε λίγο, σπάσε το πρώτο στη μέση και φύσηξε. Η μουστάρδα είναι καυτερή — βούτηξε μόνο μια γωνίτσα, ή ζήτα κέτσαπ.', en: 'The inside is lava-hot: wait a moment, break the first one in half and blow. The mustard is sharp — dip just a corner, or ask for ketchup.' },
    funFact: { el: 'Ο μεγάλος ξάδερφός τους, η κροκέτα (kroket), πουλιέται «από τον τοίχο» (uit de muur): σε σνακ-μπαρ με σειρές από μικρά γυάλινα πορτάκια βάζεις κέρματα (ή ακουμπάς την κάρτα), ανοίγεις το πορτάκι και παίρνεις την καυτή κροκέτα.', en: 'Their big cousin, the kroket, is sold “from the wall” (uit de muur): at snack bars with rows of little glass doors you drop in coins (or tap a card), open a door and take out the hot kroket.' },
    where: { el: 'Σε καφέ και σνακ-μπαρ, σε πιάτο των έξι ή οκτώ για όλη την οικογένεια — συχνά δίπλα σε ένα χωνί πατάτες (patat) με μαγιονέζα.', en: 'In cafés and snack bars, as a plate of six or eight for the whole family — often next to a paper cone of fries (patat) with mayonnaise.' },
  },
  {
    id: 'hollandse-nieuwe', emoji: '🐟', kind: 'snack', brave: 3,
    name: { el: 'Ρέγγα Χόλαντσε Νίουε (Hollandse Nieuwe)', en: 'Hollandse Nieuwe herring' },
    what: { el: 'Ρέγγα που δεν είναι ψημένη, μόνο παστωμένη λίγο σε αλάτι: ασημένια, μαλακή σαν βελούδο και με γεύση θάλασσας. Οι Ολλανδοί την κρατούν από την ουρά, γέρνουν το κεφάλι πίσω και… χαμ!', en: 'Herring that is not cooked, only lightly cured in salt: silvery, velvet-soft and tasting of the sea. The Dutch hold it by the tail, tip their head back and… gulp!' },
    kidTip: { el: 'Για τολμηρούς! Η εύκολη εκδοχή: ζήτα «in stukjes» (σε κομματάκια) με μια οδοντογλυφίδα-σημαιάκι, ή μέσα σε μαλακό ψωμάκι (broodje haring). Το κρεμμύδι το βάζεις μόνο αν θες.', en: 'For brave tasters! The easy version: ask for it “in stukjes” (in pieces) with a little flag toothpick, or in a soft bun (broodje haring). Onions only if you want them.' },
    funFact: { el: 'Η σεζόν ανοίγει κάθε Ιούνιο και το λιμάνι του Σχέβενινγκεν γιορτάζει με την «Ημέρα των Σημαιακιών» (Vlaggetjesdag), με τα ψαροκάικα στολισμένα με σημαιάκια. Για σχεδόν 40 χρόνια το πρώτο βαρέλι της χρονιάς πουλιόταν σε δημοπρασία για φιλανθρωπικό σκοπό — συχνά για δεκάδες χιλιάδες ευρώ.', en: 'The season opens every June and Scheveningen harbour celebrates with “Little Flags Day” (Vlaggetjesdag), the fishing boats dressed in bunting. For almost 40 years the first barrel of the year was auctioned for charity — often for tens of thousands of euros.' },
    where: { el: 'Σε πάγκους ψαριών (haringkar) σε γωνίες δρόμων και στις αγορές, όλο τον χρόνο — αλλά η «νέα» ρέγγα έρχεται από τον Ιούνιο.', en: 'At fish stalls (haringkar) on street corners and in the markets, all year round — but the “new” herring arrives from June.' },
  },
  {
    id: 'gouda-edam', emoji: '🧀', kind: 'snack', brave: 1,
    name: { el: 'Γκούντα και Ένταμ (Gouda & Edam)', en: 'Gouda & Edam cheese' },
    what: { el: 'Μεγάλοι τροχοί (Γκούντα) και στρογγυλές μπάλες (Ένταμ) τυριού, ντυμένα με κίτρινο ή κόκκινο κερί. Το νεαρό (jong) είναι μαλακό και βουτυράτο· το παλιό (oud) σκληρό, αλμυρό και τρίζει στα δόντια από μικρούς κρυστάλλους.', en: 'Big wheels (Gouda) and round balls (Edam) of cheese dressed in yellow or red wax. Young (jong) is soft and buttery; old (oud) is hard, salty and crunches with tiny crystals.' },
    kidTip: { el: 'Στα τυροπωλεία υπάρχουν συνήθως κυβάκια για δοκιμή: ρώτα ευγενικά «Mag ik proeven?» (Μπορώ να δοκιμάσω;). Ξεκίνα από το νεαρό και δες μέχρι πόσο «παλιό» αντέχεις!', en: 'Cheese shops usually put out little cubes to try: ask politely “Mag ik proeven?” (May I taste?). Start with young and see how “old” you can go!' },
    funFact: { el: 'Από το 2010 τα ονόματα «Gouda Holland» και «Edam Holland» είναι προστατευμένα στην ΕΕ: μόνο τυρί φτιαγμένο στην Ολλανδία, από ολλανδικό γάλα, μπορεί να τα φέρει.', en: 'Since 2010 the names “Gouda Holland” and “Edam Holland” have been protected in the EU: only cheese made in the Netherlands from Dutch milk may carry them.' },
    where: { el: 'Σε τυροπωλεία (kaaswinkel) και σε πάγκους στις αγορές — και στο πρωινό, όπου οι Ολλανδοί το βάζουν σε φέτες πάνω στο ψωμί.', en: 'In cheese shops (kaaswinkel) and at market stalls — and at breakfast, where the Dutch put slices of it on bread.' },
  },
  {
    id: 'appeltaart', emoji: '🥧', kind: 'sweet', brave: 1,
    name: { el: 'Άπελταρτ (Appeltaart)', en: 'Appeltaart' },
    what: { el: 'Ψηλή μηλόπιτα με παχιά, μπισκοτένια ζύμη, γεμάτη χοντρά κομμάτια μήλου, κανέλα και σταφίδες, με πλέγμα από ζύμη στην κορυφή. Σερβίρεται με ένα σύννεφο σαντιγί.', en: 'A tall apple pie with a thick, biscuity crust, packed with big chunks of apple, cinnamon and raisins, with a lattice of pastry on top. Served with a cloud of whipped cream.' },
    kidTip: { el: 'Το κομμάτι είναι τεράστιο — μοιραστείτε το. Πες «met slagroom» για σαντιγί. Οι περισσότερες έχουν σταφίδες μέσα, οπότε αν δεν τις θες, ρώτα πρώτα.', en: 'A slice is huge — share one. Say “met slagroom” for whipped cream. Most have raisins inside, so if you do not like them, ask first.' },
    funFact: { el: 'Η συνταγή έχει πάνω από 500 χρόνια: ένα από τα πρώτα βιβλία μαγειρικής που τυπώθηκαν στα ολλανδικά, γύρω στο 1514, έχει ήδη συνταγή για «appeltaerten».', en: 'The recipe is over 500 years old: one of the first cookbooks ever printed in Dutch, around 1514, already has a recipe for “appeltaerten”.' },
    where: { el: 'Σε καφέ και ζαχαροπλαστεία, με το κομμάτι, όλη την ημέρα — κοίτα τη βιτρίνα για την πιο ψηλή πίτα.', en: 'In cafés and bakeries, by the slice, all day long — look in the window for the tallest pie.' },
  },
  {
    id: 'hagelslag', emoji: '🍫', kind: 'snack', brave: 1,
    name: { el: 'Χάχελσλαχ (Hagelslag)', en: 'Hagelslag' },
    what: { el: 'Τρούφα σοκολάτας που οι Ολλανδοί ρίχνουν πάνω σε βουτυρωμένο ψωμί — για πρωινό! Τραγανή, γλυκιά και… επιτρέπεται.', en: 'Chocolate sprinkles that the Dutch shake onto buttered bread — for breakfast! Crunchy, sweet and… allowed.' },
    kidTip: { el: 'Πρώτα βούτυρο, μετά τρούφα, αλλιώς κυλάει όλη στο πιάτο. Θα τη βρεις στον μπουφέ του πρωινού· ένα κουτί από το σούπερ μάρκετ είναι το τέλειο σουβενίρ για το σπίτι.', en: 'Butter first, then sprinkles, or they all roll onto the plate. You will find it at the breakfast buffet; a box from the supermarket is the perfect souvenir to take home.' },
    funFact: { el: 'Το όνομα σημαίνει «χαλαζόπτωση»: τα κοκκάκια μοιάζουν με μικροσκοπικά χαλάζια που πέφτουν πάνω στο ψωμί.', en: 'The name means “hailstorm”: the little grains look like tiny hailstones falling on the bread.' },
    where: { el: 'Στο τραπέζι του πρωινού — σε ξενοδοχεία και σπίτια — και στο ράφι κάθε σούπερ μάρκετ, δίπλα σε δεκάδες άλλες τρούφες σε κάθε χρώμα.', en: 'On the breakfast table — in hotels and homes — and on the shelf of every supermarket, next to dozens of other sprinkles in every colour.' },
  },
  {
    id: 'bier', emoji: '🍺', kind: 'drink', brave: 1, adultsOnly: true,
    name: { el: 'Ολλανδική μπίρα (Bier)', en: 'Dutch beer (Bier)' },
    what: { el: 'Μια κρύα, ξανθιά μπίρα (pilsje) στην όχθη ενός καναλιού — μόνο για τους γονείς.', en: 'A cold, pale lager (pilsje) at the edge of a canal — for the parents only.' },
    kidTip: { el: 'Όσο οι γονείς κάθονται, τα παιδιά παραγγέλνουν ένα «verse muntthee»: ένα ψηλό ποτήρι ζεστό νερό με ένα ολόκληρο ματσάκι φρέσκο δυόσμο μέσα, όπως το πίνει το Άμστερνταμ.', en: 'While the parents sit, kids can order a “verse muntthee”: a tall glass of hot water with a whole bunch of fresh mint in it, the way Amsterdam drinks it.' },
    funFact: { el: 'Τα παλιά παραδοσιακά καφενεία της πόλης λέγονται «καφετιά καφενεία» (bruin café): λέγεται ότι οι ξύλινοι τοίχοι και τα ταβάνια τους σκούρυναν από τον καπνό και τα χρόνια — και κανείς δεν τα ξαναέβαψε.', en: 'The city’s old traditional pubs are called “brown cafés” (bruin café): the story goes that their wooden walls and ceilings turned dark from smoke and the years — and nobody ever repainted them.' },
    where: { el: 'Στα τραπεζάκια έξω (terras) δίπλα στα κανάλια και στα παλιά bruin café.', en: 'At the outdoor tables (terras) beside the canals and in the old brown cafés.' },
  },
];
