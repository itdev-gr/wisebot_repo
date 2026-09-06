/**
 * WiseBot Explorer · Γεύσεις της Βιέννης / A taste of Vienna
 * Written for a family with a 7–12 year old: what it is, a tip for the kids, one fact for
 * the parents, and the kind of place that serves it. No business names. Coffee only as a
 * note for the parents.
 */
import type { TasteItem } from '../types';

export const TASTE: TasteItem[] = [
  {
    id: 'wiener-schnitzel', emoji: '🥩', kind: 'dish', brave: 1,
    name: { el: 'Βίνερ σνίτσελ (Wiener Schnitzel)', en: 'Wiener Schnitzel' },
    what: { el: 'Μια πολύ λεπτή φέτα μοσχαρίσιο κρέας, παναρισμένη με ψίχα ψωμιού και τηγανισμένη ώσπου να γίνει χρυσαφένια και τραγανή. Συχνά είναι πιο μεγάλη από το πιάτο και έρχεται με μια φέτα λεμόνι και πατατοσαλάτα.', en: 'A very thin slice of veal coated in breadcrumbs and fried until golden and crunchy. It is often bigger than the plate and comes with a slice of lemon and potato salad.' },
    kidTip: { el: 'Τα περισσότερα εστιατόρια έχουν μικρή μερίδα για παιδιά — ζήτα «Ein Kinderschnitzel, bitte». Στύψε το λεμόνι από πάνω και δοκίμασε λίγη από τη μαρμελάδα από κόκκινα μούρα (Preiselbeeren) που συχνά το συνοδεύει.', en: 'Most restaurants serve a child-size portion — ask “Ein Kinderschnitzel, bitte”. Squeeze the lemon over it and try a dab of the red berry jam (Preiselbeeren) that often comes with it.' },
    funFact: { el: 'Στην Αυστρία το όνομα προστατεύεται από τους κανόνες τροφίμων: «Wiener Schnitzel» λέγεται μόνο όταν είναι από μοσχάρι. Αν είναι από χοιρινό, ο κατάλογος πρέπει να γράφει «Wiener Art», δηλαδή «βιεννέζικου τύπου».', en: 'In Austria the name is protected by the food rules: only a veal cutlet may be called “Wiener Schnitzel”. If it is pork, the menu has to say “Wiener Art” — “Vienna style”.' },
    where: { el: 'Σε παραδοσιακές ταβέρνες (Beisl) και εστιατόρια σε όλη την πόλη — σχεδόν κάθε κατάλογος το έχει.', en: 'In traditional taverns (Beisl) and restaurants all over town — almost every menu has it.' },
  },
  {
    id: 'kaesekrainer', emoji: '🌭', kind: 'snack', brave: 2,
    name: { el: 'Κεζεκράινερ (Käsekrainer)', en: 'Käsekrainer' },
    what: { el: 'Ένα χοντρό ψητό λουκάνικο με κομματάκια τυριού μέσα, που λιώνουν και ξεχειλίζουν όταν το δαγκώνεις. Σερβίρεται κομμένο σε φέτες με μουστάρδα και μια φέτα ψωμί, ή ολόκληρο μέσα σε ψωμάκι.', en: 'A thick grilled sausage with little pieces of cheese inside that melt and ooze out when you bite it. Served sliced with mustard and a piece of bread, or whole inside a bun.' },
    kidTip: { el: 'Ζήτα τη γλυκιά μουστάρδα («süßer Senf») και άφησε το χρένο (Kren), που τσούζει στη μύτη. Ένα «Eine Käsekrainer mit Semmel, bitte» φτάνει για να παραγγείλεις — και είναι καυτό, άσ’ το να κρυώσει λίγο.', en: 'Ask for the sweet mustard (“süßer Senf”) and skip the horseradish (Kren), which tingles your nose. “Eine Käsekrainer mit Semmel, bitte” is all you need to order — and it is hot, so let it cool a little.' },
    funFact: { el: 'Στον ίδιο πάγκο θα δεις και το λεπτό «Frankfurter». Στον υπόλοιπο κόσμο το ίδιο λουκάνικο λέγεται «Wiener», δηλαδή «βιεννέζικο»: το πρωτοέφτιαξε στη Βιέννη, γύρω στο 1805, ένας χασάπης που είχε έρθει από τη Φρανκφούρτη.', en: 'At the same stand you will see the thin “Frankfurter”. In much of the world that same sausage is called a “Wiener”, meaning “Viennese”: it was first made in Vienna around 1805 by a butcher who had come from Frankfurt.' },
    where: { el: 'Στα Würstelstand, τα μικρά κιόσκια με λουκάνικα στις πλατείες και έξω από τους σταθμούς — ανοιχτά μέχρι αργά τη νύχτα.', en: 'At a Würstelstand, the little sausage kiosks on squares and outside stations — open until late at night.' },
  },
  {
    id: 'sachertorte', emoji: '🍰', kind: 'sweet', brave: 1,
    name: { el: 'Ζαχερτόρτε (Sachertorte)', en: 'Sachertorte' },
    what: { el: 'Μια σκούρα τούρτα σοκολάτας με ένα λεπτό στρώμα μαρμελάδας βερίκοκο στη μέση και γυαλιστερό γλάσο σοκολάτας από πάνω. Δεν είναι πολύ γλυκιά, γι’ αυτό έρχεται πάντα με μια μεγάλη κουταλιά σαντιγί χωρίς ζάχαρη.', en: 'A dark chocolate cake with a thin layer of apricot jam in the middle and a shiny chocolate glaze on top. It is not too sweet, so it always comes with a big spoonful of unsweetened whipped cream.' },
    kidTip: { el: 'Είναι πυκνή και χορταστική: μια φέτα φτάνει για δύο. Βούτηξε κάθε μπουκιά στη σαντιγί (Schlagobers) — έτσι την τρώνε οι Βιεννέζοι.', en: 'It is rich and filling: one slice is enough for two. Dip every bite into the whipped cream (Schlagobers) — that is how the Viennese eat it.' },
    funFact: { el: 'Την έφτιαξε το 1832 ένας δεκαεξάχρονος μαθητευόμενος μάγειρας, ο Franz Sacher, για το δείπνο του πρίγκιπα Μέτερνιχ. Λέγεται ότι ο αρχιμάγειρας είχε αρρωστήσει και το αγόρι έπρεπε να σκεφτεί κάτι μόνο του.', en: 'It was created in 1832 by a 16-year-old apprentice cook, Franz Sacher, for a dinner of Prince Metternich. The story goes that the head chef had fallen ill and the boy had to think of something on his own.' },
    where: { el: 'Σε παλιά καφενεία (Kaffeehaus) και ζαχαροπλαστεία (Konditorei) — θα τη δεις στη βιτρίνα με τις τούρτες.', en: 'In old coffee houses (Kaffeehaus) and pastry shops (Konditorei) — look for it in the cake display.' },
  },
  {
    id: 'apfelstrudel', emoji: '🍎', kind: 'sweet', brave: 1,
    name: { el: 'Απφελστρούντελ (Apfelstrudel)', en: 'Apfelstrudel' },
    what: { el: 'Ένα ρολό από ζύμη τόσο λεπτή, που λένε ότι μπορείς να διαβάσεις εφημερίδα μέσα από αυτή, γεμιστό με μήλα, κανέλα, σταφίδες και ψίχα ψωμιού. Σερβίρεται ζεστό, με άχνη ζάχαρη από πάνω.', en: 'A roll of pastry so thin that people say you can read a newspaper through it, filled with apples, cinnamon, raisins and breadcrumbs. Served warm with icing sugar on top.' },
    kidTip: { el: 'Ζήτα το ζεστό με σάλτσα βανίλιας: «Einen Apfelstrudel mit Vanillesauce, bitte». Αν δεν σου αρέσουν οι σταφίδες, βγαίνουν εύκολα — και κάποιες εκδοχές έχουν καρύδια.', en: 'Ask for it warm with vanilla sauce: “Einen Apfelstrudel mit Vanillesauce, bitte”. If you do not like raisins they are easy to pick out — and some versions have nuts.' },
    funFact: { el: 'Η πιο παλιά γνωστή συνταγή για στρούντελ είναι χειρόγραφη, από το 1696, και φυλάσσεται μέχρι σήμερα στη βιβλιοθήκη της πόλης, μέσα στο Δημαρχείο της Βιέννης.', en: 'The oldest known strudel recipe is handwritten, from 1696, and is still kept in the city library inside Vienna’s Town Hall.' },
    where: { el: 'Σε καφενεία, ζαχαροπλαστεία και εστιατόρια — και στον πάγκο του φούρνου σε πολλά σουπερμάρκετ.', en: 'In coffee houses, pastry shops and restaurants — and at the bakery counter of many supermarkets.' },
  },
  {
    id: 'kaiserschmarrn', emoji: '🥞', kind: 'sweet', brave: 1,
    name: { el: 'Κάιζερσμαρν (Kaiserschmarrn)', en: 'Kaiserschmarrn' },
    what: { el: 'Μια χοντρή, αφράτη τηγανίτα που την κόβουν σε κομματάκια μέσα στο τηγάνι, την καραμελώνουν λίγο και την πασπαλίζουν με άχνη ζάχαρη. Τρώγεται με κομπόστα δαμάσκηνο ή σάλτσα μήλου.', en: 'A thick, fluffy pancake torn into pieces in the pan, lightly caramelised and dusted with icing sugar. Eaten with plum compote or apple sauce.' },
    kidTip: { el: 'Η μερίδα είναι συνήθως για δύο, οπότε μοιραστείτε τη. Στην Αυστρία τρώγεται και ως κυρίως πιάτο — ναι, γλυκό για μεσημεριανό! Αν δεν θέλεις σταφίδες, πες «ohne Rosinen, bitte».', en: 'A portion is usually enough for two, so share it. In Austria it is also eaten as a main course — yes, dessert for lunch! If you do not want raisins say “ohne Rosinen, bitte”.' },
    funFact: { el: 'Το όνομα σημαίνει κάτι σαν «το χάλι του αυτοκράτορα». Λέγεται ότι μια τηγανίτα για την αυτοκράτειρα Σίσι δεν πέτυχε, κι ο αυτοκράτορας Φραγκίσκος Ιωσήφ έφαγε ο ίδιος τα κομμάτια λέγοντας «δώστε σ’ εμένα αυτό το χάλι» — και έγινε ένα από τα αγαπημένα γλυκά της χώρας.', en: 'The name means something like “the emperor’s mess”. The story goes that a pancake made for Empress Sisi went wrong, and Emperor Franz Joseph ate the torn-up pieces himself, saying “give me that mess” — and it became one of the country’s favourite sweets.' },
    where: { el: 'Σε καφενεία και παραδοσιακά εστιατόρια — και τον χειμώνα, στους πάγκους των χριστουγεννιάτικων αγορών.', en: 'In coffee houses and traditional restaurants — and in winter at the stalls of the Christmas markets.' },
  },
  {
    id: 'neapolitaner-schnitten', emoji: '🍪', kind: 'snack', brave: 1,
    name: { el: 'Νεαπολιτάνερ Σνίτεν (Neapolitaner Schnitten)', en: 'Neapolitaner wafers (Neapolitaner Schnitten)' },
    what: { el: 'Μικρά ορθογώνια από πέντε λεπτές, τραγανές γκοφρέτες με κρέμα φουντουκιού ανάμεσά τους. Κάθε μπουκιά τρίζει και έχει γεύση φουντούκι.', en: 'Little rectangles of five thin, crisp wafers with hazelnut cream between them. Every bite crunches and tastes of hazelnut.' },
    kidTip: { el: 'Το τέλειο σνακ για την τσέπη στη βόλτα: αγόρασε ένα μικρό πακετάκι από σουπερμάρκετ ή περίπτερο και μοιράστε το. Έχει ξηρούς καρπούς.', en: 'The perfect pocket snack for a sightseeing walk: buy a small pack at any supermarket or kiosk and share it. It has nuts.' },
    funFact: { el: 'Γιατί «Νεαπολιτάνερ», δηλαδή «από τη Νάπολη», αφού φτιάχνονται στη Βιέννη; Λέγεται ότι το όνομα ήρθε από τα φουντούκια, που πριν από 100 και πλέον χρόνια τα έφερναν από την περιοχή της Νάπολης, στην Ιταλία.', en: 'Why “Neapolitaner”, meaning “from Naples”, when they are made in Vienna? The story goes that the name came from the hazelnuts, which more than 100 years ago were brought in from the area around Naples, in Italy.' },
    where: { el: 'Σε κάθε σουπερμάρκετ, περίπτερο και φούρνο — συχνά στο ταμείο, δίπλα στις τσίχλες.', en: 'In every supermarket, kiosk and bakery — often right at the checkout, next to the chewing gum.' },
  },
  {
    id: 'kraeuterlimonade', emoji: '🥤', kind: 'drink', brave: 1,
    name: { el: 'Κρόιτερλιμονάντε (Kräuterlimonade)', en: 'Herbal lemonade (Kräuterlimonade)' },
    what: { el: 'Το αγαπημένο αναψυκτικό της Αυστρίας: χρυσαφένιο, με φυσαλίδες και γεύση από βότανα των Άλπεων. Θυμίζει λεμονάδα με μια νότα από λουλούδια και βότανα, και δεν είναι πολύ γλυκό.', en: 'Austria’s favourite fizzy drink: golden, bubbly and flavoured with herbs from the Alpine meadows. It tastes like lemonade with a touch of flowers and herbs, and is not too sweet.' },
    kidTip: { el: 'Κάθε καφέ και κιόσκι με λουκάνικα το έχει στο ψυγείο — ζήτα «την αυστριακή λεμονάδα με βότανα» και ο σερβιτόρος θα καταλάβει. Δοκίμασε και το κλασικό των ντόπιων παιδιών, «Apfelsaft gespritzt»: χυμός μήλου με ανθρακούχο νερό.', en: 'Every café and sausage kiosk keeps it in the fridge — ask for the Austrian herbal lemonade and the waiter will know the one. Also try the local kids’ classic “Apfelsaft gespritzt”: apple juice mixed with sparkling water.' },
    funFact: { el: 'Στη Βιέννη κάθε αναψυκτικό με φυσαλίδες λέγεται «Kracherl» (Κράχερλ). Το όνομα βγαίνει από το «κρακ» που έκαναν τα παλιά μπουκάλια όταν άνοιγε το γυάλινο μπιλάκι που τα σφράγιζε.', en: 'In Vienna a fizzy soft drink is called a “Kracherl”. The name comes from the “crack” the old bottles made when the little glass marble that sealed them popped open.' },
    where: { el: 'Σε καφέ, ταβέρνες, σουπερμάρκετ και στα κιόσκια με τα λουκάνικα — παντού.', en: 'In cafés, taverns, supermarkets and at the sausage kiosks — everywhere.' },
  },
  {
    id: 'wiener-melange', emoji: '☕', kind: 'drink', brave: 1, adultsOnly: true,
    name: { el: 'Βίνερ Μελάνζ (Wiener Melange)', en: 'Wiener Melange (coffee)' },
    what: { el: 'Ο κλασικός καφές των βιεννέζικων καφενείων: καφές με ζεστό γάλα και ένα καπέλο από αφρό γάλακτος — μόνο για τους γονείς.', en: 'The classic coffee of the Viennese coffee houses: coffee with hot milk and a cap of milk foam — for the parents only.' },
    kidTip: { el: 'Τα παιδιά παραγγέλνουν ζεστή σοκολάτα με σαντιγί: «Eine heiße Schokolade mit Schlagobers, bitte». Με κάθε καφέ έρχεται δωρεάν ένα ποτήρι νερό, και κανείς δεν σε βιάζει — μπορείς να κάτσεις ώρες με ένα βιβλίο ή μια τράπουλα.', en: 'Kids order hot chocolate with whipped cream: “Eine heiße Schokolade mit Schlagobers, bitte”. A free glass of water comes with every coffee, and nobody hurries you out — you can sit for hours with a book or a pack of cards.' },
    funFact: { el: 'Η κουλτούρα των βιεννέζικων καφενείων είναι από το 2011 στον κατάλογο της UNESCO με την άυλη πολιτιστική κληρονομιά της Αυστρίας — ως ένας τόπος «όπου καταναλώνονται χρόνος και χώρος, αλλά στον λογαριασμό γράφεται μόνο ο καφές».', en: 'Viennese coffee house culture has been on UNESCO’s list of Austria’s intangible cultural heritage since 2011 — described as a place “where time and space are consumed, but only the coffee is found on the bill”.' },
    where: { el: 'Στα παραδοσιακά καφενεία (Kaffeehaus) με τα μαρμάρινα τραπεζάκια, τις καρέκλες από λυγισμένο ξύλο και τις εφημερίδες κρεμασμένες σε ξύλινες θήκες.', en: 'In the traditional coffee houses (Kaffeehaus), with their marble tables, bentwood chairs and newspapers hanging on wooden holders.' },
  },
];
