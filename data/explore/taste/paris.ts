/**
 * WiseBot Explorer · Γεύσεις του Παρισιού / A taste of Paris
 * Written for a family with a 7–12 year old: what it is, a tip for the kids, one fact for
 * the parents, and the kind of place that serves it. No business names. Wine and coffee only
 * as a note for the parents.
 */
import type { TasteItem } from '../types';

export const TASTE: TasteItem[] = [
  {
    id: 'croissant', emoji: '🥐', kind: 'sweet', brave: 1,
    name: { el: 'Κρουασάν (Croissant)', en: 'Croissant' },
    what: { el: 'Ένα ψωμάκι σε σχήμα μισοφέγγαρου από εκατοντάδες λεπτές στρώσεις ζύμης με βούτυρο. Τραγανό απ’ έξω, αφράτο μέσα, και αφήνει ψίχουλα παντού.', en: 'A crescent-shaped roll made of hundreds of thin layers of buttery dough. Crisp outside, fluffy inside, and it leaves crumbs everywhere.' },
    kidTip: { el: 'Πάρ’ το το πρωί, όσο είναι ακόμη ζεστό από τον φούρνο. Ζήτα «un croissant, s’il vous plaît» (εν κρουασάν, σιλ βου πλε).', en: 'Get one in the morning while it is still warm from the oven. Ask for “un croissant, s’il vous plaît”.' },
    funFact: { el: 'Το σχήμα του ήρθε από τη Βιέννη: λέγεται ότι Αυστριακοί φούρναρηδες έφεραν το «kipferl» στο Παρίσι τον 19ο αιώνα και οι Γάλλοι το έκαναν με σφολιάτα.', en: 'The shape came from Vienna: the story goes that Austrian bakers brought the “kipferl” to Paris in the 19th century and the French remade it with puff pastry.' },
    where: { el: 'Σε κάθε φούρνο (boulangerie) — κοίτα για την ουρά το πρωί.', en: 'In any bakery (boulangerie) — look for the morning queue.' },
  },
  {
    id: 'crepe', emoji: '🥞', kind: 'snack', brave: 1,
    name: { el: 'Κρέπα (Crêpe)', en: 'Crêpe' },
    what: { el: 'Μια πολύ λεπτή τηγανίτα, μεγάλη σαν πιάτο, που την απλώνουν σε καυτή πλάκα και τη διπλώνουν σε τρίγωνο με ζάχαρη, μαρμελάδα ή σοκολάτα.', en: 'A very thin pancake, as big as a plate, spread on a hot iron and folded into a triangle with sugar, jam or chocolate spread.' },
    kidTip: { el: 'Η κλασική για παιδιά είναι «beurre-sucre» (βούτυρο και ζάχαρη). Πρόσεχε, η πρώτη μπουκιά καίει!', en: 'The classic for kids is “beurre-sucre” (butter and sugar). Careful, the first bite is hot!' },
    funFact: { el: 'Στις 2 Φεβρουαρίου, τη Σαντελέρ (Chandeleur), οι Γάλλοι φτιάχνουν κρέπες στο σπίτι και λέγεται ότι όποιος τις αναποδογυρίσει στον αέρα με ένα νόμισμα στο άλλο χέρι θα έχει τύχη όλο τον χρόνο.', en: 'On 2 February, La Chandeleur, French families make crêpes at home, and the story goes that flipping one in the air with a coin in your other hand brings a year of luck.' },
    where: { el: 'Σε πλανόδιους πάγκους στους δρόμους και σε κρεπερί (crêperie).', en: 'At street stands and in crêperies.' },
  },
  {
    id: 'croque-monsieur', emoji: '🥪', kind: 'dish', brave: 1,
    name: { el: 'Κροκ-μεσιέ (Croque-monsieur)', en: 'Croque-monsieur' },
    what: { el: 'Ένα ζεστό τοστ με ζαμπόν και τυρί, ψημένο μέχρι το τυρί από πάνω να γίνει χρυσαφένια κρούστα. Με αυγό τηγανητό από πάνω λέγεται «croque-madame».', en: 'A hot ham-and-cheese toastie, baked until the cheese on top turns into a golden crust. With a fried egg on top it becomes a “croque-madame”.' },
    kidTip: { el: 'Το πιο σίγουρο πιάτο σε κάθε καφέ όταν το μενού μοιάζει δύσκολο. Τρώγεται με μαχαιροπίρουνο, είναι πολύ ζεστό.', en: 'The safest dish in any café when the menu looks hard. Eat it with a knife and fork, it is very hot.' },
    funFact: { el: 'Το όνομα σημαίνει «τραγάνισε-κύριε». Εμφανίστηκε στα μενού των παρισινών καφέ γύρω στο 1910.', en: 'The name means “crunch-mister”. It appeared on Parisian café menus around 1910.' },
    where: { el: 'Σε κάθε καφέ και μπρασερί (brasserie), όλη μέρα.', en: 'In any café or brasserie, all day.' },
  },
  {
    id: 'baguette', emoji: '🥖', kind: 'snack', brave: 1,
    name: { el: 'Μπαγκέτα (Baguette)', en: 'Baguette' },
    what: { el: 'Το μακρύ, λεπτό ψωμί της Γαλλίας με την τραγανή κόρα. Οι Παριζιάνοι το κουβαλούν κάτω από τη μασχάλη και τσιμπολογούν τη μύτη του πριν φτάσουν σπίτι.', en: 'France’s long, thin loaf with the crackly crust. Parisians carry it under one arm and nibble the tip before they get home.' },
    kidTip: { el: 'Ζήτα μια «tradition» (τραντισιόν): είναι η παραδοσιακή, με πιο τραγανή κόρα. Η μύτη (le quignon) είναι το καλύτερο κομμάτι — διεκδίκησέ τη!', en: 'Ask for a “tradition”: the traditional one, with the crunchiest crust. The tip (le quignon) is the best bit — claim it!' },
    funFact: { el: 'Το 2022 η UNESCO έβαλε την τέχνη της μπαγκέτας στον κατάλογο της άυλης πολιτιστικής κληρονομιάς. Κάθε χρόνο το Παρίσι διοργανώνει διαγωνισμό για την καλύτερη μπαγκέτα της πόλης.', en: 'In 2022 UNESCO added the craft of the baguette to its list of intangible cultural heritage. Every year Paris holds a contest for the best baguette in town.' },
    where: { el: 'Σε κάθε φούρνο (boulangerie), όλη μέρα, ζεστή αν είσαι τυχερός.', en: 'In any bakery (boulangerie), all day, warm if you are lucky.' },
  },
  {
    id: 'macaron', emoji: '🍬', kind: 'sweet', brave: 1,
    name: { el: 'Μακαρόν (Macaron)', en: 'Macaron' },
    what: { el: 'Δύο μικρά, στρογγυλά μπισκότα από αμύγδαλο, σε όλα τα χρώματα, κολλημένα με κρέμα. Τραγανά απ’ έξω, μαλακά μέσα. Έχει αμύγδαλο, δηλαδή ξηρούς καρπούς.', en: 'Two small, round almond biscuits in every colour, stuck together with cream. Crisp outside, soft inside. It contains almonds, so nuts.' },
    kidTip: { el: 'Διάλεξε δύο ή τρία χρώματα και μάντεψε τη γεύση πριν δαγκώσεις. Μην τα μπερδέψεις με τα «macaroni» ζυμαρικά!', en: 'Pick two or three colours and guess the flavour before you bite. Do not mix them up with “macaroni” pasta!' },
    funFact: { el: 'Το μακαρόν με τη γέμιση, όπως το ξέρουμε σήμερα, λέγεται ότι το τελειοποίησαν ζαχαροπλάστες του Παρισιού στις αρχές του 20ού αιώνα· τα παλιά μακαρόν ήταν μονά, χωρίς κρέμα.', en: 'The filled macaron as we know it is said to have been perfected by Paris pastry chefs in the early 20th century; older macarons were single, without cream.' },
    where: { el: 'Σε ζαχαροπλαστεία (pâtisserie) — στις βιτρίνες μοιάζουν με χρωματιστά κουμπιά.', en: 'In pastry shops (pâtisserie) — in the windows they look like coloured buttons.' },
  },
  {
    id: 'steak-frites', emoji: '🍟', kind: 'dish', brave: 2,
    name: { el: 'Στεκ-φριτ (Steak-frites)', en: 'Steak-frites' },
    what: { el: 'Μπριζόλα με τηγανητές πατάτες, το πιο συνηθισμένο πιάτο στα καφέ του Παρισιού. Οι Γάλλοι το τρώνε συχνά «ροζ» μέσα.', en: 'Steak with fries, the most common dish in Parisian cafés. The French often eat it pink in the middle.' },
    kidTip: { el: 'Αν δεν σου αρέσει ροζ, ζήτα το «bien cuit» (μπιεν κουί) = καλοψημένο. Οι πατάτες τρώγονται με το χέρι, κανείς δεν θα σε μαλώσει.', en: 'If you do not like it pink, ask for it “bien cuit” = well done. The fries are finger food, nobody will tell you off.' },
    funFact: { el: 'Το Βέλγιο και η Γαλλία μαλώνουν εδώ και χρόνια για το ποιος εφηύρε τις τηγανητές πατάτες — και οι δύο τις λένε δικές τους.', en: 'Belgium and France have argued for years over who invented fries — both call them their own.' },
    where: { el: 'Σε μπρασερί και μπιστρό, το μεσημέρι με το «menu du jour».', en: 'In brasseries and bistros, at lunchtime with the “menu du jour”.' },
  },
  {
    id: 'chocolat-chaud', emoji: '☕', kind: 'drink', brave: 1,
    name: { el: 'Ζεστή σοκολάτα (Chocolat chaud)', en: 'Hot chocolate (Chocolat chaud)' },
    what: { el: 'Πηχτή, σκούρα ζεστή σοκολάτα που την τρως σχεδόν με κουτάλι, συχνά με ένα βουνό σαντιγί από πάνω. Το χειμωνιάτικο ρόφημα των παιδιών του Παρισιού.', en: 'Thick, dark hot chocolate you almost eat with a spoon, often with a mountain of whipped cream on top. The winter drink of Paris kids.' },
    kidTip: { el: 'Στα καφέ φέρνουν ένα μικρό μπρίκι και σερβίρεις μόνος σου — ρίξ’ το σιγά για να μη χυθεί.', en: 'Cafés bring a little jug and you pour it yourself — go slowly so it does not spill.' },
    funFact: { el: 'Η σοκολάτα έφτασε στη Γαλλία τον 17ο αιώνα μέσω της βασιλικής αυλής, και για χρόνια ήταν ποτό μόνο για πλούσιους.', en: 'Chocolate reached France in the 17th century through the royal court, and for years it was a drink only for the rich.' },
    where: { el: 'Σε καφέ και σαλόνια τσαγιού (salon de thé), ιδίως τον χειμώνα.', en: 'In cafés and tea rooms (salon de thé), especially in winter.' },
  },
  {
    id: 'cafe-creme', emoji: '🍷', kind: 'drink', brave: 1, adultsOnly: true,
    name: { el: 'Καφές και κρασί στο καφέ (Café crème, vin)', en: 'Coffee and wine at the café (Café crème, vin)' },
    what: { el: 'Ο καφές με γάλα στο πεζοδρόμιο και το ποτήρι κρασί με το φαγητό — μόνο για τους γονείς.', en: 'Milky coffee on the pavement terrace and a glass of wine with the meal — for the parents only.' },
    kidTip: { el: 'Στα παρισινά καφέ οι καρέκλες κοιτούν προς τον δρόμο: το παιχνίδι για όλη την οικογένεια είναι να παρατηρείς τον κόσμο που περνάει.', en: 'In Paris cafés the chairs face the street: the whole family’s game is people-watching.' },
    funFact: { el: 'Το Παρίσι έχει χιλιάδες καφέ με τραπεζάκια στο πεζοδρόμιο· η «terrasse» είναι από τις πιο αγαπημένες συνήθειες της πόλης.', en: 'Paris has thousands of cafés with pavement tables; the “terrasse” is one of the city’s favourite habits.' },
    where: { el: 'Σε κάθε γωνιά — κυριολεκτικά.', en: 'On every corner — literally.' },
  },
];
