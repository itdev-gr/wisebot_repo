/**
 * WiseBot Explorer · Γεύσεις του Λονδίνου / A taste of London
 * Written for a family with a 7–12 year old: what it is, a tip for the kids, one fact for
 * the parents, and the kind of place that serves it. No business names. No alcohol at all —
 * the only note for the parents is a proper cup of tea.
 */
import type { TasteItem } from '../types';

export const TASTE: TasteItem[] = [
  {
    id: 'fish-and-chips', emoji: '🐟', kind: 'dish', brave: 1,
    name: { el: 'Φις εντ τσιπς (Fish and chips)', en: 'Fish and chips' },
    what: { el: 'Ένα μεγάλο φιλέτο ψαριού (συνήθως μπακαλιάρος) μέσα σε τραγανό, χρυσαφένιο κουρκούτι, με χοντρές τηγανητές πατάτες. Απ’ έξω κριτσανίζει, μέσα το ψάρι είναι λευκό και αφράτο.', en: 'A big fillet of fish (usually cod or haddock) in a crisp golden batter, with thick-cut chips. It crunches on the outside and the fish inside is white and flaky.' },
    kidTip: { el: 'Ζήτα μικρή ή παιδική μερίδα και μοιραστείτε τις πατάτες. Το φιλέτο δεν έχει σχεδόν καθόλου κόκαλα, αλλά κοίτα πριν δαγκώσεις. Στο ταμείο ρωτάνε «salt and vinegar?» — αν δεν θες ξίδι, πες «just salt, please».', en: 'Ask for a small or children’s portion and share the chips. The fillet has almost no bones, but look before you bite. At the counter they ask “salt and vinegar?” — if you don’t want vinegar, say “just salt, please”.' },
    funFact: { el: 'Λέγεται ότι το πρώτο μαγαζί με φις εντ τσιπς άνοιξε στο Ιστ Εντ του Λονδίνου γύρω στο 1860 — αλλά μια πόλη κοντά στο Μάντσεστερ λέει ότι πρόλαβε πρώτη, και ο καβγάς κρατάει ακόμα!', en: 'The story goes that the first fish and chip shop opened in London’s East End around 1860 — but a town near Manchester says it got there first, and the argument is still going!' },
    where: { el: 'Σε μαγαζί με φις εντ τσιπς — οι ντόπιοι το λένε «chippy» — τυλιγμένο σε χαρτί για τον δρόμο, ή καθιστοί σε παμπ με μπιζελόπουρε (mushy peas) στο πλάι.', en: 'At a fish and chip shop — locals call it a “chippy” — wrapped in paper to take away, or sitting down in a pub with mushy peas on the side.' },
  },
  {
    id: 'full-english', emoji: '🍳', kind: 'dish', brave: 2,
    name: { el: 'Αγγλικό πρωινό (Full English breakfast)', en: 'Full English breakfast' },
    what: { el: 'Ένα πιάτο-γίγας για το πρωί: τηγανητά αυγά, μπέικον, λουκάνικα, φασόλια σε σάλτσα ντομάτας, ψητή ντομάτα, μανιτάρια και φρυγανισμένο ψωμί. Αλμυρό, ζεστό και σε χορταίνει μέχρι το απόγευμα.', en: 'A giant plate for the morning: fried eggs, bacon, sausages, baked beans in tomato sauce, grilled tomato, mushrooms and toast. Salty, hot and it keeps you full until the afternoon.' },
    kidTip: { el: 'Διάλεξε ό,τι σου αρέσει: σχεδόν κάθε καφέ φέρνει ευχαρίστως μόνο αυγά, λουκάνικο και ψωμί. Τα φασόλια είναι γλυκά και μαλακά. Το «black pudding» είναι σκούρο λουκάνικο από αίμα χοίρου — μόνο για τους τολμηρούς.', en: 'Pick what you like: almost any café will happily bring just eggs, sausage and toast. The beans are sweet and soft. “Black pudding” is a dark sausage made with pig’s blood — a dare for the brave.' },
    funFact: { el: 'Τα φασόλια σε σάλτσα ντομάτας ήρθαν από την Αμερική: λέγεται ότι το 1886 ένα πολυτελές μαγαζί του Λονδίνου πούλησε τις πρώτες κονσέρβες ως σπάνια, ακριβή λιχουδιά — σήμερα υπάρχουν σχεδόν σε κάθε πρωινό!', en: 'Baked beans came from America: the story goes that in 1886 a posh London shop sold the first tins as a rare, expensive treat — today they are on nearly every breakfast plate!' },
    where: { el: 'Στα πρωινά των ξενοδοχείων, σε μικρά λαϊκά καφέ (οι ντόπιοι τα λένε «caff») και σε παμπ το πρωί — πολλά το σερβίρουν όλη μέρα ως «all-day breakfast».', en: 'At hotel breakfasts, in small local cafés (locals call them “caffs”) and in pubs in the morning — many serve it all day as an “all-day breakfast”.' },
  },
  {
    id: 'afternoon-tea', emoji: '🧁', kind: 'sweet', brave: 1,
    name: { el: 'Απογευματινό τσάι (Afternoon tea)', en: 'Afternoon tea' },
    what: { el: 'Μια ψηλή πιατέλα με τρία πατώματα: κάτω σαντουιτσάκια χωρίς κόρα, στη μέση ζεστά σκόουνς με πηχτή κρέμα (clotted cream) και μαρμελάδα φράουλα, πάνω μικρά κέικ και γλυκάκια. Τρώγεται σιγά σιγά, με πολλή κουβέντα.', en: 'A tall three-tier stand: little crustless sandwiches at the bottom, warm scones with thick clotted cream and strawberry jam in the middle, mini cakes and pastries on top. Eaten slowly, with lots of chatting.' },
    kidTip: { el: 'Πολλά ξενοδοχεία και τεϊοποτεία έχουν παιδικό απογευματινό τσάι με ζεστή σοκολάτα ή χυμό αντί για τσάι — κλείστε τραπέζι από πριν. Το σκόουν το ανοίγεις με τα χέρια στα δύο· κρέμα και μαρμελάδα με όποια σειρά θες (στο Ντέβον κρέμα πρώτα, στην Κορνουάλη μαρμελάδα πρώτα).', en: 'Many hotels and tea rooms offer a children’s afternoon tea with hot chocolate or juice instead of tea — book ahead. Split the scone with your hands; cream and jam go on in any order (Devon says cream first, Cornwall says jam first).' },
    funFact: { el: 'Λέγεται ότι το ξεκίνησε γύρω στο 1840 μια δούκισσα, η Άννα του Μπέντφορντ: το δείπνο σερβιριζόταν πολύ αργά και εκείνη πεινούσε το απόγευμα, έτσι ζήτησε τσάι με ψωμί και κέικ στο δωμάτιό της — και μετά κάλεσε και τις φίλες της.', en: 'The story goes that it began around 1840 with a duchess, Anna of Bedford: dinner was served very late and she got hungry in the afternoon, so she asked for tea with bread and cake in her room — and then invited her friends too.' },
    where: { el: 'Σε σαλόνια ξενοδοχείων, τεϊοποτεία και στα καφέ μεγάλων πολυκαταστημάτων και μουσείων — συνήθως μεταξύ 2 και 5 το απόγευμα.', en: 'In hotel lounges, tea rooms and the cafés of big department stores and museums — usually between 2 and 5 in the afternoon.' },
  },
  {
    id: 'pie-and-mash', emoji: '🥧', kind: 'dish', brave: 2,
    name: { el: 'Πάι εντ μας (Pie and mash)', en: 'Pie and mash' },
    what: { el: 'Μια μικρή πίτα με κιμά μοσχαριού μέσα σε τραγανή ζύμη, δίπλα σε πουρέ πατάτας απλωμένο με το μαχαίρι, και από πάνω μια πράσινη σάλτσα μαϊντανού που τη λένε «liquor». Απλό, ζεστό και πολύ λονδρέζικο.', en: 'A small pie of minced beef in a crisp pastry, next to mashed potato spread flat with a knife, topped with a green parsley sauce called “liquor”. Simple, warm and very London.' },
    kidTip: { el: 'Η πίτα είναι ήπια — ξεκίνα από εκεί. Ζήτα λίγη πράσινη σάλτσα στο πλάι, όχι πάνω σε όλα. Η μεγάλη πρόκληση είναι τα χέλια σε πηχτή (jellied eels), κρύα και με κοκαλάκια: μία μπουκιά και είσαι ήρωας του Ιστ Εντ! Το ξίδι με τσίλι άφησέ το.', en: 'The pie is mild — start there. Ask for a little green sauce on the side, not over everything. The real dare is jellied eels, served cold and with small bones: one bite makes you an East End hero! Leave the chilli vinegar alone.' },
    funFact: { el: 'Η πράσινη σάλτσα λέγεται «liquor», αλλά είναι απλώς σάλτσα μαϊντανού: τα παλιά χρόνια τη φτιάχναν με το ζουμί στο οποίο είχαν βράσει τα χέλια — γι’ αυτό τα μαγαζιά με πίτες πουλούσαν πάντα και χέλια.', en: 'The green sauce is called “liquor”, but it is just a parsley sauce: in the old days it was made with the water the eels had been stewed in — which is why pie shops always sold eels too.' },
    where: { el: 'Σε παλιά μαγαζιά με πίτες (pie and mash shops) στο Ιστ Εντ και στο νότιο Λονδίνο, με πλακάκια στους τοίχους και μαρμάρινα τραπέζια — κάποια είναι πάνω από 100 χρόνων.', en: 'In old pie and mash shops in the East End and south London, with tiled walls and marble tables — some are more than 100 years old.' },
  },
  {
    id: 'sunday-roast', emoji: '🍖', kind: 'dish', brave: 1,
    name: { el: 'Κυριακάτικο ψητό (Sunday roast)', en: 'Sunday roast' },
    what: { el: 'Το μεσημεριανό της Κυριακής: φέτες ψητό κρέας (κοτόπουλο, μοσχάρι, αρνί ή χοιρινό), τραγανές ψητές πατάτες, λαχανικά, άφθονη σάλτσα (gravy) και ένα φουσκωτό «Yorkshire pudding» — δεν είναι γλυκό, είναι ένα αφράτο ψωμάκι-κύπελλο.', en: 'Sunday lunch: slices of roast meat (chicken, beef, lamb or pork), crispy roast potatoes, vegetables, lots of gravy and a puffy “Yorkshire pudding” — not a sweet at all, but a light batter cup.' },
    kidTip: { el: 'Το κοτόπουλο είναι η πιο ήπια επιλογή. Ζήτα τη σάλτσα στο πλάι και γέμισε το Yorkshire pudding με gravy σαν μπολάκι. Σερβίρεται μόνο Κυριακή μεσημέρι και τα τραπέζια γεμίζουν — κλείστε από πριν. Πολλές παμπ έχουν παιδική μερίδα.', en: 'Chicken is the mildest choice. Ask for the gravy on the side and fill your Yorkshire pudding with it like a little bowl. It is served on Sunday lunchtime only and tables fill up — book ahead. Many pubs do a children’s roast.' },
    funFact: { el: 'Λέγεται ότι παλιά το Yorkshire pudding σερβιριζόταν πριν από το κρέας, μόνο με σάλτσα, για να χορτάσουν όλοι και να φάνε λιγότερο από το ακριβό ψητό!', en: 'The story goes that Yorkshire pudding was once served before the meat, with just gravy, so that everyone filled up and ate less of the expensive roast!' },
    where: { el: 'Σε παμπ και εστιατόρια τις Κυριακές, συνήθως από το μεσημέρι μέχρι νωρίς το απόγευμα — ψάξε την ταμπέλα «Sunday roast» έξω.', en: 'In pubs and restaurants on Sundays, usually from noon until mid-afternoon — look for the “Sunday roast” sign outside.' },
  },
  {
    id: 'sticky-toffee-pudding', emoji: '🍮', kind: 'sweet', brave: 1,
    name: { el: 'Στίκι τόφι πούντινγκ (Sticky toffee pudding)', en: 'Sticky toffee pudding' },
    what: { el: 'Ένα σκούρο, μαλακό κέικ που έρχεται ζεστό, πνιγμένο σε σάλτσα καραμέλας, με κρέμα βανίλιας ή παγωτό από πάνω. Πολύ γλυκό και κολλώδες — σαν ζεστή αγκαλιά σε μπολ.', en: 'A dark, soft sponge that comes warm, drowned in toffee sauce, with vanilla custard or ice cream on top. Very sweet and sticky — a hug in a bowl.' },
    kidTip: { el: 'Είναι πολύ γλυκό — ένα φτάνει για δύο. Διάλεξε «custard» (ζεστή κίτρινη κρέμα βανίλιας) ή παγωτό. Θα το βρεις στο μενού κάτω από τη λέξη «puddings»: στη Βρετανία «pudding» σημαίνει απλώς επιδόρπιο!', en: 'It is very sweet — one is enough for two. Choose “custard” (a warm yellow vanilla sauce) or ice cream. Look for it on the menu under “puddings”: in Britain “pudding” simply means dessert!' },
    funFact: { el: 'Το μυστικό του υλικό είναι οι χουρμάδες — ψιλοκομμένοι τόσο πολύ που λιώνουν μέσα στο κέικ, και οι περισσότεροι δεν μαντεύουν ποτέ ότι είναι εκεί.', en: 'Its secret ingredient is dates — chopped so small that they melt into the sponge, and most people never guess they are there.' },
    where: { el: 'Στο μενού των επιδορπίων σε παμπ και εστιατόρια, όλο τον χρόνο — αλλά ταιριάζει πιο πολύ σε κρύα, βροχερή μέρα.', en: 'On the dessert menu of pubs and restaurants all year round — but it suits a cold, rainy day best.' },
  },
  {
    id: 'jacket-potato', emoji: '🥔', kind: 'snack', brave: 1,
    name: { el: 'Ψητή πατάτα με τη φλούδα (Jacket potato)', en: 'Jacket potato' },
    what: { el: 'Μια τεράστια πατάτα ψημένη ολόκληρη μέχρι να γίνει η φλούδα της τραγανή, που την ανοίγουν στη μέση και τη γεμίζουν: βούτυρο, τριμμένο τυρί, φασόλια σε σάλτσα, τόνο με μαγιονέζα. Μέσα είναι αφράτη και αχνιστή.', en: 'A huge potato baked whole until its skin turns crisp, then split open and filled: butter, grated cheese, baked beans, tuna mayonnaise. Inside it is fluffy and steaming.' },
    kidTip: { el: 'Διάλεξε γέμιση — «cheese and beans» είναι η κλασική, «just butter» η πιο απλή. Έρχεται καυτή: περίμενε ένα λεπτό και φάε το μαλακό μέσα με πιρούνι. Η τραγανή φλούδα είναι το καλύτερο κομμάτι!', en: 'Pick a filling — “cheese and beans” is the classic, “just butter” the simplest. It arrives piping hot: wait a minute and eat the soft inside with a fork. The crispy skin is the best bit!' },
    funFact: { el: 'Τη δεκαετία του 1850 ένας συγγραφέας περιέγραψε τους «baked potato men» του Λονδίνου: πουλούσαν ψητές πατάτες από μικρούς φούρνους στις γωνιές των δρόμων, και τον χειμώνα ο κόσμος τις αγόραζε και για να ζεστάνει τα χέρια του!', en: 'In the 1850s a writer described London’s “baked potato men”: they sold hot potatoes from little ovens on street corners, and in winter people bought them as much to warm their hands as to eat!' },
    where: { el: 'Σε πάγκους και τροχήλατα φουρνάκια στις αγορές, σε καφέ και στα καφέ των μουσείων — ένα από τα πιο φτηνά ζεστά μεσημεριανά του Λονδίνου.', en: 'At market stalls and street carts, in cafés and museum cafés — one of the cheapest hot lunches in London.' },
  },
  {
    id: 'cup-of-tea', emoji: '🫖', kind: 'drink', brave: 1, adultsOnly: true,
    name: { el: 'Ένα φλιτζάνι τσάι (A cup of tea)', en: 'A cup of tea' },
    what: { el: 'Το ποτό που κρατάει τη Βρετανία όρθια: δυνατό μαύρο τσάι με λίγο γάλα, σε κούπα. Όταν είναι πολύ δυνατό και με ζάχαρη το λένε «builder’s tea», τσάι του οικοδόμου. Σημείωση για τους γονείς.', en: 'The drink Britain runs on: strong black tea with a splash of milk, in a mug. Extra strong and sweet, it is called “builder’s tea”. A note for the parents.' },
    kidTip: { el: 'Τα παιδιά μπορούν να παραγγείλουν ζεστή σοκολάτα και να παρακολουθήσουν τη μεγάλη βρετανική διαμάχη: πρώτα το γάλα ή πρώτα το τσάι; Ρώτα έναν Λονδρέζο και δες πόσο σοβαρά το παίρνει!', en: 'Kids can order a hot chocolate and watch the great British argument: milk first or tea first? Ask a Londoner and see how seriously they take it!' },
    funFact: { el: 'Οι Βρετανοί πίνουν περίπου 100 εκατομμύρια φλιτζάνια τσάι την ημέρα — πάνω από ένα για κάθε κάτοικο της χώρας, μαζί με τα μωρά!', en: 'Britons drink around 100 million cups of tea a day — more than one for every single person in the country, babies included!' },
    where: { el: 'Παντού: σε καφέ, τεϊοποτεία, σαλόνια ξενοδοχείων και παμπ. Πες «a cup of tea» και θα έρθει με γάλα, εκτός αν πεις «no milk».', en: 'Everywhere: cafés, tea rooms, hotel lounges and pubs. Say “a cup of tea” and it comes with milk unless you say “no milk”.' },
  },
];
