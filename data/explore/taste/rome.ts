/**
 * WiseBot Explorer · Γεύσεις της Ρώμης / A taste of Rome
 * Written for a family with a 7–12 year old: what it is, a tip for the kids, one fact for
 * the parents, and the kind of place that serves it. No business names. Coffee only as a
 * note for the parents.
 */
import type { TasteItem } from '../types';

export const TASTE: TasteItem[] = [
  {
    id: 'pizza-al-taglio', emoji: '🍕', kind: 'snack', brave: 1,
    name: { el: 'Πίτσα αλ τάλιο (Pizza al taglio)', en: 'Pizza al taglio' },
    what: { el: 'Πίτσα ψημένη σε μεγάλα ορθογώνια ταψιά, με παχύ, αφράτο και τραγανό ζυμάρι. Διαλέγεις το κομμάτι που θέλεις, σου το κόβουν με ψαλίδι και το πληρώνεις με το ζύγι!', en: 'Pizza baked in big rectangular trays, with a thick, airy, crunchy base. You pick the piece you want, they cut it with scissors and you pay by weight!' },
    kidTip: { el: 'Δείξε με τα χέρια σου πόσο μεγάλο κομμάτι θέλεις και πες «un pezzo piccolo, per favore». Η «pizza rossa» (μόνο ντομάτα) και η «pizza bianca» (μόνο λάδι και αλάτι) είναι οι πιο απλές για αρχή.', en: 'Show with your hands how big a piece you want and say “un pezzo piccolo, per favore”. “Pizza rossa” (just tomato) and “pizza bianca” (just oil and salt) are the easiest to start with.' },
    funFact: { el: 'Η Ρώμη τη θεωρεί δική της εφεύρεση, και πουλιέται με το κιλό: η τιμή στη βιτρίνα είναι ανά κιλό ή ανά «etto» (100 γραμμάρια), γι’ αυτό κάθε κομμάτι μπαίνει πρώτα στη ζυγαριά και μετά στο χαρτί.', en: 'Rome claims it as its own invention, and it is sold by the kilo: the price on the counter is per kilo or per “etto” (100 grams), so every piece goes on the scale before it goes into the paper.' },
    where: { el: 'Σε μαγαζιά «pizza al taglio» με τα ταψιά στη βιτρίνα — τρώγεται όρθιος ή στον δρόμο, ιδανικό για γρήγορο μεσημεριανό.', en: 'In “pizza al taglio” shops with the trays lined up in the window — eaten standing or on the go, perfect for a quick lunch.' },
  },
  {
    id: 'suppli', emoji: '🍙', kind: 'snack', brave: 1,
    name: { el: 'Σουπλί (Supplì)', en: 'Supplì' },
    what: { el: 'Μια χρυσαφένια τηγανητή μπάλα από ρύζι με σάλτσα ντομάτας και ένα κομμάτι μοτσαρέλα κρυμμένο στη μέση. Τραγανή απ’ έξω, μαλακή και ζεστή μέσα.', en: 'A golden fried ball of rice with tomato sauce and a piece of mozzarella hidden in the middle. Crunchy outside, soft and hot inside.' },
    kidTip: { el: 'Περίμενε ένα λεπτό — η μοτσαρέλα μέσα καίει! Άνοιξέ το στα δύο και τράβα αργά: το τυρί τεντώνεται σαν κλωστή. Παράγγειλε «un supplì, per favore».', en: 'Wait a minute — the mozzarella inside is burning hot! Pull it in two slowly and watch the cheese stretch into a string. Order with “un supplì, per favore”.' },
    funFact: { el: 'Οι Ρωμαίοι το λένε «supplì al telefono»: η λιωμένη μοτσαρέλα που τεντώνεται ανάμεσα στα δύο κομμάτια μοιάζει με το καλώδιο ενός παλιού τηλεφώνου. Λέγεται ότι το όνομα έρχεται από τη γαλλική λέξη «surprise» — η έκπληξη είναι το τυρί που κρύβει μέσα.', en: 'Romans call it “supplì al telefono”: the melted mozzarella stretching between the two halves looks like the cord of an old telephone. The story goes that the name comes from the French word “surprise” — the surprise being the cheese hidden inside.' },
    where: { el: 'Σε πιτσαρίες, μαγαζιά με πίτσα στο ζύγι και μικρά τηγανάδικα (friggitorie) — συνήθως το τρως πρώτο, πριν την πίτσα.', en: 'In pizzerias, pizza-by-the-slice shops and little fry shops (friggitorie) — usually eaten first, before the pizza.' },
  },
  {
    id: 'cacio-e-pepe', emoji: '🧀', kind: 'dish', brave: 2,
    name: { el: 'Κάτσιο ε πέπε (Cacio e pepe)', en: 'Cacio e pepe' },
    what: { el: 'Μακαρόνια με μόνο δύο πράγματα από πάνω: τριμμένο τυρί πεκορίνο και φρεσκοτριμμένο μαύρο πιπέρι, που γίνονται μια κρεμώδης σάλτσα. Αλμυρό, τυρένιο και λίγο πιπεράτο.', en: 'Pasta with just two things on it: grated pecorino cheese and freshly ground black pepper, whisked into a creamy sauce. Salty, cheesy and a little peppery.' },
    kidTip: { el: 'Το πιπέρι τσιμπάει λίγο στη γλώσσα: ζήτα «con poco pepe, per favore» (με λίγο πιπέρι). Στη Ρώμη σερβίρεται συχνά με tonnarelli, χοντρά τετράγωνα μακαρόνια — τυλίγονται τέλεια στο πιρούνι.', en: 'The pepper tingles a little on the tongue: ask for “con poco pepe, per favore” (with just a little pepper). In Rome it often comes with tonnarelli, thick square spaghetti — perfect for twirling on a fork.' },
    funFact: { el: 'Το «cacio» είναι παλιά λέξη για το τυρί. Το Pecorino Romano φτιάχνεται από πρόβειο γάλα και είναι προστατευμένο προϊόν (ΠΟΠ): μόνο τυριά από το Λάτσιο, τη Σαρδηνία και μια γωνιά της Τοσκάνης μπορούν να έχουν αυτό το όνομα.', en: '“Cacio” is an old word for cheese. Pecorino Romano is made from sheep’s milk and has protected status (PDO): only cheeses from Lazio, Sardinia and a corner of Tuscany may carry the name.' },
    where: { el: 'Σε κάθε τρατορία (trattoria) και οστερία της Ρώμης — είναι ένα από τα «τέσσερα μεγάλα» ζυμαρικά της πόλης.', en: 'In every trattoria and osteria in Rome — one of the city’s “big four” pastas.' },
  },
  {
    id: 'carbonara', emoji: '🍝', kind: 'dish', brave: 1,
    name: { el: 'Καρμπονάρα (Carbonara)', en: 'Carbonara' },
    what: { el: 'Σπαγγέτι ή ριγκατόνι με σάλτσα από αυγό και πεκορίνο, τραγανά κομματάκια guanciale (παστό μάγουλο χοιρινού) και πιπέρι. Πλούσιο, αλμυρό και βελούδινο — χωρίς ούτε σταγόνα κρέμα γάλακτος!', en: 'Spaghetti or rigatoni in a sauce of egg and pecorino, with crisp bits of guanciale (cured pork cheek) and black pepper. Rich, salty and silky — and without a single drop of cream!' },
    kidTip: { el: 'Οι μερίδες είναι μεγάλες — ζήτα «una mezza porzione, per favore» (μισή μερίδα) ή μοιραστείτε ένα πιάτο. Αν το guanciale σού φαίνεται πολύ αλμυρό, βάλ’ το στην άκρη και απόλαυσε τα μακαρόνια.', en: 'Portions are big — ask for “una mezza porzione, per favore” (a half portion) or share a plate. If the guanciale is too salty for you, push it to the side and enjoy the pasta.' },
    funFact: { el: 'Κάθε 6 Απριλίου γιορτάζεται η «Carbonara Day», γιορτή που ξεκίνησαν οι Ιταλοί παραγωγοί ζυμαρικών το 2017. Λέγεται ότι η συνταγή γεννήθηκε το 1944, όταν Αμερικανοί στρατιώτες έφεραν αυγά σε σκόνη και μπέικον και οι Ρωμαίοι μάγειρες τα έριξαν στα μακαρόνια.', en: 'Every 6 April is “Carbonara Day”, started by Italy’s pasta makers in 2017. The story goes that the recipe was born in 1944, when American soldiers brought powdered eggs and bacon and Roman cooks tossed them with pasta.' },
    where: { el: 'Σε τρατορίες και οστερίες σε όλη την πόλη. Αν δεις «panna» (κρέμα γάλακτος) στα υλικά, δεν είναι η αληθινή!', en: 'In trattorias and osterias all over town. If you see “panna” (cream) in the ingredients, it is not the real thing!' },
  },
  {
    id: 'gelato', emoji: '🍦', kind: 'sweet', brave: 1,
    name: { el: 'Τζελάτο (Gelato)', en: 'Gelato' },
    what: { el: 'Το ιταλικό παγωτό: πιο πυκνό και πιο κρεμώδες από το συνηθισμένο, με δεκάδες γεύσεις στη βιτρίνα — από φιστίκι και φουντούκι μέχρι φρέσκα φρούτα.', en: 'Italian ice cream: denser and creamier than the usual kind, with dozens of flavours in the counter — from pistachio and hazelnut to fresh fruit.' },
    kidTip: { el: 'Πες «un cono piccolo, due gusti, per favore» (μικρό χωνάκι, δύο γεύσεις). Στη Ρώμη πολλά παγωτατζίδικα βάζουν δωρεάν σαντιγί από πάνω — αρκεί να πεις «con panna». Το αληθινό φιστίκι είναι σκούρο πρασινοκαφέ, όχι έντονο πράσινο.', en: 'Say “un cono piccolo, due gusti, per favore” (a small cone, two flavours). In Rome many gelaterias add whipped cream on top for free — just say “con panna”. Real pistachio is a dull brownish green, not bright green.' },
    funFact: { el: 'Το gelato έχει λιγότερο λίπος και λιγότερο αέρα από το κλασικό παγωτό και σερβίρεται λιγότερο παγωμένο — γι’ αυτό η γεύση του είναι πιο έντονη. Και ναι, οι Ιταλοί το τρώνε και τον χειμώνα!', en: 'Gelato has less fat and less air than classic ice cream and is served a little warmer — that is why its flavour tastes stronger. And yes, Italians eat it in winter too!' },
    where: { el: 'Σε παγωτατζίδικα (gelateria) σε κάθε γειτονιά. Καλό σημάδι: παγωτά σε μεταλλικά δοχεία με καπάκι, όχι σε ψηλά, φανταχτερά βουνά.', en: 'In a gelateria in every neighbourhood. A good sign: gelato kept in metal tubs with lids rather than piled into tall, bright-coloured mountains.' },
  },
  {
    id: 'maritozzo', emoji: '🧁', kind: 'sweet', brave: 1,
    name: { el: 'Μαριτότσο (Maritozzo)', en: 'Maritozzo' },
    what: { el: 'Ένα μαλακό, γλυκό ψωμάκι κομμένο στη μέση και γεμισμένο με ένα βουνό από σαντιγί. Αφράτο, δροσερό και λίγο… ακατάστατο.', en: 'A soft, sweet bun sliced down the middle and filled with a mountain of whipped cream. Fluffy, cool and a little… messy.' },
    kidTip: { el: 'Οι Ρωμαίοι το τρώνε για πρωινό. Ζήτα «un maritozzo con la panna, per favore», πάρε πολλές χαρτοπετσέτες και μοιράσου το — η σαντιγί καταλήγει πάντα στη μύτη!', en: 'Romans eat it for breakfast. Ask for “un maritozzo con la panna, per favore”, grab plenty of napkins and share it — the cream always ends up on your nose!' },
    funFact: { el: 'Λέγεται ότι το όνομα έρχεται από τη λέξη «marito» (σύζυγος): οι αρραβωνιασμένοι Ρωμαίοι το χάριζαν στις αγαπημένες τους και κάποιοι έκρυβαν μέσα ένα δαχτυλίδι. Παλιά ήταν γλυκό της Σαρακοστής, με σταφίδες και κουκουνάρι.', en: 'The story goes that the name comes from “marito” (husband): Roman fiancés gave it to their sweethearts, and some hid a ring inside. Long ago it was a Lent sweet, with raisins and pine nuts.' },
    where: { el: 'Σε φούρνους και ζαχαροπλαστεία-καφέ (bar pasticceria), κυρίως το πρωί — αργά το απόγευμα συχνά έχουν τελειώσει.', en: 'In bakeries and pastry-cafés (bar pasticceria), mostly in the morning — by late afternoon they are often sold out.' },
  },
  {
    id: 'grattachecca', emoji: '🍧', kind: 'sweet', brave: 1,
    name: { el: 'Γκρατακέκα (Grattachecca)', en: 'Grattachecca' },
    what: { el: 'Πάγος ξυσμένος με το χέρι από ένα μεγάλο κομμάτι, σε ποτήρι, με σιρόπι από πάνω — λεμόνι, μέντα, καρύδα, βύσσινο — και συχνά κομματάκια φρέσκου φρούτου. Παγωμένο, γλυκό και ξεδιψαστικό.', en: 'Ice shaved by hand off a big block into a cup, with syrup poured over — lemon, mint, coconut, sour cherry — and often chunks of fresh fruit. Icy, sweet and thirst-quenching.' },
    kidTip: { el: 'Το βρίσκεις μόνο το καλοκαίρι, στα κιόσκια, συχνά μέχρι αργά το βράδυ. Λεμόνι ή μέντα είναι οι πιο ήπιες γεύσεις· πες «una grattachecca al limone, per favore». Χρειάζεσαι καλαμάκι και κουταλάκι μαζί!', en: 'You only find it in summer, at kiosks, often until late in the evening. Lemon or mint are the mildest flavours; say “una grattachecca al limone, per favore”. You need a straw and a spoon at the same time!' },
    funFact: { el: 'Το όνομα ενώνει το «grattare» (ξύνω) με το «checca», που στη ρωμαϊκή διάλεκτο σημαίνει το κομμάτι πάγου — δηλαδή «ξυσμένος πάγος». Πουλιέται στους δρόμους της Ρώμης από τις αρχές του 1900.', en: 'The name joins “grattare” (to scrape) with “checca”, Roman dialect for a block of ice — so, “scraped ice”. It has been sold on Rome’s streets since the early 1900s.' },
    where: { el: 'Σε μικρά κιόσκια (chioschi) δίπλα στον Τίβερη και σε γειτονιές όπως το Τραστέβερε και το Τεστάτσο — μόνο τους ζεστούς μήνες.', en: 'At little kiosks (chioschi) along the Tiber and in neighbourhoods like Trastevere and Testaccio — only in the warm months.' },
  },
  {
    id: 'caffe-al-banco', emoji: '☕', kind: 'drink', brave: 1, adultsOnly: true,
    name: { el: 'Καφές στον πάγκο (Caffè al banco)', en: 'Coffee at the counter (Caffè al banco)' },
    what: { el: 'Ο ρωμαϊκός τρόπος για καφέ: ένας μικρός εσπρέσο, όρθιοι στον πάγκο του μπαρ, σε δύο γουλιές. Σημείωση μόνο για τους γονείς.', en: 'The Roman way with coffee: a tiny espresso, standing at the bar counter, gone in two sips. A note for the parents only.' },
    kidTip: { el: 'Για τα παιδιά: σε πολλές γωνιές της πόλης υπάρχει ένα «nasone», η χυτοσιδερένια βρύση της Ρώμης με δωρεάν κρύο νερό. Κλείσε το στόμιο με το δάχτυλο και το νερό πετάγεται από μια μικρή τρύπα στο πάνω μέρος — έτοιμο σιντριβάνι για να πιεις!', en: 'For the kids: on many corners stands a “nasone”, Rome’s cast-iron drinking fountain with free cold water. Block the spout with a finger and the water shoots up from a little hole on top — a ready-made drinking fountain!' },
    funFact: { el: 'Στο μπαρ πληρώνεις πρώτα στο ταμείο και δίνεις την απόδειξη (scontrino) στον μπαρίστα. Ο καφές όρθιοι στον πάγκο κοστίζει λιγότερο από τον ίδιο καφέ στο τραπέζι — και οι Ιταλοί πίνουν καπουτσίνο μόνο το πρωί, σχεδόν ποτέ μετά το μεσημεριανό.', en: 'At the bar you pay at the till first and hand the receipt (scontrino) to the barista. Coffee standing at the counter costs less than the same cup at a table — and Italians drink cappuccino only in the morning, almost never after lunch.' },
    where: { el: 'Σε κάθε «bar» — στην Ιταλία η λέξη σημαίνει καφενείο, ανοιχτό από νωρίς το πρωί, με κορνέτο για πρωινό και σάντουιτς το μεσημέρι.', en: 'In any “bar” — in Italy the word means a café, open from early morning, with cornetti for breakfast and sandwiches at midday.' },
  },
];
