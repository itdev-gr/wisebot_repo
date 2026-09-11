/**
 * WiseBot Explorer · Γεύσεις της Λευκωσίας / A taste of Nicosia
 * Written for a family with a 7–12 year old: what it is, a tip for the kids, one fact for
 * the parents, and the kind of place that serves it. No business names. Coffee only as a
 * note for the parents. Cypriot names kept («σιουσιούκκος», «πουργούρι») with a short gloss,
 * since most readers are Greek kids meeting the island’s words for the first time.
 */
import type { TasteItem } from '../types';

export const TASTE: TasteItem[] = [
  {
    id: 'halloumi', emoji: '🧀', kind: 'dish', brave: 1,
    name: { el: 'Χαλλούμι ψητό', en: 'Halloumi (grilled squeaky cheese)' },
    what: { el: 'Το διάσημο τυρί της Κύπρου — εδώ το γράφουν με δύο «λ» — ψημένο στη σχάρα μέχρι να πάρει χρυσαφένιες γραμμές. Έξω τραγανό, μέσα μαλακό και λίγο αλμυρό, και «τρίζει» στα δόντια όταν το δαγκώνεις!', en: 'The famous cheese of Cyprus, grilled until it gets golden stripes. Crisp outside, soft and a little salty inside — and it squeaks between your teeth when you bite it!' },
    kidTip: { el: 'Ζήτα το «ψητό» — ωμό είναι πιο αλμυρό. Το καλοκαίρι οι Κύπριοι το τρώνε με παγωμένο καρπούζι: αλμυρό και γλυκό μαζί, δοκίμασέ το!', en: 'Ask for it “grilled” (psito) — raw it tastes saltier. In summer Cypriots eat it with cold watermelon: salty and sweet together, give it a try!' },
    funFact: { el: 'Από το 2021 το χαλλούμι έχει τη σφραγίδα ΠΟΠ της Ευρωπαϊκής Ένωσης: μόνο το τυρί που φτιάχνεται στην Κύπρο, με τον παραδοσιακό τρόπο, επιτρέπεται να λέγεται έτσι.', en: 'Since 2021 halloumi has carried the EU’s PDO seal (Protected Designation of Origin): only cheese made in Cyprus, the traditional way, may use the name.' },
    where: { el: 'Σε κάθε ταβέρνα, ψησταριά και καφέ — σαν ορεκτικό, μέσα σε πίττα ή σε σάντουιτς. Και στο ράφι κάθε μπακάλικου.', en: 'In every tavern, grill house and café — as a starter, inside a pitta or in a sandwich. And on the shelf of every corner shop.' },
  },
  {
    id: 'souvlaki-pitta', emoji: '🥙', kind: 'dish', brave: 1,
    name: { el: 'Σουβλάκι στην πίττα με σιεφταλιά', en: 'Souvlaki sti pitta (Cypriot pitta pocket with sheftalia)' },
    what: { el: 'Μια πίττα-τσέπη γεμάτη με κομματάκια χοιρινού ψημένα στα κάρβουνα, ντομάτα, αγγούρι, μαϊντανό και λίγο λάχανο. Συχνά μπαίνει και μια σιεφταλιά — έτσι λένε στην Κύπρο ένα ζουμερό λουκανικάκι από κιμά, κρεμμύδι και μαϊντανό.', en: 'A pitta pocket stuffed with cubes of pork grilled over charcoal, tomato, cucumber, parsley and a little cabbage. Often a sheftalia goes in too — a juicy little Cypriot sausage of minced meat, onion and parsley.' },
    kidTip: { el: 'Η πίττα είναι μεγάλη — μία «μικτή» (σουβλάκι και σιεφταλιά) φτάνει για δύο παιδιά. Πες «χωρίς κρεμμύδι» αν δεν σου αρέσει, και κράτα χαρτοπετσέτες: στάζει!', en: 'The pitta is big — one “mixed” (souvlaki and sheftalia) is enough for two kids. Say “without onion” if you do not like it, and keep napkins handy: it drips!' },
    funFact: { el: 'Η κυπριακή πίττα είναι διαφορετική από την ελληνική: ανοίγει σαν σακουλάκι και γεμίζει από μέσα, δεν τυλίγεται. Γι’ αυτό χωράει τόσα πολλά!', en: 'Cypriot pitta is different from the Greek kind: it opens like a little bag and is filled from the inside, not wrapped. That is why it holds so much!' },
    where: { el: 'Σε ψησταριές και σουβλατζίδικα — τα βράδια, με τη μυρωδιά από τα κάρβουνα να σε οδηγεί.', en: 'In grill houses and souvlaki shops — in the evening, just follow the smell of charcoal.' },
  },
  {
    id: 'koupes', emoji: '🥟', kind: 'snack', brave: 2,
    name: { el: 'Κούπες', en: 'Koupes (fried bulgur rolls with minced meat)' },
    what: { el: 'Μικρά χρυσαφένια «τορπιλάκια» με τραγανό περίβλημα από πουργούρι — έτσι λένε στην Κύπρο το πλιγούρι — και μέσα κιμά με κρεμμύδι και μαϊντανό. Έξω τραγανές, μέσα ζουμερές.', en: 'Little golden “torpedoes” with a crunchy shell of bulgur wheat (pourgouri, as Cypriots call it) and a filling of minced meat, onion and parsley. Crisp outside, juicy inside.' },
    kidTip: { el: 'Τρώγεται με το χέρι, με μια στάλα λεμόνι από πάνω — έτσι την τρώνε οι ντόπιοι. Υπάρχει και με μανιτάρια αν δεν τρως κρέας. Ζήτα την «ζεστή».', en: 'Eat it with your fingers, with a squeeze of lemon on top — that is how the locals do it. There is a mushroom version too if you do not eat meat. Ask for it “hot”.' },
    funFact: { el: 'Είναι ξαδέρφη του λιβανέζικου κίμπε (kibbeh) — και λέγεται ότι ακόμα και το όνομά της έρχεται από την αραβική λέξη «kubbeh».', en: 'It is a cousin of the Lebanese kibbeh — and the story goes that even its name comes from the Arabic word “kubbeh”.' },
    where: { el: 'Σε φούρνους και μικρά μαγαζιά με σνακ, κυρίως το πρωί — σε πολλά τις τηγανίζουν μπροστά σου.', en: 'In bakeries and little snack shops, mostly in the morning — many fry them right in front of you.' },
  },
  {
    id: 'loukoumades', emoji: '🍯', kind: 'sweet', brave: 1,
    name: { el: 'Λουκουμάδες', en: 'Loukoumades (honey-soaked dough balls)' },
    what: { el: 'Μικρές μπαλίτσες ζύμης, τηγανισμένες μέχρι να γίνουν χρυσές και τραγανές, λουσμένες με σιρόπι ή μέλι και λίγη κανέλα. Ζεστές, γλυκές και εξαφανίζονται γρήγορα!', en: 'Little balls of dough fried until golden and crisp, then drenched in syrup or honey with a pinch of cinnamon. Warm, sweet and they vanish fast!' },
    kidTip: { el: 'Ζήτα τους «φρέσκους» — τους καλύτερους τους βλέπεις να βγαίνουν από το τηγάνι. Ένα πιάτο μοιράζεται. Και θυμήσου: η WiseBot σού χρωστάει ένα στο τέλος του κυνηγιού!', en: 'Ask for them “fresh” — the best ones you can watch coming out of the pan. One plate is enough to share. And remember: WiseBot owes you a plate at the end of the hunt!' },
    funFact: { el: 'Το όνομά τους έρχεται από την αραβική λέξη «luqma», που σημαίνει «μπουκιά» — γι’ αυτό είναι τόσο μικροί.', en: 'Their name comes from the Arabic word “luqma”, which means “a mouthful” — which is why they are so small.' },
    where: { el: 'Σε λουκουματζίδικα και ζαχαροπλαστεία, και σε πάγκους στα πανηγύρια — τους μυρίζεις πριν τους δεις.', en: 'In loukoumades shops and pastry shops, and at stalls at village fairs — you smell them before you see them.' },
  },
  {
    id: 'glyka-tou-koutaliou', emoji: '🥄', kind: 'sweet', brave: 2,
    name: { el: 'Γλυκά του κουταλιού', en: 'Glyka tou koutaliou (spoon sweets)' },
    what: { el: 'Ολόκληρα φρούτα — κερασάκι, καρυδάκι, φλούδα καρπουζιού, ακόμα και μικρή μελιτζάνα! — βρασμένα σε πηχτό σιρόπι. Σερβίρονται μία κουταλιά σε πιατάκι, με ένα ποτήρι κρύο νερό.', en: 'Whole fruits — a cherry, a walnut, watermelon rind, even a baby aubergine! — cooked in thick syrup. Served one spoonful on a tiny plate, with a glass of cold water.' },
    kidTip: { el: 'Είναι πολύ γλυκό: μία κουταλιά φτάνει, μετά πιες το νερό. Το καρυδάκι έχει ξηρούς καρπούς. Αν σε κεράσουν σε σπίτι, ένα «ευχαριστώ» και ένα άδειο πιατάκι είναι ο καλύτερος έπαινος.', en: 'It is very sweet: one spoonful is plenty, then drink the water. The walnut one has nuts. If a family offers you one at home, a “thank you” and an empty plate is the best compliment.' },
    funFact: { el: 'Το καρυδάκι φτιάχνεται από πράσινα καρύδια που μαζεύονται στις αρχές του καλοκαιριού, πριν σκληρύνει το τσόφλι τους — γι’ αυτό το τρως ολόκληρο, τσόφλι και όλα!', en: 'The walnut spoon sweet is made from green walnuts picked in early summer, before the shell hardens — which is why you eat the whole walnut, shell and all!' },
    where: { el: 'Σε παραδοσιακά καφενεία και ζαχαροπλαστεία, σε βαζάκια στα μαγαζιά με κυπριακά προϊόντα — και σε κάθε σπίτι που σας καλεί.', en: 'In traditional coffee houses and sweet shops, in jars at shops selling Cypriot products — and in any home that invites you in.' },
  },
  {
    id: 'soutzoukos', emoji: '🍇', kind: 'sweet', brave: 2,
    name: { el: 'Σιουσιούκκος (σουτζούκος)', en: 'Shoushoukos / Soutzoukos (grape-must and nut candle)' },
    what: { el: 'Σιουσιούκκος — έτσι τον λένε στην Κύπρο. Μοιάζει με κερί ή λουκάνικο, αλλά είναι γλυκό: μια κλωστή με αμύγδαλα ή καρύδια, βουτηγμένη ξανά και ξανά σε ζεστό, πηχτό μούστο σταφυλιού. Μαστιχωτός και φρουτένιος.', en: 'Shoushoukos is what Cypriots call it. It looks like a candle or a sausage, but it is a sweet: a string of almonds or walnuts dipped again and again in hot, thick grape must. Chewy and fruity.' },
    kidTip: { el: 'Έχει ξηρούς καρπούς. Πωλείται με το κομμάτι — ζήτα «ένα κομματάκι» για δοκιμή, τον κόβουν σε φέτες. Ψάξε τον κρεμασμένο σε κλωστές στους πάγκους των πανηγυριών.', en: 'It has nuts. It is sold by the piece — ask for “a small piece” to try, they slice it for you. Look for it hanging in strings at fair stalls.' },
    funFact: { el: 'Το όνομα έρχεται από την τουρκική λέξη «sucuk», που σημαίνει λουκάνικο — μόνο και μόνο εξαιτίας του σχήματός του!', en: 'The name comes from the Turkish word “sucuk”, meaning sausage — purely because of its shape!' },
    where: { el: 'Σε πάγκους στα πανηγύρια, στην αγορά και σε μαγαζιά με παραδοσιακά γλυκά — κυρίως το φθινόπωρο, μετά τον τρύγο.', en: 'At fair stalls, at the market and in shops selling traditional sweets — mostly in autumn, after the grape harvest.' },
  },
  {
    id: 'flaounes', emoji: '🥧', kind: 'snack', brave: 2,
    name: { el: 'Φλαούνες', en: 'Flaounes (Easter cheese pastries)' },
    what: { el: 'Τα πασχαλινά τυροπιτάκια της Κύπρου: ζύμη διπλωμένη γύρω από μια αφράτη γέμιση με τυρί, αυγά και δυόσμο, πασπαλισμένη με σουσάμι. Λίγο αλμυρές, λίγο γλυκές — μερικές έχουν και σταφίδες.', en: 'The Easter cheese pastries of Cyprus: dough folded around a fluffy filling of cheese, eggs and mint, sprinkled with sesame. A little salty, a little sweet — some have raisins too.' },
    kidTip: { el: 'Αν δεν θέλεις σταφίδες, ρώτα «έχει σταφίδα;» πριν διαλέξεις. Τις βρίσκεις κυρίως τη Μεγάλη Εβδομάδα — αν ταξιδεύεις άλλη εποχή, ρώτα σε φούρνο, κάποιοι τις φτιάχνουν όλο τον χρόνο.', en: 'If you do not want raisins, ask “does it have raisins?” before you pick. You find them mostly in Holy Week — if you travel at another time, ask at a bakery, some make them all year round.' },
    funFact: { el: 'Ψήνονται τη Μεγάλη Εβδομάδα για να γιορτάσουν το τέλος της Σαρακοστής: μετά από εφτά εβδομάδες νηστείας, το τυρί και τα αυγά επιστρέφουν στο τραπέζι — και οι οικογένειες ψήνουν δεκάδες, για συγγενείς και γείτονες.', en: 'They are baked in Holy Week to celebrate the end of Lent: after seven weeks of fasting, cheese and eggs return to the table — and families bake dozens to give to relatives and neighbours.' },
    where: { el: 'Σε φούρνους και ζαχαροπλαστεία γύρω από το Πάσχα — και σε κάθε κυπριακό σπίτι εκείνες τις μέρες.', en: 'In bakeries and pastry shops around Easter — and in every Cypriot home in those days.' },
  },
  {
    id: 'kypriakos-kafes', emoji: '☕', kind: 'drink', brave: 1, adultsOnly: true,
    name: { el: 'Κυπριακός καφές', en: 'Kypriakos kafes (Cypriot coffee)' },
    what: { el: 'Καφές βρασμένος αργά στον τζισβέ — έτσι λένε στην Κύπρο το μπρίκι — και σερβιρισμένος σε μικρό φλιτζάνι με αφρό από πάνω. Μόνο για τους γονείς.', en: 'Coffee brewed slowly in a small long-handled pot (a “tzisves”, as Cypriots call it) and served in a tiny cup with foam on top. For the parents only.' },
    kidTip: { el: 'Τα παιδιά μπορούν να δουν τον αφρό να φουσκώνει και να παραγγείλουν ένα «τριαντάφυλλο»: ροζ, δροσερό ρόφημα από σιρόπι τριαντάφυλλου και κρύο νερό — μια αγαπημένη κυπριακή γεύση.', en: 'Kids can watch the foam rise and order a “triantafyllo” instead: a cool pink drink of rose syrup and cold water — a Cypriot favourite.' },
    funFact: { el: 'Παραγγέλνεται ανάλογα με τη ζάχαρη — «σκέτος», «μέτριος» ή «γλυκύς», όπως λένε στην Κύπρο — και το κατακάθι μένει πάντα στον πάτο του φλιτζανιού, γι’ αυτό η τελευταία γουλιά μένει εκεί.', en: 'You order it by the sugar — “sketos” (plain), “metrios” (medium) or “glykys” (sweet), as Cypriots say — and the grounds always settle at the bottom of the cup, so the last sip stays there.' },
    where: { el: 'Στα παραδοσιακά καφενεία της παλιάς πόλης, όπου οι παππούδες παίζουν τάβλι — και σε κάθε καφέ.', en: 'In the traditional coffee houses of the old town, where grandfathers play backgammon — and in any café.' },
  },
];
