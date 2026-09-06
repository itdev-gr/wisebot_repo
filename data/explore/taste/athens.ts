/**
 * WiseBot Explorer · Γεύσεις της Αθήνας / A taste of Athens
 * Written for a family with a 7–12 year old: what it is, a tip for the kids, one fact for
 * the parents, and the kind of place that serves it. Most readers eat this food every week,
 * so the cards go for origin stories and street rituals instead of explaining what a
 * souvlaki is. No business names. Coffee only as a note for the parents.
 */
import type { TasteItem } from '../types';

export const TASTE: TasteItem[] = [
  {
    id: 'souvlaki', emoji: '🥙', kind: 'dish', brave: 1,
    name: { el: 'Σουβλάκι με πίτα', en: 'Souvlaki me pitta (grilled meat wrapped in pitta bread)' },
    what: { el: 'Ζεστή πίτα από τη σχάρα, τυλιγμένη γύρω από καλαμάκι ή γύρο, με ντομάτα, κρεμμύδι, τζατζίκι και πατάτες — όλα μαζί σε ένα χαρτί. Τραγανή απ’ έξω, ζουμερή μέσα.', en: 'Hot pitta straight off the grill, wrapped round skewered meat or gyros with tomato, onion, tzatziki and chips — all rolled up in one paper. Crisp outside, juicy inside.' },
    kidTip: { el: 'Παράγγειλε «απ’ όλα» αν τα θέλεις όλα μέσα, ή πες ευγενικά «χωρίς κρεμμύδι». Και πρόσεχε: στην Αθήνα «καλαμάκι» είναι το ξυλάκι με το κρέας — στη Θεσσαλονίκη το ίδιο το λένε «σουβλάκι»!', en: 'Order it “ap’ ola” (with everything) or ask politely for “horis kremmydi” (no onion). And watch out: in Athens “kalamaki” is the meat on the stick — in Thessaloniki they call that a “souvlaki”!' },
    funFact: { el: 'Στο Ακρωτήρι της Σαντορίνης οι αρχαιολόγοι βρήκαν πέτρινες ψησταριές με εγκοπές για σουβλάκια, ηλικίας περίπου 3.600 ετών — οι Έλληνες έψηναν καλαμάκια πολύ πριν χτιστεί ο Παρθενώνας!', en: 'At Akrotiri on Santorini, archaeologists found stone grills with notches for skewers, about 3,600 years old — Greeks were grilling kalamakia long before the Parthenon was built!' },
    where: { el: 'Σε κάθε σουβλατζίδικο της γειτονιάς — το βρίσκεις από τον καπνό της ψησταριάς και την ουρά στην πόρτα.', en: 'At any neighbourhood souvlaki shop (souvlatzidiko) — you find it by the smoke from the grill and the queue at the door.' },
  },
  {
    id: 'koulouri', emoji: '🥯', kind: 'snack', brave: 1,
    name: { el: 'Κουλούρι Θεσσαλονίκης', en: 'Koulouri Thessalonikis (sesame bread ring)' },
    what: { el: 'Ένας λεπτός, τραγανός κρίκος ψωμιού, σκεπασμένος ολόκληρος με σουσάμι. Λίγο γλυκό, λίγο αλμυρό, και σπάει με ένα «κρακ» όταν το δαγκώνεις.', en: 'A thin, crunchy ring of bread covered all over in sesame seeds. A little sweet, a little salty, and it snaps with a crack when you bite it.' },
    kidTip: { el: 'Πουλιέται από το ξημέρωμα σε καροτσάκια στις γωνιές και έξω από τα σχολεία — πάρε ένα για τον δρόμο και κράτα την τσάντα σου μακριά από το σουσάμι που πέφτει βροχή!', en: 'Sold from dawn from little carts on street corners and outside schools — grab one for the walk and keep your bag away from the sesame seeds that rain down!' },
    funFact: { el: 'Το όνομά του είναι αρχαίο: έρχεται από τη λέξη «κολλύρα», ένα στρογγυλό ψωμάκι που έτρωγαν οι αρχαίοι Έλληνες — δηλαδή το κουλούρι έχει όνομα πάνω από 2.000 ετών!', en: 'Its name is ancient: it comes from “kollyra”, a small round loaf the ancient Greeks ate — so the koulouri has a name more than 2,000 years old!' },
    where: { el: 'Σε καροτσάκια πλανόδιων στις πλατείες και στις εξόδους του μετρό, και σε κάθε φούρνο.', en: 'From street vendors’ carts on squares and outside metro exits, and in every bakery (fournos).' },
  },
  {
    id: 'spanakopita', emoji: '🥧', kind: 'snack', brave: 1,
    name: { el: 'Σπανακόπιτα και τυρόπιτα', en: 'Spanakopita and tyropita (spinach pie and cheese pie)' },
    what: { el: 'Τραγανά φύλλα ζύμης, το ένα πάνω στο άλλο, με γέμιση σπανάκι και φέτα ή μόνο τυρί. Ζεστή από τον φούρνο, τρίζει στο δάγκωμα και μυρίζει βούτυρο.', en: 'Crisp layers of thin pastry, one on top of the other, filled with spinach and feta or just cheese. Warm from the bakery, it crackles when you bite and smells of butter.' },
    kidTip: { el: 'Αν το σπανάκι σε τρομάζει, ξεκίνα με τυρόπιτα — ή ζήτα «κουρού», με χοντρή ζύμη. Το πρωί είναι πιο φρέσκιες, γι’ αυτό ο φούρνος έχει ουρά πριν από το σχολείο.', en: 'If spinach scares you, start with tyropita — or ask for “kourou”, the kind with thick pastry. They are freshest in the morning, which is why the bakery has a queue before school.' },
    funFact: { el: 'Το «φύλλο» της πίτας το λένε έτσι γιατί ανοίγεται λεπτό σαν φύλλο δέντρου — και η λέξη ταξίδεψε: στα αγγλικά η ζύμη λέγεται «phyllo», ελληνικά δηλαδή!', en: 'The pastry is called “fyllo” because it is rolled as thin as a leaf (fyllo in Greek) — and the word travelled: in English it is still called “phyllo”, plain Greek!' },
    where: { el: 'Σε κάθε φούρνο και τυροπιτάδικο, ειδικά το πρωί — και σε κάθε σπίτι όπου η γιαγιά ανοίγει φύλλο.', en: 'In every bakery (fournos) and pie shop, especially in the morning — and in any home where a grandmother rolls her own fyllo.' },
  },
  {
    id: 'loukoumades', emoji: '🍩', kind: 'sweet', brave: 1,
    name: { el: 'Λουκουμάδες', en: 'Loukoumades (honey doughnut balls)' },
    what: { el: 'Μικρές χρυσαφένιες μπαλίτσες ζύμης, τηγανισμένες μέχρι να φουσκώσουν, περιχυμένες με μέλι ή σιρόπι και κανέλα. Τραγανοί απ’ έξω, αφράτοι μέσα, και σερβίρονται καυτοί.', en: 'Little golden balls of dough, fried until they puff up, then drenched in honey or syrup and cinnamon. Crisp outside, fluffy inside, and served piping hot.' },
    kidTip: { el: 'Βγαίνουν καυτοί — περίμενε λίγο πριν την πρώτη μπουκιά. Ένα πιάτο φτάνει για δύο: ζήτα μία μερίδα και πιρουνάκια για όλους. Το μέλι κολλάει, πάρε χαρτοπετσέτες!', en: 'They come out scorching hot — wait a moment before the first bite. One plate is enough for two: ask for one portion and little forks for everyone. Honey is sticky, grab napkins!' },
    funFact: { el: 'Το όνομά τους σημαίνει απλώς «μπουκιά»: έρχεται από την αραβική λέξη «luqma», που ταξίδεψε μέσα από τα τουρκικά (lokma) μέχρι εδώ. Μία μπουκιά — ακριβώς όσο ένας λουκουμάς!', en: 'Their name simply means “a bite”: it comes from the Arabic word “luqma”, which travelled here through Turkish (lokma). One bite — exactly the size of a loukoumas!' },
    where: { el: 'Σε λουκουματζίδικα στο κέντρο και σε πάγκους στα πανηγύρια — τους μυρίζεις πριν τους δεις.', en: 'At loukoumades shops (loukoumatzidika) in the centre and at stalls at festivals (panigyria) — you smell them before you see them.' },
  },
  {
    id: 'horiatiki', emoji: '🥗', kind: 'dish', brave: 2,
    name: { el: 'Χωριάτικη σαλάτα με φέτα', en: 'Horiatiki (Greek village salad with feta)' },
    what: { el: 'Χοντροκομμένη ντομάτα, αγγούρι, πιπεριά, κρεμμύδι και ελιές, με μια ολόκληρη πλάκα φέτα από πάνω, λάδι και ρίγανη. Δροσερή, αλμυρή και λίγο τσουχτερή από το κρεμμύδι.', en: 'Chunky tomato, cucumber, pepper, onion and olives with a whole slab of feta on top, olive oil and oregano. Cool, salty and a little sharp from the onion.' },
    kidTip: { el: 'Η καλύτερη στιγμή: βουτάς ψωμί στο λάδι με τη ρίγανη που μένει στο πιάτο — το λένε «παπάρα». Αν δεν θέλεις κρεμμύδι ή ελιές, πες το πριν έρθει, όχι μετά!', en: 'The best part: dunking bread in the oil and oregano left in the bowl — Greeks call it “papara”. If you do not want onion or olives, say so before it arrives, not after!' },
    funFact: { el: 'Η φέτα είναι Προϊόν Ονομασίας Προέλευσης (ΠΟΠ) από το 2002: για να λέγεται «φέτα», πρέπει να φτιάχνεται στην Ελλάδα από πρόβειο γάλα, ίσως με λίγο κατσικίσιο. Αλλιώς είναι απλώς «λευκό τυρί»!', en: 'Feta has had EU protected status (PDO) since 2002: to be called “feta” it must be made in Greece from sheep’s milk, perhaps with a little goat’s. Anything else is just “white cheese”!' },
    where: { el: 'Σε κάθε ταβέρνα, στη μέση του τραπεζιού για να τη μοιράζονται όλοι — και σε κάθε καλοκαιρινό τραπέζι στο σπίτι.', en: 'In every taverna, set in the middle of the table for everyone to share — and on every summer table at home.' },
  },
  {
    id: 'yiaourti-meli', emoji: '🍯', kind: 'sweet', brave: 1,
    name: { el: 'Γιαούρτι με μέλι και καρύδια', en: 'Yiaourti me meli (Greek yoghurt with honey and walnuts)' },
    what: { el: 'Πηχτό, κρύο γιαούρτι που στέκεται όρθιο στο κουτάλι, με μια χρυσή κλωστή μέλι από πάνω και σπασμένα καρύδια. Ξινούτσικο, γλυκό και τραγανό, όλα σε μία κουταλιά.', en: 'Thick, cold yoghurt that stands up on the spoon, with a golden thread of honey on top and broken walnuts. Tangy, sweet and crunchy, all in one spoonful.' },
    kidTip: { el: 'Έχει ξηρούς καρπούς — ζήτα το «σκέτο με μέλι» αν χρειάζεται. Ζήτα το μέλι στην άκρη και ρίξ’ το μόνος σου: μπορείς να ζωγραφίσεις ό,τι θέλεις πάνω στο γιαούρτι πριν το φας.', en: 'It has nuts — ask for it “plain with honey” if you need to. Ask for the honey on the side and pour it yourself: you can draw whatever you like on the yoghurt before you eat it.' },
    funFact: { el: 'Το μέλι του Υμηττού, του βουνού που βλέπεις πάνω από την Αθήνα, ήταν φημισμένο ήδη στην αρχαιότητα: αρχαίοι συγγραφείς το ξεχώριζαν ως το καλύτερο, γιατί οι μέλισσες βόσκουν στο θυμάρι.', en: 'Honey from Mount Hymettus, the mountain you can see above Athens, was already famous in antiquity: ancient writers ranked it the best of all, because the bees feed on wild thyme.' },
    where: { el: 'Στα γαλακτοπωλεία (ναι, υπάρχουν ακόμα!), σε καφέ για πρωινό και σαν κέρασμα στο τέλος του φαγητού στην ταβέρνα.', en: 'In dairy shops (galaktopoleia — yes, they still exist!), in cafés for breakfast, and as a free treat at the end of a taverna meal.' },
  },
  {
    id: 'pasteli', emoji: '🍬', kind: 'snack', brave: 1,
    name: { el: 'Παστέλι', en: 'Pasteli (sesame and honey bar)' },
    what: { el: 'Μια λεπτή, χρυσαφένια πλάκα από σουσάμι κολλημένο με μέλι. Τραγανό, γλυκό και λίγο κολλώδες — σαν καραμέλα που τρίζει στα δόντια.', en: 'A thin golden slab of sesame seeds stuck together with honey. Crunchy, sweet and a little sticky — like a candy that crackles between your teeth.' },
    kidTip: { el: 'Χωράει στην τσέπη και δεν λιώνει στη ζέστη — το τέλειο σνακ για την ανάβαση στην Ακρόπολη. Σπάσ’ το σε κομματάκια και μοίρασέ το με την παρέα.', en: 'It fits in a pocket and does not melt in the heat — the perfect snack for the climb up to the Acropolis. Snap it into pieces and share it with your gang.' },
    funFact: { el: 'Είναι από τα πιο παλιά γλυκά του κόσμου: ο ιστορικός Ηρόδοτος, πριν από 2.500 χρόνια, γράφει για γλυκίσματα από σουσάμι και μέλι — παστέλι δηλαδή, με άλλο όνομα!', en: 'It is one of the oldest sweets in the world: the historian Herodotus, 2,500 years ago, wrote about treats made of sesame and honey — a pasteli by another name!' },
    where: { el: 'Σε περίπτερα, φούρνους και μανάβικα, συνήθως δίπλα στο ταμείο — και στα πανηγύρια, φτιαγμένο στο χέρι.', en: 'At kiosks (periptera), bakeries and greengrocers, usually right by the till — and at village festivals, made by hand.' },
  },
  {
    id: 'frappe', emoji: '☕', kind: 'drink', brave: 1, adultsOnly: true,
    name: { el: 'Φραπές και φρέντο', en: 'Frappé and freddo (iced coffee — for the parents)' },
    what: { el: 'Ο κρύος καφές που κρατούν οι Αθηναίοι στο χέρι όλη μέρα: φραπές με παχύ αφρό ή φρέντο εσπρέσο — μόνο για τους γονείς.', en: 'The iced coffee Athenians carry around all day: frappé with a thick foam or freddo espresso — for the parents only.' },
    kidTip: { el: 'Όσο οι γονείς πίνουν τον καφέ τους, τα παιδιά παίρνουν το δικό τους ποτήρι: βυσσινάδα ή κρύο σοκολατούχο γάλα με καλαμάκι — ίδιο στιλ, χωρίς καφέ.', en: 'While the parents sip their coffee, kids get their own glass: sour-cherry cordial (vyssinada) or cold chocolate milk with a straw — same style, no coffee.' },
    funFact: { el: 'Ο φραπές γεννήθηκε κατά λάθος το 1957 στη Διεθνή Έκθεση Θεσσαλονίκης: ένας υπάλληλος εταιρείας καφέ δεν βρήκε ζεστό νερό και χτύπησε τον στιγμιαίο καφέ με κρύο νερό σε σέικερ. Το ρόφημα κατέκτησε όλη την Ελλάδα.', en: 'Frappé was born by accident in 1957 at the Thessaloniki International Fair: a coffee-company employee could not find hot water, so he shook instant coffee with cold water in a shaker. The drink conquered the whole of Greece.' },
    where: { el: 'Σε κάθε καφετέρια και σε κάθε πλατεία με τραπεζάκια — ο καφές εδώ διαρκεί ώρες.', en: 'In every café and on every square with tables outside — a coffee here lasts for hours.' },
  },
];
