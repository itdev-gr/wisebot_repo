/**
 * WiseBot Explorer · Γεύσεις της Λισαβόνας / A taste of Lisbon
 * Written for a family with a 7–12 year old: what it is, a tip for the kids, one fact for
 * the parents, and the kind of place that serves it. No business names. The cherry
 * liqueur only as a note for the parents.
 */
import type { TasteItem } from '../types';

export const TASTE: TasteItem[] = [
  {
    id: 'pastel-de-nata', emoji: '🥧', kind: 'sweet', brave: 1,
    name: { el: 'Πάστελ ντε νάτα (Pastel de nata)', en: 'Pastel de nata' },
    what: { el: 'Ένα μικρό ταρτάκι με τραγανή, φυλλωτή σφολιάτα, γεμάτο κρέμα αυγού που καίγεται λίγο από πάνω και κάνει καφέ βουλίτσες. Γλυκό, ζεστό και τελειώνει σε τρεις μπουκιές.', en: 'A little tart of crisp, flaky pastry filled with egg custard, scorched on top into brown speckles. Sweet, warm and gone in three bites.' },
    kidTip: { el: 'Στο Μπελέμ τα πουλάνε ακόμη ζεστά από τον φούρνο, με κανέλα από πάνω. Πες στο ταμείο «um pastel, por favor» (ουμ παστέλ, πορ φαβόρ) — και ίσως ένα δεύτερο για τον δρόμο.', en: 'In Belém they are sold still warm from the oven, with a shake of cinnamon on top. Say “um pastel, por favor” (oom pash-TEL, por fa-VOR) at the counter — and maybe a second one for the road.' },
    funFact: { el: 'Γεννήθηκε στο Μπελέμ: όταν το μοναστήρι των Ιερωνυμιτών έκλεισε το 1834, η συνταγή των μοναχών πέρασε σε ένα ζαχαροπλαστείο δίπλα του, που την πουλάει από το 1837 και τη λέει ακόμη μυστική. Μόνο εκεί λέγεται «pastel de Belém» — παντού αλλού είναι pastel de nata.', en: 'It was born in Belém: when the Jerónimos Monastery closed in 1834, the monks’ recipe passed to a pastry shop next door, which has sold it since 1837 and still calls it a secret. Only there is it named “pastel de Belém” — everywhere else it is a pastel de nata.' },
    where: { el: 'Σε κάθε ζαχαροπλαστείο (pastelaria) της πόλης — και στο Μπελέμ, όπου η ουρά στο πεζοδρόμιο σου δείχνει τον δρόμο.', en: 'In any pastry shop (pastelaria) in town — and in Belém, where the queue on the pavement shows you the way.' },
  },
  {
    id: 'bifana', emoji: '🥖', kind: 'snack', brave: 1,
    name: { el: 'Μπιφάνα (Bifana)', en: 'Bifana' },
    what: { el: 'Λεπτές φέτες χοιρινό, μαριναρισμένες με σκόρδο και ψημένες στο τηγάνι, μέσα σε ένα αφράτο ψωμάκι που ρουφάει τον ζουμό τους. Ζεστό, μαλακό και αλμυρό — κάτι σαν το σουβλάκι σε ψωμί της Λισαβόνας.', en: 'Thin slices of pork marinated with garlic and cooked in a pan, tucked into a soft bread roll that soaks up the juices. Warm, soft and salty — Lisbon’s answer to a souvlaki in pita.' },
    kidTip: { el: 'Στον πάγκο υπάρχουν μουστάρδα και καυτερή σάλτσα (piri-piri) — μη βάλεις αν δεν θέλεις. Ζήτα «uma bifana, por favor» (ούμα μπιφάνα, πορ φαβόρ), ή «sem picante» για χωρίς καυτερό.', en: 'Mustard and hot sauce (piri-piri) sit on the counter — leave them out if you like. Ask for “uma bifana, por favor” (OO-ma bee-FA-na, por fa-VOR), or “sem picante” for no heat.' },
    funFact: { el: 'Λέγεται ότι γεννήθηκε στη Βέντας Νόβας, μια μικρή πόλη του Αλεντέζο περίπου μία ώρα από τη Λισαβόνα, όπου οι ταβέρνες στον δρόμο τη σερβίρουν ακόμη στους ταξιδιώτες. Το όνομα βγαίνει από το «bife», που θα πει μπριζόλα.', en: 'The story goes that it was born in Vendas Novas, a small town in the Alentejo about an hour from Lisbon, where roadside taverns still serve it to travellers. The name comes from “bife”, the word for steak.' },
    where: { el: 'Σε μικρά καφέ και ταβερνάκια (tascas) με τον πάγκο μπροστά — ψάξε την ταμπέλα «bifanas» στην πόρτα.', en: 'In small cafés and taverns (tascas) with a counter at the front — look for a “bifanas” sign on the door.' },
  },
  {
    id: 'sardinhas-assadas', emoji: '🐟', kind: 'dish', brave: 2,
    name: { el: 'Σαρδίνιας ασάδας (Sardinhas assadas)', en: 'Grilled sardines (Sardinhas assadas)' },
    what: { el: 'Ολόκληρες σαρδέλες ψημένες στα κάρβουνα μέχρι να μαυρίσει λίγο το δέρμα τους, με χοντρό αλάτι, βραστές πατάτες και σαλάτα από ψητές πιπεριές. Καπνιστές, αλμυρές και μαλακές μέσα.', en: 'Whole sardines grilled over charcoal until the skin blisters, with coarse salt, boiled potatoes and a salad of roasted peppers. Smoky, salty and soft inside.' },
    kidTip: { el: 'Έχουν πολλά ψιλά κοκαλάκια: τράβα το κεντρικό κόκαλο από την ουρά και βγαίνει όλο μαζί — ή ζήτα βοήθεια. Τον Ιούνιο είναι μεγάλες και παχιές· τον χειμώνα δύσκολα τις βρίσκεις φρέσκιες.', en: 'They have lots of small bones: pull the backbone out from the tail and it comes away in one piece — or ask for help. In June they are big and fat; in winter they are hard to find fresh.' },
    funFact: { el: 'Τη νύχτα 12 προς 13 Ιουνίου η Λισαβόνα γιορτάζει τον Άγιο Αντώνιο, που γεννήθηκε στην πόλη: τα σοκάκια της Αλφάμα γεμίζουν χάρτινες γιρλάντες, γλαστράκια βασιλικού και ψησταριές με σαρδέλες — και η σαρδέλα έχει γίνει το σύμβολο της γιορτής.', en: 'On the night of 12–13 June Lisbon celebrates Saint Anthony, who was born in the city: the alleys of Alfama fill with paper garlands, little pots of basil and grills of sardines — and the sardine has become the festival’s symbol.' },
    where: { el: 'Σε ταβέρνες με ψησταριά στην πόρτα, στην Αλφάμα και στη Μουράρια — και τον Ιούνιο μέσα στα σοκάκια, από πάγκους στον δρόμο.', en: 'In taverns with a grill by the door in Alfama and Mouraria — and in June in the alleys themselves, from street stalls.' },
  },
  {
    id: 'pao-de-deus', emoji: '🥥', kind: 'sweet', brave: 1,
    name: { el: 'Πάο ντε Ντέους (Pão de Deus)', en: 'Pão de Deus' },
    what: { el: 'Ένα αφράτο, ελαφρά γλυκό ψωμάκι με μια τραγανή κορυφή από καρύδα και ζάχαρη. Μαλακό σαν τσουρέκι, λίγο πιο απλό.', en: 'A fluffy, lightly sweet bun with a crunchy top of coconut and sugar. Soft like a brioche, a bit plainer.' },
    kidTip: { el: 'Οι ντόπιοι το τρώνε για πρωινό, σκέτο ή ζεστό «com fiambre e queijo» (με ζαμπόν και τυρί) — γλυκό και αλμυρό μαζί. Ζήτα «um pão de Deus, por favor» (ουμ πάο ντε Ντέους, πορ φαβόρ).', en: 'Locals have it for breakfast, plain or warmed “com fiambre e queijo” (with ham and cheese) — sweet and salty at once. Ask for “um pão de Deus, por favor” (oom pow de DAY-oosh, por fa-VOR).' },
    funFact: { el: 'Το όνομα σημαίνει «ψωμί του Θεού»: την 1η Νοεμβρίου, των Αγίων Πάντων, τα παιδιά στην Πορτογαλία χτυπούν πόρτες ζητώντας «pão por Deus» και παίρνουν γλυκά, ξηρούς καρπούς και ψωμάκια — λένε ότι από αυτό το έθιμο πήρε το όνομά του.', en: 'The name means “bread of God”: on 1 November, All Saints’ Day, children in Portugal knock on doors asking for “pão por Deus” and are given sweets, nuts and little buns — the bun is said to take its name from that custom.' },
    where: { el: 'Σε φούρνους και ζαχαροπλαστεία, στη βιτρίνα δίπλα στα κρουασάν — ψάξε το ψωμάκι με το άσπρο καπέλο.', en: 'In bakeries and pastry shops, in the window next to the croissants — look for the bun with the white hat.' },
  },
  {
    id: 'bacalhau-a-bras', emoji: '🍳', kind: 'dish', brave: 2,
    name: { el: 'Μπακαλιάου α Μπρας (Bacalhau à Brás)', en: 'Bacalhau à Brás' },
    what: { el: 'Ψιλοκομμένος μπακαλιάρος ανακατεμένος με τηγανητές πατάτες σαν κλωστές και αυγά, όλα μαζί σε μια κίτρινη, αφράτη μάζα με μαύρες ελιές και μαϊντανό. Αλμυρό, μαλακό και τραγανό ταυτόχρονα.', en: 'Shredded salt cod scrambled together with matchstick fried potatoes and eggs into a golden, fluffy tangle, topped with black olives and parsley. Salty, soft and crunchy all at once.' },
    kidTip: { el: 'Δεν έχει κόκαλα, γιατί το ψάρι είναι ψιλοκομμένο — και μοιάζει με ομελέτα με πατάτες. Αν δεν σου αρέσουν οι ελιές, σπρώξε τες στην άκρη ή ζήτα το «sem azeitonas».', en: 'No bones, because the fish is shredded — and it looks like an omelette with chips. If you do not like olives, push them aside or ask for it “sem azeitonas”.' },
    funFact: { el: 'Λέγεται ότι το επινόησε ένας ταβερνιάρης με το όνομα Μπρας στο Μπάιρο Άλτο, τη γειτονιά με τα στενά σοκάκια πάνω από το κέντρο — γι’ αυτό το πιάτο έχει το όνομά του.', en: 'The story goes that it was invented by a tavern keeper named Brás in Bairro Alto, the neighbourhood of narrow streets above the centre — which is why the dish carries his name.' },
    where: { el: 'Σε παραδοσιακές ταβέρνες και εστιατόρια, συχνά ως πιάτο ημέρας στον πίνακα της εισόδου.', en: 'In traditional taverns and restaurants, often as the dish of the day on the board at the door.' },
  },
  {
    id: 'arroz-doce', emoji: '🍚', kind: 'sweet', brave: 1,
    name: { el: 'Αρρός ντόσε (Arroz doce)', en: 'Arroz doce' },
    what: { el: 'Ρυζόγαλο με φλούδα λεμονιού και κρόκο αυγού, πιο πηχτό και πιο κίτρινο από το δικό μας, με σχέδια από κανέλα ζωγραφισμένα από πάνω. Κρύο, γλυκό και βελούδινο.', en: 'Rice pudding with lemon peel and egg yolk, thicker and yellower than the one you may know, with patterns of cinnamon drawn on top. Cold, sweet and velvety.' },
    kidTip: { el: 'Σερβίρεται σε μικρά πιατάκια, σαν επιδόρπιο. Κοίτα καλά το σχέδιο από κανέλα πριν το χαλάσεις με το κουτάλι — κάθε μαγαζί ζωγραφίζει το δικό του.', en: 'It comes in small dishes, as a dessert. Take a good look at the cinnamon pattern before you spoil it with your spoon — every place draws its own.' },
    funFact: { el: 'Στις γιορτές και στους γάμους τα σχέδια από κανέλα γίνονται γράμματα: πάνω στο ρυζόγαλο γράφουν με κανέλα το όνομα ή τα αρχικά αυτού που γιορτάζει.', en: 'At parties and weddings the cinnamon pattern turns into letters: the name or initials of the person being celebrated are written in cinnamon on top of the pudding.' },
    where: { el: 'Σε ζαχαροπλαστεία (pastelarias), στη βιτρίνα με τα γλυκά, και στον κατάλογο των επιδορπίων κάθε ταβέρνας.', en: 'In pastry shops (pastelarias), in the sweets window, and on the dessert list of any tavern.' },
  },
  {
    id: 'sumo-de-laranja', emoji: '🍊', kind: 'drink', brave: 1,
    name: { el: 'Σούμο ντε λαράνζα (Sumo de laranja)', en: 'Orange juice (Sumo de laranja)' },
    what: { el: 'Φρεσκοστυμμένος χυμός πορτοκάλι, που τον στύβουν μπροστά σου στον πάγκο του καφέ. Στα περισσότερα μαγαζιά θα βρεις και την πορτογαλική πορτοκαλάδα με ανθρακικό, που έχει αληθινό χυμό μέσα.', en: 'Freshly squeezed orange juice, made in front of you at the café counter. Most places also sell the Portuguese fizzy orange drink, made with real juice — like a peeled orange with bubbles.' },
    kidTip: { el: 'Ζήτα «um sumo de laranja natural, por favor» (ουμ σούμο ντε λαράνζα νατουράλ, πορ φαβόρ) — το «natural» σημαίνει φρεσκοστυμμένος. Ταιριάζει τέλεια με ένα πάστελ ντε νάτα το πρωί.', en: 'Ask for “um sumo de laranja natural, por favor” (oom SOO-mo de la-RAN-zha na-too-RAL, por fa-VOR) — “natural” means freshly squeezed. Perfect with a pastel de nata in the morning.' },
    funFact: { el: 'Η λέξη «πορτοκάλι» βγαίνει από την… Πορτογαλία! Οι Πορτογάλοι ναυτικοί έφεραν τα γλυκά πορτοκάλια από την Ασία στην Ευρώπη τον 16ο αιώνα, και σε πολλές γλώσσες — ελληνικά, τουρκικά, αραβικά — το φρούτο πήρε το όνομα της χώρας.', en: 'The Greek word for orange, “portokali”, comes from… Portugal! Portuguese sailors brought sweet oranges from Asia to Europe in the 16th century, and in many languages — Greek, Turkish, Arabic — the fruit took the country’s name.' },
    where: { el: 'Σε κάθε καφέ και ζαχαροπλαστείο — ψάξε τον στίφτη με τον σωρό από πορτοκάλια πάνω στον πάγκο.', en: 'In every café and pastry shop — look for the juicer with a pile of oranges on the counter.' },
  },
  {
    id: 'ginjinha', emoji: '🍒', kind: 'drink', brave: 1, adultsOnly: true,
    name: { el: 'Ζινζίνια (Ginjinha)', en: 'Ginjinha' },
    what: { el: 'Το λικέρ από βύσσινο της Λισαβόνας, που σερβίρεται σε ποτηράκι όσο μια δαχτυλήθρα, με ή χωρίς ένα βύσσινο μέσα — μόνο για τους γονείς.', en: 'Lisbon’s sour-cherry liqueur, served in a thimble-sized glass with or without a cherry in it — for the parents only.' },
    kidTip: { el: 'Τα παιδιά μπορούν να δουν τα μικροσκοπικά μαγαζάκια-παράθυρα γύρω από την πλατεία Ροσίου, όπου οι μεγάλοι στέκονται όρθιοι στο πεζοδρόμιο. Το ίδιο φρούτο (ginja) θα το βρουν σε μαρμελάδα και παγωτό.', en: 'Kids can spot the tiny hole-in-the-wall bars around Rossio square, where grown-ups stand on the pavement. The same fruit (ginja, a sour cherry) also turns up in jam and ice cream.' },
    funFact: { el: 'Λέγεται ότι την πρωτοέφτιαξε γύρω στο 1840 ένας μοναχός από την εκκλησία του Αγίου Αντωνίου, μουλιάζοντας βύσσινα με ζάχαρη και κανέλα. Στον πάγκο σε ρωτούν «com ou sem?» — με ή χωρίς βύσσινο.', en: 'The story goes that a friar from the church of Saint Anthony first made it around 1840, steeping sour cherries with sugar and cinnamon. At the counter they ask “com ou sem?” — with or without the cherry.' },
    where: { el: 'Σε μικροσκοπικά όρθια μπαράκια γύρω από το Ροσίου και το Λάργκο ντε Σάο Ντομίνγκος, στο κέντρο.', en: 'In tiny stand-up bars around Rossio and Largo de São Domingos, in the centre.' },
  },
];
