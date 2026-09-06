/**
 * WiseBot Explorer · Γεύσεις της Κοπεγχάγης / A taste of Copenhagen
 * Written for a family with a 7–12 year old: what it is, a tip for the kids, one fact for
 * the parents, and the kind of place that serves it. No business names. Beer only as a
 * note for the parents.
 */
import type { TasteItem } from '../types';

export const TASTE: TasteItem[] = [
  {
    id: 'smorrebrod', emoji: '🥪', kind: 'dish', brave: 2,
    name: { el: 'Σμέρεμπρεδ (Smørrebrød)', en: 'Smørrebrød' },
    what: { el: 'Μια χοντρή φέτα σκούρο ψωμί σίκαλης (rugbrød) με βούτυρο και από πάνω ό,τι φανταστείς: αυγό, κεφτεδάκι, σολομό, τυρί… Σαν σάντουιτς χωρίς το πάνω ψωμί — και το ψωμί είναι λίγο ξινό και πολύ χορταστικό.', en: 'A thick slice of dark rye bread (rugbrød) with butter and anything on top: egg, meatball, salmon, cheese… Like a sandwich with no top slice — and the bread is a little sour and very filling.' },
    kidTip: { el: 'Διάλεξε ένα ήπιο: με αυγό και ντομάτα ή με κεφτεδάκι. Τρώγεται με μαχαίρι και πιρούνι, όχι με τα χέρια! Για τολμηρούς: μία μπουκιά από αυτό με την ξιδάτη ρέγγα (sild).', en: 'Pick a mild one: egg and tomato, or the meatball one. Eat it with a knife and fork, not with your hands! For brave tasters: one bite of the pickled herring (sild) kind.' },
    funFact: { el: 'Σε ένα σωστό δανέζικο μεσημεριανό υπάρχει αυστηρή σειρά: πρώτα η ρέγγα, μετά τα άλλα ψάρια, ύστερα το κρέας και τελευταίο το τυρί — ποτέ ανάποδα!', en: 'At a proper Danish lunch there is a strict order: herring first, then the other fish, then meat, and cheese last — never the other way round!' },
    where: { el: 'Σε εστιατόρια μεσημεριανού (frokostrestaurant) και σε μικρά μαγαζιά με smørrebrød που τα πουλάνε με το κομμάτι — κυρίως το μεσημέρι, πολλά κλείνουν το απόγευμα.', en: 'In lunch restaurants (frokostrestaurant) and little smørrebrød shops that sell them by the piece — mostly at lunchtime, many close in the afternoon.' },
  },
  {
    id: 'wienerbrod', emoji: '🥐', kind: 'sweet', brave: 1,
    name: { el: 'Βίνερμπρεδ (Wienerbrød)', en: 'Danish pastry (Wienerbrød)' },
    what: { el: 'Η διάσημη «δανέζικη» σφολιάτα: αφράτα, βουτυρένια φύλλα με κρέμα ή μαρμελάδα στη μέση και λευκό γλάσο από πάνω. Τραγανή απ’ έξω, μαλακή μέσα.', en: 'The famous “Danish” pastry: flaky, buttery layers with custard or jam in the middle and white icing on top. Crisp outside, soft inside.' },
    kidTip: { el: 'Το στρογγυλό με την κρέμα στο κέντρο λέγεται spandauer — το πιο εύκολο για αρχή. Στον φούρνο πες «En spandauer, tak» (ένα spandauer, παρακαλώ).', en: 'The round one with custard in the centre is called a spandauer — the easiest to start with. At the bakery say “En spandauer, tak” (one spandauer, please).' },
    funFact: { el: 'Οι Δανοί δεν το λένε «δανέζικο» αλλά «βιεννέζικο ψωμί» (wienerbrød): λέγεται ότι γύρω στο 1850 οι Δανοί φουρνάρηδες έκαναν απεργία και τα αφεντικά έφεραν ζαχαροπλάστες από την Αυστρία, που είχαν μαζί τους τη συνταγή.', en: 'The Danes do not call it “Danish” but “Viennese bread” (wienerbrød): the story goes that around 1850 Danish bakery workers went on strike, and the owners brought in bakers from Austria who carried the recipe with them.' },
    where: { el: 'Σε κάθε φούρνο (bageri) — υπάρχει ένας σε κάθε γειτονιά και τα γλυκά είναι στη βιτρίνα.', en: 'In any bakery (bageri) — there is one in every neighbourhood and the pastries sit in the window.' },
  },
  {
    id: 'frikadeller', emoji: '🍖', kind: 'dish', brave: 1,
    name: { el: 'Φρικαντέλερ (Frikadeller)', en: 'Frikadeller' },
    what: { el: 'Τα δανέζικα κεφτεδάκια: πλακουτσωτά, από χοιρινό κιμά με κρεμμύδι, τηγανισμένα στο βούτυρο. Μαλακά και ήπια, με πατάτες, καφέ σάλτσα και γλυκόξινο κόκκινο λάχανο δίπλα.', en: 'Danish meatballs: flat ovals of minced pork with onion, fried in butter. Soft and mild, served with potatoes, brown gravy and sweet-sour red cabbage on the side.' },
    kidTip: { el: 'Σχεδόν σαν κεφτεδάκι από το σπίτι — η πιο σίγουρη επιλογή για παιδιά. Δοκίμασε και το κόκκινο λάχανο (rødkål), είναι γλυκό. Οι Δανοί βάζουν όσα περισσέψουν κρύα στο κολατσιό την επόμενη μέρα.', en: 'Almost like a meatball from home — the safest bet for kids. Try the red cabbage (rødkål) too, it is sweet. Danes pack the leftovers cold in the lunchbox the next day.' },
    funFact: { el: 'Η λέξη ήρθε από τη γαλλική «fricadelle» μέσω των Γερμανών. Είναι πλακουτσωτά και όχι στρογγυλά γιατί οι Δανοί τα πλάθουν με ένα κουτάλι της σούπας και τα πατάνε λίγο στο τηγάνι.', en: 'The word came from the French “fricadelle” by way of German. They are flat rather than round because Danes shape them with a tablespoon and press them a little in the pan.' },
    where: { el: 'Σε παραδοσιακά δανέζικα εστιατόρια και μαγαζιά μεσημεριανού, πάνω σε smørrebrød, ακόμη και στον πάγκο με τα έτοιμα φαγητά στο σούπερ μάρκετ.', en: 'In traditional Danish restaurants and lunch places, on top of smørrebrød, and even at the ready-food counter of the supermarket.' },
  },
  {
    id: 'ristet-hotdog', emoji: '🌭', kind: 'snack', brave: 2,
    name: { el: 'Ρίστετ χοτ ντογκ (Ristet hotdog)', en: 'Danish hot dog (Ristet hotdog)' },
    what: { el: 'Ψητό λουκάνικο (pølse) — συχνά το κατακόκκινο rød pølse — σε ψωμάκι, με κέτσαπ, μουστάρδα, ρεμουλάντ, ωμό και τραγανό τηγανητό κρεμμύδι και φετάκια πίκλας. Πολλά μαζί, αλλά ταιριάζουν!', en: 'A grilled sausage (pølse) — often the bright-red rød pølse — in a bun with ketchup, mustard, remoulade, raw and crispy fried onions and slices of pickle. A lot at once, but it works!' },
    kidTip: { el: 'Παράγγειλε ευγενικά: «En ristet hotdog, tak». Το θέλεις ήπιο; Πες «kun ketchup» (μόνο κέτσαπ). Οι Δανοί το συνοδεύουν με σοκολατούχο γάλα — ζήτα ένα kakaomælk.', en: 'Order politely: “En ristet hotdog, tak”. Want it mild? Say “kun ketchup” (only ketchup). Danes drink chocolate milk with it — ask for a kakaomælk.' },
    funFact: { el: 'Τα πρώτα καροτσάκια με λουκάνικα (pølsevogne) άνοιξαν στην Κοπεγχάγη τον Ιανουάριο του 1921 — και το 2021 η πόλη γιόρτασε τα 100ά γενέθλιά τους.', en: 'The first sausage carts (pølsevogne) opened in Copenhagen in January 1921 — and in 2021 the city celebrated their 100th birthday.' },
    where: { el: 'Σε καροτσάκι λουκάνικων (pølsevogn) σε πλατείες και έξω από σταθμούς — ψάξε το μικρό βαγονάκι με τον πάγκο.', en: 'At a sausage cart (pølsevogn) on squares and outside stations — look for the little wagon with a counter.' },
  },
  {
    id: 'flodeboller', emoji: '🍫', kind: 'sweet', brave: 1,
    name: { el: 'Φλέδεμπολερ (Flødeboller)', en: 'Flødeboller' },
    what: { el: 'Ένας θόλος από σοκολάτα που κρύβει αφράτη, λευκή μαρέγκα, πάνω σε βάση από βάφλα ή αμυγδαλόπαστα. Σπάει με ένα «κρακ» και μέσα είναι σαν σύννεφο.', en: 'A dome of chocolate hiding fluffy white meringue, sitting on a wafer or marzipan base. It cracks when you bite it, and the inside is like a cloud.' },
    kidTip: { el: 'Δάγκωσε πρώτα την κορυφή — λερώνει, πάρε χαρτοπετσέτα. Η βάση συχνά είναι αμυγδαλόπαστα (έχει αμύγδαλα). Για τολμηρούς: υπάρχουν και με γλυκόριζα (lakrids)!', en: 'Bite the top first — it gets messy, grab a napkin. The base is often marzipan (that has almonds). For brave tasters: there are liquorice ones (lakrids)!' },
    funFact: { el: 'Το όνομα σημαίνει «ψωμάκια με κρέμα», αλλά κρέμα δεν έχει καθόλου: η γέμιση είναι χτυπημένα ασπράδια με ζάχαρη — γι’ αυτό είναι τόσο ελαφριά.', en: 'The name means “cream buns”, but there is no cream in them at all: the filling is whipped egg white and sugar — which is why it is so light.' },
    where: { el: 'Σε φούρνους, σοκολατοποιεία και σε κάθε σούπερ μάρκετ — σε κουτί των έξι ή ένα-ένα από τη βιτρίνα.', en: 'In bakeries, chocolate shops and every supermarket — in a box of six, or one at a time from the counter.' },
  },
  {
    id: 'aebleskiver', emoji: '🥞', kind: 'sweet', brave: 1,
    name: { el: 'Έμπλεσκιβερ (Æbleskiver)', en: 'Æbleskiver' },
    what: { el: 'Στρογγυλές τηγανίτες σαν μπαλάκια, ψημένες σε ειδικό τηγάνι με λακκουβίτσες. Χρυσές απ’ έξω, αφράτες μέσα, με άχνη ζάχαρη και μαρμελάδα.', en: 'Round pancake balls, cooked in a special pan with little hollows. Golden outside, fluffy inside, with icing sugar and jam.' },
    kidTip: { el: 'Χριστουγεννιάτικο γλυκό: το βρίσκεις στους πάγκους των χριστουγεννιάτικων αγορών από τα τέλη Νοεμβρίου. Βούτα το πρώτα στη μαρμελάδα, μετά στη ζάχαρη — και πρόσεχε, μέσα καίει!', en: 'A Christmas treat: you find them at Christmas-market stalls from late November. Dip in the jam first, then the sugar — and careful, they are very hot inside!' },
    funFact: { el: 'Το όνομα σημαίνει «φέτες μήλου»: οι παλιές συνταγές είχαν ένα κομματάκι μήλο στη μέση. Σήμερα σχεδόν κανένα δεν έχει μήλο, αλλά το όνομα έμεινε.', en: 'The name means “apple slices”: the old recipes had a piece of apple in the middle. Today hardly any have apple in them, but the name stayed.' },
    where: { el: 'Στις χριστουγεννιάτικες αγορές (julemarked) και σε καφέ τον Δεκέμβριο· τον υπόλοιπο χρόνο, κατεψυγμένα στο σούπερ μάρκετ.', en: 'At Christmas markets (julemarked) and in cafés in December; the rest of the year, frozen at the supermarket.' },
  },
  {
    id: 'kanelsnegl', emoji: '🐌', kind: 'sweet', brave: 1,
    name: { el: 'Κανέλσναϊλ (Kanelsnegl)', en: 'Kanelsnegl' },
    what: { el: 'Ένα μεγάλο, μαλακό ρολό ζύμης τυλιγμένο σαν σαλιγκάρι — αυτό σημαίνει και το όνομά του — με βούτυρο και κανέλα ανάμεσα στις στροφές και γλάσο από πάνω. Γλυκό και λίγο κολλώδες.', en: 'A big, soft roll of dough coiled like a snail — that is what its name means — with butter and cinnamon between the turns and icing on top. Sweet and a little sticky.' },
    kidTip: { el: 'Ζήτα το ευγενικά: «En kanelsnegl, tak». Τα μεγάλα φτάνουν άνετα για δύο. Το πρωί είναι ακόμη ζεστά από τον φούρνο.', en: 'Ask politely: “En kanelsnegl, tak”. The big ones easily feed two. In the morning they are still warm from the oven.' },
    funFact: { el: 'Πολλοί φούρνοι έχουν «σαλιγκάρι της Τετάρτης» (onsdagssnegl): κάθε Τετάρτη φτιάχνουν ένα ξεχωριστό, συχνά πιο μεγάλο ή πιο φθηνό, και οι ντόπιοι στήνονται στην ουρά γι’ αυτό.', en: 'Many bakeries have a “Wednesday snail” (onsdagssnegl): every Wednesday they make a special one, often bigger or cheaper, and the locals queue up for it.' },
    where: { el: 'Σε φούρνους (bageri) και καφέ — καλύτερα το πρωί, όσο είναι φρέσκα.', en: 'In bakeries (bageri) and cafés — best in the morning while they are fresh.' },
  },
  {
    id: 'ol', emoji: '🍺', kind: 'drink', brave: 1, adultsOnly: true,
    name: { el: 'Μπίρα (Øl)', en: 'Beer (Øl)' },
    what: { el: 'Το ποτό για το οποίο φημίζεται η Κοπεγχάγη εδώ και αιώνες — μόνο για τους γονείς.', en: 'The drink Copenhagen has been famous for over the centuries — for the parents only.' },
    kidTip: { el: 'Τα παιδιά μπορούν να δουν την παλιά συνοικία των ζυθοποιείων στα δυτικά της πόλης, όπου τέσσερις πέτρινοι ελέφαντες κρατούν μια ολόκληρη πύλη στην πλάτη τους.', en: 'Kids can see the old brewery district in the west of the city, where four stone elephants carry a whole gateway on their backs.' },
    funFact: { el: 'Η κλίμακα pH που μαθαίνετε στη χημεία εφευρέθηκε το 1909 στο εργαστήριο ενός ζυθοποιείου της Κοπεγχάγης, από έναν χημικό που έλεγχε την ποιότητα της μπίρας.', en: 'The pH scale you learn in chemistry was invented in 1909 in the laboratory of a Copenhagen brewery, by a chemist checking the quality of the beer.' },
    where: { el: 'Σε παλιομοδίτικα μπαρ της γειτονιάς (bodega) και σε καφέ.', en: 'In old-fashioned neighbourhood pubs (bodega) and cafés.' },
  },
];
