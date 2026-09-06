/**
 * WiseBot Explorer · Γεύσεις του Ντουμπρόβνικ / A taste of Dubrovnik
 * Written for a family with a 7–12 year old: what it is, a tip for the kids, one fact for
 * the parents, and the kind of place that serves it. No business names. Wine only as a
 * note for the parents.
 */
import type { TasteItem } from '../types';

export const TASTE: TasteItem[] = [
  {
    id: 'peka', emoji: '🔔', kind: 'dish', brave: 1,
    name: { el: 'Πέκα (Peka)', en: 'Peka' },
    what: { el: 'Κρέας (αρνί ή μοσχάρι) ή χταπόδι με πατάτες, ψημένο για ώρες κάτω από μια σιδερένια «καμπάνα» σκεπασμένη με κάρβουνα. Βγαίνει μαλακό, ζουμερό και μυρίζει καπνό από ξύλα.', en: 'Meat (lamb or veal) or octopus with potatoes, roasted for hours under an iron “bell” covered in embers. It comes out soft, juicy and smelling of woodsmoke.' },
    kidTip: { el: 'Παραγγέλνεται από πριν — συχνά την προηγούμενη μέρα — και είναι για όλη την οικογένεια. Το κρέας είναι η ήπια εκδοχή, το χταπόδι για όσους θέλουν κάτι διαφορετικό. Πες «hvala» (ευχαριστώ) όταν σηκώσουν την καμπάνα!', en: 'You order it ahead — often the day before — and it is for the whole family. Meat is the mild choice, octopus for those who want something different. Say “hvala” (thank you) when they lift the bell!' },
    funFact: { el: 'Η λέξη «peka» σημαίνει και το φαγητό και το σιδερένιο καπάκι: η καμπάνα θάβεται στη χόβολη πάνω σε ένα πέτρινο τζάκι που λέγεται «komin» και μένει εκεί δύο με τέσσερις ώρες.', en: 'The word “peka” means both the dish and the iron lid: the bell is buried in embers on a stone hearth called a “komin” and stays there for two to four hours.' },
    where: { el: 'Σε ταβέρνες (konoba) με τζάκι, συνήθως στα χωριά γύρω από την πόλη — ρωτήστε αν μαγειρεύουν «ispod peke» (κάτω από την καμπάνα).', en: 'In taverns (konoba) with a hearth, usually in the villages around town — ask if they cook “ispod peke” (under the bell).' },
  },
  {
    id: 'crni-rizot', emoji: '🦑', kind: 'dish', brave: 3,
    name: { el: 'Τσρνι ρίζοτ (Crni rižot)', en: 'Black risotto (Crni rižot)' },
    what: { el: 'Ένα ριζότο κατάμαυρο σαν μελάνι, με κομματάκια σουπιάς ή καλαμαριού. Το χρώμα του είναι από το ίδιο το μελάνι της σουπιάς και η γεύση του θυμίζει θάλασσα — αλμυρή και πλούσια.', en: 'A risotto as black as ink, with little pieces of cuttlefish or squid. The colour comes from the cuttlefish’s own ink and it tastes of the sea — salty and rich.' },
    kidTip: { el: 'Βάφει τα δόντια και τη γλώσσα μαύρα για λίγο — βγάλτε φωτογραφία! Ξεκίνα με μια πιρουνιά από το πιάτο του γονιού και ζήτα ψωμί δίπλα.', en: 'It stains your teeth and tongue black for a while — take a photo! Start with one forkful from a parent’s plate and ask for bread on the side.' },
    funFact: { el: 'Το μελάνι είναι το «σύννεφο» που εκτοξεύει η σουπιά για να κρυφτεί από τους εχθρούς της. Το ίδιο πιάτο είναι διάσημο και στη Βενετία, απέναντι στην Αδριατική — λέγεται ότι από εκεί ήρθε η συνταγή στη Δαλματία.', en: 'The ink is the “cloud” a cuttlefish squirts to hide from its enemies. The same dish is famous in Venice, across the Adriatic — the story goes that the recipe came to Dalmatia from there.' },
    where: { el: 'Σε παραδοσιακές ταβέρνες (konoba) και ψαροταβέρνες, μέσα και έξω από τα τείχη.', en: 'In traditional taverns (konoba) and fish restaurants, inside and outside the walls.' },
  },
  {
    id: 'riba-na-gradele', emoji: '🐟', kind: 'dish', brave: 2,
    name: { el: 'Ψάρι στη σχάρα (Riba na gradele)', en: 'Grilled fish (Riba na gradele)' },
    what: { el: 'Φρέσκο ψάρι ψημένο ολόκληρο στα κάρβουνα, με ελαιόλαδο, σκόρδο και μαϊντανό, δίπλα σε «blitva» — σέσκουλα βρασμένα με πατάτες. Απλό, ζουμερό και μυρίζει θάλασσα.', en: 'Fresh fish grilled whole over charcoal, with olive oil, garlic and parsley, next to “blitva” — chard cooked with potatoes. Simple, juicy and smelling of the sea.' },
    kidTip: { el: 'Έχει κόκαλα: ζήτα από τον γονιό να το καθαρίσει ή ρώτα για φιλέτο «bez kostiju» (χωρίς κόκαλα). Τα μικρά ψαράκια, οι σαρδέλες (srdele), είναι πιο φτηνά και τρώγονται με το χέρι.', en: 'It has bones: ask a parent to clean it or ask for a fillet “bez kostiju” (without bones). Small fish like sardines (srdele) are cheaper and eaten with your fingers.' },
    funFact: { el: 'Στη Δαλματία το ψάρι πληρώνεται με το κιλό, όχι με το πιάτο — γι’ αυτό ο σερβιτόρος φέρνει συχνά τον δίσκο με τα ωμά ψάρια στο τραπέζι για να διαλέξετε. «Gradele» λένε τη σχάρα στην ντοπιολαλιά.', en: 'In Dalmatia fish is priced by the kilo, not by the plate — that is why the waiter often brings the tray of raw fish to the table so you can choose. “Gradele” is the local word for the grill.' },
    where: { el: 'Σε ψαροταβέρνες και ταβέρνες (konoba) στο λιμάνι και στα χωριά της ακτής.', en: 'In fish restaurants and taverns (konoba) by the harbour and in the villages along the coast.' },
  },
  {
    id: 'rozata', emoji: '🍮', kind: 'sweet', brave: 1,
    name: { el: 'Ροζάτα (Rozata)', en: 'Rozata' },
    what: { el: 'Η κρέμα καραμελέ του Ντουμπρόβνικ: μια τρεμουλιαστή κρέμα από αυγά και γάλα, γυρισμένη ανάποδα με χρυσή καραμέλα από πάνω. Γλυκιά, απαλή και δροσερή.', en: 'Dubrovnik’s crème caramel: a wobbly custard of eggs and milk, turned upside down with golden caramel on top. Sweet, soft and cool.' },
    kidTip: { el: 'Το πιο εύκολο γλυκό της πόλης — μοιάζει με κρέμα καραμελέ. Ζήτα το ως επιδόρπιο σε ταβέρνα: «rozata, molim» (ροζάτα, παρακαλώ).', en: 'The easiest sweet in town — it looks just like crème caramel. Ask for it as dessert in a tavern: “rozata, molim” (rozata, please).' },
    funFact: { el: 'Το όνομά της έρχεται από το «rozalin», ένα άρωμα από ροδοπέταλα που έβαζαν οι νοικοκυρές του Ντουμπρόβνικ στην κρέμα. Παλιά ήταν το γλυκό των γάμων και των μεγάλων γιορτών.', en: 'Its name comes from “rozalin”, a rose-petal flavouring that Dubrovnik cooks used to perfume the custard. It was once the sweet of weddings and big celebrations.' },
    where: { el: 'Σε ταβέρνες και εστιατόρια της παλιάς πόλης, στη λίστα με τα επιδόρπια.', en: 'In taverns and restaurants of the old town, on the dessert list.' },
  },
  {
    id: 'arancini', emoji: '🍊', kind: 'sweet', brave: 2,
    name: { el: 'Αραντσίνι (Arancini)', en: 'Arancini (candied orange peel)' },
    what: { el: 'Λωρίδες από φλούδα πορτοκαλιού, βρασμένες σε σιρόπι και πασπαλισμένες με ζάχαρη. Μασουλιστές, γλυκές και λίγο πικρούλες — καμία σχέση με τα σικελικά αραντσίνι, που είναι τηγανητά μπαλάκια από ρύζι!', en: 'Strips of orange peel boiled in syrup and rolled in sugar. Chewy, sweet and a little bitter — nothing to do with the Sicilian arancini, which are fried rice balls!' },
    kidTip: { el: 'Πάρε ένα σακουλάκι για τη βόλτα και δοκίμασε μία λωρίδα· αν σου φανεί πικρή, υπάρχουν και «limuncini» από λεμόνι. Μοιράζονται εύκολα με όλη την παρέα.', en: 'Get a little bag for the walk and try one strip; if it tastes too bitter, there are also lemon “limuncini”. Easy to share with the whole family.' },
    funFact: { el: 'Φτιάχνονται από τα πικρά πορτοκάλια που φυτρώνουν στις αυλές γύρω από το Ντουμπρόβνικ, και το όνομα σημαίνει απλώς «πορτοκαλάκια»: «arancia» είναι το πορτοκάλι στα ιταλικά και «naranča» στα κροατικά.', en: 'They are made from the bitter oranges that grow in courtyards around Dubrovnik, and the name simply means “little oranges”: “arancia” is Italian for orange and “naranča” is the Croatian word.' },
    where: { el: 'Στους πάγκους της πρωινής αγοράς της παλιάς πόλης και σε μικρά μαγαζάκια με σπιτικά γλυκά.', en: 'At the stalls of the old town’s morning market and in little shops selling homemade sweets.' },
  },
  {
    id: 'sladoled', emoji: '🍦', kind: 'sweet', brave: 1,
    name: { el: 'Σλάντολεντ (Sladoled)', en: 'Ice cream (Sladoled)' },
    what: { el: 'Παγωτό σε χωνάκι, με πολλές γεύσεις στη βιτρίνα — από φράουλα και σοκολάτα μέχρι φιστίκι και ντόπιο σύκο. Το βράδυ όλη η πόλη κάνει βόλτα με ένα στο χέρι.', en: 'Ice cream in a cone, with lots of flavours in the window — from strawberry and chocolate to pistachio and local fig. In the evening the whole town strolls with one in hand.' },
    kidTip: { el: 'Παράγγειλέ το μόνος σου: «jednu kuglu, molim» (μία μπάλα, παρακαλώ) — και «hvala» στο τέλος. Οι ουρές μεγαλώνουν μετά το ηλιοβασίλεμα, πήγαινε λίγο νωρίτερα.', en: 'Order it yourself: “jednu kuglu, molim” (one scoop, please) — and “hvala” at the end. The queues get long after sunset, so go a little earlier.' },
    funFact: { el: 'Η βραδινή βόλτα στον κεντρικό δρόμο έχει δικό της όνομα στη Δαλματία: «đir», από το ιταλικό «giro», που σημαίνει «γύρος». Ο δρόμος, το Στραντούν, γυαλίζει από τα εκατομμύρια βήματα!', en: 'The evening stroll along the main street has its own name in Dalmatia: “đir”, from the Italian “giro”, meaning a “round”. The street, the Stradun, shines from all the millions of footsteps!' },
    where: { el: 'Σε παγωτατζίδικα κατά μήκος του Στραντούν και στις πλατείες της παλιάς πόλης.', en: 'In ice cream parlours along the Stradun and in the squares of the old town.' },
  },
  {
    id: 'pasticada', emoji: '🥘', kind: 'dish', brave: 2,
    name: { el: 'Παστιτσάδα (Pašticada)', en: 'Pašticada' },
    what: { el: 'Μοσχάρι που σιγοβράζει ώρες σε μια γλυκόξινη σάλτσα με δαμάσκηνα και λαχανικά, μέχρι να λιώνει στο πιρούνι. Σερβίρεται με σπιτικά νιόκι (njoki) που ρουφούν τη σάλτσα.', en: 'Beef simmered for hours in a sweet-and-sour sauce with prunes and vegetables until it falls apart on the fork. Served with homemade gnocchi (njoki) that soak up the sauce.' },
    kidTip: { el: 'Η σάλτσα είναι γλυκούλα από τα δαμάσκηνα και τα νιόκι είναι πολύ φιλικά — ζήτα ένα πιάτο για μοιρασιά. Είναι πιάτο του Σπλιτ και της κεντρικής Δαλματίας, αλλά το βρίσκεις και εδώ.', en: 'The sauce is sweet from the prunes and the gnocchi are very friendly — ask for a plate to share. It is a dish from Split and central Dalmatia, but you find it here too.' },
    funFact: { el: 'Θέλει δύο μέρες: το κρέας μένει μια νύχτα σε μαρινάδα με ξίδι και την επομένη σιγοψήνεται τρεις και πλέον ώρες. Γι’ αυτό είναι το φαγητό των γάμων και των μεγάλων κυριακάτικων τραπεζιών στη Δαλματία.', en: 'It takes two days: the meat sits overnight in a vinegar marinade and is then cooked for three hours or more the next day. That is why it is the dish of weddings and big Sunday lunches in Dalmatia.' },
    where: { el: 'Σε παραδοσιακές ταβέρνες (konoba), συχνά ως πιάτο της Κυριακής.', en: 'In traditional taverns (konoba), often as the Sunday dish.' },
  },
  {
    id: 'plavac-mali', emoji: '🍷', kind: 'drink', brave: 1, adultsOnly: true,
    name: { el: 'Πλάβατς μάλι (Plavac mali)', en: 'Plavac mali' },
    what: { el: 'Το κόκκινο κρασί της νότιας Δαλματίας, από τις απότομες πλαγιές της χερσονήσου Πέλιεσατς δίπλα στο Ντουμπρόβνικ — μόνο για τους γονείς.', en: 'The red wine of southern Dalmatia, from the steep slopes of the Pelješac peninsula next to Dubrovnik — for the parents only.' },
    kidTip: { el: 'Τα παιδιά μπορούν να δουν τα αμπέλια που σκαρφαλώνουν σχεδόν κατακόρυφα πάνω από τη θάλασσα και τις ξερολιθιές που τα κρατούν στη θέση τους.', en: 'Kids can see the vines climbing almost vertically above the sea and the dry stone walls that hold them in place.' },
    funFact: { el: 'Το 2001 οι επιστήμονες απέδειξαν με τεστ DNA ότι το Plavac mali είναι «παιδί» του Zinfandel — της διάσημης ποικιλίας της Καλιφόρνιας, που τελικά κατάγεται από τη Δαλματία (Crljenak kaštelanski).', en: 'In 2001 scientists proved with DNA tests that Plavac mali is a “child” of Zinfandel — California’s famous grape, which turned out to come from Dalmatia (Crljenak kaštelanski).' },
    where: { el: 'Σε ταβέρνες και οινοποιεία γύρω από το Ντουμπρόβνικ και στη χερσόνησο Πέλιεσατς.', en: 'In taverns and wineries around Dubrovnik and on the Pelješac peninsula.' },
  },
];
