/**
 * WiseBot Explorer · Γεύσεις του Πόρτο / A taste of Porto
 * Written for a family with a 7–12 year old: what it is, a tip for the kids, one fact for
 * the parents, and the kind of place that serves it. No business names. Wine only as a
 * note for the parents.
 */
import type { TasteItem } from '../types';

export const TASTE: TasteItem[] = [
  {
    id: 'francesinha', emoji: '🥪', kind: 'dish', brave: 2,
    name: { el: 'Φρανσεζίνια (Francesinha)', en: 'Francesinha' },
    what: { el: 'Ένα σάντουιτς-πύργος: ψωμί, ζαμπόν, λουκάνικο και μπριζολάκι, σκεπασμένα με λιωμένο τυρί και μια πορτοκαλί σάλτσα ντομάτας. Συχνά έχει και αυγό τηγανητό από πάνω!', en: 'A tower of a sandwich: bread, ham, sausage and a thin steak, covered in melted cheese and an orange tomato sauce. Often with a fried egg on top!' },
    kidTip: { el: 'Είναι τεράστια — μοιραστείτε μία. Ζήτα τη σάλτσα «όχι πικάντικη» (não picante).', en: 'It is huge — share one. Ask for the sauce “not spicy” (não picante).' },
    funFact: { el: 'Το όνομα σημαίνει «μικρή Γαλλιδούλα»: ο δημιουργός της, τη δεκαετία του 1950, την εμπνεύστηκε από το γαλλικό croque-monsieur και την έκανε πιο πλούσια.', en: 'The name means “little French girl”: its creator in the 1950s was inspired by the French croque-monsieur and made it much richer.' },
    where: { el: 'Σε καφέ και μικρά εστιατόρια σε όλη την πόλη — σχεδόν κάθε γειτονιά έχει το δικό της «καλύτερο».', en: 'In cafés and small restaurants all over town — nearly every neighbourhood has its own “best one”.' },
  },
  {
    id: 'pastel-de-nata', emoji: '🥧', kind: 'sweet', brave: 1,
    name: { el: 'Πάστελ ντε νάτα (Pastel de nata)', en: 'Pastel de nata' },
    what: { el: 'Ένα μικρό ταρτάκι με τραγανή σφολιάτα και κρέμα αυγού, καμένη λίγο από πάνω. Γλυκό, ζεστό και χωράει σε μια χούφτα.', en: 'A little tart of crisp puff pastry and egg custard, slightly burnt on top. Sweet, warm and it fits in one hand.' },
    kidTip: { el: 'Ζήτα το ζεστό και ρίξε λίγη κανέλα από πάνω — έτσι το τρώνε οι ντόπιοι.', en: 'Ask for it warm and shake a little cinnamon on top — that is how the locals eat it.' },
    funFact: { el: 'Γεννήθηκε πριν από 200 χρόνια σε ένα μοναστήρι της Λισαβόνας: οι μοναχοί χρησιμοποιούσαν τα ασπράδια για να κολλαρίσουν τα ράσα τους και με τους κρόκους έφτιαχναν γλυκά.', en: 'It was born 200 years ago in a Lisbon monastery: the monks used egg whites to starch their robes and made sweets with the leftover yolks.' },
    where: { el: 'Σε κάθε ζαχαροπλαστείο (pastelaria) και καφέ — κοίτα στη βιτρίνα.', en: 'In every pastry shop (pastelaria) and café — look in the window.' },
  },
  {
    id: 'bolinhos-de-bacalhau', emoji: '🐟', kind: 'snack', brave: 1,
    name: { el: 'Μπολίνιος ντε μπακαλιάου (Bolinhos de bacalhau)', en: 'Bolinhos de bacalhau' },
    what: { el: 'Χρυσαφένιες κροκέτες από μπακαλιάρο, πατάτα και μαϊντανό, τραγανές απ’ έξω και αφράτες μέσα. Τρώγονται με το χέρι.', en: 'Golden croquettes of salt cod, potato and parsley, crisp outside and fluffy inside. You eat them with your fingers.' },
    kidTip: { el: 'Ιδανικό πρώτο «τολμηρό» φαγητό: δεν έχει κόκαλα και μοιάζει με πατατοκροκέτα.', en: 'A perfect first “brave” food: no bones, and it looks like a potato croquette.' },
    funFact: { el: 'Οι Πορτογάλοι λένε ότι έχουν 365 συνταγές για μπακαλιάρο — μία για κάθε μέρα του χρόνου.', en: 'The Portuguese say they have 365 recipes for salt cod — one for every day of the year.' },
    where: { el: 'Σε καφέ, μικρές ταβέρνες (tascas) και στα ταμεία των αγορών.', en: 'In cafés, small taverns (tascas) and at market counters.' },
  },
  {
    id: 'sardinhas-assadas', emoji: '🐠', kind: 'dish', brave: 2,
    name: { el: 'Ψητές σαρδέλες (Sardinhas assadas)', en: 'Grilled sardines (Sardinhas assadas)' },
    what: { el: 'Σαρδέλες ψημένες στα κάρβουνα, με χοντρό αλάτι, πάνω σε μια φέτα ψωμί που ρουφάει τους χυμούς. Μυρίζουν θάλασσα και καλοκαίρι.', en: 'Sardines grilled over charcoal with coarse salt, served on a slice of bread that soaks up the juices. They smell of sea and summer.' },
    kidTip: { el: 'Έχουν κοκαλάκια: ζήτα από τον γονιό να τις καθαρίσει, ή διάλεξε τις μεγάλες που καθαρίζουν εύκολα.', en: 'They have little bones: ask a parent to clean them, or pick the big ones that come apart easily.' },
    funFact: { el: 'Τη νύχτα του Αγίου Ιωάννη (23 Ιουνίου) όλο το Πόρτο ψήνει σαρδέλες στους δρόμους και οι άνθρωποι χτυπιούνται φιλικά στο κεφάλι με πλαστικά σφυράκια!', en: 'On St John’s night (23 June) the whole of Porto grills sardines in the street and people tap each other on the head with soft plastic hammers!' },
    where: { el: 'Σε ταβέρνες με ψησταριά, κυρίως το καλοκαίρι — τις μυρίζεις από μακριά.', en: 'In taverns with a grill, mostly in summer — you can smell them from down the street.' },
  },
  {
    id: 'caldo-verde', emoji: '🥣', kind: 'dish', brave: 1,
    name: { el: 'Κάλντο βέρντε (Caldo verde)', en: 'Caldo verde' },
    what: { el: 'Μια πράσινη σούπα από πατάτα και λαχανίδα κομμένη σε λεπτές κλωστές, με μια φέτα λουκάνικο από πάνω. Απαλή και ζεστή.', en: 'A green soup of potato and thinly sliced kale, with a slice of sausage on top. Soft and warming.' },
    kidTip: { el: 'Η πιο εύκολη γεύση της Πορτογαλίας για παιδιά — ζήτα τη «χωρίς λουκάνικο» αν δεν σου αρέσει το πικάντικο.', en: 'The easiest Portuguese taste for kids — ask for it “without sausage” if you do not like spicy.' },
    funFact: { el: 'Ήρθε από τα χωριά του βορρά και είναι η σούπα που σερβίρουν σε γάμους και γιορτές — συχνά τα μεσάνυχτα!', en: 'It came from the villages of the north and is the soup served at weddings and festivals — often at midnight!' },
    where: { el: 'Σε κάθε ταβέρνα και εστιατόριο, σαν πρώτο πιάτο.', en: 'In any tavern or restaurant, as a starter.' },
  },
  {
    id: 'bola-de-berlim', emoji: '🍩', kind: 'sweet', brave: 1,
    name: { el: 'Μπόλα ντε Μπερλίμ (Bola de Berlim)', en: 'Bola de Berlim' },
    what: { el: 'Ένα αφράτο ντόνατ χωρίς τρύπα, πασπαλισμένο με ζάχαρη και γεμιστό με κίτρινη κρέμα αυγού.', en: 'A fluffy doughnut with no hole, rolled in sugar and filled with yellow egg custard.' },
    kidTip: { el: 'Στην παραλία το πουλάνε πλανόδιοι φωνάζοντας «Bolinha!» — άκου την και σήκωσε το χέρι.', en: 'On the beach it is sold by walking vendors calling “Bolinha!” — listen for it and raise your hand.' },
    funFact: { el: 'Το όνομα σημαίνει «μπάλα του Βερολίνου»: η συνταγή ήρθε από Γερμανούς φούρναρηδες, αλλά οι Πορτογάλοι άλλαξαν τη γέμιση σε κρέμα αυγού.', en: 'The name means “Berlin ball”: the recipe came with German bakers, but the Portuguese swapped the filling for egg custard.' },
    where: { el: 'Σε ζαχαροπλαστεία, και στις παραλίες κοντά στο Πόρτο το καλοκαίρι.', en: 'In pastry shops, and on the beaches near Porto in summer.' },
  },
  {
    id: 'tripas', emoji: '🍲', kind: 'dish', brave: 3,
    name: { el: 'Τρίπας α μόδα ντο Πόρτο (Tripas à moda do Porto)', en: 'Tripas à moda do Porto' },
    what: { el: 'Το πιο διάσημο πιάτο της πόλης: ένα στιφάδο με φασόλια, λουκάνικο και… εντόσθια. Έχει έντονη γεύση και το λατρεύουν οι ντόπιοι.', en: 'The city’s most famous dish: a stew of beans, sausage and… tripe. Strong-tasting and beloved by the locals.' },
    kidTip: { el: 'Μόνο για πολύ τολμηρούς: δοκίμασε μία κουταλιά από το πιάτο του γονιού και κέρδισε τον τίτλο!', en: 'For very brave tasters only: try one spoonful from a parent’s plate and earn the title!' },
    funFact: { el: 'Λέγεται ότι το 1415 οι κάτοικοι έδωσαν όλο το κρέας τους στα πλοία που έφευγαν για την Κεούτα και κράτησαν μόνο τα εντόσθια — γι’ αυτό τους φωνάζουν «tripeiros». Είναι θρύλος, αλλά οι Πορτογάλοι τον λένε με περηφάνια.', en: 'The story goes that in 1415 the people gave all their meat to the ships leaving for Ceuta and kept only the tripe — which is why they are nicknamed “tripeiros”. It is a legend, but one told with pride.' },
    where: { el: 'Σε παραδοσιακές ταβέρνες, συνήθως ως πιάτο ημέρας.', en: 'In traditional taverns, usually as the dish of the day.' },
  },
  {
    id: 'vinho-do-porto', emoji: '🍷', kind: 'drink', brave: 1, adultsOnly: true,
    name: { el: 'Κρασί του Πόρτο (Vinho do Porto)', en: 'Port wine (Vinho do Porto)' },
    what: { el: 'Το γλυκό κρασί που έκανε την πόλη διάσημη — μόνο για τους γονείς.', en: 'The sweet wine that made the city famous — for the parents only.' },
    kidTip: { el: 'Τα παιδιά μπορούν να δουν τα τεράστια βαρέλια στις κάβες της Γκάια, απέναντι από το ποτάμι, και τις παλιές βάρκες rabelo που τα μετέφεραν.', en: 'Kids can see the giant barrels in the cellars of Gaia, across the river, and the old rabelo boats that used to carry them.' },
    funFact: { el: 'Παλαιώνει χρόνια σε ξύλινα βαρέλια· κάποια μπουκάλια είναι παλιότερα από τους παππούδες σας.', en: 'It ages for years in wooden barrels; some bottles are older than your grandparents.' },
    where: { el: 'Στις κάβες της Vila Nova de Gaia, στην άλλη όχθη του Δούρου.', en: 'In the cellars of Vila Nova de Gaia, on the other bank of the Douro.' },
  },
];
