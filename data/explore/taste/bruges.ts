/**
 * WiseBot Explorer · Γεύσεις της Μπριζ / A taste of Bruges
 * Written for a family with a 7–12 year old: what it is, a tip for the kids, one fact for
 * the parents, and the kind of place that serves it. No business names. Beer only as a
 * note for the parents.
 */
import type { TasteItem } from '../types';

export const TASTE: TasteItem[] = [
  {
    id: 'liege-waffle', emoji: '🧇', kind: 'sweet', brave: 1,
    name: { el: 'Βάφλα Λιέγης (Luikse wafel)', en: 'Liège waffle (Luikse wafel)' },
    what: { el: 'Στο Βέλγιο υπάρχουν δύο βάφλες: η Βρυξελλών, ορθογώνια, αφράτη και τραγανή, που τρώγεται σε πιάτο με σαντιγί ή φράουλες, και η Λιέγης, μικρότερη και πιο βαριά, με κομματάκια ζάχαρης που καραμελώνουν στο ψήσιμο. Ζεστή και κολλώδης.', en: 'Belgium has two waffles: the Brussels one, rectangular, light and crisp, eaten on a plate with cream or strawberries, and the Liège one, smaller and heavier, with chunks of pearl sugar that caramelise as it bakes. Warm and sticky.' },
    kidTip: { el: 'Η Λιέγης τρώγεται στο χέρι, σκέτη, από παράθυρα-βαφλάδικα στον δρόμο — η Βρυξελλών θέλει πιάτο και πιρούνι. Πες «Eén wafel, alstublieft» (μία βάφλα, παρακαλώ).', en: 'The Liège one is eaten by hand, plain, from little waffle windows in the street — the Brussels one needs a plate and a fork. Say “Eén wafel, alstublieft” (one waffle, please).' },
    funFact: { el: 'Στο Βέλγιο κανείς δεν λέει «βελγική βάφλα»! Το όνομα έγινε διάσημο στη Διεθνή Έκθεση της Νέας Υόρκης το 1964, όπου μια βελγική οικογένεια πουλούσε βάφλες Βρυξελλών με φράουλες και σαντιγί — περίπου 2.500 τη μέρα.', en: 'In Belgium nobody says “Belgian waffle”! The name became famous at the 1964 New York World’s Fair, where a Belgian family sold Brussels waffles with strawberries and cream — about 2,500 a day.' },
    where: { el: 'Σε βαφλάδικα και παράθυρα με βάφλες στα σοκάκια του κέντρου — τις μυρίζεις πριν τις δεις.', en: 'At waffle stands and take-away windows in the lanes of the old centre — you smell them before you see them.' },
  },
  {
    id: 'frietjes', emoji: '🍟', kind: 'snack', brave: 1,
    name: { el: 'Πατάτες τηγανητές με μαγιονέζα (Frietjes met mayonaise)', en: 'Fries with mayonnaise (Frietjes met mayonaise)' },
    what: { el: 'Χοντρές πατάτες, τηγανισμένες δύο φορές για να είναι τραγανές απ’ έξω και αφράτες μέσα, σε χάρτινο χωνάκι με μια μεγάλη κουταλιά μαγιονέζα από πάνω. Ζεστές, αλμυρές και λίγο λαδωμένες στα δάχτυλα.', en: 'Thick-cut potatoes fried twice so they are crisp outside and fluffy inside, served in a paper cone with a big dollop of mayonnaise on top. Hot, salty and a little messy on the fingers.' },
    kidTip: { el: 'Αν η μαγιονέζα δεν σου αρέσει, ζήτα κέτσαπ. Στο frituur πες «Een kleine friet met ketchup, alstublieft» (μια μικρή μερίδα με κέτσαπ, παρακαλώ) — και μη σε τρομάζει η ουρά, όλοι περιμένουν.', en: 'Not a mayonnaise fan? Ask for ketchup. At the frituur say “Een kleine friet met ketchup, alstublieft” (a small fries with ketchup, please) — and do not mind the queue, everyone waits.' },
    funFact: { el: 'Οι Βέλγοι θα σου πουν ότι οι τηγανητές πατάτες είναι δικές τους και όχι γαλλικές — και το 2014 η Φλάνδρα αναγνώρισε επίσημα την κουλτούρα του frietkot ως άυλη πολιτιστική κληρονομιά, όπως ένα παλιό μνημείο.', en: 'Belgians will tell you that fries are theirs, not French — and in 2014 Flanders officially recognised its “frietkot” (fry-stand) culture as intangible cultural heritage, just like an old monument.' },
    where: { el: 'Σε frituur ή frietkot — μικρά μαγαζάκια ή παράγκες που φτιάχνουν μόνο πατάτες, συχνά σε πλατείες. Παραγγέλνεις στον πάγκο και τρως όρθιος.', en: 'At a frituur or frietkot — little shops or huts that do nothing but fries, often on a square. Order at the counter and eat standing up.' },
  },
  {
    id: 'pralines', emoji: '🍫', kind: 'sweet', brave: 1,
    name: { el: 'Πραλίνες (Pralines)', en: 'Pralines' },
    what: { el: 'Μικρά σοκολατάκια με σκληρό κέλυφος σοκολάτας και μαλακή γέμιση: κρέμα, καραμέλα, φρούτο ή ξηρούς καρπούς. Κάθε ένα έχει άλλο σχήμα και άλλη έκπληξη μέσα.', en: 'Little chocolates with a hard chocolate shell and a soft filling: cream, caramel, fruit or nuts. Every one has a different shape and a different surprise inside.' },
    kidTip: { el: 'Στα μαγαζιά τα διαλέγεις ένα-ένα σε κουτάκι — διάλεξε τρία-τέσσερα ο καθένας. Ρώτα «Mag ik kiezen?» (μπορώ να διαλέξω;). Κάποια έχουν ξηρούς καρπούς ή αμυγδαλόπαστα· αυτά με γάλα (melk) είναι τα πιο γλυκά.', en: 'In the shops you pick them one by one into a little box — choose three or four each. Ask “Mag ik kiezen?” (may I choose?). Some have nuts or marzipan; the milk (melk) ones are the sweetest.' },
    funFact: { el: 'Η πραλίνα — σοκολάτα με μαλακή γέμιση — εφευρέθηκε στις Βρυξέλλες το 1912, σε ένα μαγαζί που είχε ξεκινήσει ως φαρμακείο: ο παππούς του εφευρέτη σκέπαζε τα πικρά φάρμακα με σοκολάτα για να καταπίνονται πιο εύκολα.', en: 'The praline — a chocolate with a soft filling — was invented in Brussels in 1912, in a shop that began as a pharmacy: the inventor’s grandfather used to coat bitter medicines in chocolate to make them easier to swallow.' },
    where: { el: 'Σε σοκολατερί (chocolaterie) — η Μπριζ έχει δεκάδες, ειδικά στους δρόμους γύρω από την κεντρική πλατεία. Ψάξε αυτές που τις φτιάχνουν στο πίσω δωμάτιο.', en: 'In chocolate shops (chocolaterie) — Bruges has dozens, especially in the streets around the market square. Look for the ones that make them in the back room.' },
  },
  {
    id: 'moules-frites', emoji: '🦪', kind: 'dish', brave: 2,
    name: { el: 'Μύδια με πατάτες (Mosselen met friet)', en: 'Moules-frites (Mosselen met friet)' },
    what: { el: 'Μια μεγάλη μαύρη κατσαρόλα γεμάτη μύδια, βρασμένα στον ατμό με σέλινο και κρεμμύδι, με τηγανητές πατάτες δίπλα. Τα μύδια είναι μαλακά και αλμυρά, σαν μια μπουκιά θάλασσα.', en: 'A big black pot full of mussels, steamed with celery and onion, with a heap of fries on the side. The mussels are soft and salty, like a bite of the sea.' },
    kidTip: { el: 'Οι Βέλγοι χρησιμοποιούν ένα άδειο κέλυφος σαν τσιμπίδα για να βγάζουν το επόμενο μύδι — δοκίμασέ το! Η μερίδα είναι ένα ολόκληρο κιλό, οπότε μοιραστείτε μία, και άφησε όσα έμειναν κλειστά.', en: 'Belgians use an empty shell as tongs to pluck out the next mussel — try it! A portion is a whole kilo, so share one, and leave any that stayed shut.' },
    funFact: { el: 'Το λένε εθνικό πιάτο του Βελγίου, κι όμως τα περισσότερα μύδια έρχονται από τη Ζηλανδία, λίγο πιο πέρα από τα σύνορα, στην Ολλανδία. Η σεζόν ανοίγει κάθε Ιούλιο — και τότε τα εστιατόρια κρεμούν πινακίδες «Mosselen!».', en: 'It is called Belgium’s national dish, yet most of the mussels come from Zeeland, just over the border in the Netherlands. The season opens every July — and restaurants hang out “Mosselen!” signs.' },
    where: { el: 'Σε μπρασερί και εστιατόρια, κυρίως από τον Ιούλιο μέχρι την άνοιξη — ψάξε τη λέξη «mosselen» στον πίνακα έξω.', en: 'In brasseries and restaurants, mostly from July to spring — look for the word “mosselen” on the board outside.' },
  },
  {
    id: 'speculoos', emoji: '🍪', kind: 'sweet', brave: 1,
    name: { el: 'Σπεκουλόος (Speculoos)', en: 'Speculoos' },
    what: { el: 'Ένα λεπτό, τραγανό μπισκότο σε χρώμα καραμέλας, με γεύση κανέλας και καμένης ζάχαρης. Σπάει με ένα «κρακ» και μυρίζει Χριστούγεννα όλο τον χρόνο.', en: 'A thin, crunchy caramel-brown biscuit tasting of cinnamon and burnt sugar. It snaps with a “crack” and smells like Christmas all year round.' },
    kidTip: { el: 'Ψάξε το και ως άλειμμα (speculoospasta): σαν σοκολατένιο άλειμμα, αλλά με γεύση μπισκότου — άλειψέ το σε ψωμί. Το ίδιο το μπισκότο βούτηξέ το σε ζεστό γάλα.', en: 'Look for it as a spread too (speculoospasta): like a chocolate spread but tasting of biscuit — put it on bread. Dunk the biscuit itself in warm milk.' },
    funFact: { el: 'Παραδοσιακά ψήνεται για τη γιορτή του Αγίου Νικολάου (Sinterklaas), στις 6 Δεκεμβρίου: η ζύμη πιέζεται σε ξύλινα καλούπια σκαλισμένα με τη μορφή του αγίου, και τα παιδιά βρίσκουν τα μπισκότα στα παπούτσια τους το πρωί.', en: 'It is traditionally baked for the feast of St Nicholas (Sinterklaas) on 6 December: the dough is pressed into carved wooden moulds shaped like the saint, and children find the biscuits in their shoes in the morning.' },
    where: { el: 'Σε φούρνους και σούπερ μάρκετ — και είναι το μικρό μπισκότο που έρχεται πάνω στο πιατάκι σε κάθε καφέ.', en: 'In bakeries and supermarkets — and it is the little biscuit that arrives on the saucer in every café.' },
  },
  {
    id: 'stoofvlees', emoji: '🍲', kind: 'dish', brave: 2,
    name: { el: 'Φλαμανδικό στιφάδο (Stoofvlees)', en: 'Flemish stew (Stoofvlees)' },
    what: { el: 'Κομμάτια μοσχάρι, σιγομαγειρεμένα ώρες σε μια σκούρα, γλυκόξινη σάλτσα, μέχρι να λιώνουν στο πιρούνι. Σερβίρεται πάντα με τηγανητές πατάτες και συχνά με μια κουταλιά πουρέ μήλου.', en: 'Chunks of beef slow-cooked for hours in a dark, sweet-and-sour sauce until they melt on the fork. Always served with fries, and often with a spoonful of apple sauce.' },
    kidTip: { el: 'Το κρέας είναι πολύ μαλακό και δεν έχει κόκαλα. Βούτα τις πατάτες στη σάλτσα — έτσι το τρώνε όλοι. Ζήτα «een kinderportie» (παιδική μερίδα) ή μοιραστείτε.', en: 'The meat is very soft and has no bones. Dip your fries in the sauce — that is how everyone eats it. Ask for “een kinderportie” (a child’s portion) or share.' },
    funFact: { el: 'Το μυστικό της σάλτσας είναι μια φέτα ψωμί αλειμμένη με μουστάρδα, που ρίχνεται στην κατσαρόλα: λιώνει σιγά-σιγά και κάνει τη σάλτσα πηχτή και βελούδινη.', en: 'The secret of the sauce is a slice of bread spread with mustard, dropped into the pot: it slowly dissolves and makes the sauce thick and velvety.' },
    where: { el: 'Σε μπρασερί, ταβέρνες, ακόμη και σε frituur — είναι το πιο συνηθισμένο «σπιτικό» πιάτο της Φλάνδρας.', en: 'In brasseries, taverns and even at a frituur — it is Flanders’ most common “home-cooked” dish.' },
  },
  {
    id: 'waterzooi', emoji: '🥣', kind: 'dish', brave: 1,
    name: { el: 'Βατερζόι (Waterzooi)', en: 'Waterzooi' },
    what: { el: 'Μια κρεμώδης σούπα-φαγητό με κοτόπουλο, πράσο, καρότο και πατάτα, σε λευκό, απαλό ζωμό. Ζεστή, ήρεμη και λίγο γλυκιά — σαν αγκαλιά σε πιάτο.', en: 'A creamy soup-stew of chicken, leek, carrot and potato in a soft white broth. Warm, gentle and slightly sweet — like a hug in a bowl.' },
    kidTip: { el: 'Η εκδοχή με κοτόπουλο (kip) είναι η πιο ήπια για παιδιά· υπάρχει και με ψάρι, με λίγα κοκαλάκια. Βούτα ψωμί στον ζωμό και φάε με κουτάλι.', en: 'The chicken (kip) version is the mildest for kids; there is a fish one too, with a few little bones. Dunk bread in the broth and eat it with a spoon.' },
    funFact: { el: 'Γεννήθηκε στη Γάνδη, τη γειτονική πόλη, και το όνομά του σημαίνει περίπου «νερό που σιγοβράζει». Παλιά γινόταν με ψάρια του ποταμού· λέγεται ότι όταν τα ποτάμια βρόμισαν και τα ψάρια χάθηκαν, οι μάγειρες το έφτιαξαν με κοτόπουλο.', en: 'It was born in Ghent, the city next door, and its name means roughly “simmering water”. It used to be made with river fish; the story goes that when the rivers got dirty and the fish disappeared, cooks switched to chicken.' },
    where: { el: 'Σε παραδοσιακά εστιατόρια και μπρασερί, ως κυρίως πιάτο — συχνά γραμμένο «Gentse waterzooi» στον κατάλογο.', en: 'In traditional restaurants and brasseries, as a main course — often listed as “Gentse waterzooi” on the menu.' },
  },
  {
    id: 'belgisch-bier', emoji: '🍺', kind: 'drink', brave: 1, adultsOnly: true,
    name: { el: 'Βελγική μπίρα (Belgisch bier)', en: 'Belgian beer (Belgisch bier)' },
    what: { el: 'Το Βέλγιο έχει εκατοντάδες είδη μπίρας, καθεμία με το δικό της ποτήρι — μόνο για τους γονείς.', en: 'Belgium has hundreds of kinds of beer, each with its own glass — for the parents only.' },
    kidTip: { el: 'Τα παιδιά μπορούν να ψάξουν τον γελωτοποιό (zot) σε ταμπέλες και ετικέτες: «οι τρελοί της Μπριζ» είναι το παρατσούκλι της πόλης από μια παλιά ιστορία με έναν αυτοκράτορα.', en: 'Kids can hunt for the jester (zot) on signs and labels: “the fools of Bruges” is the city’s nickname, from an old story about an emperor.' },
    funFact: { el: 'Το 2016 ένα ζυθοποιείο του κέντρου έστρωσε έναν αγωγό 3 χιλιομέτρων κάτω από τους δρόμους της Μπριζ: η μπίρα ταξιδεύει υπόγεια μέχρι το εμφιαλωτήριο έξω από την πόλη, ώστε τα φορτηγά να μην περνούν από τα παλιά σοκάκια.', en: 'In 2016 a brewery in the centre laid a 3 km pipeline under the streets of Bruges: the beer travels underground to the bottling plant outside town, so lorries stay out of the old lanes.' },
    where: { el: 'Σε καφέ και μπρασερί σε όλη την πόλη.', en: 'In cafés and brasseries all over town.' },
  },
];
