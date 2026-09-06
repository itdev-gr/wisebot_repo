/**
 * WiseBot Explorer · Γεύσεις της Βαρκελώνης / A taste of Barcelona
 * Written for a family with a 7–12 year old: what it is, a tip for the kids, one fact for
 * the parents, and the kind of place that serves it. Catalan names kept, Greek first.
 * No business names. Cava only as a note for the parents.
 */
import type { TasteItem } from '../types';

export const TASTE: TasteItem[] = [
  {
    id: 'pa-amb-tomaquet', emoji: '🍅', kind: 'snack', brave: 1,
    name: { el: 'Πα αμ τουμάκετ (Pa amb tomàquet)', en: 'Pa amb tomàquet' },
    what: { el: 'Φέτες ψωμί, συχνά ψημένες, τριμμένες με μισή ώριμη ντομάτα, λίγο ελαιόλαδο και αλάτι. Απλό, κοκκινωπό και δροσερό — οι Καταλανοί το τρώνε σχεδόν με όλα.', en: 'Slices of bread, often toasted, rubbed with half a ripe tomato, a drizzle of olive oil and salt. Simple, pinkish-red and fresh — Catalans eat it with almost everything.' },
    kidTip: { el: 'Σε πολλά μέρη σου φέρνουν ψωμί, ντομάτα και λάδι χώρια για να το φτιάξεις με τα χέρια σου: τρίψε τη ντομάτα δυνατά πάνω στο ψωμί! Ζήτα το με ένα «pa amb tomàquet, si us plau» (παρακαλώ).', en: 'Many places bring the bread, tomato and oil separately so you make it yourself: rub the tomato hard onto the bread! Ask for it with “pa amb tomàquet, si us plau” (please).' },
    funFact: { el: 'Η ντομάτα ήρθε στην Ευρώπη από την Αμερική, γι’ αυτό το «πανάρχαιο» ψωμί των Καταλανών είναι νεότερο απ’ ό,τι φαίνεται: οι πρώτες γραπτές αναφορές του είναι από τα τέλη του 19ου αιώνα.', en: 'Tomatoes came to Europe from the Americas, so this “ancient” Catalan bread is younger than it looks: the first written mentions of it date from the late 19th century.' },
    where: { el: 'Σε κάθε ταβέρνα, μπαρ με τάπας και εστιατόριο — έρχεται στο τραπέζι πριν από το φαγητό ή μαζί με αλλαντικά και τυριά.', en: 'In every tavern, tapas bar and restaurant — it comes before the meal or alongside cold cuts and cheese.' },
  },
  {
    id: 'patatas-bravas', emoji: '🥔', kind: 'snack', brave: 2,
    name: { el: 'Πατάτας μπράβας (Patatas bravas)', en: 'Patatas bravas' },
    what: { el: 'Τηγανητές πατάτες σε κομμάτια, με μια κοκκινωπή, λίγο καυτερή σάλτσα και συχνά και λευκή σάλτσα σκόρδου (allioli) από πάνω. Τραγανές απ’ έξω, μαλακές μέσα.', en: 'Chunks of fried potato with a reddish, slightly spicy sauce and often a white garlic sauce (allioli) on top. Crisp outside, soft inside.' },
    kidTip: { el: 'Ζήτα τες «poc picants» (λίγο καυτερές) ή μόνο με allioli — ή κράτα τη σάλτσα στην άκρη του πιάτου και δοκίμασέ την πρώτα σε μία πατάτα. Είναι φτιαγμένες για να μοιράζονται.', en: 'Ask for them “poc picants” (only a little spicy) or with allioli only — or keep the sauce to one side and test it on a single potato first. They are made for sharing.' },
    funFact: { el: 'Το «bravas» σημαίνει «άγριες» — το όνομα το χρωστούν στη σάλτσα που τσιμπάει. Λέγεται ότι γεννήθηκαν στα μπαρ της Μαδρίτης γύρω στο 1960 και από εκεί κατέκτησαν όλη την Ισπανία.', en: '“Bravas” means “fierce” — the name comes from the sauce that bites. The story goes that they were born in the bars of Madrid around 1960 and conquered all of Spain from there.' },
    where: { el: 'Σε μπαρ με τάπας και μικρά εστιατόρια, σε κάθε γειτονιά — συνήθως το πρώτο πιάτο που φτάνει στο τραπέζι.', en: 'In tapas bars and small restaurants in every neighbourhood — usually the first plate to reach the table.' },
  },
  {
    id: 'truita-de-patates', emoji: '🍳', kind: 'dish', brave: 1,
    name: { el: 'Τρούιτα ντε πατάτες (Truita de patates)', en: 'Potato omelette (Truita de patates)' },
    what: { el: 'Μια χοντρή, στρογγυλή ομελέτα με πατάτες και αυγά, καμιά φορά και κρεμμύδι. Μαλακή, ζεστή ή κρύα, την κόβουν σε τρίγωνα σαν τούρτα.', en: 'A thick, round omelette of potato and egg, sometimes with onion. Soft, served warm or cold, and cut into wedges like a cake.' },
    kidTip: { el: 'Ζήτα ένα κομμάτι («un tall de truita, si us plau») στο μπαρ, το πρωί ή το μεσημέρι — από τα πιο εύκολα φαγητά για παιδιά. Με ή χωρίς κρεμμύδι; Οι Ισπανοί τσακώνονται γι’ αυτό!', en: 'Ask for a wedge (“un tall de truita, si us plau”) at a bar, in the morning or at lunch — one of the easiest foods for kids. With or without onion? The Spanish argue about it!' },
    funFact: { el: 'Στα καταλανικά «truita» σημαίνει και ομελέτα και… πέστροφα, το ψάρι! Αν δεις «truita» στον κατάλογο, ρώτα ποιο από τα δύο είναι.', en: 'In Catalan, “truita” means both omelette and… trout, the fish! If you see “truita” on a menu, ask which of the two it is.' },
    where: { el: 'Σε μπαρ και καφέ, κομμένη σε τρίγωνα πάνω στον πάγκο, ή ως τάπα σε ταβέρνες.', en: 'In bars and cafés, cut into wedges on the counter, or as a tapa in taverns.' },
  },
  {
    id: 'xurros-amb-xocolata', emoji: '🍫', kind: 'sweet', brave: 1,
    name: { el: 'Τσούρος με σοκολάτα (Xurros amb xocolata)', en: 'Churros with hot chocolate (Xurros amb xocolata)' },
    what: { el: 'Μακριές τηγανητές ραβδωτές λωρίδες ζύμης, τραγανές και πασπαλισμένες με ζάχαρη, που βουτάς σε ένα φλιτζάνι πηχτή ζεστή σοκολάτα — τόσο πηχτή που σχεδόν στέκεται το κουτάλι.', en: 'Long fried ridged sticks of dough, crisp and dusted with sugar, that you dip into a cup of thick hot chocolate — so thick the spoon almost stands up in it.' },
    kidTip: { el: 'Τα πουλάνε κυρίως το πρωί και το απόγευμα, την ώρα του «berenar» (απογευματινού). Μια μερίδα φτάνει για δύο· φύσα πρώτα τον τσούρο — βγαίνει καυτός από το λάδι — και μετά βούτα τη μύτη του στη σοκολάτα.', en: 'Sold mostly in the morning and at “berenar” (afternoon snack) time. One portion is enough for two; blow on the churro first — it comes out of the oil very hot — then dip the tip in the chocolate.' },
    funFact: { el: 'Η Ισπανία ήταν η πρώτη χώρα της Ευρώπης που ήπιε σοκολάτα: την έφεραν από το Μεξικό τον 16ο αιώνα και για πολλά χρόνια η σοκολάτα ήταν ρόφημα — όχι σε πλάκα!', en: 'Spain was the first country in Europe to drink chocolate: it arrived from Mexico in the 16th century, and for many years chocolate was a drink — not a bar!' },
    where: { el: 'Σε «xurreria» (μαγαζάκι με τσούρος), σε παλιές «granges» (πρώην γαλακτοπωλεία που έγιναν καφέ) στην παλιά πόλη, και σε πάγκους στα πανηγύρια.', en: 'At a “xurreria” (churros shop), in old “granges” (former dairy shops turned cafés) in the old town, and at stalls during street festivals.' },
  },
  {
    id: 'crema-catalana', emoji: '🍮', kind: 'sweet', brave: 1,
    name: { el: 'Κρέμα καταλάνα (Crema catalana)', en: 'Crema catalana' },
    what: { el: 'Μια κρύα κρέμα με άρωμα λεμονιού και κανέλας, σκεπασμένη με μια λεπτή, γυάλινη κρούστα καραμελωμένης ζάχαρης. Από κάτω απαλή, από πάνω κρακ!', en: 'A cold custard scented with lemon and cinnamon, covered with a thin, glassy crust of caramelised sugar. Soft underneath, crack on top!' },
    kidTip: { el: 'Το πιο διασκεδαστικό μέρος: χτύπα την κρούστα με το κουτάλι για να σπάσει. Ζήτα την ως επιδόρπιο («de postres») — οι μερίδες είναι μικρές, μία για τον καθένα.', en: 'The fun part: tap the crust with your spoon to crack it. Order it as dessert (“de postres”) — portions are small, one each.' },
    funFact: { el: 'Λέγεται και «crema de Sant Josep», γιατί παραδοσιακά τρώγεται στις 19 Μαρτίου, τη γιορτή του Αγίου Ιωσήφ — που στην Ισπανία είναι και η Ημέρα του Πατέρα.', en: 'It is also called “crema de Sant Josep”, because it is traditionally eaten on 19 March, Saint Joseph’s day — which in Spain is also Father’s Day.' },
    where: { el: 'Σε κάθε εστιατόριο και ταβέρνα, στη λίστα με τα γλυκά — και σε ζαχαροπλαστεία, σε μικρά πήλινα πιατάκια.', en: 'In any restaurant or tavern, on the dessert list — and in pastry shops, in little clay dishes.' },
  },
  {
    id: 'fideua', emoji: '🍤', kind: 'dish', brave: 2,
    name: { el: 'Φιδεουά (Fideuà)', en: 'Fideuà' },
    what: { el: 'Σαν παέγια, αλλά με λεπτά κοντά μακαρονάκια αντί για ρύζι: μαγειρεύονται σε πλατύ ταψί με ψάρι, γαρίδες και καλαμάρι, και οι άκρες τους γίνονται τραγανές.', en: 'Like paella, but with thin short noodles instead of rice: cooked in a wide pan with fish, prawns and squid, so the noodle ends turn crispy.' },
    kidTip: { el: 'Οι γαρίδες έρχονται συχνά με κεφάλι και κέλυφος — ζήτα από τον γονιό να τις καθαρίσει. Είναι πιάτο για δύο ή περισσότερους και θέλει λίγη αναμονή· η σκορδάτη σάλτσα (allioli) δίπλα είναι δυνατή, δοκίμασε πρώτα λίγη.', en: 'The prawns often come with heads and shells — ask a parent to peel them. It is a dish for two or more and takes a while; the garlic sauce (allioli) on the side is strong, try a little first.' },
    funFact: { el: 'Λέγεται ότι γεννήθηκε πάνω σε ένα ψαροκάικο στη Γκάντια, στις ακτές της Βαλένθια: ο μάγειρας έβαλε μακαρονάκια αντί για ρύζι, για να μη φάει ο καπετάνιος, που λάτρευε το ρύζι, όλο το ταψί!', en: 'The story goes that it was born on a fishing boat in Gandia, on the Valencian coast: the cook used noodles instead of rice so the captain, who loved rice, would not eat the whole pan!' },
    where: { el: 'Σε ψαροταβέρνες κοντά στη θάλασσα, το μεσημέρι — συχνά πρέπει να παραγγελθεί για τουλάχιστον δύο άτομα.', en: 'In seafood restaurants near the sea, at lunchtime — often it must be ordered for at least two people.' },
  },
  {
    id: 'bikini', emoji: '🥪', kind: 'snack', brave: 1,
    name: { el: 'Μπικίνι (Bikini)', en: 'Bikini' },
    what: { el: 'Ένα τοστ με ζαμπόν και τυρί, ψημένο μέχρι να γίνει χρυσό και τραγανό, με το τυρί να λιώνει μέσα. Στη Βαρκελώνη δεν το λένε «τοστ», το λένε «μπικίνι»!', en: 'A toasted ham-and-cheese sandwich, grilled until golden and crisp with the cheese melting inside. In Barcelona they do not call it a toastie, they call it a “bikini”!' },
    kidTip: { el: 'Το πιο σίγουρο φαγητό για παιδιά — υπάρχει σχεδόν σε κάθε μπαρ και καφέ. Πες «un bikini, si us plau». Στην υπόλοιπη Ισπανία το λένε «sándwich mixto».', en: 'The safest bet for kids — nearly every bar and café has one. Say “un bikini, si us plau”. In the rest of Spain it is called a “sándwich mixto”.' },
    funFact: { el: 'Λέγεται ότι πήρε το όνομά του από μια αίθουσα χορού της Βαρκελώνης τη δεκαετία του 1950, που το σέρβιρε ζεστό: ο κόσμος ζητούσε «το σάντουιτς του Μπικίνι» και το όνομα έμεινε.', en: 'The story goes that it was named after a Barcelona dance hall of the 1950s that served it hot: people asked for “the Bikini sandwich” and the name stuck.' },
    where: { el: 'Σε μπαρ, καφέ και «granges» (παλιά γαλακτοπωλεία που έγιναν καφέ), σε όλη την πόλη.', en: 'In bars, cafés and “granges” (old dairy shops turned cafés), all over town.' },
  },
  {
    id: 'cava', emoji: '🥂', kind: 'drink', brave: 1, adultsOnly: true,
    name: { el: 'Κάβα (Cava)', en: 'Cava' },
    what: { el: 'Το αφρώδες κρασί της Καταλονίας, με φυσαλίδες σαν τη σαμπάνια — μόνο για τους γονείς.', en: 'Catalonia’s sparkling wine, bubbly like champagne — for the parents only.' },
    kidTip: { el: 'Τα παιδιά μπορούν να δουν τα υπόγεια κελάρια στα χωριά του Penedès, μία ώρα από την πόλη, όπου χιλιάδες μπουκάλια «κοιμούνται» στο σκοτάδι για μήνες.', en: 'Kids can see the underground cellars in the Penedès villages, an hour from the city, where thousands of bottles “sleep” in the dark for months.' },
    funFact: { el: 'Φτιάχνεται με την ίδια μέθοδο με τη σαμπάνια — οι φυσαλίδες γεννιούνται μέσα στο ίδιο το μπουκάλι. Η πρώτη κάβα έγινε το 1872 σε ένα χωριό του Penedès.', en: 'It is made the same way as champagne — the bubbles are born inside the bottle itself. The first cava was made in 1872 in a village of the Penedès.' },
    where: { el: 'Σε κάθε εστιατόριο, και στα οινοποιεία του Penedès, γύρω από το Sant Sadurní d’Anoia.', en: 'In any restaurant, and at the wineries of the Penedès, around Sant Sadurní d’Anoia.' },
  },
];
