/**
 * WiseBot Explorer · Γεύσεις της Πράγας / A taste of Prague
 * Written for a family with a 7–12 year old: what it is, a tip for the kids, one fact for
 * the parents, and the kind of place that serves it. No business names. Beer only as a
 * note for the parents.
 */
import type { TasteItem } from '../types';

export const TASTE: TasteItem[] = [
  {
    id: 'trdelnik', emoji: '🍩', kind: 'sweet', brave: 1,
    name: { el: 'Τρντέλνικ (Trdelník)', en: 'Trdelník' },
    what: { el: 'Ζύμη τυλιγμένη γύρω από έναν ξύλινο κύλινδρο, ψημένη πάνω από κάρβουνα και πασπαλισμένη με ζάχαρη και καρύδια. Τραγανή απ’ έξω, μαλακή μέσα, μυρίζει κανέλα — και είναι, για να λέμε την αλήθεια, γλυκό για τους τουρίστες, όχι παλιά παράδοση της Πράγας.', en: 'Dough wound around a wooden roller, baked over coals and rolled in sugar and walnuts. Crisp outside, soft inside and smelling of cinnamon — and, to be honest, a treat for visitors rather than an old Prague tradition.' },
    kidTip: { el: 'Πωλείται ζεστό, όλο τον χρόνο, από πάγκους και παραθυράκια στους δρόμους. Είναι μεγάλο — μοιραστείτε ένα, και πάρτε το σκέτο: η γέμιση με παγωτό είναι μοντέρνα προσθήκη. Πες «Jeden trdelník, prosím» (ένα τρντέλνικ, παρακαλώ).', en: 'Sold warm all year from street stalls and shop windows. It is big — share one, and have it plain first: the ice-cream filling is a modern add-on. Say “Jeden trdelník, prosím” (one trdelník, please).' },
    funFact: { el: 'Ο πρόγονός του είναι το kürtőskalács, το γλυκό των Ούγγρων της Τρανσυλβανίας. Λέγεται ότι η συνταγή έφτασε στη σλοβακική πόλη Σκάλιτσα πριν από 200 και πλέον χρόνια με τον μάγειρα ενός Ούγγρου στρατηγού — και σήμερα ο «Skalický trdelník» έχει προστατευόμενη ονομασία στην ΕΕ.', en: 'Its ancestor is kürtőskalács, the sweet of the Hungarians of Transylvania. The story goes the recipe reached the Slovak town of Skalica over 200 years ago with a Hungarian general’s cook — and today “Skalický trdelník” has protected status in the EU.' },
    where: { el: 'Σε πάγκους και μικρά μαγαζάκια στους δρόμους της παλιάς πόλης — τα βρίσκεις από τον καπνό και τη μυρωδιά της κανέλας.', en: 'At street stalls and little shops in the old town — you find them by the smoke and the smell of cinnamon.' },
  },
  {
    id: 'svickova', emoji: '🍛', kind: 'dish', brave: 1,
    name: { el: 'Σβίτσκοβα (Svíčková na smetaně)', en: 'Svíčková na smetaně' },
    what: { el: 'Μοσχάρι σιγομαγειρεμένο σε μια βελούδινη, λίγο γλυκιά σάλτσα από καρότο, σελινόριζα και κρέμα, με αφράτες φέτες βραστής ζύμης ψωμιού (knedlíky) που ρουφάνε τη σάλτσα. Από πάνω μια κουταλιά κόκκινη μαρμελάδα από μούρα, σαντιγί και μια φέτα λεμόνι!', en: 'Slow-cooked beef in a velvety, slightly sweet sauce of carrot, celeriac and cream, with fluffy slices of boiled bread dough (knedlíky) that soak it all up. On top: a spoon of red berry jam, whipped cream and a slice of lemon!' },
    kidTip: { el: 'Η σάλτσα είναι ήπια και γλυκούλα — τα περισσότερα παιδιά τη λατρεύουν. Ανακάτεψε τη μαρμελάδα και τη σαντιγί μέσα στη σάλτσα· έτσι τρώγεται. Ζήτα «poloviční porci, prosím» (μισή μερίδα, παρακαλώ).', en: 'The sauce is mild and a little sweet — most kids love it. Stir the jam and the whipped cream into the sauce; that is how it is eaten. Ask for “poloviční porci, prosím” (half a portion, please).' },
    funFact: { el: 'Το όνομά της έρχεται από τη λέξη svíčka, «κερί»: λέγεται ότι το μακρύ, λεπτό κομμάτι μοσχάρι από το οποίο φτιάχνεται (το φιλέτο) μοιάζει με κερί.', en: 'Its name comes from svíčka, the Czech word for “candle”: the story goes the long, thin cut of beef it is made from (the tenderloin) looks like one.' },
    where: { el: 'Σε παραδοσιακά εστιατόρια και ταβέρνες (hospoda) — σχεδόν πάντα στον κατάλογο, συχνά ως πιάτο ημέρας το μεσημέρι.', en: 'In traditional restaurants and taverns (hospoda) — nearly always on the menu, often as the lunchtime dish of the day.' },
  },
  {
    id: 'gulas', emoji: '🍲', kind: 'dish', brave: 2,
    name: { el: 'Γκούλας με κνέντλικι (Guláš s knedlíkem)', en: 'Guláš with dumplings (Guláš s knedlíkem)' },
    what: { el: 'Κομματάκια μοσχάρι σε πηχτή, σκούρα κόκκινη σάλτσα με πολύ κρεμμύδι και γλυκιά πάπρικα, με φέτες knedlíky δίπλα και συχνά ροδέλες ωμό κρεμμύδι από πάνω. Πιο πηχτό από το ουγγρικό, που είναι μάλλον σούπα.', en: 'Chunks of beef in a thick, dark red sauce with lots of onion and sweet paprika, with slices of knedlíky on the side and often raw onion rings on top. Thicker than the Hungarian one, which is more of a soup.' },
    kidTip: { el: 'Συνήθως δεν καίει — η πάπρικα είναι η γλυκιά — αλλά ρώτα «Je to pálivé?» (είναι καυτερό;). Παραμέρισε το ωμό κρεμμύδι αν δεν σου αρέσει και βούτα τα knedlíky στη σάλτσα: γι’ αυτό είναι εκεί.', en: 'It is usually not hot — the paprika is the sweet kind — but ask “Je to pálivé?” (is it spicy?). Push the raw onion aside if you do not like it and dip the knedlíky in the sauce: that is what they are for.' },
    funFact: { el: 'Η λέξη έρχεται από το ουγγρικό gulyás, που σημαίνει «βοσκός αγελάδων»: οι βοσκοί το μαγείρευαν σε καζάνι στους κάμπους. Έφτασε στην Πράγα όταν Τσέχοι και Ούγγροι ζούσαν στην ίδια αυτοκρατορία, την Αυστροουγγαρία.', en: 'The word comes from the Hungarian gulyás, “cattle herdsman”: the herdsmen cooked it in a kettle out on the plains. It reached Prague when Czechs and Hungarians lived in the same empire, Austria-Hungary.' },
    where: { el: 'Σε ταβέρνες (hospoda) και εστιατόρια, και σε πάγκους στις χριστουγεννιάτικες αγορές, όπου σερβίρεται μέσα σε ένα σκαμμένο καρβέλι ψωμιού.', en: 'In taverns (hospoda) and restaurants, and at Christmas-market stalls, where it comes inside a hollowed-out loaf of bread.' },
  },
  {
    id: 'smazeny-syr', emoji: '🧀', kind: 'dish', brave: 1,
    name: { el: 'Σμάζενι σιρ (Smažený sýr)', en: 'Fried cheese (Smažený sýr)' },
    what: { el: 'Μια χοντρή φέτα τυρί, πανέ και τηγανητή μέχρι να γίνει χρυσή και τραγανή, ενώ μέσα το τυρί λιώνει και κάνει κλωστές. Σερβίρεται με τηγανητές πατάτες και μια κρεμώδη σάλτσα ταρτάρ.', en: 'A thick slice of cheese, breaded and fried until golden and crunchy, while inside the cheese melts and goes stringy. Served with chips and a creamy tartar sauce.' },
    kidTip: { el: 'Αγαπημένο πιάτο των παιδιών σε όλη την Τσεχία — αλλά περίμενε ένα λεπτό, το λιωμένο τυρί μέσα καίει! Παράγγειλε «Smažený sýr s hranolky, prosím» (τηγανητό τυρί με πατάτες, παρακαλώ).', en: 'A favourite of kids all over Czechia — but wait a minute, the melted cheese inside is very hot! Order “Smažený sýr s hranolky, prosím” (fried cheese with chips, please).' },
    funFact: { el: 'Οι Τσέχοι το φωνάζουν χαϊδευτικά «smažák» και σε παραθυράκια με γρήγορο φαγητό το πουλάνε ακόμη και μέσα σε ψωμάκι, σαν σάντουιτς του δρόμου — η τσέχικη απάντηση στο μπέργκερ.', en: 'Czechs call it “smažák” for short, and at fast-food windows you can even buy it stuffed in a bun as a street sandwich — the Czech answer to a burger.' },
    where: { el: 'Σε κάθε ταβέρνα και εστιατόριο, και σε παραθυράκια με γρήγορο φαγητό — μέσα σε ψωμάκι, για τον δρόμο.', en: 'In any tavern or restaurant, and at fast-food windows — in a bun, to eat on the go.' },
  },
  {
    id: 'kolace', emoji: '🥮', kind: 'sweet', brave: 1,
    name: { el: 'Κόλατσε (Koláče)', en: 'Koláče' },
    what: { el: 'Στρογγυλά, αφράτα γλυκά ψωμάκια με μια «λιμνούλα» γέμισης στη μέση: γλυκό λευκό τυρί (tvaroh), πηχτή μαρμελάδα δαμάσκηνο ή σκούρα πάστα από παπαρουνόσπορο. Μαλακά και όχι πολύ γλυκά.', en: 'Round, fluffy sweet buns with a little “pool” of filling in the middle: sweet white cheese (tvaroh), thick plum jam or a dark poppy-seed paste. Soft and not too sugary.' },
    kidTip: { el: 'Αν το γκρίζο του παπαρουνόσπορου σε ξενίζει, ξεκίνα με τυρί ή βερίκοκο. Πωλούνται από το πρωί στους φούρνους· ζήτα «Jeden tvarohový koláč, prosím» (ένα κόλατς με τυρί, παρακαλώ).', en: 'If the grey poppy-seed one looks odd, start with cheese or apricot. Bakeries sell them from the morning; ask for “Jeden tvarohový koláč, prosím” (one cheese koláč, please).' },
    funFact: { el: 'Τσέχοι μετανάστες τα πήραν μαζί τους στο Τέξας πριν από 150 και πλέον χρόνια — σήμερα εκεί γίνονται φεστιβάλ κόλατσε, και μια μικρή πόλη αυτοαποκαλείται περήφανα «Πρωτεύουσα των Kolache του Τέξας».', en: 'Czech immigrants took them to Texas over 150 years ago — today Texas holds kolache festivals, and one small town proudly calls itself the “Kolache Capital of Texas”.' },
    where: { el: 'Σε φούρνους (pekařství) και ζαχαροπλαστεία (cukrárna) — στη βιτρίνα, δίπλα στα ψωμιά.', en: 'In bakeries (pekařství) and cake shops (cukrárna) — in the window, next to the bread.' },
  },
  {
    id: 'chlebicky', emoji: '🥪', kind: 'snack', brave: 2,
    name: { el: 'Χλεμπίτσκι (Chlebíčky)', en: 'Chlebíčky (open sandwiches)' },
    what: { el: 'Μικρά ανοιχτά σάντουιτς: μια φέτα λευκό ψωμί αλειμμένη με πατατοσαλάτα ή βούτυρο, και από πάνω ζαμπόν, βραστό αυγό, τυρί, ντομάτα και ένα κομματάκι πίκλα. Κάθε ένα είναι μια μικρή, πολύχρωμη μπουκιά.', en: 'Little open sandwiches: a slice of white bread spread with potato salad or butter, topped with ham, hard-boiled egg, cheese, tomato and a bit of pickle. Each one is a small, colourful mouthful.' },
    kidTip: { el: 'Είναι μικρά, πάρε 2–3 διαφορετικά και δοκίμασε. Το πιο εύκολο είναι με ζαμπόν (šunkový). Δείξε στη βιτρίνα και πες «Dva chlebíčky, prosím» (δύο χλεμπίτσκι, παρακαλώ)· τρώγονται όρθιοι, στον πάγκο.', en: 'They are small, so pick 2–3 different ones to try. The easiest is ham (šunkový). Point at the glass case and say “Dva chlebíčky, prosím” (two chlebíčky, please); people eat them standing at the counter.' },
    funFact: { el: 'Λέγεται ότι γεννήθηκαν στην Πράγα το 1916, όταν ένας ζωγράφος ζήτησε από τον ιδιοκτήτη ενός μαγαζιού με λιχουδιές κάτι που να τρώγεται με το ένα χέρι στα εγκαίνια της έκθεσής του — και το ψωμί έγινε πιάτο.', en: 'The story goes they were born in Prague in 1916, when a painter asked a delicatessen owner for something guests could eat with one hand at his exhibition — and the bread became the plate.' },
    where: { el: 'Σε μαγαζιά με λιχουδιές (lahůdky), σε πάγκους φούρνων και σε καφέ — διάλεξε από τη γυάλινη βιτρίνα.', en: 'In delicatessens (lahůdky), at bakery counters and in cafés — choose from the glass case.' },
  },
  {
    id: 'herbal-cola', emoji: '🥤', kind: 'drink', brave: 2,
    name: { el: 'Τσέχικη κόλα από βότανα (bylinná kola)', en: 'Czech herbal cola (bylinná kola)' },
    what: { el: 'Μια σκούρα, αφρώδης κόλα που φτιάχνεται από σιρόπι με βότανα και φρούτα. Είναι λιγότερο γλυκιά από τις κόλες που ξέρεις και θυμίζει λίγο γλυκόριζα. Συχνά σερβίρεται από βαρέλι, με μια φέτα λεμόνι.', en: 'A dark, fizzy cola made from a syrup of herbs and fruit. It is less sweet than the colas you know and tastes a little like liquorice. It is often served on tap, with a slice of lemon.' },
    kidTip: { el: 'Έχει καφεΐνη, όπως και οι άλλες κόλες, οπότε ένα μικρό ποτήρι είναι μια χαρά. Ζήτα «malou, prosím» (μια μικρή, παρακαλώ). Αν δεν σου αρέσει, δοκίμασε τη malinovka, το ροζ αναψυκτικό με γεύση σμέουρο που πίνουν τα παιδιά στην Τσεχία.', en: 'It has caffeine, like other colas, so a small glass is plenty. Ask for “malou, prosím” (a small one, please). If it is not for you, try malinovka, the pink raspberry soda that Czech kids drink.' },
    funFact: { el: 'Γεννήθηκε το 1960 στην Τσεχοσλοβακία, όταν οι δυτικές κόλες δεν έφταναν εύκολα στη χώρα: ένα ερευνητικό εργαστήριο φαρμάκων έφτιαξε δικό του σιρόπι από 14 βότανα και φρούτα — και το ποτό αγαπήθηκε τόσο, που πίνεται ακόμη.', en: 'It was born in 1960 in Czechoslovakia, when Western colas were hard to get: a pharmaceutical research lab created its own syrup from 14 herbs and fruits — and the drink became so loved that it is still around today.' },
    where: { el: 'Σε καφέ, ταβέρνες και πάγκους με φαγητό — ρώτα αν την έχουν «točenou» (από βαρέλι).', en: 'In cafés, taverns and food stalls — ask if they have it “točená” (on tap).' },
  },
  {
    id: 'pivo', emoji: '🍺', kind: 'drink', brave: 1, adultsOnly: true,
    name: { el: 'Τσέχικη μπίρα (České pivo)', en: 'Czech beer (České pivo)' },
    what: { el: 'Η χρυσαφένια ξανθιά λάγκερ για την οποία είναι διάσημη η χώρα — μόνο για τους γονείς.', en: 'The golden pale lager the country is famous for — for the parents only.' },
    kidTip: { el: 'Οι ταβέρνες με κήπο (pivní zahrádka) είναι φιλικές για οικογένειες, συχνά με παιδική χαρά, και τα παιδιά παίρνουν παραδοσιακά malinovka ή χυμό. Τα μεγαλύτερα παιδιά μπορούν να δουν τα τεράστια χάλκινα καζάνια σε μια ξενάγηση σε ζυθοποιείο.', en: 'Beer gardens (pivní zahrádka) are family-friendly, often with a playground, and kids traditionally get a malinovka or a juice. Older kids can see the huge copper kettles on a brewery tour.' },
    funFact: { el: 'Η ξανθιά, διάφανη λάγκερ παρασκευάστηκε για πρώτη φορά το 1842 στην τσεχική πόλη Πλζεν — γι’ αυτό οι ξανθιές μπίρες σε όλο τον κόσμο λέγονται «πίλσνερ».', en: 'Pale, clear golden lager was first brewed in 1842 in the Czech town of Plzeň — which is why pale beers all over the world are called “pilsner”.' },
    where: { el: 'Σε ταβέρνες (hospoda) και κήπους μπίρας, ιδίως σε αυτούς στα πάρκα πάνω στους λόφους, με θέα στο ποτάμι.', en: 'In taverns (hospoda) and beer gardens, especially the ones in the parks up on the hills, with a view over the river.' },
  },
];
