/**
 * WiseBot Explorer · Γεύσεις της Κωνσταντινούπολης / A taste of Istanbul
 * Written for a family with a 7–12 year old: what it is, a tip for the kids, one fact for
 * the parents, and the kind of place that serves it. No business names. Tea and coffee only
 * as a note for the parents — no alcohol.
 */
import type { TasteItem } from '../types';

export const TASTE: TasteItem[] = [
  {
    id: 'simit', emoji: '🥯', kind: 'snack', brave: 1,
    name: { el: 'Σιμίτ (Simit)', en: 'Simit' },
    what: { el: 'Ένα κουλούρι με σουσάμι, τραγανό απ’ έξω και μαλακό μέσα, που πριν ψηθεί βουτιέται σε πετιμέζι (σιρόπι σταφυλιού). Θα σου θυμίσει το κουλούρι Θεσσαλονίκης — εδώ είναι λίγο πιο σκούρο και πιο τραγανό.', en: 'A sesame bread ring, crisp outside and soft inside, dipped in grape molasses before it is baked. It will remind you of the Greek koulouri — a little darker and crunchier here.' },
    kidTip: { el: 'Πωλείται από το πρωί από κόκκινα καροτσάκια και από πλανόδιους με έναν δίσκο στο κεφάλι. Πες «Bir simit, lütfen» (μπιρ σιμίτ, λιουτφέν) και φάε το ζεστό — στο φέρι, κάποιοι μοιράζονται λίγα ψίχουλα με τους γλάρους!', en: 'Sold from early morning from red carts and by walking vendors with a tray on their head. Say “Bir simit, lütfen” (one simit, please) and eat it warm — on the ferry, some people share a few crumbs with the seagulls!' },
    funFact: { el: 'Το όνομά του έρχεται από την αραβική λέξη «samīd», που σημαίνει «ψιλό λευκό αλεύρι». Στην Κωνσταντινούπολη ψήνεται από τον 16ο αιώνα — οθωμανικά έγγραφα όριζαν ακόμα και το βάρος και την τιμή του!', en: 'Its name comes from the Arabic word “samīd”, meaning “fine white flour”. Simit has been baked in Istanbul since the 1500s — Ottoman records even fixed its weight and its price!' },
    where: { el: 'Από τα κόκκινα καροτσάκια των σιμιτζήδων σχεδόν σε κάθε γωνιά, στους φούρνους και στα καφέ για πρωινό.', en: 'From the red simit carts on almost every corner, in bakeries and in cafés at breakfast.' },
  },
  {
    id: 'balik-ekmek', emoji: '🐟', kind: 'dish', brave: 2,
    name: { el: 'Μπαλίκ εκμέκ (Balık ekmek)', en: 'Balık ekmek (fish sandwich)' },
    what: { el: 'Φιλέτο σκουμπρί ψημένο στη σχάρα, μέσα σε μισή φραντζόλα με μαρούλι και κρεμμύδι, με λεμόνι από πάνω. Μυρίζει θάλασσα και τρώγεται όρθια, δίπλα στα καράβια.', en: 'A grilled mackerel fillet in half a loaf with lettuce and onion, with a squeeze of lemon. It smells of the sea and you eat it standing up, next to the boats.' },
    kidTip: { el: 'Το ψάρι είναι φιλέτο, αλλά ψάξε για μικρά κοκαλάκια πριν δαγκώσεις. Αν δεν θέλεις κρεμμύδι πες «soğansız» (σοανσίζ), και στύψε λεμόνι από πάνω, όπως κάνουν οι ντόπιοι.', en: 'The fish is a fillet, but check for small bones before you bite. If you do not want onion say “soğansız” (so-an-SUZ), and squeeze lemon on top like the locals do.' },
    funFact: { el: 'Το όνομα σημαίνει απλώς «ψάρι-ψωμί». Εδώ και δεκαετίες πουλιέται από βάρκες δεμένες δίπλα στη Γέφυρα του Γαλατά: οι μάγειρες ψήνουν πάνω στο κατάστρωμα ενώ η βάρκα κουνιέται με τα κύματα!', en: 'The name simply means “fish-bread”. For decades it has been sold from boats moored beside the Galata Bridge: the cooks grill on deck while the boat rocks with the waves!' },
    where: { el: 'Από τις βάρκες και τους πάγκους στην προβλήτα του Εμινονού, κάτω από τη Γέφυρα του Γαλατά, και σε ψαροταβέρνες κοντά στο νερό.', en: 'From the boats and stalls on the Eminönü quay, at the foot of the Galata Bridge, and at fish taverns near the water.' },
  },
  {
    id: 'doner', emoji: '🥙', kind: 'dish', brave: 1,
    name: { el: 'Ντονέρ κεμπάπ (Döner kebap)', en: 'Döner kebap' },
    what: { el: 'Κρέας ψημένο σε έναν ψηλό πύργο που γυρίζει μπροστά στη φωτιά και κόβεται σε λεπτές φέτες. Τρώγεται μέσα σε ψωμί ή τυλιγμένο σε λεπτή πίτα (dürüm) — ο ξάδερφος του γύρου!', en: 'Meat roasted on a tall tower that turns in front of the fire and is shaved off in thin slices. It comes in bread or rolled in a thin flatbread (dürüm) — the cousin of Greek gyros!' },
    kidTip: { el: 'Ζήτα το «acısız» (ατζισίζ), δηλαδή χωρίς καυτερό. Το κοτόπουλο (tavuk) είναι το πιο ήπιο. Πες «Bir tavuk dürüm, lütfen» (ένα τυλιχτό κοτόπουλο, παρακαλώ) και είσαι έτοιμος!', en: 'Ask for it “acısız” (ah-juh-SUZ), meaning not spicy. Chicken (tavuk) is the mildest. Say “Bir tavuk dürüm, lütfen” (one chicken wrap, please) and you are set!' },
    funFact: { el: 'Ντονέρ σημαίνει «αυτό που γυρίζει», γιατί η σούβλα στέκεται όρθια και περιστρέφεται μπροστά στη φωτιά. Λέγεται ότι η όρθια σούβλα πρωτοεμφανίστηκε στην πόλη Προύσα (Bursa) τον 19ο αιώνα.', en: 'Döner means “the one that turns”, because the spit stands upright and rotates in front of the fire. The story goes that the upright spit first appeared in the city of Bursa in the 1800s.' },
    where: { el: 'Σε μικρά κεμπαπτζίδικα και μπουφέδες σε κάθε γειτονιά — τον πύργο με το κρέας τον βλέπεις από τη βιτρίνα.', en: 'In small kebab shops and snack counters in every neighbourhood — you can spot the tower of meat through the window.' },
  },
  {
    id: 'kumpir', emoji: '🥔', kind: 'dish', brave: 1,
    name: { el: 'Γεμιστή ψητή πατάτα (Kumpir)', en: 'Kumpir (loaded baked potato)' },
    what: { el: 'Μια τεράστια ψητή πατάτα που ανοίγεται, πολτοποιείται μέσα στη φλούδα της με βούτυρο και τυρί, και μετά γεμίζει με ό,τι δείξεις: καλαμπόκι, ελιές, λουκάνικο, τουρσί, κέτσαπ… Ένα ολόκληρο γεύμα σε μια πατάτα!', en: 'A giant baked potato, split open and mashed inside its skin with butter and cheese, then piled with whatever you point at: corn, olives, sausage, pickles, ketchup… A whole meal in one potato!' },
    kidTip: { el: 'Εσύ διαλέγεις τις γεμίσεις — απλώς δείξε με το δάχτυλο και πες «bu» (μπου), που σημαίνει «αυτό». Είναι πολύ μεγάλη: μοιραστείτε μία και φάτε την στα παγκάκια με θέα τον Βόσπορο.', en: 'You choose the toppings — just point and say “bu” (boo), which means “this one”. It is very big: share one and eat it on the benches looking out at the Bosphorus.' },
    funFact: { el: 'Η λέξη «kumpir» ήρθε στα τουρκικά από τα Βαλκάνια, όπου σημαίνει απλώς «πατάτα» — και λέγεται ότι ξεκίνησε από μια γερμανική λέξη που σημαίνει «αχλάδι της γης»!', en: 'The word “kumpir” came into Turkish from the Balkans, where it just means “potato” — and it is said to go back to a German word meaning “ground pear”!' },
    where: { el: 'Στη σειρά με τους πάγκους στην πλατεία του Ορτάκιοϊ, δίπλα στο τζαμί στην όχθη του Βοσπόρου.', en: 'At the row of stalls in the square at Ortaköy, next to the mosque on the Bosphorus shore.' },
  },
  {
    id: 'ayran', emoji: '🥛', kind: 'drink', brave: 2,
    name: { el: 'Αϊράνι (Ayran)', en: 'Ayran' },
    what: { el: 'Ένα ποτό από γιαούρτι, νερό και λίγο αλάτι, κρύο και αφράτο από πάνω. Δεν είναι γλυκό — είναι σαν να πίνεις δροσερό τζατζίκι χωρίς σκόρδο!', en: 'A cold drink of yoghurt, water and a pinch of salt, with a foamy top. It is not sweet — a bit like drinking cool tzatziki without the garlic!' },
    kidTip: { el: 'Παιδιά σε όλη την Τουρκία το πίνουν μαζί με το κεμπάπ. Πάρε πρώτα μια μικρή γουλιά, γιατί το αλμυρό ξαφνιάζει. Το πιο διασκεδαστικό είναι το «açık ayran», που σερβίρεται σε χάλκινη κούπα με πολύ αφρό.', en: 'Kids all over Türkiye drink it with their kebab. Take a small sip first, because the salty taste surprises you. The most fun kind is “açık ayran”, served in a copper cup with lots of foam.' },
    funFact: { el: 'Είναι πανάρχαιο ποτό των νομάδων της Κεντρικής Ασίας: αναφέρεται ήδη σε ένα λεξικό των τουρκικών γλωσσών του 11ου αιώνα, γραμμένο πριν από σχεδόν 1.000 χρόνια.', en: 'It is an ancient drink of the Central Asian nomads: it is already mentioned in an 11th-century dictionary of the Turkic languages, written almost 1,000 years ago.' },
    where: { el: 'Σε κάθε κεμπαπτζίδικο και σε κάθε ψιλικατζίδικο, σε κουτάκι ή ποτήρι — στις ψησταριές το βγάζουν από μια μηχανή που το κάνει αφρό.', en: 'In every kebab shop and corner shop, in a cup or a bottle — at grill houses it comes out of a machine that whips it into foam.' },
  },
  {
    id: 'lokum', emoji: '🍬', kind: 'sweet', brave: 1,
    name: { el: 'Λουκούμι (Lokum)', en: 'Lokum (Turkish delight)' },
    what: { el: 'Μαλακά, ζελεδένια κυβάκια με ροδόνερο, λεμόνι ή φιστίκι, πασπαλισμένα με ζάχαρη άχνη για να μην κολλάνε. Το ξέρεις ήδη από την Ελλάδα — εδώ το βρίσκεις σε δεκάδες γεύσεις.', en: 'Soft, jelly-like cubes flavoured with rose water, lemon or pistachio, dusted with icing sugar so they do not stick. You already know it from Greece — here it comes in dozens of flavours.' },
    kidTip: { el: 'Στα μαγαζιά του παζαριού σου δίνουν συχνά ένα κομματάκι να δοκιμάσεις — πες «teşekkürler» (τεσεκιουρλέρ), δηλαδή «ευχαριστώ». Πολλά έχουν ξηρούς καρπούς μέσα (φιστίκι, φουντούκι). Το ροδόνερο είναι η πιο κλασική γεύση.', en: 'In the bazaar shops they often hand you a small piece to try — say “teşekkürler” (teh-shek-kur-LER), which means “thank you”. Many kinds have nuts inside (pistachio, hazelnut). Rose is the classic flavour.' },
    funFact: { el: 'Το παλιό οθωμανικό του όνομα, «rahat-ul hulkum», ήρθε από τα αραβικά και σημαίνει «ανακούφιση για τον λαιμό». Οι Άγγλοι το είπαν «Turkish delight» — και το δικό μας «λουκούμι» βγαίνει από την ίδια ακριβώς λέξη.', en: 'Its old Ottoman name, “rahat-ul hulkum”, came from Arabic and means “comfort for the throat”. The English called it “Turkish delight” — and the Greek word loukoumi comes from the very same word.' },
    where: { el: 'Σε ζαχαροπλαστεία και μαγαζιά με γλυκά (şekerci), και στους πάγκους του Αιγυπτιακού Παζαριού — στις ίδιες βιτρίνες θα δεις ταψιά με μπακλαβά που ξέρεις από το σπίτι.', en: 'In sweet shops (şekerci) and at the stalls of the Spice Bazaar — the same windows are full of baklava trays you will recognise from home.' },
  },
  {
    id: 'dondurma', emoji: '🍦', kind: 'sweet', brave: 2,
    name: { el: 'Ντοντουρμά (Maraş dondurması)', en: 'Dondurma (Maraş ice cream)' },
    what: { el: 'Παγωτό τόσο πηχτό και ελαστικό που τεντώνεται σαν λάστιχο και κόβεται με μαχαίρι! Συνήθως σκέτο, με γεύση κρέμας, ή με φιστίκι — μασιέται αργά και λιώνει πολύ πιο δύσκολα από το κανονικό παγωτό.', en: 'Ice cream so thick and stretchy that it pulls like elastic and is cut with a knife! Usually plain cream or pistachio, it is chewed slowly and melts much more slowly than normal ice cream.' },
    kidTip: { el: 'Ο πωλητής, με παραδοσιακή στολή και ένα μακρύ μεταλλικό κοντάρι, θα σου το δίνει και θα σου το παίρνει πίσω με κόλπα — είναι μέρος της διασκέδασης, μην τα παρατήσεις! Τρώγεται με μαχαίρι και πιρούνι, σε μικρές μπουκιές.', en: 'The seller, in traditional costume and holding a long metal paddle, will hand it to you and snatch it back with tricks — it is part of the fun, do not give up! Eat it with a knife and fork, in small bites.' },
    funFact: { el: 'Έρχεται από την πόλη Καχραμανμαράς, στα νότια της Τουρκίας. Το «λάστιχο» οφείλεται στο σαλέπι — αλεύρι από ρίζες άγριας ορχιδέας — και στη μαστίχα, την ίδια ρητίνη που ξέρουμε από τη Χίο.', en: 'It comes from the city of Kahramanmaraş in southern Türkiye. The stretch comes from salep — a flour made from wild orchid roots — and mastic, the same resin Greek kids know from Chios.' },
    where: { el: 'Από τα καροτσάκια και τα μικρά μαγαζιά με τον πωλητή με τη στολή — θα τον ακούσεις να χτυπάει το καμπανάκι του στους πεζόδρομους και στις τουριστικές πλατείες.', en: 'From the carts and small shops with the costumed seller — you will hear his bell on the pedestrian streets and in the tourist squares.' },
  },
  {
    id: 'cay-kahve', emoji: '☕', kind: 'drink', brave: 1, adultsOnly: true,
    name: { el: 'Τσάι και τούρκικος καφές (Çay & Türk kahvesi)', en: 'Turkish tea & coffee (Çay & Türk kahvesi)' },
    what: { el: 'Δυνατό μαύρο τσάι σε μικρό ποτήρι σε σχήμα τουλίπας, και πηχτός καφές που βράζει σε μπρίκι και σερβίρεται με το κατακάθι μέσα στο φλιτζάνι — για τους γονείς.', en: 'Strong black tea in a small tulip-shaped glass, and thick coffee boiled in a little pot and served with the grounds still in the cup — for the parents.' },
    kidTip: { el: 'Τα παιδιά μπορούν να παρακολουθήσουν τον τσαγιτζή (çaycı) να διασχίζει το παζάρι με έναν δίσκο γεμάτο ποτηράκια που κρέμεται από αλυσίδες και κουνιέται χωρίς να χύνει σταγόνα — και τους πωλητές τσαγιού πάνω στα φέρι του Βοσπόρου.', en: 'Kids can watch the tea seller (çaycı) cross the bazaar with a tray of glasses hanging from chains, swinging without spilling a drop — and the tea vendors walking the decks of the Bosphorus ferries.' },
    funFact: { el: 'Ο τούρκικος καφές — μαζί με την παρέα και τις κουβέντες γύρω του — μπήκε το 2013 στον κατάλογο Άυλης Πολιτιστικής Κληρονομιάς της UNESCO. Και ναι, ο δικός μας ελληνικός καφές ψήνεται με τον ίδιο ακριβώς τρόπο.', en: 'Turkish coffee — together with the company and the chat around it — was added to UNESCO’s list of Intangible Cultural Heritage in 2013. And yes, Greek coffee is brewed the very same way.' },
    where: { el: 'Σε τσαγερίες με θέα τη θάλασσα (çay bahçesi), σε κάθε καφέ και στα παζάρια — ο καφές έρχεται πάντα με ένα ποτήρι νερό και συχνά με ένα λουκουμάκι.', en: 'In tea gardens (çay bahçesi) looking out over the sea, in every café and in the bazaars — the coffee always comes with a glass of water and often a piece of lokum.' },
  },
];
