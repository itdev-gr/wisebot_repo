/**
 * WiseBot Explorer · Γεύσεις της Βουδαπέστης / A taste of Budapest
 * Written for a family with a 7–12 year old: what it is, a tip for the kids, one fact for
 * the parents, and the kind of place that serves it. No business names. Wine only as a
 * note for the parents.
 */
import type { TasteItem } from '../types';

export const TASTE: TasteItem[] = [
  {
    id: 'langos', emoji: '🫓', kind: 'snack', brave: 1,
    name: { el: 'Λάνγκος (Lángos)', en: 'Lángos' },
    what: { el: 'Μια μεγάλη, αφράτη πίτα από ζύμη τηγανισμένη σε λάδι, τραγανή στις άκρες, που σερβίρεται ζεστή με ξινή κρέμα και τριμμένο τυρί από πάνω. Λαδερή, αλμυρή και τεράστια — σαν πίτσα χωρίς σάλτσα.', en: 'A big, puffy disc of dough fried in oil, crisp at the edges, served hot with sour cream and grated cheese on top. Oily, salty and enormous — a bit like a pizza without the sauce.' },
    kidTip: { el: 'Ζήτα το κλασικό «sajtos-tejfölös» (τυρί και ξινή κρέμα) — το σκέτο τρίβεται με σκόρδο και είναι δυνατό. Είναι μεγάλο, μοιραστείτε το. Για να παραγγείλεις: «Egy sajtos-tejfölös lángost kérek».', en: 'Ask for the classic “sajtos-tejfölös” (cheese and sour cream) — the plain one is rubbed with garlic and quite strong. It is big, so share one. To order: “Egy sajtos-tejfölös lángost kérek”.' },
    funFact: { el: 'Το όνομά του βγαίνει από το «láng», που στα ουγγρικά σημαίνει «φλόγα»: παλιά το έψηναν στο στόμιο του ξυλόφουρνου, δίπλα στις φλόγες, τη μέρα που έφτιαχναν το ψωμί της εβδομάδας.', en: 'Its name comes from “láng”, the Hungarian word for “flame”: it used to be baked at the mouth of the wood-fired oven, right next to the flames, on the day the family bread was made.' },
    where: { el: 'Σε πάγκους στις σκεπαστές αγορές, σε πανηγύρια και σε στάντ φαγητού του δρόμου — και σε κάθε παραλία λίμνης το καλοκαίρι.', en: 'At market-hall stands, fairs and street-food stalls — and on every lake beach in summer.' },
  },
  {
    id: 'gulyas', emoji: '🍲', kind: 'dish', brave: 2,
    name: { el: 'Γκούγιας (Gulyás)', en: 'Gulyás (goulash soup)' },
    what: { el: 'Το «γκούλας» που ίσως ξέρεις — μόνο που στην Ουγγαρία είναι σούπα! Κόκκινη από την πάπρικα, με κομματάκια μοσχάρι, πατάτα, καρότο και συχνά μικρά ζυμαράκια. Ζεστή, πλούσια και χορταστική.', en: 'The “goulash” you may have heard of — except in Hungary it is a soup! Red from paprika, with chunks of beef, potato, carrot and often tiny pinched pasta. Warm, rich and filling.' },
    kidTip: { el: 'Συνήθως φτιάχνεται με γλυκιά πάπρικα, αλλά ρώτα «Csípős?» (είναι καυτερό;). Η καυτερή πάπρικα συχνά έρχεται χωριστά στο τραπέζι — μην τη ρίξεις. Ένα μεγάλο πιάτο χορταίνει δύο παιδιά.', en: 'It is usually made with sweet paprika, but ask “Csípős?” (is it spicy?). The hot paprika often comes separately at the table — leave that alone. A large bowl fills two kids.' },
    funFact: { el: 'Το όνομα σημαίνει «βοσκός βοδιών»: οι γκούγιας, οι καουμπόηδες της ουγγρικής πεδιάδας, το μαγείρευαν σε ένα σιδερένιο καζάνι (bogrács) κρεμασμένο πάνω από τη φωτιά — όπως γίνεται ακόμη στα πανηγύρια.', en: 'The name means “cattle herdsman”: the gulyás, the cowboys of the Hungarian plain, cooked it in an iron kettle (bogrács) hanging over an open fire — as people still do at festivals today.' },
    where: { el: 'Σε παραδοσιακά εστιατόρια και σε ταβέρνες τύπου csárda, σαν πρώτο ή και κύριο πιάτο — και σε πανηγύρια, μέσα από τεράστια καζάνια.', en: 'In traditional restaurants and csárda-style inns, as a starter or a main — and at festivals, ladled out of giant kettles.' },
  },
  {
    id: 'paprikas-csirke', emoji: '🍗', kind: 'dish', brave: 1,
    name: { el: 'Πάπρικας τσίρκε με νόκεντλι (Paprikás csirke nokedlivel)', en: 'Chicken paprikash with nokedli (Paprikás csirke)' },
    what: { el: 'Κοτόπουλο σιγομαγειρεμένο σε μια βελούδινη, πορτοκαλοκόκκινη σάλτσα από πάπρικα και ξινή κρέμα, με δίπλα «νόκεντλι»: μικρά μαλακά ζυμαράκια από αυγό που ρουφούν τη σάλτσα. Κρεμώδες και απαλό.', en: 'Chicken simmered in a velvety orange-red sauce of paprika and sour cream, served with “nokedli”: small, soft egg dumplings that soak up the sauce. Creamy and mild.' },
    kidTip: { el: 'Το πιο εύκολο ουγγρικό πιάτο για παιδιά: η σάλτσα γίνεται με γλυκιά πάπρικα, όχι καυτερή. Το κοτόπουλο συχνά έχει κόκαλα — άφησε τον γονιό να το κόψει. Και μη φοβηθείς τα ζυμαράκια που τρέμουν: είναι απλώς ζυμαρικά!', en: 'The easiest Hungarian dish for kids: the sauce is made with sweet paprika, not hot. The chicken may come on the bone, so let a parent cut it up. And do not be put off by the wobbly little dumplings — they are just pasta!' },
    funFact: { el: 'Το 1937 ο Ούγγρος επιστήμονας Άλμπερτ Σεντ-Γκιόργκι πήρε το βραβείο Νόμπελ για τη δουλειά του πάνω στη βιταμίνη C — την οποία είχε καταφέρει να βγάλει με το κιλό από τις πιπεριές πάπρικας της πόλης Σέγκεντ.', en: 'In 1937 the Hungarian scientist Albert Szent-Györgyi won the Nobel Prize for his work on vitamin C — which he had managed to extract by the kilo from the paprika peppers of the city of Szeged.' },
    where: { el: 'Σε παραδοσιακά εστιατόρια (étterem) και σε ταβέρνες τύπου csárda — συχνά είναι και το «πιάτο ημέρας» στο μεσημεριανό μενού.', en: 'In traditional restaurants (étterem) and csárda-style inns — often the “dish of the day” on a lunch menu.' },
  },
  {
    id: 'kurtoskalacs', emoji: '🌀', kind: 'sweet', brave: 1,
    name: { el: 'Κιούρτοσκαλατς (Kürtőskalács)', en: 'Kürtőskalács (chimney cake)' },
    what: { el: 'Μια λωρίδα γλυκιάς ζύμης τυλιγμένη γύρω από ένα ξύλο, που ψήνεται στα κάρβουνα γυρίζοντας μέχρι να καραμελώσει η ζάχαρη. Βγαίνει σαν χρυσή καμινάδα, τραγανή απ’ έξω και μαλακή μέσα, πασπαλισμένη με κανέλα ή καρύδι.', en: 'A strip of sweet dough wound around a wooden spit, turned over charcoal until the sugar caramelises. It comes off as a golden hollow chimney, crisp outside and soft inside, rolled in cinnamon or walnuts.' },
    kidTip: { el: 'Είναι καυτό όταν βγαίνει — περίμενε ένα λεπτό και μετά ξετύλιξέ το σαν κορδέλα, λωρίδα λωρίδα. Ένα φτάνει για δύο. Το «diós» έχει καρύδια· το «fahéjas» (κανέλα) είναι η κλασική επιλογή. Πες «köszönöm» (ευχαριστώ)!', en: 'It is scorching hot when it comes off — wait a minute, then unwind it like a ribbon, strip by strip. One is enough for two. “Diós” has walnuts; “fahéjas” (cinnamon) is the classic choice. Say “köszönöm” (thank you)!' },
    funFact: { el: 'Δεν γεννήθηκε στη Βουδαπέστη αλλά στην Τρανσυλβανία, όπου ζουν πολλοί Ούγγροι: η πρώτη γνωστή συνταγή γράφτηκε το 1784 στο βιβλίο μαγειρικής της κόμισσας Μάρια Μίκες. Το όνομα σημαίνει «γλυκό ψωμί-καμινάδα».', en: 'It was not born in Budapest but in Transylvania, home to many Hungarians: the first known recipe was written down in 1784 in the cookbook of Countess Mária Mikes. The name means “chimney sweet-bread”.' },
    where: { el: 'Σε πάγκους στον δρόμο, σε πανηγύρια και σε χριστουγεννιάτικες αγορές — το μυρίζεις πριν το δεις.', en: 'At street stands, festivals and Christmas markets — you smell it before you see it.' },
  },
  {
    id: 'dobos-torta', emoji: '🍰', kind: 'sweet', brave: 1,
    name: { el: 'Τούρτα Ντόμπος (Dobos torta)', en: 'Dobos torta' },
    what: { el: 'Μια τούρτα με πέντε-έξι λεπτά φύλλα παντεσπάνι και σοκολατένια βουτυρόκρεμα ανάμεσά τους, σκεπασμένη με ένα γυαλιστερό καπάκι από σκληρή καραμέλα. Σοκολατένια, τραγανή από πάνω και πολύ γλυκιά.', en: 'A cake of five or six thin sponge layers with chocolate buttercream between them, topped with a shiny lid of hard caramel. Chocolatey, crunchy on top and very sweet.' },
    kidTip: { el: 'Το καπάκι από καραμέλα είναι σκληρό σαν γυαλί — σπάσ’ το με το πιρούνι, κάνει «κρακ». Ένα κομμάτι φτάνει άνετα για δύο. Παράγγειλέ το έτσι: «Egy szelet Dobos tortát kérek» (ένα κομμάτι, παρακαλώ).', en: 'The caramel lid is as hard as glass — crack it with your fork, it goes “crunch”. One slice is easily enough for two. Order it like this: “Egy szelet Dobos tortát kérek” (one slice, please).' },
    funFact: { el: 'Την έφτιαξε ο ζαχαροπλάστης Γιόζεφ Ντόμπος και την παρουσίασε στην Εθνική Έκθεση της Βουδαπέστης το 1885. Κράτησε τη συνταγή μυστική μέχρι το 1906, όταν τη χάρισε στη συντεχνία των ζαχαροπλαστών της πόλης, για να μπορεί να τη φτιάχνει ο καθένας.', en: 'It was created by the confectioner József Dobos, who presented it at the National Exhibition in Budapest in 1885. He kept the recipe secret until 1906, when he gave it to the city’s guild of confectioners so that everyone could make it.' },
    where: { el: 'Σε κάθε ζαχαροπλαστείο (cukrászda) και στα παλιά, μεγαλοπρεπή καφέ της πόλης — ψάξε το κομμάτι με τη λοξή καραμέλα στη βιτρίνα.', en: 'In any pastry shop (cukrászda) and in the city’s grand old cafés — look for the slice with the tilted caramel wedge in the window.' },
  },
  {
    id: 'palacsinta', emoji: '🥞', kind: 'sweet', brave: 1,
    name: { el: 'Παλατσίντα (Palacsinta)', en: 'Palacsinta' },
    what: { el: 'Λεπτές κρέπες τυλιγμένες σε ρολό, γεμιστές με μαρμελάδα βερίκοκο, κακάο με ζάχαρη ή γλυκό φρέσκο τυρί (túró). Σερβίρονται δύο-τρεις μαζί, ζεστές και πασπαλισμένες με ζάχαρη άχνη.', en: 'Thin crêpes rolled up and filled with apricot jam, cocoa and sugar, or sweet fresh curd cheese (túró). They come two or three to a plate, warm and dusted with icing sugar.' },
    kidTip: { el: 'Οι πιο σίγουρες γεύσεις είναι «lekváros» (μαρμελάδα) και «kakaós» (κακάο). Το πιάτο έχει δύο-τρεις, οπότε διαλέξτε διαφορετικές γεμίσεις και μοιραστείτε. Για να παραγγείλεις: «Egy lekváros palacsintát kérek».', en: 'The safest bets are “lekváros” (jam) and “kakaós” (cocoa). A plate holds two or three, so pick different fillings and share. To order: “Egy lekváros palacsintát kérek”.' },
    funFact: { el: 'Το όνομα έχει ελληνική ρίζα! Η αρχαία λέξη «πλακοῦς» (πίτα) έγινε στα λατινικά placenta, στα ρουμανικά plăcintă και τελικά στα ουγγρικά palacsinta.', en: 'The name has Greek roots! The ancient Greek word “plakous” (flat cake) became placenta in Latin, plăcintă in Romanian and finally palacsinta in Hungarian.' },
    where: { el: 'Σε εστιατόρια σαν επιδόρπιο, σε καφέ και σε μικρά μαγαζάκια που φτιάχνουν μόνο κρέπες (palacsintázó).', en: 'In restaurants as dessert, in cafés and in little shops that make nothing but pancakes (palacsintázó).' },
  },
  {
    id: 'turodesszert', emoji: '🍫', kind: 'snack', brave: 2,
    name: { el: 'Σοκολατάκι με τούρο (túródesszert)', en: 'Chocolate-coated curd bar (túródesszert)' },
    what: { el: 'Ένα μικρό, κρύο μπαστουνάκι από το ψυγείο του σούπερ μάρκετ: μαλακό, ελαφρά ξινό φρέσκο τυρί (túró) μέσα σε λεπτό φλοιό από μαύρη σοκολάτα. Γλυκό και ξινούτσικο ταυτόχρονα — σαν cheesecake σε μια μπουκιά.', en: 'A small, cold bar from the supermarket fridge: soft, slightly sour fresh curd cheese (túró) inside a thin dark-chocolate shell. Sweet and tangy at the same time — like a bite of cheesecake.' },
    kidTip: { el: 'Θα το βρεις στο ψυγείο κάθε σούπερ μάρκετ, με το χαρτζιλίκι σου — τέλειο πρωινό ή σνακ στη βόλτα. Το «natúr» (σκέτο) είναι το κλασικό· υπάρχει και με μαρμελάδα φράουλα ή βερίκοκο. Φάε το κρύο, αμέσως.', en: 'You will find it in the fridge of every supermarket for pocket money — a perfect breakfast or snack on the go. “Natúr” (plain) is the classic; there are also strawberry- or apricot-jam versions. Eat it cold, straight away.' },
    funFact: { el: 'Φτιάχνεται στην Ουγγαρία από το 1968 και λέγεται ότι η ιδέα ήρθε από ένα παρόμοιο σοκολατένιο γλύκισμα με τυρί, που είδαν Ούγγροι ειδικοί στα γαλακτοκομικά σε ταξίδι τους στη Σοβιετική Ένωση.', en: 'It has been made in Hungary since 1968, and the story goes that the idea came from a similar chocolate-covered curd snack that Hungarian dairy experts saw on a trip to the Soviet Union.' },
    where: { el: 'Στο ψυγείο κάθε σούπερ μάρκετ και μικρού παντοπωλείου — όχι στα εστιατόρια.', en: 'In the fridge of any supermarket or corner shop — not in restaurants.' },
  },
  {
    id: 'tokaji', emoji: '🍷', kind: 'drink', brave: 1, adultsOnly: true,
    name: { el: 'Τοκάι (Tokaji)', en: 'Tokaji wine' },
    what: { el: 'Το διάσημο χρυσαφένιο γλυκό κρασί από τους λόφους του Τοκάι, στα βορειοανατολικά της Ουγγαρίας — μόνο για τους γονείς.', en: 'The famous golden sweet wine from the Tokaj hills in north-east Hungary — for the parents only.' },
    kidTip: { el: 'Όσο οι γονείς δοκιμάζουν, τα παιδιά παραγγέλνουν «málnaszörp»: σιρόπι από σμέουρα (φραμπουάζ) με ανθρακούχο νερό, το κλασικό ουγγρικό παιδικό ποτό σε κάθε καφέ.', en: 'While the parents taste, kids can order a “málnaszörp”: raspberry syrup topped up with fizzy water, the classic Hungarian kids’ drink in any café.' },
    funFact: { el: 'Η αμπελουργική περιοχή του Τοκάι είναι Μνημείο Παγκόσμιας Κληρονομιάς της UNESCO από το 2002 — οι αμπελώνες και τα σκαμμένα στον βράχο κελάρια της είναι εκατοντάδων ετών.', en: 'The Tokaj wine region has been a UNESCO World Heritage Site since 2002 — its vineyards and rock-cut cellars are hundreds of years old.' },
    where: { el: 'Σε εστιατόρια και σε μπαρ κρασιού (borbár) — ψάξε τη λέξη «Tokaji» στον κατάλογο.', en: 'In restaurants and wine bars (borbár) — look for the word “Tokaji” on the list.' },
  },
];
